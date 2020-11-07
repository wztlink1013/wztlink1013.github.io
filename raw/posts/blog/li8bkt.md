---
title: pandas-基本知识
categories: DataAnalysis
date: 2020-02-10 16:18:03
sidebar: [blogger, group-Data, toc, category]
group: group-Data
order: 16
description: "Pandas数据结构、一些常用函数使用总结"
---

## 一、Pandas 数据结构

```python
import pandas as pd
```

### Series

> 1. 通过 list 构建 Series

```python
ser_obj = pd.Series(range(10, 20,2))
print (type(ser_obj))
print(ser_obj)
```

```
<class 'pandas.core.series.Series'>
0    10
1    12
2    14
3    16
4    18
dtype: int64
```

```python
# 获取数据
print (ser_obj.values)

# 获取索引
print (ser_obj.index)
#范围索引数据类型

# 预览数据
print (ser_obj.head(3))
#默认输出五行
```

```
[10 12 14 16 18]
RangeIndex(start=0, stop=5, step=1)
0    10
1    12
2    14
dtype: int64
```

> 2. 通过 dict 构建 Series

```python
year_data = {2001: 17.8, 2002: 20.1, 2003: 16.5,2004:324,2423:243}
ser_obj2 = pd.Series(year_data)
print (ser_obj2.head(2))
print (ser_obj2.index)
print(ser_obj2)
```

```
2001    17.8
2002    20.1
dtype: float64
Int64Index([2001, 2002, 2003, 2004, 2423], dtype='int64')
2001     17.8
2002     20.1
2003     16.5
2004    324.0
2423    243.0
dtype: float64
```

```python
# name属性【【【【【出问题了！！！】】】】】
ser_obj2.name = '钱'
ser_obj2.index.name = 'year'
print (ser_obj2.head())
```

```
year
2001     17.8
2002     20.1
2003     16.5
2004    324.0
2423    243.0
Name: 钱, dtype: float64
```

### DataFrame

> 1. 通过 ndarray 构建 DataFrame

```python
import numpy as np

array = np.random.rand(5,4)
print (array)

df_obj = pd.DataFrame(array,columns=['a','b','c','d'])
print (df_obj.head())
print(df_obj.sort_values(by='a', ascending=False))
```

```
[[0.23496522 0.92258429 0.36447462 0.52634697]
 [0.73743514 0.88175941 0.48944212 0.4173522 ]
 [0.21214568 0.57148666 0.59496072 0.49490723]
 [0.7458542  0.74743907 0.70475157 0.28130394]
 [0.43805937 0.90300134 0.00730653 0.68203725]]
          a         b         c         d
0  0.234965  0.922584  0.364475  0.526347
1  0.737435  0.881759  0.489442  0.417352
2  0.212146  0.571487  0.594961  0.494907
3  0.745854  0.747439  0.704752  0.281304
4  0.438059  0.903001  0.007307  0.682037
          a         b         c         d
3  0.745854  0.747439  0.704752  0.281304
1  0.737435  0.881759  0.489442  0.417352
4  0.438059  0.903001  0.007307  0.682037
0  0.234965  0.922584  0.364475  0.526347
2  0.212146  0.571487  0.594961  0.494907
```

> 2. 通过 dict 构建 DataFrame

```python
#一个键值对就相当于一列！！但是具体到字典里面的值所用到的一些函数还是不能很清楚
dict_data = {'A': 1.,
             'B': pd.Timestamp('20161217'),
             'C': pd.Series(1, index=list(range(4)),dtype='float32'),
             'D': np.array([3] * 4,dtype='int32'),
             'E' : pd.Categorical(["Python","Java","C++","C#"]),
             'F' : 'ChinaHadoop' }
df_obj2 = pd.DataFrame(dict_data)
print (df_obj2.head())
```

```
     A          B    C  D       E            F
0  1.0 2016-12-17  1.0  3  Python  ChinaHadoop
1  1.0 2016-12-17  1.0  3    Java  ChinaHadoop
2  1.0 2016-12-17  1.0  3     C++  ChinaHadoop
3  1.0 2016-12-17  1.0  3      C#  ChinaHadoop
```

