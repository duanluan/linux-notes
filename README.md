# Linux Notes (Arch / Manjaro KDE)

[简体中文](README.zh-CN.md)

![Manjaro](https://img.shields.io/badge/Linux-Manjaro-33b959?style=flat-square&logo=manjaro&logoColor=white)
![Desktop](https://img.shields.io/badge/DE-Plasma-1d99f3?style=flat-square&logo=kde&logoColor=white)
![VitePress](https://img.shields.io/badge/Docs-VitePress-646cff?style=flat-square&logo=vite&logoColor=white)
![License](https://img.shields.io/github/license/duanluan/linux-notes?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/duanluan/linux-notes?style=flat-square)

## 📖 Introduction

This repository is a practical guide for **Arch-based Manjaro Linux (KDE Plasma)**. It records a complete desktop setup path, from installing the system to tuning KDE, installing daily software, building a development environment, running Windows apps, and fixing issues that appear during real use.

The notes favor commands that can be copied directly, plus short explanations for why a setting is needed. They are written for people who want a usable Manjaro KDE workstation rather than a generic Linux overview.

👉 **Online docs: [https://duanluan.github.io/linux-notes/](https://duanluan.github.io/linux-notes/)**

## 🔎 How to use these notes

* Start with **System Installation** if you are preparing a new Manjaro KDE machine.
* Read **System Configuration** before installing many applications. It contains Pacman mirror selection, system updates, Fcitx5, DPI scaling, and virtual display setup.
* Use the software sections as a categorized checklist. Each entry usually includes the install method, official reference, and any Linux-specific fix.
* Check **Troubleshooting**, **Known Bugs**, and **Software Uninstallation** when an installed app or desktop component behaves unexpectedly.

## 🗂️ Core content index

### 1. 🚀 [System Installation](docs/notes/system-installation.md)
* **Version history**: Deepin 23.1 → Xubuntu 24.04.2 → Manjaro (current)
* **Boot media**: Ventoy + Manjaro KDE Plasma ISO
* **Installation flow**: BIOS boot / Manjaro Hello installer / partitions / location and keyboard settings

### 2. ⚙️ [System Configuration (Must Read)](docs/notes/system-configuration.md)
* **System basics**: login failure policy / system updates / network time synchronization
* **Pacman and mirrors**: Pacman mirror selection / Pacman configuration / ArchLinuxCN repository
* **GitHub and AUR acceleration**: AUR GitHub downloads / `git clone` acceleration / `curl` and `wget` GitHub downloads / `/etc/hosts`
* **Input methods and desktop experience**: Fcitx5 / DPI scaling / English home directory names / conflicting global shortcuts / terminal paste `^[[200~` / file descriptor limit / X11 client limit
* **Remote setup**: virtual display setup / physical monitor black screen fix / recovery steps

### 3. 🛠️ Software Installation (classified by purpose)

#### 💻 [System and Essentials](docs/notes/apps/system.md)
* **Base packages**: `base-devel` / GPU Drivers / Restore the X11 Login Option
* **Package management**: `yay` / `paru` / `debtap` / Spark Store
* **Performance and stability**: Zram Compression and Swappiness Tuning / EarlyOOM
* **Input methods**: oh-my-rime / Rime Ice / Wanxiang Pinyin and models
* **Terminal and productivity**: tmux / Nushell / fzf / zoxide
* **Wine ecosystem**: deepin-wine8/10-stable + spark-dwine-helper
* **Fonts and browsers**: Fonts / Microsoft Edge / Google Chrome / Tor Browser

#### 🔧 [Tools and Productivity](docs/notes/apps/tool.md)
* **Networking and proxy**: FlClash / Clash Verge / Clash Party / Stelliberty / Clash Mi / Koala Clash / Brook / proxychains / EasyTier / cpolar / ngrok
* **Connectivity checks**: `nc`
* **Virtualization and compatibility**: VMware / VirtualBox / Docker (Buildx, Compose, Portainer) / WinBoat / xDroid / Wine / Proton-GE / Wine Runner
* **Writing, knowledge, and utility tools**: Sublime Text / EmEditor / Typora / Obsidian / Pandoc / XMind / Draw.io / XnView MP / uTools / Rubick / KeePassXC / FSearch / AnyTXT Searcher
* **Screen capture and recording**: Snipaste / Flameshot / eSearch / SimpleScreenRecorder / OBS / Keyviz / StartLive
* **Downloads and sync**: Free Download Manager / Gopeed / Motrix Next / qBittorrent Enhanced Edition / Transmission / Xunlei / Synology Drive / Syncthing / Lightningvine / LocalSend / CopyQ
* **Remote desktop tools**: RustDesk / ToDesk / Sunlogin / TeamViewer / AnyDesk / Remote Desktop Manager + FreeRDP
* **Other utilities**: Geekbench / GnuPG + GpgFrontend / Sunshine + Moonlight / VLC / SMPlayer / PeaZip / Calibre

#### 🤖 [AI and Assistants](docs/notes/apps/ai.md)
* **LLM desktop clients**: Cherry Studio / Chatbox
* **Coding agents and desktops**: OpenCode / Claude Code / Claude Desktop / Codex CLI / Codex Desktop / ZCode Desktop /  Reasonix Desktop / Desktop CC GUI / Paseo / Cline CLI
* **CLI management and context tools**: CC Switch / rtk / Cockpit Tools
* **AI IDEs**: Cursor / Windsurf / Antigravity / Kiro / Trae / Qoder
* **Data and analytics**: Superset

#### 👨‍💻 [Full-Stack Development Environment](docs/notes/apps/development.md)
* **General tools**: Git (SSH keys / identity / useful defaults) / `act` for local GitHub Actions runs / Rebased
* **Frontend and mobile**: nvm + Node.js + pnpm + nrm / FVM + Flutter Mirrors + Dart / Android Studio / Visual Studio Code / WeChat Dev Tools
* **JetBrains tools**: Toolbox App / IntelliJ IDEA / WebStorm / PyCharm
* **Backend and system-level tooling**: JDK / Maven and Maven Daemon / Gradle / Apache JMeter / Python + pipx + cnpip + Miniforge + uv / Rust + Cargo Mirrors
* **Database and API tooling**: JetBrains DataGrip / Navicat Premium / DBX / DBeaver Enterprise Edition / Another Redis Desktop Manager / Offset Explorer / Apifox / Apipost / Postman
* **Terminal clients**: MobaXterm / WindTerm / WoTerm
* **Design collaboration**: MasterGo

#### 🎨 [Image, Video, and Audio Editing](docs/notes/apps/img-video-audio-edit.md)
* **Image and design**: GIMP + PhotoGIMP / Paint.NET / Krita / Blender / Figma Linux / Aseprite
* **Video post-production**: DaVinci Resolve Studio / Kdenlive / HandBrake
* **Audio editing**: Audacity

#### 🎮 [Games and Entertainment](docs/notes/apps/game.md)
* **Platforms**: Steam / Heroic / Lutris
* **Utilities**: Watt Toolkit (Steam++)
* **Minecraft**: HMCL / LauncherX / SJMCL

#### 💬 [Communication and Office](docs/notes/apps/standard.md)
* **Messaging and meetings**: WeChat / QQ / DingTalk / Feishu / Tencent Meeting
* **Email**: Thunderbird
* **Office suites**: WPS Office (365) / LibreOffice / OnlyOffice
* **Music players**: NetEase Cloud Music (including UnblockNeteaseMusic) / SPlayer / YesPlayMusic / VutronMusic / go-musicfox / MoeKoeMusic / LX Music
* **Video and cloud storage**: Bilibili client / PiliPlus / Baidu Netdisk / Nutstore

---

### 4. 🚑 [Troubleshooting](docs/notes/questions.md)
* Wi-Fi password prompt after KDE wallet is closed
* KDE panel freezes
* Forgot root password (Live CD + chroot)
* System will not boot after installing Navicat and Dameng ODBC
* AUR "validity check" failed (PKGBUILD `SKIP`)
* Bluetooth missing from the tray / missing firmware fix
* `mesonbuild` is missing (upgrade conflict handling)
* X11 ↔ Wayland input method environment variable conflict handling

### 5. 🐞 [Known Bugs](docs/notes/bug.md)
* Offset Explorer text overlay
* Snipaste Wayland shortcut key conflict
* Ctrl+H cannot input Chinese under Edge Wayland

### 6. 🧹 [Software Uninstallation](docs/notes/software-uninstallation.md)
* **Package Management**: pacman / yay / paru
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
