---
title: DB_Student数据库记录
date: 2020-09-23 16:18:00
categories: Language
description: DB_Student数据库记录
---

## 一、Student 表

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600849205116-d4263820-8bbb-4d01-b97b-a0363f4498e7.png#align=left&display=inline&height=216&margin=%5Bobject%20Object%5D&name=image.png&originHeight=432&originWidth=722&size=41200&status=done&style=shadow&width=361)

## 二、Course 表

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600849217512-41be815b-8bc4-4b6a-82c2-cbb4d335c9b9.png#align=left&display=inline&height=256&margin=%5Bobject%20Object%5D&name=image.png&originHeight=511&originWidth=632&size=38392&status=done&style=shadow&width=316)

## 三、SC 表

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1600849229639-8d5cd91f-d87e-49e9-a1cd-9c563b64723f.png#align=left&display=inline&height=262&margin=%5Bobject%20Object%5D&name=image.png&originHeight=523&originWidth=492&size=32976&status=done&style=shadow&width=246)

## 四、初始化 SQL 语句

```sql
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

/*学生表*/
CREATE TABLE Student
(
    Sno  INT(9) PRIMARY KEY,
    Sname VARCHAR(10),
    Ssex  CHAR(2),
    Sage  TINYINT(3),
    Sdept VARCHAR(20)
);
INSERT INTO Student
VALUES (201215121, '李勇', '男', 20, 'CS'),
     (201215122, '刘晨', '女', 19, 'CS'),
    (201215123, '王敏', '女', 18, 'MA'),
    (201215125, '张立', '男', 19, 'IS'),
    (201215133, '张三', '男', 21, 'TE'),
     (201215137, '赵四', '男', 23, 'TE'),
     (201215139, '田二', '女', 24, 'CS'),
     (201215140, '李四', '男', 21, 'CS'),
     (201215141, '郑五', '女', 22, 'IS');

/*课程表*/
CREATE TABLE Course
(
    Cno  	INT(4) PRIMARY KEY,
    Cname 	VARCHAR(40),
    Cpno  	INT(4),
    Ccredit 	TINYINT(3),
    FOREIGN 	KEY (Cpno) REFERENCES Course (Cno)
);
INSERT INTO Course
VALUES	(1, '数据库', 5, 4),
    	(2, '数学', NULL, 2),
    (3, '信息系统', 1, 4),
     (4, '操作系统', 6, 3),
     (5, '数据结构', 7, 4),
     (6, '数据处理', NULL, 2),
     (7, 'PASCAL语言', 6, 4);

/*选课表*/
CREATE TABLE SC
(
    Sno  INT(9),
    Cno  INT(4),
    Grade SMALLINT(3),
    PRIMARY KEY (Sno, Cno),
/* 主码由两个属性构成，必须作为表级完整性进行定义*/
    FOREIGN KEY (Sno) REFERENCES Student (Sno),
/* 表级完整性约束条件，Sno是外码，被参照表是Student */
    FOREIGN KEY (Cno) REFERENCES Course (Cno)
/* 表级完整性约束条件， Cno是外码，被参照表是Course*/
);
INSERT INTO SC
VALUES (201215121, 1, 92),
			(201215121, 2, 85),
			(201215121, 3, 88),
			(201215122, 2, 90),
      (201215122, 3, 80),
			(201215122, 6, 59),
     	(201215123, 1, 84),
     	(201215125, 1, 60),
     	(201215125, 3, 90),
     	(201215133, 4, 87),
     	(201215137, 2, 79),
     	(201215139, 2, 80),
     	(201215140, 2, 81);

SET FOREIGN_KEY_CHECKS = 1;
```
