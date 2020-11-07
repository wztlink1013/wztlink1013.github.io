---
title: 配置java开发环境
categories: Environment
date: 2020-01-27 19:45:16
description: "jdk下载安装，环境变量配置"
---

## 一、下载

[https://www.oracle.com/cn/java/technologies/javase-downloads.html](https://www.oracle.com/cn/java/technologies/javase-downloads.html)

## 二、环境变量配置

在系统变量下

### CLASSPATH

> .;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;%CATALINA_HOME%\common\lib\servlet-api.jar;

其中`%CATALINA_HOME%\common\lib\servlet-api.jar;`为 tomcat 的加包配置

### JAVA_HOME

> C:\Program Files\Java\jdk1.8.0_181

### path

> %JAVA_HOME%\bin
> %JAVA_HOME%\jre\bin

## 三、测试

CMD 下输入`java -version`
