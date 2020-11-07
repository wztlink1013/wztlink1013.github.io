---
title: 数据库中的函数
date: 2020-09-23 22:01:00
categories: Language
description: 数据库中的函数
---

# 字符（串）函数

函数可以在 MySQL 提示符中，直接用 SELECT 语句测试。
比如 **SELECT USER();**

## 分类

- 字符函数
- 数值运算符与函数
- 比较运算符与函数
- 日期时间函数
- 信息函数
- 聚合函数
- 加密函数

## 字符（串）函数

| 名称       | 描述               |
| ---------- | ------------------ |
| CONCAT     | 字符串连接         |
| CONCAT_WS  | 同上，但指定连接符 |
| FORMAT     | 数字格式化         |
| LOWER      | 转换成小写字母     |
| UPPER      | 转换成大写字母     |
| LEFT       | 获取左侧字符       |
| RIGHT      | 获取右侧字符       |
| LENGTH     | 获取长度           |
| LTRIM      | 删除前导空格       |
| RTRIM      | 删除后续空格       |
| TRIM       | 删除前后空格       |
| SUBSTRING  | 字符串截取         |
| [NOT] LIKE | 模式匹配           |
| REPEAT     | 重复字符串         |
| REPLACE    | 字符串替换         |

### CONCAT

参数个数不限，连接成一个字符串
已知 test 表的内如如下：

```
+----+------------+-----------+
| id | first_name | last_name |
+----+------------+-----------+
|  1 | A          | B         |
|  2 | C          | D         |
|  3 | tom%       | 123       |
|  4 | NULL       | 11        |
|  5 | 11         | 22        |
|  6 | AA         | BB        |
|  7 | CC         | DD        |
+----+------------+-----------+
```

test 表中有两个字段 first_name,和 last_name，调用连接函数之后：

```mysql
SELECT CONCAT(first_name,last_name)AS full_name FROM test;

+-----------+
| full_name |
+-----------+
| AB        |
| CD        |
| tom%123   |
| NULL      |
| 1122      |
| AABB      |
| CCDD      |
+-----------+
```

### CONCAT_WS

参数至少有三个，第一参数为要连接字符串的分隔符，后面的都是待连接的字符串。

```mysql
SELECT CONCAT_WS('-',1992,10,17);

+---------------------------+
| CONCAT_WS('-',1992,10,17) |
+---------------------------+
| 1992-10-17                |
+---------------------------+
```

### FORMAT

将数字格式化为字符串。第二个参数为小数的位数。

```mysql
SELECT FORMAT(12345.67,2);
```

结果为千分位:

```
+--------------------+
| FORMAT(12345.67,2) |
+--------------------+
| 12,345.67          |
+--------------------+
```

### LOWER/UPPER

顾名思义，不再解释

### LEFT/RIGHT

获取左（右）侧第几个字符。

```
SELECT LEFT('MySQL',2);
```

### LENGTH

获取字符串长度。SQL Server 中是 len 函数。MySQL 中没有 len 函数。

### LTRIM/RTRIM

删除前导/后续空格

### SUBSTRING

与其他语言中一样，截取子串的三个参数分别为：

- 原字符串
- 起始位置（注意下标从 1 算起；可以为负数，即从右数起）
- 截取长度（缺省为截取到结尾）

### [NOT] LIKE

```
SELECT FROM 'MySQL' LIKE 'M%';
```

结果为 1，即 true。

- %代表 0 个或多个字符。
- \_代表任意一个字符。

> 关于转义
> 当要匹配的字符中含有特殊字符(比如%)时，需要转义。\，貌似\也可以
> SELECT CONCAT(first_name,last_name)AS full_name FROM test WHERE first_name LIKE'%%';

也可以自己指定
SELECT CONCAT(first_name,last_name)AS full_name FROM test WHERE first_name LIKE'%1%' ESCAPE '1';

### TRIM

缺省可以删除前后空格，也可以删除指定的字符。

```mysql
-- 删除??MySQL???前面的？
SELECT TRIM(LEADING '?' FROM '??MySQL???');
-- 删除后面的？
SELECT TRIM(TRAILING '?' FROM '??MySQL???');
-- 删除前后的？
SELECT TRIM(BOTH '?' FROM '??MySQL???');
```

### REPEAT

重复某一字符串多少次

```mysql
SELECT REPEAT('ab',2);
```

结果是：

```
+----------------+
| REPEAT('ab',2) |
+----------------+
| abab           |
+----------------+
```

### REPLACE

```mysql
-- 去掉所有的？
SELECT REPLACE('??MySQL','?','');
```

注意！替换的时候也可以一换多，多换一。

# 数值运算和比较运算

## 数值运算

| 名称       | 描述     |
| ---------- | -------- |
| CEIL()     | 进一取整 |
| DIV        | 整数除法 |
| FLOOR()    | 舍一取整 |
| MOD        | 模运算   |
| POWER()    | 幂运算   |
| ROUND()    | 四舍五入 |
| TRUNCARE() | 数字截取 |

### CEIL/FLOOR/ROUND

前两者为对应操作。一个向上取整，一个向下取整。第三个 ROUND 为四舍五入。

### DIV/MOD

两者并非函数，而是 **运算符**。

```mysql
SELECT 5 DIV 2;
SELECT 7 MOD 3;
```

MOD 与%等价，就是模运算，与别不同的是，MySQL 中支持浮点数取模。

