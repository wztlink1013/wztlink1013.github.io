---
title: OS-DOS/CMD/Windows/提高开发效率
tags: [CMD, OS]
categories: OS
date: 2020-02-25 07:51:21
thumbnail: https://cdn.jsdelivr.net/gh/wztlink1013/figure/blogarticle1/cmd.jpg
description: 提高开发效率
---

## 一、快捷键

> 很多软件的快捷键使用相通，在不确定的情况下，先试试其他软件的快捷键的使用方法

### Windows 电脑快捷键

> **HP 惠普笔记本**

```powershell
win+E                 打开文件管器
win+D                 显示桌面
win+L                 锁计算机
alt+F4                关闭当前程序
ctrl+shift+Esc/ctrl+alt+delete：任务管理器
ctrl+F                文本或网页中查找（退出一般按ESC）
ctrl+A                选中所有文本


Onenote2016配合插件win+n快速笔记win+shift+n打开onenote

Windows 键+V：打开剪贴板
Windows 键+PgUp：在桌面选定左上角软件
Windows 键+PgDown：在桌面选定右下角软件
```

### Eclipse 快捷键

> ctrl+shift+L：eclipse 所有快捷键
> `//`注释：`ctrl+shift+c`（添加和注释都是这样）或者`ctrl+/` > `/**/`注释：添加`ctrl+shift+/`   取消`ctrl+shift+\`

```
Alt+方向键：将当前行向上或者向下移动
ctrl+m：编辑窗口最大化（反复两次按即取消）
ctrl+.及ctrl+1：下一个错误及快速修改
Control+O: 快速概要,迅速的跳到一个方法或者属性，只需要输入名字的头几个字母。

shift+home/end：选中一行
ctrl+pgup/pgdn：切换页面（浏览器打开的页面/编辑器的多窗口）
```

### VScode 快捷键

偶然发现：打开 vscode 的时候，直接在页面内输入`ctrl+shift+c`就会直接进入博客根目录下的 CMD 模式

### Pycharm/JetBrains 快捷键

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685666000-0fb595f1-51e4-4e71-8547-96aa0b938148.png#align=left&display=inline&height=397&margin=%5Bobject%20Object%5D&originHeight=397&originWidth=769&size=0&status=done&style=none&width=769)

```
Ctrl+F5（左上角）：（return "project"）重新debug该文件
F9：（resume program）一个断点接着一个断点走，不按行走（eg：有循环会随着i一步一步走完）
F8：（step over） 一行一行走代码
F7：（step into） 进入函数内部
Alt+shift+F7：（step into mycode）遇到自己函数  进去
shift+F8：（step out）跳出，进入函数后，跳出来
Alt+F10：（show execution point）指针显示当前断点旁边
**Show Python Prompt**按键,交互式调试命令
```

## 二、CMD 之常用命令

> - 使用 help 命令，查看所有的 dos 命令
> - 找到命令之后，使用 `命令+ /?`来查看该命令下的其他属性

- DOS 不区分大小写
- `d:` `e:` 进入不同的盘
- `cd:` 进入指定文件夹。注意：只在**该磁盘**才有效
- `dir` 查看当前目录下的所有文件，使用 dir /?来查看其它用法
- 创建和删除目录
- cd .. 返回上一级文件夹

```
//创建目录
md 目录名（文件夹）
//删除目录
rd  目录名（文件夹）
```

- `ipconfig` 查看本机 ip
- `cls` 清除屏幕
- 复制文件:把一个文件移动（就是剪切+复制）到另一个地方。甚至可以改后缀

```
move 路径\文件名 路径\文件名
```

- 删除文件

```
//这个是专门删除文件的，不能删除文件夹
del 文件名
```

- ping

```
//用来测试网络是否畅通
ping ip(主机名)
```

- 其他

```
复制内容：右键弹出快捷菜单，选择“标记(K)”，然后选中所需复制的内容，然后右键即可

