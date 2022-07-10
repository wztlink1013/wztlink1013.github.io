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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Author: wztlink1013
 * @Date: 2022-07-07 18:48:18
 * @LastEditTime: 2022-07-09 21:41:56
 * @Description:
 */
// 初始化highlight脚本
hljs.initHighlightingOnLoad(); // 域名重定向

if (window.location.hostname === 'wztlink1013.com') {
  location.replace(location.href.replace('wztlink1013.com', 'www.wztlink1013.com'));
} // TODO: 搜索功能 相当于获得了其api


var algoliaConfig = document.querySelector('meta[property="algolia:search"]').dataset;
var client = algoliasearch(algoliaConfig.applicationId, algoliaConfig.apiKey);
var index = client.initIndex(algoliaConfig.indexName);
console.log(algoliaConfig);
console.log(client);
console.log(index); // 入口函数，会在页面加载完毕执行

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
  },
  // 是否前往评论区
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
          twikoo.init({
            envId: 'https://twikoo-source.vercel.app/',
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

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY2F0ZWdvcmllcy5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvc2VhcmNoLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9zaGFyZWJ1dHRvbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvdG9jLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC93ZWJfaW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFsQjtBQUNBLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxjQUFELENBQW5CLEMsQ0FFQTs7QUFDQSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsVUFBRCxDQUFmO0FBQ0EsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFdBQUQsQ0FBaEI7QUFDQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQjtBQUNBLElBQUksU0FBUyxHQUFHLENB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c291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qICBcbiAgICBUT0RPOiBcbiAgICAgICAg6IO95Zyo5qC555uu5b2V6K6+572u6buY6K6k54q25oCB5piv5Yeg5qCP55qEXG4gICAgICAgIOiDveWkn+iuqeS9v+eUqOiAheWPlua2iOi/meenjeKAnOiusOW/huKAnVxuKiovXG5cblxuLy8gUEPvvJpoZWFkZXLkuIrnmoTlt6blj7PmjInpkq7ljLrln59cbmxldCBhcnJvd19sZWZ0ID0gJCgnI2Fycm93X2xlZnQnKTtcbmxldCBhcnJvd19yaWdodCA9ICQoJyNhcnJvd19yaWdodCcpO1xuXG4vLyDluIPlsYDvvJrniYjlv4PjgIHlt6bkuK3lj7PmjpLniYhcbmxldCBjdF9sZWZ0ID0gJCgnLmN0X2xlZnQnKTtcbmxldCBjdF9yaWdodCA9ICQoJy5jdF9yaWdodCcpO1xubGV0IGN0X2NlbnRlciA9ICQoJy5jdF9jZW50ZXInKTtcbmxldCBjb250YWluZXIgPSAkKCcuY29udGFpbmVyJyk7XG5cbi8vIFBDL2FwcO+8muWIh+aNomhlYWRlclxubGV0IGhlYWRlciA9ICQoJy5oZWFkZXInKTtcbmxldCBoZWFkZXJfYXBwID0gJCgnLmhlYWRlcl9hcHAnKTtcblxuLy8gYXBw77yaaGVhZGVy5LiK55qE5bem5Y+z5oyJ6ZKu5Yy65Z+fXG5sZXQgYnRuX2FwcF9zaWRlciA9ICQoJyNidG5fYXBwX3NpZGVyJyk7XG5sZXQgYnRuX2FwcF9yaWdodCA9ICQoJyNidG5fYXBwX3JpZ2h0Jyk7XG5cbi8vIGFwcO+8mueCueWHu2hlYWRlcl9hcHDml7blgJnlvLnlh7rmnaXnmoTmir3lsYlcbmxldCBhcHBfc2lkZV9nbGFzcyA9ICQoJyNhcHBfc2lkZV9nbGFzcycpO1xubGV0IGFwcF9zaWRlX2NvbnRlbnQgPSAkKCcjYXBwX3NpZGVfY29udGVudCcpO1xuXG4vLyAxLuW3puS4remFjee9rlxubGV0IG9uZV9jb250YWluZXIgPSAnODAlJyA7XG5sZXQgb25lX2N0X2NlbnRlcl93aWR0aCA9ICc3NSUnO1xubGV0IG9uZV9jdF9sZWZ0X3dpZHRoID0gJzI1JSc7XG4vLyAyLiDkuK3lj7PphY3nva5cbmxldCB0d29fY29udGFpbmVyID0gJzgwJScgO1xubGV0IHR3b19jdF9jZW50ZXJfd2lkdGggPSAnNzUlJztcbmxldCB0d29fY3RfcmlnaHRfd2lkdGggPSAnMjUlJztcbi8vIDMuIOW3puS4reWPs+mFjee9rlxubGV0IHRocmVlX2NvbnRhaW5lciA9ICc5NSUnIDtcbmxldCB0aHJlZV9jdF9jZW50ZXJfd2lkdGggPSAnNjAlJztcbmxldCB0aHJlZV9jdF9yaWdodF93aWR0aCA9ICcyMCUnO1xubGV0IHRocmVlX2N0X2xlZnRfd2lkdGggPSAnMjAlJztcbi8vIDQuIOS4remFjee9rlxubGV0IGZvdXJfY29udGFpbmVyID0gJzc1JScgO1xubGV0IGZvdXJfY3RfY2VudGVyX3dpZHRoID0gJzEwMCUnO1xuLy8g6K6+5aSH5bCP5LqONTYwcHjnmoTkuK3phY3nva5cbmxldCBkZXZpY2Vfc21hbGxfY29udGFpbmVyID0gXCI5OCVcIjtcbmxldCBkZXZpY2Vfc21hbGxfY2VudGVyID0gXCIxMDAlXCI7XG4vLyDorr7lpIflsI/kuo43ODBweOeahOS4remFjee9rlxubGV0IGRldmljZV9jZW50ZXJfY29udGFpbmVyID0gXCI5NiVcIjtcbmxldCBkZXZpY2VfY2VudGVyX2NlbnRlciA9IFwiMTAwJVwiO1xuXG5cbi8vIOWIpOaWrXBj5q615bem5Y+z5LiK6KeS55qE566t5aS06K+l5pi+56S65ZOq5LiqXG5mdW5jdGlvbiBsZWZ0X3JpZ2h0X2Fycm93ICgpIHtcbiAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG4gICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxlZnRfY2VudGVyX3JpZ2h0ICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IHRocmVlX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3Moe1xuICAgICAgICBcIndpZHRoXCI6IHRocmVlX2N0X2xlZnRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbiAgICBjdF9yaWdodC5jc3Moe1xuICAgICAgICBcIndpZHRoXCI6IHRocmVlX2N0X3JpZ2h0X3dpZHRoLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgbGVmdF9yaWdodF9hcnJvdyAoKTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGF5b3V0Jyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ0xSJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5biD5bGA77ya5bem5Lit5Y+zXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnTFInKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsZWZ0X2NlbnRlciAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiBvbmVfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBvbmVfY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3Moe1wid2lkdGhcIjogb25lX2N0X2xlZnRfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgbGVmdF9yaWdodF9hcnJvdyAoKTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGF5b3V0Jyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5biD5bGA77ya5bem5LitXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjZW50ZXJfcmlnaHQgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogdHdvX2NvbnRhaW5lcn0pO1xuICAgIGN0X3JpZ2h0LmNzcyh7XCJ3aWR0aFwiOiB0d29fY3RfcmlnaHRfd2lkdGh9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IHR3b19jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XG4gICAgbGVmdF9yaWdodF9hcnJvdyAoKTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGF5b3V0Jyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ1InKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLluIPlsYDvvJrkuK3lj7NcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdSJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2VudGVyICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGZvdXJfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBmb3VyX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ0MnKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLluIPlsYDvvJrkuK1cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdDJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV2aWNlX3NtYWxsICgpIHtcbiAgICAvLyDmnIDlsI/lsLrlr7jvvJrmnIDlpKc1NjBweFxuICAgIGNvbnNvbGUubG9nKFwi5bCP5LqONTYwcHjlsLrlr7hcIik7XG5cbiAgICBoZWFkZXIuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICBoZWFkZXJfYXBwLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIC8vIOiuvue9ruW4g+WxgFxuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX3NtYWxsX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX3NtYWxsX2NlbnRlcn0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuXG59XG5mdW5jdGlvbiBkZXZpY2VfY2VudGVyICgpIHtcbiAgICAvLyDkuK3nrYnlsLrlr7jvvJrmnIDlpKc5ODBweFxuICAgIGNvbnNvbGUubG9nKFwi5bCP5LqOOTgwcHjlsLrlr7hcIik7XG5cbiAgICBoZWFkZXIuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICBoZWFkZXJfYXBwLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIC8vIOiuvue9ruW4g+WxgFxuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX2NlbnRlcl9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9jZW50ZXJfY2VudGVyfSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG5cbn1cbmZ1bmN0aW9uIGRldmljZV9sYXJnZXN0ICgpIHtcbiAgICAvLyDmnIDlpKflsLrlr7jvvJrmnIDlpKcxMjYxcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjEyNjFweOWwuuWvuFwiKTtcblxuICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbiAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbiAgICBoZWFkZXIuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuXG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IHRocmVlX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgY3RfcmlnaHQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9yaWdodF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xufVxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5idG5fcGNfc3dpdGNoKCk7XG4gICAgICAgIHRoaXMuYnRuX2FwcF9zd2l0Y2goKTtcbiAgICAgICAgdGhpcy5icm93c2VyX3JlbWVtYmVyKCk7XG4gICAgICAgIHRoaXMuZGV2aWNlX3N3aXRjaCgpOyAvLyDov5nkuKrmlL7liLDmnIDlkI7oh6rosIPnlKgh5Zug5Li65LiN566h5pys5Zyw5a2Y5YKo5piv5LuA5LmI77yM5pyA57uI6L+Y5piv6KaB5qC55o2u6K6+5aSH55uR5ZCs5Li65Li7XG4gICAgfSxcbiAgICAvKiBQQ++8muWNlS/lj4wv5LiJ5qCP5biD5bGA5YiH5o2i5oyJ6ZKu54K55Ye75LqL5Lu2ICovXG4gICAgYnRuX3BjX3N3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGFycm93X2xlZnQuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIC8vIOi9rOaNouWIh+aNouS5i+WQjueahOeureWktOaMiemSrlxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCdibG9jaycpO1xuICAgICAgICAgICAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvL+W3puS4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5bem5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwnbm9uZScpO1xuICAgICAgICAgICAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvL+S4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+S4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgYXJyb3dfcmlnaHQuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIC8vIOi9rOaNouWIh+aNouS5i+WQjueahOeureWktOaMiemSrlxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCdibG9jaycpO1xuICAgICAgICAgICAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8v5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5bem5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwnbm9uZScpO1xuICAgICAgICAgICAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8vIOS4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyDlt6bkuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyog56e75Yqo56uv5bem5Y+z5LiK6KeS55qE5oyJ6ZKuICovXG4gICAgYnRuX2FwcF9zd2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDngrnlh7vlt6bmjInpkq5cbiAgICAgICAgYnRuX2FwcF9zaWRlci5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgYXBwX3NpZGVfZ2xhc3MuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgICAgICAgICBhcHBfc2lkZV9jb250ZW50LmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g54K55Ye75q+b546755KD54mHXG4gICAgICAgIGFwcF9zaWRlX2dsYXNzLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhcHBfc2lkZV9nbGFzcy5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgICAgICAgICAgYXBwX3NpZGVfY29udGVudC5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g54K55Ye75Y+z5oyJ6ZKuXG4gICAgICAgIGJ0bl9hcHBfcmlnaHQuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFsZXJ0KFwi5pys572R56uZ6L+Y5Zyo5byA5Y+R5Lit77yM6K+45aSa5Yqf6IO96L+Y5pyq5a6M5ZaE77yM5pWs6K+35pyf5b6FflwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pys572R56uZ6L+Y5Zyo5byA5Y+R5Lit77yM6K+45aSa5Yqf6IO96L+Y5pyq5a6M5ZaE77yM5pWs6K+35pyf5b6FflwiKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKiDmtY/op4jlmajorrDkvY/luIPlsYAgKi9cbiAgICBicm93c2VyX3JlbWVtYmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBiX2xlZnQgPSAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpO1xuICAgICAgICBsZXQgYl9yaWdodCA9ICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpO1xuICAgICAgICBsZXQgYl9sYXlvdXQ7XG4gICAgXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgICAgIC8vIOa1j+iniOWZqOaciee8k+WtmOeahOaDheWGtVxuICAgICAgICAgICAgbGV0IGxheW91dF9jaGFuZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaciWxheW91dOW4g+WxgOe8k+WtmFwiKTsgICAgXG4gICAgICAgICAgICBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJMUlwiKXtcbiAgICAgICAgICAgICAgICAvLyDlt6bkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGxheW91dF9jaGFuZ2UgPT09IFwiTFwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5bem5Lit5biD5bGAXG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJSXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJDXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDkuK3luIPlsYBcbiAgICAgICAgICAgICAgICBjZW50ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5YW25LuW6I6r5ZCN5YW25aaZ55qE5oOF5Ya1XG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOa1j+iniOWZqOayoeaciee8k+WtmOeahOaDheWGtVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmsqHmnIlsYXlvdXTluIPlsYDnvJPlrZhcIik7XG4gICAgICAgICAgICBpZiAoKGJfbGVmdCA9PT0gXCJibG9ja1wiKSAmJiAoYl9yaWdodCA9PT0gXCJub25lXCIpKSB7IC8vIOW3puS4reW4g+WxgFxuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJMXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChiX2xlZnQgPT09IFwibm9uZVwiKSAmJiAoYl9yaWdodCA9PT0gXCJibG9ja1wiKSkgeyAvLyDkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBiX2xheW91dCA9IFwiUlwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoYl9sZWZ0ID09PSBcImJsb2NrXCIpICYmIChiX3JpZ2h0ID09PSBcImJsb2NrXCIpKSB7IC8v5bem5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIkxSXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIkxSXCI7XG4gICAgICAgICAgICAgICAgLy8g5bem5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBiX2xheW91dClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9LFxuICAgIC8qIOWqkuS9k+afpeivouW4g+WxgCAqL1xuICAgIGRldmljZV9zd2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDliJvlu7rmn6Xor6LliJfooahcbiAgICAgICAgbGV0IGRldmljZV93aWR0aCA9IFtcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA1NjBweCknKSxcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5ODBweCknKSxcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMjYxcHgpJylcbiAgICAgICAgXTtcblxuICAgICAgICAvLyDlrprkuYnlm57osIPlh73mlbBcbiAgICAgICAgZnVuY3Rpb24gbWVkaWFNYXRjaHMgKCkge1xuICAgICAgICAgICAgaWYgKGRldmljZV93aWR0aFswXS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgZGV2aWNlX3NtYWxsICgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2Vfd2lkdGhbMV0ubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGRldmljZV9jZW50ZXIgKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRldmljZV93aWR0aFsyXS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgZGV2aWNlX2xhcmdlc3QgKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5aSn5LqO6K6+5a6a5pyA5aSn5bC65a+45oOF5Ya1XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOWFiOi/kOihjOS4gOasoeWbnuiwg+WHveaVsFxuICAgICAgICBtZWRpYU1hdGNocygpO1xuICAgICAgICAvLyDkuLrmn6Xor6LliJfooajms6jlhoznm5HlkKzlmajvvIzlkIzml7blsIblm57osIPlh73mlbDkvKDnu5nnm5HlkKzlmahcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXZpY2Vfd2lkdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRldmljZV93aWR0aFtpXS5hZGRMaXN0ZW5lcihtZWRpYU1hdGNocyk7XG4gICAgICAgIH1cbiAgICB9LFxufVxuXG5cbiIsIi8qXG4gKiBAQXV0aG9yOiB3enRsaW5rMTAxM1xuICogQERhdGU6IDIwMjItMDctMDcgMTg6NDg6MThcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMDctMDkgMjE6NDE6NTZcbiAqIEBEZXNjcmlwdGlvbjpcbiAqL1xuaW1wb3J0IGxheW91dF9vYmplY3QgZnJvbSAnLi9jb21tb24vbGF5b3V0LmpzJ1xuaW1wb3J0IHRvY19vYmplY3QgZnJvbSAnLi9wYXJ0L3RvYy5qcydcbmltcG9ydCBjb21tZW50c19vYmplY3QgZnJvbSAnLi9wYXJ0L2NvbW1lbnRzLmpzJ1xuaW1wb3J0IHsgZ29fdG9wX29iamVjdCwgZ2V0U2Nyb2xsIH0gZnJvbSAnLi9wYXJ0L2dvX3RvcC5qcydcbmltcG9ydCB3ZWJfaW5mb19vYmplY3QgZnJvbSAnLi9wYXJ0L3dlYl9pbmZvLmpzJ1xuaW1wb3J0IHNlYXJjaF9vYmplY3QgZnJvbSAnLi9wYXJ0L3NlYXJjaC5qcydcbmltcG9ydCBzaGFyZV9vYmplY3QgZnJvbSAnLi9wYXJ0L3NoYXJlYnV0dG9uLmpzJ1xuaW1wb3J0IGNhdGVnb3JpZXNfb2JqZWN0IGZyb20gJy4vcGFydC9jYXRlZ29yaWVzLmpzJ1xuLy8g5Yid5aeL5YyWaGlnaGxpZ2h06ISa5pysXG5obGpzLmluaXRIaWdobGlnaHRpbmdPbkxvYWQoKVxuXG4vLyDln5/lkI3ph43lrprlkJFcbmlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICd3enRsaW5rMTAxMy5jb20nKSB7XG4gIGxvY2F0aW9uLnJlcGxhY2UoXG4gICAgbG9jYXRpb24uaHJlZi5yZXBsYWNlKCd3enRsaW5rMTAxMy5jb20nLCAnd3d3Lnd6dGxpbmsxMDEzLmNvbScpXG4gIClcbn1cblxuLy8gVE9ETzog5pCc57Si5Yqf6IO9IOebuOW9k+S6juiOt+W+l+S6huWFtmFwaVxuY29uc3QgYWxnb2xpYUNvbmZpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICdtZXRhW3Byb3BlcnR5PVwiYWxnb2xpYTpzZWFyY2hcIl0nXG4pLmRhdGFzZXRcbmNvbnN0IGNsaWVudCA9IGFsZ29saWFzZWFyY2goYWxnb2xpYUNvbmZpZy5hcHBsaWNhdGlvbklkLCBhbGdvbGlhQ29uZmlnLmFwaUtleSlcbmNvbnN0IGluZGV4ID0gY2xpZW50LmluaXRJbmRleChhbGdvbGlhQ29uZmlnLmluZGV4TmFtZSlcblxuY29uc29sZS5sb2coYWxnb2xpYUNvbmZpZylcbmNvbnNvbGUubG9nKGNsaWVudClcbmNvbnNvbGUubG9nKGluZGV4KVxuXG4vLyDlhaXlj6Plh73mlbDvvIzkvJrlnKjpobXpnaLliqDovb3lrozmr5XmiafooYxcbiQoZnVuY3Rpb24gKCkge1xuICAvLyDliJ3lp4vljJbnm67lvZXohJrmnKzlh73mlbBcbiAgdG9jX29iamVjdC5pbml0KClcbiAgLy8g5Yid5aeL5YyW6K+E6K665qih5Z2X5LiL5omA5pyJ5Ye95pWwXG4gIGNvbW1lbnRzX29iamVjdC5pbml0KClcbiAgLy8g5Yid5aeL5YyW5Zue5Yiw6aG26YOoXG4gIGdvX3RvcF9vYmplY3QuaW5pdCgpXG4gIC8vIOW4g+WxgOWIneWni+WMllxuICBsYXlvdXRfb2JqZWN0LmluaXQoKVxuICBzZWFyY2hfb2JqZWN0LmluaXQoKVxuICAvLyDlhaXlj6Plh73mlbDliJ3lp4vljJbnvZHnq5nov5DooYzml7bpl7RcbiAgd2ViX2luZm9fb2JqZWN0LmluaXQoKVxuICAvLyDliIbkuqvmjInpkq7nmoTliJ3lp4vljJZcbiAgc2hhcmVfb2JqZWN0LmluaXQoKVxuICAvLyDnm67lvZXlh73mlbDliJ3lp4vljJZcbiAgY2F0ZWdvcmllc19vYmplY3QuaW5pdCgpXG4gIC8vIOWktOWbvuS8mOWMluS7o+eggVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJ0aWNsZV9pbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0Y2xlX2xpc3RfaXRlbV9pbWcnKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJ0aWNsZV9pbWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB3aWQgPSBhcnRpY2xlX2ltZ1tpXS5maXJzdEVsZW1lbnRDaGlsZC53aWR0aCArIDVcbiAgICAgIGxldCBoZWkgPSBhcnRpY2xlX2ltZ1tpXS5maXJzdEVsZW1lbnRDaGlsZC5oZWlnaHQgKyA3XG4gICAgICBhcnRpY2xlX2ltZ1tpXS5zdHlsZS5tYXhXaWR0aCA9IHdpZCArICdweCdcbiAgICAgIGFydGljbGVfaW1nW2ldLnN0eWxlLm1heEhlaWdodCA9IGhlaSArICdweCdcbiAgICB9XG4gIH0sIDEwMDApXG59KVxuIiwiLypcbiAqIEBBdXRob3I6IHd6dGxpbmsxMDEzXG4gKiBARGF0ZTogMjAyMi0wNy0wNyAxODo0ODoxOFxuICogQExhc3RFZGl0VGltZTogMjAyMi0wNy0xMCAyMTo0NzozMVxuICogQERlc2NyaXB0aW9uOlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhdGVnb3JpZXNfd2lkZ2V0KClcbiAgICB0aGlzLmhpdF9vcGVuX2Nsb3NlX2ZvcmRlcigpXG4gICAgdGhpcy5yZWFkbW9yZV9ibG9nX2Vzc2F5KClcbiAgfSxcbiAgLy8g54K55Ye7aWNvbuWxleW8gC/lhbPpl63moJHliIbnsbtcbiAgaGl0X29wZW5fY2xvc2VfZm9yZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gbGV0IGNhdGVfY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlX2NlbGwnKVxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZV9jZWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBpZiAoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgIC8vICAgICBsZXQgaXRlbSA9ICQoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdKVxuICAgIC8vICAgICBpdGVtLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICBpZiAoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgIC8vICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgLy8gICAgICAgfSBlbHNlIGlmIChcbiAgICAvLyAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID09PSAnaW5saW5lLWJsb2NrJ1xuICAgIC8vICAgICAgICkge1xuICAgIC8vICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC8vIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH0sXG4gIC8vIOWIneWni+WMllxuICBjYXRlZ29yaWVzX3dpZGdldDogZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcnJfbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnktbGlzdC1pdGVtJylcblxuICAgIGFycl9saS5mb3JFYWNoKGxpID0+IHtcbiAgICAgIC8vIOe+juWMluivpeWIhuexu+aAu+aVsFxuICAgICAgbGV0IG9ial93b3JkID0gbGkucXVlcnlTZWxlY3RvcignYScpLm5leHRFbGVtZW50U2libGluZ1xuICAgICAgb2JqX3dvcmQuaW5uZXJIVE1MID0gJyBbJyArIG9ial93b3JkLmlubmVySFRNTCArICddJ1xuICAgICAgLy8g6K+l5YiG57G75LiL5aaC5p6c5pyJ5a2Q5YiG57G7XG4gICAgICBpZiAobGkucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWxpc3QtY2hpbGQnKSkge1xuICAgICAgICAvLyDpu5jorqTmiYDmnInlrZDliIbnsbvlhajpg6jmlLbnvKlcbiAgICAgICAgbGkucXVlcnlTZWxlY3RvcigndWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIC8vIOWxleW8gOaMiemSrlxuICAgICAgICBsZXQgbm9kZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgbm9kZV8xLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgICAgICBub2RlXzEuaW5uZXJIVE1MID1cbiAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1wbHVzLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnXG4gICAgICAgIGxpLmluc2VydEJlZm9yZShub2RlXzEsIGxpLnF1ZXJ5U2VsZWN0b3IoJ2EnKSlcblxuICAgICAgICAvLyDmlLbnvKnmjInpkq5cbiAgICAgICAgbGV0IG5vZGVfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBub2RlXzIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBub2RlXzIuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgICAgIG5vZGVfMi5pbm5lckhUTUwgPVxuICAgICAgICAgICc8aSBjbGFzcz1cImZhIGZhLW1pbnVzLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnXG4gICAgICAgIGxpLmluc2VydEJlZm9yZShub2RlXzIsIGxpLnF1ZXJ5U2VsZWN0b3IoJ2EnKSlcblxuICAgICAgICAvLyDlsZXlvIDmjInpkq7ms6jlhozngrnlh7vkuovku7ZcbiAgICAgICAgbm9kZV8xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgbm9kZV8yLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgfSlcblxuICAgICAgICAvLyDmlLbnvKnmjInpkq7ms6jlhozngrnlh7vkuovku7ZcbiAgICAgICAgbm9kZV8yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG5vZGVfMi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgbm9kZV8xLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6K+l5YiG57G75LiL5rKh5pyJ5a2Q5YiG57G7XG4gICAgICAgIGxldCBub2RlXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykgLy8g5pS+5LiA5Liq5Y2g5L2N56ymXG4gICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgbm9kZV8xLnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzE1cHgnXG4gICAgICAgIG5vZGVfMS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBsaS5pbnNlcnRCZWZvcmUobm9kZV8xLCBsaS5xdWVyeVNlbGVjdG9yKCdhJykpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgLy8g5p+l55yL5pu05aSa6aG16Z2i77yM5LyY5YyW5Y2a5a6iL+maj+eslOaYvuekulxuICByZWFkbW9yZV9ibG9nX2Vzc2F5OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL2FyY2hpdmVzLycpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAvLyDljrvmjonnrKzkuIDkuKrvvJ/lrZfnrKZcbiAgICAgIGxldCBwYXJhbXMgPSBsb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpXG4gICAgICAvLyDmoLnmja495Y+35YiS5YiG5Y+C5pWwXG4gICAgICBsZXQgYXJyID0gcGFyYW1zLnNwbGl0KCc9JylcbiAgICAgIC8vIOiOt+WPlnBhZ2VfdHlwZeWPguaVsFxuICAgICAgbGV0IHBhZ2VfdHlwZSA9IGFyclsxXVxuICAgICAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFyY2hpdmVfYXJ0aWNsZV9saXN0JylcbiAgICAgIGZvciAobGV0IHUgPSAwOyB1IDwgdWwubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgLy8g5a+55q+P5LiA5LiqbGnov5vooYzliKTmlq3vvIzlpoLmnpzkuI3mmK/lj4LmlbDnmoTlgLzvvIzlsLHov5vooYzpmpDol49cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bFt1XS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBpbmRleCA9IHVsW3VdLmNoaWxkcmVuW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAnZHNhbCcpIHtcbiAgICAgICAgICAgIGluZGV4ID0gJ2Jsb2cnXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCAhPT0gcGFnZV90eXBlKSB7XG4gICAgICAgICAgICB1bFt1XS5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxufVxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbuOAkOaWh+eroOiuv+mXrumHj+aOkuWQjeOAkVxuICAgIOaWh+eroOmYheivu+mHj+WcqOWNleS4quaWh+eroOS4reWPr+S7peaYvuekuuS9huaYr+S4jeiDveaOkuWQje+8jOaOkuWQjeaAjuS5iOWunueOsOWRou+8n1xuICAgIOaWueahiDHvvJrkvb/nlKh2YWxpbmVcbiAgICDmlrnmoYgy77ya5Zyo5pyN5Yqh5Zmo5LiK6L+b6KGM5YWo56uZ55qE5paH56ug6K6/6Zeu77yM5o+Q5Y+W5LuW5Lus55qE6K6/6Zeu6YePaWRcbiAgICDmlrnmoYgz77ya5a+5dHdpa29v5LqR5Ye95pWw6L+b6KGM5Luj56CB5pu05pS577yM57G75Ly86K6/6Zeu6YePYXBpXG4gXG7jgJDor4TorrrliIfmjaLmjInpkq7jgJFcbiAgICDliIfmjaJ1dHRlcmFuY2Vz6K+E6K665ZCO77yM6aG16Z2i5Lya5Yi35paw5LiA5LiL54S25ZCO5Y+I5Zue5Yiw6buY6K6k6K+E6K6657O757uf5LqG77yM6L+Z5Liq5Y+v5Lul5LyY5YyWXG5cbuOAkOacgOaWsOivhOiuuuOAkVxuICAgIOacgOaWsOivhOiuuue7hOS7tu+8jOWmguaenGJsb2fpobXpnaLnlKjkuobvvIzpgqPkuYjov5nkuKrnu4Tku7blsLHkuI3og73mlL7lnKjnp7vliqjnq6/kvqfovrnmoI/kuobvvIxcbiAgICDlkIzkuIDkuKppZOS4jeiDveWkmuasoeeUqOeahOe8mOaVheWQl++8n1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8g5a+85Ye65Li65LiA5Liq5a+56LGhXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdvX2NvbW1lbnRzKClcbiAgICB0aGlzLmNvbW1lbnRzX2NvdW50KClcbiAgICB0aGlzLm5ld19jb21tZW50cygpXG4gICAgdGhpcy5zd2l0Y2hfY29tbWVudCgpXG4gIH0sXG4gIC8vIOaYr+WQpuWJjeW+gOivhOiuuuWMulxuICBnb19jb21tZW50czogZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvX2NvbW1lbnRzJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9XG4gIH0sXG4gIC8vIOaWh+eroOivhOiuuuaVsFxuICBjb21tZW50c19jb3VudDogZnVuY3Rpb24gKCkge1xuICAgIC8vIOWIpOaWremhtemdouaYr+WQpuacieivhOiuuuWMumlk5ZKM5byV55So6K+E6K665pWw55qEaWRcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMnKSAmJlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50cycpXG4gICAgKSB7XG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50cycpXG4gICAgICAvLyBCT03ojrflj5bpobXpnaJ1cmznmoRwYXRobmFtZei3r+W+hFxuICAgICAgdmFyIHR3aWtvb19jb21tZW50c191cmwgPSBbbG9jYXRpb24ucGF0aG5hbWVdXG5cbiAgICAgIHR3aWtvb1xuICAgICAgICAuZ2V0Q29tbWVudHNDb3VudCh7XG4gICAgICAgICAgZW52SWQ6ICd3ZWJzaXRlLXdpa29vLTRnNDZrOGRvOTg4Njc1NDInLCAvLyDnjq/looMgSURcbiAgICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgICB1cmxzOiB0d2lrb29fY29tbWVudHNfdXJsLCAvLyDkuI3ljIXlkKvljY/orq7jgIHln5/lkI3jgIHlj4LmlbDnmoTmlofnq6Dot6/lvoTliJfooajvvIzlv4XkvKDlj4LmlbBcbiAgICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlLCAvLyDor4TorrrmlbDmmK/lkKbljIXmi6zlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgLy8g5bCG6K+E6K665pWw5YaZ5YWl5YW25LitXG4gICAgICAgICAgdHdpa29vX2NvbW1lbnRzLmlubmVyVGV4dCA9IHJlc1swXS5jb3VudFxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgLy8g6L+U5Zue56S65L6LOiBbXG4gICAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEwL3Bvc3QtMS5odG1sJywgY291bnQ6IDEwIH0sXG4gICAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzExL3Bvc3QtMi5odG1sJywgY291bnQ6IDAgfSxcbiAgICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTIvcG9zdC0zLmh0bWwnLCBjb3VudDogMjAgfVxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAvLyDlj5HnlJ/plJnor69cbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIC8vIOacgOaWsOivhOiuulxuICBuZXdfY29tbWVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaG90X2FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdF9hcnRpY2xlc19pdGVtJylcbiAgICB2YXIgcGFnZV9zaXplID0gOFxuICAgIHR3aWtvb1xuICAgICAgLmdldFJlY2VudENvbW1lbnRzKHtcbiAgICAgICAgZW52SWQ6ICdodHRwczovL3R3aWtvby1zb3VyY2UudmVyY2VsLmFwcC8nLCAvLyDnjq/looMgSURcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlX3NpemUsIC8vIOiOt+WPluWkmuWwkeadoe+8jOm7mOiupO+8mjEw77yM5pyA5aSn77yaMTAwXG4gICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UsIC8vIOaYr+WQpuWMheaLrOacgOaWsOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdfY29tbWVudHNfbG9kaW5nJylcbiAgICAgICAgdmFyIG5ld19jb21tZW50c19sb2RpbmdfcGFyZW50ID0gbmV3X2NvbW1lbnRzX2xvZGluZy5wYXJlbnRFbGVtZW50XG4gICAgICAgIG5ld19jb21tZW50c19sb2RpbmdfcGFyZW50LnJlbW92ZUNoaWxkKG5ld19jb21tZW50c19sb2RpbmcpXG4gICAgICAgIC8vIOaPkuWFpeivhOiuulxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2Vfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKHJlc1tpXS5jb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2NvbnRlbnQgPSByZXNbaV0uY29tbWVudFxuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19uaWNrID0gcmVzW2ldLm5pY2tcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdXJsID0gcmVzW2ldLnVybFxuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19hdmF0YXIgPSByZXNbaV0uYXZhdGFyXG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX3RpbWUgPSByZXNbaV0ucmVsYXRpdmVUaW1lXG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2lkID0gJyMnICsgcmVzW2ldLmlkXG5cbiAgICAgICAgICAgIHZhciBob3RfYXJ0aWNsZXNfY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBob3RfYXJ0aWNsZXNfY2hpbGQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpdGVtX3VwXCI+PGltZyBzcmM9XCInICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2F2YXRhciArXG4gICAgICAgICAgICAgICdcIiBjbGFzcz1cImF2YXRhclwiPjxkaXYgY2xhc3M9XCJuaWNrX25hbWVcIj48c3BhbiBjbGFzcz1cIm5pY2tcIj4nICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX25pY2sgK1xuICAgICAgICAgICAgICAnPC9zcGFuPjxzcGFuIGNsYXNzPVwidGltZVwiPicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfdGltZSArXG4gICAgICAgICAgICAgICc8L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cIml0ZW1fZG93blwiPjxhIGhyZWY9XCInICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX3VybCArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c19pZCArXG4gICAgICAgICAgICAgICdcIj4nICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2NvbnRlbnQgK1xuICAgICAgICAgICAgICAnPC9hPjwvZGl2PidcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlcy5hcHBlbmQoaG90X2FydGljbGVzX2NoaWxkKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgfSlcbiAgfSxcbiAgLy8g5YiH5o2i6K+E6K66KOivhOiuuue7hOS7tuWtmOWcqOaXtilcbiAgc3dpdGNoX2NvbW1lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N3aXRjaF9idG4nKSkge1xuICAgICAgdmFyIHN3aXRjaF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3dpdGNoX2J0bicpXG4gICAgICB2YXIgZ2l0aHViX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2l0aHViX2NvbW1lbnQnKVxuICAgICAgdmFyIHR3aWtvb19jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50JylcblxuICAgICAgc3dpdGNoX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoX2J0bi5jbGFzc0xpc3QudG9nZ2xlKCdtb3ZlJylcbiAgICAgICAgZ2l0aHViX2NvbW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGVudC1pbicpXG4gICAgICAgIHR3aWtvb19jb21tZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRlbnQtaW4nKVxuXG4gICAgICAgIGlmIChnaXRodWJfY29tbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICBnaXRodWJfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUd2lrb28g6K+E6K6657O757ufXG4gICAgICAgICAgZ2l0aHViX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgdHdpa29vXG4gICAgICAgICAgICAuaW5pdCh7XG4gICAgICAgICAgICAgIGVudklkOiAnaHR0cHM6Ly90d2lrb28tc291cmNlLnZlcmNlbC5hcHAvJyxcbiAgICAgICAgICAgICAgZWw6ICcjdGNvbW1lbnQnLFxuICAgICAgICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgICAgICAgLy8gcGF0aDogJ3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZScsIC8vIOeUqOS6juWMuuWIhuS4jeWQjOaWh+eroOeahOiHquWumuS5iSBqcyDot6/lvoTvvIzlpoLmnpzmgqjnmoTmlofnq6Dot6/lvoTkuI3mmK8gbG9jYXRpb24ucGF0aG5hbWXvvIzpnIDkvKDmraTlj4LmlbBcblxuICAgICAgICAgICAgICAvLyDor4TorrrliqDovb3miJDlip/lkI7nmoTlm57osIPlh73mlbDjgIJcbiAgICAgICAgICAgICAgLy8g5Y+R6KGo6K+E6K665ZCO6Ieq5Yqo5Yi35paw6K+E6K665pe244CB5Yqg6L295LiL5LiA6aG16K+E6K665pe277yM5Lmf5Lya6Kem5Y+R44CCXG4gICAgICAgICAgICAgIC8vIOivhOiuuuWKoOi9veWksei0peaXtuS4jeS8muinpuWPkeOAglxuICAgICAgICAgICAgICBvbkNvbW1lbnRMb2FkZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVHdpa29vIGFsbCBjb21tZW50cyBsb2FkZWQnKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8gVHdpa29vIOaIkOWKn+aMgui9veWQjueahOWbnuiwg+WHveaVsOOAgueOr+WigyBJRCDplJnor6/jgIHnvZHnu5zlvILluLjjgIHmjILovb3lpLHotKXnrYnmg4XlhrXml7bkuI3kvJrop6blj5HjgIJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1R3aWtvbyBsb2FkaW5nIGZpbmlzaGVkJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9LFxufVxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAg57yT5oWi5pi+56S6XG4gICAgICAgIOe8k+aFouWbnuWIsOmhtumDqFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIGxldCBnb190b3Bfb2JqZWN0ID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmdvX3RvcCgpO1xuICAgICAgICB0aGlzLmNsaWNrX2dvX3RvcCgpO1xuICAgIH0sXG4gICAgZ29fdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyDmu5rliqjmmL7npLpnb190b3DmjInpkq5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAvLyDmjIHnu63nm5HlkKzmu5rliqjnirbmgIFcbiAgICAgICAgICAgIGdldFNjcm9sbCgpLnRvcCAhPT0gMCA/ICQoXCIjZ29fdG9wXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKSA6ICQoXCIjZ29fdG9wXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBjbGlja19nb190b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDngrnlh7vlm57liLDpobbpg6hcbiAgICAgICAgJChcIiNnb190b3BcIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vLyBzY3Jvb2xUb3DlhbzlrrnmgKfmlrnmoYhcbmZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcbiAgICByZXR1cm4ge1xuICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnR8fDAsXG4gICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwXG4gICAgfTtcbn1cblxuXG4vLyDlpoLmnpzkuI3lgZrpu5jorqTlr7zlhaXvvIzlsLHmjInnhafkuIvpnaLlhpnvvIzkuI3opoFkZWZhdWx06K+NXG5leHBvcnQge1xuICAgIGdvX3RvcF9vYmplY3QsIC8v5a+85Ye65a+56LGhXG4gICAgZ2V0U2Nyb2xsLCAvL+WvvOWHuumAmueUqOWHveaVsFxufVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9LFxuICAgIHNlYXJjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpbnB1dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLXNlYXJjaC1pbnB1dFwiKTtcblxuICAgICAgICBpZiAoaW5wdXRBcmVhKSB7XG4gICAgICAgICAgICBpbnB1dEFyZWEub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLnBsYWNlaG9sZGVyID0gJ+mmluasoeaQnOe0omluZ8K3wrfCtyc7XG4gICAgICAgICAgICAgICAgZ2V0U2VhcmNoRmlsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25jbGljayA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpbnB1dEFyZWEub25rZXlkb3duID0gZnVuY3Rpb24oKSB7IGlmIChldmVudC5rZXlDb2RlID09IDEzKSByZXR1cm4gZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJTZWFyY2goJHJlc3VsdENvbnRlbnQpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIHNlYXJjaCByZXN1bHRcbiAgICAgICAgICAgIHZhciBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWNsb3NlXCIpO1xuICAgICAgICAgICAgYnRuQ2xvc2Uub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEucGxhY2Vob2xkZXIgPSAn6K+36L6T5YWl5YWz6ZSu6K+NJztcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEuZm9jdXMoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciBzZWFyY2hGdW5jID0gZnVuY3Rpb24ocGF0aCwgc2VhcmNoX2lkLCBjb250ZW50X2lkKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB2YXIgQlROID0gXCI8ZGl2IGlkPSdsb2NhbC1zZWFyY2gtY2xvc2UnPua4heepuuaQnOe0ojwvZGl2PlwiXG4gICAgICAgICAgICB2YXIgJGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VhcmNoX2lkKTtcbiAgICAgICAgICAgIHZhciAkcmVzdWx0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRlbnRfaWQpO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHBhdGgsIHRydWUpO1xuICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3VtZSBpbnB1dFxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnBsYWNlaG9sZGVyID0gJ+i+k+WFpeWFs+mUruivjeS7peaQnOe0oic7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5mb2N1cygpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhtbCA9IHhoci5yZXNwb25zZVhNTDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvb3QgPSB4bWwuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IHJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJlbnRyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRpdGxlXCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY29udGVudFwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXJsXCIpWzBdLmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gJzx1bCBjbGFzcz1cXFwiYXJjaGl2ZVxcXCI+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXl3b3JkcyA9IHRoaXMudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHNcXC1dKy8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLnRyaW0oKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmnKzlnLDmkJzntKLkuLvku6PnoIFcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudF9pbmRleCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS50aXRsZSB8fCBkYXRhLnRpdGxlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50aXRsZSA9IFwiVW50aXRsZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdfZGF0YV90aXRsZSA9IGRhdGEudGl0bGUudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhX3RpdGxlID0gb3JpZ19kYXRhX3RpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdfZGF0YV9jb250ZW50ID0gZGF0YS5jb250ZW50LnRyaW0oKS5yZXBsYWNlKC88W14+XSs+L2csIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhX2NvbnRlbnQgPSBvcmlnX2RhdGFfY29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhX3VybCA9IGRhdGEudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleF90aXRsZSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleF9jb250ZW50ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpcnN0X29jY3VyID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25seSBtYXRjaCBhcnRpbGVzIHdpdGggbm90IGVtcHR5IGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFfY29udGVudCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleF90aXRsZSA9IGRhdGFfdGl0bGUuaW5kZXhPZihrZXl3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4X2NvbnRlbnQgPSBkYXRhX2NvbnRlbnQuaW5kZXhPZihrZXl3b3JkKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhfdGl0bGUgPCAwICYmIGluZGV4X2NvbnRlbnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhfY29udGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfY29udGVudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Rfb2NjdXIgPSBpbmRleF9jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50X2luZGV4LnB1c2goe2luZGV4X2NvbnRlbnQ6aW5kZXhfY29udGVudCwga2V5d29yZF9sZW46a2V5d29yZF9sZW59KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlsZXnpLrnu5PmnpxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiDlvoXlrozlloTvvIzlvoXlrozlloRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPGxpPjxhIGhyZWY9J1wiICtsb2NhdGlvbi5wcm90b2NvbCtcIi8vXCIrbG9jYXRpb24uaG9zdCtcIi9cIisgZGF0YV91cmwgKyBcIicgY2xhc3M9J2FyY2hpdmUtdGl0bGUnPlwiICsgb3JpZ19kYXRhX3RpdGxlICsgXCI8L2E+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdF9vY2N1ciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXQgb3V0IDEwMCBjaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBmaXJzdF9vY2N1ciAtIDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZCA9IGZpcnN0X29jY3VyICsgMzA7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IDQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbmQgPiBjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IGNvbnRlbnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hfY29udGVudCA9IGNvbnRlbnQuc3Vic3RyKHN0YXJ0LCAxMDApO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhpZ2hsaWdodCBhbGwga2V5d29yZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWdTID0gbmV3IFJlZ0V4cChrZXl3b3JkLCBcImdpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoX2NvbnRlbnQgPSBtYXRjaF9jb250ZW50LnJlcGxhY2UocmVnUywgXCI8ZW0gY2xhc3M9XFxcInNlYXJjaC1rZXl3b3JkXFxcIj5cIiArIGtleXdvcmQgKyBcIjwvZW0+XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPHAgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiICsgbWF0Y2hfY29udGVudCArIFwiLi4uPC9wPlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPC9saT5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjwvdWw+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoJzxsaT4nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBCVE4gKyBcIjxkaXYgY2xhc3M9J2xvY2FsLXNlYXJjaC1lbXB0eSc+5rKh5pyJ5om+5Yiw5L2g5omA6KaB5pCc57Si55qE5YaF5a654oCm4oCmPC9kaXY+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IEJUTiArIHN0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclNlYXJjaCgkcmVzdWx0Q29udGVudClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHZhciBnZXRTZWFyY2hGaWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcGF0aCA9IFwiL3NlYXJjaC54bWxcIjtcbiAgICAgICAgICAgIHNlYXJjaEZ1bmMocGF0aCwgJ2xvY2FsLXNlYXJjaC1pbnB1dCcsICdsb2NhbC1zZWFyY2gtcmVzdWx0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyDlhajlsYDmjInpkq7orr7nva5qc+aYr+WQpuWxleekuuaQnOe0ouahhlxuICAgICAgICB2YXIgZ2xvYmFsX2J1dHRvbl9zZWFyY2hfYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaF9idG4nKTtcbiAgICAgICAgZ2xvYmFsX2J1dHRvbl9zZWFyY2hfYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2FsLXNlYXJjaC1pbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHZhciBzZWFyY2hfY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2Nsb3NlJyk7XG4gICAgICAgIHNlYXJjaF9jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG59XG5cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBuZWVkU2hhcmVCdXR0b25cbiAgLSBWZXJzaW9uIDEuMC4wXG4gIC0gQ29weXJpZ2h0IDIwMTUgRHptaXRyeSBWYXNpbGV1c2tpXG5cdC0gTGljZW5zZWQgdW5kZXIgTUlUIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUKVxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGFyZSgpO1xuICAgIH0sXG4gICAgc2hhcmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gZmluZCBjbG9zZXN0XG4gICAgZnVuY3Rpb24gY2xvc2VzdChlbGVtLCBwYXJlbnQpIHtcbiAgICAgIGlmICh0eXBlb2YocGFyZW50KSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICB2YXIgbWF0Y2hlc1NlbGVjdG9yID0gZWxlbS5tYXRjaGVzIHx8IGVsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW0ubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW0ubXNNYXRjaGVzU2VsZWN0b3I7XG4gIFxuICAgICAgICAgICAgICBpZiAoISFtYXRjaGVzU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlc1NlbGVjdG9yLmJpbmQoZWxlbSkocGFyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgIGlmIChlbGVtID09IHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gc2hhcmUgYnV0dG9uIGNsYXNzXG4gICAgICB3aW5kb3cubmVlZFNoYXJlQnV0dG9uID0gZnVuY3Rpb24oZWxlbSwgb3B0aW9ucykge1xuICAgICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50IHJlZmVyZW5jZVxuICAgICAgICAgIHZhciByb290ID0gdGhpcztcbiAgICAgICAgICByb290LmVsZW0gPSBlbGVtIHx8ICduZWVkLXNoYXJlLWJ1dHRvbic7XG4gIFxuICAgICAgICAgIC8qIEhlbHBlcnNcbiAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgXG4gICAgICAvLyBnZXQgdGl0bGUgZnJvbSBodG1sXG4gICAgICByb290LmdldFRpdGxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgLy8gY2hlY2sgcXVlcnlTZWxlY3RvciBleGlzdGFuY2UgZm9yIG9sZCBicm93c2Vyc1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6dGl0bGVcIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOnRpdGxlXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb2N1bWVudC50aXRsZTtcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIC8vIGdldCBpbWFnZSBmcm9tIGh0bWxcbiAgICAgICAgcm9vdC5nZXRJbWFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgIC8vIGNoZWNrIHF1ZXJ5U2VsZWN0b3IgZXhpc3RhbmNlIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJvZzppbWFnZVwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIC8vIGdldCBkZXNjcmlwdGlvbiBmcm9tIGh0bWxcbiAgICAgICAgcm9vdC5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgIC8vIGNoZWNrIHF1ZXJ5U2VsZWN0b3IgZXhpc3RhbmNlIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkZXNjcmlwdGlvblwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpLm5hbWVkSXRlbSgnZGVzY3JpcHRpb24nKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBzaGFyZSB1cmxzIGZvciBhbGwgbmV0d29ya3NcbiAgICAgICAgcm9vdC5zaGFyZSA9IHtcbiAgICAgICAgICAgICd3ZWlibyc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vdi50LnNpbmEuY29tLmNuL3NoYXJlL3NoYXJlLnBocD90aXRsZT0nXG4gICAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICAgICsgXCImdXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICAgICsgXCImcGljPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnd2VjaGF0JzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgaW1nU3JjID0gJ2h0dHBzOi8vYXBpLnFyc2VydmVyLmNvbS92MS9jcmVhdGUtcXItY29kZS8/c2l6ZT0xNTB4MTUwJmRhdGE9JytlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgIHZhciBkcm9wZG93bkVsID0gZWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duJyk7XG4gICAgICAgICAgICAgIHZhciBpbWcgPSBkcm9wZG93bkVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKVswXTtcbiAgICAgICAgICAgICAgdmFyIGxvYWRlciA9IGRyb3Bkb3duRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmVlZC1zaGFyZS1sb2FkZXInKVswXTtcbiAgXG4gICAgICAgICAgICAgICAgaWYgKGltZykge1xuICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZihsb2FkZXIpIHtcbiAgICAgICAgICAgIGxvYWRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsb2FkZXIuY2xhc3NOYW1lID0gJ25lZWQtc2hhcmUtbG9hZGVyJztcbiAgICAgICAgICAgIGxvYWRlci5pbm5lclRleHQgPSAnbG9hZGluZy4uLic7XG4gICAgICAgICAgICBsb2FkZXIudGl0bGUgPSAnbG9hZGluZyBxcmNvZGUuLi4nO1xuICBcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpbWdTcmM7XG4gICAgICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnQ3JlYXRlIHFyY29kZSBmYWlsZWQhJztcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCduZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJyk7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChsb2FkZXIuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcm9wZG93bkVsLmFwcGVuZENoaWxkKGxvYWRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAnZG91YmFuJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwczovL3d3dy5kb3ViYW4uY29tL3NoYXJlL3NlcnZpY2U/bmFtZT0nXG4gICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgKyBcIiZocmVmPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICArIFwiJmltYWdlPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAncXF6b25lJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vc25zLnF6b25lLnFxLmNvbS9jZ2ktYmluL3F6c2hhcmUvY2dpX3F6c2hhcmVfb25la2V5P3RpdGxlPSdcbiAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICArIFwiJnVybD1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgKyBcIiZwaWNzPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpXG4gICAgICAgICAgICAgICsgXCImZGVzYz1cIisgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdyZW5yZW4nOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly93aWRnZXQucmVucmVuLmNvbS9kaWFsb2cvc2hhcmU/dGl0bGU9J1xuICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICsgXCImcmVzb3VyY2VVcmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICsgXCImcGljPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpXG4gICAgICAgICAgICAgICsgXCImZGVzY3JpcHRpb249XCIrIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgfSxcbiAgXG4gICAgICAgICAgICAnbWFpbHRvJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gJ21haWx0bzo/c3ViamVjdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSkgKyAnJmJvZHk9VGhvdWdodCB5b3UgbWlnaHQgZW5qb3kgcmVhZGluZyB0aGlzOiAnICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpICsgJyAtICcgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3R3aXR0ZXInIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSkgKyBcIiZ1cmw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncGludGVyZXN0JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3BpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9ib29rbWFya2xldC8/aXNfdmlkZW89ZmFsc2UnO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJm1lZGlhPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZkZXNjcmlwdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZmFjZWJvb2snIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmZhY2Vib29rLmNvbS9zaGFyZS5waHA/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZ29vZ2xlcGx1cycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwbHVzLmdvb2dsZS5jb20vc2hhcmU/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3JlZGRpdCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cucmVkZGl0LmNvbS9zdWJtaXQ/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdkZWxpY2lvdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnZGVsLmljaW8udXMvcG9zdD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJm5vdGVzPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICd0YXBpdHVyZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndGFwaXR1cmUuY29tL2Jvb2ttYXJrbGV0L2ltYWdlPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnaW1nX3NyYz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnBhZ2VfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnBhZ2VfdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAnc3R1bWJsZXVwb24nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdsaW5rZWRpbicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUnO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnVybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZzb3VyY2U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuc291cmNlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICdzbGFzaGRvdCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnc2xhc2hkb3Qub3JnL2Jvb2ttYXJrLnBsPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gJ3RlY2hub3JhdGknIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3RlY2hub3JhdGkuY29tL2ZhdmVzPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnYWRkPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgJ3Bvc3Rlcm91cycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwb3N0ZXJvdXMuY29tL3NoYXJlPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICdsaW5rdG89JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd0dW1ibHInIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LnR1bWJsci5jb20vc2hhcmU/dj0zJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAnZ29vZ2xlYm9va21hcmtzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZ29vZ2xlLmNvbS9ib29rbWFya3MvbWFyaz9vcD1lZGl0JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmYmttaz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmFubm90YXRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAnbmV3c3ZpbmUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5uZXdzdmluZS5jb20vX3Rvb2xzL3NlZWQmc2F2ZT8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ3U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmaD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vICdwaW5nZm0nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3BpbmcuZm0vcmVmLz8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2xpbms9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZib2R5PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgJ2V2ZXJub3RlJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5ldmVybm90ZS5jb20vY2xpcC5hY3Rpb24/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdmcmllbmRmZWVkJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5mcmllbmRmZWVkLmNvbS9zaGFyZT8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3Zrb250YWt0ZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd2a29udGFrdGUucnUvc2hhcmUucGhwPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgIHVybCArPSAnJmltYWdlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICB1cmwgKz0gJyZub3BhcnNlPXRydWUnO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ29kbm9rbGFzc25pa2knIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lm9kbm9rbGFzc25pa2kucnUvZGs/c3QuY21kPWFkZFNoYXJlJnN0LnM9MSc7XG4gICAgICAgICAgdXJsICs9ICcmc3QuY29tbWVudHM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgIHVybCArPSAnJnN0Ll9zdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAnbWFpbHJ1JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdjb25uZWN0Lm1haWwucnUvc2hhcmU/JztcbiAgICAgICAgLy8gICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAvLyAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy8gICB1cmwgKz0gJyZkZXNjcmlwdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vICAgdXJsICs9ICcmaW1hZ2V1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH1cbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIG9wZW4gc2hhcmUgbGluayBpbiBhIHBvcHVwXG4gICAgICAgIHJvb3QucG9wdXAgPSBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgdmFyIGxlZnQsIHRvcDsgXG4gIFxuICAgICAgICB2YXIgcG9wdXBXaWR0aCA9IDYwMCxcbiAgICAgICAgICAgIHBvcHVwSGVpZ2h0ID0gNTAwO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIGNhY3VsYXRlIGJyb3dzZXIgd2luZG93IHdpZHRoXG4gICAgICAgIC8vIGlmIHdpbmRvdyB3aWR0aCBpcyB0b28gbmFycm93LCB1c2Ugc2NyZWVuIHdpZHRoO1xuICAgICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA/IHdpbmRvdy5pbm5lcldpZHRoIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogc2NyZWVuLndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ID8gd2luZG93LmlubmVySGVpZ2h0IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgOiBzY3JlZW4uaGVpZ2h0O1xuICAgICAgICBpZiAod2lkdGggPCA2MDAgJiYgaGVpZ2h0IDwgNTAwKSB7XG4gICAgICAgICAgbGVmdCA9IChzY3JlZW4ud2lkdGggLyAyKSAtIChwb3B1cFdpZHRoIC8gMik7XG4gICAgICAgICAgdG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtIChwb3B1cEhlaWdodCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHNldCBsZWZ0IGFuZCB0b3AgcG9zaXRpb25cbiAgICAgICAgICAgICAgdmFyIGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlbkxlZnQgOiBzY3JlZW4ubGVmdCxcbiAgICAgICAgICAgIGR1YWxTY3JlZW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiBzY3JlZW4udG9wO1xuICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0b3AgYW5kIGxlZnQgcG9zaXRpb25cbiAgICAgICAgICBsZWZ0ID0gKCh3aWR0aCAvIDIpIC0gKHBvcHVwV2lkdGggLyAyKSkgKyBkdWFsU2NyZWVuTGVmdDtcbiAgICAgICAgICB0b3AgPSAoKGhlaWdodCAvIDIpIC0gKHBvcHVwSGVpZ2h0IC8gMikpICsgZHVhbFNjcmVlblRvcDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgdmFyIHNoYXJlV2luZG93ID0gd2luZG93Lm9wZW4odXJsLCd0YXJnZXRXaW5kb3cnLCd0b29sYmFyPW5vLGxvY2F0aW9uPW5vLHN0YXR1cz1ubyxtZW51YmFyPW5vLHNjcm9sbGJhcnM9eWVzLHJlc2l6YWJsZT15ZXMsd2lkdGg9JyArIHBvcHVwV2lkdGggKyAnLCBoZWlnaHQ9JyArIHBvcHVwSGVpZ2h0ICsgJywgdG9wPScgKyB0b3AgKyAnLCBsZWZ0PScgKyBsZWZ0KTtcbiAgICAgICAgICAgIC8vIFB1dHMgZm9jdXMgb24gdGhlIG5ld1dpbmRvd1xuICAgICAgICAgIGlmICh3aW5kb3cuZm9jdXMpIHtcbiAgICAgICAgICAgICAgc2hhcmVXaW5kb3cuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICAgIC8qIFNldCBvcHRpb25zXG4gICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIFxuICAgICAgICAgIC8vIGNyZWF0ZSBkZWZhdWx0IG9wdGlvbnNcbiAgICAgICAgICByb290Lm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGljb25TdHlsZTogJ2RlZmF1bHQnLCAvLyBkZWZhdWx0IG9yIGJveFxuICAgICAgICAgICAgICBib3hGb3JtOiAnaG9yaXpvbnRhbCcsIC8vIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b21DZW50ZXInLCAvLyB0b3AgLyBtaWRkbGUgLyBib3R0b20gKyBMZWZ0IC8gQ2VudGVyIC8gUmlnaHRcbiAgICAgICAgICAgICAgcHJvdG9jb2w6IFsnaHR0cCcsICdodHRwcyddLmluZGV4T2Yod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJzonKVswXSkgPT09IC0xID8gJ2h0dHBzOi8vJyA6ICcvLycsXG4gICAgICAgICAgICAgIG5ldHdvcmtzOiAnVHdpdHRlcixGYWNlYm9vayxSZWRkaXQsTGlua2VkaW4sVHVtYmxyLFBpbnRlcmVzdCxXZWlibyxXZWNoYXQsRG91YmFuLFFRWm9uZSxNYWlsdG8nLFxuICAgICAgICAgICAgICBpY29uczogWydmYSBmYS10d2l0dGVyJywnZmEgZmEtZmFjZWJvb2snLCdmYSBmYS1yZWRkaXQtYWxpZW4nLCdmYSBmYS1saW5rZWRpbicsJ2ZhIGZhLXR1bWJscicsJ2ZhIGZhLXBpbnRlcmVzdCcsJ2ZhIGZhLXdlaWJvJywnZmEgZmEtd2VpeGluJywnOScsJ2ZhIGZhLXFxJywnZmEgZmEtZW52ZWxvcGUtbyddXG4gICAgICAgICAgfTtcbiAgXG4gICAgICAvLyBpbnRlZ3JhdGUgY3VzdG9tIG9wdGlvbnNcbiAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICByb290Lm9wdGlvbnNbaV0gPSBvcHRpb25zW2ldO1xuICAgICAgfVxuICAgICAgLy8gY29udmVydCBuZXR3b3JrcyBzdHJpbmcgaW50byBhcnJheVxuICAgICAgcm9vdC5vcHRpb25zLm5ldHdvcmtzID0gcm9vdC5vcHRpb25zLm5ldHdvcmtzLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgXG4gICAgICBmdW5jdGlvbiBnZXRPcHRpb25zKGVsKSB7XG4gICAgICAgICAgLy8gaW50ZWdyYXRlIGRhdGEgYXR0cmlidXRlIG9wdGlvbnNcbiAgICAgICAgICB2YXIgcmV0ID0ge307XG4gICAgICAgICAgZm9yICh2YXIgaSBpbiByb290Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldFtpXSA9IHJvb3Qub3B0aW9uc1tpXTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIC8vIHRoZXNlIGF0dHJzIG11c3QgZ2V0IGR5bmFtaWNhbGx5LlxuICAgICAgICAgIHJldC51cmwgPSByb290Lm9wdGlvbnMudXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgIHJldC50aXRsZSA9IHJvb3Qub3B0aW9ucy50aXRsZSB8fCByb290LmdldFRpdGxlKCk7XG4gICAgICAgICAgcmV0LmltYWdlID0gcm9vdC5vcHRpb25zLmltYWdlIHx8IHJvb3QuZ2V0SW1hZ2UoKTtcbiAgICAgICAgICByZXQuZGVzY3JpcHRpb24gPSByb290Lm9wdGlvbnMuZGVzY3JpcHRpb24gfHwgcm9vdC5nZXREZXNjcmlwdGlvbigpO1xuICBcbiAgICAgICAgICBmb3IgKHZhciBvcHRpb24gaW4gZWwuZGF0YXNldCkge1xuICAgICAgICAgICAgICAvLyByZXBsYWNlIG9ubHkgJ3NoYXJlLScgcHJlZml4ZWQgZGF0YS1hdHRyaWJ1dGVzXG4gICAgICAgICAgICBpZiAob3B0aW9uLm1hdGNoKC9zaGFyZS8pKSB7XG4gICAgICAgICAgICAgIHZhciBuZXdfb3B0aW9uID0gb3B0aW9uLnJlcGxhY2UoL3NoYXJlLywgJycpO1xuICAgICAgICAgICAgICBpZiAoIW5ld19vcHRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuZXdfb3B0aW9uID0gbmV3X29wdGlvbi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5ld19vcHRpb24uc2xpY2UoMSk7XG4gICAgICAgICAgICAgIHZhciB2YWwgPSBlbC5kYXRhc2V0W29wdGlvbl07XG4gICAgICAgICAgICAgIGlmIChuZXdfb3B0aW9uID09PSAnbmV0d29ya3MnKSB7XG4gICAgICAgICAgICAgICAgICB2YWwgPSB2YWwudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld19vcHRpb24gPT09ICd1cmwnICYmIHZhbCAmJiB2YWxbMF0gPT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgLy8gZml4IHJlbGF0aXZlIHVybCBwcm9ibGVtLlxuICAgICAgICAgICAgICAgICAgdmFsID0gbG9jYXRpb24ub3JpZ2luICsgdmFsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldFtuZXdfb3B0aW9uXSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgXG4gICAgICBmdW5jdGlvbiBjcmVhdGVEcm9wZG93bihlbCkge1xuICAgICAgICAgIC8vIGNyZWF0ZSBkcm9wZG93blxuICAgICAgICAgIHZhciBkcm9wZG93bkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lID0gJ25lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duJztcbiAgICAgICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gIFxuICAgICAgICAgIC8vIHNldCBkcm9wZG93biByb3cgbGVuZ3RoXG4gICAgICAgICAgaWYgKG15b3B0aW9ucy5pY29uU3R5bGUgPT0gJ2JveCcgJiYgbXlvcHRpb25zLmJveEZvcm0gPT0gJ2hvcml6b250YWwnKVxuICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJveC1ob3Jpem9udGFsJztcbiAgICAgICAgICBlbHNlIGlmIChteW9wdGlvbnMuaWNvblN0eWxlID09ICdib3gnICYmIG15b3B0aW9ucy5ib3hGb3JtID09ICd2ZXJ0aWNhbCcpXG4gICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm94LXZlcnRpY2FsJztcbiAgXG4gICAgICAgICAgLy8gc2V0IGRyb3Bkb3duIHBvc2l0aW9uIFxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAobXlvcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tdG9wLWxlZnQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1yaWdodCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAndG9wQ2VudGVyJzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1jZW50ZXInO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC0gZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ21pZGRsZUxlZnQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tbWlkZGxlLWxlZnQnO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luVG9wID0gLSBkcm9wZG93bkVsLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ21pZGRsZVJpZ2h0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLW1pZGRsZS1yaWdodCc7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5Ub3AgPSAtIGRyb3Bkb3duRWwub2Zmc2V0SGVpZ2h0IC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tbGVmdCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tUmlnaHQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLXJpZ2h0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdib3R0b21DZW50ZXInOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWNlbnRlcic7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSBkcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1jZW50ZXInO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC0gZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LDEpO1xuICBcbiAgXG4gICAgICAgICAgLy8gZmlsbCBmcm9wZG93biB3aXRoIGJ1dHRvbnNcbiAgICAgICAgICB2YXIgaWNvbkNsYXNzID0gbXlvcHRpb25zLmljb25TdHlsZSA9PSAnZGVmYXVsdCcgPyAnbmVlZC1zaGFyZS1idXR0b25fbGluayBuZWVkLXNoYXJlLWJ1dHRvbl8nIDogJ25lZWQtc2hhcmUtYnV0dG9uX2xpbmstJyArIG15b3B0aW9ucy5pY29uU3R5bGUgKyAnIG5lZWQtc2hhcmUtYnV0dG9uX2xpbmsgbmVlZC1zaGFyZS1idXR0b25fJztcbiAgICAgICAgICBsZXQgZmxhZyA9IDA7XG4gICAgICAgICAgZm9yICh2YXIgbmV0d29yayBpbiBteW9wdGlvbnMubmV0d29ya3MpIHtcbiAgICAgICAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICBuZXR3b3JrID0gbXlvcHRpb25zLm5ldHdvcmtzW25ldHdvcmtdO1xuICAgICAgICAgICAgICBsaW5rLmNsYXNzTmFtZSA9IGljb25DbGFzcyArIG5ldHdvcms7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG15b3B0aW9ucy5pY29ucy5sZW5ndGgpO1xuICAgICAgICAgICAgICBsaW5rLmNsYXNzTmFtZSArPSAnICcrbXlvcHRpb25zLmljb25zW2ZsYWddO1xuICAgICAgICAgICAgICBsaW5rLmRhdGFzZXQubmV0d29yayA9IG5ldHdvcms7XG4gICAgICAgICAgICAgIGxpbmsudGl0bGUgPSBuZXR3b3JrO1xuICAgICAgICAgICAgICBkcm9wZG93bkVsLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAgICAgICBmbGFnKys7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBkcm9wZG93bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgaWYgKGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCAnLm5lZWQtc2hhcmUtYnV0dG9uX2xpbmsnKSkge1xuICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgXG4gICAgICAgICAgICAgICAgIHJvb3Quc2hhcmVbZXZlbnQudGFyZ2V0LmRhdGFzZXQubmV0d29ya10oZWwpO1xuICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICBcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkcm9wZG93bkVsKTtcbiAgICAgIH1cbiAgXG4gICAgICB2YXIgdGFyZ2V0RWwgPSB0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pIDogZWxlbTtcbiAgICAgICBpZiAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwuY2xhc3NMaXN0LmNvbnRhaW5zKCduZWVkLXNoYXJlLXBhbmVsJykpIHtcbiAgICAgICAgY3JlYXRlRHJvcGRvd24odGFyZ2V0RWwpO1xuICAgICAgICAvLyB0YXJnZXRFbC5jbGFzc0xpc3QuYWRkKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgICAgIH0gZWxzZSBcbiAgICAgICAgLy8gY2xvc2Ugb24gY2xpY2sgb3V0c2lkZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgdmFyIG9wZW5lZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICBcbiAgICAgICAgICBpZiAoIWNsb3Nlc3QoZXZlbnQudGFyZ2V0LCAnLm5lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAob3BlbmVkRWwpIHtcbiAgICAgICAgICAgICAgICBvcGVuZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgXG4gICAgICAgICAgICAgICAgLy8gaGlkZSB3ZWNoYXQgY29kZSBpbWFnZSB3aGVuIGNsb3NlIHRoZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICBpZiAob3BlbmVkRWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuZWRFbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gY2xvc2VzdChldmVudC50YXJnZXQsIHJvb3QuZWxlbSk7XG4gICAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRHJvcGRvd24oZWwpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIFxuICAgIH07XG4gIFxuICAgIG5ldyBuZWVkU2hhcmVCdXR0b24oJy5uZWVkLXNoYXJlLWJ1dHRvbicpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnRvY19idG4oKTtcbiAgICB9LFxuICAgIHRvY19idG46IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdG9jX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2NfY29udGFpbmVyJyk7XG4gICAgICAgIGxldCB0b2NfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvY19idG4nKTtcbiAgICAgICAgJCh0b2NfYnRuKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKXtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cblxuXG5cbiIsIi8qXG4gKiBAQXV0aG9yOiB3enRsaW5rMTAxM1xuICogQERhdGU6IDIwMjItMDctMDcgMTg6NDg6MThcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMDctMTAgMDA6MjY6MTFcbiAqIEBEZXNjcmlwdGlvbjpcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy53ZWJfaW5mb19ydW50aW1lKClcbiAgfSxcbiAgLy8gVE9ETzogISEh5oiR552A5a6e5LiN55+l6YGT6L+Z5piv5Liq5LuA5LmI56eYXG4gIHdlYl9pbmZvX3J1bnRpbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYmluZm9fcnVudGltZV9jb3VudF8xJykpIHtcbiAgICAvLyAgIGxldCBCaXJ0aERheSA9IG5ldyBEYXRlKG5ldyBEYXRlKCcyMDIwLzAxLzA0JykpXG4gICAgLy8gICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgLy8gICBsZXQgdGltZW9sZCA9IHRvZGF5LmdldFRpbWUoKSAtIEJpcnRoRGF5LmdldFRpbWUoKVxuICAgIC8vICAgbGV0IGRheXNvbGQgPSBNYXRoLmZsb29yKHRpbWVvbGQgLyAoMjQgKiA2MCAqIDYwICogMTAwMCkpXG4gICAgLy8gICBsZXQgb2JqID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYmluZm9fcnVudGltZV9jb3VudF8xJylcbiAgICAvLyAgIG9iai5pbm5lckhUTUwgPSBkYXlzb2xkICsgJyDlpKknXG4gICAgLy8gICBjb25zb2xlLmxvZyhvYmopXG4gICAgLy8gfVxuICB9LFxufVxuIl19
