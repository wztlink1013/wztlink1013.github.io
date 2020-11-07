---
title: 表基本操作
date: 2020-09-23 21:39:00
categories: Language
description: 表的增、删、改、连接
---

# 表基本操作

## 创建表

```sql
Create table student(
	Sno char(9),
	Same char(20),
	Ssex char(2),
	Sage smallint,
	Sdept char(20)
);
Create table course(
	Cno char(4),
	Cname char(40),
	Cpno char(4),
	Ccredit smallint
);
Create table sc(
	Sno char(9),
	Cno char(4),
	Grade smallint
);
Insert into student values('200215121','李勇','男',20,'cs');
Insert into student values('200215122','刘晨','女',19,'cs');
Insert into student values('200215123','王敏','女',18,'ma');
Insert into student values('200515124','张立','男',19,'is');
Insert into course values ('1','数据库','5',4);
Insert into course values ('2','数学',NULL,2);
Insert into course values('3','信息系统','1',4);
Insert into course values('4','操作系统','6',3);
Insert into course values('5','数据结构','7',4);
Insert into course values('6','数据处理',NULL,2);
Insert into course values('7','pascal语言','6',4);
Insert into sc values('200215121','1',92);
Insert into sc values('200215121','2',85);
Insert into sc values('200215121','3',88);
Insert into sc values('200215122','2',90);
Insert into sc values('200215122','3',80);
```

## 查看表

```sql
	SHOW TABLES [FROM db_name] [LIKE 'pattern'|WHEAR expr];
```

## 查看列（表的组织结构）

```sql
    SHOW COLUMNS FROM tb_name;
    DESC tb_name;
```

以上两条语句都可以。

## 查看表的内容

```sql
    SELECT * FROM tb_name;
```

## 插入数据

```sql
    INSERT [INTO] tb_name [(col_name,...)] VALUES(val,...);
```

如果不指明任何字段名，那么插入的数据必须要包含所有的字段。

# 插入记录

共有三种 Insert 语句。

## INSERT

```sql
INSERT [INTO] tb_name [(col_name,.....)] {VALUE|VALUES} ({expr|DEFAULT},...) (...),...
```

- values 是标准 SQL 关键字，value 是 MySQL 自己的。
- 插入语句可以一次性插入多条记录。
- 值可以是：
  - 函数
  - 数学表达式
  - 等

默认值

在创建数据表的时候可以设置 DEFAUTL。

```sql
CREATE TABLE users(
	id SAMLLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	username SAMLLINT VARCHAR(20) NOT NULL,
	password SAMLLINT VARCHAR(20) NOT NULL,
	age TINYINT UNSIGNED NOT NULL DEFAULT 10,
	sex BOOLEAN
);
```

INSERT 的时候如果为自动编号的字段（比如上表中主键 id）赋值的话，可写作 NULL，或 DEFAULT 就会采用默认值。
如果字段设置了 DEFAULT（比如上表中 age），那么值直接写 DEFAULT 就行，注意此时，不能为 NULL。例如：

```sql
INSERT users VALUES(NULL,'TOM','123',DEFAULT,1);
```

## INSERT...SET

```sql
INSERT [INTO] tb_name SET col_name={expr|DEFAULT},...
```

采用了[子查询](%E5%AD%90%E6%9F%A5%E8%AF%A2.md)。例如，上表中插入：

```sql
INSERT users SET username='Ben',password='456';
```

因为 id，和 age 都有默认值，所以可以不写。而 sex 允许为空，也可以不写。

## INSERT...SELECT\*

将查找的结果写入记录中。

```sql
INSERT test(username) SELECT username FROM users WHERE age >=30;
```

# 删除记录

同样分为：

- 单表删除
- 多表删除

```mysql
DELETE FROM tb_name [WHERE where_condition];
```

没有 where 部分则会删除全部记录。

# 更新记录-单表更新

更新记录分为：

- 单表更新
- 多表更新（要涉及连接）

> 单表更新

```mysql
UPDATE [LOW_PRIORITY] [IGNORE] tb_reference
SET col_name1={expr|DEFAULT} [,col_name2={expr|DEFAULT}]...
[WHERE where_condition]
```

不写 where 会更新全部的记录。

# 更新记录-连接（多表更新）

## 多表更新

```mysql
UPDATE table_references
SET col_name1={expr1|DEFAULT}
[,col_name2={expr2|DEFAULT}]...
[WHERE where_condition]
```