粘贴内容：右键弹出快捷菜单，选择“粘贴(P)”
```

- 在文件夹空白处按住 Shift，然后右键弹出快捷菜单，可以看到“在此处打开命令行窗口”
- tab 补齐功能！！！
- 文件及目录名中不能包含下列任何字符：\ / : \* ? " < > |

## 三、CMD 之默认非 utf-8 编码

运行 java 程序时候，如果代码中有中文，会出现中文报错乱码情况/

### 治标方法

`CMD` 中输入 `chcp 65001` 进入 utf-8 模式下的的控制台，再运行程序

### 治本方法

[博文 1](https://blog.csdn.net/gulang03/article/details/81771343)  [博文 2](https://blog.csdn.net/runAndRun/article/details/103072938?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task)注意：自己已经再注册表中增加了一行 tuf-8 编码数据，以后要留意、
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685666566-625a520c-ff9d-4eea-8fba-3a8c4f8f696e.png#align=left&display=inline&height=24&margin=%5Bobject%20Object%5D&originHeight=24&originWidth=660&size=0&status=done&style=none&width=660)

## 四、CMD 之运行 JAVA

### CMD 运行 java 程序

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685666652-cb97d69b-664c-4506-a24f-1dc5b8220a02.png#align=left&display=inline&height=940&margin=%5Bobject%20Object%5D&originHeight=940&originWidth=902&size=0&status=done&style=none&width=902)

### 命令行参数

> main 主函数可以看成一个普通的方法，也可以传递实参来调用普通方法
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685666759-75d2a062-c52d-4c49-acce-7310a0280f24.png#align=left&display=inline&height=214&margin=%5Bobject%20Object%5D&originHeight=214&originWidth=1070&size=0&status=done&style=none&width=1070)

---

> 向 main 方法传递字符串
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685666878-98ce351e-4485-4381-bcfe-4b9121226fc9.png#align=left&display=inline&height=778&margin=%5Bobject%20Object%5D&originHeight=778&originWidth=1098&size=0&status=done&style=none&width=1098)

### CMD 下运行 Java 中文乱码

`javac -encoding utf-8 test.java`

还是上面的问题，DOS 默认使用的编码是 GBK,这里需要再编译的时候制定使用的编码

## 五、笔记本触摸板

### 笔记本触摸屏使用

- **单指**：“确定键”
  点击===相当于左键确定
  先点击 不放拖动 ===拖拽
- **双指**：“右键、滑动、拉伸旋转键”
  点击=相当于右键（鼠标）
  先点击   不放左右拖动上下拖动=滑页功能
  等比例拉伸或者旋转
- **三指**：“页面切换键”
  点击=查找
  先点击   不放   上下拖动=多页面模式、纯桌面模式切换
  先点击   不放   左右拖动===页面切换类似 alt+tab
- **四指**：“设置键”
  点击===设置/操作中心

### 实现手写输入功能

- 第一步：安装 SoftStylus 手写软件

本身没有预装 SoftStylus 手写软件的，首先登录 HP 官方网站，查询并下载手写软件，然后安装手写软件。如果已预装手写软件，建议运行 Software Setup 软件，将手写软件升级到最新版本，以提高手写识别成功率。

- 第二步：设置手写识别速度

运行手写软件，点击设置图标进入“参数”界面，然后可根据需要配置识别速度。如果是初次使用手写功能，刚开始建议将识别速度降低，一旦习惯了使用手写功能，应该将识别速度调为最快，这样在 QQ 聊天或编辑文档时，以应对较快的手写输入连写。

- 第三步：设置各种热键

此外，替换选项可设置在主窗口上显示最多可选择字符，这个应该根据笔记本屏幕大小而定，例如 14 英寸屏幕可设置为 7，而 12 英寸屏幕应该设为 4，最后建议开启“汉字预览”功能，切换到“热键”选项页，然后可根据需要自定义各种热键。

- 第四步：设置手写窗口外观

如果经常使用手写功能，建议切换到“一般”选项页，勾寻操作系统起动时运行 SoftStylus”复选框，最后切换到“外观”选项页，并调节窗口透明度、画笔宽度和墨色。如果是 QQ 聊天，建议将画笔宽度调细一点，且墨色应该设为黑色。

- 第五步：使用手写进行聊天

设置完毕后，单击“确认”按钮，当你在 QQ 聊天或编辑文档时，如想使用手写输入，只需按下前面设置的快捷键，即可马上弹出手写输入界面。
这个时候，就可以用手指在触摸板上比划，文字就会显示在界面里，最后出现在聊天窗口中，很方便。

## 参考资料

- W[indows 常用快捷键与快捷指令](https://www.jianshu.com/p/7bd7574d94c8)
