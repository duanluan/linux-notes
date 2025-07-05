# 系统类

## base-devel + cmake + unzip

````shell
sudo pacman -S base-devel cmake unzip
````

- base-devel：基础开发工具包组，包含了编译软件包所需的常见工具。
- cmake：跨平台的构建系统工具，用于自动化编译过程，通常与源代码编译相关。
- unzip：解压缩 zip 格式文件。

## yay + paru

Arch 用户软件仓库（AUR）助手工具。

```shell
sudo pacman -S yay
```

也可以使用 [paru](https://github.com/Morganamilo/paru)：

- paru：默认配置下，paru 会在每次检查更新时重新评估 pkgver。这意味着当 AUR 包有新提交时，paru 会自动检测到版本变化并提示更新。
  ```shell
  git clone https://aur.archlinux.org/paru.git
  cd paru
  makepkg -si
  ```
- yay：默认未开启此功能，需要手动配置。可以通过以下命令启用对开发包（含 VCS 包）的自动版本检查：
  ```shell
  yay -Y --devel --save
  ```
  - devel：启用开发包模式，每次检查更新时重新评估 pkgver。
  - save：将此设置保存到 ~/.config/yay/config.json，使其永久生效。

下载的软件可以在 [AUR - Packages](https://aur.archlinux.org/packages) 搜索，或使用命令搜索：
```shell
yay -Ss xxx
```

也可以在开始菜单搜索`添加/删除软件`窗体中搜索软件名安装。

后续我说`商店安装`就是在这装，有些从 AUR 装可能会装不上。

![](../assets/20250704220323.png)

注意：paru 审阅时按`q`退出。

遇到“==> 错误： 一个或多个文件没有通过有效性检查！”时可以执行`paru -Sc`清除缓存。

## Microsoft Edge

微软基于 Chromium 开发的浏览器。

![](https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/b0ec664721b948bdb4de34621ba1ce25-png-w1920.avif)

[官方下载 Microsoft Edge](https://www.microsoft.com/zh-cn/edge/download)

```shell
paru microsoft-edge-stable-bin
```

开始菜单搜索`默认应用程序`可以修改默认网页浏览器。

## Rime 雾凇拼音

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

## Spark Store 星火应用商店

[下载星火应用商店 - Spark Store](https://www.spark-app.store/download/)

暂略
