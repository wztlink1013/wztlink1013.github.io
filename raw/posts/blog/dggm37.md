---
title: Data-描述数据
tags: DataAnalysis
categories: DataAnalysis
date: 2020-02-10 14:55:49
sidebar: [blogger, group-Data, toc, category]
group: group-Data
order: 16
description: "数据描述函数tail;head;info;describe……"
---

## 一、数据预览：tail（）；head（）

```python
import numpy as np
import pandas as pd
df_obj = pd.DataFrame(np.random.randn(5,4), columns = ['a', 'b', 'c', 'd'])
print(df_obj.tail())# 数据预览尾巴
print(df_obj.head())# 数据预览头部
```

```
          a         b         c         d
0 -0.507788  0.213237  0.003150 -0.777312
1 -0.896653 -2.188016 -0.114848  0.167057
2 -1.131242 -0.142287 -1.027330  1.861814
3  0.369608  0.823453  1.030830 -0.041778
4 -0.647625  0.056791 -0.394078 -1.347718
          a         b         c         d
0 -0.507788  0.213237  0.003150 -0.777312
1 -0.896653 -2.188016 -0.114848  0.167057
2 -1.131242 -0.142287 -1.027330  1.861814
3  0.369608  0.823453  1.030830 -0.041778
4 -0.647625  0.056791 -0.394078 -1.347718
```

## 二、数据描述：shape；info()

```python
print ('数据集有%i行，%i列' %(df_obj.shape[0], df_obj.shape[1]))
```

```
数据集有5行，4列
```

```python
print(df_obj.info())
```

```
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 5 entries, 0 to 4
Data columns (total 4 columns):
a    5 non-null float64
b    5 non-null float64
c    5 non-null float64
d    5 non-null float64
dtypes: float64(4)
memory usage: 288.0 bytes
None
```

## 三、数据统计：describe()

```python
print(df_obj.describe())
```

```
              a         b         c         d
count  5.000000  5.000000  5.000000  5.000000
mean  -0.562740 -0.247365 -0.100455 -0.027587
std    0.573191  1.143294  0.747673  1.215808
min   -1.131242 -2.188016 -1.027330 -1.347718
25%   -0.896653 -0.142287 -0.394078 -0.777312
50%   -0.647625  0.056791 -0.114848 -0.041778
75%   -0.507788  0.213237  0.003150  0.167057
max    0.369608  0.823453  1.030830  1.861814
```

## 四、pandas 不完全显示行列

```
pd.set_option('display.max_rows', 100)        //显示的最大行数（避免只显示部分行数据）
pd.set_option('display.max_columns', 1000)    //显示的最大列数（避免列显示不全）
pd.set_option("display.max_colwidth", 1000)   //每一列最大的宽度（避免属性值或列名显示不全）
pd.set_option('display.width', 1000)          //每一行的宽度（避免换行）
```
