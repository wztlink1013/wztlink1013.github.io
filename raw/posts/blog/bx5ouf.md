---
title: 动态数组
categories: DataStructure
date: 2020-08-12 15:23:23
description: 动态数组
---

## 动态数组设计

### private 设计

```java
// 元素的数量
private int size;
// 所有的元素
private E[] elements;

private static final int DEFAULT_CAPACITY = 10;
private static final int ELEMENT_NOT_FOUND = -1;

/**
     * 保证要有capacity的容量
     * @param capacity
     */
private void ensureCapacity(int capacity) {
    int oldCapacity = elements.length;
    if (oldCapacity >= capacity) return;

    // 新容量为旧容量的1.5倍
    int newCapacity = oldCapacity + (oldCapacity >> 1);
    E[] newElements = (E[]) new Object[newCapacity];
    for (int i = 0; i < size; i++) {
        newElements[i] = elements[i];
    }
    elements = newElements;

    System.out.println(oldCapacity + "扩容为" + newCapacity);
}

private void outOfBounds(int index) {
    throw new IndexOutOfBoundsException("Index:" + index + ", Size:" + size);
}

private void rangeCheck(int index) {
    if (index < 0 || index >= size) {
        outOfBounds(index);
    }
}

private void rangeCheckForAdd(int index) {
    if (index < 0 || index > size) {
        outOfBounds(index);
    }
}
```

### 构造函数设计

在 new 一个对象之后，给定空间大小，抑或是扩容

```java
public ArrayList(int capaticy) {
    capaticy = (capaticy < DEFAULT_CAPACITY) ? DEFAULT_CAPACITY : capaticy;
    elements = (E[]) new Object[capaticy];
}

public ArrayList() {
    this(DEFAULT_CAPACITY);
}
```

### 对外接口

```java
public int size(); // 返回动态数组元素个数
public boolean isEmpty(); // 是否为空
public boolean contains(E element); // 是否包含某个元素
public void add(E element); // 在数组尾部添加元素
public E get(int index); // 返回index位置对应的元素
public E set(int index, E element); // 设置/更换index位置上的值
public void add (int index, E element); // 在index位置上添加元素
public E remove(int index); // 移除index位置上的值
public int indexOf(E element); // 查看元素的位置
public void clear(); // 清空动态数组所有元素
```

### 重写输出

```java
@Override
public String toString() {
    // size=3, [99, 88, 77]
    StringBuilder string = new StringBuilder();
    string.append("size=").append(size).append(", [");
    for (int i = 0; i < size; i++) {
        if (i != 0) {
            string.append(", ");
        }

        string.append(elements[i]);

        //			if (i != size - 1) {
        //				string.append(", ");
        //			}
    }
    string.append("]");
    return string.toString();
}
```
