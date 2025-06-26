# 工具类

## 应用商店安装

### KeePassXC

### FSearch：类 Everything

### SimpleScreenRecorder

[Main page - SimpleScreenRecorder - Maarten Baert's website](https://www.maartenbaert.be/simplescreenrecorder/)

SimpleScreenRecorder是一款屏幕录制软件，它具有录制整个桌面、应用窗口、指定窗口大小以及音/视频同步，视频缩放等功能。

![](https://files.maartenbaert.be/simplescreenrecorder/screenshot.png)

## Spark Store 星火应用商店安装

### Wine 运行器

---

## Free Download Manager

[Free Download Manager for Linux | Download](https://www.freedownloadmanager.org/zh/download-fdm-for-linux.htm) 下载 DEB 文件打开并安装。

## qBittorrent Enhanced Edition

[Releases · c0re100/qBittorrent-Enhanced-Edition](https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases) 下载 AppImage 文件。

```shell
sudo mkdir /opt/qBittorrent
# 解压 AppImage 复制图标和快捷方式
./qBittorrent-Enhanced-Edition-x86_64.AppImage --appimage-extract
sudo cp squashfs-root/org.qbittorrent.qBittorrent.desktop /usr/share/applications/
sudo cp squashfs-root/qbittorrent.svg /opt/qBittorrent/
# 移动到 /opt 下并赋予执行权限
sudo mv qBittorrent-Enhanced-Edition-x86_64.AppImage /opt/qBittorrent/
chmod +x /opt/qBittorrent/qBittorrent-Enhanced-Edition-x86_64.AppImage

# 修改快捷方式，Exec 修改为 /opt/qBittorrent/qBittorrent-Enhanced-Edition-x86_64.AppImage %U，Icon 修改为 /opt/qBittorrent/qbittorrent.svg
sudo vim /usr/share/applications/org.qbittorrent.qBittorrent.desktop 
```

## Geekbench 6 跑分

[Downloading Geekbench 6 for Linux](https://www.geekbench.com/download/linux/) 下载

```shell
tar zxvf Geekbench-6.4.0-Linux.tar.gz
cd Geekbench-6.4.0-Linux
./geekbench6
```

## Synology Drive Client

[下载中心 | 群晖科技 Synology Inc.](https://www.synology.cn/zh-cn/support/download) 下载 DEB 文件并安装。

## Clash Verge

[Releases · clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev/releases) 下载 DEB 文件并安装。

## Brook

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

- [GnuPG - Frontends](https://www.gnupg.org/software/frontends.html)
- [Releases · saturneric/GpgFrontend](https://github.com/saturneric/GpgFrontend/releases)

```shell
sudo mkdir /opt/GpgFrontend
# 解压 AppImage 复制图标和快捷方式
./GpgFrontend-2.1.7-qt6-linux-x86_64.AppImag --appimage-extract
sudo cp squashfs-root/com.bktus.gpgfrontend.desktop /usr/share/applications/
sudo cp squashfs-root/com.bktus.gpgfrontend.png /opt/GpgFrontend/
# 移动到 /opt 下并赋予执行权限
sudo mv GpgFrontend-2.1.7-qt6-linux-x86_64.AppImage /opt/GpgFrontend/GpgFrontend-qt6-x86_64.AppImage
chmod +x /opt/GpgFrontend/GpgFrontend-qt6-x86_64.AppImage

# 修改快捷方式，Exec 修改为 /opt/GpgFrontend/GpgFrontend-qt6-x86_64.AppImage，Icon 修改为 /opt/GpgFrontend/com.bktus.gpgfrontend.png
sudo vim /usr/share/applications/com.bktus.gpgfrontend.desktop
```

## Snipaste

[Snipaste 下载](https://zh.snipaste.com/download.html)桌面版 Linux AppImage。

```shell
sudo mikdir /opt/snipaste
# 赋予执行权限
chmod +x ./Snipaste-2.10.6-x86_64.AppImage
# 解压 AppImage 复制图标和快捷方式
./Snipaste-2.10.6-x86_64.AppImage --appimage-extract
sudo cp squashfs-root/Snipaste.desktop /usr/share/applications/
sudo cp squashfs-root/Snipaste.png /opt/snipaste/
# 移动到 /opt 下并赋予执行权限
sudo mv Snipaste-2.10.6-x86_64.AppImage /opt/snipaste/Snipaste-x86_64.AppImage
chmod +x /opt/snipaste/Snipaste-x86_64.AppImage

# 修改快捷方式，Exec 修改为 /opt/snipaste/Snipaste-x86_64.AppImage，Icon 修改为 /opt/snipaste/Snipaste.png
sudo vim /usr/share/applications/Snipaste.desktop
```

## uTools

应用商店安装的无法打开。

[下载中心 - uTools 官网](https://www.u-tools.cn/download/)下载 DEB 文件并安装。

## RustDesk

[Releases · rustdesk/rustdesk](https://github.com/rustdesk/rustdesk/releases/)下载 DEB 文件并安装。

## VMware Workstation Pro

注意：在 Deepin 23 上可能出现键盘锁死 Ctrl 的问题

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

- [如何在v23上面安装vmbox虚拟机（run）－论坛－深度科技](https://bbs.deepin.org/post/254728)
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

[Sunshine+Moonlight 低延迟远程串流和平板副屏](https://blog.zhjh.top/?p=uvdJRjuB)

## OBS Studio

[下载 | OBS](https://obsproject.com/zh-cn/download)

```shell
# 查看 ffmpeg 是否已存在
$ ffmpeg
ffmpeg version 6.1.1-2deepin0 Copyright (c) 2000-2023 the FFmpeg developers

# ffmpeg 不存在就先安装 ffmpeg
sudo apt-get install ffmpeg

# 安装 OBS Studio
flatpak install flathub com.obsproject.Studio
```

## VLC Media Player

```shell
sudo apt install vlc
```

## Remote Desktop Manager

[Download - RDM - Devolutions](https://devolutions.net/remote-desktop-manager/download/) 下载 DEB 文件并安装。

## EasyTier

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

[下載 Linux | TeamViewer](https://www.teamviewer.cn/cn/download/linux/) 下载 DEB 文件并安装。

## AnyDesk

[Remote Desktop Software for Ubuntu and Linux | AnyDesk](https://anydesk.com.cn/en/downloads/linux) 下载 DEB 文件并安装。

## CopyQ

[Releases · hluk/CopyQ](https://github.com/hluk/CopyQ/releases) 下载 DEB 文件并安装。

`控制中心`-`键盘和语言`-`快捷键`，删除剪切板的快捷键。

打开 CopyQ，`文件`-`首选项`-`快捷键`-`全局`-`显示/隐藏主窗口`设置为`Meta/Super` `V`。

## 闪电藤/LocalSend

[下载 | 闪电藤](https://lightningvine.zishu.life/download.html) 下载 DEB 文件并安装。
