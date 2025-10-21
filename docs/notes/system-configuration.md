# 设备介绍

- AMD 锐龙 7 PRO 8845HS
- 32GBx2 DDR5 5600MHz
- PCIe 4.0 NVMe SSD 2TB

Geekbench 6 跑分结果：
- Deepin 23.1：[Tianbei GEM12 - Geekbench](https://browser.geekbench.com/v6/cpu/10922940)
- Xubuntu 24.04.2：[Tianbei GEM12 - Geekbench](https://browser.geekbench.com/v6/cpu/12633571)
- Manjaro KDE Plasma 25.0.3：[Tianbei GEM12 - Geekbench](https://browser.geekbench.com/v6/cpu/12680900)

# 备份旧发行版

我并没有备份整个系统，而只是将 home 目录压缩拷贝了出来。

```shell
# 将个人目录打包
sudo tar -cf /tmp/home_xxx.tar /home/xxx
# 新开终端查看打包后大小
watch -n 1 ls -lh /tmp/home_xxx.tar
```

# 系统配置

## Pacman 换源

如果在安装前选了时区和语言，`/etc/pacman.d/mirrorlist`开头会默认有`Country : China`的源。

```
##
## Manjaro Linux default mirrorlist
## Generated on 2025-06-30 23:48
##
## Please use 'pacman-mirrors -f [NUMBER] [NUMBER]' to modify mirrorlist
## (Use 0 for all mirrors)
##

## Country : China
Server = https://mirrors.jlu.edu.cn/manjaro/stable/$repo/$arch

## Country : United_States
Server = https://ohioix.mm.fcix.net/manjaro/stable/$repo/$arch

## Country : Bangladesh
Server = https://bd.mirror.vanehost.com/Manjaro/stable/$repo/$arch
```

如果没有，参考 [archlinux | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/archlinux/) 换源。

或者使用命令：

```shell
sudo pacman-mirrors -c china
```

## 启用 Pacman 颜色

```shell
# 取消注释 /etc/pacman.conf 中的 #Color 为 Color
sudo nano /etc/pacman.conf
```

## 加速 AUR 的 GitHub 下载 + git 全局配置 GitHub 镜像

安装 axel 多线程下载工具，创建替换 github 下载的脚本：

```shell
# 安装 axel
$ sudo pacman -S axel
# 创建脚本文件
$ sudo nano /home/duanluan/workspaces/bin/github-mirror-axel.sh

#! /bin/bash
echo "github-mirror-axel.sh 生效"
domin=`echo $2 | cut -f3 -d'/'`;
others=`echo $2 | cut -f4- -d'/'`;
case "$domin" in
    *github.com*)
        url="https://gh-proxy.com/https://github.com/"$others;
        ;;
    *)
        url=$2;
        ;;
esac
/usr/bin/axel -n 2 -a -o $1 $url

# 保存退出后赋予可执行权限
$ sudo chmod +x /home/duanluan/workspaces/bin/github-mirror-axel.sh
```

修改`makepkg.conf`：
```shell
# 复制 /etc/pacman.conf 到个人目录，避免系统更新 pacman 包时覆盖
cp /etc/makepkg.conf ~/.makepkg.conf

# 修改 ~/.makepkg.conf
nano ~/.makepkg.conf

# 找到 DLAGENTS 部分，修改为如下内容
DLAGENTS=('file::/usr/bin/curl -qgC - -o %o %u'
          #'ftp::/usr/bin/curl -qgfC - --ftp-pasv --retry 3 --retry-delay 3 -o %o %u'
          #'http::/usr/bin/curl -qgb "" -fLC - --retry 3 --retry-delay 3 -o %o %u'
          #'https::/usr/bin/curl -qgb "" -fLC - --retry 3 --retry-delay 3 -o %o %u'
          'ftp::/usr/bin/axel -n 10 -a -o %o %u'
          'http::/usr/bin/axel -n 10 -a -o %o %u'
          'https::/home/duanluan/workspaces/bin/github-mirror-axel.sh %o %u'
          'rsync::/usr/bin/rsync --no-motd -z %u %o'
          'scp::/usr/bin/scp -C %u %o')
```

遇到“没有状态文件，无法恢复下载！”提示，是因为之前使用 curl 下载到一半，现在又用 axel 下载。

删除缓存后重新下载，例如：

```shell
rm -rf ~/.cache/paru/clone/geekbench
paru geekbench
```

github 下载生效：

```shell
$ paru clash-verge-rev-bin

==> 获取源代码...
  -> 正在下载 clash-verge-rev-2.4.2-x86_64.deb...
github-mirror-axel.sh 生效
正在初始化下载：https://gh-proxy.com/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.2/Clash.Verge_2.4.2_amd64.deb
File size: 47.8972 兆字节 (50223894 bytes)
正在打开输出文件 clash-verge-rev-2.4.2-x86_64.deb.part
正在开始下载

连接 0 完成下载
连接 1 完成下载
[100%] [.....................................................................................] [   2.7MB/s] [00:00]

已下载 47.8972 兆字节，用时 17 秒。（2766.17 KB/s）
```

配置 URL 重写，加速 GitHub Clone：
```shell
git config --global url.https://download.fastgit.org/https://github.com/.insteadof=https://github.com/
```

克隆 github 仓库生效：

```shell
$ paru rime-ice

==> 获取源代码...
  -> 正在克隆 rime-ice git 仓库...
克隆到纯仓库 '/home/njcm/.cache/paru/clone/rime-ice-git/rime-ice'...
remote: Enumerating objects: 11879, done.
remote: Counting objects: 100% (44/44), done.
remote: Compressing objects: 100% (35/35), done.
remote: Total 11879 (delta 24), reused 9 (delta 9), pack-reused 11835 (from 3)
接收对象中: 100% (11879/11879), 232.18 MiB | 7.03 MiB/s, 完成.
```

参考 [Archlinux AUR 加速完整设置 – 平凡生活小记](https://caveallegory.cn/2024/03/archlinux-aur%E5%8A%A0%E9%80%9F%E5%AE%8C%E6%95%B4%E8%AE%BE%E7%BD%AE/)

## 临时 GitHub 加速

```shell
# 备份 hosts 文件
sudo cp /etc/hosts /etc/hosts.bak
```

访问 [https://github-hosts.tinsfox.com/hosts](https://github-hosts.tinsfox.com/hosts)，复制内容

```shell
# 内容追加到 /etc/hosts 末尾
nano /etc/hosts
```

参考：[GitHub Host - 加速访问 GitHub | 自动更新的 Hosts 工具](https://github-hosts.tinsfox.com/)

## 安装 Fcitx5

进入系统后，Manjaro Hello 弹窗中点击`Applications`按钮，勾选`Extended language support`-`Manjaro Asian Input Support Fcitx5`，点击`UPDATE SYSTEM`按钮。

![](assets/20250702003138.png)

选择`fcitx5-chinese-addons: 简体中文 | Simplified Chinese`安装。

![](assets/20250702003227.png)

开始菜单，`离开`-`注销`并重新登录，按`Ctrl` `Space`切换输入法。

开始菜单搜索`输入法`。

可选修改配置：
- `配置全局选项`-`快捷键`：
  - `切换启用/禁用输入法`快捷键改成`Ctrl` `Shift`。
- `配置全局选项`-`行为`：
  - `共享输入状态`选择`所有`。

可选删除快捷键：
- `配置全局选项`-`快捷键`：
  - `切换是否使用嵌入预编辑`
- `键盘-汉语`-右侧配置图标：
  - `切换提示模式`
  - `触发一次提示模式`
- `配置附加组件`
  - `模块`-`标点`-`切换键`
  - `模块`-`剪贴板`-`触发键`
  - `模块`-`简繁转换`-`切换键`
  - `模块`-`快速输入`-`触发键`
  - `模块`-`云拼音`-`切换键`
  - `模块`-`Unicode`-`触发键`、`使用十六进制数字输入 Unicode 字符`

## 更新

开始菜单搜索`软件更新`，`应用`更新。

![](assets/20250702011829.png)

```shell
sudo pacman -Syu
```

更新后要重启系统，否则系统内核和内核模块版本对不上，导致`modprobe tun`等命令运行失败。

## DPI 缩放

开始菜单搜索`显示器配置`，修改`全局缩放率`，`应用`后重新登录生效。

![](assets/20250702012133.png)

## 切换个人目录下语言

```shell
# 安装 xdg-user-dirs-gtk
sudo pacman -S xdg-user-dirs-gtk
export LANG=en_US
xdg-user-dirs-gtk-update
```
![](assets/20250702012609.png)
选择“Update Names”。

```shell
export LANG=zh_CN.UTF-8
xdg-user-dirs-gtk-update
```

勾选“不要再次询问我”，选择“保留旧的名称”。

手动删除主文件夹下残留的视频、图片、文档、下载、桌面等中文文件夹。

Dolphin 中左侧常用位置项右键`编辑`，修改位置。

![](assets/20250702012916.png)
