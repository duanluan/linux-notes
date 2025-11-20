# 开发类

## Git

创建 SSH Key：

参考 [Generating a new SSH key and adding it to the ssh-agent - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)。

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
```

设置 Git 用户信息，否则 clone 时可能会报错`GnuTLS recv error (-110)`。

```shell
git config --global user.name "your_name"
git config --global user.email "your_email@example.com"
```

其他一些忽略：

```shell
# 忽略换行分隔符差异
git config --global core.autocrlf input
# 忽略文件权限修改
git config --global core.fileMode false
```

## act

本地运行 GitHub Actions。

[Releases · nektos/act](https://github.com/nektos/act/releases) 下载压缩包。

```shell
$ tar zxvf act_Linux_x86_64.tar.gz
$ sudo mkdir /opt/act
$ sudo mv act /opt/act/

# 可执行文件链接到系统路径
$ sudo ln -s /opt/act/act /usr/local/bin/act

# 用本项目做测试
# 查看任务
$ act --list
INFO[0000] Using docker host 'unix:///var/run/docker.sock', and daemon socket 'unix:///var/run/docker.sock' 
Stage  Job ID           Job name         Workflow name  Workflow file    Events
0      deploy-gh-pages  deploy-gh-pages  docs           deploy-docs.yml  pus

# 测试
$ sudo act -j deploy-gh-pages
```

## Docker + Docker Componse + Portainer

```shell
# 安装 Docker + Docker Componse
sudo pacman -S docker docker-compose
# 启动 Docker 服务
sudo systemctl start docker
# 开机启动 Docker 服务
sudo systemctl enable docker
```

[Install Portainer CE | Portainer Documentation](https://docs.portainer.io/start/install-ce/server/docker/linux)

镜像加速请看：[Docker 使用笔记问题答疑及 WSL2 相关 - duanluan 的博客](https://blog.zhjh.top/?p=io0ETi1lKgEyKR0OcDZgS)

```shell
# 创建 Portainer 存储数据库的卷
sudo docker volume create portainer_data
# 启动 Portainer
proxychains sudo docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

