# Software Uninstallation

## Package Management

`-Rns` removes the package together with unused dependencies and configuration files.

```shell
# uninstall with pacman
sudo pacman -Rns xxx
# uninstall with yay
yay -Rns xxx
# uninstall with paru
paru -Rns xxx
```

## VMware Workstation Pro

```shell
# option 1
sudo vmware-installer -u vmware-workstation

# option 2
paru -Rns vmware-keymaps vmware-workstation
```

## WinBoat

```shell
sudo pacman -Rns winboat-bin

# remove the previously forced module-loading config
sudo rm -f /etc/modules-load.d/winboat_kvm.conf

# stop and remove the WinBoat container
docker stop WinBoat 2>/dev/null && docker rm WinBoat 2>/dev/null

# remove the WinBoat data directory
rm -rf ~/winboat
```

## Firefox

Search for `Add/Remove Software` in the launcher, search for `firefox` in the window that opens, click the uninstall icon on the right side of the app entry, then click `Apply`.

After uninstalling, remove the remaining files as well:

```shell
sudo rm -rf ~/.mozilla
```
