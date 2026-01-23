# 设备介绍

- AMD 锐龙 7 PRO 8845HS
- 32GBx2 DDR5 5600MHz
- PCIe 4.0 NVMe SSD 2TB

Geekbench 6 跑分结果：
- Deepin 23.1：[Tianbei GEM12 - Geekbench](https://browser.geekbench.com/v6/cpu/10922940)
- Xubuntu 24.04.2：[Tianbei GEM12 - Geekbench](https://browser.geekbench.com/v6/cpu/12633571)
- Manjaro KDE Plasma 25.0.3：[Tianbei GEM12 - Geekbench](https://browser.geekbench.com/v6/cpu/12680900)

# 备份旧发行版

我并没有备份整个系统，而只是将 home 目录压缩拷贝了出来。

```shell
# 将个人目录打包
sudo tar -cf /tmp/home_xxx.tar /home/xxx
# 新开终端查看打包后大小
watch -n 1 ls -lh /tmp/home_xxx.tar
```

# 系统配置

## 登录失败次数和锁定时间

```shell
# 修改 faillock 配置文件
$ sudo nano /etc/security/faillock.conf

# 在这个时间段内累计的失败次数如果超过 deny，则触发锁定。
fail_interval = 900
# 在 fail_interval 间隔内，允许连续输错密码的次数。超过此数值，账户将被锁定。设置为 0 表示不锁定账户。
deny = 10
# 账户被锁定后，需要等待多久才能自动解锁。设置为 0 或 never 表示必须手动通过 faillock 命令解锁。
unlock_time = 30
```

## Pacman 换源

如果在安装前选了时区和语言，`/etc/pacman.d/mirrorlist`开头会默认有`Country : China`的源。

```
##
## Manjaro Linux default mirrorlist
## Generated on 2025-06-30 23:48
##
## Please use 'pacman-mirrors -f [NUMBER] [NUMBER]' to modify mirrorlist
## (Use 0 for all mirrors)
##

## Country : China
Server = https://mirrors.jlu.edu.cn/manjaro/stable/$repo/$arch

## Country : United_States
Server = https://ohioix.mm.fcix.net/manjaro/stable/$repo/$arch

## Country : Bangladesh
Server = https://bd.mirror.vanehost.com/Manjaro/stable/$repo/$arch
```

如果没有，参考 [archlinux | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/archlinux/) 换源。

或者使用命令：

```shell
sudo pacman-mirrors -c china
```

## Pacman 配置

```shell
# 修改 Pacman 配置文件
sudo nano /etc/pacman.conf
```

- **启用 Pacman 颜色**：取消注释`#Color`为`Color`
- **调整并行下载线程数**：修改`ParallelDownloads = 4`的值

## 终端粘贴出现 ^[[200~

```shell
# 临时解决
$ printf "\e[?2004l"

# 永久解决，追加内容
$ nano ~/.zshrc

# 禁用 Zsh 的 Bracketed Paste Mode (解决粘贴出现 ^[[200~ 的问题)
unset zle_bracketed_paste
```

## ArchLinuxCN 源

```shell
# 在末尾添加 ArchLinuxCN 源并注释
sudo nano /etc/pacman.conf

# [archlinuxcn]
# Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch

# 启用源 (使用 sed 去掉行首的 #)
sudo sed -i 's/^# *\[\(archlinuxcn\)\]/[\1]/; s/^# *\(Server.*archlinuxcn\)/\1/' /etc/pacman.conf
# 首次使用时安装 ArchLinuxCN 的 GPG 密钥
sudo pacman -Sy archlinuxcn-keyring
# 刷新数据库 (仅同步数据库，不要进行全局更新 -Su)
sudo pacman -Sy
# 安装需要的软件
sudo pacman -S ttf-maplemono-nf-cn-unhinted
# 禁用源 (安装完成后立即恢复注释，防止系统更新时混用)
sudo sed -i 's/^\[\(archlinuxcn\)\]/# [\1]/; s/^\(Server.*archlinuxcn\)/# \1/' /etc/pacman.conf
```

## 加速 AUR 的 GitHub 下载和 git clone GitHub 仓库

安装 axel 多线程下载工具，创建替换 github 下载的脚本：

```shell
# 安装 axel
$ sudo pacman -S axel
# 创建脚本文件
$ sudo nano /home/duanluan/workspaces/bin/github-mirror-axel.sh
```
`github-mirror-axel.sh`：[shell-scripts/github-mirror-axel.sh at main · duanluan/shell-scripts](https://github.com/duanluan/shell-scripts/blob/main/github-mirror-axel.sh)
```shell
# 保存退出后赋予可执行权限
$ sudo chmod +x /home/duanluan/workspaces/bin/github-mirror-axel.sh
```

修改`makepkg.conf`：
```shell
# 复制 /etc/pacman.conf 到个人目录，避免系统更新 pacman 包时覆盖
cp /etc/makepkg.conf ~/.makepkg.conf

# 修改 ~/.makepkg.conf
nano ~/.makepkg.conf

# 找到 DLAGENTS 部分，修改为如下内容
DLAGENTS=('file::/usr/bin/curl -qgC - -o %o %u'
          #'ftp::/usr/bin/curl -qgfC - --ftp-pasv --retry 3 --retry-delay 3 -o %o %u'
          #'http::/usr/bin/curl -qgb "" -fLC - --retry 3 --retry-delay 3 -o %o %u'
          #'https::/usr/bin/curl -qgb "" -fLC - --retry 3 --retry-delay 3 -o %o %u'
          'ftp::/usr/bin/axel -n 10 -a -o %o %u'
          'http::/usr/bin/axel -n 10 -a -o %o %u'
          'https::/home/duanluan/workspaces/bin/github-mirror-axel.sh %o %u'
          'rsync::/usr/bin/rsync --no-motd -z %u %o'
          'scp::/usr/bin/scp -C %u %o')
```

遇到“没有状态文件，无法恢复下载！”提示，是因为之前使用 curl 下载到一半，现在又用 axel 下载。

删除缓存后重新下载，例如：

```shell
rm -rf ~/.cache/paru/clone/geekbench
paru geekbench
```

github 下载生效：

```shell
$ paru clash-verge-rev-bin

==> 获取源代码...
  -> 正在下载 clash-verge-rev-2.4.2-x86_64.deb...
github-mirror-axel.sh 生效
正在初始化下载：https://gh-proxy.com/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.2/Clash.Verge_2.4.2_amd64.deb
File size: 47.8972 兆字节 (50223894 bytes)
正在打开输出文件 clash-verge-rev-2.4.2-x86_64.deb.part
正在开始下载

连接 0 完成下载
连接 1 完成下载
[100%] [.....................................................................................] [   2.7MB/s] [00:00]

已下载 47.8972 兆字节，用时 17 秒。（2766.17 KB/s）
```

配置 URL 重写，加速 GitHub Clone：
```shell
# 删除旧规则（如果配置过）
git config --global --unset-all url."https://download.fastgit.org/https://github.com/".insteadof
# 设置新规则
git config --global url."https://gh-proxy.com/https://github.com/".insteadof "https://github.com/"
# 查看所有规则
git config --global --get-regexp url
```

克隆 github 仓库生效：

```shell
$ paru rime-ice

==> 获取源代码...
  -> 正在克隆 rime-ice git 仓库...
克隆到纯仓库 '/home/duanluan/.cache/paru/clone/rime-ice-git/rime-ice'...
remote: Enumerating objects: 11879, done.
remote: Counting objects: 100% (44/44), done.
remote: Compressing objects: 100% (35/35), done.
remote: Total 11879 (delta 24), reused 9 (delta 9), pack-reused 11835 (from 3)
接收对象中: 100% (11879/11879), 232.18 MiB | 7.03 MiB/s, 完成.
```

参考 [Archlinux AUR 加速完整设置 – 平凡生活小记](https://caveallegory.cn/2024/03/archlinux-aur%E5%8A%A0%E9%80%9F%E5%AE%8C%E6%95%B4%E8%AE%BE%E7%BD%AE/)

## 加速 curl / wget GitHub 下载

```shell
# 创建脚本文件
$ nano /home/duanluan/workspaces/bin/github-wrappers.sh
```
`github-wrappers.sh`：[shell-scripts/github-wrappers.sh at main · duanluan/shell-scripts](https://github.com/duanluan/shell-scripts/blob/main/github-wrappers.sh)
```shell
# 授予可执行权限
$ chmod +x /home/duanluan/workspaces/bin/github-wrappers.sh
# 编辑 zsh 配置文件，在文件末尾添加
$ nano ~/.zshrc

#  加载 GitHub 镜像加速的 Shell 包装器
if [ -f /home/duanluan/workspaces/bin/github-wrappers.sh ]; then
    source /home/duanluan/workspaces/bin/github-wrappers.sh
fi

# 保存退出后使配置生效
$ source ~/.zshrc
```

## 修改 GitHub Host 加速

```shell
# 备份 hosts 文件
sudo cp /etc/hosts /etc/hosts.bak
```

访问 [https://github-hosts.tinsfox.com/hosts](https://github-hosts.tinsfox.com/hosts)，复制内容

```shell
# 内容追加到 /etc/hosts 末尾
nano /etc/hosts
```

参考：[GitHub Host - 加速访问 GitHub | 自动更新的 Hosts 工具](https://github-hosts.tinsfox.com/)

或者使用脚本：[shell-scripts/update-github-hosts.sh at main · duanluan/shell-scripts](https://github.com/duanluan/shell-scripts/blob/main/update-github-hosts.sh)

## 安装 Fcitx5（必看）

进入系统后，Manjaro Hello 弹窗中点击`Applications`按钮，勾选`Extended language support`-`Manjaro Asian Input Support Fcitx5`，点击`UPDATE SYSTEM`按钮。

![](assets/20250702003138.png)

选择`fcitx5-chinese-addons: 简体中文 | Simplified Chinese`安装。

![](assets/20250702003227.png)

开始菜单，`离开`-`注销`并重新登录，按`Ctrl` `Space`切换输入法。

开始菜单搜索`输入法`。

可选修改配置：
- `配置全局选项`-`快捷键`：
  - `切换启用/禁用输入法`快捷键改成`Ctrl` `Shift`。
- `配置全局选项`-`行为`：
  - `共享输入状态`选择`所有`。

可选删除快捷键：
- `配置全局选项`-`快捷键`：
  - `切换是否使用嵌入预编辑`
- `键盘-汉语`-右侧配置图标：
  - `切换提示模式`
  - `触发一次提示模式`
- `配置附加组件`
  - `模块`-`标点`-`切换键`
  - `模块`-`剪贴板`-`触发键`
  - `模块`-`简繁转换`-`切换键`
  - `模块`-`快速输入`-`触发键`
  - `模块`-`云拼音`-`切换键`
  - `模块`-`Unicode`-`触发键`、`使用十六进制数字输入 Unicode 字符`

## 系统更新

开始菜单搜索`软件更新`，`应用`更新。

![](assets/20250702011829.png)

```shell
sudo pacman -Syu
```

更新后要重启系统，否则系统内核和内核模块版本对不上，导致`modprobe tun`等命令运行失败。

## DPI 缩放

开始菜单搜索`显示器配置`，修改`全局缩放率`，`应用`后重新登录生效。

![](assets/20250702012133.png)

## 切换个人目录下语言

```shell
# 安装 xdg-user-dirs-gtk
sudo pacman -S xdg-user-dirs-gtk
export LANG=en_US
xdg-user-dirs-gtk-update
```
![](assets/20250702012609.png)
选择“Update Names”。

```shell
export LANG=zh_CN.UTF-8
xdg-user-dirs-gtk-update
```

勾选“不要再次询问我”，选择“保留旧的名称”。

手动删除主文件夹下残留的视频、图片、文档、下载、桌面等中文文件夹。

Dolphin 中左侧常用位置项右键`编辑`，修改位置。

![](assets/20250702012916.png)

## 取消 KRunner、KWin/窗口管理、plasmashell/Plasma 工作空间 的全局快捷键

取消勾选`系统设置` `键盘` `快捷键`中的活动快捷键后`应用`。

`KRunner`：
- **启动**：Alt+F2

`KWin`/`窗口管理`：
- **切换到桌面1**：Ctrl+F1
- **切换到桌面2**：Ctrl+F2
- **切换到桌面3**：Ctrl+F3
- **切换到a桌面4**：Ctrl+F4
- **显示隐藏窗口平铺(窗口类)**：Ctrl+F7
- **显示隐藏窗口平铺(当前桌面)**：Ctrl+F9
- **显示隐藏窗口平铺(全部桌面)**：Ctrl+F10
- **暂停显示特效合成**：Alt+Shift+F12

`plasmashell`/`Plasma 工作空间`：
- **激活应用程序启动器**：Alt+F1
- **显示桌面**：Ctrl+F12

## 创建虚拟屏（远程必看）

**场景**：远程连接时，如果本地没有连接显示器或显示器未开启，会导致无法连接或黑屏。通过以下配置强制创建一个虚拟屏幕即可解决。

**注意**：
1. 以下两种情况配置后，先按`Meta` `P`修改为`镜像屏幕`，再重启系统。
2. 重启后出现黑屏或看不到密码输入框的情况，尝试盲按 `Meta` `P` 切换投影模式，或盲输密码回车。
3. 进入桌面后，请到 `系统设置`-`显示和监视器`-`显示器配置` 中，将**真实显示器**设置为`主要`。

### 开源驱动（Intel/AMD）

通过内核参数强制创建一个虚拟接口。

```shell
# 查看当前系统识别到的显示接口 (用于确认 HDMI/DP 端口的具体名称)
$ ls /sys/class/drm/

card1       card1-DP-2  card1-HDMI-A-1  card1-HDMI-A-3  card1-HDMI-A-5  card2-DP-4  card2-DP-6      renderD128  version
card1-DP-1  card1-DP-3  card1-HDMI-A-2  card1-HDMI-A-4  card2           card2-DP-5  card2-HDMI-A-6  renderD129

# 列出各显示接口的状态，使用 disconnected 的接口名称
$ grep "^" /sys/class/drm/*/status

/sys/class/drm/card1-DP-1/status:disconnected
/sys/class/drm/card1-DP-2/status:disconnected
/sys/class/drm/card1-DP-3/status:disconnected
/sys/class/drm/card1-HDMI-A-1/status:disconnected
/sys/class/drm/card1-HDMI-A-2/status:disconnected
/sys/class/drm/card1-HDMI-A-3/status:disconnected
/sys/class/drm/card1-HDMI-A-4/status:disconnected
/sys/class/drm/card1-HDMI-A-5/status:disconnected
/sys/class/drm/card2-DP-4/status:disconnected
/sys/class/drm/card2-DP-5/status:disconnected
/sys/class/drm/card2-DP-6/status:disconnected
/sys/class/drm/card2-HDMI-A-6/status:connected


# 编辑 GRUB 配置文件
$ sudo nano /etc/default/grub

# 在 GRUB_CMDLINE_LINUX_DEFAULT 中追加 video=接口名称:分辨率@刷新率
GRUB_CMDLINE_LINUX_DEFAULT='quiet splash udev.log_priority=3 video=HDMI-A-1:3840x2160@60e'

# 更新 GRUB 引导
$ sudo grub-mkconfig -o /boot/grub/grub.cfg
```

### NVIDIA 闭源驱动（X11）

NVIDIA 驱动无法通过 GRUB 注入，需修改 Xorg 配置文件来实现“双屏并存”（真实屏+虚拟屏）。

```shell
# 查询显卡 PCI 地址，获取显卡 BusID
$ lspci | grep -i vga

# 记下 01:00.0，在配置文件中需转换为十进制格式 PCI:1:0:0
01:00.0 VGA compatible controller: NVIDIA Corporation AD107 [GeForce RTX 4060] (rev a1)

# 查看当前连接的接口名称，找到 connected 的那个，记下 DFP-4
$ nvidia-settings -q dpys

    [4] njcm-pc:0[dpy:4] (HDMI-0) (connected, enabled)

      Has the following names:
        DFP
        DFP-4
        DPY-EDID-b83621ba-cd9f-fefb-a8c5-a438b3e7a04b
        DPY-4
        HDMI-0
        Connector-1

# 点击`Acquire EDID...`按钮将`edid.bin`保存到当前用户主目录
$ nvidia-settings
```

![](assets/20260122094522.png)


```shell
# 将 EDID 文件移动到 X11 目录
$ sudo mv edid.bin /etc/X11/edid.bin
# 赋予读取权限
$ sudo chmod 644 /etc/X11/edid.bin

# 创建 Xorg 配置文件
$ sudo nano /etc/X11/xorg.conf.d/20-nvidia-headless.conf

# --- 内容如下 ---
Section "ServerLayout"
    Identifier     "Layout0"
    Screen      0  "Screen0" 0 0
EndSection

Section "Device"
    Identifier     "Device0"
    Driver         "nvidia"
    VendorName     "NVIDIA Corporation"
    # 根据 lspci 结果修改 BusID，例如 01:00.0 改为 PCI:1:0:0
    BusID          "PCI:1:0:0"

    # --- 核心配置开始 ---
    # 1. 允许无显示器启动
    Option         "AllowEmptyInitialConfiguration" "True"

    # 2. 强制开启双端口：填入 [真实接口], [虚拟空闲接口]
    # 例如：DFP-4 是真实屏幕，DFP-0 是我们要生成的虚拟屏
    Option         "ConnectedMonitor" "DFP-4, DFP-0"

    # 3. 两个屏幕都加载 EDID，无需握手即可识别屏幕，避免唤醒黑屏
    Option         "CustomEDID" "DFP-4:/etc/X11/edid.bin; DFP-0:/etc/X11/edid.bin"
    # --- 核心配置结束 ---
EndSection

Section "Screen"
    Identifier     "Screen0"
    Device         "Device0"
    Monitor        "Monitor0"
    DefaultDepth    24
    SubSection     "Display"
        Depth       24
        # 即使这里写了 1080P，如果 EDID 是 4K 的，系统仍可能优先使用 4K
        Modes      "1920x1080"
    EndSubSection
EndSection

Section "Monitor"
    Identifier     "Monitor0"
    Option         "DPMS"
EndSection
# --- end ---


# 禁用系统自动生成的配置（通常是 90-mhwd.conf）
$ sudo mv /etc/X11/xorg.conf.d/90-mhwd.conf /etc/X11/xorg.conf.d/90-mhwd.conf.bak
# 禁用 dummy 驱动配置（如果存在）
$ sudo mv /etc/X11/xorg.conf.d/10-headless.conf /etc/X11/xorg.conf.d/10-headless.conf.bak
```

### 故障恢复

重启后无法进入图形界面，通过 SSH 登录或 TTY（`Ctrl` `Alt` `F2`）执行以下命令恢复：

```shell
# 恢复 GRUB 配置
sudo nano /etc/default/grub
# 删除 video= 接口名称:分辨率@刷新率 部分
# 更新 GRUB 引导
sudo grub-mkconfig -o /boot/grub/grub.cfg

# 删除自定义配置
sudo mv /etc/X11/xorg.conf.d/20-nvidia-headless.conf /etc/X11/xorg.conf.d/20-nvidia-headless.conf.bak
# 恢复系统自动生成的配置
sudo mv /etc/X11/xorg.conf.d/90-mhwd.conf.bak /etc/X11/xorg.conf.d/90-mhwd.conf
# 恢复 dummy 驱动配置（如果存在）
sudo mv /etc/X11/xorg.conf.d/10-headless.conf.bak /etc/X11/xorg.conf.d/10-headless.conf

# 重启系统
sudo reboot
```

