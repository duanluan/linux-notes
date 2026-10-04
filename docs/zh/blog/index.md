---
title: 博客
description: Linux、开发工具与桌面系统的实践记录
sidebar: false
aside: false
---

# 博客

## 2026

### [Optimus 笔记本安装 Manjaro：黑屏、便携外屏、频繁卡死与迁移 Wayland 全记录](./2026-10-01-manjaro-install-on-an-optimus-laptop.md)

`2026-10-01` · Manjaro · NVIDIA · AMD · Wayland

在 AMD 核显 + RTX 5060、内屏接核显的笔记本上全新安装 Manjaro KDE：GRUB 后黑屏、NVIDIA 模块内核目录错配、只点亮外屏的 greeter、X11 下 AMDGPU fence 死锁导致的频繁卡死——切换 Wayland 解决了 greeter 黑屏和 fence 死锁，但并非所有卡死（2026-10 又出现 amdgpu pageflip 超时的冻屏，见文末后续）。

### [Manjaro 黑屏只显示 loadkmap short read，实际是 NVIDIA 模块缺失](./2026-08-11-manjaro-nvidia-black-screen.md)

`2026-08-11` · Manjaro · NVIDIA · 系统故障

黑屏只显示 `loadkmap: short read`，进入 TTY 后确认并恢复被孤立包清理误删的 NVIDIA 内核模块。
