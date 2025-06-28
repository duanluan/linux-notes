# 普通类

## QQ

![](https://im.qq.com/linuxqq/images/new/linux-chat-desk.png)

[QQ Linux 版 - 轻松做自己](https://im.qq.com/linuxqq/index.shtml) 下载 DEB 文件并安装。

## 微信

[微信 Linux 版](https://linux.weixin.qq.com/) 下载 DEB 文件并安装。

下载 [activate-wechat.sh](https://github.com/duanluan/shell-scripts/blob/main/activate-wechat.sh)。

`开始菜单`-`键盘`-`应用程序快捷键`，添加。

- 命令：`上面脚本存放的目录/activate-wechat.sh`
- 快捷键：`Ctrl` `Alt` `W`

## 飞书

![](https://p1-hera.feishucdn.com/tos-cn-i-jbbdkfciu3/5a438f8caf964e3592452138ac2c1189~tplv-jbbdkfciu3-image:0:0.image)

[下载飞书 App 及桌面客户端 - 飞书官网](https://www.feishu.cn/download) 下载 DEB 文件并安装。

## 钉钉

[钉钉官网下载页面 - 钉钉，让进步发生](https://www.dingtalk.com/download) 下载 DEB 文件并安装。

## WPS Office For Linux 个人版

![](https://ee.wpscdn.cn/wpscn/custom/image/index_bg2.png)

[WPS Office for Linux-支持多版本下载_WPS官方网站](https://www.wps.cn/product/wpslinux) 下载 DEB 文件并安装。

## 腾讯会议

![](https://cdn.meeting.tencent.com/assets/next-website/_next/static/images/feature3-1-79a7d46ff4fa27eb.png)

[下载中心 - 腾讯会议](https://meeting.tencent.com/download/index.html) 下载 DEB 文件并安装。

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

- [Sublime Text 使用记录](https://blog.zhjh.top/?p=d42feMmERGrK8UUTXUWqu)

## Typora

![](https://typoraio.cn/img/screen/Group-screen.png)

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

## 网易云 + UnblockNeteaseMusic

星火应用商店下载并安装[网易云音乐（wine）](spk://store/music/com.163.music.spark)。

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
