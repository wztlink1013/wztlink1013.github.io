---
title: Pandas-分组聚合
tags: pandas
categories: DataAnalysis
date: 2020-02-10 16:28:49
sidebar: [blogger, group-Data, toc, category]
group: group-Data
order: 16
description: "Pandas分组聚合"
---

## 一、分组

### GroupBy 对象

> · groupedby 函数中的参数：

```
as_index的作用：控制聚合输出是否以组标签为索引值，默认为True，就是分层次的索引，若为False多加一列默认索引索引，相当于非其他数据排序好了。
但是这两组标签索引值不同有什么作用呢？=== 作用就是，根据的一列是否为索引列。
sort_values的作用：对选定的一列数值数据从上往下从小到大进行排序（如果传值没成功===设置本体覆盖，传值覆盖）
```

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.pyplot
%matplotlib inline
```

```python
dict_obj = {'key1' : ['a', 'b', 'a', 'b',
                      'a', 'b', 'a', 'a'],
            'key2' : ['one', 'one', 'two', 'three',
                      'two', 'two', 'one', 'three'],
            'data1': np.random.randn(8),
            'data2': np.random.randn(8)}
df_obj = pd.DataFrame(dict_obj)
print (df_obj)
```

```
  key1   key2     data1     data2
0    a    one -0.147612 -0.348087
1    b    one -0.992986  0.902458
2    a    two  0.547541 -0.310040
3    b  three  0.458871 -1.895392
4    a    two  1.224041  0.220150
5    b    two -0.200124 -1.562237
6    a    one  1.539144 -0.758716
7    a  three  0.385845  0.074309
```

```python
'''1. dataframe根据key2进行分组'''
print(df_obj.groupby('key2')['key1'].count())

print (type(df_obj.groupby('key1')))
#没有可视化的输出
```

```
key2
one      3
three    2
two      3
Name: key1, dtype: int64
<class 'pandas.core.groupby.generic.DataFrameGroupBy'>
```

```python
'''2. 指定列根据key1进行分组'''
print (type(df_obj['data1'].groupby(df_obj['key1'])))
```

```
<class 'pandas.core.groupby.generic.SeriesGroupBy'>
```

```python
# 分组运算
grouped1 = df_obj.groupby('key1',as_index=False)
print (grouped1.mean())

grouped2 = df_obj['data1'].groupby(df_obj['key1'])#指定某一列的数据在该索引下进行分组并且加以聚合
print (grouped2.mean())
```

```
  key1     data1     data2
0    a  0.709792 -0.224477
1    b -0.244746 -0.851723
key1
a    0.709792
b   -0.244746
Name: data1, dtype: float64
```

```python
'''3. 按自定义key分组，列表'''
self_def_key = [1, 1, 2, 2, 2, 1, 1, 1]
df_obj.groupby(self_def_key).mean()
```

|     | data1    | data2     |
| --- | -------- | --------- |
| 1   | 0.116853 | -0.338455 |
| 2   | 0.743484 | -0.661761 |

```python
df_obj
```

|     | key1 | key2  | data1     | data2     |
| --- | ---- | ----- | --------- | --------- |
| 0   | a    | one   | -0.147612 | -0.348087 |
| 1   | b    | one   | -0.992986 | 0.902458  |
| 2   | a    | two   | 0.547541  | -0.310040 |
| 3   | b    | three | 0.458871  | -1.895392 |
| 4   | a    | two   | 1.224041  | 0.220150  |
| 5   | b    | two   | -0.200124 | -1.562237 |
| 6   | a    | one   | 1.539144  | -0.758716 |
| 7   | a    | three | 0.385845  | 0.074309  |

```python
'''4. 按多个列多层分组 = = = 通过列表'''
grouped2 = df_obj.groupby(['key1', 'key2'],as_index=False)
print (grouped2.mean())
print('--------比较asindex的差异-------')
grouped2 = df_obj.groupby(['key1', 'key2'],as_index=True)
print (grouped2.mean())
```

```
  key1   key2     data1     data2
