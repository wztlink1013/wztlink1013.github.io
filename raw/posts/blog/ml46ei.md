---
title: 👨‍💻编程习惯
date: 2020-05-22 18:40:06
thumbnail: https://cdn.jsdelivr.net/gh/wztlink1013/ImgHsoting/pic1/20200710124042.png
categories: Bug
description: 养成良好的编程习惯
---

## 一、代码

### 命名规范

- 项目：小写字母 `datastructure`
- 包：`com.公司名.项目名.模块名....`（其中模块名可以按照功能/逻辑来分）
- 类：全部首字母大写，一般驼峰式命名 `public class TestBan{}`
- 常量：全部大写字母 `String RE_PRI = ‘wztlink’`
- 变量：下划线方式  `int pri_const`
- 方法：首字母小写，如果有多个单词，单词首字母大写 `public void toString(){}`

> - 好的命名以及编程习惯：① 小/大驼峰命名 ② 匈牙利命名 ③ 下划线命名
> - [https://blog.csdn.net/ZCF1002797280/article/details/51495229](https://blog.csdn.net/ZCF1002797280/article/details/51495229)
> - [https://blog.csdn.net/z_h_s/article/details/24007249](https://blog.csdn.net/z_h_s/article/details/24007249)

### 注释规范

> 文件注释

```java
  / *
    * 文件名：[文件名]
    * 作者：〈版权〉
    * 描述：〈描述〉
    * 修改人：Wu ZuTao
    * 修改时间：2020-06-06
    * 修改内容：新增X方法
    * 修改人：Wu ZuTao
    * 修改时间：2020-07-01
    * 修改内容：修改B模块
	* /
```

> 类和接口注释

类和接口的注释：该注释放在 class 定义之前，using 或 package 关键字之后。

```java
package com.wztlink.xxx;
/**
  * 注释内容
  */
public class XxxManager
```

```java
/ *
  * 〈一句话功能简述〉
  * 〈功能详细描述〉
  * @author [作者]
  * @version [版本号, YYYY-MM-DD]
  * @see [相关类/方法]
  * @since [产品/模块版本]
  * @deprecated
  */
```

> 方法

```java
 /**
    * 类方法的详细使用说明
    *
    * @param 参数1 参数1的使用说明
    * @return 返回结果的说明
    * @throws 异常类型.错误代码 注明从此类方法中抛出异常的说明
    */
```

> 方法内部、属性、必要语句

```java
// 注释内容
private String logType
```

> 注意事项

- 边写代码边注释，修改代码同时修改相应的注释，以保证注释与代码的一致性。不再有用的注释要删除。
- 避免在注释中使用缩写，特别是不常用缩写。说明：在使用缩写时或之前，应对缩写进行必要的说明。 注释应该放在被注释的代码前面，分行展示，但中间不留空行。
- [javadoc 使用规范](https://blog.csdn.net/vbirdbest/article/details/80296136)

### 函数

主入口函数和其他功能函数分开，如果是功能性函数，全部放到一个 `Tools`  函数里面

### 类

不要在自己类下定义自己的对象

## 二、项目

### 解决写不出代码的方法

> 1、先分析实现的思路

拿到作业，按照要实现的功能，先分析去实现的思路。
如果完全不知道该怎么去实现，一头雾水，最好先看看其他人事如何实现的，或者与老师或同学讨论。
重点是要找到解决问题的办法，理清实现的思路。
如果自己能想出几步来，那就先把这几步记录下来，然后重复上面的步骤。

> 2、把实现的思路边分析边记录下来。

在分析实现思路的时候，边分析，边写出来，使用中文写，写得详细点。
如果在编程工具里面写的话，直接写成注释，比如：
第一步是要干上面
第 1.1 要做什么
第 1.2 要做什么
第二步是要干上面
第 2.1 要做什么
第 2.2 要做什么
...以此类推
遇到写不下去的地方，先看看是没有思路还是前面的思路没有想清楚
如果是没有思路了，参见第一条处理。
如果是前面的思路没有想清楚，那就返回来重新思考，一定要考虑明白。
这其实也是这个方法一个额外的好处，那就是能强迫你思考，并进行细致考虑。

> 3、写实现代码

如果思路整理清楚了，实现思路的步骤也整理好了，这个时候再写代码，
几乎就是个翻译的过程，很容易实现。
如果只是几步思路清楚了，也没有关系，想清楚多少，就写多少代码，慢慢来。

> 4、有思路但是写不出代码的解决方法

这种情况常出现在初学者身上，主要是代码写少了。（这种情况需每日练习两百到三百行代码）
建议多看看别人怎么写的，积累代码的写法，这一次不会写不要紧。
见过一回，下次会写九可以了，积少成多，写得多了，自己能实现的也就多了。

> 5、方法不一定照搬，可以变通使用

比如边分析、边写思路然后就编写代码也是可以的，只要能有助你思考，都可以。

> 6、写不出代码

大多数人在写不出代码的时候，都不是完全写不出来，也不是一点都写不出来，请尽量把会的、能写出来的先写出来，多按照本文介绍的方法去练习，量变到质变，很快就能自己写出实现代码来。

> 参考：[https://www.cnblogs.com/luchuangao/p/6821210.html](https://www.cnblogs.com/luchuangao/p/6821210.html)

### 提高代码阅读能力

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602593438617-6e64c23d-0230-4104-b1b5-6ccd512ad999.png#align=left&display=inline&height=100&margin=%5Bobject%20Object%5D&name=image.png&originHeight=199&originWidth=1017&size=53543&status=done&style=shadow&width=508.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602593456351-275ca8e5-583b-499b-aca4-e4295b312c55.png#align=left&display=inline&height=157&margin=%5Bobject%20Object%5D&name=image.png&originHeight=313&originWidth=1008&size=102518&status=done&style=shadow&width=504)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602593476552-c6a6f01f-1d45-40e7-93b5-be56bc08e0c7.png#align=left&display=inline&height=170&margin=%5Bobject%20Object%5D&name=image.png&originHeight=339&originWidth=1010&size=98037&status=done&style=shadow&width=505)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602593492992-c4a224fc-10e7-478e-9424-c90da2b4805a.png#align=left&display=inline&height=88&margin=%5Bobject%20Object%5D&name=image.png&originHeight=176&originWidth=996&size=51461&status=done&style=shadow&width=498)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602593510079-399972ba-bee4-4dbc-81c9-ae619486f7da.png#align=left&display=inline&height=202&margin=%5Bobject%20Object%5D&name=image.png&originHeight=403&originWidth=996&size=126977&status=done&style=shadow&width=498)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602593528314-e583f78d-6f87-46d1-826d-841629871530.png#align=left&display=inline&height=163&margin=%5Bobject%20Object%5D&name=image.png&originHeight=325&originWidth=1013&size=96139&status=done&style=shadow&width=506.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1602593547023-cbcc3eac-6350-4b92-856d-0cfd2a1ccf75.png#align=left&display=inline&height=98&margin=%5Bobject%20Object%5D&name=image.png&originHeight=196&originWidth=1011&size=52272&status=done&style=shadow&width=505.5)
