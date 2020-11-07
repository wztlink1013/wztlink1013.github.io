---
title: 分治算法+归并排序
date: 2020-10-23 23:22:00
categories: Algorithm
description: 分治算法+归并排序
---

## 分治算法

此前学习的**递归设计方法**，是针对规模大的问题拆成规模小的问题，并且规模大的问题和规模小的问题的解决办法相同。

分治算法与递归设计方法的不同之处就是，该规模较大的问题分解为多个不重叠的子问题，并将其称为**“分而治之”**
\*\*
分治的三个步骤：

1. 分解：将原问题分解为若干个规模较小、相互不重叠与原问题形式相同的子问题
1. 解决：
   1. 若子问题规模较小且易于解决时候直接解出
   1. 否则递归地解决各个子问题
1. 合并：将各个子问题的解个并未原问题的解

## 归并排序

### 问题分析

- 分解：将排序数组分解为左右两个相等的不重叠的数组
- 解决：递归
- 合并：将两个已经有序的数组合并为一个有序的数组

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603617542157-07613fda-ebed-4924-bf6a-091c19b12fc7.png#align=left&display=inline&height=431&margin=%5Bobject%20Object%5D&name=image.png&originHeight=861&originWidth=895&size=74826&status=done&style=shadow&width=447.5)

### 代码实现
