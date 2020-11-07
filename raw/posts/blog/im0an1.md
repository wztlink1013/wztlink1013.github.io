---
title: Android平台与开发技术
date: 2020-11-03 16:23:00
categories: Android
description: Android平台与开发技术
---

## 一、目的

大学期间，有没有能够**有专业能力的项目实战**。希望在你的将来的简历中加入技术方面的项目介绍。

## 二、考核方式

PBL 的方式组队，开发一个创意项目。\*\*

## 三、课程背景

1. **Android 平台简介**
1. **Google  提供了官方的 Android Studio**
   1. Java  或者  Kotlin
1. **Apple 提供了官方的开发环境**
   1. Swift 或者 OC
1. **Wechat 提供了官方的开发环境**
   1. SNS  排第一的产品；Facebook
   1. 小程序，JD
1. **其他平台**
   1. 百度小程序等\*\*

## 四、技术路线

1. **uni-app**  是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的**框架**，开发者编写一套代码，**可发布到 iOS、Android、H5、以及各种小程序**（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。
1. **DCloud 公司**拥有 500 万开发者用户，几十万应用案例、10 亿手机端月活用户，数千款 uni-app 插件、70+微信/qq 群。阿里小程序工具官方内置 uni-app（[详见](https://docs.alipay.com/mini/ide/0.70-stable)），腾讯课堂官方为 uni-app 录制培训课程（[详见](https://ask.dcloud.net.cn/article/35640)），开发者可以放心选择。
1. uni-app 在手，做啥都不愁。即使不跨端，uni-app 也是更好的小程序开发框架（[详见](https://ask.dcloud.net.cn/article/35947)）、更好的 App 跨平台框架、更方便的 H5 开发框架。不管领导安排什么样的项目，你都可以快速交付，不需要转换开发思维、不需要更改开发习惯。

## 五、快速上手+安装环境

**uni-app 支持通过可视化界面、**[**vue-cli 命令行**](https://uniapp.dcloud.io/quickstart?id=%e9%80%9a%e8%bf%87vue-cli%e5%91%bd%e4%bb%a4%e8%a1%8c)** 两种方式快速创建项目。**

### [通过  HBuilderX  可视化界面](https://uniapp.dcloud.io/quickstart?id=_1-%e9%80%9a%e8%bf%87-hbuilderx-%e5%8f%af%e8%a7%86%e5%8c%96%e7%95%8c%e9%9d%a2)

1. 可视化的方式比较简单，HBuilderX 内置相关环境，开箱即用，无需配置 nodejs。
1. 开始之前，开发者需先下载安装如下工具：
1. HBuilderX：[官方 IDE 下载地址](https://www.dcloud.io/hbuilderx.html)
1. [HBuilderX](https://www.dcloud.io/hbuilderx.html)是通用的前端开发工具，但为 uni-app 做了特别强化。
1. 下载 App 开发版，可开箱即用；如下载标准版，在运行或发行 uni-app 时，会提示安装 uni-app 插件，插件下载完成后方可使用。

### Chrome

### Android Studio

gradle 国内源配置方法

Android Studio 在构建项目时会拉取 gradle 资源，而 goole 和 jcenter 在国内的网络环境并不好用，容易产生 connect timeout 等错误。

因此将地址修改成阿里云的国内镜像。
一、允许使用 maven 仓库
　　点击 File->Settings 进入设置界面，勾选“Enable embedded Maven repository”，

二、修改 build.gradle
　　在项目文件中找到 build.gradle 文件，修改其中的 buildscript 和 allprojects 地址：

buildscript {
    repositories {
        maven{ url 'http://maven.aliyun.com/nexus/content/groups/public/' }
        maven{ url 'http://maven.aliyun.com/nexus/content/repositories/jcenter'}
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.3.0-alpha13'
    }
}
allprojects {
    repositories {
        maven{ url 'http://maven.aliyun.com/nexus/content/groups/public/'}
        maven{ url 'http://maven.aliyun.com/nexus/content/repositories/jcenter'}
    }
}
task clean(type: Delete) {
    delete rootProject.buildDir
}

gradle 的文件下载下来以后会保存在本地，也有缓存。这意味着不同的项目如果有相同的 gradle 依赖，则不需要重复下载。因此也不是每次打开新项目都需要修改 build.gradle 文件。

如果修改 build.gradle 后重新 build 还是有错，可以尝试新建一个相同 API 版本的项目。

## 六、考核方式

| 项目名称： | 移动应用创意设计 |
| ---------: | ---------------- |
| 项目说明： | 要求：           |

1.run ok； 2.代码提交到 Gitee 或者 github，并提交项目开发文档 3.有意义 4.答辩过程流畅，并提交 PPT 等材料 |
| 研究时间： |  2020-10-09  至  2020-12-09 |
| 评价时间： |  2020-12-09  至  2020-12-31 |
| 评价指标： | | 1.run ok； | **25 分** |
| --- | --- |
| 2.代码提交到 Gitee 或者 github，并提交项目开发文档 | **25 分** |
| 3.有意义 | **25 分** |
| 4.答辩过程流畅，并提交 PPT 等材料 |
|

|
