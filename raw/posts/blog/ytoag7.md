---
title: uni-app简单api调用
date: 2020-11-06 17:23:00
categories: Android
description: uni-app简单api调用
---

## 教程

- [uni-app 跨平台框架官方教程](https://ke.qq.com/course/343370)

## “uni-app” VS 传统的 Web“三剑客”

### 网络模型的变化

之前学习的`javaweb`形式的是“相互嵌套”类型的，`jsp`代码里面可以有`html`代码。

以前网页大多是 b/s，服务端代码混合在页面里；
现在是 c/s，前后端分离，通过 js api(类似 ajax 的`uni.request`)获取 json 数据，把数据绑定在界面上渲染。

### 文件类型变化

.vue 文件通过编译，编译 js 文件

### 代码架构大变动

以前的 HTML 代码节点，有 html 大节点，还有 script 和 style 两个小结点

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <script type="text/javascript"></script>
    <style type="text/css"></style>
  </head>
  <body></body>
</html>
```

现在 template 是一级节点，用于写**tag 组件**，script 和 style 是并列的一级节点，也就是有 3 个一级节点

```vue
<template>
  <view>
    注意必须有一个view，且只能有一个根view。所有内容写在这个view下面。
  </view>
</template>

<script>
export default {};
</script>

<style></style>
```

- [Vue 单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

### 文件导入方式变了

#### js 引入方式

以前通过` script ``src `、` link ``href `引入外部的 js 和 css；
现在是**es6**的写法，`import`引入外部的 js 模块(注意不是文件)或 css
以前

```javascript
<script src="js/jquery-1.10.2.js" type="text/javascript"></script>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
```

现在

> js 要 require 进来，变成了对象。

在 hello uni-app 项目的 common 目录有一个工具类`util.js`，可以在 hello uni-app 中搜索这个例子查看。

```javascript
<script>
  var util = require('../../../common/util.js'); //require这个js模块 var
  formatedPlayTime = util.formatTime(playTime); //调用js模块的方法
</script>
```

而在这个`util.js`里，要把之前的 function 封装为对象的方法
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1604048264989-b4591bb0-e4bc-4581-aae5-bf7615f268b4.png#align=left&display=inline&height=231&margin=%5Bobject%20Object%5D&name=image.png&originHeight=606&originWidth=1331&size=70716&status=done&style=shadow&width=508)
当然还有一些高级的用法

```javascript
var dateUtils = require("../../../common/util.js").dateUtils; //直接使用js模块的属性。在hello uni-app有示例
import * as echarts from "/components/echarts/echarts.simple.min.js"; //将js导入并重命名为echarts，然后使用echarts.来继续执行方法。
```

#### CSS 引入方式

```css
<style>
    @import "./common/uni.css";
    .uni-hello-text{
        color:#7A7E83;
    }
</style>
```

**改全局样式：**在根目录下的 app.vue 里写入，每个页面都会加载 app.vue 里的样式。

#### 组件导入

类似 hexo 博客主题设计一样，能以组件的形式模块化导入。
如下是导入一个角标的组件库，在页面上显示一个 abc 并且右上角有个数字角标 1，[详见](http://ext.dcloud.net.cn/plugin?id=21)

```vue
<template>
  <view>
    <uni-badge text="abc" :inverted="true"></uni-badge
    ><!--3.使用组件-->
  </view>
</template>
<script>
import uniBadge from "../../../components/uni-badge.vue"; //1.导入组件（这步属于传统vue规范，但在uni-app的easycom下可以省略这步）
export default {
  data() {
    return {};
  },
  components: {
    uniBadge, //2.注册组件（这步属于传统vue规范，但在uni-app的easycom下可以省略这步）
  },
};
</script>
```

如需要全局导入 vue 组件，即每个页面都可以直接使用而不用引用和注册的话，在项目根目录下的 main.js 里处理。如下是 hello uni-app 里的例子。

```javascript
//main.js
import pageHead from "./components/page-head.vue"; //导入
Vue.component("page-head", pageHead); //注册。注册后在每个vue的page页面里可以直接使用<page-head></page-head>组件。
```

上述的组件使用方式属于传统 vue 的概念。uni-app 2.7 以后推出了更简单的组件使用技术[easycom](https://uniapp.dcloud.net.cn/collocation/pages?id=easycom)，无需引用和注册组件，直接在 template 区域使用组件即可。

### 组件/标签的变化

下为 html 标签和 uni-app 内置组件的映射表：
（其实老的 HTML 标签也可以在 uni-app 里使用，uni-app 编译器会在编译时把老标签转为新标签，比如把 div 编译成 view。但不推荐这种用法，调试 H5 端时容易混乱。）

- div 改成 [view](https://uniapp.dcloud.io/component/view)
- span、font 改成 [text](https://uniapp.dcloud.io/component/text)
- a 改成 [navigator](https://uniapp.dcloud.io/component/navigator)
- img 改成 [image](https://uniapp.dcloud.io/component/image)
- [input](https://uniapp.dcloud.io/component/input) 还在，但 type 属性改成了 confirmtype
- [form](https://uniapp.dcloud.io/component/form)、[button](https://uniapp.dcloud.io/component/button)、[checkbox](https://uniapp.dcloud.io/component/checkbox)、[radio](https://uniapp.dcloud.io/component/radio)、[label](https://uniapp.dcloud.io/component/label)、[textarea](https://uniapp.dcloud.io/component/textarea)、[canvas](https://uniapp.dcloud.io/component/canvas)、[video](https://uniapp.dcloud.io/component/video) 这些还在。
- select 改成 [picker](https://uniapp.dcloud.io/component/picker)
- iframe 改成 [web-view](https://uniapp.dcloud.io/component/web-view)
- ul、li 没有了，都用 view 替代
- audio 不再推荐使用，改成 api 方式，[背景音频 api 文档](https://uniapp.dcloud.io/api/media/background-audio-manager?id=getbackgroundaudiomanager)

**除了改动外，新增了一批手机端常用的新组件**
\*\*

- scroll-view [可区域滚动视图容器](https://uniapp.dcloud.io/component/scroll-view)
- swiper [可滑动区域视图容器](https://uniapp.dcloud.io/component/swiper)
- icon [图标](https://uniapp.dcloud.io/component/icon)
- rich-text [富文本（不可执行 js，但可渲染各种文字格式和图片）](https://uniapp.dcloud.io/component/rich-text)
- progress [进度条](https://uniapp.dcloud.io/component/progress)
- slider [滑块指示器](https://uniapp.dcloud.io/component/slider)
- switch [开关选择器](https://uniapp.dcloud.io/component/switch)
- camera [相机](https://uniapp.dcloud.io/component/camera)
- live-player [直播](https://uniapp.dcloud.io/component/live-player)
- map [地图](https://uniapp.dcloud.io/component/map)
- cover-view [可覆盖原生组件的视图容器](https://uniapp.dcloud.io/component/cover-view?id=cover-view)
  cover-view 需要多强调几句，uni-app 的非 h5 端的 video、map、canvas、textarea 是原生组件，层级高于其他组件。如需覆盖原生组件，则需要使用 cover-view 组件。详见[层级介绍](https://uniapp.dcloud.net.cn/component/native-component)

除了内置组件，还有很多开源的扩展组件，把常用操作都进行封装，DCloud 建立了插件市场收录这些扩展组件，详见[插件市场](https://ext.dcloud.net.cn/)

### js 的变化

js 的变化，分为**运行环境变化**、**数据绑定模式变化**、**api 变化**3 部分。

#### 运行环境从浏览器变成 v8 引擎

标准 js 语法和 api 都支持，比如 if、for、settimeout、indexOf 等。

但**浏览器专用的**window、document、navigator、location 对象，包括 cookie 等存储，**只有在浏览器中才有**，app 和小程序都不支持。

> 可能有些人以为 js 等于浏览器里的 js。其实 js 是 ECMAScript 组织管理的，浏览器中的 js 是 w3c 组织基于 js 规范补充了 window、document、navigator、location 等专用对象。

在 uni-app 的各个端中，除了 h5 端，其他端的 js 都运行在一个独立的 v8 引擎下，不是在浏览器中，所以浏览器的对象无法使用。如果你做过小程序开发，对此应当很了解。
**这意味着依赖 document 的很多 HTML 的库，比如 jqurey 无法使用。**
当然 app 和小程序支持 web-view 组件，里面可以加载标准 HTML，这种页面仍然支持浏览器专用对象 window、document、navigator、location。

#### 以前的 dom 操作，改成 vue 的 MVVM 模式

现在前端趋势是去 dom 化，改用**mvvm 模式，**更简洁的写法，大幅减少代码行数，同时差量渲染性能更好。
uni-app 使用 vue 的数据绑定方式解决 js 和 dom 界面交互的问题。
如果你想改变某个 dom 元素的显示内容，比如一个 view 的显示文字：
**以前**是给 view 设 id，然后 js 里通过选择器获取 dom 元素，进一步通过 js 进行赋值操作，修改 dom 元素的属性或值。
如下演示了一段代码，页面中有个显示的文字区和一个按钮，点击按钮后会修改文字区的值

```html
<html>
  <head>
    <script type="text/javascript">
      document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("spana").innerText = "456";
      });
      function changetextvalue() {
        document.getElementById("spana").innerText = "789";
      }
    </script>
  </head>
  <body>
    <span id="spana">123</span>
    <button type="button" onclick="changetextvalue()">修改为789</button>
  </body>
