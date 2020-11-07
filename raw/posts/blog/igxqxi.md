---
title: 表查询操作
date: 2020-09-23 21:39:00
categories: Language
description: 表的查询总结
---

## 查询语句

> 查询就是 SELECT 语句

```sql
SELECT  [ ALL | DISTINCT ]
		[ TOP expression [ PERCENT ] [ WITH TIES ] ]
	<列名> 											/*指定要选择的列及其限定*/
	[ INTO <表名> ] 							/*INTO子句，指定结果存入新表*/
	[ FROM <查询对象> ]						/*FROM子句，指定表或视图*/
	[ WHERE <条件> ] 							/*WHERE子句，指定查询条件*/
	[ GROUP BY <分组表达式>] 				/*GROUP BY子句，指定分组表达式*/
	[ HAVING <分组统计条件>] 				/*HAVING子句，指定分组统计条件*/
	[ ORDER BY <排序表达式> [ ASC | DESC ] ] /*ORDER子句，指定排序表达式和顺序*/

```

> 说明：
> 所有被使用的子句必须按语法说明中显示的顺序严格地排序。例如，一个 HAVING 子句必须位于 GROUP BY 子句之后，并位于 ORDER BY 子句之前。

> SELECT 语句返回一个表的结果集，通常该结果集被称为表值表达式。

```sql
<列名> ::=
{
    * 											/*选择当前表或视图的所有列*/
      | <表名或视图名>.* 						/*选择指定的表或视图的所有列*/
      | <列名1>[, <列名2>….] 					/*选择指定的列*/
	| <列名或表达式>
	[ [ AS ] <列别名> ]							/*AS子句，定义列别名*/
      | <列标题>= <列名>						/*选择指定列并更改列标题*/
} [ ,...n ]

```

### 数学计算

```
SELECT 3*9
```

### 别名 as

```sql
SELECT id AS userId，username AS uname
	FROM users;
```

查询出来的列名，就变成了别名。AS 其实可以省略，但可能会出现问题。

```sql
SELECT id username  FROM users;
```

这样会将 username 视作 id 的别名。

### 正则匹配 like

SELECT 书名 AS BookName, 作译者 AS Author, 出版社 AS Press
FROM TBook
WHERE 书名 LIKE '%SQL Server%'

### 多条件匹配 and、or

where 作译者='谭浩强' or 出版社='电子工业出版社'

> 键可以不用引号，但是值要引号
> 列名又空格也需要加引号

### 次序 top、不在其中 not in、子查询

select top 5 \*
from TBook
where 价格 not in (
 select top 4 价格
 from TBook)

### 多表查询

- 有公共的列，在前面表名以示区分
- 指明两个表的公共**相等**的列

select TLend.ISBN, TLend.借书时间, TLend.借书证号, TLend.图书 ID, TLend.应还时间,TReader.姓名
from TReader,TLend, TBook
where TReader.借书证号 = TLend.借书证号
and TBook.ISBN = TLend.ISBN
and TLend.借书证号 = '081101'
and TBook.书名 = 'SQL Server 实用教程（第 3 版）'

### 多表连接 join on

select 姓名
from TReader join HLend
on TReader.借书证号 = HLend.借书证号
where (还书时间 - 借书时间)>5

### 聚合函数 count

select count(\*) 读者总数
from TReader

### 分组 group by

select 专业, count(\*) 不同专业人数
from TReader
group by 专业

#### having 语句进行筛选

SELECT 借书证号
FROM TLend
WHERE 借书时间<'2009-09-23'
GROUP BY 借书证号
 HAVING COUNT(借书证号)>=2

#### 排序升序 asc、降序 desc

SELECT \*  
FROM TReader
WHERE 专业='计算机'
ORDER BY 出生时间 desc

### 分组 GROUP BY

```sql
[GROUP BY {col_name|position} [ASC|DESC],...]
```

