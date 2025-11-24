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

开始菜单搜索`快捷键`-`新增`-`命令或脚本`。

- 命令：`上面脚本存放的目录/activate-wechat.sh`

右侧`添加`，输入快捷键`Ctrl` `Alt` `W`，右下角`应用`。

![](../assets/20250704230110.png)

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

## LX Music 洛雪音乐播放器

![](https://github.com/lyswhut/lx-music-desktop/raw/master/doc/images/app.png)

```shell
paru lx-music-desktop-bin
```

[洛雪音乐源](https://github.com/pdone/lx-music-source)

自定义源： 在`设置` `自定义源` `自定义源管理`中`在线导入`，导入后关闭导入窗口，在`自定义源`中勾选导入的源。
