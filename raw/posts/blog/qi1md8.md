---
title: javaweb-8080端口被占用
categories: [Bug]
date: 2020-04-01 15:26:52
description: web项目开发过程中，端口被占用情况处理
---

## 一、报错信息

```
localhost:8080 is already in use

Port 8080 required by Tomcat v8.0 Server at localhost is already in use. The server may already be running in another process, or a system process may be using the port. To start this server you will need to stop the other process or change the port number(s).

Error running Tomcat8: Address localhost:8080 is already in use
```

## 一、分析并解决问题

> 电脑中 8080 端口被占用，导致 web 项目不能运行

> 任务管理器关闭占用 8080 端口的程序

### netstat -ano

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926284869-236a07ed-16de-4b45-9fb3-08aa10dd3df8.png#align=left&display=inline&height=600&margin=%5Bobject%20Object%5D&originHeight=600&originWidth=1200&size=0&status=done&style=none&width=1200)

### tasklist

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926285001-7e1779f1-5c00-4f0d-ad38-20b653849c37.png#align=left&display=inline&height=221&margin=%5Bobject%20Object%5D&originHeight=221&originWidth=1200&size=0&status=done&style=none&width=1200)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926284877-544af23f-b422-49de-af28-86f9c7a37ce3.png#align=left&display=inline&height=183&margin=%5Bobject%20Object%5D&originHeight=183&originWidth=1200&size=0&status=done&style=none&width=1200)

### 任务管理器

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926285182-6bfb20a5-33a4-4a6b-8969-eaae9b7c67e4.png#align=left&display=inline&height=550&margin=%5Bobject%20Object%5D&originHeight=550&originWidth=834&size=0&status=done&style=none&width=834)
