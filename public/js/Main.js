(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _Layout = _interopRequireDefault(require("./common/Layout.js"));

var _Toc = _interopRequireDefault(require("./part/Toc.js"));

var _Comment = _interopRequireDefault(require("./part/Comment.js"));

var _GoTop = _interopRequireDefault(require("./part/GoTop.js"));

var _Search = _interopRequireDefault(require("./part/Search.js"));

var _Share = _interopRequireDefault(require("./part/Share.js"));

var _Category = _interopRequireDefault(require("./part/Category.js"));

var _ArticleListImg = _interopRequireDefault(require("./part/ArticleListImg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    // 初始化回到顶部
    this.goTop = new _GoTop["default"](); // 初始化目录脚本函数

    this.toc = new _Toc["default"](); // 搜索模块

    this.search = new _Search["default"](); // 初始化评论模块下所有函数 TODO: 可以确认页面是否有评论组件

    this.comment = new _Comment["default"](); // 分享按钮的初始化

    this.share = new _Share["default"](); // 站点文章初始化

    this.categories = new _Category["default"](); // 布局初始化

    this.layout = new _Layout["default"](); // 头图优化代码

    this.articleListImg = new _ArticleListImg["default"]();
  }

  _createClass(Main, [{
    key: "init",
    value: function init() {
      this.layout.init();
      this.goTop.init();
      this.toc.init();
      this.search.init();
      this.comment.init();
      this.share.init();
      this.categories.init();
      this.articleListImg.init();
    }
  }]);

  return Main;
}(); // 入口函数，会在页面加载完毕执行


$(function () {
  // 主函数
  var main = new Main();
  console.log("lyrics script main: ", main);
  main.init();
});

},{"./common/Layout.js":2,"./part/ArticleListImg":3,"./part/Category.js":4,"./part/Comment.js":5,"./part/GoTop.js":6,"./part/Search.js":7,"./part/Share.js":8,"./part/Toc.js":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// PC：header上的左右按钮区域
var arrow_left = $("#arrow_left");
var arrow_right = $("#arrow_right"); // 布局：版心、左中右排版

var ct_left = $(".ct_left");
var ct_right = $(".ct_right");
var ct_center = $(".ct_center");
var container = $(".container"); // PC/app：切换header

var header_pc = $(".header_pc");
var header_app = $(".header_app"); // app：header上的左右按钮区域

var btn_app_sider = $("#btn_app_sider");
var btn_app_right = $("#btn_app_right"); // app：点击header_app时候弹出来的抽屉

var app_side_glass = $("#app_side_glass");
var app_side_content = $("#app_side_content"); // 1.左中配置

var one_container = "80%";
var one_ct_center_width = "75%";
var one_ct_left_width = "25%"; // 2. 中右配置

var two_container = "80%";
var two_ct_center_width = "75%";
var two_ct_right_width = "25%"; // 3. 左中右配置

var three_container = "95%";
var three_ct_center_width = "60%";
var three_ct_right_width = "20%";
var three_ct_left_width = "20%"; // 4. 中配置

var four_container = "75%";
var four_ct_center_width = "100%"; // 设备小于560px的中配置

var device_small_container = "98%";
var device_small_center = "100%"; // 设备小于780px的中配置

var device_center_container = "96%";
var device_center_center = "100%";
var top = 0;

var Layout = /*#__PURE__*/function () {
  function Layout() {
    _classCallCheck(this, Layout);
  }

  _createClass(Layout, [{
    key: "init",
    value: function init() {
      btn_pc_switch();
      btn_app_switch();
      browser_remember();
      device_switch(); // 这个放到最后自调用!因为不管本地存储是什么，最终还是要根据设备监听为主
    }
  }]);

  return Layout;
}();
/* PC：单/双/三栏布局切换按钮点击事件 */


exports["default"] = Layout;

var btn_pc_switch = function btn_pc_switch() {
  arrow_left.click(function () {
    if (ct_left.css("display") === "none") {
      // 转换切换之后的箭头按钮
      $("#arrow_left i:first-child").css({
        display: "none"
      });
      $("#arrow_left i:last-child").css({
        display: "inline-block"
      });
      ct_left.css("display", "block");

      if (ct_right.css("display") === "none") {
        //左中配置
        left_center();
      } else {
        //左中右配置
        left_center_right();
      }
    } else {
      $("#arrow_left i:first-child").css({
        display: "inline-block"
      });
      $("#arrow_left i:last-child").css({
        display: "none"
      });
      ct_left.css("display", "none");

      if (ct_right.css("display") === "none") {
        //中配置
        center();
      } else {
        //中右配置
        center_right();
      }
    }
  });
  arrow_right.click(function () {
    if (ct_right.css("display") === "none") {
      // 转换切换之后的箭头按钮
      $("#arrow_right i:first-child").css({
        display: "none"
      });
      $("#arrow_right i:last-child").css({
        display: "inline-block"
      });
      ct_right.css("display", "block");

      if (ct_left.css("display") === "none") {
        //中右配置
        center_right();
      } else {
        //左中右配置
        left_center_right();
      }
    } else {
      $("#arrow_right i:first-child").css({
        display: "inline-block"
      });
      $("#arrow_right i:last-child").css({
        display: "none"
      });
      ct_right.css("display", "none");

      if (ct_left.css("display") === "none") {
        // 中配置
        center();
      } else {
        // 左中配置
        left_center();
      }
    }
  });
};
/* 移动端左右上角的按钮 */


var btn_app_switch = function btn_app_switch() {
  // 点击左按钮
  btn_app_sider.click(function () {
    app_side_glass.css({
      display: "block"
    });
    app_side_content.css({
      display: "block"
    }); // 阻止抽屉层下的滑动穿透

    top = window.scrollY;
    container.css({
      position: "fixed",
      top: -top + "px"
    });
  }); // 点击毛玻璃片

  app_side_glass.click(function () {
    app_side_glass.css({
      display: "none"
    });
    app_side_content.css({
      display: "none"
    }); // 阻止抽屉层下的滑动穿透

    container.css({
      position: "",
      top: ""
    });
    window.scrollTo(0, top);
  }); // 点击右按钮 弹出搜索框

  btn_app_right.click(function () {// alert("本网站还在开发中，诸多功能还未完善，敬请期待~");
    //   console.log("本网站还在开发中，诸多功能还未完善，敬请期待~");
  });
};
/* 浏览器记住布局 */


var browser_remember = function browser_remember() {
  var b_left = ct_left.css("display");
  var b_right = ct_right.css("display");
  var b_layout;

  if (localStorage.hasOwnProperty("layout")) {
    // 浏览器有缓存的情况
    var layout_change = window.localStorage.getItem("layout");
    console.log("Layout: have cache");

    if (layout_change === "LR") {
      // 左中右布局
      left_center_right();
    } else if (layout_change === "L") {
      // 左中布局
      left_center();
    } else if (layout_change === "R") {
      // 中右布局
      center_right();
    } else if (layout_change === "C") {
      // 中布局
      center();
    } else {
      // 其他莫名其妙的情况
      left_center_right();
    }
  } else {
    // 浏览器没有缓存的情况
    console.log("Layout: no cache");

    if (b_left === "block" && b_right === "none") {
      // 左中布局
      b_layout = "L";
    } else if (b_left === "none" && b_right === "block") {
      // 中右布局
      b_layout = "R";
    } else if (b_left === "block" && b_right === "block") {
      //左中右布局
      b_layout = "LR";
    } else {
      b_layout = "LR"; // 左中右布局

      left_center_right();
    }

    window.localStorage.setItem("layout", b_layout);
  }
};
/* 媒体查询布局 */


var device_switch = function device_switch() {
  // 创建查询列表
  var device_width = [window.matchMedia("(max-width: 560px)"), window.matchMedia("(max-width: 980px)"), window.matchMedia("(max-width: 1261px)")]; // 定义回调函数

  function mediaMatchs() {
    if (device_width[0].matches) {
      device_small();
    } else if (device_width[1].matches) {
      device_center();
    } else if (device_width[2].matches) {
      device_largest();
    } else {
      console.log("Layout: > setting sizing");
    }
  } // 先运行一次回调函数


  mediaMatchs(); // 为查询列表注册监听器，同时将回调函数传给监听器

  for (var i = 0; i < device_width.length; i++) {
    device_width[i].addListener(mediaMatchs);
  }
}; // 判断pc段左右上角的箭头该显示哪个


var left_right_arrow = function left_right_arrow() {
  if (ct_left.css("display") === "none") {
    $("#arrow_left i:first-child").css({
      display: "inline-block"
    });
    $("#arrow_left i:last-child").css({
      display: "none"
    });
  } else {
    $("#arrow_left i:first-child").css({
      display: "none"
    });
    $("#arrow_left i:last-child").css({
      display: "inline-block"
    });
  }

  if (ct_right.css("display") === "none") {
    $("#arrow_right i:first-child").css({
      display: "inline-block"
    });
    $("#arrow_right i:last-child").css({
      display: "none"
    });
  } else {
    $("#arrow_right i:first-child").css({
      display: "none"
    });
    $("#arrow_right i:last-child").css({
      display: "inline-block"
    });
  }
};

var left_center_right = function left_center_right() {
  container.css({
    width: three_container
  });
  ct_center.css({
    width: three_ct_center_width
  });
  ct_left.css({
    width: three_ct_left_width,
    display: "block"
  });
  ct_right.css({
    width: three_ct_right_width,
    display: "block"
  });
  left_right_arrow();

  if (localStorage.hasOwnProperty("layout")) {
    window.localStorage.removeItem("layout");
    window.localStorage.setItem("layout", "LR");
    console.log("Layout: ", localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "LR");
  }
};

var left_center = function left_center() {
  container.css({
    width: one_container
  });
  ct_center.css({
    width: one_ct_center_width
  });
  ct_left.css({
    width: one_ct_left_width
  });
  ct_left.css("display", "block");
  ct_right.css("display", "none");
  left_right_arrow();

  if (localStorage.hasOwnProperty("layout")) {
    window.localStorage.removeItem("layout");
    window.localStorage.setItem("layout", "L");
    console.log("Layout: ", localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "L");
  }
};

var center_right = function center_right() {
  container.css({
    width: two_container
  });
  ct_right.css({
    width: two_ct_right_width
  });
  ct_center.css({
    width: two_ct_center_width
  });
  ct_left.css("display", "none");
  ct_right.css("display", "block");
  left_right_arrow();

  if (localStorage.hasOwnProperty("layout")) {
    window.localStorage.removeItem("layout");
    window.localStorage.setItem("layout", "R");
    console.log("Layout: ", localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "R");
  }
};

var center = function center() {
  container.css({
    width: four_container
  });
  ct_center.css({
    width: four_ct_center_width
  });
  ct_left.css("display", "none");
  ct_right.css("display", "none");
  left_right_arrow();

  if (localStorage.hasOwnProperty("layout")) {
    window.localStorage.removeItem("layout");
    localStorage.setItem("layout", "C");
    console.log("Layout: ", localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "C");
  }
};

var device_small = function device_small() {
  // 最小尺寸：最大560px
  console.log("Layout: < 560px");
  header_pc.css({
    display: "none"
  });
  header_app.css({
    display: "block"
  }); // 设置布局

  container.css({
    width: device_small_container
  });
  ct_center.css({
    width: device_small_center
  });
  ct_left.css("display", "none");
  ct_right.css("display", "none");
};

var device_center = function device_center() {
  // 中等尺寸：最大980px
  console.log("Layout: < 980px");
  header_pc.css({
    display: "none"
  });
  header_app.css({
    display: "block"
  }); // 设置布局

  container.css({
    width: device_center_container
  });
  ct_center.css({
    width: device_center_center
  });
  ct_left.css("display", "none");
  ct_right.css("display", "none");
};

var device_largest = function device_largest() {
  // 最大尺寸：最大1261px
  console.log("Layout: < 1261px");

  if (ct_left.css("display") === "none") {
    $("#arrow_left i:first-child").css({
      display: "inline-block"
    });
    $("#arrow_left i:last-child").css({
      display: "none"
    });
  } else {
    $("#arrow_left i:first-child").css({
      display: "none"
    });
    $("#arrow_left i:last-child").css({
      display: "inline-block"
    });
  }

  if (ct_right.css("display") === "none") {
    $("#arrow_right i:first-child").css({
      display: "inline-block"
    });
    $("#arrow_right i:last-child").css({
      display: "none"
    });
  } else {
    $("#arrow_right i:first-child").css({
      display: "none"
    });
    $("#arrow_right i:last-child").css({
      display: "inline-block"
    });
  }

  header_pc.css({
    display: "block"
  });
  header_app.css({
    display: "none"
  });
  container.css({
    width: three_container
  });
  ct_center.css({
    width: three_ct_center_width
  });
  ct_left.css({
    width: three_ct_left_width,
    display: "block"
  });
  ct_right.css({
    width: three_ct_right_width,
    display: "block"
  });
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ArticleListImg = /*#__PURE__*/function () {
  function ArticleListImg() {
    _classCallCheck(this, ArticleListImg);
  }

  _createClass(ArticleListImg, [{
    key: "init",
    value: function init() {
      setTimeout(function () {
        var article_img = document.querySelectorAll(".artcle_list_item_img");

        for (var i = 0; i < article_img.length; i++) {
          var wid = article_img[i].firstElementChild.width + 5;
          var hei = article_img[i].firstElementChild.height + 7;
          article_img[i].style.maxWidth = wid + "px";
          article_img[i].style.maxHeight = hei + "px";
        }
      }, 1000);
    }
  }]);

  return ArticleListImg;
}();

exports["default"] = ArticleListImg;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Category = /*#__PURE__*/function () {
  function Category() {
    _classCallCheck(this, Category);
  }

  _createClass(Category, [{
    key: "init",
    value: function init() {
      categories_widget();
      readmore_blog_essay();
    }
  }]);

  return Category;
}(); // 初始化


exports["default"] = Category;

var categories_widget = function categories_widget() {
  var arr_li = document.querySelectorAll(".category-list-item");
  arr_li.forEach(function (li) {
    // 美化该分类总数
    var obj_word = li.querySelector("a").nextElementSibling;
    obj_word.innerHTML = " [" + obj_word.innerHTML + "]"; // 该分类下如果有子分类

    if (li.querySelector(".category-list-child")) {
      // 默认所有子分类全部收缩
      li.querySelector("ul").style.display = "none"; // 展开按钮

      var node_1 = document.createElement("span");
      node_1.style.display = "inline";
      node_1.style.cursor = "pointer";
      node_1.innerHTML = '<i class="fa fa-plus-square-o" aria-hidden="true"></i> ';
      li.insertBefore(node_1, li.querySelector("a")); // 收缩按钮

      var node_2 = document.createElement("span");
      node_2.style.display = "none";
      node_2.style.cursor = "pointer";
      node_2.innerHTML = '<i class="fa fa-minus-square-o" aria-hidden="true"></i> ';
      li.insertBefore(node_2, li.querySelector("a")); // 展开按钮注册点击事件

      node_1.addEventListener("click", function () {
        node_1.style.display = "none";
        node_2.style.display = "inline";
        li.querySelector("ul").style.display = "block";
      }); // 收缩按钮注册点击事件

      node_2.addEventListener("click", function () {
        node_2.style.display = "none";
        node_1.style.display = "inline";
        li.querySelector("ul").style.display = "none";
      });
    } else {
      // 该分类下没有子分类
      var _node_ = document.createElement("span"); // 放一个占位符


      _node_.style.display = "inline";
      _node_.style.paddingLeft = "15px";
      _node_.innerHTML = "";
      li.insertBefore(_node_, li.querySelector("a"));
    }
  });
}; // 查看更多页面，优化博客/随笔显示


var readmore_blog_essay = function readmore_blog_essay() {
  if (location.pathname === "/archives/") {
    // console.log(location.search);
    // 去掉第一个？字符
    var params = location.search.substr(1); // 根据=号划分参数

    var arr = params.split("="); // 获取page_type参数

    var page_type = arr[1];
    var ul = document.querySelectorAll(".archive_article_list");

    for (var u = 0; u < ul.length; u++) {
      // 对每一个li进行判断，如果不是参数的值，就进行隐藏
      for (var i = 0; i < ul[u].children.length; i++) {
        var index = ul[u].children[i].getAttribute("data-index");

        if (index === "dsal") {
          index = "blog";
        }

        if (index !== page_type) {
          ul[u].children[i].style.display = "none";
        }
      }
    }
  }
};

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Comment = /*#__PURE__*/function () {
  function Comment() {
    _classCallCheck(this, Comment);

    twikoo.init({
      envId: "https://twikoo.wztlink1013.com/",
      el: "#tcomment",
      // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
      // path: 'window.location.pathname', // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
      // 评论加载成功后的回调函数。
      // 发表评论后自动刷新评论时、加载下一页评论时，也会触发。
      // 评论加载失败时不会触发。
      onCommentLoaded: function onCommentLoaded() {
        console.log("Twikoo: all comments loaded");
      }
    }).then(function () {
      // Twikoo 成功挂载后的回调函数。环境 ID 错误、网络异常、挂载失败等情况时不会触发。
      console.log("Twikoo: mount finished");
    });
  }

  _createClass(Comment, [{
    key: "init",
    value: function init() {
      goCommentArea();
      giscusMessage();
      twikooCount();
      twikooNewComments();
      switchComment();
    }
  }]);

  return Comment;
}(); // 右下角按钮事件 是否前往评论区


exports["default"] = Comment;

var goCommentArea = function goCommentArea() {
  // TODO: 监听url是否有参数 时刻监听到评论区
  if (document.querySelector("#comments")) {
    document.querySelector("#go_comments").style.display = "block";
  }
};

var giscusMessage = function giscusMessage() {
  function handleMessage(event) {
    if (event.origin !== "https://giscus.wztlink1013.com") return;
    if (!(_typeof(event.data) === "object" && event.data.giscus)) return;
    var giscusData = event.data.giscus;
    console.log("Giscus: iframe comment data", giscusData); // Do whatever you want with it, e.g. `console.log(giscusData)`.
    // You'll need to make sure that `giscusData` contains the message you're
    // expecting, e.g. by using `if ('discussion' in giscusData)`.
  }

  window.addEventListener("message", handleMessage);
  console.log("Giscus: message logic"); // Some time later...

  window.removeEventListener("message", handleMessage);
}; // 文章评论数


var twikooCount = function twikooCount() {
  // 判断页面是否有评论区id和引用评论数的id
  if (document.querySelector("#comments") && document.querySelector("#twikoo_comments")) {
    var twikoo_comments = document.querySelector("#twikoo_comments"); // BOM获取页面url的pathname路径

    var twikoo_comments_url = [location.pathname];
    twikoo.getCommentsCount({
      envId: "https://twikoo.wztlink1013.com/",
      // 环境 ID
      // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
      urls: twikoo_comments_url,
      // 不包含协议、域名、参数的文章路径列表，必传参数
      includeReply: false // 评论数是否包括回复，默认：false

    }).then(function (res) {
      // 将评论数写入其中
      twikoo_comments.innerText = res[0].count; // console.log(res);
      // 返回示例: [
      //   { url: '/2020/10/post-1.html', count: 10 },
      //   { url: '/2020/11/post-2.html', count: 0 },
      //   { url: '/2020/12/post-3.html', count: 20 }
      // ]
    })["catch"](function (err) {
      // 发生错误
      console.error(err);
    });
  }
}; // 最新评论


var twikooNewComments = function twikooNewComments() {
  var hot_articles = document.querySelector(".hot_articles_item");
  var page_size = 8;
  twikoo.getRecentComments({
    envId: "https://twikoo.wztlink1013.com/",
    // 环境 ID
    // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
    pageSize: page_size,
    // 获取多少条，默认：10，最大：100
    includeReply: false // 是否包括最新回复，默认：false

  }).then(function (res) {
    var new_comments_loding = document.querySelector(".new_comments_loding");
    var new_comments_loding_parent = new_comments_loding.parentElement;
    new_comments_loding_parent.removeChild(new_comments_loding); // 插入评论

    for (var i = 0; i < page_size; i++) {
      if (res[i].comment) {
        var new_comments_content = res[i].comment;
        var new_comments_nick = res[i].nick;
        var new_comments_url = res[i].url;
        var new_comments_avatar = res[i].avatar;
        var new_comments_time = res[i].relativeTime;
        var new_comments_id = "#" + res[i].id;
        var hot_articles_child = document.createElement("li");
        hot_articles_child.innerHTML = '<div class="item_up"><img src="' + new_comments_avatar + '" class="avatar"><div class="nick_name"><span class="nick">' + new_comments_nick + '</span><span class="time">' + new_comments_time + '</span></div></div><div class="item_down"><a href="' + new_comments_url + new_comments_id + '">' + new_comments_content + "</a></div>";
        hot_articles.append(hot_articles_child);
      }
    }
  })["catch"](function (err) {
    console.error(err);
  });
}; // 切换评论(评论组件存在时)


var switchComment = function switchComment() {
  if (document.querySelector("#switch_btn")) {
    var switch_btn = document.querySelector("#switch_btn");
    var github_comment = document.querySelector("#github_comment");
    var twikoo_comment = document.querySelector("#twikoo_comment");
    switch_btn.addEventListener("click", function () {
      switch_btn.classList.toggle("move");
      github_comment.classList.toggle("content-in");
      twikoo_comment.classList.toggle("content-in");

      if (github_comment.style.display === "none") {
        github_comment.style.display = "block";
        twikoo_comment.style.display = "none";
      } else {
        // Twikoo 评论系统
        github_comment.style.display = "none";
        twikoo_comment.style.display = "block";
      }
    });
  }
};

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GoTop = /*#__PURE__*/function () {
  function GoTop() {
    _classCallCheck(this, GoTop);

    this.goTopBtn = null;
    if (document.getElementById("go_top")) this.goTopBtn = document.getElementById("go_top");
  }

  _createClass(GoTop, [{
    key: "init",
    value: function init() {
      if (!this.goTopBtn) return;
      goTopLister(this.goTopBtn);
      clickGoTopBtn(this.goTopBtn);
    }
  }]);

  return GoTop;
}(); // 持续监听滚动状态


exports["default"] = GoTop;

var goTopLister = function goTopLister(dom) {
  window.onscroll = function () {
    dom.style.display = getScroll().top === 0 ? "none" : "block";
  };
}; // 点击回到顶部


var clickGoTopBtn = function clickGoTopBtn(dom) {
  var timer = null;

  dom.onclick = function () {
    cancelAnimationFrame(timer); //获取当前毫秒数

    var startTime = +new Date(); //获取当前页面的滚动高度

    var b = document.body.scrollTop || document.documentElement.scrollTop;
    var d = 500;
    var c = b;
    timer = requestAnimationFrame(function func() {
      var t = d - Math.max(0, startTime - +new Date() + d);
      document.documentElement.scrollTop = document.body.scrollTop = t * -c / d + b;
      timer = requestAnimationFrame(func);

      if (t == d) {
        cancelAnimationFrame(timer);
      }
    });
  };
}; // scroolTop兼容性方案


var getScroll = function getScroll() {
  return {
    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  };
};

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Search = /*#__PURE__*/function () {
  function Search() {
    _classCallCheck(this, Search);
  }

  _createClass(Search, [{
    key: "init",
    value: function init() {
      search();
    }
  }]);

  return Search;
}();

exports["default"] = Search;

var search = function search() {
  var inputArea = document.querySelector("#local-search-input");

  if (inputArea) {
    inputArea.onclick = function () {
      inputArea.disabled = true; // inputArea.placeholder = "初始化搜索ing···";

      getSearchFile();
      this.onclick = null;
    };

    inputArea.onkeydown = function () {
      if (event.keyCode == 13) return false;
    };
  }

  function clearSearch($resultContent) {
    // clear search result
    var btnClose = document.querySelector("#local-search-close");

    btnClose.onclick = function () {
      inputArea.value = "";
      $resultContent.innerHTML = "";
      inputArea.placeholder = "请输入关键词";
      inputArea.focus();
    };
  }

  var searchFunc = function searchFunc(path, search_id, content_id) {
    "use strict";

    var BTN = "<div id='local-search-close'>清空搜索</div>";
    var $input = document.getElementById(search_id);
    var $resultContent = document.getElementById(content_id);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // resume input
        $input.disabled = false; //   $input.placeholder = "输入关键词以搜索";

        $input.focus();
        var xml = xhr.responseXML;
        var root = xml.documentElement;
        var list = root.getElementsByTagName("entry");
        var datas = [];

        for (var i = list.length - 1; i >= 0; i--) {
          var item = list[i];
          datas.push({
            title: item.getElementsByTagName("title")[0].innerHTML,
            content: item.getElementsByTagName("content")[0].innerHTML,
            url: item.getElementsByTagName("url")[0].innerHTML
          });
        }

        $input.addEventListener("input", function () {
          var str = '<ul class="archive">';
          var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
          $resultContent.innerHTML = "";

          if (this.value.trim().length <= 0) {
            return;
          } // 本地搜索主代码


          datas.forEach(function (data) {
            var isMatch = true;
            var content_index = [];

            if (!data.title || data.title.trim() === "") {
              data.title = "Untitled";
            }

            var orig_data_title = data.title.trim();
            var data_title = orig_data_title.toLowerCase();
            var orig_data_content = data.content.trim().replace(/<[^>]+>/g, "");
            var data_content = orig_data_content.toLowerCase();
            var data_url = data.url;
            var index_title = -1;
            var index_content = -1;
            var first_occur = -1; // only match artiles with not empty contents

            if (data_content !== "") {
              keywords.forEach(function (keyword, i) {
                index_title = data_title.indexOf(keyword);
                index_content = data_content.indexOf(keyword);

                if (index_title < 0 && index_content < 0) {
                  isMatch = false;
                } else {
                  if (index_content < 0) {
                    index_content = 0;
                  }

                  if (i == 0) {
                    first_occur = index_content;
                  } // content_index.push({index_content:index_content, keyword_len:keyword_len});

                }
              });
            } else {
              isMatch = false;
            } // 展示结果


            if (isMatch) {
              str += "<li><a target='_blank' href=" + data_url + " >" + "<span class='archive-title' >" + orig_data_title + "</span>";
              var content = orig_data_content;

              if (first_occur >= 0) {
                // cut out 100 characters
                var start = first_occur - 10;
                var end = first_occur + 30;

                if (start < 0) {
                  start = 0;
                }

                if (start == 0) {
                  end = 40;
                }

                if (end > content.length) {
                  end = content.length;
                } // console.log(content)


                var match_content = content.substr(start, 200); // highlight all keywords

                keywords.forEach(function (keyword) {
                  var regS = new RegExp(keyword, "gi");
                  match_content = match_content.replace(regS, '<em class="search-keyword">' + keyword + "</em>");
                });
                str += '<p class="search-result">' + match_content + "...</p>";
              }

              str += "</a></li>";
            }
          });
          str += "</ul>";

          if (str.indexOf("<li>") === -1) {
            $resultContent.innerHTML = BTN + "<div class='local-search-empty'>没有找到你所要搜索的内容……</div>";
          } else {
            $resultContent.innerHTML = BTN + str;
          }

          clearSearch($resultContent);
        });
      }
    };
  };

  var getSearchFile = function getSearchFile() {
    var path = "/search.xml";
    searchFunc(path, "local-search-input", "local-search-result");
  }; // 全局按钮设置js是否展示搜索框


  var global_button_search_box = document.querySelector("#search_btn");

  if (document.querySelector("#search_btn_pc")) {
    var global_button_search_box_pc = document.querySelector("#search_btn_pc");
    global_button_search_box_pc.addEventListener("click", function () {
      if (document.querySelector(".search_box").style.display === "block") {
        document.querySelector(".search_box").style.display = "none";
      } else {
        document.querySelector(".search_box").style.display = "block"; // document.querySelector('#local-search-input').focus();
      }
    });
  }

  global_button_search_box.addEventListener("click", function () {
    if (document.querySelector(".search_box").style.display === "block") {
      document.querySelector(".search_box").style.display = "none";
    } else {
      document.querySelector(".search_box").style.display = "block"; // document.querySelector('#local-search-input').focus();
    }
  });
  var search_close = document.querySelector(".search_close");
  search_close.addEventListener("click", function () {
    if (document.querySelector(".search_box").style.display === "block") {
      document.querySelector(".search_box").style.display = "none";
    } else {
      document.querySelector(".search_box").style.display = "block";
    }
  });
};

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Share = /*#__PURE__*/function () {
  function Share() {
    _classCallCheck(this, Share);
  }

  _createClass(Share, [{
    key: "init",
    value: function init() {
      share();
    }
  }]);

  return Share;
}();