</html>
```

现在的做法，是**vue 的绑定模式**，给这个**dom 元素绑定一个 js 变量**，在 script 中修改 js 变量的值，dom 会自动变化，页面会自动更新渲染

```vue
<template>
  <view>
    <text>{{ textvalue }}</text
    ><!-- 这里演示了组件值的绑定 -->
    <button :type="buttontype" @click="changetextvalue()">修改为789</button
    ><!-- 这里演示了属性和事件的绑定 -->
  </view>
</template>
<script>
export default {
  data() {
    return {
      textvalue: "123",
      buttontype: "primary",
    };
  },
  onLoad() {
    this.textvalue = "456"; //这里修改textvalue的值，其实123都来不及显示就变成了456
  },
  methods: {
    changetextvalue() {
      this.textvalue = "789"; //这里修改textvalue的值，页面自动刷新为789
    },
  },
};
</script>
```

注意上述代码中的 `export default {}` 里的 `data(): {return { }}`。
在 vue 的设计中，这里存放着页面中需要绑定的数据，写在 data 里，才能被界面正确的绑定和渲染。
注意：uni-app 的 vue 页面是 vue 的单文件组件规范，按照 vue 的定义只接受 function，必须用 return 包起来。
如果你学过小程序的数据绑定，但不了解 vue，要注意：

- 小程序的数据绑定参考了 vue，但自己修改了一些。在 uni-app 中只支持标准的 vue，不支持小程序的数据绑定语法
- 小程序里的 setData 在 uni-app 里并不存在，因为 vue 是自动双向数据绑定的。直接通过赋值方式修改数据，如果数据绑定到界面上，界面会自动更新渲染

从上述示例，还可看出事件的写法变化。

- 以前，元素的事件是用 onxxx=""，里面写一段 js 或引用 function 的 name，比如上述代码中的`onclick="changetextvalue()"`
- 现在，需要在 js 的`export default {}` 里的 `methods: {}` 里写一个方法，然后在组件中使用`@click="changetextvalue()"`

在 js 中，与 data 和 methods 平级的，如上述示例代码中的`onload()`，称为生命周期。在普通 vue 页面里的生命周期叫页面生命周期。在项目根目录的 app.vue 文件中的生命周期叫应用生命周期。
除了`onload`，还有`onready`等很多生命周期，具体见[uni-app 的生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle)
在高级用法里，**vue 支持给组件设 ref（引用标记）**，这类似于之前 html 中给一个 dom 元素设 id，然后在 js 中也可以用`this.$refs.xxx`来获取。如下：

```vue
<template>
  <view>
    <view ref="testview">11111</view>
    <button @click="getTest">获取test节点</button>
  </view>
