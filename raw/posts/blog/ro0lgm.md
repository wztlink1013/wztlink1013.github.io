---
title: Eclipse配置Tomcat创建Servlet
categories: Environment
date: 2020-04-02 13:03:16
thumbnail: https://cdn.jsdelivr.net/gh/wztlink1013/figure/blogarticle36/qweqweqesdfsdwrtqwfsd.png
description: Web开发；Eclipse的下载与安装，Tomcat下载和结合Eclipse的使用，Eclipse使用Servlet
---

## 一、Eclipse 的下载与安装与使用

[下载地址](https://www.eclipse.org/downloads/)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043597-84e5ed4c-8ad9-496b-997d-fd84136d0a86.png#align=left&display=inline&height=441&margin=%5Bobject%20Object%5D&originHeight=441&originWidth=1817&size=0&status=done&style=none&width=1817)

**注意不要下错版本，不然开发不了 web 环境**
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043623-2432fa56-57df-4b19-bbcf-d7f803db63d3.png#align=left&display=inline&height=758&margin=%5Bobject%20Object%5D&originHeight=758&originWidth=731&size=0&status=done&style=none&width=731)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043608-ed00c908-2eb3-4a07-bcd4-c93a58aed494.png#align=left&display=inline&height=763&margin=%5Bobject%20Object%5D&originHeight=763&originWidth=741&size=0&status=done&style=none&width=741)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043479-aac1b3ff-f51d-4dce-8313-4e10d2e78bbb.png#align=left&display=inline&height=373&margin=%5Bobject%20Object%5D&originHeight=373&originWidth=762&size=0&status=done&style=none&width=762)

## 二、Tomcat 的下载与配置

[下载地址](https://tomcat.apache.org/download-90.cgi)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043712-245a08a5-48cd-4446-ae4b-2ac442f09a44.png#align=left&display=inline&height=729&margin=%5Bobject%20Object%5D&originHeight=729&originWidth=1829&size=0&status=done&style=none&width=1829)
**一直下一步即可**
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043478-1e8b6460-5b48-424e-8f2d-db26d6bbce42.png#align=left&display=inline&height=485&margin=%5Bobject%20Object%5D&originHeight=485&originWidth=623&size=0&status=done&style=none&width=623)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043417-e391db44-2cd9-4c7c-8e6b-1f131ab95769.png#align=left&display=inline&height=283&margin=%5Bobject%20Object%5D&originHeight=283&originWidth=624&size=0&status=done&style=none&width=624)

打开浏览器 键入 [http://localhost:8080](http://localhost:8080) 进入页面则表示安装成功

添加环境变量，以下全在系统环境变量下配置
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043418-feddef63-fcb3-45ce-ac5a-33dd94d77655.png#align=left&display=inline&height=450&margin=%5Bobject%20Object%5D&originHeight=450&originWidth=1089&size=0&status=done&style=none&width=1089)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043499-20fddab9-abfb-4d0d-9c6d-956933ee59be.png#align=left&display=inline&height=24&margin=%5Bobject%20Object%5D&originHeight=24&originWidth=704&size=0&status=done&style=none&width=704)

```
TOMCAT_HOME：C:\Program Files\Apache Software Foundation\Tomcat 9.0
CATALINA_BASE：C:\Program Files\Apache Software Foundation\Tomcat 9.0;
CATALINA_HOME：C:\Program Files\Apache Software Foundation\Tomcat 9.0;
在classpath当中加入%CATALINA_HOME%\common\lib\servlet-api.jar;
在path中加入%CATALINA_HOME%\bin;
```

打开浏览器 键入 [http://localhost:8080](http://localhost:8080) 进入页面则表示配置成功

## 三、Eclipse 配置 Tomcat

**让 Tomcat 服务器显示在控制台上，将 Web 应用部署到 Tomcat 中**

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043589-c8022021-1185-4c41-b114-630856e16984.png#align=left&display=inline&height=350&margin=%5Bobject%20Object%5D&originHeight=350&originWidth=1837&size=0&status=done&style=none&width=1837)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043661-236843dd-f3ea-433e-b23a-254cc0a41c9b.png#align=left&display=inline&height=958&margin=%5Bobject%20Object%5D&originHeight=958&originWidth=1217&size=0&status=done&style=none&width=1217)
点击`Window` → `Show View` → `Servers` 也可以在控制台点击`Servers`
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043514-556e9b3f-1003-40ff-9066-70349be51101.png#align=left&display=inline&height=790&margin=%5Bobject%20Object%5D&originHeight=790&originWidth=1600&size=0&status=done&style=none&width=1600)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043568-aa8984a7-e9e9-4206-a922-f3386127191d.png#align=left&display=inline&height=597&margin=%5Bobject%20Object%5D&originHeight=597&originWidth=597&size=0&status=done&style=none&width=597)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043484-23195297-3636-47d7-bf44-ee0151382f87.png#align=left&display=inline&height=766&margin=%5Bobject%20Object%5D&originHeight=766&originWidth=1478&size=0&status=done&style=none&width=1478)
**双击点击**
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043403-e34d7544-8144-4516-bb7c-53adbabac167.png#align=left&display=inline&height=290&margin=%5Bobject%20Object%5D&originHeight=290&originWidth=1375&size=0&status=done&style=none&width=1375)

## 四、Eclipse 使用 Servlet

### 创建 web 工程

**创建过程中，要记得勾选生成 web.xml 文件选项**
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043545-0429f9cf-3910-4401-85da-08dd0118e9b1.png#align=left&display=inline&height=277&margin=%5Bobject%20Object%5D&originHeight=277&originWidth=1838&size=0&status=done&style=none&width=1838)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043538-d98f2569-40d6-4c3a-8111-9c3d6702052a.png#align=left&display=inline&height=382&margin=%5Bobject%20Object%5D&originHeight=382&originWidth=820&size=0&status=done&style=none&width=820)

### 添加相关文件

**添加下面的四个文件**
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043712-c178c180-3c3a-44a2-9518-671033558337.png#align=left&display=inline&height=1015&margin=%5Bobject%20Object%5D&originHeight=1015&originWidth=1831&size=0&status=done&style=none&width=1831)

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

		 System.out.println("接受了客户端的请求----------------------------------------------------");
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

> web.xml
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043517-5459e979-8525-4be9-8dab-d38f0857ef56.png#align=left&display=inline&height=627&margin=%5Bobject%20Object%5D&originHeight=627&originWidth=1178&size=0&status=done&style=none&width=1178)

### 运行并查看结果

**运行**
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043718-5d90186b-8040-4098-b1d4-bb1f67740382.png#align=left&display=inline&height=761&margin=%5Bobject%20Object%5D&originHeight=761&originWidth=1434&size=0&status=done&style=none&width=1434)
然后查看 console 部分
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043524-efeaf228-713b-43e1-ba15-375060ef20d2.png#align=left&display=inline&height=300&margin=%5Bobject%20Object%5D&originHeight=300&originWidth=1449&size=0&status=done&style=none&width=1449)
**服务器响应情况**

> 出现下图则说明成功
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043360-fd5bb570-f56a-429a-ad0e-627646447132.png#align=left&display=inline&height=190&margin=%5Bobject%20Object%5D&originHeight=190&originWidth=1318&size=0&status=done&style=none&width=1318)

> 还可以回到控制台查看请求成功情况
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043568-b62922c0-c458-4c71-bd9c-800f57b356de.png#align=left&display=inline&height=322&margin=%5Bobject%20Object%5D&originHeight=322&originWidth=1445&size=0&status=done&style=none&width=1445)

## 五、过程中出现的问题

### IDEA 上的部署

一开始从 tomcat 部署是完成的，具体参考我的 csdn 一篇小文章[地址](https://blog.csdn.net/ZTlink1013/article/details/104815639)。但是在后面使用 Servlet 的时候，不能成功部署，具体原因【图片内容来自[链接](https://blog.csdn.net/HughGilbert/article/details/56424137)！！】
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685043902-5708dbdc-79d7-4e16-9e6d-d5571c5de758.png#align=left&display=inline&height=921&margin=%5Bobject%20Object%5D&originHeight=921&originWidth=941&size=0&status=done&style=none&width=941)

> 暂时分析：是和 idea 下的根目录下的某个配置文件的默认配置有关，需要更改相关内容，暂时不折腾了。先记录下，有空再折腾，先学习。还是 eclipse 好配置···

### 对待问题

对待所发现的问题，第一要做的不是复制粘贴 bug 进谷歌百度，而是看待问题本身，找到问题的根源，用自己所学到的知识先加以分析理解，再想办法解决

### 参考资料

- [https://blog.csdn.net/weixin_34026276/article/details/93834823?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task](https://blog.csdn.net/weixin_34026276/article/details/93834823?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task)
- [https://blog.csdn.net/qq_38190185/article/details/88198794?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task](https://blog.csdn.net/qq_38190185/article/details/88198794?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task)
- [直接创建 Servlet](https://www.yiibai.com/servlet/creating-servlet-in-eclipse-ide.html)
- 快捷键：[https://www.open-open.com/bbs/view/1320934157953](https://www.open-open.com/bbs/view/1320934157953)
