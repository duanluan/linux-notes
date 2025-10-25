# 问题解决

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

## 解决“一个或多个文件没有通过有效性检查”

先执行`paru -Sc`清除缓存后重试，如果仍然失败，则编辑`PKGBUILD`跳过校验。

```shell
# paru 安装软件
$ paru dingtalk-bin

==> 正在验证 source 文件，使用sha512sums...
    service-terms-zh_7.8.15.5101401.html ... 失败
    com.alibabainc.dingtalk.desktop ... 通过
    dingtalk.sh ... 通过
    com.alibabainc.dingtalk.svg ... 通过
==> 错误： 一个或多个文件没有通过有效性检查！
错误： 未能下载 'dingtalk-bin-7.8.15.5101401-1' 的源:
错误： 未能构建的软件包：dingtalk-bin-7.8.15.5101401-1

# 编辑 PKGBUILD，校验失败的文件对应的 sha512sums 的行改为 'SKIP'
$ cd /home/njcm/.cache/paru/clone/dingtalk-bin
$ nano PKGBUILD

# 找到类似如下内容，将校验失败的行改为 'SKIP'
sha512sums=(
           #'9675c32e6df14e6f137b04eb046bbbb33d06b5515329b78fb45b41806833cf982124ed6198e1fcbc22a01283b80c728e1f8d891043b2ebd66c479aaaa8a78701'
           'SKIP'
           'c8570ec4cd978e26ac622a83db053a0555324752f5000dc5b3cd680d782138e8ef856f09ec9b7850e04e1faa1e39de94dabeb16fbfbe0fd44af43247b30e8b2f'
           'b2493e7bddc2d701204899bcd82930f97779eec23485870c64665c525b9faca382a3c0e9e9c1bd18f8fa8157ea408943e542de56dc3410388e78f30732511f5c'
           '5f05f90704526fbd16371f6f9deaa171a3cac25a103b21daba72a3028ab7cdf9b566a3ac7842c6ce88d30cc29fe0c8b989c77aa36daab73793a827a1a0d6c775')

# 保存退出后用 PKGBUILD 构建并安装软件包和依赖
$ makepkg -si

==> 正在验证 source 文件，使用sha512sums...
    service-terms-zh_7.8.15.5101401.html ... 已跳过
    com.alibabainc.dingtalk.desktop ... 通过
    dingtalk.sh ... 通过
    com.alibabainc.dingtalk.svg ... 通过
```

## 托盘区蓝牙不显示+设置中蓝牙开启无效

```shell
$ lsusb | grep -i bluetooth
Bus 001 Device 004: ID 8087:0029 Intel Corp. AX200 Bluetooth

$ sudo dmesg|grep Bluetooth
[ 4.165699] Bluetooth: Core ver 2.22
[ 4.165722] Bluetooth: HCI device and connection manager initialized
[ 4.165727] Bluetooth: HCI socket layer initialized
[ 4.165730] Bluetooth: L2CAP socket layer initialized
[ 4.165734] Bluetooth: SCO socket layer initialized
[ 5.168658] Bluetooth: BNEP (Ethernet Emulation) ver 1.3
[ 5.168661] Bluetooth: BNEP filters: protocol multicast
[ 5.168667] Bluetooth: BNEP socket layer initialized
[ 6.355936] Bluetooth: hci0: Reading Intel version command failed (-110)
[ 6.355940] Bluetooth: hci0: command 0xfc05 tx timeout
```
最后两句有问题，需要将`AX200/AX201`缺少的`ibt-0040-0041.ddc`、`ibt-0040-0041.sfi`固件从 [Intel linux-firmware](https://anduin.linuxfromscratch.org/sources/linux-firmware/intel/) 下载并移动到`/lib/firmware/intel`目录中，再重启电脑就正常了。

参考：[Manjaro蓝牙BUG：Bluetooth: hci0: Failed to load Intel firmware file intel/ibt-0040-1050.sfi (-2) - CY BLOG](https://cy.terase.cn/2024/12/24/bluetooth-bug/)
