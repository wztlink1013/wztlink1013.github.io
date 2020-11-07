---
title: Data-清洗和规整
tags: DataAnalysis
categories: DataAnalysis
date: 2020-02-10 15:02:40
sidebar: [blogger, group-Data, toc, category]
group: group-Data
order: 16
description: "清洗数据：删除指定数据、处理缺失数据etc；规整数据：连接、合并、重构、转换etc"
---

## 一、删除指定行列数据

```python
import pandas as pd
import numpy as np
```

```python
dict_data = {'A': 1.,
             'B': pd.Timestamp('20161217'),
             'C': pd.Series(1, index=list(range(4)),dtype='float32'),
             'D': np.array([3] * 4,dtype='int32'),
             'E' : pd.Categorical(["Python","Java","C++","C#"]),
             'F' : 'ChinaHadoop' }
df_obj2 = pd.DataFrame(dict_data)
print(df_obj2)
```

```
     A          B    C  D       E            F
0  1.0 2016-12-17  1.0  3  Python  ChinaHadoop
1  1.0 2016-12-17  1.0  3    Java  ChinaHadoop
2  1.0 2016-12-17  1.0  3     C++  ChinaHadoop
3  1.0 2016-12-17  1.0  3      C#  ChinaHadoop
```

### del

> 删除列

```python
del df_obj2['A']
print (df_obj2.head())
```

```
           B    C  D       E            F
0 2016-12-17  1.0  3  Python  ChinaHadoop
1 2016-12-17  1.0  3    Java  ChinaHadoop
2 2016-12-17  1.0  3     C++  ChinaHadoop
3 2016-12-17  1.0  3      C#  ChinaHadoop
```

### drop

> 删除行/列数据

```python
dict_data = {'A': 1.,
             'B': pd.Timestamp('20161217'),
             'C': pd.Series(1, index=list(range(4)),dtype='float32'),
             'D': np.array([3] * 4,dtype='int32'),
             'E' : pd.Categorical(["Python","Java","C++","C#"]),
             'F' : 'ChinaHadoop' }
df_obj3 = pd.DataFrame(dict_data,index = ['sfd','sdfd','wer','rwer'])
print (df_obj3.head(7))
print(df_obj3.drop('wer'))#删除行
print(df_obj3.drop('F',axis=1))#删除列
```

```
        A          B   C  D       E            F
sfd   1.0 2016-12-17 NaN  3  Python  ChinaHadoop
sdfd  1.0 2016-12-17 NaN  3    Java  ChinaHadoop
wer   1.0 2016-12-17 NaN  3     C++  ChinaHadoop
rwer  1.0 2016-12-17 NaN  3      C#  ChinaHadoop
        A          B   C  D       E            F
sfd   1.0 2016-12-17 NaN  3  Python  ChinaHadoop
sdfd  1.0 2016-12-17 NaN  3    Java  ChinaHadoop
rwer  1.0 2016-12-17 NaN  3      C#  ChinaHadoop
        A          B   C  D       E
sfd   1.0 2016-12-17 NaN  3  Python
sdfd  1.0 2016-12-17 NaN  3    Java
wer   1.0 2016-12-17 NaN  3     C++
rwer  1.0 2016-12-17 NaN  3      C#
```

## 二、处理缺失数据

```python
df_data = pd.DataFrame([np.random.randn(3), [1., np.nan, np.nan],
                       [4., np.nan, np.nan], [1., np.nan, 2.]])
df_data.head()
```

|     | 0         | 1         | 2         |
| --- | --------- | --------- | --------- |
| 0   | -0.702713 | -0.991383 | -1.058464 |
| 1   | 1.000000  | NaN       | NaN       |
| 2   | 4.000000  | NaN       | NaN       |
| 3   | 1.000000  | NaN       | 2.000000  |

### 判断是否存在缺失值

```python
df_data.isnull()
```

|     | 0     | 1     | 2     |
| --- | ----- | ----- | ----- |
| 0   | False | False | False |
| 1   | False | True  | True  |
| 2   | False | True  | True  |
| 3   | False | True  | False |

### 丢弃缺失数据

```python
print(df_data.dropna(axis=0))
#0是行；1是列
```

```
          0         1         2
0 -0.702713 -0.991383 -1.058464
```

### 填充缺失数据

```python
df_data.fillna(-100.)
```

