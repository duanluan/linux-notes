---
title: Optimus 笔记本安装 Manjaro：黑屏、便携外屏、频繁卡死与迁移 Wayland 全记录
description: 在 ASUS TUF Gaming A14（AMD 核显 + RTX 5060）上全新安装 Manjaro KDE 的完整排障记录——从 GRUB 后黑屏、NVIDIA 模块内核目录错配，到 X11 下 AMDGPU fence 死锁导致的频繁卡死；切换 Wayland 解决了 greeter 黑屏和 fence 死锁两类问题，但没有解决所有卡死。
date: 2026-10-01
tags:
  - Manjaro
  - NVIDIA
  - AMD
  - KDE
  - Wayland
  - Linux
sidebar: false
---

# Optimus 笔记本安装 Manjaro：黑屏、便携外屏、频繁卡死与迁移 Wayland 全记录

`2026-10-01` · Manjaro · NVIDIA · AMD · Wayland

这篇博文记录了我在 ASUS TUF Gaming A14（FA401KM）笔记本上把 Windows 11 换成 Manjaro KDE 双系统的全部经历。导致大部分痛苦的硬件细节是：这是一台 **Optimus 混合显卡机器**——AMD Radeon 860M 核显加 NVIDIA RTX 5060 Laptop 独显，而且**内屏排线接在核显上**，不在独显上。

## 安装介质与安装流程

安装本身很顺利，还是老流程：

1. 用 Ventoy 制作 U 盘启动盘，把 Manjaro KDE Plasma ISO 放进去。
2. 开机按 `F2` 进 BIOS，在 `Save & Exit -> Boot Override` 里选 U 盘启动。
3. 在 Ventoy 里选 normal 模式启动镜像（有问题再退回 grub2 模式）。
4. 进 live 环境后把 tz 设为 `Asia/Shanghai`、lang 设为 `zh_CN`，选开源驱动启动。
5. 安装器里：全盘擦除、选**带休眠**的 swap（笔记本推荐）、不装办公套件。

装完拔掉 U 盘重启，GRUB 菜单正常出现，Windows 和 Manjaro 都在。选择 Manjaro——**黑屏**。真正的工作从这里开始。

## 第一次黑屏：RTX 5060 没有 NVIDIA 驱动

`Ctrl + Alt + F3` 能切进 TTY，说明内核启动正常，问题出在图形栈。查看显卡和已加载模块：

```shell
lspci | grep -iE "vga|3d"
lsmod | grep nvidia
```

加载的只有 `nvidia_wmi_ec_backlight`（背光小助手，不是驱动本体）和 nouveau。RTX 5060 是 Blackwell 架构，nouveau 带不动，于是计划装官方驱动：

```shell
sudo mhwd -a pci nonfree 0300
```

## 没有网络：手机 USB 共享联网

机器还没配 Wi-Fi，只能用安卓手机共享网络——Linux 内核自带 `rndis_host`/`cdc_ncm` 驱动，USB 共享网络即插即用：

1. 用数据线连手机，打开 USB 网络共享。
2. `ip a` 确认出现 `usb0` 接口。
3. 交给 NetworkManager 拿 IP，`ping` 验证。

这次的一个教训：手机一直在反复掉线重连（`dmesg` 里满屏 `USB disconnect`）。下载中途断网正是后面"半安装"状态的元凶，所以务必用好的数据线、插原生 USB 口。

## mhwd 安装失败：镜像源和 DNS 双双翻车

第一次装驱动以 `Error: pacman failed!` 告终。分到的镜像源完全不可用——pacman 挑中了一个乌拉圭源，速度不到 1 字节/秒；其余镜像 DNS 解析超时。修复：

```shell
echo "nameserver 223.5.5.5" | sudo tee /etc/resolv.conf
sudo pacman-mirrors -c China
sudo pacman -Syy
sudo mhwd -a pci nonfree 0300
```

换成国内镜像（TUNA/中科大/上交大）并设置可用 DNS 后，约 500 MB 的驱动几分钟就下完了。

