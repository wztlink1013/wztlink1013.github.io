---
title: 🧙‍♂️算法分析与设计
date: 2020-08-31 18:40:06
categories: Algorithm
description: 大三上《算法分析与设计》🧙‍♂️
---

## 形式化定义

对于一个问题，将其进行科学的分析研究，就需要对其进行更加严谨的形式化定义，其形式就类似于数学建模过程中的构建出**数学模型**一样，对其进行问题的抽象化提取，以及合理的公式化，就比如“0-1 背包”问题中：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600597354257-45eba2b3-641c-433a-8732-9b6c11a16061.png#align=left&display=inline&height=281&margin=%5Bobject%20Object%5D&name=image.png&originHeight=561&originWidth=1065&size=184609&status=done&style=shadow&width=532.5)

## 判定性问题

类似于数学建模当中**模型的求解**，在给定模型以及约束条件的情况下求出符合该约束条件下的模型解：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600597489691-e0d838af-003e-404e-8a40-5145d2fefbad.png#align=left&display=inline&height=108&margin=%5Bobject%20Object%5D&name=image.png&originHeight=216&originWidth=969&size=73465&status=done&style=shadow&width=484.5)

##

## eg：Euclid-GCD 问题

### 问题描述

将每个整数分解为素因子的积，找出公共的素因子，它们的积即是 GCD

### 问题思路

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1599360897754-ab7b7684-5565-471b-aece-1725b39196bb.png#align=left&display=inline&height=296&margin=%5Bobject%20Object%5D&name=image.png&originHeight=848&originWidth=1131&size=231186&status=done&style=shadow&width=395)

### 代码实现

```java
package com.wztlink1013.al.EuclidGCD;
import java.util.Scanner;

public class Main {
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);

        System.out.println("请输入两个大于零的自然数：");
        int a = input.nextInt();
        int b = input.nextInt();
        GCD(a,b);
        System.out.println(a + "和" + b + "两个数的GCD值为：" + GCD(a,b));
    }
    public static int GCD(int i, int j){
        int r;
        while (j != 0){
            r = i%j;
            i = j;
            j = r;
            System.out.println("a="+i+"；b="+j+"；r="+r);
        }
        return i;
    }
}

```

##