0    a    one  0.695766 -0.553401
1    a  three  0.385845  0.074309
2    a    two  0.885791 -0.044945
3    b    one -0.992986  0.902458
4    b  three  0.458871 -1.895392
5    b    two -0.200124 -1.562237
--------比较asindex的差异-------
               data1     data2
key1 key2
a    one    0.695766 -0.553401
     three  0.385845  0.074309
     two    0.885791 -0.044945
b    one   -0.992986  0.902458
     three  0.458871 -1.895392
     two   -0.200124 -1.562237
```

```python
# 多层分组按key的顺序进行===和上面的asindex作用一样，把所选取的列数据当成索引，这才是区别之处
grouped3 = df_obj.groupby(['key2', 'key1'])
print (grouped3.mean())
print ('=============================================')
'''PS：如果想按照列进行分组聚合运算 === unstack===也可以通过转置'''
print (grouped3.mean().unstack())
```

```
               data1     data2
key2  key1
one   a     0.695766 -0.553401
      b    -0.992986  0.902458
three a     0.385845  0.074309
      b     0.458871 -1.895392
two   a     0.885791 -0.044945
      b    -0.200124 -1.562237
=============================================
          data1               data2
key1          a         b         a         b
key2
one    0.695766 -0.992986 -0.553401  0.902458
three  0.385845  0.458871  0.074309 -1.895392
two    0.885791 -0.200124 -0.044945 -1.562237
```

### GroupBy 对象遍历迭代

```python
grouped1
```

```
<pandas.core.groupby.generic.DataFrameGroupBy object at 0x000001AF5B5F9088>
```

```python
# 单层分组
print(grouped1.head(5))
print("------------------------------------分割线------------------------------------------")
for group_name, group_data in grouped1:
    print (group_name)
    print (group_data['data1'])
```

```
  key1   key2     data1     data2
0    a    one -0.147612 -0.348087
1    b    one -0.992986  0.902458
2    a    two  0.547541 -0.310040
3    b  three  0.458871 -1.895392
4    a    two  1.224041  0.220150
5    b    two -0.200124 -1.562237
6    a    one  1.539144 -0.758716
7    a  three  0.385845  0.074309
------------------------------------分割线------------------------------------------
a
0   -0.147612
2    0.547541
4    1.224041
6    1.539144
7    0.385845
Name: data1, dtype: float64
b
1   -0.992986
3    0.458871
5   -0.200124
Name: data1, dtype: float64
```

```python
# 多层分组
for group_name, group_data in grouped2:
    print (group_name)
    print (group_data)
```

```
('a', 'one')
  key1 key2     data1     data2
0    a  one -0.147612 -0.348087
6    a  one  1.539144 -0.758716
('a', 'three')
  key1   key2     data1     data2
7    a  three  0.385845  0.074309
('a', 'two')
  key1 key2     data1    data2
2    a  two  0.547541 -0.31004
4    a  two  1.224041  0.22015
('b', 'one')
  key1 key2     data1     data2
1    b  one -0.992986  0.902458
('b', 'three')
  key1   key2     data1     data2
3    b  three  0.458871 -1.895392
('b', 'two')
  key1 key2     data1     data2
5    b  two -0.200124 -1.562237
```

```python
# GroupBy对象转换list
print(grouped1.mean())
list(grouped1)
```

```
  key1     data1     data2
0    a  0.709792 -0.224477
1    b -0.244746 -0.851723





[('a',   key1   key2     data1     data2
  0    a    one -0.147612 -0.348087
  2    a    two  0.547541 -0.310040
  4    a    two  1.224041  0.220150
  6    a    one  1.539144 -0.758716
  7    a  three  0.385845  0.074309), ('b',   key1   key2     data1     data2
  1    b    one -0.992986  0.902458
  3    b  three  0.458871 -1.895392
  5    b    two -0.200124 -1.562237)]
