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
        envId: 'website-wikoo-4g46k8do98867542',
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
      envId: 'https://twikoo-source.vercel.app/',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY2F0ZWdvcmllcy5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvc2VhcmNoLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9zaGFyZWJ1dHRvbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvdG9jLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC93ZWJfaW5mby5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BsdWdpbnMvaGlnaGxpZ2h0L2hpZ2hsaWdodC5taW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0EsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGFBQUQsQ0FBbEI7QUFDQSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsY0FBRCxDQUFuQixDLENBRUE7O0FBQ0EsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFVBQUQsQ0FBZjtBQUNBLElBQUksUUFBUSxHQUFHLENBQUMs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LEVBQUUsTUFBYjtNQUFxQixLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsbUJBQVIsR0FBOEI7SUFBMUQsQ0EvQkUsRUFnQ0Y7TUFBRSxTQUFTLEVBQUUsTUFBYjtNQUFxQixLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsbUJBQVYsR0FBZ0M7SUFBNUQsQ0FoQ0UsRUFpQ0Y7TUFBRSxTQUFTLEVBQUUsUUFBYjtNQUF1QixLQUFLLEVBQUUsWUFBOUI7TUFBNEMsU0FBUyxFQUFFO0lBQXZELENBakNFLEVBa0NGLENBQUMsQ0FBQyxpQkFsQ0EsRUFtQ0Y7TUFBRSxhQUFhLEVBQUUsQ0FBakI7TUFBb0IsUUFBUSxFQUFFO1FBQUUsT0FBTyxFQUFFO01BQVg7SUFBOUIsQ0FuQ0UsRUFvQ0Y7TUFDRSxTQUFTLEVBQUUsUUFEYjtNQUVFLEtBQUssRUFDSDtJQUhKLENBcENFLEVBeUNGO01BQUUsU0FBUyxFQUFFLFFBQWI7TUFBdUIsS0FBSyxFQUFFLENBQUMsQ0FBQyxXQUFGLEdBQWdCLEtBQTlDO01BQXFELFNBQVMsRUFBRTtJQUFoRSxDQXpDRSxFQTBDRixDQTFDRSxFQTJDRixDQTNDRSxFQTRDRixDQTVDRSxDQWpETjtJQUFBLElBK0ZFLENBQUMsYUFBTyxDQUFQLENBL0ZIO0lBZ0dBLE9BQ0UsQ0FBQyxDQUFDLEdBQUYsSUFDQSxDQUFDLENBQUMsSUFBRixDQUFPLENBQVAsQ0FEQSxFQUVDLENBQUMsQ0FBQyxRQUFGLEdBQWEsQ0FGZCxFQUdBO01BQUUsSUFBSSxFQUFFLE1BQVI7TUFBZ0IsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFuQztNQUFzQyxPQUFPLEVBQUUsQ0FBQyxLQUFELENBQS9DO01BQXdELFFBQVEsRUFBRTtJQUFsRSxDQUpGO0VBTUQsQ0F2R0Q7QUF3R0QsQ0ExR0QsRUFGRjtlQStHZTtFQUNiLElBQUksRUFBSjtBQURhLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiAgXG4gICAgVE9ETzogXG4gICAgICAgIOiDveWcqOagueebruW9leiuvue9rum7mOiupOeKtuaAgeaYr+WHoOagj+eahFxuICAgICAgICDog73lpJ/orqnkvb/nlKjogIXlj5bmtojov5nnp43igJzorrDlv4bigJ1cbioqL1xuXG5cbi8vIFBD77yaaGVhZGVy5LiK55qE5bem5Y+z5oyJ6ZKu5Yy65Z+fXG5sZXQgYXJyb3dfbGVmdCA9ICQoJyNhcnJvd19sZWZ0Jyk7XG5sZXQgYXJyb3dfcmlnaHQgPSAkKCcjYXJyb3dfcmlnaHQnKTtcblxuLy8g5biD5bGA77ya54mI5b+D44CB5bem5Lit5Y+z5o6S54mIXG5sZXQgY3RfbGVmdCA9ICQoJy5jdF9sZWZ0Jyk7XG5sZXQgY3RfcmlnaHQgPSAkKCcuY3RfcmlnaHQnKTtcbmxldCBjdF9jZW50ZXIgPSAkKCcuY3RfY2VudGVyJyk7XG5sZXQgY29udGFpbmVyID0gJCgnLmNvbnRhaW5lcicpO1xuXG4vLyBQQy9hcHDvvJrliIfmjaJoZWFkZXJcbmxldCBoZWFkZXIgPSAkKCcuaGVhZGVyJyk7XG5sZXQgaGVhZGVyX2FwcCA9ICQoJy5oZWFkZXJfYXBwJyk7XG5cbi8vIGFwcO+8mmhlYWRlcuS4iueahOW3puWPs+aMiemSruWMuuWfn1xubGV0IGJ0bl9hcHBfc2lkZXIgPSAkKCcjYnRuX2FwcF9zaWRlcicpO1xubGV0IGJ0bl9hcHBfcmlnaHQgPSAkKCcjYnRuX2FwcF9yaWdodCcpO1xuXG4vLyBhcHDvvJrngrnlh7toZWFkZXJfYXBw5pe25YCZ5by55Ye65p2l55qE5oq95bGJXG5sZXQgYXBwX3NpZGVfZ2xhc3MgPSAkKCcjYXBwX3NpZGVfZ2xhc3MnKTtcbmxldCBhcHBfc2lkZV9jb250ZW50ID0gJCgnI2FwcF9zaWRlX2NvbnRlbnQnKTtcblxuLy8gMS7lt6bkuK3phY3nva5cbmxldCBvbmVfY29udGFpbmVyID0gJzgwJScgO1xubGV0IG9uZV9jdF9jZW50ZXJfd2lkdGggPSAnNzUlJztcbmxldCBvbmVfY3RfbGVmdF93aWR0aCA9ICcyNSUnO1xuLy8gMi4g5Lit5Y+z6YWN572uXG5sZXQgdHdvX2NvbnRhaW5lciA9ICc4MCUnIDtcbmxldCB0d29fY3RfY2VudGVyX3dpZHRoID0gJzc1JSc7XG5sZXQgdHdvX2N0X3JpZ2h0X3dpZHRoID0gJzI1JSc7XG4vLyAzLiDlt6bkuK3lj7PphY3nva5cbmxldCB0aHJlZV9jb250YWluZXIgPSAnOTUlJyA7XG5sZXQgdGhyZWVfY3RfY2VudGVyX3dpZHRoID0gJzYwJSc7XG5sZXQgdGhyZWVfY3RfcmlnaHRfd2lkdGggPSAnMjAlJztcbmxldCB0aHJlZV9jdF9sZWZ0X3dpZHRoID0gJzIwJSc7XG4vLyA0LiDkuK3phY3nva5cbmxldCBmb3VyX2NvbnRhaW5lciA9ICc3NSUnIDtcbmxldCBmb3VyX2N0X2NlbnRlcl93aWR0aCA9ICcxMDAlJztcbi8vIOiuvuWkh+Wwj+S6jjU2MHB455qE5Lit6YWN572uXG5sZXQgZGV2aWNlX3NtYWxsX2NvbnRhaW5lciA9IFwiOTglXCI7XG5sZXQgZGV2aWNlX3NtYWxsX2NlbnRlciA9IFwiMTAwJVwiO1xuLy8g6K6+5aSH5bCP5LqONzgwcHjnmoTkuK3phY3nva5cbmxldCBkZXZpY2VfY2VudGVyX2NvbnRhaW5lciA9IFwiOTYlXCI7XG5sZXQgZGV2aWNlX2NlbnRlcl9jZW50ZXIgPSBcIjEwMCVcIjtcblxuXG4vLyDliKTmlq1wY+auteW3puWPs+S4iuinkueahOeureWktOivpeaYvuekuuWTquS4qlxuZnVuY3Rpb24gbGVmdF9yaWdodF9hcnJvdyAoKSB7XG4gICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgfVxuICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBsZWZ0X2NlbnRlcl9yaWdodCAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IHRocmVlX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgY3RfcmlnaHQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9yaWdodF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdMUicpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW4g+WxgO+8muW3puS4reWPs1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ0xSJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbGVmdF9jZW50ZXIgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogb25lX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogb25lX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKHtcIndpZHRoXCI6IG9uZV9jdF9sZWZ0X3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW4g+WxgO+8muW3puS4rVwiKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gICAgfVxufVxuZnVuY3Rpb24gY2VudGVyX3JpZ2h0ICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IHR3b19jb250YWluZXJ9KTtcbiAgICBjdF9yaWdodC5jc3Moe1wid2lkdGhcIjogdHdvX2N0X3JpZ2h0X3dpZHRofSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0d29fY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdSJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5biD5bGA77ya5Lit5Y+zXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnUicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNlbnRlciAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiBmb3VyX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogZm91cl9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBsZWZ0X3JpZ2h0X2Fycm93ICgpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXlvdXQnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdDJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5biD5bGA77ya5LitXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnQycpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldmljZV9zbWFsbCAoKSB7XG4gICAgLy8g5pyA5bCP5bC65a+477ya5pyA5aSnNTYwcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjU2MHB45bC65a+4XCIpO1xuXG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAvLyDorr7nva7luIPlsYBcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9zbWFsbF9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9zbWFsbF9jZW50ZXJ9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcblxufVxuZnVuY3Rpb24gZGV2aWNlX2NlbnRlciAoKSB7XG4gICAgLy8g5Lit562J5bC65a+477ya5pyA5aSnOTgwcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjk4MHB45bC65a+4XCIpO1xuXG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAvLyDorr7nva7luIPlsYBcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9jZW50ZXJfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBkZXZpY2VfY2VudGVyX2NlbnRlcn0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuXG59XG5mdW5jdGlvbiBkZXZpY2VfbGFyZ2VzdCAoKSB7XG4gICAgLy8g5pyA5aSn5bC65a+477ya5pyA5aSnMTI2MXB4XG4gICAgY29uc29sZS5sb2coXCLlsI/kuo4xMjYxcHjlsLrlr7hcIik7XG5cbiAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG4gICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIGhlYWRlcl9hcHAuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcblxuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGN0X3JpZ2h0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfcmlnaHRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbn1cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYnRuX3BjX3N3aXRjaCgpO1xuICAgICAgICB0aGlzLmJ0bl9hcHBfc3dpdGNoKCk7XG4gICAgICAgIHRoaXMuYnJvd3Nlcl9yZW1lbWJlcigpO1xuICAgICAgICB0aGlzLmRldmljZV9zd2l0Y2goKTsgLy8g6L+Z5Liq5pS+5Yiw5pyA5ZCO6Ieq6LCD55SoIeWboOS4uuS4jeeuoeacrOWcsOWtmOWCqOaYr+S7gOS5iO+8jOacgOe7iOi/mOaYr+imgeagueaNruiuvuWkh+ebkeWQrOS4uuS4u1xuICAgIH0sXG4gICAgLyogUEPvvJrljZUv5Y+ML+S4ieagj+W4g+WxgOWIh+aNouaMiemSrueCueWHu+S6i+S7tiAqL1xuICAgIGJ0bl9wY19zd2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICBhcnJvd19sZWZ0LmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAvLyDovazmjaLliIfmjaLkuYvlkI7nmoTnrq3lpLTmjInpkq5cbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwnYmxvY2snKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy/lt6bkuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+W3puS4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy/kuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/kuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGFycm93X3JpZ2h0LmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDovazmjaLliIfmjaLkuYvlkI7nmoTnrq3lpLTmjInpkq5cbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwnYmxvY2snKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvL+S4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+W3puS4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvLyDkuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8g5bem5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qIOenu+WKqOerr+W3puWPs+S4iuinkueahOaMiemSriAqL1xuICAgIGJ0bl9hcHBfc3dpdGNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g54K55Ye75bem5oyJ6ZKuXG4gICAgICAgIGJ0bl9hcHBfc2lkZXIuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFwcF9zaWRlX2dsYXNzLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgICAgICAgICAgYXBwX3NpZGVfY29udGVudC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOeCueWHu+avm+eOu+eSg+eJh1xuICAgICAgICBhcHBfc2lkZV9nbGFzcy5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgYXBwX3NpZGVfZ2xhc3MuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICAgICAgICAgIGFwcF9zaWRlX2NvbnRlbnQuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOeCueWHu+WPs+aMiemSrlxuICAgICAgICBidG5fYXBwX3JpZ2h0LmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhbGVydChcIuacrOe9keermei/mOWcqOW8gOWPkeS4re+8jOivuOWkmuWKn+iDvei/mOacquWujOWWhO+8jOaVrOivt+acn+W+hX5cIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacrOe9keermei/mOWcqOW8gOWPkeS4re+8jOivuOWkmuWKn+iDvei/mOacquWujOWWhO+8jOaVrOivt+acn+W+hX5cIik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyog5rWP6KeI5Zmo6K6w5L2P5biD5bGAICovXG4gICAgYnJvd3Nlcl9yZW1lbWJlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgYl9sZWZ0ID0gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKTtcbiAgICAgICAgbGV0IGJfcmlnaHQgPSAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKTtcbiAgICAgICAgbGV0IGJfbGF5b3V0O1xuICAgIFxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgICAgICAvLyDmtY/op4jlmajmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgICAgICAgIGxldCBsYXlvdXRfY2hhbmdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnIlsYXlvdXTluIPlsYDnvJPlrZhcIik7ICAgIFxuICAgICAgICAgICAgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiTFJcIil7XG4gICAgICAgICAgICAgICAgLy8g5bem5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihsYXlvdXRfY2hhbmdlID09PSBcIkxcIikge1xuICAgICAgICAgICAgICAgIC8vIOW3puS4reW4g+WxgFxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiUlwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiQ1wiKSB7XG4gICAgICAgICAgICAgICAgLy8g5Lit5biD5bGAXG4gICAgICAgICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWFtuS7luiOq+WQjeWFtuWmmeeahOaDheWGtVxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmtY/op4jlmajmsqHmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rKh5pyJbGF5b3V05biD5bGA57yT5a2YXCIpO1xuICAgICAgICAgICAgaWYgKChiX2xlZnQgPT09IFwiYmxvY2tcIikgJiYgKGJfcmlnaHQgPT09IFwibm9uZVwiKSkgeyAvLyDlt6bkuK3luIPlsYBcbiAgICAgICAgICAgICAgICBiX2xheW91dCA9IFwiTFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoYl9sZWZ0ID09PSBcIm5vbmVcIikgJiYgKGJfcmlnaHQgPT09IFwiYmxvY2tcIikpIHsgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIlJcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGJfbGVmdCA9PT0gXCJibG9ja1wiKSAmJiAoYl9yaWdodCA9PT0gXCJibG9ja1wiKSkgeyAvL+W3puS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJMUlwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJMUlwiO1xuICAgICAgICAgICAgICAgIC8vIOW3puS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgYl9sYXlvdXQpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSxcbiAgICAvKiDlqpLkvZPmn6Xor6LluIPlsYAgKi9cbiAgICBkZXZpY2Vfc3dpdGNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g5Yib5bu65p+l6K+i5YiX6KGoXG4gICAgICAgIGxldCBkZXZpY2Vfd2lkdGggPSBbXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNTYwcHgpJyksXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTgwcHgpJyksXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTI2MXB4KScpXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8g5a6a5LmJ5Zue6LCD5Ye95pWwXG4gICAgICAgIGZ1bmN0aW9uIG1lZGlhTWF0Y2hzICgpIHtcbiAgICAgICAgICAgIGlmIChkZXZpY2Vfd2lkdGhbMF0ubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGRldmljZV9zbWFsbCAoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX3dpZHRoWzFdLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBkZXZpY2VfY2VudGVyICgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2Vfd2lkdGhbMl0ubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGRldmljZV9sYXJnZXN0ICgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWkp+S6juiuvuWumuacgOWkp+WwuuWvuOaDheWGtVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlhYjov5DooYzkuIDmrKHlm57osIPlh73mlbBcbiAgICAgICAgbWVkaWFNYXRjaHMoKTtcbiAgICAgICAgLy8g5Li65p+l6K+i5YiX6KGo5rOo5YaM55uR5ZCs5Zmo77yM5ZCM5pe25bCG5Zue6LCD5Ye95pWw5Lyg57uZ55uR5ZCs5ZmoXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGV2aWNlX3dpZHRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZXZpY2Vfd2lkdGhbaV0uYWRkTGlzdGVuZXIobWVkaWFNYXRjaHMpO1xuICAgICAgICB9XG4gICAgfSxcbn1cblxuXG4iLCIvKlxuICogQEF1dGhvcjogd3p0bGluazEwMTNcbiAqIEBEYXRlOiAyMDIyLTA3LTA3IDE4OjQ4OjE4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTA4LTA2IDE0OjUxOjI5XG4gKiBARGVzY3JpcHRpb246XG4gKi9cbmltcG9ydCBsYXlvdXRfb2JqZWN0IGZyb20gJy4vY29tbW9uL2xheW91dC5qcydcbmltcG9ydCB0b2Nfb2JqZWN0IGZyb20gJy4vcGFydC90b2MuanMnXG5pbXBvcnQgY29tbWVudHNfb2JqZWN0IGZyb20gJy4vcGFydC9jb21tZW50cy5qcydcbmltcG9ydCB7IGdvX3RvcF9vYmplY3QsIGdldFNjcm9sbCB9IGZyb20gJy4vcGFydC9nb190b3AuanMnXG5pbXBvcnQgd2ViX2luZm9fb2JqZWN0IGZyb20gJy4vcGFydC93ZWJfaW5mby5qcydcbmltcG9ydCBzZWFyY2hfb2JqZWN0IGZyb20gJy4vcGFydC9zZWFyY2guanMnXG5pbXBvcnQgc2hhcmVfb2JqZWN0IGZyb20gJy4vcGFydC9zaGFyZWJ1dHRvbi5qcydcbmltcG9ydCBjYXRlZ29yaWVzX29iamVjdCBmcm9tICcuL3BhcnQvY2F0ZWdvcmllcy5qcydcbmltcG9ydCBobGpzIGZyb20gJy4vcGx1Z2lucy9oaWdobGlnaHQvaGlnaGxpZ2h0Lm1pbi5qcydcbi8vIGltcG9ydCBfcnVuX1dhbGluZSBmcm9tICcuL3BsdWdpbnMvd2FsaW5lL3dhbGluZS5qcydcbi8vIOS7o+eggemrmOS6rlxuaGxqcy5oaWdobGlnaHRBbGwoKVxuLy8gX3J1bl9XYWxpbmUoKVxuXG4vLyDlhaXlj6Plh73mlbDvvIzkvJrlnKjpobXpnaLliqDovb3lrozmr5XmiafooYxcbiQoZnVuY3Rpb24gKCkge1xuICAvLyDliJ3lp4vljJbnm67lvZXohJrmnKzlh73mlbBcbiAgdG9jX29iamVjdC5pbml0KClcbiAgLy8g5Yid5aeL5YyW6K+E6K665qih5Z2X5LiL5omA5pyJ5Ye95pWwXG4gIGNvbW1lbnRzX29iamVjdC5pbml0KClcbiAgLy8g5Yid5aeL5YyW5Zue5Yiw6aG26YOoXG4gIGdvX3RvcF9vYmplY3QuaW5pdCgpXG4gIC8vIOW4g+WxgOWIneWni+WMllxuICBsYXlvdXRfb2JqZWN0LmluaXQoKVxuICBzZWFyY2hfb2JqZWN0LmluaXQoKVxuICAvLyDlhaXlj6Plh73mlbDliJ3lp4vljJbnvZHnq5nov5DooYzml7bpl7RcbiAgd2ViX2luZm9fb2JqZWN0LmluaXQoKVxuICAvLyDliIbkuqvmjInpkq7nmoTliJ3lp4vljJZcbiAgc2hhcmVfb2JqZWN0LmluaXQoKVxuICAvLyDnm67lvZXlh73mlbDliJ3lp4vljJZcbiAgY2F0ZWdvcmllc19vYmplY3QuaW5pdCgpXG4gIC8vIOWktOWbvuS8mOWMluS7o+eggVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJ0aWNsZV9pbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0Y2xlX2xpc3RfaXRlbV9pbWcnKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJ0aWNsZV9pbWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB3aWQgPSBhcnRpY2xlX2ltZ1tpXS5maXJzdEVsZW1lbnRDaGlsZC53aWR0aCArIDVcbiAgICAgIGxldCBoZWkgPSBhcnRpY2xlX2ltZ1tpXS5maXJzdEVsZW1lbnRDaGlsZC5oZWlnaHQgKyA3XG4gICAgICBhcnRpY2xlX2ltZ1tpXS5zdHlsZS5tYXhXaWR0aCA9IHdpZCArICdweCdcbiAgICAgIGFydGljbGVfaW1nW2ldLnN0eWxlLm1heEhlaWdodCA9IGhlaSArICdweCdcbiAgICB9XG4gIH0sIDEwMDApXG59KVxuIiwiLypcbiAqIEBBdXRob3I6IHd6dGxpbmsxMDEzXG4gKiBARGF0ZTogMjAyMi0wNy0wNyAxODo0ODoxOFxuICogQExhc3RFZGl0VGltZTogMjAyMi0wNy0xMCAyMTo0NzozMVxuICogQERlc2NyaXB0aW9uOlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhdGVnb3JpZXNfd2lkZ2V0KClcbiAgICB0aGlzLmhpdF9vcGVuX2Nsb3NlX2ZvcmRlcigpXG4gICAgdGhpcy5yZWFkbW9yZV9ibG9nX2Vzc2F5KClcbiAgfSxcbiAgLy8g54K55Ye7aWNvbuWxleW8gC/lhbPpl63moJHliIbnsbtcbiAgaGl0X29wZW5fY2xvc2VfZm9yZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gbGV0IGNhdGVfY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlX2NlbGwnKVxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZV9jZWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBpZiAoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgIC8vICAgICBsZXQgaXRlbSA9ICQoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdKVxuICAgIC8vICAgICBpdGVtLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICBpZiAoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgIC8vICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gICAgICAgfSBlbHNlIGlmIChcbiAgICAvLyAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID09PSAnaW5saW5lLWJsb2NrJ1xuICAgIC8vICAgICAgICkge1xuICAgIC8vICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC8vIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH0sXG4gIC8vIOWIneWni+WMllxuICBjYXRlZ29yaWVzX3dpZGdldDogZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcnJfbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnktbGlzdC1pdGVtJylcblxuICAgIGFycl9saS5mb3JFYWNoKGxpID0+IHtcbiAgICAgIC8vIOe+juWMluivpeWIhuexu+aAu+aVsFxuICAgICAgbGV0IG9ial93b3JkID0gbGkucXVlcnlTZWxlY3RvcignYScpLm5leHRFbGVtZW50U2libGluZ1xuICAgICAgb2JqX3dvcmQuaW5uZXJIVE1MID0gJyBbJyArIG9ial93b3JkLmlubmVySFRNTCArICddJ1xuICAgICAgLy8g6K+l5YiG57G75LiL5aaC5p6c5pyJ5a2Q5YiG57G7XG4gICAgICBpZiAobGkucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWxpc3QtY2hpbGQnKSkge1xuICAgICAgICAvLyDpu5jorqTmiYDmnInlrZDliIbnsbvlhajpg6jmlLbnvKlcbiAgICAgICAgbGkucXVlcnlTZWxlY3RvcigndWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIC8vIOWxleW8gOaMiemSrlxuICAgICAgICBsZXQgbm9kZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgbm9kZV8xLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgICAgICBub2RlXzEuaW5uZXJIVE1MID1cbiAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1wbHVzLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnXG4gICAgICAgIGxpLmluc2VydEJlZm9yZShub2RlXzEsIGxpLnF1ZXJ5U2VsZWN0b3IoJ2EnKSlcblxuICAgICAgICAvLyDmlLbnvKnmjInpkq5cbiAgICAgICAgbGV0IG5vZGVfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBub2RlXzIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBub2RlXzIuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgICAgIG5vZGVfMi5pbm5lckhUTUwgPVxuICAgICAgICAgICc8aSBjbGFzcz1cImZhIGZhLW1pbnVzLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnXG4gICAgICAgIGxpLmluc2VydEJlZm9yZShub2RlXzIsIGxpLnF1ZXJ5U2VsZWN0b3IoJ2EnKSlcblxuICAgICAgICAvLyDlsZXlvIDmjInpkq7ms6jlhozngrnlh7vkuovku7ZcbiAgICAgICAgbm9kZV8xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgbm9kZV8yLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgfSlcblxuICAgICAgICAvLyDmlLbnvKnmjInpkq7ms6jlhozngrnlh7vkuovku7ZcbiAgICAgICAgbm9kZV8yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG5vZGVfMi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgbm9kZV8xLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6K+l5YiG57G75LiL5rKh5pyJ5a2Q5YiG57G7XG4gICAgICAgIGxldCBub2RlXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykgLy8g5pS+5LiA5Liq5Y2g5L2N56ymXG4gICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgbm9kZV8xLnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzE1cHgnXG4gICAgICAgIG5vZGVfMS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBsaS5pbnNlcnRCZWZvcmUobm9kZV8xLCBsaS5xdWVyeVNlbGVjdG9yKCdhJykpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgLy8g5p+l55yL5pu05aSa6aG16Z2i77yM5LyY5YyW5Y2a5a6iL+maj+eslOaYvuekulxuICByZWFkbW9yZV9ibG9nX2Vzc2F5OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL2FyY2hpdmVzLycpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAvLyDljrvmjonnrKzkuIDkuKrvvJ/lrZfnrKZcbiAgICAgIGxldCBwYXJhbXMgPSBsb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpXG4gICAgICAvLyDmoLnmja495Y+35YiS5YiG5Y+C5pWwXG4gICAgICBsZXQgYXJyID0gcGFyYW1zLnNwbGl0KCc9JylcbiAgICAgIC8vIOiOt+WPlnBhZ2VfdHlwZeWPguaVsFxuICAgICAgbGV0IHBhZ2VfdHlwZSA9IGFyclsxXVxuICAgICAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFyY2hpdmVfYXJ0aWNsZV9saXN0JylcbiAgICAgIGZvciAobGV0IHUgPSAwOyB1IDwgdWwubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgLy8g5a+55q+P5LiA5LiqbGnov5vooYzliKTmlq3vvIzlpoLmnpzkuI3mmK/lj4LmlbDnmoTlgLzvvIzlsLHov5vooYzpmpDol49cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bFt1XS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBpbmRleCA9IHVsW3VdLmNoaWxkcmVuW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAnZHNhbCcpIHtcbiAgICAgICAgICAgIGluZGV4ID0gJ2Jsb2cnXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCAhPT0gcGFnZV90eXBlKSB7XG4gICAgICAgICAgICB1bFt1XS5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxufVxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbuOAkOaWh+eroOiuv+mXrumHj+aOkuWQjeOAkVxuICAgIOaWh+eroOmYheivu+mHj+WcqOWNleS4quaWh+eroOS4reWPr+S7peaYvuekuuS9huaYr+S4jeiDveaOkuWQje+8jOaOkuWQjeaAjuS5iOWunueOsOWRou+8n1xuICAgIOaWueahiDHvvJrkvb/nlKh2YWxpbmVcbiAgICDmlrnmoYgy77ya5Zyo5pyN5Yqh5Zmo5LiK6L+b6KGM5YWo56uZ55qE5paH56ug6K6/6Zeu77yM5o+Q5Y+W5LuW5Lus55qE6K6/6Zeu6YePaWRcbiAgICDmlrnmoYgz77ya5a+5dHdpa29v5LqR5Ye95pWw6L+b6KGM5Luj56CB5pu05pS577yM57G75Ly86K6/6Zeu6YePYXBpXG4gXG7jgJDor4TorrrliIfmjaLmjInpkq7jgJFcbiAgICDliIfmjaJ1dHRlcmFuY2Vz6K+E6K665ZCO77yM6aG16Z2i5Lya5Yi35paw5LiA5LiL54S25ZCO5Y+I5Zue5Yiw6buY6K6k6K+E6K6657O757uf5LqG77yM6L+Z5Liq5Y+v5Lul5LyY5YyWXG5cbuOAkOacgOaWsOivhOiuuuOAkVxuICAgIOacgOaWsOivhOiuuue7hOS7tu+8jOWmguaenGJsb2fpobXpnaLnlKjkuobvvIzpgqPkuYjov5nkuKrnu4Tku7blsLHkuI3og73mlL7lnKjnp7vliqjnq6/kvqfovrnmoI/kuobvvIxcbiAgICDlkIzkuIDkuKppZOS4jeiDveWkmuasoeeUqOeahOe8mOaVheWQl++8n1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8g5a+85Ye65Li65LiA5Liq5a+56LGhXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdvX2NvbW1lbnRzKClcbiAgICB0aGlzLmNvbW1lbnRzX2NvdW50KClcbiAgICB0aGlzLm5ld19jb21tZW50cygpXG4gICAgdGhpcy5zd2l0Y2hfY29tbWVudCgpXG4gICAgdHdpa29vXG4gICAgICAuaW5pdCh7XG4gICAgICAgIGVudklkOiAnaHR0cHM6Ly90d2lrb28ud3p0bGluazEwMTMuY29tLycsXG4gICAgICAgIGVsOiAnI3Rjb21tZW50JyxcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIC8vIHBhdGg6ICd3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUnLCAvLyDnlKjkuo7ljLrliIbkuI3lkIzmlofnq6DnmoToh6rlrprkuYkganMg6Lev5b6E77yM5aaC5p6c5oKo55qE5paH56ug6Lev5b6E5LiN5pivIGxvY2F0aW9uLnBhdGhuYW1l77yM6ZyA5Lyg5q2k5Y+C5pWwXG5cbiAgICAgICAgLy8g6K+E6K665Yqg6L295oiQ5Yqf5ZCO55qE5Zue6LCD5Ye95pWw44CCXG4gICAgICAgIC8vIOWPkeihqOivhOiuuuWQjuiHquWKqOWIt+aWsOivhOiuuuaXtuOAgeWKoOi9veS4i+S4gOmhteivhOiuuuaXtu+8jOS5n+S8muinpuWPkeOAglxuICAgICAgICAvLyDor4TorrrliqDovb3lpLHotKXml7bkuI3kvJrop6blj5HjgIJcbiAgICAgICAgb25Db21tZW50TG9hZGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1R3aWtvbyBhbGwgY29tbWVudHMgbG9hZGVkJylcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFR3aWtvbyDmiJDlip/mjILovb3lkI7nmoTlm57osIPlh73mlbDjgILnjq/looMgSUQg6ZSZ6K+v44CB572R57uc5byC5bi444CB5oyC6L295aSx6LSl562J5oOF5Ya15pe25LiN5Lya6Kem5Y+R44CCXG4gICAgICAgIGNvbnNvbGUubG9nKCdUd2lrb28gbG9hZGluZyBmaW5pc2hlZCcpXG4gICAgICB9KVxuICB9LFxuICAvLyDlj7PkuIvop5LmjInpkq7kuovku7Yg5piv5ZCm5YmN5b6A6K+E6K665Yy6XG4gIGdvX2NvbW1lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb19jb21tZW50cycpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cbiAgfSxcbiAgLy8g5paH56ug6K+E6K665pWwXG4gIGNvbW1lbnRzX2NvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yik5pat6aG16Z2i5piv5ZCm5pyJ6K+E6K665Yy6aWTlkozlvJXnlKjor4TorrrmlbDnmoRpZFxuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cycpICYmXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJylcbiAgICApIHtcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJylcbiAgICAgIC8vIEJPTeiOt+WPlumhtemdonVybOeahHBhdGhuYW1l6Lev5b6EXG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzX3VybCA9IFtsb2NhdGlvbi5wYXRobmFtZV1cblxuICAgICAgdHdpa29vXG4gICAgICAgIC5nZXRDb21tZW50c0NvdW50KHtcbiAgICAgICAgICBlbnZJZDogJ3dlYnNpdGUtd2lrb28tNGc0Nms4ZG85ODg2NzU0MicsIC8vIOeOr+WigyBJRFxuICAgICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICAgIHVybHM6IHR3aWtvb19jb21tZW50c191cmwsIC8vIOS4jeWMheWQq+WNj+iuruOAgeWfn+WQjeOAgeWPguaVsOeahOaWh+eroOi3r+W+hOWIl+ihqO+8jOW/heS8oOWPguaVsFxuICAgICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UsIC8vIOivhOiuuuaVsOaYr+WQpuWMheaLrOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAvLyDlsIbor4TorrrmlbDlhpnlhaXlhbbkuK1cbiAgICAgICAgICB0d2lrb29fY29tbWVudHMuaW5uZXJUZXh0ID0gcmVzWzBdLmNvdW50XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAvLyDov5Tlm57npLrkvos6IFtcbiAgICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTAvcG9zdC0xLmh0bWwnLCBjb3VudDogMTAgfSxcbiAgICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTEvcG9zdC0yLmh0bWwnLCBjb3VudDogMCB9LFxuICAgICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMi9wb3N0LTMuaHRtbCcsIGNvdW50OiAyMCB9XG4gICAgICAgICAgLy8gXVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIC8vIOWPkeeUn+mUmeivr1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB9KVxuICAgIH1cbiAgfSxcbiAgLy8g5pyA5paw6K+E6K66XG4gIG5ld19jb21tZW50czogZnVuY3Rpb24gKCkge1xuICAgIHZhciBob3RfYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG90X2FydGljbGVzX2l0ZW0nKVxuICAgIHZhciBwYWdlX3NpemUgPSA4XG4gICAgdHdpa29vXG4gICAgICAuZ2V0UmVjZW50Q29tbWVudHMoe1xuICAgICAgICBlbnZJZDogJ2h0dHBzOi8vdHdpa29vLXNvdXJjZS52ZXJjZWwuYXBwLycsIC8vIOeOr+WigyBJRFxuICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgcGFnZVNpemU6IHBhZ2Vfc2l6ZSwgLy8g6I635Y+W5aSa5bCR5p2h77yM6buY6K6k77yaMTDvvIzmnIDlpKfvvJoxMDBcbiAgICAgICAgaW5jbHVkZVJlcGx5OiBmYWxzZSwgLy8g5piv5ZCm5YyF5ous5pyA5paw5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld19jb21tZW50c19sb2RpbmcnKVxuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQgPSBuZXdfY29tbWVudHNfbG9kaW5nLnBhcmVudEVsZW1lbnRcbiAgICAgICAgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQucmVtb3ZlQ2hpbGQobmV3X2NvbW1lbnRzX2xvZGluZylcbiAgICAgICAgLy8g5o+S5YWl6K+E6K66XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZV9zaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAocmVzW2ldLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfY29udGVudCA9IHJlc1tpXS5jb21tZW50XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX25pY2sgPSByZXNbaV0ubmlja1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c191cmwgPSByZXNbaV0udXJsXG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2F2YXRhciA9IHJlc1tpXS5hdmF0YXJcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdGltZSA9IHJlc1tpXS5yZWxhdGl2ZVRpbWVcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfaWQgPSAnIycgKyByZXNbaV0uaWRcblxuICAgICAgICAgICAgdmFyIGhvdF9hcnRpY2xlc19jaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlc19jaGlsZC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIml0ZW1fdXBcIj48aW1nIHNyYz1cIicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfYXZhdGFyICtcbiAgICAgICAgICAgICAgJ1wiIGNsYXNzPVwiYXZhdGFyXCI+PGRpdiBjbGFzcz1cIm5pY2tfbmFtZVwiPjxzcGFuIGNsYXNzPVwibmlja1wiPicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfbmljayArXG4gICAgICAgICAgICAgICc8L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JyArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c190aW1lICtcbiAgICAgICAgICAgICAgJzwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiaXRlbV9kb3duXCI+PGEgaHJlZj1cIicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfdXJsICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2lkICtcbiAgICAgICAgICAgICAgJ1wiPicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfY29udGVudCArXG4gICAgICAgICAgICAgICc8L2E+PC9kaXY+J1xuICAgICAgICAgICAgaG90X2FydGljbGVzLmFwcGVuZChob3RfYXJ0aWNsZXNfY2hpbGQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICB9KVxuICB9LFxuICAvLyDliIfmjaLor4Torroo6K+E6K6657uE5Lu25a2Y5Zyo5pe2KVxuICBzd2l0Y2hfY29tbWVudDogZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3dpdGNoX2J0bicpKSB7XG4gICAgICB2YXIgc3dpdGNoX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzd2l0Y2hfYnRuJylcbiAgICAgIHZhciBnaXRodWJfY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnaXRodWJfY29tbWVudCcpXG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnQnKVxuXG4gICAgICBzd2l0Y2hfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2hfYnRuLmNsYXNzTGlzdC50b2dnbGUoJ21vdmUnKVxuICAgICAgICBnaXRodWJfY29tbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb250ZW50LWluJylcbiAgICAgICAgdHdpa29vX2NvbW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGVudC1pbicpXG5cbiAgICAgICAgaWYgKGdpdGh1Yl9jb21tZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGdpdGh1Yl9jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFR3aWtvbyDor4Torrrns7vnu59cbiAgICAgICAgICBnaXRodWJfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG59XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICDnvJPmhaLmmL7npLpcbiAgICAgICAg57yT5oWi5Zue5Yiw6aG26YOoXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gbGV0IGdvX3RvcF9vYmplY3QgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ29fdG9wKCk7XG4gICAgICAgIHRoaXMuY2xpY2tfZ29fdG9wKCk7XG4gICAgfSxcbiAgICBnb190b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIOa7muWKqOaYvuekumdvX3RvcOaMiemSrlxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIC8vIOaMgee7reebkeWQrOa7muWKqOeKtuaAgVxuICAgICAgICAgICAgZ2V0U2Nyb2xsKCkudG9wICE9PSAwID8gJChcIiNnb190b3BcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpIDogJChcIiNnb190b3BcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIGNsaWNrX2dvX3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOeCueWHu+WbnuWIsOmhtumDqFxuICAgICAgICAkKFwiI2dvX3RvcFwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbi8vIHNjcm9vbFRvcOWFvOWuueaAp+aWueahiFxuZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xuICAgIHJldHVybiB7XG4gICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdHx8MCxcbiAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDBcbiAgICB9O1xufVxuXG5cbi8vIOWmguaenOS4jeWBmum7mOiupOWvvOWFpe+8jOWwseaMieeFp+S4i+mdouWGme+8jOS4jeimgWRlZmF1bHTor41cbmV4cG9ydCB7XG4gICAgZ29fdG9wX29iamVjdCwgLy/lr7zlh7rlr7nosaFcbiAgICBnZXRTY3JvbGwsIC8v5a+85Ye66YCa55So5Ye95pWwXG59XG5cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH0sXG4gICAgc2VhcmNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGlucHV0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWlucHV0XCIpO1xuXG4gICAgICAgIGlmIChpbnB1dEFyZWEpIHtcbiAgICAgICAgICAgIGlucHV0QXJlYS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEucGxhY2Vob2xkZXIgPSAn6aaW5qyh5pCc57SiaW5nwrfCt8K3JztcbiAgICAgICAgICAgICAgICBnZXRTZWFyY2hGaWxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbmNsaWNrID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlucHV0QXJlYS5vbmtleWRvd24gPSBmdW5jdGlvbigpIHsgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHJldHVybiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBjbGVhclNlYXJjaCgkcmVzdWx0Q29udGVudCkge1xuICAgICAgICAgICAgLy8gY2xlYXIgc2VhcmNoIHJlc3VsdFxuICAgICAgICAgICAgdmFyIGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1zZWFyY2gtY2xvc2VcIik7XG4gICAgICAgICAgICBidG5DbG9zZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9ICfor7fovpPlhaXlhbPplK7or40nO1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5mb2N1cygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIHNlYXJjaEZ1bmMgPSBmdW5jdGlvbihwYXRoLCBzZWFyY2hfaWQsIGNvbnRlbnRfaWQpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBCVE4gPSBcIjxkaXYgaWQ9J2xvY2FsLXNlYXJjaC1jbG9zZSc+5riF56m65pCc57SiPC9kaXY+XCJcbiAgICAgICAgICAgIHZhciAkaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWFyY2hfaWQpO1xuICAgICAgICAgICAgdmFyICRyZXN1bHRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudF9pZCk7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdW1lIGlucHV0XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQucGxhY2Vob2xkZXIgPSAn6L6T5YWl5YWz6ZSu6K+N5Lul5pCc57SiJztcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LmZvY3VzKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgeG1sID0geGhyLnJlc3BvbnNlWE1MO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm9vdCA9IHhtbC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gcm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImVudHJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGl0bGVcIilbMF0uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjb250ZW50XCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1cmxcIilbMF0uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSAnPHVsIGNsYXNzPVxcXCJhcmNoaXZlXFxcIj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXdvcmRzID0gdGhpcy52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKS5zcGxpdCgvW1xcc1xcLV0rLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUudHJpbSgpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacrOWcsOaQnOe0ouS4u+S7o+eggVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50X2luZGV4ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLnRpdGxlIHx8IGRhdGEudGl0bGUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRpdGxlID0gXCJVbnRpdGxlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ19kYXRhX3RpdGxlID0gZGF0YS50aXRsZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfdGl0bGUgPSBvcmlnX2RhdGFfdGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ19kYXRhX2NvbnRlbnQgPSBkYXRhLmNvbnRlbnQudHJpbSgpLnJlcGxhY2UoLzxbXj5dKz4vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfY29udGVudCA9IG9yaWdfZGF0YV9jb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfdXJsID0gZGF0YS51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4X3RpdGxlID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4X2NvbnRlbnQgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3Rfb2NjdXIgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IG1hdGNoIGFydGlsZXMgd2l0aCBub3QgZW1wdHkgY29udGVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YV9jb250ZW50ICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4X3RpdGxlID0gZGF0YV90aXRsZS5pbmRleE9mKGtleXdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfY29udGVudCA9IGRhdGFfY29udGVudC5pbmRleE9mKGtleXdvcmQpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleF90aXRsZSA8IDAgJiYgaW5kZXhfY29udGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleF9jb250ZW50IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleF9jb250ZW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9vY2N1ciA9IGluZGV4X2NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnRfaW5kZXgucHVzaCh7aW5kZXhfY29udGVudDppbmRleF9jb250ZW50LCBrZXl3b3JkX2xlbjprZXl3b3JkX2xlbn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWxleekuue7k+aenFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IOW+heWujOWWhO+8jOW+heWujOWWhFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8bGk+PGEgaHJlZj0nXCIgK2xvY2F0aW9uLnByb3RvY29sK1wiLy9cIitsb2NhdGlvbi5ob3N0K1wiL1wiKyBkYXRhX3VybCArIFwiJyBjbGFzcz0nYXJjaGl2ZS10aXRsZSc+XCIgKyBvcmlnX2RhdGFfdGl0bGUgKyBcIjwvYT5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBvcmlnX2RhdGFfY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0X29jY3VyID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1dCBvdXQgMTAwIGNoYXJhY3RlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGZpcnN0X29jY3VyIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kID0gZmlyc3Rfb2NjdXIgKyAzMDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gNDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZCA+IGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gY29udGVudC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaF9jb250ZW50ID0gY29udGVudC5zdWJzdHIoc3RhcnQsIDEwMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IGFsbCBrZXl3b3Jkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ1MgPSBuZXcgUmVnRXhwKGtleXdvcmQsIFwiZ2lcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hfY29udGVudCA9IG1hdGNoX2NvbnRlbnQucmVwbGFjZShyZWdTLCBcIjxlbSBjbGFzcz1cXFwic2VhcmNoLWtleXdvcmRcXFwiPlwiICsga2V5d29yZCArIFwiPC9lbT5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8cCBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCIgKyBtYXRjaF9jb250ZW50ICsgXCIuLi48L3A+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8L2xpPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPC91bD5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZignPGxpPicpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IEJUTiArIFwiPGRpdiBjbGFzcz0nbG9jYWwtc2VhcmNoLWVtcHR5Jz7msqHmnInmib7liLDkvaDmiYDopoHmkJzntKLnmoTlhoXlrrnigKbigKY8L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gQlROICsgc3RyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdmFyIGdldFNlYXJjaEZpbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBwYXRoID0gXCIvc2VhcmNoLnhtbFwiO1xuICAgICAgICAgICAgc2VhcmNoRnVuYyhwYXRoLCAnbG9jYWwtc2VhcmNoLWlucHV0JywgJ2xvY2FsLXNlYXJjaC1yZXN1bHQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIOWFqOWxgOaMiemSruiuvue9rmpz5piv5ZCm5bGV56S65pCc57Si5qGGXG4gICAgICAgIHZhciBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoX2J0bicpO1xuICAgICAgICBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWwtc2VhcmNoLWlucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdmFyIHNlYXJjaF9jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfY2xvc2UnKTtcbiAgICAgICAgc2VhcmNoX2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbn1cblxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIG5lZWRTaGFyZUJ1dHRvblxuICAtIFZlcnNpb24gMS4wLjBcbiAgLSBDb3B5cmlnaHQgMjAxNSBEem1pdHJ5IFZhc2lsZXVza2lcblx0LSBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQpXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNoYXJlKCk7XG4gICAgfSxcbiAgICBzaGFyZTogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBmaW5kIGNsb3Nlc3RcbiAgICBmdW5jdGlvbiBjbG9zZXN0KGVsZW0sIHBhcmVudCkge1xuICAgICAgaWYgKHR5cGVvZihwYXJlbnQpID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaGVzU2VsZWN0b3IgPSBlbGVtLm1hdGNoZXMgfHwgZWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbS5tc01hdGNoZXNTZWxlY3RvcjtcbiAgXG4gICAgICAgICAgICAgIGlmICghIW1hdGNoZXNTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzU2VsZWN0b3IuYmluZChlbGVtKShwYXJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgaWYgKGVsZW0gPT0gcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyBzaGFyZSBidXR0b24gY2xhc3NcbiAgICAgIHdpbmRvdy5uZWVkU2hhcmVCdXR0b24gPSBmdW5jdGlvbihlbGVtLCBvcHRpb25zKSB7XG4gICAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnQgcmVmZXJlbmNlXG4gICAgICAgICAgdmFyIHJvb3QgPSB0aGlzO1xuICAgICAgICAgIHJvb3QuZWxlbSA9IGVsZW0gfHwgJ25lZWQtc2hhcmUtYnV0dG9uJztcbiAgXG4gICAgICAgICAgLyogSGVscGVyc1xuICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBcbiAgICAgIC8vIGdldCB0aXRsZSBmcm9tIGh0bWxcbiAgICAgIHJvb3QuZ2V0VGl0bGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJvZzp0aXRsZVwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInR3aXR0ZXI6dGl0bGVcIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnRpdGxlO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gZ2V0IGltYWdlIGZyb20gaHRtbFxuICAgICAgICByb290LmdldEltYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgLy8gY2hlY2sgcXVlcnlTZWxlY3RvciBleGlzdGFuY2UgZm9yIG9sZCBicm93c2Vyc1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjppbWFnZVwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gZ2V0IGRlc2NyaXB0aW9uIGZyb20gaHRtbFxuICAgICAgICByb290LmdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgLy8gY2hlY2sgcXVlcnlTZWxlY3RvciBleGlzdGFuY2UgZm9yIG9sZCBicm93c2Vyc1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJykubmFtZWRJdGVtKCdkZXNjcmlwdGlvbicpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgXG4gICAgICAgIC8vIHNoYXJlIHVybHMgZm9yIGFsbCBuZXR3b3Jrc1xuICAgICAgICByb290LnNoYXJlID0ge1xuICAgICAgICAgICAgJ3dlaWJvJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly92LnQuc2luYS5jb20uY24vc2hhcmUvc2hhcmUucGhwP3RpdGxlPSdcbiAgICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICAgKyBcIiZ1cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICAgKyBcIiZwaWM9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd3ZWNoYXQnOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciBpbWdTcmMgPSAnaHR0cHM6Ly9hcGkucXJzZXJ2ZXIuY29tL3YxL2NyZWF0ZS1xci1jb2RlLz9zaXplPTE1MHgxNTAmZGF0YT0nK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgdmFyIGRyb3Bkb3duRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24nKTtcbiAgICAgICAgICAgICAgdmFyIGltZyA9IGRyb3Bkb3duRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpWzBdO1xuICAgICAgICAgICAgICB2YXIgbG9hZGVyID0gZHJvcGRvd25FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZWVkLXNoYXJlLWxvYWRlcicpWzBdO1xuICBcbiAgICAgICAgICAgICAgICBpZiAoaW1nKSB7XG4gICAgICAgICAgICBpbWcucmVtb3ZlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmKGxvYWRlcikge1xuICAgICAgICAgICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxvYWRlci5jbGFzc05hbWUgPSAnbmVlZC1zaGFyZS1sb2FkZXInO1xuICAgICAgICAgICAgbG9hZGVyLmlubmVyVGV4dCA9ICdsb2FkaW5nLi4uJztcbiAgICAgICAgICAgIGxvYWRlci50aXRsZSA9ICdsb2FkaW5nIHFyY29kZS4uLic7XG4gIFxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IGltZ1NyYztcbiAgICAgICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdDcmVhdGUgcXJjb2RlIGZhaWxlZCEnO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsJ25lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKTtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKGxvYWRlci5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQobG9hZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICdkb3ViYW4nOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vd3d3LmRvdWJhbi5jb20vc2hhcmUvc2VydmljZT9uYW1lPSdcbiAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICArIFwiJmhyZWY9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICsgXCImaW1hZ2U9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdxcXpvbmUnOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly9zbnMucXpvbmUucXEuY29tL2NnaS1iaW4vcXpzaGFyZS9jZ2lfcXpzaGFyZV9vbmVrZXk/dGl0bGU9J1xuICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICsgXCImdXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICArIFwiJnBpY3M9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSlcbiAgICAgICAgICAgICAgKyBcIiZkZXNjPVwiKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3JlbnJlbic6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3dpZGdldC5yZW5yZW4uY29tL2RpYWxvZy9zaGFyZT90aXRsZT0nXG4gICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgKyBcIiZyZXNvdXJjZVVybD1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgKyBcIiZwaWM9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSlcbiAgICAgICAgICAgICAgKyBcIiZkZXNjcmlwdGlvbj1cIisgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICB9LFxuICBcbiAgICAgICAgICAgICdtYWlsdG8nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnbWFpbHRvOj9zdWJqZWN0PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKSArICcmYm9keT1UaG91Z2h0IHlvdSBtaWdodCBlbmpveSByZWFkaW5nIHRoaXM6ICcgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCkgKyAnIC0gJyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICBcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndHdpdHRlcicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0nO1xuICAgICAgICAgICAgICAgIHVybCArPSBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKSArIFwiJnVybD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwaW50ZXJlc3QnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2Jvb2ttYXJrbGV0Lz9pc192aWRlbz1mYWxzZSc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmbWVkaWE9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnVybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdmYWNlYm9vaycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZmFjZWJvb2suY29tL3NoYXJlLnBocD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdnb29nbGVwbHVzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncmVkZGl0JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5yZWRkaXQuY29tL3N1Ym1pdD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2RlbGljaW91cycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdkZWwuaWNpby51cy9wb3N0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmbm90ZXM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ3RhcGl0dXJlJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0YXBpdHVyZS5jb20vYm9va21hcmtsZXQvaW1hZ2U/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdpbWdfc3JjPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmcGFnZV91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmcGFnZV90aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdzdHVtYmxldXBvbicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2xpbmtlZGluJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnNvdXJjZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5zb3VyY2UpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ3NsYXNoZG90JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdzbGFzaGRvdC5vcmcvYm9va21hcmsucGw/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAndGVjaG5vcmF0aScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndGVjaG5vcmF0aS5jb20vZmF2ZXM/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdhZGQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAncG9zdGVyb3VzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3Bvc3Rlcm91cy5jb20vc2hhcmU/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ2xpbmt0bz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3R1bWJscicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cudHVtYmxyLmNvbS9zaGFyZT92PTMnO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICdnb29nbGVib29rbWFya3MnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5nb29nbGUuY29tL2Jvb2ttYXJrcy9tYXJrP29wPWVkaXQnO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZia21rPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmYW5ub3RhdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vICduZXdzdmluZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lm5ld3N2aW5lLmNvbS9fdG9vbHMvc2VlZCZzYXZlPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAndT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZoPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gJ3BpbmdmbScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGluZy5mbS9yZWYvPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnbGluaz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmJvZHk9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAnZXZlcm5vdGUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmV2ZXJub3RlLmNvbS9jbGlwLmFjdGlvbj8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZyaWVuZGZlZWQnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmZyaWVuZGZlZWQuY29tL3NoYXJlPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndmtvbnRha3RlJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3Zrb250YWt0ZS5ydS9zaGFyZS5waHA/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICB1cmwgKz0gJyZkZXNjcmlwdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgdXJsICs9ICcmaW1hZ2U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgIHVybCArPSAnJm5vcGFyc2U9dHJ1ZSc7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnb2Rub2tsYXNzbmlraScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cub2Rub2tsYXNzbmlraS5ydS9kaz9zdC5jbWQ9YWRkU2hhcmUmc3Qucz0xJztcbiAgICAgICAgICB1cmwgKz0gJyZzdC5jb21tZW50cz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgdXJsICs9ICcmc3QuX3N1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICdtYWlscnUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ2Nvbm5lY3QubWFpbC5ydS9zaGFyZT8nO1xuICAgICAgICAvLyAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgIC8vICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvLyAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy8gICB1cmwgKz0gJyZpbWFnZXVybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfVxuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gb3BlbiBzaGFyZSBsaW5rIGluIGEgcG9wdXBcbiAgICAgICAgcm9vdC5wb3B1cCA9IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICB2YXIgbGVmdCwgdG9wOyBcbiAgXG4gICAgICAgIHZhciBwb3B1cFdpZHRoID0gNjAwLFxuICAgICAgICAgICAgcG9wdXBIZWlnaHQgPSA1MDA7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gY2FjdWxhdGUgYnJvd3NlciB3aW5kb3cgd2lkdGhcbiAgICAgICAgLy8gaWYgd2luZG93IHdpZHRoIGlzIHRvbyBuYXJyb3csIHVzZSBzY3JlZW4gd2lkdGg7XG4gICAgICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiBzY3JlZW4ud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6IHNjcmVlbi5oZWlnaHQ7XG4gICAgICAgIGlmICh3aWR0aCA8IDYwMCAmJiBoZWlnaHQgPCA1MDApIHtcbiAgICAgICAgICBsZWZ0ID0gKHNjcmVlbi53aWR0aCAvIDIpIC0gKHBvcHVwV2lkdGggLyAyKTtcbiAgICAgICAgICB0b3AgPSAoc2NyZWVuLmhlaWdodCAvIDIpIC0gKHBvcHVwSGVpZ2h0IC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc2V0IGxlZnQgYW5kIHRvcCBwb3NpdGlvblxuICAgICAgICAgICAgICB2YXIgZHVhbFNjcmVlbkxlZnQgPSB3aW5kb3cuc2NyZWVuTGVmdCAhPSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHNjcmVlbi5sZWZ0LFxuICAgICAgICAgICAgZHVhbFNjcmVlblRvcCA9IHdpbmRvdy5zY3JlZW5Ub3AgIT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlblRvcCA6IHNjcmVlbi50b3A7XG4gICAgICAgICAgLy8gY2FsY3VsYXRlIHRvcCBhbmQgbGVmdCBwb3NpdGlvblxuICAgICAgICAgIGxlZnQgPSAoKHdpZHRoIC8gMikgLSAocG9wdXBXaWR0aCAvIDIpKSArIGR1YWxTY3JlZW5MZWZ0O1xuICAgICAgICAgIHRvcCA9ICgoaGVpZ2h0IC8gMikgLSAocG9wdXBIZWlnaHQgLyAyKSkgKyBkdWFsU2NyZWVuVG9wO1xuICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICB2YXIgc2hhcmVXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsJ3RhcmdldFdpbmRvdycsJ3Rvb2xiYXI9bm8sbG9jYXRpb249bm8sc3RhdHVzPW5vLG1lbnViYXI9bm8sc2Nyb2xsYmFycz15ZXMscmVzaXphYmxlPXllcyx3aWR0aD0nICsgcG9wdXBXaWR0aCArICcsIGhlaWdodD0nICsgcG9wdXBIZWlnaHQgKyAnLCB0b3A9JyArIHRvcCArICcsIGxlZnQ9JyArIGxlZnQpO1xuICAgICAgICAgICAgLy8gUHV0cyBmb2N1cyBvbiB0aGUgbmV3V2luZG93XG4gICAgICAgICAgaWYgKHdpbmRvdy5mb2N1cykge1xuICAgICAgICAgICAgICBzaGFyZVdpbmRvdy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgXG4gICAgICAgICAgLyogU2V0IG9wdGlvbnNcbiAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgXG4gICAgICAgICAgLy8gY3JlYXRlIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgICAgIHJvb3Qub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgaWNvblN0eWxlOiAnZGVmYXVsdCcsIC8vIGRlZmF1bHQgb3IgYm94XG4gICAgICAgICAgICAgIGJveEZvcm06ICdob3Jpem9udGFsJywgLy8gaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbUNlbnRlcicsIC8vIHRvcCAvIG1pZGRsZSAvIGJvdHRvbSArIExlZnQgLyBDZW50ZXIgLyBSaWdodFxuICAgICAgICAgICAgICBwcm90b2NvbDogWydodHRwJywgJ2h0dHBzJ10uaW5kZXhPZih3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnOicpWzBdKSA9PT0gLTEgPyAnaHR0cHM6Ly8nIDogJy8vJyxcbiAgICAgICAgICAgICAgbmV0d29ya3M6ICdUd2l0dGVyLEZhY2Vib29rLFJlZGRpdCxMaW5rZWRpbixUdW1ibHIsUGludGVyZXN0LFdlaWJvLFdlY2hhdCxEb3ViYW4sUVFab25lLE1haWx0bycsXG4gICAgICAgICAgICAgIGljb25zOiBbJ2ZhIGZhLXR3aXR0ZXInLCdmYSBmYS1mYWNlYm9vaycsJ2ZhIGZhLXJlZGRpdC1hbGllbicsJ2ZhIGZhLWxpbmtlZGluJywnZmEgZmEtdHVtYmxyJywnZmEgZmEtcGludGVyZXN0JywnZmEgZmEtd2VpYm8nLCdmYSBmYS13ZWl4aW4nLCc5JywnZmEgZmEtcXEnLCdmYSBmYS1lbnZlbG9wZS1vJ11cbiAgICAgICAgICB9O1xuICBcbiAgICAgIC8vIGludGVncmF0ZSBjdXN0b20gb3B0aW9uc1xuICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgIHJvb3Qub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICB9XG4gICAgICAvLyBjb252ZXJ0IG5ldHdvcmtzIHN0cmluZyBpbnRvIGFycmF5XG4gICAgICByb290Lm9wdGlvbnMubmV0d29ya3MgPSByb290Lm9wdGlvbnMubmV0d29ya3MudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICBcbiAgICAgIGZ1bmN0aW9uIGdldE9wdGlvbnMoZWwpIHtcbiAgICAgICAgICAvLyBpbnRlZ3JhdGUgZGF0YSBhdHRyaWJ1dGUgb3B0aW9uc1xuICAgICAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBpIGluIHJvb3Qub3B0aW9ucykge1xuICAgICAgICAgICAgcmV0W2ldID0gcm9vdC5vcHRpb25zW2ldO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgLy8gdGhlc2UgYXR0cnMgbXVzdCBnZXQgZHluYW1pY2FsbHkuXG4gICAgICAgICAgcmV0LnVybCA9IHJvb3Qub3B0aW9ucy51cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgcmV0LnRpdGxlID0gcm9vdC5vcHRpb25zLnRpdGxlIHx8IHJvb3QuZ2V0VGl0bGUoKTtcbiAgICAgICAgICByZXQuaW1hZ2UgPSByb290Lm9wdGlvbnMuaW1hZ2UgfHwgcm9vdC5nZXRJbWFnZSgpO1xuICAgICAgICAgIHJldC5kZXNjcmlwdGlvbiA9IHJvb3Qub3B0aW9ucy5kZXNjcmlwdGlvbiB8fCByb290LmdldERlc2NyaXB0aW9uKCk7XG4gIFxuICAgICAgICAgIGZvciAodmFyIG9wdGlvbiBpbiBlbC5kYXRhc2V0KSB7XG4gICAgICAgICAgICAgIC8vIHJlcGxhY2Ugb25seSAnc2hhcmUtJyBwcmVmaXhlZCBkYXRhLWF0dHJpYnV0ZXNcbiAgICAgICAgICAgIGlmIChvcHRpb24ubWF0Y2goL3NoYXJlLykpIHtcbiAgICAgICAgICAgICAgdmFyIG5ld19vcHRpb24gPSBvcHRpb24ucmVwbGFjZSgvc2hhcmUvLCAnJyk7XG4gICAgICAgICAgICAgIGlmICghbmV3X29wdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5ld19vcHRpb24gPSBuZXdfb3B0aW9uLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmV3X29wdGlvbi5zbGljZSgxKTtcbiAgICAgICAgICAgICAgdmFyIHZhbCA9IGVsLmRhdGFzZXRbb3B0aW9uXTtcbiAgICAgICAgICAgICAgaWYgKG5ld19vcHRpb24gPT09ICduZXR3b3JrcycpIHtcbiAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3X29wdGlvbiA9PT0gJ3VybCcgJiYgdmFsICYmIHZhbFswXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAvLyBmaXggcmVsYXRpdmUgdXJsIHByb2JsZW0uXG4gICAgICAgICAgICAgICAgICB2YWwgPSBsb2NhdGlvbi5vcmlnaW4gKyB2YWw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0W25ld19vcHRpb25dID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICBcbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duKGVsKSB7XG4gICAgICAgICAgLy8gY3JlYXRlIGRyb3Bkb3duXG4gICAgICAgICAgdmFyIGRyb3Bkb3duRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgPSAnbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24nO1xuICAgICAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24nKSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgXG4gICAgICAgICAgLy8gc2V0IGRyb3Bkb3duIHJvdyBsZW5ndGhcbiAgICAgICAgICBpZiAobXlvcHRpb25zLmljb25TdHlsZSA9PSAnYm94JyAmJiBteW9wdGlvbnMuYm94Rm9ybSA9PSAnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm94LWhvcml6b250YWwnO1xuICAgICAgICAgIGVsc2UgaWYgKG15b3B0aW9ucy5pY29uU3R5bGUgPT0gJ2JveCcgJiYgbXlvcHRpb25zLmJveEZvcm0gPT0gJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3gtdmVydGljYWwnO1xuICBcbiAgICAgICAgICAvLyBzZXQgZHJvcGRvd24gcG9zaXRpb24gXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChteW9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtbGVmdCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAndG9wUmlnaHQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tdG9wLXJpZ2h0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICd0b3BDZW50ZXInOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tdG9wLWNlbnRlcic7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSBkcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnbWlkZGxlTGVmdCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1taWRkbGUtbGVmdCc7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5Ub3AgPSAtIGRyb3Bkb3duRWwub2Zmc2V0SGVpZ2h0IC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnbWlkZGxlUmlnaHQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tbWlkZGxlLXJpZ2h0JztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpblRvcCA9IC0gZHJvcGRvd25FbC5vZmZzZXRIZWlnaHQgLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1sZWZ0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdib3R0b21SaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tcmlnaHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbUNlbnRlcic6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWNlbnRlcic7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSBkcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sMSk7XG4gIFxuICBcbiAgICAgICAgICAvLyBmaWxsIGZyb3Bkb3duIHdpdGggYnV0dG9uc1xuICAgICAgICAgIHZhciBpY29uQ2xhc3MgPSBteW9wdGlvbnMuaWNvblN0eWxlID09ICdkZWZhdWx0JyA/ICduZWVkLXNoYXJlLWJ1dHRvbl9saW5rIG5lZWQtc2hhcmUtYnV0dG9uXycgOiAnbmVlZC1zaGFyZS1idXR0b25fbGluay0nICsgbXlvcHRpb25zLmljb25TdHlsZSArICcgbmVlZC1zaGFyZS1idXR0b25fbGluayBuZWVkLXNoYXJlLWJ1dHRvbl8nO1xuICAgICAgICAgIGxldCBmbGFnID0gMDtcbiAgICAgICAgICBmb3IgKHZhciBuZXR3b3JrIGluIG15b3B0aW9ucy5uZXR3b3Jrcykge1xuICAgICAgICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgIG5ldHdvcmsgPSBteW9wdGlvbnMubmV0d29ya3NbbmV0d29ya107XG4gICAgICAgICAgICAgIGxpbmsuY2xhc3NOYW1lID0gaWNvbkNsYXNzICsgbmV0d29yaztcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobXlvcHRpb25zLmljb25zLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGxpbmsuY2xhc3NOYW1lICs9ICcgJytteW9wdGlvbnMuaWNvbnNbZmxhZ107XG4gICAgICAgICAgICAgIGxpbmsuZGF0YXNldC5uZXR3b3JrID0gbmV0d29yaztcbiAgICAgICAgICAgICAgbGluay50aXRsZSA9IG5ldHdvcms7XG4gICAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgICAgICAgIGZsYWcrKztcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGRyb3Bkb3duRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICBpZiAoY2xvc2VzdChldmVudC50YXJnZXQsICcubmVlZC1zaGFyZS1idXR0b25fbGluaycpKSB7XG4gICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICBcbiAgICAgICAgICAgICAgICAgcm9vdC5zaGFyZVtldmVudC50YXJnZXQuZGF0YXNldC5uZXR3b3JrXShlbCk7XG4gICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gIFxuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRyb3Bkb3duRWwpO1xuICAgICAgfVxuICBcbiAgICAgIHZhciB0YXJnZXRFbCA9IHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSkgOiBlbGVtO1xuICAgICAgIGlmICh0YXJnZXRFbCAmJiB0YXJnZXRFbC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWQtc2hhcmUtcGFuZWwnKSkge1xuICAgICAgICBjcmVhdGVEcm9wZG93bih0YXJnZXRFbCk7XG4gICAgICAgIC8vIHRhcmdldEVsLmNsYXNzTGlzdC5hZGQoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICAgICAgfSBlbHNlIFxuICAgICAgICAvLyBjbG9zZSBvbiBjbGljayBvdXRzaWRlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICB2YXIgb3BlbmVkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gIFxuICAgICAgICAgIGlmICghY2xvc2VzdChldmVudC50YXJnZXQsICcubmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJykpIHtcbiAgICAgICAgICAgIGlmIChvcGVuZWRFbCkge1xuICAgICAgICAgICAgICAgIG9wZW5lZEVsLmNsYXNzTGlzdC5yZW1vdmUoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICBcbiAgICAgICAgICAgICAgICAvLyBoaWRlIHdlY2hhdCBjb2RlIGltYWdlIHdoZW4gY2xvc2UgdGhlIGRyb3Bkb3duLlxuICAgICAgICAgICAgICAgIGlmIChvcGVuZWRFbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lZEVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBjbG9zZXN0KGV2ZW50LnRhcmdldCwgcm9vdC5lbGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVEcm9wZG93bihlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEpO1xuICBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgXG4gICAgfTtcbiAgXG4gICAgbmV3IG5lZWRTaGFyZUJ1dHRvbignLm5lZWQtc2hhcmUtYnV0dG9uJyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudG9jX2J0bigpO1xuICAgIH0sXG4gICAgdG9jX2J0bjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0b2NfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvY19jb250YWluZXInKTtcbiAgICAgICAgbGV0IHRvY19idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9jX2J0bicpO1xuICAgICAgICAkKHRvY19idG4pLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAodG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpe1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuXG5cblxuIiwiLypcbiAqIEBBdXRob3I6IHd6dGxpbmsxMDEzXG4gKiBARGF0ZTogMjAyMi0wNy0wNyAxODo0ODoxOFxuICogQExhc3RFZGl0VGltZTogMjAyMi0wNy0xMCAwMDoyNjoxMVxuICogQERlc2NyaXB0aW9uOlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLndlYl9pbmZvX3J1bnRpbWUoKVxuICB9LFxuICAvLyBUT0RPOiAhISHmiJHnnYDlrp7kuI3nn6XpgZPov5nmmK/kuKrku4DkuYjnp5hcbiAgd2ViX2luZm9fcnVudGltZTogZnVuY3Rpb24gKCkge1xuICAgIC8vIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2ViaW5mb19ydW50aW1lX2NvdW50XzEnKSkge1xuICAgIC8vICAgbGV0IEJpcnRoRGF5ID0gbmV3IERhdGUobmV3IERhdGUoJzIwMjAvMDEvMDQnKSlcbiAgICAvLyAgIGxldCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICAvLyAgIGxldCB0aW1lb2xkID0gdG9kYXkuZ2V0VGltZSgpIC0gQmlydGhEYXkuZ2V0VGltZSgpXG4gICAgLy8gICBsZXQgZGF5c29sZCA9IE1hdGguZmxvb3IodGltZW9sZCAvICgyNCAqIDYwICogNjAgKiAxMDAwKSlcbiAgICAvLyAgIGxldCBvYmogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2ViaW5mb19ydW50aW1lX2NvdW50XzEnKVxuICAgIC8vICAgb2JqLmlubmVySFRNTCA9IGRheXNvbGQgKyAnIOWkqSdcbiAgICAvLyAgIGNvbnNvbGUubG9nKG9iailcbiAgICAvLyB9XG4gIH0sXG59XG4iLCIvKlxuICBIaWdobGlnaHQuanMgMTAuNy4xICg0MjFiMjNiMClcbiAgTGljZW5zZTogQlNELTMtQ2xhdXNlXG4gIENvcHlyaWdodCAoYykgMjAwNi0yMDIxLCBJdmFuIFNhZ2FsYWV2XG4qL1xudmFyIGhsanMgPSAoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCdcbiAgZnVuY3Rpb24gZSh0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHQgaW5zdGFuY2VvZiBNYXBcbiAgICAgICAgPyAodC5jbGVhciA9XG4gICAgICAgICAgICB0LmRlbGV0ZSA9XG4gICAgICAgICAgICB0LnNldCA9XG4gICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignbWFwIGlzIHJlYWQtb25seScpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgIDogdCBpbnN0YW5jZW9mIFNldCAmJlxuICAgICAgICAgICh0LmFkZCA9XG4gICAgICAgICAgICB0LmNsZWFyID1cbiAgICAgICAgICAgIHQuZGVsZXRlID1cbiAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdzZXQgaXMgcmVhZC1vbmx5JylcbiAgICAgICAgICAgICAgfSksXG4gICAgICBPYmplY3QuZnJlZXplKHQpLFxuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModCkuZm9yRWFjaChuID0+IHtcbiAgICAgICAgdmFyIGkgPSB0W25dXG4gICAgICAgICdvYmplY3QnICE9IHR5cGVvZiBpIHx8IE9iamVjdC5pc0Zyb3plbihpKSB8fCBlKGkpXG4gICAgICB9KSxcbiAgICAgIHRcbiAgICApXG4gIH1cbiAgdmFyIHQgPSBlLFxuICAgIG4gPSBlXG4gIHQuZGVmYXVsdCA9IG5cbiAgY2xhc3MgaSB7XG4gICAgY29uc3RydWN0b3IoZSkge1xuICAgICAgdm9pZCAwID09PSBlLmRhdGEgJiYgKGUuZGF0YSA9IHt9KSxcbiAgICAgICAgKHRoaXMuZGF0YSA9IGUuZGF0YSksXG4gICAgICAgICh0aGlzLmlzTWF0Y2hJZ25vcmVkID0gITEpXG4gICAgfVxuICAgIGlnbm9yZU1hdGNoKCkge1xuICAgICAgdGhpcy5pc01hdGNoSWdub3JlZCA9ICEwXG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHMoZSkge1xuICAgIHJldHVybiBlXG4gICAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgICAgLnJlcGxhY2UoLycvZywgJyYjeDI3OycpXG4gIH1cbiAgZnVuY3Rpb24gYShlLCAuLi50KSB7XG4gICAgY29uc3QgbiA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICBmb3IgKGNvbnN0IHQgaW4gZSkgblt0XSA9IGVbdF1cbiAgICByZXR1cm4gKFxuICAgICAgdC5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IHQgaW4gZSkgblt0XSA9IGVbdF1cbiAgICAgIH0pLFxuICAgICAgblxuICAgIClcbiAgfVxuICBjb25zdCByID0gZSA9PiAhIWUua2luZFxuICBjbGFzcyBsIHtcbiAgICBjb25zdHJ1Y3RvcihlLCB0KSB7XG4gICAgICA7KHRoaXMuYnVmZmVyID0gJycpLCAodGhpcy5jbGFzc1ByZWZpeCA9IHQuY2xhc3NQcmVmaXgpLCBlLndhbGsodGhpcylcbiAgICB9XG4gICAgYWRkVGV4dChlKSB7XG4gICAgICB0aGlzLmJ1ZmZlciArPSBzKGUpXG4gICAgfVxuICAgIG9wZW5Ob2RlKGUpIHtcbiAgICAgIGlmICghcihlKSkgcmV0dXJuXG4gICAgICBsZXQgdCA9IGUua2luZFxuICAgICAgZS5zdWJsYW5ndWFnZSB8fCAodCA9IGAke3RoaXMuY2xhc3NQcmVmaXh9JHt0fWApLCB0aGlzLnNwYW4odClcbiAgICB9XG4gICAgY2xvc2VOb2RlKGUpIHtcbiAgICAgIHIoZSkgJiYgKHRoaXMuYnVmZmVyICs9ICc8L3NwYW4+JylcbiAgICB9XG4gICAgdmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWZmZXJcbiAgICB9XG4gICAgc3BhbihlKSB7XG4gICAgICB0aGlzLmJ1ZmZlciArPSBgPHNwYW4gY2xhc3M9XCIke2V9XCI+YFxuICAgIH1cbiAgfVxuICBjbGFzcyBvIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIDsodGhpcy5yb290Tm9kZSA9IHtcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfSksXG4gICAgICAgICh0aGlzLnN0YWNrID0gW3RoaXMucm9vdE5vZGVdKVxuICAgIH1cbiAgICBnZXQgdG9wKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIH1cbiAgICBnZXQgcm9vdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvb3ROb2RlXG4gICAgfVxuICAgIGFkZChlKSB7XG4gICAgICB0aGlzLnRvcC5jaGlsZHJlbi5wdXNoKGUpXG4gICAgfVxuICAgIG9wZW5Ob2RlKGUpIHtcbiAgICAgIGNvbnN0IHQgPSB7IGtpbmQ6IGUsIGNoaWxkcmVuOiBbXSB9XG4gICAgICB0aGlzLmFkZCh0KSwgdGhpcy5zdGFjay5wdXNoKHQpXG4gICAgfVxuICAgIGNsb3NlTm9kZSgpIHtcbiAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA+IDEpIHJldHVybiB0aGlzLnN0YWNrLnBvcCgpXG4gICAgfVxuICAgIGNsb3NlQWxsTm9kZXMoKSB7XG4gICAgICBmb3IgKDsgdGhpcy5jbG9zZU5vZGUoKTsgKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucm9vdE5vZGUsIG51bGwsIDQpXG4gICAgfVxuICAgIHdhbGsoZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuX3dhbGsoZSwgdGhpcy5yb290Tm9kZSlcbiAgICB9XG4gICAgc3RhdGljIF93YWxrKGUsIHQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICdzdHJpbmcnID09IHR5cGVvZiB0XG4gICAgICAgICAgPyBlLmFkZFRleHQodClcbiAgICAgICAgICA6IHQuY2hpbGRyZW4gJiZcbiAgICAgICAgICAgIChlLm9wZW5Ob2RlKHQpLFxuICAgICAgICAgICAgdC5jaGlsZHJlbi5mb3JFYWNoKHQgPT4gdGhpcy5fd2FsayhlLCB0KSksXG4gICAgICAgICAgICBlLmNsb3NlTm9kZSh0KSksXG4gICAgICAgIGVcbiAgICAgIClcbiAgICB9XG4gICAgc3RhdGljIF9jb2xsYXBzZShlKSB7XG4gICAgICAnc3RyaW5nJyAhPSB0eXBlb2YgZSAmJlxuICAgICAgICBlLmNoaWxkcmVuICYmXG4gICAgICAgIChlLmNoaWxkcmVuLmV2ZXJ5KGUgPT4gJ3N0cmluZycgPT0gdHlwZW9mIGUpXG4gICAgICAgICAgPyAoZS5jaGlsZHJlbiA9IFtlLmNoaWxkcmVuLmpvaW4oJycpXSlcbiAgICAgICAgICA6IGUuY2hpbGRyZW4uZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgICAgby5fY29sbGFwc2UoZSlcbiAgICAgICAgICAgIH0pKVxuICAgIH1cbiAgfVxuICBjbGFzcyBjIGV4dGVuZHMgbyB7XG4gICAgY29uc3RydWN0b3IoZSkge1xuICAgICAgc3VwZXIoKSwgKHRoaXMub3B0aW9ucyA9IGUpXG4gICAgfVxuICAgIGFkZEtleXdvcmQoZSwgdCkge1xuICAgICAgJycgIT09IGUgJiYgKHRoaXMub3Blbk5vZGUodCksIHRoaXMuYWRkVGV4dChlKSwgdGhpcy5jbG9zZU5vZGUoKSlcbiAgICB9XG4gICAgYWRkVGV4dChlKSB7XG4gICAgICAnJyAhPT0gZSAmJiB0aGlzLmFkZChlKVxuICAgIH1cbiAgICBhZGRTdWJsYW5ndWFnZShlLCB0KSB7XG4gICAgICBjb25zdCBuID0gZS5yb290XG4gICAgICA7KG4ua2luZCA9IHQpLCAobi5zdWJsYW5ndWFnZSA9ICEwKSwgdGhpcy5hZGQobilcbiAgICB9XG4gICAgdG9IVE1MKCkge1xuICAgICAgcmV0dXJuIG5ldyBsKHRoaXMsIHRoaXMub3B0aW9ucykudmFsdWUoKVxuICAgIH1cbiAgICBmaW5hbGl6ZSgpIHtcbiAgICAgIHJldHVybiAhMFxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnKGUpIHtcbiAgICByZXR1cm4gZSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgZSA/IGUgOiBlLnNvdXJjZSkgOiBudWxsXG4gIH1cbiAgY29uc3QgdSA9IC9cXFsoPzpbXlxcXFxcXF1dfFxcXFwuKSpcXF18XFwoXFw/P3xcXFxcKFsxLTldWzAtOV0qKXxcXFxcLi8sXG4gICAgaCA9ICdbYS16QS1aXVxcXFx3KicsXG4gICAgZCA9ICdbYS16QS1aX11cXFxcdyonLFxuICAgIGYgPSAnXFxcXGJcXFxcZCsoXFxcXC5cXFxcZCspPycsXG4gICAgcCA9XG4gICAgICAnKC0/KShcXFxcYjBbeFhdW2EtZkEtRjAtOV0rfChcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKik/fFxcXFwuXFxcXGQrKShbZUVdWy0rXT9cXFxcZCspPyknLFxuICAgIG0gPSAnXFxcXGIoMGJbMDFdKyknLFxuICAgIGIgPSB7XG4gICAgICBiZWdpbjogJ1xcXFxcXFxcW1xcXFxzXFxcXFNdJyxcbiAgICAgIHJlbGV2YW5jZTogMCxcbiAgICB9LFxuICAgIEUgPSB7XG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgYmVnaW46IFwiJ1wiLFxuICAgICAgZW5kOiBcIidcIixcbiAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICBjb250YWluczogW2JdLFxuICAgIH0sXG4gICAgeCA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICBiZWdpbjogJ1wiJyxcbiAgICAgIGVuZDogJ1wiJyxcbiAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICBjb250YWluczogW2JdLFxuICAgIH0sXG4gICAgdiA9IHtcbiAgICAgIGJlZ2luOlxuICAgICAgICAvXFxiKGF8YW58dGhlfGFyZXxJJ218aXNuJ3R8ZG9uJ3R8ZG9lc24ndHx3b24ndHxidXR8anVzdHxzaG91bGR8cHJldHR5fHNpbXBseXxlbm91Z2h8Z29ubmF8Z29pbmd8d3RmfHNvfHN1Y2h8d2lsbHx5b3V8eW91cnx0aGV5fGxpa2V8bW9yZSlcXGIvLFxuICAgIH0sXG4gICAgdyA9IChlLCB0LCBuID0ge30pID0+IHtcbiAgICAgIGNvbnN0IGkgPSBhKHsgY2xhc3NOYW1lOiAnY29tbWVudCcsIGJlZ2luOiBlLCBlbmQ6IHQsIGNvbnRhaW5zOiBbXSB9LCBuKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgaS5jb250YWlucy5wdXNoKHYpLFxuICAgICAgICBpLmNvbnRhaW5zLnB1c2goe1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICAgICAgYmVnaW46ICcoPzpUT0RPfEZJWE1FfE5PVEV8QlVHfE9QVElNSVpFfEhBQ0t8WFhYKTonLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgfSksXG4gICAgICAgIGlcbiAgICAgIClcbiAgICB9LFxuICAgIHkgPSB3KCcvLycsICckJyksXG4gICAgTiA9IHcoJy9cXFxcKicsICdcXFxcKi8nKSxcbiAgICBSID0gdygnIycsICckJylcbiAgdmFyIF8gPSBPYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgTUFUQ0hfTk9USElOR19SRTogL1xcYlxcQi8sXG4gICAgSURFTlRfUkU6IGgsXG4gICAgVU5ERVJTQ09SRV9JREVOVF9SRTogZCxcbiAgICBOVU1CRVJfUkU6IGYsXG4gICAgQ19OVU1CRVJfUkU6IHAsXG4gICAgQklOQVJZX05VTUJFUl9SRTogbSxcbiAgICBSRV9TVEFSVEVSU19SRTpcbiAgICAgICchfCE9fCE9PXwlfCU9fCZ8JiZ8Jj18XFxcXCp8XFxcXCo9fFxcXFwrfFxcXFwrPXwsfC18LT18Lz18L3w6fDt8PDx8PDw9fDw9fDx8PT09fD09fD18Pj4+PXw+Pj18Pj18Pj4+fD4+fD58XFxcXD98XFxcXFt8XFxcXHt8XFxcXCh8XFxcXF58XFxcXF49fFxcXFx8fFxcXFx8PXxcXFxcfFxcXFx8fH4nLFxuICAgIFNIRUJBTkc6IChlID0ge30pID0+IHtcbiAgICAgIGNvbnN0IHQgPSAvXiMhWyBdKlxcLy9cbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUuYmluYXJ5ICYmXG4gICAgICAgICAgKGUuYmVnaW4gPSAoKC4uLmUpID0+IGUubWFwKGUgPT4gZyhlKSkuam9pbignJykpKFxuICAgICAgICAgICAgdCxcbiAgICAgICAgICAgIC8uKlxcYi8sXG4gICAgICAgICAgICBlLmJpbmFyeSxcbiAgICAgICAgICAgIC9cXGIuKi9cbiAgICAgICAgICApKSxcbiAgICAgICAgYShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgIGJlZ2luOiB0LFxuICAgICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAnb246YmVnaW4nOiAoZSwgdCkgPT4ge1xuICAgICAgICAgICAgICAwICE9PSBlLmluZGV4ICYmIHQuaWdub3JlTWF0Y2goKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH0sXG4gICAgQkFDS1NMQVNIX0VTQ0FQRTogYixcbiAgICBBUE9TX1NUUklOR19NT0RFOiBFLFxuICAgIFFVT1RFX1NUUklOR19NT0RFOiB4LFxuICAgIFBIUkFTQUxfV09SRFNfTU9ERTogdixcbiAgICBDT01NRU5UOiB3LFxuICAgIENfTElORV9DT01NRU5UX01PREU6IHksXG4gICAgQ19CTE9DS19DT01NRU5UX01PREU6IE4sXG4gICAgSEFTSF9DT01NRU5UX01PREU6IFIsXG4gICAgTlVNQkVSX01PREU6IHsgY2xhc3NOYW1lOiAnbnVtYmVyJywgYmVnaW46IGYsIHJlbGV2YW5jZTogMCB9LFxuICAgIENfTlVNQkVSX01PREU6IHsgY2xhc3NOYW1lOiAnbnVtYmVyJywgYmVnaW46IHAsIHJlbGV2YW5jZTogMCB9LFxuICAgIEJJTkFSWV9OVU1CRVJfTU9ERTogeyBjbGFzc05hbWU6ICdudW1iZXInLCBiZWdpbjogbSwgcmVsZXZhbmNlOiAwIH0sXG4gICAgQ1NTX05VTUJFUl9NT0RFOiB7XG4gICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgYmVnaW46XG4gICAgICAgIGYgK1xuICAgICAgICAnKCV8ZW18ZXh8Y2h8cmVtfHZ3fHZofHZtaW58dm1heHxjbXxtbXxpbnxwdHxwY3xweHxkZWd8Z3JhZHxyYWR8dHVybnxzfG1zfEh6fGtIenxkcGl8ZHBjbXxkcHB4KT8nLFxuICAgICAgcmVsZXZhbmNlOiAwLFxuICAgIH0sXG4gICAgUkVHRVhQX01PREU6IHtcbiAgICAgIGJlZ2luOiAvKD89XFwvW14vXFxuXSpcXC8pLyxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgICAgICAgIGJlZ2luOiAvXFwvLyxcbiAgICAgICAgICBlbmQ6IC9cXC9bZ2ltdXldKi8sXG4gICAgICAgICAgaWxsZWdhbDogL1xcbi8sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIGIsXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFxbLywgZW5kOiAvXFxdLywgcmVsZXZhbmNlOiAwLCBjb250YWluczogW2JdIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBUSVRMRV9NT0RFOiB7IGNsYXNzTmFtZTogJ3RpdGxlJywgYmVnaW46IGgsIHJlbGV2YW5jZTogMCB9LFxuICAgIFVOREVSU0NPUkVfVElUTEVfTU9ERTogeyBjbGFzc05hbWU6ICd0aXRsZScsIGJlZ2luOiBkLCByZWxldmFuY2U6IDAgfSxcbiAgICBNRVRIT0RfR1VBUkQ6IHtcbiAgICAgIGJlZ2luOiAnXFxcXC5cXFxccypbYS16QS1aX11cXFxcdyonLFxuICAgICAgcmVsZXZhbmNlOiAwLFxuICAgIH0sXG4gICAgRU5EX1NBTUVfQVNfQkVHSU46IGUgPT5cbiAgICAgIE9iamVjdC5hc3NpZ24oZSwge1xuICAgICAgICAnb246YmVnaW4nOiAoZSwgdCkgPT4ge1xuICAgICAgICAgIHQuZGF0YS5fYmVnaW5NYXRjaCA9IGVbMV1cbiAgICAgICAgfSxcbiAgICAgICAgJ29uOmVuZCc6IChlLCB0KSA9PiB7XG4gICAgICAgICAgdC5kYXRhLl9iZWdpbk1hdGNoICE9PSBlWzFdICYmIHQuaWdub3JlTWF0Y2goKVxuICAgICAgICB9LFxuICAgICAgfSksXG4gIH0pXG4gIGZ1bmN0aW9uIGsoZSwgdCkge1xuICAgICcuJyA9PT0gZS5pbnB1dFtlLmluZGV4IC0gMV0gJiYgdC5pZ25vcmVNYXRjaCgpXG4gIH1cbiAgZnVuY3Rpb24gTShlLCB0KSB7XG4gICAgdCAmJlxuICAgICAgZS5iZWdpbktleXdvcmRzICYmXG4gICAgICAoKGUuYmVnaW4gPVxuICAgICAgICAnXFxcXGIoJyArIGUuYmVnaW5LZXl3b3Jkcy5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcpKD8hXFxcXC4pKD89XFxcXGJ8XFxcXHMpJyksXG4gICAgICAoZS5fX2JlZm9yZUJlZ2luID0gayksXG4gICAgICAoZS5rZXl3b3JkcyA9IGUua2V5d29yZHMgfHwgZS5iZWdpbktleXdvcmRzKSxcbiAgICAgIGRlbGV0ZSBlLmJlZ2luS2V5d29yZHMsXG4gICAgICB2b2lkIDAgPT09IGUucmVsZXZhbmNlICYmIChlLnJlbGV2YW5jZSA9IDApKVxuICB9XG4gIGZ1bmN0aW9uIE8oZSwgdCkge1xuICAgIEFycmF5LmlzQXJyYXkoZS5pbGxlZ2FsKSAmJlxuICAgICAgKGUuaWxsZWdhbCA9ICgoLi4uZSkgPT4gJygnICsgZS5tYXAoZSA9PiBnKGUpKS5qb2luKCd8JykgKyAnKScpKFxuICAgICAgICAuLi5lLmlsbGVnYWxcbiAgICAgICkpXG4gIH1cbiAgZnVuY3Rpb24gQShlLCB0KSB7XG4gICAgaWYgKGUubWF0Y2gpIHtcbiAgICAgIGlmIChlLmJlZ2luIHx8IGUuZW5kKVxuICAgICAgICB0aHJvdyBFcnJvcignYmVnaW4gJiBlbmQgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCBtYXRjaCcpXG4gICAgICA7KGUuYmVnaW4gPSBlLm1hdGNoKSwgZGVsZXRlIGUubWF0Y2hcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gTChlLCB0KSB7XG4gICAgdm9pZCAwID09PSBlLnJlbGV2YW5jZSAmJiAoZS5yZWxldmFuY2UgPSAxKVxuICB9XG4gIGNvbnN0IEkgPSBbXG4gICAgJ29mJyxcbiAgICAnYW5kJyxcbiAgICAnZm9yJyxcbiAgICAnaW4nLFxuICAgICdub3QnLFxuICAgICdvcicsXG4gICAgJ2lmJyxcbiAgICAndGhlbicsXG4gICAgJ3BhcmVudCcsXG4gICAgJ2xpc3QnLFxuICAgICd2YWx1ZScsXG4gIF1cbiAgZnVuY3Rpb24gaihlLCB0LCBuID0gJ2tleXdvcmQnKSB7XG4gICAgY29uc3QgaSA9IHt9XG4gICAgcmV0dXJuIChcbiAgICAgICdzdHJpbmcnID09IHR5cGVvZiBlXG4gICAgICAgID8gcyhuLCBlLnNwbGl0KCcgJykpXG4gICAgICAgIDogQXJyYXkuaXNBcnJheShlKVxuICAgICAgICA/IHMobiwgZSlcbiAgICAgICAgOiBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpLCBqKGVbbl0sIHQsIG4pKVxuICAgICAgICAgIH0pLFxuICAgICAgaVxuICAgIClcbiAgICBmdW5jdGlvbiBzKGUsIG4pIHtcbiAgICAgIHQgJiYgKG4gPSBuLm1hcChlID0+IGUudG9Mb3dlckNhc2UoKSkpLFxuICAgICAgICBuLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgY29uc3QgbiA9IHQuc3BsaXQoJ3wnKVxuICAgICAgICAgIGlbblswXV0gPSBbZSwgQihuWzBdLCBuWzFdKV1cbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gQihlLCB0KSB7XG4gICAgcmV0dXJuIHQgPyBOdW1iZXIodCkgOiAoZSA9PiBJLmluY2x1ZGVzKGUudG9Mb3dlckNhc2UoKSkpKGUpID8gMCA6IDFcbiAgfVxuICBmdW5jdGlvbiBUKGUsIHsgcGx1Z2luczogdCB9KSB7XG4gICAgZnVuY3Rpb24gbih0LCBuKSB7XG4gICAgICByZXR1cm4gUmVnRXhwKFxuICAgICAgICBnKHQpLFxuICAgICAgICAnbScgKyAoZS5jYXNlX2luc2Vuc2l0aXZlID8gJ2knIDogJycpICsgKG4gPyAnZycgOiAnJylcbiAgICAgIClcbiAgICB9XG4gICAgY2xhc3MgaSB7XG4gICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgOyh0aGlzLm1hdGNoSW5kZXhlcyA9IHt9KSxcbiAgICAgICAgICAodGhpcy5yZWdleGVzID0gW10pLFxuICAgICAgICAgICh0aGlzLm1hdGNoQXQgPSAxKSxcbiAgICAgICAgICAodGhpcy5wb3NpdGlvbiA9IDApXG4gICAgICB9XG4gICAgICBhZGRSdWxlKGUsIHQpIHtcbiAgICAgICAgOyh0LnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbisrKSxcbiAgICAgICAgICAodGhpcy5tYXRjaEluZGV4ZXNbdGhpcy5tYXRjaEF0XSA9IHQpLFxuICAgICAgICAgIHRoaXMucmVnZXhlcy5wdXNoKFt0LCBlXSksXG4gICAgICAgICAgKHRoaXMubWF0Y2hBdCArPVxuICAgICAgICAgICAgKGUgPT4gUmVnRXhwKGUudG9TdHJpbmcoKSArICd8JykuZXhlYygnJykubGVuZ3RoIC0gMSkoZSkgKyAxKVxuICAgICAgfVxuICAgICAgY29tcGlsZSgpIHtcbiAgICAgICAgMCA9PT0gdGhpcy5yZWdleGVzLmxlbmd0aCAmJiAodGhpcy5leGVjID0gKCkgPT4gbnVsbClcbiAgICAgICAgY29uc3QgZSA9IHRoaXMucmVnZXhlcy5tYXAoZSA9PiBlWzFdKVxuICAgICAgICA7KHRoaXMubWF0Y2hlclJlID0gbihcbiAgICAgICAgICAoKGUsIHQgPSAnfCcpID0+IHtcbiAgICAgICAgICAgIGxldCBuID0gMFxuICAgICAgICAgICAgcmV0dXJuIGVcbiAgICAgICAgICAgICAgLm1hcChlID0+IHtcbiAgICAgICAgICAgICAgICBuICs9IDFcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gblxuICAgICAgICAgICAgICAgIGxldCBpID0gZyhlKSxcbiAgICAgICAgICAgICAgICAgIHMgPSAnJ1xuICAgICAgICAgICAgICAgIGZvciAoOyBpLmxlbmd0aCA+IDA7ICkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZSA9IHUuZXhlYyhpKVxuICAgICAgICAgICAgICAgICAgaWYgKCFlKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gaVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOyhzICs9IGkuc3Vic3RyaW5nKDAsIGUuaW5kZXgpKSxcbiAgICAgICAgICAgICAgICAgICAgKGkgPSBpLnN1YnN0cmluZyhlLmluZGV4ICsgZVswXS5sZW5ndGgpKSxcbiAgICAgICAgICAgICAgICAgICAgJ1xcXFwnID09PSBlWzBdWzBdICYmIGVbMV1cbiAgICAgICAgICAgICAgICAgICAgICA/IChzICs9ICdcXFxcJyArIChOdW1iZXIoZVsxXSkgKyB0KSlcbiAgICAgICAgICAgICAgICAgICAgICA6ICgocyArPSBlWzBdKSwgJygnID09PSBlWzBdICYmIG4rKylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLm1hcChlID0+IGAoJHtlfSlgKVxuICAgICAgICAgICAgICAuam9pbih0KVxuICAgICAgICAgIH0pKGUpLFxuICAgICAgICAgICEwXG4gICAgICAgICkpLFxuICAgICAgICAgICh0aGlzLmxhc3RJbmRleCA9IDApXG4gICAgICB9XG4gICAgICBleGVjKGUpIHtcbiAgICAgICAgdGhpcy5tYXRjaGVyUmUubGFzdEluZGV4ID0gdGhpcy5sYXN0SW5kZXhcbiAgICAgICAgY29uc3QgdCA9IHRoaXMubWF0Y2hlclJlLmV4ZWMoZSlcbiAgICAgICAgaWYgKCF0KSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCBuID0gdC5maW5kSW5kZXgoKGUsIHQpID0+IHQgPiAwICYmIHZvaWQgMCAhPT0gZSksXG4gICAgICAgICAgaSA9IHRoaXMubWF0Y2hJbmRleGVzW25dXG4gICAgICAgIHJldHVybiB0LnNwbGljZSgwLCBuKSwgT2JqZWN0LmFzc2lnbih0LCBpKVxuICAgICAgfVxuICAgIH1cbiAgICBjbGFzcyBzIHtcbiAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICA7KHRoaXMucnVsZXMgPSBbXSksXG4gICAgICAgICAgKHRoaXMubXVsdGlSZWdleGVzID0gW10pLFxuICAgICAgICAgICh0aGlzLmNvdW50ID0gMCksXG4gICAgICAgICAgKHRoaXMubGFzdEluZGV4ID0gMCksXG4gICAgICAgICAgKHRoaXMucmVnZXhJbmRleCA9IDApXG4gICAgICB9XG4gICAgICBnZXRNYXRjaGVyKGUpIHtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlSZWdleGVzW2VdKSByZXR1cm4gdGhpcy5tdWx0aVJlZ2V4ZXNbZV1cbiAgICAgICAgY29uc3QgdCA9IG5ldyBpKClcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB0aGlzLnJ1bGVzLnNsaWNlKGUpLmZvckVhY2goKFtlLCBuXSkgPT4gdC5hZGRSdWxlKGUsIG4pKSxcbiAgICAgICAgICB0LmNvbXBpbGUoKSxcbiAgICAgICAgICAodGhpcy5tdWx0aVJlZ2V4ZXNbZV0gPSB0KSxcbiAgICAgICAgICB0XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlc3VtaW5nU2NhbkF0U2FtZVBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gMCAhPT0gdGhpcy5yZWdleEluZGV4XG4gICAgICB9XG4gICAgICBjb25zaWRlckFsbCgpIHtcbiAgICAgICAgdGhpcy5yZWdleEluZGV4ID0gMFxuICAgICAgfVxuICAgICAgYWRkUnVsZShlLCB0KSB7XG4gICAgICAgIHRoaXMucnVsZXMucHVzaChbZSwgdF0pLCAnYmVnaW4nID09PSB0LnR5cGUgJiYgdGhpcy5jb3VudCsrXG4gICAgICB9XG4gICAgICBleGVjKGUpIHtcbiAgICAgICAgY29uc3QgdCA9IHRoaXMuZ2V0TWF0Y2hlcih0aGlzLnJlZ2V4SW5kZXgpXG4gICAgICAgIHQubGFzdEluZGV4ID0gdGhpcy5sYXN0SW5kZXhcbiAgICAgICAgbGV0IG4gPSB0LmV4ZWMoZSlcbiAgICAgICAgaWYgKHRoaXMucmVzdW1pbmdTY2FuQXRTYW1lUG9zaXRpb24oKSlcbiAgICAgICAgICBpZiAobiAmJiBuLmluZGV4ID09PSB0aGlzLmxhc3RJbmRleCk7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy5nZXRNYXRjaGVyKDApXG4gICAgICAgICAgICA7KHQubGFzdEluZGV4ID0gdGhpcy5sYXN0SW5kZXggKyAxKSwgKG4gPSB0LmV4ZWMoZSkpXG4gICAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG4gJiZcbiAgICAgICAgICAgICgodGhpcy5yZWdleEluZGV4ICs9IG4ucG9zaXRpb24gKyAxKSxcbiAgICAgICAgICAgIHRoaXMucmVnZXhJbmRleCA9PT0gdGhpcy5jb3VudCAmJiB0aGlzLmNvbnNpZGVyQWxsKCkpLFxuICAgICAgICAgIG5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoXG4gICAgICAoZS5jb21waWxlckV4dGVuc2lvbnMgfHwgKGUuY29tcGlsZXJFeHRlbnNpb25zID0gW10pLFxuICAgICAgZS5jb250YWlucyAmJiBlLmNvbnRhaW5zLmluY2x1ZGVzKCdzZWxmJykpXG4gICAgKVxuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICdFUlI6IGNvbnRhaW5zIGBzZWxmYCBpcyBub3Qgc3VwcG9ydGVkIGF0IHRoZSB0b3AtbGV2ZWwgb2YgYSBsYW5ndWFnZS4gIFNlZSBkb2N1bWVudGF0aW9uLidcbiAgICAgIClcbiAgICByZXR1cm4gKFxuICAgICAgKGUuY2xhc3NOYW1lQWxpYXNlcyA9IGEoZS5jbGFzc05hbWVBbGlhc2VzIHx8IHt9KSksXG4gICAgICAoZnVuY3Rpb24gdChpLCByKSB7XG4gICAgICAgIGNvbnN0IGwgPSBpXG4gICAgICAgIGlmIChpLmlzQ29tcGlsZWQpIHJldHVybiBsXG4gICAgICAgIDtbQV0uZm9yRWFjaChlID0+IGUoaSwgcikpLFxuICAgICAgICAgIGUuY29tcGlsZXJFeHRlbnNpb25zLmZvckVhY2goZSA9PiBlKGksIHIpKSxcbiAgICAgICAgICAoaS5fX2JlZm9yZUJlZ2luID0gbnVsbCksXG4gICAgICAgICAgW00sIE8sIExdLmZvckVhY2goZSA9PiBlKGksIHIpKSxcbiAgICAgICAgICAoaS5pc0NvbXBpbGVkID0gITApXG4gICAgICAgIGxldCBvID0gbnVsbFxuICAgICAgICBpZiAoXG4gICAgICAgICAgKCdvYmplY3QnID09IHR5cGVvZiBpLmtleXdvcmRzICYmXG4gICAgICAgICAgICAoKG8gPSBpLmtleXdvcmRzLiRwYXR0ZXJuKSwgZGVsZXRlIGkua2V5d29yZHMuJHBhdHRlcm4pLFxuICAgICAgICAgIGkua2V5d29yZHMgJiYgKGkua2V5d29yZHMgPSBqKGkua2V5d29yZHMsIGUuY2FzZV9pbnNlbnNpdGl2ZSkpLFxuICAgICAgICAgIGkubGV4ZW1lcyAmJiBvKVxuICAgICAgICApXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICAnRVJSOiBQcmVmZXIgYGtleXdvcmRzLiRwYXR0ZXJuYCB0byBgbW9kZS5sZXhlbWVzYCwgQk9USCBhcmUgbm90IGFsbG93ZWQuIChzZWUgbW9kZSByZWZlcmVuY2UpICdcbiAgICAgICAgICApXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKG8gPSBvIHx8IGkubGV4ZW1lcyB8fCAvXFx3Ky8pLFxuICAgICAgICAgIChsLmtleXdvcmRQYXR0ZXJuUmUgPSBuKG8sICEwKSksXG4gICAgICAgICAgciAmJlxuICAgICAgICAgICAgKGkuYmVnaW4gfHwgKGkuYmVnaW4gPSAvXFxCfFxcYi8pLFxuICAgICAgICAgICAgKGwuYmVnaW5SZSA9IG4oaS5iZWdpbikpLFxuICAgICAgICAgICAgaS5lbmRTYW1lQXNCZWdpbiAmJiAoaS5lbmQgPSBpLmJlZ2luKSxcbiAgICAgICAgICAgIGkuZW5kIHx8IGkuZW5kc1dpdGhQYXJlbnQgfHwgKGkuZW5kID0gL1xcQnxcXGIvKSxcbiAgICAgICAgICAgIGkuZW5kICYmIChsLmVuZFJlID0gbihpLmVuZCkpLFxuICAgICAgICAgICAgKGwudGVybWluYXRvckVuZCA9IGcoaS5lbmQpIHx8ICcnKSxcbiAgICAgICAgICAgIGkuZW5kc1dpdGhQYXJlbnQgJiZcbiAgICAgICAgICAgICAgci50ZXJtaW5hdG9yRW5kICYmXG4gICAgICAgICAgICAgIChsLnRlcm1pbmF0b3JFbmQgKz0gKGkuZW5kID8gJ3wnIDogJycpICsgci50ZXJtaW5hdG9yRW5kKSksXG4gICAgICAgICAgaS5pbGxlZ2FsICYmIChsLmlsbGVnYWxSZSA9IG4oaS5pbGxlZ2FsKSksXG4gICAgICAgICAgaS5jb250YWlucyB8fCAoaS5jb250YWlucyA9IFtdKSxcbiAgICAgICAgICAoaS5jb250YWlucyA9IFtdLmNvbmNhdChcbiAgICAgICAgICAgIC4uLmkuY29udGFpbnMubWFwKGUgPT5cbiAgICAgICAgICAgICAgKGUgPT4gKFxuICAgICAgICAgICAgICAgIGUudmFyaWFudHMgJiZcbiAgICAgICAgICAgICAgICAgICFlLmNhY2hlZFZhcmlhbnRzICYmXG4gICAgICAgICAgICAgICAgICAoZS5jYWNoZWRWYXJpYW50cyA9IGUudmFyaWFudHMubWFwKHQgPT5cbiAgICAgICAgICAgICAgICAgICAgYShcbiAgICAgICAgICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgICBlLmNhY2hlZFZhcmlhbnRzXG4gICAgICAgICAgICAgICAgICA/IGUuY2FjaGVkVmFyaWFudHNcbiAgICAgICAgICAgICAgICAgIDogUyhlKVxuICAgICAgICAgICAgICAgICAgPyBhKGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGFydHM6IGUuc3RhcnRzID8gYShlLnN0YXJ0cykgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiBPYmplY3QuaXNGcm96ZW4oZSlcbiAgICAgICAgICAgICAgICAgID8gYShlKVxuICAgICAgICAgICAgICAgICAgOiBlXG4gICAgICAgICAgICAgICkpKCdzZWxmJyA9PT0gZSA/IGkgOiBlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkpLFxuICAgICAgICAgIGkuY29udGFpbnMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIHQoZSwgbClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpLnN0YXJ0cyAmJiB0KGkuc3RhcnRzLCByKSxcbiAgICAgICAgICAobC5tYXRjaGVyID0gKGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdCA9IG5ldyBzKClcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIGUuY29udGFpbnMuZm9yRWFjaChlID0+XG4gICAgICAgICAgICAgICAgdC5hZGRSdWxlKGUuYmVnaW4sIHsgcnVsZTogZSwgdHlwZTogJ2JlZ2luJyB9KVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBlLnRlcm1pbmF0b3JFbmQgJiYgdC5hZGRSdWxlKGUudGVybWluYXRvckVuZCwgeyB0eXBlOiAnZW5kJyB9KSxcbiAgICAgICAgICAgICAgZS5pbGxlZ2FsICYmIHQuYWRkUnVsZShlLmlsbGVnYWwsIHsgdHlwZTogJ2lsbGVnYWwnIH0pLFxuICAgICAgICAgICAgICB0XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSkobCkpLFxuICAgICAgICAgIGxcbiAgICAgICAgKVxuICAgICAgfSkoZSlcbiAgICApXG4gIH1cbiAgZnVuY3Rpb24gUyhlKSB7XG4gICAgcmV0dXJuICEhZSAmJiAoZS5lbmRzV2l0aFBhcmVudCB8fCBTKGUuc3RhcnRzKSlcbiAgfVxuICBmdW5jdGlvbiBQKGUpIHtcbiAgICBjb25zdCB0ID0ge1xuICAgICAgcHJvcHM6IFsnbGFuZ3VhZ2UnLCAnY29kZScsICdhdXRvZGV0ZWN0J10sXG4gICAgICBkYXRhOiAoKSA9PiAoeyBkZXRlY3RlZExhbmd1YWdlOiAnJywgdW5rbm93bkxhbmd1YWdlOiAhMSB9KSxcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNsYXNzTmFtZSgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy51bmtub3duTGFuZ3VhZ2UgPyAnJyA6ICdobGpzICcgKyB0aGlzLmRldGVjdGVkTGFuZ3VhZ2VcbiAgICAgICAgfSxcbiAgICAgICAgaGlnaGxpZ2h0ZWQoKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmF1dG9EZXRlY3QgJiYgIWUuZ2V0TGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSkpXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYFRoZSBsYW5ndWFnZSBcIiR7dGhpcy5sYW5ndWFnZX1cIiB5b3Ugc3BlY2lmaWVkIGNvdWxkIG5vdCBiZSBmb3VuZC5gXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICh0aGlzLnVua25vd25MYW5ndWFnZSA9ICEwKSxcbiAgICAgICAgICAgICAgcyh0aGlzLmNvZGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgbGV0IHQgPSB7fVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLmF1dG9EZXRlY3RcbiAgICAgICAgICAgICAgPyAoKHQgPSBlLmhpZ2hsaWdodEF1dG8odGhpcy5jb2RlKSksXG4gICAgICAgICAgICAgICAgKHRoaXMuZGV0ZWN0ZWRMYW5ndWFnZSA9IHQubGFuZ3VhZ2UpKVxuICAgICAgICAgICAgICA6ICgodCA9IGUuaGlnaGxpZ2h0KFxuICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29kZSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuaWdub3JlSWxsZWdhbHNcbiAgICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgICAodGhpcy5kZXRlY3RlZExhbmd1YWdlID0gdGhpcy5sYW5ndWFnZSkpLFxuICAgICAgICAgICAgdC52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgYXV0b0RldGVjdCgpIHtcbiAgICAgICAgICByZXR1cm4gISh0aGlzLmxhbmd1YWdlICYmICgoZSA9IHRoaXMuYXV0b2RldGVjdCksICFlICYmICcnICE9PSBlKSlcbiAgICAgICAgICB2YXIgZVxuICAgICAgICB9LFxuICAgICAgICBpZ25vcmVJbGxlZ2FsczogKCkgPT4gITAsXG4gICAgICB9LFxuICAgICAgcmVuZGVyKGUpIHtcbiAgICAgICAgcmV0dXJuIGUoJ3ByZScsIHt9LCBbXG4gICAgICAgICAgZSgnY29kZScsIHtcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogdGhpcy5oaWdobGlnaHRlZCB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdKVxuICAgICAgfSxcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENvbXBvbmVudDogdCxcbiAgICAgIFZ1ZVBsdWdpbjoge1xuICAgICAgICBpbnN0YWxsKGUpIHtcbiAgICAgICAgICBlLmNvbXBvbmVudCgnaGlnaGxpZ2h0anMnLCB0KVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG4gIH1cbiAgY29uc3QgRCA9IHtcbiAgICAnYWZ0ZXI6aGlnaGxpZ2h0RWxlbWVudCc6ICh7IGVsOiBlLCByZXN1bHQ6IHQsIHRleHQ6IG4gfSkgPT4ge1xuICAgICAgY29uc3QgaSA9IEgoZSlcbiAgICAgIGlmICghaS5sZW5ndGgpIHJldHVyblxuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICA7KGEuaW5uZXJIVE1MID0gdC52YWx1ZSksXG4gICAgICAgICh0LnZhbHVlID0gKChlLCB0LCBuKSA9PiB7XG4gICAgICAgICAgbGV0IGkgPSAwLFxuICAgICAgICAgICAgYSA9ICcnXG4gICAgICAgICAgY29uc3QgciA9IFtdXG4gICAgICAgICAgZnVuY3Rpb24gbCgpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmxlbmd0aCAmJiB0Lmxlbmd0aFxuICAgICAgICAgICAgICA/IGVbMF0ub2Zmc2V0ICE9PSB0WzBdLm9mZnNldFxuICAgICAgICAgICAgICAgID8gZVswXS5vZmZzZXQgPCB0WzBdLm9mZnNldFxuICAgICAgICAgICAgICAgICAgPyBlXG4gICAgICAgICAgICAgICAgICA6IHRcbiAgICAgICAgICAgICAgICA6ICdzdGFydCcgPT09IHRbMF0uZXZlbnRcbiAgICAgICAgICAgICAgICA/IGVcbiAgICAgICAgICAgICAgICA6IHRcbiAgICAgICAgICAgICAgOiBlLmxlbmd0aFxuICAgICAgICAgICAgICA/IGVcbiAgICAgICAgICAgICAgOiB0XG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bmN0aW9uIG8oZSkge1xuICAgICAgICAgICAgYSArPVxuICAgICAgICAgICAgICAnPCcgK1xuICAgICAgICAgICAgICBDKGUpICtcbiAgICAgICAgICAgICAgW10ubWFwXG4gICAgICAgICAgICAgICAgLmNhbGwoZS5hdHRyaWJ1dGVzLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICcgJyArIGUubm9kZU5hbWUgKyAnPVwiJyArIHMoZS52YWx1ZSkgKyAnXCInXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuam9pbignJykgK1xuICAgICAgICAgICAgICAnPidcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVuY3Rpb24gYyhlKSB7XG4gICAgICAgICAgICBhICs9ICc8LycgKyBDKGUpICsgJz4nXG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bmN0aW9uIGcoZSkge1xuICAgICAgICAgICAgOygnc3RhcnQnID09PSBlLmV2ZW50ID8gbyA6IGMpKGUubm9kZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yICg7IGUubGVuZ3RoIHx8IHQubGVuZ3RoOyApIHtcbiAgICAgICAgICAgIGxldCB0ID0gbCgpXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICgoYSArPSBzKG4uc3Vic3RyaW5nKGksIHRbMF0ub2Zmc2V0KSkpLFxuICAgICAgICAgICAgICAoaSA9IHRbMF0ub2Zmc2V0KSxcbiAgICAgICAgICAgICAgdCA9PT0gZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByLnJldmVyc2UoKS5mb3JFYWNoKGMpXG4gICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBnKHQuc3BsaWNlKDAsIDEpWzBdKSwgKHQgPSBsKCkpXG4gICAgICAgICAgICAgIH0gd2hpbGUgKHQgPT09IGUgJiYgdC5sZW5ndGggJiYgdFswXS5vZmZzZXQgPT09IGkpXG4gICAgICAgICAgICAgIHIucmV2ZXJzZSgpLmZvckVhY2gobylcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAnc3RhcnQnID09PSB0WzBdLmV2ZW50ID8gci5wdXNoKHRbMF0ubm9kZSkgOiByLnBvcCgpLFxuICAgICAgICAgICAgICAgIGcodC5zcGxpY2UoMCwgMSlbMF0pXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhICsgcyhuLnN1YnN0cihpKSlcbiAgICAgICAgfSkoaSwgSChhKSwgbikpXG4gICAgfSxcbiAgfVxuICBmdW5jdGlvbiBDKGUpIHtcbiAgICByZXR1cm4gZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cbiAgZnVuY3Rpb24gSChlKSB7XG4gICAgY29uc3QgdCA9IFtdXG4gICAgcmV0dXJuIChcbiAgICAgIChmdW5jdGlvbiBlKG4sIGkpIHtcbiAgICAgICAgZm9yIChsZXQgcyA9IG4uZmlyc3RDaGlsZDsgczsgcyA9IHMubmV4dFNpYmxpbmcpXG4gICAgICAgICAgMyA9PT0gcy5ub2RlVHlwZVxuICAgICAgICAgICAgPyAoaSArPSBzLm5vZGVWYWx1ZS5sZW5ndGgpXG4gICAgICAgICAgICA6IDEgPT09IHMubm9kZVR5cGUgJiZcbiAgICAgICAgICAgICAgKHQucHVzaCh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdzdGFydCcsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBpLFxuICAgICAgICAgICAgICAgIG5vZGU6IHMsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAoaSA9IGUocywgaSkpLFxuICAgICAgICAgICAgICBDKHMpLm1hdGNoKC9icnxocnxpbWd8aW5wdXQvKSB8fFxuICAgICAgICAgICAgICAgIHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICBldmVudDogJ3N0b3AnLFxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBpLFxuICAgICAgICAgICAgICAgICAgbm9kZTogcyxcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgcmV0dXJuIGlcbiAgICAgIH0pKGUsIDApLFxuICAgICAgdFxuICAgIClcbiAgfVxuICBjb25zdCAkID0gZSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgfSxcbiAgICBVID0gKGUsIC4uLnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdXQVJOOiAnICsgZSwgLi4udClcbiAgICB9LFxuICAgIHogPSAoZSwgdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYERlcHJlY2F0ZWQgYXMgb2YgJHtlfS4gJHt0fWApXG4gICAgfSxcbiAgICBLID0gcyxcbiAgICBHID0gYSxcbiAgICBWID0gU3ltYm9sKCdub21hdGNoJylcbiAgcmV0dXJuIChlID0+IHtcbiAgICBjb25zdCBuID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIHMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgYSA9IFtdXG4gICAgbGV0IHIgPSAhMFxuICAgIGNvbnN0IGwgPSAvKF4oPFtePl0rPnxcXHR8KSt8XFxuKS9nbSxcbiAgICAgIG8gPVxuICAgICAgICBcIkNvdWxkIG5vdCBmaW5kIHRoZSBsYW5ndWFnZSAne30nLCBkaWQgeW91IGZvcmdldCB0byBsb2FkL2luY2x1ZGUgYSBsYW5ndWFnZSBtb2R1bGU/XCIsXG4gICAgICBnID0ge1xuICAgICAgICBkaXNhYmxlQXV0b2RldGVjdDogITAsXG4gICAgICAgIG5hbWU6ICdQbGFpbiB0ZXh0JyxcbiAgICAgICAgY29udGFpbnM6IFtdLFxuICAgICAgfVxuICAgIGxldCB1ID0ge1xuICAgICAgbm9IaWdobGlnaHRSZTogL14obm8tP2hpZ2hsaWdodCkkL2ksXG4gICAgICBsYW5ndWFnZURldGVjdFJlOiAvXFxibGFuZyg/OnVhZ2UpPy0oW1xcdy1dKylcXGIvaSxcbiAgICAgIGNsYXNzUHJlZml4OiAnaGxqcy0nLFxuICAgICAgdGFiUmVwbGFjZTogbnVsbCxcbiAgICAgIHVzZUJSOiAhMSxcbiAgICAgIGxhbmd1YWdlczogbnVsbCxcbiAgICAgIF9fZW1pdHRlcjogYyxcbiAgICB9XG4gICAgZnVuY3Rpb24gaChlKSB7XG4gICAgICByZXR1cm4gdS5ub0hpZ2hsaWdodFJlLnRlc3QoZSlcbiAgICB9XG4gICAgZnVuY3Rpb24gZChlLCB0LCBuLCBpKSB7XG4gICAgICBsZXQgcyA9ICcnLFxuICAgICAgICBhID0gJydcbiAgICAgICdvYmplY3QnID09IHR5cGVvZiB0XG4gICAgICAgID8gKChzID0gZSksIChuID0gdC5pZ25vcmVJbGxlZ2FscyksIChhID0gdC5sYW5ndWFnZSksIChpID0gdm9pZCAwKSlcbiAgICAgICAgOiAoeignMTAuNy4wJywgJ2hpZ2hsaWdodChsYW5nLCBjb2RlLCAuLi5hcmdzKSBoYXMgYmVlbiBkZXByZWNhdGVkLicpLFxuICAgICAgICAgIHooXG4gICAgICAgICAgICAnMTAuNy4wJyxcbiAgICAgICAgICAgICdQbGVhc2UgdXNlIGhpZ2hsaWdodChjb2RlLCBvcHRpb25zKSBpbnN0ZWFkLlxcbmh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzIyNzcnXG4gICAgICAgICAgKSxcbiAgICAgICAgICAoYSA9IGUpLFxuICAgICAgICAgIChzID0gdCkpXG4gICAgICBjb25zdCByID0geyBjb2RlOiBzLCBsYW5ndWFnZTogYSB9XG4gICAgICBNKCdiZWZvcmU6aGlnaGxpZ2h0JywgcilcbiAgICAgIGNvbnN0IGwgPSByLnJlc3VsdCA/IHIucmVzdWx0IDogZihyLmxhbmd1YWdlLCByLmNvZGUsIG4sIGkpXG4gICAgICByZXR1cm4gKGwuY29kZSA9IHIuY29kZSksIE0oJ2FmdGVyOmhpZ2hsaWdodCcsIGwpLCBsXG4gICAgfVxuICAgIGZ1bmN0aW9uIGYoZSwgdCwgcywgbCkge1xuICAgICAgZnVuY3Rpb24gYyhlLCB0KSB7XG4gICAgICAgIGNvbnN0IG4gPSB2LmNhc2VfaW5zZW5zaXRpdmUgPyB0WzBdLnRvTG93ZXJDYXNlKCkgOiB0WzBdXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUua2V5d29yZHMsIG4pICYmIGUua2V5d29yZHNbbl1cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZygpIHtcbiAgICAgICAgbnVsbCAhPSBSLnN1Ykxhbmd1YWdlXG4gICAgICAgICAgPyAoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoJycgPT09IE0pIHJldHVyblxuICAgICAgICAgICAgICBsZXQgZSA9IG51bGxcbiAgICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBSLnN1Ykxhbmd1YWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuW1Iuc3ViTGFuZ3VhZ2VdKSByZXR1cm4gdm9pZCBrLmFkZFRleHQoTSlcbiAgICAgICAgICAgICAgICA7KGUgPSBmKFIuc3ViTGFuZ3VhZ2UsIE0sICEwLCBfW1Iuc3ViTGFuZ3VhZ2VdKSksXG4gICAgICAgICAgICAgICAgICAoX1tSLnN1Ykxhbmd1YWdlXSA9IGUudG9wKVxuICAgICAgICAgICAgICB9IGVsc2UgZSA9IHAoTSwgUi5zdWJMYW5ndWFnZS5sZW5ndGggPyBSLnN1Ykxhbmd1YWdlIDogbnVsbClcbiAgICAgICAgICAgICAgUi5yZWxldmFuY2UgPiAwICYmIChPICs9IGUucmVsZXZhbmNlKSxcbiAgICAgICAgICAgICAgICBrLmFkZFN1Ymxhbmd1YWdlKGUuZW1pdHRlciwgZS5sYW5ndWFnZSlcbiAgICAgICAgICAgIH0pKClcbiAgICAgICAgICA6ICgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghUi5rZXl3b3JkcykgcmV0dXJuIHZvaWQgay5hZGRUZXh0KE0pXG4gICAgICAgICAgICAgIGxldCBlID0gMFxuICAgICAgICAgICAgICBSLmtleXdvcmRQYXR0ZXJuUmUubGFzdEluZGV4ID0gMFxuICAgICAgICAgICAgICBsZXQgdCA9IFIua2V5d29yZFBhdHRlcm5SZS5leGVjKE0pLFxuICAgICAgICAgICAgICAgIG4gPSAnJ1xuICAgICAgICAgICAgICBmb3IgKDsgdDsgKSB7XG4gICAgICAgICAgICAgICAgbiArPSBNLnN1YnN0cmluZyhlLCB0LmluZGV4KVxuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBjKFIsIHQpXG4gICAgICAgICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IFtlLCBzXSA9IGlcbiAgICAgICAgICAgICAgICAgIGlmICgoay5hZGRUZXh0KG4pLCAobiA9ICcnKSwgKE8gKz0gcyksIGUuc3RhcnRzV2l0aCgnXycpKSlcbiAgICAgICAgICAgICAgICAgICAgbiArPSB0WzBdXG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbiA9IHYuY2xhc3NOYW1lQWxpYXNlc1tlXSB8fCBlXG4gICAgICAgICAgICAgICAgICAgIGsuYWRkS2V5d29yZCh0WzBdLCBuKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBuICs9IHRbMF1cbiAgICAgICAgICAgICAgICA7KGUgPSBSLmtleXdvcmRQYXR0ZXJuUmUubGFzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgICh0ID0gUi5rZXl3b3JkUGF0dGVyblJlLmV4ZWMoTSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOyhuICs9IE0uc3Vic3RyKGUpKSwgay5hZGRUZXh0KG4pXG4gICAgICAgICAgICB9KSgpLFxuICAgICAgICAgIChNID0gJycpXG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBoKGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBlLmNsYXNzTmFtZSAmJlxuICAgICAgICAgICAgay5vcGVuTm9kZSh2LmNsYXNzTmFtZUFsaWFzZXNbZS5jbGFzc05hbWVdIHx8IGUuY2xhc3NOYW1lKSxcbiAgICAgICAgICAoUiA9IE9iamVjdC5jcmVhdGUoZSwgeyBwYXJlbnQ6IHsgdmFsdWU6IFIgfSB9KSksXG4gICAgICAgICAgUlxuICAgICAgICApXG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBkKGUsIHQsIG4pIHtcbiAgICAgICAgbGV0IHMgPSAoKGUsIHQpID0+IHtcbiAgICAgICAgICBjb25zdCBuID0gZSAmJiBlLmV4ZWModClcbiAgICAgICAgICByZXR1cm4gbiAmJiAwID09PSBuLmluZGV4XG4gICAgICAgIH0pKGUuZW5kUmUsIG4pXG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgaWYgKGVbJ29uOmVuZCddKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gbmV3IGkoZSlcbiAgICAgICAgICAgIGVbJ29uOmVuZCddKHQsIG4pLCBuLmlzTWF0Y2hJZ25vcmVkICYmIChzID0gITEpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICBmb3IgKDsgZS5lbmRzUGFyZW50ICYmIGUucGFyZW50OyApIGUgPSBlLnBhcmVudFxuICAgICAgICAgICAgcmV0dXJuIGVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUuZW5kc1dpdGhQYXJlbnQpIHJldHVybiBkKGUucGFyZW50LCB0LCBuKVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbShlKSB7XG4gICAgICAgIHJldHVybiAwID09PSBSLm1hdGNoZXIucmVnZXhJbmRleCA/ICgoTSArPSBlWzBdKSwgMSkgOiAoKEkgPSAhMCksIDApXG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBiKGUpIHtcbiAgICAgICAgY29uc3QgbiA9IGVbMF0sXG4gICAgICAgICAgaSA9IHQuc3Vic3RyKGUuaW5kZXgpLFxuICAgICAgICAgIHMgPSBkKFIsIGUsIGkpXG4gICAgICAgIGlmICghcykgcmV0dXJuIFZcbiAgICAgICAgY29uc3QgYSA9IFJcbiAgICAgICAgYS5za2lwXG4gICAgICAgICAgPyAoTSArPSBuKVxuICAgICAgICAgIDogKGEucmV0dXJuRW5kIHx8IGEuZXhjbHVkZUVuZCB8fCAoTSArPSBuKSxcbiAgICAgICAgICAgIGcoKSxcbiAgICAgICAgICAgIGEuZXhjbHVkZUVuZCAmJiAoTSA9IG4pKVxuICAgICAgICBkbyB7XG4gICAgICAgICAgUi5jbGFzc05hbWUgJiYgay5jbG9zZU5vZGUoKSxcbiAgICAgICAgICAgIFIuc2tpcCB8fCBSLnN1Ykxhbmd1YWdlIHx8IChPICs9IFIucmVsZXZhbmNlKSxcbiAgICAgICAgICAgIChSID0gUi5wYXJlbnQpXG4gICAgICAgIH0gd2hpbGUgKFIgIT09IHMucGFyZW50KVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHMuc3RhcnRzICYmXG4gICAgICAgICAgICAocy5lbmRTYW1lQXNCZWdpbiAmJiAocy5zdGFydHMuZW5kUmUgPSBzLmVuZFJlKSwgaChzLnN0YXJ0cykpLFxuICAgICAgICAgIGEucmV0dXJuRW5kID8gMCA6IG4ubGVuZ3RoXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBFID0ge31cbiAgICAgIGZ1bmN0aW9uIHgobiwgYSkge1xuICAgICAgICBjb25zdCBsID0gYSAmJiBhWzBdXG4gICAgICAgIGlmICgoKE0gKz0gbiksIG51bGwgPT0gbCkpIHJldHVybiBnKCksIDBcbiAgICAgICAgaWYgKFxuICAgICAgICAgICdiZWdpbicgPT09IEUudHlwZSAmJlxuICAgICAgICAgICdlbmQnID09PSBhLnR5cGUgJiZcbiAgICAgICAgICBFLmluZGV4ID09PSBhLmluZGV4ICYmXG4gICAgICAgICAgJycgPT09IGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKCgoTSArPSB0LnNsaWNlKGEuaW5kZXgsIGEuaW5kZXggKyAxKSksICFyKSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IEVycm9yKCcwIHdpZHRoIG1hdGNoIHJlZ2V4JylcbiAgICAgICAgICAgIHRocm93ICgodC5sYW5ndWFnZU5hbWUgPSBlKSwgKHQuYmFkUnVsZSA9IEUucnVsZSksIHQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAxXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgoRSA9IGEpLCAnYmVnaW4nID09PSBhLnR5cGUpKVxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBlWzBdLFxuICAgICAgICAgICAgICBuID0gZS5ydWxlLFxuICAgICAgICAgICAgICBzID0gbmV3IGkobiksXG4gICAgICAgICAgICAgIGEgPSBbbi5fX2JlZm9yZUJlZ2luLCBuWydvbjpiZWdpbiddXVxuICAgICAgICAgICAgZm9yIChjb25zdCBuIG9mIGEpIGlmIChuICYmIChuKGUsIHMpLCBzLmlzTWF0Y2hJZ25vcmVkKSkgcmV0dXJuIG0odClcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIG4gJiZcbiAgICAgICAgICAgICAgICBuLmVuZFNhbWVBc0JlZ2luICYmXG4gICAgICAgICAgICAgICAgKG4uZW5kUmUgPSBSZWdFeHAoXG4gICAgICAgICAgICAgICAgICB0LnJlcGxhY2UoL1stL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKSxcbiAgICAgICAgICAgICAgICAgICdtJ1xuICAgICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgICBuLnNraXBcbiAgICAgICAgICAgICAgICA/IChNICs9IHQpXG4gICAgICAgICAgICAgICAgOiAobi5leGNsdWRlQmVnaW4gJiYgKE0gKz0gdCksXG4gICAgICAgICAgICAgICAgICBnKCksXG4gICAgICAgICAgICAgICAgICBuLnJldHVybkJlZ2luIHx8IG4uZXhjbHVkZUJlZ2luIHx8IChNID0gdCkpLFxuICAgICAgICAgICAgICBoKG4pLFxuICAgICAgICAgICAgICBuLnJldHVybkJlZ2luID8gMCA6IHQubGVuZ3RoXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSkoYSlcbiAgICAgICAgaWYgKCdpbGxlZ2FsJyA9PT0gYS50eXBlICYmICFzKSB7XG4gICAgICAgICAgY29uc3QgZSA9IEVycm9yKFxuICAgICAgICAgICAgJ0lsbGVnYWwgbGV4ZW1lIFwiJyArXG4gICAgICAgICAgICAgIGwgK1xuICAgICAgICAgICAgICAnXCIgZm9yIG1vZGUgXCInICtcbiAgICAgICAgICAgICAgKFIuY2xhc3NOYW1lIHx8ICc8dW5uYW1lZD4nKSArXG4gICAgICAgICAgICAgICdcIidcbiAgICAgICAgICApXG4gICAgICAgICAgdGhyb3cgKChlLm1vZGUgPSBSKSwgZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2VuZCcgPT09IGEudHlwZSkge1xuICAgICAgICAgIGNvbnN0IGUgPSBiKGEpXG4gICAgICAgICAgaWYgKGUgIT09IFYpIHJldHVybiBlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdpbGxlZ2FsJyA9PT0gYS50eXBlICYmICcnID09PSBsKSByZXR1cm4gMVxuICAgICAgICBpZiAoTCA+IDFlNSAmJiBMID4gMyAqIGEuaW5kZXgpXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICAncG90ZW50aWFsIGluZmluaXRlIGxvb3AsIHdheSBtb3JlIGl0ZXJhdGlvbnMgdGhhbiBtYXRjaGVzJ1xuICAgICAgICAgIClcbiAgICAgICAgcmV0dXJuIChNICs9IGwpLCBsLmxlbmd0aFxuICAgICAgfVxuICAgICAgY29uc3QgdiA9IE4oZSlcbiAgICAgIGlmICghdilcbiAgICAgICAgdGhyb3cgKCQoby5yZXBsYWNlKCd7fScsIGUpKSwgRXJyb3IoJ1Vua25vd24gbGFuZ3VhZ2U6IFwiJyArIGUgKyAnXCInKSlcbiAgICAgIGNvbnN0IHcgPSBUKHYsIHsgcGx1Z2luczogYSB9KVxuICAgICAgbGV0IHkgPSAnJyxcbiAgICAgICAgUiA9IGwgfHwgd1xuICAgICAgY29uc3QgXyA9IHt9LFxuICAgICAgICBrID0gbmV3IHUuX19lbWl0dGVyKHUpXG4gICAgICA7KCgpID0+IHtcbiAgICAgICAgY29uc3QgZSA9IFtdXG4gICAgICAgIGZvciAobGV0IHQgPSBSOyB0ICE9PSB2OyB0ID0gdC5wYXJlbnQpXG4gICAgICAgICAgdC5jbGFzc05hbWUgJiYgZS51bnNoaWZ0KHQuY2xhc3NOYW1lKVxuICAgICAgICBlLmZvckVhY2goZSA9PiBrLm9wZW5Ob2RlKGUpKVxuICAgICAgfSkoKVxuICAgICAgbGV0IE0gPSAnJyxcbiAgICAgICAgTyA9IDAsXG4gICAgICAgIEEgPSAwLFxuICAgICAgICBMID0gMCxcbiAgICAgICAgSSA9ICExXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKFIubWF0Y2hlci5jb25zaWRlckFsbCgpOyA7ICkge1xuICAgICAgICAgIEwrKywgSSA/IChJID0gITEpIDogUi5tYXRjaGVyLmNvbnNpZGVyQWxsKCksIChSLm1hdGNoZXIubGFzdEluZGV4ID0gQSlcbiAgICAgICAgICBjb25zdCBlID0gUi5tYXRjaGVyLmV4ZWModClcbiAgICAgICAgICBpZiAoIWUpIGJyZWFrXG4gICAgICAgICAgY29uc3QgbiA9IHgodC5zdWJzdHJpbmcoQSwgZS5pbmRleCksIGUpXG4gICAgICAgICAgQSA9IGUuaW5kZXggKyBuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB4KHQuc3Vic3RyKEEpKSxcbiAgICAgICAgICBrLmNsb3NlQWxsTm9kZXMoKSxcbiAgICAgICAgICBrLmZpbmFsaXplKCksXG4gICAgICAgICAgKHkgPSBrLnRvSFRNTCgpKSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZWxldmFuY2U6IE1hdGguZmxvb3IoTyksXG4gICAgICAgICAgICB2YWx1ZTogeSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiBlLFxuICAgICAgICAgICAgaWxsZWdhbDogITEsXG4gICAgICAgICAgICBlbWl0dGVyOiBrLFxuICAgICAgICAgICAgdG9wOiBSLFxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSBjYXRjaCAobikge1xuICAgICAgICBpZiAobi5tZXNzYWdlICYmIG4ubWVzc2FnZS5pbmNsdWRlcygnSWxsZWdhbCcpKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbGxlZ2FsOiAhMCxcbiAgICAgICAgICAgIGlsbGVnYWxCeToge1xuICAgICAgICAgICAgICBtc2c6IG4ubWVzc2FnZSxcbiAgICAgICAgICAgICAgY29udGV4dDogdC5zbGljZShBIC0gMTAwLCBBICsgMTAwKSxcbiAgICAgICAgICAgICAgbW9kZTogbi5tb2RlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNvZmFyOiB5LFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgdmFsdWU6IEsodCksXG4gICAgICAgICAgICBlbWl0dGVyOiBrLFxuICAgICAgICAgIH1cbiAgICAgICAgaWYgKHIpXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlsbGVnYWw6ICExLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgdmFsdWU6IEsodCksXG4gICAgICAgICAgICBlbWl0dGVyOiBrLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IGUsXG4gICAgICAgICAgICB0b3A6IFIsXG4gICAgICAgICAgICBlcnJvclJhaXNlZDogbixcbiAgICAgICAgICB9XG4gICAgICAgIHRocm93IG5cbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcChlLCB0KSB7XG4gICAgICB0ID0gdCB8fCB1Lmxhbmd1YWdlcyB8fCBPYmplY3Qua2V5cyhuKVxuICAgICAgY29uc3QgaSA9IChlID0+IHtcbiAgICAgICAgICBjb25zdCB0ID0ge1xuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgZW1pdHRlcjogbmV3IHUuX19lbWl0dGVyKHUpLFxuICAgICAgICAgICAgdmFsdWU6IEsoZSksXG4gICAgICAgICAgICBpbGxlZ2FsOiAhMSxcbiAgICAgICAgICAgIHRvcDogZyxcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHQuZW1pdHRlci5hZGRUZXh0KGUpLCB0XG4gICAgICAgIH0pKGUpLFxuICAgICAgICBzID0gdFxuICAgICAgICAgIC5maWx0ZXIoTilcbiAgICAgICAgICAuZmlsdGVyKGspXG4gICAgICAgICAgLm1hcCh0ID0+IGYodCwgZSwgITEpKVxuICAgICAgcy51bnNoaWZ0KGkpXG4gICAgICBjb25zdCBhID0gcy5zb3J0KChlLCB0KSA9PiB7XG4gICAgICAgICAgaWYgKGUucmVsZXZhbmNlICE9PSB0LnJlbGV2YW5jZSkgcmV0dXJuIHQucmVsZXZhbmNlIC0gZS5yZWxldmFuY2VcbiAgICAgICAgICBpZiAoZS5sYW5ndWFnZSAmJiB0Lmxhbmd1YWdlKSB7XG4gICAgICAgICAgICBpZiAoTihlLmxhbmd1YWdlKS5zdXBlcnNldE9mID09PSB0Lmxhbmd1YWdlKSByZXR1cm4gMVxuICAgICAgICAgICAgaWYgKE4odC5sYW5ndWFnZSkuc3VwZXJzZXRPZiA9PT0gZS5sYW5ndWFnZSkgcmV0dXJuIC0xXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0pLFxuICAgICAgICBbciwgbF0gPSBhLFxuICAgICAgICBvID0gclxuICAgICAgcmV0dXJuIChvLnNlY29uZF9iZXN0ID0gbCksIG9cbiAgICB9XG4gICAgY29uc3QgbSA9IHtcbiAgICAgICAgJ2JlZm9yZTpoaWdobGlnaHRFbGVtZW50JzogKHsgZWw6IGUgfSkgPT4ge1xuICAgICAgICAgIHUudXNlQlIgJiZcbiAgICAgICAgICAgIChlLmlubmVySFRNTCA9IGUuaW5uZXJIVE1MXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXG4vZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC88YnJbIC9dKj4vZywgJ1xcbicpKVxuICAgICAgICB9LFxuICAgICAgICAnYWZ0ZXI6aGlnaGxpZ2h0RWxlbWVudCc6ICh7IHJlc3VsdDogZSB9KSA9PiB7XG4gICAgICAgICAgdS51c2VCUiAmJiAoZS52YWx1ZSA9IGUudmFsdWUucmVwbGFjZSgvXFxuL2csICc8YnI+JykpXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYiA9IC9eKDxbXj5dKz58XFx0KSsvZ20sXG4gICAgICBFID0ge1xuICAgICAgICAnYWZ0ZXI6aGlnaGxpZ2h0RWxlbWVudCc6ICh7IHJlc3VsdDogZSB9KSA9PiB7XG4gICAgICAgICAgdS50YWJSZXBsYWNlICYmXG4gICAgICAgICAgICAoZS52YWx1ZSA9IGUudmFsdWUucmVwbGFjZShiLCBlID0+IGUucmVwbGFjZSgvXFx0L2csIHUudGFiUmVwbGFjZSkpKVxuICAgICAgICB9LFxuICAgICAgfVxuICAgIGZ1bmN0aW9uIHgoZSkge1xuICAgICAgbGV0IHQgPSBudWxsXG4gICAgICBjb25zdCBuID0gKGUgPT4ge1xuICAgICAgICBsZXQgdCA9IGUuY2xhc3NOYW1lICsgJyAnXG4gICAgICAgIHQgKz0gZS5wYXJlbnROb2RlID8gZS5wYXJlbnROb2RlLmNsYXNzTmFtZSA6ICcnXG4gICAgICAgIGNvbnN0IG4gPSB1Lmxhbmd1YWdlRGV0ZWN0UmUuZXhlYyh0KVxuICAgICAgICBpZiAobikge1xuICAgICAgICAgIGNvbnN0IHQgPSBOKG5bMV0pXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHQgfHxcbiAgICAgICAgICAgICAgKFUoby5yZXBsYWNlKCd7fScsIG5bMV0pKSxcbiAgICAgICAgICAgICAgVSgnRmFsbGluZyBiYWNrIHRvIG5vLWhpZ2hsaWdodCBtb2RlIGZvciB0aGlzIGJsb2NrLicsIGUpKSxcbiAgICAgICAgICAgIHQgPyBuWzFdIDogJ25vLWhpZ2hsaWdodCdcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQuc3BsaXQoL1xccysvKS5maW5kKGUgPT4gaChlKSB8fCBOKGUpKVxuICAgICAgfSkoZSlcbiAgICAgIGlmIChoKG4pKSByZXR1cm5cbiAgICAgIE0oJ2JlZm9yZTpoaWdobGlnaHRFbGVtZW50JywgeyBlbDogZSwgbGFuZ3VhZ2U6IG4gfSksICh0ID0gZSlcbiAgICAgIGNvbnN0IGkgPSB0LnRleHRDb250ZW50LFxuICAgICAgICBhID0gbiA/IGQoaSwgeyBsYW5ndWFnZTogbiwgaWdub3JlSWxsZWdhbHM6ICEwIH0pIDogcChpKVxuICAgICAgTSgnYWZ0ZXI6aGlnaGxpZ2h0RWxlbWVudCcsIHsgZWw6IGUsIHJlc3VsdDogYSwgdGV4dDogaSB9KSxcbiAgICAgICAgKGUuaW5uZXJIVE1MID0gYS52YWx1ZSksXG4gICAgICAgICgoZSwgdCwgbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGkgPSB0ID8gc1t0XSA6IG5cbiAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ2hsanMnKSwgaSAmJiBlLmNsYXNzTGlzdC5hZGQoaSlcbiAgICAgICAgfSkoZSwgbiwgYS5sYW5ndWFnZSksXG4gICAgICAgIChlLnJlc3VsdCA9IHtcbiAgICAgICAgICBsYW5ndWFnZTogYS5sYW5ndWFnZSxcbiAgICAgICAgICByZTogYS5yZWxldmFuY2UsXG4gICAgICAgICAgcmVsYXZhbmNlOiBhLnJlbGV2YW5jZSxcbiAgICAgICAgfSksXG4gICAgICAgIGEuc2Vjb25kX2Jlc3QgJiZcbiAgICAgICAgICAoZS5zZWNvbmRfYmVzdCA9IHtcbiAgICAgICAgICAgIGxhbmd1YWdlOiBhLnNlY29uZF9iZXN0Lmxhbmd1YWdlLFxuICAgICAgICAgICAgcmU6IGEuc2Vjb25kX2Jlc3QucmVsZXZhbmNlLFxuICAgICAgICAgICAgcmVsYXZhbmNlOiBhLnNlY29uZF9iZXN0LnJlbGV2YW5jZSxcbiAgICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCB2ID0gKCkgPT4ge1xuICAgICAgdi5jYWxsZWQgfHxcbiAgICAgICAgKCh2LmNhbGxlZCA9ICEwKSxcbiAgICAgICAgeihcbiAgICAgICAgICAnMTAuNi4wJyxcbiAgICAgICAgICAnaW5pdEhpZ2hsaWdodGluZygpIGlzIGRlcHJlY2F0ZWQuICBVc2UgaGlnaGxpZ2h0QWxsKCkgaW5zdGVhZC4nXG4gICAgICAgICksXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZSBjb2RlJykuZm9yRWFjaCh4KSlcbiAgICB9XG4gICAgbGV0IHcgPSAhMVxuICAgIGZ1bmN0aW9uIHkoKSB7XG4gICAgICAnbG9hZGluZycgIT09IGRvY3VtZW50LnJlYWR5U3RhdGVcbiAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZScpLmZvckVhY2goeClcbiAgICAgICAgOiAodyA9ICEwKVxuICAgIH1cbiAgICBmdW5jdGlvbiBOKGUpIHtcbiAgICAgIHJldHVybiAoZSA9IChlIHx8ICcnKS50b0xvd2VyQ2FzZSgpKSwgbltlXSB8fCBuW3NbZV1dXG4gICAgfVxuICAgIGZ1bmN0aW9uIFIoZSwgeyBsYW5ndWFnZU5hbWU6IHQgfSkge1xuICAgICAgJ3N0cmluZycgPT0gdHlwZW9mIGUgJiYgKGUgPSBbZV0pLFxuICAgICAgICBlLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgc1tlLnRvTG93ZXJDYXNlKCldID0gdFxuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiBrKGUpIHtcbiAgICAgIGNvbnN0IHQgPSBOKGUpXG4gICAgICByZXR1cm4gdCAmJiAhdC5kaXNhYmxlQXV0b2RldGVjdFxuICAgIH1cbiAgICBmdW5jdGlvbiBNKGUsIHQpIHtcbiAgICAgIGNvbnN0IG4gPSBlXG4gICAgICBhLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGVbbl0gJiYgZVtuXSh0KVxuICAgICAgfSlcbiAgICB9XG4gICAgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIHdpbmRvdyAmJlxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgJiZcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnRE9NQ29udGVudExvYWRlZCcsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB3ICYmIHkoKVxuICAgICAgICB9LFxuICAgICAgICAhMVxuICAgICAgKSxcbiAgICAgIE9iamVjdC5hc3NpZ24oZSwge1xuICAgICAgICBoaWdobGlnaHQ6IGQsXG4gICAgICAgIGhpZ2hsaWdodEF1dG86IHAsXG4gICAgICAgIGhpZ2hsaWdodEFsbDogeSxcbiAgICAgICAgZml4TWFya3VwOiBlID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgeignMTAuMi4wJywgJ2ZpeE1hcmt1cCB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjExLjAnKSxcbiAgICAgICAgICAgIHooXG4gICAgICAgICAgICAgICcxMC4yLjAnLFxuICAgICAgICAgICAgICAnUGxlYXNlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL2lzc3Vlcy8yNTM0J1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICh0ID0gZSksXG4gICAgICAgICAgICB1LnRhYlJlcGxhY2UgfHwgdS51c2VCUlxuICAgICAgICAgICAgICA/IHQucmVwbGFjZShsLCBlID0+XG4gICAgICAgICAgICAgICAgICAnXFxuJyA9PT0gZVxuICAgICAgICAgICAgICAgICAgICA/IHUudXNlQlJcbiAgICAgICAgICAgICAgICAgICAgICA/ICc8YnI+J1xuICAgICAgICAgICAgICAgICAgICAgIDogZVxuICAgICAgICAgICAgICAgICAgICA6IHUudGFiUmVwbGFjZVxuICAgICAgICAgICAgICAgICAgICA/IGUucmVwbGFjZSgvXFx0L2csIHUudGFiUmVwbGFjZSlcbiAgICAgICAgICAgICAgICAgICAgOiBlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IHRcbiAgICAgICAgICApXG4gICAgICAgICAgdmFyIHRcbiAgICAgICAgfSxcbiAgICAgICAgaGlnaGxpZ2h0RWxlbWVudDogeCxcbiAgICAgICAgaGlnaGxpZ2h0QmxvY2s6IGUgPT4gKFxuICAgICAgICAgIHooJzEwLjcuMCcsICdoaWdobGlnaHRCbG9jayB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjEyLjAnKSxcbiAgICAgICAgICB6KCcxMC43LjAnLCAnUGxlYXNlIHVzZSBoaWdobGlnaHRFbGVtZW50IG5vdy4nKSxcbiAgICAgICAgICB4KGUpXG4gICAgICAgICksXG4gICAgICAgIGNvbmZpZ3VyZTogZSA9PiB7XG4gICAgICAgICAgZS51c2VCUiAmJlxuICAgICAgICAgICAgKHooJzEwLjMuMCcsIFwiJ3VzZUJSJyB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjExLjBcIiksXG4gICAgICAgICAgICB6KFxuICAgICAgICAgICAgICAnMTAuMy4wJyxcbiAgICAgICAgICAgICAgJ1BsZWFzZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjU1OSdcbiAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgKHUgPSBHKHUsIGUpKVxuICAgICAgICB9LFxuICAgICAgICBpbml0SGlnaGxpZ2h0aW5nOiB2LFxuICAgICAgICBpbml0SGlnaGxpZ2h0aW5nT25Mb2FkOiAoKSA9PiB7XG4gICAgICAgICAgeihcbiAgICAgICAgICAgICcxMC42LjAnLFxuICAgICAgICAgICAgJ2luaXRIaWdobGlnaHRpbmdPbkxvYWQoKSBpcyBkZXByZWNhdGVkLiAgVXNlIGhpZ2hsaWdodEFsbCgpIGluc3RlYWQuJ1xuICAgICAgICAgICksXG4gICAgICAgICAgICAodyA9ICEwKVxuICAgICAgICB9LFxuICAgICAgICByZWdpc3Rlckxhbmd1YWdlOiAodCwgaSkgPT4ge1xuICAgICAgICAgIGxldCBzID0gbnVsbFxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzID0gaShlKVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKCQoXG4gICAgICAgICAgICAgICAgXCJMYW5ndWFnZSBkZWZpbml0aW9uIGZvciAne30nIGNvdWxkIG5vdCBiZSByZWdpc3RlcmVkLlwiLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAne30nLFxuICAgICAgICAgICAgICAgICAgdFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgIXIpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIHRocm93IGVcbiAgICAgICAgICAgICQoZSksIChzID0gZylcbiAgICAgICAgICB9XG4gICAgICAgICAgcy5uYW1lIHx8IChzLm5hbWUgPSB0KSxcbiAgICAgICAgICAgIChuW3RdID0gcyksXG4gICAgICAgICAgICAocy5yYXdEZWZpbml0aW9uID0gaS5iaW5kKG51bGwsIGUpKSxcbiAgICAgICAgICAgIHMuYWxpYXNlcyAmJlxuICAgICAgICAgICAgICBSKHMuYWxpYXNlcywge1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlTmFtZTogdCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdW5yZWdpc3Rlckxhbmd1YWdlOiBlID0+IHtcbiAgICAgICAgICBkZWxldGUgbltlXVxuICAgICAgICAgIGZvciAoY29uc3QgdCBvZiBPYmplY3Qua2V5cyhzKSkgc1t0XSA9PT0gZSAmJiBkZWxldGUgc1t0XVxuICAgICAgICB9LFxuICAgICAgICBsaXN0TGFuZ3VhZ2VzOiAoKSA9PiBPYmplY3Qua2V5cyhuKSxcbiAgICAgICAgZ2V0TGFuZ3VhZ2U6IE4sXG4gICAgICAgIHJlZ2lzdGVyQWxpYXNlczogUixcbiAgICAgICAgcmVxdWlyZUxhbmd1YWdlOiBlID0+IHtcbiAgICAgICAgICB6KCcxMC40LjAnLCAncmVxdWlyZUxhbmd1YWdlIHdpbGwgYmUgcmVtb3ZlZCBlbnRpcmVseSBpbiB2MTEuJyksXG4gICAgICAgICAgICB6KFxuICAgICAgICAgICAgICAnMTAuNC4wJyxcbiAgICAgICAgICAgICAgJ1BsZWFzZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9wdWxsLzI4NDQnXG4gICAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdCA9IE4oZSlcbiAgICAgICAgICBpZiAodCkgcmV0dXJuIHRcbiAgICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgIFwiVGhlICd7fScgbGFuZ3VhZ2UgaXMgcmVxdWlyZWQsIGJ1dCBub3QgbG9hZGVkLlwiLnJlcGxhY2UoJ3t9JywgZSlcbiAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIGF1dG9EZXRlY3Rpb246IGssXG4gICAgICAgIGluaGVyaXQ6IEcsXG4gICAgICAgIGFkZFBsdWdpbjogZSA9PiB7XG4gICAgICAgICAgOyhlID0+IHtcbiAgICAgICAgICAgIGVbJ2JlZm9yZTpoaWdobGlnaHRCbG9jayddICYmXG4gICAgICAgICAgICAgICFlWydiZWZvcmU6aGlnaGxpZ2h0RWxlbWVudCddICYmXG4gICAgICAgICAgICAgIChlWydiZWZvcmU6aGlnaGxpZ2h0RWxlbWVudCddID0gdCA9PiB7XG4gICAgICAgICAgICAgICAgZVsnYmVmb3JlOmhpZ2hsaWdodEJsb2NrJ10oT2JqZWN0LmFzc2lnbih7IGJsb2NrOiB0LmVsIH0sIHQpKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgZVsnYWZ0ZXI6aGlnaGxpZ2h0QmxvY2snXSAmJlxuICAgICAgICAgICAgICAgICFlWydhZnRlcjpoaWdobGlnaHRFbGVtZW50J10gJiZcbiAgICAgICAgICAgICAgICAoZVsnYWZ0ZXI6aGlnaGxpZ2h0RWxlbWVudCddID0gdCA9PiB7XG4gICAgICAgICAgICAgICAgICBlWydhZnRlcjpoaWdobGlnaHRCbG9jayddKE9iamVjdC5hc3NpZ24oeyBibG9jazogdC5lbCB9LCB0KSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH0pKGUpLFxuICAgICAgICAgICAgYS5wdXNoKGUpXG4gICAgICAgIH0sXG4gICAgICAgIHZ1ZVBsdWdpbjogUChlKS5WdWVQbHVnaW4sXG4gICAgICB9KSxcbiAgICAgIChlLmRlYnVnTW9kZSA9ICgpID0+IHtcbiAgICAgICAgciA9ICExXG4gICAgICB9KSxcbiAgICAgIChlLnNhZmVNb2RlID0gKCkgPT4ge1xuICAgICAgICByID0gITBcbiAgICAgIH0pLFxuICAgICAgKGUudmVyc2lvblN0cmluZyA9ICcxMC43LjEnKVxuICAgIGZvciAoY29uc3QgZSBpbiBfKSAnb2JqZWN0JyA9PSB0eXBlb2YgX1tlXSAmJiB0KF9bZV0pXG4gICAgcmV0dXJuIChcbiAgICAgIE9iamVjdC5hc3NpZ24oZSwgXyksIGUuYWRkUGx1Z2luKG0pLCBlLmFkZFBsdWdpbihEKSwgZS5hZGRQbHVnaW4oRSksIGVcbiAgICApXG4gIH0pKHt9KVxufSkoKVxuXG5cbidvYmplY3QnID09IHR5cGVvZiBleHBvcnRzICYmXG4gICd1bmRlZmluZWQnICE9IHR5cGVvZiBtb2R1bGUgJiZcbiAgKG1vZHVsZS5leHBvcnRzID0gaGxqcylcblxuXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdhcGFjaGUnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIHJldHVybiBlID0+IHtcbiAgICAgIGNvbnN0IG4gPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAvXFxkezEsM31cXC5cXGR7MSwzfVxcLlxcZHsxLDN9XFwuXFxkezEsM30oOlxcZHsxLDV9KT8vLFxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0FwYWNoZSBjb25maWcnLFxuICAgICAgICBhbGlhc2VzOiBbJ2FwYWNoZWNvbmYnXSxcbiAgICAgICAgY2FzZV9pbnNlbnNpdGl2ZTogITAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgZS5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzZWN0aW9uJyxcbiAgICAgICAgICAgIGJlZ2luOiAvPFxcLz8vLFxuICAgICAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBuLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ251bWJlcicsIGJlZ2luOiAvOlxcZHsxLDV9LyB9LFxuICAgICAgICAgICAgICBlLmluaGVyaXQoZS5RVU9URV9TVFJJTkdfTU9ERSwgeyByZWxldmFuY2U6IDAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFx3Ky8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgICBub21hcmt1cDpcbiAgICAgICAgICAgICAgICAnb3JkZXIgZGVueSBhbGxvdyBzZXRlbnYgcmV3cml0ZXJ1bGUgcmV3cml0ZWVuZ2luZSByZXdyaXRlY29uZCBkb2N1bWVudHJvb3Qgc2V0aGFuZGxlciBlcnJvcmRvY3VtZW50IGxvYWRtb2R1bGUgb3B0aW9ucyBoZWFkZXIgbGlzdGVuIHNlcnZlcnJvb3Qgc2VydmVybmFtZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAgIGVuZDogLyQvLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIGtleXdvcmRzOiB7IGxpdGVyYWw6ICdvbiBvZmYgYWxsIGRlbnkgYWxsb3cnIH0sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46IC9cXHNcXFsvLCBlbmQ6IC9cXF0kLyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAvW1xcJCVdXFx7LyxcbiAgICAgICAgICAgICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgICAgICAgICAgICBjb250YWluczogWydzZWxmJywgeyBjbGFzc05hbWU6ICdudW1iZXInLCBiZWdpbjogL1skJV1cXGQrLyB9XSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdudW1iZXInLCBiZWdpbjogL1xcZCsvIH0sXG4gICAgICAgICAgICAgICAgZS5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgaWxsZWdhbDogL1xcUy8sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdiYXNoJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBmdW5jdGlvbiBlKC4uLmUpIHtcbiAgICAgIHJldHVybiBlXG4gICAgICAgIC5tYXAoZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChzID0gZSkgPyAoJ3N0cmluZycgPT0gdHlwZW9mIHMgPyBzIDogcy5zb3VyY2UpIDogbnVsbFxuICAgICAgICAgIHZhciBzXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKVxuICAgIH1cbiAgICByZXR1cm4gcyA9PiB7XG4gICAgICBjb25zdCBuID0ge30sXG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgYmVnaW46IC9cXCRcXHsvLFxuICAgICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC86LS8sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbbl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICAgIE9iamVjdC5hc3NpZ24obiwge1xuICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IGUoL1xcJFtcXHdcXGQjQF1bXFx3XFxkX10qLywgJyg/IVtcXFxcd1xcXFxkXSkoPyFbJF0pJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0LFxuICAgICAgICBdLFxuICAgICAgfSlcbiAgICAgIGNvbnN0IGEgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgICAgICAgIGJlZ2luOiAvXFwkXFwoLyxcbiAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgIGNvbnRhaW5zOiBbcy5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgICAgfSxcbiAgICAgICAgaSA9IHtcbiAgICAgICAgICBiZWdpbjogLzw8LT9cXHMqKD89XFx3KykvLFxuICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgcy5FTkRfU0FNRV9BU19CRUdJTih7XG4gICAgICAgICAgICAgICAgYmVnaW46IC8oXFx3KykvLFxuICAgICAgICAgICAgICAgIGVuZDogLyhcXHcrKS8sXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgICAgY29udGFpbnM6IFtzLkJBQ0tTTEFTSF9FU0NBUEUsIG4sIGFdLFxuICAgICAgICB9XG4gICAgICBhLmNvbnRhaW5zLnB1c2goYylcbiAgICAgIGNvbnN0IG8gPSB7XG4gICAgICAgICAgYmVnaW46IC9cXCRcXChcXCgvLFxuICAgICAgICAgIGVuZDogL1xcKVxcKS8sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXGQrI1swLTlhLWZdKy8sIGNsYXNzTmFtZTogJ251bWJlcicgfSxcbiAgICAgICAgICAgIHMuTlVNQkVSX01PREUsXG4gICAgICAgICAgICBuLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHIgPSBzLlNIRUJBTkcoe1xuICAgICAgICAgIGJpbmFyeTogJyhmaXNofGJhc2h8enNofHNofGNzaHxrc2h8dGNzaHxkYXNofHNjc2gpJyxcbiAgICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICB9KSxcbiAgICAgICAgbCA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgYmVnaW46IC9cXHdbXFx3XFxkX10qXFxzKlxcKFxccypcXClcXHMqXFx7LyxcbiAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgY29udGFpbnM6IFtzLmluaGVyaXQocy5USVRMRV9NT0RFLCB7IGJlZ2luOiAvXFx3W1xcd1xcZF9dKi8gfSldLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0Jhc2gnLFxuICAgICAgICBhbGlhc2VzOiBbJ3NoJywgJ3pzaCddLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICRwYXR0ZXJuOiAvXFxiW2Etei5fLV0rXFxiLyxcbiAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2lmIHRoZW4gZWxzZSBlbGlmIGZpIGZvciB3aGlsZSBpbiBkbyBkb25lIGNhc2UgZXNhYyBmdW5jdGlvbicsXG4gICAgICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UnLFxuICAgICAgICAgIGJ1aWx0X2luOlxuICAgICAgICAgICAgJ2JyZWFrIGNkIGNvbnRpbnVlIGV2YWwgZXhlYyBleGl0IGV4cG9ydCBnZXRvcHRzIGhhc2ggcHdkIHJlYWRvbmx5IHJldHVybiBzaGlmdCB0ZXN0IHRpbWVzIHRyYXAgdW1hc2sgdW5zZXQgYWxpYXMgYmluZCBidWlsdGluIGNhbGxlciBjb21tYW5kIGRlY2xhcmUgZWNobyBlbmFibGUgaGVscCBsZXQgbG9jYWwgbG9nb3V0IG1hcGZpbGUgcHJpbnRmIHJlYWQgcmVhZGFycmF5IHNvdXJjZSB0eXBlIHR5cGVzZXQgdWxpbWl0IHVuYWxpYXMgc2V0IHNob3B0IGF1dG9sb2FkIGJnIGJpbmRrZXkgYnllIGNhcCBjaGRpciBjbG9uZSBjb21wYXJndW1lbnRzIGNvbXBjYWxsIGNvbXBjdGwgY29tcGRlc2NyaWJlIGNvbXBmaWxlcyBjb21wZ3JvdXBzIGNvbXBxdW90ZSBjb21wdGFncyBjb21wdHJ5IGNvbXB2YWx1ZXMgZGlycyBkaXNhYmxlIGRpc293biBlY2hvdGMgZWNob3RpIGVtdWxhdGUgZmMgZmcgZmxvYXQgZnVuY3Rpb25zIGdldGNhcCBnZXRsbiBoaXN0b3J5IGludGVnZXIgam9icyBraWxsIGxpbWl0IGxvZyBub2dsb2IgcG9wZCBwcmludCBwdXNoZCBwdXNobG4gcmVoYXNoIHNjaGVkIHNldGNhcCBzZXRvcHQgc3RhdCBzdXNwZW5kIHR0eWN0bCB1bmZ1bmN0aW9uIHVuaGFzaCB1bmxpbWl0IHVuc2V0b3B0IHZhcmVkIHdhaXQgd2hlbmNlIHdoZXJlIHdoaWNoIHpjb21waWxlIHpmb3JtYXQgemZ0cCB6bGUgem1vZGxvYWQgenBhcnNlb3B0cyB6cHJvZiB6cHR5IHpyZWdleHBhcnNlIHpzb2NrZXQgenN0eWxlIHp0Y3AnLFxuICAgICAgICB9LFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHIsXG4gICAgICAgICAgcy5TSEVCQU5HKCksXG4gICAgICAgICAgbCxcbiAgICAgICAgICBvLFxuICAgICAgICAgIHMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICAgICAgaSxcbiAgICAgICAgICBjLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnJywgYmVnaW46IC9cXFxcXCIvIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdzdHJpbmcnLCBiZWdpbjogLycvLCBlbmQ6IC8nLyB9LFxuICAgICAgICAgIG4sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdjJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBmdW5jdGlvbiBlKGUpIHtcbiAgICAgIHJldHVybiAoKC4uLmUpID0+XG4gICAgICAgIGVcbiAgICAgICAgICAubWFwKGUgPT5cbiAgICAgICAgICAgIChlID0+IChlID8gKCdzdHJpbmcnID09IHR5cGVvZiBlID8gZSA6IGUuc291cmNlKSA6IG51bGwpKShlKVxuICAgICAgICAgIClcbiAgICAgICAgICAuam9pbignJykpKCcoJywgZSwgJyk/JylcbiAgICB9XG4gICAgcmV0dXJuIHQgPT4ge1xuICAgICAgY29uc3QgbiA9IHQuQ09NTUVOVCgnLy8nLCAnJCcsIHsgY29udGFpbnM6IFt7IGJlZ2luOiAvXFxcXFxcbi8gfV0gfSksXG4gICAgICAgIHIgPSAnW2EtekEtWl9dXFxcXHcqOjonLFxuICAgICAgICBhID1cbiAgICAgICAgICAnKGRlY2x0eXBlXFxcXChhdXRvXFxcXCl8JyArIGUocikgKyAnW2EtekEtWl9dXFxcXHcqJyArIGUoJzxbXjw+XSs+JykgKyAnKScsXG4gICAgICAgIGkgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgYmVnaW46ICdcXFxcYlthLXpcXFxcZF9dKl90XFxcXGInLFxuICAgICAgICB9LFxuICAgICAgICBzID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICcodTg/fFV8TCk/XCInLFxuICAgICAgICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbdC5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAgIFwiKHU4P3xVfEwpPycoXFxcXFxcXFwoeFswLTlBLUZhLWZdezJ9fHVbMC05QS1GYS1mXXs0LDh9fFswLTddezN9fFxcXFxTKXwuKVwiLFxuICAgICAgICAgICAgICBlbmQ6IFwiJ1wiLFxuICAgICAgICAgICAgICBpbGxlZ2FsOiAnLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdC5FTkRfU0FNRV9BU19CRUdJTih7XG4gICAgICAgICAgICAgIGJlZ2luOiAvKD86dTg/fFV8TCk/UlwiKFteKClcXFxcIF17MCwxNn0pXFwoLyxcbiAgICAgICAgICAgICAgZW5kOiAvXFwpKFteKClcXFxcIF17MCwxNn0pXCIvLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiBcIlxcXFxiKDBiWzAxJ10rKVwiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAgIFwiKC0/KVxcXFxiKFtcXFxcZCddKyhcXFxcLltcXFxcZCddKik/fFxcXFwuW1xcXFxkJ10rKSgobGx8TEx8bHxMKSh1fFUpP3wodXxVKShsbHxMTHxsfEwpP3xmfEZ8YnxCKVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICAgXCIoLT8pKFxcXFxiMFt4WF1bYS1mQS1GMC05J10rfChcXFxcYltcXFxcZCddKyhcXFxcLltcXFxcZCddKik/fFxcXFwuW1xcXFxkJ10rKShbZUVdWy0rXT9bXFxcXGQnXSspPylcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgYmVnaW46IC8jXFxzKlthLXpdK1xcYi8sXG4gICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgICdtZXRhLWtleXdvcmQnOlxuICAgICAgICAgICAgICAnaWYgZWxzZSBlbGlmIGVuZGlmIGRlZmluZSB1bmRlZiB3YXJuaW5nIGVycm9yIGxpbmUgcHJhZ21hIF9QcmFnbWEgaWZkZWYgaWZuZGVmIGluY2x1ZGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXFxcXFxuLywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICB0LmluaGVyaXQocywgeyBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycgfSksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJyxcbiAgICAgICAgICAgICAgYmVnaW46IC88Lio/Pi8sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHQuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbCA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgYmVnaW46IGUocikgKyB0LklERU5UX1JFLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgZCA9IGUocikgKyB0LklERU5UX1JFICsgJ1xcXFxzKlxcXFwoJyxcbiAgICAgICAgdSA9IHtcbiAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2ludCBmbG9hdCB3aGlsZSBwcml2YXRlIGNoYXIgY2hhcjhfdCBjaGFyMTZfdCBjaGFyMzJfdCBjYXRjaCBpbXBvcnQgbW9kdWxlIGV4cG9ydCB2aXJ0dWFsIG9wZXJhdG9yIHNpemVvZiBkeW5hbWljX2Nhc3R8MTAgdHlwZWRlZiBjb25zdF9jYXN0fDEwIGNvbnN0IGZvciBzdGF0aWNfY2FzdHwxMCB1bmlvbiBuYW1lc3BhY2UgdW5zaWduZWQgbG9uZyB2b2xhdGlsZSBzdGF0aWMgcHJvdGVjdGVkIGJvb2wgdGVtcGxhdGUgbXV0YWJsZSBpZiBwdWJsaWMgZnJpZW5kIGRvIGdvdG8gYXV0byB2b2lkIGVudW0gZWxzZSBicmVhayBleHRlcm4gdXNpbmcgYXNtIGNhc2UgdHlwZWlkIHdjaGFyX3Qgc2hvcnQgcmVpbnRlcnByZXRfY2FzdHwxMCBkZWZhdWx0IGRvdWJsZSByZWdpc3RlciBleHBsaWNpdCBzaWduZWQgdHlwZW5hbWUgdHJ5IHRoaXMgc3dpdGNoIGNvbnRpbnVlIGlubGluZSBkZWxldGUgYWxpZ25hcyBhbGlnbm9mIGNvbnN0ZXhwciBjb25zdGV2YWwgY29uc3Rpbml0IGRlY2x0eXBlIGNvbmNlcHQgY29fYXdhaXQgY29fcmV0dXJuIGNvX3lpZWxkIHJlcXVpcmVzIG5vZXhjZXB0IHN0YXRpY19hc3NlcnQgdGhyZWFkX2xvY2FsIHJlc3RyaWN0IGZpbmFsIG92ZXJyaWRlIGF0b21pY19ib29sIGF0b21pY19jaGFyIGF0b21pY19zY2hhciBhdG9taWNfdWNoYXIgYXRvbWljX3Nob3J0IGF0b21pY191c2hvcnQgYXRvbWljX2ludCBhdG9taWNfdWludCBhdG9taWNfbG9uZyBhdG9taWNfdWxvbmcgYXRvbWljX2xsb25nIGF0b21pY191bGxvbmcgbmV3IHRocm93IHJldHVybiBhbmQgYW5kX2VxIGJpdGFuZCBiaXRvciBjb21wbCBub3Qgbm90X2VxIG9yIG9yX2VxIHhvciB4b3JfZXEnLFxuICAgICAgICAgIGJ1aWx0X2luOlxuICAgICAgICAgICAgJ3N0ZCBzdHJpbmcgd3N0cmluZyBjaW4gY291dCBjZXJyIGNsb2cgc3RkaW4gc3Rkb3V0IHN0ZGVyciBzdHJpbmdzdHJlYW0gaXN0cmluZ3N0cmVhbSBvc3RyaW5nc3RyZWFtIGF1dG9fcHRyIGRlcXVlIGxpc3QgcXVldWUgc3RhY2sgdmVjdG9yIG1hcCBzZXQgcGFpciBiaXRzZXQgbXVsdGlzZXQgbXVsdGltYXAgdW5vcmRlcmVkX3NldCB1bm9yZGVyZWRfbWFwIHVub3JkZXJlZF9tdWx0aXNldCB1bm9yZGVyZWRfbXVsdGltYXAgcHJpb3JpdHlfcXVldWUgbWFrZV9wYWlyIGFycmF5IHNoYXJlZF9wdHIgYWJvcnQgdGVybWluYXRlIGFicyBhY29zIGFzaW4gYXRhbjIgYXRhbiBjYWxsb2MgY2VpbCBjb3NoIGNvcyBleGl0IGV4cCBmYWJzIGZsb29yIGZtb2QgZnByaW50ZiBmcHV0cyBmcmVlIGZyZXhwIGZzY2FuZiBmdXR1cmUgaXNhbG51bSBpc2FscGhhIGlzY250cmwgaXNkaWdpdCBpc2dyYXBoIGlzbG93ZXIgaXNwcmludCBpc3B1bmN0IGlzc3BhY2UgaXN1cHBlciBpc3hkaWdpdCB0b2xvd2VyIHRvdXBwZXIgbGFicyBsZGV4cCBsb2cxMCBsb2cgbWFsbG9jIHJlYWxsb2MgbWVtY2hyIG1lbWNtcCBtZW1jcHkgbWVtc2V0IG1vZGYgcG93IHByaW50ZiBwdXRjaGFyIHB1dHMgc2NhbmYgc2luaCBzaW4gc25wcmludGYgc3ByaW50ZiBzcXJ0IHNzY2FuZiBzdHJjYXQgc3RyY2hyIHN0cmNtcCBzdHJjcHkgc3RyY3NwbiBzdHJsZW4gc3RybmNhdCBzdHJuY21wIHN0cm5jcHkgc3RycGJyayBzdHJyY2hyIHN0cnNwbiBzdHJzdHIgdGFuaCB0YW4gdmZwcmludGYgdnByaW50ZiB2c3ByaW50ZiBlbmRsIGluaXRpYWxpemVyX2xpc3QgdW5pcXVlX3B0ciBfQm9vbCBjb21wbGV4IF9Db21wbGV4IGltYWdpbmFyeSBfSW1hZ2luYXJ5JyxcbiAgICAgICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBudWxscHRyIE5VTEwnLFxuICAgICAgICB9LFxuICAgICAgICBtID0gW2MsIGksIG4sIHQuQ19CTE9DS19DT01NRU5UX01PREUsIG8sIHNdLFxuICAgICAgICBwID0ge1xuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAvPS8sIGVuZDogLzsvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnbmV3IHRocm93IHJldHVybiBlbHNlJyxcbiAgICAgICAgICAgICAgZW5kOiAvOy8sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAga2V5d29yZHM6IHUsXG4gICAgICAgICAgY29udGFpbnM6IG0uY29uY2F0KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICBrZXl3b3JkczogdSxcbiAgICAgICAgICAgICAgY29udGFpbnM6IG0uY29uY2F0KFsnc2VsZiddKSxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIF8gPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgIGJlZ2luOiAnKCcgKyBhICsgJ1tcXFxcKiZcXFxcc10rKSsnICsgZCxcbiAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgZW5kOiAvW3s7PV0vLFxuICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgIGtleXdvcmRzOiB1LFxuICAgICAgICAgIGlsbGVnYWw6IC9bXlxcd1xcc1xcKiY6PD4uXS8sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46ICdkZWNsdHlwZVxcXFwoYXV0b1xcXFwpJywga2V5d29yZHM6IHUsIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgeyBiZWdpbjogZCwgcmV0dXJuQmVnaW46ICEwLCBjb250YWluczogW2xdLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICBrZXl3b3JkczogdSxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgICAgdC5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAgICBzLFxuICAgICAgICAgICAgICAgIG8sXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICAgICAga2V5d29yZHM6IHUsXG4gICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgICBjb250YWluczogWydzZWxmJywgbiwgdC5DX0JMT0NLX0NPTU1FTlRfTU9ERSwgcywgbywgaV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHQuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICBjLFxuICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdDJyxcbiAgICAgICAgYWxpYXNlczogWydoJ10sXG4gICAgICAgIGtleXdvcmRzOiB1LFxuICAgICAgICBkaXNhYmxlQXV0b2RldGVjdDogITAsXG4gICAgICAgIGlsbGVnYWw6ICc8LycsXG4gICAgICAgIGNvbnRhaW5zOiBbXS5jb25jYXQocCwgXywgbSwgW1xuICAgICAgICAgIGMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICdcXFxcYihkZXF1ZXxsaXN0fHF1ZXVlfHByaW9yaXR5X3F1ZXVlfHBhaXJ8c3RhY2t8dmVjdG9yfG1hcHxzZXR8Yml0c2V0fG11bHRpc2V0fG11bHRpbWFwfHVub3JkZXJlZF9tYXB8dW5vcmRlcmVkX3NldHx1bm9yZGVyZWRfbXVsdGlzZXR8dW5vcmRlcmVkX211bHRpbWFwfGFycmF5KVxcXFxzKjwnLFxuICAgICAgICAgICAgZW5kOiAnPicsXG4gICAgICAgICAgICBrZXl3b3JkczogdSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnLCBpXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46IHQuSURFTlRfUkUgKyAnOjonLCBrZXl3b3JkczogdSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdlbnVtIGNsYXNzIHN0cnVjdCB1bmlvbicsXG4gICAgICAgICAgICBlbmQ6IC9bezs6PD49XS8sXG4gICAgICAgICAgICBjb250YWluczogW3sgYmVnaW5LZXl3b3JkczogJ2ZpbmFsIGNsYXNzIHN0cnVjdCcgfSwgdC5USVRMRV9NT0RFXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKSxcbiAgICAgICAgZXhwb3J0czoge1xuICAgICAgICAgIHByZXByb2Nlc3NvcjogYyxcbiAgICAgICAgICBzdHJpbmdzOiBzLFxuICAgICAgICAgIGtleXdvcmRzOiB1LFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnY29mZmVlc2NyaXB0JyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBjb25zdCBlID0gW1xuICAgICAgICAnYXMnLFxuICAgICAgICAnaW4nLFxuICAgICAgICAnb2YnLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ2ZpbmFsbHknLFxuICAgICAgICAndmFyJyxcbiAgICAgICAgJ25ldycsXG4gICAgICAgICdmdW5jdGlvbicsXG4gICAgICAgICdkbycsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAndm9pZCcsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2NhdGNoJyxcbiAgICAgICAgJ2luc3RhbmNlb2YnLFxuICAgICAgICAnd2l0aCcsXG4gICAgICAgICd0aHJvdycsXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAndHJ5JyxcbiAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICdjb250aW51ZScsXG4gICAgICAgICd0eXBlb2YnLFxuICAgICAgICAnZGVsZXRlJyxcbiAgICAgICAgJ2xldCcsXG4gICAgICAgICd5aWVsZCcsXG4gICAgICAgICdjb25zdCcsXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdkZWJ1Z2dlcicsXG4gICAgICAgICdhc3luYycsXG4gICAgICAgICdhd2FpdCcsXG4gICAgICAgICdzdGF0aWMnLFxuICAgICAgICAnaW1wb3J0JyxcbiAgICAgICAgJ2Zyb20nLFxuICAgICAgICAnZXhwb3J0JyxcbiAgICAgICAgJ2V4dGVuZHMnLFxuICAgICAgXSxcbiAgICAgIG4gPSBbJ3RydWUnLCAnZmFsc2UnLCAnbnVsbCcsICd1bmRlZmluZWQnLCAnTmFOJywgJ0luZmluaXR5J10sXG4gICAgICBhID0gW10uY29uY2F0KFxuICAgICAgICBbXG4gICAgICAgICAgJ3NldEludGVydmFsJyxcbiAgICAgICAgICAnc2V0VGltZW91dCcsXG4gICAgICAgICAgJ2NsZWFySW50ZXJ2YWwnLFxuICAgICAgICAgICdjbGVhclRpbWVvdXQnLFxuICAgICAgICAgICdyZXF1aXJlJyxcbiAgICAgICAgICAnZXhwb3J0cycsXG4gICAgICAgICAgJ2V2YWwnLFxuICAgICAgICAgICdpc0Zpbml0ZScsXG4gICAgICAgICAgJ2lzTmFOJyxcbiAgICAgICAgICAncGFyc2VGbG9hdCcsXG4gICAgICAgICAgJ3BhcnNlSW50JyxcbiAgICAgICAgICAnZGVjb2RlVVJJJyxcbiAgICAgICAgICAnZGVjb2RlVVJJQ29tcG9uZW50JyxcbiAgICAgICAgICAnZW5jb2RlVVJJJyxcbiAgICAgICAgICAnZW5jb2RlVVJJQ29tcG9uZW50JyxcbiAgICAgICAgICAnZXNjYXBlJyxcbiAgICAgICAgICAndW5lc2NhcGUnLFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgJ2FyZ3VtZW50cycsXG4gICAgICAgICAgJ3RoaXMnLFxuICAgICAgICAgICdzdXBlcicsXG4gICAgICAgICAgJ2NvbnNvbGUnLFxuICAgICAgICAgICd3aW5kb3cnLFxuICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgJ2xvY2FsU3RvcmFnZScsXG4gICAgICAgICAgJ21vZHVsZScsXG4gICAgICAgICAgJ2dsb2JhbCcsXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAnSW50bCcsXG4gICAgICAgICAgJ0RhdGFWaWV3JyxcbiAgICAgICAgICAnTnVtYmVyJyxcbiAgICAgICAgICAnTWF0aCcsXG4gICAgICAgICAgJ0RhdGUnLFxuICAgICAgICAgICdTdHJpbmcnLFxuICAgICAgICAgICdSZWdFeHAnLFxuICAgICAgICAgICdPYmplY3QnLFxuICAgICAgICAgICdGdW5jdGlvbicsXG4gICAgICAgICAgJ0Jvb2xlYW4nLFxuICAgICAgICAgICdFcnJvcicsXG4gICAgICAgICAgJ1N5bWJvbCcsXG4gICAgICAgICAgJ1NldCcsXG4gICAgICAgICAgJ01hcCcsXG4gICAgICAgICAgJ1dlYWtTZXQnLFxuICAgICAgICAgICdXZWFrTWFwJyxcbiAgICAgICAgICAnUHJveHknLFxuICAgICAgICAgICdSZWZsZWN0JyxcbiAgICAgICAgICAnSlNPTicsXG4gICAgICAgICAgJ1Byb21pc2UnLFxuICAgICAgICAgICdGbG9hdDY0QXJyYXknLFxuICAgICAgICAgICdJbnQxNkFycmF5JyxcbiAgICAgICAgICAnSW50MzJBcnJheScsXG4gICAgICAgICAgJ0ludDhBcnJheScsXG4gICAgICAgICAgJ1VpbnQxNkFycmF5JyxcbiAgICAgICAgICAnVWludDMyQXJyYXknLFxuICAgICAgICAgICdGbG9hdDMyQXJyYXknLFxuICAgICAgICAgICdBcnJheScsXG4gICAgICAgICAgJ1VpbnQ4QXJyYXknLFxuICAgICAgICAgICdVaW50OENsYW1wZWRBcnJheScsXG4gICAgICAgICAgJ0FycmF5QnVmZmVyJyxcbiAgICAgICAgICAnQmlnSW50NjRBcnJheScsXG4gICAgICAgICAgJ0JpZ1VpbnQ2NEFycmF5JyxcbiAgICAgICAgICAnQmlnSW50JyxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICdFdmFsRXJyb3InLFxuICAgICAgICAgICdJbnRlcm5hbEVycm9yJyxcbiAgICAgICAgICAnUmFuZ2VFcnJvcicsXG4gICAgICAgICAgJ1JlZmVyZW5jZUVycm9yJyxcbiAgICAgICAgICAnU3ludGF4RXJyb3InLFxuICAgICAgICAgICdUeXBlRXJyb3InLFxuICAgICAgICAgICdVUklFcnJvcicsXG4gICAgICAgIF1cbiAgICAgIClcbiAgICByZXR1cm4gciA9PiB7XG4gICAgICBjb25zdCB0ID0ge1xuICAgICAgICBrZXl3b3JkOiBlXG4gICAgICAgICAgLmNvbmNhdChbXG4gICAgICAgICAgICAndGhlbicsXG4gICAgICAgICAgICAndW5sZXNzJyxcbiAgICAgICAgICAgICd1bnRpbCcsXG4gICAgICAgICAgICAnbG9vcCcsXG4gICAgICAgICAgICAnYnknLFxuICAgICAgICAgICAgJ3doZW4nLFxuICAgICAgICAgICAgJ2FuZCcsXG4gICAgICAgICAgICAnb3InLFxuICAgICAgICAgICAgJ2lzJyxcbiAgICAgICAgICAgICdpc250JyxcbiAgICAgICAgICAgICdub3QnLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICgoaSA9IFsndmFyJywgJ2NvbnN0JywgJ2xldCcsICdmdW5jdGlvbicsICdzdGF0aWMnXSksXG4gICAgICAgICAgICBlID0+ICFpLmluY2x1ZGVzKGUpKVxuICAgICAgICAgICksXG4gICAgICAgIGxpdGVyYWw6IG4uY29uY2F0KFsneWVzJywgJ25vJywgJ29uJywgJ29mZiddKSxcbiAgICAgICAgYnVpbHRfaW46IGEuY29uY2F0KFsnbnBtJywgJ3ByaW50J10pLFxuICAgICAgfVxuICAgICAgdmFyIGlcbiAgICAgIGNvbnN0IHMgPSAnW0EtWmEteiRfXVswLTlBLVphLXokX10qJyxcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgICAgICAgYmVnaW46IC8jXFx7LyxcbiAgICAgICAgICBlbmQ6IC9cXH0vLFxuICAgICAgICAgIGtleXdvcmRzOiB0LFxuICAgICAgICB9LFxuICAgICAgICBjID0gW1xuICAgICAgICAgIHIuQklOQVJZX05VTUJFUl9NT0RFLFxuICAgICAgICAgIHIuaW5oZXJpdChyLkNfTlVNQkVSX01PREUsIHtcbiAgICAgICAgICAgIHN0YXJ0czogeyBlbmQ6ICcoXFxcXHMqLyk/JywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW46IC8nJycvLCBlbmQ6IC8nJycvLCBjb250YWluczogW3IuQkFDS1NMQVNIX0VTQ0FQRV0gfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogLycvLCBlbmQ6IC8nLywgY29udGFpbnM6IFtyLkJBQ0tTTEFTSF9FU0NBUEVdIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46IC9cIlwiXCIvLCBlbmQ6IC9cIlwiXCIvLCBjb250YWluczogW3IuQkFDS1NMQVNIX0VTQ0FQRSwgb10gfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogL1wiLywgZW5kOiAvXCIvLCBjb250YWluczogW3IuQkFDS1NMQVNIX0VTQ0FQRSwgb10gfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgeyBiZWdpbjogJy8vLycsIGVuZDogJy8vLycsIGNvbnRhaW5zOiBbbywgci5IQVNIX0NPTU1FTlRfTU9ERV0gfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogJy8vW2dpbV17MCwzfSg/PVxcXFxXKScsIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAvXFwvKD8hWyAqXSkuKj8oPyFbXFxcXF0pLlxcL1tnaW1dezAsM30oPz1cXFcpLyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46ICdAJyArIHMgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdWJMYW5ndWFnZTogJ2phdmFzY3JpcHQnLFxuICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiAhMCxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnYGBgJyxcbiAgICAgICAgICAgICAgICBlbmQ6ICdgYGAnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAnYCcsIGVuZDogJ2AnIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIG8uY29udGFpbnMgPSBjXG4gICAgICBjb25zdCBsID0gci5pbmhlcml0KHIuVElUTEVfTU9ERSwgeyBiZWdpbjogcyB9KSxcbiAgICAgICAgZCA9ICcoXFxcXCguKlxcXFwpXFxcXHMqKT9cXFxcQlstPV0+JyxcbiAgICAgICAgZyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgIGJlZ2luOiAnXFxcXChbXlxcXFwoXScsXG4gICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAga2V5d29yZHM6IHQsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXS5jb25jYXQoYyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdDb2ZmZWVTY3JpcHQnLFxuICAgICAgICBhbGlhc2VzOiBbJ2NvZmZlZScsICdjc29uJywgJ2ljZWQnXSxcbiAgICAgICAga2V5d29yZHM6IHQsXG4gICAgICAgIGlsbGVnYWw6IC9cXC9cXCovLFxuICAgICAgICBjb250YWluczogYy5jb25jYXQoW1xuICAgICAgICAgIHIuQ09NTUVOVCgnIyMjJywgJyMjIycpLFxuICAgICAgICAgIHIuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW46ICdeXFxcXHMqJyArIHMgKyAnXFxcXHMqPVxcXFxzKicgKyBkLFxuICAgICAgICAgICAgZW5kOiAnWy09XT4nLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtsLCBnXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvWzpcXCgsPV1cXHMqLyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICAgICAgYmVnaW46IGQsXG4gICAgICAgICAgICAgICAgZW5kOiAnWy09XT4nLFxuICAgICAgICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgICBjb250YWluczogW2ddLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcycsXG4gICAgICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgICAgIGlsbGVnYWw6IC9bOj1cIlxcW1xcXV0vLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdleHRlbmRzJyxcbiAgICAgICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogITAsXG4gICAgICAgICAgICAgICAgaWxsZWdhbDogL1s6PVwiXFxbXFxdXS8sXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtsXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogcyArICc6JyxcbiAgICAgICAgICAgIGVuZDogJzonLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgcmV0dXJuRW5kOiAhMCxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICBdKSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ2NwcCcsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgZnVuY3Rpb24gZShlKSB7XG4gICAgICByZXR1cm4gdCgnKCcsIGUsICcpPycpXG4gICAgfVxuICAgIGZ1bmN0aW9uIHQoLi4uZSkge1xuICAgICAgcmV0dXJuIGVcbiAgICAgICAgLm1hcChlID0+IHtcbiAgICAgICAgICByZXR1cm4gKHQgPSBlKSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgdCA/IHQgOiB0LnNvdXJjZSkgOiBudWxsXG4gICAgICAgICAgdmFyIHRcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpXG4gICAgfVxuICAgIHJldHVybiBuID0+IHtcbiAgICAgIGNvbnN0IHIgPSBuLkNPTU1FTlQoJy8vJywgJyQnLCB7IGNvbnRhaW5zOiBbeyBiZWdpbjogL1xcXFxcXG4vIH1dIH0pLFxuICAgICAgICBhID0gJ1thLXpBLVpfXVxcXFx3Kjo6JyxcbiAgICAgICAgaSA9XG4gICAgICAgICAgJyhkZWNsdHlwZVxcXFwoYXV0b1xcXFwpfCcgKyBlKGEpICsgJ1thLXpBLVpfXVxcXFx3KicgKyBlKCc8W148Pl0rPicpICsgJyknLFxuICAgICAgICBzID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICAgIGJlZ2luOiAnXFxcXGJbYS16XFxcXGRfXSpfdFxcXFxiJyxcbiAgICAgICAgfSxcbiAgICAgICAgYyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnKHU4P3xVfEwpP1wiJyxcbiAgICAgICAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICAgICAgICBjb250YWluczogW24uQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgICBcIih1OD98VXxMKT8nKFxcXFxcXFxcKHhbMC05QS1GYS1mXXsyfXx1WzAtOUEtRmEtZl17NCw4fXxbMC03XXszfXxcXFxcUyl8LilcIixcbiAgICAgICAgICAgICAgZW5kOiBcIidcIixcbiAgICAgICAgICAgICAgaWxsZWdhbDogJy4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG4uRU5EX1NBTUVfQVNfQkVHSU4oe1xuICAgICAgICAgICAgICBiZWdpbjogLyg/OnU4P3xVfEwpP1JcIihbXigpXFxcXCBdezAsMTZ9KVxcKC8sXG4gICAgICAgICAgICAgIGVuZDogL1xcKShbXigpXFxcXCBdezAsMTZ9KVwiLyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBiZWdpbjogXCJcXFxcYigwYlswMSddKylcIiB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgICBcIigtPylcXFxcYihbXFxcXGQnXSsoXFxcXC5bXFxcXGQnXSopP3xcXFxcLltcXFxcZCddKykoKGxsfExMfGx8TCkodXxVKT98KHV8VSkobGx8TEx8bHxMKT98ZnxGfGJ8QilcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAgIFwiKC0/KShcXFxcYjBbeFhdW2EtZkEtRjAtOSddK3woXFxcXGJbXFxcXGQnXSsoXFxcXC5bXFxcXGQnXSopP3xcXFxcLltcXFxcZCddKykoW2VFXVstK10/W1xcXFxkJ10rKT8pXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9LFxuICAgICAgICBsID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgIGJlZ2luOiAvI1xccypbYS16XStcXGIvLFxuICAgICAgICAgIGVuZDogLyQvLFxuICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICAnbWV0YS1rZXl3b3JkJzpcbiAgICAgICAgICAgICAgJ2lmIGVsc2UgZWxpZiBlbmRpZiBkZWZpbmUgdW5kZWYgd2FybmluZyBlcnJvciBsaW5lIHByYWdtYSBfUHJhZ21hIGlmZGVmIGlmbmRlZiBpbmNsdWRlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFxcXFxcbi8sIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgbi5pbmhlcml0KGMsIHsgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnIH0pLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsXG4gICAgICAgICAgICAgIGJlZ2luOiAvPC4qPz4vLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHIsXG4gICAgICAgICAgICBuLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGQgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgIGJlZ2luOiBlKGEpICsgbi5JREVOVF9SRSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHUgPSBlKGEpICsgbi5JREVOVF9SRSArICdcXFxccypcXFxcKCcsXG4gICAgICAgIG0gPSB7XG4gICAgICAgICAga2V5d29yZDpcbiAgICAgICAgICAgICdpbnQgZmxvYXQgd2hpbGUgcHJpdmF0ZSBjaGFyIGNoYXI4X3QgY2hhcjE2X3QgY2hhcjMyX3QgY2F0Y2ggaW1wb3J0IG1vZHVsZSBleHBvcnQgdmlydHVhbCBvcGVyYXRvciBzaXplb2YgZHluYW1pY19jYXN0fDEwIHR5cGVkZWYgY29uc3RfY2FzdHwxMCBjb25zdCBmb3Igc3RhdGljX2Nhc3R8MTAgdW5pb24gbmFtZXNwYWNlIHVuc2lnbmVkIGxvbmcgdm9sYXRpbGUgc3RhdGljIHByb3RlY3RlZCBib29sIHRlbXBsYXRlIG11dGFibGUgaWYgcHVibGljIGZyaWVuZCBkbyBnb3RvIGF1dG8gdm9pZCBlbnVtIGVsc2UgYnJlYWsgZXh0ZXJuIHVzaW5nIGFzbSBjYXNlIHR5cGVpZCB3Y2hhcl90IHNob3J0IHJlaW50ZXJwcmV0X2Nhc3R8MTAgZGVmYXVsdCBkb3VibGUgcmVnaXN0ZXIgZXhwbGljaXQgc2lnbmVkIHR5cGVuYW1lIHRyeSB0aGlzIHN3aXRjaCBjb250aW51ZSBpbmxpbmUgZGVsZXRlIGFsaWduYXMgYWxpZ25vZiBjb25zdGV4cHIgY29uc3RldmFsIGNvbnN0aW5pdCBkZWNsdHlwZSBjb25jZXB0IGNvX2F3YWl0IGNvX3JldHVybiBjb195aWVsZCByZXF1aXJlcyBub2V4Y2VwdCBzdGF0aWNfYXNzZXJ0IHRocmVhZF9sb2NhbCByZXN0cmljdCBmaW5hbCBvdmVycmlkZSBhdG9taWNfYm9vbCBhdG9taWNfY2hhciBhdG9taWNfc2NoYXIgYXRvbWljX3VjaGFyIGF0b21pY19zaG9ydCBhdG9taWNfdXNob3J0IGF0b21pY19pbnQgYXRvbWljX3VpbnQgYXRvbWljX2xvbmcgYXRvbWljX3Vsb25nIGF0b21pY19sbG9uZyBhdG9taWNfdWxsb25nIG5ldyB0aHJvdyByZXR1cm4gYW5kIGFuZF9lcSBiaXRhbmQgYml0b3IgY29tcGwgbm90IG5vdF9lcSBvciBvcl9lcSB4b3IgeG9yX2VxJyxcbiAgICAgICAgICBidWlsdF9pbjogJ19Cb29sIF9Db21wbGV4IF9JbWFnaW5hcnknLFxuICAgICAgICAgIF9yZWxldmFuY2VfaGludHM6IFtcbiAgICAgICAgICAgICdhc2luJyxcbiAgICAgICAgICAgICdhdGFuMicsXG4gICAgICAgICAgICAnYXRhbicsXG4gICAgICAgICAgICAnY2FsbG9jJyxcbiAgICAgICAgICAgICdjZWlsJyxcbiAgICAgICAgICAgICdjb3NoJyxcbiAgICAgICAgICAgICdjb3MnLFxuICAgICAgICAgICAgJ2V4aXQnLFxuICAgICAgICAgICAgJ2V4cCcsXG4gICAgICAgICAgICAnZmFicycsXG4gICAgICAgICAgICAnZmxvb3InLFxuICAgICAgICAgICAgJ2Ztb2QnLFxuICAgICAgICAgICAgJ2ZwcmludGYnLFxuICAgICAgICAgICAgJ2ZwdXRzJyxcbiAgICAgICAgICAgICdmcmVlJyxcbiAgICAgICAgICAgICdmcmV4cCcsXG4gICAgICAgICAgICAnYXV0b19wdHInLFxuICAgICAgICAgICAgJ2RlcXVlJyxcbiAgICAgICAgICAgICdsaXN0JyxcbiAgICAgICAgICAgICdxdWV1ZScsXG4gICAgICAgICAgICAnc3RhY2snLFxuICAgICAgICAgICAgJ3ZlY3RvcicsXG4gICAgICAgICAgICAnbWFwJyxcbiAgICAgICAgICAgICdzZXQnLFxuICAgICAgICAgICAgJ3BhaXInLFxuICAgICAgICAgICAgJ2JpdHNldCcsXG4gICAgICAgICAgICAnbXVsdGlzZXQnLFxuICAgICAgICAgICAgJ211bHRpbWFwJyxcbiAgICAgICAgICAgICd1bm9yZGVyZWRfc2V0JyxcbiAgICAgICAgICAgICdmc2NhbmYnLFxuICAgICAgICAgICAgJ2Z1dHVyZScsXG4gICAgICAgICAgICAnaXNhbG51bScsXG4gICAgICAgICAgICAnaXNhbHBoYScsXG4gICAgICAgICAgICAnaXNjbnRybCcsXG4gICAgICAgICAgICAnaXNkaWdpdCcsXG4gICAgICAgICAgICAnaXNncmFwaCcsXG4gICAgICAgICAgICAnaXNsb3dlcicsXG4gICAgICAgICAgICAnaXNwcmludCcsXG4gICAgICAgICAgICAnaXNwdW5jdCcsXG4gICAgICAgICAgICAnaXNzcGFjZScsXG4gICAgICAgICAgICAnaXN1cHBlcicsXG4gICAgICAgICAgICAnaXN4ZGlnaXQnLFxuICAgICAgICAgICAgJ3RvbG93ZXInLFxuICAgICAgICAgICAgJ3RvdXBwZXInLFxuICAgICAgICAgICAgJ2xhYnMnLFxuICAgICAgICAgICAgJ2xkZXhwJyxcbiAgICAgICAgICAgICdsb2cxMCcsXG4gICAgICAgICAgICAnbG9nJyxcbiAgICAgICAgICAgICdtYWxsb2MnLFxuICAgICAgICAgICAgJ3JlYWxsb2MnLFxuICAgICAgICAgICAgJ21lbWNocicsXG4gICAgICAgICAgICAnbWVtY21wJyxcbiAgICAgICAgICAgICdtZW1jcHknLFxuICAgICAgICAgICAgJ21lbXNldCcsXG4gICAgICAgICAgICAnbW9kZicsXG4gICAgICAgICAgICAncG93JyxcbiAgICAgICAgICAgICdwcmludGYnLFxuICAgICAgICAgICAgJ3B1dGNoYXInLFxuICAgICAgICAgICAgJ3B1dHMnLFxuICAgICAgICAgICAgJ3NjYW5mJyxcbiAgICAgICAgICAgICdzaW5oJyxcbiAgICAgICAgICAgICdzaW4nLFxuICAgICAgICAgICAgJ3NucHJpbnRmJyxcbiAgICAgICAgICAgICdzcHJpbnRmJyxcbiAgICAgICAgICAgICdzcXJ0JyxcbiAgICAgICAgICAgICdzc2NhbmYnLFxuICAgICAgICAgICAgJ3N0cmNhdCcsXG4gICAgICAgICAgICAnc3RyY2hyJyxcbiAgICAgICAgICAgICdzdHJjbXAnLFxuICAgICAgICAgICAgJ3N0cmNweScsXG4gICAgICAgICAgICAnc3RyY3NwbicsXG4gICAgICAgICAgICAnc3RybGVuJyxcbiAgICAgICAgICAgICdzdHJuY2F0JyxcbiAgICAgICAgICAgICdzdHJuY21wJyxcbiAgICAgICAgICAgICdzdHJuY3B5JyxcbiAgICAgICAgICAgICdzdHJwYnJrJyxcbiAgICAgICAgICAgICdzdHJyY2hyJyxcbiAgICAgICAgICAgICdzdHJzcG4nLFxuICAgICAgICAgICAgJ3N0cnN0cicsXG4gICAgICAgICAgICAndGFuaCcsXG4gICAgICAgICAgICAndGFuJyxcbiAgICAgICAgICAgICd1bm9yZGVyZWRfbWFwJyxcbiAgICAgICAgICAgICd1bm9yZGVyZWRfbXVsdGlzZXQnLFxuICAgICAgICAgICAgJ3Vub3JkZXJlZF9tdWx0aW1hcCcsXG4gICAgICAgICAgICAncHJpb3JpdHlfcXVldWUnLFxuICAgICAgICAgICAgJ21ha2VfcGFpcicsXG4gICAgICAgICAgICAnYXJyYXknLFxuICAgICAgICAgICAgJ3NoYXJlZF9wdHInLFxuICAgICAgICAgICAgJ2Fib3J0JyxcbiAgICAgICAgICAgICd0ZXJtaW5hdGUnLFxuICAgICAgICAgICAgJ2FicycsXG4gICAgICAgICAgICAnYWNvcycsXG4gICAgICAgICAgICAndmZwcmludGYnLFxuICAgICAgICAgICAgJ3ZwcmludGYnLFxuICAgICAgICAgICAgJ3ZzcHJpbnRmJyxcbiAgICAgICAgICAgICdlbmRsJyxcbiAgICAgICAgICAgICdpbml0aWFsaXplcl9saXN0JyxcbiAgICAgICAgICAgICd1bmlxdWVfcHRyJyxcbiAgICAgICAgICAgICdjb21wbGV4JyxcbiAgICAgICAgICAgICdpbWFnaW5hcnknLFxuICAgICAgICAgICAgJ3N0ZCcsXG4gICAgICAgICAgICAnc3RyaW5nJyxcbiAgICAgICAgICAgICd3c3RyaW5nJyxcbiAgICAgICAgICAgICdjaW4nLFxuICAgICAgICAgICAgJ2NvdXQnLFxuICAgICAgICAgICAgJ2NlcnInLFxuICAgICAgICAgICAgJ2Nsb2cnLFxuICAgICAgICAgICAgJ3N0ZGluJyxcbiAgICAgICAgICAgICdzdGRvdXQnLFxuICAgICAgICAgICAgJ3N0ZGVycicsXG4gICAgICAgICAgICAnc3RyaW5nc3RyZWFtJyxcbiAgICAgICAgICAgICdpc3RyaW5nc3RyZWFtJyxcbiAgICAgICAgICAgICdvc3RyaW5nc3RyZWFtJyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIG51bGxwdHIgTlVMTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHAgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24uZGlzcGF0Y2gnLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICBrZXl3b3JkczogbSxcbiAgICAgICAgICBiZWdpbjogdChcbiAgICAgICAgICAgIC9cXGIvLFxuICAgICAgICAgICAgLyg/IWRlY2x0eXBlKS8sXG4gICAgICAgICAgICAvKD8haWYpLyxcbiAgICAgICAgICAgIC8oPyFmb3IpLyxcbiAgICAgICAgICAgIC8oPyF3aGlsZSkvLFxuICAgICAgICAgICAgbi5JREVOVF9SRSxcbiAgICAgICAgICAgICgoXyA9IC9cXHMqXFwoLyksIHQoJyg/PScsIF8sICcpJykpXG4gICAgICAgICAgKSxcbiAgICAgICAgfVxuICAgICAgdmFyIF9cbiAgICAgIGNvbnN0IGcgPSBbcCwgbCwgcywgciwgbi5DX0JMT0NLX0NPTU1FTlRfTU9ERSwgbywgY10sXG4gICAgICAgIGIgPSB7XG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC89LywgZW5kOiAvOy8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICduZXcgdGhyb3cgcmV0dXJuIGVsc2UnLFxuICAgICAgICAgICAgICBlbmQ6IC87LyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBrZXl3b3JkczogbSxcbiAgICAgICAgICBjb250YWluczogZy5jb25jYXQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgIGtleXdvcmRzOiBtLFxuICAgICAgICAgICAgICBjb250YWluczogZy5jb25jYXQoWydzZWxmJ10pLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgZiA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgYmVnaW46ICcoJyArIGkgKyAnW1xcXFwqJlxcXFxzXSspKycgKyB1LFxuICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAga2V5d29yZHM6IG0sXG4gICAgICAgICAgaWxsZWdhbDogL1teXFx3XFxzXFwqJjo8Pi5dLyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgeyBiZWdpbjogJ2RlY2x0eXBlXFxcXChhdXRvXFxcXCknLCBrZXl3b3JkczogbSwgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiB1LCByZXR1cm5CZWdpbjogITAsIGNvbnRhaW5zOiBbZF0sIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgeyBiZWdpbjogLzo6LywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvOi8sIGVuZHNXaXRoUGFyZW50OiAhMCwgY29udGFpbnM6IFtjLCBvXSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgIGtleXdvcmRzOiBtLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICBuLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICAgIGMsXG4gICAgICAgICAgICAgICAgbyxcbiAgICAgICAgICAgICAgICBzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgICAgICBrZXl3b3JkczogbSxcbiAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnLCByLCBuLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLCBjLCBvLCBzXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHMsXG4gICAgICAgICAgICByLFxuICAgICAgICAgICAgbi5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0MrKycsXG4gICAgICAgIGFsaWFzZXM6IFsnY2MnLCAnYysrJywgJ2grKycsICdocHAnLCAnaGgnLCAnaHh4JywgJ2N4eCddLFxuICAgICAgICBrZXl3b3JkczogbSxcbiAgICAgICAgaWxsZWdhbDogJzwvJyxcbiAgICAgICAgY2xhc3NOYW1lQWxpYXNlczogeyAnZnVuY3Rpb24uZGlzcGF0Y2gnOiAnYnVpbHRfaW4nIH0sXG4gICAgICAgIGNvbnRhaW5zOiBbXS5jb25jYXQoYiwgZiwgcCwgZywgW1xuICAgICAgICAgIGwsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICdcXFxcYihkZXF1ZXxsaXN0fHF1ZXVlfHByaW9yaXR5X3F1ZXVlfHBhaXJ8c3RhY2t8dmVjdG9yfG1hcHxzZXR8Yml0c2V0fG11bHRpc2V0fG11bHRpbWFwfHVub3JkZXJlZF9tYXB8dW5vcmRlcmVkX3NldHx1bm9yZGVyZWRfbXVsdGlzZXR8dW5vcmRlcmVkX211bHRpbWFwfGFycmF5KVxcXFxzKjwnLFxuICAgICAgICAgICAgZW5kOiAnPicsXG4gICAgICAgICAgICBrZXl3b3JkczogbSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnLCBzXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46IG4uSURFTlRfUkUgKyAnOjonLCBrZXl3b3JkczogbSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdlbnVtIGNsYXNzIHN0cnVjdCB1bmlvbicsXG4gICAgICAgICAgICBlbmQ6IC9bezs6PD49XS8sXG4gICAgICAgICAgICBjb250YWluczogW3sgYmVnaW5LZXl3b3JkczogJ2ZpbmFsIGNsYXNzIHN0cnVjdCcgfSwgbi5USVRMRV9NT0RFXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKSxcbiAgICAgICAgZXhwb3J0czoge1xuICAgICAgICAgIHByZXByb2Nlc3NvcjogbCxcbiAgICAgICAgICBzdHJpbmdzOiBjLFxuICAgICAgICAgIGtleXdvcmRzOiBtLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnY3NoYXJwJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICBjb25zdCBuID0ge1xuICAgICAgICAgIGtleXdvcmQ6IFtcbiAgICAgICAgICAgICdhYnN0cmFjdCcsXG4gICAgICAgICAgICAnYXMnLFxuICAgICAgICAgICAgJ2Jhc2UnLFxuICAgICAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgICAgICdjYXNlJyxcbiAgICAgICAgICAgICdjbGFzcycsXG4gICAgICAgICAgICAnY29uc3QnLFxuICAgICAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgICAgICdkbycsXG4gICAgICAgICAgICAnZWxzZScsXG4gICAgICAgICAgICAnZXZlbnQnLFxuICAgICAgICAgICAgJ2V4cGxpY2l0JyxcbiAgICAgICAgICAgICdleHRlcm4nLFxuICAgICAgICAgICAgJ2ZpbmFsbHknLFxuICAgICAgICAgICAgJ2ZpeGVkJyxcbiAgICAgICAgICAgICdmb3InLFxuICAgICAgICAgICAgJ2ZvcmVhY2gnLFxuICAgICAgICAgICAgJ2dvdG8nLFxuICAgICAgICAgICAgJ2lmJyxcbiAgICAgICAgICAgICdpbXBsaWNpdCcsXG4gICAgICAgICAgICAnaW4nLFxuICAgICAgICAgICAgJ2ludGVyZmFjZScsXG4gICAgICAgICAgICAnaW50ZXJuYWwnLFxuICAgICAgICAgICAgJ2lzJyxcbiAgICAgICAgICAgICdsb2NrJyxcbiAgICAgICAgICAgICduYW1lc3BhY2UnLFxuICAgICAgICAgICAgJ25ldycsXG4gICAgICAgICAgICAnb3BlcmF0b3InLFxuICAgICAgICAgICAgJ291dCcsXG4gICAgICAgICAgICAnb3ZlcnJpZGUnLFxuICAgICAgICAgICAgJ3BhcmFtcycsXG4gICAgICAgICAgICAncHJpdmF0ZScsXG4gICAgICAgICAgICAncHJvdGVjdGVkJyxcbiAgICAgICAgICAgICdwdWJsaWMnLFxuICAgICAgICAgICAgJ3JlYWRvbmx5JyxcbiAgICAgICAgICAgICdyZWNvcmQnLFxuICAgICAgICAgICAgJ3JlZicsXG4gICAgICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgICAgICdzZWFsZWQnLFxuICAgICAgICAgICAgJ3NpemVvZicsXG4gICAgICAgICAgICAnc3RhY2thbGxvYycsXG4gICAgICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgICAgICdzdHJ1Y3QnLFxuICAgICAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICAgICAndGhpcycsXG4gICAgICAgICAgICAndGhyb3cnLFxuICAgICAgICAgICAgJ3RyeScsXG4gICAgICAgICAgICAndHlwZW9mJyxcbiAgICAgICAgICAgICd1bmNoZWNrZWQnLFxuICAgICAgICAgICAgJ3Vuc2FmZScsXG4gICAgICAgICAgICAndXNpbmcnLFxuICAgICAgICAgICAgJ3ZpcnR1YWwnLFxuICAgICAgICAgICAgJ3ZvaWQnLFxuICAgICAgICAgICAgJ3ZvbGF0aWxlJyxcbiAgICAgICAgICAgICd3aGlsZScsXG4gICAgICAgICAgXS5jb25jYXQoW1xuICAgICAgICAgICAgJ2FkZCcsXG4gICAgICAgICAgICAnYWxpYXMnLFxuICAgICAgICAgICAgJ2FuZCcsXG4gICAgICAgICAgICAnYXNjZW5kaW5nJyxcbiAgICAgICAgICAgICdhc3luYycsXG4gICAgICAgICAgICAnYXdhaXQnLFxuICAgICAgICAgICAgJ2J5JyxcbiAgICAgICAgICAgICdkZXNjZW5kaW5nJyxcbiAgICAgICAgICAgICdlcXVhbHMnLFxuICAgICAgICAgICAgJ2Zyb20nLFxuICAgICAgICAgICAgJ2dldCcsXG4gICAgICAgICAgICAnZ2xvYmFsJyxcbiAgICAgICAgICAgICdncm91cCcsXG4gICAgICAgICAgICAnaW5pdCcsXG4gICAgICAgICAgICAnaW50bycsXG4gICAgICAgICAgICAnam9pbicsXG4gICAgICAgICAgICAnbGV0JyxcbiAgICAgICAgICAgICduYW1lb2YnLFxuICAgICAgICAgICAgJ25vdCcsXG4gICAgICAgICAgICAnbm90bnVsbCcsXG4gICAgICAgICAgICAnb24nLFxuICAgICAgICAgICAgJ29yJyxcbiAgICAgICAgICAgICdvcmRlcmJ5JyxcbiAgICAgICAgICAgICdwYXJ0aWFsJyxcbiAgICAgICAgICAgICdyZW1vdmUnLFxuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICAnc2V0JyxcbiAgICAgICAgICAgICd1bm1hbmFnZWQnLFxuICAgICAgICAgICAgJ3ZhbHVlfDAnLFxuICAgICAgICAgICAgJ3ZhcicsXG4gICAgICAgICAgICAnd2hlbicsXG4gICAgICAgICAgICAnd2hlcmUnLFxuICAgICAgICAgICAgJ3dpdGgnLFxuICAgICAgICAgICAgJ3lpZWxkJyxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBidWlsdF9pbjogW1xuICAgICAgICAgICAgJ2Jvb2wnLFxuICAgICAgICAgICAgJ2J5dGUnLFxuICAgICAgICAgICAgJ2NoYXInLFxuICAgICAgICAgICAgJ2RlY2ltYWwnLFxuICAgICAgICAgICAgJ2RlbGVnYXRlJyxcbiAgICAgICAgICAgICdkb3VibGUnLFxuICAgICAgICAgICAgJ2R5bmFtaWMnLFxuICAgICAgICAgICAgJ2VudW0nLFxuICAgICAgICAgICAgJ2Zsb2F0JyxcbiAgICAgICAgICAgICdpbnQnLFxuICAgICAgICAgICAgJ2xvbmcnLFxuICAgICAgICAgICAgJ25pbnQnLFxuICAgICAgICAgICAgJ251aW50JyxcbiAgICAgICAgICAgICdvYmplY3QnLFxuICAgICAgICAgICAgJ3NieXRlJyxcbiAgICAgICAgICAgICdzaG9ydCcsXG4gICAgICAgICAgICAnc3RyaW5nJyxcbiAgICAgICAgICAgICd1bG9uZycsXG4gICAgICAgICAgICAndWludCcsXG4gICAgICAgICAgICAndXNob3J0JyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGxpdGVyYWw6IFsnZGVmYXVsdCcsICdmYWxzZScsICdudWxsJywgJ3RydWUnXSxcbiAgICAgICAgfSxcbiAgICAgICAgYSA9IGUuaW5oZXJpdChlLlRJVExFX01PREUsIHtcbiAgICAgICAgICBiZWdpbjogJ1thLXpBLVpdKFxcXFwuP1xcXFx3KSonLFxuICAgICAgICB9KSxcbiAgICAgICAgaSA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiBcIlxcXFxiKDBiWzAxJ10rKVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICAgXCIoLT8pXFxcXGIoW1xcXFxkJ10rKFxcXFwuW1xcXFxkJ10qKT98XFxcXC5bXFxcXGQnXSspKHV8VXxsfEx8dWx8VUx8ZnxGfGJ8QilcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAgIFwiKC0/KShcXFxcYjBbeFhdW2EtZkEtRjAtOSddK3woXFxcXGJbXFxcXGQnXSsoXFxcXC5bXFxcXGQnXSopP3xcXFxcLltcXFxcZCddKykoW2VFXVstK10/W1xcXFxkJ10rKT8pXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9LFxuICAgICAgICBzID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgYmVnaW46ICdAXCInLFxuICAgICAgICAgIGVuZDogJ1wiJyxcbiAgICAgICAgICBjb250YWluczogW3sgYmVnaW46ICdcIlwiJyB9XSxcbiAgICAgICAgfSxcbiAgICAgICAgdCA9IGUuaW5oZXJpdChzLCB7IGlsbGVnYWw6IC9cXG4vIH0pLFxuICAgICAgICByID0geyBjbGFzc05hbWU6ICdzdWJzdCcsIGJlZ2luOiAvXFx7LywgZW5kOiAvXFx9Lywga2V5d29yZHM6IG4gfSxcbiAgICAgICAgbCA9IGUuaW5oZXJpdChyLCB7IGlsbGVnYWw6IC9cXG4vIH0pLFxuICAgICAgICBjID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgYmVnaW46IC9cXCRcIi8sXG4gICAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFx7XFx7LyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL1xcfVxcfS8gfSxcbiAgICAgICAgICAgIGUuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgIGJlZ2luOiAvXFwkQFwiLyxcbiAgICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC9cXHtcXHsvLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXH1cXH0vIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAnXCJcIicgfSxcbiAgICAgICAgICAgIHIsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZCA9IGUuaW5oZXJpdChvLCB7XG4gICAgICAgICAgaWxsZWdhbDogL1xcbi8sXG4gICAgICAgICAgY29udGFpbnM6IFt7IGJlZ2luOiAvXFx7XFx7LyB9LCB7IGJlZ2luOiAvXFx9XFx9LyB9LCB7IGJlZ2luOiAnXCJcIicgfSwgbF0sXG4gICAgICAgIH0pXG4gICAgICA7KHIuY29udGFpbnMgPSBbXG4gICAgICAgIG8sXG4gICAgICAgIGMsXG4gICAgICAgIHMsXG4gICAgICAgIGUuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgZS5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgaSxcbiAgICAgICAgZS5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIF0pLFxuICAgICAgICAobC5jb250YWlucyA9IFtcbiAgICAgICAgICBkLFxuICAgICAgICAgIGMsXG4gICAgICAgICAgdCxcbiAgICAgICAgICBlLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgZS5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBpLFxuICAgICAgICAgIGUuaW5oZXJpdChlLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLCB7XG4gICAgICAgICAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSlcbiAgICAgIGNvbnN0IGcgPSB7XG4gICAgICAgICAgdmFyaWFudHM6IFtvLCBjLCBzLCBlLkFQT1NfU1RSSU5HX01PREUsIGUuUVVPVEVfU1RSSU5HX01PREVdLFxuICAgICAgICB9LFxuICAgICAgICBFID0ge1xuICAgICAgICAgIGJlZ2luOiAnPCcsXG4gICAgICAgICAgZW5kOiAnPicsXG4gICAgICAgICAgY29udGFpbnM6IFt7IGJlZ2luS2V5d29yZHM6ICdpbiBvdXQnIH0sIGFdLFxuICAgICAgICB9LFxuICAgICAgICBfID1cbiAgICAgICAgICBlLklERU5UX1JFICtcbiAgICAgICAgICAnKDwnICtcbiAgICAgICAgICBlLklERU5UX1JFICtcbiAgICAgICAgICAnKFxcXFxzKixcXFxccyonICtcbiAgICAgICAgICBlLklERU5UX1JFICtcbiAgICAgICAgICAnKSo+KT8oXFxcXFtcXFxcXSk/JyxcbiAgICAgICAgYiA9IHtcbiAgICAgICAgICBiZWdpbjogJ0AnICsgZS5JREVOVF9SRSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdDIycsXG4gICAgICAgIGFsaWFzZXM6IFsnY3MnLCAnYyMnXSxcbiAgICAgICAga2V5d29yZHM6IG4sXG4gICAgICAgIGlsbGVnYWw6IC86Oi8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgZS5DT01NRU5UKCcvLy8nLCAnJCcsIHtcbiAgICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiAnLy8vJywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiAnXFx4M2MhLS18LS1cXHgzZScsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgeyBiZWdpbjogJzwvPycsIGVuZDogJz4nIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZS5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGUuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICBiZWdpbjogJyMnLFxuICAgICAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgICAnbWV0YS1rZXl3b3JkJzpcbiAgICAgICAgICAgICAgICAnaWYgZWxzZSBlbGlmIGVuZGlmIGRlZmluZSB1bmRlZiB3YXJuaW5nIGVycm9yIGxpbmUgcmVnaW9uIGVuZHJlZ2lvbiBwcmFnbWEgY2hlY2tzdW0nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGcsXG4gICAgICAgICAgaSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGVuZDogL1t7Oz1dLyxcbiAgICAgICAgICAgIGlsbGVnYWw6IC9bXlxcczosXS8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7IGJlZ2luS2V5d29yZHM6ICd3aGVyZSBjbGFzcycgfSxcbiAgICAgICAgICAgICAgYSxcbiAgICAgICAgICAgICAgRSxcbiAgICAgICAgICAgICAgZS5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICBlLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICduYW1lc3BhY2UnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgZW5kOiAvW3s7PV0vLFxuICAgICAgICAgICAgaWxsZWdhbDogL1teXFxzOl0vLFxuICAgICAgICAgICAgY29udGFpbnM6IFthLCBlLkNfTElORV9DT01NRU5UX01PREUsIGUuQ19CTE9DS19DT01NRU5UX01PREVdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ3JlY29yZCcsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgICAgICBpbGxlZ2FsOiAvW15cXHM6XS8sXG4gICAgICAgICAgICBjb250YWluczogW2EsIEUsIGUuQ19MSU5FX0NPTU1FTlRfTU9ERSwgZS5DX0JMT0NLX0NPTU1FTlRfTU9ERV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXlxcXFxzKlxcXFxbJyxcbiAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogITAsXG4gICAgICAgICAgICBlbmQ6ICdcXFxcXScsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsXG4gICAgICAgICAgICAgICAgYmVnaW46IC9cIi8sXG4gICAgICAgICAgICAgICAgZW5kOiAvXCIvLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICduZXcgcmV0dXJuIHRocm93IGF3YWl0IGVsc2UnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW46ICcoJyArIF8gKyAnXFxcXHMrKSsnICsgZS5JREVOVF9SRSArICdcXFxccyooPC4rPlxcXFxzKik/XFxcXCgnLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgZW5kOiAvXFxzKlt7Oz1dLyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAga2V5d29yZHM6IG4sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW5LZXl3b3JkczpcbiAgICAgICAgICAgICAgICAgICdwdWJsaWMgcHJpdmF0ZSBwcm90ZWN0ZWQgc3RhdGljIGludGVybmFsIHByb3RlY3RlZCBhYnN0cmFjdCBhc3luYyBleHRlcm4gb3ZlcnJpZGUgdW5zYWZlIHZpcnR1YWwgbmV3IHNlYWxlZCBwYXJ0aWFsJyxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogZS5JREVOVF9SRSArICdcXFxccyooPC4rPlxcXFxzKik/XFxcXCgnLFxuICAgICAgICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgICBjb250YWluczogW2UuVElUTEVfTU9ERSwgRV0sXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgICAgIGtleXdvcmRzOiBuLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICBjb250YWluczogW2csIGksIGUuQ19CTE9DS19DT01NRU5UX01PREVdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIGUuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYixcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ2NzcycsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgY29uc3QgZSA9IFtcbiAgICAgICAgJ2EnLFxuICAgICAgICAnYWJicicsXG4gICAgICAgICdhZGRyZXNzJyxcbiAgICAgICAgJ2FydGljbGUnLFxuICAgICAgICAnYXNpZGUnLFxuICAgICAgICAnYXVkaW8nLFxuICAgICAgICAnYicsXG4gICAgICAgICdibG9ja3F1b3RlJyxcbiAgICAgICAgJ2JvZHknLFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgJ2NhbnZhcycsXG4gICAgICAgICdjYXB0aW9uJyxcbiAgICAgICAgJ2NpdGUnLFxuICAgICAgICAnY29kZScsXG4gICAgICAgICdkZCcsXG4gICAgICAgICdkZWwnLFxuICAgICAgICAnZGV0YWlscycsXG4gICAgICAgICdkZm4nLFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgJ2RsJyxcbiAgICAgICAgJ2R0JyxcbiAgICAgICAgJ2VtJyxcbiAgICAgICAgJ2ZpZWxkc2V0JyxcbiAgICAgICAgJ2ZpZ2NhcHRpb24nLFxuICAgICAgICAnZmlndXJlJyxcbiAgICAgICAgJ2Zvb3RlcicsXG4gICAgICAgICdmb3JtJyxcbiAgICAgICAgJ2gxJyxcbiAgICAgICAgJ2gyJyxcbiAgICAgICAgJ2gzJyxcbiAgICAgICAgJ2g0JyxcbiAgICAgICAgJ2g1JyxcbiAgICAgICAgJ2g2JyxcbiAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICdoZ3JvdXAnLFxuICAgICAgICAnaHRtbCcsXG4gICAgICAgICdpJyxcbiAgICAgICAgJ2lmcmFtZScsXG4gICAgICAgICdpbWcnLFxuICAgICAgICAnaW5wdXQnLFxuICAgICAgICAnaW5zJyxcbiAgICAgICAgJ2tiZCcsXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICdsZWdlbmQnLFxuICAgICAgICAnbGknLFxuICAgICAgICAnbWFpbicsXG4gICAgICAgICdtYXJrJyxcbiAgICAgICAgJ21lbnUnLFxuICAgICAgICAnbmF2JyxcbiAgICAgICAgJ29iamVjdCcsXG4gICAgICAgICdvbCcsXG4gICAgICAgICdwJyxcbiAgICAgICAgJ3EnLFxuICAgICAgICAncXVvdGUnLFxuICAgICAgICAnc2FtcCcsXG4gICAgICAgICdzZWN0aW9uJyxcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICAnc3Ryb25nJyxcbiAgICAgICAgJ3N1bW1hcnknLFxuICAgICAgICAnc3VwJyxcbiAgICAgICAgJ3RhYmxlJyxcbiAgICAgICAgJ3Rib2R5JyxcbiAgICAgICAgJ3RkJyxcbiAgICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICAgJ3Rmb290JyxcbiAgICAgICAgJ3RoJyxcbiAgICAgICAgJ3RoZWFkJyxcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICAndHInLFxuICAgICAgICAndWwnLFxuICAgICAgICAndmFyJyxcbiAgICAgICAgJ3ZpZGVvJyxcbiAgICAgIF0sXG4gICAgICB0ID0gW1xuICAgICAgICAnYW55LWhvdmVyJyxcbiAgICAgICAgJ2FueS1wb2ludGVyJyxcbiAgICAgICAgJ2FzcGVjdC1yYXRpbycsXG4gICAgICAgICdjb2xvcicsXG4gICAgICAgICdjb2xvci1nYW11dCcsXG4gICAgICAgICdjb2xvci1pbmRleCcsXG4gICAgICAgICdkZXZpY2UtYXNwZWN0LXJhdGlvJyxcbiAgICAgICAgJ2RldmljZS1oZWlnaHQnLFxuICAgICAgICAnZGV2aWNlLXdpZHRoJyxcbiAgICAgICAgJ2Rpc3BsYXktbW9kZScsXG4gICAgICAgICdmb3JjZWQtY29sb3JzJyxcbiAgICAgICAgJ2dyaWQnLFxuICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgJ2hvdmVyJyxcbiAgICAgICAgJ2ludmVydGVkLWNvbG9ycycsXG4gICAgICAgICdtb25vY2hyb21lJyxcbiAgICAgICAgJ29yaWVudGF0aW9uJyxcbiAgICAgICAgJ292ZXJmbG93LWJsb2NrJyxcbiAgICAgICAgJ292ZXJmbG93LWlubGluZScsXG4gICAgICAgICdwb2ludGVyJyxcbiAgICAgICAgJ3ByZWZlcnMtY29sb3Itc2NoZW1lJyxcbiAgICAgICAgJ3ByZWZlcnMtY29udHJhc3QnLFxuICAgICAgICAncHJlZmVycy1yZWR1Y2VkLW1vdGlvbicsXG4gICAgICAgICdwcmVmZXJzLXJlZHVjZWQtdHJhbnNwYXJlbmN5JyxcbiAgICAgICAgJ3Jlc29sdXRpb24nLFxuICAgICAgICAnc2NhbicsXG4gICAgICAgICdzY3JpcHRpbmcnLFxuICAgICAgICAndXBkYXRlJyxcbiAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgJ21pbi13aWR0aCcsXG4gICAgICAgICdtYXgtd2lkdGgnLFxuICAgICAgICAnbWluLWhlaWdodCcsXG4gICAgICAgICdtYXgtaGVpZ2h0JyxcbiAgICAgIF0sXG4gICAgICBpID0gW1xuICAgICAgICAnYWN0aXZlJyxcbiAgICAgICAgJ2FueS1saW5rJyxcbiAgICAgICAgJ2JsYW5rJyxcbiAgICAgICAgJ2NoZWNrZWQnLFxuICAgICAgICAnY3VycmVudCcsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RlZmluZWQnLFxuICAgICAgICAnZGlyJyxcbiAgICAgICAgJ2Rpc2FibGVkJyxcbiAgICAgICAgJ2Ryb3AnLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZW5hYmxlZCcsXG4gICAgICAgICdmaXJzdCcsXG4gICAgICAgICdmaXJzdC1jaGlsZCcsXG4gICAgICAgICdmaXJzdC1vZi10eXBlJyxcbiAgICAgICAgJ2Z1bGxzY3JlZW4nLFxuICAgICAgICAnZnV0dXJlJyxcbiAgICAgICAgJ2ZvY3VzJyxcbiAgICAgICAgJ2ZvY3VzLXZpc2libGUnLFxuICAgICAgICAnZm9jdXMtd2l0aGluJyxcbiAgICAgICAgJ2hhcycsXG4gICAgICAgICdob3N0JyxcbiAgICAgICAgJ2hvc3QtY29udGV4dCcsXG4gICAgICAgICdob3ZlcicsXG4gICAgICAgICdpbmRldGVybWluYXRlJyxcbiAgICAgICAgJ2luLXJhbmdlJyxcbiAgICAgICAgJ2ludmFsaWQnLFxuICAgICAgICAnaXMnLFxuICAgICAgICAnbGFuZycsXG4gICAgICAgICdsYXN0LWNoaWxkJyxcbiAgICAgICAgJ2xhc3Qtb2YtdHlwZScsXG4gICAgICAgICdsZWZ0JyxcbiAgICAgICAgJ2xpbmsnLFxuICAgICAgICAnbG9jYWwtbGluaycsXG4gICAgICAgICdub3QnLFxuICAgICAgICAnbnRoLWNoaWxkJyxcbiAgICAgICAgJ250aC1jb2wnLFxuICAgICAgICAnbnRoLWxhc3QtY2hpbGQnLFxuICAgICAgICAnbnRoLWxhc3QtY29sJyxcbiAgICAgICAgJ250aC1sYXN0LW9mLXR5cGUnLFxuICAgICAgICAnbnRoLW9mLXR5cGUnLFxuICAgICAgICAnb25seS1jaGlsZCcsXG4gICAgICAgICdvbmx5LW9mLXR5cGUnLFxuICAgICAgICAnb3B0aW9uYWwnLFxuICAgICAgICAnb3V0LW9mLXJhbmdlJyxcbiAgICAgICAgJ3Bhc3QnLFxuICAgICAgICAncGxhY2Vob2xkZXItc2hvd24nLFxuICAgICAgICAncmVhZC1vbmx5JyxcbiAgICAgICAgJ3JlYWQtd3JpdGUnLFxuICAgICAgICAncmVxdWlyZWQnLFxuICAgICAgICAncmlnaHQnLFxuICAgICAgICAncm9vdCcsXG4gICAgICAgICdzY29wZScsXG4gICAgICAgICd0YXJnZXQnLFxuICAgICAgICAndGFyZ2V0LXdpdGhpbicsXG4gICAgICAgICd1c2VyLWludmFsaWQnLFxuICAgICAgICAndmFsaWQnLFxuICAgICAgICAndmlzaXRlZCcsXG4gICAgICAgICd3aGVyZScsXG4gICAgICBdLFxuICAgICAgbyA9IFtcbiAgICAgICAgJ2FmdGVyJyxcbiAgICAgICAgJ2JhY2tkcm9wJyxcbiAgICAgICAgJ2JlZm9yZScsXG4gICAgICAgICdjdWUnLFxuICAgICAgICAnY3VlLXJlZ2lvbicsXG4gICAgICAgICdmaXJzdC1sZXR0ZXInLFxuICAgICAgICAnZmlyc3QtbGluZScsXG4gICAgICAgICdncmFtbWFyLWVycm9yJyxcbiAgICAgICAgJ21hcmtlcicsXG4gICAgICAgICdwYXJ0JyxcbiAgICAgICAgJ3BsYWNlaG9sZGVyJyxcbiAgICAgICAgJ3NlbGVjdGlvbicsXG4gICAgICAgICdzbG90dGVkJyxcbiAgICAgICAgJ3NwZWxsaW5nLWVycm9yJyxcbiAgICAgIF0sXG4gICAgICByID0gW1xuICAgICAgICAnYWxpZ24tY29udGVudCcsXG4gICAgICAgICdhbGlnbi1pdGVtcycsXG4gICAgICAgICdhbGlnbi1zZWxmJyxcbiAgICAgICAgJ2FuaW1hdGlvbicsXG4gICAgICAgICdhbmltYXRpb24tZGVsYXknLFxuICAgICAgICAnYW5pbWF0aW9uLWRpcmVjdGlvbicsXG4gICAgICAgICdhbmltYXRpb24tZHVyYXRpb24nLFxuICAgICAgICAnYW5pbWF0aW9uLWZpbGwtbW9kZScsXG4gICAgICAgICdhbmltYXRpb24taXRlcmF0aW9uLWNvdW50JyxcbiAgICAgICAgJ2FuaW1hdGlvbi1uYW1lJyxcbiAgICAgICAgJ2FuaW1hdGlvbi1wbGF5LXN0YXRlJyxcbiAgICAgICAgJ2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24nLFxuICAgICAgICAnYXV0bycsXG4gICAgICAgICdiYWNrZmFjZS12aXNpYmlsaXR5JyxcbiAgICAgICAgJ2JhY2tncm91bmQnLFxuICAgICAgICAnYmFja2dyb3VuZC1hdHRhY2htZW50JyxcbiAgICAgICAgJ2JhY2tncm91bmQtY2xpcCcsXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnLFxuICAgICAgICAnYmFja2dyb3VuZC1vcmlnaW4nLFxuICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbicsXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCcsXG4gICAgICAgICdiYWNrZ3JvdW5kLXNpemUnLFxuICAgICAgICAnYm9yZGVyJyxcbiAgICAgICAgJ2JvcmRlci1ib3R0b20nLFxuICAgICAgICAnYm9yZGVyLWJvdHRvbS1jb2xvcicsXG4gICAgICAgICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJyxcbiAgICAgICAgJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJyxcbiAgICAgICAgJ2JvcmRlci1ib3R0b20tc3R5bGUnLFxuICAgICAgICAnYm9yZGVyLWJvdHRvbS13aWR0aCcsXG4gICAgICAgICdib3JkZXItY29sbGFwc2UnLFxuICAgICAgICAnYm9yZGVyLWNvbG9yJyxcbiAgICAgICAgJ2JvcmRlci1pbWFnZScsXG4gICAgICAgICdib3JkZXItaW1hZ2Utb3V0c2V0JyxcbiAgICAgICAgJ2JvcmRlci1pbWFnZS1yZXBlYXQnLFxuICAgICAgICAnYm9yZGVyLWltYWdlLXNsaWNlJyxcbiAgICAgICAgJ2JvcmRlci1pbWFnZS1zb3VyY2UnLFxuICAgICAgICAnYm9yZGVyLWltYWdlLXdpZHRoJyxcbiAgICAgICAgJ2JvcmRlci1sZWZ0JyxcbiAgICAgICAgJ2JvcmRlci1sZWZ0LWNvbG9yJyxcbiAgICAgICAgJ2JvcmRlci1sZWZ0LXN0eWxlJyxcbiAgICAgICAgJ2JvcmRlci1sZWZ0LXdpZHRoJyxcbiAgICAgICAgJ2JvcmRlci1yYWRpdXMnLFxuICAgICAgICAnYm9yZGVyLXJpZ2h0JyxcbiAgICAgICAgJ2JvcmRlci1yaWdodC1jb2xvcicsXG4gICAgICAgICdib3JkZXItcmlnaHQtc3R5bGUnLFxuICAgICAgICAnYm9yZGVyLXJpZ2h0LXdpZHRoJyxcbiAgICAgICAgJ2JvcmRlci1zcGFjaW5nJyxcbiAgICAgICAgJ2JvcmRlci1zdHlsZScsXG4gICAgICAgICdib3JkZXItdG9wJyxcbiAgICAgICAgJ2JvcmRlci10b3AtY29sb3InLFxuICAgICAgICAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsXG4gICAgICAgICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycsXG4gICAgICAgICdib3JkZXItdG9wLXN0eWxlJyxcbiAgICAgICAgJ2JvcmRlci10b3Atd2lkdGgnLFxuICAgICAgICAnYm9yZGVyLXdpZHRoJyxcbiAgICAgICAgJ2JvdHRvbScsXG4gICAgICAgICdib3gtZGVjb3JhdGlvbi1icmVhaycsXG4gICAgICAgICdib3gtc2hhZG93JyxcbiAgICAgICAgJ2JveC1zaXppbmcnLFxuICAgICAgICAnYnJlYWstYWZ0ZXInLFxuICAgICAgICAnYnJlYWstYmVmb3JlJyxcbiAgICAgICAgJ2JyZWFrLWluc2lkZScsXG4gICAgICAgICdjYXB0aW9uLXNpZGUnLFxuICAgICAgICAnY2xlYXInLFxuICAgICAgICAnY2xpcCcsXG4gICAgICAgICdjbGlwLXBhdGgnLFxuICAgICAgICAnY29sb3InLFxuICAgICAgICAnY29sdW1uLWNvdW50JyxcbiAgICAgICAgJ2NvbHVtbi1maWxsJyxcbiAgICAgICAgJ2NvbHVtbi1nYXAnLFxuICAgICAgICAnY29sdW1uLXJ1bGUnLFxuICAgICAgICAnY29sdW1uLXJ1bGUtY29sb3InLFxuICAgICAgICAnY29sdW1uLXJ1bGUtc3R5bGUnLFxuICAgICAgICAnY29sdW1uLXJ1bGUtd2lkdGgnLFxuICAgICAgICAnY29sdW1uLXNwYW4nLFxuICAgICAgICAnY29sdW1uLXdpZHRoJyxcbiAgICAgICAgJ2NvbHVtbnMnLFxuICAgICAgICAnY29udGVudCcsXG4gICAgICAgICdjb3VudGVyLWluY3JlbWVudCcsXG4gICAgICAgICdjb3VudGVyLXJlc2V0JyxcbiAgICAgICAgJ2N1cnNvcicsXG4gICAgICAgICdkaXJlY3Rpb24nLFxuICAgICAgICAnZGlzcGxheScsXG4gICAgICAgICdlbXB0eS1jZWxscycsXG4gICAgICAgICdmaWx0ZXInLFxuICAgICAgICAnZmxleCcsXG4gICAgICAgICdmbGV4LWJhc2lzJyxcbiAgICAgICAgJ2ZsZXgtZGlyZWN0aW9uJyxcbiAgICAgICAgJ2ZsZXgtZmxvdycsXG4gICAgICAgICdmbGV4LWdyb3cnLFxuICAgICAgICAnZmxleC1zaHJpbmsnLFxuICAgICAgICAnZmxleC13cmFwJyxcbiAgICAgICAgJ2Zsb2F0JyxcbiAgICAgICAgJ2ZvbnQnLFxuICAgICAgICAnZm9udC1kaXNwbGF5JyxcbiAgICAgICAgJ2ZvbnQtZmFtaWx5JyxcbiAgICAgICAgJ2ZvbnQtZmVhdHVyZS1zZXR0aW5ncycsXG4gICAgICAgICdmb250LWtlcm5pbmcnLFxuICAgICAgICAnZm9udC1sYW5ndWFnZS1vdmVycmlkZScsXG4gICAgICAgICdmb250LXNpemUnLFxuICAgICAgICAnZm9udC1zaXplLWFkanVzdCcsXG4gICAgICAgICdmb250LXNtb290aGluZycsXG4gICAgICAgICdmb250LXN0cmV0Y2gnLFxuICAgICAgICAnZm9udC1zdHlsZScsXG4gICAgICAgICdmb250LXZhcmlhbnQnLFxuICAgICAgICAnZm9udC12YXJpYW50LWxpZ2F0dXJlcycsXG4gICAgICAgICdmb250LXZhcmlhdGlvbi1zZXR0aW5ncycsXG4gICAgICAgICdmb250LXdlaWdodCcsXG4gICAgICAgICdoZWlnaHQnLFxuICAgICAgICAnaHlwaGVucycsXG4gICAgICAgICdpY29uJyxcbiAgICAgICAgJ2ltYWdlLW9yaWVudGF0aW9uJyxcbiAgICAgICAgJ2ltYWdlLXJlbmRlcmluZycsXG4gICAgICAgICdpbWFnZS1yZXNvbHV0aW9uJyxcbiAgICAgICAgJ2ltZS1tb2RlJyxcbiAgICAgICAgJ2luaGVyaXQnLFxuICAgICAgICAnaW5pdGlhbCcsXG4gICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnLFxuICAgICAgICAnbGVmdCcsXG4gICAgICAgICdsZXR0ZXItc3BhY2luZycsXG4gICAgICAgICdsaW5lLWhlaWdodCcsXG4gICAgICAgICdsaXN0LXN0eWxlJyxcbiAgICAgICAgJ2xpc3Qtc3R5bGUtaW1hZ2UnLFxuICAgICAgICAnbGlzdC1zdHlsZS1wb3NpdGlvbicsXG4gICAgICAgICdsaXN0LXN0eWxlLXR5cGUnLFxuICAgICAgICAnbWFyZ2luJyxcbiAgICAgICAgJ21hcmdpbi1ib3R0b20nLFxuICAgICAgICAnbWFyZ2luLWxlZnQnLFxuICAgICAgICAnbWFyZ2luLXJpZ2h0JyxcbiAgICAgICAgJ21hcmdpbi10b3AnLFxuICAgICAgICAnbWFya3MnLFxuICAgICAgICAnbWFzaycsXG4gICAgICAgICdtYXgtaGVpZ2h0JyxcbiAgICAgICAgJ21heC13aWR0aCcsXG4gICAgICAgICdtaW4taGVpZ2h0JyxcbiAgICAgICAgJ21pbi13aWR0aCcsXG4gICAgICAgICduYXYtZG93bicsXG4gICAgICAgICduYXYtaW5kZXgnLFxuICAgICAgICAnbmF2LWxlZnQnLFxuICAgICAgICAnbmF2LXJpZ2h0JyxcbiAgICAgICAgJ25hdi11cCcsXG4gICAgICAgICdub25lJyxcbiAgICAgICAgJ25vcm1hbCcsXG4gICAgICAgICdvYmplY3QtZml0JyxcbiAgICAgICAgJ29iamVjdC1wb3NpdGlvbicsXG4gICAgICAgICdvcGFjaXR5JyxcbiAgICAgICAgJ29yZGVyJyxcbiAgICAgICAgJ29ycGhhbnMnLFxuICAgICAgICAnb3V0bGluZScsXG4gICAgICAgICdvdXRsaW5lLWNvbG9yJyxcbiAgICAgICAgJ291dGxpbmUtb2Zmc2V0JyxcbiAgICAgICAgJ291dGxpbmUtc3R5bGUnLFxuICAgICAgICAnb3V0bGluZS13aWR0aCcsXG4gICAgICAgICdvdmVyZmxvdycsXG4gICAgICAgICdvdmVyZmxvdy13cmFwJyxcbiAgICAgICAgJ292ZXJmbG93LXgnLFxuICAgICAgICAnb3ZlcmZsb3cteScsXG4gICAgICAgICdwYWRkaW5nJyxcbiAgICAgICAgJ3BhZGRpbmctYm90dG9tJyxcbiAgICAgICAgJ3BhZGRpbmctbGVmdCcsXG4gICAgICAgICdwYWRkaW5nLXJpZ2h0JyxcbiAgICAgICAgJ3BhZGRpbmctdG9wJyxcbiAgICAgICAgJ3BhZ2UtYnJlYWstYWZ0ZXInLFxuICAgICAgICAncGFnZS1icmVhay1iZWZvcmUnLFxuICAgICAgICAncGFnZS1icmVhay1pbnNpZGUnLFxuICAgICAgICAncGVyc3BlY3RpdmUnLFxuICAgICAgICAncGVyc3BlY3RpdmUtb3JpZ2luJyxcbiAgICAgICAgJ3BvaW50ZXItZXZlbnRzJyxcbiAgICAgICAgJ3Bvc2l0aW9uJyxcbiAgICAgICAgJ3F1b3RlcycsXG4gICAgICAgICdyZXNpemUnLFxuICAgICAgICAncmlnaHQnLFxuICAgICAgICAnc3JjJyxcbiAgICAgICAgJ3RhYi1zaXplJyxcbiAgICAgICAgJ3RhYmxlLWxheW91dCcsXG4gICAgICAgICd0ZXh0LWFsaWduJyxcbiAgICAgICAgJ3RleHQtYWxpZ24tbGFzdCcsXG4gICAgICAgICd0ZXh0LWRlY29yYXRpb24nLFxuICAgICAgICAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJyxcbiAgICAgICAgJ3RleHQtZGVjb3JhdGlvbi1saW5lJyxcbiAgICAgICAgJ3RleHQtZGVjb3JhdGlvbi1zdHlsZScsXG4gICAgICAgICd0ZXh0LWluZGVudCcsXG4gICAgICAgICd0ZXh0LW92ZXJmbG93JyxcbiAgICAgICAgJ3RleHQtcmVuZGVyaW5nJyxcbiAgICAgICAgJ3RleHQtc2hhZG93JyxcbiAgICAgICAgJ3RleHQtdHJhbnNmb3JtJyxcbiAgICAgICAgJ3RleHQtdW5kZXJsaW5lLXBvc2l0aW9uJyxcbiAgICAgICAgJ3RvcCcsXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbicsXG4gICAgICAgICd0cmFuc2Zvcm0tc3R5bGUnLFxuICAgICAgICAndHJhbnNpdGlvbicsXG4gICAgICAgICd0cmFuc2l0aW9uLWRlbGF5JyxcbiAgICAgICAgJ3RyYW5zaXRpb24tZHVyYXRpb24nLFxuICAgICAgICAndHJhbnNpdGlvbi1wcm9wZXJ0eScsXG4gICAgICAgICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbicsXG4gICAgICAgICd1bmljb2RlLWJpZGknLFxuICAgICAgICAndmVydGljYWwtYWxpZ24nLFxuICAgICAgICAndmlzaWJpbGl0eScsXG4gICAgICAgICd3aGl0ZS1zcGFjZScsXG4gICAgICAgICd3aWRvd3MnLFxuICAgICAgICAnd2lkdGgnLFxuICAgICAgICAnd29yZC1icmVhaycsXG4gICAgICAgICd3b3JkLXNwYWNpbmcnLFxuICAgICAgICAnd29yZC13cmFwJyxcbiAgICAgICAgJ3otaW5kZXgnLFxuICAgICAgXS5yZXZlcnNlKClcbiAgICByZXR1cm4gbiA9PiB7XG4gICAgICBjb25zdCBhID0gKGUgPT4gKHtcbiAgICAgICAgICBJTVBPUlRBTlQ6IHsgY2xhc3NOYW1lOiAnbWV0YScsIGJlZ2luOiAnIWltcG9ydGFudCcgfSxcbiAgICAgICAgICBIRVhDT0xPUjoge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIGJlZ2luOiAnIyhbYS1mQS1GMC05XXs2fXxbYS1mQS1GMC05XXszfSknLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgQVRUUklCVVRFX1NFTEVDVE9SX01PREU6IHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLWF0dHInLFxuICAgICAgICAgICAgYmVnaW46IC9cXFsvLFxuICAgICAgICAgICAgZW5kOiAvXFxdLyxcbiAgICAgICAgICAgIGlsbGVnYWw6ICckJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5BUE9TX1NUUklOR19NT0RFLCBlLlFVT1RFX1NUUklOR19NT0RFXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSkobiksXG4gICAgICAgIGwgPSBbbi5BUE9TX1NUUklOR19NT0RFLCBuLlFVT1RFX1NUUklOR19NT0RFXVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0NTUycsXG4gICAgICAgIGNhc2VfaW5zZW5zaXRpdmU6ICEwLFxuICAgICAgICBpbGxlZ2FsOiAvWz18J1xcJF0vLFxuICAgICAgICBrZXl3b3JkczogeyBrZXlmcmFtZVBvc2l0aW9uOiAnZnJvbSB0bycgfSxcbiAgICAgICAgY2xhc3NOYW1lQWxpYXNlczogeyBrZXlmcmFtZVBvc2l0aW9uOiAnc2VsZWN0b3ItdGFnJyB9LFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIG4uQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgeyBiZWdpbjogLy0od2Via2l0fG1venxtc3xvKS0oPz1bYS16XSkvIH0sXG4gICAgICAgICAgbi5DU1NfTlVNQkVSX01PREUsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdzZWxlY3Rvci1pZCcsIGJlZ2luOiAvI1tBLVphLXowLTlfLV0rLywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItY2xhc3MnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcLlthLXpBLVotXVthLXpBLVowLTlfLV0qJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGEuQVRUUklCVVRFX1NFTEVDVE9SX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItcHNldWRvJyxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJzooJyArIGkuam9pbignfCcpICsgJyknLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAnOjooJyArIG8uam9pbignfCcpICsgJyknIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIoJyArIHIuam9pbignfCcpICsgJylcXFxcYicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJzonLFxuICAgICAgICAgICAgZW5kOiAnWzt9XScsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBhLkhFWENPTE9SLFxuICAgICAgICAgICAgICBhLklNUE9SVEFOVCxcbiAgICAgICAgICAgICAgbi5DU1NfTlVNQkVSX01PREUsXG4gICAgICAgICAgICAgIC4uLmwsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogLyh1cmx8ZGF0YS11cmkpXFwoLyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICBrZXl3b3JkczogeyBidWlsdF9pbjogJ3VybCBkYXRhLXVyaScgfSxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogL1teKV0vLFxuICAgICAgICAgICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogITAsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2J1aWx0X2luJywgYmVnaW46IC9bXFx3LV0rKD89XFwoKS8gfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgKChzID0gL0AvKSxcbiAgICAgICAgICAgICAgKCguLi5lKSA9PlxuICAgICAgICAgICAgICAgIGVcbiAgICAgICAgICAgICAgICAgIC5tYXAoZSA9PlxuICAgICAgICAgICAgICAgICAgICAoZSA9PiAoZSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgZSA/IGUgOiBlLnNvdXJjZSkgOiBudWxsKSkoZSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcnKSkoJyg/PScsIHMsICcpJykpLFxuICAgICAgICAgICAgZW5kOiAnW3s7XScsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBpbGxlZ2FsOiAvOi8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2tleXdvcmQnLCBiZWdpbjogL0AtP1xcd1tcXHddKigtXFx3KykqLyB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC9cXHMvLFxuICAgICAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiAhMCxcbiAgICAgICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgICAgICAgICRwYXR0ZXJuOiAvW2Etei1dKy8sXG4gICAgICAgICAgICAgICAgICBrZXl3b3JkOiAnYW5kIG9yIG5vdCBvbmx5JyxcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogdC5qb2luKCcgJyksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgeyBiZWdpbjogL1thLXotXSsoPz06KS8sIGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScgfSxcbiAgICAgICAgICAgICAgICAgIC4uLmwsXG4gICAgICAgICAgICAgICAgICBuLkNTU19OVU1CRVJfTU9ERSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnc2VsZWN0b3ItdGFnJywgYmVnaW46ICdcXFxcYignICsgZS5qb2luKCd8JykgKyAnKVxcXFxiJyB9LFxuICAgICAgICBdLFxuICAgICAgfVxuICAgICAgdmFyIHNcbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ2RpZmYnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIHJldHVybiBlID0+ICh7XG4gICAgICBuYW1lOiAnRGlmZicsXG4gICAgICBhbGlhc2VzOiBbJ3BhdGNoJ10sXG4gICAgICBjb250YWluczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgcmVsZXZhbmNlOiAxMCxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL15AQCArLVxcZCssXFxkKyArXFwrXFxkKyxcXGQrICtAQC8sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL15cXCpcXCpcXCogK1xcZCssXFxkKyArXFwqXFwqXFwqXFwqJC8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC9eLS0tICtcXGQrLFxcZCsgKy0tLS0kLyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAvSW5kZXg6IC8sIGVuZDogLyQvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXmluZGV4LywgZW5kOiAvJC8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC89ezMsfS8sIGVuZDogLyQvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXi17M30vLCBlbmQ6IC8kLyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL15cXCp7M30gLywgZW5kOiAvJC8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9eXFwrezN9LywgZW5kOiAvJC8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9eXFwqezE1fSQvIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXmRpZmYgLS1naXQvLFxuICAgICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdhZGRpdGlvbicsIGJlZ2luOiAvXlxcKy8sIGVuZDogLyQvIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdkZWxldGlvbicsXG4gICAgICAgICAgYmVnaW46IC9eLS8sXG4gICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgIH0sXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnYWRkaXRpb24nLCBiZWdpbjogL14hLywgZW5kOiAvJC8gfSxcbiAgICAgIF0sXG4gICAgfSlcbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnZ28nLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIHJldHVybiBlID0+IHtcbiAgICAgIGNvbnN0IG4gPSB7XG4gICAgICAgIGtleXdvcmQ6XG4gICAgICAgICAgJ2JyZWFrIGRlZmF1bHQgZnVuYyBpbnRlcmZhY2Ugc2VsZWN0IGNhc2UgbWFwIHN0cnVjdCBjaGFuIGVsc2UgZ290byBwYWNrYWdlIHN3aXRjaCBjb25zdCBmYWxsdGhyb3VnaCBpZiByYW5nZSB0eXBlIGNvbnRpbnVlIGZvciBpbXBvcnQgcmV0dXJuIHZhciBnbyBkZWZlciBib29sIGJ5dGUgY29tcGxleDY0IGNvbXBsZXgxMjggZmxvYXQzMiBmbG9hdDY0IGludDggaW50MTYgaW50MzIgaW50NjQgc3RyaW5nIHVpbnQ4IHVpbnQxNiB1aW50MzIgdWludDY0IGludCB1aW50IHVpbnRwdHIgcnVuZScsXG4gICAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIGlvdGEgbmlsJyxcbiAgICAgICAgYnVpbHRfaW46XG4gICAgICAgICAgJ2FwcGVuZCBjYXAgY2xvc2UgY29tcGxleCBjb3B5IGltYWcgbGVuIG1ha2UgbmV3IHBhbmljIHByaW50IHByaW50bG4gcmVhbCByZWNvdmVyIGRlbGV0ZScsXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnR28nLFxuICAgICAgICBhbGlhc2VzOiBbJ2dvbGFuZyddLFxuICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgaWxsZWdhbDogJzwvJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBlLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgZS5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgZS5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgZS5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICB7IGJlZ2luOiAnYCcsIGVuZDogJ2AnIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW46IGUuQ19OVU1CRVJfUkUgKyAnW2ldJywgcmVsZXZhbmNlOiAxIH0sXG4gICAgICAgICAgICAgIGUuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGJlZ2luOiAvOj0vIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmMnLFxuICAgICAgICAgICAgZW5kOiAnXFxcXHMqKFxcXFx7fCQpJyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgZS5USVRMRV9NT0RFLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgICAgICAgICBpbGxlZ2FsOiAvW1wiJ10vLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnaHR0cCcsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgZnVuY3Rpb24gZSguLi5lKSB7XG4gICAgICByZXR1cm4gZVxuICAgICAgICAubWFwKGUgPT4ge1xuICAgICAgICAgIHJldHVybiAobiA9IGUpID8gKCdzdHJpbmcnID09IHR5cGVvZiBuID8gbiA6IG4uc291cmNlKSA6IG51bGxcbiAgICAgICAgICB2YXIgblxuICAgICAgICB9KVxuICAgICAgICAuam9pbignJylcbiAgICB9XG4gICAgcmV0dXJuIG4gPT4ge1xuICAgICAgY29uc3QgYSA9ICdIVFRQLygyfDFcXFxcLlswMV0pJyxcbiAgICAgICAgcyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICAgIGJlZ2luOiBlKCdeJywgL1tBLVphLXpdW0EtWmEtejAtOS1dKi8sICcoPz1cXFxcOlxcXFxzKScpLFxuICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3B1bmN0dWF0aW9uJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogLzogLyxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgc3RhcnRzOiB7IGVuZDogJyQnLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdCA9IFtcbiAgICAgICAgICBzLFxuICAgICAgICAgIHsgYmVnaW46ICdcXFxcblxcXFxuJywgc3RhcnRzOiB7IHN1Ykxhbmd1YWdlOiBbXSwgZW5kc1dpdGhQYXJlbnQ6ICEwIH0gfSxcbiAgICAgICAgXVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ0hUVFAnLFxuICAgICAgICBhbGlhc2VzOiBbJ2h0dHBzJ10sXG4gICAgICAgIGlsbGVnYWw6IC9cXFMvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXig/PScgKyBhICsgJyBcXFxcZHszfSknLFxuICAgICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ21ldGEnLCBiZWdpbjogYSB9LFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ251bWJlcicsIGJlZ2luOiAnXFxcXGJcXFxcZHszfVxcXFxiJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXJ0czogeyBlbmQ6IC9cXGJcXEIvLCBpbGxlZ2FsOiAvXFxTLywgY29udGFpbnM6IHQgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnKD89XltBLVpdKyAoLio/KSAnICsgYSArICckKScsXG4gICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAnICcsXG4gICAgICAgICAgICAgICAgZW5kOiAnICcsXG4gICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46IGEgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAnW0EtWl0rJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGFydHM6IHsgZW5kOiAvXFxiXFxCLywgaWxsZWdhbDogL1xcUy8sIGNvbnRhaW5zOiB0IH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuLmluaGVyaXQocywgeyByZWxldmFuY2U6IDAgfSksXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdpbmknLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIGZ1bmN0aW9uIGUoZSkge1xuICAgICAgcmV0dXJuIGUgPyAoJ3N0cmluZycgPT0gdHlwZW9mIGUgPyBlIDogZS5zb3VyY2UpIDogbnVsbFxuICAgIH1cbiAgICBmdW5jdGlvbiBuKC4uLm4pIHtcbiAgICAgIHJldHVybiBuLm1hcChuID0+IGUobikpLmpvaW4oJycpXG4gICAgfVxuICAgIHJldHVybiBzID0+IHtcbiAgICAgIGNvbnN0IGEgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgdmFyaWFudHM6IFt7IGJlZ2luOiAvKFsrLV0rKT9bXFxkXStfW1xcZF9dKy8gfSwgeyBiZWdpbjogcy5OVU1CRVJfUkUgfV0sXG4gICAgICAgIH0sXG4gICAgICAgIGkgPSBzLkNPTU1FTlQoKVxuICAgICAgaS52YXJpYW50cyA9IFtcbiAgICAgICAgeyBiZWdpbjogLzsvLCBlbmQ6IC8kLyB9LFxuICAgICAgICB7IGJlZ2luOiAvIy8sIGVuZDogLyQvIH0sXG4gICAgICBdXG4gICAgICBjb25zdCB0ID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgICB2YXJpYW50czogW3sgYmVnaW46IC9cXCRbXFx3XFxkXCJdW1xcd1xcZF9dKi8gfSwgeyBiZWdpbjogL1xcJFxceyguKj8pXFx9LyB9XSxcbiAgICAgICAgfSxcbiAgICAgICAgciA9IHsgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsIGJlZ2luOiAvXFxib258b2ZmfHRydWV8ZmFsc2V8eWVzfG5vXFxiLyB9LFxuICAgICAgICBsID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgY29udGFpbnM6IFtzLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiBcIicnJ1wiLCBlbmQ6IFwiJycnXCIsIHJlbGV2YW5jZTogMTAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46ICdcIlwiXCInLCBlbmQ6ICdcIlwiXCInLCByZWxldmFuY2U6IDEwIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAnXCInLCBlbmQ6ICdcIicgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IFwiJ1wiLCBlbmQ6IFwiJ1wiIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgYyA9IHtcbiAgICAgICAgICBiZWdpbjogL1xcWy8sXG4gICAgICAgICAgZW5kOiAvXFxdLyxcbiAgICAgICAgICBjb250YWluczogW2ksIHIsIHQsIGwsIGEsICdzZWxmJ10sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9LFxuICAgICAgICBnID1cbiAgICAgICAgICAnKCcgK1xuICAgICAgICAgIFsvW0EtWmEtejAtOV8tXSsvLCAvXCIoXFxcXFwifFteXCJdKSpcIi8sIC8nW14nXSonL11cbiAgICAgICAgICAgIC5tYXAobiA9PiBlKG4pKVxuICAgICAgICAgICAgLmpvaW4oJ3wnKSArXG4gICAgICAgICAgJyknXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnVE9NTCwgYWxzbyBJTkknLFxuICAgICAgICBhbGlhc2VzOiBbJ3RvbWwnXSxcbiAgICAgICAgY2FzZV9pbnNlbnNpdGl2ZTogITAsXG4gICAgICAgIGlsbGVnYWw6IC9cXFMvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGksXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdzZWN0aW9uJywgYmVnaW46IC9cXFsrLywgZW5kOiAvXFxdKy8gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogbihcbiAgICAgICAgICAgICAgZyxcbiAgICAgICAgICAgICAgJyhcXFxccypcXFxcLlxcXFxzKicsXG4gICAgICAgICAgICAgIGcsXG4gICAgICAgICAgICAgICcpKicsXG4gICAgICAgICAgICAgIG4oJyg/PScsIC9cXHMqPVxccypbXiNcXHNdLywgJyknKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICAgICAgc3RhcnRzOiB7IGVuZDogLyQvLCBjb250YWluczogW2ksIGMsIHIsIHQsIGwsIGFdIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ2phdmEnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIHZhciBlID0gJ1xcXFwuKFswLTldKF8qWzAtOV0pKiknLFxuICAgICAgbiA9ICdbMC05YS1mQS1GXShfKlswLTlhLWZBLUZdKSonLFxuICAgICAgYSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogYChcXFxcYihbMC05XShfKlswLTldKSopKCgke2V9KXxcXFxcLik/fCgke2V9KSlbZUVdWystXT8oWzAtOV0oXypbMC05XSkqKVtmRmREXT9cXFxcYmAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGJlZ2luOiBgXFxcXGIoWzAtOV0oXypbMC05XSkqKSgoJHtlfSlbZkZkRF0/XFxcXGJ8XFxcXC4oW2ZGZERdXFxcXGIpPylgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IGAoJHtlfSlbZkZkRF0/XFxcXGJgLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBiZWdpbjogJ1xcXFxiKFswLTldKF8qWzAtOV0pKilbZkZkRF1cXFxcYicgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogYFxcXFxiMFt4WF0oKCR7bn0pXFxcXC4/fCgke259KT9cXFxcLigke259KSlbcFBdWystXT8oWzAtOV0oXypbMC05XSkqKVtmRmREXT9cXFxcYmAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnXFxcXGIoMHxbMS05XShfKlswLTldKSopW2xMXT9cXFxcYicgfSxcbiAgICAgICAgICB7IGJlZ2luOiBgXFxcXGIwW3hYXSgke259KVtsTF0/XFxcXGJgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdcXFxcYjAoXypbMC03XSkqW2xMXT9cXFxcYicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnXFxcXGIwW2JCXVswMV0oXypbMDFdKSpbbExdP1xcXFxiJyB9LFxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICB9XG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgdmFyIG4gPVxuICAgICAgICAgICdmYWxzZSBzeW5jaHJvbml6ZWQgaW50IGFic3RyYWN0IGZsb2F0IHByaXZhdGUgY2hhciBib29sZWFuIHZhciBzdGF0aWMgbnVsbCBpZiBjb25zdCBmb3IgdHJ1ZSB3aGlsZSBsb25nIHN0cmljdGZwIGZpbmFsbHkgcHJvdGVjdGVkIGltcG9ydCBuYXRpdmUgZmluYWwgdm9pZCBlbnVtIGVsc2UgYnJlYWsgdHJhbnNpZW50IGNhdGNoIGluc3RhbmNlb2YgYnl0ZSBzdXBlciB2b2xhdGlsZSBjYXNlIGFzc2VydCBzaG9ydCBwYWNrYWdlIGRlZmF1bHQgZG91YmxlIHB1YmxpYyB0cnkgdGhpcyBzd2l0Y2ggY29udGludWUgdGhyb3dzIHByb3RlY3RlZCBwdWJsaWMgcHJpdmF0ZSBtb2R1bGUgcmVxdWlyZXMgZXhwb3J0cyBkbycsXG4gICAgICAgIHMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgYmVnaW46ICdAW1xceGMwLVxcdTAyYjhhLXpBLVpfJF1bXFx4YzAtXFx1MDJiOGEtekEtWl8kMC05XSonLFxuICAgICAgICAgIGNvbnRhaW5zOiBbeyBiZWdpbjogL1xcKC8sIGVuZDogL1xcKS8sIGNvbnRhaW5zOiBbJ3NlbGYnXSB9XSxcbiAgICAgICAgfVxuICAgICAgY29uc3QgciA9IGFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdKYXZhJyxcbiAgICAgICAgYWxpYXNlczogWydqc3AnXSxcbiAgICAgICAga2V5d29yZHM6IG4sXG4gICAgICAgIGlsbGVnYWw6IC88XFwvfCMvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGUuQ09NTUVOVCgnL1xcXFwqXFxcXConLCAnXFxcXCovJywge1xuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgeyBiZWdpbjogL1xcdytALywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZG9jdGFnJywgYmVnaW46ICdAW0EtWmEtel0rJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL2ltcG9ydCBqYXZhXFwuW2Etel0rXFwuLyxcbiAgICAgICAgICAgIGtleXdvcmRzOiAnaW1wb3J0JyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGUuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBlLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGUuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICBlLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UgZW51bScsXG4gICAgICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMSxcbiAgICAgICAgICAgIGtleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlIGVudW0nLFxuICAgICAgICAgICAgaWxsZWdhbDogL1s6XCJcXFtcXF1dLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cycgfSxcbiAgICAgICAgICAgICAgZS5VTkRFUlNDT1JFX1RJVExFX01PREUsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ25ldyB0aHJvdyByZXR1cm4gZWxzZScsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgICAgICBiZWdpbjogJ3JlY29yZFxcXFxzKycgKyBlLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnXFxcXHMqXFxcXCgnLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW5LZXl3b3JkczogJ3JlY29yZCcgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiBlLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnXFxcXHMqXFxcXCgnLFxuICAgICAgICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtlLlVOREVSU0NPUkVfVElUTEVfTU9ERV0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICAgIGtleXdvcmRzOiBuLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICBjb250YWluczogW2UuQ19CTE9DS19DT01NRU5UX01PREVdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIGUuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICcoW1xceGMwLVxcdTAyYjhhLXpBLVpfJF1bXFx4YzAtXFx1MDJiOGEtekEtWl8kMC05XSooPFtcXHhjMC1cXHUwMmI4YS16QS1aXyRdW1xceGMwLVxcdTAyYjhhLXpBLVpfJDAtOV0qKFxcXFxzKixcXFxccypbXFx4YzAtXFx1MDJiOGEtekEtWl8kXVtcXHhjMC1cXHUwMmI4YS16QS1aXyQwLTldKikqPik/XFxcXHMrKSsnICtcbiAgICAgICAgICAgICAgZS5VTkRFUlNDT1JFX0lERU5UX1JFICtcbiAgICAgICAgICAgICAgJ1xcXFxzKlxcXFwoJyxcbiAgICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICAgIGVuZDogL1t7Oz1dLyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAga2V5d29yZHM6IG4sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IGUuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccypcXFxcKCcsXG4gICAgICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICBjb250YWluczogW2UuVU5ERVJTQ09SRV9USVRMRV9NT0RFXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgICAga2V5d29yZHM6IG4sXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICBzLFxuICAgICAgICAgICAgICAgICAgZS5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICAgICAgZS5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgICAgIHIsXG4gICAgICAgICAgICAgICAgICBlLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGUuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAgZS5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByLFxuICAgICAgICAgIHMsXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdqYXZhc2NyaXB0JyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBjb25zdCBlID0gJ1tBLVphLXokX11bMC05QS1aYS16JF9dKicsXG4gICAgICBuID0gW1xuICAgICAgICAnYXMnLFxuICAgICAgICAnaW4nLFxuICAgICAgICAnb2YnLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ2ZpbmFsbHknLFxuICAgICAgICAndmFyJyxcbiAgICAgICAgJ25ldycsXG4gICAgICAgICdmdW5jdGlvbicsXG4gICAgICAgICdkbycsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAndm9pZCcsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2NhdGNoJyxcbiAgICAgICAgJ2luc3RhbmNlb2YnLFxuICAgICAgICAnd2l0aCcsXG4gICAgICAgICd0aHJvdycsXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAndHJ5JyxcbiAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICdjb250aW51ZScsXG4gICAgICAgICd0eXBlb2YnLFxuICAgICAgICAnZGVsZXRlJyxcbiAgICAgICAgJ2xldCcsXG4gICAgICAgICd5aWVsZCcsXG4gICAgICAgICdjb25zdCcsXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdkZWJ1Z2dlcicsXG4gICAgICAgICdhc3luYycsXG4gICAgICAgICdhd2FpdCcsXG4gICAgICAgICdzdGF0aWMnLFxuICAgICAgICAnaW1wb3J0JyxcbiAgICAgICAgJ2Zyb20nLFxuICAgICAgICAnZXhwb3J0JyxcbiAgICAgICAgJ2V4dGVuZHMnLFxuICAgICAgXSxcbiAgICAgIGEgPSBbJ3RydWUnLCAnZmFsc2UnLCAnbnVsbCcsICd1bmRlZmluZWQnLCAnTmFOJywgJ0luZmluaXR5J10sXG4gICAgICBzID0gW10uY29uY2F0KFxuICAgICAgICBbXG4gICAgICAgICAgJ3NldEludGVydmFsJyxcbiAgICAgICAgICAnc2V0VGltZW91dCcsXG4gICAgICAgICAgJ2NsZWFySW50ZXJ2YWwnLFxuICAgICAgICAgICdjbGVhclRpbWVvdXQnLFxuICAgICAgICAgICdyZXF1aXJlJyxcbiAgICAgICAgICAnZXhwb3J0cycsXG4gICAgICAgICAgJ2V2YWwnLFxuICAgICAgICAgICdpc0Zpbml0ZScsXG4gICAgICAgICAgJ2lzTmFOJyxcbiAgICAgICAgICAncGFyc2VGbG9hdCcsXG4gICAgICAgICAgJ3BhcnNlSW50JyxcbiAgICAgICAgICAnZGVjb2RlVVJJJyxcbiAgICAgICAgICAnZGVjb2RlVVJJQ29tcG9uZW50JyxcbiAgICAgICAgICAnZW5jb2RlVVJJJyxcbiAgICAgICAgICAnZW5jb2RlVVJJQ29tcG9uZW50JyxcbiAgICAgICAgICAnZXNjYXBlJyxcbiAgICAgICAgICAndW5lc2NhcGUnLFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgJ2FyZ3VtZW50cycsXG4gICAgICAgICAgJ3RoaXMnLFxuICAgICAgICAgICdzdXBlcicsXG4gICAgICAgICAgJ2NvbnNvbGUnLFxuICAgICAgICAgICd3aW5kb3cnLFxuICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgJ2xvY2FsU3RvcmFnZScsXG4gICAgICAgICAgJ21vZHVsZScsXG4gICAgICAgICAgJ2dsb2JhbCcsXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAnSW50bCcsXG4gICAgICAgICAgJ0RhdGFWaWV3JyxcbiAgICAgICAgICAnTnVtYmVyJyxcbiAgICAgICAgICAnTWF0aCcsXG4gICAgICAgICAgJ0RhdGUnLFxuICAgICAgICAgICdTdHJpbmcnLFxuICAgICAgICAgICdSZWdFeHAnLFxuICAgICAgICAgICdPYmplY3QnLFxuICAgICAgICAgICdGdW5jdGlvbicsXG4gICAgICAgICAgJ0Jvb2xlYW4nLFxuICAgICAgICAgICdFcnJvcicsXG4gICAgICAgICAgJ1N5bWJvbCcsXG4gICAgICAgICAgJ1NldCcsXG4gICAgICAgICAgJ01hcCcsXG4gICAgICAgICAgJ1dlYWtTZXQnLFxuICAgICAgICAgICdXZWFrTWFwJyxcbiAgICAgICAgICAnUHJveHknLFxuICAgICAgICAgICdSZWZsZWN0JyxcbiAgICAgICAgICAnSlNPTicsXG4gICAgICAgICAgJ1Byb21pc2UnLFxuICAgICAgICAgICdGbG9hdDY0QXJyYXknLFxuICAgICAgICAgICdJbnQxNkFycmF5JyxcbiAgICAgICAgICAnSW50MzJBcnJheScsXG4gICAgICAgICAgJ0ludDhBcnJheScsXG4gICAgICAgICAgJ1VpbnQxNkFycmF5JyxcbiAgICAgICAgICAnVWludDMyQXJyYXknLFxuICAgICAgICAgICdGbG9hdDMyQXJyYXknLFxuICAgICAgICAgICdBcnJheScsXG4gICAgICAgICAgJ1VpbnQ4QXJyYXknLFxuICAgICAgICAgICdVaW50OENsYW1wZWRBcnJheScsXG4gICAgICAgICAgJ0FycmF5QnVmZmVyJyxcbiAgICAgICAgICAnQmlnSW50NjRBcnJheScsXG4gICAgICAgICAgJ0JpZ1VpbnQ2NEFycmF5JyxcbiAgICAgICAgICAnQmlnSW50JyxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICdFdmFsRXJyb3InLFxuICAgICAgICAgICdJbnRlcm5hbEVycm9yJyxcbiAgICAgICAgICAnUmFuZ2VFcnJvcicsXG4gICAgICAgICAgJ1JlZmVyZW5jZUVycm9yJyxcbiAgICAgICAgICAnU3ludGF4RXJyb3InLFxuICAgICAgICAgICdUeXBlRXJyb3InLFxuICAgICAgICAgICdVUklFcnJvcicsXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBmdW5jdGlvbiByKGUpIHtcbiAgICAgIHJldHVybiB0KCcoPz0nLCBlLCAnKScpXG4gICAgfVxuICAgIGZ1bmN0aW9uIHQoLi4uZSkge1xuICAgICAgcmV0dXJuIGVcbiAgICAgICAgLm1hcChlID0+IHtcbiAgICAgICAgICByZXR1cm4gKG4gPSBlKSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgbiA/IG4gOiBuLnNvdXJjZSkgOiBudWxsXG4gICAgICAgICAgdmFyIG5cbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpXG4gICAgfVxuICAgIHJldHVybiBpID0+IHtcbiAgICAgIGNvbnN0IGMgPSBlLFxuICAgICAgICBvID0ge1xuICAgICAgICAgIGJlZ2luOiAvPFtBLVphLXowLTlcXFxcLl86LV0rLyxcbiAgICAgICAgICBlbmQ6IC9cXC9bQS1aYS16MC05XFxcXC5fOi1dKz58XFwvPi8sXG4gICAgICAgICAgaXNUcnVseU9wZW5pbmdUYWc6IChlLCBuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhID0gZVswXS5sZW5ndGggKyBlLmluZGV4LFxuICAgICAgICAgICAgICBzID0gZS5pbnB1dFthXVxuICAgICAgICAgICAgJzwnICE9PSBzXG4gICAgICAgICAgICAgID8gJz4nID09PSBzICYmXG4gICAgICAgICAgICAgICAgKCgoZSwgeyBhZnRlcjogbiB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhID0gJzwvJyArIGVbMF0uc2xpY2UoMSlcbiAgICAgICAgICAgICAgICAgIHJldHVybiAtMSAhPT0gZS5pbnB1dC5pbmRleE9mKGEsIG4pXG4gICAgICAgICAgICAgICAgfSkoZSwgeyBhZnRlcjogYSB9KSB8fFxuICAgICAgICAgICAgICAgICAgbi5pZ25vcmVNYXRjaCgpKVxuICAgICAgICAgICAgICA6IG4uaWdub3JlTWF0Y2goKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGwgPSB7ICRwYXR0ZXJuOiBlLCBrZXl3b3JkOiBuLCBsaXRlcmFsOiBhLCBidWlsdF9pbjogcyB9LFxuICAgICAgICBnID0gJ1xcXFwuKFswLTldKF8/WzAtOV0pKiknLFxuICAgICAgICBiID0gJzB8WzEtOV0oXz9bMC05XSkqfDBbMC03XSpbODldWzAtOV0qJyxcbiAgICAgICAgZCA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiBgKFxcXFxiKCR7Yn0pKCgke2d9KXxcXFxcLik/fCgke2d9KSlbZUVdWystXT8oWzAtOV0oXz9bMC05XSkqKVxcXFxiYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiBgXFxcXGIoJHtifSlcXFxcYigoJHtnfSlcXFxcYnxcXFxcLik/fCgke2d9KVxcXFxiYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIoMHxbMS05XShfP1swLTldKSopblxcXFxiJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIwW3hYXVswLTlhLWZBLUZdKF8/WzAtOWEtZkEtRl0pKm4/XFxcXGInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYjBbYkJdWzAtMV0oXz9bMC0xXSkqbj9cXFxcYicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogJ1xcXFxiMFtvT11bMC03XShfP1swLTddKSpuP1xcXFxiJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiMFswLTddK24/XFxcXGInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgRSA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgICAgICAgYmVnaW46ICdcXFxcJFxcXFx7JyxcbiAgICAgICAgICBlbmQ6ICdcXFxcfScsXG4gICAgICAgICAga2V5d29yZHM6IGwsXG4gICAgICAgICAgY29udGFpbnM6IFtdLFxuICAgICAgICB9LFxuICAgICAgICB1ID0ge1xuICAgICAgICAgIGJlZ2luOiAnaHRtbGAnLFxuICAgICAgICAgIGVuZDogJycsXG4gICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICBlbmQ6ICdgJyxcbiAgICAgICAgICAgIHJldHVybkVuZDogITEsXG4gICAgICAgICAgICBjb250YWluczogW2kuQkFDS1NMQVNIX0VTQ0FQRSwgRV0sXG4gICAgICAgICAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgXyA9IHtcbiAgICAgICAgICBiZWdpbjogJ2Nzc2AnLFxuICAgICAgICAgIGVuZDogJycsXG4gICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICBlbmQ6ICdgJyxcbiAgICAgICAgICAgIHJldHVybkVuZDogITEsXG4gICAgICAgICAgICBjb250YWluczogW2kuQkFDS1NMQVNIX0VTQ0FQRSwgRV0sXG4gICAgICAgICAgICBzdWJMYW5ndWFnZTogJ2NzcycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbSA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgIGJlZ2luOiAnYCcsXG4gICAgICAgICAgZW5kOiAnYCcsXG4gICAgICAgICAgY29udGFpbnM6IFtpLkJBQ0tTTEFTSF9FU0NBUEUsIEVdLFxuICAgICAgICB9LFxuICAgICAgICB5ID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICBpLkNPTU1FTlQoL1xcL1xcKlxcKig/IVxcLykvLCAnXFxcXCovJywge1xuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAnQFtBLVphLXpdKycsXG4gICAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW46ICdcXFxceycsXG4gICAgICAgICAgICAgICAgICAgICAgZW5kOiAnXFxcXH0nLFxuICAgICAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogYyArICcoPz1cXFxccyooLSl8JCknLFxuICAgICAgICAgICAgICAgICAgICAgIGVuZHNQYXJlbnQ6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBiZWdpbjogLyg/PVteXFxuXSlcXHMvLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaS5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgIGkuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBOID0gW2kuQVBPU19TVFJJTkdfTU9ERSwgaS5RVU9URV9TVFJJTkdfTU9ERSwgdSwgXywgbSwgZCwgaS5SRUdFWFBfTU9ERV1cbiAgICAgIEUuY29udGFpbnMgPSBOLmNvbmNhdCh7XG4gICAgICAgIGJlZ2luOiAvXFx7LyxcbiAgICAgICAgZW5kOiAvXFx9LyxcbiAgICAgICAga2V5d29yZHM6IGwsXG4gICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXS5jb25jYXQoTiksXG4gICAgICB9KVxuICAgICAgY29uc3QgQSA9IFtdLmNvbmNhdCh5LCBFLmNvbnRhaW5zKSxcbiAgICAgICAgZiA9IEEuY29uY2F0KFtcbiAgICAgICAgICB7IGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLywga2V5d29yZHM6IGwsIGNvbnRhaW5zOiBbJ3NlbGYnXS5jb25jYXQoQSkgfSxcbiAgICAgICAgXSksXG4gICAgICAgIHAgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgIGtleXdvcmRzOiBsLFxuICAgICAgICAgIGNvbnRhaW5zOiBmLFxuICAgICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnSmF2YXNjcmlwdCcsXG4gICAgICAgIGFsaWFzZXM6IFsnanMnLCAnanN4JywgJ21qcycsICdjanMnXSxcbiAgICAgICAga2V5d29yZHM6IGwsXG4gICAgICAgIGV4cG9ydHM6IHsgUEFSQU1TX0NPTlRBSU5TOiBmIH0sXG4gICAgICAgIGlsbGVnYWw6IC8jKD8hWyRfQS16XSkvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGkuU0hFQkFORyh7IGxhYmVsOiAnc2hlYmFuZycsIGJpbmFyeTogJ25vZGUnLCByZWxldmFuY2U6IDUgfSksXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICd1c2Vfc3RyaWN0JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAxMCxcbiAgICAgICAgICAgIGJlZ2luOiAvXlxccypbJ1wiXXVzZSAoc3RyaWN0fGFzbSlbJ1wiXS8sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgaS5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICB1LFxuICAgICAgICAgIF8sXG4gICAgICAgICAgbSxcbiAgICAgICAgICB5LFxuICAgICAgICAgIGQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IHQoXG4gICAgICAgICAgICAgIC9beyxcXG5dXFxzKi8sXG4gICAgICAgICAgICAgIHIodCgvKCgoXFwvXFwvLiokKXwoXFwvXFwqKFxcKlteL118W14qXSkqXFwqXFwvKSlcXHMqKSovLCBjICsgJ1xcXFxzKjonKSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2F0dHInLCBiZWdpbjogYyArIHIoJ1xcXFxzKjonKSwgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcoJyArIGkuUkVfU1RBUlRFUlNfUkUgKyAnfFxcXFxiKGNhc2V8cmV0dXJufHRocm93KVxcXFxiKVxcXFxzKicsXG4gICAgICAgICAgICBrZXl3b3JkczogJ3JldHVybiB0aHJvdyBjYXNlJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgIGkuUkVHRVhQX01PREUsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICAgICAnKFxcXFwoW14oKV0qKFxcXFwoW14oKV0qKFxcXFwoW14oKV0qXFxcXClbXigpXSopKlxcXFwpW14oKV0qKSpcXFxcKXwnICtcbiAgICAgICAgICAgICAgICAgIGkuVU5ERVJTQ09SRV9JREVOVF9SRSArXG4gICAgICAgICAgICAgICAgICAnKVxcXFxzKj0+JyxcbiAgICAgICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICAgICAgZW5kOiAnXFxcXHMqPT4nLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IGkuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBudWxsLCBiZWdpbjogL1xcKFxccypcXCkvLCBza2lwOiAhMCB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkczogbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBmLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46IC8sLywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnJywgYmVnaW46IC9cXHMvLCBlbmQ6IC9cXHMqLywgc2tpcDogITAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiAnPD4nLCBlbmQ6ICc8Lz4nIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBvLmJlZ2luLFxuICAgICAgICAgICAgICAgICAgICAnb246YmVnaW4nOiBvLmlzVHJ1bHlPcGVuaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IG8uZW5kLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgeyBiZWdpbjogby5iZWdpbiwgZW5kOiBvLmVuZCwgc2tpcDogITAsIGNvbnRhaW5zOiBbJ3NlbGYnXSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIGVuZDogL1t7O10vLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICBrZXl3b3JkczogbCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnLCBpLmluaGVyaXQoaS5USVRMRV9NT0RFLCB7IGJlZ2luOiBjIH0pLCBwXSxcbiAgICAgICAgICAgIGlsbGVnYWw6IC8lLyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICd3aGlsZSBpZiBzd2l0Y2ggY2F0Y2ggZm9yJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICBpLlVOREVSU0NPUkVfSURFTlRfUkUgK1xuICAgICAgICAgICAgICAnXFxcXChbXigpXSooXFxcXChbXigpXSooXFxcXChbXigpXSpcXFxcKVteKCldKikqXFxcXClbXigpXSopKlxcXFwpXFxcXHMqXFxcXHsnLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtwLCBpLmluaGVyaXQoaS5USVRMRV9NT0RFLCB7IGJlZ2luOiBjIH0pXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFwuJyArIGMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46ICdcXFxcJCcgKyBjIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzJyxcbiAgICAgICAgICAgIGVuZDogL1t7Oz1dLyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgaWxsZWdhbDogL1s6XCJbXFxdXS8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcYig/PWNvbnN0cnVjdG9yKS8sXG4gICAgICAgICAgICBlbmQ6IC9beztdLyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtpLmluaGVyaXQoaS5USVRMRV9NT0RFLCB7IGJlZ2luOiBjIH0pLCAnc2VsZicsIHBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcoZ2V0fHNldClcXFxccysoPz0nICsgYyArICdcXFxcKCknLFxuICAgICAgICAgICAgZW5kOiAvXFx7LyxcbiAgICAgICAgICAgIGtleXdvcmRzOiAnZ2V0IHNldCcsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBpLmluaGVyaXQoaS5USVRMRV9NT0RFLCB7IGJlZ2luOiBjIH0pLFxuICAgICAgICAgICAgICB7IGJlZ2luOiAvXFwoXFwpLyB9LFxuICAgICAgICAgICAgICBwLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46IC9cXCRbKC5dLyB9LFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnanNvbicsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgcmV0dXJuIG4gPT4ge1xuICAgICAgY29uc3QgZSA9IHtcbiAgICAgICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBudWxsJyxcbiAgICAgICAgfSxcbiAgICAgICAgaSA9IFtuLkNfTElORV9DT01NRU5UX01PREUsIG4uQ19CTE9DS19DT01NRU5UX01PREVdLFxuICAgICAgICBhID0gW24uUVVPVEVfU1RSSU5HX01PREUsIG4uQ19OVU1CRVJfTU9ERV0sXG4gICAgICAgIGwgPSB7XG4gICAgICAgICAgZW5kOiAnLCcsXG4gICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6ICEwLFxuICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgIGNvbnRhaW5zOiBhLFxuICAgICAgICAgIGtleXdvcmRzOiBlLFxuICAgICAgICB9LFxuICAgICAgICB0ID0ge1xuICAgICAgICAgIGJlZ2luOiAvXFx7LyxcbiAgICAgICAgICBlbmQ6IC9cXH0vLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgICAgICAgZW5kOiAvXCIvLFxuICAgICAgICAgICAgICBjb250YWluczogW24uQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgICAgICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbi5pbmhlcml0KGwsIHsgYmVnaW46IC86LyB9KSxcbiAgICAgICAgICBdLmNvbmNhdChpKSxcbiAgICAgICAgICBpbGxlZ2FsOiAnXFxcXFMnLFxuICAgICAgICB9LFxuICAgICAgICBzID0ge1xuICAgICAgICAgIGJlZ2luOiAnXFxcXFsnLFxuICAgICAgICAgIGVuZDogJ1xcXFxdJyxcbiAgICAgICAgICBjb250YWluczogW24uaW5oZXJpdChsKV0sXG4gICAgICAgICAgaWxsZWdhbDogJ1xcXFxTJyxcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgYS5wdXNoKHQsIHMpLFxuICAgICAgICBpLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgYS5wdXNoKG4pXG4gICAgICAgIH0pLFxuICAgICAgICB7IG5hbWU6ICdKU09OJywgY29udGFpbnM6IGEsIGtleXdvcmRzOiBlLCBpbGxlZ2FsOiAnXFxcXFMnIH1cbiAgICAgIClcbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ2tvdGxpbicsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgdmFyIGUgPSAnXFxcXC4oWzAtOV0oXypbMC05XSkqKScsXG4gICAgICBuID0gJ1swLTlhLWZBLUZdKF8qWzAtOWEtZkEtRl0pKicsXG4gICAgICBhID0ge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBgKFxcXFxiKFswLTldKF8qWzAtOV0pKikoKCR7ZX0pfFxcXFwuKT98KCR7ZX0pKVtlRV1bKy1dPyhbMC05XShfKlswLTldKSopW2ZGZERdP1xcXFxiYCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46IGBcXFxcYihbMC05XShfKlswLTldKSopKCgke2V9KVtmRmREXT9cXFxcYnxcXFxcLihbZkZkRF1cXFxcYik/KWAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogYCgke2V9KVtmRmREXT9cXFxcYmAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGJlZ2luOiAnXFxcXGIoWzAtOV0oXypbMC05XSkqKVtmRmREXVxcXFxiJyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBgXFxcXGIwW3hYXSgoJHtufSlcXFxcLj98KCR7bn0pP1xcXFwuKCR7bn0pKVtwUF1bKy1dPyhbMC05XShfKlswLTldKSopW2ZGZERdP1xcXFxiYCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46ICdcXFxcYigwfFsxLTldKF8qWzAtOV0pKilbbExdP1xcXFxiJyB9LFxuICAgICAgICAgIHsgYmVnaW46IGBcXFxcYjBbeFhdKCR7bn0pW2xMXT9cXFxcYmAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxiMChfKlswLTddKSpbbExdP1xcXFxiJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYmVnaW46ICdcXFxcYjBbYkJdWzAxXShfKlswMV0pKltsTF0/XFxcXGInIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIH1cbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICBjb25zdCBuID0ge1xuICAgICAgICAgIGtleXdvcmQ6XG4gICAgICAgICAgICAnYWJzdHJhY3QgYXMgdmFsIHZhciB2YXJhcmcgZ2V0IHNldCBjbGFzcyBvYmplY3Qgb3BlbiBwcml2YXRlIHByb3RlY3RlZCBwdWJsaWMgbm9pbmxpbmUgY3Jvc3NpbmxpbmUgZHluYW1pYyBmaW5hbCBlbnVtIGlmIGVsc2UgZG8gd2hpbGUgZm9yIHdoZW4gdGhyb3cgdHJ5IGNhdGNoIGZpbmFsbHkgaW1wb3J0IHBhY2thZ2UgaXMgaW4gZnVuIG92ZXJyaWRlIGNvbXBhbmlvbiByZWlmaWVkIGlubGluZSBsYXRlaW5pdCBpbml0IGludGVyZmFjZSBhbm5vdGF0aW9uIGRhdGEgc2VhbGVkIGludGVybmFsIGluZml4IG9wZXJhdG9yIG91dCBieSBjb25zdHJ1Y3RvciBzdXBlciB0YWlscmVjIHdoZXJlIGNvbnN0IGlubmVyIHN1c3BlbmQgdHlwZWFsaWFzIGV4dGVybmFsIGV4cGVjdCBhY3R1YWwnLFxuICAgICAgICAgIGJ1aWx0X2luOlxuICAgICAgICAgICAgJ0J5dGUgU2hvcnQgQ2hhciBJbnQgTG9uZyBCb29sZWFuIEZsb2F0IERvdWJsZSBWb2lkIFVuaXQgTm90aGluZycsXG4gICAgICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UgbnVsbCcsXG4gICAgICAgIH0sXG4gICAgICAgIGkgPSB7IGNsYXNzTmFtZTogJ3N5bWJvbCcsIGJlZ2luOiBlLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnQCcgfSxcbiAgICAgICAgcyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgICAgICAgYmVnaW46IC9cXCRcXHsvLFxuICAgICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgICAgY29udGFpbnM6IFtlLkNfTlVNQkVSX01PREVdLFxuICAgICAgICB9LFxuICAgICAgICB0ID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgICBiZWdpbjogJ1xcXFwkJyArIGUuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAgfSxcbiAgICAgICAgciA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAnXCJcIlwiJywgZW5kOiAnXCJcIlwiKD89W15cIl0pJywgY29udGFpbnM6IFt0LCBzXSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogXCInXCIsXG4gICAgICAgICAgICAgIGVuZDogXCInXCIsXG4gICAgICAgICAgICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgICAgICAgICAgICBjb250YWluczogW2UuQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJ1wiJyxcbiAgICAgICAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICAgICAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtlLkJBQ0tTTEFTSF9FU0NBUEUsIHQsIHNdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9XG4gICAgICBzLmNvbnRhaW5zLnB1c2gocilcbiAgICAgIGNvbnN0IGwgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAnQCg/OmZpbGV8cHJvcGVydHl8ZmllbGR8Z2V0fHNldHxyZWNlaXZlcnxwYXJhbXxzZXRwYXJhbXxkZWxlZ2F0ZSlcXFxccyo6KD86XFxcXHMqJyArXG4gICAgICAgICAgICBlLlVOREVSU0NPUkVfSURFTlRfUkUgK1xuICAgICAgICAgICAgJyk/JyxcbiAgICAgICAgfSxcbiAgICAgICAgYyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICBiZWdpbjogJ0AnICsgZS5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtlLmluaGVyaXQociwgeyBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycgfSldLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBvID0gYSxcbiAgICAgICAgYiA9IGUuQ09NTUVOVCgnL1xcXFwqJywgJ1xcXFwqLycsIHsgY29udGFpbnM6IFtlLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXSB9KSxcbiAgICAgICAgRSA9IHtcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICd0eXBlJywgYmVnaW46IGUuVU5ERVJTQ09SRV9JREVOVF9SRSB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL1xcKC8sIGVuZDogL1xcKS8sIGNvbnRhaW5zOiBbXSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGQgPSBFXG4gICAgICByZXR1cm4gKFxuICAgICAgICAoZC52YXJpYW50c1sxXS5jb250YWlucyA9IFtFXSksXG4gICAgICAgIChFLnZhcmlhbnRzWzFdLmNvbnRhaW5zID0gW2RdKSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdLb3RsaW4nLFxuICAgICAgICAgIGFsaWFzZXM6IFsna3QnLCAna3RzJ10sXG4gICAgICAgICAga2V5d29yZHM6IG4sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIGUuQ09NTUVOVCgnL1xcXFwqXFxcXConLCAnXFxcXCovJywge1xuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbeyBjbGFzc05hbWU6ICdkb2N0YWcnLCBiZWdpbjogJ0BbQS1aYS16XSsnIH1dLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBlLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgICBiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgYmVnaW46IC9cXGIoYnJlYWt8Y29udGludWV8cmV0dXJufHRoaXMpXFxiLyxcbiAgICAgICAgICAgICAgc3RhcnRzOiB7IGNvbnRhaW5zOiBbeyBjbGFzc05hbWU6ICdzeW1ib2wnLCBiZWdpbjogL0BcXHcrLyB9XSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBsLFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuJyxcbiAgICAgICAgICAgICAgZW5kOiAnWyhdfCQnLFxuICAgICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiA1LFxuICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiBlLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnXFxcXHMqXFxcXCgnLFxuICAgICAgICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgICAgY29udGFpbnM6IFtlLlVOREVSU0NPUkVfVElUTEVfTU9ERV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAvPC8sXG4gICAgICAgICAgICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAgICAgICAgICAgIGtleXdvcmRzOiAncmVpZmllZCcsXG4gICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAgICAgIGVuZHNQYXJlbnQ6ICEwLFxuICAgICAgICAgICAgICAgICAga2V5d29yZHM6IG4sXG4gICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW46IC86LyxcbiAgICAgICAgICAgICAgICAgICAgICBlbmQ6IC9bPSxcXC9dLyxcbiAgICAgICAgICAgICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogITAsXG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbnM6IFtFLCBlLkNfTElORV9DT01NRU5UX01PREUsIGJdLFxuICAgICAgICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZS5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICAgICAgICBiLFxuICAgICAgICAgICAgICAgICAgICBsLFxuICAgICAgICAgICAgICAgICAgICBjLFxuICAgICAgICAgICAgICAgICAgICByLFxuICAgICAgICAgICAgICAgICAgICBlLkNfTlVNQkVSX01PREUsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYixcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZSB0cmFpdCcsXG4gICAgICAgICAgICAgIGVuZDogL1s6XFx7KF18JC8sXG4gICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgICBpbGxlZ2FsOiAnZXh0ZW5kcyBpbXBsZW1lbnRzJyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOlxuICAgICAgICAgICAgICAgICAgICAncHVibGljIHByb3RlY3RlZCBpbnRlcm5hbCBwcml2YXRlIGNvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGUuVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgYmVnaW46IC88LyxcbiAgICAgICAgICAgICAgICAgIGVuZDogLz4vLFxuICAgICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICBiZWdpbjogL1ssOl1cXHMqLyxcbiAgICAgICAgICAgICAgICAgIGVuZDogL1s8XFwoLF18JC8sXG4gICAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgICAgICAgcmV0dXJuRW5kOiAhMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGwsXG4gICAgICAgICAgICAgICAgYyxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgICAgYmVnaW46ICdeIyEvdXNyL2Jpbi9lbnYnLFxuICAgICAgICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgICAgICAgaWxsZWdhbDogJ1xcbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbyxcbiAgICAgICAgICBdLFxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdsZXNzJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBjb25zdCBlID0gW1xuICAgICAgICAnYScsXG4gICAgICAgICdhYmJyJyxcbiAgICAgICAgJ2FkZHJlc3MnLFxuICAgICAgICAnYXJ0aWNsZScsXG4gICAgICAgICdhc2lkZScsXG4gICAgICAgICdhdWRpbycsXG4gICAgICAgICdiJyxcbiAgICAgICAgJ2Jsb2NrcXVvdGUnLFxuICAgICAgICAnYm9keScsXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICAnY2FudmFzJyxcbiAgICAgICAgJ2NhcHRpb24nLFxuICAgICAgICAnY2l0ZScsXG4gICAgICAgICdjb2RlJyxcbiAgICAgICAgJ2RkJyxcbiAgICAgICAgJ2RlbCcsXG4gICAgICAgICdkZXRhaWxzJyxcbiAgICAgICAgJ2RmbicsXG4gICAgICAgICdkaXYnLFxuICAgICAgICAnZGwnLFxuICAgICAgICAnZHQnLFxuICAgICAgICAnZW0nLFxuICAgICAgICAnZmllbGRzZXQnLFxuICAgICAgICAnZmlnY2FwdGlvbicsXG4gICAgICAgICdmaWd1cmUnLFxuICAgICAgICAnZm9vdGVyJyxcbiAgICAgICAgJ2Zvcm0nLFxuICAgICAgICAnaDEnLFxuICAgICAgICAnaDInLFxuICAgICAgICAnaDMnLFxuICAgICAgICAnaDQnLFxuICAgICAgICAnaDUnLFxuICAgICAgICAnaDYnLFxuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ2hncm91cCcsXG4gICAgICAgICdodG1sJyxcbiAgICAgICAgJ2knLFxuICAgICAgICAnaWZyYW1lJyxcbiAgICAgICAgJ2ltZycsXG4gICAgICAgICdpbnB1dCcsXG4gICAgICAgICdpbnMnLFxuICAgICAgICAna2JkJyxcbiAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgJ2xlZ2VuZCcsXG4gICAgICAgICdsaScsXG4gICAgICAgICdtYWluJyxcbiAgICAgICAgJ21hcmsnLFxuICAgICAgICAnbWVudScsXG4gICAgICAgICduYXYnLFxuICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgJ29sJyxcbiAgICAgICAgJ3AnLFxuICAgICAgICAncScsXG4gICAgICAgICdxdW90ZScsXG4gICAgICAgICdzYW1wJyxcbiAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICAnc3BhbicsXG4gICAgICAgICdzdHJvbmcnLFxuICAgICAgICAnc3VtbWFyeScsXG4gICAgICAgICdzdXAnLFxuICAgICAgICAndGFibGUnLFxuICAgICAgICAndGJvZHknLFxuICAgICAgICAndGQnLFxuICAgICAgICAndGV4dGFyZWEnLFxuICAgICAgICAndGZvb3QnLFxuICAgICAgICAndGgnLFxuICAgICAgICAndGhlYWQnLFxuICAgICAgICAndGltZScsXG4gICAgICAgICd0cicsXG4gICAgICAgICd1bCcsXG4gICAgICAgICd2YXInLFxuICAgICAgICAndmlkZW8nLFxuICAgICAgXSxcbiAgICAgIHQgPSBbXG4gICAgICAgICdhbnktaG92ZXInLFxuICAgICAgICAnYW55LXBvaW50ZXInLFxuICAgICAgICAnYXNwZWN0LXJhdGlvJyxcbiAgICAgICAgJ2NvbG9yJyxcbiAgICAgICAgJ2NvbG9yLWdhbXV0JyxcbiAgICAgICAgJ2NvbG9yLWluZGV4JyxcbiAgICAgICAgJ2RldmljZS1hc3BlY3QtcmF0aW8nLFxuICAgICAgICAnZGV2aWNlLWhlaWdodCcsXG4gICAgICAgICdkZXZpY2Utd2lkdGgnLFxuICAgICAgICAnZGlzcGxheS1tb2RlJyxcbiAgICAgICAgJ2ZvcmNlZC1jb2xvcnMnLFxuICAgICAgICAnZ3JpZCcsXG4gICAgICAgICdoZWlnaHQnLFxuICAgICAgICAnaG92ZXInLFxuICAgICAgICAnaW52ZXJ0ZWQtY29sb3JzJyxcbiAgICAgICAgJ21vbm9jaHJvbWUnLFxuICAgICAgICAnb3JpZW50YXRpb24nLFxuICAgICAgICAnb3ZlcmZsb3ctYmxvY2snLFxuICAgICAgICAnb3ZlcmZsb3ctaW5saW5lJyxcbiAgICAgICAgJ3BvaW50ZXInLFxuICAgICAgICAncHJlZmVycy1jb2xvci1zY2hlbWUnLFxuICAgICAgICAncHJlZmVycy1jb250cmFzdCcsXG4gICAgICAgICdwcmVmZXJzLXJlZHVjZWQtbW90aW9uJyxcbiAgICAgICAgJ3ByZWZlcnMtcmVkdWNlZC10cmFuc3BhcmVuY3knLFxuICAgICAgICAncmVzb2x1dGlvbicsXG4gICAgICAgICdzY2FuJyxcbiAgICAgICAgJ3NjcmlwdGluZycsXG4gICAgICAgICd1cGRhdGUnLFxuICAgICAgICAnd2lkdGgnLFxuICAgICAgICAnbWluLXdpZHRoJyxcbiAgICAgICAgJ21heC13aWR0aCcsXG4gICAgICAgICdtaW4taGVpZ2h0JyxcbiAgICAgICAgJ21heC1oZWlnaHQnLFxuICAgICAgXSxcbiAgICAgIGkgPSBbXG4gICAgICAgICdhY3RpdmUnLFxuICAgICAgICAnYW55LWxpbmsnLFxuICAgICAgICAnYmxhbmsnLFxuICAgICAgICAnY2hlY2tlZCcsXG4gICAgICAgICdjdXJyZW50JyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAnZGVmaW5lZCcsXG4gICAgICAgICdkaXInLFxuICAgICAgICAnZGlzYWJsZWQnLFxuICAgICAgICAnZHJvcCcsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbmFibGVkJyxcbiAgICAgICAgJ2ZpcnN0JyxcbiAgICAgICAgJ2ZpcnN0LWNoaWxkJyxcbiAgICAgICAgJ2ZpcnN0LW9mLXR5cGUnLFxuICAgICAgICAnZnVsbHNjcmVlbicsXG4gICAgICAgICdmdXR1cmUnLFxuICAgICAgICAnZm9jdXMnLFxuICAgICAgICAnZm9jdXMtdmlzaWJsZScsXG4gICAgICAgICdmb2N1cy13aXRoaW4nLFxuICAgICAgICAnaGFzJyxcbiAgICAgICAgJ2hvc3QnLFxuICAgICAgICAnaG9zdC1jb250ZXh0JyxcbiAgICAgICAgJ2hvdmVyJyxcbiAgICAgICAgJ2luZGV0ZXJtaW5hdGUnLFxuICAgICAgICAnaW4tcmFuZ2UnLFxuICAgICAgICAnaW52YWxpZCcsXG4gICAgICAgICdpcycsXG4gICAgICAgICdsYW5nJyxcbiAgICAgICAgJ2xhc3QtY2hpbGQnLFxuICAgICAgICAnbGFzdC1vZi10eXBlJyxcbiAgICAgICAgJ2xlZnQnLFxuICAgICAgICAnbGluaycsXG4gICAgICAgICdsb2NhbC1saW5rJyxcbiAgICAgICAgJ25vdCcsXG4gICAgICAgICdudGgtY2hpbGQnLFxuICAgICAgICAnbnRoLWNvbCcsXG4gICAgICAgICdudGgtbGFzdC1jaGlsZCcsXG4gICAgICAgICdudGgtbGFzdC1jb2wnLFxuICAgICAgICAnbnRoLWxhc3Qtb2YtdHlwZScsXG4gICAgICAgICdudGgtb2YtdHlwZScsXG4gICAgICAgICdvbmx5LWNoaWxkJyxcbiAgICAgICAgJ29ubHktb2YtdHlwZScsXG4gICAgICAgICdvcHRpb25hbCcsXG4gICAgICAgICdvdXQtb2YtcmFuZ2UnLFxuICAgICAgICAncGFzdCcsXG4gICAgICAgICdwbGFjZWhvbGRlci1zaG93bicsXG4gICAgICAgICdyZWFkLW9ubHknLFxuICAgICAgICAncmVhZC13cml0ZScsXG4gICAgICAgICdyZXF1aXJlZCcsXG4gICAgICAgICdyaWdodCcsXG4gICAgICAgICdyb290JyxcbiAgICAgICAgJ3Njb3BlJyxcbiAgICAgICAgJ3RhcmdldCcsXG4gICAgICAgICd0YXJnZXQtd2l0aGluJyxcbiAgICAgICAgJ3VzZXItaW52YWxpZCcsXG4gICAgICAgICd2YWxpZCcsXG4gICAgICAgICd2aXNpdGVkJyxcbiAgICAgICAgJ3doZXJlJyxcbiAgICAgIF0sXG4gICAgICBvID0gW1xuICAgICAgICAnYWZ0ZXInLFxuICAgICAgICAnYmFja2Ryb3AnLFxuICAgICAgICAnYmVmb3JlJyxcbiAgICAgICAgJ2N1ZScsXG4gICAgICAgICdjdWUtcmVnaW9uJyxcbiAgICAgICAgJ2ZpcnN0LWxldHRlcicsXG4gICAgICAgICdmaXJzdC1saW5lJyxcbiAgICAgICAgJ2dyYW1tYXItZXJyb3InLFxuICAgICAgICAnbWFya2VyJyxcbiAgICAgICAgJ3BhcnQnLFxuICAgICAgICAncGxhY2Vob2xkZXInLFxuICAgICAgICAnc2VsZWN0aW9uJyxcbiAgICAgICAgJ3Nsb3R0ZWQnLFxuICAgICAgICAnc3BlbGxpbmctZXJyb3InLFxuICAgICAgXSxcbiAgICAgIG4gPSBbXG4gICAgICAgICdhbGlnbi1jb250ZW50JyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJyxcbiAgICAgICAgJ2FsaWduLXNlbGYnLFxuICAgICAgICAnYW5pbWF0aW9uJyxcbiAgICAgICAgJ2FuaW1hdGlvbi1kZWxheScsXG4gICAgICAgICdhbmltYXRpb24tZGlyZWN0aW9uJyxcbiAgICAgICAgJ2FuaW1hdGlvbi1kdXJhdGlvbicsXG4gICAgICAgICdhbmltYXRpb24tZmlsbC1tb2RlJyxcbiAgICAgICAgJ2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQnLFxuICAgICAgICAnYW5pbWF0aW9uLW5hbWUnLFxuICAgICAgICAnYW5pbWF0aW9uLXBsYXktc3RhdGUnLFxuICAgICAgICAnYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbicsXG4gICAgICAgICdhdXRvJyxcbiAgICAgICAgJ2JhY2tmYWNlLXZpc2liaWxpdHknLFxuICAgICAgICAnYmFja2dyb3VuZCcsXG4gICAgICAgICdiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnLFxuICAgICAgICAnYmFja2dyb3VuZC1jbGlwJyxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLFxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZScsXG4gICAgICAgICdiYWNrZ3JvdW5kLW9yaWdpbicsXG4gICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJyxcbiAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JyxcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZScsXG4gICAgICAgICdib3JkZXInLFxuICAgICAgICAnYm9yZGVyLWJvdHRvbScsXG4gICAgICAgICdib3JkZXItYm90dG9tLWNvbG9yJyxcbiAgICAgICAgJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLFxuICAgICAgICAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLFxuICAgICAgICAnYm9yZGVyLWJvdHRvbS1zdHlsZScsXG4gICAgICAgICdib3JkZXItYm90dG9tLXdpZHRoJyxcbiAgICAgICAgJ2JvcmRlci1jb2xsYXBzZScsXG4gICAgICAgICdib3JkZXItY29sb3InLFxuICAgICAgICAnYm9yZGVyLWltYWdlJyxcbiAgICAgICAgJ2JvcmRlci1pbWFnZS1vdXRzZXQnLFxuICAgICAgICAnYm9yZGVyLWltYWdlLXJlcGVhdCcsXG4gICAgICAgICdib3JkZXItaW1hZ2Utc2xpY2UnLFxuICAgICAgICAnYm9yZGVyLWltYWdlLXNvdXJjZScsXG4gICAgICAgICdib3JkZXItaW1hZ2Utd2lkdGgnLFxuICAgICAgICAnYm9yZGVyLWxlZnQnLFxuICAgICAgICAnYm9yZGVyLWxlZnQtY29sb3InLFxuICAgICAgICAnYm9yZGVyLWxlZnQtc3R5bGUnLFxuICAgICAgICAnYm9yZGVyLWxlZnQtd2lkdGgnLFxuICAgICAgICAnYm9yZGVyLXJhZGl1cycsXG4gICAgICAgICdib3JkZXItcmlnaHQnLFxuICAgICAgICAnYm9yZGVyLXJpZ2h0LWNvbG9yJyxcbiAgICAgICAgJ2JvcmRlci1yaWdodC1zdHlsZScsXG4gICAgICAgICdib3JkZXItcmlnaHQtd2lkdGgnLFxuICAgICAgICAnYm9yZGVyLXNwYWNpbmcnLFxuICAgICAgICAnYm9yZGVyLXN0eWxlJyxcbiAgICAgICAgJ2JvcmRlci10b3AnLFxuICAgICAgICAnYm9yZGVyLXRvcC1jb2xvcicsXG4gICAgICAgICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJyxcbiAgICAgICAgJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJyxcbiAgICAgICAgJ2JvcmRlci10b3Atc3R5bGUnLFxuICAgICAgICAnYm9yZGVyLXRvcC13aWR0aCcsXG4gICAgICAgICdib3JkZXItd2lkdGgnLFxuICAgICAgICAnYm90dG9tJyxcbiAgICAgICAgJ2JveC1kZWNvcmF0aW9uLWJyZWFrJyxcbiAgICAgICAgJ2JveC1zaGFkb3cnLFxuICAgICAgICAnYm94LXNpemluZycsXG4gICAgICAgICdicmVhay1hZnRlcicsXG4gICAgICAgICdicmVhay1iZWZvcmUnLFxuICAgICAgICAnYnJlYWstaW5zaWRlJyxcbiAgICAgICAgJ2NhcHRpb24tc2lkZScsXG4gICAgICAgICdjbGVhcicsXG4gICAgICAgICdjbGlwJyxcbiAgICAgICAgJ2NsaXAtcGF0aCcsXG4gICAgICAgICdjb2xvcicsXG4gICAgICAgICdjb2x1bW4tY291bnQnLFxuICAgICAgICAnY29sdW1uLWZpbGwnLFxuICAgICAgICAnY29sdW1uLWdhcCcsXG4gICAgICAgICdjb2x1bW4tcnVsZScsXG4gICAgICAgICdjb2x1bW4tcnVsZS1jb2xvcicsXG4gICAgICAgICdjb2x1bW4tcnVsZS1zdHlsZScsXG4gICAgICAgICdjb2x1bW4tcnVsZS13aWR0aCcsXG4gICAgICAgICdjb2x1bW4tc3BhbicsXG4gICAgICAgICdjb2x1bW4td2lkdGgnLFxuICAgICAgICAnY29sdW1ucycsXG4gICAgICAgICdjb250ZW50JyxcbiAgICAgICAgJ2NvdW50ZXItaW5jcmVtZW50JyxcbiAgICAgICAgJ2NvdW50ZXItcmVzZXQnLFxuICAgICAgICAnY3Vyc29yJyxcbiAgICAgICAgJ2RpcmVjdGlvbicsXG4gICAgICAgICdkaXNwbGF5JyxcbiAgICAgICAgJ2VtcHR5LWNlbGxzJyxcbiAgICAgICAgJ2ZpbHRlcicsXG4gICAgICAgICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtYmFzaXMnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nLFxuICAgICAgICAnZmxleC1mbG93JyxcbiAgICAgICAgJ2ZsZXgtZ3JvdycsXG4gICAgICAgICdmbGV4LXNocmluaycsXG4gICAgICAgICdmbGV4LXdyYXAnLFxuICAgICAgICAnZmxvYXQnLFxuICAgICAgICAnZm9udCcsXG4gICAgICAgICdmb250LWRpc3BsYXknLFxuICAgICAgICAnZm9udC1mYW1pbHknLFxuICAgICAgICAnZm9udC1mZWF0dXJlLXNldHRpbmdzJyxcbiAgICAgICAgJ2ZvbnQta2VybmluZycsXG4gICAgICAgICdmb250LWxhbmd1YWdlLW92ZXJyaWRlJyxcbiAgICAgICAgJ2ZvbnQtc2l6ZScsXG4gICAgICAgICdmb250LXNpemUtYWRqdXN0JyxcbiAgICAgICAgJ2ZvbnQtc21vb3RoaW5nJyxcbiAgICAgICAgJ2ZvbnQtc3RyZXRjaCcsXG4gICAgICAgICdmb250LXN0eWxlJyxcbiAgICAgICAgJ2ZvbnQtdmFyaWFudCcsXG4gICAgICAgICdmb250LXZhcmlhbnQtbGlnYXR1cmVzJyxcbiAgICAgICAgJ2ZvbnQtdmFyaWF0aW9uLXNldHRpbmdzJyxcbiAgICAgICAgJ2ZvbnQtd2VpZ2h0JyxcbiAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICdoeXBoZW5zJyxcbiAgICAgICAgJ2ljb24nLFxuICAgICAgICAnaW1hZ2Utb3JpZW50YXRpb24nLFxuICAgICAgICAnaW1hZ2UtcmVuZGVyaW5nJyxcbiAgICAgICAgJ2ltYWdlLXJlc29sdXRpb24nLFxuICAgICAgICAnaW1lLW1vZGUnLFxuICAgICAgICAnaW5oZXJpdCcsXG4gICAgICAgICdpbml0aWFsJyxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCcsXG4gICAgICAgICdsZWZ0JyxcbiAgICAgICAgJ2xldHRlci1zcGFjaW5nJyxcbiAgICAgICAgJ2xpbmUtaGVpZ2h0JyxcbiAgICAgICAgJ2xpc3Qtc3R5bGUnLFxuICAgICAgICAnbGlzdC1zdHlsZS1pbWFnZScsXG4gICAgICAgICdsaXN0LXN0eWxlLXBvc2l0aW9uJyxcbiAgICAgICAgJ2xpc3Qtc3R5bGUtdHlwZScsXG4gICAgICAgICdtYXJnaW4nLFxuICAgICAgICAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAgICdtYXJnaW4tbGVmdCcsXG4gICAgICAgICdtYXJnaW4tcmlnaHQnLFxuICAgICAgICAnbWFyZ2luLXRvcCcsXG4gICAgICAgICdtYXJrcycsXG4gICAgICAgICdtYXNrJyxcbiAgICAgICAgJ21heC1oZWlnaHQnLFxuICAgICAgICAnbWF4LXdpZHRoJyxcbiAgICAgICAgJ21pbi1oZWlnaHQnLFxuICAgICAgICAnbWluLXdpZHRoJyxcbiAgICAgICAgJ25hdi1kb3duJyxcbiAgICAgICAgJ25hdi1pbmRleCcsXG4gICAgICAgICduYXYtbGVmdCcsXG4gICAgICAgICduYXYtcmlnaHQnLFxuICAgICAgICAnbmF2LXVwJyxcbiAgICAgICAgJ25vbmUnLFxuICAgICAgICAnbm9ybWFsJyxcbiAgICAgICAgJ29iamVjdC1maXQnLFxuICAgICAgICAnb2JqZWN0LXBvc2l0aW9uJyxcbiAgICAgICAgJ29wYWNpdHknLFxuICAgICAgICAnb3JkZXInLFxuICAgICAgICAnb3JwaGFucycsXG4gICAgICAgICdvdXRsaW5lJyxcbiAgICAgICAgJ291dGxpbmUtY29sb3InLFxuICAgICAgICAnb3V0bGluZS1vZmZzZXQnLFxuICAgICAgICAnb3V0bGluZS1zdHlsZScsXG4gICAgICAgICdvdXRsaW5lLXdpZHRoJyxcbiAgICAgICAgJ292ZXJmbG93JyxcbiAgICAgICAgJ292ZXJmbG93LXdyYXAnLFxuICAgICAgICAnb3ZlcmZsb3cteCcsXG4gICAgICAgICdvdmVyZmxvdy15JyxcbiAgICAgICAgJ3BhZGRpbmcnLFxuICAgICAgICAncGFkZGluZy1ib3R0b20nLFxuICAgICAgICAncGFkZGluZy1sZWZ0JyxcbiAgICAgICAgJ3BhZGRpbmctcmlnaHQnLFxuICAgICAgICAncGFkZGluZy10b3AnLFxuICAgICAgICAncGFnZS1icmVhay1hZnRlcicsXG4gICAgICAgICdwYWdlLWJyZWFrLWJlZm9yZScsXG4gICAgICAgICdwYWdlLWJyZWFrLWluc2lkZScsXG4gICAgICAgICdwZXJzcGVjdGl2ZScsXG4gICAgICAgICdwZXJzcGVjdGl2ZS1vcmlnaW4nLFxuICAgICAgICAncG9pbnRlci1ldmVudHMnLFxuICAgICAgICAncG9zaXRpb24nLFxuICAgICAgICAncXVvdGVzJyxcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgICdyaWdodCcsXG4gICAgICAgICdzcmMnLFxuICAgICAgICAndGFiLXNpemUnLFxuICAgICAgICAndGFibGUtbGF5b3V0JyxcbiAgICAgICAgJ3RleHQtYWxpZ24nLFxuICAgICAgICAndGV4dC1hbGlnbi1sYXN0JyxcbiAgICAgICAgJ3RleHQtZGVjb3JhdGlvbicsXG4gICAgICAgICd0ZXh0LWRlY29yYXRpb24tY29sb3InLFxuICAgICAgICAndGV4dC1kZWNvcmF0aW9uLWxpbmUnLFxuICAgICAgICAndGV4dC1kZWNvcmF0aW9uLXN0eWxlJyxcbiAgICAgICAgJ3RleHQtaW5kZW50JyxcbiAgICAgICAgJ3RleHQtb3ZlcmZsb3cnLFxuICAgICAgICAndGV4dC1yZW5kZXJpbmcnLFxuICAgICAgICAndGV4dC1zaGFkb3cnLFxuICAgICAgICAndGV4dC10cmFuc2Zvcm0nLFxuICAgICAgICAndGV4dC11bmRlcmxpbmUtcG9zaXRpb24nLFxuICAgICAgICAndG9wJyxcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJyxcbiAgICAgICAgJ3RyYW5zZm9ybS1zdHlsZScsXG4gICAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgICAgJ3RyYW5zaXRpb24tZGVsYXknLFxuICAgICAgICAndHJhbnNpdGlvbi1kdXJhdGlvbicsXG4gICAgICAgICd0cmFuc2l0aW9uLXByb3BlcnR5JyxcbiAgICAgICAgJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJyxcbiAgICAgICAgJ3VuaWNvZGUtYmlkaScsXG4gICAgICAgICd2ZXJ0aWNhbC1hbGlnbicsXG4gICAgICAgICd2aXNpYmlsaXR5JyxcbiAgICAgICAgJ3doaXRlLXNwYWNlJyxcbiAgICAgICAgJ3dpZG93cycsXG4gICAgICAgICd3aWR0aCcsXG4gICAgICAgICd3b3JkLWJyZWFrJyxcbiAgICAgICAgJ3dvcmQtc3BhY2luZycsXG4gICAgICAgICd3b3JkLXdyYXAnLFxuICAgICAgICAnei1pbmRleCcsXG4gICAgICBdLnJldmVyc2UoKSxcbiAgICAgIHIgPSBpLmNvbmNhdChvKVxuICAgIHJldHVybiBhID0+IHtcbiAgICAgIGNvbnN0IHMgPSAoZSA9PiAoe1xuICAgICAgICAgIElNUE9SVEFOVDogeyBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46ICchaW1wb3J0YW50JyB9LFxuICAgICAgICAgIEhFWENPTE9SOiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgYmVnaW46ICcjKFthLWZBLUYwLTldezZ9fFthLWZBLUYwLTldezN9KScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBBVFRSSUJVVEVfU0VMRUNUT1JfTU9ERToge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItYXR0cicsXG4gICAgICAgICAgICBiZWdpbjogL1xcWy8sXG4gICAgICAgICAgICBlbmQ6IC9cXF0vLFxuICAgICAgICAgICAgaWxsZWdhbDogJyQnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtlLkFQT1NfU1RSSU5HX01PREUsIGUuUVVPVEVfU1RSSU5HX01PREVdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pKShhKSxcbiAgICAgICAgbCA9IHIsXG4gICAgICAgIGQgPSAnKFtcXFxcdy1dK3xAXFxcXHtbXFxcXHctXStcXFxcfSknLFxuICAgICAgICBjID0gW10sXG4gICAgICAgIGcgPSBbXSxcbiAgICAgICAgYiA9IGUgPT4gKHsgY2xhc3NOYW1lOiAnc3RyaW5nJywgYmVnaW46ICd+PycgKyBlICsgJy4qPycgKyBlIH0pLFxuICAgICAgICBtID0gKGUsIHQsIGkpID0+ICh7IGNsYXNzTmFtZTogZSwgYmVnaW46IHQsIHJlbGV2YW5jZTogaSB9KSxcbiAgICAgICAgdSA9IHtcbiAgICAgICAgICAkcGF0dGVybjogL1thLXotXSsvLFxuICAgICAgICAgIGtleXdvcmQ6ICdhbmQgb3Igbm90IG9ubHknLFxuICAgICAgICAgIGF0dHJpYnV0ZTogdC5qb2luKCcgJyksXG4gICAgICAgIH0sXG4gICAgICAgIHAgPSB7XG4gICAgICAgICAgYmVnaW46ICdcXFxcKCcsXG4gICAgICAgICAgZW5kOiAnXFxcXCknLFxuICAgICAgICAgIGNvbnRhaW5zOiBnLFxuICAgICAgICAgIGtleXdvcmRzOiB1LFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgfVxuICAgICAgZy5wdXNoKFxuICAgICAgICBhLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgIGEuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgIGIoXCInXCIpLFxuICAgICAgICBiKCdcIicpLFxuICAgICAgICBhLkNTU19OVU1CRVJfTU9ERSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnKHVybHxkYXRhLXVyaSlcXFxcKCcsXG4gICAgICAgICAgc3RhcnRzOiB7IGNsYXNzTmFtZTogJ3N0cmluZycsIGVuZDogJ1tcXFxcKVxcXFxuXScsIGV4Y2x1ZGVFbmQ6ICEwIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHMuSEVYQ09MT1IsXG4gICAgICAgIHAsXG4gICAgICAgIG0oJ3ZhcmlhYmxlJywgJ0BAP1tcXFxcdy1dKycsIDEwKSxcbiAgICAgICAgbSgndmFyaWFibGUnLCAnQFxcXFx7W1xcXFx3LV0rXFxcXH0nKSxcbiAgICAgICAgbSgnYnVpbHRfaW4nLCAnfj9gW15gXSo/YCcpLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgICBiZWdpbjogJ1tcXFxcdy1dK1xcXFxzKjonLFxuICAgICAgICAgIGVuZDogJzonLFxuICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgfSxcbiAgICAgICAgcy5JTVBPUlRBTlRcbiAgICAgIClcbiAgICAgIGNvbnN0IGYgPSBnLmNvbmNhdCh7IGJlZ2luOiAvXFx7LywgZW5kOiAvXFx9LywgY29udGFpbnM6IGMgfSksXG4gICAgICAgIGggPSB7XG4gICAgICAgICAgYmVnaW5LZXl3b3JkczogJ3doZW4nLFxuICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiAhMCxcbiAgICAgICAgICBjb250YWluczogW3sgYmVnaW5LZXl3b3JkczogJ2FuZCBub3QnIH1dLmNvbmNhdChnKSxcbiAgICAgICAgfSxcbiAgICAgICAgdyA9IHtcbiAgICAgICAgICBiZWdpbjogZCArICdcXFxccyo6JyxcbiAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgZW5kOiAvWzt9XS8sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAvLSh3ZWJraXR8bW96fG1zfG8pLS8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYignICsgbi5qb2luKCd8JykgKyAnKVxcXFxiJyxcbiAgICAgICAgICAgICAgZW5kOiAvKD89OikvLFxuICAgICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogITAsXG4gICAgICAgICAgICAgICAgaWxsZWdhbDogJ1s8PSRdJyxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IGcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHYgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAnQChpbXBvcnR8bWVkaWF8Y2hhcnNldHxmb250LWZhY2V8KC1bYS16XSstKT9rZXlmcmFtZXN8c3VwcG9ydHN8ZG9jdW1lbnR8bmFtZXNwYWNlfHBhZ2V8dmlld3BvcnR8aG9zdClcXFxcYicsXG4gICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICBlbmQ6ICdbO3t9XScsXG4gICAgICAgICAgICBrZXl3b3JkczogdSxcbiAgICAgICAgICAgIHJldHVybkVuZDogITAsXG4gICAgICAgICAgICBjb250YWluczogZyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB5ID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBiZWdpbjogJ0BbXFxcXHctXStcXFxccyo6JywgcmVsZXZhbmNlOiAxNSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJ0BbXFxcXHctXSsnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXJ0czogeyBlbmQ6ICdbO31dJywgcmV0dXJuRW5kOiAhMCwgY29udGFpbnM6IGYgfSxcbiAgICAgICAgfSxcbiAgICAgICAgayA9IHtcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJ1tcXFxcLiM6JlxcXFxbPl0nLFxuICAgICAgICAgICAgICBlbmQ6ICdbO3t9XScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogZCwgZW5kOiAvXFx7LyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgIHJldHVybkVuZDogITAsXG4gICAgICAgICAgaWxsZWdhbDogJ1s8PVxcJyRcIl0nLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgYS5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgYS5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgIGgsXG4gICAgICAgICAgICBtKCdrZXl3b3JkJywgJ2FsbFxcXFxiJyksXG4gICAgICAgICAgICBtKCd2YXJpYWJsZScsICdAXFxcXHtbXFxcXHctXStcXFxcfScpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBlLmpvaW4oJ3wnKSArICcpXFxcXGInLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci10YWcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG0oJ3NlbGVjdG9yLXRhZycsIGQgKyAnJT8nLCAwKSxcbiAgICAgICAgICAgIG0oJ3NlbGVjdG9yLWlkJywgJyMnICsgZCksXG4gICAgICAgICAgICBtKCdzZWxlY3Rvci1jbGFzcycsICdcXFxcLicgKyBkLCAwKSxcbiAgICAgICAgICAgIG0oJ3NlbGVjdG9yLXRhZycsICcmJywgMCksXG4gICAgICAgICAgICBzLkFUVFJJQlVURV9TRUxFQ1RPUl9NT0RFLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1wc2V1ZG8nLFxuICAgICAgICAgICAgICBiZWdpbjogJzooJyArIGkuam9pbignfCcpICsgJyknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItcHNldWRvJyxcbiAgICAgICAgICAgICAgYmVnaW46ICc6OignICsgby5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogJ1xcXFwoJywgZW5kOiAnXFxcXCknLCBjb250YWluczogZiB9LFxuICAgICAgICAgICAgeyBiZWdpbjogJyFpbXBvcnRhbnQnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgRSA9IHtcbiAgICAgICAgICBiZWdpbjogYFtcXFxcdy1dKzooOik/KCR7bC5qb2luKCd8Jyl9KWAsXG4gICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgIGNvbnRhaW5zOiBba10sXG4gICAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIGMucHVzaChhLkNfTElORV9DT01NRU5UX01PREUsIGEuQ19CTE9DS19DT01NRU5UX01PREUsIHYsIHksIEUsIHcsIGspLFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0xlc3MnLFxuICAgICAgICAgIGNhc2VfaW5zZW5zaXRpdmU6ICEwLFxuICAgICAgICAgIGlsbGVnYWw6ICdbPT5cXCcvPCgkXCJdJyxcbiAgICAgICAgICBjb250YWluczogYyxcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnbHVhJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICBjb25zdCB0ID0gJ1xcXFxbPSpcXFxcWycsXG4gICAgICAgIGEgPSAnXFxcXF09KlxcXFxdJyxcbiAgICAgICAgbiA9IHsgYmVnaW46IHQsIGVuZDogYSwgY29udGFpbnM6IFsnc2VsZiddIH0sXG4gICAgICAgIG8gPSBbXG4gICAgICAgICAgZS5DT01NRU5UKCctLSg/IVxcXFxbPSpcXFxcWyknLCAnJCcpLFxuICAgICAgICAgIGUuQ09NTUVOVCgnLS1cXFxcWz0qXFxcXFsnLCBhLCB7IGNvbnRhaW5zOiBbbl0sIHJlbGV2YW5jZTogMTAgfSksXG4gICAgICAgIF1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdMdWEnLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICRwYXR0ZXJuOiBlLlVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAgICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UgbmlsJyxcbiAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2FuZCBicmVhayBkbyBlbHNlIGVsc2VpZiBlbmQgZm9yIGdvdG8gaWYgaW4gbG9jYWwgbm90IG9yIHJlcGVhdCByZXR1cm4gdGhlbiB1bnRpbCB3aGlsZScsXG4gICAgICAgICAgYnVpbHRfaW46XG4gICAgICAgICAgICAnX0cgX0VOViBfVkVSU0lPTiBfX2luZGV4IF9fbmV3aW5kZXggX19tb2RlIF9fY2FsbCBfX21ldGF0YWJsZSBfX3Rvc3RyaW5nIF9fbGVuIF9fZ2MgX19hZGQgX19zdWIgX19tdWwgX19kaXYgX19tb2QgX19wb3cgX19jb25jYXQgX191bm0gX19lcSBfX2x0IF9fbGUgYXNzZXJ0IGNvbGxlY3RnYXJiYWdlIGRvZmlsZSBlcnJvciBnZXRmZW52IGdldG1ldGF0YWJsZSBpcGFpcnMgbG9hZCBsb2FkZmlsZSBsb2Fkc3RyaW5nIG1vZHVsZSBuZXh0IHBhaXJzIHBjYWxsIHByaW50IHJhd2VxdWFsIHJhd2dldCByYXdzZXQgcmVxdWlyZSBzZWxlY3Qgc2V0ZmVudiBzZXRtZXRhdGFibGUgdG9udW1iZXIgdG9zdHJpbmcgdHlwZSB1bnBhY2sgeHBjYWxsIGFyZyBzZWxmIGNvcm91dGluZSByZXN1bWUgeWllbGQgc3RhdHVzIHdyYXAgY3JlYXRlIHJ1bm5pbmcgZGVidWcgZ2V0dXB2YWx1ZSBkZWJ1ZyBzZXRob29rIGdldG1ldGF0YWJsZSBnZXRob29rIHNldG1ldGF0YWJsZSBzZXRsb2NhbCB0cmFjZWJhY2sgc2V0ZmVudiBnZXRpbmZvIHNldHVwdmFsdWUgZ2V0bG9jYWwgZ2V0cmVnaXN0cnkgZ2V0ZmVudiBpbyBsaW5lcyB3cml0ZSBjbG9zZSBmbHVzaCBvcGVuIG91dHB1dCB0eXBlIHJlYWQgc3RkZXJyIHN0ZGluIGlucHV0IHN0ZG91dCBwb3BlbiB0bXBmaWxlIG1hdGggbG9nIG1heCBhY29zIGh1Z2UgbGRleHAgcGkgY29zIHRhbmggcG93IGRlZyB0YW4gY29zaCBzaW5oIHJhbmRvbSByYW5kb21zZWVkIGZyZXhwIGNlaWwgZmxvb3IgcmFkIGFicyBzcXJ0IG1vZGYgYXNpbiBtaW4gbW9kIGZtb2QgbG9nMTAgYXRhbjIgZXhwIHNpbiBhdGFuIG9zIGV4aXQgc2V0bG9jYWxlIGRhdGUgZ2V0ZW52IGRpZmZ0aW1lIHJlbW92ZSB0aW1lIGNsb2NrIHRtcG5hbWUgcmVuYW1lIGV4ZWN1dGUgcGFja2FnZSBwcmVsb2FkIGxvYWRsaWIgbG9hZGVkIGxvYWRlcnMgY3BhdGggY29uZmlnIHBhdGggc2VlYWxsIHN0cmluZyBzdWIgdXBwZXIgbGVuIGdmaW5kIHJlcCBmaW5kIG1hdGNoIGNoYXIgZHVtcCBnbWF0Y2ggcmV2ZXJzZSBieXRlIGZvcm1hdCBnc3ViIGxvd2VyIHRhYmxlIHNldG4gaW5zZXJ0IGdldG4gZm9yZWFjaGkgbWF4biBmb3JlYWNoIGNvbmNhdCBzb3J0IHJlbW92ZScsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5zOiBvLmNvbmNhdChbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIGUuaW5oZXJpdChlLlRJVExFX01PREUsIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJyhbX2EtekEtWl1cXFxcdypcXFxcLikqKFtfYS16QS1aXVxcXFx3KjopP1tfYS16QS1aXVxcXFx3KicsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFwoJyxcbiAgICAgICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogITAsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IG8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLmNvbmNhdChvKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGUuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAgICBlLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgZS5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46IHQsXG4gICAgICAgICAgICBlbmQ6IGEsXG4gICAgICAgICAgICBjb250YWluczogW25dLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnbWFrZWZpbGUnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIHJldHVybiBlID0+IHtcbiAgICAgIGNvbnN0IGkgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXCRcXFxcKCcgKyBlLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnXFxcXCknLFxuICAgICAgICAgICAgICBjb250YWluczogW2UuQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL1xcJFtAJTw/XFxeXFwrXFwqXS8gfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBhID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgYmVnaW46IC9cIi8sXG4gICAgICAgICAgZW5kOiAvXCIvLFxuICAgICAgICAgIGNvbnRhaW5zOiBbZS5CQUNLU0xBU0hfRVNDQVBFLCBpXSxcbiAgICAgICAgfSxcbiAgICAgICAgbiA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgYmVnaW46IC9cXCRcXChbXFx3LV0rXFxzLyxcbiAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICBidWlsdF9pbjpcbiAgICAgICAgICAgICAgJ3N1YnN0IHBhdHN1YnN0IHN0cmlwIGZpbmRzdHJpbmcgZmlsdGVyIGZpbHRlci1vdXQgc29ydCB3b3JkIHdvcmRsaXN0IGZpcnN0d29yZCBsYXN0d29yZCBkaXIgbm90ZGlyIHN1ZmZpeCBiYXNlbmFtZSBhZGRzdWZmaXggYWRkcHJlZml4IGpvaW4gd2lsZGNhcmQgcmVhbHBhdGggYWJzcGF0aCBlcnJvciB3YXJuaW5nIHNoZWxsIG9yaWdpbiBmbGF2b3IgZm9yZWFjaCBpZiBvciBhbmQgY2FsbCBldmFsIGZpbGUgdmFsdWUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnM6IFtpXSxcbiAgICAgICAgfSxcbiAgICAgICAgcyA9IHsgYmVnaW46ICdeJyArIGUuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccyooPz1bOis/XT89KScgfSxcbiAgICAgICAgciA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzZWN0aW9uJyxcbiAgICAgICAgICBiZWdpbjogL15bXlxcc10rOi8sXG4gICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgY29udGFpbnM6IFtpXSxcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ01ha2VmaWxlJyxcbiAgICAgICAgYWxpYXNlczogWydtaycsICdtYWsnLCAnbWFrZSddLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICRwYXR0ZXJuOiAvW1xcdy1dKy8sXG4gICAgICAgICAga2V5d29yZDpcbiAgICAgICAgICAgICdkZWZpbmUgZW5kZWYgdW5kZWZpbmUgaWZkZWYgaWZuZGVmIGlmZXEgaWZuZXEgZWxzZSBlbmRpZiBpbmNsdWRlIC1pbmNsdWRlIHNpbmNsdWRlIG92ZXJyaWRlIGV4cG9ydCB1bmV4cG9ydCBwcml2YXRlIHZwYXRoJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBlLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGksXG4gICAgICAgICAgYSxcbiAgICAgICAgICBuLFxuICAgICAgICAgIHMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICBiZWdpbjogL15cXC5QSE9OWTovLFxuICAgICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgICBrZXl3b3JkczogeyAkcGF0dGVybjogL1tcXC5cXHddKy8sICdtZXRhLWtleXdvcmQnOiAnLlBIT05ZJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcixcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ3htbCcsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgZnVuY3Rpb24gZShlKSB7XG4gICAgICByZXR1cm4gZSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgZSA/IGUgOiBlLnNvdXJjZSkgOiBudWxsXG4gICAgfVxuICAgIGZ1bmN0aW9uIG4oZSkge1xuICAgICAgcmV0dXJuIGEoJyg/PScsIGUsICcpJylcbiAgICB9XG4gICAgZnVuY3Rpb24gYSguLi5uKSB7XG4gICAgICByZXR1cm4gbi5tYXAobiA9PiBlKG4pKS5qb2luKCcnKVxuICAgIH1cbiAgICBmdW5jdGlvbiBzKC4uLm4pIHtcbiAgICAgIHJldHVybiAnKCcgKyBuLm1hcChuID0+IGUobikpLmpvaW4oJ3wnKSArICcpJ1xuICAgIH1cbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICBjb25zdCB0ID0gYSgvW0EtWl9dLywgYSgnKCcsIC9bQS1aMC05Xy4tXSo6LywgJyk/JyksIC9bQS1aMC05Xy4tXSovKSxcbiAgICAgICAgaSA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICAgIGJlZ2luOiAvJlthLXpdKzt8JiNbMC05XSs7fCYjeFthLWYwLTldKzsvLFxuICAgICAgICB9LFxuICAgICAgICByID0ge1xuICAgICAgICAgIGJlZ2luOiAvXFxzLyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLWtleXdvcmQnLFxuICAgICAgICAgICAgICBiZWdpbjogLyM/W2Etel9dW2EtejEtOV8tXSsvLFxuICAgICAgICAgICAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgYyA9IGUuaW5oZXJpdChyLCB7IGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyB9KSxcbiAgICAgICAgbCA9IGUuaW5oZXJpdChlLkFQT1NfU1RSSU5HX01PREUsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsXG4gICAgICAgIH0pLFxuICAgICAgICBnID0gZS5pbmhlcml0KGUuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsXG4gICAgICAgIH0pLFxuICAgICAgICBtID0ge1xuICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiAhMCxcbiAgICAgICAgICBpbGxlZ2FsOiAvPC8sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2F0dHInLCBiZWdpbjogL1tBLVphLXowLTkuXzotXSsvLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC89XFxzKi8sXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgZW5kc1BhcmVudDogITAsXG4gICAgICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi8sIGNvbnRhaW5zOiBbaV0gfSxcbiAgICAgICAgICAgICAgICAgICAgeyBiZWdpbjogLycvLCBlbmQ6IC8nLywgY29udGFpbnM6IFtpXSB9LFxuICAgICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvW15cXHNcIic9PD5gXSsvIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdIVE1MLCBYTUwnLFxuICAgICAgICBhbGlhc2VzOiBbXG4gICAgICAgICAgJ2h0bWwnLFxuICAgICAgICAgICd4aHRtbCcsXG4gICAgICAgICAgJ3JzcycsXG4gICAgICAgICAgJ2F0b20nLFxuICAgICAgICAgICd4amInLFxuICAgICAgICAgICd4c2QnLFxuICAgICAgICAgICd4c2wnLFxuICAgICAgICAgICdwbGlzdCcsXG4gICAgICAgICAgJ3dzZicsXG4gICAgICAgICAgJ3N2ZycsXG4gICAgICAgIF0sXG4gICAgICAgIGNhc2VfaW5zZW5zaXRpdmU6ICEwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgYmVnaW46IC88IVthLXpdLyxcbiAgICAgICAgICAgIGVuZDogLz4vLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAxMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHIsXG4gICAgICAgICAgICAgIGcsXG4gICAgICAgICAgICAgIGwsXG4gICAgICAgICAgICAgIGMsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1xcWy8sXG4gICAgICAgICAgICAgICAgZW5kOiAvXFxdLyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IC88IVthLXpdLyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbciwgYywgZywgbF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZS5DT01NRU5UKC88IS0tLywgLy0tPi8sIHtcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgeyBiZWdpbjogLzwhXFxbQ0RBVEFcXFsvLCBlbmQ6IC9cXF1cXF0+LywgcmVsZXZhbmNlOiAxMCB9LFxuICAgICAgICAgIGksXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICBiZWdpbjogLzxcXD94bWwvLFxuICAgICAgICAgICAgZW5kOiAvXFw/Pi8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgICAgIGJlZ2luOiAvPHN0eWxlKD89XFxzfD4pLyxcbiAgICAgICAgICAgIGVuZDogLz4vLFxuICAgICAgICAgICAga2V5d29yZHM6IHsgbmFtZTogJ3N0eWxlJyB9LFxuICAgICAgICAgICAgY29udGFpbnM6IFttXSxcbiAgICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgICBlbmQ6IC88XFwvc3R5bGU+LyxcbiAgICAgICAgICAgICAgcmV0dXJuRW5kOiAhMCxcbiAgICAgICAgICAgICAgc3ViTGFuZ3VhZ2U6IFsnY3NzJywgJ3htbCddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgICAgICAgICBiZWdpbjogLzxzY3JpcHQoPz1cXHN8PikvLFxuICAgICAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgICAgICBrZXl3b3JkczogeyBuYW1lOiAnc2NyaXB0JyB9LFxuICAgICAgICAgICAgY29udGFpbnM6IFttXSxcbiAgICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgICBlbmQ6IC88XFwvc2NyaXB0Pi8sXG4gICAgICAgICAgICAgIHJldHVybkVuZDogITAsXG4gICAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiBbJ2phdmFzY3JpcHQnLCAnaGFuZGxlYmFycycsICd4bWwnXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICAgICAgYmVnaW46IC88Pnw8XFwvPi8sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICAgICAgYmVnaW46IGEoLzwvLCBuKGEodCwgcygvXFwvPi8sIC8+LywgL1xccy8pKSkpLFxuICAgICAgICAgICAgZW5kOiAvXFwvPz4vLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICduYW1lJywgYmVnaW46IHQsIHJlbGV2YW5jZTogMCwgc3RhcnRzOiBtIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgICAgIGJlZ2luOiBhKC88XFwvLywgbihhKHQsIC8+LykpKSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbmFtZScsIGJlZ2luOiB0LCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogLz4vLCByZWxldmFuY2U6IDAsIGVuZHNQYXJlbnQ6ICEwIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdtYXJrZG93bicsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgZnVuY3Rpb24gbiguLi5uKSB7XG4gICAgICByZXR1cm4gblxuICAgICAgICAubWFwKG4gPT4ge1xuICAgICAgICAgIHJldHVybiAoZSA9IG4pID8gKCdzdHJpbmcnID09IHR5cGVvZiBlID8gZSA6IGUuc291cmNlKSA6IG51bGxcbiAgICAgICAgICB2YXIgZVxuICAgICAgICB9KVxuICAgICAgICAuam9pbignJylcbiAgICB9XG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgY29uc3QgYSA9IHtcbiAgICAgICAgICBiZWdpbjogLzxcXC8/W0EtWmEtel9dLyxcbiAgICAgICAgICBlbmQ6ICc+JyxcbiAgICAgICAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9LFxuICAgICAgICBpID0ge1xuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFxbLis/XFxdXFxbLio/XFxdLywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAgIC9cXFsuKz9cXF1cXCgoKGRhdGF8amF2YXNjcmlwdHxtYWlsdG8pOnwoPzpodHRwfGZ0cClzPzpcXC9cXC8pLio/XFwpLyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IG4oL1xcWy4rP1xcXVxcKC8sIC9bQS1aYS16XVtBLVphLXowLTkrLi1dKi8sIC86XFwvXFwvLio/XFwpLyksXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFxbLis/XFxdXFwoWy4vPyYjXS4qP1xcKS8sIHJlbGV2YW5jZTogMSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL1xcWy4rP1xcXVxcKC4qP1xcKS8sXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxbJyxcbiAgICAgICAgICAgICAgZW5kOiAnXFxcXF0nLFxuICAgICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgICByZXR1cm5FbmQ6ICEwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGluaycsXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcXVxcXFwoJyxcbiAgICAgICAgICAgICAgZW5kOiAnXFxcXCknLFxuICAgICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcXVxcXFxbJyxcbiAgICAgICAgICAgICAgZW5kOiAnXFxcXF0nLFxuICAgICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdHJvbmcnLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXSxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBiZWdpbjogL197Mn0vLCBlbmQ6IC9fezJ9LyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL1xcKnsyfS8sIGVuZDogL1xcKnsyfS8gfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBjID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2VtcGhhc2lzJyxcbiAgICAgICAgICBjb250YWluczogW10sXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXCooPyFcXCopLywgZW5kOiAvXFwqLyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL18oPyFfKS8sXG4gICAgICAgICAgICAgIGVuZDogL18vLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICAgIHMuY29udGFpbnMucHVzaChjKSwgYy5jb250YWlucy5wdXNoKHMpXG4gICAgICBsZXQgdCA9IFthLCBpXVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKHMuY29udGFpbnMgPSBzLmNvbnRhaW5zLmNvbmNhdCh0KSksXG4gICAgICAgIChjLmNvbnRhaW5zID0gYy5jb250YWlucy5jb25jYXQodCkpLFxuICAgICAgICAodCA9IHQuY29uY2F0KHMsIGMpKSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdNYXJrZG93bicsXG4gICAgICAgICAgYWxpYXNlczogWydtZCcsICdta2Rvd24nLCAnbWtkJ10sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VjdGlvbicsXG4gICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgeyBiZWdpbjogJ14jezEsNn0nLCBlbmQ6ICckJywgY29udGFpbnM6IHQgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogJyg/PV4uKz9cXFxcbls9LV17Mix9JCknLFxuICAgICAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBiZWdpbjogJ15bPS1dKiQnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgYmVnaW46ICdeJywgZW5kOiAnXFxcXG4nLCBjb250YWluczogdCB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGEsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1bGxldCcsXG4gICAgICAgICAgICAgIGJlZ2luOiAnXlsgXFx0XSooWyorLV18KFxcXFxkK1xcXFwuKSkoPz1cXFxccyspJyxcbiAgICAgICAgICAgICAgZW5kOiAnXFxcXHMrJyxcbiAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcyxcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3F1b3RlJywgYmVnaW46ICdePlxcXFxzKycsIGNvbnRhaW5zOiB0LCBlbmQ6ICckJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdjb2RlJyxcbiAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICB7IGJlZ2luOiAnKGB7Myx9KVteYF0oLnxcXFxcbikqP1xcXFwxYCpbIF0qJyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAnKH57Myx9KVtefl0oLnxcXFxcbikqP1xcXFwxfipbIF0qJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgYmVnaW46ICdgYGAnLCBlbmQ6ICdgYGArWyBdKiQnIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYmVnaW46ICd+fn4nLFxuICAgICAgICAgICAgICAgICAgZW5kOiAnfn5+K1sgXSokJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgYmVnaW46ICdgLis/YCcgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogJyg/PV4oIHs0fXxcXFxcdCkpJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbeyBiZWdpbjogJ14oIHs0fXxcXFxcdCknLCBlbmQ6ICcoXFxcXG4pJCcgfV0sXG4gICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnXlstXFxcXCpdezMsfScsXG4gICAgICAgICAgICAgIGVuZDogJyQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXlxcW1teXFxuXStcXF06LyxcbiAgICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgICAgICAgICAgICBiZWdpbjogL1xcWy8sXG4gICAgICAgICAgICAgICAgICBlbmQ6IC9cXF0vLFxuICAgICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGluaycsXG4gICAgICAgICAgICAgICAgICBiZWdpbjogLzpcXHMqLyxcbiAgICAgICAgICAgICAgICAgIGVuZDogLyQvLFxuICAgICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICduZ2lueCcsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgY29uc3QgbiA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXCRcXGQrLyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL1xcJFxcey8sIGVuZDogL1xcfS8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC9bJEBdLyArIGUuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgYSA9IHtcbiAgICAgICAgICBlbmRzV2l0aFBhcmVudDogITAsXG4gICAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgICRwYXR0ZXJuOiAnW2Etei9fXSsnLFxuICAgICAgICAgICAgbGl0ZXJhbDpcbiAgICAgICAgICAgICAgJ29uIG9mZiB5ZXMgbm8gdHJ1ZSBmYWxzZSBub25lIGJsb2NrZWQgZGVidWcgaW5mbyBub3RpY2Ugd2FybiBlcnJvciBjcml0IHNlbGVjdCBicmVhayBsYXN0IHBlcm1hbmVudCByZWRpcmVjdCBrcXVldWUgcnRzaWcgZXBvbGwgcG9sbCAvZGV2L3BvbGwnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGlsbGVnYWw6ICc9PicsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIGUuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5CQUNLU0xBU0hfRVNDQVBFLCBuXSxcbiAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICB7IGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi8gfSxcbiAgICAgICAgICAgICAgICB7IGJlZ2luOiAvJy8sIGVuZDogLycvIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJyhbYS16XSspOi8nLFxuICAgICAgICAgICAgICBlbmQ6ICdcXFxccycsXG4gICAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiAhMCxcbiAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbbl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgICAgICAgICAgICBjb250YWluczogW2UuQkFDS1NMQVNIX0VTQ0FQRSwgbl0sXG4gICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgeyBiZWdpbjogJ1xcXFxzXFxcXF4nLCBlbmQ6ICdcXFxcc3xcXFxce3w7JywgcmV0dXJuRW5kOiAhMCB9LFxuICAgICAgICAgICAgICAgIHsgYmVnaW46ICd+XFxcXCo/XFxcXHMrJywgZW5kOiAnXFxcXHN8XFxcXHt8OycsIHJldHVybkVuZDogITAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFwqKFxcXFwuW2EtelxcXFwtXSspKycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7IGJlZ2luOiAnKFthLXpcXFxcLV0rXFxcXC4pK1xcXFwqJyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICAgJ1xcXFxiXFxcXGR7MSwzfVxcXFwuXFxcXGR7MSwzfVxcXFwuXFxcXGR7MSwzfVxcXFwuXFxcXGR7MSwzfSg6XFxcXGR7MSw1fSk/XFxcXGInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYlxcXFxkK1trS21NZ0dkc2hkd3ldKlxcXFxiJyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ05naW54IGNvbmZpZycsXG4gICAgICAgIGFsaWFzZXM6IFsnbmdpbnhjb25mJ10sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgZS5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogZS5VTkRFUlNDT1JFX0lERU5UX1JFICsgJ1xcXFxzK1xcXFx7JyxcbiAgICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICAgIGVuZDogL1xcey8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VjdGlvbicsXG4gICAgICAgICAgICAgICAgYmVnaW46IGUuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogZS5VTkRFUlNDT1JFX0lERU5UX1JFICsgJ1xcXFxzJyxcbiAgICAgICAgICAgIGVuZDogJzt8XFxcXHsnLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScsXG4gICAgICAgICAgICAgICAgYmVnaW46IGUuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAgICAgICAgICBzdGFydHM6IGEsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGlsbGVnYWw6ICdbXlxcXFxzXFxcXH1dJyxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ29iamVjdGl2ZWMnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIHJldHVybiBlID0+IHtcbiAgICAgIGNvbnN0IG4gPSAvW2EtekEtWkBdW2EtekEtWjAtOV9dKi8sXG4gICAgICAgIF8gPSB7XG4gICAgICAgICAgJHBhdHRlcm46IG4sXG4gICAgICAgICAga2V5d29yZDogJ0BpbnRlcmZhY2UgQGNsYXNzIEBwcm90b2NvbCBAaW1wbGVtZW50YXRpb24nLFxuICAgICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnT2JqZWN0aXZlLUMnLFxuICAgICAgICBhbGlhc2VzOiBbJ21tJywgJ29iamMnLCAnb2JqLWMnLCAnb2JqLWMrKycsICdvYmplY3RpdmUtYysrJ10sXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJHBhdHRlcm46IG4sXG4gICAgICAgICAga2V5d29yZDpcbiAgICAgICAgICAgICdpbnQgZmxvYXQgd2hpbGUgY2hhciBleHBvcnQgc2l6ZW9mIHR5cGVkZWYgY29uc3Qgc3RydWN0IGZvciB1bmlvbiB1bnNpZ25lZCBsb25nIHZvbGF0aWxlIHN0YXRpYyBib29sIG11dGFibGUgaWYgZG8gcmV0dXJuIGdvdG8gdm9pZCBlbnVtIGVsc2UgYnJlYWsgZXh0ZXJuIGFzbSBjYXNlIHNob3J0IGRlZmF1bHQgZG91YmxlIHJlZ2lzdGVyIGV4cGxpY2l0IHNpZ25lZCB0eXBlbmFtZSB0aGlzIHN3aXRjaCBjb250aW51ZSB3Y2hhcl90IGlubGluZSByZWFkb25seSBhc3NpZ24gcmVhZHdyaXRlIHNlbGYgQHN5bmNocm9uaXplZCBpZCB0eXBlb2Ygbm9uYXRvbWljIHN1cGVyIHVuaWNoYXIgSUJPdXRsZXQgSUJBY3Rpb24gc3Ryb25nIHdlYWsgY29weSBpbiBvdXQgaW5vdXQgYnljb3B5IGJ5cmVmIG9uZXdheSBfX3N0cm9uZyBfX3dlYWsgX19ibG9jayBfX2F1dG9yZWxlYXNpbmcgQHByaXZhdGUgQHByb3RlY3RlZCBAcHVibGljIEB0cnkgQHByb3BlcnR5IEBlbmQgQHRocm93IEBjYXRjaCBAZmluYWxseSBAYXV0b3JlbGVhc2Vwb29sIEBzeW50aGVzaXplIEBkeW5hbWljIEBzZWxlY3RvciBAb3B0aW9uYWwgQHJlcXVpcmVkIEBlbmNvZGUgQHBhY2thZ2UgQGltcG9ydCBAZGVmcyBAY29tcGF0aWJpbGl0eV9hbGlhcyBfX2JyaWRnZSBfX2JyaWRnZV90cmFuc2ZlciBfX2JyaWRnZV9yZXRhaW5lZCBfX2JyaWRnZV9yZXRhaW4gX19jb3ZhcmlhbnQgX19jb250cmF2YXJpYW50IF9fa2luZG9mIF9Ob25udWxsIF9OdWxsYWJsZSBfTnVsbF91bnNwZWNpZmllZCBfX0ZVTkNUSU9OX18gX19QUkVUVFlfRlVOQ1RJT05fXyBfX2F0dHJpYnV0ZV9fIGdldHRlciBzZXR0ZXIgcmV0YWluIHVuc2FmZV91bnJldGFpbmVkIG5vbm51bGwgbnVsbGFibGUgbnVsbF91bnNwZWNpZmllZCBudWxsX3Jlc2V0dGFibGUgY2xhc3MgaW5zdGFuY2V0eXBlIE5TX0RFU0lHTkFURURfSU5JVElBTElaRVIgTlNfVU5BVkFJTEFCTEUgTlNfUkVRVUlSRVNfU1VQRVIgTlNfUkVUVVJOU19JTk5FUl9QT0lOVEVSIE5TX0lOTElORSBOU19BVkFJTEFCTEUgTlNfREVQUkVDQVRFRCBOU19FTlVNIE5TX09QVElPTlMgTlNfU1dJRlRfVU5BVkFJTEFCTEUgTlNfQVNTVU1FX05PTk5VTExfQkVHSU4gTlNfQVNTVU1FX05PTk5VTExfRU5EIE5TX1JFRklORURfRk9SX1NXSUZUIE5TX1NXSUZUX05BTUUgTlNfU1dJRlRfTk9USFJPVyBOU19EVVJJTkcgTlNfSEFORExFUiBOU19FTkRIQU5ETEVSIE5TX1ZBTFVFUkVUVVJOIE5TX1ZPSURSRVRVUk4nLFxuICAgICAgICAgIGxpdGVyYWw6ICdmYWxzZSB0cnVlIEZBTFNFIFRSVUUgbmlsIFlFUyBOTyBOVUxMJyxcbiAgICAgICAgICBidWlsdF9pbjpcbiAgICAgICAgICAgICdCT09MIGRpc3BhdGNoX29uY2VfdCBkaXNwYXRjaF9xdWV1ZV90IGRpc3BhdGNoX3N5bmMgZGlzcGF0Y2hfYXN5bmMgZGlzcGF0Y2hfb25jZScsXG4gICAgICAgIH0sXG4gICAgICAgIGlsbGVnYWw6ICc8LycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICdcXFxcYihBVnxDQXxDRnxDR3xDSXxDTHxDTXxDTnxDVHxNS3xNUHxNVEt8TVRMfE5TfFNDTnxTS3xVSXxXS3xYQylcXFxcdysnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZS5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGUuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgZS5DX05VTUJFUl9NT0RFLFxuICAgICAgICAgIGUuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAgZS5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdAXCInLFxuICAgICAgICAgICAgICAgIGVuZDogJ1wiJyxcbiAgICAgICAgICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgIGJlZ2luOiAvI1xccypbYS16XStcXGIvLFxuICAgICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgICAnbWV0YS1rZXl3b3JkJzpcbiAgICAgICAgICAgICAgICAnaWYgZWxzZSBlbGlmIGVuZGlmIGRlZmluZSB1bmRlZiB3YXJuaW5nIGVycm9yIGxpbmUgcHJhZ21hIGlmZGVmIGlmbmRlZiBpbmNsdWRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7IGJlZ2luOiAvXFxcXFxcbi8sIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgICBlLmluaGVyaXQoZS5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJyxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZycsXG4gICAgICAgICAgICAgICAgYmVnaW46IC88Lio/Pi8sXG4gICAgICAgICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZS5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICBlLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICAgIGJlZ2luOiAnKCcgKyBfLmtleXdvcmQuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKVxcXFxiJyxcbiAgICAgICAgICAgIGVuZDogLyhcXHt8JCkvLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICBrZXl3b3JkczogXyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5VTkRFUlNDT1JFX1RJVExFX01PREVdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdcXFxcLicgKyBlLlVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ3BlcmwnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIGZ1bmN0aW9uIGUoZSkge1xuICAgICAgcmV0dXJuIGUgPyAoJ3N0cmluZycgPT0gdHlwZW9mIGUgPyBlIDogZS5zb3VyY2UpIDogbnVsbFxuICAgIH1cbiAgICBmdW5jdGlvbiBuKC4uLm4pIHtcbiAgICAgIHJldHVybiBuLm1hcChuID0+IGUobikpLmpvaW4oJycpXG4gICAgfVxuICAgIGZ1bmN0aW9uIHQoLi4ubikge1xuICAgICAgcmV0dXJuICcoJyArIG4ubWFwKG4gPT4gZShuKSkuam9pbignfCcpICsgJyknXG4gICAgfVxuICAgIHJldHVybiBlID0+IHtcbiAgICAgIGNvbnN0IHIgPSAvW2R1YWx4bXNpcG5ncl17MCwxMn0vLFxuICAgICAgICBzID0ge1xuICAgICAgICAgICRwYXR0ZXJuOiAvW1xcdy5dKy8sXG4gICAgICAgICAga2V5d29yZDpcbiAgICAgICAgICAgICdhYnMgYWNjZXB0IGFsYXJtIGFuZCBhdGFuMiBiaW5kIGJpbm1vZGUgYmxlc3MgYnJlYWsgY2FsbGVyIGNoZGlyIGNobW9kIGNob21wIGNob3AgY2hvd24gY2hyIGNocm9vdCBjbG9zZSBjbG9zZWRpciBjb25uZWN0IGNvbnRpbnVlIGNvcyBjcnlwdCBkYm1jbG9zZSBkYm1vcGVuIGRlZmluZWQgZGVsZXRlIGRpZSBkbyBkdW1wIGVhY2ggZWxzZSBlbHNpZiBlbmRncmVudCBlbmRob3N0ZW50IGVuZG5ldGVudCBlbmRwcm90b2VudCBlbmRwd2VudCBlbmRzZXJ2ZW50IGVvZiBldmFsIGV4ZWMgZXhpc3RzIGV4aXQgZXhwIGZjbnRsIGZpbGVubyBmbG9jayBmb3IgZm9yZWFjaCBmb3JrIGZvcm1hdCBmb3JtbGluZSBnZXRjIGdldGdyZW50IGdldGdyZ2lkIGdldGdybmFtIGdldGhvc3RieWFkZHIgZ2V0aG9zdGJ5bmFtZSBnZXRob3N0ZW50IGdldGxvZ2luIGdldG5ldGJ5YWRkciBnZXRuZXRieW5hbWUgZ2V0bmV0ZW50IGdldHBlZXJuYW1lIGdldHBncnAgZ2V0cHJpb3JpdHkgZ2V0cHJvdG9ieW5hbWUgZ2V0cHJvdG9ieW51bWJlciBnZXRwcm90b2VudCBnZXRwd2VudCBnZXRwd25hbSBnZXRwd3VpZCBnZXRzZXJ2YnluYW1lIGdldHNlcnZieXBvcnQgZ2V0c2VydmVudCBnZXRzb2NrbmFtZSBnZXRzb2Nrb3B0IGdpdmVuIGdsb2IgZ210aW1lIGdvdG8gZ3JlcCBndCBoZXggaWYgaW5kZXggaW50IGlvY3RsIGpvaW4ga2V5cyBraWxsIGxhc3QgbGMgbGNmaXJzdCBsZW5ndGggbGluayBsaXN0ZW4gbG9jYWwgbG9jYWx0aW1lIGxvZyBsc3RhdCBsdCBtYSBtYXAgbWtkaXIgbXNnY3RsIG1zZ2dldCBtc2dyY3YgbXNnc25kIG15IG5lIG5leHQgbm8gbm90IG9jdCBvcGVuIG9wZW5kaXIgb3Igb3JkIG91ciBwYWNrIHBhY2thZ2UgcGlwZSBwb3AgcG9zIHByaW50IHByaW50ZiBwcm90b3R5cGUgcHVzaCBxfDAgcXEgcXVvdGVtZXRhIHF3IHF4IHJhbmQgcmVhZCByZWFkZGlyIHJlYWRsaW5lIHJlYWRsaW5rIHJlYWRwaXBlIHJlY3YgcmVkbyByZWYgcmVuYW1lIHJlcXVpcmUgcmVzZXQgcmV0dXJuIHJldmVyc2UgcmV3aW5kZGlyIHJpbmRleCBybWRpciBzYXkgc2NhbGFyIHNlZWsgc2Vla2RpciBzZWxlY3Qgc2VtY3RsIHNlbWdldCBzZW1vcCBzZW5kIHNldGdyZW50IHNldGhvc3RlbnQgc2V0bmV0ZW50IHNldHBncnAgc2V0cHJpb3JpdHkgc2V0cHJvdG9lbnQgc2V0cHdlbnQgc2V0c2VydmVudCBzZXRzb2Nrb3B0IHNoaWZ0IHNobWN0bCBzaG1nZXQgc2htcmVhZCBzaG13cml0ZSBzaHV0ZG93biBzaW4gc2xlZXAgc29ja2V0IHNvY2tldHBhaXIgc29ydCBzcGxpY2Ugc3BsaXQgc3ByaW50ZiBzcXJ0IHNyYW5kIHN0YXQgc3RhdGUgc3R1ZHkgc3ViIHN1YnN0ciBzeW1saW5rIHN5c2NhbGwgc3lzb3BlbiBzeXNyZWFkIHN5c3NlZWsgc3lzdGVtIHN5c3dyaXRlIHRlbGwgdGVsbGRpciB0aWUgdGllZCB0aW1lIHRpbWVzIHRyIHRydW5jYXRlIHVjIHVjZmlyc3QgdW1hc2sgdW5kZWYgdW5sZXNzIHVubGluayB1bnBhY2sgdW5zaGlmdCB1bnRpZSB1bnRpbCB1c2UgdXRpbWUgdmFsdWVzIHZlYyB3YWl0IHdhaXRwaWQgd2FudGFycmF5IHdhcm4gd2hlbiB3aGlsZSB3cml0ZSB4fDAgeG9yIHl8MCcsXG4gICAgICAgIH0sXG4gICAgICAgIGkgPSB7IGNsYXNzTmFtZTogJ3N1YnN0JywgYmVnaW46ICdbJEBdXFxcXHsnLCBlbmQ6ICdcXFxcfScsIGtleXdvcmRzOiBzIH0sXG4gICAgICAgIGEgPSB7IGJlZ2luOiAvLT5cXHsvLCBlbmQ6IC9cXH0vIH0sXG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXCRcXGQvIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiBuKFxuICAgICAgICAgICAgICAgIC9bJCVAXShcXF5cXHdcXGJ8I1xcdysoOjpcXHcrKSp8XFx7XFx3K1xcfXxcXHcrKDo6XFx3KikqKS8sXG4gICAgICAgICAgICAgICAgJyg/IVtBLVphLXpdKSg/IVtAJCVdKSdcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvWyQlQF1bXlxcc1xcd3tdLywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgYyA9IFtlLkJBQ0tTTEFTSF9FU0NBUEUsIGksIG9dLFxuICAgICAgICBnID0gWy8hLywgL1xcLy8sIC9cXHwvLCAvXFw/LywgLycvLCAvXCIvLCAvIy9dLFxuICAgICAgICBsID0gKGUsIHQsIHMgPSAnXFxcXDEnKSA9PiB7XG4gICAgICAgICAgY29uc3QgaSA9ICdcXFxcMScgPT09IHMgPyBzIDogbihzLCB0KVxuICAgICAgICAgIHJldHVybiBuKFxuICAgICAgICAgICAgbignKD86JywgZSwgJyknKSxcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgICAvKD86XFxcXC58W15cXFxcXFwvXSkqPy8sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgLyg/OlxcXFwufFteXFxcXFxcL10pKj8vLFxuICAgICAgICAgICAgcyxcbiAgICAgICAgICAgIHJcbiAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIGQgPSAoZSwgdCwgcykgPT4gbihuKCcoPzonLCBlLCAnKScpLCB0LCAvKD86XFxcXC58W15cXFxcXFwvXSkqPy8sIHMsIHIpLFxuICAgICAgICBwID0gW1xuICAgICAgICAgIG8sXG4gICAgICAgICAgZS5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBlLkNPTU1FTlQoL149XFx3LywgLz1jdXQvLCB7XG4gICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogITAsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgY29udGFpbnM6IGMsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdxW3F3eHJdP1xcXFxzKlxcXFwoJyxcbiAgICAgICAgICAgICAgICBlbmQ6ICdcXFxcKScsXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiA1LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAncVtxd3hyXT9cXFxccypcXFxcWycsIGVuZDogJ1xcXFxdJywgcmVsZXZhbmNlOiA1IH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46ICdxW3F3eHJdP1xcXFxzKlxcXFx7JywgZW5kOiAnXFxcXH0nLCByZWxldmFuY2U6IDUgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAncVtxd3hyXT9cXFxccypcXFxcfCcsXG4gICAgICAgICAgICAgICAgZW5kOiAnXFxcXHwnLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogNSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogJ3FbcXd4cl0/XFxcXHMqPCcsIGVuZDogJz4nLCByZWxldmFuY2U6IDUgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogJ3F3XFxcXHMrcScsIGVuZDogJ3EnLCByZWxldmFuY2U6IDUgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogXCInXCIsIGVuZDogXCInXCIsIGNvbnRhaW5zOiBbZS5CQUNLU0xBU0hfRVNDQVBFXSB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAnXCInLCBlbmQ6ICdcIicgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogJ2AnLCBlbmQ6ICdgJywgY29udGFpbnM6IFtlLkJBQ0tTTEFTSF9FU0NBUEVdIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46IC9cXHtcXHcrXFx9LywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJy0/XFxcXHcrXFxcXHMqPT4nLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICcoXFxcXGIwWzAtN19dKyl8KFxcXFxiMHhbMC05YS1mQS1GX10rKXwoXFxcXGJbMS05XVswLTlfXSooXFxcXC5bMC05X10rKT8pfFswX11cXFxcYicsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgJyhcXFxcL1xcXFwvfCcgK1xuICAgICAgICAgICAgICBlLlJFX1NUQVJURVJTX1JFICtcbiAgICAgICAgICAgICAgJ3xcXFxcYihzcGxpdHxyZXR1cm58cHJpbnR8cmV2ZXJzZXxncmVwKVxcXFxiKVxcXFxzKicsXG4gICAgICAgICAgICBrZXl3b3JkczogJ3NwbGl0IHJldHVybiBwcmludCByZXZlcnNlIGdyZXAnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgZS5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3JlZ2V4cCcsXG4gICAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IGwoJ3N8dHJ8eScsIHQoLi4uZykpLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHsgYmVnaW46IGwoJ3N8dHJ8eScsICdcXFxcKCcsICdcXFxcKScpIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBsKCdzfHRyfHknLCAnXFxcXFsnLCAnXFxcXF0nKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiBsKCdzfHRyfHknLCAnXFxcXHsnLCAnXFxcXH0nKSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAyLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncmVnZXhwJyxcbiAgICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgICAgeyBiZWdpbjogLyhtfHFyKVxcL1xcLy8sIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogZCgnKD86bXxxcik/JywgL1xcLy8sIC9cXC8vKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiBkKCdtfHFyJywgdCguLi5nKSwgL1xcMS8pIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBkKCdtfHFyJywgL1xcKC8sIC9cXCkvKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiBkKCdtfHFyJywgL1xcWy8sIC9cXF0vKSB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogZCgnbXxxcicsIC9cXHsvLCAvXFx9LyksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ3N1YicsXG4gICAgICAgICAgICBlbmQ6ICcoXFxcXHMqXFxcXCguKj9cXFxcKSk/Wzt7XScsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogNSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5USVRMRV9NT0RFXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnLVxcXFx3XFxcXGInLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdeX19EQVRBX18kJyxcbiAgICAgICAgICAgIGVuZDogJ15fX0VORF9fJCcsXG4gICAgICAgICAgICBzdWJMYW5ndWFnZTogJ21vam9saWNpb3VzJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbeyBiZWdpbjogJ15AQC4qJywgZW5kOiAnJCcsIGNsYXNzTmFtZTogJ2NvbW1lbnQnIH1dLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChpLmNvbnRhaW5zID0gcCksXG4gICAgICAgIChhLmNvbnRhaW5zID0gcCksXG4gICAgICAgIHsgbmFtZTogJ1BlcmwnLCBhbGlhc2VzOiBbJ3BsJywgJ3BtJ10sIGtleXdvcmRzOiBzLCBjb250YWluczogcCB9XG4gICAgICApXG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdwaHAnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIHJldHVybiBlID0+IHtcbiAgICAgIGNvbnN0IHIgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgJ1xcXFwkK1thLXpBLVpfXFx4N2YtXFx4ZmZdW2EtekEtWjAtOV9cXHg3Zi1cXHhmZl0qKD8hW0EtWmEtejAtOV0pKD8hWyRdKScsXG4gICAgICAgIH0sXG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC88XFw/cGhwLywgcmVsZXZhbmNlOiAxMCB9LFxuICAgICAgICAgICAgeyBiZWdpbjogLzxcXD9bPV0/LyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL1xcPz4vLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBhID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICAgICAgICB2YXJpYW50czogW3sgYmVnaW46IC9cXCRcXHcrLyB9LCB7IGJlZ2luOiAvXFx7XFwkLywgZW5kOiAvXFx9LyB9XSxcbiAgICAgICAgfSxcbiAgICAgICAgbiA9IGUuaW5oZXJpdChlLkFQT1NfU1RSSU5HX01PREUsIHsgaWxsZWdhbDogbnVsbCB9KSxcbiAgICAgICAgaSA9IGUuaW5oZXJpdChlLlFVT1RFX1NUUklOR19NT0RFLCB7XG4gICAgICAgICAgaWxsZWdhbDogbnVsbCxcbiAgICAgICAgICBjb250YWluczogZS5RVU9URV9TVFJJTkdfTU9ERS5jb250YWlucy5jb25jYXQoYSksXG4gICAgICAgIH0pLFxuICAgICAgICBvID0gZS5FTkRfU0FNRV9BU19CRUdJTih7XG4gICAgICAgICAgYmVnaW46IC88PDxbIFxcdF0qKFxcdyspXFxuLyxcbiAgICAgICAgICBlbmQ6IC9bIFxcdF0qKFxcdyspXFxiLyxcbiAgICAgICAgICBjb250YWluczogZS5RVU9URV9TVFJJTkdfTU9ERS5jb250YWlucy5jb25jYXQoYSksXG4gICAgICAgIH0pLFxuICAgICAgICBsID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgY29udGFpbnM6IFtlLkJBQ0tTTEFTSF9FU0NBUEUsIHRdLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICBlLmluaGVyaXQobiwgeyBiZWdpbjogXCJiJ1wiLCBlbmQ6IFwiJ1wiIH0pLFxuICAgICAgICAgICAgZS5pbmhlcml0KGksIHsgYmVnaW46ICdiXCInLCBlbmQ6ICdcIicgfSksXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIG8sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIwYlswMV0rKD86X1swMV0rKSpcXFxcYicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogJ1xcXFxiMG9bMC03XSsoPzpfWzAtN10rKSpcXFxcYicgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYjB4W1xcXFxkYS1mXSsoPzpfW1xcXFxkYS1mXSspKlxcXFxiJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAgICcoPzpcXFxcYlxcXFxkKyg/Ol9cXFxcZCspKihcXFxcLig/OlxcXFxkKyg/Ol9cXFxcZCspKikpP3xcXFxcQlxcXFwuXFxcXGQrKSg/OmVbKy1dP1xcXFxkKyk/JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGMgPSB7XG4gICAgICAgICAga2V5d29yZDpcbiAgICAgICAgICAgICdfX0NMQVNTX18gX19ESVJfXyBfX0ZJTEVfXyBfX0ZVTkNUSU9OX18gX19MSU5FX18gX19NRVRIT0RfXyBfX05BTUVTUEFDRV9fIF9fVFJBSVRfXyBkaWUgZWNobyBleGl0IGluY2x1ZGUgaW5jbHVkZV9vbmNlIHByaW50IHJlcXVpcmUgcmVxdWlyZV9vbmNlIGFycmF5IGFic3RyYWN0IGFuZCBhcyBiaW5hcnkgYm9vbCBib29sZWFuIGJyZWFrIGNhbGxhYmxlIGNhc2UgY2F0Y2ggY2xhc3MgY2xvbmUgY29uc3QgY29udGludWUgZGVjbGFyZSBkZWZhdWx0IGRvIGRvdWJsZSBlbHNlIGVsc2VpZiBlbXB0eSBlbmRkZWNsYXJlIGVuZGZvciBlbmRmb3JlYWNoIGVuZGlmIGVuZHN3aXRjaCBlbmR3aGlsZSBlbnVtIGV2YWwgZXh0ZW5kcyBmaW5hbCBmaW5hbGx5IGZsb2F0IGZvciBmb3JlYWNoIGZyb20gZ2xvYmFsIGdvdG8gaWYgaW1wbGVtZW50cyBpbnN0YW5jZW9mIGluc3RlYWRvZiBpbnQgaW50ZWdlciBpbnRlcmZhY2UgaXNzZXQgaXRlcmFibGUgbGlzdCBtYXRjaHwwIG1peGVkIG5ldyBvYmplY3Qgb3IgcHJpdmF0ZSBwcm90ZWN0ZWQgcHVibGljIHJlYWwgcmV0dXJuIHN0cmluZyBzd2l0Y2ggdGhyb3cgdHJhaXQgdHJ5IHVuc2V0IHVzZSB2YXIgdm9pZCB3aGlsZSB4b3IgeWllbGQnLFxuICAgICAgICAgIGxpdGVyYWw6ICdmYWxzZSBudWxsIHRydWUnLFxuICAgICAgICAgIGJ1aWx0X2luOlxuICAgICAgICAgICAgJ0Vycm9yfDAgQXBwZW5kSXRlcmF0b3IgQXJndW1lbnRDb3VudEVycm9yIEFyaXRobWV0aWNFcnJvciBBcnJheUl0ZXJhdG9yIEFycmF5T2JqZWN0IEFzc2VydGlvbkVycm9yIEJhZEZ1bmN0aW9uQ2FsbEV4Y2VwdGlvbiBCYWRNZXRob2RDYWxsRXhjZXB0aW9uIENhY2hpbmdJdGVyYXRvciBDYWxsYmFja0ZpbHRlckl0ZXJhdG9yIENvbXBpbGVFcnJvciBDb3VudGFibGUgRGlyZWN0b3J5SXRlcmF0b3IgRGl2aXNpb25CeVplcm9FcnJvciBEb21haW5FeGNlcHRpb24gRW1wdHlJdGVyYXRvciBFcnJvckV4Y2VwdGlvbiBFeGNlcHRpb24gRmlsZXN5c3RlbUl0ZXJhdG9yIEZpbHRlckl0ZXJhdG9yIEdsb2JJdGVyYXRvciBJbmZpbml0ZUl0ZXJhdG9yIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiBJdGVyYXRvckl0ZXJhdG9yIExlbmd0aEV4Y2VwdGlvbiBMaW1pdEl0ZXJhdG9yIExvZ2ljRXhjZXB0aW9uIE11bHRpcGxlSXRlcmF0b3IgTm9SZXdpbmRJdGVyYXRvciBPdXRPZkJvdW5kc0V4Y2VwdGlvbiBPdXRPZlJhbmdlRXhjZXB0aW9uIE91dGVySXRlcmF0b3IgT3ZlcmZsb3dFeGNlcHRpb24gUGFyZW50SXRlcmF0b3IgUGFyc2VFcnJvciBSYW5nZUV4Y2VwdGlvbiBSZWN1cnNpdmVBcnJheUl0ZXJhdG9yIFJlY3Vyc2l2ZUNhY2hpbmdJdGVyYXRvciBSZWN1cnNpdmVDYWxsYmFja0ZpbHRlckl0ZXJhdG9yIFJlY3Vyc2l2ZURpcmVjdG9yeUl0ZXJhdG9yIFJlY3Vyc2l2ZUZpbHRlckl0ZXJhdG9yIFJlY3Vyc2l2ZUl0ZXJhdG9yIFJlY3Vyc2l2ZUl0ZXJhdG9ySXRlcmF0b3IgUmVjdXJzaXZlUmVnZXhJdGVyYXRvciBSZWN1cnNpdmVUcmVlSXRlcmF0b3IgUmVnZXhJdGVyYXRvciBSdW50aW1lRXhjZXB0aW9uIFNlZWthYmxlSXRlcmF0b3IgU3BsRG91Ymx5TGlua2VkTGlzdCBTcGxGaWxlSW5mbyBTcGxGaWxlT2JqZWN0IFNwbEZpeGVkQXJyYXkgU3BsSGVhcCBTcGxNYXhIZWFwIFNwbE1pbkhlYXAgU3BsT2JqZWN0U3RvcmFnZSBTcGxPYnNlcnZlciBTcGxPYnNlcnZlciBTcGxQcmlvcml0eVF1ZXVlIFNwbFF1ZXVlIFNwbFN0YWNrIFNwbFN1YmplY3QgU3BsU3ViamVjdCBTcGxUZW1wRmlsZU9iamVjdCBUeXBlRXJyb3IgVW5kZXJmbG93RXhjZXB0aW9uIFVuZXhwZWN0ZWRWYWx1ZUV4Y2VwdGlvbiBVbmhhbmRsZWRNYXRjaEVycm9yIEFycmF5QWNjZXNzIENsb3N1cmUgR2VuZXJhdG9yIEl0ZXJhdG9yIEl0ZXJhdG9yQWdncmVnYXRlIFNlcmlhbGl6YWJsZSBTdHJpbmdhYmxlIFRocm93YWJsZSBUcmF2ZXJzYWJsZSBXZWFrUmVmZXJlbmNlIFdlYWtNYXAgRGlyZWN0b3J5IF9fUEhQX0luY29tcGxldGVfQ2xhc3MgcGFyZW50IHBocF91c2VyX2ZpbHRlciBzZWxmIHN0YXRpYyBzdGRDbGFzcycsXG4gICAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFsaWFzZXM6IFsncGhwMycsICdwaHA0JywgJ3BocDUnLCAncGhwNicsICdwaHA3JywgJ3BocDgnXSxcbiAgICAgICAgY2FzZV9pbnNlbnNpdGl2ZTogITAsXG4gICAgICAgIGtleXdvcmRzOiBjLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGUuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICAgICAgZS5DT01NRU5UKCcvLycsICckJywgeyBjb250YWluczogW3RdIH0pLFxuICAgICAgICAgIGUuQ09NTUVOVCgnL1xcXFwqJywgJ1xcXFwqLycsIHtcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbeyBjbGFzc05hbWU6ICdkb2N0YWcnLCBiZWdpbjogJ0BbQS1aYS16XSsnIH1dLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGUuQ09NTUVOVCgnX19oYWx0X2NvbXBpbGVyLis/OycsICExLCB7XG4gICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogITAsXG4gICAgICAgICAgICBrZXl3b3JkczogJ19faGFsdF9jb21waWxlcicsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdCxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2tleXdvcmQnLCBiZWdpbjogL1xcJHRoaXNcXGIvIH0sXG4gICAgICAgICAgcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogLyg6OnwtPikrW2EtekEtWl9cXHg3Zi1cXHhmZl1bYS16QS1aMC05X1xceDdmLVxceGZmXSovLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2ZuIGZ1bmN0aW9uJyxcbiAgICAgICAgICAgIGVuZDogL1s7e10vLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICBpbGxlZ2FsOiAnWyQlXFxcXFtdJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW5LZXl3b3JkczogJ3VzZScgfSxcbiAgICAgICAgICAgICAgZS5VTkRFUlNDT1JFX1RJVExFX01PREUsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJz0+JyxcbiAgICAgICAgICAgICAgICBlbmRzUGFyZW50OiAhMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcKCcsXG4gICAgICAgICAgICAgICAgZW5kOiAnXFxcXCknLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogITAsXG4gICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICAgICAga2V5d29yZHM6IGMsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZicsIHIsIGUuQ19CTE9DS19DT01NRU5UX01PREUsIGwsIHNdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZW51bScsXG4gICAgICAgICAgICAgICAgaWxsZWdhbDogL1soJFwiXS8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW5LZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZSB0cmFpdCcsIGlsbGVnYWw6IC9bOigkXCJdLyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGVuZDogL1xcey8sXG4gICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZXh0ZW5kcyBpbXBsZW1lbnRzJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZS5VTkRFUlNDT1JFX1RJVExFX01PREUsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ25hbWVzcGFjZScsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBlbmQ6ICc7JyxcbiAgICAgICAgICAgIGlsbGVnYWw6IC9bLiddLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5VTkRFUlNDT1JFX1RJVExFX01PREVdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ3VzZScsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBlbmQ6ICc7JyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5VTkRFUlNDT1JFX1RJVExFX01PREVdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbCxcbiAgICAgICAgICBzLFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAncGhwLXRlbXBsYXRlJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICByZXR1cm4gbiA9PiAoe1xuICAgICAgbmFtZTogJ1BIUCB0ZW1wbGF0ZScsXG4gICAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgICBjb250YWluczogW1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC88XFw/KHBocHw9KT8vLFxuICAgICAgICAgIGVuZDogL1xcPz4vLFxuICAgICAgICAgIHN1Ykxhbmd1YWdlOiAncGhwJyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgeyBiZWdpbjogJy9cXFxcKicsIGVuZDogJ1xcXFwqLycsIHNraXA6ICEwIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAnYlwiJywgZW5kOiAnXCInLCBza2lwOiAhMCB9LFxuICAgICAgICAgICAgeyBiZWdpbjogXCJiJ1wiLCBlbmQ6IFwiJ1wiLCBza2lwOiAhMCB9LFxuICAgICAgICAgICAgbi5pbmhlcml0KG4uQVBPU19TVFJJTkdfTU9ERSwge1xuICAgICAgICAgICAgICBpbGxlZ2FsOiBudWxsLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBudWxsLFxuICAgICAgICAgICAgICBza2lwOiAhMCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbi5pbmhlcml0KG4uUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICAgICAgICAgICAgaWxsZWdhbDogbnVsbCxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxuICAgICAgICAgICAgICBjb250YWluczogbnVsbCxcbiAgICAgICAgICAgICAgc2tpcDogITAsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdwbGFpbnRleHQnLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIHJldHVybiB0ID0+ICh7XG4gICAgICBuYW1lOiAnUGxhaW4gdGV4dCcsXG4gICAgICBhbGlhc2VzOiBbJ3RleHQnLCAndHh0J10sXG4gICAgICBkaXNhYmxlQXV0b2RldGVjdDogITAsXG4gICAgfSlcbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAncHJvcGVydGllcycsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgdmFyIG4gPSAnWyBcXFxcdFxcXFxmXSonLFxuICAgICAgICBhID0gbiArICdbOj1dJyArIG4sXG4gICAgICAgIHQgPSAnKCcgKyBhICsgJ3xbIFxcXFx0XFxcXGZdKyknLFxuICAgICAgICByID0gJyhbXlxcXFxcXFxcXFxcXFc6PSBcXFxcdFxcXFxmXFxcXG5dfFxcXFxcXFxcLikrJyxcbiAgICAgICAgcyA9ICcoW15cXFxcXFxcXDo9IFxcXFx0XFxcXGZcXFxcbl18XFxcXFxcXFwuKSsnLFxuICAgICAgICBpID0ge1xuICAgICAgICAgIGVuZDogdCxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcXFxcXFxcXFxcXFxcJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogJ1xcXFxcXFxcXFxcXG4nIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICcucHJvcGVydGllcycsXG4gICAgICAgIGNhc2VfaW5zZW5zaXRpdmU6ICEwLFxuICAgICAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBlLkNPTU1FTlQoJ15cXFxccypbISNdJywgJyQnKSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7IGJlZ2luOiByICsgYSwgcmVsZXZhbmNlOiAxIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46IHIgKyAnWyBcXFxcdFxcXFxmXSsnLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2F0dHInLCBiZWdpbjogciwgZW5kc1BhcmVudDogITAsIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXJ0czogaSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBzICsgdCxcbiAgICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbWV0YScsIGJlZ2luOiBzLCBlbmRzUGFyZW50OiAhMCwgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhcnRzOiBpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdhdHRyJywgcmVsZXZhbmNlOiAwLCBiZWdpbjogcyArIG4gKyAnJCcgfSxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ3B5dGhvbicsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgY29uc3QgbiA9IHtcbiAgICAgICAgICAkcGF0dGVybjogL1tBLVphLXpdXFx3K3xfX1xcdytfXy8sXG4gICAgICAgICAga2V5d29yZDogW1xuICAgICAgICAgICAgJ2FuZCcsXG4gICAgICAgICAgICAnYXMnLFxuICAgICAgICAgICAgJ2Fzc2VydCcsXG4gICAgICAgICAgICAnYXN5bmMnLFxuICAgICAgICAgICAgJ2F3YWl0JyxcbiAgICAgICAgICAgICdicmVhaycsXG4gICAgICAgICAgICAnY2xhc3MnLFxuICAgICAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgICAgICdkZWYnLFxuICAgICAgICAgICAgJ2RlbCcsXG4gICAgICAgICAgICAnZWxpZicsXG4gICAgICAgICAgICAnZWxzZScsXG4gICAgICAgICAgICAnZXhjZXB0JyxcbiAgICAgICAgICAgICdmaW5hbGx5JyxcbiAgICAgICAgICAgICdmb3InLFxuICAgICAgICAgICAgJ2Zyb20nLFxuICAgICAgICAgICAgJ2dsb2JhbCcsXG4gICAgICAgICAgICAnaWYnLFxuICAgICAgICAgICAgJ2ltcG9ydCcsXG4gICAgICAgICAgICAnaW4nLFxuICAgICAgICAgICAgJ2lzJyxcbiAgICAgICAgICAgICdsYW1iZGEnLFxuICAgICAgICAgICAgJ25vbmxvY2FsfDEwJyxcbiAgICAgICAgICAgICdub3QnLFxuICAgICAgICAgICAgJ29yJyxcbiAgICAgICAgICAgICdwYXNzJyxcbiAgICAgICAgICAgICdyYWlzZScsXG4gICAgICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgICAgICd0cnknLFxuICAgICAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgICAgICd3aXRoJyxcbiAgICAgICAgICAgICd5aWVsZCcsXG4gICAgICAgICAgXSxcbiAgICAgICAgICBidWlsdF9pbjogW1xuICAgICAgICAgICAgJ19faW1wb3J0X18nLFxuICAgICAgICAgICAgJ2FicycsXG4gICAgICAgICAgICAnYWxsJyxcbiAgICAgICAgICAgICdhbnknLFxuICAgICAgICAgICAgJ2FzY2lpJyxcbiAgICAgICAgICAgICdiaW4nLFxuICAgICAgICAgICAgJ2Jvb2wnLFxuICAgICAgICAgICAgJ2JyZWFrcG9pbnQnLFxuICAgICAgICAgICAgJ2J5dGVhcnJheScsXG4gICAgICAgICAgICAnYnl0ZXMnLFxuICAgICAgICAgICAgJ2NhbGxhYmxlJyxcbiAgICAgICAgICAgICdjaHInLFxuICAgICAgICAgICAgJ2NsYXNzbWV0aG9kJyxcbiAgICAgICAgICAgICdjb21waWxlJyxcbiAgICAgICAgICAgICdjb21wbGV4JyxcbiAgICAgICAgICAgICdkZWxhdHRyJyxcbiAgICAgICAgICAgICdkaWN0JyxcbiAgICAgICAgICAgICdkaXInLFxuICAgICAgICAgICAgJ2Rpdm1vZCcsXG4gICAgICAgICAgICAnZW51bWVyYXRlJyxcbiAgICAgICAgICAgICdldmFsJyxcbiAgICAgICAgICAgICdleGVjJyxcbiAgICAgICAgICAgICdmaWx0ZXInLFxuICAgICAgICAgICAgJ2Zsb2F0JyxcbiAgICAgICAgICAgICdmb3JtYXQnLFxuICAgICAgICAgICAgJ2Zyb3plbnNldCcsXG4gICAgICAgICAgICAnZ2V0YXR0cicsXG4gICAgICAgICAgICAnZ2xvYmFscycsXG4gICAgICAgICAgICAnaGFzYXR0cicsXG4gICAgICAgICAgICAnaGFzaCcsXG4gICAgICAgICAgICAnaGVscCcsXG4gICAgICAgICAgICAnaGV4JyxcbiAgICAgICAgICAgICdpZCcsXG4gICAgICAgICAgICAnaW5wdXQnLFxuICAgICAgICAgICAgJ2ludCcsXG4gICAgICAgICAgICAnaXNpbnN0YW5jZScsXG4gICAgICAgICAgICAnaXNzdWJjbGFzcycsXG4gICAgICAgICAgICAnaXRlcicsXG4gICAgICAgICAgICAnbGVuJyxcbiAgICAgICAgICAgICdsaXN0JyxcbiAgICAgICAgICAgICdsb2NhbHMnLFxuICAgICAgICAgICAgJ21hcCcsXG4gICAgICAgICAgICAnbWF4JyxcbiAgICAgICAgICAgICdtZW1vcnl2aWV3JyxcbiAgICAgICAgICAgICdtaW4nLFxuICAgICAgICAgICAgJ25leHQnLFxuICAgICAgICAgICAgJ29iamVjdCcsXG4gICAgICAgICAgICAnb2N0JyxcbiAgICAgICAgICAgICdvcGVuJyxcbiAgICAgICAgICAgICdvcmQnLFxuICAgICAgICAgICAgJ3BvdycsXG4gICAgICAgICAgICAncHJpbnQnLFxuICAgICAgICAgICAgJ3Byb3BlcnR5JyxcbiAgICAgICAgICAgICdyYW5nZScsXG4gICAgICAgICAgICAncmVwcicsXG4gICAgICAgICAgICAncmV2ZXJzZWQnLFxuICAgICAgICAgICAgJ3JvdW5kJyxcbiAgICAgICAgICAgICdzZXQnLFxuICAgICAgICAgICAgJ3NldGF0dHInLFxuICAgICAgICAgICAgJ3NsaWNlJyxcbiAgICAgICAgICAgICdzb3J0ZWQnLFxuICAgICAgICAgICAgJ3N0YXRpY21ldGhvZCcsXG4gICAgICAgICAgICAnc3RyJyxcbiAgICAgICAgICAgICdzdW0nLFxuICAgICAgICAgICAgJ3N1cGVyJyxcbiAgICAgICAgICAgICd0dXBsZScsXG4gICAgICAgICAgICAndHlwZScsXG4gICAgICAgICAgICAndmFycycsXG4gICAgICAgICAgICAnemlwJyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGxpdGVyYWw6IFtcbiAgICAgICAgICAgICdfX2RlYnVnX18nLFxuICAgICAgICAgICAgJ0VsbGlwc2lzJyxcbiAgICAgICAgICAgICdGYWxzZScsXG4gICAgICAgICAgICAnTm9uZScsXG4gICAgICAgICAgICAnTm90SW1wbGVtZW50ZWQnLFxuICAgICAgICAgICAgJ1RydWUnLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdHlwZTogW1xuICAgICAgICAgICAgJ0FueScsXG4gICAgICAgICAgICAnQ2FsbGFibGUnLFxuICAgICAgICAgICAgJ0Nvcm91dGluZScsXG4gICAgICAgICAgICAnRGljdCcsXG4gICAgICAgICAgICAnTGlzdCcsXG4gICAgICAgICAgICAnTGl0ZXJhbCcsXG4gICAgICAgICAgICAnR2VuZXJpYycsXG4gICAgICAgICAgICAnT3B0aW9uYWwnLFxuICAgICAgICAgICAgJ1NlcXVlbmNlJyxcbiAgICAgICAgICAgICdTZXQnLFxuICAgICAgICAgICAgJ1R1cGxlJyxcbiAgICAgICAgICAgICdUeXBlJyxcbiAgICAgICAgICAgICdVbmlvbicsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgYSA9IHsgY2xhc3NOYW1lOiAnbWV0YScsIGJlZ2luOiAvXig+Pj58XFwuXFwuXFwuKSAvIH0sXG4gICAgICAgIGkgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgICAgICAgIGJlZ2luOiAvXFx7LyxcbiAgICAgICAgICBlbmQ6IC9cXH0vLFxuICAgICAgICAgIGtleXdvcmRzOiBuLFxuICAgICAgICAgIGlsbGVnYWw6IC8jLyxcbiAgICAgICAgfSxcbiAgICAgICAgcyA9IHsgYmVnaW46IC9cXHtcXHsvLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgIGNvbnRhaW5zOiBbZS5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogLyhbdVVdfFtiQl18W3JSXXxbYkJdW3JSXXxbclJdW2JCXSk/JycnLyxcbiAgICAgICAgICAgICAgZW5kOiAvJycnLyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtlLkJBQ0tTTEFTSF9FU0NBUEUsIGFdLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC8oW3VVXXxbYkJdfFtyUl18W2JCXVtyUl18W3JSXVtiQl0pP1wiXCJcIi8sXG4gICAgICAgICAgICAgIGVuZDogL1wiXCJcIi8sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5CQUNLU0xBU0hfRVNDQVBFLCBhXSxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAxMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvKFtmRl1bclJdfFtyUl1bZkZdfFtmRl0pJycnLyxcbiAgICAgICAgICAgICAgZW5kOiAvJycnLyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtlLkJBQ0tTTEFTSF9FU0NBUEUsIGEsIHMsIGldLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC8oW2ZGXVtyUl18W3JSXVtmRl18W2ZGXSlcIlwiXCIvLFxuICAgICAgICAgICAgICBlbmQ6IC9cIlwiXCIvLFxuICAgICAgICAgICAgICBjb250YWluczogW2UuQkFDS1NMQVNIX0VTQ0FQRSwgYSwgcywgaV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogLyhbdVVdfFtyUl0pJy8sIGVuZDogLycvLCByZWxldmFuY2U6IDEwIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvKFt1VV18W3JSXSlcIi8sIGVuZDogL1wiLywgcmVsZXZhbmNlOiAxMCB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogLyhbYkJdfFtiQl1bclJdfFtyUl1bYkJdKScvLFxuICAgICAgICAgICAgICBlbmQ6IC8nLyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvKFtiQl18W2JCXVtyUl18W3JSXVtiQl0pXCIvLCBlbmQ6IC9cIi8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC8oW2ZGXVtyUl18W3JSXVtmRl18W2ZGXSknLyxcbiAgICAgICAgICAgICAgZW5kOiAvJy8sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5CQUNLU0xBU0hfRVNDQVBFLCBzLCBpXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvKFtmRl1bclJdfFtyUl1bZkZdfFtmRl0pXCIvLFxuICAgICAgICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5CQUNLU0xBU0hfRVNDQVBFLCBzLCBpXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgICBlLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHIgPSAnWzAtOV0oXz9bMC05XSkqJyxcbiAgICAgICAgbCA9IGAoXFxcXGIoJHtyfSkpP1xcXFwuKCR7cn0pfFxcXFxiKCR7cn0pXFxcXC5gLFxuICAgICAgICBiID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiBgKFxcXFxiKCR7cn0pfCgke2x9KSlbZUVdWystXT8oJHtyfSlbakpdP1xcXFxiYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiBgKCR7bH0pW2pKXT9gIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIoWzEtOV0oXz9bMC05XSkqfDArKF8/MCkqKVtsTGpKXT9cXFxcYicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiMFtiQl0oXz9bMDFdKStbbExdP1xcXFxiJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAnXFxcXGIwW29PXShfP1swLTddKStbbExdP1xcXFxiJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiMFt4WF0oXz9bMC05YS1mQS1GXSkrW2xMXT9cXFxcYicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogYFxcXFxiKCR7cn0pW2pKXVxcXFxiYCB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAoKGQgPSAvIyB0eXBlOi8pLFxuICAgICAgICAgICAgKCguLi5lKSA9PlxuICAgICAgICAgICAgICBlXG4gICAgICAgICAgICAgICAgLm1hcChlID0+XG4gICAgICAgICAgICAgICAgICAoZSA9PiAoZSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgZSA/IGUgOiBlLnNvdXJjZSkgOiBudWxsKSkoZSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmpvaW4oJycpKSgnKD89JywgZCwgJyknKSksXG4gICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAga2V5d29yZHM6IG4sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC8jIHR5cGU6LyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogLyMvLCBlbmQ6IC9cXGJcXEIvLCBlbmRzV2l0aFBhcmVudDogITAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBjID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnJywgYmVnaW46IC9cXChcXHMqXFwpLywgc2tpcDogITAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICBleGNsdWRlQmVnaW46ICEwLFxuICAgICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgICAga2V5d29yZHM6IG4sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnLCBhLCBiLCB0LCBlLkhBU0hfQ09NTUVOVF9NT0RFXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgdmFyIGRcbiAgICAgIHJldHVybiAoXG4gICAgICAgIChpLmNvbnRhaW5zID0gW3QsIGIsIGFdKSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdQeXRob24nLFxuICAgICAgICAgIGFsaWFzZXM6IFsncHknLCAnZ3lwJywgJ2lweXRob24nXSxcbiAgICAgICAgICBrZXl3b3JkczogbixcbiAgICAgICAgICBpbGxlZ2FsOiAvKDxcXC98LT58XFw/KXw9Pi8sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIGEsXG4gICAgICAgICAgICBiLFxuICAgICAgICAgICAgeyBiZWdpbjogL1xcYnNlbGZcXGIvIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdpZicsXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0LFxuICAgICAgICAgICAgbyxcbiAgICAgICAgICAgIGUuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2RlZicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NsYXNzJywgYmVnaW5LZXl3b3JkczogJ2NsYXNzJyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBlbmQ6IC86LyxcbiAgICAgICAgICAgICAgaWxsZWdhbDogL1skez07XFxuLF0vLFxuICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgIGUuVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgICAgICAgICAgICAgIGMsXG4gICAgICAgICAgICAgICAgeyBiZWdpbjogLy0+LywgZW5kc1dpdGhQYXJlbnQ6ICEwLCBrZXl3b3JkczogbiB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICAgIGJlZ2luOiAvXltcXHQgXSpALyxcbiAgICAgICAgICAgICAgZW5kOiAvKD89Iyl8JC8sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbYiwgYywgdF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ3B5dGhvbi1yZXBsJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICByZXR1cm4gcyA9PiAoe1xuICAgICAgYWxpYXNlczogWydweWNvbiddLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgIHN0YXJ0czogeyBlbmQ6IC8gfCQvLCBzdGFydHM6IHsgZW5kOiAnJCcsIHN1Ykxhbmd1YWdlOiAncHl0aG9uJyB9IH0sXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHsgYmVnaW46IC9ePj4+KD89WyBdfCQpLyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL15cXC5cXC5cXC4oPz1bIF18JCkvLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdyJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBmdW5jdGlvbiBlKC4uLmUpIHtcbiAgICAgIHJldHVybiBlXG4gICAgICAgIC5tYXAoZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChhID0gZSkgPyAoJ3N0cmluZycgPT0gdHlwZW9mIGEgPyBhIDogYS5zb3VyY2UpIDogbnVsbFxuICAgICAgICAgIHZhciBhXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKVxuICAgIH1cbiAgICByZXR1cm4gYSA9PiB7XG4gICAgICBjb25zdCBuID0gLyg/Oig/OlthLXpBLVpdfFxcLlsuX2EtekEtWl0pWy5fYS16QS1aMC05XSopfFxcLig/IVxcZCkvXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnUicsXG4gICAgICAgIGlsbGVnYWw6IC8tPi8sXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgJHBhdHRlcm46IG4sXG4gICAgICAgICAga2V5d29yZDogJ2Z1bmN0aW9uIGlmIGluIGJyZWFrIG5leHQgcmVwZWF0IGVsc2UgZm9yIHdoaWxlJyxcbiAgICAgICAgICBsaXRlcmFsOlxuICAgICAgICAgICAgJ05VTEwgTkEgVFJVRSBGQUxTRSBJbmYgTmFOIE5BX2ludGVnZXJffDEwIE5BX3JlYWxffDEwIE5BX2NoYXJhY3Rlcl98MTAgTkFfY29tcGxleF98MTAnLFxuICAgICAgICAgIGJ1aWx0X2luOlxuICAgICAgICAgICAgJ0xFVFRFUlMgbGV0dGVycyBtb250aC5hYmIgbW9udGgubmFtZSBwaSBUIEYgYWJzIGFjb3MgYWNvc2ggYWxsIGFueSBhbnlOQSBBcmcgYXMuY2FsbCBhcy5jaGFyYWN0ZXIgYXMuY29tcGxleCBhcy5kb3VibGUgYXMuZW52aXJvbm1lbnQgYXMuaW50ZWdlciBhcy5sb2dpY2FsIGFzLm51bGwuZGVmYXVsdCBhcy5udW1lcmljIGFzLnJhdyBhc2luIGFzaW5oIGF0YW4gYXRhbmggYXR0ciBhdHRyaWJ1dGVzIGJhc2VlbnYgYnJvd3NlciBjIGNhbGwgY2VpbGluZyBjbGFzcyBDb25qIGNvcyBjb3NoIGNvc3BpIGN1bW1heCBjdW1taW4gY3VtcHJvZCBjdW1zdW0gZGlnYW1tYSBkaW0gZGltbmFtZXMgZW1wdHllbnYgZXhwIGV4cHJlc3Npb24gZmxvb3IgZm9yY2VBbmRDYWxsIGdhbW1hIGdjLnRpbWUgZ2xvYmFsZW52IEltIGludGVyYWN0aXZlIGludmlzaWJsZSBpcy5hcnJheSBpcy5hdG9taWMgaXMuY2FsbCBpcy5jaGFyYWN0ZXIgaXMuY29tcGxleCBpcy5kb3VibGUgaXMuZW52aXJvbm1lbnQgaXMuZXhwcmVzc2lvbiBpcy5maW5pdGUgaXMuZnVuY3Rpb24gaXMuaW5maW5pdGUgaXMuaW50ZWdlciBpcy5sYW5ndWFnZSBpcy5saXN0IGlzLmxvZ2ljYWwgaXMubWF0cml4IGlzLm5hIGlzLm5hbWUgaXMubmFuIGlzLm51bGwgaXMubnVtZXJpYyBpcy5vYmplY3QgaXMucGFpcmxpc3QgaXMucmF3IGlzLnJlY3Vyc2l2ZSBpcy5zaW5nbGUgaXMuc3ltYm9sIGxhenlMb2FkREJmZXRjaCBsZW5ndGggbGdhbW1hIGxpc3QgbG9nIG1heCBtaW4gbWlzc2luZyBNb2QgbmFtZXMgbmFyZ3MgbnpjaGFyIG9sZENsYXNzIG9uLmV4aXQgcG9zLnRvLmVudiBwcm9jLnRpbWUgcHJvZCBxdW90ZSByYW5nZSBSZSByZXAgcmV0cmFjZW1lbSByZXR1cm4gcm91bmQgc2VxX2Fsb25nIHNlcV9sZW4gc2VxLmludCBzaWduIHNpZ25pZiBzaW4gc2luaCBzaW5waSBzcXJ0IHN0YW5kYXJkR2VuZXJpYyBzdWJzdGl0dXRlIHN1bSBzd2l0Y2ggdGFuIHRhbmggdGFucGkgdHJhY2VtZW0gdHJpZ2FtbWEgdHJ1bmMgdW5jbGFzcyB1bnRyYWNlbWVtIFVzZU1ldGhvZCB4dGZybScsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBpbGVyRXh0ZW5zaW9uczogW1xuICAgICAgICAgIChhLCBuKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWEuYmVmb3JlTWF0Y2gpIHJldHVyblxuICAgICAgICAgICAgaWYgKGEuc3RhcnRzKSB0aHJvdyBFcnJvcignYmVmb3JlTWF0Y2ggY2Fubm90IGJlIHVzZWQgd2l0aCBzdGFydHMnKVxuICAgICAgICAgICAgY29uc3QgaSA9IE9iamVjdC5hc3NpZ24oe30sIGEpXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhKS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICBkZWxldGUgYVtlXVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIChhLmJlZ2luID0gZShpLmJlZm9yZU1hdGNoLCBlKCcoPz0nLCBpLmJlZ2luLCAnKScpKSksXG4gICAgICAgICAgICAgIChhLnN0YXJ0cyA9IHtcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtPYmplY3QuYXNzaWduKGksIHsgZW5kc1BhcmVudDogITAgfSldLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKGEucmVsZXZhbmNlID0gMCksXG4gICAgICAgICAgICAgIGRlbGV0ZSBpLmJlZm9yZU1hdGNoXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBhLkNPTU1FTlQoLyMnLywgLyQvLCB7XG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogJ0BleGFtcGxlcycsXG4gICAgICAgICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvXFxuLyB9LFxuICAgICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvIydcXHMqKD89QFthLXpBLVpdKykvLCBlbmRzUGFyZW50OiAhMCB9LFxuICAgICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvIycvLCBlbmQ6IC8kLywgZXhjbHVkZUJlZ2luOiAhMCB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogJ0BwYXJhbScsXG4gICAgICAgICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgICAgICAgIHsgYmVnaW46IG4gfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogL2AoPzpcXFxcLnxbXmBcXFxcXSkrYC8sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZW5kc1BhcmVudDogITAsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZG9jdGFnJywgYmVnaW46IC9AW2EtekEtWl0rLyB9LFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ21ldGEta2V5d29yZCcsIGJlZ2luOiAvXFxcXFthLXpBLVpdKy8gfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYS5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgY29udGFpbnM6IFthLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgYS5FTkRfU0FNRV9BU19CRUdJTih7IGJlZ2luOiAvW3JSXVwiKC0qKVxcKC8sIGVuZDogL1xcKSgtKilcIi8gfSksXG4gICAgICAgICAgICAgIGEuRU5EX1NBTUVfQVNfQkVHSU4oeyBiZWdpbjogL1tyUl1cIigtKilcXHsvLCBlbmQ6IC9cXH0oLSopXCIvIH0pLFxuICAgICAgICAgICAgICBhLkVORF9TQU1FX0FTX0JFR0lOKHsgYmVnaW46IC9bclJdXCIoLSopXFxbLywgZW5kOiAvXFxdKC0qKVwiLyB9KSxcbiAgICAgICAgICAgICAgYS5FTkRfU0FNRV9BU19CRUdJTih7IGJlZ2luOiAvW3JSXScoLSopXFwoLywgZW5kOiAvXFwpKC0qKScvIH0pLFxuICAgICAgICAgICAgICBhLkVORF9TQU1FX0FTX0JFR0lOKHsgYmVnaW46IC9bclJdJygtKilcXHsvLCBlbmQ6IC9cXH0oLSopJy8gfSksXG4gICAgICAgICAgICAgIGEuRU5EX1NBTUVfQVNfQkVHSU4oeyBiZWdpbjogL1tyUl0nKC0qKVxcWy8sIGVuZDogL1xcXSgtKiknLyB9KSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogJ1wiJywgZW5kOiAnXCInLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogXCInXCIsIGVuZDogXCInXCIsIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBiZWZvcmVNYXRjaDogLyhbXmEtekEtWjAtOS5fXSkvLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1hdGNoOiAvMFt4WF1bMC05YS1mQS1GXStcXC5bMC05YS1mQS1GXSpbcFBdWystXT9cXGQraT8vLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWF0Y2g6IC8wW3hYXVswLTlhLWZBLUZdKyhbcFBdWystXT9cXGQrKT9bTGldPy8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtYXRjaDogLyhcXGQrKFxcLlxcZCopP3xcXC5cXGQrKShbZUVdWystXT9cXGQrKT9bTGldPy8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBiZWdpbjogJyUnLCBlbmQ6ICclJyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBlKC9bYS16QS1aXVthLXpBLVpfMC05XSovLCAnXFxcXHMrPC1cXFxccysnKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnYCcsXG4gICAgICAgICAgICBlbmQ6ICdgJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1xcXFwuLyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ3J1YnknLFxuICAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuICAgIGZ1bmN0aW9uIGUoLi4uZSkge1xuICAgICAgcmV0dXJuIGVcbiAgICAgICAgLm1hcChlID0+IHtcbiAgICAgICAgICByZXR1cm4gKG4gPSBlKSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgbiA/IG4gOiBuLnNvdXJjZSkgOiBudWxsXG4gICAgICAgICAgdmFyIG5cbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpXG4gICAgfVxuICAgIHJldHVybiBuID0+IHtcbiAgICAgIGNvbnN0IGEgPVxuICAgICAgICAgICcoW2EtekEtWl9dXFxcXHcqWyE/PV0/fFstK35dQHw8PHw+Pnw9fnw9PT0/fDw9PnxbPD5dPT98XFxcXCpcXFxcKnxbLS8rJV4mKn5gfF18XFxcXFtcXFxcXT0/KScsXG4gICAgICAgIGkgPSB7XG4gICAgICAgICAga2V5d29yZDpcbiAgICAgICAgICAgICdhbmQgdGhlbiBkZWZpbmVkIG1vZHVsZSBpbiByZXR1cm4gcmVkbyBpZiBCRUdJTiByZXRyeSBlbmQgZm9yIHNlbGYgd2hlbiBuZXh0IHVudGlsIGRvIGJlZ2luIHVubGVzcyBFTkQgcmVzY3VlIGVsc2UgYnJlYWsgdW5kZWYgbm90IHN1cGVyIGNsYXNzIGNhc2UgcmVxdWlyZSB5aWVsZCBhbGlhcyB3aGlsZSBlbnN1cmUgZWxzaWYgb3IgaW5jbHVkZSBhdHRyX3JlYWRlciBhdHRyX3dyaXRlciBhdHRyX2FjY2Vzc29yIF9fRklMRV9fJyxcbiAgICAgICAgICBidWlsdF9pbjogJ3Byb2MgbGFtYmRhJyxcbiAgICAgICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBuaWwnLFxuICAgICAgICB9LFxuICAgICAgICBzID0geyBjbGFzc05hbWU6ICdkb2N0YWcnLCBiZWdpbjogJ0BbQS1aYS16XSsnIH0sXG4gICAgICAgIHIgPSB7IGJlZ2luOiAnIzwnLCBlbmQ6ICc+JyB9LFxuICAgICAgICBiID0gW1xuICAgICAgICAgIG4uQ09NTUVOVCgnIycsICckJywgeyBjb250YWluczogW3NdIH0pLFxuICAgICAgICAgIG4uQ09NTUVOVCgnXj1iZWdpbicsICdePWVuZCcsIHsgY29udGFpbnM6IFtzXSwgcmVsZXZhbmNlOiAxMCB9KSxcbiAgICAgICAgICBuLkNPTU1FTlQoJ15fX0VORF9fJywgJ1xcXFxuJCcpLFxuICAgICAgICBdLFxuICAgICAgICBjID0geyBjbGFzc05hbWU6ICdzdWJzdCcsIGJlZ2luOiAvI1xcey8sIGVuZDogL1xcfS8sIGtleXdvcmRzOiBpIH0sXG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICBjb250YWluczogW24uQkFDS1NMQVNIX0VTQ0FQRSwgY10sXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC8nLyxcbiAgICAgICAgICAgICAgZW5kOiAvJy8sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL1wiLywgZW5kOiAvXCIvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvYC8sIGVuZDogL2AvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvJVtxUXdXeF0/XFwoLywgZW5kOiAvXFwpLyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogLyVbcVF3V3hdP1xcWy8sIGVuZDogL1xcXS8gfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC8lW3FRd1d4XT9cXHsvLCBlbmQ6IC9cXH0vIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvJVtxUXdXeF0/PC8sXG4gICAgICAgICAgICAgIGVuZDogLz4vLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC8lW3FRd1d4XT9cXC8vLCBlbmQ6IC9cXC8vIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvJVtxUXdXeF0/JS8sIGVuZDogLyUvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvJVtxUXdXeF0/LS8sIGVuZDogLy0vIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvJVtxUXdXeF0/XFx8LywgZW5kOiAvXFx8LyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL1xcQlxcPyhcXFxcXFxkezEsM30pLyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFxCXFw/KFxcXFx4W0EtRmEtZjAtOV17MSwyfSkvIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXFxCXFw/KFxcXFx1XFx7P1tBLUZhLWYwLTldezEsNn1cXH0/KS8sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL1xcQlxcPyhcXFxcTS1cXFxcQy18XFxcXE0tXFxcXGN8XFxcXGNcXFxcTS18XFxcXE0tfFxcXFxDLVxcXFxNLSlbXFx4MjAtXFx4N2VdLyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvXFxCXFw/XFxcXChjfEMtKVtcXHgyMC1cXHg3ZV0vLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgYmVnaW46IC9cXEJcXD9cXFxcP1xcUy8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC88PFstfl0/Jz8oXFx3KylcXG4oPzpbXlxcbl0qXFxuKSo/XFxzKlxcMVxcYi8sXG4gICAgICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogLzw8Wy1+XT8nPy8sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBuLkVORF9TQU1FX0FTX0JFR0lOKHtcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAvKFxcdyspLyxcbiAgICAgICAgICAgICAgICAgIGVuZDogLyhcXHcrKS8sXG4gICAgICAgICAgICAgICAgICBjb250YWluczogW24uQkFDS1NMQVNIX0VTQ0FQRSwgY10sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGcgPSAnWzAtOV0oXz9bMC05XSkqJyxcbiAgICAgICAgZCA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogYFxcXFxiKFsxLTldKF8/WzAtOV0pKnwwKShcXFxcLigke2d9KSk/KFtlRV1bKy1dPygke2d9KXxyKT9pP1xcXFxiYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIwW2REXVswLTldKF8/WzAtOV0pKnI/aT9cXFxcYicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogJ1xcXFxiMFtiQl1bMC0xXShfP1swLTFdKSpyP2k/XFxcXGInIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAnXFxcXGIwW29PXVswLTddKF8/WzAtN10pKnI/aT9cXFxcYicgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYjBbeFhdWzAtOWEtZkEtRl0oXz9bMC05YS1mQS1GXSkqcj9pP1xcXFxiJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIwKF8/WzAtN10pK3I/aT9cXFxcYicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGwgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICBiZWdpbjogJ1xcXFwoJyxcbiAgICAgICAgICBlbmQ6ICdcXFxcKScsXG4gICAgICAgICAgZW5kc1BhcmVudDogITAsXG4gICAgICAgICAga2V5d29yZHM6IGksXG4gICAgICAgIH0sXG4gICAgICAgIG8gPSBbXG4gICAgICAgICAgdCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MgbW9kdWxlJyxcbiAgICAgICAgICAgIGVuZDogJyR8OycsXG4gICAgICAgICAgICBpbGxlZ2FsOiAvPS8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBuLmluaGVyaXQobi5USVRMRV9NT0RFLCB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdbQS1aYS16X11cXFxcdyooOjpcXFxcdyspKihcXFxcP3whKT8nLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnPFxcXFxzKicsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46ICcoJyArIG4uSURFTlRfUkUgKyAnOjopPycgKyBuLklERU5UX1JFLFxuICAgICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLmNvbmNhdChiKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIGJlZ2luOiBlKC9kZWZcXHMrLywgKChfID0gYSArICdcXFxccyooXFxcXCh8O3wkKScpLCBlKCcoPz0nLCBfLCAnKScpKSksXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBrZXl3b3JkczogJ2RlZicsXG4gICAgICAgICAgICBlbmQ6ICckfDsnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtuLmluaGVyaXQobi5USVRMRV9NT0RFLCB7IGJlZ2luOiBhIH0pLCBsXS5jb25jYXQoYiksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGJlZ2luOiBuLklERU5UX1JFICsgJzo6JyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgICAgICBiZWdpbjogbi5VTkRFUlNDT1JFX0lERU5UX1JFICsgJyghfFxcXFw/KT86JyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgICAgICBiZWdpbjogJzooPyFcXFxccyknLFxuICAgICAgICAgICAgY29udGFpbnM6IFt0LCB7IGJlZ2luOiBhIH1dLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgICBiZWdpbjogXCIoXFxcXCRcXFxcVyl8KChcXFxcJHxAQD8pKFxcXFx3KykpKD89W15AJD9dKSg/IVtBLVphLXpdKSg/IVtAJD8nXSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICBiZWdpbjogL1xcfC8sXG4gICAgICAgICAgICBlbmQ6IC9cXHwvLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAga2V5d29yZHM6IGksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJygnICsgbi5SRV9TVEFSVEVSU19SRSArICd8dW5sZXNzKVxcXFxzKicsXG4gICAgICAgICAgICBrZXl3b3JkczogJ3VubGVzcycsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncmVnZXhwJyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW24uQkFDS1NMQVNIX0VTQ0FQRSwgY10sXG4gICAgICAgICAgICAgICAgaWxsZWdhbDogL1xcbi8sXG4gICAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46ICcvJyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAnL1thLXpdKicsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgeyBiZWdpbjogLyVyXFx7LywgZW5kOiAvXFx9W2Etel0qLyB9LFxuICAgICAgICAgICAgICAgICAgeyBiZWdpbjogJyVyXFxcXCgnLCBlbmQ6ICdcXFxcKVthLXpdKicgfSxcbiAgICAgICAgICAgICAgICAgIHsgYmVnaW46ICclciEnLCBlbmQ6ICchW2Etel0qJyB9LFxuICAgICAgICAgICAgICAgICAgeyBiZWdpbjogJyVyXFxcXFsnLCBlbmQ6ICdcXFxcXVthLXpdKicgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXS5jb25jYXQociwgYiksXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXS5jb25jYXQociwgYilcbiAgICAgIHZhciBfXG4gICAgICA7KGMuY29udGFpbnMgPSBvKSwgKGwuY29udGFpbnMgPSBvKVxuICAgICAgY29uc3QgRSA9IFtcbiAgICAgICAgeyBiZWdpbjogL15cXHMqPT4vLCBzdGFydHM6IHsgZW5kOiAnJCcsIGNvbnRhaW5zOiBvIH0gfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgJ14oWz4/XT58W1xcXFx3I10rXFxcXChcXFxcdytcXFxcKTpcXFxcZCs6XFxcXGQrPnwoXFxcXHcrLSk/XFxcXGQrXFxcXC5cXFxcZCtcXFxcLlxcXFxkKyhwXFxcXGQrKT9bXlxcXFxkXVtePl0rPikoPz1bIF0pJyxcbiAgICAgICAgICBzdGFydHM6IHsgZW5kOiAnJCcsIGNvbnRhaW5zOiBvIH0sXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgICByZXR1cm4gKFxuICAgICAgICBiLnVuc2hpZnQociksXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnUnVieScsXG4gICAgICAgICAgYWxpYXNlczogWydyYicsICdnZW1zcGVjJywgJ3BvZHNwZWMnLCAndGhvcicsICdpcmInXSxcbiAgICAgICAgICBrZXl3b3JkczogaSxcbiAgICAgICAgICBpbGxlZ2FsOiAvXFwvXFwqLyxcbiAgICAgICAgICBjb250YWluczogW24uU0hFQkFORyh7IGJpbmFyeTogJ3J1YnknIH0pXVxuICAgICAgICAgICAgLmNvbmNhdChFKVxuICAgICAgICAgICAgLmNvbmNhdChiKVxuICAgICAgICAgICAgLmNvbmNhdChvKSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAncnVzdCcsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgY29uc3QgbiA9ICcoW3VpXSg4fDE2fDMyfDY0fDEyOHxzaXplKXxmKDMyfDY0KSk/JyxcbiAgICAgICAgdCA9XG4gICAgICAgICAgJ2Ryb3AgaTggaTE2IGkzMiBpNjQgaTEyOCBpc2l6ZSB1OCB1MTYgdTMyIHU2NCB1MTI4IHVzaXplIGYzMiBmNjQgc3RyIGNoYXIgYm9vbCBCb3ggT3B0aW9uIFJlc3VsdCBTdHJpbmcgVmVjIENvcHkgU2VuZCBTaXplZCBTeW5jIERyb3AgRm4gRm5NdXQgRm5PbmNlIFRvT3duZWQgQ2xvbmUgRGVidWcgUGFydGlhbEVxIFBhcnRpYWxPcmQgRXEgT3JkIEFzUmVmIEFzTXV0IEludG8gRnJvbSBEZWZhdWx0IEl0ZXJhdG9yIEV4dGVuZCBJbnRvSXRlcmF0b3IgRG91YmxlRW5kZWRJdGVyYXRvciBFeGFjdFNpemVJdGVyYXRvciBTbGljZUNvbmNhdEV4dCBUb1N0cmluZyBhc3NlcnQhIGFzc2VydF9lcSEgYml0ZmxhZ3MhIGJ5dGVzISBjZmchIGNvbCEgY29uY2F0ISBjb25jYXRfaWRlbnRzISBkZWJ1Z19hc3NlcnQhIGRlYnVnX2Fzc2VydF9lcSEgZW52ISBwYW5pYyEgZmlsZSEgZm9ybWF0ISBmb3JtYXRfYXJncyEgaW5jbHVkZV9iaW4hIGluY2x1ZGVfc3RyISBsaW5lISBsb2NhbF9kYXRhX2tleSEgbW9kdWxlX3BhdGghIG9wdGlvbl9lbnYhIHByaW50ISBwcmludGxuISBzZWxlY3QhIHN0cmluZ2lmeSEgdHJ5ISB1bmltcGxlbWVudGVkISB1bnJlYWNoYWJsZSEgdmVjISB3cml0ZSEgd3JpdGVsbiEgbWFjcm9fcnVsZXMhIGFzc2VydF9uZSEgZGVidWdfYXNzZXJ0X25lISdcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdSdXN0JyxcbiAgICAgICAgYWxpYXNlczogWydycyddLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICRwYXR0ZXJuOiBlLklERU5UX1JFICsgJyE/JyxcbiAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2Fic3RyYWN0IGFzIGFzeW5jIGF3YWl0IGJlY29tZSBib3ggYnJlYWsgY29uc3QgY29udGludWUgY3JhdGUgZG8gZHluIGVsc2UgZW51bSBleHRlcm4gZmFsc2UgZmluYWwgZm4gZm9yIGlmIGltcGwgaW4gbGV0IGxvb3AgbWFjcm8gbWF0Y2ggbW9kIG1vdmUgbXV0IG92ZXJyaWRlIHByaXYgcHViIHJlZiByZXR1cm4gc2VsZiBTZWxmIHN0YXRpYyBzdHJ1Y3Qgc3VwZXIgdHJhaXQgdHJ1ZSB0cnkgdHlwZSB0eXBlb2YgdW5zYWZlIHVuc2l6ZWQgdXNlIHZpcnR1YWwgd2hlcmUgd2hpbGUgeWllbGQnLFxuICAgICAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIFNvbWUgTm9uZSBPayBFcnInLFxuICAgICAgICAgIGJ1aWx0X2luOiB0LFxuICAgICAgICB9LFxuICAgICAgICBpbGxlZ2FsOiAnPC8nLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGUuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBlLkNPTU1FTlQoJy9cXFxcKicsICdcXFxcKi8nLCB7IGNvbnRhaW5zOiBbJ3NlbGYnXSB9KSxcbiAgICAgICAgICBlLmluaGVyaXQoZS5RVU9URV9TVFJJTkdfTU9ERSwgeyBiZWdpbjogL2I/XCIvLCBpbGxlZ2FsOiBudWxsIH0pLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7IGJlZ2luOiAvcigjKilcIigufFxcbikqP1wiXFwxKD8hIykvIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL2I/J1xcXFw/KHhcXHd7Mn18dVxcd3s0fXxVXFx3ezh9fC4pJy8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdzeW1ib2wnLCBiZWdpbjogLydbYS16QS1aX11bYS16QS1aMC05X10qLyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYjBiKFswMV9dKyknICsgbixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogJ1xcXFxiMG8oWzAtN19dKyknICsgbiB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYjB4KFtBLUZhLWYwLTlfXSspJyArIG4sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKFxcXFxkW1xcXFxkX10qKFxcXFwuWzAtOV9dKyk/KFtlRV1bKy1dP1swLTlfXSspPyknICsgbixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZm4nLFxuICAgICAgICAgICAgZW5kOiAnKFxcXFwofDwpJyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtlLlVOREVSU0NPUkVfVElUTEVfTU9ERV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgIGJlZ2luOiAnIyE/XFxcXFsnLFxuICAgICAgICAgICAgZW5kOiAnXFxcXF0nLFxuICAgICAgICAgICAgY29udGFpbnM6IFt7IGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJywgYmVnaW46IC9cIi8sIGVuZDogL1wiLyB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICd0eXBlJyxcbiAgICAgICAgICAgIGVuZDogJzsnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgZS5pbmhlcml0KGUuVU5ERVJTQ09SRV9USVRMRV9NT0RFLCB7XG4gICAgICAgICAgICAgICAgZW5kc1BhcmVudDogITAsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGlsbGVnYWw6ICdcXFxcUycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAndHJhaXQgZW51bSBzdHJ1Y3QgdW5pb24nLFxuICAgICAgICAgICAgZW5kOiAvXFx7LyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbZS5pbmhlcml0KGUuVU5ERVJTQ09SRV9USVRMRV9NT0RFLCB7IGVuZHNQYXJlbnQ6ICEwIH0pXSxcbiAgICAgICAgICAgIGlsbGVnYWw6ICdbXFxcXHdcXFxcZF0nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBiZWdpbjogZS5JREVOVF9SRSArICc6OicsIGtleXdvcmRzOiB7IGJ1aWx0X2luOiB0IH0gfSxcbiAgICAgICAgICB7IGJlZ2luOiAnLT4nIH0sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdzY3NzJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBjb25zdCBlID0gW1xuICAgICAgICAnYScsXG4gICAgICAgICdhYmJyJyxcbiAgICAgICAgJ2FkZHJlc3MnLFxuICAgICAgICAnYXJ0aWNsZScsXG4gICAgICAgICdhc2lkZScsXG4gICAgICAgICdhdWRpbycsXG4gICAgICAgICdiJyxcbiAgICAgICAgJ2Jsb2NrcXVvdGUnLFxuICAgICAgICAnYm9keScsXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICAnY2FudmFzJyxcbiAgICAgICAgJ2NhcHRpb24nLFxuICAgICAgICAnY2l0ZScsXG4gICAgICAgICdjb2RlJyxcbiAgICAgICAgJ2RkJyxcbiAgICAgICAgJ2RlbCcsXG4gICAgICAgICdkZXRhaWxzJyxcbiAgICAgICAgJ2RmbicsXG4gICAgICAgICdkaXYnLFxuICAgICAgICAnZGwnLFxuICAgICAgICAnZHQnLFxuICAgICAgICAnZW0nLFxuICAgICAgICAnZmllbGRzZXQnLFxuICAgICAgICAnZmlnY2FwdGlvbicsXG4gICAgICAgICdmaWd1cmUnLFxuICAgICAgICAnZm9vdGVyJyxcbiAgICAgICAgJ2Zvcm0nLFxuICAgICAgICAnaDEnLFxuICAgICAgICAnaDInLFxuICAgICAgICAnaDMnLFxuICAgICAgICAnaDQnLFxuICAgICAgICAnaDUnLFxuICAgICAgICAnaDYnLFxuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ2hncm91cCcsXG4gICAgICAgICdodG1sJyxcbiAgICAgICAgJ2knLFxuICAgICAgICAnaWZyYW1lJyxcbiAgICAgICAgJ2ltZycsXG4gICAgICAgICdpbnB1dCcsXG4gICAgICAgICdpbnMnLFxuICAgICAgICAna2JkJyxcbiAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgJ2xlZ2VuZCcsXG4gICAgICAgICdsaScsXG4gICAgICAgICdtYWluJyxcbiAgICAgICAgJ21hcmsnLFxuICAgICAgICAnbWVudScsXG4gICAgICAgICduYXYnLFxuICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgJ29sJyxcbiAgICAgICAgJ3AnLFxuICAgICAgICAncScsXG4gICAgICAgICdxdW90ZScsXG4gICAgICAgICdzYW1wJyxcbiAgICAgICAgJ3NlY3Rpb24nLFxuICAgICAgICAnc3BhbicsXG4gICAgICAgICdzdHJvbmcnLFxuICAgICAgICAnc3VtbWFyeScsXG4gICAgICAgICdzdXAnLFxuICAgICAgICAndGFibGUnLFxuICAgICAgICAndGJvZHknLFxuICAgICAgICAndGQnLFxuICAgICAgICAndGV4dGFyZWEnLFxuICAgICAgICAndGZvb3QnLFxuICAgICAgICAndGgnLFxuICAgICAgICAndGhlYWQnLFxuICAgICAgICAndGltZScsXG4gICAgICAgICd0cicsXG4gICAgICAgICd1bCcsXG4gICAgICAgICd2YXInLFxuICAgICAgICAndmlkZW8nLFxuICAgICAgXSxcbiAgICAgIHQgPSBbXG4gICAgICAgICdhbnktaG92ZXInLFxuICAgICAgICAnYW55LXBvaW50ZXInLFxuICAgICAgICAnYXNwZWN0LXJhdGlvJyxcbiAgICAgICAgJ2NvbG9yJyxcbiAgICAgICAgJ2NvbG9yLWdhbXV0JyxcbiAgICAgICAgJ2NvbG9yLWluZGV4JyxcbiAgICAgICAgJ2RldmljZS1hc3BlY3QtcmF0aW8nLFxuICAgICAgICAnZGV2aWNlLWhlaWdodCcsXG4gICAgICAgICdkZXZpY2Utd2lkdGgnLFxuICAgICAgICAnZGlzcGxheS1tb2RlJyxcbiAgICAgICAgJ2ZvcmNlZC1jb2xvcnMnLFxuICAgICAgICAnZ3JpZCcsXG4gICAgICAgICdoZWlnaHQnLFxuICAgICAgICAnaG92ZXInLFxuICAgICAgICAnaW52ZXJ0ZWQtY29sb3JzJyxcbiAgICAgICAgJ21vbm9jaHJvbWUnLFxuICAgICAgICAnb3JpZW50YXRpb24nLFxuICAgICAgICAnb3ZlcmZsb3ctYmxvY2snLFxuICAgICAgICAnb3ZlcmZsb3ctaW5saW5lJyxcbiAgICAgICAgJ3BvaW50ZXInLFxuICAgICAgICAncHJlZmVycy1jb2xvci1zY2hlbWUnLFxuICAgICAgICAncHJlZmVycy1jb250cmFzdCcsXG4gICAgICAgICdwcmVmZXJzLXJlZHVjZWQtbW90aW9uJyxcbiAgICAgICAgJ3ByZWZlcnMtcmVkdWNlZC10cmFuc3BhcmVuY3knLFxuICAgICAgICAncmVzb2x1dGlvbicsXG4gICAgICAgICdzY2FuJyxcbiAgICAgICAgJ3NjcmlwdGluZycsXG4gICAgICAgICd1cGRhdGUnLFxuICAgICAgICAnd2lkdGgnLFxuICAgICAgICAnbWluLXdpZHRoJyxcbiAgICAgICAgJ21heC13aWR0aCcsXG4gICAgICAgICdtaW4taGVpZ2h0JyxcbiAgICAgICAgJ21heC1oZWlnaHQnLFxuICAgICAgXSxcbiAgICAgIGkgPSBbXG4gICAgICAgICdhY3RpdmUnLFxuICAgICAgICAnYW55LWxpbmsnLFxuICAgICAgICAnYmxhbmsnLFxuICAgICAgICAnY2hlY2tlZCcsXG4gICAgICAgICdjdXJyZW50JyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAnZGVmaW5lZCcsXG4gICAgICAgICdkaXInLFxuICAgICAgICAnZGlzYWJsZWQnLFxuICAgICAgICAnZHJvcCcsXG4gICAgICAgICdlbXB0eScsXG4gICAgICAgICdlbmFibGVkJyxcbiAgICAgICAgJ2ZpcnN0JyxcbiAgICAgICAgJ2ZpcnN0LWNoaWxkJyxcbiAgICAgICAgJ2ZpcnN0LW9mLXR5cGUnLFxuICAgICAgICAnZnVsbHNjcmVlbicsXG4gICAgICAgICdmdXR1cmUnLFxuICAgICAgICAnZm9jdXMnLFxuICAgICAgICAnZm9jdXMtdmlzaWJsZScsXG4gICAgICAgICdmb2N1cy13aXRoaW4nLFxuICAgICAgICAnaGFzJyxcbiAgICAgICAgJ2hvc3QnLFxuICAgICAgICAnaG9zdC1jb250ZXh0JyxcbiAgICAgICAgJ2hvdmVyJyxcbiAgICAgICAgJ2luZGV0ZXJtaW5hdGUnLFxuICAgICAgICAnaW4tcmFuZ2UnLFxuICAgICAgICAnaW52YWxpZCcsXG4gICAgICAgICdpcycsXG4gICAgICAgICdsYW5nJyxcbiAgICAgICAgJ2xhc3QtY2hpbGQnLFxuICAgICAgICAnbGFzdC1vZi10eXBlJyxcbiAgICAgICAgJ2xlZnQnLFxuICAgICAgICAnbGluaycsXG4gICAgICAgICdsb2NhbC1saW5rJyxcbiAgICAgICAgJ25vdCcsXG4gICAgICAgICdudGgtY2hpbGQnLFxuICAgICAgICAnbnRoLWNvbCcsXG4gICAgICAgICdudGgtbGFzdC1jaGlsZCcsXG4gICAgICAgICdudGgtbGFzdC1jb2wnLFxuICAgICAgICAnbnRoLWxhc3Qtb2YtdHlwZScsXG4gICAgICAgICdudGgtb2YtdHlwZScsXG4gICAgICAgICdvbmx5LWNoaWxkJyxcbiAgICAgICAgJ29ubHktb2YtdHlwZScsXG4gICAgICAgICdvcHRpb25hbCcsXG4gICAgICAgICdvdXQtb2YtcmFuZ2UnLFxuICAgICAgICAncGFzdCcsXG4gICAgICAgICdwbGFjZWhvbGRlci1zaG93bicsXG4gICAgICAgICdyZWFkLW9ubHknLFxuICAgICAgICAncmVhZC13cml0ZScsXG4gICAgICAgICdyZXF1aXJlZCcsXG4gICAgICAgICdyaWdodCcsXG4gICAgICAgICdyb290JyxcbiAgICAgICAgJ3Njb3BlJyxcbiAgICAgICAgJ3RhcmdldCcsXG4gICAgICAgICd0YXJnZXQtd2l0aGluJyxcbiAgICAgICAgJ3VzZXItaW52YWxpZCcsXG4gICAgICAgICd2YWxpZCcsXG4gICAgICAgICd2aXNpdGVkJyxcbiAgICAgICAgJ3doZXJlJyxcbiAgICAgIF0sXG4gICAgICBvID0gW1xuICAgICAgICAnYWZ0ZXInLFxuICAgICAgICAnYmFja2Ryb3AnLFxuICAgICAgICAnYmVmb3JlJyxcbiAgICAgICAgJ2N1ZScsXG4gICAgICAgICdjdWUtcmVnaW9uJyxcbiAgICAgICAgJ2ZpcnN0LWxldHRlcicsXG4gICAgICAgICdmaXJzdC1saW5lJyxcbiAgICAgICAgJ2dyYW1tYXItZXJyb3InLFxuICAgICAgICAnbWFya2VyJyxcbiAgICAgICAgJ3BhcnQnLFxuICAgICAgICAncGxhY2Vob2xkZXInLFxuICAgICAgICAnc2VsZWN0aW9uJyxcbiAgICAgICAgJ3Nsb3R0ZWQnLFxuICAgICAgICAnc3BlbGxpbmctZXJyb3InLFxuICAgICAgXSxcbiAgICAgIHIgPSBbXG4gICAgICAgICdhbGlnbi1jb250ZW50JyxcbiAgICAgICAgJ2FsaWduLWl0ZW1zJyxcbiAgICAgICAgJ2FsaWduLXNlbGYnLFxuICAgICAgICAnYW5pbWF0aW9uJyxcbiAgICAgICAgJ2FuaW1hdGlvbi1kZWxheScsXG4gICAgICAgICdhbmltYXRpb24tZGlyZWN0aW9uJyxcbiAgICAgICAgJ2FuaW1hdGlvbi1kdXJhdGlvbicsXG4gICAgICAgICdhbmltYXRpb24tZmlsbC1tb2RlJyxcbiAgICAgICAgJ2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQnLFxuICAgICAgICAnYW5pbWF0aW9uLW5hbWUnLFxuICAgICAgICAnYW5pbWF0aW9uLXBsYXktc3RhdGUnLFxuICAgICAgICAnYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbicsXG4gICAgICAgICdhdXRvJyxcbiAgICAgICAgJ2JhY2tmYWNlLXZpc2liaWxpdHknLFxuICAgICAgICAnYmFja2dyb3VuZCcsXG4gICAgICAgICdiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnLFxuICAgICAgICAnYmFja2dyb3VuZC1jbGlwJyxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLFxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZScsXG4gICAgICAgICdiYWNrZ3JvdW5kLW9yaWdpbicsXG4gICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJyxcbiAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JyxcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZScsXG4gICAgICAgICdib3JkZXInLFxuICAgICAgICAnYm9yZGVyLWJvdHRvbScsXG4gICAgICAgICdib3JkZXItYm90dG9tLWNvbG9yJyxcbiAgICAgICAgJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLFxuICAgICAgICAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLFxuICAgICAgICAnYm9yZGVyLWJvdHRvbS1zdHlsZScsXG4gICAgICAgICdib3JkZXItYm90dG9tLXdpZHRoJyxcbiAgICAgICAgJ2JvcmRlci1jb2xsYXBzZScsXG4gICAgICAgICdib3JkZXItY29sb3InLFxuICAgICAgICAnYm9yZGVyLWltYWdlJyxcbiAgICAgICAgJ2JvcmRlci1pbWFnZS1vdXRzZXQnLFxuICAgICAgICAnYm9yZGVyLWltYWdlLXJlcGVhdCcsXG4gICAgICAgICdib3JkZXItaW1hZ2Utc2xpY2UnLFxuICAgICAgICAnYm9yZGVyLWltYWdlLXNvdXJjZScsXG4gICAgICAgICdib3JkZXItaW1hZ2Utd2lkdGgnLFxuICAgICAgICAnYm9yZGVyLWxlZnQnLFxuICAgICAgICAnYm9yZGVyLWxlZnQtY29sb3InLFxuICAgICAgICAnYm9yZGVyLWxlZnQtc3R5bGUnLFxuICAgICAgICAnYm9yZGVyLWxlZnQtd2lkdGgnLFxuICAgICAgICAnYm9yZGVyLXJhZGl1cycsXG4gICAgICAgICdib3JkZXItcmlnaHQnLFxuICAgICAgICAnYm9yZGVyLXJpZ2h0LWNvbG9yJyxcbiAgICAgICAgJ2JvcmRlci1yaWdodC1zdHlsZScsXG4gICAgICAgICdib3JkZXItcmlnaHQtd2lkdGgnLFxuICAgICAgICAnYm9yZGVyLXNwYWNpbmcnLFxuICAgICAgICAnYm9yZGVyLXN0eWxlJyxcbiAgICAgICAgJ2JvcmRlci10b3AnLFxuICAgICAgICAnYm9yZGVyLXRvcC1jb2xvcicsXG4gICAgICAgICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJyxcbiAgICAgICAgJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJyxcbiAgICAgICAgJ2JvcmRlci10b3Atc3R5bGUnLFxuICAgICAgICAnYm9yZGVyLXRvcC13aWR0aCcsXG4gICAgICAgICdib3JkZXItd2lkdGgnLFxuICAgICAgICAnYm90dG9tJyxcbiAgICAgICAgJ2JveC1kZWNvcmF0aW9uLWJyZWFrJyxcbiAgICAgICAgJ2JveC1zaGFkb3cnLFxuICAgICAgICAnYm94LXNpemluZycsXG4gICAgICAgICdicmVhay1hZnRlcicsXG4gICAgICAgICdicmVhay1iZWZvcmUnLFxuICAgICAgICAnYnJlYWstaW5zaWRlJyxcbiAgICAgICAgJ2NhcHRpb24tc2lkZScsXG4gICAgICAgICdjbGVhcicsXG4gICAgICAgICdjbGlwJyxcbiAgICAgICAgJ2NsaXAtcGF0aCcsXG4gICAgICAgICdjb2xvcicsXG4gICAgICAgICdjb2x1bW4tY291bnQnLFxuICAgICAgICAnY29sdW1uLWZpbGwnLFxuICAgICAgICAnY29sdW1uLWdhcCcsXG4gICAgICAgICdjb2x1bW4tcnVsZScsXG4gICAgICAgICdjb2x1bW4tcnVsZS1jb2xvcicsXG4gICAgICAgICdjb2x1bW4tcnVsZS1zdHlsZScsXG4gICAgICAgICdjb2x1bW4tcnVsZS13aWR0aCcsXG4gICAgICAgICdjb2x1bW4tc3BhbicsXG4gICAgICAgICdjb2x1bW4td2lkdGgnLFxuICAgICAgICAnY29sdW1ucycsXG4gICAgICAgICdjb250ZW50JyxcbiAgICAgICAgJ2NvdW50ZXItaW5jcmVtZW50JyxcbiAgICAgICAgJ2NvdW50ZXItcmVzZXQnLFxuICAgICAgICAnY3Vyc29yJyxcbiAgICAgICAgJ2RpcmVjdGlvbicsXG4gICAgICAgICdkaXNwbGF5JyxcbiAgICAgICAgJ2VtcHR5LWNlbGxzJyxcbiAgICAgICAgJ2ZpbHRlcicsXG4gICAgICAgICdmbGV4JyxcbiAgICAgICAgJ2ZsZXgtYmFzaXMnLFxuICAgICAgICAnZmxleC1kaXJlY3Rpb24nLFxuICAgICAgICAnZmxleC1mbG93JyxcbiAgICAgICAgJ2ZsZXgtZ3JvdycsXG4gICAgICAgICdmbGV4LXNocmluaycsXG4gICAgICAgICdmbGV4LXdyYXAnLFxuICAgICAgICAnZmxvYXQnLFxuICAgICAgICAnZm9udCcsXG4gICAgICAgICdmb250LWRpc3BsYXknLFxuICAgICAgICAnZm9udC1mYW1pbHknLFxuICAgICAgICAnZm9udC1mZWF0dXJlLXNldHRpbmdzJyxcbiAgICAgICAgJ2ZvbnQta2VybmluZycsXG4gICAgICAgICdmb250LWxhbmd1YWdlLW92ZXJyaWRlJyxcbiAgICAgICAgJ2ZvbnQtc2l6ZScsXG4gICAgICAgICdmb250LXNpemUtYWRqdXN0JyxcbiAgICAgICAgJ2ZvbnQtc21vb3RoaW5nJyxcbiAgICAgICAgJ2ZvbnQtc3RyZXRjaCcsXG4gICAgICAgICdmb250LXN0eWxlJyxcbiAgICAgICAgJ2ZvbnQtdmFyaWFudCcsXG4gICAgICAgICdmb250LXZhcmlhbnQtbGlnYXR1cmVzJyxcbiAgICAgICAgJ2ZvbnQtdmFyaWF0aW9uLXNldHRpbmdzJyxcbiAgICAgICAgJ2ZvbnQtd2VpZ2h0JyxcbiAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICdoeXBoZW5zJyxcbiAgICAgICAgJ2ljb24nLFxuICAgICAgICAnaW1hZ2Utb3JpZW50YXRpb24nLFxuICAgICAgICAnaW1hZ2UtcmVuZGVyaW5nJyxcbiAgICAgICAgJ2ltYWdlLXJlc29sdXRpb24nLFxuICAgICAgICAnaW1lLW1vZGUnLFxuICAgICAgICAnaW5oZXJpdCcsXG4gICAgICAgICdpbml0aWFsJyxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudCcsXG4gICAgICAgICdsZWZ0JyxcbiAgICAgICAgJ2xldHRlci1zcGFjaW5nJyxcbiAgICAgICAgJ2xpbmUtaGVpZ2h0JyxcbiAgICAgICAgJ2xpc3Qtc3R5bGUnLFxuICAgICAgICAnbGlzdC1zdHlsZS1pbWFnZScsXG4gICAgICAgICdsaXN0LXN0eWxlLXBvc2l0aW9uJyxcbiAgICAgICAgJ2xpc3Qtc3R5bGUtdHlwZScsXG4gICAgICAgICdtYXJnaW4nLFxuICAgICAgICAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAgICdtYXJnaW4tbGVmdCcsXG4gICAgICAgICdtYXJnaW4tcmlnaHQnLFxuICAgICAgICAnbWFyZ2luLXRvcCcsXG4gICAgICAgICdtYXJrcycsXG4gICAgICAgICdtYXNrJyxcbiAgICAgICAgJ21heC1oZWlnaHQnLFxuICAgICAgICAnbWF4LXdpZHRoJyxcbiAgICAgICAgJ21pbi1oZWlnaHQnLFxuICAgICAgICAnbWluLXdpZHRoJyxcbiAgICAgICAgJ25hdi1kb3duJyxcbiAgICAgICAgJ25hdi1pbmRleCcsXG4gICAgICAgICduYXYtbGVmdCcsXG4gICAgICAgICduYXYtcmlnaHQnLFxuICAgICAgICAnbmF2LXVwJyxcbiAgICAgICAgJ25vbmUnLFxuICAgICAgICAnbm9ybWFsJyxcbiAgICAgICAgJ29iamVjdC1maXQnLFxuICAgICAgICAnb2JqZWN0LXBvc2l0aW9uJyxcbiAgICAgICAgJ29wYWNpdHknLFxuICAgICAgICAnb3JkZXInLFxuICAgICAgICAnb3JwaGFucycsXG4gICAgICAgICdvdXRsaW5lJyxcbiAgICAgICAgJ291dGxpbmUtY29sb3InLFxuICAgICAgICAnb3V0bGluZS1vZmZzZXQnLFxuICAgICAgICAnb3V0bGluZS1zdHlsZScsXG4gICAgICAgICdvdXRsaW5lLXdpZHRoJyxcbiAgICAgICAgJ292ZXJmbG93JyxcbiAgICAgICAgJ292ZXJmbG93LXdyYXAnLFxuICAgICAgICAnb3ZlcmZsb3cteCcsXG4gICAgICAgICdvdmVyZmxvdy15JyxcbiAgICAgICAgJ3BhZGRpbmcnLFxuICAgICAgICAncGFkZGluZy1ib3R0b20nLFxuICAgICAgICAncGFkZGluZy1sZWZ0JyxcbiAgICAgICAgJ3BhZGRpbmctcmlnaHQnLFxuICAgICAgICAncGFkZGluZy10b3AnLFxuICAgICAgICAncGFnZS1icmVhay1hZnRlcicsXG4gICAgICAgICdwYWdlLWJyZWFrLWJlZm9yZScsXG4gICAgICAgICdwYWdlLWJyZWFrLWluc2lkZScsXG4gICAgICAgICdwZXJzcGVjdGl2ZScsXG4gICAgICAgICdwZXJzcGVjdGl2ZS1vcmlnaW4nLFxuICAgICAgICAncG9pbnRlci1ldmVudHMnLFxuICAgICAgICAncG9zaXRpb24nLFxuICAgICAgICAncXVvdGVzJyxcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgICdyaWdodCcsXG4gICAgICAgICdzcmMnLFxuICAgICAgICAndGFiLXNpemUnLFxuICAgICAgICAndGFibGUtbGF5b3V0JyxcbiAgICAgICAgJ3RleHQtYWxpZ24nLFxuICAgICAgICAndGV4dC1hbGlnbi1sYXN0JyxcbiAgICAgICAgJ3RleHQtZGVjb3JhdGlvbicsXG4gICAgICAgICd0ZXh0LWRlY29yYXRpb24tY29sb3InLFxuICAgICAgICAndGV4dC1kZWNvcmF0aW9uLWxpbmUnLFxuICAgICAgICAndGV4dC1kZWNvcmF0aW9uLXN0eWxlJyxcbiAgICAgICAgJ3RleHQtaW5kZW50JyxcbiAgICAgICAgJ3RleHQtb3ZlcmZsb3cnLFxuICAgICAgICAndGV4dC1yZW5kZXJpbmcnLFxuICAgICAgICAndGV4dC1zaGFkb3cnLFxuICAgICAgICAndGV4dC10cmFuc2Zvcm0nLFxuICAgICAgICAndGV4dC11bmRlcmxpbmUtcG9zaXRpb24nLFxuICAgICAgICAndG9wJyxcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJyxcbiAgICAgICAgJ3RyYW5zZm9ybS1zdHlsZScsXG4gICAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgICAgJ3RyYW5zaXRpb24tZGVsYXknLFxuICAgICAgICAndHJhbnNpdGlvbi1kdXJhdGlvbicsXG4gICAgICAgICd0cmFuc2l0aW9uLXByb3BlcnR5JyxcbiAgICAgICAgJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJyxcbiAgICAgICAgJ3VuaWNvZGUtYmlkaScsXG4gICAgICAgICd2ZXJ0aWNhbC1hbGlnbicsXG4gICAgICAgICd2aXNpYmlsaXR5JyxcbiAgICAgICAgJ3doaXRlLXNwYWNlJyxcbiAgICAgICAgJ3dpZG93cycsXG4gICAgICAgICd3aWR0aCcsXG4gICAgICAgICd3b3JkLWJyZWFrJyxcbiAgICAgICAgJ3dvcmQtc3BhY2luZycsXG4gICAgICAgICd3b3JkLXdyYXAnLFxuICAgICAgICAnei1pbmRleCcsXG4gICAgICBdLnJldmVyc2UoKVxuICAgIHJldHVybiBhID0+IHtcbiAgICAgIGNvbnN0IG4gPSAoZSA9PiAoe1xuICAgICAgICAgIElNUE9SVEFOVDogeyBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46ICchaW1wb3J0YW50JyB9LFxuICAgICAgICAgIEhFWENPTE9SOiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgYmVnaW46ICcjKFthLWZBLUYwLTldezZ9fFthLWZBLUYwLTldezN9KScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBBVFRSSUJVVEVfU0VMRUNUT1JfTU9ERToge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItYXR0cicsXG4gICAgICAgICAgICBiZWdpbjogL1xcWy8sXG4gICAgICAgICAgICBlbmQ6IC9cXF0vLFxuICAgICAgICAgICAgaWxsZWdhbDogJyQnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtlLkFQT1NfU1RSSU5HX01PREUsIGUuUVVPVEVfU1RSSU5HX01PREVdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pKShhKSxcbiAgICAgICAgbCA9IG8sXG4gICAgICAgIHMgPSBpLFxuICAgICAgICBkID0gJ0BbYS16LV0rJyxcbiAgICAgICAgYyA9IHsgY2xhc3NOYW1lOiAndmFyaWFibGUnLCBiZWdpbjogJyhcXFxcJFthLXpBLVotXVthLXpBLVowLTlfLV0qKVxcXFxiJyB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnU0NTUycsXG4gICAgICAgIGNhc2VfaW5zZW5zaXRpdmU6ICEwLFxuICAgICAgICBpbGxlZ2FsOiBcIls9L3wnXVwiLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGEuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBhLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLWlkJyxcbiAgICAgICAgICAgIGJlZ2luOiAnI1tBLVphLXowLTlfLV0rJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLWNsYXNzJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXC5bQS1aYS16MC05Xy1dKycsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuLkFUVFJJQlVURV9TRUxFQ1RPUl9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLXRhZycsXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBlLmpvaW4oJ3wnKSArICcpXFxcXGInLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdzZWxlY3Rvci1wc2V1ZG8nLCBiZWdpbjogJzooJyArIHMuam9pbignfCcpICsgJyknIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdzZWxlY3Rvci1wc2V1ZG8nLCBiZWdpbjogJzo6KCcgKyBsLmpvaW4oJ3wnKSArICcpJyB9LFxuICAgICAgICAgIGMsXG4gICAgICAgICAgeyBiZWdpbjogL1xcKC8sIGVuZDogL1xcKS8sIGNvbnRhaW5zOiBbYS5DU1NfTlVNQkVSX01PREVdIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLCBiZWdpbjogJ1xcXFxiKCcgKyByLmpvaW4oJ3wnKSArICcpXFxcXGInIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICdcXFxcYih3aGl0ZXNwYWNlfHdhaXR8dy1yZXNpemV8dmlzaWJsZXx2ZXJ0aWNhbC10ZXh0fHZlcnRpY2FsLWlkZW9ncmFwaGljfHVwcGVyY2FzZXx1cHBlci1yb21hbnx1cHBlci1hbHBoYXx1bmRlcmxpbmV8dHJhbnNwYXJlbnR8dG9wfHRoaW58dGhpY2t8dGV4dHx0ZXh0LXRvcHx0ZXh0LWJvdHRvbXx0Yi1ybHx0YWJsZS1oZWFkZXItZ3JvdXB8dGFibGUtZm9vdGVyLWdyb3VwfHN3LXJlc2l6ZXxzdXBlcnxzdHJpY3R8c3RhdGljfHNxdWFyZXxzb2xpZHxzbWFsbC1jYXBzfHNlcGFyYXRlfHNlLXJlc2l6ZXxzY3JvbGx8cy1yZXNpemV8cnRsfHJvdy1yZXNpemV8cmlkZ2V8cmlnaHR8cmVwZWF0fHJlcGVhdC15fHJlcGVhdC14fHJlbGF0aXZlfHByb2dyZXNzfHBvaW50ZXJ8b3ZlcmxpbmV8b3V0c2lkZXxvdXRzZXR8b2JsaXF1ZXxub3dyYXB8bm90LWFsbG93ZWR8bm9ybWFsfG5vbmV8bnctcmVzaXplfG5vLXJlcGVhdHxuby1kcm9wfG5ld3NwYXBlcnxuZS1yZXNpemV8bi1yZXNpemV8bW92ZXxtaWRkbGV8bWVkaXVtfGx0cnxsci10Ynxsb3dlcmNhc2V8bG93ZXItcm9tYW58bG93ZXItYWxwaGF8bG9vc2V8bGlzdC1pdGVtfGxpbmV8bGluZS10aHJvdWdofGxpbmUtZWRnZXxsaWdodGVyfGxlZnR8a2VlcC1hbGx8anVzdGlmeXxpdGFsaWN8aW50ZXItd29yZHxpbnRlci1pZGVvZ3JhcGh8aW5zaWRlfGluc2V0fGlubGluZXxpbmxpbmUtYmxvY2t8aW5oZXJpdHxpbmFjdGl2ZXxpZGVvZ3JhcGgtc3BhY2V8aWRlb2dyYXBoLXBhcmVudGhlc2lzfGlkZW9ncmFwaC1udW1lcmljfGlkZW9ncmFwaC1hbHBoYXxob3Jpem9udGFsfGhpZGRlbnxoZWxwfGhhbmR8Z3Jvb3ZlfGZpeGVkfGVsbGlwc2lzfGUtcmVzaXplfGRvdWJsZXxkb3R0ZWR8ZGlzdHJpYnV0ZXxkaXN0cmlidXRlLXNwYWNlfGRpc3RyaWJ1dGUtbGV0dGVyfGRpc3RyaWJ1dGUtYWxsLWxpbmVzfGRpc2N8ZGlzYWJsZWR8ZGVmYXVsdHxkZWNpbWFsfGRhc2hlZHxjcm9zc2hhaXJ8Y29sbGFwc2V8Y29sLXJlc2l6ZXxjaXJjbGV8Y2hhcnxjZW50ZXJ8Y2FwaXRhbGl6ZXxicmVhay13b3JkfGJyZWFrLWFsbHxib3R0b218Ym90aHxib2xkZXJ8Ym9sZHxibG9ja3xiaWRpLW92ZXJyaWRlfGJlbG93fGJhc2VsaW5lfGF1dG98YWx3YXlzfGFsbC1zY3JvbGx8YWJzb2x1dGV8dGFibGV8dGFibGUtY2VsbClcXFxcYicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJzonLFxuICAgICAgICAgICAgZW5kOiAnOycsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBjLFxuICAgICAgICAgICAgICBuLkhFWENPTE9SLFxuICAgICAgICAgICAgICBhLkNTU19OVU1CRVJfTU9ERSxcbiAgICAgICAgICAgICAgYS5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgYS5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBuLklNUE9SVEFOVCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ0AocGFnZXxmb250LWZhY2UpJyxcbiAgICAgICAgICAgIGxleGVtZXM6IGQsXG4gICAgICAgICAgICBrZXl3b3JkczogJ0BwYWdlIEBmb250LWZhY2UnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdAJyxcbiAgICAgICAgICAgIGVuZDogJ1t7O10nLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46ICEwLFxuICAgICAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgICAgJHBhdHRlcm46IC9bYS16LV0rLyxcbiAgICAgICAgICAgICAga2V5d29yZDogJ2FuZCBvciBub3Qgb25seScsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZTogdC5qb2luKCcgJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgeyBiZWdpbjogZCwgY2xhc3NOYW1lOiAna2V5d29yZCcgfSxcbiAgICAgICAgICAgICAgeyBiZWdpbjogL1thLXotXSsoPz06KS8sIGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScgfSxcbiAgICAgICAgICAgICAgYyxcbiAgICAgICAgICAgICAgYS5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgYS5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBuLkhFWENPTE9SLFxuICAgICAgICAgICAgICBhLkNTU19OVU1CRVJfTU9ERSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9XG4gIH0pKClcbilcbmhsanMucmVnaXN0ZXJMYW5ndWFnZShcbiAgJ3NoZWxsJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICByZXR1cm4gcyA9PiAoe1xuICAgICAgbmFtZTogJ1NoZWxsIFNlc3Npb24nLFxuICAgICAgYWxpYXNlczogWydjb25zb2xlJ10sXG4gICAgICBjb250YWluczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgYmVnaW46IC9eXFxzezAsM31bL35cXHdcXGRbXFxdKClALV0qWz4lJCNdLyxcbiAgICAgICAgICBzdGFydHM6IHsgZW5kOiAvW15cXFxcXSg/PVxccyokKS8sIHN1Ykxhbmd1YWdlOiAnYmFzaCcgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSlcbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAnc3FsJyxcbiAgKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcbiAgICBmdW5jdGlvbiBlKGUpIHtcbiAgICAgIHJldHVybiBlID8gKCdzdHJpbmcnID09IHR5cGVvZiBlID8gZSA6IGUuc291cmNlKSA6IG51bGxcbiAgICB9XG4gICAgZnVuY3Rpb24gciguLi5yKSB7XG4gICAgICByZXR1cm4gci5tYXAociA9PiBlKHIpKS5qb2luKCcnKVxuICAgIH1cbiAgICBmdW5jdGlvbiB0KC4uLnIpIHtcbiAgICAgIHJldHVybiAnKCcgKyByLm1hcChyID0+IGUocikpLmpvaW4oJ3wnKSArICcpJ1xuICAgIH1cbiAgICByZXR1cm4gZSA9PiB7XG4gICAgICBjb25zdCBuID0gZS5DT01NRU5UKCctLScsICckJyksXG4gICAgICAgIGEgPSBbJ3RydWUnLCAnZmFsc2UnLCAndW5rbm93biddLFxuICAgICAgICBpID0gW1xuICAgICAgICAgICdiaWdpbnQnLFxuICAgICAgICAgICdiaW5hcnknLFxuICAgICAgICAgICdibG9iJyxcbiAgICAgICAgICAnYm9vbGVhbicsXG4gICAgICAgICAgJ2NoYXInLFxuICAgICAgICAgICdjaGFyYWN0ZXInLFxuICAgICAgICAgICdjbG9iJyxcbiAgICAgICAgICAnZGF0ZScsXG4gICAgICAgICAgJ2RlYycsXG4gICAgICAgICAgJ2RlY2Zsb2F0JyxcbiAgICAgICAgICAnZGVjaW1hbCcsXG4gICAgICAgICAgJ2Zsb2F0JyxcbiAgICAgICAgICAnaW50JyxcbiAgICAgICAgICAnaW50ZWdlcicsXG4gICAgICAgICAgJ2ludGVydmFsJyxcbiAgICAgICAgICAnbmNoYXInLFxuICAgICAgICAgICduY2xvYicsXG4gICAgICAgICAgJ25hdGlvbmFsJyxcbiAgICAgICAgICAnbnVtZXJpYycsXG4gICAgICAgICAgJ3JlYWwnLFxuICAgICAgICAgICdyb3cnLFxuICAgICAgICAgICdzbWFsbGludCcsXG4gICAgICAgICAgJ3RpbWUnLFxuICAgICAgICAgICd0aW1lc3RhbXAnLFxuICAgICAgICAgICd2YXJjaGFyJyxcbiAgICAgICAgICAndmFyeWluZycsXG4gICAgICAgICAgJ3ZhcmJpbmFyeScsXG4gICAgICAgIF0sXG4gICAgICAgIHMgPSBbXG4gICAgICAgICAgJ2FicycsXG4gICAgICAgICAgJ2Fjb3MnLFxuICAgICAgICAgICdhcnJheV9hZ2cnLFxuICAgICAgICAgICdhc2luJyxcbiAgICAgICAgICAnYXRhbicsXG4gICAgICAgICAgJ2F2ZycsXG4gICAgICAgICAgJ2Nhc3QnLFxuICAgICAgICAgICdjZWlsJyxcbiAgICAgICAgICAnY2VpbGluZycsXG4gICAgICAgICAgJ2NvYWxlc2NlJyxcbiAgICAgICAgICAnY29ycicsXG4gICAgICAgICAgJ2NvcycsXG4gICAgICAgICAgJ2Nvc2gnLFxuICAgICAgICAgICdjb3VudCcsXG4gICAgICAgICAgJ2NvdmFyX3BvcCcsXG4gICAgICAgICAgJ2NvdmFyX3NhbXAnLFxuICAgICAgICAgICdjdW1lX2Rpc3QnLFxuICAgICAgICAgICdkZW5zZV9yYW5rJyxcbiAgICAgICAgICAnZGVyZWYnLFxuICAgICAgICAgICdlbGVtZW50JyxcbiAgICAgICAgICAnZXhwJyxcbiAgICAgICAgICAnZXh0cmFjdCcsXG4gICAgICAgICAgJ2ZpcnN0X3ZhbHVlJyxcbiAgICAgICAgICAnZmxvb3InLFxuICAgICAgICAgICdqc29uX2FycmF5JyxcbiAgICAgICAgICAnanNvbl9hcnJheWFnZycsXG4gICAgICAgICAgJ2pzb25fZXhpc3RzJyxcbiAgICAgICAgICAnanNvbl9vYmplY3QnLFxuICAgICAgICAgICdqc29uX29iamVjdGFnZycsXG4gICAgICAgICAgJ2pzb25fcXVlcnknLFxuICAgICAgICAgICdqc29uX3RhYmxlJyxcbiAgICAgICAgICAnanNvbl90YWJsZV9wcmltaXRpdmUnLFxuICAgICAgICAgICdqc29uX3ZhbHVlJyxcbiAgICAgICAgICAnbGFnJyxcbiAgICAgICAgICAnbGFzdF92YWx1ZScsXG4gICAgICAgICAgJ2xlYWQnLFxuICAgICAgICAgICdsaXN0YWdnJyxcbiAgICAgICAgICAnbG4nLFxuICAgICAgICAgICdsb2cnLFxuICAgICAgICAgICdsb2cxMCcsXG4gICAgICAgICAgJ2xvd2VyJyxcbiAgICAgICAgICAnbWF4JyxcbiAgICAgICAgICAnbWluJyxcbiAgICAgICAgICAnbW9kJyxcbiAgICAgICAgICAnbnRoX3ZhbHVlJyxcbiAgICAgICAgICAnbnRpbGUnLFxuICAgICAgICAgICdudWxsaWYnLFxuICAgICAgICAgICdwZXJjZW50X3JhbmsnLFxuICAgICAgICAgICdwZXJjZW50aWxlX2NvbnQnLFxuICAgICAgICAgICdwZXJjZW50aWxlX2Rpc2MnLFxuICAgICAgICAgICdwb3NpdGlvbicsXG4gICAgICAgICAgJ3Bvc2l0aW9uX3JlZ2V4JyxcbiAgICAgICAgICAncG93ZXInLFxuICAgICAgICAgICdyYW5rJyxcbiAgICAgICAgICAncmVncl9hdmd4JyxcbiAgICAgICAgICAncmVncl9hdmd5JyxcbiAgICAgICAgICAncmVncl9jb3VudCcsXG4gICAgICAgICAgJ3JlZ3JfaW50ZXJjZXB0JyxcbiAgICAgICAgICAncmVncl9yMicsXG4gICAgICAgICAgJ3JlZ3Jfc2xvcGUnLFxuICAgICAgICAgICdyZWdyX3N4eCcsXG4gICAgICAgICAgJ3JlZ3Jfc3h5JyxcbiAgICAgICAgICAncmVncl9zeXknLFxuICAgICAgICAgICdyb3dfbnVtYmVyJyxcbiAgICAgICAgICAnc2luJyxcbiAgICAgICAgICAnc2luaCcsXG4gICAgICAgICAgJ3NxcnQnLFxuICAgICAgICAgICdzdGRkZXZfcG9wJyxcbiAgICAgICAgICAnc3RkZGV2X3NhbXAnLFxuICAgICAgICAgICdzdWJzdHJpbmcnLFxuICAgICAgICAgICdzdWJzdHJpbmdfcmVnZXgnLFxuICAgICAgICAgICdzdW0nLFxuICAgICAgICAgICd0YW4nLFxuICAgICAgICAgICd0YW5oJyxcbiAgICAgICAgICAndHJhbnNsYXRlJyxcbiAgICAgICAgICAndHJhbnNsYXRlX3JlZ2V4JyxcbiAgICAgICAgICAndHJlYXQnLFxuICAgICAgICAgICd0cmltJyxcbiAgICAgICAgICAndHJpbV9hcnJheScsXG4gICAgICAgICAgJ3VubmVzdCcsXG4gICAgICAgICAgJ3VwcGVyJyxcbiAgICAgICAgICAndmFsdWVfb2YnLFxuICAgICAgICAgICd2YXJfcG9wJyxcbiAgICAgICAgICAndmFyX3NhbXAnLFxuICAgICAgICAgICd3aWR0aF9idWNrZXQnLFxuICAgICAgICBdLFxuICAgICAgICBvID0gW1xuICAgICAgICAgICdjcmVhdGUgdGFibGUnLFxuICAgICAgICAgICdpbnNlcnQgaW50bycsXG4gICAgICAgICAgJ3ByaW1hcnkga2V5JyxcbiAgICAgICAgICAnZm9yZWlnbiBrZXknLFxuICAgICAgICAgICdub3QgbnVsbCcsXG4gICAgICAgICAgJ2FsdGVyIHRhYmxlJyxcbiAgICAgICAgICAnYWRkIGNvbnN0cmFpbnQnLFxuICAgICAgICAgICdncm91cGluZyBzZXRzJyxcbiAgICAgICAgICAnb24gb3ZlcmZsb3cnLFxuICAgICAgICAgICdjaGFyYWN0ZXIgc2V0JyxcbiAgICAgICAgICAncmVzcGVjdCBudWxscycsXG4gICAgICAgICAgJ2lnbm9yZSBudWxscycsXG4gICAgICAgICAgJ251bGxzIGZpcnN0JyxcbiAgICAgICAgICAnbnVsbHMgbGFzdCcsXG4gICAgICAgICAgJ2RlcHRoIGZpcnN0JyxcbiAgICAgICAgICAnYnJlYWR0aCBmaXJzdCcsXG4gICAgICAgIF0sXG4gICAgICAgIGMgPSBzLFxuICAgICAgICBsID0gW1xuICAgICAgICAgICdhYnMnLFxuICAgICAgICAgICdhY29zJyxcbiAgICAgICAgICAnYWxsJyxcbiAgICAgICAgICAnYWxsb2NhdGUnLFxuICAgICAgICAgICdhbHRlcicsXG4gICAgICAgICAgJ2FuZCcsXG4gICAgICAgICAgJ2FueScsXG4gICAgICAgICAgJ2FyZScsXG4gICAgICAgICAgJ2FycmF5JyxcbiAgICAgICAgICAnYXJyYXlfYWdnJyxcbiAgICAgICAgICAnYXJyYXlfbWF4X2NhcmRpbmFsaXR5JyxcbiAgICAgICAgICAnYXMnLFxuICAgICAgICAgICdhc2Vuc2l0aXZlJyxcbiAgICAgICAgICAnYXNpbicsXG4gICAgICAgICAgJ2FzeW1tZXRyaWMnLFxuICAgICAgICAgICdhdCcsXG4gICAgICAgICAgJ2F0YW4nLFxuICAgICAgICAgICdhdG9taWMnLFxuICAgICAgICAgICdhdXRob3JpemF0aW9uJyxcbiAgICAgICAgICAnYXZnJyxcbiAgICAgICAgICAnYmVnaW4nLFxuICAgICAgICAgICdiZWdpbl9mcmFtZScsXG4gICAgICAgICAgJ2JlZ2luX3BhcnRpdGlvbicsXG4gICAgICAgICAgJ2JldHdlZW4nLFxuICAgICAgICAgICdiaWdpbnQnLFxuICAgICAgICAgICdiaW5hcnknLFxuICAgICAgICAgICdibG9iJyxcbiAgICAgICAgICAnYm9vbGVhbicsXG4gICAgICAgICAgJ2JvdGgnLFxuICAgICAgICAgICdieScsXG4gICAgICAgICAgJ2NhbGwnLFxuICAgICAgICAgICdjYWxsZWQnLFxuICAgICAgICAgICdjYXJkaW5hbGl0eScsXG4gICAgICAgICAgJ2Nhc2NhZGVkJyxcbiAgICAgICAgICAnY2FzZScsXG4gICAgICAgICAgJ2Nhc3QnLFxuICAgICAgICAgICdjZWlsJyxcbiAgICAgICAgICAnY2VpbGluZycsXG4gICAgICAgICAgJ2NoYXInLFxuICAgICAgICAgICdjaGFyX2xlbmd0aCcsXG4gICAgICAgICAgJ2NoYXJhY3RlcicsXG4gICAgICAgICAgJ2NoYXJhY3Rlcl9sZW5ndGgnLFxuICAgICAgICAgICdjaGVjaycsXG4gICAgICAgICAgJ2NsYXNzaWZpZXInLFxuICAgICAgICAgICdjbG9iJyxcbiAgICAgICAgICAnY2xvc2UnLFxuICAgICAgICAgICdjb2FsZXNjZScsXG4gICAgICAgICAgJ2NvbGxhdGUnLFxuICAgICAgICAgICdjb2xsZWN0JyxcbiAgICAgICAgICAnY29sdW1uJyxcbiAgICAgICAgICAnY29tbWl0JyxcbiAgICAgICAgICAnY29uZGl0aW9uJyxcbiAgICAgICAgICAnY29ubmVjdCcsXG4gICAgICAgICAgJ2NvbnN0cmFpbnQnLFxuICAgICAgICAgICdjb250YWlucycsXG4gICAgICAgICAgJ2NvbnZlcnQnLFxuICAgICAgICAgICdjb3B5JyxcbiAgICAgICAgICAnY29ycicsXG4gICAgICAgICAgJ2NvcnJlc3BvbmRpbmcnLFxuICAgICAgICAgICdjb3MnLFxuICAgICAgICAgICdjb3NoJyxcbiAgICAgICAgICAnY291bnQnLFxuICAgICAgICAgICdjb3Zhcl9wb3AnLFxuICAgICAgICAgICdjb3Zhcl9zYW1wJyxcbiAgICAgICAgICAnY3JlYXRlJyxcbiAgICAgICAgICAnY3Jvc3MnLFxuICAgICAgICAgICdjdWJlJyxcbiAgICAgICAgICAnY3VtZV9kaXN0JyxcbiAgICAgICAgICAnY3VycmVudCcsXG4gICAgICAgICAgJ2N1cnJlbnRfY2F0YWxvZycsXG4gICAgICAgICAgJ2N1cnJlbnRfZGF0ZScsXG4gICAgICAgICAgJ2N1cnJlbnRfZGVmYXVsdF90cmFuc2Zvcm1fZ3JvdXAnLFxuICAgICAgICAgICdjdXJyZW50X3BhdGgnLFxuICAgICAgICAgICdjdXJyZW50X3JvbGUnLFxuICAgICAgICAgICdjdXJyZW50X3JvdycsXG4gICAgICAgICAgJ2N1cnJlbnRfc2NoZW1hJyxcbiAgICAgICAgICAnY3VycmVudF90aW1lJyxcbiAgICAgICAgICAnY3VycmVudF90aW1lc3RhbXAnLFxuICAgICAgICAgICdjdXJyZW50X3BhdGgnLFxuICAgICAgICAgICdjdXJyZW50X3JvbGUnLFxuICAgICAgICAgICdjdXJyZW50X3RyYW5zZm9ybV9ncm91cF9mb3JfdHlwZScsXG4gICAgICAgICAgJ2N1cnJlbnRfdXNlcicsXG4gICAgICAgICAgJ2N1cnNvcicsXG4gICAgICAgICAgJ2N5Y2xlJyxcbiAgICAgICAgICAnZGF0ZScsXG4gICAgICAgICAgJ2RheScsXG4gICAgICAgICAgJ2RlYWxsb2NhdGUnLFxuICAgICAgICAgICdkZWMnLFxuICAgICAgICAgICdkZWNpbWFsJyxcbiAgICAgICAgICAnZGVjZmxvYXQnLFxuICAgICAgICAgICdkZWNsYXJlJyxcbiAgICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICAgJ2RlZmluZScsXG4gICAgICAgICAgJ2RlbGV0ZScsXG4gICAgICAgICAgJ2RlbnNlX3JhbmsnLFxuICAgICAgICAgICdkZXJlZicsXG4gICAgICAgICAgJ2Rlc2NyaWJlJyxcbiAgICAgICAgICAnZGV0ZXJtaW5pc3RpYycsXG4gICAgICAgICAgJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICAgICdkaXN0aW5jdCcsXG4gICAgICAgICAgJ2RvdWJsZScsXG4gICAgICAgICAgJ2Ryb3AnLFxuICAgICAgICAgICdkeW5hbWljJyxcbiAgICAgICAgICAnZWFjaCcsXG4gICAgICAgICAgJ2VsZW1lbnQnLFxuICAgICAgICAgICdlbHNlJyxcbiAgICAgICAgICAnZW1wdHknLFxuICAgICAgICAgICdlbmQnLFxuICAgICAgICAgICdlbmRfZnJhbWUnLFxuICAgICAgICAgICdlbmRfcGFydGl0aW9uJyxcbiAgICAgICAgICAnZW5kLWV4ZWMnLFxuICAgICAgICAgICdlcXVhbHMnLFxuICAgICAgICAgICdlc2NhcGUnLFxuICAgICAgICAgICdldmVyeScsXG4gICAgICAgICAgJ2V4Y2VwdCcsXG4gICAgICAgICAgJ2V4ZWMnLFxuICAgICAgICAgICdleGVjdXRlJyxcbiAgICAgICAgICAnZXhpc3RzJyxcbiAgICAgICAgICAnZXhwJyxcbiAgICAgICAgICAnZXh0ZXJuYWwnLFxuICAgICAgICAgICdleHRyYWN0JyxcbiAgICAgICAgICAnZmFsc2UnLFxuICAgICAgICAgICdmZXRjaCcsXG4gICAgICAgICAgJ2ZpbHRlcicsXG4gICAgICAgICAgJ2ZpcnN0X3ZhbHVlJyxcbiAgICAgICAgICAnZmxvYXQnLFxuICAgICAgICAgICdmbG9vcicsXG4gICAgICAgICAgJ2ZvcicsXG4gICAgICAgICAgJ2ZvcmVpZ24nLFxuICAgICAgICAgICdmcmFtZV9yb3cnLFxuICAgICAgICAgICdmcmVlJyxcbiAgICAgICAgICAnZnJvbScsXG4gICAgICAgICAgJ2Z1bGwnLFxuICAgICAgICAgICdmdW5jdGlvbicsXG4gICAgICAgICAgJ2Z1c2lvbicsXG4gICAgICAgICAgJ2dldCcsXG4gICAgICAgICAgJ2dsb2JhbCcsXG4gICAgICAgICAgJ2dyYW50JyxcbiAgICAgICAgICAnZ3JvdXAnLFxuICAgICAgICAgICdncm91cGluZycsXG4gICAgICAgICAgJ2dyb3VwcycsXG4gICAgICAgICAgJ2hhdmluZycsXG4gICAgICAgICAgJ2hvbGQnLFxuICAgICAgICAgICdob3VyJyxcbiAgICAgICAgICAnaWRlbnRpdHknLFxuICAgICAgICAgICdpbicsXG4gICAgICAgICAgJ2luZGljYXRvcicsXG4gICAgICAgICAgJ2luaXRpYWwnLFxuICAgICAgICAgICdpbm5lcicsXG4gICAgICAgICAgJ2lub3V0JyxcbiAgICAgICAgICAnaW5zZW5zaXRpdmUnLFxuICAgICAgICAgICdpbnNlcnQnLFxuICAgICAgICAgICdpbnQnLFxuICAgICAgICAgICdpbnRlZ2VyJyxcbiAgICAgICAgICAnaW50ZXJzZWN0JyxcbiAgICAgICAgICAnaW50ZXJzZWN0aW9uJyxcbiAgICAgICAgICAnaW50ZXJ2YWwnLFxuICAgICAgICAgICdpbnRvJyxcbiAgICAgICAgICAnaXMnLFxuICAgICAgICAgICdqb2luJyxcbiAgICAgICAgICAnanNvbl9hcnJheScsXG4gICAgICAgICAgJ2pzb25fYXJyYXlhZ2cnLFxuICAgICAgICAgICdqc29uX2V4aXN0cycsXG4gICAgICAgICAgJ2pzb25fb2JqZWN0JyxcbiAgICAgICAgICAnanNvbl9vYmplY3RhZ2cnLFxuICAgICAgICAgICdqc29uX3F1ZXJ5JyxcbiAgICAgICAgICAnanNvbl90YWJsZScsXG4gICAgICAgICAgJ2pzb25fdGFibGVfcHJpbWl0aXZlJyxcbiAgICAgICAgICAnanNvbl92YWx1ZScsXG4gICAgICAgICAgJ2xhZycsXG4gICAgICAgICAgJ2xhbmd1YWdlJyxcbiAgICAgICAgICAnbGFyZ2UnLFxuICAgICAgICAgICdsYXN0X3ZhbHVlJyxcbiAgICAgICAgICAnbGF0ZXJhbCcsXG4gICAgICAgICAgJ2xlYWQnLFxuICAgICAgICAgICdsZWFkaW5nJyxcbiAgICAgICAgICAnbGVmdCcsXG4gICAgICAgICAgJ2xpa2UnLFxuICAgICAgICAgICdsaWtlX3JlZ2V4JyxcbiAgICAgICAgICAnbGlzdGFnZycsXG4gICAgICAgICAgJ2xuJyxcbiAgICAgICAgICAnbG9jYWwnLFxuICAgICAgICAgICdsb2NhbHRpbWUnLFxuICAgICAgICAgICdsb2NhbHRpbWVzdGFtcCcsXG4gICAgICAgICAgJ2xvZycsXG4gICAgICAgICAgJ2xvZzEwJyxcbiAgICAgICAgICAnbG93ZXInLFxuICAgICAgICAgICdtYXRjaCcsXG4gICAgICAgICAgJ21hdGNoX251bWJlcicsXG4gICAgICAgICAgJ21hdGNoX3JlY29nbml6ZScsXG4gICAgICAgICAgJ21hdGNoZXMnLFxuICAgICAgICAgICdtYXgnLFxuICAgICAgICAgICdtZW1iZXInLFxuICAgICAgICAgICdtZXJnZScsXG4gICAgICAgICAgJ21ldGhvZCcsXG4gICAgICAgICAgJ21pbicsXG4gICAgICAgICAgJ21pbnV0ZScsXG4gICAgICAgICAgJ21vZCcsXG4gICAgICAgICAgJ21vZGlmaWVzJyxcbiAgICAgICAgICAnbW9kdWxlJyxcbiAgICAgICAgICAnbW9udGgnLFxuICAgICAgICAgICdtdWx0aXNldCcsXG4gICAgICAgICAgJ25hdGlvbmFsJyxcbiAgICAgICAgICAnbmF0dXJhbCcsXG4gICAgICAgICAgJ25jaGFyJyxcbiAgICAgICAgICAnbmNsb2InLFxuICAgICAgICAgICduZXcnLFxuICAgICAgICAgICdubycsXG4gICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICdub3JtYWxpemUnLFxuICAgICAgICAgICdub3QnLFxuICAgICAgICAgICdudGhfdmFsdWUnLFxuICAgICAgICAgICdudGlsZScsXG4gICAgICAgICAgJ251bGwnLFxuICAgICAgICAgICdudWxsaWYnLFxuICAgICAgICAgICdudW1lcmljJyxcbiAgICAgICAgICAnb2N0ZXRfbGVuZ3RoJyxcbiAgICAgICAgICAnb2NjdXJyZW5jZXNfcmVnZXgnLFxuICAgICAgICAgICdvZicsXG4gICAgICAgICAgJ29mZnNldCcsXG4gICAgICAgICAgJ29sZCcsXG4gICAgICAgICAgJ29taXQnLFxuICAgICAgICAgICdvbicsXG4gICAgICAgICAgJ29uZScsXG4gICAgICAgICAgJ29ubHknLFxuICAgICAgICAgICdvcGVuJyxcbiAgICAgICAgICAnb3InLFxuICAgICAgICAgICdvcmRlcicsXG4gICAgICAgICAgJ291dCcsXG4gICAgICAgICAgJ291dGVyJyxcbiAgICAgICAgICAnb3ZlcicsXG4gICAgICAgICAgJ292ZXJsYXBzJyxcbiAgICAgICAgICAnb3ZlcmxheScsXG4gICAgICAgICAgJ3BhcmFtZXRlcicsXG4gICAgICAgICAgJ3BhcnRpdGlvbicsXG4gICAgICAgICAgJ3BhdHRlcm4nLFxuICAgICAgICAgICdwZXInLFxuICAgICAgICAgICdwZXJjZW50JyxcbiAgICAgICAgICAncGVyY2VudF9yYW5rJyxcbiAgICAgICAgICAncGVyY2VudGlsZV9jb250JyxcbiAgICAgICAgICAncGVyY2VudGlsZV9kaXNjJyxcbiAgICAgICAgICAncGVyaW9kJyxcbiAgICAgICAgICAncG9ydGlvbicsXG4gICAgICAgICAgJ3Bvc2l0aW9uJyxcbiAgICAgICAgICAncG9zaXRpb25fcmVnZXgnLFxuICAgICAgICAgICdwb3dlcicsXG4gICAgICAgICAgJ3ByZWNlZGVzJyxcbiAgICAgICAgICAncHJlY2lzaW9uJyxcbiAgICAgICAgICAncHJlcGFyZScsXG4gICAgICAgICAgJ3ByaW1hcnknLFxuICAgICAgICAgICdwcm9jZWR1cmUnLFxuICAgICAgICAgICdwdGYnLFxuICAgICAgICAgICdyYW5nZScsXG4gICAgICAgICAgJ3JhbmsnLFxuICAgICAgICAgICdyZWFkcycsXG4gICAgICAgICAgJ3JlYWwnLFxuICAgICAgICAgICdyZWN1cnNpdmUnLFxuICAgICAgICAgICdyZWYnLFxuICAgICAgICAgICdyZWZlcmVuY2VzJyxcbiAgICAgICAgICAncmVmZXJlbmNpbmcnLFxuICAgICAgICAgICdyZWdyX2F2Z3gnLFxuICAgICAgICAgICdyZWdyX2F2Z3knLFxuICAgICAgICAgICdyZWdyX2NvdW50JyxcbiAgICAgICAgICAncmVncl9pbnRlcmNlcHQnLFxuICAgICAgICAgICdyZWdyX3IyJyxcbiAgICAgICAgICAncmVncl9zbG9wZScsXG4gICAgICAgICAgJ3JlZ3Jfc3h4JyxcbiAgICAgICAgICAncmVncl9zeHknLFxuICAgICAgICAgICdyZWdyX3N5eScsXG4gICAgICAgICAgJ3JlbGVhc2UnLFxuICAgICAgICAgICdyZXN1bHQnLFxuICAgICAgICAgICdyZXR1cm4nLFxuICAgICAgICAgICdyZXR1cm5zJyxcbiAgICAgICAgICAncmV2b2tlJyxcbiAgICAgICAgICAncmlnaHQnLFxuICAgICAgICAgICdyb2xsYmFjaycsXG4gICAgICAgICAgJ3JvbGx1cCcsXG4gICAgICAgICAgJ3JvdycsXG4gICAgICAgICAgJ3Jvd19udW1iZXInLFxuICAgICAgICAgICdyb3dzJyxcbiAgICAgICAgICAncnVubmluZycsXG4gICAgICAgICAgJ3NhdmVwb2ludCcsXG4gICAgICAgICAgJ3Njb3BlJyxcbiAgICAgICAgICAnc2Nyb2xsJyxcbiAgICAgICAgICAnc2VhcmNoJyxcbiAgICAgICAgICAnc2Vjb25kJyxcbiAgICAgICAgICAnc2VlaycsXG4gICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgJ3NlbnNpdGl2ZScsXG4gICAgICAgICAgJ3Nlc3Npb25fdXNlcicsXG4gICAgICAgICAgJ3NldCcsXG4gICAgICAgICAgJ3Nob3cnLFxuICAgICAgICAgICdzaW1pbGFyJyxcbiAgICAgICAgICAnc2luJyxcbiAgICAgICAgICAnc2luaCcsXG4gICAgICAgICAgJ3NraXAnLFxuICAgICAgICAgICdzbWFsbGludCcsXG4gICAgICAgICAgJ3NvbWUnLFxuICAgICAgICAgICdzcGVjaWZpYycsXG4gICAgICAgICAgJ3NwZWNpZmljdHlwZScsXG4gICAgICAgICAgJ3NxbCcsXG4gICAgICAgICAgJ3NxbGV4Y2VwdGlvbicsXG4gICAgICAgICAgJ3NxbHN0YXRlJyxcbiAgICAgICAgICAnc3Fsd2FybmluZycsXG4gICAgICAgICAgJ3NxcnQnLFxuICAgICAgICAgICdzdGFydCcsXG4gICAgICAgICAgJ3N0YXRpYycsXG4gICAgICAgICAgJ3N0ZGRldl9wb3AnLFxuICAgICAgICAgICdzdGRkZXZfc2FtcCcsXG4gICAgICAgICAgJ3N1Ym11bHRpc2V0JyxcbiAgICAgICAgICAnc3Vic2V0JyxcbiAgICAgICAgICAnc3Vic3RyaW5nJyxcbiAgICAgICAgICAnc3Vic3RyaW5nX3JlZ2V4JyxcbiAgICAgICAgICAnc3VjY2VlZHMnLFxuICAgICAgICAgICdzdW0nLFxuICAgICAgICAgICdzeW1tZXRyaWMnLFxuICAgICAgICAgICdzeXN0ZW0nLFxuICAgICAgICAgICdzeXN0ZW1fdGltZScsXG4gICAgICAgICAgJ3N5c3RlbV91c2VyJyxcbiAgICAgICAgICAndGFibGUnLFxuICAgICAgICAgICd0YWJsZXNhbXBsZScsXG4gICAgICAgICAgJ3RhbicsXG4gICAgICAgICAgJ3RhbmgnLFxuICAgICAgICAgICd0aGVuJyxcbiAgICAgICAgICAndGltZScsXG4gICAgICAgICAgJ3RpbWVzdGFtcCcsXG4gICAgICAgICAgJ3RpbWV6b25lX2hvdXInLFxuICAgICAgICAgICd0aW1lem9uZV9taW51dGUnLFxuICAgICAgICAgICd0bycsXG4gICAgICAgICAgJ3RyYWlsaW5nJyxcbiAgICAgICAgICAndHJhbnNsYXRlJyxcbiAgICAgICAgICAndHJhbnNsYXRlX3JlZ2V4JyxcbiAgICAgICAgICAndHJhbnNsYXRpb24nLFxuICAgICAgICAgICd0cmVhdCcsXG4gICAgICAgICAgJ3RyaWdnZXInLFxuICAgICAgICAgICd0cmltJyxcbiAgICAgICAgICAndHJpbV9hcnJheScsXG4gICAgICAgICAgJ3RydWUnLFxuICAgICAgICAgICd0cnVuY2F0ZScsXG4gICAgICAgICAgJ3Vlc2NhcGUnLFxuICAgICAgICAgICd1bmlvbicsXG4gICAgICAgICAgJ3VuaXF1ZScsXG4gICAgICAgICAgJ3Vua25vd24nLFxuICAgICAgICAgICd1bm5lc3QnLFxuICAgICAgICAgICd1cGRhdGUgICAnLFxuICAgICAgICAgICd1cHBlcicsXG4gICAgICAgICAgJ3VzZXInLFxuICAgICAgICAgICd1c2luZycsXG4gICAgICAgICAgJ3ZhbHVlJyxcbiAgICAgICAgICAndmFsdWVzJyxcbiAgICAgICAgICAndmFsdWVfb2YnLFxuICAgICAgICAgICd2YXJfcG9wJyxcbiAgICAgICAgICAndmFyX3NhbXAnLFxuICAgICAgICAgICd2YXJiaW5hcnknLFxuICAgICAgICAgICd2YXJjaGFyJyxcbiAgICAgICAgICAndmFyeWluZycsXG4gICAgICAgICAgJ3ZlcnNpb25pbmcnLFxuICAgICAgICAgICd3aGVuJyxcbiAgICAgICAgICAnd2hlbmV2ZXInLFxuICAgICAgICAgICd3aGVyZScsXG4gICAgICAgICAgJ3dpZHRoX2J1Y2tldCcsXG4gICAgICAgICAgJ3dpbmRvdycsXG4gICAgICAgICAgJ3dpdGgnLFxuICAgICAgICAgICd3aXRoaW4nLFxuICAgICAgICAgICd3aXRob3V0JyxcbiAgICAgICAgICAneWVhcicsXG4gICAgICAgICAgJ2FkZCcsXG4gICAgICAgICAgJ2FzYycsXG4gICAgICAgICAgJ2NvbGxhdGlvbicsXG4gICAgICAgICAgJ2Rlc2MnLFxuICAgICAgICAgICdmaW5hbCcsXG4gICAgICAgICAgJ2ZpcnN0JyxcbiAgICAgICAgICAnbGFzdCcsXG4gICAgICAgICAgJ3ZpZXcnLFxuICAgICAgICBdLmZpbHRlcihlID0+ICFzLmluY2x1ZGVzKGUpKSxcbiAgICAgICAgdSA9IHtcbiAgICAgICAgICBiZWdpbjogcigvXFxiLywgdCguLi5jKSwgL1xccypcXCgvKSxcbiAgICAgICAgICBrZXl3b3JkczogeyBidWlsdF9pbjogYyB9LFxuICAgICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnU1FMJyxcbiAgICAgICAgY2FzZV9pbnNlbnNpdGl2ZTogITAsXG4gICAgICAgIGlsbGVnYWw6IC9be31dfDxcXC8vLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICRwYXR0ZXJuOiAvXFxiW1xcd1xcLl0rLyxcbiAgICAgICAgICBrZXl3b3JkOiAoKGUsIHsgZXhjZXB0aW9uczogciwgd2hlbjogdCB9ID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSB0XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAociA9IHIgfHwgW10pLFxuICAgICAgICAgICAgICBlLm1hcChlID0+XG4gICAgICAgICAgICAgICAgZS5tYXRjaCgvXFx8XFxkKyQvKSB8fCByLmluY2x1ZGVzKGUpID8gZSA6IG4oZSkgPyBlICsgJ3wwJyA6IGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pKGwsIHsgd2hlbjogZSA9PiBlLmxlbmd0aCA8IDMgfSksXG4gICAgICAgICAgbGl0ZXJhbDogYSxcbiAgICAgICAgICB0eXBlOiBpLFxuICAgICAgICAgIGJ1aWx0X2luOiBbXG4gICAgICAgICAgICAnY3VycmVudF9jYXRhbG9nJyxcbiAgICAgICAgICAgICdjdXJyZW50X2RhdGUnLFxuICAgICAgICAgICAgJ2N1cnJlbnRfZGVmYXVsdF90cmFuc2Zvcm1fZ3JvdXAnLFxuICAgICAgICAgICAgJ2N1cnJlbnRfcGF0aCcsXG4gICAgICAgICAgICAnY3VycmVudF9yb2xlJyxcbiAgICAgICAgICAgICdjdXJyZW50X3NjaGVtYScsXG4gICAgICAgICAgICAnY3VycmVudF90cmFuc2Zvcm1fZ3JvdXBfZm9yX3R5cGUnLFxuICAgICAgICAgICAgJ2N1cnJlbnRfdXNlcicsXG4gICAgICAgICAgICAnc2Vzc2lvbl91c2VyJyxcbiAgICAgICAgICAgICdzeXN0ZW1fdGltZScsXG4gICAgICAgICAgICAnc3lzdGVtX3VzZXInLFxuICAgICAgICAgICAgJ2N1cnJlbnRfdGltZScsXG4gICAgICAgICAgICAnbG9jYWx0aW1lJyxcbiAgICAgICAgICAgICdjdXJyZW50X3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAnbG9jYWx0aW1lc3RhbXAnLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IHQoLi4ubyksXG4gICAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgICAkcGF0dGVybjogL1tcXHdcXC5dKy8sXG4gICAgICAgICAgICAgIGtleXdvcmQ6IGwuY29uY2F0KG8pLFxuICAgICAgICAgICAgICBsaXRlcmFsOiBhLFxuICAgICAgICAgICAgICB0eXBlOiBpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgYmVnaW46IHQoXG4gICAgICAgICAgICAgICdkb3VibGUgcHJlY2lzaW9uJyxcbiAgICAgICAgICAgICAgJ2xhcmdlIG9iamVjdCcsXG4gICAgICAgICAgICAgICd3aXRoIHRpbWV6b25lJyxcbiAgICAgICAgICAgICAgJ3dpdGhvdXQgdGltZXpvbmUnXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3ZhcmlhYmxlJywgYmVnaW46IC9AW2EtejAtOV0rLyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC8nLyxcbiAgICAgICAgICAgICAgICBlbmQ6IC8nLyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW3sgYmVnaW46IC8nJy8gfV0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9cIi8sXG4gICAgICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC9cIlwiLyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlLkNfTlVNQkVSX01PREUsXG4gICAgICAgICAgZS5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBuLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ29wZXJhdG9yJyxcbiAgICAgICAgICAgIGJlZ2luOiAvWy0rKi89JV5+XXwmJj98XFx8XFx8P3whPT98PCg/Oj0+P3w8fD4pP3w+Wz49XT8vLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICdzd2lmdCcsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgZnVuY3Rpb24gZShlKSB7XG4gICAgICByZXR1cm4gZSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgZSA/IGUgOiBlLnNvdXJjZSkgOiBudWxsXG4gICAgfVxuICAgIGZ1bmN0aW9uIG4oZSkge1xuICAgICAgcmV0dXJuIGEoJyg/PScsIGUsICcpJylcbiAgICB9XG4gICAgZnVuY3Rpb24gYSguLi5uKSB7XG4gICAgICByZXR1cm4gbi5tYXAobiA9PiBlKG4pKS5qb2luKCcnKVxuICAgIH1cbiAgICBmdW5jdGlvbiB0KC4uLm4pIHtcbiAgICAgIHJldHVybiAnKCcgKyBuLm1hcChuID0+IGUobikpLmpvaW4oJ3wnKSArICcpJ1xuICAgIH1cbiAgICBjb25zdCBpID0gZSA9PiBhKC9cXGIvLCBlLCAvXFx3JC8udGVzdChlKSA/IC9cXGIvIDogL1xcQi8pLFxuICAgICAgcyA9IFsnUHJvdG9jb2wnLCAnVHlwZSddLm1hcChpKSxcbiAgICAgIHUgPSBbJ2luaXQnLCAnc2VsZiddLm1hcChpKSxcbiAgICAgIGMgPSBbJ0FueScsICdTZWxmJ10sXG4gICAgICByID0gW1xuICAgICAgICAnYXNzb2NpYXRlZHR5cGUnLFxuICAgICAgICAnYXN5bmMnLFxuICAgICAgICAnYXdhaXQnLFxuICAgICAgICAvYXNcXD8vLFxuICAgICAgICAvYXMhLyxcbiAgICAgICAgJ2FzJyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAnY2F0Y2gnLFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY29udGludWUnLFxuICAgICAgICAnY29udmVuaWVuY2UnLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICdkZWZlcicsXG4gICAgICAgICdkZWluaXQnLFxuICAgICAgICAnZGlkU2V0JyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2R5bmFtaWMnLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdlbnVtJyxcbiAgICAgICAgJ2V4dGVuc2lvbicsXG4gICAgICAgICdmYWxsdGhyb3VnaCcsXG4gICAgICAgIC9maWxlcHJpdmF0ZVxcKHNldFxcKS8sXG4gICAgICAgICdmaWxlcHJpdmF0ZScsXG4gICAgICAgICdmaW5hbCcsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZnVuYycsXG4gICAgICAgICdnZXQnLFxuICAgICAgICAnZ3VhcmQnLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnaW1wb3J0JyxcbiAgICAgICAgJ2luZGlyZWN0JyxcbiAgICAgICAgJ2luZml4JyxcbiAgICAgICAgL2luaXRcXD8vLFxuICAgICAgICAvaW5pdCEvLFxuICAgICAgICAnaW5vdXQnLFxuICAgICAgICAvaW50ZXJuYWxcXChzZXRcXCkvLFxuICAgICAgICAnaW50ZXJuYWwnLFxuICAgICAgICAnaW4nLFxuICAgICAgICAnaXMnLFxuICAgICAgICAnbGF6eScsXG4gICAgICAgICdsZXQnLFxuICAgICAgICAnbXV0YXRpbmcnLFxuICAgICAgICAnbm9ubXV0YXRpbmcnLFxuICAgICAgICAvb3BlblxcKHNldFxcKS8sXG4gICAgICAgICdvcGVuJyxcbiAgICAgICAgJ29wZXJhdG9yJyxcbiAgICAgICAgJ29wdGlvbmFsJyxcbiAgICAgICAgJ292ZXJyaWRlJyxcbiAgICAgICAgJ3Bvc3RmaXgnLFxuICAgICAgICAncHJlY2VkZW5jZWdyb3VwJyxcbiAgICAgICAgJ3ByZWZpeCcsXG4gICAgICAgIC9wcml2YXRlXFwoc2V0XFwpLyxcbiAgICAgICAgJ3ByaXZhdGUnLFxuICAgICAgICAncHJvdG9jb2wnLFxuICAgICAgICAvcHVibGljXFwoc2V0XFwpLyxcbiAgICAgICAgJ3B1YmxpYycsXG4gICAgICAgICdyZXBlYXQnLFxuICAgICAgICAncmVxdWlyZWQnLFxuICAgICAgICAncmV0aHJvd3MnLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ3NldCcsXG4gICAgICAgICdzb21lJyxcbiAgICAgICAgJ3N0YXRpYycsXG4gICAgICAgICdzdHJ1Y3QnLFxuICAgICAgICAnc3Vic2NyaXB0JyxcbiAgICAgICAgJ3N1cGVyJyxcbiAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICd0aHJvd3MnLFxuICAgICAgICAndGhyb3cnLFxuICAgICAgICAvdHJ5XFw/LyxcbiAgICAgICAgL3RyeSEvLFxuICAgICAgICAndHJ5JyxcbiAgICAgICAgJ3R5cGVhbGlhcycsXG4gICAgICAgIC91bm93bmVkXFwoc2FmZVxcKS8sXG4gICAgICAgIC91bm93bmVkXFwodW5zYWZlXFwpLyxcbiAgICAgICAgJ3Vub3duZWQnLFxuICAgICAgICAndmFyJyxcbiAgICAgICAgJ3dlYWsnLFxuICAgICAgICAnd2hlcmUnLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnd2lsbFNldCcsXG4gICAgICBdLFxuICAgICAgbyA9IFsnZmFsc2UnLCAnbmlsJywgJ3RydWUnXSxcbiAgICAgIGwgPSBbXG4gICAgICAgICdhc3NpZ25tZW50JyxcbiAgICAgICAgJ2Fzc29jaWF0aXZpdHknLFxuICAgICAgICAnaGlnaGVyVGhhbicsXG4gICAgICAgICdsZWZ0JyxcbiAgICAgICAgJ2xvd2VyVGhhbicsXG4gICAgICAgICdub25lJyxcbiAgICAgICAgJ3JpZ2h0JyxcbiAgICAgIF0sXG4gICAgICBtID0gW1xuICAgICAgICAnI2NvbG9yTGl0ZXJhbCcsXG4gICAgICAgICcjY29sdW1uJyxcbiAgICAgICAgJyNkc29oYW5kbGUnLFxuICAgICAgICAnI2Vsc2UnLFxuICAgICAgICAnI2Vsc2VpZicsXG4gICAgICAgICcjZW5kaWYnLFxuICAgICAgICAnI2Vycm9yJyxcbiAgICAgICAgJyNmaWxlJyxcbiAgICAgICAgJyNmaWxlSUQnLFxuICAgICAgICAnI2ZpbGVMaXRlcmFsJyxcbiAgICAgICAgJyNmaWxlUGF0aCcsXG4gICAgICAgICcjZnVuY3Rpb24nLFxuICAgICAgICAnI2lmJyxcbiAgICAgICAgJyNpbWFnZUxpdGVyYWwnLFxuICAgICAgICAnI2tleVBhdGgnLFxuICAgICAgICAnI2xpbmUnLFxuICAgICAgICAnI3NlbGVjdG9yJyxcbiAgICAgICAgJyNzb3VyY2VMb2NhdGlvbicsXG4gICAgICAgICcjd2Fybl91bnF1YWxpZmllZF9hY2Nlc3MnLFxuICAgICAgICAnI3dhcm5pbmcnLFxuICAgICAgXSxcbiAgICAgIGQgPSBbXG4gICAgICAgICdhYnMnLFxuICAgICAgICAnYWxsJyxcbiAgICAgICAgJ2FueScsXG4gICAgICAgICdhc3NlcnQnLFxuICAgICAgICAnYXNzZXJ0aW9uRmFpbHVyZScsXG4gICAgICAgICdkZWJ1Z1ByaW50JyxcbiAgICAgICAgJ2R1bXAnLFxuICAgICAgICAnZmF0YWxFcnJvcicsXG4gICAgICAgICdnZXRWYUxpc3QnLFxuICAgICAgICAnaXNLbm93blVuaXF1ZWx5UmVmZXJlbmNlZCcsXG4gICAgICAgICdtYXgnLFxuICAgICAgICAnbWluJyxcbiAgICAgICAgJ251bWVyaWNDYXN0JyxcbiAgICAgICAgJ3BvaW50d2lzZU1heCcsXG4gICAgICAgICdwb2ludHdpc2VNaW4nLFxuICAgICAgICAncHJlY29uZGl0aW9uJyxcbiAgICAgICAgJ3ByZWNvbmRpdGlvbkZhaWx1cmUnLFxuICAgICAgICAncHJpbnQnLFxuICAgICAgICAncmVhZExpbmUnLFxuICAgICAgICAncmVwZWF0RWxlbWVudCcsXG4gICAgICAgICdzZXF1ZW5jZScsXG4gICAgICAgICdzdHJpZGUnLFxuICAgICAgICAnc3dhcCcsXG4gICAgICAgICdzd2lmdF91bmJveEZyb21Td2lmdFZhbHVlV2l0aFR5cGUnLFxuICAgICAgICAndHJhbnNjb2RlJyxcbiAgICAgICAgJ3R5cGUnLFxuICAgICAgICAndW5zYWZlQml0Q2FzdCcsXG4gICAgICAgICd1bnNhZmVEb3duY2FzdCcsXG4gICAgICAgICd3aXRoRXh0ZW5kZWRMaWZldGltZScsXG4gICAgICAgICd3aXRoVW5zYWZlTXV0YWJsZVBvaW50ZXInLFxuICAgICAgICAnd2l0aFVuc2FmZVBvaW50ZXInLFxuICAgICAgICAnd2l0aFZhTGlzdCcsXG4gICAgICAgICd3aXRob3V0QWN0dWFsbHlFc2NhcGluZycsXG4gICAgICAgICd6aXAnLFxuICAgICAgXSxcbiAgICAgIHAgPSB0KFxuICAgICAgICAvWy89XFwtKyEqJTw+Jnxefj9dLyxcbiAgICAgICAgL1tcXHUwMEExLVxcdTAwQTddLyxcbiAgICAgICAgL1tcXHUwMEE5XFx1MDBBQl0vLFxuICAgICAgICAvW1xcdTAwQUNcXHUwMEFFXS8sXG4gICAgICAgIC9bXFx1MDBCMFxcdTAwQjFdLyxcbiAgICAgICAgL1tcXHUwMEI2XFx1MDBCQlxcdTAwQkZcXHUwMEQ3XFx1MDBGN10vLFxuICAgICAgICAvW1xcdTIwMTYtXFx1MjAxN10vLFxuICAgICAgICAvW1xcdTIwMjAtXFx1MjAyN10vLFxuICAgICAgICAvW1xcdTIwMzAtXFx1MjAzRV0vLFxuICAgICAgICAvW1xcdTIwNDEtXFx1MjA1M10vLFxuICAgICAgICAvW1xcdTIwNTUtXFx1MjA1RV0vLFxuICAgICAgICAvW1xcdTIxOTAtXFx1MjNGRl0vLFxuICAgICAgICAvW1xcdTI1MDAtXFx1Mjc3NV0vLFxuICAgICAgICAvW1xcdTI3OTQtXFx1MkJGRl0vLFxuICAgICAgICAvW1xcdTJFMDAtXFx1MkU3Rl0vLFxuICAgICAgICAvW1xcdTMwMDEtXFx1MzAwM10vLFxuICAgICAgICAvW1xcdTMwMDgtXFx1MzAyMF0vLFxuICAgICAgICAvW1xcdTMwMzBdL1xuICAgICAgKSxcbiAgICAgIEYgPSB0KFxuICAgICAgICBwLFxuICAgICAgICAvW1xcdTAzMDAtXFx1MDM2Rl0vLFxuICAgICAgICAvW1xcdTFEQzAtXFx1MURGRl0vLFxuICAgICAgICAvW1xcdTIwRDAtXFx1MjBGRl0vLFxuICAgICAgICAvW1xcdUZFMDAtXFx1RkUwRl0vLFxuICAgICAgICAvW1xcdUZFMjAtXFx1RkUyRl0vXG4gICAgICApLFxuICAgICAgYiA9IGEocCwgRiwgJyonKSxcbiAgICAgIGggPSB0KFxuICAgICAgICAvW2EtekEtWl9dLyxcbiAgICAgICAgL1tcXHUwMEE4XFx1MDBBQVxcdTAwQURcXHUwMEFGXFx1MDBCMi1cXHUwMEI1XFx1MDBCNy1cXHUwMEJBXS8sXG4gICAgICAgIC9bXFx1MDBCQy1cXHUwMEJFXFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMEZGXS8sXG4gICAgICAgIC9bXFx1MDEwMC1cXHUwMkZGXFx1MDM3MC1cXHUxNjdGXFx1MTY4MS1cXHUxODBEXFx1MTgwRi1cXHUxREJGXS8sXG4gICAgICAgIC9bXFx1MUUwMC1cXHUxRkZGXS8sXG4gICAgICAgIC9bXFx1MjAwQi1cXHUyMDBEXFx1MjAyQS1cXHUyMDJFXFx1MjAzRi1cXHUyMDQwXFx1MjA1NFxcdTIwNjAtXFx1MjA2Rl0vLFxuICAgICAgICAvW1xcdTIwNzAtXFx1MjBDRlxcdTIxMDAtXFx1MjE4RlxcdTI0NjAtXFx1MjRGRlxcdTI3NzYtXFx1Mjc5M10vLFxuICAgICAgICAvW1xcdTJDMDAtXFx1MkRGRlxcdTJFODAtXFx1MkZGRl0vLFxuICAgICAgICAvW1xcdTMwMDQtXFx1MzAwN1xcdTMwMjEtXFx1MzAyRlxcdTMwMzEtXFx1MzAzRlxcdTMwNDAtXFx1RDdGRl0vLFxuICAgICAgICAvW1xcdUY5MDAtXFx1RkQzRFxcdUZENDAtXFx1RkRDRlxcdUZERjAtXFx1RkUxRlxcdUZFMzAtXFx1RkU0NF0vLFxuICAgICAgICAvW1xcdUZFNDctXFx1RkVGRVxcdUZGMDAtXFx1RkZGRF0vXG4gICAgICApLFxuICAgICAgZiA9IHQoaCwgL1xcZC8sIC9bXFx1MDMwMC1cXHUwMzZGXFx1MURDMC1cXHUxREZGXFx1MjBEMC1cXHUyMEZGXFx1RkUyMC1cXHVGRTJGXS8pLFxuICAgICAgdyA9IGEoaCwgZiwgJyonKSxcbiAgICAgIHkgPSBhKC9bQS1aXS8sIGYsICcqJyksXG4gICAgICBnID0gW1xuICAgICAgICAnYXV0b2Nsb3N1cmUnLFxuICAgICAgICBhKC9jb252ZW50aW9uXFwoLywgdCgnc3dpZnQnLCAnYmxvY2snLCAnYycpLCAvXFwpLyksXG4gICAgICAgICdkaXNjYXJkYWJsZVJlc3VsdCcsXG4gICAgICAgICdkeW5hbWljQ2FsbGFibGUnLFxuICAgICAgICAnZHluYW1pY01lbWJlckxvb2t1cCcsXG4gICAgICAgICdlc2NhcGluZycsXG4gICAgICAgICdmcm96ZW4nLFxuICAgICAgICAnR0tJbnNwZWN0YWJsZScsXG4gICAgICAgICdJQkFjdGlvbicsXG4gICAgICAgICdJQkRlc2lnbmFibGUnLFxuICAgICAgICAnSUJJbnNwZWN0YWJsZScsXG4gICAgICAgICdJQk91dGxldCcsXG4gICAgICAgICdJQlNlZ3VlQWN0aW9uJyxcbiAgICAgICAgJ2lubGluYWJsZScsXG4gICAgICAgICdtYWluJyxcbiAgICAgICAgJ25vbm9iamMnLFxuICAgICAgICAnTlNBcHBsaWNhdGlvbk1haW4nLFxuICAgICAgICAnTlNDb3B5aW5nJyxcbiAgICAgICAgJ05TTWFuYWdlZCcsXG4gICAgICAgIGEoL29iamNcXCgvLCB3LCAvXFwpLyksXG4gICAgICAgICdvYmpjJyxcbiAgICAgICAgJ29iamNNZW1iZXJzJyxcbiAgICAgICAgJ3Byb3BlcnR5V3JhcHBlcicsXG4gICAgICAgICdyZXF1aXJlc19zdG9yZWRfcHJvcGVydHlfaW5pdHMnLFxuICAgICAgICAndGVzdGFibGUnLFxuICAgICAgICAnVUlBcHBsaWNhdGlvbk1haW4nLFxuICAgICAgICAndW5rbm93bicsXG4gICAgICAgICd1c2FibGVGcm9tSW5saW5lJyxcbiAgICAgIF0sXG4gICAgICBFID0gW1xuICAgICAgICAnaU9TJyxcbiAgICAgICAgJ2lPU0FwcGxpY2F0aW9uRXh0ZW5zaW9uJyxcbiAgICAgICAgJ21hY09TJyxcbiAgICAgICAgJ21hY09TQXBwbGljYXRpb25FeHRlbnNpb24nLFxuICAgICAgICAnbWFjQ2F0YWx5c3QnLFxuICAgICAgICAnbWFjQ2F0YWx5c3RBcHBsaWNhdGlvbkV4dGVuc2lvbicsXG4gICAgICAgICd3YXRjaE9TJyxcbiAgICAgICAgJ3dhdGNoT1NBcHBsaWNhdGlvbkV4dGVuc2lvbicsXG4gICAgICAgICd0dk9TJyxcbiAgICAgICAgJ3R2T1NBcHBsaWNhdGlvbkV4dGVuc2lvbicsXG4gICAgICAgICdzd2lmdCcsXG4gICAgICBdXG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgY29uc3QgcCA9IHsgbWF0Y2g6IC9cXHMrLywgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgIGggPSBlLkNPTU1FTlQoJy9cXFxcKicsICdcXFxcKi8nLCB7XG4gICAgICAgICAgY29udGFpbnM6IFsnc2VsZiddLFxuICAgICAgICB9KSxcbiAgICAgICAgdiA9IFtlLkNfTElORV9DT01NRU5UX01PREUsIGhdLFxuICAgICAgICBOID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICAgIGJlZ2luOiBhKC9cXC4vLCBuKHQoLi4ucywgLi4udSkpKSxcbiAgICAgICAgICBlbmQ6IHQoLi4ucywgLi4udSksXG4gICAgICAgICAgZXhjbHVkZUJlZ2luOiAhMCxcbiAgICAgICAgfSxcbiAgICAgICAgQSA9IHtcbiAgICAgICAgICBtYXRjaDogYSgvXFwuLywgdCguLi5yKSksXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9LFxuICAgICAgICBDID0gci5maWx0ZXIoZSA9PiAnc3RyaW5nJyA9PSB0eXBlb2YgZSkuY29uY2F0KFsnX3wwJ10pLFxuICAgICAgICBfID0ge1xuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICBtYXRjaDogdChcbiAgICAgICAgICAgICAgICAuLi5yXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKGUgPT4gJ3N0cmluZycgIT0gdHlwZW9mIGUpXG4gICAgICAgICAgICAgICAgICAuY29uY2F0KGMpXG4gICAgICAgICAgICAgICAgICAubWFwKGkpLFxuICAgICAgICAgICAgICAgIC4uLnVcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgRCA9IHtcbiAgICAgICAgICAkcGF0dGVybjogdCgvXFxiXFx3Ky8sIC8jXFx3Ky8pLFxuICAgICAgICAgIGtleXdvcmQ6IEMuY29uY2F0KG0pLFxuICAgICAgICAgIGxpdGVyYWw6IG8sXG4gICAgICAgIH0sXG4gICAgICAgIEIgPSBbTiwgQSwgX10sXG4gICAgICAgIGsgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWF0Y2g6IGEoL1xcLi8sIHQoLi4uZCkpLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdidWlsdF9pbicsIG1hdGNoOiBhKC9cXGIvLCB0KC4uLmQpLCAvKD89XFwoKS8pIH0sXG4gICAgICAgIF0sXG4gICAgICAgIE0gPSB7IG1hdGNoOiAvLT4vLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgUyA9IFtcbiAgICAgICAgICBNLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ29wZXJhdG9yJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbeyBtYXRjaDogYiB9LCB7IG1hdGNoOiBgXFxcXC4oXFxcXC58JHtGfSkrYCB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB4ID0gJyhbMC05YS1mQS1GXV8qKSsnLFxuICAgICAgICBJID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1hdGNoOlxuICAgICAgICAgICAgICAgICdcXFxcYigoWzAtOV1fKikrKShcXFxcLigoWzAtOV1fKikrKSk/KFtlRV1bKy1dPygoWzAtOV1fKikrKSk/XFxcXGInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWF0Y2g6IGBcXFxcYjB4KCR7eH0pKFxcXFwuKCR7eH0pKT8oW3BQXVsrLV0/KChbMC05XV8qKSspKT9cXFxcYmAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtYXRjaDogL1xcYjBvKFswLTddXyopK1xcYi8sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBtYXRjaDogL1xcYjBiKFswMV1fKikrXFxiLyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIE8gPSAoZSA9ICcnKSA9PiAoe1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBtYXRjaDogYSgvXFxcXC8sIGUsIC9bMFxcXFx0bnJcIiddLykgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWF0Y2g6IGEoL1xcXFwvLCBlLCAvdVxce1swLTlhLWZBLUZdezEsOH1cXH0vKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICAgIFQgPSAoZSA9ICcnKSA9PiAoe1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICAgICAgICBtYXRjaDogYSgvXFxcXC8sIGUsIC9bXFx0IF0qKD86W1xcclxcbl18XFxyXFxuKS8pLFxuICAgICAgICB9KSxcbiAgICAgICAgTCA9IChlID0gJycpID0+ICh7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgICAgICAgIGxhYmVsOiAnaW50ZXJwb2wnLFxuICAgICAgICAgIGJlZ2luOiBhKC9cXFxcLywgZSwgL1xcKC8pLFxuICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgIH0pLFxuICAgICAgICBQID0gKGUgPSAnJykgPT4gKHtcbiAgICAgICAgICBiZWdpbjogYShlLCAvXCJcIlwiLyksXG4gICAgICAgICAgZW5kOiBhKC9cIlwiXCIvLCBlKSxcbiAgICAgICAgICBjb250YWluczogW08oZSksIFQoZSksIEwoZSldLFxuICAgICAgICB9KSxcbiAgICAgICAgJCA9IChlID0gJycpID0+ICh7XG4gICAgICAgICAgYmVnaW46IGEoZSwgL1wiLyksXG4gICAgICAgICAgZW5kOiBhKC9cIi8sIGUpLFxuICAgICAgICAgIGNvbnRhaW5zOiBbTyhlKSwgTChlKV0sXG4gICAgICAgIH0pLFxuICAgICAgICBLID0ge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIFAoKSxcbiAgICAgICAgICAgIFAoJyMnKSxcbiAgICAgICAgICAgIFAoJyMjJyksXG4gICAgICAgICAgICBQKCcjIyMnKSxcbiAgICAgICAgICAgICQoKSxcbiAgICAgICAgICAgICQoJyMnKSxcbiAgICAgICAgICAgICQoJyMjJyksXG4gICAgICAgICAgICAkKCcjIyMnKSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBqID0ge1xuICAgICAgICAgIG1hdGNoOiBhKC9gLywgdywgL2AvKSxcbiAgICAgICAgfSxcbiAgICAgICAgeiA9IFtcbiAgICAgICAgICBqLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAndmFyaWFibGUnLCBtYXRjaDogL1xcJFxcZCsvIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgbWF0Y2g6IGBcXFxcJCR7Zn0rYCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBxID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1hdGNoOiAvKEB8IylhdmFpbGFibGUvLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICB7IGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLywga2V5d29yZHM6IEUsIGNvbnRhaW5zOiBbLi4uUywgSSwgS10gfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2tleXdvcmQnLCBtYXRjaDogYSgvQC8sIHQoLi4uZykpIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICBtYXRjaDogYSgvQC8sIHcpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIFUgPSB7XG4gICAgICAgICAgbWF0Y2g6IG4oL1xcYltBLVpdLyksXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgICBtYXRjaDogYShcbiAgICAgICAgICAgICAgICAvKEFWfENBfENGfENHfENJfENMfENNfENOfENUfE1LfE1QfE1US3xNVEx8TlN8U0NOfFNLfFVJfFdLfFhDKS8sXG4gICAgICAgICAgICAgICAgZixcbiAgICAgICAgICAgICAgICAnKydcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3R5cGUnLCBtYXRjaDogeSwgcmVsZXZhbmNlOiAwIH0sXG4gICAgICAgICAgICB7IG1hdGNoOiAvWz8hXSsvLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWF0Y2g6IC9cXC5cXC5cXC4vLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBtYXRjaDogYSgvXFxzKyZcXHMrLywgbih5KSksIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIFogPSB7XG4gICAgICAgICAgYmVnaW46IC88LyxcbiAgICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAgICBrZXl3b3JkczogRCxcbiAgICAgICAgICBjb250YWluczogWy4uLnYsIC4uLkIsIC4uLnEsIE0sIFVdLFxuICAgICAgICB9XG4gICAgICBVLmNvbnRhaW5zLnB1c2goWilcbiAgICAgIGNvbnN0IEcgPSB7XG4gICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGtleXdvcmRzOiBELFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1hdGNoOiBhKHcsIC9cXHMqOi8pLFxuICAgICAgICAgICAgICBrZXl3b3JkczogJ198MCcsXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi52LFxuICAgICAgICAgICAgLi4uQixcbiAgICAgICAgICAgIC4uLmssXG4gICAgICAgICAgICAuLi5TLFxuICAgICAgICAgICAgSSxcbiAgICAgICAgICAgIEssXG4gICAgICAgICAgICAuLi56LFxuICAgICAgICAgICAgLi4ucSxcbiAgICAgICAgICAgIFUsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgSCA9IHtcbiAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuYycsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgICAgICBtYXRjaDogdChqLm1hdGNoLCB3LCBiKSxcbiAgICAgICAgICAgICAgZW5kc1BhcmVudDogITAsXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIFIgPSB7XG4gICAgICAgICAgYmVnaW46IC88LyxcbiAgICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAgICBjb250YWluczogWy4uLnYsIFVdLFxuICAgICAgICB9LFxuICAgICAgICBWID0ge1xuICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgIGtleXdvcmRzOiBELFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiB0KG4oYSh3LCAvXFxzKjovKSksIG4oYSh3LCAvXFxzKy8sIHcsIC9cXHMqOi8pKSksXG4gICAgICAgICAgICAgIGVuZDogLzovLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdrZXl3b3JkJywgbWF0Y2g6IC9cXGJfXFxiLyB9LFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncGFyYW1zJywgbWF0Y2g6IHcgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi52LFxuICAgICAgICAgICAgLi4uQixcbiAgICAgICAgICAgIC4uLlMsXG4gICAgICAgICAgICBJLFxuICAgICAgICAgICAgSyxcbiAgICAgICAgICAgIC4uLnEsXG4gICAgICAgICAgICBVLFxuICAgICAgICAgICAgRyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVuZHNQYXJlbnQ6ICEwLFxuICAgICAgICAgIGlsbGVnYWw6IC9bXCInXS8sXG4gICAgICAgIH0sXG4gICAgICAgIFcgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgIG1hdGNoOiBuKC9cXGJmdW5jXFxiLyksXG4gICAgICAgICAgY29udGFpbnM6IFtILCBSLCBWLCBwXSxcbiAgICAgICAgICBpbGxlZ2FsOiBbL1xcWy8sIC8lL10sXG4gICAgICAgIH0sXG4gICAgICAgIFggPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAgIG1hdGNoOiAvXFxiKHN1YnNjcmlwdHxpbml0Wz8hXT8pXFxzKig/PVs8KF0pLyxcbiAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAga2V5d29yZDogJ3N1YnNjcmlwdCBpbml0IGluaXQ/IGluaXQhJyxcbiAgICAgICAgICAgICRwYXR0ZXJuOiAvXFx3K1s/IV0/LyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRhaW5zOiBbUiwgViwgcF0sXG4gICAgICAgICAgaWxsZWdhbDogL1xcW3wlLyxcbiAgICAgICAgfSxcbiAgICAgICAgSiA9IHtcbiAgICAgICAgICBiZWdpbktleXdvcmRzOiAnb3BlcmF0b3InLFxuICAgICAgICAgIGVuZDogZS5NQVRDSF9OT1RISU5HX1JFLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgbWF0Y2g6IGIsXG4gICAgICAgICAgICAgIGVuZHNQYXJlbnQ6ICEwLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIFEgPSB7XG4gICAgICAgICAgYmVnaW5LZXl3b3JkczogJ3ByZWNlZGVuY2Vncm91cCcsXG4gICAgICAgICAgZW5kOiBlLk1BVENIX05PVEhJTkdfUkUsXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgICAgICBtYXRjaDogeSxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC97LyxcbiAgICAgICAgICAgICAgZW5kOiAvfS8sXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgZW5kc1BhcmVudDogITAsXG4gICAgICAgICAgICAgIGtleXdvcmRzOiBbLi4ubCwgLi4ub10sXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbVV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgZSBvZiBLLnZhcmlhbnRzKSB7XG4gICAgICAgIGNvbnN0IG4gPSBlLmNvbnRhaW5zLmZpbmQoZSA9PiAnaW50ZXJwb2wnID09PSBlLmxhYmVsKVxuICAgICAgICBuLmtleXdvcmRzID0gRFxuICAgICAgICBjb25zdCBhID0gWy4uLkIsIC4uLmssIC4uLlMsIEksIEssIC4uLnpdXG4gICAgICAgIG4uY29udGFpbnMgPSBbXG4gICAgICAgICAgLi4uYSxcbiAgICAgICAgICB7IGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLywgY29udGFpbnM6IFsnc2VsZicsIC4uLmFdIH0sXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdTd2lmdCcsXG4gICAgICAgIGtleXdvcmRzOiBELFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIC4uLnYsXG4gICAgICAgICAgVyxcbiAgICAgICAgICBYLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdzdHJ1Y3QgcHJvdG9jb2wgY2xhc3MgZXh0ZW5zaW9uIGVudW0nLFxuICAgICAgICAgICAgZW5kOiAnXFxcXHsnLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICBrZXl3b3JkczogRCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIGUuaW5oZXJpdChlLlRJVExFX01PREUsIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1tBLVphLXokX11bXFx1MDBDMC1cXHUwMkI4MC05QS1aYS16JF9dKi8sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAuLi5CLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIEosXG4gICAgICAgICAgUSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnaW1wb3J0JyxcbiAgICAgICAgICAgIGVuZDogLyQvLFxuICAgICAgICAgICAgY29udGFpbnM6IFsuLi52XSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLkIsXG4gICAgICAgICAgLi4uayxcbiAgICAgICAgICAuLi5TLFxuICAgICAgICAgIEksXG4gICAgICAgICAgSyxcbiAgICAgICAgICAuLi56LFxuICAgICAgICAgIC4uLnEsXG4gICAgICAgICAgVSxcbiAgICAgICAgICBHLFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAndHlwZXNjcmlwdCcsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgY29uc3QgZSA9ICdbQS1aYS16JF9dWzAtOUEtWmEteiRfXSonLFxuICAgICAgbiA9IFtcbiAgICAgICAgJ2FzJyxcbiAgICAgICAgJ2luJyxcbiAgICAgICAgJ29mJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICdmaW5hbGx5JyxcbiAgICAgICAgJ3ZhcicsXG4gICAgICAgICduZXcnLFxuICAgICAgICAnZnVuY3Rpb24nLFxuICAgICAgICAnZG8nLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ3ZvaWQnLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICdjYXRjaCcsXG4gICAgICAgICdpbnN0YW5jZW9mJyxcbiAgICAgICAgJ3dpdGgnLFxuICAgICAgICAndGhyb3cnLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ3RyeScsXG4gICAgICAgICdzd2l0Y2gnLFxuICAgICAgICAnY29udGludWUnLFxuICAgICAgICAndHlwZW9mJyxcbiAgICAgICAgJ2RlbGV0ZScsXG4gICAgICAgICdsZXQnLFxuICAgICAgICAneWllbGQnLFxuICAgICAgICAnY29uc3QnLFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnZGVidWdnZXInLFxuICAgICAgICAnYXN5bmMnLFxuICAgICAgICAnYXdhaXQnLFxuICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgJ2ltcG9ydCcsXG4gICAgICAgICdmcm9tJyxcbiAgICAgICAgJ2V4cG9ydCcsXG4gICAgICAgICdleHRlbmRzJyxcbiAgICAgIF0sXG4gICAgICBhID0gWyd0cnVlJywgJ2ZhbHNlJywgJ251bGwnLCAndW5kZWZpbmVkJywgJ05hTicsICdJbmZpbml0eSddLFxuICAgICAgcyA9IFtdLmNvbmNhdChcbiAgICAgICAgW1xuICAgICAgICAgICdzZXRJbnRlcnZhbCcsXG4gICAgICAgICAgJ3NldFRpbWVvdXQnLFxuICAgICAgICAgICdjbGVhckludGVydmFsJyxcbiAgICAgICAgICAnY2xlYXJUaW1lb3V0JyxcbiAgICAgICAgICAncmVxdWlyZScsXG4gICAgICAgICAgJ2V4cG9ydHMnLFxuICAgICAgICAgICdldmFsJyxcbiAgICAgICAgICAnaXNGaW5pdGUnLFxuICAgICAgICAgICdpc05hTicsXG4gICAgICAgICAgJ3BhcnNlRmxvYXQnLFxuICAgICAgICAgICdwYXJzZUludCcsXG4gICAgICAgICAgJ2RlY29kZVVSSScsXG4gICAgICAgICAgJ2RlY29kZVVSSUNvbXBvbmVudCcsXG4gICAgICAgICAgJ2VuY29kZVVSSScsXG4gICAgICAgICAgJ2VuY29kZVVSSUNvbXBvbmVudCcsXG4gICAgICAgICAgJ2VzY2FwZScsXG4gICAgICAgICAgJ3VuZXNjYXBlJyxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICdhcmd1bWVudHMnLFxuICAgICAgICAgICd0aGlzJyxcbiAgICAgICAgICAnc3VwZXInLFxuICAgICAgICAgICdjb25zb2xlJyxcbiAgICAgICAgICAnd2luZG93JyxcbiAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICdsb2NhbFN0b3JhZ2UnLFxuICAgICAgICAgICdtb2R1bGUnLFxuICAgICAgICAgICdnbG9iYWwnLFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgJ0ludGwnLFxuICAgICAgICAgICdEYXRhVmlldycsXG4gICAgICAgICAgJ051bWJlcicsXG4gICAgICAgICAgJ01hdGgnLFxuICAgICAgICAgICdEYXRlJyxcbiAgICAgICAgICAnU3RyaW5nJyxcbiAgICAgICAgICAnUmVnRXhwJyxcbiAgICAgICAgICAnT2JqZWN0JyxcbiAgICAgICAgICAnRnVuY3Rpb24nLFxuICAgICAgICAgICdCb29sZWFuJyxcbiAgICAgICAgICAnRXJyb3InLFxuICAgICAgICAgICdTeW1ib2wnLFxuICAgICAgICAgICdTZXQnLFxuICAgICAgICAgICdNYXAnLFxuICAgICAgICAgICdXZWFrU2V0JyxcbiAgICAgICAgICAnV2Vha01hcCcsXG4gICAgICAgICAgJ1Byb3h5JyxcbiAgICAgICAgICAnUmVmbGVjdCcsXG4gICAgICAgICAgJ0pTT04nLFxuICAgICAgICAgICdQcm9taXNlJyxcbiAgICAgICAgICAnRmxvYXQ2NEFycmF5JyxcbiAgICAgICAgICAnSW50MTZBcnJheScsXG4gICAgICAgICAgJ0ludDMyQXJyYXknLFxuICAgICAgICAgICdJbnQ4QXJyYXknLFxuICAgICAgICAgICdVaW50MTZBcnJheScsXG4gICAgICAgICAgJ1VpbnQzMkFycmF5JyxcbiAgICAgICAgICAnRmxvYXQzMkFycmF5JyxcbiAgICAgICAgICAnQXJyYXknLFxuICAgICAgICAgICdVaW50OEFycmF5JyxcbiAgICAgICAgICAnVWludDhDbGFtcGVkQXJyYXknLFxuICAgICAgICAgICdBcnJheUJ1ZmZlcicsXG4gICAgICAgICAgJ0JpZ0ludDY0QXJyYXknLFxuICAgICAgICAgICdCaWdVaW50NjRBcnJheScsXG4gICAgICAgICAgJ0JpZ0ludCcsXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAnRXZhbEVycm9yJyxcbiAgICAgICAgICAnSW50ZXJuYWxFcnJvcicsXG4gICAgICAgICAgJ1JhbmdlRXJyb3InLFxuICAgICAgICAgICdSZWZlcmVuY2VFcnJvcicsXG4gICAgICAgICAgJ1N5bnRheEVycm9yJyxcbiAgICAgICAgICAnVHlwZUVycm9yJyxcbiAgICAgICAgICAnVVJJRXJyb3InLFxuICAgICAgICBdXG4gICAgICApXG4gICAgZnVuY3Rpb24gdChlKSB7XG4gICAgICByZXR1cm4gcignKD89JywgZSwgJyknKVxuICAgIH1cbiAgICBmdW5jdGlvbiByKC4uLmUpIHtcbiAgICAgIHJldHVybiBlXG4gICAgICAgIC5tYXAoZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChuID0gZSkgPyAoJ3N0cmluZycgPT0gdHlwZW9mIG4gPyBuIDogbi5zb3VyY2UpIDogbnVsbFxuICAgICAgICAgIHZhciBuXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKVxuICAgIH1cbiAgICByZXR1cm4gaSA9PiB7XG4gICAgICBjb25zdCBjID0ge1xuICAgICAgICAgICRwYXR0ZXJuOiBlLFxuICAgICAgICAgIGtleXdvcmQ6IG4uY29uY2F0KFtcbiAgICAgICAgICAgICd0eXBlJyxcbiAgICAgICAgICAgICduYW1lc3BhY2UnLFxuICAgICAgICAgICAgJ3R5cGVkZWYnLFxuICAgICAgICAgICAgJ2ludGVyZmFjZScsXG4gICAgICAgICAgICAncHVibGljJyxcbiAgICAgICAgICAgICdwcml2YXRlJyxcbiAgICAgICAgICAgICdwcm90ZWN0ZWQnLFxuICAgICAgICAgICAgJ2ltcGxlbWVudHMnLFxuICAgICAgICAgICAgJ2RlY2xhcmUnLFxuICAgICAgICAgICAgJ2Fic3RyYWN0JyxcbiAgICAgICAgICAgICdyZWFkb25seScsXG4gICAgICAgICAgXSksXG4gICAgICAgICAgbGl0ZXJhbDogYSxcbiAgICAgICAgICBidWlsdF9pbjogcy5jb25jYXQoW1xuICAgICAgICAgICAgJ2FueScsXG4gICAgICAgICAgICAndm9pZCcsXG4gICAgICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgICAgICdib29sZWFuJyxcbiAgICAgICAgICAgICdzdHJpbmcnLFxuICAgICAgICAgICAgJ29iamVjdCcsXG4gICAgICAgICAgICAnbmV2ZXInLFxuICAgICAgICAgICAgJ2VudW0nLFxuICAgICAgICAgIF0pLFxuICAgICAgICB9LFxuICAgICAgICBvID0geyBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46ICdAW0EtWmEteiRfXVswLTlBLVphLXokX10qJyB9LFxuICAgICAgICBsID0gKGUsIG4sIGEpID0+IHtcbiAgICAgICAgICBjb25zdCBzID0gZS5jb250YWlucy5maW5kSW5kZXgoZSA9PiBlLmxhYmVsID09PSBuKVxuICAgICAgICAgIGlmICgtMSA9PT0gcykgdGhyb3cgRXJyb3IoJ2NhbiBub3QgZmluZCBtb2RlIHRvIHJlcGxhY2UnKVxuICAgICAgICAgIGUuY29udGFpbnMuc3BsaWNlKHMsIDEsIGEpXG4gICAgICAgIH0sXG4gICAgICAgIGIgPSAoaSA9PiB7XG4gICAgICAgICAgY29uc3QgYyA9IGUsXG4gICAgICAgICAgICBvID0ge1xuICAgICAgICAgICAgICBiZWdpbjogLzxbQS1aYS16MC05XFxcXC5fOi1dKy8sXG4gICAgICAgICAgICAgIGVuZDogL1xcL1tBLVphLXowLTlcXFxcLl86LV0rPnxcXC8+LyxcbiAgICAgICAgICAgICAgaXNUcnVseU9wZW5pbmdUYWc6IChlLCBuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYSA9IGVbMF0ubGVuZ3RoICsgZS5pbmRleCxcbiAgICAgICAgICAgICAgICAgIHMgPSBlLmlucHV0W2FdXG4gICAgICAgICAgICAgICAgJzwnICE9PSBzXG4gICAgICAgICAgICAgICAgICA/ICc+JyA9PT0gcyAmJlxuICAgICAgICAgICAgICAgICAgICAoKChlLCB7IGFmdGVyOiBuIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0gJzwvJyArIGVbMF0uc2xpY2UoMSlcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgIT09IGUuaW5wdXQuaW5kZXhPZihhLCBuKVxuICAgICAgICAgICAgICAgICAgICB9KShlLCB7IGFmdGVyOiBhIH0pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgbi5pZ25vcmVNYXRjaCgpKVxuICAgICAgICAgICAgICAgICAgOiBuLmlnbm9yZU1hdGNoKClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsID0geyAkcGF0dGVybjogZSwga2V5d29yZDogbiwgbGl0ZXJhbDogYSwgYnVpbHRfaW46IHMgfSxcbiAgICAgICAgICAgIGIgPSAnXFxcXC4oWzAtOV0oXz9bMC05XSkqKScsXG4gICAgICAgICAgICBkID0gJzB8WzEtOV0oXz9bMC05XSkqfDBbMC03XSpbODldWzAtOV0qJyxcbiAgICAgICAgICAgIGcgPSB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYmVnaW46IGAoXFxcXGIoJHtkfSkoKCR7Yn0pfFxcXFwuKT98KCR7Yn0pKVtlRV1bKy1dPyhbMC05XShfP1swLTldKSopXFxcXGJgLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYmVnaW46IGBcXFxcYigke2R9KVxcXFxiKCgke2J9KVxcXFxifFxcXFwuKT98KCR7Yn0pXFxcXGJgLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYigwfFsxLTldKF8/WzAtOV0pKiluXFxcXGInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYjBbeFhdWzAtOWEtZkEtRl0oXz9bMC05YS1mQS1GXSkqbj9cXFxcYicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiMFtiQl1bMC0xXShfP1swLTFdKSpuP1xcXFxiJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgYmVnaW46ICdcXFxcYjBbb09dWzAtN10oXz9bMC03XSkqbj9cXFxcYicgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiMFswLTddK24/XFxcXGInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1ID0ge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgICAgICAgICAgIGJlZ2luOiAnXFxcXCRcXFxceycsXG4gICAgICAgICAgICAgIGVuZDogJ1xcXFx9JyxcbiAgICAgICAgICAgICAga2V5d29yZHM6IGwsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBFID0ge1xuICAgICAgICAgICAgICBiZWdpbjogJ2h0bWxgJyxcbiAgICAgICAgICAgICAgZW5kOiAnJyxcbiAgICAgICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAgICAgZW5kOiAnYCcsXG4gICAgICAgICAgICAgICAgcmV0dXJuRW5kOiAhMSxcbiAgICAgICAgICAgICAgICBjb250YWluczogW2kuQkFDS1NMQVNIX0VTQ0FQRSwgdV0sXG4gICAgICAgICAgICAgICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG0gPSB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnY3NzYCcsXG4gICAgICAgICAgICAgIGVuZDogJycsXG4gICAgICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgICAgIGVuZDogJ2AnLFxuICAgICAgICAgICAgICAgIHJldHVybkVuZDogITEsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtpLkJBQ0tTTEFTSF9FU0NBUEUsIHVdLFxuICAgICAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiAnY3NzJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5ID0ge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBiZWdpbjogJ2AnLFxuICAgICAgICAgICAgICBlbmQ6ICdgJyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtpLkJBQ0tTTEFTSF9FU0NBUEUsIHVdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8gPSB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgIGkuQ09NTUVOVCgvXFwvXFwqXFwqKD8hXFwvKS8sICdcXFxcKi8nLCB7XG4gICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogJ0BbQS1aYS16XSsnLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFx7JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAnXFxcXH0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBjICsgJyg/PVxcXFxzKigtKXwkKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHNQYXJlbnQ6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBiZWdpbjogLyg/PVteXFxuXSlcXHMvLCByZWxldmFuY2U6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBpLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICAgIGkuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwID0gW1xuICAgICAgICAgICAgICBpLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgICAgIGkuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAgICAgIEUsXG4gICAgICAgICAgICAgIG0sXG4gICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgIGcsXG4gICAgICAgICAgICAgIGkuUkVHRVhQX01PREUsXG4gICAgICAgICAgICBdXG4gICAgICAgICAgdS5jb250YWlucyA9IHAuY29uY2F0KHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFx7LyxcbiAgICAgICAgICAgIGVuZDogL1xcfS8sXG4gICAgICAgICAgICBrZXl3b3JkczogbCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXS5jb25jYXQocCksXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zdCBOID0gW10uY29uY2F0KF8sIHUuY29udGFpbnMpLFxuICAgICAgICAgICAgZiA9IE4uY29uY2F0KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICAgIGtleXdvcmRzOiBsLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXS5jb25jYXQoTiksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIEEgPSB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICAgIGtleXdvcmRzOiBsLFxuICAgICAgICAgICAgICBjb250YWluczogZixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ0phdmFzY3JpcHQnLFxuICAgICAgICAgICAgYWxpYXNlczogWydqcycsICdqc3gnLCAnbWpzJywgJ2NqcyddLFxuICAgICAgICAgICAga2V5d29yZHM6IGwsXG4gICAgICAgICAgICBleHBvcnRzOiB7IFBBUkFNU19DT05UQUlOUzogZiB9LFxuICAgICAgICAgICAgaWxsZWdhbDogLyMoPyFbJF9BLXpdKS8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBpLlNIRUJBTkcoeyBsYWJlbDogJ3NoZWJhbmcnLCBiaW5hcnk6ICdub2RlJywgcmVsZXZhbmNlOiA1IH0pLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICd1c2Vfc3RyaWN0JyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAvXlxccypbJ1wiXXVzZSAoc3RyaWN0fGFzbSlbJ1wiXS8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGkuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgaS5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgRSxcbiAgICAgICAgICAgICAgbSxcbiAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgXyxcbiAgICAgICAgICAgICAgZyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiByKFxuICAgICAgICAgICAgICAgICAgL1t7LFxcbl1cXHMqLyxcbiAgICAgICAgICAgICAgICAgIHQoXG4gICAgICAgICAgICAgICAgICAgIHIoLygoKFxcL1xcLy4qJCl8KFxcL1xcKihcXCpbXi9dfFteKl0pKlxcKlxcLykpXFxzKikqLywgYyArICdcXFxccyo6JylcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdhdHRyJywgYmVnaW46IGMgKyB0KCdcXFxccyo6JyksIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgICAgICcoJyArIGkuUkVfU1RBUlRFUlNfUkUgKyAnfFxcXFxiKGNhc2V8cmV0dXJufHRocm93KVxcXFxiKVxcXFxzKicsXG4gICAgICAgICAgICAgICAga2V5d29yZHM6ICdyZXR1cm4gdGhyb3cgY2FzZScsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAgIF8sXG4gICAgICAgICAgICAgICAgICBpLlJFR0VYUF9NT0RFLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAgICAgICAgICcoXFxcXChbXigpXSooXFxcXChbXigpXSooXFxcXChbXigpXSpcXFxcKVteKCldKikqXFxcXClbXigpXSopKlxcXFwpfCcgK1xuICAgICAgICAgICAgICAgICAgICAgIGkuVU5ERVJTQ09SRV9JREVOVF9SRSArXG4gICAgICAgICAgICAgICAgICAgICAgJylcXFxccyo9PicsXG4gICAgICAgICAgICAgICAgICAgIHJldHVybkJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAnXFxcXHMqPT4nLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IGkuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBudWxsLCBiZWdpbjogL1xcKFxccypcXCkvLCBza2lwOiAhMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsdWRlRW5kOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkczogbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluczogZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvLC8sIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICcnLCBiZWdpbjogL1xccy8sIGVuZDogL1xccyovLCBza2lwOiAhMCB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgICAgICAgIHsgYmVnaW46ICc8PicsIGVuZDogJzwvPicgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogby5iZWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICdvbjpiZWdpbic6IG8uaXNUcnVseU9wZW5pbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IG8uZW5kLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogby5iZWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogby5lbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lwOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgICAgIGVuZDogL1t7O10vLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgICAgIGtleXdvcmRzOiBsLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnLCBpLmluaGVyaXQoaS5USVRMRV9NT0RFLCB7IGJlZ2luOiBjIH0pLCBBXSxcbiAgICAgICAgICAgICAgICBpbGxlZ2FsOiAvJS8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnd2hpbGUgaWYgc3dpdGNoIGNhdGNoIGZvcicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICAgICBpLlVOREVSU0NPUkVfSURFTlRfUkUgK1xuICAgICAgICAgICAgICAgICAgJ1xcXFwoW14oKV0qKFxcXFwoW14oKV0qKFxcXFwoW14oKV0qXFxcXClbXigpXSopKlxcXFwpW14oKV0qKSpcXFxcKVxcXFxzKlxcXFx7JyxcbiAgICAgICAgICAgICAgICByZXR1cm5CZWdpbjogITAsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtBLCBpLmluaGVyaXQoaS5USVRMRV9NT0RFLCB7IGJlZ2luOiBjIH0pXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXC4nICsgYyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiAnXFxcXCQnICsgYyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcycsXG4gICAgICAgICAgICAgICAgZW5kOiAvW3s7PV0vLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgICAgIGlsbGVnYWw6IC9bOlwiW1xcXV0vLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdleHRlbmRzJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBpLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC9cXGIoPz1jb25zdHJ1Y3RvcikvLFxuICAgICAgICAgICAgICAgIGVuZDogL1t7O10vLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbaS5pbmhlcml0KGkuVElUTEVfTU9ERSwgeyBiZWdpbjogYyB9KSwgJ3NlbGYnLCBBXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnKGdldHxzZXQpXFxcXHMrKD89JyArIGMgKyAnXFxcXCgpJyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICAgICAgICAgIGtleXdvcmRzOiAnZ2V0IHNldCcsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAgIGkuaW5oZXJpdChpLlRJVExFX01PREUsIHsgYmVnaW46IGMgfSksXG4gICAgICAgICAgICAgICAgICB7IGJlZ2luOiAvXFwoXFwpLyB9LFxuICAgICAgICAgICAgICAgICAgQSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAvXFwkWyguXS8gfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfVxuICAgICAgICB9KShpKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgT2JqZWN0LmFzc2lnbihiLmtleXdvcmRzLCBjKSxcbiAgICAgICAgYi5leHBvcnRzLlBBUkFNU19DT05UQUlOUy5wdXNoKG8pLFxuICAgICAgICAoYi5jb250YWlucyA9IGIuY29udGFpbnMuY29uY2F0KFtcbiAgICAgICAgICBvLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICduYW1lc3BhY2UnLFxuICAgICAgICAgICAgZW5kOiAvXFx7LyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2ludGVyZmFjZScsXG4gICAgICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogITAsXG4gICAgICAgICAgICBrZXl3b3JkczogJ2ludGVyZmFjZSBleHRlbmRzJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdKSksXG4gICAgICAgIGwoYiwgJ3NoZWJhbmcnLCBpLlNIRUJBTkcoKSksXG4gICAgICAgIGwoYiwgJ3VzZV9zdHJpY3QnLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgcmVsZXZhbmNlOiAxMCxcbiAgICAgICAgICBiZWdpbjogL15cXHMqWydcIl11c2Ugc3RyaWN0WydcIl0vLFxuICAgICAgICB9KSxcbiAgICAgICAgKGIuY29udGFpbnMuZmluZChlID0+ICdmdW5jdGlvbicgPT09IGUuY2xhc3NOYW1lKS5yZWxldmFuY2UgPSAwKSxcbiAgICAgICAgT2JqZWN0LmFzc2lnbihiLCB7XG4gICAgICAgICAgbmFtZTogJ1R5cGVTY3JpcHQnLFxuICAgICAgICAgIGFsaWFzZXM6IFsndHMnLCAndHN4J10sXG4gICAgICAgIH0pLFxuICAgICAgICBiXG4gICAgICApXG4gICAgfVxuICB9KSgpXG4pXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXG4gICd2Ym5ldCcsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgZnVuY3Rpb24gZShlKSB7XG4gICAgICByZXR1cm4gZSA/ICgnc3RyaW5nJyA9PSB0eXBlb2YgZSA/IGUgOiBlLnNvdXJjZSkgOiBudWxsXG4gICAgfVxuICAgIGZ1bmN0aW9uIG4oLi4ubikge1xuICAgICAgcmV0dXJuIG4ubWFwKG4gPT4gZShuKSkuam9pbignJylcbiAgICB9XG4gICAgZnVuY3Rpb24gdCguLi5uKSB7XG4gICAgICByZXR1cm4gJygnICsgbi5tYXAobiA9PiBlKG4pKS5qb2luKCd8JykgKyAnKSdcbiAgICB9XG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgY29uc3QgYSA9IC9cXGR7MSwyfVxcL1xcZHsxLDJ9XFwvXFxkezR9LyxcbiAgICAgICAgaSA9IC9cXGR7NH0tXFxkezEsMn0tXFxkezEsMn0vLFxuICAgICAgICBzID0gLyhcXGR8MVswMTJdKSg6XFxkKyl7MCwyfSAqKEFNfFBNKS8sXG4gICAgICAgIHIgPSAvXFxkezEsMn0oOlxcZHsxLDJ9KXsxLDJ9LyxcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBiZWdpbjogbigvIyAqLywgdChpLCBhKSwgLyAqIy8pIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiBuKC8jICovLCByLCAvICojLyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBiZWdpbjogbigvIyAqLywgcywgLyAqIy8pIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiBuKC8jICovLCB0KGksIGEpLCAvICsvLCB0KHMsIHIpLCAvICojLyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGwgPSBlLkNPTU1FTlQoLycnJy8sIC8kLywge1xuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICAgICAgICAgIGJlZ2luOiAvPFxcLz8vLFxuICAgICAgICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICAgIGMgPSBlLkNPTU1FTlQobnVsbCwgLyQvLCB7XG4gICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC8nLyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvKFtcXHQgXXxeKVJFTSg/PVxccykvIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdWaXN1YWwgQmFzaWMgLk5FVCcsXG4gICAgICAgIGFsaWFzZXM6IFsndmInXSxcbiAgICAgICAgY2FzZV9pbnNlbnNpdGl2ZTogITAsXG4gICAgICAgIGNsYXNzTmFtZUFsaWFzZXM6IHsgbGFiZWw6ICdzeW1ib2wnIH0sXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAga2V5d29yZDpcbiAgICAgICAgICAgICdhZGRoYW5kbGVyIGFsaWFzIGFnZ3JlZ2F0ZSBhbnNpIGFzIGFzeW5jIGFzc2VtYmx5IGF1dG8gYmluYXJ5IGJ5IGJ5cmVmIGJ5dmFsIGNhbGwgY2FzZSBjYXRjaCBjbGFzcyBjb21wYXJlIGNvbnN0IGNvbnRpbnVlIGN1c3RvbSBkZWNsYXJlIGRlZmF1bHQgZGVsZWdhdGUgZGltIGRpc3RpbmN0IGRvIGVhY2ggZXF1YWxzIGVsc2UgZWxzZWlmIGVuZCBlbnVtIGVyYXNlIGVycm9yIGV2ZW50IGV4aXQgZXhwbGljaXQgZmluYWxseSBmb3IgZnJpZW5kIGZyb20gZnVuY3Rpb24gZ2V0IGdsb2JhbCBnb3RvIGdyb3VwIGhhbmRsZXMgaWYgaW1wbGVtZW50cyBpbXBvcnRzIGluIGluaGVyaXRzIGludGVyZmFjZSBpbnRvIGl0ZXJhdG9yIGpvaW4ga2V5IGxldCBsaWIgbG9vcCBtZSBtaWQgbW9kdWxlIG11c3Rpbmhlcml0IG11c3RvdmVycmlkZSBteWJhc2UgbXljbGFzcyBuYW1lc3BhY2UgbmFycm93aW5nIG5ldyBuZXh0IG5vdGluaGVyaXRhYmxlIG5vdG92ZXJyaWRhYmxlIG9mIG9mZiBvbiBvcGVyYXRvciBvcHRpb24gb3B0aW9uYWwgb3JkZXIgb3ZlcmxvYWRzIG92ZXJyaWRhYmxlIG92ZXJyaWRlcyBwYXJhbWFycmF5IHBhcnRpYWwgcHJlc2VydmUgcHJpdmF0ZSBwcm9wZXJ0eSBwcm90ZWN0ZWQgcHVibGljIHJhaXNlZXZlbnQgcmVhZG9ubHkgcmVkaW0gcmVtb3ZlaGFuZGxlciByZXN1bWUgcmV0dXJuIHNlbGVjdCBzZXQgc2hhZG93cyBzaGFyZWQgc2tpcCBzdGF0aWMgc3RlcCBzdG9wIHN0cnVjdHVyZSBzdHJpY3Qgc3ViIHN5bmNsb2NrIHRha2UgdGV4dCB0aGVuIHRocm93IHRvIHRyeSB1bmljb2RlIHVudGlsIHVzaW5nIHdoZW4gd2hlcmUgd2hpbGUgd2lkZW5pbmcgd2l0aCB3aXRoZXZlbnRzIHdyaXRlb25seSB5aWVsZCcsXG4gICAgICAgICAgYnVpbHRfaW46XG4gICAgICAgICAgICAnYWRkcmVzc29mIGFuZCBhbmRhbHNvIGF3YWl0IGRpcmVjdGNhc3QgZ2V0dHlwZSBnZXR4bWxuYW1lc3BhY2UgaXMgaXNmYWxzZSBpc25vdCBpc3RydWUgbGlrZSBtb2QgbmFtZW9mIG5ldyBub3Qgb3Igb3JlbHNlIHRyeWNhc3QgdHlwZW9mIHhvciBjYm9vbCBjYnl0ZSBjY2hhciBjZGF0ZSBjZGJsIGNkZWMgY2ludCBjbG5nIGNvYmogY3NieXRlIGNzaG9ydCBjc25nIGNzdHIgY3VpbnQgY3VsbmcgY3VzaG9ydCcsXG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4gYnl0ZSBjaGFyIGRhdGUgZGVjaW1hbCBkb3VibGUgaW50ZWdlciBsb25nIG9iamVjdCBzYnl0ZSBzaG9ydCBzaW5nbGUgc3RyaW5nIHVpbnRlZ2VyIHVsb25nIHVzaG9ydCcsXG4gICAgICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2Ugbm90aGluZycsXG4gICAgICAgIH0sXG4gICAgICAgIGlsbGVnYWw6ICcvL3xcXFxce3xcXFxcfXxlbmRpZnxnb3N1Ynx2YXJpYW50fHdlbmR8XlxcXFwkICcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXCIoXCJcInxbXi9uXSlcIkNcXGIvLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXCIvLFxuICAgICAgICAgICAgZW5kOiAvXCIvLFxuICAgICAgICAgICAgaWxsZWdhbDogL1xcbi8sXG4gICAgICAgICAgICBjb250YWluczogW3sgYmVnaW46IC9cIlwiLyB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG8sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgICAgIC9cXGJcXGRbXFxkX10qKChcXC5bXFxkX10rKEVbKy1dP1tcXGRfXSspPyl8KEVbKy1dP1tcXGRfXSspKVtSRkRAISNdPy8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46IC9cXGJcXGRbXFxkX10qKChVP1tTSUxdKXxbJSZdKT8vIH0sXG4gICAgICAgICAgICAgIHsgYmVnaW46IC8mSFtcXGRBLUZfXSsoKFU/W1NJTF0pfFslJl0pPy8gfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvJk9bMC03X10rKChVP1tTSUxdKXxbJSZdKT8vLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAvJkJbMDFfXSsoKFU/W1NJTF0pfFslJl0pPy8gfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsYWJlbCcsXG4gICAgICAgICAgICBiZWdpbjogL15cXHcrOi8sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsLFxuICAgICAgICAgIGMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICBiZWdpbjpcbiAgICAgICAgICAgICAgL1tcXHQgXSojKGNvbnN0fGRpc2FibGV8ZWxzZXxlbHNlaWZ8ZW5hYmxlfGVuZHxleHRlcm5hbHNvdXJjZXxpZnxyZWdpb24pXFxiLyxcbiAgICAgICAgICAgIGVuZDogLyQvLFxuICAgICAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgICAgJ21ldGEta2V5d29yZCc6XG4gICAgICAgICAgICAgICAgJ2NvbnN0IGRpc2FibGUgZWxzZSBlbHNlaWYgZW5hYmxlIGVuZCBleHRlcm5hbHNvdXJjZSBpZiByZWdpb24gdGhlbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnM6IFtjXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxuKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKFxuICAneWFtbCcsXG4gICgoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgcmV0dXJuIGUgPT4ge1xuICAgICAgdmFyIG4gPSAndHJ1ZSBmYWxzZSB5ZXMgbm8gbnVsbCcsXG4gICAgICAgIGEgPSBcIltcXFxcdyM7Lz86QCY9KyQsLn4qJygpW1xcXFxdXStcIixcbiAgICAgICAgcyA9IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBiZWdpbjogLycvLCBlbmQ6IC8nLyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL1wiLywgZW5kOiAvXCIvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvXFxTKy8gfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBlLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXZhcmlhYmxlJyxcbiAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICB7IGJlZ2luOiAvXFx7XFx7LywgZW5kOiAvXFx9XFx9LyB9LFxuICAgICAgICAgICAgICAgIHsgYmVnaW46IC8lXFx7LywgZW5kOiAvXFx9LyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBpID0gZS5pbmhlcml0KHMsIHtcbiAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgeyBiZWdpbjogLycvLCBlbmQ6IC8nLyB9LFxuICAgICAgICAgICAgeyBiZWdpbjogL1wiLywgZW5kOiAvXCIvIH0sXG4gICAgICAgICAgICB7IGJlZ2luOiAvW15cXHMse31bXFxdXSsvIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICAgIGwgPSB7XG4gICAgICAgICAgZW5kOiAnLCcsXG4gICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6ICEwLFxuICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgIGtleXdvcmRzOiBuLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBiZWdpbjogL1xcey8sXG4gICAgICAgICAgZW5kOiAvXFx9LyxcbiAgICAgICAgICBjb250YWluczogW2xdLFxuICAgICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9LFxuICAgICAgICBnID0ge1xuICAgICAgICAgIGJlZ2luOiAnXFxcXFsnLFxuICAgICAgICAgIGVuZDogJ1xcXFxdJyxcbiAgICAgICAgICBjb250YWluczogW2xdLFxuICAgICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB9LFxuICAgICAgICBiID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXHdbXFxcXHcgOlxcXFwvLi1dKjooPz1bIFxcdF18JCknLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAnXCJcXFxcd1tcXFxcdyA6XFxcXC8uLV0qXCI6KD89WyBcXHRdfCQpJyB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IFwiJ1xcXFx3W1xcXFx3IDpcXFxcLy4tXSonOig/PVsgXFx0XXwkKVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbWV0YScsIGJlZ2luOiAnXi0tLVxcXFxzKiQnLCByZWxldmFuY2U6IDEwIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGJlZ2luOlxuICAgICAgICAgICAgICAnW1xcXFx8Pl0oWzEtOV0/WystXSk/WyBdKlxcXFxuKCArKVteIF1bXlxcXFxuXSpcXFxcbihcXFxcMlteXFxcXG5dK1xcXFxuPykqJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnPCVbJT0tXT8nLFxuICAgICAgICAgICAgZW5kOiAnWyUtXT8lPicsXG4gICAgICAgICAgICBzdWJMYW5ndWFnZTogJ3J1YnknLFxuICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiAhMCxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6ICEwLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICd0eXBlJywgYmVnaW46ICchXFxcXHcrIScgKyBhIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICd0eXBlJywgYmVnaW46ICchPCcgKyBhICsgJz4nIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICd0eXBlJywgYmVnaW46ICchJyArIGEgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3R5cGUnLCBiZWdpbjogJyEhJyArIGEgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ21ldGEnLCBiZWdpbjogJyYnICsgZS5VTkRFUlNDT1JFX0lERU5UX1JFICsgJyQnIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46ICdcXFxcKicgKyBlLlVOREVSU0NPUkVfSURFTlRfUkUgKyAnJCcgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2J1bGxldCcsIGJlZ2luOiAnLSg/PVsgXXwkKScsIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgIGUuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICAgICAgeyBiZWdpbktleXdvcmRzOiBuLCBrZXl3b3JkczogeyBsaXRlcmFsOiBuIH0gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgYmVnaW46XG4gICAgICAgICAgICAgICdcXFxcYlswLTldezR9KC1bMC05XVswLTldKXswLDJ9KFtUdCBcXFxcdF1bMC05XVswLTldPyg6WzAtOV1bMC05XSl7Mn0pPyhcXFxcLlswLTldKik/KFsgXFxcXHRdKSooWnxbLStdWzAtOV1bMC05XT8oOlswLTldWzAtOV0pPyk/XFxcXGInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdudW1iZXInLCBiZWdpbjogZS5DX05VTUJFUl9SRSArICdcXFxcYicsIHJlbGV2YW5jZTogMCB9LFxuICAgICAgICAgIHQsXG4gICAgICAgICAgZyxcbiAgICAgICAgICBzLFxuICAgICAgICBdLFxuICAgICAgICByID0gWy4uLmJdXG4gICAgICByZXR1cm4gKFxuICAgICAgICByLnBvcCgpLFxuICAgICAgICByLnB1c2goaSksXG4gICAgICAgIChsLmNvbnRhaW5zID0gciksXG4gICAgICAgIHsgbmFtZTogJ1lBTUwnLCBjYXNlX2luc2Vuc2l0aXZlOiAhMCwgYWxpYXNlczogWyd5bWwnXSwgY29udGFpbnM6IGIgfVxuICAgICAgKVxuICAgIH1cbiAgfSkoKVxuKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGhsanNcbn1cbiJdfQ==
