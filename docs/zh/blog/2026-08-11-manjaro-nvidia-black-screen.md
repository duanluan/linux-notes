---
title: Manjaro 黑屏只显示 loadkmap short read，实际是 NVIDIA 模块缺失
description: 从黑屏上的 loadkmap short read 入手，在 TTY 中确认并恢复缺失的 NVIDIA 内核模块。
date: 2026-08-11
tags:
  - Manjaro
  - NVIDIA
  - KDE
  - Linux
sidebar: false
---

# Manjaro 黑屏只显示 `loadkmap: short read`，实际是 NVIDIA 模块缺失

`2026-08-11` · Manjaro · NVIDIA · KDE

电脑卡死并强制重启后，系统无法进入 KDE，黑屏上只显示：

```text
loadkmap: short read
```

## 进入 TTY 检查 SDDM

按 `Ctrl + Alt + F2` 进入 TTY，检查 SDDM 状态和本次启动日志：

```shell
systemctl status sddm --no-pager
journalctl -b -u sddm --no-pager
```

日志中出现：

```text
NVIDIA: Failed to initialize the NVIDIA kernel module
no screens found
Could not start Display server on vt 2
```

这说明 SDDM 无法启动图形界面，是因为 NVIDIA 内核模块初始化失败，而不是屏幕上那条 `loadkmap` 提示直接造成的。

## 确认 NVIDIA 模块包被删除

继续查询 pacman 日志：

```shell
grep -n 'linux618-nvidia-open' /var/log/pacman.log
```

查询结果表明，之前一次批量清理孤立包时，`pacman -Qtdq` 输出的完整包名列表被直接交给 `pacman -Rns`，`linux618-nvidia-open` 也被一起删除。系统在下次启动 `linux618` 时找不到对应的 NVIDIA 模块，因此无法进入 KDE。

内核包不一定声明依赖 NVIDIA 驱动，pacman 也无法根据当前硬件判断一个孤立包是否仍有实际用途，所以不能未经检查就批量删除 `pacman -Qdt` 列出的所有软件包。

## 恢复系统

`linux618-nvidia-open` 是本机使用的包名。其他机器应先确认当前内核和已安装的 NVIDIA 模块包：

```shell
uname -r
pacman -Qq | grep -E '^linux[0-9]+($|-nvidia(-open)?$)'
```

确认包名后，推荐使用普通的 `sudo` 命令恢复：

```shell
sudo pacman -Syu linux618-nvidia-open
localectl --no-convert set-keymap us
sudo mkinitcpio -P
sudo reboot
```

其中 `localectl` 没有加 `sudo`。本次操作时，执行 `sudo localectl --no-convert set-keymap us` 会报错，直接执行反而成功；当时没有保存完整错误内容，因此这里不进一步判断原因。

## 本次实际使用的命令

当时 TTY 能正常显示 `sudo` 密码提示，但输入密码后按回车没有任何反应，命令始终没有继续执行。最后临时使用 `sudo -S` 从标准输入传入密码：

```shell
sudo -S sh <<'EOF'
<当前用户密码>
pacman -Syu --noconfirm linux618-nvidia-open
EOF

localectl --no-convert set-keymap us

sudo -S sh <<'EOF'
<当前用户密码>
mkinitcpio -P
EOF

reboot
```

`sudo -S` 会从标准输入读取密码。

重启后能够正常进入 KDE 桌面。

## `loadkmap: short read` 为什么会出现

原来的 `/etc/vconsole.conf` 使用了本机不可用的键盘映射：

```ini
KEYMAP=cn
```

执行以下命令会将它改为有效的 `us`，随后 `mkinitcpio -P` 会重新生成 initramfs：

```shell
localectl --no-convert set-keymap us
sudo mkinitcpio -P
```

因此，`loadkmap: short read` 是黑屏上唯一可见的提示，但真正阻止 KDE 启动的是 NVIDIA 模块缺失。这两项都在本次恢复过程中得到处理。

## 避免再次误删

删除孤立包前，先逐项检查：

```shell
pacman -Qdt
```

不要把它的完整输出未经检查直接传给 `pacman -Rns`。尤其要留意当前内核对应的 NVIDIA、headers、VirtualBox 等配套模块。

如果一个仍然需要的软件包被标记为孤立包，可以先将它标记为显式安装：

```shell
sudo pacman -D --asexplicit linux618-nvidia-open
```

本次使用 `pacman -Syu linux618-nvidia-open` 重新安装后，该包也会被记为显式安装。
