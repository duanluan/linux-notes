---
title: Installing Manjaro on an Optimus Laptop - Black Screens, a Portable Monitor, Random Freezes, and the Move to Wayland
description: A full troubleshooting record of a fresh Manjaro KDE install on an ASUS TUF Gaming A14 (AMD iGPU + RTX 5060) - from GRUB black screen and mismatched NVIDIA modules to AMDGPU fence deadlocks on X11; the switch to Wayland fixed the greeter black screen and the fence deadlocks, but not every freeze.
date: 2026-10-01
tags:
  - Manjaro
  - NVIDIA
  - AMD
  - KDE
  - Wayland
  - Linux
sidebar: false
---

# Installing Manjaro on an Optimus Laptop: Black Screens, a Portable Monitor, Random Freezes, and the Move to Wayland

`2026-10-01` · Manjaro · NVIDIA · AMD · Wayland

This post records everything I went through when replacing Windows 11 with a Manjaro KDE dual-boot on an ASUS TUF Gaming A14 (FA401KM) laptop. The hardware detail that caused most of the pain: it is an **Optimus hybrid-graphics machine** - an AMD Radeon 860M iGPU plus an NVIDIA RTX 5060 Laptop dGPU - and the **internal panel is wired to the iGPU**, not the dGPU.

## Installation Media and Process

The install itself was uneventful, following my usual flow:

1. Prepare a Ventoy USB drive and drop the Manjaro KDE Plasma ISO onto it.
2. Press `F2` during boot to enter the BIOS, then boot the USB drive from `Save & Exit -> Boot Override`.
3. In Ventoy, boot the image in normal mode (grub2 mode is the fallback if normal mode fails).
4. In the live environment, set tz to `Asia/Shanghai` and lang to `zh_CN`, and boot with open-source drivers.
5. In the installer: erase the full disk, choose swap **with** hibernation (recommended for laptops), and skip the office suite.

After installation finished, I removed the USB drive and rebooted. The GRUB menu appeared and listed both Windows and Manjaro. Choosing Manjaro gave a **black screen** - and that is where the real work began.

## First Black Screen: No NVIDIA Driver for RTX 5060

`Ctrl + Alt + F3` still switched to a TTY, which meant the kernel booted fine and the problem was in the graphics stack. Checking the GPU and loaded modules:

```shell
lspci | grep -iE "vga|3d"
lsmod | grep nvidia
```

Only `nvidia_wmi_ec_backlight` (a backlight helper, not a driver) and nouveau were loaded. The RTX 5060 is a Blackwell-architecture GPU that nouveau cannot drive, so the plan was to install the proprietary driver:

```shell
sudo mhwd -a pci nonfree 0300
```

## No Network: USB Tethering from a Phone

The machine had no Wi-Fi configured yet, so I tethered through an Android phone - Linux has built-in `rndis_host`/`cdc_ncm` drivers, so USB tethering works with zero setup:

1. Connect the phone with a data cable and enable USB tethering.
2. Check that a `usb0` interface appears with `ip a`.
3. Let NetworkManager pick it up and verify with `ping`.

One caveat from this incident: the phone kept disconnecting and reconnecting (visible as repeated `USB disconnect` lines in `dmesg`). Mid-download disconnects are what caused the half-installed states later, so use a good cable and a native USB port.

## mhwd Failed: Broken Mirrors and DNS

The first driver installation failed with `Error: pacman failed!`. The downloaded mirror list was unusable - pacman had picked a mirror in Uruguay running at less than 1 byte per second, and the other mirrors failed DNS resolution. The fix:

```shell
echo "nameserver 223.5.5.5" | sudo tee /etc/resolv.conf
sudo pacman-mirrors -c China
sudo pacman -Syy
sudo mhwd -a pci nonfree 0300
```

After switching to Chinese mirrors (TUNA/USTC/SJTU) and setting a working DNS server, the ~500 MB driver download finished in minutes.

## `loadkmap: short read`, and a Module That Was Not There

After the driver installed, the next boot showed `loadkmap: short read`. That message itself is a benign initramfs keymap warning (see [the earlier post about this message](./2026-08-11-manjaro-nvidia-black-screen.md) for a case where it mattered). The real failure was still SDDM:

```text
sddm[755]: Failed to read display number from pipe
Could not start Display server on vt 2
```

And the module was missing:

```shell
sudo modprobe nvidia
# modprobe: FATAL: Module nvidia not found in directory /lib/modules/7.1.8-1-MANJARO
```

Two usual suspects were eliminated quickly:

- **Secure Boot**: already disabled in the BIOS.
- **Driver/userland version mismatch**: `linux71-nvidia-open 610.57.04-6` matched `nvidia-utils 610.57.04-1` exactly.

The actual cause showed up when listing the files shipped by the driver package:

```shell
pacman -Ql linux71-nvidia-open | grep "\.ko"
# /usr/lib/modules/7.1.9-1-MANJARO/extramodules/nvidia-drm.ko.zst
# ...
```

The driver modules were compiled for kernel **7.1.9**, while the installed and running kernel was **7.1.8**. pacman considered the package installed, but modprobe for the running kernel found nothing. Reinstalling the driver package alone could not help. The fix was a full upgrade to align the kernel with the modules:

```shell
sudo pacman -Syu
sudo reboot
```

After booting 7.1.9, `modprobe nvidia` succeeded and `nvidia-smi` printed the RTX 5060 table.

## Second Black Screen: X Rendering Fine, Nothing on the Internal Panel

With the driver working, the next boot still ended at a black screen with a cursor in the top-left corner. `nvidia-smi` even showed `Xorg` and `sddm-greeter-qt6` running on the GPU - X was rendering, but the picture never reached the internal panel.

