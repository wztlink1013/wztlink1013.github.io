---
title: Navicat-1045报错
categories: Bug
date: 2020-06-11 15:26:52
description: "Navicat报错：1045-Access denied for user root@localhost（using  password:YES) "
---

## 一、报错信息

```
1045-Access denied for user root@localhost(using password:YES)
```

## 二、问题分析与解决

不被接入，改 root 密码

在 mysql 控制台里面改密码

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密码';`

刷新数据库

`flush privileges;`

退出

`quit;`

重启 Navicat 再次链接即可。

## 参考

- [acoolgiser](https://blog.csdn.net/acoolgiser/article/details/82967317?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522159185926319725250149590%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=159185926319725250149590&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_ctr_v3-4-82967317.ecpm_v1_rank_ctr_v3&utm_term=1045-Access+denied+for+user+ro)
- [张张张 i](https://blog.csdn.net/zhang_yu_ling/article/details/103177296?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522159185926319725250149590%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=159185926319725250149590&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_ctr_v3-2-103177296.ecpm_v1_rank_ctr_v3&utm_term=1045-Access+denied+for+user+ro)
