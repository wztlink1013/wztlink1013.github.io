---
title: CNN(卷积)和GCN(离散卷积)
categories: MachingLearning
date: 2020-01-18 00:06:11
description: "CNN(卷积)和GCN(离散卷积)"
---

## 一、CNN

### 1. 卷积的理解

- 从数学角度来看，卷积就是一种运算，就好比是线性代数的内积、向量积等。
- 卷积分两种类型，一种是连续类型，一种是离散类型。
  ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686034538-58c8f110-943e-4194-8c80-f9465c4fde8e.png#align=left&display=inline&height=402&margin=%5Bobject%20Object%5D&originHeight=402&originWidth=453&size=0&status=done&style=none&width=453)

### 2. Examples

1. 离散卷积===掷骰子
   加入同时掷两个骰子，求骰子显现数之和为 4 的概率为多少？其实就是高中所学的排列组合问题，可以看作是卷积离散形式的显性表现形式。
1. 连续卷积===做馒头
   由于时间变化和食物腐败特性，做馒头的同时也会有馒头的腐败，给定相关数据，求一天之中腐败的馒头数量。

### 3. 卷积在计算机领域简单应用

- 降噪图像：将图像按照矩阵的形式表达为一个数据集，对目标的一个像素点，进行平均矩阵运算，此时的矩阵表达形式可以映射到卷积的数学表达形式。

## 二、GCN

卷积的区分：

- 数学运算当中的卷积：“”
- 深度学习里面的卷积

## 参考资料

- [如何通俗易懂地解释卷积？ - 马同学的回答 - 知乎](https://www.zhihu.com/question/22298352/answer/228543288)
- [解释一下卷积神经网络的卷积核？ - superbrother 的回答 - 知乎](https://www.zhihu.com/question/52237725/answer/545340892)
- [如何理解 Graph Convolutional Network（GCN）？-superbrother 的回答-知乎](https://www.zhihu.com/question/54504471/answer/332657604)
- [复杂网络的解释](https://www.cnblogs.com/maybe2030/p/4665847.html#top)
