(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
var top = 0; // 判断pc段左右上角的箭头该显示哪个

function left_right_arrow() {
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
}

function left_center_right() {
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
}

function left_center() {
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
}

function center_right() {
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
}

function center() {
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
}

function device_small() {
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
}

function device_center() {
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
}

function device_largest() {
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
}

var _default = {
  init: function init() {
    this.btn_pc_switch();
    this.btn_app_switch();
    this.browser_remember();
    this.device_switch(); // 这个放到最后自调用!因为不管本地存储是什么，最终还是要根据设备监听为主
  },

  /* PC：单/双/三栏布局切换按钮点击事件 */
  btn_pc_switch: function btn_pc_switch() {
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
  },

  /* 移动端左右上角的按钮 */
  btn_app_switch: function btn_app_switch() {
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
  },

  /* 浏览器记住布局 */
  browser_remember: function browser_remember() {
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
  },

  /* 媒体查询布局 */
  device_switch: function device_switch() {
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
  }
};
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _layout = _interopRequireDefault(require("./common/layout.js"));

var _toc = _interopRequireDefault(require("./part/toc.js"));

var _comments = _interopRequireDefault(require("./part/comments.js"));

var _go_top = require("./part/go_top.js");

var _web_info = _interopRequireDefault(require("./part/web_info.js"));

var _search = _interopRequireDefault(require("./part/search.js"));

var _sharebutton = _interopRequireDefault(require("./part/sharebutton.js"));

var _categories = _interopRequireDefault(require("./part/categories.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 入口函数，会在页面加载完毕执行
$(function () {
  // 初始化目录脚本函数
  _toc["default"].init(); // 初始化评论模块下所有函数


  _comments["default"].init(); // 初始化回到顶部


  _go_top.go_top_object.init(); // 布局初始化


  _layout["default"].init();

  _search["default"].init(); // 入口函数初始化网站运行时间


  _web_info["default"].init(); // 分享按钮的初始化


  _sharebutton["default"].init(); // 目录函数初始化


  _categories["default"].init(); // 头图优化代码


  setTimeout(function () {
    var article_img = document.querySelectorAll(".artcle_list_item_img");

    for (var i = 0; i < article_img.length; i++) {
      var wid = article_img[i].firstElementChild.width + 5;
      var hei = article_img[i].firstElementChild.height + 7;
      article_img[i].style.maxWidth = wid + "px";
      article_img[i].style.maxHeight = hei + "px";
    }
  }, 1000);
});

},{"./common/layout.js":1,"./part/categories.js":3,"./part/comments.js":4,"./part/go_top.js":5,"./part/search.js":6,"./part/sharebutton.js":7,"./part/toc.js":8,"./part/web_info.js":9}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*
 * @Author: wztlink1013
 * @Date: 2022-07-07 18:48:18
 * @LastEditTime: 2022-07-10 21:47:31
 * @Description:
 */
var _default = {
  init: function init() {
    this.categories_widget();
    this.hit_open_close_forder();
    this.readmore_blog_essay();
  },
  // 点击icon展开/关闭树分类
  hit_open_close_forder: function hit_open_close_forder() {// let cate_cell = document.querySelectorAll('.cate_cell')
    // for (let i = 0; i < cate_cell.length; i++) {
    //   if (cate_cell[i].children[1].style.display !== 'none') {
    //     let item = $(cate_cell[i].children[1])
    //     item.click(function () {
    //       if (cate_cell[i].children[2].style.display === 'none') {
    //         cate_cell[i].children[2].style.display = 'block'
    //       } else if (
    //         cate_cell[i].children[2].style.display === 'inline-block'
    //       ) {
    //         cate_cell[i].children[2].style.display = 'none'
    //       } else {
    //         cate_cell[i].children[2].style.display = 'none'
    //       }
    //     })
    //     // cate_cell[i].children[2].style.display = "none"
    //   }
    // }
  },
  // 初始化
  categories_widget: function categories_widget() {
    var arr_li = document.querySelectorAll('.category-list-item');
    arr_li.forEach(function (li) {
      // 美化该分类总数
      var obj_word = li.querySelector('a').nextElementSibling;
      obj_word.innerHTML = ' [' + obj_word.innerHTML + ']'; // 该分类下如果有子分类

      if (li.querySelector('.category-list-child')) {
        // 默认所有子分类全部收缩
        li.querySelector('ul').style.display = 'none'; // 展开按钮

        var node_1 = document.createElement('span');
        node_1.style.display = 'inline';
        node_1.style.cursor = 'pointer';
        node_1.innerHTML = '<i class="fa fa-plus-square-o" aria-hidden="true"></i> ';
        li.insertBefore(node_1, li.querySelector('a')); // 收缩按钮

        var node_2 = document.createElement('span');
        node_2.style.display = 'none';
        node_2.style.cursor = 'pointer';
        node_2.innerHTML = '<i class="fa fa-minus-square-o" aria-hidden="true"></i> ';
        li.insertBefore(node_2, li.querySelector('a')); // 展开按钮注册点击事件

        node_1.addEventListener('click', function () {
          node_1.style.display = 'none';
          node_2.style.display = 'inline';
          li.querySelector('ul').style.display = 'block';
        }); // 收缩按钮注册点击事件

        node_2.addEventListener('click', function () {
          node_2.style.display = 'none';
          node_1.style.display = 'inline';
          li.querySelector('ul').style.display = 'none';
        });
      } else {
        // 该分类下没有子分类
        var _node_ = document.createElement('span'); // 放一个占位符


        _node_.style.display = 'inline';
        _node_.style.paddingLeft = '15px';
        _node_.innerHTML = '';
        li.insertBefore(_node_, li.querySelector('a'));
      }
    });
  },
  // 查看更多页面，优化博客/随笔显示
  readmore_blog_essay: function readmore_blog_essay() {
    if (location.pathname === '/archives/') {
      // console.log(location.search);
      // 去掉第一个？字符
      var params = location.search.substr(1); // 根据=号划分参数

      var arr = params.split('='); // 获取page_type参数

      var page_type = arr[1];
      var ul = document.querySelectorAll('.archive_article_list');

      for (var u = 0; u < ul.length; u++) {
        // 对每一个li进行判断，如果不是参数的值，就进行隐藏
        for (var i = 0; i < ul[u].children.length; i++) {
          var index = ul[u].children[i].getAttribute('data-index');

          if (index === 'dsal') {
            index = 'blog';
          }

          if (index !== page_type) {
            ul[u].children[i].style.display = 'none';
          }
        }
      }
    }
  }
};
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*******************************************************************
【文章访问量排名】
    文章阅读量在单个文章中可以显示但是不能排名，排名怎么实现呢？
    方案1：使用valine
    方案2：在服务器上进行全站的文章访问，提取他们的访问量id
    方案3：对twikoo云函数进行代码更改，类似访问量api
 
【评论切换按钮】
    切换utterances评论后，页面会刷新一下然后又回到默认评论系统了，这个可以优化

【最新评论】
    最新评论组件，如果blog页面用了，那么这个组件就不能放在移动端侧边栏了，
    同一个id不能多次用的缘故吗？
*******************************************************************/
// 导出为一个对象
var _default = {
  init: function init() {
    this.go_comments();
    this.comments_count();
    this.new_comments();
    this.switch_comment();
    this.giscus_comment();
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
  },
  // 右下角按钮事件 是否前往评论区
  go_comments: function go_comments() {
    if (document.querySelector("#comments")) {
      document.querySelector("#go_comments").style.display = "block";
    }
  },
  giscus_comment: function giscus_comment() {
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
  },
  // 文章评论数
  comments_count: function comments_count() {
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
  },
  // 最新评论
  new_comments: function new_comments() {
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
  },
  // 切换评论(评论组件存在时)
  switch_comment: function switch_comment() {
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
  }
};
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScroll = getScroll;
exports.go_top_object = void 0;

/*******************************************************************
        缓慢显示
        缓慢回到顶部
*******************************************************************/
var go_top_object = {
  init: function init() {
    this.go_top();
    this.click_go_top();
  },
  go_top: function go_top() {
    // 滚动显示go_top按钮
    $(window).scroll(function () {
      // 持续监听滚动状态
      getScroll().top !== 0 ? $("#go_top").css("display", "block") : $("#go_top").css("display", "none");
    });
  },
  click_go_top: function click_go_top() {
    // 点击回到顶部
    $("#go_top").click(function () {
      if (window.pageYOffset) {
        window.pageYOffset = 0;
      } else if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = 0;
      } else if (document.body.scrollTop) {
        document.body.scrollTop = 0;
      }
    });
  }
}; // scroolTop兼容性方案

exports.go_top_object = go_top_object;

function getScroll() {
  return {
    left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  };
} // 如果不做默认导入，就按照下面写，不要default词

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  init: function init() {
    this.search();
  },
  search: function search() {
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
  }
};
exports["default"] = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/***********************************************
  needShareButton
  - Version 1.0.0
  - Copyright 2015 Dzmitry Vasileuski
	- Licensed under MIT (http://opensource.org/licenses/MIT)
***********************************************/
var _default = {
  init: function init() {
    this.share();
  },
  share: function share() {
    // find closest
    function closest(elem, parent) {
      if (typeof parent == 'string') {
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
      root.elem = elem || 'need-share-button';
      /* Helpers
      ***********************************************/
      // get title from html

      root.getTitle = function () {
        var content; // check querySelector existance for old browsers

        if (document.querySelector) {
          if (content = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) {
            return content.getAttribute('content');
          } else if (content = document.querySelector('title')) {
            return content.innerText;
          }
        }

        return document.title;
      }; // get image from html


      root.getImage = function () {
        var content; // check querySelector existance for old browsers

        if (document.querySelector) {
          if (content = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) {
            return content.getAttribute('content');
          } else return '';
        } else return '';
      }; // get description from html


      root.getDescription = function () {
        var content; // check querySelector existance for old browsers

        if (document.querySelector) {
          if (content = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) {
            return content.getAttribute('content');
          } else return '';
        } else {
          if (content = document.getElementsByTagName('meta').namedItem('description')) return content.getAttribute('content');else return '';
        }
      }; // share urls for all networks


      root.share = {
        'weibo': function weibo(el) {
          var myoptions = getOptions(el);
          var url = 'http://v.t.sina.com.cn/share/share.php?title=' + encodeURIComponent(myoptions.title) + "&url=" + encodeURIComponent(myoptions.url) + "&pic=" + encodeURIComponent(myoptions.image);
          root.popup(url);
        },
        'wechat': function wechat(el) {
          var myoptions = getOptions(el);
          var imgSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(myoptions.url);
          var dropdownEl = el.querySelector('.need-share-button_dropdown');
          var img = dropdownEl.getElementsByClassName('need-share-wechat-code-image')[0];
          var loader = dropdownEl.getElementsByClassName('need-share-loader')[0];

          if (img) {
            img.remove();
          } else if (loader) {
            loader.remove();
          } else {
            loader = document.createElement('div');
            loader.className = 'need-share-loader';
            loader.innerText = 'loading...';
            loader.title = 'loading qrcode...';
            img = document.createElement('img');
            img.src = imgSrc;
            img.alt = 'Create qrcode failed!';
            img.setAttribute("class", 'need-share-wechat-code-image');

            img.onload = img.onerror = function () {
              if (loader.isConnected) {
                loader.remove();
                dropdownEl.appendChild(img);
              }
            };

            dropdownEl.appendChild(loader);
          }
        },
        'douban': function douban(el) {
          var myoptions = getOptions(el);
          var url = 'https://www.douban.com/share/service?name=' + encodeURIComponent(myoptions.title) + "&href=" + encodeURIComponent(myoptions.url) + "&image=" + encodeURIComponent(myoptions.image);
          root.popup(url);
        },
        'qqzone': function qqzone(el) {
          var myoptions = getOptions(el);
          var url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=' + encodeURIComponent(myoptions.title) + "&url=" + encodeURIComponent(myoptions.url) + "&pics=" + encodeURIComponent(myoptions.image) + "&desc=" + encodeURIComponent(myoptions.description);
          root.popup(url);
        },
        'renren': function renren(el) {
          var myoptions = getOptions(el);
          var url = 'http://widget.renren.com/dialog/share?title=' + encodeURIComponent(myoptions.title) + "&resourceUrl=" + encodeURIComponent(myoptions.url) + "&pic=" + encodeURIComponent(myoptions.image) + "&description=" + encodeURIComponent(myoptions.description);
          root.popup(url);
        },
        'mailto': function mailto(el) {
          var myoptions = getOptions(el);
          var url = 'mailto:?subject=' + encodeURIComponent(myoptions.title) + '&body=Thought you might enjoy reading this: ' + encodeURIComponent(myoptions.url) + ' - ' + encodeURIComponent(myoptions.description);
          window.location.href = url;
        },
        'twitter': function twitter(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'twitter.com/intent/tweet?text=';
          url += encodeURIComponent(myoptions.title) + "&url=" + encodeURIComponent(myoptions.url);
          root.popup(url);
        },
        'pinterest': function pinterest(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'pinterest.com/pin/create/bookmarklet/?is_video=false';
          url += '&media=' + encodeURIComponent(myoptions.image);
          url += '&url=' + encodeURIComponent(myoptions.url);
          url += '&description=' + encodeURIComponent(myoptions.title);
          root.popup(url);
        },
        'facebook': function facebook(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.facebook.com/share.php?';
          url += 'u=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          root.popup(url);
        },
        'googleplus': function googleplus(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'plus.google.com/share?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          root.popup(url);
        },
        'reddit': function reddit(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.reddit.com/submit?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          root.popup(url);
        },
        'delicious': function delicious(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'del.icio.us/post?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          url += '&notes=' + encodeURIComponent(myoptions.description);
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
        'stumbleupon': function stumbleupon(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.stumbleupon.com/submit?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          root.popup(url);
        },
        'linkedin': function linkedin(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.linkedin.com/shareArticle?mini=true';
          url += '&url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          url += '&source=' + encodeURIComponent(myoptions.source);
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
        'posterous': function posterous(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'posterous.com/share?';
          url += 'linkto=' + encodeURIComponent(myoptions.url);
          root.popup(url);
        },
        'tumblr': function tumblr(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.tumblr.com/share?v=3';
          url += '&u=' + encodeURIComponent(myoptions.url);
          url += '&t=' + encodeURIComponent(myoptions.title);
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
        'evernote': function evernote(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.evernote.com/clip.action?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          root.popup(url);
        },
        'friendfeed': function friendfeed(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.friendfeed.com/share?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          root.popup(url);
        },
        'vkontakte': function vkontakte(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'vkontakte.ru/share.php?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          url += '&description=' + encodeURIComponent(myoptions.description);
          url += '&image=' + encodeURIComponent(myoptions.image);
          url += '&noparse=true';
          root.popup(url);
        },
        'odnoklassniki': function odnoklassniki(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
          url += '&st.comments=' + encodeURIComponent(myoptions.description);
          url += '&st._surl=' + encodeURIComponent(myoptions.url);
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

        var shareWindow = window.open(url, 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=' + popupWidth + ', height=' + popupHeight + ', top=' + top + ', left=' + left); // Puts focus on the newWindow

        if (window.focus) {
          shareWindow.focus();
        }
      };
      /* Set options
      ***********************************************/
      // create default options


      root.options = {
        iconStyle: 'default',
        // default or box
        boxForm: 'horizontal',
        // horizontal or vertical
        position: 'bottomCenter',
        // top / middle / bottom + Left / Center / Right
        protocol: ['http', 'https'].indexOf(window.location.href.split(':')[0]) === -1 ? 'https://' : '//',
        networks: 'Twitter,Facebook,Reddit,Linkedin,Tumblr,Pinterest,Weibo,Wechat,Douban,QQZone,Mailto',
        icons: ['fa fa-twitter', 'fa fa-facebook', 'fa fa-reddit-alien', 'fa fa-linkedin', 'fa fa-tumblr', 'fa fa-pinterest', 'fa fa-weibo', 'fa fa-weixin', '9', 'fa fa-qq', 'fa fa-envelope-o']
      }; // integrate custom options

      for (var i in options) {
        root.options[i] = options[i];
      } // convert networks string into array


      root.options.networks = root.options.networks.toLowerCase().split(',');

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
            var new_option = option.replace(/share/, '');

            if (!new_option.length) {
              continue;
            }

            new_option = new_option.charAt(0).toLowerCase() + new_option.slice(1);
            var val = el.dataset[option];

            if (new_option === 'networks') {
              val = val.toLowerCase().split(',');
            } else if (new_option === 'url' && val && val[0] === '/') {
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
        var dropdownEl = document.createElement('span');
        dropdownEl.className = 'need-share-button_dropdown';

        if (el.querySelector('.need-share-button_dropdown')) {
          return;
        }

        var myoptions = getOptions(el); // set dropdown row length

        if (myoptions.iconStyle == 'box' && myoptions.boxForm == 'horizontal') dropdownEl.className += ' need-share-button_dropdown-box-horizontal';else if (myoptions.iconStyle == 'box' && myoptions.boxForm == 'vertical') dropdownEl.className += ' need-share-button_dropdown-box-vertical'; // set dropdown position 

        setTimeout(function () {
          switch (myoptions.position) {
            case 'topLeft':
              dropdownEl.className += ' need-share-button_dropdown-top-left';
              break;

            case 'topRight':
              dropdownEl.className += ' need-share-button_dropdown-top-right';
              break;

            case 'topCenter':
              dropdownEl.className += ' need-share-button_dropdown-top-center';
              dropdownEl.style.marginLeft = -dropdownEl.offsetWidth / 2 + 'px';
              break;

            case 'middleLeft':
              dropdownEl.className += ' need-share-button_dropdown-middle-left';
              dropdownEl.style.marginTop = -dropdownEl.offsetHeight / 2 + 'px';
              break;

            case 'middleRight':
              dropdownEl.className += ' need-share-button_dropdown-middle-right';
              dropdownEl.style.marginTop = -dropdownEl.offsetHeight / 2 + 'px';
              break;

            case 'bottomLeft':
              dropdownEl.className += ' need-share-button_dropdown-bottom-left';
              break;

            case 'bottomRight':
              dropdownEl.className += ' need-share-button_dropdown-bottom-right';
              break;

            case 'bottomCenter':
              dropdownEl.className += ' need-share-button_dropdown-bottom-center';
              dropdownEl.style.marginLeft = -dropdownEl.offsetWidth / 2 + 'px';
              break;

            default:
              dropdownEl.className += ' need-share-button_dropdown-bottom-center';
              dropdownEl.style.marginLeft = -dropdownEl.offsetWidth / 2 + 'px';
              break;
          }
        }, 1); // fill fropdown with buttons

        var iconClass = myoptions.iconStyle == 'default' ? 'need-share-button_link need-share-button_' : 'need-share-button_link-' + myoptions.iconStyle + ' need-share-button_link need-share-button_';
        var flag = 0;

        for (var network in myoptions.networks) {
          var link = document.createElement('span');
          network = myoptions.networks[network];
          link.className = iconClass + network;
          console.log(myoptions.icons.length);
          link.className += ' ' + myoptions.icons[flag];
          link.dataset.network = network;
          link.title = network;
          dropdownEl.appendChild(link);
          flag++;
        }

        dropdownEl.addEventListener('click', function (event) {
          if (closest(event.target, '.need-share-button_link')) {
            event.preventDefault();
            event.stopPropagation();
            root.share[event.target.dataset.network](el);
            return false;
          }
        });
        el.appendChild(dropdownEl);
      }

      var targetEl = typeof elem === 'string' ? document.querySelector(elem) : elem;

      if (targetEl && targetEl.classList.contains('need-share-panel')) {
        createDropdown(targetEl); // targetEl.classList.add('need-share-button-opened');
      } else // close on click outside
        document.addEventListener('click', function (event) {
          var openedEl = document.querySelector('.need-share-button-opened');

          if (!closest(event.target, '.need-share-button-opened')) {
            if (openedEl) {
              openedEl.classList.remove('need-share-button-opened'); // hide wechat code image when close the dropdown.

              if (openedEl.querySelector('.need-share-wechat-code-image')) {
                openedEl.querySelector('.need-share-wechat-code-image').remove();
              }
            } else {
              var el = closest(event.target, root.elem);

              if (el) {
                if (!el.classList.contains('need-share-button-opened')) {
                  createDropdown(el);
                  setTimeout(function () {
                    el.classList.add('need-share-button-opened');
                  }, 1);
                }
              }
            }
          }
        });
    };

    new needShareButton('.need-share-button');
  }
};
exports["default"] = _default;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  init: function init() {
    this.toc_btn();
  },
  toc_btn: function toc_btn() {
    var toc_container = document.querySelector('.toc_container');
    var toc_btn = document.querySelector('#toc_btn');
    $(toc_btn).click(function () {
      if (toc_container.style.display === 'none') {
        toc_container.style.display = 'block';
      } else if (toc_container.style.display === 'block') {
        toc_container.style.display = 'none';
      } else {
        toc_container.style.display = 'block';
      }
    });
  }
};
exports["default"] = _default;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*
 * @Author: wztlink1013
 * @Date: 2022-07-07 18:48:18
 * @LastEditTime: 2022-07-10 00:26:11
 * @Description:
 */
var _default = {
  init: function init() {
    this.web_info_runtime();
  },
  // TODO: !!!我着实不知道这是个什么秘
  web_info_runtime: function web_info_runtime() {// if (document.querySelector('#webinfo_runtime_count_1')) {
    //   let BirthDay = new Date(new Date('2020/01/04'))
    //   let today = new Date()
    //   let timeold = today.getTime() - BirthDay.getTime()
    //   let daysold = Math.floor(timeold / (24 * 60 * 60 * 1000))
    //   let obj = document.querySelector('#webinfo_runtime_count_1')
    //   obj.innerHTML = daysold + ' 天'
    //   console.log(obj)
    // }
  }
};
exports["default"] = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY2F0ZWdvcmllcy5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvc2VhcmNoLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9zaGFyZWJ1dHRvbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvdG9jLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC93ZWJfaW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBO0FBQ0EsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGFBQUQsQ0FBbEI7QUFDQSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsY0FBRCxDQUFuQixDLENBRUE7O0FBQ0EsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFVBQUQsQ0FBZjtBQUNBLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxXQUFELENBQWhCO0FBQ0EsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQUQsQ0FBakI7QUFDQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQixDLENBRUE7O0FBQ0EsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQUQsQ0FBakI7QUFDQSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFsQixDLENBRUE7O0FBQ0EsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLGdCQUFELENBQXJCO0FBQ0EsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLGdCQUFELENBQXJCLEMsQ0FFQTs7QUFDQSxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsaUJBQUQsQ0FBdEI7QUFDQSxJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxtQkFBRCxDQUF4QixDLENBRUE7O0FBQ0EsSUFBSSxhQUFhLEdBQUcsS0FBcEI7QUFDQSxJQUFJLG1CQUFtQixHQUFHLEtBQTFCO0FBQ0EsSUFBSSxpQkFBaUIsR0FBRyxLQUF4QixDLENBQ0E7O0FBQ0EsSUFBSSxhQUFhLEdBQUcsS0FBcEI7QUFDQSxJQUFJLG1CQUFtQixHQUFHLEtBQTFCO0FBQ0EsSUFBSSxrQkFBa0IsR0FBRyxLQUF6QixDLENBQ0E7O0FBQ0EsSUFBSSxlQUFlLEdBQUcsS0FBdEI7QUFDQSxJQUFJLHFCQUFxQixHQUFHLEtBQTVCO0FBQ0EsSUFBSSxvQkFBb0IsR0FBRyxLQUEzQjtBQUNBLElBQUksbUJBQW1CLEdBQUcsS0FBMUIsQyxDQUNBOztBQUNBLElBQUksY0FBYyxHQUFHLEtBQXJCO0FBQ0EsSUFBSSxvQkFBb0IsR0FBRyxNQUEzQixDLENBQ0E7O0FBQ0EsSUFBSSxzQkFBc0IsR0FBRyxLQUE3QjtBQUNBLElBQUksbUJBQW1CLEdBQUcsTUFBMUIsQyxDQUNBOztBQUNBLElBQUksdUJBQXVCLEdBQUcsS0FBOUI7QUFDQSxJQUFJLG9CQUFvQixHQUFHLE1BQTNCO0FBQ0EsSUFBSSxHQUFHLEdBQUcsQ0FBVixDLENBQ0E7O0FBQ0EsU0FBUyxnQkFBVCxHQUE0QjtFQUMxQixJQUFJLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixNQUEyQixNQUEvQixFQUF1QztJQUNyQyxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQixHQUEvQixDQUFtQztNQUFFLE9BQU8sRUFBRTtJQUFYLENBQW5DO0lBQ0EsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEIsR0FBOUIsQ0FBa0M7TUFBRSxPQUFPLEVBQUU7SUFBWCxDQUFsQztFQUNELENBSEQsTUFHTztJQUNMLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLEdBQS9CLENBQW1DO01BQUUsT0FBTyxFQUFFO0lBQVgsQ0FBbkM7SUFDQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QixHQUE5QixDQUFrQztNQUFFLE9BQU8sRUFBRTtJQUFYLENBQWxDO0VBQ0Q7O0VBQ0QsSUFBSSxRQUFRLENBQUMsR0FBVCxDQUFhLFNBQWIsTUFBNEIsTUFBaEMsRUFBd0M7SUFDdEMsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0MsR0FBaEMsQ0FBb0M7TUFBRSxPQUFPLEVBQUU7SUFBWCxDQUFwQztJQUNBLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLEdBQS9CLENBQW1DO01BQUUsT0FBTyxFQUFFO0lBQVgsQ0FBbkM7RUFDRCxDQUhELE1BR087SUFDTCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQyxHQUFoQyxDQUFvQztNQUFFLE9BQU8sRUFBRTtJQUFYLENBQXBDO0lBQ0EsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0IsR0FBL0IsQ0FBbUM7TUFBRSxPQUFPLEVBQUU7SUFBWCxDQUFuQztFQUNEO0FBQ0Y7O0FBQ0QsU0FBUyxpQkFBVCxHQUE2QjtFQUMzQixTQUFTLENBQUMsR0FBVixDQUFjO0lBQUUsS0FBSyxFQUFFO0VBQVQsQ0FBZDtFQUNBLFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBRSxLQUFLLEVBQUU7RUFBVCxDQUFkO0VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWTtJQUNWLEtBQUssRUFBRSxtQkFERztJQUVWLE9BQU8sRUFBRTtFQUZDLENBQVo7RUFJQSxRQUFRLENBQUMsR0FBVCxDQUFhO0lBQ1gsS0FBSyxFQUFFLG9CQURJO0lBRVgsT0FBTyxFQUFFO0VBRkUsQ0FBYjtFQUlBLGdCQUFnQjs7RUFDaEIsSUFBSSxZQUFZLENBQUMsY0FBYixDQUE0QixRQUE1QixDQUFKLEVBQTJDO0lBQ3pDLE1BQU0sQ0FBQyxZQUFQLENBQW9CLFVBQXBCLENBQStCLFFBQS9CO0lBQ0EsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsUUFBNUIsRUFBc0MsSUFBdEM7SUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFVBQVosRUFBd0IsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBeEI7RUFDRCxDQUpELE1BSU87SUFDTCxNQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixDQUE0QixRQUE1QixFQUFzQyxJQUF0QztFQUNEO0FBQ0Y7O0FBQ0QsU0FBUyxXQUFULEdBQXVCO0VBQ3JCLFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBRSxLQUFLLEVBQUU7RUFBVCxDQUFkO0VBQ0EsU0FBUyxDQUFDLEdBQVYsQ0FBYztJQUFFLEtBQUssRUFBRTtFQUFULENBQWQ7RUFDQSxPQUFPLENBQUMsR0FBUixDQUFZO0lBQUUsS0FBSyxFQUFFO0VBQVQsQ0FBWjtFQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixFQUF1QixPQUF2QjtFQUNBLFFBQVEsQ0FBQyxHQUFULENBQWEsU0FBYixFQUF3QixNQUF4QjtFQUNBLGdCQUFnQjs7RUFDaEIsSUFBSSxZQUFZLENBQUMsY0FBYixDQUE0QixRQUE1QixDQUFKLEVBQTJDO0lBQ3pDLE1BQU0sQ0FBQyxZQUFQLENBQW9CLFVBQXBCLENBQStCLFFBQS9CO0lBQ0EsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsUUFBNUIsRUFBc0MsR0FBdEM7SUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFVBQVosRUFBd0IsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBeEI7RUFDRCxDQUpELE1BSU87SUFDTCxNQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixDQUE0QixRQUE1QixFQUFzQyxHQUF0QztFQUNEO0FBQ0Y7O0FBQ0QsU0FBUyxZQUFULEdBQXdCO0VBQ3RCLFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBRSxLQUFLLEVBQUU7RUFBVCxDQUFkO0VBQ0EsUUFBUSxDQUFDLEdBQVQsQ0FBYTtJQUFFLEtBQUssRUFBRTtFQUFULENBQWI7RUFDQSxTQUFTLENBQUMsR0FBVixDQUFjO0lBQUUsS0FBSyxFQUFFO0VBQVQsQ0FBZDtFQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixFQUF1QixNQUF2QjtFQUNBLFFBQVEsQ0FBQyxHQUFULENBQWEsU0FBYixFQUF3QixPQUF4QjtFQUNBLGdCQUFnQjs7RUFDaEIsSUFBSSxZQUFZLENBQUMsY0FBYixDQUE0QixRQUE1QixDQUFKLEVBQTJDO0lBQ3pDLE1BQU0sQ0FBQyxZQUFQLENBQW9CLFVBQXBCLENBQStCLFFBQS9CO0lBQ0EsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsUUFBNUIsRUFBc0MsR0FBdEM7SUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFVBQVosRUFBd0IsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBeEI7RUFDRCxDQUpELE1BSU87SUFDTCxNQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixDQUE0QixRQUE1QixFQUFzQyxHQUF0QztFQUNEO0FBQ0Y7O0FBQ0QsU0FBUyxNQUFULEdBQWtCO0VBQ2hCLFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBRSxLQUFLLEVBQUU7RUFBVCxDQUFkO0VBQ0EsU0FBUyxDQUFDLEdBQVYsQ0FBYztJQUFFLEtBQUssRUFBRTtFQUFULENBQWQ7RUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVosRUFBdUIsTUFBdkI7RUFDQSxRQUFRLENBQUMsR0FBVCxDQUFhLFNBQWIsRUFBd0IsTUFBeEI7RUFDQSxnQkFBZ0I7O0VBQ2hCLElBQUksWUFBWSxDQUFDLGNBQWIsQ0FBNEIsUUFBNUIsQ0FBSixFQUEyQztJQUN6QyxNQUFNLENBQUMsWUFBUCxDQUFvQixVQUFwQixDQUErQixRQUEvQjtJQUNBLFlBQVksQ0FBQyxPQUFiLENBQXFCLFFBQXJCLEVBQStCLEdBQS9CO0lBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLFlBQVksQ0FBQyxPQUFiLENBQXFCLFFBQXJCLENBQXhCO0VBQ0QsQ0FKRCxNQUlPO0lBQ0wsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsUUFBNUIsRUFBc0MsR0FBdEM7RUFDRDtBQUNGOztBQUNELFNBQVMsWUFBVCxHQUF3QjtFQUN0QjtFQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksaUJBQVo7RUFFQSxTQUFTLENBQUMsR0FBVixDQUFjO0lBQUUsT0FBTyxFQUFFO0VBQVgsQ0FBZDtFQUNBLFVBQVUsQ0FBQyxHQUFYLENBQWU7SUFBRSxPQUFPLEVBQUU7RUFBWCxDQUFmLEVBTHNCLENBTXRCOztFQUNBLFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBRSxLQUFLLEVBQUU7RUFBVCxDQUFkO0VBQ0EsU0FBUyxDQUFDLEdBQVYsQ0FBYztJQUFFLEtBQUssRUFBRTtFQUFULENBQWQ7RUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVosRUFBdUIsTUFBdkI7RUFDQSxRQUFRLENBQUMsR0FBVCxDQUFhLFNBQWIsRUFBd0IsTUFBeEI7QUFDRDs7QUFDRCxTQUFTLGFBQVQsR0FBeUI7RUFDdkI7RUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaO0VBRUEsU0FBUyxDQUFDLEdBQVYsQ0FBYztJQUFFLE9BQU8sRUFBRTtFQUFYLENBQWQ7RUFDQSxVQUFVLENBQUMsR0FBWCxDQUFlO0lBQUUsT0FBTyxFQUFFO0VBQVgsQ0FBZixFQUx1QixDQU12Qjs7RUFDQSxTQUFTLENBQUMsR0FBVixDQUFjO0lBQUUsS0FBSyxFQUFFO0VBQVQsQ0FBZDtFQUNBLFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBRSxLQUFLLEVBQUU7RUFBVCxDQUFkO0VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLE1BQXZCO0VBQ0EsUUFBUSxDQUFDLEdBQVQsQ0FBYSxTQUFiLEVBQXdCLE1BQXhCO0FBQ0Q7O0FBQ0QsU0FBUyxjQUFULEdBQTBCO0VBQ3hCO0VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxrQkFBWjs7RUFFQSxJQUFJLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixNQUEyQixNQUEvQixFQUF1QztJQUNyQyxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQixHQUEvQixDQUFtQztNQUFFLE9BQU8sRUFBRTtJQUFYLENBQW5DO0lBQ0EsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEIsR0FBOUIsQ0FBa0M7TUFBRSxPQUFPLEVBQUU7SUFBWCxDQUFsQztFQUNELENBSEQsTUFHTztJQUNMLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLEdBQS9CLENBQW1DO01BQUUsT0FBTyxFQUFFO0lBQVgsQ0FBbkM7SUFDQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QixHQUE5QixDQUFrQztNQUFFLE9BQU8sRUFBRTtJQUFYLENBQWxDO0VBQ0Q7O0VBQ0QsSUFBSSxRQUFRLENBQUMsR0FBVCxDQUFhLFNBQWIsTUFBNEIsTUFBaEMsRUFBd0M7SUFDdEMsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0MsR0FBaEMsQ0FBb0M7TUFBRSxPQUFPLEVBQUU7SUFBWCxDQUFwQztJQUNBLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLEdBQS9CLENBQW1DO01BQUUsT0FBTyxFQUFFO0lBQVgsQ0FBbkM7RUFDRCxDQUhELE1BR087SUFDTCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQyxHQUFoQyxDQUFvQztNQUFFLE9BQU8sRUFBRTtJQUFYLENBQXBDO0lBQ0EsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0IsR0FBL0IsQ0FBbUM7TUFBRSxPQUFPLEVBQUU7SUFBWCxDQUFuQztFQUNEOztFQUNELFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBRSxPQUFPLEVBQUU7RUFBWCxDQUFkO0VBQ0EsVUFBVSxDQUFDLEdBQVgsQ0FBZTtJQUFFLE9BQU8sRUFBRTtFQUFYLENBQWY7RUFFQSxTQUFTLENBQUMsR0FBVixDQUFjO0lBQUUsS0FBSyxFQUFFO0VBQVQsQ0FBZDtFQUNBLFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBRSxLQUFLLEVBQUU7RUFBVCxDQUFkO0VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWTtJQUNWLEtBQUssRUFBRSxtQkFERztJQUVWLE9BQU8sRUFBRTtFQUZDLENBQVo7RUFJQSxRQUFRLENBQUMsR0FBVCxDQUFhO0lBQ1gsS0FBSyxFQUFFLG9CQURJO0lBRVgsT0FBTyxFQUFFO0VBRkUsQ0FBYjtBQUlEOztlQUVjO0VBQ2IsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCLEtBQUssYUFBTDtJQUNBLEtBQUssY0FBTDtJQUNBLEtBQUssZ0JBQUw7SUFDQSxLQUFLLGFBQUwsR0FKZ0IsQ0FJTTtFQUN2QixDQU5ZOztFQU9iO0VBQ0EsYUFBYSxFQUFFLHlCQUFZO0lBQ3pCLFVBQVUsQ0FBQyxLQUFYLENBQWlCLFlBQVk7TUFDM0IsSUFBSSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVosTUFBMkIsTUFBL0IsRUFBdUM7UUFDckM7UUFDQSxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQixHQUEvQixDQUFtQztVQUFFLE9BQU8sRUFBRTtRQUFYLENBQW5DO1FBQ0EsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEIsR0FBOUIsQ0FBa0M7VUFBRSxPQUFPLEVBQUU7UUFBWCxDQUFsQztRQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixFQUF1QixPQUF2Qjs7UUFDQSxJQUFJLFFBQVEsQ0FBQyxHQUFULENBQWEsU0FBYixNQUE0QixNQUFoQyxFQUF3QztVQUN0QztVQUNBLFdBQVc7UUFDWixDQUhELE1BR087VUFDTDtVQUNBLGlCQUFpQjtRQUNsQjtNQUNGLENBWkQsTUFZTztRQUNMLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLEdBQS9CLENBQW1DO1VBQUUsT0FBTyxFQUFFO1FBQVgsQ0FBbkM7UUFDQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QixHQUE5QixDQUFrQztVQUFFLE9BQU8sRUFBRTtRQUFYLENBQWxDO1FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLE1BQXZCOztRQUNBLElBQUksUUFBUSxDQUFDLEdBQVQsQ0FBYSxTQUFiLE1BQTRCLE1BQWhDLEVBQXdDO1VBQ3RDO1VBQ0EsTUFBTTtRQUNQLENBSEQsTUFHTztVQUNMO1VBQ0EsWUFBWTtRQUNiO01BQ0Y7SUFDRixDQXpCRDtJQTJCQSxXQUFXLENBQUMsS0FBWixDQUFrQixZQUFZO01BQzVCLElBQUksUUFBUSxDQUFDLEdBQVQsQ0FBYSxTQUFiLE1BQTRCLE1BQWhDLEVBQXdDO1FBQ3RDO1FBQ0EsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0MsR0FBaEMsQ0FBb0M7VUFBRSxPQUFPLEVBQUU7UUFBWCxDQUFwQztRQUNBLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLEdBQS9CLENBQW1DO1VBQUUsT0FBTyxFQUFFO1FBQVgsQ0FBbkM7UUFDQSxRQUFRLENBQUMsR0FBVCxDQUFhLFNBQWIsRUFBd0IsT0FBeEI7O1FBQ0EsSUFBSSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVosTUFBMkIsTUFBL0IsRUFBdUM7VUFDckM7VUFDQSxZQUFZO1FBQ2IsQ0FIRCxNQUdPO1VBQ0w7VUFDQSxpQkFBaUI7UUFDbEI7TUFDRixDQVpELE1BWU87UUFDTCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQyxHQUFoQyxDQUFvQztVQUFFLE9BQU8sRUFBRTtRQUFYLENBQXBDO1FBQ0EsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0IsR0FBL0IsQ0FBbUM7VUFBRSxPQUFPLEVBQUU7UUFBWCxDQUFuQztRQUNBLFFBQVEsQ0FBQyxHQUFULENBQWEsU0FBYixFQUF3QixNQUF4Qjs7UUFDQSxJQUFJLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixNQUEyQixNQUEvQixFQUF1QztVQUNyQztVQUNBLE1BQU07UUFDUCxDQUhELE1BR087VUFDTDtVQUNBLFdBQVc7UUFDWjtNQUNGO0lBQ0YsQ0F6QkQ7RUEwQkQsQ0E5RFk7O0VBK0RiO0VBQ0EsY0FBYyxFQUFFLDBCQUFZO0lBQzFCO0lBQ0EsYUFBYSxDQUFDLEtBQWQsQ0FBb0IsWUFBWTtNQUM5QixjQUFjLENBQUMsR0FBZixDQUFtQjtRQUFFLE9BQU8sRUFBRTtNQUFYLENBQW5CO01BQ0EsZ0JBQWdCLENBQUMsR0FBakIsQ0FBcUI7UUFBRSxPQUFPLEVBQUU7TUFBWCxDQUFyQixFQUY4QixDQUc5Qjs7TUFDQSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQWI7TUFDQSxTQUFTLENBQUMsR0FBVixDQUFjO1FBQUUsUUFBUSxFQUFFLE9BQVo7UUFBcUIsR0FBRyxFQUFFLENBQUMsR0FBRCxHQUFPO01BQWpDLENBQWQ7SUFDRCxDQU5ELEVBRjBCLENBUzFCOztJQUNBLGNBQWMsQ0FBQyxLQUFmLENBQXFCLFlBQVk7TUFDL0IsY0FBYyxDQUFDLEdBQWYsQ0FBbUI7UUFBRSxPQUFPLEVBQUU7TUFBWCxDQUFuQjtNQUNBLGdCQUFnQixDQUFDLEdBQWpCLENBQXFCO1FBQUUsT0FBTyxFQUFFO01BQVgsQ0FBckIsRUFGK0IsQ0FHL0I7O01BQ0EsU0FBUyxDQUFDLEdBQVYsQ0FBYztRQUFFLFFBQVEsRUFBRSxFQUFaO1FBQWdCLEdBQUcsRUFBRTtNQUFyQixDQUFkO01BQ0EsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsR0FBbkI7SUFDRCxDQU5ELEVBVjBCLENBaUIxQjs7SUFDQSxhQUFhLENBQUMsS0FBZCxDQUFvQixZQUFZLENBQzlCO01BQ0E7SUFDRCxDQUhEO0VBSUQsQ0F0Rlk7O0VBdUZiO0VBQ0EsZ0JBQWdCLEVBQUUsNEJBQVk7SUFDNUIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLENBQWI7SUFDQSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBVCxDQUFhLFNBQWIsQ0FBZDtJQUNBLElBQUksUUFBSjs7SUFFQSxJQUFJLFlBQVksQ0FBQyxjQUFiLENBQTRCLFFBQTVCLENBQUosRUFBMkM7TUFDekM7TUFDQSxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixDQUE0QixRQUE1QixDQUFwQjtNQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksb0JBQVo7O01BQ0EsSUFBSSxhQUFhLEtBQUssSUFBdEIsRUFBNEI7UUFDMUI7UUFDQSxpQkFBaUI7TUFDbEIsQ0FIRCxNQUdPLElBQUksYUFBYSxLQUFLLEdBQXRCLEVBQTJCO1FBQ2hDO1FBQ0EsV0FBVztNQUNaLENBSE0sTUFHQSxJQUFJLGFBQWEsS0FBSyxHQUF0QixFQUEyQjtRQUNoQztRQUNBLFlBQVk7TUFDYixDQUhNLE1BR0EsSUFBSSxhQUFhLEtBQUssR0FBdEIsRUFBMkI7UUFDaEM7UUFDQSxNQUFNO01BQ1AsQ0FITSxNQUdBO1FBQ0w7UUFDQSxpQkFBaUI7TUFDbEI7SUFDRixDQXBCRCxNQW9CTztNQUNMO01BQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxrQkFBWjs7TUFDQSxJQUFJLE1BQU0sS0FBSyxPQUFYLElBQXNCLE9BQU8sS0FBSyxNQUF0QyxFQUE4QztRQUM1QztRQUNBLFFBQVEsR0FBRyxHQUFYO01BQ0QsQ0FIRCxNQUdPLElBQUksTUFBTSxLQUFLLE1BQVgsSUFBcUIsT0FBTyxLQUFLLE9BQXJDLEVBQThDO1FBQ25EO1FBQ0EsUUFBUSxHQUFHLEdBQVg7TUFDRCxDQUhNLE1BR0EsSUFBSSxNQUFNLEtBQUssT0FBWCxJQUFzQixPQUFPLEtBQUssT0FBdEMsRUFBK0M7UUFDcEQ7UUFDQSxRQUFRLEdBQUcsSUFBWDtNQUNELENBSE0sTUFHQTtRQUNMLFFBQVEsR0FBRyxJQUFYLENBREssQ0FFTDs7UUFDQSxpQkFBaUI7TUFDbEI7O01BQ0QsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsUUFBNUIsRUFBc0MsUUFBdEM7SUFDRDtFQUNGLENBcElZOztFQXFJYjtFQUNBLGFBQWEsRUFBRSx5QkFBWTtJQUN6QjtJQUNBLElBQUksWUFBWSxHQUFHLENBQ2pCLE1BQU0sQ0FBQyxVQUFQLENBQWtCLG9CQUFsQixDQURpQixFQUVqQixNQUFNLENBQUMsVUFBUCxDQUFrQixvQkFBbEIsQ0FGaUIsRUFHakIsTUFBTSxDQUFDLFVBQVAsQ0FBa0IscUJBQWxCLENBSGlCLENBQW5CLENBRnlCLENBUXpCOztJQUNBLFNBQVMsV0FBVCxHQUF1QjtNQUNyQixJQUFJLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0IsT0FBcEIsRUFBNkI7UUFDM0IsWUFBWTtNQUNiLENBRkQsTUFFTyxJQUFJLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0IsT0FBcEIsRUFBNkI7UUFDbEMsYUFBYTtNQUNkLENBRk0sTUFFQSxJQUFJLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0IsT0FBcEIsRUFBNkI7UUFDbEMsY0FBYztNQUNmLENBRk0sTUFFQTtRQUNMLE9BQU8sQ0FBQyxHQUFSLENBQVksMEJBQVo7TUFDRDtJQUNGLENBbkJ3QixDQW9CekI7OztJQUNBLFdBQVcsR0FyQmMsQ0FzQnpCOztJQUNBLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQWpDLEVBQXlDLENBQUMsRUFBMUMsRUFBOEM7TUFDNUMsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQixXQUFoQixDQUE0QixXQUE1QjtJQUNEO0VBQ0Y7QUFoS1ksQzs7Ozs7O0FDdkxmOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7QUFDQSxDQUFDLENBQUMsWUFBWTtFQUNaO0VBQ0EsZ0JBQVcsSUFBWCxHQUZZLENBR1o7OztFQUNBLHFCQUFnQixJQUFoQixHQUpZLENBS1o7OztFQUNBLHNCQUFjLElBQWQsR0FOWSxDQU9aOzs7RUFDQSxtQkFBYyxJQUFkOztFQUNBLG1CQUFjLElBQWQsR0FUWSxDQVVaOzs7RUFDQSxxQkFBZ0IsSUFBaEIsR0FYWSxDQVlaOzs7RUFDQSx3QkFBYSxJQUFiLEdBYlksQ0FjWjs7O0VBQ0EsdUJBQWtCLElBQWxCLEdBZlksQ0FnQlo7OztFQUNBLFVBQVUsQ0FBQyxZQUFZO0lBQ3JCLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQix1QkFBMUIsQ0FBbEI7O0lBQ0EsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBaEMsRUFBd0MsQ0FBQyxFQUF6QyxFQUE2QztNQUMzQyxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsaUJBQWYsQ0FBaUMsS0FBakMsR0FBeUMsQ0FBbkQ7TUFDQSxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsaUJBQWYsQ0FBaUMsTUFBakMsR0FBMEMsQ0FBcEQ7TUFDQSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsS0FBZixDQUFxQixRQUFyQixHQUFnQyxHQUFHLEdBQUcsSUFBdEM7TUFDQSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsS0FBZixDQUFxQixTQUFyQixHQUFpQyxHQUFHLEdBQUcsSUFBdkM7SUFDRDtFQUNGLENBUlMsRUFRUCxJQVJPLENBQVY7QUFTRCxDQTFCQSxDQUFEOzs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBQ2U7RUFDYixJQUFJLEVBQUUsZ0JBQVk7SUFDaEIsS0FBSyxpQkFBTDtJQUNBLEtBQUsscUJBQUw7SUFDQSxLQUFLLG1CQUFMO0VBQ0QsQ0FMWTtFQU1iO0VBQ0EscUJBQXFCLEVBQUUsaUNBQVksQ0FDakM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0QsQ0ExQlk7RUEyQmI7RUFDQSxpQkFBaUIsRUFBRSw2QkFBWTtJQUM3QixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIscUJBQTFCLENBQWI7SUFFQSxNQUFNLENBQUMsT0FBUCxDQUFlLFVBQUEsRUFBRSxFQUFJO01BQ25CO01BQ0EsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLGFBQUgsQ0FBaUIsR0FBakIsRUFBc0Isa0JBQXJDO01BQ0EsUUFBUSxDQUFDLFNBQVQsR0FBcUIsT0FBTyxRQUFRLENBQUMsU0FBaEIsR0FBNEIsR0FBakQsQ0FIbUIsQ0FJbkI7O01BQ0EsSUFBSSxFQUFFLENBQUMsYUFBSCxDQUFpQixzQkFBakIsQ0FBSixFQUE4QztRQUM1QztRQUNBLEVBQUUsQ0FBQyxhQUFILENBQWlCLElBQWpCLEVBQXVCLEtBQXZCLENBQTZCLE9BQTdCLEdBQXVDLE1BQXZDLENBRjRDLENBRzVDOztRQUNBLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBQWI7UUFDQSxNQUFNLENBQUMsS0FBUCxDQUFhLE9BQWIsR0FBdUIsUUFBdkI7UUFDQSxNQUFNLENBQUMsS0FBUCxDQUFhLE1BQWIsR0FBc0IsU0FBdEI7UUFDQSxNQUFNLENBQUMsU0FBUCxHQUNFLHlEQURGO1FBRUEsRUFBRSxDQUFDLFlBQUgsQ0FBZ0IsTUFBaEIsRUFBd0IsRUFBRSxDQUFDLGFBQUgsQ0FBaUIsR0FBakIsQ0FBeEIsRUFUNEMsQ0FXNUM7O1FBQ0EsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtRQUNBLE1BQU0sQ0FBQyxLQUFQLENBQWEsT0FBYixHQUF1QixNQUF2QjtRQUNBLE1BQU0sQ0FBQyxLQUFQLENBQWEsTUFBYixHQUFzQixTQUF0QjtRQUNBLE1BQU0sQ0FBQyxTQUFQLEdBQ0UsMERBREY7UUFFQSxFQUFFLENBQUMsWUFBSCxDQUFnQixNQUFoQixFQUF3QixFQUFFLENBQUMsYUFBSCxDQUFpQixHQUFqQixDQUF4QixFQWpCNEMsQ0FtQjVDOztRQUNBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFZO1VBQzNDLE1BQU0sQ0FBQyxLQUFQLENBQWEsT0FBYixHQUF1QixNQUF2QjtVQUNBLE1BQU0sQ0FBQyxLQUFQLENBQWEsT0FBYixHQUF1QixRQUF2QjtVQUNBLEVBQUUsQ0FBQyxhQUFILENBQWlCLElBQWpCLEVBQXVCLEtBQXZCLENBQTZCLE9BQTdCLEdBQXVDLE9BQXZDO1FBQ0QsQ0FKRCxFQXBCNEMsQ0EwQjVDOztRQUNBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFZO1VBQzNDLE1BQU0sQ0FBQyxLQUFQLENBQWEsT0FBYixHQUF1QixNQUF2QjtVQUNBLE1BQU0sQ0FBQyxLQUFQLENBQWEsT0FBYixHQUF1QixRQUF2QjtVQUNBLEVBQUUsQ0FBQyxhQUFILENBQWlCLElBQWpCLEVBQXVCLEtBQXZCLENBQTZCLE9BQTdCLEdBQXVDLE1BQXZDO1FBQ0QsQ0FKRDtNQUtELENBaENELE1BZ0NPO1FBQ0w7UUFDQSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QixDQUFiLENBRkssQ0FFdUM7OztRQUM1QyxNQUFNLENBQUMsS0FBUCxDQUFhLE9BQWIsR0FBdUIsUUFBdkI7UUFDQSxNQUFNLENBQUMsS0FBUCxDQUFhLFdBQWIsR0FBMkIsTUFBM0I7UUFDQSxNQUFNLENBQUMsU0FBUCxHQUFtQixFQUFuQjtRQUNBLEVBQUUsQ0FBQyxZQUFILENBQWdCLE1BQWhCLEVBQXdCLEVBQUUsQ0FBQyxhQUFILENBQWlCLEdBQWpCLENBQXhCO01BQ0Q7SUFDRixDQTdDRDtFQThDRCxDQTdFWTtFQThFYjtFQUNBLG1CQUFtQixFQUFFLCtCQUFZO0lBQy9CLElBQUksUUFBUSxDQUFDLFFBQVQsS0FBc0IsWUFBMUIsRUFBd0M7TUFDdEM7TUFDQTtNQUNBLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFULENBQWdCLE1BQWhCLENBQXVCLENBQXZCLENBQWIsQ0FIc0MsQ0FJdEM7O01BQ0EsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQVAsQ0FBYSxHQUFiLENBQVYsQ0FMc0MsQ0FNdEM7O01BQ0EsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUQsQ0FBbkI7TUFDQSxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQVQ7O01BQ0EsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBdkIsRUFBK0IsQ0FBQyxFQUFoQyxFQUFvQztRQUNsQztRQUNBLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsQ0FBRixDQUFNLFFBQU4sQ0FBZSxNQUFuQyxFQUEyQyxDQUFDLEVBQTVDLEVBQWdEO1VBQzlDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFELENBQUYsQ0FBTSxRQUFOLENBQWUsQ0FBZixFQUFrQixZQUFsQixDQUErQixZQUEvQixDQUFaOztVQUNBLElBQUksS0FBSyxLQUFLLE1BQWQsRUFBc0I7WUFDcEIsS0FBSyxHQUFHLE1BQVI7VUFDRDs7VUFDRCxJQUFJLEtBQUssS0FBSyxTQUFkLEVBQXlCO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFELENBQUYsQ0FBTSxRQUFOLENBQWUsQ0FBZixFQUFrQixLQUFsQixDQUF3QixPQUF4QixHQUFrQyxNQUFsQztVQUNEO1FBQ0Y7TUFDRjtJQUNGO0VBQ0Y7QUF0R1ksQzs7Ozs7Ozs7Ozs7OztBQ05mO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtlQUNlO0VBQ2IsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCLEtBQUssV0FBTDtJQUNBLEtBQUssY0FBTDtJQUNBLEtBQUssWUFBTDtJQUNBLEtBQUssY0FBTDtJQUNBLEtBQUssY0FBTDtJQUNBLE1BQU0sQ0FDSCxJQURILENBQ1E7TUFDSixLQUFLLEVBQUUsaUNBREg7TUFFSixFQUFFLEVBQUUsV0FGQTtNQUdKO01BQ0E7TUFFQTtNQUNBO01BQ0E7TUFDQSxlQUFlLEVBQUUsMkJBQVk7UUFDM0IsT0FBTyxDQUFDLEdBQVIsQ0FBWSw2QkFBWjtNQUNEO0lBWEcsQ0FEUixFQWNHLElBZEgsQ0FjUSxZQUFZO01BQ2hCO01BQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSx3QkFBWjtJQUNELENBakJIO0VBa0JELENBekJZO0VBMEJiO0VBQ0EsV0FBVyxFQUFFLHVCQUFZO0lBQ3ZCLElBQUksUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBSixFQUF5QztNQUN2QyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixFQUF1QyxLQUF2QyxDQUE2QyxPQUE3QyxHQUF1RCxPQUF2RDtJQUNEO0VBQ0YsQ0EvQlk7RUFnQ2IsY0FBYyxFQUFFLDBCQUFZO0lBQzFCLFNBQVMsYUFBVCxDQUF1QixLQUF2QixFQUE4QjtNQUM1QixJQUFJLEtBQUssQ0FBQyxNQUFOLEtBQWlCLGdDQUFyQixFQUF1RDtNQUN2RCxJQUFJLEVBQUUsUUFBTyxLQUFLLENBQUMsSUFBYixNQUFzQixRQUF0QixJQUFrQyxLQUFLLENBQUMsSUFBTixDQUFXLE1BQS9DLENBQUosRUFBNEQ7TUFFNUQsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQU4sQ0FBVyxNQUE5QjtNQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksNkJBQVosRUFBMkMsVUFBM0MsRUFMNEIsQ0FNNUI7TUFDQTtNQUNBO0lBQ0Q7O0lBRUQsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLGFBQW5DO0lBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSx1QkFBWixFQWIwQixDQWMxQjs7SUFDQSxNQUFNLENBQUMsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0MsYUFBdEM7RUFDRCxDQWhEWTtFQWlEYjtFQUNBLGNBQWMsRUFBRSwwQkFBWTtJQUMxQjtJQUNBLElBQ0UsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsS0FDQSxRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsQ0FGRixFQUdFO01BQ0EsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXRCLENBREEsQ0FFQTs7TUFDQSxJQUFJLG1CQUFtQixHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVYsQ0FBMUI7TUFFQSxNQUFNLENBQ0gsZ0JBREgsQ0FDb0I7UUFDaEIsS0FBSyxFQUFFLGlDQURTO1FBQzBCO1FBQzFDO1FBQ0EsSUFBSSxFQUFFLG1CQUhVO1FBR1c7UUFDM0IsWUFBWSxFQUFFLEtBSkUsQ0FJSzs7TUFKTCxDQURwQixFQU9HLElBUEgsQ0FPUSxVQUFVLEdBQVYsRUFBZTtRQUNuQjtRQUNBLGVBQWUsQ0FBQyxTQUFoQixHQUE0QixHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sS0FBbkMsQ0FGbUIsQ0FHbkI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0QsQ0FoQkgsV0FpQlMsVUFBVSxHQUFWLEVBQWU7UUFDcEI7UUFDQSxPQUFPLENBQUMsS0FBUixDQUFjLEdBQWQ7TUFDRCxDQXBCSDtJQXFCRDtFQUNGLENBbEZZO0VBbUZiO0VBQ0EsWUFBWSxFQUFFLHdCQUFZO0lBQ3hCLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLG9CQUF2QixDQUFuQjtJQUNBLElBQUksU0FBUyxHQUFHLENBQWhCO0lBQ0EsTUFBTSxDQUNILGlCQURILENBQ3FCO01BQ2pCLEtBQUssRUFBRSxpQ0FEVTtNQUN5QjtNQUMxQztNQUNBLFFBQVEsRUFBRSxTQUhPO01BR0k7TUFDckIsWUFBWSxFQUFFLEtBSkcsQ0FJSTs7SUFKSixDQURyQixFQU9HLElBUEgsQ0FPUSxVQUFVLEdBQVYsRUFBZTtNQUNuQixJQUFJLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQ3hCLHNCQUR3QixDQUExQjtNQUdBLElBQUksMEJBQTBCLEdBQUcsbUJBQW1CLENBQUMsYUFBckQ7TUFDQSwwQkFBMEIsQ0FBQyxXQUEzQixDQUF1QyxtQkFBdkMsRUFMbUIsQ0FNbkI7O01BQ0EsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxTQUFwQixFQUErQixDQUFDLEVBQWhDLEVBQW9DO1FBQ2xDLElBQUksR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLE9BQVgsRUFBb0I7VUFDbEIsSUFBSSxvQkFBb0IsR0FBRyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sT0FBbEM7VUFDQSxJQUFJLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBTyxJQUEvQjtVQUNBLElBQUksZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLEdBQTlCO1VBQ0EsSUFBSSxtQkFBbUIsR0FBRyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sTUFBakM7VUFDQSxJQUFJLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBTyxZQUEvQjtVQUNBLElBQUksZUFBZSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLEVBQW5DO1VBRUEsSUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUF6QjtVQUNBLGtCQUFrQixDQUFDLFNBQW5CLEdBQ0Usb0NBQ0EsbUJBREEsR0FFQSw2REFGQSxHQUdBLGlCQUhBLEdBSUEsNEJBSkEsR0FLQSxpQkFMQSxHQU1BLHFEQU5BLEdBT0EsZ0JBUEEsR0FRQSxlQVJBLEdBU0EsSUFUQSxHQVVBLG9CQVZBLEdBV0EsWUFaRjtVQWFBLFlBQVksQ0FBQyxNQUFiLENBQW9CLGtCQUFwQjtRQUNEO01BQ0Y7SUFDRixDQXhDSCxXQXlDUyxVQUFVLEdBQVYsRUFBZTtNQUNwQixPQUFPLENBQUMsS0FBUixDQUFjLEdBQWQ7SUFDRCxDQTNDSDtFQTRDRCxDQW5JWTtFQW9JYjtFQUNBLGNBQWMsRUFBRSwwQkFBWTtJQUMxQixJQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLENBQUosRUFBMkM7TUFDekMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBakI7TUFDQSxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixpQkFBdkIsQ0FBckI7TUFDQSxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixpQkFBdkIsQ0FBckI7TUFFQSxVQUFVLENBQUMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBWTtRQUMvQyxVQUFVLENBQUMsU0FBWCxDQUFxQixNQUFyQixDQUE0QixNQUE1QjtRQUNBLGNBQWMsQ0FBQyxTQUFmLENBQXlCLE1BQXpCLENBQWdDLFlBQWhDO1FBQ0EsY0FBYyxDQUFDLFNBQWYsQ0FBeUIsTUFBekIsQ0FBZ0MsWUFBaEM7O1FBRUEsSUFBSSxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixLQUFpQyxNQUFyQyxFQUE2QztVQUMzQyxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixHQUErQixPQUEvQjtVQUNBLGNBQWMsQ0FBQyxLQUFmLENBQXFCLE9BQXJCLEdBQStCLE1BQS9CO1FBQ0QsQ0FIRCxNQUdPO1VBQ0w7VUFDQSxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixHQUErQixNQUEvQjtVQUNBLGNBQWMsQ0FBQyxLQUFmLENBQXFCLE9BQXJCLEdBQStCLE9BQS9CO1FBQ0Q7TUFDRixDQWJEO0lBY0Q7RUFDRjtBQTFKWSxDOzs7Ozs7Ozs7Ozs7QUNoQmY7QUFDQTtBQUNBO0FBQ0E7QUFFQyxJQUFJLGFBQWEsR0FBRztFQUNqQixJQUFJLEVBQUUsZ0JBQVc7SUFDYixLQUFLLE1BQUw7SUFDQSxLQUFLLFlBQUw7RUFDSCxDQUpnQjtFQUtqQixNQUFNLEVBQUUsa0JBQVc7SUFDYjtJQUNGLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxNQUFWLENBQWlCLFlBQVU7TUFFdkI7TUFDQSxTQUFTLEdBQUcsR0FBWixLQUFvQixDQUFwQixHQUF3QixDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsR0FBYixDQUFpQixTQUFqQixFQUE0QixPQUE1QixDQUF4QixHQUErRCxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsR0FBYixDQUFpQixTQUFqQixFQUE0QixNQUE1QixDQUEvRDtJQUNILENBSkQ7RUFLSCxDQVpnQjtFQWFqQixZQUFZLEVBQUUsd0JBQVc7SUFDckI7SUFDQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsS0FBYixDQUFtQixZQUFVO01BQ3pCLElBQUksTUFBTSxDQUFDLFdBQVgsRUFBd0I7UUFDcEIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsQ0FBckI7TUFDSCxDQUZELE1BRU8sSUFBSSxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUE3QixFQUF3QztRQUMzQyxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUF6QixHQUFxQyxDQUFyQztNQUNILENBRk0sTUFFQSxJQUFJLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBbEIsRUFBNkI7UUFDaEMsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLEdBQTBCLENBQTFCO01BQ0g7SUFFSixDQVREO0VBVUg7QUF6QmdCLENBQXBCLEMsQ0E0QkQ7Ozs7QUFDQSxTQUFTLFNBQVQsR0FBcUI7RUFDakIsT0FBTztJQUNQLElBQUksRUFBRSxNQUFNLENBQUMsV0FBUCxJQUFzQixRQUFRLENBQUMsZUFBVCxDQUF5QixVQUEvQyxJQUE2RCxRQUFRLENBQUMsSUFBVCxDQUFjLFVBQTNFLElBQXVGLENBRHRGO0lBRVAsR0FBRyxFQUFFLE1BQU0sQ0FBQyxXQUFQLElBQXNCLFFBQVEsQ0FBQyxlQUFULENBQXlCLFNBQS9DLElBQTRELFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBMUUsSUFBdUY7RUFGckYsQ0FBUDtBQUlILEMsQ0FHRDs7Ozs7Ozs7O2VDMUNlO0VBQ2IsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCLEtBQUssTUFBTDtFQUNELENBSFk7RUFJYixNQUFNLEVBQUUsa0JBQVk7SUFDbEIsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIscUJBQXZCLENBQWhCOztJQUVBLElBQUksU0FBSixFQUFlO01BQ2IsU0FBUyxDQUFDLE9BQVYsR0FBb0IsWUFBWTtRQUM5QixTQUFTLENBQUMsUUFBVixHQUFxQixJQUFyQixDQUQ4QixDQUU5Qjs7UUFDQSxhQUFhO1FBQ2IsS0FBSyxPQUFMLEdBQWUsSUFBZjtNQUNELENBTEQ7O01BT0EsU0FBUyxDQUFDLFNBQVYsR0FBc0IsWUFBWTtRQUNoQyxJQUFJLEtBQUssQ0FBQyxPQUFOLElBQWlCLEVBQXJCLEVBQXlCLE9BQU8sS0FBUDtNQUMxQixDQUZEO0lBR0Q7O0lBRUQsU0FBUyxXQUFULENBQXFCLGNBQXJCLEVBQXFDO01BQ25DO01BQ0EsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIscUJBQXZCLENBQWY7O01BQ0EsUUFBUSxDQUFDLE9BQVQsR0FBbUIsWUFBWTtRQUM3QixTQUFTLENBQUMsS0FBVixHQUFrQixFQUFsQjtRQUNBLGNBQWMsQ0FBQyxTQUFmLEdBQTJCLEVBQTNCO1FBQ0EsU0FBUyxDQUFDLFdBQVYsR0FBd0IsUUFBeEI7UUFDQSxTQUFTLENBQUMsS0FBVjtNQUNELENBTEQ7SUFNRDs7SUFFRCxJQUFJLFVBQVUsR0FBRyxTQUFiLFVBQWEsQ0FBVSxJQUFWLEVBQWdCLFNBQWhCLEVBQTJCLFVBQTNCLEVBQXVDO01BQ3REOztNQUNBLElBQUksR0FBRyxHQUFHLHlDQUFWO01BQ0EsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBYjtNQUNBLElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFVBQXhCLENBQXJCO01BRUEsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFKLEVBQVY7TUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLEtBQVQsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEI7TUFDQSxHQUFHLENBQUMsSUFBSjs7TUFDQSxHQUFHLENBQUMsa0JBQUosR0FBeUIsWUFBWTtRQUNuQyxJQUFJLEdBQUcsQ0FBQyxVQUFKLEtBQW1CLENBQW5CLElBQXdCLEdBQUcsQ0FBQyxNQUFKLEtBQWUsR0FBM0MsRUFBZ0Q7VUFDOUM7VUFDQSxNQUFNLENBQUMsUUFBUCxHQUFrQixLQUFsQixDQUY4QyxDQUc5Qzs7VUFDQSxNQUFNLENBQUMsS0FBUDtVQUVBLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFkO1VBQ0EsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLGVBQWY7VUFDQSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsb0JBQUwsQ0FBMEIsT0FBMUIsQ0FBWDtVQUNBLElBQUksS0FBSyxHQUFHLEVBQVo7O1VBQ0EsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTCxHQUFjLENBQTNCLEVBQThCLENBQUMsSUFBSSxDQUFuQyxFQUFzQyxDQUFDLEVBQXZDLEVBQTJDO1lBQ3pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFELENBQWY7WUFDQSxLQUFLLENBQUMsSUFBTixDQUFXO2NBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxvQkFBTCxDQUEwQixPQUExQixFQUFtQyxDQUFuQyxFQUFzQyxTQURwQztjQUVULE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQUwsQ0FBMEIsU0FBMUIsRUFBcUMsQ0FBckMsRUFBd0MsU0FGeEM7Y0FHVCxHQUFHLEVBQUUsSUFBSSxDQUFDLG9CQUFMLENBQTBCLEtBQTFCLEVBQWlDLENBQWpDLEVBQW9DO1lBSGhDLENBQVg7VUFLRDs7VUFDRCxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBWTtZQUMzQyxJQUFJLEdBQUcsR0FBRyxzQkFBVjtZQUNBLElBQUksUUFBUSxHQUFHLEtBQUssS0FBTCxDQUNaLElBRFksR0FFWixXQUZZLEdBR1osS0FIWSxDQUdOLFNBSE0sQ0FBZjtZQUlBLGNBQWMsQ0FBQyxTQUFmLEdBQTJCLEVBQTNCOztZQUNBLElBQUksS0FBSyxLQUFMLENBQVcsSUFBWCxHQUFrQixNQUFsQixJQUE0QixDQUFoQyxFQUFtQztjQUNqQztZQUNELENBVDBDLENBVzNDOzs7WUFDQSxLQUFLLENBQUMsT0FBTixDQUFjLFVBQVUsSUFBVixFQUFnQjtjQUM1QixJQUFJLE9BQU8sR0FBRyxJQUFkO2NBQ0EsSUFBSSxhQUFhLEdBQUcsRUFBcEI7O2NBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFOLElBQWUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFYLE9BQXNCLEVBQXpDLEVBQTZDO2dCQUMzQyxJQUFJLENBQUMsS0FBTCxHQUFhLFVBQWI7Y0FDRDs7Y0FDRCxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQVgsRUFBdEI7Y0FDQSxJQUFJLFVBQVUsR0FBRyxlQUFlLENBQUMsV0FBaEIsRUFBakI7Y0FDQSxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFMLENBQ3JCLElBRHFCLEdBRXJCLE9BRnFCLENBRWIsVUFGYSxFQUVELEVBRkMsQ0FBeEI7Y0FHQSxJQUFJLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxXQUFsQixFQUFuQjtjQUNBLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFwQjtjQUNBLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBbkI7Y0FDQSxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQXJCO2NBQ0EsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFuQixDQWY0QixDQWdCNUI7O2NBQ0EsSUFBSSxZQUFZLEtBQUssRUFBckIsRUFBeUI7Z0JBQ3ZCLFFBQVEsQ0FBQyxPQUFULENBQWlCLFVBQVUsT0FBVixFQUFtQixDQUFuQixFQUFzQjtrQkFDckMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxPQUFYLENBQW1CLE9BQW5CLENBQWQ7a0JBQ0EsYUFBYSxHQUFHLFlBQVksQ0FBQyxPQUFiLENBQXFCLE9BQXJCLENBQWhCOztrQkFFQSxJQUFJLFdBQVcsR0FBRyxDQUFkLElBQW1CLGFBQWEsR0FBRyxDQUF2QyxFQUEwQztvQkFDeEMsT0FBTyxHQUFHLEtBQVY7a0JBQ0QsQ0FGRCxNQUVPO29CQUNMLElBQUksYUFBYSxHQUFHLENBQXBCLEVBQXVCO3NCQUNyQixhQUFhLEdBQUcsQ0FBaEI7b0JBQ0Q7O29CQUNELElBQUksQ0FBQyxJQUFJLENBQVQsRUFBWTtzQkFDVixXQUFXLEdBQUcsYUFBZDtvQkFDRCxDQU5JLENBT0w7O2tCQUNEO2dCQUNGLENBZkQ7Y0FnQkQsQ0FqQkQsTUFpQk87Z0JBQ0wsT0FBTyxHQUFHLEtBQVY7Y0FDRCxDQXBDMkIsQ0FxQzVCOzs7Y0FDQSxJQUFJLE9BQUosRUFBYTtnQkFDWCxHQUFHLElBQ0QsaUNBQ0EsUUFEQSxHQUVBLElBRkEsR0FHQSwrQkFIQSxHQUlBLGVBSkEsR0FLQSxTQU5GO2dCQVFBLElBQUksT0FBTyxHQUFHLGlCQUFkOztnQkFDQSxJQUFJLFdBQVcsSUFBSSxDQUFuQixFQUFzQjtrQkFDcEI7a0JBQ0EsSUFBSSxLQUFLLEdBQUcsV0FBVyxHQUFHLEVBQTFCO2tCQUNBLElBQUksR0FBRyxHQUFHLFdBQVcsR0FBRyxFQUF4Qjs7a0JBRUEsSUFBSSxLQUFLLEdBQUcsQ0FBWixFQUFlO29CQUNiLEtBQUssR0FBRyxDQUFSO2tCQUNEOztrQkFFRCxJQUFJLEtBQUssSUFBSSxDQUFiLEVBQWdCO29CQUNkLEdBQUcsR0FBRyxFQUFOO2tCQUNEOztrQkFFRCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBbEIsRUFBMEI7b0JBQ3hCLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBZDtrQkFDRCxDQWZtQixDQWlCcEI7OztrQkFDQSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsRUFBc0IsR0FBdEIsQ0FBcEIsQ0FsQm9CLENBb0JwQjs7a0JBQ0EsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsVUFBVSxPQUFWLEVBQW1CO29CQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQUosQ0FBVyxPQUFYLEVBQW9CLElBQXBCLENBQVg7b0JBQ0EsYUFBYSxHQUFHLGFBQWEsQ0FBQyxPQUFkLENBQ2QsSUFEYyxFQUVkLGdDQUFnQyxPQUFoQyxHQUEwQyxPQUY1QixDQUFoQjtrQkFJRCxDQU5EO2tCQVFBLEdBQUcsSUFDRCw4QkFBOEIsYUFBOUIsR0FBOEMsU0FEaEQ7Z0JBRUQ7O2dCQUNELEdBQUcsSUFBSSxXQUFQO2NBQ0Q7WUFDRixDQWxGRDtZQW1GQSxHQUFHLElBQUksT0FBUDs7WUFDQSxJQUFJLEdBQUcsQ0FBQyxPQUFKLENBQVksTUFBWixNQUF3QixDQUFDLENBQTdCLEVBQWdDO2NBQzlCLGNBQWMsQ0FBQyxTQUFmLEdBQ0UsR0FBRyxHQUNILHNEQUZGO1lBR0QsQ0FKRCxNQUlPO2NBQ0wsY0FBYyxDQUFDLFNBQWYsR0FBMkIsR0FBRyxHQUFHLEdBQWpDO1lBQ0Q7O1lBRUQsV0FBVyxDQUFDLGNBQUQsQ0FBWDtVQUNELENBekdEO1FBMEdEO01BQ0YsQ0E5SEQ7SUErSEQsQ0F4SUQ7O0lBMElBLElBQUksYUFBYSxHQUFHLFNBQWhCLGFBQWdCLEdBQVk7TUFDOUIsSUFBSSxJQUFJLEdBQUcsYUFBWDtNQUNBLFVBQVUsQ0FBQyxJQUFELEVBQU8sb0JBQVAsRUFBNkIscUJBQTdCLENBQVY7SUFDRCxDQUhELENBcktrQixDQTBLbEI7OztJQUNBLElBQUksd0JBQXdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBL0I7O0lBQ0EsSUFBSSxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkIsQ0FBSixFQUE4QztNQUM1QyxJQUFJLDJCQUEyQixHQUM3QixRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkIsQ0FERjtNQUVBLDJCQUEyQixDQUFDLGdCQUE1QixDQUE2QyxPQUE3QyxFQUFzRCxZQUFZO1FBQ2hFLElBQUksUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsS0FBdEMsQ0FBNEMsT0FBNUMsS0FBd0QsT0FBNUQsRUFBcUU7VUFDbkUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsS0FBdEMsQ0FBNEMsT0FBNUMsR0FBc0QsTUFBdEQ7UUFDRCxDQUZELE1BRU87VUFDTCxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixFQUFzQyxLQUF0QyxDQUE0QyxPQUE1QyxHQUFzRCxPQUF0RCxDQURLLENBRUw7UUFDRDtNQUNGLENBUEQ7SUFRRDs7SUFFRCx3QkFBd0IsQ0FBQyxnQkFBekIsQ0FBMEMsT0FBMUMsRUFBbUQsWUFBWTtNQUM3RCxJQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLEtBQXRDLENBQTRDLE9BQTVDLEtBQXdELE9BQTVELEVBQXFFO1FBQ25FLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLEtBQXRDLENBQTRDLE9BQTVDLEdBQXNELE1BQXREO01BQ0QsQ0FGRCxNQUVPO1FBQ0wsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsS0FBdEMsQ0FBNEMsT0FBNUMsR0FBc0QsT0FBdEQsQ0FESyxDQUVMO01BQ0Q7SUFDRixDQVBEO0lBU0EsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7SUFDQSxZQUFZLENBQUMsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBWTtNQUNqRCxJQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLEtBQXRDLENBQTRDLE9BQTVDLEtBQXdELE9BQTVELEVBQXFFO1FBQ25FLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLEtBQXRDLENBQTRDLE9BQTVDLEdBQXNELE1BQXREO01BQ0QsQ0FGRCxNQUVPO1FBQ0wsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsS0FBdEMsQ0FBNEMsT0FBNUMsR0FBc0QsT0FBdEQ7TUFDRDtJQUNGLENBTkQ7RUFPRDtBQTlNWSxDOzs7Ozs7Ozs7OztBQ0FmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVlO0VBQ1gsSUFBSSxFQUFFLGdCQUFXO0lBQ2IsS0FBSyxLQUFMO0VBQ0gsQ0FIVTtFQUlYLEtBQUssRUFBRSxpQkFBVztJQUVsQjtJQUNBLFNBQVMsT0FBVCxDQUFpQixJQUFqQixFQUF1QixNQUF2QixFQUErQjtNQUM3QixJQUFJLE9BQU8sTUFBUCxJQUFrQixRQUF0QixFQUFnQztRQUN4QixJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTCxJQUFnQixJQUFJLENBQUMscUJBQXJCLElBQThDLElBQUksQ0FBQyxrQkFBbkQsSUFBeUUsSUFBSSxDQUFDLGlCQUFwRzs7UUFFQSxJQUFJLENBQUMsQ0FBQyxlQUFOLEVBQXVCO1VBQ25CLE9BQU8sSUFBUCxFQUFhO1lBQ2IsSUFBSSxlQUFlLENBQUMsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkIsTUFBM0IsQ0FBSixFQUF3QztjQUN0QyxPQUFPLElBQVA7WUFDRCxDQUZELE1BRU87Y0FDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQVo7WUFDRDtVQUNBO1FBQ0o7O1FBQ0QsT0FBTyxLQUFQO01BQ0gsQ0FiTCxNQWFXO1FBQ0gsT0FBTyxJQUFQLEVBQWE7VUFDYixJQUFJLElBQUksSUFBSSxNQUFaLEVBQW9CO1lBQ2hCLE9BQU8sSUFBUDtVQUNILENBRkQsTUFFTztZQUNMLElBQUksR0FBRyxJQUFJLENBQUMsYUFBWjtVQUNEO1FBQ0E7O1FBQ0QsT0FBTyxLQUFQO01BQ0g7SUFDSixDQTNCZSxDQTZCaEI7OztJQUNBLE1BQU0sQ0FBQyxlQUFQLEdBQXlCLFVBQVMsSUFBVCxFQUFlLE9BQWYsRUFBd0I7TUFDN0M7TUFDQSxJQUFJLElBQUksR0FBRyxJQUFYO01BQ0EsSUFBSSxDQUFDLElBQUwsR0FBWSxJQUFJLElBQUksbUJBQXBCO01BRUE7QUFDVjtNQUVNOztNQUNBLElBQUksQ0FBQyxRQUFMLEdBQWdCLFlBQVc7UUFDdkIsSUFBSSxPQUFKLENBRHVCLENBRXZCOztRQUNBLElBQUksUUFBUSxDQUFDLGFBQWIsRUFBNEI7VUFDNUIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsMkJBQXZCLEtBQXVELFFBQVEsQ0FBQyxhQUFULENBQXVCLDRCQUF2QixDQUFyRSxFQUEySDtZQUNySCxPQUFPLE9BQU8sQ0FBQyxZQUFSLENBQXFCLFNBQXJCLENBQVA7VUFDRCxDQUZMLE1BRVcsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZCxFQUErQztZQUNwRCxPQUFPLE9BQU8sQ0FBQyxTQUFmO1VBQ0Q7UUFDTjs7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFoQjtNQUNDLENBWEgsQ0FUaUQsQ0FzQi9DOzs7TUFDQSxJQUFJLENBQUMsUUFBTCxHQUFnQixZQUFXO1FBQ3pCLElBQUksT0FBSixDQUR5QixDQUV6Qjs7UUFDQSxJQUFJLFFBQVEsQ0FBQyxhQUFiLEVBQTRCO1VBQ3hCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLDJCQUF2QixLQUF1RCxRQUFRLENBQUMsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBckUsRUFBMkg7WUFDekgsT0FBTyxPQUFPLENBQUMsWUFBUixDQUFxQixTQUFyQixDQUFQO1VBQ0QsQ0FGRCxNQUdJLE9BQU8sRUFBUDtRQUNMLENBTEgsTUFNTSxPQUFPLEVBQVA7TUFDUCxDQVZELENBdkIrQyxDQW1DL0M7OztNQUNBLElBQUksQ0FBQyxjQUFMLEdBQXNCLFlBQVc7UUFDL0IsSUFBSSxPQUFKLENBRCtCLENBRS9COztRQUNBLElBQUksUUFBUSxDQUFDLGFBQWIsRUFBNEI7VUFDeEIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUNBQXZCLEtBQTZELFFBQVEsQ0FBQyxhQUFULENBQXVCLGtDQUF2QixDQUE3RCxJQUEySCxRQUFRLENBQUMsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBekksRUFBNkw7WUFDM0wsT0FBTyxPQUFPLENBQUMsWUFBUixDQUFxQixTQUFyQixDQUFQO1VBQ0QsQ0FGRCxNQUdFLE9BQU8sRUFBUDtRQUNILENBTEgsTUFLUztVQUNILElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxTQUF0QyxDQUFnRCxhQUFoRCxDQUFkLEVBQ0ksT0FBTyxPQUFPLENBQUMsWUFBUixDQUFxQixTQUFyQixDQUFQLENBREosS0FHSSxPQUFPLEVBQVA7UUFDUDtNQUNKLENBZEQsQ0FwQytDLENBb0QvQzs7O01BQ0EsSUFBSSxDQUFDLEtBQUwsR0FBYTtRQUNULFNBQVMsZUFBVSxFQUFWLEVBQWM7VUFDckIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDRSxJQUFJLEdBQUcsR0FBRyxrREFDUixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBWCxDQURWLEdBRVIsT0FGUSxHQUVBLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBRmxCLEdBR1IsT0FIUSxHQUdBLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBSDVCO1VBSUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO1FBQ0gsQ0FSUTtRQVNULFVBQVUsZ0JBQVUsRUFBVixFQUFjO1VBQ3RCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxFQUFELENBQTFCO1VBQ0UsSUFBSSxNQUFNLEdBQUcsbUVBQWlFLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQWhHO1VBQ0YsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLGFBQUgsQ0FBaUIsNkJBQWpCLENBQWpCO1VBQ0EsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLHNCQUFYLENBQWtDLDhCQUFsQyxFQUFrRSxDQUFsRSxDQUFWO1VBQ0EsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLHNCQUFYLENBQWtDLG1CQUFsQyxFQUF1RCxDQUF2RCxDQUFiOztVQUVFLElBQUksR0FBSixFQUFTO1lBQ2IsR0FBRyxDQUFDLE1BQUo7VUFDRCxDQUZLLE1BRUMsSUFBRyxNQUFILEVBQVc7WUFDaEIsTUFBTSxDQUFDLE1BQVA7VUFDSyxDQUZBLE1BRU07WUFDWCxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVDtZQUNBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLG1CQUFuQjtZQUNBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFlBQW5CO1lBQ0EsTUFBTSxDQUFDLEtBQVAsR0FBZSxtQkFBZjtZQUVRLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFOO1lBQ0EsR0FBRyxDQUFDLEdBQUosR0FBVSxNQUFWO1lBQ0EsR0FBRyxDQUFDLEdBQUosR0FBVSx1QkFBVjtZQUNSLEdBQUcsQ0FBQyxZQUFKLENBQWlCLE9BQWpCLEVBQXlCLDhCQUF6Qjs7WUFDQSxHQUFHLENBQUMsTUFBSixHQUFhLEdBQUcsQ0FBQyxPQUFKLEdBQWMsWUFBWTtjQUNyQyxJQUFJLE1BQU0sQ0FBQyxXQUFYLEVBQXdCO2dCQUN0QixNQUFNLENBQUMsTUFBUDtnQkFDQSxVQUFVLENBQUMsV0FBWCxDQUF1QixHQUF2QjtjQUNEO1lBQ0YsQ0FMRDs7WUFNQSxVQUFVLENBQUMsV0FBWCxDQUF1QixNQUF2QjtVQUNLO1FBQ0osQ0F0Q1E7UUF1Q1gsVUFBVSxnQkFBVSxFQUFWLEVBQWM7VUFDcEIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDQSxJQUFJLEdBQUcsR0FBRywrQ0FDUixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBWCxDQURWLEdBRVIsUUFGUSxHQUVDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBRm5CLEdBR1IsU0FIUSxHQUdFLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBSDlCO1VBSUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO1FBQ0gsQ0E5Q1U7UUErQ1gsVUFBVSxnQkFBVSxFQUFWLEVBQWM7VUFDcEIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDQSxJQUFJLEdBQUcsR0FBRyxzRUFDUixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBWCxDQURWLEdBRVIsT0FGUSxHQUVBLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBRmxCLEdBR1IsUUFIUSxHQUdDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBSG5CLEdBSVIsUUFKUSxHQUlFLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxXQUFYLENBSjlCO1VBS0EsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO1FBQ0gsQ0F2RFU7UUF3RFgsVUFBVSxnQkFBVSxFQUFWLEVBQWM7VUFDcEIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDQSxJQUFJLEdBQUcsR0FBRyxpREFDUixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBWCxDQURWLEdBRVIsZUFGUSxHQUVRLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBRjFCLEdBR1IsT0FIUSxHQUdBLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBSGxCLEdBSVIsZUFKUSxHQUlTLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxXQUFYLENBSnJDO1VBS0EsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO1FBQ0gsQ0FoRVU7UUFrRVQsVUFBVyxnQkFBUyxFQUFULEVBQWE7VUFDdEIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDRSxJQUFJLEdBQUcsR0FBRyxxQkFBcUIsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FBdkMsR0FBMkQsOENBQTNELEdBQTRHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQTlILEdBQWdKLEtBQWhKLEdBQXdKLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxXQUFYLENBQXBMO1VBRUEsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsR0FBdkI7UUFDSCxDQXZFUTtRQXdFVCxXQUFZLGlCQUFTLEVBQVQsRUFBYTtVQUN2QixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFWLEdBQXFCLGdDQUEvQjtVQUNBLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBWCxDQUFsQixHQUFzQyxPQUF0QyxHQUFnRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBWCxDQUF6RTtVQUVOLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWDtRQUNHLENBOUVRO1FBK0VULGFBQWMsbUJBQVMsRUFBVCxFQUFhO1VBQ3pCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxFQUFELENBQTFCO1VBQ0UsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVYsR0FBcUIsc0RBQS9CO1VBQ0EsR0FBRyxJQUFJLFlBQVksa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FBckM7VUFDQSxHQUFHLElBQUksVUFBVSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBWCxDQUFuQztVQUNBLEdBQUcsSUFBSSxrQkFBa0Isa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FBM0M7VUFFTixJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDRyxDQXZGUTtRQXdGVCxZQUFhLGtCQUFTLEVBQVQsRUFBYTtVQUN4QixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFWLEdBQXFCLDZCQUEvQjtVQUNBLEdBQUcsSUFBSSxPQUFPLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQWhDO1VBQ0EsR0FBRyxJQUFJLFlBQVksa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FBckM7VUFFTixJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDRyxDQS9GUTtRQWdHVCxjQUFlLG9CQUFTLEVBQVQsRUFBYTtVQUMxQixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFWLEdBQXFCLHdCQUEvQjtVQUNBLEdBQUcsSUFBSSxTQUFTLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQWxDO1VBRU4sSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO1FBQ0csQ0F0R1E7UUF1R1QsVUFBVyxnQkFBUyxFQUFULEVBQWE7VUFDdEIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDRSxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBVixHQUFxQix3QkFBL0I7VUFDQSxHQUFHLElBQUksU0FBUyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBWCxDQUFsQztVQUNBLEdBQUcsSUFBSSxZQUFZLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBQXJDO1VBRU4sSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO1FBQ0csQ0E5R1E7UUErR1QsYUFBYyxtQkFBUyxFQUFULEVBQWE7VUFDekIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDRSxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBVixHQUFxQixtQkFBL0I7VUFDQSxHQUFHLElBQUksU0FBUyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBWCxDQUFsQztVQUNBLEdBQUcsSUFBSSxZQUFZLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBQXJDO1VBQ0EsR0FBRyxJQUFJLFlBQVksa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVgsQ0FBckM7VUFFTixJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDRyxDQXZIUTtRQXdIVDtRQUNKO1FBQ0k7UUFDQTtRQUNBO1FBQ0E7UUFDSjtRQUNBO1FBQ0k7UUFDQSxlQUFnQixxQkFBUyxFQUFULEVBQWE7VUFDM0IsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDRSxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBVixHQUFxQiw2QkFBL0I7VUFDQSxHQUFHLElBQUksU0FBUyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBWCxDQUFsQztVQUNBLEdBQUcsSUFBSSxZQUFZLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBQXJDO1VBRU4sSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO1FBQ0csQ0F4SVE7UUF5SVQsWUFBYSxrQkFBUyxFQUFULEVBQWE7VUFDeEIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDRSxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBVixHQUFxQix5Q0FBL0I7VUFDQSxHQUFHLElBQUksVUFBVSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBWCxDQUFuQztVQUNBLEdBQUcsSUFBSSxZQUFZLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBQXJDO1VBQ0EsR0FBRyxJQUFJLGFBQWEsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE1BQVgsQ0FBdEM7VUFFTixJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDRyxDQWpKUTtRQWtKVDtRQUNKO1FBQ0k7UUFDQTtRQUNBO1FBQ0o7UUFDQTtRQUNJO1FBQ0E7UUFDSjtRQUNJO1FBQ0E7UUFDQTtRQUNKO1FBQ0E7UUFDSTtRQUNBLGFBQWMsbUJBQVMsRUFBVCxFQUFhO1VBQ3pCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxFQUFELENBQTFCO1VBQ0UsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVYsR0FBcUIsc0JBQS9CO1VBQ0EsR0FBRyxJQUFJLFlBQVksa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQVgsQ0FBckM7VUFFTixJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDRyxDQXhLUTtRQXlLVCxVQUFXLGdCQUFTLEVBQVQsRUFBYTtVQUN0QixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFWLEdBQXFCLDBCQUEvQjtVQUNBLEdBQUcsSUFBSSxRQUFRLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQWpDO1VBQ0EsR0FBRyxJQUFJLFFBQVEsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FBakM7VUFFTixJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDRyxDQWhMUTtRQWlMVDtRQUNKO1FBQ0k7UUFDQTtRQUNBO1FBQ0E7UUFDSjtRQUNBO1FBQ0k7UUFDQTtRQUNKO1FBQ0k7UUFDQTtRQUNBO1FBQ0o7UUFDQTtRQUNJO1FBQ0E7UUFDSjtRQUNJO1FBQ0E7UUFDQTtRQUNBO1FBQ0o7UUFDQTtRQUNJO1FBQ0EsWUFBYSxrQkFBUyxFQUFULEVBQWE7VUFDeEIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDRSxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBVixHQUFxQiwrQkFBL0I7VUFDQSxHQUFHLElBQUksU0FBUyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBWCxDQUFsQztVQUNBLEdBQUcsSUFBSSxZQUFZLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBQXJDO1VBRU4sSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO1FBQ0csQ0FsTlE7UUFtTlQsY0FBZSxvQkFBUyxFQUFULEVBQWE7VUFDMUIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDRSxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBVixHQUFxQiwyQkFBL0I7VUFDQSxHQUFHLElBQUksU0FBUyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBWCxDQUFsQztVQUNBLEdBQUcsSUFBSSxZQUFZLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBQXJDO1VBRU4sSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO1FBQ0csQ0ExTlE7UUEyTlQsYUFBYyxtQkFBUyxFQUFULEVBQWE7VUFDekIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDRSxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBVixHQUFxQix5QkFBL0I7VUFDQSxHQUFHLElBQUksU0FBUyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBWCxDQUFsQztVQUNOLEdBQUcsSUFBSSxZQUFZLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBQXJDO1VBQ0EsR0FBRyxJQUFJLGtCQUFrQixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsV0FBWCxDQUEzQztVQUNBLEdBQUcsSUFBSSxZQUFZLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBQXJDO1VBQ0EsR0FBRyxJQUFJLGVBQVA7VUFFQSxJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDRyxDQXJPUTtRQXNPVCxpQkFBa0IsdUJBQVMsRUFBVCxFQUFhO1VBQzdCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxFQUFELENBQTFCO1VBQ0UsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVYsR0FBcUIsZ0RBQS9CO1VBQ04sR0FBRyxJQUFJLGtCQUFrQixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsV0FBWCxDQUEzQztVQUNBLEdBQUcsSUFBSSxlQUFlLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQXhDO1VBRUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO1FBQ0csQ0E3T1EsQ0E4T1Q7UUFDSjtRQUNJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0k7O01BdlBTLENBQWIsQ0FyRCtDLENBZ1QvQzs7TUFDQSxJQUFJLENBQUMsS0FBTCxHQUFhLFVBQVMsR0FBVCxFQUFjO1FBQzNCLElBQUksSUFBSixFQUFVLEdBQVY7UUFFQSxJQUFJLFVBQVUsR0FBRyxHQUFqQjtRQUFBLElBQ0ksV0FBVyxHQUFHLEdBRGxCLENBSDJCLENBTTNCO1FBQ0E7O1FBQ0EsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVAsR0FBb0IsTUFBTSxDQUFDLFVBQTNCLEdBQXdDLFFBQVEsQ0FBQyxlQUFULENBQXlCLFdBQXpCLEdBQXVDLFFBQVEsQ0FBQyxlQUFULENBQXlCLFdBQWhFLEdBQThFLE1BQU0sQ0FBQyxLQUF6STtRQUNBLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLE1BQU0sQ0FBQyxXQUE1QixHQUEwQyxRQUFRLENBQUMsZUFBVCxDQUF5QixZQUF6QixHQUF3QyxRQUFRLENBQUMsZUFBVCxDQUF5QixZQUFqRSxHQUFnRixNQUFNLENBQUMsTUFBOUk7O1FBQ0EsSUFBSSxLQUFLLEdBQUcsR0FBUixJQUFlLE1BQU0sR0FBRyxHQUE1QixFQUFpQztVQUMvQixJQUFJLEdBQUksTUFBTSxDQUFDLEtBQVAsR0FBZSxDQUFoQixHQUFzQixVQUFVLEdBQUcsQ0FBMUM7VUFDQSxHQUFHLEdBQUksTUFBTSxDQUFDLE1BQVAsR0FBZ0IsQ0FBakIsR0FBdUIsV0FBVyxHQUFHLENBQTNDO1FBQ0QsQ0FIRCxNQUdPO1VBQ0w7VUFDSSxJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsVUFBUCxJQUFxQixTQUFyQixHQUFpQyxNQUFNLENBQUMsVUFBeEMsR0FBcUQsTUFBTSxDQUFDLElBQWpGO1VBQUEsSUFDRixhQUFhLEdBQUcsTUFBTSxDQUFDLFNBQVAsSUFBb0IsU0FBcEIsR0FBZ0MsTUFBTSxDQUFDLFNBQXZDLEdBQW1ELE1BQU0sQ0FBQyxHQUR4RSxDQUZDLENBSUw7O1VBQ0EsSUFBSSxHQUFLLEtBQUssR0FBRyxDQUFULEdBQWUsVUFBVSxHQUFHLENBQTdCLEdBQW1DLGNBQTFDO1VBQ0EsR0FBRyxHQUFLLE1BQU0sR0FBRyxDQUFWLEdBQWdCLFdBQVcsR0FBRyxDQUEvQixHQUFxQyxhQUEzQztRQUNEOztRQUVLLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFQLENBQVksR0FBWixFQUFnQixjQUFoQixFQUErQixvRkFBb0YsVUFBcEYsR0FBaUcsV0FBakcsR0FBK0csV0FBL0csR0FBNkgsUUFBN0gsR0FBd0ksR0FBeEksR0FBOEksU0FBOUksR0FBMEosSUFBekwsQ0FBbEIsQ0F0QnFCLENBdUJ2Qjs7UUFDRixJQUFJLE1BQU0sQ0FBQyxLQUFYLEVBQWtCO1VBQ2QsV0FBVyxDQUFDLEtBQVo7UUFDTDtNQUNBLENBM0JEO01BNkJFO0FBQ1Y7TUFFVTs7O01BQ0EsSUFBSSxDQUFDLE9BQUwsR0FBZTtRQUNYLFNBQVMsRUFBRSxTQURBO1FBQ1c7UUFDdEIsT0FBTyxFQUFFLFlBRkU7UUFFWTtRQUN2QixRQUFRLEVBQUUsY0FIQztRQUdlO1FBQzFCLFFBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE9BQWxCLENBQTBCLE1BQU0sQ0FBQyxRQUFQLENBQWdCLElBQWhCLENBQXFCLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLENBQTFCLE1BQWtFLENBQUMsQ0FBbkUsR0FBdUUsVUFBdkUsR0FBb0YsSUFKbkY7UUFLWCxRQUFRLEVBQUUscUZBTEM7UUFNWCxLQUFLLEVBQUUsQ0FBQyxlQUFELEVBQWlCLGdCQUFqQixFQUFrQyxvQkFBbEMsRUFBdUQsZ0JBQXZELEVBQXdFLGNBQXhFLEVBQXVGLGlCQUF2RixFQUF5RyxhQUF6RyxFQUF1SCxjQUF2SCxFQUFzSSxHQUF0SSxFQUEwSSxVQUExSSxFQUFxSixrQkFBcko7TUFOSSxDQUFmLENBbFY2QyxDQTJWakQ7O01BQ0EsS0FBSyxJQUFJLENBQVQsSUFBYyxPQUFkLEVBQXVCO1FBQ3JCLElBQUksQ0FBQyxPQUFMLENBQWEsQ0FBYixJQUFrQixPQUFPLENBQUMsQ0FBRCxDQUF6QjtNQUNELENBOVZnRCxDQStWakQ7OztNQUNBLElBQUksQ0FBQyxPQUFMLENBQWEsUUFBYixHQUF3QixJQUFJLENBQUMsT0FBTCxDQUFhLFFBQWIsQ0FBc0IsV0FBdEIsR0FBb0MsS0FBcEMsQ0FBMEMsR0FBMUMsQ0FBeEI7O01BRUEsU0FBUyxVQUFULENBQW9CLEVBQXBCLEVBQXdCO1FBQ3BCO1FBQ0EsSUFBSSxHQUFHLEdBQUcsRUFBVjs7UUFDQSxLQUFLLElBQUksQ0FBVCxJQUFjLElBQUksQ0FBQyxPQUFuQixFQUE0QjtVQUMxQixHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsSUFBSSxDQUFDLE9BQUwsQ0FBYSxDQUFiLENBQVQ7UUFDRCxDQUxtQixDQU9wQjs7O1FBQ0EsR0FBRyxDQUFDLEdBQUosR0FBVSxJQUFJLENBQUMsT0FBTCxDQUFhLEdBQWIsSUFBb0IsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsSUFBOUM7UUFDQSxHQUFHLENBQUMsS0FBSixHQUFZLElBQUksQ0FBQyxPQUFMLENBQWEsS0FBYixJQUFzQixJQUFJLENBQUMsUUFBTCxFQUFsQztRQUNBLEdBQUcsQ0FBQyxLQUFKLEdBQVksSUFBSSxDQUFDLE9BQUwsQ0FBYSxLQUFiLElBQXNCLElBQUksQ0FBQyxRQUFMLEVBQWxDO1FBQ0EsR0FBRyxDQUFDLFdBQUosR0FBa0IsSUFBSSxDQUFDLE9BQUwsQ0FBYSxXQUFiLElBQTRCLElBQUksQ0FBQyxjQUFMLEVBQTlDOztRQUVBLEtBQUssSUFBSSxNQUFULElBQW1CLEVBQUUsQ0FBQyxPQUF0QixFQUErQjtVQUMzQjtVQUNGLElBQUksTUFBTSxDQUFDLEtBQVAsQ0FBYSxPQUFiLENBQUosRUFBMkI7WUFDekIsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQVAsQ0FBZSxPQUFmLEVBQXdCLEVBQXhCLENBQWpCOztZQUNBLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBaEIsRUFBd0I7Y0FDcEI7WUFDSDs7WUFDRCxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUIsV0FBckIsS0FBcUMsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsQ0FBakIsQ0FBbEQ7WUFDQSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBSCxDQUFXLE1BQVgsQ0FBVjs7WUFDQSxJQUFJLFVBQVUsS0FBSyxVQUFuQixFQUErQjtjQUMzQixHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQUosR0FBa0IsS0FBbEIsQ0FBd0IsR0FBeEIsQ0FBTjtZQUNILENBRkQsTUFFTyxJQUFJLFVBQVUsS0FBSyxLQUFmLElBQXdCLEdBQXhCLElBQStCLEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBVyxHQUE5QyxFQUFtRDtjQUN0RDtjQUNBLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBVCxHQUFrQixHQUF4QjtZQUNIOztZQUNELEdBQUcsQ0FBQyxVQUFELENBQUgsR0FBa0IsR0FBbEI7VUFDRDtRQUNGOztRQUNELE9BQU8sR0FBUDtNQUNIOztNQUVELFNBQVMsY0FBVCxDQUF3QixFQUF4QixFQUE0QjtRQUN4QjtRQUNBLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBQWpCO1FBQ0EsVUFBVSxDQUFDLFNBQVgsR0FBdUIsNEJBQXZCOztRQUNBLElBQUksRUFBRSxDQUFDLGFBQUgsQ0FBaUIsNkJBQWpCLENBQUosRUFBcUQ7VUFDakQ7UUFDSDs7UUFDRCxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQixDQVB3QixDQVN4Qjs7UUFDQSxJQUFJLFNBQVMsQ0FBQyxTQUFWLElBQXVCLEtBQXZCLElBQWdDLFNBQVMsQ0FBQyxPQUFWLElBQXFCLFlBQXpELEVBQ0ksVUFBVSxDQUFDLFNBQVgsSUFBd0IsNENBQXhCLENBREosS0FFSyxJQUFJLFNBQVMsQ0FBQyxTQUFWLElBQXVCLEtBQXZCLElBQWdDLFNBQVMsQ0FBQyxPQUFWLElBQXFCLFVBQXpELEVBQ0QsVUFBVSxDQUFDLFNBQVgsSUFBd0IsMENBQXhCLENBYm9CLENBZXhCOztRQUNBLFVBQVUsQ0FBQyxZQUFXO1VBQ2xCLFFBQVEsU0FBUyxDQUFDLFFBQWxCO1lBQ0EsS0FBSyxTQUFMO2NBQ0UsVUFBVSxDQUFDLFNBQVgsSUFBd0Isc0NBQXhCO2NBQ0E7O1lBQ0YsS0FBSyxVQUFMO2NBQ0UsVUFBVSxDQUFDLFNBQVgsSUFBd0IsdUNBQXhCO2NBQ0E7O1lBQ0YsS0FBSyxXQUFMO2NBQ0UsVUFBVSxDQUFDLFNBQVgsSUFBd0Isd0NBQXhCO2NBQ0EsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsVUFBakIsR0FBOEIsQ0FBRSxVQUFVLENBQUMsV0FBYixHQUEyQixDQUEzQixHQUErQixJQUE3RDtjQUNBOztZQUNGLEtBQUssWUFBTDtjQUNFLFVBQVUsQ0FBQyxTQUFYLElBQXdCLHlDQUF4QjtjQUNBLFVBQVUsQ0FBQyxLQUFYLENBQWlCLFNBQWpCLEdBQTZCLENBQUUsVUFBVSxDQUFDLFlBQWIsR0FBNEIsQ0FBNUIsR0FBZ0MsSUFBN0Q7Y0FDQTs7WUFDRixLQUFLLGFBQUw7Y0FDRSxVQUFVLENBQUMsU0FBWCxJQUF3QiwwQ0FBeEI7Y0FDQSxVQUFVLENBQUMsS0FBWCxDQUFpQixTQUFqQixHQUE2QixDQUFFLFVBQVUsQ0FBQyxZQUFiLEdBQTRCLENBQTVCLEdBQWdDLElBQTdEO2NBQ0E7O1lBQ0YsS0FBSyxZQUFMO2NBQ0UsVUFBVSxDQUFDLFNBQVgsSUFBd0IseUNBQXhCO2NBQ0E7O1lBQ0YsS0FBSyxhQUFMO2NBQ0UsVUFBVSxDQUFDLFNBQVgsSUFBd0IsMENBQXhCO2NBQ0E7O1lBQ0YsS0FBSyxjQUFMO2NBQ0UsVUFBVSxDQUFDLFNBQVgsSUFBd0IsMkNBQXhCO2NBQ0EsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsVUFBakIsR0FBOEIsQ0FBRSxVQUFVLENBQUMsV0FBYixHQUEyQixDQUEzQixHQUErQixJQUE3RDtjQUNBOztZQUNGO2NBQ0UsVUFBVSxDQUFDLFNBQVgsSUFBd0IsMkNBQXhCO2NBQ0EsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsVUFBakIsR0FBOEIsQ0FBRSxVQUFVLENBQUMsV0FBYixHQUEyQixDQUEzQixHQUErQixJQUE3RDtjQUNBO1VBaENGO1FBa0NILENBbkNTLEVBbUNSLENBbkNRLENBQVYsQ0FoQndCLENBc0R4Qjs7UUFDQSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBVixJQUF1QixTQUF2QixHQUFtQywyQ0FBbkMsR0FBaUYsNEJBQTRCLFNBQVMsQ0FBQyxTQUF0QyxHQUFrRCw0Q0FBbko7UUFDQSxJQUFJLElBQUksR0FBRyxDQUFYOztRQUNBLEtBQUssSUFBSSxPQUFULElBQW9CLFNBQVMsQ0FBQyxRQUE5QixFQUF3QztVQUNwQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QixDQUFYO1VBQ0ksT0FBTyxHQUFHLFNBQVMsQ0FBQyxRQUFWLENBQW1CLE9BQW5CLENBQVY7VUFDSixJQUFJLENBQUMsU0FBTCxHQUFpQixTQUFTLEdBQUcsT0FBN0I7VUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVMsQ0FBQyxLQUFWLENBQWdCLE1BQTVCO1VBQ0EsSUFBSSxDQUFDLFNBQUwsSUFBa0IsTUFBSSxTQUFTLENBQUMsS0FBVixDQUFnQixJQUFoQixDQUF0QjtVQUNBLElBQUksQ0FBQyxPQUFMLENBQWEsT0FBYixHQUF1QixPQUF2QjtVQUNBLElBQUksQ0FBQyxLQUFMLEdBQWEsT0FBYjtVQUNBLFVBQVUsQ0FBQyxXQUFYLENBQXVCLElBQXZCO1VBQ0EsSUFBSTtRQUNQOztRQUVELFVBQVUsQ0FBQyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxVQUFVLEtBQVYsRUFBaUI7VUFDbkQsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQVAsRUFBZSx5QkFBZixDQUFYLEVBQXNEO1lBQ2xELEtBQUssQ0FBQyxjQUFOO1lBQ0EsS0FBSyxDQUFDLGVBQU47WUFFQSxJQUFJLENBQUMsS0FBTCxDQUFXLEtBQUssQ0FBQyxNQUFOLENBQWEsT0FBYixDQUFxQixPQUFoQyxFQUF5QyxFQUF6QztZQUNBLE9BQU8sS0FBUDtVQUNIO1FBQ0gsQ0FSRDtRQVVBLEVBQUUsQ0FBQyxXQUFILENBQWUsVUFBZjtNQUNIOztNQUVELElBQUksUUFBUSxHQUFHLE9BQU8sSUFBUCxLQUFnQixRQUFoQixHQUEyQixRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUEzQixHQUEwRCxJQUF6RTs7TUFDQyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsU0FBVCxDQUFtQixRQUFuQixDQUE0QixrQkFBNUIsQ0FBaEIsRUFBaUU7UUFDaEUsY0FBYyxDQUFDLFFBQUQsQ0FBZCxDQURnRSxDQUVoRTtNQUNELENBSEEsTUFJQztRQUNBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFTLEtBQVQsRUFBZ0I7VUFDakQsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsMkJBQXZCLENBQWY7O1VBRUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBUCxFQUFlLDJCQUFmLENBQVosRUFBeUQ7WUFDdkQsSUFBSSxRQUFKLEVBQWM7Y0FDVixRQUFRLENBQUMsU0FBVCxDQUFtQixNQUFuQixDQUEwQiwwQkFBMUIsRUFEVSxDQUdWOztjQUNBLElBQUksUUFBUSxDQUFDLGFBQVQsQ0FBdUIsK0JBQXZCLENBQUosRUFBNkQ7Z0JBQ3pELFFBQVEsQ0FBQyxhQUFULENBQXVCLCtCQUF2QixFQUF3RCxNQUF4RDtjQUNIO1lBQ0osQ0FQRCxNQU9PO2NBQ0gsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFQLEVBQWUsSUFBSSxDQUFDLElBQXBCLENBQWhCOztjQUNBLElBQUksRUFBSixFQUFRO2dCQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBSCxDQUFhLFFBQWIsQ0FBc0IsMEJBQXRCLENBQUwsRUFBd0Q7a0JBQ3RELGNBQWMsQ0FBQyxFQUFELENBQWQ7a0JBQ0EsVUFBVSxDQUFDLFlBQVk7b0JBQ25CLEVBQUUsQ0FBQyxTQUFILENBQWEsR0FBYixDQUFpQiwwQkFBakI7a0JBQ0gsQ0FGUyxFQUVQLENBRk8sQ0FBVjtnQkFJRDtjQUNGO1lBQ0o7VUFDRjtRQUNGLENBeEJEO0lBMEJILENBdGZDOztJQXdmRixJQUFJLGVBQUosQ0FBb0Isb0JBQXBCO0VBQ0Q7QUEzaEJZLEM7Ozs7Ozs7Ozs7ZUNQQTtFQUNYLElBQUksRUFBRSxnQkFBVztJQUNiLEtBQUssT0FBTDtFQUNILENBSFU7RUFJWCxPQUFPLEVBQUUsbUJBQVc7SUFDaEIsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXBCO0lBQ0EsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZDtJQUNBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVyxLQUFYLENBQWlCLFlBQVU7TUFDdkIsSUFBSSxhQUFhLENBQUMsS0FBZCxDQUFvQixPQUFwQixLQUFnQyxNQUFwQyxFQUE0QztRQUN4QyxhQUFhLENBQUMsS0FBZCxDQUFvQixPQUFwQixHQUE4QixPQUE5QjtNQUNILENBRkQsTUFFTyxJQUFJLGFBQWEsQ0FBQyxLQUFkLENBQW9CLE9BQXBCLEtBQWdDLE9BQXBDLEVBQTRDO1FBQy9DLGFBQWEsQ0FBQyxLQUFkLENBQW9CLE9BQXBCLEdBQThCLE1BQTlCO01BQ0gsQ0FGTSxNQUVBO1FBQ0gsYUFBYSxDQUFDLEtBQWQsQ0FBb0IsT0FBcEIsR0FBOEIsT0FBOUI7TUFDSDtJQUNKLENBUkQ7RUFTSDtBQWhCVSxDOzs7Ozs7Ozs7OztBQ0FmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUNlO0VBQ2IsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCLEtBQUssZ0JBQUw7RUFDRCxDQUhZO0VBSWI7RUFDQSxnQkFBZ0IsRUFBRSw0QkFBWSxDQUM1QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDRDtBQWZZLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBQQ++8mmhlYWRlcuS4iueahOW3puWPs+aMiemSruWMuuWfn1xubGV0IGFycm93X2xlZnQgPSAkKFwiI2Fycm93X2xlZnRcIik7XG5sZXQgYXJyb3dfcmlnaHQgPSAkKFwiI2Fycm93X3JpZ2h0XCIpO1xuXG4vLyDluIPlsYDvvJrniYjlv4PjgIHlt6bkuK3lj7PmjpLniYhcbmxldCBjdF9sZWZ0ID0gJChcIi5jdF9sZWZ0XCIpO1xubGV0IGN0X3JpZ2h0ID0gJChcIi5jdF9yaWdodFwiKTtcbmxldCBjdF9jZW50ZXIgPSAkKFwiLmN0X2NlbnRlclwiKTtcbmxldCBjb250YWluZXIgPSAkKFwiLmNvbnRhaW5lclwiKTtcblxuLy8gUEMvYXBw77ya5YiH5o2iaGVhZGVyXG5sZXQgaGVhZGVyX3BjID0gJChcIi5oZWFkZXJfcGNcIik7XG5sZXQgaGVhZGVyX2FwcCA9ICQoXCIuaGVhZGVyX2FwcFwiKTtcblxuLy8gYXBw77yaaGVhZGVy5LiK55qE5bem5Y+z5oyJ6ZKu5Yy65Z+fXG5sZXQgYnRuX2FwcF9zaWRlciA9ICQoXCIjYnRuX2FwcF9zaWRlclwiKTtcbmxldCBidG5fYXBwX3JpZ2h0ID0gJChcIiNidG5fYXBwX3JpZ2h0XCIpO1xuXG4vLyBhcHDvvJrngrnlh7toZWFkZXJfYXBw5pe25YCZ5by55Ye65p2l55qE5oq95bGJXG5sZXQgYXBwX3NpZGVfZ2xhc3MgPSAkKFwiI2FwcF9zaWRlX2dsYXNzXCIpO1xubGV0IGFwcF9zaWRlX2NvbnRlbnQgPSAkKFwiI2FwcF9zaWRlX2NvbnRlbnRcIik7XG5cbi8vIDEu5bem5Lit6YWN572uXG5sZXQgb25lX2NvbnRhaW5lciA9IFwiODAlXCI7XG5sZXQgb25lX2N0X2NlbnRlcl93aWR0aCA9IFwiNzUlXCI7XG5sZXQgb25lX2N0X2xlZnRfd2lkdGggPSBcIjI1JVwiO1xuLy8gMi4g5Lit5Y+z6YWN572uXG5sZXQgdHdvX2NvbnRhaW5lciA9IFwiODAlXCI7XG5sZXQgdHdvX2N0X2NlbnRlcl93aWR0aCA9IFwiNzUlXCI7XG5sZXQgdHdvX2N0X3JpZ2h0X3dpZHRoID0gXCIyNSVcIjtcbi8vIDMuIOW3puS4reWPs+mFjee9rlxubGV0IHRocmVlX2NvbnRhaW5lciA9IFwiOTUlXCI7XG5sZXQgdGhyZWVfY3RfY2VudGVyX3dpZHRoID0gXCI2MCVcIjtcbmxldCB0aHJlZV9jdF9yaWdodF93aWR0aCA9IFwiMjAlXCI7XG5sZXQgdGhyZWVfY3RfbGVmdF93aWR0aCA9IFwiMjAlXCI7XG4vLyA0LiDkuK3phY3nva5cbmxldCBmb3VyX2NvbnRhaW5lciA9IFwiNzUlXCI7XG5sZXQgZm91cl9jdF9jZW50ZXJfd2lkdGggPSBcIjEwMCVcIjtcbi8vIOiuvuWkh+Wwj+S6jjU2MHB455qE5Lit6YWN572uXG5sZXQgZGV2aWNlX3NtYWxsX2NvbnRhaW5lciA9IFwiOTglXCI7XG5sZXQgZGV2aWNlX3NtYWxsX2NlbnRlciA9IFwiMTAwJVwiO1xuLy8g6K6+5aSH5bCP5LqONzgwcHjnmoTkuK3phY3nva5cbmxldCBkZXZpY2VfY2VudGVyX2NvbnRhaW5lciA9IFwiOTYlXCI7XG5sZXQgZGV2aWNlX2NlbnRlcl9jZW50ZXIgPSBcIjEwMCVcIjtcbmxldCB0b3AgPSAwO1xuLy8g5Yik5patcGPmrrXlt6blj7PkuIrop5LnmoTnrq3lpLTor6XmmL7npLrlk6rkuKpcbmZ1bmN0aW9uIGxlZnRfcmlnaHRfYXJyb3coKSB7XG4gIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICB9IGVsc2Uge1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxuICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxufVxuZnVuY3Rpb24gbGVmdF9jZW50ZXJfcmlnaHQoKSB7XG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogdGhyZWVfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IHRocmVlX2N0X2NlbnRlcl93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3Moe1xuICAgIHdpZHRoOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSk7XG4gIGN0X3JpZ2h0LmNzcyh7XG4gICAgd2lkdGg6IHRocmVlX2N0X3JpZ2h0X3dpZHRoLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSk7XG4gIGxlZnRfcmlnaHRfYXJyb3coKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShcImxheW91dFwiKSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxheW91dFwiKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMUlwiKTtcbiAgICBjb25zb2xlLmxvZyhcIkxheW91dDogXCIsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMUlwiKTtcbiAgfVxufVxuZnVuY3Rpb24gbGVmdF9jZW50ZXIoKSB7XG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogb25lX2NvbnRhaW5lciB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiBvbmVfY3RfY2VudGVyX3dpZHRoIH0pO1xuICBjdF9sZWZ0LmNzcyh7IHdpZHRoOiBvbmVfY3RfbGVmdF93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBsZWZ0X3JpZ2h0X2Fycm93KCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsYXlvdXRcIik7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFwiKTtcbiAgICBjb25zb2xlLmxvZyhcIkxheW91dDogXCIsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMXCIpO1xuICB9XG59XG5mdW5jdGlvbiBjZW50ZXJfcmlnaHQoKSB7XG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogdHdvX2NvbnRhaW5lciB9KTtcbiAgY3RfcmlnaHQuY3NzKHsgd2lkdGg6IHR3b19jdF9yaWdodF93aWR0aCB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiB0d29fY3RfY2VudGVyX3dpZHRoIH0pO1xuICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gIGxlZnRfcmlnaHRfYXJyb3coKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShcImxheW91dFwiKSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxheW91dFwiKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJSXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0OiBcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIlJcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIGNlbnRlcigpIHtcbiAgY29udGFpbmVyLmNzcyh7IHdpZHRoOiBmb3VyX2NvbnRhaW5lciB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiBmb3VyX2N0X2NlbnRlcl93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGxlZnRfcmlnaHRfYXJyb3coKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShcImxheW91dFwiKSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxheW91dFwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkNcIik7XG4gICAgY29uc29sZS5sb2coXCJMYXlvdXQ6IFwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiQ1wiKTtcbiAgfVxufVxuZnVuY3Rpb24gZGV2aWNlX3NtYWxsKCkge1xuICAvLyDmnIDlsI/lsLrlr7jvvJrmnIDlpKc1NjBweFxuICBjb25zb2xlLmxvZyhcIkxheW91dDogPCA1NjBweFwiKTtcblxuICBoZWFkZXJfcGMuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gIGhlYWRlcl9hcHAuY3NzKHsgZGlzcGxheTogXCJibG9ja1wiIH0pO1xuICAvLyDorr7nva7luIPlsYBcbiAgY29udGFpbmVyLmNzcyh7IHdpZHRoOiBkZXZpY2Vfc21hbGxfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IGRldmljZV9zbWFsbF9jZW50ZXIgfSk7XG4gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xufVxuZnVuY3Rpb24gZGV2aWNlX2NlbnRlcigpIHtcbiAgLy8g5Lit562J5bC65a+477ya5pyA5aSnOTgwcHhcbiAgY29uc29sZS5sb2coXCJMYXlvdXQ6IDwgOTgwcHhcIik7XG5cbiAgaGVhZGVyX3BjLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICBoZWFkZXJfYXBwLmNzcyh7IGRpc3BsYXk6IFwiYmxvY2tcIiB9KTtcbiAgLy8g6K6+572u5biD5bGAXG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogZGV2aWNlX2NlbnRlcl9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogZGV2aWNlX2NlbnRlcl9jZW50ZXIgfSk7XG4gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xufVxuZnVuY3Rpb24gZGV2aWNlX2xhcmdlc3QoKSB7XG4gIC8vIOacgOWkp+WwuuWvuO+8muacgOWkpzEyNjFweFxuICBjb25zb2xlLmxvZyhcIkxheW91dDogPCAxMjYxcHhcIik7XG5cbiAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gIH0gZWxzZSB7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICB9XG4gIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICB9IGVsc2Uge1xuICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICB9XG4gIGhlYWRlcl9wYy5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gIGhlYWRlcl9hcHAuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG5cbiAgY29udGFpbmVyLmNzcyh7IHdpZHRoOiB0aHJlZV9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogdGhyZWVfY3RfY2VudGVyX3dpZHRoIH0pO1xuICBjdF9sZWZ0LmNzcyh7XG4gICAgd2lkdGg6IHRocmVlX2N0X2xlZnRfd2lkdGgsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICB9KTtcbiAgY3RfcmlnaHQuY3NzKHtcbiAgICB3aWR0aDogdGhyZWVfY3RfcmlnaHRfd2lkdGgsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5idG5fcGNfc3dpdGNoKCk7XG4gICAgdGhpcy5idG5fYXBwX3N3aXRjaCgpO1xuICAgIHRoaXMuYnJvd3Nlcl9yZW1lbWJlcigpO1xuICAgIHRoaXMuZGV2aWNlX3N3aXRjaCgpOyAvLyDov5nkuKrmlL7liLDmnIDlkI7oh6rosIPnlKgh5Zug5Li65LiN566h5pys5Zyw5a2Y5YKo5piv5LuA5LmI77yM5pyA57uI6L+Y5piv6KaB5qC55o2u6K6+5aSH55uR5ZCs5Li65Li7XG4gIH0sXG4gIC8qIFBD77ya5Y2VL+WPjC/kuInmoI/luIPlsYDliIfmjaLmjInpkq7ngrnlh7vkuovku7YgKi9cbiAgYnRuX3BjX3N3aXRjaDogZnVuY3Rpb24gKCkge1xuICAgIGFycm93X2xlZnQuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gICAgICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAvL+W3puS4remFjee9rlxuICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy/lt6bkuK3lj7PphY3nva5cbiAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAvL+S4remFjee9rlxuICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8v5Lit5Y+z6YWN572uXG4gICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGFycm93X3JpZ2h0LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAvLyDovazmjaLliIfmjaLkuYvlkI7nmoTnrq3lpLTmjInpkq5cbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgLy/kuK3lj7PphY3nva5cbiAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL+W3puS4reWPs+mFjee9rlxuICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgLy8g5Lit6YWN572uXG4gICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8g5bem5Lit6YWN572uXG4gICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICAvKiDnp7vliqjnq6/lt6blj7PkuIrop5LnmoTmjInpkq4gKi9cbiAgYnRuX2FwcF9zd2l0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyDngrnlh7vlt6bmjInpkq5cbiAgICBidG5fYXBwX3NpZGVyLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcF9zaWRlX2dsYXNzLmNzcyh7IGRpc3BsYXk6IFwiYmxvY2tcIiB9KTtcbiAgICAgIGFwcF9zaWRlX2NvbnRlbnQuY3NzKHsgZGlzcGxheTogXCJibG9ja1wiIH0pO1xuICAgICAgLy8g6Zi75q2i5oq95bGJ5bGC5LiL55qE5ruR5Yqo56m/6YCPXG4gICAgICB0b3AgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGNvbnRhaW5lci5jc3MoeyBwb3NpdGlvbjogXCJmaXhlZFwiLCB0b3A6IC10b3AgKyBcInB4XCIgfSk7XG4gICAgfSk7XG4gICAgLy8g54K55Ye75q+b546755KD54mHXG4gICAgYXBwX3NpZGVfZ2xhc3MuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgYXBwX3NpZGVfZ2xhc3MuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgICBhcHBfc2lkZV9jb250ZW50LmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgLy8g6Zi75q2i5oq95bGJ5bGC5LiL55qE5ruR5Yqo56m/6YCPXG4gICAgICBjb250YWluZXIuY3NzKHsgcG9zaXRpb246IFwiXCIsIHRvcDogXCJcIiB9KTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0b3ApO1xuICAgIH0pO1xuICAgIC8vIOeCueWHu+WPs+aMiemSriDlvLnlh7rmkJzntKLmoYZcbiAgICBidG5fYXBwX3JpZ2h0LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGFsZXJ0KFwi5pys572R56uZ6L+Y5Zyo5byA5Y+R5Lit77yM6K+45aSa5Yqf6IO96L+Y5pyq5a6M5ZaE77yM5pWs6K+35pyf5b6FflwiKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgIH0pO1xuICB9LFxuICAvKiDmtY/op4jlmajorrDkvY/luIPlsYAgKi9cbiAgYnJvd3Nlcl9yZW1lbWJlcjogZnVuY3Rpb24gKCkge1xuICAgIGxldCBiX2xlZnQgPSBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIik7XG4gICAgbGV0IGJfcmlnaHQgPSBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpO1xuICAgIGxldCBiX2xheW91dDtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICAgIC8vIOa1j+iniOWZqOaciee8k+WtmOeahOaDheWGtVxuICAgICAgbGV0IGxheW91dF9jaGFuZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIkxheW91dDogaGF2ZSBjYWNoZVwiKTtcbiAgICAgIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkxSXCIpIHtcbiAgICAgICAgLy8g5bem5Lit5Y+z5biD5bGAXG4gICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiTFwiKSB7XG4gICAgICAgIC8vIOW3puS4reW4g+WxgFxuICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIlJcIikge1xuICAgICAgICAvLyDkuK3lj7PluIPlsYBcbiAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiQ1wiKSB7XG4gICAgICAgIC8vIOS4reW4g+WxgFxuICAgICAgICBjZW50ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWFtuS7luiOq+WQjeWFtuWmmeeahOaDheWGtVxuICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDmtY/op4jlmajmsqHmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0OiBubyBjYWNoZVwiKTtcbiAgICAgIGlmIChiX2xlZnQgPT09IFwiYmxvY2tcIiAmJiBiX3JpZ2h0ID09PSBcIm5vbmVcIikge1xuICAgICAgICAvLyDlt6bkuK3luIPlsYBcbiAgICAgICAgYl9sYXlvdXQgPSBcIkxcIjtcbiAgICAgIH0gZWxzZSBpZiAoYl9sZWZ0ID09PSBcIm5vbmVcIiAmJiBiX3JpZ2h0ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgIGJfbGF5b3V0ID0gXCJSXCI7XG4gICAgICB9IGVsc2UgaWYgKGJfbGVmdCA9PT0gXCJibG9ja1wiICYmIGJfcmlnaHQgPT09IFwiYmxvY2tcIikge1xuICAgICAgICAvL+W3puS4reWPs+W4g+WxgFxuICAgICAgICBiX2xheW91dCA9IFwiTFJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJfbGF5b3V0ID0gXCJMUlwiO1xuICAgICAgICAvLyDlt6bkuK3lj7PluIPlsYBcbiAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBiX2xheW91dCk7XG4gICAgfVxuICB9LFxuICAvKiDlqpLkvZPmn6Xor6LluIPlsYAgKi9cbiAgZGV2aWNlX3N3aXRjaDogZnVuY3Rpb24gKCkge1xuICAgIC8vIOWIm+W7uuafpeivouWIl+ihqFxuICAgIGxldCBkZXZpY2Vfd2lkdGggPSBbXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDU2MHB4KVwiKSxcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTgwcHgpXCIpLFxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMjYxcHgpXCIpLFxuICAgIF07XG5cbiAgICAvLyDlrprkuYnlm57osIPlh73mlbBcbiAgICBmdW5jdGlvbiBtZWRpYU1hdGNocygpIHtcbiAgICAgIGlmIChkZXZpY2Vfd2lkdGhbMF0ubWF0Y2hlcykge1xuICAgICAgICBkZXZpY2Vfc21hbGwoKTtcbiAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX3dpZHRoWzFdLm1hdGNoZXMpIHtcbiAgICAgICAgZGV2aWNlX2NlbnRlcigpO1xuICAgICAgfSBlbHNlIGlmIChkZXZpY2Vfd2lkdGhbMl0ubWF0Y2hlcykge1xuICAgICAgICBkZXZpY2VfbGFyZ2VzdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMYXlvdXQ6ID4gc2V0dGluZyBzaXppbmdcIik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOWFiOi/kOihjOS4gOasoeWbnuiwg+WHveaVsFxuICAgIG1lZGlhTWF0Y2hzKCk7XG4gICAgLy8g5Li65p+l6K+i5YiX6KGo5rOo5YaM55uR5ZCs5Zmo77yM5ZCM5pe25bCG5Zue6LCD5Ye95pWw5Lyg57uZ55uR5ZCs5ZmoXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXZpY2Vfd2lkdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRldmljZV93aWR0aFtpXS5hZGRMaXN0ZW5lcihtZWRpYU1hdGNocyk7XG4gICAgfVxuICB9LFxufTtcbiIsImltcG9ydCBsYXlvdXRfb2JqZWN0IGZyb20gXCIuL2NvbW1vbi9sYXlvdXQuanNcIjtcbmltcG9ydCB0b2Nfb2JqZWN0IGZyb20gXCIuL3BhcnQvdG9jLmpzXCI7XG5pbXBvcnQgY29tbWVudHNfb2JqZWN0IGZyb20gXCIuL3BhcnQvY29tbWVudHMuanNcIjtcbmltcG9ydCB7IGdvX3RvcF9vYmplY3QsIGdldFNjcm9sbCB9IGZyb20gXCIuL3BhcnQvZ29fdG9wLmpzXCI7XG5pbXBvcnQgd2ViX2luZm9fb2JqZWN0IGZyb20gXCIuL3BhcnQvd2ViX2luZm8uanNcIjtcbmltcG9ydCBzZWFyY2hfb2JqZWN0IGZyb20gXCIuL3BhcnQvc2VhcmNoLmpzXCI7XG5pbXBvcnQgc2hhcmVfb2JqZWN0IGZyb20gXCIuL3BhcnQvc2hhcmVidXR0b24uanNcIjtcbmltcG9ydCBjYXRlZ29yaWVzX29iamVjdCBmcm9tIFwiLi9wYXJ0L2NhdGVnb3JpZXMuanNcIjtcblxuLy8g5YWl5Y+j5Ye95pWw77yM5Lya5Zyo6aG16Z2i5Yqg6L295a6M5q+V5omn6KGMXG4kKGZ1bmN0aW9uICgpIHtcbiAgLy8g5Yid5aeL5YyW55uu5b2V6ISa5pys5Ye95pWwXG4gIHRvY19vYmplY3QuaW5pdCgpO1xuICAvLyDliJ3lp4vljJbor4TorrrmqKHlnZfkuIvmiYDmnInlh73mlbBcbiAgY29tbWVudHNfb2JqZWN0LmluaXQoKTtcbiAgLy8g5Yid5aeL5YyW5Zue5Yiw6aG26YOoXG4gIGdvX3RvcF9vYmplY3QuaW5pdCgpO1xuICAvLyDluIPlsYDliJ3lp4vljJZcbiAgbGF5b3V0X29iamVjdC5pbml0KCk7XG4gIHNlYXJjaF9vYmplY3QuaW5pdCgpO1xuICAvLyDlhaXlj6Plh73mlbDliJ3lp4vljJbnvZHnq5nov5DooYzml7bpl7RcbiAgd2ViX2luZm9fb2JqZWN0LmluaXQoKTtcbiAgLy8g5YiG5Lqr5oyJ6ZKu55qE5Yid5aeL5YyWXG4gIHNoYXJlX29iamVjdC5pbml0KCk7XG4gIC8vIOebruW9leWHveaVsOWIneWni+WMllxuICBjYXRlZ29yaWVzX29iamVjdC5pbml0KCk7XG4gIC8vIOWktOWbvuS8mOWMluS7o+eggVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJ0aWNsZV9pbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFydGNsZV9saXN0X2l0ZW1faW1nXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJ0aWNsZV9pbWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB3aWQgPSBhcnRpY2xlX2ltZ1tpXS5maXJzdEVsZW1lbnRDaGlsZC53aWR0aCArIDU7XG4gICAgICBsZXQgaGVpID0gYXJ0aWNsZV9pbWdbaV0uZmlyc3RFbGVtZW50Q2hpbGQuaGVpZ2h0ICsgNztcbiAgICAgIGFydGljbGVfaW1nW2ldLnN0eWxlLm1heFdpZHRoID0gd2lkICsgXCJweFwiO1xuICAgICAgYXJ0aWNsZV9pbWdbaV0uc3R5bGUubWF4SGVpZ2h0ID0gaGVpICsgXCJweFwiO1xuICAgIH1cbiAgfSwgMTAwMCk7XG59KTtcbiIsIi8qXG4gKiBAQXV0aG9yOiB3enRsaW5rMTAxM1xuICogQERhdGU6IDIwMjItMDctMDcgMTg6NDg6MThcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMDctMTAgMjE6NDc6MzFcbiAqIEBEZXNjcmlwdGlvbjpcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYXRlZ29yaWVzX3dpZGdldCgpXG4gICAgdGhpcy5oaXRfb3Blbl9jbG9zZV9mb3JkZXIoKVxuICAgIHRoaXMucmVhZG1vcmVfYmxvZ19lc3NheSgpXG4gIH0sXG4gIC8vIOeCueWHu2ljb27lsZXlvIAv5YWz6Zet5qCR5YiG57G7XG4gIGhpdF9vcGVuX2Nsb3NlX2ZvcmRlcjogZnVuY3Rpb24gKCkge1xuICAgIC8vIGxldCBjYXRlX2NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZV9jZWxsJylcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVfY2VsbC5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgaWYgKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAvLyAgICAgbGV0IGl0ZW0gPSAkKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsxXSlcbiAgICAvLyAgICAgaXRlbS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgaWYgKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAvLyAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIC8vICAgICAgIH0gZWxzZSBpZiAoXG4gICAgLy8gICAgICAgICBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9PT0gJ2lubGluZS1ibG9jaydcbiAgICAvLyAgICAgICApIHtcbiAgICAvLyAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAvLyBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9LFxuICAvLyDliJ3lp4vljJZcbiAgY2F0ZWdvcmllc193aWRnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJyX2xpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWxpc3QtaXRlbScpXG5cbiAgICBhcnJfbGkuZm9yRWFjaChsaSA9PiB7XG4gICAgICAvLyDnvo7ljJbor6XliIbnsbvmgLvmlbBcbiAgICAgIGxldCBvYmpfd29yZCA9IGxpLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgIG9ial93b3JkLmlubmVySFRNTCA9ICcgWycgKyBvYmpfd29yZC5pbm5lckhUTUwgKyAnXSdcbiAgICAgIC8vIOivpeWIhuexu+S4i+WmguaenOacieWtkOWIhuexu1xuICAgICAgaWYgKGxpLnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1saXN0LWNoaWxkJykpIHtcbiAgICAgICAgLy8g6buY6K6k5omA5pyJ5a2Q5YiG57G75YWo6YOo5pS257ypXG4gICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAvLyDlsZXlvIDmjInpkq5cbiAgICAgICAgbGV0IG5vZGVfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBub2RlXzEuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnXG4gICAgICAgIG5vZGVfMS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcidcbiAgICAgICAgbm9kZV8xLmlubmVySFRNTCA9XG4gICAgICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtcGx1cy1zcXVhcmUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gJ1xuICAgICAgICBsaS5pbnNlcnRCZWZvcmUobm9kZV8xLCBsaS5xdWVyeVNlbGVjdG9yKCdhJykpXG5cbiAgICAgICAgLy8g5pS257yp5oyJ6ZKuXG4gICAgICAgIGxldCBub2RlXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgbm9kZV8yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgbm9kZV8yLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgICAgICBub2RlXzIuaW5uZXJIVE1MID1cbiAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1taW51cy1zcXVhcmUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gJ1xuICAgICAgICBsaS5pbnNlcnRCZWZvcmUobm9kZV8yLCBsaS5xdWVyeVNlbGVjdG9yKCdhJykpXG5cbiAgICAgICAgLy8g5bGV5byA5oyJ6ZKu5rOo5YaM54K55Ye75LqL5Lu2XG4gICAgICAgIG5vZGVfMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBub2RlXzEuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIG5vZGVfMi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgICBsaS5xdWVyeVNlbGVjdG9yKCd1bCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8g5pS257yp5oyJ6ZKu5rOo5YaM54K55Ye75LqL5Lu2XG4gICAgICAgIG5vZGVfMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBub2RlXzIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgICBsaS5xdWVyeVNlbGVjdG9yKCd1bCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOivpeWIhuexu+S4i+ayoeacieWtkOWIhuexu1xuICAgICAgICBsZXQgbm9kZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpIC8vIOaUvuS4gOS4quWNoOS9jeesplxuICAgICAgICBub2RlXzEuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnXG4gICAgICAgIG5vZGVfMS5zdHlsZS5wYWRkaW5nTGVmdCA9ICcxNXB4J1xuICAgICAgICBub2RlXzEuaW5uZXJIVE1MID0gJydcbiAgICAgICAgbGkuaW5zZXJ0QmVmb3JlKG5vZGVfMSwgbGkucXVlcnlTZWxlY3RvcignYScpKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIC8vIOafpeeci+abtOWkmumhtemdou+8jOS8mOWMluWNmuWuoi/pmo/nrJTmmL7npLpcbiAgcmVhZG1vcmVfYmxvZ19lc3NheTogZnVuY3Rpb24gKCkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9hcmNoaXZlcy8nKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgLy8g5Y675o6J56ys5LiA5Liq77yf5a2X56ymXG4gICAgICBsZXQgcGFyYW1zID0gbG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKVxuICAgICAgLy8g5qC55o2uPeWPt+WIkuWIhuWPguaVsFxuICAgICAgbGV0IGFyciA9IHBhcmFtcy5zcGxpdCgnPScpXG4gICAgICAvLyDojrflj5ZwYWdlX3R5cGXlj4LmlbBcbiAgICAgIGxldCBwYWdlX3R5cGUgPSBhcnJbMV1cbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcmNoaXZlX2FydGljbGVfbGlzdCcpXG4gICAgICBmb3IgKGxldCB1ID0gMDsgdSA8IHVsLmxlbmd0aDsgdSsrKSB7XG4gICAgICAgIC8vIOWvueavj+S4gOS4qmxp6L+b6KGM5Yik5pat77yM5aaC5p6c5LiN5piv5Y+C5pWw55qE5YC877yM5bCx6L+b6KGM6ZqQ6JePXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdWxbdV0uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSB1bFt1XS5jaGlsZHJlbltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKVxuICAgICAgICAgIGlmIChpbmRleCA9PT0gJ2RzYWwnKSB7XG4gICAgICAgICAgICBpbmRleCA9ICdibG9nJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5kZXggIT09IHBhZ2VfdHlwZSkge1xuICAgICAgICAgICAgdWxbdV0uY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbn1cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG7jgJDmlofnq6Dorr/pl67ph4/mjpLlkI3jgJFcbiAgICDmlofnq6DpmIXor7vph4/lnKjljZXkuKrmlofnq6DkuK3lj6/ku6XmmL7npLrkvYbmmK/kuI3og73mjpLlkI3vvIzmjpLlkI3mgI7kuYjlrp7njrDlkaLvvJ9cbiAgICDmlrnmoYgx77ya5L2/55SodmFsaW5lXG4gICAg5pa55qGIMu+8muWcqOacjeWKoeWZqOS4iui/m+ihjOWFqOermeeahOaWh+eroOiuv+mXru+8jOaPkOWPluS7luS7rOeahOiuv+mXrumHj2lkXG4gICAg5pa55qGIM++8muWvuXR3aWtvb+S6keWHveaVsOi/m+ihjOS7o+eggeabtOaUue+8jOexu+S8vOiuv+mXrumHj2FwaVxuIFxu44CQ6K+E6K665YiH5o2i5oyJ6ZKu44CRXG4gICAg5YiH5o2idXR0ZXJhbmNlc+ivhOiuuuWQju+8jOmhtemdouS8muWIt+aWsOS4gOS4i+eEtuWQjuWPiOWbnuWIsOm7mOiupOivhOiuuuezu+e7n+S6hu+8jOi/meS4quWPr+S7peS8mOWMllxuXG7jgJDmnIDmlrDor4TorrrjgJFcbiAgICDmnIDmlrDor4Torrrnu4Tku7bvvIzlpoLmnpxibG9n6aG16Z2i55So5LqG77yM6YKj5LmI6L+Z5Liq57uE5Lu25bCx5LiN6IO95pS+5Zyo56e75Yqo56uv5L6n6L655qCP5LqG77yMXG4gICAg5ZCM5LiA5LiqaWTkuI3og73lpJrmrKHnlKjnmoTnvJjmlYXlkJfvvJ9cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIOWvvOWHuuS4uuS4gOS4quWvueixoVxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nb19jb21tZW50cygpO1xuICAgIHRoaXMuY29tbWVudHNfY291bnQoKTtcbiAgICB0aGlzLm5ld19jb21tZW50cygpO1xuICAgIHRoaXMuc3dpdGNoX2NvbW1lbnQoKTtcbiAgICB0aGlzLmdpc2N1c19jb21tZW50KCk7XG4gICAgdHdpa29vXG4gICAgICAuaW5pdCh7XG4gICAgICAgIGVudklkOiBcImh0dHBzOi8vdHdpa29vLnd6dGxpbmsxMDEzLmNvbS9cIixcbiAgICAgICAgZWw6IFwiI3Rjb21tZW50XCIsXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICAvLyBwYXRoOiAnd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lJywgLy8g55So5LqO5Yy65YiG5LiN5ZCM5paH56ug55qE6Ieq5a6a5LmJIGpzIOi3r+W+hO+8jOWmguaenOaCqOeahOaWh+eroOi3r+W+hOS4jeaYryBsb2NhdGlvbi5wYXRobmFtZe+8jOmcgOS8oOatpOWPguaVsFxuXG4gICAgICAgIC8vIOivhOiuuuWKoOi9veaIkOWKn+WQjueahOWbnuiwg+WHveaVsOOAglxuICAgICAgICAvLyDlj5Hooajor4TorrrlkI7oh6rliqjliLfmlrDor4Torrrml7bjgIHliqDovb3kuIvkuIDpobXor4Torrrml7bvvIzkuZ/kvJrop6blj5HjgIJcbiAgICAgICAgLy8g6K+E6K665Yqg6L295aSx6LSl5pe25LiN5Lya6Kem5Y+R44CCXG4gICAgICAgIG9uQ29tbWVudExvYWRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHdpa29vOiBhbGwgY29tbWVudHMgbG9hZGVkXCIpO1xuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVHdpa29vIOaIkOWKn+aMgui9veWQjueahOWbnuiwg+WHveaVsOOAgueOr+WigyBJRCDplJnor6/jgIHnvZHnu5zlvILluLjjgIHmjILovb3lpLHotKXnrYnmg4XlhrXml7bkuI3kvJrop6blj5HjgIJcbiAgICAgICAgY29uc29sZS5sb2coXCJUd2lrb286IG1vdW50IGZpbmlzaGVkXCIpO1xuICAgICAgfSk7XG4gIH0sXG4gIC8vIOWPs+S4i+inkuaMiemSruS6i+S7tiDmmK/lkKbliY3lvoDor4TorrrljLpcbiAgZ29fY29tbWVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21tZW50c1wiKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnb19jb21tZW50c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgfSxcbiAgZ2lzY3VzX2NvbW1lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQub3JpZ2luICE9PSBcImh0dHBzOi8vZ2lzY3VzLnd6dGxpbmsxMDEzLmNvbVwiKSByZXR1cm47XG4gICAgICBpZiAoISh0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJvYmplY3RcIiAmJiBldmVudC5kYXRhLmdpc2N1cykpIHJldHVybjtcblxuICAgICAgY29uc3QgZ2lzY3VzRGF0YSA9IGV2ZW50LmRhdGEuZ2lzY3VzO1xuICAgICAgY29uc29sZS5sb2coXCJHaXNjdXM6IGlmcmFtZSBjb21tZW50IGRhdGFcIiwgZ2lzY3VzRGF0YSk7XG4gICAgICAvLyBEbyB3aGF0ZXZlciB5b3Ugd2FudCB3aXRoIGl0LCBlLmcuIGBjb25zb2xlLmxvZyhnaXNjdXNEYXRhKWAuXG4gICAgICAvLyBZb3UnbGwgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCBgZ2lzY3VzRGF0YWAgY29udGFpbnMgdGhlIG1lc3NhZ2UgeW91J3JlXG4gICAgICAvLyBleHBlY3RpbmcsIGUuZy4gYnkgdXNpbmcgYGlmICgnZGlzY3Vzc2lvbicgaW4gZ2lzY3VzRGF0YSlgLlxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBoYW5kbGVNZXNzYWdlKTtcbiAgICBjb25zb2xlLmxvZyhcIkdpc2N1czogbWVzc2FnZSBsb2dpY1wiKTtcbiAgICAvLyBTb21lIHRpbWUgbGF0ZXIuLi5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgaGFuZGxlTWVzc2FnZSk7XG4gIH0sXG4gIC8vIOaWh+eroOivhOiuuuaVsFxuICBjb21tZW50c19jb3VudDogZnVuY3Rpb24gKCkge1xuICAgIC8vIOWIpOaWremhtemdouaYr+WQpuacieivhOiuuuWMumlk5ZKM5byV55So6K+E6K665pWw55qEaWRcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnRzXCIpICYmXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R3aWtvb19jb21tZW50c1wiKVxuICAgICkge1xuICAgICAgdmFyIHR3aWtvb19jb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHdpa29vX2NvbW1lbnRzXCIpO1xuICAgICAgLy8gQk9N6I635Y+W6aG16Z2idXJs55qEcGF0aG5hbWXot6/lvoRcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHNfdXJsID0gW2xvY2F0aW9uLnBhdGhuYW1lXTtcblxuICAgICAgdHdpa29vXG4gICAgICAgIC5nZXRDb21tZW50c0NvdW50KHtcbiAgICAgICAgICBlbnZJZDogXCJodHRwczovL3R3aWtvby53enRsaW5rMTAxMy5jb20vXCIsIC8vIOeOr+WigyBJRFxuICAgICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICAgIHVybHM6IHR3aWtvb19jb21tZW50c191cmwsIC8vIOS4jeWMheWQq+WNj+iuruOAgeWfn+WQjeOAgeWPguaVsOeahOaWh+eroOi3r+W+hOWIl+ihqO+8jOW/heS8oOWPguaVsFxuICAgICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UsIC8vIOivhOiuuuaVsOaYr+WQpuWMheaLrOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAvLyDlsIbor4TorrrmlbDlhpnlhaXlhbbkuK1cbiAgICAgICAgICB0d2lrb29fY29tbWVudHMuaW5uZXJUZXh0ID0gcmVzWzBdLmNvdW50O1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgLy8g6L+U5Zue56S65L6LOiBbXG4gICAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEwL3Bvc3QtMS5odG1sJywgY291bnQ6IDEwIH0sXG4gICAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzExL3Bvc3QtMi5odG1sJywgY291bnQ6IDAgfSxcbiAgICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTIvcG9zdC0zLmh0bWwnLCBjb3VudDogMjAgfVxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAvLyDlj5HnlJ/plJnor69cbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8g5pyA5paw6K+E6K66XG4gIG5ld19jb21tZW50czogZnVuY3Rpb24gKCkge1xuICAgIHZhciBob3RfYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdF9hcnRpY2xlc19pdGVtXCIpO1xuICAgIHZhciBwYWdlX3NpemUgPSA4O1xuICAgIHR3aWtvb1xuICAgICAgLmdldFJlY2VudENvbW1lbnRzKHtcbiAgICAgICAgZW52SWQ6IFwiaHR0cHM6Ly90d2lrb28ud3p0bGluazEwMTMuY29tL1wiLCAvLyDnjq/looMgSURcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlX3NpemUsIC8vIOiOt+WPluWkmuWwkeadoe+8jOm7mOiupO+8mjEw77yM5pyA5aSn77yaMTAwXG4gICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UsIC8vIOaYr+WQpuWMheaLrOacgOaWsOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIubmV3X2NvbW1lbnRzX2xvZGluZ1wiXG4gICAgICAgICk7XG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudCA9IG5ld19jb21tZW50c19sb2RpbmcucGFyZW50RWxlbWVudDtcbiAgICAgICAgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQucmVtb3ZlQ2hpbGQobmV3X2NvbW1lbnRzX2xvZGluZyk7XG4gICAgICAgIC8vIOaPkuWFpeivhOiuulxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2Vfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKHJlc1tpXS5jb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2NvbnRlbnQgPSByZXNbaV0uY29tbWVudDtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfbmljayA9IHJlc1tpXS5uaWNrO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c191cmwgPSByZXNbaV0udXJsO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19hdmF0YXIgPSByZXNbaV0uYXZhdGFyO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c190aW1lID0gcmVzW2ldLnJlbGF0aXZlVGltZTtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfaWQgPSBcIiNcIiArIHJlc1tpXS5pZDtcblxuICAgICAgICAgICAgdmFyIGhvdF9hcnRpY2xlc19jaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlc19jaGlsZC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIml0ZW1fdXBcIj48aW1nIHNyYz1cIicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfYXZhdGFyICtcbiAgICAgICAgICAgICAgJ1wiIGNsYXNzPVwiYXZhdGFyXCI+PGRpdiBjbGFzcz1cIm5pY2tfbmFtZVwiPjxzcGFuIGNsYXNzPVwibmlja1wiPicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfbmljayArXG4gICAgICAgICAgICAgICc8L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JyArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c190aW1lICtcbiAgICAgICAgICAgICAgJzwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiaXRlbV9kb3duXCI+PGEgaHJlZj1cIicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfdXJsICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2lkICtcbiAgICAgICAgICAgICAgJ1wiPicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfY29udGVudCArXG4gICAgICAgICAgICAgIFwiPC9hPjwvZGl2PlwiO1xuICAgICAgICAgICAgaG90X2FydGljbGVzLmFwcGVuZChob3RfYXJ0aWNsZXNfY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9LFxuICAvLyDliIfmjaLor4Torroo6K+E6K6657uE5Lu25a2Y5Zyo5pe2KVxuICBzd2l0Y2hfY29tbWVudDogZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N3aXRjaF9idG5cIikpIHtcbiAgICAgIHZhciBzd2l0Y2hfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2hfYnRuXCIpO1xuICAgICAgdmFyIGdpdGh1Yl9jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnaXRodWJfY29tbWVudFwiKTtcbiAgICAgIHZhciB0d2lrb29fY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHdpa29vX2NvbW1lbnRcIik7XG5cbiAgICAgIHN3aXRjaF9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoX2J0bi5jbGFzc0xpc3QudG9nZ2xlKFwibW92ZVwiKTtcbiAgICAgICAgZ2l0aHViX2NvbW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbnRlbnQtaW5cIik7XG4gICAgICAgIHR3aWtvb19jb21tZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb250ZW50LWluXCIpO1xuXG4gICAgICAgIGlmIChnaXRodWJfY29tbWVudC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIGdpdGh1Yl9jb21tZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFR3aWtvbyDor4Torrrns7vnu59cbiAgICAgICAgICBnaXRodWJfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxufTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIOe8k+aFouaYvuekulxuICAgICAgICDnvJPmhaLlm57liLDpobbpg6hcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiBsZXQgZ29fdG9wX29iamVjdCA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5nb190b3AoKTtcbiAgICAgICAgdGhpcy5jbGlja19nb190b3AoKTtcbiAgICB9LFxuICAgIGdvX3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8g5rua5Yqo5pi+56S6Z29fdG9w5oyJ6ZKuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgLy8g5oyB57ut55uR5ZCs5rua5Yqo54q25oCBXG4gICAgICAgICAgICBnZXRTY3JvbGwoKS50b3AgIT09IDAgPyAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIikgOiAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgY2xpY2tfZ29fdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g54K55Ye75Zue5Yiw6aG26YOoXG4gICAgICAgICQoXCIjZ29fdG9wXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy8gc2Nyb29sVG9w5YW85a655oCn5pa55qGIXG5mdW5jdGlvbiBnZXRTY3JvbGwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0fHwwLFxuICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMFxuICAgIH07XG59XG5cblxuLy8g5aaC5p6c5LiN5YGa6buY6K6k5a+85YWl77yM5bCx5oyJ54Wn5LiL6Z2i5YaZ77yM5LiN6KaBZGVmYXVsdOivjVxuZXhwb3J0IHtcbiAgICBnb190b3Bfb2JqZWN0LCAvL+WvvOWHuuWvueixoVxuICAgIGdldFNjcm9sbCwgLy/lr7zlh7rpgJrnlKjlh73mlbBcbn1cblxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNlYXJjaCgpO1xuICB9LFxuICBzZWFyY2g6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1zZWFyY2gtaW5wdXRcIik7XG5cbiAgICBpZiAoaW5wdXRBcmVhKSB7XG4gICAgICBpbnB1dEFyZWEub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5wdXRBcmVhLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gaW5wdXRBcmVhLnBsYWNlaG9sZGVyID0gXCLliJ3lp4vljJbmkJzntKJpbmfCt8K3wrdcIjtcbiAgICAgICAgZ2V0U2VhcmNoRmlsZSgpO1xuICAgICAgICB0aGlzLm9uY2xpY2sgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgaW5wdXRBcmVhLm9ua2V5ZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJTZWFyY2goJHJlc3VsdENvbnRlbnQpIHtcbiAgICAgIC8vIGNsZWFyIHNlYXJjaCByZXN1bHRcbiAgICAgIHZhciBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWNsb3NlXCIpO1xuICAgICAgYnRuQ2xvc2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5wdXRBcmVhLnZhbHVlID0gXCJcIjtcbiAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgaW5wdXRBcmVhLnBsYWNlaG9sZGVyID0gXCLor7fovpPlhaXlhbPplK7or41cIjtcbiAgICAgICAgaW5wdXRBcmVhLmZvY3VzKCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBzZWFyY2hGdW5jID0gZnVuY3Rpb24gKHBhdGgsIHNlYXJjaF9pZCwgY29udGVudF9pZCkge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICB2YXIgQlROID0gXCI8ZGl2IGlkPSdsb2NhbC1zZWFyY2gtY2xvc2UnPua4heepuuaQnOe0ojwvZGl2PlwiO1xuICAgICAgdmFyICRpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlYXJjaF9pZCk7XG4gICAgICB2YXIgJHJlc3VsdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50X2lkKTtcblxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcGF0aCwgdHJ1ZSk7XG4gICAgICB4aHIuc2VuZCgpO1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIC8vIHJlc3VtZSBpbnB1dFxuICAgICAgICAgICRpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIC8vICAgJGlucHV0LnBsYWNlaG9sZGVyID0gXCLovpPlhaXlhbPplK7or43ku6XmkJzntKJcIjtcbiAgICAgICAgICAkaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICAgIHZhciB4bWwgPSB4aHIucmVzcG9uc2VYTUw7XG4gICAgICAgICAgdmFyIHJvb3QgPSB4bWwuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgIHZhciBsaXN0ID0gcm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImVudHJ5XCIpO1xuICAgICAgICAgIHZhciBkYXRhcyA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aXRsZVwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjb250ZW50XCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgdXJsOiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXJsXCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdHIgPSAnPHVsIGNsYXNzPVwiYXJjaGl2ZVwiPic7XG4gICAgICAgICAgICB2YXIga2V5d29yZHMgPSB0aGlzLnZhbHVlXG4gICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgLnNwbGl0KC9bXFxzXFwtXSsvKTtcbiAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZS50cmltKCkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmnKzlnLDmkJzntKLkuLvku6PnoIFcbiAgICAgICAgICAgIGRhdGFzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgdmFyIGlzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICB2YXIgY29udGVudF9pbmRleCA9IFtdO1xuICAgICAgICAgICAgICBpZiAoIWRhdGEudGl0bGUgfHwgZGF0YS50aXRsZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnRpdGxlID0gXCJVbnRpdGxlZFwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfdGl0bGUgPSBkYXRhLnRpdGxlLnRyaW0oKTtcbiAgICAgICAgICAgICAgdmFyIGRhdGFfdGl0bGUgPSBvcmlnX2RhdGFfdGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgdmFyIG9yaWdfZGF0YV9jb250ZW50ID0gZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88W14+XSs+L2csIFwiXCIpO1xuICAgICAgICAgICAgICB2YXIgZGF0YV9jb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgdmFyIGRhdGFfdXJsID0gZGF0YS51cmw7XG4gICAgICAgICAgICAgIHZhciBpbmRleF90aXRsZSA9IC0xO1xuICAgICAgICAgICAgICB2YXIgaW5kZXhfY29udGVudCA9IC0xO1xuICAgICAgICAgICAgICB2YXIgZmlyc3Rfb2NjdXIgPSAtMTtcbiAgICAgICAgICAgICAgLy8gb25seSBtYXRjaCBhcnRpbGVzIHdpdGggbm90IGVtcHR5IGNvbnRlbnRzXG4gICAgICAgICAgICAgIGlmIChkYXRhX2NvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXl3b3JkLCBpKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleF90aXRsZSA9IGRhdGFfdGl0bGUuaW5kZXhPZihrZXl3b3JkKTtcbiAgICAgICAgICAgICAgICAgIGluZGV4X2NvbnRlbnQgPSBkYXRhX2NvbnRlbnQuaW5kZXhPZihrZXl3b3JkKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X3RpdGxlIDwgMCAmJiBpbmRleF9jb250ZW50IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhfY29udGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleF9jb250ZW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlyc3Rfb2NjdXIgPSBpbmRleF9jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnRfaW5kZXgucHVzaCh7aW5kZXhfY29udGVudDppbmRleF9jb250ZW50LCBrZXl3b3JkX2xlbjprZXl3b3JkX2xlbn0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyDlsZXnpLrnu5PmnpxcbiAgICAgICAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBzdHIgKz1cbiAgICAgICAgICAgICAgICAgIFwiPGxpPjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPVwiICtcbiAgICAgICAgICAgICAgICAgIGRhdGFfdXJsICtcbiAgICAgICAgICAgICAgICAgIFwiID5cIiArXG4gICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdhcmNoaXZlLXRpdGxlJyA+XCIgK1xuICAgICAgICAgICAgICAgICAgb3JpZ19kYXRhX3RpdGxlICtcbiAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPlwiO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBvcmlnX2RhdGFfY29udGVudDtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3Rfb2NjdXIgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgLy8gY3V0IG91dCAxMDAgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gZmlyc3Rfb2NjdXIgLSAxMDtcbiAgICAgICAgICAgICAgICAgIHZhciBlbmQgPSBmaXJzdF9vY2N1ciArIDMwO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gNDA7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmIChlbmQgPiBjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBjb250ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudClcbiAgICAgICAgICAgICAgICAgIHZhciBtYXRjaF9jb250ZW50ID0gY29udGVudC5zdWJzdHIoc3RhcnQsIDIwMCk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIGhpZ2hsaWdodCBhbGwga2V5d29yZHNcbiAgICAgICAgICAgICAgICAgIGtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24gKGtleXdvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ1MgPSBuZXcgUmVnRXhwKGtleXdvcmQsIFwiZ2lcIik7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoX2NvbnRlbnQgPSBtYXRjaF9jb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgcmVnUyxcbiAgICAgICAgICAgICAgICAgICAgICAnPGVtIGNsYXNzPVwic2VhcmNoLWtleXdvcmRcIj4nICsga2V5d29yZCArIFwiPC9lbT5cIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIHN0ciArPVxuICAgICAgICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJzZWFyY2gtcmVzdWx0XCI+JyArIG1hdGNoX2NvbnRlbnQgKyBcIi4uLjwvcD5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RyICs9IFwiPC9hPjwvbGk+XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RyICs9IFwiPC91bD5cIjtcbiAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZihcIjxsaT5cIikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgQlROICtcbiAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J2xvY2FsLXNlYXJjaC1lbXB0eSc+5rKh5pyJ5om+5Yiw5L2g5omA6KaB5pCc57Si55qE5YaF5a654oCm4oCmPC9kaXY+XCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBCVE4gKyBzdHI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFNlYXJjaEZpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGF0aCA9IFwiL3NlYXJjaC54bWxcIjtcbiAgICAgIHNlYXJjaEZ1bmMocGF0aCwgXCJsb2NhbC1zZWFyY2gtaW5wdXRcIiwgXCJsb2NhbC1zZWFyY2gtcmVzdWx0XCIpO1xuICAgIH07XG5cbiAgICAvLyDlhajlsYDmjInpkq7orr7nva5qc+aYr+WQpuWxleekuuaQnOe0ouahhlxuICAgIHZhciBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaF9idG5cIik7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoX2J0bl9wY1wiKSkge1xuICAgICAgdmFyIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveF9wYyA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoX2J0bl9wY1wiKTtcbiAgICAgIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveF9wYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2FsLXNlYXJjaC1pbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWwtc2VhcmNoLWlucHV0JykuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBzZWFyY2hfY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9jbG9zZVwiKTtcbiAgICBzZWFyY2hfY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbn07XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgbmVlZFNoYXJlQnV0dG9uXG4gIC0gVmVyc2lvbiAxLjAuMFxuICAtIENvcHlyaWdodCAyMDE1IER6bWl0cnkgVmFzaWxldXNraVxuXHQtIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVClcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2hhcmUoKTtcbiAgICB9LFxuICAgIHNoYXJlOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIGZpbmQgY2xvc2VzdFxuICAgIGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbSwgcGFyZW50KSB7XG4gICAgICBpZiAodHlwZW9mKHBhcmVudCkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoZXNTZWxlY3RvciA9IGVsZW0ubWF0Y2hlcyB8fCBlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yO1xuICBcbiAgICAgICAgICAgICAgaWYgKCEhbWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNTZWxlY3Rvci5iaW5kKGVsZW0pKHBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICBpZiAoZWxlbSA9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIHNoYXJlIGJ1dHRvbiBjbGFzc1xuICAgICAgd2luZG93Lm5lZWRTaGFyZUJ1dHRvbiA9IGZ1bmN0aW9uKGVsZW0sIG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBjcmVhdGUgZWxlbWVudCByZWZlcmVuY2VcbiAgICAgICAgICB2YXIgcm9vdCA9IHRoaXM7XG4gICAgICAgICAgcm9vdC5lbGVtID0gZWxlbSB8fCAnbmVlZC1zaGFyZS1idXR0b24nO1xuICBcbiAgICAgICAgICAvKiBIZWxwZXJzXG4gICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIFxuICAgICAgLy8gZ2V0IHRpdGxlIGZyb20gaHRtbFxuICAgICAgcm9vdC5nZXRUaXRsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgIC8vIGNoZWNrIHF1ZXJ5U2VsZWN0b3IgZXhpc3RhbmNlIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjp0aXRsZVwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5pbm5lclRleHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQudGl0bGU7XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBnZXQgaW1hZ2UgZnJvbSBodG1sXG4gICAgICAgIHJvb3QuZ2V0SW1hZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmltYWdlXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBnZXQgZGVzY3JpcHRpb24gZnJvbSBodG1sXG4gICAgICAgIHJvb3QuZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKS5uYW1lZEl0ZW0oJ2Rlc2NyaXB0aW9uJykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gc2hhcmUgdXJscyBmb3IgYWxsIG5ldHdvcmtzXG4gICAgICAgIHJvb3Quc2hhcmUgPSB7XG4gICAgICAgICAgICAnd2VpYm8nOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3YudC5zaW5hLmNvbS5jbi9zaGFyZS9zaGFyZS5waHA/dGl0bGU9J1xuICAgICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgICArIFwiJnVybD1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgICArIFwiJnBpYz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3dlY2hhdCc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIGltZ1NyYyA9ICdodHRwczovL2FwaS5xcnNlcnZlci5jb20vdjEvY3JlYXRlLXFyLWNvZGUvP3NpemU9MTUweDE1MCZkYXRhPScrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICB2YXIgZHJvcGRvd25FbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bicpO1xuICAgICAgICAgICAgICB2YXIgaW1nID0gZHJvcGRvd25FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJylbMF07XG4gICAgICAgICAgICAgIHZhciBsb2FkZXIgPSBkcm9wZG93bkVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25lZWQtc2hhcmUtbG9hZGVyJylbMF07XG4gIFxuICAgICAgICAgICAgICAgIGlmIChpbWcpIHtcbiAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgICB9IGVsc2UgaWYobG9hZGVyKSB7XG4gICAgICAgICAgICBsb2FkZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbG9hZGVyLmNsYXNzTmFtZSA9ICduZWVkLXNoYXJlLWxvYWRlcic7XG4gICAgICAgICAgICBsb2FkZXIuaW5uZXJUZXh0ID0gJ2xvYWRpbmcuLi4nO1xuICAgICAgICAgICAgbG9hZGVyLnRpdGxlID0gJ2xvYWRpbmcgcXJjb2RlLi4uJztcbiAgXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gaW1nU3JjO1xuICAgICAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0NyZWF0ZSBxcmNvZGUgZmFpbGVkISc7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwnbmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAobG9hZGVyLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChsb2FkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgJ2RvdWJhbic6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cHM6Ly93d3cuZG91YmFuLmNvbS9zaGFyZS9zZXJ2aWNlP25hbWU9J1xuICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICsgXCImaHJlZj1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgKyBcIiZpbWFnZT1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3Fxem9uZSc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3Nucy5xem9uZS5xcS5jb20vY2dpLWJpbi9xenNoYXJlL2NnaV9xenNoYXJlX29uZWtleT90aXRsZT0nXG4gICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgKyBcIiZ1cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICsgXCImcGljcz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKVxuICAgICAgICAgICAgICArIFwiJmRlc2M9XCIrIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAncmVucmVuJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vd2lkZ2V0LnJlbnJlbi5jb20vZGlhbG9nL3NoYXJlP3RpdGxlPSdcbiAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICArIFwiJnJlc291cmNlVXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICArIFwiJnBpYz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKVxuICAgICAgICAgICAgICArIFwiJmRlc2NyaXB0aW9uPVwiKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gIFxuICAgICAgICAgICAgJ21haWx0bycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICdtYWlsdG86P3N1YmplY3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICsgJyZib2R5PVRob3VnaHQgeW91IG1pZ2h0IGVuam95IHJlYWRpbmcgdGhpczogJyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKSArICcgLSAnICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd0d2l0dGVyJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSc7XG4gICAgICAgICAgICAgICAgdXJsICs9IGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICsgXCImdXJsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BpbnRlcmVzdCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwaW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYm9va21hcmtsZXQvP2lzX3ZpZGVvPWZhbHNlJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZtZWRpYT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZhY2Vib29rJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5mYWNlYm9vay5jb20vc2hhcmUucGhwPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2dvb2dsZXBsdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGx1cy5nb29nbGUuY29tL3NoYXJlPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdyZWRkaXQnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LnJlZGRpdC5jb20vc3VibWl0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZGVsaWNpb3VzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ2RlbC5pY2lvLnVzL3Bvc3Q/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZub3Rlcz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAndGFwaXR1cmUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3RhcGl0dXJlLmNvbS9ib29rbWFya2xldC9pbWFnZT8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2ltZ19zcmM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3RpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgJ3N0dW1ibGV1cG9uJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnbGlua2VkaW4nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmc291cmNlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnNvdXJjZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAnc2xhc2hkb3QnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3NsYXNoZG90Lm9yZy9ib29rbWFyay5wbD8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vICd0ZWNobm9yYXRpJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0ZWNobm9yYXRpLmNvbS9mYXZlcz8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2FkZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdwb3N0ZXJvdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncG9zdGVyb3VzLmNvbS9zaGFyZT8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAnbGlua3RvPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndHVtYmxyJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy50dW1ibHIuY29tL3NoYXJlP3Y9Myc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ2dvb2dsZWJvb2ttYXJrcycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lmdvb2dsZS5jb20vYm9va21hcmtzL21hcms/b3A9ZWRpdCc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmJrbWs9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZhbm5vdGF0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gJ25ld3N2aW5lJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cubmV3c3ZpbmUuY29tL190b29scy9zZWVkJnNhdmU/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICd1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmg9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAncGluZ2ZtJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwaW5nLmZtL3JlZi8/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdsaW5rPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmYm9keT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdldmVybm90ZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZXZlcm5vdGUuY29tL2NsaXAuYWN0aW9uPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZnJpZW5kZmVlZCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZnJpZW5kZmVlZC5jb20vc2hhcmU/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd2a29udGFrdGUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndmtvbnRha3RlLnJ1L3NoYXJlLnBocD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICB1cmwgKz0gJyZpbWFnZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgdXJsICs9ICcmbm9wYXJzZT10cnVlJztcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdvZG5va2xhc3NuaWtpJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5vZG5va2xhc3NuaWtpLnJ1L2RrP3N0LmNtZD1hZGRTaGFyZSZzdC5zPTEnO1xuICAgICAgICAgIHVybCArPSAnJnN0LmNvbW1lbnRzPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICB1cmwgKz0gJyZzdC5fc3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ21haWxydScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnY29ubmVjdC5tYWlsLnJ1L3NoYXJlPyc7XG4gICAgICAgIC8vICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgLy8gICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyAgIHVybCArPSAnJmltYWdldXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBvcGVuIHNoYXJlIGxpbmsgaW4gYSBwb3B1cFxuICAgICAgICByb290LnBvcHVwID0gZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHZhciBsZWZ0LCB0b3A7IFxuICBcbiAgICAgICAgdmFyIHBvcHVwV2lkdGggPSA2MDAsXG4gICAgICAgICAgICBwb3B1cEhlaWdodCA9IDUwMDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBjYWN1bGF0ZSBicm93c2VyIHdpbmRvdyB3aWR0aFxuICAgICAgICAvLyBpZiB3aW5kb3cgd2lkdGggaXMgdG9vIG5hcnJvdywgdXNlIHNjcmVlbiB3aWR0aDtcbiAgICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6IHNjcmVlbi53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogc2NyZWVuLmhlaWdodDtcbiAgICAgICAgaWYgKHdpZHRoIDwgNjAwICYmIGhlaWdodCA8IDUwMCkge1xuICAgICAgICAgIGxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAocG9wdXBXaWR0aCAvIDIpO1xuICAgICAgICAgIHRvcCA9IChzY3JlZW4uaGVpZ2h0IC8gMikgLSAocG9wdXBIZWlnaHQgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzZXQgbGVmdCBhbmQgdG9wIHBvc2l0aW9uXG4gICAgICAgICAgICAgIHZhciBkdWFsU2NyZWVuTGVmdCA9IHdpbmRvdy5zY3JlZW5MZWZ0ICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogc2NyZWVuLmxlZnQsXG4gICAgICAgICAgICBkdWFsU2NyZWVuVG9wID0gd2luZG93LnNjcmVlblRvcCAhPSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogc2NyZWVuLnRvcDtcbiAgICAgICAgICAvLyBjYWxjdWxhdGUgdG9wIGFuZCBsZWZ0IHBvc2l0aW9uXG4gICAgICAgICAgbGVmdCA9ICgod2lkdGggLyAyKSAtIChwb3B1cFdpZHRoIC8gMikpICsgZHVhbFNjcmVlbkxlZnQ7XG4gICAgICAgICAgdG9wID0gKChoZWlnaHQgLyAyKSAtIChwb3B1cEhlaWdodCAvIDIpKSArIGR1YWxTY3JlZW5Ub3A7XG4gICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIHZhciBzaGFyZVdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwndGFyZ2V0V2luZG93JywndG9vbGJhcj1ubyxsb2NhdGlvbj1ubyxzdGF0dXM9bm8sbWVudWJhcj1ubyxzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHdpZHRoPScgKyBwb3B1cFdpZHRoICsgJywgaGVpZ2h0PScgKyBwb3B1cEhlaWdodCArICcsIHRvcD0nICsgdG9wICsgJywgbGVmdD0nICsgbGVmdCk7XG4gICAgICAgICAgICAvLyBQdXRzIGZvY3VzIG9uIHRoZSBuZXdXaW5kb3dcbiAgICAgICAgICBpZiAod2luZG93LmZvY3VzKSB7XG4gICAgICAgICAgICAgIHNoYXJlV2luZG93LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgICAvKiBTZXQgb3B0aW9uc1xuICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBcbiAgICAgICAgICAvLyBjcmVhdGUgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgICAgcm9vdC5vcHRpb25zID0ge1xuICAgICAgICAgICAgICBpY29uU3R5bGU6ICdkZWZhdWx0JywgLy8gZGVmYXVsdCBvciBib3hcbiAgICAgICAgICAgICAgYm94Rm9ybTogJ2hvcml6b250YWwnLCAvLyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tQ2VudGVyJywgLy8gdG9wIC8gbWlkZGxlIC8gYm90dG9tICsgTGVmdCAvIENlbnRlciAvIFJpZ2h0XG4gICAgICAgICAgICAgIHByb3RvY29sOiBbJ2h0dHAnLCAnaHR0cHMnXS5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc6JylbMF0pID09PSAtMSA/ICdodHRwczovLycgOiAnLy8nLFxuICAgICAgICAgICAgICBuZXR3b3JrczogJ1R3aXR0ZXIsRmFjZWJvb2ssUmVkZGl0LExpbmtlZGluLFR1bWJscixQaW50ZXJlc3QsV2VpYm8sV2VjaGF0LERvdWJhbixRUVpvbmUsTWFpbHRvJyxcbiAgICAgICAgICAgICAgaWNvbnM6IFsnZmEgZmEtdHdpdHRlcicsJ2ZhIGZhLWZhY2Vib29rJywnZmEgZmEtcmVkZGl0LWFsaWVuJywnZmEgZmEtbGlua2VkaW4nLCdmYSBmYS10dW1ibHInLCdmYSBmYS1waW50ZXJlc3QnLCdmYSBmYS13ZWlibycsJ2ZhIGZhLXdlaXhpbicsJzknLCdmYSBmYS1xcScsJ2ZhIGZhLWVudmVsb3BlLW8nXVxuICAgICAgICAgIH07XG4gIFxuICAgICAgLy8gaW50ZWdyYXRlIGN1c3RvbSBvcHRpb25zXG4gICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgcm9vdC5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnZlcnQgbmV0d29ya3Mgc3RyaW5nIGludG8gYXJyYXlcbiAgICAgIHJvb3Qub3B0aW9ucy5uZXR3b3JrcyA9IHJvb3Qub3B0aW9ucy5uZXR3b3Jrcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gIFxuICAgICAgZnVuY3Rpb24gZ2V0T3B0aW9ucyhlbCkge1xuICAgICAgICAgIC8vIGludGVncmF0ZSBkYXRhIGF0dHJpYnV0ZSBvcHRpb25zXG4gICAgICAgICAgdmFyIHJldCA9IHt9O1xuICAgICAgICAgIGZvciAodmFyIGkgaW4gcm9vdC5vcHRpb25zKSB7XG4gICAgICAgICAgICByZXRbaV0gPSByb290Lm9wdGlvbnNbaV07XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAvLyB0aGVzZSBhdHRycyBtdXN0IGdldCBkeW5hbWljYWxseS5cbiAgICAgICAgICByZXQudXJsID0gcm9vdC5vcHRpb25zLnVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICByZXQudGl0bGUgPSByb290Lm9wdGlvbnMudGl0bGUgfHwgcm9vdC5nZXRUaXRsZSgpO1xuICAgICAgICAgIHJldC5pbWFnZSA9IHJvb3Qub3B0aW9ucy5pbWFnZSB8fCByb290LmdldEltYWdlKCk7XG4gICAgICAgICAgcmV0LmRlc2NyaXB0aW9uID0gcm9vdC5vcHRpb25zLmRlc2NyaXB0aW9uIHx8IHJvb3QuZ2V0RGVzY3JpcHRpb24oKTtcbiAgXG4gICAgICAgICAgZm9yICh2YXIgb3B0aW9uIGluIGVsLmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgLy8gcmVwbGFjZSBvbmx5ICdzaGFyZS0nIHByZWZpeGVkIGRhdGEtYXR0cmlidXRlc1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5tYXRjaCgvc2hhcmUvKSkge1xuICAgICAgICAgICAgICB2YXIgbmV3X29wdGlvbiA9IG9wdGlvbi5yZXBsYWNlKC9zaGFyZS8sICcnKTtcbiAgICAgICAgICAgICAgaWYgKCFuZXdfb3B0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmV3X29wdGlvbiA9IG5ld19vcHRpb24uY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuZXdfb3B0aW9uLnNsaWNlKDEpO1xuICAgICAgICAgICAgICB2YXIgdmFsID0gZWwuZGF0YXNldFtvcHRpb25dO1xuICAgICAgICAgICAgICBpZiAobmV3X29wdGlvbiA9PT0gJ25ldHdvcmtzJykge1xuICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdfb3B0aW9uID09PSAndXJsJyAmJiB2YWwgJiYgdmFsWzBdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGZpeCByZWxhdGl2ZSB1cmwgcHJvYmxlbS5cbiAgICAgICAgICAgICAgICAgIHZhbCA9IGxvY2F0aW9uLm9yaWdpbiArIHZhbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXRbbmV3X29wdGlvbl0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gIFxuICAgICAgZnVuY3Rpb24gY3JlYXRlRHJvcGRvd24oZWwpIHtcbiAgICAgICAgICAvLyBjcmVhdGUgZHJvcGRvd25cbiAgICAgICAgICB2YXIgZHJvcGRvd25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSA9ICduZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bic7XG4gICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bicpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICBcbiAgICAgICAgICAvLyBzZXQgZHJvcGRvd24gcm93IGxlbmd0aFxuICAgICAgICAgIGlmIChteW9wdGlvbnMuaWNvblN0eWxlID09ICdib3gnICYmIG15b3B0aW9ucy5ib3hGb3JtID09ICdob3Jpem9udGFsJylcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3gtaG9yaXpvbnRhbCc7XG4gICAgICAgICAgZWxzZSBpZiAobXlvcHRpb25zLmljb25TdHlsZSA9PSAnYm94JyAmJiBteW9wdGlvbnMuYm94Rm9ybSA9PSAndmVydGljYWwnKVxuICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJveC12ZXJ0aWNhbCc7XG4gIFxuICAgICAgICAgIC8vIHNldCBkcm9wZG93biBwb3NpdGlvbiBcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKG15b3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgICAgICAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1sZWZ0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtcmlnaHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ3RvcENlbnRlcic6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdtaWRkbGVMZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLW1pZGRsZS1sZWZ0JztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpblRvcCA9IC0gZHJvcGRvd25FbC5vZmZzZXRIZWlnaHQgLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdtaWRkbGVSaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1taWRkbGUtcmlnaHQnO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luVG9wID0gLSBkcm9wZG93bkVsLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWxlZnQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1yaWdodCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tQ2VudGVyJzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1jZW50ZXInO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC0gZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwxKTtcbiAgXG4gIFxuICAgICAgICAgIC8vIGZpbGwgZnJvcGRvd24gd2l0aCBidXR0b25zXG4gICAgICAgICAgdmFyIGljb25DbGFzcyA9IG15b3B0aW9ucy5pY29uU3R5bGUgPT0gJ2RlZmF1bHQnID8gJ25lZWQtc2hhcmUtYnV0dG9uX2xpbmsgbmVlZC1zaGFyZS1idXR0b25fJyA6ICduZWVkLXNoYXJlLWJ1dHRvbl9saW5rLScgKyBteW9wdGlvbnMuaWNvblN0eWxlICsgJyBuZWVkLXNoYXJlLWJ1dHRvbl9saW5rIG5lZWQtc2hhcmUtYnV0dG9uXyc7XG4gICAgICAgICAgbGV0IGZsYWcgPSAwO1xuICAgICAgICAgIGZvciAodmFyIG5ldHdvcmsgaW4gbXlvcHRpb25zLm5ldHdvcmtzKSB7XG4gICAgICAgICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgbmV0d29yayA9IG15b3B0aW9ucy5uZXR3b3Jrc1tuZXR3b3JrXTtcbiAgICAgICAgICAgICAgbGluay5jbGFzc05hbWUgPSBpY29uQ2xhc3MgKyBuZXR3b3JrO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteW9wdGlvbnMuaWNvbnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgbGluay5jbGFzc05hbWUgKz0gJyAnK215b3B0aW9ucy5pY29uc1tmbGFnXTtcbiAgICAgICAgICAgICAgbGluay5kYXRhc2V0Lm5ldHdvcmsgPSBuZXR3b3JrO1xuICAgICAgICAgICAgICBsaW5rLnRpdGxlID0gbmV0d29yaztcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgICAgICAgZmxhZysrO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgZHJvcGRvd25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgIGlmIChjbG9zZXN0KGV2ZW50LnRhcmdldCwgJy5uZWVkLXNoYXJlLWJ1dHRvbl9saW5rJykpIHtcbiAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIFxuICAgICAgICAgICAgICAgICByb290LnNoYXJlW2V2ZW50LnRhcmdldC5kYXRhc2V0Lm5ldHdvcmtdKGVsKTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZHJvcGRvd25FbCk7XG4gICAgICB9XG4gIFxuICAgICAgdmFyIHRhcmdldEVsID0gdHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKSA6IGVsZW07XG4gICAgICAgaWYgKHRhcmdldEVsICYmIHRhcmdldEVsLmNsYXNzTGlzdC5jb250YWlucygnbmVlZC1zaGFyZS1wYW5lbCcpKSB7XG4gICAgICAgIGNyZWF0ZURyb3Bkb3duKHRhcmdldEVsKTtcbiAgICAgICAgLy8gdGFyZ2V0RWwuY2xhc3NMaXN0LmFkZCgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gICAgICB9IGVsc2UgXG4gICAgICAgIC8vIGNsb3NlIG9uIGNsaWNrIG91dHNpZGVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHZhciBvcGVuZWRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgXG4gICAgICAgICAgaWYgKCFjbG9zZXN0KGV2ZW50LnRhcmdldCwgJy5uZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKSkge1xuICAgICAgICAgICAgaWYgKG9wZW5lZEVsKSB7XG4gICAgICAgICAgICAgICAgb3BlbmVkRWwuY2xhc3NMaXN0LnJlbW92ZSgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gIFxuICAgICAgICAgICAgICAgIC8vIGhpZGUgd2VjaGF0IGNvZGUgaW1hZ2Ugd2hlbiBjbG9zZSB0aGUgZHJvcGRvd24uXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5lZEVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkRWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCByb290LmVsZW0pO1xuICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURyb3Bkb3duKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XG4gIFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICBcbiAgICB9O1xuICBcbiAgICBuZXcgbmVlZFNoYXJlQnV0dG9uKCcubmVlZC1zaGFyZS1idXR0b24nKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50b2NfYnRuKCk7XG4gICAgfSxcbiAgICB0b2NfYnRuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHRvY19jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9jX2NvbnRhaW5lcicpO1xuICAgICAgICBsZXQgdG9jX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2NfYnRuJyk7XG4gICAgICAgICQodG9jX2J0bikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICh0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJyl7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5cblxuXG4iLCIvKlxuICogQEF1dGhvcjogd3p0bGluazEwMTNcbiAqIEBEYXRlOiAyMDIyLTA3LTA3IDE4OjQ4OjE4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTA3LTEwIDAwOjI2OjExXG4gKiBARGVzY3JpcHRpb246XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMud2ViX2luZm9fcnVudGltZSgpXG4gIH0sXG4gIC8vIFRPRE86ICEhIeaIkeedgOWunuS4jeefpemBk+i/meaYr+S4quS7gOS5iOenmFxuICB3ZWJfaW5mb19ydW50aW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMScpKSB7XG4gICAgLy8gICBsZXQgQmlydGhEYXkgPSBuZXcgRGF0ZShuZXcgRGF0ZSgnMjAyMC8wMS8wNCcpKVxuICAgIC8vICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIC8vICAgbGV0IHRpbWVvbGQgPSB0b2RheS5nZXRUaW1lKCkgLSBCaXJ0aERheS5nZXRUaW1lKClcbiAgICAvLyAgIGxldCBkYXlzb2xkID0gTWF0aC5mbG9vcih0aW1lb2xkIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKVxuICAgIC8vICAgbGV0IG9iaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMScpXG4gICAgLy8gICBvYmouaW5uZXJIVE1MID0gZGF5c29sZCArICcg5aSpJ1xuICAgIC8vICAgY29uc29sZS5sb2cob2JqKVxuICAgIC8vIH1cbiAgfSxcbn1cbiJdfQ==