```

```python
# GroupBy对象转换dict
dict(list(grouped1))
```

```
{'a':   key1   key2     data1     data2
 0    a    one -0.147612 -0.348087
 2    a    two  0.547541 -0.310040
 4    a    two  1.224041  0.220150
 6    a    one  1.539144 -0.758716
 7    a  three  0.385845  0.074309, 'b':   key1   key2     data1     data2
 1    b    one -0.992986  0.902458
 3    b  three  0.458871 -1.895392
 5    b    two -0.200124 -1.562237}
```

```python
# 按列分组
print (df_obj.dtypes)

# 按数据类型分组
df_obj.groupby(df_obj.dtypes, axis=1).size()
df_obj.groupby(df_obj.dtypes, axis=1).sum()
```

```
key1      object
key2      object
data1    float64
data2    float64
dtype: object
```

### 其他分组方法

1. 其实列表也是分组的一种方式
   ===用到列表时候，一般都是多层索引了

```python
df_obj2 = pd.DataFrame(np.random.randint(1, 10, (5,5)),
                       columns=['a', 'b', 'c', 'd', 'e'],
                       index=['A', 'B', 'C', 'D', 'E'])
df_obj2.ix[1, 1:4] = np.NaN
df_obj2
```

```
C:\Users\wztli\Anaconda3\lib\site-packages\ipykernel_launcher.py:4: FutureWarning:
.ix is deprecated. Please use
.loc for label based indexing or
.iloc for positional indexing

See the documentation here:
http://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#ix-indexer-is-deprecated
  after removing the cwd from sys.path.
```

|     | a   | b   | c   | d   | e   |
| --- | --- | --- | --- | --- | --- |
| A   | 4   | 2.0 | 6.0 | 5.0 | 9   |
| B   | 5   | NaN | NaN | NaN | 6   |
| C   | 2   | 3.0 | 8.0 | 6.0 | 3   |
| D   | 9   | 5.0 | 6.0 | 5.0 | 9   |
| E   | 4   | 1.0 | 6.0 | 2.0 | 1   |

1. 通过字典分组

```python
# 通过字典分组
mapping_dict = {'A':'python', 'B':'python', 'C':'java', 'D':'C', 'E':'java'}
#df_obj2.groupby(mapping_dict, axis=1).size()
#df_obj2.groupby(mapping_dict, axis=1).count() # 非NaN的个数
print(df_obj2.groupby(mapping_dict, axis=0).sum())
```

```
        a    b     c    d   e
C       9  5.0   6.0  5.0   9
java    6  4.0  14.0  8.0   4
python  9  2.0   6.0  5.0  15
```

2. 通过函数分组

```python
# 通过函数分组
df_obj3 = pd.DataFrame(np.random.randint(1, 10, (5,5)),
                       columns=['a', 'b', 'c', 'd', 'e'],
                       index=['AA', 'BBB', 'CC', 'D', 'EE'])
#df_obj3

def group_key(idx):
    """
        idx 为列索引或行索引
    """
    #return idx
    return len(idx)

df_obj3.groupby(group_key).size()

# 以上自定义函数等价于
#df_obj3.groupby(len).size()
```

```
1    1
2    3
3    1
dtype: int64
```

3. 通过层级索引级别分组

```python
# 通过索引级别分组
columns = pd.MultiIndex.from_arrays([['Python', 'Java', 'Python', 'Java', 'Python'],
                                     ['A', 'A', 'B', 'C', 'B']], names=['language', 'index'])
df_obj4 = pd.DataFrame(np.random.randint(1, 10, (5, 5)), columns=columns)
df_obj4
```

| language | Python | Java | Python | Java | Python |
| -------- | ------ | ---- | ------ | ---- | ------ |
| index    | A      | A    | B      | C    | B      |
| 0        | 4      | 6    | 8      | 8    | 4      |
| 1        | 1      | 3    | 2      | 3    | 5      |
| 2        | 3      | 1    | 1      | 5    | 6      |
| 3        | 2      | 9    | 3      | 1    | 9      |
| 4        | 4      | 1    | 5      | 6    | 6      |

```python
# 根据language进行分组
df_obj4.groupby(level='language', axis=1).sum()
df_obj4.groupby(level='index', axis=1).sum()
```

| index | A   | B   | C   |
| ----- | --- | --- | --- |
| 0     | 10  | 12  | 8   |
| 1     | 4   | 7   | 3   |
| 2     | 4   | 7   | 5   |
| 3     | 11  | 12  | 1   |
| 4     | 5   | 11  | 6   |

## 二、聚合

```python
dict_obj = {'key1' : ['a', 'b', 'a', 'b',
                      'a', 'b', 'a', 'a'],
            'key2' : ['one', 'one', 'two', 'three',
                      'two', 'two', 'one', 'three'],
            'data1': np.random.randint(1,10, 8),
            'data2': np.random.randint(1,10, 8)}
