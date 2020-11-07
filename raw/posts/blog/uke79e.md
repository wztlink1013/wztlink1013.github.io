---
title: JavaScript
categories: [Language]
date: 2020-01-24 16:11:01
description: 小结JavaScript语法
---

## 一、JavaScript 技术

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598689552509-6b3557cb-db72-41b3-b64b-183931a83443.png#align=left&display=inline&height=221&margin=%5Bobject%20Object%5D&originHeight=323&originWidth=744&size=0&status=done&style=shadow&width=508)

## 二、基本语法

### 变量

> 体现动态变量的优越性，会根据值的不同，反过来改变变量的类型

- var
  - 就类似全局变量
  - 能用 window.调用
  - 可以先使用后声明

* let
  - 作用域在**块**中
  - 不能用 window.调用
  - 不能先使用后声明
  - 可以不用初始化
* const
  - 必须**初始化**

### 输出语句

- window 对象。alert
- inner.HTML
- console 控制台输出
- document.write

### 表单验证

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script>
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("需要输入名字。");
        return false;
    }
}
</script>
</head>
<body>

<form name="myForm" action="demo_form.php"
onsubmit="return validateForm()" method="post">
名字: <input type="text" name="fname">
<input type="submit" value="提交">
</form>

</body>
</html>
```

\*\*

### JSON

JSON 和 JavaScript 相互转换，JSON 格式化后之后，就是 JavaScript 对象\*\*

## 三、函数

### Function()构造函数

```javascript
var myFunction = new Function("a", "b", "return a * b");

var x = myFunction(4, 3);
```

### 箭头函数

ES6 中新加了**箭头函数**

```javascript
const funName = (x, y) => {
  x * y;
};
```

### 自调用函数

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p>函数可以自动调用：</p>
<p id="demo"></p>
<script>
(function () {
    document.getElementById("demo").innerHTML = "Hello! 我是自己调用的";
})();
</script>

</body>
</html>
```

### 函数调用

实际上是 window 对象调用，知识默认隐藏 window 调用

### 闭包

对于变量而言，有全局变量和局部变量，对于局部变量 ，其中有一个问题就是，函数内部不能定义局部变量来进行**计数**功能，只能定义全局变量来实现。
利用**子调用函数来解决这个问题**，

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p>局部变量计数。</p>
<button type="button" onclick="myFunction()">计数!</button>
<p id="demo">0</p>
<script>
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
function myFunction(){
    document.getElementById("demo").innerHTML = add();
}
</script>

</body>
</html>
```

## **四、其他**

### 标签内加冒号

> 将其转换为变量。

    uniapp遵循Vue语法格式，

### v-if

在标签中写表达式来判断是否显示(编译过程中时候是否删除)
eg：登录框是否弹出来
前述：v-相关属性
v-show（惯用）：生成，但是不显示

### button 点击事件

绑定事件过程中的传参
\*\*
