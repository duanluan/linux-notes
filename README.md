# Linux 使用笔记（Manjaro）

![Manjaro](https://img.shields.io/badge/Linux-Manjaro-33b959?style=flat-square&logo=manjaro&logoColor=white)
![VuePress](https://img.shields.io/badge/Docs-VuePress-3eaf7c?style=flat-square&logo=vue.js&logoColor=white)
![License](https://img.shields.io/github/license/duanluan/linux-notes?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/duanluan/linux-notes?style=flat-square)
![Stars](https://img.shields.io/github/stars/duanluan/linux-notes?style=flat-square&logo=github)

## 📖 简介

这份文档是我个人在使用 **Manjaro Linux** 过程中的详细记录。内容涵盖了从系统安装、初始化配置，到各类软件（开发、办公、影音、游戏）的安装避坑，以及常见问题的解决方案。

👉 **在线阅读：[https://duanluan.github.io/linux-notes/](https://duanluan.github.io/linux-notes/)**

---

## 🗂️ 目录概览

### 1. [系统安装](https://duanluan.github.io/linux-notes/notes/system-installation.html)
* **版本经历**：Deepin -> Xubuntu -> Manjaro
* **制作启动盘**：Ventoy 使用指南与 BIOS 设置
* **安装流程**：分区建议、时区语言设置、Office 选项

### 2. [系统配置（必看）](https://duanluan.github.io/linux-notes/notes/system-configuration.html)
* **包管理优化**：Pacman 换源/多线程下载、AUR 加速（Axel）、GitHub 镜像加速
* **输入法**：Fcitx5 安装与详细配置（去重、快捷键优化）
* **界面与体验**：DPI 缩放、用户目录语言切换、清理全局快捷键占用
* **系统更新**：Pacman 更新策略与内核注意事项

### 3. 软件安装
这里收录了我在 Manjaro 下使用的所有软件清单及配置方法：

#### 🖥️ [系统类](https://duanluan.github.io/linux-notes/notes/software-installation/system.html)
> 基础依赖与核心组件
* **核心工具**：`base-devel` + `cmake` + `unzip`
* **驱动与性能**：显卡驱动（NVIDIA/Intel/AMD）、Zram 内存压缩
* **包管理增强**：`yay` + `paru`（配置与技巧）、debtap（Deb 转 Arch 包）
* **Shell & 终端**：Nushell、Tmux
* **输入法扩展**：Rime 雾凇拼音
* **应用商店**：Spark Store（星火应用商店）
* **浏览器**：Microsoft Edge、Google Chrome、Tor Browser

#### 🛠️ [工具类](https://duanluan.github.io/linux-notes/notes/software-installation/tool.html)
> 效率工具、网络与虚拟化
* **性能测试**：Geekbench 6
* **网络/代理**：Clash Verge、Brook、proxychains
* **兼容层/虚拟化**：Wine & Wine 运行器、VMware Workstation Pro、VirtualBox、安卓模拟器（麟卓卓懿）
* **效率/启动器**：uTools、Rubick、FSearch、AnyTXT Searcher
* **笔记/文档**：Obsidian、Sublime Text、Typora、Pandoc、XMind
* **远程控制**：RustDesk、TeamViewer、AnyDesk、向日葵、ToDesk、EasyTier（内网穿透）、Remote Desktop Manager
* **文件传输/同步**：Synology Drive、Syncthing、LocalSend/闪电藤、CopyQ、Free Download Manager、qBittorrent EE
* **多媒体/录屏**：Snipaste、eSearch、OBS Studio、SimpleScreenRecorder、VLC
* **其他**：KeepassXC、GnuPG + GpgFrontend、Calibre

#### 🏢 [普通类](https://duanluan.github.io/linux-notes/notes/software-installation/standard.html)
> 社交、办公与日常娱乐
* **社交**：QQ、微信（快捷键脚本）、飞书、钉钉
* **办公**：WPS Office (365/CN)、腾讯会议
* **音乐**：网易云音乐（Electron + UnblockNeteaseMusic）、LX Music（洛雪）
* **云存储**：百度网盘

#### 🎨 [图影音编辑类](https://duanluan.github.io/linux-notes/notes/software-installation/img-video-audio-edit.html)
* **图像处理**：GIMP + PhotoGIMP
* **视频剪辑**：Kdenlive、DaVinci Resolve (Studio/OpenCL 驱动选择)
* **3D 创作**：Blender

#### 👨‍💻 [开发类](https://duanluan.github.io/linux-notes/notes/software-installation/development.html)
> 全栈开发环境搭建
* **版本控制**：Git（配置/SSH）、act（本地 GitHub Actions）
* **容器化**：Docker + Compose + Portainer
* **前端/Node**：nvm + Node.js + pnpm + nrm
* **Java 生态**：JDK、Gradle、Maven (Daemon)
* **JetBrains 全家桶**：Toolbox、IntelliJ IDEA、WebStorm、PyCharm、DataGrip
* **移动开发**：Android Studio（中文插件）、FVM + Flutter（换源/环境修复）、微信开发者工具
* **Python/Rust**：Python (pipx/uv/cnpip)、Rust (Cargo 换源)
* **数据库/API**：Navicat Premium、DBeaver EE、Another Redis Desktop Manager、Apifox、Apipost、Postman、Offset Explorer (Kafka)
* **终端/其他**：MobaXterm Pro、WindTerm

#### 🎮 [游戏类](https://duanluan.github.io/linux-notes/notes/software-installation/game.html)
* **Minecraft**：HMCL 启动器
* **串流**：Sunshine + Moonlight

---

### 4. 维护与问题排查

* **[软件卸载](https://duanluan.github.io/linux-notes/notes/software-uninstallation.html)**：常用包管理命令（pacman/yay/paru）及 VMware、Firefox 等软件的彻底卸载。
* **[问题解决](https://duanluan.github.io/linux-notes/notes/questions.html)**：
    * 终端粘贴出现 `^[[200~`
    * 关闭 KDE 钱包后 WiFi 需重复输密码
    * 忘记 Root 密码重置
    * AUR 安装报错“一个或多个文件没有通过有效性检查”
    * 托盘区蓝牙不显示/固件报错修复
    * X11 切换 Wayland 输入法及缩放问题
* **[使用技巧](https://duanluan.github.io/linux-notes/notes/tips-tricks.html)**：
    * 窗口便捷移动/改变大小
    * 开机自动启动管理
    * 关闭不必要的桌面特效

---

## 📄 License

本项目笔记内容仅供参考，部分脚本或软件权利归原作者所有。