ASC 和 DESC 分别是升序（缺省）和降序。
看一个脚本：

```sql
SELECT * FROM users;
SELECT sex FROM users GROUP BY sex;
```

两条语句的执行结果分别为：

也可以使用编号代替字段名，但是这样不鼓励。比如上面的分组语句可以写成：

```sql
SELECT sex FROM users GROUP BY 1;
```

后面的数字 1，值得是在 SELECT 选取的字段中的顺序。这里只选了一个字段，当然为 1。

#### HAVING

与 GROUP BY 分组联用。只对部分记录做分组操作。有两种用法，比如：

```sql
SELECT sex,age FROM users GROUP BY sex HAVING age > 35;
SELECT sex FROM users GROUP BY sex HAVING count(id) >=2;
```

- 第一种，注意后面的 HAVING 的字段必须在前面 SELECT 部分出现才行。
- 第二种，在 HAVING 后面使用*聚合函数*，前面无需出现相应字段。

!!!Having 放在 group by 后面

### 排序 ORDER BY

```sql
[ORDER BY {col_name|expr|position} [ASC|DESC],...]
```

比如：

```sql
SELECT * FROM users ORDER BY id DESC;
```

可以排序多个字段，如果第一个字段能排出结果，就不会用到第 2 个字段。比如：

```sql
SELECT * FROM users ORDER BY id ,id DESC;
```

因为年龄 age 有相同的，继续排序就要用到 id 的降序。

### 限制返回记录的数量 LIMIT

LIMIT 有两种语法结构，第一种比较常见。

```sql
[LIMIT {[offset,] row_count|row_count OFFSET offset}]
```

起始位置，偏移量

```sql
SELECT * FROM users ;
SELECT * FROM users LIMIT 3,2;
SELECT * FROM users LIMIT 2;
```

3，2：表示从第 3 条开始返回，返回两条记录。注意记录从 0 开始编号，即结果集中的从第 0 条开始。
如果 LIMIT 后面只有一个参数，认作是偏移量，起始位置缺省为 0。

### 合并查询结果 UNION

在多条查询语句之间，使用`UNION`关键字会何必所有查询结果。
默认会去掉重复行，如果不想去掉重复行，请使用`UNION ALL`
需要注意的是，要联合的查询结果必须有相同的列数（列名可以不同）

> 去重效率比不去重效率低

## 子查询

子查询（Subquery）是指嵌套在查询内部，且必须始终出现在圆括号内。

> 外面的查询并非只是指的查找。

### 可以包含的关键字或条件

```
DISTINCT、GROUP BY、ORDER BY、LIMIT、函数等
```

##外层的查询可以是

- SELECT
- INSERT
- UPDATE
- SET
- DO

### 子查询分为三类

### 使用比较运算符的子查询

```
=,>,<,>=,<=,<>,!=,<=>
```

#### 语法结构

```
operand comparison_operator {ANY|SOME|ALL} (subquery)
```

比如：

```mysql
SELECT * FROM av WHERE 身高>=(SELECT AVG(身高) FROM av);
```

字段名不加引号

#### 修饰比较运算符

使用 ANY、SOME、ALL，ANY 和 SOME 是等价的。

|       | ANY    | ALL    |
| ----- | ------ | ------ |
| >,>=  | 最小值 | 最大值 |
| <,<=  | 最大值 | 最小值 |
| =,<=> | 任意值 |        |
| <>,!= |        | 任意值 |

比如：

```mysql
SELECT * FROM av WHERE 胸围>=ALL(SELECT 胸围 FROM av WHERE  身高<160);
```

### 使用[NOT]IN 的子查询

#### 语法结构

```
operand comparison_operator [NOT] IN (subquery)
```

=ANY 和 IN 等效
!=ALL 和 NOT IN 等效

### 使用[NOT]EXISTS 的子查询

如果子查询返回任何行，EXISTS 将返回 TRUE，否则返回 FALSE。
该类子查询使用较少