|     | 0         | 1           | 2           |
| --- | --------- | ----------- | ----------- |
| 0   | -0.702713 | -0.991383   | -1.058464   |
| 1   | 1.000000  | -100.000000 | -100.000000 |
| 2   | 4.000000  | -100.000000 | -100.000000 |
| 3   | 1.000000  | -100.000000 | 2.000000    |

## 三、数据规整-连接-含索引

- 数据连接 merge

```python
import pandas as pd
import numpy as np
```

```python
df_obj1 = pd.DataFrame({'key': ['b', 'b', 'a', 'c', 'a', 'a', 'b'],
                        'data1' : ['sfd','fdsf','we',24,3253,234,23]})
df_obj2 = pd.DataFrame({'key': ['a', 'b', 'd'],
                        'data2' : np.random.randint(0,10,3)})

print (df_obj1)
print (df_obj2)
```

```
  key data1
0   b   sfd
1   b  fdsf
2   a    we
3   c    24
4   a  3253
5   a   234
6   b    23
  key  data2
0   a      0
1   b      6
2   d      6
```

### merge 和 on

> 默认将重叠列的列名作为“外键”进行连接

```python
pd.merge(df_obj1, df_obj2)
```

|     | key | data1 | data2 |
| --- | --- | ----- | ----- |
| 0   | b   | sfd   | 6     |
| 1   | b   | fdsf  | 6     |
| 2   | b   | 23    | 6     |
| 3   | a   | we    | 0     |
| 4   | a   | 3253  | 0     |
| 5   | a   | 234   | 0     |

```python
# on显示指定“外键”
pd.merge(df_obj1, df_obj2, on='key')
```

|     | key | data1 | data2 |
| --- | --- | ----- | ----- |
| 0   | b   | sfd   | 6     |
| 1   | b   | fdsf  | 6     |
| 2   | b   | 23    | 6     |
| 3   | a   | we    | 0     |
| 4   | a   | 3253  | 0     |
| 5   | a   | 234   | 0     |

### left-on 和 right-on

```python
# left_on，right_on分别指定左侧数据和右侧数据的“外键”

# 更改列名
df_obj1 = df_obj1.rename(columns={'key':'key1'})
df_obj2 = df_obj2.rename(columns={'key':'key2'})
```

```python
print(df_obj1)
print(df_obj2)
```

```
  key1 data1
0    b   sfd
1    b  fdsf
2    a    we
3    c    24
4    a  3253
5    a   234
6    b    23
  key2  data2
0    a      0
1    b      6
2    d      6
```

```python
pd.merge(df_obj1, df_obj2, left_on='key1', right_on='key2')
```

|     | key1 | data1 | key2 | data2 |
| --- | ---- | ----- | ---- | ----- |
| 0   | b    | sfd   | b    | 6     |
| 1   | b    | fdsf  | b    | 6     |
| 2   | b    | 23    | b    | 6     |
| 3   | a    | we    | a    | 0     |
| 4   | a    | 3253  | a    | 0     |
| 5   | a    | 234   | a    | 0     |

### how

```python
# “外连接”
pd.merge(df_obj1, df_obj2, left_on='key1', right_on='key2', how='outer')
```

|     | key1 | data1 | key2 | data2 |
| --- | ---- | ----- | ---- | ----- |
| 0   | b    | sfd   | b    | 6.0   |
| 1   | b    | fdsf  | b    | 6.0   |
| 2   | b    | 23    | b    | 6.0   |
| 3   | a    | we    | a    | 0.0   |
| 4   | a    | 3253  | a    | 0.0   |
| 5   | a    | 234   | a    | 0.0   |
| 6   | c    | 24    | NaN  | NaN   |
| 7   | NaN  | NaN   | d    | 6.0   |

```python
# 左连接
pd.merge(df_obj1, df_obj2, left_on='key1', right_on='key2', how='left')
```

|     | key1 | data1 | key2 | data2 |
| --- | ---- | ----- | ---- | ----- |
| 0   | b    | sfd   | b    | 6.0   |
| 1   | b    | fdsf  | b    | 6.0   |
| 2   | a    | we    | a    | 0.0   |
| 3   | c    | 24    | NaN  | NaN   |
| 4   | a    | 3253  | a    | 0.0   |
| 5   | a    | 234   | a    | 0.0   |
| 6   | b    | 23    | b    | 6.0   |

```python
# 右连接
pd.merge(df_obj1, df_obj2, left_on='key1', right_on='key2', how='right')
```

