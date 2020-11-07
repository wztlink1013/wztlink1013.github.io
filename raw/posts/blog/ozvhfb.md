---
title: 爬虫框架
tags: [spider, beautifulsoup]
categories: Spider
date: 2020-02-08 15:52:58
thumbnail: https://cdn.jsdelivr.net/gh/wztlink1013/figure/blogarticle2/timg.jpg
description: 爬虫框架
---

## 一、爬虫基本架构

### url 管理模块

- 就是管理自己爬取的的网页不要重复爬取，避免爬取进入死循环
- 使用 python 当中的 set 数据结构

### 网页下载模块

> 将对应的 url 模块下载到本地或者读入内存

> 实现方式

- 通过 url 下载

```python
from urllib.request import urlopen
test_url = "https://wztlink1013.github.io"
response = urlopen(test_url)
print (response.getcode()) # 200 表示访问成功
print (response.read())
```

- 通过 Request 访问
- 通过 cookie 访问

### 网页解析模块

> 从已经下载的网页中爬取数据，实现方式有：

1. 正则表达式
1. html.parser
1. **BeautifulSoup：结构化解析网页**
1. lxml
1. 结构化解析
1. DOM（Document Object Model），树形结构，就是 html 的基本骨架

## 二、BeautifulSoup 解析网页
