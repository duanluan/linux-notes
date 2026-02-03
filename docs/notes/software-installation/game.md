# 游戏类

## Steam

Steam 是一个数字发行平台，提供数千款游戏的购买、下载和管理服务。它支持多人联机、社区交流、成就系统等功能，是全球最大的 PC 游戏平台之一。

[Steam — 高质量游戏平台](https://store.steampowered.com/about/)

```shell
sudo pacman -S steam

# 第一次使用代理或 TUN 启动，会下载更新
proxychains -q steam
```

## Heroic Games Launcher

Heroic 是一款免费且开源的 Epic、GOG 和 Amazon Prime Games 启动器，适用于 Linux、Windows 和 macOS。也适用于 SteamDeck！

![](https://heroicgameslauncher.com/_next/static/images/heroic_01-766acd921e989be3aec2af1174d69dea.webp)

[Download Heroic](https://heroicgameslauncher.com/downloads)

```shell
paru heroic-games-launcher-bin
```

## Lutris

Lutris 是一款 Linux 平台上的开源游戏管理平台, 通过整合不同运行环境 (Runners) 来统一启动和管理来自 GOG、Epic、Steam 及模拟器等各个渠道的游戏。

![](https://lutris.net/static/images/screenshots/gog-screen.jpg)

[Download Lutris](https://lutris.net/downloads)

```shell
sudo pacman -S lutris
```

## HMCL：Minecraft 启动器

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

## LauncherX：Minecraft 启动器

功能强大、界面优美的下一代 MineCraft 启动器。

![](https://corona.studio/assets/LauncherX_3-JbAuEZQu.webp)

[LauncherX 下载 - Corona Studio](https://corona.studio/lx/download)

使用脚本 [install-launcherx-bin.sh - duanluan/shell-scripts](https://github.com/duanluan/shell-scripts/blob/main/install-launcherx-bin.sh) 进行安装。