exports["default"] = Share;

var share = function share() {
  // find closest
  function closest(elem, parent) {
    if (typeof parent == "string") {
      var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

      if (!!matchesSelector) {
        while (elem) {
          if (matchesSelector.bind(elem)(parent)) {
            return elem;
          } else {
            elem = elem.parentElement;
          }
        }
      }

      return false;
    } else {
      while (elem) {
        if (elem == parent) {
          return elem;
        } else {
          elem = elem.parentElement;
        }
      }

      return false;
    }
  } // share button class


  window.needShareButton = function (elem, options) {
    // create element reference
    var root = this;
    root.elem = elem || "need-share-button";
    /* Helpers
     ***********************************************/
    // get title from html

    root.getTitle = function () {
      var content; // check querySelector existance for old browsers

      if (document.querySelector) {
        if (content = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) {
          return content.getAttribute("content");
        } else if (content = document.querySelector("title")) {
          return content.innerText;
        }
      }

      return document.title;
    }; // get image from html


    root.getImage = function () {
      var content; // check querySelector existance for old browsers

      if (document.querySelector) {
        if (content = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) {
          return content.getAttribute("content");
        } else return "";
      } else return "";
    }; // get description from html


    root.getDescription = function () {
      var content; // check querySelector existance for old browsers

      if (document.querySelector) {
        if (content = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) {
          return content.getAttribute("content");
        } else return "";
      } else {
        if (content = document.getElementsByTagName("meta").namedItem("description")) return content.getAttribute("content");else return "";
      }
    }; // share urls for all networks


    root.share = {
      weibo: function weibo(el) {
        var myoptions = getOptions(el);
        var url = "http://v.t.sina.com.cn/share/share.php?title=" + encodeURIComponent(myoptions.title) + "&url=" + encodeURIComponent(myoptions.url) + "&pic=" + encodeURIComponent(myoptions.image);
        root.popup(url);
      },
      wechat: function wechat(el) {
        var myoptions = getOptions(el);
        var imgSrc = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(myoptions.url);
        var dropdownEl = el.querySelector(".need-share-button_dropdown");
        var img = dropdownEl.getElementsByClassName("need-share-wechat-code-image")[0];
        var loader = dropdownEl.getElementsByClassName("need-share-loader")[0];

        if (img) {
          img.remove();
        } else if (loader) {
          loader.remove();
        } else {
          loader = document.createElement("div");
          loader.className = "need-share-loader";
          loader.innerText = "loading...";
          loader.title = "loading qrcode...";
          img = document.createElement("img");
          img.src = imgSrc;
          img.alt = "Create qrcode failed!";
          img.setAttribute("class", "need-share-wechat-code-image");

          img.onload = img.onerror = function () {
            if (loader.isConnected) {
              loader.remove();
              dropdownEl.appendChild(img);
            }
          };

          dropdownEl.appendChild(loader);
        }
      },
      douban: function douban(el) {
        var myoptions = getOptions(el);
        var url = "https://www.douban.com/share/service?name=" + encodeURIComponent(myoptions.title) + "&href=" + encodeURIComponent(myoptions.url) + "&image=" + encodeURIComponent(myoptions.image);
        root.popup(url);
      },
      qqzone: function qqzone(el) {
        var myoptions = getOptions(el);
        var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=" + encodeURIComponent(myoptions.title) + "&url=" + encodeURIComponent(myoptions.url) + "&pics=" + encodeURIComponent(myoptions.image) + "&desc=" + encodeURIComponent(myoptions.description);
        root.popup(url);
      },
      renren: function renren(el) {
        var myoptions = getOptions(el);
        var url = "http://widget.renren.com/dialog/share?title=" + encodeURIComponent(myoptions.title) + "&resourceUrl=" + encodeURIComponent(myoptions.url) + "&pic=" + encodeURIComponent(myoptions.image) + "&description=" + encodeURIComponent(myoptions.description);
        root.popup(url);
      },
      mailto: function mailto(el) {
        var myoptions = getOptions(el);
        var url = "mailto:?subject=" + encodeURIComponent(myoptions.title) + "&body=Thought you might enjoy reading this: " + encodeURIComponent(myoptions.url) + " - " + encodeURIComponent(myoptions.description);
        window.location.href = url;
      },
      twitter: function twitter(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "twitter.com/intent/tweet?text=";
        url += encodeURIComponent(myoptions.title) + "&url=" + encodeURIComponent(myoptions.url);
        root.popup(url);
      },
      pinterest: function pinterest(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "pinterest.com/pin/create/bookmarklet/?is_video=false";
        url += "&media=" + encodeURIComponent(myoptions.image);
        url += "&url=" + encodeURIComponent(myoptions.url);
        url += "&description=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      facebook: function facebook(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.facebook.com/share.php?";
        url += "u=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      googleplus: function googleplus(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "plus.google.com/share?";
        url += "url=" + encodeURIComponent(myoptions.url);
        root.popup(url);
      },
      reddit: function reddit(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.reddit.com/submit?";
        url += "url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      delicious: function delicious(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "del.icio.us/post?";
        url += "url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        url += "&notes=" + encodeURIComponent(myoptions.description);
        root.popup(url);
      },
      // 'tapiture' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'tapiture.com/bookmarklet/image?';
      // 	url += 'img_src=' + encodeURIComponent(myoptions.image);
      // 	url += '&page_url=' + encodeURIComponent(myoptions.url);
      // 	url += '&page_title=' + encodeURIComponent(myoptions.title);
      //
      //   root.popup(url);
      // },
      stumbleupon: function stumbleupon(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.stumbleupon.com/submit?";
        url += "url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      linkedin: function linkedin(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.linkedin.com/shareArticle?mini=true";
        url += "&url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        url += "&source=" + encodeURIComponent(myoptions.source);
        root.popup(url);
      },
      // 'slashdot' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'slashdot.org/bookmark.pl?';
      // 	url += 'url=' + encodeURIComponent(myoptions.url);
      // 	url += '&title=' + encodeURIComponent(myoptions.title);
      //
      //   root.popup(url);
      // },
      // 'technorati' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'technorati.com/faves?';
      // 	url += 'add=' + encodeURIComponent(myoptions.url);
      // 	url += '&title=' + encodeURIComponent(myoptions.title);
      //
      //   root.popup(url);
      // },
      posterous: function posterous(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "posterous.com/share?";
        url += "linkto=" + encodeURIComponent(myoptions.url);
        root.popup(url);
      },
      tumblr: function tumblr(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.tumblr.com/share?v=3";
        url += "&u=" + encodeURIComponent(myoptions.url);
        url += "&t=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      // 'googlebookmarks' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'www.google.com/bookmarks/mark?op=edit';
      // 	url += '&bkmk=' + encodeURIComponent(myoptions.url);
      // 	url += '&title=' + encodeURIComponent(myoptions.title);
      // 	url += '&annotation=' + encodeURIComponent(myoptions.description);
      //
      //   root.popup(url);
      // },
      // 'newsvine' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'www.newsvine.com/_tools/seed&save?';
      // 	url += 'u=' + encodeURIComponent(myoptions.url);
      // 	url += '&h=' + encodeURIComponent(myoptions.title);
      //
      //   root.popup(url);
      // },
      // 'pingfm' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'ping.fm/ref/?';
      // 	url += 'link=' + encodeURIComponent(myoptions.url);
      // 	url += '&title=' + encodeURIComponent(myoptions.title);
      // 	url += '&body=' + encodeURIComponent(myoptions.description);
      //
      //   root.popup(url);
      // },
      evernote: function evernote(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.evernote.com/clip.action?";
        url += "url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      friendfeed: function friendfeed(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.friendfeed.com/share?";
        url += "url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      vkontakte: function vkontakte(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "vkontakte.ru/share.php?";
        url += "url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        url += "&description=" + encodeURIComponent(myoptions.description);
        url += "&image=" + encodeURIComponent(myoptions.image);
        url += "&noparse=true";
        root.popup(url);
      },
      odnoklassniki: function odnoklassniki(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1";
        url += "&st.comments=" + encodeURIComponent(myoptions.description);
        url += "&st._surl=" + encodeURIComponent(myoptions.url);
        root.popup(url);
      } // 'mailru' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'connect.mail.ru/share?';
      //   url += 'url=' + encodeURIComponent(myoptions.url);
      //   url += '&title=' + encodeURIComponent(myoptions.title);
      //   url += '&description=' + encodeURIComponent(myoptions.description);
      //   url += '&imageurl=' + encodeURIComponent(myoptions.image);
      //
      //   root.popup(url);
      // }

    }; // open share link in a popup

    root.popup = function (url) {
      var left, top;
      var popupWidth = 600,
          popupHeight = 500; // caculate browser window width
      // if window width is too narrow, use screen width;

      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

      if (width < 600 && height < 500) {
        left = screen.width / 2 - popupWidth / 2;
        top = screen.height / 2 - popupHeight / 2;
      } else {
        // set left and top position
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left,
            dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top; // calculate top and left position

        left = width / 2 - popupWidth / 2 + dualScreenLeft;
        top = height / 2 - popupHeight / 2 + dualScreenTop;
      }

      var shareWindow = window.open(url, "targetWindow", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=" + popupWidth + ", height=" + popupHeight + ", top=" + top + ", left=" + left); // Puts focus on the newWindow

      if (window.focus) {
        shareWindow.focus();
      }
    };
    /* Set options
     ***********************************************/
    // create default options


    root.options = {
      iconStyle: "default",
      // default or box
      boxForm: "horizontal",
      // horizontal or vertical
      position: "bottomCenter",
      // top / middle / bottom + Left / Center / Right
      protocol: ["http", "https"].indexOf(window.location.href.split(":")[0]) === -1 ? "https://" : "//",
      networks: "Twitter,Facebook,Reddit,Linkedin,Tumblr,Pinterest,Weibo,Wechat,Douban,QQZone,Mailto",
      icons: ["fa fa-twitter", "fa fa-facebook", "fa fa-reddit-alien", "fa fa-linkedin", "fa fa-tumblr", "fa fa-pinterest", "fa fa-weibo", "fa fa-weixin", "9", "fa fa-qq", "fa fa-envelope-o"]
    }; // integrate custom options

    for (var i in options) {
      root.options[i] = options[i];
    } // convert networks string into array


    root.options.networks = root.options.networks.toLowerCase().split(",");

    function getOptions(el) {
      // integrate data attribute options
      var ret = {};

      for (var i in root.options) {
        ret[i] = root.options[i];
      } // these attrs must get dynamically.


      ret.url = root.options.url || window.location.href;
      ret.title = root.options.title || root.getTitle();
      ret.image = root.options.image || root.getImage();
      ret.description = root.options.description || root.getDescription();

      for (var option in el.dataset) {
        // replace only 'share-' prefixed data-attributes
        if (option.match(/share/)) {
          var new_option = option.replace(/share/, "");

          if (!new_option.length) {
            continue;
          }

          new_option = new_option.charAt(0).toLowerCase() + new_option.slice(1);
          var val = el.dataset[option];

          if (new_option === "networks") {
            val = val.toLowerCase().split(",");
          } else if (new_option === "url" && val && val[0] === "/") {
            // fix relative url problem.
            val = location.origin + val;
          }

          ret[new_option] = val;
        }
      }

      return ret;
    }

    function createDropdown(el) {
      // create dropdown
      var dropdownEl = document.createElement("span");
      dropdownEl.className = "need-share-button_dropdown";

      if (el.querySelector(".need-share-button_dropdown")) {
        return;
      }

      var myoptions = getOptions(el); // set dropdown row length

      if (myoptions.iconStyle == "box" && myoptions.boxForm == "horizontal") dropdownEl.className += " need-share-button_dropdown-box-horizontal";else if (myoptions.iconStyle == "box" && myoptions.boxForm == "vertical") dropdownEl.className += " need-share-button_dropdown-box-vertical"; // set dropdown position

      setTimeout(function () {
        switch (myoptions.position) {
          case "topLeft":
            dropdownEl.className += " need-share-button_dropdown-top-left";
            break;

          case "topRight":
            dropdownEl.className += " need-share-button_dropdown-top-right";
            break;

          case "topCenter":
            dropdownEl.className += " need-share-button_dropdown-top-center";
            dropdownEl.style.marginLeft = -dropdownEl.offsetWidth / 2 + "px";
            break;

          case "middleLeft":
            dropdownEl.className += " need-share-button_dropdown-middle-left";
            dropdownEl.style.marginTop = -dropdownEl.offsetHeight / 2 + "px";
            break;

          case "middleRight":
            dropdownEl.className += " need-share-button_dropdown-middle-right";
            dropdownEl.style.marginTop = -dropdownEl.offsetHeight / 2 + "px";
            break;

          case "bottomLeft":
            dropdownEl.className += " need-share-button_dropdown-bottom-left";
            break;

          case "bottomRight":
            dropdownEl.className += " need-share-button_dropdown-bottom-right";
            break;

          case "bottomCenter":
            dropdownEl.className += " need-share-button_dropdown-bottom-center";
            dropdownEl.style.marginLeft = -dropdownEl.offsetWidth / 2 + "px";
            break;

          default:
            dropdownEl.className += " need-share-button_dropdown-bottom-center";
            dropdownEl.style.marginLeft = -dropdownEl.offsetWidth / 2 + "px";
            break;
        }
      }, 1); // fill fropdown with buttons

      var iconClass = myoptions.iconStyle == "default" ? "need-share-button_link need-share-button_" : "need-share-button_link-" + myoptions.iconStyle + " need-share-button_link need-share-button_";
      var flag = 0;

      for (var network in myoptions.networks) {
        var link = document.createElement("span");
        network = myoptions.networks[network];
        link.className = iconClass + network;
        console.log(myoptions.icons.length);
        link.className += " " + myoptions.icons[flag];
        link.dataset.network = network;
        link.title = network;
        dropdownEl.appendChild(link);
        flag++;
      }

      dropdownEl.addEventListener("click", function (event) {
        if (closest(event.target, ".need-share-button_link")) {
          event.preventDefault();
          event.stopPropagation();
          root.share[event.target.dataset.network](el);
          return false;
        }
      });
      el.appendChild(dropdownEl);
    }

    var targetEl = typeof elem === "string" ? document.querySelector(elem) : elem;

    if (targetEl && targetEl.classList.contains("need-share-panel")) {
      createDropdown(targetEl); // targetEl.classList.add('need-share-button-opened');
    } // close on click outside
    else document.addEventListener("click", function (event) {
      var openedEl = document.querySelector(".need-share-button-opened");

      if (!closest(event.target, ".need-share-button-opened")) {
        if (openedEl) {
          openedEl.classList.remove("need-share-button-opened"); // hide wechat code image when close the dropdown.

          if (openedEl.querySelector(".need-share-wechat-code-image")) {
            openedEl.querySelector(".need-share-wechat-code-image").remove();
          }
        } else {
          var el = closest(event.target, root.elem);

          if (el) {
            if (!el.classList.contains("need-share-button-opened")) {
              createDropdown(el);
              setTimeout(function () {
                el.classList.add("need-share-button-opened");
              }, 1);
            }
          }
        }
      }
    });
  };

  new needShareButton(".need-share-button");
};

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Toc = /*#__PURE__*/function () {
  function Toc() {
    _classCallCheck(this, Toc);

    this.tocContainer = document.querySelector(".toc_container");
    this.tocBtn = document.querySelector("#toc_btn");
  }

  _createClass(Toc, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.tocBtn.addEventListener("click", function () {
        if (_this.tocContainer.style.display === "none") {
          _this.tocContainer.style.display = "block";
        } else if (_this.tocContainer.style.display === "block") {
          _this.tocContainer.style.display = "none";
        } else {
          _this.tocContainer.style.display = "block";
        }
      });
    }
  }]);

  return Toc;
}();

