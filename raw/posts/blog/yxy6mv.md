---
title: 栈
categories: DataStructure
date: 2020-09-06 16:43:23
description: 栈
---

## 栈的设计

### 栈的特点

栈的最重要特点就是其元素的**后进先出，先进后出**。

### 栈的接口设计

栈可以**直接继承**之前所学的 ArrayList 抑或是 List 接口。
这过程中需要注意，最好不要直接继承，因为如果直接继承，会将接口里面的其他方法也继承下来，会导致栈的对外接口不合理，解决办法就是在**类设计内部 new 一个 private List 对象**来设计栈。

```java
int size(); // 元素的数量
boolean isEmpty(); // 栈是否为空
void push(E element); // 入栈
E pop(); // 出栈
E top(); // 获取栈顶元素
void clear(); // 清空栈
```

```java
package com.wztlink1013.ds.stack;

import com.wztlink1013.ds.stack.list.ArrayList;
import com.wztlink1013.ds.stack.list.List;

public class Stack<E> {
    private List<E> list = new ArrayList<>();

    public void clear() {
        list.clear();
    }

    public int size() {
        return list.size();
    }

    public boolean isEmpty() {
        return list.isEmpty();
    }

    public void push(E element) {
        list.add(element);
    }

    public E pop() {
        return list.remove(list.size() - 1);
    }

    public E top() {
        return list.get(list.size() - 1);
    }
}
```

## 栈的应用

**浏览器的前进和后退**的功能。
假如有网页 a、b、c、d，依次点击 abc 三个网页，然后回退至 b 网页，这个时候，就相当于在 1 栈中有 ab 两个网页（且 b 为栈顶元素），c 暂时放到 2 栈中，此时依然可以使用回退前进功能，但是现在在 b 页面上在新输入 d 网页并进入，此时 2 栈被清空，d 为 1 栈的栈顶元素，在此时的 d 页面内，不能使用浏览器的前进功能，只能使用后退功能。

##
