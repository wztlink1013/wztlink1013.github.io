---
title: 🐞解决总结
categories: Bug
date: 2020-05-19 20:00:06
thumbnail: https://cdn.jsdelivr.net/gh/wztlink1013/figure/blogarticle57/20200522223340.png
description: 解决bug 小记录
---

## 一、关于 bug

在编写程序过程中，总会出现各种各样的 bug，按 bug 得类型来分的话

- 程序的逻辑出错
- 程序语法出错编译器不能通过

对待 bug，心态端正，不抵触不畏惧不怕麻烦，要想着解 bug 就是这个职业的要务之一，有耐心，积极主动的去解决问题。一步一步的解决问题，所有的技术都是熟能生巧、

## 二、解决 bug 的一些方法

### 报错信息+理论知识

当一个 bug 摆在面前，首先要做的就是要认真阅读展现出来的出错信息，这里面有几点需要注意

> **提高英语**

专业词汇的积累、阅读能力等

> **运用底层知识**

学会运行所学过的理论知识，比如在编程过程中，出现路径相关的错误，首先是根据报错可以直接在代码里面更改为正确可运行代码，然后可以利用所学过的操作系统相关文件管理知识等来进一步底层分析之，最后可以旁通自己之前搭建环境过程种总是要配的环境变量，一起思考一起分析，发散性思考，触类旁通所学知识，运用之

> **IDE 的 Debug 或 print 通法**

熟悉各种开发环境的 debug

### 搜索引擎

> **一个原则**：“遇事不决，大事谷歌，小事百度”

- 谷歌需要一些手段才能进行，总结下来就是**搭建一个机场**，方便，安全
- 百度解决一些小问题，抑或是 **“烂大街的易错知识”**
- 相关编程论坛，比如 Stack Overflow、CSDN、博客园等（还是要用谷歌）

> **结果择优原则**

- 环境统一：解决办法的环境需要和自己的 bug 的环境需要一致
- 非毁灭性原则：尽量不要做全局性的修改，比如用命令删除 git 的两个文件来改一个小 bug，属实挖坑

> **擅用官方文档**

如果说出现的 bug 抑或是，使用某个知识出错，是在官方文档中能查到的，优先选择官方文档

就比如在使用 python 数据分析的时候，许多时候，很多包（pandas、numpy、matplotlib 等）更新比较快，而网上找的一般都是旧版本的指导。同时
官方文档讲解更加全面，不过这过程中，要注意提高自身英语水平！

### “思维冥想体”

> **地阶**

运用万能学习方法，去复现一个学习（复现代码）过程，**复盘**bug 之前的工作，来从中找出可能有哪些细节会导致出现该 bug。

> **天阶**

按照思路重写代码！再不行重装系统！

重构，让你的代码更优美和简洁~

重装，让你的世界焕然一新~

## 三、多记录多总结多仔细

> bug 遇见的多了，也就由“形同陌路”转变为“日久生情”了!
> 良好的编程习惯加快解决速度

做事情还是粗心，百分之九十的 bug 都来源于粗心，

## 四、持续补充

- 在利用搜索引擎找到解决办法时候，不要 **吃着嘴里的，想着锅里的** ，找到一个办法，先将其解决办法看懂看透彻，不要这个方法还没看透彻就看下一个答案。
- 学会提取关键词来搜索，能提高很大效率