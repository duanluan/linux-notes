# 系统类

## 🏗️ base-devel + cmake + unzip（必须）

````shell
sudo pacman -S base-devel cmake unzip
````

- base-devel：基础开发工具包组，包含了编译软件包所需的常见工具。
- cmake：跨平台的构建系统工具，用于自动化编译过程，通常与源代码编译相关。
- unzip：解压缩 zip 格式文件。

## 📦 AUR 助手：Yay & Paru (必装)

Arch 用户软件仓库 (AUR) 的辅助工具，用于方便地安装社区包。

```shell
# 安装 yay
sudo pacman -S yay
# 配置 yay：启用开发版(如 -git)包更新检查，并保存到配置文件 ~/.config/yay/config.json 使其永久生效
yay -Y --devel --save
```

也可以使用 [paru](https://github.com/Morganamilo/paru)（功能更强，编译稍慢）：

```shell
# 克隆 paru 源码仓库
git clone https://aur.archlinux.org/paru.git
cd paru
# 构建并安装 paru
makepkg -si

# 安装完成后返回上级目录并删除源码文件夹
cd ..
rm -rf paru
```

核心区别：Yay 默认只比对 AUR 页面上的静态版本号，而 Paru 能主动运行脚本计算 源码的实时版本号。

下载的软件可以在 [AUR - Packages](https://aur.archlinux.org/packages) 搜索，或使用命令行：
```shell
yay -Ss 软件名
```

也可以在开始菜单搜索`添加/删除软件`窗体中搜索软件名安装。

后续我说`商店安装`就是在这装，有些从 AUR 装可能会装不上。

![](../assets/20250704220323.png)

Paru 技巧：在代码审阅界面，按`q`可直接退出审阅并继续安装。

常见问题：[解决“一个或多个文件没有通过有效性检查”](../questions.html#解决-一个或多个文件没有通过有效性检查)

## 🗜️ Zram 内存压缩

```shell
# 安装 zram-generator
$ sudo pacman -S zram-generator
# 创建配置文件
$ sudo nano /etc/systemd/zram-generator.conf

[zram0]
# 压缩算法，zstd 是性能和压缩率的最佳平衡
compression-algorithm = zstd
# 1.0 表示分配动态内存大小的 100% 作为 zram 设备
zram-size-ram-max = 1.0

# 启动 zram 服务，它是一个 systemd 生成器所以不需要 enable
$ sudo systemctl daemon-reload
$ sudo systemctl start systemd-zram-setup@zram0.service
# 查看 zram 设备信息
$ zramctl

NAME       ALGORITHM DISKSIZE  DATA COMPR TOTAL STREAMS MOUNTPOINT
/dev/zram0 zstd            4G  3.8G  1.1G  1.1G      16 [SWAP]
```

## ⌨️ Rime 雾凇拼音

```shell
# 搜索并安装 Rime 拼音
paru fcitx5-rime
# 搜索并安装雾凇拼音方案
paru rime-ice
```

托盘区输入法图标，右键`重新启动`，再右键`配置`。

点击`添加输入法`按钮，添加`中州韵`，删除`键盘-汉语`。

![](../assets/20250702021910.png)

配置参考：[AUR (zh_CN) - rime-ice-git](https://aur.archlinux.org/packages/rime-ice-git)

```shell
# 创建 Rime 配置
$ mkdir -p ~/.local/share/fcitx5/rime
$ nano ~/.local/share/fcitx5/rime/default.custom.yaml

patch:
  # 仅使用「雾凇拼音」的默认配置，配置此行即可
  __include: rime_ice_suggestion:/
  # 候选词数量
  menu/page_size: 10
  # 快捷键绑定
  key_binder:
    bindings:
      # , 键切换候选词到上页
      - { when: composing, accept: comma, send: Page_Up }
      # . 键切换候选词到下页
      - { when: composing, accept: period, send: Page_Down }
```

修改配置后需在托盘区键盘图标右键`重新启动`。

## 🐚 Nushell

[Nushell](https://www.nushell.sh/zh-CN/) 是一种新的 Shell。

- 利用管道控制任意系统：Nu 可以在 Linux、macOS、BSD 和 Windows 上运行。一次学习，处处可用。
- 一切皆数据：Nu 管道使用结构化数据，你可以用同样的方式安全地选择，过滤和排序。停止解析字符串，开始解决问题。
- 强大的插件系统：具备强大的插件系统，Nu 可以轻松扩展。

![](https://www.nushell.sh/frontpage/ls-example.png)
![](https://www.nushell.sh/frontpage/fetch-example.png)
![](https://www.nushell.sh/frontpage/miette-example.png)

```shell
sudo pacman -S nushell
```

## 🔄 debtap

一个用于将 .deb 软件包转换为 Arch Linux 软件包的脚本，专注于准确性。

[helixarch/debtap: A script for converting .deb packages into Arch Linux packages, focused on accuracy](https://github.com/helixarch/debtap)

```shell
# 安装 debtap
$ paru debtap

# 初始化 debtap 数据库
$ sudo debtap -u

cat: /var/cache/debtap/base-packages: 没有那个文件或目录
sort: 无法读取: /var/cache/debtap/extended-base-packages-list-temp: 没有那个文件或目录

# 因为用的是 Manjaro，所以需要预创建 debtap 需要的缓存目录与临时文件
$ sudo install -d -m755 /var/cache/debtap
$ sudo touch /var/cache/debtap/base-packages /var/cache/debtap/extended-base-packages-list-temp

# 重新初始化 debtap 数据库
$ sudo debtap -u
```

## 🔥 Spark Store 星火应用商店

```shell
$ paru amber-ce-bookworm

==> 获取源代码...
  -> 找到 amber-ce-bookworm-12.7.5.tar.gz
==> 正在验证 source 文件，使用sha256sums...
    amber-ce-bookworm-12.7.5.tar.gz ... 失败
==> 错误： 一个或多个文件没有通过有效性检查！
错误： 未能下载 'amber-ce-bookworm-12.7.5-1' 的源: 
错误： 未能构建的软件包：amber-ce-bookworm-12.7.5-1

```

因为 gitee 下载增加了机器验证，所以需要手动下载 [下载仓库 · Amber CE/amber-ce-bookworm - Gitee.com](https://gitee.com/amber-ce/amber-ce-bookworm/repository/archive/12.7.5.tar.gz)

```shell
# 将下载的文件放到 AUR 构建目录
cd ~/.cache/paru/clone/amber-ce-bookworm
mv -f ~/Downloads/.hmcl/amber-ce-bookworm-12.7.5.tar.gz ./

# 重新构建并安装
makepkg -si
```

无 N 卡报错“无法获取 NVIDIA 驱动版本 Can not determine NVIDIA Driver version”可以忽略，安装后需重启。

[下载星火应用商店 - Spark Store](https://www.spark-app.store/download/) 下载 DEB 文件。

开始菜单搜索`ACE Bookworm兼容环境`并打开：
```shell
sudo apt update
sudo apt install ./spark-store_4.8.2_amd64.deb
```

## 🌊 Microsoft Edge

微软基于 Chromium 开发的浏览器。

![](https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/b0ec664721b948bdb4de34621ba1ce25-png-w1920.avif)

[官方下载 Microsoft Edge](https://www.microsoft.com/zh-cn/edge/download)

```shell
paru microsoft-edge-stable-bin
```

开始菜单搜索`默认应用程序`可以修改默认网页浏览器。

## 🌐 Google Chrome

[Google Chrome 网络浏览器](https://www.google.com/chrome/)

```shell
paru google-chrome
```

## 🧅 Tor Browser

Tor 浏览器是一款基于隐私保护的开源浏览器，通过多层加密和中继网络匿名访问互联网，隐藏用户的身份和位置。

```shell
# paru tor-browser-bin 时导入报错“gpg: 从公钥服务器接收失败：无数据 错误： 未能运行： gpg --recv-keys EF6E286DDA85EA2A4BA7DE684E2C6E8793298290”，所以手动导入
curl -s https://keys.openpgp.org/vks/v1/by-fingerprint/EF6E286DDA85EA2A4BA7DE684E2C6E8793298290 | gpg --import
paru tor-browser-bin
```