df_obj5 = pd.DataFrame(dict_obj)
print (df_obj5)
```

```
  key1   key2  data1  data2
0    a    one      9      4
1    b    one      6      7
2    a    two      9      4
3    b  three      9      6
4    a    two      6      2
5    b    two      3      3
6    a    one      1      1
7    a  three      2      6
```

### 内置的聚合函数

```python
df_obj5
```

|     | key1 | key2  | data1 | data2 |
| --- | ---- | ----- | ----- | ----- |
| 0   | a    | one   | 9     | 4     |
| 1   | b    | one   | 6     | 7     |
| 2   | a    | two   | 9     | 4     |
| 3   | b    | three | 9     | 6     |
| 4   | a    | two   | 6     | 2     |
| 5   | b    | two   | 3     | 3     |
| 6   | a    | one   | 1     | 1     |
| 7   | a    | three | 2     | 6     |

```python
# 内置的聚合函数
#print (df_obj5.groupby('key1').sum())
#print (df_obj5.groupby('key1').max())
#print (df_obj5.groupby('key1').min())
print (df_obj5.groupby('key1').mean())
#print (df_obj5.groupby('key1').size())
#print (df_obj5.groupby('key1').count())
#print (df_obj5.groupby('key1').describe())
'''
count：分组中非NA的值
std：标准差
var：方差
median：非NA中的中位数
mean：非NA的平均值
25%||50%||75%是什么意思==不造？
'''
```

```
      data1     data2
key1
a       5.4  3.400000
b       6.0  5.333333





'\ncount：分组中非NA的值\nstd：标准差\nvar：方差\nmedian：非NA中的中位数\nmean：非NA的平均值\n25%||50%||75%是什么意思==不造？\n'
```

### 自定义聚合函数

```python
# 自定义聚合函数
def peak_range(df):
    """
        返回数值范围
    """
    #print type(df) #参数为索引所对应的记录
    return df.max() - df.min()

print (df_obj5.groupby('key1').agg(peak_range))
#print df_obj.groupby('key1').agg(lambda df : df.max() - df.min())
#默认列名就是函数名。
```

```
      data1  data2
key1
a         8      5
b         6      4
```

3. 同时应用多个聚合函数：agg

```python
# 同时应用多个聚合函数：agg
print (df_obj.groupby('key1').agg(['mean', 'std', 'count']))
```

```
         data1                     data2
          mean       std count      mean       std count
key1
a     0.709792  0.674293     5 -0.224477  0.385674     5
b    -0.244746  0.726957     3 -0.851723  1.528271     3
```

```python
print (df_obj.groupby('key1').agg(['mean', 'std', 'count', ('range', peak_range)])) # 通过元组提供新的列名
```

```
         data1                               data2
          mean       std count     range      mean       std count     range
key1
a     0.709792  0.674293     5  1.686756 -0.224477  0.385674     5  0.978865
b    -0.244746  0.726957     3  1.451857 -0.851723  1.528271     3  2.797850
```

```python
# 每列作用不同的聚合函数
dict_mapping = {'data1':'mean',
                'data2':'sum'}
print (df_obj.groupby('key1').agg(dict_mapping))
```

```
         data1     data2
key1
a     0.709792 -1.122384
b    -0.244746 -2.555170
```

```python
dict_mapping = {'data1':['mean','max'],
                'data2':'sum'}
