---
title: BOM（浏览器对象模型）
date: 2020-10-15 17:14:00
description: BOM(浏览器对象模型)学习笔记
categories: Language
---

## BOM（浏览器对象模型）

> BOM 作用对象就是浏览器，从这一方面来说，DOM 也是 BOM 的属性之一
> 通常所使用的 onclick 事件其实是 window.onclick，只不过是默认不写。

## 窗口大小

```javascript
var w =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

var h =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
```

## Screen

可用的屏幕宽度/高度

```javascript
<script>document.write("可用宽度: " + screen.availWidth);</script>
```

## Location

用于获得当前的页面地址（URL），并且把浏览器重定向到新的页面

- location.hostname：返回 web 主机域名
- location.pathname：返回当前页面的路径和文件名
- location.port：返回 web 主机的端口（80 或 443）
- location.protocol：返回所使用的 web 协议
- location.href：返回当前页面的 URL
- location.assign()：加载新的文档

```javascript
<script>
function newDoc(){
    window.location.assign("https://www.baidu.com")
}
</script>
<body>
<input type="button" value="加载新文档" onclick="newDoc()">
</body>
```

## History

包含浏览器的历史

## Navigator

浏览器相关信息

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<div id="example"></div>
<script>
txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>";
txt+= "<p>浏览器名称: " + navigator.appName + "</p>";
txt+= "<p>浏览器版本: " + navigator.appVersion + "</p>";
txt+= "<p>启用Cookies: " + navigator.cookieEnabled + "</p>";
txt+= "<p>硬件平台: " + navigator.platform + "</p>";
txt+= "<p>用户代理: " + navigator.userAgent + "</p>";
txt+= "<p>用户代理语言: " + navigator.systemLanguage + "</p>";
document.getElementById("example").innerHTML=txt;
</script>

</body>
</html>
```

## 弹窗

- 警告框：alert("hello");
- 确认框：confirm("按下按钮");
- 提示框：prompt("请输入你的名字","Harry Potter");
- 换行：alert("Hello\nHow are you?");

## 计时事件

> 设定一个时间然后再执行代码

- setInterval()

```javascript
<p>在页面显示一个时钟</p>
<p id="demo"></p>
<script>
var myVar=setInterval(function(){myTimer()},1000);
function myTimer(){
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById("demo").innerHTML=t;
}
</script>
```

- clearInterval()

```javascript
<p>页面上显示时钟：</p>
<p id="demo"></p>
<button onclick="myStopFunction()">停止</button>
<script>
var myVar=setInterval(function(){myTimer()},1000);
function myTimer(){
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById("demo").innerHTML=t;
}
function myStopFunction(){
	clearInterval(myVar);
}
</script>
```

- setTimeouot()

```javascript
<p>点击按钮，在等待 3 秒后弹出 "Hello"。</p>
<button onclick="myFunction()">点我</button>
<script>
function myFunction(){
	setTimeout(function(){alert("Hello")},3000);
}
</script>
```

- clearTimeout()

```javascript
<p>点击第一个按钮等待3秒后出现"Hello"弹框。</p>
<p>点击第二个按钮来阻止第一个函数运行。（你必须在3秒之前点击它）。</p>
<button onclick="myFunction()">点我</button>
<button onclick="myStopFunction()">停止弹框</button>
<script>
var myVar;
function myFunction(){
	myVar=setTimeout(function(){alert("Hello")},3000);
}
function myStopFunction(){
	clearTimeout(myVar);
}
</script>
```

## Cookie

记录用户在网页中信息