</template>
<script>
export default {
  methods: {
    getTest() {
      console.log(this.$refs.testview);
    },
  },
};
</script>
```

#### js api 的变化

因为 uni-app 的 api 是**参考小程序**的，所以**和浏览器的 js api**有很多不同，如

1. alert,confirm 改成 [uni.showmodel](https://uniapp.dcloud.io/api/ui/prompt?id=showmodal)
1. ajax 改成 [uni.request](https://uniapp.dcloud.io/api/request/request)
1. cookie、session 没有了，local.storage 改成 [uni.storage](https://uniapp.dcloud.io/api/storage/storage?id=setstorage)

uni-app 的 js api 还有很多，但基本就是小程序的 api，把 wx.xxx 改为 uni.xxx 即可。[详见](https://uniapp.dcloud.io/api/README)
uni-app 在不同的端，支持条件编译，无限制的使用各端独有的 api，[详见条件编译](https://uniapp.dcloud.io/platform)

### css 的变化

**标准的 css 基本都是支持的。**

- **选择器方面**
  > 有 2 个变化：

1. \*选择器不支持；
1. 元素选择器里没有 body，改为了 page。微信小程序即是如此。

```css
page {
}
```

- **单位方面：**px 无法动态适应不同宽度的屏幕，rem 无法用于 nvue/weex。如果想使用根据屏幕宽度自适应的单位，推荐使用 rpx，全端支持。 [尺寸单位文档](https://uniapp.dcloud.io/frame?id=%e5%b0%ba%e5%af%b8%e5%8d%95%e4%bd%8d)
- **布局方面：**uni-app 推荐使用 flex 布局，这个布局思路和传统流式布局有点区别。但 flex 的特色在于，不管是什么技术都支持这种排版，web、小程序/快应用、weex/rn、原生的 iOS、Android 开发，全都支持 flex。它是通吃所有端的新一代布局方案。相关教程请自行百度学习。

uni-app 的 vue 文件里支持所有 web 排版方式，不管是流式还是 flex。但 nvue 里，只支持 flex，因为它在 app 端是使用原生排版引擎渲染的。
**注意 css 里背景图和字体文件，尽量不要大于 40k，因为会影响性能。在小程序端，如果要大于 40k，需放到服务器侧远程引用或 base64 后引入，不能放到本地作为独立文件引用。**
\*\*

### 工程结构和页面管理

uni-app 的工程结构有单独的要求，[详见](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84)

每个可显示的页面，都必须在 [pages.json](https://uniapp.dcloud.io/collocation/pages) 中注册。如果你开发过小程序，那么 pages.json 类似 app.json。如果你熟悉 vue，这里没有 vue 的路由，都是在 pages.json 里管理。

原来工程的首页一般是 index.html 或 default.html，是在 web server 里配的。而 uni-app 的首页，是在 pages.json 里配的，page 节点下第一个页面就是首页。一般在/pages/xx 的目录下。

app 和小程序中，为了提升体验，页面提供了原生的导航栏和底部 tabbar，注意这些配置是在 pages.json 中做，而不是在 vue 页面里创建，但点击事件的监听在显示的 vue 页面中做。

如果你熟悉小程序开发的话，对比变化如下：

- 原来 app.json 被一拆为二。页面管理，被挪入了 uni-app 的 pages.json；非页面管理，挪入了 manifest.json
- 原来的 app.js 和 app.wxss 被合并到了 app.vue 中

## 参考资料

- [白话 uni-app 【也是 html、vue、小程序的区别】](https://ask.dcloud.net.cn/article/35657)(全文参考该文章的内容+自己的一些笔记)
