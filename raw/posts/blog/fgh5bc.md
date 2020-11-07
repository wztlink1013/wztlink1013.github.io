---
title: IDEA配置Tomcat
categories: Environment
date: 2020-04-02 10:03:16
description: Web开发，IDEA配置Tomcat
---

## 一、Tomcat 的下载

### 正常下载并安装

> ！！！在此之前默认读者下载且配置好了 jdk 环境

- 进入该官网[下载页面](https://imgconvert.csdnimg.cn/aHR0cDovL3RvbWNhdC5hcGFjaGUub3JnLw?x-oss-process=image/format,png)
  ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598787914511-a035ba93-0b7a-450b-b391-5d1452435ca7.png#align=left&display=inline&height=238&margin=%5Bobject%20Object%5D&originHeight=952&originWidth=1842&size=0&status=done&style=shadow&width=461)
- 下载并解压到自己的相应盘区，再进入下图文件夹检验是否成功
  ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598787914448-2ef2e1a1-2966-4d35-8bfe-82162aa1588b.png#align=left&display=inline&height=273&margin=%5Bobject%20Object%5D&originHeight=727&originWidth=1147&size=0&status=done&style=shadow&width=431)
- 点击第二个框不出现闪退情况则证明成功
  ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598787914507-87063aec-884a-4180-b124-568478d81bc0.png#align=left&display=inline&height=222&margin=%5Bobject%20Object%5D&originHeight=639&originWidth=1223&size=0&status=done&style=shadow&width=425)
- 浏览器进入端口[http://localhost:8080/](http://localhost:8080/)上述配置成功则表明成功
  ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598787914624-248148e3-3f5f-45ca-ad93-c063216a7aff.png#align=left&display=inline&height=240&margin=%5Bobject%20Object%5D&originHeight=1030&originWidth=1838&size=0&status=done&style=shadow&width=429)

### 过程中可能会出现的问题

- 点击 startup.bat 文件出现闪退
  电脑中 java jdk 有无（JAVA_HOME）
- 端口被占用
  进入 Tomcat 文件夹下的 conf 文件下的 server.xml 文件，用记事本查找 8080，下面复制一个新的初始端口
  ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598787914513-8083bc6e-4c6f-436e-b0b0-98d3d70b9dea.png#align=left&display=inline&height=80&margin=%5Bobject%20Object%5D&originHeight=80&originWidth=557&size=0&status=done&style=none&width=557)

## 二、IDEA 配置 Tomcat

### 配置

- 新建一个项目
  ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598787914503-6a4bf3f9-0e92-4bd3-bcde-e65af73510b8.png#align=left&display=inline&height=1060&margin=%5Bobject%20Object%5D&originHeight=1060&originWidth=1457&size=0&status=done&style=none&width=1457)
- 编写 head/body 待会测试用
  ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598787914719-36f4cef3-db7c-4bd9-a43a-5c92f0afead2.png#align=left&display=inline&height=1080&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1842&size=0&status=done&style=none&width=1842)
- 相关配置
  进入配置页面![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598787914684-a3f47ea5-50df-450f-935d-f9ec086bc2cb.png#align=left&display=inline&height=1080&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1842&size=0&status=done&style=none&width=1842)![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598787914511-d1b72498-32cb-4868-8758-34fb3de3e798.png#align=left&display=inline&height=853&margin=%5Bobject%20Object%5D&originHeight=853&originWidth=1343&size=0&status=done&style=none&width=1343)
  ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598787914585-5e3362d9-db50-4bdb-8640-f3a2f630bbbf.png#align=left&display=inline&height=932&margin=%5Bobject%20Object%5D&originHeight=932&originWidth=1343&size=0&status=done&style=none&width=1343)

### 运行测试

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598787914608-c71c5263-ae91-472f-b760-cc3fbd78b81c.png#align=left&display=inline&height=1080&margin=%5Bobject%20Object%5D&originHeight=1080&originWidth=1842&size=0&status=done&style=none&width=1842)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598787914608-14ca2925-9dd2-4cfd-9399-597c08094743.png#align=left&display=inline&height=285&margin=%5Bobject%20Object%5D&originHeight=285&originWidth=1836&size=0&status=done&style=none&width=1836)
