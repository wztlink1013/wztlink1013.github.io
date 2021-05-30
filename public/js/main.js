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

var _live2d = require("./part/live2d.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 初始化highlight脚本
hljs.initHighlightingOnLoad(); // 域名重定向

if (window.location.hostname === 'wztlink1013.com') {
  location.replace(location.href.replace('wztlink1013.com', 'www.wztlink1013.com'));
} // live2d 初始化


(0, _live2d.initWidget)({
  waifuPath: "/data/remu.json",
  //apiPath: "https://live2d.fghrsh.net/api/",
  cdnPath: "https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"
}); // 入口函数，会在页面加载完毕执行

$(function () {
  // 初始化目录脚本函数
  _toc["default"].init(); // 初始化评论模块下所有函数


  _comments["default"].init(); // 初始化回到顶部


  _go_top.go_top_object.init(); // 布局初始化


  _layout["default"].init();

  _search["default"].init(); // 入口函数初始化网站运行时间


  _web_info["default"].init(); // 分享按钮的初始化


  _sharebutton["default"].init(); // 目录函数初始化


  _categories["default"].init();
});

},{"./common/layout.js":1,"./part/categories.js":3,"./part/comments.js":4,"./part/go_top.js":5,"./part/live2d.js":6,"./part/search.js":7,"./part/sharebutton.js":8,"./part/toc.js":9,"./part/web_info.js":10}],3:[function(require,module,exports){
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
      if (utterances_comment.style.display === 'none') {
        utterances_comment.style.display = 'block';
        twikoo_comment.style.display = 'none';

        if (!utterances_comment.children[0]) {
          var script_utterances = document.createElement("script");
          script_utterances.src = "https://utteranc.es/client.js";
          script_utterances.setAttribute("repo", "wztlink1013/comment");
          script_utterances.setAttribute("issue-term", "title");
          script_utterances.setAttribute("label", "💬comment");
          script_utterances.setAttribute("theme", "github-light");
          script_utterances.setAttribute("crossorigin", "anonymous");
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
exports.initWidget = initWidget;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * Live2D Widget
 * https://github.com/stevenjoezhang/live2d-widget
 */
function loadWidget(config) {
  var waifuPath = config.waifuPath,
      apiPath = config.apiPath,
      cdnPath = config.cdnPath;
  var useCDN = false,
      modelList;

  if (typeof cdnPath === "string") {
    useCDN = true;
    if (!cdnPath.endsWith("/")) cdnPath += "/";
  } else if (typeof apiPath === "string") {
    if (!apiPath.endsWith("/")) apiPath += "/";
  } else {
    console.error("Invalid initWidget argument!");
    return;
  }

  localStorage.removeItem("waifu-display");
  sessionStorage.removeItem("waifu-text");
  document.body.insertAdjacentHTML("beforeend", "<div id=\"waifu\">\n                <div id=\"waifu-tips\"></div>\n                <canvas id=\"live2d\" width=\"300\" height=\"800\"></canvas>\n                <div id=\"waifu-tool\">\n                    <span class=\"fa fa-lg fa-comment\"></span>\n                    <span class=\"fa fa-lg fa-paper-plane\"></span>\n                    <span class=\"fa fa-lg fa-user-circle\"></span>\n                    <span class=\"fa fa-lg fa-street-view\"></span>\n                    <span class=\"fa fa-lg fa-camera-retro\"></span>\n                    <span class=\"fa fa-lg fa-info-circle\"></span>\n                    <span class=\"fa fa-lg fa-times\"></span>\n                </div>\n            </div>"); // https://stackoverflow.com/questions/24148403/trigger-css-transition-on-appended-element

  setTimeout(function () {
    document.getElementById("waifu").style.bottom = 0;
  }, 0);

  function randomSelection(obj) {
    return Array.isArray(obj) ? obj[Math.floor(Math.random() * obj.length)] : obj;
  } // 检测用户活动状态，并在空闲时显示消息


  var userAction = false,
      userActionTimer,
      messageTimer,
      messageArray = ["好久不见，日子过得好快呢……", "大坏蛋！你都多久没理人家了呀，嘤嘤嘤～", "嗨～快来逗我玩吧！", "拿小拳拳锤你胸口！", "记得把小家加入 Adblock 白名单哦！"];
  window.addEventListener("mousemove", function () {
    return userAction = true;
  });
  window.addEventListener("keydown", function () {
    return userAction = true;
  });
  setInterval(function () {
    if (userAction) {
      userAction = false;
      clearInterval(userActionTimer);
      userActionTimer = null;
    } else if (!userActionTimer) {
      userActionTimer = setInterval(function () {
        showMessage(randomSelection(messageArray), 6000, 9);
      }, 20000);
    }
  }, 1000);

  (function registerEventListener() {
    document.querySelector("#waifu-tool .fa-comment").addEventListener("click", showHitokoto);
    document.querySelector("#waifu-tool .fa-paper-plane").addEventListener("click", function () {
      if (window.Asteroids) {
        if (!window.ASTEROIDSPLAYERS) window.ASTEROIDSPLAYERS = [];
        window.ASTEROIDSPLAYERS.push(new Asteroids());
      } else {
        var script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/gh/stevenjoezhang/asteroids/asteroids.js";
        document.head.appendChild(script);
      }
    });
    document.querySelector("#waifu-tool .fa-user-circle").addEventListener("click", loadOtherModel);
    document.querySelector("#waifu-tool .fa-street-view").addEventListener("click", loadRandModel);
    document.querySelector("#waifu-tool .fa-camera-retro").addEventListener("click", function () {
      showMessage("照好了嘛，是不是很可爱呢？", 6000, 9);
      Live2D.captureName = "photo.png";
      Live2D.captureFrame = true;
    });
    document.querySelector("#waifu-tool .fa-info-circle").addEventListener("click", function () {
      open("https://github.com/stevenjoezhang/live2d-widget");
    });
    document.querySelector("#waifu-tool .fa-times").addEventListener("click", function () {
      localStorage.setItem("waifu-display", Date.now());
      showMessage("愿你有一天能与重要的人重逢。", 2000, 11);
      document.getElementById("waifu").style.bottom = "-500px";
      setTimeout(function () {
        document.getElementById("waifu").style.display = "none";
        document.getElementById("waifu-toggle").classList.add("waifu-toggle-active");
      }, 3000);
    });

    var devtools = function devtools() {};

    console.log("%c", devtools);

    devtools.toString = function () {
      showMessage("哈哈，你打开了控制台，是想要看看我的小秘密吗？", 6000, 9);
    };

    window.addEventListener("copy", function () {
      showMessage("你都复制了些什么呀，转载要记得加上出处哦！", 6000, 9);
    });
    window.addEventListener("visibilitychange", function () {
      if (!document.hidden) showMessage("哇，你终于回来了～", 6000, 9);
    });
  })();

  (function welcomeMessage() {
    var text;

    if (location.pathname === "/") {
      // 如果是主页
      var now = new Date().getHours();
      if (now > 5 && now <= 7) text = "早上好！一日之计在于晨，美好的一天就要开始了。";else if (now > 7 && now <= 11) text = "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！";else if (now > 11 && now <= 13) text = "中午了，工作了一个上午，现在是午餐时间！";else if (now > 13 && now <= 17) text = "午后很容易犯困呢，今天的运动目标完成了吗？";else if (now > 17 && now <= 19) text = "傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～";else if (now > 19 && now <= 21) text = "晚上好，今天过得怎么样？";else if (now > 21 && now <= 23) text = ["已经这么晚了呀，早点休息吧，晚安～", "深夜时要爱护眼睛呀！"];else text = "你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？";
    } else if (document.referrer !== "") {
      var referrer = new URL(document.referrer),
          domain = referrer.hostname.split(".")[1];
      if (location.hostname === referrer.hostname) text = "\u6B22\u8FCE\u9605\u8BFB<span>\u300C".concat(document.title.split(" - ")[0], "\u300D</span>");else if (domain === "baidu") text = "Hello\uFF01\u6765\u81EA \u767E\u5EA6\u641C\u7D22 \u7684\u670B\u53CB<br>\u4F60\u662F\u641C\u7D22 <span>".concat(referrer.search.split("&wd=")[1].split("&")[0], "</span> \u627E\u5230\u7684\u6211\u5417\uFF1F");else if (domain === "so") text = "Hello\uFF01\u6765\u81EA 360\u641C\u7D22 \u7684\u670B\u53CB<br>\u4F60\u662F\u641C\u7D22 <span>".concat(referrer.search.split("&q=")[1].split("&")[0], "</span> \u627E\u5230\u7684\u6211\u5417\uFF1F");else if (domain === "google") text = "Hello\uFF01\u6765\u81EA \u8C37\u6B4C\u641C\u7D22 \u7684\u670B\u53CB<br>\u6B22\u8FCE\u9605\u8BFB<span>\u300C".concat(document.title.split(" - ")[0], "\u300D</span>");else text = "Hello\uFF01\u6765\u81EA <span>".concat(referrer.hostname, "</span> \u7684\u670B\u53CB");
    } else {
      text = "\u6B22\u8FCE\u9605\u8BFB<span>\u300C".concat(document.title.split(" - ")[0], "\u300D</span>");
    }

    showMessage(text, 7000, 8);
  })();

  function showHitokoto() {
    // 增加 hitokoto.cn 的 API
    fetch("https://v1.hitokoto.cn").then(function (response) {
      return response.json();
    }).then(function (result) {
      var text = "\u8FD9\u53E5\u4E00\u8A00\u6765\u81EA <span>\u300C".concat(result.from, "\u300D</span>\uFF0C\u662F <span>").concat(result.creator, "</span> \u5728 hitokoto.cn \u6295\u7A3F\u7684\u3002");
      showMessage(result.hitokoto, 6000, 9);
      setTimeout(function () {
        showMessage(text, 4000, 9);
      }, 6000);
    });
  }

  function showMessage(text, timeout, priority) {
    if (!text || sessionStorage.getItem("waifu-text") && sessionStorage.getItem("waifu-text") > priority) return;

    if (messageTimer) {
      clearTimeout(messageTimer);
      messageTimer = null;
    }

    text = randomSelection(text);
    sessionStorage.setItem("waifu-text", priority);
    var tips = document.getElementById("waifu-tips");
    tips.innerHTML = text;
    tips.classList.add("waifu-tips-active");
    messageTimer = setTimeout(function () {
      sessionStorage.removeItem("waifu-text");
      tips.classList.remove("waifu-tips-active");
    }, timeout);
  }

  (function initModel() {
    var modelId = localStorage.getItem("modelId"),
        modelTexturesId = localStorage.getItem("modelTexturesId");

    if (modelId === null) {
      // 首次访问加载 指定模型 的 指定材质
      modelId = 1; // 模型 ID

      modelTexturesId = 53; // 材质 ID
    }

    loadModel(modelId, modelTexturesId);
    fetch(waifuPath).then(function (response) {
      return response.json();
    }).then(function (result) {
      window.addEventListener("mouseover", function (event) {
        var _iterator = _createForOfIteratorHelper(result.mouseover),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _step.value,
                selector = _step$value.selector,
                text = _step$value.text;
            if (!event.target.matches(selector)) continue;
            text = randomSelection(text);
            text = text.replace("{text}", event.target.innerText);
            showMessage(text, 4000, 8);
            return;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      window.addEventListener("click", function (event) {
        var _iterator2 = _createForOfIteratorHelper(result.click),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _step2.value,
                selector = _step2$value.selector,
                text = _step2$value.text;
            if (!event.target.matches(selector)) continue;
            text = randomSelection(text);
            text = text.replace("{text}", event.target.innerText);
            showMessage(text, 4000, 8);
            return;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
      result.seasons.forEach(function (_ref) {
        var date = _ref.date,
            text = _ref.text;
        var now = new Date(),
            after = date.split("-")[0],
            before = date.split("-")[1] || after;

        if (after.split("/")[0] <= now.getMonth() + 1 && now.getMonth() + 1 <= before.split("/")[0] && after.split("/")[1] <= now.getDate() && now.getDate() <= before.split("/")[1]) {
          text = randomSelection(text);
          text = text.replace("{year}", now.getFullYear()); //showMessage(text, 7000, true);

          messageArray.push(text);
        }
      });
    });
  })();

  function loadModelList() {
    return _loadModelList.apply(this, arguments);
  }

  function _loadModelList() {
    _loadModelList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(cdnPath, "model_list.json"));

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              modelList = _context.sent;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _loadModelList.apply(this, arguments);
  }

  function loadModel(_x, _x2, _x3) {
    return _loadModel.apply(this, arguments);
  }

  function _loadModel() {
    _loadModel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(modelId, modelTexturesId, message) {
      var target;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              localStorage.setItem("modelId", modelId);
              localStorage.setItem("modelTexturesId", modelTexturesId);
              showMessage(message, 4000, 10);

              if (!useCDN) {
                _context2.next = 11;
                break;
              }

              if (modelList) {
                _context2.next = 7;
                break;
              }

              _context2.next = 7;
              return loadModelList();

            case 7:
              target = randomSelection(modelList.models[modelId]);
              loadlive2d("live2d", "".concat(cdnPath, "model/").concat(target, "/index.json"));
              _context2.next = 13;
              break;

            case 11:
              loadlive2d("live2d", "".concat(apiPath, "get/?id=").concat(modelId, "-").concat(modelTexturesId));
              console.log("Live2D \u6A21\u578B ".concat(modelId, "-").concat(modelTexturesId, " \u52A0\u8F7D\u5B8C\u6210"));

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _loadModel.apply(this, arguments);
  }

  function loadRandModel() {
    return _loadRandModel.apply(this, arguments);
  }

  function _loadRandModel() {
    _loadRandModel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var modelId, modelTexturesId, target;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              modelId = localStorage.getItem("modelId"), modelTexturesId = localStorage.getItem("modelTexturesId");

              if (!useCDN) {
                _context3.next = 10;
                break;
              }

              if (modelList) {
                _context3.next = 5;
                break;
              }

              _context3.next = 5;
              return loadModelList();

            case 5:
              target = randomSelection(modelList.models[modelId]);
              loadlive2d("live2d", "".concat(cdnPath, "model/").concat(target, "/index.json"));
              showMessage("我的新衣服好看嘛？", 4000, 10);
              _context3.next = 11;
              break;

            case 10:
              // 可选 "rand"(随机), "switch"(顺序)
              fetch("".concat(apiPath, "rand_textures/?id=").concat(modelId, "-").concat(modelTexturesId)).then(function (response) {
                return response.json();
              }).then(function (result) {
                if (result.textures.id === 1 && (modelTexturesId === 1 || modelTexturesId === 0)) showMessage("我还没有其他衣服呢！", 4000, 10);else loadModel(modelId, result.textures.id, "我的新衣服好看嘛？");
              });

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _loadRandModel.apply(this, arguments);
  }

  function loadOtherModel() {
    return _loadOtherModel.apply(this, arguments);
  }

  function _loadOtherModel() {
    _loadOtherModel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var modelId, index;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              modelId = localStorage.getItem("modelId");

              if (!useCDN) {
                _context4.next = 9;
                break;
              }

              if (modelList) {
                _context4.next = 5;
                break;
              }

              _context4.next = 5;
              return loadModelList();

            case 5:
              index = ++modelId >= modelList.models.length ? 0 : modelId;
              loadModel(index, 0, modelList.messages[index]);
              _context4.next = 10;
              break;

            case 9:
              fetch("".concat(apiPath, "switch/?id=").concat(modelId)).then(function (response) {
                return response.json();
              }).then(function (result) {
                loadModel(result.model.id, 0, result.model.message);
              });

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _loadOtherModel.apply(this, arguments);
  }
}

function initWidget(config, apiPath) {
  if (typeof config === "string") {
    config = {
      waifuPath: config,
      apiPath: apiPath
    };
  }

  document.body.insertAdjacentHTML("beforeend", "<div id=\"waifu-toggle\">\n                <span>\u96F7\u59C6</span>\n            </div>");
  var toggle = document.getElementById("waifu-toggle");
  toggle.addEventListener("click", function () {
    toggle.classList.remove("waifu-toggle-active");

    if (toggle.getAttribute("first-time")) {
      loadWidget(config);
      toggle.removeAttribute("first-time");
    } else {
      localStorage.removeItem("waifu-display");
      document.getElementById("waifu").style.display = "";
      setTimeout(function () {
        document.getElementById("waifu").style.bottom = 0;
      }, 0);
    }
  });

  if (localStorage.getItem("waifu-display") && Date.now() - localStorage.getItem("waifu-display") <= 86400000) {
    toggle.setAttribute("first-time", true);
    setTimeout(function () {
      toggle.classList.add("waifu-toggle-active");
    }, 0);
  } else {
    loadWidget(config);
  }
} // 如果不做默认导入，就按照下面写，不要default词

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY2F0ZWdvcmllcy5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvbGl2ZTJkLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9zZWFyY2guanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L3NoYXJlYnV0dG9uLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC90b2MuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L3dlYl9pbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxhQUFELENBQWxCO0FBQ0EsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGNBQUQsQ0FBbkIsQyxDQUVBOztBQUNBLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxVQUFELENBQWY7QUFDQSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsV0FBRCxDQUFoQjtBQUNB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QUFlLElBQW5CLENBQWxCLENBQWQsQ0FKc0IsQ0FLdEI7QUFDQTtBQUNBO0FBQ1A7QUFiVSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyogIFxuICAgIFRPRE86IFxuICAgICAgICDog73lnKjmoLnnm67lvZXorr7nva7pu5jorqTnirbmgIHmmK/lh6DmoI/nmoRcbiAgICAgICAg6IO95aSf6K6p5L2/55So6ICF5Y+W5raI6L+Z56eN4oCc6K6w5b+G4oCdXG4qKi9cblxuXG4vLyBQQ++8mmhlYWRlcuS4iueahOW3puWPs+aMiemSruWMuuWfn1xubGV0IGFycm93X2xlZnQgPSAkKCcjYXJyb3dfbGVmdCcpO1xubGV0IGFycm93X3JpZ2h0ID0gJCgnI2Fycm93X3JpZ2h0Jyk7XG5cbi8vIOW4g+WxgO+8mueJiOW/g+OAgeW3puS4reWPs+aOkueJiFxubGV0IGN0X2xlZnQgPSAkKCcuY3RfbGVmdCcpO1xubGV0IGN0X3JpZ2h0ID0gJCgnLmN0X3JpZ2h0Jyk7XG5sZXQgY3RfY2VudGVyID0gJCgnLmN0X2NlbnRlcicpO1xubGV0IGNvbnRhaW5lciA9ICQoJy5jb250YWluZXInKTtcblxuLy8gUEMvYXBw77ya5YiH5o2iaGVhZGVyXG5sZXQgaGVhZGVyID0gJCgnLmhlYWRlcicpO1xubGV0IGhlYWRlcl9hcHAgPSAkKCcuaGVhZGVyX2FwcCcpO1xuXG4vLyBhcHDvvJpoZWFkZXLkuIrnmoTlt6blj7PmjInpkq7ljLrln59cbmxldCBidG5fYXBwX3NpZGVyID0gJCgnI2J0bl9hcHBfc2lkZXInKTtcbmxldCBidG5fYXBwX3JpZ2h0ID0gJCgnI2J0bl9hcHBfcmlnaHQnKTtcblxuLy8gYXBw77ya54K55Ye7aGVhZGVyX2FwcOaXtuWAmeW8ueWHuuadpeeahOaKveWxiVxubGV0IGFwcF9zaWRlX2dsYXNzID0gJCgnI2FwcF9zaWRlX2dsYXNzJyk7XG5sZXQgYXBwX3NpZGVfY29udGVudCA9ICQoJyNhcHBfc2lkZV9jb250ZW50Jyk7XG5cbi8vIDEu5bem5Lit6YWN572uXG5sZXQgb25lX2NvbnRhaW5lciA9ICc4MCUnIDtcbmxldCBvbmVfY3RfY2VudGVyX3dpZHRoID0gJzc1JSc7XG5sZXQgb25lX2N0X2xlZnRfd2lkdGggPSAnMjUlJztcbi8vIDIuIOS4reWPs+mFjee9rlxubGV0IHR3b19jb250YWluZXIgPSAnODAlJyA7XG5sZXQgdHdvX2N0X2NlbnRlcl93aWR0aCA9ICc3NSUnO1xubGV0IHR3b19jdF9yaWdodF93aWR0aCA9ICcyNSUnO1xuLy8gMy4g5bem5Lit5Y+z6YWN572uXG5sZXQgdGhyZWVfY29udGFpbmVyID0gJzk1JScgO1xubGV0IHRocmVlX2N0X2NlbnRlcl93aWR0aCA9ICc2MCUnO1xubGV0IHRocmVlX2N0X3JpZ2h0X3dpZHRoID0gJzIwJSc7XG5sZXQgdGhyZWVfY3RfbGVmdF93aWR0aCA9ICcyMCUnO1xuLy8gNC4g5Lit6YWN572uXG5sZXQgZm91cl9jb250YWluZXIgPSAnOTAlJyA7XG5sZXQgZm91cl9jdF9jZW50ZXJfd2lkdGggPSAnMTAwJSc7XG4vLyDorr7lpIflsI/kuo41NjBweOeahOS4remFjee9rlxubGV0IGRldmljZV9zbWFsbF9jb250YWluZXIgPSBcIjk3JVwiO1xubGV0IGRldmljZV9zbWFsbF9jZW50ZXIgPSBcIjEwMCVcIjtcbi8vIOiuvuWkh+Wwj+S6jjc4MHB455qE5Lit6YWN572uXG5sZXQgZGV2aWNlX2NlbnRlcl9jb250YWluZXIgPSBcIjkzJVwiO1xubGV0IGRldmljZV9jZW50ZXJfY2VudGVyID0gXCIxMDAlXCI7XG5cblxuLy8g5Yik5patcGPmrrXlt6blj7PkuIrop5LnmoTnrq3lpLTor6XmmL7npLrlk6rkuKpcbmZ1bmN0aW9uIGxlZnRfcmlnaHRfYXJyb3cgKCkge1xuICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbiAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbGVmdF9jZW50ZXJfcmlnaHQgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGN0X3JpZ2h0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfcmlnaHRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbiAgICBsZWZ0X3JpZ2h0X2Fycm93ICgpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXlvdXQnKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnTFInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdMUicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxlZnRfY2VudGVyICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IG9uZV9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IG9uZV9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyh7XCJ3aWR0aFwiOiBvbmVfY3RfbGVmdF93aWR0aH0pO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgbGVmdF9yaWdodF9hcnJvdyAoKTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGF5b3V0Jyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5YiH5o2i5Yiw5bem5Lit5biD5bGA5LqGXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjZW50ZXJfcmlnaHQgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogdHdvX2NvbnRhaW5lcn0pO1xuICAgIGN0X3JpZ2h0LmNzcyh7XCJ3aWR0aFwiOiB0d29fY3RfcmlnaHRfd2lkdGh9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IHR3b19jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgbGVmdF9yaWdodF9hcnJvdyAoKTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGF5b3V0Jyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ1InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdSJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2VudGVyICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGZvdXJfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBmb3VyX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ0MnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdDJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV2aWNlX3NtYWxsICgpIHtcbiAgICAvLyDmnIDlsI/lsLrlr7jvvJrmnIDlpKc1NjBweFxuICAgIGNvbnNvbGUubG9nKFwi5bCP5LqONTYwcHjlsLrlr7hcIik7XG5cbiAgICBoZWFkZXIuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICBoZWFkZXJfYXBwLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIC8vIOiuvue9ruW4g+WxgFxuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX3NtYWxsX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX3NtYWxsX2NlbnRlcn0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuXG59XG5mdW5jdGlvbiBkZXZpY2VfY2VudGVyICgpIHtcbiAgICAvLyDkuK3nrYnlsLrlr7jvvJrmnIDlpKc5ODBweFxuICAgIGNvbnNvbGUubG9nKFwi5bCP5LqOOTgwcHjlsLrlr7hcIik7XG5cbiAgICBoZWFkZXIuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICBoZWFkZXJfYXBwLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIC8vIOiuvue9ruW4g+WxgFxuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX2NlbnRlcl9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9jZW50ZXJfY2VudGVyfSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG5cbn1cbmZ1bmN0aW9uIGRldmljZV9sYXJnZXN0ICgpIHtcbiAgICAvLyDmnIDlpKflsLrlr7jvvJrmnIDlpKcxMjYxcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjEyNjFweOWwuuWvuFwiKTtcblxuICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbiAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbiAgICBoZWFkZXIuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuXG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IHRocmVlX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgY3RfcmlnaHQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9yaWdodF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xufVxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5idG5fcGNfc3dpdGNoKCk7XG4gICAgICAgIHRoaXMuYnRuX2FwcF9zd2l0Y2goKTtcbiAgICAgICAgdGhpcy5icm93c2VyX3JlbWVtYmVyKCk7XG4gICAgICAgIHRoaXMuZGV2aWNlX3N3aXRjaCgpOyAvLyDov5nkuKrmlL7liLDmnIDlkI7oh6rosIPnlKjvvIzlm6DkuLrkuI3nrqHmnKzlnLDlrZjlgqjmmK/ku4DkuYjvvIzmnIDnu4jov5jmmK/opoHmoLnmja7orr7lpIfnm5HlkKzkuLrkuLtcbiAgICB9LFxuICAgIC8qIFBD77ya5Y2VL+WPjC/kuInmoI/luIPlsYDliIfmjaLmjInpkq7ngrnlh7vkuovku7YgKi9cbiAgICBidG5fcGNfc3dpdGNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgYXJyb3dfbGVmdC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8v5bem5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/lt6bkuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCdub25lJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8v5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBhcnJvd19yaWdodC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy/kuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/lt6bkuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCdub25lJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy8g5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIOW3puS4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKiDnp7vliqjnq6/lt6blj7PkuIrop5LnmoTmjInpkq4gKi9cbiAgICBidG5fYXBwX3N3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOeCueWHu+W3puaMiemSrlxuICAgICAgICBidG5fYXBwX3NpZGVyLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhcHBfc2lkZV9nbGFzcy5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAgICAgICAgIGFwcF9zaWRlX2NvbnRlbnQuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDngrnlh7vmr5vnjrvnkoPniYdcbiAgICAgICAgYXBwX3NpZGVfZ2xhc3MuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFwcF9zaWRlX2dsYXNzLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgICAgICAgICBhcHBfc2lkZV9jb250ZW50LmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDngrnlh7vlj7PmjInpkq5cbiAgICAgICAgYnRuX2FwcF9yaWdodC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgYWxlcnQoXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qIOa1j+iniOWZqOiusOS9j+W4g+WxgCAqL1xuICAgIGJyb3dzZXJfcmVtZW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGJfbGVmdCA9ICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIik7XG4gICAgICAgIGxldCBiX3JpZ2h0ID0gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIik7XG4gICAgICAgIGxldCBiX2xheW91dDtcbiAgICBcbiAgICAgICAgLyogXG4gICAgICAgIOacieS4qumXrumimO+8mlxuICAgICAgICAgICAg5LiA5omT5byA5rWP6KeI5Zmo5bCx5Lya5qC55o2u57yT5a2Y5p2l5biD5bGA77yM5bC9566h5L2g55qE6K6+5aSH5a695bqm5bCP5LqOMTI2MHB4XG4gICAgICAgICAgICDkvYbmmK/lr7nkuo7mma7pgJrnlKjmiLfvvIzkuIDkuKrmtY/op4jlmajlk6rmnaXnmoTnu4/luLjlvIDlvIDlj5HogIXmqKHlvI/lkaLvvJ9cbiAgICAgICAgKi9cbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICAgICAgLy8g5rWP6KeI5Zmo5pyJ57yT5a2Y55qE5oOF5Ya1XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacrOWcsOacieivpeWPmOmHj+e8k+WtmFwiKTtcbiAgICAgICAgICAgIGxldCBsYXlvdXRfY2hhbmdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGF5b3V0X2NoYW5nZSk7XG4gICAgXG4gICAgICAgICAgICBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJMUlwiKXtcbiAgICAgICAgICAgICAgICAvLyDlt6bkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGxheW91dF9jaGFuZ2UgPT09IFwiTFwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5bem5Lit5biD5bGAXG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJSXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJDXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDkuK3luIPlsYBcbiAgICAgICAgICAgICAgICBjZW50ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5YW25LuW6I6r5ZCN5YW25aaZ55qE5oOF5Ya1XG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOa1j+iniOWZqOayoeaciee8k+WtmOeahOaDheWGtVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKzlnLDmsqHmnInor6Xlj5jph4/nvJPlrZhcIik7XG4gICAgICAgICAgICBpZiAoKGJfbGVmdCA9PT0gXCJibG9ja1wiKSAmJiAoYl9yaWdodCA9PT0gXCJub25lXCIpKSB7IC8vIOW3puS4reW4g+WxgFxuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJMXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChiX2xlZnQgPT09IFwibm9uZVwiKSAmJiAoYl9yaWdodCA9PT0gXCJibG9ja1wiKSkgeyAvLyDkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBiX2xheW91dCA9IFwiUlwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoYl9sZWZ0ID09PSBcImJsb2NrXCIpICYmIChiX3JpZ2h0ID09PSBcImJsb2NrXCIpKSB7IC8v5bem5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIkxSXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIkNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIGJfbGF5b3V0KVxuICAgICAgICB9XG5cblxuICAgIH0sXG4gICAgLyog5aqS5L2T5p+l6K+i5biD5bGAICovXG4gICAgZGV2aWNlX3N3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOWIm+W7uuafpeivouWIl+ihqFxuICAgICAgICBsZXQgZGV2aWNlX3dpZHRoID0gW1xuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDU2MHB4KScpLFxuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk4MHB4KScpLFxuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEyNjFweCknKVxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIOWumuS5ieWbnuiwg+WHveaVsFxuICAgICAgICBmdW5jdGlvbiBtZWRpYU1hdGNocyAoKSB7XG4gICAgICAgICAgICBpZiAoZGV2aWNlX3dpZHRoWzBdLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBkZXZpY2Vfc21hbGwgKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRldmljZV93aWR0aFsxXS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgZGV2aWNlX2NlbnRlciAoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX3dpZHRoWzJdLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBkZXZpY2VfbGFyZ2VzdCAoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlsLrlr7jlhbbku5bmg4XlhrXvvIznkIborrrkuIrmiJHnnIvkuI3liLDov5nlj6Xor53igKbigKZcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5YWI6L+Q6KGM5LiA5qyh5Zue6LCD5Ye95pWwXG4gICAgICAgIG1lZGlhTWF0Y2hzKCk7XG4gICAgICAgIC8vIOS4uuafpeivouWIl+ihqOazqOWGjOebkeWQrOWZqO+8jOWQjOaXtuWwhuWbnuiwg+WHveaVsOS8oOe7meebkeWQrOWZqFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRldmljZV93aWR0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGV2aWNlX3dpZHRoW2ldLmFkZExpc3RlbmVyKG1lZGlhTWF0Y2hzKTtcbiAgICAgICAgfVxuICAgIH0sXG59XG5cblxuIiwiaW1wb3J0IGxheW91dF9vYmplY3QgZnJvbSAnLi9jb21tb24vbGF5b3V0LmpzJztcbmltcG9ydCB0b2Nfb2JqZWN0IGZyb20gJy4vcGFydC90b2MuanMnO1xuaW1wb3J0IGNvbW1lbnRzX29iamVjdCBmcm9tICcuL3BhcnQvY29tbWVudHMuanMnO1xuaW1wb3J0IHtnb190b3Bfb2JqZWN0LGdldFNjcm9sbH0gZnJvbSAnLi9wYXJ0L2dvX3RvcC5qcyc7XG5pbXBvcnQgd2ViX2luZm9fb2JqZWN0IGZyb20gJy4vcGFydC93ZWJfaW5mby5qcyc7XG5pbXBvcnQgc2VhcmNoX29iamVjdCBmcm9tICcuL3BhcnQvc2VhcmNoLmpzJztcbmltcG9ydCBzaGFyZV9vYmplY3QgZnJvbSAnLi9wYXJ0L3NoYXJlYnV0dG9uLmpzJztcbmltcG9ydCBjYXRlZ29yaWVzX29iamVjdCBmcm9tICcuL3BhcnQvY2F0ZWdvcmllcy5qcyc7XG5pbXBvcnQge2luaXRXaWRnZXR9IGZyb20gJy4vcGFydC9saXZlMmQuanMnO1xuLy8g5Yid5aeL5YyWaGlnaGxpZ2h06ISa5pysXG5obGpzLmluaXRIaWdobGlnaHRpbmdPbkxvYWQoKTtcblxuLy8g5Z+f5ZCN6YeN5a6a5ZCRXG5pZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnd3p0bGluazEwMTMuY29tJykge1xuICAgIGxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24uaHJlZi5yZXBsYWNlKCd3enRsaW5rMTAxMy5jb20nLCAnd3d3Lnd6dGxpbmsxMDEzLmNvbScpKTtcbn1cblxuLy8gbGl2ZTJkIOWIneWni+WMllxuaW5pdFdpZGdldCh7XG4gICAgd2FpZnVQYXRoOiBcIi9kYXRhL3JlbXUuanNvblwiLFxuICAgIC8vYXBpUGF0aDogXCJodHRwczovL2xpdmUyZC5mZ2hyc2gubmV0L2FwaS9cIixcbiAgICBjZG5QYXRoOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9mZ2hyc2gvbGl2ZTJkX2FwaS9cIlxufSk7XG5cbi8vIOWFpeWPo+WHveaVsO+8jOS8muWcqOmhtemdouWKoOi9veWujOavleaJp+ihjFxuJChmdW5jdGlvbigpe1xuICAgIC8vIOWIneWni+WMluebruW9leiEmuacrOWHveaVsFxuICAgIHRvY19vYmplY3QuaW5pdCgpO1xuICAgIC8vIOWIneWni+WMluivhOiuuuaooeWdl+S4i+aJgOacieWHveaVsFxuICAgIGNvbW1lbnRzX29iamVjdC5pbml0KCk7XG4gICAgLy8g5Yid5aeL5YyW5Zue5Yiw6aG26YOoXG4gICAgZ29fdG9wX29iamVjdC5pbml0KCk7XG4gICAgLy8g5biD5bGA5Yid5aeL5YyWXG4gICAgbGF5b3V0X29iamVjdC5pbml0KCk7XG4gICAgc2VhcmNoX29iamVjdC5pbml0KCk7XG4gICAgLy8g5YWl5Y+j5Ye95pWw5Yid5aeL5YyW572R56uZ6L+Q6KGM5pe26Ze0XG4gICAgd2ViX2luZm9fb2JqZWN0LmluaXQoKTtcbiAgICAvLyDliIbkuqvmjInpkq7nmoTliJ3lp4vljJZcbiAgICBzaGFyZV9vYmplY3QuaW5pdCgpO1xuICAgIC8vIOebruW9leWHveaVsOWIneWni+WMllxuICAgIGNhdGVnb3JpZXNfb2JqZWN0LmluaXQoKTtcblxufSlcblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wZW5fY2xvc2VfZm9yZGVyX3BsdXMoKTtcbiAgICAgICAgdGhpcy5oaXRfb3Blbl9jbG9zZV9mb3JkZXIoKTtcbiAgICAgICAgdGhpcy5yZWFkbW9yZV9ibG9nX2Vzc2F5KCk7XG4gICAgfSxcbiAgICAvLyDngrnlh7tpY29u5bGV5byAL+WFs+mXreagkeWIhuexu1xuICAgIGhpdF9vcGVuX2Nsb3NlX2ZvcmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBjYXRlX2NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZV9jZWxsJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwO2k8Y2F0ZV9jZWxsLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYgKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpe1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gJChjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9PT0gXCJpbmxpbmUtYmxvY2tcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5Yaz5a6a5ZOq5Lqb6ZyA6KaB5pi+56S6aWNvblxuICAgIG9wZW5fY2xvc2VfZm9yZGVyX3BsdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgY2F0ZV9jZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVfY2VsbCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDtpPGNhdGVfY2VsbC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIC8vIOafpeeci+esrOS4ieS4quWtkOiKgueCueaYr+WQpuacieWFg+e0oFxuICAgICAgICAgICAgaWYoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgLy8g5pi+56S65peB6L6555qEaWNvblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDkuI3mmL7npLrml4HovrnnmoRpY29uXG4gICAgICAgICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgLy8g5p+l55yL5pu05aSa6aG16Z2i77yM5LyY5YyW5Y2a5a6iL+maj+eslOaYvuekulxuICAgIHJlYWRtb3JlX2Jsb2dfZXNzYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FyY2hpdmVzL1wiKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgICAgLy8g5Y675o6J56ys5LiA5Liq77yf5a2X56ymXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gbG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKTtcbiAgICAgICAgICAgIC8vIOagueaNrj3lj7fliJLliIblj4LmlbBcbiAgICAgICAgICAgIGxldCBhcnIgPSBwYXJhbXMuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIC8vIOiOt+WPlnBhZ2VfdHlwZeWPguaVsFxuICAgICAgICAgICAgbGV0IHBhZ2VfdHlwZSA9IGFyclsxXTtcbiAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcmNoaXZlX2FydGljbGVfbGlzdCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgdSA9IDA7dTx1bC5sZW5ndGg7dSsrKSB7XG4gICAgICAgICAgICAgICAgLy8g5a+55q+P5LiA5LiqbGnov5vooYzliKTmlq3vvIzlpoLmnpzkuI3mmK/lj4LmlbDnmoTlgLzvvIzlsLHov5vooYzpmpDol49cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpPHVsW3VdLmNoaWxkcmVuLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdWxbdV0uY2hpbGRyZW5baV0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gJ2RzYWwnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gJ2Jsb2cnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gcGFnZV90eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bFt1XS5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbuOAkOaWh+eroOiuv+mXrumHj+aOkuWQjeOAkVxuICAgIOaWh+eroOmYheivu+mHj+WcqOWNleS4quaWh+eroOS4reWPr+S7peaYvuekuuS9huaYr+S4jeiDveaOkuWQje+8jOaOkuWQjeaAjuS5iOWunueOsOWRou+8n1xuICAgIOaWueahiDHvvJrkvb/nlKh2YWxpbmVcbiAgICDmlrnmoYgy77ya5Zyo5pyN5Yqh5Zmo5LiK6L+b6KGM5YWo56uZ55qE5paH56ug6K6/6Zeu77yM5o+Q5Y+W5LuW5Lus55qE6K6/6Zeu6YePaWRcbiAgICDmlrnmoYgz77ya5a+5dHdpa29v5LqR5Ye95pWw6L+b6KGM5Luj56CB5pu05pS577yM57G75Ly86K6/6Zeu6YePYXBpXG4gXG7jgJDor4TorrrliIfmjaLmjInpkq7jgJFcbiAgICDliIfmjaJ1dHRlcmFuY2Vz6K+E6K665ZCO77yM6aG16Z2i5Lya5Yi35paw5LiA5LiL54S25ZCO5Y+I5Zue5Yiw6buY6K6k6K+E6K6657O757uf5LqG77yM6L+Z5Liq5Y+v5Lul5LyY5YyWXG5cbuOAkOacgOaWsOivhOiuuuOAkVxuICAgIOacgOaWsOivhOiuuue7hOS7tu+8jOWmguaenGJsb2fpobXpnaLnlKjkuobvvIzpgqPkuYjov5nkuKrnu4Tku7blsLHkuI3og73mlL7lnKjnp7vliqjnq6/kvqfovrnmoI/kuobvvIxcbiAgICDlkIzkuIDkuKppZOS4jeiDveWkmuasoeeUqOeahOe8mOaVheWQl++8n1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG5cbi8vIOWvvOWHuuS4uuS4gOS4quWvueixoVxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdvX2NvbW1lbnRzKCk7XG4gICAgdGhpcy5jb21tZW50c19jb3VudCgpO1xuICAgIHRoaXMubmV3X2NvbW1lbnRzKCk7XG4gICAgdGhpcy5zd2l0Y2hfY29tbWVudCgpO1xuICB9LFxuICAvLyDmmK/lkKbliY3lvoDor4TorrrljLpcbiAgZ29fY29tbWVudHM6IGZ1bmN0aW9uKCl7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb19jb21tZW50cycpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH0sXG4gIC8vIOaWh+eroOivhOiuuuaVsFxuICBjb21tZW50c19jb3VudDogZnVuY3Rpb24oKSB7XG4gICAgLy8g5Yik5pat6aG16Z2i5piv5ZCm5pyJ6K+E6K665Yy6aWTlkozlvJXnlKjor4TorrrmlbDnmoRpZFxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMnKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJykpIHtcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJyk7XG4gICAgICAvLyBCT03ojrflj5bpobXpnaJ1cmznmoRwYXRobmFtZei3r+W+hFxuICAgICAgdmFyIHR3aWtvb19jb21tZW50c191cmwgPSBbbG9jYXRpb24ucGF0aG5hbWVdO1xuXG4gICAgICB0d2lrb28uZ2V0Q29tbWVudHNDb3VudCh7XG4gICAgICAgIGVudklkOiAnd2Vic2l0ZS13aWtvby00ZzQ2azhkbzk4ODY3NTQyJywgLy8g546v5aKDIElEXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICB1cmxzOiB0d2lrb29fY29tbWVudHNfdXJsLC8vIOS4jeWMheWQq+WNj+iuruOAgeWfn+WQjeOAgeWPguaVsOeahOaWh+eroOi3r+W+hOWIl+ihqO+8jOW/heS8oOWPguaVsFxuICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlIC8vIOivhOiuuuaVsOaYr+WQpuWMheaLrOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgLy8g5bCG6K+E6K665pWw5YaZ5YWl5YW25LitXG4gICAgICAgIHR3aWtvb19jb21tZW50cy5pbm5lclRleHQgPSByZXNbMF0uY291bnQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIC8vIOi/lOWbnuekuuS+izogW1xuICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTAvcG9zdC0xLmh0bWwnLCBjb3VudDogMTAgfSxcbiAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzExL3Bvc3QtMi5odG1sJywgY291bnQ6IDAgfSxcbiAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEyL3Bvc3QtMy5odG1sJywgY291bnQ6IDIwIH1cbiAgICAgICAgLy8gXVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAvLyDlj5HnlJ/plJnor69cbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyDmnIDmlrDor4TorrpcbiAgbmV3X2NvbW1lbnRzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaG90X2FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdF9hcnRpY2xlc19pdGVtJyk7XG4gICAgdmFyIHBhZ2Vfc2l6ZSA9IDg7XG4gICAgdHdpa29vLmdldFJlY2VudENvbW1lbnRzKHtcbiAgICAgICAgZW52SWQ6ICd3ZWJzaXRlLXdpa29vLTRnNDZrOGRvOTg4Njc1NDInLCAvLyDnjq/looMgSURcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlX3NpemUsIC8vIOiOt+WPluWkmuWwkeadoe+8jOm7mOiupO+8mjEw77yM5pyA5aSn77yaMTAwXG4gICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UgLy8g5piv5ZCm5YyF5ous5pyA5paw5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdfY29tbWVudHNfbG9kaW5nJyk7XG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudCA9IG5ld19jb21tZW50c19sb2RpbmcucGFyZW50RWxlbWVudDtcbiAgICAgICAgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQucmVtb3ZlQ2hpbGQobmV3X2NvbW1lbnRzX2xvZGluZyk7XG4gICAgICAgIC8vIOaPkuWFpeivhOiuulxuICAgICAgICBmb3IgKHZhciBpID0gMDtpPHBhZ2Vfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKHJlc1tpXS5jb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2NvbnRlbnQgPSByZXNbaV0uY29tbWVudDtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfbmljayA9IHJlc1tpXS5uaWNrO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c191cmwgPSByZXNbaV0udXJsO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19hdmF0YXIgPSByZXNbaV0uYXZhdGFyO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c190aW1lID0gcmVzW2ldLnJlbGF0aXZlVGltZTtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfaWQgPSAnIycgKyByZXNbaV0uaWQ7XG4gICAgXG4gICAgICAgICAgICB2YXIgaG90X2FydGljbGVzX2NoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlc19jaGlsZC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIml0ZW1fdXBcIj48aW1nIHNyYz1cIicgKyBuZXdfY29tbWVudHNfYXZhdGFyICsgJ1wiIGNsYXNzPVwiYXZhdGFyXCI+PGRpdiBjbGFzcz1cIm5pY2tfbmFtZVwiPjxzcGFuIGNsYXNzPVwibmlja1wiPicgKyBuZXdfY29tbWVudHNfbmljayArICc8L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JyArIG5ld19jb21tZW50c190aW1lICsgJzwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiaXRlbV9kb3duXCI+PGEgaHJlZj1cIicgKyBuZXdfY29tbWVudHNfdXJsICsgbmV3X2NvbW1lbnRzX2lkICsgJ1wiPicgKyBuZXdfY29tbWVudHNfY29udGVudCArICc8L2E+PC9kaXY+JztcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlcy5hcHBlbmQoaG90X2FydGljbGVzX2NoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH0sXG4gIC8vIOWIh+aNouivhOiuulxuICBzd2l0Y2hfY29tbWVudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN3aXRjaF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3dpdGNoX2J0bicpO1xuICAgIHZhciB1dHRlcmFuY2VzX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXR0ZXJhbmNlc19jb21tZW50Jyk7XG4gICAgdmFyIHR3aWtvb19jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50Jyk7XG4gICAgXG4gICAgc3dpdGNoX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBpZih1dHRlcmFuY2VzX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHV0dGVyYW5jZXNfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaWYgKCF1dHRlcmFuY2VzX2NvbW1lbnQuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgICAgIHZhciBzY3JpcHRfdXR0ZXJhbmNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zcmM9XCJodHRwczovL3V0dGVyYW5jLmVzL2NsaWVudC5qc1wiIDtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcInJlcG9cIixcInd6dGxpbmsxMDEzL2NvbW1lbnRcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJpc3N1ZS10ZXJtXCIsXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImxhYmVsXCIsXCLwn5KsY29tbWVudFwiKTtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcInRoZW1lXCIsXCJnaXRodWItbGlnaHRcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJjcm9zc29yaWdpblwiLFwiYW5vbnltb3VzXCIpO1xuICAgICAgICAgICAgdXR0ZXJhbmNlc19jb21tZW50LmFwcGVuZENoaWxkKHNjcmlwdF91dHRlcmFuY2VzKTsgXG4gICAgICAgIH1cbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdXR0ZXJhbmNlc19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIOe8k+aFouaYvuekulxuICAgICAgICDnvJPmhaLlm57liLDpobbpg6hcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiBsZXQgZ29fdG9wX29iamVjdCA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5nb190b3AoKTtcbiAgICAgICAgdGhpcy5jbGlja19nb190b3AoKTtcbiAgICB9LFxuICAgIGdvX3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8g5rua5Yqo5pi+56S6Z29fdG9w5oyJ6ZKuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgLy8g5oyB57ut55uR5ZCs5rua5Yqo54q25oCBXG4gICAgICAgICAgICBnZXRTY3JvbGwoKS50b3AgIT09IDAgPyAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIikgOiAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgY2xpY2tfZ29fdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g54K55Ye75Zue5Yiw6aG26YOoXG4gICAgICAgICQoXCIjZ29fdG9wXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy8gc2Nyb29sVG9w5YW85a655oCn5pa55qGIXG5mdW5jdGlvbiBnZXRTY3JvbGwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0fHwwLFxuICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMFxuICAgIH07XG59XG5cblxuLy8g5aaC5p6c5LiN5YGa6buY6K6k5a+85YWl77yM5bCx5oyJ54Wn5LiL6Z2i5YaZ77yM5LiN6KaBZGVmYXVsdOivjVxuZXhwb3J0IHtcbiAgICBnb190b3Bfb2JqZWN0LCAvL+WvvOWHuuWvueixoVxuICAgIGdldFNjcm9sbCwgLy/lr7zlh7rpgJrnlKjlh73mlbBcbn1cblxuXG4iLCIvKlxuICogTGl2ZTJEIFdpZGdldFxuICogaHR0cHM6Ly9naXRodWIuY29tL3N0ZXZlbmpvZXpoYW5nL2xpdmUyZC13aWRnZXRcbiAqL1xuXG5mdW5jdGlvbiBsb2FkV2lkZ2V0KGNvbmZpZykge1xuICAgICAgICBsZXQgeyB3YWlmdVBhdGgsIGFwaVBhdGgsIGNkblBhdGggfSA9IGNvbmZpZztcbiAgICAgICAgbGV0IHVzZUNETiA9IGZhbHNlLCBtb2RlbExpc3Q7XG4gICAgICAgIGlmICh0eXBlb2YgY2RuUGF0aCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdXNlQ0ROID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghY2RuUGF0aC5lbmRzV2l0aChcIi9cIikpIGNkblBhdGggKz0gXCIvXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFwaVBhdGggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmICghYXBpUGF0aC5lbmRzV2l0aChcIi9cIikpIGFwaVBhdGggKz0gXCIvXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBpbml0V2lkZ2V0IGFyZ3VtZW50IVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIndhaWZ1LWRpc3BsYXlcIik7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ3YWlmdS10ZXh0XCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgPGRpdiBpZD1cIndhaWZ1XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIndhaWZ1LXRpcHNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8Y2FudmFzIGlkPVwibGl2ZTJkXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCI4MDBcIj48L2NhbnZhcz5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2FpZnUtdG9vbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWxnIGZhLWNvbW1lbnRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbGcgZmEtcGFwZXItcGxhbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbGcgZmEtdXNlci1jaXJjbGVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbGcgZmEtc3RyZWV0LXZpZXdcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbGcgZmEtY2FtZXJhLXJldHJvXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWxnIGZhLWluZm8tY2lyY2xlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWxnIGZhLXRpbWVzXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YCk7XG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0MTQ4NDAzL3RyaWdnZXItY3NzLXRyYW5zaXRpb24tb24tYXBwZW5kZWQtZWxlbWVudFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2FpZnVcIikuc3R5bGUuYm90dG9tID0gMDtcbiAgICAgICAgfSwgMCk7XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIHJhbmRvbVNlbGVjdGlvbihvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KG9iaikgPyBvYmpbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb2JqLmxlbmd0aCldIDogb2JqO1xuICAgICAgICB9XG4gICAgICAgIC8vIOajgOa1i+eUqOaIt+a0u+WKqOeKtuaAge+8jOW5tuWcqOepuumXsuaXtuaYvuekuua2iOaBr1xuICAgICAgICBsZXQgdXNlckFjdGlvbiA9IGZhbHNlLFxuICAgICAgICAgICAgdXNlckFjdGlvblRpbWVyLFxuICAgICAgICAgICAgbWVzc2FnZVRpbWVyLFxuICAgICAgICAgICAgbWVzc2FnZUFycmF5ID0gW1wi5aW95LmF5LiN6KeB77yM5pel5a2Q6L+H5b6X5aW95b+r5ZGi4oCm4oCmXCIsIFwi5aSn5Z2P6JuL77yB5L2g6YO95aSa5LmF5rKh55CG5Lq65a625LqG5ZGA77yM5Zik5Zik5Zik772eXCIsIFwi5Zeo772e5b+r5p2l6YCX5oiR546p5ZCn77yBXCIsIFwi5ou/5bCP5ouz5ouz6ZSk5L2g6IO45Y+j77yBXCIsIFwi6K6w5b6X5oqK5bCP5a625Yqg5YWlIEFkYmxvY2sg55m95ZCN5Y2V5ZOm77yBXCJdO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoKSA9PiB1c2VyQWN0aW9uID0gdHJ1ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoKSA9PiB1c2VyQWN0aW9uID0gdHJ1ZSk7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdXNlckFjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodXNlckFjdGlvblRpbWVyKTtcbiAgICAgICAgICAgICAgICB1c2VyQWN0aW9uVGltZXIgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdXNlckFjdGlvblRpbWVyKSB7XG4gICAgICAgICAgICAgICAgdXNlckFjdGlvblRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShyYW5kb21TZWxlY3Rpb24obWVzc2FnZUFycmF5KSwgNjAwMCwgOSk7XG4gICAgICAgICAgICAgICAgfSwgMjAwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICBcbiAgICAgICAgKGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FpZnUtdG9vbCAuZmEtY29tbWVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0hpdG9rb3RvKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FpZnUtdG9vbCAuZmEtcGFwZXItcGxhbmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LkFzdGVyb2lkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5BU1RFUk9JRFNQTEFZRVJTKSB3aW5kb3cuQVNURVJPSURTUExBWUVSUyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuQVNURVJPSURTUExBWUVSUy5wdXNoKG5ldyBBc3Rlcm9pZHMoKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3N0ZXZlbmpvZXpoYW5nL2FzdGVyb2lkcy9hc3Rlcm9pZHMuanNcIjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YWlmdS10b29sIC5mYS11c2VyLWNpcmNsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZE90aGVyTW9kZWwpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YWlmdS10b29sIC5mYS1zdHJlZXQtdmlld1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZFJhbmRNb2RlbCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dhaWZ1LXRvb2wgLmZhLWNhbWVyYS1yZXRyb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKFwi54Wn5aW95LqG5Zib77yM5piv5LiN5piv5b6I5Y+v54ix5ZGi77yfXCIsIDYwMDAsIDkpO1xuICAgICAgICAgICAgICAgIExpdmUyRC5jYXB0dXJlTmFtZSA9IFwicGhvdG8ucG5nXCI7XG4gICAgICAgICAgICAgICAgTGl2ZTJELmNhcHR1cmVGcmFtZSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FpZnUtdG9vbCAuZmEtaW5mby1jaXJjbGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBvcGVuKFwiaHR0cHM6Ly9naXRodWIuY29tL3N0ZXZlbmpvZXpoYW5nL2xpdmUyZC13aWRnZXRcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FpZnUtdG9vbCAuZmEtdGltZXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndhaWZ1LWRpc3BsYXlcIiwgRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoXCLmhL/kvaDmnInkuIDlpKnog73kuI7ph43opoHnmoTkurrph43pgKLjgIJcIiwgMjAwMCwgMTEpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2FpZnVcIikuc3R5bGUuYm90dG9tID0gXCItNTAwcHhcIjtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2FpZnUtdG9nZ2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJ3YWlmdS10b2dnbGUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkZXZ0b29scyA9ICgpID0+IHt9O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiLCBkZXZ0b29scyk7XG4gICAgICAgICAgICBkZXZ0b29scy50b1N0cmluZyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShcIuWTiOWTiO+8jOS9oOaJk+W8gOS6huaOp+WItuWPsO+8jOaYr+aDs+imgeeci+eci+aIkeeahOWwj+enmOWvhuWQl++8n1wiLCA2MDAwLCA5KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKFwi5L2g6YO95aSN5Yi25LqG5Lqb5LuA5LmI5ZGA77yM6L2s6L296KaB6K6w5b6X5Yqg5LiK5Ye65aSE5ZOm77yBXCIsIDYwMDAsIDkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZG9jdW1lbnQuaGlkZGVuKSBzaG93TWVzc2FnZShcIuWTh++8jOS9oOe7iOS6juWbnuadpeS6hu+9nlwiLCA2MDAwLCA5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuICAgIFxuICAgICAgICAoZnVuY3Rpb24gd2VsY29tZU1lc3NhZ2UoKSB7XG4gICAgICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHsgLy8g5aaC5p6c5piv5Li76aG1XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgIGlmIChub3cgPiA1ICYmIG5vdyA8PSA3KSB0ZXh0ID0gXCLml6nkuIrlpb3vvIHkuIDml6XkuYvorqHlnKjkuo7mmajvvIznvo7lpb3nmoTkuIDlpKnlsLHopoHlvIDlp4vkuobjgIJcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPiA3ICYmIG5vdyA8PSAxMSkgdGV4dCA9IFwi5LiK5Y2I5aW977yB5bel5L2c6aG65Yip5Zib77yM5LiN6KaB5LmF5Z2Q77yM5aSa6LW35p2l6LWw5Yqo6LWw5Yqo5ZOm77yBXCI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID4gMTEgJiYgbm93IDw9IDEzKSB0ZXh0ID0gXCLkuK3ljYjkuobvvIzlt6XkvZzkuobkuIDkuKrkuIrljYjvvIznjrDlnKjmmK/ljYjppJDml7bpl7TvvIFcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPiAxMyAmJiBub3cgPD0gMTcpIHRleHQgPSBcIuWNiOWQjuW+iOWuueaYk+eKr+WbsOWRou+8jOS7iuWkqeeahOi/kOWKqOebruagh+WujOaIkOS6huWQl++8n1wiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+IDE3ICYmIG5vdyA8PSAxOSkgdGV4dCA9IFwi5YKN5pma5LqG77yB56qX5aSW5aSV6Ziz55qE5pmv6Imy5b6I576O5Li95ZGi77yM5pyA576O5LiN6L+H5aSV6Ziz57qi772eXCI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID4gMTkgJiYgbm93IDw9IDIxKSB0ZXh0ID0gXCLmmZrkuIrlpb3vvIzku4rlpKnov4flvpfmgI7kuYjmoLfvvJ9cIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPiAyMSAmJiBub3cgPD0gMjMpIHRleHQgPSBbXCLlt7Lnu4/ov5nkuYjmmZrkuoblkYDvvIzml6nngrnkvJHmga/lkKfvvIzmmZrlronvvZ5cIiwgXCLmt7HlpJzml7bopoHniLHmiqTnnLznnZvlkYDvvIFcIl07XG4gICAgICAgICAgICAgICAgZWxzZSB0ZXh0ID0gXCLkvaDmmK/lpJznjKvlrZDlkYDvvJ/ov5nkuYjmmZrov5jkuI3nnaHop4nvvIzmmI7lpKnotbfnmoTmnaXlmJvvvJ9cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucmVmZXJyZXIgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZlcnJlciA9IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLFxuICAgICAgICAgICAgICAgICAgICBkb21haW4gPSByZWZlcnJlci5ob3N0bmFtZS5zcGxpdChcIi5cIilbMV07XG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLmhvc3RuYW1lID09PSByZWZlcnJlci5ob3N0bmFtZSkgdGV4dCA9IGDmrKLov47pmIXor7s8c3Bhbj7jgIwke2RvY3VtZW50LnRpdGxlLnNwbGl0KFwiIC0gXCIpWzBdfeOAjTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvbWFpbiA9PT0gXCJiYWlkdVwiKSB0ZXh0ID0gYEhlbGxv77yB5p2l6IeqIOeZvuW6puaQnOe0oiDnmoTmnIvlj4s8YnI+5L2g5piv5pCc57SiIDxzcGFuPiR7cmVmZXJyZXIuc2VhcmNoLnNwbGl0KFwiJndkPVwiKVsxXS5zcGxpdChcIiZcIilbMF19PC9zcGFuPiDmib7liLDnmoTmiJHlkJfvvJ9gO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvbWFpbiA9PT0gXCJzb1wiKSB0ZXh0ID0gYEhlbGxv77yB5p2l6IeqIDM2MOaQnOe0oiDnmoTmnIvlj4s8YnI+5L2g5piv5pCc57SiIDxzcGFuPiR7cmVmZXJyZXIuc2VhcmNoLnNwbGl0KFwiJnE9XCIpWzFdLnNwbGl0KFwiJlwiKVswXX08L3NwYW4+IOaJvuWIsOeahOaIkeWQl++8n2A7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9tYWluID09PSBcImdvb2dsZVwiKSB0ZXh0ID0gYEhlbGxv77yB5p2l6IeqIOiwt+atjOaQnOe0oiDnmoTmnIvlj4s8YnI+5qyi6L+O6ZiF6K+7PHNwYW4+44CMJHtkb2N1bWVudC50aXRsZS5zcGxpdChcIiAtIFwiKVswXX3jgI08L3NwYW4+YDtcbiAgICAgICAgICAgICAgICBlbHNlIHRleHQgPSBgSGVsbG/vvIHmnaXoh6ogPHNwYW4+JHtyZWZlcnJlci5ob3N0bmFtZX08L3NwYW4+IOeahOaci+WPi2A7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRleHQgPSBg5qyi6L+O6ZiF6K+7PHNwYW4+44CMJHtkb2N1bWVudC50aXRsZS5zcGxpdChcIiAtIFwiKVswXX3jgI08L3NwYW4+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNob3dNZXNzYWdlKHRleHQsIDcwMDAsIDgpO1xuICAgICAgICB9KSgpO1xuICAgIFxuICAgICAgICBmdW5jdGlvbiBzaG93SGl0b2tvdG8oKSB7XG4gICAgICAgICAgICAvLyDlop7liqAgaGl0b2tvdG8uY24g55qEIEFQSVxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3YxLmhpdG9rb3RvLmNuXCIpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBg6L+Z5Y+l5LiA6KiA5p2l6IeqIDxzcGFuPuOAjCR7cmVzdWx0LmZyb21944CNPC9zcGFuPu+8jOaYryA8c3Bhbj4ke3Jlc3VsdC5jcmVhdG9yfTwvc3Bhbj4g5ZyoIGhpdG9rb3RvLmNuIOaKleeov+eahOOAgmA7XG4gICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHJlc3VsdC5oaXRva290bywgNjAwMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UodGV4dCwgNDAwMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIHNob3dNZXNzYWdlKHRleHQsIHRpbWVvdXQsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICBpZiAoIXRleHQgfHwgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ3YWlmdS10ZXh0XCIpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ3YWlmdS10ZXh0XCIpID4gcHJpb3JpdHkpKSByZXR1cm47XG4gICAgICAgICAgICBpZiAobWVzc2FnZVRpbWVyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG1lc3NhZ2VUaW1lcik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZVRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHQgPSByYW5kb21TZWxlY3Rpb24odGV4dCk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwid2FpZnUtdGV4dFwiLCBwcmlvcml0eSk7XG4gICAgICAgICAgICBjb25zdCB0aXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdS10aXBzXCIpO1xuICAgICAgICAgICAgdGlwcy5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICAgICAgdGlwcy5jbGFzc0xpc3QuYWRkKFwid2FpZnUtdGlwcy1hY3RpdmVcIik7XG4gICAgICAgICAgICBtZXNzYWdlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwid2FpZnUtdGV4dFwiKTtcbiAgICAgICAgICAgICAgICB0aXBzLmNsYXNzTGlzdC5yZW1vdmUoXCJ3YWlmdS10aXBzLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIChmdW5jdGlvbiBpbml0TW9kZWwoKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWxJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibW9kZWxJZFwiKSxcbiAgICAgICAgICAgICAgICBtb2RlbFRleHR1cmVzSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vZGVsVGV4dHVyZXNJZFwiKTtcbiAgICAgICAgICAgIGlmIChtb2RlbElkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8g6aaW5qyh6K6/6Zeu5Yqg6L29IOaMh+WumuaooeWeiyDnmoQg5oyH5a6a5p2Q6LSoXG4gICAgICAgICAgICAgICAgbW9kZWxJZCA9IDE7IC8vIOaooeWeiyBJRFxuICAgICAgICAgICAgICAgIG1vZGVsVGV4dHVyZXNJZCA9IDUzOyAvLyDmnZDotKggSURcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRNb2RlbChtb2RlbElkLCBtb2RlbFRleHR1cmVzSWQpO1xuICAgICAgICAgICAgZmV0Y2god2FpZnVQYXRoKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB7IHNlbGVjdG9yLCB0ZXh0IH0gb2YgcmVzdWx0Lm1vdXNlb3Zlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gcmFuZG9tU2VsZWN0aW9uKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoXCJ7dGV4dH1cIiwgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UodGV4dCwgNDAwMCwgOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB7IHNlbGVjdG9yLCB0ZXh0IH0gb2YgcmVzdWx0LmNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSByYW5kb21TZWxlY3Rpb24odGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShcInt0ZXh0fVwiLCBldmVudC50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSh0ZXh0LCA0MDAwLCA4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2Vhc29ucy5mb3JFYWNoKCh7IGRhdGUsIHRleHQgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlciA9IGRhdGUuc3BsaXQoXCItXCIpWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZSA9IGRhdGUuc3BsaXQoXCItXCIpWzFdIHx8IGFmdGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChhZnRlci5zcGxpdChcIi9cIilbMF0gPD0gbm93LmdldE1vbnRoKCkgKyAxICYmIG5vdy5nZXRNb250aCgpICsgMSA8PSBiZWZvcmUuc3BsaXQoXCIvXCIpWzBdKSAmJiAoYWZ0ZXIuc3BsaXQoXCIvXCIpWzFdIDw9IG5vdy5nZXREYXRlKCkgJiYgbm93LmdldERhdGUoKSA8PSBiZWZvcmUuc3BsaXQoXCIvXCIpWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSByYW5kb21TZWxlY3Rpb24odGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShcInt5ZWFyfVwiLCBub3cuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zaG93TWVzc2FnZSh0ZXh0LCA3MDAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQXJyYXkucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG4gICAgXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRNb2RlbExpc3QoKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NkblBhdGh9bW9kZWxfbGlzdC5qc29uYCk7XG4gICAgICAgICAgICBtb2RlbExpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZE1vZGVsKG1vZGVsSWQsIG1vZGVsVGV4dHVyZXNJZCwgbWVzc2FnZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtb2RlbElkXCIsIG1vZGVsSWQpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtb2RlbFRleHR1cmVzSWRcIiwgbW9kZWxUZXh0dXJlc0lkKTtcbiAgICAgICAgICAgIHNob3dNZXNzYWdlKG1lc3NhZ2UsIDQwMDAsIDEwKTtcbiAgICAgICAgICAgIGlmICh1c2VDRE4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGVsTGlzdCkgYXdhaXQgbG9hZE1vZGVsTGlzdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHJhbmRvbVNlbGVjdGlvbihtb2RlbExpc3QubW9kZWxzW21vZGVsSWRdKTtcbiAgICAgICAgICAgICAgICBsb2FkbGl2ZTJkKFwibGl2ZTJkXCIsIGAke2NkblBhdGh9bW9kZWwvJHt0YXJnZXR9L2luZGV4Lmpzb25gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9hZGxpdmUyZChcImxpdmUyZFwiLCBgJHthcGlQYXRofWdldC8/aWQ9JHttb2RlbElkfS0ke21vZGVsVGV4dHVyZXNJZH1gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTGl2ZTJEIOaooeWeiyAke21vZGVsSWR9LSR7bW9kZWxUZXh0dXJlc0lkfSDliqDovb3lrozmiJBgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBhc3luYyBmdW5jdGlvbiBsb2FkUmFuZE1vZGVsKCkge1xuICAgICAgICAgICAgY29uc3QgbW9kZWxJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibW9kZWxJZFwiKSxcbiAgICAgICAgICAgICAgICBtb2RlbFRleHR1cmVzSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vZGVsVGV4dHVyZXNJZFwiKTtcbiAgICAgICAgICAgIGlmICh1c2VDRE4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGVsTGlzdCkgYXdhaXQgbG9hZE1vZGVsTGlzdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHJhbmRvbVNlbGVjdGlvbihtb2RlbExpc3QubW9kZWxzW21vZGVsSWRdKTtcbiAgICAgICAgICAgICAgICBsb2FkbGl2ZTJkKFwibGl2ZTJkXCIsIGAke2NkblBhdGh9bW9kZWwvJHt0YXJnZXR9L2luZGV4Lmpzb25gKTtcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShcIuaIkeeahOaWsOiho+acjeWlveeci+WYm++8n1wiLCA0MDAwLCAxMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWPr+mAiSBcInJhbmRcIijpmo/mnLopLCBcInN3aXRjaFwiKOmhuuW6jylcbiAgICAgICAgICAgICAgICBmZXRjaChgJHthcGlQYXRofXJhbmRfdGV4dHVyZXMvP2lkPSR7bW9kZWxJZH0tJHttb2RlbFRleHR1cmVzSWR9YClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC50ZXh0dXJlcy5pZCA9PT0gMSAmJiAobW9kZWxUZXh0dXJlc0lkID09PSAxIHx8IG1vZGVsVGV4dHVyZXNJZCA9PT0gMCkpIHNob3dNZXNzYWdlKFwi5oiR6L+Y5rKh5pyJ5YW25LuW6KGj5pyN5ZGi77yBXCIsIDQwMDAsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgbG9hZE1vZGVsKG1vZGVsSWQsIHJlc3VsdC50ZXh0dXJlcy5pZCwgXCLmiJHnmoTmlrDooaPmnI3lpb3nnIvlmJvvvJ9cIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRPdGhlck1vZGVsKCkge1xuICAgICAgICAgICAgbGV0IG1vZGVsSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vZGVsSWRcIik7XG4gICAgICAgICAgICBpZiAodXNlQ0ROKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RlbExpc3QpIGF3YWl0IGxvYWRNb2RlbExpc3QoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9ICgrK21vZGVsSWQgPj0gbW9kZWxMaXN0Lm1vZGVscy5sZW5ndGgpID8gMCA6IG1vZGVsSWQ7XG4gICAgICAgICAgICAgICAgbG9hZE1vZGVsKGluZGV4LCAwLCBtb2RlbExpc3QubWVzc2FnZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmV0Y2goYCR7YXBpUGF0aH1zd2l0Y2gvP2lkPSR7bW9kZWxJZH1gKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9kZWwocmVzdWx0Lm1vZGVsLmlkLCAwLCByZXN1bHQubW9kZWwubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG5mdW5jdGlvbiBpbml0V2lkZ2V0KGNvbmZpZywgYXBpUGF0aCkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHdhaWZ1UGF0aDogY29uZmlnLFxuICAgICAgICAgICAgICAgIGFwaVBhdGhcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYDxkaXYgaWQ9XCJ3YWlmdS10b2dnbGVcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7pm7flp4Y8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5gKTtcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdS10b2dnbGVcIik7XG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJ3YWlmdS10b2dnbGUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgaWYgKHRvZ2dsZS5nZXRBdHRyaWJ1dGUoXCJmaXJzdC10aW1lXCIpKSB7XG4gICAgICAgICAgICAgICAgbG9hZFdpZGdldChjb25maWcpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZS5yZW1vdmVBdHRyaWJ1dGUoXCJmaXJzdC10aW1lXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIndhaWZ1LWRpc3BsYXlcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdVwiKS5zdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2FpZnUtZGlzcGxheVwiKSAmJiBEYXRlLm5vdygpIC0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3YWlmdS1kaXNwbGF5XCIpIDw9IDg2NDAwMDAwKSB7XG4gICAgICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKFwiZmlyc3QtdGltZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwid2FpZnUtdG9nZ2xlLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9hZFdpZGdldChjb25maWcpO1xuICAgICAgICB9XG59XG5cbi8vIOWmguaenOS4jeWBmum7mOiupOWvvOWFpe+8jOWwseaMieeFp+S4i+mdouWGme+8jOS4jeimgWRlZmF1bHTor41cbmV4cG9ydCB7XG4gICAgaW5pdFdpZGdldCwgLy/lr7zlh7rlr7nosaFcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9LFxuICAgIHNlYXJjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpbnB1dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLXNlYXJjaC1pbnB1dFwiKTtcblxuICAgICAgICBpZiAoaW5wdXRBcmVhKSB7XG4gICAgICAgICAgICBpbnB1dEFyZWEub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLnBsYWNlaG9sZGVyID0gJ+mmluasoeaQnOe0omluZ8K3wrfCtyc7XG4gICAgICAgICAgICAgICAgZ2V0U2VhcmNoRmlsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25jbGljayA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpbnB1dEFyZWEub25rZXlkb3duID0gZnVuY3Rpb24oKSB7IGlmIChldmVudC5rZXlDb2RlID09IDEzKSByZXR1cm4gZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJTZWFyY2goJHJlc3VsdENvbnRlbnQpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIHNlYXJjaCByZXN1bHRcbiAgICAgICAgICAgIHZhciBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWNsb3NlXCIpO1xuICAgICAgICAgICAgYnRuQ2xvc2Uub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEucGxhY2Vob2xkZXIgPSAn6K+36L6T5YWl5YWz6ZSu6K+NJztcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEuZm9jdXMoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciBzZWFyY2hGdW5jID0gZnVuY3Rpb24ocGF0aCwgc2VhcmNoX2lkLCBjb250ZW50X2lkKSB7XG4gICAgICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgICAgICB2YXIgQlROID0gXCI8ZGl2IGlkPSdsb2NhbC1zZWFyY2gtY2xvc2UnPua4heepuuaQnOe0ojwvZGl2PlwiXG4gICAgICAgICAgICB2YXIgJGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VhcmNoX2lkKTtcbiAgICAgICAgICAgIHZhciAkcmVzdWx0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRlbnRfaWQpO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHBhdGgsIHRydWUpO1xuICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3VtZSBpbnB1dFxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnBsYWNlaG9sZGVyID0gJ+i+k+WFpeWFs+mUruivjeS7peaQnOe0oic7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5mb2N1cygpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhtbCA9IHhoci5yZXNwb25zZVhNTDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvb3QgPSB4bWwuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IHJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJlbnRyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRpdGxlXCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY29udGVudFwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXJsXCIpWzBdLmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gJzx1bCBjbGFzcz1cXFwiYXJjaGl2ZVxcXCI+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXl3b3JkcyA9IHRoaXMudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHNcXC1dKy8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLnRyaW0oKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmnKzlnLDmkJzntKLkuLvku6PnoIFcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudF9pbmRleCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS50aXRsZSB8fCBkYXRhLnRpdGxlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50aXRsZSA9IFwiVW50aXRsZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdfZGF0YV90aXRsZSA9IGRhdGEudGl0bGUudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhX3RpdGxlID0gb3JpZ19kYXRhX3RpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdfZGF0YV9jb250ZW50ID0gZGF0YS5jb250ZW50LnRyaW0oKS5yZXBsYWNlKC88W14+XSs+L2csIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhX2NvbnRlbnQgPSBvcmlnX2RhdGFfY29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhX3VybCA9IGRhdGEudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleF90aXRsZSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleF9jb250ZW50ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpcnN0X29jY3VyID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25seSBtYXRjaCBhcnRpbGVzIHdpdGggbm90IGVtcHR5IGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFfY29udGVudCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleF90aXRsZSA9IGRhdGFfdGl0bGUuaW5kZXhPZihrZXl3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4X2NvbnRlbnQgPSBkYXRhX2NvbnRlbnQuaW5kZXhPZihrZXl3b3JkKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhfdGl0bGUgPCAwICYmIGluZGV4X2NvbnRlbnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhfY29udGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfY29udGVudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Rfb2NjdXIgPSBpbmRleF9jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50X2luZGV4LnB1c2goe2luZGV4X2NvbnRlbnQ6aW5kZXhfY29udGVudCwga2V5d29yZF9sZW46a2V5d29yZF9sZW59KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlsZXnpLrnu5PmnpxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiDlvoXlrozlloTvvIzlvoXlrozlloRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPGxpPjxhIGhyZWY9J1wiICtsb2NhdGlvbi5wcm90b2NvbCtcIi8vXCIrbG9jYXRpb24uaG9zdCtcIi9cIisgZGF0YV91cmwgKyBcIicgY2xhc3M9J2FyY2hpdmUtdGl0bGUnPlwiICsgb3JpZ19kYXRhX3RpdGxlICsgXCI8L2E+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdF9vY2N1ciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXQgb3V0IDEwMCBjaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBmaXJzdF9vY2N1ciAtIDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZCA9IGZpcnN0X29jY3VyICsgMzA7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IDQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbmQgPiBjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IGNvbnRlbnQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hfY29udGVudCA9IGNvbnRlbnQuc3Vic3RyKHN0YXJ0LCAxMDApO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhpZ2hsaWdodCBhbGwga2V5d29yZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWdTID0gbmV3IFJlZ0V4cChrZXl3b3JkLCBcImdpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoX2NvbnRlbnQgPSBtYXRjaF9jb250ZW50LnJlcGxhY2UocmVnUywgXCI8ZW0gY2xhc3M9XFxcInNlYXJjaC1rZXl3b3JkXFxcIj5cIiArIGtleXdvcmQgKyBcIjwvZW0+XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPHAgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiPlwiICsgbWF0Y2hfY29udGVudCArIFwiLi4uPC9wPlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPC9saT5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjwvdWw+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoJzxsaT4nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBCVE4gKyBcIjxkaXYgY2xhc3M9J2xvY2FsLXNlYXJjaC1lbXB0eSc+5rKh5pyJ5om+5Yiw5L2g5omA6KaB5pCc57Si55qE5YaF5a654oCm4oCmPC9kaXY+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IEJUTiArIHN0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclNlYXJjaCgkcmVzdWx0Q29udGVudClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHZhciBnZXRTZWFyY2hGaWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcGF0aCA9IFwiL3NlYXJjaC54bWxcIjtcbiAgICAgICAgICAgIHNlYXJjaEZ1bmMocGF0aCwgJ2xvY2FsLXNlYXJjaC1pbnB1dCcsICdsb2NhbC1zZWFyY2gtcmVzdWx0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyDlhajlsYDmjInpkq7orr7nva5qc+aYr+WQpuWxleekuuaQnOe0ouahhlxuICAgICAgICB2YXIgZ2xvYmFsX2J1dHRvbl9zZWFyY2hfYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaF9idG4nKTtcbiAgICAgICAgZ2xvYmFsX2J1dHRvbl9zZWFyY2hfYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2FsLXNlYXJjaC1pbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHZhciBzZWFyY2hfY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2Nsb3NlJyk7XG4gICAgICAgIHNlYXJjaF9jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG59XG5cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBuZWVkU2hhcmVCdXR0b25cbiAgLSBWZXJzaW9uIDEuMC4wXG4gIC0gQ29weXJpZ2h0IDIwMTUgRHptaXRyeSBWYXNpbGV1c2tpXG5cdC0gTGljZW5zZWQgdW5kZXIgTUlUIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUKVxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGFyZSgpO1xuICAgIH0sXG4gICAgc2hhcmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gZmluZCBjbG9zZXN0XG4gICAgZnVuY3Rpb24gY2xvc2VzdChlbGVtLCBwYXJlbnQpIHtcbiAgICAgIGlmICh0eXBlb2YocGFyZW50KSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICB2YXIgbWF0Y2hlc1NlbGVjdG9yID0gZWxlbS5tYXRjaGVzIHx8IGVsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW0ubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW0ubXNNYXRjaGVzU2VsZWN0b3I7XG4gIFxuICAgICAgICAgICAgICBpZiAoISFtYXRjaGVzU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlc1NlbGVjdG9yLmJpbmQoZWxlbSkocGFyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgIGlmIChlbGVtID09IHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gc2hhcmUgYnV0dG9uIGNsYXNzXG4gICAgICB3aW5kb3cubmVlZFNoYXJlQnV0dG9uID0gZnVuY3Rpb24oZWxlbSwgb3B0aW9ucykge1xuICAgICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50IHJlZmVyZW5jZVxuICAgICAgICAgIHZhciByb290ID0gdGhpcztcbiAgICAgICAgICByb290LmVsZW0gPSBlbGVtIHx8ICduZWVkLXNoYXJlLWJ1dHRvbic7XG4gIFxuICAgICAgICAgIC8qIEhlbHBlcnNcbiAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgXG4gICAgICAvLyBnZXQgdGl0bGUgZnJvbSBodG1sXG4gICAgICByb290LmdldFRpdGxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgLy8gY2hlY2sgcXVlcnlTZWxlY3RvciBleGlzdGFuY2UgZm9yIG9sZCBicm93c2Vyc1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6dGl0bGVcIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOnRpdGxlXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb2N1bWVudC50aXRsZTtcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIC8vIGdldCBpbWFnZSBmcm9tIGh0bWxcbiAgICAgICAgcm9vdC5nZXRJbWFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgIC8vIGNoZWNrIHF1ZXJ5U2VsZWN0b3IgZXhpc3RhbmNlIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJvZzppbWFnZVwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIC8vIGdldCBkZXNjcmlwdGlvbiBmcm9tIGh0bWxcbiAgICAgICAgcm9vdC5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgIC8vIGNoZWNrIHF1ZXJ5U2VsZWN0b3IgZXhpc3RhbmNlIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkZXNjcmlwdGlvblwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpLm5hbWVkSXRlbSgnZGVzY3JpcHRpb24nKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBzaGFyZSB1cmxzIGZvciBhbGwgbmV0d29ya3NcbiAgICAgICAgcm9vdC5zaGFyZSA9IHtcbiAgICAgICAgICAgICd3ZWlibyc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vdi50LnNpbmEuY29tLmNuL3NoYXJlL3NoYXJlLnBocD90aXRsZT0nXG4gICAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICAgICsgXCImdXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICAgICsgXCImcGljPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnd2VjaGF0JzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgaW1nU3JjID0gJ2h0dHBzOi8vYXBpLnFyc2VydmVyLmNvbS92MS9jcmVhdGUtcXItY29kZS8/c2l6ZT0xNTB4MTUwJmRhdGE9JytlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgIHZhciBkcm9wZG93bkVsID0gZWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duJyk7XG4gICAgICAgICAgICAgIHZhciBpbWcgPSBkcm9wZG93bkVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKVswXTtcbiAgICAgICAgICAgICAgdmFyIGxvYWRlciA9IGRyb3Bkb3duRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmVlZC1zaGFyZS1sb2FkZXInKVswXTtcbiAgXG4gICAgICAgICAgICAgICAgaWYgKGltZykge1xuICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZihsb2FkZXIpIHtcbiAgICAgICAgICAgIGxvYWRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsb2FkZXIuY2xhc3NOYW1lID0gJ25lZWQtc2hhcmUtbG9hZGVyJztcbiAgICAgICAgICAgIGxvYWRlci5pbm5lclRleHQgPSAnbG9hZGluZy4uLic7XG4gICAgICAgICAgICBsb2FkZXIudGl0bGUgPSAnbG9hZGluZyBxcmNvZGUuLi4nO1xuICBcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpbWdTcmM7XG4gICAgICAgICAgICAgICAgICAgIGltZy5hbHQgPSAnQ3JlYXRlIHFyY29kZSBmYWlsZWQhJztcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCduZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJyk7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChsb2FkZXIuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcm9wZG93bkVsLmFwcGVuZENoaWxkKGxvYWRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAnZG91YmFuJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwczovL3d3dy5kb3ViYW4uY29tL3NoYXJlL3NlcnZpY2U/bmFtZT0nXG4gICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgKyBcIiZocmVmPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICArIFwiJmltYWdlPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAncXF6b25lJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vc25zLnF6b25lLnFxLmNvbS9jZ2ktYmluL3F6c2hhcmUvY2dpX3F6c2hhcmVfb25la2V5P3RpdGxlPSdcbiAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICArIFwiJnVybD1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgKyBcIiZwaWNzPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpXG4gICAgICAgICAgICAgICsgXCImZGVzYz1cIisgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdyZW5yZW4nOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly93aWRnZXQucmVucmVuLmNvbS9kaWFsb2cvc2hhcmU/dGl0bGU9J1xuICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICsgXCImcmVzb3VyY2VVcmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICsgXCImcGljPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpXG4gICAgICAgICAgICAgICsgXCImZGVzY3JpcHRpb249XCIrIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgfSxcbiAgXG4gICAgICAgICAgICAnbWFpbHRvJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gJ21haWx0bzo/c3ViamVjdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSkgKyAnJmJvZHk9VGhvdWdodCB5b3UgbWlnaHQgZW5qb3kgcmVhZGluZyB0aGlzOiAnICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpICsgJyAtICcgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3R3aXR0ZXInIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSkgKyBcIiZ1cmw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncGludGVyZXN0JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3BpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9ib29rbWFya2xldC8/aXNfdmlkZW89ZmFsc2UnO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJm1lZGlhPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZkZXNjcmlwdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZmFjZWJvb2snIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmZhY2Vib29rLmNvbS9zaGFyZS5waHA/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZ29vZ2xlcGx1cycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwbHVzLmdvb2dsZS5jb20vc2hhcmU/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3JlZGRpdCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cucmVkZGl0LmNvbS9zdWJtaXQ/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdkZWxpY2lvdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnZGVsLmljaW8udXMvcG9zdD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJm5vdGVzPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICd0YXBpdHVyZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndGFwaXR1cmUuY29tL2Jvb2ttYXJrbGV0L2ltYWdlPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnaW1nX3NyYz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnBhZ2VfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnBhZ2VfdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAnc3R1bWJsZXVwb24nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdsaW5rZWRpbicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUnO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnVybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZzb3VyY2U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuc291cmNlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICdzbGFzaGRvdCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnc2xhc2hkb3Qub3JnL2Jvb2ttYXJrLnBsPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gJ3RlY2hub3JhdGknIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3RlY2hub3JhdGkuY29tL2ZhdmVzPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnYWRkPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgJ3Bvc3Rlcm91cycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwb3N0ZXJvdXMuY29tL3NoYXJlPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICdsaW5rdG89JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd0dW1ibHInIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LnR1bWJsci5jb20vc2hhcmU/dj0zJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAnZ29vZ2xlYm9va21hcmtzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZ29vZ2xlLmNvbS9ib29rbWFya3MvbWFyaz9vcD1lZGl0JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmYmttaz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmFubm90YXRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAnbmV3c3ZpbmUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5uZXdzdmluZS5jb20vX3Rvb2xzL3NlZWQmc2F2ZT8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ3U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmaD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vICdwaW5nZm0nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3BpbmcuZm0vcmVmLz8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2xpbms9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZib2R5PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgJ2V2ZXJub3RlJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5ldmVybm90ZS5jb20vY2xpcC5hY3Rpb24/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdmcmllbmRmZWVkJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5mcmllbmRmZWVkLmNvbS9zaGFyZT8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3Zrb250YWt0ZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd2a29udGFrdGUucnUvc2hhcmUucGhwPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgIHVybCArPSAnJmltYWdlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICB1cmwgKz0gJyZub3BhcnNlPXRydWUnO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ29kbm9rbGFzc25pa2knIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lm9kbm9rbGFzc25pa2kucnUvZGs/c3QuY21kPWFkZFNoYXJlJnN0LnM9MSc7XG4gICAgICAgICAgdXJsICs9ICcmc3QuY29tbWVudHM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgIHVybCArPSAnJnN0Ll9zdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAnbWFpbHJ1JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdjb25uZWN0Lm1haWwucnUvc2hhcmU/JztcbiAgICAgICAgLy8gICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAvLyAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy8gICB1cmwgKz0gJyZkZXNjcmlwdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vICAgdXJsICs9ICcmaW1hZ2V1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH1cbiAgXG4gICAgICAgIH1cbiAgXG4gICAgICAgIC8vIG9wZW4gc2hhcmUgbGluayBpbiBhIHBvcHVwXG4gICAgICAgIHJvb3QucG9wdXAgPSBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgdmFyIGxlZnQsIHRvcDsgXG4gIFxuICAgICAgICB2YXIgcG9wdXBXaWR0aCA9IDYwMCxcbiAgICAgICAgICAgIHBvcHVwSGVpZ2h0ID0gNTAwO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIGNhY3VsYXRlIGJyb3dzZXIgd2luZG93IHdpZHRoXG4gICAgICAgIC8vIGlmIHdpbmRvdyB3aWR0aCBpcyB0b28gbmFycm93LCB1c2Ugc2NyZWVuIHdpZHRoO1xuICAgICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA/IHdpbmRvdy5pbm5lcldpZHRoIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogc2NyZWVuLndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ID8gd2luZG93LmlubmVySGVpZ2h0IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgOiBzY3JlZW4uaGVpZ2h0O1xuICAgICAgICBpZiAod2lkdGggPCA2MDAgJiYgaGVpZ2h0IDwgNTAwKSB7XG4gICAgICAgICAgbGVmdCA9IChzY3JlZW4ud2lkdGggLyAyKSAtIChwb3B1cFdpZHRoIC8gMik7XG4gICAgICAgICAgdG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtIChwb3B1cEhlaWdodCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHNldCBsZWZ0IGFuZCB0b3AgcG9zaXRpb25cbiAgICAgICAgICAgICAgdmFyIGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlbkxlZnQgOiBzY3JlZW4ubGVmdCxcbiAgICAgICAgICAgIGR1YWxTY3JlZW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiBzY3JlZW4udG9wO1xuICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0b3AgYW5kIGxlZnQgcG9zaXRpb25cbiAgICAgICAgICBsZWZ0ID0gKCh3aWR0aCAvIDIpIC0gKHBvcHVwV2lkdGggLyAyKSkgKyBkdWFsU2NyZWVuTGVmdDtcbiAgICAgICAgICB0b3AgPSAoKGhlaWdodCAvIDIpIC0gKHBvcHVwSGVpZ2h0IC8gMikpICsgZHVhbFNjcmVlblRvcDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgdmFyIHNoYXJlV2luZG93ID0gd2luZG93Lm9wZW4odXJsLCd0YXJnZXRXaW5kb3cnLCd0b29sYmFyPW5vLGxvY2F0aW9uPW5vLHN0YXR1cz1ubyxtZW51YmFyPW5vLHNjcm9sbGJhcnM9eWVzLHJlc2l6YWJsZT15ZXMsd2lkdGg9JyArIHBvcHVwV2lkdGggKyAnLCBoZWlnaHQ9JyArIHBvcHVwSGVpZ2h0ICsgJywgdG9wPScgKyB0b3AgKyAnLCBsZWZ0PScgKyBsZWZ0KTtcbiAgICAgICAgICAgIC8vIFB1dHMgZm9jdXMgb24gdGhlIG5ld1dpbmRvd1xuICAgICAgICAgIGlmICh3aW5kb3cuZm9jdXMpIHtcbiAgICAgICAgICAgICAgc2hhcmVXaW5kb3cuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICAgIC8qIFNldCBvcHRpb25zXG4gICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIFxuICAgICAgICAgIC8vIGNyZWF0ZSBkZWZhdWx0IG9wdGlvbnNcbiAgICAgICAgICByb290Lm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGljb25TdHlsZTogJ2RlZmF1bHQnLCAvLyBkZWZhdWx0IG9yIGJveFxuICAgICAgICAgICAgICBib3hGb3JtOiAnaG9yaXpvbnRhbCcsIC8vIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b21DZW50ZXInLCAvLyB0b3AgLyBtaWRkbGUgLyBib3R0b20gKyBMZWZ0IC8gQ2VudGVyIC8gUmlnaHRcbiAgICAgICAgICAgICAgcHJvdG9jb2w6IFsnaHR0cCcsICdodHRwcyddLmluZGV4T2Yod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJzonKVswXSkgPT09IC0xID8gJ2h0dHBzOi8vJyA6ICcvLycsXG4gICAgICAgICAgICAgIG5ldHdvcmtzOiAnVHdpdHRlcixGYWNlYm9vayxSZWRkaXQsTGlua2VkaW4sVHVtYmxyLFBpbnRlcmVzdCxXZWlibyxXZWNoYXQsRG91YmFuLFFRWm9uZSxNYWlsdG8nLFxuICAgICAgICAgICAgICBpY29uczogWydmYSBmYS10d2l0dGVyJywnZmEgZmEtZmFjZWJvb2snLCdmYSBmYS1yZWRkaXQtYWxpZW4nLCdmYSBmYS1saW5rZWRpbicsJ2ZhIGZhLXR1bWJscicsJ2ZhIGZhLXBpbnRlcmVzdCcsJ2ZhIGZhLXdlaWJvJywnZmEgZmEtd2VpeGluJywnOScsJ2ZhIGZhLXFxJywnZmEgZmEtZW52ZWxvcGUtbyddXG4gICAgICAgICAgfTtcbiAgXG4gICAgICAvLyBpbnRlZ3JhdGUgY3VzdG9tIG9wdGlvbnNcbiAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICByb290Lm9wdGlvbnNbaV0gPSBvcHRpb25zW2ldO1xuICAgICAgfVxuICAgICAgLy8gY29udmVydCBuZXR3b3JrcyBzdHJpbmcgaW50byBhcnJheVxuICAgICAgcm9vdC5vcHRpb25zLm5ldHdvcmtzID0gcm9vdC5vcHRpb25zLm5ldHdvcmtzLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgXG4gICAgICBmdW5jdGlvbiBnZXRPcHRpb25zKGVsKSB7XG4gICAgICAgICAgLy8gaW50ZWdyYXRlIGRhdGEgYXR0cmlidXRlIG9wdGlvbnNcbiAgICAgICAgICB2YXIgcmV0ID0ge307XG4gICAgICAgICAgZm9yICh2YXIgaSBpbiByb290Lm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldFtpXSA9IHJvb3Qub3B0aW9uc1tpXTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIC8vIHRoZXNlIGF0dHJzIG11c3QgZ2V0IGR5bmFtaWNhbGx5LlxuICAgICAgICAgIHJldC51cmwgPSByb290Lm9wdGlvbnMudXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgIHJldC50aXRsZSA9IHJvb3Qub3B0aW9ucy50aXRsZSB8fCByb290LmdldFRpdGxlKCk7XG4gICAgICAgICAgcmV0LmltYWdlID0gcm9vdC5vcHRpb25zLmltYWdlIHx8IHJvb3QuZ2V0SW1hZ2UoKTtcbiAgICAgICAgICByZXQuZGVzY3JpcHRpb24gPSByb290Lm9wdGlvbnMuZGVzY3JpcHRpb24gfHwgcm9vdC5nZXREZXNjcmlwdGlvbigpO1xuICBcbiAgICAgICAgICBmb3IgKHZhciBvcHRpb24gaW4gZWwuZGF0YXNldCkge1xuICAgICAgICAgICAgICAvLyByZXBsYWNlIG9ubHkgJ3NoYXJlLScgcHJlZml4ZWQgZGF0YS1hdHRyaWJ1dGVzXG4gICAgICAgICAgICBpZiAob3B0aW9uLm1hdGNoKC9zaGFyZS8pKSB7XG4gICAgICAgICAgICAgIHZhciBuZXdfb3B0aW9uID0gb3B0aW9uLnJlcGxhY2UoL3NoYXJlLywgJycpO1xuICAgICAgICAgICAgICBpZiAoIW5ld19vcHRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuZXdfb3B0aW9uID0gbmV3X29wdGlvbi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5ld19vcHRpb24uc2xpY2UoMSk7XG4gICAgICAgICAgICAgIHZhciB2YWwgPSBlbC5kYXRhc2V0W29wdGlvbl07XG4gICAgICAgICAgICAgIGlmIChuZXdfb3B0aW9uID09PSAnbmV0d29ya3MnKSB7XG4gICAgICAgICAgICAgICAgICB2YWwgPSB2YWwudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld19vcHRpb24gPT09ICd1cmwnICYmIHZhbCAmJiB2YWxbMF0gPT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgLy8gZml4IHJlbGF0aXZlIHVybCBwcm9ibGVtLlxuICAgICAgICAgICAgICAgICAgdmFsID0gbG9jYXRpb24ub3JpZ2luICsgdmFsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldFtuZXdfb3B0aW9uXSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgXG4gICAgICBmdW5jdGlvbiBjcmVhdGVEcm9wZG93bihlbCkge1xuICAgICAgICAgIC8vIGNyZWF0ZSBkcm9wZG93blxuICAgICAgICAgIHZhciBkcm9wZG93bkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lID0gJ25lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duJztcbiAgICAgICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gIFxuICAgICAgICAgIC8vIHNldCBkcm9wZG93biByb3cgbGVuZ3RoXG4gICAgICAgICAgaWYgKG15b3B0aW9ucy5pY29uU3R5bGUgPT0gJ2JveCcgJiYgbXlvcHRpb25zLmJveEZvcm0gPT0gJ2hvcml6b250YWwnKVxuICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJveC1ob3Jpem9udGFsJztcbiAgICAgICAgICBlbHNlIGlmIChteW9wdGlvbnMuaWNvblN0eWxlID09ICdib3gnICYmIG15b3B0aW9ucy5ib3hGb3JtID09ICd2ZXJ0aWNhbCcpXG4gICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm94LXZlcnRpY2FsJztcbiAgXG4gICAgICAgICAgLy8gc2V0IGRyb3Bkb3duIHBvc2l0aW9uIFxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAobXlvcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tdG9wLWxlZnQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1yaWdodCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAndG9wQ2VudGVyJzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1jZW50ZXInO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC0gZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ21pZGRsZUxlZnQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tbWlkZGxlLWxlZnQnO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luVG9wID0gLSBkcm9wZG93bkVsLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ21pZGRsZVJpZ2h0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLW1pZGRsZS1yaWdodCc7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5Ub3AgPSAtIGRyb3Bkb3duRWwub2Zmc2V0SGVpZ2h0IC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tbGVmdCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tUmlnaHQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLXJpZ2h0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdib3R0b21DZW50ZXInOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWNlbnRlcic7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSBkcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1jZW50ZXInO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC0gZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LDEpO1xuICBcbiAgXG4gICAgICAgICAgLy8gZmlsbCBmcm9wZG93biB3aXRoIGJ1dHRvbnNcbiAgICAgICAgICB2YXIgaWNvbkNsYXNzID0gbXlvcHRpb25zLmljb25TdHlsZSA9PSAnZGVmYXVsdCcgPyAnbmVlZC1zaGFyZS1idXR0b25fbGluayBuZWVkLXNoYXJlLWJ1dHRvbl8nIDogJ25lZWQtc2hhcmUtYnV0dG9uX2xpbmstJyArIG15b3B0aW9ucy5pY29uU3R5bGUgKyAnIG5lZWQtc2hhcmUtYnV0dG9uX2xpbmsgbmVlZC1zaGFyZS1idXR0b25fJztcbiAgICAgICAgICBsZXQgZmxhZyA9IDA7XG4gICAgICAgICAgZm9yICh2YXIgbmV0d29yayBpbiBteW9wdGlvbnMubmV0d29ya3MpIHtcbiAgICAgICAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICBuZXR3b3JrID0gbXlvcHRpb25zLm5ldHdvcmtzW25ldHdvcmtdO1xuICAgICAgICAgICAgICBsaW5rLmNsYXNzTmFtZSA9IGljb25DbGFzcyArIG5ldHdvcms7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG15b3B0aW9ucy5pY29ucy5sZW5ndGgpO1xuICAgICAgICAgICAgICBsaW5rLmNsYXNzTmFtZSArPSAnICcrbXlvcHRpb25zLmljb25zW2ZsYWddO1xuICAgICAgICAgICAgICBsaW5rLmRhdGFzZXQubmV0d29yayA9IG5ldHdvcms7XG4gICAgICAgICAgICAgIGxpbmsudGl0bGUgPSBuZXR3b3JrO1xuICAgICAgICAgICAgICBkcm9wZG93bkVsLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAgICAgICBmbGFnKys7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBkcm9wZG93bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgaWYgKGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCAnLm5lZWQtc2hhcmUtYnV0dG9uX2xpbmsnKSkge1xuICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgXG4gICAgICAgICAgICAgICAgIHJvb3Quc2hhcmVbZXZlbnQudGFyZ2V0LmRhdGFzZXQubmV0d29ya10oZWwpO1xuICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICBcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkcm9wZG93bkVsKTtcbiAgICAgIH1cbiAgXG4gICAgICB2YXIgdGFyZ2V0RWwgPSB0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pIDogZWxlbTtcbiAgICAgICBpZiAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwuY2xhc3NMaXN0LmNvbnRhaW5zKCduZWVkLXNoYXJlLXBhbmVsJykpIHtcbiAgICAgICAgY3JlYXRlRHJvcGRvd24odGFyZ2V0RWwpO1xuICAgICAgICAvLyB0YXJnZXRFbC5jbGFzc0xpc3QuYWRkKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgICAgIH0gZWxzZSBcbiAgICAgICAgLy8gY2xvc2Ugb24gY2xpY2sgb3V0c2lkZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgdmFyIG9wZW5lZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICBcbiAgICAgICAgICBpZiAoIWNsb3Nlc3QoZXZlbnQudGFyZ2V0LCAnLm5lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAob3BlbmVkRWwpIHtcbiAgICAgICAgICAgICAgICBvcGVuZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgXG4gICAgICAgICAgICAgICAgLy8gaGlkZSB3ZWNoYXQgY29kZSBpbWFnZSB3aGVuIGNsb3NlIHRoZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICBpZiAob3BlbmVkRWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuZWRFbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gY2xvc2VzdChldmVudC50YXJnZXQsIHJvb3QuZWxlbSk7XG4gICAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRHJvcGRvd24oZWwpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIFxuICAgIH07XG4gIFxuICAgIG5ldyBuZWVkU2hhcmVCdXR0b24oJy5uZWVkLXNoYXJlLWJ1dHRvbicpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnRvY19idG4oKTtcbiAgICB9LFxuICAgIHRvY19idG46IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdG9jX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2NfY29udGFpbmVyJyk7XG4gICAgICAgIGxldCB0b2NfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvY19idG4nKTtcbiAgICAgICAgJCh0b2NfYnRuKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKXtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cblxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMud2ViX2luZm9fcnVudGltZSgpO1xuICAgIH0sXG4gICAgLy8gVE9ETzogISEh5oiR552A5a6e5LiN55+l6YGT6L+Z5piv5Liq5LuA5LmI56eYXG4gICAgd2ViX2luZm9fcnVudGltZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IEJpcnRoRGF5ID0gbmV3IERhdGUobmV3IERhdGUoJzIwMjAvMDEvMDQnKSk7XG4gICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgbGV0IHRpbWVvbGQgPSAodG9kYXkuZ2V0VGltZSgpIC0gQmlydGhEYXkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIGxldCBkYXlzb2xkID0gTWF0aC5mbG9vcih0aW1lb2xkIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2ViaW5mb19ydW50aW1lX2NvdW50XzFcIikuaW5uZXJUZXh0ID0gZGF5c29sZCArICcg5aSpJztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRheXNvbGQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMVwiKSk7XG4gICAgfSxcbn1cblxuIl19
