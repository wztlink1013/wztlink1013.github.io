---
title: "JavaWeb-上课笔记"
categories: Web
tags: "javaweb"
date: 2020-04-01 22:03:07
description: "javaweb大作业思路"
---

# 【第二章】JavaWeb 概述

## 一、XML

`XML`  是一种标记性语言，但是不同于 `HTML` ，目的其实就是用于传输数据，但是 `HTML`  的目的可以理解为展示

> 网站建好之后，需要将自己的文章链接提交到百度/谷歌，通过部署生成的`baidusitemap.xml`和`sitemap.xml`文件，sitemap 提交方式提交以达到目的。

### XML 语法

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670375381-0e3b13a8-6a22-47fb-8e8f-32c203fbf25d.png#align=left&display=inline&height=207&margin=%5Bobject%20Object%5D&originHeight=388&originWidth=866&size=0&status=done&style=shadow&width=461)

- 文档声明：图中最上面一行
- 元素定义：形式相当于 `HTML`  当中的标签，但不是标签，有根元素（一般只有一个），空元素等之分
- 属性定义：其中值需要用双引号或者单引号括起来
- 注释：和 `HTML`  一样

### DTD 和 Schema 约束

有些时候文档内可能内容语义有歧义，所以需要对其 xml 文件内容尽可能的加以约束，DTD 和 Schema 两种方式

## 二、HTTP 协议

> 生成的 web 项目和服务器之间的传输协议

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670375263-a1f1c0c1-0d94-4f9d-97ed-9d8e7e1d2495.png#align=left&display=inline&height=127&margin=%5Bobject%20Object%5D&originHeight=127&originWidth=305&size=0&status=done&style=shadow&width=305)

> 其中 http1.1 版本比 1.0 版本优化的是对 http 请求可以同时进行多个请求和响应

### HTTP 请求消息

> 客户端（web 浏览器）向服务器发送请求，通常由请求行、请求头、实体内容三部分组成

- 请求行：请求方式，资源路径，http 协议版本三部分组成。请求方式又有 GET（所请求内容会在资源路径后面带上参数值，会有大小限制）和 POST（安全，无大小限制）等方式

### HTTP 响应消息

> 也由三部分组成，有资源状态行、响应消息头、实体内容

- 资源状态行：协议版本 状态码 状态描述三部分组成。其中状态码有多种，常见的 404 就是服务器找不到相应请求的的资源

## 三、Tomcat

### 关于 Tomcat

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670375411-c8675707-4396-48f4-b181-07310231b868.png#align=left&display=inline&height=174&margin=%5Bobject%20Object%5D&originHeight=250&originWidth=844&size=0&status=done&style=shadow&width=588)

### 下载安装 Tomcat