|     | key1 | data1 | key2 | data2 |
| --- | ---- | ----- | ---- | ----- |
| 0   | b    | sfd   | b    | 6     |
| 1   | b    | fdsf  | b    | 6     |
| 2   | b    | 23    | b    | 6     |
| 3   | a    | we    | a    | 0     |
| 4   | a    | 3253  | a    | 0     |
| 5   | a    | 234   | a    | 0     |
| 6   | NaN  | NaN   | d    | 6     |

### 处理重复列名 suffixes

```python
# 处理重复列名
df_obj1 = pd.DataFrame({'key': ['b', 'b', 'a', 'c', 'a', 'a', 'b'],
                        'data' : np.random.randint(0,10,7)})
df_obj2 = pd.DataFrame({'key': ['a', 'b', 'd'],
                        'data' : np.random.randint(0,10,3)})

pd.merge(df_obj1, df_obj2, on='key', suffixes=('_left', '_right'))
```

|     | key | data_left | data_right |
| --- | --- | --------- | ---------- |
| 0   | b   | 9         | 1          |
| 1   | b   | 1         | 1          |
| 2   | b   | 6         | 1          |
| 3   | a   | 7         | 1          |
| 4   | a   | 3         | 1          |
| 5   | a   | 4         | 1          |

```python
# 按索引连接
df_obj3 = pd.DataFrame({'key': ['b', 'b', 'a', 'c', 'a', 'a', 'b'],
                        'data1' : np.random.randint(0,10,7)})
df_obj4 = pd.DataFrame({'data2' : np.random.randint(0,10,3)}, index=['a', 'b', 'd'])
```

```python
print(df_obj3)
print(df_obj4)
```

```
  key  data1
0   b      7
1   b      4
2   a      1
3   c      9
4   a      2
5   a      9
6   b      7
   data2
a      9
b      4
d      0
```

```python
pd.merge(df_obj3, df_obj4, left_on='key', right_index=True)
```

|     | key | data1 | data2 |
| --- | --- | ----- | ----- |
| 0   | b   | 7     | 4     |
| 1   | b   | 4     | 4     |
| 6   | b   | 7     | 4     |
| 2   | a   | 1     | 9     |
| 4   | a   | 2     | 9     |
| 5   | a   | 9     | 9     |

### 按索引连接 right_index

```python
# 按索引连接
df_obj1 = pd.DataFrame({'key': ['b', 'b', 'a', 'c', 'a', 'a', 'b'],
                        'data1' : np.random.randint(0,10,7)})
df_obj2 = pd.DataFrame({'data2' : np.random.randint(0,10,3)}, index=['a', 'b', 'd'])
```

```python
print(df_obj1)
print(df_obj2)
```

```
  key  data1
0   b      0
1   b      2
2   a      7
3   c      3
4   a      1
5   a      1
6   b      6
   data2
a      2
b      1
d      1
```

```python
pd.merge(df_obj1, df_obj2, left_on='key', right_index=True)
```

|     | key | data1 | data2 |
| --- | --- | ----- | ----- |
| 0   | b   | 0     | 1     |
| 1   | b   | 2     | 1     |
| 6   | b   | 6     | 1     |
| 2   | a   | 7     | 2     |
| 4   | a   | 1     | 2     |
| 5   | a   | 1     | 2     |

## 四、数据合并

- 数据合并 concat
- 按索引连接===right_index

```python
import numpy as np
import pandas as pd
```

### numpy 的 concat

```python
arr1 = np.random.randint(0, 10, (3, 4))
arr2 = np.random.randint(0, 10, (3, 4))

print (arr1)
print (arr2)
```

```
[[6 0 3 2]
 [5 7 9 8]
 [5 8 0 3]]
[[6 5 7 9]
 [0 1 0 0]
 [1 1 1 7]]
```

```python
np.concatenate([arr1, arr2])
```

```
array([[6, 0, 3, 2],
       [5, 7, 9, 8],
       [5, 8, 0, 3],
       [6, 5, 7, 9],
       [0, 1, 0, 0],
       [1, 1, 1, 7]])
```

```python
np.concatenate([arr1, arr2], axis=1)
```

```
array([[6, 0, 3, 2, 6, 5, 7, 9],
       [5, 7, 9, 8, 0, 1, 0, 0],
       [5, 8, 0, 3, 1, 1, 1, 7]])
```

### series 上的 concat

