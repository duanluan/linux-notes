# 安装 Xubuntu

## 制作启动盘

U 盘安装 [Ventoy](https://www.ventoy.net/cn/index.html)。

![Ventoy2Disk](assets/20250308123342.png)

[Download « Xubuntu](https://xubuntu.org/download/) 下载 ISO 放入 U 盘。

## 安装系统

开机按 `F2`/`Del` 进入 BIOS，`Save & Exit` - `Boot Override` 选择 U 盘。

Ventoy 界面选择 Xubuntu 镜像 - `Boot in normal mode`，如遇启动问题，尝试`Boot in grub2 mode`。

选择`Try or Install Xubuntu`，进入桌面后打开桌面快捷方式`Install Xubuntu 24.04.2 LTS`。

安装界面语言选择`中文`，后续步骤按提示操作。

安装完成后，重启前拔掉 U 盘。

重启后显示 Xubuntu 图标时需要回车，输入密码进入系统。

## 参考

- [无广告纯净 PE 启动盘多系统收录](https://blog.zhjh.top/?p=pe)
- [grub2boot . Ventoy](https://ventoy.net/cn/doc_grub2boot.html)