```python
# 增加列
df_obj2['G'] = df_obj2['D'] + 4
print (df_obj2.head())
xxx = pd.DataFrame(df_obj2,columns=['A','B','C','D','E','F','G','H'],index=[0,1,2,3,4])
print(xxx)
```

```
     A          B    C  D       E            F  G
0  1.0 2016-12-17  1.0  3  Python  ChinaHadoop  7
1  1.0 2016-12-17  1.0  3    Java  ChinaHadoop  7
2  1.0 2016-12-17  1.0  3     C++  ChinaHadoop  7
3  1.0 2016-12-17  1.0  3      C#  ChinaHadoop  7
     A          B    C    D       E            F    G   H
0  1.0 2016-12-17  1.0  3.0  Python  ChinaHadoop  7.0 NaN
1  1.0 2016-12-17  1.0  3.0    Java  ChinaHadoop  7.0 NaN
2  1.0 2016-12-17  1.0  3.0     C++  ChinaHadoop  7.0 NaN
3  1.0 2016-12-17  1.0  3.0      C#  ChinaHadoop  7.0 NaN
4  NaN        NaT  NaN  NaN     NaN          NaN  NaN NaN
```

### Index

```python
print (type(ser_obj.index))
print (type(df_obj2.index))

print (df_obj2.index)
```

```
<class 'pandas.core.indexes.range.RangeIndex'>
<class 'pandas.core.indexes.numeric.Int64Index'>
Int64Index([0, 1, 2, 3], dtype='int64')
```

```python
# 索引对象不可变
df_obj2.index[0] = 2
```

```
---------------------------------------------------------------------------

TypeError                                 Traceback (most recent call last)

<ipython-input-10-6367894e76d8> in <module>
      1 # 索引对象不可变
----> 2 df_obj2.index[0] = 2


~\Anaconda3\lib\site-packages\pandas\core\indexes\base.py in __setitem__(self, key, value)
   4258
   4259     def __setitem__(self, key, value):
-> 4260         raise TypeError("Index does not support mutable operations")
   4261
   4262     def __getitem__(self, key):


TypeError: Index does not support mutable operations
```

## 二、Pandas 数据操作

### 常用函数总结

> ·shape   获取数据的尺寸

```
 获得df的size：df.shape
 获得df中的行数：df.shape[0]
 获得df中的列数： df.shape[1]
 获得行索引信息：df.index
 获得列索引信息：df.colomns
```

> ·values   获得 df 中的值===中文没用

```
df.values === 以列表的形式展现出来，去除了索引===dataframe类型数据转换成array类型
```

> ·setindex 和 resetindex

```
reset_index可以还原索引，从新变为默认的整型索引
    DataFrame.reset_index(level=None, drop=False, inplace=False, col_level=0, col_fill=”)
    level控制了具体要还原的那个等级的索引
    drop为False则索引列会被还原为普通列，否则会丢失
set_index方法，设置单索引和复合索引抑或是添加索引。
    DataFrame.set_index(keys, drop=True, append=False, inplace=False, verify_integrity=False)
    append添加新索引，drop为False，inplace为True时，索引将会还原为列
```

> ·iterrows（）遍历 DataFrame 中的数据

```
for index,row in df.iterrows():
```

> ·split(sep,n,expand=false)

```
sep表示用于分割的字符；n表格分割成多少列；expand表示是否展开为数据款，True输出Series，False输出Dataframe。
字段拆分：是指按照固定的字符，拆分已有字符串
```

```python
import pandas as pd
import numpy as np
```

### 匿名函数应用

```python
# Numpy ufunc 函数
df = pd.DataFrame(np.random.randn(5,4) - 1)
print (df)

print (np.abs(df))
```

