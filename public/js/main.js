(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*  
    TODO: 
        能在根目录设置默认状态是几栏的
        能够让使用者取消这种“记忆”
**/
// PC：header上的左右按钮区域
var arrow_left = $('#arrow_left');
var arrow_right = $('#arrow_right'); // 布局：版心、左中右排版

var ct_left = $('.ct_left');
var ct_right = $('.ct_right');
var ct_center = $('.ct_center');
var container = $('.container'); // PC/app：切换header

var header = $('.header');
var header_app = $('.header_app'); // app：header上的左右按钮区域

var btn_app_sider = $('#btn_app_sider');
var btn_app_right = $('#btn_app_right'); // app：点击header_app时候弹出来的抽屉

var app_side_glass = $('#app_side_glass');
var app_side_content = $('#app_side_content'); // 1.左中配置

var one_container = '80%';
var one_ct_center_width = '75%';
var one_ct_left_width = '25%'; // 2. 中右配置

var two_container = '80%';
var two_ct_center_width = '75%';
var two_ct_right_width = '25%'; // 3. 左中右配置

var three_container = '95%';
var three_ct_center_width = '60%';
var three_ct_right_width = '20%';
var three_ct_left_width = '20%'; // 4. 中配置

var four_container = '75%';
var four_ct_center_width = '100%'; // 设备小于560px的中配置

var device_small_container = "98%";
var device_small_center = "100%"; // 设备小于780px的中配置

var device_center_container = "96%";
var device_center_center = "100%"; // 判断pc段左右上角的箭头该显示哪个

function left_right_arrow() {
  if (ct_left.css("display") === 'none') {
    $("#arrow_left i:first-child").css({
      "display": "inline-block"
    });
    $("#arrow_left i:last-child").css({
      "display": "none"
    });
  } else {
    $("#arrow_left i:first-child").css({
      "display": "none"
    });
    $("#arrow_left i:last-child").css({
      "display": "inline-block"
    });
  }

  if (ct_right.css("display") === 'none') {
    $("#arrow_right i:first-child").css({
      "display": "inline-block"
    });
    $("#arrow_right i:last-child").css({
      "display": "none"
    });
  } else {
    $("#arrow_right i:first-child").css({
      "display": "none"
    });
    $("#arrow_right i:last-child").css({
      "display": "inline-block"
    });
  }
}

function left_center_right() {
  container.css({
    "width": three_container
  });
  ct_center.css({
    "width": three_ct_center_width
  });
  ct_left.css({
    "width": three_ct_left_width,
    "display": "block"
  });
  ct_right.css({
    "width": three_ct_right_width,
    "display": "block"
  });
  left_right_arrow();

  if (localStorage.hasOwnProperty('layout')) {
    window.localStorage.removeItem('layout');
    window.localStorage.setItem('layout', 'LR');
    console.log("布局：左中右");
    console.log(localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem('layout', 'LR');
  }
}

function left_center() {
  container.css({
    "width": one_container
  });
  ct_center.css({
    "width": one_ct_center_width
  });
  ct_left.css({
    "width": one_ct_left_width
  });
  ct_left.css("display", "block");
  ct_right.css("display", "none");
  left_right_arrow();

  if (localStorage.hasOwnProperty('layout')) {
    window.localStorage.removeItem('layout');
    window.localStorage.setItem("layout", "L");
    console.log("布局：左中");
    console.log(localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "L");
  }
}

function center_right() {
  container.css({
    "width": two_container
  });
  ct_right.css({
    "width": two_ct_right_width
  });
  ct_center.css({
    "width": two_ct_center_width
  });
  ct_left.css("display", "none");
  ct_right.css("display", "block");
  left_right_arrow();

  if (localStorage.hasOwnProperty('layout')) {
    window.localStorage.removeItem('layout');
    window.localStorage.setItem('layout', 'R');
    console.log("布局：中右");
    console.log(localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem('layout', 'R');
  }
}

function center() {
  container.css({
    "width": four_container
  });
  ct_center.css({
    "width": four_ct_center_width
  });
  ct_left.css("display", "none");
  ct_right.css("display", "none");
  left_right_arrow();

  if (localStorage.hasOwnProperty('layout')) {
    window.localStorage.removeItem('layout');
    localStorage.setItem('layout', 'C');
    console.log("布局：中");
    console.log(localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem('layout', 'C');
  }
}

function device_small() {
  // 最小尺寸：最大560px
  console.log("小于560px尺寸");
  header.css({
    "display": "none"
  });
  header_app.css({
    "display": "block"
  }); // 设置布局

  container.css({
    "width": device_small_container
  });
  ct_center.css({
    "width": device_small_center
  });
  ct_left.css("display", "none");
  ct_right.css("display", "none");
}

function device_center() {
  // 中等尺寸：最大980px
  console.log("小于980px尺寸");
  header.css({
    "display": "none"
  });
  header_app.css({
    "display": "block"
  }); // 设置布局

  container.css({
    "width": device_center_container
  });
  ct_center.css({
    "width": device_center_center
  });
  ct_left.css("display", "none");
  ct_right.css("display", "none");
}

function device_largest() {
  // 最大尺寸：最大1261px
  console.log("小于1261px尺寸");

  if (ct_left.css("display") === 'none') {
    $("#arrow_left i:first-child").css({
      "display": "inline-block"
    });
    $("#arrow_left i:last-child").css({
      "display": "none"
    });
  } else {
    $("#arrow_left i:first-child").css({
      "display": "none"
    });
    $("#arrow_left i:last-child").css({
      "display": "inline-block"
    });
  }

  if (ct_right.css("display") === 'none') {
    $("#arrow_right i:first-child").css({
      "display": "inline-block"
    });
    $("#arrow_right i:last-child").css({
      "display": "none"
    });
  } else {
    $("#arrow_right i:first-child").css({
      "display": "none"
    });
    $("#arrow_right i:last-child").css({
      "display": "inline-block"
    });
  }

  header.css({
    "display": "block"
  });
  header_app.css({
    "display": "none"
  });
  container.css({
    "width": three_container
  });
  ct_center.css({
    "width": three_ct_center_width
  });
  ct_left.css({
    "width": three_ct_left_width,
    "display": "block"
  });
  ct_right.css({
    "width": three_ct_right_width,
    "display": "block"
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
      if (ct_left.css("display") === 'none') {
        // 转换切换之后的箭头按钮
        $("#arrow_left i:first-child").css({
          "display": "none"
        });
        $("#arrow_left i:last-child").css({
          "display": "inline-block"
        });
        ct_left.css("display", 'block');

        if (ct_right.css("display") === 'none') {
          //左中配置
          left_center();
        } else {
          //左中右配置
          left_center_right();
        }
      } else {
        $("#arrow_left i:first-child").css({
          "display": "inline-block"
        });
        $("#arrow_left i:last-child").css({
          "display": "none"
        });
        ct_left.css("display", 'none');

        if (ct_right.css("display") === 'none') {
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
          "display": "none"
        });
        $("#arrow_right i:last-child").css({
          "display": "inline-block"
        });
        ct_right.css("display", 'block');

        if (ct_left.css("display") === 'none') {
          //中右配置
          center_right();
        } else {
          //左中右配置
          left_center_right();
        }
      } else {
        $("#arrow_right i:first-child").css({
          "display": "inline-block"
        });
        $("#arrow_right i:last-child").css({
          "display": "none"
        });
        ct_right.css("display", 'none');

        if (ct_left.css("display") === 'none') {
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
        "display": "block"
      });
      app_side_content.css({
        "display": "block"
      });
    }); // 点击毛玻璃片

    app_side_glass.click(function () {
      app_side_glass.css({
        "display": "none"
      });
      app_side_content.css({
        "display": "none"
      });
    }); // 点击右按钮

    btn_app_right.click(function () {
      alert("本网站还在开发中，诸多功能还未完善，敬请期待~");
      console.log("本网站还在开发中，诸多功能还未完善，敬请期待~");
    });
  },

  /* 浏览器记住布局 */
  browser_remember: function browser_remember() {
    var b_left = ct_left.css("display");
    var b_right = ct_right.css("display");
    var b_layout;

    if (localStorage.hasOwnProperty('layout')) {
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
    var device_width = [window.matchMedia('(max-width: 560px)'), window.matchMedia('(max-width: 980px)'), window.matchMedia('(max-width: 1261px)')]; // 定义回调函数

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

var _highlightMin = _interopRequireDefault(require("./plugins/highlight/highlight.min.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Author: wztlink1013
 * @Date: 2022-07-07 18:48:18
 * @LastEditTime: 2022-08-06 14:51:29
 * @Description:
 */
// import _run_Waline from './plugins/waline/waline.js'
// 代码高亮
_highlightMin["default"].highlightAll(); // _run_Waline()
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
    var article_img = document.querySelectorAll('.artcle_list_item_img');

    for (var i = 0; i < article_img.length; i++) {
      var wid = article_img[i].firstElementChild.width + 5;
      var hei = article_img[i].firstElementChild.height + 7;
      article_img[i].style.maxWidth = wid + 'px';
      article_img[i].style.maxHeight = hei + 'px';
    }
  }, 1000);
});

},{"./common/layout.js":1,"./part/categories.js":3,"./part/comments.js":4,"./part/go_top.js":5,"./part/search.js":6,"./part/sharebutton.js":7,"./part/toc.js":8,"./part/web_info.js":9,"./plugins/highlight/highlight.min.js":10}],3:[function(require,module,exports){
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
        inputArea.disabled = true;
        inputArea.placeholder = '首次搜索ing···';
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
        inputArea.value = '';
        $resultContent.innerHTML = '';
        inputArea.placeholder = '请输入关键词';
        inputArea.focus();
      };
    }

    var searchFunc = function searchFunc(path, search_id, content_id) {
      'use strict';

      var BTN = "<div id='local-search-close'>清空搜索</div>";
      var $input = document.getElementById(search_id);
      var $resultContent = document.getElementById(content_id);
      var xhr = new XMLHttpRequest();
      xhr.open("GET", path, true);
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // resume input
          $input.disabled = false;
          $input.placeholder = '输入关键词以搜索';
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

          $input.addEventListener('input', function () {
            var str = '<ul class=\"archive\">';
            var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
            $resultContent.innerHTML = "";

            if (this.value.trim().length <= 0) {
              return;
            } // 本地搜索主代码


            datas.forEach(function (data) {
              var isMatch = true;
              var content_index = [];

              if (!data.title || data.title.trim() === '') {
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

              if (data_content !== '') {
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
                // TODO: 待完善，待完善
                str += "<li><a href='" + location.protocol + "//" + location.host + "/" + data_url + "' class='archive-title'>" + orig_data_title + "</a>";
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


                  var match_content = content.substr(start, 100); // highlight all keywords

                  keywords.forEach(function (keyword) {
                    var regS = new RegExp(keyword, "gi");
                    match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
                  });
                  str += "<p class=\"search-result\">" + match_content + "...</p>";
                }

                str += "</li>";
              }
            });
            str += "</ul>";

            if (str.indexOf('<li>') === -1) {
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
      searchFunc(path, 'local-search-input', 'local-search-result');
    }; // 全局按钮设置js是否展示搜索框


    var global_button_search_box = document.querySelector('#search_btn');
    global_button_search_box.addEventListener('click', function () {
      if (document.querySelector('.search_box').style.display === 'block') {
        document.querySelector('.search_box').style.display = 'none';
      } else {
        document.querySelector('.search_box').style.display = 'block';
        document.querySelector('#local-search-input').focus();
      }
    });
    var search_close = document.querySelector('.search_close');
    search_close.addEventListener('click', function () {
      if (document.querySelector('.search_box').style.display === 'block') {
        document.querySelector('.search_box').style.display = 'none';
      } else {
        document.querySelector('.search_box').style.display = 'block';
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

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e8) { throw _e8; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e9) { didErr = true; err = _e9; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
  Highlight.js 10.7.1 (421b23b0)
  License: BSD-3-Clause
  Copyright (c) 2006-2021, Ivan Sagalaev
*/
var hljs = function () {
  'use strict';

  function e(t) {
    return t instanceof Map ? t.clear = t["delete"] = t.set = function () {
      throw Error('map is read-only');
    } : t instanceof Set && (t.add = t.clear = t["delete"] = function () {
      throw Error('set is read-only');
    }), Object.freeze(t), Object.getOwnPropertyNames(t).forEach(function (n) {
      var i = t[n];
      'object' != _typeof(i) || Object.isFrozen(i) || e(i);
    }), t;
  }

  var t = e,
      n = e;
  t["default"] = n;

  var i = /*#__PURE__*/function () {
    function i(e) {
      _classCallCheck(this, i);

      void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
    }

    _createClass(i, [{
      key: "ignoreMatch",
      value: function ignoreMatch() {
        this.isMatchIgnored = !0;
      }
    }]);

    return i;
  }();

  function s(e) {
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
  }

  function a(e) {
    var n = Object.create(null);

    for (var _t in e) {
      n[_t] = e[_t];
    }

    for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      t[_key - 1] = arguments[_key];
    }

    return t.forEach(function (e) {
      for (var _t2 in e) {
        n[_t2] = e[_t2];
      }
    }), n;
  }

  var r = function r(e) {
    return !!e.kind;
  };

  var l = /*#__PURE__*/function () {
    function l(e, t) {
      _classCallCheck(this, l);

      ;
      this.buffer = '', this.classPrefix = t.classPrefix, e.walk(this);
    }

    _createClass(l, [{
      key: "addText",
      value: function addText(e) {
        this.buffer += s(e);
      }
    }, {
      key: "openNode",
      value: function openNode(e) {
        if (!r(e)) return;
        var t = e.kind;
        e.sublanguage || (t = "".concat(this.classPrefix).concat(t)), this.span(t);
      }
    }, {
      key: "closeNode",
      value: function closeNode(e) {
        r(e) && (this.buffer += '</span>');
      }
    }, {
      key: "value",
      value: function value() {
        return this.buffer;
      }
    }, {
      key: "span",
      value: function span(e) {
        this.buffer += "<span class=\"".concat(e, "\">");
      }
    }]);

    return l;
  }();

  var o = /*#__PURE__*/function () {
    function o() {
      _classCallCheck(this, o);

      ;
      this.rootNode = {
        children: []
      }, this.stack = [this.rootNode];
    }

    _createClass(o, [{
      key: "top",
      get: function get() {
        return this.stack[this.stack.length - 1];
      }
    }, {
      key: "root",
      get: function get() {
        return this.rootNode;
      }
    }, {
      key: "add",
      value: function add(e) {
        this.top.children.push(e);
      }
    }, {
      key: "openNode",
      value: function openNode(e) {
        var t = {
          kind: e,
          children: []
        };
        this.add(t), this.stack.push(t);
      }
    }, {
      key: "closeNode",
      value: function closeNode() {
        if (this.stack.length > 1) return this.stack.pop();
      }
    }, {
      key: "closeAllNodes",
      value: function closeAllNodes() {
        for (; this.closeNode();) {
          ;
        }
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
      }
    }, {
      key: "walk",
      value: function walk(e) {
        return this.constructor._walk(e, this.rootNode);
      }
    }], [{
      key: "_walk",
      value: function _walk(e, t) {
        var _this = this;

        return 'string' == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach(function (t) {
          return _this._walk(e, t);
        }), e.closeNode(t)), e;
      }
    }, {
      key: "_collapse",
      value: function _collapse(e) {
        'string' != typeof e && e.children && (e.children.every(function (e) {
          return 'string' == typeof e;
        }) ? e.children = [e.children.join('')] : e.children.forEach(function (e) {
          o._collapse(e);
        }));
      }
    }]);

    return o;
  }();

  var c = /*#__PURE__*/function (_o) {
    _inherits(c, _o);

    var _super = _createSuper(c);

    function c(e) {
      var _this2;

      _classCallCheck(this, c);

      _this2 = _super.call(this), _this2.options = e;
      return _this2;
    }

    _createClass(c, [{
      key: "addKeyword",
      value: function addKeyword(e, t) {
        '' !== e && (this.openNode(t), this.addText(e), this.closeNode());
      }
    }, {
      key: "addText",
      value: function addText(e) {
        '' !== e && this.add(e);
      }
    }, {
      key: "addSublanguage",
      value: function addSublanguage(e, t) {
        var n = e.root;
        n.kind = t, n.sublanguage = !0, this.add(n);
      }
    }, {
      key: "toHTML",
      value: function toHTML() {
        return new l(this, this.options).value();
      }
    }, {
      key: "finalize",
      value: function finalize() {
        return !0;
      }
    }]);

    return c;
  }(o);

  function g(e) {
    return e ? 'string' == typeof e ? e : e.source : null;
  }

  var u = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
      h = '[a-zA-Z]\\w*',
      d = '[a-zA-Z_]\\w*',
      f = '\\b\\d+(\\.\\d+)?',
      p = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
      m = '\\b(0b[01]+)',
      b = {
    begin: '\\\\[\\s\\S]',
    relevance: 0
  },
      E = {
    className: 'string',
    begin: "'",
    end: "'",
    illegal: '\\n',
    contains: [b]
  },
      x = {
    className: 'string',
    begin: '"',
    end: '"',
    illegal: '\\n',
    contains: [b]
  },
      v = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  },
      w = function w(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var i = a({
      className: 'comment',
      begin: e,
      end: t,
      contains: []
    }, n);
    return i.contains.push(v), i.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):',
      relevance: 0
    }), i;
  },
      y = w('//', '$'),
      N = w('/\\*', '\\*/'),
      R = w('#', '$');

  var _ = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: /\b\B/,
    IDENT_RE: h,
    UNDERSCORE_IDENT_RE: d,
    NUMBER_RE: f,
    C_NUMBER_RE: p,
    BINARY_NUMBER_RE: m,
    RE_STARTERS_RE: '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
    SHEBANG: function SHEBANG() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = /^#![ ]*\//;
      return e.binary && (e.begin = function () {
        for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          e[_key2] = arguments[_key2];
        }

        return e.map(function (e) {
          return g(e);
        }).join('');
      }(t, /.*\b/, e.binary, /\b.*/)), a({
        className: 'meta',
        begin: t,
        end: /$/,
        relevance: 0,
        'on:begin': function onBegin(e, t) {
          0 !== e.index && t.ignoreMatch();
        }
      }, e);
    },
    BACKSLASH_ESCAPE: b,
    APOS_STRING_MODE: E,
    QUOTE_STRING_MODE: x,
    PHRASAL_WORDS_MODE: v,
    COMMENT: w,
    C_LINE_COMMENT_MODE: y,
    C_BLOCK_COMMENT_MODE: N,
    HASH_COMMENT_MODE: R,
    NUMBER_MODE: {
      className: 'number',
      begin: f,
      relevance: 0
    },
    C_NUMBER_MODE: {
      className: 'number',
      begin: p,
      relevance: 0
    },
    BINARY_NUMBER_MODE: {
      className: 'number',
      begin: m,
      relevance: 0
    },
    CSS_NUMBER_MODE: {
      className: 'number',
      begin: f + '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
      relevance: 0
    },
    REGEXP_MODE: {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [{
        className: 'regexp',
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [b, {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [b]
        }]
      }]
    },
    TITLE_MODE: {
      className: 'title',
      begin: h,
      relevance: 0
    },
    UNDERSCORE_TITLE_MODE: {
      className: 'title',
      begin: d,
      relevance: 0
    },
    METHOD_GUARD: {
      begin: '\\.\\s*[a-zA-Z_]\\w*',
      relevance: 0
    },
    END_SAME_AS_BEGIN: function END_SAME_AS_BEGIN(e) {
      return Object.assign(e, {
        'on:begin': function onBegin(e, t) {
          t.data._beginMatch = e[1];
        },
        'on:end': function onEnd(e, t) {
          t.data._beginMatch !== e[1] && t.ignoreMatch();
        }
      });
    }
  });

  function k(e, t) {
    '.' === e.input[e.index - 1] && t.ignoreMatch();
  }

  function M(e, t) {
    t && e.beginKeywords && (e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)', e.__beforeBegin = k, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0));
  }

  function O(e, t) {
    Array.isArray(e.illegal) && (e.illegal = function () {
      for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        e[_key3] = arguments[_key3];
      }

      return '(' + e.map(function (e) {
        return g(e);
      }).join('|') + ')';
    }.apply(void 0, _toConsumableArray(e.illegal)));
  }

  function A(e, t) {
    if (e.match) {
      if (e.begin || e.end) throw Error('begin & end are not supported with match');
      e.begin = e.match, delete e.match;
    }
  }

  function L(e, t) {
    void 0 === e.relevance && (e.relevance = 1);
  }

  var I = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value'];

  function j(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'keyword';
    var i = {};
    return 'string' == typeof e ? s(n, e.split(' ')) : Array.isArray(e) ? s(n, e) : Object.keys(e).forEach(function (n) {
      Object.assign(i, j(e[n], t, n));
    }), i;

    function s(e, n) {
      t && (n = n.map(function (e) {
        return e.toLowerCase();
      })), n.forEach(function (t) {
        var n = t.split('|');
        i[n[0]] = [e, B(n[0], n[1])];
      });
    }
  }

  function B(e, t) {
    return t ? Number(t) : function (e) {
      return I.includes(e.toLowerCase());
    }(e) ? 0 : 1;
  }

  function T(e, _ref) {
    var t = _ref.plugins;

    function n(t, n) {
      return RegExp(g(t), 'm' + (e.case_insensitive ? 'i' : '') + (n ? 'g' : ''));
    }

    var i = /*#__PURE__*/function () {
      function i() {
        _classCallCheck(this, i);

        ;
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }

      _createClass(i, [{
        key: "addRule",
        value: function addRule(e, t) {
          ;
          t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += function (e) {
            return RegExp(e.toString() + '|').exec('').length - 1;
          }(e) + 1;
        }
      }, {
        key: "compile",
        value: function compile() {
          0 === this.regexes.length && (this.exec = function () {
            return null;
          });
          var e = this.regexes.map(function (e) {
            return e[1];
          });
          this.matcherRe = n(function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '|';
            var n = 0;
            return e.map(function (e) {
              n += 1;
              var t = n;

              var _i = g(e),
                  s = '';

              for (; _i.length > 0;) {
                var _e = u.exec(_i);

                if (!_e) {
                  s += _i;
                  break;
                }

                ;
                s += _i.substring(0, _e.index), _i = _i.substring(_e.index + _e[0].length), '\\' === _e[0][0] && _e[1] ? s += '\\' + (Number(_e[1]) + t) : (s += _e[0], '(' === _e[0] && n++);
              }

              return s;
            }).map(function (e) {
              return "(".concat(e, ")");
            }).join(t);
          }(e), !0), this.lastIndex = 0;
        }
      }, {
        key: "exec",
        value: function exec(e) {
          this.matcherRe.lastIndex = this.lastIndex;
          var t = this.matcherRe.exec(e);
          if (!t) return null;
          var n = t.findIndex(function (e, t) {
            return t > 0 && void 0 !== e;
          }),
              _i2 = this.matchIndexes[n];
          return t.splice(0, n), Object.assign(t, _i2);
        }
      }]);

      return i;
    }();

    var s = /*#__PURE__*/function () {
      function s() {
        _classCallCheck(this, s);

        ;
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }

      _createClass(s, [{
        key: "getMatcher",
        value: function getMatcher(e) {
          if (this.multiRegexes[e]) return this.multiRegexes[e];
          var t = new i();
          return this.rules.slice(e).forEach(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                e = _ref3[0],
                n = _ref3[1];

            return t.addRule(e, n);
          }), t.compile(), this.multiRegexes[e] = t, t;
        }
      }, {
        key: "resumingScanAtSamePosition",
        value: function resumingScanAtSamePosition() {
          return 0 !== this.regexIndex;
        }
      }, {
        key: "considerAll",
        value: function considerAll() {
          this.regexIndex = 0;
        }
      }, {
        key: "addRule",
        value: function addRule(e, t) {
          this.rules.push([e, t]), 'begin' === t.type && this.count++;
        }
      }, {
        key: "exec",
        value: function exec(e) {
          var t = this.getMatcher(this.regexIndex);
          t.lastIndex = this.lastIndex;
          var n = t.exec(e);
          if (this.resumingScanAtSamePosition()) if (n && n.index === this.lastIndex) ;else {
            var _t3 = this.getMatcher(0);

            _t3.lastIndex = this.lastIndex + 1, n = _t3.exec(e);
          }
          return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n;
        }
      }]);

      return s;
    }();

    if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes('self')) throw Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.');
    return e.classNameAliases = a(e.classNameAliases || {}), function t(i, r) {
      var _ref4;

      var l = i;
      if (i.isCompiled) return l;
      [A].forEach(function (e) {
        return e(i, r);
      }), e.compilerExtensions.forEach(function (e) {
        return e(i, r);
      }), i.__beforeBegin = null, [M, O, L].forEach(function (e) {
        return e(i, r);
      }), i.isCompiled = !0;
      var o = null;
      if ('object' == _typeof(i.keywords) && (o = i.keywords.$pattern, delete i.keywords.$pattern), i.keywords && (i.keywords = j(i.keywords, e.case_insensitive)), i.lexemes && o) throw Error('ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ');
      return o = o || i.lexemes || /\w+/, l.keywordPatternRe = n(o, !0), r && (i.begin || (i.begin = /\B|\b/), l.beginRe = n(i.begin), i.endSameAsBegin && (i.end = i.begin), i.end || i.endsWithParent || (i.end = /\B|\b/), i.end && (l.endRe = n(i.end)), l.terminatorEnd = g(i.end) || '', i.endsWithParent && r.terminatorEnd && (l.terminatorEnd += (i.end ? '|' : '') + r.terminatorEnd)), i.illegal && (l.illegalRe = n(i.illegal)), i.contains || (i.contains = []), i.contains = (_ref4 = []).concat.apply(_ref4, _toConsumableArray(i.contains.map(function (e) {
        return function (e) {
          return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function (t) {
            return a(e, {
              variants: null
            }, t);
          })), e.cachedVariants ? e.cachedVariants : S(e) ? a(e, {
            starts: e.starts ? a(e.starts) : null
          }) : Object.isFrozen(e) ? a(e) : e;
        }('self' === e ? i : e);
      }))), i.contains.forEach(function (e) {
        t(e, l);
      }), i.starts && t(i.starts, r), l.matcher = function (e) {
        var t = new s();
        return e.contains.forEach(function (e) {
          return t.addRule(e.begin, {
            rule: e,
            type: 'begin'
          });
        }), e.terminatorEnd && t.addRule(e.terminatorEnd, {
          type: 'end'
        }), e.illegal && t.addRule(e.illegal, {
          type: 'illegal'
        }), t;
      }(l), l;
    }(e);
  }

  function S(e) {
    return !!e && (e.endsWithParent || S(e.starts));
  }

  function P(e) {
    var t = {
      props: ['language', 'code', 'autodetect'],
      data: function data() {
        return {
          detectedLanguage: '',
          unknownLanguage: !1
        };
      },
      computed: {
        className: function className() {
          return this.unknownLanguage ? '' : 'hljs ' + this.detectedLanguage;
        },
        highlighted: function highlighted() {
          if (!this.autoDetect && !e.getLanguage(this.language)) return console.warn("The language \"".concat(this.language, "\" you specified could not be found.")), this.unknownLanguage = !0, s(this.code);
          var t = {};
          return this.autoDetect ? (t = e.highlightAuto(this.code), this.detectedLanguage = t.language) : (t = e.highlight(this.language, this.code, this.ignoreIllegals), this.detectedLanguage = this.language), t.value;
        },
        autoDetect: function autoDetect() {
          return !(this.language && (e = this.autodetect, !e && '' !== e));
          var e;
        },
        ignoreIllegals: function ignoreIllegals() {
          return !0;
        }
      },
      render: function render(e) {
        return e('pre', {}, [e('code', {
          "class": this.className,
          domProps: {
            innerHTML: this.highlighted
          }
        })]);
      }
    };
    return {
      Component: t,
      VuePlugin: {
        install: function install(e) {
          e.component('highlightjs', t);
        }
      }
    };
  }

  var D = {
    'after:highlightElement': function afterHighlightElement(_ref5) {
      var e = _ref5.el,
          t = _ref5.result,
          n = _ref5.text;
      var i = H(e);
      if (!i.length) return;
      var a = document.createElement('div');
      a.innerHTML = t.value, t.value = function (e, t, n) {
        var i = 0,
            a = '';
        var r = [];

        function l() {
          return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : 'start' === t[0].event ? e : t : e.length ? e : t;
        }

        function o(e) {
          a += '<' + C(e) + [].map.call(e.attributes, function (e) {
            return ' ' + e.nodeName + '="' + s(e.value) + '"';
          }).join('') + '>';
        }

        function c(e) {
          a += '</' + C(e) + '>';
        }

        function g(e) {
          ;
          ('start' === e.event ? o : c)(e.node);
        }

        for (; e.length || t.length;) {
          var _t4 = l();

          if (a += s(n.substring(i, _t4[0].offset)), i = _t4[0].offset, _t4 === e) {
            r.reverse().forEach(c);

            do {
              g(_t4.splice(0, 1)[0]), _t4 = l();
            } while (_t4 === e && _t4.length && _t4[0].offset === i);

            r.reverse().forEach(o);
          } else 'start' === _t4[0].event ? r.push(_t4[0].node) : r.pop(), g(_t4.splice(0, 1)[0]);
        }

        return a + s(n.substr(i));
      }(i, H(a), n);
    }
  };

  function C(e) {
    return e.nodeName.toLowerCase();
  }

  function H(e) {
    var t = [];
    return function e(n, i) {
      for (var _s2 = n.firstChild; _s2; _s2 = _s2.nextSibling) {
        3 === _s2.nodeType ? i += _s2.nodeValue.length : 1 === _s2.nodeType && (t.push({
          event: 'start',
          offset: i,
          node: _s2
        }), i = e(_s2, i), C(_s2).match(/br|hr|img|input/) || t.push({
          event: 'stop',
          offset: i,
          node: _s2
        }));
      }

      return i;
    }(e, 0), t;
  }

  var $ = function $(e) {
    console.error(e);
  },
      U = function U(e) {
    var _console;

    for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      t[_key4 - 1] = arguments[_key4];
    }

    (_console = console).log.apply(_console, ['WARN: ' + e].concat(t));
  },
      z = function z(e, t) {
    console.log("Deprecated as of ".concat(e, ". ").concat(t));
  },
      K = s,
      G = a,
      V = Symbol('nomatch');

  return function (e) {
    var n = Object.create(null),
        s = Object.create(null),
        a = [];
    var r = !0;
    var l = /(^(<[^>]+>|\t|)+|\n)/gm,
        o = "Could not find the language '{}', did you forget to load/include a language module?",
        g = {
      disableAutodetect: !0,
      name: 'Plain text',
      contains: []
    };
    var u = {
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: 'hljs-',
      tabReplace: null,
      useBR: !1,
      languages: null,
      __emitter: c
    };

    function h(e) {
      return u.noHighlightRe.test(e);
    }

    function d(e, t, n, i) {
      var s = '',
          a = '';
      'object' == _typeof(t) ? (s = e, n = t.ignoreIllegals, a = t.language, i = void 0) : (z('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'), z('10.7.0', 'Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277'), a = e, s = t);
      var r = {
        code: s,
        language: a
      };
      M('before:highlight', r);
      var l = r.result ? r.result : f(r.language, r.code, n, i);
      return l.code = r.code, M('after:highlight', l), l;
    }

    function f(e, t, s, l) {
      function c(e, t) {
        var n = v.case_insensitive ? t[0].toLowerCase() : t[0];
        return Object.prototype.hasOwnProperty.call(e.keywords, n) && e.keywords[n];
      }

      function g() {
        null != R.subLanguage ? function () {
          if ('' === M) return;
          var e = null;

          if ('string' == typeof R.subLanguage) {
            if (!n[R.subLanguage]) return void k.addText(M);
            e = f(R.subLanguage, M, !0, _[R.subLanguage]), _[R.subLanguage] = e.top;
          } else e = p(M, R.subLanguage.length ? R.subLanguage : null);

          R.relevance > 0 && (O += e.relevance), k.addSublanguage(e.emitter, e.language);
        }() : function () {
          if (!R.keywords) return void k.addText(M);
          var e = 0;
          R.keywordPatternRe.lastIndex = 0;
          var t = R.keywordPatternRe.exec(M),
              n = '';

          for (; t;) {
            n += M.substring(e, t.index);

            var _i3 = c(R, t);

            if (_i3) {
              var _i4 = _slicedToArray(_i3, 2),
                  _e2 = _i4[0],
                  _s3 = _i4[1];

              if (k.addText(n), n = '', O += _s3, _e2.startsWith('_')) n += t[0];else {
                var _n2 = v.classNameAliases[_e2] || _e2;

                k.addKeyword(t[0], _n2);
              }
            } else n += t[0];

            e = R.keywordPatternRe.lastIndex, t = R.keywordPatternRe.exec(M);
          }

          ;
          n += M.substr(e), k.addText(n);
        }(), M = '';
      }

      function h(e) {
        return e.className && k.openNode(v.classNameAliases[e.className] || e.className), R = Object.create(e, {
          parent: {
            value: R
          }
        }), R;
      }

      function d(e, t, n) {
        var s = function (e, t) {
          var n = e && e.exec(t);
          return n && 0 === n.index;
        }(e.endRe, n);

        if (s) {
          if (e['on:end']) {
            var _n3 = new i(e);

            e['on:end'](t, _n3), _n3.isMatchIgnored && (s = !1);
          }

          if (s) {
            for (; e.endsParent && e.parent;) {
              e = e.parent;
            }

            return e;
          }
        }

        if (e.endsWithParent) return d(e.parent, t, n);
      }

      function m(e) {
        return 0 === R.matcher.regexIndex ? (M += e[0], 1) : (I = !0, 0);
      }

      function b(e) {
        var n = e[0],
            i = t.substr(e.index),
            s = d(R, e, i);
        if (!s) return V;
        var a = R;
        a.skip ? M += n : (a.returnEnd || a.excludeEnd || (M += n), g(), a.excludeEnd && (M = n));

        do {
          R.className && k.closeNode(), R.skip || R.subLanguage || (O += R.relevance), R = R.parent;
        } while (R !== s.parent);

        return s.starts && (s.endSameAsBegin && (s.starts.endRe = s.endRe), h(s.starts)), a.returnEnd ? 0 : n.length;
      }

      var E = {};

      function x(n, a) {
        var l = a && a[0];
        if (M += n, null == l) return g(), 0;

        if ('begin' === E.type && 'end' === a.type && E.index === a.index && '' === l) {
          if (M += t.slice(a.index, a.index + 1), !r) {
            var _t5 = Error('0 width match regex');

            throw _t5.languageName = e, _t5.badRule = E.rule, _t5;
          }

          return 1;
        }

        if (E = a, 'begin' === a.type) return function (e) {
          var t = e[0],
              n = e.rule,
              s = new i(n),
              a = [n.__beforeBegin, n['on:begin']];

          for (var _i5 = 0, _a = a; _i5 < _a.length; _i5++) {
            var _n4 = _a[_i5];
            if (_n4 && (_n4(e, s), s.isMatchIgnored)) return m(t);
          }

          return n && n.endSameAsBegin && (n.endRe = RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm')), n.skip ? M += t : (n.excludeBegin && (M += t), g(), n.returnBegin || n.excludeBegin || (M = t)), h(n), n.returnBegin ? 0 : t.length;
        }(a);

        if ('illegal' === a.type && !s) {
          var _e3 = Error('Illegal lexeme "' + l + '" for mode "' + (R.className || '<unnamed>') + '"');

          throw _e3.mode = R, _e3;
        }

        if ('end' === a.type) {
          var _e4 = b(a);

          if (_e4 !== V) return _e4;
        }

        if ('illegal' === a.type && '' === l) return 1;
        if (L > 1e5 && L > 3 * a.index) throw Error('potential infinite loop, way more iterations than matches');
        return M += l, l.length;
      }

      var v = N(e);
      if (!v) throw $(o.replace('{}', e)), Error('Unknown language: "' + e + '"');
      var w = T(v, {
        plugins: a
      });
      var y = '',
          R = l || w;
      var _ = {},
          k = new u.__emitter(u);

      (function () {
        var e = [];

        for (var _t6 = R; _t6 !== v; _t6 = _t6.parent) {
          _t6.className && e.unshift(_t6.className);
        }

        e.forEach(function (e) {
          return k.openNode(e);
        });
      })();

      var M = '',
          O = 0,
          A = 0,
          L = 0,
          I = !1;

      try {
        for (R.matcher.considerAll();;) {
          L++, I ? I = !1 : R.matcher.considerAll(), R.matcher.lastIndex = A;

          var _e5 = R.matcher.exec(t);

          if (!_e5) break;

          var _n5 = x(t.substring(A, _e5.index), _e5);

          A = _e5.index + _n5;
        }

        return x(t.substr(A)), k.closeAllNodes(), k.finalize(), y = k.toHTML(), {
          relevance: Math.floor(O),
          value: y,
          language: e,
          illegal: !1,
          emitter: k,
          top: R
        };
      } catch (n) {
        if (n.message && n.message.includes('Illegal')) return {
          illegal: !0,
          illegalBy: {
            msg: n.message,
            context: t.slice(A - 100, A + 100),
            mode: n.mode
          },
          sofar: y,
          relevance: 0,
          value: K(t),
          emitter: k
        };
        if (r) return {
          illegal: !1,
          relevance: 0,
          value: K(t),
          emitter: k,
          language: e,
          top: R,
          errorRaised: n
        };
        throw n;
      }
    }

    function p(e, t) {
      t = t || u.languages || Object.keys(n);

      var i = function (e) {
        var t = {
          relevance: 0,
          emitter: new u.__emitter(u),
          value: K(e),
          illegal: !1,
          top: g
        };
        return t.emitter.addText(e), t;
      }(e),
          s = t.filter(N).filter(k).map(function (t) {
        return f(t, e, !1);
      });

      s.unshift(i);

      var a = s.sort(function (e, t) {
        if (e.relevance !== t.relevance) return t.relevance - e.relevance;

        if (e.language && t.language) {
          if (N(e.language).supersetOf === t.language) return 1;
          if (N(t.language).supersetOf === e.language) return -1;
        }

        return 0;
      }),
          _a2 = _slicedToArray(a, 2),
          r = _a2[0],
          l = _a2[1],
          o = r;

      return o.second_best = l, o;
    }

    var m = {
      'before:highlightElement': function beforeHighlightElement(_ref6) {
        var e = _ref6.el;
        u.useBR && (e.innerHTML = e.innerHTML.replace(/\n/g, '').replace(/<br[ /]*>/g, '\n'));
      },
      'after:highlightElement': function afterHighlightElement(_ref7) {
        var e = _ref7.result;
        u.useBR && (e.value = e.value.replace(/\n/g, '<br>'));
      }
    },
        b = /^(<[^>]+>|\t)+/gm,
        E = {
      'after:highlightElement': function afterHighlightElement(_ref8) {
        var e = _ref8.result;
        u.tabReplace && (e.value = e.value.replace(b, function (e) {
          return e.replace(/\t/g, u.tabReplace);
        }));
      }
    };

    function x(e) {
      var t = null;

      var n = function (e) {
        var t = e.className + ' ';
        t += e.parentNode ? e.parentNode.className : '';
        var n = u.languageDetectRe.exec(t);

        if (n) {
          var _t7 = N(n[1]);

          return _t7 || (U(o.replace('{}', n[1])), U('Falling back to no-highlight mode for this block.', e)), _t7 ? n[1] : 'no-highlight';
        }

        return t.split(/\s+/).find(function (e) {
          return h(e) || N(e);
        });
      }(e);

      if (h(n)) return;
      M('before:highlightElement', {
        el: e,
        language: n
      }), t = e;
      var i = t.textContent,
          a = n ? d(i, {
        language: n,
        ignoreIllegals: !0
      }) : p(i);
      M('after:highlightElement', {
        el: e,
        result: a,
        text: i
      }), e.innerHTML = a.value, function (e, t, n) {
        var i = t ? s[t] : n;
        e.classList.add('hljs'), i && e.classList.add(i);
      }(e, n, a.language), e.result = {
        language: a.language,
        re: a.relevance,
        relavance: a.relevance
      }, a.second_best && (e.second_best = {
        language: a.second_best.language,
        re: a.second_best.relevance,
        relavance: a.second_best.relevance
      });
    }

    var v = function v() {
      v.called || (v.called = !0, z('10.6.0', 'initHighlighting() is deprecated.  Use highlightAll() instead.'), document.querySelectorAll('pre code').forEach(x));
    };

    var w = !1;

    function y() {
      'loading' !== document.readyState ? document.querySelectorAll('pre code').forEach(x) : w = !0;
    }

    function N(e) {
      return e = (e || '').toLowerCase(), n[e] || n[s[e]];
    }

    function R(e, _ref9) {
      var t = _ref9.languageName;
      'string' == typeof e && (e = [e]), e.forEach(function (e) {
        s[e.toLowerCase()] = t;
      });
    }

    function k(e) {
      var t = N(e);
      return t && !t.disableAutodetect;
    }

    function M(e, t) {
      var n = e;
      a.forEach(function (e) {
        e[n] && e[n](t);
      });
    }

    'undefined' != typeof window && window.addEventListener && window.addEventListener('DOMContentLoaded', function () {
      w && y();
    }, !1), Object.assign(e, {
      highlight: d,
      highlightAuto: p,
      highlightAll: y,
      fixMarkup: function fixMarkup(e) {
        return z('10.2.0', 'fixMarkup will be removed entirely in v11.0'), z('10.2.0', 'Please see https://github.com/highlightjs/highlight.js/issues/2534'), t = e, u.tabReplace || u.useBR ? t.replace(l, function (e) {
          return '\n' === e ? u.useBR ? '<br>' : e : u.tabReplace ? e.replace(/\t/g, u.tabReplace) : e;
        }) : t;
        var t;
      },
      highlightElement: x,
      highlightBlock: function highlightBlock(e) {
        return z('10.7.0', 'highlightBlock will be removed entirely in v12.0'), z('10.7.0', 'Please use highlightElement now.'), x(e);
      },
      configure: function configure(e) {
        e.useBR && (z('10.3.0', "'useBR' will be removed entirely in v11.0"), z('10.3.0', 'Please see https://github.com/highlightjs/highlight.js/issues/2559')), u = G(u, e);
      },
      initHighlighting: v,
      initHighlightingOnLoad: function initHighlightingOnLoad() {
        z('10.6.0', 'initHighlightingOnLoad() is deprecated.  Use highlightAll() instead.'), w = !0;
      },
      registerLanguage: function registerLanguage(t, i) {
        var s = null;

        try {
          s = i(e);
        } catch (e) {
          if ($("Language definition for '{}' could not be registered.".replace('{}', t)), !r) throw e;
          $(e), s = g;
        }

        s.name || (s.name = t), n[t] = s, s.rawDefinition = i.bind(null, e), s.aliases && R(s.aliases, {
          languageName: t
        });
      },
      unregisterLanguage: function unregisterLanguage(e) {
        delete n[e];

        for (var _i6 = 0, _Object$keys = Object.keys(s); _i6 < _Object$keys.length; _i6++) {
          var _t8 = _Object$keys[_i6];
          s[_t8] === e && delete s[_t8];
        }
      },
      listLanguages: function listLanguages() {
        return Object.keys(n);
      },
      getLanguage: N,
      registerAliases: R,
      requireLanguage: function requireLanguage(e) {
        z('10.4.0', 'requireLanguage will be removed entirely in v11.'), z('10.4.0', 'Please see https://github.com/highlightjs/highlight.js/pull/2844');
        var t = N(e);
        if (t) return t;
        throw Error("The '{}' language is required, but not loaded.".replace('{}', e));
      },
      autoDetection: k,
      inherit: G,
      addPlugin: function addPlugin(e) {
        ;
        (function (e) {
          e['before:highlightBlock'] && !e['before:highlightElement'] && (e['before:highlightElement'] = function (t) {
            e['before:highlightBlock'](Object.assign({
              block: t.el
            }, t));
          }), e['after:highlightBlock'] && !e['after:highlightElement'] && (e['after:highlightElement'] = function (t) {
            e['after:highlightBlock'](Object.assign({
              block: t.el
            }, t));
          });
        })(e), a.push(e);
      },
      vuePlugin: P(e).VuePlugin
    }), e.debugMode = function () {
      r = !1;
    }, e.safeMode = function () {
      r = !0;
    }, e.versionString = '10.7.1';

    for (var _e6 in _) {
      'object' == _typeof(_[_e6]) && t(_[_e6]);
    }

    return Object.assign(e, _), e.addPlugin(m), e.addPlugin(D), e.addPlugin(E), e;
  }({});
}();

'object' == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && 'undefined' != typeof module && (module.exports = hljs);
hljs.registerLanguage('apache', function () {
  'use strict';

  return function (e) {
    var n = {
      className: 'number',
      begin: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/
    };
    return {
      name: 'Apache config',
      aliases: ['apacheconf'],
      case_insensitive: !0,
      contains: [e.HASH_COMMENT_MODE, {
        className: 'section',
        begin: /<\/?/,
        end: />/,
        contains: [n, {
          className: 'number',
          begin: /:\d{1,5}/
        }, e.inherit(e.QUOTE_STRING_MODE, {
          relevance: 0
        })]
      }, {
        className: 'attribute',
        begin: /\w+/,
        relevance: 0,
        keywords: {
          nomarkup: 'order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername'
        },
        starts: {
          end: /$/,
          relevance: 0,
          keywords: {
            literal: 'on off all deny allow'
          },
          contains: [{
            className: 'meta',
            begin: /\s\[/,
            end: /\]$/
          }, {
            className: 'variable',
            begin: /[\$%]\{/,
            end: /\}/,
            contains: ['self', {
              className: 'number',
              begin: /[$%]\d+/
            }]
          }, n, {
            className: 'number',
            begin: /\d+/
          }, e.QUOTE_STRING_MODE]
        }
      }],
      illegal: /\S/
    };
  };
}());
hljs.registerLanguage('bash', function () {
  'use strict';

  function e() {
    for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      e[_key5] = arguments[_key5];
    }

    return e.map(function (e) {
      return (s = e) ? 'string' == typeof s ? s : s.source : null;
      var s;
    }).join('');
  }

  return function (s) {
    var n = {},
        t = {
      begin: /\$\{/,
      end: /\}/,
      contains: ['self', {
        begin: /:-/,
        contains: [n]
      }]
    };
    Object.assign(n, {
      className: 'variable',
      variants: [{
        begin: e(/\$[\w\d#@][\w\d_]*/, '(?![\\w\\d])(?![$])')
      }, t]
    });
    var a = {
      className: 'subst',
      begin: /\$\(/,
      end: /\)/,
      contains: [s.BACKSLASH_ESCAPE]
    },
        i = {
      begin: /<<-?\s*(?=\w+)/,
      starts: {
        contains: [s.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: 'string'
        })]
      }
    },
        c = {
      className: 'string',
      begin: /"/,
      end: /"/,
      contains: [s.BACKSLASH_ESCAPE, n, a]
    };
    a.contains.push(c);
    var o = {
      begin: /\$\(\(/,
      end: /\)\)/,
      contains: [{
        begin: /\d+#[0-9a-f]+/,
        className: 'number'
      }, s.NUMBER_MODE, n]
    },
        r = s.SHEBANG({
      binary: '(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)',
      relevance: 10
    }),
        l = {
      className: 'function',
      begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      returnBegin: !0,
      contains: [s.inherit(s.TITLE_MODE, {
        begin: /\w[\w\d_]*/
      })],
      relevance: 0
    };
    return {
      name: 'Bash',
      aliases: ['sh', 'zsh'],
      keywords: {
        $pattern: /\b[a-z._-]+\b/,
        keyword: 'if then else elif fi for while in do done case esac function',
        literal: 'true false',
        built_in: 'break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp'
      },
      contains: [r, s.SHEBANG(), l, o, s.HASH_COMMENT_MODE, i, c, {
        className: '',
        begin: /\\"/
      }, {
        className: 'string',
        begin: /'/,
        end: /'/
      }, n]
    };
  };
}());
hljs.registerLanguage('c', function () {
  'use strict';

  function e(e) {
    return function () {
      for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        e[_key6] = arguments[_key6];
      }

      return e.map(function (e) {
        return function (e) {
          return e ? 'string' == typeof e ? e : e.source : null;
        }(e);
      }).join('');
    }('(', e, ')?');
  }

  return function (t) {
    var n = t.COMMENT('//', '$', {
      contains: [{
        begin: /\\\n/
      }]
    }),
        r = '[a-zA-Z_]\\w*::',
        a = '(decltype\\(auto\\)|' + e(r) + '[a-zA-Z_]\\w*' + e('<[^<>]+>') + ')',
        i = {
      className: 'keyword',
      begin: '\\b[a-z\\d_]*_t\\b'
    },
        s = {
      className: 'string',
      variants: [{
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: '\\n',
        contains: [t.BACKSLASH_ESCAPE]
      }, {
        begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
        end: "'",
        illegal: '.'
      }, t.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })]
    },
        o = {
      className: 'number',
      variants: [{
        begin: "\\b(0b[01']+)"
      }, {
        begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
      }, {
        begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
      }],
      relevance: 0
    },
        c = {
      className: 'meta',
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: {
        'meta-keyword': 'if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include'
      },
      contains: [{
        begin: /\\\n/,
        relevance: 0
      }, t.inherit(s, {
        className: 'meta-string'
      }), {
        className: 'meta-string',
        begin: /<.*?>/
      }, n, t.C_BLOCK_COMMENT_MODE]
    },
        l = {
      className: 'title',
      begin: e(r) + t.IDENT_RE,
      relevance: 0
    },
        d = e(r) + t.IDENT_RE + '\\s*\\(',
        u = {
      keyword: 'int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq',
      built_in: 'std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary',
      literal: 'true false nullptr NULL'
    },
        m = [c, i, n, t.C_BLOCK_COMMENT_MODE, o, s],
        p = {
      variants: [{
        begin: /=/,
        end: /;/
      }, {
        begin: /\(/,
        end: /\)/
      }, {
        beginKeywords: 'new throw return else',
        end: /;/
      }],
      keywords: u,
      contains: m.concat([{
        begin: /\(/,
        end: /\)/,
        keywords: u,
        contains: m.concat(['self']),
        relevance: 0
      }]),
      relevance: 0
    },
        _ = {
      className: 'function',
      begin: '(' + a + '[\\*&\\s]+)+' + d,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: u,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [{
        begin: 'decltype\\(auto\\)',
        keywords: u,
        relevance: 0
      }, {
        begin: d,
        returnBegin: !0,
        contains: [l],
        relevance: 0
      }, {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        keywords: u,
        relevance: 0,
        contains: [n, t.C_BLOCK_COMMENT_MODE, s, o, i, {
          begin: /\(/,
          end: /\)/,
          keywords: u,
          relevance: 0,
          contains: ['self', n, t.C_BLOCK_COMMENT_MODE, s, o, i]
        }]
      }, i, n, t.C_BLOCK_COMMENT_MODE, c]
    };
    return {
      name: 'C',
      aliases: ['h'],
      keywords: u,
      disableAutodetect: !0,
      illegal: '</',
      contains: [].concat(p, _, m, [c, {
        begin: '\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<',
        end: '>',
        keywords: u,
        contains: ['self', i]
      }, {
        begin: t.IDENT_RE + '::',
        keywords: u
      }, {
        className: 'class',
        beginKeywords: 'enum class struct union',
        end: /[{;:<>=]/,
        contains: [{
          beginKeywords: 'final class struct'
        }, t.TITLE_MODE]
      }]),
      exports: {
        preprocessor: c,
        strings: s,
        keywords: u
      }
    };
  };
}());
hljs.registerLanguage('coffeescript', function () {
  'use strict';

  var e = ['as', 'in', 'of', 'if', 'for', 'while', 'finally', 'var', 'new', 'function', 'do', 'return', 'void', 'else', 'break', 'catch', 'instanceof', 'with', 'throw', 'case', 'default', 'try', 'switch', 'continue', 'typeof', 'delete', 'let', 'yield', 'const', 'class', 'debugger', 'async', 'await', 'static', 'import', 'from', 'export', 'extends'],
      n = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
      a = [].concat(['setInterval', 'setTimeout', 'clearInterval', 'clearTimeout', 'require', 'exports', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape'], ['arguments', 'this', 'super', 'console', 'window', 'document', 'localStorage', 'module', 'global'], ['Intl', 'DataView', 'Number', 'Math', 'Date', 'String', 'RegExp', 'Object', 'Function', 'Boolean', 'Error', 'Symbol', 'Set', 'Map', 'WeakSet', 'WeakMap', 'Proxy', 'Reflect', 'JSON', 'Promise', 'Float64Array', 'Int16Array', 'Int32Array', 'Int8Array', 'Uint16Array', 'Uint32Array', 'Float32Array', 'Array', 'Uint8Array', 'Uint8ClampedArray', 'ArrayBuffer', 'BigInt64Array', 'BigUint64Array', 'BigInt'], ['EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError']);
  return function (r) {
    var t = {
      keyword: e.concat(['then', 'unless', 'until', 'loop', 'by', 'when', 'and', 'or', 'is', 'isnt', 'not']).filter((i = ['var', 'const', 'let', 'function', 'static'], function (e) {
        return !i.includes(e);
      })),
      literal: n.concat(['yes', 'no', 'on', 'off']),
      built_in: a.concat(['npm', 'print'])
    };
    var i;
    var s = '[A-Za-z$_][0-9A-Za-z$_]*',
        o = {
      className: 'subst',
      begin: /#\{/,
      end: /\}/,
      keywords: t
    },
        c = [r.BINARY_NUMBER_MODE, r.inherit(r.C_NUMBER_MODE, {
      starts: {
        end: '(\\s*/)?',
        relevance: 0
      }
    }), {
      className: 'string',
      variants: [{
        begin: /'''/,
        end: /'''/,
        contains: [r.BACKSLASH_ESCAPE]
      }, {
        begin: /'/,
        end: /'/,
        contains: [r.BACKSLASH_ESCAPE]
      }, {
        begin: /"""/,
        end: /"""/,
        contains: [r.BACKSLASH_ESCAPE, o]
      }, {
        begin: /"/,
        end: /"/,
        contains: [r.BACKSLASH_ESCAPE, o]
      }]
    }, {
      className: 'regexp',
      variants: [{
        begin: '///',
        end: '///',
        contains: [o, r.HASH_COMMENT_MODE]
      }, {
        begin: '//[gim]{0,3}(?=\\W)',
        relevance: 0
      }, {
        begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/
      }]
    }, {
      begin: '@' + s
    }, {
      subLanguage: 'javascript',
      excludeBegin: !0,
      excludeEnd: !0,
      variants: [{
        begin: '```',
        end: '```'
      }, {
        begin: '`',
        end: '`'
      }]
    }];
    o.contains = c;
    var l = r.inherit(r.TITLE_MODE, {
      begin: s
    }),
        d = '(\\(.*\\)\\s*)?\\B[-=]>',
        g = {
      className: 'params',
      begin: '\\([^\\(]',
      returnBegin: !0,
      contains: [{
        begin: /\(/,
        end: /\)/,
        keywords: t,
        contains: ['self'].concat(c)
      }]
    };
    return {
      name: 'CoffeeScript',
      aliases: ['coffee', 'cson', 'iced'],
      keywords: t,
      illegal: /\/\*/,
      contains: c.concat([r.COMMENT('###', '###'), r.HASH_COMMENT_MODE, {
        className: 'function',
        begin: '^\\s*' + s + '\\s*=\\s*' + d,
        end: '[-=]>',
        returnBegin: !0,
        contains: [l, g]
      }, {
        begin: /[:\(,=]\s*/,
        relevance: 0,
        contains: [{
          className: 'function',
          begin: d,
          end: '[-=]>',
          returnBegin: !0,
          contains: [g]
        }]
      }, {
        className: 'class',
        beginKeywords: 'class',
        end: '$',
        illegal: /[:="\[\]]/,
        contains: [{
          beginKeywords: 'extends',
          endsWithParent: !0,
          illegal: /[:="\[\]]/,
          contains: [l]
        }, l]
      }, {
        begin: s + ':',
        end: ':',
        returnBegin: !0,
        returnEnd: !0,
        relevance: 0
      }])
    };
  };
}());
hljs.registerLanguage('cpp', function () {
  'use strict';

  function e(e) {
    return t('(', e, ')?');
  }

  function t() {
    for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      e[_key7] = arguments[_key7];
    }

    return e.map(function (e) {
      return (t = e) ? 'string' == typeof t ? t : t.source : null;
      var t;
    }).join('');
  }

  return function (n) {
    var r = n.COMMENT('//', '$', {
      contains: [{
        begin: /\\\n/
      }]
    }),
        a = '[a-zA-Z_]\\w*::',
        i = '(decltype\\(auto\\)|' + e(a) + '[a-zA-Z_]\\w*' + e('<[^<>]+>') + ')',
        s = {
      className: 'keyword',
      begin: '\\b[a-z\\d_]*_t\\b'
    },
        c = {
      className: 'string',
      variants: [{
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: '\\n',
        contains: [n.BACKSLASH_ESCAPE]
      }, {
        begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
        end: "'",
        illegal: '.'
      }, n.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })]
    },
        o = {
      className: 'number',
      variants: [{
        begin: "\\b(0b[01']+)"
      }, {
        begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
      }, {
        begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
      }],
      relevance: 0
    },
        l = {
      className: 'meta',
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: {
        'meta-keyword': 'if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include'
      },
      contains: [{
        begin: /\\\n/,
        relevance: 0
      }, n.inherit(c, {
        className: 'meta-string'
      }), {
        className: 'meta-string',
        begin: /<.*?>/
      }, r, n.C_BLOCK_COMMENT_MODE]
    },
        d = {
      className: 'title',
      begin: e(a) + n.IDENT_RE,
      relevance: 0
    },
        u = e(a) + n.IDENT_RE + '\\s*\\(',
        m = {
      keyword: 'int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq',
      built_in: '_Bool _Complex _Imaginary',
      _relevance_hints: ['asin', 'atan2', 'atan', 'calloc', 'ceil', 'cosh', 'cos', 'exit', 'exp', 'fabs', 'floor', 'fmod', 'fprintf', 'fputs', 'free', 'frexp', 'auto_ptr', 'deque', 'list', 'queue', 'stack', 'vector', 'map', 'set', 'pair', 'bitset', 'multiset', 'multimap', 'unordered_set', 'fscanf', 'future', 'isalnum', 'isalpha', 'iscntrl', 'isdigit', 'isgraph', 'islower', 'isprint', 'ispunct', 'isspace', 'isupper', 'isxdigit', 'tolower', 'toupper', 'labs', 'ldexp', 'log10', 'log', 'malloc', 'realloc', 'memchr', 'memcmp', 'memcpy', 'memset', 'modf', 'pow', 'printf', 'putchar', 'puts', 'scanf', 'sinh', 'sin', 'snprintf', 'sprintf', 'sqrt', 'sscanf', 'strcat', 'strchr', 'strcmp', 'strcpy', 'strcspn', 'strlen', 'strncat', 'strncmp', 'strncpy', 'strpbrk', 'strrchr', 'strspn', 'strstr', 'tanh', 'tan', 'unordered_map', 'unordered_multiset', 'unordered_multimap', 'priority_queue', 'make_pair', 'array', 'shared_ptr', 'abort', 'terminate', 'abs', 'acos', 'vfprintf', 'vprintf', 'vsprintf', 'endl', 'initializer_list', 'unique_ptr', 'complex', 'imaginary', 'std', 'string', 'wstring', 'cin', 'cout', 'cerr', 'clog', 'stdin', 'stdout', 'stderr', 'stringstream', 'istringstream', 'ostringstream'],
      literal: 'true false nullptr NULL'
    },
        p = {
      className: 'function.dispatch',
      relevance: 0,
      keywords: m,
      begin: t(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!while)/, n.IDENT_RE, (_ = /\s*\(/, t('(?=', _, ')')))
    };

    var _;

    var g = [p, l, s, r, n.C_BLOCK_COMMENT_MODE, o, c],
        b = {
      variants: [{
        begin: /=/,
        end: /;/
      }, {
        begin: /\(/,
        end: /\)/
      }, {
        beginKeywords: 'new throw return else',
        end: /;/
      }],
      keywords: m,
      contains: g.concat([{
        begin: /\(/,
        end: /\)/,
        keywords: m,
        contains: g.concat(['self']),
        relevance: 0
      }]),
      relevance: 0
    },
        f = {
      className: 'function',
      begin: '(' + i + '[\\*&\\s]+)+' + u,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: m,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [{
        begin: 'decltype\\(auto\\)',
        keywords: m,
        relevance: 0
      }, {
        begin: u,
        returnBegin: !0,
        contains: [d],
        relevance: 0
      }, {
        begin: /::/,
        relevance: 0
      }, {
        begin: /:/,
        endsWithParent: !0,
        contains: [c, o]
      }, {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        keywords: m,
        relevance: 0,
        contains: [r, n.C_BLOCK_COMMENT_MODE, c, o, s, {
          begin: /\(/,
          end: /\)/,
          keywords: m,
          relevance: 0,
          contains: ['self', r, n.C_BLOCK_COMMENT_MODE, c, o, s]
        }]
      }, s, r, n.C_BLOCK_COMMENT_MODE, l]
    };
    return {
      name: 'C++',
      aliases: ['cc', 'c++', 'h++', 'hpp', 'hh', 'hxx', 'cxx'],
      keywords: m,
      illegal: '</',
      classNameAliases: {
        'function.dispatch': 'built_in'
      },
      contains: [].concat(b, f, p, g, [l, {
        begin: '\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<',
        end: '>',
        keywords: m,
        contains: ['self', s]
      }, {
        begin: n.IDENT_RE + '::',
        keywords: m
      }, {
        className: 'class',
        beginKeywords: 'enum class struct union',
        end: /[{;:<>=]/,
        contains: [{
          beginKeywords: 'final class struct'
        }, n.TITLE_MODE]
      }]),
      exports: {
        preprocessor: l,
        strings: c,
        keywords: m
      }
    };
  };
}());
hljs.registerLanguage('csharp', function () {
  'use strict';

  return function (e) {
    var n = {
      keyword: ['abstract', 'as', 'base', 'break', 'case', 'class', 'const', 'continue', 'do', 'else', 'event', 'explicit', 'extern', 'finally', 'fixed', 'for', 'foreach', 'goto', 'if', 'implicit', 'in', 'interface', 'internal', 'is', 'lock', 'namespace', 'new', 'operator', 'out', 'override', 'params', 'private', 'protected', 'public', 'readonly', 'record', 'ref', 'return', 'sealed', 'sizeof', 'stackalloc', 'static', 'struct', 'switch', 'this', 'throw', 'try', 'typeof', 'unchecked', 'unsafe', 'using', 'virtual', 'void', 'volatile', 'while'].concat(['add', 'alias', 'and', 'ascending', 'async', 'await', 'by', 'descending', 'equals', 'from', 'get', 'global', 'group', 'init', 'into', 'join', 'let', 'nameof', 'not', 'notnull', 'on', 'or', 'orderby', 'partial', 'remove', 'select', 'set', 'unmanaged', 'value|0', 'var', 'when', 'where', 'with', 'yield']),
      built_in: ['bool', 'byte', 'char', 'decimal', 'delegate', 'double', 'dynamic', 'enum', 'float', 'int', 'long', 'nint', 'nuint', 'object', 'sbyte', 'short', 'string', 'ulong', 'uint', 'ushort'],
      literal: ['default', 'false', 'null', 'true']
    },
        a = e.inherit(e.TITLE_MODE, {
      begin: '[a-zA-Z](\\.?\\w)*'
    }),
        i = {
      className: 'number',
      variants: [{
        begin: "\\b(0b[01']+)"
      }, {
        begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
      }, {
        begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
      }],
      relevance: 0
    },
        s = {
      className: 'string',
      begin: '@"',
      end: '"',
      contains: [{
        begin: '""'
      }]
    },
        t = e.inherit(s, {
      illegal: /\n/
    }),
        r = {
      className: 'subst',
      begin: /\{/,
      end: /\}/,
      keywords: n
    },
        l = e.inherit(r, {
      illegal: /\n/
    }),
        c = {
      className: 'string',
      begin: /\$"/,
      end: '"',
      illegal: /\n/,
      contains: [{
        begin: /\{\{/
      }, {
        begin: /\}\}/
      }, e.BACKSLASH_ESCAPE, l]
    },
        o = {
      className: 'string',
      begin: /\$@"/,
      end: '"',
      contains: [{
        begin: /\{\{/
      }, {
        begin: /\}\}/
      }, {
        begin: '""'
      }, r]
    },
        d = e.inherit(o, {
      illegal: /\n/,
      contains: [{
        begin: /\{\{/
      }, {
        begin: /\}\}/
      }, {
        begin: '""'
      }, l]
    });
    r.contains = [o, c, s, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.C_BLOCK_COMMENT_MODE], l.contains = [d, c, t, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.inherit(e.C_BLOCK_COMMENT_MODE, {
      illegal: /\n/
    })];

    var g = {
      variants: [o, c, s, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
    },
        E = {
      begin: '<',
      end: '>',
      contains: [{
        beginKeywords: 'in out'
      }, a]
    },
        _ = e.IDENT_RE + '(<' + e.IDENT_RE + '(\\s*,\\s*' + e.IDENT_RE + ')*>)?(\\[\\])?',
        b = {
      begin: '@' + e.IDENT_RE,
      relevance: 0
    };

    return {
      name: 'C#',
      aliases: ['cs', 'c#'],
      keywords: n,
      illegal: /::/,
      contains: [e.COMMENT('///', '$', {
        returnBegin: !0,
        contains: [{
          className: 'doctag',
          variants: [{
            begin: '///',
            relevance: 0
          }, {
            begin: '\x3c!--|--\x3e'
          }, {
            begin: '</?',
            end: '>'
          }]
        }]
      }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        className: 'meta',
        begin: '#',
        end: '$',
        keywords: {
          'meta-keyword': 'if else elif endif define undef warning error line region endregion pragma checksum'
        }
      }, g, i, {
        beginKeywords: 'class interface',
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:,]/,
        contains: [{
          beginKeywords: 'where class'
        }, a, E, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, {
        beginKeywords: 'namespace',
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [a, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, {
        beginKeywords: 'record',
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [a, E, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, {
        className: 'meta',
        begin: '^\\s*\\[',
        excludeBegin: !0,
        end: '\\]',
        excludeEnd: !0,
        contains: [{
          className: 'meta-string',
          begin: /"/,
          end: /"/
        }]
      }, {
        beginKeywords: 'new return throw await else',
        relevance: 0
      }, {
        className: 'function',
        begin: '(' + _ + '\\s+)+' + e.IDENT_RE + '\\s*(<.+>\\s*)?\\(',
        returnBegin: !0,
        end: /\s*[{;=]/,
        excludeEnd: !0,
        keywords: n,
        contains: [{
          beginKeywords: 'public private protected static internal protected abstract async extern override unsafe virtual new sealed partial',
          relevance: 0
        }, {
          begin: e.IDENT_RE + '\\s*(<.+>\\s*)?\\(',
          returnBegin: !0,
          contains: [e.TITLE_MODE, E],
          relevance: 0
        }, {
          className: 'params',
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: n,
          relevance: 0,
          contains: [g, i, e.C_BLOCK_COMMENT_MODE]
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, b]
    };
  };
}());
hljs.registerLanguage('css', function () {
  'use strict';

  var e = ['a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'blockquote', 'body', 'button', 'canvas', 'caption', 'cite', 'code', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt', 'em', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'mark', 'menu', 'nav', 'object', 'ol', 'p', 'q', 'quote', 'samp', 'section', 'span', 'strong', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'ul', 'var', 'video'],
      t = ['any-hover', 'any-pointer', 'aspect-ratio', 'color', 'color-gamut', 'color-index', 'device-aspect-ratio', 'device-height', 'device-width', 'display-mode', 'forced-colors', 'grid', 'height', 'hover', 'inverted-colors', 'monochrome', 'orientation', 'overflow-block', 'overflow-inline', 'pointer', 'prefers-color-scheme', 'prefers-contrast', 'prefers-reduced-motion', 'prefers-reduced-transparency', 'resolution', 'scan', 'scripting', 'update', 'width', 'min-width', 'max-width', 'min-height', 'max-height'],
      i = ['active', 'any-link', 'blank', 'checked', 'current', 'default', 'defined', 'dir', 'disabled', 'drop', 'empty', 'enabled', 'first', 'first-child', 'first-of-type', 'fullscreen', 'future', 'focus', 'focus-visible', 'focus-within', 'has', 'host', 'host-context', 'hover', 'indeterminate', 'in-range', 'invalid', 'is', 'lang', 'last-child', 'last-of-type', 'left', 'link', 'local-link', 'not', 'nth-child', 'nth-col', 'nth-last-child', 'nth-last-col', 'nth-last-of-type', 'nth-of-type', 'only-child', 'only-of-type', 'optional', 'out-of-range', 'past', 'placeholder-shown', 'read-only', 'read-write', 'required', 'right', 'root', 'scope', 'target', 'target-within', 'user-invalid', 'valid', 'visited', 'where'],
      o = ['after', 'backdrop', 'before', 'cue', 'cue-region', 'first-letter', 'first-line', 'grammar-error', 'marker', 'part', 'placeholder', 'selection', 'slotted', 'spelling-error'],
      r = ['align-content', 'align-items', 'align-self', 'animation', 'animation-delay', 'animation-direction', 'animation-duration', 'animation-fill-mode', 'animation-iteration-count', 'animation-name', 'animation-play-state', 'animation-timing-function', 'auto', 'backface-visibility', 'background', 'background-attachment', 'background-clip', 'background-color', 'background-image', 'background-origin', 'background-position', 'background-repeat', 'background-size', 'border', 'border-bottom', 'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-style', 'border-bottom-width', 'border-collapse', 'border-color', 'border-image', 'border-image-outset', 'border-image-repeat', 'border-image-slice', 'border-image-source', 'border-image-width', 'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-radius', 'border-right', 'border-right-color', 'border-right-style', 'border-right-width', 'border-spacing', 'border-style', 'border-top', 'border-top-color', 'border-top-left-radius', 'border-top-right-radius', 'border-top-style', 'border-top-width', 'border-width', 'bottom', 'box-decoration-break', 'box-shadow', 'box-sizing', 'break-after', 'break-before', 'break-inside', 'caption-side', 'clear', 'clip', 'clip-path', 'color', 'column-count', 'column-fill', 'column-gap', 'column-rule', 'column-rule-color', 'column-rule-style', 'column-rule-width', 'column-span', 'column-width', 'columns', 'content', 'counter-increment', 'counter-reset', 'cursor', 'direction', 'display', 'empty-cells', 'filter', 'flex', 'flex-basis', 'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap', 'float', 'font', 'font-display', 'font-family', 'font-feature-settings', 'font-kerning', 'font-language-override', 'font-size', 'font-size-adjust', 'font-smoothing', 'font-stretch', 'font-style', 'font-variant', 'font-variant-ligatures', 'font-variation-settings', 'font-weight', 'height', 'hyphens', 'icon', 'image-orientation', 'image-rendering', 'image-resolution', 'ime-mode', 'inherit', 'initial', 'justify-content', 'left', 'letter-spacing', 'line-height', 'list-style', 'list-style-image', 'list-style-position', 'list-style-type', 'margin', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'marks', 'mask', 'max-height', 'max-width', 'min-height', 'min-width', 'nav-down', 'nav-index', 'nav-left', 'nav-right', 'nav-up', 'none', 'normal', 'object-fit', 'object-position', 'opacity', 'order', 'orphans', 'outline', 'outline-color', 'outline-offset', 'outline-style', 'outline-width', 'overflow', 'overflow-wrap', 'overflow-x', 'overflow-y', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'page-break-after', 'page-break-before', 'page-break-inside', 'perspective', 'perspective-origin', 'pointer-events', 'position', 'quotes', 'resize', 'right', 'src', 'tab-size', 'table-layout', 'text-align', 'text-align-last', 'text-decoration', 'text-decoration-color', 'text-decoration-line', 'text-decoration-style', 'text-indent', 'text-overflow', 'text-rendering', 'text-shadow', 'text-transform', 'text-underline-position', 'top', 'transform', 'transform-origin', 'transform-style', 'transition', 'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function', 'unicode-bidi', 'vertical-align', 'visibility', 'white-space', 'widows', 'width', 'word-break', 'word-spacing', 'word-wrap', 'z-index'].reverse();
  return function (n) {
    var a = function (e) {
      return {
        IMPORTANT: {
          className: 'meta',
          begin: '!important'
        },
        HEXCOLOR: {
          className: 'number',
          begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
        },
        ATTRIBUTE_SELECTOR_MODE: {
          className: 'selector-attr',
          begin: /\[/,
          end: /\]/,
          illegal: '$',
          contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        }
      };
    }(n),
        l = [n.APOS_STRING_MODE, n.QUOTE_STRING_MODE];

    return {
      name: 'CSS',
      case_insensitive: !0,
      illegal: /[=|'\$]/,
      keywords: {
        keyframePosition: 'from to'
      },
      classNameAliases: {
        keyframePosition: 'selector-tag'
      },
      contains: [n.C_BLOCK_COMMENT_MODE, {
        begin: /-(webkit|moz|ms|o)-(?=[a-z])/
      }, n.CSS_NUMBER_MODE, {
        className: 'selector-id',
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      }, {
        className: 'selector-class',
        begin: '\\.[a-zA-Z-][a-zA-Z0-9_-]*',
        relevance: 0
      }, a.ATTRIBUTE_SELECTOR_MODE, {
        className: 'selector-pseudo',
        variants: [{
          begin: ':(' + i.join('|') + ')'
        }, {
          begin: '::(' + o.join('|') + ')'
        }]
      }, {
        className: 'attribute',
        begin: '\\b(' + r.join('|') + ')\\b'
      }, {
        begin: ':',
        end: '[;}]',
        contains: [a.HEXCOLOR, a.IMPORTANT, n.CSS_NUMBER_MODE].concat(l, [{
          begin: /(url|data-uri)\(/,
          end: /\)/,
          relevance: 0,
          keywords: {
            built_in: 'url data-uri'
          },
          contains: [{
            className: 'string',
            begin: /[^)]/,
            endsWithParent: !0,
            excludeEnd: !0
          }]
        }, {
          className: 'built_in',
          begin: /[\w-]+(?=\()/
        }])
      }, {
        begin: (s = /@/, function () {
          for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            e[_key8] = arguments[_key8];
          }

          return e.map(function (e) {
            return function (e) {
              return e ? 'string' == typeof e ? e : e.source : null;
            }(e);
          }).join('');
        }('(?=', s, ')')),
        end: '[{;]',
        relevance: 0,
        illegal: /:/,
        contains: [{
          className: 'keyword',
          begin: /@-?\w[\w]*(-\w+)*/
        }, {
          begin: /\s/,
          endsWithParent: !0,
          excludeEnd: !0,
          relevance: 0,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: 'and or not only',
            attribute: t.join(' ')
          },
          contains: [{
            begin: /[a-z-]+(?=:)/,
            className: 'attribute'
          }].concat(l, [n.CSS_NUMBER_MODE])
        }]
      }, {
        className: 'selector-tag',
        begin: '\\b(' + e.join('|') + ')\\b'
      }]
    };
    var s;
  };
}());
hljs.registerLanguage('diff', function () {
  'use strict';

  return function (e) {
    return {
      name: 'Diff',
      aliases: ['patch'],
      contains: [{
        className: 'meta',
        relevance: 10,
        variants: [{
          begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/
        }, {
          begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
        }, {
          begin: /^--- +\d+,\d+ +----$/
        }]
      }, {
        className: 'comment',
        variants: [{
          begin: /Index: /,
          end: /$/
        }, {
          begin: /^index/,
          end: /$/
        }, {
          begin: /={3,}/,
          end: /$/
        }, {
          begin: /^-{3}/,
          end: /$/
        }, {
          begin: /^\*{3} /,
          end: /$/
        }, {
          begin: /^\+{3}/,
          end: /$/
        }, {
          begin: /^\*{15}$/
        }, {
          begin: /^diff --git/,
          end: /$/
        }]
      }, {
        className: 'addition',
        begin: /^\+/,
        end: /$/
      }, {
        className: 'deletion',
        begin: /^-/,
        end: /$/
      }, {
        className: 'addition',
        begin: /^!/,
        end: /$/
      }]
    };
  };
}());
hljs.registerLanguage('go', function () {
  'use strict';

  return function (e) {
    var n = {
      keyword: 'break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune',
      literal: 'true false iota nil',
      built_in: 'append cap close complex copy imag len make new panic print println real recover delete'
    };
    return {
      name: 'Go',
      aliases: ['golang'],
      keywords: n,
      illegal: '</',
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        className: 'string',
        variants: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
          begin: '`',
          end: '`'
        }]
      }, {
        className: 'number',
        variants: [{
          begin: e.C_NUMBER_RE + '[i]',
          relevance: 1
        }, e.C_NUMBER_MODE]
      }, {
        begin: /:=/
      }, {
        className: 'function',
        beginKeywords: 'func',
        end: '\\s*(\\{|$)',
        excludeEnd: !0,
        contains: [e.TITLE_MODE, {
          className: 'params',
          begin: /\(/,
          end: /\)/,
          keywords: n,
          illegal: /["']/
        }]
      }]
    };
  };
}());
hljs.registerLanguage('http', function () {
  'use strict';

  function e() {
    for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      e[_key9] = arguments[_key9];
    }

    return e.map(function (e) {
      return (n = e) ? 'string' == typeof n ? n : n.source : null;
      var n;
    }).join('');
  }

  return function (n) {
    var a = 'HTTP/(2|1\\.[01])',
        s = {
      className: 'attribute',
      begin: e('^', /[A-Za-z][A-Za-z0-9-]*/, '(?=\\:\\s)'),
      starts: {
        contains: [{
          className: 'punctuation',
          begin: /: /,
          relevance: 0,
          starts: {
            end: '$',
            relevance: 0
          }
        }]
      }
    },
        t = [s, {
      begin: '\\n\\n',
      starts: {
        subLanguage: [],
        endsWithParent: !0
      }
    }];
    return {
      name: 'HTTP',
      aliases: ['https'],
      illegal: /\S/,
      contains: [{
        begin: '^(?=' + a + ' \\d{3})',
        end: /$/,
        contains: [{
          className: 'meta',
          begin: a
        }, {
          className: 'number',
          begin: '\\b\\d{3}\\b'
        }],
        starts: {
          end: /\b\B/,
          illegal: /\S/,
          contains: t
        }
      }, {
        begin: '(?=^[A-Z]+ (.*?) ' + a + '$)',
        end: /$/,
        contains: [{
          className: 'string',
          begin: ' ',
          end: ' ',
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: 'meta',
          begin: a
        }, {
          className: 'keyword',
          begin: '[A-Z]+'
        }],
        starts: {
          end: /\b\B/,
          illegal: /\S/,
          contains: t
        }
      }, n.inherit(s, {
        relevance: 0
      })]
    };
  };
}());
hljs.registerLanguage('ini', function () {
  'use strict';

  function e(e) {
    return e ? 'string' == typeof e ? e : e.source : null;
  }

  function n() {
    for (var _len10 = arguments.length, n = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      n[_key10] = arguments[_key10];
    }

    return n.map(function (n) {
      return e(n);
    }).join('');
  }

  return function (s) {
    var a = {
      className: 'number',
      relevance: 0,
      variants: [{
        begin: /([+-]+)?[\d]+_[\d_]+/
      }, {
        begin: s.NUMBER_RE
      }]
    },
        i = s.COMMENT();
    i.variants = [{
      begin: /;/,
      end: /$/
    }, {
      begin: /#/,
      end: /$/
    }];
    var t = {
      className: 'variable',
      variants: [{
        begin: /\$[\w\d"][\w\d_]*/
      }, {
        begin: /\$\{(.*?)\}/
      }]
    },
        r = {
      className: 'literal',
      begin: /\bon|off|true|false|yes|no\b/
    },
        l = {
      className: 'string',
      contains: [s.BACKSLASH_ESCAPE],
      variants: [{
        begin: "'''",
        end: "'''",
        relevance: 10
      }, {
        begin: '"""',
        end: '"""',
        relevance: 10
      }, {
        begin: '"',
        end: '"'
      }, {
        begin: "'",
        end: "'"
      }]
    },
        c = {
      begin: /\[/,
      end: /\]/,
      contains: [i, r, t, l, a, 'self'],
      relevance: 0
    },
        g = '(' + [/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/].map(function (n) {
      return e(n);
    }).join('|') + ')';
    return {
      name: 'TOML, also INI',
      aliases: ['toml'],
      case_insensitive: !0,
      illegal: /\S/,
      contains: [i, {
        className: 'section',
        begin: /\[+/,
        end: /\]+/
      }, {
        begin: n(g, '(\\s*\\.\\s*', g, ')*', n('(?=', /\s*=\s*[^#\s]/, ')')),
        className: 'attr',
        starts: {
          end: /$/,
          contains: [i, c, r, t, l, a]
        }
      }]
    };
  };
}());
hljs.registerLanguage('java', function () {
  'use strict';

  var e = '\\.([0-9](_*[0-9])*)',
      n = '[0-9a-fA-F](_*[0-9a-fA-F])*',
      a = {
    className: 'number',
    variants: [{
      begin: "(\\b([0-9](_*[0-9])*)((".concat(e, ")|\\.)?|(").concat(e, "))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b")
    }, {
      begin: "\\b([0-9](_*[0-9])*)((".concat(e, ")[fFdD]?\\b|\\.([fFdD]\\b)?)")
    }, {
      begin: "(".concat(e, ")[fFdD]?\\b")
    }, {
      begin: '\\b([0-9](_*[0-9])*)[fFdD]\\b'
    }, {
      begin: "\\b0[xX]((".concat(n, ")\\.?|(").concat(n, ")?\\.(").concat(n, "))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b")
    }, {
      begin: '\\b(0|[1-9](_*[0-9])*)[lL]?\\b'
    }, {
      begin: "\\b0[xX](".concat(n, ")[lL]?\\b")
    }, {
      begin: '\\b0(_*[0-7])*[lL]?\\b'
    }, {
      begin: '\\b0[bB][01](_*[01])*[lL]?\\b'
    }],
    relevance: 0
  };
  return function (e) {
    var n = 'false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do',
        s = {
      className: 'meta',
      begin: "@[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*",
      contains: [{
        begin: /\(/,
        end: /\)/,
        contains: ['self']
      }]
    };
    var r = a;
    return {
      name: 'Java',
      aliases: ['jsp'],
      keywords: n,
      illegal: /<\/|#/,
      contains: [e.COMMENT('/\\*\\*', '\\*/', {
        relevance: 0,
        contains: [{
          begin: /\w+@/,
          relevance: 0
        }, {
          className: 'doctag',
          begin: '@[A-Za-z]+'
        }]
      }), {
        begin: /import java\.[a-z]+\./,
        keywords: 'import',
        relevance: 2
      }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
        className: 'class',
        beginKeywords: 'class interface enum',
        end: /[{;=]/,
        excludeEnd: !0,
        relevance: 1,
        keywords: 'class interface enum',
        illegal: /[:"\[\]]/,
        contains: [{
          beginKeywords: 'extends implements'
        }, e.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: 'new throw return else',
        relevance: 0
      }, {
        className: 'class',
        begin: 'record\\s+' + e.UNDERSCORE_IDENT_RE + '\\s*\\(',
        returnBegin: !0,
        excludeEnd: !0,
        end: /[{;=]/,
        keywords: n,
        contains: [{
          beginKeywords: 'record'
        }, {
          begin: e.UNDERSCORE_IDENT_RE + '\\s*\\(',
          returnBegin: !0,
          relevance: 0,
          contains: [e.UNDERSCORE_TITLE_MODE]
        }, {
          className: 'params',
          begin: /\(/,
          end: /\)/,
          keywords: n,
          relevance: 0,
          contains: [e.C_BLOCK_COMMENT_MODE]
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, {
        className: 'function',
        begin: "([\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*(<[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*(\\s*,\\s*[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*)*>)?\\s+)+" + e.UNDERSCORE_IDENT_RE + '\\s*\\(',
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: n,
        contains: [{
          begin: e.UNDERSCORE_IDENT_RE + '\\s*\\(',
          returnBegin: !0,
          relevance: 0,
          contains: [e.UNDERSCORE_TITLE_MODE]
        }, {
          className: 'params',
          begin: /\(/,
          end: /\)/,
          keywords: n,
          relevance: 0,
          contains: [s, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, r, e.C_BLOCK_COMMENT_MODE]
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, r, s]
    };
  };
}());
hljs.registerLanguage('javascript', function () {
  'use strict';

  var e = '[A-Za-z$_][0-9A-Za-z$_]*',
      n = ['as', 'in', 'of', 'if', 'for', 'while', 'finally', 'var', 'new', 'function', 'do', 'return', 'void', 'else', 'break', 'catch', 'instanceof', 'with', 'throw', 'case', 'default', 'try', 'switch', 'continue', 'typeof', 'delete', 'let', 'yield', 'const', 'class', 'debugger', 'async', 'await', 'static', 'import', 'from', 'export', 'extends'],
      a = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
      s = [].concat(['setInterval', 'setTimeout', 'clearInterval', 'clearTimeout', 'require', 'exports', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape'], ['arguments', 'this', 'super', 'console', 'window', 'document', 'localStorage', 'module', 'global'], ['Intl', 'DataView', 'Number', 'Math', 'Date', 'String', 'RegExp', 'Object', 'Function', 'Boolean', 'Error', 'Symbol', 'Set', 'Map', 'WeakSet', 'WeakMap', 'Proxy', 'Reflect', 'JSON', 'Promise', 'Float64Array', 'Int16Array', 'Int32Array', 'Int8Array', 'Uint16Array', 'Uint32Array', 'Float32Array', 'Array', 'Uint8Array', 'Uint8ClampedArray', 'ArrayBuffer', 'BigInt64Array', 'BigUint64Array', 'BigInt'], ['EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError']);

  function r(e) {
    return t('(?=', e, ')');
  }

  function t() {
    for (var _len11 = arguments.length, e = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      e[_key11] = arguments[_key11];
    }

    return e.map(function (e) {
      return (n = e) ? 'string' == typeof n ? n : n.source : null;
      var n;
    }).join('');
  }

  return function (i) {
    var c = e,
        o = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: function isTrulyOpeningTag(e, n) {
        var a = e[0].length + e.index,
            s = e.input[a];
        '<' !== s ? '>' === s && (function (e, _ref10) {
          var n = _ref10.after;
          var a = '</' + e[0].slice(1);
          return -1 !== e.input.indexOf(a, n);
        }(e, {
          after: a
        }) || n.ignoreMatch()) : n.ignoreMatch();
      }
    },
        l = {
      $pattern: e,
      keyword: n,
      literal: a,
      built_in: s
    },
        g = '\\.([0-9](_?[0-9])*)',
        b = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
        d = {
      className: 'number',
      variants: [{
        begin: "(\\b(".concat(b, ")((").concat(g, ")|\\.)?|(").concat(g, "))[eE][+-]?([0-9](_?[0-9])*)\\b")
      }, {
        begin: "\\b(".concat(b, ")\\b((").concat(g, ")\\b|\\.)?|(").concat(g, ")\\b")
      }, {
        begin: '\\b(0|[1-9](_?[0-9])*)n\\b'
      }, {
        begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b'
      }, {
        begin: '\\b0[bB][0-1](_?[0-1])*n?\\b'
      }, {
        begin: '\\b0[oO][0-7](_?[0-7])*n?\\b'
      }, {
        begin: '\\b0[0-7]+n?\\b'
      }],
      relevance: 0
    },
        E = {
      className: 'subst',
      begin: '\\$\\{',
      end: '\\}',
      keywords: l,
      contains: []
    },
        u = {
      begin: 'html`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [i.BACKSLASH_ESCAPE, E],
        subLanguage: 'xml'
      }
    },
        _ = {
      begin: 'css`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [i.BACKSLASH_ESCAPE, E],
        subLanguage: 'css'
      }
    },
        m = {
      className: 'string',
      begin: '`',
      end: '`',
      contains: [i.BACKSLASH_ESCAPE, E]
    },
        y = {
      className: 'comment',
      variants: [i.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
        relevance: 0,
        contains: [{
          className: 'doctag',
          begin: '@[A-Za-z]+',
          contains: [{
            className: 'type',
            begin: '\\{',
            end: '\\}',
            relevance: 0
          }, {
            className: 'variable',
            begin: c + '(?=\\s*(-)|$)',
            endsParent: !0,
            relevance: 0
          }, {
            begin: /(?=[^\n])\s/,
            relevance: 0
          }]
        }]
      }), i.C_BLOCK_COMMENT_MODE, i.C_LINE_COMMENT_MODE]
    },
        N = [i.APOS_STRING_MODE, i.QUOTE_STRING_MODE, u, _, m, d, i.REGEXP_MODE];
    E.contains = N.concat({
      begin: /\{/,
      end: /\}/,
      keywords: l,
      contains: ['self'].concat(N)
    });
    var A = [].concat(y, E.contains),
        f = A.concat([{
      begin: /\(/,
      end: /\)/,
      keywords: l,
      contains: ['self'].concat(A)
    }]),
        p = {
      className: 'params',
      begin: /\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: l,
      contains: f
    };
    return {
      name: 'Javascript',
      aliases: ['js', 'jsx', 'mjs', 'cjs'],
      keywords: l,
      exports: {
        PARAMS_CONTAINS: f
      },
      illegal: /#(?![$_A-z])/,
      contains: [i.SHEBANG({
        label: 'shebang',
        binary: 'node',
        relevance: 5
      }), {
        label: 'use_strict',
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      }, i.APOS_STRING_MODE, i.QUOTE_STRING_MODE, u, _, m, y, d, {
        begin: t(/[{,\n]\s*/, r(t(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, c + '\\s*:'))),
        relevance: 0,
        contains: [{
          className: 'attr',
          begin: c + r('\\s*:'),
          relevance: 0
        }]
      }, {
        begin: '(' + i.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [y, i.REGEXP_MODE, {
          className: 'function',
          begin: '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' + i.UNDERSCORE_IDENT_RE + ')\\s*=>',
          returnBegin: !0,
          end: '\\s*=>',
          contains: [{
            className: 'params',
            variants: [{
              begin: i.UNDERSCORE_IDENT_RE,
              relevance: 0
            }, {
              className: null,
              begin: /\(\s*\)/,
              skip: !0
            }, {
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: l,
              contains: f
            }]
          }]
        }, {
          begin: /,/,
          relevance: 0
        }, {
          className: '',
          begin: /\s/,
          end: /\s*/,
          skip: !0
        }, {
          variants: [{
            begin: '<>',
            end: '</>'
          }, {
            begin: o.begin,
            'on:begin': o.isTrulyOpeningTag,
            end: o.end
          }],
          subLanguage: 'xml',
          contains: [{
            begin: o.begin,
            end: o.end,
            skip: !0,
            contains: ['self']
          }]
        }],
        relevance: 0
      }, {
        className: 'function',
        beginKeywords: 'function',
        end: /[{;]/,
        excludeEnd: !0,
        keywords: l,
        contains: ['self', i.inherit(i.TITLE_MODE, {
          begin: c
        }), p],
        illegal: /%/
      }, {
        beginKeywords: 'while if switch catch for'
      }, {
        className: 'function',
        begin: i.UNDERSCORE_IDENT_RE + '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
        returnBegin: !0,
        contains: [p, i.inherit(i.TITLE_MODE, {
          begin: c
        })]
      }, {
        variants: [{
          begin: '\\.' + c
        }, {
          begin: '\\$' + c
        }],
        relevance: 0
      }, {
        className: 'class',
        beginKeywords: 'class',
        end: /[{;=]/,
        excludeEnd: !0,
        illegal: /[:"[\]]/,
        contains: [{
          beginKeywords: 'extends'
        }, i.UNDERSCORE_TITLE_MODE]
      }, {
        begin: /\b(?=constructor)/,
        end: /[{;]/,
        excludeEnd: !0,
        contains: [i.inherit(i.TITLE_MODE, {
          begin: c
        }), 'self', p]
      }, {
        begin: '(get|set)\\s+(?=' + c + '\\()',
        end: /\{/,
        keywords: 'get set',
        contains: [i.inherit(i.TITLE_MODE, {
          begin: c
        }), {
          begin: /\(\)/
        }, p]
      }, {
        begin: /\$[(.]/
      }]
    };
  };
}());
hljs.registerLanguage('json', function () {
  'use strict';

  return function (n) {
    var e = {
      literal: 'true false null'
    },
        i = [n.C_LINE_COMMENT_MODE, n.C_BLOCK_COMMENT_MODE],
        a = [n.QUOTE_STRING_MODE, n.C_NUMBER_MODE],
        l = {
      end: ',',
      endsWithParent: !0,
      excludeEnd: !0,
      contains: a,
      keywords: e
    },
        t = {
      begin: /\{/,
      end: /\}/,
      contains: [{
        className: 'attr',
        begin: /"/,
        end: /"/,
        contains: [n.BACKSLASH_ESCAPE],
        illegal: '\\n'
      }, n.inherit(l, {
        begin: /:/
      })].concat(i),
      illegal: '\\S'
    },
        s = {
      begin: '\\[',
      end: '\\]',
      contains: [n.inherit(l)],
      illegal: '\\S'
    };
    return a.push(t, s), i.forEach(function (n) {
      a.push(n);
    }), {
      name: 'JSON',
      contains: a,
      keywords: e,
      illegal: '\\S'
    };
  };
}());
hljs.registerLanguage('kotlin', function () {
  'use strict';

  var e = '\\.([0-9](_*[0-9])*)',
      n = '[0-9a-fA-F](_*[0-9a-fA-F])*',
      a = {
    className: 'number',
    variants: [{
      begin: "(\\b([0-9](_*[0-9])*)((".concat(e, ")|\\.)?|(").concat(e, "))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b")
    }, {
      begin: "\\b([0-9](_*[0-9])*)((".concat(e, ")[fFdD]?\\b|\\.([fFdD]\\b)?)")
    }, {
      begin: "(".concat(e, ")[fFdD]?\\b")
    }, {
      begin: '\\b([0-9](_*[0-9])*)[fFdD]\\b'
    }, {
      begin: "\\b0[xX]((".concat(n, ")\\.?|(").concat(n, ")?\\.(").concat(n, "))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b")
    }, {
      begin: '\\b(0|[1-9](_*[0-9])*)[lL]?\\b'
    }, {
      begin: "\\b0[xX](".concat(n, ")[lL]?\\b")
    }, {
      begin: '\\b0(_*[0-7])*[lL]?\\b'
    }, {
      begin: '\\b0[bB][01](_*[01])*[lL]?\\b'
    }],
    relevance: 0
  };
  return function (e) {
    var n = {
      keyword: 'abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual',
      built_in: 'Byte Short Char Int Long Boolean Float Double Void Unit Nothing',
      literal: 'true false null'
    },
        i = {
      className: 'symbol',
      begin: e.UNDERSCORE_IDENT_RE + '@'
    },
        s = {
      className: 'subst',
      begin: /\$\{/,
      end: /\}/,
      contains: [e.C_NUMBER_MODE]
    },
        t = {
      className: 'variable',
      begin: '\\$' + e.UNDERSCORE_IDENT_RE
    },
        r = {
      className: 'string',
      variants: [{
        begin: '"""',
        end: '"""(?=[^"])',
        contains: [t, s]
      }, {
        begin: "'",
        end: "'",
        illegal: /\n/,
        contains: [e.BACKSLASH_ESCAPE]
      }, {
        begin: '"',
        end: '"',
        illegal: /\n/,
        contains: [e.BACKSLASH_ESCAPE, t, s]
      }]
    };
    s.contains.push(r);
    var l = {
      className: 'meta',
      begin: '@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*' + e.UNDERSCORE_IDENT_RE + ')?'
    },
        c = {
      className: 'meta',
      begin: '@' + e.UNDERSCORE_IDENT_RE,
      contains: [{
        begin: /\(/,
        end: /\)/,
        contains: [e.inherit(r, {
          className: 'meta-string'
        })]
      }]
    },
        o = a,
        b = e.COMMENT('/\\*', '\\*/', {
      contains: [e.C_BLOCK_COMMENT_MODE]
    }),
        E = {
      variants: [{
        className: 'type',
        begin: e.UNDERSCORE_IDENT_RE
      }, {
        begin: /\(/,
        end: /\)/,
        contains: []
      }]
    },
        d = E;
    return d.variants[1].contains = [E], E.variants[1].contains = [d], {
      name: 'Kotlin',
      aliases: ['kt', 'kts'],
      keywords: n,
      contains: [e.COMMENT('/\\*\\*', '\\*/', {
        relevance: 0,
        contains: [{
          className: 'doctag',
          begin: '@[A-Za-z]+'
        }]
      }), e.C_LINE_COMMENT_MODE, b, {
        className: 'keyword',
        begin: /\b(break|continue|return|this)\b/,
        starts: {
          contains: [{
            className: 'symbol',
            begin: /@\w+/
          }]
        }
      }, i, l, c, {
        className: 'function',
        beginKeywords: 'fun',
        end: '[(]|$',
        returnBegin: !0,
        excludeEnd: !0,
        keywords: n,
        relevance: 5,
        contains: [{
          begin: e.UNDERSCORE_IDENT_RE + '\\s*\\(',
          returnBegin: !0,
          relevance: 0,
          contains: [e.UNDERSCORE_TITLE_MODE]
        }, {
          className: 'type',
          begin: /</,
          end: />/,
          keywords: 'reified',
          relevance: 0
        }, {
          className: 'params',
          begin: /\(/,
          end: /\)/,
          endsParent: !0,
          keywords: n,
          relevance: 0,
          contains: [{
            begin: /:/,
            end: /[=,\/]/,
            endsWithParent: !0,
            contains: [E, e.C_LINE_COMMENT_MODE, b],
            relevance: 0
          }, e.C_LINE_COMMENT_MODE, b, l, c, r, e.C_NUMBER_MODE]
        }, b]
      }, {
        className: 'class',
        beginKeywords: 'class interface trait',
        end: /[:\{(]|$/,
        excludeEnd: !0,
        illegal: 'extends implements',
        contains: [{
          beginKeywords: 'public protected internal private constructor'
        }, e.UNDERSCORE_TITLE_MODE, {
          className: 'type',
          begin: /</,
          end: />/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0
        }, {
          className: 'type',
          begin: /[,:]\s*/,
          end: /[<\(,]|$/,
          excludeBegin: !0,
          returnEnd: !0
        }, l, c]
      }, r, {
        className: 'meta',
        begin: '^#!/usr/bin/env',
        end: '$',
        illegal: '\n'
      }, o]
    };
  };
}());
hljs.registerLanguage('less', function () {
  'use strict';

  var e = ['a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'blockquote', 'body', 'button', 'canvas', 'caption', 'cite', 'code', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt', 'em', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'mark', 'menu', 'nav', 'object', 'ol', 'p', 'q', 'quote', 'samp', 'section', 'span', 'strong', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'ul', 'var', 'video'],
      t = ['any-hover', 'any-pointer', 'aspect-ratio', 'color', 'color-gamut', 'color-index', 'device-aspect-ratio', 'device-height', 'device-width', 'display-mode', 'forced-colors', 'grid', 'height', 'hover', 'inverted-colors', 'monochrome', 'orientation', 'overflow-block', 'overflow-inline', 'pointer', 'prefers-color-scheme', 'prefers-contrast', 'prefers-reduced-motion', 'prefers-reduced-transparency', 'resolution', 'scan', 'scripting', 'update', 'width', 'min-width', 'max-width', 'min-height', 'max-height'],
      i = ['active', 'any-link', 'blank', 'checked', 'current', 'default', 'defined', 'dir', 'disabled', 'drop', 'empty', 'enabled', 'first', 'first-child', 'first-of-type', 'fullscreen', 'future', 'focus', 'focus-visible', 'focus-within', 'has', 'host', 'host-context', 'hover', 'indeterminate', 'in-range', 'invalid', 'is', 'lang', 'last-child', 'last-of-type', 'left', 'link', 'local-link', 'not', 'nth-child', 'nth-col', 'nth-last-child', 'nth-last-col', 'nth-last-of-type', 'nth-of-type', 'only-child', 'only-of-type', 'optional', 'out-of-range', 'past', 'placeholder-shown', 'read-only', 'read-write', 'required', 'right', 'root', 'scope', 'target', 'target-within', 'user-invalid', 'valid', 'visited', 'where'],
      o = ['after', 'backdrop', 'before', 'cue', 'cue-region', 'first-letter', 'first-line', 'grammar-error', 'marker', 'part', 'placeholder', 'selection', 'slotted', 'spelling-error'],
      n = ['align-content', 'align-items', 'align-self', 'animation', 'animation-delay', 'animation-direction', 'animation-duration', 'animation-fill-mode', 'animation-iteration-count', 'animation-name', 'animation-play-state', 'animation-timing-function', 'auto', 'backface-visibility', 'background', 'background-attachment', 'background-clip', 'background-color', 'background-image', 'background-origin', 'background-position', 'background-repeat', 'background-size', 'border', 'border-bottom', 'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-style', 'border-bottom-width', 'border-collapse', 'border-color', 'border-image', 'border-image-outset', 'border-image-repeat', 'border-image-slice', 'border-image-source', 'border-image-width', 'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-radius', 'border-right', 'border-right-color', 'border-right-style', 'border-right-width', 'border-spacing', 'border-style', 'border-top', 'border-top-color', 'border-top-left-radius', 'border-top-right-radius', 'border-top-style', 'border-top-width', 'border-width', 'bottom', 'box-decoration-break', 'box-shadow', 'box-sizing', 'break-after', 'break-before', 'break-inside', 'caption-side', 'clear', 'clip', 'clip-path', 'color', 'column-count', 'column-fill', 'column-gap', 'column-rule', 'column-rule-color', 'column-rule-style', 'column-rule-width', 'column-span', 'column-width', 'columns', 'content', 'counter-increment', 'counter-reset', 'cursor', 'direction', 'display', 'empty-cells', 'filter', 'flex', 'flex-basis', 'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap', 'float', 'font', 'font-display', 'font-family', 'font-feature-settings', 'font-kerning', 'font-language-override', 'font-size', 'font-size-adjust', 'font-smoothing', 'font-stretch', 'font-style', 'font-variant', 'font-variant-ligatures', 'font-variation-settings', 'font-weight', 'height', 'hyphens', 'icon', 'image-orientation', 'image-rendering', 'image-resolution', 'ime-mode', 'inherit', 'initial', 'justify-content', 'left', 'letter-spacing', 'line-height', 'list-style', 'list-style-image', 'list-style-position', 'list-style-type', 'margin', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'marks', 'mask', 'max-height', 'max-width', 'min-height', 'min-width', 'nav-down', 'nav-index', 'nav-left', 'nav-right', 'nav-up', 'none', 'normal', 'object-fit', 'object-position', 'opacity', 'order', 'orphans', 'outline', 'outline-color', 'outline-offset', 'outline-style', 'outline-width', 'overflow', 'overflow-wrap', 'overflow-x', 'overflow-y', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'page-break-after', 'page-break-before', 'page-break-inside', 'perspective', 'perspective-origin', 'pointer-events', 'position', 'quotes', 'resize', 'right', 'src', 'tab-size', 'table-layout', 'text-align', 'text-align-last', 'text-decoration', 'text-decoration-color', 'text-decoration-line', 'text-decoration-style', 'text-indent', 'text-overflow', 'text-rendering', 'text-shadow', 'text-transform', 'text-underline-position', 'top', 'transform', 'transform-origin', 'transform-style', 'transition', 'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function', 'unicode-bidi', 'vertical-align', 'visibility', 'white-space', 'widows', 'width', 'word-break', 'word-spacing', 'word-wrap', 'z-index'].reverse(),
      r = i.concat(o);
  return function (a) {
    var s = function (e) {
      return {
        IMPORTANT: {
          className: 'meta',
          begin: '!important'
        },
        HEXCOLOR: {
          className: 'number',
          begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
        },
        ATTRIBUTE_SELECTOR_MODE: {
          className: 'selector-attr',
          begin: /\[/,
          end: /\]/,
          illegal: '$',
          contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        }
      };
    }(a),
        l = r,
        d = '([\\w-]+|@\\{[\\w-]+\\})',
        c = [],
        g = [],
        b = function b(e) {
      return {
        className: 'string',
        begin: '~?' + e + '.*?' + e
      };
    },
        m = function m(e, t, i) {
      return {
        className: e,
        begin: t,
        relevance: i
      };
    },
        u = {
      $pattern: /[a-z-]+/,
      keyword: 'and or not only',
      attribute: t.join(' ')
    },
        p = {
      begin: '\\(',
      end: '\\)',
      contains: g,
      keywords: u,
      relevance: 0
    };

    g.push(a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, b("'"), b('"'), a.CSS_NUMBER_MODE, {
      begin: '(url|data-uri)\\(',
      starts: {
        className: 'string',
        end: '[\\)\\n]',
        excludeEnd: !0
      }
    }, s.HEXCOLOR, p, m('variable', '@@?[\\w-]+', 10), m('variable', '@\\{[\\w-]+\\}'), m('built_in', '~?`[^`]*?`'), {
      className: 'attribute',
      begin: '[\\w-]+\\s*:',
      end: ':',
      returnBegin: !0,
      excludeEnd: !0
    }, s.IMPORTANT);
    var f = g.concat({
      begin: /\{/,
      end: /\}/,
      contains: c
    }),
        h = {
      beginKeywords: 'when',
      endsWithParent: !0,
      contains: [{
        beginKeywords: 'and not'
      }].concat(g)
    },
        w = {
      begin: d + '\\s*:',
      returnBegin: !0,
      end: /[;}]/,
      relevance: 0,
      contains: [{
        begin: /-(webkit|moz|ms|o)-/
      }, {
        className: 'attribute',
        begin: '\\b(' + n.join('|') + ')\\b',
        end: /(?=:)/,
        starts: {
          endsWithParent: !0,
          illegal: '[<=$]',
          relevance: 0,
          contains: g
        }
      }]
    },
        v = {
      className: 'keyword',
      begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
      starts: {
        end: '[;{}]',
        keywords: u,
        returnEnd: !0,
        contains: g,
        relevance: 0
      }
    },
        y = {
      className: 'variable',
      variants: [{
        begin: '@[\\w-]+\\s*:',
        relevance: 15
      }, {
        begin: '@[\\w-]+'
      }],
      starts: {
        end: '[;}]',
        returnEnd: !0,
        contains: f
      }
    },
        k = {
      variants: [{
        begin: '[\\.#:&\\[>]',
        end: '[;{}]'
      }, {
        begin: d,
        end: /\{/
      }],
      returnBegin: !0,
      returnEnd: !0,
      illegal: '[<=\'$"]',
      relevance: 0,
      contains: [a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, h, m('keyword', 'all\\b'), m('variable', '@\\{[\\w-]+\\}'), {
        begin: '\\b(' + e.join('|') + ')\\b',
        className: 'selector-tag'
      }, m('selector-tag', d + '%?', 0), m('selector-id', '#' + d), m('selector-class', '\\.' + d, 0), m('selector-tag', '&', 0), s.ATTRIBUTE_SELECTOR_MODE, {
        className: 'selector-pseudo',
        begin: ':(' + i.join('|') + ')'
      }, {
        className: 'selector-pseudo',
        begin: '::(' + o.join('|') + ')'
      }, {
        begin: '\\(',
        end: '\\)',
        contains: f
      }, {
        begin: '!important'
      }]
    },
        E = {
      begin: "[\\w-]+:(:)?(".concat(l.join('|'), ")"),
      returnBegin: !0,
      contains: [k]
    };
    return c.push(a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, v, y, E, w, k), {
      name: 'Less',
      case_insensitive: !0,
      illegal: '[=>\'/<($"]',
      contains: c
    };
  };
}());
hljs.registerLanguage('lua', function () {
  'use strict';

  return function (e) {
    var t = '\\[=*\\[',
        a = '\\]=*\\]',
        n = {
      begin: t,
      end: a,
      contains: ['self']
    },
        o = [e.COMMENT('--(?!\\[=*\\[)', '$'), e.COMMENT('--\\[=*\\[', a, {
      contains: [n],
      relevance: 10
    })];
    return {
      name: 'Lua',
      keywords: {
        $pattern: e.UNDERSCORE_IDENT_RE,
        literal: 'true false nil',
        keyword: 'and break do else elseif end for goto if in local not or repeat return then until while',
        built_in: '_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove'
      },
      contains: o.concat([{
        className: 'function',
        beginKeywords: 'function',
        end: '\\)',
        contains: [e.inherit(e.TITLE_MODE, {
          begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'
        }), {
          className: 'params',
          begin: '\\(',
          endsWithParent: !0,
          contains: o
        }].concat(o)
      }, e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
        className: 'string',
        begin: t,
        end: a,
        contains: [n],
        relevance: 5
      }])
    };
  };
}());
hljs.registerLanguage('makefile', function () {
  'use strict';

  return function (e) {
    var i = {
      className: 'variable',
      variants: [{
        begin: '\\$\\(' + e.UNDERSCORE_IDENT_RE + '\\)',
        contains: [e.BACKSLASH_ESCAPE]
      }, {
        begin: /\$[@%<?\^\+\*]/
      }]
    },
        a = {
      className: 'string',
      begin: /"/,
      end: /"/,
      contains: [e.BACKSLASH_ESCAPE, i]
    },
        n = {
      className: 'variable',
      begin: /\$\([\w-]+\s/,
      end: /\)/,
      keywords: {
        built_in: 'subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value'
      },
      contains: [i]
    },
        s = {
      begin: '^' + e.UNDERSCORE_IDENT_RE + '\\s*(?=[:+?]?=)'
    },
        r = {
      className: 'section',
      begin: /^[^\s]+:/,
      end: /$/,
      contains: [i]
    };
    return {
      name: 'Makefile',
      aliases: ['mk', 'mak', 'make'],
      keywords: {
        $pattern: /[\w-]+/,
        keyword: 'define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath'
      },
      contains: [e.HASH_COMMENT_MODE, i, a, n, s, {
        className: 'meta',
        begin: /^\.PHONY:/,
        end: /$/,
        keywords: {
          $pattern: /[\.\w]+/,
          'meta-keyword': '.PHONY'
        }
      }, r]
    };
  };
}());
hljs.registerLanguage('xml', function () {
  'use strict';

  function e(e) {
    return e ? 'string' == typeof e ? e : e.source : null;
  }

  function n(e) {
    return a('(?=', e, ')');
  }

  function a() {
    for (var _len12 = arguments.length, n = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      n[_key12] = arguments[_key12];
    }

    return n.map(function (n) {
      return e(n);
    }).join('');
  }

  function s() {
    for (var _len13 = arguments.length, n = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
      n[_key13] = arguments[_key13];
    }

    return '(' + n.map(function (n) {
      return e(n);
    }).join('|') + ')';
  }

  return function (e) {
    var t = a(/[A-Z_]/, a('(', /[A-Z0-9_.-]*:/, ')?'), /[A-Z0-9_.-]*/),
        i = {
      className: 'symbol',
      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    },
        r = {
      begin: /\s/,
      contains: [{
        className: 'meta-keyword',
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }]
    },
        c = e.inherit(r, {
      begin: /\(/,
      end: /\)/
    }),
        l = e.inherit(e.APOS_STRING_MODE, {
      className: 'meta-string'
    }),
        g = e.inherit(e.QUOTE_STRING_MODE, {
      className: 'meta-string'
    }),
        m = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [{
        className: 'attr',
        begin: /[A-Za-z0-9._:-]+/,
        relevance: 0
      }, {
        begin: /=\s*/,
        relevance: 0,
        contains: [{
          className: 'string',
          endsParent: !0,
          variants: [{
            begin: /"/,
            end: /"/,
            contains: [i]
          }, {
            begin: /'/,
            end: /'/,
            contains: [i]
          }, {
            begin: /[^\s"'=<>`]+/
          }]
        }]
      }]
    };
    return {
      name: 'HTML, XML',
      aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
      case_insensitive: !0,
      contains: [{
        className: 'meta',
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [r, g, l, c, {
          begin: /\[/,
          end: /\]/,
          contains: [{
            className: 'meta',
            begin: /<![a-z]/,
            end: />/,
            contains: [r, c, g, l]
          }]
        }]
      }, e.COMMENT(/<!--/, /-->/, {
        relevance: 10
      }), {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      }, i, {
        className: 'meta',
        begin: /<\?xml/,
        end: /\?>/,
        relevance: 10
      }, {
        className: 'tag',
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: {
          name: 'style'
        },
        contains: [m],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: ['css', 'xml']
        }
      }, {
        className: 'tag',
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: {
          name: 'script'
        },
        contains: [m],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: ['javascript', 'handlebars', 'xml']
        }
      }, {
        className: 'tag',
        begin: /<>|<\/>/
      }, {
        className: 'tag',
        begin: a(/</, n(a(t, s(/\/>/, />/, /\s/)))),
        end: /\/?>/,
        contains: [{
          className: 'name',
          begin: t,
          relevance: 0,
          starts: m
        }]
      }, {
        className: 'tag',
        begin: a(/<\//, n(a(t, />/))),
        contains: [{
          className: 'name',
          begin: t,
          relevance: 0
        }, {
          begin: />/,
          relevance: 0,
          endsParent: !0
        }]
      }]
    };
  };
}());
hljs.registerLanguage('markdown', function () {
  'use strict';

  function n() {
    for (var _len14 = arguments.length, n = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
      n[_key14] = arguments[_key14];
    }

    return n.map(function (n) {
      return (e = n) ? 'string' == typeof e ? e : e.source : null;
      var e;
    }).join('');
  }

  return function (e) {
    var a = {
      begin: /<\/?[A-Za-z_]/,
      end: '>',
      subLanguage: 'xml',
      relevance: 0
    },
        i = {
      variants: [{
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      }, {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      }, {
        begin: n(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
        relevance: 2
      }, {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      }, {
        begin: /\[.+?\]\(.*?\)/,
        relevance: 0
      }],
      returnBegin: !0,
      contains: [{
        className: 'string',
        relevance: 0,
        begin: '\\[',
        end: '\\]',
        excludeBegin: !0,
        returnEnd: !0
      }, {
        className: 'link',
        relevance: 0,
        begin: '\\]\\(',
        end: '\\)',
        excludeBegin: !0,
        excludeEnd: !0
      }, {
        className: 'symbol',
        relevance: 0,
        begin: '\\]\\[',
        end: '\\]',
        excludeBegin: !0,
        excludeEnd: !0
      }]
    },
        s = {
      className: 'strong',
      contains: [],
      variants: [{
        begin: /_{2}/,
        end: /_{2}/
      }, {
        begin: /\*{2}/,
        end: /\*{2}/
      }]
    },
        c = {
      className: 'emphasis',
      contains: [],
      variants: [{
        begin: /\*(?!\*)/,
        end: /\*/
      }, {
        begin: /_(?!_)/,
        end: /_/,
        relevance: 0
      }]
    };
    s.contains.push(c), c.contains.push(s);
    var t = [a, i];
    return s.contains = s.contains.concat(t), c.contains = c.contains.concat(t), t = t.concat(s, c), {
      name: 'Markdown',
      aliases: ['md', 'mkdown', 'mkd'],
      contains: [{
        className: 'section',
        variants: [{
          begin: '^#{1,6}',
          end: '$',
          contains: t
        }, {
          begin: '(?=^.+?\\n[=-]{2,}$)',
          contains: [{
            begin: '^[=-]*$'
          }, {
            begin: '^',
            end: '\\n',
            contains: t
          }]
        }]
      }, a, {
        className: 'bullet',
        begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)',
        end: '\\s+',
        excludeEnd: !0
      }, s, c, {
        className: 'quote',
        begin: '^>\\s+',
        contains: t,
        end: '$'
      }, {
        className: 'code',
        variants: [{
          begin: '(`{3,})[^`](.|\\n)*?\\1`*[ ]*'
        }, {
          begin: '(~{3,})[^~](.|\\n)*?\\1~*[ ]*'
        }, {
          begin: '```',
          end: '```+[ ]*$'
        }, {
          begin: '~~~',
          end: '~~~+[ ]*$'
        }, {
          begin: '`.+?`'
        }, {
          begin: '(?=^( {4}|\\t))',
          contains: [{
            begin: '^( {4}|\\t)',
            end: '(\\n)$'
          }],
          relevance: 0
        }]
      }, {
        begin: '^[-\\*]{3,}',
        end: '$'
      }, i, {
        begin: /^\[[^\n]+\]:/,
        returnBegin: !0,
        contains: [{
          className: 'symbol',
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: 'link',
          begin: /:\s*/,
          end: /$/,
          excludeBegin: !0
        }]
      }]
    };
  };
}());
hljs.registerLanguage('nginx', function () {
  'use strict';

  return function (e) {
    var n = {
      className: 'variable',
      variants: [{
        begin: /\$\d+/
      }, {
        begin: /\$\{/,
        end: /\}/
      }, {
        begin: /[$@]/ + e.UNDERSCORE_IDENT_RE
      }]
    },
        a = {
      endsWithParent: !0,
      keywords: {
        $pattern: '[a-z/_]+',
        literal: 'on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll'
      },
      relevance: 0,
      illegal: '=>',
      contains: [e.HASH_COMMENT_MODE, {
        className: 'string',
        contains: [e.BACKSLASH_ESCAPE, n],
        variants: [{
          begin: /"/,
          end: /"/
        }, {
          begin: /'/,
          end: /'/
        }]
      }, {
        begin: '([a-z]+):/',
        end: '\\s',
        endsWithParent: !0,
        excludeEnd: !0,
        contains: [n]
      }, {
        className: 'regexp',
        contains: [e.BACKSLASH_ESCAPE, n],
        variants: [{
          begin: '\\s\\^',
          end: '\\s|\\{|;',
          returnEnd: !0
        }, {
          begin: '~\\*?\\s+',
          end: '\\s|\\{|;',
          returnEnd: !0
        }, {
          begin: '\\*(\\.[a-z\\-]+)+'
        }, {
          begin: '([a-z\\-]+\\.)+\\*'
        }]
      }, {
        className: 'number',
        begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
      }, {
        className: 'number',
        begin: '\\b\\d+[kKmMgGdshdwy]*\\b',
        relevance: 0
      }, n]
    };
    return {
      name: 'Nginx config',
      aliases: ['nginxconf'],
      contains: [e.HASH_COMMENT_MODE, {
        begin: e.UNDERSCORE_IDENT_RE + '\\s+\\{',
        returnBegin: !0,
        end: /\{/,
        contains: [{
          className: 'section',
          begin: e.UNDERSCORE_IDENT_RE
        }],
        relevance: 0
      }, {
        begin: e.UNDERSCORE_IDENT_RE + '\\s',
        end: ';|\\{',
        returnBegin: !0,
        contains: [{
          className: 'attribute',
          begin: e.UNDERSCORE_IDENT_RE,
          starts: a
        }],
        relevance: 0
      }],
      illegal: '[^\\s\\}]'
    };
  };
}());
hljs.registerLanguage('objectivec', function () {
  'use strict';

  return function (e) {
    var n = /[a-zA-Z@][a-zA-Z0-9_]*/,
        _ = {
      $pattern: n,
      keyword: '@interface @class @protocol @implementation'
    };
    return {
      name: 'Objective-C',
      aliases: ['mm', 'objc', 'obj-c', 'obj-c++', 'objective-c++'],
      keywords: {
        $pattern: n,
        keyword: 'int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN',
        literal: 'false true FALSE TRUE nil YES NO NULL',
        built_in: 'BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once'
      },
      illegal: '</',
      contains: [{
        className: 'built_in',
        begin: '\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+'
      }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
        className: 'string',
        variants: [{
          begin: '@"',
          end: '"',
          illegal: '\\n',
          contains: [e.BACKSLASH_ESCAPE]
        }]
      }, {
        className: 'meta',
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          'meta-keyword': 'if else elif endif define undef warning error line pragma ifdef ifndef include'
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, e.inherit(e.QUOTE_STRING_MODE, {
          className: 'meta-string'
        }), {
          className: 'meta-string',
          begin: /<.*?>/,
          end: /$/,
          illegal: '\\n'
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, {
        className: 'class',
        begin: '(' + _.keyword.split(' ').join('|') + ')\\b',
        end: /(\{|$)/,
        excludeEnd: !0,
        keywords: _,
        contains: [e.UNDERSCORE_TITLE_MODE]
      }, {
        begin: '\\.' + e.UNDERSCORE_IDENT_RE,
        relevance: 0
      }]
    };
  };
}());
hljs.registerLanguage('perl', function () {
  'use strict';

  function e(e) {
    return e ? 'string' == typeof e ? e : e.source : null;
  }

  function n() {
    for (var _len15 = arguments.length, n = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
      n[_key15] = arguments[_key15];
    }

    return n.map(function (n) {
      return e(n);
    }).join('');
  }

  function t() {
    for (var _len16 = arguments.length, n = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
      n[_key16] = arguments[_key16];
    }

    return '(' + n.map(function (n) {
      return e(n);
    }).join('|') + ')';
  }

  return function (e) {
    var r = /[dualxmsipngr]{0,12}/,
        s = {
      $pattern: /[\w.]+/,
      keyword: 'abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0'
    },
        i = {
      className: 'subst',
      begin: '[$@]\\{',
      end: '\\}',
      keywords: s
    },
        a = {
      begin: /->\{/,
      end: /\}/
    },
        o = {
      variants: [{
        begin: /\$\d/
      }, {
        begin: n(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, '(?![A-Za-z])(?![@$%])')
      }, {
        begin: /[$%@][^\s\w{]/,
        relevance: 0
      }]
    },
        c = [e.BACKSLASH_ESCAPE, i, o],
        g = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
        l = function l(e, t) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '\\1';
      var i = '\\1' === s ? s : n(s, t);
      return n(n('(?:', e, ')'), t, /(?:\\.|[^\\\/])*?/, i, /(?:\\.|[^\\\/])*?/, s, r);
    },
        d = function d(e, t, s) {
      return n(n('(?:', e, ')'), t, /(?:\\.|[^\\\/])*?/, s, r);
    },
        p = [o, e.HASH_COMMENT_MODE, e.COMMENT(/^=\w/, /=cut/, {
      endsWithParent: !0
    }), a, {
      className: 'string',
      contains: c,
      variants: [{
        begin: 'q[qwxr]?\\s*\\(',
        end: '\\)',
        relevance: 5
      }, {
        begin: 'q[qwxr]?\\s*\\[',
        end: '\\]',
        relevance: 5
      }, {
        begin: 'q[qwxr]?\\s*\\{',
        end: '\\}',
        relevance: 5
      }, {
        begin: 'q[qwxr]?\\s*\\|',
        end: '\\|',
        relevance: 5
      }, {
        begin: 'q[qwxr]?\\s*<',
        end: '>',
        relevance: 5
      }, {
        begin: 'qw\\s+q',
        end: 'q',
        relevance: 5
      }, {
        begin: "'",
        end: "'",
        contains: [e.BACKSLASH_ESCAPE]
      }, {
        begin: '"',
        end: '"'
      }, {
        begin: '`',
        end: '`',
        contains: [e.BACKSLASH_ESCAPE]
      }, {
        begin: /\{\w+\}/,
        relevance: 0
      }, {
        begin: '-?\\w+\\s*=>',
        relevance: 0
      }]
    }, {
      className: 'number',
      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
      relevance: 0
    }, {
      begin: '(\\/\\/|' + e.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
      keywords: 'split return print reverse grep',
      relevance: 0,
      contains: [e.HASH_COMMENT_MODE, {
        className: 'regexp',
        variants: [{
          begin: l('s|tr|y', t.apply(void 0, g))
        }, {
          begin: l('s|tr|y', '\\(', '\\)')
        }, {
          begin: l('s|tr|y', '\\[', '\\]')
        }, {
          begin: l('s|tr|y', '\\{', '\\}')
        }],
        relevance: 2
      }, {
        className: 'regexp',
        variants: [{
          begin: /(m|qr)\/\//,
          relevance: 0
        }, {
          begin: d('(?:m|qr)?', /\//, /\//)
        }, {
          begin: d('m|qr', t.apply(void 0, g), /\1/)
        }, {
          begin: d('m|qr', /\(/, /\)/)
        }, {
          begin: d('m|qr', /\[/, /\]/)
        }, {
          begin: d('m|qr', /\{/, /\}/)
        }]
      }]
    }, {
      className: 'function',
      beginKeywords: 'sub',
      end: '(\\s*\\(.*?\\))?[;{]',
      excludeEnd: !0,
      relevance: 5,
      contains: [e.TITLE_MODE]
    }, {
      begin: '-\\w\\b',
      relevance: 0
    }, {
      begin: '^__DATA__$',
      end: '^__END__$',
      subLanguage: 'mojolicious',
      contains: [{
        begin: '^@@.*',
        end: '$',
        className: 'comment'
      }]
    }];

    return i.contains = p, a.contains = p, {
      name: 'Perl',
      aliases: ['pl', 'pm'],
      keywords: s,
      contains: p
    };
  };
}());
hljs.registerLanguage('php', function () {
  'use strict';

  return function (e) {
    var r = {
      className: 'variable',
      begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*(?![A-Za-z0-9])(?![$])'
    },
        t = {
      className: 'meta',
      variants: [{
        begin: /<\?php/,
        relevance: 10
      }, {
        begin: /<\?[=]?/
      }, {
        begin: /\?>/
      }]
    },
        a = {
      className: 'subst',
      variants: [{
        begin: /\$\w+/
      }, {
        begin: /\{\$/,
        end: /\}/
      }]
    },
        n = e.inherit(e.APOS_STRING_MODE, {
      illegal: null
    }),
        i = e.inherit(e.QUOTE_STRING_MODE, {
      illegal: null,
      contains: e.QUOTE_STRING_MODE.contains.concat(a)
    }),
        o = e.END_SAME_AS_BEGIN({
      begin: /<<<[ \t]*(\w+)\n/,
      end: /[ \t]*(\w+)\b/,
      contains: e.QUOTE_STRING_MODE.contains.concat(a)
    }),
        l = {
      className: 'string',
      contains: [e.BACKSLASH_ESCAPE, t],
      variants: [e.inherit(n, {
        begin: "b'",
        end: "'"
      }), e.inherit(i, {
        begin: 'b"',
        end: '"'
      }), i, n, o]
    },
        s = {
      className: 'number',
      variants: [{
        begin: '\\b0b[01]+(?:_[01]+)*\\b'
      }, {
        begin: '\\b0o[0-7]+(?:_[0-7]+)*\\b'
      }, {
        begin: '\\b0x[\\da-f]+(?:_[\\da-f]+)*\\b'
      }, {
        begin: '(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:e[+-]?\\d+)?'
      }],
      relevance: 0
    },
        c = {
      keyword: '__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile enum eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 mixed new object or private protected public real return string switch throw trait try unset use var void while xor yield',
      literal: 'false null true',
      built_in: 'Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException UnhandledMatchError ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Stringable Throwable Traversable WeakReference WeakMap Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass'
    };
    return {
      aliases: ['php3', 'php4', 'php5', 'php6', 'php7', 'php8'],
      case_insensitive: !0,
      keywords: c,
      contains: [e.HASH_COMMENT_MODE, e.COMMENT('//', '$', {
        contains: [t]
      }), e.COMMENT('/\\*', '\\*/', {
        contains: [{
          className: 'doctag',
          begin: '@[A-Za-z]+'
        }]
      }), e.COMMENT('__halt_compiler.+?;', !1, {
        endsWithParent: !0,
        keywords: '__halt_compiler'
      }), t, {
        className: 'keyword',
        begin: /\$this\b/
      }, r, {
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      }, {
        className: 'function',
        relevance: 0,
        beginKeywords: 'fn function',
        end: /[;{]/,
        excludeEnd: !0,
        illegal: '[$%\\[]',
        contains: [{
          beginKeywords: 'use'
        }, e.UNDERSCORE_TITLE_MODE, {
          begin: '=>',
          endsParent: !0
        }, {
          className: 'params',
          begin: '\\(',
          end: '\\)',
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: c,
          contains: ['self', r, e.C_BLOCK_COMMENT_MODE, l, s]
        }]
      }, {
        className: 'class',
        variants: [{
          beginKeywords: 'enum',
          illegal: /[($"]/
        }, {
          beginKeywords: 'class interface trait',
          illegal: /[:($"]/
        }],
        relevance: 0,
        end: /\{/,
        excludeEnd: !0,
        contains: [{
          beginKeywords: 'extends implements'
        }, e.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: 'namespace',
        relevance: 0,
        end: ';',
        illegal: /[.']/,
        contains: [e.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: 'use',
        relevance: 0,
        end: ';',
        contains: [e.UNDERSCORE_TITLE_MODE]
      }, l, s]
    };
  };
}());
hljs.registerLanguage('php-template', function () {
  'use strict';

  return function (n) {
    return {
      name: 'PHP template',
      subLanguage: 'xml',
      contains: [{
        begin: /<\?(php|=)?/,
        end: /\?>/,
        subLanguage: 'php',
        contains: [{
          begin: '/\\*',
          end: '\\*/',
          skip: !0
        }, {
          begin: 'b"',
          end: '"',
          skip: !0
        }, {
          begin: "b'",
          end: "'",
          skip: !0
        }, n.inherit(n.APOS_STRING_MODE, {
          illegal: null,
          className: null,
          contains: null,
          skip: !0
        }), n.inherit(n.QUOTE_STRING_MODE, {
          illegal: null,
          className: null,
          contains: null,
          skip: !0
        })]
      }]
    };
  };
}());
hljs.registerLanguage('plaintext', function () {
  'use strict';

  return function (t) {
    return {
      name: 'Plain text',
      aliases: ['text', 'txt'],
      disableAutodetect: !0
    };
  };
}());
hljs.registerLanguage('properties', function () {
  'use strict';

  return function (e) {
    var n = '[ \\t\\f]*',
        a = n + '[:=]' + n,
        t = '(' + a + '|[ \\t\\f]+)',
        r = '([^\\\\\\W:= \\t\\f\\n]|\\\\.)+',
        s = '([^\\\\:= \\t\\f\\n]|\\\\.)+',
        i = {
      end: t,
      relevance: 0,
      starts: {
        className: 'string',
        end: /$/,
        relevance: 0,
        contains: [{
          begin: '\\\\\\\\'
        }, {
          begin: '\\\\\\n'
        }]
      }
    };
    return {
      name: '.properties',
      case_insensitive: !0,
      illegal: /\S/,
      contains: [e.COMMENT('^\\s*[!#]', '$'), {
        returnBegin: !0,
        variants: [{
          begin: r + a,
          relevance: 1
        }, {
          begin: r + '[ \\t\\f]+',
          relevance: 0
        }],
        contains: [{
          className: 'attr',
          begin: r,
          endsParent: !0,
          relevance: 0
        }],
        starts: i
      }, {
        begin: s + t,
        returnBegin: !0,
        relevance: 0,
        contains: [{
          className: 'meta',
          begin: s,
          endsParent: !0,
          relevance: 0
        }],
        starts: i
      }, {
        className: 'attr',
        relevance: 0,
        begin: s + n + '$'
      }]
    };
  };
}());
hljs.registerLanguage('python', function () {
  'use strict';

  return function (e) {
    var n = {
      $pattern: /[A-Za-z]\w+|__\w+__/,
      keyword: ['and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal|10', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'],
      built_in: ['__import__', 'abs', 'all', 'any', 'ascii', 'bin', 'bool', 'breakpoint', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'compile', 'complex', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property', 'range', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip'],
      literal: ['__debug__', 'Ellipsis', 'False', 'None', 'NotImplemented', 'True'],
      type: ['Any', 'Callable', 'Coroutine', 'Dict', 'List', 'Literal', 'Generic', 'Optional', 'Sequence', 'Set', 'Tuple', 'Type', 'Union']
    },
        a = {
      className: 'meta',
      begin: /^(>>>|\.\.\.) /
    },
        i = {
      className: 'subst',
      begin: /\{/,
      end: /\}/,
      keywords: n,
      illegal: /#/
    },
        s = {
      begin: /\{\{/,
      relevance: 0
    },
        t = {
      className: 'string',
      contains: [e.BACKSLASH_ESCAPE],
      variants: [{
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [e.BACKSLASH_ESCAPE, a],
        relevance: 10
      }, {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [e.BACKSLASH_ESCAPE, a],
        relevance: 10
      }, {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [e.BACKSLASH_ESCAPE, a, s, i]
      }, {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [e.BACKSLASH_ESCAPE, a, s, i]
      }, {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      }, {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      }, {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      }, {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      }, {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [e.BACKSLASH_ESCAPE, s, i]
      }, {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [e.BACKSLASH_ESCAPE, s, i]
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
    },
        r = '[0-9](_?[0-9])*',
        l = "(\\b(".concat(r, "))?\\.(").concat(r, ")|\\b(").concat(r, ")\\."),
        b = {
      className: 'number',
      relevance: 0,
      variants: [{
        begin: "(\\b(".concat(r, ")|(").concat(l, "))[eE][+-]?(").concat(r, ")[jJ]?\\b")
      }, {
        begin: "(".concat(l, ")[jJ]?")
      }, {
        begin: '\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b'
      }, {
        begin: '\\b0[bB](_?[01])+[lL]?\\b'
      }, {
        begin: '\\b0[oO](_?[0-7])+[lL]?\\b'
      }, {
        begin: '\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b'
      }, {
        begin: "\\b(".concat(r, ")[jJ]\\b")
      }]
    },
        o = {
      className: 'comment',
      begin: (d = /# type:/, function () {
        for (var _len17 = arguments.length, e = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
          e[_key17] = arguments[_key17];
        }

        return e.map(function (e) {
          return function (e) {
            return e ? 'string' == typeof e ? e : e.source : null;
          }(e);
        }).join('');
      }('(?=', d, ')')),
      end: /$/,
      keywords: n,
      contains: [{
        begin: /# type:/
      }, {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }]
    },
        c = {
      className: 'params',
      variants: [{
        className: '',
        begin: /\(\s*\)/,
        skip: !0
      }, {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: n,
        contains: ['self', a, b, t, e.HASH_COMMENT_MODE]
      }]
    };
    var d;
    return i.contains = [t, b, a], {
      name: 'Python',
      aliases: ['py', 'gyp', 'ipython'],
      keywords: n,
      illegal: /(<\/|->|\?)|=>/,
      contains: [a, b, {
        begin: /\bself\b/
      }, {
        beginKeywords: 'if',
        relevance: 0
      }, t, o, e.HASH_COMMENT_MODE, {
        variants: [{
          className: 'function',
          beginKeywords: 'def'
        }, {
          className: 'class',
          beginKeywords: 'class'
        }],
        end: /:/,
        illegal: /[${=;\n,]/,
        contains: [e.UNDERSCORE_TITLE_MODE, c, {
          begin: /->/,
          endsWithParent: !0,
          keywords: n
        }]
      }, {
        className: 'meta',
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [b, c, t]
      }]
    };
  };
}());
hljs.registerLanguage('python-repl', function () {
  'use strict';

  return function (s) {
    return {
      aliases: ['pycon'],
      contains: [{
        className: 'meta',
        starts: {
          end: / |$/,
          starts: {
            end: '$',
            subLanguage: 'python'
          }
        },
        variants: [{
          begin: /^>>>(?=[ ]|$)/
        }, {
          begin: /^\.\.\.(?=[ ]|$)/
        }]
      }]
    };
  };
}());
hljs.registerLanguage('r', function () {
  'use strict';

  function e() {
    for (var _len18 = arguments.length, e = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
      e[_key18] = arguments[_key18];
    }

    return e.map(function (e) {
      return (a = e) ? 'string' == typeof a ? a : a.source : null;
      var a;
    }).join('');
  }

  return function (a) {
    var n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/;
    return {
      name: 'R',
      illegal: /->/,
      keywords: {
        $pattern: n,
        keyword: 'function if in break next repeat else for while',
        literal: 'NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10',
        built_in: 'LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm'
      },
      compilerExtensions: [function (a, n) {
        if (!a.beforeMatch) return;
        if (a.starts) throw Error('beforeMatch cannot be used with starts');
        var i = Object.assign({}, a);
        Object.keys(a).forEach(function (e) {
          delete a[e];
        }), a.begin = e(i.beforeMatch, e('(?=', i.begin, ')')), a.starts = {
          relevance: 0,
          contains: [Object.assign(i, {
            endsParent: !0
          })]
        }, a.relevance = 0, delete i.beforeMatch;
      }],
      contains: [a.COMMENT(/#'/, /$/, {
        contains: [{
          className: 'doctag',
          begin: '@examples',
          starts: {
            contains: [{
              begin: /\n/
            }, {
              begin: /#'\s*(?=@[a-zA-Z]+)/,
              endsParent: !0
            }, {
              begin: /#'/,
              end: /$/,
              excludeBegin: !0
            }]
          }
        }, {
          className: 'doctag',
          begin: '@param',
          end: /$/,
          contains: [{
            className: 'variable',
            variants: [{
              begin: n
            }, {
              begin: /`(?:\\.|[^`\\])+`/
            }],
            endsParent: !0
          }]
        }, {
          className: 'doctag',
          begin: /@[a-zA-Z]+/
        }, {
          className: 'meta-keyword',
          begin: /\\[a-zA-Z]+/
        }]
      }), a.HASH_COMMENT_MODE, {
        className: 'string',
        contains: [a.BACKSLASH_ESCAPE],
        variants: [a.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\(/,
          end: /\)(-*)"/
        }), a.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\{/,
          end: /\}(-*)"/
        }), a.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\[/,
          end: /\](-*)"/
        }), a.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\(/,
          end: /\)(-*)'/
        }), a.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\{/,
          end: /\}(-*)'/
        }), a.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\[/,
          end: /\](-*)'/
        }), {
          begin: '"',
          end: '"',
          relevance: 0
        }, {
          begin: "'",
          end: "'",
          relevance: 0
        }]
      }, {
        className: 'number',
        relevance: 0,
        beforeMatch: /([^a-zA-Z0-9._])/,
        variants: [{
          match: /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/
        }, {
          match: /0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/
        }, {
          match: /(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/
        }]
      }, {
        begin: '%',
        end: '%'
      }, {
        begin: e(/[a-zA-Z][a-zA-Z_0-9]*/, '\\s+<-\\s+')
      }, {
        begin: '`',
        end: '`',
        contains: [{
          begin: /\\./
        }]
      }]
    };
  };
}());
hljs.registerLanguage('ruby', function () {
  'use strict';

  function e() {
    for (var _len19 = arguments.length, e = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
      e[_key19] = arguments[_key19];
    }

    return e.map(function (e) {
      return (n = e) ? 'string' == typeof n ? n : n.source : null;
      var n;
    }).join('');
  }

  return function (n) {
    var a = '([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)',
        i = {
      keyword: 'and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__',
      built_in: 'proc lambda',
      literal: 'true false nil'
    },
        s = {
      className: 'doctag',
      begin: '@[A-Za-z]+'
    },
        r = {
      begin: '#<',
      end: '>'
    },
        b = [n.COMMENT('#', '$', {
      contains: [s]
    }), n.COMMENT('^=begin', '^=end', {
      contains: [s],
      relevance: 10
    }), n.COMMENT('^__END__', '\\n$')],
        c = {
      className: 'subst',
      begin: /#\{/,
      end: /\}/,
      keywords: i
    },
        t = {
      className: 'string',
      contains: [n.BACKSLASH_ESCAPE, c],
      variants: [{
        begin: /'/,
        end: /'/
      }, {
        begin: /"/,
        end: /"/
      }, {
        begin: /`/,
        end: /`/
      }, {
        begin: /%[qQwWx]?\(/,
        end: /\)/
      }, {
        begin: /%[qQwWx]?\[/,
        end: /\]/
      }, {
        begin: /%[qQwWx]?\{/,
        end: /\}/
      }, {
        begin: /%[qQwWx]?</,
        end: />/
      }, {
        begin: /%[qQwWx]?\//,
        end: /\//
      }, {
        begin: /%[qQwWx]?%/,
        end: /%/
      }, {
        begin: /%[qQwWx]?-/,
        end: /-/
      }, {
        begin: /%[qQwWx]?\|/,
        end: /\|/
      }, {
        begin: /\B\?(\\\d{1,3})/
      }, {
        begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
      }, {
        begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
      }, {
        begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
      }, {
        begin: /\B\?\\(c|C-)[\x20-\x7e]/
      }, {
        begin: /\B\?\\?\S/
      }, {
        begin: /<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,
        returnBegin: !0,
        contains: [{
          begin: /<<[-~]?'?/
        }, n.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          contains: [n.BACKSLASH_ESCAPE, c]
        })]
      }]
    },
        g = '[0-9](_?[0-9])*',
        d = {
      className: 'number',
      relevance: 0,
      variants: [{
        begin: "\\b([1-9](_?[0-9])*|0)(\\.(".concat(g, "))?([eE][+-]?(").concat(g, ")|r)?i?\\b")
      }, {
        begin: '\\b0[dD][0-9](_?[0-9])*r?i?\\b'
      }, {
        begin: '\\b0[bB][0-1](_?[0-1])*r?i?\\b'
      }, {
        begin: '\\b0[oO][0-7](_?[0-7])*r?i?\\b'
      }, {
        begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b'
      }, {
        begin: '\\b0(_?[0-7])+r?i?\\b'
      }]
    },
        l = {
      className: 'params',
      begin: '\\(',
      end: '\\)',
      endsParent: !0,
      keywords: i
    },
        o = [t, {
      className: 'class',
      beginKeywords: 'class module',
      end: '$|;',
      illegal: /=/,
      contains: [n.inherit(n.TITLE_MODE, {
        begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|!)?'
      }), {
        begin: '<\\s*',
        contains: [{
          begin: '(' + n.IDENT_RE + '::)?' + n.IDENT_RE,
          relevance: 0
        }]
      }].concat(b)
    }, {
      className: 'function',
      begin: e(/def\s+/, (_ = a + '\\s*(\\(|;|$)', e('(?=', _, ')'))),
      relevance: 0,
      keywords: 'def',
      end: '$|;',
      contains: [n.inherit(n.TITLE_MODE, {
        begin: a
      }), l].concat(b)
    }, {
      begin: n.IDENT_RE + '::'
    }, {
      className: 'symbol',
      begin: n.UNDERSCORE_IDENT_RE + '(!|\\?)?:',
      relevance: 0
    }, {
      className: 'symbol',
      begin: ':(?!\\s)',
      contains: [t, {
        begin: a
      }],
      relevance: 0
    }, d, {
      className: 'variable',
      begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
    }, {
      className: 'params',
      begin: /\|/,
      end: /\|/,
      relevance: 0,
      keywords: i
    }, {
      begin: '(' + n.RE_STARTERS_RE + '|unless)\\s*',
      keywords: 'unless',
      contains: [{
        className: 'regexp',
        contains: [n.BACKSLASH_ESCAPE, c],
        illegal: /\n/,
        variants: [{
          begin: '/',
          end: '/[a-z]*'
        }, {
          begin: /%r\{/,
          end: /\}[a-z]*/
        }, {
          begin: '%r\\(',
          end: '\\)[a-z]*'
        }, {
          begin: '%r!',
          end: '![a-z]*'
        }, {
          begin: '%r\\[',
          end: '\\][a-z]*'
        }]
      }].concat(r, b),
      relevance: 0
    }].concat(r, b);

    var _;

    c.contains = o, l.contains = o;
    var E = [{
      begin: /^\s*=>/,
      starts: {
        end: '$',
        contains: o
      }
    }, {
      className: 'meta',
      begin: '^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])',
      starts: {
        end: '$',
        contains: o
      }
    }];
    return b.unshift(r), {
      name: 'Ruby',
      aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
      keywords: i,
      illegal: /\/\*/,
      contains: [n.SHEBANG({
        binary: 'ruby'
      })].concat(E).concat(b).concat(o)
    };
  };
}());
hljs.registerLanguage('rust', function () {
  'use strict';

  return function (e) {
    var n = '([ui](8|16|32|64|128|size)|f(32|64))?',
        t = 'drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!';
    return {
      name: 'Rust',
      aliases: ['rs'],
      keywords: {
        $pattern: e.IDENT_RE + '!?',
        keyword: 'abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield',
        literal: 'true false Some None Ok Err',
        built_in: t
      },
      illegal: '</',
      contains: [e.C_LINE_COMMENT_MODE, e.COMMENT('/\\*', '\\*/', {
        contains: ['self']
      }), e.inherit(e.QUOTE_STRING_MODE, {
        begin: /b?"/,
        illegal: null
      }), {
        className: 'string',
        variants: [{
          begin: /r(#*)"(.|\n)*?"\1(?!#)/
        }, {
          begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
        }]
      }, {
        className: 'symbol',
        begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
      }, {
        className: 'number',
        variants: [{
          begin: '\\b0b([01_]+)' + n
        }, {
          begin: '\\b0o([0-7_]+)' + n
        }, {
          begin: '\\b0x([A-Fa-f0-9_]+)' + n
        }, {
          begin: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' + n
        }],
        relevance: 0
      }, {
        className: 'function',
        beginKeywords: 'fn',
        end: '(\\(|<)',
        excludeEnd: !0,
        contains: [e.UNDERSCORE_TITLE_MODE]
      }, {
        className: 'meta',
        begin: '#!?\\[',
        end: '\\]',
        contains: [{
          className: 'meta-string',
          begin: /"/,
          end: /"/
        }]
      }, {
        className: 'class',
        beginKeywords: 'type',
        end: ';',
        contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, {
          endsParent: !0
        })],
        illegal: '\\S'
      }, {
        className: 'class',
        beginKeywords: 'trait enum struct union',
        end: /\{/,
        contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, {
          endsParent: !0
        })],
        illegal: '[\\w\\d]'
      }, {
        begin: e.IDENT_RE + '::',
        keywords: {
          built_in: t
        }
      }, {
        begin: '->'
      }]
    };
  };
}());
hljs.registerLanguage('scss', function () {
  'use strict';

  var e = ['a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'blockquote', 'body', 'button', 'canvas', 'caption', 'cite', 'code', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt', 'em', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'mark', 'menu', 'nav', 'object', 'ol', 'p', 'q', 'quote', 'samp', 'section', 'span', 'strong', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'ul', 'var', 'video'],
      t = ['any-hover', 'any-pointer', 'aspect-ratio', 'color', 'color-gamut', 'color-index', 'device-aspect-ratio', 'device-height', 'device-width', 'display-mode', 'forced-colors', 'grid', 'height', 'hover', 'inverted-colors', 'monochrome', 'orientation', 'overflow-block', 'overflow-inline', 'pointer', 'prefers-color-scheme', 'prefers-contrast', 'prefers-reduced-motion', 'prefers-reduced-transparency', 'resolution', 'scan', 'scripting', 'update', 'width', 'min-width', 'max-width', 'min-height', 'max-height'],
      i = ['active', 'any-link', 'blank', 'checked', 'current', 'default', 'defined', 'dir', 'disabled', 'drop', 'empty', 'enabled', 'first', 'first-child', 'first-of-type', 'fullscreen', 'future', 'focus', 'focus-visible', 'focus-within', 'has', 'host', 'host-context', 'hover', 'indeterminate', 'in-range', 'invalid', 'is', 'lang', 'last-child', 'last-of-type', 'left', 'link', 'local-link', 'not', 'nth-child', 'nth-col', 'nth-last-child', 'nth-last-col', 'nth-last-of-type', 'nth-of-type', 'only-child', 'only-of-type', 'optional', 'out-of-range', 'past', 'placeholder-shown', 'read-only', 'read-write', 'required', 'right', 'root', 'scope', 'target', 'target-within', 'user-invalid', 'valid', 'visited', 'where'],
      o = ['after', 'backdrop', 'before', 'cue', 'cue-region', 'first-letter', 'first-line', 'grammar-error', 'marker', 'part', 'placeholder', 'selection', 'slotted', 'spelling-error'],
      r = ['align-content', 'align-items', 'align-self', 'animation', 'animation-delay', 'animation-direction', 'animation-duration', 'animation-fill-mode', 'animation-iteration-count', 'animation-name', 'animation-play-state', 'animation-timing-function', 'auto', 'backface-visibility', 'background', 'background-attachment', 'background-clip', 'background-color', 'background-image', 'background-origin', 'background-position', 'background-repeat', 'background-size', 'border', 'border-bottom', 'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-style', 'border-bottom-width', 'border-collapse', 'border-color', 'border-image', 'border-image-outset', 'border-image-repeat', 'border-image-slice', 'border-image-source', 'border-image-width', 'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-radius', 'border-right', 'border-right-color', 'border-right-style', 'border-right-width', 'border-spacing', 'border-style', 'border-top', 'border-top-color', 'border-top-left-radius', 'border-top-right-radius', 'border-top-style', 'border-top-width', 'border-width', 'bottom', 'box-decoration-break', 'box-shadow', 'box-sizing', 'break-after', 'break-before', 'break-inside', 'caption-side', 'clear', 'clip', 'clip-path', 'color', 'column-count', 'column-fill', 'column-gap', 'column-rule', 'column-rule-color', 'column-rule-style', 'column-rule-width', 'column-span', 'column-width', 'columns', 'content', 'counter-increment', 'counter-reset', 'cursor', 'direction', 'display', 'empty-cells', 'filter', 'flex', 'flex-basis', 'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap', 'float', 'font', 'font-display', 'font-family', 'font-feature-settings', 'font-kerning', 'font-language-override', 'font-size', 'font-size-adjust', 'font-smoothing', 'font-stretch', 'font-style', 'font-variant', 'font-variant-ligatures', 'font-variation-settings', 'font-weight', 'height', 'hyphens', 'icon', 'image-orientation', 'image-rendering', 'image-resolution', 'ime-mode', 'inherit', 'initial', 'justify-content', 'left', 'letter-spacing', 'line-height', 'list-style', 'list-style-image', 'list-style-position', 'list-style-type', 'margin', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'marks', 'mask', 'max-height', 'max-width', 'min-height', 'min-width', 'nav-down', 'nav-index', 'nav-left', 'nav-right', 'nav-up', 'none', 'normal', 'object-fit', 'object-position', 'opacity', 'order', 'orphans', 'outline', 'outline-color', 'outline-offset', 'outline-style', 'outline-width', 'overflow', 'overflow-wrap', 'overflow-x', 'overflow-y', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'page-break-after', 'page-break-before', 'page-break-inside', 'perspective', 'perspective-origin', 'pointer-events', 'position', 'quotes', 'resize', 'right', 'src', 'tab-size', 'table-layout', 'text-align', 'text-align-last', 'text-decoration', 'text-decoration-color', 'text-decoration-line', 'text-decoration-style', 'text-indent', 'text-overflow', 'text-rendering', 'text-shadow', 'text-transform', 'text-underline-position', 'top', 'transform', 'transform-origin', 'transform-style', 'transition', 'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function', 'unicode-bidi', 'vertical-align', 'visibility', 'white-space', 'widows', 'width', 'word-break', 'word-spacing', 'word-wrap', 'z-index'].reverse();
  return function (a) {
    var n = function (e) {
      return {
        IMPORTANT: {
          className: 'meta',
          begin: '!important'
        },
        HEXCOLOR: {
          className: 'number',
          begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
        },
        ATTRIBUTE_SELECTOR_MODE: {
          className: 'selector-attr',
          begin: /\[/,
          end: /\]/,
          illegal: '$',
          contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        }
      };
    }(a),
        l = o,
        s = i,
        d = '@[a-z-]+',
        c = {
      className: 'variable',
      begin: '(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b'
    };

    return {
      name: 'SCSS',
      case_insensitive: !0,
      illegal: "[=/|']",
      contains: [a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, {
        className: 'selector-id',
        begin: '#[A-Za-z0-9_-]+',
        relevance: 0
      }, {
        className: 'selector-class',
        begin: '\\.[A-Za-z0-9_-]+',
        relevance: 0
      }, n.ATTRIBUTE_SELECTOR_MODE, {
        className: 'selector-tag',
        begin: '\\b(' + e.join('|') + ')\\b',
        relevance: 0
      }, {
        className: 'selector-pseudo',
        begin: ':(' + s.join('|') + ')'
      }, {
        className: 'selector-pseudo',
        begin: '::(' + l.join('|') + ')'
      }, c, {
        begin: /\(/,
        end: /\)/,
        contains: [a.CSS_NUMBER_MODE]
      }, {
        className: 'attribute',
        begin: '\\b(' + r.join('|') + ')\\b'
      }, {
        begin: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
      }, {
        begin: ':',
        end: ';',
        contains: [c, n.HEXCOLOR, a.CSS_NUMBER_MODE, a.QUOTE_STRING_MODE, a.APOS_STRING_MODE, n.IMPORTANT]
      }, {
        begin: '@(page|font-face)',
        lexemes: d,
        keywords: '@page @font-face'
      }, {
        begin: '@',
        end: '[{;]',
        returnBegin: !0,
        keywords: {
          $pattern: /[a-z-]+/,
          keyword: 'and or not only',
          attribute: t.join(' ')
        },
        contains: [{
          begin: d,
          className: 'keyword'
        }, {
          begin: /[a-z-]+(?=:)/,
          className: 'attribute'
        }, c, a.QUOTE_STRING_MODE, a.APOS_STRING_MODE, n.HEXCOLOR, a.CSS_NUMBER_MODE]
      }]
    };
  };
}());
hljs.registerLanguage('shell', function () {
  'use strict';

  return function (s) {
    return {
      name: 'Shell Session',
      aliases: ['console'],
      contains: [{
        className: 'meta',
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: 'bash'
        }
      }]
    };
  };
}());
hljs.registerLanguage('sql', function () {
  'use strict';

  function e(e) {
    return e ? 'string' == typeof e ? e : e.source : null;
  }

  function r() {
    for (var _len20 = arguments.length, r = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
      r[_key20] = arguments[_key20];
    }

    return r.map(function (r) {
      return e(r);
    }).join('');
  }

  function t() {
    for (var _len21 = arguments.length, r = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
      r[_key21] = arguments[_key21];
    }

    return '(' + r.map(function (r) {
      return e(r);
    }).join('|') + ')';
  }

  return function (e) {
    var n = e.COMMENT('--', '$'),
        a = ['true', 'false', 'unknown'],
        i = ['bigint', 'binary', 'blob', 'boolean', 'char', 'character', 'clob', 'date', 'dec', 'decfloat', 'decimal', 'float', 'int', 'integer', 'interval', 'nchar', 'nclob', 'national', 'numeric', 'real', 'row', 'smallint', 'time', 'timestamp', 'varchar', 'varying', 'varbinary'],
        s = ['abs', 'acos', 'array_agg', 'asin', 'atan', 'avg', 'cast', 'ceil', 'ceiling', 'coalesce', 'corr', 'cos', 'cosh', 'count', 'covar_pop', 'covar_samp', 'cume_dist', 'dense_rank', 'deref', 'element', 'exp', 'extract', 'first_value', 'floor', 'json_array', 'json_arrayagg', 'json_exists', 'json_object', 'json_objectagg', 'json_query', 'json_table', 'json_table_primitive', 'json_value', 'lag', 'last_value', 'lead', 'listagg', 'ln', 'log', 'log10', 'lower', 'max', 'min', 'mod', 'nth_value', 'ntile', 'nullif', 'percent_rank', 'percentile_cont', 'percentile_disc', 'position', 'position_regex', 'power', 'rank', 'regr_avgx', 'regr_avgy', 'regr_count', 'regr_intercept', 'regr_r2', 'regr_slope', 'regr_sxx', 'regr_sxy', 'regr_syy', 'row_number', 'sin', 'sinh', 'sqrt', 'stddev_pop', 'stddev_samp', 'substring', 'substring_regex', 'sum', 'tan', 'tanh', 'translate', 'translate_regex', 'treat', 'trim', 'trim_array', 'unnest', 'upper', 'value_of', 'var_pop', 'var_samp', 'width_bucket'],
        o = ['create table', 'insert into', 'primary key', 'foreign key', 'not null', 'alter table', 'add constraint', 'grouping sets', 'on overflow', 'character set', 'respect nulls', 'ignore nulls', 'nulls first', 'nulls last', 'depth first', 'breadth first'],
        c = s,
        l = ['abs', 'acos', 'all', 'allocate', 'alter', 'and', 'any', 'are', 'array', 'array_agg', 'array_max_cardinality', 'as', 'asensitive', 'asin', 'asymmetric', 'at', 'atan', 'atomic', 'authorization', 'avg', 'begin', 'begin_frame', 'begin_partition', 'between', 'bigint', 'binary', 'blob', 'boolean', 'both', 'by', 'call', 'called', 'cardinality', 'cascaded', 'case', 'cast', 'ceil', 'ceiling', 'char', 'char_length', 'character', 'character_length', 'check', 'classifier', 'clob', 'close', 'coalesce', 'collate', 'collect', 'column', 'commit', 'condition', 'connect', 'constraint', 'contains', 'convert', 'copy', 'corr', 'corresponding', 'cos', 'cosh', 'count', 'covar_pop', 'covar_samp', 'create', 'cross', 'cube', 'cume_dist', 'current', 'current_catalog', 'current_date', 'current_default_transform_group', 'current_path', 'current_role', 'current_row', 'current_schema', 'current_time', 'current_timestamp', 'current_path', 'current_role', 'current_transform_group_for_type', 'current_user', 'cursor', 'cycle', 'date', 'day', 'deallocate', 'dec', 'decimal', 'decfloat', 'declare', 'default', 'define', 'delete', 'dense_rank', 'deref', 'describe', 'deterministic', 'disconnect', 'distinct', 'double', 'drop', 'dynamic', 'each', 'element', 'else', 'empty', 'end', 'end_frame', 'end_partition', 'end-exec', 'equals', 'escape', 'every', 'except', 'exec', 'execute', 'exists', 'exp', 'external', 'extract', 'false', 'fetch', 'filter', 'first_value', 'float', 'floor', 'for', 'foreign', 'frame_row', 'free', 'from', 'full', 'function', 'fusion', 'get', 'global', 'grant', 'group', 'grouping', 'groups', 'having', 'hold', 'hour', 'identity', 'in', 'indicator', 'initial', 'inner', 'inout', 'insensitive', 'insert', 'int', 'integer', 'intersect', 'intersection', 'interval', 'into', 'is', 'join', 'json_array', 'json_arrayagg', 'json_exists', 'json_object', 'json_objectagg', 'json_query', 'json_table', 'json_table_primitive', 'json_value', 'lag', 'language', 'large', 'last_value', 'lateral', 'lead', 'leading', 'left', 'like', 'like_regex', 'listagg', 'ln', 'local', 'localtime', 'localtimestamp', 'log', 'log10', 'lower', 'match', 'match_number', 'match_recognize', 'matches', 'max', 'member', 'merge', 'method', 'min', 'minute', 'mod', 'modifies', 'module', 'month', 'multiset', 'national', 'natural', 'nchar', 'nclob', 'new', 'no', 'none', 'normalize', 'not', 'nth_value', 'ntile', 'null', 'nullif', 'numeric', 'octet_length', 'occurrences_regex', 'of', 'offset', 'old', 'omit', 'on', 'one', 'only', 'open', 'or', 'order', 'out', 'outer', 'over', 'overlaps', 'overlay', 'parameter', 'partition', 'pattern', 'per', 'percent', 'percent_rank', 'percentile_cont', 'percentile_disc', 'period', 'portion', 'position', 'position_regex', 'power', 'precedes', 'precision', 'prepare', 'primary', 'procedure', 'ptf', 'range', 'rank', 'reads', 'real', 'recursive', 'ref', 'references', 'referencing', 'regr_avgx', 'regr_avgy', 'regr_count', 'regr_intercept', 'regr_r2', 'regr_slope', 'regr_sxx', 'regr_sxy', 'regr_syy', 'release', 'result', 'return', 'returns', 'revoke', 'right', 'rollback', 'rollup', 'row', 'row_number', 'rows', 'running', 'savepoint', 'scope', 'scroll', 'search', 'second', 'seek', 'select', 'sensitive', 'session_user', 'set', 'show', 'similar', 'sin', 'sinh', 'skip', 'smallint', 'some', 'specific', 'specifictype', 'sql', 'sqlexception', 'sqlstate', 'sqlwarning', 'sqrt', 'start', 'static', 'stddev_pop', 'stddev_samp', 'submultiset', 'subset', 'substring', 'substring_regex', 'succeeds', 'sum', 'symmetric', 'system', 'system_time', 'system_user', 'table', 'tablesample', 'tan', 'tanh', 'then', 'time', 'timestamp', 'timezone_hour', 'timezone_minute', 'to', 'trailing', 'translate', 'translate_regex', 'translation', 'treat', 'trigger', 'trim', 'trim_array', 'true', 'truncate', 'uescape', 'union', 'unique', 'unknown', 'unnest', 'update   ', 'upper', 'user', 'using', 'value', 'values', 'value_of', 'var_pop', 'var_samp', 'varbinary', 'varchar', 'varying', 'versioning', 'when', 'whenever', 'where', 'width_bucket', 'window', 'with', 'within', 'without', 'year', 'add', 'asc', 'collation', 'desc', 'final', 'first', 'last', 'view'].filter(function (e) {
      return !s.includes(e);
    }),
        u = {
      begin: r(/\b/, t.apply(void 0, c), /\s*\(/),
      keywords: {
        built_in: c
      }
    };
    return {
      name: 'SQL',
      case_insensitive: !0,
      illegal: /[{}]|<\//,
      keywords: {
        $pattern: /\b[\w\.]+/,
        keyword: function (e) {
          var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              r = _ref11.exceptions,
              t = _ref11.when;

          var n = t;
          return r = r || [], e.map(function (e) {
            return e.match(/\|\d+$/) || r.includes(e) ? e : n(e) ? e + '|0' : e;
          });
        }(l, {
          when: function when(e) {
            return e.length < 3;
          }
        }),
        literal: a,
        type: i,
        built_in: ['current_catalog', 'current_date', 'current_default_transform_group', 'current_path', 'current_role', 'current_schema', 'current_transform_group_for_type', 'current_user', 'session_user', 'system_time', 'system_user', 'current_time', 'localtime', 'current_timestamp', 'localtimestamp']
      },
      contains: [{
        begin: t.apply(void 0, o),
        keywords: {
          $pattern: /[\w\.]+/,
          keyword: l.concat(o),
          literal: a,
          type: i
        }
      }, {
        className: 'type',
        begin: t('double precision', 'large object', 'with timezone', 'without timezone')
      }, u, {
        className: 'variable',
        begin: /@[a-z0-9]+/
      }, {
        className: 'string',
        variants: [{
          begin: /'/,
          end: /'/,
          contains: [{
            begin: /''/
          }]
        }]
      }, {
        begin: /"/,
        end: /"/,
        contains: [{
          begin: /""/
        }]
      }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, n, {
        className: 'operator',
        begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
        relevance: 0
      }]
    };
  };
}());
hljs.registerLanguage('swift', function () {
  'use strict';

  function e(e) {
    return e ? 'string' == typeof e ? e : e.source : null;
  }

  function n(e) {
    return a('(?=', e, ')');
  }

  function a() {
    for (var _len22 = arguments.length, n = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
      n[_key22] = arguments[_key22];
    }

    return n.map(function (n) {
      return e(n);
    }).join('');
  }

  function t() {
    for (var _len23 = arguments.length, n = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
      n[_key23] = arguments[_key23];
    }

    return '(' + n.map(function (n) {
      return e(n);
    }).join('|') + ')';
  }

  var i = function i(e) {
    return a(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/);
  },
      s = ['Protocol', 'Type'].map(i),
      u = ['init', 'self'].map(i),
      c = ['Any', 'Self'],
      r = ['associatedtype', 'async', 'await', /as\?/, /as!/, 'as', 'break', 'case', 'catch', 'class', 'continue', 'convenience', 'default', 'defer', 'deinit', 'didSet', 'do', 'dynamic', 'else', 'enum', 'extension', 'fallthrough', /fileprivate\(set\)/, 'fileprivate', 'final', 'for', 'func', 'get', 'guard', 'if', 'import', 'indirect', 'infix', /init\?/, /init!/, 'inout', /internal\(set\)/, 'internal', 'in', 'is', 'lazy', 'let', 'mutating', 'nonmutating', /open\(set\)/, 'open', 'operator', 'optional', 'override', 'postfix', 'precedencegroup', 'prefix', /private\(set\)/, 'private', 'protocol', /public\(set\)/, 'public', 'repeat', 'required', 'rethrows', 'return', 'set', 'some', 'static', 'struct', 'subscript', 'super', 'switch', 'throws', 'throw', /try\?/, /try!/, 'try', 'typealias', /unowned\(safe\)/, /unowned\(unsafe\)/, 'unowned', 'var', 'weak', 'where', 'while', 'willSet'],
      o = ['false', 'nil', 'true'],
      l = ['assignment', 'associativity', 'higherThan', 'left', 'lowerThan', 'none', 'right'],
      m = ['#colorLiteral', '#column', '#dsohandle', '#else', '#elseif', '#endif', '#error', '#file', '#fileID', '#fileLiteral', '#filePath', '#function', '#if', '#imageLiteral', '#keyPath', '#line', '#selector', '#sourceLocation', '#warn_unqualified_access', '#warning'],
      d = ['abs', 'all', 'any', 'assert', 'assertionFailure', 'debugPrint', 'dump', 'fatalError', 'getVaList', 'isKnownUniquelyReferenced', 'max', 'min', 'numericCast', 'pointwiseMax', 'pointwiseMin', 'precondition', 'preconditionFailure', 'print', 'readLine', 'repeatElement', 'sequence', 'stride', 'swap', 'swift_unboxFromSwiftValueWithType', 'transcode', 'type', 'unsafeBitCast', 'unsafeDowncast', 'withExtendedLifetime', 'withUnsafeMutablePointer', 'withUnsafePointer', 'withVaList', 'withoutActuallyEscaping', 'zip'],
      p = t(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
      F = t(p, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
      b = a(p, F, '*'),
      h = t(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
      f = t(h, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
      w = a(h, f, '*'),
      y = a(/[A-Z]/, f, '*'),
      g = ['autoclosure', a(/convention\(/, t('swift', 'block', 'c'), /\)/), 'discardableResult', 'dynamicCallable', 'dynamicMemberLookup', 'escaping', 'frozen', 'GKInspectable', 'IBAction', 'IBDesignable', 'IBInspectable', 'IBOutlet', 'IBSegueAction', 'inlinable', 'main', 'nonobjc', 'NSApplicationMain', 'NSCopying', 'NSManaged', a(/objc\(/, w, /\)/), 'objc', 'objcMembers', 'propertyWrapper', 'requires_stored_property_inits', 'testable', 'UIApplicationMain', 'unknown', 'usableFromInline'],
      E = ['iOS', 'iOSApplicationExtension', 'macOS', 'macOSApplicationExtension', 'macCatalyst', 'macCatalystApplicationExtension', 'watchOS', 'watchOSApplicationExtension', 'tvOS', 'tvOSApplicationExtension', 'swift'];

  return function (e) {
    var p = {
      match: /\s+/,
      relevance: 0
    },
        h = e.COMMENT('/\\*', '\\*/', {
      contains: ['self']
    }),
        v = [e.C_LINE_COMMENT_MODE, h],
        N = {
      className: 'keyword',
      begin: a(/\./, n(t.apply(void 0, _toConsumableArray(s).concat(_toConsumableArray(u))))),
      end: t.apply(void 0, _toConsumableArray(s).concat(_toConsumableArray(u))),
      excludeBegin: !0
    },
        A = {
      match: a(/\./, t.apply(void 0, r)),
      relevance: 0
    },
        C = r.filter(function (e) {
      return 'string' == typeof e;
    }).concat(['_|0']),
        _ = {
      variants: [{
        className: 'keyword',
        match: t.apply(void 0, _toConsumableArray(r.filter(function (e) {
          return 'string' != typeof e;
        }).concat(c).map(i)).concat(_toConsumableArray(u)))
      }]
    },
        D = {
      $pattern: t(/\b\w+/, /#\w+/),
      keyword: C.concat(m),
      literal: o
    },
        B = [N, A, _],
        k = [{
      match: a(/\./, t.apply(void 0, d)),
      relevance: 0
    }, {
      className: 'built_in',
      match: a(/\b/, t.apply(void 0, d), /(?=\()/)
    }],
        M = {
      match: /->/,
      relevance: 0
    },
        S = [M, {
      className: 'operator',
      relevance: 0,
      variants: [{
        match: b
      }, {
        match: "\\.(\\.|".concat(F, ")+")
      }]
    }],
        x = '([0-9a-fA-F]_*)+',
        I = {
      className: 'number',
      relevance: 0,
      variants: [{
        match: '\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b'
      }, {
        match: "\\b0x(".concat(x, ")(\\.(").concat(x, "))?([pP][+-]?(([0-9]_*)+))?\\b")
      }, {
        match: /\b0o([0-7]_*)+\b/
      }, {
        match: /\b0b([01]_*)+\b/
      }]
    },
        O = function O() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return {
        className: 'subst',
        variants: [{
          match: a(/\\/, e, /[0\\tnr"']/)
        }, {
          match: a(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/)
        }]
      };
    },
        T = function T() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return {
        className: 'subst',
        match: a(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
      };
    },
        L = function L() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return {
        className: 'subst',
        label: 'interpol',
        begin: a(/\\/, e, /\(/),
        end: /\)/
      };
    },
        P = function P() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return {
        begin: a(e, /"""/),
        end: a(/"""/, e),
        contains: [O(e), T(e), L(e)]
      };
    },
        $ = function $() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return {
        begin: a(e, /"/),
        end: a(/"/, e),
        contains: [O(e), L(e)]
      };
    },
        K = {
      className: 'string',
      variants: [P(), P('#'), P('##'), P('###'), $(), $('#'), $('##'), $('###')]
    },
        j = {
      match: a(/`/, w, /`/)
    },
        z = [j, {
      className: 'variable',
      match: /\$\d+/
    }, {
      className: 'variable',
      match: "\\$".concat(f, "+")
    }],
        q = [{
      match: /(@|#)available/,
      className: 'keyword',
      starts: {
        contains: [{
          begin: /\(/,
          end: /\)/,
          keywords: E,
          contains: [].concat(S, [I, K])
        }]
      }
    }, {
      className: 'keyword',
      match: a(/@/, t.apply(void 0, g))
    }, {
      className: 'meta',
      match: a(/@/, w)
    }],
        U = {
      match: n(/\b[A-Z]/),
      relevance: 0,
      contains: [{
        className: 'type',
        match: a(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, f, '+')
      }, {
        className: 'type',
        match: y,
        relevance: 0
      }, {
        match: /[?!]+/,
        relevance: 0
      }, {
        match: /\.\.\./,
        relevance: 0
      }, {
        match: a(/\s+&\s+/, n(y)),
        relevance: 0
      }]
    },
        Z = {
      begin: /</,
      end: />/,
      keywords: D,
      contains: [].concat(v, B, q, [M, U])
    };

    U.contains.push(Z);
    var G = {
      begin: /\(/,
      end: /\)/,
      relevance: 0,
      keywords: D,
      contains: ['self', {
        match: a(w, /\s*:/),
        keywords: '_|0',
        relevance: 0
      }].concat(v, B, k, S, [I, K], z, q, [U])
    },
        H = {
      beginKeywords: 'func',
      contains: [{
        className: 'title',
        match: t(j.match, w, b),
        endsParent: !0,
        relevance: 0
      }, p]
    },
        R = {
      begin: /</,
      end: />/,
      contains: [].concat(v, [U])
    },
        V = {
      begin: /\(/,
      end: /\)/,
      keywords: D,
      contains: [{
        begin: t(n(a(w, /\s*:/)), n(a(w, /\s+/, w, /\s*:/))),
        end: /:/,
        relevance: 0,
        contains: [{
          className: 'keyword',
          match: /\b_\b/
        }, {
          className: 'params',
          match: w
        }]
      }].concat(v, B, S, [I, K], q, [U, G]),
      endsParent: !0,
      illegal: /["']/
    },
        W = {
      className: 'function',
      match: n(/\bfunc\b/),
      contains: [H, R, V, p],
      illegal: [/\[/, /%/]
    },
        X = {
      className: 'function',
      match: /\b(subscript|init[?!]?)\s*(?=[<(])/,
      keywords: {
        keyword: 'subscript init init? init!',
        $pattern: /\w+[?!]?/
      },
      contains: [R, V, p],
      illegal: /\[|%/
    },
        J = {
      beginKeywords: 'operator',
      end: e.MATCH_NOTHING_RE,
      contains: [{
        className: 'title',
        match: b,
        endsParent: !0,
        relevance: 0
      }]
    },
        Q = {
      beginKeywords: 'precedencegroup',
      end: e.MATCH_NOTHING_RE,
      contains: [{
        className: 'title',
        match: y,
        relevance: 0
      }, {
        begin: /{/,
        end: /}/,
        relevance: 0,
        endsParent: !0,
        keywords: [].concat(l, o),
        contains: [U]
      }]
    };

    var _iterator = _createForOfIteratorHelper(K.variants),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _e7 = _step.value;

        var _n6 = _e7.contains.find(function (e) {
          return 'interpol' === e.label;
        });

        _n6.keywords = D;

        var _a3 = [].concat(B, k, S, [I, K], z);

        _n6.contains = [].concat(_toConsumableArray(_a3), [{
          begin: /\(/,
          end: /\)/,
          contains: ['self'].concat(_toConsumableArray(_a3))
        }]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return {
      name: 'Swift',
      keywords: D,
      contains: [].concat(v, [W, X, {
        className: 'class',
        beginKeywords: 'struct protocol class extension enum',
        end: '\\{',
        excludeEnd: !0,
        keywords: D,
        contains: [e.inherit(e.TITLE_MODE, {
          begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
        })].concat(B)
      }, J, Q, {
        beginKeywords: 'import',
        end: /$/,
        contains: [].concat(v),
        relevance: 0
      }], B, k, S, [I, K], z, q, [U, G])
    };
  };
}());
hljs.registerLanguage('typescript', function () {
  'use strict';

  var e = '[A-Za-z$_][0-9A-Za-z$_]*',
      n = ['as', 'in', 'of', 'if', 'for', 'while', 'finally', 'var', 'new', 'function', 'do', 'return', 'void', 'else', 'break', 'catch', 'instanceof', 'with', 'throw', 'case', 'default', 'try', 'switch', 'continue', 'typeof', 'delete', 'let', 'yield', 'const', 'class', 'debugger', 'async', 'await', 'static', 'import', 'from', 'export', 'extends'],
      a = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
      s = [].concat(['setInterval', 'setTimeout', 'clearInterval', 'clearTimeout', 'require', 'exports', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape'], ['arguments', 'this', 'super', 'console', 'window', 'document', 'localStorage', 'module', 'global'], ['Intl', 'DataView', 'Number', 'Math', 'Date', 'String', 'RegExp', 'Object', 'Function', 'Boolean', 'Error', 'Symbol', 'Set', 'Map', 'WeakSet', 'WeakMap', 'Proxy', 'Reflect', 'JSON', 'Promise', 'Float64Array', 'Int16Array', 'Int32Array', 'Int8Array', 'Uint16Array', 'Uint32Array', 'Float32Array', 'Array', 'Uint8Array', 'Uint8ClampedArray', 'ArrayBuffer', 'BigInt64Array', 'BigUint64Array', 'BigInt'], ['EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError']);

  function t(e) {
    return r('(?=', e, ')');
  }

  function r() {
    for (var _len24 = arguments.length, e = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
      e[_key24] = arguments[_key24];
    }

    return e.map(function (e) {
      return (n = e) ? 'string' == typeof n ? n : n.source : null;
      var n;
    }).join('');
  }

  return function (i) {
    var c = {
      $pattern: e,
      keyword: n.concat(['type', 'namespace', 'typedef', 'interface', 'public', 'private', 'protected', 'implements', 'declare', 'abstract', 'readonly']),
      literal: a,
      built_in: s.concat(['any', 'void', 'number', 'boolean', 'string', 'object', 'never', 'enum'])
    },
        o = {
      className: 'meta',
      begin: '@[A-Za-z$_][0-9A-Za-z$_]*'
    },
        l = function l(e, n, a) {
      var s = e.contains.findIndex(function (e) {
        return e.label === n;
      });
      if (-1 === s) throw Error('can not find mode to replace');
      e.contains.splice(s, 1, a);
    },
        b = function (i) {
      var c = e,
          o = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: function isTrulyOpeningTag(e, n) {
          var a = e[0].length + e.index,
              s = e.input[a];
          '<' !== s ? '>' === s && (function (e, _ref12) {
            var n = _ref12.after;
            var a = '</' + e[0].slice(1);
            return -1 !== e.input.indexOf(a, n);
          }(e, {
            after: a
          }) || n.ignoreMatch()) : n.ignoreMatch();
        }
      },
          l = {
        $pattern: e,
        keyword: n,
        literal: a,
        built_in: s
      },
          b = '\\.([0-9](_?[0-9])*)',
          d = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
          g = {
        className: 'number',
        variants: [{
          begin: "(\\b(".concat(d, ")((").concat(b, ")|\\.)?|(").concat(b, "))[eE][+-]?([0-9](_?[0-9])*)\\b")
        }, {
          begin: "\\b(".concat(d, ")\\b((").concat(b, ")\\b|\\.)?|(").concat(b, ")\\b")
        }, {
          begin: '\\b(0|[1-9](_?[0-9])*)n\\b'
        }, {
          begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b'
        }, {
          begin: '\\b0[bB][0-1](_?[0-1])*n?\\b'
        }, {
          begin: '\\b0[oO][0-7](_?[0-7])*n?\\b'
        }, {
          begin: '\\b0[0-7]+n?\\b'
        }],
        relevance: 0
      },
          u = {
        className: 'subst',
        begin: '\\$\\{',
        end: '\\}',
        keywords: l,
        contains: []
      },
          E = {
        begin: 'html`',
        end: '',
        starts: {
          end: '`',
          returnEnd: !1,
          contains: [i.BACKSLASH_ESCAPE, u],
          subLanguage: 'xml'
        }
      },
          m = {
        begin: 'css`',
        end: '',
        starts: {
          end: '`',
          returnEnd: !1,
          contains: [i.BACKSLASH_ESCAPE, u],
          subLanguage: 'css'
        }
      },
          y = {
        className: 'string',
        begin: '`',
        end: '`',
        contains: [i.BACKSLASH_ESCAPE, u]
      },
          _ = {
        className: 'comment',
        variants: [i.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
          relevance: 0,
          contains: [{
            className: 'doctag',
            begin: '@[A-Za-z]+',
            contains: [{
              className: 'type',
              begin: '\\{',
              end: '\\}',
              relevance: 0
            }, {
              className: 'variable',
              begin: c + '(?=\\s*(-)|$)',
              endsParent: !0,
              relevance: 0
            }, {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }]
          }]
        }), i.C_BLOCK_COMMENT_MODE, i.C_LINE_COMMENT_MODE]
      },
          p = [i.APOS_STRING_MODE, i.QUOTE_STRING_MODE, E, m, y, g, i.REGEXP_MODE];
      u.contains = p.concat({
        begin: /\{/,
        end: /\}/,
        keywords: l,
        contains: ['self'].concat(p)
      });
      var N = [].concat(_, u.contains),
          f = N.concat([{
        begin: /\(/,
        end: /\)/,
        keywords: l,
        contains: ['self'].concat(N)
      }]),
          A = {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: l,
        contains: f
      };
      return {
        name: 'Javascript',
        aliases: ['js', 'jsx', 'mjs', 'cjs'],
        keywords: l,
        exports: {
          PARAMS_CONTAINS: f
        },
        illegal: /#(?![$_A-z])/,
        contains: [i.SHEBANG({
          label: 'shebang',
          binary: 'node',
          relevance: 5
        }), {
          label: 'use_strict',
          className: 'meta',
          relevance: 10,
          begin: /^\s*['"]use (strict|asm)['"]/
        }, i.APOS_STRING_MODE, i.QUOTE_STRING_MODE, E, m, y, _, g, {
          begin: r(/[{,\n]\s*/, t(r(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, c + '\\s*:'))),
          relevance: 0,
          contains: [{
            className: 'attr',
            begin: c + t('\\s*:'),
            relevance: 0
          }]
        }, {
          begin: '(' + i.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
          keywords: 'return throw case',
          contains: [_, i.REGEXP_MODE, {
            className: 'function',
            begin: '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' + i.UNDERSCORE_IDENT_RE + ')\\s*=>',
            returnBegin: !0,
            end: '\\s*=>',
            contains: [{
              className: 'params',
              variants: [{
                begin: i.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                begin: /\(\s*\)/,
                skip: !0
              }, {
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: l,
                contains: f
              }]
            }]
          }, {
            begin: /,/,
            relevance: 0
          }, {
            className: '',
            begin: /\s/,
            end: /\s*/,
            skip: !0
          }, {
            variants: [{
              begin: '<>',
              end: '</>'
            }, {
              begin: o.begin,
              'on:begin': o.isTrulyOpeningTag,
              end: o.end
            }],
            subLanguage: 'xml',
            contains: [{
              begin: o.begin,
              end: o.end,
              skip: !0,
              contains: ['self']
            }]
          }],
          relevance: 0
        }, {
          className: 'function',
          beginKeywords: 'function',
          end: /[{;]/,
          excludeEnd: !0,
          keywords: l,
          contains: ['self', i.inherit(i.TITLE_MODE, {
            begin: c
          }), A],
          illegal: /%/
        }, {
          beginKeywords: 'while if switch catch for'
        }, {
          className: 'function',
          begin: i.UNDERSCORE_IDENT_RE + '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
          returnBegin: !0,
          contains: [A, i.inherit(i.TITLE_MODE, {
            begin: c
          })]
        }, {
          variants: [{
            begin: '\\.' + c
          }, {
            begin: '\\$' + c
          }],
          relevance: 0
        }, {
          className: 'class',
          beginKeywords: 'class',
          end: /[{;=]/,
          excludeEnd: !0,
          illegal: /[:"[\]]/,
          contains: [{
            beginKeywords: 'extends'
          }, i.UNDERSCORE_TITLE_MODE]
        }, {
          begin: /\b(?=constructor)/,
          end: /[{;]/,
          excludeEnd: !0,
          contains: [i.inherit(i.TITLE_MODE, {
            begin: c
          }), 'self', A]
        }, {
          begin: '(get|set)\\s+(?=' + c + '\\()',
          end: /\{/,
          keywords: 'get set',
          contains: [i.inherit(i.TITLE_MODE, {
            begin: c
          }), {
            begin: /\(\)/
          }, A]
        }, {
          begin: /\$[(.]/
        }]
      };
    }(i);

    return Object.assign(b.keywords, c), b.exports.PARAMS_CONTAINS.push(o), b.contains = b.contains.concat([o, {
      beginKeywords: 'namespace',
      end: /\{/,
      excludeEnd: !0
    }, {
      beginKeywords: 'interface',
      end: /\{/,
      excludeEnd: !0,
      keywords: 'interface extends'
    }]), l(b, 'shebang', i.SHEBANG()), l(b, 'use_strict', {
      className: 'meta',
      relevance: 10,
      begin: /^\s*['"]use strict['"]/
    }), b.contains.find(function (e) {
      return 'function' === e.className;
    }).relevance = 0, Object.assign(b, {
      name: 'TypeScript',
      aliases: ['ts', 'tsx']
    }), b;
  };
}());
hljs.registerLanguage('vbnet', function () {
  'use strict';

  function e(e) {
    return e ? 'string' == typeof e ? e : e.source : null;
  }

  function n() {
    for (var _len25 = arguments.length, n = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
      n[_key25] = arguments[_key25];
    }

    return n.map(function (n) {
      return e(n);
    }).join('');
  }

  function t() {
    for (var _len26 = arguments.length, n = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
      n[_key26] = arguments[_key26];
    }

    return '(' + n.map(function (n) {
      return e(n);
    }).join('|') + ')';
  }

  return function (e) {
    var a = /\d{1,2}\/\d{1,2}\/\d{4}/,
        i = /\d{4}-\d{1,2}-\d{1,2}/,
        s = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
        r = /\d{1,2}(:\d{1,2}){1,2}/,
        o = {
      className: 'literal',
      variants: [{
        begin: n(/# */, t(i, a), / *#/)
      }, {
        begin: n(/# */, r, / *#/)
      }, {
        begin: n(/# */, s, / *#/)
      }, {
        begin: n(/# */, t(i, a), / +/, t(s, r), / *#/)
      }]
    },
        l = e.COMMENT(/'''/, /$/, {
      contains: [{
        className: 'doctag',
        begin: /<\/?/,
        end: />/
      }]
    }),
        c = e.COMMENT(null, /$/, {
      variants: [{
        begin: /'/
      }, {
        begin: /([\t ]|^)REM(?=\s)/
      }]
    });
    return {
      name: 'Visual Basic .NET',
      aliases: ['vb'],
      case_insensitive: !0,
      classNameAliases: {
        label: 'symbol'
      },
      keywords: {
        keyword: 'addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield',
        built_in: 'addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort',
        type: 'boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort',
        literal: 'true false nothing'
      },
      illegal: '//|\\{|\\}|endif|gosub|variant|wend|^\\$ ',
      contains: [{
        className: 'string',
        begin: /"(""|[^/n])"C\b/
      }, {
        className: 'string',
        begin: /"/,
        end: /"/,
        illegal: /\n/,
        contains: [{
          begin: /""/
        }]
      }, o, {
        className: 'number',
        relevance: 0,
        variants: [{
          begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
        }, {
          begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
        }, {
          begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
        }, {
          begin: /&O[0-7_]+((U?[SIL])|[%&])?/
        }, {
          begin: /&B[01_]+((U?[SIL])|[%&])?/
        }]
      }, {
        className: 'label',
        begin: /^\w+:/
      }, l, c, {
        className: 'meta',
        begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
        end: /$/,
        keywords: {
          'meta-keyword': 'const disable else elseif enable end externalsource if region then'
        },
        contains: [c]
      }]
    };
  };
}());
hljs.registerLanguage('yaml', function () {
  'use strict';

  return function (e) {
    var n = 'true false yes no null',
        a = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
        s = {
      className: 'string',
      relevance: 0,
      variants: [{
        begin: /'/,
        end: /'/
      }, {
        begin: /"/,
        end: /"/
      }, {
        begin: /\S+/
      }],
      contains: [e.BACKSLASH_ESCAPE, {
        className: 'template-variable',
        variants: [{
          begin: /\{\{/,
          end: /\}\}/
        }, {
          begin: /%\{/,
          end: /\}/
        }]
      }]
    },
        i = e.inherit(s, {
      variants: [{
        begin: /'/,
        end: /'/
      }, {
        begin: /"/,
        end: /"/
      }, {
        begin: /[^\s,{}[\]]+/
      }]
    }),
        l = {
      end: ',',
      endsWithParent: !0,
      excludeEnd: !0,
      keywords: n,
      relevance: 0
    },
        t = {
      begin: /\{/,
      end: /\}/,
      contains: [l],
      illegal: '\\n',
      relevance: 0
    },
        g = {
      begin: '\\[',
      end: '\\]',
      contains: [l],
      illegal: '\\n',
      relevance: 0
    },
        b = [{
      className: 'attr',
      variants: [{
        begin: '\\w[\\w :\\/.-]*:(?=[ \t]|$)'
      }, {
        begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)'
      }, {
        begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)"
      }]
    }, {
      className: 'meta',
      begin: '^---\\s*$',
      relevance: 10
    }, {
      className: 'string',
      begin: '[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*'
    }, {
      begin: '<%[%=-]?',
      end: '[%-]?%>',
      subLanguage: 'ruby',
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0
    }, {
      className: 'type',
      begin: '!\\w+!' + a
    }, {
      className: 'type',
      begin: '!<' + a + '>'
    }, {
      className: 'type',
      begin: '!' + a
    }, {
      className: 'type',
      begin: '!!' + a
    }, {
      className: 'meta',
      begin: '&' + e.UNDERSCORE_IDENT_RE + '$'
    }, {
      className: 'meta',
      begin: '\\*' + e.UNDERSCORE_IDENT_RE + '$'
    }, {
      className: 'bullet',
      begin: '-(?=[ ]|$)',
      relevance: 0
    }, e.HASH_COMMENT_MODE, {
      beginKeywords: n,
      keywords: {
        literal: n
      }
    }, {
      className: 'number',
      begin: '\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b'
    }, {
      className: 'number',
      begin: e.C_NUMBER_RE + '\\b',
      relevance: 0
    }, t, g, s],
        r = [].concat(b);
    return r.pop(), r.push(i), l.contains = r, {
      name: 'YAML',
      case_insensitive: !0,
      aliases: ['yml'],
      contains: b
    };
  };
}());
var _default = {
  hljs: hljs
};
exports["default"] = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY2F0ZWdvcmllcy5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvc2VhcmNoLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9zaGFyZWJ1dHRvbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvdG9jLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC93ZWJfaW5mby5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BsdWdpbnMvaGlnaGxpZ2h0L2hpZ2hsaWdodC5taW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0EsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGFBQUQsQ0FBbEI7QUFDQSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsY0FBRCxDQUFuQixDLENBRUE7O0FBQ0EsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFVBQUQsQ0FBZjtBQUNBLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxXQUFELENBQWhCO0FBQ0EsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQUQsQ0FBakI7QUFDQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQixDLENBRUE7O0FBQ0EsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQUQsQ0FBZDtBQUNBLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxhQUFELENBQWxCLEMsQ0FFQTs7QUFDQSxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsZ0JBQUQsQ0FBckI7QUFDQSxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsZ0JBQUQsQ0FBckIsQyxDQUVBOztBQUNBLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQyxpQkFBRCxDQUF0QjtBQUNBLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLG1CQUFELENBQXhCLEMsQ0FFQTs7QUFDQSxJQUFJLGFBQWEsR0FBRyxLQUFwQjtBQUNBLElBQUksbUJBQW1CLEdBQUcsS0FBMUI7QUFDQSxJQUFJLGlCQUFpQixHQUFHLEtBQXhCLEMsQ0FDQTs7QUFDQSxJQUFJLGFBQWEsR0FBRyxLQUFwQjtBQUNBLElBQUksbUJBQW1CLEdBQUcsS0FBMUI7QUFDQSxJQUFJLGtCQUFrQixHQUFHLEtBQXpCLEMsQ0FDQTs7QUFDQSxJQUFJLGVBQWUsR0FBRyxLQUF0QjtBQUNBLElBQUkscUJBQXFCLEdBQUcsS0FBNUI7QUFDQSxJQUFJLG9CQUFvQixHQUFHLEtBQTNCO0FBQ0EsSUFBSSxtQkFBbUIsR0FBRyxLQUExQixDLENBQ0E7O0FBQ0EsSUFBSSxjQUFjLEdBQUcsS0FBckI7QUFDQSxJQUFJLG9CQUFvQixHQUFHLE1BQTNCLEMsQ0FDQTs7QUFDQSxJQUFJLHNCQUFzQixHQUFHLEtBQTdCO0FBQ0EsSUFBSSxtQkFBbUIsR0FBRyxNQUExQixDLENBQ0E7O0FBQ0EsSUFBSSx1QkFBdUIsR0FBRyxLQUE5QjtBQUNBLElBQUksb0JBQW9CLEdBQUcsTUFBM0IsQyxDQUdBOztBQUNBLFNBQVMsZ0JBQVQsR0FBNkI7RUFDekIsSUFBSSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVosTUFBMkIsTUFBL0IsRUFBdUM7SUFDbkMsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0IsR0FBL0IsQ0FBbUM7TUFBQyxXQUFXO0lBQVosQ0FBbkM7SUFDQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QixHQUE5QixDQUFrQztNQUFDLFdBQVc7SUFBWixDQUFsQztFQUNILENBSEQsTUFHTztJQUNILENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLEdBQS9CLENBQW1DO01BQUMsV0FBVztJQUFaLENBQW5DO0lBQ0EsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEIsR0FBOUIsQ0FBa0M7TUFBQyxXQUFXO0lBQVosQ0FBbEM7RUFDSDs7RUFDRCxJQUFJLFFBQVEsQ0FBQyxHQUFULENBQWEsU0FBYixNQUE0QixNQUFoQyxFQUF3QztJQUNwQyxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQyxHQUFoQyxDQUFvQztNQUFDLFdBQVc7SUFBWixDQUFwQztJQUNBLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLEdBQS9CLENBQW1DO01BQUMsV0FBVztJQUFaLENBQW5DO0VBQ0gsQ0FIRCxNQUdPO0lBQ0gsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0MsR0FBaEMsQ0FBb0M7TUFBQyxXQUFXO0lBQVosQ0FBcEM7SUFDQSxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQixHQUEvQixDQUFtQztNQUFDLFdBQVc7SUFBWixDQUFuQztFQUNIO0FBQ0o7O0FBRUQsU0FBUyxpQkFBVCxHQUE4QjtFQUMxQixTQUFTLENBQUMsR0FBVixDQUFjO0lBQUMsU0FBUztFQUFWLENBQWQ7RUFDQSxTQUFTLENBQUMsR0FBVixDQUFjO0lBQUMsU0FBUztFQUFWLENBQWQ7RUFDQSxPQUFPLENBQUMsR0FBUixDQUFZO0lBQ1IsU0FBUyxtQkFERDtJQUVSLFdBQVc7RUFGSCxDQUFaO0VBSUEsUUFBUSxDQUFDLEdBQVQsQ0FBYTtJQUNULFNBQVMsb0JBREE7SUFFVCxXQUFXO0VBRkYsQ0FBYjtFQUlBLGdCQUFnQjs7RUFDaEIsSUFBRyxZQUFZLENBQUMsY0FBYixDQUE0QixRQUE1QixDQUFILEVBQTBDO0lBQ3RDLE1BQU0sQ0FBQyxZQUFQLENBQW9CLFVBQXBCLENBQStCLFFBQS9CO0lBQ0EsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsUUFBNUIsRUFBc0MsSUFBdEM7SUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7SUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFlBQVksQ0FBQyxPQUFiLENBQXFCLFFBQXJCLENBQVo7RUFDSCxDQUxELE1BS087SUFDSCxNQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixDQUE0QixRQUE1QixFQUFzQyxJQUF0QztFQUNIO0FBQ0o7O0FBQ0QsU0FBUyxXQUFULEdBQXdCO0VBQ3BCLFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBQyxTQUFTO0VBQVYsQ0FBZDtFQUNBLFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBQyxTQUFTO0VBQVYsQ0FBZDtFQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVk7SUFBQyxTQUFTO0VBQVYsQ0FBWjtFQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixFQUFzQixPQUF0QjtFQUNBLFFBQVEsQ0FBQyxHQUFULENBQWEsU0FBYixFQUF1QixNQUF2QjtFQUNBLGdCQUFnQjs7RUFDaEIsSUFBRyxZQUFZLENBQUMsY0FBYixDQUE0QixRQUE1QixDQUFILEVBQTBDO0lBQ3RDLE1BQU0sQ0FBQyxZQUFQLENBQW9CLFVBQXBCLENBQStCLFFBQS9CO0lBQ0EsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsUUFBNUIsRUFBc0MsR0FBdEM7SUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7SUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFlBQVksQ0FBQyxPQUFiLENBQXFCLFFBQXJCLENBQVo7RUFDSCxDQUxELE1BS087SUFDSCxNQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixDQUE0QixRQUE1QixFQUFzQyxHQUF0QztFQUNIO0FBQ0o7O0FBQ0QsU0FBUyxZQUFULEdBQXlCO0VBQ3JCLFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBQyxTQUFTO0VBQVYsQ0FBZDtFQUNBLFFBQVEsQ0FBQyxHQUFULENBQWE7SUFBQyxTQUFTO0VBQVYsQ0FBYjtFQUNBLFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBQyxTQUFTO0VBQVYsQ0FBZDtFQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixFQUFzQixNQUF0QjtFQUNBLFFBQVEsQ0FBQyxHQUFULENBQWEsU0FBYixFQUF1QixPQUF2QjtFQUNBLGdCQUFnQjs7RUFDaEIsSUFBRyxZQUFZLENBQUMsY0FBYixDQUE0QixRQUE1QixDQUFILEVBQTBDO0lBQ3RDLE1BQU0sQ0FBQyxZQUFQLENBQW9CLFVBQXBCLENBQStCLFFBQS9CO0lBQ0EsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsUUFBNUIsRUFBc0MsR0FBdEM7SUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7SUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFlBQVksQ0FBQyxPQUFiLENBQXFCLFFBQXJCLENBQVo7RUFDSCxDQUxELE1BS087SUFDSCxNQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixDQUE0QixRQUE1QixFQUFzQyxHQUF0QztFQUNIO0FBQ0o7O0FBQ0QsU0FBUyxNQUFULEdBQW1CO0VBQ2YsU0FBUyxDQUFDLEdBQVYsQ0FBYztJQUFDLFNBQVM7RUFBVixDQUFkO0VBQ0EsU0FBUyxDQUFDLEdBQVYsQ0FBYztJQUFDLFNBQVM7RUFBVixDQUFkO0VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLEVBQXNCLE1BQXRCO0VBQ0EsUUFBUSxDQUFDLEdBQVQsQ0FBYSxTQUFiLEVBQXVCLE1BQXZCO0VBQ0EsZ0JBQWdCOztFQUNoQixJQUFHLFlBQVksQ0FBQyxjQUFiLENBQTRCLFFBQTVCLENBQUgsRUFBMEM7SUFDdEMsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsVUFBcEIsQ0FBK0IsUUFBL0I7SUFDQSxZQUFZLENBQUMsT0FBYixDQUFxQixRQUFyQixFQUErQixHQUEvQjtJQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksTUFBWjtJQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksWUFBWSxDQUFDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBWjtFQUNILENBTEQsTUFLTztJQUNILE1BQU0sQ0FBQyxZQUFQLENBQW9CLE9BQXBCLENBQTRCLFFBQTVCLEVBQXNDLEdBQXRDO0VBQ0g7QUFDSjs7QUFDRCxTQUFTLFlBQVQsR0FBeUI7RUFDckI7RUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFdBQVo7RUFFQSxNQUFNLENBQUMsR0FBUCxDQUFXO0lBQUMsV0FBVztFQUFaLENBQVg7RUFDQSxVQUFVLENBQUMsR0FBWCxDQUFlO0lBQUMsV0FBVztFQUFaLENBQWYsRUFMcUIsQ0FNckI7O0VBQ0EsU0FBUyxDQUFDLEdBQVYsQ0FBYztJQUFDLFNBQVM7RUFBVixDQUFkO0VBQ0EsU0FBUyxDQUFDLEdBQVYsQ0FBYztJQUFDLFNBQVM7RUFBVixDQUFkO0VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLEVBQXNCLE1BQXRCO0VBQ0EsUUFBUSxDQUFDLEdBQVQsQ0FBYSxTQUFiLEVBQXVCLE1BQXZCO0FBRUg7O0FBQ0QsU0FBUyxhQUFULEdBQTBCO0VBQ3RCO0VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaO0VBRUEsTUFBTSxDQUFDLEdBQVAsQ0FBVztJQUFDLFdBQVc7RUFBWixDQUFYO0VBQ0EsVUFBVSxDQUFDLEdBQVgsQ0FBZTtJQUFDLFdBQVc7RUFBWixDQUFmLEVBTHNCLENBTXRCOztFQUNBLFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBQyxTQUFTO0VBQVYsQ0FBZDtFQUNBLFNBQVMsQ0FBQyxHQUFWLENBQWM7SUFBQyxTQUFTO0VBQVYsQ0FBZDtFQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixFQUFzQixNQUF0QjtFQUNBLFFBQVEsQ0FBQyxHQUFULENBQWEsU0FBYixFQUF1QixNQUF2QjtBQUVIOztBQUNELFNBQVMsY0FBVCxHQUEyQjtFQUN2QjtFQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksWUFBWjs7RUFFQSxJQUFJLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixNQUEyQixNQUEvQixFQUF1QztJQUNuQyxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQixHQUEvQixDQUFtQztNQUFDLFdBQVc7SUFBWixDQUFuQztJQUNBLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCLEdBQTlCLENBQWtDO01BQUMsV0FBVztJQUFaLENBQWxDO0VBQ0gsQ0FIRCxNQUdPO0lBQ0gsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0IsR0FBL0IsQ0FBbUM7TUFBQyxXQUFXO0lBQVosQ0FBbkM7SUFDQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QixHQUE5QixDQUFrQztNQUFDLFdBQVc7SUFBWixDQUFsQztFQUNIOztFQUNELElBQUksUUFBUSxDQUFDLEdBQVQsQ0FBYSxTQUFiLE1BQTRCLE1BQWhDLEVBQXdDO0lBQ3BDLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDLEdBQWhDLENBQW9DO01BQUMsV0FBVztJQUFaLENBQXBDO0lBQ0EsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0IsR0FBL0IsQ0FBbUM7TUFBQyxXQUFXO0lBQVosQ0FBbkM7RUFDSCxDQUhELE1BR087SUFDSCxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQyxHQUFoQyxDQUFvQztNQUFDLFdBQVc7SUFBWixDQUFwQztJQUNBLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLEdBQS9CLENBQW1DO01BQUMsV0FBVztJQUFaLENBQW5DO0VBQ0g7O0VBQ0QsTUFBTSxDQUFDLEdBQVAsQ0FBVztJQUFDLFdBQVc7RUFBWixDQUFYO0VBQ0EsVUFBVSxDQUFDLEdBQVgsQ0FBZTtJQUFDLFdBQVc7RUFBWixDQUFmO0VBRUEsU0FBUyxDQUFDLEdBQVYsQ0FBYztJQUFDLFNBQVM7RUFBVixDQUFkO0VBQ0EsU0FBUyxDQUFDLEdBQVYsQ0FBYztJQUFDLFNBQVM7RUFBVixDQUFkO0VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWTtJQUNSLFNBQVMsbUJBREQ7SUFFUixXQUFXO0VBRkgsQ0FBWjtFQUlBLFFBQVEsQ0FBQyxHQUFULENBQWE7SUFDVCxTQUFTLG9CQURBO0lBRVQsV0FBVztFQUZGLENBQWI7QUFJSDs7ZUFNYztFQUNYLElBQUksRUFBRSxnQkFBVztJQUNiLEtBQUssYUFBTDtJQUNBLEtBQUssY0FBTDtJQUNBLEtBQUssZ0JBQUw7SUFDQSxLQUFLLGFBQUwsR0FKYSxDQUlTO0VBQ3pCLENBTlU7O0VBT1g7RUFDQSxhQUFhLEVBQUUseUJBQVc7SUFDdEIsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsWUFBVTtNQUN2QixJQUFJLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixNQUEyQixNQUEvQixFQUF1QztRQUNuQztRQUNBLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLEdBQS9CLENBQW1DO1VBQUMsV0FBVztRQUFaLENBQW5DO1FBQ0EsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEIsR0FBOUIsQ0FBa0M7VUFBQyxXQUFXO1FBQVosQ0FBbEM7UUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVosRUFBc0IsT0FBdEI7O1FBQ0EsSUFBSSxRQUFRLENBQUMsR0FBVCxDQUFhLFNBQWIsTUFBNEIsTUFBaEMsRUFBdUM7VUFBRTtVQUNyQyxXQUFXO1FBQ2QsQ0FGRCxNQUVPO1VBQUU7VUFDTCxpQkFBaUI7UUFDcEI7TUFDSixDQVZELE1BVU87UUFDSCxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQixHQUEvQixDQUFtQztVQUFDLFdBQVc7UUFBWixDQUFuQztRQUNBLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCLEdBQTlCLENBQWtDO1VBQUMsV0FBVztRQUFaLENBQWxDO1FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLEVBQXNCLE1BQXRCOztRQUNBLElBQUksUUFBUSxDQUFDLEdBQVQsQ0FBYSxTQUFiLE1BQTRCLE1BQWhDLEVBQXVDO1VBQUU7VUFDckMsTUFBTTtRQUNULENBRkQsTUFFTztVQUFFO1VBQ0wsWUFBWTtRQUNmO01BQ0o7SUFDSixDQXJCRDtJQXVCQSxXQUFXLENBQUMsS0FBWixDQUFrQixZQUFVO01BQ3hCLElBQUksUUFBUSxDQUFDLEdBQVQsQ0FBYSxTQUFiLE1BQTRCLE1BQWhDLEVBQXdDO1FBQ3BDO1FBQ0EsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0MsR0FBaEMsQ0FBb0M7VUFBQyxXQUFXO1FBQVosQ0FBcEM7UUFDQSxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQixHQUEvQixDQUFtQztVQUFDLFdBQVc7UUFBWixDQUFuQztRQUNBLFFBQVEsQ0FBQyxHQUFULENBQWEsU0FBYixFQUF1QixPQUF2Qjs7UUFDQSxJQUFJLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixNQUEyQixNQUEvQixFQUFzQztVQUFFO1VBQ3BDLFlBQVk7UUFDZixDQUZELE1BRU87VUFBRTtVQUNMLGlCQUFpQjtRQUNwQjtNQUNKLENBVkQsTUFVTztRQUNILENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDLEdBQWhDLENBQW9DO1VBQUMsV0FBVztRQUFaLENBQXBDO1FBQ0EsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0IsR0FBL0IsQ0FBbUM7VUFBQyxXQUFXO1FBQVosQ0FBbkM7UUFDQSxRQUFRLENBQUMsR0FBVCxDQUFhLFNBQWIsRUFBdUIsTUFBdkI7O1FBQ0EsSUFBSSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVosTUFBMkIsTUFBL0IsRUFBc0M7VUFBRTtVQUNwQyxNQUFNO1FBQ1QsQ0FGRCxNQUVPO1VBQUU7VUFDTCxXQUFXO1FBQ2Q7TUFDSjtJQUNKLENBckJEO0VBc0JILENBdERVOztFQXVEWDtFQUNBLGNBQWMsRUFBRSwwQkFBVztJQUN2QjtJQUNBLGFBQWEsQ0FBQyxLQUFkLENBQW9CLFlBQVU7TUFDMUIsY0FBYyxDQUFDLEdBQWYsQ0FBbUI7UUFBQyxXQUFXO01BQVosQ0FBbkI7TUFDQSxnQkFBZ0IsQ0FBQyxHQUFqQixDQUFxQjtRQUFDLFdBQVc7TUFBWixDQUFyQjtJQUNILENBSEQsRUFGdUIsQ0FNdkI7O0lBQ0EsY0FBYyxDQUFDLEtBQWYsQ0FBcUIsWUFBVTtNQUMzQixjQUFjLENBQUMsR0FBZixDQUFtQjtRQUFDLFdBQVc7TUFBWixDQUFuQjtNQUNBLGdCQUFnQixDQUFDLEdBQWpCLENBQXFCO1FBQUMsV0FBVztNQUFaLENBQXJCO0lBQ0gsQ0FIRCxFQVB1QixDQVd2Qjs7SUFDQSxhQUFhLENBQUMsS0FBZCxDQUFvQixZQUFVO01BQzFCLEtBQUssQ0FBQyx5QkFBRCxDQUFMO01BQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSx5QkFBWjtJQUNILENBSEQ7RUFJSCxDQXhFVTs7RUF5RVg7RUFDQSxnQkFBZ0IsRUFBRSw0QkFBWTtJQUMxQixJQUFJLE1BQU0sR0FBSSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVosQ0FBZDtJQUNBLElBQUksT0FBTyxHQUFJLFFBQVEsQ0FBQyxHQUFULENBQWEsU0FBYixDQUFmO0lBQ0EsSUFBSSxRQUFKOztJQUVBLElBQUcsWUFBWSxDQUFDLGNBQWIsQ0FBNEIsUUFBNUIsQ0FBSCxFQUEwQztNQUN0QztNQUNBLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFQLENBQW9CLE9BQXBCLENBQTRCLFFBQTVCLENBQXBCO01BQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxhQUFaOztNQUNBLElBQUksYUFBYSxLQUFLLElBQXRCLEVBQTJCO1FBQ3ZCO1FBQ0EsaUJBQWlCO01BQ3BCLENBSEQsTUFHTyxJQUFHLGFBQWEsS0FBSyxHQUFyQixFQUEwQjtRQUM3QjtRQUNBLFdBQVc7TUFDZCxDQUhNLE1BR0EsSUFBSSxhQUFhLEtBQUssR0FBdEIsRUFBMkI7UUFDOUI7UUFDQSxZQUFZO01BQ2YsQ0FITSxNQUdBLElBQUksYUFBYSxLQUFLLEdBQXRCLEVBQTJCO1FBQzlCO1FBQ0EsTUFBTTtNQUNULENBSE0sTUFHQTtRQUNIO1FBQ0EsaUJBQWlCO01BQ3BCO0lBQ0osQ0FwQkQsTUFvQk87TUFDSDtNQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBWjs7TUFDQSxJQUFLLE1BQU0sS0FBSyxPQUFaLElBQXlCLE9BQU8sS0FBSyxNQUF6QyxFQUFrRDtRQUFFO1FBQ2hELFFBQVEsR0FBRyxHQUFYO01BQ0gsQ0FGRCxNQUVPLElBQUssTUFBTSxLQUFLLE1BQVosSUFBd0IsT0FBTyxLQUFLLE9BQXhDLEVBQWtEO1FBQUU7UUFDdkQsUUFBUSxHQUFHLEdBQVg7TUFDSCxDQUZNLE1BRUEsSUFBSyxNQUFNLEtBQUssT0FBWixJQUF5QixPQUFPLEtBQUssT0FBekMsRUFBbUQ7UUFBRTtRQUN4RCxRQUFRLEdBQUcsSUFBWDtNQUNILENBRk0sTUFFQTtRQUNILFFBQVEsR0FBRyxJQUFYLENBREcsQ0FFSDs7UUFDQSxpQkFBaUI7TUFDcEI7O01BQ0QsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsUUFBNUIsRUFBc0MsUUFBdEM7SUFDSDtFQUVKLENBcEhVOztFQXFIWDtFQUNBLGFBQWEsRUFBRSx5QkFBVztJQUN0QjtJQUNBLElBQUksWUFBWSxHQUFHLENBQ2YsTUFBTSxDQUFDLFVBQVAsQ0FBa0Isb0JBQWxCLENBRGUsRUFFZixNQUFNLENBQUMsVUFBUCxDQUFrQixvQkFBbEIsQ0FGZSxFQUdmLE1BQU0sQ0FBQyxVQUFQLENBQWtCLHFCQUFsQixDQUhlLENBQW5CLENBRnNCLENBUXRCOztJQUNBLFNBQVMsV0FBVCxHQUF3QjtNQUNwQixJQUFJLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0IsT0FBcEIsRUFBNkI7UUFDekIsWUFBWTtNQUNmLENBRkQsTUFFTyxJQUFJLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0IsT0FBcEIsRUFBNkI7UUFDaEMsYUFBYTtNQUNoQixDQUZNLE1BRUEsSUFBSSxZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCLE9BQXBCLEVBQTZCO1FBQ2hDLGNBQWM7TUFDakIsQ0FGTSxNQUVBO1FBQ0gsT0FBTyxDQUFDLEdBQVIsQ0FBWSxZQUFaO01BQ0g7SUFDSixDQW5CcUIsQ0FvQnRCOzs7SUFDQSxXQUFXLEdBckJXLENBc0J0Qjs7SUFDQSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFqQyxFQUF5QyxDQUFDLEVBQTFDLEVBQThDO01BQzFDLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0IsV0FBaEIsQ0FBNEIsV0FBNUI7SUFDSDtFQUNKO0FBaEpVLEM7Ozs7OztBQ3BNZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQSx5QkFBSyxZQUFMLEcsQ0FDQTtBQUVBOzs7QUFDQSxDQUFDLENBQUMsWUFBWTtFQUNaO0VBQ0EsZ0JBQVcsSUFBWCxHQUZZLENBR1o7OztFQUNBLHFCQUFnQixJQUFoQixHQUpZLENBS1o7OztFQUNBLHNCQUFjLElBQWQsR0FOWSxDQU9aOzs7RUFDQSxtQkFBYyxJQUFkOztFQUNBLG1CQUFjLElBQWQsR0FUWSxDQVVaOzs7RUFDQSxxQkFBZ0IsSUFBaEIsR0FYWSxDQVlaOzs7RUFDQSx3QkFBYSxJQUFiLEdBYlksQ0FjWjs7O0VBQ0EsdUJBQWtCLElBQWxCLEdBZlksQ0FnQlo7OztFQUNBLFVBQVUsQ0FBQyxZQUFZO0lBQ3JCLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQix1QkFBMUIsQ0FBbEI7O0lBQ0EsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBaEMsRUFBd0MsQ0FBQyxFQUF6QyxFQUE2QztNQUMzQyxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsaUJBQWYsQ0FBaUMsS0FBakMsR0FBeUMsQ0FBbkQ7TUFDQSxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsaUJBQWYsQ0FBaUMsTUFBakMsR0FBMEMsQ0FBcEQ7TUFDQSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsS0FBZixDQUFxQixRQUFyQixHQUFnQyxHQUFHLEdBQUcsSUFBdEM7TUFDQSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsS0FBZixDQUFxQixTQUFyQixHQUFpQyxHQUFHLEdBQUcsSUFBdkM7SUFDRDtFQUNGLENBUlMsRUFRUCxJQVJPLENBQVY7QUFTRCxDQTFCQSxDQUFEOzs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUNlO0VBQ2IsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCLEtBQUssaUJBQUw7SUFDQSxLQUFLLHFCQUFMO0lBQ0EsS0FBSyxtQkFBTDtFQUNELENBTFk7RUFNYjtFQUNBLHFCQUFxQixFQUFFLGlDQUFZLENBQ2pDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNELENBMUJZO0VBMkJiO0VBQ0EsaUJBQWlCLEVBQUUsNkJBQVk7SUFDN0IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLHFCQUExQixDQUFiO0lBRUEsTUFBTSxDQUFDLE9BQVAsQ0FBZSxVQUFBLEVBQUUsRUFBSTtNQUNuQjtNQUNBLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxhQUFILENBQWlCLEdBQWpCLEVBQXNCLGtCQUFyQztNQUNBLFFBQVEsQ0FBQyxTQUFULEdBQXFCLE9BQU8sUUFBUSxDQUFDLFNBQWhCLEdBQTRCLEdBQWpELENBSG1CLENBSW5COztNQUNBLElBQUksRUFBRSxDQUFDLGFBQUgsQ0FBaUIsc0JBQWpCLENBQUosRUFBOEM7UUFDNUM7UUFDQSxFQUFFLENBQUMsYUFBSCxDQUFpQixJQUFqQixFQUF1QixLQUF2QixDQUE2QixPQUE3QixHQUF1QyxNQUF2QyxDQUY0QyxDQUc1Qzs7UUFDQSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QixDQUFiO1FBQ0EsTUFBTSxDQUFDLEtBQVAsQ0FBYSxPQUFiLEdBQXVCLFFBQXZCO1FBQ0EsTUFBTSxDQUFDLEtBQVAsQ0FBYSxNQUFiLEdBQXNCLFNBQXRCO1FBQ0EsTUFBTSxDQUFDLFNBQVAsR0FDRSx5REFERjtRQUVBLEVBQUUsQ0FBQyxZQUFILENBQWdCLE1BQWhCLEVBQXdCLEVBQUUsQ0FBQyxhQUFILENBQWlCLEdBQWpCLENBQXhCLEVBVDRDLENBVzVDOztRQUNBLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBQWI7UUFDQSxNQUFNLENBQUMsS0FBUCxDQUFhLE9BQWIsR0FBdUIsTUFBdkI7UUFDQSxNQUFNLENBQUMsS0FBUCxDQUFhLE1BQWIsR0FBc0IsU0FBdEI7UUFDQSxNQUFNLENBQUMsU0FBUCxHQUNFLDBEQURGO1FBRUEsRUFBRSxDQUFDLFlBQUgsQ0FBZ0IsTUFBaEIsRUFBd0IsRUFBRSxDQUFDLGFBQUgsQ0FBaUIsR0FBakIsQ0FBeEIsRUFqQjRDLENBbUI1Qzs7UUFDQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBWTtVQUMzQyxNQUFNLENBQUMsS0FBUCxDQUFhLE9BQWIsR0FBdUIsTUFBdkI7VUFDQSxNQUFNLENBQUMsS0FBUCxDQUFhLE9BQWIsR0FBdUIsUUFBdkI7VUFDQSxFQUFFLENBQUMsYUFBSCxDQUFpQixJQUFqQixFQUF1QixLQUF2QixDQUE2QixPQUE3QixHQUF1QyxPQUF2QztRQUNELENBSkQsRUFwQjRDLENBMEI1Qzs7UUFDQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBWTtVQUMzQyxNQUFNLENBQUMsS0FBUCxDQUFhLE9BQWIsR0FBdUIsTUFBdkI7VUFDQSxNQUFNLENBQUMsS0FBUCxDQUFhLE9BQWIsR0FBdUIsUUFBdkI7VUFDQSxFQUFFLENBQUMsYUFBSCxDQUFpQixJQUFqQixFQUF1QixLQUF2QixDQUE2QixPQUE3QixHQUF1QyxNQUF2QztRQUNELENBSkQ7TUFLRCxDQWhDRCxNQWdDTztRQUNMO1FBQ0EsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYixDQUZLLENBRXVDOzs7UUFDNUMsTUFBTSxDQUFDLEtBQVAsQ0FBYSxPQUFiLEdBQXVCLFFBQXZCO1FBQ0EsTUFBTSxDQUFDLEtBQVAsQ0FBYSxXQUFiLEdBQTJCLE1BQTNCO1FBQ0EsTUFBTSxDQUFDLFNBQVAsR0FBbUIsRUFBbkI7UUFDQSxFQUFFLENBQUMsWUFBSCxDQUFnQixNQUFoQixFQUF3QixFQUFFLENBQUMsYUFBSCxDQUFpQixHQUFqQixDQUF4QjtNQUNEO0lBQ0YsQ0E3Q0Q7RUE4Q0QsQ0E3RVk7RUE4RWI7RUFDQSxtQkFBbUIsRUFBRSwrQkFBWTtJQUMvQixJQUFJLFFBQVEsQ0FBQyxRQUFULEtBQXNCLFlBQTFCLEVBQXdDO01BQ3RDO01BQ0E7TUFDQSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBVCxDQUFnQixNQUFoQixDQUF1QixDQUF2QixDQUFiLENBSHNDLENBSXRDOztNQUNBLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFQLENBQWEsR0FBYixDQUFWLENBTHNDLENBTXRDOztNQUNBLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFELENBQW5CO01BQ0EsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLHVCQUExQixDQUFUOztNQUNBLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQXZCLEVBQStCLENBQUMsRUFBaEMsRUFBb0M7UUFDbEM7UUFDQSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELENBQUYsQ0FBTSxRQUFOLENBQWUsTUFBbkMsRUFBMkMsQ0FBQyxFQUE1QyxFQUFnRDtVQUM5QyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBRCxDQUFGLENBQU0sUUFBTixDQUFlLENBQWYsRUFBa0IsWUFBbEIsQ0FBK0IsWUFBL0IsQ0FBWjs7VUFDQSxJQUFJLEtBQUssS0FBSyxNQUFkLEVBQXNCO1lBQ3BCLEtBQUssR0FBRyxNQUFSO1VBQ0Q7O1VBQ0QsSUFBSSxLQUFLLEtBQUssU0FBZCxFQUF5QjtZQUN2QixFQUFFLENBQUMsQ0FBRCxDQUFGLENBQU0sUUFBTixDQUFlLENBQWYsRUFBa0IsS0FBbEIsQ0FBd0IsT0FBeEIsR0FBa0MsTUFBbEM7VUFDRDtRQUNGO01BQ0Y7SUFDRjtFQUNGO0FBdEdZLEM7Ozs7Ozs7Ozs7O0FDTmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO2VBQ2U7RUFDYixJQUFJLEVBQUUsZ0JBQVk7SUFDaEIsS0FBSyxXQUFMO0lBQ0EsS0FBSyxjQUFMO0lBQ0EsS0FBSyxZQUFMO0lBQ0EsS0FBSyxjQUFMO0lBQ0EsTUFBTSxDQUNILElBREgsQ0FDUTtNQUNKLEtBQUssRUFBRSxpQ0FESDtNQUVKLEVBQUUsRUFBRSxXQUZBO01BR0o7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBLGVBQWUsRUFBRSwyQkFBWTtRQUMzQixPQUFPLENBQUMsR0FBUixDQUFZLDRCQUFaO01BQ0Q7SUFYRyxDQURSLEVBY0csSUFkSCxDQWNRLFlBQVk7TUFDaEI7TUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLHlCQUFaO0lBQ0QsQ0FqQkg7RUFrQkQsQ0F4Qlk7RUF5QmI7RUFDQSxXQUFXLEVBQUUsdUJBQVk7SUFDdkIsSUFBSSxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUFKLEVBQTRDO01BQzFDLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDLEtBQXZDLENBQTZDLE9BQTdDLEdBQXVELE9BQXZEO0lBQ0Q7RUFDRixDQTlCWTtFQStCYjtFQUNBLGNBQWMsRUFBRSwwQkFBWTtJQUMxQjtJQUNBLElBQ0UsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsS0FDQSxRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsQ0FGRixFQUdFO01BQ0EsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXRCLENBREEsQ0FFQTs7TUFDQSxJQUFJLG1CQUFtQixHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVYsQ0FBMUI7TUFFQSxNQUFNLENBQ0gsZ0JBREgsQ0FDb0I7UUFDaEIsS0FBSyxFQUFFLGlDQURTO1FBQzBCO1FBQzFDO1FBQ0EsSUFBSSxFQUFFLG1CQUhVO1FBR1c7UUFDM0IsWUFBWSxFQUFFLEtBSkUsQ0FJSzs7TUFKTCxDQURwQixFQU9HLElBUEgsQ0FPUSxVQUFVLEdBQVYsRUFBZTtRQUNuQjtRQUNBLGVBQWUsQ0FBQyxTQUFoQixHQUE0QixHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sS0FBbkMsQ0FGbUIsQ0FHbkI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0QsQ0FoQkgsV0FpQlMsVUFBVSxHQUFWLEVBQWU7UUFDcEI7UUFDQSxPQUFPLENBQUMsS0FBUixDQUFjLEdBQWQ7TUFDRCxDQXBCSDtJQXFCRDtFQUNGLENBaEVZO0VBaUViO0VBQ0EsWUFBWSxFQUFFLHdCQUFZO0lBQ3hCLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLG9CQUF2QixDQUFuQjtJQUNBLElBQUksU0FBUyxHQUFHLENBQWhCO0lBQ0EsTUFBTSxDQUNILGlCQURILENBQ3FCO01BQ2pCLEtBQUssRUFBRSxpQ0FEVTtNQUN5QjtNQUMxQztNQUNBLFFBQVEsRUFBRSxTQUhPO01BR0k7TUFDckIsWUFBWSxFQUFFLEtBSkcsQ0FJSTs7SUFKSixDQURyQixFQU9HLElBUEgsQ0FPUSxVQUFVLEdBQVYsRUFBZTtNQUNuQixJQUFJLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLHNCQUF2QixDQUExQjtNQUNBLElBQUksMEJBQTBCLEdBQUcsbUJBQW1CLENBQUMsYUFBckQ7TUFDQSwwQkFBMEIsQ0FBQyxXQUEzQixDQUF1QyxtQkFBdkMsRUFIbUIsQ0FJbkI7O01BQ0EsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxTQUFwQixFQUErQixDQUFDLEVBQWhDLEVBQW9DO1FBQ2xDLElBQUksR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLE9BQVgsRUFBb0I7VUFDbEIsSUFBSSxvQkFBb0IsR0FBRyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sT0FBbEM7VUFDQSxJQUFJLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBTyxJQUEvQjtVQUNBLElBQUksZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLEdBQTlCO1VBQ0EsSUFBSSxtQkFBbUIsR0FBRyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sTUFBakM7VUFDQSxJQUFJLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBTyxZQUEvQjtVQUNBLElBQUksZUFBZSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLEVBQW5DO1VBRUEsSUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUF6QjtVQUNBLGtCQUFrQixDQUFDLFNBQW5CLEdBQ0Usb0NBQ0EsbUJBREEsR0FFQSw2REFGQSxHQUdBLGlCQUhBLEdBSUEsNEJBSkEsR0FLQSxpQkFMQSxHQU1BLHFEQU5BLEdBT0EsZ0JBUEEsR0FRQSxlQVJBLEdBU0EsSUFUQSxHQVVBLG9CQVZBLEdBV0EsWUFaRjtVQWFBLFlBQVksQ0FBQyxNQUFiLENBQW9CLGtCQUFwQjtRQUNEO01BQ0Y7SUFDRixDQXRDSCxXQXVDUyxVQUFVLEdBQVYsRUFBZTtNQUNwQixPQUFPLENBQUMsS0FBUixDQUFjLEdBQWQ7SUFDRCxDQXpDSDtFQTBDRCxDQS9HWTtFQWdIYjtFQUNBLGNBQWMsRUFBRSwwQkFBWTtJQUMxQixJQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLENBQUosRUFBMkM7TUFDekMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBakI7TUFDQSxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixpQkFBdkIsQ0FBckI7TUFDQSxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixpQkFBdkIsQ0FBckI7TUFFQSxVQUFVLENBQUMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBWTtRQUMvQyxVQUFVLENBQUMsU0FBWCxDQUFxQixNQUFyQixDQUE0QixNQUE1QjtRQUNBLGNBQWMsQ0FBQyxTQUFmLENBQXlCLE1BQXpCLENBQWdDLFlBQWhDO1FBQ0EsY0FBYyxDQUFDLFNBQWYsQ0FBeUIsTUFBekIsQ0FBZ0MsWUFBaEM7O1FBRUEsSUFBSSxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixLQUFpQyxNQUFyQyxFQUE2QztVQUMzQyxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixHQUErQixPQUEvQjtVQUNBLGNBQWMsQ0FBQyxLQUFmLENBQXFCLE9BQXJCLEdBQStCLE1BQS9CO1FBQ0QsQ0FIRCxNQUdPO1VBQ0w7VUFDQSxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixHQUErQixNQUEvQjtVQUNBLGNBQWMsQ0FBQyxLQUFmLENBQXFCLE9BQXJCLEdBQStCLE9BQS9CO1FBQ0Q7TUFDRixDQWJEO0lBY0Q7RUFDRjtBQXRJWSxDOzs7Ozs7Ozs7Ozs7QUNoQmY7QUFDQTtBQUNBO0FBQ0E7QUFFQyxJQUFJLGFBQWEsR0FBRztFQUNqQixJQUFJLEVBQUUsZ0JBQVc7SUFDYixLQUFLLE1BQUw7SUFDQSxLQUFLLFlBQUw7RUFDSCxDQUpnQjtFQUtqQixNQUFNLEVBQUUsa0JBQVc7SUFDYjtJQUNGLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxNQUFWLENBQWlCLFlBQVU7TUFFdkI7TUFDQSxTQUFTLEdBQUcsR0FBWixLQUFvQixDQUFwQixHQUF3QixDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsR0FBYixDQUFpQixTQUFqQixFQUE0QixPQUE1QixDQUF4QixHQUErRCxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsR0FBYixDQUFpQixTQUFqQixFQUE0QixNQUE1QixDQUEvRDtJQUNILENBSkQ7RUFLSCxDQVpnQjtFQWFqQixZQUFZLEVBQUUsd0JBQVc7SUFDckI7SUFDQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsS0FBYixDQUFtQixZQUFVO01BQ3pCLElBQUksTUFBTSxDQUFDLFdBQVgsRUFBd0I7UUFDcEIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsQ0FBckI7TUFDSCxDQUZELE1BRU8sSUFBSSxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUE3QixFQUF3QztRQUMzQyxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUF6QixHQUFxQyxDQUFyQztNQUNILENBRk0sTUFFQSxJQUFJLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBbEIsRUFBNkI7UUFDaEMsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLEdBQTBCLENBQTFCO01BQ0g7SUFFSixDQVREO0VBVUg7QUF6QmdCLENBQXBCLEMsQ0E0QkQ7Ozs7QUFDQSxTQUFTLFNBQVQsR0FBcUI7RUFDakIsT0FBTztJQUNQLElBQUksRUFBRSxNQUFNLENBQUMsV0FBUCxJQUFzQixRQUFRLENBQUMsZUFBVCxDQUF5QixVQUEvQyxJQUE2RCxRQUFRLENBQUMsSUFBVCxDQUFjLFVBQTNFLElBQXVGLENBRHRGO0lBRVAsR0FBRyxFQUFFLE1BQU0sQ0FBQyxXQUFQLElBQXNCLFFBQVEsQ0FBQyxlQUFULENBQXlCLFNBQS9DLElBQTRELFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBMUUsSUFBdUY7RUFGckYsQ0FBUDtBQUlILEMsQ0FHRDs7Ozs7Ozs7O2VDMUNlO0VBQ1gsSUFBSSxFQUFFLGdCQUFXO0lBQ2IsS0FBSyxNQUFMO0VBQ0gsQ0FIVTtFQUlYLE1BQU0sRUFBRSxrQkFBVztJQUNmLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLHFCQUF2QixDQUFoQjs7SUFFQSxJQUFJLFNBQUosRUFBZTtNQUNYLFNBQVMsQ0FBQyxPQUFWLEdBQW9CLFlBQVc7UUFDM0IsU0FBUyxDQUFDLFFBQVYsR0FBcUIsSUFBckI7UUFDQSxTQUFTLENBQUMsV0FBVixHQUF3QixZQUF4QjtRQUNBLGFBQWE7UUFDYixLQUFLLE9BQUwsR0FBZSxJQUFmO01BQ0gsQ0FMRDs7TUFPQSxTQUFTLENBQUMsU0FBVixHQUFzQixZQUFXO1FBQUUsSUFBSSxLQUFLLENBQUMsT0FBTixJQUFpQixFQUFyQixFQUF5QixPQUFPLEtBQVA7TUFBYyxDQUExRTtJQUNIOztJQUVELFNBQVMsV0FBVCxDQUFxQixjQUFyQixFQUFxQztNQUNqQztNQUNBLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLHFCQUF2QixDQUFmOztNQUNBLFFBQVEsQ0FBQyxPQUFULEdBQW1CLFlBQVc7UUFDMUIsU0FBUyxDQUFDLEtBQVYsR0FBa0IsRUFBbEI7UUFDQSxjQUFjLENBQUMsU0FBZixHQUEyQixFQUEzQjtRQUVBLFNBQVMsQ0FBQyxXQUFWLEdBQXdCLFFBQXhCO1FBQ0EsU0FBUyxDQUFDLEtBQVY7TUFDSCxDQU5EO0lBT0g7O0lBRUQsSUFBSSxVQUFVLEdBQUcsU0FBYixVQUFhLENBQVMsSUFBVCxFQUFlLFNBQWYsRUFBMEIsVUFBMUIsRUFBc0M7TUFDbkQ7O01BQ0EsSUFBSSxHQUFHLEdBQUcseUNBQVY7TUFDQSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixTQUF4QixDQUFiO01BQ0EsSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBckI7TUFFQSxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQUosRUFBVjtNQUNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsS0FBVCxFQUFnQixJQUFoQixFQUFzQixJQUF0QjtNQUNBLEdBQUcsQ0FBQyxJQUFKOztNQUNBLEdBQUcsQ0FBQyxrQkFBSixHQUF5QixZQUFXO1FBQ2hDLElBQUksR0FBRyxDQUFDLFVBQUosS0FBbUIsQ0FBbkIsSUFBd0IsR0FBRyxDQUFDLE1BQUosS0FBZSxHQUEzQyxFQUFnRDtVQUM1QztVQUNBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLEtBQWxCO1VBQ0EsTUFBTSxDQUFDLFdBQVAsR0FBcUIsVUFBckI7VUFDQSxNQUFNLENBQUMsS0FBUDtVQUVBLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFkO1VBQ0EsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLGVBQWY7VUFDQSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsb0JBQUwsQ0FBMEIsT0FBMUIsQ0FBWDtVQUNBLElBQUksS0FBSyxHQUFHLEVBQVo7O1VBQ0EsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTCxHQUFjLENBQTNCLEVBQThCLENBQUMsSUFBSSxDQUFuQyxFQUFzQyxDQUFDLEVBQXZDLEVBQTJDO1lBQ3ZDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFELENBQWY7WUFDQSxLQUFLLENBQUMsSUFBTixDQUFXO2NBQ1AsS0FBSyxFQUFFLElBQUksQ0FBQyxvQkFBTCxDQUEwQixPQUExQixFQUFtQyxDQUFuQyxFQUFzQyxTQUR0QztjQUVQLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQUwsQ0FBMEIsU0FBMUIsRUFBcUMsQ0FBckMsRUFBd0MsU0FGMUM7Y0FHUCxHQUFHLEVBQUUsSUFBSSxDQUFDLG9CQUFMLENBQTBCLEtBQTFCLEVBQWlDLENBQWpDLEVBQW9DO1lBSGxDLENBQVg7VUFLSDs7VUFDRCxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVztZQUN4QyxJQUFJLEdBQUcsR0FBRyx3QkFBVjtZQUNBLElBQUksUUFBUSxHQUFHLEtBQUssS0FBTCxDQUFXLElBQVgsR0FBa0IsV0FBbEIsR0FBZ0MsS0FBaEMsQ0FBc0MsU0FBdEMsQ0FBZjtZQUNBLGNBQWMsQ0FBQyxTQUFmLEdBQTJCLEVBQTNCOztZQUNBLElBQUksS0FBSyxLQUFMLENBQVcsSUFBWCxHQUFrQixNQUFsQixJQUE0QixDQUFoQyxFQUFtQztjQUMvQjtZQUNILENBTnVDLENBUXhDOzs7WUFDQSxLQUFLLENBQUMsT0FBTixDQUFjLFVBQVMsSUFBVCxFQUFlO2NBQ3pCLElBQUksT0FBTyxHQUFHLElBQWQ7Y0FDQSxJQUFJLGFBQWEsR0FBRyxFQUFwQjs7Y0FDQSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQU4sSUFBZSxJQUFJLENBQUMsS0FBTCxDQUFXLElBQVgsT0FBc0IsRUFBekMsRUFBNkM7Z0JBQ3pDLElBQUksQ0FBQyxLQUFMLEdBQWEsVUFBYjtjQUNIOztjQUNELElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBWCxFQUF0QjtjQUNBLElBQUksVUFBVSxHQUFHLGVBQWUsQ0FBQyxXQUFoQixFQUFqQjtjQUNBLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQUwsQ0FBYSxJQUFiLEdBQW9CLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDLEVBQXhDLENBQXhCO2NBQ0EsSUFBSSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsV0FBbEIsRUFBbkI7Y0FDQSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBcEI7Y0FDQSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQW5CO2NBQ0EsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFyQjtjQUNBLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBbkIsQ0FieUIsQ0FjekI7O2NBQ0EsSUFBSSxZQUFZLEtBQUssRUFBckIsRUFBeUI7Z0JBQ3JCLFFBQVEsQ0FBQyxPQUFULENBQWlCLFVBQVMsT0FBVCxFQUFrQixDQUFsQixFQUFxQjtrQkFDbEMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxPQUFYLENBQW1CLE9BQW5CLENBQWQ7a0JBQ0EsYUFBYSxHQUFHLFlBQVksQ0FBQyxPQUFiLENBQXFCLE9BQXJCLENBQWhCOztrQkFFQSxJQUFJLFdBQVcsR0FBRyxDQUFkLElBQW1CLGFBQWEsR0FBRyxDQUF2QyxFQUEwQztvQkFDdEMsT0FBTyxHQUFHLEtBQVY7a0JBQ0gsQ0FGRCxNQUVPO29CQUNILElBQUksYUFBYSxHQUFHLENBQXBCLEVBQXVCO3NCQUNuQixhQUFhLEdBQUcsQ0FBaEI7b0JBQ0g7O29CQUNELElBQUksQ0FBQyxJQUFJLENBQVQsRUFBWTtzQkFDUixXQUFXLEdBQUcsYUFBZDtvQkFDSCxDQU5FLENBT0g7O2tCQUNIO2dCQUNKLENBZkQ7Y0FnQkgsQ0FqQkQsTUFpQk87Z0JBQ0gsT0FBTyxHQUFHLEtBQVY7Y0FDSCxDQWxDd0IsQ0FtQ3pCOzs7Y0FDQSxJQUFJLE9BQUosRUFBYTtnQkFDVDtnQkFDQSxHQUFHLElBQUksa0JBQWlCLFFBQVEsQ0FBQyxRQUExQixHQUFtQyxJQUFuQyxHQUF3QyxRQUFRLENBQUMsSUFBakQsR0FBc0QsR0FBdEQsR0FBMkQsUUFBM0QsR0FBc0UsMEJBQXRFLEdBQW1HLGVBQW5HLEdBQXFILE1BQTVIO2dCQUNBLElBQUksT0FBTyxHQUFHLGlCQUFkOztnQkFDQSxJQUFJLFdBQVcsSUFBSSxDQUFuQixFQUFzQjtrQkFDbEI7a0JBQ0EsSUFBSSxLQUFLLEdBQUcsV0FBVyxHQUFHLEVBQTFCO2tCQUNBLElBQUksR0FBRyxHQUFHLFdBQVcsR0FBRyxFQUF4Qjs7a0JBRUEsSUFBSSxLQUFLLEdBQUcsQ0FBWixFQUFlO29CQUNYLEtBQUssR0FBRyxDQUFSO2tCQUNIOztrQkFFRCxJQUFJLEtBQUssSUFBSSxDQUFiLEVBQWdCO29CQUNaLEdBQUcsR0FBRyxFQUFOO2tCQUNIOztrQkFFRCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBbEIsRUFBMEI7b0JBQ3RCLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBZDtrQkFDSCxDQWZpQixDQWlCbEI7OztrQkFDQSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsRUFBc0IsR0FBdEIsQ0FBcEIsQ0FsQmtCLENBb0JsQjs7a0JBQ0EsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsVUFBUyxPQUFULEVBQWtCO29CQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLE1BQUosQ0FBVyxPQUFYLEVBQW9CLElBQXBCLENBQVg7b0JBQ0EsYUFBYSxHQUFHLGFBQWEsQ0FBQyxPQUFkLENBQXNCLElBQXRCLEVBQTRCLGtDQUFrQyxPQUFsQyxHQUE0QyxPQUF4RSxDQUFoQjtrQkFDSCxDQUhEO2tCQUtBLEdBQUcsSUFBSSxnQ0FBZ0MsYUFBaEMsR0FBZ0QsU0FBdkQ7Z0JBQ0g7O2dCQUNELEdBQUcsSUFBSSxPQUFQO2NBQ0g7WUFDSixDQXRFRDtZQXVFQSxHQUFHLElBQUksT0FBUDs7WUFDQSxJQUFJLEdBQUcsQ0FBQyxPQUFKLENBQVksTUFBWixNQUF3QixDQUFDLENBQTdCLEVBQWdDO2NBQzVCLGNBQWMsQ0FBQyxTQUFmLEdBQTJCLEdBQUcsR0FBRyxzREFBakM7WUFDSCxDQUZELE1BRU87Y0FDSCxjQUFjLENBQUMsU0FBZixHQUEyQixHQUFHLEdBQUcsR0FBakM7WUFDSDs7WUFFRCxXQUFXLENBQUMsY0FBRCxDQUFYO1VBQ0gsQ0F4RkQ7UUF5Rkg7TUFDSixDQTdHRDtJQThHSCxDQXZIRDs7SUEwSEEsSUFBSSxhQUFhLEdBQUcsU0FBaEIsYUFBZ0IsR0FBVztNQUMzQixJQUFJLElBQUksR0FBRyxhQUFYO01BQ0EsVUFBVSxDQUFDLElBQUQsRUFBTyxvQkFBUCxFQUE2QixxQkFBN0IsQ0FBVjtJQUNILENBSEQsQ0FwSmUsQ0EwSmY7OztJQUNBLElBQUksd0JBQXdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBL0I7SUFDQSx3QkFBd0IsQ0FBQyxnQkFBekIsQ0FBMEMsT0FBMUMsRUFBbUQsWUFBVTtNQUN6RCxJQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLEtBQXRDLENBQTRDLE9BQTVDLEtBQXdELE9BQTVELEVBQXFFO1FBQ2pFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLEtBQXRDLENBQTRDLE9BQTVDLEdBQXNELE1BQXREO01BQ0gsQ0FGRCxNQUVPO1FBQ0gsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsS0FBdEMsQ0FBNEMsT0FBNUMsR0FBc0QsT0FBdEQ7UUFDQSxRQUFRLENBQUMsYUFBVCxDQUF1QixxQkFBdkIsRUFBOEMsS0FBOUM7TUFDSDtJQUNKLENBUEQ7SUFRQSxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixDQUFuQjtJQUNBLFlBQVksQ0FBQyxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFVO01BQzdDLElBQUksUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsS0FBdEMsQ0FBNEMsT0FBNUMsS0FBd0QsT0FBNUQsRUFBcUU7UUFDakUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsS0FBdEMsQ0FBNEMsT0FBNUMsR0FBc0QsTUFBdEQ7TUFDSCxDQUZELE1BRU87UUFDSCxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixFQUFzQyxLQUF0QyxDQUE0QyxPQUE1QyxHQUFzRCxPQUF0RDtNQUNIO0lBQ0osQ0FORDtFQVFIO0FBakxVLEM7Ozs7Ozs7Ozs7O0FDQWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWU7RUFDWCxJQUFJLEVBQUUsZ0JBQVc7SUFDYixLQUFLLEtBQUw7RUFDSCxDQUhVO0VBSVgsS0FBSyxFQUFFLGlCQUFXO0lBRWxCO0lBQ0EsU0FBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCLE1BQXZCLEVBQStCO01BQzdCLElBQUksT0FBTyxNQUFQLElBQWtCLFFBQXRCLEVBQWdDO1FBQ3hCLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFMLElBQWdCLElBQUksQ0FBQyxxQkFBckIsSUFBOEMsSUFBSSxDQUFDLGtCQUFuRCxJQUF5RSxJQUFJLENBQUMsaUJBQXBHOztRQUVBLElBQUksQ0FBQyxDQUFDLGVBQU4sRUFBdUI7VUFDbkIsT0FBTyxJQUFQLEVBQWE7WUFDYixJQUFJLGVBQWUsQ0FBQyxJQUFoQixDQUFxQixJQUFyQixFQUEyQixNQUEzQixDQUFKLEVBQXdDO2NBQ3RDLE9BQU8sSUFBUDtZQUNELENBRkQsTUFFTztjQUNMLElBQUksR0FBRyxJQUFJLENBQUMsYUFBWjtZQUNEO1VBQ0E7UUFDSjs7UUFDRCxPQUFPLEtBQVA7TUFDSCxDQWJMLE1BYVc7UUFDSCxPQUFPLElBQVAsRUFBYTtVQUNiLElBQUksSUFBSSxJQUFJLE1BQVosRUFBb0I7WUFDaEIsT0FBTyxJQUFQO1VBQ0gsQ0FGRCxNQUVPO1lBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFaO1VBQ0Q7UUFDQTs7UUFDRCxPQUFPLEtBQVA7TUFDSDtJQUNKLENBM0JlLENBNkJoQjs7O0lBQ0EsTUFBTSxDQUFDLGVBQVAsR0FBeUIsVUFBUyxJQUFULEVBQWUsT0FBZixFQUF3QjtNQUM3QztNQUNBLElBQUksSUFBSSxHQUFHLElBQVg7TUFDQSxJQUFJLENBQUMsSUFBTCxHQUFZLElBQUksSUFBSSxtQkFBcEI7TUFFQTtBQUNWO01BRU07O01BQ0EsSUFBSSxDQUFDLFFBQUwsR0FBZ0IsWUFBVztRQUN2QixJQUFJLE9BQUosQ0FEdUIsQ0FFdkI7O1FBQ0EsSUFBSSxRQUFRLENBQUMsYUFBYixFQUE0QjtVQUM1QixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QiwyQkFBdkIsS0FBdUQsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsNEJBQXZCLENBQXJFLEVBQTJIO1lBQ3JILE9BQU8sT0FBTyxDQUFDLFlBQVIsQ0FBcUIsU0FBckIsQ0FBUDtVQUNELENBRkwsTUFFVyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFkLEVBQStDO1lBQ3BELE9BQU8sT0FBTyxDQUFDLFNBQWY7VUFDRDtRQUNOOztRQUNELE9BQU8sUUFBUSxDQUFDLEtBQWhCO01BQ0MsQ0FYSCxDQVRpRCxDQXNCL0M7OztNQUNBLElBQUksQ0FBQyxRQUFMLEdBQWdCLFlBQVc7UUFDekIsSUFBSSxPQUFKLENBRHlCLENBRXpCOztRQUNBLElBQUksUUFBUSxDQUFDLGFBQWIsRUFBNEI7VUFDeEIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsMkJBQXZCLEtBQXVELFFBQVEsQ0FBQyxhQUFULENBQXVCLDRCQUF2QixDQUFyRSxFQUEySDtZQUN6SCxPQUFPLE9BQU8sQ0FBQyxZQUFSLENBQXFCLFNBQXJCLENBQVA7VUFDRCxDQUZELE1BR0ksT0FBTyxFQUFQO1FBQ0wsQ0FMSCxNQU1NLE9BQU8sRUFBUDtNQUNQLENBVkQsQ0F2QitDLENBbUMvQzs7O01BQ0EsSUFBSSxDQUFDLGNBQUwsR0FBc0IsWUFBVztRQUMvQixJQUFJLE9BQUosQ0FEK0IsQ0FFL0I7O1FBQ0EsSUFBSSxRQUFRLENBQUMsYUFBYixFQUE0QjtVQUN4QixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixpQ0FBdkIsS0FBNkQsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0NBQXZCLENBQTdELElBQTJILFFBQVEsQ0FBQyxhQUFULENBQXVCLDBCQUF2QixDQUF6SSxFQUE2TDtZQUMzTCxPQUFPLE9BQU8sQ0FBQyxZQUFSLENBQXFCLFNBQXJCLENBQVA7VUFDRCxDQUZELE1BR0UsT0FBTyxFQUFQO1FBQ0gsQ0FMSCxNQUtTO1VBQ0gsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLFNBQXRDLENBQWdELGFBQWhELENBQWQsRUFDSSxPQUFPLE9BQU8sQ0FBQyxZQUFSLENBQXFCLFNBQXJCLENBQVAsQ0FESixLQUdJLE9BQU8sRUFBUDtRQUNQO01BQ0osQ0FkRCxDQXBDK0MsQ0FvRC9DOzs7TUFDQSxJQUFJLENBQUMsS0FBTCxHQUFhO1FBQ1QsU0FBUyxlQUFVLEVBQVYsRUFBYztVQUNyQixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNFLElBQUksR0FBRyxHQUFHLGtEQUNSLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBRFYsR0FFUixPQUZRLEdBRUEsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQVgsQ0FGbEIsR0FHUixPQUhRLEdBR0Esa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FINUI7VUFJQSxJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDSCxDQVJRO1FBU1QsVUFBVSxnQkFBVSxFQUFWLEVBQWM7VUFDdEIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDRSxJQUFJLE1BQU0sR0FBRyxtRUFBaUUsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQVgsQ0FBaEc7VUFDRixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsYUFBSCxDQUFpQiw2QkFBakIsQ0FBakI7VUFDQSxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsc0JBQVgsQ0FBa0MsOEJBQWxDLEVBQWtFLENBQWxFLENBQVY7VUFDQSxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsc0JBQVgsQ0FBa0MsbUJBQWxDLEVBQXVELENBQXZELENBQWI7O1VBRUUsSUFBSSxHQUFKLEVBQVM7WUFDYixHQUFHLENBQUMsTUFBSjtVQUNELENBRkssTUFFQyxJQUFHLE1BQUgsRUFBVztZQUNoQixNQUFNLENBQUMsTUFBUDtVQUNLLENBRkEsTUFFTTtZQUNYLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFUO1lBQ0EsTUFBTSxDQUFDLFNBQVAsR0FBbUIsbUJBQW5CO1lBQ0EsTUFBTSxDQUFDLFNBQVAsR0FBbUIsWUFBbkI7WUFDQSxNQUFNLENBQUMsS0FBUCxHQUFlLG1CQUFmO1lBRVEsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQU47WUFDQSxHQUFHLENBQUMsR0FBSixHQUFVLE1BQVY7WUFDQSxHQUFHLENBQUMsR0FBSixHQUFVLHVCQUFWO1lBQ1IsR0FBRyxDQUFDLFlBQUosQ0FBaUIsT0FBakIsRUFBeUIsOEJBQXpCOztZQUNBLEdBQUcsQ0FBQyxNQUFKLEdBQWEsR0FBRyxDQUFDLE9BQUosR0FBYyxZQUFZO2NBQ3JDLElBQUksTUFBTSxDQUFDLFdBQVgsRUFBd0I7Z0JBQ3RCLE1BQU0sQ0FBQyxNQUFQO2dCQUNBLFVBQVUsQ0FBQyxXQUFYLENBQXVCLEdBQXZCO2NBQ0Q7WUFDRixDQUxEOztZQU1BLFVBQVUsQ0FBQyxXQUFYLENBQXVCLE1BQXZCO1VBQ0s7UUFDSixDQXRDUTtRQXVDWCxVQUFVLGdCQUFVLEVBQVYsRUFBYztVQUNwQixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNBLElBQUksR0FBRyxHQUFHLCtDQUNSLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBRFYsR0FFUixRQUZRLEdBRUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQVgsQ0FGbkIsR0FHUixTQUhRLEdBR0Usa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FIOUI7VUFJQSxJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDSCxDQTlDVTtRQStDWCxVQUFVLGdCQUFVLEVBQVYsRUFBYztVQUNwQixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNBLElBQUksR0FBRyxHQUFHLHNFQUNSLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBRFYsR0FFUixPQUZRLEdBRUEsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQVgsQ0FGbEIsR0FHUixRQUhRLEdBR0Msa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FIbkIsR0FJUixRQUpRLEdBSUUsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVgsQ0FKOUI7VUFLQSxJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDSCxDQXZEVTtRQXdEWCxVQUFVLGdCQUFVLEVBQVYsRUFBYztVQUNwQixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNBLElBQUksR0FBRyxHQUFHLGlEQUNSLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBRFYsR0FFUixlQUZRLEdBRVEsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQVgsQ0FGMUIsR0FHUixPQUhRLEdBR0Esa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FIbEIsR0FJUixlQUpRLEdBSVMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVgsQ0FKckM7VUFLQSxJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDSCxDQWhFVTtRQWtFVCxVQUFXLGdCQUFTLEVBQVQsRUFBYTtVQUN0QixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNFLElBQUksR0FBRyxHQUFHLHFCQUFxQixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBWCxDQUF2QyxHQUEyRCw4Q0FBM0QsR0FBNEcsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQVgsQ0FBOUgsR0FBZ0osS0FBaEosR0FBd0osa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVgsQ0FBcEw7VUFFQSxNQUFNLENBQUMsUUFBUCxDQUFnQixJQUFoQixHQUF1QixHQUF2QjtRQUNILENBdkVRO1FBd0VULFdBQVksaUJBQVMsRUFBVCxFQUFhO1VBQ3ZCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxFQUFELENBQTFCO1VBQ0UsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVYsR0FBcUIsZ0NBQS9CO1VBQ0EsR0FBRyxJQUFJLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFYLENBQWxCLEdBQXNDLE9BQXRDLEdBQWdELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQXpFO1VBRU4sSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO1FBQ0csQ0E5RVE7UUErRVQsYUFBYyxtQkFBUyxFQUFULEVBQWE7VUFDekIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDRSxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBVixHQUFxQixzREFBL0I7VUFDQSxHQUFHLElBQUksWUFBWSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBWCxDQUFyQztVQUNBLEdBQUcsSUFBSSxVQUFVLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQW5DO1VBQ0EsR0FBRyxJQUFJLGtCQUFrQixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBWCxDQUEzQztVQUVOLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWDtRQUNHLENBdkZRO1FBd0ZULFlBQWEsa0JBQVMsRUFBVCxFQUFhO1VBQ3hCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxFQUFELENBQTFCO1VBQ0UsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVYsR0FBcUIsNkJBQS9CO1VBQ0EsR0FBRyxJQUFJLE9BQU8sa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQVgsQ0FBaEM7VUFDQSxHQUFHLElBQUksWUFBWSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBWCxDQUFyQztVQUVOLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWDtRQUNHLENBL0ZRO1FBZ0dULGNBQWUsb0JBQVMsRUFBVCxFQUFhO1VBQzFCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxFQUFELENBQTFCO1VBQ0UsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVYsR0FBcUIsd0JBQS9CO1VBQ0EsR0FBRyxJQUFJLFNBQVMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQVgsQ0FBbEM7VUFFTixJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDRyxDQXRHUTtRQXVHVCxVQUFXLGdCQUFTLEVBQVQsRUFBYTtVQUN0QixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFWLEdBQXFCLHdCQUEvQjtVQUNBLEdBQUcsSUFBSSxTQUFTLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQWxDO1VBQ0EsR0FBRyxJQUFJLFlBQVksa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FBckM7VUFFTixJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDRyxDQTlHUTtRQStHVCxhQUFjLG1CQUFTLEVBQVQsRUFBYTtVQUN6QixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFWLEdBQXFCLG1CQUEvQjtVQUNBLEdBQUcsSUFBSSxTQUFTLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQWxDO1VBQ0EsR0FBRyxJQUFJLFlBQVksa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FBckM7VUFDQSxHQUFHLElBQUksWUFBWSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsV0FBWCxDQUFyQztVQUVOLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWDtRQUNHLENBdkhRO1FBd0hUO1FBQ0o7UUFDSTtRQUNBO1FBQ0E7UUFDQTtRQUNKO1FBQ0E7UUFDSTtRQUNBLGVBQWdCLHFCQUFTLEVBQVQsRUFBYTtVQUMzQixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFWLEdBQXFCLDZCQUEvQjtVQUNBLEdBQUcsSUFBSSxTQUFTLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQWxDO1VBQ0EsR0FBRyxJQUFJLFlBQVksa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FBckM7VUFFTixJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDRyxDQXhJUTtRQXlJVCxZQUFhLGtCQUFTLEVBQVQsRUFBYTtVQUN4QixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFWLEdBQXFCLHlDQUEvQjtVQUNBLEdBQUcsSUFBSSxVQUFVLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQW5DO1VBQ0EsR0FBRyxJQUFJLFlBQVksa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FBckM7VUFDQSxHQUFHLElBQUksYUFBYSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsTUFBWCxDQUF0QztVQUVOLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWDtRQUNHLENBakpRO1FBa0pUO1FBQ0o7UUFDSTtRQUNBO1FBQ0E7UUFDSjtRQUNBO1FBQ0k7UUFDQTtRQUNKO1FBQ0k7UUFDQTtRQUNBO1FBQ0o7UUFDQTtRQUNJO1FBQ0EsYUFBYyxtQkFBUyxFQUFULEVBQWE7VUFDekIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDRSxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBVixHQUFxQixzQkFBL0I7VUFDQSxHQUFHLElBQUksWUFBWSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBWCxDQUFyQztVQUVOLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWDtRQUNHLENBeEtRO1FBeUtULFVBQVcsZ0JBQVMsRUFBVCxFQUFhO1VBQ3RCLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxFQUFELENBQTFCO1VBQ0UsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVYsR0FBcUIsMEJBQS9CO1VBQ0EsR0FBRyxJQUFJLFFBQVEsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQVgsQ0FBakM7VUFDQSxHQUFHLElBQUksUUFBUSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBWCxDQUFqQztVQUVOLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWDtRQUNHLENBaExRO1FBaUxUO1FBQ0o7UUFDSTtRQUNBO1FBQ0E7UUFDQTtRQUNKO1FBQ0E7UUFDSTtRQUNBO1FBQ0o7UUFDSTtRQUNBO1FBQ0E7UUFDSjtRQUNBO1FBQ0k7UUFDQTtRQUNKO1FBQ0k7UUFDQTtRQUNBO1FBQ0E7UUFDSjtRQUNBO1FBQ0k7UUFDQSxZQUFhLGtCQUFTLEVBQVQsRUFBYTtVQUN4QixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFWLEdBQXFCLCtCQUEvQjtVQUNBLEdBQUcsSUFBSSxTQUFTLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQWxDO1VBQ0EsR0FBRyxJQUFJLFlBQVksa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FBckM7VUFFTixJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDRyxDQWxOUTtRQW1OVCxjQUFlLG9CQUFTLEVBQVQsRUFBYTtVQUMxQixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFWLEdBQXFCLDJCQUEvQjtVQUNBLEdBQUcsSUFBSSxTQUFTLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQWxDO1VBQ0EsR0FBRyxJQUFJLFlBQVksa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FBckM7VUFFTixJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDRyxDQTFOUTtRQTJOVCxhQUFjLG1CQUFTLEVBQVQsRUFBYTtVQUN6QixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRCxDQUExQjtVQUNFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFWLEdBQXFCLHlCQUEvQjtVQUNBLEdBQUcsSUFBSSxTQUFTLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFYLENBQWxDO1VBQ04sR0FBRyxJQUFJLFlBQVksa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FBckM7VUFDQSxHQUFHLElBQUksa0JBQWtCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxXQUFYLENBQTNDO1VBQ0EsR0FBRyxJQUFJLFlBQVksa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQVgsQ0FBckM7VUFDQSxHQUFHLElBQUksZUFBUDtVQUVBLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWDtRQUNHLENBck9RO1FBc09ULGlCQUFrQix1QkFBUyxFQUFULEVBQWE7VUFDN0IsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUQsQ0FBMUI7VUFDRSxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBVixHQUFxQixnREFBL0I7VUFDTixHQUFHLElBQUksa0JBQWtCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxXQUFYLENBQTNDO1VBQ0EsR0FBRyxJQUFJLGVBQWUsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQVgsQ0FBeEM7VUFFQSxJQUFJLENBQUMsS0FBTCxDQUFXLEdBQVg7UUFDRyxDQTdPUSxDQThPVDtRQUNKO1FBQ0k7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDSTs7TUF2UFMsQ0FBYixDQXJEK0MsQ0FnVC9DOztNQUNBLElBQUksQ0FBQyxLQUFMLEdBQWEsVUFBUyxHQUFULEVBQWM7UUFDM0IsSUFBSSxJQUFKLEVBQVUsR0FBVjtRQUVBLElBQUksVUFBVSxHQUFHLEdBQWpCO1FBQUEsSUFDSSxXQUFXLEdBQUcsR0FEbEIsQ0FIMkIsQ0FNM0I7UUFDQTs7UUFDQSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBUCxHQUFvQixNQUFNLENBQUMsVUFBM0IsR0FBd0MsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsV0FBekIsR0FBdUMsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsV0FBaEUsR0FBOEUsTUFBTSxDQUFDLEtBQXpJO1FBQ0EsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVAsR0FBcUIsTUFBTSxDQUFDLFdBQTVCLEdBQTBDLFFBQVEsQ0FBQyxlQUFULENBQXlCLFlBQXpCLEdBQXdDLFFBQVEsQ0FBQyxlQUFULENBQXlCLFlBQWpFLEdBQWdGLE1BQU0sQ0FBQyxNQUE5STs7UUFDQSxJQUFJLEtBQUssR0FBRyxHQUFSLElBQWUsTUFBTSxHQUFHLEdBQTVCLEVBQWlDO1VBQy9CLElBQUksR0FBSSxNQUFNLENBQUMsS0FBUCxHQUFlLENBQWhCLEdBQXNCLFVBQVUsR0FBRyxDQUExQztVQUNBLEdBQUcsR0FBSSxNQUFNLENBQUMsTUFBUCxHQUFnQixDQUFqQixHQUF1QixXQUFXLEdBQUcsQ0FBM0M7UUFDRCxDQUhELE1BR087VUFDTDtVQUNJLElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxVQUFQLElBQXFCLFNBQXJCLEdBQWlDLE1BQU0sQ0FBQyxVQUF4QyxHQUFxRCxNQUFNLENBQUMsSUFBakY7VUFBQSxJQUNGLGFBQWEsR0FBRyxNQUFNLENBQUMsU0FBUCxJQUFvQixTQUFwQixHQUFnQyxNQUFNLENBQUMsU0FBdkMsR0FBbUQsTUFBTSxDQUFDLEdBRHhFLENBRkMsQ0FJTDs7VUFDQSxJQUFJLEdBQUssS0FBSyxHQUFHLENBQVQsR0FBZSxVQUFVLEdBQUcsQ0FBN0IsR0FBbUMsY0FBMUM7VUFDQSxHQUFHLEdBQUssTUFBTSxHQUFHLENBQVYsR0FBZ0IsV0FBVyxHQUFHLENBQS9CLEdBQXFDLGFBQTNDO1FBQ0Q7O1FBRUssSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFaLEVBQWdCLGNBQWhCLEVBQStCLG9GQUFvRixVQUFwRixHQUFpRyxXQUFqRyxHQUErRyxXQUEvRyxHQUE2SCxRQUE3SCxHQUF3SSxHQUF4SSxHQUE4SSxTQUE5SSxHQUEwSixJQUF6TCxDQUFsQixDQXRCcUIsQ0F1QnZCOztRQUNGLElBQUksTUFBTSxDQUFDLEtBQVgsRUFBa0I7VUFDZCxXQUFXLENBQUMsS0FBWjtRQUNMO01BQ0EsQ0EzQkQ7TUE2QkU7QUFDVjtNQUVVOzs7TUFDQSxJQUFJLENBQUMsT0FBTCxHQUFlO1FBQ1gsU0FBUyxFQUFFLFNBREE7UUFDVztRQUN0QixPQUFPLEVBQUUsWUFGRTtRQUVZO1FBQ3ZCLFFBQVEsRUFBRSxjQUhDO1FBR2U7UUFDMUIsUUFBUSxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsT0FBbEIsQ0FBMEIsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsSUFBaEIsQ0FBcUIsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsQ0FBMUIsTUFBa0UsQ0FBQyxDQUFuRSxHQUF1RSxVQUF2RSxHQUFvRixJQUpuRjtRQUtYLFFBQVEsRUFBRSxxRkFMQztRQU1YLEtBQUssRUFBRSxDQUFDLGVBQUQsRUFBaUIsZ0JBQWpCLEVBQWtDLG9CQUFsQyxFQUF1RCxnQkFBdkQsRUFBd0UsY0FBeEUsRUFBdUYsaUJBQXZGLEVBQXlHLGFBQXpHLEVBQXVILGNBQXZILEVBQXNJLEdBQXRJLEVBQTBJLFVBQTFJLEVBQXFKLGtCQUFySjtNQU5JLENBQWYsQ0FsVjZDLENBMlZqRDs7TUFDQSxLQUFLLElBQUksQ0FBVCxJQUFjLE9BQWQsRUFBdUI7UUFDckIsSUFBSSxDQUFDLE9BQUwsQ0FBYSxDQUFiLElBQWtCLE9BQU8sQ0FBQyxDQUFELENBQXpCO01BQ0QsQ0E5VmdELENBK1ZqRDs7O01BQ0EsSUFBSSxDQUFDLE9BQUwsQ0FBYSxRQUFiLEdBQXdCLElBQUksQ0FBQyxPQUFMLENBQWEsUUFBYixDQUFzQixXQUF0QixHQUFvQyxLQUFwQyxDQUEwQyxHQUExQyxDQUF4Qjs7TUFFQSxTQUFTLFVBQVQsQ0FBb0IsRUFBcEIsRUFBd0I7UUFDcEI7UUFDQSxJQUFJLEdBQUcsR0FBRyxFQUFWOztRQUNBLEtBQUssSUFBSSxDQUFULElBQWMsSUFBSSxDQUFDLE9BQW5CLEVBQTRCO1VBQzFCLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxJQUFJLENBQUMsT0FBTCxDQUFhLENBQWIsQ0FBVDtRQUNELENBTG1CLENBT3BCOzs7UUFDQSxHQUFHLENBQUMsR0FBSixHQUFVLElBQUksQ0FBQyxPQUFMLENBQWEsR0FBYixJQUFvQixNQUFNLENBQUMsUUFBUCxDQUFnQixJQUE5QztRQUNBLEdBQUcsQ0FBQyxLQUFKLEdBQVksSUFBSSxDQUFDLE9BQUwsQ0FBYSxLQUFiLElBQXNCLElBQUksQ0FBQyxRQUFMLEVBQWxDO1FBQ0EsR0FBRyxDQUFDLEtBQUosR0FBWSxJQUFJLENBQUMsT0FBTCxDQUFhLEtBQWIsSUFBc0IsSUFBSSxDQUFDLFFBQUwsRUFBbEM7UUFDQSxHQUFHLENBQUMsV0FBSixHQUFrQixJQUFJLENBQUMsT0FBTCxDQUFhLFdBQWIsSUFBNEIsSUFBSSxDQUFDLGNBQUwsRUFBOUM7O1FBRUEsS0FBSyxJQUFJLE1BQVQsSUFBbUIsRUFBRSxDQUFDLE9BQXRCLEVBQStCO1VBQzNCO1VBQ0YsSUFBSSxNQUFNLENBQUMsS0FBUCxDQUFhLE9BQWIsQ0FBSixFQUEyQjtZQUN6QixJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBUCxDQUFlLE9BQWYsRUFBd0IsRUFBeEIsQ0FBakI7O1lBQ0EsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFoQixFQUF3QjtjQUNwQjtZQUNIOztZQUNELFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBWCxDQUFrQixDQUFsQixFQUFxQixXQUFyQixLQUFxQyxVQUFVLENBQUMsS0FBWCxDQUFpQixDQUFqQixDQUFsRDtZQUNBLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxPQUFILENBQVcsTUFBWCxDQUFWOztZQUNBLElBQUksVUFBVSxLQUFLLFVBQW5CLEVBQStCO2NBQzNCLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBSixHQUFrQixLQUFsQixDQUF3QixHQUF4QixDQUFOO1lBQ0gsQ0FGRCxNQUVPLElBQUksVUFBVSxLQUFLLEtBQWYsSUFBd0IsR0FBeEIsSUFBK0IsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXLEdBQTlDLEVBQW1EO2NBQ3REO2NBQ0EsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFULEdBQWtCLEdBQXhCO1lBQ0g7O1lBQ0QsR0FBRyxDQUFDLFVBQUQsQ0FBSCxHQUFrQixHQUFsQjtVQUNEO1FBQ0Y7O1FBQ0QsT0FBTyxHQUFQO01BQ0g7O01BRUQsU0FBUyxjQUFULENBQXdCLEVBQXhCLEVBQTRCO1FBQ3hCO1FBQ0EsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBakI7UUFDQSxVQUFVLENBQUMsU0FBWCxHQUF1Qiw0QkFBdkI7O1FBQ0EsSUFBSSxFQUFFLENBQUMsYUFBSCxDQUFpQiw2QkFBakIsQ0FBSixFQUFxRDtVQUNqRDtRQUNIOztRQUNELElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxFQUFELENBQTFCLENBUHdCLENBU3hCOztRQUNBLElBQUksU0FBUyxDQUFDLFNBQVYsSUFBdUIsS0FBdkIsSUFBZ0MsU0FBUyxDQUFDLE9BQVYsSUFBcUIsWUFBekQsRUFDSSxVQUFVLENBQUMsU0FBWCxJQUF3Qiw0Q0FBeEIsQ0FESixLQUVLLElBQUksU0FBUyxDQUFDLFNBQVYsSUFBdUIsS0FBdkIsSUFBZ0MsU0FBUyxDQUFDLE9BQVYsSUFBcUIsVUFBekQsRUFDRCxVQUFVLENBQUMsU0FBWCxJQUF3QiwwQ0FBeEIsQ0Fib0IsQ0FleEI7O1FBQ0EsVUFBVSxDQUFDLFlBQVc7VUFDbEIsUUFBUSxTQUFTLENBQUMsUUFBbEI7WUFDQSxLQUFLLFNBQUw7Y0FDRSxVQUFVLENBQUMsU0FBWCxJQUF3QixzQ0FBeEI7Y0FDQTs7WUFDRixLQUFLLFVBQUw7Y0FDRSxVQUFVLENBQUMsU0FBWCxJQUF3Qix1Q0FBeEI7Y0FDQTs7WUFDRixLQUFLLFdBQUw7Y0FDRSxVQUFVLENBQUMsU0FBWCxJQUF3Qix3Q0FBeEI7Y0FDQSxVQUFVLENBQUMsS0FBWCxDQUFpQixVQUFqQixHQUE4QixDQUFFLFVBQVUsQ0FBQyxXQUFiLEdBQTJCLENBQTNCLEdBQStCLElBQTdEO2NBQ0E7O1lBQ0YsS0FBSyxZQUFMO2NBQ0UsVUFBVSxDQUFDLFNBQVgsSUFBd0IseUNBQXhCO2NBQ0EsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsU0FBakIsR0FBNkIsQ0FBRSxVQUFVLENBQUMsWUFBYixHQUE0QixDQUE1QixHQUFnQyxJQUE3RDtjQUNBOztZQUNGLEtBQUssYUFBTDtjQUNFLFVBQVUsQ0FBQyxTQUFYLElBQXdCLDBDQUF4QjtjQUNBLFVBQVUsQ0FBQyxLQUFYLENBQWlCLFNBQWpCLEdBQTZCLENBQUUsVUFBVSxDQUFDLFlBQWIsR0FBNEIsQ0FBNUIsR0FBZ0MsSUFBN0Q7Y0FDQTs7WUFDRixLQUFLLFlBQUw7Y0FDRSxVQUFVLENBQUMsU0FBWCxJQUF3Qix5Q0FBeEI7Y0FDQTs7WUFDRixLQUFLLGFBQUw7Y0FDRSxVQUFVLENBQUMsU0FBWCxJQUF3QiwwQ0FBeEI7Y0FDQTs7WUFDRixLQUFLLGNBQUw7Y0FDRSxVQUFVLENBQUMsU0FBWCxJQUF3QiwyQ0FBeEI7Y0FDQSxVQUFVLENBQUMsS0FBWCxDQUFpQixVQUFqQixHQUE4QixDQUFFLFVBQVUsQ0FBQyxXQUFiLEdBQTJCLENBQTNCLEdBQStCLElBQTdEO2NBQ0E7O1lBQ0Y7Y0FDRSxVQUFVLENBQUMsU0FBWCxJQUF3QiwyQ0FBeEI7Y0FDQSxVQUFVLENBQUMsS0FBWCxDQUFpQixVQUFqQixHQUE4QixDQUFFLFVBQVUsQ0FBQyxXQUFiLEdBQTJCLENBQTNCLEdBQStCLElBQTdEO2NBQ0E7VUFoQ0Y7UUFrQ0gsQ0FuQ1MsRUFtQ1IsQ0FuQ1EsQ0FBVixDQWhCd0IsQ0FzRHhCOztRQUNBLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFWLElBQXVCLFNBQXZCLEdBQW1DLDJDQUFuQyxHQUFpRiw0QkFBNEIsU0FBUyxDQUFDLFNBQXRDLEdBQWtELDRDQUFuSjtRQUNBLElBQUksSUFBSSxHQUFHLENBQVg7O1FBQ0EsS0FBSyxJQUFJLE9BQVQsSUFBb0IsU0FBUyxDQUFDLFFBQTlCLEVBQXdDO1VBQ3BDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBQVg7VUFDSSxPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVYsQ0FBbUIsT0FBbkIsQ0FBVjtVQUNKLElBQUksQ0FBQyxTQUFMLEdBQWlCLFNBQVMsR0FBRyxPQUE3QjtVQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsTUFBNUI7VUFDQSxJQUFJLENBQUMsU0FBTCxJQUFrQixNQUFJLFNBQVMsQ0FBQyxLQUFWLENBQWdCLElBQWhCLENBQXRCO1VBQ0EsSUFBSSxDQUFDLE9BQUwsQ0FBYSxPQUFiLEdBQXVCLE9BQXZCO1VBQ0EsSUFBSSxDQUFDLEtBQUwsR0FBYSxPQUFiO1VBQ0EsVUFBVSxDQUFDLFdBQVgsQ0FBdUIsSUFBdkI7VUFDQSxJQUFJO1FBQ1A7O1FBRUQsVUFBVSxDQUFDLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQVUsS0FBVixFQUFpQjtVQUNuRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBUCxFQUFlLHlCQUFmLENBQVgsRUFBc0Q7WUFDbEQsS0FBSyxDQUFDLGNBQU47WUFDQSxLQUFLLENBQUMsZUFBTjtZQUVBLElBQUksQ0FBQyxLQUFMLENBQVcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxPQUFiLENBQXFCLE9BQWhDLEVBQXlDLEVBQXpDO1lBQ0EsT0FBTyxLQUFQO1VBQ0g7UUFDSCxDQVJEO1FBVUEsRUFBRSxDQUFDLFdBQUgsQ0FBZSxVQUFmO01BQ0g7O01BRUQsSUFBSSxRQUFRLEdBQUcsT0FBTyxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQTNCLEdBQTBELElBQXpFOztNQUNDLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxTQUFULENBQW1CLFFBQW5CLENBQTRCLGtCQUE1QixDQUFoQixFQUFpRTtRQUNoRSxjQUFjLENBQUMsUUFBRCxDQUFkLENBRGdFLENBRWhFO01BQ0QsQ0FIQSxNQUlDO1FBQ0EsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVMsS0FBVCxFQUFnQjtVQUNqRCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QiwyQkFBdkIsQ0FBZjs7VUFFQSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFQLEVBQWUsMkJBQWYsQ0FBWixFQUF5RDtZQUN2RCxJQUFJLFFBQUosRUFBYztjQUNWLFFBQVEsQ0FBQyxTQUFULENBQW1CLE1BQW5CLENBQTBCLDBCQUExQixFQURVLENBR1Y7O2NBQ0EsSUFBSSxRQUFRLENBQUMsYUFBVCxDQUF1QiwrQkFBdkIsQ0FBSixFQUE2RDtnQkFDekQsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsK0JBQXZCLEVBQXdELE1BQXhEO2NBQ0g7WUFDSixDQVBELE1BT087Y0FDSCxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQVAsRUFBZSxJQUFJLENBQUMsSUFBcEIsQ0FBaEI7O2NBQ0EsSUFBSSxFQUFKLEVBQVE7Z0JBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFILENBQWEsUUFBYixDQUFzQiwwQkFBdEIsQ0FBTCxFQUF3RDtrQkFDdEQsY0FBYyxDQUFDLEVBQUQsQ0FBZDtrQkFDQSxVQUFVLENBQUMsWUFBWTtvQkFDbkIsRUFBRSxDQUFDLFNBQUgsQ0FBYSxHQUFiLENBQWlCLDBCQUFqQjtrQkFDSCxDQUZTLEVBRVAsQ0FGTyxDQUFWO2dCQUlEO2NBQ0Y7WUFDSjtVQUNGO1FBQ0YsQ0F4QkQ7SUEwQkgsQ0F0ZkM7O0lBd2ZGLElBQUksZUFBSixDQUFvQixvQkFBcEI7RUFDRDtBQTNoQlksQzs7Ozs7Ozs7OztlQ1BBO0VBQ1gsSUFBSSxFQUFFLGdCQUFXO0lBQ2IsS0FBSyxPQUFMO0VBQ0gsQ0FIVTtFQUlYLE9BQU8sRUFBRSxtQkFBVztJQUNoQixJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkIsQ0FBcEI7SUFDQSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixVQUF2QixDQUFkO0lBQ0EsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXLEtBQVgsQ0FBaUIsWUFBVTtNQUN2QixJQUFJLGFBQWEsQ0FBQyxLQUFkLENBQW9CLE9BQXBCLEtBQWdDLE1BQXBDLEVBQTRDO1FBQ3hDLGFBQWEsQ0FBQyxLQUFkLENBQW9CLE9BQXBCLEdBQThCLE9BQTlCO01BQ0gsQ0FGRCxNQUVPLElBQUksYUFBYSxDQUFDLEtBQWQsQ0FBb0IsT0FBcEIsS0FBZ0MsT0FBcEMsRUFBNEM7UUFDL0MsYUFBYSxDQUFDLEtBQWQsQ0FBb0IsT0FBcEIsR0FBOEIsTUFBOUI7TUFDSCxDQUZNLE1BRUE7UUFDSCxhQUFhLENBQUMsS0FBZCxDQUFvQixPQUFwQixHQUE4QixPQUE5QjtNQUNIO0lBQ0osQ0FSRDtFQVNIO0FBaEJVLEM7Ozs7Ozs7Ozs7O0FDQWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBQ2U7RUFDYixJQUFJLEVBQUUsZ0JBQVk7SUFDaEIsS0FBSyxnQkFBTDtFQUNELENBSFk7RUFJYjtFQUNBLGdCQUFnQixFQUFFLDRCQUFZLENBQzVCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNEO0FBZlksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05mO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksR0FBSSxZQUFZO0VBQ3RCOztFQUNBLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYztJQUNaLE9BQ0UsQ0FBQyxZQUFZLEdBQWIsR0FDSyxDQUFDLENBQUMsS0FBRixHQUNDLENBQUMsVUFBRCxHQUNBLENBQUMsQ0FBQyxHQUFGLEdBQ0UsWUFBTTtNQUNKLE1BQU0sS0FBSyxDQUFDLGtCQUFELENBQVg7SUFDRCxDQU5ULEdBT0ksQ0FBQyxZQUFZLEdBQWIsS0FDQyxDQUFDLENBQUMsR0FBRixHQUNDLENBQUMsQ0FBQyxLQUFGLEdBQ0EsQ0FBQyxVQUFELEdBQ0UsWUFBTTtNQUNKLE1BQU0sS0FBSyxDQUFDLGtCQUFELENBQVg7SUFDRCxDQU5MLENBUEosRUFjQSxNQUFNLENBQUMsTUFBUCxDQUFjLENBQWQsQ0FkQSxFQWVBLE1BQU0sQ0FBQyxtQkFBUCxDQUEyQixDQUEzQixFQUE4QixPQUE5QixDQUFzQyxVQUFBLENBQUMsRUFBSTtNQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRCxDQUFUO01BQ0Esb0JBQW1CLENBQW5CLEtBQXdCLE1BQU0sQ0FBQyxRQUFQLENBQWdCLENBQWhCLENBQXhCLElBQThDLENBQUMsQ0FBQyxDQUFELENBQS9DO0lBQ0QsQ0FIRCxDQWZBLEVBbUJBLENBcEJGO0VBc0JEOztFQUNELElBQUksQ0FBQyxHQUFHLENBQVI7RUFBQSxJQUNFLENBQUMsR0FBRyxDQUROO0VBRUEsQ0FBQyxXQUFELEdBQVksQ0FBWjs7RUE1QnNCLElBNkJoQixDQTdCZ0I7SUE4QnBCLFdBQVksQ0FBWixFQUFlO01BQUE7O01BQ2IsS0FBSyxDQUFMLEtBQVcsQ0FBQyxDQUFDLElBQWIsS0FBc0IsQ0FBQyxDQUFDLElBQUYsR0FBUyxFQUEvQixHQUNHLEtBQUssSUFBTCxHQUFZLENBQUMsQ0FBQyxJQURqQixFQUVHLEtBQUssY0FBTCxHQUFzQixDQUFDLENBRjFCO0lBR0Q7O0lBbENtQjtNQUFBO01BQUEsT0FtQ3BCLHVCQUFjO1FBQ1osS0FBSyxjQUFMLEdBQXNCLENBQUMsQ0FBdkI7TUFDRDtJQXJDbUI7O0lBQUE7RUFBQTs7RUF1Q3RCLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYztJQUNaLE9BQU8sQ0FBQyxDQUNMLE9BREksQ0FDSSxJQURKLEVBQ1UsT0FEVixFQUVKLE9BRkksQ0FFSSxJQUZKLEVBRVUsTUFGVixFQUdKLE9BSEksQ0FHSSxJQUhKLEVBR1UsTUFIVixFQUlKLE9BSkksQ0FJSSxJQUpKLEVBSVUsUUFKVixFQUtKLE9BTEksQ0FLSSxJQUxKLEVBS1UsUUFMVixDQUFQO0VBTUQ7O0VBQ0QsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFvQjtJQUNsQixJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBUCxDQUFjLElBQWQsQ0FBVjs7SUFDQSxLQUFLLElBQU0sRUFBWCxJQUFnQixDQUFoQjtNQUFtQixDQUFDLENBQUMsRUFBRCxDQUFELEdBQU8sQ0FBQyxDQUFDLEVBQUQsQ0FBUjtJQUFuQjs7SUFGa0Isa0NBQUgsQ0FBRztNQUFILENBQUc7SUFBQTs7SUFHbEIsT0FDRSxDQUFDLENBQUMsT0FBRixDQUFVLFVBQUEsQ0FBQyxFQUFJO01BQ2IsS0FBSyxJQUFNLEdBQVgsSUFBZ0IsQ0FBaEI7UUFBbUIsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxHQUFPLENBQUMsQ0FBQyxHQUFELENBQVI7TUFBbkI7SUFDRCxDQUZELEdBR0EsQ0FKRjtFQU1EOztFQUNELElBQU0sQ0FBQyxHQUFHLFNBQUosQ0FBSSxDQUFBLENBQUM7SUFBQSxPQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBUjtFQUFBLENBQVg7O0VBekRzQixJQTBEaEIsQ0ExRGdCO0lBMkRwQixXQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCO01BQUE7O01BQ2hCO01BQUUsS0FBSyxNQUFMLEdBQWMsRUFBZixFQUFxQixLQUFLLFdBQUwsR0FBbUIsQ0FBQyxDQUFDLFdBQTFDLEVBQXdELENBQUMsQ0FBQyxJQUFGLENBQU8sSUFBUCxDQUF4RDtJQUNGOztJQTdEbUI7TUFBQTtNQUFBLE9BOERwQixpQkFBUSxDQUFSLEVBQVc7UUFDVCxLQUFLLE1BQUwsSUFBZSxDQUFDLENBQUMsQ0FBRCxDQUFoQjtNQUNEO0lBaEVtQjtNQUFBO01BQUEsT0FpRXBCLGtCQUFTLENBQVQsRUFBWTtRQUNWLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFOLEVBQVc7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBVjtRQUNBLENBQUMsQ0FBQyxXQUFGLEtBQWtCLENBQUMsYUFBTSxLQUFLLFdBQVgsU0FBeUIsQ0FBekIsQ0FBbkIsR0FBa0QsS0FBSyxJQUFMLENBQVUsQ0FBVixDQUFsRDtNQUNEO0lBckVtQjtNQUFBO01BQUEsT0FzRXBCLG1CQUFVLENBQVYsRUFBYTtRQUNYLENBQUMsQ0FBQyxDQUFELENBQUQsS0FBUyxLQUFLLE1BQUwsSUFBZSxTQUF4QjtNQUNEO0lBeEVtQjtNQUFBO01BQUEsT0F5RXBCLGlCQUFRO1FBQ04sT0FBTyxLQUFLLE1BQVo7TUFDRDtJQTNFbUI7TUFBQTtNQUFBLE9BNEVwQixjQUFLLENBQUwsRUFBUTtRQUNOLEtBQUssTUFBTCw0QkFBK0IsQ0FBL0I7TUFDRDtJQTlFbUI7O0lBQUE7RUFBQTs7RUFBQSxJQWdGaEIsQ0FoRmdCO0lBaUZwQixhQUFjO01BQUE7O01BQ1o7TUFBRSxLQUFLLFFBQUwsR0FBZ0I7UUFDaEIsUUFBUSxFQUFFO01BRE0sQ0FBakIsRUFHRSxLQUFLLEtBQUwsR0FBYSxDQUFDLEtBQUssUUFBTixDQUhmO0lBSUY7O0lBdEZtQjtNQUFBO01BQUEsS0F1RnBCLGVBQVU7UUFDUixPQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsQ0FBL0IsQ0FBUDtNQUNEO0lBekZtQjtNQUFBO01BQUEsS0EwRnBCLGVBQVc7UUFDVCxPQUFPLEtBQUssUUFBWjtNQUNEO0lBNUZtQjtNQUFBO01BQUEsT0E2RnBCLGFBQUksQ0FBSixFQUFPO1FBQ0wsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixJQUFsQixDQUF1QixDQUF2QjtNQUNEO0lBL0ZtQjtNQUFBO01BQUEsT0FnR3BCLGtCQUFTLENBQVQsRUFBWTtRQUNWLElBQU0sQ0FBQyxHQUFHO1VBQUUsSUFBSSxFQUFFLENBQVI7VUFBVyxRQUFRLEVBQUU7UUFBckIsQ0FBVjtRQUNBLEtBQUssR0FBTCxDQUFTLENBQVQsR0FBYSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLENBQWhCLENBQWI7TUFDRDtJQW5HbUI7TUFBQTtNQUFBLE9Bb0dwQixxQkFBWTtRQUNWLElBQUksS0FBSyxLQUFMLENBQVcsTUFBWCxHQUFvQixDQUF4QixFQUEyQixPQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsRUFBUDtNQUM1QjtJQXRHbUI7TUFBQTtNQUFBLE9BdUdwQix5QkFBZ0I7UUFDZCxPQUFPLEtBQUssU0FBTCxFQUFQO1VBQTBCO1FBQTFCO01BQ0Q7SUF6R21CO01BQUE7TUFBQSxPQTBHcEIsa0JBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxTQUFMLENBQWUsS0FBSyxRQUFwQixFQUE4QixJQUE5QixFQUFvQyxDQUFwQyxDQUFQO01BQ0Q7SUE1R21CO01BQUE7TUFBQSxPQTZHcEIsY0FBSyxDQUFMLEVBQVE7UUFDTixPQUFPLEtBQUssV0FBTCxDQUFpQixLQUFqQixDQUF1QixDQUF2QixFQUEwQixLQUFLLFFBQS9CLENBQVA7TUFDRDtJQS9HbUI7TUFBQTtNQUFBLE9BZ0hwQixlQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUI7UUFBQTs7UUFDakIsT0FDRSxZQUFZLE9BQU8sQ0FBbkIsR0FDSSxDQUFDLENBQUMsT0FBRixDQUFVLENBQVYsQ0FESixHQUVJLENBQUMsQ0FBQyxRQUFGLEtBQ0MsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxDQUFYLEdBQ0QsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxPQUFYLENBQW1CLFVBQUEsQ0FBQztVQUFBLE9BQUksS0FBSSxDQUFDLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFKO1FBQUEsQ0FBcEIsQ0FEQyxFQUVELENBQUMsQ0FBQyxTQUFGLENBQVksQ0FBWixDQUhBLENBRkosRUFNQSxDQVBGO01BU0Q7SUExSG1CO01BQUE7TUFBQSxPQTJIcEIsbUJBQWlCLENBQWpCLEVBQW9CO1FBQ2xCLFlBQVksT0FBTyxDQUFuQixJQUNFLENBQUMsQ0FBQyxRQURKLEtBRUcsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxLQUFYLENBQWlCLFVBQUEsQ0FBQztVQUFBLE9BQUksWUFBWSxPQUFPLENBQXZCO1FBQUEsQ0FBbEIsSUFDSSxDQUFDLENBQUMsUUFBRixHQUFhLENBQUMsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxJQUFYLENBQWdCLEVBQWhCLENBQUQsQ0FEakIsR0FFRyxDQUFDLENBQUMsUUFBRixDQUFXLE9BQVgsQ0FBbUIsVUFBQSxDQUFDLEVBQUk7VUFDdEIsQ0FBQyxDQUFDLFNBQUYsQ0FBWSxDQUFaO1FBQ0QsQ0FGRCxDQUpOO01BT0Q7SUFuSW1COztJQUFBO0VBQUE7O0VBQUEsSUFxSWhCLENBcklnQjtJQUFBOztJQUFBOztJQXNJcEIsV0FBWSxDQUFaLEVBQWU7TUFBQTs7TUFBQTs7TUFDYiw0QkFBVSxPQUFLLE9BQUwsR0FBZSxDQUF6QjtNQURhO0lBRWQ7O0lBeEltQjtNQUFBO01BQUEsT0F5SXBCLG9CQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCO1FBQ2YsT0FBTyxDQUFQLEtBQWEsS0FBSyxRQUFMLENBQWMsQ0FBZCxHQUFrQixLQUFLLE9BQUwsQ0FBYSxDQUFiLENBQWxCLEVBQW1DLEtBQUssU0FBTCxFQUFoRDtNQUNEO0lBM0ltQjtNQUFBO01BQUEsT0E0SXBCLGlCQUFRLENBQVIsRUFBVztRQUNULE9BQU8sQ0FBUCxJQUFZLEtBQUssR0FBTCxDQUFTLENBQVQsQ0FBWjtNQUNEO0lBOUltQjtNQUFBO01BQUEsT0ErSXBCLHdCQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUI7UUFDbkIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVo7UUFDRSxDQUFDLENBQUMsSUFBRixHQUFTLENBQVYsRUFBZSxDQUFDLENBQUMsV0FBRixHQUFnQixDQUFDLENBQWhDLEVBQW9DLEtBQUssR0FBTCxDQUFTLENBQVQsQ0FBcEM7TUFDRjtJQWxKbUI7TUFBQTtNQUFBLE9BbUpwQixrQkFBUztRQUNQLE9BQU8sSUFBSSxDQUFKLENBQU0sSUFBTixFQUFZLEtBQUssT0FBakIsRUFBMEIsS0FBMUIsRUFBUDtNQUNEO0lBckptQjtNQUFBO01BQUEsT0FzSnBCLG9CQUFXO1FBQ1QsT0FBTyxDQUFDLENBQVI7TUFDRDtJQXhKbUI7O0lBQUE7RUFBQSxFQXFJTixDQXJJTTs7RUEwSnRCLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYztJQUNaLE9BQU8sQ0FBQyxHQUFJLFlBQVksT0FBTyxDQUFuQixHQUF1QixDQUF2QixHQUEyQixDQUFDLENBQUMsTUFBakMsR0FBMkMsSUFBbkQ7RUFDRDs7RUFDRCxJQUFNLENBQUMsR0FBRyxnREFBVjtFQUFBLElBQ0UsQ0FBQyxHQUFHLGNBRE47RUFBQSxJQUVFLENBQUMsR0FBRyxlQUZOO0VBQUEsSUFHRSxDQUFDLEdBQUcsbUJBSE47RUFBQSxJQUlFLENBQUMsR0FDQyx3RUFMSjtFQUFBLElBTUUsQ0FBQyxHQUFHLGNBTk47RUFBQSxJQU9FLENBQUMsR0FBRztJQUNGLEtBQUssRUFBRSxjQURMO0lBRUYsU0FBUyxFQUFFO0VBRlQsQ0FQTjtFQUFBLElBV0UsQ0FBQyxHQUFHO0lBQ0YsU0FBUyxFQUFFLFFBRFQ7SUFFRixLQUFLLEVBQUUsR0FGTDtJQUdGLEdBQUcsRUFBRSxHQUhIO0lBSUYsT0FBTyxFQUFFLEtBSlA7SUFLRixRQUFRLEVBQUUsQ0FBQyxDQUFEO0VBTFIsQ0FYTjtFQUFBLElBa0JFLENBQUMsR0FBRztJQUNGLFNBQVMsRUFBRSxRQURUO0lBRUYsS0FBSyxFQUFFLEdBRkw7SUFHRixHQUFHLEVBQUUsR0FISDtJQUlGLE9BQU8sRUFBRSxLQUpQO0lBS0YsUUFBUSxFQUFFLENBQUMsQ0FBRDtFQUxSLENBbEJOO0VBQUEsSUF5QkUsQ0FBQyxHQUFHO0lBQ0YsS0FBSyxFQUNIO0VBRkEsQ0F6Qk47RUFBQSxJQTZCRSxDQUFDLEdBQUcsU0FBSixDQUFJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBa0I7SUFBQSxJQUFYLENBQVcsdUVBQVAsRUFBTztJQUNwQixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7TUFBRSxTQUFTLEVBQUUsU0FBYjtNQUF3QixLQUFLLEVBQUUsQ0FBL0I7TUFBa0MsR0FBRyxFQUFFLENBQXZDO01BQTBDLFFBQVEsRUFBRTtJQUFwRCxDQUFELEVBQTJELENBQTNELENBQVg7SUFDQSxPQUNFLENBQUMsQ0FBQyxRQUFGLENBQVcsSUFBWCxDQUFnQixDQUFoQixHQUNBLENBQUMsQ0FBQyxRQUFGLENBQVcsSUFBWCxDQUFnQjtNQUNkLFNBQVMsRUFBRSxRQURHO01BRWQsS0FBSyxFQUFFLDRDQUZPO01BR2QsU0FBUyxFQUFFO0lBSEcsQ0FBaEIsQ0FEQSxFQU1BLENBUEY7RUFTRCxDQXhDSDtFQUFBLElBeUNFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBRCxFQUFPLEdBQVAsQ0F6Q1A7RUFBQSxJQTBDRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQUQsRUFBUyxNQUFULENBMUNQO0VBQUEsSUEyQ0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQTNDUDs7RUE0Q0EsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQVAsQ0FBYztJQUNwQixTQUFTLEVBQUUsSUFEUztJQUVwQixnQkFBZ0IsRUFBRSxNQUZFO0lBR3BCLFFBQVEsRUFBRSxDQUhVO0lBSXBCLG1CQUFtQixFQUFFLENBSkQ7SUFLcEIsU0FBUyxFQUFFLENBTFM7SUFNcEIsV0FBVyxFQUFFLENBTk87SUFPcEIsZ0JBQWdCLEVBQUUsQ0FQRTtJQVFwQixjQUFjLEVBQ1osOElBVGtCO0lBVXBCLE9BQU8sRUFBRSxtQkFBWTtNQUFBLElBQVgsQ0FBVyx1RUFBUCxFQUFPO01BQ25CLElBQU0sQ0FBQyxHQUFHLFdBQVY7TUFDQSxPQUNFLENBQUMsQ0FBQyxNQUFGLEtBQ0csQ0FBQyxDQUFDLEtBQUYsR0FBVztRQUFBLG1DQUFJLENBQUo7VUFBSSxDQUFKO1FBQUE7O1FBQUEsT0FBVSxDQUFDLENBQUMsR0FBRixDQUFNLFVBQUEsQ0FBQztVQUFBLE9BQUksQ0FBQyxDQUFDLENBQUQsQ0FBTDtRQUFBLENBQVAsRUFBaUIsSUFBakIsQ0FBc0IsRUFBdEIsQ0FBVjtNQUFBLENBQUQsQ0FDVCxDQURTLEVBRVQsTUFGUyxFQUdULENBQUMsQ0FBQyxNQUhPLEVBSVQsTUFKUyxDQURiLEdBT0EsQ0FBQyxDQUNDO1FBQ0UsU0FBUyxFQUFFLE1BRGI7UUFFRSxLQUFLLEVBQUUsQ0FGVDtRQUdFLEdBQUcsRUFBRSxHQUhQO1FBSUUsU0FBUyxFQUFFLENBSmI7UUFLRSxZQUFZLGlCQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7VUFDcEIsTUFBTSxDQUFDLENBQUMsS0FBUixJQUFpQixDQUFDLENBQUMsV0FBRixFQUFqQjtRQUNEO01BUEgsQ0FERCxFQVVDLENBVkQsQ0FSSDtJQXFCRCxDQWpDbUI7SUFrQ3BCLGdCQUFnQixFQUFFLENBbENFO0lBbUNwQixnQkFBZ0IsRUFBRSxDQW5DRTtJQW9DcEIsaUJBQWlCLEVBQUUsQ0FwQ0M7SUFxQ3BCLGtCQUFrQixFQUFFLENBckNBO0lBc0NwQixPQUFPLEVBQUUsQ0F0Q1c7SUF1Q3BCLG1CQUFtQixFQUFFLENBdkNEO0lBd0NwQixvQkFBb0IsRUFBRSxDQXhDRjtJQXlDcEIsaUJBQWlCLEVBQUUsQ0F6Q0M7SUEwQ3BCLFdBQVcsRUFBRTtNQUFFLFNBQVMsRUFBRSxRQUFiO01BQXVCLEtBQUssRUFBRSxDQUE5QjtNQUFpQyxTQUFTLEVBQUU7SUFBNUMsQ0ExQ087SUEyQ3BCLGFBQWEsRUFBRTtNQUFFLFNBQVMsRUFBRSxRQUFiO01BQXVCLEtBQUssRUFBRSxDQUE5QjtNQUFpQyxTQUFTLEVBQUU7SUFBNUMsQ0EzQ0s7SUE0Q3BCLGtCQUFrQixFQUFFO01BQUUsU0FBUyxFQUFFLFFBQWI7TUFBdUIsS0FBSyxFQUFFLENBQTlCO01BQWlDLFNBQVMsRUFBRTtJQUE1QyxDQTVDQTtJQTZDcEIsZUFBZSxFQUFFO01BQ2YsU0FBUyxFQUFFLFFBREk7TUFFZixLQUFLLEVBQ0gsQ0FBQyxHQUNELGlHQUphO01BS2YsU0FBUyxFQUFFO0lBTEksQ0E3Q0c7SUFvRHBCLFdBQVcsRUFBRTtNQUNYLEtBQUssRUFBRSxpQkFESTtNQUVYLFFBQVEsRUFBRSxDQUNSO1FBQ0UsU0FBUyxFQUFFLFFBRGI7UUFFRSxLQUFLLEVBQUUsSUFGVDtRQUdFLEdBQUcsRUFBRSxZQUhQO1FBSUUsT0FBTyxFQUFFLElBSlg7UUFLRSxRQUFRLEVBQUUsQ0FDUixDQURRLEVBRVI7VUFBRSxLQUFLLEVBQUUsSUFBVDtVQUFlLEdBQUcsRUFBRSxJQUFwQjtVQUEwQixTQUFTLEVBQUUsQ0FBckM7VUFBd0MsUUFBUSxFQUFFLENBQUMsQ0FBRDtRQUFsRCxDQUZRO01BTFosQ0FEUTtJQUZDLENBcERPO0lBbUVwQixVQUFVLEVBQUU7TUFBRSxTQUFTLEVBQUUsT0FBYjtNQUFzQixLQUFLLEVBQUUsQ0FBN0I7TUFBZ0MsU0FBUyxFQUFFO0lBQTNDLENBbkVRO0lBb0VwQixxQkFBcUIsRUFBRTtNQUFFLFNBQVMsRUFBRSxPQUFiO01BQXNCLEtBQUssRUFBRSxDQUE3QjtNQUFnQyxTQUFTLEVBQUU7SUFBM0MsQ0FwRUg7SUFxRXBCLFlBQVksRUFBRTtNQUNaLEtBQUssRUFBRSxzQkFESztNQUVaLFNBQVMsRUFBRTtJQUZDLENBckVNO0lBeUVwQixpQkFBaUIsRUFBRSwyQkFBQSxDQUFDO01BQUEsT0FDbEIsTUFBTSxDQUFDLE1BQVAsQ0FBYyxDQUFkLEVBQWlCO1FBQ2YsWUFBWSxpQkFBQyxDQUFELEVBQUksQ0FBSixFQUFVO1VBQ3BCLENBQUMsQ0FBQyxJQUFGLENBQU8sV0FBUCxHQUFxQixDQUFDLENBQUMsQ0FBRCxDQUF0QjtRQUNELENBSGM7UUFJZixVQUFVLGVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtVQUNsQixDQUFDLENBQUMsSUFBRixDQUFPLFdBQVAsS0FBdUIsQ0FBQyxDQUFDLENBQUQsQ0FBeEIsSUFBK0IsQ0FBQyxDQUFDLFdBQUYsRUFBL0I7UUFDRDtNQU5jLENBQWpCLENBRGtCO0lBQUE7RUF6RUEsQ0FBZCxDQUFSOztFQW1GQSxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQjtJQUNmLFFBQVEsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxDQUFDLENBQUMsS0FBRixHQUFVLENBQWxCLENBQVIsSUFBZ0MsQ0FBQyxDQUFDLFdBQUYsRUFBaEM7RUFDRDs7RUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQjtJQUNmLENBQUMsSUFDQyxDQUFDLENBQUMsYUFESixLQUVJLENBQUMsQ0FBQyxLQUFGLEdBQ0EsU0FBUyxDQUFDLENBQUMsYUFBRixDQUFnQixLQUFoQixDQUFzQixHQUF0QixFQUEyQixJQUEzQixDQUFnQyxHQUFoQyxDQUFULEdBQWdELHFCQURqRCxFQUVBLENBQUMsQ0FBQyxhQUFGLEdBQWtCLENBRmxCLEVBR0EsQ0FBQyxDQUFDLFFBQUYsR0FBYSxDQUFDLENBQUMsUUFBRixJQUFjLENBQUMsQ0FBQyxhQUg3QixFQUlELE9BQU8sQ0FBQyxDQUFDLGFBSlIsRUFLRCxLQUFLLENBQUwsS0FBVyxDQUFDLENBQUMsU0FBYixLQUEyQixDQUFDLENBQUMsU0FBRixHQUFjLENBQXpDLENBUEY7RUFRRDs7RUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQjtJQUNmLEtBQUssQ0FBQyxPQUFOLENBQWMsQ0FBQyxDQUFDLE9BQWhCLE1BQ0csQ0FBQyxDQUFDLE9BQUYsR0FBYTtNQUFBLG1DQUFJLENBQUo7UUFBSSxDQUFKO01BQUE7O01BQUEsT0FBVSxNQUFNLENBQUMsQ0FBQyxHQUFGLENBQU0sVUFBQSxDQUFDO1FBQUEsT0FBSSxDQUFDLENBQUMsQ0FBRCxDQUFMO01BQUEsQ0FBUCxFQUFpQixJQUFqQixDQUFzQixHQUF0QixDQUFOLEdBQW1DLEdBQTdDO0lBQUEsQ0FBRCxrQ0FDUixDQUFDLENBQUMsT0FETSxFQURmO0VBSUQ7O0VBQ0QsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUI7SUFDZixJQUFJLENBQUMsQ0FBQyxLQUFOLEVBQWE7TUFDWCxJQUFJLENBQUMsQ0FBQyxLQUFGLElBQVcsQ0FBQyxDQUFDLEdBQWpCLEVBQ0UsTUFBTSxLQUFLLENBQUMsMENBQUQsQ0FBWDtNQUNBLENBQUMsQ0FBQyxLQUFGLEdBQVUsQ0FBQyxDQUFDLEtBQWIsRUFBcUIsT0FBTyxDQUFDLENBQUMsS0FBOUI7SUFDRjtFQUNGOztFQUNELFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCO0lBQ2YsS0FBSyxDQUFMLEtBQVcsQ0FBQyxDQUFDLFNBQWIsS0FBMkIsQ0FBQyxDQUFDLFNBQUYsR0FBYyxDQUF6QztFQUNEOztFQUNELElBQU0sQ0FBQyxHQUFHLENBQ1IsSUFEUSxFQUVSLEtBRlEsRUFHUixLQUhRLEVBSVIsSUFKUSxFQUtSLEtBTFEsRUFNUixJQU5RLEVBT1IsSUFQUSxFQVFSLE1BUlEsRUFTUixRQVRRLEVBVVIsTUFWUSxFQVdSLE9BWFEsQ0FBVjs7RUFhQSxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFnQztJQUFBLElBQWYsQ0FBZSx1RUFBWCxTQUFXO0lBQzlCLElBQU0sQ0FBQyxHQUFHLEVBQVY7SUFDQSxPQUNFLFlBQVksT0FBTyxDQUFuQixHQUNJLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFDLEtBQUYsQ0FBUSxHQUFSLENBQUosQ0FETCxHQUVJLEtBQUssQ0FBQyxPQUFOLENBQWMsQ0FBZCxJQUNBLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURELEdBRUEsTUFBTSxDQUFDLElBQVAsQ0FBWSxDQUFaLEVBQWUsT0FBZixDQUF1QixVQUFBLENBQUMsRUFBSTtNQUMxQixNQUFNLENBQUMsTUFBUCxDQUFjLENBQWQsRUFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFELENBQUYsRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFsQjtJQUNELENBRkQsQ0FKSixFQU9BLENBUkY7O0lBVUEsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUI7TUFDZixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFGLENBQU0sVUFBQSxDQUFDO1FBQUEsT0FBSSxDQUFDLENBQUMsV0FBRixFQUFKO01BQUEsQ0FBUCxDQUFULENBQUQsRUFDRSxDQUFDLENBQUMsT0FBRixDQUFVLFVBQUEsQ0FBQyxFQUFJO1FBQ2IsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxHQUFSLENBQVY7UUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFELEdBQVUsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFELENBQUYsRUFBTyxDQUFDLENBQUMsQ0FBRCxDQUFSLENBQUwsQ0FBVjtNQUNELENBSEQsQ0FERjtJQUtEO0VBQ0Y7O0VBQ0QsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUI7SUFDZixPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQUFULEdBQWdCLFVBQUEsQ0FBQztNQUFBLE9BQUksQ0FBQyxDQUFDLFFBQUYsQ0FBVyxDQUFDLENBQUMsV0FBRixFQUFYLENBQUo7SUFBQSxDQUFGLENBQW1DLENBQW5DLElBQXdDLENBQXhDLEdBQTRDLENBQW5FO0VBQ0Q7O0VBQ0QsU0FBUyxDQUFULENBQVcsQ0FBWCxRQUE4QjtJQUFBLElBQUwsQ0FBSyxRQUFkLE9BQWM7O0lBQzVCLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCO01BQ2YsT0FBTyxNQUFNLENBQ1gsQ0FBQyxDQUFDLENBQUQsQ0FEVSxFQUVYLE9BQU8sQ0FBQyxDQUFDLGdCQUFGLEdBQXFCLEdBQXJCLEdBQTJCLEVBQWxDLEtBQXlDLENBQUMsR0FBRyxHQUFILEdBQVMsRUFBbkQsQ0FGVyxDQUFiO0lBSUQ7O0lBTjJCLElBT3RCLENBUHNCO01BUTFCLGFBQWM7UUFBQTs7UUFDWjtRQUFFLEtBQUssWUFBTCxHQUFvQixFQUFyQixFQUNFLEtBQUssT0FBTCxHQUFlLEVBRGpCLEVBRUUsS0FBSyxPQUFMLEdBQWUsQ0FGakIsRUFHRSxLQUFLLFFBQUwsR0FBZ0IsQ0FIbEI7TUFJRjs7TUFieUI7UUFBQTtRQUFBLE9BYzFCLGlCQUFRLENBQVIsRUFBVyxDQUFYLEVBQWM7VUFDWjtVQUFFLENBQUMsQ0FBQyxRQUFGLEdBQWEsS0FBSyxRQUFMLEVBQWQsRUFDRSxLQUFLLFlBQUwsQ0FBa0IsS0FBSyxPQUF2QixJQUFrQyxDQURwQyxFQUVDLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFsQixDQUZELEVBR0UsS0FBSyxPQUFMLElBQ0UsVUFBQSxDQUFDO1lBQUEsT0FBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQUYsS0FBZSxHQUFoQixDQUFOLENBQTJCLElBQTNCLENBQWdDLEVBQWhDLEVBQW9DLE1BQXBDLEdBQTZDLENBQWpEO1VBQUEsQ0FBRixDQUFzRCxDQUF0RCxJQUEyRCxDQUo5RDtRQUtGO01BcEJ5QjtRQUFBO1FBQUEsT0FxQjFCLG1CQUFVO1VBQ1IsTUFBTSxLQUFLLE9BQUwsQ0FBYSxNQUFuQixLQUE4QixLQUFLLElBQUwsR0FBWTtZQUFBLE9BQU0sSUFBTjtVQUFBLENBQTFDO1VBQ0EsSUFBTSxDQUFDLEdBQUcsS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixVQUFBLENBQUM7WUFBQSxPQUFJLENBQUMsQ0FBQyxDQUFELENBQUw7VUFBQSxDQUFsQixDQUFWO1VBQ0UsS0FBSyxTQUFMLEdBQWlCLENBQUMsQ0FDakIsVUFBQyxDQUFELEVBQWdCO1lBQUEsSUFBWixDQUFZLHVFQUFSLEdBQVE7WUFDZixJQUFJLENBQUMsR0FBRyxDQUFSO1lBQ0EsT0FBTyxDQUFDLENBQ0wsR0FESSxDQUNBLFVBQUEsQ0FBQyxFQUFJO2NBQ1IsQ0FBQyxJQUFJLENBQUw7Y0FDQSxJQUFNLENBQUMsR0FBRyxDQUFWOztjQUNBLElBQUksRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFELENBQVQ7Y0FBQSxJQUNFLENBQUMsR0FBRyxFQUROOztjQUVBLE9BQU8sRUFBQyxDQUFDLE1BQUYsR0FBVyxDQUFsQixHQUF1QjtnQkFDckIsSUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUYsQ0FBTyxFQUFQLENBQVY7O2dCQUNBLElBQUksQ0FBQyxFQUFMLEVBQVE7a0JBQ04sQ0FBQyxJQUFJLEVBQUw7a0JBQ0E7Z0JBQ0Q7O2dCQUNEO2dCQUFFLENBQUMsSUFBSSxFQUFDLENBQUMsU0FBRixDQUFZLENBQVosRUFBZSxFQUFDLENBQUMsS0FBakIsQ0FBTixFQUNFLEVBQUMsR0FBRyxFQUFDLENBQUMsU0FBRixDQUFZLEVBQUMsQ0FBQyxLQUFGLEdBQVUsRUFBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLE1BQTNCLENBRE4sRUFFQyxTQUFTLEVBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxDQUFMLENBQVQsSUFBb0IsRUFBQyxDQUFDLENBQUQsQ0FBckIsR0FDSyxDQUFDLElBQUksUUFBUSxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUQsQ0FBRixDQUFOLEdBQWUsQ0FBdkIsQ0FEVixJQUVNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBRCxDQUFQLEVBQWEsUUFBUSxFQUFDLENBQUMsQ0FBRCxDQUFULElBQWdCLENBQUMsRUFGbkMsQ0FGRDtjQUtGOztjQUNELE9BQU8sQ0FBUDtZQUNELENBbkJJLEVBb0JKLEdBcEJJLENBb0JBLFVBQUEsQ0FBQztjQUFBLGtCQUFRLENBQVI7WUFBQSxDQXBCRCxFQXFCSixJQXJCSSxDQXFCQyxDQXJCRCxDQUFQO1VBc0JELENBeEJELENBd0JHLENBeEJILENBRGtCLEVBMEJsQixDQUFDLENBMUJpQixDQUFuQixFQTRCRSxLQUFLLFNBQUwsR0FBaUIsQ0E1Qm5CO1FBNkJGO01BckR5QjtRQUFBO1FBQUEsT0FzRDFCLGNBQUssQ0FBTCxFQUFRO1VBQ04sS0FBSyxTQUFMLENBQWUsU0FBZixHQUEyQixLQUFLLFNBQWhDO1VBQ0EsSUFBTSxDQUFDLEdBQUcsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFvQixDQUFwQixDQUFWO1VBQ0EsSUFBSSxDQUFDLENBQUwsRUFBUSxPQUFPLElBQVA7VUFDUixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBRixDQUFZLFVBQUMsQ0FBRCxFQUFJLENBQUo7WUFBQSxPQUFVLENBQUMsR0FBRyxDQUFKLElBQVMsS0FBSyxDQUFMLEtBQVcsQ0FBOUI7VUFBQSxDQUFaLENBQVY7VUFBQSxJQUNFLEdBQUMsR0FBRyxLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FETjtVQUVBLE9BQU8sQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixHQUFnQixNQUFNLENBQUMsTUFBUCxDQUFjLENBQWQsRUFBaUIsR0FBakIsQ0FBdkI7UUFDRDtNQTdEeUI7O01BQUE7SUFBQTs7SUFBQSxJQStEdEIsQ0EvRHNCO01BZ0UxQixhQUFjO1FBQUE7O1FBQ1o7UUFBRSxLQUFLLEtBQUwsR0FBYSxFQUFkLEVBQ0UsS0FBSyxZQUFMLEdBQW9CLEVBRHRCLEVBRUUsS0FBSyxLQUFMLEdBQWEsQ0FGZixFQUdFLEtBQUssU0FBTCxHQUFpQixDQUhuQixFQUlFLEtBQUssVUFBTCxHQUFrQixDQUpwQjtNQUtGOztNQXRFeUI7UUFBQTtRQUFBLE9BdUUxQixvQkFBVyxDQUFYLEVBQWM7VUFDWixJQUFJLEtBQUssWUFBTCxDQUFrQixDQUFsQixDQUFKLEVBQTBCLE9BQU8sS0FBSyxZQUFMLENBQWtCLENBQWxCLENBQVA7VUFDMUIsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFKLEVBQVY7VUFDQSxPQUNFLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsT0FBcEIsQ0FBNEI7WUFBQTtZQUFBLElBQUUsQ0FBRjtZQUFBLElBQUssQ0FBTDs7WUFBQSxPQUFZLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBWjtVQUFBLENBQTVCLEdBQ0EsQ0FBQyxDQUFDLE9BQUYsRUFEQSxFQUVDLEtBQUssWUFBTCxDQUFrQixDQUFsQixJQUF1QixDQUZ4QixFQUdBLENBSkY7UUFNRDtNQWhGeUI7UUFBQTtRQUFBLE9BaUYxQixzQ0FBNkI7VUFDM0IsT0FBTyxNQUFNLEtBQUssVUFBbEI7UUFDRDtNQW5GeUI7UUFBQTtRQUFBLE9Bb0YxQix1QkFBYztVQUNaLEtBQUssVUFBTCxHQUFrQixDQUFsQjtRQUNEO01BdEZ5QjtRQUFBO1FBQUEsT0F1RjFCLGlCQUFRLENBQVIsRUFBVyxDQUFYLEVBQWM7VUFDWixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBaEIsR0FBeUIsWUFBWSxDQUFDLENBQUMsSUFBZCxJQUFzQixLQUFLLEtBQUwsRUFBL0M7UUFDRDtNQXpGeUI7UUFBQTtRQUFBLE9BMEYxQixjQUFLLENBQUwsRUFBUTtVQUNOLElBQU0sQ0FBQyxHQUFHLEtBQUssVUFBTCxDQUFnQixLQUFLLFVBQXJCLENBQVY7VUFDQSxDQUFDLENBQUMsU0FBRixHQUFjLEtBQUssU0FBbkI7VUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBRixDQUFPLENBQVAsQ0FBUjtVQUNBLElBQUksS0FBSywwQkFBTCxFQUFKLEVBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUYsS0FBWSxLQUFLLFNBQTFCLEVBQW9DLENBQXBDLEtBQ0s7WUFDSCxJQUFNLEdBQUMsR0FBRyxLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBVjs7WUFDRSxHQUFDLENBQUMsU0FBRixHQUFjLEtBQUssU0FBTCxHQUFpQixDQUFoQyxFQUFxQyxDQUFDLEdBQUcsR0FBQyxDQUFDLElBQUYsQ0FBTyxDQUFQLENBQXpDO1VBQ0Y7VUFDSCxPQUNFLENBQUMsS0FDRyxLQUFLLFVBQUwsSUFBbUIsQ0FBQyxDQUFDLFFBQUYsR0FBYSxDQUFqQyxFQUNELEtBQUssVUFBTCxLQUFvQixLQUFLLEtBQXpCLElBQWtDLEtBQUssV0FBTCxFQUZuQyxDQUFELEVBR0EsQ0FKRjtRQU1EO01BMUd5Qjs7TUFBQTtJQUFBOztJQTRHNUIsSUFDRyxDQUFDLENBQUMsa0JBQUYsS0FBeUIsQ0FBQyxDQUFDLGtCQUFGLEdBQXVCLEVBQWhELEdBQ0QsQ0FBQyxDQUFDLFFBQUYsSUFBYyxDQUFDLENBQUMsUUFBRixDQUFXLFFBQVgsQ0FBb0IsTUFBcEIsQ0FGaEIsRUFJRSxNQUFNLEtBQUssQ0FDVCwyRkFEUyxDQUFYO0lBR0YsT0FDRyxDQUFDLENBQUMsZ0JBQUYsR0FBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBRixJQUFzQixFQUF2QixDQUF2QixFQUNDLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCO01BQUE7O01BQ2hCLElBQU0sQ0FBQyxHQUFHLENBQVY7TUFDQSxJQUFJLENBQUMsQ0FBQyxVQUFOLEVBQWtCLE9BQU8sQ0FBUDtNQUNqQixDQUFDLENBQUQsRUFBSSxPQUFKLENBQVksVUFBQSxDQUFDO1FBQUEsT0FBSSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBTDtNQUFBLENBQWIsR0FDQyxDQUFDLENBQUMsa0JBQUYsQ0FBcUIsT0FBckIsQ0FBNkIsVUFBQSxDQUFDO1FBQUEsT0FBSSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBTDtNQUFBLENBQTlCLENBREQsRUFFRSxDQUFDLENBQUMsYUFBRixHQUFrQixJQUZwQixFQUdDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsT0FBVixDQUFrQixVQUFBLENBQUM7UUFBQSxPQUFJLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFMO01BQUEsQ0FBbkIsQ0FIRCxFQUlFLENBQUMsQ0FBQyxVQUFGLEdBQWUsQ0FBQyxDQUpsQjtNQUtELElBQUksQ0FBQyxHQUFHLElBQVI7TUFDQSxJQUNHLG9CQUFtQixDQUFDLENBQUMsUUFBckIsTUFDRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxRQUFoQixFQUEyQixPQUFPLENBQUMsQ0FBQyxRQUFGLENBQVcsUUFEL0MsR0FFRCxDQUFDLENBQUMsUUFBRixLQUFlLENBQUMsQ0FBQyxRQUFGLEdBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFILEVBQWEsQ0FBQyxDQUFDLGdCQUFmLENBQTdCLENBRkMsRUFHRCxDQUFDLENBQUMsT0FBRixJQUFhLENBSmYsRUFNRSxNQUFNLEtBQUssQ0FDVCxnR0FEUyxDQUFYO01BR0YsT0FDRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFQLElBQWtCLEtBQXZCLEVBQ0MsQ0FBQyxDQUFDLGdCQUFGLEdBQXFCLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFMLENBRHZCLEVBRUEsQ0FBQyxLQUNFLENBQUMsQ0FBQyxLQUFGLEtBQVksQ0FBQyxDQUFDLEtBQUYsR0FBVSxPQUF0QixHQUNBLENBQUMsQ0FBQyxPQUFGLEdBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFILENBRGIsRUFFRCxDQUFDLENBQUMsY0FBRixLQUFxQixDQUFDLENBQUMsR0FBRixHQUFRLENBQUMsQ0FBQyxLQUEvQixDQUZDLEVBR0QsQ0FBQyxDQUFDLEdBQUYsSUFBUyxDQUFDLENBQUMsY0FBWCxLQUE4QixDQUFDLENBQUMsR0FBRixHQUFRLE9BQXRDLENBSEMsRUFJRCxDQUFDLENBQUMsR0FBRixLQUFVLENBQUMsQ0FBQyxLQUFGLEdBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFILENBQXJCLENBSkMsRUFLQSxDQUFDLENBQUMsYUFBRixHQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUgsQ0FBRCxJQUFZLEVBTDlCLEVBTUQsQ0FBQyxDQUFDLGNBQUYsSUFDRSxDQUFDLENBQUMsYUFESixLQUVHLENBQUMsQ0FBQyxhQUFGLElBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUYsR0FBUSxHQUFSLEdBQWMsRUFBZixJQUFxQixDQUFDLENBQUMsYUFGN0MsQ0FQRCxDQUZELEVBWUEsQ0FBQyxDQUFDLE9BQUYsS0FBYyxDQUFDLENBQUMsU0FBRixHQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBSCxDQUE3QixDQVpBLEVBYUEsQ0FBQyxDQUFDLFFBQUYsS0FBZSxDQUFDLENBQUMsUUFBRixHQUFhLEVBQTVCLENBYkEsRUFjQyxDQUFDLENBQUMsUUFBRixHQUFhLGFBQUcsTUFBSCxpQ0FDVCxDQUFDLENBQUMsUUFBRixDQUFXLEdBQVgsQ0FBZSxVQUFBLENBQUM7UUFBQSxPQUNoQixVQUFBLENBQUM7VUFBQSxPQUNBLENBQUMsQ0FBQyxRQUFGLElBQ0UsQ0FBQyxDQUFDLENBQUMsY0FETCxLQUVHLENBQUMsQ0FBQyxjQUFGLEdBQW1CLENBQUMsQ0FBQyxRQUFGLENBQVcsR0FBWCxDQUFlLFVBQUEsQ0FBQztZQUFBLE9BQ2xDLENBQUMsQ0FDQyxDQURELEVBRUM7Y0FDRSxRQUFRLEVBQUU7WUFEWixDQUZELEVBS0MsQ0FMRCxDQURpQztVQUFBLENBQWhCLENBRnRCLEdBV0EsQ0FBQyxDQUFDLGNBQUYsR0FDSSxDQUFDLENBQUMsY0FETixHQUVJLENBQUMsQ0FBQyxDQUFELENBQUQsR0FDQSxDQUFDLENBQUMsQ0FBRCxFQUFJO1lBQ0gsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFGLEdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFILENBQVosR0FBeUI7VUFEOUIsQ0FBSixDQURELEdBSUEsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsQ0FBaEIsSUFDQSxDQUFDLENBQUMsQ0FBRCxDQURELEdBRUEsQ0FwQko7UUFBQSxDQUFGLENBcUJHLFdBQVcsQ0FBWCxHQUFlLENBQWYsR0FBbUIsQ0FyQnRCLENBRGlCO01BQUEsQ0FBaEIsQ0FEUyxFQWRkLEVBd0NBLENBQUMsQ0FBQyxRQUFGLENBQVcsT0FBWCxDQUFtQixVQUFBLENBQUMsRUFBSTtRQUN0QixDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRDtNQUNELENBRkQsQ0F4Q0EsRUEyQ0EsQ0FBQyxDQUFDLE1BQUYsSUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQUgsRUFBVyxDQUFYLENBM0NiLEVBNENDLENBQUMsQ0FBQyxPQUFGLEdBQWEsVUFBQSxDQUFDLEVBQUk7UUFDakIsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFKLEVBQVY7UUFDQSxPQUNFLENBQUMsQ0FBQyxRQUFGLENBQVcsT0FBWCxDQUFtQixVQUFBLENBQUM7VUFBQSxPQUNsQixDQUFDLENBQUMsT0FBRixDQUFVLENBQUMsQ0FBQyxLQUFaLEVBQW1CO1lBQUUsSUFBSSxFQUFFLENBQVI7WUFBVyxJQUFJLEVBQUU7VUFBakIsQ0FBbkIsQ0FEa0I7UUFBQSxDQUFwQixHQUdBLENBQUMsQ0FBQyxhQUFGLElBQW1CLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLGFBQVosRUFBMkI7VUFBRSxJQUFJLEVBQUU7UUFBUixDQUEzQixDQUhuQixFQUlBLENBQUMsQ0FBQyxPQUFGLElBQWEsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFDLENBQUMsT0FBWixFQUFxQjtVQUFFLElBQUksRUFBRTtRQUFSLENBQXJCLENBSmIsRUFLQSxDQU5GO01BUUQsQ0FWWSxDQVVWLENBVlUsQ0E1Q2IsRUF1REEsQ0F4REY7SUEwREQsQ0E1RUQsQ0E0RUcsQ0E1RUgsQ0FGRjtFQWdGRDs7RUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7SUFDWixPQUFPLENBQUMsQ0FBQyxDQUFGLEtBQVEsQ0FBQyxDQUFDLGNBQUYsSUFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFILENBQTdCLENBQVA7RUFDRDs7RUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7SUFDWixJQUFNLENBQUMsR0FBRztNQUNSLEtBQUssRUFBRSxDQUFDLFVBQUQsRUFBYSxNQUFiLEVBQXFCLFlBQXJCLENBREM7TUFFUixJQUFJLEVBQUU7UUFBQSxPQUFPO1VBQUUsZ0JBQWdCLEVBQUUsRUFBcEI7VUFBd0IsZUFBZSxFQUFFLENBQUM7UUFBMUMsQ0FBUDtNQUFBLENBRkU7TUFHUixRQUFRLEVBQUU7UUFDUixTQURRLHVCQUNJO1VBQ1YsT0FBTyxLQUFLLGVBQUwsR0FBdUIsRUFBdkIsR0FBNEIsVUFBVSxLQUFLLGdCQUFsRDtRQUNELENBSE87UUFJUixXQUpRLHlCQUlNO1VBQ1osSUFBSSxDQUFDLEtBQUssVUFBTixJQUFvQixDQUFDLENBQUMsQ0FBQyxXQUFGLENBQWMsS0FBSyxRQUFuQixDQUF6QixFQUNFLE9BQ0UsT0FBTyxDQUFDLElBQVIsMEJBQ21CLEtBQUssUUFEeEIsNENBR0MsS0FBSyxlQUFMLEdBQXVCLENBQUMsQ0FIekIsRUFJQSxDQUFDLENBQUMsS0FBSyxJQUFOLENBTEg7VUFPRixJQUFJLENBQUMsR0FBRyxFQUFSO1VBQ0EsT0FDRSxLQUFLLFVBQUwsSUFDTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQUYsQ0FBZ0IsS0FBSyxJQUFyQixDQUFMLEVBQ0EsS0FBSyxnQkFBTCxHQUF3QixDQUFDLENBQUMsUUFGL0IsS0FHTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQUYsQ0FDSixLQUFLLFFBREQsRUFFSixLQUFLLElBRkQsRUFHSixLQUFLLGNBSEQsQ0FBTCxFQUtBLEtBQUssZ0JBQUwsR0FBd0IsS0FBSyxRQVJsQyxHQVNBLENBQUMsQ0FBQyxLQVZKO1FBWUQsQ0ExQk87UUEyQlIsVUEzQlEsd0JBMkJLO1VBQ1gsT0FBTyxFQUFFLEtBQUssUUFBTCxLQUFtQixDQUFDLEdBQUcsS0FBSyxVQUFWLEVBQXVCLENBQUMsQ0FBRCxJQUFNLE9BQU8sQ0FBdEQsQ0FBRixDQUFQO1VBQ0EsSUFBSSxDQUFKO1FBQ0QsQ0E5Qk87UUErQlIsY0FBYyxFQUFFO1VBQUEsT0FBTSxDQUFDLENBQVA7UUFBQTtNQS9CUixDQUhGO01Bb0NSLE1BcENRLGtCQW9DRCxDQXBDQyxFQW9DRTtRQUNSLE9BQU8sQ0FBQyxDQUFDLEtBQUQsRUFBUSxFQUFSLEVBQVksQ0FDbEIsQ0FBQyxDQUFDLE1BQUQsRUFBUztVQUNSLFNBQU8sS0FBSyxTQURKO1VBRVIsUUFBUSxFQUFFO1lBQUUsU0FBUyxFQUFFLEtBQUs7VUFBbEI7UUFGRixDQUFULENBRGlCLENBQVosQ0FBUjtNQU1EO0lBM0NPLENBQVY7SUE2Q0EsT0FBTztNQUNMLFNBQVMsRUFBRSxDQUROO01BRUwsU0FBUyxFQUFFO1FBQ1QsT0FEUyxtQkFDRCxDQURDLEVBQ0U7VUFDVCxDQUFDLENBQUMsU0FBRixDQUFZLGFBQVosRUFBMkIsQ0FBM0I7UUFDRDtNQUhRO0lBRk4sQ0FBUDtFQVFEOztFQUNELElBQU0sQ0FBQyxHQUFHO0lBQ1IsMEJBQTBCLHNDQUFtQztNQUFBLElBQTVCLENBQTRCLFNBQWhDLEVBQWdDO01BQUEsSUFBakIsQ0FBaUIsU0FBekIsTUFBeUI7TUFBQSxJQUFSLENBQVEsU0FBZCxJQUFjO01BQzNELElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELENBQVg7TUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQVAsRUFBZTtNQUNmLElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQVY7TUFDRSxDQUFDLENBQUMsU0FBRixHQUFjLENBQUMsQ0FBQyxLQUFqQixFQUNFLENBQUMsQ0FBQyxLQUFGLEdBQVcsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBYTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFSO1FBQUEsSUFDRSxDQUFDLEdBQUcsRUFETjtRQUVBLElBQU0sQ0FBQyxHQUFHLEVBQVY7O1FBQ0EsU0FBUyxDQUFULEdBQWE7VUFDWCxPQUFPLENBQUMsQ0FBQyxNQUFGLElBQVksQ0FBQyxDQUFDLE1BQWQsR0FDSCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssTUFBTCxLQUFnQixDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssTUFBckIsR0FDRSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssTUFBTCxHQUFjLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxNQUFuQixHQUNFLENBREYsR0FFRSxDQUhKLEdBSUUsWUFBWSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssS0FBakIsR0FDQSxDQURBLEdBRUEsQ0FQQyxHQVFILENBQUMsQ0FBQyxNQUFGLEdBQ0EsQ0FEQSxHQUVBLENBVko7UUFXRDs7UUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7VUFDWixDQUFDLElBQ0MsTUFDQSxDQUFDLENBQUMsQ0FBRCxDQURELEdBRUEsR0FBRyxHQUFILENBQ0csSUFESCxDQUNRLENBQUMsQ0FBQyxVQURWLEVBQ3NCLFVBQVUsQ0FBVixFQUFhO1lBQy9CLE9BQU8sTUFBTSxDQUFDLENBQUMsUUFBUixHQUFtQixJQUFuQixHQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUgsQ0FBM0IsR0FBdUMsR0FBOUM7VUFDRCxDQUhILEVBSUcsSUFKSCxDQUlRLEVBSlIsQ0FGQSxHQU9BLEdBUkY7UUFTRDs7UUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7VUFDWixDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBRCxDQUFSLEdBQWMsR0FBbkI7UUFDRDs7UUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7VUFDWjtVQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBZCxHQUFzQixDQUF0QixHQUEwQixDQUEzQixFQUE4QixDQUFDLENBQUMsSUFBaEM7UUFDRjs7UUFDRCxPQUFPLENBQUMsQ0FBQyxNQUFGLElBQVksQ0FBQyxDQUFDLE1BQXJCLEdBQStCO1VBQzdCLElBQUksR0FBQyxHQUFHLENBQUMsRUFBVDs7VUFDQSxJQUNJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQUYsQ0FBWSxDQUFaLEVBQWUsR0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLE1BQXBCLENBQUQsQ0FBUCxFQUNBLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBRCxDQUFELENBQUssTUFEVCxFQUVELEdBQUMsS0FBSyxDQUhSLEVBSUU7WUFDQSxDQUFDLENBQUMsT0FBRixHQUFZLE9BQVosQ0FBb0IsQ0FBcEI7O1lBQ0EsR0FBRztjQUNELENBQUMsQ0FBQyxHQUFDLENBQUMsTUFBRixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixDQUFELENBQUQsRUFBdUIsR0FBQyxHQUFHLENBQUMsRUFBNUI7WUFDRCxDQUZELFFBRVMsR0FBQyxLQUFLLENBQU4sSUFBVyxHQUFDLENBQUMsTUFBYixJQUF1QixHQUFDLENBQUMsQ0FBRCxDQUFELENBQUssTUFBTCxLQUFnQixDQUZoRDs7WUFHQSxDQUFDLENBQUMsT0FBRixHQUFZLE9BQVosQ0FBb0IsQ0FBcEI7VUFDRCxDQVZELE1BV0UsWUFBWSxHQUFDLENBQUMsQ0FBRCxDQUFELENBQUssS0FBakIsR0FBeUIsQ0FBQyxDQUFDLElBQUYsQ0FBTyxHQUFDLENBQUMsQ0FBRCxDQUFELENBQUssSUFBWixDQUF6QixHQUE2QyxDQUFDLENBQUMsR0FBRixFQUE3QyxFQUNFLENBQUMsQ0FBQyxHQUFDLENBQUMsTUFBRixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixDQUFELENBREg7UUFFSDs7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUFULENBQUQsQ0FBWjtNQUNELENBbkRVLENBbURSLENBbkRRLEVBbURMLENBQUMsQ0FBQyxDQUFELENBbkRJLEVBbURDLENBbkRELENBRFo7SUFxREY7RUExRE8sQ0FBVjs7RUE0REEsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFjO0lBQ1osT0FBTyxDQUFDLENBQUMsUUFBRixDQUFXLFdBQVgsRUFBUDtFQUNEOztFQUNELFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYztJQUNaLElBQU0sQ0FBQyxHQUFHLEVBQVY7SUFDQSxPQUNHLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCO01BQ2hCLEtBQUssSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQWYsRUFBMkIsR0FBM0IsRUFBOEIsR0FBQyxHQUFHLEdBQUMsQ0FBQyxXQUFwQztRQUNFLE1BQU0sR0FBQyxDQUFDLFFBQVIsR0FDSyxDQUFDLElBQUksR0FBQyxDQUFDLFNBQUYsQ0FBWSxNQUR0QixHQUVJLE1BQU0sR0FBQyxDQUFDLFFBQVIsS0FDQyxDQUFDLENBQUMsSUFBRixDQUFPO1VBQ04sS0FBSyxFQUFFLE9BREQ7VUFFTixNQUFNLEVBQUUsQ0FGRjtVQUdOLElBQUksRUFBRTtRQUhBLENBQVAsR0FLQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUQsRUFBSSxDQUFKLENBTEwsRUFNRCxDQUFDLENBQUMsR0FBRCxDQUFELENBQUssS0FBTCxDQUFXLGlCQUFYLEtBQ0UsQ0FBQyxDQUFDLElBQUYsQ0FBTztVQUNMLEtBQUssRUFBRSxNQURGO1VBRUwsTUFBTSxFQUFFLENBRkg7VUFHTCxJQUFJLEVBQUU7UUFIRCxDQUFQLENBUkYsQ0FGSjtNQURGOztNQWdCQSxPQUFPLENBQVA7SUFDRCxDQWxCRCxDQWtCRyxDQWxCSCxFQWtCTSxDQWxCTixHQW1CQSxDQXBCRjtFQXNCRDs7RUFDRCxJQUFNLENBQUMsR0FBRyxTQUFKLENBQUksQ0FBQSxDQUFDLEVBQUk7SUFDWCxPQUFPLENBQUMsS0FBUixDQUFjLENBQWQ7RUFDRCxDQUZIO0VBQUEsSUFHRSxDQUFDLEdBQUcsU0FBSixDQUFJLENBQUMsQ0FBRCxFQUFhO0lBQUE7O0lBQUEsbUNBQU4sQ0FBTTtNQUFOLENBQU07SUFBQTs7SUFDZixZQUFBLE9BQU8sRUFBQyxHQUFSLGtCQUFZLFdBQVcsQ0FBdkIsU0FBNkIsQ0FBN0I7RUFDRCxDQUxIO0VBQUEsSUFNRSxDQUFDLEdBQUcsU0FBSixDQUFJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtJQUNaLE9BQU8sQ0FBQyxHQUFSLDRCQUFnQyxDQUFoQyxlQUFzQyxDQUF0QztFQUNELENBUkg7RUFBQSxJQVNFLENBQUMsR0FBRyxDQVROO0VBQUEsSUFVRSxDQUFDLEdBQUcsQ0FWTjtFQUFBLElBV0UsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFELENBWFo7O0VBWUEsT0FBUSxVQUFBLENBQUMsRUFBSTtJQUNYLElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFQLENBQWMsSUFBZCxDQUFWO0lBQUEsSUFDRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFkLENBRE47SUFBQSxJQUVFLENBQUMsR0FBRyxFQUZOO0lBR0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFUO0lBQ0EsSUFBTSxDQUFDLEdBQUcsd0JBQVY7SUFBQSxJQUNFLENBQUMsR0FDQyxxRkFGSjtJQUFBLElBR0UsQ0FBQyxHQUFHO01BQ0YsaUJBQWlCLEVBQUUsQ0FBQyxDQURsQjtNQUVGLElBQUksRUFBRSxZQUZKO01BR0YsUUFBUSxFQUFFO0lBSFIsQ0FITjtJQVFBLElBQUksQ0FBQyxHQUFHO01BQ04sYUFBYSxFQUFFLG9CQURUO01BRU4sZ0JBQWdCLEVBQUUsNkJBRlo7TUFHTixXQUFXLEVBQUUsT0FIUDtNQUlOLFVBQVUsRUFBRSxJQUpOO01BS04sS0FBSyxFQUFFLENBQUMsQ0FMRjtNQU1OLFNBQVMsRUFBRSxJQU5MO01BT04sU0FBUyxFQUFFO0lBUEwsQ0FBUjs7SUFTQSxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7TUFDWixPQUFPLENBQUMsQ0FBQyxhQUFGLENBQWdCLElBQWhCLENBQXFCLENBQXJCLENBQVA7SUFDRDs7SUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QjtNQUNyQixJQUFJLENBQUMsR0FBRyxFQUFSO01BQUEsSUFDRSxDQUFDLEdBQUcsRUFETjtNQUVBLG9CQUFtQixDQUFuQixLQUNNLENBQUMsR0FBRyxDQUFMLEVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFoQixFQUFrQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQXhDLEVBQW9ELENBQUMsR0FBRyxLQUFLLENBRGxFLEtBRUssQ0FBQyxDQUFDLFFBQUQsRUFBVyxxREFBWCxDQUFELEVBQ0QsQ0FBQyxDQUNDLFFBREQsRUFFQyx1R0FGRCxDQURBLEVBS0EsQ0FBQyxHQUFHLENBTEosRUFNQSxDQUFDLEdBQUcsQ0FSVDtNQVNBLElBQU0sQ0FBQyxHQUFHO1FBQUUsSUFBSSxFQUFFLENBQVI7UUFBVyxRQUFRLEVBQUU7TUFBckIsQ0FBVjtNQUNBLENBQUMsQ0FBQyxrQkFBRCxFQUFxQixDQUFyQixDQUFEO01BQ0EsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQUYsR0FBVyxDQUFDLENBQUMsTUFBYixHQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQUgsRUFBYSxDQUFDLENBQUMsSUFBZixFQUFxQixDQUFyQixFQUF3QixDQUF4QixDQUFqQztNQUNBLE9BQVEsQ0FBQyxDQUFDLElBQUYsR0FBUyxDQUFDLENBQUMsSUFBWixFQUFtQixDQUFDLENBQUMsaUJBQUQsRUFBb0IsQ0FBcEIsQ0FBcEIsRUFBNEMsQ0FBbkQ7SUFDRDs7SUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QjtNQUNyQixTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQjtRQUNmLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBRixHQUFxQixDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssV0FBTCxFQUFyQixHQUEwQyxDQUFDLENBQUMsQ0FBRCxDQUFyRDtRQUNBLE9BQ0UsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsQ0FBQyxDQUFDLFFBQXZDLEVBQWlELENBQWpELEtBQXVELENBQUMsQ0FBQyxRQUFGLENBQVcsQ0FBWCxDQUR6RDtNQUdEOztNQUNELFNBQVMsQ0FBVCxHQUFhO1FBQ1gsUUFBUSxDQUFDLENBQUMsV0FBVixHQUNLLFlBQU07VUFDTCxJQUFJLE9BQU8sQ0FBWCxFQUFjO1VBQ2QsSUFBSSxDQUFDLEdBQUcsSUFBUjs7VUFDQSxJQUFJLFlBQVksT0FBTyxDQUFDLENBQUMsV0FBekIsRUFBc0M7WUFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBSCxDQUFOLEVBQXVCLE9BQU8sS0FBSyxDQUFDLENBQUMsT0FBRixDQUFVLENBQVYsQ0FBWjtZQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFILEVBQWdCLENBQWhCLEVBQW1CLENBQUMsQ0FBcEIsRUFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFILENBQXhCLENBQU4sRUFDRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQUgsQ0FBRCxHQUFtQixDQUFDLENBQUMsR0FEdkI7VUFFRixDQUpELE1BSU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFDLFdBQUYsQ0FBYyxNQUFkLEdBQXVCLENBQUMsQ0FBQyxXQUF6QixHQUF1QyxJQUEzQyxDQUFMOztVQUNQLENBQUMsQ0FBQyxTQUFGLEdBQWMsQ0FBZCxLQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLFNBQTNCLEdBQ0UsQ0FBQyxDQUFDLGNBQUYsQ0FBaUIsQ0FBQyxDQUFDLE9BQW5CLEVBQTRCLENBQUMsQ0FBQyxRQUE5QixDQURGO1FBRUQsQ0FWRCxFQURKLEdBWUssWUFBTTtVQUNMLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUCxFQUFpQixPQUFPLEtBQUssQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFWLENBQVo7VUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBUjtVQUNBLENBQUMsQ0FBQyxnQkFBRixDQUFtQixTQUFuQixHQUErQixDQUEvQjtVQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBRixDQUFtQixJQUFuQixDQUF3QixDQUF4QixDQUFSO1VBQUEsSUFDRSxDQUFDLEdBQUcsRUFETjs7VUFFQSxPQUFPLENBQVAsR0FBWTtZQUNWLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBRixDQUFZLENBQVosRUFBZSxDQUFDLENBQUMsS0FBakIsQ0FBTDs7WUFDQSxJQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBWDs7WUFDQSxJQUFJLEdBQUosRUFBTztjQUNMLHlCQUFlLEdBQWY7Y0FBQSxJQUFPLEdBQVA7Y0FBQSxJQUFVLEdBQVY7O2NBQ0EsSUFBSyxDQUFDLENBQUMsT0FBRixDQUFVLENBQVYsR0FBZSxDQUFDLEdBQUcsRUFBbkIsRUFBeUIsQ0FBQyxJQUFJLEdBQTlCLEVBQWtDLEdBQUMsQ0FBQyxVQUFGLENBQWEsR0FBYixDQUF2QyxFQUNFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRCxDQUFOLENBREYsS0FFSztnQkFDSCxJQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQUYsQ0FBbUIsR0FBbkIsS0FBeUIsR0FBbkM7O2dCQUNBLENBQUMsQ0FBQyxVQUFGLENBQWEsQ0FBQyxDQUFDLENBQUQsQ0FBZCxFQUFtQixHQUFuQjtjQUNEO1lBQ0YsQ0FSRCxNQVFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRCxDQUFOOztZQUNMLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQUYsQ0FBbUIsU0FBeEIsRUFDRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFGLENBQW1CLElBQW5CLENBQXdCLENBQXhCLENBRE47VUFFRjs7VUFDRDtVQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBRixDQUFTLENBQVQsQ0FBTixFQUFvQixDQUFDLENBQUMsT0FBRixDQUFVLENBQVYsQ0FBcEI7UUFDRixDQXRCRCxFQVpKLEVBbUNHLENBQUMsR0FBRyxFQW5DUDtNQW9DRDs7TUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7UUFDWixPQUNFLENBQUMsQ0FBQyxTQUFGLElBQ0UsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxDQUFDLENBQUMsZ0JBQUYsQ0FBbUIsQ0FBQyxDQUFDLFNBQXJCLEtBQW1DLENBQUMsQ0FBQyxTQUFoRCxDQURGLEVBRUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFQLENBQWMsQ0FBZCxFQUFpQjtVQUFFLE1BQU0sRUFBRTtZQUFFLEtBQUssRUFBRTtVQUFUO1FBQVYsQ0FBakIsQ0FGTCxFQUdBLENBSkY7TUFNRDs7TUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQjtRQUNsQixJQUFJLENBQUMsR0FBSSxVQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7VUFDakIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFGLENBQU8sQ0FBUCxDQUFmO1VBQ0EsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsS0FBcEI7UUFDRCxDQUhPLENBR0wsQ0FBQyxDQUFDLEtBSEcsRUFHSSxDQUhKLENBQVI7O1FBSUEsSUFBSSxDQUFKLEVBQU87VUFDTCxJQUFJLENBQUMsQ0FBQyxRQUFELENBQUwsRUFBaUI7WUFDZixJQUFNLEdBQUMsR0FBRyxJQUFJLENBQUosQ0FBTSxDQUFOLENBQVY7O1lBQ0EsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLENBQVosRUFBZSxHQUFmLEdBQW1CLEdBQUMsQ0FBQyxjQUFGLEtBQXFCLENBQUMsR0FBRyxDQUFDLENBQTFCLENBQW5CO1VBQ0Q7O1VBQ0QsSUFBSSxDQUFKLEVBQU87WUFDTCxPQUFPLENBQUMsQ0FBQyxVQUFGLElBQWdCLENBQUMsQ0FBQyxNQUF6QjtjQUFtQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU47WUFBbkM7O1lBQ0EsT0FBTyxDQUFQO1VBQ0Q7UUFDRjs7UUFDRCxJQUFJLENBQUMsQ0FBQyxjQUFOLEVBQXNCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFILEVBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBUjtNQUN2Qjs7TUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7UUFDWixPQUFPLE1BQU0sQ0FBQyxDQUFDLE9BQUYsQ0FBVSxVQUFoQixJQUErQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUQsQ0FBUCxFQUFhLENBQTNDLEtBQWtELENBQUMsR0FBRyxDQUFDLENBQU4sRUFBVSxDQUEzRCxDQUFQO01BQ0Q7O01BQ0QsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFjO1FBQ1osSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUQsQ0FBWDtRQUFBLElBQ0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FBQyxDQUFDLEtBQVgsQ0FETjtRQUFBLElBRUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGUDtRQUdBLElBQUksQ0FBQyxDQUFMLEVBQVEsT0FBTyxDQUFQO1FBQ1IsSUFBTSxDQUFDLEdBQUcsQ0FBVjtRQUNBLENBQUMsQ0FBQyxJQUFGLEdBQ0ssQ0FBQyxJQUFJLENBRFYsSUFFSyxDQUFDLENBQUMsU0FBRixJQUFlLENBQUMsQ0FBQyxVQUFqQixLQUFnQyxDQUFDLElBQUksQ0FBckMsR0FDRCxDQUFDLEVBREEsRUFFRCxDQUFDLENBQUMsVUFBRixLQUFpQixDQUFDLEdBQUcsQ0FBckIsQ0FKSjs7UUFLQSxHQUFHO1VBQ0QsQ0FBQyxDQUFDLFNBQUYsSUFBZSxDQUFDLENBQUMsU0FBRixFQUFmLEVBQ0UsQ0FBQyxDQUFDLElBQUYsSUFBVSxDQUFDLENBQUMsV0FBWixLQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDLFNBQW5DLENBREYsRUFFRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BRlQ7UUFHRCxDQUpELFFBSVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUpqQjs7UUFLQSxPQUNFLENBQUMsQ0FBQyxNQUFGLEtBQ0csQ0FBQyxDQUFDLGNBQUYsS0FBcUIsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxLQUFULEdBQWlCLENBQUMsQ0FBQyxLQUF4QyxHQUFnRCxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQUgsQ0FEcEQsR0FFQSxDQUFDLENBQUMsU0FBRixHQUFjLENBQWQsR0FBa0IsQ0FBQyxDQUFDLE1BSHRCO01BS0Q7O01BQ0QsSUFBSSxDQUFDLEdBQUcsRUFBUjs7TUFDQSxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQjtRQUNmLElBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRCxDQUFoQjtRQUNBLElBQU0sQ0FBQyxJQUFJLENBQU4sRUFBVSxRQUFRLENBQXZCLEVBQTJCLE9BQU8sQ0FBQyxJQUFJLENBQVo7O1FBQzNCLElBQ0UsWUFBWSxDQUFDLENBQUMsSUFBZCxJQUNBLFVBQVUsQ0FBQyxDQUFDLElBRFosSUFFQSxDQUFDLENBQUMsS0FBRixLQUFZLENBQUMsQ0FBQyxLQUZkLElBR0EsT0FBTyxDQUpULEVBS0U7VUFDQSxJQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBRixDQUFRLENBQUMsQ0FBQyxLQUFWLEVBQWlCLENBQUMsQ0FBQyxLQUFGLEdBQVUsQ0FBM0IsQ0FBTixFQUFzQyxDQUFDLENBQTVDLEVBQWdEO1lBQzlDLElBQU0sR0FBQyxHQUFHLEtBQUssQ0FBQyxxQkFBRCxDQUFmOztZQUNBLE1BQVEsR0FBQyxDQUFDLFlBQUYsR0FBaUIsQ0FBbEIsRUFBdUIsR0FBQyxDQUFDLE9BQUYsR0FBWSxDQUFDLENBQUMsSUFBckMsRUFBNEMsR0FBbkQ7VUFDRDs7VUFDRCxPQUFPLENBQVA7UUFDRDs7UUFDRCxJQUFNLENBQUMsR0FBRyxDQUFMLEVBQVMsWUFBWSxDQUFDLENBQUMsSUFBNUIsRUFDRSxPQUFRLFVBQVUsQ0FBVixFQUFhO1VBQ25CLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELENBQVg7VUFBQSxJQUNFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFEUjtVQUFBLElBRUUsQ0FBQyxHQUFHLElBQUksQ0FBSixDQUFNLENBQU4sQ0FGTjtVQUFBLElBR0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQUgsRUFBa0IsQ0FBQyxDQUFDLFVBQUQsQ0FBbkIsQ0FITjs7VUFJQSx1QkFBZ0IsQ0FBaEI7WUFBSyxJQUFNLEdBQUMsVUFBUDtZQUFjLElBQUksR0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELEVBQVMsQ0FBQyxDQUFDLGNBQWhCLENBQUwsRUFBc0MsT0FBTyxDQUFDLENBQUMsQ0FBRCxDQUFSO1VBQXpEOztVQUNBLE9BQ0UsQ0FBQyxJQUNDLENBQUMsQ0FBQyxjQURKLEtBRUcsQ0FBQyxDQUFDLEtBQUYsR0FBVSxNQUFNLENBQ2YsQ0FBQyxDQUFDLE9BQUYsQ0FBVSx1QkFBVixFQUFtQyxNQUFuQyxDQURlLEVBRWYsR0FGZSxDQUZuQixHQU1BLENBQUMsQ0FBQyxJQUFGLEdBQ0ssQ0FBQyxJQUFJLENBRFYsSUFFSyxDQUFDLENBQUMsWUFBRixLQUFtQixDQUFDLElBQUksQ0FBeEIsR0FDRCxDQUFDLEVBREEsRUFFRCxDQUFDLENBQUMsV0FBRixJQUFpQixDQUFDLENBQUMsWUFBbkIsS0FBb0MsQ0FBQyxHQUFHLENBQXhDLENBSkosQ0FOQSxFQVdBLENBQUMsQ0FBQyxDQUFELENBWEQsRUFZQSxDQUFDLENBQUMsV0FBRixHQUFnQixDQUFoQixHQUFvQixDQUFDLENBQUMsTUFieEI7UUFlRCxDQXJCTSxDQXFCSixDQXJCSSxDQUFQOztRQXNCRixJQUFJLGNBQWMsQ0FBQyxDQUFDLElBQWhCLElBQXdCLENBQUMsQ0FBN0IsRUFBZ0M7VUFDOUIsSUFBTSxHQUFDLEdBQUcsS0FBSyxDQUNiLHFCQUNFLENBREYsR0FFRSxjQUZGLElBR0csQ0FBQyxDQUFDLFNBQUYsSUFBZSxXQUhsQixJQUlFLEdBTFcsQ0FBZjs7VUFPQSxNQUFRLEdBQUMsQ0FBQyxJQUFGLEdBQVMsQ0FBVixFQUFjLEdBQXJCO1FBQ0Q7O1FBQ0QsSUFBSSxVQUFVLENBQUMsQ0FBQyxJQUFoQixFQUFzQjtVQUNwQixJQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRCxDQUFYOztVQUNBLElBQUksR0FBQyxLQUFLLENBQVYsRUFBYSxPQUFPLEdBQVA7UUFDZDs7UUFDRCxJQUFJLGNBQWMsQ0FBQyxDQUFDLElBQWhCLElBQXdCLE9BQU8sQ0FBbkMsRUFBc0MsT0FBTyxDQUFQO1FBQ3RDLElBQUksQ0FBQyxHQUFHLEdBQUosSUFBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBekIsRUFDRSxNQUFNLEtBQUssQ0FDVCwyREFEUyxDQUFYO1FBR0YsT0FBUSxDQUFDLElBQUksQ0FBTixFQUFVLENBQUMsQ0FBQyxNQUFuQjtNQUNEOztNQUNELElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELENBQVg7TUFDQSxJQUFJLENBQUMsQ0FBTCxFQUNFLE1BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFGLENBQVUsSUFBVixFQUFnQixDQUFoQixDQUFELENBQUQsRUFBdUIsS0FBSyxDQUFDLHdCQUF3QixDQUF4QixHQUE0QixHQUE3QixDQUFuQztNQUNGLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELEVBQUk7UUFBRSxPQUFPLEVBQUU7TUFBWCxDQUFKLENBQVg7TUFDQSxJQUFJLENBQUMsR0FBRyxFQUFSO01BQUEsSUFDRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBRFg7TUFFQSxJQUFNLENBQUMsR0FBRyxFQUFWO01BQUEsSUFDRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsU0FBTixDQUFnQixDQUFoQixDQUROOztNQUVDLENBQUMsWUFBTTtRQUNOLElBQU0sQ0FBQyxHQUFHLEVBQVY7O1FBQ0EsS0FBSyxJQUFJLEdBQUMsR0FBRyxDQUFiLEVBQWdCLEdBQUMsS0FBSyxDQUF0QixFQUF5QixHQUFDLEdBQUcsR0FBQyxDQUFDLE1BQS9CO1VBQ0UsR0FBQyxDQUFDLFNBQUYsSUFBZSxDQUFDLENBQUMsT0FBRixDQUFVLEdBQUMsQ0FBQyxTQUFaLENBQWY7UUFERjs7UUFFQSxDQUFDLENBQUMsT0FBRixDQUFVLFVBQUEsQ0FBQztVQUFBLE9BQUksQ0FBQyxDQUFDLFFBQUYsQ0FBVyxDQUFYLENBQUo7UUFBQSxDQUFYO01BQ0QsQ0FMQTs7TUFNRCxJQUFJLENBQUMsR0FBRyxFQUFSO01BQUEsSUFDRSxDQUFDLEdBQUcsQ0FETjtNQUFBLElBRUUsQ0FBQyxHQUFHLENBRk47TUFBQSxJQUdFLENBQUMsR0FBRyxDQUhOO01BQUEsSUFJRSxDQUFDLEdBQUcsQ0FBQyxDQUpQOztNQUtBLElBQUk7UUFDRixLQUFLLENBQUMsQ0FBQyxPQUFGLENBQVUsV0FBVixFQUFMLElBQWtDO1VBQ2hDLENBQUMsSUFBSSxDQUFDLEdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBVCxHQUFjLENBQUMsQ0FBQyxPQUFGLENBQVUsV0FBVixFQUFuQixFQUE2QyxDQUFDLENBQUMsT0FBRixDQUFVLFNBQVYsR0FBc0IsQ0FBcEU7O1VBQ0EsSUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxJQUFWLENBQWUsQ0FBZixDQUFWOztVQUNBLElBQUksQ0FBQyxHQUFMLEVBQVE7O1VBQ1IsSUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFGLENBQVksQ0FBWixFQUFlLEdBQUMsQ0FBQyxLQUFqQixDQUFELEVBQTBCLEdBQTFCLENBQVg7O1VBQ0EsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxLQUFGLEdBQVUsR0FBZDtRQUNEOztRQUNELE9BQ0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FBVCxDQUFELENBQUQsRUFDQSxDQUFDLENBQUMsYUFBRixFQURBLEVBRUEsQ0FBQyxDQUFDLFFBQUYsRUFGQSxFQUdDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBRixFQUhMLEVBSUE7VUFDRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxDQUFYLENBRGI7VUFFRSxLQUFLLEVBQUUsQ0FGVDtVQUdFLFFBQVEsRUFBRSxDQUhaO1VBSUUsT0FBTyxFQUFFLENBQUMsQ0FKWjtVQUtFLE9BQU8sRUFBRSxDQUxYO1VBTUUsR0FBRyxFQUFFO1FBTlAsQ0FMRjtNQWNELENBdEJELENBc0JFLE9BQU8sQ0FBUCxFQUFVO1FBQ1YsSUFBSSxDQUFDLENBQUMsT0FBRixJQUFhLENBQUMsQ0FBQyxPQUFGLENBQVUsUUFBVixDQUFtQixTQUFuQixDQUFqQixFQUNFLE9BQU87VUFDTCxPQUFPLEVBQUUsQ0FBQyxDQURMO1VBRUwsU0FBUyxFQUFFO1lBQ1QsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQURFO1lBRVQsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFGLENBQVEsQ0FBQyxHQUFHLEdBQVosRUFBaUIsQ0FBQyxHQUFHLEdBQXJCLENBRkE7WUFHVCxJQUFJLEVBQUUsQ0FBQyxDQUFDO1VBSEMsQ0FGTjtVQU9MLEtBQUssRUFBRSxDQVBGO1VBUUwsU0FBUyxFQUFFLENBUk47VUFTTCxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUQsQ0FUSDtVQVVMLE9BQU8sRUFBRTtRQVZKLENBQVA7UUFZRixJQUFJLENBQUosRUFDRSxPQUFPO1VBQ0wsT0FBTyxFQUFFLENBQUMsQ0FETDtVQUVMLFNBQVMsRUFBRSxDQUZOO1VBR0wsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFELENBSEg7VUFJTCxPQUFPLEVBQUUsQ0FKSjtVQUtMLFFBQVEsRUFBRSxDQUxMO1VBTUwsR0FBRyxFQUFFLENBTkE7VUFPTCxXQUFXLEVBQUU7UUFQUixDQUFQO1FBU0YsTUFBTSxDQUFOO01BQ0Q7SUFDRjs7SUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQjtNQUNmLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVAsSUFBb0IsTUFBTSxDQUFDLElBQVAsQ0FBWSxDQUFaLENBQXhCOztNQUNBLElBQU0sQ0FBQyxHQUFJLFVBQUEsQ0FBQyxFQUFJO1FBQ1osSUFBTSxDQUFDLEdBQUc7VUFDUixTQUFTLEVBQUUsQ0FESDtVQUVSLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFOLENBQWdCLENBQWhCLENBRkQ7VUFHUixLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUQsQ0FIQTtVQUlSLE9BQU8sRUFBRSxDQUFDLENBSkY7VUFLUixHQUFHLEVBQUU7UUFMRyxDQUFWO1FBT0EsT0FBTyxDQUFDLENBQUMsT0FBRixDQUFVLE9BQVYsQ0FBa0IsQ0FBbEIsR0FBc0IsQ0FBN0I7TUFDRCxDQVRPLENBU0wsQ0FUSyxDQUFWO01BQUEsSUFVRSxDQUFDLEdBQUcsQ0FBQyxDQUNGLE1BREMsQ0FDTSxDQUROLEVBRUQsTUFGQyxDQUVNLENBRk4sRUFHRCxHQUhDLENBR0csVUFBQSxDQUFDO1FBQUEsT0FBSSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFDLENBQVIsQ0FBTDtNQUFBLENBSEosQ0FWTjs7TUFjQSxDQUFDLENBQUMsT0FBRixDQUFVLENBQVY7O01BQ00sSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUYsQ0FBTyxVQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7UUFDdkIsSUFBSSxDQUFDLENBQUMsU0FBRixLQUFnQixDQUFDLENBQUMsU0FBdEIsRUFBaUMsT0FBTyxDQUFDLENBQUMsU0FBRixHQUFjLENBQUMsQ0FBQyxTQUF2Qjs7UUFDakMsSUFBSSxDQUFDLENBQUMsUUFBRixJQUFjLENBQUMsQ0FBQyxRQUFwQixFQUE4QjtVQUM1QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBSCxDQUFELENBQWMsVUFBZCxLQUE2QixDQUFDLENBQUMsUUFBbkMsRUFBNkMsT0FBTyxDQUFQO1VBQzdDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFILENBQUQsQ0FBYyxVQUFkLEtBQTZCLENBQUMsQ0FBQyxRQUFuQyxFQUE2QyxPQUFPLENBQUMsQ0FBUjtRQUM5Qzs7UUFDRCxPQUFPLENBQVA7TUFDRCxDQVBPLENBQUo7TUFBQSx5QkFRSyxDQVJMO01BQUEsSUFRSCxDQVJHO01BQUEsSUFRQSxDQVJBO01BQUEsSUFTSixDQVRJLEdBU0EsQ0FUQTs7TUFVTixPQUFRLENBQUMsQ0FBQyxXQUFGLEdBQWdCLENBQWpCLEVBQXFCLENBQTVCO0lBQ0Q7O0lBQ0QsSUFBTSxDQUFDLEdBQUc7TUFDTiwyQkFBMkIsdUNBQWU7UUFBQSxJQUFSLENBQVEsU0FBWixFQUFZO1FBQ3hDLENBQUMsQ0FBQyxLQUFGLEtBQ0csQ0FBQyxDQUFDLFNBQUYsR0FBYyxDQUFDLENBQUMsU0FBRixDQUNaLE9BRFksQ0FDSixLQURJLEVBQ0csRUFESCxFQUVaLE9BRlksQ0FFSixZQUZJLEVBRVUsSUFGVixDQURqQjtNQUlELENBTks7TUFPTiwwQkFBMEIsc0NBQW1CO1FBQUEsSUFBUixDQUFRLFNBQWhCLE1BQWdCO1FBQzNDLENBQUMsQ0FBQyxLQUFGLEtBQVksQ0FBQyxDQUFDLEtBQUYsR0FBVSxDQUFDLENBQUMsS0FBRixDQUFRLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUIsTUFBdkIsQ0FBdEI7TUFDRDtJQVRLLENBQVY7SUFBQSxJQVdFLENBQUMsR0FBRyxrQkFYTjtJQUFBLElBWUUsQ0FBQyxHQUFHO01BQ0YsMEJBQTBCLHNDQUFtQjtRQUFBLElBQVIsQ0FBUSxTQUFoQixNQUFnQjtRQUMzQyxDQUFDLENBQUMsVUFBRixLQUNHLENBQUMsQ0FBQyxLQUFGLEdBQVUsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxPQUFSLENBQWdCLENBQWhCLEVBQW1CLFVBQUEsQ0FBQztVQUFBLE9BQUksQ0FBQyxDQUFDLE9BQUYsQ0FBVSxLQUFWLEVBQWlCLENBQUMsQ0FBQyxVQUFuQixDQUFKO1FBQUEsQ0FBcEIsQ0FEYjtNQUVEO0lBSkMsQ0FaTjs7SUFrQkEsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFjO01BQ1osSUFBSSxDQUFDLEdBQUcsSUFBUjs7TUFDQSxJQUFNLENBQUMsR0FBSSxVQUFBLENBQUMsRUFBSTtRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFGLEdBQWMsR0FBdEI7UUFDQSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQUYsR0FBZSxDQUFDLENBQUMsVUFBRixDQUFhLFNBQTVCLEdBQXdDLEVBQTdDO1FBQ0EsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFGLENBQW1CLElBQW5CLENBQXdCLENBQXhCLENBQVY7O1FBQ0EsSUFBSSxDQUFKLEVBQU87VUFDTCxJQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFYOztVQUNBLE9BQ0UsR0FBQyxLQUNFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBRixDQUFVLElBQVYsRUFBZ0IsQ0FBQyxDQUFDLENBQUQsQ0FBakIsQ0FBRCxDQUFELEVBQ0QsQ0FBQyxDQUFDLG1EQUFELEVBQXNELENBQXRELENBRkYsQ0FBRCxFQUdBLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRCxDQUFKLEdBQVUsY0FKYjtRQU1EOztRQUNELE9BQU8sQ0FBQyxDQUFDLEtBQUYsQ0FBUSxLQUFSLEVBQWUsSUFBZixDQUFvQixVQUFBLENBQUM7VUFBQSxPQUFJLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBUSxDQUFDLENBQUMsQ0FBRCxDQUFiO1FBQUEsQ0FBckIsQ0FBUDtNQUNELENBZFMsQ0FjUCxDQWRPLENBQVY7O01BZUEsSUFBSSxDQUFDLENBQUMsQ0FBRCxDQUFMLEVBQVU7TUFDVixDQUFDLENBQUMseUJBQUQsRUFBNEI7UUFBRSxFQUFFLEVBQUUsQ0FBTjtRQUFTLFFBQVEsRUFBRTtNQUFuQixDQUE1QixDQUFELEVBQXVELENBQUMsR0FBRyxDQUEzRDtNQUNBLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFaO01BQUEsSUFDRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELEVBQUk7UUFBRSxRQUFRLEVBQUUsQ0FBWjtRQUFlLGNBQWMsRUFBRSxDQUFDO01BQWhDLENBQUosQ0FBSixHQUErQyxDQUFDLENBQUMsQ0FBRCxDQUR2RDtNQUVBLENBQUMsQ0FBQyx3QkFBRCxFQUEyQjtRQUFFLEVBQUUsRUFBRSxDQUFOO1FBQVMsTUFBTSxFQUFFLENBQWpCO1FBQW9CLElBQUksRUFBRTtNQUExQixDQUEzQixDQUFELEVBQ0csQ0FBQyxDQUFDLFNBQUYsR0FBYyxDQUFDLENBQUMsS0FEbkIsRUFFRyxVQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFhO1FBQ1osSUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELENBQUosR0FBVSxDQUFyQjtRQUNBLENBQUMsQ0FBQyxTQUFGLENBQVksR0FBWixDQUFnQixNQUFoQixHQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDLFNBQUYsQ0FBWSxHQUFaLENBQWdCLENBQWhCLENBQTlCO01BQ0QsQ0FIRCxDQUdHLENBSEgsRUFHTSxDQUhOLEVBR1MsQ0FBQyxDQUFDLFFBSFgsQ0FGRixFQU1HLENBQUMsQ0FBQyxNQUFGLEdBQVc7UUFDVixRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBREY7UUFFVixFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBRkk7UUFHVixTQUFTLEVBQUUsQ0FBQyxDQUFDO01BSEgsQ0FOZCxFQVdFLENBQUMsQ0FBQyxXQUFGLEtBQ0csQ0FBQyxDQUFDLFdBQUYsR0FBZ0I7UUFDZixRQUFRLEVBQUUsQ0FBQyxDQUFDLFdBQUYsQ0FBYyxRQURUO1FBRWYsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFGLENBQWMsU0FGSDtRQUdmLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBRixDQUFjO01BSFYsQ0FEbkIsQ0FYRjtJQWlCRDs7SUFDRCxJQUFNLENBQUMsR0FBRyxTQUFKLENBQUksR0FBTTtNQUNkLENBQUMsQ0FBQyxNQUFGLEtBQ0ksQ0FBQyxDQUFDLE1BQUYsR0FBVyxDQUFDLENBQWIsRUFDRCxDQUFDLENBQ0MsUUFERCxFQUVDLGdFQUZELENBREEsRUFLRCxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsVUFBMUIsRUFBc0MsT0FBdEMsQ0FBOEMsQ0FBOUMsQ0FORjtJQU9ELENBUkQ7O0lBU0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFUOztJQUNBLFNBQVMsQ0FBVCxHQUFhO01BQ1gsY0FBYyxRQUFRLENBQUMsVUFBdkIsR0FDSSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsVUFBMUIsRUFBc0MsT0FBdEMsQ0FBOEMsQ0FBOUMsQ0FESixHQUVLLENBQUMsR0FBRyxDQUFDLENBRlY7SUFHRDs7SUFDRCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7TUFDWixPQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFOLEVBQVUsV0FBVixFQUFMLEVBQStCLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUEvQztJQUNEOztJQUNELFNBQVMsQ0FBVCxDQUFXLENBQVgsU0FBbUM7TUFBQSxJQUFMLENBQUssU0FBbkIsWUFBbUI7TUFDakMsWUFBWSxPQUFPLENBQW5CLEtBQXlCLENBQUMsR0FBRyxDQUFDLENBQUQsQ0FBN0IsR0FDRSxDQUFDLENBQUMsT0FBRixDQUFVLFVBQUEsQ0FBQyxFQUFJO1FBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFGLEVBQUQsQ0FBRCxHQUFxQixDQUFyQjtNQUNELENBRkQsQ0FERjtJQUlEOztJQUNELFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYztNQUNaLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELENBQVg7TUFDQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBZjtJQUNEOztJQUNELFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCO01BQ2YsSUFBTSxDQUFDLEdBQUcsQ0FBVjtNQUNBLENBQUMsQ0FBQyxPQUFGLENBQVUsVUFBQSxDQUFDLEVBQUk7UUFDYixDQUFDLENBQUMsQ0FBRCxDQUFELElBQVEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLENBQUwsQ0FBUjtNQUNELENBRkQ7SUFHRDs7SUFDRCxlQUFlLE9BQU8sTUFBdEIsSUFDRSxNQUFNLENBQUMsZ0JBRFQsSUFFRSxNQUFNLENBQUMsZ0JBQVAsQ0FDRSxrQkFERixFQUVFLFlBQU07TUFDSixDQUFDLElBQUksQ0FBQyxFQUFOO0lBQ0QsQ0FKSCxFQUtFLENBQUMsQ0FMSCxDQUZGLEVBU0UsTUFBTSxDQUFDLE1BQVAsQ0FBYyxDQUFkLEVBQWlCO01BQ2YsU0FBUyxFQUFFLENBREk7TUFFZixhQUFhLEVBQUUsQ0FGQTtNQUdmLFlBQVksRUFBRSxDQUhDO01BSWYsU0FBUyxFQUFFLG1CQUFBLENBQUMsRUFBSTtRQUNkLE9BQ0UsQ0FBQyxDQUFDLFFBQUQsRUFBVyw2Q0FBWCxDQUFELEVBQ0EsQ0FBQyxDQUNDLFFBREQsRUFFQyxvRUFGRCxDQURELEVBS0MsQ0FBQyxHQUFHLENBTEwsRUFNQSxDQUFDLENBQUMsVUFBRixJQUFnQixDQUFDLENBQUMsS0FBbEIsR0FDSSxDQUFDLENBQUMsT0FBRixDQUFVLENBQVYsRUFBYSxVQUFBLENBQUM7VUFBQSxPQUNaLFNBQVMsQ0FBVCxHQUNJLENBQUMsQ0FBQyxLQUFGLEdBQ0UsTUFERixHQUVFLENBSE4sR0FJSSxDQUFDLENBQUMsVUFBRixHQUNBLENBQUMsQ0FBQyxPQUFGLENBQVUsS0FBVixFQUFpQixDQUFDLENBQUMsVUFBbkIsQ0FEQSxHQUVBLENBUFE7UUFBQSxDQUFkLENBREosR0FVSSxDQWpCTjtRQW1CQSxJQUFJLENBQUo7TUFDRCxDQXpCYztNQTBCZixnQkFBZ0IsRUFBRSxDQTFCSDtNQTJCZixjQUFjLEVBQUUsd0JBQUEsQ0FBQztRQUFBLE9BQ2YsQ0FBQyxDQUFDLFFBQUQsRUFBVyxrREFBWCxDQUFELEVBQ0EsQ0FBQyxDQUFDLFFBQUQsRUFBVyxrQ0FBWCxDQURELEVBRUEsQ0FBQyxDQUFDLENBQUQsQ0FIYztNQUFBLENBM0JGO01BZ0NmLFNBQVMsRUFBRSxtQkFBQSxDQUFDLEVBQUk7UUFDZCxDQUFDLENBQUMsS0FBRixLQUNHLENBQUMsQ0FBQyxRQUFELEVBQVcsMkNBQVgsQ0FBRCxFQUNELENBQUMsQ0FDQyxRQURELEVBRUMsb0VBRkQsQ0FGSCxHQU1HLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FOUjtNQU9ELENBeENjO01BeUNmLGdCQUFnQixFQUFFLENBekNIO01BMENmLHNCQUFzQixFQUFFLGtDQUFNO1FBQzVCLENBQUMsQ0FDQyxRQURELEVBRUMsc0VBRkQsQ0FBRCxFQUlHLENBQUMsR0FBRyxDQUFDLENBSlI7TUFLRCxDQWhEYztNQWlEZixnQkFBZ0IsRUFBRSwwQkFBQyxDQUFELEVBQUksQ0FBSixFQUFVO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQVI7O1FBQ0EsSUFBSTtVQUNGLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRCxDQUFMO1FBQ0QsQ0FGRCxDQUVFLE9BQU8sQ0FBUCxFQUFVO1VBQ1YsSUFDRyxDQUFDLENBQ0Esd0RBQXdELE9BQXhELENBQ0UsSUFERixFQUVFLENBRkYsQ0FEQSxDQUFELEVBTUQsQ0FBQyxDQVBILEVBU0UsTUFBTSxDQUFOO1VBQ0YsQ0FBQyxDQUFDLENBQUQsQ0FBRCxFQUFPLENBQUMsR0FBRyxDQUFYO1FBQ0Q7O1FBQ0QsQ0FBQyxDQUFDLElBQUYsS0FBVyxDQUFDLENBQUMsSUFBRixHQUFTLENBQXBCLEdBQ0csQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBRFYsRUFFRyxDQUFDLENBQUMsYUFBRixHQUFrQixDQUFDLENBQUMsSUFBRixDQUFPLElBQVAsRUFBYSxDQUFiLENBRnJCLEVBR0UsQ0FBQyxDQUFDLE9BQUYsSUFDRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQUgsRUFBWTtVQUNYLFlBQVksRUFBRTtRQURILENBQVosQ0FKTDtNQU9ELENBekVjO01BMEVmLGtCQUFrQixFQUFFLDRCQUFBLENBQUMsRUFBSTtRQUN2QixPQUFPLENBQUMsQ0FBQyxDQUFELENBQVI7O1FBQ0EsaUNBQWdCLE1BQU0sQ0FBQyxJQUFQLENBQVksQ0FBWixDQUFoQjtVQUFLLElBQU0sR0FBQyxvQkFBUDtVQUEyQixDQUFDLENBQUMsR0FBRCxDQUFELEtBQVMsQ0FBVCxJQUFjLE9BQU8sQ0FBQyxDQUFDLEdBQUQsQ0FBdEI7UUFBaEM7TUFDRCxDQTdFYztNQThFZixhQUFhLEVBQUU7UUFBQSxPQUFNLE1BQU0sQ0FBQyxJQUFQLENBQVksQ0FBWixDQUFOO01BQUEsQ0E5RUE7TUErRWYsV0FBVyxFQUFFLENBL0VFO01BZ0ZmLGVBQWUsRUFBRSxDQWhGRjtNQWlGZixlQUFlLEVBQUUseUJBQUEsQ0FBQyxFQUFJO1FBQ3BCLENBQUMsQ0FBQyxRQUFELEVBQVcsa0RBQVgsQ0FBRCxFQUNFLENBQUMsQ0FDQyxRQURELEVBRUMsa0VBRkQsQ0FESDtRQUtBLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELENBQVg7UUFDQSxJQUFJLENBQUosRUFBTyxPQUFPLENBQVA7UUFDUCxNQUFNLEtBQUssQ0FDVCxpREFBaUQsT0FBakQsQ0FBeUQsSUFBekQsRUFBK0QsQ0FBL0QsQ0FEUyxDQUFYO01BR0QsQ0E1RmM7TUE2RmYsYUFBYSxFQUFFLENBN0ZBO01BOEZmLE9BQU8sRUFBRSxDQTlGTTtNQStGZixTQUFTLEVBQUUsbUJBQUEsQ0FBQyxFQUFJO1FBQ2Q7UUFBQyxDQUFDLFVBQUEsQ0FBQyxFQUFJO1VBQ0wsQ0FBQyxDQUFDLHVCQUFELENBQUQsSUFDRSxDQUFDLENBQUMsQ0FBQyx5QkFBRCxDQURKLEtBRUcsQ0FBQyxDQUFDLHlCQUFELENBQUQsR0FBK0IsVUFBQSxDQUFDLEVBQUk7WUFDbkMsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkIsTUFBTSxDQUFDLE1BQVAsQ0FBYztjQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFBWCxDQUFkLEVBQStCLENBQS9CLENBQTNCO1VBQ0QsQ0FKSCxHQUtFLENBQUMsQ0FBQyxzQkFBRCxDQUFELElBQ0UsQ0FBQyxDQUFDLENBQUMsd0JBQUQsQ0FESixLQUVHLENBQUMsQ0FBQyx3QkFBRCxDQUFELEdBQThCLFVBQUEsQ0FBQyxFQUFJO1lBQ2xDLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCLE1BQU0sQ0FBQyxNQUFQLENBQWM7Y0FBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQVgsQ0FBZCxFQUErQixDQUEvQixDQUExQjtVQUNELENBSkgsQ0FMRjtRQVVELENBWEEsRUFXRSxDQVhGLEdBWUMsQ0FBQyxDQUFDLElBQUYsQ0FBTyxDQUFQLENBWkQ7TUFhRixDQTdHYztNQThHZixTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLO0lBOUdELENBQWpCLENBVEYsRUF5SEcsQ0FBQyxDQUFDLFNBQUYsR0FBYyxZQUFNO01BQ25CLENBQUMsR0FBRyxDQUFDLENBQUw7SUFDRCxDQTNISCxFQTRIRyxDQUFDLENBQUMsUUFBRixHQUFhLFlBQU07TUFDbEIsQ0FBQyxHQUFHLENBQUMsQ0FBTDtJQUNELENBOUhILEVBK0hHLENBQUMsQ0FBQyxhQUFGLEdBQWtCLFFBL0hyQjs7SUFnSUEsS0FBSyxJQUFNLEdBQVgsSUFBZ0IsQ0FBaEI7TUFBbUIsb0JBQW1CLENBQUMsQ0FBQyxHQUFELENBQXBCLEtBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRCxDQUFGLENBQTVCO0lBQW5COztJQUNBLE9BQ0UsTUFBTSxDQUFDLE1BQVAsQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEdBQXFCLENBQUMsQ0FBQyxTQUFGLENBQVksQ0FBWixDQUFyQixFQUFxQyxDQUFDLENBQUMsU0FBRixDQUFZLENBQVosQ0FBckMsRUFBcUQsQ0FBQyxDQUFDLFNBQUYsQ0FBWSxDQUFaLENBQXJELEVBQXFFLENBRHZFO0VBR0QsQ0FyZ0JNLENBcWdCSixFQXJnQkksQ0FBUDtBQXNnQkQsQ0Fyc0NVLEVBQVg7O0FBd3NDQSxvQkFBbUIsT0FBbkIseUNBQW1CLE9BQW5CLE1BQ0UsZUFBZSxPQUFPLE1BRHhCLEtBRUcsTUFBTSxDQUFDLE9BQVAsR0FBaUIsSUFGcEI7QUFLQSxJQUFJLENBQUMsZ0JBQUwsQ0FDRSxRQURGLEVBRUcsWUFBTTtFQUNMOztFQUNBLE9BQU8sVUFBQSxDQUFDLEVBQUk7SUFDVixJQUFNLENBQUMsR0FBRztNQUNSLFNBQVMsRUFBRSxRQURIO01BRVIsS0FBSyxFQUFFO0lBRkMsQ0FBVjtJQUlBLE9BQU87TUFDTCxJQUFJLEVBQUUsZUFERDtNQUVMLE9BQU8sRUFBRSxDQUFDLFlBQUQsQ0FGSjtNQUdMLGdCQUFnQixFQUFFLENBQUMsQ0FIZDtNQUlMLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxpQkFETSxFQUVSO1FBQ0UsU0FBUyxFQUFFLFNBRGI7UUFFRSxLQUFLLEVBQUUsTUFGVDtRQUdFLEdBQUcsRUFBRSxHQUhQO1FBSUUsUUFBUSxFQUFFLENBQ1IsQ0FEUSxFQUVSO1VBQUUsU0FBUyxFQUFFLFFBQWI7VUFBdUIsS0FBSyxFQUFFO1FBQTlCLENBRlEsRUFHUixDQUFDLENBQUMsT0FBRixDQUFVLENBQUMsQ0FBQyxpQkFBWixFQUErQjtVQUFFLFNBQVMsRUFBRTtRQUFiLENBQS9CLENBSFE7TUFKWixDQUZRLEVBWVI7UUFDRSxTQUFTLEVBQUUsV0FEYjtRQUVFLEtBQUssRUFBRSxLQUZUO1FBR0UsU0FBUyxFQUFFLENBSGI7UUFJRSxRQUFRLEVBQUU7VUFDUixRQUFRLEVBQ047UUFGTSxDQUpaO1FBUUUsTUFBTSxFQUFFO1VBQ04sR0FBRyxFQUFFLEdBREM7VUFFTixTQUFTLEVBQUUsQ0FGTDtVQUdOLFFBQVEsRUFBRTtZQUFFLE9BQU8sRUFBRTtVQUFYLENBSEo7VUFJTixRQUFRLEVBQUUsQ0FDUjtZQUFFLFNBQVMsRUFBRSxNQUFiO1lBQXFCLEtBQUssRUFBRSxNQUE1QjtZQUFvQyxHQUFHLEVBQUU7VUFBekMsQ0FEUSxFQUVSO1lBQ0UsU0FBUyxFQUFFLFVBRGI7WUFFRSxLQUFLLEVBQUUsU0FGVDtZQUdFLEdBQUcsRUFBRSxJQUhQO1lBSUUsUUFBUSxFQUFFLENBQUMsTUFBRCxFQUFTO2NBQUUsU0FBUyxFQUFFLFFBQWI7Y0FBdUIsS0FBSyxFQUFFO1lBQTlCLENBQVQ7VUFKWixDQUZRLEVBUVIsQ0FSUSxFQVNSO1lBQUUsU0FBUyxFQUFFLFFBQWI7WUFBdUIsS0FBSyxFQUFFO1VBQTlCLENBVFEsRUFVUixDQUFDLENBQUMsaUJBVk07UUFKSjtNQVJWLENBWlEsQ0FKTDtNQTJDTCxPQUFPLEVBQUU7SUEzQ0osQ0FBUDtFQTZDRCxDQWxERDtBQW1ERCxDQXJERCxFQUZGO0FBeURBLElBQUksQ0FBQyxnQkFBTCxDQUNFLE1BREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsU0FBUyxDQUFULEdBQWlCO0lBQUEsbUNBQUgsQ0FBRztNQUFILENBQUc7SUFBQTs7SUFDZixPQUFPLENBQUMsQ0FDTCxHQURJLENBQ0EsVUFBQSxDQUFDLEVBQUk7TUFDUixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUwsSUFBVyxZQUFZLE9BQU8sQ0FBbkIsR0FBdUIsQ0FBdkIsR0FBMkIsQ0FBQyxDQUFDLE1BQXhDLEdBQWtELElBQXpEO01BQ0EsSUFBSSxDQUFKO0lBQ0QsQ0FKSSxFQUtKLElBTEksQ0FLQyxFQUxELENBQVA7RUFNRDs7RUFDRCxPQUFPLFVBQUEsQ0FBQyxFQUFJO0lBQ1YsSUFBTSxDQUFDLEdBQUcsRUFBVjtJQUFBLElBQ0UsQ0FBQyxHQUFHO01BQ0YsS0FBSyxFQUFFLE1BREw7TUFFRixHQUFHLEVBQUUsSUFGSDtNQUdGLFFBQVEsRUFBRSxDQUNSLE1BRFEsRUFFUjtRQUNFLEtBQUssRUFBRSxJQURUO1FBRUUsUUFBUSxFQUFFLENBQUMsQ0FBRDtNQUZaLENBRlE7SUFIUixDQUROO0lBWUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxDQUFkLEVBQWlCO01BQ2YsU0FBUyxFQUFFLFVBREk7TUFFZixRQUFRLEVBQUUsQ0FDUjtRQUNFLEtBQUssRUFBRSxDQUFDLENBQUMsb0JBQUQsRUFBdUIscUJBQXZCO01BRFYsQ0FEUSxFQUlSLENBSlE7SUFGSyxDQUFqQjtJQVNBLElBQU0sQ0FBQyxHQUFHO01BQ04sU0FBUyxFQUFFLE9BREw7TUFFTixLQUFLLEVBQUUsTUFGRDtNQUdOLEdBQUcsRUFBRSxJQUhDO01BSU4sUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFIO0lBSkosQ0FBVjtJQUFBLElBTUUsQ0FBQyxHQUFHO01BQ0YsS0FBSyxFQUFFLGdCQURMO01BRUYsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLENBQ1IsQ0FBQyxDQUFDLGlCQUFGLENBQW9CO1VBQ2xCLEtBQUssRUFBRSxPQURXO1VBRWxCLEdBQUcsRUFBRSxPQUZhO1VBR2xCLFNBQVMsRUFBRTtRQUhPLENBQXBCLENBRFE7TUFESjtJQUZOLENBTk47SUFBQSxJQWtCRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLEtBQUssRUFBRSxHQUZMO01BR0YsR0FBRyxFQUFFLEdBSEg7TUFJRixRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQUgsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7SUFKUixDQWxCTjtJQXdCQSxDQUFDLENBQUMsUUFBRixDQUFXLElBQVgsQ0FBZ0IsQ0FBaEI7SUFDQSxJQUFNLENBQUMsR0FBRztNQUNOLEtBQUssRUFBRSxRQUREO01BRU4sR0FBRyxFQUFFLE1BRkM7TUFHTixRQUFRLEVBQUUsQ0FDUjtRQUFFLEtBQUssRUFBRSxlQUFUO1FBQTBCLFNBQVMsRUFBRTtNQUFyQyxDQURRLEVBRVIsQ0FBQyxDQUFDLFdBRk0sRUFHUixDQUhRO0lBSEosQ0FBVjtJQUFBLElBU0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFGLENBQVU7TUFDWixNQUFNLEVBQUUsMkNBREk7TUFFWixTQUFTLEVBQUU7SUFGQyxDQUFWLENBVE47SUFBQSxJQWFFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxVQURUO01BRUYsS0FBSyxFQUFFLDJCQUZMO01BR0YsV0FBVyxFQUFFLENBQUMsQ0FIWjtNQUlGLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLFVBQVosRUFBd0I7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQUF4QixDQUFELENBSlI7TUFLRixTQUFTLEVBQUU7SUFMVCxDQWJOO0lBb0JBLE9BQU87TUFDTCxJQUFJLEVBQUUsTUFERDtNQUVMLE9BQU8sRUFBRSxDQUFDLElBQUQsRUFBTyxLQUFQLENBRko7TUFHTCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsZUFERjtRQUVSLE9BQU8sRUFDTCw4REFITTtRQUlSLE9BQU8sRUFBRSxZQUpEO1FBS1IsUUFBUSxFQUNOO01BTk0sQ0FITDtNQVdMLFFBQVEsRUFBRSxDQUNSLENBRFEsRUFFUixDQUFDLENBQUMsT0FBRixFQUZRLEVBR1IsQ0FIUSxFQUlSLENBSlEsRUFLUixDQUFDLENBQUMsaUJBTE0sRUFNUixDQU5RLEVBT1IsQ0FQUSxFQVFSO1FBQUUsU0FBUyxFQUFFLEVBQWI7UUFBaUIsS0FBSyxFQUFFO01BQXhCLENBUlEsRUFTUjtRQUFFLFNBQVMsRUFBRSxRQUFiO1FBQXVCLEtBQUssRUFBRSxHQUE5QjtRQUFtQyxHQUFHLEVBQUU7TUFBeEMsQ0FUUSxFQVVSLENBVlE7SUFYTCxDQUFQO0VBd0JELENBM0ZEO0FBNEZELENBdEdELEVBRkY7QUEwR0EsSUFBSSxDQUFDLGdCQUFMLENBQ0UsR0FERixFQUVHLFlBQU07RUFDTDs7RUFDQSxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7SUFDWixPQUFRO01BQUEsbUNBQUksQ0FBSjtRQUFJLENBQUo7TUFBQTs7TUFBQSxPQUNOLENBQUMsQ0FDRSxHQURILENBQ08sVUFBQSxDQUFDO1FBQUEsT0FDSCxVQUFBLENBQUM7VUFBQSxPQUFLLENBQUMsR0FBSSxZQUFZLE9BQU8sQ0FBbkIsR0FBdUIsQ0FBdkIsR0FBMkIsQ0FBQyxDQUFDLE1BQWpDLEdBQTJDLElBQWpEO1FBQUEsQ0FBRixDQUEwRCxDQUExRCxDQURJO01BQUEsQ0FEUixFQUlHLElBSkgsQ0FJUSxFQUpSLENBRE07SUFBQSxDQUFELENBS1EsR0FMUixFQUthLENBTGIsRUFLZ0IsSUFMaEIsQ0FBUDtFQU1EOztFQUNELE9BQU8sVUFBQSxDQUFDLEVBQUk7SUFDVixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBRixDQUFVLElBQVYsRUFBZ0IsR0FBaEIsRUFBcUI7TUFBRSxRQUFRLEVBQUUsQ0FBQztRQUFFLEtBQUssRUFBRTtNQUFULENBQUQ7SUFBWixDQUFyQixDQUFWO0lBQUEsSUFDRSxDQUFDLEdBQUcsaUJBRE47SUFBQSxJQUVFLENBQUMsR0FDQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUQsQ0FBMUIsR0FBZ0MsZUFBaEMsR0FBa0QsQ0FBQyxDQUFDLFVBQUQsQ0FBbkQsR0FBa0UsR0FIdEU7SUFBQSxJQUlFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxTQURUO01BRUYsS0FBSyxFQUFFO0lBRkwsQ0FKTjtJQUFBLElBUUUsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLFFBRFQ7TUFFRixRQUFRLEVBQUUsQ0FDUjtRQUNFLEtBQUssRUFBRSxhQURUO1FBRUUsR0FBRyxFQUFFLEdBRlA7UUFHRSxPQUFPLEVBQUUsS0FIWDtRQUlFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSDtNQUpaLENBRFEsRUFPUjtRQUNFLEtBQUssRUFDSCxxRUFGSjtRQUdFLEdBQUcsRUFBRSxHQUhQO1FBSUUsT0FBTyxFQUFFO01BSlgsQ0FQUSxFQWFSLENBQUMsQ0FBQyxpQkFBRixDQUFvQjtRQUNsQixLQUFLLEVBQUUsa0NBRFc7UUFFbEIsR0FBRyxFQUFFO01BRmEsQ0FBcEIsQ0FiUTtJQUZSLENBUk47SUFBQSxJQTZCRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLFFBQVEsRUFBRSxDQUNSO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0FEUSxFQUVSO1FBQ0UsS0FBSyxFQUNIO01BRkosQ0FGUSxFQU1SO1FBQ0UsS0FBSyxFQUNIO01BRkosQ0FOUSxDQUZSO01BYUYsU0FBUyxFQUFFO0lBYlQsQ0E3Qk47SUFBQSxJQTRDRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsTUFEVDtNQUVGLEtBQUssRUFBRSxjQUZMO01BR0YsR0FBRyxFQUFFLEdBSEg7TUFJRixRQUFRLEVBQUU7UUFDUixnQkFDRTtNQUZNLENBSlI7TUFRRixRQUFRLEVBQUUsQ0FDUjtRQUFFLEtBQUssRUFBRSxNQUFUO1FBQWlCLFNBQVMsRUFBRTtNQUE1QixDQURRLEVBRVIsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFWLEVBQWE7UUFBRSxTQUFTLEVBQUU7TUFBYixDQUFiLENBRlEsRUFHUjtRQUNFLFNBQVMsRUFBRSxhQURiO1FBRUUsS0FBSyxFQUFFO01BRlQsQ0FIUSxFQU9SLENBUFEsRUFRUixDQUFDLENBQUMsb0JBUk07SUFSUixDQTVDTjtJQUFBLElBK0RFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxPQURUO01BRUYsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUFDLENBQUMsUUFGZDtNQUdGLFNBQVMsRUFBRTtJQUhULENBL0ROO0lBQUEsSUFvRUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUFDLENBQUMsUUFBVCxHQUFvQixTQXBFMUI7SUFBQSxJQXFFRSxDQUFDLEdBQUc7TUFDRixPQUFPLEVBQ0wsdzBCQUZBO01BR0YsUUFBUSxFQUNOLDgxQkFKQTtNQUtGLE9BQU8sRUFBRTtJQUxQLENBckVOO0lBQUEsSUE0RUUsQ0FBQyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBQyxDQUFDLG9CQUFaLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBNUVOO0lBQUEsSUE2RUUsQ0FBQyxHQUFHO01BQ0YsUUFBUSxFQUFFLENBQ1I7UUFBRSxLQUFLLEVBQUUsR0FBVDtRQUFjLEdBQUcsRUFBRTtNQUFuQixDQURRLEVBRVI7UUFBRSxLQUFLLEVBQUUsSUFBVDtRQUFlLEdBQUcsRUFBRTtNQUFwQixDQUZRLEVBR1I7UUFDRSxhQUFhLEVBQUUsdUJBRGpCO1FBRUUsR0FBRyxFQUFFO01BRlAsQ0FIUSxDQURSO01BU0YsUUFBUSxFQUFFLENBVFI7TUFVRixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUNqQjtRQUNFLEtBQUssRUFBRSxJQURUO1FBRUUsR0FBRyxFQUFFLElBRlA7UUFHRSxRQUFRLEVBQUUsQ0FIWjtRQUlFLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBRixDQUFTLENBQUMsTUFBRCxDQUFULENBSlo7UUFLRSxTQUFTLEVBQUU7TUFMYixDQURpQixDQUFULENBVlI7TUFtQkYsU0FBUyxFQUFFO0lBbkJULENBN0VOO0lBQUEsSUFrR0UsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLFVBRFQ7TUFFRixLQUFLLEVBQUUsTUFBTSxDQUFOLEdBQVUsY0FBVixHQUEyQixDQUZoQztNQUdGLFdBQVcsRUFBRSxDQUFDLENBSFo7TUFJRixHQUFHLEVBQUUsT0FKSDtNQUtGLFVBQVUsRUFBRSxDQUFDLENBTFg7TUFNRixRQUFRLEVBQUUsQ0FOUjtNQU9GLE9BQU8sRUFBRSxnQkFQUDtNQVFGLFFBQVEsRUFBRSxDQUNSO1FBQUUsS0FBSyxFQUFFLG9CQUFUO1FBQStCLFFBQVEsRUFBRSxDQUF6QztRQUE0QyxTQUFTLEVBQUU7TUFBdkQsQ0FEUSxFQUVSO1FBQUUsS0FBSyxFQUFFLENBQVQ7UUFBWSxXQUFXLEVBQUUsQ0FBQyxDQUExQjtRQUE2QixRQUFRLEVBQUUsQ0FBQyxDQUFELENBQXZDO1FBQTRDLFNBQVMsRUFBRTtNQUF2RCxDQUZRLEVBR1I7UUFDRSxTQUFTLEVBQUUsUUFEYjtRQUVFLEtBQUssRUFBRSxJQUZUO1FBR0UsR0FBRyxFQUFFLElBSFA7UUFJRSxRQUFRLEVBQUUsQ0FKWjtRQUtFLFNBQVMsRUFBRSxDQUxiO1FBTUUsUUFBUSxFQUFFLENBQ1IsQ0FEUSxFQUVSLENBQUMsQ0FBQyxvQkFGTSxFQUdSLENBSFEsRUFJUixDQUpRLEVBS1IsQ0FMUSxFQU1SO1VBQ0UsS0FBSyxFQUFFLElBRFQ7VUFFRSxHQUFHLEVBQUUsSUFGUDtVQUdFLFFBQVEsRUFBRSxDQUhaO1VBSUUsU0FBUyxFQUFFLENBSmI7VUFLRSxRQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsQ0FBVCxFQUFZLENBQUMsQ0FBQyxvQkFBZCxFQUFvQyxDQUFwQyxFQUF1QyxDQUF2QyxFQUEwQyxDQUExQztRQUxaLENBTlE7TUFOWixDQUhRLEVBd0JSLENBeEJRLEVBeUJSLENBekJRLEVBMEJSLENBQUMsQ0FBQyxvQkExQk0sRUEyQlIsQ0EzQlE7SUFSUixDQWxHTjtJQXdJQSxPQUFPO01BQ0wsSUFBSSxFQUFFLEdBREQ7TUFFTCxPQUFPLEVBQUUsQ0FBQyxHQUFELENBRko7TUFHTCxRQUFRLEVBQUUsQ0FITDtNQUlMLGlCQUFpQixFQUFFLENBQUMsQ0FKZjtNQUtMLE9BQU8sRUFBRSxJQUxKO01BTUwsUUFBUSxFQUFFLEdBQUcsTUFBSCxDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQzNCLENBRDJCLEVBRTNCO1FBQ0UsS0FBSyxFQUNILHNLQUZKO1FBR0UsR0FBRyxFQUFFLEdBSFA7UUFJRSxRQUFRLEVBQUUsQ0FKWjtRQUtFLFFBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxDQUFUO01BTFosQ0FGMkIsRUFTM0I7UUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQUYsR0FBYSxJQUF0QjtRQUE0QixRQUFRLEVBQUU7TUFBdEMsQ0FUMkIsRUFVM0I7UUFDRSxTQUFTLEVBQUUsT0FEYjtRQUVFLGFBQWEsRUFBRSx5QkFGakI7UUFHRSxHQUFHLEVBQUUsVUFIUDtRQUlFLFFBQVEsRUFBRSxDQUFDO1VBQUUsYUFBYSxFQUFFO1FBQWpCLENBQUQsRUFBMEMsQ0FBQyxDQUFDLFVBQTVDO01BSlosQ0FWMkIsQ0FBbkIsQ0FOTDtNQXVCTCxPQUFPLEVBQUU7UUFDUCxZQUFZLEVBQUUsQ0FEUDtRQUVQLE9BQU8sRUFBRSxDQUZGO1FBR1AsUUFBUSxFQUFFO01BSEg7SUF2QkosQ0FBUDtFQTZCRCxDQXRLRDtBQXVLRCxDQWpMRCxFQUZGO0FBcUxBLElBQUksQ0FBQyxnQkFBTCxDQUNFLGNBREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsSUFBTSxDQUFDLEdBQUcsQ0FDTixJQURNLEVBRU4sSUFGTSxFQUdOLElBSE0sRUFJTixJQUpNLEVBS04sS0FMTSxFQU1OLE9BTk0sRUFPTixTQVBNLEVBUU4sS0FSTSxFQVNOLEtBVE0sRUFVTixVQVZNLEVBV04sSUFYTSxFQVlOLFFBWk0sRUFhTixNQWJNLEVBY04sTUFkTSxFQWVOLE9BZk0sRUFnQk4sT0FoQk0sRUFpQk4sWUFqQk0sRUFrQk4sTUFsQk0sRUFtQk4sT0FuQk0sRUFvQk4sTUFwQk0sRUFxQk4sU0FyQk0sRUFzQk4sS0F0Qk0sRUF1Qk4sUUF2Qk0sRUF3Qk4sVUF4Qk0sRUF5Qk4sUUF6Qk0sRUEwQk4sUUExQk0sRUEyQk4sS0EzQk0sRUE0Qk4sT0E1Qk0sRUE2Qk4sT0E3Qk0sRUE4Qk4sT0E5Qk0sRUErQk4sVUEvQk0sRUFnQ04sT0FoQ00sRUFpQ04sT0FqQ00sRUFrQ04sUUFsQ00sRUFtQ04sUUFuQ00sRUFvQ04sTUFwQ00sRUFxQ04sUUFyQ00sRUFzQ04sU0F0Q00sQ0FBVjtFQUFBLElBd0NFLENBQUMsR0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE1BQWxCLEVBQTBCLFdBQTFCLEVBQXVDLEtBQXZDLEVBQThDLFVBQTlDLENBeENOO0VBQUEsSUF5Q0UsQ0FBQyxHQUFHLEdBQUcsTUFBSCxDQUNGLENBQ0UsYUFERixFQUVFLFlBRkYsRUFHRSxlQUhGLEVBSUUsY0FKRixFQUtFLFNBTEYsRUFNRSxTQU5GLEVBT0UsTUFQRixFQVFFLFVBUkYsRUFTRSxPQVRGLEVBVUUsWUFWRixFQVdFLFVBWEYsRUFZRSxXQVpGLEVBYUUsb0JBYkYsRUFjRSxXQWRGLEVBZUUsb0JBZkYsRUFnQkUsUUFoQkYsRUFpQkUsVUFqQkYsQ0FERSxFQW9CRixDQUNFLFdBREYsRUFFRSxNQUZGLEVBR0UsT0FIRixFQUlFLFNBSkYsRUFLRSxRQUxGLEVBTUUsVUFORixFQU9FLGNBUEYsRUFRRSxRQVJGLEVBU0UsUUFURixDQXBCRSxFQStCRixDQUNFLE1BREYsRUFFRSxVQUZGLEVBR0UsUUFIRixFQUlFLE1BSkYsRUFLRSxNQUxGLEVBTUUsUUFORixFQU9FLFFBUEYsRUFRRSxRQVJGLEVBU0UsVUFURixFQVVFLFNBVkYsRUFXRSxPQVhGLEVBWUUsUUFaRixFQWFFLEtBYkYsRUFjRSxLQWRGLEVBZUUsU0FmRixFQWdCRSxTQWhCRixFQWlCRSxPQWpCRixFQWtCRSxTQWxCRixFQW1CRSxNQW5CRixFQW9CRSxTQXBCRixFQXFCRSxjQXJCRixFQXNCRSxZQXRCRixFQXVCRSxZQXZCRixFQXdCRSxXQXhCRixFQXlCRSxhQXpCRixFQTBCRSxhQTFCRixFQTJCRSxjQTNCRixFQTRCRSxPQTVCRixFQTZCRSxZQTdCRixFQThCRSxtQkE5QkYsRUErQkUsYUEvQkYsRUFnQ0UsZUFoQ0YsRUFpQ0UsZ0JBakNGLEVBa0NFLFFBbENGLENBL0JFLEVBbUVGLENBQ0UsV0FERixFQUVFLGVBRkYsRUFHRSxZQUhGLEVBSUUsZ0JBSkYsRUFLRSxhQUxGLEVBTUUsV0FORixFQU9FLFVBUEYsQ0FuRUUsQ0F6Q047RUFzSEEsT0FBTyxVQUFBLENBQUMsRUFBSTtJQUNWLElBQU0sQ0FBQyxHQUFHO01BQ1IsT0FBTyxFQUFFLENBQUMsQ0FDUCxNQURNLENBQ0MsQ0FDTixNQURNLEVBRU4sUUFGTSxFQUdOLE9BSE0sRUFJTixNQUpNLEVBS04sSUFMTSxFQU1OLE1BTk0sRUFPTixLQVBNLEVBUU4sSUFSTSxFQVNOLElBVE0sRUFVTixNQVZNLEVBV04sS0FYTSxDQURELEVBY04sTUFkTSxFQWVILENBQUMsR0FBRyxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLEVBQXdCLFVBQXhCLEVBQW9DLFFBQXBDLENBQUwsRUFDRCxVQUFBLENBQUM7UUFBQSxPQUFJLENBQUMsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxDQUFYLENBQUw7TUFBQSxDQWhCSSxFQUREO01BbUJSLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBRixDQUFTLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxJQUFkLEVBQW9CLEtBQXBCLENBQVQsQ0FuQkQ7TUFvQlIsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FBQyxLQUFELEVBQVEsT0FBUixDQUFUO0lBcEJGLENBQVY7SUFzQkEsSUFBSSxDQUFKO0lBQ0EsSUFBTSxDQUFDLEdBQUcsMEJBQVY7SUFBQSxJQUNFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxPQURUO01BRUYsS0FBSyxFQUFFLEtBRkw7TUFHRixHQUFHLEVBQUUsSUFISDtNQUlGLFFBQVEsRUFBRTtJQUpSLENBRE47SUFBQSxJQU9FLENBQUMsR0FBRyxDQUNGLENBQUMsQ0FBQyxrQkFEQSxFQUVGLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLGFBQVosRUFBMkI7TUFDekIsTUFBTSxFQUFFO1FBQUUsR0FBRyxFQUFFLFVBQVA7UUFBbUIsU0FBUyxFQUFFO01BQTlCO0lBRGlCLENBQTNCLENBRkUsRUFLRjtNQUNFLFNBQVMsRUFBRSxRQURiO01BRUUsUUFBUSxFQUFFLENBQ1I7UUFBRSxLQUFLLEVBQUUsS0FBVDtRQUFnQixHQUFHLEVBQUUsS0FBckI7UUFBNEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFIO01BQXRDLENBRFEsRUFFUjtRQUFFLEtBQUssRUFBRSxHQUFUO1FBQWMsR0FBRyxFQUFFLEdBQW5CO1FBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSDtNQUFsQyxDQUZRLEVBR1I7UUFBRSxLQUFLLEVBQUUsS0FBVDtRQUFnQixHQUFHLEVBQUUsS0FBckI7UUFBNEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFILEVBQXFCLENBQXJCO01BQXRDLENBSFEsRUFJUjtRQUFFLEtBQUssRUFBRSxHQUFUO1FBQWMsR0FBRyxFQUFFLEdBQW5CO1FBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSCxFQUFxQixDQUFyQjtNQUFsQyxDQUpRO0lBRlosQ0FMRSxFQWNGO01BQ0UsU0FBUyxFQUFFLFFBRGI7TUFFRSxRQUFRLEVBQUUsQ0FDUjtRQUFFLEtBQUssRUFBRSxLQUFUO1FBQWdCLEdBQUcsRUFBRSxLQUFyQjtRQUE0QixRQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFDLGlCQUFOO01BQXRDLENBRFEsRUFFUjtRQUFFLEtBQUssRUFBRSxxQkFBVDtRQUFnQyxTQUFTLEVBQUU7TUFBM0MsQ0FGUSxFQUdSO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0FIUTtJQUZaLENBZEUsRUFzQkY7TUFBRSxLQUFLLEVBQUUsTUFBTTtJQUFmLENBdEJFLEVBdUJGO01BQ0UsV0FBVyxFQUFFLFlBRGY7TUFFRSxZQUFZLEVBQUUsQ0FBQyxDQUZqQjtNQUdFLFVBQVUsRUFBRSxDQUFDLENBSGY7TUFJRSxRQUFRLEVBQUUsQ0FDUjtRQUNFLEtBQUssRUFBRSxLQURUO1FBRUUsR0FBRyxFQUFFO01BRlAsQ0FEUSxFQUtSO1FBQUUsS0FBSyxFQUFFLEdBQVQ7UUFBYyxHQUFHLEVBQUU7TUFBbkIsQ0FMUTtJQUpaLENBdkJFLENBUE47SUEyQ0EsQ0FBQyxDQUFDLFFBQUYsR0FBYSxDQUFiO0lBQ0EsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFDLENBQUMsVUFBWixFQUF3QjtNQUFFLEtBQUssRUFBRTtJQUFULENBQXhCLENBQVY7SUFBQSxJQUNFLENBQUMsR0FBRyx5QkFETjtJQUFBLElBRUUsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLFFBRFQ7TUFFRixLQUFLLEVBQUUsV0FGTDtNQUdGLFdBQVcsRUFBRSxDQUFDLENBSFo7TUFJRixRQUFRLEVBQUUsQ0FDUjtRQUNFLEtBQUssRUFBRSxJQURUO1FBRUUsR0FBRyxFQUFFLElBRlA7UUFHRSxRQUFRLEVBQUUsQ0FIWjtRQUlFLFFBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULENBQWdCLENBQWhCO01BSlosQ0FEUTtJQUpSLENBRk47SUFlQSxPQUFPO01BQ0wsSUFBSSxFQUFFLGNBREQ7TUFFTCxPQUFPLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixNQUFuQixDQUZKO01BR0wsUUFBUSxFQUFFLENBSEw7TUFJTCxPQUFPLEVBQUUsTUFKSjtNQUtMLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBRixDQUFTLENBQ2pCLENBQUMsQ0FBQyxPQUFGLENBQVUsS0FBVixFQUFpQixLQUFqQixDQURpQixFQUVqQixDQUFDLENBQUMsaUJBRmUsRUFHakI7UUFDRSxTQUFTLEVBQUUsVUFEYjtRQUVFLEtBQUssRUFBRSxVQUFVLENBQVYsR0FBYyxXQUFkLEdBQTRCLENBRnJDO1FBR0UsR0FBRyxFQUFFLE9BSFA7UUFJRSxXQUFXLEVBQUUsQ0FBQyxDQUpoQjtRQUtFLFFBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO01BTFosQ0FIaUIsRUFVakI7UUFDRSxLQUFLLEVBQUUsWUFEVDtRQUVFLFNBQVMsRUFBRSxDQUZiO1FBR0UsUUFBUSxFQUFFLENBQ1I7VUFDRSxTQUFTLEVBQUUsVUFEYjtVQUVFLEtBQUssRUFBRSxDQUZUO1VBR0UsR0FBRyxFQUFFLE9BSFA7VUFJRSxXQUFXLEVBQUUsQ0FBQyxDQUpoQjtVQUtFLFFBQVEsRUFBRSxDQUFDLENBQUQ7UUFMWixDQURRO01BSFosQ0FWaUIsRUF1QmpCO1FBQ0UsU0FBUyxFQUFFLE9BRGI7UUFFRSxhQUFhLEVBQUUsT0FGakI7UUFHRSxHQUFHLEVBQUUsR0FIUDtRQUlFLE9BQU8sRUFBRSxXQUpYO1FBS0UsUUFBUSxFQUFFLENBQ1I7VUFDRSxhQUFhLEVBQUUsU0FEakI7VUFFRSxjQUFjLEVBQUUsQ0FBQyxDQUZuQjtVQUdFLE9BQU8sRUFBRSxXQUhYO1VBSUUsUUFBUSxFQUFFLENBQUMsQ0FBRDtRQUpaLENBRFEsRUFPUixDQVBRO01BTFosQ0F2QmlCLEVBc0NqQjtRQUNFLEtBQUssRUFBRSxDQUFDLEdBQUcsR0FEYjtRQUVFLEdBQUcsRUFBRSxHQUZQO1FBR0UsV0FBVyxFQUFFLENBQUMsQ0FIaEI7UUFJRSxTQUFTLEVBQUUsQ0FBQyxDQUpkO1FBS0UsU0FBUyxFQUFFO01BTGIsQ0F0Q2lCLENBQVQ7SUFMTCxDQUFQO0VBb0RELENBdklEO0FBd0lELENBaFFELEVBRkY7QUFvUUEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsS0FERixFQUVHLFlBQU07RUFDTDs7RUFDQSxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7SUFDWixPQUFPLENBQUMsQ0FBQyxHQUFELEVBQU0sQ0FBTixFQUFTLElBQVQsQ0FBUjtFQUNEOztFQUNELFNBQVMsQ0FBVCxHQUFpQjtJQUFBLG1DQUFILENBQUc7TUFBSCxDQUFHO0lBQUE7O0lBQ2YsT0FBTyxDQUFDLENBQ0wsR0FESSxDQUNBLFVBQUEsQ0FBQyxFQUFJO01BQ1IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFMLElBQVcsWUFBWSxPQUFPLENBQW5CLEdBQXVCLENBQXZCLEdBQTJCLENBQUMsQ0FBQyxNQUF4QyxHQUFrRCxJQUF6RDtNQUNBLElBQUksQ0FBSjtJQUNELENBSkksRUFLSixJQUxJLENBS0MsRUFMRCxDQUFQO0VBTUQ7O0VBQ0QsT0FBTyxVQUFBLENBQUMsRUFBSTtJQUNWLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsSUFBVixFQUFnQixHQUFoQixFQUFxQjtNQUFFLFFBQVEsRUFBRSxDQUFDO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0FBRDtJQUFaLENBQXJCLENBQVY7SUFBQSxJQUNFLENBQUMsR0FBRyxpQkFETjtJQUFBLElBRUUsQ0FBQyxHQUNDLHlCQUF5QixDQUFDLENBQUMsQ0FBRCxDQUExQixHQUFnQyxlQUFoQyxHQUFrRCxDQUFDLENBQUMsVUFBRCxDQUFuRCxHQUFrRSxHQUh0RTtJQUFBLElBSUUsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLFNBRFQ7TUFFRixLQUFLLEVBQUU7SUFGTCxDQUpOO0lBQUEsSUFRRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLFFBQVEsRUFBRSxDQUNSO1FBQ0UsS0FBSyxFQUFFLGFBRFQ7UUFFRSxHQUFHLEVBQUUsR0FGUDtRQUdFLE9BQU8sRUFBRSxLQUhYO1FBSUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFIO01BSlosQ0FEUSxFQU9SO1FBQ0UsS0FBSyxFQUNILHFFQUZKO1FBR0UsR0FBRyxFQUFFLEdBSFA7UUFJRSxPQUFPLEVBQUU7TUFKWCxDQVBRLEVBYVIsQ0FBQyxDQUFDLGlCQUFGLENBQW9CO1FBQ2xCLEtBQUssRUFBRSxrQ0FEVztRQUVsQixHQUFHLEVBQUU7TUFGYSxDQUFwQixDQWJRO0lBRlIsQ0FSTjtJQUFBLElBNkJFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxRQURUO01BRUYsUUFBUSxFQUFFLENBQ1I7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQURRLEVBRVI7UUFDRSxLQUFLLEVBQ0g7TUFGSixDQUZRLEVBTVI7UUFDRSxLQUFLLEVBQ0g7TUFGSixDQU5RLENBRlI7TUFhRixTQUFTLEVBQUU7SUFiVCxDQTdCTjtJQUFBLElBNENFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxNQURUO01BRUYsS0FBSyxFQUFFLGNBRkw7TUFHRixHQUFHLEVBQUUsR0FISDtNQUlGLFFBQVEsRUFBRTtRQUNSLGdCQUNFO01BRk0sQ0FKUjtNQVFGLFFBQVEsRUFBRSxDQUNSO1FBQUUsS0FBSyxFQUFFLE1BQVQ7UUFBaUIsU0FBUyxFQUFFO01BQTVCLENBRFEsRUFFUixDQUFDLENBQUMsT0FBRixDQUFVLENBQVYsRUFBYTtRQUFFLFNBQVMsRUFBRTtNQUFiLENBQWIsQ0FGUSxFQUdSO1FBQ0UsU0FBUyxFQUFFLGFBRGI7UUFFRSxLQUFLLEVBQUU7TUFGVCxDQUhRLEVBT1IsQ0FQUSxFQVFSLENBQUMsQ0FBQyxvQkFSTTtJQVJSLENBNUNOO0lBQUEsSUErREUsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLE9BRFQ7TUFFRixLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQUMsQ0FBQyxRQUZkO01BR0YsU0FBUyxFQUFFO0lBSFQsQ0EvRE47SUFBQSxJQW9FRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQUMsQ0FBQyxRQUFULEdBQW9CLFNBcEUxQjtJQUFBLElBcUVFLENBQUMsR0FBRztNQUNGLE9BQU8sRUFDTCx3MEJBRkE7TUFHRixRQUFRLEVBQUUsMkJBSFI7TUFJRixnQkFBZ0IsRUFBRSxDQUNoQixNQURnQixFQUVoQixPQUZnQixFQUdoQixNQUhnQixFQUloQixRQUpnQixFQUtoQixNQUxnQixFQU1oQixNQU5nQixFQU9oQixLQVBnQixFQVFoQixNQVJnQixFQVNoQixLQVRnQixFQVVoQixNQVZnQixFQVdoQixPQVhnQixFQVloQixNQVpnQixFQWFoQixTQWJnQixFQWNoQixPQWRnQixFQWVoQixNQWZnQixFQWdCaEIsT0FoQmdCLEVBaUJoQixVQWpCZ0IsRUFrQmhCLE9BbEJnQixFQW1CaEIsTUFuQmdCLEVBb0JoQixPQXBCZ0IsRUFxQmhCLE9BckJnQixFQXNCaEIsUUF0QmdCLEVBdUJoQixLQXZCZ0IsRUF3QmhCLEtBeEJnQixFQXlCaEIsTUF6QmdCLEVBMEJoQixRQTFCZ0IsRUEyQmhCLFVBM0JnQixFQTRCaEIsVUE1QmdCLEVBNkJoQixlQTdCZ0IsRUE4QmhCLFFBOUJnQixFQStCaEIsUUEvQmdCLEVBZ0NoQixTQWhDZ0IsRUFpQ2hCLFNBakNnQixFQWtDaEIsU0FsQ2dCLEVBbUNoQixTQW5DZ0IsRUFvQ2hCLFNBcENnQixFQXFDaEIsU0FyQ2dCLEVBc0NoQixTQXRDZ0IsRUF1Q2hCLFNBdkNnQixFQXdDaEIsU0F4Q2dCLEVBeUNoQixTQXpDZ0IsRUEwQ2hCLFVBMUNnQixFQTJDaEIsU0EzQ2dCLEVBNENoQixTQTVDZ0IsRUE2Q2hCLE1BN0NnQixFQThDaEIsT0E5Q2dCLEVBK0NoQixPQS9DZ0IsRUFnRGhCLEtBaERnQixFQWlEaEIsUUFqRGdCLEVBa0RoQixTQWxEZ0IsRUFtRGhCLFFBbkRnQixFQW9EaEIsUUFwRGdCLEVBcURoQixRQXJEZ0IsRUFzRGhCLFFBdERnQixFQXVEaEIsTUF2RGdCLEVBd0RoQixLQXhEZ0IsRUF5RGhCLFFBekRnQixFQTBEaEIsU0ExRGdCLEVBMkRoQixNQTNEZ0IsRUE0RGhCLE9BNURnQixFQTZEaEIsTUE3RGdCLEVBOERoQixLQTlEZ0IsRUErRGhCLFVBL0RnQixFQWdFaEIsU0FoRWdCLEVBaUVoQixNQWpFZ0IsRUFrRWhCLFFBbEVnQixFQW1FaEIsUUFuRWdCLEVBb0VoQixRQXBFZ0IsRUFxRWhCLFFBckVnQixFQXNFaEIsUUF0RWdCLEVBdUVoQixTQXZFZ0IsRUF3RWhCLFFBeEVnQixFQXlFaEIsU0F6RWdCLEVBMEVoQixTQTFFZ0IsRUEyRWhCLFNBM0VnQixFQTRFaEIsU0E1RWdCLEVBNkVoQixTQTdFZ0IsRUE4RWhCLFFBOUVnQixFQStFaEIsUUEvRWdCLEVBZ0ZoQixNQWhGZ0IsRUFpRmhCLEtBakZnQixFQWtGaEIsZUFsRmdCLEVBbUZoQixvQkFuRmdCLEVBb0ZoQixvQkFwRmdCLEVBcUZoQixnQkFyRmdCLEVBc0ZoQixXQXRGZ0IsRUF1RmhCLE9BdkZnQixFQXdGaEIsWUF4RmdCLEVBeUZoQixPQXpGZ0IsRUEwRmhCLFdBMUZnQixFQTJGaEIsS0EzRmdCLEVBNEZoQixNQTVGZ0IsRUE2RmhCLFVBN0ZnQixFQThGaEIsU0E5RmdCLEVBK0ZoQixVQS9GZ0IsRUFnR2hCLE1BaEdnQixFQWlHaEIsa0JBakdnQixFQWtHaEIsWUFsR2dCLEVBbUdoQixTQW5HZ0IsRUFvR2hCLFdBcEdnQixFQXFHaEIsS0FyR2dCLEVBc0doQixRQXRHZ0IsRUF1R2hCLFNBdkdnQixFQXdHaEIsS0F4R2dCLEVBeUdoQixNQXpHZ0IsRUEwR2hCLE1BMUdnQixFQTJHaEIsTUEzR2dCLEVBNEdoQixPQTVHZ0IsRUE2R2hCLFFBN0dnQixFQThHaEIsUUE5R2dCLEVBK0doQixjQS9HZ0IsRUFnSGhCLGVBaEhnQixFQWlIaEIsZUFqSGdCLENBSmhCO01BdUhGLE9BQU8sRUFBRTtJQXZIUCxDQXJFTjtJQUFBLElBOExFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxtQkFEVDtNQUVGLFNBQVMsRUFBRSxDQUZUO01BR0YsUUFBUSxFQUFFLENBSFI7TUFJRixLQUFLLEVBQUUsQ0FBQyxDQUNOLElBRE0sRUFFTixjQUZNLEVBR04sUUFITSxFQUlOLFNBSk0sRUFLTixXQUxNLEVBTU4sQ0FBQyxDQUFDLFFBTkksR0FPSixDQUFDLEdBQUcsT0FBTCxFQUFlLENBQUMsQ0FBQyxLQUFELEVBQVEsQ0FBUixFQUFXLEdBQVgsQ0FQWDtJQUpOLENBOUxOOztJQTRNQSxJQUFJLENBQUo7O0lBQ0EsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLG9CQUFmLEVBQXFDLENBQXJDLEVBQXdDLENBQXhDLENBQVY7SUFBQSxJQUNFLENBQUMsR0FBRztNQUNGLFFBQVEsRUFBRSxDQUNSO1FBQUUsS0FBSyxFQUFFLEdBQVQ7UUFBYyxHQUFHLEVBQUU7TUFBbkIsQ0FEUSxFQUVSO1FBQUUsS0FBSyxFQUFFLElBQVQ7UUFBZSxHQUFHLEVBQUU7TUFBcEIsQ0FGUSxFQUdSO1FBQ0UsYUFBYSxFQUFFLHVCQURqQjtRQUVFLEdBQUcsRUFBRTtNQUZQLENBSFEsQ0FEUjtNQVNGLFFBQVEsRUFBRSxDQVRSO01BVUYsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FDakI7UUFDRSxLQUFLLEVBQUUsSUFEVDtRQUVFLEdBQUcsRUFBRSxJQUZQO1FBR0UsUUFBUSxFQUFFLENBSFo7UUFJRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUFDLE1BQUQsQ0FBVCxDQUpaO1FBS0UsU0FBUyxFQUFFO01BTGIsQ0FEaUIsQ0FBVCxDQVZSO01BbUJGLFNBQVMsRUFBRTtJQW5CVCxDQUROO0lBQUEsSUFzQkUsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLFVBRFQ7TUFFRixLQUFLLEVBQUUsTUFBTSxDQUFOLEdBQVUsY0FBVixHQUEyQixDQUZoQztNQUdGLFdBQVcsRUFBRSxDQUFDLENBSFo7TUFJRixHQUFHLEVBQUUsT0FKSDtNQUtGLFVBQVUsRUFBRSxDQUFDLENBTFg7TUFNRixRQUFRLEVBQUUsQ0FOUjtNQU9GLE9BQU8sRUFBRSxnQkFQUDtNQVFGLFFBQVEsRUFBRSxDQUNSO1FBQUUsS0FBSyxFQUFFLG9CQUFUO1FBQStCLFFBQVEsRUFBRSxDQUF6QztRQUE0QyxTQUFTLEVBQUU7TUFBdkQsQ0FEUSxFQUVSO1FBQUUsS0FBSyxFQUFFLENBQVQ7UUFBWSxXQUFXLEVBQUUsQ0FBQyxDQUExQjtRQUE2QixRQUFRLEVBQUUsQ0FBQyxDQUFELENBQXZDO1FBQTRDLFNBQVMsRUFBRTtNQUF2RCxDQUZRLEVBR1I7UUFBRSxLQUFLLEVBQUUsSUFBVDtRQUFlLFNBQVMsRUFBRTtNQUExQixDQUhRLEVBSVI7UUFBRSxLQUFLLEVBQUUsR0FBVDtRQUFjLGNBQWMsRUFBRSxDQUFDLENBQS9CO1FBQWtDLFFBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO01BQTVDLENBSlEsRUFLUjtRQUNFLFNBQVMsRUFBRSxRQURiO1FBRUUsS0FBSyxFQUFFLElBRlQ7UUFHRSxHQUFHLEVBQUUsSUFIUDtRQUlFLFFBQVEsRUFBRSxDQUpaO1FBS0UsU0FBUyxFQUFFLENBTGI7UUFNRSxRQUFRLEVBQUUsQ0FDUixDQURRLEVBRVIsQ0FBQyxDQUFDLG9CQUZNLEVBR1IsQ0FIUSxFQUlSLENBSlEsRUFLUixDQUxRLEVBTVI7VUFDRSxLQUFLLEVBQUUsSUFEVDtVQUVFLEdBQUcsRUFBRSxJQUZQO1VBR0UsUUFBUSxFQUFFLENBSFo7VUFJRSxTQUFTLEVBQUUsQ0FKYjtVQUtFLFFBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxDQUFULEVBQVksQ0FBQyxDQUFDLG9CQUFkLEVBQW9DLENBQXBDLEVBQXVDLENBQXZDLEVBQTBDLENBQTFDO1FBTFosQ0FOUTtNQU5aLENBTFEsRUEwQlIsQ0ExQlEsRUEyQlIsQ0EzQlEsRUE0QlIsQ0FBQyxDQUFDLG9CQTVCTSxFQTZCUixDQTdCUTtJQVJSLENBdEJOO0lBOERBLE9BQU87TUFDTCxJQUFJLEVBQUUsS0FERDtNQUVMLE9BQU8sRUFBRSxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsS0FBZCxFQUFxQixLQUFyQixFQUE0QixJQUE1QixFQUFrQyxLQUFsQyxFQUF5QyxLQUF6QyxDQUZKO01BR0wsUUFBUSxFQUFFLENBSEw7TUFJTCxPQUFPLEVBQUUsSUFKSjtNQUtMLGdCQUFnQixFQUFFO1FBQUUscUJBQXFCO01BQXZCLENBTGI7TUFNTCxRQUFRLEVBQUUsR0FBRyxNQUFILENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FDOUIsQ0FEOEIsRUFFOUI7UUFDRSxLQUFLLEVBQ0gsc0tBRko7UUFHRSxHQUFHLEVBQUUsR0FIUDtRQUlFLFFBQVEsRUFBRSxDQUpaO1FBS0UsUUFBUSxFQUFFLENBQUMsTUFBRCxFQUFTLENBQVQ7TUFMWixDQUY4QixFQVM5QjtRQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBRixHQUFhLElBQXRCO1FBQTRCLFFBQVEsRUFBRTtNQUF0QyxDQVQ4QixFQVU5QjtRQUNFLFNBQVMsRUFBRSxPQURiO1FBRUUsYUFBYSxFQUFFLHlCQUZqQjtRQUdFLEdBQUcsRUFBRSxVQUhQO1FBSUUsUUFBUSxFQUFFLENBQUM7VUFBRSxhQUFhLEVBQUU7UUFBakIsQ0FBRCxFQUEwQyxDQUFDLENBQUMsVUFBNUM7TUFKWixDQVY4QixDQUF0QixDQU5MO01BdUJMLE9BQU8sRUFBRTtRQUNQLFlBQVksRUFBRSxDQURQO1FBRVAsT0FBTyxFQUFFLENBRkY7UUFHUCxRQUFRLEVBQUU7TUFISDtJQXZCSixDQUFQO0VBNkJELENBelNEO0FBMFNELENBdlRELEVBRkY7QUEyVEEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsUUFERixFQUVHLFlBQU07RUFDTDs7RUFDQSxPQUFPLFVBQUEsQ0FBQyxFQUFJO0lBQ1YsSUFBTSxDQUFDLEdBQUc7TUFDTixPQUFPLEVBQUUsQ0FDUCxVQURPLEVBRVAsSUFGTyxFQUdQLE1BSE8sRUFJUCxPQUpPLEVBS1AsTUFMTyxFQU1QLE9BTk8sRUFPUCxPQVBPLEVBUVAsVUFSTyxFQVNQLElBVE8sRUFVUCxNQVZPLEVBV1AsT0FYTyxFQVlQLFVBWk8sRUFhUCxRQWJPLEVBY1AsU0FkTyxFQWVQLE9BZk8sRUFnQlAsS0FoQk8sRUFpQlAsU0FqQk8sRUFrQlAsTUFsQk8sRUFtQlAsSUFuQk8sRUFvQlAsVUFwQk8sRUFxQlAsSUFyQk8sRUFzQlAsV0F0Qk8sRUF1QlAsVUF2Qk8sRUF3QlAsSUF4Qk8sRUF5QlAsTUF6Qk8sRUEwQlAsV0ExQk8sRUEyQlAsS0EzQk8sRUE0QlAsVUE1Qk8sRUE2QlAsS0E3Qk8sRUE4QlAsVUE5Qk8sRUErQlAsUUEvQk8sRUFnQ1AsU0FoQ08sRUFpQ1AsV0FqQ08sRUFrQ1AsUUFsQ08sRUFtQ1AsVUFuQ08sRUFvQ1AsUUFwQ08sRUFxQ1AsS0FyQ08sRUFzQ1AsUUF0Q08sRUF1Q1AsUUF2Q08sRUF3Q1AsUUF4Q08sRUF5Q1AsWUF6Q08sRUEwQ1AsUUExQ08sRUEyQ1AsUUEzQ08sRUE0Q1AsUUE1Q08sRUE2Q1AsTUE3Q08sRUE4Q1AsT0E5Q08sRUErQ1AsS0EvQ08sRUFnRFAsUUFoRE8sRUFpRFAsV0FqRE8sRUFrRFAsUUFsRE8sRUFtRFAsT0FuRE8sRUFvRFAsU0FwRE8sRUFxRFAsTUFyRE8sRUFzRFAsVUF0RE8sRUF1RFAsT0F2RE8sRUF3RFAsTUF4RE8sQ0F3REEsQ0FDUCxLQURPLEVBRVAsT0FGTyxFQUdQLEtBSE8sRUFJUCxXQUpPLEVBS1AsT0FMTyxFQU1QLE9BTk8sRUFPUCxJQVBPLEVBUVAsWUFSTyxFQVNQLFFBVE8sRUFVUCxNQVZPLEVBV1AsS0FYTyxFQVlQLFFBWk8sRUFhUCxPQWJPLEVBY1AsTUFkTyxFQWVQLE1BZk8sRUFnQlAsTUFoQk8sRUFpQlAsS0FqQk8sRUFrQlAsUUFsQk8sRUFtQlAsS0FuQk8sRUFvQlAsU0FwQk8sRUFxQlAsSUFyQk8sRUFzQlAsSUF0Qk8sRUF1QlAsU0F2Qk8sRUF3QlAsU0F4Qk8sRUF5QlAsUUF6Qk8sRUEwQlAsUUExQk8sRUEyQlAsS0EzQk8sRUE0QlAsV0E1Qk8sRUE2QlAsU0E3Qk8sRUE4QlAsS0E5Qk8sRUErQlAsTUEvQk8sRUFnQ1AsT0FoQ08sRUFpQ1AsTUFqQ08sRUFrQ1AsT0FsQ08sQ0F4REEsQ0FESDtNQTZGTixRQUFRLEVBQUUsQ0FDUixNQURRLEVBRVIsTUFGUSxFQUdSLE1BSFEsRUFJUixTQUpRLEVBS1IsVUFMUSxFQU1SLFFBTlEsRUFPUixTQVBRLEVBUVIsTUFSUSxFQVNSLE9BVFEsRUFVUixLQVZRLEVBV1IsTUFYUSxFQVlSLE1BWlEsRUFhUixPQWJRLEVBY1IsUUFkUSxFQWVSLE9BZlEsRUFnQlIsT0FoQlEsRUFpQlIsUUFqQlEsRUFrQlIsT0FsQlEsRUFtQlIsTUFuQlEsRUFvQlIsUUFwQlEsQ0E3Rko7TUFtSE4sT0FBTyxFQUFFLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsTUFBckIsRUFBNkIsTUFBN0I7SUFuSEgsQ0FBVjtJQUFBLElBcUhFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBRixDQUFVLENBQUMsQ0FBQyxVQUFaLEVBQXdCO01BQzFCLEtBQUssRUFBRTtJQURtQixDQUF4QixDQXJITjtJQUFBLElBd0hFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxRQURUO01BRUYsUUFBUSxFQUFFLENBQ1I7UUFDRSxLQUFLLEVBQUU7TUFEVCxDQURRLEVBSVI7UUFDRSxLQUFLLEVBQ0g7TUFGSixDQUpRLEVBUVI7UUFDRSxLQUFLLEVBQ0g7TUFGSixDQVJRLENBRlI7TUFlRixTQUFTLEVBQUU7SUFmVCxDQXhITjtJQUFBLElBeUlFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxRQURUO01BRUYsS0FBSyxFQUFFLElBRkw7TUFHRixHQUFHLEVBQUUsR0FISDtNQUlGLFFBQVEsRUFBRSxDQUFDO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0FBRDtJQUpSLENBeklOO0lBQUEsSUErSUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBVixFQUFhO01BQUUsT0FBTyxFQUFFO0lBQVgsQ0FBYixDQS9JTjtJQUFBLElBZ0pFLENBQUMsR0FBRztNQUFFLFNBQVMsRUFBRSxPQUFiO01BQXNCLEtBQUssRUFBRSxJQUE3QjtNQUFtQyxHQUFHLEVBQUUsSUFBeEM7TUFBOEMsUUFBUSxFQUFFO0lBQXhELENBaEpOO0lBQUEsSUFpSkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBVixFQUFhO01BQUUsT0FBTyxFQUFFO0lBQVgsQ0FBYixDQWpKTjtJQUFBLElBa0pFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxRQURUO01BRUYsS0FBSyxFQUFFLEtBRkw7TUFHRixHQUFHLEVBQUUsR0FISDtNQUlGLE9BQU8sRUFBRSxJQUpQO01BS0YsUUFBUSxFQUFFLENBQ1I7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQURRLEVBRVI7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQUZRLEVBR1IsQ0FBQyxDQUFDLGdCQUhNLEVBSVIsQ0FKUTtJQUxSLENBbEpOO0lBQUEsSUE4SkUsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLFFBRFQ7TUFFRixLQUFLLEVBQUUsTUFGTDtNQUdGLEdBQUcsRUFBRSxHQUhIO01BSUYsUUFBUSxFQUFFLENBQ1I7UUFDRSxLQUFLLEVBQUU7TUFEVCxDQURRLEVBSVI7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQUpRLEVBS1I7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQUxRLEVBTVIsQ0FOUTtJQUpSLENBOUpOO0lBQUEsSUEyS0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBVixFQUFhO01BQ2YsT0FBTyxFQUFFLElBRE07TUFFZixRQUFRLEVBQUUsQ0FBQztRQUFFLEtBQUssRUFBRTtNQUFULENBQUQsRUFBb0I7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQUFwQixFQUF1QztRQUFFLEtBQUssRUFBRTtNQUFULENBQXZDLEVBQXdELENBQXhEO0lBRkssQ0FBYixDQTNLTjtJQStLRSxDQUFDLENBQUMsUUFBRixHQUFhLENBQ2IsQ0FEYSxFQUViLENBRmEsRUFHYixDQUhhLEVBSWIsQ0FBQyxDQUFDLGdCQUpXLEVBS2IsQ0FBQyxDQUFDLGlCQUxXLEVBTWIsQ0FOYSxFQU9iLENBQUMsQ0FBQyxvQkFQVyxDQUFkLEVBU0UsQ0FBQyxDQUFDLFFBQUYsR0FBYSxDQUNaLENBRFksRUFFWixDQUZZLEVBR1osQ0FIWSxFQUlaLENBQUMsQ0FBQyxnQkFKVSxFQUtaLENBQUMsQ0FBQyxpQkFMVSxFQU1aLENBTlksRUFPWixDQUFDLENBQUMsT0FBRixDQUFVLENBQUMsQ0FBQyxvQkFBWixFQUFrQztNQUNoQyxPQUFPLEVBQUU7SUFEdUIsQ0FBbEMsQ0FQWSxDQVRmOztJQW9CRCxJQUFNLENBQUMsR0FBRztNQUNOLFFBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQUMsQ0FBQyxnQkFBWixFQUE4QixDQUFDLENBQUMsaUJBQWhDO0lBREosQ0FBVjtJQUFBLElBR0UsQ0FBQyxHQUFHO01BQ0YsS0FBSyxFQUFFLEdBREw7TUFFRixHQUFHLEVBQUUsR0FGSDtNQUdGLFFBQVEsRUFBRSxDQUFDO1FBQUUsYUFBYSxFQUFFO01BQWpCLENBQUQsRUFBOEIsQ0FBOUI7SUFIUixDQUhOO0lBQUEsSUFRRSxDQUFDLEdBQ0MsQ0FBQyxDQUFDLFFBQUYsR0FDQSxJQURBLEdBRUEsQ0FBQyxDQUFDLFFBRkYsR0FHQSxZQUhBLEdBSUEsQ0FBQyxDQUFDLFFBSkYsR0FLQSxnQkFkSjtJQUFBLElBZUUsQ0FBQyxHQUFHO01BQ0YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFFBRGI7TUFFRixTQUFTLEVBQUU7SUFGVCxDQWZOOztJQW1CQSxPQUFPO01BQ0wsSUFBSSxFQUFFLElBREQ7TUFFTCxPQUFPLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUZKO01BR0wsUUFBUSxFQUFFLENBSEw7TUFJTCxPQUFPLEVBQUUsSUFKSjtNQUtMLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxPQUFGLENBQVUsS0FBVixFQUFpQixHQUFqQixFQUFzQjtRQUNwQixXQUFXLEVBQUUsQ0FBQyxDQURNO1FBRXBCLFFBQVEsRUFBRSxDQUNSO1VBQ0UsU0FBUyxFQUFFLFFBRGI7VUFFRSxRQUFRLEVBQUUsQ0FDUjtZQUFFLEtBQUssRUFBRSxLQUFUO1lBQWdCLFNBQVMsRUFBRTtVQUEzQixDQURRLEVBRVI7WUFDRSxLQUFLLEVBQUU7VUFEVCxDQUZRLEVBS1I7WUFBRSxLQUFLLEVBQUUsS0FBVDtZQUFnQixHQUFHLEVBQUU7VUFBckIsQ0FMUTtRQUZaLENBRFE7TUFGVSxDQUF0QixDQURRLEVBZ0JSLENBQUMsQ0FBQyxtQkFoQk0sRUFpQlIsQ0FBQyxDQUFDLG9CQWpCTSxFQWtCUjtRQUNFLFNBQVMsRUFBRSxNQURiO1FBRUUsS0FBSyxFQUFFLEdBRlQ7UUFHRSxHQUFHLEVBQUUsR0FIUDtRQUlFLFFBQVEsRUFBRTtVQUNSLGdCQUNFO1FBRk07TUFKWixDQWxCUSxFQTJCUixDQTNCUSxFQTRCUixDQTVCUSxFQTZCUjtRQUNFLGFBQWEsRUFBRSxpQkFEakI7UUFFRSxTQUFTLEVBQUUsQ0FGYjtRQUdFLEdBQUcsRUFBRSxPQUhQO1FBSUUsT0FBTyxFQUFFLFNBSlg7UUFLRSxRQUFRLEVBQUUsQ0FDUjtVQUFFLGFBQWEsRUFBRTtRQUFqQixDQURRLEVBRVIsQ0FGUSxFQUdSLENBSFEsRUFJUixDQUFDLENBQUMsbUJBSk0sRUFLUixDQUFDLENBQUMsb0JBTE07TUFMWixDQTdCUSxFQTBDUjtRQUNFLGFBQWEsRUFBRSxXQURqQjtRQUVFLFNBQVMsRUFBRSxDQUZiO1FBR0UsR0FBRyxFQUFFLE9BSFA7UUFJRSxPQUFPLEVBQUUsUUFKWDtRQUtFLFFBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFDLENBQUMsbUJBQU4sRUFBMkIsQ0FBQyxDQUFDLG9CQUE3QjtNQUxaLENBMUNRLEVBaURSO1FBQ0UsYUFBYSxFQUFFLFFBRGpCO1FBRUUsU0FBUyxFQUFFLENBRmI7UUFHRSxHQUFHLEVBQUUsT0FIUDtRQUlFLE9BQU8sRUFBRSxRQUpYO1FBS0UsUUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFDLENBQUMsbUJBQVQsRUFBOEIsQ0FBQyxDQUFDLG9CQUFoQztNQUxaLENBakRRLEVBd0RSO1FBQ0UsU0FBUyxFQUFFLE1BRGI7UUFFRSxLQUFLLEVBQUUsVUFGVDtRQUdFLFlBQVksRUFBRSxDQUFDLENBSGpCO1FBSUUsR0FBRyxFQUFFLEtBSlA7UUFLRSxVQUFVLEVBQUUsQ0FBQyxDQUxmO1FBTUUsUUFBUSxFQUFFLENBQ1I7VUFDRSxTQUFTLEVBQUUsYUFEYjtVQUVFLEtBQUssRUFBRSxHQUZUO1VBR0UsR0FBRyxFQUFFO1FBSFAsQ0FEUTtNQU5aLENBeERRLEVBc0VSO1FBQ0UsYUFBYSxFQUFFLDZCQURqQjtRQUVFLFNBQVMsRUFBRTtNQUZiLENBdEVRLEVBMEVSO1FBQ0UsU0FBUyxFQUFFLFVBRGI7UUFFRSxLQUFLLEVBQUUsTUFBTSxDQUFOLEdBQVUsUUFBVixHQUFxQixDQUFDLENBQUMsUUFBdkIsR0FBa0Msb0JBRjNDO1FBR0UsV0FBVyxFQUFFLENBQUMsQ0FIaEI7UUFJRSxHQUFHLEVBQUUsVUFKUDtRQUtFLFVBQVUsRUFBRSxDQUFDLENBTGY7UUFNRSxRQUFRLEVBQUUsQ0FOWjtRQU9FLFFBQVEsRUFBRSxDQUNSO1VBQ0UsYUFBYSxFQUNYLHFIQUZKO1VBR0UsU0FBUyxFQUFFO1FBSGIsQ0FEUSxFQU1SO1VBQ0UsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFGLEdBQWEsb0JBRHRCO1VBRUUsV0FBVyxFQUFFLENBQUMsQ0FGaEI7VUFHRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBSCxFQUFlLENBQWYsQ0FIWjtVQUlFLFNBQVMsRUFBRTtRQUpiLENBTlEsRUFZUjtVQUNFLFNBQVMsRUFBRSxRQURiO1VBRUUsS0FBSyxFQUFFLElBRlQ7VUFHRSxHQUFHLEVBQUUsSUFIUDtVQUlFLFlBQVksRUFBRSxDQUFDLENBSmpCO1VBS0UsVUFBVSxFQUFFLENBQUMsQ0FMZjtVQU1FLFFBQVEsRUFBRSxDQU5aO1VBT0UsU0FBUyxFQUFFLENBUGI7VUFRRSxRQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQUMsQ0FBQyxvQkFBVDtRQVJaLENBWlEsRUFzQlIsQ0FBQyxDQUFDLG1CQXRCTSxFQXVCUixDQUFDLENBQUMsb0JBdkJNO01BUFosQ0ExRVEsRUEyR1IsQ0EzR1E7SUFMTCxDQUFQO0VBbUhELENBMVVEO0FBMlVELENBN1VELEVBRkY7QUFpVkEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsS0FERixFQUVHLFlBQU07RUFDTDs7RUFDQSxJQUFNLENBQUMsR0FBRyxDQUNOLEdBRE0sRUFFTixNQUZNLEVBR04sU0FITSxFQUlOLFNBSk0sRUFLTixPQUxNLEVBTU4sT0FOTSxFQU9OLEdBUE0sRUFRTixZQVJNLEVBU04sTUFUTSxFQVVOLFFBVk0sRUFXTixRQVhNLEVBWU4sU0FaTSxFQWFOLE1BYk0sRUFjTixNQWRNLEVBZU4sSUFmTSxFQWdCTixLQWhCTSxFQWlCTixTQWpCTSxFQWtCTixLQWxCTSxFQW1CTixLQW5CTSxFQW9CTixJQXBCTSxFQXFCTixJQXJCTSxFQXNCTixJQXRCTSxFQXVCTixVQXZCTSxFQXdCTixZQXhCTSxFQXlCTixRQXpCTSxFQTBCTixRQTFCTSxFQTJCTixNQTNCTSxFQTRCTixJQTVCTSxFQTZCTixJQTdCTSxFQThCTixJQTlCTSxFQStCTixJQS9CTSxFQWdDTixJQWhDTSxFQWlDTixJQWpDTSxFQWtDTixRQWxDTSxFQW1DTixRQW5DTSxFQW9DTixNQXBDTSxFQXFDTixHQXJDTSxFQXNDTixRQXRDTSxFQXVDTixLQXZDTSxFQXdDTixPQXhDTSxFQXlDTixLQXpDTSxFQTBDTixLQTFDTSxFQTJDTixPQTNDTSxFQTRDTixRQTVDTSxFQTZDTixJQTdDTSxFQThDTixNQTlDTSxFQStDTixNQS9DTSxFQWdETixNQWhETSxFQWlETixLQWpETSxFQWtETixRQWxETSxFQW1ETixJQW5ETSxFQW9ETixHQXBETSxFQXFETixHQXJETSxFQXNETixPQXRETSxFQXVETixNQXZETSxFQXdETixTQXhETSxFQXlETixNQXpETSxFQTBETixRQTFETSxFQTJETixTQTNETSxFQTRETixLQTVETSxFQTZETixPQTdETSxFQThETixPQTlETSxFQStETixJQS9ETSxFQWdFTixVQWhFTSxFQWlFTixPQWpFTSxFQWtFTixJQWxFTSxFQW1FTixPQW5FTSxFQW9FTixNQXBFTSxFQXFFTixJQXJFTSxFQXNFTixJQXRFTSxFQXVFTixLQXZFTSxFQXdFTixPQXhFTSxDQUFWO0VBQUEsSUEwRUUsQ0FBQyxHQUFHLENBQ0YsV0FERSxFQUVGLGFBRkUsRUFHRixjQUhFLEVBSUYsT0FKRSxFQUtGLGFBTEUsRUFNRixhQU5FLEVBT0YscUJBUEUsRUFRRixlQVJFLEVBU0YsY0FURSxFQVVGLGNBVkUsRUFXRixlQVhFLEVBWUYsTUFaRSxFQWFGLFFBYkUsRUFjRixPQWRFLEVBZUYsaUJBZkUsRUFnQkYsWUFoQkUsRUFpQkYsYUFqQkUsRUFrQkYsZ0JBbEJFLEVBbUJGLGlCQW5CRSxFQW9CRixTQXBCRSxFQXFCRixzQkFyQkUsRUFzQkYsa0JBdEJFLEVBdUJGLHdCQXZCRSxFQXdCRiw4QkF4QkUsRUF5QkYsWUF6QkUsRUEwQkYsTUExQkUsRUEyQkYsV0EzQkUsRUE0QkYsUUE1QkUsRUE2QkYsT0E3QkUsRUE4QkYsV0E5QkUsRUErQkYsV0EvQkUsRUFnQ0YsWUFoQ0UsRUFpQ0YsWUFqQ0UsQ0ExRU47RUFBQSxJQTZHRSxDQUFDLEdBQUcsQ0FDRixRQURFLEVBRUYsVUFGRSxFQUdGLE9BSEUsRUFJRixTQUpFLEVBS0YsU0FMRSxFQU1GLFNBTkUsRUFPRixTQVBFLEVBUUYsS0FSRSxFQVNGLFVBVEUsRUFVRixNQVZFLEVBV0YsT0FYRSxFQVlGLFNBWkUsRUFhRixPQWJFLEVBY0YsYUFkRSxFQWVGLGVBZkUsRUFnQkYsWUFoQkUsRUFpQkYsUUFqQkUsRUFrQkYsT0FsQkUsRUFtQkYsZUFuQkUsRUFvQkYsY0FwQkUsRUFxQkYsS0FyQkUsRUFzQkYsTUF0QkUsRUF1QkYsY0F2QkUsRUF3QkYsT0F4QkUsRUF5QkYsZUF6QkUsRUEwQkYsVUExQkUsRUEyQkYsU0EzQkUsRUE0QkYsSUE1QkUsRUE2QkYsTUE3QkUsRUE4QkYsWUE5QkUsRUErQkYsY0EvQkUsRUFnQ0YsTUFoQ0UsRUFpQ0YsTUFqQ0UsRUFrQ0YsWUFsQ0UsRUFtQ0YsS0FuQ0UsRUFvQ0YsV0FwQ0UsRUFxQ0YsU0FyQ0UsRUFzQ0YsZ0JBdENFLEVBdUNGLGNBdkNFLEVBd0NGLGtCQXhDRSxFQXlDRixhQXpDRSxFQTBDRixZQTFDRSxFQTJDRixjQTNDRSxFQTRDRixVQTVDRSxFQTZDRixjQTdDRSxFQThDRixNQTlDRSxFQStDRixtQkEvQ0UsRUFnREYsV0FoREUsRUFpREYsWUFqREUsRUFrREYsVUFsREUsRUFtREYsT0FuREUsRUFvREYsTUFwREUsRUFxREYsT0FyREUsRUFzREYsUUF0REUsRUF1REYsZUF2REUsRUF3REYsY0F4REUsRUF5REYsT0F6REUsRUEwREYsU0ExREUsRUEyREYsT0EzREUsQ0E3R047RUFBQSxJQTBLRSxDQUFDLEdBQUcsQ0FDRixPQURFLEVBRUYsVUFGRSxFQUdGLFFBSEUsRUFJRixLQUpFLEVBS0YsWUFMRSxFQU1GLGNBTkUsRUFPRixZQVBFLEVBUUYsZUFSRSxFQVNGLFFBVEUsRUFVRixNQVZFLEVBV0YsYUFYRSxFQVlGLFdBWkUsRUFhRixTQWJFLEVBY0YsZ0JBZEUsQ0ExS047RUFBQSxJQTBMRSxDQUFDLEdBQUcsQ0FDRixlQURFLEVBRUYsYUFGRSxFQUdGLFlBSEUsRUFJRixXQUpFLEVBS0YsaUJBTEUsRUFNRixxQkFORSxFQU9GLG9CQVBFLEVBUUYscUJBUkUsRUFTRiwyQkFURSxFQVVGLGdCQVZFLEVBV0Ysc0JBWEUsRUFZRiwyQkFaRSxFQWFGLE1BYkUsRUFjRixxQkFkRSxFQWVGLFlBZkUsRUFnQkYsdUJBaEJFLEVBaUJGLGlCQWpCRSxFQWtCRixrQkFsQkUsRUFtQkYsa0JBbkJFLEVBb0JGLG1CQXBCRSxFQXFCRixxQkFyQkUsRUFzQkYsbUJBdEJFLEVBdUJGLGlCQXZCRSxFQXdCRixRQXhCRSxFQXlCRixlQXpCRSxFQTBCRixxQkExQkUsRUEyQkYsMkJBM0JFLEVBNEJGLDRCQTVCRSxFQTZCRixxQkE3QkUsRUE4QkYscUJBOUJFLEVBK0JGLGlCQS9CRSxFQWdDRixjQWhDRSxFQWlDRixjQWpDRSxFQWtDRixxQkFsQ0UsRUFtQ0YscUJBbkNFLEVBb0NGLG9CQXBDRSxFQXFDRixxQkFyQ0UsRUFzQ0Ysb0JBdENFLEVBdUNGLGFBdkNFLEVBd0NGLG1CQXhDRSxFQXlDRixtQkF6Q0UsRUEwQ0YsbUJBMUNFLEVBMkNGLGVBM0NFLEVBNENGLGNBNUNFLEVBNkNGLG9CQTdDRSxFQThDRixvQkE5Q0UsRUErQ0Ysb0JBL0NFLEVBZ0RGLGdCQWhERSxFQWlERixjQWpERSxFQWtERixZQWxERSxFQW1ERixrQkFuREUsRUFvREYsd0JBcERFLEVBcURGLHlCQXJERSxFQXNERixrQkF0REUsRUF1REYsa0JBdkRFLEVBd0RGLGNBeERFLEVBeURGLFFBekRFLEVBMERGLHNCQTFERSxFQTJERixZQTNERSxFQTRERixZQTVERSxFQTZERixhQTdERSxFQThERixjQTlERSxFQStERixjQS9ERSxFQWdFRixjQWhFRSxFQWlFRixPQWpFRSxFQWtFRixNQWxFRSxFQW1FRixXQW5FRSxFQW9FRixPQXBFRSxFQXFFRixjQXJFRSxFQXNFRixhQXRFRSxFQXVFRixZQXZFRSxFQXdFRixhQXhFRSxFQXlFRixtQkF6RUUsRUEwRUYsbUJBMUVFLEVBMkVGLG1CQTNFRSxFQTRFRixhQTVFRSxFQTZFRixjQTdFRSxFQThFRixTQTlFRSxFQStFRixTQS9FRSxFQWdGRixtQkFoRkUsRUFpRkYsZUFqRkUsRUFrRkYsUUFsRkUsRUFtRkYsV0FuRkUsRUFvRkYsU0FwRkUsRUFxRkYsYUFyRkUsRUFzRkYsUUF0RkUsRUF1RkYsTUF2RkUsRUF3RkYsWUF4RkUsRUF5RkYsZ0JBekZFLEVBMEZGLFdBMUZFLEVBMkZGLFdBM0ZFLEVBNEZGLGFBNUZFLEVBNkZGLFdBN0ZFLEVBOEZGLE9BOUZFLEVBK0ZGLE1BL0ZFLEVBZ0dGLGNBaEdFLEVBaUdGLGFBakdFLEVBa0dGLHVCQWxHRSxFQW1HRixjQW5HRSxFQW9HRix3QkFwR0UsRUFxR0YsV0FyR0UsRUFzR0Ysa0JBdEdFLEVBdUdGLGdCQXZHRSxFQXdHRixjQXhHRSxFQXlHRixZQXpHRSxFQTBHRixjQTFHRSxFQTJHRix3QkEzR0UsRUE0R0YseUJBNUdFLEVBNkdGLGFBN0dFLEVBOEdGLFFBOUdFLEVBK0dGLFNBL0dFLEVBZ0hGLE1BaEhFLEVBaUhGLG1CQWpIRSxFQWtIRixpQkFsSEUsRUFtSEYsa0JBbkhFLEVBb0hGLFVBcEhFLEVBcUhGLFNBckhFLEVBc0hGLFNBdEhFLEVBdUhGLGlCQXZIRSxFQXdIRixNQXhIRSxFQXlIRixnQkF6SEUsRUEwSEYsYUExSEUsRUEySEYsWUEzSEUsRUE0SEYsa0JBNUhFLEVBNkhGLHFCQTdIRSxFQThIRixpQkE5SEUsRUErSEYsUUEvSEUsRUFnSUYsZUFoSUUsRUFpSUYsYUFqSUUsRUFrSUYsY0FsSUUsRUFtSUYsWUFuSUUsRUFvSUYsT0FwSUUsRUFxSUYsTUFySUUsRUFzSUYsWUF0SUUsRUF1SUYsV0F2SUUsRUF3SUYsWUF4SUUsRUF5SUYsV0F6SUUsRUEwSUYsVUExSUUsRUEySUYsV0EzSUUsRUE0SUYsVUE1SUUsRUE2SUYsV0E3SUUsRUE4SUYsUUE5SUUsRUErSUYsTUEvSUUsRUFnSkYsUUFoSkUsRUFpSkYsWUFqSkUsRUFrSkYsaUJBbEpFLEVBbUpGLFNBbkpFLEVBb0pGLE9BcEpFLEVBcUpGLFNBckpFLEVBc0pGLFNBdEpFLEVBdUpGLGVBdkpFLEVBd0pGLGdCQXhKRSxFQXlKRixlQXpKRSxFQTBKRixlQTFKRSxFQTJKRixVQTNKRSxFQTRKRixlQTVKRSxFQTZKRixZQTdKRSxFQThKRixZQTlKRSxFQStKRixTQS9KRSxFQWdLRixnQkFoS0UsRUFpS0YsY0FqS0UsRUFrS0YsZUFsS0UsRUFtS0YsYUFuS0UsRUFvS0Ysa0JBcEtFLEVBcUtGLG1CQXJLRSxFQXNLRixtQkF0S0UsRUF1S0YsYUF2S0UsRUF3S0Ysb0JBeEtFLEVBeUtGLGdCQXpLRSxFQTBLRixVQTFLRSxFQTJLRixRQTNLRSxFQTRLRixRQTVLRSxFQTZLRixPQTdLRSxFQThLRixLQTlLRSxFQStLRixVQS9LRSxFQWdMRixjQWhMRSxFQWlMRixZQWpMRSxFQWtMRixpQkFsTEUsRUFtTEYsaUJBbkxFLEVBb0xGLHVCQXBMRSxFQXFMRixzQkFyTEUsRUFzTEYsdUJBdExFLEVBdUxGLGFBdkxFLEVBd0xGLGVBeExFLEVBeUxGLGdCQXpMRSxFQTBMRixhQTFMRSxFQTJMRixnQkEzTEUsRUE0TEYseUJBNUxFLEVBNkxGLEtBN0xFLEVBOExGLFdBOUxFLEVBK0xGLGtCQS9MRSxFQWdNRixpQkFoTUUsRUFpTUYsWUFqTUUsRUFrTUYsa0JBbE1FLEVBbU1GLHFCQW5NRSxFQW9NRixxQkFwTUUsRUFxTUYsNEJBck1FLEVBc01GLGNBdE1FLEVBdU1GLGdCQXZNRSxFQXdNRixZQXhNRSxFQXlNRixhQXpNRSxFQTBNRixRQTFNRSxFQTJNRixPQTNNRSxFQTRNRixZQTVNRSxFQTZNRixjQTdNRSxFQThNRixXQTlNRSxFQStNRixTQS9NRSxFQWdORixPQWhORSxFQTFMTjtFQTJZQSxPQUFPLFVBQUEsQ0FBQyxFQUFJO0lBQ1YsSUFBTSxDQUFDLEdBQUksVUFBQSxDQUFDO01BQUEsT0FBSztRQUNiLFNBQVMsRUFBRTtVQUFFLFNBQVMsRUFBRSxNQUFiO1VBQXFCLEtBQUssRUFBRTtRQUE1QixDQURFO1FBRWIsUUFBUSxFQUFFO1VBQ1IsU0FBUyxFQUFFLFFBREg7VUFFUixLQUFLLEVBQUU7UUFGQyxDQUZHO1FBTWIsdUJBQXVCLEVBQUU7VUFDdkIsU0FBUyxFQUFFLGVBRFk7VUFFdkIsS0FBSyxFQUFFLElBRmdCO1VBR3ZCLEdBQUcsRUFBRSxJQUhrQjtVQUl2QixPQUFPLEVBQUUsR0FKYztVQUt2QixRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQUgsRUFBcUIsQ0FBQyxDQUFDLGlCQUF2QjtRQUxhO01BTlosQ0FBTDtJQUFBLENBQUYsQ0FhSixDQWJJLENBQVY7SUFBQSxJQWNFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxnQkFBSCxFQUFxQixDQUFDLENBQUMsaUJBQXZCLENBZE47O0lBZUEsT0FBTztNQUNMLElBQUksRUFBRSxLQUREO01BRUwsZ0JBQWdCLEVBQUUsQ0FBQyxDQUZkO01BR0wsT0FBTyxFQUFFLFNBSEo7TUFJTCxRQUFRLEVBQUU7UUFBRSxnQkFBZ0IsRUFBRTtNQUFwQixDQUpMO01BS0wsZ0JBQWdCLEVBQUU7UUFBRSxnQkFBZ0IsRUFBRTtNQUFwQixDQUxiO01BTUwsUUFBUSxFQUFFLENBQ1IsQ0FBQyxDQUFDLG9CQURNLEVBRVI7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQUZRLEVBR1IsQ0FBQyxDQUFDLGVBSE0sRUFJUjtRQUFFLFNBQVMsRUFBRSxhQUFiO1FBQTRCLEtBQUssRUFBRSxpQkFBbkM7UUFBc0QsU0FBUyxFQUFFO01BQWpFLENBSlEsRUFLUjtRQUNFLFNBQVMsRUFBRSxnQkFEYjtRQUVFLEtBQUssRUFBRSw0QkFGVDtRQUdFLFNBQVMsRUFBRTtNQUhiLENBTFEsRUFVUixDQUFDLENBQUMsdUJBVk0sRUFXUjtRQUNFLFNBQVMsRUFBRSxpQkFEYjtRQUVFLFFBQVEsRUFBRSxDQUNSO1VBQ0UsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUYsQ0FBTyxHQUFQLENBQVAsR0FBcUI7UUFEOUIsQ0FEUSxFQUlSO1VBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUYsQ0FBTyxHQUFQLENBQVIsR0FBc0I7UUFBL0IsQ0FKUTtNQUZaLENBWFEsRUFvQlI7UUFDRSxTQUFTLEVBQUUsV0FEYjtRQUVFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFGLENBQU8sR0FBUCxDQUFULEdBQXVCO01BRmhDLENBcEJRLEVBd0JSO1FBQ0UsS0FBSyxFQUFFLEdBRFQ7UUFFRSxHQUFHLEVBQUUsTUFGUDtRQUdFLFFBQVEsR0FDTixDQUFDLENBQUMsUUFESSxFQUVOLENBQUMsQ0FBQyxTQUZJLEVBR04sQ0FBQyxDQUFDLGVBSEksU0FJSCxDQUpHLEdBS047VUFDRSxLQUFLLEVBQUUsa0JBRFQ7VUFFRSxHQUFHLEVBQUUsSUFGUDtVQUdFLFNBQVMsRUFBRSxDQUhiO1VBSUUsUUFBUSxFQUFFO1lBQUUsUUFBUSxFQUFFO1VBQVosQ0FKWjtVQUtFLFFBQVEsRUFBRSxDQUNSO1lBQ0UsU0FBUyxFQUFFLFFBRGI7WUFFRSxLQUFLLEVBQUUsTUFGVDtZQUdFLGNBQWMsRUFBRSxDQUFDLENBSG5CO1lBSUUsVUFBVSxFQUFFLENBQUM7VUFKZixDQURRO1FBTFosQ0FMTSxFQW1CTjtVQUFFLFNBQVMsRUFBRSxVQUFiO1VBQXlCLEtBQUssRUFBRTtRQUFoQyxDQW5CTTtNQUhWLENBeEJRLEVBaURSO1FBQ0UsS0FBSyxHQUNELENBQUMsR0FBRyxHQUFMLEVBQ0E7VUFBQSxtQ0FBSSxDQUFKO1lBQUksQ0FBSjtVQUFBOztVQUFBLE9BQ0MsQ0FBQyxDQUNFLEdBREgsQ0FDTyxVQUFBLENBQUM7WUFBQSxPQUNILFVBQUEsQ0FBQztjQUFBLE9BQUssQ0FBQyxHQUFJLFlBQVksT0FBTyxDQUFuQixHQUF1QixDQUF2QixHQUEyQixDQUFDLENBQUMsTUFBakMsR0FBMkMsSUFBakQ7WUFBQSxDQUFGLENBQTBELENBQTFELENBREk7VUFBQSxDQURSLEVBSUcsSUFKSCxDQUlRLEVBSlIsQ0FERDtRQUFBLENBQUQsQ0FLZSxLQUxmLEVBS3NCLENBTHRCLEVBS3lCLEdBTHpCLENBRkcsQ0FEUDtRQVNFLEdBQUcsRUFBRSxNQVRQO1FBVUUsU0FBUyxFQUFFLENBVmI7UUFXRSxPQUFPLEVBQUUsR0FYWDtRQVlFLFFBQVEsRUFBRSxDQUNSO1VBQUUsU0FBUyxFQUFFLFNBQWI7VUFBd0IsS0FBSyxFQUFFO1FBQS9CLENBRFEsRUFFUjtVQUNFLEtBQUssRUFBRSxJQURUO1VBRUUsY0FBYyxFQUFFLENBQUMsQ0FGbkI7VUFHRSxVQUFVLEVBQUUsQ0FBQyxDQUhmO1VBSUUsU0FBUyxFQUFFLENBSmI7VUFLRSxRQUFRLEVBQUU7WUFDUixRQUFRLEVBQUUsU0FERjtZQUVSLE9BQU8sRUFBRSxpQkFGRDtZQUdSLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBRixDQUFPLEdBQVA7VUFISCxDQUxaO1VBVUUsUUFBUSxHQUNOO1lBQUUsS0FBSyxFQUFFLGNBQVQ7WUFBeUIsU0FBUyxFQUFFO1VBQXBDLENBRE0sU0FFSCxDQUZHLEdBR04sQ0FBQyxDQUFDLGVBSEk7UUFWVixDQUZRO01BWlosQ0FqRFEsRUFpRlI7UUFBRSxTQUFTLEVBQUUsY0FBYjtRQUE2QixLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBRixDQUFPLEdBQVAsQ0FBVCxHQUF1QjtNQUEzRCxDQWpGUTtJQU5MLENBQVA7SUEwRkEsSUFBSSxDQUFKO0VBQ0QsQ0EzR0Q7QUE0R0QsQ0F6ZkQsRUFGRjtBQTZmQSxJQUFJLENBQUMsZ0JBQUwsQ0FDRSxNQURGLEVBRUcsWUFBTTtFQUNMOztFQUNBLE9BQU8sVUFBQSxDQUFDO0lBQUEsT0FBSztNQUNYLElBQUksRUFBRSxNQURLO01BRVgsT0FBTyxFQUFFLENBQUMsT0FBRCxDQUZFO01BR1gsUUFBUSxFQUFFLENBQ1I7UUFDRSxTQUFTLEVBQUUsTUFEYjtRQUVFLFNBQVMsRUFBRSxFQUZiO1FBR0UsUUFBUSxFQUFFLENBQ1I7VUFDRSxLQUFLLEVBQUU7UUFEVCxDQURRLEVBSVI7VUFBRSxLQUFLLEVBQUU7UUFBVCxDQUpRLEVBS1I7VUFDRSxLQUFLLEVBQUU7UUFEVCxDQUxRO01BSFosQ0FEUSxFQWNSO1FBQ0UsU0FBUyxFQUFFLFNBRGI7UUFFRSxRQUFRLEVBQUUsQ0FDUjtVQUFFLEtBQUssRUFBRSxTQUFUO1VBQW9CLEdBQUcsRUFBRTtRQUF6QixDQURRLEVBRVI7VUFBRSxLQUFLLEVBQUUsUUFBVDtVQUFtQixHQUFHLEVBQUU7UUFBeEIsQ0FGUSxFQUdSO1VBQUUsS0FBSyxFQUFFLE9BQVQ7VUFBa0IsR0FBRyxFQUFFO1FBQXZCLENBSFEsRUFJUjtVQUFFLEtBQUssRUFBRSxPQUFUO1VBQWtCLEdBQUcsRUFBRTtRQUF2QixDQUpRLEVBS1I7VUFBRSxLQUFLLEVBQUUsU0FBVDtVQUFvQixHQUFHLEVBQUU7UUFBekIsQ0FMUSxFQU1SO1VBQUUsS0FBSyxFQUFFLFFBQVQ7VUFBbUIsR0FBRyxFQUFFO1FBQXhCLENBTlEsRUFPUjtVQUFFLEtBQUssRUFBRTtRQUFULENBUFEsRUFRUjtVQUNFLEtBQUssRUFBRSxhQURUO1VBRUUsR0FBRyxFQUFFO1FBRlAsQ0FSUTtNQUZaLENBZFEsRUE4QlI7UUFBRSxTQUFTLEVBQUUsVUFBYjtRQUF5QixLQUFLLEVBQUUsS0FBaEM7UUFBdUMsR0FBRyxFQUFFO01BQTVDLENBOUJRLEVBK0JSO1FBQ0UsU0FBUyxFQUFFLFVBRGI7UUFFRSxLQUFLLEVBQUUsSUFGVDtRQUdFLEdBQUcsRUFBRTtNQUhQLENBL0JRLEVBb0NSO1FBQUUsU0FBUyxFQUFFLFVBQWI7UUFBeUIsS0FBSyxFQUFFLElBQWhDO1FBQXNDLEdBQUcsRUFBRTtNQUEzQyxDQXBDUTtJQUhDLENBQUw7RUFBQSxDQUFSO0FBMENELENBNUNELEVBRkY7QUFnREEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsSUFERixFQUVHLFlBQU07RUFDTDs7RUFDQSxPQUFPLFVBQUEsQ0FBQyxFQUFJO0lBQ1YsSUFBTSxDQUFDLEdBQUc7TUFDUixPQUFPLEVBQ0wseVJBRk07TUFHUixPQUFPLEVBQUUscUJBSEQ7TUFJUixRQUFRLEVBQ047SUFMTSxDQUFWO0lBT0EsT0FBTztNQUNMLElBQUksRUFBRSxJQUREO01BRUwsT0FBTyxFQUFFLENBQUMsUUFBRCxDQUZKO01BR0wsUUFBUSxFQUFFLENBSEw7TUFJTCxPQUFPLEVBQUUsSUFKSjtNQUtMLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxtQkFETSxFQUVSLENBQUMsQ0FBQyxvQkFGTSxFQUdSO1FBQ0UsU0FBUyxFQUFFLFFBRGI7UUFFRSxRQUFRLEVBQUUsQ0FDUixDQUFDLENBQUMsaUJBRE0sRUFFUixDQUFDLENBQUMsZ0JBRk0sRUFHUjtVQUFFLEtBQUssRUFBRSxHQUFUO1VBQWMsR0FBRyxFQUFFO1FBQW5CLENBSFE7TUFGWixDQUhRLEVBV1I7UUFDRSxTQUFTLEVBQUUsUUFEYjtRQUVFLFFBQVEsRUFBRSxDQUNSO1VBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxXQUFGLEdBQWdCLEtBQXpCO1VBQWdDLFNBQVMsRUFBRTtRQUEzQyxDQURRLEVBRVIsQ0FBQyxDQUFDLGFBRk07TUFGWixDQVhRLEVBa0JSO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0FsQlEsRUFtQlI7UUFDRSxTQUFTLEVBQUUsVUFEYjtRQUVFLGFBQWEsRUFBRSxNQUZqQjtRQUdFLEdBQUcsRUFBRSxhQUhQO1FBSUUsVUFBVSxFQUFFLENBQUMsQ0FKZjtRQUtFLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxVQURNLEVBRVI7VUFDRSxTQUFTLEVBQUUsUUFEYjtVQUVFLEtBQUssRUFBRSxJQUZUO1VBR0UsR0FBRyxFQUFFLElBSFA7VUFJRSxRQUFRLEVBQUUsQ0FKWjtVQUtFLE9BQU8sRUFBRTtRQUxYLENBRlE7TUFMWixDQW5CUTtJQUxMLENBQVA7RUEwQ0QsQ0FsREQ7QUFtREQsQ0FyREQsRUFGRjtBQXlEQSxJQUFJLENBQUMsZ0JBQUwsQ0FDRSxNQURGLEVBRUcsWUFBTTtFQUNMOztFQUNBLFNBQVMsQ0FBVCxHQUFpQjtJQUFBLG1DQUFILENBQUc7TUFBSCxDQUFHO0lBQUE7O0lBQ2YsT0FBTyxDQUFDLENBQ0wsR0FESSxDQUNBLFVBQUEsQ0FBQyxFQUFJO01BQ1IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFMLElBQVcsWUFBWSxPQUFPLENBQW5CLEdBQXVCLENBQXZCLEdBQTJCLENBQUMsQ0FBQyxNQUF4QyxHQUFrRCxJQUF6RDtNQUNBLElBQUksQ0FBSjtJQUNELENBSkksRUFLSixJQUxJLENBS0MsRUFMRCxDQUFQO0VBTUQ7O0VBQ0QsT0FBTyxVQUFBLENBQUMsRUFBSTtJQUNWLElBQU0sQ0FBQyxHQUFHLG1CQUFWO0lBQUEsSUFDRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsV0FEVDtNQUVGLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRCxFQUFNLHVCQUFOLEVBQStCLFlBQS9CLENBRk47TUFHRixNQUFNLEVBQUU7UUFDTixRQUFRLEVBQUUsQ0FDUjtVQUNFLFNBQVMsRUFBRSxhQURiO1VBRUUsS0FBSyxFQUFFLElBRlQ7VUFHRSxTQUFTLEVBQUUsQ0FIYjtVQUlFLE1BQU0sRUFBRTtZQUFFLEdBQUcsRUFBRSxHQUFQO1lBQVksU0FBUyxFQUFFO1VBQXZCO1FBSlYsQ0FEUTtNQURKO0lBSE4sQ0FETjtJQUFBLElBZUUsQ0FBQyxHQUFHLENBQ0YsQ0FERSxFQUVGO01BQUUsS0FBSyxFQUFFLFFBQVQ7TUFBbUIsTUFBTSxFQUFFO1FBQUUsV0FBVyxFQUFFLEVBQWY7UUFBbUIsY0FBYyxFQUFFLENBQUM7TUFBcEM7SUFBM0IsQ0FGRSxDQWZOO0lBbUJBLE9BQU87TUFDTCxJQUFJLEVBQUUsTUFERDtNQUVMLE9BQU8sRUFBRSxDQUFDLE9BQUQsQ0FGSjtNQUdMLE9BQU8sRUFBRSxJQUhKO01BSUwsUUFBUSxFQUFFLENBQ1I7UUFDRSxLQUFLLEVBQUUsU0FBUyxDQUFULEdBQWEsVUFEdEI7UUFFRSxHQUFHLEVBQUUsR0FGUDtRQUdFLFFBQVEsRUFBRSxDQUNSO1VBQUUsU0FBUyxFQUFFLE1BQWI7VUFBcUIsS0FBSyxFQUFFO1FBQTVCLENBRFEsRUFFUjtVQUFFLFNBQVMsRUFBRSxRQUFiO1VBQXVCLEtBQUssRUFBRTtRQUE5QixDQUZRLENBSFo7UUFPRSxNQUFNLEVBQUU7VUFBRSxHQUFHLEVBQUUsTUFBUDtVQUFlLE9BQU8sRUFBRSxJQUF4QjtVQUE4QixRQUFRLEVBQUU7UUFBeEM7TUFQVixDQURRLEVBVVI7UUFDRSxLQUFLLEVBQUUsc0JBQXNCLENBQXRCLEdBQTBCLElBRG5DO1FBRUUsR0FBRyxFQUFFLEdBRlA7UUFHRSxRQUFRLEVBQUUsQ0FDUjtVQUNFLFNBQVMsRUFBRSxRQURiO1VBRUUsS0FBSyxFQUFFLEdBRlQ7VUFHRSxHQUFHLEVBQUUsR0FIUDtVQUlFLFlBQVksRUFBRSxDQUFDLENBSmpCO1VBS0UsVUFBVSxFQUFFLENBQUM7UUFMZixDQURRLEVBUVI7VUFBRSxTQUFTLEVBQUUsTUFBYjtVQUFxQixLQUFLLEVBQUU7UUFBNUIsQ0FSUSxFQVNSO1VBQ0UsU0FBUyxFQUFFLFNBRGI7VUFFRSxLQUFLLEVBQUU7UUFGVCxDQVRRLENBSFo7UUFpQkUsTUFBTSxFQUFFO1VBQUUsR0FBRyxFQUFFLE1BQVA7VUFBZSxPQUFPLEVBQUUsSUFBeEI7VUFBOEIsUUFBUSxFQUFFO1FBQXhDO01BakJWLENBVlEsRUE2QlIsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFWLEVBQWE7UUFBRSxTQUFTLEVBQUU7TUFBYixDQUFiLENBN0JRO0lBSkwsQ0FBUDtFQW9DRCxDQXhERDtBQXlERCxDQW5FRCxFQUZGO0FBdUVBLElBQUksQ0FBQyxnQkFBTCxDQUNFLEtBREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFjO0lBQ1osT0FBTyxDQUFDLEdBQUksWUFBWSxPQUFPLENBQW5CLEdBQXVCLENBQXZCLEdBQTJCLENBQUMsQ0FBQyxNQUFqQyxHQUEyQyxJQUFuRDtFQUNEOztFQUNELFNBQVMsQ0FBVCxHQUFpQjtJQUFBLG9DQUFILENBQUc7TUFBSCxDQUFHO0lBQUE7O0lBQ2YsT0FBTyxDQUFDLENBQUMsR0FBRixDQUFNLFVBQUEsQ0FBQztNQUFBLE9BQUksQ0FBQyxDQUFDLENBQUQsQ0FBTDtJQUFBLENBQVAsRUFBaUIsSUFBakIsQ0FBc0IsRUFBdEIsQ0FBUDtFQUNEOztFQUNELE9BQU8sVUFBQSxDQUFDLEVBQUk7SUFDVixJQUFNLENBQUMsR0FBRztNQUNOLFNBQVMsRUFBRSxRQURMO01BRU4sU0FBUyxFQUFFLENBRkw7TUFHTixRQUFRLEVBQUUsQ0FBQztRQUFFLEtBQUssRUFBRTtNQUFULENBQUQsRUFBb0M7UUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQVgsQ0FBcEM7SUFISixDQUFWO0lBQUEsSUFLRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQUYsRUFMTjtJQU1BLENBQUMsQ0FBQyxRQUFGLEdBQWEsQ0FDWDtNQUFFLEtBQUssRUFBRSxHQUFUO01BQWMsR0FBRyxFQUFFO0lBQW5CLENBRFcsRUFFWDtNQUFFLEtBQUssRUFBRSxHQUFUO01BQWMsR0FBRyxFQUFFO0lBQW5CLENBRlcsQ0FBYjtJQUlBLElBQU0sQ0FBQyxHQUFHO01BQ04sU0FBUyxFQUFFLFVBREw7TUFFTixRQUFRLEVBQUUsQ0FBQztRQUFFLEtBQUssRUFBRTtNQUFULENBQUQsRUFBaUM7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQUFqQztJQUZKLENBQVY7SUFBQSxJQUlFLENBQUMsR0FBRztNQUFFLFNBQVMsRUFBRSxTQUFiO01BQXdCLEtBQUssRUFBRTtJQUEvQixDQUpOO0lBQUEsSUFLRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSCxDQUZSO01BR0YsUUFBUSxFQUFFLENBQ1I7UUFBRSxLQUFLLEVBQUUsS0FBVDtRQUFnQixHQUFHLEVBQUUsS0FBckI7UUFBNEIsU0FBUyxFQUFFO01BQXZDLENBRFEsRUFFUjtRQUFFLEtBQUssRUFBRSxLQUFUO1FBQWdCLEdBQUcsRUFBRSxLQUFyQjtRQUE0QixTQUFTLEVBQUU7TUFBdkMsQ0FGUSxFQUdSO1FBQUUsS0FBSyxFQUFFLEdBQVQ7UUFBYyxHQUFHLEVBQUU7TUFBbkIsQ0FIUSxFQUlSO1FBQUUsS0FBSyxFQUFFLEdBQVQ7UUFBYyxHQUFHLEVBQUU7TUFBbkIsQ0FKUTtJQUhSLENBTE47SUFBQSxJQWVFLENBQUMsR0FBRztNQUNGLEtBQUssRUFBRSxJQURMO01BRUYsR0FBRyxFQUFFLElBRkg7TUFHRixRQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixNQUFoQixDQUhSO01BSUYsU0FBUyxFQUFFO0lBSlQsQ0FmTjtJQUFBLElBcUJFLENBQUMsR0FDQyxNQUNBLENBQUMsZ0JBQUQsRUFBbUIsZUFBbkIsRUFBb0MsU0FBcEMsRUFDRyxHQURILENBQ08sVUFBQSxDQUFDO01BQUEsT0FBSSxDQUFDLENBQUMsQ0FBRCxDQUFMO0lBQUEsQ0FEUixFQUVHLElBRkgsQ0FFUSxHQUZSLENBREEsR0FJQSxHQTFCSjtJQTJCQSxPQUFPO01BQ0wsSUFBSSxFQUFFLGdCQUREO01BRUwsT0FBTyxFQUFFLENBQUMsTUFBRCxDQUZKO01BR0wsZ0JBQWdCLEVBQUUsQ0FBQyxDQUhkO01BSUwsT0FBTyxFQUFFLElBSko7TUFLTCxRQUFRLEVBQUUsQ0FDUixDQURRLEVBRVI7UUFBRSxTQUFTLEVBQUUsU0FBYjtRQUF3QixLQUFLLEVBQUUsS0FBL0I7UUFBc0MsR0FBRyxFQUFFO01BQTNDLENBRlEsRUFHUjtRQUNFLEtBQUssRUFBRSxDQUFDLENBQ04sQ0FETSxFQUVOLGNBRk0sRUFHTixDQUhNLEVBSU4sSUFKTSxFQUtOLENBQUMsQ0FBQyxLQUFELEVBQVEsZUFBUixFQUF5QixHQUF6QixDQUxLLENBRFY7UUFRRSxTQUFTLEVBQUUsTUFSYjtRQVNFLE1BQU0sRUFBRTtVQUFFLEdBQUcsRUFBRSxHQUFQO1VBQVksUUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEI7UUFBdEI7TUFUVixDQUhRO0lBTEwsQ0FBUDtFQXFCRCxDQTNERDtBQTRERCxDQXBFRCxFQUZGO0FBd0VBLElBQUksQ0FBQyxnQkFBTCxDQUNFLE1BREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsSUFBSSxDQUFDLEdBQUcsc0JBQVI7RUFBQSxJQUNFLENBQUMsR0FBRyw2QkFETjtFQUFBLElBRUUsQ0FBQyxHQUFHO0lBQ0YsU0FBUyxFQUFFLFFBRFQ7SUFFRixRQUFRLEVBQUUsQ0FDUjtNQUNFLEtBQUssbUNBQTRCLENBQTVCLHNCQUF5QyxDQUF6QztJQURQLENBRFEsRUFJUjtNQUFFLEtBQUssa0NBQTJCLENBQTNCO0lBQVAsQ0FKUSxFQUtSO01BQ0UsS0FBSyxhQUFNLENBQU47SUFEUCxDQUxRLEVBUVI7TUFBRSxLQUFLLEVBQUU7SUFBVCxDQVJRLEVBU1I7TUFDRSxLQUFLLHNCQUFlLENBQWYsb0JBQTBCLENBQTFCLG1CQUFvQyxDQUFwQztJQURQLENBVFEsRUFZUjtNQUFFLEtBQUssRUFBRTtJQUFULENBWlEsRUFhUjtNQUFFLEtBQUsscUJBQWMsQ0FBZDtJQUFQLENBYlEsRUFjUjtNQUNFLEtBQUssRUFBRTtJQURULENBZFEsRUFpQlI7TUFBRSxLQUFLLEVBQUU7SUFBVCxDQWpCUSxDQUZSO0lBcUJGLFNBQVMsRUFBRTtFQXJCVCxDQUZOO0VBeUJBLE9BQU8sVUFBQSxDQUFDLEVBQUk7SUFDVixJQUFJLENBQUMsR0FDRCxnV0FESjtJQUFBLElBRUUsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLE1BRFQ7TUFFRixLQUFLLEVBQUUsaURBRkw7TUFHRixRQUFRLEVBQUUsQ0FBQztRQUFFLEtBQUssRUFBRSxJQUFUO1FBQWUsR0FBRyxFQUFFLElBQXBCO1FBQTBCLFFBQVEsRUFBRSxDQUFDLE1BQUQ7TUFBcEMsQ0FBRDtJQUhSLENBRk47SUFPQSxJQUFNLENBQUMsR0FBRyxDQUFWO0lBQ0EsT0FBTztNQUNMLElBQUksRUFBRSxNQUREO01BRUwsT0FBTyxFQUFFLENBQUMsS0FBRCxDQUZKO01BR0wsUUFBUSxFQUFFLENBSEw7TUFJTCxPQUFPLEVBQUUsT0FKSjtNQUtMLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxPQUFGLENBQVUsU0FBVixFQUFxQixNQUFyQixFQUE2QjtRQUMzQixTQUFTLEVBQUUsQ0FEZ0I7UUFFM0IsUUFBUSxFQUFFLENBQ1I7VUFBRSxLQUFLLEVBQUUsTUFBVDtVQUFpQixTQUFTLEVBQUU7UUFBNUIsQ0FEUSxFQUVSO1VBQUUsU0FBUyxFQUFFLFFBQWI7VUFBdUIsS0FBSyxFQUFFO1FBQTlCLENBRlE7TUFGaUIsQ0FBN0IsQ0FEUSxFQVFSO1FBQ0UsS0FBSyxFQUFFLHVCQURUO1FBRUUsUUFBUSxFQUFFLFFBRlo7UUFHRSxTQUFTLEVBQUU7TUFIYixDQVJRLEVBYVIsQ0FBQyxDQUFDLG1CQWJNLEVBY1IsQ0FBQyxDQUFDLG9CQWRNLEVBZVIsQ0FBQyxDQUFDLGdCQWZNLEVBZ0JSLENBQUMsQ0FBQyxpQkFoQk0sRUFpQlI7UUFDRSxTQUFTLEVBQUUsT0FEYjtRQUVFLGFBQWEsRUFBRSxzQkFGakI7UUFHRSxHQUFHLEVBQUUsT0FIUDtRQUlFLFVBQVUsRUFBRSxDQUFDLENBSmY7UUFLRSxTQUFTLEVBQUUsQ0FMYjtRQU1FLFFBQVEsRUFBRSxzQkFOWjtRQU9FLE9BQU8sRUFBRSxVQVBYO1FBUUUsUUFBUSxFQUFFLENBQ1I7VUFBRSxhQUFhLEVBQUU7UUFBakIsQ0FEUSxFQUVSLENBQUMsQ0FBQyxxQkFGTTtNQVJaLENBakJRLEVBOEJSO1FBQ0UsYUFBYSxFQUFFLHVCQURqQjtRQUVFLFNBQVMsRUFBRTtNQUZiLENBOUJRLEVBa0NSO1FBQ0UsU0FBUyxFQUFFLE9BRGI7UUFFRSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUMsbUJBQWpCLEdBQXVDLFNBRmhEO1FBR0UsV0FBVyxFQUFFLENBQUMsQ0FIaEI7UUFJRSxVQUFVLEVBQUUsQ0FBQyxDQUpmO1FBS0UsR0FBRyxFQUFFLE9BTFA7UUFNRSxRQUFRLEVBQUUsQ0FOWjtRQU9FLFFBQVEsRUFBRSxDQUNSO1VBQUUsYUFBYSxFQUFFO1FBQWpCLENBRFEsRUFFUjtVQUNFLEtBQUssRUFBRSxDQUFDLENBQUMsbUJBQUYsR0FBd0IsU0FEakM7VUFFRSxXQUFXLEVBQUUsQ0FBQyxDQUZoQjtVQUdFLFNBQVMsRUFBRSxDQUhiO1VBSUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLHFCQUFIO1FBSlosQ0FGUSxFQVFSO1VBQ0UsU0FBUyxFQUFFLFFBRGI7VUFFRSxLQUFLLEVBQUUsSUFGVDtVQUdFLEdBQUcsRUFBRSxJQUhQO1VBSUUsUUFBUSxFQUFFLENBSlo7VUFLRSxTQUFTLEVBQUUsQ0FMYjtVQU1FLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBSDtRQU5aLENBUlEsRUFnQlIsQ0FBQyxDQUFDLG1CQWhCTSxFQWlCUixDQUFDLENBQUMsb0JBakJNO01BUFosQ0FsQ1EsRUE2RFI7UUFDRSxTQUFTLEVBQUUsVUFEYjtRQUVFLEtBQUssRUFDSCx1S0FDQSxDQUFDLENBQUMsbUJBREYsR0FFQSxTQUxKO1FBTUUsV0FBVyxFQUFFLENBQUMsQ0FOaEI7UUFPRSxHQUFHLEVBQUUsT0FQUDtRQVFFLFVBQVUsRUFBRSxDQUFDLENBUmY7UUFTRSxRQUFRLEVBQUUsQ0FUWjtRQVVFLFFBQVEsRUFBRSxDQUNSO1VBQ0UsS0FBSyxFQUFFLENBQUMsQ0FBQyxtQkFBRixHQUF3QixTQURqQztVQUVFLFdBQVcsRUFBRSxDQUFDLENBRmhCO1VBR0UsU0FBUyxFQUFFLENBSGI7VUFJRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMscUJBQUg7UUFKWixDQURRLEVBT1I7VUFDRSxTQUFTLEVBQUUsUUFEYjtVQUVFLEtBQUssRUFBRSxJQUZUO1VBR0UsR0FBRyxFQUFFLElBSFA7VUFJRSxRQUFRLEVBQUUsQ0FKWjtVQUtFLFNBQVMsRUFBRSxDQUxiO1VBTUUsUUFBUSxFQUFFLENBQ1IsQ0FEUSxFQUVSLENBQUMsQ0FBQyxnQkFGTSxFQUdSLENBQUMsQ0FBQyxpQkFITSxFQUlSLENBSlEsRUFLUixDQUFDLENBQUMsb0JBTE07UUFOWixDQVBRLEVBcUJSLENBQUMsQ0FBQyxtQkFyQk0sRUFzQlIsQ0FBQyxDQUFDLG9CQXRCTTtNQVZaLENBN0RRLEVBZ0dSLENBaEdRLEVBaUdSLENBakdRO0lBTEwsQ0FBUDtFQXlHRCxDQWxIRDtBQW1IRCxDQTlJRCxFQUZGO0FBa0pBLElBQUksQ0FBQyxnQkFBTCxDQUNFLFlBREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsSUFBTSxDQUFDLEdBQUcsMEJBQVY7RUFBQSxJQUNFLENBQUMsR0FBRyxDQUNGLElBREUsRUFFRixJQUZFLEVBR0YsSUFIRSxFQUlGLElBSkUsRUFLRixLQUxFLEVBTUYsT0FORSxFQU9GLFNBUEUsRUFRRixLQVJFLEVBU0YsS0FURSxFQVVGLFVBVkUsRUFXRixJQVhFLEVBWUYsUUFaRSxFQWFGLE1BYkUsRUFjRixNQWRFLEVBZUYsT0FmRSxFQWdCRixPQWhCRSxFQWlCRixZQWpCRSxFQWtCRixNQWxCRSxFQW1CRixPQW5CRSxFQW9CRixNQXBCRSxFQXFCRixTQXJCRSxFQXNCRixLQXRCRSxFQXVCRixRQXZCRSxFQXdCRixVQXhCRSxFQXlCRixRQXpCRSxFQTBCRixRQTFCRSxFQTJCRixLQTNCRSxFQTRCRixPQTVCRSxFQTZCRixPQTdCRSxFQThCRixPQTlCRSxFQStCRixVQS9CRSxFQWdDRixPQWhDRSxFQWlDRixPQWpDRSxFQWtDRixRQWxDRSxFQW1DRixRQW5DRSxFQW9DRixNQXBDRSxFQXFDRixRQXJDRSxFQXNDRixTQXRDRSxDQUROO0VBQUEsSUF5Q0UsQ0FBQyxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsTUFBbEIsRUFBMEIsV0FBMUIsRUFBdUMsS0FBdkMsRUFBOEMsVUFBOUMsQ0F6Q047RUFBQSxJQTBDRSxDQUFDLEdBQUcsR0FBRyxNQUFILENBQ0YsQ0FDRSxhQURGLEVBRUUsWUFGRixFQUdFLGVBSEYsRUFJRSxjQUpGLEVBS0UsU0FMRixFQU1FLFNBTkYsRUFPRSxNQVBGLEVBUUUsVUFSRixFQVNFLE9BVEYsRUFVRSxZQVZGLEVBV0UsVUFYRixFQVlFLFdBWkYsRUFhRSxvQkFiRixFQWNFLFdBZEYsRUFlRSxvQkFmRixFQWdCRSxRQWhCRixFQWlCRSxVQWpCRixDQURFLEVBb0JGLENBQ0UsV0FERixFQUVFLE1BRkYsRUFHRSxPQUhGLEVBSUUsU0FKRixFQUtFLFFBTEYsRUFNRSxVQU5GLEVBT0UsY0FQRixFQVFFLFFBUkYsRUFTRSxRQVRGLENBcEJFLEVBK0JGLENBQ0UsTUFERixFQUVFLFVBRkYsRUFHRSxRQUhGLEVBSUUsTUFKRixFQUtFLE1BTEYsRUFNRSxRQU5GLEVBT0UsUUFQRixFQVFFLFFBUkYsRUFTRSxVQVRGLEVBVUUsU0FWRixFQVdFLE9BWEYsRUFZRSxRQVpGLEVBYUUsS0FiRixFQWNFLEtBZEYsRUFlRSxTQWZGLEVBZ0JFLFNBaEJGLEVBaUJFLE9BakJGLEVBa0JFLFNBbEJGLEVBbUJFLE1BbkJGLEVBb0JFLFNBcEJGLEVBcUJFLGNBckJGLEVBc0JFLFlBdEJGLEVBdUJFLFlBdkJGLEVBd0JFLFdBeEJGLEVBeUJFLGFBekJGLEVBMEJFLGFBMUJGLEVBMkJFLGNBM0JGLEVBNEJFLE9BNUJGLEVBNkJFLFlBN0JGLEVBOEJFLG1CQTlCRixFQStCRSxhQS9CRixFQWdDRSxlQWhDRixFQWlDRSxnQkFqQ0YsRUFrQ0UsUUFsQ0YsQ0EvQkUsRUFtRUYsQ0FDRSxXQURGLEVBRUUsZUFGRixFQUdFLFlBSEYsRUFJRSxnQkFKRixFQUtFLGFBTEYsRUFNRSxXQU5GLEVBT0UsVUFQRixDQW5FRSxDQTFDTjs7RUF1SEEsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFjO0lBQ1osT0FBTyxDQUFDLENBQUMsS0FBRCxFQUFRLENBQVIsRUFBVyxHQUFYLENBQVI7RUFDRDs7RUFDRCxTQUFTLENBQVQsR0FBaUI7SUFBQSxvQ0FBSCxDQUFHO01BQUgsQ0FBRztJQUFBOztJQUNmLE9BQU8sQ0FBQyxDQUNMLEdBREksQ0FDQSxVQUFBLENBQUMsRUFBSTtNQUNSLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBTCxJQUFXLFlBQVksT0FBTyxDQUFuQixHQUF1QixDQUF2QixHQUEyQixDQUFDLENBQUMsTUFBeEMsR0FBa0QsSUFBekQ7TUFDQSxJQUFJLENBQUo7SUFDRCxDQUpJLEVBS0osSUFMSSxDQUtDLEVBTEQsQ0FBUDtFQU1EOztFQUNELE9BQU8sVUFBQSxDQUFDLEVBQUk7SUFDVixJQUFNLENBQUMsR0FBRyxDQUFWO0lBQUEsSUFDRSxDQUFDLEdBQUc7TUFDRixLQUFLLEVBQUUscUJBREw7TUFFRixHQUFHLEVBQUUsMkJBRkg7TUFHRixpQkFBaUIsRUFBRSwyQkFBQyxDQUFELEVBQUksQ0FBSixFQUFVO1FBQzNCLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxNQUFMLEdBQWMsQ0FBQyxDQUFDLEtBQTFCO1FBQUEsSUFDRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxDQUFSLENBRE47UUFFQSxRQUFRLENBQVIsR0FDSSxRQUFRLENBQVIsS0FDRSxVQUFDLENBQUQsVUFBcUI7VUFBQSxJQUFSLENBQVEsVUFBZixLQUFlO1VBQ3JCLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLEtBQUwsQ0FBVyxDQUFYLENBQWpCO1VBQ0EsT0FBTyxDQUFDLENBQUQsS0FBTyxDQUFDLENBQUMsS0FBRixDQUFRLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBZDtRQUNELENBSEEsQ0FHRSxDQUhGLEVBR0s7VUFBRSxLQUFLLEVBQUU7UUFBVCxDQUhMLEtBSUMsQ0FBQyxDQUFDLFdBQUYsRUFMRixDQURKLEdBT0ksQ0FBQyxDQUFDLFdBQUYsRUFQSjtNQVFEO0lBZEMsQ0FETjtJQUFBLElBaUJFLENBQUMsR0FBRztNQUFFLFFBQVEsRUFBRSxDQUFaO01BQWUsT0FBTyxFQUFFLENBQXhCO01BQTJCLE9BQU8sRUFBRSxDQUFwQztNQUF1QyxRQUFRLEVBQUU7SUFBakQsQ0FqQk47SUFBQSxJQWtCRSxDQUFDLEdBQUcsc0JBbEJOO0lBQUEsSUFtQkUsQ0FBQyxHQUFHLHFDQW5CTjtJQUFBLElBb0JFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxRQURUO01BRUYsUUFBUSxFQUFFLENBQ1I7UUFDRSxLQUFLLGlCQUFVLENBQVYsZ0JBQWlCLENBQWpCLHNCQUE4QixDQUE5QjtNQURQLENBRFEsRUFJUjtRQUNFLEtBQUssZ0JBQVMsQ0FBVCxtQkFBbUIsQ0FBbkIseUJBQW1DLENBQW5DO01BRFAsQ0FKUSxFQU9SO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0FQUSxFQVVSO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0FWUSxFQWFSO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0FiUSxFQWdCUjtRQUFFLEtBQUssRUFBRTtNQUFULENBaEJRLEVBaUJSO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0FqQlEsQ0FGUjtNQXVCRixTQUFTLEVBQUU7SUF2QlQsQ0FwQk47SUFBQSxJQTZDRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsT0FEVDtNQUVGLEtBQUssRUFBRSxRQUZMO01BR0YsR0FBRyxFQUFFLEtBSEg7TUFJRixRQUFRLEVBQUUsQ0FKUjtNQUtGLFFBQVEsRUFBRTtJQUxSLENBN0NOO0lBQUEsSUFvREUsQ0FBQyxHQUFHO01BQ0YsS0FBSyxFQUFFLE9BREw7TUFFRixHQUFHLEVBQUUsRUFGSDtNQUdGLE1BQU0sRUFBRTtRQUNOLEdBQUcsRUFBRSxHQURDO1FBRU4sU0FBUyxFQUFFLENBQUMsQ0FGTjtRQUdOLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSCxFQUFxQixDQUFyQixDQUhKO1FBSU4sV0FBVyxFQUFFO01BSlA7SUFITixDQXBETjtJQUFBLElBOERFLENBQUMsR0FBRztNQUNGLEtBQUssRUFBRSxNQURMO01BRUYsR0FBRyxFQUFFLEVBRkg7TUFHRixNQUFNLEVBQUU7UUFDTixHQUFHLEVBQUUsR0FEQztRQUVOLFNBQVMsRUFBRSxDQUFDLENBRk47UUFHTixRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQUgsRUFBcUIsQ0FBckIsQ0FISjtRQUlOLFdBQVcsRUFBRTtNQUpQO0lBSE4sQ0E5RE47SUFBQSxJQXdFRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLEtBQUssRUFBRSxHQUZMO01BR0YsR0FBRyxFQUFFLEdBSEg7TUFJRixRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQUgsRUFBcUIsQ0FBckI7SUFKUixDQXhFTjtJQUFBLElBOEVFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxTQURUO01BRUYsUUFBUSxFQUFFLENBQ1IsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxjQUFWLEVBQTBCLE1BQTFCLEVBQWtDO1FBQ2hDLFNBQVMsRUFBRSxDQURxQjtRQUVoQyxRQUFRLEVBQUUsQ0FDUjtVQUNFLFNBQVMsRUFBRSxRQURiO1VBRUUsS0FBSyxFQUFFLFlBRlQ7VUFHRSxRQUFRLEVBQUUsQ0FDUjtZQUNFLFNBQVMsRUFBRSxNQURiO1lBRUUsS0FBSyxFQUFFLEtBRlQ7WUFHRSxHQUFHLEVBQUUsS0FIUDtZQUlFLFNBQVMsRUFBRTtVQUpiLENBRFEsRUFPUjtZQUNFLFNBQVMsRUFBRSxVQURiO1lBRUUsS0FBSyxFQUFFLENBQUMsR0FBRyxlQUZiO1lBR0UsVUFBVSxFQUFFLENBQUMsQ0FIZjtZQUlFLFNBQVMsRUFBRTtVQUpiLENBUFEsRUFhUjtZQUFFLEtBQUssRUFBRSxhQUFUO1lBQXdCLFNBQVMsRUFBRTtVQUFuQyxDQWJRO1FBSFosQ0FEUTtNQUZzQixDQUFsQyxDQURRLEVBeUJSLENBQUMsQ0FBQyxvQkF6Qk0sRUEwQlIsQ0FBQyxDQUFDLG1CQTFCTTtJQUZSLENBOUVOO0lBQUEsSUE2R0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGdCQUFILEVBQXFCLENBQUMsQ0FBQyxpQkFBdkIsRUFBMEMsQ0FBMUMsRUFBNkMsQ0FBN0MsRUFBZ0QsQ0FBaEQsRUFBbUQsQ0FBbkQsRUFBc0QsQ0FBQyxDQUFDLFdBQXhELENBN0dOO0lBOEdBLENBQUMsQ0FBQyxRQUFGLEdBQWEsQ0FBQyxDQUFDLE1BQUYsQ0FBUztNQUNwQixLQUFLLEVBQUUsSUFEYTtNQUVwQixHQUFHLEVBQUUsSUFGZTtNQUdwQixRQUFRLEVBQUUsQ0FIVTtNQUlwQixRQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUFnQixDQUFoQjtJQUpVLENBQVQsQ0FBYjtJQU1BLElBQU0sQ0FBQyxHQUFHLEdBQUcsTUFBSCxDQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsUUFBZixDQUFWO0lBQUEsSUFDRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUNYO01BQUUsS0FBSyxFQUFFLElBQVQ7TUFBZSxHQUFHLEVBQUUsSUFBcEI7TUFBMEIsUUFBUSxFQUFFLENBQXBDO01BQXVDLFFBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULENBQWdCLENBQWhCO0lBQWpELENBRFcsQ0FBVCxDQUROO0lBQUEsSUFJRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLEtBQUssRUFBRSxJQUZMO01BR0YsR0FBRyxFQUFFLElBSEg7TUFJRixZQUFZLEVBQUUsQ0FBQyxDQUpiO01BS0YsVUFBVSxFQUFFLENBQUMsQ0FMWDtNQU1GLFFBQVEsRUFBRSxDQU5SO01BT0YsUUFBUSxFQUFFO0lBUFIsQ0FKTjtJQWFBLE9BQU87TUFDTCxJQUFJLEVBQUUsWUFERDtNQUVMLE9BQU8sRUFBRSxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsS0FBZCxFQUFxQixLQUFyQixDQUZKO01BR0wsUUFBUSxFQUFFLENBSEw7TUFJTCxPQUFPLEVBQUU7UUFBRSxlQUFlLEVBQUU7TUFBbkIsQ0FKSjtNQUtMLE9BQU8sRUFBRSxjQUxKO01BTUwsUUFBUSxFQUFFLENBQ1IsQ0FBQyxDQUFDLE9BQUYsQ0FBVTtRQUFFLEtBQUssRUFBRSxTQUFUO1FBQW9CLE1BQU0sRUFBRSxNQUE1QjtRQUFvQyxTQUFTLEVBQUU7TUFBL0MsQ0FBVixDQURRLEVBRVI7UUFDRSxLQUFLLEVBQUUsWUFEVDtRQUVFLFNBQVMsRUFBRSxNQUZiO1FBR0UsU0FBUyxFQUFFLEVBSGI7UUFJRSxLQUFLLEVBQUU7TUFKVCxDQUZRLEVBUVIsQ0FBQyxDQUFDLGdCQVJNLEVBU1IsQ0FBQyxDQUFDLGlCQVRNLEVBVVIsQ0FWUSxFQVdSLENBWFEsRUFZUixDQVpRLEVBYVIsQ0FiUSxFQWNSLENBZFEsRUFlUjtRQUNFLEtBQUssRUFBRSxDQUFDLENBQ04sV0FETSxFQUVOLENBQUMsQ0FBQyxDQUFDLENBQUMsNENBQUQsRUFBK0MsQ0FBQyxHQUFHLE9BQW5ELENBQUYsQ0FGSyxDQURWO1FBS0UsU0FBUyxFQUFFLENBTGI7UUFNRSxRQUFRLEVBQUUsQ0FDUjtVQUFFLFNBQVMsRUFBRSxNQUFiO1VBQXFCLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQUQsQ0FBakM7VUFBNEMsU0FBUyxFQUFFO1FBQXZELENBRFE7TUFOWixDQWZRLEVBeUJSO1FBQ0UsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLGNBQVIsR0FBeUIsaUNBRGxDO1FBRUUsUUFBUSxFQUFFLG1CQUZaO1FBR0UsUUFBUSxFQUFFLENBQ1IsQ0FEUSxFQUVSLENBQUMsQ0FBQyxXQUZNLEVBR1I7VUFDRSxTQUFTLEVBQUUsVUFEYjtVQUVFLEtBQUssRUFDSCw2REFDQSxDQUFDLENBQUMsbUJBREYsR0FFQSxTQUxKO1VBTUUsV0FBVyxFQUFFLENBQUMsQ0FOaEI7VUFPRSxHQUFHLEVBQUUsUUFQUDtVQVFFLFFBQVEsRUFBRSxDQUNSO1lBQ0UsU0FBUyxFQUFFLFFBRGI7WUFFRSxRQUFRLEVBQUUsQ0FDUjtjQUNFLEtBQUssRUFBRSxDQUFDLENBQUMsbUJBRFg7Y0FFRSxTQUFTLEVBQUU7WUFGYixDQURRLEVBS1I7Y0FBRSxTQUFTLEVBQUUsSUFBYjtjQUFtQixLQUFLLEVBQUUsU0FBMUI7Y0FBcUMsSUFBSSxFQUFFLENBQUM7WUFBNUMsQ0FMUSxFQU1SO2NBQ0UsS0FBSyxFQUFFLElBRFQ7Y0FFRSxHQUFHLEVBQUUsSUFGUDtjQUdFLFlBQVksRUFBRSxDQUFDLENBSGpCO2NBSUUsVUFBVSxFQUFFLENBQUMsQ0FKZjtjQUtFLFFBQVEsRUFBRSxDQUxaO2NBTUUsUUFBUSxFQUFFO1lBTlosQ0FOUTtVQUZaLENBRFE7UUFSWixDQUhRLEVBZ0NSO1VBQUUsS0FBSyxFQUFFLEdBQVQ7VUFBYyxTQUFTLEVBQUU7UUFBekIsQ0FoQ1EsRUFpQ1I7VUFBRSxTQUFTLEVBQUUsRUFBYjtVQUFpQixLQUFLLEVBQUUsSUFBeEI7VUFBOEIsR0FBRyxFQUFFLEtBQW5DO1VBQTBDLElBQUksRUFBRSxDQUFDO1FBQWpELENBakNRLEVBa0NSO1VBQ0UsUUFBUSxFQUFFLENBQ1I7WUFBRSxLQUFLLEVBQUUsSUFBVDtZQUFlLEdBQUcsRUFBRTtVQUFwQixDQURRLEVBRVI7WUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBRFg7WUFFRSxZQUFZLENBQUMsQ0FBQyxpQkFGaEI7WUFHRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1VBSFQsQ0FGUSxDQURaO1VBU0UsV0FBVyxFQUFFLEtBVGY7VUFVRSxRQUFRLEVBQUUsQ0FDUjtZQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBWDtZQUFrQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQXpCO1lBQThCLElBQUksRUFBRSxDQUFDLENBQXJDO1lBQXdDLFFBQVEsRUFBRSxDQUFDLE1BQUQ7VUFBbEQsQ0FEUTtRQVZaLENBbENRLENBSFo7UUFvREUsU0FBUyxFQUFFO01BcERiLENBekJRLEVBK0VSO1FBQ0UsU0FBUyxFQUFFLFVBRGI7UUFFRSxhQUFhLEVBQUUsVUFGakI7UUFHRSxHQUFHLEVBQUUsTUFIUDtRQUlFLFVBQVUsRUFBRSxDQUFDLENBSmY7UUFLRSxRQUFRLEVBQUUsQ0FMWjtRQU1FLFFBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxDQUFDLENBQUMsT0FBRixDQUFVLENBQUMsQ0FBQyxVQUFaLEVBQXdCO1VBQUUsS0FBSyxFQUFFO1FBQVQsQ0FBeEIsQ0FBVCxFQUFnRCxDQUFoRCxDQU5aO1FBT0UsT0FBTyxFQUFFO01BUFgsQ0EvRVEsRUF3RlI7UUFDRSxhQUFhLEVBQUU7TUFEakIsQ0F4RlEsRUEyRlI7UUFDRSxTQUFTLEVBQUUsVUFEYjtRQUVFLEtBQUssRUFDSCxDQUFDLENBQUMsbUJBQUYsR0FDQSwrREFKSjtRQUtFLFdBQVcsRUFBRSxDQUFDLENBTGhCO1FBTUUsUUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLFVBQVosRUFBd0I7VUFBRSxLQUFLLEVBQUU7UUFBVCxDQUF4QixDQUFKO01BTlosQ0EzRlEsRUFtR1I7UUFDRSxRQUFRLEVBQUUsQ0FDUjtVQUNFLEtBQUssRUFBRSxRQUFRO1FBRGpCLENBRFEsRUFJUjtVQUFFLEtBQUssRUFBRSxRQUFRO1FBQWpCLENBSlEsQ0FEWjtRQU9FLFNBQVMsRUFBRTtNQVBiLENBbkdRLEVBNEdSO1FBQ0UsU0FBUyxFQUFFLE9BRGI7UUFFRSxhQUFhLEVBQUUsT0FGakI7UUFHRSxHQUFHLEVBQUUsT0FIUDtRQUlFLFVBQVUsRUFBRSxDQUFDLENBSmY7UUFLRSxPQUFPLEVBQUUsU0FMWDtRQU1FLFFBQVEsRUFBRSxDQUNSO1VBQ0UsYUFBYSxFQUFFO1FBRGpCLENBRFEsRUFJUixDQUFDLENBQUMscUJBSk07TUFOWixDQTVHUSxFQXlIUjtRQUNFLEtBQUssRUFBRSxtQkFEVDtRQUVFLEdBQUcsRUFBRSxNQUZQO1FBR0UsVUFBVSxFQUFFLENBQUMsQ0FIZjtRQUlFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLFVBQVosRUFBd0I7VUFBRSxLQUFLLEVBQUU7UUFBVCxDQUF4QixDQUFELEVBQXdDLE1BQXhDLEVBQWdELENBQWhEO01BSlosQ0F6SFEsRUErSFI7UUFDRSxLQUFLLEVBQUUscUJBQXFCLENBQXJCLEdBQXlCLE1BRGxDO1FBRUUsR0FBRyxFQUFFLElBRlA7UUFHRSxRQUFRLEVBQUUsU0FIWjtRQUlFLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLFVBQVosRUFBd0I7VUFBRSxLQUFLLEVBQUU7UUFBVCxDQUF4QixDQURRLEVBRVI7VUFBRSxLQUFLLEVBQUU7UUFBVCxDQUZRLEVBR1IsQ0FIUTtNQUpaLENBL0hRLEVBeUlSO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0F6SVE7SUFOTCxDQUFQO0VBa0pELENBcFJEO0FBcVJELENBelpELEVBRkY7QUE2WkEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsTUFERixFQUVHLFlBQU07RUFDTDs7RUFDQSxPQUFPLFVBQUEsQ0FBQyxFQUFJO0lBQ1YsSUFBTSxDQUFDLEdBQUc7TUFDTixPQUFPLEVBQUU7SUFESCxDQUFWO0lBQUEsSUFHRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsbUJBQUgsRUFBd0IsQ0FBQyxDQUFDLG9CQUExQixDQUhOO0lBQUEsSUFJRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUJBQUgsRUFBc0IsQ0FBQyxDQUFDLGFBQXhCLENBSk47SUFBQSxJQUtFLENBQUMsR0FBRztNQUNGLEdBQUcsRUFBRSxHQURIO01BRUYsY0FBYyxFQUFFLENBQUMsQ0FGZjtNQUdGLFVBQVUsRUFBRSxDQUFDLENBSFg7TUFJRixRQUFRLEVBQUUsQ0FKUjtNQUtGLFFBQVEsRUFBRTtJQUxSLENBTE47SUFBQSxJQVlFLENBQUMsR0FBRztNQUNGLEtBQUssRUFBRSxJQURMO01BRUYsR0FBRyxFQUFFLElBRkg7TUFHRixRQUFRLEVBQUUsQ0FDUjtRQUNFLFNBQVMsRUFBRSxNQURiO1FBRUUsS0FBSyxFQUFFLEdBRlQ7UUFHRSxHQUFHLEVBQUUsR0FIUDtRQUlFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSCxDQUpaO1FBS0UsT0FBTyxFQUFFO01BTFgsQ0FEUSxFQVFSLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBVixFQUFhO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0FBYixDQVJRLEVBU1IsTUFUUSxDQVNELENBVEMsQ0FIUjtNQWFGLE9BQU8sRUFBRTtJQWJQLENBWk47SUFBQSxJQTJCRSxDQUFDLEdBQUc7TUFDRixLQUFLLEVBQUUsS0FETDtNQUVGLEdBQUcsRUFBRSxLQUZIO01BR0YsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFWLENBQUQsQ0FIUjtNQUlGLE9BQU8sRUFBRTtJQUpQLENBM0JOO0lBaUNBLE9BQ0UsQ0FBQyxDQUFDLElBQUYsQ0FBTyxDQUFQLEVBQVUsQ0FBVixHQUNBLENBQUMsQ0FBQyxPQUFGLENBQVUsVUFBQSxDQUFDLEVBQUk7TUFDYixDQUFDLENBQUMsSUFBRixDQUFPLENBQVA7SUFDRCxDQUZELENBREEsRUFJQTtNQUFFLElBQUksRUFBRSxNQUFSO01BQWdCLFFBQVEsRUFBRSxDQUExQjtNQUE2QixRQUFRLEVBQUUsQ0FBdkM7TUFBMEMsT0FBTyxFQUFFO0lBQW5ELENBTEY7RUFPRCxDQXpDRDtBQTBDRCxDQTVDRCxFQUZGO0FBZ0RBLElBQUksQ0FBQyxnQkFBTCxDQUNFLFFBREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsSUFBSSxDQUFDLEdBQUcsc0JBQVI7RUFBQSxJQUNFLENBQUMsR0FBRyw2QkFETjtFQUFBLElBRUUsQ0FBQyxHQUFHO0lBQ0YsU0FBUyxFQUFFLFFBRFQ7SUFFRixRQUFRLEVBQUUsQ0FDUjtNQUNFLEtBQUssbUNBQTRCLENBQTVCLHNCQUF5QyxDQUF6QztJQURQLENBRFEsRUFJUjtNQUFFLEtBQUssa0NBQTJCLENBQTNCO0lBQVAsQ0FKUSxFQUtSO01BQ0UsS0FBSyxhQUFNLENBQU47SUFEUCxDQUxRLEVBUVI7TUFBRSxLQUFLLEVBQUU7SUFBVCxDQVJRLEVBU1I7TUFDRSxLQUFLLHNCQUFlLENBQWYsb0JBQTBCLENBQTFCLG1CQUFvQyxDQUFwQztJQURQLENBVFEsRUFZUjtNQUFFLEtBQUssRUFBRTtJQUFULENBWlEsRUFhUjtNQUFFLEtBQUsscUJBQWMsQ0FBZDtJQUFQLENBYlEsRUFjUjtNQUNFLEtBQUssRUFBRTtJQURULENBZFEsRUFpQlI7TUFBRSxLQUFLLEVBQUU7SUFBVCxDQWpCUSxDQUZSO0lBcUJGLFNBQVMsRUFBRTtFQXJCVCxDQUZOO0VBeUJBLE9BQU8sVUFBQSxDQUFDLEVBQUk7SUFDVixJQUFNLENBQUMsR0FBRztNQUNOLE9BQU8sRUFDTCx1WUFGSTtNQUdOLFFBQVEsRUFDTixpRUFKSTtNQUtOLE9BQU8sRUFBRTtJQUxILENBQVY7SUFBQSxJQU9FLENBQUMsR0FBRztNQUFFLFNBQVMsRUFBRSxRQUFiO01BQXVCLEtBQUssRUFBRSxDQUFDLENBQUMsbUJBQUYsR0FBd0I7SUFBdEQsQ0FQTjtJQUFBLElBUUUsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLE9BRFQ7TUFFRixLQUFLLEVBQUUsTUFGTDtNQUdGLEdBQUcsRUFBRSxJQUhIO01BSUYsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQUg7SUFKUixDQVJOO0lBQUEsSUFjRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsVUFEVDtNQUVGLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUZmLENBZE47SUFBQSxJQWtCRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLFFBQVEsRUFBRSxDQUNSO1FBQUUsS0FBSyxFQUFFLEtBQVQ7UUFBZ0IsR0FBRyxFQUFFLGFBQXJCO1FBQW9DLFFBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO01BQTlDLENBRFEsRUFFUjtRQUNFLEtBQUssRUFBRSxHQURUO1FBRUUsR0FBRyxFQUFFLEdBRlA7UUFHRSxPQUFPLEVBQUUsSUFIWDtRQUlFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSDtNQUpaLENBRlEsRUFRUjtRQUNFLEtBQUssRUFBRSxHQURUO1FBRUUsR0FBRyxFQUFFLEdBRlA7UUFHRSxPQUFPLEVBQUUsSUFIWDtRQUlFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSCxFQUFxQixDQUFyQixFQUF3QixDQUF4QjtNQUpaLENBUlE7SUFGUixDQWxCTjtJQW9DQSxDQUFDLENBQUMsUUFBRixDQUFXLElBQVgsQ0FBZ0IsQ0FBaEI7SUFDQSxJQUFNLENBQUMsR0FBRztNQUNOLFNBQVMsRUFBRSxNQURMO01BRU4sS0FBSyxFQUNILGtGQUNBLENBQUMsQ0FBQyxtQkFERixHQUVBO0lBTEksQ0FBVjtJQUFBLElBT0UsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLE1BRFQ7TUFFRixLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsbUJBRmI7TUFHRixRQUFRLEVBQUUsQ0FDUjtRQUNFLEtBQUssRUFBRSxJQURUO1FBRUUsR0FBRyxFQUFFLElBRlA7UUFHRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBRixDQUFVLENBQVYsRUFBYTtVQUFFLFNBQVMsRUFBRTtRQUFiLENBQWIsQ0FBRDtNQUhaLENBRFE7SUFIUixDQVBOO0lBQUEsSUFrQkUsQ0FBQyxHQUFHLENBbEJOO0lBQUEsSUFtQkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsTUFBVixFQUFrQixNQUFsQixFQUEwQjtNQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBSDtJQUFaLENBQTFCLENBbkJOO0lBQUEsSUFvQkUsQ0FBQyxHQUFHO01BQ0YsUUFBUSxFQUFFLENBQ1I7UUFBRSxTQUFTLEVBQUUsTUFBYjtRQUFxQixLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQTlCLENBRFEsRUFFUjtRQUFFLEtBQUssRUFBRSxJQUFUO1FBQWUsR0FBRyxFQUFFLElBQXBCO1FBQTBCLFFBQVEsRUFBRTtNQUFwQyxDQUZRO0lBRFIsQ0FwQk47SUFBQSxJQTBCRSxDQUFDLEdBQUcsQ0ExQk47SUEyQkEsT0FDRyxDQUFDLENBQUMsUUFBRixDQUFXLENBQVgsRUFBYyxRQUFkLEdBQXlCLENBQUMsQ0FBRCxDQUExQixFQUNDLENBQUMsQ0FBQyxRQUFGLENBQVcsQ0FBWCxFQUFjLFFBQWQsR0FBeUIsQ0FBQyxDQUFELENBRDFCLEVBRUE7TUFDRSxJQUFJLEVBQUUsUUFEUjtNQUVFLE9BQU8sRUFBRSxDQUFDLElBQUQsRUFBTyxLQUFQLENBRlg7TUFHRSxRQUFRLEVBQUUsQ0FIWjtNQUlFLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxPQUFGLENBQVUsU0FBVixFQUFxQixNQUFyQixFQUE2QjtRQUMzQixTQUFTLEVBQUUsQ0FEZ0I7UUFFM0IsUUFBUSxFQUFFLENBQUM7VUFBRSxTQUFTLEVBQUUsUUFBYjtVQUF1QixLQUFLLEVBQUU7UUFBOUIsQ0FBRDtNQUZpQixDQUE3QixDQURRLEVBS1IsQ0FBQyxDQUFDLG1CQUxNLEVBTVIsQ0FOUSxFQU9SO1FBQ0UsU0FBUyxFQUFFLFNBRGI7UUFFRSxLQUFLLEVBQUUsa0NBRlQ7UUFHRSxNQUFNLEVBQUU7VUFBRSxRQUFRLEVBQUUsQ0FBQztZQUFFLFNBQVMsRUFBRSxRQUFiO1lBQXVCLEtBQUssRUFBRTtVQUE5QixDQUFEO1FBQVo7TUFIVixDQVBRLEVBWVIsQ0FaUSxFQWFSLENBYlEsRUFjUixDQWRRLEVBZVI7UUFDRSxTQUFTLEVBQUUsVUFEYjtRQUVFLGFBQWEsRUFBRSxLQUZqQjtRQUdFLEdBQUcsRUFBRSxPQUhQO1FBSUUsV0FBVyxFQUFFLENBQUMsQ0FKaEI7UUFLRSxVQUFVLEVBQUUsQ0FBQyxDQUxmO1FBTUUsUUFBUSxFQUFFLENBTlo7UUFPRSxTQUFTLEVBQUUsQ0FQYjtRQVFFLFFBQVEsRUFBRSxDQUNSO1VBQ0UsS0FBSyxFQUFFLENBQUMsQ0FBQyxtQkFBRixHQUF3QixTQURqQztVQUVFLFdBQVcsRUFBRSxDQUFDLENBRmhCO1VBR0UsU0FBUyxFQUFFLENBSGI7VUFJRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMscUJBQUg7UUFKWixDQURRLEVBT1I7VUFDRSxTQUFTLEVBQUUsTUFEYjtVQUVFLEtBQUssRUFBRSxHQUZUO1VBR0UsR0FBRyxFQUFFLEdBSFA7VUFJRSxRQUFRLEVBQUUsU0FKWjtVQUtFLFNBQVMsRUFBRTtRQUxiLENBUFEsRUFjUjtVQUNFLFNBQVMsRUFBRSxRQURiO1VBRUUsS0FBSyxFQUFFLElBRlQ7VUFHRSxHQUFHLEVBQUUsSUFIUDtVQUlFLFVBQVUsRUFBRSxDQUFDLENBSmY7VUFLRSxRQUFRLEVBQUUsQ0FMWjtVQU1FLFNBQVMsRUFBRSxDQU5iO1VBT0UsUUFBUSxFQUFFLENBQ1I7WUFDRSxLQUFLLEVBQUUsR0FEVDtZQUVFLEdBQUcsRUFBRSxRQUZQO1lBR0UsY0FBYyxFQUFFLENBQUMsQ0FIbkI7WUFJRSxRQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFDLG1CQUFOLEVBQTJCLENBQTNCLENBSlo7WUFLRSxTQUFTLEVBQUU7VUFMYixDQURRLEVBUVIsQ0FBQyxDQUFDLG1CQVJNLEVBU1IsQ0FUUSxFQVVSLENBVlEsRUFXUixDQVhRLEVBWVIsQ0FaUSxFQWFSLENBQUMsQ0FBQyxhQWJNO1FBUFosQ0FkUSxFQXFDUixDQXJDUTtNQVJaLENBZlEsRUErRFI7UUFDRSxTQUFTLEVBQUUsT0FEYjtRQUVFLGFBQWEsRUFBRSx1QkFGakI7UUFHRSxHQUFHLEVBQUUsVUFIUDtRQUlFLFVBQVUsRUFBRSxDQUFDLENBSmY7UUFLRSxPQUFPLEVBQUUsb0JBTFg7UUFNRSxRQUFRLEVBQUUsQ0FDUjtVQUNFLGFBQWEsRUFDWDtRQUZKLENBRFEsRUFLUixDQUFDLENBQUMscUJBTE0sRUFNUjtVQUNFLFNBQVMsRUFBRSxNQURiO1VBRUUsS0FBSyxFQUFFLEdBRlQ7VUFHRSxHQUFHLEVBQUUsR0FIUDtVQUlFLFlBQVksRUFBRSxDQUFDLENBSmpCO1VBS0UsVUFBVSxFQUFFLENBQUMsQ0FMZjtVQU1FLFNBQVMsRUFBRTtRQU5iLENBTlEsRUFjUjtVQUNFLFNBQVMsRUFBRSxNQURiO1VBRUUsS0FBSyxFQUFFLFNBRlQ7VUFHRSxHQUFHLEVBQUUsVUFIUDtVQUlFLFlBQVksRUFBRSxDQUFDLENBSmpCO1VBS0UsU0FBUyxFQUFFLENBQUM7UUFMZCxDQWRRLEVBcUJSLENBckJRLEVBc0JSLENBdEJRO01BTlosQ0EvRFEsRUE4RlIsQ0E5RlEsRUErRlI7UUFDRSxTQUFTLEVBQUUsTUFEYjtRQUVFLEtBQUssRUFBRSxpQkFGVDtRQUdFLEdBQUcsRUFBRSxHQUhQO1FBSUUsT0FBTyxFQUFFO01BSlgsQ0EvRlEsRUFxR1IsQ0FyR1E7SUFKWixDQUhGO0VBZ0hELENBakxEO0FBa0xELENBN01ELEVBRkY7QUFpTkEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsTUFERixFQUVHLFlBQU07RUFDTDs7RUFDQSxJQUFNLENBQUMsR0FBRyxDQUNOLEdBRE0sRUFFTixNQUZNLEVBR04sU0FITSxFQUlOLFNBSk0sRUFLTixPQUxNLEVBTU4sT0FOTSxFQU9OLEdBUE0sRUFRTixZQVJNLEVBU04sTUFUTSxFQVVOLFFBVk0sRUFXTixRQVhNLEVBWU4sU0FaTSxFQWFOLE1BYk0sRUFjTixNQWRNLEVBZU4sSUFmTSxFQWdCTixLQWhCTSxFQWlCTixTQWpCTSxFQWtCTixLQWxCTSxFQW1CTixLQW5CTSxFQW9CTixJQXBCTSxFQXFCTixJQXJCTSxFQXNCTixJQXRCTSxFQXVCTixVQXZCTSxFQXdCTixZQXhCTSxFQXlCTixRQXpCTSxFQTBCTixRQTFCTSxFQTJCTixNQTNCTSxFQTRCTixJQTVCTSxFQTZCTixJQTdCTSxFQThCTixJQTlCTSxFQStCTixJQS9CTSxFQWdDTixJQWhDTSxFQWlDTixJQWpDTSxFQWtDTixRQWxDTSxFQW1DTixRQW5DTSxFQW9DTixNQXBDTSxFQXFDTixHQXJDTSxFQXNDTixRQXRDTSxFQXVDTixLQXZDTSxFQXdDTixPQXhDTSxFQXlDTixLQXpDTSxFQTBDTixLQTFDTSxFQTJDTixPQTNDTSxFQTRDTixRQTVDTSxFQTZDTixJQTdDTSxFQThDTixNQTlDTSxFQStDTixNQS9DTSxFQWdETixNQWhETSxFQWlETixLQWpETSxFQWtETixRQWxETSxFQW1ETixJQW5ETSxFQW9ETixHQXBETSxFQXFETixHQXJETSxFQXNETixPQXRETSxFQXVETixNQXZETSxFQXdETixTQXhETSxFQXlETixNQXpETSxFQTBETixRQTFETSxFQTJETixTQTNETSxFQTRETixLQTVETSxFQTZETixPQTdETSxFQThETixPQTlETSxFQStETixJQS9ETSxFQWdFTixVQWhFTSxFQWlFTixPQWpFTSxFQWtFTixJQWxFTSxFQW1FTixPQW5FTSxFQW9FTixNQXBFTSxFQXFFTixJQXJFTSxFQXNFTixJQXRFTSxFQXVFTixLQXZFTSxFQXdFTixPQXhFTSxDQUFWO0VBQUEsSUEwRUUsQ0FBQyxHQUFHLENBQ0YsV0FERSxFQUVGLGFBRkUsRUFHRixjQUhFLEVBSUYsT0FKRSxFQUtGLGFBTEUsRUFNRixhQU5FLEVBT0YscUJBUEUsRUFRRixlQVJFLEVBU0YsY0FURSxFQVVGLGNBVkUsRUFXRixlQVhFLEVBWUYsTUFaRSxFQWFGLFFBYkUsRUFjRixPQWRFLEVBZUYsaUJBZkUsRUFnQkYsWUFoQkUsRUFpQkYsYUFqQkUsRUFrQkYsZ0JBbEJFLEVBbUJGLGlCQW5CRSxFQW9CRixTQXBCRSxFQXFCRixzQkFyQkUsRUFzQkYsa0JBdEJFLEVBdUJGLHdCQXZCRSxFQXdCRiw4QkF4QkUsRUF5QkYsWUF6QkUsRUEwQkYsTUExQkUsRUEyQkYsV0EzQkUsRUE0QkYsUUE1QkUsRUE2QkYsT0E3QkUsRUE4QkYsV0E5QkUsRUErQkYsV0EvQkUsRUFnQ0YsWUFoQ0UsRUFpQ0YsWUFqQ0UsQ0ExRU47RUFBQSxJQTZHRSxDQUFDLEdBQUcsQ0FDRixRQURFLEVBRUYsVUFGRSxFQUdGLE9BSEUsRUFJRixTQUpFLEVBS0YsU0FMRSxFQU1GLFNBTkUsRUFPRixTQVBFLEVBUUYsS0FSRSxFQVNGLFVBVEUsRUFVRixNQVZFLEVBV0YsT0FYRSxFQVlGLFNBWkUsRUFhRixPQWJFLEVBY0YsYUFkRSxFQWVGLGVBZkUsRUFnQkYsWUFoQkUsRUFpQkYsUUFqQkUsRUFrQkYsT0FsQkUsRUFtQkYsZUFuQkUsRUFvQkYsY0FwQkUsRUFxQkYsS0FyQkUsRUFzQkYsTUF0QkUsRUF1QkYsY0F2QkUsRUF3QkYsT0F4QkUsRUF5QkYsZUF6QkUsRUEwQkYsVUExQkUsRUEyQkYsU0EzQkUsRUE0QkYsSUE1QkUsRUE2QkYsTUE3QkUsRUE4QkYsWUE5QkUsRUErQkYsY0EvQkUsRUFnQ0YsTUFoQ0UsRUFpQ0YsTUFqQ0UsRUFrQ0YsWUFsQ0UsRUFtQ0YsS0FuQ0UsRUFvQ0YsV0FwQ0UsRUFxQ0YsU0FyQ0UsRUFzQ0YsZ0JBdENFLEVBdUNGLGNBdkNFLEVBd0NGLGtCQXhDRSxFQXlDRixhQXpDRSxFQTBDRixZQTFDRSxFQTJDRixjQTNDRSxFQTRDRixVQTVDRSxFQTZDRixjQTdDRSxFQThDRixNQTlDRSxFQStDRixtQkEvQ0UsRUFnREYsV0FoREUsRUFpREYsWUFqREUsRUFrREYsVUFsREUsRUFtREYsT0FuREUsRUFvREYsTUFwREUsRUFxREYsT0FyREUsRUFzREYsUUF0REUsRUF1REYsZUF2REUsRUF3REYsY0F4REUsRUF5REYsT0F6REUsRUEwREYsU0ExREUsRUEyREYsT0EzREUsQ0E3R047RUFBQSxJQTBLRSxDQUFDLEdBQUcsQ0FDRixPQURFLEVBRUYsVUFGRSxFQUdGLFFBSEUsRUFJRixLQUpFLEVBS0YsWUFMRSxFQU1GLGNBTkUsRUFPRixZQVBFLEVBUUYsZUFSRSxFQVNGLFFBVEUsRUFVRixNQVZFLEVBV0YsYUFYRSxFQVlGLFdBWkUsRUFhRixTQWJFLEVBY0YsZ0JBZEUsQ0ExS047RUFBQSxJQTBMRSxDQUFDLEdBQUcsQ0FDRixlQURFLEVBRUYsYUFGRSxFQUdGLFlBSEUsRUFJRixXQUpFLEVBS0YsaUJBTEUsRUFNRixxQkFORSxFQU9GLG9CQVBFLEVBUUYscUJBUkUsRUFTRiwyQkFURSxFQVVGLGdCQVZFLEVBV0Ysc0JBWEUsRUFZRiwyQkFaRSxFQWFGLE1BYkUsRUFjRixxQkFkRSxFQWVGLFlBZkUsRUFnQkYsdUJBaEJFLEVBaUJGLGlCQWpCRSxFQWtCRixrQkFsQkUsRUFtQkYsa0JBbkJFLEVBb0JGLG1CQXBCRSxFQXFCRixxQkFyQkUsRUFzQkYsbUJBdEJFLEVBdUJGLGlCQXZCRSxFQXdCRixRQXhCRSxFQXlCRixlQXpCRSxFQTBCRixxQkExQkUsRUEyQkYsMkJBM0JFLEVBNEJGLDRCQTVCRSxFQTZCRixxQkE3QkUsRUE4QkYscUJBOUJFLEVBK0JGLGlCQS9CRSxFQWdDRixjQWhDRSxFQWlDRixjQWpDRSxFQWtDRixxQkFsQ0UsRUFtQ0YscUJBbkNFLEVBb0NGLG9CQXBDRSxFQXFDRixxQkFyQ0UsRUFzQ0Ysb0JBdENFLEVBdUNGLGFBdkNFLEVBd0NGLG1CQXhDRSxFQXlDRixtQkF6Q0UsRUEwQ0YsbUJBMUNFLEVBMkNGLGVBM0NFLEVBNENGLGNBNUNFLEVBNkNGLG9CQTdDRSxFQThDRixvQkE5Q0UsRUErQ0Ysb0JBL0NFLEVBZ0RGLGdCQWhERSxFQWlERixjQWpERSxFQWtERixZQWxERSxFQW1ERixrQkFuREUsRUFvREYsd0JBcERFLEVBcURGLHlCQXJERSxFQXNERixrQkF0REUsRUF1REYsa0JBdkRFLEVBd0RGLGNBeERFLEVBeURGLFFBekRFLEVBMERGLHNCQTFERSxFQTJERixZQTNERSxFQTRERixZQTVERSxFQTZERixhQTdERSxFQThERixjQTlERSxFQStERixjQS9ERSxFQWdFRixjQWhFRSxFQWlFRixPQWpFRSxFQWtFRixNQWxFRSxFQW1FRixXQW5FRSxFQW9FRixPQXBFRSxFQXFFRixjQXJFRSxFQXNFRixhQXRFRSxFQXVFRixZQXZFRSxFQXdFRixhQXhFRSxFQXlFRixtQkF6RUUsRUEwRUYsbUJBMUVFLEVBMkVGLG1CQTNFRSxFQTRFRixhQTVFRSxFQTZFRixjQTdFRSxFQThFRixTQTlFRSxFQStFRixTQS9FRSxFQWdGRixtQkFoRkUsRUFpRkYsZUFqRkUsRUFrRkYsUUFsRkUsRUFtRkYsV0FuRkUsRUFvRkYsU0FwRkUsRUFxRkYsYUFyRkUsRUFzRkYsUUF0RkUsRUF1RkYsTUF2RkUsRUF3RkYsWUF4RkUsRUF5RkYsZ0JBekZFLEVBMEZGLFdBMUZFLEVBMkZGLFdBM0ZFLEVBNEZGLGFBNUZFLEVBNkZGLFdBN0ZFLEVBOEZGLE9BOUZFLEVBK0ZGLE1BL0ZFLEVBZ0dGLGNBaEdFLEVBaUdGLGFBakdFLEVBa0dGLHVCQWxHRSxFQW1HRixjQW5HRSxFQW9HRix3QkFwR0UsRUFxR0YsV0FyR0UsRUFzR0Ysa0JBdEdFLEVBdUdGLGdCQXZHRSxFQXdHRixjQXhHRSxFQXlHRixZQXpHRSxFQTBHRixjQTFHRSxFQTJHRix3QkEzR0UsRUE0R0YseUJBNUdFLEVBNkdGLGFBN0dFLEVBOEdGLFFBOUdFLEVBK0dGLFNBL0dFLEVBZ0hGLE1BaEhFLEVBaUhGLG1CQWpIRSxFQWtIRixpQkFsSEUsRUFtSEYsa0JBbkhFLEVBb0hGLFVBcEhFLEVBcUhGLFNBckhFLEVBc0hGLFNBdEhFLEVBdUhGLGlCQXZIRSxFQXdIRixNQXhIRSxFQXlIRixnQkF6SEUsRUEwSEYsYUExSEUsRUEySEYsWUEzSEUsRUE0SEYsa0JBNUhFLEVBNkhGLHFCQTdIRSxFQThIRixpQkE5SEUsRUErSEYsUUEvSEUsRUFnSUYsZUFoSUUsRUFpSUYsYUFqSUUsRUFrSUYsY0FsSUUsRUFtSUYsWUFuSUUsRUFvSUYsT0FwSUUsRUFxSUYsTUFySUUsRUFzSUYsWUF0SUUsRUF1SUYsV0F2SUUsRUF3SUYsWUF4SUUsRUF5SUYsV0F6SUUsRUEwSUYsVUExSUUsRUEySUYsV0EzSUUsRUE0SUYsVUE1SUUsRUE2SUYsV0E3SUUsRUE4SUYsUUE5SUUsRUErSUYsTUEvSUUsRUFnSkYsUUFoSkUsRUFpSkYsWUFqSkUsRUFrSkYsaUJBbEpFLEVBbUpGLFNBbkpFLEVBb0pGLE9BcEpFLEVBcUpGLFNBckpFLEVBc0pGLFNBdEpFLEVBdUpGLGVBdkpFLEVBd0pGLGdCQXhKRSxFQXlKRixlQXpKRSxFQTBKRixlQTFKRSxFQTJKRixVQTNKRSxFQTRKRixlQTVKRSxFQTZKRixZQTdKRSxFQThKRixZQTlKRSxFQStKRixTQS9KRSxFQWdLRixnQkFoS0UsRUFpS0YsY0FqS0UsRUFrS0YsZUFsS0UsRUFtS0YsYUFuS0UsRUFvS0Ysa0JBcEtFLEVBcUtGLG1CQXJLRSxFQXNLRixtQkF0S0UsRUF1S0YsYUF2S0UsRUF3S0Ysb0JBeEtFLEVBeUtGLGdCQXpLRSxFQTBLRixVQTFLRSxFQTJLRixRQTNLRSxFQTRLRixRQTVLRSxFQTZLRixPQTdLRSxFQThLRixLQTlLRSxFQStLRixVQS9LRSxFQWdMRixjQWhMRSxFQWlMRixZQWpMRSxFQWtMRixpQkFsTEUsRUFtTEYsaUJBbkxFLEVBb0xGLHVCQXBMRSxFQXFMRixzQkFyTEUsRUFzTEYsdUJBdExFLEVBdUxGLGFBdkxFLEVBd0xGLGVBeExFLEVBeUxGLGdCQXpMRSxFQTBMRixhQTFMRSxFQTJMRixnQkEzTEUsRUE0TEYseUJBNUxFLEVBNkxGLEtBN0xFLEVBOExGLFdBOUxFLEVBK0xGLGtCQS9MRSxFQWdNRixpQkFoTUUsRUFpTUYsWUFqTUUsRUFrTUYsa0JBbE1FLEVBbU1GLHFCQW5NRSxFQW9NRixxQkFwTUUsRUFxTUYsNEJBck1FLEVBc01GLGNBdE1FLEVBdU1GLGdCQXZNRSxFQXdNRixZQXhNRSxFQXlNRixhQXpNRSxFQTBNRixRQTFNRSxFQTJNRixPQTNNRSxFQTRNRixZQTVNRSxFQTZNRixjQTdNRSxFQThNRixXQTlNRSxFQStNRixTQS9NRSxFQWdORixPQWhORSxFQTFMTjtFQUFBLElBMllFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBRixDQUFTLENBQVQsQ0EzWU47RUE0WUEsT0FBTyxVQUFBLENBQUMsRUFBSTtJQUNWLElBQU0sQ0FBQyxHQUFJLFVBQUEsQ0FBQztNQUFBLE9BQUs7UUFDYixTQUFTLEVBQUU7VUFBRSxTQUFTLEVBQUUsTUFBYjtVQUFxQixLQUFLLEVBQUU7UUFBNUIsQ0FERTtRQUViLFFBQVEsRUFBRTtVQUNSLFNBQVMsRUFBRSxRQURIO1VBRVIsS0FBSyxFQUFFO1FBRkMsQ0FGRztRQU1iLHVCQUF1QixFQUFFO1VBQ3ZCLFNBQVMsRUFBRSxlQURZO1VBRXZCLEtBQUssRUFBRSxJQUZnQjtVQUd2QixHQUFHLEVBQUUsSUFIa0I7VUFJdkIsT0FBTyxFQUFFLEdBSmM7VUFLdkIsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFILEVBQXFCLENBQUMsQ0FBQyxpQkFBdkI7UUFMYTtNQU5aLENBQUw7SUFBQSxDQUFGLENBYUosQ0FiSSxDQUFWO0lBQUEsSUFjRSxDQUFDLEdBQUcsQ0FkTjtJQUFBLElBZUUsQ0FBQyxHQUFHLDBCQWZOO0lBQUEsSUFnQkUsQ0FBQyxHQUFHLEVBaEJOO0lBQUEsSUFpQkUsQ0FBQyxHQUFHLEVBakJOO0lBQUEsSUFrQkUsQ0FBQyxHQUFHLFNBQUosQ0FBSSxDQUFBLENBQUM7TUFBQSxPQUFLO1FBQUUsU0FBUyxFQUFFLFFBQWI7UUFBdUIsS0FBSyxFQUFFLE9BQU8sQ0FBUCxHQUFXLEtBQVgsR0FBbUI7TUFBakQsQ0FBTDtJQUFBLENBbEJQO0lBQUEsSUFtQkUsQ0FBQyxHQUFHLFNBQUosQ0FBSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtNQUFBLE9BQWM7UUFBRSxTQUFTLEVBQUUsQ0FBYjtRQUFnQixLQUFLLEVBQUUsQ0FBdkI7UUFBMEIsU0FBUyxFQUFFO01BQXJDLENBQWQ7SUFBQSxDQW5CTjtJQUFBLElBb0JFLENBQUMsR0FBRztNQUNGLFFBQVEsRUFBRSxTQURSO01BRUYsT0FBTyxFQUFFLGlCQUZQO01BR0YsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFGLENBQU8sR0FBUDtJQUhULENBcEJOO0lBQUEsSUF5QkUsQ0FBQyxHQUFHO01BQ0YsS0FBSyxFQUFFLEtBREw7TUFFRixHQUFHLEVBQUUsS0FGSDtNQUdGLFFBQVEsRUFBRSxDQUhSO01BSUYsUUFBUSxFQUFFLENBSlI7TUFLRixTQUFTLEVBQUU7SUFMVCxDQXpCTjs7SUFnQ0EsQ0FBQyxDQUFDLElBQUYsQ0FDRSxDQUFDLENBQUMsbUJBREosRUFFRSxDQUFDLENBQUMsb0JBRkosRUFHRSxDQUFDLENBQUMsR0FBRCxDQUhILEVBSUUsQ0FBQyxDQUFDLEdBQUQsQ0FKSCxFQUtFLENBQUMsQ0FBQyxlQUxKLEVBTUU7TUFDRSxLQUFLLEVBQUUsbUJBRFQ7TUFFRSxNQUFNLEVBQUU7UUFBRSxTQUFTLEVBQUUsUUFBYjtRQUF1QixHQUFHLEVBQUUsVUFBNUI7UUFBd0MsVUFBVSxFQUFFLENBQUM7TUFBckQ7SUFGVixDQU5GLEVBVUUsQ0FBQyxDQUFDLFFBVkosRUFXRSxDQVhGLEVBWUUsQ0FBQyxDQUFDLFVBQUQsRUFBYSxZQUFiLEVBQTJCLEVBQTNCLENBWkgsRUFhRSxDQUFDLENBQUMsVUFBRCxFQUFhLGdCQUFiLENBYkgsRUFjRSxDQUFDLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FkSCxFQWVFO01BQ0UsU0FBUyxFQUFFLFdBRGI7TUFFRSxLQUFLLEVBQUUsY0FGVDtNQUdFLEdBQUcsRUFBRSxHQUhQO01BSUUsV0FBVyxFQUFFLENBQUMsQ0FKaEI7TUFLRSxVQUFVLEVBQUUsQ0FBQztJQUxmLENBZkYsRUFzQkUsQ0FBQyxDQUFDLFNBdEJKO0lBd0JBLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFGLENBQVM7TUFBRSxLQUFLLEVBQUUsSUFBVDtNQUFlLEdBQUcsRUFBRSxJQUFwQjtNQUEwQixRQUFRLEVBQUU7SUFBcEMsQ0FBVCxDQUFWO0lBQUEsSUFDRSxDQUFDLEdBQUc7TUFDRixhQUFhLEVBQUUsTUFEYjtNQUVGLGNBQWMsRUFBRSxDQUFDLENBRmY7TUFHRixRQUFRLEVBQUUsQ0FBQztRQUFFLGFBQWEsRUFBRTtNQUFqQixDQUFELEVBQStCLE1BQS9CLENBQXNDLENBQXRDO0lBSFIsQ0FETjtJQUFBLElBTUUsQ0FBQyxHQUFHO01BQ0YsS0FBSyxFQUFFLENBQUMsR0FBRyxPQURUO01BRUYsV0FBVyxFQUFFLENBQUMsQ0FGWjtNQUdGLEdBQUcsRUFBRSxNQUhIO01BSUYsU0FBUyxFQUFFLENBSlQ7TUFLRixRQUFRLEVBQUUsQ0FDUjtRQUFFLEtBQUssRUFBRTtNQUFULENBRFEsRUFFUjtRQUNFLFNBQVMsRUFBRSxXQURiO1FBRUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUYsQ0FBTyxHQUFQLENBQVQsR0FBdUIsTUFGaEM7UUFHRSxHQUFHLEVBQUUsT0FIUDtRQUlFLE1BQU0sRUFBRTtVQUNOLGNBQWMsRUFBRSxDQUFDLENBRFg7VUFFTixPQUFPLEVBQUUsT0FGSDtVQUdOLFNBQVMsRUFBRSxDQUhMO1VBSU4sUUFBUSxFQUFFO1FBSko7TUFKVixDQUZRO0lBTFIsQ0FOTjtJQUFBLElBMEJFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxTQURUO01BRUYsS0FBSyxFQUNILDBHQUhBO01BSUYsTUFBTSxFQUFFO1FBQ04sR0FBRyxFQUFFLE9BREM7UUFFTixRQUFRLEVBQUUsQ0FGSjtRQUdOLFNBQVMsRUFBRSxDQUFDLENBSE47UUFJTixRQUFRLEVBQUUsQ0FKSjtRQUtOLFNBQVMsRUFBRTtNQUxMO0lBSk4sQ0ExQk47SUFBQSxJQXNDRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsVUFEVDtNQUVGLFFBQVEsRUFBRSxDQUNSO1FBQUUsS0FBSyxFQUFFLGVBQVQ7UUFBMEIsU0FBUyxFQUFFO01BQXJDLENBRFEsRUFFUjtRQUNFLEtBQUssRUFBRTtNQURULENBRlEsQ0FGUjtNQVFGLE1BQU0sRUFBRTtRQUFFLEdBQUcsRUFBRSxNQUFQO1FBQWUsU0FBUyxFQUFFLENBQUMsQ0FBM0I7UUFBOEIsUUFBUSxFQUFFO01BQXhDO0lBUk4sQ0F0Q047SUFBQSxJQWdERSxDQUFDLEdBQUc7TUFDRixRQUFRLEVBQUUsQ0FDUjtRQUNFLEtBQUssRUFBRSxjQURUO1FBRUUsR0FBRyxFQUFFO01BRlAsQ0FEUSxFQUtSO1FBQUUsS0FBSyxFQUFFLENBQVQ7UUFBWSxHQUFHLEVBQUU7TUFBakIsQ0FMUSxDQURSO01BUUYsV0FBVyxFQUFFLENBQUMsQ0FSWjtNQVNGLFNBQVMsRUFBRSxDQUFDLENBVFY7TUFVRixPQUFPLEVBQUUsVUFWUDtNQVdGLFNBQVMsRUFBRSxDQVhUO01BWUYsUUFBUSxFQUFFLENBQ1IsQ0FBQyxDQUFDLG1CQURNLEVBRVIsQ0FBQyxDQUFDLG9CQUZNLEVBR1IsQ0FIUSxFQUlSLENBQUMsQ0FBQyxTQUFELEVBQVksUUFBWixDQUpPLEVBS1IsQ0FBQyxDQUFDLFVBQUQsRUFBYSxnQkFBYixDQUxPLEVBTVI7UUFDRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBRixDQUFPLEdBQVAsQ0FBVCxHQUF1QixNQURoQztRQUVFLFNBQVMsRUFBRTtNQUZiLENBTlEsRUFVUixDQUFDLENBQUMsY0FBRCxFQUFpQixDQUFDLEdBQUcsSUFBckIsRUFBMkIsQ0FBM0IsQ0FWTyxFQVdSLENBQUMsQ0FBQyxhQUFELEVBQWdCLE1BQU0sQ0FBdEIsQ0FYTyxFQVlSLENBQUMsQ0FBQyxnQkFBRCxFQUFtQixRQUFRLENBQTNCLEVBQThCLENBQTlCLENBWk8sRUFhUixDQUFDLENBQUMsY0FBRCxFQUFpQixHQUFqQixFQUFzQixDQUF0QixDQWJPLEVBY1IsQ0FBQyxDQUFDLHVCQWRNLEVBZVI7UUFDRSxTQUFTLEVBQUUsaUJBRGI7UUFFRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBRixDQUFPLEdBQVAsQ0FBUCxHQUFxQjtNQUY5QixDQWZRLEVBbUJSO1FBQ0UsU0FBUyxFQUFFLGlCQURiO1FBRUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUYsQ0FBTyxHQUFQLENBQVIsR0FBc0I7TUFGL0IsQ0FuQlEsRUF1QlI7UUFBRSxLQUFLLEVBQUUsS0FBVDtRQUFnQixHQUFHLEVBQUUsS0FBckI7UUFBNEIsUUFBUSxFQUFFO01BQXRDLENBdkJRLEVBd0JSO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0F4QlE7SUFaUixDQWhETjtJQUFBLElBdUZFLENBQUMsR0FBRztNQUNGLEtBQUsseUJBQWtCLENBQUMsQ0FBQyxJQUFGLENBQU8sR0FBUCxDQUFsQixNQURIO01BRUYsV0FBVyxFQUFFLENBQUMsQ0FGWjtNQUdGLFFBQVEsRUFBRSxDQUFDLENBQUQ7SUFIUixDQXZGTjtJQTRGQSxPQUNFLENBQUMsQ0FBQyxJQUFGLENBQU8sQ0FBQyxDQUFDLG1CQUFULEVBQThCLENBQUMsQ0FBQyxvQkFBaEMsRUFBc0QsQ0FBdEQsRUFBeUQsQ0FBekQsRUFBNEQsQ0FBNUQsRUFBK0QsQ0FBL0QsRUFBa0UsQ0FBbEUsR0FDQTtNQUNFLElBQUksRUFBRSxNQURSO01BRUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUZyQjtNQUdFLE9BQU8sRUFBRSxhQUhYO01BSUUsUUFBUSxFQUFFO0lBSlosQ0FGRjtFQVNELENBOUpEO0FBK0pELENBN2lCRCxFQUZGO0FBaWpCQSxJQUFJLENBQUMsZ0JBQUwsQ0FDRSxLQURGLEVBRUcsWUFBTTtFQUNMOztFQUNBLE9BQU8sVUFBQSxDQUFDLEVBQUk7SUFDVixJQUFNLENBQUMsR0FBRyxVQUFWO0lBQUEsSUFDRSxDQUFDLEdBQUcsVUFETjtJQUFBLElBRUUsQ0FBQyxHQUFHO01BQUUsS0FBSyxFQUFFLENBQVQ7TUFBWSxHQUFHLEVBQUUsQ0FBakI7TUFBb0IsUUFBUSxFQUFFLENBQUMsTUFBRDtJQUE5QixDQUZOO0lBQUEsSUFHRSxDQUFDLEdBQUcsQ0FDRixDQUFDLENBQUMsT0FBRixDQUFVLGdCQUFWLEVBQTRCLEdBQTVCLENBREUsRUFFRixDQUFDLENBQUMsT0FBRixDQUFVLFlBQVYsRUFBd0IsQ0FBeEIsRUFBMkI7TUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFELENBQVo7TUFBaUIsU0FBUyxFQUFFO0lBQTVCLENBQTNCLENBRkUsQ0FITjtJQU9BLE9BQU87TUFDTCxJQUFJLEVBQUUsS0FERDtNQUVMLFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxDQUFDLENBQUMsbUJBREo7UUFFUixPQUFPLEVBQUUsZ0JBRkQ7UUFHUixPQUFPLEVBQ0wseUZBSk07UUFLUixRQUFRLEVBQ047TUFOTSxDQUZMO01BVUwsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FDakI7UUFDRSxTQUFTLEVBQUUsVUFEYjtRQUVFLGFBQWEsRUFBRSxVQUZqQjtRQUdFLEdBQUcsRUFBRSxLQUhQO1FBSUUsUUFBUSxFQUFFLENBQ1IsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFDLENBQUMsVUFBWixFQUF3QjtVQUN0QixLQUFLLEVBQUU7UUFEZSxDQUF4QixDQURRLEVBSVI7VUFDRSxTQUFTLEVBQUUsUUFEYjtVQUVFLEtBQUssRUFBRSxLQUZUO1VBR0UsY0FBYyxFQUFFLENBQUMsQ0FIbkI7VUFJRSxRQUFRLEVBQUU7UUFKWixDQUpRLEVBVVIsTUFWUSxDQVVELENBVkM7TUFKWixDQURpQixFQWlCakIsQ0FBQyxDQUFDLGFBakJlLEVBa0JqQixDQUFDLENBQUMsZ0JBbEJlLEVBbUJqQixDQUFDLENBQUMsaUJBbkJlLEVBb0JqQjtRQUNFLFNBQVMsRUFBRSxRQURiO1FBRUUsS0FBSyxFQUFFLENBRlQ7UUFHRSxHQUFHLEVBQUUsQ0FIUDtRQUlFLFFBQVEsRUFBRSxDQUFDLENBQUQsQ0FKWjtRQUtFLFNBQVMsRUFBRTtNQUxiLENBcEJpQixDQUFUO0lBVkwsQ0FBUDtFQXVDRCxDQS9DRDtBQWdERCxDQWxERCxFQUZGO0FBc0RBLElBQUksQ0FBQyxnQkFBTCxDQUNFLFVBREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsT0FBTyxVQUFBLENBQUMsRUFBSTtJQUNWLElBQU0sQ0FBQyxHQUFHO01BQ04sU0FBUyxFQUFFLFVBREw7TUFFTixRQUFRLEVBQUUsQ0FDUjtRQUNFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxtQkFBYixHQUFtQyxLQUQ1QztRQUVFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSDtNQUZaLENBRFEsRUFLUjtRQUFFLEtBQUssRUFBRTtNQUFULENBTFE7SUFGSixDQUFWO0lBQUEsSUFVRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLEtBQUssRUFBRSxHQUZMO01BR0YsR0FBRyxFQUFFLEdBSEg7TUFJRixRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQUgsRUFBcUIsQ0FBckI7SUFKUixDQVZOO0lBQUEsSUFnQkUsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLFVBRFQ7TUFFRixLQUFLLEVBQUUsY0FGTDtNQUdGLEdBQUcsRUFBRSxJQUhIO01BSUYsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUNOO01BRk0sQ0FKUjtNQVFGLFFBQVEsRUFBRSxDQUFDLENBQUQ7SUFSUixDQWhCTjtJQUFBLElBMEJFLENBQUMsR0FBRztNQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxtQkFBUixHQUE4QjtJQUF2QyxDQTFCTjtJQUFBLElBMkJFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxTQURUO01BRUYsS0FBSyxFQUFFLFVBRkw7TUFHRixHQUFHLEVBQUUsR0FISDtNQUlGLFFBQVEsRUFBRSxDQUFDLENBQUQ7SUFKUixDQTNCTjtJQWlDQSxPQUFPO01BQ0wsSUFBSSxFQUFFLFVBREQ7TUFFTCxPQUFPLEVBQUUsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLE1BQWQsQ0FGSjtNQUdMLFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxRQURGO1FBRVIsT0FBTyxFQUNMO01BSE0sQ0FITDtNQVFMLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxpQkFETSxFQUVSLENBRlEsRUFHUixDQUhRLEVBSVIsQ0FKUSxFQUtSLENBTFEsRUFNUjtRQUNFLFNBQVMsRUFBRSxNQURiO1FBRUUsS0FBSyxFQUFFLFdBRlQ7UUFHRSxHQUFHLEVBQUUsR0FIUDtRQUlFLFFBQVEsRUFBRTtVQUFFLFFBQVEsRUFBRSxTQUFaO1VBQXVCLGdCQUFnQjtRQUF2QztNQUpaLENBTlEsRUFZUixDQVpRO0lBUkwsQ0FBUDtFQXVCRCxDQXpERDtBQTBERCxDQTVERCxFQUZGO0FBZ0VBLElBQUksQ0FBQyxnQkFBTCxDQUNFLEtBREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFjO0lBQ1osT0FBTyxDQUFDLEdBQUksWUFBWSxPQUFPLENBQW5CLEdBQXVCLENBQXZCLEdBQTJCLENBQUMsQ0FBQyxNQUFqQyxHQUEyQyxJQUFuRDtFQUNEOztFQUNELFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYztJQUNaLE9BQU8sQ0FBQyxDQUFDLEtBQUQsRUFBUSxDQUFSLEVBQVcsR0FBWCxDQUFSO0VBQ0Q7O0VBQ0QsU0FBUyxDQUFULEdBQWlCO0lBQUEsb0NBQUgsQ0FBRztNQUFILENBQUc7SUFBQTs7SUFDZixPQUFPLENBQUMsQ0FBQyxHQUFGLENBQU0sVUFBQSxDQUFDO01BQUEsT0FBSSxDQUFDLENBQUMsQ0FBRCxDQUFMO0lBQUEsQ0FBUCxFQUFpQixJQUFqQixDQUFzQixFQUF0QixDQUFQO0VBQ0Q7O0VBQ0QsU0FBUyxDQUFULEdBQWlCO0lBQUEsb0NBQUgsQ0FBRztNQUFILENBQUc7SUFBQTs7SUFDZixPQUFPLE1BQU0sQ0FBQyxDQUFDLEdBQUYsQ0FBTSxVQUFBLENBQUM7TUFBQSxPQUFJLENBQUMsQ0FBQyxDQUFELENBQUw7SUFBQSxDQUFQLEVBQWlCLElBQWpCLENBQXNCLEdBQXRCLENBQU4sR0FBbUMsR0FBMUM7RUFDRDs7RUFDRCxPQUFPLFVBQUEsQ0FBQyxFQUFJO0lBQ1YsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQUQsRUFBVyxDQUFDLENBQUMsR0FBRCxFQUFNLGVBQU4sRUFBdUIsSUFBdkIsQ0FBWixFQUEwQyxjQUExQyxDQUFYO0lBQUEsSUFDRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLEtBQUssRUFBRTtJQUZMLENBRE47SUFBQSxJQUtFLENBQUMsR0FBRztNQUNGLEtBQUssRUFBRSxJQURMO01BRUYsUUFBUSxFQUFFLENBQ1I7UUFDRSxTQUFTLEVBQUUsY0FEYjtRQUVFLEtBQUssRUFBRSxxQkFGVDtRQUdFLE9BQU8sRUFBRTtNQUhYLENBRFE7SUFGUixDQUxOO0lBQUEsSUFlRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFWLEVBQWE7TUFBRSxLQUFLLEVBQUUsSUFBVDtNQUFlLEdBQUcsRUFBRTtJQUFwQixDQUFiLENBZk47SUFBQSxJQWdCRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFDLENBQUMsZ0JBQVosRUFBOEI7TUFDaEMsU0FBUyxFQUFFO0lBRHFCLENBQTlCLENBaEJOO0lBQUEsSUFtQkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLGlCQUFaLEVBQStCO01BQ2pDLFNBQVMsRUFBRTtJQURzQixDQUEvQixDQW5CTjtJQUFBLElBc0JFLENBQUMsR0FBRztNQUNGLGNBQWMsRUFBRSxDQUFDLENBRGY7TUFFRixPQUFPLEVBQUUsR0FGUDtNQUdGLFNBQVMsRUFBRSxDQUhUO01BSUYsUUFBUSxFQUFFLENBQ1I7UUFBRSxTQUFTLEVBQUUsTUFBYjtRQUFxQixLQUFLLEVBQUUsa0JBQTVCO1FBQWdELFNBQVMsRUFBRTtNQUEzRCxDQURRLEVBRVI7UUFDRSxLQUFLLEVBQUUsTUFEVDtRQUVFLFNBQVMsRUFBRSxDQUZiO1FBR0UsUUFBUSxFQUFFLENBQ1I7VUFDRSxTQUFTLEVBQUUsUUFEYjtVQUVFLFVBQVUsRUFBRSxDQUFDLENBRmY7VUFHRSxRQUFRLEVBQUUsQ0FDUjtZQUFFLEtBQUssRUFBRSxHQUFUO1lBQWMsR0FBRyxFQUFFLEdBQW5CO1lBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUQ7VUFBbEMsQ0FEUSxFQUVSO1lBQUUsS0FBSyxFQUFFLEdBQVQ7WUFBYyxHQUFHLEVBQUUsR0FBbkI7WUFBd0IsUUFBUSxFQUFFLENBQUMsQ0FBRDtVQUFsQyxDQUZRLEVBR1I7WUFBRSxLQUFLLEVBQUU7VUFBVCxDQUhRO1FBSFosQ0FEUTtNQUhaLENBRlE7SUFKUixDQXRCTjtJQTZDQSxPQUFPO01BQ0wsSUFBSSxFQUFFLFdBREQ7TUFFTCxPQUFPLEVBQUUsQ0FDUCxNQURPLEVBRVAsT0FGTyxFQUdQLEtBSE8sRUFJUCxNQUpPLEVBS1AsS0FMTyxFQU1QLEtBTk8sRUFPUCxLQVBPLEVBUVAsT0FSTyxFQVNQLEtBVE8sRUFVUCxLQVZPLENBRko7TUFjTCxnQkFBZ0IsRUFBRSxDQUFDLENBZGQ7TUFlTCxRQUFRLEVBQUUsQ0FDUjtRQUNFLFNBQVMsRUFBRSxNQURiO1FBRUUsS0FBSyxFQUFFLFNBRlQ7UUFHRSxHQUFHLEVBQUUsR0FIUDtRQUlFLFNBQVMsRUFBRSxFQUpiO1FBS0UsUUFBUSxFQUFFLENBQ1IsQ0FEUSxFQUVSLENBRlEsRUFHUixDQUhRLEVBSVIsQ0FKUSxFQUtSO1VBQ0UsS0FBSyxFQUFFLElBRFQ7VUFFRSxHQUFHLEVBQUUsSUFGUDtVQUdFLFFBQVEsRUFBRSxDQUNSO1lBQ0UsU0FBUyxFQUFFLE1BRGI7WUFFRSxLQUFLLEVBQUUsU0FGVDtZQUdFLEdBQUcsRUFBRSxHQUhQO1lBSUUsUUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVjtVQUpaLENBRFE7UUFIWixDQUxRO01BTFosQ0FEUSxFQXlCUixDQUFDLENBQUMsT0FBRixDQUFVLE1BQVYsRUFBa0IsS0FBbEIsRUFBeUI7UUFDdkIsU0FBUyxFQUFFO01BRFksQ0FBekIsQ0F6QlEsRUE0QlI7UUFBRSxLQUFLLEVBQUUsYUFBVDtRQUF3QixHQUFHLEVBQUUsT0FBN0I7UUFBc0MsU0FBUyxFQUFFO01BQWpELENBNUJRLEVBNkJSLENBN0JRLEVBOEJSO1FBQ0UsU0FBUyxFQUFFLE1BRGI7UUFFRSxLQUFLLEVBQUUsUUFGVDtRQUdFLEdBQUcsRUFBRSxLQUhQO1FBSUUsU0FBUyxFQUFFO01BSmIsQ0E5QlEsRUFvQ1I7UUFDRSxTQUFTLEVBQUUsS0FEYjtRQUVFLEtBQUssRUFBRSxnQkFGVDtRQUdFLEdBQUcsRUFBRSxHQUhQO1FBSUUsUUFBUSxFQUFFO1VBQUUsSUFBSSxFQUFFO1FBQVIsQ0FKWjtRQUtFLFFBQVEsRUFBRSxDQUFDLENBQUQsQ0FMWjtRQU1FLE1BQU0sRUFBRTtVQUNOLEdBQUcsRUFBRSxXQURDO1VBRU4sU0FBUyxFQUFFLENBQUMsQ0FGTjtVQUdOLFdBQVcsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO1FBSFA7TUFOVixDQXBDUSxFQWdEUjtRQUNFLFNBQVMsRUFBRSxLQURiO1FBRUUsS0FBSyxFQUFFLGlCQUZUO1FBR0UsR0FBRyxFQUFFLEdBSFA7UUFJRSxRQUFRLEVBQUU7VUFBRSxJQUFJLEVBQUU7UUFBUixDQUpaO1FBS0UsUUFBUSxFQUFFLENBQUMsQ0FBRCxDQUxaO1FBTUUsTUFBTSxFQUFFO1VBQ04sR0FBRyxFQUFFLFlBREM7VUFFTixTQUFTLEVBQUUsQ0FBQyxDQUZOO1VBR04sV0FBVyxFQUFFLENBQUMsWUFBRCxFQUFlLFlBQWYsRUFBNkIsS0FBN0I7UUFIUDtNQU5WLENBaERRLEVBNERSO1FBQ0UsU0FBUyxFQUFFLEtBRGI7UUFFRSxLQUFLLEVBQUU7TUFGVCxDQTVEUSxFQWdFUjtRQUNFLFNBQVMsRUFBRSxLQURiO1FBRUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFELEVBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWEsSUFBYixDQUFMLENBQUYsQ0FBUCxDQUZWO1FBR0UsR0FBRyxFQUFFLE1BSFA7UUFJRSxRQUFRLEVBQUUsQ0FDUjtVQUFFLFNBQVMsRUFBRSxNQUFiO1VBQXFCLEtBQUssRUFBRSxDQUE1QjtVQUErQixTQUFTLEVBQUUsQ0FBMUM7VUFBNkMsTUFBTSxFQUFFO1FBQXJELENBRFE7TUFKWixDQWhFUSxFQXdFUjtRQUNFLFNBQVMsRUFBRSxLQURiO1FBRUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFELEVBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFELEVBQUksR0FBSixDQUFGLENBQVQsQ0FGVjtRQUdFLFFBQVEsRUFBRSxDQUNSO1VBQUUsU0FBUyxFQUFFLE1BQWI7VUFBcUIsS0FBSyxFQUFFLENBQTVCO1VBQStCLFNBQVMsRUFBRTtRQUExQyxDQURRLEVBRVI7VUFBRSxLQUFLLEVBQUUsR0FBVDtVQUFjLFNBQVMsRUFBRSxDQUF6QjtVQUE0QixVQUFVLEVBQUUsQ0FBQztRQUF6QyxDQUZRO01BSFosQ0F4RVE7SUFmTCxDQUFQO0VBaUdELENBL0lEO0FBZ0pELENBOUpELEVBRkY7QUFrS0EsSUFBSSxDQUFDLGdCQUFMLENBQ0UsVUFERixFQUVHLFlBQU07RUFDTDs7RUFDQSxTQUFTLENBQVQsR0FBaUI7SUFBQSxvQ0FBSCxDQUFHO01BQUgsQ0FBRztJQUFBOztJQUNmLE9BQU8sQ0FBQyxDQUNMLEdBREksQ0FDQSxVQUFBLENBQUMsRUFBSTtNQUNSLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBTCxJQUFXLFlBQVksT0FBTyxDQUFuQixHQUF1QixDQUF2QixHQUEyQixDQUFDLENBQUMsTUFBeEMsR0FBa0QsSUFBekQ7TUFDQSxJQUFJLENBQUo7SUFDRCxDQUpJLEVBS0osSUFMSSxDQUtDLEVBTEQsQ0FBUDtFQU1EOztFQUNELE9BQU8sVUFBQSxDQUFDLEVBQUk7SUFDVixJQUFNLENBQUMsR0FBRztNQUNOLEtBQUssRUFBRSxlQUREO01BRU4sR0FBRyxFQUFFLEdBRkM7TUFHTixXQUFXLEVBQUUsS0FIUDtNQUlOLFNBQVMsRUFBRTtJQUpMLENBQVY7SUFBQSxJQU1FLENBQUMsR0FBRztNQUNGLFFBQVEsRUFBRSxDQUNSO1FBQUUsS0FBSyxFQUFFLGdCQUFUO1FBQTJCLFNBQVMsRUFBRTtNQUF0QyxDQURRLEVBRVI7UUFDRSxLQUFLLEVBQ0gsK0RBRko7UUFHRSxTQUFTLEVBQUU7TUFIYixDQUZRLEVBT1I7UUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFdBQUQsRUFBYyx5QkFBZCxFQUF5QyxZQUF6QyxDQURWO1FBRUUsU0FBUyxFQUFFO01BRmIsQ0FQUSxFQVdSO1FBQUUsS0FBSyxFQUFFLHVCQUFUO1FBQWtDLFNBQVMsRUFBRTtNQUE3QyxDQVhRLEVBWVI7UUFDRSxLQUFLLEVBQUUsZ0JBRFQ7UUFFRSxTQUFTLEVBQUU7TUFGYixDQVpRLENBRFI7TUFrQkYsV0FBVyxFQUFFLENBQUMsQ0FsQlo7TUFtQkYsUUFBUSxFQUFFLENBQ1I7UUFDRSxTQUFTLEVBQUUsUUFEYjtRQUVFLFNBQVMsRUFBRSxDQUZiO1FBR0UsS0FBSyxFQUFFLEtBSFQ7UUFJRSxHQUFHLEVBQUUsS0FKUDtRQUtFLFlBQVksRUFBRSxDQUFDLENBTGpCO1FBTUUsU0FBUyxFQUFFLENBQUM7TUFOZCxDQURRLEVBU1I7UUFDRSxTQUFTLEVBQUUsTUFEYjtRQUVFLFNBQVMsRUFBRSxDQUZiO1FBR0UsS0FBSyxFQUFFLFFBSFQ7UUFJRSxHQUFHLEVBQUUsS0FKUDtRQUtFLFlBQVksRUFBRSxDQUFDLENBTGpCO1FBTUUsVUFBVSxFQUFFLENBQUM7TUFOZixDQVRRLEVBaUJSO1FBQ0UsU0FBUyxFQUFFLFFBRGI7UUFFRSxTQUFTLEVBQUUsQ0FGYjtRQUdFLEtBQUssRUFBRSxRQUhUO1FBSUUsR0FBRyxFQUFFLEtBSlA7UUFLRSxZQUFZLEVBQUUsQ0FBQyxDQUxqQjtRQU1FLFVBQVUsRUFBRSxDQUFDO01BTmYsQ0FqQlE7SUFuQlIsQ0FOTjtJQUFBLElBb0RFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxRQURUO01BRUYsUUFBUSxFQUFFLEVBRlI7TUFHRixRQUFRLEVBQUUsQ0FDUjtRQUFFLEtBQUssRUFBRSxNQUFUO1FBQWlCLEdBQUcsRUFBRTtNQUF0QixDQURRLEVBRVI7UUFBRSxLQUFLLEVBQUUsT0FBVDtRQUFrQixHQUFHLEVBQUU7TUFBdkIsQ0FGUTtJQUhSLENBcEROO0lBQUEsSUE0REUsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLFVBRFQ7TUFFRixRQUFRLEVBQUUsRUFGUjtNQUdGLFFBQVEsRUFBRSxDQUNSO1FBQUUsS0FBSyxFQUFFLFVBQVQ7UUFBcUIsR0FBRyxFQUFFO01BQTFCLENBRFEsRUFFUjtRQUNFLEtBQUssRUFBRSxRQURUO1FBRUUsR0FBRyxFQUFFLEdBRlA7UUFHRSxTQUFTLEVBQUU7TUFIYixDQUZRO0lBSFIsQ0E1RE47SUF3RUEsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxJQUFYLENBQWdCLENBQWhCLEdBQW9CLENBQUMsQ0FBQyxRQUFGLENBQVcsSUFBWCxDQUFnQixDQUFoQixDQUFwQjtJQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUjtJQUNBLE9BQ0csQ0FBQyxDQUFDLFFBQUYsR0FBYSxDQUFDLENBQUMsUUFBRixDQUFXLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FBZCxFQUNDLENBQUMsQ0FBQyxRQUFGLEdBQWEsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxNQUFYLENBQWtCLENBQWxCLENBRGQsRUFFQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUZMLEVBR0E7TUFDRSxJQUFJLEVBQUUsVUFEUjtNQUVFLE9BQU8sRUFBRSxDQUFDLElBQUQsRUFBTyxRQUFQLEVBQWlCLEtBQWpCLENBRlg7TUFHRSxRQUFRLEVBQUUsQ0FDUjtRQUNFLFNBQVMsRUFBRSxTQURiO1FBRUUsUUFBUSxFQUFFLENBQ1I7VUFBRSxLQUFLLEVBQUUsU0FBVDtVQUFvQixHQUFHLEVBQUUsR0FBekI7VUFBOEIsUUFBUSxFQUFFO1FBQXhDLENBRFEsRUFFUjtVQUNFLEtBQUssRUFBRSxzQkFEVDtVQUVFLFFBQVEsRUFBRSxDQUNSO1lBQUUsS0FBSyxFQUFFO1VBQVQsQ0FEUSxFQUVSO1lBQUUsS0FBSyxFQUFFLEdBQVQ7WUFBYyxHQUFHLEVBQUUsS0FBbkI7WUFBMEIsUUFBUSxFQUFFO1VBQXBDLENBRlE7UUFGWixDQUZRO01BRlosQ0FEUSxFQWNSLENBZFEsRUFlUjtRQUNFLFNBQVMsRUFBRSxRQURiO1FBRUUsS0FBSyxFQUFFLGtDQUZUO1FBR0UsR0FBRyxFQUFFLE1BSFA7UUFJRSxVQUFVLEVBQUUsQ0FBQztNQUpmLENBZlEsRUFxQlIsQ0FyQlEsRUFzQlIsQ0F0QlEsRUF1QlI7UUFBRSxTQUFTLEVBQUUsT0FBYjtRQUFzQixLQUFLLEVBQUUsUUFBN0I7UUFBdUMsUUFBUSxFQUFFLENBQWpEO1FBQW9ELEdBQUcsRUFBRTtNQUF6RCxDQXZCUSxFQXdCUjtRQUNFLFNBQVMsRUFBRSxNQURiO1FBRUUsUUFBUSxFQUFFLENBQ1I7VUFBRSxLQUFLLEVBQUU7UUFBVCxDQURRLEVBRVI7VUFDRSxLQUFLLEVBQUU7UUFEVCxDQUZRLEVBS1I7VUFBRSxLQUFLLEVBQUUsS0FBVDtVQUFnQixHQUFHLEVBQUU7UUFBckIsQ0FMUSxFQU1SO1VBQ0UsS0FBSyxFQUFFLEtBRFQ7VUFFRSxHQUFHLEVBQUU7UUFGUCxDQU5RLEVBVVI7VUFBRSxLQUFLLEVBQUU7UUFBVCxDQVZRLEVBV1I7VUFDRSxLQUFLLEVBQUUsaUJBRFQ7VUFFRSxRQUFRLEVBQUUsQ0FBQztZQUFFLEtBQUssRUFBRSxhQUFUO1lBQXdCLEdBQUcsRUFBRTtVQUE3QixDQUFELENBRlo7VUFHRSxTQUFTLEVBQUU7UUFIYixDQVhRO01BRlosQ0F4QlEsRUE0Q1I7UUFDRSxLQUFLLEVBQUUsYUFEVDtRQUVFLEdBQUcsRUFBRTtNQUZQLENBNUNRLEVBZ0RSLENBaERRLEVBaURSO1FBQ0UsS0FBSyxFQUFFLGNBRFQ7UUFFRSxXQUFXLEVBQUUsQ0FBQyxDQUZoQjtRQUdFLFFBQVEsRUFBRSxDQUNSO1VBQ0UsU0FBUyxFQUFFLFFBRGI7VUFFRSxLQUFLLEVBQUUsSUFGVDtVQUdFLEdBQUcsRUFBRSxJQUhQO1VBSUUsWUFBWSxFQUFFLENBQUMsQ0FKakI7VUFLRSxVQUFVLEVBQUUsQ0FBQztRQUxmLENBRFEsRUFRUjtVQUNFLFNBQVMsRUFBRSxNQURiO1VBRUUsS0FBSyxFQUFFLE1BRlQ7VUFHRSxHQUFHLEVBQUUsR0FIUDtVQUlFLFlBQVksRUFBRSxDQUFDO1FBSmpCLENBUlE7TUFIWixDQWpEUTtJQUhaLENBSkY7RUE4RUQsQ0F6SkQ7QUEwSkQsQ0FwS0QsRUFGRjtBQXdLQSxJQUFJLENBQUMsZ0JBQUwsQ0FDRSxPQURGLEVBRUcsWUFBTTtFQUNMOztFQUNBLE9BQU8sVUFBQSxDQUFDLEVBQUk7SUFDVixJQUFNLENBQUMsR0FBRztNQUNOLFNBQVMsRUFBRSxVQURMO01BRU4sUUFBUSxFQUFFLENBQ1I7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQURRLEVBRVI7UUFBRSxLQUFLLEVBQUUsTUFBVDtRQUFpQixHQUFHLEVBQUU7TUFBdEIsQ0FGUSxFQUdSO1FBQ0UsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO01BRHBCLENBSFE7SUFGSixDQUFWO0lBQUEsSUFVRSxDQUFDLEdBQUc7TUFDRixjQUFjLEVBQUUsQ0FBQyxDQURmO01BRUYsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLFVBREY7UUFFUixPQUFPLEVBQ0w7TUFITSxDQUZSO01BT0YsU0FBUyxFQUFFLENBUFQ7TUFRRixPQUFPLEVBQUUsSUFSUDtNQVNGLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxpQkFETSxFQUVSO1FBQ0UsU0FBUyxFQUFFLFFBRGI7UUFFRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQUgsRUFBcUIsQ0FBckIsQ0FGWjtRQUdFLFFBQVEsRUFBRSxDQUNSO1VBQUUsS0FBSyxFQUFFLEdBQVQ7VUFBYyxHQUFHLEVBQUU7UUFBbkIsQ0FEUSxFQUVSO1VBQUUsS0FBSyxFQUFFLEdBQVQ7VUFBYyxHQUFHLEVBQUU7UUFBbkIsQ0FGUTtNQUhaLENBRlEsRUFVUjtRQUNFLEtBQUssRUFBRSxZQURUO1FBRUUsR0FBRyxFQUFFLEtBRlA7UUFHRSxjQUFjLEVBQUUsQ0FBQyxDQUhuQjtRQUlFLFVBQVUsRUFBRSxDQUFDLENBSmY7UUFLRSxRQUFRLEVBQUUsQ0FBQyxDQUFEO01BTFosQ0FWUSxFQWlCUjtRQUNFLFNBQVMsRUFBRSxRQURiO1FBRUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFILEVBQXFCLENBQXJCLENBRlo7UUFHRSxRQUFRLEVBQUUsQ0FDUjtVQUFFLEtBQUssRUFBRSxRQUFUO1VBQW1CLEdBQUcsRUFBRSxXQUF4QjtVQUFxQyxTQUFTLEVBQUUsQ0FBQztRQUFqRCxDQURRLEVBRVI7VUFBRSxLQUFLLEVBQUUsV0FBVDtVQUFzQixHQUFHLEVBQUUsV0FBM0I7VUFBd0MsU0FBUyxFQUFFLENBQUM7UUFBcEQsQ0FGUSxFQUdSO1VBQ0UsS0FBSyxFQUFFO1FBRFQsQ0FIUSxFQU1SO1VBQUUsS0FBSyxFQUFFO1FBQVQsQ0FOUTtNQUhaLENBakJRLEVBNkJSO1FBQ0UsU0FBUyxFQUFFLFFBRGI7UUFFRSxLQUFLLEVBQ0g7TUFISixDQTdCUSxFQWtDUjtRQUNFLFNBQVMsRUFBRSxRQURiO1FBRUUsS0FBSyxFQUFFLDJCQUZUO1FBR0UsU0FBUyxFQUFFO01BSGIsQ0FsQ1EsRUF1Q1IsQ0F2Q1E7SUFUUixDQVZOO0lBNkRBLE9BQU87TUFDTCxJQUFJLEVBQUUsY0FERDtNQUVMLE9BQU8sRUFBRSxDQUFDLFdBQUQsQ0FGSjtNQUdMLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxpQkFETSxFQUVSO1FBQ0UsS0FBSyxFQUFFLENBQUMsQ0FBQyxtQkFBRixHQUF3QixTQURqQztRQUVFLFdBQVcsRUFBRSxDQUFDLENBRmhCO1FBR0UsR0FBRyxFQUFFLElBSFA7UUFJRSxRQUFRLEVBQUUsQ0FDUjtVQUNFLFNBQVMsRUFBRSxTQURiO1VBRUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUZYLENBRFEsQ0FKWjtRQVVFLFNBQVMsRUFBRTtNQVZiLENBRlEsRUFjUjtRQUNFLEtBQUssRUFBRSxDQUFDLENBQUMsbUJBQUYsR0FBd0IsS0FEakM7UUFFRSxHQUFHLEVBQUUsT0FGUDtRQUdFLFdBQVcsRUFBRSxDQUFDLENBSGhCO1FBSUUsUUFBUSxFQUFFLENBQ1I7VUFDRSxTQUFTLEVBQUUsV0FEYjtVQUVFLEtBQUssRUFBRSxDQUFDLENBQUMsbUJBRlg7VUFHRSxNQUFNLEVBQUU7UUFIVixDQURRLENBSlo7UUFXRSxTQUFTLEVBQUU7TUFYYixDQWRRLENBSEw7TUErQkwsT0FBTyxFQUFFO0lBL0JKLENBQVA7RUFpQ0QsQ0EvRkQ7QUFnR0QsQ0FsR0QsRUFGRjtBQXNHQSxJQUFJLENBQUMsZ0JBQUwsQ0FDRSxZQURGLEVBRUcsWUFBTTtFQUNMOztFQUNBLE9BQU8sVUFBQSxDQUFDLEVBQUk7SUFDVixJQUFNLENBQUMsR0FBRyx3QkFBVjtJQUFBLElBQ0UsQ0FBQyxHQUFHO01BQ0YsUUFBUSxFQUFFLENBRFI7TUFFRixPQUFPLEVBQUU7SUFGUCxDQUROO0lBS0EsT0FBTztNQUNMLElBQUksRUFBRSxhQUREO01BRUwsT0FBTyxFQUFFLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxPQUFmLEVBQXdCLFNBQXhCLEVBQW1DLGVBQW5DLENBRko7TUFHTCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsQ0FERjtRQUVSLE9BQU8sRUFDTCwrdENBSE07UUFJUixPQUFPLEVBQUUsdUNBSkQ7UUFLUixRQUFRLEVBQ047TUFOTSxDQUhMO01BV0wsT0FBTyxFQUFFLElBWEo7TUFZTCxRQUFRLEVBQUUsQ0FDUjtRQUNFLFNBQVMsRUFBRSxVQURiO1FBRUUsS0FBSyxFQUNIO01BSEosQ0FEUSxFQU1SLENBQUMsQ0FBQyxtQkFOTSxFQU9SLENBQUMsQ0FBQyxvQkFQTSxFQVFSLENBQUMsQ0FBQyxhQVJNLEVBU1IsQ0FBQyxDQUFDLGlCQVRNLEVBVVIsQ0FBQyxDQUFDLGdCQVZNLEVBV1I7UUFDRSxTQUFTLEVBQUUsUUFEYjtRQUVFLFFBQVEsRUFBRSxDQUNSO1VBQ0UsS0FBSyxFQUFFLElBRFQ7VUFFRSxHQUFHLEVBQUUsR0FGUDtVQUdFLE9BQU8sRUFBRSxLQUhYO1VBSUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFIO1FBSlosQ0FEUTtNQUZaLENBWFEsRUFzQlI7UUFDRSxTQUFTLEVBQUUsTUFEYjtRQUVFLEtBQUssRUFBRSxjQUZUO1FBR0UsR0FBRyxFQUFFLEdBSFA7UUFJRSxRQUFRLEVBQUU7VUFDUixnQkFDRTtRQUZNLENBSlo7UUFRRSxRQUFRLEVBQUUsQ0FDUjtVQUFFLEtBQUssRUFBRSxNQUFUO1VBQWlCLFNBQVMsRUFBRTtRQUE1QixDQURRLEVBRVIsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFDLENBQUMsaUJBQVosRUFBK0I7VUFDN0IsU0FBUyxFQUFFO1FBRGtCLENBQS9CLENBRlEsRUFLUjtVQUNFLFNBQVMsRUFBRSxhQURiO1VBRUUsS0FBSyxFQUFFLE9BRlQ7VUFHRSxHQUFHLEVBQUUsR0FIUDtVQUlFLE9BQU8sRUFBRTtRQUpYLENBTFEsRUFXUixDQUFDLENBQUMsbUJBWE0sRUFZUixDQUFDLENBQUMsb0JBWk07TUFSWixDQXRCUSxFQTZDUjtRQUNFLFNBQVMsRUFBRSxPQURiO1FBRUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQUYsQ0FBVSxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLElBQXJCLENBQTBCLEdBQTFCLENBQU4sR0FBdUMsTUFGaEQ7UUFHRSxHQUFHLEVBQUUsUUFIUDtRQUlFLFVBQVUsRUFBRSxDQUFDLENBSmY7UUFLRSxRQUFRLEVBQUUsQ0FMWjtRQU1FLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxxQkFBSDtNQU5aLENBN0NRLEVBcURSO1FBQ0UsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLG1CQURuQjtRQUVFLFNBQVMsRUFBRTtNQUZiLENBckRRO0lBWkwsQ0FBUDtFQXVFRCxDQTdFRDtBQThFRCxDQWhGRCxFQUZGO0FBb0ZBLElBQUksQ0FBQyxnQkFBTCxDQUNFLE1BREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFjO0lBQ1osT0FBTyxDQUFDLEdBQUksWUFBWSxPQUFPLENBQW5CLEdBQXVCLENBQXZCLEdBQTJCLENBQUMsQ0FBQyxNQUFqQyxHQUEyQyxJQUFuRDtFQUNEOztFQUNELFNBQVMsQ0FBVCxHQUFpQjtJQUFBLG9DQUFILENBQUc7TUFBSCxDQUFHO0lBQUE7O0lBQ2YsT0FBTyxDQUFDLENBQUMsR0FBRixDQUFNLFVBQUEsQ0FBQztNQUFBLE9BQUksQ0FBQyxDQUFDLENBQUQsQ0FBTDtJQUFBLENBQVAsRUFBaUIsSUFBakIsQ0FBc0IsRUFBdEIsQ0FBUDtFQUNEOztFQUNELFNBQVMsQ0FBVCxHQUFpQjtJQUFBLG9DQUFILENBQUc7TUFBSCxDQUFHO0lBQUE7O0lBQ2YsT0FBTyxNQUFNLENBQUMsQ0FBQyxHQUFGLENBQU0sVUFBQSxDQUFDO01BQUEsT0FBSSxDQUFDLENBQUMsQ0FBRCxDQUFMO0lBQUEsQ0FBUCxFQUFpQixJQUFqQixDQUFzQixHQUF0QixDQUFOLEdBQW1DLEdBQTFDO0VBQ0Q7O0VBQ0QsT0FBTyxVQUFBLENBQUMsRUFBSTtJQUNWLElBQU0sQ0FBQyxHQUFHLHNCQUFWO0lBQUEsSUFDRSxDQUFDLEdBQUc7TUFDRixRQUFRLEVBQUUsUUFEUjtNQUVGLE9BQU8sRUFDTDtJQUhBLENBRE47SUFBQSxJQU1FLENBQUMsR0FBRztNQUFFLFNBQVMsRUFBRSxPQUFiO01BQXNCLEtBQUssRUFBRSxTQUE3QjtNQUF3QyxHQUFHLEVBQUUsS0FBN0M7TUFBb0QsUUFBUSxFQUFFO0lBQTlELENBTk47SUFBQSxJQU9FLENBQUMsR0FBRztNQUFFLEtBQUssRUFBRSxNQUFUO01BQWlCLEdBQUcsRUFBRTtJQUF0QixDQVBOO0lBQUEsSUFRRSxDQUFDLEdBQUc7TUFDRixRQUFRLEVBQUUsQ0FDUjtRQUFFLEtBQUssRUFBRTtNQUFULENBRFEsRUFFUjtRQUNFLEtBQUssRUFBRSxDQUFDLENBQ04sZ0RBRE0sRUFFTix1QkFGTTtNQURWLENBRlEsRUFRUjtRQUFFLEtBQUssRUFBRSxlQUFUO1FBQTBCLFNBQVMsRUFBRTtNQUFyQyxDQVJRO0lBRFIsQ0FSTjtJQUFBLElBb0JFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxnQkFBSCxFQUFxQixDQUFyQixFQUF3QixDQUF4QixDQXBCTjtJQUFBLElBcUJFLENBQUMsR0FBRyxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksSUFBWixFQUFrQixJQUFsQixFQUF3QixHQUF4QixFQUE2QixHQUE3QixFQUFrQyxHQUFsQyxDQXJCTjtJQUFBLElBc0JFLENBQUMsR0FBRyxTQUFKLENBQUksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFxQjtNQUFBLElBQWQsQ0FBYyx1RUFBVixLQUFVO01BQ3ZCLElBQU0sQ0FBQyxHQUFHLFVBQVUsQ0FBVixHQUFjLENBQWQsR0FBa0IsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQTdCO01BQ0EsT0FBTyxDQUFDLENBQ04sQ0FBQyxDQUFDLEtBQUQsRUFBUSxDQUFSLEVBQVcsR0FBWCxDQURLLEVBRU4sQ0FGTSxFQUdOLG1CQUhNLEVBSU4sQ0FKTSxFQUtOLG1CQUxNLEVBTU4sQ0FOTSxFQU9OLENBUE0sQ0FBUjtJQVNELENBakNIO0lBQUEsSUFrQ0UsQ0FBQyxHQUFHLFNBQUosQ0FBSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtNQUFBLE9BQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFELEVBQVEsQ0FBUixFQUFXLEdBQVgsQ0FBRixFQUFtQixDQUFuQixFQUFzQixtQkFBdEIsRUFBMkMsQ0FBM0MsRUFBOEMsQ0FBOUMsQ0FBZDtJQUFBLENBbENOO0lBQUEsSUFtQ0UsQ0FBQyxHQUFHLENBQ0YsQ0FERSxFQUVGLENBQUMsQ0FBQyxpQkFGQSxFQUdGLENBQUMsQ0FBQyxPQUFGLENBQVUsTUFBVixFQUFrQixNQUFsQixFQUEwQjtNQUN4QixjQUFjLEVBQUUsQ0FBQztJQURPLENBQTFCLENBSEUsRUFNRixDQU5FLEVBT0Y7TUFDRSxTQUFTLEVBQUUsUUFEYjtNQUVFLFFBQVEsRUFBRSxDQUZaO01BR0UsUUFBUSxFQUFFLENBQ1I7UUFDRSxLQUFLLEVBQUUsaUJBRFQ7UUFFRSxHQUFHLEVBQUUsS0FGUDtRQUdFLFNBQVMsRUFBRTtNQUhiLENBRFEsRUFNUjtRQUFFLEtBQUssRUFBRSxpQkFBVDtRQUE0QixHQUFHLEVBQUUsS0FBakM7UUFBd0MsU0FBUyxFQUFFO01BQW5ELENBTlEsRUFPUjtRQUFFLEtBQUssRUFBRSxpQkFBVDtRQUE0QixHQUFHLEVBQUUsS0FBakM7UUFBd0MsU0FBUyxFQUFFO01BQW5ELENBUFEsRUFRUjtRQUNFLEtBQUssRUFBRSxpQkFEVDtRQUVFLEdBQUcsRUFBRSxLQUZQO1FBR0UsU0FBUyxFQUFFO01BSGIsQ0FSUSxFQWFSO1FBQUUsS0FBSyxFQUFFLGVBQVQ7UUFBMEIsR0FBRyxFQUFFLEdBQS9CO1FBQW9DLFNBQVMsRUFBRTtNQUEvQyxDQWJRLEVBY1I7UUFBRSxLQUFLLEVBQUUsU0FBVDtRQUFvQixHQUFHLEVBQUUsR0FBekI7UUFBOEIsU0FBUyxFQUFFO01BQXpDLENBZFEsRUFlUjtRQUFFLEtBQUssRUFBRSxHQUFUO1FBQWMsR0FBRyxFQUFFLEdBQW5CO1FBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSDtNQUFsQyxDQWZRLEVBZ0JSO1FBQUUsS0FBSyxFQUFFLEdBQVQ7UUFBYyxHQUFHLEVBQUU7TUFBbkIsQ0FoQlEsRUFpQlI7UUFBRSxLQUFLLEVBQUUsR0FBVDtRQUFjLEdBQUcsRUFBRSxHQUFuQjtRQUF3QixRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQUg7TUFBbEMsQ0FqQlEsRUFrQlI7UUFBRSxLQUFLLEVBQUUsU0FBVDtRQUFvQixTQUFTLEVBQUU7TUFBL0IsQ0FsQlEsRUFtQlI7UUFDRSxLQUFLLEVBQUUsY0FEVDtRQUVFLFNBQVMsRUFBRTtNQUZiLENBbkJRO0lBSFosQ0FQRSxFQW1DRjtNQUNFLFNBQVMsRUFBRSxRQURiO01BRUUsS0FBSyxFQUNILDJFQUhKO01BSUUsU0FBUyxFQUFFO0lBSmIsQ0FuQ0UsRUF5Q0Y7TUFDRSxLQUFLLEVBQ0gsYUFDQSxDQUFDLENBQUMsY0FERixHQUVBLCtDQUpKO01BS0UsUUFBUSxFQUFFLGlDQUxaO01BTUUsU0FBUyxFQUFFLENBTmI7TUFPRSxRQUFRLEVBQUUsQ0FDUixDQUFDLENBQUMsaUJBRE0sRUFFUjtRQUNFLFNBQVMsRUFBRSxRQURiO1FBRUUsUUFBUSxFQUFFLENBQ1I7VUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQUQsRUFBVyxDQUFDLE1BQUQsU0FBSyxDQUFMLENBQVg7UUFEVixDQURRLEVBSVI7VUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLEtBQWxCO1FBQVYsQ0FKUSxFQUtSO1VBQ0UsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixLQUFsQjtRQURWLENBTFEsRUFRUjtVQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsS0FBbEI7UUFBVixDQVJRLENBRlo7UUFZRSxTQUFTLEVBQUU7TUFaYixDQUZRLEVBZ0JSO1FBQ0UsU0FBUyxFQUFFLFFBRGI7UUFFRSxRQUFRLEVBQUUsQ0FDUjtVQUFFLEtBQUssRUFBRSxZQUFUO1VBQXVCLFNBQVMsRUFBRTtRQUFsQyxDQURRLEVBRVI7VUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFdBQUQsRUFBYyxJQUFkLEVBQW9CLElBQXBCO1FBRFYsQ0FGUSxFQUtSO1VBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFELEVBQVMsQ0FBQyxNQUFELFNBQUssQ0FBTCxDQUFULEVBQWtCLElBQWxCO1FBQVYsQ0FMUSxFQU1SO1VBQ0UsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWY7UUFEVixDQU5RLEVBU1I7VUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZjtRQUFWLENBVFEsRUFVUjtVQUNFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmO1FBRFYsQ0FWUTtNQUZaLENBaEJRO0lBUFosQ0F6Q0UsRUFtRkY7TUFDRSxTQUFTLEVBQUUsVUFEYjtNQUVFLGFBQWEsRUFBRSxLQUZqQjtNQUdFLEdBQUcsRUFBRSxzQkFIUDtNQUlFLFVBQVUsRUFBRSxDQUFDLENBSmY7TUFLRSxTQUFTLEVBQUUsQ0FMYjtNQU1FLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFIO0lBTlosQ0FuRkUsRUEyRkY7TUFDRSxLQUFLLEVBQUUsU0FEVDtNQUVFLFNBQVMsRUFBRTtJQUZiLENBM0ZFLEVBK0ZGO01BQ0UsS0FBSyxFQUFFLFlBRFQ7TUFFRSxHQUFHLEVBQUUsV0FGUDtNQUdFLFdBQVcsRUFBRSxhQUhmO01BSUUsUUFBUSxFQUFFLENBQUM7UUFBRSxLQUFLLEVBQUUsT0FBVDtRQUFrQixHQUFHLEVBQUUsR0FBdkI7UUFBNEIsU0FBUyxFQUFFO01BQXZDLENBQUQ7SUFKWixDQS9GRSxDQW5DTjs7SUF5SUEsT0FDRyxDQUFDLENBQUMsUUFBRixHQUFhLENBQWQsRUFDQyxDQUFDLENBQUMsUUFBRixHQUFhLENBRGQsRUFFQTtNQUFFLElBQUksRUFBRSxNQUFSO01BQWdCLE9BQU8sRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLENBQXpCO01BQXVDLFFBQVEsRUFBRSxDQUFqRDtNQUFvRCxRQUFRLEVBQUU7SUFBOUQsQ0FIRjtFQUtELENBL0lEO0FBZ0pELENBM0pELEVBRkY7QUErSkEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsS0FERixFQUVHLFlBQU07RUFDTDs7RUFDQSxPQUFPLFVBQUEsQ0FBQyxFQUFJO0lBQ1YsSUFBTSxDQUFDLEdBQUc7TUFDTixTQUFTLEVBQUUsVUFETDtNQUVOLEtBQUssRUFDSDtJQUhJLENBQVY7SUFBQSxJQUtFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxNQURUO01BRUYsUUFBUSxFQUFFLENBQ1I7UUFBRSxLQUFLLEVBQUUsUUFBVDtRQUFtQixTQUFTLEVBQUU7TUFBOUIsQ0FEUSxFQUVSO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0FGUSxFQUdSO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0FIUTtJQUZSLENBTE47SUFBQSxJQWVFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxPQURUO01BRUYsUUFBUSxFQUFFLENBQUM7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQUFELEVBQXFCO1FBQUUsS0FBSyxFQUFFLE1BQVQ7UUFBaUIsR0FBRyxFQUFFO01BQXRCLENBQXJCO0lBRlIsQ0FmTjtJQUFBLElBbUJFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBRixDQUFVLENBQUMsQ0FBQyxnQkFBWixFQUE4QjtNQUFFLE9BQU8sRUFBRTtJQUFYLENBQTlCLENBbkJOO0lBQUEsSUFvQkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLGlCQUFaLEVBQStCO01BQ2pDLE9BQU8sRUFBRSxJQUR3QjtNQUVqQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLGlCQUFGLENBQW9CLFFBQXBCLENBQTZCLE1BQTdCLENBQW9DLENBQXBDO0lBRnVCLENBQS9CLENBcEJOO0lBQUEsSUF3QkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBRixDQUFvQjtNQUN0QixLQUFLLEVBQUUsa0JBRGU7TUFFdEIsR0FBRyxFQUFFLGVBRmlCO01BR3RCLFFBQVEsRUFBRSxDQUFDLENBQUMsaUJBQUYsQ0FBb0IsUUFBcEIsQ0FBNkIsTUFBN0IsQ0FBb0MsQ0FBcEM7SUFIWSxDQUFwQixDQXhCTjtJQUFBLElBNkJFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxRQURUO01BRUYsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFILEVBQXFCLENBQXJCLENBRlI7TUFHRixRQUFRLEVBQUUsQ0FDUixDQUFDLENBQUMsT0FBRixDQUFVLENBQVYsRUFBYTtRQUFFLEtBQUssRUFBRSxJQUFUO1FBQWUsR0FBRyxFQUFFO01BQXBCLENBQWIsQ0FEUSxFQUVSLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBVixFQUFhO1FBQUUsS0FBSyxFQUFFLElBQVQ7UUFBZSxHQUFHLEVBQUU7TUFBcEIsQ0FBYixDQUZRLEVBR1IsQ0FIUSxFQUlSLENBSlEsRUFLUixDQUxRO0lBSFIsQ0E3Qk47SUFBQSxJQXdDRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLFFBQVEsRUFBRSxDQUNSO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0FEUSxFQUlSO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0FKUSxFQUtSO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0FMUSxFQVFSO1FBQ0UsS0FBSyxFQUNIO01BRkosQ0FSUSxDQUZSO01BZUYsU0FBUyxFQUFFO0lBZlQsQ0F4Q047SUFBQSxJQXlERSxDQUFDLEdBQUc7TUFDRixPQUFPLEVBQ0wsc21CQUZBO01BR0YsT0FBTyxFQUFFLGlCQUhQO01BSUYsUUFBUSxFQUNOO0lBTEEsQ0F6RE47SUFnRUEsT0FBTztNQUNMLE9BQU8sRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDLENBREo7TUFFTCxnQkFBZ0IsRUFBRSxDQUFDLENBRmQ7TUFHTCxRQUFRLEVBQUUsQ0FITDtNQUlMLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxpQkFETSxFQUVSLENBQUMsQ0FBQyxPQUFGLENBQVUsSUFBVixFQUFnQixHQUFoQixFQUFxQjtRQUFFLFFBQVEsRUFBRSxDQUFDLENBQUQ7TUFBWixDQUFyQixDQUZRLEVBR1IsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxNQUFWLEVBQWtCLE1BQWxCLEVBQTBCO1FBQ3hCLFFBQVEsRUFBRSxDQUFDO1VBQUUsU0FBUyxFQUFFLFFBQWI7VUFBdUIsS0FBSyxFQUFFO1FBQTlCLENBQUQ7TUFEYyxDQUExQixDQUhRLEVBTVIsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxxQkFBVixFQUFpQyxDQUFDLENBQWxDLEVBQXFDO1FBQ25DLGNBQWMsRUFBRSxDQUFDLENBRGtCO1FBRW5DLFFBQVEsRUFBRTtNQUZ5QixDQUFyQyxDQU5RLEVBVVIsQ0FWUSxFQVdSO1FBQUUsU0FBUyxFQUFFLFNBQWI7UUFBd0IsS0FBSyxFQUFFO01BQS9CLENBWFEsRUFZUixDQVpRLEVBYVI7UUFDRSxLQUFLLEVBQUU7TUFEVCxDQWJRLEVBZ0JSO1FBQ0UsU0FBUyxFQUFFLFVBRGI7UUFFRSxTQUFTLEVBQUUsQ0FGYjtRQUdFLGFBQWEsRUFBRSxhQUhqQjtRQUlFLEdBQUcsRUFBRSxNQUpQO1FBS0UsVUFBVSxFQUFFLENBQUMsQ0FMZjtRQU1FLE9BQU8sRUFBRSxTQU5YO1FBT0UsUUFBUSxFQUFFLENBQ1I7VUFBRSxhQUFhLEVBQUU7UUFBakIsQ0FEUSxFQUVSLENBQUMsQ0FBQyxxQkFGTSxFQUdSO1VBQ0UsS0FBSyxFQUFFLElBRFQ7VUFFRSxVQUFVLEVBQUUsQ0FBQztRQUZmLENBSFEsRUFPUjtVQUNFLFNBQVMsRUFBRSxRQURiO1VBRUUsS0FBSyxFQUFFLEtBRlQ7VUFHRSxHQUFHLEVBQUUsS0FIUDtVQUlFLFlBQVksRUFBRSxDQUFDLENBSmpCO1VBS0UsVUFBVSxFQUFFLENBQUMsQ0FMZjtVQU1FLFFBQVEsRUFBRSxDQU5aO1VBT0UsUUFBUSxFQUFFLENBQUMsTUFBRCxFQUFTLENBQVQsRUFBWSxDQUFDLENBQUMsb0JBQWQsRUFBb0MsQ0FBcEMsRUFBdUMsQ0FBdkM7UUFQWixDQVBRO01BUFosQ0FoQlEsRUF5Q1I7UUFDRSxTQUFTLEVBQUUsT0FEYjtRQUVFLFFBQVEsRUFBRSxDQUNSO1VBQ0UsYUFBYSxFQUFFLE1BRGpCO1VBRUUsT0FBTyxFQUFFO1FBRlgsQ0FEUSxFQUtSO1VBQUUsYUFBYSxFQUFFLHVCQUFqQjtVQUEwQyxPQUFPLEVBQUU7UUFBbkQsQ0FMUSxDQUZaO1FBU0UsU0FBUyxFQUFFLENBVGI7UUFVRSxHQUFHLEVBQUUsSUFWUDtRQVdFLFVBQVUsRUFBRSxDQUFDLENBWGY7UUFZRSxRQUFRLEVBQUUsQ0FDUjtVQUNFLGFBQWEsRUFBRTtRQURqQixDQURRLEVBSVIsQ0FBQyxDQUFDLHFCQUpNO01BWlosQ0F6Q1EsRUE0RFI7UUFDRSxhQUFhLEVBQUUsV0FEakI7UUFFRSxTQUFTLEVBQUUsQ0FGYjtRQUdFLEdBQUcsRUFBRSxHQUhQO1FBSUUsT0FBTyxFQUFFLE1BSlg7UUFLRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMscUJBQUg7TUFMWixDQTVEUSxFQW1FUjtRQUNFLGFBQWEsRUFBRSxLQURqQjtRQUVFLFNBQVMsRUFBRSxDQUZiO1FBR0UsR0FBRyxFQUFFLEdBSFA7UUFJRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMscUJBQUg7TUFKWixDQW5FUSxFQXlFUixDQXpFUSxFQTBFUixDQTFFUTtJQUpMLENBQVA7RUFpRkQsQ0FsSkQ7QUFtSkQsQ0FySkQsRUFGRjtBQXlKQSxJQUFJLENBQUMsZ0JBQUwsQ0FDRSxjQURGLEVBRUcsWUFBTTtFQUNMOztFQUNBLE9BQU8sVUFBQSxDQUFDO0lBQUEsT0FBSztNQUNYLElBQUksRUFBRSxjQURLO01BRVgsV0FBVyxFQUFFLEtBRkY7TUFHWCxRQUFRLEVBQUUsQ0FDUjtRQUNFLEtBQUssRUFBRSxhQURUO1FBRUUsR0FBRyxFQUFFLEtBRlA7UUFHRSxXQUFXLEVBQUUsS0FIZjtRQUlFLFFBQVEsRUFBRSxDQUNSO1VBQUUsS0FBSyxFQUFFLE1BQVQ7VUFBaUIsR0FBRyxFQUFFLE1BQXRCO1VBQThCLElBQUksRUFBRSxDQUFDO1FBQXJDLENBRFEsRUFFUjtVQUFFLEtBQUssRUFBRSxJQUFUO1VBQWUsR0FBRyxFQUFFLEdBQXBCO1VBQXlCLElBQUksRUFBRSxDQUFDO1FBQWhDLENBRlEsRUFHUjtVQUFFLEtBQUssRUFBRSxJQUFUO1VBQWUsR0FBRyxFQUFFLEdBQXBCO1VBQXlCLElBQUksRUFBRSxDQUFDO1FBQWhDLENBSFEsRUFJUixDQUFDLENBQUMsT0FBRixDQUFVLENBQUMsQ0FBQyxnQkFBWixFQUE4QjtVQUM1QixPQUFPLEVBQUUsSUFEbUI7VUFFNUIsU0FBUyxFQUFFLElBRmlCO1VBRzVCLFFBQVEsRUFBRSxJQUhrQjtVQUk1QixJQUFJLEVBQUUsQ0FBQztRQUpxQixDQUE5QixDQUpRLEVBVVIsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFDLENBQUMsaUJBQVosRUFBK0I7VUFDN0IsT0FBTyxFQUFFLElBRG9CO1VBRTdCLFNBQVMsRUFBRSxJQUZrQjtVQUc3QixRQUFRLEVBQUUsSUFIbUI7VUFJN0IsSUFBSSxFQUFFLENBQUM7UUFKc0IsQ0FBL0IsQ0FWUTtNQUpaLENBRFE7SUFIQyxDQUFMO0VBQUEsQ0FBUjtBQTRCRCxDQTlCRCxFQUZGO0FBa0NBLElBQUksQ0FBQyxnQkFBTCxDQUNFLFdBREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsT0FBTyxVQUFBLENBQUM7SUFBQSxPQUFLO01BQ1gsSUFBSSxFQUFFLFlBREs7TUFFWCxPQUFPLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxDQUZFO01BR1gsaUJBQWlCLEVBQUUsQ0FBQztJQUhULENBQUw7RUFBQSxDQUFSO0FBS0QsQ0FQRCxFQUZGO0FBV0EsSUFBSSxDQUFDLGdCQUFMLENBQ0UsWUFERixFQUVHLFlBQU07RUFDTDs7RUFDQSxPQUFPLFVBQUEsQ0FBQyxFQUFJO0lBQ1YsSUFBSSxDQUFDLEdBQUcsWUFBUjtJQUFBLElBQ0UsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFKLEdBQWEsQ0FEbkI7SUFBQSxJQUVFLENBQUMsR0FBRyxNQUFNLENBQU4sR0FBVSxjQUZoQjtJQUFBLElBR0UsQ0FBQyxHQUFHLGlDQUhOO0lBQUEsSUFJRSxDQUFDLEdBQUcsOEJBSk47SUFBQSxJQUtFLENBQUMsR0FBRztNQUNGLEdBQUcsRUFBRSxDQURIO01BRUYsU0FBUyxFQUFFLENBRlQ7TUFHRixNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUUsUUFETDtRQUVOLEdBQUcsRUFBRSxHQUZDO1FBR04sU0FBUyxFQUFFLENBSEw7UUFJTixRQUFRLEVBQUUsQ0FDUjtVQUNFLEtBQUssRUFBRTtRQURULENBRFEsRUFJUjtVQUFFLEtBQUssRUFBRTtRQUFULENBSlE7TUFKSjtJQUhOLENBTE47SUFvQkEsT0FBTztNQUNMLElBQUksRUFBRSxhQUREO01BRUwsZ0JBQWdCLEVBQUUsQ0FBQyxDQUZkO01BR0wsT0FBTyxFQUFFLElBSEo7TUFJTCxRQUFRLEVBQUUsQ0FDUixDQUFDLENBQUMsT0FBRixDQUFVLFdBQVYsRUFBdUIsR0FBdkIsQ0FEUSxFQUVSO1FBQ0UsV0FBVyxFQUFFLENBQUMsQ0FEaEI7UUFFRSxRQUFRLEVBQUUsQ0FDUjtVQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBYjtVQUFnQixTQUFTLEVBQUU7UUFBM0IsQ0FEUSxFQUVSO1VBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxZQUFiO1VBQTJCLFNBQVMsRUFBRTtRQUF0QyxDQUZRLENBRlo7UUFNRSxRQUFRLEVBQUUsQ0FDUjtVQUFFLFNBQVMsRUFBRSxNQUFiO1VBQXFCLEtBQUssRUFBRSxDQUE1QjtVQUErQixVQUFVLEVBQUUsQ0FBQyxDQUE1QztVQUErQyxTQUFTLEVBQUU7UUFBMUQsQ0FEUSxDQU5aO1FBU0UsTUFBTSxFQUFFO01BVFYsQ0FGUSxFQWFSO1FBQ0UsS0FBSyxFQUFFLENBQUMsR0FBRyxDQURiO1FBRUUsV0FBVyxFQUFFLENBQUMsQ0FGaEI7UUFHRSxTQUFTLEVBQUUsQ0FIYjtRQUlFLFFBQVEsRUFBRSxDQUNSO1VBQUUsU0FBUyxFQUFFLE1BQWI7VUFBcUIsS0FBSyxFQUFFLENBQTVCO1VBQStCLFVBQVUsRUFBRSxDQUFDLENBQTVDO1VBQStDLFNBQVMsRUFBRTtRQUExRCxDQURRLENBSlo7UUFPRSxNQUFNLEVBQUU7TUFQVixDQWJRLEVBc0JSO1FBQUUsU0FBUyxFQUFFLE1BQWI7UUFBcUIsU0FBUyxFQUFFLENBQWhDO1FBQW1DLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBSixHQUFRO01BQWxELENBdEJRO0lBSkwsQ0FBUDtFQTZCRCxDQWxERDtBQW1ERCxDQXJERCxFQUZGO0FBeURBLElBQUksQ0FBQyxnQkFBTCxDQUNFLFFBREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsT0FBTyxVQUFBLENBQUMsRUFBSTtJQUNWLElBQU0sQ0FBQyxHQUFHO01BQ04sUUFBUSxFQUFFLHFCQURKO01BRU4sT0FBTyxFQUFFLENBQ1AsS0FETyxFQUVQLElBRk8sRUFHUCxRQUhPLEVBSVAsT0FKTyxFQUtQLE9BTE8sRUFNUCxPQU5PLEVBT1AsT0FQTyxFQVFQLFVBUk8sRUFTUCxLQVRPLEVBVVAsS0FWTyxFQVdQLE1BWE8sRUFZUCxNQVpPLEVBYVAsUUFiTyxFQWNQLFNBZE8sRUFlUCxLQWZPLEVBZ0JQLE1BaEJPLEVBaUJQLFFBakJPLEVBa0JQLElBbEJPLEVBbUJQLFFBbkJPLEVBb0JQLElBcEJPLEVBcUJQLElBckJPLEVBc0JQLFFBdEJPLEVBdUJQLGFBdkJPLEVBd0JQLEtBeEJPLEVBeUJQLElBekJPLEVBMEJQLE1BMUJPLEVBMkJQLE9BM0JPLEVBNEJQLFFBNUJPLEVBNkJQLEtBN0JPLEVBOEJQLE9BOUJPLEVBK0JQLE1BL0JPLEVBZ0NQLE9BaENPLENBRkg7TUFvQ04sUUFBUSxFQUFFLENBQ1IsWUFEUSxFQUVSLEtBRlEsRUFHUixLQUhRLEVBSVIsS0FKUSxFQUtSLE9BTFEsRUFNUixLQU5RLEVBT1IsTUFQUSxFQVFSLFlBUlEsRUFTUixXQVRRLEVBVVIsT0FWUSxFQVdSLFVBWFEsRUFZUixLQVpRLEVBYVIsYUFiUSxFQWNSLFNBZFEsRUFlUixTQWZRLEVBZ0JSLFNBaEJRLEVBaUJSLE1BakJRLEVBa0JSLEtBbEJRLEVBbUJSLFFBbkJRLEVBb0JSLFdBcEJRLEVBcUJSLE1BckJRLEVBc0JSLE1BdEJRLEVBdUJSLFFBdkJRLEVBd0JSLE9BeEJRLEVBeUJSLFFBekJRLEVBMEJSLFdBMUJRLEVBMkJSLFNBM0JRLEVBNEJSLFNBNUJRLEVBNkJSLFNBN0JRLEVBOEJSLE1BOUJRLEVBK0JSLE1BL0JRLEVBZ0NSLEtBaENRLEVBaUNSLElBakNRLEVBa0NSLE9BbENRLEVBbUNSLEtBbkNRLEVBb0NSLFlBcENRLEVBcUNSLFlBckNRLEVBc0NSLE1BdENRLEVBdUNSLEtBdkNRLEVBd0NSLE1BeENRLEVBeUNSLFFBekNRLEVBMENSLEtBMUNRLEVBMkNSLEtBM0NRLEVBNENSLFlBNUNRLEVBNkNSLEtBN0NRLEVBOENSLE1BOUNRLEVBK0NSLFFBL0NRLEVBZ0RSLEtBaERRLEVBaURSLE1BakRRLEVBa0RSLEtBbERRLEVBbURSLEtBbkRRLEVBb0RSLE9BcERRLEVBcURSLFVBckRRLEVBc0RSLE9BdERRLEVBdURSLE1BdkRRLEVBd0RSLFVBeERRLEVBeURSLE9BekRRLEVBMERSLEtBMURRLEVBMkRSLFNBM0RRLEVBNERSLE9BNURRLEVBNkRSLFFBN0RRLEVBOERSLGNBOURRLEVBK0RSLEtBL0RRLEVBZ0VSLEtBaEVRLEVBaUVSLE9BakVRLEVBa0VSLE9BbEVRLEVBbUVSLE1BbkVRLEVBb0VSLE1BcEVRLEVBcUVSLEtBckVRLENBcENKO01BMkdOLE9BQU8sRUFBRSxDQUNQLFdBRE8sRUFFUCxVQUZPLEVBR1AsT0FITyxFQUlQLE1BSk8sRUFLUCxnQkFMTyxFQU1QLE1BTk8sQ0EzR0g7TUFtSE4sSUFBSSxFQUFFLENBQ0osS0FESSxFQUVKLFVBRkksRUFHSixXQUhJLEVBSUosTUFKSSxFQUtKLE1BTEksRUFNSixTQU5JLEVBT0osU0FQSSxFQVFKLFVBUkksRUFTSixVQVRJLEVBVUosS0FWSSxFQVdKLE9BWEksRUFZSixNQVpJLEVBYUosT0FiSTtJQW5IQSxDQUFWO0lBQUEsSUFtSUUsQ0FBQyxHQUFHO01BQUUsU0FBUyxFQUFFLE1BQWI7TUFBcUIsS0FBSyxFQUFFO0lBQTVCLENBbklOO0lBQUEsSUFvSUUsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLE9BRFQ7TUFFRixLQUFLLEVBQUUsSUFGTDtNQUdGLEdBQUcsRUFBRSxJQUhIO01BSUYsUUFBUSxFQUFFLENBSlI7TUFLRixPQUFPLEVBQUU7SUFMUCxDQXBJTjtJQUFBLElBMklFLENBQUMsR0FBRztNQUFFLEtBQUssRUFBRSxNQUFUO01BQWlCLFNBQVMsRUFBRTtJQUE1QixDQTNJTjtJQUFBLElBNElFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxRQURUO01BRUYsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFILENBRlI7TUFHRixRQUFRLEVBQUUsQ0FDUjtRQUNFLEtBQUssRUFBRSx3Q0FEVDtRQUVFLEdBQUcsRUFBRSxLQUZQO1FBR0UsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFILEVBQXFCLENBQXJCLENBSFo7UUFJRSxTQUFTLEVBQUU7TUFKYixDQURRLEVBT1I7UUFDRSxLQUFLLEVBQUUsd0NBRFQ7UUFFRSxHQUFHLEVBQUUsS0FGUDtRQUdFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSCxFQUFxQixDQUFyQixDQUhaO1FBSUUsU0FBUyxFQUFFO01BSmIsQ0FQUSxFQWFSO1FBQ0UsS0FBSyxFQUFFLDZCQURUO1FBRUUsR0FBRyxFQUFFLEtBRlA7UUFHRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQUgsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBM0I7TUFIWixDQWJRLEVBa0JSO1FBQ0UsS0FBSyxFQUFFLDZCQURUO1FBRUUsR0FBRyxFQUFFLEtBRlA7UUFHRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQUgsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBM0I7TUFIWixDQWxCUSxFQXVCUjtRQUFFLEtBQUssRUFBRSxjQUFUO1FBQXlCLEdBQUcsRUFBRSxHQUE5QjtRQUFtQyxTQUFTLEVBQUU7TUFBOUMsQ0F2QlEsRUF3QlI7UUFBRSxLQUFLLEVBQUUsY0FBVDtRQUF5QixHQUFHLEVBQUUsR0FBOUI7UUFBbUMsU0FBUyxFQUFFO01BQTlDLENBeEJRLEVBeUJSO1FBQ0UsS0FBSyxFQUFFLDJCQURUO1FBRUUsR0FBRyxFQUFFO01BRlAsQ0F6QlEsRUE2QlI7UUFBRSxLQUFLLEVBQUUsMkJBQVQ7UUFBc0MsR0FBRyxFQUFFO01BQTNDLENBN0JRLEVBOEJSO1FBQ0UsS0FBSyxFQUFFLDJCQURUO1FBRUUsR0FBRyxFQUFFLEdBRlA7UUFHRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQUgsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7TUFIWixDQTlCUSxFQW1DUjtRQUNFLEtBQUssRUFBRSwyQkFEVDtRQUVFLEdBQUcsRUFBRSxHQUZQO1FBR0UsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFILEVBQXFCLENBQXJCLEVBQXdCLENBQXhCO01BSFosQ0FuQ1EsRUF3Q1IsQ0FBQyxDQUFDLGdCQXhDTSxFQXlDUixDQUFDLENBQUMsaUJBekNNO0lBSFIsQ0E1SU47SUFBQSxJQTJMRSxDQUFDLEdBQUcsaUJBM0xOO0lBQUEsSUE0TEUsQ0FBQyxrQkFBVyxDQUFYLG9CQUFzQixDQUF0QixtQkFBZ0MsQ0FBaEMsU0E1TEg7SUFBQSxJQTZMRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLFNBQVMsRUFBRSxDQUZUO01BR0YsUUFBUSxFQUFFLENBQ1I7UUFDRSxLQUFLLGlCQUFVLENBQVYsZ0JBQWlCLENBQWpCLHlCQUFpQyxDQUFqQztNQURQLENBRFEsRUFJUjtRQUFFLEtBQUssYUFBTSxDQUFOO01BQVAsQ0FKUSxFQUtSO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0FMUSxFQVFSO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0FSUSxFQVdSO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0FYUSxFQVlSO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0FaUSxFQWVSO1FBQUUsS0FBSyxnQkFBUyxDQUFUO01BQVAsQ0FmUTtJQUhSLENBN0xOO0lBQUEsSUFrTkUsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLFNBRFQ7TUFFRixLQUFLLEdBQ0QsQ0FBQyxHQUFHLFNBQUwsRUFDQTtRQUFBLG9DQUFJLENBQUo7VUFBSSxDQUFKO1FBQUE7O1FBQUEsT0FDQyxDQUFDLENBQ0UsR0FESCxDQUNPLFVBQUEsQ0FBQztVQUFBLE9BQ0gsVUFBQSxDQUFDO1lBQUEsT0FBSyxDQUFDLEdBQUksWUFBWSxPQUFPLENBQW5CLEdBQXVCLENBQXZCLEdBQTJCLENBQUMsQ0FBQyxNQUFqQyxHQUEyQyxJQUFqRDtVQUFBLENBQUYsQ0FBMEQsQ0FBMUQsQ0FESTtRQUFBLENBRFIsRUFJRyxJQUpILENBSVEsRUFKUixDQUREO01BQUEsQ0FBRCxDQUtlLEtBTGYsRUFLc0IsQ0FMdEIsRUFLeUIsR0FMekIsQ0FGRyxDQUZIO01BVUYsR0FBRyxFQUFFLEdBVkg7TUFXRixRQUFRLEVBQUUsQ0FYUjtNQVlGLFFBQVEsRUFBRSxDQUNSO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0FEUSxFQUVSO1FBQUUsS0FBSyxFQUFFLEdBQVQ7UUFBYyxHQUFHLEVBQUUsTUFBbkI7UUFBMkIsY0FBYyxFQUFFLENBQUM7TUFBNUMsQ0FGUTtJQVpSLENBbE5OO0lBQUEsSUFtT0UsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLFFBRFQ7TUFFRixRQUFRLEVBQUUsQ0FDUjtRQUFFLFNBQVMsRUFBRSxFQUFiO1FBQWlCLEtBQUssRUFBRSxTQUF4QjtRQUFtQyxJQUFJLEVBQUUsQ0FBQztNQUExQyxDQURRLEVBRVI7UUFDRSxLQUFLLEVBQUUsSUFEVDtRQUVFLEdBQUcsRUFBRSxJQUZQO1FBR0UsWUFBWSxFQUFFLENBQUMsQ0FIakI7UUFJRSxVQUFVLEVBQUUsQ0FBQyxDQUpmO1FBS0UsUUFBUSxFQUFFLENBTFo7UUFNRSxRQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLENBQUMsQ0FBQyxpQkFBcEI7TUFOWixDQUZRO0lBRlIsQ0FuT047SUFpUEEsSUFBSSxDQUFKO0lBQ0EsT0FDRyxDQUFDLENBQUMsUUFBRixHQUFhLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWQsRUFDQTtNQUNFLElBQUksRUFBRSxRQURSO01BRUUsT0FBTyxFQUFFLENBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxTQUFkLENBRlg7TUFHRSxRQUFRLEVBQUUsQ0FIWjtNQUlFLE9BQU8sRUFBRSxnQkFKWDtNQUtFLFFBQVEsRUFBRSxDQUNSLENBRFEsRUFFUixDQUZRLEVBR1I7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQUhRLEVBSVI7UUFDRSxhQUFhLEVBQUUsSUFEakI7UUFFRSxTQUFTLEVBQUU7TUFGYixDQUpRLEVBUVIsQ0FSUSxFQVNSLENBVFEsRUFVUixDQUFDLENBQUMsaUJBVk0sRUFXUjtRQUNFLFFBQVEsRUFBRSxDQUNSO1VBQ0UsU0FBUyxFQUFFLFVBRGI7VUFFRSxhQUFhLEVBQUU7UUFGakIsQ0FEUSxFQUtSO1VBQUUsU0FBUyxFQUFFLE9BQWI7VUFBc0IsYUFBYSxFQUFFO1FBQXJDLENBTFEsQ0FEWjtRQVFFLEdBQUcsRUFBRSxHQVJQO1FBU0UsT0FBTyxFQUFFLFdBVFg7UUFVRSxRQUFRLEVBQUUsQ0FDUixDQUFDLENBQUMscUJBRE0sRUFFUixDQUZRLEVBR1I7VUFBRSxLQUFLLEVBQUUsSUFBVDtVQUFlLGNBQWMsRUFBRSxDQUFDLENBQWhDO1VBQW1DLFFBQVEsRUFBRTtRQUE3QyxDQUhRO01BVlosQ0FYUSxFQTJCUjtRQUNFLFNBQVMsRUFBRSxNQURiO1FBRUUsS0FBSyxFQUFFLFVBRlQ7UUFHRSxHQUFHLEVBQUUsU0FIUDtRQUlFLFFBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtNQUpaLENBM0JRO0lBTFosQ0FGRjtFQTJDRCxDQTlSRDtBQStSRCxDQWpTRCxFQUZGO0FBcVNBLElBQUksQ0FBQyxnQkFBTCxDQUNFLGFBREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsT0FBTyxVQUFBLENBQUM7SUFBQSxPQUFLO01BQ1gsT0FBTyxFQUFFLENBQUMsT0FBRCxDQURFO01BRVgsUUFBUSxFQUFFLENBQ1I7UUFDRSxTQUFTLEVBQUUsTUFEYjtRQUVFLE1BQU0sRUFBRTtVQUFFLEdBQUcsRUFBRSxLQUFQO1VBQWMsTUFBTSxFQUFFO1lBQUUsR0FBRyxFQUFFLEdBQVA7WUFBWSxXQUFXLEVBQUU7VUFBekI7UUFBdEIsQ0FGVjtRQUdFLFFBQVEsRUFBRSxDQUNSO1VBQUUsS0FBSyxFQUFFO1FBQVQsQ0FEUSxFQUVSO1VBQ0UsS0FBSyxFQUFFO1FBRFQsQ0FGUTtNQUhaLENBRFE7SUFGQyxDQUFMO0VBQUEsQ0FBUjtBQWVELENBakJELEVBRkY7QUFxQkEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsR0FERixFQUVHLFlBQU07RUFDTDs7RUFDQSxTQUFTLENBQVQsR0FBaUI7SUFBQSxvQ0FBSCxDQUFHO01BQUgsQ0FBRztJQUFBOztJQUNmLE9BQU8sQ0FBQyxDQUNMLEdBREksQ0FDQSxVQUFBLENBQUMsRUFBSTtNQUNSLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBTCxJQUFXLFlBQVksT0FBTyxDQUFuQixHQUF1QixDQUF2QixHQUEyQixDQUFDLENBQUMsTUFBeEMsR0FBa0QsSUFBekQ7TUFDQSxJQUFJLENBQUo7SUFDRCxDQUpJLEVBS0osSUFMSSxDQUtDLEVBTEQsQ0FBUDtFQU1EOztFQUNELE9BQU8sVUFBQSxDQUFDLEVBQUk7SUFDVixJQUFNLENBQUMsR0FBRyxzREFBVjtJQUNBLE9BQU87TUFDTCxJQUFJLEVBQUUsR0FERDtNQUVMLE9BQU8sRUFBRSxJQUZKO01BR0wsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLENBREY7UUFFUixPQUFPLEVBQUUsaURBRkQ7UUFHUixPQUFPLEVBQ0wsdUZBSk07UUFLUixRQUFRLEVBQ047TUFOTSxDQUhMO01BV0wsa0JBQWtCLEVBQUUsQ0FDbEIsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFVO1FBQ1IsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFQLEVBQW9CO1FBQ3BCLElBQUksQ0FBQyxDQUFDLE1BQU4sRUFBYyxNQUFNLEtBQUssQ0FBQyx3Q0FBRCxDQUFYO1FBQ2QsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLENBQWxCLENBQVY7UUFDQSxNQUFNLENBQUMsSUFBUCxDQUFZLENBQVosRUFBZSxPQUFmLENBQXVCLFVBQUEsQ0FBQyxFQUFJO1VBQzFCLE9BQU8sQ0FBQyxDQUFDLENBQUQsQ0FBUjtRQUNELENBRkQsR0FHRyxDQUFDLENBQUMsS0FBRixHQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBSCxFQUFnQixDQUFDLENBQUMsS0FBRCxFQUFRLENBQUMsQ0FBQyxLQUFWLEVBQWlCLEdBQWpCLENBQWpCLENBSGQsRUFJRyxDQUFDLENBQUMsTUFBRixHQUFXO1VBQ1YsU0FBUyxFQUFFLENBREQ7VUFFVixRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBUCxDQUFjLENBQWQsRUFBaUI7WUFBRSxVQUFVLEVBQUUsQ0FBQztVQUFmLENBQWpCLENBQUQ7UUFGQSxDQUpkLEVBUUcsQ0FBQyxDQUFDLFNBQUYsR0FBYyxDQVJqQixFQVNFLE9BQU8sQ0FBQyxDQUFDLFdBVFg7TUFVRCxDQWZpQixDQVhmO01BNEJMLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxPQUFGLENBQVUsSUFBVixFQUFnQixHQUFoQixFQUFxQjtRQUNuQixRQUFRLEVBQUUsQ0FDUjtVQUNFLFNBQVMsRUFBRSxRQURiO1VBRUUsS0FBSyxFQUFFLFdBRlQ7VUFHRSxNQUFNLEVBQUU7WUFDTixRQUFRLEVBQUUsQ0FDUjtjQUFFLEtBQUssRUFBRTtZQUFULENBRFEsRUFFUjtjQUFFLEtBQUssRUFBRSxxQkFBVDtjQUFnQyxVQUFVLEVBQUUsQ0FBQztZQUE3QyxDQUZRLEVBR1I7Y0FBRSxLQUFLLEVBQUUsSUFBVDtjQUFlLEdBQUcsRUFBRSxHQUFwQjtjQUF5QixZQUFZLEVBQUUsQ0FBQztZQUF4QyxDQUhRO1VBREo7UUFIVixDQURRLEVBWVI7VUFDRSxTQUFTLEVBQUUsUUFEYjtVQUVFLEtBQUssRUFBRSxRQUZUO1VBR0UsR0FBRyxFQUFFLEdBSFA7VUFJRSxRQUFRLEVBQUUsQ0FDUjtZQUNFLFNBQVMsRUFBRSxVQURiO1lBRUUsUUFBUSxFQUFFLENBQ1I7Y0FBRSxLQUFLLEVBQUU7WUFBVCxDQURRLEVBRVI7Y0FDRSxLQUFLLEVBQUU7WUFEVCxDQUZRLENBRlo7WUFRRSxVQUFVLEVBQUUsQ0FBQztVQVJmLENBRFE7UUFKWixDQVpRLEVBNkJSO1VBQUUsU0FBUyxFQUFFLFFBQWI7VUFBdUIsS0FBSyxFQUFFO1FBQTlCLENBN0JRLEVBOEJSO1VBQUUsU0FBUyxFQUFFLGNBQWI7VUFBNkIsS0FBSyxFQUFFO1FBQXBDLENBOUJRO01BRFMsQ0FBckIsQ0FEUSxFQW1DUixDQUFDLENBQUMsaUJBbkNNLEVBb0NSO1FBQ0UsU0FBUyxFQUFFLFFBRGI7UUFFRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQUgsQ0FGWjtRQUdFLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxpQkFBRixDQUFvQjtVQUFFLEtBQUssRUFBRSxhQUFUO1VBQXdCLEdBQUcsRUFBRTtRQUE3QixDQUFwQixDQURRLEVBRVIsQ0FBQyxDQUFDLGlCQUFGLENBQW9CO1VBQUUsS0FBSyxFQUFFLGFBQVQ7VUFBd0IsR0FBRyxFQUFFO1FBQTdCLENBQXBCLENBRlEsRUFHUixDQUFDLENBQUMsaUJBQUYsQ0FBb0I7VUFBRSxLQUFLLEVBQUUsYUFBVDtVQUF3QixHQUFHLEVBQUU7UUFBN0IsQ0FBcEIsQ0FIUSxFQUlSLENBQUMsQ0FBQyxpQkFBRixDQUFvQjtVQUFFLEtBQUssRUFBRSxhQUFUO1VBQXdCLEdBQUcsRUFBRTtRQUE3QixDQUFwQixDQUpRLEVBS1IsQ0FBQyxDQUFDLGlCQUFGLENBQW9CO1VBQUUsS0FBSyxFQUFFLGFBQVQ7VUFBd0IsR0FBRyxFQUFFO1FBQTdCLENBQXBCLENBTFEsRUFNUixDQUFDLENBQUMsaUJBQUYsQ0FBb0I7VUFBRSxLQUFLLEVBQUUsYUFBVDtVQUF3QixHQUFHLEVBQUU7UUFBN0IsQ0FBcEIsQ0FOUSxFQU9SO1VBQUUsS0FBSyxFQUFFLEdBQVQ7VUFBYyxHQUFHLEVBQUUsR0FBbkI7VUFBd0IsU0FBUyxFQUFFO1FBQW5DLENBUFEsRUFRUjtVQUFFLEtBQUssRUFBRSxHQUFUO1VBQWMsR0FBRyxFQUFFLEdBQW5CO1VBQXdCLFNBQVMsRUFBRTtRQUFuQyxDQVJRO01BSFosQ0FwQ1EsRUFrRFI7UUFDRSxTQUFTLEVBQUUsUUFEYjtRQUVFLFNBQVMsRUFBRSxDQUZiO1FBR0UsV0FBVyxFQUFFLGtCQUhmO1FBSUUsUUFBUSxFQUFFLENBQ1I7VUFDRSxLQUFLLEVBQUU7UUFEVCxDQURRLEVBSVI7VUFDRSxLQUFLLEVBQUU7UUFEVCxDQUpRLEVBT1I7VUFDRSxLQUFLLEVBQUU7UUFEVCxDQVBRO01BSlosQ0FsRFEsRUFrRVI7UUFBRSxLQUFLLEVBQUUsR0FBVDtRQUFjLEdBQUcsRUFBRTtNQUFuQixDQWxFUSxFQW1FUjtRQUNFLEtBQUssRUFBRSxDQUFDLENBQUMsdUJBQUQsRUFBMEIsWUFBMUI7TUFEVixDQW5FUSxFQXNFUjtRQUNFLEtBQUssRUFBRSxHQURUO1FBRUUsR0FBRyxFQUFFLEdBRlA7UUFHRSxRQUFRLEVBQUUsQ0FDUjtVQUNFLEtBQUssRUFBRTtRQURULENBRFE7TUFIWixDQXRFUTtJQTVCTCxDQUFQO0VBNkdELENBL0dEO0FBZ0hELENBMUhELEVBRkY7QUE4SEEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsTUFERixFQUVHLFlBQU07RUFDTDs7RUFDQSxTQUFTLENBQVQsR0FBaUI7SUFBQSxvQ0FBSCxDQUFHO01BQUgsQ0FBRztJQUFBOztJQUNmLE9BQU8sQ0FBQyxDQUNMLEdBREksQ0FDQSxVQUFBLENBQUMsRUFBSTtNQUNSLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBTCxJQUFXLFlBQVksT0FBTyxDQUFuQixHQUF1QixDQUF2QixHQUEyQixDQUFDLENBQUMsTUFBeEMsR0FBa0QsSUFBekQ7TUFDQSxJQUFJLENBQUo7SUFDRCxDQUpJLEVBS0osSUFMSSxDQUtDLEVBTEQsQ0FBUDtFQU1EOztFQUNELE9BQU8sVUFBQSxDQUFDLEVBQUk7SUFDVixJQUFNLENBQUMsR0FDSCxvRkFESjtJQUFBLElBRUUsQ0FBQyxHQUFHO01BQ0YsT0FBTyxFQUNMLHNQQUZBO01BR0YsUUFBUSxFQUFFLGFBSFI7TUFJRixPQUFPLEVBQUU7SUFKUCxDQUZOO0lBQUEsSUFRRSxDQUFDLEdBQUc7TUFBRSxTQUFTLEVBQUUsUUFBYjtNQUF1QixLQUFLLEVBQUU7SUFBOUIsQ0FSTjtJQUFBLElBU0UsQ0FBQyxHQUFHO01BQUUsS0FBSyxFQUFFLElBQVQ7TUFBZSxHQUFHLEVBQUU7SUFBcEIsQ0FUTjtJQUFBLElBVUUsQ0FBQyxHQUFHLENBQ0YsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQjtNQUFFLFFBQVEsRUFBRSxDQUFDLENBQUQ7SUFBWixDQUFwQixDQURFLEVBRUYsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxTQUFWLEVBQXFCLE9BQXJCLEVBQThCO01BQUUsUUFBUSxFQUFFLENBQUMsQ0FBRCxDQUFaO01BQWlCLFNBQVMsRUFBRTtJQUE1QixDQUE5QixDQUZFLEVBR0YsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxVQUFWLEVBQXNCLE1BQXRCLENBSEUsQ0FWTjtJQUFBLElBZUUsQ0FBQyxHQUFHO01BQUUsU0FBUyxFQUFFLE9BQWI7TUFBc0IsS0FBSyxFQUFFLEtBQTdCO01BQW9DLEdBQUcsRUFBRSxJQUF6QztNQUErQyxRQUFRLEVBQUU7SUFBekQsQ0FmTjtJQUFBLElBZ0JFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxRQURUO01BRUYsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFILEVBQXFCLENBQXJCLENBRlI7TUFHRixRQUFRLEVBQUUsQ0FDUjtRQUNFLEtBQUssRUFBRSxHQURUO1FBRUUsR0FBRyxFQUFFO01BRlAsQ0FEUSxFQUtSO1FBQUUsS0FBSyxFQUFFLEdBQVQ7UUFBYyxHQUFHLEVBQUU7TUFBbkIsQ0FMUSxFQU1SO1FBQUUsS0FBSyxFQUFFLEdBQVQ7UUFBYyxHQUFHLEVBQUU7TUFBbkIsQ0FOUSxFQU9SO1FBQUUsS0FBSyxFQUFFLGFBQVQ7UUFBd0IsR0FBRyxFQUFFO01BQTdCLENBUFEsRUFRUjtRQUFFLEtBQUssRUFBRSxhQUFUO1FBQXdCLEdBQUcsRUFBRTtNQUE3QixDQVJRLEVBU1I7UUFBRSxLQUFLLEVBQUUsYUFBVDtRQUF3QixHQUFHLEVBQUU7TUFBN0IsQ0FUUSxFQVVSO1FBQ0UsS0FBSyxFQUFFLFlBRFQ7UUFFRSxHQUFHLEVBQUU7TUFGUCxDQVZRLEVBY1I7UUFBRSxLQUFLLEVBQUUsYUFBVDtRQUF3QixHQUFHLEVBQUU7TUFBN0IsQ0FkUSxFQWVSO1FBQUUsS0FBSyxFQUFFLFlBQVQ7UUFBdUIsR0FBRyxFQUFFO01BQTVCLENBZlEsRUFnQlI7UUFBRSxLQUFLLEVBQUUsWUFBVDtRQUF1QixHQUFHLEVBQUU7TUFBNUIsQ0FoQlEsRUFpQlI7UUFBRSxLQUFLLEVBQUUsYUFBVDtRQUF3QixHQUFHLEVBQUU7TUFBN0IsQ0FqQlEsRUFrQlI7UUFDRSxLQUFLLEVBQUU7TUFEVCxDQWxCUSxFQXFCUjtRQUFFLEtBQUssRUFBRTtNQUFULENBckJRLEVBc0JSO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0F0QlEsRUF5QlI7UUFDRSxLQUFLLEVBQUU7TUFEVCxDQXpCUSxFQTRCUjtRQUNFLEtBQUssRUFBRTtNQURULENBNUJRLEVBK0JSO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0EvQlEsRUFnQ1I7UUFDRSxLQUFLLEVBQUUsdUNBRFQ7UUFFRSxXQUFXLEVBQUUsQ0FBQyxDQUZoQjtRQUdFLFFBQVEsRUFBRSxDQUNSO1VBQ0UsS0FBSyxFQUFFO1FBRFQsQ0FEUSxFQUlSLENBQUMsQ0FBQyxpQkFBRixDQUFvQjtVQUNsQixLQUFLLEVBQUUsT0FEVztVQUVsQixHQUFHLEVBQUUsT0FGYTtVQUdsQixRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQUgsRUFBcUIsQ0FBckI7UUFIUSxDQUFwQixDQUpRO01BSFosQ0FoQ1E7SUFIUixDQWhCTjtJQUFBLElBbUVFLENBQUMsR0FBRyxpQkFuRU47SUFBQSxJQW9FRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLFNBQVMsRUFBRSxDQUZUO01BR0YsUUFBUSxFQUFFLENBQ1I7UUFDRSxLQUFLLHVDQUFnQyxDQUFoQywyQkFBa0QsQ0FBbEQ7TUFEUCxDQURRLEVBSVI7UUFDRSxLQUFLLEVBQUU7TUFEVCxDQUpRLEVBT1I7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQVBRLEVBUVI7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQVJRLEVBU1I7UUFDRSxLQUFLLEVBQUU7TUFEVCxDQVRRLEVBWVI7UUFDRSxLQUFLLEVBQUU7TUFEVCxDQVpRO0lBSFIsQ0FwRU47SUFBQSxJQXdGRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLEtBQUssRUFBRSxLQUZMO01BR0YsR0FBRyxFQUFFLEtBSEg7TUFJRixVQUFVLEVBQUUsQ0FBQyxDQUpYO01BS0YsUUFBUSxFQUFFO0lBTFIsQ0F4Rk47SUFBQSxJQStGRSxDQUFDLEdBQUcsQ0FDRixDQURFLEVBRUY7TUFDRSxTQUFTLEVBQUUsT0FEYjtNQUVFLGFBQWEsRUFBRSxjQUZqQjtNQUdFLEdBQUcsRUFBRSxLQUhQO01BSUUsT0FBTyxFQUFFLEdBSlg7TUFLRSxRQUFRLEVBQUUsQ0FDUixDQUFDLENBQUMsT0FBRixDQUFVLENBQUMsQ0FBQyxVQUFaLEVBQXdCO1FBQ3RCLEtBQUssRUFBRTtNQURlLENBQXhCLENBRFEsRUFJUjtRQUNFLEtBQUssRUFBRSxPQURUO1FBRUUsUUFBUSxFQUFFLENBQ1I7VUFDRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsUUFBUixHQUFtQixNQUFuQixHQUE0QixDQUFDLENBQUMsUUFEdkM7VUFFRSxTQUFTLEVBQUU7UUFGYixDQURRO01BRlosQ0FKUSxFQWFSLE1BYlEsQ0FhRCxDQWJDO0lBTFosQ0FGRSxFQXNCRjtNQUNFLFNBQVMsRUFBRSxVQURiO01BRUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFELEdBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxlQUFULEVBQTJCLENBQUMsQ0FBQyxLQUFELEVBQVEsQ0FBUixFQUFXLEdBQVgsQ0FBeEMsRUFGVjtNQUdFLFNBQVMsRUFBRSxDQUhiO01BSUUsUUFBUSxFQUFFLEtBSlo7TUFLRSxHQUFHLEVBQUUsS0FMUDtNQU1FLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLFVBQVosRUFBd0I7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQUF4QixDQUFELEVBQXdDLENBQXhDLEVBQTJDLE1BQTNDLENBQWtELENBQWxEO0lBTlosQ0F0QkUsRUE4QkY7TUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQUYsR0FBYTtJQUF0QixDQTlCRSxFQStCRjtNQUNFLFNBQVMsRUFBRSxRQURiO01BRUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxtQkFBRixHQUF3QixXQUZqQztNQUdFLFNBQVMsRUFBRTtJQUhiLENBL0JFLEVBb0NGO01BQ0UsU0FBUyxFQUFFLFFBRGI7TUFFRSxLQUFLLEVBQUUsVUFGVDtNQUdFLFFBQVEsRUFBRSxDQUFDLENBQUQsRUFBSTtRQUFFLEtBQUssRUFBRTtNQUFULENBQUosQ0FIWjtNQUlFLFNBQVMsRUFBRTtJQUpiLENBcENFLEVBMENGLENBMUNFLEVBMkNGO01BQ0UsU0FBUyxFQUFFLFVBRGI7TUFFRSxLQUFLLEVBQUU7SUFGVCxDQTNDRSxFQStDRjtNQUNFLFNBQVMsRUFBRSxRQURiO01BRUUsS0FBSyxFQUFFLElBRlQ7TUFHRSxHQUFHLEVBQUUsSUFIUDtNQUlFLFNBQVMsRUFBRSxDQUpiO01BS0UsUUFBUSxFQUFFO0lBTFosQ0EvQ0UsRUFzREY7TUFDRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsY0FBUixHQUF5QixjQURsQztNQUVFLFFBQVEsRUFBRSxRQUZaO01BR0UsUUFBUSxFQUFFLENBQ1I7UUFDRSxTQUFTLEVBQUUsUUFEYjtRQUVFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSCxFQUFxQixDQUFyQixDQUZaO1FBR0UsT0FBTyxFQUFFLElBSFg7UUFJRSxRQUFRLEVBQUUsQ0FDUjtVQUNFLEtBQUssRUFBRSxHQURUO1VBRUUsR0FBRyxFQUFFO1FBRlAsQ0FEUSxFQUtSO1VBQUUsS0FBSyxFQUFFLE1BQVQ7VUFBaUIsR0FBRyxFQUFFO1FBQXRCLENBTFEsRUFNUjtVQUFFLEtBQUssRUFBRSxPQUFUO1VBQWtCLEdBQUcsRUFBRTtRQUF2QixDQU5RLEVBT1I7VUFBRSxLQUFLLEVBQUUsS0FBVDtVQUFnQixHQUFHLEVBQUU7UUFBckIsQ0FQUSxFQVFSO1VBQUUsS0FBSyxFQUFFLE9BQVQ7VUFBa0IsR0FBRyxFQUFFO1FBQXZCLENBUlE7TUFKWixDQURRLEVBZ0JSLE1BaEJRLENBZ0JELENBaEJDLEVBZ0JFLENBaEJGLENBSFo7TUFvQkUsU0FBUyxFQUFFO0lBcEJiLENBdERFLEVBNEVGLE1BNUVFLENBNEVLLENBNUVMLEVBNEVRLENBNUVSLENBL0ZOOztJQTRLQSxJQUFJLENBQUo7O0lBQ0UsQ0FBQyxDQUFDLFFBQUYsR0FBYSxDQUFkLEVBQW1CLENBQUMsQ0FBQyxRQUFGLEdBQWEsQ0FBaEM7SUFDRCxJQUFNLENBQUMsR0FBRyxDQUNSO01BQUUsS0FBSyxFQUFFLFFBQVQ7TUFBbUIsTUFBTSxFQUFFO1FBQUUsR0FBRyxFQUFFLEdBQVA7UUFBWSxRQUFRLEVBQUU7TUFBdEI7SUFBM0IsQ0FEUSxFQUVSO01BQ0UsU0FBUyxFQUFFLE1BRGI7TUFFRSxLQUFLLEVBQ0gsNkZBSEo7TUFJRSxNQUFNLEVBQUU7UUFBRSxHQUFHLEVBQUUsR0FBUDtRQUFZLFFBQVEsRUFBRTtNQUF0QjtJQUpWLENBRlEsQ0FBVjtJQVNBLE9BQ0UsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFWLEdBQ0E7TUFDRSxJQUFJLEVBQUUsTUFEUjtNQUVFLE9BQU8sRUFBRSxDQUFDLElBQUQsRUFBTyxTQUFQLEVBQWtCLFNBQWxCLEVBQTZCLE1BQTdCLEVBQXFDLEtBQXJDLENBRlg7TUFHRSxRQUFRLEVBQUUsQ0FIWjtNQUlFLE9BQU8sRUFBRSxNQUpYO01BS0UsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQUYsQ0FBVTtRQUFFLE1BQU0sRUFBRTtNQUFWLENBQVYsQ0FBRCxFQUNQLE1BRE8sQ0FDQSxDQURBLEVBRVAsTUFGTyxDQUVBLENBRkEsRUFHUCxNQUhPLENBR0EsQ0FIQTtJQUxaLENBRkY7RUFhRCxDQXJNRDtBQXNNRCxDQWhORCxFQUZGO0FBb05BLElBQUksQ0FBQyxnQkFBTCxDQUNFLE1BREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsT0FBTyxVQUFBLENBQUMsRUFBSTtJQUNWLElBQU0sQ0FBQyxHQUFHLHVDQUFWO0lBQUEsSUFDRSxDQUFDLEdBQ0Msc3BCQUZKO0lBR0EsT0FBTztNQUNMLElBQUksRUFBRSxNQUREO01BRUwsT0FBTyxFQUFFLENBQUMsSUFBRCxDQUZKO01BR0wsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFGLEdBQWEsSUFEZjtRQUVSLE9BQU8sRUFDTCwwUkFITTtRQUlSLE9BQU8sRUFBRSw2QkFKRDtRQUtSLFFBQVEsRUFBRTtNQUxGLENBSEw7TUFVTCxPQUFPLEVBQUUsSUFWSjtNQVdMLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxtQkFETSxFQUVSLENBQUMsQ0FBQyxPQUFGLENBQVUsTUFBVixFQUFrQixNQUFsQixFQUEwQjtRQUFFLFFBQVEsRUFBRSxDQUFDLE1BQUQ7TUFBWixDQUExQixDQUZRLEVBR1IsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFDLENBQUMsaUJBQVosRUFBK0I7UUFBRSxLQUFLLEVBQUUsS0FBVDtRQUFnQixPQUFPLEVBQUU7TUFBekIsQ0FBL0IsQ0FIUSxFQUlSO1FBQ0UsU0FBUyxFQUFFLFFBRGI7UUFFRSxRQUFRLEVBQUUsQ0FDUjtVQUFFLEtBQUssRUFBRTtRQUFULENBRFEsRUFFUjtVQUNFLEtBQUssRUFBRTtRQURULENBRlE7TUFGWixDQUpRLEVBYVI7UUFBRSxTQUFTLEVBQUUsUUFBYjtRQUF1QixLQUFLLEVBQUU7TUFBOUIsQ0FiUSxFQWNSO1FBQ0UsU0FBUyxFQUFFLFFBRGI7UUFFRSxRQUFRLEVBQUUsQ0FDUjtVQUNFLEtBQUssRUFBRSxrQkFBa0I7UUFEM0IsQ0FEUSxFQUlSO1VBQUUsS0FBSyxFQUFFLG1CQUFtQjtRQUE1QixDQUpRLEVBS1I7VUFDRSxLQUFLLEVBQUUseUJBQXlCO1FBRGxDLENBTFEsRUFRUjtVQUNFLEtBQUssRUFBRSxvREFBb0Q7UUFEN0QsQ0FSUSxDQUZaO1FBY0UsU0FBUyxFQUFFO01BZGIsQ0FkUSxFQThCUjtRQUNFLFNBQVMsRUFBRSxVQURiO1FBRUUsYUFBYSxFQUFFLElBRmpCO1FBR0UsR0FBRyxFQUFFLFNBSFA7UUFJRSxVQUFVLEVBQUUsQ0FBQyxDQUpmO1FBS0UsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLHFCQUFIO01BTFosQ0E5QlEsRUFxQ1I7UUFDRSxTQUFTLEVBQUUsTUFEYjtRQUVFLEtBQUssRUFBRSxRQUZUO1FBR0UsR0FBRyxFQUFFLEtBSFA7UUFJRSxRQUFRLEVBQUUsQ0FBQztVQUFFLFNBQVMsRUFBRSxhQUFiO1VBQTRCLEtBQUssRUFBRSxHQUFuQztVQUF3QyxHQUFHLEVBQUU7UUFBN0MsQ0FBRDtNQUpaLENBckNRLEVBMkNSO1FBQ0UsU0FBUyxFQUFFLE9BRGI7UUFFRSxhQUFhLEVBQUUsTUFGakI7UUFHRSxHQUFHLEVBQUUsR0FIUDtRQUlFLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLHFCQUFaLEVBQW1DO1VBQ2pDLFVBQVUsRUFBRSxDQUFDO1FBRG9CLENBQW5DLENBRFEsQ0FKWjtRQVNFLE9BQU8sRUFBRTtNQVRYLENBM0NRLEVBc0RSO1FBQ0UsU0FBUyxFQUFFLE9BRGI7UUFFRSxhQUFhLEVBQUUseUJBRmpCO1FBR0UsR0FBRyxFQUFFLElBSFA7UUFJRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBRixDQUFVLENBQUMsQ0FBQyxxQkFBWixFQUFtQztVQUFFLFVBQVUsRUFBRSxDQUFDO1FBQWYsQ0FBbkMsQ0FBRCxDQUpaO1FBS0UsT0FBTyxFQUFFO01BTFgsQ0F0RFEsRUE2RFI7UUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQUYsR0FBYSxJQUF0QjtRQUE0QixRQUFRLEVBQUU7VUFBRSxRQUFRLEVBQUU7UUFBWjtNQUF0QyxDQTdEUSxFQThEUjtRQUFFLEtBQUssRUFBRTtNQUFULENBOURRO0lBWEwsQ0FBUDtFQTRFRCxDQWhGRDtBQWlGRCxDQW5GRCxFQUZGO0FBdUZBLElBQUksQ0FBQyxnQkFBTCxDQUNFLE1BREYsRUFFRyxZQUFNO0VBQ0w7O0VBQ0EsSUFBTSxDQUFDLEdBQUcsQ0FDTixHQURNLEVBRU4sTUFGTSxFQUdOLFNBSE0sRUFJTixTQUpNLEVBS04sT0FMTSxFQU1OLE9BTk0sRUFPTixHQVBNLEVBUU4sWUFSTSxFQVNOLE1BVE0sRUFVTixRQVZNLEVBV04sUUFYTSxFQVlOLFNBWk0sRUFhTixNQWJNLEVBY04sTUFkTSxFQWVOLElBZk0sRUFnQk4sS0FoQk0sRUFpQk4sU0FqQk0sRUFrQk4sS0FsQk0sRUFtQk4sS0FuQk0sRUFvQk4sSUFwQk0sRUFxQk4sSUFyQk0sRUFzQk4sSUF0Qk0sRUF1Qk4sVUF2Qk0sRUF3Qk4sWUF4Qk0sRUF5Qk4sUUF6Qk0sRUEwQk4sUUExQk0sRUEyQk4sTUEzQk0sRUE0Qk4sSUE1Qk0sRUE2Qk4sSUE3Qk0sRUE4Qk4sSUE5Qk0sRUErQk4sSUEvQk0sRUFnQ04sSUFoQ00sRUFpQ04sSUFqQ00sRUFrQ04sUUFsQ00sRUFtQ04sUUFuQ00sRUFvQ04sTUFwQ00sRUFxQ04sR0FyQ00sRUFzQ04sUUF0Q00sRUF1Q04sS0F2Q00sRUF3Q04sT0F4Q00sRUF5Q04sS0F6Q00sRUEwQ04sS0ExQ00sRUEyQ04sT0EzQ00sRUE0Q04sUUE1Q00sRUE2Q04sSUE3Q00sRUE4Q04sTUE5Q00sRUErQ04sTUEvQ00sRUFnRE4sTUFoRE0sRUFpRE4sS0FqRE0sRUFrRE4sUUFsRE0sRUFtRE4sSUFuRE0sRUFvRE4sR0FwRE0sRUFxRE4sR0FyRE0sRUFzRE4sT0F0RE0sRUF1RE4sTUF2RE0sRUF3RE4sU0F4RE0sRUF5RE4sTUF6RE0sRUEwRE4sUUExRE0sRUEyRE4sU0EzRE0sRUE0RE4sS0E1RE0sRUE2RE4sT0E3RE0sRUE4RE4sT0E5RE0sRUErRE4sSUEvRE0sRUFnRU4sVUFoRU0sRUFpRU4sT0FqRU0sRUFrRU4sSUFsRU0sRUFtRU4sT0FuRU0sRUFvRU4sTUFwRU0sRUFxRU4sSUFyRU0sRUFzRU4sSUF0RU0sRUF1RU4sS0F2RU0sRUF3RU4sT0F4RU0sQ0FBVjtFQUFBLElBMEVFLENBQUMsR0FBRyxDQUNGLFdBREUsRUFFRixhQUZFLEVBR0YsY0FIRSxFQUlGLE9BSkUsRUFLRixhQUxFLEVBTUYsYUFORSxFQU9GLHFCQVBFLEVBUUYsZUFSRSxFQVNGLGNBVEUsRUFVRixjQVZFLEVBV0YsZUFYRSxFQVlGLE1BWkUsRUFhRixRQWJFLEVBY0YsT0FkRSxFQWVGLGlCQWZFLEVBZ0JGLFlBaEJFLEVBaUJGLGFBakJFLEVBa0JGLGdCQWxCRSxFQW1CRixpQkFuQkUsRUFvQkYsU0FwQkUsRUFxQkYsc0JBckJFLEVBc0JGLGtCQXRCRSxFQXVCRix3QkF2QkUsRUF3QkYsOEJBeEJFLEVBeUJGLFlBekJFLEVBMEJGLE1BMUJFLEVBMkJGLFdBM0JFLEVBNEJGLFFBNUJFLEVBNkJGLE9BN0JFLEVBOEJGLFdBOUJFLEVBK0JGLFdBL0JFLEVBZ0NGLFlBaENFLEVBaUNGLFlBakNFLENBMUVOO0VBQUEsSUE2R0UsQ0FBQyxHQUFHLENBQ0YsUUFERSxFQUVGLFVBRkUsRUFHRixPQUhFLEVBSUYsU0FKRSxFQUtGLFNBTEUsRUFNRixTQU5FLEVBT0YsU0FQRSxFQVFGLEtBUkUsRUFTRixVQVRFLEVBVUYsTUFWRSxFQVdGLE9BWEUsRUFZRixTQVpFLEVBYUYsT0FiRSxFQWNGLGFBZEUsRUFlRixlQWZFLEVBZ0JGLFlBaEJFLEVBaUJGLFFBakJFLEVBa0JGLE9BbEJFLEVBbUJGLGVBbkJFLEVBb0JGLGNBcEJFLEVBcUJGLEtBckJFLEVBc0JGLE1BdEJFLEVBdUJGLGNBdkJFLEVBd0JGLE9BeEJFLEVBeUJGLGVBekJFLEVBMEJGLFVBMUJFLEVBMkJGLFNBM0JFLEVBNEJGLElBNUJFLEVBNkJGLE1BN0JFLEVBOEJGLFlBOUJFLEVBK0JGLGNBL0JFLEVBZ0NGLE1BaENFLEVBaUNGLE1BakNFLEVBa0NGLFlBbENFLEVBbUNGLEtBbkNFLEVBb0NGLFdBcENFLEVBcUNGLFNBckNFLEVBc0NGLGdCQXRDRSxFQXVDRixjQXZDRSxFQXdDRixrQkF4Q0UsRUF5Q0YsYUF6Q0UsRUEwQ0YsWUExQ0UsRUEyQ0YsY0EzQ0UsRUE0Q0YsVUE1Q0UsRUE2Q0YsY0E3Q0UsRUE4Q0YsTUE5Q0UsRUErQ0YsbUJBL0NFLEVBZ0RGLFdBaERFLEVBaURGLFlBakRFLEVBa0RGLFVBbERFLEVBbURGLE9BbkRFLEVBb0RGLE1BcERFLEVBcURGLE9BckRFLEVBc0RGLFFBdERFLEVBdURGLGVBdkRFLEVBd0RGLGNBeERFLEVBeURGLE9BekRFLEVBMERGLFNBMURFLEVBMkRGLE9BM0RFLENBN0dOO0VBQUEsSUEwS0UsQ0FBQyxHQUFHLENBQ0YsT0FERSxFQUVGLFVBRkUsRUFHRixRQUhFLEVBSUYsS0FKRSxFQUtGLFlBTEUsRUFNRixjQU5FLEVBT0YsWUFQRSxFQVFGLGVBUkUsRUFTRixRQVRFLEVBVUYsTUFWRSxFQVdGLGFBWEUsRUFZRixXQVpFLEVBYUYsU0FiRSxFQWNGLGdCQWRFLENBMUtOO0VBQUEsSUEwTEUsQ0FBQyxHQUFHLENBQ0YsZUFERSxFQUVGLGFBRkUsRUFHRixZQUhFLEVBSUYsV0FKRSxFQUtGLGlCQUxFLEVBTUYscUJBTkUsRUFPRixvQkFQRSxFQVFGLHFCQVJFLEVBU0YsMkJBVEUsRUFVRixnQkFWRSxFQVdGLHNCQVhFLEVBWUYsMkJBWkUsRUFhRixNQWJFLEVBY0YscUJBZEUsRUFlRixZQWZFLEVBZ0JGLHVCQWhCRSxFQWlCRixpQkFqQkUsRUFrQkYsa0JBbEJFLEVBbUJGLGtCQW5CRSxFQW9CRixtQkFwQkUsRUFxQkYscUJBckJFLEVBc0JGLG1CQXRCRSxFQXVCRixpQkF2QkUsRUF3QkYsUUF4QkUsRUF5QkYsZUF6QkUsRUEwQkYscUJBMUJFLEVBMkJGLDJCQTNCRSxFQTRCRiw0QkE1QkUsRUE2QkYscUJBN0JFLEVBOEJGLHFCQTlCRSxFQStCRixpQkEvQkUsRUFnQ0YsY0FoQ0UsRUFpQ0YsY0FqQ0UsRUFrQ0YscUJBbENFLEVBbUNGLHFCQW5DRSxFQW9DRixvQkFwQ0UsRUFxQ0YscUJBckNFLEVBc0NGLG9CQXRDRSxFQXVDRixhQXZDRSxFQXdDRixtQkF4Q0UsRUF5Q0YsbUJBekNFLEVBMENGLG1CQTFDRSxFQTJDRixlQTNDRSxFQTRDRixjQTVDRSxFQTZDRixvQkE3Q0UsRUE4Q0Ysb0JBOUNFLEVBK0NGLG9CQS9DRSxFQWdERixnQkFoREUsRUFpREYsY0FqREUsRUFrREYsWUFsREUsRUFtREYsa0JBbkRFLEVBb0RGLHdCQXBERSxFQXFERix5QkFyREUsRUFzREYsa0JBdERFLEVBdURGLGtCQXZERSxFQXdERixjQXhERSxFQXlERixRQXpERSxFQTBERixzQkExREUsRUEyREYsWUEzREUsRUE0REYsWUE1REUsRUE2REYsYUE3REUsRUE4REYsY0E5REUsRUErREYsY0EvREUsRUFnRUYsY0FoRUUsRUFpRUYsT0FqRUUsRUFrRUYsTUFsRUUsRUFtRUYsV0FuRUUsRUFvRUYsT0FwRUUsRUFxRUYsY0FyRUUsRUFzRUYsYUF0RUUsRUF1RUYsWUF2RUUsRUF3RUYsYUF4RUUsRUF5RUYsbUJBekVFLEVBMEVGLG1CQTFFRSxFQTJFRixtQkEzRUUsRUE0RUYsYUE1RUUsRUE2RUYsY0E3RUUsRUE4RUYsU0E5RUUsRUErRUYsU0EvRUUsRUFnRkYsbUJBaEZFLEVBaUZGLGVBakZFLEVBa0ZGLFFBbEZFLEVBbUZGLFdBbkZFLEVBb0ZGLFNBcEZFLEVBcUZGLGFBckZFLEVBc0ZGLFFBdEZFLEVBdUZGLE1BdkZFLEVBd0ZGLFlBeEZFLEVBeUZGLGdCQXpGRSxFQTBGRixXQTFGRSxFQTJGRixXQTNGRSxFQTRGRixhQTVGRSxFQTZGRixXQTdGRSxFQThGRixPQTlGRSxFQStGRixNQS9GRSxFQWdHRixjQWhHRSxFQWlHRixhQWpHRSxFQWtHRix1QkFsR0UsRUFtR0YsY0FuR0UsRUFvR0Ysd0JBcEdFLEVBcUdGLFdBckdFLEVBc0dGLGtCQXRHRSxFQXVHRixnQkF2R0UsRUF3R0YsY0F4R0UsRUF5R0YsWUF6R0UsRUEwR0YsY0ExR0UsRUEyR0Ysd0JBM0dFLEVBNEdGLHlCQTVHRSxFQTZHRixhQTdHRSxFQThHRixRQTlHRSxFQStHRixTQS9HRSxFQWdIRixNQWhIRSxFQWlIRixtQkFqSEUsRUFrSEYsaUJBbEhFLEVBbUhGLGtCQW5IRSxFQW9IRixVQXBIRSxFQXFIRixTQXJIRSxFQXNIRixTQXRIRSxFQXVIRixpQkF2SEUsRUF3SEYsTUF4SEUsRUF5SEYsZ0JBekhFLEVBMEhGLGFBMUhFLEVBMkhGLFlBM0hFLEVBNEhGLGtCQTVIRSxFQTZIRixxQkE3SEUsRUE4SEYsaUJBOUhFLEVBK0hGLFFBL0hFLEVBZ0lGLGVBaElFLEVBaUlGLGFBaklFLEVBa0lGLGNBbElFLEVBbUlGLFlBbklFLEVBb0lGLE9BcElFLEVBcUlGLE1BcklFLEVBc0lGLFlBdElFLEVBdUlGLFdBdklFLEVBd0lGLFlBeElFLEVBeUlGLFdBeklFLEVBMElGLFVBMUlFLEVBMklGLFdBM0lFLEVBNElGLFVBNUlFLEVBNklGLFdBN0lFLEVBOElGLFFBOUlFLEVBK0lGLE1BL0lFLEVBZ0pGLFFBaEpFLEVBaUpGLFlBakpFLEVBa0pGLGlCQWxKRSxFQW1KRixTQW5KRSxFQW9KRixPQXBKRSxFQXFKRixTQXJKRSxFQXNKRixTQXRKRSxFQXVKRixlQXZKRSxFQXdKRixnQkF4SkUsRUF5SkYsZUF6SkUsRUEwSkYsZUExSkUsRUEySkYsVUEzSkUsRUE0SkYsZUE1SkUsRUE2SkYsWUE3SkUsRUE4SkYsWUE5SkUsRUErSkYsU0EvSkUsRUFnS0YsZ0JBaEtFLEVBaUtGLGNBaktFLEVBa0tGLGVBbEtFLEVBbUtGLGFBbktFLEVBb0tGLGtCQXBLRSxFQXFLRixtQkFyS0UsRUFzS0YsbUJBdEtFLEVBdUtGLGFBdktFLEVBd0tGLG9CQXhLRSxFQXlLRixnQkF6S0UsRUEwS0YsVUExS0UsRUEyS0YsUUEzS0UsRUE0S0YsUUE1S0UsRUE2S0YsT0E3S0UsRUE4S0YsS0E5S0UsRUErS0YsVUEvS0UsRUFnTEYsY0FoTEUsRUFpTEYsWUFqTEUsRUFrTEYsaUJBbExFLEVBbUxGLGlCQW5MRSxFQW9MRix1QkFwTEUsRUFxTEYsc0JBckxFLEVBc0xGLHVCQXRMRSxFQXVMRixhQXZMRSxFQXdMRixlQXhMRSxFQXlMRixnQkF6TEUsRUEwTEYsYUExTEUsRUEyTEYsZ0JBM0xFLEVBNExGLHlCQTVMRSxFQTZMRixLQTdMRSxFQThMRixXQTlMRSxFQStMRixrQkEvTEUsRUFnTUYsaUJBaE1FLEVBaU1GLFlBak1FLEVBa01GLGtCQWxNRSxFQW1NRixxQkFuTUUsRUFvTUYscUJBcE1FLEVBcU1GLDRCQXJNRSxFQXNNRixjQXRNRSxFQXVNRixnQkF2TUUsRUF3TUYsWUF4TUUsRUF5TUYsYUF6TUUsRUEwTUYsUUExTUUsRUEyTUYsT0EzTUUsRUE0TUYsWUE1TUUsRUE2TUYsY0E3TUUsRUE4TUYsV0E5TUUsRUErTUYsU0EvTUUsRUFnTkYsT0FoTkUsRUExTE47RUEyWUEsT0FBTyxVQUFBLENBQUMsRUFBSTtJQUNWLElBQU0sQ0FBQyxHQUFJLFVBQUEsQ0FBQztNQUFBLE9BQUs7UUFDYixTQUFTLEVBQUU7VUFBRSxTQUFTLEVBQUUsTUFBYjtVQUFxQixLQUFLLEVBQUU7UUFBNUIsQ0FERTtRQUViLFFBQVEsRUFBRTtVQUNSLFNBQVMsRUFBRSxRQURIO1VBRVIsS0FBSyxFQUFFO1FBRkMsQ0FGRztRQU1iLHVCQUF1QixFQUFFO1VBQ3ZCLFNBQVMsRUFBRSxlQURZO1VBRXZCLEtBQUssRUFBRSxJQUZnQjtVQUd2QixHQUFHLEVBQUUsSUFIa0I7VUFJdkIsT0FBTyxFQUFFLEdBSmM7VUFLdkIsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFILEVBQXFCLENBQUMsQ0FBQyxpQkFBdkI7UUFMYTtNQU5aLENBQUw7SUFBQSxDQUFGLENBYUosQ0FiSSxDQUFWO0lBQUEsSUFjRSxDQUFDLEdBQUcsQ0FkTjtJQUFBLElBZUUsQ0FBQyxHQUFHLENBZk47SUFBQSxJQWdCRSxDQUFDLEdBQUcsVUFoQk47SUFBQSxJQWlCRSxDQUFDLEdBQUc7TUFBRSxTQUFTLEVBQUUsVUFBYjtNQUF5QixLQUFLLEVBQUU7SUFBaEMsQ0FqQk47O0lBa0JBLE9BQU87TUFDTCxJQUFJLEVBQUUsTUFERDtNQUVMLGdCQUFnQixFQUFFLENBQUMsQ0FGZDtNQUdMLE9BQU8sRUFBRSxRQUhKO01BSUwsUUFBUSxFQUFFLENBQ1IsQ0FBQyxDQUFDLG1CQURNLEVBRVIsQ0FBQyxDQUFDLG9CQUZNLEVBR1I7UUFDRSxTQUFTLEVBQUUsYUFEYjtRQUVFLEtBQUssRUFBRSxpQkFGVDtRQUdFLFNBQVMsRUFBRTtNQUhiLENBSFEsRUFRUjtRQUNFLFNBQVMsRUFBRSxnQkFEYjtRQUVFLEtBQUssRUFBRSxtQkFGVDtRQUdFLFNBQVMsRUFBRTtNQUhiLENBUlEsRUFhUixDQUFDLENBQUMsdUJBYk0sRUFjUjtRQUNFLFNBQVMsRUFBRSxjQURiO1FBRUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUYsQ0FBTyxHQUFQLENBQVQsR0FBdUIsTUFGaEM7UUFHRSxTQUFTLEVBQUU7TUFIYixDQWRRLEVBbUJSO1FBQUUsU0FBUyxFQUFFLGlCQUFiO1FBQWdDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFGLENBQU8sR0FBUCxDQUFQLEdBQXFCO01BQTVELENBbkJRLEVBb0JSO1FBQUUsU0FBUyxFQUFFLGlCQUFiO1FBQWdDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFGLENBQU8sR0FBUCxDQUFSLEdBQXNCO01BQTdELENBcEJRLEVBcUJSLENBckJRLEVBc0JSO1FBQUUsS0FBSyxFQUFFLElBQVQ7UUFBZSxHQUFHLEVBQUUsSUFBcEI7UUFBMEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQUg7TUFBcEMsQ0F0QlEsRUF1QlI7UUFBRSxTQUFTLEVBQUUsV0FBYjtRQUEwQixLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBRixDQUFPLEdBQVAsQ0FBVCxHQUF1QjtNQUF4RCxDQXZCUSxFQXdCUjtRQUNFLEtBQUssRUFDSDtNQUZKLENBeEJRLEVBNEJSO1FBQ0UsS0FBSyxFQUFFLEdBRFQ7UUFFRSxHQUFHLEVBQUUsR0FGUDtRQUdFLFFBQVEsRUFBRSxDQUNSLENBRFEsRUFFUixDQUFDLENBQUMsUUFGTSxFQUdSLENBQUMsQ0FBQyxlQUhNLEVBSVIsQ0FBQyxDQUFDLGlCQUpNLEVBS1IsQ0FBQyxDQUFDLGdCQUxNLEVBTVIsQ0FBQyxDQUFDLFNBTk07TUFIWixDQTVCUSxFQXdDUjtRQUNFLEtBQUssRUFBRSxtQkFEVDtRQUVFLE9BQU8sRUFBRSxDQUZYO1FBR0UsUUFBUSxFQUFFO01BSFosQ0F4Q1EsRUE2Q1I7UUFDRSxLQUFLLEVBQUUsR0FEVDtRQUVFLEdBQUcsRUFBRSxNQUZQO1FBR0UsV0FBVyxFQUFFLENBQUMsQ0FIaEI7UUFJRSxRQUFRLEVBQUU7VUFDUixRQUFRLEVBQUUsU0FERjtVQUVSLE9BQU8sRUFBRSxpQkFGRDtVQUdSLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBRixDQUFPLEdBQVA7UUFISCxDQUpaO1FBU0UsUUFBUSxFQUFFLENBQ1I7VUFBRSxLQUFLLEVBQUUsQ0FBVDtVQUFZLFNBQVMsRUFBRTtRQUF2QixDQURRLEVBRVI7VUFBRSxLQUFLLEVBQUUsY0FBVDtVQUF5QixTQUFTLEVBQUU7UUFBcEMsQ0FGUSxFQUdSLENBSFEsRUFJUixDQUFDLENBQUMsaUJBSk0sRUFLUixDQUFDLENBQUMsZ0JBTE0sRUFNUixDQUFDLENBQUMsUUFOTSxFQU9SLENBQUMsQ0FBQyxlQVBNO01BVFosQ0E3Q1E7SUFKTCxDQUFQO0VBc0VELENBekZEO0FBMEZELENBdmVELEVBRkY7QUEyZUEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsT0FERixFQUVHLFlBQU07RUFDTDs7RUFDQSxPQUFPLFVBQUEsQ0FBQztJQUFBLE9BQUs7TUFDWCxJQUFJLEVBQUUsZUFESztNQUVYLE9BQU8sRUFBRSxDQUFDLFNBQUQsQ0FGRTtNQUdYLFFBQVEsRUFBRSxDQUNSO1FBQ0UsU0FBUyxFQUFFLE1BRGI7UUFFRSxLQUFLLEVBQUUsZ0NBRlQ7UUFHRSxNQUFNLEVBQUU7VUFBRSxHQUFHLEVBQUUsZUFBUDtVQUF3QixXQUFXLEVBQUU7UUFBckM7TUFIVixDQURRO0lBSEMsQ0FBTDtFQUFBLENBQVI7QUFXRCxDQWJELEVBRkY7QUFpQkEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsS0FERixFQUVHLFlBQU07RUFDTDs7RUFDQSxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7SUFDWixPQUFPLENBQUMsR0FBSSxZQUFZLE9BQU8sQ0FBbkIsR0FBdUIsQ0FBdkIsR0FBMkIsQ0FBQyxDQUFDLE1BQWpDLEdBQTJDLElBQW5EO0VBQ0Q7O0VBQ0QsU0FBUyxDQUFULEdBQWlCO0lBQUEsb0NBQUgsQ0FBRztNQUFILENBQUc7SUFBQTs7SUFDZixPQUFPLENBQUMsQ0FBQyxHQUFGLENBQU0sVUFBQSxDQUFDO01BQUEsT0FBSSxDQUFDLENBQUMsQ0FBRCxDQUFMO0lBQUEsQ0FBUCxFQUFpQixJQUFqQixDQUFzQixFQUF0QixDQUFQO0VBQ0Q7O0VBQ0QsU0FBUyxDQUFULEdBQWlCO0lBQUEsb0NBQUgsQ0FBRztNQUFILENBQUc7SUFBQTs7SUFDZixPQUFPLE1BQU0sQ0FBQyxDQUFDLEdBQUYsQ0FBTSxVQUFBLENBQUM7TUFBQSxPQUFJLENBQUMsQ0FBQyxDQUFELENBQUw7SUFBQSxDQUFQLEVBQWlCLElBQWpCLENBQXNCLEdBQXRCLENBQU4sR0FBbUMsR0FBMUM7RUFDRDs7RUFDRCxPQUFPLFVBQUEsQ0FBQyxFQUFJO0lBQ1YsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLEdBQWhCLENBQVY7SUFBQSxJQUNFLENBQUMsR0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFNBQWxCLENBRE47SUFBQSxJQUVFLENBQUMsR0FBRyxDQUNGLFFBREUsRUFFRixRQUZFLEVBR0YsTUFIRSxFQUlGLFNBSkUsRUFLRixNQUxFLEVBTUYsV0FORSxFQU9GLE1BUEUsRUFRRixNQVJFLEVBU0YsS0FURSxFQVVGLFVBVkUsRUFXRixTQVhFLEVBWUYsT0FaRSxFQWFGLEtBYkUsRUFjRixTQWRFLEVBZUYsVUFmRSxFQWdCRixPQWhCRSxFQWlCRixPQWpCRSxFQWtCRixVQWxCRSxFQW1CRixTQW5CRSxFQW9CRixNQXBCRSxFQXFCRixLQXJCRSxFQXNCRixVQXRCRSxFQXVCRixNQXZCRSxFQXdCRixXQXhCRSxFQXlCRixTQXpCRSxFQTBCRixTQTFCRSxFQTJCRixXQTNCRSxDQUZOO0lBQUEsSUErQkUsQ0FBQyxHQUFHLENBQ0YsS0FERSxFQUVGLE1BRkUsRUFHRixXQUhFLEVBSUYsTUFKRSxFQUtGLE1BTEUsRUFNRixLQU5FLEVBT0YsTUFQRSxFQVFGLE1BUkUsRUFTRixTQVRFLEVBVUYsVUFWRSxFQVdGLE1BWEUsRUFZRixLQVpFLEVBYUYsTUFiRSxFQWNGLE9BZEUsRUFlRixXQWZFLEVBZ0JGLFlBaEJFLEVBaUJGLFdBakJFLEVBa0JGLFlBbEJFLEVBbUJGLE9BbkJFLEVBb0JGLFNBcEJFLEVBcUJGLEtBckJFLEVBc0JGLFNBdEJFLEVBdUJGLGFBdkJFLEVBd0JGLE9BeEJFLEVBeUJGLFlBekJFLEVBMEJGLGVBMUJFLEVBMkJGLGFBM0JFLEVBNEJGLGFBNUJFLEVBNkJGLGdCQTdCRSxFQThCRixZQTlCRSxFQStCRixZQS9CRSxFQWdDRixzQkFoQ0UsRUFpQ0YsWUFqQ0UsRUFrQ0YsS0FsQ0UsRUFtQ0YsWUFuQ0UsRUFvQ0YsTUFwQ0UsRUFxQ0YsU0FyQ0UsRUFzQ0YsSUF0Q0UsRUF1Q0YsS0F2Q0UsRUF3Q0YsT0F4Q0UsRUF5Q0YsT0F6Q0UsRUEwQ0YsS0ExQ0UsRUEyQ0YsS0EzQ0UsRUE0Q0YsS0E1Q0UsRUE2Q0YsV0E3Q0UsRUE4Q0YsT0E5Q0UsRUErQ0YsUUEvQ0UsRUFnREYsY0FoREUsRUFpREYsaUJBakRFLEVBa0RGLGlCQWxERSxFQW1ERixVQW5ERSxFQW9ERixnQkFwREUsRUFxREYsT0FyREUsRUFzREYsTUF0REUsRUF1REYsV0F2REUsRUF3REYsV0F4REUsRUF5REYsWUF6REUsRUEwREYsZ0JBMURFLEVBMkRGLFNBM0RFLEVBNERGLFlBNURFLEVBNkRGLFVBN0RFLEVBOERGLFVBOURFLEVBK0RGLFVBL0RFLEVBZ0VGLFlBaEVFLEVBaUVGLEtBakVFLEVBa0VGLE1BbEVFLEVBbUVGLE1BbkVFLEVBb0VGLFlBcEVFLEVBcUVGLGFBckVFLEVBc0VGLFdBdEVFLEVBdUVGLGlCQXZFRSxFQXdFRixLQXhFRSxFQXlFRixLQXpFRSxFQTBFRixNQTFFRSxFQTJFRixXQTNFRSxFQTRFRixpQkE1RUUsRUE2RUYsT0E3RUUsRUE4RUYsTUE5RUUsRUErRUYsWUEvRUUsRUFnRkYsUUFoRkUsRUFpRkYsT0FqRkUsRUFrRkYsVUFsRkUsRUFtRkYsU0FuRkUsRUFvRkYsVUFwRkUsRUFxRkYsY0FyRkUsQ0EvQk47SUFBQSxJQXNIRSxDQUFDLEdBQUcsQ0FDRixjQURFLEVBRUYsYUFGRSxFQUdGLGFBSEUsRUFJRixhQUpFLEVBS0YsVUFMRSxFQU1GLGFBTkUsRUFPRixnQkFQRSxFQVFGLGVBUkUsRUFTRixhQVRFLEVBVUYsZUFWRSxFQVdGLGVBWEUsRUFZRixjQVpFLEVBYUYsYUFiRSxFQWNGLFlBZEUsRUFlRixhQWZFLEVBZ0JGLGVBaEJFLENBdEhOO0lBQUEsSUF3SUUsQ0FBQyxHQUFHLENBeElOO0lBQUEsSUF5SUUsQ0FBQyxHQUFHLENBQ0YsS0FERSxFQUVGLE1BRkUsRUFHRixLQUhFLEVBSUYsVUFKRSxFQUtGLE9BTEUsRUFNRixLQU5FLEVBT0YsS0FQRSxFQVFGLEtBUkUsRUFTRixPQVRFLEVBVUYsV0FWRSxFQVdGLHVCQVhFLEVBWUYsSUFaRSxFQWFGLFlBYkUsRUFjRixNQWRFLEVBZUYsWUFmRSxFQWdCRixJQWhCRSxFQWlCRixNQWpCRSxFQWtCRixRQWxCRSxFQW1CRixlQW5CRSxFQW9CRixLQXBCRSxFQXFCRixPQXJCRSxFQXNCRixhQXRCRSxFQXVCRixpQkF2QkUsRUF3QkYsU0F4QkUsRUF5QkYsUUF6QkUsRUEwQkYsUUExQkUsRUEyQkYsTUEzQkUsRUE0QkYsU0E1QkUsRUE2QkYsTUE3QkUsRUE4QkYsSUE5QkUsRUErQkYsTUEvQkUsRUFnQ0YsUUFoQ0UsRUFpQ0YsYUFqQ0UsRUFrQ0YsVUFsQ0UsRUFtQ0YsTUFuQ0UsRUFvQ0YsTUFwQ0UsRUFxQ0YsTUFyQ0UsRUFzQ0YsU0F0Q0UsRUF1Q0YsTUF2Q0UsRUF3Q0YsYUF4Q0UsRUF5Q0YsV0F6Q0UsRUEwQ0Ysa0JBMUNFLEVBMkNGLE9BM0NFLEVBNENGLFlBNUNFLEVBNkNGLE1BN0NFLEVBOENGLE9BOUNFLEVBK0NGLFVBL0NFLEVBZ0RGLFNBaERFLEVBaURGLFNBakRFLEVBa0RGLFFBbERFLEVBbURGLFFBbkRFLEVBb0RGLFdBcERFLEVBcURGLFNBckRFLEVBc0RGLFlBdERFLEVBdURGLFVBdkRFLEVBd0RGLFNBeERFLEVBeURGLE1BekRFLEVBMERGLE1BMURFLEVBMkRGLGVBM0RFLEVBNERGLEtBNURFLEVBNkRGLE1BN0RFLEVBOERGLE9BOURFLEVBK0RGLFdBL0RFLEVBZ0VGLFlBaEVFLEVBaUVGLFFBakVFLEVBa0VGLE9BbEVFLEVBbUVGLE1BbkVFLEVBb0VGLFdBcEVFLEVBcUVGLFNBckVFLEVBc0VGLGlCQXRFRSxFQXVFRixjQXZFRSxFQXdFRixpQ0F4RUUsRUF5RUYsY0F6RUUsRUEwRUYsY0ExRUUsRUEyRUYsYUEzRUUsRUE0RUYsZ0JBNUVFLEVBNkVGLGNBN0VFLEVBOEVGLG1CQTlFRSxFQStFRixjQS9FRSxFQWdGRixjQWhGRSxFQWlGRixrQ0FqRkUsRUFrRkYsY0FsRkUsRUFtRkYsUUFuRkUsRUFvRkYsT0FwRkUsRUFxRkYsTUFyRkUsRUFzRkYsS0F0RkUsRUF1RkYsWUF2RkUsRUF3RkYsS0F4RkUsRUF5RkYsU0F6RkUsRUEwRkYsVUExRkUsRUEyRkYsU0EzRkUsRUE0RkYsU0E1RkUsRUE2RkYsUUE3RkUsRUE4RkYsUUE5RkUsRUErRkYsWUEvRkUsRUFnR0YsT0FoR0UsRUFpR0YsVUFqR0UsRUFrR0YsZUFsR0UsRUFtR0YsWUFuR0UsRUFvR0YsVUFwR0UsRUFxR0YsUUFyR0UsRUFzR0YsTUF0R0UsRUF1R0YsU0F2R0UsRUF3R0YsTUF4R0UsRUF5R0YsU0F6R0UsRUEwR0YsTUExR0UsRUEyR0YsT0EzR0UsRUE0R0YsS0E1R0UsRUE2R0YsV0E3R0UsRUE4R0YsZUE5R0UsRUErR0YsVUEvR0UsRUFnSEYsUUFoSEUsRUFpSEYsUUFqSEUsRUFrSEYsT0FsSEUsRUFtSEYsUUFuSEUsRUFvSEYsTUFwSEUsRUFxSEYsU0FySEUsRUFzSEYsUUF0SEUsRUF1SEYsS0F2SEUsRUF3SEYsVUF4SEUsRUF5SEYsU0F6SEUsRUEwSEYsT0ExSEUsRUEySEYsT0EzSEUsRUE0SEYsUUE1SEUsRUE2SEYsYUE3SEUsRUE4SEYsT0E5SEUsRUErSEYsT0EvSEUsRUFnSUYsS0FoSUUsRUFpSUYsU0FqSUUsRUFrSUYsV0FsSUUsRUFtSUYsTUFuSUUsRUFvSUYsTUFwSUUsRUFxSUYsTUFySUUsRUFzSUYsVUF0SUUsRUF1SUYsUUF2SUUsRUF3SUYsS0F4SUUsRUF5SUYsUUF6SUUsRUEwSUYsT0ExSUUsRUEySUYsT0EzSUUsRUE0SUYsVUE1SUUsRUE2SUYsUUE3SUUsRUE4SUYsUUE5SUUsRUErSUYsTUEvSUUsRUFnSkYsTUFoSkUsRUFpSkYsVUFqSkUsRUFrSkYsSUFsSkUsRUFtSkYsV0FuSkUsRUFvSkYsU0FwSkUsRUFxSkYsT0FySkUsRUFzSkYsT0F0SkUsRUF1SkYsYUF2SkUsRUF3SkYsUUF4SkUsRUF5SkYsS0F6SkUsRUEwSkYsU0ExSkUsRUEySkYsV0EzSkUsRUE0SkYsY0E1SkUsRUE2SkYsVUE3SkUsRUE4SkYsTUE5SkUsRUErSkYsSUEvSkUsRUFnS0YsTUFoS0UsRUFpS0YsWUFqS0UsRUFrS0YsZUFsS0UsRUFtS0YsYUFuS0UsRUFvS0YsYUFwS0UsRUFxS0YsZ0JBcktFLEVBc0tGLFlBdEtFLEVBdUtGLFlBdktFLEVBd0tGLHNCQXhLRSxFQXlLRixZQXpLRSxFQTBLRixLQTFLRSxFQTJLRixVQTNLRSxFQTRLRixPQTVLRSxFQTZLRixZQTdLRSxFQThLRixTQTlLRSxFQStLRixNQS9LRSxFQWdMRixTQWhMRSxFQWlMRixNQWpMRSxFQWtMRixNQWxMRSxFQW1MRixZQW5MRSxFQW9MRixTQXBMRSxFQXFMRixJQXJMRSxFQXNMRixPQXRMRSxFQXVMRixXQXZMRSxFQXdMRixnQkF4TEUsRUF5TEYsS0F6TEUsRUEwTEYsT0ExTEUsRUEyTEYsT0EzTEUsRUE0TEYsT0E1TEUsRUE2TEYsY0E3TEUsRUE4TEYsaUJBOUxFLEVBK0xGLFNBL0xFLEVBZ01GLEtBaE1FLEVBaU1GLFFBak1FLEVBa01GLE9BbE1FLEVBbU1GLFFBbk1FLEVBb01GLEtBcE1FLEVBcU1GLFFBck1FLEVBc01GLEtBdE1FLEVBdU1GLFVBdk1FLEVBd01GLFFBeE1FLEVBeU1GLE9Bek1FLEVBME1GLFVBMU1FLEVBMk1GLFVBM01FLEVBNE1GLFNBNU1FLEVBNk1GLE9BN01FLEVBOE1GLE9BOU1FLEVBK01GLEtBL01FLEVBZ05GLElBaE5FLEVBaU5GLE1Bak5FLEVBa05GLFdBbE5FLEVBbU5GLEtBbk5FLEVBb05GLFdBcE5FLEVBcU5GLE9Bck5FLEVBc05GLE1BdE5FLEVBdU5GLFFBdk5FLEVBd05GLFNBeE5FLEVBeU5GLGNBek5FLEVBME5GLG1CQTFORSxFQTJORixJQTNORSxFQTRORixRQTVORSxFQTZORixLQTdORSxFQThORixNQTlORSxFQStORixJQS9ORSxFQWdPRixLQWhPRSxFQWlPRixNQWpPRSxFQWtPRixNQWxPRSxFQW1PRixJQW5PRSxFQW9PRixPQXBPRSxFQXFPRixLQXJPRSxFQXNPRixPQXRPRSxFQXVPRixNQXZPRSxFQXdPRixVQXhPRSxFQXlPRixTQXpPRSxFQTBPRixXQTFPRSxFQTJPRixXQTNPRSxFQTRPRixTQTVPRSxFQTZPRixLQTdPRSxFQThPRixTQTlPRSxFQStPRixjQS9PRSxFQWdQRixpQkFoUEUsRUFpUEYsaUJBalBFLEVBa1BGLFFBbFBFLEVBbVBGLFNBblBFLEVBb1BGLFVBcFBFLEVBcVBGLGdCQXJQRSxFQXNQRixPQXRQRSxFQXVQRixVQXZQRSxFQXdQRixXQXhQRSxFQXlQRixTQXpQRSxFQTBQRixTQTFQRSxFQTJQRixXQTNQRSxFQTRQRixLQTVQRSxFQTZQRixPQTdQRSxFQThQRixNQTlQRSxFQStQRixPQS9QRSxFQWdRRixNQWhRRSxFQWlRRixXQWpRRSxFQWtRRixLQWxRRSxFQW1RRixZQW5RRSxFQW9RRixhQXBRRSxFQXFRRixXQXJRRSxFQXNRRixXQXRRRSxFQXVRRixZQXZRRSxFQXdRRixnQkF4UUUsRUF5UUYsU0F6UUUsRUEwUUYsWUExUUUsRUEyUUYsVUEzUUUsRUE0UUYsVUE1UUUsRUE2UUYsVUE3UUUsRUE4UUYsU0E5UUUsRUErUUYsUUEvUUUsRUFnUkYsUUFoUkUsRUFpUkYsU0FqUkUsRUFrUkYsUUFsUkUsRUFtUkYsT0FuUkUsRUFvUkYsVUFwUkUsRUFxUkYsUUFyUkUsRUFzUkYsS0F0UkUsRUF1UkYsWUF2UkUsRUF3UkYsTUF4UkUsRUF5UkYsU0F6UkUsRUEwUkYsV0ExUkUsRUEyUkYsT0EzUkUsRUE0UkYsUUE1UkUsRUE2UkYsUUE3UkUsRUE4UkYsUUE5UkUsRUErUkYsTUEvUkUsRUFnU0YsUUFoU0UsRUFpU0YsV0FqU0UsRUFrU0YsY0FsU0UsRUFtU0YsS0FuU0UsRUFvU0YsTUFwU0UsRUFxU0YsU0FyU0UsRUFzU0YsS0F0U0UsRUF1U0YsTUF2U0UsRUF3U0YsTUF4U0UsRUF5U0YsVUF6U0UsRUEwU0YsTUExU0UsRUEyU0YsVUEzU0UsRUE0U0YsY0E1U0UsRUE2U0YsS0E3U0UsRUE4U0YsY0E5U0UsRUErU0YsVUEvU0UsRUFnVEYsWUFoVEUsRUFpVEYsTUFqVEUsRUFrVEYsT0FsVEUsRUFtVEYsUUFuVEUsRUFvVEYsWUFwVEUsRUFxVEYsYUFyVEUsRUFzVEYsYUF0VEUsRUF1VEYsUUF2VEUsRUF3VEYsV0F4VEUsRUF5VEYsaUJBelRFLEVBMFRGLFVBMVRFLEVBMlRGLEtBM1RFLEVBNFRGLFdBNVRFLEVBNlRGLFFBN1RFLEVBOFRGLGFBOVRFLEVBK1RGLGFBL1RFLEVBZ1VGLE9BaFVFLEVBaVVGLGFBalVFLEVBa1VGLEtBbFVFLEVBbVVGLE1BblVFLEVBb1VGLE1BcFVFLEVBcVVGLE1BclVFLEVBc1VGLFdBdFVFLEVBdVVGLGVBdlVFLEVBd1VGLGlCQXhVRSxFQXlVRixJQXpVRSxFQTBVRixVQTFVRSxFQTJVRixXQTNVRSxFQTRVRixpQkE1VUUsRUE2VUYsYUE3VUUsRUE4VUYsT0E5VUUsRUErVUYsU0EvVUUsRUFnVkYsTUFoVkUsRUFpVkYsWUFqVkUsRUFrVkYsTUFsVkUsRUFtVkYsVUFuVkUsRUFvVkYsU0FwVkUsRUFxVkYsT0FyVkUsRUFzVkYsUUF0VkUsRUF1VkYsU0F2VkUsRUF3VkYsUUF4VkUsRUF5VkYsV0F6VkUsRUEwVkYsT0ExVkUsRUEyVkYsTUEzVkUsRUE0VkYsT0E1VkUsRUE2VkYsT0E3VkUsRUE4VkYsUUE5VkUsRUErVkYsVUEvVkUsRUFnV0YsU0FoV0UsRUFpV0YsVUFqV0UsRUFrV0YsV0FsV0UsRUFtV0YsU0FuV0UsRUFvV0YsU0FwV0UsRUFxV0YsWUFyV0UsRUFzV0YsTUF0V0UsRUF1V0YsVUF2V0UsRUF3V0YsT0F4V0UsRUF5V0YsY0F6V0UsRUEwV0YsUUExV0UsRUEyV0YsTUEzV0UsRUE0V0YsUUE1V0UsRUE2V0YsU0E3V0UsRUE4V0YsTUE5V0UsRUErV0YsS0EvV0UsRUFnWEYsS0FoWEUsRUFpWEYsV0FqWEUsRUFrWEYsTUFsWEUsRUFtWEYsT0FuWEUsRUFvWEYsT0FwWEUsRUFxWEYsTUFyWEUsRUFzWEYsTUF0WEUsRUF1WEYsTUF2WEUsQ0F1WEssVUFBQSxDQUFDO01BQUEsT0FBSSxDQUFDLENBQUMsQ0FBQyxRQUFGLENBQVcsQ0FBWCxDQUFMO0lBQUEsQ0F2WE4sQ0F6SU47SUFBQSxJQWlnQkUsQ0FBQyxHQUFHO01BQ0YsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFELEVBQU8sQ0FBQyxNQUFELFNBQUssQ0FBTCxDQUFQLEVBQWdCLE9BQWhCLENBRE47TUFFRixRQUFRLEVBQUU7UUFBRSxRQUFRLEVBQUU7TUFBWjtJQUZSLENBamdCTjtJQXFnQkEsT0FBTztNQUNMLElBQUksRUFBRSxLQUREO01BRUwsZ0JBQWdCLEVBQUUsQ0FBQyxDQUZkO01BR0wsT0FBTyxFQUFFLFVBSEo7TUFJTCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsV0FERjtRQUVSLE9BQU8sRUFBRyxVQUFDLENBQUQsRUFBd0M7VUFBQSxpRkFBUCxFQUFPO1VBQUEsSUFBdEIsQ0FBc0IsVUFBbEMsVUFBa0M7VUFBQSxJQUFiLENBQWEsVUFBbkIsSUFBbUI7O1VBQ2hELElBQU0sQ0FBQyxHQUFHLENBQVY7VUFDQSxPQUNHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBVixFQUNBLENBQUMsQ0FBQyxHQUFGLENBQU0sVUFBQSxDQUFDO1lBQUEsT0FDTCxDQUFDLENBQUMsS0FBRixDQUFRLFFBQVIsS0FBcUIsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxDQUFYLENBQXJCLEdBQXFDLENBQXJDLEdBQXlDLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUFDLEdBQUcsSUFBWCxHQUFrQixDQUR0RDtVQUFBLENBQVAsQ0FGRjtRQU1ELENBUlEsQ0FRTixDQVJNLEVBUUg7VUFBRSxJQUFJLEVBQUUsY0FBQSxDQUFDO1lBQUEsT0FBSSxDQUFDLENBQUMsTUFBRixHQUFXLENBQWY7VUFBQTtRQUFULENBUkcsQ0FGRDtRQVdSLE9BQU8sRUFBRSxDQVhEO1FBWVIsSUFBSSxFQUFFLENBWkU7UUFhUixRQUFRLEVBQUUsQ0FDUixpQkFEUSxFQUVSLGNBRlEsRUFHUixpQ0FIUSxFQUlSLGNBSlEsRUFLUixjQUxRLEVBTVIsZ0JBTlEsRUFPUixrQ0FQUSxFQVFSLGNBUlEsRUFTUixjQVRRLEVBVVIsYUFWUSxFQVdSLGFBWFEsRUFZUixjQVpRLEVBYVIsV0FiUSxFQWNSLG1CQWRRLEVBZVIsZ0JBZlE7TUFiRixDQUpMO01BbUNMLFFBQVEsRUFBRSxDQUNSO1FBQ0UsS0FBSyxFQUFFLENBQUMsTUFBRCxTQUFLLENBQUwsQ0FEVDtRQUVFLFFBQVEsRUFBRTtVQUNSLFFBQVEsRUFBRSxTQURGO1VBRVIsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FBVCxDQUZEO1VBR1IsT0FBTyxFQUFFLENBSEQ7VUFJUixJQUFJLEVBQUU7UUFKRTtNQUZaLENBRFEsRUFVUjtRQUNFLFNBQVMsRUFBRSxNQURiO1FBRUUsS0FBSyxFQUFFLENBQUMsQ0FDTixrQkFETSxFQUVOLGNBRk0sRUFHTixlQUhNLEVBSU4sa0JBSk07TUFGVixDQVZRLEVBbUJSLENBbkJRLEVBb0JSO1FBQUUsU0FBUyxFQUFFLFVBQWI7UUFBeUIsS0FBSyxFQUFFO01BQWhDLENBcEJRLEVBcUJSO1FBQ0UsU0FBUyxFQUFFLFFBRGI7UUFFRSxRQUFRLEVBQUUsQ0FDUjtVQUNFLEtBQUssRUFBRSxHQURUO1VBRUUsR0FBRyxFQUFFLEdBRlA7VUFHRSxRQUFRLEVBQUUsQ0FBQztZQUFFLEtBQUssRUFBRTtVQUFULENBQUQ7UUFIWixDQURRO01BRlosQ0FyQlEsRUErQlI7UUFDRSxLQUFLLEVBQUUsR0FEVDtRQUVFLEdBQUcsRUFBRSxHQUZQO1FBR0UsUUFBUSxFQUFFLENBQ1I7VUFDRSxLQUFLLEVBQUU7UUFEVCxDQURRO01BSFosQ0EvQlEsRUF3Q1IsQ0FBQyxDQUFDLGFBeENNLEVBeUNSLENBQUMsQ0FBQyxvQkF6Q00sRUEwQ1IsQ0ExQ1EsRUEyQ1I7UUFDRSxTQUFTLEVBQUUsVUFEYjtRQUVFLEtBQUssRUFBRSwrQ0FGVDtRQUdFLFNBQVMsRUFBRTtNQUhiLENBM0NRO0lBbkNMLENBQVA7RUFxRkQsQ0EzbEJEO0FBNGxCRCxDQXZtQkQsRUFGRjtBQTJtQkEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsT0FERixFQUVHLFlBQU07RUFDTDs7RUFDQSxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7SUFDWixPQUFPLENBQUMsR0FBSSxZQUFZLE9BQU8sQ0FBbkIsR0FBdUIsQ0FBdkIsR0FBMkIsQ0FBQyxDQUFDLE1BQWpDLEdBQTJDLElBQW5EO0VBQ0Q7O0VBQ0QsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFjO0lBQ1osT0FBTyxDQUFDLENBQUMsS0FBRCxFQUFRLENBQVIsRUFBVyxHQUFYLENBQVI7RUFDRDs7RUFDRCxTQUFTLENBQVQsR0FBaUI7SUFBQSxvQ0FBSCxDQUFHO01BQUgsQ0FBRztJQUFBOztJQUNmLE9BQU8sQ0FBQyxDQUFDLEdBQUYsQ0FBTSxVQUFBLENBQUM7TUFBQSxPQUFJLENBQUMsQ0FBQyxDQUFELENBQUw7SUFBQSxDQUFQLEVBQWlCLElBQWpCLENBQXNCLEVBQXRCLENBQVA7RUFDRDs7RUFDRCxTQUFTLENBQVQsR0FBaUI7SUFBQSxvQ0FBSCxDQUFHO01BQUgsQ0FBRztJQUFBOztJQUNmLE9BQU8sTUFBTSxDQUFDLENBQUMsR0FBRixDQUFNLFVBQUEsQ0FBQztNQUFBLE9BQUksQ0FBQyxDQUFDLENBQUQsQ0FBTDtJQUFBLENBQVAsRUFBaUIsSUFBakIsQ0FBc0IsR0FBdEIsQ0FBTixHQUFtQyxHQUExQztFQUNEOztFQUNELElBQU0sQ0FBQyxHQUFHLFNBQUosQ0FBSSxDQUFBLENBQUM7SUFBQSxPQUFJLENBQUMsQ0FBQyxJQUFELEVBQU8sQ0FBUCxFQUFVLE1BQU0sSUFBTixDQUFXLENBQVgsSUFBZ0IsSUFBaEIsR0FBdUIsSUFBakMsQ0FBTDtFQUFBLENBQVg7RUFBQSxJQUNFLENBQUMsR0FBRyxDQUFDLFVBQUQsRUFBYSxNQUFiLEVBQXFCLEdBQXJCLENBQXlCLENBQXpCLENBRE47RUFBQSxJQUVFLENBQUMsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLEdBQWpCLENBQXFCLENBQXJCLENBRk47RUFBQSxJQUdFLENBQUMsR0FBRyxDQUFDLEtBQUQsRUFBUSxNQUFSLENBSE47RUFBQSxJQUlFLENBQUMsR0FBRyxDQUNGLGdCQURFLEVBRUYsT0FGRSxFQUdGLE9BSEUsRUFJRixNQUpFLEVBS0YsS0FMRSxFQU1GLElBTkUsRUFPRixPQVBFLEVBUUYsTUFSRSxFQVNGLE9BVEUsRUFVRixPQVZFLEVBV0YsVUFYRSxFQVlGLGFBWkUsRUFhRixTQWJFLEVBY0YsT0FkRSxFQWVGLFFBZkUsRUFnQkYsUUFoQkUsRUFpQkYsSUFqQkUsRUFrQkYsU0FsQkUsRUFtQkYsTUFuQkUsRUFvQkYsTUFwQkUsRUFxQkYsV0FyQkUsRUFzQkYsYUF0QkUsRUF1QkYsb0JBdkJFLEVBd0JGLGFBeEJFLEVBeUJGLE9BekJFLEVBMEJGLEtBMUJFLEVBMkJGLE1BM0JFLEVBNEJGLEtBNUJFLEVBNkJGLE9BN0JFLEVBOEJGLElBOUJFLEVBK0JGLFFBL0JFLEVBZ0NGLFVBaENFLEVBaUNGLE9BakNFLEVBa0NGLFFBbENFLEVBbUNGLE9BbkNFLEVBb0NGLE9BcENFLEVBcUNGLGlCQXJDRSxFQXNDRixVQXRDRSxFQXVDRixJQXZDRSxFQXdDRixJQXhDRSxFQXlDRixNQXpDRSxFQTBDRixLQTFDRSxFQTJDRixVQTNDRSxFQTRDRixhQTVDRSxFQTZDRixhQTdDRSxFQThDRixNQTlDRSxFQStDRixVQS9DRSxFQWdERixVQWhERSxFQWlERixVQWpERSxFQWtERixTQWxERSxFQW1ERixpQkFuREUsRUFvREYsUUFwREUsRUFxREYsZ0JBckRFLEVBc0RGLFNBdERFLEVBdURGLFVBdkRFLEVBd0RGLGVBeERFLEVBeURGLFFBekRFLEVBMERGLFFBMURFLEVBMkRGLFVBM0RFLEVBNERGLFVBNURFLEVBNkRGLFFBN0RFLEVBOERGLEtBOURFLEVBK0RGLE1BL0RFLEVBZ0VGLFFBaEVFLEVBaUVGLFFBakVFLEVBa0VGLFdBbEVFLEVBbUVGLE9BbkVFLEVBb0VGLFFBcEVFLEVBcUVGLFFBckVFLEVBc0VGLE9BdEVFLEVBdUVGLE9BdkVFLEVBd0VGLE1BeEVFLEVBeUVGLEtBekVFLEVBMEVGLFdBMUVFLEVBMkVGLGlCQTNFRSxFQTRFRixtQkE1RUUsRUE2RUYsU0E3RUUsRUE4RUYsS0E5RUUsRUErRUYsTUEvRUUsRUFnRkYsT0FoRkUsRUFpRkYsT0FqRkUsRUFrRkYsU0FsRkUsQ0FKTjtFQUFBLElBd0ZFLENBQUMsR0FBRyxDQUFDLE9BQUQsRUFBVSxLQUFWLEVBQWlCLE1BQWpCLENBeEZOO0VBQUEsSUF5RkUsQ0FBQyxHQUFHLENBQ0YsWUFERSxFQUVGLGVBRkUsRUFHRixZQUhFLEVBSUYsTUFKRSxFQUtGLFdBTEUsRUFNRixNQU5FLEVBT0YsT0FQRSxDQXpGTjtFQUFBLElBa0dFLENBQUMsR0FBRyxDQUNGLGVBREUsRUFFRixTQUZFLEVBR0YsWUFIRSxFQUlGLE9BSkUsRUFLRixTQUxFLEVBTUYsUUFORSxFQU9GLFFBUEUsRUFRRixPQVJFLEVBU0YsU0FURSxFQVVGLGNBVkUsRUFXRixXQVhFLEVBWUYsV0FaRSxFQWFGLEtBYkUsRUFjRixlQWRFLEVBZUYsVUFmRSxFQWdCRixPQWhCRSxFQWlCRixXQWpCRSxFQWtCRixpQkFsQkUsRUFtQkYsMEJBbkJFLEVBb0JGLFVBcEJFLENBbEdOO0VBQUEsSUF3SEUsQ0FBQyxHQUFHLENBQ0YsS0FERSxFQUVGLEtBRkUsRUFHRixLQUhFLEVBSUYsUUFKRSxFQUtGLGtCQUxFLEVBTUYsWUFORSxFQU9GLE1BUEUsRUFRRixZQVJFLEVBU0YsV0FURSxFQVVGLDJCQVZFLEVBV0YsS0FYRSxFQVlGLEtBWkUsRUFhRixhQWJFLEVBY0YsY0FkRSxFQWVGLGNBZkUsRUFnQkYsY0FoQkUsRUFpQkYscUJBakJFLEVBa0JGLE9BbEJFLEVBbUJGLFVBbkJFLEVBb0JGLGVBcEJFLEVBcUJGLFVBckJFLEVBc0JGLFFBdEJFLEVBdUJGLE1BdkJFLEVBd0JGLG1DQXhCRSxFQXlCRixXQXpCRSxFQTBCRixNQTFCRSxFQTJCRixlQTNCRSxFQTRCRixnQkE1QkUsRUE2QkYsc0JBN0JFLEVBOEJGLDBCQTlCRSxFQStCRixtQkEvQkUsRUFnQ0YsWUFoQ0UsRUFpQ0YseUJBakNFLEVBa0NGLEtBbENFLENBeEhOO0VBQUEsSUE0SkUsQ0FBQyxHQUFHLENBQUMsQ0FDSCxtQkFERyxFQUVILGlCQUZHLEVBR0gsZ0JBSEcsRUFJSCxnQkFKRyxFQUtILGdCQUxHLEVBTUgsa0NBTkcsRUFPSCxpQkFQRyxFQVFILGlCQVJHLEVBU0gsaUJBVEcsRUFVSCxpQkFWRyxFQVdILGlCQVhHLEVBWUgsaUJBWkcsRUFhSCxpQkFiRyxFQWNILGlCQWRHLEVBZUgsaUJBZkcsRUFnQkgsaUJBaEJHLEVBaUJILGlCQWpCRyxFQWtCSCxVQWxCRyxDQTVKUDtFQUFBLElBZ0xFLENBQUMsR0FBRyxDQUFDLENBQ0gsQ0FERyxFQUVILGlCQUZHLEVBR0gsaUJBSEcsRUFJSCxpQkFKRyxFQUtILGlCQUxHLEVBTUgsaUJBTkcsQ0FoTFA7RUFBQSxJQXdMRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sR0FBUCxDQXhMUDtFQUFBLElBeUxFLENBQUMsR0FBRyxDQUFDLENBQ0gsV0FERyxFQUVILHNEQUZHLEVBR0gsd0RBSEcsRUFJSCx3REFKRyxFQUtILGlCQUxHLEVBTUgsOERBTkcsRUFPSCx3REFQRyxFQVFILDhCQVJHLEVBU0gsd0RBVEcsRUFVSCx3REFWRyxFQVdILDhCQVhHLENBekxQO0VBQUEsSUFzTUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLHdEQUFWLENBdE1QO0VBQUEsSUF1TUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEdBQVAsQ0F2TVA7RUFBQSxJQXdNRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQUQsRUFBVSxDQUFWLEVBQWEsR0FBYixDQXhNUDtFQUFBLElBeU1FLENBQUMsR0FBRyxDQUNGLGFBREUsRUFFRixDQUFDLENBQUMsY0FBRCxFQUFpQixDQUFDLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsR0FBbkIsQ0FBbEIsRUFBMkMsSUFBM0MsQ0FGQyxFQUdGLG1CQUhFLEVBSUYsaUJBSkUsRUFLRixxQkFMRSxFQU1GLFVBTkUsRUFPRixRQVBFLEVBUUYsZUFSRSxFQVNGLFVBVEUsRUFVRixjQVZFLEVBV0YsZUFYRSxFQVlGLFVBWkUsRUFhRixlQWJFLEVBY0YsV0FkRSxFQWVGLE1BZkUsRUFnQkYsU0FoQkUsRUFpQkYsbUJBakJFLEVBa0JGLFdBbEJFLEVBbUJGLFdBbkJFLEVBb0JGLENBQUMsQ0FBQyxRQUFELEVBQVcsQ0FBWCxFQUFjLElBQWQsQ0FwQkMsRUFxQkYsTUFyQkUsRUFzQkYsYUF0QkUsRUF1QkYsaUJBdkJFLEVBd0JGLGdDQXhCRSxFQXlCRixVQXpCRSxFQTBCRixtQkExQkUsRUEyQkYsU0EzQkUsRUE0QkYsa0JBNUJFLENBek1OO0VBQUEsSUF1T0UsQ0FBQyxHQUFHLENBQ0YsS0FERSxFQUVGLHlCQUZFLEVBR0YsT0FIRSxFQUlGLDJCQUpFLEVBS0YsYUFMRSxFQU1GLGlDQU5FLEVBT0YsU0FQRSxFQVFGLDZCQVJFLEVBU0YsTUFURSxFQVVGLDBCQVZFLEVBV0YsT0FYRSxDQXZPTjs7RUFvUEEsT0FBTyxVQUFBLENBQUMsRUFBSTtJQUNWLElBQU0sQ0FBQyxHQUFHO01BQUUsS0FBSyxFQUFFLEtBQVQ7TUFBZ0IsU0FBUyxFQUFFO0lBQTNCLENBQVY7SUFBQSxJQUNFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBRixDQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEI7TUFDNUIsUUFBUSxFQUFFLENBQUMsTUFBRDtJQURrQixDQUExQixDQUROO0lBQUEsSUFJRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsbUJBQUgsRUFBd0IsQ0FBeEIsQ0FKTjtJQUFBLElBS0UsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLFNBRFQ7TUFFRixLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUQsRUFBTyxDQUFDLENBQUMsQ0FBQyxNQUFELDRCQUFLLENBQUwsNEJBQVcsQ0FBWCxHQUFELENBQVIsQ0FGTjtNQUdGLEdBQUcsRUFBRSxDQUFDLE1BQUQsNEJBQUssQ0FBTCw0QkFBVyxDQUFYLEdBSEg7TUFJRixZQUFZLEVBQUUsQ0FBQztJQUpiLENBTE47SUFBQSxJQVdFLENBQUMsR0FBRztNQUNGLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBRCxFQUFPLENBQUMsTUFBRCxTQUFLLENBQUwsQ0FBUCxDQUROO01BRUYsU0FBUyxFQUFFO0lBRlQsQ0FYTjtJQUFBLElBZUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFGLENBQVMsVUFBQSxDQUFDO01BQUEsT0FBSSxZQUFZLE9BQU8sQ0FBdkI7SUFBQSxDQUFWLEVBQW9DLE1BQXBDLENBQTJDLENBQUMsS0FBRCxDQUEzQyxDQWZOO0lBQUEsSUFnQkUsQ0FBQyxHQUFHO01BQ0YsUUFBUSxFQUFFLENBQ1I7UUFDRSxTQUFTLEVBQUUsU0FEYjtRQUVFLEtBQUssRUFBRSxDQUFDLE1BQUQsNEJBQ0YsQ0FBQyxDQUNELE1BREEsQ0FDTyxVQUFBLENBQUM7VUFBQSxPQUFJLFlBQVksT0FBTyxDQUF2QjtRQUFBLENBRFIsRUFFQSxNQUZBLENBRU8sQ0FGUCxFQUdBLEdBSEEsQ0FHSSxDQUhKLENBREUsNEJBS0YsQ0FMRTtNQUZULENBRFE7SUFEUixDQWhCTjtJQUFBLElBOEJFLENBQUMsR0FBRztNQUNGLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FEVDtNQUVGLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBRixDQUFTLENBQVQsQ0FGUDtNQUdGLE9BQU8sRUFBRTtJQUhQLENBOUJOO0lBQUEsSUFtQ0UsQ0FBQyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBbkNOO0lBQUEsSUFvQ0UsQ0FBQyxHQUFHLENBQ0Y7TUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUQsRUFBTyxDQUFDLE1BQUQsU0FBSyxDQUFMLENBQVAsQ0FEVjtNQUVFLFNBQVMsRUFBRTtJQUZiLENBREUsRUFLRjtNQUFFLFNBQVMsRUFBRSxVQUFiO01BQXlCLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBRCxFQUFPLENBQUMsTUFBRCxTQUFLLENBQUwsQ0FBUCxFQUFnQixRQUFoQjtJQUFqQyxDQUxFLENBcENOO0lBQUEsSUEyQ0UsQ0FBQyxHQUFHO01BQUUsS0FBSyxFQUFFLElBQVQ7TUFBZSxTQUFTLEVBQUU7SUFBMUIsQ0EzQ047SUFBQSxJQTRDRSxDQUFDLEdBQUcsQ0FDRixDQURFLEVBRUY7TUFDRSxTQUFTLEVBQUUsVUFEYjtNQUVFLFNBQVMsRUFBRSxDQUZiO01BR0UsUUFBUSxFQUFFLENBQUM7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQUFELEVBQWU7UUFBRSxLQUFLLG9CQUFhLENBQWI7TUFBUCxDQUFmO0lBSFosQ0FGRSxDQTVDTjtJQUFBLElBb0RFLENBQUMsR0FBRyxrQkFwRE47SUFBQSxJQXFERSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLFNBQVMsRUFBRSxDQUZUO01BR0YsUUFBUSxFQUFFLENBQ1I7UUFDRSxLQUFLLEVBQ0g7TUFGSixDQURRLEVBS1I7UUFDRSxLQUFLLGtCQUFXLENBQVgsbUJBQXFCLENBQXJCO01BRFAsQ0FMUSxFQVFSO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0FSUSxFQVdSO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0FYUTtJQUhSLENBckROO0lBQUEsSUFzRUUsQ0FBQyxHQUFHLFNBQUosQ0FBSTtNQUFBLElBQUMsQ0FBRCx1RUFBSyxFQUFMO01BQUEsT0FBYTtRQUNmLFNBQVMsRUFBRSxPQURJO1FBRWYsUUFBUSxFQUFFLENBQ1I7VUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUQsRUFBTyxDQUFQLEVBQVUsWUFBVjtRQUFWLENBRFEsRUFFUjtVQUNFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBRCxFQUFPLENBQVAsRUFBVSx1QkFBVjtRQURWLENBRlE7TUFGSyxDQUFiO0lBQUEsQ0F0RU47SUFBQSxJQStFRSxDQUFDLEdBQUcsU0FBSixDQUFJO01BQUEsSUFBQyxDQUFELHVFQUFLLEVBQUw7TUFBQSxPQUFhO1FBQ2YsU0FBUyxFQUFFLE9BREk7UUFFZixLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUQsRUFBTyxDQUFQLEVBQVUsdUJBQVY7TUFGTyxDQUFiO0lBQUEsQ0EvRU47SUFBQSxJQW1GRSxDQUFDLEdBQUcsU0FBSixDQUFJO01BQUEsSUFBQyxDQUFELHVFQUFLLEVBQUw7TUFBQSxPQUFhO1FBQ2YsU0FBUyxFQUFFLE9BREk7UUFFZixLQUFLLEVBQUUsVUFGUTtRQUdmLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBRCxFQUFPLENBQVAsRUFBVSxJQUFWLENBSE87UUFJZixHQUFHLEVBQUU7TUFKVSxDQUFiO0lBQUEsQ0FuRk47SUFBQSxJQXlGRSxDQUFDLEdBQUcsU0FBSixDQUFJO01BQUEsSUFBQyxDQUFELHVFQUFLLEVBQUw7TUFBQSxPQUFhO1FBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksS0FBSixDQURPO1FBRWYsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFELEVBQVEsQ0FBUixDQUZTO1FBR2YsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBRixFQUFPLENBQUMsQ0FBQyxDQUFELENBQVIsRUFBYSxDQUFDLENBQUMsQ0FBRCxDQUFkO01BSEssQ0FBYjtJQUFBLENBekZOO0lBQUEsSUE4RkUsQ0FBQyxHQUFHLFNBQUosQ0FBSTtNQUFBLElBQUMsQ0FBRCx1RUFBSyxFQUFMO01BQUEsT0FBYTtRQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FETztRQUVmLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRCxFQUFNLENBQU4sQ0FGUztRQUdmLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFELENBQUYsRUFBTyxDQUFDLENBQUMsQ0FBRCxDQUFSO01BSEssQ0FBYjtJQUFBLENBOUZOO0lBQUEsSUFtR0UsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLFFBRFQ7TUFFRixRQUFRLEVBQUUsQ0FDUixDQUFDLEVBRE8sRUFFUixDQUFDLENBQUMsR0FBRCxDQUZPLEVBR1IsQ0FBQyxDQUFDLElBQUQsQ0FITyxFQUlSLENBQUMsQ0FBQyxLQUFELENBSk8sRUFLUixDQUFDLEVBTE8sRUFNUixDQUFDLENBQUMsR0FBRCxDQU5PLEVBT1IsQ0FBQyxDQUFDLElBQUQsQ0FQTyxFQVFSLENBQUMsQ0FBQyxLQUFELENBUk87SUFGUixDQW5HTjtJQUFBLElBZ0hFLENBQUMsR0FBRztNQUNGLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxHQUFUO0lBRE4sQ0FoSE47SUFBQSxJQW1IRSxDQUFDLEdBQUcsQ0FDRixDQURFLEVBRUY7TUFBRSxTQUFTLEVBQUUsVUFBYjtNQUF5QixLQUFLLEVBQUU7SUFBaEMsQ0FGRSxFQUdGO01BQ0UsU0FBUyxFQUFFLFVBRGI7TUFFRSxLQUFLLGVBQVEsQ0FBUjtJQUZQLENBSEUsQ0FuSE47SUFBQSxJQTJIRSxDQUFDLEdBQUcsQ0FDRjtNQUNFLEtBQUssRUFBRSxnQkFEVDtNQUVFLFNBQVMsRUFBRSxTQUZiO01BR0UsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLENBQ1I7VUFBRSxLQUFLLEVBQUUsSUFBVDtVQUFlLEdBQUcsRUFBRSxJQUFwQjtVQUEwQixRQUFRLEVBQUUsQ0FBcEM7VUFBdUMsUUFBUSxZQUFNLENBQU4sR0FBUyxDQUFULEVBQVksQ0FBWjtRQUEvQyxDQURRO01BREo7SUFIVixDQURFLEVBVUY7TUFBRSxTQUFTLEVBQUUsU0FBYjtNQUF3QixLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUQsRUFBTSxDQUFDLE1BQUQsU0FBSyxDQUFMLENBQU47SUFBaEMsQ0FWRSxFQVdGO01BQ0UsU0FBUyxFQUFFLE1BRGI7TUFFRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUQsRUFBTSxDQUFOO0lBRlYsQ0FYRSxDQTNITjtJQUFBLElBMklFLENBQUMsR0FBRztNQUNGLEtBQUssRUFBRSxDQUFDLENBQUMsU0FBRCxDQUROO01BRUYsU0FBUyxFQUFFLENBRlQ7TUFHRixRQUFRLEVBQUUsQ0FDUjtRQUNFLFNBQVMsRUFBRSxNQURiO1FBRUUsS0FBSyxFQUFFLENBQUMsQ0FDTiwrREFETSxFQUVOLENBRk0sRUFHTixHQUhNO01BRlYsQ0FEUSxFQVNSO1FBQUUsU0FBUyxFQUFFLE1BQWI7UUFBcUIsS0FBSyxFQUFFLENBQTVCO1FBQStCLFNBQVMsRUFBRTtNQUExQyxDQVRRLEVBVVI7UUFBRSxLQUFLLEVBQUUsT0FBVDtRQUFrQixTQUFTLEVBQUU7TUFBN0IsQ0FWUSxFQVdSO1FBQ0UsS0FBSyxFQUFFLFFBRFQ7UUFFRSxTQUFTLEVBQUU7TUFGYixDQVhRLEVBZVI7UUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQUQsRUFBWSxDQUFDLENBQUMsQ0FBRCxDQUFiLENBQVY7UUFBNkIsU0FBUyxFQUFFO01BQXhDLENBZlE7SUFIUixDQTNJTjtJQUFBLElBZ0tFLENBQUMsR0FBRztNQUNGLEtBQUssRUFBRSxHQURMO01BRUYsR0FBRyxFQUFFLEdBRkg7TUFHRixRQUFRLEVBQUUsQ0FIUjtNQUlGLFFBQVEsWUFBTSxDQUFOLEVBQVksQ0FBWixFQUFrQixDQUFsQixHQUFxQixDQUFyQixFQUF3QixDQUF4QjtJQUpOLENBaEtOOztJQXNLQSxDQUFDLENBQUMsUUFBRixDQUFXLElBQVgsQ0FBZ0IsQ0FBaEI7SUFDQSxJQUFNLENBQUMsR0FBRztNQUNOLEtBQUssRUFBRSxJQUREO01BRU4sR0FBRyxFQUFFLElBRkM7TUFHTixTQUFTLEVBQUUsQ0FITDtNQUlOLFFBQVEsRUFBRSxDQUpKO01BS04sUUFBUSxHQUNOLE1BRE0sRUFFTjtRQUNFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FEVjtRQUVFLFFBQVEsRUFBRSxLQUZaO1FBR0UsU0FBUyxFQUFFO01BSGIsQ0FGTSxTQU9ILENBUEcsRUFRSCxDQVJHLEVBU0gsQ0FURyxFQVVILENBVkcsR0FXTixDQVhNLEVBWU4sQ0FaTSxHQWFILENBYkcsRUFjSCxDQWRHLEdBZU4sQ0FmTTtJQUxGLENBQVY7SUFBQSxJQXVCRSxDQUFDLEdBQUc7TUFDRixhQUFhLEVBQUUsTUFEYjtNQUVGLFFBQVEsRUFBRSxDQUNSO1FBQ0UsU0FBUyxFQUFFLE9BRGI7UUFFRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFILEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FGVjtRQUdFLFVBQVUsRUFBRSxDQUFDLENBSGY7UUFJRSxTQUFTLEVBQUU7TUFKYixDQURRLEVBT1IsQ0FQUTtJQUZSLENBdkJOO0lBQUEsSUFtQ0UsQ0FBQyxHQUFHO01BQ0YsS0FBSyxFQUFFLEdBREw7TUFFRixHQUFHLEVBQUUsR0FGSDtNQUdGLFFBQVEsWUFBTSxDQUFOLEdBQVMsQ0FBVDtJQUhOLENBbkNOO0lBQUEsSUF3Q0UsQ0FBQyxHQUFHO01BQ0YsS0FBSyxFQUFFLElBREw7TUFFRixHQUFHLEVBQUUsSUFGSDtNQUdGLFFBQVEsRUFBRSxDQUhSO01BSUYsUUFBUSxHQUNOO1FBQ0UsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUQsRUFBSSxNQUFKLENBQUYsQ0FBRixFQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUQsRUFBSSxLQUFKLEVBQVcsQ0FBWCxFQUFjLE1BQWQsQ0FBRixDQUFuQixDQURWO1FBRUUsR0FBRyxFQUFFLEdBRlA7UUFHRSxTQUFTLEVBQUUsQ0FIYjtRQUlFLFFBQVEsRUFBRSxDQUNSO1VBQUUsU0FBUyxFQUFFLFNBQWI7VUFBd0IsS0FBSyxFQUFFO1FBQS9CLENBRFEsRUFFUjtVQUFFLFNBQVMsRUFBRSxRQUFiO1VBQXVCLEtBQUssRUFBRTtRQUE5QixDQUZRO01BSlosQ0FETSxTQVVILENBVkcsRUFXSCxDQVhHLEVBWUgsQ0FaRyxHQWFOLENBYk0sRUFjTixDQWRNLEdBZUgsQ0FmRyxHQWdCTixDQWhCTSxFQWlCTixDQWpCTSxFQUpOO01BdUJGLFVBQVUsRUFBRSxDQUFDLENBdkJYO01Bd0JGLE9BQU8sRUFBRTtJQXhCUCxDQXhDTjtJQUFBLElBa0VFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxVQURUO01BRUYsS0FBSyxFQUFFLENBQUMsQ0FBQyxVQUFELENBRk47TUFHRixRQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBSFI7TUFJRixPQUFPLEVBQUUsQ0FBQyxJQUFELEVBQU8sR0FBUDtJQUpQLENBbEVOO0lBQUEsSUF3RUUsQ0FBQyxHQUFHO01BQ0YsU0FBUyxFQUFFLFVBRFQ7TUFFRixLQUFLLEVBQUUsb0NBRkw7TUFHRixRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsNEJBREQ7UUFFUixRQUFRLEVBQUU7TUFGRixDQUhSO01BT0YsUUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBUFI7TUFRRixPQUFPLEVBQUU7SUFSUCxDQXhFTjtJQUFBLElBa0ZFLENBQUMsR0FBRztNQUNGLGFBQWEsRUFBRSxVQURiO01BRUYsR0FBRyxFQUFFLENBQUMsQ0FBQyxnQkFGTDtNQUdGLFFBQVEsRUFBRSxDQUNSO1FBQ0UsU0FBUyxFQUFFLE9BRGI7UUFFRSxLQUFLLEVBQUUsQ0FGVDtRQUdFLFVBQVUsRUFBRSxDQUFDLENBSGY7UUFJRSxTQUFTLEVBQUU7TUFKYixDQURRO0lBSFIsQ0FsRk47SUFBQSxJQThGRSxDQUFDLEdBQUc7TUFDRixhQUFhLEVBQUUsaUJBRGI7TUFFRixHQUFHLEVBQUUsQ0FBQyxDQUFDLGdCQUZMO01BR0YsUUFBUSxFQUFFLENBQ1I7UUFDRSxTQUFTLEVBQUUsT0FEYjtRQUVFLEtBQUssRUFBRSxDQUZUO1FBR0UsU0FBUyxFQUFFO01BSGIsQ0FEUSxFQU1SO1FBQ0UsS0FBSyxFQUFFLEdBRFQ7UUFFRSxHQUFHLEVBQUUsR0FGUDtRQUdFLFNBQVMsRUFBRSxDQUhiO1FBSUUsVUFBVSxFQUFFLENBQUMsQ0FKZjtRQUtFLFFBQVEsWUFBTSxDQUFOLEVBQVksQ0FBWixDQUxWO1FBTUUsUUFBUSxFQUFFLENBQUMsQ0FBRDtNQU5aLENBTlE7SUFIUixDQTlGTjs7SUF4S1UsMkNBeVJNLENBQUMsQ0FBQyxRQXpSUjtJQUFBOztJQUFBO01BeVJWLG9EQUE0QjtRQUFBLElBQWpCLEdBQWlCOztRQUMxQixJQUFNLEdBQUMsR0FBRyxHQUFDLENBQUMsUUFBRixDQUFXLElBQVgsQ0FBZ0IsVUFBQSxDQUFDO1VBQUEsT0FBSSxlQUFlLENBQUMsQ0FBQyxLQUFyQjtRQUFBLENBQWpCLENBQVY7O1FBQ0EsR0FBQyxDQUFDLFFBQUYsR0FBYSxDQUFiOztRQUNBLElBQU0sR0FBQyxhQUFPLENBQVAsRUFBYSxDQUFiLEVBQW1CLENBQW5CLEdBQXNCLENBQXRCLEVBQXlCLENBQXpCLEdBQStCLENBQS9CLENBQVA7O1FBQ0EsR0FBQyxDQUFDLFFBQUYsZ0NBQ0ssR0FETCxJQUVFO1VBQUUsS0FBSyxFQUFFLElBQVQ7VUFBZSxHQUFHLEVBQUUsSUFBcEI7VUFBMEIsUUFBUSxHQUFHLE1BQUgsNEJBQWMsR0FBZDtRQUFsQyxDQUZGO01BSUQ7SUFqU1M7TUFBQTtJQUFBO01BQUE7SUFBQTs7SUFrU1YsT0FBTztNQUNMLElBQUksRUFBRSxPQUREO01BRUwsUUFBUSxFQUFFLENBRkw7TUFHTCxRQUFRLFlBQ0gsQ0FERyxHQUVOLENBRk0sRUFHTixDQUhNLEVBSU47UUFDRSxTQUFTLEVBQUUsT0FEYjtRQUVFLGFBQWEsRUFBRSxzQ0FGakI7UUFHRSxHQUFHLEVBQUUsS0FIUDtRQUlFLFVBQVUsRUFBRSxDQUFDLENBSmY7UUFLRSxRQUFRLEVBQUUsQ0FMWjtRQU1FLFFBQVEsR0FDTixDQUFDLENBQUMsT0FBRixDQUFVLENBQUMsQ0FBQyxVQUFaLEVBQXdCO1VBQ3RCLEtBQUssRUFBRTtRQURlLENBQXhCLENBRE0sU0FJSCxDQUpHO01BTlYsQ0FKTSxFQWlCTixDQWpCTSxFQWtCTixDQWxCTSxFQW1CTjtRQUNFLGFBQWEsRUFBRSxRQURqQjtRQUVFLEdBQUcsRUFBRSxHQUZQO1FBR0UsUUFBUSxZQUFNLENBQU4sQ0FIVjtRQUlFLFNBQVMsRUFBRTtNQUpiLENBbkJNLEdBeUJILENBekJHLEVBMEJILENBMUJHLEVBMkJILENBM0JHLEdBNEJOLENBNUJNLEVBNkJOLENBN0JNLEdBOEJILENBOUJHLEVBK0JILENBL0JHLEdBZ0NOLENBaENNLEVBaUNOLENBakNNO0lBSEgsQ0FBUDtFQXVDRCxDQXpVRDtBQTBVRCxDQTVrQkQsRUFGRjtBQWdsQkEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsWUFERixFQUVHLFlBQU07RUFDTDs7RUFDQSxJQUFNLENBQUMsR0FBRywwQkFBVjtFQUFBLElBQ0UsQ0FBQyxHQUFHLENBQ0YsSUFERSxFQUVGLElBRkUsRUFHRixJQUhFLEVBSUYsSUFKRSxFQUtGLEtBTEUsRUFNRixPQU5FLEVBT0YsU0FQRSxFQVFGLEtBUkUsRUFTRixLQVRFLEVBVUYsVUFWRSxFQVdGLElBWEUsRUFZRixRQVpFLEVBYUYsTUFiRSxFQWNGLE1BZEUsRUFlRixPQWZFLEVBZ0JGLE9BaEJFLEVBaUJGLFlBakJFLEVBa0JGLE1BbEJFLEVBbUJGLE9BbkJFLEVBb0JGLE1BcEJFLEVBcUJGLFNBckJFLEVBc0JGLEtBdEJFLEVBdUJGLFFBdkJFLEVBd0JGLFVBeEJFLEVBeUJGLFFBekJFLEVBMEJGLFFBMUJFLEVBMkJGLEtBM0JFLEVBNEJGLE9BNUJFLEVBNkJGLE9BN0JFLEVBOEJGLE9BOUJFLEVBK0JGLFVBL0JFLEVBZ0NGLE9BaENFLEVBaUNGLE9BakNFLEVBa0NGLFFBbENFLEVBbUNGLFFBbkNFLEVBb0NGLE1BcENFLEVBcUNGLFFBckNFLEVBc0NGLFNBdENFLENBRE47RUFBQSxJQXlDRSxDQUFDLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixNQUFsQixFQUEwQixXQUExQixFQUF1QyxLQUF2QyxFQUE4QyxVQUE5QyxDQXpDTjtFQUFBLElBMENFLENBQUMsR0FBRyxHQUFHLE1BQUgsQ0FDRixDQUNFLGFBREYsRUFFRSxZQUZGLEVBR0UsZUFIRixFQUlFLGNBSkYsRUFLRSxTQUxGLEVBTUUsU0FORixFQU9FLE1BUEYsRUFRRSxVQVJGLEVBU0UsT0FURixFQVVFLFlBVkYsRUFXRSxVQVhGLEVBWUUsV0FaRixFQWFFLG9CQWJGLEVBY0UsV0FkRixFQWVFLG9CQWZGLEVBZ0JFLFFBaEJGLEVBaUJFLFVBakJGLENBREUsRUFvQkYsQ0FDRSxXQURGLEVBRUUsTUFGRixFQUdFLE9BSEYsRUFJRSxTQUpGLEVBS0UsUUFMRixFQU1FLFVBTkYsRUFPRSxjQVBGLEVBUUUsUUFSRixFQVNFLFFBVEYsQ0FwQkUsRUErQkYsQ0FDRSxNQURGLEVBRUUsVUFGRixFQUdFLFFBSEYsRUFJRSxNQUpGLEVBS0UsTUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLEVBUUUsUUFSRixFQVNFLFVBVEYsRUFVRSxTQVZGLEVBV0UsT0FYRixFQVlFLFFBWkYsRUFhRSxLQWJGLEVBY0UsS0FkRixFQWVFLFNBZkYsRUFnQkUsU0FoQkYsRUFpQkUsT0FqQkYsRUFrQkUsU0FsQkYsRUFtQkUsTUFuQkYsRUFvQkUsU0FwQkYsRUFxQkUsY0FyQkYsRUFzQkUsWUF0QkYsRUF1QkUsWUF2QkYsRUF3QkUsV0F4QkYsRUF5QkUsYUF6QkYsRUEwQkUsYUExQkYsRUEyQkUsY0EzQkYsRUE0QkUsT0E1QkYsRUE2QkUsWUE3QkYsRUE4QkUsbUJBOUJGLEVBK0JFLGFBL0JGLEVBZ0NFLGVBaENGLEVBaUNFLGdCQWpDRixFQWtDRSxRQWxDRixDQS9CRSxFQW1FRixDQUNFLFdBREYsRUFFRSxlQUZGLEVBR0UsWUFIRixFQUlFLGdCQUpGLEVBS0UsYUFMRixFQU1FLFdBTkYsRUFPRSxVQVBGLENBbkVFLENBMUNOOztFQXVIQSxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7SUFDWixPQUFPLENBQUMsQ0FBQyxLQUFELEVBQVEsQ0FBUixFQUFXLEdBQVgsQ0FBUjtFQUNEOztFQUNELFNBQVMsQ0FBVCxHQUFpQjtJQUFBLG9DQUFILENBQUc7TUFBSCxDQUFHO0lBQUE7O0lBQ2YsT0FBTyxDQUFDLENBQ0wsR0FESSxDQUNBLFVBQUEsQ0FBQyxFQUFJO01BQ1IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFMLElBQVcsWUFBWSxPQUFPLENBQW5CLEdBQXVCLENBQXZCLEdBQTJCLENBQUMsQ0FBQyxNQUF4QyxHQUFrRCxJQUF6RDtNQUNBLElBQUksQ0FBSjtJQUNELENBSkksRUFLSixJQUxJLENBS0MsRUFMRCxDQUFQO0VBTUQ7O0VBQ0QsT0FBTyxVQUFBLENBQUMsRUFBSTtJQUNWLElBQU0sQ0FBQyxHQUFHO01BQ04sUUFBUSxFQUFFLENBREo7TUFFTixPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUNoQixNQURnQixFQUVoQixXQUZnQixFQUdoQixTQUhnQixFQUloQixXQUpnQixFQUtoQixRQUxnQixFQU1oQixTQU5nQixFQU9oQixXQVBnQixFQVFoQixZQVJnQixFQVNoQixTQVRnQixFQVVoQixVQVZnQixFQVdoQixVQVhnQixDQUFULENBRkg7TUFlTixPQUFPLEVBQUUsQ0FmSDtNQWdCTixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUNqQixLQURpQixFQUVqQixNQUZpQixFQUdqQixRQUhpQixFQUlqQixTQUppQixFQUtqQixRQUxpQixFQU1qQixRQU5pQixFQU9qQixPQVBpQixFQVFqQixNQVJpQixDQUFUO0lBaEJKLENBQVY7SUFBQSxJQTJCRSxDQUFDLEdBQUc7TUFBRSxTQUFTLEVBQUUsTUFBYjtNQUFxQixLQUFLLEVBQUU7SUFBNUIsQ0EzQk47SUFBQSxJQTRCRSxDQUFDLEdBQUcsU0FBSixDQUFJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQWE7TUFDZixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBRixDQUFXLFNBQVgsQ0FBcUIsVUFBQSxDQUFDO1FBQUEsT0FBSSxDQUFDLENBQUMsS0FBRixLQUFZLENBQWhCO01BQUEsQ0FBdEIsQ0FBVjtNQUNBLElBQUksQ0FBQyxDQUFELEtBQU8sQ0FBWCxFQUFjLE1BQU0sS0FBSyxDQUFDLDhCQUFELENBQVg7TUFDZCxDQUFDLENBQUMsUUFBRixDQUFXLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7SUFDRCxDQWhDSDtJQUFBLElBaUNFLENBQUMsR0FBSSxVQUFBLENBQUMsRUFBSTtNQUNSLElBQU0sQ0FBQyxHQUFHLENBQVY7TUFBQSxJQUNFLENBQUMsR0FBRztRQUNGLEtBQUssRUFBRSxxQkFETDtRQUVGLEdBQUcsRUFBRSwyQkFGSDtRQUdGLGlCQUFpQixFQUFFLDJCQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7VUFDM0IsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLE1BQUwsR0FBYyxDQUFDLENBQUMsS0FBMUI7VUFBQSxJQUNFLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBRixDQUFRLENBQVIsQ0FETjtVQUVBLFFBQVEsQ0FBUixHQUNJLFFBQVEsQ0FBUixLQUNFLFVBQUMsQ0FBRCxVQUFxQjtZQUFBLElBQVIsQ0FBUSxVQUFmLEtBQWU7WUFDckIsSUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssS0FBTCxDQUFXLENBQVgsQ0FBakI7WUFDQSxPQUFPLENBQUMsQ0FBRCxLQUFPLENBQUMsQ0FBQyxLQUFGLENBQVEsT0FBUixDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFkO1VBQ0QsQ0FIQSxDQUdFLENBSEYsRUFHSztZQUFFLEtBQUssRUFBRTtVQUFULENBSEwsS0FJQyxDQUFDLENBQUMsV0FBRixFQUxGLENBREosR0FPSSxDQUFDLENBQUMsV0FBRixFQVBKO1FBUUQ7TUFkQyxDQUROO01BQUEsSUFpQkUsQ0FBQyxHQUFHO1FBQUUsUUFBUSxFQUFFLENBQVo7UUFBZSxPQUFPLEVBQUUsQ0FBeEI7UUFBMkIsT0FBTyxFQUFFLENBQXBDO1FBQXVDLFFBQVEsRUFBRTtNQUFqRCxDQWpCTjtNQUFBLElBa0JFLENBQUMsR0FBRyxzQkFsQk47TUFBQSxJQW1CRSxDQUFDLEdBQUcscUNBbkJOO01BQUEsSUFvQkUsQ0FBQyxHQUFHO1FBQ0YsU0FBUyxFQUFFLFFBRFQ7UUFFRixRQUFRLEVBQUUsQ0FDUjtVQUNFLEtBQUssaUJBQVUsQ0FBVixnQkFBaUIsQ0FBakIsc0JBQThCLENBQTlCO1FBRFAsQ0FEUSxFQUlSO1VBQ0UsS0FBSyxnQkFBUyxDQUFULG1CQUFtQixDQUFuQix5QkFBbUMsQ0FBbkM7UUFEUCxDQUpRLEVBT1I7VUFDRSxLQUFLLEVBQUU7UUFEVCxDQVBRLEVBVVI7VUFDRSxLQUFLLEVBQUU7UUFEVCxDQVZRLEVBYVI7VUFDRSxLQUFLLEVBQUU7UUFEVCxDQWJRLEVBZ0JSO1VBQUUsS0FBSyxFQUFFO1FBQVQsQ0FoQlEsRUFpQlI7VUFDRSxLQUFLLEVBQUU7UUFEVCxDQWpCUSxDQUZSO1FBdUJGLFNBQVMsRUFBRTtNQXZCVCxDQXBCTjtNQUFBLElBNkNFLENBQUMsR0FBRztRQUNGLFNBQVMsRUFBRSxPQURUO1FBRUYsS0FBSyxFQUFFLFFBRkw7UUFHRixHQUFHLEVBQUUsS0FISDtRQUlGLFFBQVEsRUFBRSxDQUpSO1FBS0YsUUFBUSxFQUFFO01BTFIsQ0E3Q047TUFBQSxJQW9ERSxDQUFDLEdBQUc7UUFDRixLQUFLLEVBQUUsT0FETDtRQUVGLEdBQUcsRUFBRSxFQUZIO1FBR0YsTUFBTSxFQUFFO1VBQ04sR0FBRyxFQUFFLEdBREM7VUFFTixTQUFTLEVBQUUsQ0FBQyxDQUZOO1VBR04sUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFILEVBQXFCLENBQXJCLENBSEo7VUFJTixXQUFXLEVBQUU7UUFKUDtNQUhOLENBcEROO01BQUEsSUE4REUsQ0FBQyxHQUFHO1FBQ0YsS0FBSyxFQUFFLE1BREw7UUFFRixHQUFHLEVBQUUsRUFGSDtRQUdGLE1BQU0sRUFBRTtVQUNOLEdBQUcsRUFBRSxHQURDO1VBRU4sU0FBUyxFQUFFLENBQUMsQ0FGTjtVQUdOLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSCxFQUFxQixDQUFyQixDQUhKO1VBSU4sV0FBVyxFQUFFO1FBSlA7TUFITixDQTlETjtNQUFBLElBd0VFLENBQUMsR0FBRztRQUNGLFNBQVMsRUFBRSxRQURUO1FBRUYsS0FBSyxFQUFFLEdBRkw7UUFHRixHQUFHLEVBQUUsR0FISDtRQUlGLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBSCxFQUFxQixDQUFyQjtNQUpSLENBeEVOO01BQUEsSUE4RUUsQ0FBQyxHQUFHO1FBQ0YsU0FBUyxFQUFFLFNBRFQ7UUFFRixRQUFRLEVBQUUsQ0FDUixDQUFDLENBQUMsT0FBRixDQUFVLGNBQVYsRUFBMEIsTUFBMUIsRUFBa0M7VUFDaEMsU0FBUyxFQUFFLENBRHFCO1VBRWhDLFFBQVEsRUFBRSxDQUNSO1lBQ0UsU0FBUyxFQUFFLFFBRGI7WUFFRSxLQUFLLEVBQUUsWUFGVDtZQUdFLFFBQVEsRUFBRSxDQUNSO2NBQ0UsU0FBUyxFQUFFLE1BRGI7Y0FFRSxLQUFLLEVBQUUsS0FGVDtjQUdFLEdBQUcsRUFBRSxLQUhQO2NBSUUsU0FBUyxFQUFFO1lBSmIsQ0FEUSxFQU9SO2NBQ0UsU0FBUyxFQUFFLFVBRGI7Y0FFRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLGVBRmI7Y0FHRSxVQUFVLEVBQUUsQ0FBQyxDQUhmO2NBSUUsU0FBUyxFQUFFO1lBSmIsQ0FQUSxFQWFSO2NBQUUsS0FBSyxFQUFFLGFBQVQ7Y0FBd0IsU0FBUyxFQUFFO1lBQW5DLENBYlE7VUFIWixDQURRO1FBRnNCLENBQWxDLENBRFEsRUF5QlIsQ0FBQyxDQUFDLG9CQXpCTSxFQTBCUixDQUFDLENBQUMsbUJBMUJNO01BRlIsQ0E5RU47TUFBQSxJQTZHRSxDQUFDLEdBQUcsQ0FDRixDQUFDLENBQUMsZ0JBREEsRUFFRixDQUFDLENBQUMsaUJBRkEsRUFHRixDQUhFLEVBSUYsQ0FKRSxFQUtGLENBTEUsRUFNRixDQU5FLEVBT0YsQ0FBQyxDQUFDLFdBUEEsQ0E3R047TUFzSEEsQ0FBQyxDQUFDLFFBQUYsR0FBYSxDQUFDLENBQUMsTUFBRixDQUFTO1FBQ3BCLEtBQUssRUFBRSxJQURhO1FBRXBCLEdBQUcsRUFBRSxJQUZlO1FBR3BCLFFBQVEsRUFBRSxDQUhVO1FBSXBCLFFBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULENBQWdCLENBQWhCO01BSlUsQ0FBVCxDQUFiO01BTUEsSUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFILENBQVUsQ0FBVixFQUFhLENBQUMsQ0FBQyxRQUFmLENBQVY7TUFBQSxJQUNFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBRixDQUFTLENBQ1g7UUFDRSxLQUFLLEVBQUUsSUFEVDtRQUVFLEdBQUcsRUFBRSxJQUZQO1FBR0UsUUFBUSxFQUFFLENBSFo7UUFJRSxRQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUFnQixDQUFoQjtNQUpaLENBRFcsQ0FBVCxDQUROO01BQUEsSUFTRSxDQUFDLEdBQUc7UUFDRixTQUFTLEVBQUUsUUFEVDtRQUVGLEtBQUssRUFBRSxJQUZMO1FBR0YsR0FBRyxFQUFFLElBSEg7UUFJRixZQUFZLEVBQUUsQ0FBQyxDQUpiO1FBS0YsVUFBVSxFQUFFLENBQUMsQ0FMWDtRQU1GLFFBQVEsRUFBRSxDQU5SO1FBT0YsUUFBUSxFQUFFO01BUFIsQ0FUTjtNQWtCQSxPQUFPO1FBQ0wsSUFBSSxFQUFFLFlBREQ7UUFFTCxPQUFPLEVBQUUsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLEtBQWQsRUFBcUIsS0FBckIsQ0FGSjtRQUdMLFFBQVEsRUFBRSxDQUhMO1FBSUwsT0FBTyxFQUFFO1VBQUUsZUFBZSxFQUFFO1FBQW5CLENBSko7UUFLTCxPQUFPLEVBQUUsY0FMSjtRQU1MLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxPQUFGLENBQVU7VUFBRSxLQUFLLEVBQUUsU0FBVDtVQUFvQixNQUFNLEVBQUUsTUFBNUI7VUFBb0MsU0FBUyxFQUFFO1FBQS9DLENBQVYsQ0FEUSxFQUVSO1VBQ0UsS0FBSyxFQUFFLFlBRFQ7VUFFRSxTQUFTLEVBQUUsTUFGYjtVQUdFLFNBQVMsRUFBRSxFQUhiO1VBSUUsS0FBSyxFQUFFO1FBSlQsQ0FGUSxFQVFSLENBQUMsQ0FBQyxnQkFSTSxFQVNSLENBQUMsQ0FBQyxpQkFUTSxFQVVSLENBVlEsRUFXUixDQVhRLEVBWVIsQ0FaUSxFQWFSLENBYlEsRUFjUixDQWRRLEVBZVI7VUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUNOLFdBRE0sRUFFTixDQUFDLENBQ0MsQ0FBQyxDQUFDLDRDQUFELEVBQStDLENBQUMsR0FBRyxPQUFuRCxDQURGLENBRkssQ0FEVjtVQU9FLFNBQVMsRUFBRSxDQVBiO1VBUUUsUUFBUSxFQUFFLENBQ1I7WUFBRSxTQUFTLEVBQUUsTUFBYjtZQUFxQixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFELENBQWpDO1lBQTRDLFNBQVMsRUFBRTtVQUF2RCxDQURRO1FBUlosQ0FmUSxFQTJCUjtVQUNFLEtBQUssRUFDSCxNQUFNLENBQUMsQ0FBQyxjQUFSLEdBQXlCLGlDQUY3QjtVQUdFLFFBQVEsRUFBRSxtQkFIWjtVQUlFLFFBQVEsRUFBRSxDQUNSLENBRFEsRUFFUixDQUFDLENBQUMsV0FGTSxFQUdSO1lBQ0UsU0FBUyxFQUFFLFVBRGI7WUFFRSxLQUFLLEVBQ0gsNkRBQ0EsQ0FBQyxDQUFDLG1CQURGLEdBRUEsU0FMSjtZQU1FLFdBQVcsRUFBRSxDQUFDLENBTmhCO1lBT0UsR0FBRyxFQUFFLFFBUFA7WUFRRSxRQUFRLEVBQUUsQ0FDUjtjQUNFLFNBQVMsRUFBRSxRQURiO2NBRUUsUUFBUSxFQUFFLENBQ1I7Z0JBQ0UsS0FBSyxFQUFFLENBQUMsQ0FBQyxtQkFEWDtnQkFFRSxTQUFTLEVBQUU7Y0FGYixDQURRLEVBS1I7Z0JBQUUsU0FBUyxFQUFFLElBQWI7Z0JBQW1CLEtBQUssRUFBRSxTQUExQjtnQkFBcUMsSUFBSSxFQUFFLENBQUM7Y0FBNUMsQ0FMUSxFQU1SO2dCQUNFLEtBQUssRUFBRSxJQURUO2dCQUVFLEdBQUcsRUFBRSxJQUZQO2dCQUdFLFlBQVksRUFBRSxDQUFDLENBSGpCO2dCQUlFLFVBQVUsRUFBRSxDQUFDLENBSmY7Z0JBS0UsUUFBUSxFQUFFLENBTFo7Z0JBTUUsUUFBUSxFQUFFO2NBTlosQ0FOUTtZQUZaLENBRFE7VUFSWixDQUhRLEVBZ0NSO1lBQUUsS0FBSyxFQUFFLEdBQVQ7WUFBYyxTQUFTLEVBQUU7VUFBekIsQ0FoQ1EsRUFpQ1I7WUFBRSxTQUFTLEVBQUUsRUFBYjtZQUFpQixLQUFLLEVBQUUsSUFBeEI7WUFBOEIsR0FBRyxFQUFFLEtBQW5DO1lBQTBDLElBQUksRUFBRSxDQUFDO1VBQWpELENBakNRLEVBa0NSO1lBQ0UsUUFBUSxFQUFFLENBQ1I7Y0FBRSxLQUFLLEVBQUUsSUFBVDtjQUFlLEdBQUcsRUFBRTtZQUFwQixDQURRLEVBRVI7Y0FDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBRFg7Y0FFRSxZQUFZLENBQUMsQ0FBQyxpQkFGaEI7Y0FHRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBSFQsQ0FGUSxDQURaO1lBU0UsV0FBVyxFQUFFLEtBVGY7WUFVRSxRQUFRLEVBQUUsQ0FDUjtjQUNFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FEWDtjQUVFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FGVDtjQUdFLElBQUksRUFBRSxDQUFDLENBSFQ7Y0FJRSxRQUFRLEVBQUUsQ0FBQyxNQUFEO1lBSlosQ0FEUTtVQVZaLENBbENRLENBSlo7VUEwREUsU0FBUyxFQUFFO1FBMURiLENBM0JRLEVBdUZSO1VBQ0UsU0FBUyxFQUFFLFVBRGI7VUFFRSxhQUFhLEVBQUUsVUFGakI7VUFHRSxHQUFHLEVBQUUsTUFIUDtVQUlFLFVBQVUsRUFBRSxDQUFDLENBSmY7VUFLRSxRQUFRLEVBQUUsQ0FMWjtVQU1FLFFBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxDQUFDLENBQUMsT0FBRixDQUFVLENBQUMsQ0FBQyxVQUFaLEVBQXdCO1lBQUUsS0FBSyxFQUFFO1VBQVQsQ0FBeEIsQ0FBVCxFQUFnRCxDQUFoRCxDQU5aO1VBT0UsT0FBTyxFQUFFO1FBUFgsQ0F2RlEsRUFnR1I7VUFDRSxhQUFhLEVBQUU7UUFEakIsQ0FoR1EsRUFtR1I7VUFDRSxTQUFTLEVBQUUsVUFEYjtVQUVFLEtBQUssRUFDSCxDQUFDLENBQUMsbUJBQUYsR0FDQSwrREFKSjtVQUtFLFdBQVcsRUFBRSxDQUFDLENBTGhCO1VBTUUsUUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLFVBQVosRUFBd0I7WUFBRSxLQUFLLEVBQUU7VUFBVCxDQUF4QixDQUFKO1FBTlosQ0FuR1EsRUEyR1I7VUFDRSxRQUFRLEVBQUUsQ0FDUjtZQUNFLEtBQUssRUFBRSxRQUFRO1VBRGpCLENBRFEsRUFJUjtZQUFFLEtBQUssRUFBRSxRQUFRO1VBQWpCLENBSlEsQ0FEWjtVQU9FLFNBQVMsRUFBRTtRQVBiLENBM0dRLEVBb0hSO1VBQ0UsU0FBUyxFQUFFLE9BRGI7VUFFRSxhQUFhLEVBQUUsT0FGakI7VUFHRSxHQUFHLEVBQUUsT0FIUDtVQUlFLFVBQVUsRUFBRSxDQUFDLENBSmY7VUFLRSxPQUFPLEVBQUUsU0FMWDtVQU1FLFFBQVEsRUFBRSxDQUNSO1lBQ0UsYUFBYSxFQUFFO1VBRGpCLENBRFEsRUFJUixDQUFDLENBQUMscUJBSk07UUFOWixDQXBIUSxFQWlJUjtVQUNFLEtBQUssRUFBRSxtQkFEVDtVQUVFLEdBQUcsRUFBRSxNQUZQO1VBR0UsVUFBVSxFQUFFLENBQUMsQ0FIZjtVQUlFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLFVBQVosRUFBd0I7WUFBRSxLQUFLLEVBQUU7VUFBVCxDQUF4QixDQUFELEVBQXdDLE1BQXhDLEVBQWdELENBQWhEO1FBSlosQ0FqSVEsRUF1SVI7VUFDRSxLQUFLLEVBQUUscUJBQXFCLENBQXJCLEdBQXlCLE1BRGxDO1VBRUUsR0FBRyxFQUFFLElBRlA7VUFHRSxRQUFRLEVBQUUsU0FIWjtVQUlFLFFBQVEsRUFBRSxDQUNSLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLFVBQVosRUFBd0I7WUFBRSxLQUFLLEVBQUU7VUFBVCxDQUF4QixDQURRLEVBRVI7WUFBRSxLQUFLLEVBQUU7VUFBVCxDQUZRLEVBR1IsQ0FIUTtRQUpaLENBdklRLEVBaUpSO1VBQUUsS0FBSyxFQUFFO1FBQVQsQ0FqSlE7TUFOTCxDQUFQO0lBMEpELENBelNHLENBeVNELENBelNDLENBakNOOztJQTJVQSxPQUNFLE1BQU0sQ0FBQyxNQUFQLENBQWMsQ0FBQyxDQUFDLFFBQWhCLEVBQTBCLENBQTFCLEdBQ0EsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxlQUFWLENBQTBCLElBQTFCLENBQStCLENBQS9CLENBREEsRUFFQyxDQUFDLENBQUMsUUFBRixHQUFhLENBQUMsQ0FBQyxRQUFGLENBQVcsTUFBWCxDQUFrQixDQUM5QixDQUQ4QixFQUU5QjtNQUNFLGFBQWEsRUFBRSxXQURqQjtNQUVFLEdBQUcsRUFBRSxJQUZQO01BR0UsVUFBVSxFQUFFLENBQUM7SUFIZixDQUY4QixFQU85QjtNQUNFLGFBQWEsRUFBRSxXQURqQjtNQUVFLEdBQUcsRUFBRSxJQUZQO01BR0UsVUFBVSxFQUFFLENBQUMsQ0FIZjtNQUlFLFFBQVEsRUFBRTtJQUpaLENBUDhCLENBQWxCLENBRmQsRUFnQkEsQ0FBQyxDQUFDLENBQUQsRUFBSSxTQUFKLEVBQWUsQ0FBQyxDQUFDLE9BQUYsRUFBZixDQWhCRCxFQWlCQSxDQUFDLENBQUMsQ0FBRCxFQUFJLFlBQUosRUFBa0I7TUFDakIsU0FBUyxFQUFFLE1BRE07TUFFakIsU0FBUyxFQUFFLEVBRk07TUFHakIsS0FBSyxFQUFFO0lBSFUsQ0FBbEIsQ0FqQkQsRUFzQkMsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxJQUFYLENBQWdCLFVBQUEsQ0FBQztNQUFBLE9BQUksZUFBZSxDQUFDLENBQUMsU0FBckI7SUFBQSxDQUFqQixFQUFpRCxTQUFqRCxHQUE2RCxDQXRCOUQsRUF1QkEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxDQUFkLEVBQWlCO01BQ2YsSUFBSSxFQUFFLFlBRFM7TUFFZixPQUFPLEVBQUUsQ0FBQyxJQUFELEVBQU8sS0FBUDtJQUZNLENBQWpCLENBdkJBLEVBMkJBLENBNUJGO0VBOEJELENBMVdEO0FBMldELENBL2VELEVBRkY7QUFtZkEsSUFBSSxDQUFDLGdCQUFMLENBQ0UsT0FERixFQUVHLFlBQU07RUFDTDs7RUFDQSxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWM7SUFDWixPQUFPLENBQUMsR0FBSSxZQUFZLE9BQU8sQ0FBbkIsR0FBdUIsQ0FBdkIsR0FBMkIsQ0FBQyxDQUFDLE1BQWpDLEdBQTJDLElBQW5EO0VBQ0Q7O0VBQ0QsU0FBUyxDQUFULEdBQWlCO0lBQUEsb0NBQUgsQ0FBRztNQUFILENBQUc7SUFBQTs7SUFDZixPQUFPLENBQUMsQ0FBQyxHQUFGLENBQU0sVUFBQSxDQUFDO01BQUEsT0FBSSxDQUFDLENBQUMsQ0FBRCxDQUFMO0lBQUEsQ0FBUCxFQUFpQixJQUFqQixDQUFzQixFQUF0QixDQUFQO0VBQ0Q7O0VBQ0QsU0FBUyxDQUFULEdBQWlCO0lBQUEsb0NBQUgsQ0FBRztNQUFILENBQUc7SUFBQTs7SUFDZixPQUFPLE1BQU0sQ0FBQyxDQUFDLEdBQUYsQ0FBTSxVQUFBLENBQUM7TUFBQSxPQUFJLENBQUMsQ0FBQyxDQUFELENBQUw7SUFBQSxDQUFQLEVBQWlCLElBQWpCLENBQXNCLEdBQXRCLENBQU4sR0FBbUMsR0FBMUM7RUFDRDs7RUFDRCxPQUFPLFVBQUEsQ0FBQyxFQUFJO0lBQ1YsSUFBTSxDQUFDLEdBQUcseUJBQVY7SUFBQSxJQUNFLENBQUMsR0FBRyx1QkFETjtJQUFBLElBRUUsQ0FBQyxHQUFHLGlDQUZOO0lBQUEsSUFHRSxDQUFDLEdBQUcsd0JBSE47SUFBQSxJQUlFLENBQUMsR0FBRztNQUNGLFNBQVMsRUFBRSxTQURUO01BRUYsUUFBUSxFQUFFLENBQ1I7UUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUQsRUFBUSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBVCxFQUFpQixLQUFqQjtNQUFWLENBRFEsRUFFUjtRQUNFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBRCxFQUFRLENBQVIsRUFBVyxLQUFYO01BRFYsQ0FGUSxFQUtSO1FBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFELEVBQVEsQ0FBUixFQUFXLEtBQVg7TUFBVixDQUxRLEVBTVI7UUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUQsRUFBUSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBVCxFQUFpQixJQUFqQixFQUF1QixDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBeEIsRUFBZ0MsS0FBaEM7TUFEVixDQU5RO0lBRlIsQ0FKTjtJQUFBLElBaUJFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBRixDQUFVLEtBQVYsRUFBaUIsR0FBakIsRUFBc0I7TUFDeEIsUUFBUSxFQUFFLENBQ1I7UUFDRSxTQUFTLEVBQUUsUUFEYjtRQUVFLEtBQUssRUFBRSxNQUZUO1FBR0UsR0FBRyxFQUFFO01BSFAsQ0FEUTtJQURjLENBQXRCLENBakJOO0lBQUEsSUEwQkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsSUFBVixFQUFnQixHQUFoQixFQUFxQjtNQUN2QixRQUFRLEVBQUUsQ0FDUjtRQUNFLEtBQUssRUFBRTtNQURULENBRFEsRUFJUjtRQUFFLEtBQUssRUFBRTtNQUFULENBSlE7SUFEYSxDQUFyQixDQTFCTjtJQWtDQSxPQUFPO01BQ0wsSUFBSSxFQUFFLG1CQUREO01BRUwsT0FBTyxFQUFFLENBQUMsSUFBRCxDQUZKO01BR0wsZ0JBQWdCLEVBQUUsQ0FBQyxDQUhkO01BSUwsZ0JBQWdCLEVBQUU7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQUpiO01BS0wsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUNMLGkyQkFGTTtRQUdSLFFBQVEsRUFDTiwwT0FKTTtRQUtSLElBQUksRUFBRSwyR0FMRTtRQU1SLE9BQU8sRUFBRTtNQU5ELENBTEw7TUFhTCxPQUFPLEVBQUUsMkNBYko7TUFjTCxRQUFRLEVBQUUsQ0FDUjtRQUNFLFNBQVMsRUFBRSxRQURiO1FBRUUsS0FBSyxFQUFFO01BRlQsQ0FEUSxFQUtSO1FBQ0UsU0FBUyxFQUFFLFFBRGI7UUFFRSxLQUFLLEVBQUUsR0FGVDtRQUdFLEdBQUcsRUFBRSxHQUhQO1FBSUUsT0FBTyxFQUFFLElBSlg7UUFLRSxRQUFRLEVBQUUsQ0FBQztVQUFFLEtBQUssRUFBRTtRQUFULENBQUQ7TUFMWixDQUxRLEVBWVIsQ0FaUSxFQWFSO1FBQ0UsU0FBUyxFQUFFLFFBRGI7UUFFRSxTQUFTLEVBQUUsQ0FGYjtRQUdFLFFBQVEsRUFBRSxDQUNSO1VBQ0UsS0FBSyxFQUNIO1FBRkosQ0FEUSxFQUtSO1VBQUUsS0FBSyxFQUFFO1FBQVQsQ0FMUSxFQU1SO1VBQUUsS0FBSyxFQUFFO1FBQVQsQ0FOUSxFQU9SO1VBQ0UsS0FBSyxFQUFFO1FBRFQsQ0FQUSxFQVVSO1VBQUUsS0FBSyxFQUFFO1FBQVQsQ0FWUTtNQUhaLENBYlEsRUE2QlI7UUFDRSxTQUFTLEVBQUUsT0FEYjtRQUVFLEtBQUssRUFBRTtNQUZULENBN0JRLEVBaUNSLENBakNRLEVBa0NSLENBbENRLEVBbUNSO1FBQ0UsU0FBUyxFQUFFLE1BRGI7UUFFRSxLQUFLLEVBQ0gsMEVBSEo7UUFJRSxHQUFHLEVBQUUsR0FKUDtRQUtFLFFBQVEsRUFBRTtVQUNSLGdCQUNFO1FBRk0sQ0FMWjtRQVNFLFFBQVEsRUFBRSxDQUFDLENBQUQ7TUFUWixDQW5DUTtJQWRMLENBQVA7RUE4REQsQ0FqR0Q7QUFrR0QsQ0E3R0QsRUFGRjtBQWlIQSxJQUFJLENBQUMsZ0JBQUwsQ0FDRSxNQURGLEVBRUcsWUFBTTtFQUNMOztFQUNBLE9BQU8sVUFBQSxDQUFDLEVBQUk7SUFDVixJQUFJLENBQUMsR0FBRyx3QkFBUjtJQUFBLElBQ0UsQ0FBQyxHQUFHLDZCQUROO0lBQUEsSUFFRSxDQUFDLEdBQUc7TUFDRixTQUFTLEVBQUUsUUFEVDtNQUVGLFNBQVMsRUFBRSxDQUZUO01BR0YsUUFBUSxFQUFFLENBQ1I7UUFBRSxLQUFLLEVBQUUsR0FBVDtRQUFjLEdBQUcsRUFBRTtNQUFuQixDQURRLEVBRVI7UUFBRSxLQUFLLEVBQUUsR0FBVDtRQUFjLEdBQUcsRUFBRTtNQUFuQixDQUZRLEVBR1I7UUFBRSxLQUFLLEVBQUU7TUFBVCxDQUhRLENBSFI7TUFRRixRQUFRLEVBQUUsQ0FDUixDQUFDLENBQUMsZ0JBRE0sRUFFUjtRQUNFLFNBQVMsRUFBRSxtQkFEYjtRQUVFLFFBQVEsRUFBRSxDQUNSO1VBQUUsS0FBSyxFQUFFLE1BQVQ7VUFBaUIsR0FBRyxFQUFFO1FBQXRCLENBRFEsRUFFUjtVQUFFLEtBQUssRUFBRSxLQUFUO1VBQWdCLEdBQUcsRUFBRTtRQUFyQixDQUZRO01BRlosQ0FGUTtJQVJSLENBRk47SUFBQSxJQXFCRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFWLEVBQWE7TUFDZixRQUFRLEVBQUUsQ0FDUjtRQUFFLEtBQUssRUFBRSxHQUFUO1FBQWMsR0FBRyxFQUFFO01BQW5CLENBRFEsRUFFUjtRQUFFLEtBQUssRUFBRSxHQUFUO1FBQWMsR0FBRyxFQUFFO01BQW5CLENBRlEsRUFHUjtRQUFFLEtBQUssRUFBRTtNQUFULENBSFE7SUFESyxDQUFiLENBckJOO0lBQUEsSUE0QkUsQ0FBQyxHQUFHO01BQ0YsR0FBRyxFQUFFLEdBREg7TUFFRixjQUFjLEVBQUUsQ0FBQyxDQUZmO01BR0YsVUFBVSxFQUFFLENBQUMsQ0FIWDtNQUlGLFFBQVEsRUFBRSxDQUpSO01BS0YsU0FBUyxFQUFFO0lBTFQsQ0E1Qk47SUFBQSxJQW1DRSxDQUFDLEdBQUc7TUFDRixLQUFLLEVBQUUsSUFETDtNQUVGLEdBQUcsRUFBRSxJQUZIO01BR0YsUUFBUSxFQUFFLENBQUMsQ0FBRCxDQUhSO01BSUYsT0FBTyxFQUFFLEtBSlA7TUFLRixTQUFTLEVBQUU7SUFMVCxDQW5DTjtJQUFBLElBMENFLENBQUMsR0FBRztNQUNGLEtBQUssRUFBRSxLQURMO01BRUYsR0FBRyxFQUFFLEtBRkg7TUFHRixRQUFRLEVBQUUsQ0FBQyxDQUFELENBSFI7TUFJRixPQUFPLEVBQUUsS0FKUDtNQUtGLFNBQVMsRUFBRTtJQUxULENBMUNOO0lBQUEsSUFpREUsQ0FBQyxHQUFHLENBQ0Y7TUFDRSxTQUFTLEVBQUUsTUFEYjtNQUVFLFFBQVEsRUFBRSxDQUNSO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0FEUSxFQUlSO1FBQUUsS0FBSyxFQUFFO01BQVQsQ0FKUSxFQUtSO1FBQ0UsS0FBSyxFQUFFO01BRFQsQ0FMUTtJQUZaLENBREUsRUFhRjtNQUFFLFNBQVMsRUFBRSxNQUFiO01BQXFCLEtBQUssRUFBRSxXQUE1QjtNQUF5QyxTQUFTLEVBQUU7SUFBcEQsQ0FiRSxFQWNGO01BQ0UsU0FBUyxFQUFFLFFBRGI7TUFFRSxLQUFLLEVBQ0g7SUFISixDQWRFLEVBbUJGO01BQ0UsS0FBSyxFQUFFLFVBRFQ7TUFFRSxHQUFHLEVBQUUsU0FGUDtNQUdFLFdBQVcsRUFBRSxNQUhmO01BSUUsWUFBWSxFQUFFLENBQUMsQ0FKakI7TUFLRSxVQUFVLEVBQUUsQ0FBQyxDQUxmO01BTUUsU0FBUyxFQUFFO0lBTmIsQ0FuQkUsRUEyQkY7TUFBRSxTQUFTLEVBQUUsTUFBYjtNQUFxQixLQUFLLEVBQUUsV0FBVztJQUF2QyxDQTNCRSxFQTRCRjtNQUFFLFNBQVMsRUFBRSxNQUFiO01BQXFCLEtBQUssRUFBRSxPQUFPLENBQVAsR0FBVztJQUF2QyxDQTVCRSxFQTZCRjtNQUFFLFNBQVMsRUFBRSxNQUFiO01BQXFCLEtBQUssRUFBRSxNQUFNO0lBQWxDLENBN0JFLEVBOEJGO01BQUUsU0FBUyxFQUFFLE1BQWI7TUFBcUIsS0FBSyxFQUFFLE9BQU87SUFBbkMsQ0E5QkUsRUErQkY7TUFBRSxTQUFTLEVBQUUsTUFBYjtNQUFxQixLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsbUJBQVIsR0FBOEI7SUFBMUQsQ0EvQkUsRUFnQ0Y7TUFBRSxTQUFTLEVBQUUsTUFBYjtNQUFxQixLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsbUJBQVYsR0FBZ0M7SUFBNUQsQ0FoQ0UsRUFpQ0Y7TUFBRSxTQUFTLEVBQUUsUUFBYjtNQUF1QixLQUFLLEVBQUUsWUFBOUI7TUFBNEMsU0FBUyxFQUFFO0lBQXZELENBakNFLEVBa0NGLENBQUMsQ0FBQyxpQkFsQ0EsRUFtQ0Y7TUFBRSxhQUFhLEVBQUUsQ0FBakI7TUFBb0IsUUFBUSxFQUFFO1FBQUUsT0FBTyxFQUFFO01BQVg7SUFBOUIsQ0FuQ0UsRUFvQ0Y7TUFDRSxTQUFTLEVBQUUsUUFEYjtNQUVFLEtBQUssRUFDSDtJQUhKLENBcENFLEVBeUNGO01BQUUsU0FBUyxFQUFFLFFBQWI7TUFBdUIsS0FBSyxFQUFFLENBQUMsQ0FBQyxXQUFGLEdBQWdCLEtBQTlDO01BQXFELFNBQVMsRUFBRTtJQUFoRSxDQXpDRSxFQTBDRixDQTFDRSxFQTJDRixDQTNDRSxFQTRDRixDQTVDRSxDQWpETjtJQUFBLElBK0ZFLENBQUMsYUFBTyxDQUFQLENBL0ZIO0lBZ0dBLE9BQ0UsQ0FBQyxDQUFDLEdBQUYsSUFDQSxDQUFDLENBQUMsSUFBRixDQUFPLENBQVAsQ0FEQSxFQUVDLENBQUMsQ0FBQyxRQUFGLEdBQWEsQ0FGZCxFQUdBO01BQUUsSUFBSSxFQUFFLE1BQVI7TUFBZ0IsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFuQztNQUFzQyxPQUFPLEVBQUUsQ0FBQyxLQUFELENBQS9DO01BQXdELFFBQVEsRUFBRTtJQUFsRSxDQUpGO0VBTUQsQ0F2R0Q7QUF3R0QsQ0ExR0QsRUFGRjtlQStHZTtFQUNiLElBQUksRUFBSjtBQURhLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiAgXG4gICAgVE9ETzogXG4gICAgICAgIOiDveWcqOagueebruW9leiuvue9rum7mOiupOeKtuaAgeaYr+WHoOagj+eahFxuICAgICAgICDog73lpJ/orqnkvb/nlKjogIXlj5bmtojov5nnp43igJzorrDlv4bigJ1cbioqL1xuXG5cbi8vIFBD77yaaGVhZGVy5LiK55qE5bem5Y+z5oyJ6ZKu5Yy65Z+fXG5sZXQgYXJyb3dfbGVmdCA9ICQoJyNhcnJvd19sZWZ0Jyk7XG5sZXQgYXJyb3dfcmlnaHQgPSAkKCcjYXJyb3dfcmlnaHQnKTtcblxuLy8g5biD5bGA77ya54mI5b+D44CB5bem5Lit5Y+z5o6S54mIXG5sZXQgY3RfbGVmdCA9ICQoJy5jdF9sZWZ0Jyk7XG5sZXQgY3RfcmlnaHQgPSAkKCcuY3RfcmlnaHQnKTtcbmxldCBjdF9jZW50ZXIgPSAkKCcuY3RfY2VudGVyJyk7XG5sZXQgY29udGFpbmVyID0gJCgnLmNvbnRhaW5lcicpO1xuXG4vLyBQQy9hcHDvvJrliIfmjaJoZWFkZXJcbmxldCBoZWFkZXIgPSAkKCcuaGVhZGVyJyk7XG5sZXQgaGVhZGVyX2FwcCA9ICQoJy5oZWFkZXJfYXBwJyk7XG5cbi8vIGFwcO+8mmhlYWRlcuS4iueahOW3puWPs+aMiemSruWMuuWfn1xubGV0IGJ0bl9hcHBfc2lkZXIgPSAkKCcjYnRuX2FwcF9zaWRlcicpO1xubGV0IGJ0bl9hcHBfcmlnaHQgPSAkKCcjYnRuX2FwcF9yaWdodCcpO1xuXG4vLyBhcHDvvJrngrnlh7toZWFkZXJfYXBw5pe25YCZ5by55Ye65p2l55qE5oq95bGJXG5sZXQgYXBwX3NpZGVfZ2xhc3MgPSAkKCcjYXBwX3NpZGVfZ2xhc3MnKTtcbmxldCBhcHBfc2lkZV9jb250ZW50ID0gJCgnI2FwcF9zaWRlX2NvbnRlbnQnKTtcblxuLy8gMS7lt6bkuK3phY3nva5cbmxldCBvbmVfY29udGFpbmVyID0gJzgwJScgO1xubGV0IG9uZV9jdF9jZW50ZXJfd2lkdGggPSAnNzUlJztcbmxldCBvbmVfY3RfbGVmdF93aWR0aCA9ICcyNSUnO1xuLy8gMi4g5Lit5Y+z6YWN572uXG5sZXQgdHdvX2NvbnRhaW5lciA9ICc4MCUnIDtcbmxldCB0d29fY3RfY2VudGVyX3dpZHRoID0gJzc1JSc7XG5sZXQgdHdvX2N0X3JpZ2h0X3dpZHRoID0gJzI1JSc7XG4vLyAzLiDlt6bkuK3lj7PphY3nva5cbmxldCB0aHJlZV9jb250YWluZXIgPSAnOTUlJyA7XG5sZXQgdGhyZWVfY3RfY2VudGVyX3dpZHRoID0gJzYwJSc7XG5sZXQgdGhyZWVfY3RfcmlnaHRfd2lkdGggPSAnMjAlJztcbmxldCB0aHJlZV9jdF9sZWZ0X3dpZHRoID0gJzIwJSc7XG4vLyA0LiDkuK3phY3nva5cbmxldCBmb3VyX2NvbnRhaW5lciA9ICc3NSUnIDtcbmxldCBmb3VyX2N0X2NlbnRlcl93aWR0aCA9ICcxMDAlJztcbi8vIOiuvuWkh+Wwj+S6jjU2MHB455qE5Lit6YWN572uXG5sZXQgZGV2aWNlX3NtYWxsX2NvbnRhaW5lciA9IFwiOTglXCI7XG5sZXQgZGV2aWNlX3NtYWxsX2NlbnRlciA9IFwiMTAwJVwiO1xuLy8g6K6+5aSH5bCP5LqONzgwcHjnmoTkuK3phY3nva5cbmxldCBkZXZpY2VfY2VudGVyX2NvbnRhaW5lciA9IFwiOTYlXCI7XG5sZXQgZGV2aWNlX2NlbnRlcl9jZW50ZXIgPSBcIjEwMCVcIjtcblxuXG4vLyDliKTmlq1wY+auteW3puWPs+S4iuinkueahOeureWktOivpeaYvuekuuWTquS4qlxuZnVuY3Rpb24gbGVmdF9yaWdodF9hcnJvdyAoKSB7XG4gICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgfVxuICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBsZWZ0X2NlbnRlcl9yaWdodCAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IHRocmVlX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgY3RfcmlnaHQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9yaWdodF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdMUicpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW4g+WxgO+8muW3puS4reWPs1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ0xSJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbGVmdF9jZW50ZXIgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogb25lX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogb25lX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKHtcIndpZHRoXCI6IG9uZV9jdF9sZWZ0X3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW4g+WxgO+8muW3puS4rVwiKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gICAgfVxufVxuZnVuY3Rpb24gY2VudGVyX3JpZ2h0ICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IHR3b19jb250YWluZXJ9KTtcbiAgICBjdF9yaWdodC5jc3Moe1wid2lkdGhcIjogdHdvX2N0X3JpZ2h0X3dpZHRofSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0d29fY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdSJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5biD5bGA77ya5Lit5Y+zXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnUicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNlbnRlciAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiBmb3VyX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogZm91cl9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBsZWZ0X3JpZ2h0X2Fycm93ICgpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXlvdXQnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdDJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5biD5bGA77ya5LitXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnQycpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldmljZV9zbWFsbCAoKSB7XG4gICAgLy8g5pyA5bCP5bC65a+477ya5pyA5aSnNTYwcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjU2MHB45bC65a+4XCIpO1xuXG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAvLyDorr7nva7luIPlsYBcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9zbWFsbF9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9zbWFsbF9jZW50ZXJ9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcblxufVxuZnVuY3Rpb24gZGV2aWNlX2NlbnRlciAoKSB7XG4gICAgLy8g5Lit562J5bC65a+477ya5pyA5aSnOTgwcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjk4MHB45bC65a+4XCIpO1xuXG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAvLyDorr7nva7luIPlsYBcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9jZW50ZXJfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBkZXZpY2VfY2VudGVyX2NlbnRlcn0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuXG59XG5mdW5jdGlvbiBkZXZpY2VfbGFyZ2VzdCAoKSB7XG4gICAgLy8g5pyA5aSn5bC65a+477ya5pyA5aSnMTI2MXB4XG4gICAgY29uc29sZS5sb2coXCLlsI/kuo4xMjYxcHjlsLrlr7hcIik7XG5cbiAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG4gICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIGhlYWRlcl9hcHAuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcblxuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGN0X3JpZ2h0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfcmlnaHRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbn1cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYnRuX3BjX3N3aXRjaCgpO1xuICAgICAgICB0aGlzLmJ0bl9hcHBfc3dpdGNoKCk7XG4gICAgICAgIHRoaXMuYnJvd3Nlcl9yZW1lbWJlcigpO1xuICAgICAgICB0aGlzLmRldmljZV9zd2l0Y2goKTsgLy8g6L+Z5Liq5pS+5Yiw5pyA5ZCO6Ieq6LCD55SoIeWboOS4uuS4jeeuoeacrOWcsOWtmOWCqOaYr+S7gOS5iO+8jOacgOe7iOi/mOaYr+imgeagueaNruiuvuWkh+ebkeWQrOS4uuS4u1xuICAgIH0sXG4gICAgLyogUEPvvJrljZUv5Y+ML+S4ieagj+W4g+WxgOWIh+aNouaMiemSrueCueWHu+S6i+S7tiAqL1xuICAgIGJ0bl9wY19zd2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICBhcnJvd19sZWZ0LmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAvLyDovazmjaLliIfmjaLkuYvlkI7nmoTnrq3lpLTmjInpkq5cbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwnYmxvY2snKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy/lt6bkuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+W3puS4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy/kuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/kuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGFycm93X3JpZ2h0LmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDovazmjaLliIfmjaLkuYvlkI7nmoTnrq3lpLTmjInpkq5cbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwnYmxvY2snKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvL+S4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+W3puS4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvLyDkuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8g5bem5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qIOenu+WKqOerr+W3puWPs+S4iuinkueahOaMiemSriAqL1xuICAgIGJ0bl9hcHBfc3dpdGNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g54K55Ye75bem5oyJ6ZKuXG4gICAgICAgIGJ0bl9hcHBfc2lkZXIuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFwcF9zaWRlX2dsYXNzLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgICAgICAgICAgYXBwX3NpZGVfY29udGVudC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOeCueWHu+avm+eOu+eSg+eJh1xuICAgICAgICBhcHBfc2lkZV9nbGFzcy5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgYXBwX3NpZGVfZ2xhc3MuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICAgICAgICAgIGFwcF9zaWRlX2NvbnRlbnQuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOeCueWHu+WPs+aMiemSrlxuICAgICAgICBidG5fYXBwX3JpZ2h0LmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhbGVydChcIuacrOe9keermei/mOWcqOW8gOWPkeS4re+8jOivuOWkmuWKn+iDvei/mOacquWujOWWhO+8jOaVrOivt+acn+W+hX5cIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacrOe9keermei/mOWcqOW8gOWPkeS4re+8jOivuOWkmuWKn+iDvei/mOacquWujOWWhO+8jOaVrOivt+acn+W+hX5cIik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyog5rWP6KeI5Zmo6K6w5L2P5biD5bGAICovXG4gICAgYnJvd3Nlcl9yZW1lbWJlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgYl9sZWZ0ID0gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKTtcbiAgICAgICAgbGV0IGJfcmlnaHQgPSAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKTtcbiAgICAgICAgbGV0IGJfbGF5b3V0O1xuICAgIFxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgICAgICAvLyDmtY/op4jlmajmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgICAgICAgIGxldCBsYXlvdXRfY2hhbmdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnIlsYXlvdXTluIPlsYDnvJPlrZhcIik7ICAgIFxuICAgICAgICAgICAgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiTFJcIil7XG4gICAgICAgICAgICAgICAgLy8g5bem5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihsYXlvdXRfY2hhbmdlID09PSBcIkxcIikge1xuICAgICAgICAgICAgICAgIC8vIOW3puS4reW4g+WxgFxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiUlwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiQ1wiKSB7XG4gICAgICAgICAgICAgICAgLy8g5Lit5biD5bGAXG4gICAgICAgICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWFtuS7luiOq+WQjeWFtuWmmeeahOaDheWGtVxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmtY/op4jlmajmsqHmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rKh5pyJbGF5b3V05biD5bGA57yT5a2YXCIpO1xuICAgICAgICAgICAgaWYgKChiX2xlZnQgPT09IFwiYmxvY2tcIikgJiYgKGJfcmlnaHQgPT09IFwibm9uZVwiKSkgeyAvLyDlt6bkuK3luIPlsYBcbiAgICAgICAgICAgICAgICBiX2xheW91dCA9IFwiTFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoYl9sZWZ0ID09PSBcIm5vbmVcIikgJiYgKGJfcmlnaHQgPT09IFwiYmxvY2tcIikpIHsgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIlJcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGJfbGVmdCA9PT0gXCJibG9ja1wiKSAmJiAoYl9yaWdodCA9PT0gXCJibG9ja1wiKSkgeyAvL+W3puS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJMUlwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJMUlwiO1xuICAgICAgICAgICAgICAgIC8vIOW3puS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgYl9sYXlvdXQpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSxcbiAgICAvKiDlqpLkvZPmn6Xor6LluIPlsYAgKi9cbiAgICBkZXZpY2Vfc3dpdGNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g5Yib5bu65p+l6K+i5YiX6KGoXG4gICAgICAgIGxldCBkZXZpY2Vfd2lkdGggPSBbXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNTYwcHgpJyksXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTgwcHgpJyksXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTI2MXB4KScpXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8g5a6a5LmJ5Zue6LCD5Ye95pWwXG4gICAgICAgIGZ1bmN0aW9uIG1lZGlhTWF0Y2hzICgpIHtcbiAgICAgICAgICAgIGlmIChkZXZpY2Vfd2lkdGhbMF0ubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGRldmljZV9zbWFsbCAoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX3dpZHRoWzFdLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBkZXZpY2VfY2VudGVyICgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2Vfd2lkdGhbMl0ubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGRldmljZV9sYXJnZXN0ICgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWkp+S6juiuvuWumuacgOWkp+WwuuWvuOaDheWGtVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlhYjov5DooYzkuIDmrKHlm57osIPlh73mlbBcbiAgICAgICAgbWVkaWFNYXRjaHMoKTtcbiAgICAgICAgLy8g5Li65p+l6K+i5YiX6KGo5rOo5YaM55uR5ZCs5Zmo77yM5ZCM5pe25bCG5Zue6LCD5Ye95pWw5Lyg57uZ55uR5ZCs5ZmoXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGV2aWNlX3dpZHRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZXZpY2Vfd2lkdGhbaV0uYWRkTGlzdGVuZXIobWVkaWFNYXRjaHMpO1xuICAgICAgICB9XG4gICAgfSxcbn1cblxuXG4iLCIvKlxuICogQEF1dGhvcjogd3p0bGluazEwMTNcbiAqIEBEYXRlOiAyMDIyLTA3LTA3IDE4OjQ4OjE4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTA4LTA2IDE0OjUxOjI5XG4gKiBARGVzY3JpcHRpb246XG4gKi9cbmltcG9ydCBsYXlvdXRfb2JqZWN0IGZyb20gJy4vY29tbW9uL2xheW91dC5qcydcbmltcG9ydCB0b2Nfb2JqZWN0IGZyb20gJy4vcGFydC90b2MuanMnXG5pbXBvcnQgY29tbWVudHNfb2JqZWN0IGZyb20gJy4vcGFydC9jb21tZW50cy5qcydcbmltcG9ydCB7IGdvX3RvcF9vYmplY3QsIGdldFNjcm9sbCB9IGZyb20gJy4vcGFydC9nb190b3AuanMnXG5pbXBvcnQgd2ViX2luZm9fb2JqZWN0IGZyb20gJy4vcGFydC93ZWJfaW5mby5qcydcbmltcG9ydCBzZWFyY2hfb2JqZWN0IGZyb20gJy4vcGFydC9zZWFyY2guanMnXG5pbXBvcnQgc2hhcmVfb2JqZWN0IGZyb20gJy4vcGFydC9zaGFyZWJ1dHRvbi5qcydcbmltcG9ydCBjYXRlZ29yaWVzX29iamVjdCBmcm9tICcuL3BhcnQvY2F0ZWdvcmllcy5qcydcbmltcG9ydCBobGpzIGZyb20gJy4vcGx1Z2lucy9oaWdobGlnaHQvaGlnaGxpZ2h0Lm1pbi5qcydcbi8vIGltcG9ydCBfcnVuX1dhbGluZSBmcm9tICcuL3BsdWdpbnMvd2FsaW5lL3dhbGluZS5qcydcbi8vIOS7o+eggemrmOS6rlxuaGxqcy5oaWdobGlnaHRBbGwoKVxuLy8gX3J1bl9XYWxpbmUoKVxuXG4vLyDlhaXlj6Plh73mlbDvvIzkvJrlnKjpobXpnaLliqDovb3lrozmr5XmiafooYxcbiQoZnVuY3Rpb24gKCkge1xuICAvLyDliJ3lp4vljJbnm67lvZXohJrmnKzlh73mlbBcbiAgdG9jX29iamVjdC5pbml0KClcbiAgLy8g5Yid5aeL5YyW6K+E6K665qih5Z2X5LiL5omA5pyJ5Ye95pWwXG4gIGNvbW1lbnRzX29iamVjdC5pbml0KClcbiAgLy8g5Yid5aeL5YyW5Zue5Yiw6aG26YOoXG4gIGdvX3RvcF9vYmplY3QuaW5pdCgpXG4gIC8vIOW4g+WxgOWIneWni+WMllxuICBsYXlvdXRfb2JqZWN0LmluaXQoKVxuICBzZWFyY2hfb2JqZWN0LmluaXQoKVxuICAvLyDlhaXlj6Plh73mlbDliJ3lp4vljJbnvZHnq5nov5DooYzml7bpl7RcbiAgd2ViX2luZm9fb2JqZWN0LmluaXQoKVxuICAvLyDliIbkuqvmjInpkq7nmoTliJ3lp4vljJZcbiAgc2hhcmVfb2JqZWN0LmluaXQoKVxuICAvLyDnm67lvZXlh73mlbDliJ3lp4vljJZcbiAgY2F0ZWdvcmllc19vYmplY3QuaW5pdCgpXG4gIC8vIOWktOWbvuS8mOWMluS7o+eggVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJ0aWNsZV9pbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0Y2xlX2xpc3RfaXRlbV9pbWcnKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJ0aWNsZV9pbWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB3aWQgPSBhcnRpY2xlX2ltZ1tpXS5maXJzdEVsZW1lbnRDaGlsZC53aWR0aCArIDVcbiAgICAgIGxldCBoZWkgPSBhcnRpY2xlX2ltZ1tpXS5maXJzdEVsZW1lbnRDaGlsZC5oZWlnaHQgKyA3XG4gICAgICBhcnRpY2xlX2ltZ1tpXS5zdHlsZS5tYXhXaWR0aCA9IHdpZCArICdweCdcbiAgICAgIGFydGljbGVfaW1nW2ldLnN0eWxlLm1heEhlaWdodCA9IGhlaSArICdweCdcbiAgICB9XG4gIH0sIDEwMDApXG59KVxuIiwiLypcbiAqIEBBdXRob3I6IHd6dGxpbmsxMDEzXG4gKiBARGF0ZTogMjAyMi0wNy0wNyAxODo0ODoxOFxuICogQExhc3RFZGl0VGltZTogMjAyMi0wNy0xMCAyMTo0NzozMVxuICogQERlc2NyaXB0aW9uOlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhdGVnb3JpZXNfd2lkZ2V0KClcbiAgICB0aGlzLmhpdF9vcGVuX2Nsb3NlX2ZvcmRlcigpXG4gICAgdGhpcy5yZWFkbW9yZV9ibG9nX2Vzc2F5KClcbiAgfSxcbiAgLy8g54K55Ye7aWNvbuWxleW8gC/lhbPpl63moJHliIbnsbtcbiAgaGl0X29wZW5fY2xvc2VfZm9yZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gbGV0IGNhdGVfY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlX2NlbGwnKVxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZV9jZWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBpZiAoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgIC8vICAgICBsZXQgaXRlbSA9ICQoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdKVxuICAgIC8vICAgICBpdGVtLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICBpZiAoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgIC8vICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gICAgICAgfSBlbHNlIGlmIChcbiAgICAvLyAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID09PSAnaW5saW5lLWJsb2NrJ1xuICAgIC8vICAgICAgICkge1xuICAgIC8vICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC8vIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH0sXG4gIC8vIOWIneWni+WMllxuICBjYXRlZ29yaWVzX3dpZGdldDogZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcnJfbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnktbGlzdC1pdGVtJylcblxuICAgIGFycl9saS5mb3JFYWNoKGxpID0+IHtcbiAgICAgIC8vIOe+juWMluivpeWIhuexu+aAu+aVsFxuICAgICAgbGV0IG9ial93b3JkID0gbGkucXVlcnlTZWxlY3RvcignYScpLm5leHRFbGVtZW50U2libGluZ1xuICAgICAgb2JqX3dvcmQuaW5uZXJIVE1MID0gJyBbJyArIG9ial93b3JkLmlubmVySFRNTCArICddJ1xuICAgICAgLy8g6K+l5YiG57G75LiL5aaC5p6c5pyJ5a2Q5YiG57G7XG4gICAgICBpZiAobGkucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWxpc3QtY2hpbGQnKSkge1xuICAgICAgICAvLyDpu5jorqTmiYDmnInlrZDliIbnsbvlhajpg6jmlLbnvKlcbiAgICAgICAgbGkucXVlcnlTZWxlY3RvcigndWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIC8vIOWxleW8gOaMiemSrlxuICAgICAgICBsZXQgbm9kZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgbm9kZV8xLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgICAgICBub2RlXzEuaW5uZXJIVE1MID1cbiAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1wbHVzLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnXG4gICAgICAgIGxpLmluc2VydEJlZm9yZShub2RlXzEsIGxpLnF1ZXJ5U2VsZWN0b3IoJ2EnKSlcblxuICAgICAgICAvLyDmlLbnvKnmjInpkq5cbiAgICAgICAgbGV0IG5vZGVfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBub2RlXzIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBub2RlXzIuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgICAgIG5vZGVfMi5pbm5lckhUTUwgPVxuICAgICAgICAgICc8aSBjbGFzcz1cImZhIGZhLW1pbnVzLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnXG4gICAgICAgIGxpLmluc2VydEJlZm9yZShub2RlXzIsIGxpLnF1ZXJ5U2VsZWN0b3IoJ2EnKSlcblxuICAgICAgICAvLyDlsZXlvIDmjInpkq7ms6jlhozngrnlh7vkuovku7ZcbiAgICAgICAgbm9kZV8xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgbm9kZV8yLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgfSlcblxuICAgICAgICAvLyDmlLbnvKnmjInpkq7ms6jlhozngrnlh7vkuovku7ZcbiAgICAgICAgbm9kZV8yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG5vZGVfMi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgbm9kZV8xLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6K+l5YiG57G75LiL5rKh5pyJ5a2Q5YiG57G7XG4gICAgICAgIGxldCBub2RlXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykgLy8g5pS+5LiA5Liq5Y2g5L2N56ymXG4gICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgbm9kZV8xLnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzE1cHgnXG4gICAgICAgIG5vZGVfMS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBsaS5pbnNlcnRCZWZvcmUobm9kZV8xLCBsaS5xdWVyeVNlbGVjdG9yKCdhJykpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgLy8g5p+l55yL5pu05aSa6aG16Z2i77yM5LyY5YyW5Y2a5a6iL+maj+eslOaYvuekulxuICByZWFkbW9yZV9ibG9nX2Vzc2F5OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL2FyY2hpdmVzLycpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAvLyDljrvmjonnrKzkuIDkuKrvvJ/lrZfnrKZcbiAgICAgIGxldCBwYXJhbXMgPSBsb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpXG4gICAgICAvLyDmoLnmja495Y+35YiS5YiG5Y+C5pWwXG4gICAgICBsZXQgYXJyID0gcGFyYW1zLnNwbGl0KCc9JylcbiAgICAgIC8vIOiOt+WPlnBhZ2VfdHlwZeWPguaVsFxuICAgICAgbGV0IHBhZ2VfdHlwZSA9IGFyclsxXVxuICAgICAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFyY2hpdmVfYXJ0aWNsZV9saXN0JylcbiAgICAgIGZvciAobGV0IHUgPSAwOyB1IDwgdWwubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgLy8g5a+55q+P5LiA5LiqbGnov5vooYzliKTmlq3vvIzlpoLmnpzkuI3mmK/lj4LmlbDnmoTlgLzvvIzlsLHov5vooYzpmpDol49cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bFt1XS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBpbmRleCA9IHVsW3VdLmNoaWxkcmVuW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAnZHNhbCcpIHtcbiAgICAgICAgICAgIGluZGV4ID0gJ2Jsb2cnXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCAhPT0gcGFnZV90eXBlKSB7XG4gICAgICAgICAgICB1bFt1XS5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxufVxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbuOAkOaWh+eroOiuv+mXrumHj+aOkuWQjeOAkVxuICAgIOaWh+eroOmYheivu+mHj+WcqOWNleS4quaWh+eroOS4reWPr+S7peaYvuekuuS9huaYr+S4jeiDveaOkuWQje+8jOaOkuWQjeaAjuS5iOWunueOsOWRou+8n1xuICAgIOaWueahiDHvvJrkvb/nlKh2YWxpbmVcbiAgICDmlrnmoYgy77ya5Zyo5pyN5Yqh5Zmo5LiK6L+b6KGM5YWo56uZ55qE5paH56ug6K6/6Zeu77yM5o+Q5Y+W5LuW5Lus55qE6K6/6Zeu6YePaWRcbiAgICDmlrnmoYgz77ya5a+5dHdpa29v5LqR5Ye95pWw6L+b6KGM5Luj56CB5pu05pS577yM57G75Ly86K6/6Zeu6YePYXBpXG4gXG7jgJDor4TorrrliIfmjaLmjInpkq7jgJFcbiAgICDliIfmjaJ1dHRlcmFuY2Vz6K+E6K665ZCO77yM6aG16Z2i5Lya5Yi35paw5LiA5LiL54S25ZCO5Y+I5Zue5Yiw6buY6K6k6K+E6K6657O757uf5LqG77yM6L+Z5Liq5Y+v5Lul5LyY5YyWXG5cbuOAkOacgOaWsOivhOiuuuOAkVxuICAgIOacgOaWsOivhOiuuue7hOS7tu+8jOWmguaenGJsb2fpobXpnaLnlKjkuobvvIzpgqPkuYjov5nkuKrnu4Tku7blsLHkuI3og73mlL7lnKjnp7vliqjnq6/kvqfovrnmoI/kuobvvIxcbiAgICDlkIzkuIDkuKppZOS4jeiDveWkmuasoeeUqOeahOe8mOaVheWQl++8n1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8g5a+85Ye65Li65LiA5Liq5a+56LGhXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdvX2NvbW1lbnRzKClcbiAgICB0aGlzLmNvbW1lbnRzX2NvdW50KClcbiAgICB0aGlzLm5ld19jb21tZW50cygpXG4gICAgdGhpcy5zd2l0Y2hfY29tbWVudCgpXG4gICAgdHdpa29vXG4gICAgICAuaW5pdCh7XG4gICAgICAgIGVudklkOiAnaHR0cHM6Ly90d2lrb28ud3p0bGluazEwMTMuY29tLycsXG4gICAgICAgIGVsOiAnI3Rjb21tZW50JyxcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIC8vIHBhdGg6ICd3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUnLCAvLyDnlKjkuo7ljLrliIbkuI3lkIzmlofnq6DnmoToh6rlrprkuYkganMg6Lev5b6E77yM5aaC5p6c5oKo55qE5paH56ug6Lev5b6E5LiN5pivIGxvY2F0aW9uLnBhdGhuYW1l77yM6ZyA5Lyg5q2k5Y+C5pWwXG5cbiAgICAgICAgLy8g6K+E6K665Yqg6L295oiQ5Yqf5ZCO55qE5Zue6LCD5Ye95pWw44CCXG4gICAgICAgIC8vIOWPkeihqOivhOiuuuWQjuiHquWKqOWIt+aWsOivhOiuuuaXtuOAgeWKoOi9veS4i+S4gOmhteivhOiuuuaXtu+8jOS5n+S8muinpuWPkeOAglxuICAgICAgICAvLyDor4TorrrliqDovb3lpLHotKXml7bkuI3kvJrop6blj5HjgIJcbiAgICAgICAgb25Db21tZW50TG9hZGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1R3aWtvbyBhbGwgY29tbWVudHMgbG9hZGVkJylcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFR3aWtvbyDmiJDlip/mjILovb3lkI7nmoTlm57osIPlh73mlbDjgILnjq/looMgSUQg6ZSZ6K+v44CB572R57uc5byC5bi444CB5oyC6L295aSx6LSl562J5oOF5Ya15pe25LiN5Lya6Kem5Y+R44CCXG4gICAgICAgIGNvbnNvbGUubG9nKCdUd2lrb28gbG9hZGluZyBmaW5pc2hlZCcpXG4gICAgICB9KVxuICB9LFxuICAvLyDlj7PkuIvop5LmjInpkq7kuovku7Yg5piv5ZCm5YmN5b6A6K+E6K665Yy6XG4gIGdvX2NvbW1lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb19jb21tZW50cycpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cbiAgfSxcbiAgLy8g5paH56ug6K+E6K665pWwXG4gIGNvbW1lbnRzX2NvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yik5pat6aG16Z2i5piv5ZCm5pyJ6K+E6K665Yy6aWTlkozlvJXnlKjor4TorrrmlbDnmoRpZFxuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cycpICYmXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJylcbiAgICApIHtcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJylcbiAgICAgIC8vIEJPTeiOt+WPlumhtemdonVybOeahHBhdGhuYW1l6Lev5b6EXG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzX3VybCA9IFtsb2NhdGlvbi5wYXRobmFtZV1cblxuICAgICAgdHdpa29vXG4gICAgICAgIC5nZXRDb21tZW50c0NvdW50KHtcbiAgICAgICAgICBlbnZJZDogJ2h0dHBzOi8vdHdpa29vLnd6dGxpbmsxMDEzLmNvbS8nLCAvLyDnjq/looMgSURcbiAgICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgICB1cmxzOiB0d2lrb29fY29tbWVudHNfdXJsLCAvLyDkuI3ljIXlkKvljY/orq7jgIHln5/lkI3jgIHlj4LmlbDnmoTmlofnq6Dot6/lvoTliJfooajvvIzlv4XkvKDlj4LmlbBcbiAgICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlLCAvLyDor4TorrrmlbDmmK/lkKbljIXmi6zlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgLy8g5bCG6K+E6K665pWw5YaZ5YWl5YW25LitXG4gICAgICAgICAgdHdpa29vX2NvbW1lbnRzLmlubmVyVGV4dCA9IHJlc1swXS5jb3VudFxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgLy8g6L+U5Zue56S65L6LOiBbXG4gICAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEwL3Bvc3QtMS5odG1sJywgY291bnQ6IDEwIH0sXG4gICAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzExL3Bvc3QtMi5odG1sJywgY291bnQ6IDAgfSxcbiAgICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTIvcG9zdC0zLmh0bWwnLCBjb3VudDogMjAgfVxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAvLyDlj5HnlJ/plJnor69cbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIC8vIOacgOaWsOivhOiuulxuICBuZXdfY29tbWVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaG90X2FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdF9hcnRpY2xlc19pdGVtJylcbiAgICB2YXIgcGFnZV9zaXplID0gOFxuICAgIHR3aWtvb1xuICAgICAgLmdldFJlY2VudENvbW1lbnRzKHtcbiAgICAgICAgZW52SWQ6ICdodHRwczovL3R3aWtvby53enRsaW5rMTAxMy5jb20vJywgLy8g546v5aKDIElEXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICBwYWdlU2l6ZTogcGFnZV9zaXplLCAvLyDojrflj5blpJrlsJHmnaHvvIzpu5jorqTvvJoxMO+8jOacgOWkp++8mjEwMFxuICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlLCAvLyDmmK/lkKbljIXmi6zmnIDmlrDlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIG5ld19jb21tZW50c19sb2RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3X2NvbW1lbnRzX2xvZGluZycpXG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudCA9IG5ld19jb21tZW50c19sb2RpbmcucGFyZW50RWxlbWVudFxuICAgICAgICBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudC5yZW1vdmVDaGlsZChuZXdfY29tbWVudHNfbG9kaW5nKVxuICAgICAgICAvLyDmj5LlhaXor4TorrpcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlX3NpemU7IGkrKykge1xuICAgICAgICAgIGlmIChyZXNbaV0uY29tbWVudCkge1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19jb250ZW50ID0gcmVzW2ldLmNvbW1lbnRcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfbmljayA9IHJlc1tpXS5uaWNrXG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX3VybCA9IHJlc1tpXS51cmxcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfYXZhdGFyID0gcmVzW2ldLmF2YXRhclxuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c190aW1lID0gcmVzW2ldLnJlbGF0aXZlVGltZVxuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19pZCA9ICcjJyArIHJlc1tpXS5pZFxuXG4gICAgICAgICAgICB2YXIgaG90X2FydGljbGVzX2NoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgaG90X2FydGljbGVzX2NoaWxkLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaXRlbV91cFwiPjxpbWcgc3JjPVwiJyArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c19hdmF0YXIgK1xuICAgICAgICAgICAgICAnXCIgY2xhc3M9XCJhdmF0YXJcIj48ZGl2IGNsYXNzPVwibmlja19uYW1lXCI+PHNwYW4gY2xhc3M9XCJuaWNrXCI+JyArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c19uaWNrICtcbiAgICAgICAgICAgICAgJzwvc3Bhbj48c3BhbiBjbGFzcz1cInRpbWVcIj4nICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX3RpbWUgK1xuICAgICAgICAgICAgICAnPC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJpdGVtX2Rvd25cIj48YSBocmVmPVwiJyArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c191cmwgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfaWQgK1xuICAgICAgICAgICAgICAnXCI+JyArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c19jb250ZW50ICtcbiAgICAgICAgICAgICAgJzwvYT48L2Rpdj4nXG4gICAgICAgICAgICBob3RfYXJ0aWNsZXMuYXBwZW5kKGhvdF9hcnRpY2xlc19jaGlsZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgIH0pXG4gIH0sXG4gIC8vIOWIh+aNouivhOiuuijor4Torrrnu4Tku7blrZjlnKjml7YpXG4gIHN3aXRjaF9jb21tZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzd2l0Y2hfYnRuJykpIHtcbiAgICAgIHZhciBzd2l0Y2hfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N3aXRjaF9idG4nKVxuICAgICAgdmFyIGdpdGh1Yl9jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dpdGh1Yl9jb21tZW50JylcbiAgICAgIHZhciB0d2lrb29fY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0d2lrb29fY29tbWVudCcpXG5cbiAgICAgIHN3aXRjaF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaF9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnbW92ZScpXG4gICAgICAgIGdpdGh1Yl9jb21tZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRlbnQtaW4nKVxuICAgICAgICB0d2lrb29fY29tbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb250ZW50LWluJylcblxuICAgICAgICBpZiAoZ2l0aHViX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgZ2l0aHViX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICB0d2lrb29fY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVHdpa29vIOivhOiuuuezu+e7n1xuICAgICAgICAgIGdpdGh1Yl9jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICB0d2lrb29fY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSxcbn1cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIOe8k+aFouaYvuekulxuICAgICAgICDnvJPmhaLlm57liLDpobbpg6hcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiBsZXQgZ29fdG9wX29iamVjdCA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5nb190b3AoKTtcbiAgICAgICAgdGhpcy5jbGlja19nb190b3AoKTtcbiAgICB9LFxuICAgIGdvX3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8g5rua5Yqo5pi+56S6Z29fdG9w5oyJ6ZKuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgLy8g5oyB57ut55uR5ZCs5rua5Yqo54q25oCBXG4gICAgICAgICAgICBnZXRTY3JvbGwoKS50b3AgIT09IDAgPyAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIikgOiAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgY2xpY2tfZ29fdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g54K55Ye75Zue5Yiw6aG26YOoXG4gICAgICAgICQoXCIjZ29fdG9wXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy8gc2Nyb29sVG9w5YW85a655oCn5pa55qGIXG5mdW5jdGlvbiBnZXRTY3JvbGwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0fHwwLFxuICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMFxuICAgIH07XG59XG5cblxuLy8g5aaC5p6c5LiN5YGa6buY6K6k5a+85YWl77yM5bCx5oyJ54Wn5LiL6Z2i5YaZ77yM5LiN6KaBZGVmYXVsdOivjVxuZXhwb3J0IHtcbiAgICBnb190b3Bfb2JqZWN0LCAvL+WvvOWHuuWvueixoVxuICAgIGdldFNjcm9sbCwgLy/lr7zlh7rpgJrnlKjlh73mlbBcbn1cblxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfSxcbiAgICBzZWFyY2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaW5wdXRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1zZWFyY2gtaW5wdXRcIik7XG5cbiAgICAgICAgaWYgKGlucHV0QXJlYSkge1xuICAgICAgICAgICAgaW5wdXRBcmVhLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9ICfpppbmrKHmkJzntKJpbmfCt8K3wrcnO1xuICAgICAgICAgICAgICAgIGdldFNlYXJjaEZpbGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2xpY2sgPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaW5wdXRBcmVhLm9ua2V5ZG93biA9IGZ1bmN0aW9uKCkgeyBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykgcmV0dXJuIGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KSB7XG4gICAgICAgICAgICAvLyBjbGVhciBzZWFyY2ggcmVzdWx0XG4gICAgICAgICAgICB2YXIgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLXNlYXJjaC1jbG9zZVwiKTtcbiAgICAgICAgICAgIGJ0bkNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLnBsYWNlaG9sZGVyID0gJ+ivt+i+k+WFpeWFs+mUruivjSc7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLmZvY3VzKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2YXIgc2VhcmNoRnVuYyA9IGZ1bmN0aW9uKHBhdGgsIHNlYXJjaF9pZCwgY29udGVudF9pZCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdmFyIEJUTiA9IFwiPGRpdiBpZD0nbG9jYWwtc2VhcmNoLWNsb3NlJz7muIXnqbrmkJzntKI8L2Rpdj5cIlxuICAgICAgICAgICAgdmFyICRpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlYXJjaF9pZCk7XG4gICAgICAgICAgICB2YXIgJHJlc3VsdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50X2lkKTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBwYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXN1bWUgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5wbGFjZWhvbGRlciA9ICfovpPlhaXlhbPplK7or43ku6XmkJzntKInO1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciB4bWwgPSB4aHIucmVzcG9uc2VYTUw7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb290ID0geG1sLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3QgPSByb290LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZW50cnlcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aXRsZVwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNvbnRlbnRcIilbMF0uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVybFwiKVswXS5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9ICc8dWwgY2xhc3M9XFxcImFyY2hpdmVcXFwiPic7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5d29yZHMgPSB0aGlzLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9bXFxzXFwtXSsvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZS50cmltKCkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pys5Zyw5pCc57Si5Li75Luj56CBXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5mb3JFYWNoKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRfaW5kZXggPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEudGl0bGUgfHwgZGF0YS50aXRsZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGl0bGUgPSBcIlVudGl0bGVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfdGl0bGUgPSBkYXRhLnRpdGxlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YV90aXRsZSA9IG9yaWdfZGF0YV90aXRsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfY29udGVudCA9IGRhdGEuY29udGVudC50cmltKCkucmVwbGFjZSgvPFtePl0rPi9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YV9jb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YV91cmwgPSBkYXRhLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhfdGl0bGUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhfY29udGVudCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdF9vY2N1ciA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgbWF0Y2ggYXJ0aWxlcyB3aXRoIG5vdCBlbXB0eSBjb250ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhX2NvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfdGl0bGUgPSBkYXRhX3RpdGxlLmluZGV4T2Yoa2V5d29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleF9jb250ZW50ID0gZGF0YV9jb250ZW50LmluZGV4T2Yoa2V5d29yZCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X3RpdGxlIDwgMCAmJiBpbmRleF9jb250ZW50IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X2NvbnRlbnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4X2NvbnRlbnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X29jY3VyID0gaW5kZXhfY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGVudF9pbmRleC5wdXNoKHtpbmRleF9jb250ZW50OmluZGV4X2NvbnRlbnQsIGtleXdvcmRfbGVuOmtleXdvcmRfbGVufSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bGV56S657uT5p6cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzog5b6F5a6M5ZaE77yM5b6F5a6M5ZaEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjxsaT48YSBocmVmPSdcIiArbG9jYXRpb24ucHJvdG9jb2wrXCIvL1wiK2xvY2F0aW9uLmhvc3QrXCIvXCIrIGRhdGFfdXJsICsgXCInIGNsYXNzPSdhcmNoaXZlLXRpdGxlJz5cIiArIG9yaWdfZGF0YV90aXRsZSArIFwiPC9hPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IG9yaWdfZGF0YV9jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3Rfb2NjdXIgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3V0IG91dCAxMDAgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gZmlyc3Rfb2NjdXIgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmQgPSBmaXJzdF9vY2N1ciArIDMwO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5kID4gY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSBjb250ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoX2NvbnRlbnQgPSBjb250ZW50LnN1YnN0cihzdGFydCwgMTAwKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoaWdobGlnaHQgYWxsIGtleXdvcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnUyA9IG5ldyBSZWdFeHAoa2V5d29yZCwgXCJnaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaF9jb250ZW50ID0gbWF0Y2hfY29udGVudC5yZXBsYWNlKHJlZ1MsIFwiPGVtIGNsYXNzPVxcXCJzZWFyY2gta2V5d29yZFxcXCI+XCIgKyBrZXl3b3JkICsgXCI8L2VtPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjxwIGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIiArIG1hdGNoX2NvbnRlbnQgKyBcIi4uLjwvcD5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjwvbGk+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8L3VsPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCc8bGk+JykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gQlROICsgXCI8ZGl2IGNsYXNzPSdsb2NhbC1zZWFyY2gtZW1wdHknPuayoeacieaJvuWIsOS9oOaJgOimgeaQnOe0oueahOWGheWuueKApuKApjwvZGl2PlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBCVE4gKyBzdHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJTZWFyY2goJHJlc3VsdENvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB2YXIgZ2V0U2VhcmNoRmlsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHBhdGggPSBcIi9zZWFyY2gueG1sXCI7XG4gICAgICAgICAgICBzZWFyY2hGdW5jKHBhdGgsICdsb2NhbC1zZWFyY2gtaW5wdXQnLCAnbG9jYWwtc2VhcmNoLXJlc3VsdCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8g5YWo5bGA5oyJ6ZKu6K6+572uanPmmK/lkKblsZXnpLrmkJzntKLmoYZcbiAgICAgICAgdmFyIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hfYnRuJyk7XG4gICAgICAgIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhbC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB2YXIgc2VhcmNoX2Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9jbG9zZScpO1xuICAgICAgICBzZWFyY2hfY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxufVxuXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgbmVlZFNoYXJlQnV0dG9uXG4gIC0gVmVyc2lvbiAxLjAuMFxuICAtIENvcHlyaWdodCAyMDE1IER6bWl0cnkgVmFzaWxldXNraVxuXHQtIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVClcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2hhcmUoKTtcbiAgICB9LFxuICAgIHNoYXJlOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIGZpbmQgY2xvc2VzdFxuICAgIGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbSwgcGFyZW50KSB7XG4gICAgICBpZiAodHlwZW9mKHBhcmVudCkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoZXNTZWxlY3RvciA9IGVsZW0ubWF0Y2hlcyB8fCBlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yO1xuICBcbiAgICAgICAgICAgICAgaWYgKCEhbWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNTZWxlY3Rvci5iaW5kKGVsZW0pKHBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICBpZiAoZWxlbSA9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIHNoYXJlIGJ1dHRvbiBjbGFzc1xuICAgICAgd2luZG93Lm5lZWRTaGFyZUJ1dHRvbiA9IGZ1bmN0aW9uKGVsZW0sIG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBjcmVhdGUgZWxlbWVudCByZWZlcmVuY2VcbiAgICAgICAgICB2YXIgcm9vdCA9IHRoaXM7XG4gICAgICAgICAgcm9vdC5lbGVtID0gZWxlbSB8fCAnbmVlZC1zaGFyZS1idXR0b24nO1xuICBcbiAgICAgICAgICAvKiBIZWxwZXJzXG4gICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIFxuICAgICAgLy8gZ2V0IHRpdGxlIGZyb20gaHRtbFxuICAgICAgcm9vdC5nZXRUaXRsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgIC8vIGNoZWNrIHF1ZXJ5U2VsZWN0b3IgZXhpc3RhbmNlIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjp0aXRsZVwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5pbm5lclRleHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQudGl0bGU7XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBnZXQgaW1hZ2UgZnJvbSBodG1sXG4gICAgICAgIHJvb3QuZ2V0SW1hZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmltYWdlXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBnZXQgZGVzY3JpcHRpb24gZnJvbSBodG1sXG4gICAgICAgIHJvb3QuZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKS5uYW1lZEl0ZW0oJ2Rlc2NyaXB0aW9uJykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gc2hhcmUgdXJscyBmb3IgYWxsIG5ldHdvcmtzXG4gICAgICAgIHJvb3Quc2hhcmUgPSB7XG4gICAgICAgICAgICAnd2VpYm8nOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3YudC5zaW5hLmNvbS5jbi9zaGFyZS9zaGFyZS5waHA/dGl0bGU9J1xuICAgICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgICArIFwiJnVybD1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgICArIFwiJnBpYz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3dlY2hhdCc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIGltZ1NyYyA9ICdodHRwczovL2FwaS5xcnNlcnZlci5jb20vdjEvY3JlYXRlLXFyLWNvZGUvP3NpemU9MTUweDE1MCZkYXRhPScrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICB2YXIgZHJvcGRvd25FbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bicpO1xuICAgICAgICAgICAgICB2YXIgaW1nID0gZHJvcGRvd25FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJylbMF07XG4gICAgICAgICAgICAgIHZhciBsb2FkZXIgPSBkcm9wZG93bkVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25lZWQtc2hhcmUtbG9hZGVyJylbMF07XG4gIFxuICAgICAgICAgICAgICAgIGlmIChpbWcpIHtcbiAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgICB9IGVsc2UgaWYobG9hZGVyKSB7XG4gICAgICAgICAgICBsb2FkZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbG9hZGVyLmNsYXNzTmFtZSA9ICduZWVkLXNoYXJlLWxvYWRlcic7XG4gICAgICAgICAgICBsb2FkZXIuaW5uZXJUZXh0ID0gJ2xvYWRpbmcuLi4nO1xuICAgICAgICAgICAgbG9hZGVyLnRpdGxlID0gJ2xvYWRpbmcgcXJjb2RlLi4uJztcbiAgXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gaW1nU3JjO1xuICAgICAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0NyZWF0ZSBxcmNvZGUgZmFpbGVkISc7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwnbmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAobG9hZGVyLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChsb2FkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgJ2RvdWJhbic6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cHM6Ly93d3cuZG91YmFuLmNvbS9zaGFyZS9zZXJ2aWNlP25hbWU9J1xuICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICsgXCImaHJlZj1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgKyBcIiZpbWFnZT1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3Fxem9uZSc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3Nucy5xem9uZS5xcS5jb20vY2dpLWJpbi9xenNoYXJlL2NnaV9xenNoYXJlX29uZWtleT90aXRsZT0nXG4gICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgKyBcIiZ1cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICsgXCImcGljcz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKVxuICAgICAgICAgICAgICArIFwiJmRlc2M9XCIrIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAncmVucmVuJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vd2lkZ2V0LnJlbnJlbi5jb20vZGlhbG9nL3NoYXJlP3RpdGxlPSdcbiAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICArIFwiJnJlc291cmNlVXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICArIFwiJnBpYz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKVxuICAgICAgICAgICAgICArIFwiJmRlc2NyaXB0aW9uPVwiKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gIFxuICAgICAgICAgICAgJ21haWx0bycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICdtYWlsdG86P3N1YmplY3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICsgJyZib2R5PVRob3VnaHQgeW91IG1pZ2h0IGVuam95IHJlYWRpbmcgdGhpczogJyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKSArICcgLSAnICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd0d2l0dGVyJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSc7XG4gICAgICAgICAgICAgICAgdXJsICs9IGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICsgXCImdXJsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BpbnRlcmVzdCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwaW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYm9va21hcmtsZXQvP2lzX3ZpZGVvPWZhbHNlJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZtZWRpYT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZhY2Vib29rJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5mYWNlYm9vay5jb20vc2hhcmUucGhwPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2dvb2dsZXBsdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGx1cy5nb29nbGUuY29tL3NoYXJlPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdyZWRkaXQnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LnJlZGRpdC5jb20vc3VibWl0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZGVsaWNpb3VzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ2RlbC5pY2lvLnVzL3Bvc3Q/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZub3Rlcz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAndGFwaXR1cmUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3RhcGl0dXJlLmNvbS9ib29rbWFya2xldC9pbWFnZT8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2ltZ19zcmM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3RpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgJ3N0dW1ibGV1cG9uJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnbGlua2VkaW4nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmc291cmNlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnNvdXJjZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAnc2xhc2hkb3QnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3NsYXNoZG90Lm9yZy9ib29rbWFyay5wbD8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vICd0ZWNobm9yYXRpJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0ZWNobm9yYXRpLmNvbS9mYXZlcz8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2FkZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdwb3N0ZXJvdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncG9zdGVyb3VzLmNvbS9zaGFyZT8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAnbGlua3RvPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndHVtYmxyJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy50dW1ibHIuY29tL3NoYXJlP3Y9Myc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ2dvb2dsZWJvb2ttYXJrcycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lmdvb2dsZS5jb20vYm9va21hcmtzL21hcms/b3A9ZWRpdCc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmJrbWs9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZhbm5vdGF0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gJ25ld3N2aW5lJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cubmV3c3ZpbmUuY29tL190b29scy9zZWVkJnNhdmU/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICd1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmg9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAncGluZ2ZtJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwaW5nLmZtL3JlZi8/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdsaW5rPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmYm9keT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdldmVybm90ZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZXZlcm5vdGUuY29tL2NsaXAuYWN0aW9uPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZnJpZW5kZmVlZCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZnJpZW5kZmVlZC5jb20vc2hhcmU/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd2a29udGFrdGUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndmtvbnRha3RlLnJ1L3NoYXJlLnBocD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICB1cmwgKz0gJyZpbWFnZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgdXJsICs9ICcmbm9wYXJzZT10cnVlJztcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdvZG5va2xhc3NuaWtpJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5vZG5va2xhc3NuaWtpLnJ1L2RrP3N0LmNtZD1hZGRTaGFyZSZzdC5zPTEnO1xuICAgICAgICAgIHVybCArPSAnJnN0LmNvbW1lbnRzPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICB1cmwgKz0gJyZzdC5fc3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ21haWxydScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnY29ubmVjdC5tYWlsLnJ1L3NoYXJlPyc7XG4gICAgICAgIC8vICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgLy8gICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyAgIHVybCArPSAnJmltYWdldXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBvcGVuIHNoYXJlIGxpbmsgaW4gYSBwb3B1cFxuICAgICAgICByb290LnBvcHVwID0gZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHZhciBsZWZ0LCB0b3A7IFxuICBcbiAgICAgICAgdmFyIHBvcHVwV2lkdGggPSA2MDAsXG4gICAgICAgICAgICBwb3B1cEhlaWdodCA9IDUwMDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBjYWN1bGF0ZSBicm93c2VyIHdpbmRvdyB3aWR0aFxuICAgICAgICAvLyBpZiB3aW5kb3cgd2lkdGggaXMgdG9vIG5hcnJvdywgdXNlIHNjcmVlbiB3aWR0aDtcbiAgICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6IHNjcmVlbi53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogc2NyZWVuLmhlaWdodDtcbiAgICAgICAgaWYgKHdpZHRoIDwgNjAwICYmIGhlaWdodCA8IDUwMCkge1xuICAgICAgICAgIGxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAocG9wdXBXaWR0aCAvIDIpO1xuICAgICAgICAgIHRvcCA9IChzY3JlZW4uaGVpZ2h0IC8gMikgLSAocG9wdXBIZWlnaHQgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzZXQgbGVmdCBhbmQgdG9wIHBvc2l0aW9uXG4gICAgICAgICAgICAgIHZhciBkdWFsU2NyZWVuTGVmdCA9IHdpbmRvdy5zY3JlZW5MZWZ0ICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogc2NyZWVuLmxlZnQsXG4gICAgICAgICAgICBkdWFsU2NyZWVuVG9wID0gd2luZG93LnNjcmVlblRvcCAhPSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogc2NyZWVuLnRvcDtcbiAgICAgICAgICAvLyBjYWxjdWxhdGUgdG9wIGFuZCBsZWZ0IHBvc2l0aW9uXG4gICAgICAgICAgbGVmdCA9ICgod2lkdGggLyAyKSAtIChwb3B1cFdpZHRoIC8gMikpICsgZHVhbFNjcmVlbkxlZnQ7XG4gICAgICAgICAgdG9wID0gKChoZWlnaHQgLyAyKSAtIChwb3B1cEhlaWdodCAvIDIpKSArIGR1YWxTY3JlZW5Ub3A7XG4gICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIHZhciBzaGFyZVdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwndGFyZ2V0V2luZG93JywndG9vbGJhcj1ubyxsb2NhdGlvbj1ubyxzdGF0dXM9bm8sbWVudWJhcj1ubyxzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHdpZHRoPScgKyBwb3B1cFdpZHRoICsgJywgaGVpZ2h0PScgKyBwb3B1cEhlaWdodCArICcsIHRvcD0nICsgdG9wICsgJywgbGVmdD0nICsgbGVmdCk7XG4gICAgICAgICAgICAvLyBQdXRzIGZvY3VzIG9uIHRoZSBuZXdXaW5kb3dcbiAgICAgICAgICBpZiAod2luZG93LmZvY3VzKSB7XG4gICAgICAgICAgICAgIHNoYXJlV2luZG93LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgICAvKiBTZXQgb3B0aW9uc1xuICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBcbiAgICAgICAgICAvLyBjcmVhdGUgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgICAgcm9vdC5vcHRpb25zID0ge1xuICAgICAgICAgICAgICBpY29uU3R5bGU6ICdkZWZhdWx0JywgLy8gZGVmYXVsdCBvciBib3hcbiAgICAgICAgICAgICAgYm94Rm9ybTogJ2hvcml6b250YWwnLCAvLyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tQ2VudGVyJywgLy8gdG9wIC8gbWlkZGxlIC8gYm90dG9tICsgTGVmdCAvIENlbnRlciAvIFJpZ2h0XG4gICAgICAgICAgICAgIHByb3RvY29sOiBbJ2h0dHAnLCAnaHR0cHMnXS5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc6JylbMF0pID09PSAtMSA/ICdodHRwczovLycgOiAnLy8nLFxuICAgICAgICAgICAgICBuZXR3b3JrczogJ1R3aXR0ZXIsRmFjZWJvb2ssUmVkZGl0LExpbmtlZGluLFR1bWJscixQaW50ZXJlc3QsV2VpYm8sV2VjaGF0LERvdWJhbixRUVpvbmUsTWFpbHRvJyxcbiAgICAgICAgICAgICAgaWNvbnM6IFsnZmEgZmEtdHdpdHRlcicsJ2ZhIGZhLWZhY2Vib29rJywnZmEgZmEtcmVkZGl0LWFsaWVuJywnZmEgZmEtbGlua2VkaW4nLCdmYSBmYS10dW1ibHInLCdmYSBmYS1waW50ZXJlc3QnLCdmYSBmYS13ZWlibycsJ2ZhIGZhLXdlaXhpbicsJzknLCdmYSBmYS1xcScsJ2ZhIGZhLWVudmVsb3BlLW8nXVxuICAgICAgICAgIH07XG4gIFxuICAgICAgLy8gaW50ZWdyYXRlIGN1c3RvbSBvcHRpb25zXG4gICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgcm9vdC5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnZlcnQgbmV0d29ya3Mgc3RyaW5nIGludG8gYXJyYXlcbiAgICAgIHJvb3Qub3B0aW9ucy5uZXR3b3JrcyA9IHJvb3Qub3B0aW9ucy5uZXR3b3Jrcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gIFxuICAgICAgZnVuY3Rpb24gZ2V0T3B0aW9ucyhlbCkge1xuICAgICAgICAgIC8vIGludGVncmF0ZSBkYXRhIGF0dHJpYnV0ZSBvcHRpb25zXG4gICAgICAgICAgdmFyIHJldCA9IHt9O1xuICAgICAgICAgIGZvciAodmFyIGkgaW4gcm9vdC5vcHRpb25zKSB7XG4gICAgICAgICAgICByZXRbaV0gPSByb290Lm9wdGlvbnNbaV07XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAvLyB0aGVzZSBhdHRycyBtdXN0IGdldCBkeW5hbWljYWxseS5cbiAgICAgICAgICByZXQudXJsID0gcm9vdC5vcHRpb25zLnVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICByZXQudGl0bGUgPSByb290Lm9wdGlvbnMudGl0bGUgfHwgcm9vdC5nZXRUaXRsZSgpO1xuICAgICAgICAgIHJldC5pbWFnZSA9IHJvb3Qub3B0aW9ucy5pbWFnZSB8fCByb290LmdldEltYWdlKCk7XG4gICAgICAgICAgcmV0LmRlc2NyaXB0aW9uID0gcm9vdC5vcHRpb25zLmRlc2NyaXB0aW9uIHx8IHJvb3QuZ2V0RGVzY3JpcHRpb24oKTtcbiAgXG4gICAgICAgICAgZm9yICh2YXIgb3B0aW9uIGluIGVsLmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgLy8gcmVwbGFjZSBvbmx5ICdzaGFyZS0nIHByZWZpeGVkIGRhdGEtYXR0cmlidXRlc1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5tYXRjaCgvc2hhcmUvKSkge1xuICAgICAgICAgICAgICB2YXIgbmV3X29wdGlvbiA9IG9wdGlvbi5yZXBsYWNlKC9zaGFyZS8sICcnKTtcbiAgICAgICAgICAgICAgaWYgKCFuZXdfb3B0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmV3X29wdGlvbiA9IG5ld19vcHRpb24uY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuZXdfb3B0aW9uLnNsaWNlKDEpO1xuICAgICAgICAgICAgICB2YXIgdmFsID0gZWwuZGF0YXNldFtvcHRpb25dO1xuICAgICAgICAgICAgICBpZiAobmV3X29wdGlvbiA9PT0gJ25ldHdvcmtzJykge1xuICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdfb3B0aW9uID09PSAndXJsJyAmJiB2YWwgJiYgdmFsWzBdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGZpeCByZWxhdGl2ZSB1cmwgcHJvYmxlbS5cbiAgICAgICAgICAgICAgICAgIHZhbCA9IGxvY2F0aW9uLm9yaWdpbiArIHZhbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXRbbmV3X29wdGlvbl0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gIFxuICAgICAgZnVuY3Rpb24gY3JlYXRlRHJvcGRvd24oZWwpIHtcbiAgICAgICAgICAvLyBjcmVhdGUgZHJvcGRvd25cbiAgICAgICAgICB2YXIgZHJvcGRvd25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSA9ICduZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bic7XG4gICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bicpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICBcbiAgICAgICAgICAvLyBzZXQgZHJvcGRvd24gcm93IGxlbmd0aFxuICAgICAgICAgIGlmIChteW9wdGlvbnMuaWNvblN0eWxlID09ICdib3gnICYmIG15b3B0aW9ucy5ib3hGb3JtID09ICdob3Jpem9udGFsJylcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3gtaG9yaXpvbnRhbCc7XG4gICAgICAgICAgZWxzZSBpZiAobXlvcHRpb25zLmljb25TdHlsZSA9PSAnYm94JyAmJiBteW9wdGlvbnMuYm94Rm9ybSA9PSAndmVydGljYWwnKVxuICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJveC12ZXJ0aWNhbCc7XG4gIFxuICAgICAgICAgIC8vIHNldCBkcm9wZG93biBwb3NpdGlvbiBcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKG15b3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgICAgICAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1sZWZ0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtcmlnaHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ3RvcENlbnRlcic6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdtaWRkbGVMZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLW1pZGRsZS1sZWZ0JztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpblRvcCA9IC0gZHJvcGRvd25FbC5vZmZzZXRIZWlnaHQgLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdtaWRkbGVSaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1taWRkbGUtcmlnaHQnO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luVG9wID0gLSBkcm9wZG93bkVsLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWxlZnQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1yaWdodCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tQ2VudGVyJzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1jZW50ZXInO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC0gZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwxKTtcbiAgXG4gIFxuICAgICAgICAgIC8vIGZpbGwgZnJvcGRvd24gd2l0aCBidXR0b25zXG4gICAgICAgICAgdmFyIGljb25DbGFzcyA9IG15b3B0aW9ucy5pY29uU3R5bGUgPT0gJ2RlZmF1bHQnID8gJ25lZWQtc2hhcmUtYnV0dG9uX2xpbmsgbmVlZC1zaGFyZS1idXR0b25fJyA6ICduZWVkLXNoYXJlLWJ1dHRvbl9saW5rLScgKyBteW9wdGlvbnMuaWNvblN0eWxlICsgJyBuZWVkLXNoYXJlLWJ1dHRvbl9saW5rIG5lZWQtc2hhcmUtYnV0dG9uXyc7XG4gICAgICAgICAgbGV0IGZsYWcgPSAwO1xuICAgICAgICAgIGZvciAodmFyIG5ldHdvcmsgaW4gbXlvcHRpb25zLm5ldHdvcmtzKSB7XG4gICAgICAgICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgbmV0d29yayA9IG15b3B0aW9ucy5uZXR3b3Jrc1tuZXR3b3JrXTtcbiAgICAgICAgICAgICAgbGluay5jbGFzc05hbWUgPSBpY29uQ2xhc3MgKyBuZXR3b3JrO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteW9wdGlvbnMuaWNvbnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgbGluay5jbGFzc05hbWUgKz0gJyAnK215b3B0aW9ucy5pY29uc1tmbGFnXTtcbiAgICAgICAgICAgICAgbGluay5kYXRhc2V0Lm5ldHdvcmsgPSBuZXR3b3JrO1xuICAgICAgICAgICAgICBsaW5rLnRpdGxlID0gbmV0d29yaztcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgICAgICAgZmxhZysrO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgZHJvcGRvd25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgIGlmIChjbG9zZXN0KGV2ZW50LnRhcmdldCwgJy5uZWVkLXNoYXJlLWJ1dHRvbl9saW5rJykpIHtcbiAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIFxuICAgICAgICAgICAgICAgICByb290LnNoYXJlW2V2ZW50LnRhcmdldC5kYXRhc2V0Lm5ldHdvcmtdKGVsKTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZHJvcGRvd25FbCk7XG4gICAgICB9XG4gIFxuICAgICAgdmFyIHRhcmdldEVsID0gdHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKSA6IGVsZW07XG4gICAgICAgaWYgKHRhcmdldEVsICYmIHRhcmdldEVsLmNsYXNzTGlzdC5jb250YWlucygnbmVlZC1zaGFyZS1wYW5lbCcpKSB7XG4gICAgICAgIGNyZWF0ZURyb3Bkb3duKHRhcmdldEVsKTtcbiAgICAgICAgLy8gdGFyZ2V0RWwuY2xhc3NMaXN0LmFkZCgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gICAgICB9IGVsc2UgXG4gICAgICAgIC8vIGNsb3NlIG9uIGNsaWNrIG91dHNpZGVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHZhciBvcGVuZWRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgXG4gICAgICAgICAgaWYgKCFjbG9zZXN0KGV2ZW50LnRhcmdldCwgJy5uZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKSkge1xuICAgICAgICAgICAgaWYgKG9wZW5lZEVsKSB7XG4gICAgICAgICAgICAgICAgb3BlbmVkRWwuY2xhc3NMaXN0LnJlbW92ZSgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gIFxuICAgICAgICAgICAgICAgIC8vIGhpZGUgd2VjaGF0IGNvZGUgaW1hZ2Ugd2hlbiBjbG9zZSB0aGUgZHJvcGRvd24uXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5lZEVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkRWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCByb290LmVsZW0pO1xuICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURyb3Bkb3duKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XG4gIFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICBcbiAgICB9O1xuICBcbiAgICBuZXcgbmVlZFNoYXJlQnV0dG9uKCcubmVlZC1zaGFyZS1idXR0b24nKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50b2NfYnRuKCk7XG4gICAgfSxcbiAgICB0b2NfYnRuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHRvY19jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9jX2NvbnRhaW5lcicpO1xuICAgICAgICBsZXQgdG9jX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2NfYnRuJyk7XG4gICAgICAgICQodG9jX2J0bikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICh0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJyl7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5cblxuXG4iLCIvKlxuICogQEF1dGhvcjogd3p0bGluazEwMTNcbiAqIEBEYXRlOiAyMDIyLTA3LTA3IDE4OjQ4OjE4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTA3LTEwIDAwOjI2OjExXG4gKiBARGVzY3JpcHRpb246XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMud2ViX2luZm9fcnVudGltZSgpXG4gIH0sXG4gIC8vIFRPRE86ICEhIeaIkeedgOWunuS4jeefpemBk+i/meaYr+S4quS7gOS5iOenmFxuICB3ZWJfaW5mb19ydW50aW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMScpKSB7XG4gICAgLy8gICBsZXQgQmlydGhEYXkgPSBuZXcgRGF0ZShuZXcgRGF0ZSgnMjAyMC8wMS8wNCcpKVxuICAgIC8vICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIC8vICAgbGV0IHRpbWVvbGQgPSB0b2RheS5nZXRUaW1lKCkgLSBCaXJ0aERheS5nZXRUaW1lKClcbiAgICAvLyAgIGxldCBkYXlzb2xkID0gTWF0aC5mbG9vcih0aW1lb2xkIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKVxuICAgIC8vICAgbGV0IG9iaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMScpXG4gICAgLy8gICBvYmouaW5uZXJIVE1MID0gZGF5c29sZCArICcg5aSpJ1xuICAgIC8vICAgY29uc29sZS5sb2cob2JqKVxuICAgIC8vIH1cbiAgfSxcbn1cbiIsIi8qXG4gIEhpZ2hsaWdodC5qcyAxMC43LjEgKDQyMWIyM2IwKVxuICBMaWNlbnNlOiBCU0QtMy1DbGF1c2VcbiAgQ29weXJpZ2h0IChjKSAyMDA2LTIwMjEsIEl2YW4gU2FnYWxhZXZcbiovXG52YXIgaGxqcyA9IChmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0J1xuICBmdW5jdGlvbiBlKHQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdCBpbnN0YW5jZW9mIE1hcFxuICAgICAgICA/ICh0LmNsZWFyID1cbiAgICAgICAgICAgIHQuZGVsZXRlID1cbiAgICAgICAgICAgIHQuc2V0ID1cbiAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdtYXAgaXMgcmVhZC1vbmx5JylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgOiB0IGluc3RhbmNlb2YgU2V0ICYmXG4gICAgICAgICAgKHQuYWRkID1cbiAgICAgICAgICAgIHQuY2xlYXIgPVxuICAgICAgICAgICAgdC5kZWxldGUgPVxuICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3NldCBpcyByZWFkLW9ubHknKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgIE9iamVjdC5mcmVlemUodCksXG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KS5mb3JFYWNoKG4gPT4ge1xuICAgICAgICB2YXIgaSA9IHRbbl1cbiAgICAgICAgJ29iamVjdCcgIT0gdHlwZW9mIGkgfHwgT2JqZWN0LmlzRnJvemVuKGkpIHx8IGUoaSlcbiAgICAgIH0pLFxuICAgICAgdFxuICAgIClcbiAgfVxuICB2YXIgdCA9IGUsXG4gICAgbiA9IGVcbiAgdC5kZWZhdWx0ID0gblxuICBjbGFzcyBpIHtcbiAgICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgICB2b2lkIDAgPT09IGUuZGF0YSAmJiAoZS5kYXRhID0ge30pLFxuICAgICAgICAodGhpcy5kYXRhID0gZS5kYXRhKSxcbiAgICAgICAgKHRoaXMuaXNNYXRjaElnbm9yZWQgPSAhMSlcbiAgICB9XG4gICAgaWdub3JlTWF0Y2goKSB7XG4gICAgICB0aGlzLmlzTWF0Y2hJZ25vcmVkID0gITBcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcyhlKSB7XG4gICAgcmV0dXJuIGVcbiAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJiN4Mjc7JylcbiAgfVxuICBmdW5jdGlvbiBhKGUsIC4uLnQpIHtcbiAgICBjb25zdCBuID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIGZvciAoY29uc3QgdCBpbiBlKSBuW3RdID0gZVt0XVxuICAgIHJldHVybiAoXG4gICAgICB0LmZvckVhY2goZSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgdCBpbiBlKSBuW3RdID0gZVt0XVxuICAgICAgfSksXG4gICAgICBuXG4gICAgKVxuICB9XG4gIGNvbnN0IHIgPSBlID0+ICEhZS5raW5kXG4gIGNsYXNzIGwge1xuICAgIGNvbnN0cnVjdG9yKGUsIHQpIHtcbiAgICAgIDsodGhpcy5idWZmZXIgPSAnJyksICh0aGlzLmNsYXNzUHJlZml4ID0gdC5jbGFzc1ByZWZpeCksIGUud2Fsayh0aGlzKVxuICAgIH1cbiAgICBhZGRUZXh0KGUpIHtcbiAgICAgIHRoaXMuYnVmZmVyICs9IHMoZSlcbiAgICB9XG4gICAgb3Blbk5vZGUoZSkge1xuICAgICAgaWYgKCFyKGUpKSByZXR1cm5cbiAgICAgIGxldCB0ID0gZS5raW5kXG4gICAgICBlLnN1Ymxhbmd1YWdlIHx8ICh0ID0gYCR7dGhpcy5jbGFzc1ByZWZpeH0ke3R9YCksIHRoaXMuc3Bhbih0KVxuICAgIH1cbiAgICBjbG9zZU5vZGUoZSkge1xuICAgICAgcihlKSAmJiAodGhpcy5idWZmZXIgKz0gJzwvc3Bhbj4nKVxuICAgIH1cbiAgICB2YWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1ZmZlclxuICAgIH1cbiAgICBzcGFuKGUpIHtcbiAgICAgIHRoaXMuYnVmZmVyICs9IGA8c3BhbiBjbGFzcz1cIiR7ZX1cIj5gXG4gICAgfVxuICB9XG4gIGNsYXNzIG8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgOyh0aGlzLnJvb3ROb2RlID0ge1xuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9KSxcbiAgICAgICAgKHRoaXMuc3RhY2sgPSBbdGhpcy5yb290Tm9kZV0pXG4gICAgfVxuICAgIGdldCB0b3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgfVxuICAgIGdldCByb290KCkge1xuICAgICAgcmV0dXJuIHRoaXMucm9vdE5vZGVcbiAgICB9XG4gICAgYWRkKGUpIHtcbiAgICAgIHRoaXMudG9wLmNoaWxkcmVuLnB1c2goZSlcbiAgICB9XG4gICAgb3Blbk5vZGUoZSkge1xuICAgICAgY29uc3QgdCA9IHsga2luZDogZSwgY2hpbGRyZW46IFtdIH1cbiAgICAgIHRoaXMuYWRkKHQpLCB0aGlzLnN0YWNrLnB1c2godClcbiAgICB9XG4gICAgY2xvc2VOb2RlKCkge1xuICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID4gMSkgcmV0dXJuIHRoaXMuc3RhY2sucG9wKClcbiAgICB9XG4gICAgY2xvc2VBbGxOb2RlcygpIHtcbiAgICAgIGZvciAoOyB0aGlzLmNsb3NlTm9kZSgpOyApO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5yb290Tm9kZSwgbnVsbCwgNClcbiAgICB9XG4gICAgd2FsayhlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5fd2FsayhlLCB0aGlzLnJvb3ROb2RlKVxuICAgIH1cbiAgICBzdGF0aWMgX3dhbGsoZSwgdCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgJ3N0cmluZycgPT0gdHlwZW9mIHRcbiAgICAgICAgICA/IGUuYWRkVGV4dCh0KVxuICAgICAgICAgIDogdC5jaGlsZHJlbiAmJlxuICAgICAgICAgICAgKGUub3Blbk5vZGUodCksXG4gICAgICAgICAgICB0LmNoaWxkcmVuLmZvckVhY2godCA9PiB0aGlzLl93YWxrKGUsIHQpKSxcbiAgICAgICAgICAgIGUuY2xvc2VOb2RlKHQpKSxcbiAgICAgICAgZVxuICAgICAgKVxuICAgIH1cbiAgICBzdGF0aWMgX2NvbGxhcHNlKGUpIHtcbiAgICAgICdzdHJpbmcnICE9IHR5cGVvZiBlICYmXG4gICAgICAgIGUuY2hpbGRyZW4gJiZcbiAgICAgICAgKGUuY2hpbGRyZW4uZXZlcnkoZSA9PiAnc3RyaW5nJyA9PSB0eXBlb2YgZSlcbiAgICAgICAgICA/IChlLmNoaWxkcmVuID0gW2UuY2hpbGRyZW4uam9pbignJyldKVxuICAgICAgICAgIDogZS5jaGlsZHJlbi5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICBvLl9jb2xsYXBzZShlKVxuICAgICAgICAgICAgfSkpXG4gICAgfVxuICB9XG4gIGNsYXNzIGMgZXh0ZW5kcyBvIHtcbiAgICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgICBzdXBlcigpLCAodGhpcy5vcHRpb25zID0gZSlcbiAgICB9XG4gICAgYWRkS2V5d29yZChlLCB0KSB7XG4gICAgICAnJyAhPT0gZSAmJiAodGhpcy5vcGVuTm9kZSh0KSwgdGhpcy5hZGRUZXh0KGUpLCB0aGlzLmNsb3NlTm9kZSgpKVxuICAgIH1cbiAgICBhZGRUZXh0KGUpIHtcbiAgICAgICcnICE9PSBlICYmIHRoaXMuYWRkKGUpXG4gICAgfVxuICAgIGFkZFN1Ymxhbmd1YWdlKGUsIHQpIHtcbiAgICAgIGNvbnN0IG4gPSBlLnJvb3RcbiAgICAgIDsobi5raW5kID0gdCksIChuLnN1Ymxhbmd1YWdlID0gITApLCB0aGlzLmFkZChuKVxuICAgIH1cbiAgICB0b0hUTUwoKSB7XG4gICAgICByZXR1cm4gbmV3IGwodGhpcywgdGhpcy5vcHRpb25zKS52YWx1ZSgpXG4gICAgfVxuICAgIGZpbmFsaXplKCkge1xuICAgICAgcmV0dXJuICEwXG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGcoZSkge1xuICAgIHJldHVybiBlID8gKCdzdHJpbmcnID09IHR5cGVvZiBlID8gZSA6IGUuc291cmNlKSA6IG51bGxcbiAgfVxuICBjb25zdCB1ID0gL1xcWyg/OlteXFxcXFxcXV18XFxcXC4pKlxcXXxcXChcXD8/fFxcXFwoWzEtOV1bMC05XSopfFxcXFwuLyxcbiAgICBoID0gJ1thLXpBLVpdXFxcXHcqJyxcbiAgICBkID0gJ1thLXpBLVpfXVxcXFx3KicsXG4gICAgZiA9ICdcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKyk/JyxcbiAgICBwID1cbiAgICAgICcoLT8pKFxcXFxiMFt4WF1bYS1mQS1GMC05XSt8KFxcXFxiXFxcXGQrKFxcXFwuXFxcXGQqKT98XFxcXC5cXFxcZCspKFtlRV1bLStdP1xcXFxkKyk/KScsXG4gICAgbSA9ICdcXFxcYigwYlswMV0rKScsXG4gICAgYiA9IHtcbiAgICAgIGJlZ2luOiAnXFxcXFxcXFxbXFxcXHNcXFxcU10nLFxuICAgICAgcmVsZXZhbmNlOiAwLFxuICAgIH0sXG4gICAgRSA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICBiZWdpbjogXCInXCIsXG4gICAgICBlbmQ6IFwiJ1wiLFxuICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgIGNvbnRhaW5zOiBbYl0sXG4gICAgfSxcbiAgICB4ID0ge1xuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIGJlZ2luOiAnXCInLFxuICAgICAgZW5kOiAnXCInLFxuICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgIGNvbnRhaW5zOiBbYl0sXG4gICAgfSxcbiAgICB2ID0ge1xuICAgICAgYmVnaW46XG4gICAgICAgIC9cXGIoYXxhbnx0aGV8YXJlfEknbXxpc24ndHxkb24ndHxkb2Vzbid0fHdvbid0fGJ1dHxqdXN0fHNob3VsZHxwcmV0dHl8c2ltcGx5fGVub3VnaHxnb25uYXxnb2luZ3x3dGZ8c298c3VjaHx3aWxsfHlvdXx5b3VyfHRoZXl8bGlrZXxtb3JlKVxcYi8sXG4gICAgfSxcbiAgICB3ID0gKGUsIHQsIG4gPSB7fSkgPT4ge1xuICAgICAgY29uc3QgaSA9IGEoeyBjbGFzc05hbWU6ICdjb21tZW50JywgYmVnaW46IGUsIGVuZDogdCwgY29udGFpbnM6IFtdIH0sIG4pXG4gICAgICByZXR1cm4gKFxuICAgICAgICBpLmNvbnRhaW5zLnB1c2godiksXG4gICAgICAgIGkuY29udGFpbnMucHVzaCh7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICBiZWdpbjogJyg/OlRPRE98RklYTUV8Tk9URXxCVUd8T1BUSU1JWkV8SEFDS3xYWFgpOicsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9KSxcbiAgICAgICAgaVxuICAgICAgKVxuICAgIH0sXG4gICAgeSA9IHcoJy8vJywgJyQnKSxcbiAgICBOID0gdygnL1xcXFwqJywgJ1xcXFwqLycpLFxuICAgIFIgPSB3KCcjJywgJyQnKVxuICB2YXIgXyA9IE9iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBNQVRDSF9OT1RISU5HX1JFOiAvXFxiXFxCLyxcbiAgICBJREVOVF9SRTogaCxcbiAgICBVTkRFUlNDT1JFX0lERU5UX1JFOiBkLFxuICAgIE5VTUJFUl9SRTogZixcbiAgICBDX05VTUJFUl9SRTogcCxcbiAgICBCSU5BUllfTlVNQkVSX1JFOiBtLFxuICAgIFJFX1NUQVJURVJTX1JFOlxuICAgICAgJyF8IT18IT09fCV8JT18JnwmJnwmPXxcXFxcKnxcXFxcKj18XFxcXCt8XFxcXCs9fCx8LXwtPXwvPXwvfDp8O3w8PHw8PD18PD18PHw9PT18PT18PXw+Pj49fD4+PXw+PXw+Pj58Pj58PnxcXFxcP3xcXFxcW3xcXFxce3xcXFxcKHxcXFxcXnxcXFxcXj18XFxcXHx8XFxcXHw9fFxcXFx8XFxcXHx8ficsXG4gICAgU0hFQkFORzogKGUgPSB7fSkgPT4ge1xuICAgICAgY29uc3QgdCA9IC9eIyFbIF0qXFwvL1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZS5iaW5hcnkgJiZcbiAgICAgICAgICAoZS5iZWdpbiA9ICgoLi4uZSkgPT4gZS5tYXAoZSA9PiBnKGUpKS5qb2luKCcnKSkoXG4gICAgICAgICAgICB0LFxuICAgICAgICAgICAgLy4qXFxiLyxcbiAgICAgICAgICAgIGUuYmluYXJ5LFxuICAgICAgICAgICAgL1xcYi4qL1xuICAgICAgICAgICkpLFxuICAgICAgICBhKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgYmVnaW46IHQsXG4gICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICdvbjpiZWdpbic6IChlLCB0KSA9PiB7XG4gICAgICAgICAgICAgIDAgIT09IGUuaW5kZXggJiYgdC5pZ25vcmVNYXRjaCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZVxuICAgICAgICApXG4gICAgICApXG4gICAgfSxcbiAgICBCQUNLU0xBU0hfRVNDQVBFOiBiLFxuICAgIEFQT1NfU1RSSU5HX01PREU6IEUsXG4gICAgUVVPVEVfU1RSSU5HX01PREU6IHgsXG4gICAgUEhSQVNBTF9XT1JEU19NT0RFOiB2LFxuICAgIENPTU1FTlQ6IHcsXG4gICAgQ19MSU5FX0NPTU1FTlRfTU9ERTogeSxcbiAgICBDX0JMT0NLX0NPTU1FTlRfTU9ERTogTixcbiAgICBIQVNIX0NPTU1FTlRfTU9ERTogUixcbiAgICBOVU1CRVJfTU9ERTogeyBjbGFzc05hbWU6ICdudW1iZXInLCBiZWdpbjogZiwgcmVsZXZhbmNlOiAwIH0sXG4gICAgQ19OVU1CRVJfTU9ERTogeyBjbGFzc05hbWU6ICdudW1iZXInLCBiZWdpbjogcCwgcmVsZXZhbmNlOiAwIH0sXG4gICAgQklOQVJZX05VTUJFUl9NT0RFOiB7IGNsYXNzTmFtZTogJ251bWJlcicsIGJlZ2luOiBtLCByZWxldmFuY2U6IDAgfSxcbiAgICBDU1NfTlVNQkVSX01PREU6IHtcbiAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICBiZWdpbjpcbiAgICAgICAgZiArXG4gICAgICAgICcoJXxlbXxleHxjaHxyZW18dnd8dmh8dm1pbnx2bWF4fGNtfG1tfGlufHB0fHBjfHB4fGRlZ3xncmFkfHJhZHx0dXJufHN8bXN8SHp8a0h6fGRwaXxkcGNtfGRwcHgpPycsXG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgfSxcbiAgICBSRUdFWFBfTU9ERToge1xuICAgICAgYmVnaW46IC8oPz1cXC9bXi9cXG5dKlxcLykvLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3JlZ2V4cCcsXG4gICAgICAgICAgYmVnaW46IC9cXC8vLFxuICAgICAgICAgIGVuZDogL1xcL1tnaW11eV0qLyxcbiAgICAgICAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgYixcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXFsvLCBlbmQ6IC9cXF0vLCByZWxldmFuY2U6IDAsIGNvbnRhaW5zOiBbYl0gfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIFRJVExFX01PREU6IHsgY2xhc3NOYW1lOiAndGl0bGUnLCBiZWdpbjogaCwgcmVsZXZhbmNlOiAwIH0sXG4gICAgVU5ERVJTQ09SRV9USVRMRV9NT0RFOiB7IGNsYXNzTmFtZTogJ3RpdGxlJywgYmVnaW46IGQsIHJlbGV2YW5jZTogMCB9LFxuICAgIE1FVEhPRF9HVUFSRDoge1xuICAgICAgYmVnaW46ICdcXFxcLlxcXFxzKlthLXpBLVpfXVxcXFx3KicsXG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgfSxcbiAgICBFTkRfU0FNRV9BU19CRUdJTjogZSA9PlxuICAgICAgT2JqZWN0LmFzc2lnbihlLCB7XG4gICAgICAgICdvbjpiZWdpbic6IChlLCB0KSA9PiB7XG4gICAgICAgICAgdC5kYXRhLl9iZWdpbk1hdGNoID0gZVsxXVxuICAgICAgICB9LFxuICAgICAgICAnb246ZW5kJzogKGUsIHQpID0+IHtcbiAgICAgICAgICB0LmRhdGEuX2JlZ2luTWF0Y2ggIT09IGVbMV0gJiYgdC5pZ25vcmVNYXRjaCgpXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgfSlcbiAgZnVuY3Rpb24gayhlLCB0KSB7XG4gICAgJy4nID09PSBlLmlucHV0W2UuaW5kZXggLSAxXSAmJiB0Lmlnbm9yZU1hdGNoKClcbiAgfVxuICBmdW5jdGlvbiBNKGUsIHQpIHtcbiAgICB0ICYmXG4gICAgICBlLmJlZ2luS2V5d29yZHMgJiZcbiAgICAgICgoZS5iZWdpbiA9XG4gICAgICAgICdcXFxcYignICsgZS5iZWdpbktleXdvcmRzLnNwbGl0KCcgJykuam9pbignfCcpICsgJykoPyFcXFxcLikoPz1cXFxcYnxcXFxccyknKSxcbiAgICAgIChlLl9fYmVmb3JlQmVnaW4gPSBrKSxcbiAgICAgIChlLmtleXdvcmRzID0gZS5rZXl3b3JkcyB8fCBlLmJlZ2luS2V5d29yZHMpLFxuICAgICAgZGVsZXRlIGUuYmVnaW5LZXl3b3JkcyxcbiAgICAgIHZvaWQgMCA9PT0gZS5yZWxldmFuY2UgJiYgKGUucmVsZXZhbmNlID0gMCkpXG4gIH1cbiAgZnVuY3Rpb24gTyhlLCB0KSB7XG4gICAgQXJyYXkuaXNBcnJheShlLmlsbGVnYWwpICYmXG4gICAgICAoZS5pbGxlZ2FsID0gKCguLi5lKSA9PiAnKCcgKyBlLm1hcChlID0+IGcoZSkpLmpvaW4oJ3wnKSArICcpJykoXG4gICAgICAgIC4uLmUuaWxsZWdhbFxuICAgICAgKSlcbiAgfVxuICBmdW5jdGlvbiBBKGUsIHQpIHtcbiAgICBpZiAoZS5tYXRjaCkge1xuICAgICAgaWYgKGUuYmVnaW4gfHwgZS5lbmQpXG4gICAgICAgIHRocm93IEVycm9yKCdiZWdpbiAmIGVuZCBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIG1hdGNoJylcbiAgICAgIDsoZS5iZWdpbiA9IGUubWF0Y2gpLCBkZWxldGUgZS5tYXRjaFxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBMKGUsIHQpIHtcbiAgICB2b2lkIDAgPT09IGUucmVsZXZhbmNlICYmIChlLnJlbGV2YW5jZSA9IDEpXG4gIH1cbiAgY29uc3QgSSA9IFtcbiAgICAnb2YnLFxuICAgICdhbmQnLFxuICAgICdmb3InLFxuICAgICdpbicsXG4gICAgJ25vdCcsXG4gICAgJ29yJyxcbiAgICAnaWYnLFxuICAgICd0aGVuJyxcbiAgICAncGFyZW50JyxcbiAgICAnbGlzdCcsXG4gICAgJ3ZhbHVlJyxcbiAgXVxuICBmdW5jdGlvbiBqKGUsIHQsIG4gPSAna2V5d29yZCcpIHtcbiAgICBjb25zdCBpID0ge31cbiAgICByZXR1cm4gKFxuICAgICAgJ3N0cmluZycgPT0gdHlwZW9mIGVcbiAgICAgICAgPyBzKG4sIGUuc3BsaXQoJyAnKSlcbiAgICAgICAgOiBBcnJheS5pc0FycmF5KGUpXG4gICAgICAgID8gcyhuLCBlKVxuICAgICAgICA6IE9iamVjdC5rZXlzKGUpLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGksIGooZVtuXSwgdCwgbikpXG4gICAgICAgICAgfSksXG4gICAgICBpXG4gICAgKVxuICAgIGZ1bmN0aW9uIHMoZSwgbikge1xuICAgICAgdCAmJiAobiA9IG4ubWFwKGUgPT4gZS50b0xvd2VyQ2FzZSgpKSksXG4gICAgICAgIG4uZm9yRWFjaCh0ID0+IHtcbiAgICAgICAgICBjb25zdCBuID0gdC5zcGxpdCgnfCcpXG4gICAgICAgICAgaVtuWzBdXSA9IFtlLCBCKG5bMF0sIG5bMV0pXVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBCKGUsIHQpIHtcbiAgICByZXR1cm4gdCA/IE51bWJlcih0KSA6IChlID0+IEkuaW5jbHVkZXMoZS50b0xvd2VyQ2FzZSgpKSkoZSkgPyAwIDogMVxuICB9XG4gIGZ1bmN0aW9uIFQoZSwgeyBwbHVnaW5zOiB0IH0pIHtcbiAgICBmdW5jdGlvbiBuKHQsIG4pIHtcbiAgICAgIHJldHVybiBSZWdFeHAoXG4gICAgICAgIGcodCksXG4gICAgICAgICdtJyArIChlLmNhc2VfaW5zZW5zaXRpdmUgPyAnaScgOiAnJykgKyAobiA/ICdnJyA6ICcnKVxuICAgICAgKVxuICAgIH1cbiAgICBjbGFzcyBpIHtcbiAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICA7KHRoaXMubWF0Y2hJbmRleGVzID0ge30pLFxuICAgICAgICAgICh0aGlzLnJlZ2V4ZXMgPSBbXSksXG4gICAgICAgICAgKHRoaXMubWF0Y2hBdCA9IDEpLFxuICAgICAgICAgICh0aGlzLnBvc2l0aW9uID0gMClcbiAgICAgIH1cbiAgICAgIGFkZFJ1bGUoZSwgdCkge1xuICAgICAgICA7KHQucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uKyspLFxuICAgICAgICAgICh0aGlzLm1hdGNoSW5kZXhlc1t0aGlzLm1hdGNoQXRdID0gdCksXG4gICAgICAgICAgdGhpcy5yZWdleGVzLnB1c2goW3QsIGVdKSxcbiAgICAgICAgICAodGhpcy5tYXRjaEF0ICs9XG4gICAgICAgICAgICAoZSA9PiBSZWdFeHAoZS50b1N0cmluZygpICsgJ3wnKS5leGVjKCcnKS5sZW5ndGggLSAxKShlKSArIDEpXG4gICAgICB9XG4gICAgICBjb21waWxlKCkge1xuICAgICAgICAwID09PSB0aGlzLnJlZ2V4ZXMubGVuZ3RoICYmICh0aGlzLmV4ZWMgPSAoKSA9PiBudWxsKVxuICAgICAgICBjb25zdCBlID0gdGhpcy5yZWdleGVzLm1hcChlID0+IGVbMV0pXG4gICAgICAgIDsodGhpcy5tYXRjaGVyUmUgPSBuKFxuICAgICAgICAgICgoZSwgdCA9ICd8JykgPT4ge1xuICAgICAgICAgICAgbGV0IG4gPSAwXG4gICAgICAgICAgICByZXR1cm4gZVxuICAgICAgICAgICAgICAubWFwKGUgPT4ge1xuICAgICAgICAgICAgICAgIG4gKz0gMVxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBuXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBnKGUpLFxuICAgICAgICAgICAgICAgICAgcyA9ICcnXG4gICAgICAgICAgICAgICAgZm9yICg7IGkubGVuZ3RoID4gMDsgKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBlID0gdS5leGVjKGkpXG4gICAgICAgICAgICAgICAgICBpZiAoIWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA7KHMgKz0gaS5zdWJzdHJpbmcoMCwgZS5pbmRleCkpLFxuICAgICAgICAgICAgICAgICAgICAoaSA9IGkuc3Vic3RyaW5nKGUuaW5kZXggKyBlWzBdLmxlbmd0aCkpLFxuICAgICAgICAgICAgICAgICAgICAnXFxcXCcgPT09IGVbMF1bMF0gJiYgZVsxXVxuICAgICAgICAgICAgICAgICAgICAgID8gKHMgKz0gJ1xcXFwnICsgKE51bWJlcihlWzFdKSArIHQpKVxuICAgICAgICAgICAgICAgICAgICAgIDogKChzICs9IGVbMF0pLCAnKCcgPT09IGVbMF0gJiYgbisrKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAubWFwKGUgPT4gYCgke2V9KWApXG4gICAgICAgICAgICAgIC5qb2luKHQpXG4gICAgICAgICAgfSkoZSksXG4gICAgICAgICAgITBcbiAgICAgICAgKSksXG4gICAgICAgICAgKHRoaXMubGFzdEluZGV4ID0gMClcbiAgICAgIH1cbiAgICAgIGV4ZWMoZSkge1xuICAgICAgICB0aGlzLm1hdGNoZXJSZS5sYXN0SW5kZXggPSB0aGlzLmxhc3RJbmRleFxuICAgICAgICBjb25zdCB0ID0gdGhpcy5tYXRjaGVyUmUuZXhlYyhlKVxuICAgICAgICBpZiAoIXQpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IG4gPSB0LmZpbmRJbmRleCgoZSwgdCkgPT4gdCA+IDAgJiYgdm9pZCAwICE9PSBlKSxcbiAgICAgICAgICBpID0gdGhpcy5tYXRjaEluZGV4ZXNbbl1cbiAgICAgICAgcmV0dXJuIHQuc3BsaWNlKDAsIG4pLCBPYmplY3QuYXNzaWduKHQsIGkpXG4gICAgICB9XG4gICAgfVxuICAgIGNsYXNzIHMge1xuICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIDsodGhpcy5ydWxlcyA9IFtdKSxcbiAgICAgICAgICAodGhpcy5tdWx0aVJlZ2V4ZXMgPSBbXSksXG4gICAgICAgICAgKHRoaXMuY291bnQgPSAwKSxcbiAgICAgICAgICAodGhpcy5sYXN0SW5kZXggPSAwKSxcbiAgICAgICAgICAodGhpcy5yZWdleEluZGV4ID0gMClcbiAgICAgIH1cbiAgICAgIGdldE1hdGNoZXIoZSkge1xuICAgICAgICBpZiAodGhpcy5tdWx0aVJlZ2V4ZXNbZV0pIHJldHVybiB0aGlzLm11bHRpUmVnZXhlc1tlXVxuICAgICAgICBjb25zdCB0ID0gbmV3IGkoKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHRoaXMucnVsZXMuc2xpY2UoZSkuZm9yRWFjaCgoW2UsIG5dKSA9PiB0LmFkZFJ1bGUoZSwgbikpLFxuICAgICAgICAgIHQuY29tcGlsZSgpLFxuICAgICAgICAgICh0aGlzLm11bHRpUmVnZXhlc1tlXSA9IHQpLFxuICAgICAgICAgIHRcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVzdW1pbmdTY2FuQXRTYW1lUG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiAwICE9PSB0aGlzLnJlZ2V4SW5kZXhcbiAgICAgIH1cbiAgICAgIGNvbnNpZGVyQWxsKCkge1xuICAgICAgICB0aGlzLnJlZ2V4SW5kZXggPSAwXG4gICAgICB9XG4gICAgICBhZGRSdWxlKGUsIHQpIHtcbiAgICAgICAgdGhpcy5ydWxlcy5wdXNoKFtlLCB0XSksICdiZWdpbicgPT09IHQudHlwZSAmJiB0aGlzLmNvdW50KytcbiAgICAgIH1cbiAgICAgIGV4ZWMoZSkge1xuICAgICAgICBjb25zdCB0ID0gdGhpcy5nZXRNYXRjaGVyKHRoaXMucmVnZXhJbmRleClcbiAgICAgICAgdC5sYXN0SW5kZXggPSB0aGlzLmxhc3RJbmRleFxuICAgICAgICBsZXQgbiA9IHQuZXhlYyhlKVxuICAgICAgICBpZiAodGhpcy5yZXN1bWluZ1NjYW5BdFNhbWVQb3NpdGlvbigpKVxuICAgICAgICAgIGlmIChuICYmIG4uaW5kZXggPT09IHRoaXMubGFzdEluZGV4KTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLmdldE1hdGNoZXIoMClcbiAgICAgICAgICAgIDsodC5sYXN0SW5kZXggPSB0aGlzLmxhc3RJbmRleCArIDEpLCAobiA9IHQuZXhlYyhlKSlcbiAgICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbiAmJlxuICAgICAgICAgICAgKCh0aGlzLnJlZ2V4SW5kZXggKz0gbi5wb3NpdGlvbiArIDEpLFxuICAgICAgICAgICAgdGhpcy5yZWdleEluZGV4ID09PSB0aGlzLmNvdW50ICYmIHRoaXMuY29uc2lkZXJBbGwoKSksXG4gICAgICAgICAgblxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChcbiAgICAgIChlLmNvbXBpbGVyRXh0ZW5zaW9ucyB8fCAoZS5jb21waWxlckV4dGVuc2lvbnMgPSBbXSksXG4gICAgICBlLmNvbnRhaW5zICYmIGUuY29udGFpbnMuaW5jbHVkZXMoJ3NlbGYnKSlcbiAgICApXG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgJ0VSUjogY29udGFpbnMgYHNlbGZgIGlzIG5vdCBzdXBwb3J0ZWQgYXQgdGhlIHRvcC1sZXZlbCBvZiBhIGxhbmd1YWdlLiAgU2VlIGRvY3VtZW50YXRpb24uJ1xuICAgICAgKVxuICAgIHJldHVybiAoXG4gICAgICAoZS5jbGFzc05hbWVBbGlhc2VzID0gYShlLmNsYXNzTmFtZUFsaWFzZXMgfHwge30pKSxcbiAgICAgIChmdW5jdGlvbiB0KGksIHIpIHtcbiAgICAgICAgY29uc3QgbCA9IGlcbiAgICAgICAgaWYgKGkuaXNDb21waWxlZCkgcmV0dXJuIGxcbiAgICAgICAgO1tBXS5mb3JFYWNoKGUgPT4gZShpLCByKSksXG4gICAgICAgICAgZS5jb21waWxlckV4dGVuc2lvbnMuZm9yRWFjaChlID0+IGUoaSwgcikpLFxuICAgICAgICAgIChpLl9fYmVmb3JlQmVnaW4gPSBudWxsKSxcbiAgICAgICAgICBbTSwgTywgTF0uZm9yRWFjaChlID0+IGUoaSwgcikpLFxuICAgICAgICAgIChpLmlzQ29tcGlsZWQgPSAhMClcbiAgICAgICAgbGV0IG8gPSBudWxsXG4gICAgICAgIGlmIChcbiAgICAgICAgICAoJ29iamVjdCcgPT0gdHlwZW9mIGkua2V5d29yZHMgJiZcbiAgICAgICAgICAgICgobyA9IGkua2V5d29yZHMuJHBhdHRlcm4pLCBkZWxldGUgaS5rZXl3b3Jkcy4kcGF0dGVybiksXG4gICAgICAgICAgaS5rZXl3b3JkcyAmJiAoaS5rZXl3b3JkcyA9IGooaS5rZXl3b3JkcywgZS5jYXNlX2luc2Vuc2l0aXZlKSksXG4gICAgICAgICAgaS5sZXhlbWVzICYmIG8pXG4gICAgICAgIClcbiAgICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgICdFUlI6IFByZWZlciBga2V5d29yZHMuJHBhdHRlcm5gIHRvIGBtb2RlLmxleGVtZXNgLCBCT1RIIGFyZSBub3QgYWxsb3dlZC4gKHNlZSBtb2RlIHJlZmVyZW5jZSkgJ1xuICAgICAgICAgIClcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAobyA9IG8gfHwgaS5sZXhlbWVzIHx8IC9cXHcrLyksXG4gICAgICAgICAgKGwua2V5d29yZFBhdHRlcm5SZSA9IG4obywgITApKSxcbiAgICAgICAgICByICYmXG4gICAgICAgICAgICAoaS5iZWdpbiB8fCAoaS5iZWdpbiA9IC9cXEJ8XFxiLyksXG4gICAgICAgICAgICAobC5iZWdpblJlID0gbihpLmJlZ2luKSksXG4gICAgICAgICAgICBpLmVuZFNhbWVBc0JlZ2luICYmIChpLmVuZCA9IGkuYmVnaW4pLFxuICAgICAgICAgICAgaS5lbmQgfHwgaS5lbmRzV2l0aFBhcmVudCB8fCAoaS5lbmQgPSAvXFxCfFxcYi8pLFxuICAgICAgICAgICAgaS5lbmQgJiYgKGwuZW5kUmUgPSBuKGkuZW5kKSksXG4gICAgICAgICAgICAobC50ZXJtaW5hdG9yRW5kID0gZyhpLmVuZCkgfHwgJycpLFxuICAgICAgICAgICAgaS5lbmRzV2l0aFBhcmVudCAmJlxuICAgICAgICAgICAgICByLnRlcm1pbmF0b3JFbmQgJiZcbiAgICAgICAgICAgICAgKGwudGVybWluYXRvckVuZCArPSAoaS5lbmQgPyAnfCcgOiAnJykgKyByLnRlcm1pbmF0b3JFbmQpKSxcbiAgICAgICAgICBpLmlsbGVnYWwgJiYgKGwuaWxsZWdhbFJlID0gbihpLmlsbGVnYWwpKSxcbiAgICAgICAgICBpLmNvbnRhaW5zIHx8IChpLmNvbnRhaW5zID0gW10pLFxuICAgICAgICAgIChpLmNvbnRhaW5zID0gW10uY29uY2F0KFxuICAgICAgICAgICAgLi4uaS5jb250YWlucy5tYXAoZSA9PlxuICAgICAgICAgICAgICAoZSA9PiAoXG4gICAgICAgICAgICAgICAgZS52YXJpYW50cyAmJlxuICAgICAgICAgICAgICAgICAgIWUuY2FjaGVkVmFyaWFudHMgJiZcbiAgICAgICAgICAgICAgICAgIChlLmNhY2hlZFZhcmlhbnRzID0gZS52YXJpYW50cy5tYXAodCA9PlxuICAgICAgICAgICAgICAgICAgICBhKFxuICAgICAgICAgICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgICAgIGUuY2FjaGVkVmFyaWFudHNcbiAgICAgICAgICAgICAgICAgID8gZS5jYWNoZWRWYXJpYW50c1xuICAgICAgICAgICAgICAgICAgOiBTKGUpXG4gICAgICAgICAgICAgICAgICA/IGEoZSwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0czogZS5zdGFydHMgPyBhKGUuc3RhcnRzKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IE9iamVjdC5pc0Zyb3plbihlKVxuICAgICAgICAgICAgICAgICAgPyBhKGUpXG4gICAgICAgICAgICAgICAgICA6IGVcbiAgICAgICAgICAgICAgKSkoJ3NlbGYnID09PSBlID8gaSA6IGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSksXG4gICAgICAgICAgaS5jb250YWlucy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgdChlLCBsKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGkuc3RhcnRzICYmIHQoaS5zdGFydHMsIHIpLFxuICAgICAgICAgIChsLm1hdGNoZXIgPSAoZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ID0gbmV3IHMoKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgZS5jb250YWlucy5mb3JFYWNoKGUgPT5cbiAgICAgICAgICAgICAgICB0LmFkZFJ1bGUoZS5iZWdpbiwgeyBydWxlOiBlLCB0eXBlOiAnYmVnaW4nIH0pXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGUudGVybWluYXRvckVuZCAmJiB0LmFkZFJ1bGUoZS50ZXJtaW5hdG9yRW5kLCB7IHR5cGU6ICdlbmQnIH0pLFxuICAgICAgICAgICAgICBlLmlsbGVnYWwgJiYgdC5hZGRSdWxlKGUuaWxsZWdhbCwgeyB0eXBlOiAnaWxsZWdhbCcgfSksXG4gICAgICAgICAgICAgIHRcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KShsKSksXG4gICAgICAgICAgbFxuICAgICAgICApXG4gICAgICB9KShlKVxuICAgIClcbiAgfVxuICBmdW5jdGlvbiBTKGUpIHtcbiAgICByZXR1cm4gISFlICYmIChlLmVuZHNXaXRoUGFyZW50IHx8IFMoZS5zdGFydHMpKVxuICB9XG4gIGZ1bmN0aW9uIFAoZSkge1xuICAgIGNvbnN0IHQgPSB7XG4gICAgICBwcm9wczogWydsYW5ndWFnZScsICdjb2RlJywgJ2F1dG9kZXRlY3QnXSxcbiAgICAgIGRhdGE6ICgpID0+ICh7IGRldGVjdGVkTGFuZ3VhZ2U6ICcnLCB1bmtub3duTGFuZ3VhZ2U6ICExIH0pLFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY2xhc3NOYW1lKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnVua25vd25MYW5ndWFnZSA/ICcnIDogJ2hsanMgJyArIHRoaXMuZGV0ZWN0ZWRMYW5ndWFnZVxuICAgICAgICB9LFxuICAgICAgICBoaWdobGlnaHRlZCgpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuYXV0b0RldGVjdCAmJiAhZS5nZXRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKSlcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgVGhlIGxhbmd1YWdlIFwiJHt0aGlzLmxhbmd1YWdlfVwiIHlvdSBzcGVjaWZpZWQgY291bGQgbm90IGJlIGZvdW5kLmBcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgKHRoaXMudW5rbm93bkxhbmd1YWdlID0gITApLFxuICAgICAgICAgICAgICBzKHRoaXMuY29kZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICBsZXQgdCA9IHt9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuYXV0b0RldGVjdFxuICAgICAgICAgICAgICA/ICgodCA9IGUuaGlnaGxpZ2h0QXV0byh0aGlzLmNvZGUpKSxcbiAgICAgICAgICAgICAgICAodGhpcy5kZXRlY3RlZExhbmd1YWdlID0gdC5sYW5ndWFnZSkpXG4gICAgICAgICAgICAgIDogKCh0ID0gZS5oaWdobGlnaHQoXG4gICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlLFxuICAgICAgICAgICAgICAgICAgdGhpcy5jb2RlLFxuICAgICAgICAgICAgICAgICAgdGhpcy5pZ25vcmVJbGxlZ2Fsc1xuICAgICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgICAgICh0aGlzLmRldGVjdGVkTGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlKSksXG4gICAgICAgICAgICB0LnZhbHVlXG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICBhdXRvRGV0ZWN0KCkge1xuICAgICAgICAgIHJldHVybiAhKHRoaXMubGFuZ3VhZ2UgJiYgKChlID0gdGhpcy5hdXRvZGV0ZWN0KSwgIWUgJiYgJycgIT09IGUpKVxuICAgICAgICAgIHZhciBlXG4gICAgICAgIH0sXG4gICAgICAgIGlnbm9yZUlsbGVnYWxzOiAoKSA9PiAhMCxcbiAgICAgIH0sXG4gICAgICByZW5kZXIoZSkge1xuICAgICAgICByZXR1cm4gZSgncHJlJywge30sIFtcbiAgICAgICAgICBlKCdjb2RlJywge1xuICAgICAgICAgICAgY2xhc3M6IHRoaXMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiB0aGlzLmhpZ2hsaWdodGVkIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0pXG4gICAgICB9LFxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ29tcG9uZW50OiB0LFxuICAgICAgVnVlUGx1Z2luOiB7XG4gICAgICAgIGluc3RhbGwoZSkge1xuICAgICAgICAgIGUuY29tcG9uZW50KCdoaWdobGlnaHRqcycsIHQpXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH1cbiAgfVxuICBjb25zdCBEID0ge1xuICAgICdhZnRlcjpoaWdobGlnaHRFbGVtZW50JzogKHsgZWw6IGUsIHJlc3VsdDogdCwgdGV4dDogbiB9KSA9PiB7XG4gICAgICBjb25zdCBpID0gSChlKVxuICAgICAgaWYgKCFpLmxlbmd0aCkgcmV0dXJuXG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIDsoYS5pbm5lckhUTUwgPSB0LnZhbHVlKSxcbiAgICAgICAgKHQudmFsdWUgPSAoKGUsIHQsIG4pID0+IHtcbiAgICAgICAgICBsZXQgaSA9IDAsXG4gICAgICAgICAgICBhID0gJydcbiAgICAgICAgICBjb25zdCByID0gW11cbiAgICAgICAgICBmdW5jdGlvbiBsKCkge1xuICAgICAgICAgICAgcmV0dXJuIGUubGVuZ3RoICYmIHQubGVuZ3RoXG4gICAgICAgICAgICAgID8gZVswXS5vZmZzZXQgIT09IHRbMF0ub2Zmc2V0XG4gICAgICAgICAgICAgICAgPyBlWzBdLm9mZnNldCA8IHRbMF0ub2Zmc2V0XG4gICAgICAgICAgICAgICAgICA/IGVcbiAgICAgICAgICAgICAgICAgIDogdFxuICAgICAgICAgICAgICAgIDogJ3N0YXJ0JyA9PT0gdFswXS5ldmVudFxuICAgICAgICAgICAgICAgID8gZVxuICAgICAgICAgICAgICAgIDogdFxuICAgICAgICAgICAgICA6IGUubGVuZ3RoXG4gICAgICAgICAgICAgID8gZVxuICAgICAgICAgICAgICA6IHRcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVuY3Rpb24gbyhlKSB7XG4gICAgICAgICAgICBhICs9XG4gICAgICAgICAgICAgICc8JyArXG4gICAgICAgICAgICAgIEMoZSkgK1xuICAgICAgICAgICAgICBbXS5tYXBcbiAgICAgICAgICAgICAgICAuY2FsbChlLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJyAnICsgZS5ub2RlTmFtZSArICc9XCInICsgcyhlLnZhbHVlKSArICdcIidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5qb2luKCcnKSArXG4gICAgICAgICAgICAgICc+J1xuICAgICAgICAgIH1cbiAgICAgICAgICBmdW5jdGlvbiBjKGUpIHtcbiAgICAgICAgICAgIGEgKz0gJzwvJyArIEMoZSkgKyAnPidcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVuY3Rpb24gZyhlKSB7XG4gICAgICAgICAgICA7KCdzdGFydCcgPT09IGUuZXZlbnQgPyBvIDogYykoZS5ub2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKDsgZS5sZW5ndGggfHwgdC5sZW5ndGg7ICkge1xuICAgICAgICAgICAgbGV0IHQgPSBsKClcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKChhICs9IHMobi5zdWJzdHJpbmcoaSwgdFswXS5vZmZzZXQpKSksXG4gICAgICAgICAgICAgIChpID0gdFswXS5vZmZzZXQpLFxuICAgICAgICAgICAgICB0ID09PSBlKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHIucmV2ZXJzZSgpLmZvckVhY2goYylcbiAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGcodC5zcGxpY2UoMCwgMSlbMF0pLCAodCA9IGwoKSlcbiAgICAgICAgICAgICAgfSB3aGlsZSAodCA9PT0gZSAmJiB0Lmxlbmd0aCAmJiB0WzBdLm9mZnNldCA9PT0gaSlcbiAgICAgICAgICAgICAgci5yZXZlcnNlKCkuZm9yRWFjaChvKVxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICdzdGFydCcgPT09IHRbMF0uZXZlbnQgPyByLnB1c2godFswXS5ub2RlKSA6IHIucG9wKCksXG4gICAgICAgICAgICAgICAgZyh0LnNwbGljZSgwLCAxKVswXSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGEgKyBzKG4uc3Vic3RyKGkpKVxuICAgICAgICB9KShpLCBIKGEpLCBuKSlcbiAgICB9LFxuICB9XG4gIGZ1bmN0aW9uIEMoZSkge1xuICAgIHJldHVybiBlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuICBmdW5jdGlvbiBIKGUpIHtcbiAgICBjb25zdCB0ID0gW11cbiAgICByZXR1cm4gKFxuICAgICAgKGZ1bmN0aW9uIGUobiwgaSkge1xuICAgICAgICBmb3IgKGxldCBzID0gbi5maXJzdENoaWxkOyBzOyBzID0gcy5uZXh0U2libGluZylcbiAgICAgICAgICAzID09PSBzLm5vZGVUeXBlXG4gICAgICAgICAgICA/IChpICs9IHMubm9kZVZhbHVlLmxlbmd0aClcbiAgICAgICAgICAgIDogMSA9PT0gcy5ub2RlVHlwZSAmJlxuICAgICAgICAgICAgICAodC5wdXNoKHtcbiAgICAgICAgICAgICAgICBldmVudDogJ3N0YXJ0JyxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IGksXG4gICAgICAgICAgICAgICAgbm9kZTogcyxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIChpID0gZShzLCBpKSksXG4gICAgICAgICAgICAgIEMocykubWF0Y2goL2JyfGhyfGltZ3xpbnB1dC8pIHx8XG4gICAgICAgICAgICAgICAgdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50OiAnc3RvcCcsXG4gICAgICAgICAgICAgICAgICBvZmZzZXQ6IGksXG4gICAgICAgICAgICAgICAgICBub2RlOiBzLFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICByZXR1cm4gaVxuICAgICAgfSkoZSwgMCksXG4gICAgICB0XG4gICAgKVxuICB9XG4gIGNvbnN0ICQgPSBlID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9LFxuICAgIFUgPSAoZSwgLi4udCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1dBUk46ICcgKyBlLCAuLi50KVxuICAgIH0sXG4gICAgeiA9IChlLCB0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgRGVwcmVjYXRlZCBhcyBvZiAke2V9LiAke3R9YClcbiAgICB9LFxuICAgIEsgPSBzLFxuICAgIEcgPSBhLFxuICAgIFYgPSBTeW1ib2woJ25vbWF0Y2gnKVxuICByZXR1cm4gKGUgPT4ge1xuICAgIGNvbnN0IG4gPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgcyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBhID0gW11cbiAgICBsZXQgciA9ICEwXG4gICAgY29uc3QgbCA9IC8oXig8W14+XSs+fFxcdHwpK3xcXG4pL2dtLFxuICAgICAgbyA9XG4gICAgICAgIFwiQ291bGQgbm90IGZpbmQgdGhlIGxhbmd1YWdlICd7fScsIGRpZCB5b3UgZm9yZ2V0IHRvIGxvYWQvaW5jbHVkZSBhIGxhbmd1YWdlIG1vZHVsZT9cIixcbiAgICAgIGcgPSB7XG4gICAgICAgIGRpc2FibGVBdXRvZGV0ZWN0OiAhMCxcbiAgICAgICAgbmFtZTogJ1BsYWluIHRleHQnLFxuICAgICAgICBjb250YWluczogW10sXG4gICAgICB9XG4gICAgbGV0IHUgPSB7XG4gICAgICBub0hpZ2hsaWdodFJlOiAvXihuby0/aGlnaGxpZ2h0KSQvaSxcbiAgICAgIGxhbmd1YWdlRGV0ZWN0UmU6IC9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pLFxuICAgICAgY2xhc3NQcmVmaXg6ICdobGpzLScsXG4gICAgICB0YWJSZXBsYWNlOiBudWxsLFxuICAgICAgdXNlQlI6ICExLFxuICAgICAgbGFuZ3VhZ2VzOiBudWxsLFxuICAgICAgX19lbWl0dGVyOiBjLFxuICAgIH1cbiAgICBmdW5jdGlvbiBoKGUpIHtcbiAgICAgIHJldHVybiB1Lm5vSGlnaGxpZ2h0UmUudGVzdChlKVxuICAgIH1cbiAgICBmdW5jdGlvbiBkKGUsIHQsIG4sIGkpIHtcbiAgICAgIGxldCBzID0gJycsXG4gICAgICAgIGEgPSAnJ1xuICAgICAgJ29iamVjdCcgPT0gdHlwZW9mIHRcbiAgICAgICAgPyAoKHMgPSBlKSwgKG4gPSB0Lmlnbm9yZUlsbGVnYWxzKSwgKGEgPSB0Lmxhbmd1YWdlKSwgKGkgPSB2b2lkIDApKVxuICAgICAgICA6ICh6KCcxMC43LjAnLCAnaGlnaGxpZ2h0KGxhbmcsIGNvZGUsIC4uLmFyZ3MpIGhhcyBiZWVuIGRlcHJlY2F0ZWQuJyksXG4gICAgICAgICAgeihcbiAgICAgICAgICAgICcxMC43LjAnLFxuICAgICAgICAgICAgJ1BsZWFzZSB1c2UgaGlnaGxpZ2h0KGNvZGUsIG9wdGlvbnMpIGluc3RlYWQuXFxuaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjI3NydcbiAgICAgICAgICApLFxuICAgICAgICAgIChhID0gZSksXG4gICAgICAgICAgKHMgPSB0KSlcbiAgICAgIGNvbnN0IHIgPSB7IGNvZGU6IHMsIGxhbmd1YWdlOiBhIH1cbiAgICAgIE0oJ2JlZm9yZTpoaWdobGlnaHQnLCByKVxuICAgICAgY29uc3QgbCA9IHIucmVzdWx0ID8gci5yZXN1bHQgOiBmKHIubGFuZ3VhZ2UsIHIuY29kZSwgbiwgaSlcbiAgICAgIHJldHVybiAobC5jb2RlID0gci5jb2RlKSwgTSgnYWZ0ZXI6aGlnaGxpZ2h0JywgbCksIGxcbiAgICB9XG4gICAgZnVuY3Rpb24gZihlLCB0LCBzLCBsKSB7XG4gICAgICBmdW5jdGlvbiBjKGUsIHQpIHtcbiAgICAgICAgY29uc3QgbiA9IHYuY2FzZV9pbnNlbnNpdGl2ZSA/IHRbMF0udG9Mb3dlckNhc2UoKSA6IHRbMF1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZS5rZXl3b3JkcywgbikgJiYgZS5rZXl3b3Jkc1tuXVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBnKCkge1xuICAgICAgICBudWxsICE9IFIuc3ViTGFuZ3VhZ2VcbiAgICAgICAgICA/ICgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICgnJyA9PT0gTSkgcmV0dXJuXG4gICAgICAgICAgICAgIGxldCBlID0gbnVsbFxuICAgICAgICAgICAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIFIuc3ViTGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5bUi5zdWJMYW5ndWFnZV0pIHJldHVybiB2b2lkIGsuYWRkVGV4dChNKVxuICAgICAgICAgICAgICAgIDsoZSA9IGYoUi5zdWJMYW5ndWFnZSwgTSwgITAsIF9bUi5zdWJMYW5ndWFnZV0pKSxcbiAgICAgICAgICAgICAgICAgIChfW1Iuc3ViTGFuZ3VhZ2VdID0gZS50b3ApXG4gICAgICAgICAgICAgIH0gZWxzZSBlID0gcChNLCBSLnN1Ykxhbmd1YWdlLmxlbmd0aCA/IFIuc3ViTGFuZ3VhZ2UgOiBudWxsKVxuICAgICAgICAgICAgICBSLnJlbGV2YW5jZSA+IDAgJiYgKE8gKz0gZS5yZWxldmFuY2UpLFxuICAgICAgICAgICAgICAgIGsuYWRkU3VibGFuZ3VhZ2UoZS5lbWl0dGVyLCBlLmxhbmd1YWdlKVxuICAgICAgICAgICAgfSkoKVxuICAgICAgICAgIDogKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFSLmtleXdvcmRzKSByZXR1cm4gdm9pZCBrLmFkZFRleHQoTSlcbiAgICAgICAgICAgICAgbGV0IGUgPSAwXG4gICAgICAgICAgICAgIFIua2V5d29yZFBhdHRlcm5SZS5sYXN0SW5kZXggPSAwXG4gICAgICAgICAgICAgIGxldCB0ID0gUi5rZXl3b3JkUGF0dGVyblJlLmV4ZWMoTSksXG4gICAgICAgICAgICAgICAgbiA9ICcnXG4gICAgICAgICAgICAgIGZvciAoOyB0OyApIHtcbiAgICAgICAgICAgICAgICBuICs9IE0uc3Vic3RyaW5nKGUsIHQuaW5kZXgpXG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IGMoUiwgdClcbiAgICAgICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgW2UsIHNdID0gaVxuICAgICAgICAgICAgICAgICAgaWYgKChrLmFkZFRleHQobiksIChuID0gJycpLCAoTyArPSBzKSwgZS5zdGFydHNXaXRoKCdfJykpKVxuICAgICAgICAgICAgICAgICAgICBuICs9IHRbMF1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuID0gdi5jbGFzc05hbWVBbGlhc2VzW2VdIHx8IGVcbiAgICAgICAgICAgICAgICAgICAgay5hZGRLZXl3b3JkKHRbMF0sIG4pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIG4gKz0gdFswXVxuICAgICAgICAgICAgICAgIDsoZSA9IFIua2V5d29yZFBhdHRlcm5SZS5sYXN0SW5kZXgpLFxuICAgICAgICAgICAgICAgICAgKHQgPSBSLmtleXdvcmRQYXR0ZXJuUmUuZXhlYyhNKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA7KG4gKz0gTS5zdWJzdHIoZSkpLCBrLmFkZFRleHQobilcbiAgICAgICAgICAgIH0pKCksXG4gICAgICAgICAgKE0gPSAnJylcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGgoZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGUuY2xhc3NOYW1lICYmXG4gICAgICAgICAgICBrLm9wZW5Ob2RlKHYuY2xhc3NOYW1lQWxpYXNlc1tlLmNsYXNzTmFtZV0gfHwgZS5jbGFzc05hbWUpLFxuICAgICAgICAgIChSID0gT2JqZWN0LmNyZWF0ZShlLCB7IHBhcmVudDogeyB2YWx1ZTogUiB9IH0pKSxcbiAgICAgICAgICBSXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGQoZSwgdCwgbikge1xuICAgICAgICBsZXQgcyA9ICgoZSwgdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG4gPSBlICYmIGUuZXhlYyh0KVxuICAgICAgICAgIHJldHVybiBuICYmIDAgPT09IG4uaW5kZXhcbiAgICAgICAgfSkoZS5lbmRSZSwgbilcbiAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICBpZiAoZVsnb246ZW5kJ10pIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBuZXcgaShlKVxuICAgICAgICAgICAgZVsnb246ZW5kJ10odCwgbiksIG4uaXNNYXRjaElnbm9yZWQgJiYgKHMgPSAhMSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICAgIGZvciAoOyBlLmVuZHNQYXJlbnQgJiYgZS5wYXJlbnQ7ICkgZSA9IGUucGFyZW50XG4gICAgICAgICAgICByZXR1cm4gZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5lbmRzV2l0aFBhcmVudCkgcmV0dXJuIGQoZS5wYXJlbnQsIHQsIG4pXG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBtKGUpIHtcbiAgICAgICAgcmV0dXJuIDAgPT09IFIubWF0Y2hlci5yZWdleEluZGV4ID8gKChNICs9IGVbMF0pLCAxKSA6ICgoSSA9ICEwKSwgMClcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGIoZSkge1xuICAgICAgICBjb25zdCBuID0gZVswXSxcbiAgICAgICAgICBpID0gdC5zdWJzdHIoZS5pbmRleCksXG4gICAgICAgICAgcyA9IGQoUiwgZSwgaSlcbiAgICAgICAgaWYgKCFzKSByZXR1cm4gVlxuICAgICAgICBjb25zdCBhID0gUlxuICAgICAgICBhLnNraXBcbiAgICAgICAgICA/IChNICs9IG4pXG4gICAgICAgICAgOiAoYS5yZXR1cm5FbmQgfHwgYS5leGNsdWRlRW5kIHx8IChNICs9IG4pLFxuICAgICAgICAgICAgZygpLFxuICAgICAgICAgICAgYS5leGNsdWRlRW5kICYmIChNID0gbikpXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBSLmNsYXNzTmFtZSAmJiBrLmNsb3NlTm9kZSgpLFxuICAgICAgICAgICAgUi5za2lwIHx8IFIuc3ViTGFuZ3VhZ2UgfHwgKE8gKz0gUi5yZWxldmFuY2UpLFxuICAgICAgICAgICAgKFIgPSBSLnBhcmVudClcbiAgICAgICAgfSB3aGlsZSAoUiAhPT0gcy5wYXJlbnQpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgcy5zdGFydHMgJiZcbiAgICAgICAgICAgIChzLmVuZFNhbWVBc0JlZ2luICYmIChzLnN0YXJ0cy5lbmRSZSA9IHMuZW5kUmUpLCBoKHMuc3RhcnRzKSksXG4gICAgICAgICAgYS5yZXR1cm5FbmQgPyAwIDogbi5sZW5ndGhcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IEUgPSB7fVxuICAgICAgZnVuY3Rpb24geChuLCBhKSB7XG4gICAgICAgIGNvbnN0IGwgPSBhICYmIGFbMF1cbiAgICAgICAgaWYgKCgoTSArPSBuKSwgbnVsbCA9PSBsKSkgcmV0dXJuIGcoKSwgMFxuICAgICAgICBpZiAoXG4gICAgICAgICAgJ2JlZ2luJyA9PT0gRS50eXBlICYmXG4gICAgICAgICAgJ2VuZCcgPT09IGEudHlwZSAmJlxuICAgICAgICAgIEUuaW5kZXggPT09IGEuaW5kZXggJiZcbiAgICAgICAgICAnJyA9PT0gbFxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoKChNICs9IHQuc2xpY2UoYS5pbmRleCwgYS5pbmRleCArIDEpKSwgIXIpKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gRXJyb3IoJzAgd2lkdGggbWF0Y2ggcmVnZXgnKVxuICAgICAgICAgICAgdGhyb3cgKCh0Lmxhbmd1YWdlTmFtZSA9IGUpLCAodC5iYWRSdWxlID0gRS5ydWxlKSwgdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgfVxuICAgICAgICBpZiAoKChFID0gYSksICdiZWdpbicgPT09IGEudHlwZSkpXG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IGVbMF0sXG4gICAgICAgICAgICAgIG4gPSBlLnJ1bGUsXG4gICAgICAgICAgICAgIHMgPSBuZXcgaShuKSxcbiAgICAgICAgICAgICAgYSA9IFtuLl9fYmVmb3JlQmVnaW4sIG5bJ29uOmJlZ2luJ11dXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG4gb2YgYSkgaWYgKG4gJiYgKG4oZSwgcyksIHMuaXNNYXRjaElnbm9yZWQpKSByZXR1cm4gbSh0KVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgbiAmJlxuICAgICAgICAgICAgICAgIG4uZW5kU2FtZUFzQmVnaW4gJiZcbiAgICAgICAgICAgICAgICAobi5lbmRSZSA9IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAgIHQucmVwbGFjZSgvWy0vXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpLFxuICAgICAgICAgICAgICAgICAgJ20nXG4gICAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICAgIG4uc2tpcFxuICAgICAgICAgICAgICAgID8gKE0gKz0gdClcbiAgICAgICAgICAgICAgICA6IChuLmV4Y2x1ZGVCZWdpbiAmJiAoTSArPSB0KSxcbiAgICAgICAgICAgICAgICAgIGcoKSxcbiAgICAgICAgICAgICAgICAgIG4ucmV0dXJuQmVnaW4gfHwgbi5leGNsdWRlQmVnaW4gfHwgKE0gPSB0KSksXG4gICAgICAgICAgICAgIGgobiksXG4gICAgICAgICAgICAgIG4ucmV0dXJuQmVnaW4gPyAwIDogdC5sZW5ndGhcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KShhKVxuICAgICAgICBpZiAoJ2lsbGVnYWwnID09PSBhLnR5cGUgJiYgIXMpIHtcbiAgICAgICAgICBjb25zdCBlID0gRXJyb3IoXG4gICAgICAgICAgICAnSWxsZWdhbCBsZXhlbWUgXCInICtcbiAgICAgICAgICAgICAgbCArXG4gICAgICAgICAgICAgICdcIiBmb3IgbW9kZSBcIicgK1xuICAgICAgICAgICAgICAoUi5jbGFzc05hbWUgfHwgJzx1bm5hbWVkPicpICtcbiAgICAgICAgICAgICAgJ1wiJ1xuICAgICAgICAgIClcbiAgICAgICAgICB0aHJvdyAoKGUubW9kZSA9IFIpLCBlKVxuICAgICAgICB9XG4gICAgICAgIGlmICgnZW5kJyA9PT0gYS50eXBlKSB7XG4gICAgICAgICAgY29uc3QgZSA9IGIoYSlcbiAgICAgICAgICBpZiAoZSAhPT0gVikgcmV0dXJuIGVcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2lsbGVnYWwnID09PSBhLnR5cGUgJiYgJycgPT09IGwpIHJldHVybiAxXG4gICAgICAgIGlmIChMID4gMWU1ICYmIEwgPiAzICogYS5pbmRleClcbiAgICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgICdwb3RlbnRpYWwgaW5maW5pdGUgbG9vcCwgd2F5IG1vcmUgaXRlcmF0aW9ucyB0aGFuIG1hdGNoZXMnXG4gICAgICAgICAgKVxuICAgICAgICByZXR1cm4gKE0gKz0gbCksIGwubGVuZ3RoXG4gICAgICB9XG4gICAgICBjb25zdCB2ID0gTihlKVxuICAgICAgaWYgKCF2KVxuICAgICAgICB0aHJvdyAoJChvLnJlcGxhY2UoJ3t9JywgZSkpLCBFcnJvcignVW5rbm93biBsYW5ndWFnZTogXCInICsgZSArICdcIicpKVxuICAgICAgY29uc3QgdyA9IFQodiwgeyBwbHVnaW5zOiBhIH0pXG4gICAgICBsZXQgeSA9ICcnLFxuICAgICAgICBSID0gbCB8fCB3XG4gICAgICBjb25zdCBfID0ge30sXG4gICAgICAgIGsgPSBuZXcgdS5fX2VtaXR0ZXIodSlcbiAgICAgIDsoKCkgPT4ge1xuICAgICAgICBjb25zdCBlID0gW11cbiAgICAgICAgZm9yIChsZXQgdCA9IFI7IHQgIT09IHY7IHQgPSB0LnBhcmVudClcbiAgICAgICAgICB0LmNsYXNzTmFtZSAmJiBlLnVuc2hpZnQodC5jbGFzc05hbWUpXG4gICAgICAgIGUuZm9yRWFjaChlID0+IGsub3Blbk5vZGUoZSkpXG4gICAgICB9KSgpXG4gICAgICBsZXQgTSA9ICcnLFxuICAgICAgICBPID0gMCxcbiAgICAgICAgQSA9IDAsXG4gICAgICAgIEwgPSAwLFxuICAgICAgICBJID0gITFcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoUi5tYXRjaGVyLmNvbnNpZGVyQWxsKCk7IDsgKSB7XG4gICAgICAgICAgTCsrLCBJID8gKEkgPSAhMSkgOiBSLm1hdGNoZXIuY29uc2lkZXJBbGwoKSwgKFIubWF0Y2hlci5sYXN0SW5kZXggPSBBKVxuICAgICAgICAgIGNvbnN0IGUgPSBSLm1hdGNoZXIuZXhlYyh0KVxuICAgICAgICAgIGlmICghZSkgYnJlYWtcbiAgICAgICAgICBjb25zdCBuID0geCh0LnN1YnN0cmluZyhBLCBlLmluZGV4KSwgZSlcbiAgICAgICAgICBBID0gZS5pbmRleCArIG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHgodC5zdWJzdHIoQSkpLFxuICAgICAgICAgIGsuY2xvc2VBbGxOb2RlcygpLFxuICAgICAgICAgIGsuZmluYWxpemUoKSxcbiAgICAgICAgICAoeSA9IGsudG9IVE1MKCkpLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlbGV2YW5jZTogTWF0aC5mbG9vcihPKSxcbiAgICAgICAgICAgIHZhbHVlOiB5LFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IGUsXG4gICAgICAgICAgICBpbGxlZ2FsOiAhMSxcbiAgICAgICAgICAgIGVtaXR0ZXI6IGssXG4gICAgICAgICAgICB0b3A6IFIsXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9IGNhdGNoIChuKSB7XG4gICAgICAgIGlmIChuLm1lc3NhZ2UgJiYgbi5tZXNzYWdlLmluY2x1ZGVzKCdJbGxlZ2FsJykpXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlsbGVnYWw6ICEwLFxuICAgICAgICAgICAgaWxsZWdhbEJ5OiB7XG4gICAgICAgICAgICAgIG1zZzogbi5tZXNzYWdlLFxuICAgICAgICAgICAgICBjb250ZXh0OiB0LnNsaWNlKEEgLSAxMDAsIEEgKyAxMDApLFxuICAgICAgICAgICAgICBtb2RlOiBuLm1vZGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc29mYXI6IHksXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICB2YWx1ZTogSyh0KSxcbiAgICAgICAgICAgIGVtaXR0ZXI6IGssXG4gICAgICAgICAgfVxuICAgICAgICBpZiAocilcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWxsZWdhbDogITEsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICB2YWx1ZTogSyh0KSxcbiAgICAgICAgICAgIGVtaXR0ZXI6IGssXG4gICAgICAgICAgICBsYW5ndWFnZTogZSxcbiAgICAgICAgICAgIHRvcDogUixcbiAgICAgICAgICAgIGVycm9yUmFpc2VkOiBuLFxuICAgICAgICAgIH1cbiAgICAgICAgdGhyb3cgblxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwKGUsIHQpIHtcbiAgICAgIHQgPSB0IHx8IHUubGFuZ3VhZ2VzIHx8IE9iamVjdC5rZXlzKG4pXG4gICAgICBjb25zdCBpID0gKGUgPT4ge1xuICAgICAgICAgIGNvbnN0IHQgPSB7XG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBlbWl0dGVyOiBuZXcgdS5fX2VtaXR0ZXIodSksXG4gICAgICAgICAgICB2YWx1ZTogSyhlKSxcbiAgICAgICAgICAgIGlsbGVnYWw6ICExLFxuICAgICAgICAgICAgdG9wOiBnLFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdC5lbWl0dGVyLmFkZFRleHQoZSksIHRcbiAgICAgICAgfSkoZSksXG4gICAgICAgIHMgPSB0XG4gICAgICAgICAgLmZpbHRlcihOKVxuICAgICAgICAgIC5maWx0ZXIoaylcbiAgICAgICAgICAubWFwKHQgPT4gZih0LCBlLCAhMSkpXG4gICAgICBzLnVuc2hpZnQoaSlcbiAgICAgIGNvbnN0IGEgPSBzLnNvcnQoKGUsIHQpID0+IHtcbiAgICAgICAgICBpZiAoZS5yZWxldmFuY2UgIT09IHQucmVsZXZhbmNlKSByZXR1cm4gdC5yZWxldmFuY2UgLSBlLnJlbGV2YW5jZVxuICAgICAgICAgIGlmIChlLmxhbmd1YWdlICYmIHQubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIGlmIChOKGUubGFuZ3VhZ2UpLnN1cGVyc2V0T2YgPT09IHQubGFuZ3VhZ2UpIHJldHVybiAxXG4gICAgICAgICAgICBpZiAoTih0Lmxhbmd1YWdlKS5zdXBlcnNldE9mID09PSBlLmxhbmd1YWdlKSByZXR1cm4gLTFcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSksXG4gICAgICAgIFtyLCBsXSA9IGEsXG4gICAgICAgIG8gPSByXG4gICAgICByZXR1cm4gKG8uc2Vjb25kX2Jlc3QgPSBsKSwgb1xuICAgIH1cbiAgICBjb25zdCBtID0ge1xuICAgICAgICAnYmVmb3JlOmhpZ2hsaWdodEVsZW1lbnQnOiAoeyBlbDogZSB9KSA9PiB7XG4gICAgICAgICAgdS51c2VCUiAmJlxuICAgICAgICAgICAgKGUuaW5uZXJIVE1MID0gZS5pbm5lckhUTUxcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcbi9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLzxiclsgL10qPi9nLCAnXFxuJykpXG4gICAgICAgIH0sXG4gICAgICAgICdhZnRlcjpoaWdobGlnaHRFbGVtZW50JzogKHsgcmVzdWx0OiBlIH0pID0+IHtcbiAgICAgICAgICB1LnVzZUJSICYmIChlLnZhbHVlID0gZS52YWx1ZS5yZXBsYWNlKC9cXG4vZywgJzxicj4nKSlcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBiID0gL14oPFtePl0rPnxcXHQpKy9nbSxcbiAgICAgIEUgPSB7XG4gICAgICAgICdhZnRlcjpoaWdobGlnaHRFbGVtZW50JzogKHsgcmVzdWx0OiBlIH0pID0+IHtcbiAgICAgICAgICB1LnRhYlJlcGxhY2UgJiZcbiAgICAgICAgICAgIChlLnZhbHVlID0gZS52YWx1ZS5yZXBsYWNlKGIsIGUgPT4gZS5yZXBsYWNlKC9cXHQvZywgdS50YWJSZXBsYWNlKSkpXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgZnVuY3Rpb24geChlKSB7XG4gICAgICBsZXQgdCA9IG51bGxcbiAgICAgIGNvbnN0IG4gPSAoZSA9PiB7XG4gICAgICAgIGxldCB0ID0gZS5jbGFzc05hbWUgKyAnICdcbiAgICAgICAgdCArPSBlLnBhcmVudE5vZGUgPyBlLnBhcmVudE5vZGUuY2xhc3NOYW1lIDogJydcbiAgICAgICAgY29uc3QgbiA9IHUubGFuZ3VhZ2VEZXRlY3RSZS5leGVjKHQpXG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgY29uc3QgdCA9IE4oblsxXSlcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdCB8fFxuICAgICAgICAgICAgICAoVShvLnJlcGxhY2UoJ3t9JywgblsxXSkpLFxuICAgICAgICAgICAgICBVKCdGYWxsaW5nIGJhY2sgdG8gbm8taGlnaGxpZ2h0IG1vZGUgZm9yIHRoaXMgYmxvY2suJywgZSkpLFxuICAgICAgICAgICAgdCA/IG5bMV0gOiAnbm8taGlnaGxpZ2h0J1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdC5zcGxpdCgvXFxzKy8pLmZpbmQoZSA9PiBoKGUpIHx8IE4oZSkpXG4gICAgICB9KShlKVxuICAgICAgaWYgKGgobikpIHJldHVyblxuICAgICAgTSgnYmVmb3JlOmhpZ2hsaWdodEVsZW1lbnQnLCB7IGVsOiBlLCBsYW5ndWFnZTogbiB9KSwgKHQgPSBlKVxuICAgICAgY29uc3QgaSA9IHQudGV4dENvbnRlbnQsXG4gICAgICAgIGEgPSBuID8gZChpLCB7IGxhbmd1YWdlOiBuLCBpZ25vcmVJbGxlZ2FsczogITAgfSkgOiBwKGkpXG4gICAgICBNKCdhZnRlcjpoaWdobGlnaHRFbGVtZW50JywgeyBlbDogZSwgcmVzdWx0OiBhLCB0ZXh0OiBpIH0pLFxuICAgICAgICAoZS5pbm5lckhUTUwgPSBhLnZhbHVlKSxcbiAgICAgICAgKChlLCB0LCBuKSA9PiB7XG4gICAgICAgICAgY29uc3QgaSA9IHQgPyBzW3RdIDogblxuICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnaGxqcycpLCBpICYmIGUuY2xhc3NMaXN0LmFkZChpKVxuICAgICAgICB9KShlLCBuLCBhLmxhbmd1YWdlKSxcbiAgICAgICAgKGUucmVzdWx0ID0ge1xuICAgICAgICAgIGxhbmd1YWdlOiBhLmxhbmd1YWdlLFxuICAgICAgICAgIHJlOiBhLnJlbGV2YW5jZSxcbiAgICAgICAgICByZWxhdmFuY2U6IGEucmVsZXZhbmNlLFxuICAgICAgICB9KSxcbiAgICAgICAgYS5zZWNvbmRfYmVzdCAmJlxuICAgICAgICAgIChlLnNlY29uZF9iZXN0ID0ge1xuICAgICAgICAgICAgbGFuZ3VhZ2U6IGEuc2Vjb25kX2Jlc3QubGFuZ3VhZ2UsXG4gICAgICAgICAgICByZTogYS5zZWNvbmRfYmVzdC5yZWxldmFuY2UsXG4gICAgICAgICAgICByZWxhdmFuY2U6IGEuc2Vjb25kX2Jlc3QucmVsZXZhbmNlLFxuICAgICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IHYgPSAoKSA9PiB7XG4gICAgICB2LmNhbGxlZCB8fFxuICAgICAgICAoKHYuY2FsbGVkID0gITApLFxuICAgICAgICB6KFxuICAgICAgICAgICcxMC42LjAnLFxuICAgICAgICAgICdpbml0SGlnaGxpZ2h0aW5nKCkgaXMgZGVwcmVjYXRlZC4gIFVzZSBoaWdobGlnaHRBbGwoKSBpbnN0ZWFkLidcbiAgICAgICAgKSxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlIGNvZGUnKS5mb3JFYWNoKHgpKVxuICAgIH1cbiAgICBsZXQgdyA9ICExXG4gICAgZnVuY3Rpb24geSgpIHtcbiAgICAgICdsb2FkaW5nJyAhPT0gZG9jdW1lbnQucmVhZHlTdGF0ZVxuICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZSBjb2RlJykuZm9yRWFjaCh4KVxuICAgICAgICA6ICh3ID0gITApXG4gICAgfVxuICAgIGZ1bmN0aW9uIE4oZSkge1xuICAgICAgcmV0dXJuIChlID0gKGUgfHwgJycpLnRvTG93ZXJDYXNlKCkpLCBuW2VdIHx8IG5bc1tlXV1cbiAgICB9XG4gICAgZnVuY3Rpb24gUihlLCB7IGxhbmd1YWdlTmFtZTogdCB9KSB7XG4gICAgICAnc3RyaW5nJyA9PSB0eXBlb2YgZSAmJiAoZSA9IFtlXSksXG4gICAgICAgIGUuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICBzW2UudG9Mb3dlckNhc2UoKV0gPSB0XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIGsoZSkge1xuICAgICAgY29uc3QgdCA9IE4oZSlcbiAgICAgIHJldHVybiB0ICYmICF0LmRpc2FibGVBdXRvZGV0ZWN0XG4gICAgfVxuICAgIGZ1bmN0aW9uIE0oZSwgdCkge1xuICAgICAgY29uc3QgbiA9IGVcbiAgICAgIGEuZm9yRWFjaChlID0+IHtcbiAgICAgICAgZVtuXSAmJiBlW25dKHQpXG4gICAgICB9KVxuICAgIH1cbiAgICAndW5kZWZpbmVkJyAhPSB0eXBlb2Ygd2luZG93ICYmXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAmJlxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdET01Db250ZW50TG9hZGVkJyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHcgJiYgeSgpXG4gICAgICAgIH0sXG4gICAgICAgICExXG4gICAgICApLFxuICAgICAgT2JqZWN0LmFzc2lnbihlLCB7XG4gICAgICAgIGhpZ2hsaWdodDogZCxcbiAgICAgICAgaGlnaGxpZ2h0QXV0bzogcCxcbiAgICAgICAgaGlnaGxpZ2h0QWxsOiB5LFxuICAgICAgICBmaXhNYXJrdXA6IGUgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB6KCcxMC4yLjAnLCAnZml4TWFya3VwIHdpbGwgYmUgcmVtb3ZlZCBlbnRpcmVseSBpbiB2MTEuMCcpLFxuICAgICAgICAgICAgeihcbiAgICAgICAgICAgICAgJzEwLjIuMCcsXG4gICAgICAgICAgICAgICdQbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzI1MzQnXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgKHQgPSBlKSxcbiAgICAgICAgICAgIHUudGFiUmVwbGFjZSB8fCB1LnVzZUJSXG4gICAgICAgICAgICAgID8gdC5yZXBsYWNlKGwsIGUgPT5cbiAgICAgICAgICAgICAgICAgICdcXG4nID09PSBlXG4gICAgICAgICAgICAgICAgICAgID8gdS51c2VCUlxuICAgICAgICAgICAgICAgICAgICAgID8gJzxicj4nXG4gICAgICAgICAgICAgICAgICAgICAgOiBlXG4gICAgICAgICAgICAgICAgICAgIDogdS50YWJSZXBsYWNlXG4gICAgICAgICAgICAgICAgICAgID8gZS5yZXBsYWNlKC9cXHQvZywgdS50YWJSZXBsYWNlKVxuICAgICAgICAgICAgICAgICAgICA6IGVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogdFxuICAgICAgICAgIClcbiAgICAgICAgICB2YXIgdFxuICAgICAgICB9LFxuICAgICAgICBoaWdobGlnaHRFbGVtZW50OiB4LFxuICAgICAgICBoaWdobGlnaHRCbG9jazogZSA9PiAoXG4gICAgICAgICAgeignMTAuNy4wJywgJ2hpZ2hsaWdodEJsb2NrIHdpbGwgYmUgcmVtb3ZlZCBlbnRpcmVseSBpbiB2MTIuMCcpLFxuICAgICAgICAgIHooJzEwLjcuMCcsICdQbGVhc2UgdXNlIGhpZ2hsaWdodEVsZW1lbnQgbm93LicpLFxuICAgICAgICAgIHgoZSlcbiAgICAgICAgKSxcbiAgICAgICAgY29uZmlndXJlOiBlID0+IHtcbiAgICAgICAgICBlLnVzZUJSICYmXG4gICAgICAgICAgICAoeignMTAuMy4wJywgXCIndXNlQlInIHdpbGwgYmUgcmVtb3ZlZCBlbnRpcmVseSBpbiB2MTEuMFwiKSxcbiAgICAgICAgICAgIHooXG4gICAgICAgICAgICAgICcxMC4zLjAnLFxuICAgICAgICAgICAgICAnUGxlYXNlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL2lzc3Vlcy8yNTU5J1xuICAgICAgICAgICAgKSksXG4gICAgICAgICAgICAodSA9IEcodSwgZSkpXG4gICAgICAgIH0sXG4gICAgICAgIGluaXRIaWdobGlnaHRpbmc6IHYsXG4gICAgICAgIGluaXRIaWdobGlnaHRpbmdPbkxvYWQ6ICgpID0+IHtcbiAgICAgICAgICB6KFxuICAgICAgICAgICAgJzEwLjYuMCcsXG4gICAgICAgICAgICAnaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpIGlzIGRlcHJlY2F0ZWQuICBVc2UgaGlnaGxpZ2h0QWxsKCkgaW5zdGVhZC4nXG4gICAgICAgICAgKSxcbiAgICAgICAgICAgICh3ID0gITApXG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2lzdGVyTGFuZ3VhZ2U6ICh0LCBpKSA9PiB7XG4gICAgICAgICAgbGV0IHMgPSBudWxsXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHMgPSBpKGUpXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAoJChcbiAgICAgICAgICAgICAgICBcIkxhbmd1YWdlIGRlZmluaXRpb24gZm9yICd7fScgY291bGQgbm90IGJlIHJlZ2lzdGVyZWQuXCIucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICd7fScsXG4gICAgICAgICAgICAgICAgICB0XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAhcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgdGhyb3cgZVxuICAgICAgICAgICAgJChlKSwgKHMgPSBnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzLm5hbWUgfHwgKHMubmFtZSA9IHQpLFxuICAgICAgICAgICAgKG5bdF0gPSBzKSxcbiAgICAgICAgICAgIChzLnJhd0RlZmluaXRpb24gPSBpLmJpbmQobnVsbCwgZSkpLFxuICAgICAgICAgICAgcy5hbGlhc2VzICYmXG4gICAgICAgICAgICAgIFIocy5hbGlhc2VzLCB7XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VOYW1lOiB0LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICB1bnJlZ2lzdGVyTGFuZ3VhZ2U6IGUgPT4ge1xuICAgICAgICAgIGRlbGV0ZSBuW2VdXG4gICAgICAgICAgZm9yIChjb25zdCB0IG9mIE9iamVjdC5rZXlzKHMpKSBzW3RdID09PSBlICYmIGRlbGV0ZSBzW3RdXG4gICAgICAgIH0sXG4gICAgICAgIGxpc3RMYW5ndWFnZXM6ICgpID0+IE9iamVjdC5rZXlzKG4pLFxuICAgICAgICBnZXRMYW5ndWFnZTogTixcbiAgICAgICAgcmVnaXN0ZXJBbGlhc2VzOiBSLFxuICAgICAgICByZXF1aXJlTGFuZ3VhZ2U6IGUgPT4ge1xuICAgICAgICAgIHooJzEwLjQuMCcsICdyZXF1aXJlTGFuZ3VhZ2Ugd2lsbCBiZSByZW1vdmVkIGVudGlyZWx5IGluIHYxMS4nKSxcbiAgICAgICAgICAgIHooXG4gICAgICAgICAgICAgICcxMC40LjAnLFxuICAgICAgICAgICAgICAnUGxlYXNlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL3B1bGwvMjg0NCdcbiAgICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB0ID0gTihlKVxuICAgICAgICAgIGlmICh0KSByZXR1cm4gdFxuICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgXCJUaGUgJ3t9JyBsYW5ndWFnZSBpcyByZXF1aXJlZCwgYnV0IG5vdCBsb2FkZWQuXCIucmVwbGFjZSgne30nLCBlKVxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgYXV0b0RldGVjdGlvbjogayxcbiAgICAgICAgaW5oZXJpdDogRyxcbiAgICAgICAgYWRkUGx1Z2luOiBlID0+IHtcbiAgICAgICAgICA7KGUgPT4ge1xuICAgICAgICAgICAgZVsnYmVmb3JlOmhpZ2hsaWdodEJsb2NrJ10gJiZcbiAgICAgICAgICAgICAgIWVbJ2JlZm9yZTpoaWdobGlnaHRFbGVtZW50J10gJiZcbiAgICAgICAgICAgICAgKGVbJ2JlZm9yZTpoaWdobGlnaHRFbGVtZW50J10gPSB0ID0+IHtcbiAgICAgICAgICAgICAgICBlWydiZWZvcmU6aGlnaGxpZ2h0QmxvY2snXShPYmplY3QuYXNzaWduKHsgYmxvY2s6IHQuZWwgfSwgdCkpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBlWydhZnRlcjpoaWdobGlnaHRCbG9jayddICYmXG4gICAgICAgICAgICAgICAgIWVbJ2FmdGVyOmhpZ2hsaWdodEVsZW1lbnQnXSAmJlxuICAgICAgICAgICAgICAgIChlWydhZnRlcjpoaWdobGlnaHRFbGVtZW50J10gPSB0ID0+IHtcbiAgICAgICAgICAgICAgICAgIGVbJ2FmdGVyOmhpZ2hsaWdodEJsb2NrJ10oT2JqZWN0LmFzc2lnbih7IGJsb2NrOiB0LmVsIH0sIHQpKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSkoZSksXG4gICAgICAgICAgICBhLnB1c2goZSlcbiAgICAgICAgfSxcbiAgICAgICAgdnVlUGx1Z2luOiBQKGUpLlZ1ZVBsdWdpbixcbiAgICAgIH0pLFxuICAgICAgKGUuZGVidWdNb2RlID0gKCkgPT4ge1xuICAgICAgICByID0gITFcbiAgICAgIH0pLFxuICAgICAgKGUuc2FmZU1vZGUgPSAoKSA9PiB7XG4gICAgICAgIHIgPSAhMFxuICAgICAgfSksXG4gICAgICAoZS52ZXJzaW9uU3RyaW5nID0gJzEwLjcuMScpXG4gICAgZm9yIChjb25zdCBlIGluIF8pICdvYmplY3QnID09IHR5cGVvZiBfW2VdICYmIHQoX1tlXSlcbiAgICByZXR1cm4gKFxuICAgICAgT2JqZWN0LmFzc2lnbihlLCBfKSwgZS5hZGRQbHVnaW4obSksIGUuYWRkUGx1Z2luKEQpLCBlLmFkZFBsdWdpbihFKSwgZVxuICAgIClcbiAgfSkoe30pXG59KSgpXG5cblxuJ29iamVjdCcgPT0gdHlwZW9mIGV4cG9ydHMgJiZcbiAgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIG1vZHVsZSAmJlxuICAobW9kdWxlLmV4cG9ydHMgPSBobGpzKVxuXG5cbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ2FwYWNoZScsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgY29uc3QgbiA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IC9cXGR7MSwzfVxcLlxcZHsxLDN9XFwuXFxkezEsM31cXC5cXGR7MSwzfSg6XFxkezEsNX0pPy8sXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnQXBhY2hlIGNvbmZpZycsXG4gICAgICAgIGFsaWFzZXM6IFsnYXBhY2hlY29uZiddLFxuICAgICAgICBjYXNlX2luc2Vuc2l0aXZlOiAhMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBlLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW46IC88XFwvPy8sXG4gICAgICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbnVtYmVyJywgYmVnaW46IC86XFxkezEsNX0vIH0sXG4gICAgICAgICAgICAgIGUuaW5oZXJpdChlLlFVT1RFX1NUUklOR19NT0RFLCB7IHJlbGV2YW5jZTogMCB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICAgICAgYmVnaW46IC9cXHcrLyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICAgIG5vbWFya3VwOlxuICAgICAgICAgICAgICAgICdvcmRlciBkZW55IGFsbG93IHNldGVudiByZXdyaXRlcnVsZSByZXdyaXRlZW5naW5lIHJld3JpdGVjb25kIGRvY3VtZW50cm9vdCBzZXRoYW5kbGVyIGVycm9yZG9jdW1lbnQgbG9hZG1vZHVsZSBvcHRpb25zIGhlYWRlciBsaXN0ZW4gc2VydmVycm9vdCBzZXJ2ZXJuYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAga2V5d29yZHM6IHsgbGl0ZXJhbDogJ29uIG9mZiBhbGwgZGVueSBhbGxvdycgfSxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ21ldGEnLCBiZWdpbjogL1xcc1xcWy8sIGVuZDogL1xcXSQvIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgICAgICAgYmVnaW46IC9bXFwkJV1cXHsvLFxuICAgICAgICAgICAgICAgICAgZW5kOiAvXFx9LyxcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnLCB7IGNsYXNzTmFtZTogJ251bWJlcicsIGJlZ2luOiAvWyQlXVxcZCsvIH1dLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbixcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ251bWJlcicsIGJlZ2luOiAvXFxkKy8gfSxcbiAgICAgICAgICAgICAgICBlLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ2Jhc2gnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIGZ1bmN0aW9uIGUoLi4uZSkge1xuICAgICAgcmV0dXJuIGVcbiAgICAgICAgLm1hcChlID0+IHtcbiAgICAgICAgICByZXR1cm4gKHMgPSBlKSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgcyA/IHMgOiBzLnNvdXJjZSkgOiBudWxsXG4gICAgICAgICAgdmFyIHNcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpXG4gICAgfVxuICAgIHJldHVybiBzID0+IHtcbiAgICAgIGNvbnN0IG4gPSB7fSxcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBiZWdpbjogL1xcJFxcey8sXG4gICAgICAgICAgZW5kOiAvXFx9LyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgJ3NlbGYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogLzotLyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtuXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgT2JqZWN0LmFzc2lnbihuLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogZSgvXFwkW1xcd1xcZCNAXVtcXHdcXGRfXSovLCAnKD8hW1xcXFx3XFxcXGRdKSg/IVskXSknKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHQsXG4gICAgICAgIF0sXG4gICAgICB9KVxuICAgICAgY29uc3QgYSA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgICAgICAgYmVnaW46IC9cXCRcXCgvLFxuICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgY29udGFpbnM6IFtzLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgICAgICB9LFxuICAgICAgICBpID0ge1xuICAgICAgICAgIGJlZ2luOiAvPDwtP1xccyooPz1cXHcrKS8sXG4gICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBzLkVORF9TQU1FX0FTX0JFR0lOKHtcbiAgICAgICAgICAgICAgICBiZWdpbjogLyhcXHcrKS8sXG4gICAgICAgICAgICAgICAgZW5kOiAvKFxcdyspLyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgIGJlZ2luOiAvXCIvLFxuICAgICAgICAgIGVuZDogL1wiLyxcbiAgICAgICAgICBjb250YWluczogW3MuQkFDS1NMQVNIX0VTQ0FQRSwgbiwgYV0sXG4gICAgICAgIH1cbiAgICAgIGEuY29udGFpbnMucHVzaChjKVxuICAgICAgY29uc3QgbyA9IHtcbiAgICAgICAgICBiZWdpbjogL1xcJFxcKFxcKC8sXG4gICAgICAgICAgZW5kOiAvXFwpXFwpLyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgeyBiZWdpbjogL1xcZCsjWzAtOWEtZl0rLywgY2xhc3NOYW1lOiAnbnVtYmVyJyB9LFxuICAgICAgICAgICAgcy5OVU1CRVJfTU9ERSxcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgciA9IHMuU0hFQkFORyh7XG4gICAgICAgICAgYmluYXJ5OiAnKGZpc2h8YmFzaHx6c2h8c2h8Y3NofGtzaHx0Y3NofGRhc2h8c2NzaCknLFxuICAgICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgIH0pLFxuICAgICAgICBsID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICBiZWdpbjogL1xcd1tcXHdcXGRfXSpcXHMqXFwoXFxzKlxcKVxccypcXHsvLFxuICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICBjb250YWluczogW3MuaW5oZXJpdChzLlRJVExFX01PREUsIHsgYmVnaW46IC9cXHdbXFx3XFxkX10qLyB9KV0sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnQmFzaCcsXG4gICAgICAgIGFsaWFzZXM6IFsnc2gnLCAnenNoJ10sXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJHBhdHRlcm46IC9cXGJbYS16Ll8tXStcXGIvLFxuICAgICAgICAgIGtleXdvcmQ6XG4gICAgICAgICAgICAnaWYgdGhlbiBlbHNlIGVsaWYgZmkgZm9yIHdoaWxlIGluIGRvIGRvbmUgY2FzZSBlc2FjIGZ1bmN0aW9uJyxcbiAgICAgICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZScsXG4gICAgICAgICAgYnVpbHRfaW46XG4gICAgICAgICAgICAnYnJlYWsgY2QgY29udGludWUgZXZhbCBleGVjIGV4aXQgZXhwb3J0IGdldG9wdHMgaGFzaCBwd2QgcmVhZG9ubHkgcmV0dXJuIHNoaWZ0IHRlc3QgdGltZXMgdHJhcCB1bWFzayB1bnNldCBhbGlhcyBiaW5kIGJ1aWx0aW4gY2FsbGVyIGNvbW1hbmQgZGVjbGFyZSBlY2hvIGVuYWJsZSBoZWxwIGxldCBsb2NhbCBsb2dvdXQgbWFwZmlsZSBwcmludGYgcmVhZCByZWFkYXJyYXkgc291cmNlIHR5cGUgdHlwZXNldCB1bGltaXQgdW5hbGlhcyBzZXQgc2hvcHQgYXV0b2xvYWQgYmcgYmluZGtleSBieWUgY2FwIGNoZGlyIGNsb25lIGNvbXBhcmd1bWVudHMgY29tcGNhbGwgY29tcGN0bCBjb21wZGVzY3JpYmUgY29tcGZpbGVzIGNvbXBncm91cHMgY29tcHF1b3RlIGNvbXB0YWdzIGNvbXB0cnkgY29tcHZhbHVlcyBkaXJzIGRpc2FibGUgZGlzb3duIGVjaG90YyBlY2hvdGkgZW11bGF0ZSBmYyBmZyBmbG9hdCBmdW5jdGlvbnMgZ2V0Y2FwIGdldGxuIGhpc3RvcnkgaW50ZWdlciBqb2JzIGtpbGwgbGltaXQgbG9nIG5vZ2xvYiBwb3BkIHByaW50IHB1c2hkIHB1c2hsbiByZWhhc2ggc2NoZWQgc2V0Y2FwIHNldG9wdCBzdGF0IHN1c3BlbmQgdHR5Y3RsIHVuZnVuY3Rpb24gdW5oYXNoIHVubGltaXQgdW5zZXRvcHQgdmFyZWQgd2FpdCB3aGVuY2Ugd2hlcmUgd2hpY2ggemNvbXBpbGUgemZvcm1hdCB6ZnRwIHpsZSB6bW9kbG9hZCB6cGFyc2VvcHRzIHpwcm9mIHpwdHkgenJlZ2V4cGFyc2UgenNvY2tldCB6c3R5bGUgenRjcCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgcixcbiAgICAgICAgICBzLlNIRUJBTkcoKSxcbiAgICAgICAgICBsLFxuICAgICAgICAgIG8sXG4gICAgICAgICAgcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBpLFxuICAgICAgICAgIGMsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICcnLCBiZWdpbjogL1xcXFxcIi8gfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N0cmluZycsIGJlZ2luOiAvJy8sIGVuZDogLycvIH0sXG4gICAgICAgICAgbixcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ2MnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIGZ1bmN0aW9uIGUoZSkge1xuICAgICAgcmV0dXJuICgoLi4uZSkgPT5cbiAgICAgICAgZVxuICAgICAgICAgIC5tYXAoZSA9PlxuICAgICAgICAgICAgKGUgPT4gKGUgPyAoJ3N0cmluZycgPT0gdHlwZW9mIGUgPyBlIDogZS5zb3VyY2UpIDogbnVsbCkpKGUpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5qb2luKCcnKSkoJygnLCBlLCAnKT8nKVxuICAgIH1cbiAgICByZXR1cm4gdCA9PiB7XG4gICAgICBjb25zdCBuID0gdC5DT01NRU5UKCcvLycsICckJywgeyBjb250YWluczogW3sgYmVnaW46IC9cXFxcXFxuLyB9XSB9KSxcbiAgICAgICAgciA9ICdbYS16QS1aX11cXFxcdyo6OicsXG4gICAgICAgIGEgPVxuICAgICAgICAgICcoZGVjbHR5cGVcXFxcKGF1dG9cXFxcKXwnICsgZShyKSArICdbYS16QS1aX11cXFxcdyonICsgZSgnPFtePD5dKz4nKSArICcpJyxcbiAgICAgICAgaSA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgICBiZWdpbjogJ1xcXFxiW2EtelxcXFxkX10qX3RcXFxcYicsXG4gICAgICAgIH0sXG4gICAgICAgIHMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJyh1OD98VXxMKT9cIicsXG4gICAgICAgICAgICAgIGVuZDogJ1wiJyxcbiAgICAgICAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFt0LkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICAgXCIodTg/fFV8TCk/JyhcXFxcXFxcXCh4WzAtOUEtRmEtZl17Mn18dVswLTlBLUZhLWZdezQsOH18WzAtN117M318XFxcXFMpfC4pXCIsXG4gICAgICAgICAgICAgIGVuZDogXCInXCIsXG4gICAgICAgICAgICAgIGlsbGVnYWw6ICcuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0LkVORF9TQU1FX0FTX0JFR0lOKHtcbiAgICAgICAgICAgICAgYmVnaW46IC8oPzp1OD98VXxMKT9SXCIoW14oKVxcXFwgXXswLDE2fSlcXCgvLFxuICAgICAgICAgICAgICBlbmQ6IC9cXCkoW14oKVxcXFwgXXswLDE2fSlcIi8sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBvID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IFwiXFxcXGIoMGJbMDEnXSspXCIgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICAgXCIoLT8pXFxcXGIoW1xcXFxkJ10rKFxcXFwuW1xcXFxkJ10qKT98XFxcXC5bXFxcXGQnXSspKChsbHxMTHxsfEwpKHV8VSk/fCh1fFUpKGxsfExMfGx8TCk/fGZ8RnxifEIpXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgICBcIigtPykoXFxcXGIwW3hYXVthLWZBLUYwLTknXSt8KFxcXFxiW1xcXFxkJ10rKFxcXFwuW1xcXFxkJ10qKT98XFxcXC5bXFxcXGQnXSspKFtlRV1bLStdP1tcXFxcZCddKyk/KVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgYyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICBiZWdpbjogLyNcXHMqW2Etel0rXFxiLyxcbiAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgJ21ldGEta2V5d29yZCc6XG4gICAgICAgICAgICAgICdpZiBlbHNlIGVsaWYgZW5kaWYgZGVmaW5lIHVuZGVmIHdhcm5pbmcgZXJyb3IgbGluZSBwcmFnbWEgX1ByYWdtYSBpZmRlZiBpZm5kZWYgaW5jbHVkZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgeyBiZWdpbjogL1xcXFxcXG4vLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgIHQuaW5oZXJpdChzLCB7IGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJyB9KSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnLFxuICAgICAgICAgICAgICBiZWdpbjogLzwuKj8+LyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgdC5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBsID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgICBiZWdpbjogZShyKSArIHQuSURFTlRfUkUsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9LFxuICAgICAgICBkID0gZShyKSArIHQuSURFTlRfUkUgKyAnXFxcXHMqXFxcXCgnLFxuICAgICAgICB1ID0ge1xuICAgICAgICAgIGtleXdvcmQ6XG4gICAgICAgICAgICAnaW50IGZsb2F0IHdoaWxlIHByaXZhdGUgY2hhciBjaGFyOF90IGNoYXIxNl90IGNoYXIzMl90IGNhdGNoIGltcG9ydCBtb2R1bGUgZXhwb3J0IHZpcnR1YWwgb3BlcmF0b3Igc2l6ZW9mIGR5bmFtaWNfY2FzdHwxMCB0eXBlZGVmIGNvbnN0X2Nhc3R8MTAgY29uc3QgZm9yIHN0YXRpY19jYXN0fDEwIHVuaW9uIG5hbWVzcGFjZSB1bnNpZ25lZCBsb25nIHZvbGF0aWxlIHN0YXRpYyBwcm90ZWN0ZWQgYm9vbCB0ZW1wbGF0ZSBtdXRhYmxlIGlmIHB1YmxpYyBmcmllbmQgZG8gZ290byBhdXRvIHZvaWQgZW51bSBlbHNlIGJyZWFrIGV4dGVybiB1c2luZyBhc20gY2FzZSB0eXBlaWQgd2NoYXJfdCBzaG9ydCByZWludGVycHJldF9jYXN0fDEwIGRlZmF1bHQgZG91YmxlIHJlZ2lzdGVyIGV4cGxpY2l0IHNpZ25lZCB0eXBlbmFtZSB0cnkgdGhpcyBzd2l0Y2ggY29udGludWUgaW5saW5lIGRlbGV0ZSBhbGlnbmFzIGFsaWdub2YgY29uc3RleHByIGNvbnN0ZXZhbCBjb25zdGluaXQgZGVjbHR5cGUgY29uY2VwdCBjb19hd2FpdCBjb19yZXR1cm4gY29feWllbGQgcmVxdWlyZXMgbm9leGNlcHQgc3RhdGljX2Fzc2VydCB0aHJlYWRfbG9jYWwgcmVzdHJpY3QgZmluYWwgb3ZlcnJpZGUgYXRvbWljX2Jvb2wgYXRvbWljX2NoYXIgYXRvbWljX3NjaGFyIGF0b21pY191Y2hhciBhdG9taWNfc2hvcnQgYXRvbWljX3VzaG9ydCBhdG9taWNfaW50IGF0b21pY191aW50IGF0b21pY19sb25nIGF0b21pY191bG9uZyBhdG9taWNfbGxvbmcgYXRvbWljX3VsbG9uZyBuZXcgdGhyb3cgcmV0dXJuIGFuZCBhbmRfZXEgYml0YW5kIGJpdG9yIGNvbXBsIG5vdCBub3RfZXEgb3Igb3JfZXEgeG9yIHhvcl9lcScsXG4gICAgICAgICAgYnVpbHRfaW46XG4gICAgICAgICAgICAnc3RkIHN0cmluZyB3c3RyaW5nIGNpbiBjb3V0IGNlcnIgY2xvZyBzdGRpbiBzdGRvdXQgc3RkZXJyIHN0cmluZ3N0cmVhbSBpc3RyaW5nc3RyZWFtIG9zdHJpbmdzdHJlYW0gYXV0b19wdHIgZGVxdWUgbGlzdCBxdWV1ZSBzdGFjayB2ZWN0b3IgbWFwIHNldCBwYWlyIGJpdHNldCBtdWx0aXNldCBtdWx0aW1hcCB1bm9yZGVyZWRfc2V0IHVub3JkZXJlZF9tYXAgdW5vcmRlcmVkX211bHRpc2V0IHVub3JkZXJlZF9tdWx0aW1hcCBwcmlvcml0eV9xdWV1ZSBtYWtlX3BhaXIgYXJyYXkgc2hhcmVkX3B0ciBhYm9ydCB0ZXJtaW5hdGUgYWJzIGFjb3MgYXNpbiBhdGFuMiBhdGFuIGNhbGxvYyBjZWlsIGNvc2ggY29zIGV4aXQgZXhwIGZhYnMgZmxvb3IgZm1vZCBmcHJpbnRmIGZwdXRzIGZyZWUgZnJleHAgZnNjYW5mIGZ1dHVyZSBpc2FsbnVtIGlzYWxwaGEgaXNjbnRybCBpc2RpZ2l0IGlzZ3JhcGggaXNsb3dlciBpc3ByaW50IGlzcHVuY3QgaXNzcGFjZSBpc3VwcGVyIGlzeGRpZ2l0IHRvbG93ZXIgdG91cHBlciBsYWJzIGxkZXhwIGxvZzEwIGxvZyBtYWxsb2MgcmVhbGxvYyBtZW1jaHIgbWVtY21wIG1lbWNweSBtZW1zZXQgbW9kZiBwb3cgcHJpbnRmIHB1dGNoYXIgcHV0cyBzY2FuZiBzaW5oIHNpbiBzbnByaW50ZiBzcHJpbnRmIHNxcnQgc3NjYW5mIHN0cmNhdCBzdHJjaHIgc3RyY21wIHN0cmNweSBzdHJjc3BuIHN0cmxlbiBzdHJuY2F0IHN0cm5jbXAgc3RybmNweSBzdHJwYnJrIHN0cnJjaHIgc3Ryc3BuIHN0cnN0ciB0YW5oIHRhbiB2ZnByaW50ZiB2cHJpbnRmIHZzcHJpbnRmIGVuZGwgaW5pdGlhbGl6ZXJfbGlzdCB1bmlxdWVfcHRyIF9Cb29sIGNvbXBsZXggX0NvbXBsZXggaW1hZ2luYXJ5IF9JbWFnaW5hcnknLFxuICAgICAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIG51bGxwdHIgTlVMTCcsXG4gICAgICAgIH0sXG4gICAgICAgIG0gPSBbYywgaSwgbiwgdC5DX0JMT0NLX0NPTU1FTlRfTU9ERSwgbywgc10sXG4gICAgICAgIHAgPSB7XG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC89LywgZW5kOiAvOy8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICduZXcgdGhyb3cgcmV0dXJuIGVsc2UnLFxuICAgICAgICAgICAgICBlbmQ6IC87LyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBrZXl3b3JkczogdSxcbiAgICAgICAgICBjb250YWluczogbS5jb25jYXQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgIGtleXdvcmRzOiB1LFxuICAgICAgICAgICAgICBjb250YWluczogbS5jb25jYXQoWydzZWxmJ10pLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgXyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgYmVnaW46ICcoJyArIGEgKyAnW1xcXFwqJlxcXFxzXSspKycgKyBkLFxuICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAga2V5d29yZHM6IHUsXG4gICAgICAgICAgaWxsZWdhbDogL1teXFx3XFxzXFwqJjo8Pi5dLyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgeyBiZWdpbjogJ2RlY2x0eXBlXFxcXChhdXRvXFxcXCknLCBrZXl3b3JkczogdSwgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiBkLCByZXR1cm5CZWdpbjogITAsIGNvbnRhaW5zOiBbbF0sIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgIGtleXdvcmRzOiB1LFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgbixcbiAgICAgICAgICAgICAgICB0LkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICAgIHMsXG4gICAgICAgICAgICAgICAgbyxcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgICAgICBrZXl3b3JkczogdSxcbiAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnLCBuLCB0LkNfQkxPQ0tfQ09NTUVOVF9NT0RFLCBzLCBvLCBpXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgdC5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0MnLFxuICAgICAgICBhbGlhc2VzOiBbJ2gnXSxcbiAgICAgICAga2V5d29yZHM6IHUsXG4gICAgICAgIGRpc2FibGVBdXRvZGV0ZWN0OiAhMCxcbiAgICAgICAgaWxsZWdhbDogJzwvJyxcbiAgICAgICAgY29udGFpbnM6IFtdLmNvbmNhdChwLCBfLCBtLCBbXG4gICAgICAgICAgYyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgJ1xcXFxiKGRlcXVlfGxpc3R8cXVldWV8cHJpb3JpdHlfcXVldWV8cGFpcnxzdGFja3x2ZWN0b3J8bWFwfHNldHxiaXRzZXR8bXVsdGlzZXR8bXVsdGltYXB8dW5vcmRlcmVkX21hcHx1bm9yZGVyZWRfc2V0fHVub3JkZXJlZF9tdWx0aXNldHx1bm9yZGVyZWRfbXVsdGltYXB8YXJyYXkpXFxcXHMqPCcsXG4gICAgICAgICAgICBlbmQ6ICc+JyxcbiAgICAgICAgICAgIGtleXdvcmRzOiB1LFxuICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZicsIGldLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBiZWdpbjogdC5JREVOVF9SRSArICc6OicsIGtleXdvcmRzOiB1IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2VudW0gY2xhc3Mgc3RydWN0IHVuaW9uJyxcbiAgICAgICAgICAgIGVuZDogL1t7Ozo8Pj1dLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbeyBiZWdpbktleXdvcmRzOiAnZmluYWwgY2xhc3Mgc3RydWN0JyB9LCB0LlRJVExFX01PREVdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pLFxuICAgICAgICBleHBvcnRzOiB7XG4gICAgICAgICAgcHJlcHJvY2Vzc29yOiBjLFxuICAgICAgICAgIHN0cmluZ3M6IHMsXG4gICAgICAgICAga2V5d29yZHM6IHUsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdjb2ZmZWVzY3JpcHQnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIGNvbnN0IGUgPSBbXG4gICAgICAgICdhcycsXG4gICAgICAgICdpbicsXG4gICAgICAgICdvZicsXG4gICAgICAgICdpZicsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnZmluYWxseScsXG4gICAgICAgICd2YXInLFxuICAgICAgICAnbmV3JyxcbiAgICAgICAgJ2Z1bmN0aW9uJyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICd2b2lkJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY2F0Y2gnLFxuICAgICAgICAnaW5zdGFuY2VvZicsXG4gICAgICAgICd3aXRoJyxcbiAgICAgICAgJ3Rocm93JyxcbiAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICd0cnknLFxuICAgICAgICAnc3dpdGNoJyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ3R5cGVvZicsXG4gICAgICAgICdkZWxldGUnLFxuICAgICAgICAnbGV0JyxcbiAgICAgICAgJ3lpZWxkJyxcbiAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2RlYnVnZ2VyJyxcbiAgICAgICAgJ2FzeW5jJyxcbiAgICAgICAgJ2F3YWl0JyxcbiAgICAgICAgJ3N0YXRpYycsXG4gICAgICAgICdpbXBvcnQnLFxuICAgICAgICAnZnJvbScsXG4gICAgICAgICdleHBvcnQnLFxuICAgICAgICAnZXh0ZW5kcycsXG4gICAgICBdLFxuICAgICAgbiA9IFsndHJ1ZScsICdmYWxzZScsICdudWxsJywgJ3VuZGVmaW5lZCcsICdOYU4nLCAnSW5maW5pdHknXSxcbiAgICAgIGEgPSBbXS5jb25jYXQoXG4gICAgICAgIFtcbiAgICAgICAgICAnc2V0SW50ZXJ2YWwnLFxuICAgICAgICAgICdzZXRUaW1lb3V0JyxcbiAgICAgICAgICAnY2xlYXJJbnRlcnZhbCcsXG4gICAgICAgICAgJ2NsZWFyVGltZW91dCcsXG4gICAgICAgICAgJ3JlcXVpcmUnLFxuICAgICAgICAgICdleHBvcnRzJyxcbiAgICAgICAgICAnZXZhbCcsXG4gICAgICAgICAgJ2lzRmluaXRlJyxcbiAgICAgICAgICAnaXNOYU4nLFxuICAgICAgICAgICdwYXJzZUZsb2F0JyxcbiAgICAgICAgICAncGFyc2VJbnQnLFxuICAgICAgICAgICdkZWNvZGVVUkknLFxuICAgICAgICAgICdkZWNvZGVVUklDb21wb25lbnQnLFxuICAgICAgICAgICdlbmNvZGVVUkknLFxuICAgICAgICAgICdlbmNvZGVVUklDb21wb25lbnQnLFxuICAgICAgICAgICdlc2NhcGUnLFxuICAgICAgICAgICd1bmVzY2FwZScsXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAnYXJndW1lbnRzJyxcbiAgICAgICAgICAndGhpcycsXG4gICAgICAgICAgJ3N1cGVyJyxcbiAgICAgICAgICAnY29uc29sZScsXG4gICAgICAgICAgJ3dpbmRvdycsXG4gICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAnbG9jYWxTdG9yYWdlJyxcbiAgICAgICAgICAnbW9kdWxlJyxcbiAgICAgICAgICAnZ2xvYmFsJyxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICdJbnRsJyxcbiAgICAgICAgICAnRGF0YVZpZXcnLFxuICAgICAgICAgICdOdW1iZXInLFxuICAgICAgICAgICdNYXRoJyxcbiAgICAgICAgICAnRGF0ZScsXG4gICAgICAgICAgJ1N0cmluZycsXG4gICAgICAgICAgJ1JlZ0V4cCcsXG4gICAgICAgICAgJ09iamVjdCcsXG4gICAgICAgICAgJ0Z1bmN0aW9uJyxcbiAgICAgICAgICAnQm9vbGVhbicsXG4gICAgICAgICAgJ0Vycm9yJyxcbiAgICAgICAgICAnU3ltYm9sJyxcbiAgICAgICAgICAnU2V0JyxcbiAgICAgICAgICAnTWFwJyxcbiAgICAgICAgICAnV2Vha1NldCcsXG4gICAgICAgICAgJ1dlYWtNYXAnLFxuICAgICAgICAgICdQcm94eScsXG4gICAgICAgICAgJ1JlZmxlY3QnLFxuICAgICAgICAgICdKU09OJyxcbiAgICAgICAgICAnUHJvbWlzZScsXG4gICAgICAgICAgJ0Zsb2F0NjRBcnJheScsXG4gICAgICAgICAgJ0ludDE2QXJyYXknLFxuICAgICAgICAgICdJbnQzMkFycmF5JyxcbiAgICAgICAgICAnSW50OEFycmF5JyxcbiAgICAgICAgICAnVWludDE2QXJyYXknLFxuICAgICAgICAgICdVaW50MzJBcnJheScsXG4gICAgICAgICAgJ0Zsb2F0MzJBcnJheScsXG4gICAgICAgICAgJ0FycmF5JyxcbiAgICAgICAgICAnVWludDhBcnJheScsXG4gICAgICAgICAgJ1VpbnQ4Q2xhbXBlZEFycmF5JyxcbiAgICAgICAgICAnQXJyYXlCdWZmZXInLFxuICAgICAgICAgICdCaWdJbnQ2NEFycmF5JyxcbiAgICAgICAgICAnQmlnVWludDY0QXJyYXknLFxuICAgICAgICAgICdCaWdJbnQnLFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgJ0V2YWxFcnJvcicsXG4gICAgICAgICAgJ0ludGVybmFsRXJyb3InLFxuICAgICAgICAgICdSYW5nZUVycm9yJyxcbiAgICAgICAgICAnUmVmZXJlbmNlRXJyb3InLFxuICAgICAgICAgICdTeW50YXhFcnJvcicsXG4gICAgICAgICAgJ1R5cGVFcnJvcicsXG4gICAgICAgICAgJ1VSSUVycm9yJyxcbiAgICAgICAgXVxuICAgICAgKVxuICAgIHJldHVybiByID0+IHtcbiAgICAgIGNvbnN0IHQgPSB7XG4gICAgICAgIGtleXdvcmQ6IGVcbiAgICAgICAgICAuY29uY2F0KFtcbiAgICAgICAgICAgICd0aGVuJyxcbiAgICAgICAgICAgICd1bmxlc3MnLFxuICAgICAgICAgICAgJ3VudGlsJyxcbiAgICAgICAgICAgICdsb29wJyxcbiAgICAgICAgICAgICdieScsXG4gICAgICAgICAgICAnd2hlbicsXG4gICAgICAgICAgICAnYW5kJyxcbiAgICAgICAgICAgICdvcicsXG4gICAgICAgICAgICAnaXMnLFxuICAgICAgICAgICAgJ2lzbnQnLFxuICAgICAgICAgICAgJ25vdCcsXG4gICAgICAgICAgXSlcbiAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgKChpID0gWyd2YXInLCAnY29uc3QnLCAnbGV0JywgJ2Z1bmN0aW9uJywgJ3N0YXRpYyddKSxcbiAgICAgICAgICAgIGUgPT4gIWkuaW5jbHVkZXMoZSkpXG4gICAgICAgICAgKSxcbiAgICAgICAgbGl0ZXJhbDogbi5jb25jYXQoWyd5ZXMnLCAnbm8nLCAnb24nLCAnb2ZmJ10pLFxuICAgICAgICBidWlsdF9pbjogYS5jb25jYXQoWyducG0nLCAncHJpbnQnXSksXG4gICAgICB9XG4gICAgICB2YXIgaVxuICAgICAgY29uc3QgcyA9ICdbQS1aYS16JF9dWzAtOUEtWmEteiRfXSonLFxuICAgICAgICBvID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICAgICAgICBiZWdpbjogLyNcXHsvLFxuICAgICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgICAga2V5d29yZHM6IHQsXG4gICAgICAgIH0sXG4gICAgICAgIGMgPSBbXG4gICAgICAgICAgci5CSU5BUllfTlVNQkVSX01PREUsXG4gICAgICAgICAgci5pbmhlcml0KHIuQ19OVU1CRVJfTU9ERSwge1xuICAgICAgICAgICAgc3RhcnRzOiB7IGVuZDogJyhcXFxccyovKT8nLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgeyBiZWdpbjogLycnJy8sIGVuZDogLycnJy8sIGNvbnRhaW5zOiBbci5CQUNLU0xBU0hfRVNDQVBFXSB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAvJy8sIGVuZDogLycvLCBjb250YWluczogW3IuQkFDS1NMQVNIX0VTQ0FQRV0gfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogL1wiXCJcIi8sIGVuZDogL1wiXCJcIi8sIGNvbnRhaW5zOiBbci5CQUNLU0xBU0hfRVNDQVBFLCBvXSB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi8sIGNvbnRhaW5zOiBbci5CQUNLU0xBU0hfRVNDQVBFLCBvXSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3JlZ2V4cCcsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7IGJlZ2luOiAnLy8vJywgZW5kOiAnLy8vJywgY29udGFpbnM6IFtvLCByLkhBU0hfQ09NTUVOVF9NT0RFXSB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAnLy9bZ2ltXXswLDN9KD89XFxcXFcpJywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46IC9cXC8oPyFbICpdKS4qPyg/IVtcXFxcXSkuXFwvW2dpbV17MCwzfSg/PVxcVykvIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBiZWdpbjogJ0AnICsgcyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiAnamF2YXNjcmlwdCcsXG4gICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdgYGAnLFxuICAgICAgICAgICAgICAgIGVuZDogJ2BgYCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46ICdgJywgZW5kOiAnYCcgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgby5jb250YWlucyA9IGNcbiAgICAgIGNvbnN0IGwgPSByLmluaGVyaXQoci5USVRMRV9NT0RFLCB7IGJlZ2luOiBzIH0pLFxuICAgICAgICBkID0gJyhcXFxcKC4qXFxcXClcXFxccyopP1xcXFxCWy09XT4nLFxuICAgICAgICBnID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgYmVnaW46ICdcXFxcKFteXFxcXChdJyxcbiAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICBrZXl3b3JkczogdCxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZiddLmNvbmNhdChjKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0NvZmZlZVNjcmlwdCcsXG4gICAgICAgIGFsaWFzZXM6IFsnY29mZmVlJywgJ2Nzb24nLCAnaWNlZCddLFxuICAgICAgICBrZXl3b3JkczogdCxcbiAgICAgICAgaWxsZWdhbDogL1xcL1xcKi8sXG4gICAgICAgIGNvbnRhaW5zOiBjLmNvbmNhdChbXG4gICAgICAgICAgci5DT01NRU5UKCcjIyMnLCAnIyMjJyksXG4gICAgICAgICAgci5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbjogJ15cXFxccyonICsgcyArICdcXFxccyo9XFxcXHMqJyArIGQsXG4gICAgICAgICAgICBlbmQ6ICdbLT1dPicsXG4gICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICBjb250YWluczogW2wsIGddLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9bOlxcKCw9XVxccyovLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogZCxcbiAgICAgICAgICAgICAgICBlbmQ6ICdbLT1dPicsXG4gICAgICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbZ10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzJyxcbiAgICAgICAgICAgIGVuZDogJyQnLFxuICAgICAgICAgICAgaWxsZWdhbDogL1s6PVwiXFxbXFxdXS8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMnLFxuICAgICAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiAhMCxcbiAgICAgICAgICAgICAgICBpbGxlZ2FsOiAvWzo9XCJcXFtcXF1dLyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW2xdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBzICsgJzonLFxuICAgICAgICAgICAgZW5kOiAnOicsXG4gICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICByZXR1cm5FbmQ6ICEwLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnY3BwJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBmdW5jdGlvbiBlKGUpIHtcbiAgICAgIHJldHVybiB0KCcoJywgZSwgJyk/JylcbiAgICB9XG4gICAgZnVuY3Rpb24gdCguLi5lKSB7XG4gICAgICByZXR1cm4gZVxuICAgICAgICAubWFwKGUgPT4ge1xuICAgICAgICAgIHJldHVybiAodCA9IGUpID8gKCdzdHJpbmcnID09IHR5cGVvZiB0ID8gdCA6IHQuc291cmNlKSA6IG51bGxcbiAgICAgICAgICB2YXIgdFxuICAgICAgICB9KVxuICAgICAgICAuam9pbignJylcbiAgICB9XG4gICAgcmV0dXJuIG4gPT4ge1xuICAgICAgY29uc3QgciA9IG4uQ09NTUVOVCgnLy8nLCAnJCcsIHsgY29udGFpbnM6IFt7IGJlZ2luOiAvXFxcXFxcbi8gfV0gfSksXG4gICAgICAgIGEgPSAnW2EtekEtWl9dXFxcXHcqOjonLFxuICAgICAgICBpID1cbiAgICAgICAgICAnKGRlY2x0eXBlXFxcXChhdXRvXFxcXCl8JyArIGUoYSkgKyAnW2EtekEtWl9dXFxcXHcqJyArIGUoJzxbXjw+XSs+JykgKyAnKScsXG4gICAgICAgIHMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgYmVnaW46ICdcXFxcYlthLXpcXFxcZF9dKl90XFxcXGInLFxuICAgICAgICB9LFxuICAgICAgICBjID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICcodTg/fFV8TCk/XCInLFxuICAgICAgICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbbi5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAgIFwiKHU4P3xVfEwpPycoXFxcXFxcXFwoeFswLTlBLUZhLWZdezJ9fHVbMC05QS1GYS1mXXs0LDh9fFswLTddezN9fFxcXFxTKXwuKVwiLFxuICAgICAgICAgICAgICBlbmQ6IFwiJ1wiLFxuICAgICAgICAgICAgICBpbGxlZ2FsOiAnLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbi5FTkRfU0FNRV9BU19CRUdJTih7XG4gICAgICAgICAgICAgIGJlZ2luOiAvKD86dTg/fFV8TCk/UlwiKFteKClcXFxcIF17MCwxNn0pXFwoLyxcbiAgICAgICAgICAgICAgZW5kOiAvXFwpKFteKClcXFxcIF17MCwxNn0pXCIvLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiBcIlxcXFxiKDBiWzAxJ10rKVwiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAgIFwiKC0/KVxcXFxiKFtcXFxcZCddKyhcXFxcLltcXFxcZCddKik/fFxcXFwuW1xcXFxkJ10rKSgobGx8TEx8bHxMKSh1fFUpP3wodXxVKShsbHxMTHxsfEwpP3xmfEZ8YnxCKVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICAgXCIoLT8pKFxcXFxiMFt4WF1bYS1mQS1GMC05J10rfChcXFxcYltcXFxcZCddKyhcXFxcLltcXFxcZCddKik/fFxcXFwuW1xcXFxkJ10rKShbZUVdWy0rXT9bXFxcXGQnXSspPylcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGwgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgYmVnaW46IC8jXFxzKlthLXpdK1xcYi8sXG4gICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgICdtZXRhLWtleXdvcmQnOlxuICAgICAgICAgICAgICAnaWYgZWxzZSBlbGlmIGVuZGlmIGRlZmluZSB1bmRlZiB3YXJuaW5nIGVycm9yIGxpbmUgcHJhZ21hIF9QcmFnbWEgaWZkZWYgaWZuZGVmIGluY2x1ZGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXFxcXFxuLywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICBuLmluaGVyaXQoYywgeyBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycgfSksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJyxcbiAgICAgICAgICAgICAgYmVnaW46IC88Lio/Pi8sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcixcbiAgICAgICAgICAgIG4uQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZCA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgYmVnaW46IGUoYSkgKyBuLklERU5UX1JFLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgdSA9IGUoYSkgKyBuLklERU5UX1JFICsgJ1xcXFxzKlxcXFwoJyxcbiAgICAgICAgbSA9IHtcbiAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2ludCBmbG9hdCB3aGlsZSBwcml2YXRlIGNoYXIgY2hhcjhfdCBjaGFyMTZfdCBjaGFyMzJfdCBjYXRjaCBpbXBvcnQgbW9kdWxlIGV4cG9ydCB2aXJ0dWFsIG9wZXJhdG9yIHNpemVvZiBkeW5hbWljX2Nhc3R8MTAgdHlwZWRlZiBjb25zdF9jYXN0fDEwIGNvbnN0IGZvciBzdGF0aWNfY2FzdHwxMCB1bmlvbiBuYW1lc3BhY2UgdW5zaWduZWQgbG9uZyB2b2xhdGlsZSBzdGF0aWMgcHJvdGVjdGVkIGJvb2wgdGVtcGxhdGUgbXV0YWJsZSBpZiBwdWJsaWMgZnJpZW5kIGRvIGdvdG8gYXV0byB2b2lkIGVudW0gZWxzZSBicmVhayBleHRlcm4gdXNpbmcgYXNtIGNhc2UgdHlwZWlkIHdjaGFyX3Qgc2hvcnQgcmVpbnRlcnByZXRfY2FzdHwxMCBkZWZhdWx0IGRvdWJsZSByZWdpc3RlciBleHBsaWNpdCBzaWduZWQgdHlwZW5hbWUgdHJ5IHRoaXMgc3dpdGNoIGNvbnRpbnVlIGlubGluZSBkZWxldGUgYWxpZ25hcyBhbGlnbm9mIGNvbnN0ZXhwciBjb25zdGV2YWwgY29uc3Rpbml0IGRlY2x0eXBlIGNvbmNlcHQgY29fYXdhaXQgY29fcmV0dXJuIGNvX3lpZWxkIHJlcXVpcmVzIG5vZXhjZXB0IHN0YXRpY19hc3NlcnQgdGhyZWFkX2xvY2FsIHJlc3RyaWN0IGZpbmFsIG92ZXJyaWRlIGF0b21pY19ib29sIGF0b21pY19jaGFyIGF0b21pY19zY2hhciBhdG9taWNfdWNoYXIgYXRvbWljX3Nob3J0IGF0b21pY191c2hvcnQgYXRvbWljX2ludCBhdG9taWNfdWludCBhdG9taWNfbG9uZyBhdG9taWNfdWxvbmcgYXRvbWljX2xsb25nIGF0b21pY191bGxvbmcgbmV3IHRocm93IHJldHVybiBhbmQgYW5kX2VxIGJpdGFuZCBiaXRvciBjb21wbCBub3Qgbm90X2VxIG9yIG9yX2VxIHhvciB4b3JfZXEnLFxuICAgICAgICAgIGJ1aWx0X2luOiAnX0Jvb2wgX0NvbXBsZXggX0ltYWdpbmFyeScsXG4gICAgICAgICAgX3JlbGV2YW5jZV9oaW50czogW1xuICAgICAgICAgICAgJ2FzaW4nLFxuICAgICAgICAgICAgJ2F0YW4yJyxcbiAgICAgICAgICAgICdhdGFuJyxcbiAgICAgICAgICAgICdjYWxsb2MnLFxuICAgICAgICAgICAgJ2NlaWwnLFxuICAgICAgICAgICAgJ2Nvc2gnLFxuICAgICAgICAgICAgJ2NvcycsXG4gICAgICAgICAgICAnZXhpdCcsXG4gICAgICAgICAgICAnZXhwJyxcbiAgICAgICAgICAgICdmYWJzJyxcbiAgICAgICAgICAgICdmbG9vcicsXG4gICAgICAgICAgICAnZm1vZCcsXG4gICAgICAgICAgICAnZnByaW50ZicsXG4gICAgICAgICAgICAnZnB1dHMnLFxuICAgICAgICAgICAgJ2ZyZWUnLFxuICAgICAgICAgICAgJ2ZyZXhwJyxcbiAgICAgICAgICAgICdhdXRvX3B0cicsXG4gICAgICAgICAgICAnZGVxdWUnLFxuICAgICAgICAgICAgJ2xpc3QnLFxuICAgICAgICAgICAgJ3F1ZXVlJyxcbiAgICAgICAgICAgICdzdGFjaycsXG4gICAgICAgICAgICAndmVjdG9yJyxcbiAgICAgICAgICAgICdtYXAnLFxuICAgICAgICAgICAgJ3NldCcsXG4gICAgICAgICAgICAncGFpcicsXG4gICAgICAgICAgICAnYml0c2V0JyxcbiAgICAgICAgICAgICdtdWx0aXNldCcsXG4gICAgICAgICAgICAnbXVsdGltYXAnLFxuICAgICAgICAgICAgJ3Vub3JkZXJlZF9zZXQnLFxuICAgICAgICAgICAgJ2ZzY2FuZicsXG4gICAgICAgICAgICAnZnV0dXJlJyxcbiAgICAgICAgICAgICdpc2FsbnVtJyxcbiAgICAgICAgICAgICdpc2FscGhhJyxcbiAgICAgICAgICAgICdpc2NudHJsJyxcbiAgICAgICAgICAgICdpc2RpZ2l0JyxcbiAgICAgICAgICAgICdpc2dyYXBoJyxcbiAgICAgICAgICAgICdpc2xvd2VyJyxcbiAgICAgICAgICAgICdpc3ByaW50JyxcbiAgICAgICAgICAgICdpc3B1bmN0JyxcbiAgICAgICAgICAgICdpc3NwYWNlJyxcbiAgICAgICAgICAgICdpc3VwcGVyJyxcbiAgICAgICAgICAgICdpc3hkaWdpdCcsXG4gICAgICAgICAgICAndG9sb3dlcicsXG4gICAgICAgICAgICAndG91cHBlcicsXG4gICAgICAgICAgICAnbGFicycsXG4gICAgICAgICAgICAnbGRleHAnLFxuICAgICAgICAgICAgJ2xvZzEwJyxcbiAgICAgICAgICAgICdsb2cnLFxuICAgICAgICAgICAgJ21hbGxvYycsXG4gICAgICAgICAgICAncmVhbGxvYycsXG4gICAgICAgICAgICAnbWVtY2hyJyxcbiAgICAgICAgICAgICdtZW1jbXAnLFxuICAgICAgICAgICAgJ21lbWNweScsXG4gICAgICAgICAgICAnbWVtc2V0JyxcbiAgICAgICAgICAgICdtb2RmJyxcbiAgICAgICAgICAgICdwb3cnLFxuICAgICAgICAgICAgJ3ByaW50ZicsXG4gICAgICAgICAgICAncHV0Y2hhcicsXG4gICAgICAgICAgICAncHV0cycsXG4gICAgICAgICAgICAnc2NhbmYnLFxuICAgICAgICAgICAgJ3NpbmgnLFxuICAgICAgICAgICAgJ3NpbicsXG4gICAgICAgICAgICAnc25wcmludGYnLFxuICAgICAgICAgICAgJ3NwcmludGYnLFxuICAgICAgICAgICAgJ3NxcnQnLFxuICAgICAgICAgICAgJ3NzY2FuZicsXG4gICAgICAgICAgICAnc3RyY2F0JyxcbiAgICAgICAgICAgICdzdHJjaHInLFxuICAgICAgICAgICAgJ3N0cmNtcCcsXG4gICAgICAgICAgICAnc3RyY3B5JyxcbiAgICAgICAgICAgICdzdHJjc3BuJyxcbiAgICAgICAgICAgICdzdHJsZW4nLFxuICAgICAgICAgICAgJ3N0cm5jYXQnLFxuICAgICAgICAgICAgJ3N0cm5jbXAnLFxuICAgICAgICAgICAgJ3N0cm5jcHknLFxuICAgICAgICAgICAgJ3N0cnBicmsnLFxuICAgICAgICAgICAgJ3N0cnJjaHInLFxuICAgICAgICAgICAgJ3N0cnNwbicsXG4gICAgICAgICAgICAnc3Ryc3RyJyxcbiAgICAgICAgICAgICd0YW5oJyxcbiAgICAgICAgICAgICd0YW4nLFxuICAgICAgICAgICAgJ3Vub3JkZXJlZF9tYXAnLFxuICAgICAgICAgICAgJ3Vub3JkZXJlZF9tdWx0aXNldCcsXG4gICAgICAgICAgICAndW5vcmRlcmVkX211bHRpbWFwJyxcbiAgICAgICAgICAgICdwcmlvcml0eV9xdWV1ZScsXG4gICAgICAgICAgICAnbWFrZV9wYWlyJyxcbiAgICAgICAgICAgICdhcnJheScsXG4gICAgICAgICAgICAnc2hhcmVkX3B0cicsXG4gICAgICAgICAgICAnYWJvcnQnLFxuICAgICAgICAgICAgJ3Rlcm1pbmF0ZScsXG4gICAgICAgICAgICAnYWJzJyxcbiAgICAgICAgICAgICdhY29zJyxcbiAgICAgICAgICAgICd2ZnByaW50ZicsXG4gICAgICAgICAgICAndnByaW50ZicsXG4gICAgICAgICAgICAndnNwcmludGYnLFxuICAgICAgICAgICAgJ2VuZGwnLFxuICAgICAgICAgICAgJ2luaXRpYWxpemVyX2xpc3QnLFxuICAgICAgICAgICAgJ3VuaXF1ZV9wdHInLFxuICAgICAgICAgICAgJ2NvbXBsZXgnLFxuICAgICAgICAgICAgJ2ltYWdpbmFyeScsXG4gICAgICAgICAgICAnc3RkJyxcbiAgICAgICAgICAgICdzdHJpbmcnLFxuICAgICAgICAgICAgJ3dzdHJpbmcnLFxuICAgICAgICAgICAgJ2NpbicsXG4gICAgICAgICAgICAnY291dCcsXG4gICAgICAgICAgICAnY2VycicsXG4gICAgICAgICAgICAnY2xvZycsXG4gICAgICAgICAgICAnc3RkaW4nLFxuICAgICAgICAgICAgJ3N0ZG91dCcsXG4gICAgICAgICAgICAnc3RkZXJyJyxcbiAgICAgICAgICAgICdzdHJpbmdzdHJlYW0nLFxuICAgICAgICAgICAgJ2lzdHJpbmdzdHJlYW0nLFxuICAgICAgICAgICAgJ29zdHJpbmdzdHJlYW0nLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UgbnVsbHB0ciBOVUxMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcCA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbi5kaXNwYXRjaCcsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGtleXdvcmRzOiBtLFxuICAgICAgICAgIGJlZ2luOiB0KFxuICAgICAgICAgICAgL1xcYi8sXG4gICAgICAgICAgICAvKD8hZGVjbHR5cGUpLyxcbiAgICAgICAgICAgIC8oPyFpZikvLFxuICAgICAgICAgICAgLyg/IWZvcikvLFxuICAgICAgICAgICAgLyg/IXdoaWxlKS8sXG4gICAgICAgICAgICBuLklERU5UX1JFLFxuICAgICAgICAgICAgKChfID0gL1xccypcXCgvKSwgdCgnKD89JywgXywgJyknKSlcbiAgICAgICAgICApLFxuICAgICAgICB9XG4gICAgICB2YXIgX1xuICAgICAgY29uc3QgZyA9IFtwLCBsLCBzLCByLCBuLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLCBvLCBjXSxcbiAgICAgICAgYiA9IHtcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBiZWdpbjogLz0vLCBlbmQ6IC87LyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL1xcKC8sIGVuZDogL1xcKS8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ25ldyB0aHJvdyByZXR1cm4gZWxzZScsXG4gICAgICAgICAgICAgIGVuZDogLzsvLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGtleXdvcmRzOiBtLFxuICAgICAgICAgIGNvbnRhaW5zOiBnLmNvbmNhdChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAga2V5d29yZHM6IG0sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBnLmNvbmNhdChbJ3NlbGYnXSksXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSksXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9LFxuICAgICAgICBmID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICBiZWdpbjogJygnICsgaSArICdbXFxcXComXFxcXHNdKykrJyArIHUsXG4gICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgIGVuZDogL1t7Oz1dLyxcbiAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICBrZXl3b3JkczogbSxcbiAgICAgICAgICBpbGxlZ2FsOiAvW15cXHdcXHNcXComOjw+Ll0vLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAnZGVjbHR5cGVcXFxcKGF1dG9cXFxcKScsIGtleXdvcmRzOiBtLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IHUsIHJldHVybkJlZ2luOiAhMCwgY29udGFpbnM6IFtkXSwgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvOjovLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC86LywgZW5kc1dpdGhQYXJlbnQ6ICEwLCBjb250YWluczogW2MsIG9dIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAga2V5d29yZHM6IG0sXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICByLFxuICAgICAgICAgICAgICAgIG4uQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgICAgYyxcbiAgICAgICAgICAgICAgICBvLFxuICAgICAgICAgICAgICAgIHMsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAgICAgIGtleXdvcmRzOiBtLFxuICAgICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZicsIHIsIG4uQ19CTE9DS19DT01NRU5UX01PREUsIGMsIG8sIHNdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcyxcbiAgICAgICAgICAgIHIsXG4gICAgICAgICAgICBuLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICBdLFxuICAgICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnQysrJyxcbiAgICAgICAgYWxpYXNlczogWydjYycsICdjKysnLCAnaCsrJywgJ2hwcCcsICdoaCcsICdoeHgnLCAnY3h4J10sXG4gICAgICAgIGtleXdvcmRzOiBtLFxuICAgICAgICBpbGxlZ2FsOiAnPC8nLFxuICAgICAgICBjbGFzc05hbWVBbGlhc2VzOiB7ICdmdW5jdGlvbi5kaXNwYXRjaCc6ICdidWlsdF9pbicgfSxcbiAgICAgICAgY29udGFpbnM6IFtdLmNvbmNhdChiLCBmLCBwLCBnLCBbXG4gICAgICAgICAgbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgJ1xcXFxiKGRlcXVlfGxpc3R8cXVldWV8cHJpb3JpdHlfcXVldWV8cGFpcnxzdGFja3x2ZWN0b3J8bWFwfHNldHxiaXRzZXR8bXVsdGlzZXR8bXVsdGltYXB8dW5vcmRlcmVkX21hcHx1bm9yZGVyZWRfc2V0fHVub3JkZXJlZF9tdWx0aXNldHx1bm9yZGVyZWRfbXVsdGltYXB8YXJyYXkpXFxcXHMqPCcsXG4gICAgICAgICAgICBlbmQ6ICc+JyxcbiAgICAgICAgICAgIGtleXdvcmRzOiBtLFxuICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZicsIHNdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBiZWdpbjogbi5JREVOVF9SRSArICc6OicsIGtleXdvcmRzOiBtIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2VudW0gY2xhc3Mgc3RydWN0IHVuaW9uJyxcbiAgICAgICAgICAgIGVuZDogL1t7Ozo8Pj1dLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbeyBiZWdpbktleXdvcmRzOiAnZmluYWwgY2xhc3Mgc3RydWN0JyB9LCBuLlRJVExFX01PREVdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pLFxuICAgICAgICBleHBvcnRzOiB7XG4gICAgICAgICAgcHJlcHJvY2Vzc29yOiBsLFxuICAgICAgICAgIHN0cmluZ3M6IGMsXG4gICAgICAgICAga2V5d29yZHM6IG0sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdjc2hhcnAnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIHJldHVybiBlID0+IHtcbiAgICAgIGNvbnN0IG4gPSB7XG4gICAgICAgICAga2V5d29yZDogW1xuICAgICAgICAgICAgJ2Fic3RyYWN0JyxcbiAgICAgICAgICAgICdhcycsXG4gICAgICAgICAgICAnYmFzZScsXG4gICAgICAgICAgICAnYnJlYWsnLFxuICAgICAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAgICdjb25zdCcsXG4gICAgICAgICAgICAnY29udGludWUnLFxuICAgICAgICAgICAgJ2RvJyxcbiAgICAgICAgICAgICdlbHNlJyxcbiAgICAgICAgICAgICdldmVudCcsXG4gICAgICAgICAgICAnZXhwbGljaXQnLFxuICAgICAgICAgICAgJ2V4dGVybicsXG4gICAgICAgICAgICAnZmluYWxseScsXG4gICAgICAgICAgICAnZml4ZWQnLFxuICAgICAgICAgICAgJ2ZvcicsXG4gICAgICAgICAgICAnZm9yZWFjaCcsXG4gICAgICAgICAgICAnZ290bycsXG4gICAgICAgICAgICAnaWYnLFxuICAgICAgICAgICAgJ2ltcGxpY2l0JyxcbiAgICAgICAgICAgICdpbicsXG4gICAgICAgICAgICAnaW50ZXJmYWNlJyxcbiAgICAgICAgICAgICdpbnRlcm5hbCcsXG4gICAgICAgICAgICAnaXMnLFxuICAgICAgICAgICAgJ2xvY2snLFxuICAgICAgICAgICAgJ25hbWVzcGFjZScsXG4gICAgICAgICAgICAnbmV3JyxcbiAgICAgICAgICAgICdvcGVyYXRvcicsXG4gICAgICAgICAgICAnb3V0JyxcbiAgICAgICAgICAgICdvdmVycmlkZScsXG4gICAgICAgICAgICAncGFyYW1zJyxcbiAgICAgICAgICAgICdwcml2YXRlJyxcbiAgICAgICAgICAgICdwcm90ZWN0ZWQnLFxuICAgICAgICAgICAgJ3B1YmxpYycsXG4gICAgICAgICAgICAncmVhZG9ubHknLFxuICAgICAgICAgICAgJ3JlY29yZCcsXG4gICAgICAgICAgICAncmVmJyxcbiAgICAgICAgICAgICdyZXR1cm4nLFxuICAgICAgICAgICAgJ3NlYWxlZCcsXG4gICAgICAgICAgICAnc2l6ZW9mJyxcbiAgICAgICAgICAgICdzdGFja2FsbG9jJyxcbiAgICAgICAgICAgICdzdGF0aWMnLFxuICAgICAgICAgICAgJ3N0cnVjdCcsXG4gICAgICAgICAgICAnc3dpdGNoJyxcbiAgICAgICAgICAgICd0aGlzJyxcbiAgICAgICAgICAgICd0aHJvdycsXG4gICAgICAgICAgICAndHJ5JyxcbiAgICAgICAgICAgICd0eXBlb2YnLFxuICAgICAgICAgICAgJ3VuY2hlY2tlZCcsXG4gICAgICAgICAgICAndW5zYWZlJyxcbiAgICAgICAgICAgICd1c2luZycsXG4gICAgICAgICAgICAndmlydHVhbCcsXG4gICAgICAgICAgICAndm9pZCcsXG4gICAgICAgICAgICAndm9sYXRpbGUnLFxuICAgICAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgICBdLmNvbmNhdChbXG4gICAgICAgICAgICAnYWRkJyxcbiAgICAgICAgICAgICdhbGlhcycsXG4gICAgICAgICAgICAnYW5kJyxcbiAgICAgICAgICAgICdhc2NlbmRpbmcnLFxuICAgICAgICAgICAgJ2FzeW5jJyxcbiAgICAgICAgICAgICdhd2FpdCcsXG4gICAgICAgICAgICAnYnknLFxuICAgICAgICAgICAgJ2Rlc2NlbmRpbmcnLFxuICAgICAgICAgICAgJ2VxdWFscycsXG4gICAgICAgICAgICAnZnJvbScsXG4gICAgICAgICAgICAnZ2V0JyxcbiAgICAgICAgICAgICdnbG9iYWwnLFxuICAgICAgICAgICAgJ2dyb3VwJyxcbiAgICAgICAgICAgICdpbml0JyxcbiAgICAgICAgICAgICdpbnRvJyxcbiAgICAgICAgICAgICdqb2luJyxcbiAgICAgICAgICAgICdsZXQnLFxuICAgICAgICAgICAgJ25hbWVvZicsXG4gICAgICAgICAgICAnbm90JyxcbiAgICAgICAgICAgICdub3RudWxsJyxcbiAgICAgICAgICAgICdvbicsXG4gICAgICAgICAgICAnb3InLFxuICAgICAgICAgICAgJ29yZGVyYnknLFxuICAgICAgICAgICAgJ3BhcnRpYWwnLFxuICAgICAgICAgICAgJ3JlbW92ZScsXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgICdzZXQnLFxuICAgICAgICAgICAgJ3VubWFuYWdlZCcsXG4gICAgICAgICAgICAndmFsdWV8MCcsXG4gICAgICAgICAgICAndmFyJyxcbiAgICAgICAgICAgICd3aGVuJyxcbiAgICAgICAgICAgICd3aGVyZScsXG4gICAgICAgICAgICAnd2l0aCcsXG4gICAgICAgICAgICAneWllbGQnLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGJ1aWx0X2luOiBbXG4gICAgICAgICAgICAnYm9vbCcsXG4gICAgICAgICAgICAnYnl0ZScsXG4gICAgICAgICAgICAnY2hhcicsXG4gICAgICAgICAgICAnZGVjaW1hbCcsXG4gICAgICAgICAgICAnZGVsZWdhdGUnLFxuICAgICAgICAgICAgJ2RvdWJsZScsXG4gICAgICAgICAgICAnZHluYW1pYycsXG4gICAgICAgICAgICAnZW51bScsXG4gICAgICAgICAgICAnZmxvYXQnLFxuICAgICAgICAgICAgJ2ludCcsXG4gICAgICAgICAgICAnbG9uZycsXG4gICAgICAgICAgICAnbmludCcsXG4gICAgICAgICAgICAnbnVpbnQnLFxuICAgICAgICAgICAgJ29iamVjdCcsXG4gICAgICAgICAgICAnc2J5dGUnLFxuICAgICAgICAgICAgJ3Nob3J0JyxcbiAgICAgICAgICAgICdzdHJpbmcnLFxuICAgICAgICAgICAgJ3Vsb25nJyxcbiAgICAgICAgICAgICd1aW50JyxcbiAgICAgICAgICAgICd1c2hvcnQnLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGl0ZXJhbDogWydkZWZhdWx0JywgJ2ZhbHNlJywgJ251bGwnLCAndHJ1ZSddLFxuICAgICAgICB9LFxuICAgICAgICBhID0gZS5pbmhlcml0KGUuVElUTEVfTU9ERSwge1xuICAgICAgICAgIGJlZ2luOiAnW2EtekEtWl0oXFxcXC4/XFxcXHcpKicsXG4gICAgICAgIH0pLFxuICAgICAgICBpID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IFwiXFxcXGIoMGJbMDEnXSspXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgICBcIigtPylcXFxcYihbXFxcXGQnXSsoXFxcXC5bXFxcXGQnXSopP3xcXFxcLltcXFxcZCddKykodXxVfGx8THx1bHxVTHxmfEZ8YnxCKVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICAgXCIoLT8pKFxcXFxiMFt4WF1bYS1mQS1GMC05J10rfChcXFxcYltcXFxcZCddKyhcXFxcLltcXFxcZCddKik/fFxcXFwuW1xcXFxkJ10rKShbZUVdWy0rXT9bXFxcXGQnXSspPylcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICBiZWdpbjogJ0BcIicsXG4gICAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICAgIGNvbnRhaW5zOiBbeyBiZWdpbjogJ1wiXCInIH1dLFxuICAgICAgICB9LFxuICAgICAgICB0ID0gZS5pbmhlcml0KHMsIHsgaWxsZWdhbDogL1xcbi8gfSksXG4gICAgICAgIHIgPSB7IGNsYXNzTmFtZTogJ3N1YnN0JywgYmVnaW46IC9cXHsvLCBlbmQ6IC9cXH0vLCBrZXl3b3JkczogbiB9LFxuICAgICAgICBsID0gZS5pbmhlcml0KHIsIHsgaWxsZWdhbDogL1xcbi8gfSksXG4gICAgICAgIGMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICBiZWdpbjogL1xcJFwiLyxcbiAgICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgICAgaWxsZWdhbDogL1xcbi8sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXHtcXHsvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFx9XFx9LyB9LFxuICAgICAgICAgICAgZS5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBvID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgYmVnaW46IC9cXCRAXCIvLFxuICAgICAgICAgIGVuZDogJ1wiJyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL1xce1xcey8sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL1xcfVxcfS8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46ICdcIlwiJyB9LFxuICAgICAgICAgICAgcixcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBkID0gZS5pbmhlcml0KG8sIHtcbiAgICAgICAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICAgICAgICBjb250YWluczogW3sgYmVnaW46IC9cXHtcXHsvIH0sIHsgYmVnaW46IC9cXH1cXH0vIH0sIHsgYmVnaW46ICdcIlwiJyB9LCBsXSxcbiAgICAgICAgfSlcbiAgICAgIDsoci5jb250YWlucyA9IFtcbiAgICAgICAgbyxcbiAgICAgICAgYyxcbiAgICAgICAgcyxcbiAgICAgICAgZS5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICBlLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICBpLFxuICAgICAgICBlLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgXSksXG4gICAgICAgIChsLmNvbnRhaW5zID0gW1xuICAgICAgICAgIGQsXG4gICAgICAgICAgYyxcbiAgICAgICAgICB0LFxuICAgICAgICAgIGUuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICBlLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgIGksXG4gICAgICAgICAgZS5pbmhlcml0KGUuQ19CTE9DS19DT01NRU5UX01PREUsIHtcbiAgICAgICAgICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdKVxuICAgICAgY29uc3QgZyA9IHtcbiAgICAgICAgICB2YXJpYW50czogW28sIGMsIHMsIGUuQVBPU19TVFJJTkdfTU9ERSwgZS5RVU9URV9TVFJJTkdfTU9ERV0sXG4gICAgICAgIH0sXG4gICAgICAgIEUgPSB7XG4gICAgICAgICAgYmVnaW46ICc8JyxcbiAgICAgICAgICBlbmQ6ICc+JyxcbiAgICAgICAgICBjb250YWluczogW3sgYmVnaW5LZXl3b3JkczogJ2luIG91dCcgfSwgYV0sXG4gICAgICAgIH0sXG4gICAgICAgIF8gPVxuICAgICAgICAgIGUuSURFTlRfUkUgK1xuICAgICAgICAgICcoPCcgK1xuICAgICAgICAgIGUuSURFTlRfUkUgK1xuICAgICAgICAgICcoXFxcXHMqLFxcXFxzKicgK1xuICAgICAgICAgIGUuSURFTlRfUkUgK1xuICAgICAgICAgICcpKj4pPyhcXFxcW1xcXFxdKT8nLFxuICAgICAgICBiID0ge1xuICAgICAgICAgIGJlZ2luOiAnQCcgKyBlLklERU5UX1JFLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0MjJyxcbiAgICAgICAgYWxpYXNlczogWydjcycsICdjIyddLFxuICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgaWxsZWdhbDogLzo6LyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBlLkNPTU1FTlQoJy8vLycsICckJywge1xuICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICAgIHsgYmVnaW46ICcvLy8nLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46ICdcXHgzYyEtLXwtLVxceDNlJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiAnPC8/JywgZW5kOiAnPicgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgZS5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgIGJlZ2luOiAnIycsXG4gICAgICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICAgICdtZXRhLWtleXdvcmQnOlxuICAgICAgICAgICAgICAgICdpZiBlbHNlIGVsaWYgZW5kaWYgZGVmaW5lIHVuZGVmIHdhcm5pbmcgZXJyb3IgbGluZSByZWdpb24gZW5kcmVnaW9uIHByYWdtYSBjaGVja3N1bScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZyxcbiAgICAgICAgICBpLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgZW5kOiAvW3s7PV0vLFxuICAgICAgICAgICAgaWxsZWdhbDogL1teXFxzOixdLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW5LZXl3b3JkczogJ3doZXJlIGNsYXNzJyB9LFxuICAgICAgICAgICAgICBhLFxuICAgICAgICAgICAgICBFLFxuICAgICAgICAgICAgICBlLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIGUuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ25hbWVzcGFjZScsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgICAgICBpbGxlZ2FsOiAvW15cXHM6XS8sXG4gICAgICAgICAgICBjb250YWluczogW2EsIGUuQ19MSU5FX0NPTU1FTlRfTU9ERSwgZS5DX0JMT0NLX0NPTU1FTlRfTU9ERV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAncmVjb3JkJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGVuZDogL1t7Oz1dLyxcbiAgICAgICAgICAgIGlsbGVnYWw6IC9bXlxcczpdLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbYSwgRSwgZS5DX0xJTkVfQ09NTUVOVF9NT0RFLCBlLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgYmVnaW46ICdeXFxcXHMqXFxcXFsnLFxuICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiAhMCxcbiAgICAgICAgICAgIGVuZDogJ1xcXFxdJyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ25ldyByZXR1cm4gdGhyb3cgYXdhaXQgZWxzZScsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbjogJygnICsgXyArICdcXFxccyspKycgKyBlLklERU5UX1JFICsgJ1xcXFxzKig8Lis+XFxcXHMqKT9cXFxcKCcsXG4gICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICBlbmQ6IC9cXHMqW3s7PV0vLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOlxuICAgICAgICAgICAgICAgICAgJ3B1YmxpYyBwcml2YXRlIHByb3RlY3RlZCBzdGF0aWMgaW50ZXJuYWwgcHJvdGVjdGVkIGFic3RyYWN0IGFzeW5jIGV4dGVybiBvdmVycmlkZSB1bnNhZmUgdmlydHVhbCBuZXcgc2VhbGVkIHBhcnRpYWwnLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiBlLklERU5UX1JFICsgJ1xcXFxzKig8Lis+XFxcXHMqKT9cXFxcKCcsXG4gICAgICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5USVRMRV9NT0RFLCBFXSxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogITAsXG4gICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICAgICAga2V5d29yZHM6IG4sXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbZywgaSwgZS5DX0JMT0NLX0NPTU1FTlRfTU9ERV0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGUuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAgZS5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBiLFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnY3NzJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBjb25zdCBlID0gW1xuICAgICAgICAnYScsXG4gICAgICAgICdhYmJyJyxcbiAgICAgICAgJ2FkZHJlc3MnLFxuICAgICAgICAnYXJ0aWNsZScsXG4gICAgICAgICdhc2lkZScsXG4gICAgICAgICdhdWRpbycsXG4gICAgICAgICdiJyxcbiAgICAgICAgJ2Jsb2NrcXVvdGUnLFxuICAgICAgICAnYm9keScsXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICAnY2FudmFzJyxcbiAgICAgICAgJ2NhcHRpb24nLFxuICAgICAgICAnY2l0ZScsXG4gICAgICAgICdjb2RlJyxcbiAgICAgICAgJ2RkJyxcbiAgICAgICAgJ2RlbCcsXG4gICAgICAgICdkZXRhaWxzJyxcbiAgICAgICAgJ2RmbicsXG4gICAgICAgICdkaXYnLFxuICAgICAgICAnZGwnLFxuICAgICAgICAnZHQnLFxuICAgICAgICAnZW0nLFxuICAgICAgICAnZmllbGRzZXQnLFxuICAgICAgICAnZmlnY2FwdGlvbicsXG4gICAgICAgICdmaWd1cmUnLFxuICAgICAgICAnZm9vdGVyJyxcbiAgICAgICAgJ2Zvcm0nLFxuICAgICAgICAnaDEnLFxuICAgICAgICAnaDInLFxuICAgICAgICAnaDMnLFxuICAgICAgICAnaDQnLFxuICAgICAgICAnaDUnLFxuICAgICAgICAnaDYnLFxuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ2hncm91cCcsXG4gICAgICAgICdodG1sJyxcbiAgICAgICAgJ2knLFxuICAgICAgICAnaWZyYW1lJyxcbiAgICAgICAgJ2ltZycsXG4gICAgICAgICdpbnB1dCcsXG4gICAgICAgICdpbnMnLFxuICAgICAgICAna2JkJyxcbiAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgJ2xlZ2VuZCcsXG4gICAgICAgICdsaScsXG4gICAgICAgICdtYWluJyxcbiAgICAgICAgJ21hcmsnLFxuICAgICAgICAnbWVudScsXG4gICAgICAgICduYXYnLFxuICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgJ29sJyxcbiAgICAgICAgJ3AnLFxuICAgICAgICAncScsXG4gICAgICAgICdxdW90ZScsXG4gICAgICAgICdzYW1wJyxcbiAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICAnc3BhbicsXG4gICAgICAgICdzdHJvbmcnLFxuICAgICAgICAnc3VtbWFyeScsXG4gICAgICAgICdzdXAnLFxuICAgICAgICAndGFibGUnLFxuICAgICAgICAndGJvZHknLFxuICAgICAgICAndGQnLFxuICAgICAgICAndGV4dGFyZWEnLFxuICAgICAgICAndGZvb3QnLFxuICAgICAgICAndGgnLFxuICAgICAgICAndGhlYWQnLFxuICAgICAgICAndGltZScsXG4gICAgICAgICd0cicsXG4gICAgICAgICd1bCcsXG4gICAgICAgICd2YXInLFxuICAgICAgICAndmlkZW8nLFxuICAgICAgXSxcbiAgICAgIHQgPSBbXG4gICAgICAgICdhbnktaG92ZXInLFxuICAgICAgICAnYW55LXBvaW50ZXInLFxuICAgICAgICAnYXNwZWN0LXJhdGlvJyxcbiAgICAgICAgJ2NvbG9yJyxcbiAgICAgICAgJ2NvbG9yLWdhbXV0JyxcbiAgICAgICAgJ2NvbG9yLWluZGV4JyxcbiAgICAgICAgJ2RldmljZS1hc3BlY3QtcmF0aW8nLFxuICAgICAgICAnZGV2aWNlLWhlaWdodCcsXG4gICAgICAgICdkZXZpY2Utd2lkdGgnLFxuICAgICAgICAnZGlzcGxheS1tb2RlJyxcbiAgICAgICAgJ2ZvcmNlZC1jb2xvcnMnLFxuICAgICAgICAnZ3JpZCcsXG4gICAgICAgICdoZWlnaHQnLFxuICAgICAgICAnaG92ZXInLFxuICAgICAgICAnaW52ZXJ0ZWQtY29sb3JzJyxcbiAgICAgICAgJ21vbm9jaHJvbWUnLFxuICAgICAgICAnb3JpZW50YXRpb24nLFxuICAgICAgICAnb3ZlcmZsb3ctYmxvY2snLFxuICAgICAgICAnb3ZlcmZsb3ctaW5saW5lJyxcbiAgICAgICAgJ3BvaW50ZXInLFxuICAgICAgICAncHJlZmVycy1jb2xvci1zY2hlbWUnLFxuICAgICAgICAncHJlZmVycy1jb250cmFzdCcsXG4gICAgICAgICdwcmVmZXJzLXJlZHVjZWQtbW90aW9uJyxcbiAgICAgICAgJ3ByZWZlcnMtcmVkdWNlZC10cmFuc3BhcmVuY3knLFxuICAgICAgICAncmVzb2x1dGlvbicsXG4gICAgICAgICdzY2FuJyxcbiAgICAgICAgJ3NjcmlwdGluZycsXG4gICAgICAgICd1cGRhdGUnLFxuICAgICAgICAnd2lkdGgnLFxuICAgICAgICAnbWluLXdpZHRoJyxcbiAgICAgICAgJ21heC13aWR0aCcsXG4gICAgICAgICdtaW4taGVpZ2h0JyxcbiAgICAgICAgJ21heC1oZWlnaHQnLFxuICAgICAgXSxcbiAgICAgIGkgPSBbXG4gICAgICAgICdhY3RpdmUnLFxuICAgICAgICAnYW55LWxpbmsnLFxuICAgICAgICAnYmxhbmsnLFxuICAgICAgICAnY2hlY2tlZCcsXG4gICAgICAgICdjdXJyZW50JyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAnZGVmaW5lZCcsXG4gICAgICAgICdkaXInLFxuICAgICAgICAnZGlzYWJsZWQnLFxuICAgICAgICAnZHJvcCcsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbmFibGVkJyxcbiAgICAgICAgJ2ZpcnN0JyxcbiAgICAgICAgJ2ZpcnN0LWNoaWxkJyxcbiAgICAgICAgJ2ZpcnN0LW9mLXR5cGUnLFxuICAgICAgICAnZnVsbHNjcmVlbicsXG4gICAgICAgICdmdXR1cmUnLFxuICAgICAgICAnZm9jdXMnLFxuICAgICAgICAnZm9jdXMtdmlzaWJsZScsXG4gICAgICAgICdmb2N1cy13aXRoaW4nLFxuICAgICAgICAnaGFzJyxcbiAgICAgICAgJ2hvc3QnLFxuICAgICAgICAnaG9zdC1jb250ZXh0JyxcbiAgICAgICAgJ2hvdmVyJyxcbiAgICAgICAgJ2luZGV0ZXJtaW5hdGUnLFxuICAgICAgICAnaW4tcmFuZ2UnLFxuICAgICAgICAnaW52YWxpZCcsXG4gICAgICAgICdpcycsXG4gICAgICAgICdsYW5nJyxcbiAgICAgICAgJ2xhc3QtY2hpbGQnLFxuICAgICAgICAnbGFzdC1vZi10eXBlJyxcbiAgICAgICAgJ2xlZnQnLFxuICAgICAgICAnbGluaycsXG4gICAgICAgICdsb2NhbC1saW5rJyxcbiAgICAgICAgJ25vdCcsXG4gICAgICAgICdudGgtY2hpbGQnLFxuICAgICAgICAnbnRoLWNvbCcsXG4gICAgICAgICdudGgtbGFzdC1jaGlsZCcsXG4gICAgICAgICdudGgtbGFzdC1jb2wnLFxuICAgICAgICAnbnRoLWxhc3Qtb2YtdHlwZScsXG4gICAgICAgICdudGgtb2YtdHlwZScsXG4gICAgICAgICdvbmx5LWNoaWxkJyxcbiAgICAgICAgJ29ubHktb2YtdHlwZScsXG4gICAgICAgICdvcHRpb25hbCcsXG4gICAgICAgICdvdXQtb2YtcmFuZ2UnLFxuICAgICAgICAncGFzdCcsXG4gICAgICAgICdwbGFjZWhvbGRlci1zaG93bicsXG4gICAgICAgICdyZWFkLW9ubHknLFxuICAgICAgICAncmVhZC13cml0ZScsXG4gICAgICAgICdyZXF1aXJlZCcsXG4gICAgICAgICdyaWdodCcsXG4gICAgICAgICdyb290JyxcbiAgICAgICAgJ3Njb3BlJyxcbiAgICAgICAgJ3RhcmdldCcsXG4gICAgICAgICd0YXJnZXQtd2l0aGluJyxcbiAgICAgICAgJ3VzZXItaW52YWxpZCcsXG4gICAgICAgICd2YWxpZCcsXG4gICAgICAgICd2aXNpdGVkJyxcbiAgICAgICAgJ3doZXJlJyxcbiAgICAgIF0sXG4gICAgICBvID0gW1xuICAgICAgICAnYWZ0ZXInLFxuICAgICAgICAnYmFja2Ryb3AnLFxuICAgICAgICAnYmVmb3JlJyxcbiAgICAgICAgJ2N1ZScsXG4gICAgICAgICdjdWUtcmVnaW9uJyxcbiAgICAgICAgJ2ZpcnN0LWxldHRlcicsXG4gICAgICAgICdmaXJzdC1saW5lJyxcbiAgICAgICAgJ2dyYW1tYXItZXJyb3InLFxuICAgICAgICAnbWFya2VyJyxcbiAgICAgICAgJ3BhcnQnLFxuICAgICAgICAncGxhY2Vob2xkZXInLFxuICAgICAgICAnc2VsZWN0aW9uJyxcbiAgICAgICAgJ3Nsb3R0ZWQnLFxuICAgICAgICAnc3BlbGxpbmctZXJyb3InLFxuICAgICAgXSxcbiAgICAgIHIgPSBbXG4gICAgICAgICdhbGlnbi1jb250ZW50JyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJyxcbiAgICAgICAgJ2FsaWduLXNlbGYnLFxuICAgICAgICAnYW5pbWF0aW9uJyxcbiAgICAgICAgJ2FuaW1hdGlvbi1kZWxheScsXG4gICAgICAgICdhbmltYXRpb24tZGlyZWN0aW9uJyxcbiAgICAgICAgJ2FuaW1hdGlvbi1kdXJhdGlvbicsXG4gICAgICAgICdhbmltYXRpb24tZmlsbC1tb2RlJyxcbiAgICAgICAgJ2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQnLFxuICAgICAgICAnYW5pbWF0aW9uLW5hbWUnLFxuICAgICAgICAnYW5pbWF0aW9uLXBsYXktc3RhdGUnLFxuICAgICAgICAnYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbicsXG4gICAgICAgICdhdXRvJyxcbiAgICAgICAgJ2JhY2tmYWNlLXZpc2liaWxpdHknLFxuICAgICAgICAnYmFja2dyb3VuZCcsXG4gICAgICAgICdiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnLFxuICAgICAgICAnYmFja2dyb3VuZC1jbGlwJyxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLFxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZScsXG4gICAgICAgICdiYWNrZ3JvdW5kLW9yaWdpbicsXG4gICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJyxcbiAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JyxcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZScsXG4gICAgICAgICdib3JkZXInLFxuICAgICAgICAnYm9yZGVyLWJvdHRvbScsXG4gICAgICAgICdib3JkZXItYm90dG9tLWNvbG9yJyxcbiAgICAgICAgJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLFxuICAgICAgICAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLFxuICAgICAgICAnYm9yZGVyLWJvdHRvbS1zdHlsZScsXG4gICAgICAgICdib3JkZXItYm90dG9tLXdpZHRoJyxcbiAgICAgICAgJ2JvcmRlci1jb2xsYXBzZScsXG4gICAgICAgICdib3JkZXItY29sb3InLFxuICAgICAgICAnYm9yZGVyLWltYWdlJyxcbiAgICAgICAgJ2JvcmRlci1pbWFnZS1vdXRzZXQnLFxuICAgICAgICAnYm9yZGVyLWltYWdlLXJlcGVhdCcsXG4gICAgICAgICdib3JkZXItaW1hZ2Utc2xpY2UnLFxuICAgICAgICAnYm9yZGVyLWltYWdlLXNvdXJjZScsXG4gICAgICAgICdib3JkZXItaW1hZ2Utd2lkdGgnLFxuICAgICAgICAnYm9yZGVyLWxlZnQnLFxuICAgICAgICAnYm9yZGVyLWxlZnQtY29sb3InLFxuICAgICAgICAnYm9yZGVyLWxlZnQtc3R5bGUnLFxuICAgICAgICAnYm9yZGVyLWxlZnQtd2lkdGgnLFxuICAgICAgICAnYm9yZGVyLXJhZGl1cycsXG4gICAgICAgICdib3JkZXItcmlnaHQnLFxuICAgICAgICAnYm9yZGVyLXJpZ2h0LWNvbG9yJyxcbiAgICAgICAgJ2JvcmRlci1yaWdodC1zdHlsZScsXG4gICAgICAgICdib3JkZXItcmlnaHQtd2lkdGgnLFxuICAgICAgICAnYm9yZGVyLXNwYWNpbmcnLFxuICAgICAgICAnYm9yZGVyLXN0eWxlJyxcbiAgICAgICAgJ2JvcmRlci10b3AnLFxuICAgICAgICAnYm9yZGVyLXRvcC1jb2xvcicsXG4gICAgICAgICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJyxcbiAgICAgICAgJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJyxcbiAgICAgICAgJ2JvcmRlci10b3Atc3R5bGUnLFxuICAgICAgICAnYm9yZGVyLXRvcC13aWR0aCcsXG4gICAgICAgICdib3JkZXItd2lkdGgnLFxuICAgICAgICAnYm90dG9tJyxcbiAgICAgICAgJ2JveC1kZWNvcmF0aW9uLWJyZWFrJyxcbiAgICAgICAgJ2JveC1zaGFkb3cnLFxuICAgICAgICAnYm94LXNpemluZycsXG4gICAgICAgICdicmVhay1hZnRlcicsXG4gICAgICAgICdicmVhay1iZWZvcmUnLFxuICAgICAgICAnYnJlYWstaW5zaWRlJyxcbiAgICAgICAgJ2NhcHRpb24tc2lkZScsXG4gICAgICAgICdjbGVhcicsXG4gICAgICAgICdjbGlwJyxcbiAgICAgICAgJ2NsaXAtcGF0aCcsXG4gICAgICAgICdjb2xvcicsXG4gICAgICAgICdjb2x1bW4tY291bnQnLFxuICAgICAgICAnY29sdW1uLWZpbGwnLFxuICAgICAgICAnY29sdW1uLWdhcCcsXG4gICAgICAgICdjb2x1bW4tcnVsZScsXG4gICAgICAgICdjb2x1bW4tcnVsZS1jb2xvcicsXG4gICAgICAgICdjb2x1bW4tcnVsZS1zdHlsZScsXG4gICAgICAgICdjb2x1bW4tcnVsZS13aWR0aCcsXG4gICAgICAgICdjb2x1bW4tc3BhbicsXG4gICAgICAgICdjb2x1bW4td2lkdGgnLFxuICAgICAgICAnY29sdW1ucycsXG4gICAgICAgICdjb250ZW50JyxcbiAgICAgICAgJ2NvdW50ZXItaW5jcmVtZW50JyxcbiAgICAgICAgJ2NvdW50ZXItcmVzZXQnLFxuICAgICAgICAnY3Vyc29yJyxcbiAgICAgICAgJ2RpcmVjdGlvbicsXG4gICAgICAgICdkaXNwbGF5JyxcbiAgICAgICAgJ2VtcHR5LWNlbGxzJyxcbiAgICAgICAgJ2ZpbHRlcicsXG4gICAgICAgICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtYmFzaXMnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nLFxuICAgICAgICAnZmxleC1mbG93JyxcbiAgICAgICAgJ2ZsZXgtZ3JvdycsXG4gICAgICAgICdmbGV4LXNocmluaycsXG4gICAgICAgICdmbGV4LXdyYXAnLFxuICAgICAgICAnZmxvYXQnLFxuICAgICAgICAnZm9udCcsXG4gICAgICAgICdmb250LWRpc3BsYXknLFxuICAgICAgICAnZm9udC1mYW1pbHknLFxuICAgICAgICAnZm9udC1mZWF0dXJlLXNldHRpbmdzJyxcbiAgICAgICAgJ2ZvbnQta2VybmluZycsXG4gICAgICAgICdmb250LWxhbmd1YWdlLW92ZXJyaWRlJyxcbiAgICAgICAgJ2ZvbnQtc2l6ZScsXG4gICAgICAgICdmb250LXNpemUtYWRqdXN0JyxcbiAgICAgICAgJ2ZvbnQtc21vb3RoaW5nJyxcbiAgICAgICAgJ2ZvbnQtc3RyZXRjaCcsXG4gICAgICAgICdmb250LXN0eWxlJyxcbiAgICAgICAgJ2ZvbnQtdmFyaWFudCcsXG4gICAgICAgICdmb250LXZhcmlhbnQtbGlnYXR1cmVzJyxcbiAgICAgICAgJ2ZvbnQtdmFyaWF0aW9uLXNldHRpbmdzJyxcbiAgICAgICAgJ2ZvbnQtd2VpZ2h0JyxcbiAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICdoeXBoZW5zJyxcbiAgICAgICAgJ2ljb24nLFxuICAgICAgICAnaW1hZ2Utb3JpZW50YXRpb24nLFxuICAgICAgICAnaW1hZ2UtcmVuZGVyaW5nJyxcbiAgICAgICAgJ2ltYWdlLXJlc29sdXRpb24nLFxuICAgICAgICAnaW1lLW1vZGUnLFxuICAgICAgICAnaW5oZXJpdCcsXG4gICAgICAgICdpbml0aWFsJyxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCcsXG4gICAgICAgICdsZWZ0JyxcbiAgICAgICAgJ2xldHRlci1zcGFjaW5nJyxcbiAgICAgICAgJ2xpbmUtaGVpZ2h0JyxcbiAgICAgICAgJ2xpc3Qtc3R5bGUnLFxuICAgICAgICAnbGlzdC1zdHlsZS1pbWFnZScsXG4gICAgICAgICdsaXN0LXN0eWxlLXBvc2l0aW9uJyxcbiAgICAgICAgJ2xpc3Qtc3R5bGUtdHlwZScsXG4gICAgICAgICdtYXJnaW4nLFxuICAgICAgICAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAgICdtYXJnaW4tbGVmdCcsXG4gICAgICAgICdtYXJnaW4tcmlnaHQnLFxuICAgICAgICAnbWFyZ2luLXRvcCcsXG4gICAgICAgICdtYXJrcycsXG4gICAgICAgICdtYXNrJyxcbiAgICAgICAgJ21heC1oZWlnaHQnLFxuICAgICAgICAnbWF4LXdpZHRoJyxcbiAgICAgICAgJ21pbi1oZWlnaHQnLFxuICAgICAgICAnbWluLXdpZHRoJyxcbiAgICAgICAgJ25hdi1kb3duJyxcbiAgICAgICAgJ25hdi1pbmRleCcsXG4gICAgICAgICduYXYtbGVmdCcsXG4gICAgICAgICduYXYtcmlnaHQnLFxuICAgICAgICAnbmF2LXVwJyxcbiAgICAgICAgJ25vbmUnLFxuICAgICAgICAnbm9ybWFsJyxcbiAgICAgICAgJ29iamVjdC1maXQnLFxuICAgICAgICAnb2JqZWN0LXBvc2l0aW9uJyxcbiAgICAgICAgJ29wYWNpdHknLFxuICAgICAgICAnb3JkZXInLFxuICAgICAgICAnb3JwaGFucycsXG4gICAgICAgICdvdXRsaW5lJyxcbiAgICAgICAgJ291dGxpbmUtY29sb3InLFxuICAgICAgICAnb3V0bGluZS1vZmZzZXQnLFxuICAgICAgICAnb3V0bGluZS1zdHlsZScsXG4gICAgICAgICdvdXRsaW5lLXdpZHRoJyxcbiAgICAgICAgJ292ZXJmbG93JyxcbiAgICAgICAgJ292ZXJmbG93LXdyYXAnLFxuICAgICAgICAnb3ZlcmZsb3cteCcsXG4gICAgICAgICdvdmVyZmxvdy15JyxcbiAgICAgICAgJ3BhZGRpbmcnLFxuICAgICAgICAncGFkZGluZy1ib3R0b20nLFxuICAgICAgICAncGFkZGluZy1sZWZ0JyxcbiAgICAgICAgJ3BhZGRpbmctcmlnaHQnLFxuICAgICAgICAncGFkZGluZy10b3AnLFxuICAgICAgICAncGFnZS1icmVhay1hZnRlcicsXG4gICAgICAgICdwYWdlLWJyZWFrLWJlZm9yZScsXG4gICAgICAgICdwYWdlLWJyZWFrLWluc2lkZScsXG4gICAgICAgICdwZXJzcGVjdGl2ZScsXG4gICAgICAgICdwZXJzcGVjdGl2ZS1vcmlnaW4nLFxuICAgICAgICAncG9pbnRlci1ldmVudHMnLFxuICAgICAgICAncG9zaXRpb24nLFxuICAgICAgICAncXVvdGVzJyxcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgICdyaWdodCcsXG4gICAgICAgICdzcmMnLFxuICAgICAgICAndGFiLXNpemUnLFxuICAgICAgICAndGFibGUtbGF5b3V0JyxcbiAgICAgICAgJ3RleHQtYWxpZ24nLFxuICAgICAgICAndGV4dC1hbGlnbi1sYXN0JyxcbiAgICAgICAgJ3RleHQtZGVjb3JhdGlvbicsXG4gICAgICAgICd0ZXh0LWRlY29yYXRpb24tY29sb3InLFxuICAgICAgICAndGV4dC1kZWNvcmF0aW9uLWxpbmUnLFxuICAgICAgICAndGV4dC1kZWNvcmF0aW9uLXN0eWxlJyxcbiAgICAgICAgJ3RleHQtaW5kZW50JyxcbiAgICAgICAgJ3RleHQtb3ZlcmZsb3cnLFxuICAgICAgICAndGV4dC1yZW5kZXJpbmcnLFxuICAgICAgICAndGV4dC1zaGFkb3cnLFxuICAgICAgICAndGV4dC10cmFuc2Zvcm0nLFxuICAgICAgICAndGV4dC11bmRlcmxpbmUtcG9zaXRpb24nLFxuICAgICAgICAndG9wJyxcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJyxcbiAgICAgICAgJ3RyYW5zZm9ybS1zdHlsZScsXG4gICAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgICAgJ3RyYW5zaXRpb24tZGVsYXknLFxuICAgICAgICAndHJhbnNpdGlvbi1kdXJhdGlvbicsXG4gICAgICAgICd0cmFuc2l0aW9uLXByb3BlcnR5JyxcbiAgICAgICAgJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJyxcbiAgICAgICAgJ3VuaWNvZGUtYmlkaScsXG4gICAgICAgICd2ZXJ0aWNhbC1hbGlnbicsXG4gICAgICAgICd2aXNpYmlsaXR5JyxcbiAgICAgICAgJ3doaXRlLXNwYWNlJyxcbiAgICAgICAgJ3dpZG93cycsXG4gICAgICAgICd3aWR0aCcsXG4gICAgICAgICd3b3JkLWJyZWFrJyxcbiAgICAgICAgJ3dvcmQtc3BhY2luZycsXG4gICAgICAgICd3b3JkLXdyYXAnLFxuICAgICAgICAnei1pbmRleCcsXG4gICAgICBdLnJldmVyc2UoKVxuICAgIHJldHVybiBuID0+IHtcbiAgICAgIGNvbnN0IGEgPSAoZSA9PiAoe1xuICAgICAgICAgIElNUE9SVEFOVDogeyBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46ICchaW1wb3J0YW50JyB9LFxuICAgICAgICAgIEhFWENPTE9SOiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgYmVnaW46ICcjKFthLWZBLUYwLTldezZ9fFthLWZBLUYwLTldezN9KScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBBVFRSSUJVVEVfU0VMRUNUT1JfTU9ERToge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItYXR0cicsXG4gICAgICAgICAgICBiZWdpbjogL1xcWy8sXG4gICAgICAgICAgICBlbmQ6IC9cXF0vLFxuICAgICAgICAgICAgaWxsZWdhbDogJyQnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtlLkFQT1NfU1RSSU5HX01PREUsIGUuUVVPVEVfU1RSSU5HX01PREVdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pKShuKSxcbiAgICAgICAgbCA9IFtuLkFQT1NfU1RSSU5HX01PREUsIG4uUVVPVEVfU1RSSU5HX01PREVdXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnQ1NTJyxcbiAgICAgICAgY2FzZV9pbnNlbnNpdGl2ZTogITAsXG4gICAgICAgIGlsbGVnYWw6IC9bPXwnXFwkXS8sXG4gICAgICAgIGtleXdvcmRzOiB7IGtleWZyYW1lUG9zaXRpb246ICdmcm9tIHRvJyB9LFxuICAgICAgICBjbGFzc05hbWVBbGlhc2VzOiB7IGtleWZyYW1lUG9zaXRpb246ICdzZWxlY3Rvci10YWcnIH0sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgbi5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICB7IGJlZ2luOiAvLSh3ZWJraXR8bW96fG1zfG8pLSg/PVthLXpdKS8gfSxcbiAgICAgICAgICBuLkNTU19OVU1CRVJfTU9ERSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3NlbGVjdG9yLWlkJywgYmVnaW46IC8jW0EtWmEtejAtOV8tXSsvLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1jbGFzcycsXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwuW2EtekEtWi1dW2EtekEtWjAtOV8tXSonLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYS5BVFRSSUJVVEVfU0VMRUNUT1JfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1wc2V1ZG8nLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnOignICsgaS5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46ICc6OignICsgby5qb2luKCd8JykgKyAnKScgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcYignICsgci5qb2luKCd8JykgKyAnKVxcXFxiJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnOicsXG4gICAgICAgICAgICBlbmQ6ICdbO31dJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIGEuSEVYQ09MT1IsXG4gICAgICAgICAgICAgIGEuSU1QT1JUQU5ULFxuICAgICAgICAgICAgICBuLkNTU19OVU1CRVJfTU9ERSxcbiAgICAgICAgICAgICAgLi4ubCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvKHVybHxkYXRhLXVyaSlcXCgvLFxuICAgICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgIGtleXdvcmRzOiB7IGJ1aWx0X2luOiAndXJsIGRhdGEtdXJpJyB9LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiAvW14pXS8sXG4gICAgICAgICAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLCBiZWdpbjogL1tcXHctXSsoPz1cXCgpLyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAoKHMgPSAvQC8pLFxuICAgICAgICAgICAgICAoKC4uLmUpID0+XG4gICAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgICAgICAgLm1hcChlID0+XG4gICAgICAgICAgICAgICAgICAgIChlID0+IChlID8gKCdzdHJpbmcnID09IHR5cGVvZiBlID8gZSA6IGUuc291cmNlKSA6IG51bGwpKShlKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJycpKSgnKD89JywgcywgJyknKSksXG4gICAgICAgICAgICBlbmQ6ICdbeztdJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGlsbGVnYWw6IC86LyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAna2V5d29yZCcsIGJlZ2luOiAvQC0/XFx3W1xcd10qKC1cXHcrKSovIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1xccy8sXG4gICAgICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6ICEwLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgICAgICAgJHBhdHRlcm46IC9bYS16LV0rLyxcbiAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICdhbmQgb3Igbm90IG9ubHknLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiB0LmpvaW4oJyAnKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvW2Etei1dKyg/PTopLywgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyB9LFxuICAgICAgICAgICAgICAgICAgLi4ubCxcbiAgICAgICAgICAgICAgICAgIG4uQ1NTX05VTUJFUl9NT0RFLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdzZWxlY3Rvci10YWcnLCBiZWdpbjogJ1xcXFxiKCcgKyBlLmpvaW4oJ3wnKSArICcpXFxcXGInIH0sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgICB2YXIgc1xuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnZGlmZicsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgcmV0dXJuIGUgPT4gKHtcbiAgICAgIG5hbWU6ICdEaWZmJyxcbiAgICAgIGFsaWFzZXM6IFsncGF0Y2gnXSxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXkBAICstXFxkKyxcXGQrICtcXCtcXGQrLFxcZCsgK0BALyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXlxcKlxcKlxcKiArXFxkKyxcXGQrICtcXCpcXCpcXCpcXCokLyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL14tLS0gK1xcZCssXFxkKyArLS0tLSQvLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC9JbmRleDogLywgZW5kOiAvJC8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9eaW5kZXgvLCBlbmQ6IC8kLyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogLz17Myx9LywgZW5kOiAvJC8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9eLXszfS8sIGVuZDogLyQvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXlxcKnszfSAvLCBlbmQ6IC8kLyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL15cXCt7M30vLCBlbmQ6IC8kLyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL15cXCp7MTV9JC8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC9eZGlmZiAtLWdpdC8sXG4gICAgICAgICAgICAgIGVuZDogLyQvLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2FkZGl0aW9uJywgYmVnaW46IC9eXFwrLywgZW5kOiAvJC8gfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2RlbGV0aW9uJyxcbiAgICAgICAgICBiZWdpbjogL14tLyxcbiAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgfSxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdhZGRpdGlvbicsIGJlZ2luOiAvXiEvLCBlbmQ6IC8kLyB9LFxuICAgICAgXSxcbiAgICB9KVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdnbycsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgY29uc3QgbiA9IHtcbiAgICAgICAga2V5d29yZDpcbiAgICAgICAgICAnYnJlYWsgZGVmYXVsdCBmdW5jIGludGVyZmFjZSBzZWxlY3QgY2FzZSBtYXAgc3RydWN0IGNoYW4gZWxzZSBnb3RvIHBhY2thZ2Ugc3dpdGNoIGNvbnN0IGZhbGx0aHJvdWdoIGlmIHJhbmdlIHR5cGUgY29udGludWUgZm9yIGltcG9ydCByZXR1cm4gdmFyIGdvIGRlZmVyIGJvb2wgYnl0ZSBjb21wbGV4NjQgY29tcGxleDEyOCBmbG9hdDMyIGZsb2F0NjQgaW50OCBpbnQxNiBpbnQzMiBpbnQ2NCBzdHJpbmcgdWludDggdWludDE2IHVpbnQzMiB1aW50NjQgaW50IHVpbnQgdWludHB0ciBydW5lJyxcbiAgICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UgaW90YSBuaWwnLFxuICAgICAgICBidWlsdF9pbjpcbiAgICAgICAgICAnYXBwZW5kIGNhcCBjbG9zZSBjb21wbGV4IGNvcHkgaW1hZyBsZW4gbWFrZSBuZXcgcGFuaWMgcHJpbnQgcHJpbnRsbiByZWFsIHJlY292ZXIgZGVsZXRlJyxcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdHbycsXG4gICAgICAgIGFsaWFzZXM6IFsnZ29sYW5nJ10sXG4gICAgICAgIGtleXdvcmRzOiBuLFxuICAgICAgICBpbGxlZ2FsOiAnPC8nLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGUuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBlLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICBlLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBlLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgICAgIHsgYmVnaW46ICdgJywgZW5kOiAnYCcgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgeyBiZWdpbjogZS5DX05VTUJFUl9SRSArICdbaV0nLCByZWxldmFuY2U6IDEgfSxcbiAgICAgICAgICAgICAgZS5DX05VTUJFUl9NT0RFLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46IC86PS8gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuYycsXG4gICAgICAgICAgICBlbmQ6ICdcXFxccyooXFxcXHt8JCknLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBlLlRJVExFX01PREUsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICAgIGtleXdvcmRzOiBuLFxuICAgICAgICAgICAgICAgIGlsbGVnYWw6IC9bXCInXS8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdodHRwJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBmdW5jdGlvbiBlKC4uLmUpIHtcbiAgICAgIHJldHVybiBlXG4gICAgICAgIC5tYXAoZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChuID0gZSkgPyAoJ3N0cmluZycgPT0gdHlwZW9mIG4gPyBuIDogbi5zb3VyY2UpIDogbnVsbFxuICAgICAgICAgIHZhciBuXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKVxuICAgIH1cbiAgICByZXR1cm4gbiA9PiB7XG4gICAgICBjb25zdCBhID0gJ0hUVFAvKDJ8MVxcXFwuWzAxXSknLFxuICAgICAgICBzID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScsXG4gICAgICAgICAgYmVnaW46IGUoJ14nLCAvW0EtWmEtel1bQS1aYS16MC05LV0qLywgJyg/PVxcXFw6XFxcXHMpJyksXG4gICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncHVuY3R1YXRpb24nLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAvOiAvLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICBzdGFydHM6IHsgZW5kOiAnJCcsIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0ID0gW1xuICAgICAgICAgIHMsXG4gICAgICAgICAgeyBiZWdpbjogJ1xcXFxuXFxcXG4nLCBzdGFydHM6IHsgc3ViTGFuZ3VhZ2U6IFtdLCBlbmRzV2l0aFBhcmVudDogITAgfSB9LFxuICAgICAgICBdXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnSFRUUCcsXG4gICAgICAgIGFsaWFzZXM6IFsnaHR0cHMnXSxcbiAgICAgICAgaWxsZWdhbDogL1xcUy8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdeKD89JyArIGEgKyAnIFxcXFxkezN9KScsXG4gICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbWV0YScsIGJlZ2luOiBhIH0sXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbnVtYmVyJywgYmVnaW46ICdcXFxcYlxcXFxkezN9XFxcXGInIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhcnRzOiB7IGVuZDogL1xcYlxcQi8sIGlsbGVnYWw6IC9cXFMvLCBjb250YWluczogdCB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcoPz1eW0EtWl0rICguKj8pICcgKyBhICsgJyQpJyxcbiAgICAgICAgICAgIGVuZDogLyQvLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgYmVnaW46ICcgJyxcbiAgICAgICAgICAgICAgICBlbmQ6ICcgJyxcbiAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ21ldGEnLCBiZWdpbjogYSB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgYmVnaW46ICdbQS1aXSsnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXJ0czogeyBlbmQ6IC9cXGJcXEIvLCBpbGxlZ2FsOiAvXFxTLywgY29udGFpbnM6IHQgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG4uaW5oZXJpdChzLCB7IHJlbGV2YW5jZTogMCB9KSxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ2luaScsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgZnVuY3Rpb24gZShlKSB7XG4gICAgICByZXR1cm4gZSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgZSA/IGUgOiBlLnNvdXJjZSkgOiBudWxsXG4gICAgfVxuICAgIGZ1bmN0aW9uIG4oLi4ubikge1xuICAgICAgcmV0dXJuIG4ubWFwKG4gPT4gZShuKSkuam9pbignJylcbiAgICB9XG4gICAgcmV0dXJuIHMgPT4ge1xuICAgICAgY29uc3QgYSA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB2YXJpYW50czogW3sgYmVnaW46IC8oWystXSspP1tcXGRdK19bXFxkX10rLyB9LCB7IGJlZ2luOiBzLk5VTUJFUl9SRSB9XSxcbiAgICAgICAgfSxcbiAgICAgICAgaSA9IHMuQ09NTUVOVCgpXG4gICAgICBpLnZhcmlhbnRzID0gW1xuICAgICAgICB7IGJlZ2luOiAvOy8sIGVuZDogLyQvIH0sXG4gICAgICAgIHsgYmVnaW46IC8jLywgZW5kOiAvJC8gfSxcbiAgICAgIF1cbiAgICAgIGNvbnN0IHQgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgIHZhcmlhbnRzOiBbeyBiZWdpbjogL1xcJFtcXHdcXGRcIl1bXFx3XFxkX10qLyB9LCB7IGJlZ2luOiAvXFwkXFx7KC4qPylcXH0vIH1dLFxuICAgICAgICB9LFxuICAgICAgICByID0geyBjbGFzc05hbWU6ICdsaXRlcmFsJywgYmVnaW46IC9cXGJvbnxvZmZ8dHJ1ZXxmYWxzZXx5ZXN8bm9cXGIvIH0sXG4gICAgICAgIGwgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICBjb250YWluczogW3MuQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IFwiJycnXCIsIGVuZDogXCInJydcIiwgcmVsZXZhbmNlOiAxMCB9LFxuICAgICAgICAgICAgeyBiZWdpbjogJ1wiXCJcIicsIGVuZDogJ1wiXCJcIicsIHJlbGV2YW5jZTogMTAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46ICdcIicsIGVuZDogJ1wiJyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogXCInXCIsIGVuZDogXCInXCIgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBjID0ge1xuICAgICAgICAgIGJlZ2luOiAvXFxbLyxcbiAgICAgICAgICBlbmQ6IC9cXF0vLFxuICAgICAgICAgIGNvbnRhaW5zOiBbaSwgciwgdCwgbCwgYSwgJ3NlbGYnXSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGcgPVxuICAgICAgICAgICcoJyArXG4gICAgICAgICAgWy9bQS1aYS16MC05Xy1dKy8sIC9cIihcXFxcXCJ8W15cIl0pKlwiLywgLydbXiddKicvXVxuICAgICAgICAgICAgLm1hcChuID0+IGUobikpXG4gICAgICAgICAgICAuam9pbignfCcpICtcbiAgICAgICAgICAnKSdcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdUT01MLCBhbHNvIElOSScsXG4gICAgICAgIGFsaWFzZXM6IFsndG9tbCddLFxuICAgICAgICBjYXNlX2luc2Vuc2l0aXZlOiAhMCxcbiAgICAgICAgaWxsZWdhbDogL1xcUy8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3NlY3Rpb24nLCBiZWdpbjogL1xcWysvLCBlbmQ6IC9cXF0rLyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBuKFxuICAgICAgICAgICAgICBnLFxuICAgICAgICAgICAgICAnKFxcXFxzKlxcXFwuXFxcXHMqJyxcbiAgICAgICAgICAgICAgZyxcbiAgICAgICAgICAgICAgJykqJyxcbiAgICAgICAgICAgICAgbignKD89JywgL1xccyo9XFxzKlteI1xcc10vLCAnKScpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgICAgICBzdGFydHM6IHsgZW5kOiAvJC8sIGNvbnRhaW5zOiBbaSwgYywgciwgdCwgbCwgYV0gfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnamF2YScsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgdmFyIGUgPSAnXFxcXC4oWzAtOV0oXypbMC05XSkqKScsXG4gICAgICBuID0gJ1swLTlhLWZBLUZdKF8qWzAtOWEtZkEtRl0pKicsXG4gICAgICBhID0ge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBgKFxcXFxiKFswLTldKF8qWzAtOV0pKikoKCR7ZX0pfFxcXFwuKT98KCR7ZX0pKVtlRV1bKy1dPyhbMC05XShfKlswLTldKSopW2ZGZERdP1xcXFxiYCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46IGBcXFxcYihbMC05XShfKlswLTldKSopKCgke2V9KVtmRmREXT9cXFxcYnxcXFxcLihbZkZkRF1cXFxcYik/KWAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogYCgke2V9KVtmRmREXT9cXFxcYmAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnXFxcXGIoWzAtOV0oXypbMC05XSkqKVtmRmREXVxcXFxiJyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBgXFxcXGIwW3hYXSgoJHtufSlcXFxcLj98KCR7bn0pP1xcXFwuKCR7bn0pKVtwUF1bKy1dPyhbMC05XShfKlswLTldKSopW2ZGZERdP1xcXFxiYCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46ICdcXFxcYigwfFsxLTldKF8qWzAtOV0pKilbbExdP1xcXFxiJyB9LFxuICAgICAgICAgIHsgYmVnaW46IGBcXFxcYjBbeFhdKCR7bn0pW2xMXT9cXFxcYmAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxiMChfKlswLTddKSpbbExdP1xcXFxiJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46ICdcXFxcYjBbYkJdWzAxXShfKlswMV0pKltsTF0/XFxcXGInIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIH1cbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICB2YXIgbiA9XG4gICAgICAgICAgJ2ZhbHNlIHN5bmNocm9uaXplZCBpbnQgYWJzdHJhY3QgZmxvYXQgcHJpdmF0ZSBjaGFyIGJvb2xlYW4gdmFyIHN0YXRpYyBudWxsIGlmIGNvbnN0IGZvciB0cnVlIHdoaWxlIGxvbmcgc3RyaWN0ZnAgZmluYWxseSBwcm90ZWN0ZWQgaW1wb3J0IG5hdGl2ZSBmaW5hbCB2b2lkIGVudW0gZWxzZSBicmVhayB0cmFuc2llbnQgY2F0Y2ggaW5zdGFuY2VvZiBieXRlIHN1cGVyIHZvbGF0aWxlIGNhc2UgYXNzZXJ0IHNob3J0IHBhY2thZ2UgZGVmYXVsdCBkb3VibGUgcHVibGljIHRyeSB0aGlzIHN3aXRjaCBjb250aW51ZSB0aHJvd3MgcHJvdGVjdGVkIHB1YmxpYyBwcml2YXRlIG1vZHVsZSByZXF1aXJlcyBleHBvcnRzIGRvJyxcbiAgICAgICAgcyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICBiZWdpbjogJ0BbXFx4YzAtXFx1MDJiOGEtekEtWl8kXVtcXHhjMC1cXHUwMmI4YS16QS1aXyQwLTldKicsXG4gICAgICAgICAgY29udGFpbnM6IFt7IGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLywgY29udGFpbnM6IFsnc2VsZiddIH1dLFxuICAgICAgICB9XG4gICAgICBjb25zdCByID0gYVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0phdmEnLFxuICAgICAgICBhbGlhc2VzOiBbJ2pzcCddLFxuICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgaWxsZWdhbDogLzxcXC98Iy8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgZS5DT01NRU5UKCcvXFxcXCpcXFxcKicsICdcXFxcKi8nLCB7XG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7IGJlZ2luOiAvXFx3K0AvLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdkb2N0YWcnLCBiZWdpbjogJ0BbQS1aYS16XSsnIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvaW1wb3J0IGphdmFcXC5bYS16XStcXC4vLFxuICAgICAgICAgICAga2V5d29yZHM6ICdpbXBvcnQnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAyLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZS5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGUuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgZS5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgIGUuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZSBlbnVtJyxcbiAgICAgICAgICAgIGVuZDogL1t7Oz1dLyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAxLFxuICAgICAgICAgICAga2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UgZW51bScsXG4gICAgICAgICAgICBpbGxlZ2FsOiAvWzpcIlxcW1xcXV0vLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgeyBiZWdpbktleXdvcmRzOiAnZXh0ZW5kcyBpbXBsZW1lbnRzJyB9LFxuICAgICAgICAgICAgICBlLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnbmV3IHRocm93IHJldHVybiBlbHNlJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICAgIGJlZ2luOiAncmVjb3JkXFxcXHMrJyArIGUuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccypcXFxcKCcsXG4gICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgIGVuZDogL1t7Oz1dLyxcbiAgICAgICAgICAgIGtleXdvcmRzOiBuLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgeyBiZWdpbktleXdvcmRzOiAncmVjb3JkJyB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IGUuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccypcXFxcKCcsXG4gICAgICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICBjb250YWluczogW2UuVU5ERVJTQ09SRV9USVRMRV9NT0RFXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgICAga2V5d29yZHM6IG4sXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5DX0JMT0NLX0NPTU1FTlRfTU9ERV0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGUuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAgZS5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgJyhbXFx4YzAtXFx1MDJiOGEtekEtWl8kXVtcXHhjMC1cXHUwMmI4YS16QS1aXyQwLTldKig8W1xceGMwLVxcdTAyYjhhLXpBLVpfJF1bXFx4YzAtXFx1MDJiOGEtekEtWl8kMC05XSooXFxcXHMqLFxcXFxzKltcXHhjMC1cXHUwMmI4YS16QS1aXyRdW1xceGMwLVxcdTAyYjhhLXpBLVpfJDAtOV0qKSo+KT9cXFxccyspKycgK1xuICAgICAgICAgICAgICBlLlVOREVSU0NPUkVfSURFTlRfUkUgK1xuICAgICAgICAgICAgICAnXFxcXHMqXFxcXCgnLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgZW5kOiAvW3s7PV0vLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogZS5VTkRFUlNDT1JFX0lERU5UX1JFICsgJ1xcXFxzKlxcXFwoJyxcbiAgICAgICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5VTkRFUlNDT1JFX1RJVExFX01PREVdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAgIHMsXG4gICAgICAgICAgICAgICAgICBlLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgICAgICAgICBlLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICAgIGUuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZS5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICBlLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHIsXG4gICAgICAgICAgcyxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ2phdmFzY3JpcHQnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIGNvbnN0IGUgPSAnW0EtWmEteiRfXVswLTlBLVphLXokX10qJyxcbiAgICAgIG4gPSBbXG4gICAgICAgICdhcycsXG4gICAgICAgICdpbicsXG4gICAgICAgICdvZicsXG4gICAgICAgICdpZicsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnZmluYWxseScsXG4gICAgICAgICd2YXInLFxuICAgICAgICAnbmV3JyxcbiAgICAgICAgJ2Z1bmN0aW9uJyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICd2b2lkJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY2F0Y2gnLFxuICAgICAgICAnaW5zdGFuY2VvZicsXG4gICAgICAgICd3aXRoJyxcbiAgICAgICAgJ3Rocm93JyxcbiAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICd0cnknLFxuICAgICAgICAnc3dpdGNoJyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ3R5cGVvZicsXG4gICAgICAgICdkZWxldGUnLFxuICAgICAgICAnbGV0JyxcbiAgICAgICAgJ3lpZWxkJyxcbiAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2RlYnVnZ2VyJyxcbiAgICAgICAgJ2FzeW5jJyxcbiAgICAgICAgJ2F3YWl0JyxcbiAgICAgICAgJ3N0YXRpYycsXG4gICAgICAgICdpbXBvcnQnLFxuICAgICAgICAnZnJvbScsXG4gICAgICAgICdleHBvcnQnLFxuICAgICAgICAnZXh0ZW5kcycsXG4gICAgICBdLFxuICAgICAgYSA9IFsndHJ1ZScsICdmYWxzZScsICdudWxsJywgJ3VuZGVmaW5lZCcsICdOYU4nLCAnSW5maW5pdHknXSxcbiAgICAgIHMgPSBbXS5jb25jYXQoXG4gICAgICAgIFtcbiAgICAgICAgICAnc2V0SW50ZXJ2YWwnLFxuICAgICAgICAgICdzZXRUaW1lb3V0JyxcbiAgICAgICAgICAnY2xlYXJJbnRlcnZhbCcsXG4gICAgICAgICAgJ2NsZWFyVGltZW91dCcsXG4gICAgICAgICAgJ3JlcXVpcmUnLFxuICAgICAgICAgICdleHBvcnRzJyxcbiAgICAgICAgICAnZXZhbCcsXG4gICAgICAgICAgJ2lzRmluaXRlJyxcbiAgICAgICAgICAnaXNOYU4nLFxuICAgICAgICAgICdwYXJzZUZsb2F0JyxcbiAgICAgICAgICAncGFyc2VJbnQnLFxuICAgICAgICAgICdkZWNvZGVVUkknLFxuICAgICAgICAgICdkZWNvZGVVUklDb21wb25lbnQnLFxuICAgICAgICAgICdlbmNvZGVVUkknLFxuICAgICAgICAgICdlbmNvZGVVUklDb21wb25lbnQnLFxuICAgICAgICAgICdlc2NhcGUnLFxuICAgICAgICAgICd1bmVzY2FwZScsXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAnYXJndW1lbnRzJyxcbiAgICAgICAgICAndGhpcycsXG4gICAgICAgICAgJ3N1cGVyJyxcbiAgICAgICAgICAnY29uc29sZScsXG4gICAgICAgICAgJ3dpbmRvdycsXG4gICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAnbG9jYWxTdG9yYWdlJyxcbiAgICAgICAgICAnbW9kdWxlJyxcbiAgICAgICAgICAnZ2xvYmFsJyxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICdJbnRsJyxcbiAgICAgICAgICAnRGF0YVZpZXcnLFxuICAgICAgICAgICdOdW1iZXInLFxuICAgICAgICAgICdNYXRoJyxcbiAgICAgICAgICAnRGF0ZScsXG4gICAgICAgICAgJ1N0cmluZycsXG4gICAgICAgICAgJ1JlZ0V4cCcsXG4gICAgICAgICAgJ09iamVjdCcsXG4gICAgICAgICAgJ0Z1bmN0aW9uJyxcbiAgICAgICAgICAnQm9vbGVhbicsXG4gICAgICAgICAgJ0Vycm9yJyxcbiAgICAgICAgICAnU3ltYm9sJyxcbiAgICAgICAgICAnU2V0JyxcbiAgICAgICAgICAnTWFwJyxcbiAgICAgICAgICAnV2Vha1NldCcsXG4gICAgICAgICAgJ1dlYWtNYXAnLFxuICAgICAgICAgICdQcm94eScsXG4gICAgICAgICAgJ1JlZmxlY3QnLFxuICAgICAgICAgICdKU09OJyxcbiAgICAgICAgICAnUHJvbWlzZScsXG4gICAgICAgICAgJ0Zsb2F0NjRBcnJheScsXG4gICAgICAgICAgJ0ludDE2QXJyYXknLFxuICAgICAgICAgICdJbnQzMkFycmF5JyxcbiAgICAgICAgICAnSW50OEFycmF5JyxcbiAgICAgICAgICAnVWludDE2QXJyYXknLFxuICAgICAgICAgICdVaW50MzJBcnJheScsXG4gICAgICAgICAgJ0Zsb2F0MzJBcnJheScsXG4gICAgICAgICAgJ0FycmF5JyxcbiAgICAgICAgICAnVWludDhBcnJheScsXG4gICAgICAgICAgJ1VpbnQ4Q2xhbXBlZEFycmF5JyxcbiAgICAgICAgICAnQXJyYXlCdWZmZXInLFxuICAgICAgICAgICdCaWdJbnQ2NEFycmF5JyxcbiAgICAgICAgICAnQmlnVWludDY0QXJyYXknLFxuICAgICAgICAgICdCaWdJbnQnLFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgJ0V2YWxFcnJvcicsXG4gICAgICAgICAgJ0ludGVybmFsRXJyb3InLFxuICAgICAgICAgICdSYW5nZUVycm9yJyxcbiAgICAgICAgICAnUmVmZXJlbmNlRXJyb3InLFxuICAgICAgICAgICdTeW50YXhFcnJvcicsXG4gICAgICAgICAgJ1R5cGVFcnJvcicsXG4gICAgICAgICAgJ1VSSUVycm9yJyxcbiAgICAgICAgXVxuICAgICAgKVxuICAgIGZ1bmN0aW9uIHIoZSkge1xuICAgICAgcmV0dXJuIHQoJyg/PScsIGUsICcpJylcbiAgICB9XG4gICAgZnVuY3Rpb24gdCguLi5lKSB7XG4gICAgICByZXR1cm4gZVxuICAgICAgICAubWFwKGUgPT4ge1xuICAgICAgICAgIHJldHVybiAobiA9IGUpID8gKCdzdHJpbmcnID09IHR5cGVvZiBuID8gbiA6IG4uc291cmNlKSA6IG51bGxcbiAgICAgICAgICB2YXIgblxuICAgICAgICB9KVxuICAgICAgICAuam9pbignJylcbiAgICB9XG4gICAgcmV0dXJuIGkgPT4ge1xuICAgICAgY29uc3QgYyA9IGUsXG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgYmVnaW46IC88W0EtWmEtejAtOVxcXFwuXzotXSsvLFxuICAgICAgICAgIGVuZDogL1xcL1tBLVphLXowLTlcXFxcLl86LV0rPnxcXC8+LyxcbiAgICAgICAgICBpc1RydWx5T3BlbmluZ1RhZzogKGUsIG4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBlWzBdLmxlbmd0aCArIGUuaW5kZXgsXG4gICAgICAgICAgICAgIHMgPSBlLmlucHV0W2FdXG4gICAgICAgICAgICAnPCcgIT09IHNcbiAgICAgICAgICAgICAgPyAnPicgPT09IHMgJiZcbiAgICAgICAgICAgICAgICAoKChlLCB7IGFmdGVyOiBuIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSAnPC8nICsgZVswXS5zbGljZSgxKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xICE9PSBlLmlucHV0LmluZGV4T2YoYSwgbilcbiAgICAgICAgICAgICAgICB9KShlLCB7IGFmdGVyOiBhIH0pIHx8XG4gICAgICAgICAgICAgICAgICBuLmlnbm9yZU1hdGNoKCkpXG4gICAgICAgICAgICAgIDogbi5pZ25vcmVNYXRjaCgpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbCA9IHsgJHBhdHRlcm46IGUsIGtleXdvcmQ6IG4sIGxpdGVyYWw6IGEsIGJ1aWx0X2luOiBzIH0sXG4gICAgICAgIGcgPSAnXFxcXC4oWzAtOV0oXz9bMC05XSkqKScsXG4gICAgICAgIGIgPSAnMHxbMS05XShfP1swLTldKSp8MFswLTddKls4OV1bMC05XSonLFxuICAgICAgICBkID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IGAoXFxcXGIoJHtifSkoKCR7Z30pfFxcXFwuKT98KCR7Z30pKVtlRV1bKy1dPyhbMC05XShfP1swLTldKSopXFxcXGJgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IGBcXFxcYigke2J9KVxcXFxiKCgke2d9KVxcXFxifFxcXFwuKT98KCR7Z30pXFxcXGJgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYigwfFsxLTldKF8/WzAtOV0pKiluXFxcXGInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYjBbeFhdWzAtOWEtZkEtRl0oXz9bMC05YS1mQS1GXSkqbj9cXFxcYicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiMFtiQl1bMC0xXShfP1swLTFdKSpuP1xcXFxiJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAnXFxcXGIwW29PXVswLTddKF8/WzAtN10pKm4/XFxcXGInIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIwWzAtN10rbj9cXFxcYicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9LFxuICAgICAgICBFID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICAgICAgICBiZWdpbjogJ1xcXFwkXFxcXHsnLFxuICAgICAgICAgIGVuZDogJ1xcXFx9JyxcbiAgICAgICAgICBrZXl3b3JkczogbCxcbiAgICAgICAgICBjb250YWluczogW10sXG4gICAgICAgIH0sXG4gICAgICAgIHUgPSB7XG4gICAgICAgICAgYmVnaW46ICdodG1sYCcsXG4gICAgICAgICAgZW5kOiAnJyxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIGVuZDogJ2AnLFxuICAgICAgICAgICAgcmV0dXJuRW5kOiAhMSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbaS5CQUNLU0xBU0hfRVNDQVBFLCBFXSxcbiAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBfID0ge1xuICAgICAgICAgIGJlZ2luOiAnY3NzYCcsXG4gICAgICAgICAgZW5kOiAnJyxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIGVuZDogJ2AnLFxuICAgICAgICAgICAgcmV0dXJuRW5kOiAhMSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbaS5CQUNLU0xBU0hfRVNDQVBFLCBFXSxcbiAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiAnY3NzJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgYmVnaW46ICdgJyxcbiAgICAgICAgICBlbmQ6ICdgJyxcbiAgICAgICAgICBjb250YWluczogW2kuQkFDS1NMQVNIX0VTQ0FQRSwgRV0sXG4gICAgICAgIH0sXG4gICAgICAgIHkgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIGkuQ09NTUVOVCgvXFwvXFwqXFwqKD8hXFwvKS8sICdcXFxcKi8nLCB7XG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICAgICAgYmVnaW46ICdAW0EtWmEtel0rJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFx7JyxcbiAgICAgICAgICAgICAgICAgICAgICBlbmQ6ICdcXFxcfScsXG4gICAgICAgICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBjICsgJyg/PVxcXFxzKigtKXwkKScsXG4gICAgICAgICAgICAgICAgICAgICAgZW5kc1BhcmVudDogITAsXG4gICAgICAgICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvKD89W15cXG5dKVxccy8sIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgaS5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIE4gPSBbaS5BUE9TX1NUUklOR19NT0RFLCBpLlFVT1RFX1NUUklOR19NT0RFLCB1LCBfLCBtLCBkLCBpLlJFR0VYUF9NT0RFXVxuICAgICAgRS5jb250YWlucyA9IE4uY29uY2F0KHtcbiAgICAgICAgYmVnaW46IC9cXHsvLFxuICAgICAgICBlbmQ6IC9cXH0vLFxuICAgICAgICBrZXl3b3JkczogbCxcbiAgICAgICAgY29udGFpbnM6IFsnc2VsZiddLmNvbmNhdChOKSxcbiAgICAgIH0pXG4gICAgICBjb25zdCBBID0gW10uY29uY2F0KHksIEUuY29udGFpbnMpLFxuICAgICAgICBmID0gQS5jb25jYXQoW1xuICAgICAgICAgIHsgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLCBrZXl3b3JkczogbCwgY29udGFpbnM6IFsnc2VsZiddLmNvbmNhdChBKSB9LFxuICAgICAgICBdKSxcbiAgICAgICAgcCA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogITAsXG4gICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAga2V5d29yZHM6IGwsXG4gICAgICAgICAgY29udGFpbnM6IGYsXG4gICAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdKYXZhc2NyaXB0JyxcbiAgICAgICAgYWxpYXNlczogWydqcycsICdqc3gnLCAnbWpzJywgJ2NqcyddLFxuICAgICAgICBrZXl3b3JkczogbCxcbiAgICAgICAgZXhwb3J0czogeyBQQVJBTVNfQ09OVEFJTlM6IGYgfSxcbiAgICAgICAgaWxsZWdhbDogLyMoPyFbJF9BLXpdKS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaS5TSEVCQU5HKHsgbGFiZWw6ICdzaGViYW5nJywgYmluYXJ5OiAnbm9kZScsIHJlbGV2YW5jZTogNSB9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ3VzZV9zdHJpY3QnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICAgICAgYmVnaW46IC9eXFxzKlsnXCJddXNlIChzdHJpY3R8YXNtKVsnXCJdLyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGkuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICBpLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgIHUsXG4gICAgICAgICAgXyxcbiAgICAgICAgICBtLFxuICAgICAgICAgIHksXG4gICAgICAgICAgZCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogdChcbiAgICAgICAgICAgICAgL1t7LFxcbl1cXHMqLyxcbiAgICAgICAgICAgICAgcih0KC8oKChcXC9cXC8uKiQpfChcXC9cXCooXFwqW14vXXxbXipdKSpcXCpcXC8pKVxccyopKi8sIGMgKyAnXFxcXHMqOicpKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnYXR0cicsIGJlZ2luOiBjICsgcignXFxcXHMqOicpLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJygnICsgaS5SRV9TVEFSVEVSU19SRSArICd8XFxcXGIoY2FzZXxyZXR1cm58dGhyb3cpXFxcXGIpXFxcXHMqJyxcbiAgICAgICAgICAgIGtleXdvcmRzOiAncmV0dXJuIHRocm93IGNhc2UnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgaS5SRUdFWFBfTU9ERSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgICAgICcoXFxcXChbXigpXSooXFxcXChbXigpXSooXFxcXChbXigpXSpcXFxcKVteKCldKikqXFxcXClbXigpXSopKlxcXFwpfCcgK1xuICAgICAgICAgICAgICAgICAgaS5VTkRFUlNDT1JFX0lERU5UX1JFICtcbiAgICAgICAgICAgICAgICAgICcpXFxcXHMqPT4nLFxuICAgICAgICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgICBlbmQ6ICdcXFxccyo9PicsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogaS5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IG51bGwsIGJlZ2luOiAvXFwoXFxzKlxcKS8sIHNraXA6ICEwIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmRzOiBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbnM6IGYsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogLywvLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICcnLCBiZWdpbjogL1xccy8sIGVuZDogL1xccyovLCBza2lwOiAhMCB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICAgIHsgYmVnaW46ICc8PicsIGVuZDogJzwvPicgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IG8uYmVnaW4sXG4gICAgICAgICAgICAgICAgICAgICdvbjpiZWdpbic6IG8uaXNUcnVseU9wZW5pbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogby5lbmQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiBvLmJlZ2luLCBlbmQ6IG8uZW5kLCBza2lwOiAhMCwgY29udGFpbnM6IFsnc2VsZiddIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgZW5kOiAvW3s7XS8sXG4gICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgIGtleXdvcmRzOiBsLFxuICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZicsIGkuaW5oZXJpdChpLlRJVExFX01PREUsIHsgYmVnaW46IGMgfSksIHBdLFxuICAgICAgICAgICAgaWxsZWdhbDogLyUvLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ3doaWxlIGlmIHN3aXRjaCBjYXRjaCBmb3InLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgIGkuVU5ERVJTQ09SRV9JREVOVF9SRSArXG4gICAgICAgICAgICAgICdcXFxcKFteKCldKihcXFxcKFteKCldKihcXFxcKFteKCldKlxcXFwpW14oKV0qKSpcXFxcKVteKCldKikqXFxcXClcXFxccypcXFxceycsXG4gICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICBjb250YWluczogW3AsIGkuaW5oZXJpdChpLlRJVExFX01PREUsIHsgYmVnaW46IGMgfSldLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXC4nICsgYyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogJ1xcXFwkJyArIGMgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MnLFxuICAgICAgICAgICAgZW5kOiAvW3s7PV0vLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICBpbGxlZ2FsOiAvWzpcIltcXF1dLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZXh0ZW5kcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGkuVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFxiKD89Y29uc3RydWN0b3IpLyxcbiAgICAgICAgICAgIGVuZDogL1t7O10vLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICBjb250YWluczogW2kuaW5oZXJpdChpLlRJVExFX01PREUsIHsgYmVnaW46IGMgfSksICdzZWxmJywgcF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJyhnZXR8c2V0KVxcXFxzKyg/PScgKyBjICsgJ1xcXFwoKScsXG4gICAgICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICAgICAga2V5d29yZHM6ICdnZXQgc2V0JyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIGkuaW5oZXJpdChpLlRJVExFX01PREUsIHsgYmVnaW46IGMgfSksXG4gICAgICAgICAgICAgIHsgYmVnaW46IC9cXChcXCkvIH0sXG4gICAgICAgICAgICAgIHAsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBiZWdpbjogL1xcJFsoLl0vIH0sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdqc29uJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICByZXR1cm4gbiA9PiB7XG4gICAgICBjb25zdCBlID0ge1xuICAgICAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIG51bGwnLFxuICAgICAgICB9LFxuICAgICAgICBpID0gW24uQ19MSU5FX0NPTU1FTlRfTU9ERSwgbi5DX0JMT0NLX0NPTU1FTlRfTU9ERV0sXG4gICAgICAgIGEgPSBbbi5RVU9URV9TVFJJTkdfTU9ERSwgbi5DX05VTUJFUl9NT0RFXSxcbiAgICAgICAgbCA9IHtcbiAgICAgICAgICBlbmQ6ICcsJyxcbiAgICAgICAgICBlbmRzV2l0aFBhcmVudDogITAsXG4gICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgY29udGFpbnM6IGEsXG4gICAgICAgICAga2V5d29yZHM6IGUsXG4gICAgICAgIH0sXG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgYmVnaW46IC9cXHsvLFxuICAgICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgICAgICAgIGJlZ2luOiAvXCIvLFxuICAgICAgICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbbi5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgICAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuLmluaGVyaXQobCwgeyBiZWdpbjogLzovIH0pLFxuICAgICAgICAgIF0uY29uY2F0KGkpLFxuICAgICAgICAgIGlsbGVnYWw6ICdcXFxcUycsXG4gICAgICAgIH0sXG4gICAgICAgIHMgPSB7XG4gICAgICAgICAgYmVnaW46ICdcXFxcWycsXG4gICAgICAgICAgZW5kOiAnXFxcXF0nLFxuICAgICAgICAgIGNvbnRhaW5zOiBbbi5pbmhlcml0KGwpXSxcbiAgICAgICAgICBpbGxlZ2FsOiAnXFxcXFMnLFxuICAgICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhLnB1c2godCwgcyksXG4gICAgICAgIGkuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICBhLnB1c2gobilcbiAgICAgICAgfSksXG4gICAgICAgIHsgbmFtZTogJ0pTT04nLCBjb250YWluczogYSwga2V5d29yZHM6IGUsIGlsbGVnYWw6ICdcXFxcUycgfVxuICAgICAgKVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAna290bGluJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICB2YXIgZSA9ICdcXFxcLihbMC05XShfKlswLTldKSopJyxcbiAgICAgIG4gPSAnWzAtOWEtZkEtRl0oXypbMC05YS1mQS1GXSkqJyxcbiAgICAgIGEgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IGAoXFxcXGIoWzAtOV0oXypbMC05XSkqKSgoJHtlfSl8XFxcXC4pP3woJHtlfSkpW2VFXVsrLV0/KFswLTldKF8qWzAtOV0pKilbZkZkRF0/XFxcXGJgLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBiZWdpbjogYFxcXFxiKFswLTldKF8qWzAtOV0pKikoKCR7ZX0pW2ZGZERdP1xcXFxifFxcXFwuKFtmRmREXVxcXFxiKT8pYCB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBgKCR7ZX0pW2ZGZERdP1xcXFxiYCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46ICdcXFxcYihbMC05XShfKlswLTldKSopW2ZGZERdXFxcXGInIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IGBcXFxcYjBbeFhdKCgke259KVxcXFwuP3woJHtufSk/XFxcXC4oJHtufSkpW3BQXVsrLV0/KFswLTldKF8qWzAtOV0pKilbZkZkRF0/XFxcXGJgLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBiZWdpbjogJ1xcXFxiKDB8WzEtOV0oXypbMC05XSkqKVtsTF0/XFxcXGInIH0sXG4gICAgICAgICAgeyBiZWdpbjogYFxcXFxiMFt4WF0oJHtufSlbbExdP1xcXFxiYCB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIwKF8qWzAtN10pKltsTF0/XFxcXGInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBiZWdpbjogJ1xcXFxiMFtiQl1bMDFdKF8qWzAxXSkqW2xMXT9cXFxcYicgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgfVxuICAgIHJldHVybiBlID0+IHtcbiAgICAgIGNvbnN0IG4gPSB7XG4gICAgICAgICAga2V5d29yZDpcbiAgICAgICAgICAgICdhYnN0cmFjdCBhcyB2YWwgdmFyIHZhcmFyZyBnZXQgc2V0IGNsYXNzIG9iamVjdCBvcGVuIHByaXZhdGUgcHJvdGVjdGVkIHB1YmxpYyBub2lubGluZSBjcm9zc2lubGluZSBkeW5hbWljIGZpbmFsIGVudW0gaWYgZWxzZSBkbyB3aGlsZSBmb3Igd2hlbiB0aHJvdyB0cnkgY2F0Y2ggZmluYWxseSBpbXBvcnQgcGFja2FnZSBpcyBpbiBmdW4gb3ZlcnJpZGUgY29tcGFuaW9uIHJlaWZpZWQgaW5saW5lIGxhdGVpbml0IGluaXQgaW50ZXJmYWNlIGFubm90YXRpb24gZGF0YSBzZWFsZWQgaW50ZXJuYWwgaW5maXggb3BlcmF0b3Igb3V0IGJ5IGNvbnN0cnVjdG9yIHN1cGVyIHRhaWxyZWMgd2hlcmUgY29uc3QgaW5uZXIgc3VzcGVuZCB0eXBlYWxpYXMgZXh0ZXJuYWwgZXhwZWN0IGFjdHVhbCcsXG4gICAgICAgICAgYnVpbHRfaW46XG4gICAgICAgICAgICAnQnl0ZSBTaG9ydCBDaGFyIEludCBMb25nIEJvb2xlYW4gRmxvYXQgRG91YmxlIFZvaWQgVW5pdCBOb3RoaW5nJyxcbiAgICAgICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBudWxsJyxcbiAgICAgICAgfSxcbiAgICAgICAgaSA9IHsgY2xhc3NOYW1lOiAnc3ltYm9sJywgYmVnaW46IGUuVU5ERVJTQ09SRV9JREVOVF9SRSArICdAJyB9LFxuICAgICAgICBzID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICAgICAgICBiZWdpbjogL1xcJFxcey8sXG4gICAgICAgICAgZW5kOiAvXFx9LyxcbiAgICAgICAgICBjb250YWluczogW2UuQ19OVU1CRVJfTU9ERV0sXG4gICAgICAgIH0sXG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgIGJlZ2luOiAnXFxcXCQnICsgZS5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICB9LFxuICAgICAgICByID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46ICdcIlwiXCInLCBlbmQ6ICdcIlwiXCIoPz1bXlwiXSknLCBjb250YWluczogW3QsIHNdIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiBcIidcIixcbiAgICAgICAgICAgICAgZW5kOiBcIidcIixcbiAgICAgICAgICAgICAgaWxsZWdhbDogL1xcbi8sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnXCInLFxuICAgICAgICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgICAgICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgICAgICAgICAgICBjb250YWluczogW2UuQkFDS1NMQVNIX0VTQ0FQRSwgdCwgc10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICAgIHMuY29udGFpbnMucHVzaChyKVxuICAgICAgY29uc3QgbCA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICdAKD86ZmlsZXxwcm9wZXJ0eXxmaWVsZHxnZXR8c2V0fHJlY2VpdmVyfHBhcmFtfHNldHBhcmFtfGRlbGVnYXRlKVxcXFxzKjooPzpcXFxccyonICtcbiAgICAgICAgICAgIGUuVU5ERVJTQ09SRV9JREVOVF9SRSArXG4gICAgICAgICAgICAnKT8nLFxuICAgICAgICB9LFxuICAgICAgICBjID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgIGJlZ2luOiAnQCcgKyBlLlVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICBjb250YWluczogW2UuaW5oZXJpdChyLCB7IGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJyB9KV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIG8gPSBhLFxuICAgICAgICBiID0gZS5DT01NRU5UKCcvXFxcXConLCAnXFxcXCovJywgeyBjb250YWluczogW2UuQ19CTE9DS19DT01NRU5UX01PREVdIH0pLFxuICAgICAgICBFID0ge1xuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3R5cGUnLCBiZWdpbjogZS5VTkRFUlNDT1JFX0lERU5UX1JFIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLywgY29udGFpbnM6IFtdIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZCA9IEVcbiAgICAgIHJldHVybiAoXG4gICAgICAgIChkLnZhcmlhbnRzWzFdLmNvbnRhaW5zID0gW0VdKSxcbiAgICAgICAgKEUudmFyaWFudHNbMV0uY29udGFpbnMgPSBbZF0pLFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0tvdGxpbicsXG4gICAgICAgICAgYWxpYXNlczogWydrdCcsICdrdHMnXSxcbiAgICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgZS5DT01NRU5UKCcvXFxcXCpcXFxcKicsICdcXFxcKi8nLCB7XG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFt7IGNsYXNzTmFtZTogJ2RvY3RhZycsIGJlZ2luOiAnQFtBLVphLXpdKycgfV0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGUuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgIGIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICBiZWdpbjogL1xcYihicmVha3xjb250aW51ZXxyZXR1cm58dGhpcylcXGIvLFxuICAgICAgICAgICAgICBzdGFydHM6IHsgY29udGFpbnM6IFt7IGNsYXNzTmFtZTogJ3N5bWJvbCcsIGJlZ2luOiAvQFxcdysvIH1dIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW4nLFxuICAgICAgICAgICAgICBlbmQ6ICdbKF18JCcsXG4gICAgICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICAgIGtleXdvcmRzOiBuLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDUsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYmVnaW46IGUuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccypcXFxcKCcsXG4gICAgICAgICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgICBjb250YWluczogW2UuVU5ERVJTQ09SRV9USVRMRV9NT0RFXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgYmVnaW46IC88LyxcbiAgICAgICAgICAgICAgICAgIGVuZDogLz4vLFxuICAgICAgICAgICAgICAgICAga2V5d29yZHM6ICdyZWlmaWVkJyxcbiAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICAgICAgZW5kc1BhcmVudDogITAsXG4gICAgICAgICAgICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogLzovLFxuICAgICAgICAgICAgICAgICAgICAgIGVuZDogL1s9LFxcL10vLFxuICAgICAgICAgICAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluczogW0UsIGUuQ19MSU5FX0NPTU1FTlRfTU9ERSwgYl0sXG4gICAgICAgICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgICAgICAgIGIsXG4gICAgICAgICAgICAgICAgICAgIGwsXG4gICAgICAgICAgICAgICAgICAgIGMsXG4gICAgICAgICAgICAgICAgICAgIHIsXG4gICAgICAgICAgICAgICAgICAgIGUuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlIHRyYWl0JyxcbiAgICAgICAgICAgICAgZW5kOiAvWzpcXHsoXXwkLyxcbiAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICAgIGlsbGVnYWw6ICdleHRlbmRzIGltcGxlbWVudHMnLFxuICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6XG4gICAgICAgICAgICAgICAgICAgICdwdWJsaWMgcHJvdGVjdGVkIGludGVybmFsIHByaXZhdGUgY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZS5VTkRFUlNDT1JFX1RJVExFX01PREUsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICBiZWdpbjogLzwvLFxuICAgICAgICAgICAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAvWyw6XVxccyovLFxuICAgICAgICAgICAgICAgICAgZW5kOiAvWzxcXCgsXXwkLyxcbiAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogITAsXG4gICAgICAgICAgICAgICAgICByZXR1cm5FbmQ6ICEwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbCxcbiAgICAgICAgICAgICAgICBjLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgICBiZWdpbjogJ14jIS91c3IvYmluL2VudicsXG4gICAgICAgICAgICAgIGVuZDogJyQnLFxuICAgICAgICAgICAgICBpbGxlZ2FsOiAnXFxuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvLFxuICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ2xlc3MnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIGNvbnN0IGUgPSBbXG4gICAgICAgICdhJyxcbiAgICAgICAgJ2FiYnInLFxuICAgICAgICAnYWRkcmVzcycsXG4gICAgICAgICdhcnRpY2xlJyxcbiAgICAgICAgJ2FzaWRlJyxcbiAgICAgICAgJ2F1ZGlvJyxcbiAgICAgICAgJ2InLFxuICAgICAgICAnYmxvY2txdW90ZScsXG4gICAgICAgICdib2R5JyxcbiAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICdjYW52YXMnLFxuICAgICAgICAnY2FwdGlvbicsXG4gICAgICAgICdjaXRlJyxcbiAgICAgICAgJ2NvZGUnLFxuICAgICAgICAnZGQnLFxuICAgICAgICAnZGVsJyxcbiAgICAgICAgJ2RldGFpbHMnLFxuICAgICAgICAnZGZuJyxcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICdkbCcsXG4gICAgICAgICdkdCcsXG4gICAgICAgICdlbScsXG4gICAgICAgICdmaWVsZHNldCcsXG4gICAgICAgICdmaWdjYXB0aW9uJyxcbiAgICAgICAgJ2ZpZ3VyZScsXG4gICAgICAgICdmb290ZXInLFxuICAgICAgICAnZm9ybScsXG4gICAgICAgICdoMScsXG4gICAgICAgICdoMicsXG4gICAgICAgICdoMycsXG4gICAgICAgICdoNCcsXG4gICAgICAgICdoNScsXG4gICAgICAgICdoNicsXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAnaGdyb3VwJyxcbiAgICAgICAgJ2h0bWwnLFxuICAgICAgICAnaScsXG4gICAgICAgICdpZnJhbWUnLFxuICAgICAgICAnaW1nJyxcbiAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgJ2lucycsXG4gICAgICAgICdrYmQnLFxuICAgICAgICAnbGFiZWwnLFxuICAgICAgICAnbGVnZW5kJyxcbiAgICAgICAgJ2xpJyxcbiAgICAgICAgJ21haW4nLFxuICAgICAgICAnbWFyaycsXG4gICAgICAgICdtZW51JyxcbiAgICAgICAgJ25hdicsXG4gICAgICAgICdvYmplY3QnLFxuICAgICAgICAnb2wnLFxuICAgICAgICAncCcsXG4gICAgICAgICdxJyxcbiAgICAgICAgJ3F1b3RlJyxcbiAgICAgICAgJ3NhbXAnLFxuICAgICAgICAnc2VjdGlvbicsXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICdzdW1tYXJ5JyxcbiAgICAgICAgJ3N1cCcsXG4gICAgICAgICd0YWJsZScsXG4gICAgICAgICd0Ym9keScsXG4gICAgICAgICd0ZCcsXG4gICAgICAgICd0ZXh0YXJlYScsXG4gICAgICAgICd0Zm9vdCcsXG4gICAgICAgICd0aCcsXG4gICAgICAgICd0aGVhZCcsXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgJ3RyJyxcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgJ3ZhcicsXG4gICAgICAgICd2aWRlbycsXG4gICAgICBdLFxuICAgICAgdCA9IFtcbiAgICAgICAgJ2FueS1ob3ZlcicsXG4gICAgICAgICdhbnktcG9pbnRlcicsXG4gICAgICAgICdhc3BlY3QtcmF0aW8nLFxuICAgICAgICAnY29sb3InLFxuICAgICAgICAnY29sb3ItZ2FtdXQnLFxuICAgICAgICAnY29sb3ItaW5kZXgnLFxuICAgICAgICAnZGV2aWNlLWFzcGVjdC1yYXRpbycsXG4gICAgICAgICdkZXZpY2UtaGVpZ2h0JyxcbiAgICAgICAgJ2RldmljZS13aWR0aCcsXG4gICAgICAgICdkaXNwbGF5LW1vZGUnLFxuICAgICAgICAnZm9yY2VkLWNvbG9ycycsXG4gICAgICAgICdncmlkJyxcbiAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICdob3ZlcicsXG4gICAgICAgICdpbnZlcnRlZC1jb2xvcnMnLFxuICAgICAgICAnbW9ub2Nocm9tZScsXG4gICAgICAgICdvcmllbnRhdGlvbicsXG4gICAgICAgICdvdmVyZmxvdy1ibG9jaycsXG4gICAgICAgICdvdmVyZmxvdy1pbmxpbmUnLFxuICAgICAgICAncG9pbnRlcicsXG4gICAgICAgICdwcmVmZXJzLWNvbG9yLXNjaGVtZScsXG4gICAgICAgICdwcmVmZXJzLWNvbnRyYXN0JyxcbiAgICAgICAgJ3ByZWZlcnMtcmVkdWNlZC1tb3Rpb24nLFxuICAgICAgICAncHJlZmVycy1yZWR1Y2VkLXRyYW5zcGFyZW5jeScsXG4gICAgICAgICdyZXNvbHV0aW9uJyxcbiAgICAgICAgJ3NjYW4nLFxuICAgICAgICAnc2NyaXB0aW5nJyxcbiAgICAgICAgJ3VwZGF0ZScsXG4gICAgICAgICd3aWR0aCcsXG4gICAgICAgICdtaW4td2lkdGgnLFxuICAgICAgICAnbWF4LXdpZHRoJyxcbiAgICAgICAgJ21pbi1oZWlnaHQnLFxuICAgICAgICAnbWF4LWhlaWdodCcsXG4gICAgICBdLFxuICAgICAgaSA9IFtcbiAgICAgICAgJ2FjdGl2ZScsXG4gICAgICAgICdhbnktbGluaycsXG4gICAgICAgICdibGFuaycsXG4gICAgICAgICdjaGVja2VkJyxcbiAgICAgICAgJ2N1cnJlbnQnLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICdkZWZpbmVkJyxcbiAgICAgICAgJ2RpcicsXG4gICAgICAgICdkaXNhYmxlZCcsXG4gICAgICAgICdkcm9wJyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VuYWJsZWQnLFxuICAgICAgICAnZmlyc3QnLFxuICAgICAgICAnZmlyc3QtY2hpbGQnLFxuICAgICAgICAnZmlyc3Qtb2YtdHlwZScsXG4gICAgICAgICdmdWxsc2NyZWVuJyxcbiAgICAgICAgJ2Z1dHVyZScsXG4gICAgICAgICdmb2N1cycsXG4gICAgICAgICdmb2N1cy12aXNpYmxlJyxcbiAgICAgICAgJ2ZvY3VzLXdpdGhpbicsXG4gICAgICAgICdoYXMnLFxuICAgICAgICAnaG9zdCcsXG4gICAgICAgICdob3N0LWNvbnRleHQnLFxuICAgICAgICAnaG92ZXInLFxuICAgICAgICAnaW5kZXRlcm1pbmF0ZScsXG4gICAgICAgICdpbi1yYW5nZScsXG4gICAgICAgICdpbnZhbGlkJyxcbiAgICAgICAgJ2lzJyxcbiAgICAgICAgJ2xhbmcnLFxuICAgICAgICAnbGFzdC1jaGlsZCcsXG4gICAgICAgICdsYXN0LW9mLXR5cGUnLFxuICAgICAgICAnbGVmdCcsXG4gICAgICAgICdsaW5rJyxcbiAgICAgICAgJ2xvY2FsLWxpbmsnLFxuICAgICAgICAnbm90JyxcbiAgICAgICAgJ250aC1jaGlsZCcsXG4gICAgICAgICdudGgtY29sJyxcbiAgICAgICAgJ250aC1sYXN0LWNoaWxkJyxcbiAgICAgICAgJ250aC1sYXN0LWNvbCcsXG4gICAgICAgICdudGgtbGFzdC1vZi10eXBlJyxcbiAgICAgICAgJ250aC1vZi10eXBlJyxcbiAgICAgICAgJ29ubHktY2hpbGQnLFxuICAgICAgICAnb25seS1vZi10eXBlJyxcbiAgICAgICAgJ29wdGlvbmFsJyxcbiAgICAgICAgJ291dC1vZi1yYW5nZScsXG4gICAgICAgICdwYXN0JyxcbiAgICAgICAgJ3BsYWNlaG9sZGVyLXNob3duJyxcbiAgICAgICAgJ3JlYWQtb25seScsXG4gICAgICAgICdyZWFkLXdyaXRlJyxcbiAgICAgICAgJ3JlcXVpcmVkJyxcbiAgICAgICAgJ3JpZ2h0JyxcbiAgICAgICAgJ3Jvb3QnLFxuICAgICAgICAnc2NvcGUnLFxuICAgICAgICAndGFyZ2V0JyxcbiAgICAgICAgJ3RhcmdldC13aXRoaW4nLFxuICAgICAgICAndXNlci1pbnZhbGlkJyxcbiAgICAgICAgJ3ZhbGlkJyxcbiAgICAgICAgJ3Zpc2l0ZWQnLFxuICAgICAgICAnd2hlcmUnLFxuICAgICAgXSxcbiAgICAgIG8gPSBbXG4gICAgICAgICdhZnRlcicsXG4gICAgICAgICdiYWNrZHJvcCcsXG4gICAgICAgICdiZWZvcmUnLFxuICAgICAgICAnY3VlJyxcbiAgICAgICAgJ2N1ZS1yZWdpb24nLFxuICAgICAgICAnZmlyc3QtbGV0dGVyJyxcbiAgICAgICAgJ2ZpcnN0LWxpbmUnLFxuICAgICAgICAnZ3JhbW1hci1lcnJvcicsXG4gICAgICAgICdtYXJrZXInLFxuICAgICAgICAncGFydCcsXG4gICAgICAgICdwbGFjZWhvbGRlcicsXG4gICAgICAgICdzZWxlY3Rpb24nLFxuICAgICAgICAnc2xvdHRlZCcsXG4gICAgICAgICdzcGVsbGluZy1lcnJvcicsXG4gICAgICBdLFxuICAgICAgbiA9IFtcbiAgICAgICAgJ2FsaWduLWNvbnRlbnQnLFxuICAgICAgICAnYWxpZ24taXRlbXMnLFxuICAgICAgICAnYWxpZ24tc2VsZicsXG4gICAgICAgICdhbmltYXRpb24nLFxuICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JyxcbiAgICAgICAgJ2FuaW1hdGlvbi1kaXJlY3Rpb24nLFxuICAgICAgICAnYW5pbWF0aW9uLWR1cmF0aW9uJyxcbiAgICAgICAgJ2FuaW1hdGlvbi1maWxsLW1vZGUnLFxuICAgICAgICAnYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCcsXG4gICAgICAgICdhbmltYXRpb24tbmFtZScsXG4gICAgICAgICdhbmltYXRpb24tcGxheS1zdGF0ZScsXG4gICAgICAgICdhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uJyxcbiAgICAgICAgJ2F1dG8nLFxuICAgICAgICAnYmFja2ZhY2UtdmlzaWJpbGl0eScsXG4gICAgICAgICdiYWNrZ3JvdW5kJyxcbiAgICAgICAgJ2JhY2tncm91bmQtYXR0YWNobWVudCcsXG4gICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnLFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcicsXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJyxcbiAgICAgICAgJ2JhY2tncm91bmQtb3JpZ2luJyxcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nLFxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnLFxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJyxcbiAgICAgICAgJ2JvcmRlcicsXG4gICAgICAgICdib3JkZXItYm90dG9tJyxcbiAgICAgICAgJ2JvcmRlci1ib3R0b20tY29sb3InLFxuICAgICAgICAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycsXG4gICAgICAgICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsXG4gICAgICAgICdib3JkZXItYm90dG9tLXN0eWxlJyxcbiAgICAgICAgJ2JvcmRlci1ib3R0b20td2lkdGgnLFxuICAgICAgICAnYm9yZGVyLWNvbGxhcHNlJyxcbiAgICAgICAgJ2JvcmRlci1jb2xvcicsXG4gICAgICAgICdib3JkZXItaW1hZ2UnLFxuICAgICAgICAnYm9yZGVyLWltYWdlLW91dHNldCcsXG4gICAgICAgICdib3JkZXItaW1hZ2UtcmVwZWF0JyxcbiAgICAgICAgJ2JvcmRlci1pbWFnZS1zbGljZScsXG4gICAgICAgICdib3JkZXItaW1hZ2Utc291cmNlJyxcbiAgICAgICAgJ2JvcmRlci1pbWFnZS13aWR0aCcsXG4gICAgICAgICdib3JkZXItbGVmdCcsXG4gICAgICAgICdib3JkZXItbGVmdC1jb2xvcicsXG4gICAgICAgICdib3JkZXItbGVmdC1zdHlsZScsXG4gICAgICAgICdib3JkZXItbGVmdC13aWR0aCcsXG4gICAgICAgICdib3JkZXItcmFkaXVzJyxcbiAgICAgICAgJ2JvcmRlci1yaWdodCcsXG4gICAgICAgICdib3JkZXItcmlnaHQtY29sb3InLFxuICAgICAgICAnYm9yZGVyLXJpZ2h0LXN0eWxlJyxcbiAgICAgICAgJ2JvcmRlci1yaWdodC13aWR0aCcsXG4gICAgICAgICdib3JkZXItc3BhY2luZycsXG4gICAgICAgICdib3JkZXItc3R5bGUnLFxuICAgICAgICAnYm9yZGVyLXRvcCcsXG4gICAgICAgICdib3JkZXItdG9wLWNvbG9yJyxcbiAgICAgICAgJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLFxuICAgICAgICAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnLFxuICAgICAgICAnYm9yZGVyLXRvcC1zdHlsZScsXG4gICAgICAgICdib3JkZXItdG9wLXdpZHRoJyxcbiAgICAgICAgJ2JvcmRlci13aWR0aCcsXG4gICAgICAgICdib3R0b20nLFxuICAgICAgICAnYm94LWRlY29yYXRpb24tYnJlYWsnLFxuICAgICAgICAnYm94LXNoYWRvdycsXG4gICAgICAgICdib3gtc2l6aW5nJyxcbiAgICAgICAgJ2JyZWFrLWFmdGVyJyxcbiAgICAgICAgJ2JyZWFrLWJlZm9yZScsXG4gICAgICAgICdicmVhay1pbnNpZGUnLFxuICAgICAgICAnY2FwdGlvbi1zaWRlJyxcbiAgICAgICAgJ2NsZWFyJyxcbiAgICAgICAgJ2NsaXAnLFxuICAgICAgICAnY2xpcC1wYXRoJyxcbiAgICAgICAgJ2NvbG9yJyxcbiAgICAgICAgJ2NvbHVtbi1jb3VudCcsXG4gICAgICAgICdjb2x1bW4tZmlsbCcsXG4gICAgICAgICdjb2x1bW4tZ2FwJyxcbiAgICAgICAgJ2NvbHVtbi1ydWxlJyxcbiAgICAgICAgJ2NvbHVtbi1ydWxlLWNvbG9yJyxcbiAgICAgICAgJ2NvbHVtbi1ydWxlLXN0eWxlJyxcbiAgICAgICAgJ2NvbHVtbi1ydWxlLXdpZHRoJyxcbiAgICAgICAgJ2NvbHVtbi1zcGFuJyxcbiAgICAgICAgJ2NvbHVtbi13aWR0aCcsXG4gICAgICAgICdjb2x1bW5zJyxcbiAgICAgICAgJ2NvbnRlbnQnLFxuICAgICAgICAnY291bnRlci1pbmNyZW1lbnQnLFxuICAgICAgICAnY291bnRlci1yZXNldCcsXG4gICAgICAgICdjdXJzb3InLFxuICAgICAgICAnZGlyZWN0aW9uJyxcbiAgICAgICAgJ2Rpc3BsYXknLFxuICAgICAgICAnZW1wdHktY2VsbHMnLFxuICAgICAgICAnZmlsdGVyJyxcbiAgICAgICAgJ2ZsZXgnLFxuICAgICAgICAnZmxleC1iYXNpcycsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbicsXG4gICAgICAgICdmbGV4LWZsb3cnLFxuICAgICAgICAnZmxleC1ncm93JyxcbiAgICAgICAgJ2ZsZXgtc2hyaW5rJyxcbiAgICAgICAgJ2ZsZXgtd3JhcCcsXG4gICAgICAgICdmbG9hdCcsXG4gICAgICAgICdmb250JyxcbiAgICAgICAgJ2ZvbnQtZGlzcGxheScsXG4gICAgICAgICdmb250LWZhbWlseScsXG4gICAgICAgICdmb250LWZlYXR1cmUtc2V0dGluZ3MnLFxuICAgICAgICAnZm9udC1rZXJuaW5nJyxcbiAgICAgICAgJ2ZvbnQtbGFuZ3VhZ2Utb3ZlcnJpZGUnLFxuICAgICAgICAnZm9udC1zaXplJyxcbiAgICAgICAgJ2ZvbnQtc2l6ZS1hZGp1c3QnLFxuICAgICAgICAnZm9udC1zbW9vdGhpbmcnLFxuICAgICAgICAnZm9udC1zdHJldGNoJyxcbiAgICAgICAgJ2ZvbnQtc3R5bGUnLFxuICAgICAgICAnZm9udC12YXJpYW50JyxcbiAgICAgICAgJ2ZvbnQtdmFyaWFudC1saWdhdHVyZXMnLFxuICAgICAgICAnZm9udC12YXJpYXRpb24tc2V0dGluZ3MnLFxuICAgICAgICAnZm9udC13ZWlnaHQnLFxuICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgJ2h5cGhlbnMnLFxuICAgICAgICAnaWNvbicsXG4gICAgICAgICdpbWFnZS1vcmllbnRhdGlvbicsXG4gICAgICAgICdpbWFnZS1yZW5kZXJpbmcnLFxuICAgICAgICAnaW1hZ2UtcmVzb2x1dGlvbicsXG4gICAgICAgICdpbWUtbW9kZScsXG4gICAgICAgICdpbmhlcml0JyxcbiAgICAgICAgJ2luaXRpYWwnLFxuICAgICAgICAnanVzdGlmeS1jb250ZW50JyxcbiAgICAgICAgJ2xlZnQnLFxuICAgICAgICAnbGV0dGVyLXNwYWNpbmcnLFxuICAgICAgICAnbGluZS1oZWlnaHQnLFxuICAgICAgICAnbGlzdC1zdHlsZScsXG4gICAgICAgICdsaXN0LXN0eWxlLWltYWdlJyxcbiAgICAgICAgJ2xpc3Qtc3R5bGUtcG9zaXRpb24nLFxuICAgICAgICAnbGlzdC1zdHlsZS10eXBlJyxcbiAgICAgICAgJ21hcmdpbicsXG4gICAgICAgICdtYXJnaW4tYm90dG9tJyxcbiAgICAgICAgJ21hcmdpbi1sZWZ0JyxcbiAgICAgICAgJ21hcmdpbi1yaWdodCcsXG4gICAgICAgICdtYXJnaW4tdG9wJyxcbiAgICAgICAgJ21hcmtzJyxcbiAgICAgICAgJ21hc2snLFxuICAgICAgICAnbWF4LWhlaWdodCcsXG4gICAgICAgICdtYXgtd2lkdGgnLFxuICAgICAgICAnbWluLWhlaWdodCcsXG4gICAgICAgICdtaW4td2lkdGgnLFxuICAgICAgICAnbmF2LWRvd24nLFxuICAgICAgICAnbmF2LWluZGV4JyxcbiAgICAgICAgJ25hdi1sZWZ0JyxcbiAgICAgICAgJ25hdi1yaWdodCcsXG4gICAgICAgICduYXYtdXAnLFxuICAgICAgICAnbm9uZScsXG4gICAgICAgICdub3JtYWwnLFxuICAgICAgICAnb2JqZWN0LWZpdCcsXG4gICAgICAgICdvYmplY3QtcG9zaXRpb24nLFxuICAgICAgICAnb3BhY2l0eScsXG4gICAgICAgICdvcmRlcicsXG4gICAgICAgICdvcnBoYW5zJyxcbiAgICAgICAgJ291dGxpbmUnLFxuICAgICAgICAnb3V0bGluZS1jb2xvcicsXG4gICAgICAgICdvdXRsaW5lLW9mZnNldCcsXG4gICAgICAgICdvdXRsaW5lLXN0eWxlJyxcbiAgICAgICAgJ291dGxpbmUtd2lkdGgnLFxuICAgICAgICAnb3ZlcmZsb3cnLFxuICAgICAgICAnb3ZlcmZsb3ctd3JhcCcsXG4gICAgICAgICdvdmVyZmxvdy14JyxcbiAgICAgICAgJ292ZXJmbG93LXknLFxuICAgICAgICAncGFkZGluZycsXG4gICAgICAgICdwYWRkaW5nLWJvdHRvbScsXG4gICAgICAgICdwYWRkaW5nLWxlZnQnLFxuICAgICAgICAncGFkZGluZy1yaWdodCcsXG4gICAgICAgICdwYWRkaW5nLXRvcCcsXG4gICAgICAgICdwYWdlLWJyZWFrLWFmdGVyJyxcbiAgICAgICAgJ3BhZ2UtYnJlYWstYmVmb3JlJyxcbiAgICAgICAgJ3BhZ2UtYnJlYWstaW5zaWRlJyxcbiAgICAgICAgJ3BlcnNwZWN0aXZlJyxcbiAgICAgICAgJ3BlcnNwZWN0aXZlLW9yaWdpbicsXG4gICAgICAgICdwb2ludGVyLWV2ZW50cycsXG4gICAgICAgICdwb3NpdGlvbicsXG4gICAgICAgICdxdW90ZXMnLFxuICAgICAgICAncmVzaXplJyxcbiAgICAgICAgJ3JpZ2h0JyxcbiAgICAgICAgJ3NyYycsXG4gICAgICAgICd0YWItc2l6ZScsXG4gICAgICAgICd0YWJsZS1sYXlvdXQnLFxuICAgICAgICAndGV4dC1hbGlnbicsXG4gICAgICAgICd0ZXh0LWFsaWduLWxhc3QnLFxuICAgICAgICAndGV4dC1kZWNvcmF0aW9uJyxcbiAgICAgICAgJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicsXG4gICAgICAgICd0ZXh0LWRlY29yYXRpb24tbGluZScsXG4gICAgICAgICd0ZXh0LWRlY29yYXRpb24tc3R5bGUnLFxuICAgICAgICAndGV4dC1pbmRlbnQnLFxuICAgICAgICAndGV4dC1vdmVyZmxvdycsXG4gICAgICAgICd0ZXh0LXJlbmRlcmluZycsXG4gICAgICAgICd0ZXh0LXNoYWRvdycsXG4gICAgICAgICd0ZXh0LXRyYW5zZm9ybScsXG4gICAgICAgICd0ZXh0LXVuZGVybGluZS1wb3NpdGlvbicsXG4gICAgICAgICd0b3AnLFxuICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nLFxuICAgICAgICAndHJhbnNmb3JtLXN0eWxlJyxcbiAgICAgICAgJ3RyYW5zaXRpb24nLFxuICAgICAgICAndHJhbnNpdGlvbi1kZWxheScsXG4gICAgICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJyxcbiAgICAgICAgJ3RyYW5zaXRpb24tcHJvcGVydHknLFxuICAgICAgICAndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nLFxuICAgICAgICAndW5pY29kZS1iaWRpJyxcbiAgICAgICAgJ3ZlcnRpY2FsLWFsaWduJyxcbiAgICAgICAgJ3Zpc2liaWxpdHknLFxuICAgICAgICAnd2hpdGUtc3BhY2UnLFxuICAgICAgICAnd2lkb3dzJyxcbiAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgJ3dvcmQtYnJlYWsnLFxuICAgICAgICAnd29yZC1zcGFjaW5nJyxcbiAgICAgICAgJ3dvcmQtd3JhcCcsXG4gICAgICAgICd6LWluZGV4JyxcbiAgICAgIF0ucmV2ZXJzZSgpLFxuICAgICAgciA9IGkuY29uY2F0KG8pXG4gICAgcmV0dXJuIGEgPT4ge1xuICAgICAgY29uc3QgcyA9IChlID0+ICh7XG4gICAgICAgICAgSU1QT1JUQU5UOiB7IGNsYXNzTmFtZTogJ21ldGEnLCBiZWdpbjogJyFpbXBvcnRhbnQnIH0sXG4gICAgICAgICAgSEVYQ09MT1I6IHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICBiZWdpbjogJyMoW2EtZkEtRjAtOV17Nn18W2EtZkEtRjAtOV17M30pJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIEFUVFJJQlVURV9TRUxFQ1RPUl9NT0RFOiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1hdHRyJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFxbLyxcbiAgICAgICAgICAgIGVuZDogL1xcXS8sXG4gICAgICAgICAgICBpbGxlZ2FsOiAnJCcsXG4gICAgICAgICAgICBjb250YWluczogW2UuQVBPU19TVFJJTkdfTU9ERSwgZS5RVU9URV9TVFJJTkdfTU9ERV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSkpKGEpLFxuICAgICAgICBsID0gcixcbiAgICAgICAgZCA9ICcoW1xcXFx3LV0rfEBcXFxce1tcXFxcdy1dK1xcXFx9KScsXG4gICAgICAgIGMgPSBbXSxcbiAgICAgICAgZyA9IFtdLFxuICAgICAgICBiID0gZSA9PiAoeyBjbGFzc05hbWU6ICdzdHJpbmcnLCBiZWdpbjogJ34/JyArIGUgKyAnLio/JyArIGUgfSksXG4gICAgICAgIG0gPSAoZSwgdCwgaSkgPT4gKHsgY2xhc3NOYW1lOiBlLCBiZWdpbjogdCwgcmVsZXZhbmNlOiBpIH0pLFxuICAgICAgICB1ID0ge1xuICAgICAgICAgICRwYXR0ZXJuOiAvW2Etei1dKy8sXG4gICAgICAgICAga2V5d29yZDogJ2FuZCBvciBub3Qgb25seScsXG4gICAgICAgICAgYXR0cmlidXRlOiB0LmpvaW4oJyAnKSxcbiAgICAgICAgfSxcbiAgICAgICAgcCA9IHtcbiAgICAgICAgICBiZWdpbjogJ1xcXFwoJyxcbiAgICAgICAgICBlbmQ6ICdcXFxcKScsXG4gICAgICAgICAgY29udGFpbnM6IGcsXG4gICAgICAgICAga2V5d29yZHM6IHUsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9XG4gICAgICBnLnB1c2goXG4gICAgICAgIGEuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgYS5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgYihcIidcIiksXG4gICAgICAgIGIoJ1wiJyksXG4gICAgICAgIGEuQ1NTX05VTUJFUl9NT0RFLFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICcodXJsfGRhdGEtdXJpKVxcXFwoJyxcbiAgICAgICAgICBzdGFydHM6IHsgY2xhc3NOYW1lOiAnc3RyaW5nJywgZW5kOiAnW1xcXFwpXFxcXG5dJywgZXhjbHVkZUVuZDogITAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcy5IRVhDT0xPUixcbiAgICAgICAgcCxcbiAgICAgICAgbSgndmFyaWFibGUnLCAnQEA/W1xcXFx3LV0rJywgMTApLFxuICAgICAgICBtKCd2YXJpYWJsZScsICdAXFxcXHtbXFxcXHctXStcXFxcfScpLFxuICAgICAgICBtKCdidWlsdF9pbicsICd+P2BbXmBdKj9gJyksXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICAgIGJlZ2luOiAnW1xcXFx3LV0rXFxcXHMqOicsXG4gICAgICAgICAgZW5kOiAnOicsXG4gICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICB9LFxuICAgICAgICBzLklNUE9SVEFOVFxuICAgICAgKVxuICAgICAgY29uc3QgZiA9IGcuY29uY2F0KHsgYmVnaW46IC9cXHsvLCBlbmQ6IC9cXH0vLCBjb250YWluczogYyB9KSxcbiAgICAgICAgaCA9IHtcbiAgICAgICAgICBiZWdpbktleXdvcmRzOiAnd2hlbicsXG4gICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6ICEwLFxuICAgICAgICAgIGNvbnRhaW5zOiBbeyBiZWdpbktleXdvcmRzOiAnYW5kIG5vdCcgfV0uY29uY2F0KGcpLFxuICAgICAgICB9LFxuICAgICAgICB3ID0ge1xuICAgICAgICAgIGJlZ2luOiBkICsgJ1xcXFxzKjonLFxuICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICBlbmQ6IC9bO31dLyxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC8tKHdlYmtpdHxtb3p8bXN8byktLyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBuLmpvaW4oJ3wnKSArICcpXFxcXGInLFxuICAgICAgICAgICAgICBlbmQ6IC8oPz06KS8sXG4gICAgICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiAhMCxcbiAgICAgICAgICAgICAgICBpbGxlZ2FsOiAnWzw9JF0nLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICBjb250YWluczogZyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgdiA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICdAKGltcG9ydHxtZWRpYXxjaGFyc2V0fGZvbnQtZmFjZXwoLVthLXpdKy0pP2tleWZyYW1lc3xzdXBwb3J0c3xkb2N1bWVudHxuYW1lc3BhY2V8cGFnZXx2aWV3cG9ydHxob3N0KVxcXFxiJyxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIGVuZDogJ1s7e31dJyxcbiAgICAgICAgICAgIGtleXdvcmRzOiB1LFxuICAgICAgICAgICAgcmV0dXJuRW5kOiAhMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHkgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAnQFtcXFxcdy1dK1xcXFxzKjonLCByZWxldmFuY2U6IDE1IH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnQFtcXFxcdy1dKycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhcnRzOiB7IGVuZDogJ1s7fV0nLCByZXR1cm5FbmQ6ICEwLCBjb250YWluczogZiB9LFxuICAgICAgICB9LFxuICAgICAgICBrID0ge1xuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnW1xcXFwuIzomXFxcXFs+XScsXG4gICAgICAgICAgICAgIGVuZDogJ1s7e31dJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiBkLCBlbmQ6IC9cXHsvIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgcmV0dXJuRW5kOiAhMCxcbiAgICAgICAgICBpbGxlZ2FsOiAnWzw9XFwnJFwiXScsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBhLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgICBhLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgaCxcbiAgICAgICAgICAgIG0oJ2tleXdvcmQnLCAnYWxsXFxcXGInKSxcbiAgICAgICAgICAgIG0oJ3ZhcmlhYmxlJywgJ0BcXFxce1tcXFxcdy1dK1xcXFx9JyksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIoJyArIGUuam9pbignfCcpICsgJylcXFxcYicsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLXRhZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbSgnc2VsZWN0b3ItdGFnJywgZCArICclPycsIDApLFxuICAgICAgICAgICAgbSgnc2VsZWN0b3ItaWQnLCAnIycgKyBkKSxcbiAgICAgICAgICAgIG0oJ3NlbGVjdG9yLWNsYXNzJywgJ1xcXFwuJyArIGQsIDApLFxuICAgICAgICAgICAgbSgnc2VsZWN0b3ItdGFnJywgJyYnLCAwKSxcbiAgICAgICAgICAgIHMuQVRUUklCVVRFX1NFTEVDVE9SX01PREUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLXBzZXVkbycsXG4gICAgICAgICAgICAgIGJlZ2luOiAnOignICsgaS5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1wc2V1ZG8nLFxuICAgICAgICAgICAgICBiZWdpbjogJzo6KCcgKyBvLmpvaW4oJ3wnKSArICcpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKScsIGNvbnRhaW5zOiBmIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAnIWltcG9ydGFudCcgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBFID0ge1xuICAgICAgICAgIGJlZ2luOiBgW1xcXFx3LV0rOig6KT8oJHtsLmpvaW4oJ3wnKX0pYCxcbiAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgY29udGFpbnM6IFtrXSxcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgYy5wdXNoKGEuQ19MSU5FX0NPTU1FTlRfTU9ERSwgYS5DX0JMT0NLX0NPTU1FTlRfTU9ERSwgdiwgeSwgRSwgdywgayksXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnTGVzcycsXG4gICAgICAgICAgY2FzZV9pbnNlbnNpdGl2ZTogITAsXG4gICAgICAgICAgaWxsZWdhbDogJ1s9PlxcJy88KCRcIl0nLFxuICAgICAgICAgIGNvbnRhaW5zOiBjLFxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdsdWEnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIHJldHVybiBlID0+IHtcbiAgICAgIGNvbnN0IHQgPSAnXFxcXFs9KlxcXFxbJyxcbiAgICAgICAgYSA9ICdcXFxcXT0qXFxcXF0nLFxuICAgICAgICBuID0geyBiZWdpbjogdCwgZW5kOiBhLCBjb250YWluczogWydzZWxmJ10gfSxcbiAgICAgICAgbyA9IFtcbiAgICAgICAgICBlLkNPTU1FTlQoJy0tKD8hXFxcXFs9KlxcXFxbKScsICckJyksXG4gICAgICAgICAgZS5DT01NRU5UKCctLVxcXFxbPSpcXFxcWycsIGEsIHsgY29udGFpbnM6IFtuXSwgcmVsZXZhbmNlOiAxMCB9KSxcbiAgICAgICAgXVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0x1YScsXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJHBhdHRlcm46IGUuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBuaWwnLFxuICAgICAgICAgIGtleXdvcmQ6XG4gICAgICAgICAgICAnYW5kIGJyZWFrIGRvIGVsc2UgZWxzZWlmIGVuZCBmb3IgZ290byBpZiBpbiBsb2NhbCBub3Qgb3IgcmVwZWF0IHJldHVybiB0aGVuIHVudGlsIHdoaWxlJyxcbiAgICAgICAgICBidWlsdF9pbjpcbiAgICAgICAgICAgICdfRyBfRU5WIF9WRVJTSU9OIF9faW5kZXggX19uZXdpbmRleCBfX21vZGUgX19jYWxsIF9fbWV0YXRhYmxlIF9fdG9zdHJpbmcgX19sZW4gX19nYyBfX2FkZCBfX3N1YiBfX211bCBfX2RpdiBfX21vZCBfX3BvdyBfX2NvbmNhdCBfX3VubSBfX2VxIF9fbHQgX19sZSBhc3NlcnQgY29sbGVjdGdhcmJhZ2UgZG9maWxlIGVycm9yIGdldGZlbnYgZ2V0bWV0YXRhYmxlIGlwYWlycyBsb2FkIGxvYWRmaWxlIGxvYWRzdHJpbmcgbW9kdWxlIG5leHQgcGFpcnMgcGNhbGwgcHJpbnQgcmF3ZXF1YWwgcmF3Z2V0IHJhd3NldCByZXF1aXJlIHNlbGVjdCBzZXRmZW52IHNldG1ldGF0YWJsZSB0b251bWJlciB0b3N0cmluZyB0eXBlIHVucGFjayB4cGNhbGwgYXJnIHNlbGYgY29yb3V0aW5lIHJlc3VtZSB5aWVsZCBzdGF0dXMgd3JhcCBjcmVhdGUgcnVubmluZyBkZWJ1ZyBnZXR1cHZhbHVlIGRlYnVnIHNldGhvb2sgZ2V0bWV0YXRhYmxlIGdldGhvb2sgc2V0bWV0YXRhYmxlIHNldGxvY2FsIHRyYWNlYmFjayBzZXRmZW52IGdldGluZm8gc2V0dXB2YWx1ZSBnZXRsb2NhbCBnZXRyZWdpc3RyeSBnZXRmZW52IGlvIGxpbmVzIHdyaXRlIGNsb3NlIGZsdXNoIG9wZW4gb3V0cHV0IHR5cGUgcmVhZCBzdGRlcnIgc3RkaW4gaW5wdXQgc3Rkb3V0IHBvcGVuIHRtcGZpbGUgbWF0aCBsb2cgbWF4IGFjb3MgaHVnZSBsZGV4cCBwaSBjb3MgdGFuaCBwb3cgZGVnIHRhbiBjb3NoIHNpbmggcmFuZG9tIHJhbmRvbXNlZWQgZnJleHAgY2VpbCBmbG9vciByYWQgYWJzIHNxcnQgbW9kZiBhc2luIG1pbiBtb2QgZm1vZCBsb2cxMCBhdGFuMiBleHAgc2luIGF0YW4gb3MgZXhpdCBzZXRsb2NhbGUgZGF0ZSBnZXRlbnYgZGlmZnRpbWUgcmVtb3ZlIHRpbWUgY2xvY2sgdG1wbmFtZSByZW5hbWUgZXhlY3V0ZSBwYWNrYWdlIHByZWxvYWQgbG9hZGxpYiBsb2FkZWQgbG9hZGVycyBjcGF0aCBjb25maWcgcGF0aCBzZWVhbGwgc3RyaW5nIHN1YiB1cHBlciBsZW4gZ2ZpbmQgcmVwIGZpbmQgbWF0Y2ggY2hhciBkdW1wIGdtYXRjaCByZXZlcnNlIGJ5dGUgZm9ybWF0IGdzdWIgbG93ZXIgdGFibGUgc2V0biBpbnNlcnQgZ2V0biBmb3JlYWNoaSBtYXhuIGZvcmVhY2ggY29uY2F0IHNvcnQgcmVtb3ZlJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IG8uY29uY2F0KFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgZW5kOiAnXFxcXCknLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgZS5pbmhlcml0KGUuVElUTEVfTU9ERSwge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnKFtfYS16QS1aXVxcXFx3KlxcXFwuKSooW19hLXpBLVpdXFxcXHcqOik/W19hLXpBLVpdXFxcXHcqJyxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXCgnLFxuICAgICAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiAhMCxcbiAgICAgICAgICAgICAgICBjb250YWluczogbyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0uY29uY2F0KG8pLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZS5DX05VTUJFUl9NT0RFLFxuICAgICAgICAgIGUuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICBlLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICBiZWdpbjogdCxcbiAgICAgICAgICAgIGVuZDogYSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbbl0sXG4gICAgICAgICAgICByZWxldmFuY2U6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSksXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdtYWtlZmlsZScsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgY29uc3QgaSA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcJFxcXFwoJyArIGUuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxcKScsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFwkW0AlPD9cXF5cXCtcXCpdLyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGEgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgICAgY29udGFpbnM6IFtlLkJBQ0tTTEFTSF9FU0NBUEUsIGldLFxuICAgICAgICB9LFxuICAgICAgICBuID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgICBiZWdpbjogL1xcJFxcKFtcXHctXStcXHMvLFxuICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgIGJ1aWx0X2luOlxuICAgICAgICAgICAgICAnc3Vic3QgcGF0c3Vic3Qgc3RyaXAgZmluZHN0cmluZyBmaWx0ZXIgZmlsdGVyLW91dCBzb3J0IHdvcmQgd29yZGxpc3QgZmlyc3R3b3JkIGxhc3R3b3JkIGRpciBub3RkaXIgc3VmZml4IGJhc2VuYW1lIGFkZHN1ZmZpeCBhZGRwcmVmaXggam9pbiB3aWxkY2FyZCByZWFscGF0aCBhYnNwYXRoIGVycm9yIHdhcm5pbmcgc2hlbGwgb3JpZ2luIGZsYXZvciBmb3JlYWNoIGlmIG9yIGFuZCBjYWxsIGV2YWwgZmlsZSB2YWx1ZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250YWluczogW2ldLFxuICAgICAgICB9LFxuICAgICAgICBzID0geyBiZWdpbjogJ14nICsgZS5VTkRFUlNDT1JFX0lERU5UX1JFICsgJ1xcXFxzKig/PVs6Kz9dPz0pJyB9LFxuICAgICAgICByID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3NlY3Rpb24nLFxuICAgICAgICAgIGJlZ2luOiAvXlteXFxzXSs6LyxcbiAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICBjb250YWluczogW2ldLFxuICAgICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnTWFrZWZpbGUnLFxuICAgICAgICBhbGlhc2VzOiBbJ21rJywgJ21haycsICdtYWtlJ10sXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJHBhdHRlcm46IC9bXFx3LV0rLyxcbiAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2RlZmluZSBlbmRlZiB1bmRlZmluZSBpZmRlZiBpZm5kZWYgaWZlcSBpZm5lcSBlbHNlIGVuZGlmIGluY2x1ZGUgLWluY2x1ZGUgc2luY2x1ZGUgb3ZlcnJpZGUgZXhwb3J0IHVuZXhwb3J0IHByaXZhdGUgdnBhdGgnLFxuICAgICAgICB9LFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGUuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICAgICAgaSxcbiAgICAgICAgICBhLFxuICAgICAgICAgIG4sXG4gICAgICAgICAgcyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXlxcLlBIT05ZOi8sXG4gICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgIGtleXdvcmRzOiB7ICRwYXR0ZXJuOiAvW1xcLlxcd10rLywgJ21ldGEta2V5d29yZCc6ICcuUEhPTlknIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByLFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAneG1sJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBmdW5jdGlvbiBlKGUpIHtcbiAgICAgIHJldHVybiBlID8gKCdzdHJpbmcnID09IHR5cGVvZiBlID8gZSA6IGUuc291cmNlKSA6IG51bGxcbiAgICB9XG4gICAgZnVuY3Rpb24gbihlKSB7XG4gICAgICByZXR1cm4gYSgnKD89JywgZSwgJyknKVxuICAgIH1cbiAgICBmdW5jdGlvbiBhKC4uLm4pIHtcbiAgICAgIHJldHVybiBuLm1hcChuID0+IGUobikpLmpvaW4oJycpXG4gICAgfVxuICAgIGZ1bmN0aW9uIHMoLi4ubikge1xuICAgICAgcmV0dXJuICcoJyArIG4ubWFwKG4gPT4gZShuKSkuam9pbignfCcpICsgJyknXG4gICAgfVxuICAgIHJldHVybiBlID0+IHtcbiAgICAgIGNvbnN0IHQgPSBhKC9bQS1aX10vLCBhKCcoJywgL1tBLVowLTlfLi1dKjovLCAnKT8nKSwgL1tBLVowLTlfLi1dKi8pLFxuICAgICAgICBpID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgICAgYmVnaW46IC8mW2Etel0rO3wmI1swLTldKzt8JiN4W2EtZjAtOV0rOy8sXG4gICAgICAgIH0sXG4gICAgICAgIHIgPSB7XG4gICAgICAgICAgYmVnaW46IC9cXHMvLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEta2V5d29yZCcsXG4gICAgICAgICAgICAgIGJlZ2luOiAvIz9bYS16X11bYS16MS05Xy1dKy8sXG4gICAgICAgICAgICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBjID0gZS5pbmhlcml0KHIsIHsgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvIH0pLFxuICAgICAgICBsID0gZS5pbmhlcml0KGUuQVBPU19TVFJJTkdfTU9ERSwge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJyxcbiAgICAgICAgfSksXG4gICAgICAgIGcgPSBlLmluaGVyaXQoZS5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJyxcbiAgICAgICAgfSksXG4gICAgICAgIG0gPSB7XG4gICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6ICEwLFxuICAgICAgICAgIGlsbGVnYWw6IC88LyxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnYXR0cicsIGJlZ2luOiAvW0EtWmEtejAtOS5fOi1dKy8sIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogLz1cXHMqLyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICBlbmRzUGFyZW50OiAhMCxcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgYmVnaW46IC9cIi8sIGVuZDogL1wiLywgY29udGFpbnM6IFtpXSB9LFxuICAgICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvJy8sIGVuZDogLycvLCBjb250YWluczogW2ldIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgYmVnaW46IC9bXlxcc1wiJz08PmBdKy8gfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0hUTUwsIFhNTCcsXG4gICAgICAgIGFsaWFzZXM6IFtcbiAgICAgICAgICAnaHRtbCcsXG4gICAgICAgICAgJ3hodG1sJyxcbiAgICAgICAgICAncnNzJyxcbiAgICAgICAgICAnYXRvbScsXG4gICAgICAgICAgJ3hqYicsXG4gICAgICAgICAgJ3hzZCcsXG4gICAgICAgICAgJ3hzbCcsXG4gICAgICAgICAgJ3BsaXN0JyxcbiAgICAgICAgICAnd3NmJyxcbiAgICAgICAgICAnc3ZnJyxcbiAgICAgICAgXSxcbiAgICAgICAgY2FzZV9pbnNlbnNpdGl2ZTogITAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICBiZWdpbjogLzwhW2Etel0vLFxuICAgICAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgZyxcbiAgICAgICAgICAgICAgbCxcbiAgICAgICAgICAgICAgYyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvXFxbLyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9cXF0vLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogLzwhW2Etel0vLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbnM6IFtyLCBjLCBnLCBsXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlLkNPTU1FTlQoLzwhLS0vLCAvLS0+Lywge1xuICAgICAgICAgICAgcmVsZXZhbmNlOiAxMCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7IGJlZ2luOiAvPCFcXFtDREFUQVxcWy8sIGVuZDogL1xcXVxcXT4vLCByZWxldmFuY2U6IDEwIH0sXG4gICAgICAgICAgaSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgIGJlZ2luOiAvPFxcP3htbC8sXG4gICAgICAgICAgICBlbmQ6IC9cXD8+LyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICAgICAgYmVnaW46IC88c3R5bGUoPz1cXHN8PikvLFxuICAgICAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgICAgICBrZXl3b3JkczogeyBuYW1lOiAnc3R5bGUnIH0sXG4gICAgICAgICAgICBjb250YWluczogW21dLFxuICAgICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAgIGVuZDogLzxcXC9zdHlsZT4vLFxuICAgICAgICAgICAgICByZXR1cm5FbmQ6ICEwLFxuICAgICAgICAgICAgICBzdWJMYW5ndWFnZTogWydjc3MnLCAneG1sJ10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgICAgIGJlZ2luOiAvPHNjcmlwdCg/PVxcc3w+KS8sXG4gICAgICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAgICAgIGtleXdvcmRzOiB7IG5hbWU6ICdzY3JpcHQnIH0sXG4gICAgICAgICAgICBjb250YWluczogW21dLFxuICAgICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAgIGVuZDogLzxcXC9zY3JpcHQ+LyxcbiAgICAgICAgICAgICAgcmV0dXJuRW5kOiAhMCxcbiAgICAgICAgICAgICAgc3ViTGFuZ3VhZ2U6IFsnamF2YXNjcmlwdCcsICdoYW5kbGViYXJzJywgJ3htbCddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgICAgICAgICBiZWdpbjogLzw+fDxcXC8+LyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgICAgICAgICBiZWdpbjogYSgvPC8sIG4oYSh0LCBzKC9cXC8+LywgLz4vLCAvXFxzLykpKSksXG4gICAgICAgICAgICBlbmQ6IC9cXC8/Pi8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ25hbWUnLCBiZWdpbjogdCwgcmVsZXZhbmNlOiAwLCBzdGFydHM6IG0gfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICAgICAgYmVnaW46IGEoLzxcXC8vLCBuKGEodCwgLz4vKSkpLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICduYW1lJywgYmVnaW46IHQsIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAvPi8sIHJlbGV2YW5jZTogMCwgZW5kc1BhcmVudDogITAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ21hcmtkb3duJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBmdW5jdGlvbiBuKC4uLm4pIHtcbiAgICAgIHJldHVybiBuXG4gICAgICAgIC5tYXAobiA9PiB7XG4gICAgICAgICAgcmV0dXJuIChlID0gbikgPyAoJ3N0cmluZycgPT0gdHlwZW9mIGUgPyBlIDogZS5zb3VyY2UpIDogbnVsbFxuICAgICAgICAgIHZhciBlXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKVxuICAgIH1cbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICBjb25zdCBhID0ge1xuICAgICAgICAgIGJlZ2luOiAvPFxcLz9bQS1aYS16X10vLFxuICAgICAgICAgIGVuZDogJz4nLFxuICAgICAgICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGkgPSB7XG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXFsuKz9cXF1cXFsuKj9cXF0vLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICAgL1xcWy4rP1xcXVxcKCgoZGF0YXxqYXZhc2NyaXB0fG1haWx0byk6fCg/Omh0dHB8ZnRwKXM/OlxcL1xcLykuKj9cXCkvLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogbigvXFxbLis/XFxdXFwoLywgL1tBLVphLXpdW0EtWmEtejAtOSsuLV0qLywgLzpcXC9cXC8uKj9cXCkvKSxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXFsuKz9cXF1cXChbLi8/JiNdLio/XFwpLywgcmVsZXZhbmNlOiAxIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXFxbLis/XFxdXFwoLio/XFwpLyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXFsnLFxuICAgICAgICAgICAgICBlbmQ6ICdcXFxcXScsXG4gICAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogITAsXG4gICAgICAgICAgICAgIHJldHVybkVuZDogITAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdsaW5rJyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxdXFxcXCgnLFxuICAgICAgICAgICAgICBlbmQ6ICdcXFxcKScsXG4gICAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogITAsXG4gICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxdXFxcXFsnLFxuICAgICAgICAgICAgICBlbmQ6ICdcXFxcXScsXG4gICAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogITAsXG4gICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBzID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cm9uZycsXG4gICAgICAgICAgY29udGFpbnM6IFtdLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAvX3syfS8sIGVuZDogL197Mn0vIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFwqezJ9LywgZW5kOiAvXFwqezJ9LyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnZW1waGFzaXMnLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXSxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBiZWdpbjogL1xcKig/IVxcKikvLCBlbmQ6IC9cXCovIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXyg/IV8pLyxcbiAgICAgICAgICAgICAgZW5kOiAvXy8sXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgcy5jb250YWlucy5wdXNoKGMpLCBjLmNvbnRhaW5zLnB1c2gocylcbiAgICAgIGxldCB0ID0gW2EsIGldXG4gICAgICByZXR1cm4gKFxuICAgICAgICAocy5jb250YWlucyA9IHMuY29udGFpbnMuY29uY2F0KHQpKSxcbiAgICAgICAgKGMuY29udGFpbnMgPSBjLmNvbnRhaW5zLmNvbmNhdCh0KSksXG4gICAgICAgICh0ID0gdC5jb25jYXQocywgYykpLFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ01hcmtkb3duJyxcbiAgICAgICAgICBhbGlhc2VzOiBbJ21kJywgJ21rZG93bicsICdta2QnXSxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzZWN0aW9uJyxcbiAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICB7IGJlZ2luOiAnXiN7MSw2fScsIGVuZDogJyQnLCBjb250YWluczogdCB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAnKD89Xi4rP1xcXFxuWz0tXXsyLH0kKScsXG4gICAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgICB7IGJlZ2luOiAnXls9LV0qJCcgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBiZWdpbjogJ14nLCBlbmQ6ICdcXFxcbicsIGNvbnRhaW5zOiB0IH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYnVsbGV0JyxcbiAgICAgICAgICAgICAgYmVnaW46ICdeWyBcXHRdKihbKistXXwoXFxcXGQrXFxcXC4pKSg/PVxcXFxzKyknLFxuICAgICAgICAgICAgICBlbmQ6ICdcXFxccysnLFxuICAgICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzLFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncXVvdGUnLCBiZWdpbjogJ14+XFxcXHMrJywgY29udGFpbnM6IHQsIGVuZDogJyQnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NvZGUnLFxuICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgIHsgYmVnaW46ICcoYHszLH0pW15gXSgufFxcXFxuKSo/XFxcXDFgKlsgXSonIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYmVnaW46ICcofnszLH0pW15+XSgufFxcXFxuKSo/XFxcXDF+KlsgXSonLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeyBiZWdpbjogJ2BgYCcsIGVuZDogJ2BgYCtbIF0qJCcgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogJ35+ficsXG4gICAgICAgICAgICAgICAgICBlbmQ6ICd+fn4rWyBdKiQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeyBiZWdpbjogJ2AuKz9gJyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAnKD89XiggezR9fFxcXFx0KSknLFxuICAgICAgICAgICAgICAgICAgY29udGFpbnM6IFt7IGJlZ2luOiAnXiggezR9fFxcXFx0KScsIGVuZDogJyhcXFxcbikkJyB9XSxcbiAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICdeWy1cXFxcKl17Myx9JyxcbiAgICAgICAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC9eXFxbW15cXG5dK1xcXTovLFxuICAgICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAvXFxbLyxcbiAgICAgICAgICAgICAgICAgIGVuZDogL1xcXS8sXG4gICAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdsaW5rJyxcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAvOlxccyovLFxuICAgICAgICAgICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ25naW54JyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICBjb25zdCBuID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBiZWdpbjogL1xcJFxcZCsvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFwkXFx7LywgZW5kOiAvXFx9LyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL1skQF0vICsgZS5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBhID0ge1xuICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiAhMCxcbiAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgJHBhdHRlcm46ICdbYS16L19dKycsXG4gICAgICAgICAgICBsaXRlcmFsOlxuICAgICAgICAgICAgICAnb24gb2ZmIHllcyBubyB0cnVlIGZhbHNlIG5vbmUgYmxvY2tlZCBkZWJ1ZyBpbmZvIG5vdGljZSB3YXJuIGVycm9yIGNyaXQgc2VsZWN0IGJyZWFrIGxhc3QgcGVybWFuZW50IHJlZGlyZWN0IGtxdWV1ZSBydHNpZyBlcG9sbCBwb2xsIC9kZXYvcG9sbCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgaWxsZWdhbDogJz0+JyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgZS5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtlLkJBQ0tTTEFTSF9FU0NBUEUsIG5dLFxuICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgIHsgYmVnaW46IC9cIi8sIGVuZDogL1wiLyB9LFxuICAgICAgICAgICAgICAgIHsgYmVnaW46IC8nLywgZW5kOiAvJy8gfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnKFthLXpdKyk6LycsXG4gICAgICAgICAgICAgIGVuZDogJ1xcXFxzJyxcbiAgICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6ICEwLFxuICAgICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtuXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3JlZ2V4cCcsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5CQUNLU0xBU0hfRVNDQVBFLCBuXSxcbiAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICB7IGJlZ2luOiAnXFxcXHNcXFxcXicsIGVuZDogJ1xcXFxzfFxcXFx7fDsnLCByZXR1cm5FbmQ6ICEwIH0sXG4gICAgICAgICAgICAgICAgeyBiZWdpbjogJ35cXFxcKj9cXFxccysnLCBlbmQ6ICdcXFxcc3xcXFxce3w7JywgcmV0dXJuRW5kOiAhMCB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXCooXFxcXC5bYS16XFxcXC1dKykrJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgYmVnaW46ICcoW2EtelxcXFwtXStcXFxcLikrXFxcXConIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgICAnXFxcXGJcXFxcZHsxLDN9XFxcXC5cXFxcZHsxLDN9XFxcXC5cXFxcZHsxLDN9XFxcXC5cXFxcZHsxLDN9KDpcXFxcZHsxLDV9KT9cXFxcYicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiXFxcXGQrW2tLbU1nR2RzaGR3eV0qXFxcXGInLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbixcbiAgICAgICAgICBdLFxuICAgICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnTmdpbnggY29uZmlnJyxcbiAgICAgICAgYWxpYXNlczogWyduZ2lueGNvbmYnXSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBlLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBlLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnXFxcXHMrXFxcXHsnLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgZW5kOiAvXFx7LyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzZWN0aW9uJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogZS5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBlLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnXFxcXHMnLFxuICAgICAgICAgICAgZW5kOiAnO3xcXFxceycsXG4gICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogZS5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICAgICAgICAgIHN0YXJ0czogYSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgaWxsZWdhbDogJ1teXFxcXHNcXFxcfV0nLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnb2JqZWN0aXZlYycsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgY29uc3QgbiA9IC9bYS16QS1aQF1bYS16QS1aMC05X10qLyxcbiAgICAgICAgXyA9IHtcbiAgICAgICAgICAkcGF0dGVybjogbixcbiAgICAgICAgICBrZXl3b3JkOiAnQGludGVyZmFjZSBAY2xhc3MgQHByb3RvY29sIEBpbXBsZW1lbnRhdGlvbicsXG4gICAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdPYmplY3RpdmUtQycsXG4gICAgICAgIGFsaWFzZXM6IFsnbW0nLCAnb2JqYycsICdvYmotYycsICdvYmotYysrJywgJ29iamVjdGl2ZS1jKysnXSxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAkcGF0dGVybjogbixcbiAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2ludCBmbG9hdCB3aGlsZSBjaGFyIGV4cG9ydCBzaXplb2YgdHlwZWRlZiBjb25zdCBzdHJ1Y3QgZm9yIHVuaW9uIHVuc2lnbmVkIGxvbmcgdm9sYXRpbGUgc3RhdGljIGJvb2wgbXV0YWJsZSBpZiBkbyByZXR1cm4gZ290byB2b2lkIGVudW0gZWxzZSBicmVhayBleHRlcm4gYXNtIGNhc2Ugc2hvcnQgZGVmYXVsdCBkb3VibGUgcmVnaXN0ZXIgZXhwbGljaXQgc2lnbmVkIHR5cGVuYW1lIHRoaXMgc3dpdGNoIGNvbnRpbnVlIHdjaGFyX3QgaW5saW5lIHJlYWRvbmx5IGFzc2lnbiByZWFkd3JpdGUgc2VsZiBAc3luY2hyb25pemVkIGlkIHR5cGVvZiBub25hdG9taWMgc3VwZXIgdW5pY2hhciBJQk91dGxldCBJQkFjdGlvbiBzdHJvbmcgd2VhayBjb3B5IGluIG91dCBpbm91dCBieWNvcHkgYnlyZWYgb25ld2F5IF9fc3Ryb25nIF9fd2VhayBfX2Jsb2NrIF9fYXV0b3JlbGVhc2luZyBAcHJpdmF0ZSBAcHJvdGVjdGVkIEBwdWJsaWMgQHRyeSBAcHJvcGVydHkgQGVuZCBAdGhyb3cgQGNhdGNoIEBmaW5hbGx5IEBhdXRvcmVsZWFzZXBvb2wgQHN5bnRoZXNpemUgQGR5bmFtaWMgQHNlbGVjdG9yIEBvcHRpb25hbCBAcmVxdWlyZWQgQGVuY29kZSBAcGFja2FnZSBAaW1wb3J0IEBkZWZzIEBjb21wYXRpYmlsaXR5X2FsaWFzIF9fYnJpZGdlIF9fYnJpZGdlX3RyYW5zZmVyIF9fYnJpZGdlX3JldGFpbmVkIF9fYnJpZGdlX3JldGFpbiBfX2NvdmFyaWFudCBfX2NvbnRyYXZhcmlhbnQgX19raW5kb2YgX05vbm51bGwgX051bGxhYmxlIF9OdWxsX3Vuc3BlY2lmaWVkIF9fRlVOQ1RJT05fXyBfX1BSRVRUWV9GVU5DVElPTl9fIF9fYXR0cmlidXRlX18gZ2V0dGVyIHNldHRlciByZXRhaW4gdW5zYWZlX3VucmV0YWluZWQgbm9ubnVsbCBudWxsYWJsZSBudWxsX3Vuc3BlY2lmaWVkIG51bGxfcmVzZXR0YWJsZSBjbGFzcyBpbnN0YW5jZXR5cGUgTlNfREVTSUdOQVRFRF9JTklUSUFMSVpFUiBOU19VTkFWQUlMQUJMRSBOU19SRVFVSVJFU19TVVBFUiBOU19SRVRVUk5TX0lOTkVSX1BPSU5URVIgTlNfSU5MSU5FIE5TX0FWQUlMQUJMRSBOU19ERVBSRUNBVEVEIE5TX0VOVU0gTlNfT1BUSU9OUyBOU19TV0lGVF9VTkFWQUlMQUJMRSBOU19BU1NVTUVfTk9OTlVMTF9CRUdJTiBOU19BU1NVTUVfTk9OTlVMTF9FTkQgTlNfUkVGSU5FRF9GT1JfU1dJRlQgTlNfU1dJRlRfTkFNRSBOU19TV0lGVF9OT1RIUk9XIE5TX0RVUklORyBOU19IQU5ETEVSIE5TX0VOREhBTkRMRVIgTlNfVkFMVUVSRVRVUk4gTlNfVk9JRFJFVFVSTicsXG4gICAgICAgICAgbGl0ZXJhbDogJ2ZhbHNlIHRydWUgRkFMU0UgVFJVRSBuaWwgWUVTIE5PIE5VTEwnLFxuICAgICAgICAgIGJ1aWx0X2luOlxuICAgICAgICAgICAgJ0JPT0wgZGlzcGF0Y2hfb25jZV90IGRpc3BhdGNoX3F1ZXVlX3QgZGlzcGF0Y2hfc3luYyBkaXNwYXRjaF9hc3luYyBkaXNwYXRjaF9vbmNlJyxcbiAgICAgICAgfSxcbiAgICAgICAgaWxsZWdhbDogJzwvJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgJ1xcXFxiKEFWfENBfENGfENHfENJfENMfENNfENOfENUfE1LfE1QfE1US3xNVEx8TlN8U0NOfFNLfFVJfFdLfFhDKVxcXFx3KycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgZS5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBlLkNfTlVNQkVSX01PREUsXG4gICAgICAgICAgZS5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBlLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ0BcIicsXG4gICAgICAgICAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICAgICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtlLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgYmVnaW46IC8jXFxzKlthLXpdK1xcYi8sXG4gICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICAgICdtZXRhLWtleXdvcmQnOlxuICAgICAgICAgICAgICAgICdpZiBlbHNlIGVsaWYgZW5kaWYgZGVmaW5lIHVuZGVmIHdhcm5pbmcgZXJyb3IgbGluZSBwcmFnbWEgaWZkZWYgaWZuZGVmIGluY2x1ZGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW46IC9cXFxcXFxuLywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICAgIGUuaW5oZXJpdChlLlFVT1RFX1NUUklOR19NT0RFLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogLzwuKj8+LyxcbiAgICAgICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIGUuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICAgICAgYmVnaW46ICcoJyArIF8ua2V5d29yZC5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcpXFxcXGInLFxuICAgICAgICAgICAgZW5kOiAvKFxce3wkKS8sXG4gICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgIGtleXdvcmRzOiBfLFxuICAgICAgICAgICAgY29udGFpbnM6IFtlLlVOREVSU0NPUkVfVElUTEVfTU9ERV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwuJyArIGUuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAncGVybCcsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgZnVuY3Rpb24gZShlKSB7XG4gICAgICByZXR1cm4gZSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgZSA/IGUgOiBlLnNvdXJjZSkgOiBudWxsXG4gICAgfVxuICAgIGZ1bmN0aW9uIG4oLi4ubikge1xuICAgICAgcmV0dXJuIG4ubWFwKG4gPT4gZShuKSkuam9pbignJylcbiAgICB9XG4gICAgZnVuY3Rpb24gdCguLi5uKSB7XG4gICAgICByZXR1cm4gJygnICsgbi5tYXAobiA9PiBlKG4pKS5qb2luKCd8JykgKyAnKSdcbiAgICB9XG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgY29uc3QgciA9IC9bZHVhbHhtc2lwbmdyXXswLDEyfS8sXG4gICAgICAgIHMgPSB7XG4gICAgICAgICAgJHBhdHRlcm46IC9bXFx3Ll0rLyxcbiAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2FicyBhY2NlcHQgYWxhcm0gYW5kIGF0YW4yIGJpbmQgYmlubW9kZSBibGVzcyBicmVhayBjYWxsZXIgY2hkaXIgY2htb2QgY2hvbXAgY2hvcCBjaG93biBjaHIgY2hyb290IGNsb3NlIGNsb3NlZGlyIGNvbm5lY3QgY29udGludWUgY29zIGNyeXB0IGRibWNsb3NlIGRibW9wZW4gZGVmaW5lZCBkZWxldGUgZGllIGRvIGR1bXAgZWFjaCBlbHNlIGVsc2lmIGVuZGdyZW50IGVuZGhvc3RlbnQgZW5kbmV0ZW50IGVuZHByb3RvZW50IGVuZHB3ZW50IGVuZHNlcnZlbnQgZW9mIGV2YWwgZXhlYyBleGlzdHMgZXhpdCBleHAgZmNudGwgZmlsZW5vIGZsb2NrIGZvciBmb3JlYWNoIGZvcmsgZm9ybWF0IGZvcm1saW5lIGdldGMgZ2V0Z3JlbnQgZ2V0Z3JnaWQgZ2V0Z3JuYW0gZ2V0aG9zdGJ5YWRkciBnZXRob3N0YnluYW1lIGdldGhvc3RlbnQgZ2V0bG9naW4gZ2V0bmV0YnlhZGRyIGdldG5ldGJ5bmFtZSBnZXRuZXRlbnQgZ2V0cGVlcm5hbWUgZ2V0cGdycCBnZXRwcmlvcml0eSBnZXRwcm90b2J5bmFtZSBnZXRwcm90b2J5bnVtYmVyIGdldHByb3RvZW50IGdldHB3ZW50IGdldHB3bmFtIGdldHB3dWlkIGdldHNlcnZieW5hbWUgZ2V0c2VydmJ5cG9ydCBnZXRzZXJ2ZW50IGdldHNvY2tuYW1lIGdldHNvY2tvcHQgZ2l2ZW4gZ2xvYiBnbXRpbWUgZ290byBncmVwIGd0IGhleCBpZiBpbmRleCBpbnQgaW9jdGwgam9pbiBrZXlzIGtpbGwgbGFzdCBsYyBsY2ZpcnN0IGxlbmd0aCBsaW5rIGxpc3RlbiBsb2NhbCBsb2NhbHRpbWUgbG9nIGxzdGF0IGx0IG1hIG1hcCBta2RpciBtc2djdGwgbXNnZ2V0IG1zZ3JjdiBtc2dzbmQgbXkgbmUgbmV4dCBubyBub3Qgb2N0IG9wZW4gb3BlbmRpciBvciBvcmQgb3VyIHBhY2sgcGFja2FnZSBwaXBlIHBvcCBwb3MgcHJpbnQgcHJpbnRmIHByb3RvdHlwZSBwdXNoIHF8MCBxcSBxdW90ZW1ldGEgcXcgcXggcmFuZCByZWFkIHJlYWRkaXIgcmVhZGxpbmUgcmVhZGxpbmsgcmVhZHBpcGUgcmVjdiByZWRvIHJlZiByZW5hbWUgcmVxdWlyZSByZXNldCByZXR1cm4gcmV2ZXJzZSByZXdpbmRkaXIgcmluZGV4IHJtZGlyIHNheSBzY2FsYXIgc2VlayBzZWVrZGlyIHNlbGVjdCBzZW1jdGwgc2VtZ2V0IHNlbW9wIHNlbmQgc2V0Z3JlbnQgc2V0aG9zdGVudCBzZXRuZXRlbnQgc2V0cGdycCBzZXRwcmlvcml0eSBzZXRwcm90b2VudCBzZXRwd2VudCBzZXRzZXJ2ZW50IHNldHNvY2tvcHQgc2hpZnQgc2htY3RsIHNobWdldCBzaG1yZWFkIHNobXdyaXRlIHNodXRkb3duIHNpbiBzbGVlcCBzb2NrZXQgc29ja2V0cGFpciBzb3J0IHNwbGljZSBzcGxpdCBzcHJpbnRmIHNxcnQgc3JhbmQgc3RhdCBzdGF0ZSBzdHVkeSBzdWIgc3Vic3RyIHN5bWxpbmsgc3lzY2FsbCBzeXNvcGVuIHN5c3JlYWQgc3lzc2VlayBzeXN0ZW0gc3lzd3JpdGUgdGVsbCB0ZWxsZGlyIHRpZSB0aWVkIHRpbWUgdGltZXMgdHIgdHJ1bmNhdGUgdWMgdWNmaXJzdCB1bWFzayB1bmRlZiB1bmxlc3MgdW5saW5rIHVucGFjayB1bnNoaWZ0IHVudGllIHVudGlsIHVzZSB1dGltZSB2YWx1ZXMgdmVjIHdhaXQgd2FpdHBpZCB3YW50YXJyYXkgd2FybiB3aGVuIHdoaWxlIHdyaXRlIHh8MCB4b3IgeXwwJyxcbiAgICAgICAgfSxcbiAgICAgICAgaSA9IHsgY2xhc3NOYW1lOiAnc3Vic3QnLCBiZWdpbjogJ1skQF1cXFxceycsIGVuZDogJ1xcXFx9Jywga2V5d29yZHM6IHMgfSxcbiAgICAgICAgYSA9IHsgYmVnaW46IC8tPlxcey8sIGVuZDogL1xcfS8gfSxcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBiZWdpbjogL1xcJFxcZC8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IG4oXG4gICAgICAgICAgICAgICAgL1skJUBdKFxcXlxcd1xcYnwjXFx3Kyg6OlxcdyspKnxcXHtcXHcrXFx9fFxcdysoOjpcXHcqKSopLyxcbiAgICAgICAgICAgICAgICAnKD8hW0EtWmEtel0pKD8hW0AkJV0pJ1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9bJCVAXVteXFxzXFx3e10vLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBjID0gW2UuQkFDS1NMQVNIX0VTQ0FQRSwgaSwgb10sXG4gICAgICAgIGcgPSBbLyEvLCAvXFwvLywgL1xcfC8sIC9cXD8vLCAvJy8sIC9cIi8sIC8jL10sXG4gICAgICAgIGwgPSAoZSwgdCwgcyA9ICdcXFxcMScpID0+IHtcbiAgICAgICAgICBjb25zdCBpID0gJ1xcXFwxJyA9PT0gcyA/IHMgOiBuKHMsIHQpXG4gICAgICAgICAgcmV0dXJuIG4oXG4gICAgICAgICAgICBuKCcoPzonLCBlLCAnKScpLFxuICAgICAgICAgICAgdCxcbiAgICAgICAgICAgIC8oPzpcXFxcLnxbXlxcXFxcXC9dKSo/LyxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICAvKD86XFxcXC58W15cXFxcXFwvXSkqPy8sXG4gICAgICAgICAgICBzLFxuICAgICAgICAgICAgclxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgZCA9IChlLCB0LCBzKSA9PiBuKG4oJyg/OicsIGUsICcpJyksIHQsIC8oPzpcXFxcLnxbXlxcXFxcXC9dKSo/LywgcywgciksXG4gICAgICAgIHAgPSBbXG4gICAgICAgICAgbyxcbiAgICAgICAgICBlLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGUuQ09NTUVOVCgvXj1cXHcvLCAvPWN1dC8sIHtcbiAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiAhMCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICBjb250YWluczogYyxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ3FbcXd4cl0/XFxcXHMqXFxcXCgnLFxuICAgICAgICAgICAgICAgIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46ICdxW3F3eHJdP1xcXFxzKlxcXFxbJywgZW5kOiAnXFxcXF0nLCByZWxldmFuY2U6IDUgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogJ3FbcXd4cl0/XFxcXHMqXFxcXHsnLCBlbmQ6ICdcXFxcfScsIHJlbGV2YW5jZTogNSB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdxW3F3eHJdP1xcXFxzKlxcXFx8JyxcbiAgICAgICAgICAgICAgICBlbmQ6ICdcXFxcfCcsXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiA1LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAncVtxd3hyXT9cXFxccyo8JywgZW5kOiAnPicsIHJlbGV2YW5jZTogNSB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAncXdcXFxccytxJywgZW5kOiAncScsIHJlbGV2YW5jZTogNSB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiBcIidcIiwgZW5kOiBcIidcIiwgY29udGFpbnM6IFtlLkJBQ0tTTEFTSF9FU0NBUEVdIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46ICdcIicsIGVuZDogJ1wiJyB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAnYCcsIGVuZDogJ2AnLCBjb250YWluczogW2UuQkFDS1NMQVNIX0VTQ0FQRV0gfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogL1xce1xcdytcXH0vLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnLT9cXFxcdytcXFxccyo9PicsXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgJyhcXFxcYjBbMC03X10rKXwoXFxcXGIweFswLTlhLWZBLUZfXSspfChcXFxcYlsxLTldWzAtOV9dKihcXFxcLlswLTlfXSspPyl8WzBfXVxcXFxiJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAnKFxcXFwvXFxcXC98JyArXG4gICAgICAgICAgICAgIGUuUkVfU1RBUlRFUlNfUkUgK1xuICAgICAgICAgICAgICAnfFxcXFxiKHNwbGl0fHJldHVybnxwcmludHxyZXZlcnNlfGdyZXApXFxcXGIpXFxcXHMqJyxcbiAgICAgICAgICAgIGtleXdvcmRzOiAnc3BsaXQgcmV0dXJuIHByaW50IHJldmVyc2UgZ3JlcCcsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBlLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncmVnZXhwJyxcbiAgICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogbCgnc3x0cnx5JywgdCguLi5nKSksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgeyBiZWdpbjogbCgnc3x0cnx5JywgJ1xcXFwoJywgJ1xcXFwpJykgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IGwoJ3N8dHJ8eScsICdcXFxcWycsICdcXFxcXScpLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHsgYmVnaW46IGwoJ3N8dHJ8eScsICdcXFxceycsICdcXFxcfScpIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvKG18cXIpXFwvXFwvLywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBkKCcoPzptfHFyKT8nLCAvXFwvLywgL1xcLy8pLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHsgYmVnaW46IGQoJ218cXInLCB0KC4uLmcpLCAvXFwxLykgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IGQoJ218cXInLCAvXFwoLywgL1xcKS8pLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHsgYmVnaW46IGQoJ218cXInLCAvXFxbLywgL1xcXS8pIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBkKCdtfHFyJywgL1xcey8sIC9cXH0vKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnc3ViJyxcbiAgICAgICAgICAgIGVuZDogJyhcXFxccypcXFxcKC4qP1xcXFwpKT9bO3tdJyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiA1LFxuICAgICAgICAgICAgY29udGFpbnM6IFtlLlRJVExFX01PREVdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICctXFxcXHdcXFxcYicsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ15fX0RBVEFfXyQnLFxuICAgICAgICAgICAgZW5kOiAnXl9fRU5EX18kJyxcbiAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiAnbW9qb2xpY2lvdXMnLFxuICAgICAgICAgICAgY29udGFpbnM6IFt7IGJlZ2luOiAnXkBALionLCBlbmQ6ICckJywgY2xhc3NOYW1lOiAnY29tbWVudCcgfV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGkuY29udGFpbnMgPSBwKSxcbiAgICAgICAgKGEuY29udGFpbnMgPSBwKSxcbiAgICAgICAgeyBuYW1lOiAnUGVybCcsIGFsaWFzZXM6IFsncGwnLCAncG0nXSwga2V5d29yZHM6IHMsIGNvbnRhaW5zOiBwIH1cbiAgICAgIClcbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ3BocCcsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgY29uc3QgciA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAnXFxcXCQrW2EtekEtWl9cXHg3Zi1cXHhmZl1bYS16QS1aMC05X1xceDdmLVxceGZmXSooPyFbQS1aYS16MC05XSkoPyFbJF0pJyxcbiAgICAgICAgfSxcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBiZWdpbjogLzxcXD9waHAvLCByZWxldmFuY2U6IDEwIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvPFxcP1s9XT8vIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXFw/Pi8sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGEgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgICAgICAgIHZhcmlhbnRzOiBbeyBiZWdpbjogL1xcJFxcdysvIH0sIHsgYmVnaW46IC9cXHtcXCQvLCBlbmQ6IC9cXH0vIH1dLFxuICAgICAgICB9LFxuICAgICAgICBuID0gZS5pbmhlcml0KGUuQVBPU19TVFJJTkdfTU9ERSwgeyBpbGxlZ2FsOiBudWxsIH0pLFxuICAgICAgICBpID0gZS5pbmhlcml0KGUuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICAgICAgICBpbGxlZ2FsOiBudWxsLFxuICAgICAgICAgIGNvbnRhaW5zOiBlLlFVT1RFX1NUUklOR19NT0RFLmNvbnRhaW5zLmNvbmNhdChhKSxcbiAgICAgICAgfSksXG4gICAgICAgIG8gPSBlLkVORF9TQU1FX0FTX0JFR0lOKHtcbiAgICAgICAgICBiZWdpbjogLzw8PFsgXFx0XSooXFx3KylcXG4vLFxuICAgICAgICAgIGVuZDogL1sgXFx0XSooXFx3KylcXGIvLFxuICAgICAgICAgIGNvbnRhaW5zOiBlLlFVT1RFX1NUUklOR19NT0RFLmNvbnRhaW5zLmNvbmNhdChhKSxcbiAgICAgICAgfSksXG4gICAgICAgIGwgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICBjb250YWluczogW2UuQkFDS1NMQVNIX0VTQ0FQRSwgdF0sXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIGUuaW5oZXJpdChuLCB7IGJlZ2luOiBcImInXCIsIGVuZDogXCInXCIgfSksXG4gICAgICAgICAgICBlLmluaGVyaXQoaSwgeyBiZWdpbjogJ2JcIicsIGVuZDogJ1wiJyB9KSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgbyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBzID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYjBiWzAxXSsoPzpfWzAxXSspKlxcXFxiJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAnXFxcXGIwb1swLTddKyg/Ol9bMC03XSspKlxcXFxiJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiMHhbXFxcXGRhLWZdKyg/Ol9bXFxcXGRhLWZdKykqXFxcXGInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICAgJyg/OlxcXFxiXFxcXGQrKD86X1xcXFxkKykqKFxcXFwuKD86XFxcXGQrKD86X1xcXFxkKykqKSk/fFxcXFxCXFxcXC5cXFxcZCspKD86ZVsrLV0/XFxcXGQrKT8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgYyA9IHtcbiAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ19fQ0xBU1NfXyBfX0RJUl9fIF9fRklMRV9fIF9fRlVOQ1RJT05fXyBfX0xJTkVfXyBfX01FVEhPRF9fIF9fTkFNRVNQQUNFX18gX19UUkFJVF9fIGRpZSBlY2hvIGV4aXQgaW5jbHVkZSBpbmNsdWRlX29uY2UgcHJpbnQgcmVxdWlyZSByZXF1aXJlX29uY2UgYXJyYXkgYWJzdHJhY3QgYW5kIGFzIGJpbmFyeSBib29sIGJvb2xlYW4gYnJlYWsgY2FsbGFibGUgY2FzZSBjYXRjaCBjbGFzcyBjbG9uZSBjb25zdCBjb250aW51ZSBkZWNsYXJlIGRlZmF1bHQgZG8gZG91YmxlIGVsc2UgZWxzZWlmIGVtcHR5IGVuZGRlY2xhcmUgZW5kZm9yIGVuZGZvcmVhY2ggZW5kaWYgZW5kc3dpdGNoIGVuZHdoaWxlIGVudW0gZXZhbCBleHRlbmRzIGZpbmFsIGZpbmFsbHkgZmxvYXQgZm9yIGZvcmVhY2ggZnJvbSBnbG9iYWwgZ290byBpZiBpbXBsZW1lbnRzIGluc3RhbmNlb2YgaW5zdGVhZG9mIGludCBpbnRlZ2VyIGludGVyZmFjZSBpc3NldCBpdGVyYWJsZSBsaXN0IG1hdGNofDAgbWl4ZWQgbmV3IG9iamVjdCBvciBwcml2YXRlIHByb3RlY3RlZCBwdWJsaWMgcmVhbCByZXR1cm4gc3RyaW5nIHN3aXRjaCB0aHJvdyB0cmFpdCB0cnkgdW5zZXQgdXNlIHZhciB2b2lkIHdoaWxlIHhvciB5aWVsZCcsXG4gICAgICAgICAgbGl0ZXJhbDogJ2ZhbHNlIG51bGwgdHJ1ZScsXG4gICAgICAgICAgYnVpbHRfaW46XG4gICAgICAgICAgICAnRXJyb3J8MCBBcHBlbmRJdGVyYXRvciBBcmd1bWVudENvdW50RXJyb3IgQXJpdGhtZXRpY0Vycm9yIEFycmF5SXRlcmF0b3IgQXJyYXlPYmplY3QgQXNzZXJ0aW9uRXJyb3IgQmFkRnVuY3Rpb25DYWxsRXhjZXB0aW9uIEJhZE1ldGhvZENhbGxFeGNlcHRpb24gQ2FjaGluZ0l0ZXJhdG9yIENhbGxiYWNrRmlsdGVySXRlcmF0b3IgQ29tcGlsZUVycm9yIENvdW50YWJsZSBEaXJlY3RvcnlJdGVyYXRvciBEaXZpc2lvbkJ5WmVyb0Vycm9yIERvbWFpbkV4Y2VwdGlvbiBFbXB0eUl0ZXJhdG9yIEVycm9yRXhjZXB0aW9uIEV4Y2VwdGlvbiBGaWxlc3lzdGVtSXRlcmF0b3IgRmlsdGVySXRlcmF0b3IgR2xvYkl0ZXJhdG9yIEluZmluaXRlSXRlcmF0b3IgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIEl0ZXJhdG9ySXRlcmF0b3IgTGVuZ3RoRXhjZXB0aW9uIExpbWl0SXRlcmF0b3IgTG9naWNFeGNlcHRpb24gTXVsdGlwbGVJdGVyYXRvciBOb1Jld2luZEl0ZXJhdG9yIE91dE9mQm91bmRzRXhjZXB0aW9uIE91dE9mUmFuZ2VFeGNlcHRpb24gT3V0ZXJJdGVyYXRvciBPdmVyZmxvd0V4Y2VwdGlvbiBQYXJlbnRJdGVyYXRvciBQYXJzZUVycm9yIFJhbmdlRXhjZXB0aW9uIFJlY3Vyc2l2ZUFycmF5SXRlcmF0b3IgUmVjdXJzaXZlQ2FjaGluZ0l0ZXJhdG9yIFJlY3Vyc2l2ZUNhbGxiYWNrRmlsdGVySXRlcmF0b3IgUmVjdXJzaXZlRGlyZWN0b3J5SXRlcmF0b3IgUmVjdXJzaXZlRmlsdGVySXRlcmF0b3IgUmVjdXJzaXZlSXRlcmF0b3IgUmVjdXJzaXZlSXRlcmF0b3JJdGVyYXRvciBSZWN1cnNpdmVSZWdleEl0ZXJhdG9yIFJlY3Vyc2l2ZVRyZWVJdGVyYXRvciBSZWdleEl0ZXJhdG9yIFJ1bnRpbWVFeGNlcHRpb24gU2Vla2FibGVJdGVyYXRvciBTcGxEb3VibHlMaW5rZWRMaXN0IFNwbEZpbGVJbmZvIFNwbEZpbGVPYmplY3QgU3BsRml4ZWRBcnJheSBTcGxIZWFwIFNwbE1heEhlYXAgU3BsTWluSGVhcCBTcGxPYmplY3RTdG9yYWdlIFNwbE9ic2VydmVyIFNwbE9ic2VydmVyIFNwbFByaW9yaXR5UXVldWUgU3BsUXVldWUgU3BsU3RhY2sgU3BsU3ViamVjdCBTcGxTdWJqZWN0IFNwbFRlbXBGaWxlT2JqZWN0IFR5cGVFcnJvciBVbmRlcmZsb3dFeGNlcHRpb24gVW5leHBlY3RlZFZhbHVlRXhjZXB0aW9uIFVuaGFuZGxlZE1hdGNoRXJyb3IgQXJyYXlBY2Nlc3MgQ2xvc3VyZSBHZW5lcmF0b3IgSXRlcmF0b3IgSXRlcmF0b3JBZ2dyZWdhdGUgU2VyaWFsaXphYmxlIFN0cmluZ2FibGUgVGhyb3dhYmxlIFRyYXZlcnNhYmxlIFdlYWtSZWZlcmVuY2UgV2Vha01hcCBEaXJlY3RvcnkgX19QSFBfSW5jb21wbGV0ZV9DbGFzcyBwYXJlbnQgcGhwX3VzZXJfZmlsdGVyIHNlbGYgc3RhdGljIHN0ZENsYXNzJyxcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWxpYXNlczogWydwaHAzJywgJ3BocDQnLCAncGhwNScsICdwaHA2JywgJ3BocDcnLCAncGhwOCddLFxuICAgICAgICBjYXNlX2luc2Vuc2l0aXZlOiAhMCxcbiAgICAgICAga2V5d29yZHM6IGMsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgZS5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBlLkNPTU1FTlQoJy8vJywgJyQnLCB7IGNvbnRhaW5zOiBbdF0gfSksXG4gICAgICAgICAgZS5DT01NRU5UKCcvXFxcXConLCAnXFxcXCovJywge1xuICAgICAgICAgICAgY29udGFpbnM6IFt7IGNsYXNzTmFtZTogJ2RvY3RhZycsIGJlZ2luOiAnQFtBLVphLXpdKycgfV0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZS5DT01NRU5UKCdfX2hhbHRfY29tcGlsZXIuKz87JywgITEsIHtcbiAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiAhMCxcbiAgICAgICAgICAgIGtleXdvcmRzOiAnX19oYWx0X2NvbXBpbGVyJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0LFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAna2V5d29yZCcsIGJlZ2luOiAvXFwkdGhpc1xcYi8gfSxcbiAgICAgICAgICByLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvKDo6fC0+KStbYS16QS1aX1xceDdmLVxceGZmXVthLXpBLVowLTlfXFx4N2YtXFx4ZmZdKi8sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZm4gZnVuY3Rpb24nLFxuICAgICAgICAgICAgZW5kOiAvWzt7XS8sXG4gICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgIGlsbGVnYWw6ICdbJCVcXFxcW10nLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgeyBiZWdpbktleXdvcmRzOiAndXNlJyB9LFxuICAgICAgICAgICAgICBlLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnPT4nLFxuICAgICAgICAgICAgICAgIGVuZHNQYXJlbnQ6ICEwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFwoJyxcbiAgICAgICAgICAgICAgICBlbmQ6ICdcXFxcKScsXG4gICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgICAgICBrZXl3b3JkczogYyxcbiAgICAgICAgICAgICAgICBjb250YWluczogWydzZWxmJywgciwgZS5DX0JMT0NLX0NPTU1FTlRfTU9ERSwgbCwgc10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdlbnVtJyxcbiAgICAgICAgICAgICAgICBpbGxlZ2FsOiAvWygkXCJdLyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbktleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlIHRyYWl0JywgaWxsZWdhbDogL1s6KCRcIl0vIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgZW5kOiAvXFx7LyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdleHRlbmRzIGltcGxlbWVudHMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnbmFtZXNwYWNlJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGVuZDogJzsnLFxuICAgICAgICAgICAgaWxsZWdhbDogL1suJ10vLFxuICAgICAgICAgICAgY29udGFpbnM6IFtlLlVOREVSU0NPUkVfVElUTEVfTU9ERV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAndXNlJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGVuZDogJzsnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtlLlVOREVSU0NPUkVfVElUTEVfTU9ERV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsLFxuICAgICAgICAgIHMsXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdwaHAtdGVtcGxhdGUnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIHJldHVybiBuID0+ICh7XG4gICAgICBuYW1lOiAnUEhQIHRlbXBsYXRlJyxcbiAgICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogLzxcXD8ocGhwfD0pPy8sXG4gICAgICAgICAgZW5kOiAvXFw/Pi8sXG4gICAgICAgICAgc3ViTGFuZ3VhZ2U6ICdwaHAnLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAnL1xcXFwqJywgZW5kOiAnXFxcXCovJywgc2tpcDogITAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46ICdiXCInLCBlbmQ6ICdcIicsIHNraXA6ICEwIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiBcImInXCIsIGVuZDogXCInXCIsIHNraXA6ICEwIH0sXG4gICAgICAgICAgICBuLmluaGVyaXQobi5BUE9TX1NUUklOR19NT0RFLCB7XG4gICAgICAgICAgICAgIGlsbGVnYWw6IG51bGwsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgY29udGFpbnM6IG51bGwsXG4gICAgICAgICAgICAgIHNraXA6ICEwLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuLmluaGVyaXQobi5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgICAgICAgICAgICBpbGxlZ2FsOiBudWxsLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBudWxsLFxuICAgICAgICAgICAgICBza2lwOiAhMCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pXG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ3BsYWludGV4dCcsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgcmV0dXJuIHQgPT4gKHtcbiAgICAgIG5hbWU6ICdQbGFpbiB0ZXh0JyxcbiAgICAgIGFsaWFzZXM6IFsndGV4dCcsICd0eHQnXSxcbiAgICAgIGRpc2FibGVBdXRvZGV0ZWN0OiAhMCxcbiAgICB9KVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdwcm9wZXJ0aWVzJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICB2YXIgbiA9ICdbIFxcXFx0XFxcXGZdKicsXG4gICAgICAgIGEgPSBuICsgJ1s6PV0nICsgbixcbiAgICAgICAgdCA9ICcoJyArIGEgKyAnfFsgXFxcXHRcXFxcZl0rKScsXG4gICAgICAgIHIgPSAnKFteXFxcXFxcXFxcXFxcVzo9IFxcXFx0XFxcXGZcXFxcbl18XFxcXFxcXFwuKSsnLFxuICAgICAgICBzID0gJyhbXlxcXFxcXFxcOj0gXFxcXHRcXFxcZlxcXFxuXXxcXFxcXFxcXC4pKycsXG4gICAgICAgIGkgPSB7XG4gICAgICAgICAgZW5kOiB0LFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxcXFxcXFxcXFxcXFwnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAnXFxcXFxcXFxcXFxcbicgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJy5wcm9wZXJ0aWVzJyxcbiAgICAgICAgY2FzZV9pbnNlbnNpdGl2ZTogITAsXG4gICAgICAgIGlsbGVnYWw6IC9cXFMvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGUuQ09NTUVOVCgnXlxcXFxzKlshI10nLCAnJCcpLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW46IHIgKyBhLCByZWxldmFuY2U6IDEgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogciArICdbIFxcXFx0XFxcXGZdKycsIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnYXR0cicsIGJlZ2luOiByLCBlbmRzUGFyZW50OiAhMCwgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhcnRzOiBpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IHMgKyB0LFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46IHMsIGVuZHNQYXJlbnQ6ICEwLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGFydHM6IGksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2F0dHInLCByZWxldmFuY2U6IDAsIGJlZ2luOiBzICsgbiArICckJyB9LFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAncHl0aG9uJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICBjb25zdCBuID0ge1xuICAgICAgICAgICRwYXR0ZXJuOiAvW0EtWmEtel1cXHcrfF9fXFx3K19fLyxcbiAgICAgICAgICBrZXl3b3JkOiBbXG4gICAgICAgICAgICAnYW5kJyxcbiAgICAgICAgICAgICdhcycsXG4gICAgICAgICAgICAnYXNzZXJ0JyxcbiAgICAgICAgICAgICdhc3luYycsXG4gICAgICAgICAgICAnYXdhaXQnLFxuICAgICAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgICAgICdjbGFzcycsXG4gICAgICAgICAgICAnY29udGludWUnLFxuICAgICAgICAgICAgJ2RlZicsXG4gICAgICAgICAgICAnZGVsJyxcbiAgICAgICAgICAgICdlbGlmJyxcbiAgICAgICAgICAgICdlbHNlJyxcbiAgICAgICAgICAgICdleGNlcHQnLFxuICAgICAgICAgICAgJ2ZpbmFsbHknLFxuICAgICAgICAgICAgJ2ZvcicsXG4gICAgICAgICAgICAnZnJvbScsXG4gICAgICAgICAgICAnZ2xvYmFsJyxcbiAgICAgICAgICAgICdpZicsXG4gICAgICAgICAgICAnaW1wb3J0JyxcbiAgICAgICAgICAgICdpbicsXG4gICAgICAgICAgICAnaXMnLFxuICAgICAgICAgICAgJ2xhbWJkYScsXG4gICAgICAgICAgICAnbm9ubG9jYWx8MTAnLFxuICAgICAgICAgICAgJ25vdCcsXG4gICAgICAgICAgICAnb3InLFxuICAgICAgICAgICAgJ3Bhc3MnLFxuICAgICAgICAgICAgJ3JhaXNlJyxcbiAgICAgICAgICAgICdyZXR1cm4nLFxuICAgICAgICAgICAgJ3RyeScsXG4gICAgICAgICAgICAnd2hpbGUnLFxuICAgICAgICAgICAgJ3dpdGgnLFxuICAgICAgICAgICAgJ3lpZWxkJyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGJ1aWx0X2luOiBbXG4gICAgICAgICAgICAnX19pbXBvcnRfXycsXG4gICAgICAgICAgICAnYWJzJyxcbiAgICAgICAgICAgICdhbGwnLFxuICAgICAgICAgICAgJ2FueScsXG4gICAgICAgICAgICAnYXNjaWknLFxuICAgICAgICAgICAgJ2JpbicsXG4gICAgICAgICAgICAnYm9vbCcsXG4gICAgICAgICAgICAnYnJlYWtwb2ludCcsXG4gICAgICAgICAgICAnYnl0ZWFycmF5JyxcbiAgICAgICAgICAgICdieXRlcycsXG4gICAgICAgICAgICAnY2FsbGFibGUnLFxuICAgICAgICAgICAgJ2NocicsXG4gICAgICAgICAgICAnY2xhc3NtZXRob2QnLFxuICAgICAgICAgICAgJ2NvbXBpbGUnLFxuICAgICAgICAgICAgJ2NvbXBsZXgnLFxuICAgICAgICAgICAgJ2RlbGF0dHInLFxuICAgICAgICAgICAgJ2RpY3QnLFxuICAgICAgICAgICAgJ2RpcicsXG4gICAgICAgICAgICAnZGl2bW9kJyxcbiAgICAgICAgICAgICdlbnVtZXJhdGUnLFxuICAgICAgICAgICAgJ2V2YWwnLFxuICAgICAgICAgICAgJ2V4ZWMnLFxuICAgICAgICAgICAgJ2ZpbHRlcicsXG4gICAgICAgICAgICAnZmxvYXQnLFxuICAgICAgICAgICAgJ2Zvcm1hdCcsXG4gICAgICAgICAgICAnZnJvemVuc2V0JyxcbiAgICAgICAgICAgICdnZXRhdHRyJyxcbiAgICAgICAgICAgICdnbG9iYWxzJyxcbiAgICAgICAgICAgICdoYXNhdHRyJyxcbiAgICAgICAgICAgICdoYXNoJyxcbiAgICAgICAgICAgICdoZWxwJyxcbiAgICAgICAgICAgICdoZXgnLFxuICAgICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAgICdpbnB1dCcsXG4gICAgICAgICAgICAnaW50JyxcbiAgICAgICAgICAgICdpc2luc3RhbmNlJyxcbiAgICAgICAgICAgICdpc3N1YmNsYXNzJyxcbiAgICAgICAgICAgICdpdGVyJyxcbiAgICAgICAgICAgICdsZW4nLFxuICAgICAgICAgICAgJ2xpc3QnLFxuICAgICAgICAgICAgJ2xvY2FscycsXG4gICAgICAgICAgICAnbWFwJyxcbiAgICAgICAgICAgICdtYXgnLFxuICAgICAgICAgICAgJ21lbW9yeXZpZXcnLFxuICAgICAgICAgICAgJ21pbicsXG4gICAgICAgICAgICAnbmV4dCcsXG4gICAgICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgICAgICdvY3QnLFxuICAgICAgICAgICAgJ29wZW4nLFxuICAgICAgICAgICAgJ29yZCcsXG4gICAgICAgICAgICAncG93JyxcbiAgICAgICAgICAgICdwcmludCcsXG4gICAgICAgICAgICAncHJvcGVydHknLFxuICAgICAgICAgICAgJ3JhbmdlJyxcbiAgICAgICAgICAgICdyZXByJyxcbiAgICAgICAgICAgICdyZXZlcnNlZCcsXG4gICAgICAgICAgICAncm91bmQnLFxuICAgICAgICAgICAgJ3NldCcsXG4gICAgICAgICAgICAnc2V0YXR0cicsXG4gICAgICAgICAgICAnc2xpY2UnLFxuICAgICAgICAgICAgJ3NvcnRlZCcsXG4gICAgICAgICAgICAnc3RhdGljbWV0aG9kJyxcbiAgICAgICAgICAgICdzdHInLFxuICAgICAgICAgICAgJ3N1bScsXG4gICAgICAgICAgICAnc3VwZXInLFxuICAgICAgICAgICAgJ3R1cGxlJyxcbiAgICAgICAgICAgICd0eXBlJyxcbiAgICAgICAgICAgICd2YXJzJyxcbiAgICAgICAgICAgICd6aXAnLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGl0ZXJhbDogW1xuICAgICAgICAgICAgJ19fZGVidWdfXycsXG4gICAgICAgICAgICAnRWxsaXBzaXMnLFxuICAgICAgICAgICAgJ0ZhbHNlJyxcbiAgICAgICAgICAgICdOb25lJyxcbiAgICAgICAgICAgICdOb3RJbXBsZW1lbnRlZCcsXG4gICAgICAgICAgICAnVHJ1ZScsXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0eXBlOiBbXG4gICAgICAgICAgICAnQW55JyxcbiAgICAgICAgICAgICdDYWxsYWJsZScsXG4gICAgICAgICAgICAnQ29yb3V0aW5lJyxcbiAgICAgICAgICAgICdEaWN0JyxcbiAgICAgICAgICAgICdMaXN0JyxcbiAgICAgICAgICAgICdMaXRlcmFsJyxcbiAgICAgICAgICAgICdHZW5lcmljJyxcbiAgICAgICAgICAgICdPcHRpb25hbCcsXG4gICAgICAgICAgICAnU2VxdWVuY2UnLFxuICAgICAgICAgICAgJ1NldCcsXG4gICAgICAgICAgICAnVHVwbGUnLFxuICAgICAgICAgICAgJ1R5cGUnLFxuICAgICAgICAgICAgJ1VuaW9uJyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBhID0geyBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46IC9eKD4+PnxcXC5cXC5cXC4pIC8gfSxcbiAgICAgICAgaSA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgICAgICAgYmVnaW46IC9cXHsvLFxuICAgICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgICAga2V5d29yZHM6IG4sXG4gICAgICAgICAgaWxsZWdhbDogLyMvLFxuICAgICAgICB9LFxuICAgICAgICBzID0geyBiZWdpbjogL1xce1xcey8sIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICB0ID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgY29udGFpbnM6IFtlLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvKFt1VV18W2JCXXxbclJdfFtiQl1bclJdfFtyUl1bYkJdKT8nJycvLFxuICAgICAgICAgICAgICBlbmQ6IC8nJycvLFxuICAgICAgICAgICAgICBjb250YWluczogW2UuQkFDS1NMQVNIX0VTQ0FQRSwgYV0sXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogLyhbdVVdfFtiQl18W3JSXXxbYkJdW3JSXXxbclJdW2JCXSk/XCJcIlwiLyxcbiAgICAgICAgICAgICAgZW5kOiAvXCJcIlwiLyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtlLkJBQ0tTTEFTSF9FU0NBUEUsIGFdLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC8oW2ZGXVtyUl18W3JSXVtmRl18W2ZGXSknJycvLFxuICAgICAgICAgICAgICBlbmQ6IC8nJycvLFxuICAgICAgICAgICAgICBjb250YWluczogW2UuQkFDS1NMQVNIX0VTQ0FQRSwgYSwgcywgaV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogLyhbZkZdW3JSXXxbclJdW2ZGXXxbZkZdKVwiXCJcIi8sXG4gICAgICAgICAgICAgIGVuZDogL1wiXCJcIi8sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5CQUNLU0xBU0hfRVNDQVBFLCBhLCBzLCBpXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvKFt1VV18W3JSXSknLywgZW5kOiAvJy8sIHJlbGV2YW5jZTogMTAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC8oW3VVXXxbclJdKVwiLywgZW5kOiAvXCIvLCByZWxldmFuY2U6IDEwIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvKFtiQl18W2JCXVtyUl18W3JSXVtiQl0pJy8sXG4gICAgICAgICAgICAgIGVuZDogLycvLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC8oW2JCXXxbYkJdW3JSXXxbclJdW2JCXSlcIi8sIGVuZDogL1wiLyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogLyhbZkZdW3JSXXxbclJdW2ZGXXxbZkZdKScvLFxuICAgICAgICAgICAgICBlbmQ6IC8nLyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtlLkJBQ0tTTEFTSF9FU0NBUEUsIHMsIGldLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC8oW2ZGXVtyUl18W3JSXVtmRl18W2ZGXSlcIi8sXG4gICAgICAgICAgICAgIGVuZDogL1wiLyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtlLkJBQ0tTTEFTSF9FU0NBUEUsIHMsIGldLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGUuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgIGUuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgciA9ICdbMC05XShfP1swLTldKSonLFxuICAgICAgICBsID0gYChcXFxcYigke3J9KSk/XFxcXC4oJHtyfSl8XFxcXGIoJHtyfSlcXFxcLmAsXG4gICAgICAgIGIgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IGAoXFxcXGIoJHtyfSl8KCR7bH0pKVtlRV1bKy1dPygke3J9KVtqSl0/XFxcXGJgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IGAoJHtsfSlbakpdP2AgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYihbMS05XShfP1swLTldKSp8MCsoXz8wKSopW2xMakpdP1xcXFxiJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIwW2JCXShfP1swMV0pK1tsTF0/XFxcXGInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46ICdcXFxcYjBbb09dKF8/WzAtN10pK1tsTF0/XFxcXGInIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIwW3hYXShfP1swLTlhLWZBLUZdKStbbExdP1xcXFxiJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiBgXFxcXGIoJHtyfSlbakpdXFxcXGJgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdjb21tZW50JyxcbiAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICgoZCA9IC8jIHR5cGU6LyksXG4gICAgICAgICAgICAoKC4uLmUpID0+XG4gICAgICAgICAgICAgIGVcbiAgICAgICAgICAgICAgICAubWFwKGUgPT5cbiAgICAgICAgICAgICAgICAgIChlID0+IChlID8gKCdzdHJpbmcnID09IHR5cGVvZiBlID8gZSA6IGUuc291cmNlKSA6IG51bGwpKShlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuam9pbignJykpKCcoPz0nLCBkLCAnKScpKSxcbiAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgeyBiZWdpbjogLyMgdHlwZTovIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvIy8sIGVuZDogL1xcYlxcQi8sIGVuZHNXaXRoUGFyZW50OiAhMCB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICcnLCBiZWdpbjogL1xcKFxccypcXCkvLCBza2lwOiAhMCB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogITAsXG4gICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZicsIGEsIGIsIHQsIGUuSEFTSF9DT01NRU5UX01PREVdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9XG4gICAgICB2YXIgZFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGkuY29udGFpbnMgPSBbdCwgYiwgYV0pLFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1B5dGhvbicsXG4gICAgICAgICAgYWxpYXNlczogWydweScsICdneXAnLCAnaXB5dGhvbiddLFxuICAgICAgICAgIGtleXdvcmRzOiBuLFxuICAgICAgICAgIGlsbGVnYWw6IC8oPFxcL3wtPnxcXD8pfD0+LyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIGIsXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFxic2VsZlxcYi8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2lmJyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgICBvLFxuICAgICAgICAgICAgZS5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZGVmJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY2xhc3MnLCBiZWdpbktleXdvcmRzOiAnY2xhc3MnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGVuZDogLzovLFxuICAgICAgICAgICAgICBpbGxlZ2FsOiAvWyR7PTtcXG4sXS8sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgZS5VTkRFUlNDT1JFX1RJVExFX01PREUsXG4gICAgICAgICAgICAgICAgYyxcbiAgICAgICAgICAgICAgICB7IGJlZ2luOiAvLT4vLCBlbmRzV2l0aFBhcmVudDogITAsIGtleXdvcmRzOiBuIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgICAgYmVnaW46IC9eW1xcdCBdKkAvLFxuICAgICAgICAgICAgICBlbmQ6IC8oPz0jKXwkLyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtiLCBjLCB0XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAncHl0aG9uLXJlcGwnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIHJldHVybiBzID0+ICh7XG4gICAgICBhbGlhc2VzOiBbJ3B5Y29uJ10sXG4gICAgICBjb250YWluczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgc3RhcnRzOiB7IGVuZDogLyB8JC8sIHN0YXJ0czogeyBlbmQ6ICckJywgc3ViTGFuZ3VhZ2U6ICdweXRob24nIH0gfSxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBiZWdpbjogL14+Pj4oPz1bIF18JCkvIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXlxcLlxcLlxcLig/PVsgXXwkKS8sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pXG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ3InLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIGZ1bmN0aW9uIGUoLi4uZSkge1xuICAgICAgcmV0dXJuIGVcbiAgICAgICAgLm1hcChlID0+IHtcbiAgICAgICAgICByZXR1cm4gKGEgPSBlKSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgYSA/IGEgOiBhLnNvdXJjZSkgOiBudWxsXG4gICAgICAgICAgdmFyIGFcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpXG4gICAgfVxuICAgIHJldHVybiBhID0+IHtcbiAgICAgIGNvbnN0IG4gPSAvKD86KD86W2EtekEtWl18XFwuWy5fYS16QS1aXSlbLl9hLXpBLVowLTldKil8XFwuKD8hXFxkKS9cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdSJyxcbiAgICAgICAgaWxsZWdhbDogLy0+LyxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAkcGF0dGVybjogbixcbiAgICAgICAgICBrZXl3b3JkOiAnZnVuY3Rpb24gaWYgaW4gYnJlYWsgbmV4dCByZXBlYXQgZWxzZSBmb3Igd2hpbGUnLFxuICAgICAgICAgIGxpdGVyYWw6XG4gICAgICAgICAgICAnTlVMTCBOQSBUUlVFIEZBTFNFIEluZiBOYU4gTkFfaW50ZWdlcl98MTAgTkFfcmVhbF98MTAgTkFfY2hhcmFjdGVyX3wxMCBOQV9jb21wbGV4X3wxMCcsXG4gICAgICAgICAgYnVpbHRfaW46XG4gICAgICAgICAgICAnTEVUVEVSUyBsZXR0ZXJzIG1vbnRoLmFiYiBtb250aC5uYW1lIHBpIFQgRiBhYnMgYWNvcyBhY29zaCBhbGwgYW55IGFueU5BIEFyZyBhcy5jYWxsIGFzLmNoYXJhY3RlciBhcy5jb21wbGV4IGFzLmRvdWJsZSBhcy5lbnZpcm9ubWVudCBhcy5pbnRlZ2VyIGFzLmxvZ2ljYWwgYXMubnVsbC5kZWZhdWx0IGFzLm51bWVyaWMgYXMucmF3IGFzaW4gYXNpbmggYXRhbiBhdGFuaCBhdHRyIGF0dHJpYnV0ZXMgYmFzZWVudiBicm93c2VyIGMgY2FsbCBjZWlsaW5nIGNsYXNzIENvbmogY29zIGNvc2ggY29zcGkgY3VtbWF4IGN1bW1pbiBjdW1wcm9kIGN1bXN1bSBkaWdhbW1hIGRpbSBkaW1uYW1lcyBlbXB0eWVudiBleHAgZXhwcmVzc2lvbiBmbG9vciBmb3JjZUFuZENhbGwgZ2FtbWEgZ2MudGltZSBnbG9iYWxlbnYgSW0gaW50ZXJhY3RpdmUgaW52aXNpYmxlIGlzLmFycmF5IGlzLmF0b21pYyBpcy5jYWxsIGlzLmNoYXJhY3RlciBpcy5jb21wbGV4IGlzLmRvdWJsZSBpcy5lbnZpcm9ubWVudCBpcy5leHByZXNzaW9uIGlzLmZpbml0ZSBpcy5mdW5jdGlvbiBpcy5pbmZpbml0ZSBpcy5pbnRlZ2VyIGlzLmxhbmd1YWdlIGlzLmxpc3QgaXMubG9naWNhbCBpcy5tYXRyaXggaXMubmEgaXMubmFtZSBpcy5uYW4gaXMubnVsbCBpcy5udW1lcmljIGlzLm9iamVjdCBpcy5wYWlybGlzdCBpcy5yYXcgaXMucmVjdXJzaXZlIGlzLnNpbmdsZSBpcy5zeW1ib2wgbGF6eUxvYWREQmZldGNoIGxlbmd0aCBsZ2FtbWEgbGlzdCBsb2cgbWF4IG1pbiBtaXNzaW5nIE1vZCBuYW1lcyBuYXJncyBuemNoYXIgb2xkQ2xhc3Mgb24uZXhpdCBwb3MudG8uZW52IHByb2MudGltZSBwcm9kIHF1b3RlIHJhbmdlIFJlIHJlcCByZXRyYWNlbWVtIHJldHVybiByb3VuZCBzZXFfYWxvbmcgc2VxX2xlbiBzZXEuaW50IHNpZ24gc2lnbmlmIHNpbiBzaW5oIHNpbnBpIHNxcnQgc3RhbmRhcmRHZW5lcmljIHN1YnN0aXR1dGUgc3VtIHN3aXRjaCB0YW4gdGFuaCB0YW5waSB0cmFjZW1lbSB0cmlnYW1tYSB0cnVuYyB1bmNsYXNzIHVudHJhY2VtZW0gVXNlTWV0aG9kIHh0ZnJtJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGlsZXJFeHRlbnNpb25zOiBbXG4gICAgICAgICAgKGEsIG4pID0+IHtcbiAgICAgICAgICAgIGlmICghYS5iZWZvcmVNYXRjaCkgcmV0dXJuXG4gICAgICAgICAgICBpZiAoYS5zdGFydHMpIHRocm93IEVycm9yKCdiZWZvcmVNYXRjaCBjYW5ub3QgYmUgdXNlZCB3aXRoIHN0YXJ0cycpXG4gICAgICAgICAgICBjb25zdCBpID0gT2JqZWN0LmFzc2lnbih7fSwgYSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGEpLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBhW2VdXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKGEuYmVnaW4gPSBlKGkuYmVmb3JlTWF0Y2gsIGUoJyg/PScsIGkuYmVnaW4sICcpJykpKSxcbiAgICAgICAgICAgICAgKGEuc3RhcnRzID0ge1xuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICBjb250YWluczogW09iamVjdC5hc3NpZ24oaSwgeyBlbmRzUGFyZW50OiAhMCB9KV0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAoYS5yZWxldmFuY2UgPSAwKSxcbiAgICAgICAgICAgICAgZGVsZXRlIGkuYmVmb3JlTWF0Y2hcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGEuQ09NTUVOVCgvIycvLCAvJC8sIHtcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAnQGV4YW1wbGVzJyxcbiAgICAgICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgYmVnaW46IC9cXG4vIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgYmVnaW46IC8jJ1xccyooPz1AW2EtekEtWl0rKS8sIGVuZHNQYXJlbnQ6ICEwIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgYmVnaW46IC8jJy8sIGVuZDogLyQvLCBleGNsdWRlQmVnaW46ICEwIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAnQHBhcmFtJyxcbiAgICAgICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgeyBiZWdpbjogbiB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAvYCg/OlxcXFwufFteYFxcXFxdKStgLyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBlbmRzUGFyZW50OiAhMCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdkb2N0YWcnLCBiZWdpbjogL0BbYS16QS1aXSsvIH0sXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbWV0YS1rZXl3b3JkJywgYmVnaW46IC9cXFxcW2EtekEtWl0rLyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICBjb250YWluczogW2EuQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICBhLkVORF9TQU1FX0FTX0JFR0lOKHsgYmVnaW46IC9bclJdXCIoLSopXFwoLywgZW5kOiAvXFwpKC0qKVwiLyB9KSxcbiAgICAgICAgICAgICAgYS5FTkRfU0FNRV9BU19CRUdJTih7IGJlZ2luOiAvW3JSXVwiKC0qKVxcey8sIGVuZDogL1xcfSgtKilcIi8gfSksXG4gICAgICAgICAgICAgIGEuRU5EX1NBTUVfQVNfQkVHSU4oeyBiZWdpbjogL1tyUl1cIigtKilcXFsvLCBlbmQ6IC9cXF0oLSopXCIvIH0pLFxuICAgICAgICAgICAgICBhLkVORF9TQU1FX0FTX0JFR0lOKHsgYmVnaW46IC9bclJdJygtKilcXCgvLCBlbmQ6IC9cXCkoLSopJy8gfSksXG4gICAgICAgICAgICAgIGEuRU5EX1NBTUVfQVNfQkVHSU4oeyBiZWdpbjogL1tyUl0nKC0qKVxcey8sIGVuZDogL1xcfSgtKiknLyB9KSxcbiAgICAgICAgICAgICAgYS5FTkRfU0FNRV9BU19CRUdJTih7IGJlZ2luOiAvW3JSXScoLSopXFxbLywgZW5kOiAvXFxdKC0qKScvIH0pLFxuICAgICAgICAgICAgICB7IGJlZ2luOiAnXCInLCBlbmQ6ICdcIicsIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiBcIidcIiwgZW5kOiBcIidcIiwgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGJlZm9yZU1hdGNoOiAvKFteYS16QS1aMC05Ll9dKS8sXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWF0Y2g6IC8wW3hYXVswLTlhLWZBLUZdK1xcLlswLTlhLWZBLUZdKltwUF1bKy1dP1xcZCtpPy8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtYXRjaDogLzBbeFhdWzAtOWEtZkEtRl0rKFtwUF1bKy1dP1xcZCspP1tMaV0/LyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1hdGNoOiAvKFxcZCsoXFwuXFxkKik/fFxcLlxcZCspKFtlRV1bKy1dP1xcZCspP1tMaV0/LyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnJScsIGVuZDogJyUnIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IGUoL1thLXpBLVpdW2EtekEtWl8wLTldKi8sICdcXFxccys8LVxcXFxzKycpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdgJyxcbiAgICAgICAgICAgIGVuZDogJ2AnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvXFxcXC4vLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAncnVieScsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgZnVuY3Rpb24gZSguLi5lKSB7XG4gICAgICByZXR1cm4gZVxuICAgICAgICAubWFwKGUgPT4ge1xuICAgICAgICAgIHJldHVybiAobiA9IGUpID8gKCdzdHJpbmcnID09IHR5cGVvZiBuID8gbiA6IG4uc291cmNlKSA6IG51bGxcbiAgICAgICAgICB2YXIgblxuICAgICAgICB9KVxuICAgICAgICAuam9pbignJylcbiAgICB9XG4gICAgcmV0dXJuIG4gPT4ge1xuICAgICAgY29uc3QgYSA9XG4gICAgICAgICAgJyhbYS16QS1aX11cXFxcdypbIT89XT98Wy0rfl1AfDw8fD4+fD1+fD09PT98PD0+fFs8Pl09P3xcXFxcKlxcXFwqfFstLyslXiYqfmB8XXxcXFxcW1xcXFxdPT8pJyxcbiAgICAgICAgaSA9IHtcbiAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2FuZCB0aGVuIGRlZmluZWQgbW9kdWxlIGluIHJldHVybiByZWRvIGlmIEJFR0lOIHJldHJ5IGVuZCBmb3Igc2VsZiB3aGVuIG5leHQgdW50aWwgZG8gYmVnaW4gdW5sZXNzIEVORCByZXNjdWUgZWxzZSBicmVhayB1bmRlZiBub3Qgc3VwZXIgY2xhc3MgY2FzZSByZXF1aXJlIHlpZWxkIGFsaWFzIHdoaWxlIGVuc3VyZSBlbHNpZiBvciBpbmNsdWRlIGF0dHJfcmVhZGVyIGF0dHJfd3JpdGVyIGF0dHJfYWNjZXNzb3IgX19GSUxFX18nLFxuICAgICAgICAgIGJ1aWx0X2luOiAncHJvYyBsYW1iZGEnLFxuICAgICAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIG5pbCcsXG4gICAgICAgIH0sXG4gICAgICAgIHMgPSB7IGNsYXNzTmFtZTogJ2RvY3RhZycsIGJlZ2luOiAnQFtBLVphLXpdKycgfSxcbiAgICAgICAgciA9IHsgYmVnaW46ICcjPCcsIGVuZDogJz4nIH0sXG4gICAgICAgIGIgPSBbXG4gICAgICAgICAgbi5DT01NRU5UKCcjJywgJyQnLCB7IGNvbnRhaW5zOiBbc10gfSksXG4gICAgICAgICAgbi5DT01NRU5UKCdePWJlZ2luJywgJ149ZW5kJywgeyBjb250YWluczogW3NdLCByZWxldmFuY2U6IDEwIH0pLFxuICAgICAgICAgIG4uQ09NTUVOVCgnXl9fRU5EX18nLCAnXFxcXG4kJyksXG4gICAgICAgIF0sXG4gICAgICAgIGMgPSB7IGNsYXNzTmFtZTogJ3N1YnN0JywgYmVnaW46IC8jXFx7LywgZW5kOiAvXFx9Lywga2V5d29yZHM6IGkgfSxcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgIGNvbnRhaW5zOiBbbi5CQUNLU0xBU0hfRVNDQVBFLCBjXSxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogLycvLFxuICAgICAgICAgICAgICBlbmQ6IC8nLyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9gLywgZW5kOiAvYC8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC8lW3FRd1d4XT9cXCgvLCBlbmQ6IC9cXCkvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvJVtxUXdXeF0/XFxbLywgZW5kOiAvXFxdLyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogLyVbcVF3V3hdP1xcey8sIGVuZDogL1xcfS8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC8lW3FRd1d4XT88LyxcbiAgICAgICAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogLyVbcVF3V3hdP1xcLy8sIGVuZDogL1xcLy8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC8lW3FRd1d4XT8lLywgZW5kOiAvJS8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC8lW3FRd1d4XT8tLywgZW5kOiAvLS8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC8lW3FRd1d4XT9cXHwvLCBlbmQ6IC9cXHwvIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXFxCXFw/KFxcXFxcXGR7MSwzfSkvLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXEJcXD8oXFxcXHhbQS1GYS1mMC05XXsxLDJ9KS8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC9cXEJcXD8oXFxcXHVcXHs/W0EtRmEtZjAtOV17MSw2fVxcfT8pLyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXFxCXFw/KFxcXFxNLVxcXFxDLXxcXFxcTS1cXFxcY3xcXFxcY1xcXFxNLXxcXFxcTS18XFxcXEMtXFxcXE0tKVtcXHgyMC1cXHg3ZV0vLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC9cXEJcXD9cXFxcKGN8Qy0pW1xceDIwLVxceDdlXS8sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL1xcQlxcP1xcXFw/XFxTLyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogLzw8Wy1+XT8nPyhcXHcrKVxcbig/OlteXFxuXSpcXG4pKj9cXHMqXFwxXFxiLyxcbiAgICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAvPDxbLX5dPyc/LyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG4uRU5EX1NBTUVfQVNfQkVHSU4oe1xuICAgICAgICAgICAgICAgICAgYmVnaW46IC8oXFx3KykvLFxuICAgICAgICAgICAgICAgICAgZW5kOiAvKFxcdyspLyxcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbbi5CQUNLU0xBU0hfRVNDQVBFLCBjXSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZyA9ICdbMC05XShfP1swLTldKSonLFxuICAgICAgICBkID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiBgXFxcXGIoWzEtOV0oXz9bMC05XSkqfDApKFxcXFwuKCR7Z30pKT8oW2VFXVsrLV0/KCR7Z30pfHIpP2k/XFxcXGJgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYjBbZERdWzAtOV0oXz9bMC05XSkqcj9pP1xcXFxiJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAnXFxcXGIwW2JCXVswLTFdKF8/WzAtMV0pKnI/aT9cXFxcYicgfSxcbiAgICAgICAgICAgIHsgYmVnaW46ICdcXFxcYjBbb09dWzAtN10oXz9bMC03XSkqcj9pP1xcXFxiJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiMFt4WF1bMC05YS1mQS1GXShfP1swLTlhLWZBLUZdKSpyP2k/XFxcXGInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYjAoXz9bMC03XSkrcj9pP1xcXFxiJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbCA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgIGJlZ2luOiAnXFxcXCgnLFxuICAgICAgICAgIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgICBlbmRzUGFyZW50OiAhMCxcbiAgICAgICAgICBrZXl3b3JkczogaSxcbiAgICAgICAgfSxcbiAgICAgICAgbyA9IFtcbiAgICAgICAgICB0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBtb2R1bGUnLFxuICAgICAgICAgICAgZW5kOiAnJHw7JyxcbiAgICAgICAgICAgIGlsbGVnYWw6IC89LyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIG4uaW5oZXJpdChuLlRJVExFX01PREUsIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1tBLVphLXpfXVxcXFx3Kig6OlxcXFx3KykqKFxcXFw/fCEpPycsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICc8XFxcXHMqJyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogJygnICsgbi5JREVOVF9SRSArICc6Oik/JyArIG4uSURFTlRfUkUsXG4gICAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0uY29uY2F0KGIpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW46IGUoL2RlZlxccysvLCAoKF8gPSBhICsgJ1xcXFxzKihcXFxcKHw7fCQpJyksIGUoJyg/PScsIF8sICcpJykpKSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGtleXdvcmRzOiAnZGVmJyxcbiAgICAgICAgICAgIGVuZDogJyR8OycsXG4gICAgICAgICAgICBjb250YWluczogW24uaW5oZXJpdChuLlRJVExFX01PREUsIHsgYmVnaW46IGEgfSksIGxdLmNvbmNhdChiKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46IG4uSURFTlRfUkUgKyAnOjonIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgICAgIGJlZ2luOiBuLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnKCF8XFxcXD8pPzonLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgICAgIGJlZ2luOiAnOig/IVxcXFxzKScsXG4gICAgICAgICAgICBjb250YWluczogW3QsIHsgYmVnaW46IGEgfV0sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgICAgIGJlZ2luOiBcIihcXFxcJFxcXFxXKXwoKFxcXFwkfEBAPykoXFxcXHcrKSkoPz1bXkAkP10pKD8hW0EtWmEtel0pKD8hW0AkPyddKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFx8LyxcbiAgICAgICAgICAgIGVuZDogL1xcfC8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBrZXl3b3JkczogaSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnKCcgKyBuLlJFX1NUQVJURVJTX1JFICsgJ3x1bmxlc3MpXFxcXHMqJyxcbiAgICAgICAgICAgIGtleXdvcmRzOiAndW5sZXNzJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbbi5CQUNLU0xBU0hfRVNDQVBFLCBjXSxcbiAgICAgICAgICAgICAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogJy8nLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6ICcvW2Etel0qJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvJXJcXHsvLCBlbmQ6IC9cXH1bYS16XSovIH0sXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiAnJXJcXFxcKCcsIGVuZDogJ1xcXFwpW2Etel0qJyB9LFxuICAgICAgICAgICAgICAgICAgeyBiZWdpbjogJyVyIScsIGVuZDogJyFbYS16XSonIH0sXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiAnJXJcXFxcWycsIGVuZDogJ1xcXFxdW2Etel0qJyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLmNvbmNhdChyLCBiKSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLmNvbmNhdChyLCBiKVxuICAgICAgdmFyIF9cbiAgICAgIDsoYy5jb250YWlucyA9IG8pLCAobC5jb250YWlucyA9IG8pXG4gICAgICBjb25zdCBFID0gW1xuICAgICAgICB7IGJlZ2luOiAvXlxccyo9Pi8sIHN0YXJ0czogeyBlbmQ6ICckJywgY29udGFpbnM6IG8gfSB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAnXihbPj9dPnxbXFxcXHcjXStcXFxcKFxcXFx3K1xcXFwpOlxcXFxkKzpcXFxcZCs+fChcXFxcdystKT9cXFxcZCtcXFxcLlxcXFxkK1xcXFwuXFxcXGQrKHBcXFxcZCspP1teXFxcXGRdW14+XSs+KSg/PVsgXSknLFxuICAgICAgICAgIHN0YXJ0czogeyBlbmQ6ICckJywgY29udGFpbnM6IG8gfSxcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIGIudW5zaGlmdChyKSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdSdWJ5JyxcbiAgICAgICAgICBhbGlhc2VzOiBbJ3JiJywgJ2dlbXNwZWMnLCAncG9kc3BlYycsICd0aG9yJywgJ2lyYiddLFxuICAgICAgICAgIGtleXdvcmRzOiBpLFxuICAgICAgICAgIGlsbGVnYWw6IC9cXC9cXCovLFxuICAgICAgICAgIGNvbnRhaW5zOiBbbi5TSEVCQU5HKHsgYmluYXJ5OiAncnVieScgfSldXG4gICAgICAgICAgICAuY29uY2F0KEUpXG4gICAgICAgICAgICAuY29uY2F0KGIpXG4gICAgICAgICAgICAuY29uY2F0KG8pLFxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdydXN0JyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICBjb25zdCBuID0gJyhbdWldKDh8MTZ8MzJ8NjR8MTI4fHNpemUpfGYoMzJ8NjQpKT8nLFxuICAgICAgICB0ID1cbiAgICAgICAgICAnZHJvcCBpOCBpMTYgaTMyIGk2NCBpMTI4IGlzaXplIHU4IHUxNiB1MzIgdTY0IHUxMjggdXNpemUgZjMyIGY2NCBzdHIgY2hhciBib29sIEJveCBPcHRpb24gUmVzdWx0IFN0cmluZyBWZWMgQ29weSBTZW5kIFNpemVkIFN5bmMgRHJvcCBGbiBGbk11dCBGbk9uY2UgVG9Pd25lZCBDbG9uZSBEZWJ1ZyBQYXJ0aWFsRXEgUGFydGlhbE9yZCBFcSBPcmQgQXNSZWYgQXNNdXQgSW50byBGcm9tIERlZmF1bHQgSXRlcmF0b3IgRXh0ZW5kIEludG9JdGVyYXRvciBEb3VibGVFbmRlZEl0ZXJhdG9yIEV4YWN0U2l6ZUl0ZXJhdG9yIFNsaWNlQ29uY2F0RXh0IFRvU3RyaW5nIGFzc2VydCEgYXNzZXJ0X2VxISBiaXRmbGFncyEgYnl0ZXMhIGNmZyEgY29sISBjb25jYXQhIGNvbmNhdF9pZGVudHMhIGRlYnVnX2Fzc2VydCEgZGVidWdfYXNzZXJ0X2VxISBlbnYhIHBhbmljISBmaWxlISBmb3JtYXQhIGZvcm1hdF9hcmdzISBpbmNsdWRlX2JpbiEgaW5jbHVkZV9zdHIhIGxpbmUhIGxvY2FsX2RhdGFfa2V5ISBtb2R1bGVfcGF0aCEgb3B0aW9uX2VudiEgcHJpbnQhIHByaW50bG4hIHNlbGVjdCEgc3RyaW5naWZ5ISB0cnkhIHVuaW1wbGVtZW50ZWQhIHVucmVhY2hhYmxlISB2ZWMhIHdyaXRlISB3cml0ZWxuISBtYWNyb19ydWxlcyEgYXNzZXJ0X25lISBkZWJ1Z19hc3NlcnRfbmUhJ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ1J1c3QnLFxuICAgICAgICBhbGlhc2VzOiBbJ3JzJ10sXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJHBhdHRlcm46IGUuSURFTlRfUkUgKyAnIT8nLFxuICAgICAgICAgIGtleXdvcmQ6XG4gICAgICAgICAgICAnYWJzdHJhY3QgYXMgYXN5bmMgYXdhaXQgYmVjb21lIGJveCBicmVhayBjb25zdCBjb250aW51ZSBjcmF0ZSBkbyBkeW4gZWxzZSBlbnVtIGV4dGVybiBmYWxzZSBmaW5hbCBmbiBmb3IgaWYgaW1wbCBpbiBsZXQgbG9vcCBtYWNybyBtYXRjaCBtb2QgbW92ZSBtdXQgb3ZlcnJpZGUgcHJpdiBwdWIgcmVmIHJldHVybiBzZWxmIFNlbGYgc3RhdGljIHN0cnVjdCBzdXBlciB0cmFpdCB0cnVlIHRyeSB0eXBlIHR5cGVvZiB1bnNhZmUgdW5zaXplZCB1c2UgdmlydHVhbCB3aGVyZSB3aGlsZSB5aWVsZCcsXG4gICAgICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UgU29tZSBOb25lIE9rIEVycicsXG4gICAgICAgICAgYnVpbHRfaW46IHQsXG4gICAgICAgIH0sXG4gICAgICAgIGlsbGVnYWw6ICc8LycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgZS5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGUuQ09NTUVOVCgnL1xcXFwqJywgJ1xcXFwqLycsIHsgY29udGFpbnM6IFsnc2VsZiddIH0pLFxuICAgICAgICAgIGUuaW5oZXJpdChlLlFVT1RFX1NUUklOR19NT0RFLCB7IGJlZ2luOiAvYj9cIi8sIGlsbGVnYWw6IG51bGwgfSksXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW46IC9yKCMqKVwiKC58XFxuKSo/XCJcXDEoPyEjKS8gfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvYj8nXFxcXD8oeFxcd3syfXx1XFx3ezR9fFVcXHd7OH18LiknLyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N5bWJvbCcsIGJlZ2luOiAvJ1thLXpBLVpfXVthLXpBLVowLTlfXSovIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiMGIoWzAxX10rKScgKyBuLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAnXFxcXGIwbyhbMC03X10rKScgKyBuIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiMHgoW0EtRmEtZjAtOV9dKyknICsgbixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIoXFxcXGRbXFxcXGRfXSooXFxcXC5bMC05X10rKT8oW2VFXVsrLV0/WzAtOV9dKyk/KScgKyBuLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdmbicsXG4gICAgICAgICAgICBlbmQ6ICcoXFxcXCh8PCknLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICBjb250YWluczogW2UuVU5ERVJTQ09SRV9USVRMRV9NT0RFXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgYmVnaW46ICcjIT9cXFxcWycsXG4gICAgICAgICAgICBlbmQ6ICdcXFxcXScsXG4gICAgICAgICAgICBjb250YWluczogW3sgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnLCBiZWdpbjogL1wiLywgZW5kOiAvXCIvIH1dLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ3R5cGUnLFxuICAgICAgICAgICAgZW5kOiAnOycsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBlLmluaGVyaXQoZS5VTkRFUlNDT1JFX1RJVExFX01PREUsIHtcbiAgICAgICAgICAgICAgICBlbmRzUGFyZW50OiAhMCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaWxsZWdhbDogJ1xcXFxTJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICd0cmFpdCBlbnVtIHN0cnVjdCB1bmlvbicsXG4gICAgICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICAgICAgY29udGFpbnM6IFtlLmluaGVyaXQoZS5VTkRFUlNDT1JFX1RJVExFX01PREUsIHsgZW5kc1BhcmVudDogITAgfSldLFxuICAgICAgICAgICAgaWxsZWdhbDogJ1tcXFxcd1xcXFxkXScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGJlZ2luOiBlLklERU5UX1JFICsgJzo6Jywga2V5d29yZHM6IHsgYnVpbHRfaW46IHQgfSB9LFxuICAgICAgICAgIHsgYmVnaW46ICctPicgfSxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ3Njc3MnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIGNvbnN0IGUgPSBbXG4gICAgICAgICdhJyxcbiAgICAgICAgJ2FiYnInLFxuICAgICAgICAnYWRkcmVzcycsXG4gICAgICAgICdhcnRpY2xlJyxcbiAgICAgICAgJ2FzaWRlJyxcbiAgICAgICAgJ2F1ZGlvJyxcbiAgICAgICAgJ2InLFxuICAgICAgICAnYmxvY2txdW90ZScsXG4gICAgICAgICdib2R5JyxcbiAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICdjYW52YXMnLFxuICAgICAgICAnY2FwdGlvbicsXG4gICAgICAgICdjaXRlJyxcbiAgICAgICAgJ2NvZGUnLFxuICAgICAgICAnZGQnLFxuICAgICAgICAnZGVsJyxcbiAgICAgICAgJ2RldGFpbHMnLFxuICAgICAgICAnZGZuJyxcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICdkbCcsXG4gICAgICAgICdkdCcsXG4gICAgICAgICdlbScsXG4gICAgICAgICdmaWVsZHNldCcsXG4gICAgICAgICdmaWdjYXB0aW9uJyxcbiAgICAgICAgJ2ZpZ3VyZScsXG4gICAgICAgICdmb290ZXInLFxuICAgICAgICAnZm9ybScsXG4gICAgICAgICdoMScsXG4gICAgICAgICdoMicsXG4gICAgICAgICdoMycsXG4gICAgICAgICdoNCcsXG4gICAgICAgICdoNScsXG4gICAgICAgICdoNicsXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAnaGdyb3VwJyxcbiAgICAgICAgJ2h0bWwnLFxuICAgICAgICAnaScsXG4gICAgICAgICdpZnJhbWUnLFxuICAgICAgICAnaW1nJyxcbiAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgJ2lucycsXG4gICAgICAgICdrYmQnLFxuICAgICAgICAnbGFiZWwnLFxuICAgICAgICAnbGVnZW5kJyxcbiAgICAgICAgJ2xpJyxcbiAgICAgICAgJ21haW4nLFxuICAgICAgICAnbWFyaycsXG4gICAgICAgICdtZW51JyxcbiAgICAgICAgJ25hdicsXG4gICAgICAgICdvYmplY3QnLFxuICAgICAgICAnb2wnLFxuICAgICAgICAncCcsXG4gICAgICAgICdxJyxcbiAgICAgICAgJ3F1b3RlJyxcbiAgICAgICAgJ3NhbXAnLFxuICAgICAgICAnc2VjdGlvbicsXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICdzdW1tYXJ5JyxcbiAgICAgICAgJ3N1cCcsXG4gICAgICAgICd0YWJsZScsXG4gICAgICAgICd0Ym9keScsXG4gICAgICAgICd0ZCcsXG4gICAgICAgICd0ZXh0YXJlYScsXG4gICAgICAgICd0Zm9vdCcsXG4gICAgICAgICd0aCcsXG4gICAgICAgICd0aGVhZCcsXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgJ3RyJyxcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgJ3ZhcicsXG4gICAgICAgICd2aWRlbycsXG4gICAgICBdLFxuICAgICAgdCA9IFtcbiAgICAgICAgJ2FueS1ob3ZlcicsXG4gICAgICAgICdhbnktcG9pbnRlcicsXG4gICAgICAgICdhc3BlY3QtcmF0aW8nLFxuICAgICAgICAnY29sb3InLFxuICAgICAgICAnY29sb3ItZ2FtdXQnLFxuICAgICAgICAnY29sb3ItaW5kZXgnLFxuICAgICAgICAnZGV2aWNlLWFzcGVjdC1yYXRpbycsXG4gICAgICAgICdkZXZpY2UtaGVpZ2h0JyxcbiAgICAgICAgJ2RldmljZS13aWR0aCcsXG4gICAgICAgICdkaXNwbGF5LW1vZGUnLFxuICAgICAgICAnZm9yY2VkLWNvbG9ycycsXG4gICAgICAgICdncmlkJyxcbiAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICdob3ZlcicsXG4gICAgICAgICdpbnZlcnRlZC1jb2xvcnMnLFxuICAgICAgICAnbW9ub2Nocm9tZScsXG4gICAgICAgICdvcmllbnRhdGlvbicsXG4gICAgICAgICdvdmVyZmxvdy1ibG9jaycsXG4gICAgICAgICdvdmVyZmxvdy1pbmxpbmUnLFxuICAgICAgICAncG9pbnRlcicsXG4gICAgICAgICdwcmVmZXJzLWNvbG9yLXNjaGVtZScsXG4gICAgICAgICdwcmVmZXJzLWNvbnRyYXN0JyxcbiAgICAgICAgJ3ByZWZlcnMtcmVkdWNlZC1tb3Rpb24nLFxuICAgICAgICAncHJlZmVycy1yZWR1Y2VkLXRyYW5zcGFyZW5jeScsXG4gICAgICAgICdyZXNvbHV0aW9uJyxcbiAgICAgICAgJ3NjYW4nLFxuICAgICAgICAnc2NyaXB0aW5nJyxcbiAgICAgICAgJ3VwZGF0ZScsXG4gICAgICAgICd3aWR0aCcsXG4gICAgICAgICdtaW4td2lkdGgnLFxuICAgICAgICAnbWF4LXdpZHRoJyxcbiAgICAgICAgJ21pbi1oZWlnaHQnLFxuICAgICAgICAnbWF4LWhlaWdodCcsXG4gICAgICBdLFxuICAgICAgaSA9IFtcbiAgICAgICAgJ2FjdGl2ZScsXG4gICAgICAgICdhbnktbGluaycsXG4gICAgICAgICdibGFuaycsXG4gICAgICAgICdjaGVja2VkJyxcbiAgICAgICAgJ2N1cnJlbnQnLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICdkZWZpbmVkJyxcbiAgICAgICAgJ2RpcicsXG4gICAgICAgICdkaXNhYmxlZCcsXG4gICAgICAgICdkcm9wJyxcbiAgICAgICAgJ2VtcHR5JyxcbiAgICAgICAgJ2VuYWJsZWQnLFxuICAgICAgICAnZmlyc3QnLFxuICAgICAgICAnZmlyc3QtY2hpbGQnLFxuICAgICAgICAnZmlyc3Qtb2YtdHlwZScsXG4gICAgICAgICdmdWxsc2NyZWVuJyxcbiAgICAgICAgJ2Z1dHVyZScsXG4gICAgICAgICdmb2N1cycsXG4gICAgICAgICdmb2N1cy12aXNpYmxlJyxcbiAgICAgICAgJ2ZvY3VzLXdpdGhpbicsXG4gICAgICAgICdoYXMnLFxuICAgICAgICAnaG9zdCcsXG4gICAgICAgICdob3N0LWNvbnRleHQnLFxuICAgICAgICAnaG92ZXInLFxuICAgICAgICAnaW5kZXRlcm1pbmF0ZScsXG4gICAgICAgICdpbi1yYW5nZScsXG4gICAgICAgICdpbnZhbGlkJyxcbiAgICAgICAgJ2lzJyxcbiAgICAgICAgJ2xhbmcnLFxuICAgICAgICAnbGFzdC1jaGlsZCcsXG4gICAgICAgICdsYXN0LW9mLXR5cGUnLFxuICAgICAgICAnbGVmdCcsXG4gICAgICAgICdsaW5rJyxcbiAgICAgICAgJ2xvY2FsLWxpbmsnLFxuICAgICAgICAnbm90JyxcbiAgICAgICAgJ250aC1jaGlsZCcsXG4gICAgICAgICdudGgtY29sJyxcbiAgICAgICAgJ250aC1sYXN0LWNoaWxkJyxcbiAgICAgICAgJ250aC1sYXN0LWNvbCcsXG4gICAgICAgICdudGgtbGFzdC1vZi10eXBlJyxcbiAgICAgICAgJ250aC1vZi10eXBlJyxcbiAgICAgICAgJ29ubHktY2hpbGQnLFxuICAgICAgICAnb25seS1vZi10eXBlJyxcbiAgICAgICAgJ29wdGlvbmFsJyxcbiAgICAgICAgJ291dC1vZi1yYW5nZScsXG4gICAgICAgICdwYXN0JyxcbiAgICAgICAgJ3BsYWNlaG9sZGVyLXNob3duJyxcbiAgICAgICAgJ3JlYWQtb25seScsXG4gICAgICAgICdyZWFkLXdyaXRlJyxcbiAgICAgICAgJ3JlcXVpcmVkJyxcbiAgICAgICAgJ3JpZ2h0JyxcbiAgICAgICAgJ3Jvb3QnLFxuICAgICAgICAnc2NvcGUnLFxuICAgICAgICAndGFyZ2V0JyxcbiAgICAgICAgJ3RhcmdldC13aXRoaW4nLFxuICAgICAgICAndXNlci1pbnZhbGlkJyxcbiAgICAgICAgJ3ZhbGlkJyxcbiAgICAgICAgJ3Zpc2l0ZWQnLFxuICAgICAgICAnd2hlcmUnLFxuICAgICAgXSxcbiAgICAgIG8gPSBbXG4gICAgICAgICdhZnRlcicsXG4gICAgICAgICdiYWNrZHJvcCcsXG4gICAgICAgICdiZWZvcmUnLFxuICAgICAgICAnY3VlJyxcbiAgICAgICAgJ2N1ZS1yZWdpb24nLFxuICAgICAgICAnZmlyc3QtbGV0dGVyJyxcbiAgICAgICAgJ2ZpcnN0LWxpbmUnLFxuICAgICAgICAnZ3JhbW1hci1lcnJvcicsXG4gICAgICAgICdtYXJrZXInLFxuICAgICAgICAncGFydCcsXG4gICAgICAgICdwbGFjZWhvbGRlcicsXG4gICAgICAgICdzZWxlY3Rpb24nLFxuICAgICAgICAnc2xvdHRlZCcsXG4gICAgICAgICdzcGVsbGluZy1lcnJvcicsXG4gICAgICBdLFxuICAgICAgciA9IFtcbiAgICAgICAgJ2FsaWduLWNvbnRlbnQnLFxuICAgICAgICAnYWxpZ24taXRlbXMnLFxuICAgICAgICAnYWxpZ24tc2VsZicsXG4gICAgICAgICdhbmltYXRpb24nLFxuICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JyxcbiAgICAgICAgJ2FuaW1hdGlvbi1kaXJlY3Rpb24nLFxuICAgICAgICAnYW5pbWF0aW9uLWR1cmF0aW9uJyxcbiAgICAgICAgJ2FuaW1hdGlvbi1maWxsLW1vZGUnLFxuICAgICAgICAnYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCcsXG4gICAgICAgICdhbmltYXRpb24tbmFtZScsXG4gICAgICAgICdhbmltYXRpb24tcGxheS1zdGF0ZScsXG4gICAgICAgICdhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uJyxcbiAgICAgICAgJ2F1dG8nLFxuICAgICAgICAnYmFja2ZhY2UtdmlzaWJpbGl0eScsXG4gICAgICAgICdiYWNrZ3JvdW5kJyxcbiAgICAgICAgJ2JhY2tncm91bmQtYXR0YWNobWVudCcsXG4gICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnLFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcicsXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJyxcbiAgICAgICAgJ2JhY2tncm91bmQtb3JpZ2luJyxcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nLFxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnLFxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJyxcbiAgICAgICAgJ2JvcmRlcicsXG4gICAgICAgICdib3JkZXItYm90dG9tJyxcbiAgICAgICAgJ2JvcmRlci1ib3R0b20tY29sb3InLFxuICAgICAgICAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycsXG4gICAgICAgICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsXG4gICAgICAgICdib3JkZXItYm90dG9tLXN0eWxlJyxcbiAgICAgICAgJ2JvcmRlci1ib3R0b20td2lkdGgnLFxuICAgICAgICAnYm9yZGVyLWNvbGxhcHNlJyxcbiAgICAgICAgJ2JvcmRlci1jb2xvcicsXG4gICAgICAgICdib3JkZXItaW1hZ2UnLFxuICAgICAgICAnYm9yZGVyLWltYWdlLW91dHNldCcsXG4gICAgICAgICdib3JkZXItaW1hZ2UtcmVwZWF0JyxcbiAgICAgICAgJ2JvcmRlci1pbWFnZS1zbGljZScsXG4gICAgICAgICdib3JkZXItaW1hZ2Utc291cmNlJyxcbiAgICAgICAgJ2JvcmRlci1pbWFnZS13aWR0aCcsXG4gICAgICAgICdib3JkZXItbGVmdCcsXG4gICAgICAgICdib3JkZXItbGVmdC1jb2xvcicsXG4gICAgICAgICdib3JkZXItbGVmdC1zdHlsZScsXG4gICAgICAgICdib3JkZXItbGVmdC13aWR0aCcsXG4gICAgICAgICdib3JkZXItcmFkaXVzJyxcbiAgICAgICAgJ2JvcmRlci1yaWdodCcsXG4gICAgICAgICdib3JkZXItcmlnaHQtY29sb3InLFxuICAgICAgICAnYm9yZGVyLXJpZ2h0LXN0eWxlJyxcbiAgICAgICAgJ2JvcmRlci1yaWdodC13aWR0aCcsXG4gICAgICAgICdib3JkZXItc3BhY2luZycsXG4gICAgICAgICdib3JkZXItc3R5bGUnLFxuICAgICAgICAnYm9yZGVyLXRvcCcsXG4gICAgICAgICdib3JkZXItdG9wLWNvbG9yJyxcbiAgICAgICAgJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLFxuICAgICAgICAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnLFxuICAgICAgICAnYm9yZGVyLXRvcC1zdHlsZScsXG4gICAgICAgICdib3JkZXItdG9wLXdpZHRoJyxcbiAgICAgICAgJ2JvcmRlci13aWR0aCcsXG4gICAgICAgICdib3R0b20nLFxuICAgICAgICAnYm94LWRlY29yYXRpb24tYnJlYWsnLFxuICAgICAgICAnYm94LXNoYWRvdycsXG4gICAgICAgICdib3gtc2l6aW5nJyxcbiAgICAgICAgJ2JyZWFrLWFmdGVyJyxcbiAgICAgICAgJ2JyZWFrLWJlZm9yZScsXG4gICAgICAgICdicmVhay1pbnNpZGUnLFxuICAgICAgICAnY2FwdGlvbi1zaWRlJyxcbiAgICAgICAgJ2NsZWFyJyxcbiAgICAgICAgJ2NsaXAnLFxuICAgICAgICAnY2xpcC1wYXRoJyxcbiAgICAgICAgJ2NvbG9yJyxcbiAgICAgICAgJ2NvbHVtbi1jb3VudCcsXG4gICAgICAgICdjb2x1bW4tZmlsbCcsXG4gICAgICAgICdjb2x1bW4tZ2FwJyxcbiAgICAgICAgJ2NvbHVtbi1ydWxlJyxcbiAgICAgICAgJ2NvbHVtbi1ydWxlLWNvbG9yJyxcbiAgICAgICAgJ2NvbHVtbi1ydWxlLXN0eWxlJyxcbiAgICAgICAgJ2NvbHVtbi1ydWxlLXdpZHRoJyxcbiAgICAgICAgJ2NvbHVtbi1zcGFuJyxcbiAgICAgICAgJ2NvbHVtbi13aWR0aCcsXG4gICAgICAgICdjb2x1bW5zJyxcbiAgICAgICAgJ2NvbnRlbnQnLFxuICAgICAgICAnY291bnRlci1pbmNyZW1lbnQnLFxuICAgICAgICAnY291bnRlci1yZXNldCcsXG4gICAgICAgICdjdXJzb3InLFxuICAgICAgICAnZGlyZWN0aW9uJyxcbiAgICAgICAgJ2Rpc3BsYXknLFxuICAgICAgICAnZW1wdHktY2VsbHMnLFxuICAgICAgICAnZmlsdGVyJyxcbiAgICAgICAgJ2ZsZXgnLFxuICAgICAgICAnZmxleC1iYXNpcycsXG4gICAgICAgICdmbGV4LWRpcmVjdGlvbicsXG4gICAgICAgICdmbGV4LWZsb3cnLFxuICAgICAgICAnZmxleC1ncm93JyxcbiAgICAgICAgJ2ZsZXgtc2hyaW5rJyxcbiAgICAgICAgJ2ZsZXgtd3JhcCcsXG4gICAgICAgICdmbG9hdCcsXG4gICAgICAgICdmb250JyxcbiAgICAgICAgJ2ZvbnQtZGlzcGxheScsXG4gICAgICAgICdmb250LWZhbWlseScsXG4gICAgICAgICdmb250LWZlYXR1cmUtc2V0dGluZ3MnLFxuICAgICAgICAnZm9udC1rZXJuaW5nJyxcbiAgICAgICAgJ2ZvbnQtbGFuZ3VhZ2Utb3ZlcnJpZGUnLFxuICAgICAgICAnZm9udC1zaXplJyxcbiAgICAgICAgJ2ZvbnQtc2l6ZS1hZGp1c3QnLFxuICAgICAgICAnZm9udC1zbW9vdGhpbmcnLFxuICAgICAgICAnZm9udC1zdHJldGNoJyxcbiAgICAgICAgJ2ZvbnQtc3R5bGUnLFxuICAgICAgICAnZm9udC12YXJpYW50JyxcbiAgICAgICAgJ2ZvbnQtdmFyaWFudC1saWdhdHVyZXMnLFxuICAgICAgICAnZm9udC12YXJpYXRpb24tc2V0dGluZ3MnLFxuICAgICAgICAnZm9udC13ZWlnaHQnLFxuICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgJ2h5cGhlbnMnLFxuICAgICAgICAnaWNvbicsXG4gICAgICAgICdpbWFnZS1vcmllbnRhdGlvbicsXG4gICAgICAgICdpbWFnZS1yZW5kZXJpbmcnLFxuICAgICAgICAnaW1hZ2UtcmVzb2x1dGlvbicsXG4gICAgICAgICdpbWUtbW9kZScsXG4gICAgICAgICdpbmhlcml0JyxcbiAgICAgICAgJ2luaXRpYWwnLFxuICAgICAgICAnanVzdGlmeS1jb250ZW50JyxcbiAgICAgICAgJ2xlZnQnLFxuICAgICAgICAnbGV0dGVyLXNwYWNpbmcnLFxuICAgICAgICAnbGluZS1oZWlnaHQnLFxuICAgICAgICAnbGlzdC1zdHlsZScsXG4gICAgICAgICdsaXN0LXN0eWxlLWltYWdlJyxcbiAgICAgICAgJ2xpc3Qtc3R5bGUtcG9zaXRpb24nLFxuICAgICAgICAnbGlzdC1zdHlsZS10eXBlJyxcbiAgICAgICAgJ21hcmdpbicsXG4gICAgICAgICdtYXJnaW4tYm90dG9tJyxcbiAgICAgICAgJ21hcmdpbi1sZWZ0JyxcbiAgICAgICAgJ21hcmdpbi1yaWdodCcsXG4gICAgICAgICdtYXJnaW4tdG9wJyxcbiAgICAgICAgJ21hcmtzJyxcbiAgICAgICAgJ21hc2snLFxuICAgICAgICAnbWF4LWhlaWdodCcsXG4gICAgICAgICdtYXgtd2lkdGgnLFxuICAgICAgICAnbWluLWhlaWdodCcsXG4gICAgICAgICdtaW4td2lkdGgnLFxuICAgICAgICAnbmF2LWRvd24nLFxuICAgICAgICAnbmF2LWluZGV4JyxcbiAgICAgICAgJ25hdi1sZWZ0JyxcbiAgICAgICAgJ25hdi1yaWdodCcsXG4gICAgICAgICduYXYtdXAnLFxuICAgICAgICAnbm9uZScsXG4gICAgICAgICdub3JtYWwnLFxuICAgICAgICAnb2JqZWN0LWZpdCcsXG4gICAgICAgICdvYmplY3QtcG9zaXRpb24nLFxuICAgICAgICAnb3BhY2l0eScsXG4gICAgICAgICdvcmRlcicsXG4gICAgICAgICdvcnBoYW5zJyxcbiAgICAgICAgJ291dGxpbmUnLFxuICAgICAgICAnb3V0bGluZS1jb2xvcicsXG4gICAgICAgICdvdXRsaW5lLW9mZnNldCcsXG4gICAgICAgICdvdXRsaW5lLXN0eWxlJyxcbiAgICAgICAgJ291dGxpbmUtd2lkdGgnLFxuICAgICAgICAnb3ZlcmZsb3cnLFxuICAgICAgICAnb3ZlcmZsb3ctd3JhcCcsXG4gICAgICAgICdvdmVyZmxvdy14JyxcbiAgICAgICAgJ292ZXJmbG93LXknLFxuICAgICAgICAncGFkZGluZycsXG4gICAgICAgICdwYWRkaW5nLWJvdHRvbScsXG4gICAgICAgICdwYWRkaW5nLWxlZnQnLFxuICAgICAgICAncGFkZGluZy1yaWdodCcsXG4gICAgICAgICdwYWRkaW5nLXRvcCcsXG4gICAgICAgICdwYWdlLWJyZWFrLWFmdGVyJyxcbiAgICAgICAgJ3BhZ2UtYnJlYWstYmVmb3JlJyxcbiAgICAgICAgJ3BhZ2UtYnJlYWstaW5zaWRlJyxcbiAgICAgICAgJ3BlcnNwZWN0aXZlJyxcbiAgICAgICAgJ3BlcnNwZWN0aXZlLW9yaWdpbicsXG4gICAgICAgICdwb2ludGVyLWV2ZW50cycsXG4gICAgICAgICdwb3NpdGlvbicsXG4gICAgICAgICdxdW90ZXMnLFxuICAgICAgICAncmVzaXplJyxcbiAgICAgICAgJ3JpZ2h0JyxcbiAgICAgICAgJ3NyYycsXG4gICAgICAgICd0YWItc2l6ZScsXG4gICAgICAgICd0YWJsZS1sYXlvdXQnLFxuICAgICAgICAndGV4dC1hbGlnbicsXG4gICAgICAgICd0ZXh0LWFsaWduLWxhc3QnLFxuICAgICAgICAndGV4dC1kZWNvcmF0aW9uJyxcbiAgICAgICAgJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicsXG4gICAgICAgICd0ZXh0LWRlY29yYXRpb24tbGluZScsXG4gICAgICAgICd0ZXh0LWRlY29yYXRpb24tc3R5bGUnLFxuICAgICAgICAndGV4dC1pbmRlbnQnLFxuICAgICAgICAndGV4dC1vdmVyZmxvdycsXG4gICAgICAgICd0ZXh0LXJlbmRlcmluZycsXG4gICAgICAgICd0ZXh0LXNoYWRvdycsXG4gICAgICAgICd0ZXh0LXRyYW5zZm9ybScsXG4gICAgICAgICd0ZXh0LXVuZGVybGluZS1wb3NpdGlvbicsXG4gICAgICAgICd0b3AnLFxuICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nLFxuICAgICAgICAndHJhbnNmb3JtLXN0eWxlJyxcbiAgICAgICAgJ3RyYW5zaXRpb24nLFxuICAgICAgICAndHJhbnNpdGlvbi1kZWxheScsXG4gICAgICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJyxcbiAgICAgICAgJ3RyYW5zaXRpb24tcHJvcGVydHknLFxuICAgICAgICAndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nLFxuICAgICAgICAndW5pY29kZS1iaWRpJyxcbiAgICAgICAgJ3ZlcnRpY2FsLWFsaWduJyxcbiAgICAgICAgJ3Zpc2liaWxpdHknLFxuICAgICAgICAnd2hpdGUtc3BhY2UnLFxuICAgICAgICAnd2lkb3dzJyxcbiAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgJ3dvcmQtYnJlYWsnLFxuICAgICAgICAnd29yZC1zcGFjaW5nJyxcbiAgICAgICAgJ3dvcmQtd3JhcCcsXG4gICAgICAgICd6LWluZGV4JyxcbiAgICAgIF0ucmV2ZXJzZSgpXG4gICAgcmV0dXJuIGEgPT4ge1xuICAgICAgY29uc3QgbiA9IChlID0+ICh7XG4gICAgICAgICAgSU1QT1JUQU5UOiB7IGNsYXNzTmFtZTogJ21ldGEnLCBiZWdpbjogJyFpbXBvcnRhbnQnIH0sXG4gICAgICAgICAgSEVYQ09MT1I6IHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICBiZWdpbjogJyMoW2EtZkEtRjAtOV17Nn18W2EtZkEtRjAtOV17M30pJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIEFUVFJJQlVURV9TRUxFQ1RPUl9NT0RFOiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1hdHRyJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFxbLyxcbiAgICAgICAgICAgIGVuZDogL1xcXS8sXG4gICAgICAgICAgICBpbGxlZ2FsOiAnJCcsXG4gICAgICAgICAgICBjb250YWluczogW2UuQVBPU19TVFJJTkdfTU9ERSwgZS5RVU9URV9TVFJJTkdfTU9ERV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSkpKGEpLFxuICAgICAgICBsID0gbyxcbiAgICAgICAgcyA9IGksXG4gICAgICAgIGQgPSAnQFthLXotXSsnLFxuICAgICAgICBjID0geyBjbGFzc05hbWU6ICd2YXJpYWJsZScsIGJlZ2luOiAnKFxcXFwkW2EtekEtWi1dW2EtekEtWjAtOV8tXSopXFxcXGInIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdTQ1NTJyxcbiAgICAgICAgY2FzZV9pbnNlbnNpdGl2ZTogITAsXG4gICAgICAgIGlsbGVnYWw6IFwiWz0vfCddXCIsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgYS5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGEuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItaWQnLFxuICAgICAgICAgICAgYmVnaW46ICcjW0EtWmEtejAtOV8tXSsnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItY2xhc3MnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcLltBLVphLXowLTlfLV0rJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG4uQVRUUklCVVRFX1NFTEVDVE9SX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItdGFnJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIoJyArIGUuam9pbignfCcpICsgJylcXFxcYicsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3NlbGVjdG9yLXBzZXVkbycsIGJlZ2luOiAnOignICsgcy5qb2luKCd8JykgKyAnKScgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3NlbGVjdG9yLXBzZXVkbycsIGJlZ2luOiAnOjooJyArIGwuam9pbignfCcpICsgJyknIH0sXG4gICAgICAgICAgYyxcbiAgICAgICAgICB7IGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLywgY29udGFpbnM6IFthLkNTU19OVU1CRVJfTU9ERV0gfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScsIGJlZ2luOiAnXFxcXGIoJyArIHIuam9pbignfCcpICsgJylcXFxcYicgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgJ1xcXFxiKHdoaXRlc3BhY2V8d2FpdHx3LXJlc2l6ZXx2aXNpYmxlfHZlcnRpY2FsLXRleHR8dmVydGljYWwtaWRlb2dyYXBoaWN8dXBwZXJjYXNlfHVwcGVyLXJvbWFufHVwcGVyLWFscGhhfHVuZGVybGluZXx0cmFuc3BhcmVudHx0b3B8dGhpbnx0aGlja3x0ZXh0fHRleHQtdG9wfHRleHQtYm90dG9tfHRiLXJsfHRhYmxlLWhlYWRlci1ncm91cHx0YWJsZS1mb290ZXItZ3JvdXB8c3ctcmVzaXplfHN1cGVyfHN0cmljdHxzdGF0aWN8c3F1YXJlfHNvbGlkfHNtYWxsLWNhcHN8c2VwYXJhdGV8c2UtcmVzaXplfHNjcm9sbHxzLXJlc2l6ZXxydGx8cm93LXJlc2l6ZXxyaWRnZXxyaWdodHxyZXBlYXR8cmVwZWF0LXl8cmVwZWF0LXh8cmVsYXRpdmV8cHJvZ3Jlc3N8cG9pbnRlcnxvdmVybGluZXxvdXRzaWRlfG91dHNldHxvYmxpcXVlfG5vd3JhcHxub3QtYWxsb3dlZHxub3JtYWx8bm9uZXxudy1yZXNpemV8bm8tcmVwZWF0fG5vLWRyb3B8bmV3c3BhcGVyfG5lLXJlc2l6ZXxuLXJlc2l6ZXxtb3ZlfG1pZGRsZXxtZWRpdW18bHRyfGxyLXRifGxvd2VyY2FzZXxsb3dlci1yb21hbnxsb3dlci1hbHBoYXxsb29zZXxsaXN0LWl0ZW18bGluZXxsaW5lLXRocm91Z2h8bGluZS1lZGdlfGxpZ2h0ZXJ8bGVmdHxrZWVwLWFsbHxqdXN0aWZ5fGl0YWxpY3xpbnRlci13b3JkfGludGVyLWlkZW9ncmFwaHxpbnNpZGV8aW5zZXR8aW5saW5lfGlubGluZS1ibG9ja3xpbmhlcml0fGluYWN0aXZlfGlkZW9ncmFwaC1zcGFjZXxpZGVvZ3JhcGgtcGFyZW50aGVzaXN8aWRlb2dyYXBoLW51bWVyaWN8aWRlb2dyYXBoLWFscGhhfGhvcml6b250YWx8aGlkZGVufGhlbHB8aGFuZHxncm9vdmV8Zml4ZWR8ZWxsaXBzaXN8ZS1yZXNpemV8ZG91YmxlfGRvdHRlZHxkaXN0cmlidXRlfGRpc3RyaWJ1dGUtc3BhY2V8ZGlzdHJpYnV0ZS1sZXR0ZXJ8ZGlzdHJpYnV0ZS1hbGwtbGluZXN8ZGlzY3xkaXNhYmxlZHxkZWZhdWx0fGRlY2ltYWx8ZGFzaGVkfGNyb3NzaGFpcnxjb2xsYXBzZXxjb2wtcmVzaXplfGNpcmNsZXxjaGFyfGNlbnRlcnxjYXBpdGFsaXplfGJyZWFrLXdvcmR8YnJlYWstYWxsfGJvdHRvbXxib3RofGJvbGRlcnxib2xkfGJsb2NrfGJpZGktb3ZlcnJpZGV8YmVsb3d8YmFzZWxpbmV8YXV0b3xhbHdheXN8YWxsLXNjcm9sbHxhYnNvbHV0ZXx0YWJsZXx0YWJsZS1jZWxsKVxcXFxiJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnOicsXG4gICAgICAgICAgICBlbmQ6ICc7JyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIGMsXG4gICAgICAgICAgICAgIG4uSEVYQ09MT1IsXG4gICAgICAgICAgICAgIGEuQ1NTX05VTUJFUl9NT0RFLFxuICAgICAgICAgICAgICBhLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBhLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgICAgIG4uSU1QT1JUQU5ULFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnQChwYWdlfGZvbnQtZmFjZSknLFxuICAgICAgICAgICAgbGV4ZW1lczogZCxcbiAgICAgICAgICAgIGtleXdvcmRzOiAnQHBhZ2UgQGZvbnQtZmFjZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ0AnLFxuICAgICAgICAgICAgZW5kOiAnW3s7XScsXG4gICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgICAkcGF0dGVybjogL1thLXotXSsvLFxuICAgICAgICAgICAgICBrZXl3b3JkOiAnYW5kIG9yIG5vdCBvbmx5JyxcbiAgICAgICAgICAgICAgYXR0cmlidXRlOiB0LmpvaW4oJyAnKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7IGJlZ2luOiBkLCBjbGFzc05hbWU6ICdrZXl3b3JkJyB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAvW2Etei1dKyg/PTopLywgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyB9LFxuICAgICAgICAgICAgICBjLFxuICAgICAgICAgICAgICBhLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBhLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgICAgIG4uSEVYQ09MT1IsXG4gICAgICAgICAgICAgIGEuQ1NTX05VTUJFUl9NT0RFLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnc2hlbGwnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIHJldHVybiBzID0+ICh7XG4gICAgICBuYW1lOiAnU2hlbGwgU2Vzc2lvbicsXG4gICAgICBhbGlhc2VzOiBbJ2NvbnNvbGUnXSxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICBiZWdpbjogL15cXHN7MCwzfVsvflxcd1xcZFtcXF0oKUAtXSpbPiUkI10vLFxuICAgICAgICAgIHN0YXJ0czogeyBlbmQ6IC9bXlxcXFxdKD89XFxzKiQpLywgc3ViTGFuZ3VhZ2U6ICdiYXNoJyB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdzcWwnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIGZ1bmN0aW9uIGUoZSkge1xuICAgICAgcmV0dXJuIGUgPyAoJ3N0cmluZycgPT0gdHlwZW9mIGUgPyBlIDogZS5zb3VyY2UpIDogbnVsbFxuICAgIH1cbiAgICBmdW5jdGlvbiByKC4uLnIpIHtcbiAgICAgIHJldHVybiByLm1hcChyID0+IGUocikpLmpvaW4oJycpXG4gICAgfVxuICAgIGZ1bmN0aW9uIHQoLi4ucikge1xuICAgICAgcmV0dXJuICcoJyArIHIubWFwKHIgPT4gZShyKSkuam9pbignfCcpICsgJyknXG4gICAgfVxuICAgIHJldHVybiBlID0+IHtcbiAgICAgIGNvbnN0IG4gPSBlLkNPTU1FTlQoJy0tJywgJyQnKSxcbiAgICAgICAgYSA9IFsndHJ1ZScsICdmYWxzZScsICd1bmtub3duJ10sXG4gICAgICAgIGkgPSBbXG4gICAgICAgICAgJ2JpZ2ludCcsXG4gICAgICAgICAgJ2JpbmFyeScsXG4gICAgICAgICAgJ2Jsb2InLFxuICAgICAgICAgICdib29sZWFuJyxcbiAgICAgICAgICAnY2hhcicsXG4gICAgICAgICAgJ2NoYXJhY3RlcicsXG4gICAgICAgICAgJ2Nsb2InLFxuICAgICAgICAgICdkYXRlJyxcbiAgICAgICAgICAnZGVjJyxcbiAgICAgICAgICAnZGVjZmxvYXQnLFxuICAgICAgICAgICdkZWNpbWFsJyxcbiAgICAgICAgICAnZmxvYXQnLFxuICAgICAgICAgICdpbnQnLFxuICAgICAgICAgICdpbnRlZ2VyJyxcbiAgICAgICAgICAnaW50ZXJ2YWwnLFxuICAgICAgICAgICduY2hhcicsXG4gICAgICAgICAgJ25jbG9iJyxcbiAgICAgICAgICAnbmF0aW9uYWwnLFxuICAgICAgICAgICdudW1lcmljJyxcbiAgICAgICAgICAncmVhbCcsXG4gICAgICAgICAgJ3JvdycsXG4gICAgICAgICAgJ3NtYWxsaW50JyxcbiAgICAgICAgICAndGltZScsXG4gICAgICAgICAgJ3RpbWVzdGFtcCcsXG4gICAgICAgICAgJ3ZhcmNoYXInLFxuICAgICAgICAgICd2YXJ5aW5nJyxcbiAgICAgICAgICAndmFyYmluYXJ5JyxcbiAgICAgICAgXSxcbiAgICAgICAgcyA9IFtcbiAgICAgICAgICAnYWJzJyxcbiAgICAgICAgICAnYWNvcycsXG4gICAgICAgICAgJ2FycmF5X2FnZycsXG4gICAgICAgICAgJ2FzaW4nLFxuICAgICAgICAgICdhdGFuJyxcbiAgICAgICAgICAnYXZnJyxcbiAgICAgICAgICAnY2FzdCcsXG4gICAgICAgICAgJ2NlaWwnLFxuICAgICAgICAgICdjZWlsaW5nJyxcbiAgICAgICAgICAnY29hbGVzY2UnLFxuICAgICAgICAgICdjb3JyJyxcbiAgICAgICAgICAnY29zJyxcbiAgICAgICAgICAnY29zaCcsXG4gICAgICAgICAgJ2NvdW50JyxcbiAgICAgICAgICAnY292YXJfcG9wJyxcbiAgICAgICAgICAnY292YXJfc2FtcCcsXG4gICAgICAgICAgJ2N1bWVfZGlzdCcsXG4gICAgICAgICAgJ2RlbnNlX3JhbmsnLFxuICAgICAgICAgICdkZXJlZicsXG4gICAgICAgICAgJ2VsZW1lbnQnLFxuICAgICAgICAgICdleHAnLFxuICAgICAgICAgICdleHRyYWN0JyxcbiAgICAgICAgICAnZmlyc3RfdmFsdWUnLFxuICAgICAgICAgICdmbG9vcicsXG4gICAgICAgICAgJ2pzb25fYXJyYXknLFxuICAgICAgICAgICdqc29uX2FycmF5YWdnJyxcbiAgICAgICAgICAnanNvbl9leGlzdHMnLFxuICAgICAgICAgICdqc29uX29iamVjdCcsXG4gICAgICAgICAgJ2pzb25fb2JqZWN0YWdnJyxcbiAgICAgICAgICAnanNvbl9xdWVyeScsXG4gICAgICAgICAgJ2pzb25fdGFibGUnLFxuICAgICAgICAgICdqc29uX3RhYmxlX3ByaW1pdGl2ZScsXG4gICAgICAgICAgJ2pzb25fdmFsdWUnLFxuICAgICAgICAgICdsYWcnLFxuICAgICAgICAgICdsYXN0X3ZhbHVlJyxcbiAgICAgICAgICAnbGVhZCcsXG4gICAgICAgICAgJ2xpc3RhZ2cnLFxuICAgICAgICAgICdsbicsXG4gICAgICAgICAgJ2xvZycsXG4gICAgICAgICAgJ2xvZzEwJyxcbiAgICAgICAgICAnbG93ZXInLFxuICAgICAgICAgICdtYXgnLFxuICAgICAgICAgICdtaW4nLFxuICAgICAgICAgICdtb2QnLFxuICAgICAgICAgICdudGhfdmFsdWUnLFxuICAgICAgICAgICdudGlsZScsXG4gICAgICAgICAgJ251bGxpZicsXG4gICAgICAgICAgJ3BlcmNlbnRfcmFuaycsXG4gICAgICAgICAgJ3BlcmNlbnRpbGVfY29udCcsXG4gICAgICAgICAgJ3BlcmNlbnRpbGVfZGlzYycsXG4gICAgICAgICAgJ3Bvc2l0aW9uJyxcbiAgICAgICAgICAncG9zaXRpb25fcmVnZXgnLFxuICAgICAgICAgICdwb3dlcicsXG4gICAgICAgICAgJ3JhbmsnLFxuICAgICAgICAgICdyZWdyX2F2Z3gnLFxuICAgICAgICAgICdyZWdyX2F2Z3knLFxuICAgICAgICAgICdyZWdyX2NvdW50JyxcbiAgICAgICAgICAncmVncl9pbnRlcmNlcHQnLFxuICAgICAgICAgICdyZWdyX3IyJyxcbiAgICAgICAgICAncmVncl9zbG9wZScsXG4gICAgICAgICAgJ3JlZ3Jfc3h4JyxcbiAgICAgICAgICAncmVncl9zeHknLFxuICAgICAgICAgICdyZWdyX3N5eScsXG4gICAgICAgICAgJ3Jvd19udW1iZXInLFxuICAgICAgICAgICdzaW4nLFxuICAgICAgICAgICdzaW5oJyxcbiAgICAgICAgICAnc3FydCcsXG4gICAgICAgICAgJ3N0ZGRldl9wb3AnLFxuICAgICAgICAgICdzdGRkZXZfc2FtcCcsXG4gICAgICAgICAgJ3N1YnN0cmluZycsXG4gICAgICAgICAgJ3N1YnN0cmluZ19yZWdleCcsXG4gICAgICAgICAgJ3N1bScsXG4gICAgICAgICAgJ3RhbicsXG4gICAgICAgICAgJ3RhbmgnLFxuICAgICAgICAgICd0cmFuc2xhdGUnLFxuICAgICAgICAgICd0cmFuc2xhdGVfcmVnZXgnLFxuICAgICAgICAgICd0cmVhdCcsXG4gICAgICAgICAgJ3RyaW0nLFxuICAgICAgICAgICd0cmltX2FycmF5JyxcbiAgICAgICAgICAndW5uZXN0JyxcbiAgICAgICAgICAndXBwZXInLFxuICAgICAgICAgICd2YWx1ZV9vZicsXG4gICAgICAgICAgJ3Zhcl9wb3AnLFxuICAgICAgICAgICd2YXJfc2FtcCcsXG4gICAgICAgICAgJ3dpZHRoX2J1Y2tldCcsXG4gICAgICAgIF0sXG4gICAgICAgIG8gPSBbXG4gICAgICAgICAgJ2NyZWF0ZSB0YWJsZScsXG4gICAgICAgICAgJ2luc2VydCBpbnRvJyxcbiAgICAgICAgICAncHJpbWFyeSBrZXknLFxuICAgICAgICAgICdmb3JlaWduIGtleScsXG4gICAgICAgICAgJ25vdCBudWxsJyxcbiAgICAgICAgICAnYWx0ZXIgdGFibGUnLFxuICAgICAgICAgICdhZGQgY29uc3RyYWludCcsXG4gICAgICAgICAgJ2dyb3VwaW5nIHNldHMnLFxuICAgICAgICAgICdvbiBvdmVyZmxvdycsXG4gICAgICAgICAgJ2NoYXJhY3RlciBzZXQnLFxuICAgICAgICAgICdyZXNwZWN0IG51bGxzJyxcbiAgICAgICAgICAnaWdub3JlIG51bGxzJyxcbiAgICAgICAgICAnbnVsbHMgZmlyc3QnLFxuICAgICAgICAgICdudWxscyBsYXN0JyxcbiAgICAgICAgICAnZGVwdGggZmlyc3QnLFxuICAgICAgICAgICdicmVhZHRoIGZpcnN0JyxcbiAgICAgICAgXSxcbiAgICAgICAgYyA9IHMsXG4gICAgICAgIGwgPSBbXG4gICAgICAgICAgJ2FicycsXG4gICAgICAgICAgJ2Fjb3MnLFxuICAgICAgICAgICdhbGwnLFxuICAgICAgICAgICdhbGxvY2F0ZScsXG4gICAgICAgICAgJ2FsdGVyJyxcbiAgICAgICAgICAnYW5kJyxcbiAgICAgICAgICAnYW55JyxcbiAgICAgICAgICAnYXJlJyxcbiAgICAgICAgICAnYXJyYXknLFxuICAgICAgICAgICdhcnJheV9hZ2cnLFxuICAgICAgICAgICdhcnJheV9tYXhfY2FyZGluYWxpdHknLFxuICAgICAgICAgICdhcycsXG4gICAgICAgICAgJ2FzZW5zaXRpdmUnLFxuICAgICAgICAgICdhc2luJyxcbiAgICAgICAgICAnYXN5bW1ldHJpYycsXG4gICAgICAgICAgJ2F0JyxcbiAgICAgICAgICAnYXRhbicsXG4gICAgICAgICAgJ2F0b21pYycsXG4gICAgICAgICAgJ2F1dGhvcml6YXRpb24nLFxuICAgICAgICAgICdhdmcnLFxuICAgICAgICAgICdiZWdpbicsXG4gICAgICAgICAgJ2JlZ2luX2ZyYW1lJyxcbiAgICAgICAgICAnYmVnaW5fcGFydGl0aW9uJyxcbiAgICAgICAgICAnYmV0d2VlbicsXG4gICAgICAgICAgJ2JpZ2ludCcsXG4gICAgICAgICAgJ2JpbmFyeScsXG4gICAgICAgICAgJ2Jsb2InLFxuICAgICAgICAgICdib29sZWFuJyxcbiAgICAgICAgICAnYm90aCcsXG4gICAgICAgICAgJ2J5JyxcbiAgICAgICAgICAnY2FsbCcsXG4gICAgICAgICAgJ2NhbGxlZCcsXG4gICAgICAgICAgJ2NhcmRpbmFsaXR5JyxcbiAgICAgICAgICAnY2FzY2FkZWQnLFxuICAgICAgICAgICdjYXNlJyxcbiAgICAgICAgICAnY2FzdCcsXG4gICAgICAgICAgJ2NlaWwnLFxuICAgICAgICAgICdjZWlsaW5nJyxcbiAgICAgICAgICAnY2hhcicsXG4gICAgICAgICAgJ2NoYXJfbGVuZ3RoJyxcbiAgICAgICAgICAnY2hhcmFjdGVyJyxcbiAgICAgICAgICAnY2hhcmFjdGVyX2xlbmd0aCcsXG4gICAgICAgICAgJ2NoZWNrJyxcbiAgICAgICAgICAnY2xhc3NpZmllcicsXG4gICAgICAgICAgJ2Nsb2InLFxuICAgICAgICAgICdjbG9zZScsXG4gICAgICAgICAgJ2NvYWxlc2NlJyxcbiAgICAgICAgICAnY29sbGF0ZScsXG4gICAgICAgICAgJ2NvbGxlY3QnLFxuICAgICAgICAgICdjb2x1bW4nLFxuICAgICAgICAgICdjb21taXQnLFxuICAgICAgICAgICdjb25kaXRpb24nLFxuICAgICAgICAgICdjb25uZWN0JyxcbiAgICAgICAgICAnY29uc3RyYWludCcsXG4gICAgICAgICAgJ2NvbnRhaW5zJyxcbiAgICAgICAgICAnY29udmVydCcsXG4gICAgICAgICAgJ2NvcHknLFxuICAgICAgICAgICdjb3JyJyxcbiAgICAgICAgICAnY29ycmVzcG9uZGluZycsXG4gICAgICAgICAgJ2NvcycsXG4gICAgICAgICAgJ2Nvc2gnLFxuICAgICAgICAgICdjb3VudCcsXG4gICAgICAgICAgJ2NvdmFyX3BvcCcsXG4gICAgICAgICAgJ2NvdmFyX3NhbXAnLFxuICAgICAgICAgICdjcmVhdGUnLFxuICAgICAgICAgICdjcm9zcycsXG4gICAgICAgICAgJ2N1YmUnLFxuICAgICAgICAgICdjdW1lX2Rpc3QnLFxuICAgICAgICAgICdjdXJyZW50JyxcbiAgICAgICAgICAnY3VycmVudF9jYXRhbG9nJyxcbiAgICAgICAgICAnY3VycmVudF9kYXRlJyxcbiAgICAgICAgICAnY3VycmVudF9kZWZhdWx0X3RyYW5zZm9ybV9ncm91cCcsXG4gICAgICAgICAgJ2N1cnJlbnRfcGF0aCcsXG4gICAgICAgICAgJ2N1cnJlbnRfcm9sZScsXG4gICAgICAgICAgJ2N1cnJlbnRfcm93JyxcbiAgICAgICAgICAnY3VycmVudF9zY2hlbWEnLFxuICAgICAgICAgICdjdXJyZW50X3RpbWUnLFxuICAgICAgICAgICdjdXJyZW50X3RpbWVzdGFtcCcsXG4gICAgICAgICAgJ2N1cnJlbnRfcGF0aCcsXG4gICAgICAgICAgJ2N1cnJlbnRfcm9sZScsXG4gICAgICAgICAgJ2N1cnJlbnRfdHJhbnNmb3JtX2dyb3VwX2Zvcl90eXBlJyxcbiAgICAgICAgICAnY3VycmVudF91c2VyJyxcbiAgICAgICAgICAnY3Vyc29yJyxcbiAgICAgICAgICAnY3ljbGUnLFxuICAgICAgICAgICdkYXRlJyxcbiAgICAgICAgICAnZGF5JyxcbiAgICAgICAgICAnZGVhbGxvY2F0ZScsXG4gICAgICAgICAgJ2RlYycsXG4gICAgICAgICAgJ2RlY2ltYWwnLFxuICAgICAgICAgICdkZWNmbG9hdCcsXG4gICAgICAgICAgJ2RlY2xhcmUnLFxuICAgICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgICAnZGVmaW5lJyxcbiAgICAgICAgICAnZGVsZXRlJyxcbiAgICAgICAgICAnZGVuc2VfcmFuaycsXG4gICAgICAgICAgJ2RlcmVmJyxcbiAgICAgICAgICAnZGVzY3JpYmUnLFxuICAgICAgICAgICdkZXRlcm1pbmlzdGljJyxcbiAgICAgICAgICAnZGlzY29ubmVjdCcsXG4gICAgICAgICAgJ2Rpc3RpbmN0JyxcbiAgICAgICAgICAnZG91YmxlJyxcbiAgICAgICAgICAnZHJvcCcsXG4gICAgICAgICAgJ2R5bmFtaWMnLFxuICAgICAgICAgICdlYWNoJyxcbiAgICAgICAgICAnZWxlbWVudCcsXG4gICAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAgICdlbXB0eScsXG4gICAgICAgICAgJ2VuZCcsXG4gICAgICAgICAgJ2VuZF9mcmFtZScsXG4gICAgICAgICAgJ2VuZF9wYXJ0aXRpb24nLFxuICAgICAgICAgICdlbmQtZXhlYycsXG4gICAgICAgICAgJ2VxdWFscycsXG4gICAgICAgICAgJ2VzY2FwZScsXG4gICAgICAgICAgJ2V2ZXJ5JyxcbiAgICAgICAgICAnZXhjZXB0JyxcbiAgICAgICAgICAnZXhlYycsXG4gICAgICAgICAgJ2V4ZWN1dGUnLFxuICAgICAgICAgICdleGlzdHMnLFxuICAgICAgICAgICdleHAnLFxuICAgICAgICAgICdleHRlcm5hbCcsXG4gICAgICAgICAgJ2V4dHJhY3QnLFxuICAgICAgICAgICdmYWxzZScsXG4gICAgICAgICAgJ2ZldGNoJyxcbiAgICAgICAgICAnZmlsdGVyJyxcbiAgICAgICAgICAnZmlyc3RfdmFsdWUnLFxuICAgICAgICAgICdmbG9hdCcsXG4gICAgICAgICAgJ2Zsb29yJyxcbiAgICAgICAgICAnZm9yJyxcbiAgICAgICAgICAnZm9yZWlnbicsXG4gICAgICAgICAgJ2ZyYW1lX3JvdycsXG4gICAgICAgICAgJ2ZyZWUnLFxuICAgICAgICAgICdmcm9tJyxcbiAgICAgICAgICAnZnVsbCcsXG4gICAgICAgICAgJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAnZnVzaW9uJyxcbiAgICAgICAgICAnZ2V0JyxcbiAgICAgICAgICAnZ2xvYmFsJyxcbiAgICAgICAgICAnZ3JhbnQnLFxuICAgICAgICAgICdncm91cCcsXG4gICAgICAgICAgJ2dyb3VwaW5nJyxcbiAgICAgICAgICAnZ3JvdXBzJyxcbiAgICAgICAgICAnaGF2aW5nJyxcbiAgICAgICAgICAnaG9sZCcsXG4gICAgICAgICAgJ2hvdXInLFxuICAgICAgICAgICdpZGVudGl0eScsXG4gICAgICAgICAgJ2luJyxcbiAgICAgICAgICAnaW5kaWNhdG9yJyxcbiAgICAgICAgICAnaW5pdGlhbCcsXG4gICAgICAgICAgJ2lubmVyJyxcbiAgICAgICAgICAnaW5vdXQnLFxuICAgICAgICAgICdpbnNlbnNpdGl2ZScsXG4gICAgICAgICAgJ2luc2VydCcsXG4gICAgICAgICAgJ2ludCcsXG4gICAgICAgICAgJ2ludGVnZXInLFxuICAgICAgICAgICdpbnRlcnNlY3QnLFxuICAgICAgICAgICdpbnRlcnNlY3Rpb24nLFxuICAgICAgICAgICdpbnRlcnZhbCcsXG4gICAgICAgICAgJ2ludG8nLFxuICAgICAgICAgICdpcycsXG4gICAgICAgICAgJ2pvaW4nLFxuICAgICAgICAgICdqc29uX2FycmF5JyxcbiAgICAgICAgICAnanNvbl9hcnJheWFnZycsXG4gICAgICAgICAgJ2pzb25fZXhpc3RzJyxcbiAgICAgICAgICAnanNvbl9vYmplY3QnLFxuICAgICAgICAgICdqc29uX29iamVjdGFnZycsXG4gICAgICAgICAgJ2pzb25fcXVlcnknLFxuICAgICAgICAgICdqc29uX3RhYmxlJyxcbiAgICAgICAgICAnanNvbl90YWJsZV9wcmltaXRpdmUnLFxuICAgICAgICAgICdqc29uX3ZhbHVlJyxcbiAgICAgICAgICAnbGFnJyxcbiAgICAgICAgICAnbGFuZ3VhZ2UnLFxuICAgICAgICAgICdsYXJnZScsXG4gICAgICAgICAgJ2xhc3RfdmFsdWUnLFxuICAgICAgICAgICdsYXRlcmFsJyxcbiAgICAgICAgICAnbGVhZCcsXG4gICAgICAgICAgJ2xlYWRpbmcnLFxuICAgICAgICAgICdsZWZ0JyxcbiAgICAgICAgICAnbGlrZScsXG4gICAgICAgICAgJ2xpa2VfcmVnZXgnLFxuICAgICAgICAgICdsaXN0YWdnJyxcbiAgICAgICAgICAnbG4nLFxuICAgICAgICAgICdsb2NhbCcsXG4gICAgICAgICAgJ2xvY2FsdGltZScsXG4gICAgICAgICAgJ2xvY2FsdGltZXN0YW1wJyxcbiAgICAgICAgICAnbG9nJyxcbiAgICAgICAgICAnbG9nMTAnLFxuICAgICAgICAgICdsb3dlcicsXG4gICAgICAgICAgJ21hdGNoJyxcbiAgICAgICAgICAnbWF0Y2hfbnVtYmVyJyxcbiAgICAgICAgICAnbWF0Y2hfcmVjb2duaXplJyxcbiAgICAgICAgICAnbWF0Y2hlcycsXG4gICAgICAgICAgJ21heCcsXG4gICAgICAgICAgJ21lbWJlcicsXG4gICAgICAgICAgJ21lcmdlJyxcbiAgICAgICAgICAnbWV0aG9kJyxcbiAgICAgICAgICAnbWluJyxcbiAgICAgICAgICAnbWludXRlJyxcbiAgICAgICAgICAnbW9kJyxcbiAgICAgICAgICAnbW9kaWZpZXMnLFxuICAgICAgICAgICdtb2R1bGUnLFxuICAgICAgICAgICdtb250aCcsXG4gICAgICAgICAgJ211bHRpc2V0JyxcbiAgICAgICAgICAnbmF0aW9uYWwnLFxuICAgICAgICAgICduYXR1cmFsJyxcbiAgICAgICAgICAnbmNoYXInLFxuICAgICAgICAgICduY2xvYicsXG4gICAgICAgICAgJ25ldycsXG4gICAgICAgICAgJ25vJyxcbiAgICAgICAgICAnbm9uZScsXG4gICAgICAgICAgJ25vcm1hbGl6ZScsXG4gICAgICAgICAgJ25vdCcsXG4gICAgICAgICAgJ250aF92YWx1ZScsXG4gICAgICAgICAgJ250aWxlJyxcbiAgICAgICAgICAnbnVsbCcsXG4gICAgICAgICAgJ251bGxpZicsXG4gICAgICAgICAgJ251bWVyaWMnLFxuICAgICAgICAgICdvY3RldF9sZW5ndGgnLFxuICAgICAgICAgICdvY2N1cnJlbmNlc19yZWdleCcsXG4gICAgICAgICAgJ29mJyxcbiAgICAgICAgICAnb2Zmc2V0JyxcbiAgICAgICAgICAnb2xkJyxcbiAgICAgICAgICAnb21pdCcsXG4gICAgICAgICAgJ29uJyxcbiAgICAgICAgICAnb25lJyxcbiAgICAgICAgICAnb25seScsXG4gICAgICAgICAgJ29wZW4nLFxuICAgICAgICAgICdvcicsXG4gICAgICAgICAgJ29yZGVyJyxcbiAgICAgICAgICAnb3V0JyxcbiAgICAgICAgICAnb3V0ZXInLFxuICAgICAgICAgICdvdmVyJyxcbiAgICAgICAgICAnb3ZlcmxhcHMnLFxuICAgICAgICAgICdvdmVybGF5JyxcbiAgICAgICAgICAncGFyYW1ldGVyJyxcbiAgICAgICAgICAncGFydGl0aW9uJyxcbiAgICAgICAgICAncGF0dGVybicsXG4gICAgICAgICAgJ3BlcicsXG4gICAgICAgICAgJ3BlcmNlbnQnLFxuICAgICAgICAgICdwZXJjZW50X3JhbmsnLFxuICAgICAgICAgICdwZXJjZW50aWxlX2NvbnQnLFxuICAgICAgICAgICdwZXJjZW50aWxlX2Rpc2MnLFxuICAgICAgICAgICdwZXJpb2QnLFxuICAgICAgICAgICdwb3J0aW9uJyxcbiAgICAgICAgICAncG9zaXRpb24nLFxuICAgICAgICAgICdwb3NpdGlvbl9yZWdleCcsXG4gICAgICAgICAgJ3Bvd2VyJyxcbiAgICAgICAgICAncHJlY2VkZXMnLFxuICAgICAgICAgICdwcmVjaXNpb24nLFxuICAgICAgICAgICdwcmVwYXJlJyxcbiAgICAgICAgICAncHJpbWFyeScsXG4gICAgICAgICAgJ3Byb2NlZHVyZScsXG4gICAgICAgICAgJ3B0ZicsXG4gICAgICAgICAgJ3JhbmdlJyxcbiAgICAgICAgICAncmFuaycsXG4gICAgICAgICAgJ3JlYWRzJyxcbiAgICAgICAgICAncmVhbCcsXG4gICAgICAgICAgJ3JlY3Vyc2l2ZScsXG4gICAgICAgICAgJ3JlZicsXG4gICAgICAgICAgJ3JlZmVyZW5jZXMnLFxuICAgICAgICAgICdyZWZlcmVuY2luZycsXG4gICAgICAgICAgJ3JlZ3JfYXZneCcsXG4gICAgICAgICAgJ3JlZ3JfYXZneScsXG4gICAgICAgICAgJ3JlZ3JfY291bnQnLFxuICAgICAgICAgICdyZWdyX2ludGVyY2VwdCcsXG4gICAgICAgICAgJ3JlZ3JfcjInLFxuICAgICAgICAgICdyZWdyX3Nsb3BlJyxcbiAgICAgICAgICAncmVncl9zeHgnLFxuICAgICAgICAgICdyZWdyX3N4eScsXG4gICAgICAgICAgJ3JlZ3Jfc3l5JyxcbiAgICAgICAgICAncmVsZWFzZScsXG4gICAgICAgICAgJ3Jlc3VsdCcsXG4gICAgICAgICAgJ3JldHVybicsXG4gICAgICAgICAgJ3JldHVybnMnLFxuICAgICAgICAgICdyZXZva2UnLFxuICAgICAgICAgICdyaWdodCcsXG4gICAgICAgICAgJ3JvbGxiYWNrJyxcbiAgICAgICAgICAncm9sbHVwJyxcbiAgICAgICAgICAncm93JyxcbiAgICAgICAgICAncm93X251bWJlcicsXG4gICAgICAgICAgJ3Jvd3MnLFxuICAgICAgICAgICdydW5uaW5nJyxcbiAgICAgICAgICAnc2F2ZXBvaW50JyxcbiAgICAgICAgICAnc2NvcGUnLFxuICAgICAgICAgICdzY3JvbGwnLFxuICAgICAgICAgICdzZWFyY2gnLFxuICAgICAgICAgICdzZWNvbmQnLFxuICAgICAgICAgICdzZWVrJyxcbiAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAnc2Vuc2l0aXZlJyxcbiAgICAgICAgICAnc2Vzc2lvbl91c2VyJyxcbiAgICAgICAgICAnc2V0JyxcbiAgICAgICAgICAnc2hvdycsXG4gICAgICAgICAgJ3NpbWlsYXInLFxuICAgICAgICAgICdzaW4nLFxuICAgICAgICAgICdzaW5oJyxcbiAgICAgICAgICAnc2tpcCcsXG4gICAgICAgICAgJ3NtYWxsaW50JyxcbiAgICAgICAgICAnc29tZScsXG4gICAgICAgICAgJ3NwZWNpZmljJyxcbiAgICAgICAgICAnc3BlY2lmaWN0eXBlJyxcbiAgICAgICAgICAnc3FsJyxcbiAgICAgICAgICAnc3FsZXhjZXB0aW9uJyxcbiAgICAgICAgICAnc3Fsc3RhdGUnLFxuICAgICAgICAgICdzcWx3YXJuaW5nJyxcbiAgICAgICAgICAnc3FydCcsXG4gICAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgICAnc3RkZGV2X3BvcCcsXG4gICAgICAgICAgJ3N0ZGRldl9zYW1wJyxcbiAgICAgICAgICAnc3VibXVsdGlzZXQnLFxuICAgICAgICAgICdzdWJzZXQnLFxuICAgICAgICAgICdzdWJzdHJpbmcnLFxuICAgICAgICAgICdzdWJzdHJpbmdfcmVnZXgnLFxuICAgICAgICAgICdzdWNjZWVkcycsXG4gICAgICAgICAgJ3N1bScsXG4gICAgICAgICAgJ3N5bW1ldHJpYycsXG4gICAgICAgICAgJ3N5c3RlbScsXG4gICAgICAgICAgJ3N5c3RlbV90aW1lJyxcbiAgICAgICAgICAnc3lzdGVtX3VzZXInLFxuICAgICAgICAgICd0YWJsZScsXG4gICAgICAgICAgJ3RhYmxlc2FtcGxlJyxcbiAgICAgICAgICAndGFuJyxcbiAgICAgICAgICAndGFuaCcsXG4gICAgICAgICAgJ3RoZW4nLFxuICAgICAgICAgICd0aW1lJyxcbiAgICAgICAgICAndGltZXN0YW1wJyxcbiAgICAgICAgICAndGltZXpvbmVfaG91cicsXG4gICAgICAgICAgJ3RpbWV6b25lX21pbnV0ZScsXG4gICAgICAgICAgJ3RvJyxcbiAgICAgICAgICAndHJhaWxpbmcnLFxuICAgICAgICAgICd0cmFuc2xhdGUnLFxuICAgICAgICAgICd0cmFuc2xhdGVfcmVnZXgnLFxuICAgICAgICAgICd0cmFuc2xhdGlvbicsXG4gICAgICAgICAgJ3RyZWF0JyxcbiAgICAgICAgICAndHJpZ2dlcicsXG4gICAgICAgICAgJ3RyaW0nLFxuICAgICAgICAgICd0cmltX2FycmF5JyxcbiAgICAgICAgICAndHJ1ZScsXG4gICAgICAgICAgJ3RydW5jYXRlJyxcbiAgICAgICAgICAndWVzY2FwZScsXG4gICAgICAgICAgJ3VuaW9uJyxcbiAgICAgICAgICAndW5pcXVlJyxcbiAgICAgICAgICAndW5rbm93bicsXG4gICAgICAgICAgJ3VubmVzdCcsXG4gICAgICAgICAgJ3VwZGF0ZSAgICcsXG4gICAgICAgICAgJ3VwcGVyJyxcbiAgICAgICAgICAndXNlcicsXG4gICAgICAgICAgJ3VzaW5nJyxcbiAgICAgICAgICAndmFsdWUnLFxuICAgICAgICAgICd2YWx1ZXMnLFxuICAgICAgICAgICd2YWx1ZV9vZicsXG4gICAgICAgICAgJ3Zhcl9wb3AnLFxuICAgICAgICAgICd2YXJfc2FtcCcsXG4gICAgICAgICAgJ3ZhcmJpbmFyeScsXG4gICAgICAgICAgJ3ZhcmNoYXInLFxuICAgICAgICAgICd2YXJ5aW5nJyxcbiAgICAgICAgICAndmVyc2lvbmluZycsXG4gICAgICAgICAgJ3doZW4nLFxuICAgICAgICAgICd3aGVuZXZlcicsXG4gICAgICAgICAgJ3doZXJlJyxcbiAgICAgICAgICAnd2lkdGhfYnVja2V0JyxcbiAgICAgICAgICAnd2luZG93JyxcbiAgICAgICAgICAnd2l0aCcsXG4gICAgICAgICAgJ3dpdGhpbicsXG4gICAgICAgICAgJ3dpdGhvdXQnLFxuICAgICAgICAgICd5ZWFyJyxcbiAgICAgICAgICAnYWRkJyxcbiAgICAgICAgICAnYXNjJyxcbiAgICAgICAgICAnY29sbGF0aW9uJyxcbiAgICAgICAgICAnZGVzYycsXG4gICAgICAgICAgJ2ZpbmFsJyxcbiAgICAgICAgICAnZmlyc3QnLFxuICAgICAgICAgICdsYXN0JyxcbiAgICAgICAgICAndmlldycsXG4gICAgICAgIF0uZmlsdGVyKGUgPT4gIXMuaW5jbHVkZXMoZSkpLFxuICAgICAgICB1ID0ge1xuICAgICAgICAgIGJlZ2luOiByKC9cXGIvLCB0KC4uLmMpLCAvXFxzKlxcKC8pLFxuICAgICAgICAgIGtleXdvcmRzOiB7IGJ1aWx0X2luOiBjIH0sXG4gICAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdTUUwnLFxuICAgICAgICBjYXNlX2luc2Vuc2l0aXZlOiAhMCxcbiAgICAgICAgaWxsZWdhbDogL1t7fV18PFxcLy8sXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJHBhdHRlcm46IC9cXGJbXFx3XFwuXSsvLFxuICAgICAgICAgIGtleXdvcmQ6ICgoZSwgeyBleGNlcHRpb25zOiByLCB3aGVuOiB0IH0gPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IHRcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIChyID0gciB8fCBbXSksXG4gICAgICAgICAgICAgIGUubWFwKGUgPT5cbiAgICAgICAgICAgICAgICBlLm1hdGNoKC9cXHxcXGQrJC8pIHx8IHIuaW5jbHVkZXMoZSkgPyBlIDogbihlKSA/IGUgKyAnfDAnIDogZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSkobCwgeyB3aGVuOiBlID0+IGUubGVuZ3RoIDwgMyB9KSxcbiAgICAgICAgICBsaXRlcmFsOiBhLFxuICAgICAgICAgIHR5cGU6IGksXG4gICAgICAgICAgYnVpbHRfaW46IFtcbiAgICAgICAgICAgICdjdXJyZW50X2NhdGFsb2cnLFxuICAgICAgICAgICAgJ2N1cnJlbnRfZGF0ZScsXG4gICAgICAgICAgICAnY3VycmVudF9kZWZhdWx0X3RyYW5zZm9ybV9ncm91cCcsXG4gICAgICAgICAgICAnY3VycmVudF9wYXRoJyxcbiAgICAgICAgICAgICdjdXJyZW50X3JvbGUnLFxuICAgICAgICAgICAgJ2N1cnJlbnRfc2NoZW1hJyxcbiAgICAgICAgICAgICdjdXJyZW50X3RyYW5zZm9ybV9ncm91cF9mb3JfdHlwZScsXG4gICAgICAgICAgICAnY3VycmVudF91c2VyJyxcbiAgICAgICAgICAgICdzZXNzaW9uX3VzZXInLFxuICAgICAgICAgICAgJ3N5c3RlbV90aW1lJyxcbiAgICAgICAgICAgICdzeXN0ZW1fdXNlcicsXG4gICAgICAgICAgICAnY3VycmVudF90aW1lJyxcbiAgICAgICAgICAgICdsb2NhbHRpbWUnLFxuICAgICAgICAgICAgJ2N1cnJlbnRfdGltZXN0YW1wJyxcbiAgICAgICAgICAgICdsb2NhbHRpbWVzdGFtcCcsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogdCguLi5vKSxcbiAgICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICAgICRwYXR0ZXJuOiAvW1xcd1xcLl0rLyxcbiAgICAgICAgICAgICAga2V5d29yZDogbC5jb25jYXQobyksXG4gICAgICAgICAgICAgIGxpdGVyYWw6IGEsXG4gICAgICAgICAgICAgIHR5cGU6IGksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICBiZWdpbjogdChcbiAgICAgICAgICAgICAgJ2RvdWJsZSBwcmVjaXNpb24nLFxuICAgICAgICAgICAgICAnbGFyZ2Ugb2JqZWN0JyxcbiAgICAgICAgICAgICAgJ3dpdGggdGltZXpvbmUnLFxuICAgICAgICAgICAgICAnd2l0aG91dCB0aW1lem9uZSdcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1LFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAndmFyaWFibGUnLCBiZWdpbjogL0BbYS16MC05XSsvIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogLycvLFxuICAgICAgICAgICAgICAgIGVuZDogLycvLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbeyBiZWdpbjogLycnLyB9XSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgICAgIGVuZDogL1wiLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1wiXCIvLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGUuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAgICBlLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIG4sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnb3BlcmF0b3InLFxuICAgICAgICAgICAgYmVnaW46IC9bLSsqLz0lXn5dfCYmP3xcXHxcXHw/fCE9P3w8KD86PT4/fDx8Pik/fD5bPj1dPy8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ3N3aWZ0JyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBmdW5jdGlvbiBlKGUpIHtcbiAgICAgIHJldHVybiBlID8gKCdzdHJpbmcnID09IHR5cGVvZiBlID8gZSA6IGUuc291cmNlKSA6IG51bGxcbiAgICB9XG4gICAgZnVuY3Rpb24gbihlKSB7XG4gICAgICByZXR1cm4gYSgnKD89JywgZSwgJyknKVxuICAgIH1cbiAgICBmdW5jdGlvbiBhKC4uLm4pIHtcbiAgICAgIHJldHVybiBuLm1hcChuID0+IGUobikpLmpvaW4oJycpXG4gICAgfVxuICAgIGZ1bmN0aW9uIHQoLi4ubikge1xuICAgICAgcmV0dXJuICcoJyArIG4ubWFwKG4gPT4gZShuKSkuam9pbignfCcpICsgJyknXG4gICAgfVxuICAgIGNvbnN0IGkgPSBlID0+IGEoL1xcYi8sIGUsIC9cXHckLy50ZXN0KGUpID8gL1xcYi8gOiAvXFxCLyksXG4gICAgICBzID0gWydQcm90b2NvbCcsICdUeXBlJ10ubWFwKGkpLFxuICAgICAgdSA9IFsnaW5pdCcsICdzZWxmJ10ubWFwKGkpLFxuICAgICAgYyA9IFsnQW55JywgJ1NlbGYnXSxcbiAgICAgIHIgPSBbXG4gICAgICAgICdhc3NvY2lhdGVkdHlwZScsXG4gICAgICAgICdhc3luYycsXG4gICAgICAgICdhd2FpdCcsXG4gICAgICAgIC9hc1xcPy8sXG4gICAgICAgIC9hcyEvLFxuICAgICAgICAnYXMnLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICdjYXRjaCcsXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdjb250aW51ZScsXG4gICAgICAgICdjb252ZW5pZW5jZScsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RlZmVyJyxcbiAgICAgICAgJ2RlaW5pdCcsXG4gICAgICAgICdkaWRTZXQnLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnZHluYW1pYycsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2VudW0nLFxuICAgICAgICAnZXh0ZW5zaW9uJyxcbiAgICAgICAgJ2ZhbGx0aHJvdWdoJyxcbiAgICAgICAgL2ZpbGVwcml2YXRlXFwoc2V0XFwpLyxcbiAgICAgICAgJ2ZpbGVwcml2YXRlJyxcbiAgICAgICAgJ2ZpbmFsJyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdmdW5jJyxcbiAgICAgICAgJ2dldCcsXG4gICAgICAgICdndWFyZCcsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbXBvcnQnLFxuICAgICAgICAnaW5kaXJlY3QnLFxuICAgICAgICAnaW5maXgnLFxuICAgICAgICAvaW5pdFxcPy8sXG4gICAgICAgIC9pbml0IS8sXG4gICAgICAgICdpbm91dCcsXG4gICAgICAgIC9pbnRlcm5hbFxcKHNldFxcKS8sXG4gICAgICAgICdpbnRlcm5hbCcsXG4gICAgICAgICdpbicsXG4gICAgICAgICdpcycsXG4gICAgICAgICdsYXp5JyxcbiAgICAgICAgJ2xldCcsXG4gICAgICAgICdtdXRhdGluZycsXG4gICAgICAgICdub25tdXRhdGluZycsXG4gICAgICAgIC9vcGVuXFwoc2V0XFwpLyxcbiAgICAgICAgJ29wZW4nLFxuICAgICAgICAnb3BlcmF0b3InLFxuICAgICAgICAnb3B0aW9uYWwnLFxuICAgICAgICAnb3ZlcnJpZGUnLFxuICAgICAgICAncG9zdGZpeCcsXG4gICAgICAgICdwcmVjZWRlbmNlZ3JvdXAnLFxuICAgICAgICAncHJlZml4JyxcbiAgICAgICAgL3ByaXZhdGVcXChzZXRcXCkvLFxuICAgICAgICAncHJpdmF0ZScsXG4gICAgICAgICdwcm90b2NvbCcsXG4gICAgICAgIC9wdWJsaWNcXChzZXRcXCkvLFxuICAgICAgICAncHVibGljJyxcbiAgICAgICAgJ3JlcGVhdCcsXG4gICAgICAgICdyZXF1aXJlZCcsXG4gICAgICAgICdyZXRocm93cycsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAnc2V0JyxcbiAgICAgICAgJ3NvbWUnLFxuICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgJ3N0cnVjdCcsXG4gICAgICAgICdzdWJzY3JpcHQnLFxuICAgICAgICAnc3VwZXInLFxuICAgICAgICAnc3dpdGNoJyxcbiAgICAgICAgJ3Rocm93cycsXG4gICAgICAgICd0aHJvdycsXG4gICAgICAgIC90cnlcXD8vLFxuICAgICAgICAvdHJ5IS8sXG4gICAgICAgICd0cnknLFxuICAgICAgICAndHlwZWFsaWFzJyxcbiAgICAgICAgL3Vub3duZWRcXChzYWZlXFwpLyxcbiAgICAgICAgL3Vub3duZWRcXCh1bnNhZmVcXCkvLFxuICAgICAgICAndW5vd25lZCcsXG4gICAgICAgICd2YXInLFxuICAgICAgICAnd2VhaycsXG4gICAgICAgICd3aGVyZScsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICd3aWxsU2V0JyxcbiAgICAgIF0sXG4gICAgICBvID0gWydmYWxzZScsICduaWwnLCAndHJ1ZSddLFxuICAgICAgbCA9IFtcbiAgICAgICAgJ2Fzc2lnbm1lbnQnLFxuICAgICAgICAnYXNzb2NpYXRpdml0eScsXG4gICAgICAgICdoaWdoZXJUaGFuJyxcbiAgICAgICAgJ2xlZnQnLFxuICAgICAgICAnbG93ZXJUaGFuJyxcbiAgICAgICAgJ25vbmUnLFxuICAgICAgICAncmlnaHQnLFxuICAgICAgXSxcbiAgICAgIG0gPSBbXG4gICAgICAgICcjY29sb3JMaXRlcmFsJyxcbiAgICAgICAgJyNjb2x1bW4nLFxuICAgICAgICAnI2Rzb2hhbmRsZScsXG4gICAgICAgICcjZWxzZScsXG4gICAgICAgICcjZWxzZWlmJyxcbiAgICAgICAgJyNlbmRpZicsXG4gICAgICAgICcjZXJyb3InLFxuICAgICAgICAnI2ZpbGUnLFxuICAgICAgICAnI2ZpbGVJRCcsXG4gICAgICAgICcjZmlsZUxpdGVyYWwnLFxuICAgICAgICAnI2ZpbGVQYXRoJyxcbiAgICAgICAgJyNmdW5jdGlvbicsXG4gICAgICAgICcjaWYnLFxuICAgICAgICAnI2ltYWdlTGl0ZXJhbCcsXG4gICAgICAgICcja2V5UGF0aCcsXG4gICAgICAgICcjbGluZScsXG4gICAgICAgICcjc2VsZWN0b3InLFxuICAgICAgICAnI3NvdXJjZUxvY2F0aW9uJyxcbiAgICAgICAgJyN3YXJuX3VucXVhbGlmaWVkX2FjY2VzcycsXG4gICAgICAgICcjd2FybmluZycsXG4gICAgICBdLFxuICAgICAgZCA9IFtcbiAgICAgICAgJ2FicycsXG4gICAgICAgICdhbGwnLFxuICAgICAgICAnYW55JyxcbiAgICAgICAgJ2Fzc2VydCcsXG4gICAgICAgICdhc3NlcnRpb25GYWlsdXJlJyxcbiAgICAgICAgJ2RlYnVnUHJpbnQnLFxuICAgICAgICAnZHVtcCcsXG4gICAgICAgICdmYXRhbEVycm9yJyxcbiAgICAgICAgJ2dldFZhTGlzdCcsXG4gICAgICAgICdpc0tub3duVW5pcXVlbHlSZWZlcmVuY2VkJyxcbiAgICAgICAgJ21heCcsXG4gICAgICAgICdtaW4nLFxuICAgICAgICAnbnVtZXJpY0Nhc3QnLFxuICAgICAgICAncG9pbnR3aXNlTWF4JyxcbiAgICAgICAgJ3BvaW50d2lzZU1pbicsXG4gICAgICAgICdwcmVjb25kaXRpb24nLFxuICAgICAgICAncHJlY29uZGl0aW9uRmFpbHVyZScsXG4gICAgICAgICdwcmludCcsXG4gICAgICAgICdyZWFkTGluZScsXG4gICAgICAgICdyZXBlYXRFbGVtZW50JyxcbiAgICAgICAgJ3NlcXVlbmNlJyxcbiAgICAgICAgJ3N0cmlkZScsXG4gICAgICAgICdzd2FwJyxcbiAgICAgICAgJ3N3aWZ0X3VuYm94RnJvbVN3aWZ0VmFsdWVXaXRoVHlwZScsXG4gICAgICAgICd0cmFuc2NvZGUnLFxuICAgICAgICAndHlwZScsXG4gICAgICAgICd1bnNhZmVCaXRDYXN0JyxcbiAgICAgICAgJ3Vuc2FmZURvd25jYXN0JyxcbiAgICAgICAgJ3dpdGhFeHRlbmRlZExpZmV0aW1lJyxcbiAgICAgICAgJ3dpdGhVbnNhZmVNdXRhYmxlUG9pbnRlcicsXG4gICAgICAgICd3aXRoVW5zYWZlUG9pbnRlcicsXG4gICAgICAgICd3aXRoVmFMaXN0JyxcbiAgICAgICAgJ3dpdGhvdXRBY3R1YWxseUVzY2FwaW5nJyxcbiAgICAgICAgJ3ppcCcsXG4gICAgICBdLFxuICAgICAgcCA9IHQoXG4gICAgICAgIC9bLz1cXC0rISolPD4mfF5+P10vLFxuICAgICAgICAvW1xcdTAwQTEtXFx1MDBBN10vLFxuICAgICAgICAvW1xcdTAwQTlcXHUwMEFCXS8sXG4gICAgICAgIC9bXFx1MDBBQ1xcdTAwQUVdLyxcbiAgICAgICAgL1tcXHUwMEIwXFx1MDBCMV0vLFxuICAgICAgICAvW1xcdTAwQjZcXHUwMEJCXFx1MDBCRlxcdTAwRDdcXHUwMEY3XS8sXG4gICAgICAgIC9bXFx1MjAxNi1cXHUyMDE3XS8sXG4gICAgICAgIC9bXFx1MjAyMC1cXHUyMDI3XS8sXG4gICAgICAgIC9bXFx1MjAzMC1cXHUyMDNFXS8sXG4gICAgICAgIC9bXFx1MjA0MS1cXHUyMDUzXS8sXG4gICAgICAgIC9bXFx1MjA1NS1cXHUyMDVFXS8sXG4gICAgICAgIC9bXFx1MjE5MC1cXHUyM0ZGXS8sXG4gICAgICAgIC9bXFx1MjUwMC1cXHUyNzc1XS8sXG4gICAgICAgIC9bXFx1Mjc5NC1cXHUyQkZGXS8sXG4gICAgICAgIC9bXFx1MkUwMC1cXHUyRTdGXS8sXG4gICAgICAgIC9bXFx1MzAwMS1cXHUzMDAzXS8sXG4gICAgICAgIC9bXFx1MzAwOC1cXHUzMDIwXS8sXG4gICAgICAgIC9bXFx1MzAzMF0vXG4gICAgICApLFxuICAgICAgRiA9IHQoXG4gICAgICAgIHAsXG4gICAgICAgIC9bXFx1MDMwMC1cXHUwMzZGXS8sXG4gICAgICAgIC9bXFx1MURDMC1cXHUxREZGXS8sXG4gICAgICAgIC9bXFx1MjBEMC1cXHUyMEZGXS8sXG4gICAgICAgIC9bXFx1RkUwMC1cXHVGRTBGXS8sXG4gICAgICAgIC9bXFx1RkUyMC1cXHVGRTJGXS9cbiAgICAgICksXG4gICAgICBiID0gYShwLCBGLCAnKicpLFxuICAgICAgaCA9IHQoXG4gICAgICAgIC9bYS16QS1aX10vLFxuICAgICAgICAvW1xcdTAwQThcXHUwMEFBXFx1MDBBRFxcdTAwQUZcXHUwMEIyLVxcdTAwQjVcXHUwMEI3LVxcdTAwQkFdLyxcbiAgICAgICAgL1tcXHUwMEJDLVxcdTAwQkVcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAwRkZdLyxcbiAgICAgICAgL1tcXHUwMTAwLVxcdTAyRkZcXHUwMzcwLVxcdTE2N0ZcXHUxNjgxLVxcdTE4MERcXHUxODBGLVxcdTFEQkZdLyxcbiAgICAgICAgL1tcXHUxRTAwLVxcdTFGRkZdLyxcbiAgICAgICAgL1tcXHUyMDBCLVxcdTIwMERcXHUyMDJBLVxcdTIwMkVcXHUyMDNGLVxcdTIwNDBcXHUyMDU0XFx1MjA2MC1cXHUyMDZGXS8sXG4gICAgICAgIC9bXFx1MjA3MC1cXHUyMENGXFx1MjEwMC1cXHUyMThGXFx1MjQ2MC1cXHUyNEZGXFx1Mjc3Ni1cXHUyNzkzXS8sXG4gICAgICAgIC9bXFx1MkMwMC1cXHUyREZGXFx1MkU4MC1cXHUyRkZGXS8sXG4gICAgICAgIC9bXFx1MzAwNC1cXHUzMDA3XFx1MzAyMS1cXHUzMDJGXFx1MzAzMS1cXHUzMDNGXFx1MzA0MC1cXHVEN0ZGXS8sXG4gICAgICAgIC9bXFx1RjkwMC1cXHVGRDNEXFx1RkQ0MC1cXHVGRENGXFx1RkRGMC1cXHVGRTFGXFx1RkUzMC1cXHVGRTQ0XS8sXG4gICAgICAgIC9bXFx1RkU0Ny1cXHVGRUZFXFx1RkYwMC1cXHVGRkZEXS9cbiAgICAgICksXG4gICAgICBmID0gdChoLCAvXFxkLywgL1tcXHUwMzAwLVxcdTAzNkZcXHUxREMwLVxcdTFERkZcXHUyMEQwLVxcdTIwRkZcXHVGRTIwLVxcdUZFMkZdLyksXG4gICAgICB3ID0gYShoLCBmLCAnKicpLFxuICAgICAgeSA9IGEoL1tBLVpdLywgZiwgJyonKSxcbiAgICAgIGcgPSBbXG4gICAgICAgICdhdXRvY2xvc3VyZScsXG4gICAgICAgIGEoL2NvbnZlbnRpb25cXCgvLCB0KCdzd2lmdCcsICdibG9jaycsICdjJyksIC9cXCkvKSxcbiAgICAgICAgJ2Rpc2NhcmRhYmxlUmVzdWx0JyxcbiAgICAgICAgJ2R5bmFtaWNDYWxsYWJsZScsXG4gICAgICAgICdkeW5hbWljTWVtYmVyTG9va3VwJyxcbiAgICAgICAgJ2VzY2FwaW5nJyxcbiAgICAgICAgJ2Zyb3plbicsXG4gICAgICAgICdHS0luc3BlY3RhYmxlJyxcbiAgICAgICAgJ0lCQWN0aW9uJyxcbiAgICAgICAgJ0lCRGVzaWduYWJsZScsXG4gICAgICAgICdJQkluc3BlY3RhYmxlJyxcbiAgICAgICAgJ0lCT3V0bGV0JyxcbiAgICAgICAgJ0lCU2VndWVBY3Rpb24nLFxuICAgICAgICAnaW5saW5hYmxlJyxcbiAgICAgICAgJ21haW4nLFxuICAgICAgICAnbm9ub2JqYycsXG4gICAgICAgICdOU0FwcGxpY2F0aW9uTWFpbicsXG4gICAgICAgICdOU0NvcHlpbmcnLFxuICAgICAgICAnTlNNYW5hZ2VkJyxcbiAgICAgICAgYSgvb2JqY1xcKC8sIHcsIC9cXCkvKSxcbiAgICAgICAgJ29iamMnLFxuICAgICAgICAnb2JqY01lbWJlcnMnLFxuICAgICAgICAncHJvcGVydHlXcmFwcGVyJyxcbiAgICAgICAgJ3JlcXVpcmVzX3N0b3JlZF9wcm9wZXJ0eV9pbml0cycsXG4gICAgICAgICd0ZXN0YWJsZScsXG4gICAgICAgICdVSUFwcGxpY2F0aW9uTWFpbicsXG4gICAgICAgICd1bmtub3duJyxcbiAgICAgICAgJ3VzYWJsZUZyb21JbmxpbmUnLFxuICAgICAgXSxcbiAgICAgIEUgPSBbXG4gICAgICAgICdpT1MnLFxuICAgICAgICAnaU9TQXBwbGljYXRpb25FeHRlbnNpb24nLFxuICAgICAgICAnbWFjT1MnLFxuICAgICAgICAnbWFjT1NBcHBsaWNhdGlvbkV4dGVuc2lvbicsXG4gICAgICAgICdtYWNDYXRhbHlzdCcsXG4gICAgICAgICdtYWNDYXRhbHlzdEFwcGxpY2F0aW9uRXh0ZW5zaW9uJyxcbiAgICAgICAgJ3dhdGNoT1MnLFxuICAgICAgICAnd2F0Y2hPU0FwcGxpY2F0aW9uRXh0ZW5zaW9uJyxcbiAgICAgICAgJ3R2T1MnLFxuICAgICAgICAndHZPU0FwcGxpY2F0aW9uRXh0ZW5zaW9uJyxcbiAgICAgICAgJ3N3aWZ0JyxcbiAgICAgIF1cbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICBjb25zdCBwID0geyBtYXRjaDogL1xccysvLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgaCA9IGUuQ09NTUVOVCgnL1xcXFwqJywgJ1xcXFwqLycsIHtcbiAgICAgICAgICBjb250YWluczogWydzZWxmJ10sXG4gICAgICAgIH0pLFxuICAgICAgICB2ID0gW2UuQ19MSU5FX0NPTU1FTlRfTU9ERSwgaF0sXG4gICAgICAgIE4gPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgYmVnaW46IGEoL1xcLi8sIG4odCguLi5zLCAuLi51KSkpLFxuICAgICAgICAgIGVuZDogdCguLi5zLCAuLi51KSxcbiAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICB9LFxuICAgICAgICBBID0ge1xuICAgICAgICAgIG1hdGNoOiBhKC9cXC4vLCB0KC4uLnIpKSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIEMgPSByLmZpbHRlcihlID0+ICdzdHJpbmcnID09IHR5cGVvZiBlKS5jb25jYXQoWydffDAnXSksXG4gICAgICAgIF8gPSB7XG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgIG1hdGNoOiB0KFxuICAgICAgICAgICAgICAgIC4uLnJcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZSA9PiAnc3RyaW5nJyAhPSB0eXBlb2YgZSlcbiAgICAgICAgICAgICAgICAgIC5jb25jYXQoYylcbiAgICAgICAgICAgICAgICAgIC5tYXAoaSksXG4gICAgICAgICAgICAgICAgLi4udVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBEID0ge1xuICAgICAgICAgICRwYXR0ZXJuOiB0KC9cXGJcXHcrLywgLyNcXHcrLyksXG4gICAgICAgICAga2V5d29yZDogQy5jb25jYXQobSksXG4gICAgICAgICAgbGl0ZXJhbDogbyxcbiAgICAgICAgfSxcbiAgICAgICAgQiA9IFtOLCBBLCBfXSxcbiAgICAgICAgayA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtYXRjaDogYSgvXFwuLywgdCguLi5kKSksXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2J1aWx0X2luJywgbWF0Y2g6IGEoL1xcYi8sIHQoLi4uZCksIC8oPz1cXCgpLykgfSxcbiAgICAgICAgXSxcbiAgICAgICAgTSA9IHsgbWF0Y2g6IC8tPi8sIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICBTID0gW1xuICAgICAgICAgIE0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnb3BlcmF0b3InLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgdmFyaWFudHM6IFt7IG1hdGNoOiBiIH0sIHsgbWF0Y2g6IGBcXFxcLihcXFxcLnwke0Z9KStgIH1dLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHggPSAnKFswLTlhLWZBLUZdXyopKycsXG4gICAgICAgIEkgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWF0Y2g6XG4gICAgICAgICAgICAgICAgJ1xcXFxiKChbMC05XV8qKSspKFxcXFwuKChbMC05XV8qKSspKT8oW2VFXVsrLV0/KChbMC05XV8qKSspKT9cXFxcYicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtYXRjaDogYFxcXFxiMHgoJHt4fSkoXFxcXC4oJHt4fSkpPyhbcFBdWystXT8oKFswLTldXyopKykpP1xcXFxiYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1hdGNoOiAvXFxiMG8oWzAtN11fKikrXFxiLyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG1hdGNoOiAvXFxiMGIoWzAxXV8qKStcXGIvIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgTyA9IChlID0gJycpID0+ICh7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IG1hdGNoOiBhKC9cXFxcLywgZSwgL1swXFxcXHRuclwiJ10vKSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtYXRjaDogYSgvXFxcXC8sIGUsIC91XFx7WzAtOWEtZkEtRl17MSw4fVxcfS8pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgICAgVCA9IChlID0gJycpID0+ICh7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgICAgICAgIG1hdGNoOiBhKC9cXFxcLywgZSwgL1tcXHQgXSooPzpbXFxyXFxuXXxcXHJcXG4pLyksXG4gICAgICAgIH0pLFxuICAgICAgICBMID0gKGUgPSAnJykgPT4gKHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgICAgICAgbGFiZWw6ICdpbnRlcnBvbCcsXG4gICAgICAgICAgYmVnaW46IGEoL1xcXFwvLCBlLCAvXFwoLyksXG4gICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgfSksXG4gICAgICAgIFAgPSAoZSA9ICcnKSA9PiAoe1xuICAgICAgICAgIGJlZ2luOiBhKGUsIC9cIlwiXCIvKSxcbiAgICAgICAgICBlbmQ6IGEoL1wiXCJcIi8sIGUpLFxuICAgICAgICAgIGNvbnRhaW5zOiBbTyhlKSwgVChlKSwgTChlKV0sXG4gICAgICAgIH0pLFxuICAgICAgICAkID0gKGUgPSAnJykgPT4gKHtcbiAgICAgICAgICBiZWdpbjogYShlLCAvXCIvKSxcbiAgICAgICAgICBlbmQ6IGEoL1wiLywgZSksXG4gICAgICAgICAgY29udGFpbnM6IFtPKGUpLCBMKGUpXSxcbiAgICAgICAgfSksXG4gICAgICAgIEsgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgUCgpLFxuICAgICAgICAgICAgUCgnIycpLFxuICAgICAgICAgICAgUCgnIyMnKSxcbiAgICAgICAgICAgIFAoJyMjIycpLFxuICAgICAgICAgICAgJCgpLFxuICAgICAgICAgICAgJCgnIycpLFxuICAgICAgICAgICAgJCgnIyMnKSxcbiAgICAgICAgICAgICQoJyMjIycpLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGogPSB7XG4gICAgICAgICAgbWF0Y2g6IGEoL2AvLCB3LCAvYC8pLFxuICAgICAgICB9LFxuICAgICAgICB6ID0gW1xuICAgICAgICAgIGosXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICd2YXJpYWJsZScsIG1hdGNoOiAvXFwkXFxkKy8gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgICBtYXRjaDogYFxcXFwkJHtmfStgLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHEgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWF0Y2g6IC8oQHwjKWF2YWlsYWJsZS8sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgIHsgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLCBrZXl3b3JkczogRSwgY29udGFpbnM6IFsuLi5TLCBJLCBLXSB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAna2V5d29yZCcsIG1hdGNoOiBhKC9ALywgdCguLi5nKSkgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgIG1hdGNoOiBhKC9ALywgdyksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgVSA9IHtcbiAgICAgICAgICBtYXRjaDogbigvXFxiW0EtWl0vKSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICAgIG1hdGNoOiBhKFxuICAgICAgICAgICAgICAgIC8oQVZ8Q0F8Q0Z8Q0d8Q0l8Q0x8Q018Q058Q1R8TUt8TVB8TVRLfE1UTHxOU3xTQ058U0t8VUl8V0t8WEMpLyxcbiAgICAgICAgICAgICAgICBmLFxuICAgICAgICAgICAgICAgICcrJ1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAndHlwZScsIG1hdGNoOiB5LCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgIHsgbWF0Y2g6IC9bPyFdKy8sIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtYXRjaDogL1xcLlxcLlxcLi8sXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG1hdGNoOiBhKC9cXHMrJlxccysvLCBuKHkpKSwgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgWiA9IHtcbiAgICAgICAgICBiZWdpbjogLzwvLFxuICAgICAgICAgIGVuZDogLz4vLFxuICAgICAgICAgIGtleXdvcmRzOiBELFxuICAgICAgICAgIGNvbnRhaW5zOiBbLi4udiwgLi4uQiwgLi4ucSwgTSwgVV0sXG4gICAgICAgIH1cbiAgICAgIFUuY29udGFpbnMucHVzaChaKVxuICAgICAgY29uc3QgRyA9IHtcbiAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAga2V5d29yZHM6IEQsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWF0Y2g6IGEodywgL1xccyo6LyksXG4gICAgICAgICAgICAgIGtleXdvcmRzOiAnX3wwJyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLnYsXG4gICAgICAgICAgICAuLi5CLFxuICAgICAgICAgICAgLi4uayxcbiAgICAgICAgICAgIC4uLlMsXG4gICAgICAgICAgICBJLFxuICAgICAgICAgICAgSyxcbiAgICAgICAgICAgIC4uLnosXG4gICAgICAgICAgICAuLi5xLFxuICAgICAgICAgICAgVSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBIID0ge1xuICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jJyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgICAgIG1hdGNoOiB0KGoubWF0Y2gsIHcsIGIpLFxuICAgICAgICAgICAgICBlbmRzUGFyZW50OiAhMCxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHAsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgUiA9IHtcbiAgICAgICAgICBiZWdpbjogLzwvLFxuICAgICAgICAgIGVuZDogLz4vLFxuICAgICAgICAgIGNvbnRhaW5zOiBbLi4udiwgVV0sXG4gICAgICAgIH0sXG4gICAgICAgIFYgPSB7XG4gICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAga2V5d29yZHM6IEQsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IHQobihhKHcsIC9cXHMqOi8pKSwgbihhKHcsIC9cXHMrLywgdywgL1xccyo6LykpKSxcbiAgICAgICAgICAgICAgZW5kOiAvOi8sXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2tleXdvcmQnLCBtYXRjaDogL1xcYl9cXGIvIH0sXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdwYXJhbXMnLCBtYXRjaDogdyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLnYsXG4gICAgICAgICAgICAuLi5CLFxuICAgICAgICAgICAgLi4uUyxcbiAgICAgICAgICAgIEksXG4gICAgICAgICAgICBLLFxuICAgICAgICAgICAgLi4ucSxcbiAgICAgICAgICAgIFUsXG4gICAgICAgICAgICBHLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZW5kc1BhcmVudDogITAsXG4gICAgICAgICAgaWxsZWdhbDogL1tcIiddLyxcbiAgICAgICAgfSxcbiAgICAgICAgVyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgbWF0Y2g6IG4oL1xcYmZ1bmNcXGIvKSxcbiAgICAgICAgICBjb250YWluczogW0gsIFIsIFYsIHBdLFxuICAgICAgICAgIGlsbGVnYWw6IFsvXFxbLywgLyUvXSxcbiAgICAgICAgfSxcbiAgICAgICAgWCA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgbWF0Y2g6IC9cXGIoc3Vic2NyaXB0fGluaXRbPyFdPylcXHMqKD89WzwoXSkvLFxuICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICBrZXl3b3JkOiAnc3Vic2NyaXB0IGluaXQgaW5pdD8gaW5pdCEnLFxuICAgICAgICAgICAgJHBhdHRlcm46IC9cXHcrWz8hXT8vLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnM6IFtSLCBWLCBwXSxcbiAgICAgICAgICBpbGxlZ2FsOiAvXFxbfCUvLFxuICAgICAgICB9LFxuICAgICAgICBKID0ge1xuICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdvcGVyYXRvcicsXG4gICAgICAgICAgZW5kOiBlLk1BVENIX05PVEhJTkdfUkUsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgICAgICBtYXRjaDogYixcbiAgICAgICAgICAgICAgZW5kc1BhcmVudDogITAsXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgUSA9IHtcbiAgICAgICAgICBiZWdpbktleXdvcmRzOiAncHJlY2VkZW5jZWdyb3VwJyxcbiAgICAgICAgICBlbmQ6IGUuTUFUQ0hfTk9USElOR19SRSxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgICAgIG1hdGNoOiB5LFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL3svLFxuICAgICAgICAgICAgICBlbmQ6IC99LyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICBlbmRzUGFyZW50OiAhMCxcbiAgICAgICAgICAgICAga2V5d29yZHM6IFsuLi5sLCAuLi5vXSxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtVXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgZm9yIChjb25zdCBlIG9mIEsudmFyaWFudHMpIHtcbiAgICAgICAgY29uc3QgbiA9IGUuY29udGFpbnMuZmluZChlID0+ICdpbnRlcnBvbCcgPT09IGUubGFiZWwpXG4gICAgICAgIG4ua2V5d29yZHMgPSBEXG4gICAgICAgIGNvbnN0IGEgPSBbLi4uQiwgLi4uaywgLi4uUywgSSwgSywgLi4uel1cbiAgICAgICAgbi5jb250YWlucyA9IFtcbiAgICAgICAgICAuLi5hLFxuICAgICAgICAgIHsgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLCBjb250YWluczogWydzZWxmJywgLi4uYV0gfSxcbiAgICAgICAgXVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ1N3aWZ0JyxcbiAgICAgICAga2V5d29yZHM6IEQsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgLi4udixcbiAgICAgICAgICBXLFxuICAgICAgICAgIFgsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ3N0cnVjdCBwcm90b2NvbCBjbGFzcyBleHRlbnNpb24gZW51bScsXG4gICAgICAgICAgICBlbmQ6ICdcXFxceycsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgIGtleXdvcmRzOiBELFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgZS5pbmhlcml0KGUuVElUTEVfTU9ERSwge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvW0EtWmEteiRfXVtcXHUwMEMwLVxcdTAyQjgwLTlBLVphLXokX10qLyxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIC4uLkIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgSixcbiAgICAgICAgICBRLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdpbXBvcnQnLFxuICAgICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgICBjb250YWluczogWy4uLnZdLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLi4uQixcbiAgICAgICAgICAuLi5rLFxuICAgICAgICAgIC4uLlMsXG4gICAgICAgICAgSSxcbiAgICAgICAgICBLLFxuICAgICAgICAgIC4uLnosXG4gICAgICAgICAgLi4ucSxcbiAgICAgICAgICBVLFxuICAgICAgICAgIEcsXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICd0eXBlc2NyaXB0JyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBjb25zdCBlID0gJ1tBLVphLXokX11bMC05QS1aYS16JF9dKicsXG4gICAgICBuID0gW1xuICAgICAgICAnYXMnLFxuICAgICAgICAnaW4nLFxuICAgICAgICAnb2YnLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ2ZpbmFsbHknLFxuICAgICAgICAndmFyJyxcbiAgICAgICAgJ25ldycsXG4gICAgICAgICdmdW5jdGlvbicsXG4gICAgICAgICdkbycsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAndm9pZCcsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2NhdGNoJyxcbiAgICAgICAgJ2luc3RhbmNlb2YnLFxuICAgICAgICAnd2l0aCcsXG4gICAgICAgICd0aHJvdycsXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAndHJ5JyxcbiAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICdjb250aW51ZScsXG4gICAgICAgICd0eXBlb2YnLFxuICAgICAgICAnZGVsZXRlJyxcbiAgICAgICAgJ2xldCcsXG4gICAgICAgICd5aWVsZCcsXG4gICAgICAgICdjb25zdCcsXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdkZWJ1Z2dlcicsXG4gICAgICAgICdhc3luYycsXG4gICAgICAgICdhd2FpdCcsXG4gICAgICAgICdzdGF0aWMnLFxuICAgICAgICAnaW1wb3J0JyxcbiAgICAgICAgJ2Zyb20nLFxuICAgICAgICAnZXhwb3J0JyxcbiAgICAgICAgJ2V4dGVuZHMnLFxuICAgICAgXSxcbiAgICAgIGEgPSBbJ3RydWUnLCAnZmFsc2UnLCAnbnVsbCcsICd1bmRlZmluZWQnLCAnTmFOJywgJ0luZmluaXR5J10sXG4gICAgICBzID0gW10uY29uY2F0KFxuICAgICAgICBbXG4gICAgICAgICAgJ3NldEludGVydmFsJyxcbiAgICAgICAgICAnc2V0VGltZW91dCcsXG4gICAgICAgICAgJ2NsZWFySW50ZXJ2YWwnLFxuICAgICAgICAgICdjbGVhclRpbWVvdXQnLFxuICAgICAgICAgICdyZXF1aXJlJyxcbiAgICAgICAgICAnZXhwb3J0cycsXG4gICAgICAgICAgJ2V2YWwnLFxuICAgICAgICAgICdpc0Zpbml0ZScsXG4gICAgICAgICAgJ2lzTmFOJyxcbiAgICAgICAgICAncGFyc2VGbG9hdCcsXG4gICAgICAgICAgJ3BhcnNlSW50JyxcbiAgICAgICAgICAnZGVjb2RlVVJJJyxcbiAgICAgICAgICAnZGVjb2RlVVJJQ29tcG9uZW50JyxcbiAgICAgICAgICAnZW5jb2RlVVJJJyxcbiAgICAgICAgICAnZW5jb2RlVVJJQ29tcG9uZW50JyxcbiAgICAgICAgICAnZXNjYXBlJyxcbiAgICAgICAgICAndW5lc2NhcGUnLFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgJ2FyZ3VtZW50cycsXG4gICAgICAgICAgJ3RoaXMnLFxuICAgICAgICAgICdzdXBlcicsXG4gICAgICAgICAgJ2NvbnNvbGUnLFxuICAgICAgICAgICd3aW5kb3cnLFxuICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgJ2xvY2FsU3RvcmFnZScsXG4gICAgICAgICAgJ21vZHVsZScsXG4gICAgICAgICAgJ2dsb2JhbCcsXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAnSW50bCcsXG4gICAgICAgICAgJ0RhdGFWaWV3JyxcbiAgICAgICAgICAnTnVtYmVyJyxcbiAgICAgICAgICAnTWF0aCcsXG4gICAgICAgICAgJ0RhdGUnLFxuICAgICAgICAgICdTdHJpbmcnLFxuICAgICAgICAgICdSZWdFeHAnLFxuICAgICAgICAgICdPYmplY3QnLFxuICAgICAgICAgICdGdW5jdGlvbicsXG4gICAgICAgICAgJ0Jvb2xlYW4nLFxuICAgICAgICAgICdFcnJvcicsXG4gICAgICAgICAgJ1N5bWJvbCcsXG4gICAgICAgICAgJ1NldCcsXG4gICAgICAgICAgJ01hcCcsXG4gICAgICAgICAgJ1dlYWtTZXQnLFxuICAgICAgICAgICdXZWFrTWFwJyxcbiAgICAgICAgICAnUHJveHknLFxuICAgICAgICAgICdSZWZsZWN0JyxcbiAgICAgICAgICAnSlNPTicsXG4gICAgICAgICAgJ1Byb21pc2UnLFxuICAgICAgICAgICdGbG9hdDY0QXJyYXknLFxuICAgICAgICAgICdJbnQxNkFycmF5JyxcbiAgICAgICAgICAnSW50MzJBcnJheScsXG4gICAgICAgICAgJ0ludDhBcnJheScsXG4gICAgICAgICAgJ1VpbnQxNkFycmF5JyxcbiAgICAgICAgICAnVWludDMyQXJyYXknLFxuICAgICAgICAgICdGbG9hdDMyQXJyYXknLFxuICAgICAgICAgICdBcnJheScsXG4gICAgICAgICAgJ1VpbnQ4QXJyYXknLFxuICAgICAgICAgICdVaW50OENsYW1wZWRBcnJheScsXG4gICAgICAgICAgJ0FycmF5QnVmZmVyJyxcbiAgICAgICAgICAnQmlnSW50NjRBcnJheScsXG4gICAgICAgICAgJ0JpZ1VpbnQ2NEFycmF5JyxcbiAgICAgICAgICAnQmlnSW50JyxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICdFdmFsRXJyb3InLFxuICAgICAgICAgICdJbnRlcm5hbEVycm9yJyxcbiAgICAgICAgICAnUmFuZ2VFcnJvcicsXG4gICAgICAgICAgJ1JlZmVyZW5jZUVycm9yJyxcbiAgICAgICAgICAnU3ludGF4RXJyb3InLFxuICAgICAgICAgICdUeXBlRXJyb3InLFxuICAgICAgICAgICdVUklFcnJvcicsXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBmdW5jdGlvbiB0KGUpIHtcbiAgICAgIHJldHVybiByKCcoPz0nLCBlLCAnKScpXG4gICAgfVxuICAgIGZ1bmN0aW9uIHIoLi4uZSkge1xuICAgICAgcmV0dXJuIGVcbiAgICAgICAgLm1hcChlID0+IHtcbiAgICAgICAgICByZXR1cm4gKG4gPSBlKSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgbiA/IG4gOiBuLnNvdXJjZSkgOiBudWxsXG4gICAgICAgICAgdmFyIG5cbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpXG4gICAgfVxuICAgIHJldHVybiBpID0+IHtcbiAgICAgIGNvbnN0IGMgPSB7XG4gICAgICAgICAgJHBhdHRlcm46IGUsXG4gICAgICAgICAga2V5d29yZDogbi5jb25jYXQoW1xuICAgICAgICAgICAgJ3R5cGUnLFxuICAgICAgICAgICAgJ25hbWVzcGFjZScsXG4gICAgICAgICAgICAndHlwZWRlZicsXG4gICAgICAgICAgICAnaW50ZXJmYWNlJyxcbiAgICAgICAgICAgICdwdWJsaWMnLFxuICAgICAgICAgICAgJ3ByaXZhdGUnLFxuICAgICAgICAgICAgJ3Byb3RlY3RlZCcsXG4gICAgICAgICAgICAnaW1wbGVtZW50cycsXG4gICAgICAgICAgICAnZGVjbGFyZScsXG4gICAgICAgICAgICAnYWJzdHJhY3QnLFxuICAgICAgICAgICAgJ3JlYWRvbmx5JyxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBsaXRlcmFsOiBhLFxuICAgICAgICAgIGJ1aWx0X2luOiBzLmNvbmNhdChbXG4gICAgICAgICAgICAnYW55JyxcbiAgICAgICAgICAgICd2b2lkJyxcbiAgICAgICAgICAgICdudW1iZXInLFxuICAgICAgICAgICAgJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgJ3N0cmluZycsXG4gICAgICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgICAgICduZXZlcicsXG4gICAgICAgICAgICAnZW51bScsXG4gICAgICAgICAgXSksXG4gICAgICAgIH0sXG4gICAgICAgIG8gPSB7IGNsYXNzTmFtZTogJ21ldGEnLCBiZWdpbjogJ0BbQS1aYS16JF9dWzAtOUEtWmEteiRfXSonIH0sXG4gICAgICAgIGwgPSAoZSwgbiwgYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHMgPSBlLmNvbnRhaW5zLmZpbmRJbmRleChlID0+IGUubGFiZWwgPT09IG4pXG4gICAgICAgICAgaWYgKC0xID09PSBzKSB0aHJvdyBFcnJvcignY2FuIG5vdCBmaW5kIG1vZGUgdG8gcmVwbGFjZScpXG4gICAgICAgICAgZS5jb250YWlucy5zcGxpY2UocywgMSwgYSlcbiAgICAgICAgfSxcbiAgICAgICAgYiA9IChpID0+IHtcbiAgICAgICAgICBjb25zdCBjID0gZSxcbiAgICAgICAgICAgIG8gPSB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvPFtBLVphLXowLTlcXFxcLl86LV0rLyxcbiAgICAgICAgICAgICAgZW5kOiAvXFwvW0EtWmEtejAtOVxcXFwuXzotXSs+fFxcLz4vLFxuICAgICAgICAgICAgICBpc1RydWx5T3BlbmluZ1RhZzogKGUsIG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gZVswXS5sZW5ndGggKyBlLmluZGV4LFxuICAgICAgICAgICAgICAgICAgcyA9IGUuaW5wdXRbYV1cbiAgICAgICAgICAgICAgICAnPCcgIT09IHNcbiAgICAgICAgICAgICAgICAgID8gJz4nID09PSBzICYmXG4gICAgICAgICAgICAgICAgICAgICgoKGUsIHsgYWZ0ZXI6IG4gfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSAnPC8nICsgZVswXS5zbGljZSgxKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSAhPT0gZS5pbnB1dC5pbmRleE9mKGEsIG4pXG4gICAgICAgICAgICAgICAgICAgIH0pKGUsIHsgYWZ0ZXI6IGEgfSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICBuLmlnbm9yZU1hdGNoKCkpXG4gICAgICAgICAgICAgICAgICA6IG4uaWdub3JlTWF0Y2goKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGwgPSB7ICRwYXR0ZXJuOiBlLCBrZXl3b3JkOiBuLCBsaXRlcmFsOiBhLCBidWlsdF9pbjogcyB9LFxuICAgICAgICAgICAgYiA9ICdcXFxcLihbMC05XShfP1swLTldKSopJyxcbiAgICAgICAgICAgIGQgPSAnMHxbMS05XShfP1swLTldKSp8MFswLTddKls4OV1bMC05XSonLFxuICAgICAgICAgICAgZyA9IHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogYChcXFxcYigke2R9KSgoJHtifSl8XFxcXC4pP3woJHtifSkpW2VFXVsrLV0/KFswLTldKF8/WzAtOV0pKilcXFxcYmAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogYFxcXFxiKCR7ZH0pXFxcXGIoKCR7Yn0pXFxcXGJ8XFxcXC4pP3woJHtifSlcXFxcYmAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKDB8WzEtOV0oXz9bMC05XSkqKW5cXFxcYicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiMFt4WF1bMC05YS1mQS1GXShfP1swLTlhLWZBLUZdKSpuP1xcXFxiJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIwW2JCXVswLTFdKF8/WzAtMV0pKm4/XFxcXGInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeyBiZWdpbjogJ1xcXFxiMFtvT11bMC03XShfP1swLTddKSpuP1xcXFxiJyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIwWzAtN10rbj9cXFxcYicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHUgPSB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcJFxcXFx7JyxcbiAgICAgICAgICAgICAgZW5kOiAnXFxcXH0nLFxuICAgICAgICAgICAgICBrZXl3b3JkczogbCxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEUgPSB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnaHRtbGAnLFxuICAgICAgICAgICAgICBlbmQ6ICcnLFxuICAgICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgICBlbmQ6ICdgJyxcbiAgICAgICAgICAgICAgICByZXR1cm5FbmQ6ICExLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbaS5CQUNLU0xBU0hfRVNDQVBFLCB1XSxcbiAgICAgICAgICAgICAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbSA9IHtcbiAgICAgICAgICAgICAgYmVnaW46ICdjc3NgJyxcbiAgICAgICAgICAgICAgZW5kOiAnJyxcbiAgICAgICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAgICAgZW5kOiAnYCcsXG4gICAgICAgICAgICAgICAgcmV0dXJuRW5kOiAhMSxcbiAgICAgICAgICAgICAgICBjb250YWluczogW2kuQkFDS1NMQVNIX0VTQ0FQRSwgdV0sXG4gICAgICAgICAgICAgICAgc3ViTGFuZ3VhZ2U6ICdjc3MnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHkgPSB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGJlZ2luOiAnYCcsXG4gICAgICAgICAgICAgIGVuZDogJ2AnLFxuICAgICAgICAgICAgICBjb250YWluczogW2kuQkFDS1NMQVNIX0VTQ0FQRSwgdV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXyA9IHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgaS5DT01NRU5UKC9cXC9cXCpcXCooPyFcXC8pLywgJ1xcXFwqLycsIHtcbiAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAnQFtBLVphLXpdKycsXG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXHsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6ICdcXFxcfScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IGMgKyAnKD89XFxcXHMqKC0pfCQpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kc1BhcmVudDogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvKD89W15cXG5dKVxccy8sIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGkuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgICAgaS5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHAgPSBbXG4gICAgICAgICAgICAgIGkuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgaS5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgRSxcbiAgICAgICAgICAgICAgbSxcbiAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgZyxcbiAgICAgICAgICAgICAgaS5SRUdFWFBfTU9ERSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB1LmNvbnRhaW5zID0gcC5jb25jYXQoe1xuICAgICAgICAgICAgYmVnaW46IC9cXHsvLFxuICAgICAgICAgICAgZW5kOiAvXFx9LyxcbiAgICAgICAgICAgIGtleXdvcmRzOiBsLFxuICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZiddLmNvbmNhdChwKSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnN0IE4gPSBbXS5jb25jYXQoXywgdS5jb250YWlucyksXG4gICAgICAgICAgICBmID0gTi5jb25jYXQoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgICAga2V5d29yZHM6IGwsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZiddLmNvbmNhdChOKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgQSA9IHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgICAga2V5d29yZHM6IGwsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBmLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnSmF2YXNjcmlwdCcsXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ2pzJywgJ2pzeCcsICdtanMnLCAnY2pzJ10sXG4gICAgICAgICAgICBrZXl3b3JkczogbCxcbiAgICAgICAgICAgIGV4cG9ydHM6IHsgUEFSQU1TX0NPTlRBSU5TOiBmIH0sXG4gICAgICAgICAgICBpbGxlZ2FsOiAvIyg/IVskX0Etel0pLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIGkuU0hFQkFORyh7IGxhYmVsOiAnc2hlYmFuZycsIGJpbmFyeTogJ25vZGUnLCByZWxldmFuY2U6IDUgfSksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ3VzZV9zdHJpY3QnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgICAgICAgICAgYmVnaW46IC9eXFxzKlsnXCJddXNlIChzdHJpY3R8YXNtKVsnXCJdLyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaS5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBpLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBFLFxuICAgICAgICAgICAgICBtLFxuICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICBfLFxuICAgICAgICAgICAgICBnLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IHIoXG4gICAgICAgICAgICAgICAgICAvW3ssXFxuXVxccyovLFxuICAgICAgICAgICAgICAgICAgdChcbiAgICAgICAgICAgICAgICAgICAgcigvKCgoXFwvXFwvLiokKXwoXFwvXFwqKFxcKlteL118W14qXSkqXFwqXFwvKSlcXHMqKSovLCBjICsgJ1xcXFxzKjonKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2F0dHInLCBiZWdpbjogYyArIHQoJ1xcXFxzKjonKSwgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAgICAgJygnICsgaS5SRV9TVEFSVEVSU19SRSArICd8XFxcXGIoY2FzZXxyZXR1cm58dGhyb3cpXFxcXGIpXFxcXHMqJyxcbiAgICAgICAgICAgICAgICBrZXl3b3JkczogJ3JldHVybiB0aHJvdyBjYXNlJyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgXyxcbiAgICAgICAgICAgICAgICAgIGkuUkVHRVhQX01PREUsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICAgICAgICAgJyhcXFxcKFteKCldKihcXFxcKFteKCldKihcXFxcKFteKCldKlxcXFwpW14oKV0qKSpcXFxcKVteKCldKikqXFxcXCl8JyArXG4gICAgICAgICAgICAgICAgICAgICAgaS5VTkRFUlNDT1JFX0lERU5UX1JFICtcbiAgICAgICAgICAgICAgICAgICAgICAnKVxcXFxzKj0+JyxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6ICdcXFxccyo9PicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogaS5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IG51bGwsIGJlZ2luOiAvXFwoXFxzKlxcKS8sIHNraXA6ICEwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmRzOiBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHsgYmVnaW46IC8sLywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJycsIGJlZ2luOiAvXFxzLywgZW5kOiAvXFxzKi8sIHNraXA6ICEwIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgeyBiZWdpbjogJzw+JywgZW5kOiAnPC8+JyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBvLmJlZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ29uOmJlZ2luJzogby5pc1RydWx5T3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogby5lbmQsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBvLmJlZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBvLmVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraXA6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZiddLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICAgICAgZW5kOiAvW3s7XS8sXG4gICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICAgICAga2V5d29yZHM6IGwsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZicsIGkuaW5oZXJpdChpLlRJVExFX01PREUsIHsgYmVnaW46IGMgfSksIEFdLFxuICAgICAgICAgICAgICAgIGlsbGVnYWw6IC8lLyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICd3aGlsZSBpZiBzd2l0Y2ggY2F0Y2ggZm9yJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgICAgIGkuVU5ERVJTQ09SRV9JREVOVF9SRSArXG4gICAgICAgICAgICAgICAgICAnXFxcXChbXigpXSooXFxcXChbXigpXSooXFxcXChbXigpXSpcXFxcKVteKCldKikqXFxcXClbXigpXSopKlxcXFwpXFxcXHMqXFxcXHsnLFxuICAgICAgICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgICBjb250YWluczogW0EsIGkuaW5oZXJpdChpLlRJVExFX01PREUsIHsgYmVnaW46IGMgfSldLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcLicgKyBjLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHsgYmVnaW46ICdcXFxcJCcgKyBjIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzJyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICAgICAgaWxsZWdhbDogL1s6XCJbXFxdXS8sXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGkuVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1xcYig/PWNvbnN0cnVjdG9yKS8sXG4gICAgICAgICAgICAgICAgZW5kOiAvW3s7XS8sXG4gICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtpLmluaGVyaXQoaS5USVRMRV9NT0RFLCB7IGJlZ2luOiBjIH0pLCAnc2VsZicsIEFdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICcoZ2V0fHNldClcXFxccysoPz0nICsgYyArICdcXFxcKCknLFxuICAgICAgICAgICAgICAgIGVuZDogL1xcey8sXG4gICAgICAgICAgICAgICAga2V5d29yZHM6ICdnZXQgc2V0JyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgaS5pbmhlcml0KGkuVElUTEVfTU9ERSwgeyBiZWdpbjogYyB9KSxcbiAgICAgICAgICAgICAgICAgIHsgYmVnaW46IC9cXChcXCkvIH0sXG4gICAgICAgICAgICAgICAgICBBLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46IC9cXCRbKC5dLyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9XG4gICAgICAgIH0pKGkpXG4gICAgICByZXR1cm4gKFxuICAgICAgICBPYmplY3QuYXNzaWduKGIua2V5d29yZHMsIGMpLFxuICAgICAgICBiLmV4cG9ydHMuUEFSQU1TX0NPTlRBSU5TLnB1c2gobyksXG4gICAgICAgIChiLmNvbnRhaW5zID0gYi5jb250YWlucy5jb25jYXQoW1xuICAgICAgICAgIG8sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ25hbWVzcGFjZScsXG4gICAgICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnaW50ZXJmYWNlJyxcbiAgICAgICAgICAgIGVuZDogL1xcey8sXG4gICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgIGtleXdvcmRzOiAnaW50ZXJmYWNlIGV4dGVuZHMnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pKSxcbiAgICAgICAgbChiLCAnc2hlYmFuZycsIGkuU0hFQkFORygpKSxcbiAgICAgICAgbChiLCAndXNlX3N0cmljdCcsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICAgIGJlZ2luOiAvXlxccypbJ1wiXXVzZSBzdHJpY3RbJ1wiXS8sXG4gICAgICAgIH0pLFxuICAgICAgICAoYi5jb250YWlucy5maW5kKGUgPT4gJ2Z1bmN0aW9uJyA9PT0gZS5jbGFzc05hbWUpLnJlbGV2YW5jZSA9IDApLFxuICAgICAgICBPYmplY3QuYXNzaWduKGIsIHtcbiAgICAgICAgICBuYW1lOiAnVHlwZVNjcmlwdCcsXG4gICAgICAgICAgYWxpYXNlczogWyd0cycsICd0c3gnXSxcbiAgICAgICAgfSksXG4gICAgICAgIGJcbiAgICAgIClcbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ3ZibmV0JyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBmdW5jdGlvbiBlKGUpIHtcbiAgICAgIHJldHVybiBlID8gKCdzdHJpbmcnID09IHR5cGVvZiBlID8gZSA6IGUuc291cmNlKSA6IG51bGxcbiAgICB9XG4gICAgZnVuY3Rpb24gbiguLi5uKSB7XG4gICAgICByZXR1cm4gbi5tYXAobiA9PiBlKG4pKS5qb2luKCcnKVxuICAgIH1cbiAgICBmdW5jdGlvbiB0KC4uLm4pIHtcbiAgICAgIHJldHVybiAnKCcgKyBuLm1hcChuID0+IGUobikpLmpvaW4oJ3wnKSArICcpJ1xuICAgIH1cbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICBjb25zdCBhID0gL1xcZHsxLDJ9XFwvXFxkezEsMn1cXC9cXGR7NH0vLFxuICAgICAgICBpID0gL1xcZHs0fS1cXGR7MSwyfS1cXGR7MSwyfS8sXG4gICAgICAgIHMgPSAvKFxcZHwxWzAxMl0pKDpcXGQrKXswLDJ9ICooQU18UE0pLyxcbiAgICAgICAgciA9IC9cXGR7MSwyfSg6XFxkezEsMn0pezEsMn0vLFxuICAgICAgICBvID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiBuKC8jICovLCB0KGksIGEpLCAvICojLykgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IG4oLyMgKi8sIHIsIC8gKiMvKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiBuKC8jICovLCBzLCAvICojLykgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IG4oLyMgKi8sIHQoaSwgYSksIC8gKy8sIHQocywgciksIC8gKiMvKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbCA9IGUuQ09NTUVOVCgvJycnLywgLyQvLCB7XG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICAgICAgYmVnaW46IC88XFwvPy8sXG4gICAgICAgICAgICAgIGVuZDogLz4vLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgICAgYyA9IGUuQ09NTUVOVChudWxsLCAvJC8sIHtcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogLycvLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC8oW1xcdCBdfF4pUkVNKD89XFxzKS8gfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ1Zpc3VhbCBCYXNpYyAuTkVUJyxcbiAgICAgICAgYWxpYXNlczogWyd2YiddLFxuICAgICAgICBjYXNlX2luc2Vuc2l0aXZlOiAhMCxcbiAgICAgICAgY2xhc3NOYW1lQWxpYXNlczogeyBsYWJlbDogJ3N5bWJvbCcgfSxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2FkZGhhbmRsZXIgYWxpYXMgYWdncmVnYXRlIGFuc2kgYXMgYXN5bmMgYXNzZW1ibHkgYXV0byBiaW5hcnkgYnkgYnlyZWYgYnl2YWwgY2FsbCBjYXNlIGNhdGNoIGNsYXNzIGNvbXBhcmUgY29uc3QgY29udGludWUgY3VzdG9tIGRlY2xhcmUgZGVmYXVsdCBkZWxlZ2F0ZSBkaW0gZGlzdGluY3QgZG8gZWFjaCBlcXVhbHMgZWxzZSBlbHNlaWYgZW5kIGVudW0gZXJhc2UgZXJyb3IgZXZlbnQgZXhpdCBleHBsaWNpdCBmaW5hbGx5IGZvciBmcmllbmQgZnJvbSBmdW5jdGlvbiBnZXQgZ2xvYmFsIGdvdG8gZ3JvdXAgaGFuZGxlcyBpZiBpbXBsZW1lbnRzIGltcG9ydHMgaW4gaW5oZXJpdHMgaW50ZXJmYWNlIGludG8gaXRlcmF0b3Igam9pbiBrZXkgbGV0IGxpYiBsb29wIG1lIG1pZCBtb2R1bGUgbXVzdGluaGVyaXQgbXVzdG92ZXJyaWRlIG15YmFzZSBteWNsYXNzIG5hbWVzcGFjZSBuYXJyb3dpbmcgbmV3IG5leHQgbm90aW5oZXJpdGFibGUgbm90b3ZlcnJpZGFibGUgb2Ygb2ZmIG9uIG9wZXJhdG9yIG9wdGlvbiBvcHRpb25hbCBvcmRlciBvdmVybG9hZHMgb3ZlcnJpZGFibGUgb3ZlcnJpZGVzIHBhcmFtYXJyYXkgcGFydGlhbCBwcmVzZXJ2ZSBwcml2YXRlIHByb3BlcnR5IHByb3RlY3RlZCBwdWJsaWMgcmFpc2VldmVudCByZWFkb25seSByZWRpbSByZW1vdmVoYW5kbGVyIHJlc3VtZSByZXR1cm4gc2VsZWN0IHNldCBzaGFkb3dzIHNoYXJlZCBza2lwIHN0YXRpYyBzdGVwIHN0b3Agc3RydWN0dXJlIHN0cmljdCBzdWIgc3luY2xvY2sgdGFrZSB0ZXh0IHRoZW4gdGhyb3cgdG8gdHJ5IHVuaWNvZGUgdW50aWwgdXNpbmcgd2hlbiB3aGVyZSB3aGlsZSB3aWRlbmluZyB3aXRoIHdpdGhldmVudHMgd3JpdGVvbmx5IHlpZWxkJyxcbiAgICAgICAgICBidWlsdF9pbjpcbiAgICAgICAgICAgICdhZGRyZXNzb2YgYW5kIGFuZGFsc28gYXdhaXQgZGlyZWN0Y2FzdCBnZXR0eXBlIGdldHhtbG5hbWVzcGFjZSBpcyBpc2ZhbHNlIGlzbm90IGlzdHJ1ZSBsaWtlIG1vZCBuYW1lb2YgbmV3IG5vdCBvciBvcmVsc2UgdHJ5Y2FzdCB0eXBlb2YgeG9yIGNib29sIGNieXRlIGNjaGFyIGNkYXRlIGNkYmwgY2RlYyBjaW50IGNsbmcgY29iaiBjc2J5dGUgY3Nob3J0IGNzbmcgY3N0ciBjdWludCBjdWxuZyBjdXNob3J0JyxcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbiBieXRlIGNoYXIgZGF0ZSBkZWNpbWFsIGRvdWJsZSBpbnRlZ2VyIGxvbmcgb2JqZWN0IHNieXRlIHNob3J0IHNpbmdsZSBzdHJpbmcgdWludGVnZXIgdWxvbmcgdXNob3J0JyxcbiAgICAgICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBub3RoaW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgaWxsZWdhbDogJy8vfFxcXFx7fFxcXFx9fGVuZGlmfGdvc3VifHZhcmlhbnR8d2VuZHxeXFxcXCQgJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46IC9cIihcIlwifFteL25dKVwiQ1xcYi8sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46IC9cIi8sXG4gICAgICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgICAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbeyBiZWdpbjogL1wiXCIvIH1dLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAgICAgL1xcYlxcZFtcXGRfXSooKFxcLltcXGRfXSsoRVsrLV0/W1xcZF9dKyk/KXwoRVsrLV0/W1xcZF9dKykpW1JGREAhI10/LyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogL1xcYlxcZFtcXGRfXSooKFU/W1NJTF0pfFslJl0pPy8gfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogLyZIW1xcZEEtRl9dKygoVT9bU0lMXSl8WyUmXSk/LyB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC8mT1swLTdfXSsoKFU/W1NJTF0pfFslJl0pPy8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46IC8mQlswMV9dKygoVT9bU0lMXSl8WyUmXSk/LyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xhYmVsJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXlxcdys6LyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGwsXG4gICAgICAgICAgYyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAvW1xcdCBdKiMoY29uc3R8ZGlzYWJsZXxlbHNlfGVsc2VpZnxlbmFibGV8ZW5kfGV4dGVybmFsc291cmNlfGlmfHJlZ2lvbilcXGIvLFxuICAgICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgICAnbWV0YS1rZXl3b3JkJzpcbiAgICAgICAgICAgICAgICAnY29uc3QgZGlzYWJsZSBlbHNlIGVsc2VpZiBlbmFibGUgZW5kIGV4dGVybmFsc291cmNlIGlmIHJlZ2lvbiB0aGVuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluczogW2NdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICd5YW1sJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICB2YXIgbiA9ICd0cnVlIGZhbHNlIHllcyBubyBudWxsJyxcbiAgICAgICAgYSA9IFwiW1xcXFx3IzsvPzpAJj0rJCwufionKClbXFxcXF1dK1wiLFxuICAgICAgICBzID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAvJy8sIGVuZDogLycvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXFMrLyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIGUuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGVtcGxhdGUtdmFyaWFibGUnLFxuICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgIHsgYmVnaW46IC9cXHtcXHsvLCBlbmQ6IC9cXH1cXH0vIH0sXG4gICAgICAgICAgICAgICAgeyBiZWdpbjogLyVcXHsvLCBlbmQ6IC9cXH0vIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGkgPSBlLmluaGVyaXQocywge1xuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAvJy8sIGVuZDogLycvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9bXlxccyx7fVtcXF1dKy8gfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgICAgbCA9IHtcbiAgICAgICAgICBlbmQ6ICcsJyxcbiAgICAgICAgICBlbmRzV2l0aFBhcmVudDogITAsXG4gICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAga2V5d29yZHM6IG4sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9LFxuICAgICAgICB0ID0ge1xuICAgICAgICAgIGJlZ2luOiAvXFx7LyxcbiAgICAgICAgICBlbmQ6IC9cXH0vLFxuICAgICAgICAgIGNvbnRhaW5zOiBbbF0sXG4gICAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGcgPSB7XG4gICAgICAgICAgYmVnaW46ICdcXFxcWycsXG4gICAgICAgICAgZW5kOiAnXFxcXF0nLFxuICAgICAgICAgIGNvbnRhaW5zOiBbbF0sXG4gICAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGIgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcd1tcXFxcdyA6XFxcXC8uLV0qOig/PVsgXFx0XXwkKScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46ICdcIlxcXFx3W1xcXFx3IDpcXFxcLy4tXSpcIjooPz1bIFxcdF18JCknIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogXCInXFxcXHdbXFxcXHcgOlxcXFwvLi1dKic6KD89WyBcXHRdfCQpXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46ICdeLS0tXFxcXHMqJCcsIHJlbGV2YW5jZTogMTAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICdbXFxcXHw+XShbMS05XT9bKy1dKT9bIF0qXFxcXG4oICspW14gXVteXFxcXG5dKlxcXFxuKFxcXFwyW15cXFxcbl0rXFxcXG4/KSonLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICc8JVslPS1dPycsXG4gICAgICAgICAgICBlbmQ6ICdbJS1dPyU+JyxcbiAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiAncnVieScsXG4gICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3R5cGUnLCBiZWdpbjogJyFcXFxcdyshJyArIGEgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3R5cGUnLCBiZWdpbjogJyE8JyArIGEgKyAnPicgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3R5cGUnLCBiZWdpbjogJyEnICsgYSB9LFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAndHlwZScsIGJlZ2luOiAnISEnICsgYSB9LFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbWV0YScsIGJlZ2luOiAnJicgKyBlLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnJCcgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ21ldGEnLCBiZWdpbjogJ1xcXFwqJyArIGUuVU5ERVJTQ09SRV9JREVOVF9SRSArICckJyB9LFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnYnVsbGV0JywgYmVnaW46ICctKD89WyBdfCQpJywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgZS5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICB7IGJlZ2luS2V5d29yZHM6IG4sIGtleXdvcmRzOiB7IGxpdGVyYWw6IG4gfSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgJ1xcXFxiWzAtOV17NH0oLVswLTldWzAtOV0pezAsMn0oW1R0IFxcXFx0XVswLTldWzAtOV0/KDpbMC05XVswLTldKXsyfSk/KFxcXFwuWzAtOV0qKT8oWyBcXFxcdF0pKihafFstK11bMC05XVswLTldPyg6WzAtOV1bMC05XSk/KT9cXFxcYicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ251bWJlcicsIGJlZ2luOiBlLkNfTlVNQkVSX1JFICsgJ1xcXFxiJywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgdCxcbiAgICAgICAgICBnLFxuICAgICAgICAgIHMsXG4gICAgICAgIF0sXG4gICAgICAgIHIgPSBbLi4uYl1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIHIucG9wKCksXG4gICAgICAgIHIucHVzaChpKSxcbiAgICAgICAgKGwuY29udGFpbnMgPSByKSxcbiAgICAgICAgeyBuYW1lOiAnWUFNTCcsIGNhc2VfaW5zZW5zaXRpdmU6ICEwLCBhbGlhc2VzOiBbJ3ltbCddLCBjb250YWluczogYiB9XG4gICAgICApXG4gICAgfVxuICB9KSgpXG4pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaGxqc1xufVxuIl19
