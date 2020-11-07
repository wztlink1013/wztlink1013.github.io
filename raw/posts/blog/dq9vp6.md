---
title: 📅刷题
categories: DataStructure
date: 2020-09-05 15:23:23
description: 📅编程刷题
---

👉 [GitHub 源码链接](https://github.com/wztlink1013/datastructure/tree/master/src/com/wztlink1013/problems/leetcode/editor/cn)

## 其他

### 1. 两数之和

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] == target - nums[i]) {
                    return new int[] { i, j };
                }
            }
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}
```

### 18. 四数之和

```java
class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> result = new LinkedList<>();
        int a = 0;
        int b = 1;
        int c = 2;
        int d = 3;
        for (int i=nums[a];i<nums.length;++a){
            for (int j=nums[b];j<nums.length;++b){
                for (int k=nums[c];k<nums.length;++c){
                    for (int l=nums[d];l<nums.length;++d){
                        if (i+j+k+l == target){
                            result.add(new LinkedList<>(Arrays.asList(i, j, k, l)));
                        }break;
                    }
                }
            }
        }
        return result;
    }
}
```

### 486. 预测赢家

```java
class Solution {
    public boolean PredictTheWinner(int[] nums) {
        return total(nums, 0, nums.length - 1, 1) >= 0;
    }

    public int total(int[] nums, int start, int end, int turn) {
        if (start == end) {
            return nums[start] * turn;
        }
        int scoreStart = nums[start] * turn + total(nums, start + 1, end, -turn);
        int scoreEnd = nums[end] * turn + total(nums, start, end - 1, -turn);
        return Math.max(scoreStart * turn, scoreEnd * turn) * turn;
//        if(turn == 1){
//            return Math.max(scoreStart ,scoreEnd );
//        }else{
//            return Math.min(scoreStart ,scoreEnd );
//        }
    }
}
```

### 509. 斐波那契数

```java
class Solution {
    // TODO: for循环实现
    public int fib(int N) {
        if (N <= 1) return N;
        int first = 0;
        int second = 1;
        for (int i = 0; i < N - 1; i++) {
            int sum = first + second;
            first = second;
            second = sum;
        }
        return second;
    }
//    // TODO: 递归实现O(2^n)
//    public int fib1(int n) {
//        if (n <= 1) return n;
//        return fib1(n - 1) + fib1(n - 2);
//    }
//    // TODO: 首尾实现
//    public int fib3(int n) {
//        if (n <= 1) return n;
//        int first = 0;
//        int second = 1;
//        while (n-- > 1) {
//            second += first;
//            first = second - first;
//        }
//        return second;
//    }
}
```

### 729. 我的日程安排表 I

```java
class MyCalendar {

    int [] month = new int[30];
    public MyCalendar() {


    }

    public boolean book(int start, int end) {
        boolean p = true;


        if (month[start] == 1) {
            p = false;
        }

        else {
            while (p) {
                int i = start;
                month[i] = 1;
                if (month[i+1] == 1) {
                    return p = false;
                }
                i = i+1;
            }
        }
        return p;
    }

}

```

### 509. 斐波那契数

```java
// 递归：O(2^n)
public static int fib1(int n) {
    if (n <= 1) return n;
    return fib1(n - 1) + fib1(n - 2);
}

// for循环：O(n)
public static int fib2(int n) {
    if (n <= 1) return n;
    int first = 0;
    int second = 1;
    for (int i = 0; i < n - 1; i++) {
        int sum = first + second;
        first = second;
        second = sum;
    }
    return second;
}
// 首尾法
public static int fib3(int n) {
    if (n <= 1) return n;

    int first = 0;
    int second = 1;
    while (n-- > 1) {
        second += first;
        first = second - first;
    }
    return second;
}
// 特征方程解法：O（1）
public static int fib4(int n) {
    double c = Math.sqrt(5);
    return (int) (Math.pow((1+c) / 2, n) - Math.pow((1-c) / 2, c));
}
```

##
