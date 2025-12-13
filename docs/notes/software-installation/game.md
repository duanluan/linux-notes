# 游戏类

## Steam

Steam 是一个数字发行平台，提供数千款游戏的购买、下载和管理服务。它支持多人联机、社区交流、成就系统等功能，是全球最大的 PC 游戏平台之一。

[Steam — 高质量游戏平台](https://store.steampowered.com/about/)

```shell
sudo pacman -S steam

# 第一次使用代理或 TUN 启动，会下载更新
proxychains -q steam
```

## HMCL - Minecraft 启动器

HMCL 是一款开源、跨平台的 Minecraft 启动器，支持模组管理、游戏自定义、游戏自动安装 (Forge、NeoForge、Cleanroom、Fabric、Quilt、LiteLoader 和 OptiFine)、整合包创建、界面自定义等功能。

![](https://cdn.bbsmc.net/bbsmc/data/s1TSUWSf/images/9a9563b4fdffce87a632c89752c1d7302beb2a12.png)

方式一：从 [AUR](https://aur.archlinux.org/packages?K=hmcl) 安装

```shell
# 安装
$ paru hmcl-bin

# 解决缩放问题
$ sudo nano /usr/share/applications/hmcl-bin.desktop
# 将 Exec=hmcl-bin 修改为
Exec=/usr/bin/java -jar -Dglass.gtk.uiScale=1.5 /usr/share/java/hmcl-bin/hmcl-bin.jar
```

方式二：手动安装

从[官网](https://hmcl.huangyuhui.net/download)或 [GitHub Releases](https://github.com/HMCL-dev/HMCL/releases) 下载最新稳定版 jar 文件。


```shell
mkdir ~/.local/share/hmcl
mv HMCL-3.7.5.jar /home/duanluan/.local/share/hmcl/HMCL.jar

# 下载图标
wget -P /home/duanluan/.local/share/hmcl https://docs.hmcl.net/assets/img/hmcl.png

# 创建快捷方式
$ nano /home/duanluan/.local/share/applications/hmcl.desktop

[Desktop Entry]
Version=1.0
Type=Application
Name=HMCL
Comment=Hello Minecraft! Launcher, a powerful Minecraft launcher.
Exec=/usr/bin/java -jar -Dglass.gtk.uiScale=1.5 /home/duanluan/.local/share/hmcl/HMCL.jar
Icon=/home/duanluan/.local/share/hmcl/hmcl.png
Terminal=false
StartupNotify=false
Categories=Game;
StartupWMClass=org.jackhuang.hmcl.Launcher
```
