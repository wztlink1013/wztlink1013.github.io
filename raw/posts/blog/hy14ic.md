---
title: Python-apply函数和入口函数
categories: [Language]
date: 2020-02-08 15:27:20
description: "pandas中的apply函数；python函数入口ifname……"
---

## pandas 之 apply 函数

```
DataFrame.apply(func, axis=0, broadcast=False, raw=False, reduce=None, args=(), **kwds)
```

第一个参数，这个参数是函数，相当于 C/C++的函数指针。

这个函数需要自己实现，函数的传入参数根据 axis 来定，比如 axis = 1，就会把一行数据作为 Series 的数据
结构传入给自己实现的函数中，我们在函数中实现对 Series 不同属性之间的计算，返回一个结果，则 apply 函数
会自动遍历每一行 DataFrame 的数据，最后将所有结果组合成一个 Series 数据结构并返回。

## if **name** == 'main'

[参考：知乎用户](https://zhuanlan.zhihu.com/p/34112508)
