---
title: Cannot set property 'innerHTML' of null
date: 2020-10-26 22:42:00
categories: Bug
description: Cannot set property 'innerHTML' of null
---

## 报错信息

```javascript
Cannot set property 'innerHTML' of null
```

## 问题解决

如果 js 放在头部时，此时浏览器渲染未进入 dom 节点，因为提示为空，或者找不到。
所以把 js 代码放到最后或调用的对象后面就行了。id 元素在 script 脚本之后，不能引用，类似在使用变量之前对其进行定义一样。
