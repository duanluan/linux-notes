# Troubleshooting

## Wi-Fi Password Prompt After Disabling KDE Wallet

If you clear `System Settings` -> `KDE Wallet` -> `Enable the KDE wallet subsystem`, the system may ask for the Wi-Fi password again after boot.

Fix:
1. Right-click the Wi-Fi icon in the system tray, choose `Configure Network Connections...`, and select the target Wi-Fi network.
2. In the `General` tab, enable `All users may connect to this network`.
3. In the `Wi-Fi Security` tab, choose `Store password for all users (not encrypted)`, then click `Apply`.

## KDE Panel Freezes

If the KDE panel stops responding and the application launcher cannot be opened, force-kill `plasmashell`:

```shell
killall -9 plasmashell
```

`plasmashell` usually restarts automatically, and the panel returns to normal.

## Forgot the Root Password

If the correct root password suddenly stops working, reset it from a Live CD.

After booting into the Live CD:

```shell
# inspect disk partitions
$ sudo fdisk -l
Disk /dev/nvme0n1: ……
……

Device          Type
/dev/nvme0n1p1  EFI System
/dev/nvme0n1p2  Linux filesystem
/dev/nvme0n1p3  Linux swap

# create a mount point
$ sudo mkdir -p /media/manjaro
# mount the system root partition
$ mount /dev/nvme0n1p2 /media/manjaro
# reset the root password
chroot /media/manjaro
passwd root
```

Reboot back into the installed system.