exports["default"] = Toc;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9NYWluLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvY29tbW9uL0xheW91dC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvQXJ0aWNsZUxpc3RJbWcuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L0NhdGVnb3J5LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9Db21tZW50LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9Hb1RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvU2VhcmNoLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9TaGFyZS5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvVG9jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNLEk7RUFDSixnQkFBYztJQUFBOztJQUNaO0lBQ0EsS0FBSyxLQUFMLEdBQWEsSUFBSSxpQkFBSixFQUFiLENBRlksQ0FHWjs7SUFDQSxLQUFLLEdBQUwsR0FBVyxJQUFJLGVBQUosRUFBWCxDQUpZLENBS1o7O0lBQ0EsS0FBSyxNQUFMLEdBQWMsSUFBSSxrQkFBSixFQUFkLENBTlksQ0FPWjs7SUFDQSxLQUFLLE9BQUwsR0FBZSxJQUFJLG1CQUFKLEVBQWYsQ0FSWSxDQVNaOztJ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Q0FBQyxZQUFZO2dCQUNyQixFQUFFLENBQUMsU0FBSCxDQUFhLEdBQWIsQ0FBaUIsMEJBQWpCO2NBQ0QsQ0FGUyxFQUVQLENBRk8sQ0FBVjtZQUdEO1VBQ0Y7UUFDRjtNQUNGO0lBQ0YsQ0F2QkQ7RUF3QkgsQ0Exa0JEOztFQTRrQkEsSUFBSSxlQUFKLENBQW9CLG9CQUFwQjtBQUNELENBOW1CRDs7Ozs7Ozs7Ozs7Ozs7OztJQ05xQixHO0VBQ25CLGVBQWM7SUFBQTs7SUFDWixLQUFLLFlBQUwsR0FBb0IsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXBCO0lBQ0EsS0FBSyxNQUFMLEdBQWMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZDtFQUNEOzs7O1dBQ0QsZ0JBQU87TUFBQTs7TUFDTCxLQUFLLE1BQUwsQ0FBWSxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFNO1FBQzFDLElBQUksS0FBSSxDQUFDLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsT0FBeEIsS0FBb0MsTUFBeEMsRUFBZ0Q7VUFDOUMsS0FBSSxDQUFDLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsT0FBeEIsR0FBa0MsT0FBbEM7UUFDRCxDQUZELE1BRU8sSUFBSSxLQUFJLENBQUMsWUFBTCxDQUFrQixLQUFsQixDQUF3QixPQUF4QixLQUFvQyxPQUF4QyxFQUFpRDtVQUN0RCxLQUFJLENBQUMsWUFBTCxDQUFrQixLQUFsQixDQUF3QixPQUF4QixHQUFrQyxNQUFsQztRQUNELENBRk0sTUFFQTtVQUNMLEtBQUksQ0FBQyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLE9BQXhCLEdBQWtDLE9BQWxDO1FBQ0Q7TUFDRixDQVJEO0lBU0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbW1vbi9MYXlvdXQuanNcIjtcbmltcG9ydCBUb2MgZnJvbSBcIi4vcGFydC9Ub2MuanNcIjtcbmltcG9ydCBDb21tZW50IGZyb20gXCIuL3BhcnQvQ29tbWVudC5qc1wiO1xuaW1wb3J0IEdvVG9wIGZyb20gXCIuL3BhcnQvR29Ub3AuanNcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vcGFydC9TZWFyY2guanNcIjtcbmltcG9ydCBTaGFyZSBmcm9tIFwiLi9wYXJ0L1NoYXJlLmpzXCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vcGFydC9DYXRlZ29yeS5qc1wiO1xuaW1wb3J0IEFydGljbGVMaXN0SW1nIGZyb20gXCIuL3BhcnQvQXJ0aWNsZUxpc3RJbWdcIjtcblxuY2xhc3MgTWFpbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIOWIneWni+WMluWbnuWIsOmhtumDqFxuICAgIHRoaXMuZ29Ub3AgPSBuZXcgR29Ub3AoKTtcbiAgICAvLyDliJ3lp4vljJbnm67lvZXohJrmnKzlh73mlbBcbiAgICB0aGlzLnRvYyA9IG5ldyBUb2MoKTtcbiAgICAvLyDmkJzntKLmqKHlnZdcbiAgICB0aGlzLnNlYXJjaCA9IG5ldyBTZWFyY2goKTtcbiAgICAvLyDliJ3lp4vljJbor4TorrrmqKHlnZfkuIvmiYDmnInlh73mlbAgVE9ETzog5Y+v5Lul56Gu6K6k6aG16Z2i5piv5ZCm5pyJ6K+E6K6657uE5Lu2XG4gICAgdGhpcy5jb21tZW50ID0gbmV3IENvbW1lbnQoKTtcbiAgICAvLyDliIbkuqvmjInpkq7nmoTliJ3lp4vljJZcbiAgICB0aGlzLnNoYXJlID0gbmV3IFNoYXJlKCk7XG4gICAgLy8g56uZ54K55paH56ug5Yid5aeL5YyWXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gbmV3IENhdGVnb3J5KCk7XG4gICAgLy8g5biD5bGA5Yid5aeL5YyWXG4gICAgdGhpcy5sYXlvdXQgPSBuZXcgTGF5b3V0KCk7XG4gICAgLy8g5aS05Zu+5LyY5YyW5Luj56CBXG4gICAgdGhpcy5hcnRpY2xlTGlzdEltZyA9IG5ldyBBcnRpY2xlTGlzdEltZygpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5sYXlvdXQuaW5pdCgpO1xuICAgIHRoaXMuZ29Ub3AuaW5pdCgpO1xuICAgIHRoaXMudG9jLmluaXQoKTtcbiAgICB0aGlzLnNlYXJjaC5pbml0KCk7XG4gICAgdGhpcy5jb21tZW50LmluaXQoKTtcbiAgICB0aGlzLnNoYXJlLmluaXQoKTtcbiAgICB0aGlzLmNhdGVnb3JpZXMuaW5pdCgpO1xuICAgIHRoaXMuYXJ0aWNsZUxpc3RJbWcuaW5pdCgpO1xuICB9XG59XG5cbi8vIOWFpeWPo+WHveaVsO+8jOS8muWcqOmhtemdouWKoOi9veWujOavleaJp+ihjFxuJChmdW5jdGlvbiAoKSB7XG4gIC8vIOS4u+WHveaVsFxuICBjb25zdCBtYWluID0gbmV3IE1haW4oKTtcbiAgY29uc29sZS5sb2coXCJseXJpY3Mgc2NyaXB0IG1haW46IFwiLCBtYWluKTtcbiAgbWFpbi5pbml0KCk7XG59KTtcbiIsIi8vIFBD77yaaGVhZGVy5LiK55qE5bem5Y+z5oyJ6ZKu5Yy65Z+fXG5sZXQgYXJyb3dfbGVmdCA9ICQoXCIjYXJyb3dfbGVmdFwiKTtcbmxldCBhcnJvd19yaWdodCA9ICQoXCIjYXJyb3dfcmlnaHRcIik7XG5cbi8vIOW4g+WxgO+8mueJiOW/g+OAgeW3puS4reWPs+aOkueJiFxubGV0IGN0X2xlZnQgPSAkKFwiLmN0X2xlZnRcIik7XG5sZXQgY3RfcmlnaHQgPSAkKFwiLmN0X3JpZ2h0XCIpO1xubGV0IGN0X2NlbnRlciA9ICQoXCIuY3RfY2VudGVyXCIpO1xubGV0IGNvbnRhaW5lciA9ICQoXCIuY29udGFpbmVyXCIpO1xuXG4vLyBQQy9hcHDvvJrliIfmjaJoZWFkZXJcbmxldCBoZWFkZXJfcGMgPSAkKFwiLmhlYWRlcl9wY1wiKTtcbmxldCBoZWFkZXJfYXBwID0gJChcIi5oZWFkZXJfYXBwXCIpO1xuXG4vLyBhcHDvvJpoZWFkZXLkuIrnmoTlt6blj7PmjInpkq7ljLrln59cbmxldCBidG5fYXBwX3NpZGVyID0gJChcIiNidG5fYXBwX3NpZGVyXCIpO1xubGV0IGJ0bl9hcHBfcmlnaHQgPSAkKFwiI2J0bl9hcHBfcmlnaHRcIik7XG5cbi8vIGFwcO+8mueCueWHu2hlYWRlcl9hcHDml7blgJnlvLnlh7rmnaXnmoTmir3lsYlcbmxldCBhcHBfc2lkZV9nbGFzcyA9ICQoXCIjYXBwX3NpZGVfZ2xhc3NcIik7XG5sZXQgYXBwX3NpZGVfY29udGVudCA9ICQoXCIjYXBwX3NpZGVfY29udGVudFwiKTtcblxuLy8gMS7lt6bkuK3phY3nva5cbmxldCBvbmVfY29udGFpbmVyID0gXCI4MCVcIjtcbmxldCBvbmVfY3RfY2VudGVyX3dpZHRoID0gXCI3NSVcIjtcbmxldCBvbmVfY3RfbGVmdF93aWR0aCA9IFwiMjUlXCI7XG4vLyAyLiDkuK3lj7PphY3nva5cbmxldCB0d29fY29udGFpbmVyID0gXCI4MCVcIjtcbmxldCB0d29fY3RfY2VudGVyX3dpZHRoID0gXCI3NSVcIjtcbmxldCB0d29fY3RfcmlnaHRfd2lkdGggPSBcIjI1JVwiO1xuLy8gMy4g5bem5Lit5Y+z6YWN572uXG5sZXQgdGhyZWVfY29udGFpbmVyID0gXCI5NSVcIjtcbmxldCB0aHJlZV9jdF9jZW50ZXJfd2lkdGggPSBcIjYwJVwiO1xubGV0IHRocmVlX2N0X3JpZ2h0X3dpZHRoID0gXCIyMCVcIjtcbmxldCB0aHJlZV9jdF9sZWZ0X3dpZHRoID0gXCIyMCVcIjtcbi8vIDQuIOS4remFjee9rlxubGV0IGZvdXJfY29udGFpbmVyID0gXCI3NSVcIjtcbmxldCBmb3VyX2N0X2NlbnRlcl93aWR0aCA9IFwiMTAwJVwiO1xuLy8g6K6+5aSH5bCP5LqONTYwcHjnmoTkuK3phY3nva5cbmxldCBkZXZpY2Vfc21hbGxfY29udGFpbmVyID0gXCI5OCVcIjtcbmxldCBkZXZpY2Vfc21hbGxfY2VudGVyID0gXCIxMDAlXCI7XG4vLyDorr7lpIflsI/kuo43ODBweOeahOS4remFjee9rlxubGV0IGRldmljZV9jZW50ZXJfY29udGFpbmVyID0gXCI5NiVcIjtcbmxldCBkZXZpY2VfY2VudGVyX2NlbnRlciA9IFwiMTAwJVwiO1xubGV0IHRvcCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgaW5pdCgpIHtcbiAgICBidG5fcGNfc3dpdGNoKCk7XG4gICAgYnRuX2FwcF9zd2l0Y2goKTtcbiAgICBicm93c2VyX3JlbWVtYmVyKCk7XG4gICAgZGV2aWNlX3N3aXRjaCgpOyAvLyDov5nkuKrmlL7liLDmnIDlkI7oh6rosIPnlKgh5Zug5Li65LiN566h5pys5Zyw5a2Y5YKo5piv5LuA5LmI77yM5pyA57uI6L+Y5piv6KaB5qC55o2u6K6+5aSH55uR5ZCs5Li65Li7XG4gIH1cbn1cbi8qIFBD77ya5Y2VL+WPjC/kuInmoI/luIPlsYDliIfmjaLmjInpkq7ngrnlh7vkuovku7YgKi9cbmNvbnN0IGJ0bl9wY19zd2l0Y2ggPSAoKSA9PiB7XG4gIGFycm93X2xlZnQuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAvLyDovazmjaLliIfmjaLkuYvlkI7nmoTnrq3lpLTmjInpkq5cbiAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgLy/lt6bkuK3phY3nva5cbiAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8v5bem5Lit5Y+z6YWN572uXG4gICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAvL+S4remFjee9rlxuICAgICAgICBjZW50ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8v5Lit5Y+z6YWN572uXG4gICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgYXJyb3dfcmlnaHQuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgLy/kuK3lj7PphY3nva5cbiAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL+W3puS4reWPs+mFjee9rlxuICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAvLyDkuK3phY3nva5cbiAgICAgICAgY2VudGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlt6bkuK3phY3nva5cbiAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcbi8qIOenu+WKqOerr+W3puWPs+S4iuinkueahOaMiemSriAqL1xuY29uc3QgYnRuX2FwcF9zd2l0Y2ggPSAoKSA9PiB7XG4gIC8vIOeCueWHu+W3puaMiemSrlxuICBidG5fYXBwX3NpZGVyLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBhcHBfc2lkZV9nbGFzcy5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gICAgYXBwX3NpZGVfY29udGVudC5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gICAgLy8g6Zi75q2i5oq95bGJ5bGC5LiL55qE5ruR5Yqo56m/6YCPXG4gICAgdG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgY29udGFpbmVyLmNzcyh7IHBvc2l0aW9uOiBcImZpeGVkXCIsIHRvcDogLXRvcCArIFwicHhcIiB9KTtcbiAgfSk7XG4gIC8vIOeCueWHu+avm+eOu+eSg+eJh1xuICBhcHBfc2lkZV9nbGFzcy5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgYXBwX3NpZGVfZ2xhc3MuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgYXBwX3NpZGVfY29udGVudC5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAvLyDpmLvmraLmir3lsYnlsYLkuIvnmoTmu5Hliqjnqb/pgI9cbiAgICBjb250YWluZXIuY3NzKHsgcG9zaXRpb246IFwiXCIsIHRvcDogXCJcIiB9KTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdG9wKTtcbiAgfSk7XG4gIC8vIOeCueWHu+WPs+aMiemSriDlvLnlh7rmkJzntKLmoYZcbiAgYnRuX2FwcF9yaWdodC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgLy8gYWxlcnQoXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgIC8vICAgY29uc29sZS5sb2coXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICB9KTtcbn07XG4vKiDmtY/op4jlmajorrDkvY/luIPlsYAgKi9cbmNvbnN0IGJyb3dzZXJfcmVtZW1iZXIgPSAoKSA9PiB7XG4gIGxldCBiX2xlZnQgPSBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIik7XG4gIGxldCBiX3JpZ2h0ID0gY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKTtcbiAgbGV0IGJfbGF5b3V0O1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICAvLyDmtY/op4jlmajmnInnvJPlrZjnmoTmg4XlhrVcbiAgICBsZXQgbGF5b3V0X2NoYW5nZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKTtcbiAgICBjb25zb2xlLmxvZyhcIkxheW91dDogaGF2ZSBjYWNoZVwiKTtcbiAgICBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJMUlwiKSB7XG4gICAgICAvLyDlt6bkuK3lj7PluIPlsYBcbiAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkxcIikge1xuICAgICAgLy8g5bem5Lit5biD5bGAXG4gICAgICBsZWZ0X2NlbnRlcigpO1xuICAgIH0gZWxzZSBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJSXCIpIHtcbiAgICAgIC8vIOS4reWPs+W4g+WxgFxuICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkNcIikge1xuICAgICAgLy8g5Lit5biD5bGAXG4gICAgICBjZW50ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5YW25LuW6I6r5ZCN5YW25aaZ55qE5oOF5Ya1XG4gICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyDmtY/op4jlmajmsqHmnInnvJPlrZjnmoTmg4XlhrVcbiAgICBjb25zb2xlLmxvZyhcIkxheW91dDogbm8gY2FjaGVcIik7XG4gICAgaWYgKGJfbGVmdCA9PT0gXCJibG9ja1wiICYmIGJfcmlnaHQgPT09IFwibm9uZVwiKSB7XG4gICAgICAvLyDlt6bkuK3luIPlsYBcbiAgICAgIGJfbGF5b3V0ID0gXCJMXCI7XG4gICAgfSBlbHNlIGlmIChiX2xlZnQgPT09IFwibm9uZVwiICYmIGJfcmlnaHQgPT09IFwiYmxvY2tcIikge1xuICAgICAgLy8g5Lit5Y+z5biD5bGAXG4gICAgICBiX2xheW91dCA9IFwiUlwiO1xuICAgIH0gZWxzZSBpZiAoYl9sZWZ0ID09PSBcImJsb2NrXCIgJiYgYl9yaWdodCA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAvL+W3puS4reWPs+W4g+WxgFxuICAgICAgYl9sYXlvdXQgPSBcIkxSXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJfbGF5b3V0ID0gXCJMUlwiO1xuICAgICAgLy8g5bem5Lit5Y+z5biD5bGAXG4gICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgIH1cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgYl9sYXlvdXQpO1xuICB9XG59O1xuLyog5aqS5L2T5p+l6K+i5biD5bGAICovXG5jb25zdCBkZXZpY2Vfc3dpdGNoID0gKCkgPT4ge1xuICAvLyDliJvlu7rmn6Xor6LliJfooahcbiAgbGV0IGRldmljZV93aWR0aCA9IFtcbiAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDU2MHB4KVwiKSxcbiAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDk4MHB4KVwiKSxcbiAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEyNjFweClcIiksXG4gIF07XG5cbiAgLy8g5a6a5LmJ5Zue6LCD5Ye95pWwXG4gIGZ1bmN0aW9uIG1lZGlhTWF0Y2hzKCkge1xuICAgIGlmIChkZXZpY2Vfd2lkdGhbMF0ubWF0Y2hlcykge1xuICAgICAgZGV2aWNlX3NtYWxsKCk7XG4gICAgfSBlbHNlIGlmIChkZXZpY2Vfd2lkdGhbMV0ubWF0Y2hlcykge1xuICAgICAgZGV2aWNlX2NlbnRlcigpO1xuICAgIH0gZWxzZSBpZiAoZGV2aWNlX3dpZHRoWzJdLm1hdGNoZXMpIHtcbiAgICAgIGRldmljZV9sYXJnZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0OiA+IHNldHRpbmcgc2l6aW5nXCIpO1xuICAgIH1cbiAgfVxuICAvLyDlhYjov5DooYzkuIDmrKHlm57osIPlh73mlbBcbiAgbWVkaWFNYXRjaHMoKTtcbiAgLy8g5Li65p+l6K+i5YiX6KGo5rOo5YaM55uR5ZCs5Zmo77yM5ZCM5pe25bCG5Zue6LCD5Ye95pWw5Lyg57uZ55uR5ZCs5ZmoXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGV2aWNlX3dpZHRoLmxlbmd0aDsgaSsrKSB7XG4gICAgZGV2aWNlX3dpZHRoW2ldLmFkZExpc3RlbmVyKG1lZGlhTWF0Y2hzKTtcbiAgfVxufTtcblxuLy8g5Yik5patcGPmrrXlt6blj7PkuIrop5LnmoTnrq3lpLTor6XmmL7npLrlk6rkuKpcbmNvbnN0IGxlZnRfcmlnaHRfYXJyb3cgPSAoKSA9PiB7XG4gIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICB9IGVsc2Uge1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxuICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxufTtcbmNvbnN0IGxlZnRfY2VudGVyX3JpZ2h0ID0gKCkgPT4ge1xuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IHRocmVlX2NvbnRhaW5lciB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKHtcbiAgICB3aWR0aDogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIH0pO1xuICBjdF9yaWdodC5jc3Moe1xuICAgIHdpZHRoOiB0aHJlZV9jdF9yaWdodF93aWR0aCxcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIH0pO1xuICBsZWZ0X3JpZ2h0X2Fycm93KCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsYXlvdXRcIik7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFJcIik7XG4gICAgY29uc29sZS5sb2coXCJMYXlvdXQ6IFwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFJcIik7XG4gIH1cbn07XG5jb25zdCBsZWZ0X2NlbnRlciA9ICgpID0+IHtcbiAgY29udGFpbmVyLmNzcyh7IHdpZHRoOiBvbmVfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IG9uZV9jdF9jZW50ZXJfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKHsgd2lkdGg6IG9uZV9jdF9sZWZ0X3dpZHRoIH0pO1xuICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGxlZnRfcmlnaHRfYXJyb3coKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShcImxheW91dFwiKSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxheW91dFwiKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0OiBcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gIH1cbn07XG5jb25zdCBjZW50ZXJfcmlnaHQgPSAoKSA9PiB7XG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogdHdvX2NvbnRhaW5lciB9KTtcbiAgY3RfcmlnaHQuY3NzKHsgd2lkdGg6IHR3b19jdF9yaWdodF93aWR0aCB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiB0d29fY3RfY2VudGVyX3dpZHRoIH0pO1xuICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gIGxlZnRfcmlnaHRfYXJyb3coKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShcImxheW91dFwiKSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxheW91dFwiKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJSXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0OiBcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIlJcIik7XG4gIH1cbn07XG5jb25zdCBjZW50ZXIgPSAoKSA9PiB7XG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogZm91cl9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogZm91cl9jdF9jZW50ZXJfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBsZWZ0X3JpZ2h0X2Fycm93KCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsYXlvdXRcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJDXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0OiBcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkNcIik7XG4gIH1cbn07XG5jb25zdCBkZXZpY2Vfc21hbGwgPSAoKSA9PiB7XG4gIC8vIOacgOWwj+WwuuWvuO+8muacgOWkpzU2MHB4XG4gIGNvbnNvbGUubG9nKFwiTGF5b3V0OiA8IDU2MHB4XCIpO1xuXG4gIGhlYWRlcl9wYy5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgaGVhZGVyX2FwcC5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gIC8vIOiuvue9ruW4g+WxgFxuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IGRldmljZV9zbWFsbF9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogZGV2aWNlX3NtYWxsX2NlbnRlciB9KTtcbiAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG59O1xuY29uc3QgZGV2aWNlX2NlbnRlciA9ICgpID0+IHtcbiAgLy8g5Lit562J5bC65a+477ya5pyA5aSnOTgwcHhcbiAgY29uc29sZS5sb2coXCJMYXlvdXQ6IDwgOTgwcHhcIik7XG5cbiAgaGVhZGVyX3BjLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICBoZWFkZXJfYXBwLmNzcyh7IGRpc3BsYXk6IFwiYmxvY2tcIiB9KTtcbiAgLy8g6K6+572u5biD5bGAXG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogZGV2aWNlX2NlbnRlcl9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogZGV2aWNlX2NlbnRlcl9jZW50ZXIgfSk7XG4gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xufTtcbmNvbnN0IGRldmljZV9sYXJnZXN0ID0gKCkgPT4ge1xuICAvLyDmnIDlpKflsLrlr7jvvJrmnIDlpKcxMjYxcHhcbiAgY29uc29sZS5sb2coXCJMYXlvdXQ6IDwgMTI2MXB4XCIpO1xuXG4gIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICB9IGVsc2Uge1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxuICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxuICBoZWFkZXJfcGMuY3NzKHsgZGlzcGxheTogXCJibG9ja1wiIH0pO1xuICBoZWFkZXJfYXBwLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuXG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogdGhyZWVfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IHRocmVlX2N0X2NlbnRlcl93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3Moe1xuICAgIHdpZHRoOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSk7XG4gIGN0X3JpZ2h0LmNzcyh7XG4gICAgd2lkdGg6IHRocmVlX2N0X3JpZ2h0X3dpZHRoLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aWNsZUxpc3RJbWcge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGluaXQoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgYXJ0aWNsZV9pbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFydGNsZV9saXN0X2l0ZW1faW1nXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnRpY2xlX2ltZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgd2lkID0gYXJ0aWNsZV9pbWdbaV0uZmlyc3RFbGVtZW50Q2hpbGQud2lkdGggKyA1O1xuICAgICAgICBsZXQgaGVpID0gYXJ0aWNsZV9pbWdbaV0uZmlyc3RFbGVtZW50Q2hpbGQuaGVpZ2h0ICsgNztcbiAgICAgICAgYXJ0aWNsZV9pbWdbaV0uc3R5bGUubWF4V2lkdGggPSB3aWQgKyBcInB4XCI7XG4gICAgICAgIGFydGljbGVfaW1nW2ldLnN0eWxlLm1heEhlaWdodCA9IGhlaSArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGluaXQoKSB7XG4gICAgY2F0ZWdvcmllc193aWRnZXQoKTtcbiAgICByZWFkbW9yZV9ibG9nX2Vzc2F5KCk7XG4gIH1cbn1cbi8vIOWIneWni+WMllxuY29uc3QgY2F0ZWdvcmllc193aWRnZXQgPSAoKSA9PiB7XG4gIGxldCBhcnJfbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5LWxpc3QtaXRlbVwiKTtcblxuICBhcnJfbGkuZm9yRWFjaCgobGkpID0+IHtcbiAgICAvLyDnvo7ljJbor6XliIbnsbvmgLvmlbBcbiAgICBsZXQgb2JqX3dvcmQgPSBsaS5xdWVyeVNlbGVjdG9yKFwiYVwiKS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgb2JqX3dvcmQuaW5uZXJIVE1MID0gXCIgW1wiICsgb2JqX3dvcmQuaW5uZXJIVE1MICsgXCJdXCI7XG4gICAgLy8g6K+l5YiG57G75LiL5aaC5p6c5pyJ5a2Q5YiG57G7XG4gICAgaWYgKGxpLnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnktbGlzdC1jaGlsZFwiKSkge1xuICAgICAgLy8g6buY6K6k5omA5pyJ5a2Q5YiG57G75YWo6YOo5pS257ypXG4gICAgICBsaS5xdWVyeVNlbGVjdG9yKFwidWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgLy8g5bGV5byA5oyJ6ZKuXG4gICAgICBsZXQgbm9kZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBub2RlXzEuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgICBub2RlXzEuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICBub2RlXzEuaW5uZXJIVE1MID1cbiAgICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtcGx1cy1zcXVhcmUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gJztcbiAgICAgIGxpLmluc2VydEJlZm9yZShub2RlXzEsIGxpLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpKTtcblxuICAgICAgLy8g5pS257yp5oyJ6ZKuXG4gICAgICBsZXQgbm9kZV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBub2RlXzIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgbm9kZV8yLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgbm9kZV8yLmlubmVySFRNTCA9XG4gICAgICAgICc8aSBjbGFzcz1cImZhIGZhLW1pbnVzLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnO1xuICAgICAgbGkuaW5zZXJ0QmVmb3JlKG5vZGVfMiwgbGkucXVlcnlTZWxlY3RvcihcImFcIikpO1xuXG4gICAgICAvLyDlsZXlvIDmjInpkq7ms6jlhozngrnlh7vkuovku7ZcbiAgICAgIG5vZGVfMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBub2RlXzEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBub2RlXzIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIOaUtue8qeaMiemSruazqOWGjOeCueWHu+S6i+S7tlxuICAgICAgbm9kZV8yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5vZGVfMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICAgICAgbGkucXVlcnlTZWxlY3RvcihcInVsXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDor6XliIbnsbvkuIvmsqHmnInlrZDliIbnsbtcbiAgICAgIGxldCBub2RlXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTsgLy8g5pS+5LiA5Liq5Y2g5L2N56ymXG4gICAgICBub2RlXzEuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgICBub2RlXzEuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjE1cHhcIjtcbiAgICAgIG5vZGVfMS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgbGkuaW5zZXJ0QmVmb3JlKG5vZGVfMSwgbGkucXVlcnlTZWxlY3RvcihcImFcIikpO1xuICAgIH1cbiAgfSk7XG59O1xuLy8g5p+l55yL5pu05aSa6aG16Z2i77yM5LyY5YyW5Y2a5a6iL+maj+eslOaYvuekulxuY29uc3QgcmVhZG1vcmVfYmxvZ19lc3NheSA9ICgpID0+IHtcbiAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hcmNoaXZlcy9cIikge1xuICAgIC8vIGNvbnNvbGUubG9nKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgLy8g5Y675o6J56ys5LiA5Liq77yf5a2X56ymXG4gICAgbGV0IHBhcmFtcyA9IGxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSk7XG4gICAgLy8g5qC55o2uPeWPt+WIkuWIhuWPguaVsFxuICAgIGxldCBhcnIgPSBwYXJhbXMuc3BsaXQoXCI9XCIpO1xuICAgIC8vIOiOt+WPlnBhZ2VfdHlwZeWPguaVsFxuICAgIGxldCBwYWdlX3R5cGUgPSBhcnJbMV07XG4gICAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcmNoaXZlX2FydGljbGVfbGlzdFwiKTtcbiAgICBmb3IgKGxldCB1ID0gMDsgdSA8IHVsLmxlbmd0aDsgdSsrKSB7XG4gICAgICAvLyDlr7nmr4/kuIDkuKpsaei/m+ihjOWIpOaWre+8jOWmguaenOS4jeaYr+WPguaVsOeahOWAvO+8jOWwsei/m+ihjOmakOiXj1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bFt1XS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaW5kZXggPSB1bFt1XS5jaGlsZHJlbltpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuICAgICAgICBpZiAoaW5kZXggPT09IFwiZHNhbFwiKSB7XG4gICAgICAgICAgaW5kZXggPSBcImJsb2dcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggIT09IHBhZ2VfdHlwZSkge1xuICAgICAgICAgIHVsW3VdLmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0d2lrb29cbiAgICAgIC5pbml0KHtcbiAgICAgICAgZW52SWQ6IFwiaHR0cHM6Ly90d2lrb28ud3p0bGluazEwMTMuY29tL1wiLFxuICAgICAgICBlbDogXCIjdGNvbW1lbnRcIixcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIC8vIHBhdGg6ICd3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUnLCAvLyDnlKjkuo7ljLrliIbkuI3lkIzmlofnq6DnmoToh6rlrprkuYkganMg6Lev5b6E77yM5aaC5p6c5oKo55qE5paH56ug6Lev5b6E5LiN5pivIGxvY2F0aW9uLnBhdGhuYW1l77yM6ZyA5Lyg5q2k5Y+C5pWwXG5cbiAgICAgICAgLy8g6K+E6K665Yqg6L295oiQ5Yqf5ZCO55qE5Zue6LCD5Ye95pWw44CCXG4gICAgICAgIC8vIOWPkeihqOivhOiuuuWQjuiHquWKqOWIt+aWsOivhOiuuuaXtuOAgeWKoOi9veS4i+S4gOmhteivhOiuuuaXtu+8jOS5n+S8muinpuWPkeOAglxuICAgICAgICAvLyDor4TorrrliqDovb3lpLHotKXml7bkuI3kvJrop6blj5HjgIJcbiAgICAgICAgb25Db21tZW50TG9hZGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJUd2lrb286IGFsbCBjb21tZW50cyBsb2FkZWRcIik7XG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUd2lrb28g5oiQ5Yqf5oyC6L295ZCO55qE5Zue6LCD5Ye95pWw44CC546v5aKDIElEIOmUmeivr+OAgee9kee7nOW8guW4uOOAgeaMgui9veWksei0peetieaDheWGteaXtuS4jeS8muinpuWPkeOAglxuICAgICAgICBjb25zb2xlLmxvZyhcIlR3aWtvbzogbW91bnQgZmluaXNoZWRcIik7XG4gICAgICB9KTtcbiAgfVxuICBpbml0KCkge1xuICAgIGdvQ29tbWVudEFyZWEoKTtcbiAgICBnaXNjdXNNZXNzYWdlKCk7XG4gICAgdHdpa29vQ291bnQoKTtcbiAgICB0d2lrb29OZXdDb21tZW50cygpO1xuICAgIHN3aXRjaENvbW1lbnQoKTtcbiAgfVxufVxuLy8g5Y+z5LiL6KeS5oyJ6ZKu5LqL5Lu2IOaYr+WQpuWJjeW+gOivhOiuuuWMulxuY29uc3QgZ29Db21tZW50QXJlYSA9ICgpID0+IHtcbiAgLy8gVE9ETzog55uR5ZCsdXJs5piv5ZCm5pyJ5Y+C5pWwIOaXtuWIu+ebkeWQrOWIsOivhOiuuuWMulxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21tZW50c1wiKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ29fY29tbWVudHNcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxufTtcbmNvbnN0IGdpc2N1c01lc3NhZ2UgPSAoKSA9PiB7XG4gIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQub3JpZ2luICE9PSBcImh0dHBzOi8vZ2lzY3VzLnd6dGxpbmsxMDEzLmNvbVwiKSByZXR1cm47XG4gICAgaWYgKCEodHlwZW9mIGV2ZW50LmRhdGEgPT09IFwib2JqZWN0XCIgJiYgZXZlbnQuZGF0YS5naXNjdXMpKSByZXR1cm47XG5cbiAgICBjb25zdCBnaXNjdXNEYXRhID0gZXZlbnQuZGF0YS5naXNjdXM7XG4gICAgY29uc29sZS5sb2coXCJHaXNjdXM6IGlmcmFtZSBjb21tZW50IGRhdGFcIiwgZ2lzY3VzRGF0YSk7XG4gICAgLy8gRG8gd2hhdGV2ZXIgeW91IHdhbnQgd2l0aCBpdCwgZS5nLiBgY29uc29sZS5sb2coZ2lzY3VzRGF0YSlgLlxuICAgIC8vIFlvdSdsbCBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGBnaXNjdXNEYXRhYCBjb250YWlucyB0aGUgbWVzc2FnZSB5b3UncmVcbiAgICAvLyBleHBlY3RpbmcsIGUuZy4gYnkgdXNpbmcgYGlmICgnZGlzY3Vzc2lvbicgaW4gZ2lzY3VzRGF0YSlgLlxuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGhhbmRsZU1lc3NhZ2UpO1xuICBjb25zb2xlLmxvZyhcIkdpc2N1czogbWVzc2FnZSBsb2dpY1wiKTtcbiAgLy8gU29tZSB0aW1lIGxhdGVyLi4uXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBoYW5kbGVNZXNzYWdlKTtcbn07XG4vLyDmlofnq6Dor4TorrrmlbBcbmNvbnN0IHR3aWtvb0NvdW50ID0gKCkgPT4ge1xuICAvLyDliKTmlq3pobXpnaLmmK/lkKbmnInor4TorrrljLppZOWSjOW8leeUqOivhOiuuuaVsOeahGlkXG4gIGlmIChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnRzXCIpICYmXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0d2lrb29fY29tbWVudHNcIilcbiAgKSB7XG4gICAgdmFyIHR3aWtvb19jb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHdpa29vX2NvbW1lbnRzXCIpO1xuICAgIC8vIEJPTeiOt+WPlumhtemdonVybOeahHBhdGhuYW1l6Lev5b6EXG4gICAgdmFyIHR3aWtvb19jb21tZW50c191cmwgPSBbbG9jYXRpb24ucGF0aG5hbWVdO1xuXG4gICAgdHdpa29vXG4gICAgICAuZ2V0Q29tbWVudHNDb3VudCh7XG4gICAgICAgIGVudklkOiBcImh0dHBzOi8vdHdpa29vLnd6dGxpbmsxMDEzLmNvbS9cIiwgLy8g546v5aKDIElEXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICB1cmxzOiB0d2lrb29fY29tbWVudHNfdXJsLCAvLyDkuI3ljIXlkKvljY/orq7jgIHln5/lkI3jgIHlj4LmlbDnmoTmlofnq6Dot6/lvoTliJfooajvvIzlv4XkvKDlj4LmlbBcbiAgICAgICAgaW5jbHVkZVJlcGx5OiBmYWxzZSwgLy8g6K+E6K665pWw5piv5ZCm5YyF5ous5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIC8vIOWwhuivhOiuuuaVsOWGmeWFpeWFtuS4rVxuICAgICAgICB0d2lrb29fY29tbWVudHMuaW5uZXJUZXh0ID0gcmVzWzBdLmNvdW50O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAvLyDov5Tlm57npLrkvos6IFtcbiAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEwL3Bvc3QtMS5odG1sJywgY291bnQ6IDEwIH0sXG4gICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMS9wb3N0LTIuaHRtbCcsIGNvdW50OiAwIH0sXG4gICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMi9wb3N0LTMuaHRtbCcsIGNvdW50OiAyMCB9XG4gICAgICAgIC8vIF1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAvLyDlj5HnlJ/plJnor69cbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH1cbn07XG4vLyDmnIDmlrDor4TorrpcbmNvbnN0IHR3aWtvb05ld0NvbW1lbnRzID0gKCkgPT4ge1xuICB2YXIgaG90X2FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3RfYXJ0aWNsZXNfaXRlbVwiKTtcbiAgdmFyIHBhZ2Vfc2l6ZSA9IDg7XG4gIHR3aWtvb1xuICAgIC5nZXRSZWNlbnRDb21tZW50cyh7XG4gICAgICBlbnZJZDogXCJodHRwczovL3R3aWtvby53enRsaW5rMTAxMy5jb20vXCIsIC8vIOeOr+WigyBJRFxuICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICBwYWdlU2l6ZTogcGFnZV9zaXplLCAvLyDojrflj5blpJrlsJHmnaHvvIzpu5jorqTvvJoxMO+8jOacgOWkp++8mjEwMFxuICAgICAgaW5jbHVkZVJlcGx5OiBmYWxzZSwgLy8g5piv5ZCm5YyF5ous5pyA5paw5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdfY29tbWVudHNfbG9kaW5nXCIpO1xuICAgICAgdmFyIG5ld19jb21tZW50c19sb2RpbmdfcGFyZW50ID0gbmV3X2NvbW1lbnRzX2xvZGluZy5wYXJlbnRFbGVtZW50O1xuICAgICAgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQucmVtb3ZlQ2hpbGQobmV3X2NvbW1lbnRzX2xvZGluZyk7XG4gICAgICAvLyDmj5LlhaXor4TorrpcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZV9zaXplOyBpKyspIHtcbiAgICAgICAgaWYgKHJlc1tpXS5jb21tZW50KSB7XG4gICAgICAgICAgdmFyIG5ld19jb21tZW50c19jb250ZW50ID0gcmVzW2ldLmNvbW1lbnQ7XG4gICAgICAgICAgdmFyIG5ld19jb21tZW50c19uaWNrID0gcmVzW2ldLm5pY2s7XG4gICAgICAgICAgdmFyIG5ld19jb21tZW50c191cmwgPSByZXNbaV0udXJsO1xuICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfYXZhdGFyID0gcmVzW2ldLmF2YXRhcjtcbiAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX3RpbWUgPSByZXNbaV0ucmVsYXRpdmVUaW1lO1xuICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfaWQgPSBcIiNcIiArIHJlc1tpXS5pZDtcblxuICAgICAgICAgIHZhciBob3RfYXJ0aWNsZXNfY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgaG90X2FydGljbGVzX2NoaWxkLmlubmVySFRNTCA9XG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIml0ZW1fdXBcIj48aW1nIHNyYz1cIicgK1xuICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2F2YXRhciArXG4gICAgICAgICAgICAnXCIgY2xhc3M9XCJhdmF0YXJcIj48ZGl2IGNsYXNzPVwibmlja19uYW1lXCI+PHNwYW4gY2xhc3M9XCJuaWNrXCI+JyArXG4gICAgICAgICAgICBuZXdfY29tbWVudHNfbmljayArXG4gICAgICAgICAgICAnPC9zcGFuPjxzcGFuIGNsYXNzPVwidGltZVwiPicgK1xuICAgICAgICAgICAgbmV3X2NvbW1lbnRzX3RpbWUgK1xuICAgICAgICAgICAgJzwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiaXRlbV9kb3duXCI+PGEgaHJlZj1cIicgK1xuICAgICAgICAgICAgbmV3X2NvbW1lbnRzX3VybCArXG4gICAgICAgICAgICBuZXdfY29tbWVudHNfaWQgK1xuICAgICAgICAgICAgJ1wiPicgK1xuICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2NvbnRlbnQgK1xuICAgICAgICAgICAgXCI8L2E+PC9kaXY+XCI7XG4gICAgICAgICAgaG90X2FydGljbGVzLmFwcGVuZChob3RfYXJ0aWNsZXNfY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0pO1xufTtcbi8vIOWIh+aNouivhOiuuijor4Torrrnu4Tku7blrZjlnKjml7YpXG5jb25zdCBzd2l0Y2hDb21tZW50ID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2hfYnRuXCIpKSB7XG4gICAgdmFyIHN3aXRjaF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaF9idG5cIik7XG4gICAgdmFyIGdpdGh1Yl9jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnaXRodWJfY29tbWVudFwiKTtcbiAgICB2YXIgdHdpa29vX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R3aWtvb19jb21tZW50XCIpO1xuXG4gICAgc3dpdGNoX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgc3dpdGNoX2J0bi5jbGFzc0xpc3QudG9nZ2xlKFwibW92ZVwiKTtcbiAgICAgIGdpdGh1Yl9jb21tZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb250ZW50LWluXCIpO1xuICAgICAgdHdpa29vX2NvbW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbnRlbnQtaW5cIik7XG5cbiAgICAgIGlmIChnaXRodWJfY29tbWVudC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICBnaXRodWJfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB0d2lrb29fY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUd2lrb28g6K+E6K6657O757ufXG4gICAgICAgIGdpdGh1Yl9jb21tZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvVG9wIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nb1RvcEJ0biA9IG51bGw7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29fdG9wXCIpKVxuICAgICAgdGhpcy5nb1RvcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29fdG9wXCIpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmdvVG9wQnRuKSByZXR1cm47XG4gICAgZ29Ub3BMaXN0ZXIodGhpcy5nb1RvcEJ0bik7XG4gICAgY2xpY2tHb1RvcEJ0bih0aGlzLmdvVG9wQnRuKTtcbiAgfVxufVxuLy8g5oyB57ut55uR5ZCs5rua5Yqo54q25oCBXG5jb25zdCBnb1RvcExpc3RlciA9IChkb20pID0+IHtcbiAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIGRvbS5zdHlsZS5kaXNwbGF5ID0gZ2V0U2Nyb2xsKCkudG9wID09PSAwID8gXCJub25lXCIgOiBcImJsb2NrXCI7XG4gIH07XG59O1xuLy8g54K55Ye75Zue5Yiw6aG26YOoXG5jb25zdCBjbGlja0dvVG9wQnRuID0gKGRvbSkgPT4ge1xuICBsZXQgdGltZXIgPSBudWxsO1xuICBkb20ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lcik7XG4gICAgLy/ojrflj5blvZPliY3mr6vnp5LmlbBcbiAgICBsZXQgc3RhcnRUaW1lID0gK25ldyBEYXRlKCk7XG4gICAgLy/ojrflj5blvZPliY3pobXpnaLnmoTmu5rliqjpq5jluqZcbiAgICBsZXQgYiA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgbGV0IGQgPSA1MDA7XG4gICAgbGV0IGMgPSBiO1xuICAgIHRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIGZ1bmMoKSB7XG4gICAgICBsZXQgdCA9IGQgLSBNYXRoLm1heCgwLCBzdGFydFRpbWUgLSArbmV3IERhdGUoKSArIGQpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID1cbiAgICAgICAgKHQgKiAtYykgLyBkICsgYjtcbiAgICAgIHRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmMpO1xuICAgICAgaWYgKHQgPT0gZCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuLy8gc2Nyb29sVG9w5YW85a655oCn5pa55qGIXG5jb25zdCBnZXRTY3JvbGwgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG9wOlxuICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0IHx8XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8XG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fFxuICAgICAgMCxcbiAgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2gge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGluaXQoKSB7XG4gICAgc2VhcmNoKCk7XG4gIH1cbn1cbmNvbnN0IHNlYXJjaCA9ICgpID0+IHtcbiAgdmFyIGlucHV0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWlucHV0XCIpO1xuXG4gIGlmIChpbnB1dEFyZWEpIHtcbiAgICBpbnB1dEFyZWEub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlucHV0QXJlYS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAvLyBpbnB1dEFyZWEucGxhY2Vob2xkZXIgPSBcIuWIneWni+WMluaQnOe0omluZ8K3wrfCt1wiO1xuICAgICAgZ2V0U2VhcmNoRmlsZSgpO1xuICAgICAgdGhpcy5vbmNsaWNrID0gbnVsbDtcbiAgICB9O1xuXG4gICAgaW5wdXRBcmVhLm9ua2V5ZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KSB7XG4gICAgLy8gY2xlYXIgc2VhcmNoIHJlc3VsdFxuICAgIHZhciBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWNsb3NlXCIpO1xuICAgIGJ0bkNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpbnB1dEFyZWEudmFsdWUgPSBcIlwiO1xuICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9IFwi6K+36L6T5YWl5YWz6ZSu6K+NXCI7XG4gICAgICBpbnB1dEFyZWEuZm9jdXMoKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHNlYXJjaEZ1bmMgPSBmdW5jdGlvbiAocGF0aCwgc2VhcmNoX2lkLCBjb250ZW50X2lkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgdmFyIEJUTiA9IFwiPGRpdiBpZD0nbG9jYWwtc2VhcmNoLWNsb3NlJz7muIXnqbrmkJzntKI8L2Rpdj5cIjtcbiAgICB2YXIgJGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VhcmNoX2lkKTtcbiAgICB2YXIgJHJlc3VsdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50X2lkKTtcblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbihcIkdFVFwiLCBwYXRoLCB0cnVlKTtcbiAgICB4aHIuc2VuZCgpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIC8vIHJlc3VtZSBpbnB1dFxuICAgICAgICAkaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gICAkaW5wdXQucGxhY2Vob2xkZXIgPSBcIui+k+WFpeWFs+mUruivjeS7peaQnOe0olwiO1xuICAgICAgICAkaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICB2YXIgeG1sID0geGhyLnJlc3BvbnNlWE1MO1xuICAgICAgICB2YXIgcm9vdCA9IHhtbC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciBsaXN0ID0gcm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImVudHJ5XCIpO1xuICAgICAgICB2YXIgZGF0YXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRpdGxlXCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjb250ZW50XCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgIHVybDogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVybFwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHN0ciA9ICc8dWwgY2xhc3M9XCJhcmNoaXZlXCI+JztcbiAgICAgICAgICB2YXIga2V5d29yZHMgPSB0aGlzLnZhbHVlXG4gICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLnNwbGl0KC9bXFxzXFwtXSsvKTtcbiAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlLnRyaW0oKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOacrOWcsOaQnOe0ouS4u+S7o+eggVxuICAgICAgICAgIGRhdGFzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBpc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBjb250ZW50X2luZGV4ID0gW107XG4gICAgICAgICAgICBpZiAoIWRhdGEudGl0bGUgfHwgZGF0YS50aXRsZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgZGF0YS50aXRsZSA9IFwiVW50aXRsZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfdGl0bGUgPSBkYXRhLnRpdGxlLnRyaW0oKTtcbiAgICAgICAgICAgIHZhciBkYXRhX3RpdGxlID0gb3JpZ19kYXRhX3RpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB2YXIgb3JpZ19kYXRhX2NvbnRlbnQgPSBkYXRhLmNvbnRlbnQudHJpbSgpLnJlcGxhY2UoLzxbXj5dKz4vZywgXCJcIik7XG4gICAgICAgICAgICB2YXIgZGF0YV9jb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHZhciBkYXRhX3VybCA9IGRhdGEudXJsO1xuICAgICAgICAgICAgdmFyIGluZGV4X3RpdGxlID0gLTE7XG4gICAgICAgICAgICB2YXIgaW5kZXhfY29udGVudCA9IC0xO1xuICAgICAgICAgICAgdmFyIGZpcnN0X29jY3VyID0gLTE7XG4gICAgICAgICAgICAvLyBvbmx5IG1hdGNoIGFydGlsZXMgd2l0aCBub3QgZW1wdHkgY29udGVudHNcbiAgICAgICAgICAgIGlmIChkYXRhX2NvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAga2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5d29yZCwgaSkge1xuICAgICAgICAgICAgICAgIGluZGV4X3RpdGxlID0gZGF0YV90aXRsZS5pbmRleE9mKGtleXdvcmQpO1xuICAgICAgICAgICAgICAgIGluZGV4X2NvbnRlbnQgPSBkYXRhX2NvbnRlbnQuaW5kZXhPZihrZXl3b3JkKTtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleF90aXRsZSA8IDAgJiYgaW5kZXhfY29udGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X2NvbnRlbnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4X2NvbnRlbnQgPSAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdF9vY2N1ciA9IGluZGV4X2NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBjb250ZW50X2luZGV4LnB1c2goe2luZGV4X2NvbnRlbnQ6aW5kZXhfY29udGVudCwga2V5d29yZF9sZW46a2V5d29yZF9sZW59KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5bGV56S657uT5p6cXG4gICAgICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgICAgICBzdHIgKz1cbiAgICAgICAgICAgICAgICBcIjxsaT48YSB0YXJnZXQ9J19ibGFuaycgaHJlZj1cIiArXG4gICAgICAgICAgICAgICAgZGF0YV91cmwgK1xuICAgICAgICAgICAgICAgIFwiID5cIiArXG4gICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nYXJjaGl2ZS10aXRsZScgPlwiICtcbiAgICAgICAgICAgICAgICBvcmlnX2RhdGFfdGl0bGUgK1xuICAgICAgICAgICAgICAgIFwiPC9zcGFuPlwiO1xuXG4gICAgICAgICAgICAgIHZhciBjb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQ7XG4gICAgICAgICAgICAgIGlmIChmaXJzdF9vY2N1ciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gY3V0IG91dCAxMDAgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGZpcnN0X29jY3VyIC0gMTA7XG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IGZpcnN0X29jY3VyICsgMzA7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID09IDApIHtcbiAgICAgICAgICAgICAgICAgIGVuZCA9IDQwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlbmQgPiBjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgZW5kID0gY29udGVudC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudClcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hfY29udGVudCA9IGNvbnRlbnQuc3Vic3RyKHN0YXJ0LCAyMDApO1xuXG4gICAgICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IGFsbCBrZXl3b3Jkc1xuICAgICAgICAgICAgICAgIGtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24gKGtleXdvcmQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciByZWdTID0gbmV3IFJlZ0V4cChrZXl3b3JkLCBcImdpXCIpO1xuICAgICAgICAgICAgICAgICAgbWF0Y2hfY29udGVudCA9IG1hdGNoX2NvbnRlbnQucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgcmVnUyxcbiAgICAgICAgICAgICAgICAgICAgJzxlbSBjbGFzcz1cInNlYXJjaC1rZXl3b3JkXCI+JyArIGtleXdvcmQgKyBcIjwvZW0+XCJcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzdHIgKz0gJzxwIGNsYXNzPVwic2VhcmNoLXJlc3VsdFwiPicgKyBtYXRjaF9jb250ZW50ICsgXCIuLi48L3A+XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3RyICs9IFwiPC9hPjwvbGk+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3RyICs9IFwiPC91bD5cIjtcbiAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoXCI8bGk+XCIpID09PSAtMSkge1xuICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgQlROICtcbiAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdsb2NhbC1zZWFyY2gtZW1wdHknPuayoeacieaJvuWIsOS9oOaJgOimgeaQnOe0oueahOWGheWuueKApuKApjwvZGl2PlwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBCVE4gKyBzdHI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2xlYXJTZWFyY2goJHJlc3VsdENvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBnZXRTZWFyY2hGaWxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXRoID0gXCIvc2VhcmNoLnhtbFwiO1xuICAgIHNlYXJjaEZ1bmMocGF0aCwgXCJsb2NhbC1zZWFyY2gtaW5wdXRcIiwgXCJsb2NhbC1zZWFyY2gtcmVzdWx0XCIpO1xuICB9O1xuXG4gIC8vIOWFqOWxgOaMiemSruiuvue9rmpz5piv5ZCm5bGV56S65pCc57Si5qGGXG4gIHZhciBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaF9idG5cIik7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaF9idG5fcGNcIikpIHtcbiAgICB2YXIgZ2xvYmFsX2J1dHRvbl9zZWFyY2hfYm94X3BjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hfYnRuX3BjXCIpO1xuICAgIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveF9wYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWwtc2VhcmNoLWlucHV0JykuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhbC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHNlYXJjaF9jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2Nsb3NlXCIpO1xuICBzZWFyY2hfY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICB9KTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgaW5pdCgpIHtcbiAgICBzaGFyZSgpO1xuICB9XG59XG5jb25zdCBzaGFyZSA9ICgpID0+IHtcbiAgLy8gZmluZCBjbG9zZXN0XG4gIGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbSwgcGFyZW50KSB7XG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFyIG1hdGNoZXNTZWxlY3RvciA9XG4gICAgICAgIGVsZW0ubWF0Y2hlcyB8fFxuICAgICAgICBlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICBlbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgICBpZiAoISFtYXRjaGVzU2VsZWN0b3IpIHtcbiAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICBpZiAobWF0Y2hlc1NlbGVjdG9yLmJpbmQoZWxlbSkocGFyZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgIGlmIChlbGVtID09IHBhcmVudCkge1xuICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBzaGFyZSBidXR0b24gY2xhc3NcbiAgd2luZG93Lm5lZWRTaGFyZUJ1dHRvbiA9IGZ1bmN0aW9uIChlbGVtLCBvcHRpb25zKSB7XG4gICAgLy8gY3JlYXRlIGVsZW1lbnQgcmVmZXJlbmNlXG4gICAgdmFyIHJvb3QgPSB0aGlzO1xuICAgIHJvb3QuZWxlbSA9IGVsZW0gfHwgXCJuZWVkLXNoYXJlLWJ1dHRvblwiO1xuXG4gICAgLyogSGVscGVyc1xuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIC8vIGdldCB0aXRsZSBmcm9tIGh0bWxcbiAgICByb290LmdldFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKGNvbnRlbnQgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJykgfHxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInR3aXR0ZXI6dGl0bGVcIl0nKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKSkpIHtcbiAgICAgICAgICByZXR1cm4gY29udGVudC5pbm5lclRleHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkb2N1bWVudC50aXRsZTtcbiAgICB9O1xuXG4gICAgLy8gZ2V0IGltYWdlIGZyb20gaHRtbFxuICAgIHJvb3QuZ2V0SW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29udGVudDtcbiAgICAgIC8vIGNoZWNrIHF1ZXJ5U2VsZWN0b3IgZXhpc3RhbmNlIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoY29udGVudCA9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjppbWFnZVwiXScpKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIFwiXCI7XG4gICAgICB9IGVsc2UgcmV0dXJuIFwiXCI7XG4gICAgfTtcblxuICAgIC8vIGdldCBkZXNjcmlwdGlvbiBmcm9tIGh0bWxcbiAgICByb290LmdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKGNvbnRlbnQgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJdJykgfHxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIl0nKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChjb250ZW50ID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm1ldGFcIilcbiAgICAgICAgICAgIC5uYW1lZEl0ZW0oXCJkZXNjcmlwdGlvblwiKSlcbiAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIik7XG4gICAgICAgIGVsc2UgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHNoYXJlIHVybHMgZm9yIGFsbCBuZXR3b3Jrc1xuICAgIHJvb3Quc2hhcmUgPSB7XG4gICAgICB3ZWlibzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9XG4gICAgICAgICAgXCJodHRwOi8vdi50LnNpbmEuY29tLmNuL3NoYXJlL3NoYXJlLnBocD90aXRsZT1cIiArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSkgK1xuICAgICAgICAgIFwiJnVybD1cIiArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpICtcbiAgICAgICAgICBcIiZwaWM9XCIgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICB9LFxuICAgICAgd2VjaGF0OiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICB2YXIgaW1nU3JjID1cbiAgICAgICAgICBcImh0dHBzOi8vYXBpLnFyc2VydmVyLmNvbS92MS9jcmVhdGUtcXItY29kZS8/c2l6ZT0xNTB4MTUwJmRhdGE9XCIgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgdmFyIGRyb3Bkb3duRWwgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLm5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duXCIpO1xuICAgICAgICB2YXIgaW1nID0gZHJvcGRvd25FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgIFwibmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZVwiXG4gICAgICAgIClbMF07XG4gICAgICAgIHZhciBsb2FkZXIgPSBkcm9wZG93bkVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuZWVkLXNoYXJlLWxvYWRlclwiKVswXTtcblxuICAgICAgICBpZiAoaW1nKSB7XG4gICAgICAgICAgaW1nLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGxvYWRlcikge1xuICAgICAgICAgIGxvYWRlci5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGxvYWRlci5jbGFzc05hbWUgPSBcIm5lZWQtc2hhcmUtbG9hZGVyXCI7XG4gICAgICAgICAgbG9hZGVyLmlubmVyVGV4dCA9IFwibG9hZGluZy4uLlwiO1xuICAgICAgICAgIGxvYWRlci50aXRsZSA9IFwibG9hZGluZyBxcmNvZGUuLi5cIjtcblxuICAgICAgICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgaW1nLnNyYyA9IGltZ1NyYztcbiAgICAgICAgICBpbWcuYWx0ID0gXCJDcmVhdGUgcXJjb2RlIGZhaWxlZCFcIjtcbiAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlXCIpO1xuICAgICAgICAgIGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChsb2FkZXIuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICBkcm9wZG93bkVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBkcm9wZG93bkVsLmFwcGVuZENoaWxkKGxvYWRlcik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkb3ViYW46IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPVxuICAgICAgICAgIFwiaHR0cHM6Ly93d3cuZG91YmFuLmNvbS9zaGFyZS9zZXJ2aWNlP25hbWU9XCIgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICtcbiAgICAgICAgICBcIiZocmVmPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCkgK1xuICAgICAgICAgIFwiJmltYWdlPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcbiAgICAgIHFxem9uZTogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9XG4gICAgICAgICAgXCJodHRwOi8vc25zLnF6b25lLnFxLmNvbS9jZ2ktYmluL3F6c2hhcmUvY2dpX3F6c2hhcmVfb25la2V5P3RpdGxlPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKSArXG4gICAgICAgICAgXCImdXJsPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCkgK1xuICAgICAgICAgIFwiJnBpY3M9XCIgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpICtcbiAgICAgICAgICBcIiZkZXNjPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcbiAgICAgIHJlbnJlbjogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9XG4gICAgICAgICAgXCJodHRwOi8vd2lkZ2V0LnJlbnJlbi5jb20vZGlhbG9nL3NoYXJlP3RpdGxlPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKSArXG4gICAgICAgICAgXCImcmVzb3VyY2VVcmw9XCIgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKSArXG4gICAgICAgICAgXCImcGljPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKSArXG4gICAgICAgICAgXCImZGVzY3JpcHRpb249XCIgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICB9LFxuXG4gICAgICBtYWlsdG86IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPVxuICAgICAgICAgIFwibWFpbHRvOj9zdWJqZWN0PVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKSArXG4gICAgICAgICAgXCImYm9keT1UaG91Z2h0IHlvdSBtaWdodCBlbmpveSByZWFkaW5nIHRoaXM6IFwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCkgK1xuICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgfSxcbiAgICAgIHR3aXR0ZXI6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyBcInR3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PVwiO1xuICAgICAgICB1cmwgKz1cbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKSArXG4gICAgICAgICAgXCImdXJsPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG5cbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcbiAgICAgIHBpbnRlcmVzdDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9XG4gICAgICAgICAgbXlvcHRpb25zLnByb3RvY29sICtcbiAgICAgICAgICBcInBpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9ib29rbWFya2xldC8/aXNfdmlkZW89ZmFsc2VcIjtcbiAgICAgICAgdXJsICs9IFwiJm1lZGlhPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgIHVybCArPSBcIiZ1cmw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgIHVybCArPSBcIiZkZXNjcmlwdGlvbj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuXG4gICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIH0sXG4gICAgICBmYWNlYm9vazogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArIFwid3d3LmZhY2Vib29rLmNvbS9zaGFyZS5waHA/XCI7XG4gICAgICAgIHVybCArPSBcInU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgIHVybCArPSBcIiZ0aXRsZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuXG4gICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIH0sXG4gICAgICBnb29nbGVwbHVzOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgXCJwbHVzLmdvb2dsZS5jb20vc2hhcmU/XCI7XG4gICAgICAgIHVybCArPSBcInVybD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcblxuICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICB9LFxuICAgICAgcmVkZGl0OiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgXCJ3d3cucmVkZGl0LmNvbS9zdWJtaXQ/XCI7XG4gICAgICAgIHVybCArPSBcInVybD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgdXJsICs9IFwiJnRpdGxlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG5cbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcbiAgICAgIGRlbGljaW91czogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArIFwiZGVsLmljaW8udXMvcG9zdD9cIjtcbiAgICAgICAgdXJsICs9IFwidXJsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICB1cmwgKz0gXCImdGl0bGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgdXJsICs9IFwiJm5vdGVzPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG5cbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcbiAgICAgIC8vICd0YXBpdHVyZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3RhcGl0dXJlLmNvbS9ib29rbWFya2xldC9pbWFnZT8nO1xuICAgICAgLy8gXHR1cmwgKz0gJ2ltZ19zcmM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3RpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgIC8vXG4gICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIC8vIH0sXG4gICAgICBzdHVtYmxldXBvbjogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArIFwid3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/XCI7XG4gICAgICAgIHVybCArPSBcInVybD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgdXJsICs9IFwiJnRpdGxlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG5cbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcbiAgICAgIGxpbmtlZGluOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICB2YXIgdXJsID1cbiAgICAgICAgICBteW9wdGlvbnMucHJvdG9jb2wgKyBcInd3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZVwiO1xuICAgICAgICB1cmwgKz0gXCImdXJsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICB1cmwgKz0gXCImdGl0bGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgdXJsICs9IFwiJnNvdXJjZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuc291cmNlKTtcblxuICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICB9LFxuICAgICAgLy8gJ3NsYXNoZG90JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnc2xhc2hkb3Qub3JnL2Jvb2ttYXJrLnBsPyc7XG4gICAgICAvLyBcdHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgIC8vXG4gICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIC8vIH0sXG4gICAgICAvLyAndGVjaG5vcmF0aScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3RlY2hub3JhdGkuY29tL2ZhdmVzPyc7XG4gICAgICAvLyBcdHVybCArPSAnYWRkPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgIC8vXG4gICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIC8vIH0sXG4gICAgICBwb3N0ZXJvdXM6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyBcInBvc3Rlcm91cy5jb20vc2hhcmU/XCI7XG4gICAgICAgIHVybCArPSBcImxpbmt0bz1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcblxuICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICB9LFxuICAgICAgdHVtYmxyOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgXCJ3d3cudHVtYmxyLmNvbS9zaGFyZT92PTNcIjtcbiAgICAgICAgdXJsICs9IFwiJnU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgIHVybCArPSBcIiZ0PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG5cbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcbiAgICAgIC8vICdnb29nbGVib29rbWFya3MnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZ29vZ2xlLmNvbS9ib29rbWFya3MvbWFyaz9vcD1lZGl0JztcbiAgICAgIC8vIFx0dXJsICs9ICcmYmttaz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAvLyBcdHVybCArPSAnJmFubm90YXRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgLy9cbiAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgLy8gfSxcbiAgICAgIC8vICduZXdzdmluZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5uZXdzdmluZS5jb20vX3Rvb2xzL3NlZWQmc2F2ZT8nO1xuICAgICAgLy8gXHR1cmwgKz0gJ3U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgIC8vIFx0dXJsICs9ICcmaD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAvL1xuICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAvLyB9LFxuICAgICAgLy8gJ3BpbmdmbScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3BpbmcuZm0vcmVmLz8nO1xuICAgICAgLy8gXHR1cmwgKz0gJ2xpbms9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgLy8gXHR1cmwgKz0gJyZib2R5PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgIC8vXG4gICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIC8vIH0sXG4gICAgICBldmVybm90ZTogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArIFwid3d3LmV2ZXJub3RlLmNvbS9jbGlwLmFjdGlvbj9cIjtcbiAgICAgICAgdXJsICs9IFwidXJsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICB1cmwgKz0gXCImdGl0bGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcblxuICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICB9LFxuICAgICAgZnJpZW5kZmVlZDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArIFwid3d3LmZyaWVuZGZlZWQuY29tL3NoYXJlP1wiO1xuICAgICAgICB1cmwgKz0gXCJ1cmw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgIHVybCArPSBcIiZ0aXRsZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuXG4gICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIH0sXG4gICAgICB2a29udGFrdGU6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyBcInZrb250YWt0ZS5ydS9zaGFyZS5waHA/XCI7XG4gICAgICAgIHVybCArPSBcInVybD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgdXJsICs9IFwiJnRpdGxlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIHVybCArPSBcIiZkZXNjcmlwdGlvbj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICB1cmwgKz0gXCImaW1hZ2U9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgdXJsICs9IFwiJm5vcGFyc2U9dHJ1ZVwiO1xuXG4gICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIH0sXG4gICAgICBvZG5va2xhc3NuaWtpOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICB2YXIgdXJsID1cbiAgICAgICAgICBteW9wdGlvbnMucHJvdG9jb2wgKyBcInd3dy5vZG5va2xhc3NuaWtpLnJ1L2RrP3N0LmNtZD1hZGRTaGFyZSZzdC5zPTFcIjtcbiAgICAgICAgdXJsICs9IFwiJnN0LmNvbW1lbnRzPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIHVybCArPSBcIiZzdC5fc3VybD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcblxuICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICB9LFxuICAgICAgLy8gJ21haWxydScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ2Nvbm5lY3QubWFpbC5ydS9zaGFyZT8nO1xuICAgICAgLy8gICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgLy8gICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAvLyAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgIC8vICAgdXJsICs9ICcmaW1hZ2V1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgLy9cbiAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgLy8gfVxuICAgIH07XG5cbiAgICAvLyBvcGVuIHNoYXJlIGxpbmsgaW4gYSBwb3B1cFxuICAgIHJvb3QucG9wdXAgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICB2YXIgbGVmdCwgdG9wO1xuXG4gICAgICB2YXIgcG9wdXBXaWR0aCA9IDYwMCxcbiAgICAgICAgcG9wdXBIZWlnaHQgPSA1MDA7XG5cbiAgICAgIC8vIGNhY3VsYXRlIGJyb3dzZXIgd2luZG93IHdpZHRoXG4gICAgICAvLyBpZiB3aW5kb3cgd2lkdGggaXMgdG9vIG5hcnJvdywgdXNlIHNjcmVlbiB3aWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICAgID8gd2luZG93LmlubmVyV2lkdGhcbiAgICAgICAgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgOiBzY3JlZW4ud2lkdGg7XG4gICAgICB2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgID8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgICA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgICAgOiBzY3JlZW4uaGVpZ2h0O1xuICAgICAgaWYgKHdpZHRoIDwgNjAwICYmIGhlaWdodCA8IDUwMCkge1xuICAgICAgICBsZWZ0ID0gc2NyZWVuLndpZHRoIC8gMiAtIHBvcHVwV2lkdGggLyAyO1xuICAgICAgICB0b3AgPSBzY3JlZW4uaGVpZ2h0IC8gMiAtIHBvcHVwSGVpZ2h0IC8gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNldCBsZWZ0IGFuZCB0b3AgcG9zaXRpb25cbiAgICAgICAgdmFyIGR1YWxTY3JlZW5MZWZ0ID1cbiAgICAgICAgICAgIHdpbmRvdy5zY3JlZW5MZWZ0ICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogc2NyZWVuLmxlZnQsXG4gICAgICAgICAgZHVhbFNjcmVlblRvcCA9XG4gICAgICAgICAgICB3aW5kb3cuc2NyZWVuVG9wICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiBzY3JlZW4udG9wO1xuICAgICAgICAvLyBjYWxjdWxhdGUgdG9wIGFuZCBsZWZ0IHBvc2l0aW9uXG4gICAgICAgIGxlZnQgPSB3aWR0aCAvIDIgLSBwb3B1cFdpZHRoIC8gMiArIGR1YWxTY3JlZW5MZWZ0O1xuICAgICAgICB0b3AgPSBoZWlnaHQgLyAyIC0gcG9wdXBIZWlnaHQgLyAyICsgZHVhbFNjcmVlblRvcDtcbiAgICAgIH1cblxuICAgICAgdmFyIHNoYXJlV2luZG93ID0gd2luZG93Lm9wZW4oXG4gICAgICAgIHVybCxcbiAgICAgICAgXCJ0YXJnZXRXaW5kb3dcIixcbiAgICAgICAgXCJ0b29sYmFyPW5vLGxvY2F0aW9uPW5vLHN0YXR1cz1ubyxtZW51YmFyPW5vLHNjcm9sbGJhcnM9eWVzLHJlc2l6YWJsZT15ZXMsd2lkdGg9XCIgK1xuICAgICAgICAgIHBvcHVwV2lkdGggK1xuICAgICAgICAgIFwiLCBoZWlnaHQ9XCIgK1xuICAgICAgICAgIHBvcHVwSGVpZ2h0ICtcbiAgICAgICAgICBcIiwgdG9wPVwiICtcbiAgICAgICAgICB0b3AgK1xuICAgICAgICAgIFwiLCBsZWZ0PVwiICtcbiAgICAgICAgICBsZWZ0XG4gICAgICApO1xuICAgICAgLy8gUHV0cyBmb2N1cyBvbiB0aGUgbmV3V2luZG93XG4gICAgICBpZiAod2luZG93LmZvY3VzKSB7XG4gICAgICAgIHNoYXJlV2luZG93LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qIFNldCBvcHRpb25zXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgLy8gY3JlYXRlIGRlZmF1bHQgb3B0aW9uc1xuICAgIHJvb3Qub3B0aW9ucyA9IHtcbiAgICAgIGljb25TdHlsZTogXCJkZWZhdWx0XCIsIC8vIGRlZmF1bHQgb3IgYm94XG4gICAgICBib3hGb3JtOiBcImhvcml6b250YWxcIiwgLy8gaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICAgICAgcG9zaXRpb246IFwiYm90dG9tQ2VudGVyXCIsIC8vIHRvcCAvIG1pZGRsZSAvIGJvdHRvbSArIExlZnQgLyBDZW50ZXIgLyBSaWdodFxuICAgICAgcHJvdG9jb2w6XG4gICAgICAgIFtcImh0dHBcIiwgXCJodHRwc1wiXS5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiOlwiKVswXSkgPT09IC0xXG4gICAgICAgICAgPyBcImh0dHBzOi8vXCJcbiAgICAgICAgICA6IFwiLy9cIixcbiAgICAgIG5ldHdvcmtzOlxuICAgICAgICBcIlR3aXR0ZXIsRmFjZWJvb2ssUmVkZGl0LExpbmtlZGluLFR1bWJscixQaW50ZXJlc3QsV2VpYm8sV2VjaGF0LERvdWJhbixRUVpvbmUsTWFpbHRvXCIsXG4gICAgICBpY29uczogW1xuICAgICAgICBcImZhIGZhLXR3aXR0ZXJcIixcbiAgICAgICAgXCJmYSBmYS1mYWNlYm9va1wiLFxuICAgICAgICBcImZhIGZhLXJlZGRpdC1hbGllblwiLFxuICAgICAgICBcImZhIGZhLWxpbmtlZGluXCIsXG4gICAgICAgIFwiZmEgZmEtdHVtYmxyXCIsXG4gICAgICAgIFwiZmEgZmEtcGludGVyZXN0XCIsXG4gICAgICAgIFwiZmEgZmEtd2VpYm9cIixcbiAgICAgICAgXCJmYSBmYS13ZWl4aW5cIixcbiAgICAgICAgXCI5XCIsXG4gICAgICAgIFwiZmEgZmEtcXFcIixcbiAgICAgICAgXCJmYSBmYS1lbnZlbG9wZS1vXCIsXG4gICAgICBdLFxuICAgIH07XG5cbiAgICAvLyBpbnRlZ3JhdGUgY3VzdG9tIG9wdGlvbnNcbiAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgIHJvb3Qub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG4gICAgfVxuICAgIC8vIGNvbnZlcnQgbmV0d29ya3Mgc3RyaW5nIGludG8gYXJyYXlcbiAgICByb290Lm9wdGlvbnMubmV0d29ya3MgPSByb290Lm9wdGlvbnMubmV0d29ya3MudG9Mb3dlckNhc2UoKS5zcGxpdChcIixcIik7XG5cbiAgICBmdW5jdGlvbiBnZXRPcHRpb25zKGVsKSB7XG4gICAgICAvLyBpbnRlZ3JhdGUgZGF0YSBhdHRyaWJ1dGUgb3B0aW9uc1xuICAgICAgdmFyIHJldCA9IHt9O1xuICAgICAgZm9yICh2YXIgaSBpbiByb290Lm9wdGlvbnMpIHtcbiAgICAgICAgcmV0W2ldID0gcm9vdC5vcHRpb25zW2ldO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGVzZSBhdHRycyBtdXN0IGdldCBkeW5hbWljYWxseS5cbiAgICAgIHJldC51cmwgPSByb290Lm9wdGlvbnMudXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgcmV0LnRpdGxlID0gcm9vdC5vcHRpb25zLnRpdGxlIHx8IHJvb3QuZ2V0VGl0bGUoKTtcbiAgICAgIHJldC5pbWFnZSA9IHJvb3Qub3B0aW9ucy5pbWFnZSB8fCByb290LmdldEltYWdlKCk7XG4gICAgICByZXQuZGVzY3JpcHRpb24gPSByb290Lm9wdGlvbnMuZGVzY3JpcHRpb24gfHwgcm9vdC5nZXREZXNjcmlwdGlvbigpO1xuXG4gICAgICBmb3IgKHZhciBvcHRpb24gaW4gZWwuZGF0YXNldCkge1xuICAgICAgICAvLyByZXBsYWNlIG9ubHkgJ3NoYXJlLScgcHJlZml4ZWQgZGF0YS1hdHRyaWJ1dGVzXG4gICAgICAgIGlmIChvcHRpb24ubWF0Y2goL3NoYXJlLykpIHtcbiAgICAgICAgICB2YXIgbmV3X29wdGlvbiA9IG9wdGlvbi5yZXBsYWNlKC9zaGFyZS8sIFwiXCIpO1xuICAgICAgICAgIGlmICghbmV3X29wdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZXdfb3B0aW9uID0gbmV3X29wdGlvbi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5ld19vcHRpb24uc2xpY2UoMSk7XG4gICAgICAgICAgdmFyIHZhbCA9IGVsLmRhdGFzZXRbb3B0aW9uXTtcbiAgICAgICAgICBpZiAobmV3X29wdGlvbiA9PT0gXCJuZXR3b3Jrc1wiKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwudG9Mb3dlckNhc2UoKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgfSBlbHNlIGlmIChuZXdfb3B0aW9uID09PSBcInVybFwiICYmIHZhbCAmJiB2YWxbMF0gPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAvLyBmaXggcmVsYXRpdmUgdXJsIHByb2JsZW0uXG4gICAgICAgICAgICB2YWwgPSBsb2NhdGlvbi5vcmlnaW4gKyB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldFtuZXdfb3B0aW9uXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEcm9wZG93bihlbCkge1xuICAgICAgLy8gY3JlYXRlIGRyb3Bkb3duXG4gICAgICB2YXIgZHJvcGRvd25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgPSBcIm5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duXCI7XG4gICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcihcIi5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93blwiKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG5cbiAgICAgIC8vIHNldCBkcm9wZG93biByb3cgbGVuZ3RoXG4gICAgICBpZiAobXlvcHRpb25zLmljb25TdHlsZSA9PSBcImJveFwiICYmIG15b3B0aW9ucy5ib3hGb3JtID09IFwiaG9yaXpvbnRhbFwiKVxuICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSBcIiBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3gtaG9yaXpvbnRhbFwiO1xuICAgICAgZWxzZSBpZiAobXlvcHRpb25zLmljb25TdHlsZSA9PSBcImJveFwiICYmIG15b3B0aW9ucy5ib3hGb3JtID09IFwidmVydGljYWxcIilcbiAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gXCIgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm94LXZlcnRpY2FsXCI7XG5cbiAgICAgIC8vIHNldCBkcm9wZG93biBwb3NpdGlvblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaCAobXlvcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICAgICAgY2FzZSBcInRvcExlZnRcIjpcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9IFwiIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1sZWZ0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwidG9wUmlnaHRcIjpcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9IFwiIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1yaWdodFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInRvcENlbnRlclwiOlxuICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gXCIgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tdG9wLWNlbnRlclwiO1xuICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLWRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgXCJweFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm1pZGRsZUxlZnRcIjpcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9IFwiIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLW1pZGRsZS1sZWZ0XCI7XG4gICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpblRvcCA9IC1kcm9wZG93bkVsLm9mZnNldEhlaWdodCAvIDIgKyBcInB4XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwibWlkZGxlUmlnaHRcIjpcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9IFwiIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLW1pZGRsZS1yaWdodFwiO1xuICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5Ub3AgPSAtZHJvcGRvd25FbC5vZmZzZXRIZWlnaHQgLyAyICsgXCJweFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImJvdHRvbUxlZnRcIjpcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9IFwiIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1sZWZ0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiYm90dG9tUmlnaHRcIjpcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9IFwiIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1yaWdodFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImJvdHRvbUNlbnRlclwiOlxuICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gXCIgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWNlbnRlclwiO1xuICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLWRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgXCJweFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9IFwiIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1jZW50ZXJcIjtcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC1kcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArIFwicHhcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9LCAxKTtcblxuICAgICAgLy8gZmlsbCBmcm9wZG93biB3aXRoIGJ1dHRvbnNcbiAgICAgIHZhciBpY29uQ2xhc3MgPVxuICAgICAgICBteW9wdGlvbnMuaWNvblN0eWxlID09IFwiZGVmYXVsdFwiXG4gICAgICAgICAgPyBcIm5lZWQtc2hhcmUtYnV0dG9uX2xpbmsgbmVlZC1zaGFyZS1idXR0b25fXCJcbiAgICAgICAgICA6IFwibmVlZC1zaGFyZS1idXR0b25fbGluay1cIiArXG4gICAgICAgICAgICBteW9wdGlvbnMuaWNvblN0eWxlICtcbiAgICAgICAgICAgIFwiIG5lZWQtc2hhcmUtYnV0dG9uX2xpbmsgbmVlZC1zaGFyZS1idXR0b25fXCI7XG4gICAgICBsZXQgZmxhZyA9IDA7XG4gICAgICBmb3IgKHZhciBuZXR3b3JrIGluIG15b3B0aW9ucy5uZXR3b3Jrcykge1xuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBuZXR3b3JrID0gbXlvcHRpb25zLm5ldHdvcmtzW25ldHdvcmtdO1xuICAgICAgICBsaW5rLmNsYXNzTmFtZSA9IGljb25DbGFzcyArIG5ldHdvcms7XG4gICAgICAgIGNvbnNvbGUubG9nKG15b3B0aW9ucy5pY29ucy5sZW5ndGgpO1xuICAgICAgICBsaW5rLmNsYXNzTmFtZSArPSBcIiBcIiArIG15b3B0aW9ucy5pY29uc1tmbGFnXTtcbiAgICAgICAgbGluay5kYXRhc2V0Lm5ldHdvcmsgPSBuZXR3b3JrO1xuICAgICAgICBsaW5rLnRpdGxlID0gbmV0d29yaztcbiAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgZmxhZysrO1xuICAgICAgfVxuXG4gICAgICBkcm9wZG93bkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCBcIi5uZWVkLXNoYXJlLWJ1dHRvbl9saW5rXCIpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgIHJvb3Quc2hhcmVbZXZlbnQudGFyZ2V0LmRhdGFzZXQubmV0d29ya10oZWwpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGVsLmFwcGVuZENoaWxkKGRyb3Bkb3duRWwpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRFbCA9XG4gICAgICB0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIiA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSkgOiBlbGVtO1xuICAgIGlmICh0YXJnZXRFbCAmJiB0YXJnZXRFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJuZWVkLXNoYXJlLXBhbmVsXCIpKSB7XG4gICAgICBjcmVhdGVEcm9wZG93bih0YXJnZXRFbCk7XG4gICAgICAvLyB0YXJnZXRFbC5jbGFzc0xpc3QuYWRkKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgICB9XG4gICAgLy8gY2xvc2Ugb24gY2xpY2sgb3V0c2lkZVxuICAgIGVsc2VcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIG9wZW5lZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWRcIik7XG5cbiAgICAgICAgaWYgKCFjbG9zZXN0KGV2ZW50LnRhcmdldCwgXCIubmVlZC1zaGFyZS1idXR0b24tb3BlbmVkXCIpKSB7XG4gICAgICAgICAgaWYgKG9wZW5lZEVsKSB7XG4gICAgICAgICAgICBvcGVuZWRFbC5jbGFzc0xpc3QucmVtb3ZlKFwibmVlZC1zaGFyZS1idXR0b24tb3BlbmVkXCIpO1xuXG4gICAgICAgICAgICAvLyBoaWRlIHdlY2hhdCBjb2RlIGltYWdlIHdoZW4gY2xvc2UgdGhlIGRyb3Bkb3duLlxuICAgICAgICAgICAgaWYgKG9wZW5lZEVsLnF1ZXJ5U2VsZWN0b3IoXCIubmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZVwiKSkge1xuICAgICAgICAgICAgICBvcGVuZWRFbC5xdWVyeVNlbGVjdG9yKFwiLm5lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2VcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCByb290LmVsZW0pO1xuICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmVlZC1zaGFyZS1idXR0b24tb3BlbmVkXCIpKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlRHJvcGRvd24oZWwpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcIm5lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZFwiKTtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgbmV3IG5lZWRTaGFyZUJ1dHRvbihcIi5uZWVkLXNoYXJlLWJ1dHRvblwiKTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvY0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9jX2NvbnRhaW5lclwiKTtcbiAgICB0aGlzLnRvY0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9jX2J0blwiKTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMudG9jQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy50b2NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgdGhpcy50b2NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50b2NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAgIHRoaXMudG9jQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9jQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
