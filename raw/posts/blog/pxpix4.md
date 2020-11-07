---
title: hexo-生成文章出错
categories: [Bug]
date: 2020-05-31 16:00:06
description: 文章内容格式错误也会导致hexo生成出错。
---

## 一、报错信息

```bash
hexo g
INFO  Start processing
FATAL Somethings wrong. Maybe you can find the solution here: https://hexo.io/docs/troubleshooting.html
Template render error: (unknown path)
  unexpected end of file
    at Object._prettifyError (D:\Blog\blog-wztlink1013-3.0\node_modules\nunjucks\src\lib.js:36:11)
    at Template.render (D:\Blog\blog-wztlink1013-3.0\node_modules\nunjucks\src\environment.js:536:21)
    at Environment.renderString (D:\Blog\blog-wztlink1013-3.0\node_modules\nunjucks\src\environment.js:378:17)
    at D:\Blog\blog-wztlink1013-3.0\node_modules\hexo\lib\extend\tag.js:120:48
    at tryCatcher (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\util.js:16:23)
    at Function.Promise.fromNode.Promise.fromCallback (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:209:30)
    at Tag.render (D:\Blog\blog-wztlink1013-3.0\node_modules\hexo\lib\extend\tag.js:120:18)
    at Object.onRenderEnd (D:\Blog\blog-wztlink1013-3.0\node_modules\hexo\lib\hexo\post.js:291:22)
    at D:\Blog\blog-wztlink1013-3.0\node_modules\hexo\lib\hexo\render.js:79:21
    at tryCatcher (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\util.js:16:23)
    at Promise._settlePromiseFromHandler (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:547:31)
    at Promise._settlePromise (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:604:18)
    at Promise._settlePromise0 (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:649:10)
    at Promise._settlePromises (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:729:18)
    at _drainQueueStep (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\async.js:93:12)
    at _drainQueue (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\async.js:86:9)
    at Async._drainQueues (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\async.js:102:5)
    at Immediate.Async.drainQueues (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\async.js:15:14)
    at processImmediate (internal/timers.js:456:21)
```

## 二、分析并解决问题

根据报错信息，包 nunjucks、bluebird 使用异常

然后进到 node_modules 文件夹里面分别找到两个包，进入 README.md 进入官网，numjucks 包应该是渲染文章有关，期间出错应该是 markdown 文章里面所使用的标签与 nunjucks 模板引擎的标签冲突，

根据文档定位英文大括号的使用，定位文章使用带有大括号的 fancybox 标签，标签结束忘记加 end 而导致出错

## 三、hexo g 出错总结

hexo g 出错总结多为文件格式出错，主题配置出错，抑或是文章格式出错等

### 文章头部

- _hexo 相关文章报错，大多数为格式出错，文章头部的使用严格遵循 hexo 官方文档的使用，但是目录优化插件，使得文章头部的元信息更为简单化_
- 减号`-`分隔符，注意头部 front-matter、markdown 行分隔。如果没有加 front-matter，文章还用了 markdown，会报错
  `YAMLException: end of the stream or a document separator is expected at line 6, column 1:`
- 目录优化插件的使用

### 文章体

- 英文大括号的使用要“有始有终”，Volantis 主题的大括号标签使用

### 空格问题

```bash
ERROR Process failed: _posts/yuque/外汇时间序列预测.md
YAMLException: end of the stream or a document separator is expected at line 2, column 11:
    categories:
              ^
    at generateError (D:\Blog\blog-wztlink1013-3.0\node_modules\js-yaml\lib\js-yaml\loader.js:167:10)
    at throwError (D:\Blog\blog-wztlink1013-3.0\node_modules\js-yaml\lib\js-yaml\loader.js:173:9)
    at readDocument (D:\Blog\blog-wztlink1013-3.0\node_modules\js-yaml\lib\js-yaml\loader.js:1545:5)
    at loadDocuments (D:\Blog\blog-wztlink1013-3.0\node_modules\js-yaml\lib\js-yaml\loader.js:1588:5)
    at Object.load (D:\Blog\blog-wztlink1013-3.0\node_modules\js-yaml\lib\js-yaml\loader.js:1614:19)
    at parseYAML (D:\Blog\blog-wztlink1013-3.0\node_modules\hexo-front-matter\lib\front_matter.js:78:23)
    at parse (D:\Blog\blog-wztlink1013-3.0\node_modules\hexo-front-matter\lib\front_matter.js:54:12)
    at D:\Blog\blog-wztlink1013-3.0\node_modules\hexo\lib\plugins\processor\post.js:48:20
    at tryCatcher (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\util.js:16:23)
    at Promise._settlePromiseFromHandler (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:544:35)
    at Promise._settlePromise (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:604:18)
    at Promise._settlePromise0 (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:649:10)
    at Promise._settlePromises (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:729:18)
    at Promise._fulfill (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:673:18)
    at PromiseArray._resolve (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise_array.js:127:19)
    at PromiseArray._promiseFulfilled (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise_array.js:145:14)
    at PromiseArray._iterate (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise_array.js:115:31)
    at PromiseArray.init [as _init] (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise_array.js:79:10)
    at Promise._settlePromise (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:601:21)
    at Promise._settlePromise0 (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:649:10)
    at Promise._settlePromises (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:729:18)
    at Promise._fulfill (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:673:18)
    at PromiseArray._resolve (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise_array.js:127:19)
    at PromiseArray._promiseFulfilled (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise_array.js:145:14)
    at Promise._settlePromise (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:609:26)
    at Promise._settlePromise0 (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:649:10)
    at Promise._settlePromises (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:729:18)
    at Promise._fulfill (D:\Blog\blog-wztlink1013-3.0\node_modules\bluebird\js\release\promise.js:673:18)
INFO  Generating Baidu urls for last 1 posts
```

奇葩错误，在最上面的三个分隔符后面也要加空格，可能是语雀那边同步过来的文章问题

## 参考

- [nunjucks 文档](https://mozilla.github.io/nunjucks/cn/getting-started.html)
