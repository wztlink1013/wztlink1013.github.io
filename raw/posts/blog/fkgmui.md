---
title: DOM（文档对象模型）
categories: Language
date: 2020-10-15 16:30:00
description: DOM学习笔记
---

## DOM（文档对象模型）

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598689552517-1346b948-8d7e-49f9-b450-fdbbcee61c73.png#align=left&display=inline&height=247&margin=%5Bobject%20Object%5D&originHeight=334&originWidth=950&size=0&status=done&style=shadow&width=703)

## 查找 HTML 元素

> 通过 id、标签名、类名来查找

- document.getElementById("")
- document.getElementByTagName("")
- document.getElementByClassName("")

## 改变 HTML

- 直接通过 js 将新的内容加入到 HTML 内容中，不过需要需要注意的就是，不要在 HTMl 都加载完了再触发该 js，不然会让新加的内容覆盖原来的已加载完的 HTML 内容。

```javascript
<script>document.write(Date());</script>
```

- 改变 HTML 内容

```javascript
<script>
  var element=document.getElementById("header"); element.innerHTML="新标题";
</script>
```

- 改变 HTML 属性

```javascript
<script>document.getElementById("image").src="landscape.jpg";</script>
```

## 改变 CSS

```javascript
<script>
  document.getElementById("p2").style.color="blue";
  document.getElementById("p2").style.fontFamily="Arial";
  document.getElementById("p2").style.fontSize="larger";
</script>
```

> 改变 CSS 也可以用触发事件的方式来改变

```javascript
<h1 id="id1">我的标题 1</h1>
<button type="button"
onclick="document.getElementById('id1').style.color='red'">点我!</button>
```

## 事件

> 当对 HTML 元素或者鼠标执行某些行为的时候，就会触发一些时间

- onclick：点击具有该事件属性的元素时，就会触发

具体的形式有两种：第一种是直接在标签中写完整 js 文本，第二种在 script 代码中调用元素的 id 然后在运行代码

- onload 和 unload：该元素已经全部展示完毕
- onchange：“改变”即触发，最常用的就是 input 标签中的使用，比如输入完自己的账号，然后想让账号小写字母全部编程大写字母就可以了
- onmouseover 和 onmouseout：鼠标移到/移出该处执行
- onmousedown 和 onmouseup：鼠标指针一直点着/松着触发

## 事件监听

> 对一个元素执行不同事件的时候，触发相应的结果，结果就是一个元素对其“监听”。

`element.addEventListener(event, function, useCapture);`

- 第一个参数是事件的类型 (如 "click" 或 "mousedown").
- 第二个参数是事件触发后调用的函数。
- 第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。

  > 注意:不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。

- 可以对一个元素赋以多个事件监听
- 也可以对 window 对象进行事件监听
- 事件冒泡和事件捕获
- 移除事件监听的方法 removeEventListener()

\*\*

## 节点

> 给文档中添加新的元素，或者是改变元素

- 创建新的 HTML 元素 (节点) - appendChild()
- 创建新的 HTML 元素 (节点) - insertBefore()

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>

<script>
var para = document.createElement("p");
var node = document.createTextNode("这是一个新的段落。");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child);
</script>

</body>
</html>
```

- 移除已存在的元素

## HTMLCollection

> 就是将“文档”中所有选定的元素进行“编号”，有点类似数组但不是数组。

就如查找出文档中所有<p>标签，按照顺序又第 0 个、第 1 个依次列举下来。

- length 属性，类似数组，但不是！也就意味着没有通常我们印象中的数组其他属性。

## NodeList

NodeList 对象是一个从文档中获取的节点列表 (集合) 。
NodeList 对象类似 HTMLCollection 对象。
一些旧版本浏览器中的方法（如：getElementsByClassName()）返回的是 NodeList 对象，而不是 HTMLCollection 对象。
所有浏览器的 childNodes 属性返回的是 NodeList 对象。
大部分浏览器的 querySelectorAll() 返回 NodeList 对象。

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<h2>JavaScript HTML DOM!</h2>

<p>Hello World!</p>

<p>Hello Runoob!</p>

<p id="demo"></p>

<script>
var myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = "文档包含 " + myNodelist.length + " 个段落。";
</script>

</body>
</html>
```

**两者区别：**
HTMLCollection 是 HTML 元素的集合。
NodeList 是一个文档节点的集合。
NodeList 与 HTMLCollection 有很多类似的地方。
NodeList 与 HTMLCollection 都与数组对象有点类似，可以使用索引 (0, 1, 2, 3, 4, ...) 来获取元素。
NodeList 与 HTMLCollection 都有 length 属性。
HTMLCollection 元素可以通过 name，id 或索引来获取。
NodeList 只能通过索引来获取。
只有 NodeList 对象有包含属性节点和文本节点。

## querySelector

> 功能：返回文档中匹配指定的 CSS 选择器中的一个元素

`document.querySelector("#demo");`
