# 图影音编辑类

## GIMP + PhotoGIMP

GIMP 是一款跨平台图像编辑器。

![](https://github.com/Diolinux/PhotoGIMP/raw/master/screenshots/photogimp_3_-_diolinux.png)

```shell
sudo pacman -S gimp
```

[Releases · Diolinux/PhotoGIMP](https://github.com/Diolinux/PhotoGIMP/releases) 下载`PhotoGIMP-linux.zip`，将压缩包中的`.conf`、`.local`覆盖到 home 下。

## Kdenlive

Kdenlive 是 KDE 非线性视频编辑器 (Non-Linear Video Editor) 的缩写。

[Kdenlive - 自由与开源的视频编辑器](https://kdenlive.org/zh-cn/)

![](https://kdenlive.org/k1_2979239690662228430_hu_948d68c2c89e727a.webp)

[下载 - Kdenlive](https://kdenlive.org/zh-cn/download/)

```shell
sudo pacman -S kdenlive
```

## DaVinci Resolve (Studio)

DaVinci Resolve 汇集剪辑、调色、视觉特效、动态图形和音频后期制作工具，以一套软件提供一站式解决方案。

![](https://images.blackmagicdesign.com/images/products/davinciresolve/overview/onesolution/carousel/cut.jpg)

[DaVinci Resolve | Blackmagic Design](https://www.blackmagicdesign.com/products/davinciresolve)

- DaVinci Resolve

  ```shell
  # 安装 DaVinci Resolve
  paru davinci-resolve
  ```

  根据显卡选择合适的 OpenCL 驱动包：
  ```shell
  :: 软件包 opencl-driver 有 9 个提供者：
  :: 软件库 extra:
      1) intel-compute-runtime  2) intel-oneapi-compiler-shared-runtime  3) opencl-mesa  4) opencl-nvidia  5) opencl-nvidia-390xx  6) opencl-nvidia-470xx  7) opencl-nvidia-570xx  8) opencl-nvidia-575xx  9) rocm-opencl-runtime
  ```
  | 编号 | 软件包名称 | 硬件/驱动类型 | 适用场景 |
  | :---: | :--- | :--- | :--- |
  | 1 | intel-compute-runtime | Intel（集成/独立显卡） | 适用于 Intel Gen 9+（Kaby Lake/Coffee Lake 及更新）核显和独立显卡的 OpenCL 实现。 |
  | 2 | intel-oneapi-compiler-shared-runtime | Intel（编译器依赖） | Intel oneAPI 编译器套件的共享运行时。通常用于开发/编译环境。 |
  | 3 | opencl-mesa | 开源驱动（Mesa） | 适用于使用 Mesa 开源驱动的硬件，包括 AMD、Intel 核显和使用 nouveau 的 NVIDIA 显卡。 |
  | 4 | opencl-nvidia | NVIDIA 闭源驱动（最新） | 适用于使用最新 NVIDIA 闭源驱动的显卡（如 RTX 40/30/20 系列）。 |
  | 5 | opencl-nvidia-390xx | NVIDIA 闭源驱动（旧版） | 适用于非常旧的 NVIDIA 显卡（如 Fermi 架构）使用 390xx 驱动时。 |
  | 6 | opencl-nvidia-470xx | NVIDIA 闭源驱动（旧版） | 适用于较旧的 NVIDIA 显卡（如 Kepler/Maxwell 架构）使用 470xx 驱动时。 |
  | 7 | opencl-nvidia-570xx | NVIDIA 闭源驱动（特定版本） | 适用于特定维护分支的 NVIDIA 显卡所需的 OpenCL 运行时。 |
  | 8 | opencl-nvidia-575xx | NVIDIA 闭源驱动（特定版本） | 适用于特定维护分支的 NVIDIA 显卡所需的 OpenCL 运行时。 |
  | 9 | rocm-opencl-runtime | AMD（ROCm） | 适用于使用 AMD ROCm 平台的较新 AMD 显卡（如 RX 5000+ 系列）。 |

- DaVinci Resolve Studio

  ```shell
  # 安装 DaVinci Resolve Studio
  $ paru davinci-resolve-studio
  
  正在获取开发版信息……
  ==> 正在创建软件包：davinci-resolve-studio 20.2.3-1 (2025年11月24日 星期一 15时28分44秒)
  ==> 获取源代码...
    -> 正在下载 DaVinci_Resolve_Studio_20.2.3_Linux.zip...
  curl: (3) URL rejected: Bad file:// URL
  ==> 错误： 无法下载 file://DaVinci_Resolve_Studio_20.2.3_Linux.zip
      正在放弃...
  错误： 未能下载 'davinci-resolve-studio-20.2.3-1' 的源: 
  错误： 未能构建的软件包：davinci-resolve-studio-20.2.3-1
  
  # 从 https://www.blackmagicdesign.com/products/davinciresolve/studio 下载 DaVinci Resolve Studio 的 Linux 版本
  # 弹出填写信息窗口时，选择左下角“Download only”
  $ mv DaVinci_Resolve_Studio_20.2.3_Linux.zip ~/.cache/paru/clone/davinci-resolve-studio/
  $ cd ~/.cache/paru/clone/davinci-resolve-studio/
  $ makepkg -si
  ```

## Blender

Blender 是免费且开源的 3D 创作套件。它支持整个 3D 流程——建模、绑定、动画、模拟、渲染、合成和运动追踪，甚至视频编辑和游戏资源创建。高级用户利用 Blender 的 Python 脚本 API 来自定义应用程序并编写专用工具；这些工具通常会被包含在 Blender 的未来版本中。

![](https://docs.blender.org/manual/en/2.80/_images/interface_window-system_introduction_default-startup.png)

[Download — Blender](https://www.blender.org/download/)

```shell
sudo pacman -S blender
```
