---
title: 高级概念
date: 2020-09-23 22:15:00
categories: DataBase
description: 数据库当中的一些概念
---

# 备份

如果是 MyISAM 的数据库引擎，那么直接复制相应的数据库文件即可。
如果是 InnoDB 则需要利用命令。这也是更为一般的普适方法。

利用 MySQL 提供的工具———— **mysqldump**

## mysqldump

```
mysqldump -uroot -p database_name [table_name1,...] >pathname.sql
```

### 备份数据库

使用时需指定用户名，并使用-p 选项，再回车后键入密码。实际上是利用的[重定向](#%E9%87%8D%E5%AE%9A%E5%90%91)来生成一个 sql 脚本文件。
该文件中包含各个 sql 语句。

重定向符号后面的是 sql 文件的路径。Linux 请使用`/`来表示目录结构。Windows 可以用`\` 也可以用 `/`。
比如：

#### Linux

```
mysqldump -uroot -p world >/home/jelly/config/world.sql
```

#### Windows

```
mysqldump -uroot -p world >d:/config/world.sql
mysqldump -uroot -p world >d:\config\world.sql**
```

### 备份部分表

如果不想备份整个数据库，而是像备份某个表，那么在数据库后面指定表的名称。

# 还原

执行已备份的 sql 脚本文件。有两种方案：

## 已连接数据库时

登录 mysql 命令行，使用 source 命令（与 mysqldump 不同，source 不是独立工具，而是 MySQL 内部命令）来执行 sql 脚本。
需要先创建一个数据库，然后切换到给数据库，再执行该命令。

```
mysql> source d:/tool/world.sql
```

## 未连接数据库时

直接在 shell 的命令行执行：

```
mysql -uroot -p < /home/jelly/config/world.sql
```

# 存储引擎

存储引擎是基于表的，不是基于数据库的。

| 功能     | MyISAM | InnoDB | Memory | Archive |
| -------- | :----: | :----: | :----: | :-----: |
| 存储限制 |  256T  |  64T   |   有   |   无    |
| 事务安全 |   -    |  支持  |   -    |    -    |
| 索引支持 |  支持  |  支持  |  支持  |    -    |
| 锁颗粒   |  表锁  |  行锁  |  表锁  |  行锁   |
| 数据压缩 |  支持  |   -    |   -    |  支持   |
| 外键     |   -    |  支持  |   -    |    -    |

以上是常用引擎，另外还有其他存储引擎。
