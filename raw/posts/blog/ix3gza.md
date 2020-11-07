---
title: SQL语句的优化
date: 2020-09-23 22:13:00
categories: Language
description: SQL语句的优化
---

## IN 操作优化

- IN 后面只能接常量，且最多不超过 200 个
- IN 后面不能接子查询

```sql
select * from tb1 where tb1.id in (select id from tb2 where tb2.c1...)
// 优化后：
select tb1.* from tb1, (select id from tb2 where tb2.c1...)t where tb1.id = t.id;
```
