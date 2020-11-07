---
title: 权限管理
date: 2020-09-23 22:08:00
categories: Language
description: 权限管理
---

# 用户管理

> 本文所有操作，均可**通过普通 SQL 语句更新系统表 user**来实现相应的功能。

## 新建用户

> 基本格式

```sql
CREATE USER 'username'@'host' IDENTIFIED BY 'password';
```

注意引号的位置，不要用一对引号把@也包含进来。@前面是用户名，后面是主机名，可以使用通配符`%`

> 实际上可以省略用户名和主机名处的引号，但如果使用了通配符则引号不能省略

```sql
CREATE USER 'jelly'@'%' IDENTIFIED BY '123456';
CREATE USER jelly@127.0.0.1;
CREATE USER jelly;
```

## 删除用户

```sql
DROP USER user;
DROP USER jelly@'%';
DROP USER jelly@localhost
```

## 重命名用户

> 例如：

```sql
RENAME USER 'jelly'@'%' TO 'guodong'@'%';
```

## 修改密码

> 例如：

```sql
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123456');
```

> 此外还可以使用 mysql 工具`mysqladmin`来修改
> 格式：`mysqladmin -u用户名 -p旧密码 password 新密码`

# 权限管理

| 权限范围 | 可用权限                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------- |
| 表权限   | `Select`, `Insert`, `Update`, `Delete`, `Create`, `Drop`, `Grant`, `References`, `Index`, `Alter` |
| 列权限   | `Select`, `Insert`, `Update`,`References`                                                         |
| 过程权限 | `Execute`, `Alter Routine`, `Grant`                                                               |

## 授权

```sql
GRANT SELECT ON *.*  TO jelly@'%'
//给一个用户（jelly）分配全部的操作权限
GRANT ALL PRIVILEGES ON *.*  TO jelly@'%'
```

%就是前面我们提到过的通配符，可以匹配 0 到 n 个字符。这里指的是该用户所登录的任何主机。

## 取消授权

语法：

```sql
REVOKE privilege ON databasename.tablename FROM 'username'@'host';
```

例如：

```sql
REVOKE SELECT ON test.user FROM 'jelly'@'%';
REVOKE ALL ON *.* FROM 'jelly'@'%';
```

> **GRANT**和**REVOKE**对于用户而言，一个是**TO**，一个是**FROM**

## 查看授权

例如：

```sql
SHOW GRANTS FOR 'jelly'@'%';
```

## 刷新权限

```sql
FLUSH PRIVILEGES
```

偶尔会出现，修改了操作系统表的权限，却没有及时更新的情况。可以用上述命令刷新。
