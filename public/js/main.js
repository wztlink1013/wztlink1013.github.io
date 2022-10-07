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
  console.log("小于980px尺寸");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY2F0ZWdvcmllcy5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvc2VhcmNoLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9zaGFyZWJ1dHRvbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvdG9jLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC93ZWJfaW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBO0FBQ0EsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGFBQUQsQ0FBbEI7QUFDQSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsY0FBRCxDQUFuQixDLENBRUE7O0FBQ0EsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFVBQUQsQ0FBZjtBQUNBLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxXQUFELENBQWhCO0FBQ0EsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQUQsQ0FBakI7QUFDQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQixDLENBRUE7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S0FBZCxDQUFvQixPQUFwQixHQUE4QixPQUE5QjtNQUNIO0lBQ0osQ0FSRDtFQVNIO0FBaEJVLEM7Ozs7Ozs7Ozs7O0FDQWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBQ2U7RUFDYixJQUFJLEVBQUUsZ0JBQVk7SUFDaEIsS0FBSyxnQkFBTDtFQUNELENBSFk7RUFJYjtFQUNBLGdCQUFnQixFQUFFLDRCQUFZLENBQzVCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNEO0FBZlksQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIFBD77yaaGVhZGVy5LiK55qE5bem5Y+z5oyJ6ZKu5Yy65Z+fXG5sZXQgYXJyb3dfbGVmdCA9ICQoXCIjYXJyb3dfbGVmdFwiKTtcbmxldCBhcnJvd19yaWdodCA9ICQoXCIjYXJyb3dfcmlnaHRcIik7XG5cbi8vIOW4g+WxgO+8mueJiOW/g+OAgeW3puS4reWPs+aOkueJiFxubGV0IGN0X2xlZnQgPSAkKFwiLmN0X2xlZnRcIik7XG5sZXQgY3RfcmlnaHQgPSAkKFwiLmN0X3JpZ2h0XCIpO1xubGV0IGN0X2NlbnRlciA9ICQoXCIuY3RfY2VudGVyXCIpO1xubGV0IGNvbnRhaW5lciA9ICQoXCIuY29udGFpbmVyXCIpO1xuXG4vLyBQQy9hcHDvvJrliIfmjaJoZWFkZXJcbmxldCBoZWFkZXJfcGMgPSAkKFwiLmhlYWRlcl9wY1wiKTtcbmxldCBoZWFkZXJfYXBwID0gJChcIi5oZWFkZXJfYXBwXCIpO1xuXG4vLyBhcHDvvJpoZWFkZXLkuIrnmoTlt6blj7PmjInpkq7ljLrln59cbmxldCBidG5fYXBwX3NpZGVyID0gJChcIiNidG5fYXBwX3NpZGVyXCIpO1xubGV0IGJ0bl9hcHBfcmlnaHQgPSAkKFwiI2J0bl9hcHBfcmlnaHRcIik7XG5cbi8vIGFwcO+8mueCueWHu2hlYWRlcl9hcHDml7blgJnlvLnlh7rmnaXnmoTmir3lsYlcbmxldCBhcHBfc2lkZV9nbGFzcyA9ICQoXCIjYXBwX3NpZGVfZ2xhc3NcIik7XG5sZXQgYXBwX3NpZGVfY29udGVudCA9ICQoXCIjYXBwX3NpZGVfY29udGVudFwiKTtcblxuLy8gMS7lt6bkuK3phY3nva5cbmxldCBvbmVfY29udGFpbmVyID0gXCI4MCVcIjtcbmxldCBvbmVfY3RfY2VudGVyX3dpZHRoID0gXCI3NSVcIjtcbmxldCBvbmVfY3RfbGVmdF93aWR0aCA9IFwiMjUlXCI7XG4vLyAyLiDkuK3lj7PphY3nva5cbmxldCB0d29fY29udGFpbmVyID0gXCI4MCVcIjtcbmxldCB0d29fY3RfY2VudGVyX3dpZHRoID0gXCI3NSVcIjtcbmxldCB0d29fY3RfcmlnaHRfd2lkdGggPSBcIjI1JVwiO1xuLy8gMy4g5bem5Lit5Y+z6YWN572uXG5sZXQgdGhyZWVfY29udGFpbmVyID0gXCI5NSVcIjtcbmxldCB0aHJlZV9jdF9jZW50ZXJfd2lkdGggPSBcIjYwJVwiO1xubGV0IHRocmVlX2N0X3JpZ2h0X3dpZHRoID0gXCIyMCVcIjtcbmxldCB0aHJlZV9jdF9sZWZ0X3dpZHRoID0gXCIyMCVcIjtcbi8vIDQuIOS4remFjee9rlxubGV0IGZvdXJfY29udGFpbmVyID0gXCI3NSVcIjtcbmxldCBmb3VyX2N0X2NlbnRlcl93aWR0aCA9IFwiMTAwJVwiO1xuLy8g6K6+5aSH5bCP5LqONTYwcHjnmoTkuK3phY3nva5cbmxldCBkZXZpY2Vfc21hbGxfY29udGFpbmVyID0gXCI5OCVcIjtcbmxldCBkZXZpY2Vfc21hbGxfY2VudGVyID0gXCIxMDAlXCI7XG4vLyDorr7lpIflsI/kuo43ODBweOeahOS4remFjee9rlxubGV0IGRldmljZV9jZW50ZXJfY29udGFpbmVyID0gXCI5NiVcIjtcbmxldCBkZXZpY2VfY2VudGVyX2NlbnRlciA9IFwiMTAwJVwiO1xubGV0IHRvcCA9IDA7XG4vLyDliKTmlq1wY+auteW3puWPs+S4iuinkueahOeureWktOivpeaYvuekuuWTquS4qlxuZnVuY3Rpb24gbGVmdF9yaWdodF9hcnJvdygpIHtcbiAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gIH0gZWxzZSB7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICB9XG4gIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICB9IGVsc2Uge1xuICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICB9XG59XG5mdW5jdGlvbiBsZWZ0X2NlbnRlcl9yaWdodCgpIHtcbiAgY29udGFpbmVyLmNzcyh7IHdpZHRoOiB0aHJlZV9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogdGhyZWVfY3RfY2VudGVyX3dpZHRoIH0pO1xuICBjdF9sZWZ0LmNzcyh7XG4gICAgd2lkdGg6IHRocmVlX2N0X2xlZnRfd2lkdGgsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICB9KTtcbiAgY3RfcmlnaHQuY3NzKHtcbiAgICB3aWR0aDogdGhyZWVfY3RfcmlnaHRfd2lkdGgsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICB9KTtcbiAgbGVmdF9yaWdodF9hcnJvdygpO1xuICBpZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KFwibGF5b3V0XCIpKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibGF5b3V0XCIpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxSXCIpO1xuICAgIGNvbnNvbGUubG9nKFwi5biD5bGA77ya5bem5Lit5Y+zXCIpO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMUlwiKTtcbiAgfVxufVxuZnVuY3Rpb24gbGVmdF9jZW50ZXIoKSB7XG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogb25lX2NvbnRhaW5lciB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiBvbmVfY3RfY2VudGVyX3dpZHRoIH0pO1xuICBjdF9sZWZ0LmNzcyh7IHdpZHRoOiBvbmVfY3RfbGVmdF93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBsZWZ0X3JpZ2h0X2Fycm93KCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsYXlvdXRcIik7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFwiKTtcbiAgICBjb25zb2xlLmxvZyhcIuW4g+WxgO+8muW3puS4rVwiKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFwiKTtcbiAgfVxufVxuZnVuY3Rpb24gY2VudGVyX3JpZ2h0KCkge1xuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IHR3b19jb250YWluZXIgfSk7XG4gIGN0X3JpZ2h0LmNzcyh7IHdpZHRoOiB0d29fY3RfcmlnaHRfd2lkdGggfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogdHdvX2N0X2NlbnRlcl93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICBsZWZ0X3JpZ2h0X2Fycm93KCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsYXlvdXRcIik7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiUlwiKTtcbiAgICBjb25zb2xlLmxvZyhcIuW4g+WxgO+8muS4reWPs1wiKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiUlwiKTtcbiAgfVxufVxuZnVuY3Rpb24gY2VudGVyKCkge1xuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IGZvdXJfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IGZvdXJfY3RfY2VudGVyX3dpZHRoIH0pO1xuICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgbGVmdF9yaWdodF9hcnJvdygpO1xuICBpZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KFwibGF5b3V0XCIpKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibGF5b3V0XCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiQ1wiKTtcbiAgICBjb25zb2xlLmxvZyhcIuW4g+WxgO+8muS4rVwiKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiQ1wiKTtcbiAgfVxufVxuZnVuY3Rpb24gZGV2aWNlX3NtYWxsKCkge1xuICAvLyDmnIDlsI/lsLrlr7jvvJrmnIDlpKc1NjBweFxuICBjb25zb2xlLmxvZyhcIuWwj+S6jjU2MHB45bC65a+4XCIpO1xuXG4gIGhlYWRlcl9wYy5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgaGVhZGVyX2FwcC5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gIC8vIOiuvue9ruW4g+WxgFxuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IGRldmljZV9zbWFsbF9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogZGV2aWNlX3NtYWxsX2NlbnRlciB9KTtcbiAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG59XG5mdW5jdGlvbiBkZXZpY2VfY2VudGVyKCkge1xuICAvLyDkuK3nrYnlsLrlr7jvvJrmnIDlpKc5ODBweFxuICBjb25zb2xlLmxvZyhcIuWwj+S6jjk4MHB45bC65a+4XCIpO1xuXG4gIGhlYWRlcl9wYy5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgaGVhZGVyX2FwcC5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gIC8vIOiuvue9ruW4g+WxgFxuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IGRldmljZV9jZW50ZXJfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IGRldmljZV9jZW50ZXJfY2VudGVyIH0pO1xuICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbn1cbmZ1bmN0aW9uIGRldmljZV9sYXJnZXN0KCkge1xuICAvLyDmnIDlpKflsLrlr7jvvJrmnIDlpKcxMjYxcHhcbiAgY29uc29sZS5sb2coXCLlsI/kuo4xMjYxcHjlsLrlr7hcIik7XG5cbiAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gIH0gZWxzZSB7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICB9XG4gIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICB9IGVsc2Uge1xuICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICB9XG4gIGhlYWRlcl9wYy5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gIGhlYWRlcl9hcHAuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG5cbiAgY29udGFpbmVyLmNzcyh7IHdpZHRoOiB0aHJlZV9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogdGhyZWVfY3RfY2VudGVyX3dpZHRoIH0pO1xuICBjdF9sZWZ0LmNzcyh7XG4gICAgd2lkdGg6IHRocmVlX2N0X2xlZnRfd2lkdGgsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICB9KTtcbiAgY3RfcmlnaHQuY3NzKHtcbiAgICB3aWR0aDogdGhyZWVfY3RfcmlnaHRfd2lkdGgsXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5idG5fcGNfc3dpdGNoKCk7XG4gICAgdGhpcy5idG5fYXBwX3N3aXRjaCgpO1xuICAgIHRoaXMuYnJvd3Nlcl9yZW1lbWJlcigpO1xuICAgIHRoaXMuZGV2aWNlX3N3aXRjaCgpOyAvLyDov5nkuKrmlL7liLDmnIDlkI7oh6rosIPnlKgh5Zug5Li65LiN566h5pys5Zyw5a2Y5YKo5piv5LuA5LmI77yM5pyA57uI6L+Y5piv6KaB5qC55o2u6K6+5aSH55uR5ZCs5Li65Li7XG4gIH0sXG4gIC8qIFBD77ya5Y2VL+WPjC/kuInmoI/luIPlsYDliIfmjaLmjInpkq7ngrnlh7vkuovku7YgKi9cbiAgYnRuX3BjX3N3aXRjaDogZnVuY3Rpb24gKCkge1xuICAgIGFycm93X2xlZnQuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gICAgICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAvL+W3puS4remFjee9rlxuICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy/lt6bkuK3lj7PphY3nva5cbiAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAvL+S4remFjee9rlxuICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8v5Lit5Y+z6YWN572uXG4gICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGFycm93X3JpZ2h0LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAvLyDovazmjaLliIfmjaLkuYvlkI7nmoTnrq3lpLTmjInpkq5cbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgLy/kuK3lj7PphY3nva5cbiAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL+W3puS4reWPs+mFjee9rlxuICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgLy8g5Lit6YWN572uXG4gICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8g5bem5Lit6YWN572uXG4gICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICAvKiDnp7vliqjnq6/lt6blj7PkuIrop5LnmoTmjInpkq4gKi9cbiAgYnRuX2FwcF9zd2l0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyDngrnlh7vlt6bmjInpkq5cbiAgICBidG5fYXBwX3NpZGVyLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcF9zaWRlX2dsYXNzLmNzcyh7IGRpc3BsYXk6IFwiYmxvY2tcIiB9KTtcbiAgICAgIGFwcF9zaWRlX2NvbnRlbnQuY3NzKHsgZGlzcGxheTogXCJibG9ja1wiIH0pO1xuICAgICAgLy8g6Zi75q2i5oq95bGJ5bGC5LiL55qE5ruR5Yqo56m/6YCPXG4gICAgICB0b3AgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGNvbnRhaW5lci5jc3MoeyBwb3NpdGlvbjogXCJmaXhlZFwiLCB0b3A6IC10b3AgKyBcInB4XCIgfSk7XG4gICAgfSk7XG4gICAgLy8g54K55Ye75q+b546755KD54mHXG4gICAgYXBwX3NpZGVfZ2xhc3MuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgYXBwX3NpZGVfZ2xhc3MuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgICBhcHBfc2lkZV9jb250ZW50LmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgLy8g6Zi75q2i5oq95bGJ5bGC5LiL55qE5ruR5Yqo56m/6YCPXG4gICAgICBjb250YWluZXIuY3NzKHsgcG9zaXRpb246IFwiXCIsIHRvcDogXCJcIiB9KTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0b3ApO1xuICAgIH0pO1xuICAgIC8vIOeCueWHu+WPs+aMiemSriDlvLnlh7rmkJzntKLmoYZcbiAgICBidG5fYXBwX3JpZ2h0LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGFsZXJ0KFwi5pys572R56uZ6L+Y5Zyo5byA5Y+R5Lit77yM6K+45aSa5Yqf6IO96L+Y5pyq5a6M5ZaE77yM5pWs6K+35pyf5b6FflwiKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgIH0pO1xuICB9LFxuICAvKiDmtY/op4jlmajorrDkvY/luIPlsYAgKi9cbiAgYnJvd3Nlcl9yZW1lbWJlcjogZnVuY3Rpb24gKCkge1xuICAgIGxldCBiX2xlZnQgPSBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIik7XG4gICAgbGV0IGJfcmlnaHQgPSBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpO1xuICAgIGxldCBiX2xheW91dDtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICAgIC8vIOa1j+iniOWZqOaciee8k+WtmOeahOaDheWGtVxuICAgICAgbGV0IGxheW91dF9jaGFuZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIuaciWxheW91dOW4g+WxgOe8k+WtmFwiKTtcbiAgICAgIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkxSXCIpIHtcbiAgICAgICAgLy8g5bem5Lit5Y+z5biD5bGAXG4gICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiTFwiKSB7XG4gICAgICAgIC8vIOW3puS4reW4g+WxgFxuICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIlJcIikge1xuICAgICAgICAvLyDkuK3lj7PluIPlsYBcbiAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiQ1wiKSB7XG4gICAgICAgIC8vIOS4reW4g+WxgFxuICAgICAgICBjZW50ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWFtuS7luiOq+WQjeWFtuWmmeeahOaDheWGtVxuICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDmtY/op4jlmajmsqHmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgIGNvbnNvbGUubG9nKFwi5rKh5pyJbGF5b3V05biD5bGA57yT5a2YXCIpO1xuICAgICAgaWYgKGJfbGVmdCA9PT0gXCJibG9ja1wiICYmIGJfcmlnaHQgPT09IFwibm9uZVwiKSB7XG4gICAgICAgIC8vIOW3puS4reW4g+WxgFxuICAgICAgICBiX2xheW91dCA9IFwiTFwiO1xuICAgICAgfSBlbHNlIGlmIChiX2xlZnQgPT09IFwibm9uZVwiICYmIGJfcmlnaHQgPT09IFwiYmxvY2tcIikge1xuICAgICAgICAvLyDkuK3lj7PluIPlsYBcbiAgICAgICAgYl9sYXlvdXQgPSBcIlJcIjtcbiAgICAgIH0gZWxzZSBpZiAoYl9sZWZ0ID09PSBcImJsb2NrXCIgJiYgYl9yaWdodCA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAgIC8v5bem5Lit5Y+z5biD5bGAXG4gICAgICAgIGJfbGF5b3V0ID0gXCJMUlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYl9sYXlvdXQgPSBcIkxSXCI7XG4gICAgICAgIC8vIOW3puS4reWPs+W4g+WxgFxuICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgfVxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIGJfbGF5b3V0KTtcbiAgICB9XG4gIH0sXG4gIC8qIOWqkuS9k+afpeivouW4g+WxgCAqL1xuICBkZXZpY2Vfc3dpdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yib5bu65p+l6K+i5YiX6KGoXG4gICAgbGV0IGRldmljZV93aWR0aCA9IFtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNTYwcHgpXCIpLFxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA5ODBweClcIiksXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEyNjFweClcIiksXG4gICAgXTtcblxuICAgIC8vIOWumuS5ieWbnuiwg+WHveaVsFxuICAgIGZ1bmN0aW9uIG1lZGlhTWF0Y2hzKCkge1xuICAgICAgaWYgKGRldmljZV93aWR0aFswXS5tYXRjaGVzKSB7XG4gICAgICAgIGRldmljZV9zbWFsbCgpO1xuICAgICAgfSBlbHNlIGlmIChkZXZpY2Vfd2lkdGhbMV0ubWF0Y2hlcykge1xuICAgICAgICBkZXZpY2VfY2VudGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGRldmljZV93aWR0aFsyXS5tYXRjaGVzKSB7XG4gICAgICAgIGRldmljZV9sYXJnZXN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWkp+S6juiuvuWumuacgOWkp+WwuuWvuOaDheWGtVwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5YWI6L+Q6KGM5LiA5qyh5Zue6LCD5Ye95pWwXG4gICAgbWVkaWFNYXRjaHMoKTtcbiAgICAvLyDkuLrmn6Xor6LliJfooajms6jlhoznm5HlkKzlmajvvIzlkIzml7blsIblm57osIPlh73mlbDkvKDnu5nnm5HlkKzlmahcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRldmljZV93aWR0aC5sZW5ndGg7IGkrKykge1xuICAgICAgZGV2aWNlX3dpZHRoW2ldLmFkZExpc3RlbmVyKG1lZGlhTWF0Y2hzKTtcbiAgICB9XG4gIH0sXG59O1xuIiwiaW1wb3J0IGxheW91dF9vYmplY3QgZnJvbSBcIi4vY29tbW9uL2xheW91dC5qc1wiO1xuaW1wb3J0IHRvY19vYmplY3QgZnJvbSBcIi4vcGFydC90b2MuanNcIjtcbmltcG9ydCBjb21tZW50c19vYmplY3QgZnJvbSBcIi4vcGFydC9jb21tZW50cy5qc1wiO1xuaW1wb3J0IHsgZ29fdG9wX29iamVjdCwgZ2V0U2Nyb2xsIH0gZnJvbSBcIi4vcGFydC9nb190b3AuanNcIjtcbmltcG9ydCB3ZWJfaW5mb19vYmplY3QgZnJvbSBcIi4vcGFydC93ZWJfaW5mby5qc1wiO1xuaW1wb3J0IHNlYXJjaF9vYmplY3QgZnJvbSBcIi4vcGFydC9zZWFyY2guanNcIjtcbmltcG9ydCBzaGFyZV9vYmplY3QgZnJvbSBcIi4vcGFydC9zaGFyZWJ1dHRvbi5qc1wiO1xuaW1wb3J0IGNhdGVnb3JpZXNfb2JqZWN0IGZyb20gXCIuL3BhcnQvY2F0ZWdvcmllcy5qc1wiO1xuXG4vLyDlhaXlj6Plh73mlbDvvIzkvJrlnKjpobXpnaLliqDovb3lrozmr5XmiafooYxcbiQoZnVuY3Rpb24gKCkge1xuICAvLyDliJ3lp4vljJbnm67lvZXohJrmnKzlh73mlbBcbiAgdG9jX29iamVjdC5pbml0KCk7XG4gIC8vIOWIneWni+WMluivhOiuuuaooeWdl+S4i+aJgOacieWHveaVsFxuICBjb21tZW50c19vYmplY3QuaW5pdCgpO1xuICAvLyDliJ3lp4vljJblm57liLDpobbpg6hcbiAgZ29fdG9wX29iamVjdC5pbml0KCk7XG4gIC8vIOW4g+WxgOWIneWni+WMllxuICBsYXlvdXRfb2JqZWN0LmluaXQoKTtcbiAgc2VhcmNoX29iamVjdC5pbml0KCk7XG4gIC8vIOWFpeWPo+WHveaVsOWIneWni+WMlue9keermei/kOihjOaXtumXtFxuICB3ZWJfaW5mb19vYmplY3QuaW5pdCgpO1xuICAvLyDliIbkuqvmjInpkq7nmoTliJ3lp4vljJZcbiAgc2hhcmVfb2JqZWN0LmluaXQoKTtcbiAgLy8g55uu5b2V5Ye95pWw5Yid5aeL5YyWXG4gIGNhdGVnb3JpZXNfb2JqZWN0LmluaXQoKTtcbiAgLy8g5aS05Zu+5LyY5YyW5Luj56CBXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcnRpY2xlX2ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXJ0Y2xlX2xpc3RfaXRlbV9pbWdcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnRpY2xlX2ltZy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHdpZCA9IGFydGljbGVfaW1nW2ldLmZpcnN0RWxlbWVudENoaWxkLndpZHRoICsgNTtcbiAgICAgIGxldCBoZWkgPSBhcnRpY2xlX2ltZ1tpXS5maXJzdEVsZW1lbnRDaGlsZC5oZWlnaHQgKyA3O1xuICAgICAgYXJ0aWNsZV9pbWdbaV0uc3R5bGUubWF4V2lkdGggPSB3aWQgKyBcInB4XCI7XG4gICAgICBhcnRpY2xlX2ltZ1tpXS5zdHlsZS5tYXhIZWlnaHQgPSBoZWkgKyBcInB4XCI7XG4gICAgfVxuICB9LCAxMDAwKTtcbn0pO1xuIiwiLypcbiAqIEBBdXRob3I6IHd6dGxpbmsxMDEzXG4gKiBARGF0ZTogMjAyMi0wNy0wNyAxODo0ODoxOFxuICogQExhc3RFZGl0VGltZTogMjAyMi0wNy0xMCAyMTo0NzozMVxuICogQERlc2NyaXB0aW9uOlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhdGVnb3JpZXNfd2lkZ2V0KClcbiAgICB0aGlzLmhpdF9vcGVuX2Nsb3NlX2ZvcmRlcigpXG4gICAgdGhpcy5yZWFkbW9yZV9ibG9nX2Vzc2F5KClcbiAgfSxcbiAgLy8g54K55Ye7aWNvbuWxleW8gC/lhbPpl63moJHliIbnsbtcbiAgaGl0X29wZW5fY2xvc2VfZm9yZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gbGV0IGNhdGVfY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlX2NlbGwnKVxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZV9jZWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBpZiAoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgIC8vICAgICBsZXQgaXRlbSA9ICQoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdKVxuICAgIC8vICAgICBpdGVtLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICBpZiAoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgIC8vICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gICAgICAgfSBlbHNlIGlmIChcbiAgICAvLyAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID09PSAnaW5saW5lLWJsb2NrJ1xuICAgIC8vICAgICAgICkge1xuICAgIC8vICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC8vIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH0sXG4gIC8vIOWIneWni+WMllxuICBjYXRlZ29yaWVzX3dpZGdldDogZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcnJfbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnktbGlzdC1pdGVtJylcblxuICAgIGFycl9saS5mb3JFYWNoKGxpID0+IHtcbiAgICAgIC8vIOe+juWMluivpeWIhuexu+aAu+aVsFxuICAgICAgbGV0IG9ial93b3JkID0gbGkucXVlcnlTZWxlY3RvcignYScpLm5leHRFbGVtZW50U2libGluZ1xuICAgICAgb2JqX3dvcmQuaW5uZXJIVE1MID0gJyBbJyArIG9ial93b3JkLmlubmVySFRNTCArICddJ1xuICAgICAgLy8g6K+l5YiG57G75LiL5aaC5p6c5pyJ5a2Q5YiG57G7XG4gICAgICBpZiAobGkucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWxpc3QtY2hpbGQnKSkge1xuICAgICAgICAvLyDpu5jorqTmiYDmnInlrZDliIbnsbvlhajpg6jmlLbnvKlcbiAgICAgICAgbGkucXVlcnlTZWxlY3RvcigndWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIC8vIOWxleW8gOaMiemSrlxuICAgICAgICBsZXQgbm9kZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgbm9kZV8xLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgICAgICBub2RlXzEuaW5uZXJIVE1MID1cbiAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1wbHVzLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnXG4gICAgICAgIGxpLmluc2VydEJlZm9yZShub2RlXzEsIGxpLnF1ZXJ5U2VsZWN0b3IoJ2EnKSlcblxuICAgICAgICAvLyDmlLbnvKnmjInpkq5cbiAgICAgICAgbGV0IG5vZGVfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBub2RlXzIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBub2RlXzIuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgICAgIG5vZGVfMi5pbm5lckhUTUwgPVxuICAgICAgICAgICc8aSBjbGFzcz1cImZhIGZhLW1pbnVzLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnXG4gICAgICAgIGxpLmluc2VydEJlZm9yZShub2RlXzIsIGxpLnF1ZXJ5U2VsZWN0b3IoJ2EnKSlcblxuICAgICAgICAvLyDlsZXlvIDmjInpkq7ms6jlhozngrnlh7vkuovku7ZcbiAgICAgICAgbm9kZV8xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgbm9kZV8yLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgfSlcblxuICAgICAgICAvLyDmlLbnvKnmjInpkq7ms6jlhozngrnlh7vkuovku7ZcbiAgICAgICAgbm9kZV8yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG5vZGVfMi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgbm9kZV8xLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6K+l5YiG57G75LiL5rKh5pyJ5a2Q5YiG57G7XG4gICAgICAgIGxldCBub2RlXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykgLy8g5pS+5LiA5Liq5Y2g5L2N56ymXG4gICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgbm9kZV8xLnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzE1cHgnXG4gICAgICAgIG5vZGVfMS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBsaS5pbnNlcnRCZWZvcmUobm9kZV8xLCBsaS5xdWVyeVNlbGVjdG9yKCdhJykpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgLy8g5p+l55yL5pu05aSa6aG16Z2i77yM5LyY5YyW5Y2a5a6iL+maj+eslOaYvuekulxuICByZWFkbW9yZV9ibG9nX2Vzc2F5OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL2FyY2hpdmVzLycpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAvLyDljrvmjonnrKzkuIDkuKrvvJ/lrZfnrKZcbiAgICAgIGxldCBwYXJhbXMgPSBsb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpXG4gICAgICAvLyDmoLnmja495Y+35YiS5YiG5Y+C5pWwXG4gICAgICBsZXQgYXJyID0gcGFyYW1zLnNwbGl0KCc9JylcbiAgICAgIC8vIOiOt+WPlnBhZ2VfdHlwZeWPguaVsFxuICAgICAgbGV0IHBhZ2VfdHlwZSA9IGFyclsxXVxuICAgICAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFyY2hpdmVfYXJ0aWNsZV9saXN0JylcbiAgICAgIGZvciAobGV0IHUgPSAwOyB1IDwgdWwubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgLy8g5a+55q+P5LiA5LiqbGnov5vooYzliKTmlq3vvIzlpoLmnpzkuI3mmK/lj4LmlbDnmoTlgLzvvIzlsLHov5vooYzpmpDol49cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bFt1XS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBpbmRleCA9IHVsW3VdLmNoaWxkcmVuW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAnZHNhbCcpIHtcbiAgICAgICAgICAgIGluZGV4ID0gJ2Jsb2cnXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCAhPT0gcGFnZV90eXBlKSB7XG4gICAgICAgICAgICB1bFt1XS5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxufVxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbuOAkOaWh+eroOiuv+mXrumHj+aOkuWQjeOAkVxuICAgIOaWh+eroOmYheivu+mHj+WcqOWNleS4quaWh+eroOS4reWPr+S7peaYvuekuuS9huaYr+S4jeiDveaOkuWQje+8jOaOkuWQjeaAjuS5iOWunueOsOWRou+8n1xuICAgIOaWueahiDHvvJrkvb/nlKh2YWxpbmVcbiAgICDmlrnmoYgy77ya5Zyo5pyN5Yqh5Zmo5LiK6L+b6KGM5YWo56uZ55qE5paH56ug6K6/6Zeu77yM5o+Q5Y+W5LuW5Lus55qE6K6/6Zeu6YePaWRcbiAgICDmlrnmoYgz77ya5a+5dHdpa29v5LqR5Ye95pWw6L+b6KGM5Luj56CB5pu05pS577yM57G75Ly86K6/6Zeu6YePYXBpXG4gXG7jgJDor4TorrrliIfmjaLmjInpkq7jgJFcbiAgICDliIfmjaJ1dHRlcmFuY2Vz6K+E6K665ZCO77yM6aG16Z2i5Lya5Yi35paw5LiA5LiL54S25ZCO5Y+I5Zue5Yiw6buY6K6k6K+E6K6657O757uf5LqG77yM6L+Z5Liq5Y+v5Lul5LyY5YyWXG5cbuOAkOacgOaWsOivhOiuuuOAkVxuICAgIOacgOaWsOivhOiuuue7hOS7tu+8jOWmguaenGJsb2fpobXpnaLnlKjkuobvvIzpgqPkuYjov5nkuKrnu4Tku7blsLHkuI3og73mlL7lnKjnp7vliqjnq6/kvqfovrnmoI/kuobvvIxcbiAgICDlkIzkuIDkuKppZOS4jeiDveWkmuasoeeUqOeahOe8mOaVheWQl++8n1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8g5a+85Ye65Li65LiA5Liq5a+56LGhXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdvX2NvbW1lbnRzKClcbiAgICB0aGlzLmNvbW1lbnRzX2NvdW50KClcbiAgICB0aGlzLm5ld19jb21tZW50cygpXG4gICAgdGhpcy5zd2l0Y2hfY29tbWVudCgpXG4gICAgdHdpa29vXG4gICAgICAuaW5pdCh7XG4gICAgICAgIGVudklkOiAnaHR0cHM6Ly90d2lrb28ud3p0bGluazEwMTMuY29tLycsXG4gICAgICAgIGVsOiAnI3Rjb21tZW50JyxcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIC8vIHBhdGg6ICd3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUnLCAvLyDnlKjkuo7ljLrliIbkuI3lkIzmlofnq6DnmoToh6rlrprkuYkganMg6Lev5b6E77yM5aaC5p6c5oKo55qE5paH56ug6Lev5b6E5LiN5pivIGxvY2F0aW9uLnBhdGhuYW1l77yM6ZyA5Lyg5q2k5Y+C5pWwXG5cbiAgICAgICAgLy8g6K+E6K665Yqg6L295oiQ5Yqf5ZCO55qE5Zue6LCD5Ye95pWw44CCXG4gICAgICAgIC8vIOWPkeihqOivhOiuuuWQjuiHquWKqOWIt+aWsOivhOiuuuaXtuOAgeWKoOi9veS4i+S4gOmhteivhOiuuuaXtu+8jOS5n+S8muinpuWPkeOAglxuICAgICAgICAvLyDor4TorrrliqDovb3lpLHotKXml7bkuI3kvJrop6blj5HjgIJcbiAgICAgICAgb25Db21tZW50TG9hZGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1R3aWtvbyBhbGwgY29tbWVudHMgbG9hZGVkJylcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFR3aWtvbyDmiJDlip/mjILovb3lkI7nmoTlm57osIPlh73mlbDjgILnjq/looMgSUQg6ZSZ6K+v44CB572R57uc5byC5bi444CB5oyC6L295aSx6LSl562J5oOF5Ya15pe25LiN5Lya6Kem5Y+R44CCXG4gICAgICAgIGNvbnNvbGUubG9nKCdUd2lrb28gbG9hZGluZyBmaW5pc2hlZCcpXG4gICAgICB9KVxuICB9LFxuICAvLyDlj7PkuIvop5LmjInpkq7kuovku7Yg5piv5ZCm5YmN5b6A6K+E6K665Yy6XG4gIGdvX2NvbW1lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb19jb21tZW50cycpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cbiAgfSxcbiAgLy8g5paH56ug6K+E6K665pWwXG4gIGNvbW1lbnRzX2NvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yik5pat6aG16Z2i5piv5ZCm5pyJ6K+E6K665Yy6aWTlkozlvJXnlKjor4TorrrmlbDnmoRpZFxuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cycpICYmXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJylcbiAgICApIHtcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJylcbiAgICAgIC8vIEJPTeiOt+WPlumhtemdonVybOeahHBhdGhuYW1l6Lev5b6EXG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzX3VybCA9IFtsb2NhdGlvbi5wYXRobmFtZV1cblxuICAgICAgdHdpa29vXG4gICAgICAgIC5nZXRDb21tZW50c0NvdW50KHtcbiAgICAgICAgICBlbnZJZDogJ2h0dHBzOi8vdHdpa29vLnd6dGxpbmsxMDEzLmNvbS8nLCAvLyDnjq/looMgSURcbiAgICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgICB1cmxzOiB0d2lrb29fY29tbWVudHNfdXJsLCAvLyDkuI3ljIXlkKvljY/orq7jgIHln5/lkI3jgIHlj4LmlbDnmoTmlofnq6Dot6/lvoTliJfooajvvIzlv4XkvKDlj4LmlbBcbiAgICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlLCAvLyDor4TorrrmlbDmmK/lkKbljIXmi6zlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgLy8g5bCG6K+E6K665pWw5YaZ5YWl5YW25LitXG4gICAgICAgICAgdHdpa29vX2NvbW1lbnRzLmlubmVyVGV4dCA9IHJlc1swXS5jb3VudFxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgLy8g6L+U5Zue56S65L6LOiBbXG4gICAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEwL3Bvc3QtMS5odG1sJywgY291bnQ6IDEwIH0sXG4gICAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzExL3Bvc3QtMi5odG1sJywgY291bnQ6IDAgfSxcbiAgICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTIvcG9zdC0zLmh0bWwnLCBjb3VudDogMjAgfVxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAvLyDlj5HnlJ/plJnor69cbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIC8vIOacgOaWsOivhOiuulxuICBuZXdfY29tbWVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaG90X2FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdF9hcnRpY2xlc19pdGVtJylcbiAgICB2YXIgcGFnZV9zaXplID0gOFxuICAgIHR3aWtvb1xuICAgICAgLmdldFJlY2VudENvbW1lbnRzKHtcbiAgICAgICAgZW52SWQ6ICdodHRwczovL3R3aWtvby53enRsaW5rMTAxMy5jb20vJywgLy8g546v5aKDIElEXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICBwYWdlU2l6ZTogcGFnZV9zaXplLCAvLyDojrflj5blpJrlsJHmnaHvvIzpu5jorqTvvJoxMO+8jOacgOWkp++8mjEwMFxuICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlLCAvLyDmmK/lkKbljIXmi6zmnIDmlrDlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIG5ld19jb21tZW50c19sb2RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3X2NvbW1lbnRzX2xvZGluZycpXG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudCA9IG5ld19jb21tZW50c19sb2RpbmcucGFyZW50RWxlbWVudFxuICAgICAgICBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudC5yZW1vdmVDaGlsZChuZXdfY29tbWVudHNfbG9kaW5nKVxuICAgICAgICAvLyDmj5LlhaXor4TorrpcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlX3NpemU7IGkrKykge1xuICAgICAgICAgIGlmIChyZXNbaV0uY29tbWVudCkge1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19jb250ZW50ID0gcmVzW2ldLmNvbW1lbnRcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfbmljayA9IHJlc1tpXS5uaWNrXG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX3VybCA9IHJlc1tpXS51cmxcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfYXZhdGFyID0gcmVzW2ldLmF2YXRhclxuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c190aW1lID0gcmVzW2ldLnJlbGF0aXZlVGltZVxuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19pZCA9ICcjJyArIHJlc1tpXS5pZFxuXG4gICAgICAgICAgICB2YXIgaG90X2FydGljbGVzX2NoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgaG90X2FydGljbGVzX2NoaWxkLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaXRlbV91cFwiPjxpbWcgc3JjPVwiJyArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c19hdmF0YXIgK1xuICAgICAgICAgICAgICAnXCIgY2xhc3M9XCJhdmF0YXJcIj48ZGl2IGNsYXNzPVwibmlja19uYW1lXCI+PHNwYW4gY2xhc3M9XCJuaWNrXCI+JyArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c19uaWNrICtcbiAgICAgICAgICAgICAgJzwvc3Bhbj48c3BhbiBjbGFzcz1cInRpbWVcIj4nICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX3RpbWUgK1xuICAgICAgICAgICAgICAnPC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJpdGVtX2Rvd25cIj48YSBocmVmPVwiJyArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c191cmwgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfaWQgK1xuICAgICAgICAgICAgICAnXCI+JyArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c19jb250ZW50ICtcbiAgICAgICAgICAgICAgJzwvYT48L2Rpdj4nXG4gICAgICAgICAgICBob3RfYXJ0aWNsZXMuYXBwZW5kKGhvdF9hcnRpY2xlc19jaGlsZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgIH0pXG4gIH0sXG4gIC8vIOWIh+aNouivhOiuuijor4Torrrnu4Tku7blrZjlnKjml7YpXG4gIHN3aXRjaF9jb21tZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzd2l0Y2hfYnRuJykpIHtcbiAgICAgIHZhciBzd2l0Y2hfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N3aXRjaF9idG4nKVxuICAgICAgdmFyIGdpdGh1Yl9jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dpdGh1Yl9jb21tZW50JylcbiAgICAgIHZhciB0d2lrb29fY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0d2lrb29fY29tbWVudCcpXG5cbiAgICAgIHN3aXRjaF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaF9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnbW92ZScpXG4gICAgICAgIGdpdGh1Yl9jb21tZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRlbnQtaW4nKVxuICAgICAgICB0d2lrb29fY29tbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb250ZW50LWluJylcblxuICAgICAgICBpZiAoZ2l0aHViX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgZ2l0aHViX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICB0d2lrb29fY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVHdpa29vIOivhOiuuuezu+e7n1xuICAgICAgICAgIGdpdGh1Yl9jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICB0d2lrb29fY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSxcbn1cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIOe8k+aFouaYvuekulxuICAgICAgICDnvJPmhaLlm57liLDpobbpg6hcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiBsZXQgZ29fdG9wX29iamVjdCA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5nb190b3AoKTtcbiAgICAgICAgdGhpcy5jbGlja19nb190b3AoKTtcbiAgICB9LFxuICAgIGdvX3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8g5rua5Yqo5pi+56S6Z29fdG9w5oyJ6ZKuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgLy8g5oyB57ut55uR5ZCs5rua5Yqo54q25oCBXG4gICAgICAgICAgICBnZXRTY3JvbGwoKS50b3AgIT09IDAgPyAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIikgOiAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgY2xpY2tfZ29fdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g54K55Ye75Zue5Yiw6aG26YOoXG4gICAgICAgICQoXCIjZ29fdG9wXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy8gc2Nyb29sVG9w5YW85a655oCn5pa55qGIXG5mdW5jdGlvbiBnZXRTY3JvbGwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0fHwwLFxuICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMFxuICAgIH07XG59XG5cblxuLy8g5aaC5p6c5LiN5YGa6buY6K6k5a+85YWl77yM5bCx5oyJ54Wn5LiL6Z2i5YaZ77yM5LiN6KaBZGVmYXVsdOivjVxuZXhwb3J0IHtcbiAgICBnb190b3Bfb2JqZWN0LCAvL+WvvOWHuuWvueixoVxuICAgIGdldFNjcm9sbCwgLy/lr7zlh7rpgJrnlKjlh73mlbBcbn1cblxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNlYXJjaCgpO1xuICB9LFxuICBzZWFyY2g6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1zZWFyY2gtaW5wdXRcIik7XG5cbiAgICBpZiAoaW5wdXRBcmVhKSB7XG4gICAgICBpbnB1dEFyZWEub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5wdXRBcmVhLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gaW5wdXRBcmVhLnBsYWNlaG9sZGVyID0gXCLliJ3lp4vljJbmkJzntKJpbmfCt8K3wrdcIjtcbiAgICAgICAgZ2V0U2VhcmNoRmlsZSgpO1xuICAgICAgICB0aGlzLm9uY2xpY2sgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgaW5wdXRBcmVhLm9ua2V5ZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJTZWFyY2goJHJlc3VsdENvbnRlbnQpIHtcbiAgICAgIC8vIGNsZWFyIHNlYXJjaCByZXN1bHRcbiAgICAgIHZhciBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWNsb3NlXCIpO1xuICAgICAgYnRuQ2xvc2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5wdXRBcmVhLnZhbHVlID0gXCJcIjtcbiAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgaW5wdXRBcmVhLnBsYWNlaG9sZGVyID0gXCLor7fovpPlhaXlhbPplK7or41cIjtcbiAgICAgICAgaW5wdXRBcmVhLmZvY3VzKCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBzZWFyY2hGdW5jID0gZnVuY3Rpb24gKHBhdGgsIHNlYXJjaF9pZCwgY29udGVudF9pZCkge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICB2YXIgQlROID0gXCI8ZGl2IGlkPSdsb2NhbC1zZWFyY2gtY2xvc2UnPua4heepuuaQnOe0ojwvZGl2PlwiO1xuICAgICAgdmFyICRpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlYXJjaF9pZCk7XG4gICAgICB2YXIgJHJlc3VsdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50X2lkKTtcblxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcGF0aCwgdHJ1ZSk7XG4gICAgICB4aHIuc2VuZCgpO1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIC8vIHJlc3VtZSBpbnB1dFxuICAgICAgICAgICRpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIC8vICAgJGlucHV0LnBsYWNlaG9sZGVyID0gXCLovpPlhaXlhbPplK7or43ku6XmkJzntKJcIjtcbiAgICAgICAgICAkaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICAgIHZhciB4bWwgPSB4aHIucmVzcG9uc2VYTUw7XG4gICAgICAgICAgdmFyIHJvb3QgPSB4bWwuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgIHZhciBsaXN0ID0gcm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImVudHJ5XCIpO1xuICAgICAgICAgIHZhciBkYXRhcyA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aXRsZVwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjb250ZW50XCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgdXJsOiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXJsXCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdHIgPSAnPHVsIGNsYXNzPVwiYXJjaGl2ZVwiPic7XG4gICAgICAgICAgICB2YXIga2V5d29yZHMgPSB0aGlzLnZhbHVlXG4gICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgLnNwbGl0KC9bXFxzXFwtXSsvKTtcbiAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZS50cmltKCkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmnKzlnLDmkJzntKLkuLvku6PnoIFcbiAgICAgICAgICAgIGRhdGFzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgdmFyIGlzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICB2YXIgY29udGVudF9pbmRleCA9IFtdO1xuICAgICAgICAgICAgICBpZiAoIWRhdGEudGl0bGUgfHwgZGF0YS50aXRsZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnRpdGxlID0gXCJVbnRpdGxlZFwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfdGl0bGUgPSBkYXRhLnRpdGxlLnRyaW0oKTtcbiAgICAgICAgICAgICAgdmFyIGRhdGFfdGl0bGUgPSBvcmlnX2RhdGFfdGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgdmFyIG9yaWdfZGF0YV9jb250ZW50ID0gZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88W14+XSs+L2csIFwiXCIpO1xuICAgICAgICAgICAgICB2YXIgZGF0YV9jb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgdmFyIGRhdGFfdXJsID0gZGF0YS51cmw7XG4gICAgICAgICAgICAgIHZhciBpbmRleF90aXRsZSA9IC0xO1xuICAgICAgICAgICAgICB2YXIgaW5kZXhfY29udGVudCA9IC0xO1xuICAgICAgICAgICAgICB2YXIgZmlyc3Rfb2NjdXIgPSAtMTtcbiAgICAgICAgICAgICAgLy8gb25seSBtYXRjaCBhcnRpbGVzIHdpdGggbm90IGVtcHR5IGNvbnRlbnRzXG4gICAgICAgICAgICAgIGlmIChkYXRhX2NvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXl3b3JkLCBpKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleF90aXRsZSA9IGRhdGFfdGl0bGUuaW5kZXhPZihrZXl3b3JkKTtcbiAgICAgICAgICAgICAgICAgIGluZGV4X2NvbnRlbnQgPSBkYXRhX2NvbnRlbnQuaW5kZXhPZihrZXl3b3JkKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X3RpdGxlIDwgMCAmJiBpbmRleF9jb250ZW50IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhfY29udGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleF9jb250ZW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlyc3Rfb2NjdXIgPSBpbmRleF9jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnRfaW5kZXgucHVzaCh7aW5kZXhfY29udGVudDppbmRleF9jb250ZW50LCBrZXl3b3JkX2xlbjprZXl3b3JkX2xlbn0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyDlsZXnpLrnu5PmnpxcbiAgICAgICAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBzdHIgKz1cbiAgICAgICAgICAgICAgICAgIFwiPGxpPjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPVwiICtcbiAgICAgICAgICAgICAgICAgIGRhdGFfdXJsICtcbiAgICAgICAgICAgICAgICAgIFwiID5cIiArXG4gICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdhcmNoaXZlLXRpdGxlJyA+XCIgK1xuICAgICAgICAgICAgICAgICAgb3JpZ19kYXRhX3RpdGxlICtcbiAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPlwiO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBvcmlnX2RhdGFfY29udGVudDtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3Rfb2NjdXIgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgLy8gY3V0IG91dCAxMDAgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gZmlyc3Rfb2NjdXIgLSAxMDtcbiAgICAgICAgICAgICAgICAgIHZhciBlbmQgPSBmaXJzdF9vY2N1ciArIDMwO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gNDA7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmIChlbmQgPiBjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBjb250ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudClcbiAgICAgICAgICAgICAgICAgIHZhciBtYXRjaF9jb250ZW50ID0gY29udGVudC5zdWJzdHIoc3RhcnQsIDIwMCk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIGhpZ2hsaWdodCBhbGwga2V5d29yZHNcbiAgICAgICAgICAgICAgICAgIGtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24gKGtleXdvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ1MgPSBuZXcgUmVnRXhwKGtleXdvcmQsIFwiZ2lcIik7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoX2NvbnRlbnQgPSBtYXRjaF9jb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgcmVnUyxcbiAgICAgICAgICAgICAgICAgICAgICAnPGVtIGNsYXNzPVwic2VhcmNoLWtleXdvcmRcIj4nICsga2V5d29yZCArIFwiPC9lbT5cIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIHN0ciArPVxuICAgICAgICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJzZWFyY2gtcmVzdWx0XCI+JyArIG1hdGNoX2NvbnRlbnQgKyBcIi4uLjwvcD5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RyICs9IFwiPC9hPjwvbGk+XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RyICs9IFwiPC91bD5cIjtcbiAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZihcIjxsaT5cIikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgQlROICtcbiAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J2xvY2FsLXNlYXJjaC1lbXB0eSc+5rKh5pyJ5om+5Yiw5L2g5omA6KaB5pCc57Si55qE5YaF5a654oCm4oCmPC9kaXY+XCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBCVE4gKyBzdHI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFNlYXJjaEZpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGF0aCA9IFwiL3NlYXJjaC54bWxcIjtcbiAgICAgIHNlYXJjaEZ1bmMocGF0aCwgXCJsb2NhbC1zZWFyY2gtaW5wdXRcIiwgXCJsb2NhbC1zZWFyY2gtcmVzdWx0XCIpO1xuICAgIH07XG5cbiAgICAvLyDlhajlsYDmjInpkq7orr7nva5qc+aYr+WQpuWxleekuuaQnOe0ouahhlxuICAgIHZhciBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaF9idG5cIik7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoX2J0bl9wY1wiKSkge1xuICAgICAgdmFyIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveF9wYyA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoX2J0bl9wY1wiKTtcbiAgICAgIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveF9wYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2FsLXNlYXJjaC1pbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWwtc2VhcmNoLWlucHV0JykuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBzZWFyY2hfY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9jbG9zZVwiKTtcbiAgICBzZWFyY2hfY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbn07XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgbmVlZFNoYXJlQnV0dG9uXG4gIC0gVmVyc2lvbiAxLjAuMFxuICAtIENvcHlyaWdodCAyMDE1IER6bWl0cnkgVmFzaWxldXNraVxuXHQtIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVClcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2hhcmUoKTtcbiAgICB9LFxuICAgIHNoYXJlOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIGZpbmQgY2xvc2VzdFxuICAgIGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbSwgcGFyZW50KSB7XG4gICAgICBpZiAodHlwZW9mKHBhcmVudCkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoZXNTZWxlY3RvciA9IGVsZW0ubWF0Y2hlcyB8fCBlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yO1xuICBcbiAgICAgICAgICAgICAgaWYgKCEhbWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNTZWxlY3Rvci5iaW5kKGVsZW0pKHBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICBpZiAoZWxlbSA9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIHNoYXJlIGJ1dHRvbiBjbGFzc1xuICAgICAgd2luZG93Lm5lZWRTaGFyZUJ1dHRvbiA9IGZ1bmN0aW9uKGVsZW0sIG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBjcmVhdGUgZWxlbWVudCByZWZlcmVuY2VcbiAgICAgICAgICB2YXIgcm9vdCA9IHRoaXM7XG4gICAgICAgICAgcm9vdC5lbGVtID0gZWxlbSB8fCAnbmVlZC1zaGFyZS1idXR0b24nO1xuICBcbiAgICAgICAgICAvKiBIZWxwZXJzXG4gICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIFxuICAgICAgLy8gZ2V0IHRpdGxlIGZyb20gaHRtbFxuICAgICAgcm9vdC5nZXRUaXRsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgIC8vIGNoZWNrIHF1ZXJ5U2VsZWN0b3IgZXhpc3RhbmNlIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjp0aXRsZVwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5pbm5lclRleHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQudGl0bGU7XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBnZXQgaW1hZ2UgZnJvbSBodG1sXG4gICAgICAgIHJvb3QuZ2V0SW1hZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmltYWdlXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBnZXQgZGVzY3JpcHRpb24gZnJvbSBodG1sXG4gICAgICAgIHJvb3QuZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKS5uYW1lZEl0ZW0oJ2Rlc2NyaXB0aW9uJykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gc2hhcmUgdXJscyBmb3IgYWxsIG5ldHdvcmtzXG4gICAgICAgIHJvb3Quc2hhcmUgPSB7XG4gICAgICAgICAgICAnd2VpYm8nOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3YudC5zaW5hLmNvbS5jbi9zaGFyZS9zaGFyZS5waHA/dGl0bGU9J1xuICAgICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgICArIFwiJnVybD1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgICArIFwiJnBpYz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3dlY2hhdCc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIGltZ1NyYyA9ICdodHRwczovL2FwaS5xcnNlcnZlci5jb20vdjEvY3JlYXRlLXFyLWNvZGUvP3NpemU9MTUweDE1MCZkYXRhPScrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICB2YXIgZHJvcGRvd25FbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bicpO1xuICAgICAgICAgICAgICB2YXIgaW1nID0gZHJvcGRvd25FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJylbMF07XG4gICAgICAgICAgICAgIHZhciBsb2FkZXIgPSBkcm9wZG93bkVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25lZWQtc2hhcmUtbG9hZGVyJylbMF07XG4gIFxuICAgICAgICAgICAgICAgIGlmIChpbWcpIHtcbiAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgICB9IGVsc2UgaWYobG9hZGVyKSB7XG4gICAgICAgICAgICBsb2FkZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbG9hZGVyLmNsYXNzTmFtZSA9ICduZWVkLXNoYXJlLWxvYWRlcic7XG4gICAgICAgICAgICBsb2FkZXIuaW5uZXJUZXh0ID0gJ2xvYWRpbmcuLi4nO1xuICAgICAgICAgICAgbG9hZGVyLnRpdGxlID0gJ2xvYWRpbmcgcXJjb2RlLi4uJztcbiAgXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gaW1nU3JjO1xuICAgICAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0NyZWF0ZSBxcmNvZGUgZmFpbGVkISc7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwnbmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAobG9hZGVyLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChsb2FkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgJ2RvdWJhbic6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cHM6Ly93d3cuZG91YmFuLmNvbS9zaGFyZS9zZXJ2aWNlP25hbWU9J1xuICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICsgXCImaHJlZj1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgKyBcIiZpbWFnZT1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3Fxem9uZSc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3Nucy5xem9uZS5xcS5jb20vY2dpLWJpbi9xenNoYXJlL2NnaV9xenNoYXJlX29uZWtleT90aXRsZT0nXG4gICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgKyBcIiZ1cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICsgXCImcGljcz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKVxuICAgICAgICAgICAgICArIFwiJmRlc2M9XCIrIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAncmVucmVuJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vd2lkZ2V0LnJlbnJlbi5jb20vZGlhbG9nL3NoYXJlP3RpdGxlPSdcbiAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICArIFwiJnJlc291cmNlVXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICArIFwiJnBpYz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKVxuICAgICAgICAgICAgICArIFwiJmRlc2NyaXB0aW9uPVwiKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gIFxuICAgICAgICAgICAgJ21haWx0bycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICdtYWlsdG86P3N1YmplY3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICsgJyZib2R5PVRob3VnaHQgeW91IG1pZ2h0IGVuam95IHJlYWRpbmcgdGhpczogJyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKSArICcgLSAnICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd0d2l0dGVyJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSc7XG4gICAgICAgICAgICAgICAgdXJsICs9IGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICsgXCImdXJsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BpbnRlcmVzdCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwaW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYm9va21hcmtsZXQvP2lzX3ZpZGVvPWZhbHNlJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZtZWRpYT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZhY2Vib29rJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5mYWNlYm9vay5jb20vc2hhcmUucGhwPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2dvb2dsZXBsdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGx1cy5nb29nbGUuY29tL3NoYXJlPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdyZWRkaXQnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LnJlZGRpdC5jb20vc3VibWl0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZGVsaWNpb3VzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ2RlbC5pY2lvLnVzL3Bvc3Q/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZub3Rlcz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAndGFwaXR1cmUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3RhcGl0dXJlLmNvbS9ib29rbWFya2xldC9pbWFnZT8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2ltZ19zcmM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3RpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgJ3N0dW1ibGV1cG9uJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnbGlua2VkaW4nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmc291cmNlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnNvdXJjZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAnc2xhc2hkb3QnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3NsYXNoZG90Lm9yZy9ib29rbWFyay5wbD8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vICd0ZWNobm9yYXRpJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0ZWNobm9yYXRpLmNvbS9mYXZlcz8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2FkZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdwb3N0ZXJvdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncG9zdGVyb3VzLmNvbS9zaGFyZT8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAnbGlua3RvPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndHVtYmxyJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy50dW1ibHIuY29tL3NoYXJlP3Y9Myc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ2dvb2dsZWJvb2ttYXJrcycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lmdvb2dsZS5jb20vYm9va21hcmtzL21hcms/b3A9ZWRpdCc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmJrbWs9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZhbm5vdGF0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gJ25ld3N2aW5lJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cubmV3c3ZpbmUuY29tL190b29scy9zZWVkJnNhdmU/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICd1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmg9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAncGluZ2ZtJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwaW5nLmZtL3JlZi8/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdsaW5rPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmYm9keT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdldmVybm90ZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZXZlcm5vdGUuY29tL2NsaXAuYWN0aW9uPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZnJpZW5kZmVlZCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZnJpZW5kZmVlZC5jb20vc2hhcmU/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd2a29udGFrdGUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndmtvbnRha3RlLnJ1L3NoYXJlLnBocD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICB1cmwgKz0gJyZpbWFnZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgdXJsICs9ICcmbm9wYXJzZT10cnVlJztcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdvZG5va2xhc3NuaWtpJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5vZG5va2xhc3NuaWtpLnJ1L2RrP3N0LmNtZD1hZGRTaGFyZSZzdC5zPTEnO1xuICAgICAgICAgIHVybCArPSAnJnN0LmNvbW1lbnRzPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICB1cmwgKz0gJyZzdC5fc3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ21haWxydScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnY29ubmVjdC5tYWlsLnJ1L3NoYXJlPyc7XG4gICAgICAgIC8vICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgLy8gICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyAgIHVybCArPSAnJmltYWdldXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBvcGVuIHNoYXJlIGxpbmsgaW4gYSBwb3B1cFxuICAgICAgICByb290LnBvcHVwID0gZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHZhciBsZWZ0LCB0b3A7IFxuICBcbiAgICAgICAgdmFyIHBvcHVwV2lkdGggPSA2MDAsXG4gICAgICAgICAgICBwb3B1cEhlaWdodCA9IDUwMDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBjYWN1bGF0ZSBicm93c2VyIHdpbmRvdyB3aWR0aFxuICAgICAgICAvLyBpZiB3aW5kb3cgd2lkdGggaXMgdG9vIG5hcnJvdywgdXNlIHNjcmVlbiB3aWR0aDtcbiAgICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6IHNjcmVlbi53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogc2NyZWVuLmhlaWdodDtcbiAgICAgICAgaWYgKHdpZHRoIDwgNjAwICYmIGhlaWdodCA8IDUwMCkge1xuICAgICAgICAgIGxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAocG9wdXBXaWR0aCAvIDIpO1xuICAgICAgICAgIHRvcCA9IChzY3JlZW4uaGVpZ2h0IC8gMikgLSAocG9wdXBIZWlnaHQgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzZXQgbGVmdCBhbmQgdG9wIHBvc2l0aW9uXG4gICAgICAgICAgICAgIHZhciBkdWFsU2NyZWVuTGVmdCA9IHdpbmRvdy5zY3JlZW5MZWZ0ICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogc2NyZWVuLmxlZnQsXG4gICAgICAgICAgICBkdWFsU2NyZWVuVG9wID0gd2luZG93LnNjcmVlblRvcCAhPSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogc2NyZWVuLnRvcDtcbiAgICAgICAgICAvLyBjYWxjdWxhdGUgdG9wIGFuZCBsZWZ0IHBvc2l0aW9uXG4gICAgICAgICAgbGVmdCA9ICgod2lkdGggLyAyKSAtIChwb3B1cFdpZHRoIC8gMikpICsgZHVhbFNjcmVlbkxlZnQ7XG4gICAgICAgICAgdG9wID0gKChoZWlnaHQgLyAyKSAtIChwb3B1cEhlaWdodCAvIDIpKSArIGR1YWxTY3JlZW5Ub3A7XG4gICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIHZhciBzaGFyZVdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwndGFyZ2V0V2luZG93JywndG9vbGJhcj1ubyxsb2NhdGlvbj1ubyxzdGF0dXM9bm8sbWVudWJhcj1ubyxzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHdpZHRoPScgKyBwb3B1cFdpZHRoICsgJywgaGVpZ2h0PScgKyBwb3B1cEhlaWdodCArICcsIHRvcD0nICsgdG9wICsgJywgbGVmdD0nICsgbGVmdCk7XG4gICAgICAgICAgICAvLyBQdXRzIGZvY3VzIG9uIHRoZSBuZXdXaW5kb3dcbiAgICAgICAgICBpZiAod2luZG93LmZvY3VzKSB7XG4gICAgICAgICAgICAgIHNoYXJlV2luZG93LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgICAvKiBTZXQgb3B0aW9uc1xuICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBcbiAgICAgICAgICAvLyBjcmVhdGUgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgICAgcm9vdC5vcHRpb25zID0ge1xuICAgICAgICAgICAgICBpY29uU3R5bGU6ICdkZWZhdWx0JywgLy8gZGVmYXVsdCBvciBib3hcbiAgICAgICAgICAgICAgYm94Rm9ybTogJ2hvcml6b250YWwnLCAvLyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tQ2VudGVyJywgLy8gdG9wIC8gbWlkZGxlIC8gYm90dG9tICsgTGVmdCAvIENlbnRlciAvIFJpZ2h0XG4gICAgICAgICAgICAgIHByb3RvY29sOiBbJ2h0dHAnLCAnaHR0cHMnXS5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc6JylbMF0pID09PSAtMSA/ICdodHRwczovLycgOiAnLy8nLFxuICAgICAgICAgICAgICBuZXR3b3JrczogJ1R3aXR0ZXIsRmFjZWJvb2ssUmVkZGl0LExpbmtlZGluLFR1bWJscixQaW50ZXJlc3QsV2VpYm8sV2VjaGF0LERvdWJhbixRUVpvbmUsTWFpbHRvJyxcbiAgICAgICAgICAgICAgaWNvbnM6IFsnZmEgZmEtdHdpdHRlcicsJ2ZhIGZhLWZhY2Vib29rJywnZmEgZmEtcmVkZGl0LWFsaWVuJywnZmEgZmEtbGlua2VkaW4nLCdmYSBmYS10dW1ibHInLCdmYSBmYS1waW50ZXJlc3QnLCdmYSBmYS13ZWlibycsJ2ZhIGZhLXdlaXhpbicsJzknLCdmYSBmYS1xcScsJ2ZhIGZhLWVudmVsb3BlLW8nXVxuICAgICAgICAgIH07XG4gIFxuICAgICAgLy8gaW50ZWdyYXRlIGN1c3RvbSBvcHRpb25zXG4gICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgcm9vdC5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnZlcnQgbmV0d29ya3Mgc3RyaW5nIGludG8gYXJyYXlcbiAgICAgIHJvb3Qub3B0aW9ucy5uZXR3b3JrcyA9IHJvb3Qub3B0aW9ucy5uZXR3b3Jrcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gIFxuICAgICAgZnVuY3Rpb24gZ2V0T3B0aW9ucyhlbCkge1xuICAgICAgICAgIC8vIGludGVncmF0ZSBkYXRhIGF0dHJpYnV0ZSBvcHRpb25zXG4gICAgICAgICAgdmFyIHJldCA9IHt9O1xuICAgICAgICAgIGZvciAodmFyIGkgaW4gcm9vdC5vcHRpb25zKSB7XG4gICAgICAgICAgICByZXRbaV0gPSByb290Lm9wdGlvbnNbaV07XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAvLyB0aGVzZSBhdHRycyBtdXN0IGdldCBkeW5hbWljYWxseS5cbiAgICAgICAgICByZXQudXJsID0gcm9vdC5vcHRpb25zLnVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICByZXQudGl0bGUgPSByb290Lm9wdGlvbnMudGl0bGUgfHwgcm9vdC5nZXRUaXRsZSgpO1xuICAgICAgICAgIHJldC5pbWFnZSA9IHJvb3Qub3B0aW9ucy5pbWFnZSB8fCByb290LmdldEltYWdlKCk7XG4gICAgICAgICAgcmV0LmRlc2NyaXB0aW9uID0gcm9vdC5vcHRpb25zLmRlc2NyaXB0aW9uIHx8IHJvb3QuZ2V0RGVzY3JpcHRpb24oKTtcbiAgXG4gICAgICAgICAgZm9yICh2YXIgb3B0aW9uIGluIGVsLmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgLy8gcmVwbGFjZSBvbmx5ICdzaGFyZS0nIHByZWZpeGVkIGRhdGEtYXR0cmlidXRlc1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5tYXRjaCgvc2hhcmUvKSkge1xuICAgICAgICAgICAgICB2YXIgbmV3X29wdGlvbiA9IG9wdGlvbi5yZXBsYWNlKC9zaGFyZS8sICcnKTtcbiAgICAgICAgICAgICAgaWYgKCFuZXdfb3B0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmV3X29wdGlvbiA9IG5ld19vcHRpb24uY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuZXdfb3B0aW9uLnNsaWNlKDEpO1xuICAgICAgICAgICAgICB2YXIgdmFsID0gZWwuZGF0YXNldFtvcHRpb25dO1xuICAgICAgICAgICAgICBpZiAobmV3X29wdGlvbiA9PT0gJ25ldHdvcmtzJykge1xuICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdfb3B0aW9uID09PSAndXJsJyAmJiB2YWwgJiYgdmFsWzBdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGZpeCByZWxhdGl2ZSB1cmwgcHJvYmxlbS5cbiAgICAgICAgICAgICAgICAgIHZhbCA9IGxvY2F0aW9uLm9yaWdpbiArIHZhbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXRbbmV3X29wdGlvbl0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gIFxuICAgICAgZnVuY3Rpb24gY3JlYXRlRHJvcGRvd24oZWwpIHtcbiAgICAgICAgICAvLyBjcmVhdGUgZHJvcGRvd25cbiAgICAgICAgICB2YXIgZHJvcGRvd25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSA9ICduZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bic7XG4gICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bicpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICBcbiAgICAgICAgICAvLyBzZXQgZHJvcGRvd24gcm93IGxlbmd0aFxuICAgICAgICAgIGlmIChteW9wdGlvbnMuaWNvblN0eWxlID09ICdib3gnICYmIG15b3B0aW9ucy5ib3hGb3JtID09ICdob3Jpem9udGFsJylcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3gtaG9yaXpvbnRhbCc7XG4gICAgICAgICAgZWxzZSBpZiAobXlvcHRpb25zLmljb25TdHlsZSA9PSAnYm94JyAmJiBteW9wdGlvbnMuYm94Rm9ybSA9PSAndmVydGljYWwnKVxuICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJveC12ZXJ0aWNhbCc7XG4gIFxuICAgICAgICAgIC8vIHNldCBkcm9wZG93biBwb3NpdGlvbiBcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKG15b3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgICAgICAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1sZWZ0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtcmlnaHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ3RvcENlbnRlcic6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdtaWRkbGVMZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLW1pZGRsZS1sZWZ0JztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpblRvcCA9IC0gZHJvcGRvd25FbC5vZmZzZXRIZWlnaHQgLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdtaWRkbGVSaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1taWRkbGUtcmlnaHQnO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luVG9wID0gLSBkcm9wZG93bkVsLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWxlZnQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1yaWdodCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tQ2VudGVyJzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1jZW50ZXInO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC0gZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwxKTtcbiAgXG4gIFxuICAgICAgICAgIC8vIGZpbGwgZnJvcGRvd24gd2l0aCBidXR0b25zXG4gICAgICAgICAgdmFyIGljb25DbGFzcyA9IG15b3B0aW9ucy5pY29uU3R5bGUgPT0gJ2RlZmF1bHQnID8gJ25lZWQtc2hhcmUtYnV0dG9uX2xpbmsgbmVlZC1zaGFyZS1idXR0b25fJyA6ICduZWVkLXNoYXJlLWJ1dHRvbl9saW5rLScgKyBteW9wdGlvbnMuaWNvblN0eWxlICsgJyBuZWVkLXNoYXJlLWJ1dHRvbl9saW5rIG5lZWQtc2hhcmUtYnV0dG9uXyc7XG4gICAgICAgICAgbGV0IGZsYWcgPSAwO1xuICAgICAgICAgIGZvciAodmFyIG5ldHdvcmsgaW4gbXlvcHRpb25zLm5ldHdvcmtzKSB7XG4gICAgICAgICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgbmV0d29yayA9IG15b3B0aW9ucy5uZXR3b3Jrc1tuZXR3b3JrXTtcbiAgICAgICAgICAgICAgbGluay5jbGFzc05hbWUgPSBpY29uQ2xhc3MgKyBuZXR3b3JrO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteW9wdGlvbnMuaWNvbnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgbGluay5jbGFzc05hbWUgKz0gJyAnK215b3B0aW9ucy5pY29uc1tmbGFnXTtcbiAgICAgICAgICAgICAgbGluay5kYXRhc2V0Lm5ldHdvcmsgPSBuZXR3b3JrO1xuICAgICAgICAgICAgICBsaW5rLnRpdGxlID0gbmV0d29yaztcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgICAgICAgZmxhZysrO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgZHJvcGRvd25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgIGlmIChjbG9zZXN0KGV2ZW50LnRhcmdldCwgJy5uZWVkLXNoYXJlLWJ1dHRvbl9saW5rJykpIHtcbiAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIFxuICAgICAgICAgICAgICAgICByb290LnNoYXJlW2V2ZW50LnRhcmdldC5kYXRhc2V0Lm5ldHdvcmtdKGVsKTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZHJvcGRvd25FbCk7XG4gICAgICB9XG4gIFxuICAgICAgdmFyIHRhcmdldEVsID0gdHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKSA6IGVsZW07XG4gICAgICAgaWYgKHRhcmdldEVsICYmIHRhcmdldEVsLmNsYXNzTGlzdC5jb250YWlucygnbmVlZC1zaGFyZS1wYW5lbCcpKSB7XG4gICAgICAgIGNyZWF0ZURyb3Bkb3duKHRhcmdldEVsKTtcbiAgICAgICAgLy8gdGFyZ2V0RWwuY2xhc3NMaXN0LmFkZCgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gICAgICB9IGVsc2UgXG4gICAgICAgIC8vIGNsb3NlIG9uIGNsaWNrIG91dHNpZGVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHZhciBvcGVuZWRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgXG4gICAgICAgICAgaWYgKCFjbG9zZXN0KGV2ZW50LnRhcmdldCwgJy5uZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKSkge1xuICAgICAgICAgICAgaWYgKG9wZW5lZEVsKSB7XG4gICAgICAgICAgICAgICAgb3BlbmVkRWwuY2xhc3NMaXN0LnJlbW92ZSgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gIFxuICAgICAgICAgICAgICAgIC8vIGhpZGUgd2VjaGF0IGNvZGUgaW1hZ2Ugd2hlbiBjbG9zZSB0aGUgZHJvcGRvd24uXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5lZEVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkRWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCByb290LmVsZW0pO1xuICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURyb3Bkb3duKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XG4gIFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICBcbiAgICB9O1xuICBcbiAgICBuZXcgbmVlZFNoYXJlQnV0dG9uKCcubmVlZC1zaGFyZS1idXR0b24nKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50b2NfYnRuKCk7XG4gICAgfSxcbiAgICB0b2NfYnRuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHRvY19jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9jX2NvbnRhaW5lcicpO1xuICAgICAgICBsZXQgdG9jX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2NfYnRuJyk7XG4gICAgICAgICQodG9jX2J0bikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICh0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJyl7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5cblxuXG4iLCIvKlxuICogQEF1dGhvcjogd3p0bGluazEwMTNcbiAqIEBEYXRlOiAyMDIyLTA3LTA3IDE4OjQ4OjE4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTA3LTEwIDAwOjI2OjExXG4gKiBARGVzY3JpcHRpb246XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMud2ViX2luZm9fcnVudGltZSgpXG4gIH0sXG4gIC8vIFRPRE86ICEhIeaIkeedgOWunuS4jeefpemBk+i/meaYr+S4quS7gOS5iOenmFxuICB3ZWJfaW5mb19ydW50aW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMScpKSB7XG4gICAgLy8gICBsZXQgQmlydGhEYXkgPSBuZXcgRGF0ZShuZXcgRGF0ZSgnMjAyMC8wMS8wNCcpKVxuICAgIC8vICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIC8vICAgbGV0IHRpbWVvbGQgPSB0b2RheS5nZXRUaW1lKCkgLSBCaXJ0aERheS5nZXRUaW1lKClcbiAgICAvLyAgIGxldCBkYXlzb2xkID0gTWF0aC5mbG9vcih0aW1lb2xkIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKVxuICAgIC8vICAgbGV0IG9iaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMScpXG4gICAgLy8gICBvYmouaW5uZXJIVE1MID0gZGF5c29sZCArICcg5aSpJ1xuICAgIC8vICAgY29uc29sZS5sb2cob2JqKVxuICAgIC8vIH1cbiAgfSxcbn1cbiJdfQ==
