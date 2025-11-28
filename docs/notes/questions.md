# 问题解决

## 关闭 KDE 钱包后开机需要输入 Wi-Fi 密码

当`系统设置`-`KDE 密码库`-`启用 KDE 密码子系统`取消勾选后，开机需要输入 Wi-Fi 密码。

解决方法：
1. 任务栏 Wi-Fi 图标右键-`配置网络连接`，选择对应的 Wi-Fi。
2. `常规`标签页，勾选`允许所有用户连接到此网络`。
3. `Wi-Fi 安全性`标签页，选择`为所有用户保存密码 (不加密)`，右下角`应用`。

## 忘记 root 密码

正常使用突然正确的 root 密码无效了。

进入 Live CD 后：

```shell
# 查看硬盘挂载
$ sudo fdisk -l
Disk /dev/nvme0n1: ……
……

Device          Type
/dev/nvme0n1p1  EFI System
/dev/nvme0n1p2  Linux filesystem
/dev/nvme0n1p3  Linux swap

# 创建挂载点
$ sudo mkdir -p /media/manjaro
# 将系统根目录挂载
$ mount /dev/nvme0n1p2 /media/manjaro
# 设置 root 密码
chroot /media/manjaro
passwd root
```

重启进入系统。

参考：
- [解决manjaro登录失败问题 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000021724837)
- [重置 root 密码 - Arch Linux 中文维基](https://wiki.archlinuxcn.org/wiki/%E9%87%8D%E7%BD%AE_root_%E5%AF%86%E7%A0%81) 

## 解决“一个或多个文件没有通过有效性检查”

先执行`paru -Sc`清除缓存后重试，如果仍然失败，则编辑`PKGBUILD`跳过校验。

```shell
# paru 安装软件
$ paru dingtalk-bin

==> 正在验证 source 文件，使用sha512sums...
    service-terms-zh_7.8.15.5101401.html ... 失败
    com.alibabainc.dingtalk.desktop ... 通过
    dingtalk.sh ... 通过
    com.alibabainc.dingtalk.svg ... 通过
==> 错误： 一个或多个文件没有通过有效性检查！
错误： 未能下载 'dingtalk-bin-7.8.15.5101401-1' 的源:
错误： 未能构建的软件包：dingtalk-bin-7.8.15.5101401-1

# 编辑 PKGBUILD，校验失败的文件对应的 sha512sums 的行改为 'SKIP'
$ cd /home/njcm/.cache/paru/clone/dingtalk-bin
$ nano PKGBUILD

# 找到类似如下内容，将校验失败的行改为 'SKIP'
sha512sums=(
           #'9675c32e6df14e6f137b04eb046bbbb33d06b5515329b78fb45b41806833cf982124ed6198e1fcbc22a01283b80c728e1f8d891043b2ebd66c479aaaa8a78701'
           'SKIP'
           'c8570ec4cd978e26ac622a83db053a0555324752f5000dc5b3cd680d782138e8ef856f09ec9b7850e04e1faa1e39de94dabeb16fbfbe0fd44af43247b30e8b2f'
           'b2493e7bddc2d701204899bcd82930f97779eec23485870c64665c525b9faca382a3c0e9e9c1bd18f8fa8157ea408943e542de56dc3410388e78f30732511f5c'
           '5f05f90704526fbd16371f6f9deaa171a3cac25a103b21daba72a3028ab7cdf9b566a3ac7842c6ce88d30cc29fe0c8b989c77aa36daab73793a827a1a0d6c775')

# 保存退出后用 PKGBUILD 构建并安装软件包和依赖
$ makepkg -si

==> 正在验证 source 文件，使用sha512sums...
    service-terms-zh_7.8.15.5101401.html ... 已跳过
    com.alibabainc.dingtalk.desktop ... 通过
    dingtalk.sh ... 通过
    com.alibabainc.dingtalk.svg ... 通过
```

## 托盘区蓝牙不显示+设置中蓝牙开启无效

```shell
$ lsusb | grep -i bluetooth
Bus 001 Device 004: ID 8087:0029 Intel Corp. AX200 Bluetooth

$ sudo dmesg|grep Bluetooth
[ 4.165699] Bluetooth: Core ver 2.22
[ 4.165722] Bluetooth: HCI device and connection manager initialized
[ 4.165727] Bluetooth: HCI socket layer initialized
[ 4.165730] Bluetooth: L2CAP socket layer initialized
[ 4.165734] Bluetooth: SCO socket layer initialized
[ 5.168658] Bluetooth: BNEP (Ethernet Emulation) ver 1.3
[ 5.168661] Bluetooth: BNEP filters: protocol multicast
[ 5.168667] Bluetooth: BNEP socket layer initialized
[ 6.355936] Bluetooth: hci0: Reading Intel version command failed (-110)
[ 6.355940] Bluetooth: hci0: command 0xfc05 tx timeout
```
最后两句有问题，需要将`AX200/AX201`缺少的`ibt-0040-0041.ddc`、`ibt-0040-0041.sfi`固件从 [Intel linux-firmware](https://anduin.linuxfromscratch.org/sources/linux-firmware/intel/) 下载并移动到`/lib/firmware/intel`目录中，再重启电脑就正常了。

参考：[Manjaro蓝牙BUG：Bluetooth: hci0: Failed to load Intel firmware file intel/ibt-0040-1050.sfi (-2) - CY BLOG](https://cy.terase.cn/2024/12/24/bluetooth-bug/)

## X11 切换到 Wayland 问题

- 提示“`检测到设置了 GTK_IM_MODULE 和 QT_IM_MODULE 而且 Wayland 输入法前端正在正常工作。推荐使用 Wayland 输入法前端。更多信息请参见 https://fcitx-im.org/wiki/Using_Fcitx_5_on_Wayland#KDE_Plasma `”
  
  ```shell
  # 查看环境变量
  $ printenv | grep -E '^(GTK_IM_MODULE|QT_IM_MODULE|XMODIFIERS|SDL_IM_MODULE|GLFW_IM_MODULE)='
  GTK_IM_MODULE=fcitx
  QT_IM_MODULE=fcitx
  SDL_IM_MODULE=fcitx
  XMODIFIERS=@im=fcitx
  
  # 查找环境变量位置
  $ grep -R --line-number -E 'GTK_IM_MODULE|QT_IM_MODULE|XMODIFIERS' ~/.config/environment.d ~/.pam_environment ~/.profile ~/.xprofile ~/.bash* ~/.z* /etc/environment /etc/profile.d /etc/X11/xinit 2>/dev/null 
  /home/njcm/.zhistory:415:echo $GTK_IM_MODULE
  /home/njcm/.zhistory:416:env | grep -E 'GTK_IM_MODULE|QT_IM_MODULE|XMODIFIERS'
  /home/njcm/.zhistory:422:printenv | grep -E '^(GTK_IM_MODULE|QT_IM_MODULE|XMODIFIERS|SDL_IM_MODULE|GLFW_IM_MODULE)='
  /home/njcm/.zhistory:423:grep -R --line-number -E 'GTK_IM_MODULE|QT_IM_MODULE|XMODIFIERS' ~/.config/environment.d ~/.pam_environment ~/.profile ~/.xprofile ~/.bash* ~/.z* /etc/environment /etc/profile.d /etc/X11/xinit 2>/dev/null
  /etc/profile.d/input-support.sh:6:    export GTK_IM_MODULE=$im
  /etc/profile.d/input-support.sh:7:    export QT_IM_MODULE=$im
  /etc/profile.d/input-support.sh:8:    export XMODIFIERS=@im=$im
  /etc/profile.d/input-support.sh:16:    export XMODIFIERS=@im=$im
  /etc/profile.d/input-support.sh:17:    export QT_IM_MODULE=$im
  /etc/profile.d/input-support.sh:22:    export XMODIFIERS=@im=$im
  /etc/profile.d/input-support.sh:26:    export QT_IM_MODULE=$im
  /etc/profile.d/input-support.sh:27:    export GTK_IM_MODULE=$im
  
  $ nano ~/.config/plasma-workspace/env/99-immodule-bridge.sh
  ```
  `99-immodule-bridge.sh`是 KDE 的环境初始化脚本，目的是让系统在登录时自动检测当前是 Wayland 还是 X11，并据此动态清除（Wayland 下）或设置（X11 下）输入法环境变量，解决 Fcitx 5 的冲突警告：
  ```shell
  #!/usr/bin/env bash
  # KDE Plasma 会在用户会话启动时 source 这个目录下的脚本。
  
  # 调试日志：这一行可以确认脚本是否真的被执行了 (查看 /tmp/fcitx-bridge.log)
  echo "$(date): 脚本开始执行，当前 Session 类型: $XDG_SESSION_TYPE" > /tmp/fcitx-bridge.log
  
  case "${XDG_SESSION_TYPE}" in
    wayland)
      # Wayland：使用 Wayland text-input 前端，不再强制 GTK/Qt/SDL 使用旧式 immodule
      # 这里的 unset 对去除警告至关重要
      unset GTK_IM_MODULE
      unset QT_IM_MODULE
      unset SDL_IM_MODULE
  
      # 显式置空，防止 unset 在某些 shell 继承机制下失效
      export GTK_IM_MODULE=""
      export QT_IM_MODULE=""
      export SDL_IM_MODULE=""
  
      # 可选：为 XWayland 老应用保留 XIM（不影响原生 Wayland 应用）
      export XMODIFIERS="@im=fcitx"
      ;;
    x11|tty|'')
      # X11（或未知时按 X11 兜底）：使用 fcitx 的 immodule，保证兼容性
      export GTK_IM_MODULE="fcitx"
      export QT_IM_MODULE="fcitx"
      export SDL_IM_MODULE="fcitx"
      export XMODIFIERS="@im=fcitx"
      ;;
  esac
  ```

- 微信、钉钉没有缩放
  
  开始菜单搜索软件名，右键`编辑应用程序`，在 KDE 菜单编辑器对应软件的`常规`-`环境变量`中添加`QT_SCALE_FACTOR=1.5`（1.5 为缩放比例），如果环境变量已经有值，添加` QT_SCALE_FACTOR=1.5`，再保存后重启软件。

- QQ 中输入法打字候选栏闪退、钉钉无法输入

  开始菜单搜索`QQ`/`钉钉`，右键`编辑应用程序`，在 KDE 菜单编辑器对应软件的`常规`-`环境变量`中添加`QT_IM_MODULE=fcitx XMODIFIERS="@im=fcitx" GTK_IM_MODULE=fcitx SDL_IM_MODULE=fcitx QT_QPA_PLATFORM=xcb`，再保存后重启软件。
