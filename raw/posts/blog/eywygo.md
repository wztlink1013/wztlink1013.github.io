---
title: JAVA-面向对象
categories: [Language]
date: 2020-02-16 14:45:47
description: "面向对象"
---

## 一、面向对象思考

### 思想

> 就像是手工设计动态数组、链表等数据结构一样，要用**设计**这个字眼去面向对象思考。
> 同时还要关注类与类之间的关系有关联、聚集、组合，在设计多个类的过程中要有这些意识

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600086611076-d83aa284-7977-447d-9b25-0a0a67a12c3f.png#align=left&display=inline&height=189&margin=%5Bobject%20Object%5D&name=image.png&originHeight=377&originWidth=1003&size=316078&status=done&style=shadow&width=501.5)

### 基本数据类型值及其包装类

> 都存在 java.lang 里面

Integer、Long、Float、Double、Boolean、Character、Short、Byte
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600087287006-c480d8fd-a6b5-4be9-bc43-3023e9fa4a0c.png#align=left&display=inline&height=264&margin=%5Bobject%20Object%5D&name=image.png&originHeight=527&originWidth=989&size=482466&status=done&style=stroke&width=494.5)

> 基本数据类型和其对象化之后的包装类类型之间的自动转换

`Integer intObject = new Integer (2);`  等价于 `Integer intObject = 2;`

> BigInteger 类和 BigDeciml 类用于表示任意大小和精度的整数或是二进制数

## 二、对象和类

### OOP 阶梯图

> “OOP 阶梯图”—— 类的多个特性，同时以对象对基础

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686636493-3aecdbf5-1f94-4076-99dc-0ef0dac07331.png#align=left&display=inline&height=284&margin=%5Bobject%20Object%5D&originHeight=726&originWidth=1328&size=0&status=done&style=shadow&width=520)

### 类的组成

> 数据域、构造函数、方法（C++里面的说法是数据成员和成员函数）
> **类中不能存在可执行语句**

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686636459-572d60ff-0740-4487-b3fd-9e2fa94b643f.png#align=left&display=inline&height=248&margin=%5Bobject%20Object%5D&originHeight=713&originWidth=1387&size=0&status=done&style=shadow&width=482)

### 构造函数

- 和类同名、重载、没有返回值

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686636454-ce95b4aa-9966-4024-82ae-b7cc296097db.png#align=left&display=inline&height=218&margin=%5Bobject%20Object%5D&originHeight=481&originWidth=708&size=0&status=done&style=shadow&width=321)

- **构造函数初始化优先级**
  > 1. 静态成员变量初始化顺序高于非静态成员变量
  > 1. 成员变量的初始化顺序优于构造函数
  > 1. 静态成员变量只初始化一次，就是第一次被访问的时候
  > 1. 存在多个静态成员变量的时候，按照次序依次执行

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686636495-c0c2fdf5-3919-475e-a2f7-a3888d97492d.png#align=left&display=inline&height=220&margin=%5Bobject%20Object%5D&originHeight=700&originWidth=1404&size=0&status=done&style=shadow&width=441)

```java
Window(2)
Window(1)
Window(2)
Window(3)
House()
Window(33)
f()
```

### 数据域的默认值

> **对于对象而言，不赋值也会有默认的**。之前的数组就是如此

各个数据域按照之前的基本上的默认初值，如果是其他的类型，则空

### 对象的创建和访问

> 1. 通过引用变量来访问对象，创建的类的对象被内存分配了内存空间，可以用引用变量来访问
> 1. **对象类型都需要用 new 来新建**

```java
ClassName objectRefVar = new ClassName();

Circle myCircle = new Circle();
```

**使用成员变量和成员函数**

```java
mycircle.radius
mycircle.getArea()
```

**调用静态函数，动态函数需要在自己类下面调用自己的函数**

### “炸宿舍”

> 关于老师提出来的炸宿舍例子

**对象间的赋值和基本类型的赋值，能改变的一定是基本数值类型，所谓的数组名抑或是对象名，都只是地址映射**

### 垃圾回收机制和 this

```java
System.gc(); // 提醒垃圾回收
```

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600086346479-3cc546b6-dab8-4fc5-a352-8f2fb2ea8065.png#align=left&display=inline&height=281&margin=%5Bobject%20Object%5D&name=image.png&originHeight=562&originWidth=960&size=48667&status=done&style=shadow&width=480)

### 静态变量、常量和方法

> 静态成员变量：静态成员变量可以被类的所有实例共享（比如计数变量用到）
> 静态方法：不能访问类的实例成员
> 关于静态变量、静态方法、实例变量、实例方法

### 可见性修饰符

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686637158-0b08a6a1-5cd8-4aac-9133-1ad101cc8a52.png#align=left&display=inline&height=302&margin=%5Bobject%20Object%5D&originHeight=302&originWidth=491&size=0&status=done&style=stroke&width=491)

### “析构函数”

```java
protected void finalize() throwsable {
    super.finalize();
    System.out.println("Person - finalize");
}
```

### 内部类

内部类只给该类使用（私有自己用，同时写静态的），就如 LinkedList 类的设计

##
