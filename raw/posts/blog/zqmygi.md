---
title: 队列
categories: DataStructure
date: 2020-09-05 16:43:23
description: 队列
---

## Queue 队列设计

> 在头尾两端进行操作，先进先出 FIFO

```java
package com.wztlink1013.ds.queue;

import com.wztlink1013.ds.queue.list.LinkedList;
import com.wztlink1013.ds.queue.list.List;

public class Queue<E> {
    private List<E> list = new LinkedList<>();

    public int size() {
        return list.size();
    }

    public boolean isEmpty() {
        return list.isEmpty();
    }

    public void clear() {
        list.clear();
    }

    public void enQueue(E element) {
        list.add(element);
    }

    public E deQueue() {
        return list.remove(0);
    }

    public E front() {
        return list.get(0);
    }
}
```

## Deque 双端队列设计

> 双端队列是能在头尾两端添加、删除的队列

```java
package com.wztlink1013.ds.queue;

import com.wztlink1013.ds.queue.list.LinkedList;
import com.wztlink1013.ds.queue.list.List;

public class Deque<E> {
    private List<E> list = new LinkedList<>();

    public int size() {
        return list.size();
    }

    public boolean isEmpty() {
        return list.isEmpty();
    }

    public void clear() {
        list.clear();
    }

    public void enQueueRear(E element) {
        list.add(element);
    }

    public E deQueueFront() {
        return list.remove(0);
    }

    public void enQueueFront(E element) {
        list.add(0, element);
    }

    public E deQueueRear() {
        return list.remove(list.size() - 1);
    }

    public E front() {
        return list.get(0);
    }

    public E rear() {
        return list.get(list.size() - 1);
    }
}
```
