---
title: 链表
categories: DataStructure
date: 2020-09-04 15:23:23
description: 链表
---

## 链表

链表是一种数据结构，和**数组同级**。之前的 ArrayList 数据结构，其实现原理是数组，而 LinkedList 的实现原理就是链表了。链表在进行循环遍历时效率不高，但是插入和删除时优势明显。
单向链表是一种线性表，实际上是由**节点（Node）**组成的，一个链表拥有不定数量的节点。其数据在**内存中存储是不连续的**，它存储的数据分散在内存中，每个结点只能也只有它能知道下一个结点的存储位置。由 N 各节点（Node）组成单向链表，每一个 Node 记录本 Node 的数据及下一个 Node。向外暴露的只有一个头节点（Head），**我们对链表的所有操作，都是直接或者间接地通过其头节点来进行的。**
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603194076184-195f3044-1083-4244-9eeb-d86c96a37e6f.png#align=left&display=inline&height=98&margin=%5Bobject%20Object%5D&originHeight=98&originWidth=491&size=0&status=done&style=shadow&width=491)
上图中最左边的节点即为头结点（Head），但是添加节点的顺序是从右向左的，添加的新节点会被作为新节点。最先添加的节点对下一节点的引用可以为空。引用是引用下一个节点而非下一个节点的对象。因为有着不断的引用，所以**头节点就可以操作所有节点**了。
下图描述了单向链表存储情况。存储是分散的，每一个节点只要记录下一节点，就把所有数据串了起来，形成了一个单向链表。
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603194105521-d31f8e78-7f2a-4c60-8838-57e15707e27b.png#align=left&display=inline&height=219&margin=%5Bobject%20Object%5D&originHeight=219&originWidth=195&size=0&status=done&style=shadow&width=195)
节点（Node）是由一个需要储存的对象及对下一个节点的引用组成的。也就是说，节点拥有两个成员：储存的对象、对下一个节点的引用。下面图是具体的说明：
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603194124335-fc6fc00c-35fb-44e1-a01c-de4b8b5531af.png#align=left&display=inline&height=207&margin=%5Bobject%20Object%5D&originHeight=207&originWidth=370&size=0&status=done&style=shadow&width=370)

## 关于链表的指向

### 何为指向？

链表的所有操作主要就是理解——**“指向”**
每个节点的**next**用来存放**下一个节点的“地址”**
**每个节点的自身就是地址**，相当于 C 语言中数组的数组名就是本数组的地址

### 谁指向谁？

**根处：目标**
**箭头处：地址仓库**

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1599309003706-ad779a14-1678-4d0c-86f2-b147752bd252.png#align=left&display=inline&height=293&margin=%5Bobject%20Object%5D&originHeight=594&originWidth=955&size=0&status=done&style=shadow&width=471)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1599309003751-ffeee4d8-9662-416e-8f46-5cf5edf03114.png#align=left&display=inline&height=363&margin=%5Bobject%20Object%5D&originHeight=725&originWidth=938&size=0&status=done&style=shadow&width=469)
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1599309003658-46b3e7db-e6dc-4d13-baea-e7e44075e8bc.png#align=left&display=inline&height=295&margin=%5Bobject%20Object%5D&originHeight=626&originWidth=975&size=0&status=done&style=shadow&width=459)

### 指向错位？

**第一个元素节点即为 head        **

## LinkedList 和 ArrayList 的设计

> 同时设计 LinkedList 和 ArrayList

**LinkedList**不需要构造函数，**ArrayList**需要，后者需要一个容量的初始化。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603191040309-0ed4b536-89c0-449d-85cc-e763afcb73ea.png#align=left&display=inline&height=300&margin=%5Bobject%20Object%5D&name=image.png&originHeight=600&originWidth=557&size=89515&status=done&style=shadow&width=278.5)

### 接口 List 设计

> 只用来声明对外接口，不能声明

