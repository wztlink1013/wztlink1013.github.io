---
title: Python-基本语法
categories: [Language]
date: 2020-03-23 00:42:05
description: 之前的一些电子笔记以便查看
---

## 一、基本语法

1. 大事谷歌；小事百度【建立良好的编程式思维】
1. PEP8 中的一些良好约定【编程规范】
1. 字符串格式化：
   print('%s--%d--%s'%('wuzutao',20,'尼采般地抒情'))
   a. %i 是什么格式的那啥？‘
1. 强制性类型转换：类 C
1. 时间和日期：
   from datetime import datetime
   dt=datetime(2019,5,12,9,20)
   print(dt.year,dt.month,dt.day)

   > 2019  5  12
   > dt.strftime('%Y/%m/%d %H:%M')
   > #datetime 格式转化为字符串
   > '2019/05/12 09:20'
   > datetime.strptime('20161203', '%Y%m%d') #字符串转化为 datetime 格式
   > datetime.datetime(2016, 12, 3, 0, 0)

1. pass 函数
   def f():
      #TODO: test pass
      pass
1. 异常的处理
   def test(x,y):
      try:
          print(y/x)
      except:
          print('输入的信息有误！')

   > test(2,8)
   > test('e',8)

1. range 和 range 的区别！！！
1. 对象传递和拷贝【类似 C 语言中的指针】 #变量传递、列表传递和 C 类似 #深拷贝和浅拷贝
   import copy
   a = [[1, 2, 3], [4, 5, 6]]
   b = a
   c = copy.copy(a)
   d = copy.deepcopy(a)
   print ('a-id:',id(a))#id 相当于内存里面的地址
   print ('b-id:',id(b))
   print ('c-id:',id(c))
   print ('d-id:',id(d))
   a.append(15)
   a[1][2] = 10
   print (a)
   print (b)
   print (c)
   print (d)

1. a-id: 2171119139144
   b-id: 2171119139144
   c-id: 2171119848136
   d-id: 2171119140744
   [[1, 2, 3], [4, 5, 10], 15]
   [[1, 2, 3], [4, 5, 10], 15]
   [[1, 2, 3], [4, 5, 10]]
   [[1, 2, 3], [4, 5, 6]]

## 二、数据结构

### 元组

```
	○ #转换为元组（list->tuple, string->tuple）
	l = [1, 2, 3]
	print (tuple(l))
	str = ('Hello ChinaHadoop')
	print (tuple(str))
	>>>(1, 2, 3) ('H', 'e', 'l', 'l', 'o', ' ', 'C', 'h', 'i', 'n', 'a', 'H', 'a', 'd', 'o', 'o', 'p')
	○ tup1 = (1, 2, 3)
	#嵌套元组:
	tup2 = ((1, 2, 3), (4, 5))
	print (tup2)
	#合并元组:
	tup1 + tup2
	○ #拆包
	def test_1():
	    r=(2,4,5,32)
	    return r
	a, b, _, f=test_1()
	print(f)
	>>> 32
	○ # 元组列表迭代
	tuple_lst = [(1, 2), (3, 4), (5, 6)]
	for x, y in tuple_lst:
	    print (x+y)
	>>>3   7   11
	○ # 计数器
	列表/元组.('需要查找里面的某个对象的个数')
```

### 列表

```
	○ list里面可以有不同类型的元素
	○ #合并列表
	lst_1=[352,2352,3,556]
	lst_2=['gew','f']
	>lst_3 = lst_1 + lst_2
	>lst_1.extend(lst_2)
	○ #sort函数和sorted函数
	list_1=[23,54,346,222,4,1]
	print(list_1.sort())     #查查版本
	print(sorted(list_1))  #sorted是新起的一个列表
	lst_6 = ['Welcome', 'to', 'Python', 'Data', 'Analysis', 'Course']
	lst_6.sort()
	print (lst_6)【!!!!打印出来是none===查查版本】
	>>>['Analysis', 'Course', 'Data', 'Python', 'Welcome', 'to']
	lst_6.sort(key = len, reverse=True)
	print (lst_6)
	>>>['Analysis', 'Welcome', 'Course', 'Python', 'Data', 'to']
```

### 字典

```
	○ #合并字典
	dict1 = {1:'huhuhu'}
	dict2 = {4: 'new1', 5: 'news'}
	dict1.update(dict2)
	○ #通过多个列表创建字典
	dict_3 = {}
	l1 = [32,543,6,2,7,4]
	l2 = reversed(l1)
	for i1, i2 in zip(l1, l2):
	    dict_3[i1] = i2
	print (dict_3)
	>>>{32: 4, 543: 7, 6: 2, 2: 6, 7: 543, 4: 32}
	'''hash函数来判断某个对象是否可以做键'''
	○ '''位置赋值；默认赋值；关键字赋值——format'''
	'''遍历字典的方式变了：keys，values，items'''
	天行九歌={'韩非':'逆鳞','卫庄':'鲨齿','盖聂':'渊虹'}
	print(天行九歌)
	for ren,jian in 天行九歌.items():
	    print('{}--{}'.format(ren,jian))
	>>>
	{'韩非': '逆鳞', '卫庄': '鲨齿', '盖聂': '渊虹'}
```

