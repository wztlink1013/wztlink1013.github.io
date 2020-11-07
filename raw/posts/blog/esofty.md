---
title: JAVA-基础知识
categories: [Language]
date: 2020-01-16 14:15:47
description: "关于Java、基本数据类型、三大结构、方法、数组"
---

## 一、关于 JAVA

### Java 和 C 和 C++

1. c 是面向过程的语言。c++和 Java 都是面向对象的。在 c 中没有类或者对象的概念。
1. java 运行在虚拟机上，号称与平台无关。也就是你开发的 java 程序无论是 unix，linux 还是 windows 都可以正常运行。但是实际上这是一个良好的愿望，实际跨平台时还会有各种各样的问题。c 和 c++都是直接编译成可执行文件，是否能跨平台主要看你用到的编译器特性是否有多平台支持。
1. 因为 c 和 c 是直接编译成可执行文件，所以运行效率要比 java 高。至于 c 和 c 哪个更快，两种语言的拥趸已经吵了很多年。
1. java 因为是运行在虚拟机上，不需要考虑内存管理和垃圾回收机制。也是就你可以声明一个对象而不用考虑释放他，虚拟机帮你做这事情。而 c 和 c 语言本身没有多少内存管理的概念，写 c 和 c 程序如果用到指针就一定要考虑内存申请和释放。内存泄漏是 c 和 c++最头疼的问题。
1. 代码重用：java 中有一个根类 object，所有的类都是其子类，通过这种方式将容器和算法分离，实现一种操作作用于多种对象，提高代码重用。c 中没有总根对象，但是 c 提供了另一个更强大的功能“模板”，同样高效地实现了一种操作作用于多种对象，提供了高效的代码重用方法。
1. 数据结构：java 内建了丰富的数据结构：列表，集合等等（很久没用 java 了，有些记不太清）。而 c++则用“模板”同样提供了各种数据结构（容器）。
1. c 语言在一些比较低层，和硬件打交道的地方用得比较多。另外很多开源软件由于 unix/linux 开发习惯也大多采用 c 来开发。Java 是现在最流行的开发语言，c++比起 java 稍稍不那么流行一些，但是功能很强大。如能深入掌握，可以写出兼顾效率和美观的优秀代码。

### 多语言简略对比

> **Ideas are cheap, show me the code**   学到了，学到了~

```
代码块：python通过缩进来确定代码块
复数：java、python有，C、Cplusplus没有
python：相对于java，python就是java的压缩版本
包、接口、API：我觉得java也好，python也好，正是因为这些模块组件化，才使得这些语言好很好的的健壮性
```

## 二、数据类型；运算符；表达式

### 基本数据类型

1. 常量
1. 标识符和变量
1. 数据类型：**JAVA 中除了下面 8 种数据类型其他的都是以对象（或者说类的实例）存在的**

\*\*

> - string：要熟悉常用的函数
> - boolean（java 中需要全部写出来）：会打印出来`true` `false`
> - 数值型

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686524193-b62199d3-9dc6-4caa-a3c1-2484c7d6185c.png#align=left&display=inline&height=204&margin=%5Bobject%20Object%5D&originHeight=583&originWidth=1192&size=0&status=done&style=none&width=418)

\_

> _关于 byte 数据类型的二进制运算：反码、补码、原码_

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686523775-71b931fb-886e-4438-99b4-e78973f270de.png#align=left&display=inline&height=277&margin=%5Bobject%20Object%5D&originHeight=466&originWidth=650&size=0&status=done&style=none&width=386)

### 运算符和表达式

- 赋值语句，赋值表达式
- 输入输出：**输入输出，要有记得清除的空间，close 的意识！**

```java
// 方式一
import java.util.Scanner;

Scanner input = new Scanner(System.in);
double radius = input.nextDouble();

// 方式二 : 好处就是避免项目工程中类当中重名的情况
java.util.Scanner input = new java.util.Scanner(System.in);
double radius = input.nextDouble();
```

- 数值运算符

  > +、-、\*、/、%

- 逻辑运算符
  `&&` `||` `!` `^`(异或：相同才为假)
  `&` `|` `^` 位运算符：会先化成二进制对二进制码进行分析
