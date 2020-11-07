---
title: yuque-未拉取成功
categories: Bug
date: 2020-06-01 13:00:06
description: yuque-hexo未拉取成功
---

## 一、报错信息

```bash
$ yuque-hexo sync
[INFO] clear previous directory.
[INFO] remove yuque posts: D:\Blog\blog-wztlink1013-3.0\source\yuque
Mon, 01 Jun 2020 04:02:22 GMT yuque-hexo deprecated TOKEN of yuque will be required while verion >v1.6.0. at ..\..\Develop\nodejs\node_global\node_modules\yuque-hexo\lib\Downloader.js:39:19
[INFO] reading from local file: D:\Blog\blog-wztlink1013-3.0\yuque.json
[WARNING] Cannot find module 'D:\Blog\blog-wztlink1013-3.0\yuque.json'
Require stack:
- D:\Develop\nodejs\node_global\node_modules\yuque-hexo\lib\Downloader.js
- D:\Develop\nodejs\node_global\node_modules\yuque-hexo\command\sync.js
- D:\Develop\nodejs\node_global\node_modules\yuque-hexo\node_modules\common-bin\lib\command.js
- D:\Develop\nodejs\node_global\node_modules\yuque-hexo\node_modules\common-bin\index.js
- D:\Develop\nodejs\node_global\node_modules\yuque-hexo\index.js
- D:\Develop\nodejs\node_global\node_modules\yuque-hexo\bin\yuque-hexo.js
⚠️  Error: fail to fetch article list, response: {"status":401,"message":"Unauthorized"}
⚠️  Command Error, enable `DEBUG=common-bin` for detail
```

## 二、分析并解决问题

认证出错，应该和下面三个原因有关

- 客户端将其身份验证凭据发送到服务器，但是服务器由于某种原因拒绝了凭据。
- 客户端无法在请求中提供任何身份验证凭据。
- 客户端由于某种原因被禁止。某些应用程序用来限制来自特定 IP 地址的访问请求，因此，如果身份验证不是问题，则可能是服务器端禁止。401 Unauthorized Errors

也就是身份没有被验证，首先检查用户元信息相关

的确，配置都是没有问题的，然后去 issue 里面查看相关问题，了解到是语雀官方出于对知识库安全性的调整，需要使用第三方 API 访问知识库，需要传入环境变量 YUQUE_TOKEN。

然后根据两种指导方式，传入参数即可

- 设置全局的环境变量 YUQUE_TOKEN
- 命令执行时传入环境变量
  - mac / linux: YUQUE_TOKEN=xxx yuque-hexo sync
  - windows: set YUQUE_TOKEN=xxx && yuque-hexo sync

传入之后会有一封邮件发过来，然后新开 git bash 窗口，重新键入命令即可

成功之后是这个样子的

```bash
$ yuque-hexo sync
[INFO] clear previous directory.
[INFO] remove yuque posts: D:\Blog\blog-wztlink1013-3.0\source\_posts\yuque
[INFO] reading from local file: D:\Blog\blog-wztlink1013-3.0\yuque.json
[INFO] article amount: 2
[INFO] download articles done!
[INFO] writing to local file: D:\Blog\blog-wztlink1013-3.0\yuque.json
[INFO] create posts directory (if it not exists): D:\Blog\blog-wztlink1013-3.0\source\_posts\yuque
[INFO] generate post file: D:\Blog\blog-wztlink1013-3.0\source\_posts\yuque\hexo-test.md
[INFO] generate post file: D:\Blog\blog-wztlink1013-3.0\source\_posts\yuque\语雀文章测试.md
[INFO] yuque-hexo sync done!
```

## 相关参考

- [https://airbrake.io/blog/http-errors/401 U-unauthorized E-error:What It Is and How to Fix It](https://airbrake.io/blog/http-errors/401-unauthorized-error)
- [使用语雀编辑器写静态博客 https://www.yuguocong.cn/yuque/eg7hkp.html#Reference](https://www.yuguocong.cn/yuque/eg7hkp.html#Reference)
- [windows10 环境变量设置及理解环境变量](https://blog.csdn.net/Caoyang_He/article/details/82181695?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.nonecase)
