# bilibili-ports

哔哩哔哩官方客户端移植

图标来自于 [macOSicons](https://macosicons.com/)，作者
[@Mashiro](https://macosicons.com/#/u/Mashiro)

## 在 macOS 上构建

``` bash
$ brew install p7zip
$ npm install
$ npm run build
```

构建产物在 out 文件夹中。

## Electron 镜像

如果 Build 时 Electron 下载过慢，可以执行

``` bash
$ export ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/
$ npm run build
```