### 集合

```
	○ a1=[1,3,4,1,35,2352,75]
	b1=[3,2352,24354,4332432,54]
	a=set(a1)
	b=set(b1)
	print(a)
	print(b)
	a | b#并；a & b#交；a - b#呃。。。；a ^ b#呃。。。；
	a.issubset(b)#判断子集
	>>>False
	a.issuperset(b)#判断父集
	>>>False
```

## 三、高级特性

### 推导式

```
	○ str_lst = ['Welcome', 'to', 'Python', 'Data', 'Analysis', 'Course']
	result = [x.upper() for x in str_lst if len(x) > 4]
	print (result)
	>>>['WELCOME', 'PYTHON', 'ANALYSIS', 'COURSE']
```

### 多函数模式

```
	○ str_lst = ['$1.123', ' $1123.454', '$899.12312']

	def remove_space(str):
	    """
	        remove space
	    """
	    str_no_space = str.replace(' ', '')
	    return str_no_space

	def remove_dollar(str):
	    """
	        remove $
	    """
	    if '$' in str:
	        return str.replace('$', '')
	    else:
	        return str

	def clean_str_lst(str_lst, operations):
	    """
	        clean string list
	    """
	    result = []
	    for item in str_lst:
	        for op in operations:
	            item = op(item)
	        result.append(item)
	    return result

	clean_operations = [remove_space, remove_dollar]
	result = clean_str_lst(str_lst, clean_operations)
	print (result)
	>>>['1.123', '1123.454', '899.12312']
```

### 匿名函数

```
	○ str_lst = ['Welcome', 'to', 'Python', 'Data', 'Analysis', 'Course']
	str_lst.sort(key=lambda x:len(x)) # sort by length
	print (str_lst)

	str_lst.sort(key=lambda x:x[-1]) # sort by the last letter
	print (str_lst)
	>>>
	['to', 'Data', 'Python', 'Course', 'Welcome', 'Analysis']
	['Data', 'Course', 'Welcome', 'Python', 'to', 'Analysis']
```

### 迭代器

```
	○ def gen_test():
	    for i in range(3):
	        yield i

	gen = gen_test() #此时不执行生成器
	type(gen)
	for i in gen:
	    print(i)
	#用意何在呢？？！！
	>>>0  1  2
```

## 四、常用函数

### 序列函数&zip 使用

```
	a. enumerate函数
	list_11 = ['Welcome', 'to', 'Python', 'Data', 'Analysis', 'Course']
	for i, item in enumerate(lst_6):
	    print ('%i-%s' %(i, item))
	>>>
	0-Analysis
	1-Welcome
	2-Course
	3-Python
	4-Data
	5-to
	str_dict = dict((i, item) for i, item in enumerate(list_11))
	print (str_dict)
	>>>{0: 'Welcome', 1: 'to', 2: 'Python', 3: 'Data', 4: 'Analysis', 5: 'Course'}
	b. zip压缩
	lst_6 = ['Welcome', 'to', 'Python', 'Data', 'Analysis', 'Course']
	lst_8 = ['a', 'b', 'c']
	zip_lst = zip(lst_6, lst_8)
	print(list(zip_lst))
	#方式一：直接转化为列表
	print(dict(list(zip_lst)))
	#方式二：转化为字典
	for i in zip_lst:
	    print (i)
	#方式三：直接遍历
	解压：
	print(*zip_lst)
	print(lst_6)
	c. reversed逆序输出
```

### 函数式编程

```
	a. #函数可以作为变量使用;也可以将函数作为参数使用
	import math
	def func_add(x, y, f):
	    """
	        functional addition
	    """
	    return f(x) + f(y)

	print (func_add(4, 25, math.sqrt))
	print (func_add(-4, 25, abs))
	>>>7.0    29
```

### map 和 reduce

```
	a. '''map函数'''
	list_1=[1,4,9]
	aaa = [x**2 for x in list_1]
	print (aaa)

	bbb = map(math.sqrt, aaa)
	print (bbb)
	>>>
	[1, 16, 81]
```

<map object at 0x000002145B2B77F0>

### filter 函数

```
	a. 天行=['韩非','卫庄','张良','盖聂','逆鳞']
	def fx(x):
	    y=['逆鳞']
	    if x in y:
	        return x
	filtered_lst = filter(fx,天行)
	print(天行)
	print(list(filtered_lst))
	#注意python2和3的区别，很多时候要区别出来列表等序列，加上list很有必要
	>>>
	['韩非', '卫庄', '张良', '盖聂', '逆鳞']
	 ['逆鳞']
```
