# 安装 Deepin

## 制作启动盘

U 盘安装 [Ventoy](https://www.ventoy.net/cn/index.html)。

![Ventoy2Disk](assets/20250308123342.png)

[Deepin 镜像](https://www.deepin.org/zh/download/)放入 U 盘。

## U 盘启动 Deepin 并安装

开机按 `F2`/`Del` 进入 BIOS，`Save & Exit` - `Boot Override` 选择 U 盘。 

Ventoy 界面选择 Deepin 镜像 - `Boot in normal mode`，如遇启动问题，尝试`Boot in grub2 mode`。

选择`Install Deepin 23 with kernel 6.9 desktop`。

- 语言`中文`。
- 安装方式`全盘安装`，勾选`创建初始化备份`，自定义参考[手动分区你们都是如何操作的？我这有一剂](https://bbs.deepin.org/post/234948)。

安装完成后，重启前拔掉 U 盘。

重启后进入 Deepin 系统，创建用户，输入密码进入系统。

## 参考

- [无广告纯净 PE 启动盘多系统收录](https://blog.zhjh.top/?p=pe)
- [grub2boot . Ventoy](https://ventoy.net/cn/doc_grub2boot.html)
- [深度操作系统 deepin 23 安装和用户指南 – 深度科技社区](https://www.deepin.org/zh/installation/)
