---
title: 穷举+洗牌算法
date: 2020-09-17 13:34:00
categories: Algorithm
description: 穷举思想+洗牌算法的例子
---

## 穷举思想

穷举法就是针对问题可能出现的结果，对其逐个进行测验并得出是否为符合要求的结果，穷举法也是许多高级算法中的某个部分。有点像高中数学里面的对问题进行分类讨论的过程中，寻找所有的情况的异曲同工之处。

### 两部分组成

1. 系统化地枚举问题各种可能的候选解
1. 检查验证每一个候选解是否满足问题的求解要求

### 穷举的抽象算法伪代码

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1599469820927-b990d8a2-9025-4f33-becb-46a03890bf07.png#align=left&display=inline&height=323&margin=%5Bobject%20Object%5D&name=image.png&originHeight=645&originWidth=1097&size=223732&status=done&style=shadow&width=548.5)

## 问题描述

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1599475674143-ee86ef49-1b68-4940-baef-e556f225e43d.png#align=left&display=inline&height=297&margin=%5Bobject%20Object%5D&name=image.png&originHeight=594&originWidth=1056&size=159618&status=done&style=shadow&width=528)

## 问题思路

- 在 1~n-1 当中随机选择一个数 k1，将其与第 n 个数互换；
- 在 1~n-2 当中随机选择一个属 k2，将其与第 n-1 个数互换；
- 在第 i 轮之后，1~n-**(i-1)**当中选择一个数 ki，将其与第 n-**(i-1)**个数互换；

## 代码思路

- 在区间之间随机数的生成
- 交换函数
- 泛型：支持各种类型数据的“洗牌”

## 代码实现
