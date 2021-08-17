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

var four_container = '90%';
var four_ct_center_width = '100%'; // 设备小于560px的中配置

var device_small_container = "97%";
var device_small_center = "100%"; // 设备小于780px的中配置

var device_center_container = "93%";
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
    this.device_switch(); // 这个放到最后自调用，因为不管本地存储是什么，最终还是要根据设备监听为主

    this.browser_remember();
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
    /* 
    有个问题：
        一打开浏览器就会根据缓存来布局，尽管你的设备宽度小于1260px
        但是对于普通用户，一个浏览器哪来的经常开开发者模式呢？
    */

    if (localStorage.hasOwnProperty('layout')) {
      // 浏览器有缓存的情况
      var layout_change = window.localStorage.getItem("layout");
      console.log("本地有该变量缓存");

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
      console.log("本地没有该变量缓存");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY2F0ZWdvcmllcy5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvc2VhcmNoLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9zaGFyZWJ1dHRvbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvdG9jLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC93ZWJfaW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFsQjtBQUNBLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxjQUFELENBQW5CLEMsQ0FFQTs7QUFDQSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsVUFBRCxDQUFmO0FBQ0EsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFdBQUQsQ0FBaEI7QUFDQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQjtBQUNBLElBQUksU0FBUyxHQUFHLENB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Ozs7Ozs7Ozs7ZUNBQTtBQUNYLEVBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2QsU0FBSyxnQkFBTDtBQUNILEdBSFU7QUFJWDtBQUNBLEVBQUEsZ0JBQWdCLEVBQUUsNEJBQVk7QUFDdEIsUUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFKLENBQVMsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUFULENBQWY7QUFDQSxRQUFJLEtBQUssR0FBRyxJQUFJLElBQUosRUFBWjtBQUNBLFFBQUksT0FBTyxHQUFJLEtBQUssQ0FBQyxPQUFOLEtBQWtCLFFBQVEsQ0FBQyxPQUFULEVBQWpDO0FBQ0EsUUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFPLElBQUksS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLElBQW5CLENBQWxCLENBQWQsQ0FKc0IsQ0FLdEI7QUFDQTtBQUNBO0FBQ1A7QUFiVSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyogIFxuICAgIFRPRE86IFxuICAgICAgICDog73lnKjmoLnnm67lvZXorr7nva7pu5jorqTnirbmgIHmmK/lh6DmoI/nmoRcbiAgICAgICAg6IO95aSf6K6p5L2/55So6ICF5Y+W5raI6L+Z56eN4oCc6K6w5b+G4oCdXG4qKi9cblxuXG4vLyBQQ++8mmhlYWRlcuS4iueahOW3puWPs+aMiemSruWMuuWfn1xubGV0IGFycm93X2xlZnQgPSAkKCcjYXJyb3dfbGVmdCcpO1xubGV0IGFycm93X3JpZ2h0ID0gJCgnI2Fycm93X3JpZ2h0Jyk7XG5cbi8vIOW4g+WxgO+8mueJiOW/g+OAgeW3puS4reWPs+aOkueJiFxubGV0IGN0X2xlZnQgPSAkKCcuY3RfbGVmdCcpO1xubGV0IGN0X3JpZ2h0ID0gJCgnLmN0X3JpZ2h0Jyk7XG5sZXQgY3RfY2VudGVyID0gJCgnLmN0X2NlbnRlcicpO1xubGV0IGNvbnRhaW5lciA9ICQoJy5jb250YWluZXInKTtcblxuLy8gUEMvYXBw77ya5YiH5o2iaGVhZGVyXG5sZXQgaGVhZGVyID0gJCgnLmhlYWRlcicpO1xubGV0IGhlYWRlcl9hcHAgPSAkKCcuaGVhZGVyX2FwcCcpO1xuXG4vLyBhcHDvvJpoZWFkZXLkuIrnmoTlt6blj7PmjInpkq7ljLrln59cbmxldCBidG5fYXBwX3NpZGVyID0gJCgnI2J0bl9hcHBfc2lkZXInKTtcbmxldCBidG5fYXBwX3JpZ2h0ID0gJCgnI2J0bl9hcHBfcmlnaHQnKTtcblxuLy8gYXBw77ya54K55Ye7aGVhZGVyX2FwcOaXtuWAmeW8ueWHuuadpeeahOaKveWxiVxubGV0IGFwcF9zaWRlX2dsYXNzID0gJCgnI2FwcF9zaWRlX2dsYXNzJyk7XG5sZXQgYXBwX3NpZGVfY29udGVudCA9ICQoJyNhcHBfc2lkZV9jb250ZW50Jyk7XG5cbi8vIDEu5bem5Lit6YWN572uXG5sZXQgb25lX2NvbnRhaW5lciA9ICc4MCUnIDtcbmxldCBvbmVfY3RfY2VudGVyX3dpZHRoID0gJzc1JSc7XG5sZXQgb25lX2N0X2xlZnRfd2lkdGggPSAnMjUlJztcbi8vIDIuIOS4reWPs+mFjee9rlxubGV0IHR3b19jb250YWluZXIgPSAnODAlJyA7XG5sZXQgdHdvX2N0X2NlbnRlcl93aWR0aCA9ICc3NSUnO1xubGV0IHR3b19jdF9yaWdodF93aWR0aCA9ICcyNSUnO1xuLy8gMy4g5bem5Lit5Y+z6YWN572uXG5sZXQgdGhyZWVfY29udGFpbmVyID0gJzk1JScgO1xubGV0IHRocmVlX2N0X2NlbnRlcl93aWR0aCA9ICc2MCUnO1xubGV0IHRocmVlX2N0X3JpZ2h0X3dpZHRoID0gJzIwJSc7XG5sZXQgdGhyZWVfY3RfbGVmdF93aWR0aCA9ICcyMCUnO1xuLy8gNC4g5Lit6YWN572uXG5sZXQgZm91cl9jb250YWluZXIgPSAnOTAlJyA7XG5sZXQgZm91cl9jdF9jZW50ZXJfd2lkdGggPSAnMTAwJSc7XG4vLyDorr7lpIflsI/kuo41NjBweOeahOS4remFjee9rlxubGV0IGRldmljZV9zbWFsbF9jb250YWluZXIgPSBcIjk3JVwiO1xubGV0IGRldmljZV9zbWFsbF9jZW50ZXIgPSBcIjEwMCVcIjtcbi8vIOiuvuWkh+Wwj+S6jjc4MHB455qE5Lit6YWN572uXG5sZXQgZGV2aWNlX2NlbnRlcl9jb250YWluZXIgPSBcIjkzJVwiO1xubGV0IGRldmljZV9jZW50ZXJfY2VudGVyID0gXCIxMDAlXCI7XG5cblxuLy8g5Yik5patcGPmrrXlt6blj7PkuIrop5LnmoTnrq3lpLTor6XmmL7npLrlk6rkuKpcbmZ1bmN0aW9uIGxlZnRfcmlnaHRfYXJyb3cgKCkge1xuICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbiAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbGVmdF9jZW50ZXJfcmlnaHQgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGN0X3JpZ2h0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfcmlnaHRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbiAgICBsZWZ0X3JpZ2h0X2Fycm93ICgpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXlvdXQnKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnTFInKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLluIPlsYDvvJrlt6bkuK3lj7NcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdMUicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxlZnRfY2VudGVyICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IG9uZV9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IG9uZV9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyh7XCJ3aWR0aFwiOiBvbmVfY3RfbGVmdF93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBsZWZ0X3JpZ2h0X2Fycm93ICgpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXlvdXQnKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLluIPlsYDvvJrlt6bkuK1cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNlbnRlcl9yaWdodCAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiB0d29fY29udGFpbmVyfSk7XG4gICAgY3RfcmlnaHQuY3NzKHtcIndpZHRoXCI6IHR3b19jdF9yaWdodF93aWR0aH0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogdHdvX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcbiAgICBsZWZ0X3JpZ2h0X2Fycm93ICgpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXlvdXQnKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnUicpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW4g+WxgO+8muS4reWPs1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ1InKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjZW50ZXIgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogZm91cl9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IGZvdXJfY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgbGVmdF9yaWdodF9hcnJvdyAoKTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGF5b3V0Jyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnQycpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW4g+WxgO+8muS4rVwiKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ0MnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXZpY2Vfc21hbGwgKCkge1xuICAgIC8vIOacgOWwj+WwuuWvuO+8muacgOWkpzU2MHB4XG4gICAgY29uc29sZS5sb2coXCLlsI/kuo41NjBweOWwuuWvuFwiKTtcblxuICAgIGhlYWRlci5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgIGhlYWRlcl9hcHAuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgLy8g6K6+572u5biD5bGAXG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiBkZXZpY2Vfc21hbGxfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBkZXZpY2Vfc21hbGxfY2VudGVyfSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG5cbn1cbmZ1bmN0aW9uIGRldmljZV9jZW50ZXIgKCkge1xuICAgIC8vIOS4reetieWwuuWvuO+8muacgOWkpzk4MHB4XG4gICAgY29uc29sZS5sb2coXCLlsI/kuo45ODBweOWwuuWvuFwiKTtcblxuICAgIGhlYWRlci5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgIGhlYWRlcl9hcHAuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgLy8g6K6+572u5biD5bGAXG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiBkZXZpY2VfY2VudGVyX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX2NlbnRlcl9jZW50ZXJ9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcblxufVxuZnVuY3Rpb24gZGV2aWNlX2xhcmdlc3QgKCkge1xuICAgIC8vIOacgOWkp+WwuuWvuO+8muacgOWkpzEyNjFweFxuICAgIGNvbnNvbGUubG9nKFwi5bCP5LqOMTI2MXB45bC65a+4XCIpO1xuXG4gICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgfVxuICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgfVxuICAgIGhlYWRlci5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICBoZWFkZXJfYXBwLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG5cbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IHRocmVlX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3Moe1xuICAgICAgICBcIndpZHRoXCI6IHRocmVlX2N0X2xlZnRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbiAgICBjdF9yaWdodC5jc3Moe1xuICAgICAgICBcIndpZHRoXCI6IHRocmVlX2N0X3JpZ2h0X3dpZHRoLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfSk7XG59XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmJ0bl9wY19zd2l0Y2goKTtcbiAgICAgICAgdGhpcy5idG5fYXBwX3N3aXRjaCgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kZXZpY2Vfc3dpdGNoKCk7IC8vIOi/meS4quaUvuWIsOacgOWQjuiHquiwg+eUqO+8jOWboOS4uuS4jeeuoeacrOWcsOWtmOWCqOaYr+S7gOS5iO+8jOacgOe7iOi/mOaYr+imgeagueaNruiuvuWkh+ebkeWQrOS4uuS4u1xuICAgICAgICB0aGlzLmJyb3dzZXJfcmVtZW1iZXIoKTtcbiAgICB9LFxuICAgIC8qIFBD77ya5Y2VL+WPjC/kuInmoI/luIPlsYDliIfmjaLmjInpkq7ngrnlh7vkuovku7YgKi9cbiAgICBidG5fcGNfc3dpdGNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgYXJyb3dfbGVmdC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8v5bem5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/lt6bkuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCdub25lJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8v5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBhcnJvd19yaWdodC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy/kuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/lt6bkuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCdub25lJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy8g5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIOW3puS4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKiDnp7vliqjnq6/lt6blj7PkuIrop5LnmoTmjInpkq4gKi9cbiAgICBidG5fYXBwX3N3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOeCueWHu+W3puaMiemSrlxuICAgICAgICBidG5fYXBwX3NpZGVyLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhcHBfc2lkZV9nbGFzcy5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAgICAgICAgIGFwcF9zaWRlX2NvbnRlbnQuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDngrnlh7vmr5vnjrvnkoPniYdcbiAgICAgICAgYXBwX3NpZGVfZ2xhc3MuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFwcF9zaWRlX2dsYXNzLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgICAgICAgICBhcHBfc2lkZV9jb250ZW50LmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDngrnlh7vlj7PmjInpkq5cbiAgICAgICAgYnRuX2FwcF9yaWdodC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgYWxlcnQoXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qIOa1j+iniOWZqOiusOS9j+W4g+WxgCAqL1xuICAgIGJyb3dzZXJfcmVtZW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGJfbGVmdCA9ICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIik7XG4gICAgICAgIGxldCBiX3JpZ2h0ID0gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIik7XG4gICAgICAgIGxldCBiX2xheW91dDtcbiAgICBcbiAgICAgICAgLyogXG4gICAgICAgIOacieS4qumXrumimO+8mlxuICAgICAgICAgICAg5LiA5omT5byA5rWP6KeI5Zmo5bCx5Lya5qC55o2u57yT5a2Y5p2l5biD5bGA77yM5bC9566h5L2g55qE6K6+5aSH5a695bqm5bCP5LqOMTI2MHB4XG4gICAgICAgICAgICDkvYbmmK/lr7nkuo7mma7pgJrnlKjmiLfvvIzkuIDkuKrmtY/op4jlmajlk6rmnaXnmoTnu4/luLjlvIDlvIDlj5HogIXmqKHlvI/lkaLvvJ9cbiAgICAgICAgKi9cbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICAgICAgLy8g5rWP6KeI5Zmo5pyJ57yT5a2Y55qE5oOF5Ya1XG4gICAgICAgICAgICBsZXQgbGF5b3V0X2NoYW5nZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pys5Zyw5pyJ6K+l5Y+Y6YeP57yT5a2YXCIpOyAgICBcbiAgICAgICAgICAgIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkxSXCIpe1xuICAgICAgICAgICAgICAgIC8vIOW3puS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYobGF5b3V0X2NoYW5nZSA9PT0gXCJMXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDlt6bkuK3luIPlsYBcbiAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIlJcIikge1xuICAgICAgICAgICAgICAgIC8vIOS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkNcIikge1xuICAgICAgICAgICAgICAgIC8vIOS4reW4g+WxgFxuICAgICAgICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlhbbku5bojqvlkI3lhbblppnnmoTmg4XlhrVcbiAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5rWP6KeI5Zmo5rKh5pyJ57yT5a2Y55qE5oOF5Ya1XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacrOWcsOayoeacieivpeWPmOmHj+e8k+WtmFwiKTtcbiAgICAgICAgICAgIGlmICgoYl9sZWZ0ID09PSBcImJsb2NrXCIpICYmIChiX3JpZ2h0ID09PSBcIm5vbmVcIikpIHsgLy8g5bem5Lit5biD5bGAXG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIkxcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGJfbGVmdCA9PT0gXCJub25lXCIpICYmIChiX3JpZ2h0ID09PSBcImJsb2NrXCIpKSB7IC8vIOS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJSXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChiX2xlZnQgPT09IFwiYmxvY2tcIikgJiYgKGJfcmlnaHQgPT09IFwiYmxvY2tcIikpIHsgLy/lt6bkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBiX2xheW91dCA9IFwiTFJcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiX2xheW91dCA9IFwiTFJcIjtcbiAgICAgICAgICAgICAgICAvLyDlt6bkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIGJfbGF5b3V0KVxuICAgICAgICB9XG5cblxuICAgIH0sXG4gICAgLyog5aqS5L2T5p+l6K+i5biD5bGAICovXG4gICAgZGV2aWNlX3N3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOWIm+W7uuafpeivouWIl+ihqFxuICAgICAgICBsZXQgZGV2aWNlX3dpZHRoID0gW1xuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDU2MHB4KScpLFxuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk4MHB4KScpLFxuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEyNjFweCknKVxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIOWumuS5ieWbnuiwg+WHveaVsFxuICAgICAgICBmdW5jdGlvbiBtZWRpYU1hdGNocyAoKSB7XG4gICAgICAgICAgICBpZiAoZGV2aWNlX3dpZHRoWzBdLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBkZXZpY2Vfc21hbGwgKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRldmljZV93aWR0aFsxXS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgZGV2aWNlX2NlbnRlciAoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX3dpZHRoWzJdLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBkZXZpY2VfbGFyZ2VzdCAoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlpKfkuo7orr7lrprmnIDlpKflsLrlr7jmg4XlhrVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5YWI6L+Q6KGM5LiA5qyh5Zue6LCD5Ye95pWwXG4gICAgICAgIG1lZGlhTWF0Y2hzKCk7XG4gICAgICAgIC8vIOS4uuafpeivouWIl+ihqOazqOWGjOebkeWQrOWZqO+8jOWQjOaXtuWwhuWbnuiwg+WHveaVsOS8oOe7meebkeWQrOWZqFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRldmljZV93aWR0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGV2aWNlX3dpZHRoW2ldLmFkZExpc3RlbmVyKG1lZGlhTWF0Y2hzKTtcbiAgICAgICAgfVxuICAgIH0sXG59XG5cblxuIiwiaW1wb3J0IGxheW91dF9vYmplY3QgZnJvbSAnLi9jb21tb24vbGF5b3V0LmpzJztcbmltcG9ydCB0b2Nfb2JqZWN0IGZyb20gJy4vcGFydC90b2MuanMnO1xuaW1wb3J0IGNvbW1lbnRzX29iamVjdCBmcm9tICcuL3BhcnQvY29tbWVudHMuanMnO1xuaW1wb3J0IHtnb190b3Bfb2JqZWN0LGdldFNjcm9sbH0gZnJvbSAnLi9wYXJ0L2dvX3RvcC5qcyc7XG5pbXBvcnQgd2ViX2luZm9fb2JqZWN0IGZyb20gJy4vcGFydC93ZWJfaW5mby5qcyc7XG5pbXBvcnQgc2VhcmNoX29iamVjdCBmcm9tICcuL3BhcnQvc2VhcmNoLmpzJztcbmltcG9ydCBzaGFyZV9vYmplY3QgZnJvbSAnLi9wYXJ0L3NoYXJlYnV0dG9uLmpzJztcbmltcG9ydCBjYXRlZ29yaWVzX29iamVjdCBmcm9tICcuL3BhcnQvY2F0ZWdvcmllcy5qcyc7XG4vLyDliJ3lp4vljJZoaWdobGlnaHTohJrmnKxcbmhsanMuaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpO1xuXG4vLyDln5/lkI3ph43lrprlkJFcbmlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICd3enRsaW5rMTAxMy5jb20nKSB7XG4gICAgbG9jYXRpb24ucmVwbGFjZShsb2NhdGlvbi5ocmVmLnJlcGxhY2UoJ3d6dGxpbmsxMDEzLmNvbScsICd3d3cud3p0bGluazEwMTMuY29tJykpO1xufVxuXG4vLyBUT0RPOiDmkJzntKLlip/og71cbi8vIOebuOW9k+S6juiOt+W+l+S6huWFtmFwaVxuY29uc3QgYWxnb2xpYUNvbmZpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJhbGdvbGlhOnNlYXJjaFwiXScpLmRhdGFzZXQ7XG5jb25zdCBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKGFsZ29saWFDb25maWcuYXBwbGljYXRpb25JZCwgYWxnb2xpYUNvbmZpZy5hcGlLZXkpO1xuY29uc3QgaW5kZXggPSBjbGllbnQuaW5pdEluZGV4KGFsZ29saWFDb25maWcuaW5kZXhOYW1lKTtcblxuY29uc29sZS5sb2coYWxnb2xpYUNvbmZpZyk7XG5jb25zb2xlLmxvZyhjbGllbnQpO1xuY29uc29sZS5sb2coaW5kZXgpO1xuXG5cbi8vIOWFpeWPo+WHveaVsO+8jOS8muWcqOmhtemdouWKoOi9veWujOavleaJp+ihjFxuJChmdW5jdGlvbigpe1xuICAgIC8vIOWIneWni+WMluebruW9leiEmuacrOWHveaVsFxuICAgIHRvY19vYmplY3QuaW5pdCgpO1xuICAgIC8vIOWIneWni+WMluivhOiuuuaooeWdl+S4i+aJgOacieWHveaVsFxuICAgIGNvbW1lbnRzX29iamVjdC5pbml0KCk7XG4gICAgLy8g5Yid5aeL5YyW5Zue5Yiw6aG26YOoXG4gICAgZ29fdG9wX29iamVjdC5pbml0KCk7XG4gICAgLy8g5biD5bGA5Yid5aeL5YyWXG4gICAgbGF5b3V0X29iamVjdC5pbml0KCk7XG4gICAgc2VhcmNoX29iamVjdC5pbml0KCk7XG4gICAgLy8g5YWl5Y+j5Ye95pWw5Yid5aeL5YyW572R56uZ6L+Q6KGM5pe26Ze0XG4gICAgd2ViX2luZm9fb2JqZWN0LmluaXQoKTtcbiAgICAvLyDliIbkuqvmjInpkq7nmoTliJ3lp4vljJZcbiAgICBzaGFyZV9vYmplY3QuaW5pdCgpO1xuICAgIC8vIOebruW9leWHveaVsOWIneWni+WMllxuICAgIGNhdGVnb3JpZXNfb2JqZWN0LmluaXQoKTtcbiAgICAvLyDlpLTlm77kvJjljJbku6PnoIFcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYXJ0aWNsZV9pbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFydGNsZV9saXN0X2l0ZW1faW1nXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDtpPGFydGljbGVfaW1nLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGxldCB3aWQgPSBhcnRpY2xlX2ltZ1tpXS5maXJzdEVsZW1lbnRDaGlsZC53aWR0aCArIDU7XG4gICAgICAgICAgICBsZXQgaGVpID0gYXJ0aWNsZV9pbWdbaV0uZmlyc3RFbGVtZW50Q2hpbGQuaGVpZ2h0ICsgNztcbiAgICAgICAgICAgIGFydGljbGVfaW1nW2ldLnN0eWxlLm1heFdpZHRoID0gd2lkICsgXCJweFwiOyBcbiAgICAgICAgICAgIGFydGljbGVfaW1nW2ldLnN0eWxlLm1heEhlaWdodCA9IGhlaSArIFwicHhcIjsgXG4gICAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgICAvLyAvLyDnmb7luqbnu5/orqHku6PnoIFcbiAgICAvLyB2YXIgX2htdCA9IF9obXQgfHwgW107XG4gICAgLy8gKGZ1bmN0aW9uKCkge1xuICAgIC8vIHZhciBobSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgLy8gdmFyIGFuYWx5dGljc19iZCA9ICc5NTg3YzVmOTUxMDMwMmJjMjdhMmM1NmM3ZmQ0ODQ1ZSc7XG4gICAgLy8gaG0uc3JjID0gWydodCcsICd0JywgJ3BzJywgJzovJywgJy9oJywgJ20nLCAnLicsICdiYScsICdpJywgJ2QnLCAndS5jJywgJ28nLCAnbS8nLCAnaCcsICdtJywgJy5qJywgJ3M/JywgYW5hbHl0aWNzX2JkXS5qb2luKCcnKTtcbiAgICAvLyB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xuICAgIC8vIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaG0sIHMpO1xuICAgIC8vIH0pKCk7XG59KVxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub3Blbl9jbG9zZV9mb3JkZXJfcGx1cygpO1xuICAgICAgICB0aGlzLmhpdF9vcGVuX2Nsb3NlX2ZvcmRlcigpO1xuICAgICAgICB0aGlzLnJlYWRtb3JlX2Jsb2dfZXNzYXkoKTtcbiAgICB9LFxuICAgIC8vIOeCueWHu2ljb27lsZXlvIAv5YWz6Zet5qCR5YiG57G7XG4gICAgaGl0X29wZW5fY2xvc2VfZm9yZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGNhdGVfY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlX2NlbGwnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7aTxjYXRlX2NlbGwubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZiAoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyl7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSAkKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsxXSk7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID09PSBcImlubGluZS1ibG9ja1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhrPlrprlk6rkupvpnIDopoHmmL7npLppY29uXG4gICAgb3Blbl9jbG9zZV9mb3JkZXJfcGx1czogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBjYXRlX2NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZV9jZWxsJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwO2k8Y2F0ZV9jZWxsLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgLy8g5p+l55yL56ys5LiJ5Liq5a2Q6IqC54K55piv5ZCm5pyJ5YWD57SgXG4gICAgICAgICAgICBpZihjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uY2hpbGRyZW4ubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgICAgICAgICAvLyDmmL7npLrml4HovrnnmoRpY29uXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOS4jeaYvuekuuaXgei+ueeahGljb25cbiAgICAgICAgICAgICAgICBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICAvLyDmn6XnnIvmm7TlpJrpobXpnaLvvIzkvJjljJbljZrlrqIv6ZqP56yU5pi+56S6XG4gICAgcmVhZG1vcmVfYmxvZ19lc3NheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYXJjaGl2ZXMvXCIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgICAvLyDljrvmjonnrKzkuIDkuKrvvJ/lrZfnrKZcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSBsb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpO1xuICAgICAgICAgICAgLy8g5qC55o2uPeWPt+WIkuWIhuWPguaVsFxuICAgICAgICAgICAgbGV0IGFyciA9IHBhcmFtcy5zcGxpdCgnPScpO1xuICAgICAgICAgICAgLy8g6I635Y+WcGFnZV90eXBl5Y+C5pWwXG4gICAgICAgICAgICBsZXQgcGFnZV90eXBlID0gYXJyWzFdO1xuICAgICAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFyY2hpdmVfYXJ0aWNsZV9saXN0Jyk7XG4gICAgICAgICAgICBmb3IgKGxldCB1ID0gMDt1PHVsLmxlbmd0aDt1KyspIHtcbiAgICAgICAgICAgICAgICAvLyDlr7nmr4/kuIDkuKpsaei/m+ihjOWIpOaWre+8jOWmguaenOS4jeaYr+WPguaVsOeahOWAvO+8jOWwsei/m+ihjOmakOiXj1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwO2k8dWxbdV0uY2hpbGRyZW4ubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB1bFt1XS5jaGlsZHJlbltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAnZHNhbCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAnYmxvZyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBwYWdlX3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsW3VdLmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxu44CQ5paH56ug6K6/6Zeu6YeP5o6S5ZCN44CRXG4gICAg5paH56ug6ZiF6K+76YeP5Zyo5Y2V5Liq5paH56ug5Lit5Y+v5Lul5pi+56S65L2G5piv5LiN6IO95o6S5ZCN77yM5o6S5ZCN5oCO5LmI5a6e546w5ZGi77yfXG4gICAg5pa55qGIMe+8muS9v+eUqHZhbGluZVxuICAgIOaWueahiDLvvJrlnKjmnI3liqHlmajkuIrov5vooYzlhajnq5nnmoTmlofnq6Dorr/pl67vvIzmj5Dlj5bku5bku6znmoTorr/pl67ph49pZFxuICAgIOaWueahiDPvvJrlr7l0d2lrb2/kupHlh73mlbDov5vooYzku6PnoIHmm7TmlLnvvIznsbvkvLzorr/pl67ph49hcGlcbiBcbuOAkOivhOiuuuWIh+aNouaMiemSruOAkVxuICAgIOWIh+aNonV0dGVyYW5jZXPor4TorrrlkI7vvIzpobXpnaLkvJrliLfmlrDkuIDkuIvnhLblkI7lj4jlm57liLDpu5jorqTor4Torrrns7vnu5/kuobvvIzov5nkuKrlj6/ku6XkvJjljJZcblxu44CQ5pyA5paw6K+E6K6644CRXG4gICAg5pyA5paw6K+E6K6657uE5Lu277yM5aaC5p6cYmxvZ+mhtemdoueUqOS6hu+8jOmCo+S5iOi/meS4que7hOS7tuWwseS4jeiDveaUvuWcqOenu+WKqOerr+S+p+i+ueagj+S6hu+8jFxuICAgIOWQjOS4gOS4qmlk5LiN6IO95aSa5qyh55So55qE57yY5pWF5ZCX77yfXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbi8vIOWvvOWHuuS4uuS4gOS4quWvueixoVxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdvX2NvbW1lbnRzKCk7XG4gICAgdGhpcy5jb21tZW50c19jb3VudCgpO1xuICAgIHRoaXMubmV3X2NvbW1lbnRzKCk7XG4gICAgdGhpcy5zd2l0Y2hfY29tbWVudCgpO1xuICB9LFxuICAvLyDmmK/lkKbliY3lvoDor4TorrrljLpcbiAgZ29fY29tbWVudHM6IGZ1bmN0aW9uKCl7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb19jb21tZW50cycpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH0sXG4gIC8vIOaWh+eroOivhOiuuuaVsFxuICBjb21tZW50c19jb3VudDogZnVuY3Rpb24oKSB7XG4gICAgLy8g5Yik5pat6aG16Z2i5piv5ZCm5pyJ6K+E6K665Yy6aWTlkozlvJXnlKjor4TorrrmlbDnmoRpZFxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMnKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJykpIHtcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJyk7XG4gICAgICAvLyBCT03ojrflj5bpobXpnaJ1cmznmoRwYXRobmFtZei3r+W+hFxuICAgICAgdmFyIHR3aWtvb19jb21tZW50c191cmwgPSBbbG9jYXRpb24ucGF0aG5hbWVdO1xuXG4gICAgICB0d2lrb28uZ2V0Q29tbWVudHNDb3VudCh7XG4gICAgICAgIGVudklkOiAnd2Vic2l0ZS13aWtvby00ZzQ2azhkbzk4ODY3NTQyJywgLy8g546v5aKDIElEXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICB1cmxzOiB0d2lrb29fY29tbWVudHNfdXJsLC8vIOS4jeWMheWQq+WNj+iuruOAgeWfn+WQjeOAgeWPguaVsOeahOaWh+eroOi3r+W+hOWIl+ihqO+8jOW/heS8oOWPguaVsFxuICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlIC8vIOivhOiuuuaVsOaYr+WQpuWMheaLrOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgLy8g5bCG6K+E6K665pWw5YaZ5YWl5YW25LitXG4gICAgICAgIHR3aWtvb19jb21tZW50cy5pbm5lclRleHQgPSByZXNbMF0uY291bnQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIC8vIOi/lOWbnuekuuS+izogW1xuICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTAvcG9zdC0xLmh0bWwnLCBjb3VudDogMTAgfSxcbiAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzExL3Bvc3QtMi5odG1sJywgY291bnQ6IDAgfSxcbiAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEyL3Bvc3QtMy5odG1sJywgY291bnQ6IDIwIH1cbiAgICAgICAgLy8gXVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAvLyDlj5HnlJ/plJnor69cbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyDmnIDmlrDor4TorrpcbiAgbmV3X2NvbW1lbnRzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaG90X2FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdF9hcnRpY2xlc19pdGVtJyk7XG4gICAgdmFyIHBhZ2Vfc2l6ZSA9IDg7XG4gICAgdHdpa29vLmdldFJlY2VudENvbW1lbnRzKHtcbiAgICAgICAgZW52SWQ6ICd3ZWJzaXRlLXdpa29vLTRnNDZrOGRvOTg4Njc1NDInLCAvLyDnjq/looMgSURcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlX3NpemUsIC8vIOiOt+WPluWkmuWwkeadoe+8jOm7mOiupO+8mjEw77yM5pyA5aSn77yaMTAwXG4gICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UgLy8g5piv5ZCm5YyF5ous5pyA5paw5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdfY29tbWVudHNfbG9kaW5nJyk7XG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudCA9IG5ld19jb21tZW50c19sb2RpbmcucGFyZW50RWxlbWVudDtcbiAgICAgICAgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQucmVtb3ZlQ2hpbGQobmV3X2NvbW1lbnRzX2xvZGluZyk7XG4gICAgICAgIC8vIOaPkuWFpeivhOiuulxuICAgICAgICBmb3IgKHZhciBpID0gMDtpPHBhZ2Vfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKHJlc1tpXS5jb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2NvbnRlbnQgPSByZXNbaV0uY29tbWVudDtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfbmljayA9IHJlc1tpXS5uaWNrO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c191cmwgPSByZXNbaV0udXJsO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19hdmF0YXIgPSByZXNbaV0uYXZhdGFyO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c190aW1lID0gcmVzW2ldLnJlbGF0aXZlVGltZTtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfaWQgPSAnIycgKyByZXNbaV0uaWQ7XG4gICAgXG4gICAgICAgICAgICB2YXIgaG90X2FydGljbGVzX2NoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlc19jaGlsZC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIml0ZW1fdXBcIj48aW1nIHNyYz1cIicgKyBuZXdfY29tbWVudHNfYXZhdGFyICsgJ1wiIGNsYXNzPVwiYXZhdGFyXCI+PGRpdiBjbGFzcz1cIm5pY2tfbmFtZVwiPjxzcGFuIGNsYXNzPVwibmlja1wiPicgKyBuZXdfY29tbWVudHNfbmljayArICc8L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JyArIG5ld19jb21tZW50c190aW1lICsgJzwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiaXRlbV9kb3duXCI+PGEgaHJlZj1cIicgKyBuZXdfY29tbWVudHNfdXJsICsgbmV3X2NvbW1lbnRzX2lkICsgJ1wiPicgKyBuZXdfY29tbWVudHNfY29udGVudCArICc8L2E+PC9kaXY+JztcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlcy5hcHBlbmQoaG90X2FydGljbGVzX2NoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH0sXG4gIC8vIOWIh+aNouivhOiuulxuICBzd2l0Y2hfY29tbWVudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN3aXRjaF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3dpdGNoX2J0bicpO1xuICAgIHZhciB1dHRlcmFuY2VzX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXR0ZXJhbmNlc19jb21tZW50Jyk7XG4gICAgdmFyIHR3aWtvb19jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50Jyk7XG4gICAgXG4gICAgc3dpdGNoX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBzd2l0Y2hfYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJtb3ZlXCIpO1xuICAgICAgdXR0ZXJhbmNlc19jb21tZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRlbnQtaW4nKTtcbiAgICAgIHR3aWtvb19jb21tZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRlbnQtaW4nKTtcbiAgICAgIFxuICAgICAgaWYodXR0ZXJhbmNlc19jb21tZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICB1dHRlcmFuY2VzX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGlmICghdXR0ZXJhbmNlc19jb21tZW50LmNoaWxkcmVuWzBdKSB7XG4gICAgICAgICAgLy8gQmVhdWRhciDor4Torrrns7vnu59cbiAgICAgICAgICB2YXIgc2NyaXB0X3V0dGVyYW5jZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNyYz1cImh0dHBzOi8vYmVhdWRhci5saXBrLm9yZy9jbGllbnQuanNcIiA7XG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwicmVwb1wiLFwid3p0bGluazEwMTMvY29tbWVudFwiKTtcbiAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJpc3N1ZS10ZXJtXCIsXCJ0aXRsZVwiKTtcbiAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJsYWJlbFwiLFwi8J+SrGNvbW1lbnRcIik7XG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwidGhlbWVcIixcImdpdGh1Yi1saWdodFwiKTtcbiAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJjcm9zc29yaWdpblwiLFwiYW5vbnltb3VzXCIpO1xuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImJyYW5jaFwiLFwibWFzdGVyXCIpO1xuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImxvYWRpbmdcIixcInRydWVcIik7XG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwiY29tbWVudC1vcmRlclwiLFwiZGVzY1wiKTtcbiAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJpbnB1dC1wb3NpdGlvblwiLFwidG9wXCIpO1xuICAgICAgICAgIHV0dGVyYW5jZXNfY29tbWVudC5hcHBlbmRDaGlsZChzY3JpcHRfdXR0ZXJhbmNlcyk7IFxuICAgICAgICB9XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIC8vIFR3aWtvbyDor4Torrrns7vnu59cbiAgICAgICAgdXR0ZXJhbmNlc19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAg57yT5oWi5pi+56S6XG4gICAgICAgIOe8k+aFouWbnuWIsOmhtumDqFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIGxldCBnb190b3Bfb2JqZWN0ID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmdvX3RvcCgpO1xuICAgICAgICB0aGlzLmNsaWNrX2dvX3RvcCgpO1xuICAgIH0sXG4gICAgZ29fdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyDmu5rliqjmmL7npLpnb190b3DmjInpkq5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAvLyDmjIHnu63nm5HlkKzmu5rliqjnirbmgIFcbiAgICAgICAgICAgIGdldFNjcm9sbCgpLnRvcCAhPT0gMCA/ICQoXCIjZ29fdG9wXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKSA6ICQoXCIjZ29fdG9wXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBjbGlja19nb190b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDngrnlh7vlm57liLDpobbpg6hcbiAgICAgICAgJChcIiNnb190b3BcIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vLyBzY3Jvb2xUb3DlhbzlrrnmgKfmlrnmoYhcbmZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcbiAgICByZXR1cm4ge1xuICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnR8fDAsXG4gICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwXG4gICAgfTtcbn1cblxuXG4vLyDlpoLmnpzkuI3lgZrpu5jorqTlr7zlhaXvvIzlsLHmjInnhafkuIvpnaLlhpnvvIzkuI3opoFkZWZhdWx06K+NXG5leHBvcnQge1xuICAgIGdvX3RvcF9vYmplY3QsIC8v5a+85Ye65a+56LGhXG4gICAgZ2V0U2Nyb2xsLCAvL+WvvOWHuumAmueUqOWHveaVsFxufVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9LFxuICAgIHNlYXJjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpbnB1dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLXNlYXJjaC1pbnB1dFwiKTtcblxuICAgICAgICBpZiAoaW5wdXRBcmVhKSB7XG4gICAgICAgICAgICBpbnB1dEFyZWEub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLnBsYWNlaG9sZGVyID0gJ+mmluasoeaQnOe0omluZ8K3wrfCtyc7XG4gICAgICAgICAgICAgICAgZ2V0U2VhcmNoRmlsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25jbGljayA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpbnB1dEFyZWEub25rZXlkb3duID0gZnVuY3Rpb24oKSB7IGlmIChldmVudC5rZXlDb2RlID09IDEzKSByZXR1cm4gZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJTZWFyY2goJHJlc3VsdENvbnRlbnQpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIHNlYXJjaCByZXN1bHRcbiAgICAgICAgICAgIHZhciBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWNsb3NlXCIpO1xuICAgICAgICAgICAgYnRuQ2xvc2Uub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEucGxhY2Vob2xkZXIgPSAn6K+36L6T5YWl5YWz6ZSu6K+NJztcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEuZm9jdXMoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciBzZWFyY2hGdW5jID0gZnVuY3Rpb24ocGF0aCwgc2VhcmNoX2lkLCBjb250ZW50X2lkKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB2YXIgQlROID0gXCI8ZGl2IGlkPSdsb2NhbC1zZWFyY2gtY2xvc2UnPua4heepuuaQnOe0ojwvZGl2PlwiXG4gICAgICAgICAgICB2YXIgJGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VhcmNoX2lkKTtcbiAgICAgICAgICAgIHZhciAkcmVzdWx0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRlbnRfaWQpO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHBhdGgsIHRydWUpO1xuICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3VtZSBpbnB1dFxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnBsYWNlaG9sZGVyID0gJ+i+k+WFpeWFs+mUruivjeS7peaQnOe0oic7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5mb2N1cygpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhtbCA9IHhoci5yZXNwb25zZVhNTDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvb3QgPSB4bWwuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IHJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJlbnRyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRpdGxlXCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY29udGVudFwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXJsXCIpWzBdLmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gJzx1bCBjbGFzcz1cXFwiYXJjaGl2ZVxcXCI+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXl3b3JkcyA9IHRoaXMudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHNcXC1dKy8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLnRyaW0oKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmnKzlnLDmkJzntKLkuLvku6PnoIFcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudF9pbmRleCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS50aXRsZSB8fCBkYXRhLnRpdGxlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50aXRsZSA9IFwiVW50aXRsZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdfZGF0YV90aXRsZSA9IGRhdGEudGl0bGUudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhX3RpdGxlID0gb3JpZ19kYXRhX3RpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdfZGF0YV9jb250ZW50ID0gZGF0YS5jb250ZW50LnRyaW0oKS5yZXBsYWNlKC88W14+XSs+L2csIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhX2NvbnRlbnQgPSBvcmlnX2RhdGFfY29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhX3VybCA9IGRhdGEudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleF90aXRsZSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleF9jb250ZW50ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpcnN0X29jY3VyID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25seSBtYXRjaCBhcnRpbGVzIHdpdGggbm90IGVtcHR5IGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFfY29udGVudCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleF90aXRsZSA9IGRhdGFfdGl0bGUuaW5kZXhPZihrZXl3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4X2NvbnRlbnQgPSBkYXRhX2NvbnRlbnQuaW5kZXhPZihrZXl3b3JkKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhfdGl0bGUgPCAwICYmIGluZGV4X2NvbnRlbnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhfY29udGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfY29udGVudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Rfb2NjdXIgPSBpbmRleF9jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50X2luZGV4LnB1c2goe2luZGV4X2NvbnRlbnQ6aW5kZXhfY29udGVudCwga2V5d29yZF9sZW46a2V5d29yZF9sZW59KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlsZXnpLrnu5PmnpxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiDlvoXlrozlloTvvIzlvoXlrozlloRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPGxpPjxhIGhyZWY9J1wiICtsb2NhdGlvbi5wcm90b2NvbCtcIi8vXCIrbG9jYXRpb24uaG9zdCtcIi9cIisgZGF0YV91cmwgKyBcIicgY2xhc3M9J2FyY2hpdmUtdGl0bGUnPlwiICsgb3JpZ19kYXRhX3RpdGxlICsgXCI8L2E+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdF9vY2N1ciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXQgb3V0IDEwMCBjaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBmaXJzdF9vY2N1ciAtIDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZCA9IGZpcnN0X29jY3VyICsgMzA7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IDQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbmQgPiBjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IGNvbnRlbnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hfY29udGVudCA9IGNvbnRlbnQuc3Vic3RyKHN0YXJ0LCAxMDApO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhpZ2hsaWdodCBhbGwga2V5d29yZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWdTID0gbmV3IFJlZ0V4cChrZXl3b3JkLCBcImdpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoX2NvbnRlbnQgPSBtYXRjaF9jb250ZW50LnJlcGxhY2UocmVnUywgXCI8ZW0gY2xhc3M9XFxcInNlYXJjaC1rZXl3b3JkXFxcIj5cIiArIGtleXdvcmQgKyBcIjwvZW0+XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPHAgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiICsgbWF0Y2hfY29udGVudCArIFwiLi4uPC9wPlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPC9saT5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjwvdWw+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoJzxsaT4nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBCVE4gKyBcIjxkaXYgY2xhc3M9J2xvY2FsLXNlYXJjaC1lbXB0eSc+5rKh5pyJ5om+5Yiw5L2g5omA6KaB5pCc57Si55qE5YaF5a654oCm4oCmPC9kaXY+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IEJUTiArIHN0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclNlYXJjaCgkcmVzdWx0Q29udGVudClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHZhciBnZXRTZWFyY2hGaWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcGF0aCA9IFwiL3NlYXJjaC54bWxcIjtcbiAgICAgICAgICAgIHNlYXJjaEZ1bmMocGF0aCwgJ2xvY2FsLXNlYXJjaC1pbnB1dCcsICdsb2NhbC1zZWFyY2gtcmVzdWx0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyDlhajlsYDmjInpkq7orr7nva5qc+aYr+WQpuWxleekuuaQnOe0ouahhlxuICAgICAgICB2YXIgZ2xvYmFsX2J1dHRvbl9zZWFyY2hfYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaF9idG4nKTtcbiAgICAgICAgZ2xvYmFsX2J1dHRvbl9zZWFyY2hfYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2FsLXNlYXJjaC1pbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHZhciBzZWFyY2hfY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2Nsb3NlJyk7XG4gICAgICAgIHNlYXJjaF9jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG59XG5cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBuZWVkU2hhcmVCdXR0b25cbiAgLSBWZXJzaW9uIDEuMC4wXG4gIC0gQ29weXJpZ2h0IDIwMTUgRHptaXRyeSBWYXNpbGV1c2tpXG5cdC0gTGljZW5zZWQgdW5kZXIgTUlUIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUKVxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGFyZSgpO1xuICAgIH0sXG4gICAgc2hhcmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gZmluZCBjbG9zZXN0XG4gICAgZnVuY3Rpb24gY2xvc2VzdChlbGVtLCBwYXJlbnQpIHtcbiAgICAgIGlmICh0eXBlb2YocGFyZW50KSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICB2YXIgbWF0Y2hlc1NlbGVjdG9yID0gZWxlbS5tYXRjaGVzIHx8IGVsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW0ubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW0ubXNNYXRjaGVzU2VsZWN0b3I7XG4gIFxuICAgICAgICAgICAgICBpZiAoISFtYXRjaGVzU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlc1NlbGVjdG9yLmJpbmQoZWxlbSkocGFyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgIGlmIChlbGVtID09IHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gc2hhcmUgYnV0dG9uIGNsYXNzXG4gICAgICB3aW5kb3cubmVlZFNoYXJlQnV0dG9uID0gZnVuY3Rpb24oZWxlbSwgb3B0aW9ucykge1xuICAgICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50IHJlZmVyZW5jZVxuICAgICAgICAgIHZhciByb290ID0gdGhpcztcbiAgICAgICAgICByb290LmVsZW0gPSBlbGVtIHx8ICduZWVkLXNoYXJlLWJ1dHRvbic7XG4gIFxuICAgICAgICAgIC8qIEhlbHBlcnNcbiAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgXG4gICAgICAvLyBnZXQgdGl0bGUgZnJvbSBodG1sXG4gICAgICByb290LmdldFRpdGxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgLy8gY2hlY2sgcXVlcnlTZWxlY3RvciBleGlzdGFuY2UgZm9yIG9sZCBicm93c2Vyc1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6dGl0bGVcIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOnRpdGxlXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb2N1bWVudC50aXRsZTtcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIC8vIGdldCBpbWFnZSBmcm9tIGh0bWxcbiAgICAgICAgcm9vdC5nZXRJbWFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgIC8vIGNoZWNrIHF1ZXJ5U2VsZWN0b3IgZXhpc3RhbmNlIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJvZzppbWFnZVwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIC8vIGdldCBkZXNjcmlwdGlvbiBmcm9tIGh0bWxcbiAgICAgICAgcm9vdC5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgIC8vIGNoZWNrIHF1ZXJ5U2VsZWN0b3IgZXhpc3RhbmNlIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkZXNjcmlwdGlvblwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpLm5hbWVkSXRlbSgnZGVzY3JpcHRpb24nKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBzaGFyZSB1cmxzIGZvciBhbGwgbmV0d29ya3NcbiAgICAgICAgcm9vdC5zaGFyZSA9IHtcbiAgICAgICAgICAgICd3ZWlibyc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vdi50LnNpbmEuY29tLmNuL3NoYXJlL3NoYXJlLnBocD90aXRsZT0nXG4gICAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICAgICsgXCImdXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICAgICsgXCImcGljPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnd2VjaGF0JzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgaW1nU3JjID0gJ2h0dHBzOi8vYXBpLnFyc2VydmVyLmNvbS92MS9jcmVhdGUtcXItY29kZS8/c2l6ZT0xNTB4MTUwJmRhdGE9JytlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgIHZhciBkcm9wZG93bkVsID0gZWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duJyk7XG4gICAgICAgICAgICAgIHZhciBpbWcgPSBkcm9wZG93bkVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKVswXTtcbiAgICAgICAgICAgICAgdmFyIGxvYWRlciA9IGRyb3Bkb3duRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmVlZC1zaGFyZS1sb2FkZXInKVswXTtcbiAgXG4gICAgICAgICAgICAgICAgaWYgKGltZykge1xuICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZihsb2FkZXIpIHtcbiAgICAgICAgICAgIGxvYWRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsb2FkZXIuY2xhc3NOYW1lID0gJ25lZWQtc2hhcmUtbG9hZGVyJztcbiAgICAgICAgICAgIGxvYWRlci5pbm5lclRleHQgPSAnbG9hZGluZy4uLic7XG4gICAgICAgICAgICBsb2FkZXIudGl0bGUgPSAnbG9hZGluZyBxcmNvZGUuLi4nO1xuICBcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpbWdTcmM7XG4gICAgICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnQ3JlYXRlIHFyY29kZSBmYWlsZWQhJztcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCduZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJyk7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChsb2FkZXIuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcm9wZG93bkVsLmFwcGVuZENoaWxkKGxvYWRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAnZG91YmFuJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwczovL3d3dy5kb3ViYW4uY29tL3NoYXJlL3NlcnZpY2U/bmFtZT0nXG4gICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgKyBcIiZocmVmPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICArIFwiJmltYWdlPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAncXF6b25lJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vc25zLnF6b25lLnFxLmNvbS9jZ2ktYmluL3F6c2hhcmUvY2dpX3F6c2hhcmVfb25la2V5P3RpdGxlPSdcbiAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICArIFwiJnVybD1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgKyBcIiZwaWNzPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpXG4gICAgICAgICAgICAgICsgXCImZGVzYz1cIisgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdyZW5yZW4nOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly93aWRnZXQucmVucmVuLmNvbS9kaWFsb2cvc2hhcmU/dGl0bGU9J1xuICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICsgXCImcmVzb3VyY2VVcmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICsgXCImcGljPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpXG4gICAgICAgICAgICAgICsgXCImZGVzY3JpcHRpb249XCIrIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgfSxcbiAgXG4gICAgICAgICAgICAnbWFpbHRvJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gJ21haWx0bzo/c3ViamVjdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSkgKyAnJmJvZHk9VGhvdWdodCB5b3UgbWlnaHQgZW5qb3kgcmVhZGluZyB0aGlzOiAnICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpICsgJyAtICcgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3R3aXR0ZXInIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSkgKyBcIiZ1cmw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncGludGVyZXN0JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3BpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9ib29rbWFya2xldC8/aXNfdmlkZW89ZmFsc2UnO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJm1lZGlhPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZkZXNjcmlwdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZmFjZWJvb2snIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmZhY2Vib29rLmNvbS9zaGFyZS5waHA/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZ29vZ2xlcGx1cycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwbHVzLmdvb2dsZS5jb20vc2hhcmU/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3JlZGRpdCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cucmVkZGl0LmNvbS9zdWJtaXQ/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdkZWxpY2lvdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnZGVsLmljaW8udXMvcG9zdD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJm5vdGVzPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICd0YXBpdHVyZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndGFwaXR1cmUuY29tL2Jvb2ttYXJrbGV0L2ltYWdlPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnaW1nX3NyYz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnBhZ2VfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnBhZ2VfdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAnc3R1bWJsZXVwb24nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdsaW5rZWRpbicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUnO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnVybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZzb3VyY2U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuc291cmNlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICdzbGFzaGRvdCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnc2xhc2hkb3Qub3JnL2Jvb2ttYXJrLnBsPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gJ3RlY2hub3JhdGknIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3RlY2hub3JhdGkuY29tL2ZhdmVzPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnYWRkPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgJ3Bvc3Rlcm91cycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwb3N0ZXJvdXMuY29tL3NoYXJlPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICdsaW5rdG89JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd0dW1ibHInIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LnR1bWJsci5jb20vc2hhcmU/dj0zJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAnZ29vZ2xlYm9va21hcmtzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZ29vZ2xlLmNvbS9ib29rbWFya3MvbWFyaz9vcD1lZGl0JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmYmttaz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmFubm90YXRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAnbmV3c3ZpbmUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5uZXdzdmluZS5jb20vX3Rvb2xzL3NlZWQmc2F2ZT8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ3U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmaD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vICdwaW5nZm0nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3BpbmcuZm0vcmVmLz8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2xpbms9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZib2R5PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgJ2V2ZXJub3RlJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5ldmVybm90ZS5jb20vY2xpcC5hY3Rpb24/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdmcmllbmRmZWVkJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5mcmllbmRmZWVkLmNvbS9zaGFyZT8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3Zrb250YWt0ZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd2a29udGFrdGUucnUvc2hhcmUucGhwPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgIHVybCArPSAnJmltYWdlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICB1cmwgKz0gJyZub3BhcnNlPXRydWUnO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ29kbm9rbGFzc25pa2knIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lm9kbm9rbGFzc25pa2kucnUvZGs/c3QuY21kPWFkZFNoYXJlJnN0LnM9MSc7XG4gICAgICAgICAgdXJsICs9ICcmc3QuY29tbWVudHM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgIHVybCArPSAnJnN0Ll9zdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAnbWFpbHJ1JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdjb25uZWN0Lm1haWwucnUvc2hhcmU/JztcbiAgICAgICAgLy8gICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAvLyAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy8gICB1cmwgKz0gJyZkZXNjcmlwdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vICAgdXJsICs9ICcmaW1hZ2V1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH1cbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIG9wZW4gc2hhcmUgbGluayBpbiBhIHBvcHVwXG4gICAgICAgIHJvb3QucG9wdXAgPSBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgdmFyIGxlZnQsIHRvcDsgXG4gIFxuICAgICAgICB2YXIgcG9wdXBXaWR0aCA9IDYwMCxcbiAgICAgICAgICAgIHBvcHVwSGVpZ2h0ID0gNTAwO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIGNhY3VsYXRlIGJyb3dzZXIgd2luZG93IHdpZHRoXG4gICAgICAgIC8vIGlmIHdpbmRvdyB3aWR0aCBpcyB0b28gbmFycm93LCB1c2Ugc2NyZWVuIHdpZHRoO1xuICAgICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA/IHdpbmRvdy5pbm5lcldpZHRoIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogc2NyZWVuLndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ID8gd2luZG93LmlubmVySGVpZ2h0IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgOiBzY3JlZW4uaGVpZ2h0O1xuICAgICAgICBpZiAod2lkdGggPCA2MDAgJiYgaGVpZ2h0IDwgNTAwKSB7XG4gICAgICAgICAgbGVmdCA9IChzY3JlZW4ud2lkdGggLyAyKSAtIChwb3B1cFdpZHRoIC8gMik7XG4gICAgICAgICAgdG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtIChwb3B1cEhlaWdodCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHNldCBsZWZ0IGFuZCB0b3AgcG9zaXRpb25cbiAgICAgICAgICAgICAgdmFyIGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlbkxlZnQgOiBzY3JlZW4ubGVmdCxcbiAgICAgICAgICAgIGR1YWxTY3JlZW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiBzY3JlZW4udG9wO1xuICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0b3AgYW5kIGxlZnQgcG9zaXRpb25cbiAgICAgICAgICBsZWZ0ID0gKCh3aWR0aCAvIDIpIC0gKHBvcHVwV2lkdGggLyAyKSkgKyBkdWFsU2NyZWVuTGVmdDtcbiAgICAgICAgICB0b3AgPSAoKGhlaWdodCAvIDIpIC0gKHBvcHVwSGVpZ2h0IC8gMikpICsgZHVhbFNjcmVlblRvcDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgdmFyIHNoYXJlV2luZG93ID0gd2luZG93Lm9wZW4odXJsLCd0YXJnZXRXaW5kb3cnLCd0b29sYmFyPW5vLGxvY2F0aW9uPW5vLHN0YXR1cz1ubyxtZW51YmFyPW5vLHNjcm9sbGJhcnM9eWVzLHJlc2l6YWJsZT15ZXMsd2lkdGg9JyArIHBvcHVwV2lkdGggKyAnLCBoZWlnaHQ9JyArIHBvcHVwSGVpZ2h0ICsgJywgdG9wPScgKyB0b3AgKyAnLCBsZWZ0PScgKyBsZWZ0KTtcbiAgICAgICAgICAgIC8vIFB1dHMgZm9jdXMgb24gdGhlIG5ld1dpbmRvd1xuICAgICAgICAgIGlmICh3aW5kb3cuZm9jdXMpIHtcbiAgICAgICAgICAgICAgc2hhcmVXaW5kb3cuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICAgIC8qIFNldCBvcHRpb25zXG4gICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIFxuICAgICAgICAgIC8vIGNyZWF0ZSBkZWZhdWx0IG9wdGlvbnNcbiAgICAgICAgICByb290Lm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGljb25TdHlsZTogJ2RlZmF1bHQnLCAvLyBkZWZhdWx0IG9yIGJveFxuICAgICAgICAgICAgICBib3hGb3JtOiAnaG9yaXpvbnRhbCcsIC8vIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b21DZW50ZXInLCAvLyB0b3AgLyBtaWRkbGUgLyBib3R0b20gKyBMZWZ0IC8gQ2VudGVyIC8gUmlnaHRcbiAgICAgICAgICAgICAgcHJvdG9jb2w6IFsnaHR0cCcsICdodHRwcyddLmluZGV4T2Yod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJzonKVswXSkgPT09IC0xID8gJ2h0dHBzOi8vJyA6ICcvLycsXG4gICAgICAgICAgICAgIG5ldHdvcmtzOiAnVHdpdHRlcixGYWNlYm9vayxSZWRkaXQsTGlua2VkaW4sVHVtYmxyLFBpbnRlcmVzdCxXZWlibyxXZWNoYXQsRG91YmFuLFFRWm9uZSxNYWlsdG8nLFxuICAgICAgICAgICAgICBpY29uczogWydmYSBmYS10d2l0dGVyJywnZmEgZmEtZmFjZWJvb2snLCdmYSBmYS1yZWRkaXQtYWxpZW4nLCdmYSBmYS1saW5rZWRpbicsJ2ZhIGZhLXR1bWJscicsJ2ZhIGZhLXBpbnRlcmVzdCcsJ2ZhIGZhLXdlaWJvJywnZmEgZmEtd2VpeGluJywnOScsJ2ZhIGZhLXFxJywnZmEgZmEtZW52ZWxvcGUtbyddXG4gICAgICAgICAgfTtcbiAgXG4gICAgICAvLyBpbnRlZ3JhdGUgY3VzdG9tIG9wdGlvbnNcbiAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICByb290Lm9wdGlvbnNbaV0gPSBvcHRpb25zW2ldO1xuICAgICAgfVxuICAgICAgLy8gY29udmVydCBuZXR3b3JrcyBzdHJpbmcgaW50byBhcnJheVxuICAgICAgcm9vdC5vcHRpb25zLm5ldHdvcmtzID0gcm9vdC5vcHRpb25zLm5ldHdvcmtzLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgXG4gICAgICBmdW5jdGlvbiBnZXRPcHRpb25zKGVsKSB7XG4gICAgICAgICAgLy8gaW50ZWdyYXRlIGRhdGEgYXR0cmlidXRlIG9wdGlvbnNcbiAgICAgICAgICB2YXIgcmV0ID0ge307XG4gICAgICAgICAgZm9yICh2YXIgaSBpbiByb290Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldFtpXSA9IHJvb3Qub3B0aW9uc1tpXTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIC8vIHRoZXNlIGF0dHJzIG11c3QgZ2V0IGR5bmFtaWNhbGx5LlxuICAgICAgICAgIHJldC51cmwgPSByb290Lm9wdGlvbnMudXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgIHJldC50aXRsZSA9IHJvb3Qub3B0aW9ucy50aXRsZSB8fCByb290LmdldFRpdGxlKCk7XG4gICAgICAgICAgcmV0LmltYWdlID0gcm9vdC5vcHRpb25zLmltYWdlIHx8IHJvb3QuZ2V0SW1hZ2UoKTtcbiAgICAgICAgICByZXQuZGVzY3JpcHRpb24gPSByb290Lm9wdGlvbnMuZGVzY3JpcHRpb24gfHwgcm9vdC5nZXREZXNjcmlwdGlvbigpO1xuICBcbiAgICAgICAgICBmb3IgKHZhciBvcHRpb24gaW4gZWwuZGF0YXNldCkge1xuICAgICAgICAgICAgICAvLyByZXBsYWNlIG9ubHkgJ3NoYXJlLScgcHJlZml4ZWQgZGF0YS1hdHRyaWJ1dGVzXG4gICAgICAgICAgICBpZiAob3B0aW9uLm1hdGNoKC9zaGFyZS8pKSB7XG4gICAgICAgICAgICAgIHZhciBuZXdfb3B0aW9uID0gb3B0aW9uLnJlcGxhY2UoL3NoYXJlLywgJycpO1xuICAgICAgICAgICAgICBpZiAoIW5ld19vcHRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuZXdfb3B0aW9uID0gbmV3X29wdGlvbi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5ld19vcHRpb24uc2xpY2UoMSk7XG4gICAgICAgICAgICAgIHZhciB2YWwgPSBlbC5kYXRhc2V0W29wdGlvbl07XG4gICAgICAgICAgICAgIGlmIChuZXdfb3B0aW9uID09PSAnbmV0d29ya3MnKSB7XG4gICAgICAgICAgICAgICAgICB2YWwgPSB2YWwudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld19vcHRpb24gPT09ICd1cmwnICYmIHZhbCAmJiB2YWxbMF0gPT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgLy8gZml4IHJlbGF0aXZlIHVybCBwcm9ibGVtLlxuICAgICAgICAgICAgICAgICAgdmFsID0gbG9jYXRpb24ub3JpZ2luICsgdmFsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldFtuZXdfb3B0aW9uXSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgXG4gICAgICBmdW5jdGlvbiBjcmVhdGVEcm9wZG93bihlbCkge1xuICAgICAgICAgIC8vIGNyZWF0ZSBkcm9wZG93blxuICAgICAgICAgIHZhciBkcm9wZG93bkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lID0gJ25lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duJztcbiAgICAgICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gIFxuICAgICAgICAgIC8vIHNldCBkcm9wZG93biByb3cgbGVuZ3RoXG4gICAgICAgICAgaWYgKG15b3B0aW9ucy5pY29uU3R5bGUgPT0gJ2JveCcgJiYgbXlvcHRpb25zLmJveEZvcm0gPT0gJ2hvcml6b250YWwnKVxuICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJveC1ob3Jpem9udGFsJztcbiAgICAgICAgICBlbHNlIGlmIChteW9wdGlvbnMuaWNvblN0eWxlID09ICdib3gnICYmIG15b3B0aW9ucy5ib3hGb3JtID09ICd2ZXJ0aWNhbCcpXG4gICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm94LXZlcnRpY2FsJztcbiAgXG4gICAgICAgICAgLy8gc2V0IGRyb3Bkb3duIHBvc2l0aW9uIFxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAobXlvcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tdG9wLWxlZnQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1yaWdodCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAndG9wQ2VudGVyJzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1jZW50ZXInO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC0gZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ21pZGRsZUxlZnQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tbWlkZGxlLWxlZnQnO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luVG9wID0gLSBkcm9wZG93bkVsLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ21pZGRsZVJpZ2h0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLW1pZGRsZS1yaWdodCc7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5Ub3AgPSAtIGRyb3Bkb3duRWwub2Zmc2V0SGVpZ2h0IC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tbGVmdCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tUmlnaHQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLXJpZ2h0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdib3R0b21DZW50ZXInOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWNlbnRlcic7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSBkcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1jZW50ZXInO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC0gZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LDEpO1xuICBcbiAgXG4gICAgICAgICAgLy8gZmlsbCBmcm9wZG93biB3aXRoIGJ1dHRvbnNcbiAgICAgICAgICB2YXIgaWNvbkNsYXNzID0gbXlvcHRpb25zLmljb25TdHlsZSA9PSAnZGVmYXVsdCcgPyAnbmVlZC1zaGFyZS1idXR0b25fbGluayBuZWVkLXNoYXJlLWJ1dHRvbl8nIDogJ25lZWQtc2hhcmUtYnV0dG9uX2xpbmstJyArIG15b3B0aW9ucy5pY29uU3R5bGUgKyAnIG5lZWQtc2hhcmUtYnV0dG9uX2xpbmsgbmVlZC1zaGFyZS1idXR0b25fJztcbiAgICAgICAgICBsZXQgZmxhZyA9IDA7XG4gICAgICAgICAgZm9yICh2YXIgbmV0d29yayBpbiBteW9wdGlvbnMubmV0d29ya3MpIHtcbiAgICAgICAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICBuZXR3b3JrID0gbXlvcHRpb25zLm5ldHdvcmtzW25ldHdvcmtdO1xuICAgICAgICAgICAgICBsaW5rLmNsYXNzTmFtZSA9IGljb25DbGFzcyArIG5ldHdvcms7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG15b3B0aW9ucy5pY29ucy5sZW5ndGgpO1xuICAgICAgICAgICAgICBsaW5rLmNsYXNzTmFtZSArPSAnICcrbXlvcHRpb25zLmljb25zW2ZsYWddO1xuICAgICAgICAgICAgICBsaW5rLmRhdGFzZXQubmV0d29yayA9IG5ldHdvcms7XG4gICAgICAgICAgICAgIGxpbmsudGl0bGUgPSBuZXR3b3JrO1xuICAgICAgICAgICAgICBkcm9wZG93bkVsLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAgICAgICBmbGFnKys7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBkcm9wZG93bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgaWYgKGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCAnLm5lZWQtc2hhcmUtYnV0dG9uX2xpbmsnKSkge1xuICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgXG4gICAgICAgICAgICAgICAgIHJvb3Quc2hhcmVbZXZlbnQudGFyZ2V0LmRhdGFzZXQubmV0d29ya10oZWwpO1xuICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICBcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkcm9wZG93bkVsKTtcbiAgICAgIH1cbiAgXG4gICAgICB2YXIgdGFyZ2V0RWwgPSB0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pIDogZWxlbTtcbiAgICAgICBpZiAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwuY2xhc3NMaXN0LmNvbnRhaW5zKCduZWVkLXNoYXJlLXBhbmVsJykpIHtcbiAgICAgICAgY3JlYXRlRHJvcGRvd24odGFyZ2V0RWwpO1xuICAgICAgICAvLyB0YXJnZXRFbC5jbGFzc0xpc3QuYWRkKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgICAgIH0gZWxzZSBcbiAgICAgICAgLy8gY2xvc2Ugb24gY2xpY2sgb3V0c2lkZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgdmFyIG9wZW5lZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICBcbiAgICAgICAgICBpZiAoIWNsb3Nlc3QoZXZlbnQudGFyZ2V0LCAnLm5lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAob3BlbmVkRWwpIHtcbiAgICAgICAgICAgICAgICBvcGVuZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgXG4gICAgICAgICAgICAgICAgLy8gaGlkZSB3ZWNoYXQgY29kZSBpbWFnZSB3aGVuIGNsb3NlIHRoZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICBpZiAob3BlbmVkRWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuZWRFbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gY2xvc2VzdChldmVudC50YXJnZXQsIHJvb3QuZWxlbSk7XG4gICAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRHJvcGRvd24oZWwpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIFxuICAgIH07XG4gIFxuICAgIG5ldyBuZWVkU2hhcmVCdXR0b24oJy5uZWVkLXNoYXJlLWJ1dHRvbicpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnRvY19idG4oKTtcbiAgICB9LFxuICAgIHRvY19idG46IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdG9jX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2NfY29udGFpbmVyJyk7XG4gICAgICAgIGxldCB0b2NfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvY19idG4nKTtcbiAgICAgICAgJCh0b2NfYnRuKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKXtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cblxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMud2ViX2luZm9fcnVudGltZSgpO1xuICAgIH0sXG4gICAgLy8gVE9ETzogISEh5oiR552A5a6e5LiN55+l6YGT6L+Z5piv5Liq5LuA5LmI56eYXG4gICAgd2ViX2luZm9fcnVudGltZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IEJpcnRoRGF5ID0gbmV3IERhdGUobmV3IERhdGUoJzIwMjAvMDEvMDQnKSk7XG4gICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgbGV0IHRpbWVvbGQgPSAodG9kYXkuZ2V0VGltZSgpIC0gQmlydGhEYXkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIGxldCBkYXlzb2xkID0gTWF0aC5mbG9vcih0aW1lb2xkIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2ViaW5mb19ydW50aW1lX2NvdW50XzFcIikuaW5uZXJUZXh0ID0gZGF5c29sZCArICcg5aSpJztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRheXNvbGQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMVwiKSk7XG4gICAgfSxcbn1cblxuIl19
