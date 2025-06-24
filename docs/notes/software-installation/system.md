# 系统类

## 应用商店安装

### Double Commander

![](../assets/20250315191442.png)

跨平台的开源文件管理器，采用双面板布局，支持多标签页浏览、批量重命名、内置文本编辑器和文件查看器等功能。

`控制中心`-`键盘和语言`-`快捷键`新建，命令为`/opt/apps/com.doublecommander/files/squashfs-root/AppRun -C`。

[DC - Command Line](https://doublecmd.github.io/doc/en/commandline.html)

---

## Spark Store 星火应用商店

[下载 - 星火应用商店](https://www.spark-app.store/download_latest) 下载 DEB 文件并安装。

## flatpak

[Linux Debian/Deepin flatpak 换源安装软件](https://blog.zhjh.top/?p=lyfHOgD0)

## 搜狗输入法

fcitx5 和 fcitx 冲突，要先卸载 fcitx5。

```shell
# 卸载 fcitx5
sudo apt purge fcitx5
sudo apt autoremove

# 安装 fcitx
sudo apt install fcitx
```

[搜狗输入法 linux](https://shurufa.sogou.com/linux) 下载 DEB 文件并安装。

注销或重启，`控制中心`-`键盘和语言`-`输入法`中就空了，只能通过开始菜单`输入法配置`管理。
