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
* **制作启动盘**：Ventoy 使用指南与系统引导安装。

### 2. [系统配置（必看）](https://duanluan.github.io/linux-notes/notes/system-configuration.html)
* **包管理优化**：Pacman 换源/配置、加速 AUR 下载、GitHub 加速
* **输入法**：Fcitx5 安装与配置
* **界面与体验**：DPI 缩放、用户语言切换、清理占用快捷键（KRunner、KWin 等）

### 3. 软件安装
这里收录了我在 Manjaro 下使用的所有软件清单及配置方法：

#### 🖥️ [系统类](https://duanluan.github.io/linux-notes/notes/software-installation/system.html)
> 基础依赖与浏览器
* **核心组件**：`base-devel` + `cmake` + `unzip`、`yay` + `paru`
* **输入法扩展**：Rime 雾凇拼音
* **Shell**：Nushell
* **包转换工具**：debtap
* **应用商店**：Spark Store（星火应用商店）
* **浏览器**：Microsoft Edge、Google Chrome、Tor Browser

#### 🛠️ [工具类](https://duanluan.github.io/linux-notes/notes/software-installation/tool.html)
> 效率工具、网络与虚拟化
* **性能测试**：Geekbench 6
* **网络/代理**：Clash Verge、Brook、proxychains
* **兼容层/虚拟化**：Wine & Wine 运行器、VMware Workstation Pro、VirtualBox、安卓模拟器
* **效率/启动器**：uTools、Rubick
* **远程控制**：RustDesk、TeamViewer、AnyDesk、向日葵、Sunshine + Moonlight
* **文件传输/同步**：Synology Drive、Syncthing、LocalSend、CopyQ
* **其他**：KeepassXC、FDM、qBittorrent EE、Snipaste、OBS Studio、VLC、XMind、Calibre、EasyTier

#### 🏢 [普通类](https://duanluan.github.io/linux-notes/notes/software-installation/standard.html)
> 社交、办公与日常娱乐
* **社交**：QQ、微信（WeChat）、飞书、钉钉
* **办公**：WPS Office、腾讯会议
* **编辑器**：Sublime Text、Typora
* **音乐**：网易云音乐（+UnblockNeteaseMusic）、LX Music（洛雪）

#### 🎨 [图影音编辑类](https://duanluan.github.io/linux-notes/notes/software-installation/img-video-audio-edit.html)
* **图像处理**：GIMP + PhotoGIMP
* **视频剪辑**：Kdenlive

#### 👨‍💻 [开发类](https://duanluan.github.io/linux-notes/notes/software-installation/development.html)
> 全栈开发环境搭建
* **版本控制**：Git、act
* **容器化**：Docker + Compose + Portainer
* **前端/Node**：nvm + Node.js + pnpm + nrm
* **Java 生态**：JDK、Gradle、Maven
* **JetBrains 全家桶**：Toolbox、IntelliJ IDEA、WebStorm、PyCharm
* **移动开发**：Android Studio、FVM + Flutter、微信开发者工具
* **数据库/API**：Navicat、DBeaver、Another Redis Desktop Manager、Apifox、Apipost
* **终端/其他**：MobaXterm Pro、WindTerm、Offset Explorer、Python + pipx

#### 🎮 [游戏类](https://duanluan.github.io/linux-notes/notes/software-installation/game.html)
* **Minecraft**：HMCL 启动器

---

### 4. 维护与问题排查

* **[软件卸载](https://duanluan.github.io/linux-notes/notes/software-uninstallation.html)**：常用包管理命令（pacman/yay/paru）及 VMware、Firefox 等软件的彻底卸载。
* **[问题解决](https://duanluan.github.io/linux-notes/notes/questions.html)**：
    * 解决“一个或多个文件没有通过有效性检查”
    * 忘记 Root 密码
    * 托盘区蓝牙不显示/开启无效
    * X11 切换 Wayland 相关问题
* **未解决 Bug**：记录当前版本遗留的已知问题。
* **使用技巧**：日常使用中的一些快捷操作和小技巧。

---

## 📄 License

本项目笔记内容仅供参考，部分脚本或软件权利归原作者所有。