print (df_obj.groupby('key1').agg(dict_mapping))
```

```
         data1               data2
          mean       max       sum
key1
a     0.709792  1.539144 -1.122384
b    -0.244746  0.458871 -2.555170
```

## 三、分组运算

```python
import pandas as pd
import numpy as np
```

### 分组和对齐

```python
s1 = pd.Series(range(10, 20), index = range(10))
s2 = pd.Series(range(20, 25), index = range(5))
print ('s1: ' )
print (s1)
print('===========================')
print ('s2: ')
print (s2)
```

```
s1:
0    10
1    11
2    12
3    13
4    14
5    15
6    16
7    17
8    18
9    19
dtype: int64
===========================
s2:
0    20
1    21
2    22
3    23
4    24
dtype: int64
```

```python
# Series 对齐运算
s1 + s2
print(s1+s2)
```

```
0    30.0
1    32.0
2    34.0
3    36.0
4    38.0
5     NaN
6     NaN
7     NaN
8     NaN
9     NaN
dtype: float64
```

```python
df1 = pd.DataFrame(np.ones((2,2)), columns = ['a', 'b'])
df2 = pd.DataFrame(np.ones((3,3)), columns = ['a', 'b', 'c'])

print ('df1: ')
print (df1)
print ('=================')
print ('df2: ')
print (df2)
```

```
df1:
     a    b
0  1.0  1.0
1  1.0  1.0
=================
df2:
     a    b    c
0  1.0  1.0  1.0
1  1.0  1.0  1.0
2  1.0  1.0  1.0
```

```python
# DataFrame对齐操作
print(df1 + df2)
```

```
     a    b   c
0  2.0  2.0 NaN
1  2.0  2.0 NaN
2  NaN  NaN NaN
```

① 常用运算函数

```python

# 填充未对齐的数据进行运算
print(s1.add(s2, fill_value = -1))
```

```
0    30.0
1    32.0
2    34.0
3    36.0
4    38.0
5    14.0
6    15.0
7    16.0
8    17.0
9    18.0
dtype: float64
```

```python
df1.sub(df2, fill_value = 2.)
#sub函数
```

|     | a   | b   | c   |
| --- | --- | --- | --- |
| 0   | 0.0 | 0.0 | 1.0 |
| 1   | 0.0 | 0.0 | 1.0 |
| 2   | 1.0 | 1.0 | 1.0 |

```python
# 填充NaN
s3 = s1 + s2
print (s3)
```

```
0    30.0
1    32.0
2    34.0
3    36.0
4    38.0
5     NaN
6     NaN
7     NaN
8     NaN
9     NaN
dtype: float64
```

```python
s3_filled = s3.fillna(-1)
print (s3)
```

```
0    30.0
1    32.0
2    34.0
3    36.0
4    38.0
5     NaN
6     NaN
7     NaN
8     NaN
9     NaN
dtype: float64
```

```python
df3 = df1 + df2
print (df3)
```

```
     a    b   c
0  2.0  2.0 NaN
1  2.0  2.0 NaN
2  NaN  NaN NaN
```

```python
df3.fillna(100, inplace = True)
print (df3)
```

```
       a      b      c
0    2.0    2.0  100.0
1    2.0    2.0  100.0
2  100.0  100.0  100.0
```

### 统计计算 VS 聚合运算

```python
df_obj1 = pd.DataFrame(np.random.randn(5,4), columns = ['a', 'b', 'c', 'd'])
print(df_obj1)
```

```
          a         b         c         d