## `loadkmap: short read`，以及一个不存在的模块

驱动装完，下次开机显示 `loadkmap: short read`。这条消息本身只是 initramfs 键盘映射的无害警告（它真正成为主角的一次，见[早前那篇博文](./2026-08-11-manjaro-nvidia-black-screen.md)）。真正的故障仍然是 SDDM：

```text
sddm[755]: Failed to read display number from pipe
Could not start Display server on vt 2
```

而且模块压根没加载：

```shell
sudo modprobe nvidia
# modprobe: FATAL: Module nvidia not found in directory /lib/modules/7.1.8-1-MANJARO
```

两个常见嫌疑很快被排除：

- **Secure Boot**：BIOS 里已经是关闭状态。
- **驱动/用户态版本错配**：`linux71-nvidia-open 610.57.04-6` 与 `nvidia-utils 610.57.04-1` 完全对齐。

真凶在列出驱动包文件时现形：

```shell
pacman -Ql linux71-nvidia-open | grep "\.ko"
# /usr/lib/modules/7.1.9-1-MANJARO/extramodules/nvidia-drm.ko.zst
# ...
```

驱动模块是给 **7.1.9** 内核编译的，而系统装着、跑着的是 **7.1.8**。pacman 数据库里包是"已安装"，但对正在运行的内核来说模块不存在。单独重装驱动包无济于事，正解是完整升级让内核和模块对齐：

```shell
sudo pacman -Syu
sudo reboot
```

进入 7.1.9 后 `modprobe nvidia` 成功，`nvidia-smi` 打出了 RTX 5060 的表格。

## 第二次黑屏：X 渲染正常，画面到不了内屏

驱动通了，下次开机依然黑屏，左上角一个光标。`nvidia-smi` 里甚至能看到 `Xorg` 和 `sddm-greeter-qt6` 已经跑在 GPU 上——X 在渲染，但画面从没送到内屏。

枚举 DRM 接口解释了一切：

```text
card0-DP-8, card0-eDP-2, card0-HDMI-A-2        # NVIDIA 独显
card1-DP-1..7, card1-eDP-1, card1-HDMI-A-1     # AMD 核显
card1-eDP-1: connected
```

内屏（`eDP-1`）挂在 **AMD 核显**上，而 mhwd 生成的 `/etc/X11/xorg.conf.d/90-mhwd.conf` 是老式 `nvidia-xconfig` 单显卡模板：没有 `OutputClass`、没有 PRIME 反向输出链、没有 `AllowEmptyInitialConfiguration`。X 在独显上渲染，没有任何通道把画面送到接在核显上的内屏。

X11 侧的修复：

1. 把老配置挪走：`sudo mv /etc/X11/xorg.conf.d/90-mhwd.conf /etc/X11/xorg.conf.d/90-mhwd.conf.bak`
2. 确认 `nvidia_drm` 的 modeset 已启用（`/etc/modprobe.d/` 里的 `options nvidia_drm modeset=1`；新版 nvidia-open 默认已开）。
3. 清理 mhwd 留在 `/etc/modprobe.d/mhwd-gpu.conf` 里的过时屏蔽（`blacklist drm`、`blacklist ttm`、`blacklist drm_kms_helper`）——那是给上古 390xx 驱动防冲突用的，对 nvidia-open 有百害而无一利。
4. `sudo mkinitcpio -P` 后重启。

## 便携外屏阶段

即便如此，SDDM 在内屏上仍然一片漆黑。决定性的实验：用 HDMI 接上便携外接屏——登录界面**只出现在外屏上**，而登进 KDE 之后内屏也跟着亮了。

这个现象补上了最后一块拼图：greeter 阶段只激活了 X 的默认输出（独显的 HDMI），而 KDE 的 kwin 在会话启动后会启用所有检测到的输出。整条"渲染到面板"的路径都是通的，缺的只是 greeter 阶段这一环。

## X11 下的频繁卡死：AMDGPU Fence 死锁

