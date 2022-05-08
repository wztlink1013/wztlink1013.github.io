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

// 初始化highlight脚本
hljs.initHighlightingOnLoad(); // 域名重定向

if (window.location.hostname === 'wztlink1013.com') {
  location.replace(location.href.replace('wztlink1013.com', 'www.wztlink1013.com'));
} // TODO: 搜索功能
// 相当于获得了其api


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
    var article_img = document.querySelectorAll(".artcle_list_item_img");

    for (var i = 0; i < article_img.length; i++) {
      var wid = article_img[i].firstElementChild.width + 5;
      var hei = article_img[i].firstElementChild.height + 7;
      article_img[i].style.maxWidth = wid + "px";
      article_img[i].style.maxHeight = hei + "px";
    }
  }, 1000); // // 百度统计代码
  // var _hmt = _hmt || [];
  // (function() {
  // var hm = document.createElement("script");
  // var analytics_bd = '9587c5f9510302bc27a2c56c7fd4845e';
  // hm.src = ['ht', 't', 'ps', ':/', '/h', 'm', '.', 'ba', 'i', 'd', 'u.c', 'o', 'm/', 'h', 'm', '.j', 's?', analytics_bd].join('');
  // var s = document.getElementsByTagName("script")[0];
  // s.parentNode.insertBefore(hm, s);
  // })();
});

},{"./common/layout.js":1,"./part/categories.js":3,"./part/comments.js":4,"./part/go_top.js":5,"./part/search.js":6,"./part/sharebutton.js":7,"./part/toc.js":8,"./part/web_info.js":9}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  init: function init() {
    this.open_close_forder_plus();
    this.hit_open_close_forder();
    this.readmore_blog_essay();
  },
  // 点击icon展开/关闭树分类
  hit_open_close_forder: function hit_open_close_forder() {
    var cate_cell = document.querySelectorAll('.cate_cell');

    var _loop = function _loop(i) {
      if (cate_cell[i].children[1].style.display !== 'none') {
        var item = $(cate_cell[i].children[1]);
        item.click(function () {
          if (cate_cell[i].children[2].style.display === "none") {
            cate_cell[i].children[2].style.display = "block";
          } else if (cate_cell[i].children[2].style.display === "inline-block") {
            cate_cell[i].children[2].style.display = "none";
          } else {
            cate_cell[i].children[2].style.display = "none";
          }
        }); // cate_cell[i].children[2].style.display = "none"
      }
    };

    for (var i = 0; i < cate_cell.length; i++) {
      _loop(i);
    }
  },
  // 决定哪些需要显示icon
  open_close_forder_plus: function open_close_forder_plus() {
    var cate_cell = document.querySelectorAll('.cate_cell');

    for (var i = 0; i < cate_cell.length; i++) {
      // 查看第三个子节点是否有元素
      if (cate_cell[i].children[2].children.length !== 0) {
        // 显示旁边的icon
        continue;
      } else {
        // 不显示旁边的icon
        cate_cell[i].children[1].style.display = 'none';
      }
    }
  },
  // 查看更多页面，优化博客/随笔显示
  readmore_blog_essay: function readmore_blog_essay() {
    if (location.pathname === "/archives/") {
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
      envId: 'website-wikoo-4g46k8do98867542',
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
  // 切换评论
  switch_comment: function switch_comment() {
    var switch_btn = document.querySelector('#switch_btn');
    var utterances_comment = document.querySelector('#utterances_comment');
    var twikoo_comment = document.querySelector('#twikoo_comment');
    switch_btn.addEventListener('click', function () {
      switch_btn.classList.toggle("move");
      utterances_comment.classList.toggle('content-in');
      twikoo_comment.classList.toggle('content-in');

      if (utterances_comment.style.display === 'none') {
        utterances_comment.style.display = 'block';
        twikoo_comment.style.display = 'none';

        if (!utterances_comment.children[0]) {
          // Beaudar 评论系统
          var script_utterances = document.createElement("script");
          script_utterances.src = "https://beaudar.lipk.org/client.js";
          script_utterances.setAttribute("repo", "wztlink1013/comment");
          script_utterances.setAttribute("issue-term", "title");
          script_utterances.setAttribute("label", "💬comment");
          script_utterances.setAttribute("theme", "github-light");
          script_utterances.setAttribute("crossorigin", "anonymous");
          script_utterances.setAttribute("branch", "master");
          script_utterances.setAttribute("loading", "true");
          script_utterances.setAttribute("comment-order", "desc");
          script_utterances.setAttribute("input-position", "top");
          utterances_comment.appendChild(script_utterances);
        }
      } else {
        // Twikoo 评论系统
        utterances_comment.style.display = 'none';
        twikoo_comment.style.display = 'block';
      }
    });
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
var _default = {
  init: function init() {
    this.web_info_runtime();
  },
  // TODO: !!!我着实不知道这是个什么秘
  web_info_runtime: function web_info_runtime() {
    var BirthDay = new Date(new Date('2020/01/04'));
    var today = new Date();
    var timeold = today.getTime() - BirthDay.getTime();
    var daysold = Math.floor(timeold / (24 * 60 * 60 * 1000)); // document.querySelector("#webinfo_runtime_count_1").innerText = daysold + ' 天';
    // console.log(daysold);
    // console.log(document.querySelector("#webinfo_runtime_count_1"));
  }
};
exports["default"] = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY2F0ZWdvcmllcy5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvc2VhcmNoLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9zaGFyZWJ1dHRvbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvdG9jLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC93ZWJfaW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFsQjtBQUNBLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxjQUFELENBQW5CLEMsQ0FFQTs7QUFDQSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsVUFBRCxDQUFmO0FBQ0EsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFdBQUQsQ0FBaEI7QUFDQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQjtBQUNBLElBQUksU0FBUyxHQUFHLENB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RyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQU8sSUFBSSxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsSUFBbkIsQ0FBbEIsQ0FBZCxDQUpzQixDQUt0QjtJQUNBO0lBQ0E7RUFDUDtBQWJVLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiAgXG4gICAgVE9ETzogXG4gICAgICAgIOiDveWcqOagueebruW9leiuvue9rum7mOiupOeKtuaAgeaYr+WHoOagj+eahFxuICAgICAgICDog73lpJ/orqnkvb/nlKjogIXlj5bmtojov5nnp43igJzorrDlv4bigJ1cbioqL1xuXG5cbi8vIFBD77yaaGVhZGVy5LiK55qE5bem5Y+z5oyJ6ZKu5Yy65Z+fXG5sZXQgYXJyb3dfbGVmdCA9ICQoJyNhcnJvd19sZWZ0Jyk7XG5sZXQgYXJyb3dfcmlnaHQgPSAkKCcjYXJyb3dfcmlnaHQnKTtcblxuLy8g5biD5bGA77ya54mI5b+D44CB5bem5Lit5Y+z5o6S54mIXG5sZXQgY3RfbGVmdCA9ICQoJy5jdF9sZWZ0Jyk7XG5sZXQgY3RfcmlnaHQgPSAkKCcuY3RfcmlnaHQnKTtcbmxldCBjdF9jZW50ZXIgPSAkKCcuY3RfY2VudGVyJyk7XG5sZXQgY29udGFpbmVyID0gJCgnLmNvbnRhaW5lcicpO1xuXG4vLyBQQy9hcHDvvJrliIfmjaJoZWFkZXJcbmxldCBoZWFkZXIgPSAkKCcuaGVhZGVyJyk7XG5sZXQgaGVhZGVyX2FwcCA9ICQoJy5oZWFkZXJfYXBwJyk7XG5cbi8vIGFwcO+8mmhlYWRlcuS4iueahOW3puWPs+aMiemSruWMuuWfn1xubGV0IGJ0bl9hcHBfc2lkZXIgPSAkKCcjYnRuX2FwcF9zaWRlcicpO1xubGV0IGJ0bl9hcHBfcmlnaHQgPSAkKCcjYnRuX2FwcF9yaWdodCcpO1xuXG4vLyBhcHDvvJrngrnlh7toZWFkZXJfYXBw5pe25YCZ5by55Ye65p2l55qE5oq95bGJXG5sZXQgYXBwX3NpZGVfZ2xhc3MgPSAkKCcjYXBwX3NpZGVfZ2xhc3MnKTtcbmxldCBhcHBfc2lkZV9jb250ZW50ID0gJCgnI2FwcF9zaWRlX2NvbnRlbnQnKTtcblxuLy8gMS7lt6bkuK3phY3nva5cbmxldCBvbmVfY29udGFpbmVyID0gJzgwJScgO1xubGV0IG9uZV9jdF9jZW50ZXJfd2lkdGggPSAnNzUlJztcbmxldCBvbmVfY3RfbGVmdF93aWR0aCA9ICcyNSUnO1xuLy8gMi4g5Lit5Y+z6YWN572uXG5sZXQgdHdvX2NvbnRhaW5lciA9ICc4MCUnIDtcbmxldCB0d29fY3RfY2VudGVyX3dpZHRoID0gJzc1JSc7XG5sZXQgdHdvX2N0X3JpZ2h0X3dpZHRoID0gJzI1JSc7XG4vLyAzLiDlt6bkuK3lj7PphY3nva5cbmxldCB0aHJlZV9jb250YWluZXIgPSAnOTUlJyA7XG5sZXQgdGhyZWVfY3RfY2VudGVyX3dpZHRoID0gJzYwJSc7XG5sZXQgdGhyZWVfY3RfcmlnaHRfd2lkdGggPSAnMjAlJztcbmxldCB0aHJlZV9jdF9sZWZ0X3dpZHRoID0gJzIwJSc7XG4vLyA0LiDkuK3phY3nva5cbmxldCBmb3VyX2NvbnRhaW5lciA9ICc3NSUnIDtcbmxldCBmb3VyX2N0X2NlbnRlcl93aWR0aCA9ICcxMDAlJztcbi8vIOiuvuWkh+Wwj+S6jjU2MHB455qE5Lit6YWN572uXG5sZXQgZGV2aWNlX3NtYWxsX2NvbnRhaW5lciA9IFwiOTglXCI7XG5sZXQgZGV2aWNlX3NtYWxsX2NlbnRlciA9IFwiMTAwJVwiO1xuLy8g6K6+5aSH5bCP5LqONzgwcHjnmoTkuK3phY3nva5cbmxldCBkZXZpY2VfY2VudGVyX2NvbnRhaW5lciA9IFwiOTYlXCI7XG5sZXQgZGV2aWNlX2NlbnRlcl9jZW50ZXIgPSBcIjEwMCVcIjtcblxuXG4vLyDliKTmlq1wY+auteW3puWPs+S4iuinkueahOeureWktOivpeaYvuekuuWTquS4qlxuZnVuY3Rpb24gbGVmdF9yaWdodF9hcnJvdyAoKSB7XG4gICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgfVxuICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBsZWZ0X2NlbnRlcl9yaWdodCAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IHRocmVlX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgY3RfcmlnaHQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9yaWdodF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdMUicpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW4g+WxgO+8muW3puS4reWPs1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ0xSJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbGVmdF9jZW50ZXIgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogb25lX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogb25lX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKHtcIndpZHRoXCI6IG9uZV9jdF9sZWZ0X3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW4g+WxgO+8muW3puS4rVwiKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gICAgfVxufVxuZnVuY3Rpb24gY2VudGVyX3JpZ2h0ICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IHR3b19jb250YWluZXJ9KTtcbiAgICBjdF9yaWdodC5jc3Moe1wid2lkdGhcIjogdHdvX2N0X3JpZ2h0X3dpZHRofSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0d29fY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdSJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5biD5bGA77ya5Lit5Y+zXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnUicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNlbnRlciAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiBmb3VyX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogZm91cl9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBsZWZ0X3JpZ2h0X2Fycm93ICgpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXlvdXQnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdDJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5biD5bGA77ya5LitXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnQycpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldmljZV9zbWFsbCAoKSB7XG4gICAgLy8g5pyA5bCP5bC65a+477ya5pyA5aSnNTYwcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjU2MHB45bC65a+4XCIpO1xuXG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAvLyDorr7nva7luIPlsYBcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9zbWFsbF9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9zbWFsbF9jZW50ZXJ9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcblxufVxuZnVuY3Rpb24gZGV2aWNlX2NlbnRlciAoKSB7XG4gICAgLy8g5Lit562J5bC65a+477ya5pyA5aSnOTgwcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjk4MHB45bC65a+4XCIpO1xuXG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAvLyDorr7nva7luIPlsYBcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9jZW50ZXJfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBkZXZpY2VfY2VudGVyX2NlbnRlcn0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuXG59XG5mdW5jdGlvbiBkZXZpY2VfbGFyZ2VzdCAoKSB7XG4gICAgLy8g5pyA5aSn5bC65a+477ya5pyA5aSnMTI2MXB4XG4gICAgY29uc29sZS5sb2coXCLlsI/kuo4xMjYxcHjlsLrlr7hcIik7XG5cbiAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG4gICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIGhlYWRlcl9hcHAuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcblxuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGN0X3JpZ2h0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfcmlnaHRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbn1cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYnRuX3BjX3N3aXRjaCgpO1xuICAgICAgICB0aGlzLmJ0bl9hcHBfc3dpdGNoKCk7XG4gICAgICAgIHRoaXMuYnJvd3Nlcl9yZW1lbWJlcigpO1xuICAgICAgICB0aGlzLmRldmljZV9zd2l0Y2goKTsgLy8g6L+Z5Liq5pS+5Yiw5pyA5ZCO6Ieq6LCD55SoIeWboOS4uuS4jeeuoeacrOWcsOWtmOWCqOaYr+S7gOS5iO+8jOacgOe7iOi/mOaYr+imgeagueaNruiuvuWkh+ebkeWQrOS4uuS4u1xuICAgIH0sXG4gICAgLyogUEPvvJrljZUv5Y+ML+S4ieagj+W4g+WxgOWIh+aNouaMiemSrueCueWHu+S6i+S7tiAqL1xuICAgIGJ0bl9wY19zd2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICBhcnJvd19sZWZ0LmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAvLyDovazmjaLliIfmjaLkuYvlkI7nmoTnrq3lpLTmjInpkq5cbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwnYmxvY2snKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy/lt6bkuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+W3puS4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy/kuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/kuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGFycm93X3JpZ2h0LmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDovazmjaLliIfmjaLkuYvlkI7nmoTnrq3lpLTmjInpkq5cbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwnYmxvY2snKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvL+S4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+W3puS4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvLyDkuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8g5bem5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qIOenu+WKqOerr+W3puWPs+S4iuinkueahOaMiemSriAqL1xuICAgIGJ0bl9hcHBfc3dpdGNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g54K55Ye75bem5oyJ6ZKuXG4gICAgICAgIGJ0bl9hcHBfc2lkZXIuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFwcF9zaWRlX2dsYXNzLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgICAgICAgICAgYXBwX3NpZGVfY29udGVudC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOeCueWHu+avm+eOu+eSg+eJh1xuICAgICAgICBhcHBfc2lkZV9nbGFzcy5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgYXBwX3NpZGVfZ2xhc3MuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICAgICAgICAgIGFwcF9zaWRlX2NvbnRlbnQuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOeCueWHu+WPs+aMiemSrlxuICAgICAgICBidG5fYXBwX3JpZ2h0LmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhbGVydChcIuacrOe9keermei/mOWcqOW8gOWPkeS4re+8jOivuOWkmuWKn+iDvei/mOacquWujOWWhO+8jOaVrOivt+acn+W+hX5cIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacrOe9keermei/mOWcqOW8gOWPkeS4re+8jOivuOWkmuWKn+iDvei/mOacquWujOWWhO+8jOaVrOivt+acn+W+hX5cIik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyog5rWP6KeI5Zmo6K6w5L2P5biD5bGAICovXG4gICAgYnJvd3Nlcl9yZW1lbWJlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgYl9sZWZ0ID0gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKTtcbiAgICAgICAgbGV0IGJfcmlnaHQgPSAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKTtcbiAgICAgICAgbGV0IGJfbGF5b3V0O1xuICAgIFxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgICAgICAvLyDmtY/op4jlmajmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgICAgICAgIGxldCBsYXlvdXRfY2hhbmdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnIlsYXlvdXTluIPlsYDnvJPlrZhcIik7ICAgIFxuICAgICAgICAgICAgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiTFJcIil7XG4gICAgICAgICAgICAgICAgLy8g5bem5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihsYXlvdXRfY2hhbmdlID09PSBcIkxcIikge1xuICAgICAgICAgICAgICAgIC8vIOW3puS4reW4g+WxgFxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiUlwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiQ1wiKSB7XG4gICAgICAgICAgICAgICAgLy8g5Lit5biD5bGAXG4gICAgICAgICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWFtuS7luiOq+WQjeWFtuWmmeeahOaDheWGtVxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmtY/op4jlmajmsqHmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rKh5pyJbGF5b3V05biD5bGA57yT5a2YXCIpO1xuICAgICAgICAgICAgaWYgKChiX2xlZnQgPT09IFwiYmxvY2tcIikgJiYgKGJfcmlnaHQgPT09IFwibm9uZVwiKSkgeyAvLyDlt6bkuK3luIPlsYBcbiAgICAgICAgICAgICAgICBiX2xheW91dCA9IFwiTFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoYl9sZWZ0ID09PSBcIm5vbmVcIikgJiYgKGJfcmlnaHQgPT09IFwiYmxvY2tcIikpIHsgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIlJcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGJfbGVmdCA9PT0gXCJibG9ja1wiKSAmJiAoYl9yaWdodCA9PT0gXCJibG9ja1wiKSkgeyAvL+W3puS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJMUlwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJMUlwiO1xuICAgICAgICAgICAgICAgIC8vIOW3puS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgYl9sYXlvdXQpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSxcbiAgICAvKiDlqpLkvZPmn6Xor6LluIPlsYAgKi9cbiAgICBkZXZpY2Vfc3dpdGNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g5Yib5bu65p+l6K+i5YiX6KGoXG4gICAgICAgIGxldCBkZXZpY2Vfd2lkdGggPSBbXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNTYwcHgpJyksXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTgwcHgpJyksXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTI2MXB4KScpXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8g5a6a5LmJ5Zue6LCD5Ye95pWwXG4gICAgICAgIGZ1bmN0aW9uIG1lZGlhTWF0Y2hzICgpIHtcbiAgICAgICAgICAgIGlmIChkZXZpY2Vfd2lkdGhbMF0ubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGRldmljZV9zbWFsbCAoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX3dpZHRoWzFdLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBkZXZpY2VfY2VudGVyICgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2Vfd2lkdGhbMl0ubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGRldmljZV9sYXJnZXN0ICgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWkp+S6juiuvuWumuacgOWkp+WwuuWvuOaDheWGtVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlhYjov5DooYzkuIDmrKHlm57osIPlh73mlbBcbiAgICAgICAgbWVkaWFNYXRjaHMoKTtcbiAgICAgICAgLy8g5Li65p+l6K+i5YiX6KGo5rOo5YaM55uR5ZCs5Zmo77yM5ZCM5pe25bCG5Zue6LCD5Ye95pWw5Lyg57uZ55uR5ZCs5ZmoXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGV2aWNlX3dpZHRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZXZpY2Vfd2lkdGhbaV0uYWRkTGlzdGVuZXIobWVkaWFNYXRjaHMpO1xuICAgICAgICB9XG4gICAgfSxcbn1cblxuXG4iLCJpbXBvcnQgbGF5b3V0X29iamVjdCBmcm9tICcuL2NvbW1vbi9sYXlvdXQuanMnO1xuaW1wb3J0IHRvY19vYmplY3QgZnJvbSAnLi9wYXJ0L3RvYy5qcyc7XG5pbXBvcnQgY29tbWVudHNfb2JqZWN0IGZyb20gJy4vcGFydC9jb21tZW50cy5qcyc7XG5pbXBvcnQge2dvX3RvcF9vYmplY3QsZ2V0U2Nyb2xsfSBmcm9tICcuL3BhcnQvZ29fdG9wLmpzJztcbmltcG9ydCB3ZWJfaW5mb19vYmplY3QgZnJvbSAnLi9wYXJ0L3dlYl9pbmZvLmpzJztcbmltcG9ydCBzZWFyY2hfb2JqZWN0IGZyb20gJy4vcGFydC9zZWFyY2guanMnO1xuaW1wb3J0IHNoYXJlX29iamVjdCBmcm9tICcuL3BhcnQvc2hhcmVidXR0b24uanMnO1xuaW1wb3J0IGNhdGVnb3JpZXNfb2JqZWN0IGZyb20gJy4vcGFydC9jYXRlZ29yaWVzLmpzJztcbi8vIOWIneWni+WMlmhpZ2hsaWdodOiEmuacrFxuaGxqcy5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkKCk7XG5cbi8vIOWfn+WQjemHjeWumuWQkVxuaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ3d6dGxpbmsxMDEzLmNvbScpIHtcbiAgICBsb2NhdGlvbi5yZXBsYWNlKGxvY2F0aW9uLmhyZWYucmVwbGFjZSgnd3p0bGluazEwMTMuY29tJywgJ3d3dy53enRsaW5rMTAxMy5jb20nKSk7XG59XG5cbi8vIFRPRE86IOaQnOe0ouWKn+iDvVxuLy8g55u45b2T5LqO6I635b6X5LqG5YW2YXBpXG5jb25zdCBhbGdvbGlhQ29uZmlnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cImFsZ29saWE6c2VhcmNoXCJdJykuZGF0YXNldDtcbmNvbnN0IGNsaWVudCA9IGFsZ29saWFzZWFyY2goYWxnb2xpYUNvbmZpZy5hcHBsaWNhdGlvbklkLCBhbGdvbGlhQ29uZmlnLmFwaUtleSk7XG5jb25zdCBpbmRleCA9IGNsaWVudC5pbml0SW5kZXgoYWxnb2xpYUNvbmZpZy5pbmRleE5hbWUpO1xuXG5jb25zb2xlLmxvZyhhbGdvbGlhQ29uZmlnKTtcbmNvbnNvbGUubG9nKGNsaWVudCk7XG5jb25zb2xlLmxvZyhpbmRleCk7XG5cblxuLy8g5YWl5Y+j5Ye95pWw77yM5Lya5Zyo6aG16Z2i5Yqg6L295a6M5q+V5omn6KGMXG4kKGZ1bmN0aW9uKCl7XG4gICAgLy8g5Yid5aeL5YyW55uu5b2V6ISa5pys5Ye95pWwXG4gICAgdG9jX29iamVjdC5pbml0KCk7XG4gICAgLy8g5Yid5aeL5YyW6K+E6K665qih5Z2X5LiL5omA5pyJ5Ye95pWwXG4gICAgY29tbWVudHNfb2JqZWN0LmluaXQoKTtcbiAgICAvLyDliJ3lp4vljJblm57liLDpobbpg6hcbiAgICBnb190b3Bfb2JqZWN0LmluaXQoKTtcbiAgICAvLyDluIPlsYDliJ3lp4vljJZcbiAgICBsYXlvdXRfb2JqZWN0LmluaXQoKTtcbiAgICBzZWFyY2hfb2JqZWN0LmluaXQoKTtcbiAgICAvLyDlhaXlj6Plh73mlbDliJ3lp4vljJbnvZHnq5nov5DooYzml7bpl7RcbiAgICB3ZWJfaW5mb19vYmplY3QuaW5pdCgpO1xuICAgIC8vIOWIhuS6q+aMiemSrueahOWIneWni+WMllxuICAgIHNoYXJlX29iamVjdC5pbml0KCk7XG4gICAgLy8g55uu5b2V5Ye95pWw5Yid5aeL5YyWXG4gICAgY2F0ZWdvcmllc19vYmplY3QuaW5pdCgpO1xuICAgIC8vIOWktOWbvuS8mOWMluS7o+eggVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhcnRpY2xlX2ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXJ0Y2xlX2xpc3RfaXRlbV9pbWdcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwO2k8YXJ0aWNsZV9pbWcubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgbGV0IHdpZCA9IGFydGljbGVfaW1nW2ldLmZpcnN0RWxlbWVudENoaWxkLndpZHRoICsgNTtcbiAgICAgICAgICAgIGxldCBoZWkgPSBhcnRpY2xlX2ltZ1tpXS5maXJzdEVsZW1lbnRDaGlsZC5oZWlnaHQgKyA3O1xuICAgICAgICAgICAgYXJ0aWNsZV9pbWdbaV0uc3R5bGUubWF4V2lkdGggPSB3aWQgKyBcInB4XCI7IFxuICAgICAgICAgICAgYXJ0aWNsZV9pbWdbaV0uc3R5bGUubWF4SGVpZ2h0ID0gaGVpICsgXCJweFwiOyBcbiAgICAgICAgfVxuICAgIH0sIDEwMDApO1xuICAgIC8vIC8vIOeZvuW6pue7n+iuoeS7o+eggVxuICAgIC8vIHZhciBfaG10ID0gX2htdCB8fCBbXTtcbiAgICAvLyAoZnVuY3Rpb24oKSB7XG4gICAgLy8gdmFyIGhtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAvLyB2YXIgYW5hbHl0aWNzX2JkID0gJzk1ODdjNWY5NTEwMzAyYmMyN2EyYzU2YzdmZDQ4NDVlJztcbiAgICAvLyBobS5zcmMgPSBbJ2h0JywgJ3QnLCAncHMnLCAnOi8nLCAnL2gnLCAnbScsICcuJywgJ2JhJywgJ2knLCAnZCcsICd1LmMnLCAnbycsICdtLycsICdoJywgJ20nLCAnLmonLCAncz8nLCBhbmFseXRpY3NfYmRdLmpvaW4oJycpO1xuICAgIC8vIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG4gICAgLy8gcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShobSwgcyk7XG4gICAgLy8gfSkoKTtcbn0pXG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5vcGVuX2Nsb3NlX2ZvcmRlcl9wbHVzKCk7XG4gICAgICAgIHRoaXMuaGl0X29wZW5fY2xvc2VfZm9yZGVyKCk7XG4gICAgICAgIHRoaXMucmVhZG1vcmVfYmxvZ19lc3NheSgpO1xuICAgIH0sXG4gICAgLy8g54K55Ye7aWNvbuWxleW8gC/lhbPpl63moJHliIbnsbtcbiAgICBoaXRfb3Blbl9jbG9zZV9mb3JkZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgY2F0ZV9jZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVfY2VsbCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDtpPGNhdGVfY2VsbC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmIChjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKXtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9ICQoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdKTtcbiAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPT09IFwiaW5saW5lLWJsb2NrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWGs+WumuWTquS6m+mcgOimgeaYvuekumljb25cbiAgICBvcGVuX2Nsb3NlX2ZvcmRlcl9wbHVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGNhdGVfY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlX2NlbGwnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7aTxjYXRlX2NlbGwubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAvLyDmn6XnnIvnrKzkuInkuKrlrZDoioLngrnmmK/lkKbmnInlhYPntKBcbiAgICAgICAgICAgIGlmKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5jaGlsZHJlbi5sZW5ndGggIT09IDApe1xuICAgICAgICAgICAgICAgIC8vIOaYvuekuuaXgei+ueeahGljb25cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5LiN5pi+56S65peB6L6555qEaWNvblxuICAgICAgICAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIC8vIOafpeeci+abtOWkmumhtemdou+8jOS8mOWMluWNmuWuoi/pmo/nrJTmmL7npLpcbiAgICByZWFkbW9yZV9ibG9nX2Vzc2F5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hcmNoaXZlcy9cIikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICAgIC8vIOWOu+aOieesrOS4gOS4qu+8n+Wtl+esplxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IGxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSk7XG4gICAgICAgICAgICAvLyDmoLnmja495Y+35YiS5YiG5Y+C5pWwXG4gICAgICAgICAgICBsZXQgYXJyID0gcGFyYW1zLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAvLyDojrflj5ZwYWdlX3R5cGXlj4LmlbBcbiAgICAgICAgICAgIGxldCBwYWdlX3R5cGUgPSBhcnJbMV07XG4gICAgICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJjaGl2ZV9hcnRpY2xlX2xpc3QnKTtcbiAgICAgICAgICAgIGZvciAobGV0IHUgPSAwO3U8dWwubGVuZ3RoO3UrKykge1xuICAgICAgICAgICAgICAgIC8vIOWvueavj+S4gOS4qmxp6L+b6KGM5Yik5pat77yM5aaC5p6c5LiN5piv5Y+C5pWw55qE5YC877yM5bCx6L+b6KGM6ZqQ6JePXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7aTx1bFt1XS5jaGlsZHJlbi5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHVsW3VdLmNoaWxkcmVuW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09ICdkc2FsJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9ICdibG9nJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IHBhZ2VfdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdWxbdV0uY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufSIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG7jgJDmlofnq6Dorr/pl67ph4/mjpLlkI3jgJFcbiAgICDmlofnq6DpmIXor7vph4/lnKjljZXkuKrmlofnq6DkuK3lj6/ku6XmmL7npLrkvYbmmK/kuI3og73mjpLlkI3vvIzmjpLlkI3mgI7kuYjlrp7njrDlkaLvvJ9cbiAgICDmlrnmoYgx77ya5L2/55SodmFsaW5lXG4gICAg5pa55qGIMu+8muWcqOacjeWKoeWZqOS4iui/m+ihjOWFqOermeeahOaWh+eroOiuv+mXru+8jOaPkOWPluS7luS7rOeahOiuv+mXrumHj2lkXG4gICAg5pa55qGIM++8muWvuXR3aWtvb+S6keWHveaVsOi/m+ihjOS7o+eggeabtOaUue+8jOexu+S8vOiuv+mXrumHj2FwaVxuIFxu44CQ6K+E6K665YiH5o2i5oyJ6ZKu44CRXG4gICAg5YiH5o2idXR0ZXJhbmNlc+ivhOiuuuWQju+8jOmhtemdouS8muWIt+aWsOS4gOS4i+eEtuWQjuWPiOWbnuWIsOm7mOiupOivhOiuuuezu+e7n+S6hu+8jOi/meS4quWPr+S7peS8mOWMllxuXG7jgJDmnIDmlrDor4TorrrjgJFcbiAgICDmnIDmlrDor4Torrrnu4Tku7bvvIzlpoLmnpxibG9n6aG16Z2i55So5LqG77yM6YKj5LmI6L+Z5Liq57uE5Lu25bCx5LiN6IO95pS+5Zyo56e75Yqo56uv5L6n6L655qCP5LqG77yMXG4gICAg5ZCM5LiA5LiqaWTkuI3og73lpJrmrKHnlKjnmoTnvJjmlYXlkJfvvJ9cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuLy8g5a+85Ye65Li65LiA5Liq5a+56LGhXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ29fY29tbWVudHMoKTtcbiAgICB0aGlzLmNvbW1lbnRzX2NvdW50KCk7XG4gICAgdGhpcy5uZXdfY29tbWVudHMoKTtcbiAgICB0aGlzLnN3aXRjaF9jb21tZW50KCk7XG4gIH0sXG4gIC8vIOaYr+WQpuWJjeW+gOivhOiuuuWMulxuICBnb19jb21tZW50czogZnVuY3Rpb24oKXtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvX2NvbW1lbnRzJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb19jb21tZW50cycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfSxcbiAgLy8g5paH56ug6K+E6K665pWwXG4gIGNvbW1lbnRzX2NvdW50OiBmdW5jdGlvbigpIHtcbiAgICAvLyDliKTmlq3pobXpnaLmmK/lkKbmnInor4TorrrljLppZOWSjOW8leeUqOivhOiuuuaVsOeahGlkXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cycpICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0d2lrb29fY29tbWVudHMnKSkge1xuICAgICAgdmFyIHR3aWtvb19jb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0d2lrb29fY29tbWVudHMnKTtcbiAgICAgIC8vIEJPTeiOt+WPlumhtemdonVybOeahHBhdGhuYW1l6Lev5b6EXG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzX3VybCA9IFtsb2NhdGlvbi5wYXRobmFtZV07XG5cbiAgICAgIHR3aWtvby5nZXRDb21tZW50c0NvdW50KHtcbiAgICAgICAgZW52SWQ6ICd3ZWJzaXRlLXdpa29vLTRnNDZrOGRvOTg4Njc1NDInLCAvLyDnjq/looMgSURcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIHVybHM6IHR3aWtvb19jb21tZW50c191cmwsLy8g5LiN5YyF5ZCr5Y2P6K6u44CB5Z+f5ZCN44CB5Y+C5pWw55qE5paH56ug6Lev5b6E5YiX6KGo77yM5b+F5Lyg5Y+C5pWwXG4gICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UgLy8g6K+E6K665pWw5piv5ZCm5YyF5ous5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAvLyDlsIbor4TorrrmlbDlhpnlhaXlhbbkuK1cbiAgICAgICAgdHdpa29vX2NvbW1lbnRzLmlubmVyVGV4dCA9IHJlc1swXS5jb3VudDtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgLy8g6L+U5Zue56S65L6LOiBbXG4gICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMC9wb3N0LTEuaHRtbCcsIGNvdW50OiAxMCB9LFxuICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTEvcG9zdC0yLmh0bWwnLCBjb3VudDogMCB9LFxuICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTIvcG9zdC0zLmh0bWwnLCBjb3VudDogMjAgfVxuICAgICAgICAvLyBdXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIC8vIOWPkeeUn+mUmeivr1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIOacgOaWsOivhOiuulxuICBuZXdfY29tbWVudHM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBob3RfYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG90X2FydGljbGVzX2l0ZW0nKTtcbiAgICB2YXIgcGFnZV9zaXplID0gODtcbiAgICB0d2lrb28uZ2V0UmVjZW50Q29tbWVudHMoe1xuICAgICAgICBlbnZJZDogJ3dlYnNpdGUtd2lrb28tNGc0Nms4ZG85ODg2NzU0MicsIC8vIOeOr+WigyBJRFxuICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgcGFnZVNpemU6IHBhZ2Vfc2l6ZSwgLy8g6I635Y+W5aSa5bCR5p2h77yM6buY6K6k77yaMTDvvIzmnIDlpKfvvJoxMDBcbiAgICAgICAgaW5jbHVkZVJlcGx5OiBmYWxzZSAvLyDmmK/lkKbljIXmi6zmnIDmlrDlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld19jb21tZW50c19sb2RpbmcnKTtcbiAgICAgICAgdmFyIG5ld19jb21tZW50c19sb2RpbmdfcGFyZW50ID0gbmV3X2NvbW1lbnRzX2xvZGluZy5wYXJlbnRFbGVtZW50O1xuICAgICAgICBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudC5yZW1vdmVDaGlsZChuZXdfY29tbWVudHNfbG9kaW5nKTtcbiAgICAgICAgLy8g5o+S5YWl6K+E6K66XG4gICAgICAgIGZvciAodmFyIGkgPSAwO2k8cGFnZV9zaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAocmVzW2ldLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfY29udGVudCA9IHJlc1tpXS5jb21tZW50O1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19uaWNrID0gcmVzW2ldLm5pY2s7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX3VybCA9IHJlc1tpXS51cmw7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2F2YXRhciA9IHJlc1tpXS5hdmF0YXI7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX3RpbWUgPSByZXNbaV0ucmVsYXRpdmVUaW1lO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19pZCA9ICcjJyArIHJlc1tpXS5pZDtcbiAgICBcbiAgICAgICAgICAgIHZhciBob3RfYXJ0aWNsZXNfY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgaG90X2FydGljbGVzX2NoaWxkLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiaXRlbV91cFwiPjxpbWcgc3JjPVwiJyArIG5ld19jb21tZW50c19hdmF0YXIgKyAnXCIgY2xhc3M9XCJhdmF0YXJcIj48ZGl2IGNsYXNzPVwibmlja19uYW1lXCI+PHNwYW4gY2xhc3M9XCJuaWNrXCI+JyArIG5ld19jb21tZW50c19uaWNrICsgJzwvc3Bhbj48c3BhbiBjbGFzcz1cInRpbWVcIj4nICsgbmV3X2NvbW1lbnRzX3RpbWUgKyAnPC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJpdGVtX2Rvd25cIj48YSBocmVmPVwiJyArIG5ld19jb21tZW50c191cmwgKyBuZXdfY29tbWVudHNfaWQgKyAnXCI+JyArIG5ld19jb21tZW50c19jb250ZW50ICsgJzwvYT48L2Rpdj4nO1xuICAgICAgICAgICAgaG90X2FydGljbGVzLmFwcGVuZChob3RfYXJ0aWNsZXNfY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfSxcbiAgLy8g5YiH5o2i6K+E6K66XG4gIHN3aXRjaF9jb21tZW50OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3dpdGNoX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzd2l0Y2hfYnRuJyk7XG4gICAgdmFyIHV0dGVyYW5jZXNfY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1dHRlcmFuY2VzX2NvbW1lbnQnKTtcbiAgICB2YXIgdHdpa29vX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnQnKTtcbiAgICBcbiAgICBzd2l0Y2hfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgIHN3aXRjaF9idG4uY2xhc3NMaXN0LnRvZ2dsZShcIm1vdmVcIik7XG4gICAgICB1dHRlcmFuY2VzX2NvbW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGVudC1pbicpO1xuICAgICAgdHdpa29vX2NvbW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGVudC1pbicpO1xuICAgICAgXG4gICAgICBpZih1dHRlcmFuY2VzX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHV0dGVyYW5jZXNfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaWYgKCF1dHRlcmFuY2VzX2NvbW1lbnQuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgICAvLyBCZWF1ZGFyIOivhOiuuuezu+e7n1xuICAgICAgICAgIHZhciBzY3JpcHRfdXR0ZXJhbmNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc3JjPVwiaHR0cHM6Ly9iZWF1ZGFyLmxpcGsub3JnL2NsaWVudC5qc1wiIDtcbiAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJyZXBvXCIsXCJ3enRsaW5rMTAxMy9jb21tZW50XCIpO1xuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImlzc3VlLXRlcm1cIixcInRpdGxlXCIpO1xuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImxhYmVsXCIsXCLwn5KsY29tbWVudFwiKTtcbiAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJ0aGVtZVwiLFwiZ2l0aHViLWxpZ2h0XCIpO1xuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImNyb3Nzb3JpZ2luXCIsXCJhbm9ueW1vdXNcIik7XG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwiYnJhbmNoXCIsXCJtYXN0ZXJcIik7XG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLFwidHJ1ZVwiKTtcbiAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJjb21tZW50LW9yZGVyXCIsXCJkZXNjXCIpO1xuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImlucHV0LXBvc2l0aW9uXCIsXCJ0b3BcIik7XG4gICAgICAgICAgdXR0ZXJhbmNlc19jb21tZW50LmFwcGVuZENoaWxkKHNjcmlwdF91dHRlcmFuY2VzKTsgXG4gICAgICAgIH1cbiAgICAgIH1lbHNlIHtcbiAgICAgICAgLy8gVHdpa29vIOivhOiuuuezu+e7n1xuICAgICAgICB1dHRlcmFuY2VzX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICDnvJPmhaLmmL7npLpcbiAgICAgICAg57yT5oWi5Zue5Yiw6aG26YOoXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gbGV0IGdvX3RvcF9vYmplY3QgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ29fdG9wKCk7XG4gICAgICAgIHRoaXMuY2xpY2tfZ29fdG9wKCk7XG4gICAgfSxcbiAgICBnb190b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIOa7muWKqOaYvuekumdvX3RvcOaMiemSrlxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIC8vIOaMgee7reebkeWQrOa7muWKqOeKtuaAgVxuICAgICAgICAgICAgZ2V0U2Nyb2xsKCkudG9wICE9PSAwID8gJChcIiNnb190b3BcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpIDogJChcIiNnb190b3BcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIGNsaWNrX2dvX3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOeCueWHu+WbnuWIsOmhtumDqFxuICAgICAgICAkKFwiI2dvX3RvcFwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbi8vIHNjcm9vbFRvcOWFvOWuueaAp+aWueahiFxuZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xuICAgIHJldHVybiB7XG4gICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdHx8MCxcbiAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDBcbiAgICB9O1xufVxuXG5cbi8vIOWmguaenOS4jeWBmum7mOiupOWvvOWFpe+8jOWwseaMieeFp+S4i+mdouWGme+8jOS4jeimgWRlZmF1bHTor41cbmV4cG9ydCB7XG4gICAgZ29fdG9wX29iamVjdCwgLy/lr7zlh7rlr7nosaFcbiAgICBnZXRTY3JvbGwsIC8v5a+85Ye66YCa55So5Ye95pWwXG59XG5cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH0sXG4gICAgc2VhcmNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGlucHV0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWlucHV0XCIpO1xuXG4gICAgICAgIGlmIChpbnB1dEFyZWEpIHtcbiAgICAgICAgICAgIGlucHV0QXJlYS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEucGxhY2Vob2xkZXIgPSAn6aaW5qyh5pCc57SiaW5nwrfCt8K3JztcbiAgICAgICAgICAgICAgICBnZXRTZWFyY2hGaWxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbmNsaWNrID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlucHV0QXJlYS5vbmtleWRvd24gPSBmdW5jdGlvbigpIHsgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHJldHVybiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBjbGVhclNlYXJjaCgkcmVzdWx0Q29udGVudCkge1xuICAgICAgICAgICAgLy8gY2xlYXIgc2VhcmNoIHJlc3VsdFxuICAgICAgICAgICAgdmFyIGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1zZWFyY2gtY2xvc2VcIik7XG4gICAgICAgICAgICBidG5DbG9zZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9ICfor7fovpPlhaXlhbPplK7or40nO1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5mb2N1cygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIHNlYXJjaEZ1bmMgPSBmdW5jdGlvbihwYXRoLCBzZWFyY2hfaWQsIGNvbnRlbnRfaWQpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBCVE4gPSBcIjxkaXYgaWQ9J2xvY2FsLXNlYXJjaC1jbG9zZSc+5riF56m65pCc57SiPC9kaXY+XCJcbiAgICAgICAgICAgIHZhciAkaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWFyY2hfaWQpO1xuICAgICAgICAgICAgdmFyICRyZXN1bHRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudF9pZCk7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdW1lIGlucHV0XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQucGxhY2Vob2xkZXIgPSAn6L6T5YWl5YWz6ZSu6K+N5Lul5pCc57SiJztcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LmZvY3VzKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgeG1sID0geGhyLnJlc3BvbnNlWE1MO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm9vdCA9IHhtbC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gcm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImVudHJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGl0bGVcIilbMF0uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjb250ZW50XCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1cmxcIilbMF0uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSAnPHVsIGNsYXNzPVxcXCJhcmNoaXZlXFxcIj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXdvcmRzID0gdGhpcy52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKS5zcGxpdCgvW1xcc1xcLV0rLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUudHJpbSgpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacrOWcsOaQnOe0ouS4u+S7o+eggVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50X2luZGV4ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLnRpdGxlIHx8IGRhdGEudGl0bGUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRpdGxlID0gXCJVbnRpdGxlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ19kYXRhX3RpdGxlID0gZGF0YS50aXRsZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfdGl0bGUgPSBvcmlnX2RhdGFfdGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ19kYXRhX2NvbnRlbnQgPSBkYXRhLmNvbnRlbnQudHJpbSgpLnJlcGxhY2UoLzxbXj5dKz4vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfY29udGVudCA9IG9yaWdfZGF0YV9jb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfdXJsID0gZGF0YS51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4X3RpdGxlID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4X2NvbnRlbnQgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3Rfb2NjdXIgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IG1hdGNoIGFydGlsZXMgd2l0aCBub3QgZW1wdHkgY29udGVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YV9jb250ZW50ICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4X3RpdGxlID0gZGF0YV90aXRsZS5pbmRleE9mKGtleXdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfY29udGVudCA9IGRhdGFfY29udGVudC5pbmRleE9mKGtleXdvcmQpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleF90aXRsZSA8IDAgJiYgaW5kZXhfY29udGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleF9jb250ZW50IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleF9jb250ZW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9vY2N1ciA9IGluZGV4X2NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnRfaW5kZXgucHVzaCh7aW5kZXhfY29udGVudDppbmRleF9jb250ZW50LCBrZXl3b3JkX2xlbjprZXl3b3JkX2xlbn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWxleekuue7k+aenFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IOW+heWujOWWhO+8jOW+heWujOWWhFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8bGk+PGEgaHJlZj0nXCIgK2xvY2F0aW9uLnByb3RvY29sK1wiLy9cIitsb2NhdGlvbi5ob3N0K1wiL1wiKyBkYXRhX3VybCArIFwiJyBjbGFzcz0nYXJjaGl2ZS10aXRsZSc+XCIgKyBvcmlnX2RhdGFfdGl0bGUgKyBcIjwvYT5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBvcmlnX2RhdGFfY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0X29jY3VyID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1dCBvdXQgMTAwIGNoYXJhY3RlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGZpcnN0X29jY3VyIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kID0gZmlyc3Rfb2NjdXIgKyAzMDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gNDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZCA+IGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gY29udGVudC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaF9jb250ZW50ID0gY29udGVudC5zdWJzdHIoc3RhcnQsIDEwMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IGFsbCBrZXl3b3Jkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ1MgPSBuZXcgUmVnRXhwKGtleXdvcmQsIFwiZ2lcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hfY29udGVudCA9IG1hdGNoX2NvbnRlbnQucmVwbGFjZShyZWdTLCBcIjxlbSBjbGFzcz1cXFwic2VhcmNoLWtleXdvcmRcXFwiPlwiICsga2V5d29yZCArIFwiPC9lbT5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8cCBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCIgKyBtYXRjaF9jb250ZW50ICsgXCIuLi48L3A+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8L2xpPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPC91bD5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZignPGxpPicpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IEJUTiArIFwiPGRpdiBjbGFzcz0nbG9jYWwtc2VhcmNoLWVtcHR5Jz7msqHmnInmib7liLDkvaDmiYDopoHmkJzntKLnmoTlhoXlrrnigKbigKY8L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gQlROICsgc3RyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdmFyIGdldFNlYXJjaEZpbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBwYXRoID0gXCIvc2VhcmNoLnhtbFwiO1xuICAgICAgICAgICAgc2VhcmNoRnVuYyhwYXRoLCAnbG9jYWwtc2VhcmNoLWlucHV0JywgJ2xvY2FsLXNlYXJjaC1yZXN1bHQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIOWFqOWxgOaMiemSruiuvue9rmpz5piv5ZCm5bGV56S65pCc57Si5qGGXG4gICAgICAgIHZhciBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoX2J0bicpO1xuICAgICAgICBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWwtc2VhcmNoLWlucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdmFyIHNlYXJjaF9jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfY2xvc2UnKTtcbiAgICAgICAgc2VhcmNoX2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbn1cblxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIG5lZWRTaGFyZUJ1dHRvblxuICAtIFZlcnNpb24gMS4wLjBcbiAgLSBDb3B5cmlnaHQgMjAxNSBEem1pdHJ5IFZhc2lsZXVza2lcblx0LSBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQpXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNoYXJlKCk7XG4gICAgfSxcbiAgICBzaGFyZTogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBmaW5kIGNsb3Nlc3RcbiAgICBmdW5jdGlvbiBjbG9zZXN0KGVsZW0sIHBhcmVudCkge1xuICAgICAgaWYgKHR5cGVvZihwYXJlbnQpID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaGVzU2VsZWN0b3IgPSBlbGVtLm1hdGNoZXMgfHwgZWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbS5tc01hdGNoZXNTZWxlY3RvcjtcbiAgXG4gICAgICAgICAgICAgIGlmICghIW1hdGNoZXNTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzU2VsZWN0b3IuYmluZChlbGVtKShwYXJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgaWYgKGVsZW0gPT0gcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyBzaGFyZSBidXR0b24gY2xhc3NcbiAgICAgIHdpbmRvdy5uZWVkU2hhcmVCdXR0b24gPSBmdW5jdGlvbihlbGVtLCBvcHRpb25zKSB7XG4gICAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnQgcmVmZXJlbmNlXG4gICAgICAgICAgdmFyIHJvb3QgPSB0aGlzO1xuICAgICAgICAgIHJvb3QuZWxlbSA9IGVsZW0gfHwgJ25lZWQtc2hhcmUtYnV0dG9uJztcbiAgXG4gICAgICAgICAgLyogSGVscGVyc1xuICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBcbiAgICAgIC8vIGdldCB0aXRsZSBmcm9tIGh0bWxcbiAgICAgIHJvb3QuZ2V0VGl0bGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJvZzp0aXRsZVwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInR3aXR0ZXI6dGl0bGVcIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnRpdGxlO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gZ2V0IGltYWdlIGZyb20gaHRtbFxuICAgICAgICByb290LmdldEltYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgLy8gY2hlY2sgcXVlcnlTZWxlY3RvciBleGlzdGFuY2UgZm9yIG9sZCBicm93c2Vyc1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjppbWFnZVwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gZ2V0IGRlc2NyaXB0aW9uIGZyb20gaHRtbFxuICAgICAgICByb290LmdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgLy8gY2hlY2sgcXVlcnlTZWxlY3RvciBleGlzdGFuY2UgZm9yIG9sZCBicm93c2Vyc1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJykubmFtZWRJdGVtKCdkZXNjcmlwdGlvbicpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgXG4gICAgICAgIC8vIHNoYXJlIHVybHMgZm9yIGFsbCBuZXR3b3Jrc1xuICAgICAgICByb290LnNoYXJlID0ge1xuICAgICAgICAgICAgJ3dlaWJvJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly92LnQuc2luYS5jb20uY24vc2hhcmUvc2hhcmUucGhwP3RpdGxlPSdcbiAgICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICAgKyBcIiZ1cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICAgKyBcIiZwaWM9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd3ZWNoYXQnOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciBpbWdTcmMgPSAnaHR0cHM6Ly9hcGkucXJzZXJ2ZXIuY29tL3YxL2NyZWF0ZS1xci1jb2RlLz9zaXplPTE1MHgxNTAmZGF0YT0nK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgdmFyIGRyb3Bkb3duRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24nKTtcbiAgICAgICAgICAgICAgdmFyIGltZyA9IGRyb3Bkb3duRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpWzBdO1xuICAgICAgICAgICAgICB2YXIgbG9hZGVyID0gZHJvcGRvd25FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZWVkLXNoYXJlLWxvYWRlcicpWzBdO1xuICBcbiAgICAgICAgICAgICAgICBpZiAoaW1nKSB7XG4gICAgICAgICAgICBpbWcucmVtb3ZlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmKGxvYWRlcikge1xuICAgICAgICAgICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxvYWRlci5jbGFzc05hbWUgPSAnbmVlZC1zaGFyZS1sb2FkZXInO1xuICAgICAgICAgICAgbG9hZGVyLmlubmVyVGV4dCA9ICdsb2FkaW5nLi4uJztcbiAgICAgICAgICAgIGxvYWRlci50aXRsZSA9ICdsb2FkaW5nIHFyY29kZS4uLic7XG4gIFxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IGltZ1NyYztcbiAgICAgICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdDcmVhdGUgcXJjb2RlIGZhaWxlZCEnO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsJ25lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKTtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKGxvYWRlci5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQobG9hZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICdkb3ViYW4nOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vd3d3LmRvdWJhbi5jb20vc2hhcmUvc2VydmljZT9uYW1lPSdcbiAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICArIFwiJmhyZWY9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICsgXCImaW1hZ2U9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdxcXpvbmUnOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly9zbnMucXpvbmUucXEuY29tL2NnaS1iaW4vcXpzaGFyZS9jZ2lfcXpzaGFyZV9vbmVrZXk/dGl0bGU9J1xuICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICsgXCImdXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICArIFwiJnBpY3M9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSlcbiAgICAgICAgICAgICAgKyBcIiZkZXNjPVwiKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3JlbnJlbic6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3dpZGdldC5yZW5yZW4uY29tL2RpYWxvZy9zaGFyZT90aXRsZT0nXG4gICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgKyBcIiZyZXNvdXJjZVVybD1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgKyBcIiZwaWM9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSlcbiAgICAgICAgICAgICAgKyBcIiZkZXNjcmlwdGlvbj1cIisgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICB9LFxuICBcbiAgICAgICAgICAgICdtYWlsdG8nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnbWFpbHRvOj9zdWJqZWN0PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKSArICcmYm9keT1UaG91Z2h0IHlvdSBtaWdodCBlbmpveSByZWFkaW5nIHRoaXM6ICcgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCkgKyAnIC0gJyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICBcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndHdpdHRlcicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0nO1xuICAgICAgICAgICAgICAgIHVybCArPSBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKSArIFwiJnVybD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwaW50ZXJlc3QnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2Jvb2ttYXJrbGV0Lz9pc192aWRlbz1mYWxzZSc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmbWVkaWE9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnVybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdmYWNlYm9vaycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZmFjZWJvb2suY29tL3NoYXJlLnBocD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdnb29nbGVwbHVzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncmVkZGl0JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5yZWRkaXQuY29tL3N1Ym1pdD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2RlbGljaW91cycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdkZWwuaWNpby51cy9wb3N0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmbm90ZXM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ3RhcGl0dXJlJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0YXBpdHVyZS5jb20vYm9va21hcmtsZXQvaW1hZ2U/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdpbWdfc3JjPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmcGFnZV91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmcGFnZV90aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdzdHVtYmxldXBvbicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2xpbmtlZGluJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnNvdXJjZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5zb3VyY2UpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ3NsYXNoZG90JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdzbGFzaGRvdC5vcmcvYm9va21hcmsucGw/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAndGVjaG5vcmF0aScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndGVjaG5vcmF0aS5jb20vZmF2ZXM/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdhZGQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAncG9zdGVyb3VzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3Bvc3Rlcm91cy5jb20vc2hhcmU/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ2xpbmt0bz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3R1bWJscicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cudHVtYmxyLmNvbS9zaGFyZT92PTMnO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICdnb29nbGVib29rbWFya3MnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5nb29nbGUuY29tL2Jvb2ttYXJrcy9tYXJrP29wPWVkaXQnO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZia21rPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmYW5ub3RhdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vICduZXdzdmluZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lm5ld3N2aW5lLmNvbS9fdG9vbHMvc2VlZCZzYXZlPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAndT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZoPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gJ3BpbmdmbScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGluZy5mbS9yZWYvPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnbGluaz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmJvZHk9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAnZXZlcm5vdGUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmV2ZXJub3RlLmNvbS9jbGlwLmFjdGlvbj8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZyaWVuZGZlZWQnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmZyaWVuZGZlZWQuY29tL3NoYXJlPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndmtvbnRha3RlJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3Zrb250YWt0ZS5ydS9zaGFyZS5waHA/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICB1cmwgKz0gJyZkZXNjcmlwdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgdXJsICs9ICcmaW1hZ2U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgIHVybCArPSAnJm5vcGFyc2U9dHJ1ZSc7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnb2Rub2tsYXNzbmlraScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cub2Rub2tsYXNzbmlraS5ydS9kaz9zdC5jbWQ9YWRkU2hhcmUmc3Qucz0xJztcbiAgICAgICAgICB1cmwgKz0gJyZzdC5jb21tZW50cz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgdXJsICs9ICcmc3QuX3N1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICdtYWlscnUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ2Nvbm5lY3QubWFpbC5ydS9zaGFyZT8nO1xuICAgICAgICAvLyAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgIC8vICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvLyAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy8gICB1cmwgKz0gJyZpbWFnZXVybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfVxuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gb3BlbiBzaGFyZSBsaW5rIGluIGEgcG9wdXBcbiAgICAgICAgcm9vdC5wb3B1cCA9IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICB2YXIgbGVmdCwgdG9wOyBcbiAgXG4gICAgICAgIHZhciBwb3B1cFdpZHRoID0gNjAwLFxuICAgICAgICAgICAgcG9wdXBIZWlnaHQgPSA1MDA7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gY2FjdWxhdGUgYnJvd3NlciB3aW5kb3cgd2lkdGhcbiAgICAgICAgLy8gaWYgd2luZG93IHdpZHRoIGlzIHRvbyBuYXJyb3csIHVzZSBzY3JlZW4gd2lkdGg7XG4gICAgICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiBzY3JlZW4ud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6IHNjcmVlbi5oZWlnaHQ7XG4gICAgICAgIGlmICh3aWR0aCA8IDYwMCAmJiBoZWlnaHQgPCA1MDApIHtcbiAgICAgICAgICBsZWZ0ID0gKHNjcmVlbi53aWR0aCAvIDIpIC0gKHBvcHVwV2lkdGggLyAyKTtcbiAgICAgICAgICB0b3AgPSAoc2NyZWVuLmhlaWdodCAvIDIpIC0gKHBvcHVwSGVpZ2h0IC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc2V0IGxlZnQgYW5kIHRvcCBwb3NpdGlvblxuICAgICAgICAgICAgICB2YXIgZHVhbFNjcmVlbkxlZnQgPSB3aW5kb3cuc2NyZWVuTGVmdCAhPSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHNjcmVlbi5sZWZ0LFxuICAgICAgICAgICAgZHVhbFNjcmVlblRvcCA9IHdpbmRvdy5zY3JlZW5Ub3AgIT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlblRvcCA6IHNjcmVlbi50b3A7XG4gICAgICAgICAgLy8gY2FsY3VsYXRlIHRvcCBhbmQgbGVmdCBwb3NpdGlvblxuICAgICAgICAgIGxlZnQgPSAoKHdpZHRoIC8gMikgLSAocG9wdXBXaWR0aCAvIDIpKSArIGR1YWxTY3JlZW5MZWZ0O1xuICAgICAgICAgIHRvcCA9ICgoaGVpZ2h0IC8gMikgLSAocG9wdXBIZWlnaHQgLyAyKSkgKyBkdWFsU2NyZWVuVG9wO1xuICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICB2YXIgc2hhcmVXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsJ3RhcmdldFdpbmRvdycsJ3Rvb2xiYXI9bm8sbG9jYXRpb249bm8sc3RhdHVzPW5vLG1lbnViYXI9bm8sc2Nyb2xsYmFycz15ZXMscmVzaXphYmxlPXllcyx3aWR0aD0nICsgcG9wdXBXaWR0aCArICcsIGhlaWdodD0nICsgcG9wdXBIZWlnaHQgKyAnLCB0b3A9JyArIHRvcCArICcsIGxlZnQ9JyArIGxlZnQpO1xuICAgICAgICAgICAgLy8gUHV0cyBmb2N1cyBvbiB0aGUgbmV3V2luZG93XG4gICAgICAgICAgaWYgKHdpbmRvdy5mb2N1cykge1xuICAgICAgICAgICAgICBzaGFyZVdpbmRvdy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgXG4gICAgICAgICAgLyogU2V0IG9wdGlvbnNcbiAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgXG4gICAgICAgICAgLy8gY3JlYXRlIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgICAgIHJvb3Qub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgaWNvblN0eWxlOiAnZGVmYXVsdCcsIC8vIGRlZmF1bHQgb3IgYm94XG4gICAgICAgICAgICAgIGJveEZvcm06ICdob3Jpem9udGFsJywgLy8gaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbUNlbnRlcicsIC8vIHRvcCAvIG1pZGRsZSAvIGJvdHRvbSArIExlZnQgLyBDZW50ZXIgLyBSaWdodFxuICAgICAgICAgICAgICBwcm90b2NvbDogWydodHRwJywgJ2h0dHBzJ10uaW5kZXhPZih3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnOicpWzBdKSA9PT0gLTEgPyAnaHR0cHM6Ly8nIDogJy8vJyxcbiAgICAgICAgICAgICAgbmV0d29ya3M6ICdUd2l0dGVyLEZhY2Vib29rLFJlZGRpdCxMaW5rZWRpbixUdW1ibHIsUGludGVyZXN0LFdlaWJvLFdlY2hhdCxEb3ViYW4sUVFab25lLE1haWx0bycsXG4gICAgICAgICAgICAgIGljb25zOiBbJ2ZhIGZhLXR3aXR0ZXInLCdmYSBmYS1mYWNlYm9vaycsJ2ZhIGZhLXJlZGRpdC1hbGllbicsJ2ZhIGZhLWxpbmtlZGluJywnZmEgZmEtdHVtYmxyJywnZmEgZmEtcGludGVyZXN0JywnZmEgZmEtd2VpYm8nLCdmYSBmYS13ZWl4aW4nLCc5JywnZmEgZmEtcXEnLCdmYSBmYS1lbnZlbG9wZS1vJ11cbiAgICAgICAgICB9O1xuICBcbiAgICAgIC8vIGludGVncmF0ZSBjdXN0b20gb3B0aW9uc1xuICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgIHJvb3Qub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICB9XG4gICAgICAvLyBjb252ZXJ0IG5ldHdvcmtzIHN0cmluZyBpbnRvIGFycmF5XG4gICAgICByb290Lm9wdGlvbnMubmV0d29ya3MgPSByb290Lm9wdGlvbnMubmV0d29ya3MudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICBcbiAgICAgIGZ1bmN0aW9uIGdldE9wdGlvbnMoZWwpIHtcbiAgICAgICAgICAvLyBpbnRlZ3JhdGUgZGF0YSBhdHRyaWJ1dGUgb3B0aW9uc1xuICAgICAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBpIGluIHJvb3Qub3B0aW9ucykge1xuICAgICAgICAgICAgcmV0W2ldID0gcm9vdC5vcHRpb25zW2ldO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgLy8gdGhlc2UgYXR0cnMgbXVzdCBnZXQgZHluYW1pY2FsbHkuXG4gICAgICAgICAgcmV0LnVybCA9IHJvb3Qub3B0aW9ucy51cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgcmV0LnRpdGxlID0gcm9vdC5vcHRpb25zLnRpdGxlIHx8IHJvb3QuZ2V0VGl0bGUoKTtcbiAgICAgICAgICByZXQuaW1hZ2UgPSByb290Lm9wdGlvbnMuaW1hZ2UgfHwgcm9vdC5nZXRJbWFnZSgpO1xuICAgICAgICAgIHJldC5kZXNjcmlwdGlvbiA9IHJvb3Qub3B0aW9ucy5kZXNjcmlwdGlvbiB8fCByb290LmdldERlc2NyaXB0aW9uKCk7XG4gIFxuICAgICAgICAgIGZvciAodmFyIG9wdGlvbiBpbiBlbC5kYXRhc2V0KSB7XG4gICAgICAgICAgICAgIC8vIHJlcGxhY2Ugb25seSAnc2hhcmUtJyBwcmVmaXhlZCBkYXRhLWF0dHJpYnV0ZXNcbiAgICAgICAgICAgIGlmIChvcHRpb24ubWF0Y2goL3NoYXJlLykpIHtcbiAgICAgICAgICAgICAgdmFyIG5ld19vcHRpb24gPSBvcHRpb24ucmVwbGFjZSgvc2hhcmUvLCAnJyk7XG4gICAgICAgICAgICAgIGlmICghbmV3X29wdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5ld19vcHRpb24gPSBuZXdfb3B0aW9uLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmV3X29wdGlvbi5zbGljZSgxKTtcbiAgICAgICAgICAgICAgdmFyIHZhbCA9IGVsLmRhdGFzZXRbb3B0aW9uXTtcbiAgICAgICAgICAgICAgaWYgKG5ld19vcHRpb24gPT09ICduZXR3b3JrcycpIHtcbiAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3X29wdGlvbiA9PT0gJ3VybCcgJiYgdmFsICYmIHZhbFswXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAvLyBmaXggcmVsYXRpdmUgdXJsIHByb2JsZW0uXG4gICAgICAgICAgICAgICAgICB2YWwgPSBsb2NhdGlvbi5vcmlnaW4gKyB2YWw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0W25ld19vcHRpb25dID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICBcbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duKGVsKSB7XG4gICAgICAgICAgLy8gY3JlYXRlIGRyb3Bkb3duXG4gICAgICAgICAgdmFyIGRyb3Bkb3duRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgPSAnbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24nO1xuICAgICAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24nKSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgXG4gICAgICAgICAgLy8gc2V0IGRyb3Bkb3duIHJvdyBsZW5ndGhcbiAgICAgICAgICBpZiAobXlvcHRpb25zLmljb25TdHlsZSA9PSAnYm94JyAmJiBteW9wdGlvbnMuYm94Rm9ybSA9PSAnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm94LWhvcml6b250YWwnO1xuICAgICAgICAgIGVsc2UgaWYgKG15b3B0aW9ucy5pY29uU3R5bGUgPT0gJ2JveCcgJiYgbXlvcHRpb25zLmJveEZvcm0gPT0gJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3gtdmVydGljYWwnO1xuICBcbiAgICAgICAgICAvLyBzZXQgZHJvcGRvd24gcG9zaXRpb24gXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChteW9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtbGVmdCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAndG9wUmlnaHQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tdG9wLXJpZ2h0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICd0b3BDZW50ZXInOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tdG9wLWNlbnRlcic7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSBkcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnbWlkZGxlTGVmdCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1taWRkbGUtbGVmdCc7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5Ub3AgPSAtIGRyb3Bkb3duRWwub2Zmc2V0SGVpZ2h0IC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnbWlkZGxlUmlnaHQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tbWlkZGxlLXJpZ2h0JztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpblRvcCA9IC0gZHJvcGRvd25FbC5vZmZzZXRIZWlnaHQgLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1sZWZ0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdib3R0b21SaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tcmlnaHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbUNlbnRlcic6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWNlbnRlcic7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSBkcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sMSk7XG4gIFxuICBcbiAgICAgICAgICAvLyBmaWxsIGZyb3Bkb3duIHdpdGggYnV0dG9uc1xuICAgICAgICAgIHZhciBpY29uQ2xhc3MgPSBteW9wdGlvbnMuaWNvblN0eWxlID09ICdkZWZhdWx0JyA/ICduZWVkLXNoYXJlLWJ1dHRvbl9saW5rIG5lZWQtc2hhcmUtYnV0dG9uXycgOiAnbmVlZC1zaGFyZS1idXR0b25fbGluay0nICsgbXlvcHRpb25zLmljb25TdHlsZSArICcgbmVlZC1zaGFyZS1idXR0b25fbGluayBuZWVkLXNoYXJlLWJ1dHRvbl8nO1xuICAgICAgICAgIGxldCBmbGFnID0gMDtcbiAgICAgICAgICBmb3IgKHZhciBuZXR3b3JrIGluIG15b3B0aW9ucy5uZXR3b3Jrcykge1xuICAgICAgICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgIG5ldHdvcmsgPSBteW9wdGlvbnMubmV0d29ya3NbbmV0d29ya107XG4gICAgICAgICAgICAgIGxpbmsuY2xhc3NOYW1lID0gaWNvbkNsYXNzICsgbmV0d29yaztcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobXlvcHRpb25zLmljb25zLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGxpbmsuY2xhc3NOYW1lICs9ICcgJytteW9wdGlvbnMuaWNvbnNbZmxhZ107XG4gICAgICAgICAgICAgIGxpbmsuZGF0YXNldC5uZXR3b3JrID0gbmV0d29yaztcbiAgICAgICAgICAgICAgbGluay50aXRsZSA9IG5ldHdvcms7XG4gICAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgICAgICAgIGZsYWcrKztcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGRyb3Bkb3duRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICBpZiAoY2xvc2VzdChldmVudC50YXJnZXQsICcubmVlZC1zaGFyZS1idXR0b25fbGluaycpKSB7XG4gICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICBcbiAgICAgICAgICAgICAgICAgcm9vdC5zaGFyZVtldmVudC50YXJnZXQuZGF0YXNldC5uZXR3b3JrXShlbCk7XG4gICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gIFxuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRyb3Bkb3duRWwpO1xuICAgICAgfVxuICBcbiAgICAgIHZhciB0YXJnZXRFbCA9IHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSkgOiBlbGVtO1xuICAgICAgIGlmICh0YXJnZXRFbCAmJiB0YXJnZXRFbC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWQtc2hhcmUtcGFuZWwnKSkge1xuICAgICAgICBjcmVhdGVEcm9wZG93bih0YXJnZXRFbCk7XG4gICAgICAgIC8vIHRhcmdldEVsLmNsYXNzTGlzdC5hZGQoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICAgICAgfSBlbHNlIFxuICAgICAgICAvLyBjbG9zZSBvbiBjbGljayBvdXRzaWRlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICB2YXIgb3BlbmVkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gIFxuICAgICAgICAgIGlmICghY2xvc2VzdChldmVudC50YXJnZXQsICcubmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJykpIHtcbiAgICAgICAgICAgIGlmIChvcGVuZWRFbCkge1xuICAgICAgICAgICAgICAgIG9wZW5lZEVsLmNsYXNzTGlzdC5yZW1vdmUoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICBcbiAgICAgICAgICAgICAgICAvLyBoaWRlIHdlY2hhdCBjb2RlIGltYWdlIHdoZW4gY2xvc2UgdGhlIGRyb3Bkb3duLlxuICAgICAgICAgICAgICAgIGlmIChvcGVuZWRFbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lZEVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBjbG9zZXN0KGV2ZW50LnRhcmdldCwgcm9vdC5lbGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVEcm9wZG93bihlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEpO1xuICBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgXG4gICAgfTtcbiAgXG4gICAgbmV3IG5lZWRTaGFyZUJ1dHRvbignLm5lZWQtc2hhcmUtYnV0dG9uJyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudG9jX2J0bigpO1xuICAgIH0sXG4gICAgdG9jX2J0bjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0b2NfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvY19jb250YWluZXInKTtcbiAgICAgICAgbGV0IHRvY19idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9jX2J0bicpO1xuICAgICAgICAkKHRvY19idG4pLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAodG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpe1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ZWJfaW5mb19ydW50aW1lKCk7XG4gICAgfSxcbiAgICAvLyBUT0RPOiAhISHmiJHnnYDlrp7kuI3nn6XpgZPov5nmmK/kuKrku4DkuYjnp5hcbiAgICB3ZWJfaW5mb19ydW50aW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgQmlydGhEYXkgPSBuZXcgRGF0ZShuZXcgRGF0ZSgnMjAyMC8wMS8wNCcpKTtcbiAgICAgICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgdGltZW9sZCA9ICh0b2RheS5nZXRUaW1lKCkgLSBCaXJ0aERheS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgbGV0IGRheXNvbGQgPSBNYXRoLmZsb29yKHRpbWVvbGQgLyAoMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMVwiKS5pbm5lclRleHQgPSBkYXlzb2xkICsgJyDlpKknO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF5c29sZCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYmluZm9fcnVudGltZV9jb3VudF8xXCIpKTtcbiAgICB9LFxufVxuXG4iXX0=
