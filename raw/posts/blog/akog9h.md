---
title: JAVA-抽象类和接口
categories: [Language]
date: 2020-09-22 20:45:47
description: JAVA-抽象类和接口
---

## 概念名词

- **接口**：许多类的**共同行为**（包含非相关类），就当与给客户看的。
- **抽象类**：就相当于一个父类，该父类包含其子类的**共性**特征，就像是子类园和子类长方形，两个类可以有一个共同的父类，该父类定义为抽象类，其包含一个**抽象方法**，比如求面积或是求周长

## 接口的一些要点

> `public interface List<E> { }`

- 接口是一个**写注释**的好地方

## 抽象类的一些要点

> `public abstract class AbstractList<E> implements List<E> { }` > `public abstract class Test(){}` > `public abstract double getTest(){}`

- 抽象类当中的**抽象方法**要在其子类当中实现，因为抽象类“抽象”的以至于没有实例
- 包含抽象方法的类必定是抽象类
- **抽象类的构造函数实现要加上 protected，因为其构造函数只被其子类所使用，在创建子类实例的时候，其父类构造函数被调用来初始化该父类的数据域**
- **抽象类不可以 new 对象，不对外公开，只抽取公共代码，eg：ArrayList 和 LinkedList**
- **抽象类可以不是先接口里面的部分函数**
- **抽象类作用：放“公共代码”**

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686636557-2700f743-9f28-435a-b771-86bdf7b2b25c.png#align=left&display=inline&height=326&margin=%5Bobject%20Object%5D&originHeight=574&originWidth=732&size=0&status=done&style=shadow&width=416)
