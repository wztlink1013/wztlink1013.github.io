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

var header = $(".header");
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
var device_center_center = "100%"; // 判断pc段左右上角的箭头该显示哪个

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
    console.log("布局：左中右");
    console.log(localStorage.getItem("layout"));
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
    console.log("布局：左中");
    console.log(localStorage.getItem("layout"));
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
    console.log("布局：中右");
    console.log(localStorage.getItem("layout"));
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
    console.log("布局：中");
    console.log(localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "C");
  }
}

function device_small() {
  // 最小尺寸：最大560px
  console.log("小于560px尺寸");
  header.css({
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
  console.log("小于980px尺寸");
  header.css({
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
  console.log("小于1261px尺寸");

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

  header.css({
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
      });
    }); // 点击毛玻璃片

    app_side_glass.click(function () {
      app_side_glass.css({
        display: "none"
      });
      app_side_content.css({
        display: "none"
      });
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
      console.log("有layout布局缓存");

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
      console.log("没有layout布局缓存");

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
        console.log("大于设定最大尺寸情况");
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
    twikoo.init({
      envId: 'https://twikoo.wztlink1013.com/',
      el: '#tcomment',
      // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
      // path: 'window.location.pathname', // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
      // 评论加载成功后的回调函数。
      // 发表评论后自动刷新评论时、加载下一页评论时，也会触发。
      // 评论加载失败时不会触发。
      onCommentLoaded: function onCommentLoaded() {
        console.log('Twikoo all comments loaded');
      }
    }).then(function () {
      // Twikoo 成功挂载后的回调函数。环境 ID 错误、网络异常、挂载失败等情况时不会触发。
      console.log('Twikoo loading finished');
    });
  },
  // 右下角按钮事件 是否前往评论区
  go_comments: function go_comments() {
    if (document.querySelector('#go_comments')) {
      document.querySelector('#go_comments').style.display = 'block';
    }
  },
  // 文章评论数
  comments_count: function comments_count() {
    // 判断页面是否有评论区id和引用评论数的id
    if (document.querySelector('#comments') && document.querySelector('#twikoo_comments')) {
      var twikoo_comments = document.querySelector('#twikoo_comments'); // BOM获取页面url的pathname路径

      var twikoo_comments_url = [location.pathname];
      twikoo.getCommentsCount({
        envId: 'https://twikoo.wztlink1013.com/',
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
    var hot_articles = document.querySelector('.hot_articles_item');
    var page_size = 8;
    twikoo.getRecentComments({
      envId: 'https://twikoo.wztlink1013.com/',
      // 环境 ID
      // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
      pageSize: page_size,
      // 获取多少条，默认：10，最大：100
      includeReply: false // 是否包括最新回复，默认：false

    }).then(function (res) {
      var new_comments_loding = document.querySelector('.new_comments_loding');
      var new_comments_loding_parent = new_comments_loding.parentElement;
      new_comments_loding_parent.removeChild(new_comments_loding); // 插入评论

      for (var i = 0; i < page_size; i++) {
        if (res[i].comment) {
          var new_comments_content = res[i].comment;
          var new_comments_nick = res[i].nick;
          var new_comments_url = res[i].url;
          var new_comments_avatar = res[i].avatar;
          var new_comments_time = res[i].relativeTime;
          var new_comments_id = '#' + res[i].id;
          var hot_articles_child = document.createElement('li');
          hot_articles_child.innerHTML = '<div class="item_up"><img src="' + new_comments_avatar + '" class="avatar"><div class="nick_name"><span class="nick">' + new_comments_nick + '</span><span class="time">' + new_comments_time + '</span></div></div><div class="item_down"><a href="' + new_comments_url + new_comments_id + '">' + new_comments_content + '</a></div>';
          hot_articles.append(hot_articles_child);
        }
      }
    })["catch"](function (err) {
      console.error(err);
    });
  },
  // 切换评论(评论组件存在时)
  switch_comment: function switch_comment() {
    if (document.querySelector('#switch_btn')) {
      var switch_btn = document.querySelector('#switch_btn');
      var github_comment = document.querySelector('#github_comment');
      var twikoo_comment = document.querySelector('#twikoo_comment');
      switch_btn.addEventListener('click', function () {
        switch_btn.classList.toggle('move');
        github_comment.classList.toggle('content-in');
        twikoo_comment.classList.toggle('content-in');

        if (github_comment.style.display === 'none') {
          github_comment.style.display = 'block';
          twikoo_comment.style.display = 'none';
        } else {
          // Twikoo 评论系统
          github_comment.style.display = 'none';
          twikoo_comment.style.display = 'block';
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
    var global_button_search_box_pc = document.querySelector("#search_btn_pc");
    global_button_search_box.addEventListener("click", function () {
      if (document.querySelector(".search_box").style.display === "block") {
        document.querySelector(".search_box").style.display = "none";
      } else {
        document.querySelector(".search_box").style.display = "block"; // document.querySelector('#local-search-input').focus();
      }
    });
    global_button_search_box_pc.addEventListener("click", function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY2F0ZWdvcmllcy5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvc2VhcmNoLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9zaGFyZWJ1dHRvbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvdG9jLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC93ZWJfaW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBO0FBQ0EsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGFBQUQsQ0FBbEI7QUFDQSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsY0FBRCxDQUFuQixDLENBRUE7O0FBQ0EsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFVBQUQsQ0FBZjtBQUNBLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxXQUFELENBQWhCO0FBQ0EsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQUQsQ0FBakI7QUFDQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQixDLENBRUE7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Y0FDRjtZQUNKO1VBQ0Y7UUFDRixDQXhCRDtJQTBCSCxDQXRmQzs7SUF3ZkYsSUFBSSxlQUFKLENBQW9CLG9CQUFwQjtFQUNEO0FBM2hCWSxDOzs7Ozs7Ozs7O2VDUEE7RUFDWCxJQUFJLEVBQUUsZ0JBQVc7SUFDYixLQUFLLE9BQUw7RUFDSCxDQUhVO0VBSVgsT0FBTyxFQUFFLG1CQUFXO0lBQ2hCLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixDQUFwQjtJQUNBLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCLENBQWQ7SUFDQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcsS0FBWCxDQUFpQixZQUFVO01BQ3ZCLElBQUksYUFBYSxDQUFDLEtBQWQsQ0FBb0IsT0FBcEIsS0FBZ0MsTUFBcEMsRUFBNEM7UUFDeEMsYUFBYSxDQUFDLEtBQWQsQ0FBb0IsT0FBcEIsR0FBOEIsT0FBOUI7TUFDSCxDQUZELE1BRU8sSUFBSSxhQUFhLENBQUMsS0FBZCxDQUFvQixPQUFwQixLQUFnQyxPQUFwQyxFQUE0QztRQUMvQyxhQUFhLENBQUMsS0FBZCxDQUFvQixPQUFwQixHQUE4QixNQUE5QjtNQUNILENBRk0sTUFFQTtRQUNILGFBQWEsQ0FBQyxLQUFkLENBQW9CLE9BQXBCLEdBQThCLE9BQTlCO01BQ0g7SUFDSixDQVJEO0VBU0g7QUFoQlUsQzs7Ozs7Ozs7Ozs7QUNBZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFDZTtFQUNiLElBQUksRUFBRSxnQkFBWTtJQUNoQixLQUFLLGdCQUFMO0VBQ0QsQ0FIWTtFQUliO0VBQ0EsZ0JBQWdCLEVBQUUsNEJBQVksQ0FDNUI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Q7QUFmWSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gUEPvvJpoZWFkZXLkuIrnmoTlt6blj7PmjInpkq7ljLrln59cbmxldCBhcnJvd19sZWZ0ID0gJChcIiNhcnJvd19sZWZ0XCIpO1xubGV0IGFycm93X3JpZ2h0ID0gJChcIiNhcnJvd19yaWdodFwiKTtcblxuLy8g5biD5bGA77ya54mI5b+D44CB5bem5Lit5Y+z5o6S54mIXG5sZXQgY3RfbGVmdCA9ICQoXCIuY3RfbGVmdFwiKTtcbmxldCBjdF9yaWdodCA9ICQoXCIuY3RfcmlnaHRcIik7XG5sZXQgY3RfY2VudGVyID0gJChcIi5jdF9jZW50ZXJcIik7XG5sZXQgY29udGFpbmVyID0gJChcIi5jb250YWluZXJcIik7XG5cbi8vIFBDL2FwcO+8muWIh+aNomhlYWRlclxubGV0IGhlYWRlciA9ICQoXCIuaGVhZGVyXCIpO1xubGV0IGhlYWRlcl9hcHAgPSAkKFwiLmhlYWRlcl9hcHBcIik7XG5cbi8vIGFwcO+8mmhlYWRlcuS4iueahOW3puWPs+aMiemSruWMuuWfn1xubGV0IGJ0bl9hcHBfc2lkZXIgPSAkKFwiI2J0bl9hcHBfc2lkZXJcIik7XG5sZXQgYnRuX2FwcF9yaWdodCA9ICQoXCIjYnRuX2FwcF9yaWdodFwiKTtcblxuLy8gYXBw77ya54K55Ye7aGVhZGVyX2FwcOaXtuWAmeW8ueWHuuadpeeahOaKveWxiVxubGV0IGFwcF9zaWRlX2dsYXNzID0gJChcIiNhcHBfc2lkZV9nbGFzc1wiKTtcbmxldCBhcHBfc2lkZV9jb250ZW50ID0gJChcIiNhcHBfc2lkZV9jb250ZW50XCIpO1xuXG4vLyAxLuW3puS4remFjee9rlxubGV0IG9uZV9jb250YWluZXIgPSBcIjgwJVwiO1xubGV0IG9uZV9jdF9jZW50ZXJfd2lkdGggPSBcIjc1JVwiO1xubGV0IG9uZV9jdF9sZWZ0X3dpZHRoID0gXCIyNSVcIjtcbi8vIDIuIOS4reWPs+mFjee9rlxubGV0IHR3b19jb250YWluZXIgPSBcIjgwJVwiO1xubGV0IHR3b19jdF9jZW50ZXJfd2lkdGggPSBcIjc1JVwiO1xubGV0IHR3b19jdF9yaWdodF93aWR0aCA9IFwiMjUlXCI7XG4vLyAzLiDlt6bkuK3lj7PphY3nva5cbmxldCB0aHJlZV9jb250YWluZXIgPSBcIjk1JVwiO1xubGV0IHRocmVlX2N0X2NlbnRlcl93aWR0aCA9IFwiNjAlXCI7XG5sZXQgdGhyZWVfY3RfcmlnaHRfd2lkdGggPSBcIjIwJVwiO1xubGV0IHRocmVlX2N0X2xlZnRfd2lkdGggPSBcIjIwJVwiO1xuLy8gNC4g5Lit6YWN572uXG5sZXQgZm91cl9jb250YWluZXIgPSBcIjc1JVwiO1xubGV0IGZvdXJfY3RfY2VudGVyX3dpZHRoID0gXCIxMDAlXCI7XG4vLyDorr7lpIflsI/kuo41NjBweOeahOS4remFjee9rlxubGV0IGRldmljZV9zbWFsbF9jb250YWluZXIgPSBcIjk4JVwiO1xubGV0IGRldmljZV9zbWFsbF9jZW50ZXIgPSBcIjEwMCVcIjtcbi8vIOiuvuWkh+Wwj+S6jjc4MHB455qE5Lit6YWN572uXG5sZXQgZGV2aWNlX2NlbnRlcl9jb250YWluZXIgPSBcIjk2JVwiO1xubGV0IGRldmljZV9jZW50ZXJfY2VudGVyID0gXCIxMDAlXCI7XG5cbi8vIOWIpOaWrXBj5q615bem5Y+z5LiK6KeS55qE566t5aS06K+l5pi+56S65ZOq5LiqXG5mdW5jdGlvbiBsZWZ0X3JpZ2h0X2Fycm93KCkge1xuICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gIH1cbiAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gIH0gZWxzZSB7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGxlZnRfY2VudGVyX3JpZ2h0KCkge1xuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IHRocmVlX2NvbnRhaW5lciB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKHtcbiAgICB3aWR0aDogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIH0pO1xuICBjdF9yaWdodC5jc3Moe1xuICAgIHdpZHRoOiB0aHJlZV9jdF9yaWdodF93aWR0aCxcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIH0pO1xuICBsZWZ0X3JpZ2h0X2Fycm93KCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsYXlvdXRcIik7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFJcIik7XG4gICAgY29uc29sZS5sb2coXCLluIPlsYDvvJrlt6bkuK3lj7NcIik7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxSXCIpO1xuICB9XG59XG5mdW5jdGlvbiBsZWZ0X2NlbnRlcigpIHtcbiAgY29udGFpbmVyLmNzcyh7IHdpZHRoOiBvbmVfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IG9uZV9jdF9jZW50ZXJfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKHsgd2lkdGg6IG9uZV9jdF9sZWZ0X3dpZHRoIH0pO1xuICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGxlZnRfcmlnaHRfYXJyb3coKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShcImxheW91dFwiKSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxheW91dFwiKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMXCIpO1xuICAgIGNvbnNvbGUubG9nKFwi5biD5bGA77ya5bem5LitXCIpO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMXCIpO1xuICB9XG59XG5mdW5jdGlvbiBjZW50ZXJfcmlnaHQoKSB7XG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogdHdvX2NvbnRhaW5lciB9KTtcbiAgY3RfcmlnaHQuY3NzKHsgd2lkdGg6IHR3b19jdF9yaWdodF93aWR0aCB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiB0d29fY3RfY2VudGVyX3dpZHRoIH0pO1xuICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gIGxlZnRfcmlnaHRfYXJyb3coKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShcImxheW91dFwiKSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxheW91dFwiKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJSXCIpO1xuICAgIGNvbnNvbGUubG9nKFwi5biD5bGA77ya5Lit5Y+zXCIpO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJSXCIpO1xuICB9XG59XG5mdW5jdGlvbiBjZW50ZXIoKSB7XG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogZm91cl9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogZm91cl9jdF9jZW50ZXJfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBsZWZ0X3JpZ2h0X2Fycm93KCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsYXlvdXRcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJDXCIpO1xuICAgIGNvbnNvbGUubG9nKFwi5biD5bGA77ya5LitXCIpO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJDXCIpO1xuICB9XG59XG5mdW5jdGlvbiBkZXZpY2Vfc21hbGwoKSB7XG4gIC8vIOacgOWwj+WwuuWvuO+8muacgOWkpzU2MHB4XG4gIGNvbnNvbGUubG9nKFwi5bCP5LqONTYwcHjlsLrlr7hcIik7XG5cbiAgaGVhZGVyLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICBoZWFkZXJfYXBwLmNzcyh7IGRpc3BsYXk6IFwiYmxvY2tcIiB9KTtcbiAgLy8g6K6+572u5biD5bGAXG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogZGV2aWNlX3NtYWxsX2NvbnRhaW5lciB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiBkZXZpY2Vfc21hbGxfY2VudGVyIH0pO1xuICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbn1cbmZ1bmN0aW9uIGRldmljZV9jZW50ZXIoKSB7XG4gIC8vIOS4reetieWwuuWvuO+8muacgOWkpzk4MHB4XG4gIGNvbnNvbGUubG9nKFwi5bCP5LqOOTgwcHjlsLrlr7hcIik7XG5cbiAgaGVhZGVyLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICBoZWFkZXJfYXBwLmNzcyh7IGRpc3BsYXk6IFwiYmxvY2tcIiB9KTtcbiAgLy8g6K6+572u5biD5bGAXG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogZGV2aWNlX2NlbnRlcl9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogZGV2aWNlX2NlbnRlcl9jZW50ZXIgfSk7XG4gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xufVxuZnVuY3Rpb24gZGV2aWNlX2xhcmdlc3QoKSB7XG4gIC8vIOacgOWkp+WwuuWvuO+8muacgOWkpzEyNjFweFxuICBjb25zb2xlLmxvZyhcIuWwj+S6jjEyNjFweOWwuuWvuFwiKTtcblxuICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gIH1cbiAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gIH0gZWxzZSB7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gIH1cbiAgaGVhZGVyLmNzcyh7IGRpc3BsYXk6IFwiYmxvY2tcIiB9KTtcbiAgaGVhZGVyX2FwcC5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcblxuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IHRocmVlX2NvbnRhaW5lciB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKHtcbiAgICB3aWR0aDogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIH0pO1xuICBjdF9yaWdodC5jc3Moe1xuICAgIHdpZHRoOiB0aHJlZV9jdF9yaWdodF93aWR0aCxcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJ0bl9wY19zd2l0Y2goKTtcbiAgICB0aGlzLmJ0bl9hcHBfc3dpdGNoKCk7XG4gICAgdGhpcy5icm93c2VyX3JlbWVtYmVyKCk7XG4gICAgdGhpcy5kZXZpY2Vfc3dpdGNoKCk7IC8vIOi/meS4quaUvuWIsOacgOWQjuiHquiwg+eUqCHlm6DkuLrkuI3nrqHmnKzlnLDlrZjlgqjmmK/ku4DkuYjvvIzmnIDnu4jov5jmmK/opoHmoLnmja7orr7lpIfnm5HlkKzkuLrkuLtcbiAgfSxcbiAgLyogUEPvvJrljZUv5Y+ML+S4ieagj+W4g+WxgOWIh+aNouaMiemSrueCueWHu+S6i+S7tiAqL1xuICBidG5fcGNfc3dpdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgYXJyb3dfbGVmdC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAvLyDovazmjaLliIfmjaLkuYvlkI7nmoTnrq3lpLTmjInpkq5cbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIC8v5bem5Lit6YWN572uXG4gICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL+W3puS4reWPs+mFjee9rlxuICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIC8v5Lit6YWN572uXG4gICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy/kuK3lj7PphY3nva5cbiAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXJyb3dfcmlnaHQuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgIC8vIOi9rOaNouWIh+aNouS5i+WQjueahOeureWktOaMiemSrlxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gICAgICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAvL+S4reWPs+mFjee9rlxuICAgICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8v5bem5Lit5Y+z6YWN572uXG4gICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAvLyDkuK3phY3nva5cbiAgICAgICAgICBjZW50ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyDlt6bkuK3phY3nva5cbiAgICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIC8qIOenu+WKqOerr+W3puWPs+S4iuinkueahOaMiemSriAqL1xuICBidG5fYXBwX3N3aXRjaDogZnVuY3Rpb24gKCkge1xuICAgIC8vIOeCueWHu+W3puaMiemSrlxuICAgIGJ0bl9hcHBfc2lkZXIuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgYXBwX3NpZGVfZ2xhc3MuY3NzKHsgZGlzcGxheTogXCJibG9ja1wiIH0pO1xuICAgICAgYXBwX3NpZGVfY29udGVudC5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gICAgfSk7XG4gICAgLy8g54K55Ye75q+b546755KD54mHXG4gICAgYXBwX3NpZGVfZ2xhc3MuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgYXBwX3NpZGVfZ2xhc3MuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgICBhcHBfc2lkZV9jb250ZW50LmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgIH0pO1xuICAgIC8vIOeCueWHu+WPs+aMiemSriDlvLnlh7rmkJzntKLmoYZcbiAgICBidG5fYXBwX3JpZ2h0LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGFsZXJ0KFwi5pys572R56uZ6L+Y5Zyo5byA5Y+R5Lit77yM6K+45aSa5Yqf6IO96L+Y5pyq5a6M5ZaE77yM5pWs6K+35pyf5b6FflwiKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwi5pys572R56uZ6L+Y5Zyo5byA5Y+R5Lit77yM6K+45aSa5Yqf6IO96L+Y5pyq5a6M5ZaE77yM5pWs6K+35pyf5b6FflwiKTtcbiAgICB9KTtcbiAgfSxcbiAgLyog5rWP6KeI5Zmo6K6w5L2P5biD5bGAICovXG4gIGJyb3dzZXJfcmVtZW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYl9sZWZ0ID0gY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpO1xuICAgIGxldCBiX3JpZ2h0ID0gY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKTtcbiAgICBsZXQgYl9sYXlvdXQ7XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KFwibGF5b3V0XCIpKSB7XG4gICAgICAvLyDmtY/op4jlmajmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgIGxldCBsYXlvdXRfY2hhbmdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpO1xuICAgICAgY29uc29sZS5sb2coXCLmnIlsYXlvdXTluIPlsYDnvJPlrZhcIik7XG4gICAgICBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJMUlwiKSB7XG4gICAgICAgIC8vIOW3puS4reWPs+W4g+WxgFxuICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkxcIikge1xuICAgICAgICAvLyDlt6bkuK3luIPlsYBcbiAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJSXCIpIHtcbiAgICAgICAgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkNcIikge1xuICAgICAgICAvLyDkuK3luIPlsYBcbiAgICAgICAgY2VudGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlhbbku5bojqvlkI3lhbblppnnmoTmg4XlhrVcbiAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5rWP6KeI5Zmo5rKh5pyJ57yT5a2Y55qE5oOF5Ya1XG4gICAgICBjb25zb2xlLmxvZyhcIuayoeaciWxheW91dOW4g+WxgOe8k+WtmFwiKTtcbiAgICAgIGlmIChiX2xlZnQgPT09IFwiYmxvY2tcIiAmJiBiX3JpZ2h0ID09PSBcIm5vbmVcIikge1xuICAgICAgICAvLyDlt6bkuK3luIPlsYBcbiAgICAgICAgYl9sYXlvdXQgPSBcIkxcIjtcbiAgICAgIH0gZWxzZSBpZiAoYl9sZWZ0ID09PSBcIm5vbmVcIiAmJiBiX3JpZ2h0ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgIGJfbGF5b3V0ID0gXCJSXCI7XG4gICAgICB9IGVsc2UgaWYgKGJfbGVmdCA9PT0gXCJibG9ja1wiICYmIGJfcmlnaHQgPT09IFwiYmxvY2tcIikge1xuICAgICAgICAvL+W3puS4reWPs+W4g+WxgFxuICAgICAgICBiX2xheW91dCA9IFwiTFJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJfbGF5b3V0ID0gXCJMUlwiO1xuICAgICAgICAvLyDlt6bkuK3lj7PluIPlsYBcbiAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBiX2xheW91dCk7XG4gICAgfVxuICB9LFxuICAvKiDlqpLkvZPmn6Xor6LluIPlsYAgKi9cbiAgZGV2aWNlX3N3aXRjaDogZnVuY3Rpb24gKCkge1xuICAgIC8vIOWIm+W7uuafpeivouWIl+ihqFxuICAgIGxldCBkZXZpY2Vfd2lkdGggPSBbXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDU2MHB4KVwiKSxcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTgwcHgpXCIpLFxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMjYxcHgpXCIpLFxuICAgIF07XG5cbiAgICAvLyDlrprkuYnlm57osIPlh73mlbBcbiAgICBmdW5jdGlvbiBtZWRpYU1hdGNocygpIHtcbiAgICAgIGlmIChkZXZpY2Vfd2lkdGhbMF0ubWF0Y2hlcykge1xuICAgICAgICBkZXZpY2Vfc21hbGwoKTtcbiAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX3dpZHRoWzFdLm1hdGNoZXMpIHtcbiAgICAgICAgZGV2aWNlX2NlbnRlcigpO1xuICAgICAgfSBlbHNlIGlmIChkZXZpY2Vfd2lkdGhbMl0ubWF0Y2hlcykge1xuICAgICAgICBkZXZpY2VfbGFyZ2VzdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLlpKfkuo7orr7lrprmnIDlpKflsLrlr7jmg4XlhrVcIik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOWFiOi/kOihjOS4gOasoeWbnuiwg+WHveaVsFxuICAgIG1lZGlhTWF0Y2hzKCk7XG4gICAgLy8g5Li65p+l6K+i5YiX6KGo5rOo5YaM55uR5ZCs5Zmo77yM5ZCM5pe25bCG5Zue6LCD5Ye95pWw5Lyg57uZ55uR5ZCs5ZmoXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXZpY2Vfd2lkdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRldmljZV93aWR0aFtpXS5hZGRMaXN0ZW5lcihtZWRpYU1hdGNocyk7XG4gICAgfVxuICB9LFxufTtcbiIsImltcG9ydCBsYXlvdXRfb2JqZWN0IGZyb20gXCIuL2NvbW1vbi9sYXlvdXQuanNcIjtcbmltcG9ydCB0b2Nfb2JqZWN0IGZyb20gXCIuL3BhcnQvdG9jLmpzXCI7XG5pbXBvcnQgY29tbWVudHNfb2JqZWN0IGZyb20gXCIuL3BhcnQvY29tbWVudHMuanNcIjtcbmltcG9ydCB7IGdvX3RvcF9vYmplY3QsIGdldFNjcm9sbCB9IGZyb20gXCIuL3BhcnQvZ29fdG9wLmpzXCI7XG5pbXBvcnQgd2ViX2luZm9fb2JqZWN0IGZyb20gXCIuL3BhcnQvd2ViX2luZm8uanNcIjtcbmltcG9ydCBzZWFyY2hfb2JqZWN0IGZyb20gXCIuL3BhcnQvc2VhcmNoLmpzXCI7XG5pbXBvcnQgc2hhcmVfb2JqZWN0IGZyb20gXCIuL3BhcnQvc2hhcmVidXR0b24uanNcIjtcbmltcG9ydCBjYXRlZ29yaWVzX29iamVjdCBmcm9tIFwiLi9wYXJ0L2NhdGVnb3JpZXMuanNcIjtcblxuLy8g5YWl5Y+j5Ye95pWw77yM5Lya5Zyo6aG16Z2i5Yqg6L295a6M5q+V5omn6KGMXG4kKGZ1bmN0aW9uICgpIHtcbiAgLy8g5Yid5aeL5YyW55uu5b2V6ISa5pys5Ye95pWwXG4gIHRvY19vYmplY3QuaW5pdCgpO1xuICAvLyDliJ3lp4vljJbor4TorrrmqKHlnZfkuIvmiYDmnInlh73mlbBcbiAgY29tbWVudHNfb2JqZWN0LmluaXQoKTtcbiAgLy8g5Yid5aeL5YyW5Zue5Yiw6aG26YOoXG4gIGdvX3RvcF9vYmplY3QuaW5pdCgpO1xuICAvLyDluIPlsYDliJ3lp4vljJZcbiAgbGF5b3V0X29iamVjdC5pbml0KCk7XG4gIHNlYXJjaF9vYmplY3QuaW5pdCgpO1xuICAvLyDlhaXlj6Plh73mlbDliJ3lp4vljJbnvZHnq5nov5DooYzml7bpl7RcbiAgd2ViX2luZm9fb2JqZWN0LmluaXQoKTtcbiAgLy8g5YiG5Lqr5oyJ6ZKu55qE5Yid5aeL5YyWXG4gIHNoYXJlX29iamVjdC5pbml0KCk7XG4gIC8vIOebruW9leWHveaVsOWIneWni+WMllxuICBjYXRlZ29yaWVzX29iamVjdC5pbml0KCk7XG4gIC8vIOWktOWbvuS8mOWMluS7o+eggVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJ0aWNsZV9pbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFydGNsZV9saXN0X2l0ZW1faW1nXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJ0aWNsZV9pbWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB3aWQgPSBhcnRpY2xlX2ltZ1tpXS5maXJzdEVsZW1lbnRDaGlsZC53aWR0aCArIDU7XG4gICAgICBsZXQgaGVpID0gYXJ0aWNsZV9pbWdbaV0uZmlyc3RFbGVtZW50Q2hpbGQuaGVpZ2h0ICsgNztcbiAgICAgIGFydGljbGVfaW1nW2ldLnN0eWxlLm1heFdpZHRoID0gd2lkICsgXCJweFwiO1xuICAgICAgYXJ0aWNsZV9pbWdbaV0uc3R5bGUubWF4SGVpZ2h0ID0gaGVpICsgXCJweFwiO1xuICAgIH1cbiAgfSwgMTAwMCk7XG59KTtcbiIsIi8qXG4gKiBAQXV0aG9yOiB3enRsaW5rMTAxM1xuICogQERhdGU6IDIwMjItMDctMDcgMTg6NDg6MThcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMDctMTAgMjE6NDc6MzFcbiAqIEBEZXNjcmlwdGlvbjpcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYXRlZ29yaWVzX3dpZGdldCgpXG4gICAgdGhpcy5oaXRfb3Blbl9jbG9zZV9mb3JkZXIoKVxuICAgIHRoaXMucmVhZG1vcmVfYmxvZ19lc3NheSgpXG4gIH0sXG4gIC8vIOeCueWHu2ljb27lsZXlvIAv5YWz6Zet5qCR5YiG57G7XG4gIGhpdF9vcGVuX2Nsb3NlX2ZvcmRlcjogZnVuY3Rpb24gKCkge1xuICAgIC8vIGxldCBjYXRlX2NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZV9jZWxsJylcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVfY2VsbC5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgaWYgKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAvLyAgICAgbGV0IGl0ZW0gPSAkKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsxXSlcbiAgICAvLyAgICAgaXRlbS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgaWYgKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAvLyAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIC8vICAgICAgIH0gZWxzZSBpZiAoXG4gICAgLy8gICAgICAgICBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9PT0gJ2lubGluZS1ibG9jaydcbiAgICAvLyAgICAgICApIHtcbiAgICAvLyAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAvLyBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9LFxuICAvLyDliJ3lp4vljJZcbiAgY2F0ZWdvcmllc193aWRnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJyX2xpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWxpc3QtaXRlbScpXG5cbiAgICBhcnJfbGkuZm9yRWFjaChsaSA9PiB7XG4gICAgICAvLyDnvo7ljJbor6XliIbnsbvmgLvmlbBcbiAgICAgIGxldCBvYmpfd29yZCA9IGxpLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgIG9ial93b3JkLmlubmVySFRNTCA9ICcgWycgKyBvYmpfd29yZC5pbm5lckhUTUwgKyAnXSdcbiAgICAgIC8vIOivpeWIhuexu+S4i+WmguaenOacieWtkOWIhuexu1xuICAgICAgaWYgKGxpLnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1saXN0LWNoaWxkJykpIHtcbiAgICAgICAgLy8g6buY6K6k5omA5pyJ5a2Q5YiG57G75YWo6YOo5pS257ypXG4gICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAvLyDlsZXlvIDmjInpkq5cbiAgICAgICAgbGV0IG5vZGVfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBub2RlXzEuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnXG4gICAgICAgIG5vZGVfMS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcidcbiAgICAgICAgbm9kZV8xLmlubmVySFRNTCA9XG4gICAgICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtcGx1cy1zcXVhcmUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gJ1xuICAgICAgICBsaS5pbnNlcnRCZWZvcmUobm9kZV8xLCBsaS5xdWVyeVNlbGVjdG9yKCdhJykpXG5cbiAgICAgICAgLy8g5pS257yp5oyJ6ZKuXG4gICAgICAgIGxldCBub2RlXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgbm9kZV8yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgbm9kZV8yLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgICAgICBub2RlXzIuaW5uZXJIVE1MID1cbiAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1taW51cy1zcXVhcmUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gJ1xuICAgICAgICBsaS5pbnNlcnRCZWZvcmUobm9kZV8yLCBsaS5xdWVyeVNlbGVjdG9yKCdhJykpXG5cbiAgICAgICAgLy8g5bGV5byA5oyJ6ZKu5rOo5YaM54K55Ye75LqL5Lu2XG4gICAgICAgIG5vZGVfMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBub2RlXzEuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIG5vZGVfMi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgICBsaS5xdWVyeVNlbGVjdG9yKCd1bCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8g5pS257yp5oyJ6ZKu5rOo5YaM54K55Ye75LqL5Lu2XG4gICAgICAgIG5vZGVfMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBub2RlXzIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgICBsaS5xdWVyeVNlbGVjdG9yKCd1bCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOivpeWIhuexu+S4i+ayoeacieWtkOWIhuexu1xuICAgICAgICBsZXQgbm9kZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpIC8vIOaUvuS4gOS4quWNoOS9jeesplxuICAgICAgICBub2RlXzEuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnXG4gICAgICAgIG5vZGVfMS5zdHlsZS5wYWRkaW5nTGVmdCA9ICcxNXB4J1xuICAgICAgICBub2RlXzEuaW5uZXJIVE1MID0gJydcbiAgICAgICAgbGkuaW5zZXJ0QmVmb3JlKG5vZGVfMSwgbGkucXVlcnlTZWxlY3RvcignYScpKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIC8vIOafpeeci+abtOWkmumhtemdou+8jOS8mOWMluWNmuWuoi/pmo/nrJTmmL7npLpcbiAgcmVhZG1vcmVfYmxvZ19lc3NheTogZnVuY3Rpb24gKCkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9hcmNoaXZlcy8nKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgLy8g5Y675o6J56ys5LiA5Liq77yf5a2X56ymXG4gICAgICBsZXQgcGFyYW1zID0gbG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKVxuICAgICAgLy8g5qC55o2uPeWPt+WIkuWIhuWPguaVsFxuICAgICAgbGV0IGFyciA9IHBhcmFtcy5zcGxpdCgnPScpXG4gICAgICAvLyDojrflj5ZwYWdlX3R5cGXlj4LmlbBcbiAgICAgIGxldCBwYWdlX3R5cGUgPSBhcnJbMV1cbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcmNoaXZlX2FydGljbGVfbGlzdCcpXG4gICAgICBmb3IgKGxldCB1ID0gMDsgdSA8IHVsLmxlbmd0aDsgdSsrKSB7XG4gICAgICAgIC8vIOWvueavj+S4gOS4qmxp6L+b6KGM5Yik5pat77yM5aaC5p6c5LiN5piv5Y+C5pWw55qE5YC877yM5bCx6L+b6KGM6ZqQ6JePXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdWxbdV0uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSB1bFt1XS5jaGlsZHJlbltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKVxuICAgICAgICAgIGlmIChpbmRleCA9PT0gJ2RzYWwnKSB7XG4gICAgICAgICAgICBpbmRleCA9ICdibG9nJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5kZXggIT09IHBhZ2VfdHlwZSkge1xuICAgICAgICAgICAgdWxbdV0uY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbn1cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG7jgJDmlofnq6Dorr/pl67ph4/mjpLlkI3jgJFcbiAgICDmlofnq6DpmIXor7vph4/lnKjljZXkuKrmlofnq6DkuK3lj6/ku6XmmL7npLrkvYbmmK/kuI3og73mjpLlkI3vvIzmjpLlkI3mgI7kuYjlrp7njrDlkaLvvJ9cbiAgICDmlrnmoYgx77ya5L2/55SodmFsaW5lXG4gICAg5pa55qGIMu+8muWcqOacjeWKoeWZqOS4iui/m+ihjOWFqOermeeahOaWh+eroOiuv+mXru+8jOaPkOWPluS7luS7rOeahOiuv+mXrumHj2lkXG4gICAg5pa55qGIM++8muWvuXR3aWtvb+S6keWHveaVsOi/m+ihjOS7o+eggeabtOaUue+8jOexu+S8vOiuv+mXrumHj2FwaVxuIFxu44CQ6K+E6K665YiH5o2i5oyJ6ZKu44CRXG4gICAg5YiH5o2idXR0ZXJhbmNlc+ivhOiuuuWQju+8jOmhtemdouS8muWIt+aWsOS4gOS4i+eEtuWQjuWPiOWbnuWIsOm7mOiupOivhOiuuuezu+e7n+S6hu+8jOi/meS4quWPr+S7peS8mOWMllxuXG7jgJDmnIDmlrDor4TorrrjgJFcbiAgICDmnIDmlrDor4Torrrnu4Tku7bvvIzlpoLmnpxibG9n6aG16Z2i55So5LqG77yM6YKj5LmI6L+Z5Liq57uE5Lu25bCx5LiN6IO95pS+5Zyo56e75Yqo56uv5L6n6L655qCP5LqG77yMXG4gICAg5ZCM5LiA5LiqaWTkuI3og73lpJrmrKHnlKjnmoTnvJjmlYXlkJfvvJ9cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIOWvvOWHuuS4uuS4gOS4quWvueixoVxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nb19jb21tZW50cygpXG4gICAgdGhpcy5jb21tZW50c19jb3VudCgpXG4gICAgdGhpcy5uZXdfY29tbWVudHMoKVxuICAgIHRoaXMuc3dpdGNoX2NvbW1lbnQoKVxuICAgIHR3aWtvb1xuICAgICAgLmluaXQoe1xuICAgICAgICBlbnZJZDogJ2h0dHBzOi8vdHdpa29vLnd6dGxpbmsxMDEzLmNvbS8nLFxuICAgICAgICBlbDogJyN0Y29tbWVudCcsXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICAvLyBwYXRoOiAnd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lJywgLy8g55So5LqO5Yy65YiG5LiN5ZCM5paH56ug55qE6Ieq5a6a5LmJIGpzIOi3r+W+hO+8jOWmguaenOaCqOeahOaWh+eroOi3r+W+hOS4jeaYryBsb2NhdGlvbi5wYXRobmFtZe+8jOmcgOS8oOatpOWPguaVsFxuXG4gICAgICAgIC8vIOivhOiuuuWKoOi9veaIkOWKn+WQjueahOWbnuiwg+WHveaVsOOAglxuICAgICAgICAvLyDlj5Hooajor4TorrrlkI7oh6rliqjliLfmlrDor4Torrrml7bjgIHliqDovb3kuIvkuIDpobXor4Torrrml7bvvIzkuZ/kvJrop6blj5HjgIJcbiAgICAgICAgLy8g6K+E6K665Yqg6L295aSx6LSl5pe25LiN5Lya6Kem5Y+R44CCXG4gICAgICAgIG9uQ29tbWVudExvYWRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdUd2lrb28gYWxsIGNvbW1lbnRzIGxvYWRlZCcpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUd2lrb28g5oiQ5Yqf5oyC6L295ZCO55qE5Zue6LCD5Ye95pWw44CC546v5aKDIElEIOmUmeivr+OAgee9kee7nOW8guW4uOOAgeaMgui9veWksei0peetieaDheWGteaXtuS4jeS8muinpuWPkeOAglxuICAgICAgICBjb25zb2xlLmxvZygnVHdpa29vIGxvYWRpbmcgZmluaXNoZWQnKVxuICAgICAgfSlcbiAgfSxcbiAgLy8g5Y+z5LiL6KeS5oyJ6ZKu5LqL5Lu2IOaYr+WQpuWJjeW+gOivhOiuuuWMulxuICBnb19jb21tZW50czogZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvX2NvbW1lbnRzJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9XG4gIH0sXG4gIC8vIOaWh+eroOivhOiuuuaVsFxuICBjb21tZW50c19jb3VudDogZnVuY3Rpb24gKCkge1xuICAgIC8vIOWIpOaWremhtemdouaYr+WQpuacieivhOiuuuWMumlk5ZKM5byV55So6K+E6K665pWw55qEaWRcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMnKSAmJlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50cycpXG4gICAgKSB7XG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50cycpXG4gICAgICAvLyBCT03ojrflj5bpobXpnaJ1cmznmoRwYXRobmFtZei3r+W+hFxuICAgICAgdmFyIHR3aWtvb19jb21tZW50c191cmwgPSBbbG9jYXRpb24ucGF0aG5hbWVdXG5cbiAgICAgIHR3aWtvb1xuICAgICAgICAuZ2V0Q29tbWVudHNDb3VudCh7XG4gICAgICAgICAgZW52SWQ6ICdodHRwczovL3R3aWtvby53enRsaW5rMTAxMy5jb20vJywgLy8g546v5aKDIElEXG4gICAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgICAgdXJsczogdHdpa29vX2NvbW1lbnRzX3VybCwgLy8g5LiN5YyF5ZCr5Y2P6K6u44CB5Z+f5ZCN44CB5Y+C5pWw55qE5paH56ug6Lev5b6E5YiX6KGo77yM5b+F5Lyg5Y+C5pWwXG4gICAgICAgICAgaW5jbHVkZVJlcGx5OiBmYWxzZSwgLy8g6K+E6K665pWw5piv5ZCm5YyF5ous5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIC8vIOWwhuivhOiuuuaVsOWGmeWFpeWFtuS4rVxuICAgICAgICAgIHR3aWtvb19jb21tZW50cy5pbm5lclRleHQgPSByZXNbMF0uY291bnRcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgIC8vIOi/lOWbnuekuuS+izogW1xuICAgICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMC9wb3N0LTEuaHRtbCcsIGNvdW50OiAxMCB9LFxuICAgICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMS9wb3N0LTIuaHRtbCcsIGNvdW50OiAwIH0sXG4gICAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEyL3Bvc3QtMy5odG1sJywgY291bnQ6IDIwIH1cbiAgICAgICAgICAvLyBdXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgLy8g5Y+R55Sf6ZSZ6K+vXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIH0pXG4gICAgfVxuICB9LFxuICAvLyDmnIDmlrDor4TorrpcbiAgbmV3X2NvbW1lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhvdF9hcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3RfYXJ0aWNsZXNfaXRlbScpXG4gICAgdmFyIHBhZ2Vfc2l6ZSA9IDhcbiAgICB0d2lrb29cbiAgICAgIC5nZXRSZWNlbnRDb21tZW50cyh7XG4gICAgICAgIGVudklkOiAnaHR0cHM6Ly90d2lrb28ud3p0bGluazEwMTMuY29tLycsIC8vIOeOr+WigyBJRFxuICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgcGFnZVNpemU6IHBhZ2Vfc2l6ZSwgLy8g6I635Y+W5aSa5bCR5p2h77yM6buY6K6k77yaMTDvvIzmnIDlpKfvvJoxMDBcbiAgICAgICAgaW5jbHVkZVJlcGx5OiBmYWxzZSwgLy8g5piv5ZCm5YyF5ous5pyA5paw5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld19jb21tZW50c19sb2RpbmcnKVxuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQgPSBuZXdfY29tbWVudHNfbG9kaW5nLnBhcmVudEVsZW1lbnRcbiAgICAgICAgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQucmVtb3ZlQ2hpbGQobmV3X2NvbW1lbnRzX2xvZGluZylcbiAgICAgICAgLy8g5o+S5YWl6K+E6K66XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZV9zaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAocmVzW2ldLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfY29udGVudCA9IHJlc1tpXS5jb21tZW50XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX25pY2sgPSByZXNbaV0ubmlja1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c191cmwgPSByZXNbaV0udXJsXG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2F2YXRhciA9IHJlc1tpXS5hdmF0YXJcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdGltZSA9IHJlc1tpXS5yZWxhdGl2ZVRpbWVcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfaWQgPSAnIycgKyByZXNbaV0uaWRcblxuICAgICAgICAgICAgdmFyIGhvdF9hcnRpY2xlc19jaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlc19jaGlsZC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIml0ZW1fdXBcIj48aW1nIHNyYz1cIicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfYXZhdGFyICtcbiAgICAgICAgICAgICAgJ1wiIGNsYXNzPVwiYXZhdGFyXCI+PGRpdiBjbGFzcz1cIm5pY2tfbmFtZVwiPjxzcGFuIGNsYXNzPVwibmlja1wiPicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfbmljayArXG4gICAgICAgICAgICAgICc8L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JyArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c190aW1lICtcbiAgICAgICAgICAgICAgJzwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiaXRlbV9kb3duXCI+PGEgaHJlZj1cIicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfdXJsICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2lkICtcbiAgICAgICAgICAgICAgJ1wiPicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfY29udGVudCArXG4gICAgICAgICAgICAgICc8L2E+PC9kaXY+J1xuICAgICAgICAgICAgaG90X2FydGljbGVzLmFwcGVuZChob3RfYXJ0aWNsZXNfY2hpbGQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICB9KVxuICB9LFxuICAvLyDliIfmjaLor4Torroo6K+E6K6657uE5Lu25a2Y5Zyo5pe2KVxuICBzd2l0Y2hfY29tbWVudDogZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3dpdGNoX2J0bicpKSB7XG4gICAgICB2YXIgc3dpdGNoX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzd2l0Y2hfYnRuJylcbiAgICAgIHZhciBnaXRodWJfY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnaXRodWJfY29tbWVudCcpXG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnQnKVxuXG4gICAgICBzd2l0Y2hfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2hfYnRuLmNsYXNzTGlzdC50b2dnbGUoJ21vdmUnKVxuICAgICAgICBnaXRodWJfY29tbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb250ZW50LWluJylcbiAgICAgICAgdHdpa29vX2NvbW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGVudC1pbicpXG5cbiAgICAgICAgaWYgKGdpdGh1Yl9jb21tZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGdpdGh1Yl9jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFR3aWtvbyDor4Torrrns7vnu59cbiAgICAgICAgICBnaXRodWJfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG59XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICDnvJPmhaLmmL7npLpcbiAgICAgICAg57yT5oWi5Zue5Yiw6aG26YOoXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gbGV0IGdvX3RvcF9vYmplY3QgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ29fdG9wKCk7XG4gICAgICAgIHRoaXMuY2xpY2tfZ29fdG9wKCk7XG4gICAgfSxcbiAgICBnb190b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIOa7muWKqOaYvuekumdvX3RvcOaMiemSrlxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIC8vIOaMgee7reebkeWQrOa7muWKqOeKtuaAgVxuICAgICAgICAgICAgZ2V0U2Nyb2xsKCkudG9wICE9PSAwID8gJChcIiNnb190b3BcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpIDogJChcIiNnb190b3BcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIGNsaWNrX2dvX3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOeCueWHu+WbnuWIsOmhtumDqFxuICAgICAgICAkKFwiI2dvX3RvcFwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbi8vIHNjcm9vbFRvcOWFvOWuueaAp+aWueahiFxuZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xuICAgIHJldHVybiB7XG4gICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdHx8MCxcbiAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDBcbiAgICB9O1xufVxuXG5cbi8vIOWmguaenOS4jeWBmum7mOiupOWvvOWFpe+8jOWwseaMieeFp+S4i+mdouWGme+8jOS4jeimgWRlZmF1bHTor41cbmV4cG9ydCB7XG4gICAgZ29fdG9wX29iamVjdCwgLy/lr7zlh7rlr7nosaFcbiAgICBnZXRTY3JvbGwsIC8v5a+85Ye66YCa55So5Ye95pWwXG59XG5cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZWFyY2goKTtcbiAgfSxcbiAgc2VhcmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWlucHV0XCIpO1xuXG4gICAgaWYgKGlucHV0QXJlYSkge1xuICAgICAgaW5wdXRBcmVhLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlucHV0QXJlYS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9IFwi5Yid5aeL5YyW5pCc57SiaW5nwrfCt8K3XCI7XG4gICAgICAgIGdldFNlYXJjaEZpbGUoKTtcbiAgICAgICAgdGhpcy5vbmNsaWNrID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIGlucHV0QXJlYS5vbmtleWRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KSB7XG4gICAgICAvLyBjbGVhciBzZWFyY2ggcmVzdWx0XG4gICAgICB2YXIgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLXNlYXJjaC1jbG9zZVwiKTtcbiAgICAgIGJ0bkNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlucHV0QXJlYS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9IFwi6K+36L6T5YWl5YWz6ZSu6K+NXCI7XG4gICAgICAgIGlucHV0QXJlYS5mb2N1cygpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgc2VhcmNoRnVuYyA9IGZ1bmN0aW9uIChwYXRoLCBzZWFyY2hfaWQsIGNvbnRlbnRfaWQpIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgdmFyIEJUTiA9IFwiPGRpdiBpZD0nbG9jYWwtc2VhcmNoLWNsb3NlJz7muIXnqbrmkJzntKI8L2Rpdj5cIjtcbiAgICAgIHZhciAkaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWFyY2hfaWQpO1xuICAgICAgdmFyICRyZXN1bHRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudF9pZCk7XG5cbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHBhdGgsIHRydWUpO1xuICAgICAgeGhyLnNlbmQoKTtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAvLyByZXN1bWUgaW5wdXRcbiAgICAgICAgICAkaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAvLyAgICRpbnB1dC5wbGFjZWhvbGRlciA9IFwi6L6T5YWl5YWz6ZSu6K+N5Lul5pCc57SiXCI7XG4gICAgICAgICAgJGlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgICB2YXIgeG1sID0geGhyLnJlc3BvbnNlWE1MO1xuICAgICAgICAgIHZhciByb290ID0geG1sLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICB2YXIgbGlzdCA9IHJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJlbnRyeVwiKTtcbiAgICAgICAgICB2YXIgZGF0YXMgPSBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGl0bGVcIilbMF0uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY29udGVudFwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgIHVybDogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVybFwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RyID0gJzx1bCBjbGFzcz1cImFyY2hpdmVcIj4nO1xuICAgICAgICAgICAgdmFyIGtleXdvcmRzID0gdGhpcy52YWx1ZVxuICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgIC5zcGxpdCgvW1xcc1xcLV0rLyk7XG4gICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUudHJpbSgpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5pys5Zyw5pCc57Si5Li75Luj56CBXG4gICAgICAgICAgICBkYXRhcy5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgIHZhciBpc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdmFyIGNvbnRlbnRfaW5kZXggPSBbXTtcbiAgICAgICAgICAgICAgaWYgKCFkYXRhLnRpdGxlIHx8IGRhdGEudGl0bGUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZGF0YS50aXRsZSA9IFwiVW50aXRsZWRcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgb3JpZ19kYXRhX3RpdGxlID0gZGF0YS50aXRsZS50cmltKCk7XG4gICAgICAgICAgICAgIHZhciBkYXRhX3RpdGxlID0gb3JpZ19kYXRhX3RpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfY29udGVudCA9IGRhdGEuY29udGVudFxuICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPFtePl0rPi9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgdmFyIGRhdGFfY29udGVudCA9IG9yaWdfZGF0YV9jb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgIHZhciBkYXRhX3VybCA9IGRhdGEudXJsO1xuICAgICAgICAgICAgICB2YXIgaW5kZXhfdGl0bGUgPSAtMTtcbiAgICAgICAgICAgICAgdmFyIGluZGV4X2NvbnRlbnQgPSAtMTtcbiAgICAgICAgICAgICAgdmFyIGZpcnN0X29jY3VyID0gLTE7XG4gICAgICAgICAgICAgIC8vIG9ubHkgbWF0Y2ggYXJ0aWxlcyB3aXRoIG5vdCBlbXB0eSBjb250ZW50c1xuICAgICAgICAgICAgICBpZiAoZGF0YV9jb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAga2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5d29yZCwgaSkge1xuICAgICAgICAgICAgICAgICAgaW5kZXhfdGl0bGUgPSBkYXRhX3RpdGxlLmluZGV4T2Yoa2V5d29yZCk7XG4gICAgICAgICAgICAgICAgICBpbmRleF9jb250ZW50ID0gZGF0YV9jb250ZW50LmluZGV4T2Yoa2V5d29yZCk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChpbmRleF90aXRsZSA8IDAgJiYgaW5kZXhfY29udGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X2NvbnRlbnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXhfY29udGVudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X29jY3VyID0gaW5kZXhfY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50X2luZGV4LnB1c2goe2luZGV4X2NvbnRlbnQ6aW5kZXhfY29udGVudCwga2V5d29yZF9sZW46a2V5d29yZF9sZW59KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8g5bGV56S657uT5p6cXG4gICAgICAgICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgc3RyICs9XG4gICAgICAgICAgICAgICAgICBcIjxsaT48YSB0YXJnZXQ9J19ibGFuaycgaHJlZj1cIiArXG4gICAgICAgICAgICAgICAgICBkYXRhX3VybCArXG4gICAgICAgICAgICAgICAgICBcIiA+XCIgK1xuICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nYXJjaGl2ZS10aXRsZScgPlwiICtcbiAgICAgICAgICAgICAgICAgIG9yaWdfZGF0YV90aXRsZSArXG4gICAgICAgICAgICAgICAgICBcIjwvc3Bhbj5cIjtcblxuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0X29jY3VyID49IDApIHtcbiAgICAgICAgICAgICAgICAgIC8vIGN1dCBvdXQgMTAwIGNoYXJhY3RlcnNcbiAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGZpcnN0X29jY3VyIC0gMTA7XG4gICAgICAgICAgICAgICAgICB2YXIgZW5kID0gZmlyc3Rfb2NjdXIgKyAzMDtcblxuICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IDQwO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoZW5kID4gY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gY29udGVudC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hfY29udGVudCA9IGNvbnRlbnQuc3Vic3RyKHN0YXJ0LCAyMDApO1xuXG4gICAgICAgICAgICAgICAgICAvLyBoaWdobGlnaHQgYWxsIGtleXdvcmRzXG4gICAgICAgICAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXl3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWdTID0gbmV3IFJlZ0V4cChrZXl3b3JkLCBcImdpXCIpO1xuICAgICAgICAgICAgICAgICAgICBtYXRjaF9jb250ZW50ID0gbWF0Y2hfY29udGVudC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgIHJlZ1MsXG4gICAgICAgICAgICAgICAgICAgICAgJzxlbSBjbGFzcz1cInNlYXJjaC1rZXl3b3JkXCI+JyArIGtleXdvcmQgKyBcIjwvZW0+XCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBzdHIgKz1cbiAgICAgICAgICAgICAgICAgICAgJzxwIGNsYXNzPVwic2VhcmNoLXJlc3VsdFwiPicgKyBtYXRjaF9jb250ZW50ICsgXCIuLi48L3A+XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0ciArPSBcIjwvYT48L2xpPlwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0ciArPSBcIjwvdWw+XCI7XG4gICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoXCI8bGk+XCIpID09PSAtMSkge1xuICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIEJUTiArXG4gICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdsb2NhbC1zZWFyY2gtZW1wdHknPuayoeacieaJvuWIsOS9oOaJgOimgeaQnOe0oueahOWGheWuueKApuKApjwvZGl2PlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gQlROICsgc3RyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGVhclNlYXJjaCgkcmVzdWx0Q29udGVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBnZXRTZWFyY2hGaWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhdGggPSBcIi9zZWFyY2gueG1sXCI7XG4gICAgICBzZWFyY2hGdW5jKHBhdGgsIFwibG9jYWwtc2VhcmNoLWlucHV0XCIsIFwibG9jYWwtc2VhcmNoLXJlc3VsdFwiKTtcbiAgICB9O1xuXG4gICAgLy8g5YWo5bGA5oyJ6ZKu6K6+572uanPmmK/lkKblsZXnpLrmkJzntKLmoYZcbiAgICB2YXIgZ2xvYmFsX2J1dHRvbl9zZWFyY2hfYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hfYnRuXCIpO1xuICAgIHZhciBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3hfcGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaF9idG5fcGNcIik7XG4gICAgZ2xvYmFsX2J1dHRvbl9zZWFyY2hfYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhbC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveF9wYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWwtc2VhcmNoLWlucHV0JykuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgc2VhcmNoX2Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfY2xvc2VcIik7XG4gICAgc2VhcmNoX2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIG5lZWRTaGFyZUJ1dHRvblxuICAtIFZlcnNpb24gMS4wLjBcbiAgLSBDb3B5cmlnaHQgMjAxNSBEem1pdHJ5IFZhc2lsZXVza2lcblx0LSBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQpXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNoYXJlKCk7XG4gICAgfSxcbiAgICBzaGFyZTogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBmaW5kIGNsb3Nlc3RcbiAgICBmdW5jdGlvbiBjbG9zZXN0KGVsZW0sIHBhcmVudCkge1xuICAgICAgaWYgKHR5cGVvZihwYXJlbnQpID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaGVzU2VsZWN0b3IgPSBlbGVtLm1hdGNoZXMgfHwgZWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbS5tc01hdGNoZXNTZWxlY3RvcjtcbiAgXG4gICAgICAgICAgICAgIGlmICghIW1hdGNoZXNTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzU2VsZWN0b3IuYmluZChlbGVtKShwYXJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgaWYgKGVsZW0gPT0gcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyBzaGFyZSBidXR0b24gY2xhc3NcbiAgICAgIHdpbmRvdy5uZWVkU2hhcmVCdXR0b24gPSBmdW5jdGlvbihlbGVtLCBvcHRpb25zKSB7XG4gICAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnQgcmVmZXJlbmNlXG4gICAgICAgICAgdmFyIHJvb3QgPSB0aGlzO1xuICAgICAgICAgIHJvb3QuZWxlbSA9IGVsZW0gfHwgJ25lZWQtc2hhcmUtYnV0dG9uJztcbiAgXG4gICAgICAgICAgLyogSGVscGVyc1xuICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBcbiAgICAgIC8vIGdldCB0aXRsZSBmcm9tIGh0bWxcbiAgICAgIHJvb3QuZ2V0VGl0bGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJvZzp0aXRsZVwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInR3aXR0ZXI6dGl0bGVcIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnRpdGxlO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gZ2V0IGltYWdlIGZyb20gaHRtbFxuICAgICAgICByb290LmdldEltYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgLy8gY2hlY2sgcXVlcnlTZWxlY3RvciBleGlzdGFuY2UgZm9yIG9sZCBicm93c2Vyc1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjppbWFnZVwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gZ2V0IGRlc2NyaXB0aW9uIGZyb20gaHRtbFxuICAgICAgICByb290LmdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgLy8gY2hlY2sgcXVlcnlTZWxlY3RvciBleGlzdGFuY2UgZm9yIG9sZCBicm93c2Vyc1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJykubmFtZWRJdGVtKCdkZXNjcmlwdGlvbicpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgXG4gICAgICAgIC8vIHNoYXJlIHVybHMgZm9yIGFsbCBuZXR3b3Jrc1xuICAgICAgICByb290LnNoYXJlID0ge1xuICAgICAgICAgICAgJ3dlaWJvJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly92LnQuc2luYS5jb20uY24vc2hhcmUvc2hhcmUucGhwP3RpdGxlPSdcbiAgICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICAgKyBcIiZ1cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICAgKyBcIiZwaWM9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd3ZWNoYXQnOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciBpbWdTcmMgPSAnaHR0cHM6Ly9hcGkucXJzZXJ2ZXIuY29tL3YxL2NyZWF0ZS1xci1jb2RlLz9zaXplPTE1MHgxNTAmZGF0YT0nK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgdmFyIGRyb3Bkb3duRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24nKTtcbiAgICAgICAgICAgICAgdmFyIGltZyA9IGRyb3Bkb3duRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpWzBdO1xuICAgICAgICAgICAgICB2YXIgbG9hZGVyID0gZHJvcGRvd25FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZWVkLXNoYXJlLWxvYWRlcicpWzBdO1xuICBcbiAgICAgICAgICAgICAgICBpZiAoaW1nKSB7XG4gICAgICAgICAgICBpbWcucmVtb3ZlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmKGxvYWRlcikge1xuICAgICAgICAgICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxvYWRlci5jbGFzc05hbWUgPSAnbmVlZC1zaGFyZS1sb2FkZXInO1xuICAgICAgICAgICAgbG9hZGVyLmlubmVyVGV4dCA9ICdsb2FkaW5nLi4uJztcbiAgICAgICAgICAgIGxvYWRlci50aXRsZSA9ICdsb2FkaW5nIHFyY29kZS4uLic7XG4gIFxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IGltZ1NyYztcbiAgICAgICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdDcmVhdGUgcXJjb2RlIGZhaWxlZCEnO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsJ25lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKTtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKGxvYWRlci5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQobG9hZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICdkb3ViYW4nOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vd3d3LmRvdWJhbi5jb20vc2hhcmUvc2VydmljZT9uYW1lPSdcbiAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICArIFwiJmhyZWY9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICsgXCImaW1hZ2U9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdxcXpvbmUnOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly9zbnMucXpvbmUucXEuY29tL2NnaS1iaW4vcXpzaGFyZS9jZ2lfcXpzaGFyZV9vbmVrZXk/dGl0bGU9J1xuICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICsgXCImdXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICArIFwiJnBpY3M9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSlcbiAgICAgICAgICAgICAgKyBcIiZkZXNjPVwiKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3JlbnJlbic6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3dpZGdldC5yZW5yZW4uY29tL2RpYWxvZy9zaGFyZT90aXRsZT0nXG4gICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgKyBcIiZyZXNvdXJjZVVybD1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgKyBcIiZwaWM9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSlcbiAgICAgICAgICAgICAgKyBcIiZkZXNjcmlwdGlvbj1cIisgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICB9LFxuICBcbiAgICAgICAgICAgICdtYWlsdG8nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnbWFpbHRvOj9zdWJqZWN0PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKSArICcmYm9keT1UaG91Z2h0IHlvdSBtaWdodCBlbmpveSByZWFkaW5nIHRoaXM6ICcgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCkgKyAnIC0gJyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICBcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndHdpdHRlcicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0nO1xuICAgICAgICAgICAgICAgIHVybCArPSBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKSArIFwiJnVybD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwaW50ZXJlc3QnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2Jvb2ttYXJrbGV0Lz9pc192aWRlbz1mYWxzZSc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmbWVkaWE9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnVybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdmYWNlYm9vaycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZmFjZWJvb2suY29tL3NoYXJlLnBocD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdnb29nbGVwbHVzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncmVkZGl0JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5yZWRkaXQuY29tL3N1Ym1pdD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2RlbGljaW91cycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdkZWwuaWNpby51cy9wb3N0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmbm90ZXM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ3RhcGl0dXJlJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0YXBpdHVyZS5jb20vYm9va21hcmtsZXQvaW1hZ2U/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdpbWdfc3JjPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmcGFnZV91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmcGFnZV90aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdzdHVtYmxldXBvbicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2xpbmtlZGluJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnNvdXJjZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5zb3VyY2UpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ3NsYXNoZG90JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdzbGFzaGRvdC5vcmcvYm9va21hcmsucGw/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAndGVjaG5vcmF0aScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndGVjaG5vcmF0aS5jb20vZmF2ZXM/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdhZGQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAncG9zdGVyb3VzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3Bvc3Rlcm91cy5jb20vc2hhcmU/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ2xpbmt0bz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3R1bWJscicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cudHVtYmxyLmNvbS9zaGFyZT92PTMnO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICdnb29nbGVib29rbWFya3MnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5nb29nbGUuY29tL2Jvb2ttYXJrcy9tYXJrP29wPWVkaXQnO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZia21rPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmYW5ub3RhdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vICduZXdzdmluZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lm5ld3N2aW5lLmNvbS9fdG9vbHMvc2VlZCZzYXZlPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAndT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZoPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gJ3BpbmdmbScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGluZy5mbS9yZWYvPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnbGluaz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmJvZHk9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAnZXZlcm5vdGUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmV2ZXJub3RlLmNvbS9jbGlwLmFjdGlvbj8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZyaWVuZGZlZWQnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmZyaWVuZGZlZWQuY29tL3NoYXJlPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndmtvbnRha3RlJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3Zrb250YWt0ZS5ydS9zaGFyZS5waHA/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICB1cmwgKz0gJyZkZXNjcmlwdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgdXJsICs9ICcmaW1hZ2U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgIHVybCArPSAnJm5vcGFyc2U9dHJ1ZSc7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnb2Rub2tsYXNzbmlraScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cub2Rub2tsYXNzbmlraS5ydS9kaz9zdC5jbWQ9YWRkU2hhcmUmc3Qucz0xJztcbiAgICAgICAgICB1cmwgKz0gJyZzdC5jb21tZW50cz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgdXJsICs9ICcmc3QuX3N1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICdtYWlscnUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ2Nvbm5lY3QubWFpbC5ydS9zaGFyZT8nO1xuICAgICAgICAvLyAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgIC8vICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvLyAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy8gICB1cmwgKz0gJyZpbWFnZXVybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfVxuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gb3BlbiBzaGFyZSBsaW5rIGluIGEgcG9wdXBcbiAgICAgICAgcm9vdC5wb3B1cCA9IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICB2YXIgbGVmdCwgdG9wOyBcbiAgXG4gICAgICAgIHZhciBwb3B1cFdpZHRoID0gNjAwLFxuICAgICAgICAgICAgcG9wdXBIZWlnaHQgPSA1MDA7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gY2FjdWxhdGUgYnJvd3NlciB3aW5kb3cgd2lkdGhcbiAgICAgICAgLy8gaWYgd2luZG93IHdpZHRoIGlzIHRvbyBuYXJyb3csIHVzZSBzY3JlZW4gd2lkdGg7XG4gICAgICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiBzY3JlZW4ud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6IHNjcmVlbi5oZWlnaHQ7XG4gICAgICAgIGlmICh3aWR0aCA8IDYwMCAmJiBoZWlnaHQgPCA1MDApIHtcbiAgICAgICAgICBsZWZ0ID0gKHNjcmVlbi53aWR0aCAvIDIpIC0gKHBvcHVwV2lkdGggLyAyKTtcbiAgICAgICAgICB0b3AgPSAoc2NyZWVuLmhlaWdodCAvIDIpIC0gKHBvcHVwSGVpZ2h0IC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc2V0IGxlZnQgYW5kIHRvcCBwb3NpdGlvblxuICAgICAgICAgICAgICB2YXIgZHVhbFNjcmVlbkxlZnQgPSB3aW5kb3cuc2NyZWVuTGVmdCAhPSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHNjcmVlbi5sZWZ0LFxuICAgICAgICAgICAgZHVhbFNjcmVlblRvcCA9IHdpbmRvdy5zY3JlZW5Ub3AgIT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlblRvcCA6IHNjcmVlbi50b3A7XG4gICAgICAgICAgLy8gY2FsY3VsYXRlIHRvcCBhbmQgbGVmdCBwb3NpdGlvblxuICAgICAgICAgIGxlZnQgPSAoKHdpZHRoIC8gMikgLSAocG9wdXBXaWR0aCAvIDIpKSArIGR1YWxTY3JlZW5MZWZ0O1xuICAgICAgICAgIHRvcCA9ICgoaGVpZ2h0IC8gMikgLSAocG9wdXBIZWlnaHQgLyAyKSkgKyBkdWFsU2NyZWVuVG9wO1xuICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICB2YXIgc2hhcmVXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsJ3RhcmdldFdpbmRvdycsJ3Rvb2xiYXI9bm8sbG9jYXRpb249bm8sc3RhdHVzPW5vLG1lbnViYXI9bm8sc2Nyb2xsYmFycz15ZXMscmVzaXphYmxlPXllcyx3aWR0aD0nICsgcG9wdXBXaWR0aCArICcsIGhlaWdodD0nICsgcG9wdXBIZWlnaHQgKyAnLCB0b3A9JyArIHRvcCArICcsIGxlZnQ9JyArIGxlZnQpO1xuICAgICAgICAgICAgLy8gUHV0cyBmb2N1cyBvbiB0aGUgbmV3V2luZG93XG4gICAgICAgICAgaWYgKHdpbmRvdy5mb2N1cykge1xuICAgICAgICAgICAgICBzaGFyZVdpbmRvdy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgXG4gICAgICAgICAgLyogU2V0IG9wdGlvbnNcbiAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgXG4gICAgICAgICAgLy8gY3JlYXRlIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgICAgIHJvb3Qub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgaWNvblN0eWxlOiAnZGVmYXVsdCcsIC8vIGRlZmF1bHQgb3IgYm94XG4gICAgICAgICAgICAgIGJveEZvcm06ICdob3Jpem9udGFsJywgLy8gaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbUNlbnRlcicsIC8vIHRvcCAvIG1pZGRsZSAvIGJvdHRvbSArIExlZnQgLyBDZW50ZXIgLyBSaWdodFxuICAgICAgICAgICAgICBwcm90b2NvbDogWydodHRwJywgJ2h0dHBzJ10uaW5kZXhPZih3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnOicpWzBdKSA9PT0gLTEgPyAnaHR0cHM6Ly8nIDogJy8vJyxcbiAgICAgICAgICAgICAgbmV0d29ya3M6ICdUd2l0dGVyLEZhY2Vib29rLFJlZGRpdCxMaW5rZWRpbixUdW1ibHIsUGludGVyZXN0LFdlaWJvLFdlY2hhdCxEb3ViYW4sUVFab25lLE1haWx0bycsXG4gICAgICAgICAgICAgIGljb25zOiBbJ2ZhIGZhLXR3aXR0ZXInLCdmYSBmYS1mYWNlYm9vaycsJ2ZhIGZhLXJlZGRpdC1hbGllbicsJ2ZhIGZhLWxpbmtlZGluJywnZmEgZmEtdHVtYmxyJywnZmEgZmEtcGludGVyZXN0JywnZmEgZmEtd2VpYm8nLCdmYSBmYS13ZWl4aW4nLCc5JywnZmEgZmEtcXEnLCdmYSBmYS1lbnZlbG9wZS1vJ11cbiAgICAgICAgICB9O1xuICBcbiAgICAgIC8vIGludGVncmF0ZSBjdXN0b20gb3B0aW9uc1xuICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgIHJvb3Qub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICB9XG4gICAgICAvLyBjb252ZXJ0IG5ldHdvcmtzIHN0cmluZyBpbnRvIGFycmF5XG4gICAgICByb290Lm9wdGlvbnMubmV0d29ya3MgPSByb290Lm9wdGlvbnMubmV0d29ya3MudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICBcbiAgICAgIGZ1bmN0aW9uIGdldE9wdGlvbnMoZWwpIHtcbiAgICAgICAgICAvLyBpbnRlZ3JhdGUgZGF0YSBhdHRyaWJ1dGUgb3B0aW9uc1xuICAgICAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBpIGluIHJvb3Qub3B0aW9ucykge1xuICAgICAgICAgICAgcmV0W2ldID0gcm9vdC5vcHRpb25zW2ldO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgLy8gdGhlc2UgYXR0cnMgbXVzdCBnZXQgZHluYW1pY2FsbHkuXG4gICAgICAgICAgcmV0LnVybCA9IHJvb3Qub3B0aW9ucy51cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgcmV0LnRpdGxlID0gcm9vdC5vcHRpb25zLnRpdGxlIHx8IHJvb3QuZ2V0VGl0bGUoKTtcbiAgICAgICAgICByZXQuaW1hZ2UgPSByb290Lm9wdGlvbnMuaW1hZ2UgfHwgcm9vdC5nZXRJbWFnZSgpO1xuICAgICAgICAgIHJldC5kZXNjcmlwdGlvbiA9IHJvb3Qub3B0aW9ucy5kZXNjcmlwdGlvbiB8fCByb290LmdldERlc2NyaXB0aW9uKCk7XG4gIFxuICAgICAgICAgIGZvciAodmFyIG9wdGlvbiBpbiBlbC5kYXRhc2V0KSB7XG4gICAgICAgICAgICAgIC8vIHJlcGxhY2Ugb25seSAnc2hhcmUtJyBwcmVmaXhlZCBkYXRhLWF0dHJpYnV0ZXNcbiAgICAgICAgICAgIGlmIChvcHRpb24ubWF0Y2goL3NoYXJlLykpIHtcbiAgICAgICAgICAgICAgdmFyIG5ld19vcHRpb24gPSBvcHRpb24ucmVwbGFjZSgvc2hhcmUvLCAnJyk7XG4gICAgICAgICAgICAgIGlmICghbmV3X29wdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5ld19vcHRpb24gPSBuZXdfb3B0aW9uLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmV3X29wdGlvbi5zbGljZSgxKTtcbiAgICAgICAgICAgICAgdmFyIHZhbCA9IGVsLmRhdGFzZXRbb3B0aW9uXTtcbiAgICAgICAgICAgICAgaWYgKG5ld19vcHRpb24gPT09ICduZXR3b3JrcycpIHtcbiAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3X29wdGlvbiA9PT0gJ3VybCcgJiYgdmFsICYmIHZhbFswXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAvLyBmaXggcmVsYXRpdmUgdXJsIHByb2JsZW0uXG4gICAgICAgICAgICAgICAgICB2YWwgPSBsb2NhdGlvbi5vcmlnaW4gKyB2YWw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0W25ld19vcHRpb25dID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICBcbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duKGVsKSB7XG4gICAgICAgICAgLy8gY3JlYXRlIGRyb3Bkb3duXG4gICAgICAgICAgdmFyIGRyb3Bkb3duRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgPSAnbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24nO1xuICAgICAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24nKSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgXG4gICAgICAgICAgLy8gc2V0IGRyb3Bkb3duIHJvdyBsZW5ndGhcbiAgICAgICAgICBpZiAobXlvcHRpb25zLmljb25TdHlsZSA9PSAnYm94JyAmJiBteW9wdGlvbnMuYm94Rm9ybSA9PSAnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm94LWhvcml6b250YWwnO1xuICAgICAgICAgIGVsc2UgaWYgKG15b3B0aW9ucy5pY29uU3R5bGUgPT0gJ2JveCcgJiYgbXlvcHRpb25zLmJveEZvcm0gPT0gJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3gtdmVydGljYWwnO1xuICBcbiAgICAgICAgICAvLyBzZXQgZHJvcGRvd24gcG9zaXRpb24gXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChteW9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtbGVmdCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAndG9wUmlnaHQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tdG9wLXJpZ2h0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICd0b3BDZW50ZXInOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tdG9wLWNlbnRlcic7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSBkcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnbWlkZGxlTGVmdCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1taWRkbGUtbGVmdCc7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5Ub3AgPSAtIGRyb3Bkb3duRWwub2Zmc2V0SGVpZ2h0IC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnbWlkZGxlUmlnaHQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tbWlkZGxlLXJpZ2h0JztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpblRvcCA9IC0gZHJvcGRvd25FbC5vZmZzZXRIZWlnaHQgLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1sZWZ0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdib3R0b21SaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tcmlnaHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbUNlbnRlcic6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWNlbnRlcic7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSBkcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sMSk7XG4gIFxuICBcbiAgICAgICAgICAvLyBmaWxsIGZyb3Bkb3duIHdpdGggYnV0dG9uc1xuICAgICAgICAgIHZhciBpY29uQ2xhc3MgPSBteW9wdGlvbnMuaWNvblN0eWxlID09ICdkZWZhdWx0JyA/ICduZWVkLXNoYXJlLWJ1dHRvbl9saW5rIG5lZWQtc2hhcmUtYnV0dG9uXycgOiAnbmVlZC1zaGFyZS1idXR0b25fbGluay0nICsgbXlvcHRpb25zLmljb25TdHlsZSArICcgbmVlZC1zaGFyZS1idXR0b25fbGluayBuZWVkLXNoYXJlLWJ1dHRvbl8nO1xuICAgICAgICAgIGxldCBmbGFnID0gMDtcbiAgICAgICAgICBmb3IgKHZhciBuZXR3b3JrIGluIG15b3B0aW9ucy5uZXR3b3Jrcykge1xuICAgICAgICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgIG5ldHdvcmsgPSBteW9wdGlvbnMubmV0d29ya3NbbmV0d29ya107XG4gICAgICAgICAgICAgIGxpbmsuY2xhc3NOYW1lID0gaWNvbkNsYXNzICsgbmV0d29yaztcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobXlvcHRpb25zLmljb25zLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGxpbmsuY2xhc3NOYW1lICs9ICcgJytteW9wdGlvbnMuaWNvbnNbZmxhZ107XG4gICAgICAgICAgICAgIGxpbmsuZGF0YXNldC5uZXR3b3JrID0gbmV0d29yaztcbiAgICAgICAgICAgICAgbGluay50aXRsZSA9IG5ldHdvcms7XG4gICAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgICAgICAgIGZsYWcrKztcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGRyb3Bkb3duRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICBpZiAoY2xvc2VzdChldmVudC50YXJnZXQsICcubmVlZC1zaGFyZS1idXR0b25fbGluaycpKSB7XG4gICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICBcbiAgICAgICAgICAgICAgICAgcm9vdC5zaGFyZVtldmVudC50YXJnZXQuZGF0YXNldC5uZXR3b3JrXShlbCk7XG4gICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gIFxuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRyb3Bkb3duRWwpO1xuICAgICAgfVxuICBcbiAgICAgIHZhciB0YXJnZXRFbCA9IHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSkgOiBlbGVtO1xuICAgICAgIGlmICh0YXJnZXRFbCAmJiB0YXJnZXRFbC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWQtc2hhcmUtcGFuZWwnKSkge1xuICAgICAgICBjcmVhdGVEcm9wZG93bih0YXJnZXRFbCk7XG4gICAgICAgIC8vIHRhcmdldEVsLmNsYXNzTGlzdC5hZGQoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICAgICAgfSBlbHNlIFxuICAgICAgICAvLyBjbG9zZSBvbiBjbGljayBvdXRzaWRlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICB2YXIgb3BlbmVkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gIFxuICAgICAgICAgIGlmICghY2xvc2VzdChldmVudC50YXJnZXQsICcubmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJykpIHtcbiAgICAgICAgICAgIGlmIChvcGVuZWRFbCkge1xuICAgICAgICAgICAgICAgIG9wZW5lZEVsLmNsYXNzTGlzdC5yZW1vdmUoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICBcbiAgICAgICAgICAgICAgICAvLyBoaWRlIHdlY2hhdCBjb2RlIGltYWdlIHdoZW4gY2xvc2UgdGhlIGRyb3Bkb3duLlxuICAgICAgICAgICAgICAgIGlmIChvcGVuZWRFbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lZEVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBjbG9zZXN0KGV2ZW50LnRhcmdldCwgcm9vdC5lbGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVEcm9wZG93bihlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEpO1xuICBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgXG4gICAgfTtcbiAgXG4gICAgbmV3IG5lZWRTaGFyZUJ1dHRvbignLm5lZWQtc2hhcmUtYnV0dG9uJyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudG9jX2J0bigpO1xuICAgIH0sXG4gICAgdG9jX2J0bjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0b2NfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvY19jb250YWluZXInKTtcbiAgICAgICAgbGV0IHRvY19idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9jX2J0bicpO1xuICAgICAgICAkKHRvY19idG4pLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAodG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpe1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuXG5cblxuIiwiLypcbiAqIEBBdXRob3I6IHd6dGxpbmsxMDEzXG4gKiBARGF0ZTogMjAyMi0wNy0wNyAxODo0ODoxOFxuICogQExhc3RFZGl0VGltZTogMjAyMi0wNy0xMCAwMDoyNjoxMVxuICogQERlc2NyaXB0aW9uOlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLndlYl9pbmZvX3J1bnRpbWUoKVxuICB9LFxuICAvLyBUT0RPOiAhISHmiJHnnYDlrp7kuI3nn6XpgZPov5nmmK/kuKrku4DkuYjnp5hcbiAgd2ViX2luZm9fcnVudGltZTogZnVuY3Rpb24gKCkge1xuICAgIC8vIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2ViaW5mb19ydW50aW1lX2NvdW50XzEnKSkge1xuICAgIC8vICAgbGV0IEJpcnRoRGF5ID0gbmV3IERhdGUobmV3IERhdGUoJzIwMjAvMDEvMDQnKSlcbiAgICAvLyAgIGxldCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICAvLyAgIGxldCB0aW1lb2xkID0gdG9kYXkuZ2V0VGltZSgpIC0gQmlydGhEYXkuZ2V0VGltZSgpXG4gICAgLy8gICBsZXQgZGF5c29sZCA9IE1hdGguZmxvb3IodGltZW9sZCAvICgyNCAqIDYwICogNjAgKiAxMDAwKSlcbiAgICAvLyAgIGxldCBvYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2ViaW5mb19ydW50aW1lX2NvdW50XzEnKVxuICAgIC8vICAgb2JqLmlubmVySFRNTCA9IGRheXNvbGQgKyAnIOWkqSdcbiAgICAvLyAgIGNvbnNvbGUubG9nKG9iailcbiAgICAvLyB9XG4gIH0sXG59XG4iXX0=
