# Linux 使用笔记（Arch Manjaro KDE）

[English](README.md)

![Manjaro](https://img.shields.io/badge/Linux-Manjaro-33b959?style=flat-square&logo=manjaro&logoColor=white)
![Desktop](https://img.shields.io/badge/DE-Plasma-1d99f3?style=flat-square&logo=kde&logoColor=white)
![VitePress](https://img.shields.io/badge/Docs-VitePress-646cff?style=flat-square&logo=vite&logoColor=white)
![License](https://img.shields.io/github/license/duanluan/linux-notes?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/duanluan/linux-notes?style=flat-square)

## 📖 简介

这份文档是基于 **Arch 系 Manjaro Linux（KDE Plasma）** 的全栈使用指南。
内容不仅包含基础的系统安装与初始化，还深入记录了全栈开发环境搭建、Windows 软件完美兼容方案、影音后期工作流以及各类疑难杂症的独家修复方案。

👉 **在线阅读：[https://duanluan.github.io/linux-notes/](https://duanluan.github.io/linux-notes/)**

## 🗂️ 核心内容索引

### 1. 🚀 [系统安装](docs/zh/notes/system-installation.md)
* **版本经历**：Deepin 23.1 → Xubuntu 24.04.2 → Manjaro（当前）
* **制作启动盘**：Ventoy + Manjaro KDE Plasma ISO
* **安装流程**：BIOS 启动 / 分区（Swap/休眠）/ 时区语言设置

### 2. ⚙️ [系统配置（必看）](docs/zh/notes/system-configuration.md)
* **系统基础**：faillock 锁定策略 / 系统更新注意事项 / NTP 时间同步
* **Pacman & 源**：换源 / 并行下载 / ArchLinuxCN 临时启用
* **GitHub/AUR 加速**：axel + makepkg `DLAGENTS` / URL rewrite / curl&wget wrapper / hosts 加速
* **桌面体验**：DPI 缩放 / 个人目录英文 / 取消冲突全局快捷键 / 终端粘贴 `^[[200~`
* **远程必看**：虚拟屏（Intel/AMD GRUB 注入 + NVIDIA X11 EDID）/ 黑屏信号重置与回滚方案

### 3. 🛠️ 软件安装（按用途分类）

#### 💻 [系统与基础工具](docs/zh/notes/apps/system.md)
* **必装基建**：`base-devel` / 显卡驱动 / 恢复 X11 会话
* **包管理增强**：`yay` / `paru` / `debtap` / Spark Store（星火应用商店）
* **性能与稳定**：Zram + Swappiness / EarlyOOM
* **输入法方案**：Rime（oh-my-rime / 雾凇 / 万象）与模型配置
* **终端与效率**：Tmux / Nushell / fzf / zoxide
* **Wine 生态**：deepin-wine8/10-stable + spark-dwine-helper
* **字体 & 浏览器**：常用中文/编程字体 / Edge / Chrome / Tor Browser

#### 🔧 [工具与生产力](docs/zh/notes/apps/tool.md)
* **网络与代理**：Clash Verge / FlClash / Brook / proxychains / EasyTier
* **虚拟化与兼容**：VMware / VirtualBox / Docker（Buildx/Compose/Portainer）/ WinBoat / Wine / Proton-GE / Wine 运行器
* **效率办公**：Sublime Text / Typora / Obsidian / Pandoc / XMind / Draw.io / uTools / Rubick
* **截图录屏**：Snipaste / Flameshot / eSearch / SimpleScreenRecorder / OBS / StartLive
* **下载与同步**：FDM / Gopeed / qBittorrent EE / Synology Drive / Syncthing / LocalSend / CopyQ
* **远程工具**：RustDesk / ToDesk / 向日葵 / TeamViewer / AnyDesk / Remote Desktop Manager + FreeRDP
* **其他**：Geekbench / KeePassXC / GnuPG + GpgFrontend / VLC / Calibre / Cherry Studio

#### 🤖 [AI 与智能助手](docs/zh/notes/apps/ai.md)
* **编码代理**：OpenCode / Claude Code / Cline CLI
* **配置切换**：CC Switch 统一管理多 CLI 供应商与模型
* **大模型客户端**：Cherry Studio

#### 👨‍💻 [全栈开发环境](docs/zh/notes/apps/development.md)
* **通用**：Git（SSH）/ act（本地跑 GitHub Actions）
* **前端与移动端**：nvm + Node.js + pnpm / Flutter（FVM）/ VS Code / 微信开发者工具
* **后端与系统级**：Java（JDK/Maven/Gradle/JMeter）/ Python（pipx/uv/cnpip）/ Rust（Cargo 换源）
* **数据库与接口工具**：DataGrip / Navicat / DBeaver EE / Redis Desktop / Offset Explorer / Apifox / Apipost / Postman
* **运维终端**：MobaXterm / WindTerm / WoTerm

#### 🎨 [图影音编辑](docs/zh/notes/apps/img-video-audio-edit.md)
* **图像/设计**：GIMP + PhotoGIMP / Krita / Blender / Figma Linux / Aseprite
* **视频后期**：DaVinci Resolve（含 Studio 安装方案）/ Kdenlive / HandBrake
* **音频处理**：Audacity

#### 🎮 [游戏与娱乐](docs/zh/notes/apps/game.md)
* **平台**：Steam / Heroic / Lutris
* **工具**：Watt Toolkit（Steam 工具箱）
* **Minecraft**：HMCL（缩放修复）/ LauncherX

#### 💬 [即时通讯与办公](docs/zh/notes/apps/standard.md)
* **通讯/会议**：微信 / QQ / 钉钉 / 飞书 / 腾讯会议
* **邮件**：Thunderbird
* **办公套件**：WPS Office（365/CN）/ LibreOffice / OnlyOffice
* **音乐**：网易云（含 UnblockNeteaseMusic）/ SPlayer / YesPlayMusic / VutronMusic / go-musicfox / MoeKoeMusic / LX Music
* **影音/网盘**：哔哩哔哩客户端 / 百度网盘

---

### 4. 🚑 [问题解决](docs/zh/notes/questions.md)
* KDE 钱包关闭后 Wi-Fi 密码提示
* 忘记 root 密码（Live CD + chroot）
* AUR “有效性检查”失败（PKGBUILD `SKIP`）
* 托盘区蓝牙不显示 / 固件缺失修复
* `mesonbuild` 缺失（升级冲突处理）
* X11 ↔ Wayland 输入法环境变量冲突处理

### 5. 🐞 [未解决 BUG](docs/zh/notes/bug.md)
* Offset Explorer 文字叠加
* Snipaste Wayland 快捷键冲突
* Edge Wayland 下 Ctrl+H 无法输入中文

### 6. 🧹 [软件卸载](docs/zh/notes/software-uninstallation.md)
* **包管理**：pacman / yay / paru `-Rns` 级联清理
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
