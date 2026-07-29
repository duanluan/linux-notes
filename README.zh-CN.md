# Linux 使用笔记（Arch Manjaro KDE）

[English](README.md)

![Manjaro](https://img.shields.io/badge/Linux-Manjaro-33b959?style=flat-square&logo=manjaro&logoColor=white)
![Desktop](https://img.shields.io/badge/DE-Plasma-1d99f3?style=flat-square&logo=kde&logoColor=white)
![VitePress](https://img.shields.io/badge/Docs-VitePress-646cff?style=flat-square&logo=vite&logoColor=white)
![License](https://img.shields.io/github/license/duanluan/linux-notes?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/duanluan/linux-notes?style=flat-square)

## 📖 简介

这份文档是基于 **Arch 系 Manjaro Linux（KDE Plasma）** 的实用指南。它记录了一台桌面工作站从系统安装、KDE 调整、常用软件安装、开发环境搭建，到 Windows 应用兼容和日常问题处理的完整过程。

文档更偏向可直接执行的命令和必要说明。目标不是泛泛介绍 Linux，而是帮助读者搭出一套稳定、顺手、适合开发和日常使用的 Manjaro KDE 环境。

👉 **在线阅读：[https://duanluan.github.io/linux-notes/](https://duanluan.github.io/linux-notes/)**

## 🔎 如何使用这份笔记

* 新装系统时，先看 **系统安装**。
* 大量安装软件前，建议先看 **系统配置**。这里包含 Pacman 换源、系统更新、Fcitx5、DPI 缩放、快捷键、虚拟屏等基础设置。
* 软件章节可以当作分类清单使用。多数条目包含安装方式、官方链接，以及 Linux 下需要额外处理的地方。
* 软件或桌面组件异常时，再看 **问题解决**、**未解决 BUG** 和 **软件卸载**。

## 🗂️ 核心内容索引

### 1. 🚀 [系统安装](docs/zh/notes/system-installation.md)
* **版本经历**：Deepin 23.1 → Xubuntu 24.04.2 → Manjaro（当前）
* **制作启动盘**：Ventoy + Manjaro KDE Plasma ISO
* **安装流程**：BIOS 启动 / Manjaro Hello 安装器 / 分区 / 位置与键盘设置

### 2. ⚙️ [系统配置（必看）](docs/zh/notes/system-configuration.md)
* **系统基础**：登录失败次数和锁定时间 / 系统更新 / 网络时间同步
* **Pacman & 源**：Pacman 换源 / Pacman 配置 / ArchLinuxCN 源
* **GitHub/AUR 加速**：AUR 的 GitHub 下载 / `git clone` 加速 / `curl` 和 `wget` GitHub 下载 / GitHub Host
* **输入法与桌面体验**：Fcitx5 / DPI 缩放 / 个人目录英文 / 取消冲突全局快捷键 / 终端粘贴 `^[[200~` / 文件描述符上限 / X11 客户端数量上限
* **远程必看**：创建虚拟屏 / 解决物理显示器无法点亮或黑屏 / 故障恢复

### 3. 🛠️ 软件安装（按用途分类）

#### 💻 [系统与基础工具](docs/zh/notes/apps/system.md)
* **必装基建**：`base-devel` / 显卡驱动 / 恢复 X11 登录选项
* **包管理增强**：`yay` / `paru` / `debtap` / Spark Store（星火应用商店）
* **性能与稳定**：Zram + Swappiness / EarlyOOM
* **输入法方案**：oh-my-rime / 雾凇拼音 / 万象拼音和模型
* **终端与效率**：Tmux / Nushell / fzf / zoxide
* **Wine 生态**：deepin-wine8/10-stable + spark-dwine-helper
* **字体 & 浏览器**：字体 / Microsoft Edge / Google Chrome / Tor Browser

#### 🔧 [工具与生产力](docs/zh/notes/apps/tool.md)
* **网络与代理**：FlClash / Clash Verge / Clash Party / Stelliberty / Clash Mi / Koala Clash / Brook / proxychains / EasyTier / cpolar / ngrok
* **连通性检查**：`nc` TCP 与 UDP 测试
* **虚拟化与兼容**：VMware / VirtualBox / Docker（Buildx/Compose/Portainer）/ WinBoat / xDroid / Wine / Proton-GE / Wine 运行器
* **效率办公**：Sublime Text / EmEditor / Typora / Obsidian / Pandoc / XMind / Draw.io / XnView MP / uTools / Rubick / KeePassXC / FSearch / AnyTXT Searcher
* **截图录屏**：Snipaste / Flameshot / eSearch / SimpleScreenRecorder / OBS / Keyviz / StartLive
* **下载与同步**：Free Download Manager / Gopeed / Motrix Next / qBittorrent Enhanced Edition / Transmission / 迅雷 / Synology Drive / Syncthing / 闪电藤 / LocalSend / CopyQ
* **远程工具**：RustDesk / ToDesk / 向日葵 / TeamViewer / AnyDesk / Remote Desktop Manager + FreeRDP
* **其他**：Geekbench / GnuPG + GpgFrontend / Sunshine + Moonlight / VLC / SMPlayer / PeaZip / Calibre

#### 🤖 [AI 与智能助手](docs/zh/notes/apps/ai.md)
* **大模型客户端**：Cherry Studio / Chatbox
* **编码代理与桌面版**：OpenCode / Claude Code / Claude Desktop / Codex CLI / Codex Desktop / ZCode Desktop /  Reasonix Desktop / Desktop CC GUI / Paseo / Cline CLI
* **CLI 管理与上下文工具**：CC Switch / rtk：过滤压缩 LLM 上下文 / Cockpit Tools
* **AI IDE**：Cursor / Windsurf / Antigravity / Kiro / Trae / Qoder
* **数据分析**：Superset

#### 👨‍💻 [全栈开发环境](docs/zh/notes/apps/development.md)
* **通用**：Git（SSH Key / 用户信息 / 常用配置）/ act（本地跑 GitHub Actions）/ Rebased
* **前端与移动端**：nvm + Node.js + pnpm + nrm / FVM + Flutter 换源 + Dart / Android Studio / Visual Studio Code / 微信开发者工具
* **JetBrains 系**：Toolbox App / IntelliJ IDEA / WebStorm / PyCharm
* **后端与系统级**：JDK / Maven (Daemon) / Gradle / Apache JMeter / Python + pipx + cnpip 切换最快 pip 镜像源 + Miniforge + uv / Rust + Cargo 换源
* **数据库与接口工具**：JetBrains DataGrip / Navicat Premium / DBX / DBeaver Enterprise Edition / Another Redis Desktop Manager / Offset Explorer / Apifox / Apipost / Postman
* **运维终端**：MobaXterm / WindTerm / WoTerm
* **设计协作**：MasterGo

#### 🎨 [图影音编辑](docs/zh/notes/apps/img-video-audio-edit.md)
* **图像/设计**：GIMP + PhotoGIMP / Paint.NET / Krita / Blender / Figma Linux / Aseprite
* **视频后期**：DaVinci Resolve Studio / Kdenlive / HandBrake
* **音频处理**：Audacity

#### 🎮 [游戏与娱乐](docs/zh/notes/apps/game.md)
* **平台**：Steam / Heroic / Lutris
* **工具**：Watt Toolkit（Steam 工具箱）
* **Minecraft**：HMCL / LauncherX / SJMCL

#### 💬 [即时通讯与办公](docs/zh/notes/apps/standard.md)
* **通讯/会议**：微信 / QQ / 钉钉 / 飞书 / 腾讯会议
* **邮件**：Thunderbird
* **办公套件**：WPS Office (365) / LibreOffice / OnlyOffice
* **音乐**：网易云（含 UnblockNeteaseMusic）/ SPlayer / YesPlayMusic / VutronMusic / go-musicfox / MoeKoeMusic / LX Music
* **影音/网盘**：哔哩哔哩客户端 / PiliPlus / 百度网盘 / 坚果云

---

### 4. 🚑 [问题解决](docs/zh/notes/questions.md)
* KDE 钱包关闭后 Wi-Fi 密码提示
* KDE 任务栏卡住
* 忘记 root 密码（Live CD + chroot）
* 安装 Navicat 与达梦 ODBC 后系统无法启动
* AUR “有效性检查”失败（PKGBUILD `SKIP`）
* 托盘区蓝牙不显示 / 固件缺失修复
* `mesonbuild` 缺失（升级冲突处理）
* X11 ↔ Wayland 输入法环境变量冲突处理

### 5. 🐞 [未解决 BUG](docs/zh/notes/bug.md)
* Offset Explorer 文字叠加
* Snipaste Wayland 快捷键冲突
* Edge Wayland 下 Ctrl+H 无法输入中文

### 6. 🧹 [软件卸载](docs/zh/notes/software-uninstallation.md)
* **包管理**：pacman / yay / paru
* **专项卸载**：VMware Workstation Pro / WinBoat（容器+配置）/ Firefox 残留清理

### 7. 🧩 [使用技巧](docs/zh/notes/tips-tricks.md)
* Meta + 鼠标：移动/缩放窗口
* 开机自启管理
* 关闭动画特效
* Dolphin 单窗口多标签打开目录

---

## 🤝 贡献与反馈

欢迎提交 Issue 或 PR 补充更多实用的软件配置方案。

## 📄 License

本项目笔记内容仅供参考，部分脚本或软件权利归原作者所有。

Licensed under the [Apache License, Version 2.0](LICENSE).

Copyright © 2025-PRESENT [duanluan](https://github.com/duanluan)
