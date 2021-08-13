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
  ct_right.css("display", "none");
  left_right_arrow();

  if (localStorage.hasOwnProperty('layout')) {
    window.localStorage.removeItem('layout');
    window.localStorage.setItem("layout", "L");
    console.log("切换到左中布局了");
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
  left_right_arrow();

  if (localStorage.hasOwnProperty('layout')) {
    window.localStorage.removeItem('layout');
    window.localStorage.setItem('layout', 'R');
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
    this.device_switch(); // 这个放到最后自调用，因为不管本地存储是什么，最终还是要根据设备监听为主
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
      console.log("本地有该变量缓存");
      var layout_change = window.localStorage.getItem("layout");
      console.log(layout_change);

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
        b_layout = "C";
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
        console.log("尺寸其他情况，理论上我看不到这句话……");
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
          var script_utterances = document.createElement("script");
          script_utterances.src = "https://beaudar.lipk.org/client.js";
          script_utterances.setAttribute("repo", "wztlink1013/comment");
          script_utterances.setAttribute("issue-term", "title");
          script_utterances.setAttribute("label", "💬comment");
          script_utterances.setAttribute("theme", "github-light");
          script_utterances.setAttribute("crossorigin", "anonymous");
          script_utterances.setAttribute("branch", "master");
          script_utterances.setAttribute("loading", "false");
          script_utterances.setAttribute("comment-order", "desc");
          script_utterances.setAttribute("input-position", "top");
          utterances_comment.appendChild(script_utterances);
        }
      } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY2F0ZWdvcmllcy5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvc2VhcmNoLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9zaGFyZWJ1dHRvbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvdG9jLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC93ZWJfaW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFsQjtBQUNBLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxjQUFELENBQW5CLEMsQ0FFQTs7QUFDQSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsVUFBRCxDQUFmO0FBQ0EsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFdBQUQsQ0FBaEI7QUFDQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQjtBQUNBLElBQUksU0FBUyxHQUFHLENB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ImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qICBcbiAgICBUT0RPOiBcbiAgICAgICAg6IO95Zyo5qC555uu5b2V6K6+572u6buY6K6k54q25oCB5piv5Yeg5qCP55qEXG4gICAgICAgIOiDveWkn+iuqeS9v+eUqOiAheWPlua2iOi/meenjeKAnOiusOW/huKAnVxuKiovXG5cblxuLy8gUEPvvJpoZWFkZXLkuIrnmoTlt6blj7PmjInpkq7ljLrln59cbmxldCBhcnJvd19sZWZ0ID0gJCgnI2Fycm93X2xlZnQnKTtcbmxldCBhcnJvd19yaWdodCA9ICQoJyNhcnJvd19yaWdodCcpO1xuXG4vLyDluIPlsYDvvJrniYjlv4PjgIHlt6bkuK3lj7PmjpLniYhcbmxldCBjdF9sZWZ0ID0gJCgnLmN0X2xlZnQnKTtcbmxldCBjdF9yaWdodCA9ICQoJy5jdF9yaWdodCcpO1xubGV0IGN0X2NlbnRlciA9ICQoJy5jdF9jZW50ZXInKTtcbmxldCBjb250YWluZXIgPSAkKCcuY29udGFpbmVyJyk7XG5cbi8vIFBDL2FwcO+8muWIh+aNomhlYWRlclxubGV0IGhlYWRlciA9ICQoJy5oZWFkZXInKTtcbmxldCBoZWFkZXJfYXBwID0gJCgnLmhlYWRlcl9hcHAnKTtcblxuLy8gYXBw77yaaGVhZGVy5LiK55qE5bem5Y+z5oyJ6ZKu5Yy65Z+fXG5sZXQgYnRuX2FwcF9zaWRlciA9ICQoJyNidG5fYXBwX3NpZGVyJyk7XG5sZXQgYnRuX2FwcF9yaWdodCA9ICQoJyNidG5fYXBwX3JpZ2h0Jyk7XG5cbi8vIGFwcO+8mueCueWHu2hlYWRlcl9hcHDml7blgJnlvLnlh7rmnaXnmoTmir3lsYlcbmxldCBhcHBfc2lkZV9nbGFzcyA9ICQoJyNhcHBfc2lkZV9nbGFzcycpO1xubGV0IGFwcF9zaWRlX2NvbnRlbnQgPSAkKCcjYXBwX3NpZGVfY29udGVudCcpO1xuXG4vLyAxLuW3puS4remFjee9rlxubGV0IG9uZV9jb250YWluZXIgPSAnODAlJyA7XG5sZXQgb25lX2N0X2NlbnRlcl93aWR0aCA9ICc3NSUnO1xubGV0IG9uZV9jdF9sZWZ0X3dpZHRoID0gJzI1JSc7XG4vLyAyLiDkuK3lj7PphY3nva5cbmxldCB0d29fY29udGFpbmVyID0gJzgwJScgO1xubGV0IHR3b19jdF9jZW50ZXJfd2lkdGggPSAnNzUlJztcbmxldCB0d29fY3RfcmlnaHRfd2lkdGggPSAnMjUlJztcbi8vIDMuIOW3puS4reWPs+mFjee9rlxubGV0IHRocmVlX2NvbnRhaW5lciA9ICc5NSUnIDtcbmxldCB0aHJlZV9jdF9jZW50ZXJfd2lkdGggPSAnNjAlJztcbmxldCB0aHJlZV9jdF9yaWdodF93aWR0aCA9ICcyMCUnO1xubGV0IHRocmVlX2N0X2xlZnRfd2lkdGggPSAnMjAlJztcbi8vIDQuIOS4remFjee9rlxubGV0IGZvdXJfY29udGFpbmVyID0gJzkwJScgO1xubGV0IGZvdXJfY3RfY2VudGVyX3dpZHRoID0gJzEwMCUnO1xuLy8g6K6+5aSH5bCP5LqONTYwcHjnmoTkuK3phY3nva5cbmxldCBkZXZpY2Vfc21hbGxfY29udGFpbmVyID0gXCI5NyVcIjtcbmxldCBkZXZpY2Vfc21hbGxfY2VudGVyID0gXCIxMDAlXCI7XG4vLyDorr7lpIflsI/kuo43ODBweOeahOS4remFjee9rlxubGV0IGRldmljZV9jZW50ZXJfY29udGFpbmVyID0gXCI5MyVcIjtcbmxldCBkZXZpY2VfY2VudGVyX2NlbnRlciA9IFwiMTAwJVwiO1xuXG5cbi8vIOWIpOaWrXBj5q615bem5Y+z5LiK6KeS55qE566t5aS06K+l5pi+56S65ZOq5LiqXG5mdW5jdGlvbiBsZWZ0X3JpZ2h0X2Fycm93ICgpIHtcbiAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG4gICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxlZnRfY2VudGVyX3JpZ2h0ICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IHRocmVlX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3Moe1xuICAgICAgICBcIndpZHRoXCI6IHRocmVlX2N0X2xlZnRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbiAgICBjdF9yaWdodC5jc3Moe1xuICAgICAgICBcIndpZHRoXCI6IHRocmVlX2N0X3JpZ2h0X3dpZHRoLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgbGVmdF9yaWdodF9hcnJvdyAoKTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGF5b3V0Jyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ0xSJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnTFInKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsZWZ0X2NlbnRlciAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiBvbmVfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBvbmVfY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3Moe1wid2lkdGhcIjogb25lX2N0X2xlZnRfd2lkdGh9KTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWIh+aNouWIsOW3puS4reW4g+WxgOS6hlwiKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gICAgfVxufVxuZnVuY3Rpb24gY2VudGVyX3JpZ2h0ICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IHR3b19jb250YWluZXJ9KTtcbiAgICBjdF9yaWdodC5jc3Moe1wid2lkdGhcIjogdHdvX2N0X3JpZ2h0X3dpZHRofSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0d29fY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdSJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnUicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNlbnRlciAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiBmb3VyX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogZm91cl9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBsZWZ0X3JpZ2h0X2Fycm93ICgpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXlvdXQnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdDJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnQycpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldmljZV9zbWFsbCAoKSB7XG4gICAgLy8g5pyA5bCP5bC65a+477ya5pyA5aSnNTYwcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjU2MHB45bC65a+4XCIpO1xuXG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAvLyDorr7nva7luIPlsYBcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9zbWFsbF9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9zbWFsbF9jZW50ZXJ9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcblxufVxuZnVuY3Rpb24gZGV2aWNlX2NlbnRlciAoKSB7XG4gICAgLy8g5Lit562J5bC65a+477ya5pyA5aSnOTgwcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjk4MHB45bC65a+4XCIpO1xuXG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAvLyDorr7nva7luIPlsYBcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9jZW50ZXJfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBkZXZpY2VfY2VudGVyX2NlbnRlcn0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuXG59XG5mdW5jdGlvbiBkZXZpY2VfbGFyZ2VzdCAoKSB7XG4gICAgLy8g5pyA5aSn5bC65a+477ya5pyA5aSnMTI2MXB4XG4gICAgY29uc29sZS5sb2coXCLlsI/kuo4xMjYxcHjlsLrlr7hcIik7XG5cbiAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG4gICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIGhlYWRlcl9hcHAuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcblxuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGN0X3JpZ2h0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfcmlnaHRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbn1cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYnRuX3BjX3N3aXRjaCgpO1xuICAgICAgICB0aGlzLmJ0bl9hcHBfc3dpdGNoKCk7XG4gICAgICAgIHRoaXMuYnJvd3Nlcl9yZW1lbWJlcigpO1xuICAgICAgICB0aGlzLmRldmljZV9zd2l0Y2goKTsgLy8g6L+Z5Liq5pS+5Yiw5pyA5ZCO6Ieq6LCD55So77yM5Zug5Li65LiN566h5pys5Zyw5a2Y5YKo5piv5LuA5LmI77yM5pyA57uI6L+Y5piv6KaB5qC55o2u6K6+5aSH55uR5ZCs5Li65Li7XG4gICAgfSxcbiAgICAvKiBQQ++8muWNlS/lj4wv5LiJ5qCP5biD5bGA5YiH5o2i5oyJ6ZKu54K55Ye75LqL5Lu2ICovXG4gICAgYnRuX3BjX3N3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGFycm93X2xlZnQuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIC8vIOi9rOaNouWIh+aNouS5i+WQjueahOeureWktOaMiemSrlxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCdibG9jaycpO1xuICAgICAgICAgICAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvL+W3puS4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5bem5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwnbm9uZScpO1xuICAgICAgICAgICAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvL+S4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+S4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgYXJyb3dfcmlnaHQuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIC8vIOi9rOaNouWIh+aNouS5i+WQjueahOeureWktOaMiemSrlxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCdibG9jaycpO1xuICAgICAgICAgICAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8v5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5bem5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwnbm9uZScpO1xuICAgICAgICAgICAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8vIOS4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyDlt6bkuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyog56e75Yqo56uv5bem5Y+z5LiK6KeS55qE5oyJ6ZKuICovXG4gICAgYnRuX2FwcF9zd2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDngrnlh7vlt6bmjInpkq5cbiAgICAgICAgYnRuX2FwcF9zaWRlci5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgYXBwX3NpZGVfZ2xhc3MuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgICAgICAgICBhcHBfc2lkZV9jb250ZW50LmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g54K55Ye75q+b546755KD54mHXG4gICAgICAgIGFwcF9zaWRlX2dsYXNzLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhcHBfc2lkZV9nbGFzcy5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgICAgICAgICAgYXBwX3NpZGVfY29udGVudC5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g54K55Ye75Y+z5oyJ6ZKuXG4gICAgICAgIGJ0bl9hcHBfcmlnaHQuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFsZXJ0KFwi5pys572R56uZ6L+Y5Zyo5byA5Y+R5Lit77yM6K+45aSa5Yqf6IO96L+Y5pyq5a6M5ZaE77yM5pWs6K+35pyf5b6FflwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pys572R56uZ6L+Y5Zyo5byA5Y+R5Lit77yM6K+45aSa5Yqf6IO96L+Y5pyq5a6M5ZaE77yM5pWs6K+35pyf5b6FflwiKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKiDmtY/op4jlmajorrDkvY/luIPlsYAgKi9cbiAgICBicm93c2VyX3JlbWVtYmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBiX2xlZnQgPSAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpO1xuICAgICAgICBsZXQgYl9yaWdodCA9ICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpO1xuICAgICAgICBsZXQgYl9sYXlvdXQ7XG4gICAgXG4gICAgICAgIC8qIFxuICAgICAgICDmnInkuKrpl67popjvvJpcbiAgICAgICAgICAgIOS4gOaJk+W8gOa1j+iniOWZqOWwseS8muagueaNrue8k+WtmOadpeW4g+WxgO+8jOWwveeuoeS9oOeahOiuvuWkh+WuveW6puWwj+S6jjEyNjBweFxuICAgICAgICAgICAg5L2G5piv5a+55LqO5pmu6YCa55So5oi377yM5LiA5Liq5rWP6KeI5Zmo5ZOq5p2l55qE57uP5bi45byA5byA5Y+R6ICF5qih5byP5ZGi77yfXG4gICAgICAgICovXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgICAgIC8vIOa1j+iniOWZqOaciee8k+WtmOeahOaDheWGtVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKzlnLDmnInor6Xlj5jph4/nvJPlrZhcIik7XG4gICAgICAgICAgICBsZXQgbGF5b3V0X2NoYW5nZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxheW91dF9jaGFuZ2UpO1xuICAgIFxuICAgICAgICAgICAgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiTFJcIil7XG4gICAgICAgICAgICAgICAgLy8g5bem5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihsYXlvdXRfY2hhbmdlID09PSBcIkxcIikge1xuICAgICAgICAgICAgICAgIC8vIOW3puS4reW4g+WxgFxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiUlwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiQ1wiKSB7XG4gICAgICAgICAgICAgICAgLy8g5Lit5biD5bGAXG4gICAgICAgICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWFtuS7luiOq+WQjeWFtuWmmeeahOaDheWGtVxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmtY/op4jlmajmsqHmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pys5Zyw5rKh5pyJ6K+l5Y+Y6YeP57yT5a2YXCIpO1xuICAgICAgICAgICAgaWYgKChiX2xlZnQgPT09IFwiYmxvY2tcIikgJiYgKGJfcmlnaHQgPT09IFwibm9uZVwiKSkgeyAvLyDlt6bkuK3luIPlsYBcbiAgICAgICAgICAgICAgICBiX2xheW91dCA9IFwiTFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoYl9sZWZ0ID09PSBcIm5vbmVcIikgJiYgKGJfcmlnaHQgPT09IFwiYmxvY2tcIikpIHsgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIlJcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGJfbGVmdCA9PT0gXCJibG9ja1wiKSAmJiAoYl9yaWdodCA9PT0gXCJibG9ja1wiKSkgeyAvL+W3puS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJMUlwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJDXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBiX2xheW91dClcbiAgICAgICAgfVxuXG5cbiAgICB9LFxuICAgIC8qIOWqkuS9k+afpeivouW4g+WxgCAqL1xuICAgIGRldmljZV9zd2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDliJvlu7rmn6Xor6LliJfooahcbiAgICAgICAgbGV0IGRldmljZV93aWR0aCA9IFtcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA1NjBweCknKSxcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5ODBweCknKSxcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMjYxcHgpJylcbiAgICAgICAgXTtcblxuICAgICAgICAvLyDlrprkuYnlm57osIPlh73mlbBcbiAgICAgICAgZnVuY3Rpb24gbWVkaWFNYXRjaHMgKCkge1xuICAgICAgICAgICAgaWYgKGRldmljZV93aWR0aFswXS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgZGV2aWNlX3NtYWxsICgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2Vfd2lkdGhbMV0ubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGRldmljZV9jZW50ZXIgKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRldmljZV93aWR0aFsyXS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgZGV2aWNlX2xhcmdlc3QgKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bC65a+45YW25LuW5oOF5Ya177yM55CG6K665LiK5oiR55yL5LiN5Yiw6L+Z5Y+l6K+d4oCm4oCmXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOWFiOi/kOihjOS4gOasoeWbnuiwg+WHveaVsFxuICAgICAgICBtZWRpYU1hdGNocygpO1xuICAgICAgICAvLyDkuLrmn6Xor6LliJfooajms6jlhoznm5HlkKzlmajvvIzlkIzml7blsIblm57osIPlh73mlbDkvKDnu5nnm5HlkKzlmahcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXZpY2Vfd2lkdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRldmljZV93aWR0aFtpXS5hZGRMaXN0ZW5lcihtZWRpYU1hdGNocyk7XG4gICAgICAgIH1cbiAgICB9LFxufVxuXG5cbiIsImltcG9ydCBsYXlvdXRfb2JqZWN0IGZyb20gJy4vY29tbW9uL2xheW91dC5qcyc7XG5pbXBvcnQgdG9jX29iamVjdCBmcm9tICcuL3BhcnQvdG9jLmpzJztcbmltcG9ydCBjb21tZW50c19vYmplY3QgZnJvbSAnLi9wYXJ0L2NvbW1lbnRzLmpzJztcbmltcG9ydCB7Z29fdG9wX29iamVjdCxnZXRTY3JvbGx9IGZyb20gJy4vcGFydC9nb190b3AuanMnO1xuaW1wb3J0IHdlYl9pbmZvX29iamVjdCBmcm9tICcuL3BhcnQvd2ViX2luZm8uanMnO1xuaW1wb3J0IHNlYXJjaF9vYmplY3QgZnJvbSAnLi9wYXJ0L3NlYXJjaC5qcyc7XG5pbXBvcnQgc2hhcmVfb2JqZWN0IGZyb20gJy4vcGFydC9zaGFyZWJ1dHRvbi5qcyc7XG5pbXBvcnQgY2F0ZWdvcmllc19vYmplY3QgZnJvbSAnLi9wYXJ0L2NhdGVnb3JpZXMuanMnO1xuLy8g5Yid5aeL5YyWaGlnaGxpZ2h06ISa5pysXG5obGpzLmluaXRIaWdobGlnaHRpbmdPbkxvYWQoKTtcblxuLy8g5Z+f5ZCN6YeN5a6a5ZCRXG5pZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnd3p0bGluazEwMTMuY29tJykge1xuICAgIGxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24uaHJlZi5yZXBsYWNlKCd3enRsaW5rMTAxMy5jb20nLCAnd3d3Lnd6dGxpbmsxMDEzLmNvbScpKTtcbn1cblxuLy8gVE9ETzog5pCc57Si5Yqf6IO9XG4vLyDnm7jlvZPkuo7ojrflvpfkuoblhbZhcGlcbmNvbnN0IGFsZ29saWFDb25maWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwiYWxnb2xpYTpzZWFyY2hcIl0nKS5kYXRhc2V0O1xuY29uc3QgY2xpZW50ID0gYWxnb2xpYXNlYXJjaChhbGdvbGlhQ29uZmlnLmFwcGxpY2F0aW9uSWQsIGFsZ29saWFDb25maWcuYXBpS2V5KTtcbmNvbnN0IGluZGV4ID0gY2xpZW50LmluaXRJbmRleChhbGdvbGlhQ29uZmlnLmluZGV4TmFtZSk7XG5cbmNvbnNvbGUubG9nKGFsZ29saWFDb25maWcpO1xuY29uc29sZS5sb2coY2xpZW50KTtcbmNvbnNvbGUubG9nKGluZGV4KTtcblxuXG4vLyDlhaXlj6Plh73mlbDvvIzkvJrlnKjpobXpnaLliqDovb3lrozmr5XmiafooYxcbiQoZnVuY3Rpb24oKXtcbiAgICAvLyDliJ3lp4vljJbnm67lvZXohJrmnKzlh73mlbBcbiAgICB0b2Nfb2JqZWN0LmluaXQoKTtcbiAgICAvLyDliJ3lp4vljJbor4TorrrmqKHlnZfkuIvmiYDmnInlh73mlbBcbiAgICBjb21tZW50c19vYmplY3QuaW5pdCgpO1xuICAgIC8vIOWIneWni+WMluWbnuWIsOmhtumDqFxuICAgIGdvX3RvcF9vYmplY3QuaW5pdCgpO1xuICAgIC8vIOW4g+WxgOWIneWni+WMllxuICAgIGxheW91dF9vYmplY3QuaW5pdCgpO1xuICAgIHNlYXJjaF9vYmplY3QuaW5pdCgpO1xuICAgIC8vIOWFpeWPo+WHveaVsOWIneWni+WMlue9keermei/kOihjOaXtumXtFxuICAgIHdlYl9pbmZvX29iamVjdC5pbml0KCk7XG4gICAgLy8g5YiG5Lqr5oyJ6ZKu55qE5Yid5aeL5YyWXG4gICAgc2hhcmVfb2JqZWN0LmluaXQoKTtcbiAgICAvLyDnm67lvZXlh73mlbDliJ3lp4vljJZcbiAgICBjYXRlZ29yaWVzX29iamVjdC5pbml0KCk7XG4gICAgLy8g5aS05Zu+5LyY5YyW5Luj56CBXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFydGljbGVfaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcnRjbGVfbGlzdF9pdGVtX2ltZ1wiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7aTxhcnRpY2xlX2ltZy5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBsZXQgd2lkID0gYXJ0aWNsZV9pbWdbaV0uZmlyc3RFbGVtZW50Q2hpbGQud2lkdGggKyA1O1xuICAgICAgICAgICAgbGV0IGhlaSA9IGFydGljbGVfaW1nW2ldLmZpcnN0RWxlbWVudENoaWxkLmhlaWdodCArIDc7XG4gICAgICAgICAgICBhcnRpY2xlX2ltZ1tpXS5zdHlsZS5tYXhXaWR0aCA9IHdpZCArIFwicHhcIjsgXG4gICAgICAgICAgICBhcnRpY2xlX2ltZ1tpXS5zdHlsZS5tYXhIZWlnaHQgPSBoZWkgKyBcInB4XCI7IFxuICAgICAgICB9XG4gICAgfSwgMTAwMCk7XG4gICAgLy8gLy8g55m+5bqm57uf6K6h5Luj56CBXG4gICAgLy8gdmFyIF9obXQgPSBfaG10IHx8IFtdO1xuICAgIC8vIChmdW5jdGlvbigpIHtcbiAgICAvLyB2YXIgaG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIC8vIHZhciBhbmFseXRpY3NfYmQgPSAnOTU4N2M1Zjk1MTAzMDJiYzI3YTJjNTZjN2ZkNDg0NWUnO1xuICAgIC8vIGhtLnNyYyA9IFsnaHQnLCAndCcsICdwcycsICc6LycsICcvaCcsICdtJywgJy4nLCAnYmEnLCAnaScsICdkJywgJ3UuYycsICdvJywgJ20vJywgJ2gnLCAnbScsICcuaicsICdzPycsIGFuYWx5dGljc19iZF0uam9pbignJyk7XG4gICAgLy8gdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgICAvLyBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhtLCBzKTtcbiAgICAvLyB9KSgpO1xufSlcblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wZW5fY2xvc2VfZm9yZGVyX3BsdXMoKTtcbiAgICAgICAgdGhpcy5oaXRfb3Blbl9jbG9zZV9mb3JkZXIoKTtcbiAgICAgICAgdGhpcy5yZWFkbW9yZV9ibG9nX2Vzc2F5KCk7XG4gICAgfSxcbiAgICAvLyDngrnlh7tpY29u5bGV5byAL+WFs+mXreagkeWIhuexu1xuICAgIGhpdF9vcGVuX2Nsb3NlX2ZvcmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBjYXRlX2NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZV9jZWxsJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwO2k8Y2F0ZV9jZWxsLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYgKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpe1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gJChjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9PT0gXCJpbmxpbmUtYmxvY2tcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5Yaz5a6a5ZOq5Lqb6ZyA6KaB5pi+56S6aWNvblxuICAgIG9wZW5fY2xvc2VfZm9yZGVyX3BsdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgY2F0ZV9jZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVfY2VsbCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDtpPGNhdGVfY2VsbC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIC8vIOafpeeci+esrOS4ieS4quWtkOiKgueCueaYr+WQpuacieWFg+e0oFxuICAgICAgICAgICAgaWYoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgLy8g5pi+56S65peB6L6555qEaWNvblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDkuI3mmL7npLrml4HovrnnmoRpY29uXG4gICAgICAgICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgLy8g5p+l55yL5pu05aSa6aG16Z2i77yM5LyY5YyW5Y2a5a6iL+maj+eslOaYvuekulxuICAgIHJlYWRtb3JlX2Jsb2dfZXNzYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FyY2hpdmVzL1wiKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgICAgLy8g5Y675o6J56ys5LiA5Liq77yf5a2X56ymXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gbG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKTtcbiAgICAgICAgICAgIC8vIOagueaNrj3lj7fliJLliIblj4LmlbBcbiAgICAgICAgICAgIGxldCBhcnIgPSBwYXJhbXMuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIC8vIOiOt+WPlnBhZ2VfdHlwZeWPguaVsFxuICAgICAgICAgICAgbGV0IHBhZ2VfdHlwZSA9IGFyclsxXTtcbiAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcmNoaXZlX2FydGljbGVfbGlzdCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgdSA9IDA7dTx1bC5sZW5ndGg7dSsrKSB7XG4gICAgICAgICAgICAgICAgLy8g5a+55q+P5LiA5LiqbGnov5vooYzliKTmlq3vvIzlpoLmnpzkuI3mmK/lj4LmlbDnmoTlgLzvvIzlsLHov5vooYzpmpDol49cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpPHVsW3VdLmNoaWxkcmVuLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdWxbdV0uY2hpbGRyZW5baV0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gJ2RzYWwnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gJ2Jsb2cnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gcGFnZV90eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bFt1XS5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbuOAkOaWh+eroOiuv+mXrumHj+aOkuWQjeOAkVxuICAgIOaWh+eroOmYheivu+mHj+WcqOWNleS4quaWh+eroOS4reWPr+S7peaYvuekuuS9huaYr+S4jeiDveaOkuWQje+8jOaOkuWQjeaAjuS5iOWunueOsOWRou+8n1xuICAgIOaWueahiDHvvJrkvb/nlKh2YWxpbmVcbiAgICDmlrnmoYgy77ya5Zyo5pyN5Yqh5Zmo5LiK6L+b6KGM5YWo56uZ55qE5paH56ug6K6/6Zeu77yM5o+Q5Y+W5LuW5Lus55qE6K6/6Zeu6YePaWRcbiAgICDmlrnmoYgz77ya5a+5dHdpa29v5LqR5Ye95pWw6L+b6KGM5Luj56CB5pu05pS577yM57G75Ly86K6/6Zeu6YePYXBpXG4gXG7jgJDor4TorrrliIfmjaLmjInpkq7jgJFcbiAgICDliIfmjaJ1dHRlcmFuY2Vz6K+E6K665ZCO77yM6aG16Z2i5Lya5Yi35paw5LiA5LiL54S25ZCO5Y+I5Zue5Yiw6buY6K6k6K+E6K6657O757uf5LqG77yM6L+Z5Liq5Y+v5Lul5LyY5YyWXG5cbuOAkOacgOaWsOivhOiuuuOAkVxuICAgIOacgOaWsOivhOiuuue7hOS7tu+8jOWmguaenGJsb2fpobXpnaLnlKjkuobvvIzpgqPkuYjov5nkuKrnu4Tku7blsLHkuI3og73mlL7lnKjnp7vliqjnq6/kvqfovrnmoI/kuobvvIxcbiAgICDlkIzkuIDkuKppZOS4jeiDveWkmuasoeeUqOeahOe8mOaVheWQl++8n1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG5cbi8vIOWvvOWHuuS4uuS4gOS4quWvueixoVxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdvX2NvbW1lbnRzKCk7XG4gICAgdGhpcy5jb21tZW50c19jb3VudCgpO1xuICAgIHRoaXMubmV3X2NvbW1lbnRzKCk7XG4gICAgdGhpcy5zd2l0Y2hfY29tbWVudCgpO1xuICB9LFxuICAvLyDmmK/lkKbliY3lvoDor4TorrrljLpcbiAgZ29fY29tbWVudHM6IGZ1bmN0aW9uKCl7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb19jb21tZW50cycpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH0sXG4gIC8vIOaWh+eroOivhOiuuuaVsFxuICBjb21tZW50c19jb3VudDogZnVuY3Rpb24oKSB7XG4gICAgLy8g5Yik5pat6aG16Z2i5piv5ZCm5pyJ6K+E6K665Yy6aWTlkozlvJXnlKjor4TorrrmlbDnmoRpZFxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMnKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJykpIHtcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJyk7XG4gICAgICAvLyBCT03ojrflj5bpobXpnaJ1cmznmoRwYXRobmFtZei3r+W+hFxuICAgICAgdmFyIHR3aWtvb19jb21tZW50c191cmwgPSBbbG9jYXRpb24ucGF0aG5hbWVdO1xuXG4gICAgICB0d2lrb28uZ2V0Q29tbWVudHNDb3VudCh7XG4gICAgICAgIGVudklkOiAnd2Vic2l0ZS13aWtvby00ZzQ2azhkbzk4ODY3NTQyJywgLy8g546v5aKDIElEXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICB1cmxzOiB0d2lrb29fY29tbWVudHNfdXJsLC8vIOS4jeWMheWQq+WNj+iuruOAgeWfn+WQjeOAgeWPguaVsOeahOaWh+eroOi3r+W+hOWIl+ihqO+8jOW/heS8oOWPguaVsFxuICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlIC8vIOivhOiuuuaVsOaYr+WQpuWMheaLrOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgLy8g5bCG6K+E6K665pWw5YaZ5YWl5YW25LitXG4gICAgICAgIHR3aWtvb19jb21tZW50cy5pbm5lclRleHQgPSByZXNbMF0uY291bnQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIC8vIOi/lOWbnuekuuS+izogW1xuICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTAvcG9zdC0xLmh0bWwnLCBjb3VudDogMTAgfSxcbiAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzExL3Bvc3QtMi5odG1sJywgY291bnQ6IDAgfSxcbiAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEyL3Bvc3QtMy5odG1sJywgY291bnQ6IDIwIH1cbiAgICAgICAgLy8gXVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAvLyDlj5HnlJ/plJnor69cbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyDmnIDmlrDor4TorrpcbiAgbmV3X2NvbW1lbnRzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaG90X2FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdF9hcnRpY2xlc19pdGVtJyk7XG4gICAgdmFyIHBhZ2Vfc2l6ZSA9IDg7XG4gICAgdHdpa29vLmdldFJlY2VudENvbW1lbnRzKHtcbiAgICAgICAgZW52SWQ6ICd3ZWJzaXRlLXdpa29vLTRnNDZrOGRvOTg4Njc1NDInLCAvLyDnjq/looMgSURcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlX3NpemUsIC8vIOiOt+WPluWkmuWwkeadoe+8jOm7mOiupO+8mjEw77yM5pyA5aSn77yaMTAwXG4gICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UgLy8g5piv5ZCm5YyF5ous5pyA5paw5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdfY29tbWVudHNfbG9kaW5nJyk7XG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudCA9IG5ld19jb21tZW50c19sb2RpbmcucGFyZW50RWxlbWVudDtcbiAgICAgICAgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQucmVtb3ZlQ2hpbGQobmV3X2NvbW1lbnRzX2xvZGluZyk7XG4gICAgICAgIC8vIOaPkuWFpeivhOiuulxuICAgICAgICBmb3IgKHZhciBpID0gMDtpPHBhZ2Vfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKHJlc1tpXS5jb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2NvbnRlbnQgPSByZXNbaV0uY29tbWVudDtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfbmljayA9IHJlc1tpXS5uaWNrO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c191cmwgPSByZXNbaV0udXJsO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19hdmF0YXIgPSByZXNbaV0uYXZhdGFyO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c190aW1lID0gcmVzW2ldLnJlbGF0aXZlVGltZTtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfaWQgPSAnIycgKyByZXNbaV0uaWQ7XG4gICAgXG4gICAgICAgICAgICB2YXIgaG90X2FydGljbGVzX2NoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlc19jaGlsZC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIml0ZW1fdXBcIj48aW1nIHNyYz1cIicgKyBuZXdfY29tbWVudHNfYXZhdGFyICsgJ1wiIGNsYXNzPVwiYXZhdGFyXCI+PGRpdiBjbGFzcz1cIm5pY2tfbmFtZVwiPjxzcGFuIGNsYXNzPVwibmlja1wiPicgKyBuZXdfY29tbWVudHNfbmljayArICc8L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JyArIG5ld19jb21tZW50c190aW1lICsgJzwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiaXRlbV9kb3duXCI+PGEgaHJlZj1cIicgKyBuZXdfY29tbWVudHNfdXJsICsgbmV3X2NvbW1lbnRzX2lkICsgJ1wiPicgKyBuZXdfY29tbWVudHNfY29udGVudCArICc8L2E+PC9kaXY+JztcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlcy5hcHBlbmQoaG90X2FydGljbGVzX2NoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH0sXG4gIC8vIOWIh+aNouivhOiuulxuICBzd2l0Y2hfY29tbWVudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN3aXRjaF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3dpdGNoX2J0bicpO1xuICAgIHZhciB1dHRlcmFuY2VzX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXR0ZXJhbmNlc19jb21tZW50Jyk7XG4gICAgdmFyIHR3aWtvb19jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50Jyk7XG4gICAgXG4gICAgc3dpdGNoX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBzd2l0Y2hfYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJtb3ZlXCIpO1xuICAgICAgdXR0ZXJhbmNlc19jb21tZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRlbnQtaW4nKTtcbiAgICAgIHR3aWtvb19jb21tZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRlbnQtaW4nKTtcbiAgICAgIFxuICAgICAgaWYodXR0ZXJhbmNlc19jb21tZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICB1dHRlcmFuY2VzX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblxuXG4gICAgICAgIGlmICghdXR0ZXJhbmNlc19jb21tZW50LmNoaWxkcmVuWzBdKSB7XG4gICAgICAgICAgICB2YXIgc2NyaXB0X3V0dGVyYW5jZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc3JjPVwiaHR0cHM6Ly9iZWF1ZGFyLmxpcGsub3JnL2NsaWVudC5qc1wiIDtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcInJlcG9cIixcInd6dGxpbmsxMDEzL2NvbW1lbnRcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJpc3N1ZS10ZXJtXCIsXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImxhYmVsXCIsXCLwn5KsY29tbWVudFwiKTtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcInRoZW1lXCIsXCJnaXRodWItbGlnaHRcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJjcm9zc29yaWdpblwiLFwiYW5vbnltb3VzXCIpO1xuICAgICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwiYnJhbmNoXCIsXCJtYXN0ZXJcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJsb2FkaW5nXCIsXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImNvbW1lbnQtb3JkZXJcIixcImRlc2NcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJpbnB1dC1wb3NpdGlvblwiLFwidG9wXCIpO1xuICAgICAgICAgICAgdXR0ZXJhbmNlc19jb21tZW50LmFwcGVuZENoaWxkKHNjcmlwdF91dHRlcmFuY2VzKTsgXG4gICAgICAgIH1cbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdXR0ZXJhbmNlc19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIOe8k+aFouaYvuekulxuICAgICAgICDnvJPmhaLlm57liLDpobbpg6hcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiBsZXQgZ29fdG9wX29iamVjdCA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5nb190b3AoKTtcbiAgICAgICAgdGhpcy5jbGlja19nb190b3AoKTtcbiAgICB9LFxuICAgIGdvX3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8g5rua5Yqo5pi+56S6Z29fdG9w5oyJ6ZKuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgLy8g5oyB57ut55uR5ZCs5rua5Yqo54q25oCBXG4gICAgICAgICAgICBnZXRTY3JvbGwoKS50b3AgIT09IDAgPyAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIikgOiAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgY2xpY2tfZ29fdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g54K55Ye75Zue5Yiw6aG26YOoXG4gICAgICAgICQoXCIjZ29fdG9wXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy8gc2Nyb29sVG9w5YW85a655oCn5pa55qGIXG5mdW5jdGlvbiBnZXRTY3JvbGwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0fHwwLFxuICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMFxuICAgIH07XG59XG5cblxuLy8g5aaC5p6c5LiN5YGa6buY6K6k5a+85YWl77yM5bCx5oyJ54Wn5LiL6Z2i5YaZ77yM5LiN6KaBZGVmYXVsdOivjVxuZXhwb3J0IHtcbiAgICBnb190b3Bfb2JqZWN0LCAvL+WvvOWHuuWvueixoVxuICAgIGdldFNjcm9sbCwgLy/lr7zlh7rpgJrnlKjlh73mlbBcbn1cblxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfSxcbiAgICBzZWFyY2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaW5wdXRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1zZWFyY2gtaW5wdXRcIik7XG5cbiAgICAgICAgaWYgKGlucHV0QXJlYSkge1xuICAgICAgICAgICAgaW5wdXRBcmVhLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9ICfpppbmrKHmkJzntKJpbmfCt8K3wrcnO1xuICAgICAgICAgICAgICAgIGdldFNlYXJjaEZpbGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2xpY2sgPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaW5wdXRBcmVhLm9ua2V5ZG93biA9IGZ1bmN0aW9uKCkgeyBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykgcmV0dXJuIGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KSB7XG4gICAgICAgICAgICAvLyBjbGVhciBzZWFyY2ggcmVzdWx0XG4gICAgICAgICAgICB2YXIgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLXNlYXJjaC1jbG9zZVwiKTtcbiAgICAgICAgICAgIGJ0bkNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLnBsYWNlaG9sZGVyID0gJ+ivt+i+k+WFpeWFs+mUruivjSc7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLmZvY3VzKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2YXIgc2VhcmNoRnVuYyA9IGZ1bmN0aW9uKHBhdGgsIHNlYXJjaF9pZCwgY29udGVudF9pZCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdmFyIEJUTiA9IFwiPGRpdiBpZD0nbG9jYWwtc2VhcmNoLWNsb3NlJz7muIXnqbrmkJzntKI8L2Rpdj5cIlxuICAgICAgICAgICAgdmFyICRpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlYXJjaF9pZCk7XG4gICAgICAgICAgICB2YXIgJHJlc3VsdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50X2lkKTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBwYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXN1bWUgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5wbGFjZWhvbGRlciA9ICfovpPlhaXlhbPplK7or43ku6XmkJzntKInO1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciB4bWwgPSB4aHIucmVzcG9uc2VYTUw7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb290ID0geG1sLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3QgPSByb290LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZW50cnlcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aXRsZVwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNvbnRlbnRcIilbMF0uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVybFwiKVswXS5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9ICc8dWwgY2xhc3M9XFxcImFyY2hpdmVcXFwiPic7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5d29yZHMgPSB0aGlzLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9bXFxzXFwtXSsvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZS50cmltKCkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pys5Zyw5pCc57Si5Li75Luj56CBXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5mb3JFYWNoKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRfaW5kZXggPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEudGl0bGUgfHwgZGF0YS50aXRsZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGl0bGUgPSBcIlVudGl0bGVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfdGl0bGUgPSBkYXRhLnRpdGxlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YV90aXRsZSA9IG9yaWdfZGF0YV90aXRsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfY29udGVudCA9IGRhdGEuY29udGVudC50cmltKCkucmVwbGFjZSgvPFtePl0rPi9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YV9jb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YV91cmwgPSBkYXRhLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhfdGl0bGUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhfY29udGVudCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdF9vY2N1ciA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgbWF0Y2ggYXJ0aWxlcyB3aXRoIG5vdCBlbXB0eSBjb250ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhX2NvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfdGl0bGUgPSBkYXRhX3RpdGxlLmluZGV4T2Yoa2V5d29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleF9jb250ZW50ID0gZGF0YV9jb250ZW50LmluZGV4T2Yoa2V5d29yZCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X3RpdGxlIDwgMCAmJiBpbmRleF9jb250ZW50IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X2NvbnRlbnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4X2NvbnRlbnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X29jY3VyID0gaW5kZXhfY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGVudF9pbmRleC5wdXNoKHtpbmRleF9jb250ZW50OmluZGV4X2NvbnRlbnQsIGtleXdvcmRfbGVuOmtleXdvcmRfbGVufSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bGV56S657uT5p6cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzog5b6F5a6M5ZaE77yM5b6F5a6M5ZaEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjxsaT48YSBocmVmPSdcIiArbG9jYXRpb24ucHJvdG9jb2wrXCIvL1wiK2xvY2F0aW9uLmhvc3QrXCIvXCIrIGRhdGFfdXJsICsgXCInIGNsYXNzPSdhcmNoaXZlLXRpdGxlJz5cIiArIG9yaWdfZGF0YV90aXRsZSArIFwiPC9hPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IG9yaWdfZGF0YV9jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3Rfb2NjdXIgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3V0IG91dCAxMDAgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gZmlyc3Rfb2NjdXIgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmQgPSBmaXJzdF9vY2N1ciArIDMwO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5kID4gY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSBjb250ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoX2NvbnRlbnQgPSBjb250ZW50LnN1YnN0cihzdGFydCwgMTAwKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoaWdobGlnaHQgYWxsIGtleXdvcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnUyA9IG5ldyBSZWdFeHAoa2V5d29yZCwgXCJnaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaF9jb250ZW50ID0gbWF0Y2hfY29udGVudC5yZXBsYWNlKHJlZ1MsIFwiPGVtIGNsYXNzPVxcXCJzZWFyY2gta2V5d29yZFxcXCI+XCIgKyBrZXl3b3JkICsgXCI8L2VtPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjxwIGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIiArIG1hdGNoX2NvbnRlbnQgKyBcIi4uLjwvcD5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjwvbGk+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8L3VsPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCc8bGk+JykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gQlROICsgXCI8ZGl2IGNsYXNzPSdsb2NhbC1zZWFyY2gtZW1wdHknPuayoeacieaJvuWIsOS9oOaJgOimgeaQnOe0oueahOWGheWuueKApuKApjwvZGl2PlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBCVE4gKyBzdHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJTZWFyY2goJHJlc3VsdENvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB2YXIgZ2V0U2VhcmNoRmlsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHBhdGggPSBcIi9zZWFyY2gueG1sXCI7XG4gICAgICAgICAgICBzZWFyY2hGdW5jKHBhdGgsICdsb2NhbC1zZWFyY2gtaW5wdXQnLCAnbG9jYWwtc2VhcmNoLXJlc3VsdCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8g5YWo5bGA5oyJ6ZKu6K6+572uanPmmK/lkKblsZXnpLrmkJzntKLmoYZcbiAgICAgICAgdmFyIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hfYnRuJyk7XG4gICAgICAgIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhbC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB2YXIgc2VhcmNoX2Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9jbG9zZScpO1xuICAgICAgICBzZWFyY2hfY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxufVxuXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgbmVlZFNoYXJlQnV0dG9uXG4gIC0gVmVyc2lvbiAxLjAuMFxuICAtIENvcHlyaWdodCAyMDE1IER6bWl0cnkgVmFzaWxldXNraVxuXHQtIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVClcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2hhcmUoKTtcbiAgICB9LFxuICAgIHNoYXJlOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIGZpbmQgY2xvc2VzdFxuICAgIGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbSwgcGFyZW50KSB7XG4gICAgICBpZiAodHlwZW9mKHBhcmVudCkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoZXNTZWxlY3RvciA9IGVsZW0ubWF0Y2hlcyB8fCBlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yO1xuICBcbiAgICAgICAgICAgICAgaWYgKCEhbWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNTZWxlY3Rvci5iaW5kKGVsZW0pKHBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICBpZiAoZWxlbSA9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIHNoYXJlIGJ1dHRvbiBjbGFzc1xuICAgICAgd2luZG93Lm5lZWRTaGFyZUJ1dHRvbiA9IGZ1bmN0aW9uKGVsZW0sIG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBjcmVhdGUgZWxlbWVudCByZWZlcmVuY2VcbiAgICAgICAgICB2YXIgcm9vdCA9IHRoaXM7XG4gICAgICAgICAgcm9vdC5lbGVtID0gZWxlbSB8fCAnbmVlZC1zaGFyZS1idXR0b24nO1xuICBcbiAgICAgICAgICAvKiBIZWxwZXJzXG4gICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIFxuICAgICAgLy8gZ2V0IHRpdGxlIGZyb20gaHRtbFxuICAgICAgcm9vdC5nZXRUaXRsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgIC8vIGNoZWNrIHF1ZXJ5U2VsZWN0b3IgZXhpc3RhbmNlIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjp0aXRsZVwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5pbm5lclRleHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQudGl0bGU7XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBnZXQgaW1hZ2UgZnJvbSBodG1sXG4gICAgICAgIHJvb3QuZ2V0SW1hZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmltYWdlXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBnZXQgZGVzY3JpcHRpb24gZnJvbSBodG1sXG4gICAgICAgIHJvb3QuZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKS5uYW1lZEl0ZW0oJ2Rlc2NyaXB0aW9uJykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gc2hhcmUgdXJscyBmb3IgYWxsIG5ldHdvcmtzXG4gICAgICAgIHJvb3Quc2hhcmUgPSB7XG4gICAgICAgICAgICAnd2VpYm8nOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3YudC5zaW5hLmNvbS5jbi9zaGFyZS9zaGFyZS5waHA/dGl0bGU9J1xuICAgICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgICArIFwiJnVybD1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgICArIFwiJnBpYz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3dlY2hhdCc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIGltZ1NyYyA9ICdodHRwczovL2FwaS5xcnNlcnZlci5jb20vdjEvY3JlYXRlLXFyLWNvZGUvP3NpemU9MTUweDE1MCZkYXRhPScrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICB2YXIgZHJvcGRvd25FbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bicpO1xuICAgICAgICAgICAgICB2YXIgaW1nID0gZHJvcGRvd25FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJylbMF07XG4gICAgICAgICAgICAgIHZhciBsb2FkZXIgPSBkcm9wZG93bkVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25lZWQtc2hhcmUtbG9hZGVyJylbMF07XG4gIFxuICAgICAgICAgICAgICAgIGlmIChpbWcpIHtcbiAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgICB9IGVsc2UgaWYobG9hZGVyKSB7XG4gICAgICAgICAgICBsb2FkZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbG9hZGVyLmNsYXNzTmFtZSA9ICduZWVkLXNoYXJlLWxvYWRlcic7XG4gICAgICAgICAgICBsb2FkZXIuaW5uZXJUZXh0ID0gJ2xvYWRpbmcuLi4nO1xuICAgICAgICAgICAgbG9hZGVyLnRpdGxlID0gJ2xvYWRpbmcgcXJjb2RlLi4uJztcbiAgXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gaW1nU3JjO1xuICAgICAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0NyZWF0ZSBxcmNvZGUgZmFpbGVkISc7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwnbmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAobG9hZGVyLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChsb2FkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgJ2RvdWJhbic6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cHM6Ly93d3cuZG91YmFuLmNvbS9zaGFyZS9zZXJ2aWNlP25hbWU9J1xuICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICsgXCImaHJlZj1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgKyBcIiZpbWFnZT1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3Fxem9uZSc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3Nucy5xem9uZS5xcS5jb20vY2dpLWJpbi9xenNoYXJlL2NnaV9xenNoYXJlX29uZWtleT90aXRsZT0nXG4gICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgKyBcIiZ1cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICsgXCImcGljcz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKVxuICAgICAgICAgICAgICArIFwiJmRlc2M9XCIrIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAncmVucmVuJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vd2lkZ2V0LnJlbnJlbi5jb20vZGlhbG9nL3NoYXJlP3RpdGxlPSdcbiAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICArIFwiJnJlc291cmNlVXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICArIFwiJnBpYz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKVxuICAgICAgICAgICAgICArIFwiJmRlc2NyaXB0aW9uPVwiKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gIFxuICAgICAgICAgICAgJ21haWx0bycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICdtYWlsdG86P3N1YmplY3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICsgJyZib2R5PVRob3VnaHQgeW91IG1pZ2h0IGVuam95IHJlYWRpbmcgdGhpczogJyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKSArICcgLSAnICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd0d2l0dGVyJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSc7XG4gICAgICAgICAgICAgICAgdXJsICs9IGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICsgXCImdXJsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BpbnRlcmVzdCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwaW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYm9va21hcmtsZXQvP2lzX3ZpZGVvPWZhbHNlJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZtZWRpYT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZhY2Vib29rJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5mYWNlYm9vay5jb20vc2hhcmUucGhwPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2dvb2dsZXBsdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGx1cy5nb29nbGUuY29tL3NoYXJlPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdyZWRkaXQnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LnJlZGRpdC5jb20vc3VibWl0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZGVsaWNpb3VzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ2RlbC5pY2lvLnVzL3Bvc3Q/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZub3Rlcz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAndGFwaXR1cmUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3RhcGl0dXJlLmNvbS9ib29rbWFya2xldC9pbWFnZT8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2ltZ19zcmM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3RpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgJ3N0dW1ibGV1cG9uJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnbGlua2VkaW4nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmc291cmNlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnNvdXJjZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAnc2xhc2hkb3QnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3NsYXNoZG90Lm9yZy9ib29rbWFyay5wbD8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vICd0ZWNobm9yYXRpJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0ZWNobm9yYXRpLmNvbS9mYXZlcz8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2FkZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdwb3N0ZXJvdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncG9zdGVyb3VzLmNvbS9zaGFyZT8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAnbGlua3RvPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndHVtYmxyJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy50dW1ibHIuY29tL3NoYXJlP3Y9Myc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ2dvb2dsZWJvb2ttYXJrcycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lmdvb2dsZS5jb20vYm9va21hcmtzL21hcms/b3A9ZWRpdCc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmJrbWs9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZhbm5vdGF0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gJ25ld3N2aW5lJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cubmV3c3ZpbmUuY29tL190b29scy9zZWVkJnNhdmU/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICd1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmg9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAncGluZ2ZtJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwaW5nLmZtL3JlZi8/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdsaW5rPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmYm9keT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdldmVybm90ZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZXZlcm5vdGUuY29tL2NsaXAuYWN0aW9uPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZnJpZW5kZmVlZCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZnJpZW5kZmVlZC5jb20vc2hhcmU/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd2a29udGFrdGUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndmtvbnRha3RlLnJ1L3NoYXJlLnBocD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICB1cmwgKz0gJyZpbWFnZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgdXJsICs9ICcmbm9wYXJzZT10cnVlJztcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdvZG5va2xhc3NuaWtpJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5vZG5va2xhc3NuaWtpLnJ1L2RrP3N0LmNtZD1hZGRTaGFyZSZzdC5zPTEnO1xuICAgICAgICAgIHVybCArPSAnJnN0LmNvbW1lbnRzPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICB1cmwgKz0gJyZzdC5fc3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ21haWxydScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnY29ubmVjdC5tYWlsLnJ1L3NoYXJlPyc7XG4gICAgICAgIC8vICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgLy8gICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyAgIHVybCArPSAnJmltYWdldXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBvcGVuIHNoYXJlIGxpbmsgaW4gYSBwb3B1cFxuICAgICAgICByb290LnBvcHVwID0gZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHZhciBsZWZ0LCB0b3A7IFxuICBcbiAgICAgICAgdmFyIHBvcHVwV2lkdGggPSA2MDAsXG4gICAgICAgICAgICBwb3B1cEhlaWdodCA9IDUwMDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBjYWN1bGF0ZSBicm93c2VyIHdpbmRvdyB3aWR0aFxuICAgICAgICAvLyBpZiB3aW5kb3cgd2lkdGggaXMgdG9vIG5hcnJvdywgdXNlIHNjcmVlbiB3aWR0aDtcbiAgICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6IHNjcmVlbi53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogc2NyZWVuLmhlaWdodDtcbiAgICAgICAgaWYgKHdpZHRoIDwgNjAwICYmIGhlaWdodCA8IDUwMCkge1xuICAgICAgICAgIGxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAocG9wdXBXaWR0aCAvIDIpO1xuICAgICAgICAgIHRvcCA9IChzY3JlZW4uaGVpZ2h0IC8gMikgLSAocG9wdXBIZWlnaHQgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzZXQgbGVmdCBhbmQgdG9wIHBvc2l0aW9uXG4gICAgICAgICAgICAgIHZhciBkdWFsU2NyZWVuTGVmdCA9IHdpbmRvdy5zY3JlZW5MZWZ0ICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogc2NyZWVuLmxlZnQsXG4gICAgICAgICAgICBkdWFsU2NyZWVuVG9wID0gd2luZG93LnNjcmVlblRvcCAhPSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogc2NyZWVuLnRvcDtcbiAgICAgICAgICAvLyBjYWxjdWxhdGUgdG9wIGFuZCBsZWZ0IHBvc2l0aW9uXG4gICAgICAgICAgbGVmdCA9ICgod2lkdGggLyAyKSAtIChwb3B1cFdpZHRoIC8gMikpICsgZHVhbFNjcmVlbkxlZnQ7XG4gICAgICAgICAgdG9wID0gKChoZWlnaHQgLyAyKSAtIChwb3B1cEhlaWdodCAvIDIpKSArIGR1YWxTY3JlZW5Ub3A7XG4gICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIHZhciBzaGFyZVdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwndGFyZ2V0V2luZG93JywndG9vbGJhcj1ubyxsb2NhdGlvbj1ubyxzdGF0dXM9bm8sbWVudWJhcj1ubyxzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHdpZHRoPScgKyBwb3B1cFdpZHRoICsgJywgaGVpZ2h0PScgKyBwb3B1cEhlaWdodCArICcsIHRvcD0nICsgdG9wICsgJywgbGVmdD0nICsgbGVmdCk7XG4gICAgICAgICAgICAvLyBQdXRzIGZvY3VzIG9uIHRoZSBuZXdXaW5kb3dcbiAgICAgICAgICBpZiAod2luZG93LmZvY3VzKSB7XG4gICAgICAgICAgICAgIHNoYXJlV2luZG93LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgICAvKiBTZXQgb3B0aW9uc1xuICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBcbiAgICAgICAgICAvLyBjcmVhdGUgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgICAgcm9vdC5vcHRpb25zID0ge1xuICAgICAgICAgICAgICBpY29uU3R5bGU6ICdkZWZhdWx0JywgLy8gZGVmYXVsdCBvciBib3hcbiAgICAgICAgICAgICAgYm94Rm9ybTogJ2hvcml6b250YWwnLCAvLyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tQ2VudGVyJywgLy8gdG9wIC8gbWlkZGxlIC8gYm90dG9tICsgTGVmdCAvIENlbnRlciAvIFJpZ2h0XG4gICAgICAgICAgICAgIHByb3RvY29sOiBbJ2h0dHAnLCAnaHR0cHMnXS5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc6JylbMF0pID09PSAtMSA/ICdodHRwczovLycgOiAnLy8nLFxuICAgICAgICAgICAgICBuZXR3b3JrczogJ1R3aXR0ZXIsRmFjZWJvb2ssUmVkZGl0LExpbmtlZGluLFR1bWJscixQaW50ZXJlc3QsV2VpYm8sV2VjaGF0LERvdWJhbixRUVpvbmUsTWFpbHRvJyxcbiAgICAgICAgICAgICAgaWNvbnM6IFsnZmEgZmEtdHdpdHRlcicsJ2ZhIGZhLWZhY2Vib29rJywnZmEgZmEtcmVkZGl0LWFsaWVuJywnZmEgZmEtbGlua2VkaW4nLCdmYSBmYS10dW1ibHInLCdmYSBmYS1waW50ZXJlc3QnLCdmYSBmYS13ZWlibycsJ2ZhIGZhLXdlaXhpbicsJzknLCdmYSBmYS1xcScsJ2ZhIGZhLWVudmVsb3BlLW8nXVxuICAgICAgICAgIH07XG4gIFxuICAgICAgLy8gaW50ZWdyYXRlIGN1c3RvbSBvcHRpb25zXG4gICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgcm9vdC5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnZlcnQgbmV0d29ya3Mgc3RyaW5nIGludG8gYXJyYXlcbiAgICAgIHJvb3Qub3B0aW9ucy5uZXR3b3JrcyA9IHJvb3Qub3B0aW9ucy5uZXR3b3Jrcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gIFxuICAgICAgZnVuY3Rpb24gZ2V0T3B0aW9ucyhlbCkge1xuICAgICAgICAgIC8vIGludGVncmF0ZSBkYXRhIGF0dHJpYnV0ZSBvcHRpb25zXG4gICAgICAgICAgdmFyIHJldCA9IHt9O1xuICAgICAgICAgIGZvciAodmFyIGkgaW4gcm9vdC5vcHRpb25zKSB7XG4gICAgICAgICAgICByZXRbaV0gPSByb290Lm9wdGlvbnNbaV07XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAvLyB0aGVzZSBhdHRycyBtdXN0IGdldCBkeW5hbWljYWxseS5cbiAgICAgICAgICByZXQudXJsID0gcm9vdC5vcHRpb25zLnVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICByZXQudGl0bGUgPSByb290Lm9wdGlvbnMudGl0bGUgfHwgcm9vdC5nZXRUaXRsZSgpO1xuICAgICAgICAgIHJldC5pbWFnZSA9IHJvb3Qub3B0aW9ucy5pbWFnZSB8fCByb290LmdldEltYWdlKCk7XG4gICAgICAgICAgcmV0LmRlc2NyaXB0aW9uID0gcm9vdC5vcHRpb25zLmRlc2NyaXB0aW9uIHx8IHJvb3QuZ2V0RGVzY3JpcHRpb24oKTtcbiAgXG4gICAgICAgICAgZm9yICh2YXIgb3B0aW9uIGluIGVsLmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgLy8gcmVwbGFjZSBvbmx5ICdzaGFyZS0nIHByZWZpeGVkIGRhdGEtYXR0cmlidXRlc1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5tYXRjaCgvc2hhcmUvKSkge1xuICAgICAgICAgICAgICB2YXIgbmV3X29wdGlvbiA9IG9wdGlvbi5yZXBsYWNlKC9zaGFyZS8sICcnKTtcbiAgICAgICAgICAgICAgaWYgKCFuZXdfb3B0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmV3X29wdGlvbiA9IG5ld19vcHRpb24uY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuZXdfb3B0aW9uLnNsaWNlKDEpO1xuICAgICAgICAgICAgICB2YXIgdmFsID0gZWwuZGF0YXNldFtvcHRpb25dO1xuICAgICAgICAgICAgICBpZiAobmV3X29wdGlvbiA9PT0gJ25ldHdvcmtzJykge1xuICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdfb3B0aW9uID09PSAndXJsJyAmJiB2YWwgJiYgdmFsWzBdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGZpeCByZWxhdGl2ZSB1cmwgcHJvYmxlbS5cbiAgICAgICAgICAgICAgICAgIHZhbCA9IGxvY2F0aW9uLm9yaWdpbiArIHZhbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXRbbmV3X29wdGlvbl0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gIFxuICAgICAgZnVuY3Rpb24gY3JlYXRlRHJvcGRvd24oZWwpIHtcbiAgICAgICAgICAvLyBjcmVhdGUgZHJvcGRvd25cbiAgICAgICAgICB2YXIgZHJvcGRvd25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSA9ICduZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bic7XG4gICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bicpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICBcbiAgICAgICAgICAvLyBzZXQgZHJvcGRvd24gcm93IGxlbmd0aFxuICAgICAgICAgIGlmIChteW9wdGlvbnMuaWNvblN0eWxlID09ICdib3gnICYmIG15b3B0aW9ucy5ib3hGb3JtID09ICdob3Jpem9udGFsJylcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3gtaG9yaXpvbnRhbCc7XG4gICAgICAgICAgZWxzZSBpZiAobXlvcHRpb25zLmljb25TdHlsZSA9PSAnYm94JyAmJiBteW9wdGlvbnMuYm94Rm9ybSA9PSAndmVydGljYWwnKVxuICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJveC12ZXJ0aWNhbCc7XG4gIFxuICAgICAgICAgIC8vIHNldCBkcm9wZG93biBwb3NpdGlvbiBcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKG15b3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgICAgICAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1sZWZ0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtcmlnaHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ3RvcENlbnRlcic6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdtaWRkbGVMZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLW1pZGRsZS1sZWZ0JztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpblRvcCA9IC0gZHJvcGRvd25FbC5vZmZzZXRIZWlnaHQgLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdtaWRkbGVSaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1taWRkbGUtcmlnaHQnO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luVG9wID0gLSBkcm9wZG93bkVsLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWxlZnQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1yaWdodCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tQ2VudGVyJzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1jZW50ZXInO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC0gZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwxKTtcbiAgXG4gIFxuICAgICAgICAgIC8vIGZpbGwgZnJvcGRvd24gd2l0aCBidXR0b25zXG4gICAgICAgICAgdmFyIGljb25DbGFzcyA9IG15b3B0aW9ucy5pY29uU3R5bGUgPT0gJ2RlZmF1bHQnID8gJ25lZWQtc2hhcmUtYnV0dG9uX2xpbmsgbmVlZC1zaGFyZS1idXR0b25fJyA6ICduZWVkLXNoYXJlLWJ1dHRvbl9saW5rLScgKyBteW9wdGlvbnMuaWNvblN0eWxlICsgJyBuZWVkLXNoYXJlLWJ1dHRvbl9saW5rIG5lZWQtc2hhcmUtYnV0dG9uXyc7XG4gICAgICAgICAgbGV0IGZsYWcgPSAwO1xuICAgICAgICAgIGZvciAodmFyIG5ldHdvcmsgaW4gbXlvcHRpb25zLm5ldHdvcmtzKSB7XG4gICAgICAgICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgbmV0d29yayA9IG15b3B0aW9ucy5uZXR3b3Jrc1tuZXR3b3JrXTtcbiAgICAgICAgICAgICAgbGluay5jbGFzc05hbWUgPSBpY29uQ2xhc3MgKyBuZXR3b3JrO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteW9wdGlvbnMuaWNvbnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgbGluay5jbGFzc05hbWUgKz0gJyAnK215b3B0aW9ucy5pY29uc1tmbGFnXTtcbiAgICAgICAgICAgICAgbGluay5kYXRhc2V0Lm5ldHdvcmsgPSBuZXR3b3JrO1xuICAgICAgICAgICAgICBsaW5rLnRpdGxlID0gbmV0d29yaztcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgICAgICAgZmxhZysrO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgZHJvcGRvd25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgIGlmIChjbG9zZXN0KGV2ZW50LnRhcmdldCwgJy5uZWVkLXNoYXJlLWJ1dHRvbl9saW5rJykpIHtcbiAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIFxuICAgICAgICAgICAgICAgICByb290LnNoYXJlW2V2ZW50LnRhcmdldC5kYXRhc2V0Lm5ldHdvcmtdKGVsKTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZHJvcGRvd25FbCk7XG4gICAgICB9XG4gIFxuICAgICAgdmFyIHRhcmdldEVsID0gdHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKSA6IGVsZW07XG4gICAgICAgaWYgKHRhcmdldEVsICYmIHRhcmdldEVsLmNsYXNzTGlzdC5jb250YWlucygnbmVlZC1zaGFyZS1wYW5lbCcpKSB7XG4gICAgICAgIGNyZWF0ZURyb3Bkb3duKHRhcmdldEVsKTtcbiAgICAgICAgLy8gdGFyZ2V0RWwuY2xhc3NMaXN0LmFkZCgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gICAgICB9IGVsc2UgXG4gICAgICAgIC8vIGNsb3NlIG9uIGNsaWNrIG91dHNpZGVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHZhciBvcGVuZWRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgXG4gICAgICAgICAgaWYgKCFjbG9zZXN0KGV2ZW50LnRhcmdldCwgJy5uZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKSkge1xuICAgICAgICAgICAgaWYgKG9wZW5lZEVsKSB7XG4gICAgICAgICAgICAgICAgb3BlbmVkRWwuY2xhc3NMaXN0LnJlbW92ZSgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gIFxuICAgICAgICAgICAgICAgIC8vIGhpZGUgd2VjaGF0IGNvZGUgaW1hZ2Ugd2hlbiBjbG9zZSB0aGUgZHJvcGRvd24uXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5lZEVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkRWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCByb290LmVsZW0pO1xuICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURyb3Bkb3duKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XG4gIFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICBcbiAgICB9O1xuICBcbiAgICBuZXcgbmVlZFNoYXJlQnV0dG9uKCcubmVlZC1zaGFyZS1idXR0b24nKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50b2NfYnRuKCk7XG4gICAgfSxcbiAgICB0b2NfYnRuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHRvY19jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9jX2NvbnRhaW5lcicpO1xuICAgICAgICBsZXQgdG9jX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2NfYnRuJyk7XG4gICAgICAgICQodG9jX2J0bikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICh0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJyl7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5cblxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLndlYl9pbmZvX3J1bnRpbWUoKTtcbiAgICB9LFxuICAgIC8vIFRPRE86ICEhIeaIkeedgOWunuS4jeefpemBk+i/meaYr+S4quS7gOS5iOenmFxuICAgIHdlYl9pbmZvX3J1bnRpbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBCaXJ0aERheSA9IG5ldyBEYXRlKG5ldyBEYXRlKCcyMDIwLzAxLzA0JykpO1xuICAgICAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGxldCB0aW1lb2xkID0gKHRvZGF5LmdldFRpbWUoKSAtIEJpcnRoRGF5LmdldFRpbWUoKSk7XG4gICAgICAgICAgICBsZXQgZGF5c29sZCA9IE1hdGguZmxvb3IodGltZW9sZCAvICgyNCAqIDYwICogNjAgKiAxMDAwKSk7XG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYmluZm9fcnVudGltZV9jb3VudF8xXCIpLmlubmVyVGV4dCA9IGRheXNvbGQgKyAnIOWkqSc7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXlzb2xkKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2ViaW5mb19ydW50aW1lX2NvdW50XzFcIikpO1xuICAgIH0sXG59XG5cbiJdfQ==
