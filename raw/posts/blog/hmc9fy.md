---
title: 测试阿里云函数
tags: [yuque, hexo]
categories: [Hexo]
date: "2020-07-14 16:32:19"
mathjax: true
description: "测试阿里云函数"
thumbnail: "https://cdn.jsdelivr.net/gh/wztlink1013/CDN-article/article20200819/Snipaste_2020-08-19_10-30-48.png"
---

## 一、Python3 的执行环境

```python
# -*- coding: utf-8 -*-

import logging
import requests
OK = b'ok\n'

def handler(environ, start_response):
    status = '200 OK'
    response_headers = [('Content-type', 'text/plain')]
    sync_yuque()
    start_response(status, response_headers)
    return [OK]

def sync_yuque():
    requests.post("https://api.github.com/repos/wztlink1013/Blog3.0/dispatches",
    json={'event_type': "run-it"},
    headers={"User-Agent":'curl/7.52.1',
              'Content-Type': 'application/json',
              'Accept': 'application/vnd.github.everest-preview+json',
              'Authorization': 'token 一串英文数字'})
```

## 二、测试 GitHub Actions 触发

> 不行

```yaml
repository_dispatch:
watch:
  types: [started]
issue_comment:
  types: [created, edited, deleted]
```

> 行

```yaml
[repository_dispatch, watch] # wztch默认只有star会触发，取消star不会触发
```

## 三、webhook 自定义触发

> **仅主动推送更新触发**：只在文档发布或更新的时候勾选了「文档有较大更新，推送给关注人」才会触 Webhooks

![](https://cdn.jsdelivr.net/gh/wztlink1013/CDN-article/article1/20200726093426.png)

![Snipaste_2020-07-14_17-53-33.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1594720551100-1a8e4650-e1b2-47bb-b4a2-16e1027f9d4d.png#align=left&display=inline&height=644&margin=%5Bobject%20Object%5D&name=Snipaste_2020-07-14_17-53-33.png&originHeight=644&originWidth=1013&size=76185&status=done&style=none&width=1013)
