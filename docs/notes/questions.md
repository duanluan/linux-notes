# 疑问解决

## 忘记 root 密码

正常使用突然正确的 root 密码无效了。

进入 Live CD 后：

```shell
# 查看硬盘挂载
$ sudo fdisk -l
Disk /dev/nvme0n1: ……
……

Device          Type
/dev/nvme0n1p1  EFI System
/dev/nvme0n1p2  Linux filesystem
/dev/nvme0n1p3  Linux swap

# 创建挂载点
$ sudo mkdir -p /media/manjaro
# 将系统根目录挂载
$ mount /dev/nvme0n1p2 /media/manjaro
# 设置 root 密码
chroot /media/manjaro
passwd root
```

重启进入系统。

参考：
- [解决manjaro登录失败问题 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000021724837)
- [重置 root 密码 - Arch Linux 中文维基](https://wiki.archlinuxcn.org/wiki/%E9%87%8D%E7%BD%AE_root_%E5%AF%86%E7%A0%81) 
