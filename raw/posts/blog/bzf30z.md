---
title: GitHub+PicGo构建免费图床及其高效使用
categories: [Hexo]
date: 2020-02-25 14:55:07
description: 搭建免费图床全过程
---

## 一、搭建缘由

一开始搭建博客，避免不了要用许多图片，最初使用七牛云来做博客图床，但是后来发现，七牛云只有 30 天的临时域名，hhhhhhh，果然啊，天下就没有免费的好事啊~后来就发现 GitHub 配合 PicGo 可以作图床，而且加上 jsDlivr 速度可观。
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926956661-8671ebfe-4f99-494d-b759-a9c75cd67b41.png#align=left&display=inline&height=670&margin=%5Bobject%20Object%5D&originHeight=670&originWidth=807&size=0&status=done&style=none&width=807)

## 二、GitHub 相关配置

### 新建 figure 图床仓库

常规新建仓库方式，命名 figure（可以换，下面仓库名也得跟着换）
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926957158-9c7f8749-4d8e-4bc9-9e1c-7d3db5a307b1.png#align=left&display=inline&height=241&margin=%5Bobject%20Object%5D&originHeight=241&originWidth=1812&size=0&status=done&style=none&width=1812)

### 生成一个 Token 密匙

点击 setting
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926956634-4c139fbc-0469-4749-89b8-f139226aa7d2.png#align=left&display=inline&height=904&margin=%5Bobject%20Object%5D&originHeight=904&originWidth=1823&size=0&status=done&style=none&width=1823)

## 三、PicGo 相关配置

### 下载及注意事项

[下载地址](https://github.com/Molunerfinn/PicGo/releases)

注意：下载 picgo 时候，要科学上网，谷歌插件没用，只能用小飞机或其他的软件（得开全局配置下载）

### 配置

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926956815-db5cf455-f628-4c4d-9242-1687e15a7f03.png#align=left&display=inline&height=564&margin=%5Bobject%20Object%5D&originHeight=564&originWidth=1002&size=0&status=done&style=none&width=1002)

## 四、高效写博客

### Snipaste 截图软件

> **常用**快捷键【惠普 💻+非机械键盘，所以记录下】

fn+f1：截屏（可编辑）

esc：退出

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926956785-4e12ba13-c4c6-4e5a-9758-5d3de27f9718.png#align=left&display=inline&height=446&margin=%5Bobject%20Object%5D&originHeight=446&originWidth=553&size=0&status=done&style=none&width=553)

### 结合 PicGo 使用

- PicGo+Snipaste 快捷键结合
  ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926956619-08d5eae3-3b21-42cc-a2d8-85d6d2f8ed62.png#align=left&display=inline&height=220&margin=%5Bobject%20Object%5D&originHeight=220&originWidth=847&size=0&status=done&style=none&width=847)

### 综合使用 SOP

1. 按`fn+f1`截完图按`ctrl+c`将刚刚截图放到剪贴板
1. 再按`ctrl+shift+p`使用 picgo 快捷键将剪贴板上的图片上传同时将此时图片的外链复制到剪贴板

## 五、相关补充

### 上传失败

`问题1：有些时候上传picgo时，会出现配置报错的情况`

> 方案 1：在 picgo 的配置中，改一下文件夹名字（相当于在仓库下新建一个文件夹），就比如本来存到 blogarticle3/文件夹下，改成 blogarticle4/就好了
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926956579-eafc7cfa-1e0b-41be-ae5b-c6560b8c7638.png#align=left&display=inline&height=186&margin=%5Bobject%20Object%5D&originHeight=186&originWidth=1320&size=0&status=done&style=none&width=1320)
> 方案 2：将下图所示的`上传前重命名`打开同时`设置Server`内容开换成关，关换成开，为什么呢？玄学···
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926956785-fb091672-3c17-49db-a0e7-965e20c93f5c.png#align=left&display=inline&height=564&margin=%5Bobject%20Object%5D&originHeight=564&originWidth=1002&size=0&status=done&style=none&width=1002)
> 方案 3：将 PicGo 软件叉掉重新运行。玄学····
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926957260-3a981036-cd74-4a90-8665-d2510470f2c9.png#align=left&display=inline&height=564&margin=%5Bobject%20Object%5D&originHeight=564&originWidth=1002&size=0&status=done&style=none&width=1002)

### 关于插件

在插件列表里面下载这三个拓展插件，其中两个国内的托管 coding 和 gitee，还有一个 github plus 版本，不过觉得国内的外链范围肯定是要小一点的应该，最好是优先使用 github 图床，coding 和 gitee 的作为文章使用，有关博客配置的使用 CDN 等。
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926956548-b7b5ad1b-2586-42c5-8f7d-9dd17c265fcf.png#align=left&display=inline&height=341&margin=%5Bobject%20Object%5D&originHeight=341&originWidth=771&size=0&status=done&style=none&width=771)

#### Coding 配置

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926956265-035a546d-2ecd-48c3-8eec-c9ef7779653b.png#align=left&display=inline&height=486&margin=%5Bobject%20Object%5D&originHeight=486&originWidth=739&size=0&status=done&style=none&width=739)

#### gitee 配置

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926956286-859465c2-411f-4761-8921-526656b8a191.png#align=left&display=inline&height=568&margin=%5Bobject%20Object%5D&originHeight=568&originWidth=778&size=0&status=done&style=none&width=778)

#### GitHub plus 配置

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926956274-6e705ace-8e6f-4226-9fae-ffaaa66a2aa9.png#align=left&display=inline&height=517&margin=%5Bobject%20Object%5D&originHeight=517&originWidth=727&size=0&status=done&style=none&width=727)