```python
# index 没有重复的情况
ser_obj1 = pd.Series(np.random.randint(0, 10, 5), index=range(0,5))
ser_obj2 = pd.Series(np.random.randint(0, 10, 4), index=range(5,9))
ser_obj3 = pd.Series(np.random.randint(0, 10, 3), index=range(9,12))
```

```python
pd.concat([ser_obj1, ser_obj2, ser_obj3])
```

```
0     0
1     4
2     5
3     1
4     9
5     7
6     8
7     5
8     0
9     5
10    9
11    0
dtype: int32
```

```python
pd.concat([ser_obj1, ser_obj2, ser_obj3], axis=1)
```

|     | 0   | 1   | 2   |
| --- | --- | --- | --- |
| 0   | 0.0 | NaN | NaN |
| 1   | 4.0 | NaN | NaN |
| 2   | 5.0 | NaN | NaN |
| 3   | 1.0 | NaN | NaN |
| 4   | 9.0 | NaN | NaN |
| 5   | NaN | 7.0 | NaN |
| 6   | NaN | 8.0 | NaN |
| 7   | NaN | 5.0 | NaN |
| 8   | NaN | 0.0 | NaN |
| 9   | NaN | NaN | 5.0 |
| 10  | NaN | NaN | 9.0 |
| 11  | NaN | NaN | 0.0 |

```python
# index 有重复的情况
ser_obj1 = pd.Series(np.random.randint(0, 10, 5), index=range(5))
ser_obj2 = pd.Series(np.random.randint(0, 10, 4), index=range(4))
ser_obj3 = pd.Series(np.random.randint(0, 10, 3), index=range(3))

print (ser_obj1)
print (ser_obj2)
print (ser_obj3)
```

```
0    5
1    3
2    0
3    8
4    3
dtype: int32
0    5
1    3
2    2
3    1
dtype: int32
0    5
1    8
2    6
dtype: int32
```

```python
pd.concat([ser_obj1, ser_obj2, ser_obj3])
```

```
0    5
1    3
2    0
3    8
4    3
0    5
1    3
2    2
3    1
0    5
1    8
2    6
dtype: int32
```

```python
pd.concat([ser_obj1, ser_obj2, ser_obj3], axis=1, join='inner')
```

|     | 0   | 1   | 2   |
| --- | --- | --- | --- |
| 0   | 5   | 5   | 5   |
| 1   | 3   | 3   | 8   |
| 2   | 0   | 2   | 6   |

### dataframe 上的 concat

```python
df_obj1 = pd.DataFrame(np.random.randint(0, 10, (3, 2)), index=['a', 'b', 'c'],
                       columns=['A', 'B'])
df_obj2 = pd.DataFrame(np.random.randint(0, 10, (2, 2)), index=['a', 'b'],
                       columns=['C', 'D'])
print (df_obj1)
print (df_obj2)
```

```
   A  B
a  4  3
b  8  1
c  6  3
   C  D
a  1  3
b  8  2
```

```python
pd.concat([df_obj1, df_obj2])
```

```
C:\Users\wztli\Anaconda3\lib\site-packages\ipykernel_launcher.py:1: FutureWarning: Sorting because non-concatenation axis is not aligned. A future version
of pandas will change to not sort by default.

To accept the future behavior, pass 'sort=False'.

To retain the current behavior and silence the warning, pass 'sort=True'.

  """Entry point for launching an IPython kernel.
```

|     | A   | B   | C   | D   |
| --- | --- | --- | --- | --- |
| a   | 4.0 | 3.0 | NaN | NaN |
| b   | 8.0 | 1.0 | NaN | NaN |
| c   | 6.0 | 3.0 | NaN | NaN |
| a   | NaN | NaN | 1.0 | 3.0 |
| b   | NaN | NaN | 8.0 | 2.0 |

```python
pd.concat([df_obj1, df_obj2], axis=1)
```

```
C:\Users\wztli\Anaconda3\lib\site-packages\ipykernel_launcher.py:1: FutureWarning: Sorting because non-concatenation axis is not aligned. A future version
of pandas will change to not sort by default.

To accept the future behavior, pass 'sort=False'.

To retain the current behavior and silence the warning, pass 'sort=True'.

  """Entry point for launching an IPython kernel.
```

|     | A   | B   | C   | D   |
| --- | --- | --- | --- | --- |
| a   | 4   | 3   | 1.0 | 3.0 |
| b   | 8   | 1   | 8.0 | 2.0 |
| c   | 6   | 3   | NaN | NaN |