## CREATE...SELECT

创建数据表同时将查询结果写入到数据表

```mysql
CREATE TABLE [IF NOT EXISTS]tb_name
[(create_definetion,...)]
select_statement
```

比如：

```mysql
CREATE TABLE tall (
    tall_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    num INT
) SELECT 身高 AS num FROM
    av
GROUP BY 身高;
```

创建新表 tall，并从 av 表中选取身高字段插入到 tall 表的 num 字段。

## 连接

### 语法结构

```mysql
table_reference
{[INNER|CROSS] JOIN|{LELT|RIGHT}[OUTER] JOIN}
table_reference
ON conditional_expr
```

ON 为条件。
三种连接，即：

- 内连接
- 左外连接
- 右外连接

#### 内连接

显示左表及右表符合连接条件的记录（交集）

#### 左外连接

显示左表的全部记录及右表符合连接条件的记录

#### 右外连接

类别左外连接

### UPDATE..JOIN..SET

比如

```mysql
UPDATE actor AS a
        INNER JOIN
    tall AS b ON a.tall = b.num
SET
    a.tall = b.tall_id;
```

依据实际情况，选择是否使用别名。（如果两个表中进行比较的字段名相同，则需要别名）
该语句完成了一个替换，将 actor 表中具体的身高数值，替换为 tall 表中身高的对应 id。

# 修改数据表

所有的数据表的修改 SQL 语句的开头都是 ALTER TABLE+表名称。

## 给表改名

```sql
ALTER TABLE tb_name RENAME {TO|AS} tb_new_name;
```

另外有个写法是：

```sql
RENAME TABLE tb_name TO tb_new_name;
```

这句可以批量修改多个表的名称。

> 尽量不要随意修改表的名称。对视图有影响。

## 添加/删除列

### 插入列

```sql
ALTER TABLE tb_name ADD [COLUMN] col_name column_definition [FIRST|AFTER col_name];
```

默认会插入到表的最下面，指定 FIRST，则置于最上面，或者用`AFTER col_name` 指定为`col_name`的下面。

### 删除列

```sql
ALTER TABLE tb_name DROP col_name,DROP.....;
```

可以一次性删除多个列。

## 修改列

### 修改列定义

即修改列的属性。

```sql
ALTER TABLE tb_name MODIFY col_name column_definition [FIRST|AFTER col_name];
```

比如：

```sql
ALTER TABLE test ADD id SMALLINT unsigned KEY auto_increment first;
```

key 可以表示主键，无需 primary。fitrst 表示插入的位置。

> 如果要修改的列已经是`主键`了，则修改列定义的时候再加上`主键`字段会报错。

### 修改列名

```sql
ALTER TABLE tb_name CHANGE col_name col_new_name column_definition [FIRST|AFTER col_name];
```

修改列名时，新列名后面要指明数据类型。

### 修改列顺序

其实同上，具体比如：

```sql
ALTER TABLE `user` CHANGE `join_time` `join_time` DATE NULL DEFAULT NULL AFTER `role`;
```

把 join_time 列放到 role 列后面。

## 修改约束

### PRIMARY KEY

添加主键约束

```sql
ALTER TABLE tb_name ADD [CONSTRAIN[symbol]] PRIMARY KEY [index.type] (index_col_name,.....);
```

删除主键约束

```sql
ALTER TABLE tb_name DROP [index.type] PRIMARY KEY;
```

不需要指定列名，因为每个表只有一个主键。
注意！只有一个主键并不意味着主键只有一列。

### UNIQUE

添加唯一约束

```sql
ALTER TABLE tb_name ADD [index.type] unique(col_name);
```

删除唯一约束

```sql
ALTER TABLE tb_name DROP [index.type] unique(col_name);
```

### DEFAULT

```sql
ALTER TABLE tb_name ALTER [COLUMN] col_name {SET DEFAULT literal|DROP DEFAULT};
for example:
ALTER TABLE users ALTER age SET DEFAULT 20;
```

### FOREIGN KEY

添加外键约束

```sql
ALTER TABLE tb_name ADD [CONSTRAIN[symbol]] FOREIGN KEY [index_name](index_col_name,...)reference_definition;
for example:
ALTER TABLE users add FOREIGN KEY (pid) REFERENCE provinces (id);
```

删除外键约束

```sql
ALTER TABLE tb_name DROP FOREIGN KEY fk_symbol;
```
