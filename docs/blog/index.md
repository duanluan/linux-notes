---
title: Blog
description: Practical notes on Linux, development tools, and desktop systems
sidebar: false
aside: false
---

# Blog

## 2026

### [Installing Manjaro on an Optimus Laptop - Black Screens, a Portable Monitor, Random Freezes, and the Move to Wayland](./2026-10-01-manjaro-install-on-an-optimus-laptop.md)

`2026-10-01` · Manjaro · NVIDIA · AMD · Wayland

A fresh Manjaro KDE install on an AMD iGPU + RTX 5060 laptop whose internal panel sits on the iGPU: GRUB black screen, mismatched NVIDIA modules, a greeter that only lit the external monitor, and X11 AMDGPU fence deadlocks - moving to Wayland fixed the greeter and the fence deadlocks, but later amdgpu pageflip freezes proved it does not fix everything.

### [Manjaro Black Screen Shows Only loadkmap short read, but the NVIDIA Kernel Module Is Missing](./2026-08-11-manjaro-nvidia-black-screen.md)

`2026-08-11` · Manjaro · NVIDIA · System Recovery

A Manjaro black screen showed only `loadkmap: short read`; TTY diagnostics revealed and restored an NVIDIA kernel module removed during orphan-package cleanup.