References:
- [Fix Manjaro Login Failure - personal article - SegmentFault](https://segmentfault.com/a/1190000021724837)
- [Reset root password - Arch Linux Chinese Wiki](https://wiki.archlinuxcn.org/wiki/%E9%87%8D%E7%BD%AE_root_%E5%AF%86%E7%A0%81)

## Fix “One or More Files Did Not Pass the Validity Check” {#fix-one-or-more-files-did-not-pass-the-validity-check}

First run `paru -Sc` to clear the cache and try again. If it still fails, you can download a helper script that fixes the checksums and continues `makepkg`, or edit `PKGBUILD` manually and skip the failing checksum.

```shell
# install the package with paru
$ paru -S dingtalk-bin

==> Validating source files with sha512sums...
    service-terms-zh_7.8.15.5101401.html ... FAILED
    com.alibabainc.dingtalk.desktop ... Passed
    dingtalk.sh ... Passed
    com.alibabainc.dingtalk.svg ... Passed
==> ERROR: One or more files did not pass the validity check!
error: failed to download sources for 'dingtalk-bin-7.8.15.5101401-1'
error: packages failed to build: dingtalk-bin-7.8.15.5101401-1

# download the helper script
$ mkdir -p ~/.local/bin
$ curl -fL -o ~/.local/bin/aur-fix-checksums-and-make https://raw.githubusercontent.com/duanluan/shell-scripts/main/aur-fix-checksums-and-make.sh
$ chmod +x ~/.local/bin/aur-fix-checksums-and-make

# ensure ~/.local/bin is in PATH
$ grep -qxF 'export PATH="$HOME/.local/bin:$PATH"' ~/.zshrc || echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
$ source ~/.zshrc

# fix the checksums automatically and continue makepkg
$ aur-fix-checksums-and-make dingtalk-bin

==> Validating source files with sha512sums...
    service-terms-zh_7.8.15.5101401.html ... UPDATED
    com.alibabainc.dingtalk.desktop ... Passed
    dingtalk.sh ... Passed
    com.alibabainc.dingtalk.svg ... Passed

# you can also edit PKGBUILD manually
# set the sha512sums entry for the failing file to 'SKIP'
$ cd /home/duanluan/.cache/paru/clone/dingtalk-bin
$ nano PKGBUILD

# find a block like this and change the failing line to 'SKIP'
sha512sums=(
           #'9675c32e6df14e6f137b04eb046bbbb33d06b5515329b78fb45b41806833cf982124ed6198e1fcbc22a01283b80c728e1f8d891043b2ebd66c479aaaa8a78701'
           'SKIP'
           'c8570ec4cd978e26ac622a83db053a0555324752f5000dc5b3cd680d782138e8ef856f09ec9b7850e04e1faa1e39de94dabeb16fbfbe0fd44af43247b30e8b2f'
           'b2493e7bddc2d701204899bcd82930f97779eec23485870c64665c525b9faca382a3c0e9e9c1bd18f8fa8157ea408943e542de56dc3410388e78f30732511f5c'
           '5f05f90704526fbd16371f6f9deaa171a3cac25a103b21daba72a3028ab7cdf9b566a3ac7842c6ce88d30cc29fe0c8b989c77aa36daab73793a827a1a0d6c775')

# save the file, then build and install the package and its dependencies
$ makepkg -si

==> Validating source files with sha512sums...
    service-terms-zh_7.8.15.5101401.html ... SKIPPED
    com.alibabainc.dingtalk.desktop ... Passed
    dingtalk.sh ... Passed
    com.alibabainc.dingtalk.svg ... Passed
```

## Bluetooth Missing From the Tray and Bluetooth Cannot Be Enabled in Settings

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
The last two lines show the actual problem. Download the missing `ibt-0040-0041.ddc` and `ibt-0040-0041.sfi` firmware files for `AX200/AX201` from [Intel linux-firmware](https://anduin.linuxfromscratch.org/sources/linux-firmware/intel/) and move them into `/lib/firmware/intel`.

The Linux kernel usually prefers `.xz`-compressed firmware files. If a system update restores a broken or incompatible `.xz` version, the uncompressed firmware you downloaded manually will be ignored. Rename those `.xz` files so the kernel is forced to use the manually downloaded version.

```shell
sudo mv ibt-0040-0041.ddc /lib/firmware/intel/
sudo mv ibt-0040-0041.sfi /lib/firmware/intel/

# back up and rename the bundled compressed versions to avoid conflicts
cd /lib/firmware/intel
sudo mv ibt-0040-0041.ddc.xz ibt-0040-0041.ddc.xz.bak
sudo mv ibt-0040-0041.sfi.xz ibt-0040-0041.sfi.xz.bak

# reload the Bluetooth kernel module
sudo rmmod btusb
sudo modprobe btusb
```

If it still does not work, shut the machine down completely, disconnect power for a while, and then boot again.

Reference: [Manjaro Bluetooth bug: Bluetooth: hci0: Failed to load Intel firmware file intel/ibt-0040-1050.sfi (-2) - CY BLOG](https://cy.terase.cn/2024/12/24/bluetooth-bug/)

## ModuleNotFoundError: No module named 'mesonbuild' {#modulenotfounderror-no-module-named-mesonbuild}

```shell
# check the meson error
$ meson --version
Traceback (most recent call last):
  File "/usr/bin/meson", line 5, in <module>
    from mesonbuild.mesonmain import main
ModuleNotFoundError: No module named 'mesonbuild'

# upgrade the system fully
$ sudo pacman -Syu
error: failed to prepare transaction (could not satisfy dependencies)
:: installing virtualbox (7.2.6-1) breaks dependency 'virtualbox=7.2.4'
   required by virtualbox-ext-oracle

# uninstall first, then upgrade, then reinstall
$ sudo pacman -Rns virtualbox-ext-oracle
$ sudo pacman -Syu
$ paru -S virtualbox-ext-oracle

# verify that meson works again
$ meson --version
1.10.1
$ python -c "import mesonbuild; print(mesonbuild.__file__)"
/usr/lib/python3.14/site-packages/mesonbuild/__init__.py
```

## Issues After Switching From X11 to Wayland

- Warning:
  `Detected GTK_IM_MODULE and QT_IM_MODULE while the Wayland input method frontend is working normally. The Wayland input method frontend is recommended. See https://fcitx-im.org/wiki/Using_Fcitx_5_on_Wayland#KDE_Plasma for details.`
  
  ```shell
  # inspect the current environment variables
  $ printenv | grep -E '^(GTK_IM_MODULE|QT_IM_MODULE|XMODIFIERS|SDL_IM_MODULE|GLFW_IM_MODULE)='
  GTK_IM_MODULE=fcitx
  QT_IM_MODULE=fcitx
  SDL_IM_MODULE=fcitx
  XMODIFIERS=@im=fcitx
  
  # locate where those variables are being set
  $ grep -R --line-number -E 'GTK_IM_MODULE|QT_IM_MODULE|XMODIFIERS' ~/.config/environment.d ~/.pam_environment ~/.profile ~/.xprofile ~/.bash* ~/.z* /etc/environment /etc/profile.d /etc/X11/xinit 2>/dev/null 
  /home/duanluan/.zhistory:415:echo $GTK_IM_MODULE
  /home/duanluan/.zhistory:416:env | grep -E 'GTK_IM_MODULE|QT_IM_MODULE|XMODIFIERS'
  /home/duanluan/.zhistory:422:printenv | grep -E '^(GTK_IM_MODULE|QT_IM_MODULE|XMODIFIERS|SDL_IM_MODULE|GLFW_IM_MODULE)='
  /home/duanluan/.zhistory:423:grep -R --line-number -E 'GTK_IM_MODULE|QT_IM_MODULE|XMODIFIERS' ~/.config/environment.d ~/.pam_environment ~/.profile ~/.xprofile ~/.bash* ~/.z* /etc/environment /etc/profile.d /etc/X11/xinit 2>/dev/null
  /etc/profile.d/input-support.sh:6:    export GTK_IM_MODULE=$im
  /etc/profile.d/input-support.sh:7:    export QT_IM_MODULE=$im
  /etc/profile.d/input-support.sh:8:    export XMODIFIERS=@im=$im
  /etc/profile.d/input-support.sh:16:    export XMODIFIERS=@im=$im
  /etc/profile.d/input-support.sh:17:    export QT_IM_MODULE=$im
  /etc/profile.d/input-support.sh:22:    export XMODIFIERS=@im=$im
  /etc/profile.d/input-support.sh:26:    export QT_IM_MODULE=$im
  /etc/profile.d/input-support.sh:27:    export GTK_IM_MODULE=$im
  ```

  `99-immodule-bridge.sh` is a KDE environment initialization script. It detects whether the session is Wayland or X11 at login, then clears the input method environment variables on Wayland or sets them on X11 to avoid the Fcitx 5 warning:
  ```shell
  $ kate ~/.config/plasma-workspace/env/99-immodule-bridge.sh
  
  #!/usr/bin/env bash
  # KDE Plasma sources scripts in this directory when the user session starts.
  
  # Debug log: use this line to confirm that the script actually ran (check /tmp/fcitx-bridge.log)
  echo "$(date): script started, current session type: $XDG_SESSION_TYPE" > /tmp/fcitx-bridge.log
  
  case "${XDG_SESSION_TYPE}" in
    # Wayland: use the Wayland text-input frontend and stop forcing the legacy GTK/Qt/SDL immodule
    wayland)
      # these unset statements are required to remove the warning
      unset GTK_IM_MODULE
      unset QT_IM_MODULE
      unset SDL_IM_MODULE
  
      # optional: keep XIM for older XWayland apps without affecting native Wayland apps
      export XMODIFIERS="@im=fcitx"
      ;;
    # X11 (or unknown session type): fall back to the fcitx immodule for compatibility
    x11|tty|'')
      export GTK_IM_MODULE="fcitx"
      export QT_IM_MODULE="fcitx"
      export SDL_IM_MODULE="fcitx"
      export XMODIFIERS="@im=fcitx"
      ;;
  esac
  ```

- WeChat and DingTalk do not scale correctly
  
  Search for the app in the launcher, right-click `Edit Applications...`, and in the KDE menu editor add `QT_SCALE_FACTOR=1.5` under `General` -> `Environment Variables`. If that field already has a value, append ` QT_SCALE_FACTOR=1.5`. Save the entry and restart the app.

- QQ candidate popups crash and DingTalk cannot receive input

  Search for `QQ` or `DingTalk` in the launcher, right-click `Edit Applications...`, and in the KDE menu editor add `QT_IM_MODULE=fcitx XMODIFIERS="@im=fcitx" GTK_IM_MODULE=fcitx SDL_IM_MODULE=fcitx QT_QPA_PLATFORM=xcb` under `General` -> `Environment Variables`. Save the entry and restart the app.

- WeChat cannot input Chinese

  Search for `WeChat` in the launcher, right-click `Edit Applications...`, and in the KDE menu editor add `GTK_IM_MODULE=fcitx QT_IM_MODULE=fcitx` under `General` -> `Environment Variables`. Save the entry and restart the app.