### POWER

幂运算

### TRUNCARE

所谓的数字截取，就是对数字逐位的截断。

```mysql
SELECT TRUNCATE(125.123, 1);
SELECT TRUNCATE(125.123, 0);
SELECT TRUNCATE(125.123, - 1);
```

## 运算的结果分别为：125.1、125.0,120

## 比较运算符与函数

| 名称                   | 描述                 |
| ---------------------- | -------------------- |
| [NOT] BETWEEN...AND... | [不]在范围内         |
| [NOT] IN()             | [不]在列出的值范围内 |
| IS [NOT] NULL          | [不]为空             |

# 日期时间函数

| 名称           | 描述           |
| -------------- | -------------- |
| NOW()          | 当前日期和时间 |
| CURDATE()      | 当前日期       |
| CURTIME()      | 当前时间       |
| DATE_ADD()     | 日期变化       |
| DATEDIFF()     | 日期差值       |
| DATE_FORMATE() | 日期格式化     |

### NOW/CURDATE/CURTIME

可以把 NOW 看作是 CURDATE 和 CURTIME 的综合

### DATE_ADD

实现日志的增减，加为正数，减为负数

```mysql
SELECT DATE_ADD(CURDATE(),INTERVAL 3 WEEK);
```

WEEK,也可以是 DAY，YEAR
与之相对的还有一个 DATE_SUB 函数。

### DATEDIFF

获取两个日期之间的差值，左边减去右边，值为天数。

```mysql
SELECT DATEDIFF('2014-10-11','2014-09-06');
```

### DATE_FORMAT()

日期格式化为其他形式，比如：

```mysql
SELECT DATE_FORMAT('2014-11-01','%m/%d/%Y');
```

结果为：
11/01/2014
如果是小写的 y，则格式化为 11/01/14

# 信息函数

| 名称           | 函数            |
| -------------- | --------------- |
| CONNECTIOIN_ID | 连接 ID         |
| DATABASE       | 当前数据库      |
| LAST_INSERT_ID | 最后插入记录 ID |
| USER           | 当前用户        |
| VERSION        | 版本信息        |

### CONNECTION_ID

第一连接就是 1，以此类推。

### DATABASE

### LAST_INSERT_ID

当一条语句插入多条记录的时候，它只返回第一条记录的 ID。

### USER

返回当前用户。MYSQL 中的用户的完整用户名是 **用户名@登录主机**

### VERSION

MySQL 版本号

# 聚合函数

| 名称  | 描述   |
| ----- | ------ |
| AVG   | 平均值 |
| COUNT | 计数   |
| MAX   | 最大值 |
| MIN   | 最小值 |
| SUM   | 求和   |

### 注意

- 聚合函数只有一个返回值！
- 不能直接用 SELECT 加函数名的形式来调用，必须针对字段！
- 优先级
  - 聚合函数优先级小于 WHERE 语句，不能用来 WHERE 后面。
  - 聚合函数优先级大于 HAVING，可以用在 HAVING 后面。

## COUNT

- COUNT(\*)统计 null
- COUNT(字段)不统计 null
- COUNT(1)可统计

# 自定义函数

UDF(User-defined function)

## 创建自定义函数

```mysql
CREATE FUCNTION function_name
RETURNS
{STRING|INTEGER|REAL|DECIMAL}
RETURN
routine_body
```

## 函数体

上面的 routine_body 指代函数体。其构成：

- 函数体由合法的 SQL 语句构成
- 函数体可以是简单的 SELECT 或 INSERT 语句
- 函数体如果为符合结构则使用 BEGIN...END 语句
- 符合结构可以包含声明，循环，控制结构

## 举例

`来源慕课网`

```mysql
-- 无参数
CREATE function f()
RETURNS VARCHAR(30)
  RETURN Date_format(Now(), '%Y年%m月%d日 %H点：%i分：%s秒');
```

```mysql
-- 带参数
CREATE function f2(num1 SMALLINT UNSIGNED,
                   num2 SMALLINT UNSIGNED)
RETURNS FLOAT(10, 2) UNSIGNED
  RETURN ( num1 + num2 ) / 2;
```

```
--  复合结构的函数体
DELIMITER //
CREATE function
  adduser(username VARCHAR(20)) returns INT UNSIGNED
BEGIN
  INSERT test
         (
                username
         )
         VALUES
         (
                username
         );

  RETURN Last_insert_id();
END//
```

三个要点：

- 首先因为函数体内有分号，所以我们要修改定界符，避免函数中途停止。使用 DELIMITER 指定新的定界符为//。
- 然后，因为函数体内有多条 SQL 语句，所以我们要用 BEGIN...END 包裹。
- RETURN 在 BEGIN...END 结构内部。并且必须有 RETURN。默认情况下，RETURN 后面的语句会在屏幕上打印出来。

## 删除函数

```mysql
DROP FUCNTION [IF EXISTS] function_name;
```

一次只能删除一个函数。

# 加密函数

| 名称     | 描述         |
| -------- | ------------ |
| MD5      | 信息摘要算法 |
| PASSWORD | 密码算法     |

用于 WEB 页面用 MD5 算法保存用户密码
用户本地用户，用 PASSWORD 修改密码。比如

```sql
UPDATE user SET Password=PASSWORD('newpassword') where USER='root';
```

注意 user 表在系统数据库 mysql 下。执行命令之前请`USE mysql`。
