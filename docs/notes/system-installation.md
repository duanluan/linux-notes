# 系统安装

## 版本经历

- Deepin 23.1：[GitHub - duanluan/deepin-notes at deepin23](https://github.com/duanluan/linux-notes/tree/deepin23)
- Xubuntu 24.04.2：[GitHub - duanluan/linux-notes at xubuntu24](https://github.com/duanluan/linux-notes/tree/xubuntu24)
- Manjaro：当前版本

## 制作启动盘

U 盘安装 [Ventoy](https://www.ventoy.net/cn/index.html)。

![Ventoy2Disk](assets/20250308123342.png)

[Manjaro Homepage](https://manjaro.org/) 点击`Download`按钮，选择`KDE Plasma`版本下的`Download`下载 ISO 放入 U 盘。

## 安装系统

更多参考：[UEFI - 安装指南 - Manjaro](https://wiki.manjaro.org/index.php/UEFI_-_Install_Guide/zh-cn)

开机按 `F2`/`Del` 进入 BIOS，`Save & Exit` - `Boot Override` 选择 U 盘。

Ventoy 界面选择 Manjaro 镜像 - `Boot in normal mode`，如遇启动问题，尝试`Boot in grub2 mode`。

设置 tz（时区）为`Asia/Shanghai`、lang（语言）为`zh_CN`，设置后 pacman 会换源。

选择`Boot with open source drivers`，进入桌面后在弹出的`Manjaro Hello`窗口中点击`Launch installer`按钮。

安装程序设置：
- 位置（Location）
  - 设置时区为 Asia/Shanghai。
  - 系统语言设置为 简体中文（中国）。
  - 数字和日期地域设置为 简体中文（中国）。
- 键盘（Keyboard）
  - 键盘型号设置为 Generic 105-key PC。
  - 键盘布局设置为 Chinese/Default。
- 分区（Partitions）
  - 抹除磁盘
  - 交换分区(无休眠) + ext4
- Office 套件（Office Suite）
  - No Office Suite

安装完成后，重启前拔掉 U 盘。

## 参考

- [无广告纯净 PE 启动盘多系统收录](https://blog.zhjh.top/?p=pe)
- [grub2boot . Ventoy](https://ventoy.net/cn/doc_grub2boot.html)
