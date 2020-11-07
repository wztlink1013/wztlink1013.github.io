---
title: "LINKfatal error LNK1561: 必须定义入口点"
date: 2020-10-25 18:10:00
categories: Bug
description: "LINK fatal error LNK1561: 必须定义入口点"
---

## 问题描述

```cpp
LINK : fatal error LNK1561: 必须定义入口点
```

## 问题解决

每个应用程序(文件格式为 exe)都应该有个启动点，这个点就是 main 函数。缺少就会出现 link error 。

解决方法

1. 添加含有 main 函数的 CPP 文件
1. 右击属性，在常规项中修改配置类型，将应用程序修改为库，动静态库