```java
package com.wztlink1013.ds.linkedlist;

/**
 * fun：实现ArrayList和LinkedList的接口
 *
 */

public interface List<E> {
    static final int ELEMENT_NOT_FOUND = -1;

    /**
     * 元素的数量[抽象类中实现]
     * @return
     */
    int size();

    /**
     * 是否为空[抽象类中实现]
     * @return
     */
    boolean isEmpty();

    /**
     * 是否包含某个元素[抽象类中实现]
     * @param element
     * @return
     */
    boolean contains(E element);

    /**
     * 添加元素到尾部[抽象类中实现]
     * @param element
     */
    void add(E element);

    /**
     * 清除所有元素[实现类中实现]
     */
    void clear();

    /**
     * 获取index位置的元素[实现类中实现]
     * @param index
     * @return
     */
    E get(int index);

    /**
     * 设置index位置的元素[实现类中实现]
     * @param index
     * @param element
     * @return 原来的元素ֵ
     */
    E set(int index, E element);

    /**
     * 在index位置插入一个元素[实现类中实现]
     * @param index
     * @param element
     */
    void add(int index, E element);

    /**
     * 删除index位置的元素[实现类中实现]
     * @param index
     * @return
     */
    E remove(int index);

    /**
     * 查看元素的索引[实现类中实现]
     * @param element
     * @return
     */
    int indexOf(E element);
}

```

### 抽象类 AbstractList 设计

> 放 ArrayList 和 LinkedList 的公共代码
> 声明抽象类 abstract，就意味着可以不用全部实现接口 List 里面的所有方法，

```java
package com.wztlink1013.ds.linkedlist;

/**
 * fun：放ArrayList和LinkedList公共代码的抽象类（父类）
 *
 */

public abstract class AbstractList<E> implements List<E> {

    protected int size;
    /**
     * 元素的数量
     * @return
     */
    public int size() {
        return size;
    }

    /**
     * 是否为空
     * @return
     */
    public boolean isEmpty() {
        return size == 0;
    }

    /**
     * 是否包含某个元素
     * @param element
     * @return
     */
    public boolean contains(E element) {
        return indexOf(element) != ELEMENT_NOT_FOUND;
    }

    /**
     * 添加元素到尾部
     * @param element
     */
    public void add(E element) {
        add(size, element);
    }

    /**
     * 下面三个是ArrayList和LinkedList两个实现类中的公共代码
     * */
    protected void outOfBounds(int index) {
        throw new IndexOutOfBoundsException("Index:" + index + ", Size:" + size);
    }

    protected void rangeCheck(int index) {
        if (index < 0 || index >= size) {
            outOfBounds(index);
        }
    }

    protected void rangeCheckForAdd(int index) {
        if (index < 0 || index > size) {
            outOfBounds(index);
        }
    }
}

```

### ArrayList 设计

```java
package com.wztlink1013.ds.linkedlist;

/**
 *fun：实现动态数组
 */
@SuppressWarnings("unchecked")
public class ArrayList<E> extends AbstractList<E> {
    private E[] elements;

    private static final int DEFAULT_CAPACITY = 10;

    public ArrayList(int capaticy) {
        capaticy = (capaticy < DEFAULT_CAPACITY) ? DEFAULT_CAPACITY : capaticy;
        elements = (E[]) new Object[capaticy];
    }

    public ArrayList() {
        this(DEFAULT_CAPACITY);
    }


    @Override
    public void clear() {
        for (int i = 0; i < size; i++) {
            elements[i] = null;
        }
        size = 0;
    }

    @Override
    public E get(int index) {
        rangeCheck(index);
        return elements[index];
    }

    @Override
    public E set(int index, E element) {
        rangeCheck(index);

        E old = elements[index];
        elements[index] = element;
        return old;
    }

    @Override
    public void add(int index, E element) {
        rangeCheckForAdd(index);

        ensureCapacity(size + 1);

        for (int i = size; i > index; i--) {
            elements[i] = elements[i - 1];
        }
        elements[index] = element;
        size++;
    }

    @Override
    public E remove(int index) {
        rangeCheck(index);

        E old = elements[index];
        for (int i = index + 1; i < size; i++) {
            elements[i - 1] = elements[i];
        }
        elements[--size] = null;
        return old;
    }

    @Override
    public int indexOf(E element) {
        if (element == null) {  // 1
            for (int i = 0; i < size; i++) {
                if (elements[i] == null) return i;
            }
        } else {
            for (int i = 0; i < size; i++) {
                if (element.equals(elements[i])) return i; // n
            }
        }
        return ELEMENT_NOT_FOUND;
    }


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

        }
        string.append("]");
        return string.toString();
    }

    /**
     * 新添加功能
     */
    public int search(E element){
        for (int i = 0;i<size;i++){
            if (element == elements[i]){
                return i;
            }
        }
        return ELEMENT_NOT_FOUND;
    }

}

```