0 -0.542708  0.201376  1.111431  1.784324
1  0.583422  0.231096 -2.801967  0.568497
2 -0.577329 -1.668581 -0.842126  1.803080
3 -0.128431 -1.769619  2.089983  0.209761
4  0.493981 -1.571405  0.690019 -0.215292
```

```python
print(df_obj1.sum(axis=1))
print('=====================================')
print(df_obj1.max())
print('=====================================')
print(df_obj1.min(axis=1))
```

```
0    2.554423
1   -1.418952
2   -1.284956
3    0.401694
4   -0.602698
dtype: float64
=====================================
a    0.583422
b    0.231096
c    2.089983
d    1.803080
dtype: float64
=====================================
0   -0.542708
1   -2.801967
2   -1.668581
3   -1.769619
4   -1.571405
dtype: float64
```

### 数据分组运算

```python
# 分组运算后保持shape
dict_obj = {'key1' : ['a', 'b', 'a', 'b',
                      'a', 'b', 'a', 'a'],
            'key2' : ['one', 'one', 'two', 'three',
                      'two', 'two', 'one', 'three'],
            'data1': np.random.randint(1, 10, 8),
            'data2': np.random.randint(1, 10, 8)}
df_obj = pd.DataFrame(dict_obj)
df_obj
```

|     | key1 | key2  | data1 | data2 |
| --- | ---- | ----- | ----- | ----- |
| 0   | a    | one   | 4     | 3     |
| 1   | b    | one   | 4     | 4     |
| 2   | a    | two   | 9     | 6     |
| 3   | b    | three | 8     | 2     |
| 4   | a    | two   | 3     | 3     |
| 5   | b    | two   | 6     | 2     |
| 6   | a    | one   | 4     | 1     |
| 7   | a    | three | 2     | 2     |

```python
# 按key1分组后，计算data1，data2的统计信息======并附加到原始表格中
k1_sum = df_obj.groupby('key1').sum().add_prefix('sum_')
print(k1_sum)
print('================================')
print(df_obj)
```

```
      sum_data1  sum_data2
key1
a            22         15
b            18          8
================================
  key1   key2  data1  data2
0    a    one      4      3
1    b    one      4      4
2    a    two      9      6
3    b  three      8      2
4    a    two      3      3
5    b    two      6      2
6    a    one      4      1
7    a  three      2      2
```

1. merge 方法

```python
# 方法1，使用merge
pd.merge(df_obj, k1_sum, left_on='key1', right_index=True)
```

|     | key1 | key2  | data1 | data2 | sum_data1 | sum_data2 |
| --- | ---- | ----- | ----- | ----- | --------- | --------- |
| 0   | a    | one   | 4     | 3     | 22        | 15        |
| 2   | a    | two   | 9     | 6     | 22        | 15        |
| 4   | a    | two   | 3     | 3     | 22        | 15        |
| 6   | a    | one   | 4     | 1     | 22        | 15        |
| 7   | a    | three | 2     | 2     | 22        | 15        |
| 1   | b    | one   | 4     | 4     | 18        | 8         |
| 3   | b    | three | 8     | 2     | 18        | 8         |
| 5   | b    | two   | 6     | 2     | 18        | 8         |

2. transform 方法

```python
# 方法2，使用transform
k1_sum_tf = df_obj.groupby('key1').transform(np.sum).add_prefix('sum_')
df_obj[k1_sum_tf.columns] = k1_sum_tf
df_obj
```

|     | key1 | key2  | data1 | data2 | sum_key2          | sum_data1 | sum_data2 |
| --- | ---- | ----- | ----- | ----- | ----------------- | --------- | --------- |
| 0   | a    | one   | 4     | 3     | onetwotwoonethree | 22        | 15        |
| 1   | b    | one   | 4     | 4     | onethreetwo       | 18        | 8         |
| 2   | a    | two   | 9     | 6     | onetwotwoonethree | 22        | 15        |
| 3   | b    | three | 8     | 2     | onethreetwo       | 18        | 8         |
| 4   | a    | two   | 3     | 3     | onetwotwoonethree | 22        | 15        |
| 5   | b    | two   | 6     | 2     | onethreetwo       | 18        | 8         |
| 6   | a    | one   | 4     | 1     | onetwotwoonethree | 22        | 15        |
| 7   | a    | three | 2     | 2     | onetwotwoonethree | 22        | 15        |

3. 自定义函数

```python
# 自定义函数传入transform
def diff_mean(s):
    """
        返回数据与均值的差值
    """
    return s - s.mean()