故事还没完。X11 下机器开始频繁卡死：打字打着一锁死，快捷键全无响应，只能长按电源键强制关机。两个很有信息量的规律：

- 一整天只接便携屏用：一次都不卡。
- 卡死时**内屏先冻结**，便携屏有时还能动一会儿。

内核日志给出了死锁的直接证据：

```text
INFO: task kworker/u64:* blocked for more than 122 seconds.
Workqueue: events_unbound commit_work
amdgpu_display_get_crtc_scanoutpos
dma_fence_default_wait
drm_atomic_helper_wait_for_fences
commit_tail
```

每次卡死都是同一条时间线：KDE X11/KScreen 在登录后立刻通过 XRandR 恢复双屏布局，AMDGPU 的 DRM 原子提交等待一个永远不会完成的 DMA fence，显示工作队列线程进入不可中断的 `D` 状态，由核显驱动的内屏率先停止更新（独显驱动的便携屏多撑一阵）。

沿途排除过的嫌疑：把 KDE 里接电源/电池的挂起动作都改成"无操作"，拔掉便携屏后照样卡死；没启动过 RustDesk 的启动里也复现过卡死。临时缓解手段是停掉 `kscreen_backend_launcher` 让 KDE 不再反复提交显示配置，但已经阻塞的内核线程只能靠重启清掉。

## SDDM 和会话切换到 Wayland

与其继续跟 X11 PRIME 的边角问题和 fence 死锁搏斗，不如把显示管理器和会话整体迁到 Wayland，直接绕开反向 PRIME 输出通路：

```shell
sudo tee /etc/sddm.conf.d/99-wayland.conf <<'EOF'
[General]
DisplayServer=wayland
EOF
```

重启后，不需要任何外接屏，SDDM 直接在内屏显示登录界面，登录 Plasma (Wayland) 会话一切正常。同样的双屏布局再没触发过任何 `dma_fence` 等待、阻塞任务或 GPU 重置，X11 的这类死锁就此绝迹。

## 经验总结

- **混合显卡笔记本先查显示拓扑。** `ls /sys/class/drm/card*/` 一眼看出内屏归哪个 GPU；这台机器内屏在核显上，一切"NVIDIA 显卡负责显示"的 X11 默认假设从第一天起就是错的。
- **驱动包已安装但 `modprobe` 报 `Module not found`，大概率是内核/模块目录错配。** 用 `pacman -Ql` 列出包文件，比对版本目录和 `uname -r`；解法是完整的 `pacman -Syu`，不是重装驱动。
- **TTY 还能进的黑屏是用户态图形问题，不是装坏了系统。** GRUB 里临时加 nomodeset 是很好的单次诊断手段。
- **USB 共享网络是全新安装最快上网方式**——但不稳的数据线会造成半完成的安装事务，正是上面"已安装却失踪"那类问题的温床。
- **内屏在核显上的 Optimus 机器，Wayland 是阻力最小的路。** 它同时消灭了 greeter 黑屏和 X11 的 AMDGPU fence 死锁两类问题。
- 日志里那些 `nvidia_wmi_ec_backlight` 的 ACPI 报错在整个过程中都只是噪音，和上述任何一次故障无关（直到 2026-09，EC 背光控制才真正坏掉，成为另一个故事）。

## 后续（2026-10）：卡死并没有完全绝迹

补一句后续：切到 Wayland 后绝迹的只是 X11 那一类死锁。2026-10 机器又卡死过几次，其中 10-04 那次全屏冻住，内核日志里 amdgpu `Pageflip timed out! This is a bug in the amdgpu kernel driver` 刷了 312 条——核显显示层的提交超时，是上游驱动的 bug，和 X11 的 dma_fence 死锁不是一回事，也没有稳定的触发规律。目前没有解法，兜底手段是 REISUB 急救重启。结论修正为：Wayland 解决的是 greeter 黑屏和 X11 fence 死锁两类问题，不是所有卡死。
