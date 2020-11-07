---
title: Jupyter环境的扩展
categories: Environment
date: 2020-01-22 20:02:30
description: "jupyter环境的扩展"
---

## 一、Jupyter 环境的搭建

1. pip 下载
1. 跟随 anaconda 下载

## 二、高效使用，安装扩展插件

一般只需要下面两条命令，就可以重新打开就可看见新安装的插件环境。

`pip install jupyter_contrib_nbextensions`

或者

`jupyter contrib nbextension install`

但是 pip 下载完，会出现 jupyter_contrib_nbextension 扩展功能后不显示 Nbextensions 标签的 bug，在此记录下解决的方式。

## 三、扩展插件不显示的解决方法

1. 如果之前已经用上述两条命令之一安装了上述包，且用 pip list 查看的确成功安装，则依次进行下面删除命令（选 y）:
   `pip uninstall jupyter_contrib_nbextensions`
   `pip uninstall jupyter_nbextensions_configurator`
1. 打开 Anaconda Prompt 窗口，执行第一个命令，用于安装 nbextensions:
   `pip install jupyter_contrib_nbextensions`
1. 再执行第下面命令，用于安装 javascript and css files:
   `jupyter contrib nbextension install --user`
1. 最后执行，用于安装 configurator:
   `pip install jupyter_nbextensions_configurator`

## 参考

安装的扩展插件参考以下网站：

- [五个常用插件 - 简书](https://www.jiqizhixin.com/articles/2018-12-20-12)
- [如何优雅地使用 Jupyter？ - 量子位的回答 - 知乎](https://www.zhihu.com/question/59392251/answer/560977151)
- [jupyter 使用技巧](https://blog.csdn.net/xiaodongxiexie/article/details/54633183)
