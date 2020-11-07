---
title: 递归+子集问题
date: 2020-09-15 18:58:00
categories: Algorithm
description: 递归+子集问题
---

## 一、递归

### 算法特点

适用于递归解决的问题通常有两个特点：

1. 递归性：能将规模为 n 的问题简化为 n-1 的问题，并且规模为 n 的问题和规模为 n-1 的问题性质一样
1. 可终结性：不能无限递归下去，小到一定程度能够得出结果

> eg：前 n 个自然数的和、n 个数之和这两个问题就可以用递归来解决

### 递归和迭代

递归问题也可以用迭代方式来解决（循环），这过程中，有一些普遍的特点就是：

1. 递归问题有较好的直觉性
1. 迭代运行过程中调用太多的栈空间，因而运行效率相对优于递归

## 二、问题描述

给定一个正整数 n，生成集合 {1,2,3,…n} 的所有子集

## 三、问题思路

> 思路一：二进制法

利用**二进制**“**是否显现”**的转换思路来解决这个问题，一个数字在子集当中就标记为 1 反之标记为 0，就比如 `n=3` ，输出： `{}{1,0,0}{0,1,0}{0,0,1}{1,1,0}{1,0,1}{0,1,1}{1,1,1}`

## 四、代码思路

> 思路一：利用动态数组数据结构

输入的 n 就是动态数组的初始大小
然后依次利用“吞进来”和“吐出去”尾元素来实现

## 五、代码实现

```java
package com.wztlink1013.al._递归法_;
/*
 * 作用：测量代码运行时间
 */
import java.text.SimpleDateFormat;
import java.util.Date;

public class Times {
    private static final SimpleDateFormat fmt = new SimpleDateFormat("HH:mm:ss.SSS");

    public interface Task {
        void execute();
    }

    public static void test(String title, Task task) {
        if (task == null) return;
        title = (title == null) ? "" : ("【" + title + "】");
        System.out.println(title);
        System.out.println("开始：" + fmt.format(new Date()));
        long begin = System.currentTimeMillis();
        task.execute();
        long end = System.currentTimeMillis();
        System.out.println("结束：" + fmt.format(new Date()));
        double delta = (end - begin) / 1000.0;
        System.out.println("耗时：" + delta + "秒");
        System.out.println("-------------------------------------");
    }
}
```

```java
package com.wztlink1013.al._递归法_;

import java.util.ArrayList;

/**
 * 子集问题
 */
public class SubSetting {
    static ArrayList<Integer> x  = new ArrayList<Integer>();
    static int cnt = 0;
    public static void main(String args[]) {
        int n = 4;
        Times.test("当n = " + n + "时候的耗费时间", new Times.Task() {
            public void execute() {
                Subsetting(n);
            }
        });
    }

    private static void Subsetting(int n) {
        if (n > 0) {
            x.add(0);
            Subsetting(n - 1);
            x.remove(x.size() - 1);
            x.add(1);
            Subsetting(n - 1);
            x.remove(x.size() - 1);
        }else {
            OutputOneSubsetBinary();
            OutputOneSubset();
            System.out.print("\n");
        }
    }

    private static void OutputOneSubset() {
        System.out.printf("; {");
        int k = 0;
        for (int i = x.size() - 1; i >=0; i--) {
            if (x.get(i) == 1) {
                if (k > 0)
                    System.out.printf(",");
                System.out.printf("%d", x.size() - i);
                k++;
            }
        }
        System.out.printf("}");
    }

    private static void OutputOneSubsetBinary() {
        System.out.printf("%010d: ", ++cnt);
        for (int i = x.size() - 1; i >= 0; i--)
            System.out.printf("%d", x.get(i));
    }
}
```

运行结果：

> n：18（分钟）

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600319992252-d49865a4-9a9d-4c65-88c8-ea72f140bf85.png#align=left&display=inline&height=219&margin=%5Bobject%20Object%5D&name=image.png&originHeight=438&originWidth=1920&size=146634&status=done&style=none&width=960)

> n：19（分钟）

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600320121635-ea76638e-a4c2-4686-a017-0d97088dc417.png#align=left&display=inline&height=190&margin=%5Bobject%20Object%5D&name=image.png&originHeight=380&originWidth=1920&size=140804&status=done&style=none&width=960)

> n：20（分钟）

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600320284010-b885d1eb-01da-40d9-a098-f5d84744d847.png#align=left&display=inline&height=196&margin=%5Bobject%20Object%5D&name=image.png&originHeight=392&originWidth=1920&size=144176&status=done&style=none&width=960)

> n：21（分钟）

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600320620721-cf61057d-1eac-48d3-b724-36d0d21c4d1e.png#align=left&display=inline&height=160&margin=%5Bobject%20Object%5D&name=image.png&originHeight=319&originWidth=1920&size=129722&status=done&style=none&width=960)

> n：22（分钟）

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600321218265-60888e51-2006-4dd7-bbe0-60b336895b8c.png#align=left&display=inline&height=173&margin=%5Bobject%20Object%5D&name=image.png&originHeight=345&originWidth=1920&size=131717&status=done&style=none&width=960)

> n：23（分钟）

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600329834700-9cb11fdc-fec8-463d-934a-b140b45cc0ae.png#align=left&display=inline&height=193&margin=%5Bobject%20Object%5D&name=image.png&originHeight=386&originWidth=1920&size=146130&status=done&style=none&width=960)

> 网上查的代码！

```java
class Main
{
    static void printSubsets(String[] set)
    {
        int n = set.length;
        for (int i = 0; i < (1<<n); i++)
        {
            System.out.print("{ ");
            for (int j = 0; j < n; j++)
                if ((i & (1 << j)) > 0)
                    System.out.print(set[j] + " ");
            System.out.println("}");
        }
    }
    public static void main(String[] args)
    {
        String[] set = {"1", "2", "3", "4",
                        "5", "6", "7", "8"};
        printSubsets(set);
    }
}
```