### LinkedList 设计

```java
package com.wztlink1013.ds.linkedlist;

/**
 *fun：链表的实现
 */
@SuppressWarnings("unchecked")
public class LinkedList<E> extends AbstractList<E> {
    private Node<E> first;
    private Node<E> last;

    private static class Node<E> {
        E element;
        Node<E> prev;
        Node<E> next;
        public Node(E element, Node<E> next) {
            this.element = element;
            this.next = next;
        }
    }

    @Override
    public void clear() {
        size = 0;
        first = null;
        last = null;
    }

    @Override
    public E get(int index) {
        return node(index).element;
    }

    @Override
    public E set(int index, E element) {
        Node<E> node = node(index);
        E old = node.element;
        node.element = element;
        return old;
    }

    @Override
    public void add(int index, E element) {
        if (index == 0){
            first = new Node<>(element, first);
        } else {
            Node<E> prev = node(index - 1);
            prev.next = new Node<>(element, prev.next);
        }
        size++;
    }

    @Override
    public E remove(int index) {
//        Node<E> node = first;
//        if (index == 0) {
//            first = first.next;
//        } else {
//            Node<E> prev = node(index -1);
//            node = prev.next;
//            prev.next = node.next;
//        }
        rangeCheck(index);

        Node<E> node = node(index);
        Node<E> prev = node.prev;
        Node<E> next = node.next;

        if (prev == null) { // index == 0
            first = next;
        } else {
            prev.next = next;
        }

        if (next == null) { // index == size - 1
            last = prev;
        } else {
            next.prev = prev;
        }

        size--;
        return node.element;
    }

    @Override
    public int indexOf(E element) {
        if (element == null) {
            Node<E> node = first;
            for (int i = 0; i < size; i++) {
                if (node.element == null) return i;

                node = node.next;
            }
        } else {
            Node<E> node = first;
            for (int i = 0; i < size; i++) {
                if (element.equals(node.element)) return i;

                node = node.next;
            }
        }
        return ELEMENT_NOT_FOUND;
    }

    /**
     * 获取index位置对应的节点对象
     * @param index
     * @return
     */
    private Node<E> node(int index) {
        rangeCheck(index);

        if (index < (size >> 1)) {
            Node<E> node = first;
            for (int i = 0; i < index; i++) {
                node = node.next;
            }
            return node;
        } else {
            Node<E> node = last;
            for (int i = size - 1; i > index; i--) {
                node = node.prev;
            }
            return node;
        }
    }

    @Override
    public String toString() {
        StringBuilder string = new StringBuilder();
        string.append("size=").append(size).append(", [");
        Node<E> node = first;
        for (int i = 0; i < size; i++) {
            if (i != 0) {
                string.append(", ");
            }

            string.append(node);

            node = node.next;
        }
        string.append("]");
        return string.toString();
    }
}
```

##
