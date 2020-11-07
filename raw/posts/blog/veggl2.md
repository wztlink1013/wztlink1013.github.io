---
title: ⏱算法复杂度
date: 2020-09-06 19:49:00
categories: Algorithm
description: 时间复杂度相关知识
---

## 一、算法优化方向

1. 用尽量少的存储空间
1. 用尽量少的执行步骤（执行时间）
1. 具体情况，具体分析（空间换时间，时间换空间）

## 二、时间复杂度

> 估算程序指令的执行次数（执行时间）

### 大 O 估算法

> 忽略常数、系数、低阶
> 常见的复杂度

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1599393633525-ae152fa4-ab52-4436-a91a-4237888491db.png#align=left&display=inline&height=220&margin=%5Bobject%20Object%5D&name=image.png&originHeight=440&originWidth=915&size=109404&status=done&style=shadow&width=457.5)
`Ο(1)＜Ο(logn)＜Ο(n)＜Ο(nlogn)＜Ο(n^2)＜Ο(n^3)＜…＜Ο(2^n)＜Ο(n!)<O(n^n)`

> 当数据规模较小的时候

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1599393701320-c1869593-be0a-4552-9b1c-8a6fb00d300c.png#align=left&display=inline&height=239&margin=%5Bobject%20Object%5D&name=image.png&originHeight=477&originWidth=813&size=162408&status=done&style=shadow&width=406.5)

> 当数据规模较大的时候

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1599395912246-1e996955-9150-4af1-b6d9-f7d15ce7d594.png#align=left&display=inline&height=253&margin=%5Bobject%20Object%5D&name=image.png&originHeight=597&originWidth=1004&size=174523&status=done&style=shadow&width=426)
[函数图像绘制工具](https://zh.numberempire.com/graphingcalculator.php)

## 三、空间复杂度

> 估算所需占用的存储空间

```
空间复杂度(Space Complexity)是对一个算法在运行过程中临时占用存储空间大小的量度。一个算法在计算机存储器上所占用的存储空间，包括存储算法本身所占用的存储空间，算法的输入输出数据所占用的存储空间和算法在运行过程中临时占用的存储空间这三个方面。算法的输入输出数据所占用的存储空间是由要解决的问题决定的，是通过参数表由调用函数传递而来的，它不随本算法的不同而改变。存储算法本身所占用的存储空间与算法书写的长短成正比，要压缩这方面的存储空间，就必须编写出较短的算法。算法在运行过程中临时占用的存储空间随算法的不同而异，有的算法只需要占用少量的临时工作单元，而且不随问题规模的大小而改变，我们称这种算法是“就地\"进行的，是节省存储的算法，如这一节介绍过的几个算法都是如此；有的算法需要占用的临时工作单元数与解决问题的规模n有关，它随着n的增大而增大，当n较大时，将占用较多的存储单元，例如将在第九章介绍的快速排序和归并排序算法就属于这种情况。

如当一个算法的空间复杂度为一个常量，即不随被处理数据量n的大小而改变时，可表示为O(1)；当一个算法的空间复杂度与以2为底的n的对数成正比时，可表示为0(10g2n)；当一个算法的空I司复杂度与n成线性比例关系时，可表示为0(n).若形参为数组，则只需要为它分配一个存储由实参传送来的一个地址指针的空间，即一个机器字长空间；若形参为引用方式，则也只需要为其分配存储一个地址的空间，用它来存储对应实参变量的地址，以便由系统自动引用实参变量。
```

[参考：算法的时间复杂度和空间复杂度-总结](https://blog.csdn.net/zolalad/article/details/11848739)

## 最好最坏复杂度

## 均摊复杂度

## 复杂度震荡

## 平均复杂度

##
