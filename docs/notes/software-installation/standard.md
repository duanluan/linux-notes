# 普通类

## QQ

![](https://im.qq.com/linuxqq/images/new/linux-chat-desk.png)

[QQ Linux 版 - 轻松做自己](https://im.qq.com/linuxqq/index.shtml)

```shell
paru linuxqq
```

## 微信

[微信 Linux 版](https://linux.weixin.qq.com/)

```shell
paru wechat-bin
```

下载 [activate-wechat.sh](https://github.com/duanluan/shell-scripts/blob/main/activate-wechat.sh)。

开始菜单搜索`快捷键`-`新增`-`命令或脚本`，命令：`上面脚本存放的目录/activate-wechat.sh`。

右侧`添加`，输入快捷键`Ctrl` `Alt` `W`，右下角`应用`。

![](../assets/20250704230110.png)

微信在任务栏或托盘区时，按`Ctrl` `Alt` `W`即可激活微信主窗口。

## 飞书

![](https://p1-hera.feishucdn.com/tos-cn-i-jbbdkfciu3/5a438f8caf964e3592452138ac2c1189~tplv-jbbdkfciu3-image:0:0.image)

[下载飞书 App 及桌面客户端 - 飞书官网](https://www.feishu.cn/download)

AUR：
```shell
paru feishu-bin
```

最新版：

下载[获取飞书 Linux 最新版信息](https://gist.github.com/BoringCat/36288b399faff696d95a59dfe6476912?permalink_comment_id=5859554#gistcomment-5859554)脚本。

```shell
# 获取最新版本信息
$ python getFeishuLatestInfo.py 

pkgver=7.50.14
_pkghash_x64=e91d15e2
md5sums_x86_64=('3660717a2e15ba21867d9a21b966acf9')
pkgver=7.50.14
_pkghash_arm64=f247fca9
md5sums_aarch64=('ba0ad73b8a4bffbb1a4344b423bfbe42')

# 克隆 AUR 仓库
$ git clone https://aur.archlinux.org/feishu-bin.git
$ cd feishu-bin
# 修改 pkgver、_pkghash_x64、_pkghash_arm64 的行为上面输出的行
# 替换 sha256sums_x86_64、sha256sums_aarch64 的行为 md5sums_x86_64、md5sums_aarch64 的行
$ nano PKGBUILD
# 构建安装
$ makepkg -si
```

## 钉钉

[钉钉官网下载页面 - 钉钉，让进步发生](https://www.dingtalk.com/download)

```shell
paru dingtalk-bin
```

## WPS Office (365)

![](https://ee.wpscdn.cn/wpscn/custom/image/index_bg2.png)

[WPS Office for Linux-支持多版本下载_WPS官方网站](https://www.wps.cn/product/wpslinux)

- WPS Office 365：

  ```shell
  paru -S wps-office-365 wps-office-365-fonts
  ```
  如果安装后打不开，需要创建或编辑 WPS 解析配置文件：
  ```ini
  $ mkdir -p ~/.config/Kingsoft/
  $ nano ~/.config/Kingsoft/Office.conf
  
  [6.0]
  wpsoffice\Application%20Settings\AppComponentMode=prome_independ
  ```

- WPS Office：

  ```shell
  # ttf-wps-fonts 为 wps-office 所需符号字体。freetype2-wps 解决字体太粗。
  paru -S wps-office-cn wps-office-mui-zh-cn ttf-wps-fonts freetype2-wps
  ```
  
  解决**无法通过文件打开软件**的问题：
  
  开始菜单手动打开`WPS Office`，在右上角`全局设置` `设置` `其他`中`切换窗口管理模式`为`多组件模式`即可。
  
  ![](../assets/20251103223224.png)

## LibreOffice

LibreOffice 是一款开放源代码的自由免费全能办公软件，可运行于 Microsoft Windows, GNU/Linux 以及 macOS 等操作系统上。它包含了 Writer, Calc, Impress, Draw, Math 以及 Base 等组件，可分别用于文本文档、电子表格、幻灯片演示文稿、绘图文档、数学公式编辑、数据库管理等工作。

![](https://upload.wikimedia.org/wikipedia/commons/9/97/LibreOffice_7.5_start_center_screenshot.png)

[下载 LibreOffice | LibreOffice 简体中文官方网站 - 自由免费的办公套件](https://zh-cn.libreoffice.org/download/libreoffice/)

```shell
sudo pacman -S libreoffice-still libreoffice-still-zh-cn
```

## OnlyOffice

功能强大的在线编辑器，支持文本文档、电子表格、演示文稿、PDF 文件及可填写表格。开源、安全、跨平台且真正无障碍。

![](https://static-site.onlyoffice.com/public/images/templates/main/hero/hero@2x.png)

[ONLYOFFICE desktop and mobile apps | ONLYOFFICE](https://www.onlyoffice.com/download-desktop#desktop)

```shell
paru onlyoffice-bin
```

## 腾讯会议

![](https://cdn.meeting.tencent.com/assets/next-website/_next/static/images/feature3-1-79a7d46ff4fa27eb.png)

[下载中心 - 腾讯会议](https://meeting.tencent.com/download/index.html)

```shell
paru wemeet-bin
```

## electron-netease-cloud-music

自带 UnblockNeteaseMusic 的第三方网易云音乐客户端。

![](https://user-images.githubusercontent.com/13914967/52464615-8cee9900-2bb6-11e9-8aa3-a74d8cf7bea5.png)

```shell
paru electron-netease-cloud-music-bin
```

## 网易云 + UnblockNeteaseMusic

```shell
paru com.163.music.spark
```

先按照开发类中安装 nvm + Node.js。

```shell
git clone git@github.com:UnblockNeteaseMusic/server.git
sudo mv server/ /opt/UnblockNeteaseMusic
cd /opt/UnblockNeteaseMusic
# 启用 yarn
corepack enable yarn
# 使用 repo 的最新开发内容
yarn
yarn build
# 使用 52100:52101 端口启动
$ node app.js -p 52100:52101
INFO: (app) HTTP Server running @ http://0.0.0.0:52100
INFO: (app) HTTPS Server running @ http://0.0.0.0:52101
```

网易云音乐`设置`-`工具`-`http代理`-`自定义代理`：
- 类型：HTTP代理
- 服务器：`127.0.0.1`
- 端口：`52100`

点击“测试”按钮提示“该代理可使用”，点击“确定”按钮“现在重启”。

可用后将启动命令添加到服务，此服务只需要桌面用户登录后启动。

```shell
# 查看 nvm 应用的 Node 位置
$ nvm which 22
/home/duanluan/.nvm/versions/node/v22.17.0/bin/node

$ vim ~/.config/systemd/user/unblock-netease-music.service

[Unit]
Description=Revive unavailable songs for Netease Cloud Music (Refactored & Enhanced version)
After=network.target

[Service]
ExecStart=/home/duanluan/.nvm/versions/node/v22.17.0/bin/node /opt/UnblockNeteaseMusic/app.js -p 52100:52101
Restart=always

[Install]
WantedBy=graphical-session.target

$ systemctl --user daemon-reload
$ systemctl --user enable unblock-netease-music
$ systemctl --user start unblock-netease-music
$ systemctl --user status unblock-netease-music
```

## SPlayer

一个简约的音乐播放器，支持逐字歌词，网易云音乐云盘及本地音乐管理，流媒体 Jellyfin / Navidrome / Emby 播放，音乐频谱，移动端适配。

![](https://raw.githubusercontent.com/imsyy/SPlayer/refs/heads/dev/screenshots/SPlayer.jpg)

[Releases · imsyy/SPlayer](https://github.com/imsyy/SPlayer/releases)

```shell
paru splayer
```

## YesPlayMusic

高颜值的第三方网易云播放器

![](https://raw.githubusercontent.com/qier222/YesPlayMusic/master/images/library.png)

[Releases · qier222/YesPlayMusic](https://github.com/qier222/YesPlayMusic/releases)

```shell
paru yesplaymusic
```

## VutronMusic

高颜值的第三方网易云播放器；支持流媒体音乐，如navidrome、jellyfin、emby；支持本地音乐播放、离线歌单、逐字歌词、桌面歌词、Touch Bar歌词、Mac状态栏歌词显示、Linux-gnome与Linux-kde桌面状态栏歌词显示；支持降调降速，支持自定义主题等。

![](https://raw.githubusercontent.com/stark81/VutronMusic/main/images/localMusic.jpg)

[Releases · stark81/VutronMusic](https://github.com/stark81/VutronMusic/releases)

```shell
paru vutronmusic-bin
```

## go-musicfox

go-musicfox 是用 Go 写的又一款网易云音乐命令行客户端，支持各种音质级别、UnblockNeteaseMusic、Last.fm、MPRIS 和 macOS 交互响应（睡眠暂停、蓝牙耳机连接断开响应和菜单栏控制等）等功能特性。

![](https://raw.githubusercontent.com/go-musicfox/go-musicfox/refs/heads/master/previews/main.png)

[安装 - go-musicfox/go-musicfox](https://github.com/go-musicfox/go-musicfox?tab=readme-ov-file#%E5%AE%89%E8%A3%85)

```shell
# 下载安装预编译好的二进制
paru -S go-musicfox-bin
# 或者下载源代码编译安装
paru -S go-musicfox
```

## MoeKoeMusic：酷狗第三方客户端

一款开源简洁高颜值的酷狗第三方客户端。

![](https://raw.githubusercontent.com/MoeKoeMusic/MoeKoeMusic/main/images/1.png)

[Releases · MoeKoeMusic/MoeKoeMusic](https://github.com/MoeKoeMusic/MoeKoeMusic/releases)

```shell
paru moekoemusic-bin
```

## LX Music 洛雪音乐播放器

![](https://raw.githubusercontent.com/lyswhut/lx-music-desktop/master/doc/images/app.png)

```shell
paru lx-music-desktop-bin
```

[洛雪音乐源](https://github.com/pdone/lx-music-source)

自定义源： 在`设置` `自定义源` `自定义源管理`中`在线导入`，导入后关闭导入窗口，在`自定义源`中勾选导入的源。

## 哔哩哔哩客户端

基于哔哩哔哩官方客户端移植的 Linux 版本，支持漫游。

![](https://raw.githubusercontent.com/msojocs/bilibili-linux/master/res/screenshots/1.png)

[Releases · msojocs/bilibili-linux](https://github.com/msojocs/bilibili-linux/releases)

先在 [AUR (en) - bilibili-bin](https://aur.archlinux.org/packages/bilibili-bin) 查看依赖的 electron 哪个版本。

```shell
paru electron28-bin
paru bilibili-bin
```

## 百度网盘

[百度网盘 客户端下载](https://pan.baidu.com/download#pan)

```shell
paru baidunetdisk-bin
```
