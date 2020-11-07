---
title: JAVA-继承和多态
categories: [Language]
date: 2020-09-22 19:45:47
description: JAVA-继承和多态
---

## extends 和 super

- **子类继承父类用关键字 `extends` **
- super 关键字作用有
  - 继承父类的构造函数
  - 构造方法链
  - 调用父类的方法（一般不怎么用）

## 方法重写和方法重载

> 方法重写注意要子类和父类的方法都得是一样的签名和返回类型

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600089343780-c8d0a28c-dc06-4aab-a331-9ac926a65498.png#align=left&display=inline&height=289&margin=%5Bobject%20Object%5D&name=image.png&originHeight=577&originWidth=764&size=325094&status=done&style=shadow&width=382)

为了避免编写程序过程中方法重载和方法重写的误用，使用**重写标注 `@Override`** 来区分，系统可以检查方法的正确性。

## Object 类

> java 中所有类都继承子 java.lang.Object 类，其中 toString 就是该类里面的方法之一，所有许多接口/类都会重写这个方法，手写的链表里面的该方法就是重写之后的方法

## 多态与动态绑定

> 多态

使用夫类对象的地方都可以使用子类对象。也就意味着父类的变量可以引用子类型的对象

> 动态绑定

如果定义了一个父类的对象，该对象调用了一个方法，该方法不存在父类当中，但是存在其父类下面的多个子类当中，那么这个方法调用的是哪个子类当中的该方法呢？JVM 有这么一个机制，从“辈分最小的类”依次往上找，第一个找到含有该方法的类，则调用该类当中的那个方法
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600138148812-5cc991ce-0577-4f01-b57c-bec631518a99.png#align=left&display=inline&height=109&margin=%5Bobject%20Object%5D&name=image.png&originHeight=217&originWidth=960&size=14420&status=done&style=shadow&width=483)
注：Cn 为父类，往后都是以此继承的子类

## 对象转换

> 向下转换与向上转换

```java
Object o = new Student(); // 可以：因为Student的实例也是Object的实例

Student a = o; // (o是Object对象)不可以：因为“级别”的不可逆

Student s = Student(o); //向上转换
```

> instanceof

如果一个对象不是 Student 实例，他就不能转换成 Student 类型的变量，会报错 `ClassCastException` 。因此，在此之前最好先确保该对象是另一个对象的实例，于是用到关键字 `instanceof`

```java
Object myObject = new Circle();
... // Some lines of code
/** Perform casting if myObject is an instance of Circle */
if (myObject instanceof Circle) {
  System.out.println("The circle diameter is " +
    ((Circle)myObject).getDiameter());
  ...
}
```

## @override

在重写父类的函数时，在方法前面加上[@Override ](https://www.yuque.com/Override) 系统可以帮你检查方法的正确性。
