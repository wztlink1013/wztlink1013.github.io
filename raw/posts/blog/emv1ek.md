---
title: MySQL命令
categories: [Language]
date: 2020-09-23 22:14:21
description: 记录MySQL命令常用语法
---

## 登陆命令

```
mysql -u用户名 -p密码
```

用户名和-u 选项之间可以有空格，但是密码和-p 选项之间必须无空格。但是这样密码会是明文。你可以在键入-p 之后，回车再输入密码，就是密文。

### 常用选项

| 缩写 | 全写       | 描述       |
| ---- | ---------- | ---------- |
| -h   | --host     | 主机       |
| -p   | --password | 密码       |
| -P   | --port     | 端口       |
| -V   | --version  | 版本信息   |
| -u   | --user     | 用户       |
|      | --prompt   | 修改提示符 |

#### --prompt

--prompt 支持几个转义词组

- \h 主机名
- \D 完整日期
- \d 当前数据库
- \u 当前用户

## 登陆之后

### 退出

- exit
- quit
- \q

都能退出 mysql，系统显示 Bye。

### 帮助

键入`help`或`\h`。

### 显示信息

select:

- version(); 版本信息
- now(); 当前时间
- user(); 用户@主机名

### 使用系统命令

**!** 后加 shell 命令可以在 mysql 中执行 shell 命令。

> gdb 使用 shell 加命令来执行 shell 命令。