## 五、数据重构

```python
import numpy as np
import pandas as pd
```

### stack

```python
df_obj = pd.DataFrame(np.random.randint(0,10, (5,2)), columns=['data1', 'data2'])
df_obj
```

|     | data1 | data2 |
| --- | ----- | ----- |
| 0   | 0     | 4     |
| 1   | 6     | 2     |
| 2   | 9     | 8     |
| 3   | 7     | 0     |
| 4   | 3     | 1     |

```python
stacked = df_obj.stack()
print (stacked)
```

```
0  data1    0
   data2    4
1  data1    6
   data2    2
2  data1    9
   data2    8
3  data1    7
   data2    0
4  data1    3
   data2    1
dtype: int32
```

```python
print (type(stacked))
print (type(stacked.index))
```

```
<class 'pandas.core.series.Series'>
<class 'pandas.core.indexes.multi.MultiIndex'>
```

### unstack

```python
# 默认操作内层索引
stacked.unstack()
```

|     | data1 | data2 |
| --- | ----- | ----- |
| 0   | 0     | 4     |
| 1   | 6     | 2     |
| 2   | 9     | 8     |
| 3   | 7     | 0     |
| 4   | 3     | 1     |

```python
# 通过level指定操作索引的级别
stacked.unstack(level=0)
```

|       | 0   | 1   | 2   | 3   | 4   |
| ----- | --- | --- | --- | --- | --- |
| data1 | 0   | 6   | 9   | 7   | 3   |
| data2 | 4   | 2   | 8   | 0   | 1   |

## 六、数据转换

```python
import numpy as np
import pandas as pd
```

### 重复数据 duplicates 函数

```python
df_obj = pd.DataFrame({'data1' : ['a'] * 4 + ['b'] * 4,
                       'data2' : np.random.randint(0, 4, 8)})
df_obj
```

|     | data1 | data2 |
| --- | ----- | ----- |
| 0   | a     | 3     |
| 1   | a     | 2     |
| 2   | a     | 2     |
| 3   | a     | 1     |
| 4   | b     | 0     |
| 5   | b     | 2     |
| 6   | b     | 2     |
| 7   | b     | 1     |

```python
df_obj.duplicated()
```

```
0    False
1    False
2     True
3    False
4    False
5    False
6     True
7    False
dtype: bool
```

```python
df_obj.drop_duplicates()
```

|     | data1 | data2 |
| --- | ----- | ----- |
| 0   | a     | 3     |
| 1   | a     | 2     |
| 3   | a     | 1     |
| 4   | b     | 0     |
| 5   | b     | 2     |
| 7   | b     | 1     |

```python
df_obj.drop_duplicates('data2')
```

|     | data1 | data2 |
| --- | ----- | ----- |
| 0   | a     | 3     |
| 1   | a     | 2     |
| 3   | a     | 1     |
| 4   | b     | 0     |

### map 函数

```python
ser_obj = pd.Series(np.random.randint(0,10,10))
ser_obj
```

```
0    1
1    9
2    1
3    2
4    7
5    2
6    4
7    5
8    4
9    6
dtype: int32
```

```python
ser_obj.map(lambda x : x ** 2)
```

```
0     1
1    81
2     1
3     4
4    49
5     4
6    16
7    25
8    16
9    36
dtype: int64
```

### 数据替换 repalce

```python
# 替换单个值
ser_obj.replace(0, -100)
```

```
0    1
1    9
2    1
3    2
4    7
5    2
6    4
7    5
8    4
9    6
dtype: int32
```

```python
# 替换多个值
ser_obj.replace([0, 2], -100)
```

```
0      1
1      9
2      1
3   -100
4      7
5   -100
6      4
7      5
8      4
9      6
dtype: int32
```

```python
# 替换多个值
ser_obj.replace([0, 2], [-100, -200])
```

```
0      1
1      9
2      1
3   -200
4      7
5   -200
6      4
7      5
8      4
9      6
dtype: int64
```

```python
ser_obj.map(lambda x : x ** 2)

#### 3. 数据替换repalce

# 替换单个值
ser_obj.replace(0, -100)

# 替换多个值
ser_obj.replace([0, 2], -100)

# 替换多个值
ser_obj.replace([0, 2], [-100, -200])
```

```
0      1
1      9
2      1
3   -200
4      7
5   -200
6      4
7      5
8      4
9      6
dtype: int64
```