打开 [https://localhost:9443/](https://localhost:9443/) 初始化管理员账号。

## nvm + Node.js + pnpm + nrm

- [脚本安装 nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)
- [Node.js — Download Node.js®](https://nodejs.org/zh-cn/download)

```shell
# 代理下载安装脚本
proxychains wget https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh
# 替换安装脚本中 git clone 为 proxychains git clone（可选）
sed -i 's/command git clone/command proxychains git clone/g' install.sh
# 执行脚本
bash install.sh
# 代替重启 shell
\. "$HOME/.nvm/nvm.sh"
# 下载并安装 Node.js
nvm install 24
# 安装 pnpm 方法一
corepack enable pnpm
# 安装 pnpm 方法二
npm install -g pnpm
# 自动安装配置 pnpm
pnpm setup
source ~/.zshrc
# 安装 nrm
pnpm add -g nrm
# 查看所有镜像源
nrm ls
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
  huawei ------- https://repo.huaweicloud.com/repository/npm/
# 使用镜像源
nrm use xxx
```

## JDK

[Java 8, 11, 17, 21, 23 Download for Linux, Windows and macOS](https://www.azul.com/downloads/?os=debian&architecture=x86-64-bit&package=jdk#zulu)

```shell
tar zxvf zulu21.42.19-ca-jdk21.0.7-linux_x64.tar.gz
sudo mkdir /opt/java
sudo mv zulu21.42.19-ca-jdk21.0.7-linux_x64 /opt/java/zulu21.42.19-ca-jdk21.0.6
# 末尾追加环境变量
$ nano ~/.zshrc
# jdk
export JAVA_HOME="/opt/java/zulu21.42.19-ca-jdk21.0.6"
export PATH=$JAVA_HOME/bin:$PATH

$ source ~/.zshrc
$ java -version
openjdk version "21.0.6" 2025-01-21 LTS
OpenJDK Runtime Environment Zulu21.40+17-CA (build 21.0.6+7-LTS)
OpenJDK 64-Bit Server VM Zulu21.40+17-CA (build 21.0.6+7-LTS, mixed mode, sharing)
```

## Gradle

[Gradle | Releases](https://gradle.org/releases/) 下载`binary-only`。

```shell
# 代理下载压缩包（可选）
proxychains axel -n 10 -o gradle-7.6.6-bin.zip 'https://services.gradle.org/distributions/gradle-7.6.6-bin.zip'

unzip gradle-7.6.6-bin.zip
sudo mkdir /opt/gradle
sudo mv gradle-7.6.6 /opt/gradle/
# 末尾追加环境变量
$ nano ~/.zshrc
# gradle
export GRADLE_HOME="/opt/gradle/gradle-7.6.6"
export PATH=$GRADLE_HOME/bin:$PATH

$ source ~/.zshrc
$ gradle -v

Welcome to Gradle 7.6.5!
……

```

## JetBrains Toolbox APP

[JetBrains Toolbox App：轻松管理您的工具](https://www.jetbrains.com/zh-cn/toolbox-app/)

```shell
# 安装 Toolbox
paru jetbrains-toolbox

# 创建 Shell 脚本位置
mkdir -p /opt/jetbrains/scripts

# 更改想要安装的目录所有者为当前用户
sudo chown -R $USER:$USER /opt/jetbrains

# 将想要设置的 Shell 脚本目录添加到环境变量
$ nano ~/.zshrc
# jetbrains toolbox scripts
export PATH="/opt/jetbrains/scripts:$PATH"

# 生效环境变量
$ source ~/.zshrc
```

在 Toolbox APP 右上角齿轮图表-`设置`-`工具`中修改`工具安装位置`为`/opt/jetbrains`，`Shell 脚本位置`为`/opt/jetbrains/scripts`并应用。

## JetBrains IntelliJ IDEA

适用于专业开发的卓越 IDE，适用于 Java 和 Kotlin。

![](https://www.jetbrains.com/idea/download/screenshots/download.png)

[下载 IntelliJ IDEA](https://www.jetbrains.com/zh-cn/idea/download/?section=linux)

[MIME 类型（MIME Type）完整对照表](https://mime.wcode.net/zh-hans/)

方式一：通过 JetBrains Toolbox 安装。

方式二：手动安装。
```shell
# 解压并移动到 /opt 下
tar zxvf ideaIU-2024.3.4.1.tar.gz
sudo mkdir /opt/jetbrains
sudo mv idea-IU-243.25659.59/ /opt/jetbrains/idea
# 创建快捷方式
$ sudo nano /usr/share/applications/idea.desktop

[Desktop Entry]
Name=IntelliJ IDEA Ultimate
Comment=The IDE for Professional Development in Java and Kotlin
GenericName=IDE
Exec=/opt/jetbrains/idea/bin/idea %F
Icon=/opt/jetbrains/idea/bin/idea.svg
Type=Application
# 禁用启动时进度通知
StartupNotify=false
# 与应用程序窗口关联的 WM_CLASS 属性
StartupWMClass=jetbrains-idea
Categories=TextEditor;Development;IDE;
MimeType=application/java;application/java-archive;application/java-byte-code;application/java-vm;
Keywords=idea;
```

快捷键调整：
`设置`-`按键映射`-`主菜单`-`导航`-`通过引用转到`-`选择位置…`在`KDE`按键方案中不是`Alt+F1`而是`Alt+Shift+1`，因为`Alt+F1`是`plasmashell`的快捷键。我们之前在系统配置中已经取消了`plasmashell`的这个快捷键，所以可以修改一下，或者直接将按键方案修改为`Windows`。

## Maven

此处用的是 IDEA 自带的。也可以自己下载：[Download Apache Maven – Maven](https://maven.apache.org/download.cgi)

```shell
# 末尾追加环境变量
$ nano ~/.zshrc
# maven
export MAVEN_HOME="/opt/jetbrains/idea/plugins/maven/lib/maven3/"
export PATH=$MAVEN_HOME/bin:$PATH

$ source ~/.zshrc
$ mvn -v
Apache Maven 3.9.9 (8e8579a9e76f7d015ee5ec7bfcdc97d260186937)
Maven home: /opt/jetbrains/idea/plugins/maven/lib/maven3
Java version: 21.0.6, vendor: Azul Systems, Inc., runtime: /opt/java/zulu21.42.19-ca-jdk21.0.6
Default locale: zh_CN, platform encoding: UTF-8
OS name: "linux", version: "6.12.9-amd64-desktop-rolling", arch: "amd64", family: "unix"
```

## JetBrains WebStorm

JavaScript 和 TypeScript IDE。

![](https://www.jetbrains.com/webstorm/inc/overview/junie-section/img/junie.png)

[下载 WebStorm](https://www.jetbrains.com/zh-cn/webstorm/download/#section=linux)

方式一：通过 JetBrains Toolbox 安装。

方式二：手动安装。
```shell
# 解压并移动到 /opt 下
tar zxvf WebStorm-2024.3.4.tar.gz
sudo mkdir /opt/jetbrains
sudo mv WebStorm-243.25659.40/ /opt/jetbrains/webstorm
# 创建快捷方式
$ sudo nano /usr/share/applications/webstorm.desktop

[Desktop Entry]
Name=WebStorm
Comment=The JavaScript and TypeScript IDE by JetBrains
GenericName=IDE
Exec=/opt/jetbrains/webstorm/bin/webstorm %F
Icon=/opt/jetbrains/webstorm/bin/webstorm.svg
Type=Application
# 禁用启动时进度通知
StartupNotify=false
# 与应用程序窗口关联的 WM_CLASS 属性
StartupWMClass=jetbrains-webstorm
Categories=TextEditor;Development;IDE;
MimeType=application/xhtml+xml;text/javascript;text/css;
Keywords=webstorm;
```

## JetBrains PyCharm

用于数据科学和 Web 开发的 Python IDE。

![](https://www.jetbrains.com/pycharm/download/img/download.png)

[下载 PyCharm](https://www.jetbrains.com/zh-cn/pycharm/download/?section=linux)

方式一：通过 JetBrains Toolbox 安装。

方式二：手动安装。
```shell
# 解压并移动到 /opt 下
tar zxvf pycharm-2025.1.2.tar.gz
sudo mkdir /opt/jetbrains
sudo mv pycharm-2025.1.2 /opt/jetbrains/pycharm
# 创建快捷方式
$ sudo nano /usr/share/applications/pycharm.desktop

[Desktop Entry]
Name=PyCharm
Comment=Pycharm is a Python IDE for professional developers by JetBrains.
GenericName=IDE
Exec=/opt/jetbrains/pycharm/bin/pycharm %F
Icon=/opt/jetbrains/pycharm/bin/pycharm.svg
Type=Application
# 禁用启动时进度通知
StartupNotify=false
# 与应用程序窗口关联的 WM_CLASS 属性
StartupWMClass=jetbrains-webstorm
Categories=TextEditor;Development;IDE;
MimeType=application/xhtml+xml;text/javascript;text/css;
Keywords=pycharm;
```

## Python + pipx + cnpip 切换最快 pip 镜像源 + uv

自带 Python，但当你想全局安装依赖时会报错：
```shell
$ pip install cnpip

error: externally-managed-environment

× This environment is externally managed
╰─> To install Python packages system-wide, try 'pacman -S
    python-xyz', where xyz is the package you are trying to
    install.
    
    If you wish to install a non-Arch-packaged Python package,
    create a virtual environment using 'python -m venv path/to/venv'.
    Then use path/to/venv/bin/python and path/to/venv/bin/pip.
    
    If you wish to install a non-Arch packaged Python application,
    it may be easiest to use 'pipx install xyz', which will manage a
    virtual environment for you. Make sure you have python-pipx
    installed via pacman.

note: If you believe this is a mistake, please contact your Python installation or OS distribution provider. You can override this, at the risk of breaking your Python installation or OS, by passing --break-system-packages.
hint: See PEP 668 for the detailed specification.
```
解决方案是使用它推荐的 pipx：
```shell
# pacman 安装 pipx
sudo pacman -S python-pipx
# pipx 安装 cnpip
pipx install cnpip
# cnpip 切换最快镜像源
cnpip set
# pipx 安装 uv
pipx install uv
```

## Android Studio

Android Studio 是开发 Android 应用的官方 IDE，包含构建 Android 应用所需的所有功能。

![](https://developer.android.google.cn/static/images/studio/studio-hero-image_1440.png)

[下载 Android Studio 和应用工具 - Android 开发者 | Android Developers](https://developer.android.google.cn/studio?hl=zh-cn)

方式一：通过 JetBrains Toolbox 安装。

方式二：手动安装。
```shell
# 解压并移动到 /opt 下
tar zxvf android-studio-2025.2.1.7-linux.tar.gz
sudo mv android-studio /opt/android-studio
# 创建快捷方式
$ sudo nano /usr/share/applications/android-studio.desktop

[Desktop Entry]
Name=Android Studio
Comment=Android Studio is the official IDE for Android development, and includes everything you need to build Android apps.
GenericName=IDE
Exec=/opt/android-studio/bin/studio %F
Icon=/opt/android-studio/bin/studio.png
Type=Application
# 禁用启动时进度通知
StartupNotify=false
# 与应用程序窗口关联的 WM_CLASS 属性
StartupWMClass=jetbrains-studio
Categories=TextEditor;Development;IDE;
MimeType=text/x-java;text/x-kotlin;text/x-groovy;application/xml;text/xml;application/vnd.android.package-archive;inode/directory;
Keywords=android;studio;
```

### 安装 IDEA 的中文插件

此处修改是最新版 IDEA 安装目录下的`plugins/localization-zh/lib/localization-zh.jar`，使用 [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/13710/versions) 下载的 [v242.152](https://plugins.jetbrains.com/plugin/download?rel=true&updateId=557305) 来修改也是差不多的。

```shell
# 查看 Android Studio 版本
$ cat /opt/android-studio/build.txt 
AI-252.25557.131.2521.14344949% 

# 复制 IDEA 安装目录下的中文插件到下载目录
sudo cp /opt/jetbrains/idea/plugins/localization-zh/lib/localization-zh.jar ~/Downloads/
cd ~/Downloads/
# 解压出 META-INF/plugin.xml
unzip localization-zh.jar META-INF/plugin.xml
```

编辑`META-INF/plugin.xml`：
- `<version>252.27397.103</version>`修改为`<version>AI-252.25557.131</version>`。
- `<idea-version since-build="252.27397.103" until-build="252.27397.103"/>`修改为`<idea-version since-build="AI-252.25557.131" until-build="252.*"/>`。

```shell
# 将修改后的 plugin.xml 更新回 jar 包
zip localization-zh.jar META-INF/plugin.xml
```

打开 Android Studio，`Settings`-`Plugins`-右上角齿轮图标-`Install Plugin from Disk...`，选择修改后的`localization-zh.jar`安装。`Settings`-`Appearance & Behavior`-`System Settings`-`Language and Region`中`Language`选择`Chinese (Simplified) 简体中文`。

## FVM + Flutter 换源 + Dart

```shell
# 代理安装 FVM
proxychains curl -fsSL https://fvm.app/install.sh | bash
source ~/.zshrc

# 代理安装 Flutter SDK 稳定版
proxychains fvm install stable

# 将 stable 设为全局默认的 Flutter 版本
$ fvm global stable 
Flutter SDK: Channel: Stable is now global

# 查看 FVM 缓存
$ fvm list
Cache directory:  /home/duanluan/fvm/versions
Directory Size: 758.62 MB

# 通过 FVM 检查当前 Flutter 版本
$ fvm flutter --version
Flutter 3.35.7 • channel stable • https://gh-proxy.com/https://github.com/flutter/flutter.git
Framework • revision adc9010625 (3 周前) • 2025-10-21 14:16:03 -0400
Engine • hash 6b24e1b529bc46df7ff397667502719a2a8b6b72 (revision 035316565a) (18 days ago) • 2025-10-21 14:28:01.000Z
Tools • Dart 3.9.2 • DevTools 2.48.0

# 通过 FVM 检查当前 Dart SDK 版本
$ fvm dart --version
Dart SDK version: 3.9.2 (stable) (Wed Aug 27 03:49:40 2025 -0700) on "linux_x64"
```

- Flutter SDK 路径：`/home/duanluan/fvm/versions/stable`
- Dart SDK 路径：`/home/duanluan/fvm/versions/stable/bin/cache/dart-sdk`

查看并解决环境问题：
```shell
# 查看环境问题
$ proxychains -q fvm flutter doctor -v

[!] Flutter (Channel stable, 3.35.7, on Manjaro Linux 6.12.48-1-MANJARO, locale zh_CN.UTF-8) [29ms]
    • Flutter version 3.35.7 on channel stable at /home/duanluan/fvm/versions/stable
    ! Upstream repository https://gh-proxy.com/https://github.com/flutter/flutter.git is not a standard remote.
      Set environment variable "FLUTTER_GIT_URL" to https://gh-proxy.com/https://github.com/flutter/flutter.git to dismiss this
      error.
    • Framework revision adc9010625 (3 周前), 2025-10-21 14:16:03 -0400
    • Engine revision 035316565a
    • Dart version 3.9.2
    • DevTools version 2.48.0
    • Feature flags: enable-web, enable-linux-desktop, enable-macos-desktop, enable-windows-desktop, enable-android,
      enable-ios, cli-animations, enable-lldb-debugging
    • If those were intentional, you can disregard the above warnings; however it is recommended to use "git" directly to
      perform update checks and upgrades.

[!] Android toolchain - develop for Android devices (Android SDK version 36.1.0) [193ms]
    • Android SDK at /home/duanluan/Android/Sdk
    • Emulator version 36.2.12.0 (build_id 14214601) (CL:N/A)
    ✗ cmdline-tools component is missing.
      Try installing or updating Android Studio.
      Alternatively, download the tools from https://developer.android.com/studio#command-line-tools-only and make sure to set
      the ANDROID_HOME environment variable.
      See https://developer.android.com/studio/command-line for more details.
    ✗ Android license status unknown.
      Run `flutter doctor --android-licenses` to accept the SDK licenses.
      See https://flutter.dev/to/linux-android-setup for more details.

[✗] Chrome - develop for the web (Cannot find Chrome executable at google-chrome) [9ms]
    ! Cannot find Chrome. Try setting CHROME_EXECUTABLE to a Chrome executable.

[✓] Linux toolchain - develop for Linux desktop [257ms]
    • clang version 20.1.8
    • cmake version 4.1.1
    • ninja version 1.12.1
    • pkg-config version 2.5.1
    • OpenGL core renderer: AMD Radeon 780M Graphics (radeonsi, phoenix, LLVM 20.1.8, DRM 3.61, 6.12.48-1-MANJARO) (X11)
    • OpenGL core version: 4.6 (Core Profile) Mesa 25.2.3-arch1.2 (X11)
    • OpenGL core shading language version: 4.60 (X11)
    • OpenGL ES renderer: AMD Radeon 780M Graphics (radeonsi, phoenix, LLVM 20.1.8, DRM 3.61, 6.12.48-1-MANJARO) (X11)
    • OpenGL ES version: OpenGL ES 3.2 Mesa 25.2.3-arch1.2 (X11)
    • OpenGL ES shading language version: OpenGL ES GLSL ES 3.20 (X11)
    • GL_EXT_framebuffer_blit: yes (X11)
    • GL_EXT_texture_format_BGRA8888: yes (X11)

[✓] Android Studio (version 2025.2.1) [8ms]
    • Android Studio at /opt/android-studio
    • Flutter plugin can be installed from:
      🔨 https://plugins.jetbrains.com/plugin/9212-flutter
    • Dart plugin can be installed from:
      🔨 https://plugins.jetbrains.com/plugin/6351-dart
    • Java version OpenJDK Runtime Environment (build 21.0.8+-14196175-b1038.72)

[✓] IntelliJ IDEA Ultimate Edition (version 2025.2) [7ms]
    • IntelliJ at /opt/jetbrains/idea
    • Flutter plugin can be installed from:
      🔨 https://plugins.jetbrains.com/plugin/9212-flutter
    • Dart plugin can be installed from:
      🔨 https://plugins.jetbrains.com/plugin/6351-dart

[✓] Connected device (1 available) [56ms]
    • Linux (desktop) • linux • linux-x64 • Manjaro Linux 6.12.48-1-MANJARO

[✓] Network resources [1,696ms]
    • All expected network resources are available.

! Doctor found issues in 3 categories.
```

- Flutter SDK 换源：

  ```shell
  cd /home/duanluan/fvm/versions/stable
  git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/flutter-sdk.git
  
  # 末尾追加环境变量
  $ nano ~/.zshrc
  
  # flutter
  export PUB_HOSTED_URL="https://mirrors.tuna.tsinghua.edu.cn/dart-pub"
  export FLUTTER_STORAGE_BASE_URL="https://mirrors.tuna.tsinghua.edu.cn/flutter"
  export FLUTTER_GIT_URL="https://mirrors.tuna.tsinghua.edu.cn/git/flutter-sdk.git"
  
  # 生效环境变量
  $ source ~/.zshrc
  ```

- 解决`cmdline-tools component is missing`：
  
  在 Android Studio `Settings`-`Language & Frameworks`-`Android SDK`-`SDK Tools`中勾选`Android SDK Command-line Tools (latest)`安装。
  ![](../assets/20251109203812.png)
  再运行`fvm flutter doctor --android-licenses`，全部选`y`。

- 解决`Cannot find Chrome executable at google-chrome`：

  先根据之前的笔记安装 Google Chrome，然后设置环境变量：
  ```shell
  # 末尾追加环境变量
  $ nano ~/.zshrc
  
  # chrome
  export CHROME_EXECUTABLE="/usr/bin/google-chrome-stable"
  
  # 生效环境变量
  $ source ~/.zshrc
  ```

## 微信开发者工具

[msojocs/wechat-web-devtools-linux: 适用于微信小程序的微信开发者工具 Linux 移植版](https://github.com/msojocs/wechat-web-devtools-linux)

```shell
$ cd /opt
$ sudo git clone --recurse-submodules https://github.com/msojocs/wechat-web-devtools-linux.git
$ cd wechat-web-devtools-linux
$ sudo tools/build-with-docker.sh

Unable to find image 'jiyecafe/wechat-devtools-build:v1.0.4' locally
docker: Error response from daemon: Get "https://registry-1.docker.io/v2/": context deadline exceeded

# 方式一：代理运行
$ sudo proxychains tools/build-with-docker.sh
# 方式二：替换镜像源
$ sudo sed -i 's|jiyecafe/wechat-devtools-build:v1.0.4|swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/jiyecafe/wechat-devtools-build:v1.0.4|g' tools/build-with-docker.sh

# 构建开发者工具
$ sudo tools/build-with-docker.sh
# 创建快捷方式
$ sudo nano /usr/share/applications/wechat-web-devtools.desktop

[Desktop Entry]
Name=WeChat Dev Tools
Name[zh_CN]=微信开发者工具
Comment=The development tools for wechat projects
Comment[zh_CN]=提供微信开发相关项目的开发IDE支持
Categories=Development;WebDevelopment;IDE;
Exec=/opt/wechat-web-devtools-linux/bin/wechat-devtools
Icon=/opt/wechat-web-devtools-linux/res/icons/wechat-devtools.svg
Type=Application
Terminal=false
StartupWMClass=wechat-devtools
Actions=
MimeType=x-scheme-handler/wechatide
```

## Apifox

API 设计、开发、测试一体化协作平台

![](https://cdn.apifox.com/www/assets/image/index/main-interface.webp)

[下载 Apifox - Apifox 帮助文档](https://docs.apifox.com/download)

```shell
paru apifox
```

## Apipost

API 开发管理工具

![](https://img.cdn.apipost.cn/company_logo/banner_content.svg)

[下载中心-Apipost-中文版接口调试与文档管理工具](https://www.apipost.cn/download.html)

```shell
paru apipost-bin
```

## Navicat Premium (Lite)

Navicat Premium 是强大的一体化数据库开发解决方案，可从单一应用程序无缝连接多个数据库，包括 MySQL、PostgreSQL、MongoDB、MariaDB、SQL Server、Oracle、SQLite、Redis 和 Snowflake。同时，它与 GaussDB 、OceanBase、TiDB、PolarDB 数据库及阿里云、腾讯云和华为云等主流云数据库兼容。

![](https://www.navicat.com.cn/images/product_screenshot/Screenshot_Navicat_17_Premium_Linux_Main_screen_CN.png)

- AUR

  ```shell
  paru navicat-premium-lite-zh-cn
  ```

- Wine

  [Navicat | 下载 Navicat Premium Windows](https://www.navicat.com.cn/download/navicat-premium#windows)

  ```shell
  # 指定容器
  export WINEPREFIX=~/.wine-navicat
  # 初始化容器
  winecfg
  # 安装中文字体
  proxychains -q winetricks cjkfonts
  # 安装 Navicat Premium
  wine navicat17_premium_cs_x64.exe
  ```

- `ORA-12737:Instant Client Light:unsupported server character set ZHS16GBK`：
 
  [Oracle Instant Client Downloads | Oracle 中国](https://www.oracle.com/cn/database/technologies/instant-client/downloads.html) 下载 [Instant Client for Microsoft Windows (x64)](https://www.oracle.com/cn/database/technologies/instant-client/winx64-64-downloads.html) 中的`Basic Package`版本。
  ```shell
  unzip instantclient-basic-windows.x64-23.9.0.25.07.zip
  mv instantclient_23_9 /home/njcm/.wine-navicat/drive_c/Program\ Files/PremiumSoft/Navicat\ Premium\ 17
  ```
  Navicat 菜单栏`工具`-`选项`-`环境`-`OCI 环境`-`OCI library (oci.dll) *`改成`C:\Program Files\PremiumSoft\Navicat Premium 17\instantclient_23_9\oci.dll`。

  同样的 Linux 版 Navicat 就下载`Instant Client for Linux`。

## DBeaver Enterprise Edition

功能齐全的数据库管理工具。

![](https://dbeaver.com/wp-content/uploads/2023/06/Screen-Shot-2022-08-11-at-11.18.51-AM-1024x659-1.png)

[Download DBeaver Ultimate](https://dbeaver.com/download/ultimate/)

```shell
# 方式一：直接安装（如果 dbeaver-agent 支持的版本和 dbeaver-ee 一致）
paru dbeaver-ee

# 方式二：安装指定版本（主要看 dbeaver-agent 能支持什么版本）
git clone https://aur.archlinux.org/dbeaver-ee.git
cd dbeaver-ee
# 切换到指定版本，以 25.0 举例
git checkout 18d7fe23f27e70c2db8ec413d3fdafa3ca355a34
makepkg -si
```

DBeaver Agent：

1. 安装 DBeaver Agent：

    [Releases · wgzhao/dbeaver-agent](https://github.com/wgzhao/dbeaver-agent/releases) 下载压缩包。
    ```shell
    sudo mv dbeaver-agent.jar /opt/dbeaver-ee/dbeaver-agent.jar
    
    # v25.0
    # unzip dbeaver-agent-25.0-SNAPSHOT-jar-with-dependencies.jar.zip
    # sudo mv dbeaver-agent-25.0-SNAPSHOT-jar-with-dependencies.jar /opt/dbeaver-ee/dbeaver-agent.jar
    ```

2. 配置 DBeaver：
    ```shell
    # 在文件末尾添加內容，保持在 -vmargs 后
    $ sudo nano /opt/dbeaver-ee/dbeaver.ini
    -javaagent:/opt/dbeaver-ee/dbeaver-agent.jar
    -Xbootclasspath/a:/opt/dbeaver-ee/dbeaver-agent.jar
    ```

3. 处理 JRE 依赖：
  
    如果已经安装过 JDK/JRE 21+，可以省略此步。
    
    [Azul Zulu](https://www.azul.com/downloads/#downloads-table-zulu) 下载 JRE 21。
    ```shell
    tar zxvf zulu21.42.19-ca-jre21.0.7-linux_x64.tar.gz
    # 可能没有
    sudo mv /opt/dbeaver-ee/jre /opt/dbeaver-ee/jre.bak
    sudo mv zulu21.42.19-ca-jre21.0.7-linux_x64 /opt/dbeaver-ee/jre
    ```

4. 屏蔽 stats.dbeaver.com 域名：
    ```shell
    # 将以下内容追加到 /etc/hosts
    $ sudo nano /etc/hosts
    127.0.0.1 stats.dbeaver.com
    ```

5. 生成许可证密钥：
    ```shell
    $ /opt/dbeaver-ee/jre/bin/java -cp /opt/dbeaver-ee/plugins/\*:/opt/dbeaver-ee/dbeaver-agent.jar com.dbeaver.agent.License -t ee
    --- dbeaver-ee(v25) LICENSE ---
    ……
    --- 请复制上一行 ---
    ```

6. 命令行启动 DBeaver 并导入许可证：
    ```shell
    # 命令行启动方便查看日志
    /opt/dbeaver-ee/dbeaver
    ```
    点击“Import License”，粘贴上一步生成的许可证密钥并确定。

鼓励大家支持正版软件，购买正版授权不仅能获得更好的技术支持，还能为软件开发者提供持续的创新动力。

## Another Redis Desktop Manager

更快、更好、更稳定的Redis桌面(GUI)管理客户端，兼容Windows、Mac、Linux，性能出众，轻松加载海量键值

![](https://cdn.jsdelivr.net/gh/qishibo/img/ardm/202411081318491.png)

[下载 - Another Redis Desktop Manager](https://goanother.com/cn/#download)

```shell
paru another-redis-desktop-manager
```

## Offset Explorer

Offset Explorer（前身为 Kafka Tool）是一款用于管理和使用 Apache Kafka®集群的 GUI 应用程序。它提供了一个直观的用户界面，使用户能够快速查看 Kafka 集群中的对象以及集群主题中存储的消息。

[Download - Offset Explorer](https://www.kafkatool.com/download.html)

```shell
# 安装
$ proxychains -q paru offsetexplorer
# 解决未缩放，追加配置
$ sudo nano /opt/offsetexplorer/offsetexplorer.vmoptions

-Dsun.java2d.uiScale=2.0
```

## MobaXterm Pro

星火应用商店下载并安装 [MobaXterm Pro（汉化版）](spk://store/development/net.mobatek.mobaxterm-pro-chs)。

## WindTerm

一个更快更好的 DevOps SSH/Telnet/Serial/Shell/Sftp 客户端。

![](https://github.com/kingToolbox/WindTerm/raw/master/images/screenshots/WindTerm.png)

[Releases · kingToolbox/WindTerm](https://github.com/kingToolbox/WindTerm/releases)

```shell
paru windterm-bin
```

解决文件管理器打开文件报错无法创建临时文件：
```shell
sudo mkdir -p /usr/lib/windterm/temp
sudo chmod 1777 /usr/lib/windterm/temp
```