- 运算符的优先级

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686523840-d1395ecf-7d3c-416b-8ce8-5d11a0e3f313.png#align=left&display=inline&height=302&margin=%5Bobject%20Object%5D&originHeight=552&originWidth=543&size=0&status=done&style=none&width=297)

## 三、程序三大基本结构

### 顺序结构

### 选择结构

- if(){} else{}
- switch

```java
public class Test {
   public static void main(String args[]){
      //char grade = args[0].charAt(0);
      char grade = 'C';

      switch(grade)
      {
         case 'A' :
            System.out.println("优秀");
            break;
         case 'B' :
         case 'C' :
            System.out.println("良好");
            break;
         case 'D' :
            System.out.println("及格");
            break;
         case 'F' :
            System.out.println("你需要再努力努力");
            break;
         default :
            System.out.println("未知等级");
      }
      System.out.println("你的等级是 " + grade);
   }
}
```

- **条件表达式**

```java
System.out.println((num % 2 == 0) ? "num is even" : "num is odd");
```

### 循环结构

- while () {}
- do {} while ();
- for () {}
- 关于 break（跳出该级别的 for 循环）和 continue（后面的语句不读）
- 关于 return

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686523958-c57b6b4d-e802-44e1-adc6-276167476c3d.png#align=left&display=inline&height=236&margin=%5Bobject%20Object%5D&originHeight=328&originWidth=530&size=0&status=done&style=shadow&width=381)

- 关于**增强的 for 循环**，在模板章节，配合 vector 使用，并发控制，高效使用

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686523773-6d1af202-9aa9-4789-b931-b0671aac432f.png#align=left&display=inline&height=255&margin=%5Bobject%20Object%5D&originHeight=781&originWidth=1128&size=0&status=done&style=none&width=369)
缺点：看不见索引

## 四、方法

## 五、一维数组

### 创建

```java
double [] array; // 声明数组方式一
double array []; // 生命数组方式二
```

创建好编译器会有初始值
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686523691-98e6140a-a9e1-4218-9589-dc55ff35ed67.png#align=left&display=inline&height=79&margin=%5Bobject%20Object%5D&originHeight=240&originWidth=895&size=0&status=done&style=shadow&width=293)

### 初始化

```java
double [] array = new double[10]; // 生命数组并且初始化数组大小
double [] array = {1.9, 2.9, 3.4, 3.5}; // 用值初始化数组
```

### 相关属性

> 是一个对象，有自己的属性自己的方法

String 里面长度 length 有()，也就是 String 里面是方法，而数组没有括号()（写成 array.length），理解为成员变量/属性，而不是方法（封装好了许多功能，体现出语言优越性）

### 相关操作

- [x] Initializing arrays with input values

```java
java.util.Scanner input = new java.util.Scanner(System.in);
for (int i=0;i<mylist.length;i++)
    mylist[i] = input.nextDouble();
```

- [x] Initializing arrays with random values

```java
for (int i = 0; i < myList.length; i++) {
  myList[i] = Math.random() * 100;
}
```

- [x] Printing arrays

```java
for (int i = 0; i < myList.length; i++) {
  System.out.print(myList[i] + " ");
}
```

- [x] Summing all elements

```java
double total = 0;
for (int i = 0; i < myList.length; i++) {
  total += myList[i];
}
```

- [x] Finding the largest element

```java
double max = myList[0];
for (int i = 1; i < myList.length; i++) {
  if (myList[i] > max) max = myList[i];
}
```

- [ ] Finding the smallest index of the largest element
- [x] Random shuffling

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686524154-f90809c6-aaae-46bf-b892-5e6f9ed63f50.png#align=left&display=inline&height=502&margin=%5Bobject%20Object%5D&originHeight=502&originWidth=1168&size=0&status=done&style=shadow&width=1168)

- [x] Shifting elements

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686523785-4984f380-9ca1-4e26-94c5-9c7de0a9c9a1.png#align=left&display=inline&height=470&margin=%5Bobject%20Object%5D&originHeight=470&originWidth=1164&size=0&status=done&style=shadow&width=1164)

