---
title: python-路径和nltk
categories: Bug
date: 2020-02-07 12:33:09
description: 路径的相关报错，以及nltk的下载报错
---

## 一、路径相关

### 路径相关报错信息

```python
IOError: [Errno 2] No such file or directory
```

```python
pandas.read_csv() 报错 OSError: Initializing from file failed
```

```python
(unicode error) 'unicodeescape' codec can't decode bytes in position 2-3: truncated \UXXXXXXXX escape [duplicate]
```

```python
File b'train.csv' does not exist even though file exist
```

### 分析与解决问题

编写 python 代码过程中，出现了类似这种一系列路径相关的错误，原因是，自己更改了**相关文件夹/文件在电脑中的位置**，解决办法就新建一个项目建一个全新路径或者修改现有路径

- `\`绝对路径 会报错（转义字符）处理：① 双引号前面加一个 r②`\`换成`\\`（硬盘代号后面的第一个）
- `./`相对路径

> 三种解决方式
> `r"C:\Users\YJG\Desktop\pi_digits.txt"` > `"C:\\Users\\YJG\\Desktop\\pi_digits.txt"` > `"C:/Users/YJG/Desktop/pi_digits.txt"`

### PS：路径含中文

假如路径、文件名都完整，还是报错的原因是这个参数中有中文，即使 Python3 已经支持中文，但是调用 pandas 的 read_csv()方法时，默认使用 C engine 作为 parser engine，而当文件名中含有中文的时候，用 C engine 在部分情况下就会出错。所以在调用 read_csv()方法时指定 engine 为 Python 就可以解决问题。根治：将路径编程全英文，这是必要素养习惯！

`da4=pd.read_csv(xxxxxxxxxx,engine='python')`

### PS：utf-8

```
UnicodeDecodeError：: 'utf-8' codec can't decode byte 0xc8 in position 0: invalid contin
```

> 解决办法：`data_1 = pd.read_csv(data1, encoding = 'gb2312')`或者 gb2312 换成 gbk
> 参考：[https://blog.csdn.net/qq_18888869/article/details/82625343](https://blog.csdn.net/qq_18888869/article/details/82625343)

## 二、nltk 相关

### nltk 下载报错信息

```
bug:[WinError 10054] 远程主机强迫关闭了一个现有的连接
```

### 分析与解决问题

原因：模型权重参数文件（.h5）较大，下载出现中断，下载失败

> - 解决办法：手动下载模型，放到指定目录
> - `C:\Users\XXX\AppData\Roaming`

[下载地址](https://pan.baidu.com/s/1oUsf-FgVAZnQAtZWRwiK4w)  （密码 9sar）

## 参考

- [CSDN-103448420](https://blog.csdn.net/zln_whu/article/details/103448420)
- [nltk 简书详细讲解](https://www.jianshu.com/p/0e1d51a7549d)
