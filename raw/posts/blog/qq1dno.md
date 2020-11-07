---
title: 重装系统
categories: Environment
date: 2020-01-18 18:59:24
description: "重装系统，电脑硬件使用"
---

## 一、关于重装

### 重装缘由

- 电脑的空间太杂乱
- 环境配置混乱
- 网卡驱动出错
  > 总结几次重装步骤，为了今后出现类似情况，更快地重装。

### 重装好处

电脑重装系统能解决大多数问题（对鄙人能解决 100%问题//手动滑稽），在此总结一下自己重装系统过程步骤以及遇到的问题

## 二、重装系统 SOP

### 1. 制作启动盘

- [法一：MSDN 下载](https://msdn.itellyou.cn/)
  ① 迅雷下载  ② 网盘下载

下载完镜像之后，再用 ~~ULtralSO/~~ rufus 软件刻录在 U 盘（大于 4G 的 U 盘）

- [法二：微软官方下载](https://www.microsoft.com/zh-cn/software-download/windows10)
  网速不能太慢，WiFi 较快的可以用这个，不过下载的电脑原装版本，不追求专业版本的 Windows，最好还是下这个吧

> 坑 1：如果下载的镜像大于 4G 左右，ULtralSO 不能刻录。但是在学校重装为啥就可以，是 u 盘问题嘛，醉了。
> 亮 2：官方下载，可以匹配自己电脑本来的版本；可以直接刻录在 U 盘，唯一不足应该就是网速问题。
> 坑 3：U 盘如果“身患重伤”，下个相关优化 U 盘软件处理一下

- （更新）[法三：快启动](http://www.kqidong.com/index.html)先用法一下好镜像。

### 2. 正式重装

- 进入 bios 界面
  开机刚要出现`HP`字样，一直点 _esc_ 键，然后再设置开机进入启动盘
- Next Wait 即可
  格式化 C 盘 → 安装 → 等候 → 登录微软账号...

### 3. 磁盘管理

- **磁盘管理器**：根据需求将磁盘分区
- 问题 1：给 C 盘扩展时不能扩展？磁盘只有相邻卷才能扩展卷：解决办法就是把右边的磁盘删除（状态为未分配空间），然后用左边的磁盘合并之（使用扩展卷）

### 4. 关于破解

首先有条件购买支持正版，支持同行

其次下载自己笔记本出厂 Windows 版本，则不需要激活码，自带

最后破解之

`hwid.kms38.gen.mk6`软件

## 三、Computer

### 浏览器

- ~~谷歌浏览器~~
- Edge(最新)浏览器：[下载地址（DEV 版本会消去插件开发者禁用状态）](https://www.microsoftedgeinsider.com/en-us/download)
- ~~谷歌访问助手插件 让谷歌先连上网 然后构建 SSR/~~ **ByWave**
- 登录账号同步书签插件等设置
- ~~下载[IDM 下载器](http://www.carrotchou.blog/59.html)~~

### 文件备份及恢复

- 网盘常用文件夹备份（图片文件夹+个人信息文件夹）
- GitHub 同步开发项目代码

### 开发环境的搭建

- Git：配置全局用户 ~~（非个人电脑配置多用户环境~~）
- Nodejs
- Unix：VMware15
- Java：jdkjdk1.8.0_181、jrejdk1.8.0_181
- MySQL

### 通用软件

- 百度网盘，~~Dropbox，~~迅雷
- Bandizip
- PDF：Adobe Acrobat DC ~~/福昕阅读器~~
- ~~有道翻译~~
- Office2019（或者直接重装最新版 Win10 操作系统） ~~(已经集成 Onenote2016)，再另外下载 onenote 插件~~
- Potplayer 播放器

### 社交软件

QQ、微信、网易邮箱大师、网易云、酷狗~~、Telegram~~

### IDE

- C&C++：~~VScode(轻量)、Codeblocks(次选)、VS2019(PC 空间大则优选)、~~**VS2013**
- Python：Anaconda、Pycharm(~~配置 nltk、tensorflow 等~~)(~~关于破解或~~ **学生用户登录**)
- Java/JavaWeb：jdk、IDEA/Eclipse(配置 Tomcat)
- Web：VScode ~~/webstorm~~
- DataBase：[SQL Server 2008](https://www.microsoft.com/zh-cn/download/confirmation.aspx?id=30438) 和 [安装教程](https://zhuanlan.zhihu.com/p/65630194) 、 Navicat Premium 12（MySQL）
- Android：Android Studio、HBuilder X、微信开发者工具
- ~~OS：CPU Simulator~~
- Matlab
- ~~研究-CAJViewer 7.3~~
- 研究-AxMath
- ~~研究-AxGlyph~~
- Authy Desktop（二重验证）

### 后期制作

Ps、Pr、Ae ~~、An、Au、EV 录频、Format factory 格式转换工厂~~

### 其他

- 语雀
- [PicGo](https://github.com/Molunerfinn/PicGo) （全局代理下载）
- Snipaste-2.3-64 位（网盘）
- ~~阿里云的 oss-browser~~
- ~~HexoClient~~
- ~~火萤桌面视频~~
- ~~Rainmeter~~
