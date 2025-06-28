# 设备介绍

- AMD 锐龙 7 PRO 8845HS
- 32GBx2 DDR5 5600MHz
- PCIe 4.0 NVMe SSD 2TB

Geekbench 6 跑分结果：
- Deepin 23.1：[Tianbei GEM12 - Geekbench](https://browser.geekbench.com/v6/cpu/10922940)
- Xubuntu 24.04.2：[Tianbei GEM12 - Geekbench](https://browser.geekbench.com/v6/cpu/12633571)

# 系统配置

## 更新

`开始菜单`-`设置`-`软件更新器`，立即安装。

## 切换个人目录下语言

```shell
export LANG=en_US
xdg-user-dirs-gtk-update
```

选择“Update Names”。

```shell
export LANG=zh_CN.UTF-8
xdg-user-dirs-gtk-update
```

勾选“不要再次询问我”，选择“保留旧的名称”。

手动删除残留的模板、下载、桌面等中文文件夹。

## 移除多余快捷键

`开始菜单`-`设置`-`键盘`-`应用程序快捷键`，选中后移除。

- Ctrl+Alt+F
- Ctrl+Alt+L

## 调整任务栏位置

任务栏非程序处右键，`面板`-`面板首选项`-`显示`，取消勾选`锁定面板`，然后拖动后再勾选上。

## 安装软件

```shell
# 安装 Vim
sudo apt install vim 
```

## 安装依赖

Free Download Manager、qBittorrent Enhanced Edition 等软件打开提示：“qt.qpa.plugin: From 6.5.0, xcb-cursor0 or libxcb-cursor0 is needed to load the Qt xcb platform plugin.”

```shell
sudo apt install libxcb-cursor0
```
