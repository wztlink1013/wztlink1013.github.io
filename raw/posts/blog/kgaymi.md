---
title: 全排列问题
date: 2020-09-18 11:32:00
categories: Algorithm
description: 全排列问题
---

## 问题描述

给定 n 个有序元素的集合，列出其可能出现的排列。

## 问题思路

## 代码思路

- 利用动态数组数据结构

## 代码实现

```java
package com.wztlink1013.al._递归法_;
import java.util.ArrayList;

/**
 * 全排列问题
 * */

public class Permuting {
    static ArrayList<Integer> x  = new ArrayList<Integer>();
    static int N;
    static int cnt = 0;
    static int t;

    public static void main(String args[]) {
        int n = 10;
        Times.test("当n = " + n + "时候的耗费时间", new Times.Task() {
            public void execute() {
                PermutingCaller(n);
            }
        });
    }
    private static void PermutingCaller(int n) {
        N = n;
        for (int i = 0; i < n; ++i)
            x.add(i + 1);
        Permuting(0);
    }
    private static void Permuting(int i) {
        if (i < N - 1) {
            for (int j = i; j < N; j++) {
                t = x.get(i);
                x.set(i, x.get(j));
                x.set(j, t);
                Permuting(i + 1);
                t = x.get(i);
                x.set(i, x.get(j));
                x.set(j, t);
            }
        }
        else
            OutputOnePermutation();
    }
    private static void OutputOnePermutation()
    {
        System.out.print(++cnt + " : ");
        for (int x : x)
            System.out.print(x + " ");
        System.out.println();
    }
}
```

> n:10

> n
