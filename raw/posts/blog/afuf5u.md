---
title: 数据库操作
date: 2020-09-23 21:51:00
categories: Language
description: 数据库的一些常用操作
---

## 创建数据库

```sql
CREATE {DATABASE|SCHEMA} [IF NOT EXISTS] db_name [DEFAULT] CHARCTER SET [=] charset_name;
```

> 注意设置字符集的时候，utf-8 要写作 utf8。

## 使用数据库

> 使用指定数据库

```sql
use DATABASE
go
```

## 修改数据库

```sql
ALTER {DATABASE|SCHEMA} db_name [DEFAUTL] CHARCTER SET [=] charset_name;
```

### 修改数据库编码格式

```
SET NAMES GBK;
```

GBK 也可以是其他编码格式。但这只是修改你客户端显示的编码格式。服务端并不变化。
**修改配置文件来改服务端编码**
打开/etc/my.cnf 文件
在[mysqld]条目下：增加

```
character_set_server=utf8
init_connect='SET NAMES utf8'
```

有时在数据库创建完成后，编码格式是无法修改的。只能删掉重新建。

## 删除数据库

```mysql
    DROP {DATABASE|SCHEMA} [IF EXISTS] db_name;
```
