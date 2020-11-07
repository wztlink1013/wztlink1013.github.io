---
title: Pycharm,Anaconda,JetBrains系列app相关总结
categories: Environment
date: 2020-01-23 16:54:46
thumbnail: https://cdn.jsdelivr.net/gh/wztlink1013/figure/blogarticle2/1037590.jpg
description: "Anaconda和Pycharm和Jetbrains系列软件的所有总结"
---

## 一、Anaconda 和 Pycharm 下载与配置

### 下载 Anaconda 且配置

- （更新）下载了 anaconda 就不要单独下载 python，之前下的也删掉，以此避免路径冲突
- 方式一：**迅雷下载**（推荐）；方式二：提取链接**网盘下载**；方式三：清华镜像下载，下载完安装【直接 next 即可】
- **测试**：`win + R` 进入终端输入`conda`出现 conda 命令使用指南，即证明成功安装
- **配置环境变量**：在**系统变量**path 路径中加入下面配置（具体路径具体填写）

### 下载 Pycharm 且配置

- **下载版本**[社区/专业](https://www.jetbrains.com/pycharm/download/)：专业版本需要激活码，社区版本功能基本能应付日常使用  ~~（大学学生时期可以用学生邮箱申请使用 JetBrains 系列软件）~~
- **❗ 补充：取消上面用学生邮箱去申请 JetBrains 系列软件使用方法。先去 GitHub 申请学生包，然后通过 GitHub 已认证的 GitHub 账号再去申请 JetBrains 系列软件较为方便 [JetBrains 申请链接 🔗](https://www.jetbrains.com/zh-cn/community/education/?_ga=2.186354217.1063699871.1594345232-1379189663.1590592761#students)**
- Pycharm 使用 Anaconda 的配置 （ **❗ 补充：下面貌似是社区版本的添加方式，但是专业版本会自动识别** ）：

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685306285-e6ca8228-9234-4c7f-97f3-9d7fc26e0728.png#align=left&display=inline&height=266&margin=%5Bobject%20Object%5D&originHeight=1077&originWidth=1843&size=0&status=done&style=shadow&width=456)

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685306347-9a79eaf2-93cf-4ed4-b008-9e49aa66ad7e.png#align=left&display=inline&height=324&margin=%5Bobject%20Object%5D&originHeight=885&originWidth=1227&size=0&status=done&style=shadow&width=449)

## 二、Anaconda 环境管理

### pip,conda,Miniconda,Anaconda

> - pip 包管理工具，python 官方认证
> - conda 是一种通用包管理系统，旨在构建和管理任何语言和任何类型的软件。包管理与 pip 的使用类似，环境管理则允许用户方便地安装不同版本的 python 并可以快速切换。
> - Anaconda 则是一个打包的集合，里面预装好了 conda、某个版本的 python、众多 packages、科学计算工具等等，就是把很多常用的不常用的库都给你装好了。同时利用配置/工具/命令 conda 来进行 package 和**environment**的管理。
> - Miniconda，它只包含最基本的内容——python 与 conda，以及相关的必须依赖项，对于空间要求严格的用户，Miniconda 是一种选择。就只包含最基本的东西，其他的库得自己装。

### Python 相关包路径的查看

- `win+R`   输入`cmd`   输入`python` 输入`import sys` 输入`sys.path`
- 标准库：anaconda 文件夹下的 lib 文件夹
- 第三方库：下述代码中的文件夹

```powershell
C:\Users\wztli\Anaconda3\Lib\site-packages
```

### Sklearn 包安装失败总结

安装 scikit-learn 包，导入 sklearn 的 Bug

```powershell
ImportError: DLL load failed: 找不到指定的模块
```

`scikit-learn`的下载会对 numpy、scipy、joblib 三个库相应版本有所要求，总之如果用 anaconda 的话，全部更新为最新即可（[参考 whl 版本](https://www.lfd.uci.edu/~gohlke/pythonlibs/)）

> - `C:\Users\wztli\Anaconda3\pkgs\scikit-learn-0.21.3-py37h6288b17_0\Lib\site-packages\sklearn\datasets\data`
> - 数据集在电脑中的位置

### Scrapy 包安装失败总结

- pip 下载可能会失败
- 使用 conda（镜像）下载`conda install -c scrapinghub scrapy`

### Loading

pip 下载/管理经常 bug，用 conda 结合 anaconda/miniconda 方便使用

## 三、JetBrains 系列软件的高效使用

### JetBrains 之初始配置

> 界面字体大小、代码字体大小、主题默认（dark）、背景图片（看心情）

- 字体相关
  ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685306645-d747b801-f817-475d-93e7-a9357a6f810b.png#align=left&display=inline&height=886&margin=%5Bobject%20Object%5D&originHeight=886&originWidth=1227&size=0&status=done&style=none&width=1227)
- 主题相关
  ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685306383-6425ce01-32e1-4216-b62e-def25d1e9dc7.png#align=left&display=inline&height=886&margin=%5Bobject%20Object%5D&originHeight=886&originWidth=1227&size=0&status=done&style=none&width=1227)

### JetBrains 之 Debug 断点调试

断点调试是优于打印输出的一种调试程序的一种手段
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685306462-78e560c3-6150-4b08-b806-34919a36f0a2.png#align=left&display=inline&height=397&margin=%5Bobject%20Object%5D&originHeight=397&originWidth=769&size=0&status=done&style=none&width=769)

> - Ctrl+F5（左上角）：（return "project"）重新 debug 该文件
> - F9：（resume program）一个断点接着一个断点走，不按行走（eg：有循环会随着 i 一步一步走完）
> - F8：（step over） 一行一行走代码
> - F7：（step into） 进入函数内部
> - Alt+shift+F7：（step into mycode）遇到自己函数   进去
> - shift+F8：（step out）跳出，进入函数后，跳出来
> - Alt+F10：（show execution point）指针显示当前断点旁边
> - **Show Python Prompt**按键
>   交互式调试命令

### JetBrains 之结合 GitHub 使用

1. 配置 Git 和 GitHub（先连接本地 git，然后登录 GitHub）
   页面   依次点击`File` `Setting` `Version Control` `GitHub`然后登录账户进行配置
1. 将项目新建在 GitHub
   菜单栏 依次点击 `VCS` `Import into Version Control` `Share Project on GitHub`
1. 讲项目克隆在本地 `VCS` `Get from Version Control`

……

### IDEA 之破解以及初始用

在编译器选择方面，Eclipse 和 IDEA，还是选择后者····

[https://shimo.im/docs/9pJJRJPr6thtPxJd/read](https://shimo.im/docs/9pJJRJPr6thtPxJd/read)

[https://segmentfault.com/a/1190000021220727](https://segmentfault.com/a/1190000021220727)

- 初次运行 IDEA 编写 helloworld 程序
  - `新建一个项目` `选择SDK` `是否需要加入模板（一般不要）` `更改路径和命名`
  - `在scr目录下新建java类正式编写（注意对类命名要有意义）`

### JetBrains 之 TODO 的使用

便于编写大型代码，将注释加上前缀以便分类处理，以下图片展示
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685306509-efc968a4-bf76-44f3-8347-52cbb5a7cc73.png#align=left&display=inline&height=689&margin=%5Bobject%20Object%5D&originHeight=689&originWidth=1890&size=0&status=done&style=none&width=1890)

参考：

- [TODO 的使用官方文档](https://www.jetbrains.com/help/pycharm/using-todo.html)
- [TODO 的用法](https://blog.csdn.net/weixin_34277853/article/details/94205060?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-5&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-5)

### JetBrains 之插件枚举

- Waka Time：持续记录自己的 IDE 以及编程语言的使用时长

### JetBrains 之初用警告

一般下载完开始使用，IDE 会报一个 `Windows安全中心` 的警告

```
Windows Defender might be impacting your build performance. PyCharm checked the following directorie
```

解决：![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685306961-bcb04392-e8c2-4f3a-a7f0-d2d1516afe70.png#align=left&display=inline&height=700&margin=%5Bobject%20Object%5D&originHeight=700&originWidth=1184&size=0&status=done&style=none&width=1184)
然后再进入排除项添加报错的文件夹即可

### JetBrains 之 IDEA 的 leetcode 插件

> 记录一些配置

> 勾选 Custom Template 和 Plugin Update

> TempFilePath

```
D:\project-java\datastructure\src\com\wztlink1013\problems
```

> CodeFileName

```
P${question.frontendQuestionId}$!velocityTool.camelCaseName(${question.titleSlug})
```

> CodeTemplate

```
package com.wztlink1013.problems.leetcode.editor.cn;

${question.content}
public class P${question.frontendQuestionId}$!velocityTool.camelCaseName(${question.titleSlug}){
    public static void main(String[] args) {
        Solution solution = new P${question.frontendQuestionId}$!velocityTool.camelCaseName(${question.titleSlug})().new Solution();

    }

${question.code}
}
```

参考：
[IDEA 的 LeetCode 力扣插件设置与使用](https://blog.csdn.net/yxf19034516/article/details/106087994/)
[IDEA 的 LeetCode 刷题插件 leetcode editor](https://hacpai.com/article/1575547715310)
