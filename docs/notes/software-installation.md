# 软件安装

`Ctrl` `Alt` `T`打开终端：
```shell
# 更新 APT 软件包索引
sudo apt update
```

## 应用商店安装

### Microsoft Edge

### QQ

### 微信

### 飞书

### WPS Office For Linux 个人版

### KeePassXC

### 腾讯会议

### Another Redis Desktop Manager

### Double Commander

![](20250315191442.png)

跨平台的开源文件管理器，采用双面板布局，支持多标签页浏览、批量重命名、内置文本编辑器和文件查看器等功能。

`控制中心`-`键盘和语言`-`快捷键`新建，命令为`/opt/apps/com.doublecommander/files/squashfs-root/AppRun -C`。

[DC - Command Line](https://doublecmd.github.io/doc/en/commandline.html)

---

## Free Download Manager

[Free Download Manager for Linux | Download](https://www.freedownloadmanager.org/zh/download-fdm-for-linux.htm) 下载 DEB 文件打开并安装。

## Spark Store 星火应用商店安装

在[下载 - 星火应用商店](https://www.spark-app.store/download_latest)中下载软件本体，打开 DEB 文件安装。 

### Snipaste

### Wine 运行器

### MobaXterm Pro

---

## Geekbench 6 跑分

[Downloading Geekbench 6 for Linux](https://www.geekbench.com/download/linux/) 下载

```shell
tar zxvf Geekbench-6.4.0-Linux.tar.gz
cd Geekbench-6.4.0-Linux
./geekbench6
```

## flatpak

[Linux Debian/Deepin flatpak 换源安装软件](https://blog.zhjh.top/?p=lyfHOgD0)

## Synology Drive Client

[下载中心 | 群晖科技 Synology Inc.](https://www.synology.cn/zh-cn/support/download) 下载 DEB 文件并安装。

## Git

```shell
sudo apt install git
```

创建 SSH Key：

参考 [Generating a new SSH key and adding it to the ssh-agent - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)。

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
```

设置 Git 用户信息，否则 clone 时可能会报错`GnuTLS recv error (-110)`。

```shell
git config --global user.name "your_name"
git config --global user.email "your_email@example.com"
```

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
/home/your_name/.nami/bin/brook client -s 1.2.3.4:9999 -p 123456 --socks5 127.0.0.1:1080


# 将 brook 脚本创建为 systemd 服务
$ sudo vim /etc/systemd/system/brook.service

[Unit]
Description=A cross-platform programmable network tool.
After=network.target

[Service]
ExecStart=bash /home/your_name/workspaces/service/brook.service.sh
Restart=always
RestartSec=5
StandardOutput=null
StandardError=null
#StandardError=file:/home/your_name/workspaces/service/brook_error.log
User=your_name

[Install]
WantedBy=default.target
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

## nvm + Node.js + pnpm + nrm

[脚本安装 nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)

```shell
# 代理下载安装脚本
proxychains4 wget https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh
# 替换安装脚本中 git clone 为 proxychains4 git clone
sed -i 's/command git clone/command proxychains4 git clone/g' install.sh
# 执行脚本
bash install.sh
# 生效新环境变量
source ~/.bashrc
# 安装 Node.js
nvm install 18
# 安装 pnpm
npm install -g pnpm
# 自动安装配置 pnpm
pnpm setup
source ~/.bashrc
# 安装 nrm
pnpm add -g nrm
# 查看所有镜像源
nrm ls
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
  huawei ------- https://repo.huaweicloud.com/repository/npm/
# 使用镜像源
nrm use cnpm
```

## JDK

[Java 8, 11, 17, 21, 23 Download for Linux, Windows and macOS](https://www.azul.com/downloads/?os=debian&architecture=x86-64-bit&package=jdk#zulu)

```shell
tar zxvf zulu21.40.17-ca-jdk21.0.6-linux_x64.tar.gz
sudo mkdir /opt/java
sudo mv zulu21.40.17-ca-jdk21.0.6-linux_x64 /opt/java/zulu21.40.17-ca-jdk21.0.6
# 末尾追加环境变量
$ vim ~/.bashrc
# jdk
export JAVA_HOME="/opt/java/zulu21.40.17-ca-jdk21.0.6"
export PATH=$JAVA_HOME/bin:$PATH

$ source ~/.bashrc
$ java -version
openjdk version "21.0.6" 2025-01-21 LTS
OpenJDK Runtime Environment Zulu21.40+17-CA (build 21.0.6+7-LTS)
OpenJDK 64-Bit Server VM Zulu21.40+17-CA (build 21.0.6+7-LTS, mixed mode, sharing)

```

## Gradle

[Gradle | Releases](https://gradle.org/releases/) 下载`binary-only`。

```shell
unzip gradle-7.6.4-bin.zip
sudo mkdir /opt/gradle
sudo mv gradle-7.6.4 /opt/gradle/
# 末尾追加环境变量
$ vim ~/.bashrc
# gradle
export GRADLE_HOME="/opt/gradle/gradle-7.6.4"
export PATH=$GRADLE_HOME/bin:$PATH

$ source ~/.bashrc
$ gradle -v

Welcome to Gradle 7.6.4!
……

```

## JetBrains IntelliJ IDEA

[下载 IntelliJ IDEA](https://www.jetbrains.com/zh-cn/idea/download/?section=linux)

[MIME 类型（MIME Type）完整对照表](https://mime.wcode.net/zh-hans/)

```shell
# 解压并移动到 /opt 下
tar zxvf ideaIU-2024.3.4.1.tar.gz
sudo mkdir /opt/jetbrains
sudo mv idea-IU-243.25659.59/ /opt/jetbrains/idea
# 创建快捷方式
sudo vim /usr/share/applications/idea.desktop

[Desktop Entry]
Name=IntelliJ IDEA Ultimate
Comment=The IDE for Professional Development in Java and Kotlin
GenericName=IDE
Exec=/opt/jetbrains/idea/bin/idea %F
Icon=/opt/jetbrains/idea/bin/idea.svg
Type=Application
# 禁用启动时进度通知
StartupNotify=false
# 与应用程序窗口关联的 WM_CLASS 属性
StartupWMClass=jetbrains-idea
Categories=TextEditor;Development;IDE;
MimeType=application/java;application/java-archive;application/java-byte-code;application/java-vm;
Keywords=idea;
```

## JetBrains WebStorm

[下载 WebStorm](https://www.jetbrains.com/zh-cn/webstorm/download/#section=linux)

```shell
# 解压并移动到 /opt 下
tar zxvf WebStorm-2024.3.4.tar.gz
sudo mkdir /opt/jetbrains
sudo mv WebStorm-243.25659.40/ /opt/jetbrains/webstorm
# 创建快捷方式
sudo vim /usr/share/applications/webstorm.desktop

[Desktop Entry]
Name=WebStorm
Comment=The JavaScript and TypeScript IDE by JetBrains
GenericName=IDE
Exec=/opt/jetbrains/webstorm/bin/webstorm %F
Icon=/opt/jetbrains/webstorm/bin/webstorm.svg
Type=Application
# 禁用启动时进度通知
StartupNotify=false
# 与应用程序窗口关联的 WM_CLASS 属性
StartupWMClass=jetbrains-webstorm
Categories=TextEditor;Development;IDE;
MimeType=application/xhtml+xml;text/javascript;text/css;
Keywords=webstorm;
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
sudo adduser your_name vboxusers
sudo adduser your_name usbfs

# 移除 KVM 模块
sudo rmmod kvm_amd
sudo rmmod kvm
# 将 kvm 和 kvm_amt 加入黑名单模块列表
echo "blacklist kvm" | sudo tee /etc/modprobe.d/blacklist.conf
echo "blacklist kvm_amd" | sudo tee -a /etc/modprobe.d/blacklist.conf
sudo update-initramfs -u
```

[Downloads – Oracle VirtualBox](https://www.virtualbox.org/wiki/Downloads) 下载 Extension Pack，打开 VirtualBox，将下载的文件拖入窗口安装。

## ~~QEMU + Virtual Machine Manager~~

- ~~[求助QEMU怎么安装－论坛－深度科技](https://bbs.deepin.org/zh/post/259084)~~

~~Wine 运行器菜单栏`虚拟机`-`使用虚拟机运行Windows应用`。~~

~~点击`安装Qemu`。~~

```shell
# 安装 Virtual Machine Manager
sudo apt install virt-manager
```

**qemu-guest-agent 无法启动！**

## XMind

[免费下载 Xmind 思维导图 | Xmind 中文官方网站](https://xmind.cn/download/) 下载 DEB 文件并安装。

## 搜狗输入法

fcitx5 和 fcitx 冲突，要先卸载 fcitx5。

```shell
# 卸载 fcitx5
sudo apt purge fcitx5
sudo apt purge fcitx5-chinese-addons-data

# 安装 fcitx
sudo apt install fcitx
```

[搜狗输入法 linux](https://shurufa.sogou.com/linux) 下载 DEB 文件并安装。

注销或重启，`控制中心`-`键盘和语言`-`输入法`中就空了，只能通过开始菜单`输入法配置`管理。

## Apifox

[Apifox](https://apifox.com/) 下载 DEB 文件并安装。

## Navicat Premium

此处安装的是 Windows 版。

[Navicat | 下载 Navicat Premium Windows](https://www.navicat.com.cn/download/navicat-premium#windows)

Wine 运行器菜单栏`程序`-`安装更多Wine`：

![](assets/20250309230531.png)

菜单栏`Wine`-`安装常见字体`，左下角`WINE配置`-`字体商店`安装 1~5 的字体。

左下角`WINE配置`-`配置容器`，调整`应用程序`-`Windows 版本`为`Windows 11`，`显示`-`屏幕分辨率`调大以适应本机分辨率。

![](assets/20250309231350.png =300x)
![](assets/20250309231516.png =300x)

选择下载的安装包，点击`运行程序`安装，安装前会提示先安装 mono。

![](assets/20250309231054.png)

安装后会在启动器创建快捷方式但打不开。

修改 Wine 运行器中执行程序为`/home/duanluan/.wine/drive_c/Program Files/PremiumSoft/Navicat Premium 17/navicat.exe`，名称随便，创建快捷方式到桌面，参考这个内容修改启动器中现有快捷方式的内容。

![](assets/20250310001055.png)

```shell
$ vim ~/.local/share/applications/wine/Programs/PremiumSoft/Navicat\ Premium\ 17.desktop

[Desktop Entry]
Name=Navicat Premium 17
Exec=env WINEPREFIX='/home/duanluan/.wine' WINEDEBUG=FIXME,ERR,WARN,TRACE,Message  /home/duanluan/.deepwinerunner/wine/wine-staging-wow64-10.2-debian10-amd64/bin/wine '/home/duanluan/.wine/drive_c/Program Files/PremiumSoft/Navicat Premium 17/navicat.exe'  
Icon=D66E_navicat.0
Type=Application
StartupNotify=true
```

## Sunshine + Moonlight

[Sunshine+Moonlight 低延迟远程串流和平板副屏](https://blog.zhjh.top/?p=uvdJRjuB)

## Sublime Text

[Linux Package Manager Repositories - Sublime Text](https://www.sublimetext.com/docs/linux_repositories.html)

```shell
# 安装 GPG key
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/sublimehq-archive.gpg > /dev/null
# 选择稳定版
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
# 选择开发版
echo "deb https://download.sublimetext.com/ apt/dev/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
# 更新并安装
sudo apt update
sudo apt install sublime-text
# 如果失败请确保已将 apt 设置为使用 https 源
sudo apt-get install apt-transport-https
```

## Typora

[Linux - Typora 官方中文站](https://typoraio.cn/#linux) 下载 DEB 文件并安装。

如果需要开心版就下载 [1.9.3](https://download2.typoraio.cn/linux/typora_1.9.3_amd64.deb)。

Typora 激活：
```shell
$ git clone https://github.com/hazukieq/Yporaject.git
$ sudo apt install cargo
$ cd Yporaject/
$ cargo build & cargo run
$ sudo cp target/debug/node_inject /usr/share/typora

$ cd /usr/share/typora/
$ sudo chmod +x node_inject
$ sudo ./node_inject
extracting node_modules.asar
adding hook.js
applying patch
packing node_modules.asar
done!

$ cd -
$ cd license-gen/
$ cargo build & cargo run
License for you: ……
```

打开 Typora，菜单栏`帮助`-`我的许可证`-`输入序列号`，邮箱随便，等待一段时间后提示“链接服务器失败，使用尝试访问国内域名进行激活？”，确认即可。

鼓励大家支持正版软件，购买正版授权不仅能获得更好的技术支持，还能为软件开发者提供持续的创新动力。