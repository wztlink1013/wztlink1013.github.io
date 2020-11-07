---
title: JAVA-常用类
date: 2020-09-14 20:11:00
categories: Language
description: 总结java当中常用的类
---

## java.util.Date

```java
java.util.Date date = new java.util.Date();
System.out.println(date.toString());
```

```
Sun Mar 09 13:50:19 EST 2020
```

## java.util.Random

> Math.Random()：Math 类里面的随机数函数，范围是 0.0 到 0.1

> java.util.Random

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600085762621-35c72adc-6c6e-4ab2-ac8b-d76d50e570e5.png#align=left&display=inline&height=176&margin=%5Bobject%20Object%5D&name=image.png&originHeight=352&originWidth=899&size=45653&status=done&style=shadow&width=449.5)

## javafx.geometry.Point2D

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600086091697-6fa8f4e4-137d-490a-8fe0-3546693a1f86.png#align=left&display=inline&height=103&margin=%5Bobject%20Object%5D&name=image.png&originHeight=206&originWidth=960&size=115357&status=done&style=shadow&width=480)

```java
import java.util.Scanner;
import javafx.geometry.Point2D;
public class TestPoint2D {
public static void main(String[] args){

    Scanner input= new Scanner(System.in);
    System.out.println("Enter point1's x-,y-coordinates:");
    double x1=input.nextDouble();
    double y1=input.nextDouble();
    System.out.println("Enter point2's x-,y-coordinates:");
    double x2=input.nextDouble();
    double y2=input.nextDouble();
    Point2D p1 =new Point2D(x1,y1);
    Point2D p2 =new Point2D(x2,y2);
    System.out.println("p1 is"+p1.toString());
    System.out.println("p2 is"+p2.toString());
    System.out.println("distance is"+p1.distance(p2));
    }
}
```

```
Enter point1's x-,y-coordinates:
1 2
Enter point2's x-,y-coordinates:
3 4
p1 isPoint2D [x = 1.0, y = 2.0]
p2 isPoint2D [x = 3.0, y = 4.0]
distance is2.8284271247461903
```

## String 和 StringBuilder 和 StringBuffer

## Object

### toString()方法

### equals()方法

> 默认实现的方法

```java
public boolean equals(Object obj) {
    return (this == obj);
}
```

> 重写例子

```java
public boolean equals(Object obj) {
    if (o instanceof Circe)
        return radius == ((Circle)o).radius;
    else
        return this == o;
}
```