df_obj.groupby('key1').transform(diff_mean)
```

|     | data1 | data2     | sum_data1 | sum_data2 |
| --- | ----- | --------- | --------- | --------- |
| 0   | -0.4  | 0.000000  | 0         | 0         |
| 1   | -2.0  | 1.333333  | 0         | 0         |
| 2   | 4.6   | 3.000000  | 0         | 0         |
| 3   | 2.0   | -0.666667 | 0         | 0         |
| 4   | -1.4  | 0.000000  | 0         | 0         |
| 5   | 0.0   | -0.666667 | 0         | 0         |
| 6   | -0.4  | -2.000000 | 0         | 0         |
| 7   | -2.4  | -1.000000 | 0         | 0         |

```python
dataset_path = './data/starcraft.csv'
df_data = pd.read_csv(dataset_path, usecols=['LeagueIndex', 'Age', 'HoursPerWeek',
                                             'TotalHours', 'APM'])
```

- apply

```python
def top_n(df, n=3, column='APM'):
    """
        返回每个分组按 column 的 top n 数据
    """
    return df.sort_values(by=column, ascending=False)[:n]

df_data.groupby('LeagueIndex').apply(top_n)
```

|             |      | LeagueIndex | Age  | HoursPerWeek | TotalHours | APM      |
| ----------- | ---- | ----------- | ---- | ------------ | ---------- | -------- |
| LeagueIndex |      |             |      |              |            |          |
| 1           | 2214 | 1           | 20.0 | 12.0         | 730.0      | 172.9530 |
|             | 2246 | 1           | 27.0 | 8.0          | 250.0      | 141.6282 |
|             | 1753 | 1           | 20.0 | 28.0         | 100.0      | 139.6362 |
| 2           | 3062 | 2           | 20.0 | 6.0          | 100.0      | 179.6250 |
|             | 3229 | 2           | 16.0 | 24.0         | 110.0      | 156.7380 |
|             | 1520 | 2           | 29.0 | 6.0          | 250.0      | 151.6470 |
| 3           | 1557 | 3           | 22.0 | 6.0          | 200.0      | 226.6554 |
|             | 484  | 3           | 19.0 | 42.0         | 450.0      | 220.0692 |
|             | 2883 | 3           | 16.0 | 8.0          | 800.0      | 208.9500 |
| 4           | 2688 | 4           | 26.0 | 24.0         | 990.0      | 249.0210 |
|             | 1759 | 4           | 16.0 | 6.0          | 75.0       | 229.9122 |
|             | 2637 | 4           | 23.0 | 24.0         | 650.0      | 227.2272 |
| 5           | 3277 | 5           | 18.0 | 16.0         | 950.0      | 372.6426 |
|             | 93   | 5           | 17.0 | 36.0         | 720.0      | 335.4990 |
|             | 202  | 5           | 37.0 | 14.0         | 800.0      | 327.7218 |
| 6           | 734  | 6           | 16.0 | 28.0         | 730.0      | 389.8314 |
|             | 2746 | 6           | 16.0 | 28.0         | 4000.0     | 350.4114 |
|             | 1810 | 6           | 21.0 | 14.0         | 730.0      | 323.2506 |
| 7           | 3127 | 7           | 23.0 | 42.0         | 2000.0     | 298.7952 |
|             | 104  | 7           | 21.0 | 24.0         | 1000.0     | 286.4538 |
|             | 1654 | 7           | 18.0 | 98.0         | 700.0      | 236.0316 |
| 8           | 3393 | 8           | NaN  | NaN          | NaN        | 375.8664 |
|             | 3373 | 8           | NaN  | NaN          | NaN        | 364.8504 |
|             | 3372 | 8           | NaN  | NaN          | NaN        | 355.3518 |

```python
# apply函数接收的参数会传入自定义的函数中
df_data.groupby('LeagueIndex').apply(top_n, n=2, column='Age')
```

|             |      | LeagueIndex | Age  | HoursPerWeek | TotalHours | APM      |
| ----------- | ---- | ----------- | ---- | ------------ | ---------- | -------- |
| LeagueIndex |      |             |      |              |            |          |
| 1           | 3146 | 1           | 40.0 | 12.0         | 150.0      | 38.5590  |
|             | 3040 | 1           | 39.0 | 10.0         | 500.0      | 29.8764  |
| 2           | 920  | 2           | 43.0 | 10.0         | 730.0      | 86.0586  |
|             | 2437 | 2           | 41.0 | 4.0          | 200.0      | 54.2166  |
| 3           | 1258 | 3           | 41.0 | 14.0         | 800.0      | 77.6472  |
|             | 2972 | 3           | 40.0 | 10.0         | 500.0      | 60.5970  |
| 4           | 1696 | 4           | 44.0 | 6.0          | 500.0      | 89.5266  |
|             | 1729 | 4           | 39.0 | 8.0          | 500.0      | 86.7246  |
| 5           | 202  | 5           | 37.0 | 14.0         | 800.0      | 327.7218 |
|             | 2745 | 5           | 37.0 | 18.0         | 1000.0     | 123.4098 |
| 6           | 3069 | 6           | 31.0 | 8.0          | 800.0      | 133.1790 |
|             | 2706 | 6           | 31.0 | 8.0          | 700.0      | 66.9918  |
| 7           | 2813 | 7           | 26.0 | 36.0         | 1300.0     | 188.5512 |
|             | 1992 | 7           | 26.0 | 24.0         | 1000.0     | 219.6690 |
| 8           | 3340 | 8           | NaN  | NaN          | NaN        | 189.7404 |
|             | 3341 | 8           | NaN  | NaN          | NaN        | 287.8128 |

- 禁止分组 group_keys=False

```python
df_data.groupby('LeagueIndex', group_keys=False).apply(top_n)
```

|      | LeagueIndex | Age  | HoursPerWeek | TotalHours | APM      |
| ---- | ----------- | ---- | ------------ | ---------- | -------- |
| 2214 | 1           | 20.0 | 12.0         | 730.0      | 172.9530 |
| 2246 | 1           | 27.0 | 8.0          | 250.0      | 141.6282 |
| 1753 | 1           | 20.0 | 28.0         | 100.0      | 139.6362 |
| 3062 | 2           | 20.0 | 6.0          | 100.0      | 179.6250 |
| 3229 | 2           | 16.0 | 24.0         | 110.0      | 156.7380 |
| 1520 | 2           | 29.0 | 6.0          | 250.0      | 151.6470 |
| 1557 | 3           | 22.0 | 6.0          | 200.0      | 226.6554 |
| 484  | 3           | 19.0 | 42.0         | 450.0      | 220.0692 |
| 2883 | 3           | 16.0 | 8.0          | 800.0      | 208.9500 |
| 2688 | 4           | 26.0 | 24.0         | 990.0      | 249.0210 |
| 1759 | 4           | 16.0 | 6.0          | 75.0       | 229.9122 |
| 2637 | 4           | 23.0 | 24.0         | 650.0      | 227.2272 |
| 3277 | 5           | 18.0 | 16.0         | 950.0      | 372.6426 |
| 93   | 5           | 17.0 | 36.0         | 720.0      | 335.4990 |
| 202  | 5           | 37.0 | 14.0         | 800.0      | 327.7218 |
| 734  | 6           | 16.0 | 28.0         | 730.0      | 389.8314 |
| 2746 | 6           | 16.0 | 28.0         | 4000.0     | 350.4114 |
| 1810 | 6           | 21.0 | 14.0         | 730.0      | 323.2506 |
| 3127 | 7           | 23.0 | 42.0         | 2000.0     | 298.7952 |
| 104  | 7           | 21.0 | 24.0         | 1000.0     | 286.4538 |
| 1654 | 7           | 18.0 | 98.0         | 700.0      | 236.0316 |
| 3393 | 8           | NaN  | NaN          | NaN        | 375.8664 |
| 3373 | 8           | NaN  | NaN          | NaN        | 364.8504 |
| 3372 | 8           | NaN  | NaN          | NaN        | 355.3518 |
