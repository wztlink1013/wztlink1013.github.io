---
title: 📅链表基础题目
date: 2020-09-06 20:54:00
categories: DataStructure
description: 数据结构刷题-📅链表基础题目
---

```java
/**
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
```

## 237. 删除链表中的节点

### 问题描述

给出一个带值得链表，删除指定值 d 结点。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603193824228-3a24481d-e89e-4896-a20d-9c7c77d7511d.png#align=left&display=inline&height=261&margin=%5Bobject%20Object%5D&name=image.png&originHeight=521&originWidth=727&size=54507&status=done&style=shadow&width=363.5)

### 问题思路

> 题目**并没有说明有 head 节点**，应该转换思维，一直往 next.next 元素，往后删去。

### 代码实现

```java
class Solution {
    public void deleteNode(ListNode node) {
        node.val = node.next.val;
        node.next = node.next.next;
    }
}
```

## 206. 反转链表

### 问题描述

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603193588776-6539785f-f52d-494b-b7a1-2bc6cebf1e60.png#align=left&display=inline&height=136&margin=%5Bobject%20Object%5D&name=image.png&originHeight=271&originWidth=725&size=20430&status=done&style=shadow&width=362.5)

### 问题思路

### 代码实现

**递归实现**

```java
// 避免陷入死循环
if (head == null || head.next == null) return head;
ListNode newHead = reverseList(head.next); //此处递归，找到最后一个节点了
head.next.next = head; //重新指定节点指向（有两个next，注意少写）
head.next = null; //将最初的节点指向空
return newHead; //返回新的“倒置”头节点
```

**快慢指针**

```java
class Solution {
    public ListNode reverseList(ListNode head) {
        // 避免陷入死循环
        if (head == null || head.next == null) return head;

        ListNode newHead = null;
        while (head != null){
            ListNode tmp = head.next;
            head.next = newHead;
            newHead = head;
            head = tmp;
        }
        return newHead;

    }
}
```

## 141. 环形链表

### 问题描述

给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603195777983-5574f7c4-135c-45c2-aef2-6118e954bf68.png#align=left&display=inline&height=172&margin=%5Bobject%20Object%5D&name=image.png&originHeight=343&originWidth=726&size=36403&status=done&style=shadow&width=363)

### 问题思路

### 代码实现

```java
public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) return false;

        // TODO: 快慢指针
        ListNode slow = head;
        ListNode fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true; //如果能相遇则表示有环
        }
        return false; //不能相遇则没有环
    }
}
```

## 203. 移除链表元素

### 问题描述

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603195857807-2e8c8296-2d79-4e36-b304-f02c4dee52b3.png#align=left&display=inline&height=100&margin=%5Bobject%20Object%5D&name=image.png&originHeight=200&originWidth=729&size=15034&status=done&style=shadow&width=364.5)

### 问题分析

### 代码实现

```java
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        // 将整个链表想象成head+子链表
        if (head == null)
            return null;
        // 先处理子链表
        head.next = removeElements(head.next, val);
        // 再处理头结点
        return head.val == val ? head.next : head;
    }
}
```

## 83. 删除排序链表中的重复元素

### 问题描述

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603195897467-fdb33dfe-a1c0-4963-b76a-2c978f565801.png#align=left&display=inline&height=177&margin=%5Bobject%20Object%5D&name=image.png&originHeight=354&originWidth=727&size=22776&status=done&style=shadow&width=363.5)

### 问题分析

### 代码实现

```java
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        // TODO: 快慢指针
        if (head == null) return head;
        ListNode slow = head;
        ListNode fast = head.next;
        while (fast != null){
            if (slow.val != fast.val) {
                slow.next = fast;
                slow = fast;
            }
            fast = fast.next;
        }
        slow.next = null;
        return head;
    }
}
// TODO: 单指针下一步
//class Solution {
//    public ListNode deleteDuplicates(ListNode head) {
//        ListNode cur = head;
//        while(cur != null && cur.next != null) {
//            if(cur.val == cur.next.val) {
//                cur.next = cur.next.next;
//            } else {
//                cur = cur.next;
//            }
//        }
//        return head;
//    }
//}
```

## 876. 链表的中间结点

### 问题描述

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603195941092-8cd11b96-c174-425e-ab68-a7015110092e.png#align=left&display=inline&height=208&margin=%5Bobject%20Object%5D&name=image.png&originHeight=415&originWidth=717&size=49665&status=done&style=shadow&width=358.5)

### 问题分析

### 代码实现

```java
class Solution {
    public ListNode middleNode(ListNode head) {
        if (head.next == null) return head;
        if (head.next.next == null) return head.next;

        ListNode slow = head.next;
        ListNode fast = head.next.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast == null) return slow;
        }
        return slow;
    }
}
```
