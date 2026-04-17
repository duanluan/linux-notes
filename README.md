# Linux Notes (Arch / Manjaro KDE)

[简体中文](README.zh-CN.md)

![Manjaro](https://img.shields.io/badge/Linux-Manjaro-33b959?style=flat-square&logo=manjaro&logoColor=white)
![Desktop](https://img.shields.io/badge/DE-Plasma-1d99f3?style=flat-square&logo=kde&logoColor=white)
![VitePress](https://img.shields.io/badge/Docs-VitePress-646cff?style=flat-square&logo=vite&logoColor=white)
![License](https://img.shields.io/github/license/duanluan/linux-notes?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/duanluan/linux-notes?style=flat-square)

## 📖 Introduction

This repository is a practical guide for **Arch-based Manjaro Linux (KDE Plasma)**.
It covers system installation, post-install configuration, software setup, full-stack development tools, Windows compatibility, media workflows, and day-to-day troubleshooting notes.

👉 **Online docs: [https://duanluan.github.io/linux-notes/](https://duanluan.github.io/linux-notes/)**

## 🗂️ Core content index

### 1. 🚀 [System Installation](docs/notes/system-installation.md)
* **Version history**: Deepin 23.1 → Xubuntu 24.04.2 → Manjaro (current)
* **Boot media**: Ventoy + Manjaro KDE Plasma ISO
* **Installation flow**: BIOS boot / partitioning (swap or hibernation) / time zone and language setup

### 2. ⚙️ [System Configuration (Must Read)](docs/notes/system-configuration.md)
* **System basics**: faillock policy / update precautions / NTP time sync
* **Pacman and mirrors**: mirror switching / parallel downloads / temporary ArchLinuxCN enablement
* **GitHub and AUR acceleration**: axel + makepkg `DLAGENTS` / URL rewrite / curl and wget wrappers / hosts acceleration
* **Desktop experience**: DPI scaling / English home directories / global shortcut conflict cleanup / terminal paste `^[[200~`
* **Remote setup**: virtual display setup (Intel or AMD GRUB injection + NVIDIA X11 EDID) / black-screen signal reset and rollback

### 3. 🛠️ Software Installation (classified by purpose)

#### 💻 [System and Essentials](docs/notes/apps/system.md)
* **Base packages**: `base-devel` / GPU drivers / X11 session recovery
* **Package management**: `yay` / `paru` / `debtap` / Spark Store
* **Performance and stability**: Zram + swappiness / EarlyOOM
* **Input methods**: Rime setup and model configuration
* **Terminal and productivity**: Tmux / Nushell / fzf / zoxide
* **Wine ecosystem**: deepin-wine8 or 10-stable + spark-dwine-helper
* **Fonts and browsers**: Chinese and coding fonts / Edge / Chrome / Tor Browser

#### 🔧 [Tools and Productivity](docs/notes/apps/tool.md)
* **Networking and proxy**: Clash Verge / FlClash / Brook / proxychains / EasyTier
* **Virtualization and compatibility**: VMware / VirtualBox / Docker (Buildx, Compose, Portainer) / WinBoat / Wine / Proton-GE / Wine runners
* **Writing and knowledge tools**: Sublime Text / Typora / Obsidian / Pandoc / XMind / Draw.io / uTools / Rubick
* **Screen capture and recording**: Snipaste / Flameshot / eSearch / SimpleScreenRecorder / OBS / StartLive
* **Downloads and sync**: FDM / Gopeed / qBittorrent EE / Synology Drive / Syncthing / LocalSend / CopyQ
* **Remote desktop tools**: RustDesk / ToDesk / Sunlogin / TeamViewer / AnyDesk / Remote Desktop Manager + FreeRDP
* **Other utilities**: Geekbench / KeePassXC / GnuPG + GpgFrontend / VLC / Calibre / Cherry Studio

#### 🤖 [AI and Assistants](docs/notes/apps/ai.md)
* **Coding agents**: OpenCode / Claude Code / Cline CLI
* **CLI switching**: CC Switch for multi-vendor and multi-model CLI management
* **LLM desktop client**: Cherry Studio

#### 👨‍💻 [Full-Stack Development Environment](docs/notes/apps/development.md)
* **General tools**: Git (SSH) / `act` for local GitHub Actions runs
* **Frontend and mobile**: nvm + Node.js + pnpm / Flutter (FVM) / VS Code / WeChat Developer Tools
* **Backend and system-level tooling**: Java (JDK, Maven, Gradle, JMeter) / Python (pipx, uv, cnpip) / Rust (Cargo mirror setup)
* **Database and API tooling**: DataGrip / Navicat / DBeaver EE / Redis Desktop / Offset Explorer / Apifox / Apipost / Postman
* **Terminal clients**: MobaXterm / WindTerm / WoTerm

#### 🎨 [Image, Video, and Audio Editing](docs/notes/apps/img-video-audio-edit.md)
* **Image and design**: GIMP + PhotoGIMP / Krita / Blender / Figma Linux / Aseprite
* **Video post-production**: DaVinci Resolve (including Studio setup) / Kdenlive / HandBrake
* **Audio editing**: Audacity

#### 🎮 [Games and Entertainment](docs/notes/apps/game.md)
* **Platforms**: Steam / Heroic / Lutris
* **Utilities**: Watt Toolkit (Steam++)
* **Minecraft**: HMCL (scaling fix) / LauncherX

#### 💬 [Communication and Office](docs/notes/apps/standard.md)
* **Messaging and meetings**: WeChat / QQ / DingTalk / Feishu / Tencent Meeting
* **Email**: Thunderbird
* **Office suites**: WPS Office (365 or CN) / LibreOffice / OnlyOffice
* **Music players**: NetEase Cloud Music (including UnblockNeteaseMusic) / SPlayer / YesPlayMusic / VutronMusic / go-musicfox / MoeKoeMusic / LX Music
* **Video and cloud storage**: Bilibili client / Baidu Netdisk

---

### 4. 🚑 [Troubleshooting](docs/notes/questions.md)
* Wi-Fi password prompt after KDE wallet is closed
* Forgot root password (Live CD + chroot)
* AUR "validity check" failed (PKGBUILD `SKIP`)
* Bluetooth missing from the tray / missing firmware fix
* `mesonbuild` is missing (upgrade conflict handling)
* X11 ↔ Wayland input method environment variable conflict handling

### 5. 🐞 [Known Bugs](docs/notes/bug.md)
* Offset Explorer text overlay
* Snipaste Wayland shortcut key conflict
* Ctrl+H cannot input Chinese under Edge Wayland

### 6. 🧹 [Software Uninstallation](docs/notes/software-uninstallation.md)
* **Package Management**: pacman/yay/paru `-Rns` cascade cleanup
* **Targeted Cleanup**: VMware Workstation Pro / WinBoat (container + config) / Firefox leftovers

### 7. 🧩 [Tips & Tricks](docs/notes/tips-tricks.md)
* Meta + mouse: move/zoom window
* Auto-start management at boot
* Turn off animation effects
* Open multiple directories in a single Dolphin window with tabs

---

## 🤝 Contribution and feedback

Issues and PRs are welcome if you want to add more practical setup notes.

## 📄 License

This project is for reference. Rights to some scripts or software belong to their original authors.

Licensed under the [Apache License, Version 2.0](LICENSE).

Copyright © 2025-PRESENT [duanluan](https://github.com/duanluan)