Enumerating the DRM connectors explained why:

```text
card0-DP-8, card0-eDP-2, card0-HDMI-A-2        # the NVIDIA dGPU
card1-DP-1..7, card1-eDP-1, card1-HDMI-A-1     # the AMD iGPU
card1-eDP-1: connected
```

The internal panel (`eDP-1`) hangs off the **AMD iGPU**, while mhwd had generated a legacy `/etc/X11/xorg.conf.d/90-mhwd.conf` - an old single-GPU `nvidia-xconfig` template with no `OutputClass`, no PRIME reverse-PRIME chain, and no `AllowEmptyInitialConfiguration`. X rendered on the dGPU with no path to the iGPU-attached panel.

What fixed the X11 side:

1. Move the legacy config away: `sudo mv /etc/X11/xorg.conf.d/90-mhwd.conf /etc/X11/xorg.conf.d/90-mhwd.conf.bak`
2. Make sure `nvidia_drm` modesetting is enabled (`options nvidia_drm modeset=1` in `/etc/modprobe.d/`; current nvidia-open drivers enable it by default).
3. Clean the stale blacklists (`blacklist drm`, `blacklist ttm`, `blacklist drm_kms_helper`) that mhwd had left in `/etc/modprobe.d/mhwd-gpu.conf` - those are leftovers for ancient 390xx drivers and are actively harmful on nvidia-open.
4. `sudo mkinitcpio -P` and reboot.

## The Portable Monitor Stage

Even after that, SDDM still showed nothing on the internal panel. The decisive experiment: plug in a portable external monitor over HDMI. The login screen appeared **on the external monitor only** - and after logging into KDE, the internal panel lit up too.

That behavior pinned down the last piece: the greeter only activated X's default output (the dGPU's HDMI), while KDE's kwin enables every detected output once the session starts. The full render-to-panel chain was working; the greeter stage was the only gap.

## Random Freezes on X11: AMDGPU Fence Deadlock

The story was not over. On X11 the machine froze repeatedly: the desktop would lock up mid-typing, no keyboard shortcuts responded, and only a long-press power-off recovered it. Two telling patterns:

- A day spent on the portable monitor alone: no freeze at all.
- During a freeze, the **internal panel froze first**; the portable monitor sometimes kept working for a while.

Suspects tested and ruled out along the way: setting both AC and battery suspend actions to "nothing" in KDE did not prevent freezes after unplugging the monitor, and freezes also reproduced on boots where RustDesk had never been started. As a temporary mitigation, `kscreen_backend_launcher` could be stopped so KDE stopped re-submitting the display configuration, but already-blocked kernel threads only cleared after a reboot.

The kernel logs identified the deadlock:

```text
INFO: task kworker/u64:* blocked for more than 122 seconds.
Workqueue: events_unbound commit_work
amdgpu_display_get_crtc_scanoutpos
dma_fence_default_wait
drm_atomic_helper_wait_for_fences
commit_tail
```

Every freeze followed the same timeline: KDE X11/KScreen restored the dual-screen layout via XRandR right after login, the AMDGPU DRM atomic commit waited on a DMA fence that never completed, the display workqueue thread went into uninterruptible `D` state, and the iGPU-driven internal panel stopped updating first (the dGPU-driven external panel survived a bit longer).

## Switching SDDM and the Session to Wayland

Instead of fighting X11 PRIME edge cases and the fence deadlock further, I moved the display manager and session to Wayland, which bypasses the reverse-PRIME chain entirely:

```shell
sudo tee /etc/sddm.conf.d/99-wayland.conf <<'EOF'
[General]
DisplayServer=wayland
EOF
```

After a reboot, SDDM showed the login screen on the internal panel without any external monitor, and logging into the Plasma (Wayland) session just worked. The same dual-screen layout no longer triggered any `dma_fence` hangs, blocked tasks, or GPU resets - that class of X11 deadlock was gone for good.

## Takeaways

- **Check the display topology first on hybrid laptops.** `ls /sys/class/drm/card*/` tells you which GPU owns the internal panel; on this machine the panel is on the iGPU, so every X11 assumption "the NVIDIA card drives the screen" was wrong from the start.
- **`modprobe: FATAL: Module not found` with an installed driver package usually means kernel/module directory mismatch.** List the package files with `pacman -Ql` and compare the version directory against `uname -r`; a full `pacman -Syu` is the fix, not reinstalling the driver.
- **A black screen with a live TTY is a userspace graphics problem, not a broken install.** Nomodeset in GRUB is a fine one-boot diagnostic.
- **USB tethering is the fastest way online on a fresh install** - but an unstable cable produces half-finished transactions that cause exactly the kind of "installed but missing" states seen above.
- **On Optimus laptops with the panel on the iGPU, Wayland is the path of least resistance.** It removed both the greeter black screen and the X11 AMDGPU fence deadlocks.
- The `nvidia_wmi_ec_backlight` ACPI errors visible in the logs were noise throughout and unrelated to any of the failures above (they became their own story on 2026-09, when EC backlight control actually broke).

## Epilogue (2026-10): Freezes Are Not Entirely Gone

One correction to the claim above: what disappeared with Wayland was that one class of deadlock. In 2026-10 the machine froze several more times; the clearest case was 2026-10-04, when the whole screen locked up and the kernel log filled with 312 repetitions of `Pageflip timed out! This is a bug in the amdgpu kernel driver` - a display-layer commit timeout in the iGPU driver, an upstream bug, unrelated to the X11 dma_fence deadlock and with no reliable trigger. There is no fix yet; the fallback is the REISUB emergency reboot. The corrected conclusion: Wayland fixed the greeter black screen and the X11 fence deadlocks - not every freeze.
