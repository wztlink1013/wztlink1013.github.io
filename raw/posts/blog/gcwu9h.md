---
title: npm ERR! Unexpected end of JSON input while parsing
date: 2020-10-27 22:30:00
categories: Bug
description: npm ERR! Unexpected end of JSON input while parsing
---

## 报错信息

```bash
npm WARN deprecated circular-json@0.5.9: CircularJSON is in maintenance only, flatted is its successor.
npm ERR! Unexpected end of JSON input while parsing near '...:"~0.0.0","webpack-de'

npm ERR! A complete log of this run can be found in:
npm ERR! C:\文件路径\npm-cache_logs\2018-12-13T10_24_02_151Z-debug.log
Package install failed, see above.
```

（具体的报错信息和这个类似）
升级 hexo5.0 过程中，npm i --save 出错，各种插件都不能很好的下载。

## 问题解决

在 node 安装目录下配置的 node_cache 目录里面 `D:\Develop\nodejs` 
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603808754530-64316710-95b9-4e13-98dd-efda5197f782.png#align=left&display=inline&height=167&margin=%5Bobject%20Object%5D&name=image.png&originHeight=487&originWidth=1128&size=62358&status=done&style=shadow&width=387)
系统盘的 AppData/roaming 的文件夹并没有一个 npm 的缓存目录，安装 node 的时候将`D:\Develop\nodejs` 放到系统环境变量的 Path 路径了。

所以只需要一下两条命令即可

```bash
npm cache clean --force

npm install
```

**多看看**[阮一峰-npm 模块安装机制简介](https://www.ruanyifeng.com/blog/2016/01/npm-install.html)，要对 npm 又进一步的理解。

## 参考资料

- [stackoverflow-npm ERR! Unexpected end of JSON input while parsing](https://stackoverflow.com/questions/53759929/npm-err-unexpected-end-of-json-input-while-parsing)
- [阮一峰-npm 模块安装机制简介](https://www.ruanyifeng.com/blog/2016/01/npm-install.html)
