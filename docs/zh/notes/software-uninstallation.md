# 软件卸载

## 包管理

`-Rns`表示级联删除依赖和配置文件。

```shell
# pacman 卸载软件
sudo pacman -Rns xxx
# yay 卸载软件
yay -Rns xxx
# yaru 卸载软件
paru -Rns xxx
```

## VMware Workstation Pro

```shell
# 方法一
sudo vmware-installer -u vmware-workstation

# 方法二
paru -Rns vmware-keymaps vmware-workstation
```

## WinBoat

```shell
sudo pacman -Rns winboat-bin

# 删除之前的强制加载配置文件
sudo rm -f /etc/modules-load.d/winboat_kvm.conf

# 停止并删除 WinBoat 容器
docker stop WinBoat 2>/dev/null && docker rm WinBoat 2>/dev/null

# 删除 WinBoat 数据目录
rm -rf ~/winboat
```

## Firefox

开始菜单搜索`添加/删除软件`，在弹窗中搜索`firefox`，点击软件右侧的卸载图标按钮后`应用`卸载。

卸载后还需删除残留文件：

```shell
sudo rm -rf ~/.mozilla
```
