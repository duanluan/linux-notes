# Image, Video, and Audio Editing

## GIMP + PhotoGIMP

GIMP is a cross-platform image editor.

![](https://github.com/Diolinux/PhotoGIMP/raw/master/screenshots/photogimp_3_-_diolinux.png)

```shell
sudo pacman -S gimp
```

Download `PhotoGIMP-linux.zip` from [Releases · Diolinux/PhotoGIMP](https://github.com/Diolinux/PhotoGIMP/releases), then overwrite the `.conf` and `.local` directories in your home directory with the ones from the archive.

## Krita

Krita aims to provide first-class painting tools with no barriers, for anyone and for any purpose. The GNU GPL free software license ensures that Krita remains free, open source, and available at no cost.

![](https://krita.org/images/pages/application-screenshot.webp)

[Download | Krita](https://krita.org/zh-cn/download/)

```shell
sudo pacman -S krita
```

## Kdenlive

Kdenlive stands for KDE Non-Linear Video Editor.

[Kdenlive - Free and Open Source Video Editor](https://kdenlive.org/zh-cn/)

![](https://kdenlive.org/k1_2979239690662228430_hu_948d68c2c89e727a.webp)

[Download - Kdenlive](https://kdenlive.org/zh-cn/download/)

```shell
sudo pacman -S kdenlive
```

## DaVinci Resolve (Studio)

DaVinci Resolve combines editing, color grading, visual effects, motion graphics, and audio post-production in a single application.

![](https://images.blackmagicdesign.com/images/products/davinciresolve/overview/onesolution/carousel/cut.jpg)

[DaVinci Resolve | Blackmagic Design](https://www.blackmagicdesign.com/products/davinciresolve)

- DaVinci Resolve

  ```shell
  # install DaVinci Resolve
  paru -S davinci-resolve
  ```

  Choose the correct OpenCL driver package for your GPU:

  ```shell
  :: There are 9 providers available for opencl-driver:
  :: Repository extra:
      1) intel-compute-runtime  2) intel-oneapi-compiler-shared-runtime  3) opencl-mesa  4) opencl-nvidia  5) opencl-nvidia-390xx  6) opencl-nvidia-470xx  7) opencl-nvidia-570xx  8) opencl-nvidia-575xx  9) rocm-opencl-runtime
  ```

  | No. | Package | Hardware / Driver Type | Recommended Use |
  | :---: | :--- | :--- | :--- |
  | 1 | intel-compute-runtime | Intel (integrated / discrete) | OpenCL implementation for Intel Gen 9+ GPUs, including newer integrated and discrete graphics. |
  | 2 | intel-oneapi-compiler-shared-runtime | Intel (compiler dependency) | Shared runtime for the Intel oneAPI compiler suite, typically needed in build or development environments. |
  | 3 | opencl-mesa | Open-source Mesa drivers | Suitable for hardware using Mesa, including AMD GPUs, Intel iGPUs, and NVIDIA cards running nouveau. |
  | 4 | opencl-nvidia | NVIDIA proprietary driver (latest) | Suitable for GPUs using the latest NVIDIA proprietary driver branch, such as RTX 40, 30, and 20 series. |
  | 5 | opencl-nvidia-390xx | NVIDIA proprietary driver (legacy) | For very old NVIDIA GPUs such as Fermi when running the 390xx branch. |
  | 6 | opencl-nvidia-470xx | NVIDIA proprietary driver (legacy) | For older NVIDIA GPUs such as Kepler or Maxwell when using the 470xx branch. |
  | 7 | opencl-nvidia-570xx | NVIDIA proprietary driver (specific branch) | OpenCL runtime for GPUs that require this maintained NVIDIA branch. |
  | 8 | opencl-nvidia-575xx | NVIDIA proprietary driver (specific branch) | OpenCL runtime for GPUs that require this maintained NVIDIA branch. |
  | 9 | rocm-opencl-runtime | AMD (ROCm) | Recommended for newer AMD GPUs on the ROCm platform, such as RX 5000 series and later. |

- DaVinci Resolve Studio

  ```shell
  # install DaVinci Resolve Studio
  $ paru -S davinci-resolve-studio
  
  Fetching devel info...
  ==> Making package: davinci-resolve-studio 20.2.3-1 (Mon Nov 24 15:28:44 2025)
  ==> Retrieving sources...
    -> Downloading DaVinci_Resolve_Studio_20.2.3_Linux.zip...
  curl: (3) URL rejected: Bad file:// URL
  ==> ERROR: Failure while downloading file://DaVinci_Resolve_Studio_20.2.3_Linux.zip
      Aborting...
  error: failed to download sources for 'davinci-resolve-studio-20.2.3-1'
  error: packages failed to build: davinci-resolve-studio-20.2.3-1
  
  # download the Linux edition of DaVinci Resolve Studio from:
  # https://www.blackmagicdesign.com/products/davinciresolve/studio
  # when the form appears, choose "Download only" in the lower-left corner
  $ mv DaVinci_Resolve_Studio_20.2.3_Linux.zip ~/.cache/paru/clone/davinci-resolve-studio/
  $ cd ~/.cache/paru/clone/davinci-resolve-studio/
  $ makepkg -si
  ```

## Blender

Blender is a free and open-source 3D creation suite. It supports the full 3D pipeline, including modeling, rigging, animation, simulation, rendering, compositing, motion tracking, video editing, and even game asset creation. Advanced users can customize Blender and build their own tools through its Python API.

![](https://docs.blender.org/manual/en/2.80/_images/interface_window-system_introduction_default-startup.png)

[Download — Blender](https://www.blender.org/download/)

```shell
sudo pacman -S blender
```

## Audacity

Audacity is an easy-to-use multi-track audio editor and recorder for Windows, macOS, GNU/Linux, and other operating systems. It is free and open-source software.

![](https://www.audacityteam.org/_astro/HeroBannerImage.BT1jp_L7_AJsjM.webp)

[Audacity ® | Downloads](https://www.audacityteam.org/download/)

```shell
sudo pacman -S audacity
```

## HandBrake

HandBrake is an open-source tool built by volunteers for converting video from nearly any format to a range of modern, widely supported codecs.

![](https://handbrake.fr/img/slides/slide1_lin.jpg)

[HandBrake: Downloads](https://handbrake.fr/downloads.php)

```shell
sudo pacman -S handbrake
```

## Figma Linux

Figma is a browser-based interface design tool that makes collaborative software design easier for teams.

![](https://raw.githubusercontent.com/ChugunovRoman/figma-linux/master/images/screenshot1.jpg)

[Releases · Figma-Linux/figma-linux](https://github.com/Figma-Linux/figma-linux/releases)

```shell
paru -S figma-linux-bin
```

## Aseprite

Aseprite is a pixel-art and sprite animation tool. It includes layers, frames, tags, onion skinning, palettes, custom brushes, blending modes, and more.

![](https://www.aseprite.org/assets/images/layers.gif)
![](https://www.aseprite.org/assets/images/control-alpha.gif)
![](https://www.aseprite.org/assets/images/color-wheel.gif)
![](https://www.aseprite.org/assets/images/shading-mode.gif)
![](https://www.aseprite.org/assets/images/pixel-perfect.gif)
![](https://www.aseprite.org/assets/images/rotsprite.gif)
![](https://www.aseprite.org/assets/images/tiled-mode.gif)
![](https://www.aseprite.org/assets/images/custom-brush.gif)
![](https://www.aseprite.org/assets/images/blend-modes.gif)

[Aseprite - Trial](https://www.aseprite.org/trial/)

```shell
paru -S aseprite
```
