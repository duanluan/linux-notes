# Linux 使用笔记（Arch / Manjaro）

![Manjaro](https://img.shields.io/badge/Linux-Manjaro-33b959?style=flat-square&logo=manjaro&logoColor=white)
![Desktop](https://img.shields.io/badge/DE-KDE%20Plasma-1d99f3?style=flat-square&logo=kde&logoColor=white)
![VuePress](https://img.shields.io/badge/Docs-VuePress-3eaf7c?style=flat-square&logo=vue.js&logoColor=white)
![License](https://img.shields.io/github/license/duanluan/linux-notes?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/duanluan/linux-notes?style=flat-square)

## 📖 简介

这份文档是基于 **Arch 系 Manjaro Linux（KDE Plasma）** 的全栈使用指南。
内容不仅包含基础的系统安装与初始化，还深入记录了全栈开发环境搭建、Windows 软件完美兼容方案、影音后期工作流以及各类疑难杂症的独家修复方案。

👉 **在线阅读：[https://duanluan.github.io/linux-notes/](https://duanluan.github.io/linux-notes/)**

---

## 🗂️ 核心内容索引

### 1. 🚀 [系统安装 & 初始化](https://duanluan.github.io/linux-notes/notes/system-installation.html)
从零开始构建你的工作台：
* **安装引导**：Ventoy 启动盘制作 / BIOS 设置 / 分区与 Swap 策略
* **[系统配置](https://duanluan.github.io/linux-notes/notes/system-configuration.html)**：
  * **源加速**：Pacman 镜像 / GitHub 镜像
  * **性能与体验**：Pacman 并行下载 / 登录失败锁定策略 / X11 会话还原
  * **输入法**：Fcitx5 / Rime（雾凇/薄荷/万象） 挂载与词库管理
  * **显示优化**：HiDPI 缩放 / 虚拟屏配置（远程必看）
  * **环境修整**：Zsh 配置 / 用户目录英文路径 / 全局快捷键防冲突

### 2. 🛠️ 软件生态装机清单

#### 💻 [系统与基础工具](https://duanluan.github.io/linux-notes/notes/software-installation/system.html)
* **核心基建**：`base-devel` / Kernel Headers / 显卡驱动（NVIDIA/AMD）
* **性能优化**：Zram 内存压缩 / EarlyOOM 防卡死 / Swappiness 策略
* **包管理增强**：`yay` & `paru` 进阶 / Spark Store（星火应用商店） / Debtap（Deb转Arch）
* **终端增强**：Nushell / Tmux / Zoxide / Fzf
* **Wine 生态**：Deepin-Wine 8/10 / Spark-Dwine-Helper
* **字体美化**：霞鹜文楷（LXGW） / 更纱黑体（Sarasa） / Maple Mono / Myna / 文泉驿
* **浏览器**：Microsoft Edge / Google Chrome / Tor Browser

#### 🔧 [生产力工具箱](https://duanluan.github.io/linux-notes/notes/software-installation/tool.html)
* **虚拟化与兼容**：
  * **WinBoat**（无缝运行 Windows 应用 + 驱动注入教程）
  * **Docker** + Compose + Portainer + Lazydocker
  * VMware Workstation Pro（网络修复） / VirtualBox（USB/KVM 冲突修复）
  * **Wine 运行器** / Proton-GE-Custom
  * **安卓模拟器**：麟卓卓懿（xDroid）
* **网络与远程**：
  * Clash Verge（规则覆写） / Brook / Proxychains / EasyTier 组网
  * RustDesk / ToDesk（启动服务修复） / 向日葵 / TeamViewer / AnyDesk
  * Remote Desktop Manager（FreeRDP） / MobaXterm Pro（汉化 + Wine）
* **效率办公**：
  * **笔记文档**：Obsidian / Typora（激活） / Sublime Text / Pandoc / XMind / Draw.io
  * **搜索启动**：uTools / Rubick / FSearch / AnyTXT Searcher
  * **截图录屏**：Snipaste（Wayland 修复） / Flameshot（黑屏修复） / eSearch / SimpleScreenRecorder / OBS Studio / StartLive（B站开播）
  * **文件传输**：Synology Drive / Syncthing（+ Tray） / LocalSend（闪电藤） / CopyQ
  * **下载工具**：FDM / Gopeed / qBittorrent EE
  * **其他**：Geekbench 6 / KeePassXC / GnuPG + GpgFrontend / Calibre / XnView MP

#### 👨‍💻 [全栈开发环境](https://duanluan.github.io/linux-notes/notes/software-installation/development.html)
* **IDE/编辑器**：
  * **JetBrains 全家桶**（Toolbox / IDEA / WebStorm / PyCharm / DataGrip）
    * *包含 IDEA 内存泄露修复 / Android Studio 安装中文插件*
  * VS Code / 微信开发者工具（Linux 移植）
* **前端与移动端**：
  * Node.js（nvm / pnpm / nrm） / Flutter（FVM + 换源 + 环境修复）
* **后端与系统级**：
  * Java（JDK / Maven Daemon / Gradle / JMeter）
  * Python（pipx / uv / cnpip） / Rust（Cargo换源）
* **数据库与中间件**：
  * Navicat Premium（Lite 版 / Wine / OCI修复） / DBeaver EE（Agent破解） / Another Redis Desktop Manager
  * Kafka Offset Explorer（缩放修复） / Apifox / Apipost / Postman
* **终端与运维**：
  * WindTerm（临时文件报错修复） / XPipe（Server Hub） / act（本地 GitHub Actions）
  * Git（配置/SSH）

#### 🎨 [影音与设计](https://duanluan.github.io/linux-notes/notes/software-installation/img-video-audio-edit.html)
* **图像设计**：GIMP + PhotoGIMP / Krita / Figma / Aseprite / Blender
* **视频后期**：DaVinci Resolve Studio / Kdenlive / HandBrake
* **音频处理**：Audacity

#### 🎮 [游戏与娱乐](https://duanluan.github.io/linux-notes/notes/software-installation/game.html)
* **平台**：Steam / Heroic / Lutris
* **Minecraft**：HMCL 启动器（高分屏修复）
* **串流**：Sunshine + Moonlight

#### 💬 [即时通讯与办公](https://duanluan.github.io/linux-notes/notes/software-installation/standard.html)
* **通讯**：微信 + 激活脚本 / QQ / 钉钉 / 飞书
* **办公套件**：WPS Office（365 / CN） / 腾讯会议
* **音乐**：
  * 网易云音乐（Electron / UnblockNeteaseMusic 服务端搭建）
  * YesPlayMusic / VutronMusic / go-musicfox（命令行版）
  * LX Music（洛雪音乐 + 自定义源）
* **网盘**：百度网盘
* **播放器**：VLC

---

### 3. 🚑 [故障排查（Troubleshooting）](https://duanluan.github.io/linux-notes/notes/questions.html)

* **硬件相关**：蓝牙固件丢失修复
* **系统相关**：KDE 钱包无限弹窗 / Root 密码重置 / AUR 签名效验失败修复
* **图形界面**：Wayland 下输入法环境变量冲突 / 终端粘贴 `^[[200~`
* **[遗留 BUG](https://duanluan.github.io/linux-notes/notes/bug.html)**：Edge 中文输入问题等

### 4. 🧹 [维护与技巧](https://duanluan.github.io/linux-notes/notes/tips-tricks.html)
* **[软件卸载](https://duanluan.github.io/linux-notes/notes/software-uninstallation.html)**：Pacman/Paru 级联清理、VMware/WinBoat 彻底卸载
* **使用技巧**：KDE 窗口高效管理 / Dolphin 多标签策略 / 开机自启管理

---

## 🤝 贡献与反馈

欢迎提交 Issue 或 PR 补充更多实用的软件配置方案。

## 📄 License

本项目笔记内容仅供参考，部分脚本或软件权利归原作者所有。

Licensed under the [Apache License, Version 2.0](LICENSE).

Copyright © 2025-PRESENT [duanluan](https://github.com/duanluan)