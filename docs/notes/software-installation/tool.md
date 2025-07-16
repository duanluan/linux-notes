# 工具类

## Geekbench 6 跑分

[Downloading Geekbench 6 for Linux](https://www.geekbench.com/download/linux/)

```shell
paru geekbench
geekbench6
```

## uTools

![](https://www.u-tools.cn/assets/feat/main.png)

[下载中心 - uTools 官网](https://www.u-tools.cn/download/)

```shell
paru utools
```

注意默认安装的 KRunner 快捷键为`Alt` `Space`。

## Rubick

![](https://pic1.zhimg.com/80/v2-359c03a47d128e72a01a51e1d824741e_720w.png)

[Releases · rubickCenter/rubick](https://github.com/rubickCenter/rubick/releases)

```shell
paru rubick
```

## KeePassXC

![](https://keepassxc.org/assets/img/screenshots/database_view.png)

```shell
paru keepassxc-git
```

`KeePassXC`-菜单栏`工具`-`设置`-`浏览器集成`-`高级`选项卡-`使用自定义代理位置`浏览：`/usr/bin/keepassxc-proxy`

### FSearch

全局搜索文件工具。

![](https://flathub.org/_next/image?url=https%3A%2F%2Fdl.flathub.org%2Fmedia%2Fio%2Fgithub%2Fcboxdoerfer.FSearch%2F5dfcd05a3d0147745dccd8477b238210%2Fscreenshots%2Fimage-1_orig.webp&w=1080&q=75)

```shell
paru fsearch
```

打开后`选项`-`数据库`，添加路径`/`。

### AnyTXT Searcher

免费桌面全文搜索工具

![](https://anytxt.net/wp-content/uploads/2021/05/2021-5-29-2-768x461.png)

[下载最佳免费桌面全文搜索工具 | Anytxt](https://anytxt.net/download/)

```shell
paru anytxt-bin
```

### SimpleScreenRecorder

SimpleScreenRecorder是一款屏幕录制软件，它具有录制整个桌面、应用窗口、指定窗口大小以及音/视频同步，视频缩放等功能。

![](https://files.maartenbaert.be/simplescreenrecorder/screenshot.png)

[Download - SimpleScreenRecorder - Maarten Baert's website](https://www.maartenbaert.be/simplescreenrecorder/#download)

```shell
# 直接安装会报错
$ paru simplescreenrecorder
……
==> 正在开始 build()...
CMake Error at CMakeLists.txt:1 (cmake_minimum_required):
  Compatibility with CMake < 3.5 has been removed from CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.

  Or, add -DCMAKE_POLICY_VERSION_MINIMUM=3.5 to try configuring anyway.

-- Configuring incomplete, errors occurred!
==> 错误： 在 build() 中发生一个错误。
    正在放弃...
错误： 未能构建 'simplescreenrecorder-0.4.4-3': 
错误： 未能构建的软件包：simplescreenrecorder-0.4.4-3
```

按照它提示的做。

```shell
# 下载源码
$ git clone https://aur.archlinux.org/simplescreenrecorder.git
# 在 cmake 命令后加上 -DCMAKE_POLICY_VERSION_MINIMUM=3.5
$ nano PKGBUILD
……
  cmake -DCMAKE_INSTALL_PREFIX="/usr" -DCMAKE_BUILD_TYPE=Release \
    -DWITH_QT5=on \
    -DCMAKE_INSTALL_LIBDIR='lib' -DCMAKE_POLICY_VERSION_MINIMUM=3.5 ../
……
# 构建安装
$ makepkg -si
```

## Wine 运行器

Wine运行器是一个能让Linux用户更加方便地运行Windows应用的程序。原版的 Wine 只能使用命令操作，且安装过程较为繁琐，对小白不友好。于是该运行器为了解决该痛点，内置了对Wine图形化的支持、Wine 安装器、微型应用商店、各种Wine工具、自制的Wine程序打包器、运行库安装工具等。

![](https://storage.deepin.org/thread/202210022215217037_%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20221002221112.png)

星火应用商店下载并安装[Wine运行器](spk://store/tools/spark-deepin-wine-runner)。

## Free Download Manager

強大又现代的下载管理器。

![](https://www.freedownloadmanager.org/public/img/v2/screen_linux.png)

[Free Download Manager for Linux | Download](https://www.freedownloadmanager.org/zh/download-fdm-for-linux.htm)

```shell
paru freedownloadmanager
```

安装扩展：
- [Free Download Manager - Chrome 应用商店](https://chromewebstore.google.com/detail/free-download-manager/ahmpjcflkgiildlgicmcieglgoilbfdp?hl=zh-CN)
- [Free Download Manager official extension – Get this Extension for 🦊 Firefox](https://addons.mozilla.org/en-US/firefox/addon/free-download-manager-addon/)

## qBittorrent Enhanced Edition

基于 qBittorrent 的增强版 BT 下载工具。

[Releases · c0re100/qBittorrent-Enhanced-Edition](https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases)

```shell
paru qbittorrent-enhanced
```

## Synology Drive Client

Synology Drive Client 是一款桌面实用程序，可在多台客户端计算机上提供面向集中化服务器 Synology Drive Server 的文件同步和个人计算机备份服务。

[下载中心 | 群晖科技 Synology Inc.](https://www.synology.cn/zh-cn/support/download)

```shell
paru synology-drive
```

## Syncthing + Syncthing Tray

Syncthing 是开源的、跨设备实时文件同步工具。

Syncthing Tray 是 Syncthing 的托盘图标工具。

```shell
paru syncthing-bin
paru syncthingtray
```

Syncthing Tray 设置向导中选择`通过 Syncthing Tray 启动已安装的 Syncthing 应用程序`。

![](../assets/20250710232739.png)

## Clash Verge

A Clash Meta GUI based on Tauri.

![](https://github.com/clash-verge-rev/clash-verge-rev/raw/dev/docs/preview_dark.png)

[Releases · clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev/releases)

```shell
paru clash-verge-rev-bin
```

## Brook

跨平台可编程网络工具。

```shell
# 临时设置代理
$ export http_proxy=127.0.0.1:7897
$ export https_proxy=127.0.0.1:7897

# 使用 nami 安装 brook
$ bash <(curl https://bash.ooo/nami.sh)
$ nami install brook

# 创建 brook 脚本，自定义目录
$ nano ~/workspaces/service/brook.service.sh

#!/bin/bash
# 查找包含 'brook wsclient' 的进程，并获取 PID
pids=$(ps aux | grep '[b]rook wsclient' | awk '{print $2}')
# 判断是否找到了 PID
if [ -n "$pids" ]; then
  for pid in $pids; do
    echo "正在终止 brook wsclient 进程 (PID: $pid)"
    kill "$pid"
  done
else
  echo "没有找到 brook wsclient 进程"
fi
# 启动 brook，具体命令看官方文档
/home/duanluan/.nami/bin/brook client -s 1.2.3.4:9999 -p 123456 --socks5 127.0.0.1:1080


$ mkdir -p ~/.config/systemd/user
# 将 brook 脚本创建为 systemd 服务
$ nano ~/.config/systemd/user/brook.service

[Unit]
Description=A cross-platform programmable network tool.
After=network.target

[Service]
ExecStart=bash /home/duanluan/workspaces/service/brook.service.sh
Restart=always
RestartSec=5
#StandardOutput=file:/home/duanluan/workspaces/service/brook.log
#StandardError=file:/home/duanluan/workspaces/service/brook_error.log
StandardOutput=null
StandardError=null

[Install]
WantedBy=graphical-session.target

$ systemctl --user daemon-reload
$ systemctl --user enable brook
$ systemctl --user start brook
$ systemctl --user status brook
```

## proxychains

通过在应用程序与网络之间插入代理链，允许用户将所有流量通过指定的代理服务器进行转发，实现隐匿性和访问受限网络的目的。

安装 proxychains：
```shell
sudo pacman -S proxychains
```

在配置文件`/etc/proxychain4.conf`末尾 [ProxyList] 后注释默认代理并添加新代理。
```shell
sudo nano /etc/proxychains.conf
```
```conf
[ProxyList]
socks5 127.0.0.1 7897
```

## GnuPG + GpgFrontend

```shell
# 安装 GnuPG
sudo pacman -S gnupg
```

GpgFrontend 是一个现代化的、跨平台的 OpenPGP 图形用户界面工具，旨在为初学者提供简单易用的体验，同时为专家提供强大的功能，且完全开源、可移植。

![](https://image.cdn.bktus.com/i/2025/06/25/126a292375472a3c559a0a0de775283e4ea05875.webp)

- [GnuPG - Frontends](https://www.gnupg.org/software/frontends.html)
- [Releases · saturneric/GpgFrontend](https://github.com/saturneric/GpgFrontend/releases)

```shell
paru gpgfrontend
```

## Snipaste

Snipaste 是一个简单但强大的截图工具，也可以让你将截图贴回到屏幕上！下载并打开 Snipaste，按下 F1 来开始截图，再按 F3，截图就在桌面置顶显示了。就这么简单！

![](https://i.v2ex.co/N3QEb3VA.png)

[Snipaste 下载](https://zh.snipaste.com/download.html)

```shell
paru snipaste
```

## eSearch

截屏+OCR+搜索+翻译+贴图+屏幕翻译+以图搜图+滚动截屏+录屏

![](https://camo.githubusercontent.com/264e167cffe3622e587343e9421af73178c80f0b86531fc4f44e673d7a3e0924/68747470733a2f2f657365617263682d6170702e6e65746c6966792e6170702f726561646d652f312e77656270)

```shell
paru e-search
```

## RustDesk

快速开源远程访问和支持软件

![](https://rustdesk.com/main.png)

[Releases · rustdesk/rustdesk](https://github.com/rustdesk/rustdesk/releases/)

```shell
paru rustdesk-bin
```

## VMware Workstation Pro

VMware Workstation Pro 是一款功能强大的虚拟化软件，允许用户在单一物理机上创建和运行多个虚拟机，支持多种操作系统，适用于开发、测试和生产环境。

[如何在 Linux 上下载和安装 VMware Workstation Pro 免费版 - 系统极客](https://www.sysgeek.cn/install-vmware-workstation-pro-on-linux/)

[注册 Broadcom](https://profile.broadcom.com/web/registration) 账号，用邮箱作用户名登录。

[Free Downloads - Support Portal - Broadcom support portal](https://support.broadcom.com/group/ecx/free-downloads) 搜索“VMware Workstation Pro”后下载 Linux 版。

```shell
# 方法一
chmod u+x VMware-Workstation-Full-17.6.3-24583834.x86_64.bundle
sudo ./VMware-Workstation-Full-17.6.3-24583834.x86_64.bundle

# 方法二
paru -S vmware-keymaps vmware-workstation
```

安装过程中“VMware's Customer Experience Improvement Program ("CEIP")”可以选 No。

---

- 安装 [open-vm-tools](https://github.com/vmware/open-vm-tools) 增强虚拟机：
  ```shell
  sudo pacman -S open-vm-tools
  ```

- Could not connect 'Ethernet0' to virtual network '/dev/vmnet8'

  ```shell
  sudo systemctl enable --now vmware-networks
  ```

- Fail Network configuration is missing. Ensure that /etc/vmware/networking exists
  ```shell                                                      INT ✘ 
  systemctl enable --now vmware-networks-configuration.service
  ```

## VirtualBox

VirtualBox 是一款开源的虚拟化软件，允许用户在不同操作系统上创建和运行虚拟机，支持跨平台使用，适用于开发、测试和学习。

[Linux_Downloads – Oracle VirtualBox](https://www.virtualbox.org/wiki/Linux_Downloads)
[Downloads – Oracle VirtualBox](https://www.virtualbox.org/wiki/Downloads)

```shell
 $ paru virtualbox-ext-oracle
 
:: 软件包 VIRTUALBOX-HOST-MODULES 有 15 个提供者：
:: 软件库 extra:
    1) linux510-virtualbox-host-modules  2) linux515-virtualbox-host-modules  3) linux54-virtualbox-host-modules  4) linux61-rt-virtualbox-host-modules  5) linux61-virtualbox-host-modules  6) linux612-rt-virtualbox-host-modules  7) linux612-virtualbox-host-modules  8) linux613-rt-virtualbox-host-modules  9) linux614-rt-virtualbox-host-modules  10) linux615-rt-virtualbox-host-modules  11) linux615-virtualbox-host-modules  12) linux616-virtualbox-host-modules  13) linux66-rt-virtualbox-host-modules  14) linux66-virtualbox-host-modules  15) virtualbox-host-dkms  
输入一个数字（默认=1）：15
```

- 不能枚举 USB 设备：

    ```shell
    sudo usermod -aG vboxusers $USER
    ```
    运行后需要重启。

    [使用VirtualBox时，怎么支持USB - 简书](https://www.jianshu.com/p/de430444a8ae)


- 不显示 USB 设备：

    ```shell
    # 添加 usbfs 用户组（virtualbox 装完成后会有 vboxusers 和　vboxsf）
    sudo groupadd usbfs
    # 将用户添加到 vboxusers、usbfs 组
    sudo adduser $USER vboxusers
    sudo adduser $USER usbfs
    ```
    [VirtualBox can't enable the AMD-V extension | 一张假钞的真实世界](https://www.zhangjc.com/2025/01/20/VirtualBox-can-t-enable-the-AMD-V-extension/)


- VirtualBox can't enable the AMD-V extension：

    ```shell
    # 移除 KVM 模块
    sudo rmmod kvm_amd
    sudo rmmod kvm
    # 将 kvm 和 kvm_amt 加入黑名单模块列表
    echo "blacklist kvm" | sudo tee /etc/modprobe.d/blacklist.conf
    echo "blacklist kvm_amd" | sudo tee -a /etc/modprobe.d/blacklist.conf
    sudo update-initramfs -u
    ```

## 安卓模拟器 麟卓卓懿

[下载 | 北京麟卓信息科技有限公司](https://www.linzhuotech.com/Product/download) 下载。

```shell
tar xvf xDroidInstall-x86_64-v13.2.380-20250306.tar.xz
./xDroidInstall-x86_64-v13.2.380-20250306.run
```

## XMind

思维导图与头脑风暴工具。

![](https://assets.xmind.cn/www/assets/images/download/linux-active-cn-ff5d07552d.webp)

[免费下载 Xmind 思维导图 | Xmind 中文官方网站](https://xmind.cn/download/)

```shell
paru xmind
```

[Releases · henryau53/xmind-crack-patch](https://github.com/henryau53/xmind-crack-patch/releases)

参考开发类软件中先安装 nvm + Node.js + pnpm + nrm。

```shell
pnpm add -g asar

proxychains git clone https://github.com/henryau53/xmind-crack-patch.git
cd xmind-crack-patch

asar pack ./app.asar.non-windows app.asar

sudo cp app.asar /opt/Xmind/resources/app.asar
```

## Sunshine + Moonlight

Sunshine + Moonlight 是一套自托管的游戏串流解决方案，其中 Sunshine 作为服务端，Moonlight 作为客户端，使用户可以将 PC 游戏串流到其他设备上，提供低延迟和高质量的游戏体验。

[Sunshine+Moonlight 低延迟远程串流和平板副屏](https://blog.zhjh.top/?p=uvdJRjuB)

```shell
paru sunshine
paru moonlight-qt-bin
```

## OBS Studio

免费且开源的用于视频录制以及直播串流的软件。

![](https://obsproject.com/assets/images/features-new/hero.png)

[下载 | OBS](https://obsproject.com/zh-cn/download)

```shell
# 方法一：商店安装

# 方法二：ffmpeg-obs 会和 ffmpeg 冲突。
paru obs-studio-tytan652

# 方法三
paru obs-studio-liberty
```

## VLC Media Player

VLC 是一款自由、开源的跨平台多媒体播放器及框架，可播放大多数多媒体文件，以及 DVD、音频 CD、VCD 及各类流媒体协议。

![](https://images.videolan.org/vlc/screenshots/1.0.0/VLC_Gnome.png)

```shell
sudo pacman -S vlc
```

## Remote Desktop Manager

Remote Desktop Manager（RDM）将所有远程连接集中到一个平台上，用户之间以及整个团队都可以安全地共享该平台。RDM 支持数百种集成技术（包括多种协议和 VPN），内置企业级密码管理工具、全局和细粒度访问控制，以及强大的移动应用程序，是 Windows 和 Mac 桌面客户端的补充，是远程访问的 IT 工具箱。

![](https://cdnweb.devolutions.net/cdn-cgi/image/f=auto,w=1920,onerror=redirect/images/rdm/linux/screens/en/easily-manage-all-your-remote-connections-linux.jpg)

[Download - RDM - Devolutions](https://devolutions.net/remote-desktop-manager/download/)

```shell
paru remote-desktop-manager
```

## EasyTier

一个简单、安全、去中心化的内网穿透 VPN 组网方案，使用 Rust 语言和 Tokio 框架实现。

![](https://github.com/EasyTier/EasyTier/raw/main/assets/image-6.png)

[Releases · EasyTier/EasyTier](https://github.com/EasyTier/EasyTier/releases)

```shell
# 脚本安装
$ wget -O /tmp/easytier.sh "https://raw.githubusercontent.com/EasyTier/EasyTier/main/script/install.sh" && sudo bash /tmp/easytier.sh install
 Install EasyTier successfully!

Default Port: 11010(UDP+TCP), Notice allowing in firewall!

Default Network Name: default, Please change it to your own network name!

Now EasyTier supports multiple config files. You can create config files in the /opt/easytier/config/ folder
For more information, please check the documents in official site
The management example of a single configuration file is as follows

Status: systemctl status easytier@default
Start: systemctl start easytier@default
Restart: systemctl restart easytier@default
Stop: systemctl stop easytier@default

# 停用服务
$ systemctl stop easytier@default
# 通过 https://easytier.cn/web/index.html#/config_generator 生成配置
$ sudo nano /opt/easytier/config/default.conf
# 启动服务
$ systemctl start easytier@default


# 更新 EasyTier 到最新版本
wget -O /tmp/easytier.sh "https://raw.githubusercontent.com/EasyTier/EasyTier/main/script/install.sh" && bash /tmp/easytier.sh update
```

注意事项：
- easytier-core 命令输出的 TOML 中`rpc_portal = "0.0.0.0:15888"`，本机在`/opt/easytier/config/default.conf`保持为`rpc_portal = "0.0.0.0:0`不变才正常连通网络。

## TeamViewer

![](https://teamviewer.scene7.com/is/image/teamviewergmbh/product-teamviewer-remote-support-banner?fmt=png-alpha&dpr=off)

[下載 Linux | TeamViewer](https://www.teamviewer.cn/cn/download/linux/)

```shell
paru teamviewer
teamviewer --daemon start
```

## AnyDesk

![](https://anydesk.com.cn/_static/img/devices/anydesk-device-linux-c6f1dd.jpg)

[Remote Desktop Software for Ubuntu and Linux | AnyDesk](https://anydesk.com.cn/en/downloads/linux)

```shell
paru anydesk-bin

# 开机启动
systemctl enable anydesk.service
```

## 向日葵

![](https://res.orayimg.com/sunlogin/1.0/img/15a0b17.png)

[向日葵远程控制软件下载 - 贝锐向日葵官网](https://sunlogin.oray.com/download)

```shell
paru sunloginclient

# 开启服务
sudo systemctl start runsunloginclient.service
# 开机启动
sudo systemctl enable runsunloginclient.service
```

## CopyQ

CopyQ 监控系统剪贴板并将其内容保存在自定义选项卡中。 保存的剪贴板稍后可以直接复制并粘贴到任何应用程序中。

![](https://hluk.github.io/CopyQ/images/application.png)

[Releases · hluk/CopyQ](https://github.com/hluk/CopyQ/releases)

```shell
sudo pacman -S copyq
```

托盘剪贴板图标，右键`配置剪贴板`-`快捷键`，将`在鼠标位置显示剪贴板项目`的全局自定义为无。

打开 CopyQ，`文件`-`首选项`-`快捷键`-`全局`-`显示/隐藏主窗口`设置为`Meta/Super` `V`。

## 闪电藤/LocalSend

闪电藤是基于 LocalSend 的二次开发产品，在原有局域网文件传输基础上，增加了 webdav 传输和云传输的能力，是一个万能的文件传输助手。

[下载 | 闪电藤](https://lightningvine.zishu.life/download.html)

闪电藤还没上 AUR，先用 LocalSend：

```shell
paru localsend-bin 
```

## Calibre

全能电子书管理阅读编辑转换。

![]()

[calibre - 下载 Linux版](https://calibre-ebook.com/zh_CN/download_linux)

```shell
# 不用 AUR 中的 calibre-bin，会无法切换中文
sudo pacman -S calibre
```