```
          0         1         2         3
0  0.624016 -2.695175 -1.211426 -0.386151
1 -1.335385 -1.315232 -0.305902 -0.361348
2 -0.349443 -2.032110  0.075995 -0.966725
3 -1.631192 -1.051390 -1.767981 -0.366663
4 -0.786178 -0.335846 -0.797992 -0.931216
          0         1         2         3
0  0.624016  2.695175  1.211426  0.386151
1  1.335385  1.315232  0.305902  0.361348
2  0.349443  2.032110  0.075995  0.966725
3  1.631192  1.051390  1.767981  0.366663
4  0.786178  0.335846  0.797992  0.931216
```

```python
# 使用apply应用行或列数据
f = lambda x : x.max()
print (df.apply(f))
```

```
0    0.624016
1   -0.335846
2    0.075995
3   -0.361348
dtype: float64
```

```python
# 指定轴方向
print (df.apply(f, axis=1))
```

```
0    0.624016
1   -0.305902
2    0.075995
3   -0.366663
4   -0.335846
dtype: float64
```

```python
# 使用applymap应用到每个数据
f2 = lambda x : '%.2f' % x
print (df.applymap(f2))
```

```
       0      1      2      3
0   0.62  -2.70  -1.21  -0.39
1  -1.34  -1.32  -0.31  -0.36
2  -0.35  -2.03   0.08  -0.97
3  -1.63  -1.05  -1.77  -0.37
4  -0.79  -0.34  -0.80  -0.93
```

### 排序

```python
s4 = pd.Series(range(10, 15), index = np.random.randint(5, size=5))
print (s4)
```

```
4    10
1    11
4    12
1    13
1    14
dtype: int64
```

> 1. 索引排序

```python

s4.sort_index()
```

```
1    11
1    13
1    14
4    10
4    12
dtype: int64
```

```python
df4 = pd.DataFrame(np.random.randn(3, 4),
                   index=np.random.randint(3, size=3),
                   columns=np.random.randint(4, size=4))
```

```python
df4
```

|     | 2         | 1         | 3         | 1         |
| --- | --------- | --------- | --------- | --------- |
| 0   | 0.007031  | 1.261990  | -1.647929 | 0.176549  |
| 1   | -2.510698 | -0.207659 | 0.628221  | 0.441352  |
| 0   | -0.367051 | 1.536606  | 0.167158  | -0.236129 |

```python
#df4.sort_index(ascending=False)
df4.sort_index(axis=1)
```

|     | 1         | 1         | 2         | 3         |
| --- | --------- | --------- | --------- | --------- |
| 0   | 1.261990  | 0.176549  | 0.007031  | -1.647929 |
| 1   | -0.207659 | 0.441352  | -2.510698 | 0.628221  |
| 0   | 1.536606  | -0.236129 | -0.367051 | 0.167158  |

> 2. 按值排序

```python

#df.sortvalues(by='a', ascending=False) === 通过a的值
#    作用是对选定的一列数值（'a'）数据从上往下从小到大进行排序（如果传值没成功===设置本体覆盖，传值覆盖）
df4.sort_values(by=1)
```

```
---------------------------------------------------------------------------

ValueError                                Traceback (most recent call last)

<ipython-input-22-36ffa8ddd07d> in <module>
      2 #df.sortvalues(by='a', ascending=False) === 通过a的值
      3 #    作用是对选定的一列数值（'a'）数据从上往下从小到大进行排序（如果传值没成功===设置本体覆盖，传值覆盖）
----> 4 df4.sort_values(by=1)


~\Anaconda3\lib\site-packages\pandas\core\frame.py in sort_values(self, by, axis, ascending, inplace, kind, na_position)
   4991
   4992             by = by[0]
-> 4993             k = self._get_label_or_level_values(by, axis=axis)
   4994
   4995             if isinstance(ascending, (tuple, list)):


~\Anaconda3\lib\site-packages\pandas\core\generic.py in _get_label_or_level_values(self, key, axis)
   1795                     key=key,
   1796                     label_axis_name=label_axis_name,
-> 1797                     multi_message=multi_message,
   1798                 )
   1799             )


ValueError: The column label '1' is not unique.
```
