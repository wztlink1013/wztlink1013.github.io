---
title: jsDelivr和Github构建免费CDN
categories: Hexo
date: 2020-02-25 14:38:25
thumbnail: https://cdn.jsdelivr.net/gh/wztlink1013/figure/blogarticle/CDN.png
description: 搭建免费CDN全过程
---

## 一、搭建缘由

CDN 的全称是 Content Delivery Network，即内容分发网络。CDN 是构建在网络之上的内容分发网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN 的关键技术主要有内容存储和分发技术。——百度百科

通俗来说就是提取外链，同时加速访问的好处。Github 的资源在国内加载速度比较慢，因此需要使用 CDN 加速来优化网站打开速度，jsDelivr + Github 便是免费且好用的 CDN，非常适合博客网站使用。

## 二、GitHub 新建 CDN 仓库

在本地电脑进行一系列 clone/pull 等一系列操作，同时发布版本（最好上传一次就发布依次版本）
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926808858-fcdea51e-42b2-4582-b46d-e9c105842039.png#align=left&display=inline&height=950&margin=%5Bobject%20Object%5D&originHeight=950&originWidth=1844&size=0&status=done&style=none&width=1844)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926808290-99384f86-d857-415a-83e6-9be3b5bcf279.png#align=left&display=inline&height=953&margin=%5Bobject%20Object%5D&originHeight=953&originWidth=1832&size=0&status=done&style=none&width=1832)

## 三、使用 jsDlivr

**`[https://cdn.jsdelivr.net/gh/wztlink1013/CDN-Volantis@](https://cdn.jsdelivr.net/gh/wztlink1013/CDN-Volantis@)版本号/文件夹/文件名.文件后缀`**

**举个栗子**

- [https://cdn.jsdelivr.net/gh/wztlink1013/CDN@2.4/Pictures/blogbackground/fengbaobao_1.jpg](https://cdn.jsdelivr.net/gh/wztlink1013/CDN@2.4/Pictures/blogbackground/fengbaobao_1.jpg)
- [https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.3//The Pet Girl of Sakurasou.mp4](https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.3//The%20Pet%20Girl%20of%20Sakurasou.mp4)

> 0、具体使用教程

- [jsDelivr 和 Github 构建免费 CDN](https://blog.wztlink1013.com/2020/02/25/Hexo/jsDelivr%E5%92%8CGitHub%E6%9E%84%E5%BB%BA%E5%85%8D%E8%B4%B9CDN/)
- [jsdelivr 官网网站](https://www.jsdelivr.com/)

> 1、加载任何 Github 发布、提交或分支

- [https://cdn.jsdelivr.net/gh/user/repo@version/file](https://cdn.jsdelivr.net/gh/user/repo@version/file)

> 2、加载 jQuery v3.2.1

- [https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js](https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js)

> 3、使用版本范围而不是特定版本

- [https://cdn.jsdelivr.net/gh/jquery/jquery@3.2/dist/jquery.min.js](https://cdn.jsdelivr.net/gh/jquery/jquery@3.2/dist/jquery.min.js)
- [https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js](https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js)

> 4、完全省略该版本以获取最新版本

- [https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js](https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js)

> 5、将“.min”添加到任何 JS/CSS 文件中以获取缩小版本，如果不存在，将为会自动生成

- [https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/src/core.min.js](https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/src/core.min.js)

> 6、在末尾添加 / 以获取资源目录列表

- [https://cdn.jsdelivr.net/gh/jquery/jquery/](https://cdn.jsdelivr.net/gh/jquery/jquery/)
