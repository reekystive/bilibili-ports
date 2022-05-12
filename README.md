# bilibili-ports

哔哩哔哩官方客户端移植，支持 macOS，Linux，Windows，三平台均支持 x64 和 arm64。

该移植基于哔哩哔哩官方 Windows 客户端。

图标来自于 [macOSicons](https://macosicons.com/)，作者 [@Mashiro](https://macosicons.com/#/u/Mashiro)

## 截图

### macOS

<img width="1290" alt="Screen Shot" src="https://user-images.githubusercontent.com/26853900/168146040-0777a5ae-b5c2-454f-9a8f-0e48003e3feb.png">

### Linux

<img width="1171" alt="Screen Shot" src="https://user-images.githubusercontent.com/26853900/168148702-e489ec7e-ae90-473a-8720-25edac306b98.png">

### Windows

<img width="1183" alt="Screen Shot" src="https://user-images.githubusercontent.com/26853900/168153830-8f65a542-2e2a-433e-9870-a445401be977.png">

## 在 macOS 上构建

``` bash
$ brew install p7zip
$ npm install
$ npm run build
```

构建产物在 out 文件夹中。

在 macOS 和 Linux 上进行 Windows 平台的构建需要安装 Wine。

## Electron 镜像

如果 Build 时 Electron 下载过慢，可以执行

``` bash
$ export ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/
$ npm run build
```
