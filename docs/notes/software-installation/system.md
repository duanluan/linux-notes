# 系统类

## Microsoft Edge

![](https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/b0ec664721b948bdb4de34621ba1ce25-png-w1920.avif)

[官方下载 Microsoft Edge](https://www.microsoft.com/zh-cn/edge/download) 下载 DEB 文件并安装。

`开始菜单`-`默认应用程序`-`网络浏览器`-`其他`，选择`microsoft-edge`。

## Spark Store 星火应用商店

[下载 - 星火应用商店](https://www.spark-app.store/download) 下载 DEB 文件并安装。

## 讯飞输入法

[讯飞输入法官网](https://srf.xunfei.cn/#/) 下载 DEB 文件。

fcitx5 和 fcitx 冲突，要先卸载 fcitx5。

```shell
# 卸载 fcitx5
sudo apt purge fcitx5*
sudo apt autoremove

# 安装 fcitx
sudo apt install fcitx
```

星火应用商店下载并安装[讯飞输入法](spk://store/office/com.iflytek.iflyime)。

讯飞输入法属性设置，`快捷键设置`-`其他快捷键`，全部取消勾选。

`开始菜单`-`Fcitx 配置`，ESC 去掉快捷键
- `全局配置`-`显示高级选项`-`快捷键`：
  - `切换激活/非激活输入法`
  - `切换虚拟键盘`
  - `切换全角标点`
  - `保留配置及输入历史`
  - `切换嵌入预编辑字符串`
- `附加组件`-`简繁转换`-`切换来禁用或启用`
- `附加组件`-`Fcitx 的 Unicode 输入支持`

## flatpak

[Linux Debian/Deepin flatpak 换源安装软件](https://blog.zhjh.top/?p=lyfHOgD0)

之后 flatpak install 时提示：

```shell
请注意 

'/var/lib/flatpak/exports/share'
'/home/duanluan/.local/share/flatpak/exports/share'

目录不在由 XDG_DATA_DIRS 环境变量设置的搜索路径中，因此通过 Flatpak
安装的应用在会话重启前可能不会出现在您的桌面。
```

## Double Commander

跨平台的开源文件管理器，采用双面板布局，支持多标签页浏览、批量重命名、内置文本编辑器和文件查看器等功能。

![](https://doublecmd.sourceforge.io/gallery/images/MainWindow.png)

星火应用商店下载并安装[DoubleCommander](spk://store/tools/doublecmd-spark)。

`控制中心`-`键盘和语言`-`快捷键`新建，命令为`/opt/apps/com.doublecommander/files/squashfs-root/AppRun -C`。

[DC - Command Line](https://doublecmd.github.io/doc/en/commandline.html)
