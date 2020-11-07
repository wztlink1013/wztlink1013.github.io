---
title: UTC-GMT-GST
categories: DataAnalysis
date: 2020-05-29 15:43:12
description: "查看leancloud数据时候，分析 `2020-05-23T01:12:19.602Z`  "
---

## 一、三者区别与关系

### **UTC：世界标准时间**

协调世界时（英：Coordinated Universal Time ，法：Temps Universel Coordonné），又称世界统一时间，世界标准时间，国际协调时间。英文（CUT）和法文（TUC）的缩写不同，作为妥协，简称 UTC。

### **GMT：格林尼治时间**

世界时 UT   即格林尼治时间，格林尼治所在地的标准时间。以地球自转为基础的时间计量系统。地球自转的角度可用地方子午线相对于地球上的基本参考点的运动来度量。为了测量地球自转，人们在地球上选取了两个基本参考点：春分点（见分至点）和平太阳，由此确定的时间分别称为恒星时和平太阳时。

### **GST：北京时间**

在数据库中存放，或者给用户看的时间都是 GST 时间

### **UTC 和 GST**

中国北京市的时间比 Coordinated Universal Time**早** 8 小时

## **二、UTC 与 GST 之间的转换**

### 理解

> 2020-05-23T01:12:19.602Z

- T：他表示后面跟的时间
- Z：表示 UTC 统一时间
- 602：表示毫秒，如果为 6020，最后得到的时间，秒会增加 1 秒。000Z 意思就是 0 毫秒  utc 统一时间

### java 实现

```java
package website;

import java.text.*;
import java.util.Date;

public class UTC_GST {
	public static void main(String[] args) throws ParseException {

		String date = "2020-05-23T20:12:19.602Z";
		date = date.replace("Z", " UTC");
		System.out.println("输入的UTC格式数据为："+date);

		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS Z");
		Date d = format.parse(date);
		System.out.println("输出的背景格式数据为："+d);

	}
}
```

```java
输入的UTC格式数据为：2020-05-23T20:12:19.602 UTC
输出的背景格式数据为：Sun May 24 04:12:19 CST 2020
```

```java
package website;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Format {
    public static void main(String[] args) {

    	Date ss = new Date();
        System.out.println("一般日期输出：" + ss);
        System.out.println("toString日期输出：" + ss.toString());
        System.out.println("时间戳：" + ss.getTime()+"\n"); // getTime返回的是1970年1月1号至今流逝的时间
        //Date aw = Calendar.getInstance().getTime();//获得时间的另一种方式，测试效果一样

        SimpleDateFormat format0 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = format0.format(ss.getTime());//这个就是把时间戳经过处理得到期望格式的时间
        System.out.println("格式化结果0：" + time + "\n");

        SimpleDateFormat format1 = new SimpleDateFormat("yyyy年MM月dd日 HH时mm分ss秒");
        time = format1.format(ss.getTime());
        System.out.println("格式化结果1：" + time + "\n");
    }
}
```

```java
一般日期输出：Sat May 23 15:03:25 CST 2020
toString日期输出：Sat May 23 15:03:25 CST 2020
时间戳：1590217405777

格式化结果0：2020-05-23 15:03:25

格式化结果1：2020年05月23日 15时03分25秒
```
