---
title: Scrapy使用
tags: [scrapy, spider]
categories: Spider
date: 2020-02-12 17:18:39
thumbnail: https://cdn.jsdelivr.net/gh/wztlink1013/figure/blogarticle/20200226133509.png
description: Spider框架Scrapy
---

##

## 一、Scrapy

### Scrapy 基础

- 是一个爬虫框架，同时易扩展，可以添加新的模块达到自定义扩展
- 输出格式多样：json，csv，xml 等
- 自动处理编码

### Scrapy 框架架构图

![](https://cdn.nlark.com/yuque/0/2020/webp/1484158/1598673193957-7a7456b0-3de1-4c77-b849-cc2572555ed5.webp#align=left&display=inline&height=281&margin=%5Bobject%20Object%5D&originHeight=541&originWidth=801&size=0&status=done&style=shadow&width=416)

> 下载方法以及问题，在 anaconda 博客中

## 二、Scrapy 使用

### 使用 SOP

- 创建工程
  - 键入`cmd` `cd`到需要下载的目录下
  - 输入`scrapy startproject tutorial`（最后是项目名字）
  - **!此后所有有关命令的操作，均在下一级文件夹下，也有是有 cfg 文件后缀的文件夹下**
- 定义 Item，构造爬取的对象
- 编写 spider，爬虫主体
  - `scrapy genspider amazon_spider https://……`
- pipelines，默认 return item
- 编写其他配置，其中 pipeline 用于处理爬取后所得到的结果
- 执行爬虫
  - `scrapy crawl amazon_spider`

### 常用命令

## 参考

- 查看其官方文档
- [简书](https://www.jianshu.com/p/8023fccd7206)
