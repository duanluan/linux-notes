# 开发类

## 应用商店安装

### Another Redis Desktop Manager

## Spark Store 星火应用商店安装

### MobaXterm Pro

## Git

```shell
sudo apt install git
```

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

## nvm + Node.js + pnpm + nrm

- [脚本安装 nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)
- [Node.js — Download Node.js®](https://nodejs.org/zh-cn/download)

```shell
# 代理下载安装脚本
proxychains4 wget https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh
# 替换安装脚本中 git clone 为 proxychains4 git clone
sed -i 's/command git clone/command proxychains4 git clone/g' install.sh
# 执行脚本
bash install.sh
# 生效新环境变量
source ~/.bashrc
# 安装 Node.js
nvm install 18
# 安装 pnpm 方法一
corepack enable pnpm
# 安装 pnpm 方法二
npm install -g pnpm
# 自动安装配置 pnpm
pnpm setup
source ~/.bashrc
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
nrm use cnpm
```

## JDK

[Java 8, 11, 17, 21, 23 Download for Linux, Windows and macOS](https://www.azul.com/downloads/?os=debian&architecture=x86-64-bit&package=jdk#zulu)

```shell
tar zxvf zulu21.40.17-ca-jdk21.0.6-linux_x64.tar.gz
sudo mkdir /opt/java
sudo mv zulu21.40.17-ca-jdk21.0.6-linux_x64 /opt/java/zulu21.40.17-ca-jdk21.0.6
# 末尾追加环境变量
$ vim ~/.bashrc
# jdk
export JAVA_HOME="/opt/java/zulu21.40.17-ca-jdk21.0.6"
export PATH=$JAVA_HOME/bin:$PATH

$ source ~/.bashrc
$ java -version
openjdk version "21.0.6" 2025-01-21 LTS
OpenJDK Runtime Environment Zulu21.40+17-CA (build 21.0.6+7-LTS)
OpenJDK 64-Bit Server VM Zulu21.40+17-CA (build 21.0.6+7-LTS, mixed mode, sharing)

```

## Gradle

[Gradle | Releases](https://gradle.org/releases/) 下载`binary-only`。

```shell
unzip gradle-7.6.4-bin.zip
sudo mkdir /opt/gradle
sudo mv gradle-7.6.4 /opt/gradle/
# 末尾追加环境变量
$ vim ~/.bashrc
# gradle
export GRADLE_HOME="/opt/gradle/gradle-7.6.4"
export PATH=$GRADLE_HOME/bin:$PATH

$ source ~/.bashrc
$ gradle -v

Welcome to Gradle 7.6.4!
……

```

## JetBrains IntelliJ IDEA

[下载 IntelliJ IDEA](https://www.jetbrains.com/zh-cn/idea/download/?section=linux)

[MIME 类型（MIME Type）完整对照表](https://mime.wcode.net/zh-hans/)

```shell
# 解压并移动到 /opt 下
tar zxvf ideaIU-2024.3.4.1.tar.gz
sudo mkdir /opt/jetbrains
sudo mv idea-IU-243.25659.59/ /opt/jetbrains/idea
# 创建快捷方式
sudo vim /usr/share/applications/idea.desktop

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

## Maven

此处用的是 IDEA 自带的。也可以自己下载：[Download Apache Maven – Maven](https://maven.apache.org/download.cgi)

```shell
# 末尾追加环境变量
$ vim ~/.bashrc
# maven
export MAVEN_HOME="/opt/jetbrains/idea/plugins/maven/lib/maven3/"
export PATH=$MAVEN_HOME/bin:$PATH

$ source ~/.bashrc
$ mvn -v
Apache Maven 3.9.9 (8e8579a9e76f7d015ee5ec7bfcdc97d260186937)
Maven home: /opt/jetbrains/idea/plugins/maven/lib/maven3
Java version: 21.0.6, vendor: Azul Systems, Inc., runtime: /opt/java/zulu21.40.17-ca-jdk21.0.6
Default locale: zh_CN, platform encoding: UTF-8
OS name: "linux", version: "6.12.9-amd64-desktop-rolling", arch: "amd64", family: "unix"
```

## JetBrains WebStorm

[下载 WebStorm](https://www.jetbrains.com/zh-cn/webstorm/download/#section=linux)

```shell
# 解压并移动到 /opt 下
tar zxvf WebStorm-2024.3.4.tar.gz
sudo mkdir /opt/jetbrains
sudo mv WebStorm-243.25659.40/ /opt/jetbrains/webstorm
# 创建快捷方式
$ sudo vim /usr/share/applications/webstorm.desktop

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

[下载 PyCharm](https://www.jetbrains.com/zh-cn/pycharm/download/?section=linux)

```shell
# 解压并移动到 /opt 下
tar zxvf pycharm-2025.1.2.tar.gz
sudo mkdir /opt/jetbrains
sudo mv pycharm-2025.1.2 /opt/jetbrains/pycharm
# 创建快捷方式
$ sudo vim /usr/share/applications/pycharm.desktop

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

## Apifox

[Apifox](https://apifox.com/) 下载 DEB 文件并安装。

## Navicat Premium

此处安装的是 Windows 版。

[Navicat | 下载 Navicat Premium Windows](https://www.navicat.com.cn/download/navicat-premium#windows)

Wine 运行器菜单栏`程序`-`安装更多Wine`：

![](../assets/20250309230531.png)

菜单栏`Wine`-`安装常见字体`，左下角`WINE配置`-`字体商店`安装 1~5 的字体。

左下角`WINE配置`-`配置容器`，调整`应用程序`-`Windows 版本`为`Windows 11`，`显示`-`屏幕分辨率`调大以适应本机分辨率。

![](../assets/20250309231350.png =300x)
![](../assets/20250309231516.png =300x)

选择下载的安装包，点击`运行程序`安装，安装前会提示先安装 mono。

![](../assets/20250309231054.png)

安装后会在启动器创建快捷方式但打不开。

修改 Wine 运行器中执行程序为`/home/duanluan/.wine/drive_c/Program Files/PremiumSoft/Navicat Premium 17/navicat.exe`，名称随便，创建快捷方式到桌面，参考这个内容修改启动器中现有快捷方式的内容。

![](../assets/20250310001055.png)

```shell
$ vim ~/.local/share/applications/wine/Programs/PremiumSoft/Navicat\ Premium\ 17.desktop

[Desktop Entry]
Name=Navicat Premium 17
Exec=env WINEPREFIX='/home/duanluan/.wine' WINEDEBUG=FIXME,ERR,WARN,TRACE,Message  /home/duanluan/.deepwinerunner/wine/wine-staging-wow64-10.2-debian10-amd64/bin/wine '/home/duanluan/.wine/drive_c/Program Files/PremiumSoft/Navicat Premium 17/navicat.exe'  
Icon=D66E_navicat.0
Type=Application
StartupNotify=true
```

## DBeaver Ultimate

[Download DBeaver Ultimate](https://dbeaver.com/download/ultimate/) 下载 DEB 文件并安装。

1. 安装 DBeaver Agent：

   [Releases · wgzhao/dbeaver-agent](https://github.com/wgzhao/dbeaver-agent/releases) 下载压缩包。
    ```shell
    unzip dbeaver-agent-25.0-SNAPSHOT-jar-with-dependencies.jar.zip
    sudo mv dbeaver-agent-25.0-SNAPSHOT-jar-with-dependencies.jar /usr/share/dbeaver-ue/dbeaver-agent.jar
    ```

2. 配置 DBeaver：
    ```shell
    # 在文件末尾添加內容，保持在 -vmargs 后
    $ sudo vim /usr/share/dbeaver-ue/dbeaver.ini
    -javaagent:/usr/share/dbeaver-ue/dbeaver-agent.jar
    -Xbootclasspath/a:/usr/share/dbeaver-ue/dbeaver-agent.jar
    ```

3. 处理 JRE 依赖：

   [Azul Zulu](https://www.azul.com/downloads/#downloads-table-zulu) 下载 JRE 21。
    ```shell
    unzip zulu21.40.17-ca-jre21.0.6-linux_x64.zip
    sudo mv /usr/share/dbeaver-ue/jre /usr/share/dbeaver-ue/jre.bak
    sudo mv zulu21.40.17-ca-jre21.0.6-linux_x64 /usr/share/dbeaver-ue/jre
    ```

4. 屏蔽 stats.dbeaver.com 域名：
    ```shell
    # 将以下内容追加到 /etc/hosts
    $ sudo vim /etc/hosts
    127.0.0.1 stats.dbeaver.com
    ```

5. 生成许可证密钥：
    ```shell
    $ /usr/share/dbeaver-ue/jre/bin/java -cp /usr/share/dbeaver-ue/plugins/\*:/usr/share/dbeaver-ue/dbeaver-agent.jar com.dbeaver.agent.License -t ue
    --- dbeaver-ue(v25) LICENSE ---
    ……
    --- 请复制上一行 ---
    ```

6. 命令行启动 DBeaver：
    ```shell
    # 命令行启动方便查看日志
    /usr/share/dbeaver-ue/dbeaver
    ```
   点击“Import License”，粘贴上一步生成的许可证密钥并确定。

## Docker + Docker Componse + Portainer

```shell
# 安装 Docker
sudo apt install docker.io
# 安装 Docker Componse
sudo apt install docker-compose
```

[Install Portainer CE | Portainer Documentation](https://docs.portainer.io/start/install-ce/server/docker/linux)

镜像加速请看：[Docker 使用笔记问题答疑及 WSL2 相关 - duanluan 的博客](https://blog.zhjh.top/?p=io0ETi1lKgEyKR0OcDZgS)

```shell
# 创建 Portainer 存储数据库的卷
sudo docker volume create portainer_data
# 启动 Portainer
sudo docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

打开 [https://localhost:9443/](https://localhost:9443/) 初始化管理员账号。
