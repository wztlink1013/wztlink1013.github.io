---
title: java-数组越界和格式输出
categories: Bug
date: 2020-03-22 18:03:46
description: java数组越界println；print；printf小总结
---

## 一、数组越界

```
java.lang.ArrayIndexOutOfBoundsException
```

在进行判断条件的时候，注意 java 当中的数组“尾巴”不要溢出，数组 arr 的合法错误范围是[0, arr.length-1]

> - 解决办法
> - ①debug 看数组的尾巴部分输出情况【数组空间小的情况】
> - ② 打印出遍历数组的索引值【通法】

回顾 java 初始化数组的方式：

- 静态初始化：初始化时由程序员显式指定每个数组元素的初始值，有系统决定数组的长度

> arrayName = new type[]{element1,element2,element3...}

```
int[] intArr;
intArr = new int[]{1,2,3,4,5,9};
或者
String[] strArr = {"one","two","three"};
```

- 动态初始化：初始化时由程序员指定数组的长度，由系统初始化每个数组元素的默认值

> arrayName = new type[length];

```
int[] price = new int[4];
```

## 二、printf；println；print

- printf：遇到浮点型数值，继承 C 语言里面的使用，**格式化**输出（注意，参数顺序）
- print：就是一般的标准输出，但是不换行
- println：比 print 多的就是最后会换行

```java
int i = 4;
double j = 5;
System.out.print("用print输出i:"+ i);
System.out.println( "用println输出i:"+ i);
System.out.printf("i的值为%d,j的值为%f", i,j);
```

```java
用print输出i:4用println输出i:4
i的值为4,j的值为5.000000
```

- printf 补充

> `%.2f`的意思是输出两位小数点
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602926246151-1730c963-0816-46d1-bd3d-3a5cc7b30403.png#align=left&display=inline&height=589&margin=%5Bobject%20Object%5D&originHeight=589&originWidth=1162&size=0&status=done&style=none&width=1162)