安装等方式参考博客 [https://blog.csdn.net/ZTlink1013/article/details/104815639](https://blog.csdn.net/ZTlink1013/article/details/104815639)

## 四、Web 应用

### 简述

> web 应用，就是一项工程，在编写 web 项目过程中，对文件按照“合乎规矩”的方式放置

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670375598-ac6ece9f-6982-4a1d-a7d8-bc3c8b4ce0f7.png#align=left&display=inline&height=352&margin=%5Bobject%20Object%5D&originHeight=614&originWidth=830&size=0&status=done&style=shadow&width=476)

### IDEA 配置 Tomcat

搭建 web 开发环境

资源的访问，点击请求的页面跳转设置`web.xml`中配置

> 阮一峰的网站当中，有类似域名自动跳转，是否和域名解析有关呢？抑或是对 web.xml 进行了操作？

对 idea 进行 web 开发 配置[https://blog.csdn.net/ZTlink1013/article/details/104815639](https://blog.csdn.net/ZTlink1013/article/details/104815639)

# 【第三章】Servlet

## 一、什么是 Servlet

### 什么是 Servlet

> Servlet 就是在服务器端的 Java 接口或者说是类（叫法有狭义广义之分），处理客户端传来的请求并作出相应的响应这么一个网络模块。

- 请求：客户端传来的调用或是一系列行为，同时也包含了请求所需要的数据。
- 响应：服务器根据客户端传来的请求做出响应，实时的展示给客户端。这之中 Servlet 相当于 java 类当中的一个接口，以请求来的信息作为输入，然后进行分析，做出相应。

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670486756-3febd732-e4ee-413d-8868-a406760f5a22.png#align=left&display=inline&height=134&margin=%5Bobject%20Object%5D&originHeight=222&originWidth=783&size=0&status=done&style=shadow&width=472)

### JSP 和 Servlet

> servlet 是控制层，jsp 转换为 servlet，用 servlet 来实现 http 请求。

【1】JSP 第一次运行的时候会编译成 Servlet，驻留在内存中以供调用。

【2】JSP 是 web 开发技术，Servlet 是服务器端运用的小程序，我们访问一个 JSP 页面时，服务器会将这个 JSP 页面转变成 Servlet 小程序运行得到结果后，反馈给用户端的浏览器。

【3】Servlet 相当于一个控制层再去调用相应的 JavaBean 处理数据,最后把结果返回给 JSP。

【4】Servlet 主要用于转向，将请求转向到相应的 JSP 页面。

【5】JSP 更多的是进行页面显示，Servlet 更多的是处理业务，即 JSP 是页面，Servlet 是实现 JSP 的方法。

【6】Servlet 可以实现 JSP 的所有功能，但由于美工使用 Servlet 做界面非常困难，后来开发了 JSP。

【7】JSP 技术开发网站的两种模式：JSP + JavaBean；JSP + Servlet + JavaBean（一般在多层应用中, JSP 主要用作表现层,而 Servlet 则用作控制层,因为在 JSP 中放太多的代码不利于维护，而把这留给 Servlet 来实现,而大量的重复代码写在 JavaBean 中）。

【8】二者之间的差别就是，开发界面是 JSP 直接可以编写。

比如在 JSP 中写 Table 标记：`<table>[数据]</table>；`

Servlet 需要加入：`out.println(“<table>[数据]</table>”)。`

JSP 文件在被应用服务器(例如：Tomcat、Resin、Weblogic 和 Websphere),调用过之后，就被编译成为了 Servlet 文件。也就是说在网页上显示的其实是 Servlet 文件。Tomcat 下面 JSP 文件编译之后生成的 Servlet 文件被放在了 work 文件夹下，JSP 中的 HTML 代码在 Servlet 都被 out 出来，而 JSP 代码按照标签的不同会放在不同的位置。

【9】JSP 中嵌入 JAVA 代码，而 Servlet 中嵌入 HTML 代码。

【10】在一个标准的 MVC 架构中，Servlet 作为 Controller 接受用户请求并转发给相应的 Action 处理，JSP 作为 View 主要用来产生动态页面，EJB 作为 Model 实现你的业务代码。

## 二、Servlet 基础

### 接口及其实现类

就是利用其类编写相关服务器端的相关运行代码

### 生命周期

分三个阶段：初始化阶段->运行阶段->销毁阶段

### HttpServlet 类

一般客户端和服务器之间都回使用 `HTTP协议` ，所以 Servlet 接口中就提供了一个抽象类`javax.servlet.http.HttpServlet`，他是 `GernericServlet`  的一个子类，专门用来处理 `HTTP协议`  的 servlet；具体程序中就是用该类

> HelloWordServlet.java

```java
package cn.itcast.firstmyapp.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloWordServlet extends HttpServlet {

	 protected void doGet(HttpServletRequest req, HttpServletResponse resp)
	            throws ServletException, IOException {

		 System.out.println("接受了客户端的请求-----------------------------");
		 // 设置响应类型:
	        resp.setContentType("text/html");
	        // 获取输出流:
	        PrintWriter pw = resp.getWriter();
	        // 写入响应:
	        pw.write("<h1>Hello, world!</h1>");
	        // 最后不要忘记flush强制输出:
	        pw.flush();
	    }

}
```

## 三、Servlet 虚拟路径的映射

### 1. 多重映射

> 就相当于多加几个自己指定的访问路径，在 web.xml 中

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670486704-cb7b6356-6317-47d3-85c4-a27582c41121.png#align=left&display=inline&height=221&margin=%5Bobject%20Object%5D&originHeight=455&originWidth=1003&size=0&status=done&style=shadow&width=487)

### 2. 映射路径下使用通配符

> 在其中使用通配符，一个目录下的所有路径都可以访问，其中有完全目录匹配，目录匹配，扩展名匹配

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670487060-fa223535-eabd-40c6-bf7e-088fc77c9c87.png#align=left&display=inline&height=92&margin=%5Bobject%20Object%5D&originHeight=106&originWidth=568&size=0&status=done&style=shadow&width=493)

### 3. 缺省

通常作用是解决请求的资源找不到的情况，（404：请求的资源找不到）

## 四、 `ServletConfig`  和 `ServletContext` 

> ServletConfig 接口

类比于 git 根文件夹`.ssh`下的 config 配置文件，它是 servlet 的配置对象，目的就是获取与 servlet 的初始化参数

> PS:会使用常用的接口方法

# 【第五章】会话技术

## 一、会话技术

相当于在客户端和服务器端之间，记录一些用户信息，但是不能用上一章节的，因为那只能保存暂时的信息。 `servlet`  还提供两个对象 `Cookie`  和 `Session`  可以更好地更好地保存会话数据。
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670565525-6a2b8b74-4105-447a-95ba-034020c747fe.png#align=left&display=inline&height=117&margin=%5Bobject%20Object%5D&originHeight=215&originWidth=1105&size=0&status=done&style=shadow&width=601)

# 【第六章】JSP 技术

## 一、JSP 概述

一种新的编写动态网页的技术，虽然本质还是调用了 `servlet` ，但是相比前者要简单很多（前者向页面写数据麻烦，复杂），其组成可以简单理解为
`jsp = html + java + jsp自身`

调用 servlet 过程：
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670585374-60fc5166-cb3c-433e-9794-bae3778a3cd8.png#align=left&display=inline&height=251&margin=%5Bobject%20Object%5D&originHeight=479&originWidth=910&size=0&status=done&style=shadow&width=477)

其中 jsp 生成 java 文件，编译成 class 文件所在目录（本来应该在 tomcat 的 work 路径下）：`D:\project-java\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\work\Catalina\localhost\demo-jsp\org\apache\jsp`
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670585365-5f311403-0761-4643-aa17-931be713fc49.png#align=left&display=inline&height=71&margin=%5Bobject%20Object%5D&originHeight=71&originWidth=468&size=0&status=done&style=shadow&width=468)

打开 java 文件之后可以看到相关对 sevlet 的继承

## 二、JSP 语法

### jsp 脚本元素

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670585361-957371bf-bb37-407a-90e8-8f21175d6589.png#align=left&display=inline&height=169&margin=%5Bobject%20Object%5D&originHeight=295&originWidth=1117&size=0&status=done&style=shadow&width=639)

### jsp 注释

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670585756-18f96e5c-8a74-4e14-8c16-55a9fd9124df.png#align=left&display=inline&height=118&margin=%5Bobject%20Object%5D&originHeight=118&originWidth=643&size=0&status=done&style=shadow&width=643)

### jsp 指令

> page 指令

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670585347-a182a404-b425-4f70-80d6-712122944623.png#align=left&display=inline&height=146&margin=%5Bobject%20Object%5D&originHeight=224&originWidth=1007&size=0&status=done&style=shadow&width=658)

> include 指令

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670585378-bbe2df4b-013e-4531-bece-2836e4b8bde0.png#align=left&display=inline&height=142&margin=%5Bobject%20Object%5D&originHeight=185&originWidth=884&size=0&status=done&style=shadow&width=677)

> taglib 指令

### jsp 隐式对象

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670585348-c41424d0-e688-4ae6-809e-bcc33afec5e3.png#align=left&display=inline&height=195&margin=%5Bobject%20Object%5D&originHeight=274&originWidth=912&size=0&status=done&style=shadow&width=650)

# 【第九章】JDBC

## 一、什么是 JDBC

> 使用数据库来存储和管理数据

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670606448-7b5d3ec0-c6eb-4485-af84-34a1d99fa4a1.png#align=left&display=inline&height=338&margin=%5Bobject%20Object%5D&originHeight=778&originWidth=1159&size=0&status=done&style=shadow&width=503)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670606324-93a22794-21bb-42fc-9355-64c55411ea53.png#align=left&display=inline&height=99&margin=%5Bobject%20Object%5D&originHeight=200&originWidth=983&size=0&status=done&style=shadow&width=487)

## 二、JDBC 常用的 API

> 五个接口一个类（唯一的类）

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670606334-40b58ccd-ef50-4048-a17a-819885cdcf87.png#align=left&display=inline&height=197&margin=%5Bobject%20Object%5D&originHeight=282&originWidth=931&size=0&status=done&style=shadow&width=649)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670606546-72057847-1b52-4b82-8f03-d2dcff6e0ed4.png#align=left&display=inline&height=249&margin=%5Bobject%20Object%5D&originHeight=392&originWidth=1001&size=0&status=done&style=shadow&width=635)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670606535-2996029c-eaf0-45ee-a778-614141ceea4f.png#align=left&display=inline&height=112&margin=%5Bobject%20Object%5D&originHeight=136&originWidth=755&size=0&status=done&style=shadow&width=624)

# 【第十一章】JSP 开发模型

## 一、JSP 两种开发模式

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670623021-1406c5eb-f010-4d9f-a6fe-cd104b964450.png#align=left&display=inline&height=54&margin=%5Bobject%20Object%5D&originHeight=54&originWidth=998&size=0&status=done&style=shadow&width=998)

### JSP Model1

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670623035-3dae1126-3986-4893-afbf-ce3aa250deb1.png#align=left&display=inline&height=178&margin=%5Bobject%20Object%5D&originHeight=178&originWidth=1220&size=0&status=done&style=shadow&width=1220)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670623082-df4cb3b4-1eb4-4590-a68f-f18a31a31816.png#align=left&display=inline&height=210&margin=%5Bobject%20Object%5D&originHeight=469&originWidth=1291&size=0&status=done&style=shadow&width=579)

### JSP Model2

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670623814-f1853ddf-0ab6-443c-b90f-97147896aa3c.png#align=left&display=inline&height=242&margin=%5Bobject%20Object%5D&originHeight=242&originWidth=1045&size=0&status=done&style=shadow&width=1045)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670623035-37842a30-2e67-40d6-9b33-fc7a90a89037.png#align=left&display=inline&height=208&margin=%5Bobject%20Object%5D&originHeight=515&originWidth=1297&size=0&status=done&style=shadow&width=523)

## 二、MVC 设计模式

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670623024-0fbab2bd-139b-4e8e-806a-a010e86e6159.png#align=left&display=inline&height=204&margin=%5Bobject%20Object%5D&originHeight=204&originWidth=1185&size=0&status=done&style=shadow&width=1185)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670623036-c1e95730-c04c-44ab-a07d-be7d3ce47970.png#align=left&display=inline&height=105&margin=%5Bobject%20Object%5D&originHeight=105&originWidth=1138&size=0&status=done&style=shadow&width=1138)

## 三、JavaWeb 开发中的三层架构

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670623143-02074466-5715-4efa-8b09-ee2a1489d94e.png#align=left&display=inline&height=153&margin=%5Bobject%20Object%5D&originHeight=153&originWidth=1077&size=0&status=done&style=shadow&width=1077)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670623075-f2b2b6ce-ebd7-4712-86f3-61ee087aafbb.png#align=left&display=inline&height=198&margin=%5Bobject%20Object%5D&originHeight=499&originWidth=1326&size=0&status=done&style=shadow&width=525)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598670622943-c73fc987-bbd4-4204-9a82-6a93ea4ac8ed.png#align=left&display=inline&height=224&margin=%5Bobject%20Object%5D&originHeight=224&originWidth=1066&size=0&status=done&style=shadow&width=1066)
