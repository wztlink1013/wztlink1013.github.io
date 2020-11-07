---
title: IDEA控制台输出中文乱码问题
date: 2020-10-25 16:30:00
categories: Bug
description: IDEA控制台输出中文乱码问题
---

## 问题描述

在 java 实现 ping/tracert 两个命令时候，输出到控制台里面中文乱码。

## 问题分析

应该是调用了终端，而 windows 的终端默认是 GBK 的编码，所以要对其更改管用的 utf-8 编码，改为 GBK 编码。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603613519544-dc851d0f-e0c0-4a0a-9a2d-0043285b3db0.png#align=left&display=inline&height=441&margin=%5Bobject%20Object%5D&name=image.png&originHeight=881&originWidth=706&size=74813&status=done&style=shadow&width=353)

## 问题解决

### 编码更改

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603613302488-7bd6d045-81c3-470c-a57c-05a020588fcd.png#align=left&display=inline&height=511&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1022&originWidth=1449&size=141645&status=done&style=shadow&width=724.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603613687953-21f1bbc9-b0bc-4db4-a935-3fcf6275909f.png#align=left&display=inline&height=185&margin=%5Bobject%20Object%5D&name=image.png&originHeight=369&originWidth=1920&size=135691&status=done&style=shadow&width=960)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603613719305-ac9dc39b-2c6a-4350-9f31-49d48dbedfe5.png#align=left&display=inline&height=110&margin=%5Bobject%20Object%5D&name=image.png&originHeight=220&originWidth=764&size=24151&status=done&style=none&width=382)

- `Reload` 表示使用新编码重新加载，新编码不会保存到文件中
- `Convert` 表示使用新编码进行转换，新编码会保存到文件中
- 含有中文的代码文件，`Convert` 之后可能会使中文变成乱码，所以在转换成请做好备份，不然可能出现转换过程变成乱码，无法还原

### BOM 问题

> BOM：byte-order mark 字节顺序标记
> [https://zh.wikipedia.org/wiki/%E4%BD%8D%E5%85%83%E7%B5%84%E9%A0%86%E5%BA%8F%E8%A8%98%E8%99%9F](https://zh.wikipedia.org/wiki/%E4%BD%8D%E5%85%83%E7%B5%84%E9%A0%86%E5%BA%8F%E8%A8%98%E8%99%9F)

可能会出现的问题有：

> 编译报错：`找不到符号`、`未结束的字符串文字` 或者是 提示 `非法字符`

解决办法：有上述百科可知，UTF-8 编码分有 BOM 和无 BOM 两种分类。IDEA 打开 Eclipse 项目，会提示出现上述编译问题，因为**Eclipse 默认是有 BOM 的文件编译**，而**IDEA 只能编译无 BOM 的文件编译**，所以解决办法就是对项目进行**BOM 去除**操作。
