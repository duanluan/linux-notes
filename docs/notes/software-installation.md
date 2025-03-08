# 软件安装

`Ctrl` `Alt` `T`打开终端：
```shell
# 更新 APT 软件包索引
sudo apt update
```

## 应用商店安装

- Microsoft Edge
- QQ
- 微信
- WPS Office For Linux 个人版
- KeePassXC

## Spark Store 星火应用商店

在[下载 - 星火应用商店](https://www.spark-app.store/download_latest)中下载软件本体，打开 DEB 文件安装。 

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

[Releases · clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev/releases) 下载 DEB 文件并打开安装。

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

## Synology Drive Client

[下载中心 | 群晖科技 Synology Inc.](https://www.synology.cn/zh-cn/support/download) 下载 DEB 文件并打开安装。

## 软件问题

### 搜狗输入法 Deepin Next 版双拼时 v 模式无法关闭

- [搜狗输入法deepin next选字序号有时候是字母，为啥？－论坛－深度科技](https://bbs.deepin.org.cn/zh/post/276993)
- [搜狗输入法双拼问题－论坛－深度科技](https://bbs.deepin.org/post/281305)

可以先用系统自带的双拼，参考第二个帖子 [14 楼](https://bbs.deepin.org/post/281305?postId=1675406)。

### 微信 Linux 无法用 Ctrl + Alt + W 全局快捷键激活窗口

- [【V23】微信Linux 版本快捷键聚焦窗口（等同windows 的 ctrl+alt+w)－论坛－深度科技](https://bbs.deepin.org/post/281125)

```shell
sudo apt install xdotool
```

`控制中心`-`键盘和语言`-`快捷键`，最下方新增。

- 名称：微信
- 命令：`xdotool search --name '微信' windowactivate`
- 快捷键：`Ctrl` `Alt` `W`

### KeePassXC 浏览器集成报错已安装到此位置的代理程序可执行文件丢失

- [Linux/Deepin 23 Edge/Chrome 浏览器 KeePassXC 无法连接数据的问题](https://blog.zhjh.top/?p=hIsteIcAmfn66ZL1sC82u)

`KeePassXC`-菜单栏`工具`-`设置`-`浏览器集成`-`高级`选项卡-`使用自定义代理位置`浏览：`/opt/apps/org.keepassxc.keepassxc/files/squashfs-root/usr/bin/keepassxc-proxy`
