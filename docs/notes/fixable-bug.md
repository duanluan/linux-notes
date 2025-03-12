# 可解决 BUG

## 搜狗输入法 Deepin Next 版双拼时 v 模式无法关闭

- [搜狗输入法deepin next选字序号有时候是字母，为啥？－论坛－深度科技](https://bbs.deepin.org.cn/zh/post/276993)
- [搜狗输入法双拼问题－论坛－深度科技](https://bbs.deepin.org/post/281305)

可以先用系统自带的双拼，参考第二个帖子 [14 楼](https://bbs.deepin.org/post/281305?postId=1675406)，或者装搜狗输入法 Linux 版。

## 微信 Linux 无法用 Ctrl + Alt + W 全局快捷键激活窗口

- [【V23】微信Linux 版本快捷键聚焦窗口（等同windows 的 ctrl+alt+w)－论坛－深度科技](https://bbs.deepin.org/post/281125)

```shell
sudo apt install xdotool
```

`控制中心`-`键盘和语言`-`快捷键`，最下方新增。

- 名称：微信
- 命令：`xdotool search --name '微信' windowactivate`
- 快捷键：`Ctrl` `Alt` `W`

## KeePassXC 浏览器集成报错已安装到此位置的代理程序可执行文件丢失

- [Linux/Deepin 23 Edge/Chrome 浏览器 KeePassXC 无法连接数据的问题](https://blog.zhjh.top/?p=hIsteIcAmfn66ZL1sC82u)

`KeePassXC`-菜单栏`工具`-`设置`-`浏览器集成`-`高级`选项卡-`使用自定义代理位置`浏览：`/opt/apps/org.keepassxc.keepassxc/files/squashfs-root/usr/bin/keepassxc-proxy`

## KeePassXC 最小化到托盘而不是关闭

最小化窗口，双击托盘图标。

## IDEA 代码提示插件中文乱码

换其他字体：[CodeWhisperer has issues with Chinese comments · Issue #3607 · aws/aws-toolkit-jetbrains](https://github.com/aws/aws-toolkit-jetbrains/issues/3607#issuecomment-1707522451)

## 无法使用全局快捷键 Ctrl + Alt + F、Ctrl + Alt + B 等

`输入法配置`-`附加组件`-`简繁转换`，配置中 ESC 去掉快捷键。
![](assets/20250310005928.png)

同样有快捷键的还有`附加组件`-`输入法的 Unicode 输入支持`、`全局配置`-`显示高级选项`-`更多快捷键`-`切换符号键盘`。

## 蓝牙

- [V23 第二次出现丢失蓝牙了－论坛－深度科技](https://bbs.deepin.org/zh/post/261821)
- [更新后，自带蓝牙模块没有了－论坛－深度科技](https://bbs.deepin.org.cn/zh/post/265877)
- [如何手动升级内核？？？－论坛－深度科技](https://bbs.deepin.org.cn/zh/post/265618)

尝试安装`bluetooth`无效。
```shell
$ systemctl status bluetooth

● bluetooth.service - Bluetooth service
     Loaded: loaded (/usr/lib/systemd/system/bluetooth.service; enabled; preset: enabled)
     Active: active (running) since Wed 2025-03-12 21:56:09 CST; 1min 18s ago
       Docs: man:bluetoothd(8)
   Main PID: 1341 (bluetoothd)
     Status: "Running"
      Tasks: 1 (limit: 74291)
     Memory: 2.3M (peak: 2.9M)
        CPU: 26ms
     CGroup: /system.slice/bluetooth.service
             └─1341 /usr/libexec/bluetooth/bluetoothd

Warning: some journal files were not opened due to insufficient permissions.

$ sudo apt install bluetooth

建议安装：
  bluez-cups bluez-meshd
下列【新】软件包将被安装：
  bluetooth
升级了 0 个软件包，新安装了 1 个软件包，要卸载 0 个软件包，有 25 个软件包未被升级。
```

// TODO

## 键盘突然失效，Ctrl 锁死，点击电源提示“锁屏失败”

[V23系统突然就键盘按键无效了－论坛－深度科技](https://bbs.deepin.org/zh/post/283218)

卸载 VMware Workstation。

```shell
sudo vmware-installer -u vmware-workstation
```
