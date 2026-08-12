---
title: Manjaro Black Screen Shows Only loadkmap short read, but the NVIDIA Kernel Module Is Missing
description: Diagnose and restore a missing NVIDIA kernel module from a TTY when a Manjaro black screen shows only loadkmap short read.
date: 2026-08-11
tags:
  - Manjaro
  - NVIDIA
  - KDE
  - Linux
sidebar: false
---

# Manjaro Black Screen Shows Only `loadkmap: short read`, but the NVIDIA Kernel Module Is Missing

`2026-08-11` · Manjaro · NVIDIA · KDE

After the computer froze and was forcibly rebooted, the system could no longer start KDE. The black screen showed only:

```text
loadkmap: short read
```

## Check SDDM from a TTY

Press `Ctrl + Alt + F2` to enter a TTY, then inspect the SDDM status and logs from the current boot:

```shell
systemctl status sddm --no-pager
journalctl -b -u sddm --no-pager
```

The logs contained:

```text
NVIDIA: Failed to initialize the NVIDIA kernel module
no screens found
Could not start Display server on vt 2
```

This showed that SDDM could not start the graphical session because the NVIDIA kernel module failed to initialize. The `loadkmap` message visible on the screen was not the direct cause.

## Confirm That the NVIDIA Module Package Was Removed

Next, search the pacman log:

```shell
grep -n 'linux618-nvidia-open' /var/log/pacman.log
```

The log confirmed that an earlier orphan-package cleanup passed the full package-name list from `pacman -Qtdq` to `pacman -Rns`, removing `linux618-nvidia-open` along with the other packages. When the system next booted `linux618`, the matching NVIDIA module was unavailable, so KDE could not start.

A kernel package does not necessarily depend on the NVIDIA driver package, and pacman cannot determine whether an orphaned package is still required by the installed hardware. Never remove every package returned by an orphan query without reviewing the list.

## Restore the System

`linux618-nvidia-open` is the package used on this machine. On another system, first check the running kernel and installed NVIDIA module packages:

```shell
uname -r
pacman -Qq | grep -E '^linux[0-9]+($|-nvidia(-open)?$)'
```

After confirming the package name, the recommended recovery commands are:

```shell
sudo pacman -Syu linux618-nvidia-open
localectl --no-convert set-keymap us
sudo mkinitcpio -P
sudo reboot
```

`localectl` is intentionally run without `sudo`. During this incident, `sudo localectl --no-convert set-keymap us` returned an error, while running the command directly succeeded. The full error was not saved, so this article does not speculate about the cause.

## Commands Actually Used During This Incident

The TTY displayed the normal `sudo` password prompt, but after the password was entered, pressing Enter had no effect and the command never continued. As a temporary workaround, `sudo -S` was used to read the password from standard input:

```shell
sudo -S sh <<'EOF'
<current user password>
pacman -Syu --noconfirm linux618-nvidia-open
EOF

localectl --no-convert set-keymap us

sudo -S sh <<'EOF'
<current user password>
mkinitcpio -P
EOF

reboot
```

`sudo -S` reads the password from standard input.

After the reboot, the KDE desktop started normally.

## Why `loadkmap: short read` Appeared

The original `/etc/vconsole.conf` used a keymap that was unavailable on this machine:

```ini
KEYMAP=cn
```

The following command changes it to the valid `us` keymap, and `mkinitcpio -P` then regenerates the initramfs:

```shell
localectl --no-convert set-keymap us
sudo mkinitcpio -P
```

Therefore, `loadkmap: short read` was the only visible message on the black screen, but the missing NVIDIA module was what prevented KDE from starting. Both issues were fixed during the recovery.

## Prevent the Package from Being Removed Again

Review orphaned packages individually before removing them:

```shell
pacman -Qdt
```

Do not pass the complete package-name list from `pacman -Qtdq` directly to `pacman -Rns` without reviewing it first. Pay particular attention to NVIDIA, headers, VirtualBox, and other modules associated with an installed kernel.

If a package that is still required is marked as orphaned, mark it as explicitly installed:

```shell
sudo pacman -D --asexplicit linux618-nvidia-open
```

Reinstalling the package with `pacman -Syu linux618-nvidia-open`, as done here, also records it as explicitly installed.
