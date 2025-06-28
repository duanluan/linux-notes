# 工具类

## Geekbench 6 跑分

[Downloading Geekbench 6 for Linux](https://www.geekbench.com/download/linux/) 下载

```shell
tar zxvf Geekbench-6.4.0-Linux.tar.gz
cd Geekbench-6.4.0-Linux
./geekbench6
```

## uTools

![](https://www.u-tools.cn/assets/feat/main.png)

[下载中心 - uTools 官网](https://www.u-tools.cn/download/) 下载 DEB 文件并安装。

托盘区打开设置，修改呼出快捷键为`Ctrl` `Space`。

## Rubick

![](https://pic1.zhimg.com/80/v2-359c03a47d128e72a01a51e1d824741e_720w.png)

[Releases · rubickCenter/rubick](https://github.com/rubickCenter/rubick/releases) 下载 DEB 文件并安装。

## KeePassXC

![](https://keepassxc.org/assets/img/screenshots/database_view.png)

```shell
sudo add-apt-repository ppa:phoerious/keepassxc
sudo apt update
sudo apt install keepassxc
```

`KeePassXC`-菜单栏`工具`-`设置`-`浏览器集成`-`高级`选项卡-`使用自定义代理位置`浏览：`/usr/bin/keepassxc-proxy`

### FSearch

全局搜索文件工具。

![](https://flathub.org/_next/image?url=https%3A%2F%2Fdl.flathub.org%2Fmedia%2Fio%2Fgithub%2Fcboxdoerfer.FSearch%2F5dfcd05a3d0147745dccd8477b238210%2Fscreenshots%2Fimage-1_orig.webp&w=1080&q=75)

```shell
flatpak install --system flathub io.github.cboxdoerfer.FSearch
```

打开后`选项`-`数据库`，添加路径`/`。

### SimpleScreenRecorder

SimpleScreenRecorder是一款屏幕录制软件，它具有录制整个桌面、应用窗口、指定窗口大小以及音/视频同步，视频缩放等功能。

![](https://files.maartenbaert.be/simplescreenrecorder/screenshot.png)

[Download - SimpleScreenRecorder - Maarten Baert's website](https://www.maartenbaert.be/simplescreenrecorder/#download)

```shell
sudo apt-get install simplescreenrecorder
```

## Wine 运行器

Wine运行器是一个能让Linux用户更加方便地运行Windows应用的程序。原版的 Wine 只能使用命令操作，且安装过程较为繁琐，对小白不友好。于是该运行器为了解决该痛点，内置了对Wine图形化的支持、Wine 安装器、微型应用商店、各种Wine工具、自制的Wine程序打包器、运行库安装工具等。

![](https://storage.deepin.org/thread/202210022215217037_%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20221002221112.png)

星火应用商店下载并安装[Wine运行器](spk://store/tools/spark-deepin-wine-runner)。

## Free Download Manager

強大又现代的下载管理器。

![](https://www.freedownloadmanager.org/public/img/v2/screen_linux.png)

[Free Download Manager for Linux | Download](https://www.freedownloadmanager.org/zh/download-fdm-for-linux.htm) 下载 DEB 文件打开并安装。

[Free Download Manager - Chrome 应用商店](https://chromewebstore.google.com/detail/free-download-manager/ahmpjcflkgiildlgicmcieglgoilbfdp?hl=zh-CN) 安装扩展。

## qBittorrent Enhanced Edition

基于 qBittorrent 的增强版 BT 下载工具。

[Releases · c0re100/qBittorrent-Enhanced-Edition](https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases) 下载 AppImage 文件。

```shell
sudo mkdir /opt/qBittorrent
# 赋予执行权限
chmod u+x ./qBittorrent-Enhanced-Edition-x86_64.AppImage
# 解压 AppImage 复制图标和快捷方式
./qBittorrent-Enhanced-Edition-x86_64.AppImage --appimage-extract
sudo cp squashfs-root/org.qbittorrent.qBittorrent.desktop /usr/share/applications/
sudo cp squashfs-root/qbittorrent.svg /opt/qBittorrent/
# 移动到 /opt 下并赋予执行权限
sudo mv qBittorrent-Enhanced-Edition-x86_64.AppImage /opt/qBittorrent/

# 修改快捷方式，Exec 修改为 /opt/qBittorrent/qBittorrent-Enhanced-Edition-x86_64.AppImage %U，Icon 修改为 /opt/qBittorrent/qbittorrent.svg
sudo vim /usr/share/applications/org.qbittorrent.qBittorrent.desktop
```

## Synology Drive Client

Synology Drive Client 是一款桌面实用程序，可在多台客户端计算机上提供面向集中化服务器 Synology Drive Server 的文件同步和个人计算机备份服务。

[下载中心 | 群晖科技 Synology Inc.](https://www.synology.cn/zh-cn/support/download) 下载 DEB 文件并安装。

## Clash Verge

A Clash Meta GUI based on Tauri.

![](https://github.com/clash-verge-rev/clash-verge-rev/raw/dev/docs/preview_dark.png)

[Releases · clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev/releases) 下载 DEB 文件并安装。

## Brook

跨平台可编程网络工具。

```shell
$ export http_proxy=127.0.0.1:7897
$ export https_proxy=127.0.0.1:7897
$ bash <(curl https://bash.ooo/nami.sh)
$ nami install brook

# 创建 brook 脚本，自定义目录
$ vim ~/workspaces/service/brook.service.sh

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
$ vim ~/.config/systemd/user/brook.service

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

## proxychains4

通过在应用程序与网络之间插入代理链，允许用户将所有流量通过指定的代理服务器进行转发，实现隐匿性和访问受限网络的目的。

安装 proxychains4：
```shell
sudo apt install proxychains4
```

在配置文件`/etc/proxychain4.conf`末尾 [ProxyList] 后注释默认代理并添加新代理。
```shell
sudo vim /etc/proxychain4.conf
```
```conf
[ProxyList]
socks5 127.0.0.1 7897
```

## GPG + GpgFrontend

```shell
# 安装 GPG
sudo apt install gpg
```

GpgFrontend 是一个现代化的、跨平台的 OpenPGP 图形用户界面工具，旨在为初学者提供简单易用的体验，同时为专家提供强大的功能，且完全开源、可移植。

![](https://image.cdn.bktus.com/i/2025/06/25/126a292375472a3c559a0a0de775283e4ea05875.webp)

- [GnuPG - Frontends](https://www.gnupg.org/software/frontends.html)
- [Releases · saturneric/GpgFrontend](https://github.com/saturneric/GpgFrontend/releases)

```shell
sudo mkdir /opt/GpgFrontend
# 赋予执行权限
chmod u+x ./GpgFrontend-2.1.9-linux-x86_64.AppImage
# 解压 AppImage 复制图标和快捷方式
./GpgFrontend-2.1.9-linux-x86_64.AppImage --appimage-extract
sudo cp squashfs-root/com.bktus.gpgfrontend.desktop /usr/share/applications/
sudo cp squashfs-root/com.bktus.gpgfrontend.png /opt/GpgFrontend/
# 移动到 /opt 下并赋予执行权限
sudo mv GpgFrontend-2.1.9-linux-x86_64.AppImage /opt/GpgFrontend/GpgFrontend-x86_64.AppImage

# 修改快捷方式，Exec 修改为 /opt/GpgFrontend/GpgFrontend-x86_64.AppImage，Icon 修改为 /opt/GpgFrontend/com.bktus.gpgfrontend.png
sudo vim /usr/share/applications/com.bktus.gpgfrontend.desktop
```

## Snipaste

Snipaste 是一个简单但强大的截图工具，也可以让你将截图贴回到屏幕上！下载并打开 Snipaste，按下 F1 来开始截图，再按 F3，截图就在桌面置顶显示了。就这么简单！

![](https://i.v2ex.co/N3QEb3VA.png)

[Snipaste 下载](https://zh.snipaste.com/download.html)桌面版 Linux AppImage。

```shell
sudo mikdir /opt/snipaste
# 赋予执行权限
chmod u+x ./Snipaste-2.10.8-x86_64.AppImage
# 解压 AppImage 复制图标和快捷方式
./Snipaste-2.10.8-x86_64.AppImage --appimage-extract
sudo cp squashfs-root/Snipaste.desktop /usr/share/applications/
sudo cp squashfs-root/Snipaste.png /opt/snipaste/
# 移动到 /opt 下并赋予执行权限
sudo mv Snipaste-2.10.8-x86_64.AppImage /opt/snipaste/Snipaste-x86_64.AppImage

# 修改快捷方式，Exec 修改为 /opt/snipaste/Snipaste-x86_64.AppImage，Icon 修改为 /opt/snipaste/Snipaste.png
sudo vim /usr/share/applications/Snipaste.desktop
```

## RustDesk

快速开源远程访问和支持软件

![](https://rustdesk.com/main.png)

[Releases · rustdesk/rustdesk](https://github.com/rustdesk/rustdesk/releases/)下载 DEB 文件并安装。

## VMware Workstation Pro

VMware Workstation Pro 是一款功能强大的虚拟化软件，允许用户在单一物理机上创建和运行多个虚拟机，支持多种操作系统，适用于开发、测试和生产环境。

[如何在 Linux 上下载和安装 VMware Workstation Pro 免费版 - 系统极客](https://www.sysgeek.cn/install-vmware-workstation-pro-on-linux/)

[注册 Broadcom](https://profile.broadcom.com/web/registration) 账号，用邮箱作用户名登录。

[Free Downloads - Support Portal - Broadcom support portal](https://support.broadcom.com/group/ecx/free-downloads) 搜索“VMware Workstation Pro”后下载 Linux 版。

```shell
chmod +x VMware-Workstation-Full-17.6.3-24583834.x86_64.bundle
sudo ./VMware-Workstation-Full-17.6.3-24583834.x86_64.bundle
```

安装过程中“VMware's Customer Experience Improvement Program ("CEIP")”可以选 No。

安装 [open-vm-tools](https://github.com/vmware/open-vm-tools) 增强虚拟机：

```shell
sudo apt install open-vm-tools
```

## VirtualBox

VirtualBox 是一款开源的虚拟化软件，允许用户在不同操作系统上创建和运行虚拟机，支持跨平台使用，适用于开发、测试和学习。

- [使用VirtualBox时，怎么支持USB - 简书](https://www.jianshu.com/p/de430444a8ae)
- [VirtualBox can't enable the AMD-V extension | 一张假钞的真实世界](https://www.zhangjc.com/2025/01/20/VirtualBox-can-t-enable-the-AMD-V-extension/)

[Linux_Downloads – Oracle VirtualBox](https://www.virtualbox.org/wiki/Linux_Downloads) 中点击“All distributions”保存`VirtualBox-7.1.6-167084-Linux_amd64.run`文件。

```shell
sudo chmod +x VirtualBox-7.1.6-167084-Linux_amd64.run

./VirtualBox-7.1.6-167084-Linux_amd64.run

# 添加 usbfs 用户组（virtualbox 装完成后会有 vboxusers 和　vboxsf）
sudo groupadd usbfs
# 将用户添加到 vboxusers、usbfs 组
sudo adduser duanluan vboxusers
sudo adduser duanluan usbfs

# 移除 KVM 模块
sudo rmmod kvm_amd
sudo rmmod kvm
# 将 kvm 和 kvm_amt 加入黑名单模块列表
echo "blacklist kvm" | sudo tee /etc/modprobe.d/blacklist.conf
echo "blacklist kvm_amd" | sudo tee -a /etc/modprobe.d/blacklist.conf
sudo update-initramfs -u
```

[Downloads – Oracle VirtualBox](https://www.virtualbox.org/wiki/Downloads) 下载 Extension Pack，打开 VirtualBox，将下载的文件拖入窗口安装。

## XMind

思维导图与头脑风暴工具。

![](https://assets.xmind.cn/www/assets/images/download/linux-active-cn-ff5d07552d.webp)

[免费下载 Xmind 思维导图 | Xmind 中文官方网站](https://xmind.cn/download/) 下载 DEB 文件并安装。

[Releases · henryau53/xmind-crack-patch](https://github.com/henryau53/xmind-crack-patch/releases)

```shell
pnpm add -g asar

git clone https://github.com/henryau53/xmind-crack-patch.git
cd xmind-crack-patch

asar pack ./app.asar.non-windows app.asar

sudo cp app.asar /opt/Xmind/resources/app.asar
```

## Sunshine + Moonlight

Sunshine + Moonlight 是一套自托管的游戏串流解决方案，其中 Sunshine 作为服务端，Moonlight 作为客户端，使用户可以将 PC 游戏串流到其他设备上，提供低延迟和高质量的游戏体验。

[Sunshine+Moonlight 低延迟远程串流和平板副屏](https://blog.zhjh.top/?p=uvdJRjuB)

## OBS Studio

免费且开源的用于视频录制以及直播串流的软件。

![](https://obsproject.com/assets/images/features-new/hero.png)

[下载 | OBS](https://obsproject.com/zh-cn/download)

```shell
# 查看 ffmpeg 是否已存在
$ ffmpeg
ffmpeg version 6.1.1-2deepin0 Copyright (c) 2000-2023 the FFmpeg developers

# ffmpeg 不存在就先安装 ffmpeg
sudo apt-get install ffmpeg

# 安装 OBS Studio
flatpak install --user flathub com.obsproject.Studio
```

## VLC Media Player

VLC 是一款自由、开源的跨平台多媒体播放器及框架，可播放大多数多媒体文件，以及 DVD、音频 CD、VCD 及各类流媒体协议。

![](https://images.videolan.org/vlc/screenshots/1.0.0/VLC_Gnome.png)

```shell
sudo apt install vlc
```

## Remote Desktop Manager

Remote Desktop Manager（RDM）将所有远程连接集中到一个平台上，用户之间以及整个团队都可以安全地共享该平台。RDM 支持数百种集成技术（包括多种协议和 VPN），内置企业级密码管理工具、全局和细粒度访问控制，以及强大的移动应用程序，是 Windows 和 Mac 桌面客户端的补充，是远程访问的 IT 工具箱。

![](https://cdnweb.devolutions.net/cdn-cgi/image/f=auto,w=1920,onerror=redirect/images/rdm/linux/screens/en/easily-manage-all-your-remote-connections-linux.jpg)

```shell
# 安装依赖 xwayland
sudo apt install xwayland
```

[Download - RDM - Devolutions](https://devolutions.net/remote-desktop-manager/download/) 下载 DEB 文件并安装。

## EasyTier

一个简单、安全、去中心化的内网穿透 VPN 组网方案，使用 Rust 语言和 Tokio 框架实现。

![](https://github.com/EasyTier/EasyTier/raw/main/assets/image-6.png)

[Releases · EasyTier/EasyTier](https://github.com/EasyTier/EasyTier/releases) 下载`easytier-gui_x.x.x_xxx.deb`使用 GUI。

或者使用脚本安装 service：

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
# 可以先用 easytier-core 命令生成参考 TOML，参数可用 /opt/easytier/easytier-core -h 查看
sudo /opt/easytier/easytier-core -i 192.168.x.x -p udp://example.com:11010 --network-name cloud --network-secret your_password --latency-first --use-smoltcp --enable-kcp-proxy --bind-device true --relay-all-peer-rpc --multi-thread
# 参考上条命令生成的 TOML 修改配置文件，参考下文注意事项
$ sudo vim /opt/easytier/config/default.conf
# 启动服务
$ systemctl start easytier@default
```

注意事项：
- easytier-core 命令输出的 TOML 中`rpc_portal = "0.0.0.0:15888"`，本机在`/opt/easytier/config/default.conf`保持为`rpc_portal = "0.0.0.0:0`不变才正常连通网络。

## TeamViewer

![](https://teamviewer.scene7.com/is/image/teamviewergmbh/product-teamviewer-remote-support-banner?fmt=png-alpha&dpr=off)

[下載 Linux | TeamViewer](https://www.teamviewer.cn/cn/download/linux/) 下载 DEB 文件并安装。

## AnyDesk

![](https://anydesk.com.cn/_static/img/devices/anydesk-device-linux-c6f1dd.jpg)

[Remote Desktop Software for Ubuntu and Linux | AnyDesk](https://anydesk.com.cn/en/downloads/linux) 下载 DEB 文件并安装。

## 向日葵

![](https://res.orayimg.com/sunlogin/1.0/img/15a0b17.png)

[向日葵远程控制软件下载 - 贝锐向日葵官网](https://sunlogin.oray.com/download) 下载 DEB 文件。

直接安装会报错“Package libgconf-2-4 is not installed”。

```shell
# 下载安装依赖
sudo wget http://th.archive.ubuntu.com/ubuntu/pool/universe/g/gconf/libgconf-2-4_3.2.6-7ubuntu2_amd64.deb
sudo wget http://th.archive.ubuntu.com/ubuntu/pool/universe/g/gconf/gconf2-common_3.2.6-7ubuntu2_all.deb
sudo dpkg -i gconf2-common_3.2.6-7ubuntu2_all.deb
sudo dpkg -i libgconf-2-4_3.2.6-7ubuntu2_amd64.deb

# 安装向日葵
sudo dpkg -i SunloginClient_15.2.0.63064_amd64.deb 
```

## CopyQ

CopyQ 监控系统剪贴板并将其内容保存在自定义选项卡中。 保存的剪贴板稍后可以直接复制并粘贴到任何应用程序中。

![](https://hluk.github.io/CopyQ/images/application.png)

[Releases · hluk/CopyQ](https://github.com/hluk/CopyQ/releases) 下载 DEB 文件并安装。

`控制中心`-`键盘和语言`-`快捷键`，删除剪切板的快捷键。

打开 CopyQ，`文件`-`首选项`-`快捷键`-`全局`-`显示/隐藏主窗口`设置为`Meta/Super` `V`。

## 闪电藤/LocalSend

闪电藤是基于LocalSend的二次开发产品，在原有局域网文件传输基础上，增加了webdav传输和云传输的能力，是一个万能的文件传输助手。

[下载 | 闪电藤](https://lightningvine.zishu.life/download.html) 下载 DEB 文件并安装。