### 数组的值传递

> **java 核心知识点之一**

数组名（数组地址）作为函数参数

java 当中是**值传递**的，没有引用没有指针的概念，所以在做函数参数当中，一直都是值传递，python 也是。

### Array 类

> import java.util.Arrays;

- [x] Array 类中常用的函数
  > sort()、parallelSort()、fill()、toString()、binarySearch()（Binary Search 二分查找（事先得排好序））、equals()

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686524086-a8d0a2b1-81e5-4045-8cdf-21b40f26c53e.png#align=left&display=inline&height=224&margin=%5Bobject%20Object%5D&originHeight=488&originWidth=1225&size=0&status=done&style=shadow&width=562)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598686524588-f9bcf764-f194-42b9-9c16-3e1676e8964e.png#align=left&display=inline&height=593&margin=%5Bobject%20Object%5D&originHeight=736&originWidth=662&size=0&status=done&style=shadow&width=533)

## 六、多维数组

### 二维数组的创建、初始化

```java
dataType[][] refVar = new dataType[10][10];

int[][] array = {
  {1, 2, 3},
  {4, 5, 6},
  {7, 8, 9},
  {10, 11, 12}
};
```

> 数组长度的计算

```
array.length = 4
array[0].length = 3

array[4].length ==> ArrayIndexOutOfBoundsException
```

### 二维数组的相关操作

- [x] Initializing arrays with input values

```java
java.util.Scanner input = new Scanner(System.in);
System.out.println("Enter " + matrix.length + " rows and " +
  matrix[0].length + " columns: ");
for (int row = 0; row < matrix.length; row++) {
  for (int column = 0; column < matrix[row].length; column++) {
    matrix[row][column] = input.nextInt();
  }
}
```

- [x] Initializing arrays with random values

```java
for (int row = 0; row < matrix.length; row++) {
  for (int column = 0; column < matrix[row].length; column++) {
    matrix[row][column] = (int)(Math.random() * 100);
  }
}
```

- [x] Printing arrays

```java
for (int row = 0; row < matrix.length; row++) {
  for (int column = 0; column < matrix[row].length; column++) {
    System.out.print(matrix[row][column] + " ");
  }

  System.out.println();
}
```

- [x] Summing all elements

```java
int total = 0;
for (int row = 0; row < matrix.length; row++) {
  for (int column = 0; column < matrix[row].length; column++) {
    total += matrix[row][column];
  }
}
```

- [x] Summing all elements by column

```java
for (int column = 0; column < matrix[0].length; column++) {
  int total = 0;
  for (int row = 0; row < matrix.length; row++)
    total += matrix[row][column];
  System.out.println("Sum for column " + column + " is "
    + total);
}
```

- [x] Which row has the largest sum
- [x] Finding the smallest index of the largest element
- [x] Random shuffling

```java
for (int i = 0; i < matrix.length; i++) {
  for (int j = 0; j < matrix[i].length; j++) {
    int i1 = (int)(Math.random() * matrix.length);
    int j1 = (int)(Math.random() * matrix[i].length);
    // Swap matrix[i][j] with matrix[i1][j1]
    int temp = matrix[i][j];
    matrix[i][j] = matrix[i1][j1];
    matrix[i1][j1] = temp;
  }
}
```

### 多维数组

```java
double[][][] scores = {
  {{7.5, 20.5}, {9.0, 22.5}, {15, 33.5}, {13, 21.5}, {15, 2.5}},
  {{4.5, 21.5}, {9.0, 22.5}, {15, 34.5}, {12, 20.5}, {14, 9.5}},
  {{6.5, 30.5}, {9.4, 10.5}, {11, 33.5}, {11, 23.5}, {10, 2.5}},
  {{6.5, 23.5}, {9.4, 32.5}, {13, 34.5}, {11, 20.5}, {16, 7.5}},
  {{8.5, 26.5}, {9.4, 52.5}, {13, 36.5}, {13, 24.5}, {16, 2.5}},
  {{9.5, 20.5}, {9.4, 42.5}, {13, 31.5}, {12, 20.5}, {16, 6.5}}
};

```
