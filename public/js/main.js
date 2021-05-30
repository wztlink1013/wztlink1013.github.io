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
  cdnPath: "https://github.com/fghrsh/live2d_api/tree/1.0.1/"
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
  document.body.insertAdjacentHTML("beforeend", "<div id=\"waifu\">\n                <div id=\"waifu-tips\"></div>\n                <canvas id=\"live2d\"></canvas>\n                <!-- <div id=\"waifu-tool\">\n                    <span class=\"fa fa-lg fa-comment\"></span>\n                    <span class=\"fa fa-lg fa-info-circle\"></span>\n                    <span class=\"fa fa-lg fa-times\"></span>\n                </div> -->\n            </div>"); // https://stackoverflow.com/questions/24148403/trigger-css-transition-on-appended-element

  setTimeout(function () {
    document.getElementById("waifu").style.bottom = 0;
  }, 0);

  function randomSelection(obj) {
    return Array.isArray(obj) ? obj[Math.floor(Math.random() * obj.length)] : obj;
  } // 检测用户活动状态，并在空闲时显示消息


  var userAction = false,
      userActionTimer,
      messageTimer,
      messageArray = ["好久不见，日子过得好快呢……", "嗨～欢迎访问该站点！", "记得把小家加入 Adblock 白名单哦！"];
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
    // TODO: 第一个icon，说话
    // document.querySelector("#waifu-tool .fa-comment").addEventListener("click", showHitokoto);
    // TODO: 第二个icon，貌似是什么游戏
    // document.querySelector("#waifu-tool .fa-paper-plane").addEventListener("click", () => {
    //     if (window.Asteroids) {
    //         if (!window.ASTEROIDSPLAYERS) window.ASTEROIDSPLAYERS = [];
    //         window.ASTEROIDSPLAYERS.push(new Asteroids());
    //     } else {
    //         const script = document.createElement("script");
    //         script.src = "https://cdn.jsdelivr.net/gh/stevenjoezhang/asteroids/asteroids.js";
    //         document.head.appendChild(script);
    //     }
    // });
    // TODO: 第三个icon，换人物
    // document.querySelector("#waifu-tool .fa-user-circle").addEventListener("click", loadOtherModel);
    // TODO: 第四个icon，应该是换装
    // document.querySelector("#waifu-tool .fa-street-view").addEventListener("click", loadRandModel);
    // TODO: 第五个icon，拍照
    // document.querySelector("#waifu-tool .fa-camera-retro").addEventListener("click", () => {
    //     showMessage("照好了嘛，是不是很可爱呢？", 6000, 9);
    //     Live2D.captureName = "photo.png";
    //     Live2D.captureFrame = true;
    // });
    // TODO: 第六个icon，原项目地址
    // document.querySelector("#waifu-tool .fa-info-circle").addEventListener("click", () => {
    //     open("https://www.wztlink1013.com/");
    // });
    // // TODO: 第七个icon，隐藏看板娘
    // document.querySelector("#waifu-tool .fa-times").addEventListener("click", () => {
    //     localStorage.setItem("waifu-display", Date.now());
    //     showMessage("愿你有一天能与重要的人重逢。", 2000, 11);
    //     document.getElementById("waifu").style.bottom = "-500px";
    //     setTimeout(() => {
    //         document.getElementById("waifu").style.display = "none";
    //         document.getElementById("waifu-toggle").classList.add("waifu-toggle-active");
    //     }, 3000);
    // });
    window.addEventListener("copy", function () {
      showMessage("你都复制了些什么呀，转载要记得加上出处哦！", 6000, 9);
    });
    window.addEventListener("visibilitychange", function () {
      if (!document.hidden) showMessage("哇，你终于回来了～", 6000, 9);
    });
  })(); // 首页展示特定文字


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
  })(); // TODO: 服务于第一个icon
  // function showHitokoto() {
  //     // 增加 hitokoto.cn 的 API
  //     fetch("https://v1.hitokoto.cn")
  //         .then(response => response.json())
  //         .then(result => {
  //             const text = `这句一言来自 <span>「${result.from}」</span>，是 <span>${result.creator}</span> 在 hitokoto.cn 投稿的。`;
  //             showMessage(result.hitokoto, 6000, 9);
  //             setTimeout(() => {
  //                 showMessage(text, 4000, 9);
  //             }, 6000);
  //         });
  // }
  // 没有bug展示特定状态下的文字


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
}

function initWidget(config, apiPath) {
  if (typeof config === "string") config = {
    waifuPath: config,
    apiPath: apiPath
  };
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
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY2F0ZWdvcmllcy5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvbGl2ZTJkLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9zZWFyY2guanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L3NoYXJlYnV0dG9uLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC90b2MuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L3dlYl9pbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxhQUFELENBQWxCO0FBQ0EsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGNBQUQsQ0FBbkIsQyxDQUVBOztBQUNBLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxVQUFELENBQWY7QUFDQSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsV0FBRCxDQUFoQjtBQUNB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QUFULENBQXVCLFVBQXZCLENBQWQ7QUFDQSxJQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVyxLQUFYLENBQWlCLFlBQVU7QUFDdkIsVUFBSSxhQUFhLENBQUMsS0FBZCxDQUFvQixPQUFwQixLQUFnQyxNQUFwQyxFQUE0QztBQUN4QyxRQUFBLGFBQWEsQ0FBQyxLQUFkLENBQW9CLE9BQXBCLEdBQThCLE9BQTlCO0FBQ0gsT0FGRCxNQUVPLElBQUksYUFBYSxDQUFDLEtBQWQsQ0FBb0IsT0FBcEIsS0FBZ0MsT0FBcEMsRUFBNEM7QUFDL0MsUUFBQSxhQUFhLENBQUMsS0FBZCxDQUFvQixPQUFwQixHQUE4QixNQUE5QjtBQUNILE9BRk0sTUFFQTtBQUNILFFBQUEsYUFBYSxDQUFDLEtBQWQsQ0FBb0IsT0FBcEIsR0FBOEIsT0FBOUI7QUFDSDtBQUNKLEtBUkQ7QUFTSDtBQWhCVSxDOzs7Ozs7Ozs7O2VDQUE7QUFDWCxFQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkLFNBQUssZ0JBQUw7QUFDSCxHQUhVO0FBSVg7QUFDQSxFQUFBLGdCQUFnQixFQUFFLDRCQUFZO0FBQ3RCLFFBQUksUUFBUSxHQUFHLElBQUksSUFBSixDQUFTLElBQUksSUFBSixDQUFTLFlBQVQsQ0FBVCxDQUFmO0FBQ0EsUUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFKLEVBQVo7QUFDQSxRQUFJLE9BQU8sR0FBSSxLQUFLLENBQUMsT0FBTixLQUFrQixRQUFRLENBQUMsT0FBVCxFQUFqQztBQUNBLFFBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBTyxJQUFJLEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxJQUFuQixDQUFsQixDQUFkLENBSnNCLENBS3RCO0FBQ0E7QUFDQTtBQUNQO0FBYlUsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qICBcbiAgICBUT0RPOiBcbiAgICAgICAg6IO95Zyo5qC555uu5b2V6K6+572u6buY6K6k54q25oCB5piv5Yeg5qCP55qEXG4gICAgICAgIOiDveWkn+iuqeS9v+eUqOiAheWPlua2iOi/meenjeKAnOiusOW/huKAnVxuKiovXG5cblxuLy8gUEPvvJpoZWFkZXLkuIrnmoTlt6blj7PmjInpkq7ljLrln59cbmxldCBhcnJvd19sZWZ0ID0gJCgnI2Fycm93X2xlZnQnKTtcbmxldCBhcnJvd19yaWdodCA9ICQoJyNhcnJvd19yaWdodCcpO1xuXG4vLyDluIPlsYDvvJrniYjlv4PjgIHlt6bkuK3lj7PmjpLniYhcbmxldCBjdF9sZWZ0ID0gJCgnLmN0X2xlZnQnKTtcbmxldCBjdF9yaWdodCA9ICQoJy5jdF9yaWdodCcpO1xubGV0IGN0X2NlbnRlciA9ICQoJy5jdF9jZW50ZXInKTtcbmxldCBjb250YWluZXIgPSAkKCcuY29udGFpbmVyJyk7XG5cbi8vIFBDL2FwcO+8muWIh+aNomhlYWRlclxubGV0IGhlYWRlciA9ICQoJy5oZWFkZXInKTtcbmxldCBoZWFkZXJfYXBwID0gJCgnLmhlYWRlcl9hcHAnKTtcblxuLy8gYXBw77yaaGVhZGVy5LiK55qE5bem5Y+z5oyJ6ZKu5Yy65Z+fXG5sZXQgYnRuX2FwcF9zaWRlciA9ICQoJyNidG5fYXBwX3NpZGVyJyk7XG5sZXQgYnRuX2FwcF9yaWdodCA9ICQoJyNidG5fYXBwX3JpZ2h0Jyk7XG5cbi8vIGFwcO+8mueCueWHu2hlYWRlcl9hcHDml7blgJnlvLnlh7rmnaXnmoTmir3lsYlcbmxldCBhcHBfc2lkZV9nbGFzcyA9ICQoJyNhcHBfc2lkZV9nbGFzcycpO1xubGV0IGFwcF9zaWRlX2NvbnRlbnQgPSAkKCcjYXBwX3NpZGVfY29udGVudCcpO1xuXG4vLyAxLuW3puS4remFjee9rlxubGV0IG9uZV9jb250YWluZXIgPSAnODAlJyA7XG5sZXQgb25lX2N0X2NlbnRlcl93aWR0aCA9ICc3NSUnO1xubGV0IG9uZV9jdF9sZWZ0X3dpZHRoID0gJzI1JSc7XG4vLyAyLiDkuK3lj7PphY3nva5cbmxldCB0d29fY29udGFpbmVyID0gJzgwJScgO1xubGV0IHR3b19jdF9jZW50ZXJfd2lkdGggPSAnNzUlJztcbmxldCB0d29fY3RfcmlnaHRfd2lkdGggPSAnMjUlJztcbi8vIDMuIOW3puS4reWPs+mFjee9rlxubGV0IHRocmVlX2NvbnRhaW5lciA9ICc5NSUnIDtcbmxldCB0aHJlZV9jdF9jZW50ZXJfd2lkdGggPSAnNjAlJztcbmxldCB0aHJlZV9jdF9yaWdodF93aWR0aCA9ICcyMCUnO1xubGV0IHRocmVlX2N0X2xlZnRfd2lkdGggPSAnMjAlJztcbi8vIDQuIOS4remFjee9rlxubGV0IGZvdXJfY29udGFpbmVyID0gJzkwJScgO1xubGV0IGZvdXJfY3RfY2VudGVyX3dpZHRoID0gJzEwMCUnO1xuLy8g6K6+5aSH5bCP5LqONTYwcHjnmoTkuK3phY3nva5cbmxldCBkZXZpY2Vfc21hbGxfY29udGFpbmVyID0gXCI5NyVcIjtcbmxldCBkZXZpY2Vfc21hbGxfY2VudGVyID0gXCIxMDAlXCI7XG4vLyDorr7lpIflsI/kuo43ODBweOeahOS4remFjee9rlxubGV0IGRldmljZV9jZW50ZXJfY29udGFpbmVyID0gXCI5MyVcIjtcbmxldCBkZXZpY2VfY2VudGVyX2NlbnRlciA9IFwiMTAwJVwiO1xuXG5cbi8vIOWIpOaWrXBj5q615bem5Y+z5LiK6KeS55qE566t5aS06K+l5pi+56S65ZOq5LiqXG5mdW5jdGlvbiBsZWZ0X3JpZ2h0X2Fycm93ICgpIHtcbiAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG4gICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxlZnRfY2VudGVyX3JpZ2h0ICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IHRocmVlX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3Moe1xuICAgICAgICBcIndpZHRoXCI6IHRocmVlX2N0X2xlZnRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbiAgICBjdF9yaWdodC5jc3Moe1xuICAgICAgICBcIndpZHRoXCI6IHRocmVlX2N0X3JpZ2h0X3dpZHRoLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgbGVmdF9yaWdodF9hcnJvdyAoKTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGF5b3V0Jyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ0xSJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnTFInKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsZWZ0X2NlbnRlciAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiBvbmVfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBvbmVfY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3Moe1wid2lkdGhcIjogb25lX2N0X2xlZnRfd2lkdGh9KTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWIh+aNouWIsOW3puS4reW4g+WxgOS6hlwiKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gICAgfVxufVxuZnVuY3Rpb24gY2VudGVyX3JpZ2h0ICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IHR3b19jb250YWluZXJ9KTtcbiAgICBjdF9yaWdodC5jc3Moe1wid2lkdGhcIjogdHdvX2N0X3JpZ2h0X3dpZHRofSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0d29fY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdSJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnUicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNlbnRlciAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiBmb3VyX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogZm91cl9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBsZWZ0X3JpZ2h0X2Fycm93ICgpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXlvdXQnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdDJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnQycpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldmljZV9zbWFsbCAoKSB7XG4gICAgLy8g5pyA5bCP5bC65a+477ya5pyA5aSnNTYwcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjU2MHB45bC65a+4XCIpO1xuXG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAvLyDorr7nva7luIPlsYBcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9zbWFsbF9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9zbWFsbF9jZW50ZXJ9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcblxufVxuZnVuY3Rpb24gZGV2aWNlX2NlbnRlciAoKSB7XG4gICAgLy8g5Lit562J5bC65a+477ya5pyA5aSnOTgwcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjk4MHB45bC65a+4XCIpO1xuXG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAvLyDorr7nva7luIPlsYBcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9jZW50ZXJfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBkZXZpY2VfY2VudGVyX2NlbnRlcn0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuXG59XG5mdW5jdGlvbiBkZXZpY2VfbGFyZ2VzdCAoKSB7XG4gICAgLy8g5pyA5aSn5bC65a+477ya5pyA5aSnMTI2MXB4XG4gICAgY29uc29sZS5sb2coXCLlsI/kuo4xMjYxcHjlsLrlr7hcIik7XG5cbiAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG4gICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICB9XG4gICAgaGVhZGVyLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIGhlYWRlcl9hcHAuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcblxuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGN0X3JpZ2h0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfcmlnaHRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbn1cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYnRuX3BjX3N3aXRjaCgpO1xuICAgICAgICB0aGlzLmJ0bl9hcHBfc3dpdGNoKCk7XG4gICAgICAgIHRoaXMuYnJvd3Nlcl9yZW1lbWJlcigpO1xuICAgICAgICB0aGlzLmRldmljZV9zd2l0Y2goKTsgLy8g6L+Z5Liq5pS+5Yiw5pyA5ZCO6Ieq6LCD55So77yM5Zug5Li65LiN566h5pys5Zyw5a2Y5YKo5piv5LuA5LmI77yM5pyA57uI6L+Y5piv6KaB5qC55o2u6K6+5aSH55uR5ZCs5Li65Li7XG4gICAgfSxcbiAgICAvKiBQQ++8muWNlS/lj4wv5LiJ5qCP5biD5bGA5YiH5o2i5oyJ6ZKu54K55Ye75LqL5Lu2ICovXG4gICAgYnRuX3BjX3N3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGFycm93X2xlZnQuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIC8vIOi9rOaNouWIh+aNouS5i+WQjueahOeureWktOaMiemSrlxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCdibG9jaycpO1xuICAgICAgICAgICAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvL+W3puS4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5bem5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwnbm9uZScpO1xuICAgICAgICAgICAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvL+S4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+S4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgYXJyb3dfcmlnaHQuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIC8vIOi9rOaNouWIh+aNouS5i+WQjueahOeureWktOaMiemSrlxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCdibG9jaycpO1xuICAgICAgICAgICAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8v5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5bem5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwnbm9uZScpO1xuICAgICAgICAgICAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8vIOS4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyDlt6bkuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyog56e75Yqo56uv5bem5Y+z5LiK6KeS55qE5oyJ6ZKuICovXG4gICAgYnRuX2FwcF9zd2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDngrnlh7vlt6bmjInpkq5cbiAgICAgICAgYnRuX2FwcF9zaWRlci5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgYXBwX3NpZGVfZ2xhc3MuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgICAgICAgICBhcHBfc2lkZV9jb250ZW50LmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g54K55Ye75q+b546755KD54mHXG4gICAgICAgIGFwcF9zaWRlX2dsYXNzLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhcHBfc2lkZV9nbGFzcy5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgICAgICAgICAgYXBwX3NpZGVfY29udGVudC5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g54K55Ye75Y+z5oyJ6ZKuXG4gICAgICAgIGJ0bl9hcHBfcmlnaHQuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFsZXJ0KFwi5pys572R56uZ6L+Y5Zyo5byA5Y+R5Lit77yM6K+45aSa5Yqf6IO96L+Y5pyq5a6M5ZaE77yM5pWs6K+35pyf5b6FflwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pys572R56uZ6L+Y5Zyo5byA5Y+R5Lit77yM6K+45aSa5Yqf6IO96L+Y5pyq5a6M5ZaE77yM5pWs6K+35pyf5b6FflwiKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKiDmtY/op4jlmajorrDkvY/luIPlsYAgKi9cbiAgICBicm93c2VyX3JlbWVtYmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBiX2xlZnQgPSAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpO1xuICAgICAgICBsZXQgYl9yaWdodCA9ICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpO1xuICAgICAgICBsZXQgYl9sYXlvdXQ7XG4gICAgXG4gICAgICAgIC8qIFxuICAgICAgICDmnInkuKrpl67popjvvJpcbiAgICAgICAgICAgIOS4gOaJk+W8gOa1j+iniOWZqOWwseS8muagueaNrue8k+WtmOadpeW4g+WxgO+8jOWwveeuoeS9oOeahOiuvuWkh+WuveW6puWwj+S6jjEyNjBweFxuICAgICAgICAgICAg5L2G5piv5a+55LqO5pmu6YCa55So5oi377yM5LiA5Liq5rWP6KeI5Zmo5ZOq5p2l55qE57uP5bi45byA5byA5Y+R6ICF5qih5byP5ZGi77yfXG4gICAgICAgICovXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgICAgIC8vIOa1j+iniOWZqOaciee8k+WtmOeahOaDheWGtVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKzlnLDmnInor6Xlj5jph4/nvJPlrZhcIik7XG4gICAgICAgICAgICBsZXQgbGF5b3V0X2NoYW5nZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxheW91dF9jaGFuZ2UpO1xuICAgIFxuICAgICAgICAgICAgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiTFJcIil7XG4gICAgICAgICAgICAgICAgLy8g5bem5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihsYXlvdXRfY2hhbmdlID09PSBcIkxcIikge1xuICAgICAgICAgICAgICAgIC8vIOW3puS4reW4g+WxgFxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiUlwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiQ1wiKSB7XG4gICAgICAgICAgICAgICAgLy8g5Lit5biD5bGAXG4gICAgICAgICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWFtuS7luiOq+WQjeWFtuWmmeeahOaDheWGtVxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmtY/op4jlmajmsqHmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pys5Zyw5rKh5pyJ6K+l5Y+Y6YeP57yT5a2YXCIpO1xuICAgICAgICAgICAgaWYgKChiX2xlZnQgPT09IFwiYmxvY2tcIikgJiYgKGJfcmlnaHQgPT09IFwibm9uZVwiKSkgeyAvLyDlt6bkuK3luIPlsYBcbiAgICAgICAgICAgICAgICBiX2xheW91dCA9IFwiTFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoYl9sZWZ0ID09PSBcIm5vbmVcIikgJiYgKGJfcmlnaHQgPT09IFwiYmxvY2tcIikpIHsgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIlJcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGJfbGVmdCA9PT0gXCJibG9ja1wiKSAmJiAoYl9yaWdodCA9PT0gXCJibG9ja1wiKSkgeyAvL+W3puS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJMUlwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJDXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBiX2xheW91dClcbiAgICAgICAgfVxuXG5cbiAgICB9LFxuICAgIC8qIOWqkuS9k+afpeivouW4g+WxgCAqL1xuICAgIGRldmljZV9zd2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDliJvlu7rmn6Xor6LliJfooahcbiAgICAgICAgbGV0IGRldmljZV93aWR0aCA9IFtcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA1NjBweCknKSxcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5ODBweCknKSxcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMjYxcHgpJylcbiAgICAgICAgXTtcblxuICAgICAgICAvLyDlrprkuYnlm57osIPlh73mlbBcbiAgICAgICAgZnVuY3Rpb24gbWVkaWFNYXRjaHMgKCkge1xuICAgICAgICAgICAgaWYgKGRldmljZV93aWR0aFswXS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgZGV2aWNlX3NtYWxsICgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2Vfd2lkdGhbMV0ubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGRldmljZV9jZW50ZXIgKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRldmljZV93aWR0aFsyXS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgZGV2aWNlX2xhcmdlc3QgKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bC65a+45YW25LuW5oOF5Ya177yM55CG6K665LiK5oiR55yL5LiN5Yiw6L+Z5Y+l6K+d4oCm4oCmXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOWFiOi/kOihjOS4gOasoeWbnuiwg+WHveaVsFxuICAgICAgICBtZWRpYU1hdGNocygpO1xuICAgICAgICAvLyDkuLrmn6Xor6LliJfooajms6jlhoznm5HlkKzlmajvvIzlkIzml7blsIblm57osIPlh73mlbDkvKDnu5nnm5HlkKzlmahcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXZpY2Vfd2lkdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRldmljZV93aWR0aFtpXS5hZGRMaXN0ZW5lcihtZWRpYU1hdGNocyk7XG4gICAgICAgIH1cbiAgICB9LFxufVxuXG5cbiIsImltcG9ydCBsYXlvdXRfb2JqZWN0IGZyb20gJy4vY29tbW9uL2xheW91dC5qcyc7XG5pbXBvcnQgdG9jX29iamVjdCBmcm9tICcuL3BhcnQvdG9jLmpzJztcbmltcG9ydCBjb21tZW50c19vYmplY3QgZnJvbSAnLi9wYXJ0L2NvbW1lbnRzLmpzJztcbmltcG9ydCB7Z29fdG9wX29iamVjdCxnZXRTY3JvbGx9IGZyb20gJy4vcGFydC9nb190b3AuanMnO1xuaW1wb3J0IHdlYl9pbmZvX29iamVjdCBmcm9tICcuL3BhcnQvd2ViX2luZm8uanMnO1xuaW1wb3J0IHNlYXJjaF9vYmplY3QgZnJvbSAnLi9wYXJ0L3NlYXJjaC5qcyc7XG5pbXBvcnQgc2hhcmVfb2JqZWN0IGZyb20gJy4vcGFydC9zaGFyZWJ1dHRvbi5qcyc7XG5pbXBvcnQgY2F0ZWdvcmllc19vYmplY3QgZnJvbSAnLi9wYXJ0L2NhdGVnb3JpZXMuanMnO1xuaW1wb3J0IHtpbml0V2lkZ2V0fSBmcm9tICcuL3BhcnQvbGl2ZTJkLmpzJztcbi8vIOWIneWni+WMlmhpZ2hsaWdodOiEmuacrFxuaGxqcy5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkKCk7XG5cbi8vIOWfn+WQjemHjeWumuWQkVxuaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ3d6dGxpbmsxMDEzLmNvbScpIHtcbiAgICBsb2NhdGlvbi5yZXBsYWNlKGxvY2F0aW9uLmhyZWYucmVwbGFjZSgnd3p0bGluazEwMTMuY29tJywgJ3d3dy53enRsaW5rMTAxMy5jb20nKSk7XG59XG5cbi8vIGxpdmUyZCDliJ3lp4vljJZcbmluaXRXaWRnZXQoe1xuICAgIHdhaWZ1UGF0aDogXCIvZGF0YS9yZW11Lmpzb25cIixcbiAgICBjZG5QYXRoOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9mZ2hyc2gvbGl2ZTJkX2FwaS90cmVlLzEuMC4xL1wiXG59KTtcblxuLy8g5YWl5Y+j5Ye95pWw77yM5Lya5Zyo6aG16Z2i5Yqg6L295a6M5q+V5omn6KGMXG4kKGZ1bmN0aW9uKCl7XG4gICAgLy8g5Yid5aeL5YyW55uu5b2V6ISa5pys5Ye95pWwXG4gICAgdG9jX29iamVjdC5pbml0KCk7XG4gICAgLy8g5Yid5aeL5YyW6K+E6K665qih5Z2X5LiL5omA5pyJ5Ye95pWwXG4gICAgY29tbWVudHNfb2JqZWN0LmluaXQoKTtcbiAgICAvLyDliJ3lp4vljJblm57liLDpobbpg6hcbiAgICBnb190b3Bfb2JqZWN0LmluaXQoKTtcbiAgICAvLyDluIPlsYDliJ3lp4vljJZcbiAgICBsYXlvdXRfb2JqZWN0LmluaXQoKTtcbiAgICBzZWFyY2hfb2JqZWN0LmluaXQoKTtcbiAgICAvLyDlhaXlj6Plh73mlbDliJ3lp4vljJbnvZHnq5nov5DooYzml7bpl7RcbiAgICB3ZWJfaW5mb19vYmplY3QuaW5pdCgpO1xuICAgIC8vIOWIhuS6q+aMiemSrueahOWIneWni+WMllxuICAgIHNoYXJlX29iamVjdC5pbml0KCk7XG4gICAgLy8g55uu5b2V5Ye95pWw5Yid5aeL5YyWXG4gICAgY2F0ZWdvcmllc19vYmplY3QuaW5pdCgpO1xuXG59KVxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub3Blbl9jbG9zZV9mb3JkZXJfcGx1cygpO1xuICAgICAgICB0aGlzLmhpdF9vcGVuX2Nsb3NlX2ZvcmRlcigpO1xuICAgICAgICB0aGlzLnJlYWRtb3JlX2Jsb2dfZXNzYXkoKTtcbiAgICB9LFxuICAgIC8vIOeCueWHu2ljb27lsZXlvIAv5YWz6Zet5qCR5YiG57G7XG4gICAgaGl0X29wZW5fY2xvc2VfZm9yZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGNhdGVfY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlX2NlbGwnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7aTxjYXRlX2NlbGwubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZiAoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyl7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSAkKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsxXSk7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID09PSBcImlubGluZS1ibG9ja1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhrPlrprlk6rkupvpnIDopoHmmL7npLppY29uXG4gICAgb3Blbl9jbG9zZV9mb3JkZXJfcGx1czogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBjYXRlX2NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZV9jZWxsJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwO2k8Y2F0ZV9jZWxsLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgLy8g5p+l55yL56ys5LiJ5Liq5a2Q6IqC54K55piv5ZCm5pyJ5YWD57SgXG4gICAgICAgICAgICBpZihjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uY2hpbGRyZW4ubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgICAgICAgICAvLyDmmL7npLrml4HovrnnmoRpY29uXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOS4jeaYvuekuuaXgei+ueeahGljb25cbiAgICAgICAgICAgICAgICBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICAvLyDmn6XnnIvmm7TlpJrpobXpnaLvvIzkvJjljJbljZrlrqIv6ZqP56yU5pi+56S6XG4gICAgcmVhZG1vcmVfYmxvZ19lc3NheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYXJjaGl2ZXMvXCIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgICAvLyDljrvmjonnrKzkuIDkuKrvvJ/lrZfnrKZcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSBsb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpO1xuICAgICAgICAgICAgLy8g5qC55o2uPeWPt+WIkuWIhuWPguaVsFxuICAgICAgICAgICAgbGV0IGFyciA9IHBhcmFtcy5zcGxpdCgnPScpO1xuICAgICAgICAgICAgLy8g6I635Y+WcGFnZV90eXBl5Y+C5pWwXG4gICAgICAgICAgICBsZXQgcGFnZV90eXBlID0gYXJyWzFdO1xuICAgICAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFyY2hpdmVfYXJ0aWNsZV9saXN0Jyk7XG4gICAgICAgICAgICBmb3IgKGxldCB1ID0gMDt1PHVsLmxlbmd0aDt1KyspIHtcbiAgICAgICAgICAgICAgICAvLyDlr7nmr4/kuIDkuKpsaei/m+ihjOWIpOaWre+8jOWmguaenOS4jeaYr+WPguaVsOeahOWAvO+8jOWwsei/m+ihjOmakOiXj1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwO2k8dWxbdV0uY2hpbGRyZW4ubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB1bFt1XS5jaGlsZHJlbltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAnZHNhbCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAnYmxvZyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBwYWdlX3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsW3VdLmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxu44CQ5paH56ug6K6/6Zeu6YeP5o6S5ZCN44CRXG4gICAg5paH56ug6ZiF6K+76YeP5Zyo5Y2V5Liq5paH56ug5Lit5Y+v5Lul5pi+56S65L2G5piv5LiN6IO95o6S5ZCN77yM5o6S5ZCN5oCO5LmI5a6e546w5ZGi77yfXG4gICAg5pa55qGIMe+8muS9v+eUqHZhbGluZVxuICAgIOaWueahiDLvvJrlnKjmnI3liqHlmajkuIrov5vooYzlhajnq5nnmoTmlofnq6Dorr/pl67vvIzmj5Dlj5bku5bku6znmoTorr/pl67ph49pZFxuICAgIOaWueahiDPvvJrlr7l0d2lrb2/kupHlh73mlbDov5vooYzku6PnoIHmm7TmlLnvvIznsbvkvLzorr/pl67ph49hcGlcbiBcbuOAkOivhOiuuuWIh+aNouaMiemSruOAkVxuICAgIOWIh+aNonV0dGVyYW5jZXPor4TorrrlkI7vvIzpobXpnaLkvJrliLfmlrDkuIDkuIvnhLblkI7lj4jlm57liLDpu5jorqTor4Torrrns7vnu5/kuobvvIzov5nkuKrlj6/ku6XkvJjljJZcblxu44CQ5pyA5paw6K+E6K6644CRXG4gICAg5pyA5paw6K+E6K6657uE5Lu277yM5aaC5p6cYmxvZ+mhtemdoueUqOS6hu+8jOmCo+S5iOi/meS4que7hOS7tuWwseS4jeiDveaUvuWcqOenu+WKqOerr+S+p+i+ueagj+S6hu+8jFxuICAgIOWQjOS4gOS4qmlk5LiN6IO95aSa5qyh55So55qE57yY5pWF5ZCX77yfXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cblxuLy8g5a+85Ye65Li65LiA5Liq5a+56LGhXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ29fY29tbWVudHMoKTtcbiAgICB0aGlzLmNvbW1lbnRzX2NvdW50KCk7XG4gICAgdGhpcy5uZXdfY29tbWVudHMoKTtcbiAgICB0aGlzLnN3aXRjaF9jb21tZW50KCk7XG4gIH0sXG4gIC8vIOaYr+WQpuWJjeW+gOivhOiuuuWMulxuICBnb19jb21tZW50czogZnVuY3Rpb24oKXtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvX2NvbW1lbnRzJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb19jb21tZW50cycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfSxcbiAgLy8g5paH56ug6K+E6K665pWwXG4gIGNvbW1lbnRzX2NvdW50OiBmdW5jdGlvbigpIHtcbiAgICAvLyDliKTmlq3pobXpnaLmmK/lkKbmnInor4TorrrljLppZOWSjOW8leeUqOivhOiuuuaVsOeahGlkXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cycpICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0d2lrb29fY29tbWVudHMnKSkge1xuICAgICAgdmFyIHR3aWtvb19jb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0d2lrb29fY29tbWVudHMnKTtcbiAgICAgIC8vIEJPTeiOt+WPlumhtemdonVybOeahHBhdGhuYW1l6Lev5b6EXG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzX3VybCA9IFtsb2NhdGlvbi5wYXRobmFtZV07XG5cbiAgICAgIHR3aWtvby5nZXRDb21tZW50c0NvdW50KHtcbiAgICAgICAgZW52SWQ6ICd3ZWJzaXRlLXdpa29vLTRnNDZrOGRvOTg4Njc1NDInLCAvLyDnjq/looMgSURcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIHVybHM6IHR3aWtvb19jb21tZW50c191cmwsLy8g5LiN5YyF5ZCr5Y2P6K6u44CB5Z+f5ZCN44CB5Y+C5pWw55qE5paH56ug6Lev5b6E5YiX6KGo77yM5b+F5Lyg5Y+C5pWwXG4gICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UgLy8g6K+E6K665pWw5piv5ZCm5YyF5ous5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAvLyDlsIbor4TorrrmlbDlhpnlhaXlhbbkuK1cbiAgICAgICAgdHdpa29vX2NvbW1lbnRzLmlubmVyVGV4dCA9IHJlc1swXS5jb3VudDtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgLy8g6L+U5Zue56S65L6LOiBbXG4gICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMC9wb3N0LTEuaHRtbCcsIGNvdW50OiAxMCB9LFxuICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTEvcG9zdC0yLmh0bWwnLCBjb3VudDogMCB9LFxuICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTIvcG9zdC0zLmh0bWwnLCBjb3VudDogMjAgfVxuICAgICAgICAvLyBdXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIC8vIOWPkeeUn+mUmeivr1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIOacgOaWsOivhOiuulxuICBuZXdfY29tbWVudHM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBob3RfYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG90X2FydGljbGVzX2l0ZW0nKTtcbiAgICB2YXIgcGFnZV9zaXplID0gODtcbiAgICB0d2lrb28uZ2V0UmVjZW50Q29tbWVudHMoe1xuICAgICAgICBlbnZJZDogJ3dlYnNpdGUtd2lrb28tNGc0Nms4ZG85ODg2NzU0MicsIC8vIOeOr+WigyBJRFxuICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgcGFnZVNpemU6IHBhZ2Vfc2l6ZSwgLy8g6I635Y+W5aSa5bCR5p2h77yM6buY6K6k77yaMTDvvIzmnIDlpKfvvJoxMDBcbiAgICAgICAgaW5jbHVkZVJlcGx5OiBmYWxzZSAvLyDmmK/lkKbljIXmi6zmnIDmlrDlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld19jb21tZW50c19sb2RpbmcnKTtcbiAgICAgICAgdmFyIG5ld19jb21tZW50c19sb2RpbmdfcGFyZW50ID0gbmV3X2NvbW1lbnRzX2xvZGluZy5wYXJlbnRFbGVtZW50O1xuICAgICAgICBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudC5yZW1vdmVDaGlsZChuZXdfY29tbWVudHNfbG9kaW5nKTtcbiAgICAgICAgLy8g5o+S5YWl6K+E6K66XG4gICAgICAgIGZvciAodmFyIGkgPSAwO2k8cGFnZV9zaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAocmVzW2ldLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfY29udGVudCA9IHJlc1tpXS5jb21tZW50O1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19uaWNrID0gcmVzW2ldLm5pY2s7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX3VybCA9IHJlc1tpXS51cmw7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2F2YXRhciA9IHJlc1tpXS5hdmF0YXI7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX3RpbWUgPSByZXNbaV0ucmVsYXRpdmVUaW1lO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19pZCA9ICcjJyArIHJlc1tpXS5pZDtcbiAgICBcbiAgICAgICAgICAgIHZhciBob3RfYXJ0aWNsZXNfY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgaG90X2FydGljbGVzX2NoaWxkLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiaXRlbV91cFwiPjxpbWcgc3JjPVwiJyArIG5ld19jb21tZW50c19hdmF0YXIgKyAnXCIgY2xhc3M9XCJhdmF0YXJcIj48ZGl2IGNsYXNzPVwibmlja19uYW1lXCI+PHNwYW4gY2xhc3M9XCJuaWNrXCI+JyArIG5ld19jb21tZW50c19uaWNrICsgJzwvc3Bhbj48c3BhbiBjbGFzcz1cInRpbWVcIj4nICsgbmV3X2NvbW1lbnRzX3RpbWUgKyAnPC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJpdGVtX2Rvd25cIj48YSBocmVmPVwiJyArIG5ld19jb21tZW50c191cmwgKyBuZXdfY29tbWVudHNfaWQgKyAnXCI+JyArIG5ld19jb21tZW50c19jb250ZW50ICsgJzwvYT48L2Rpdj4nO1xuICAgICAgICAgICAgaG90X2FydGljbGVzLmFwcGVuZChob3RfYXJ0aWNsZXNfY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfSxcbiAgLy8g5YiH5o2i6K+E6K66XG4gIHN3aXRjaF9jb21tZW50OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3dpdGNoX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzd2l0Y2hfYnRuJyk7XG4gICAgdmFyIHV0dGVyYW5jZXNfY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1dHRlcmFuY2VzX2NvbW1lbnQnKTtcbiAgICB2YXIgdHdpa29vX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnQnKTtcbiAgICBcbiAgICBzd2l0Y2hfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgIGlmKHV0dGVyYW5jZXNfY29tbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgdXR0ZXJhbmNlc19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0d2lrb29fY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBpZiAoIXV0dGVyYW5jZXNfY29tbWVudC5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgdmFyIHNjcmlwdF91dHRlcmFuY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNyYz1cImh0dHBzOi8vdXR0ZXJhbmMuZXMvY2xpZW50LmpzXCIgO1xuICAgICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwicmVwb1wiLFwid3p0bGluazEwMTMvY29tbWVudFwiKTtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImlzc3VlLXRlcm1cIixcInRpdGxlXCIpO1xuICAgICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwibGFiZWxcIixcIvCfkqxjb21tZW50XCIpO1xuICAgICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwidGhlbWVcIixcImdpdGh1Yi1saWdodFwiKTtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImNyb3Nzb3JpZ2luXCIsXCJhbm9ueW1vdXNcIik7XG4gICAgICAgICAgICB1dHRlcmFuY2VzX2NvbW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0X3V0dGVyYW5jZXMpOyBcbiAgICAgICAgfVxuICAgICAgfWVsc2Uge1xuICAgICAgICB1dHRlcmFuY2VzX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5cblxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAg57yT5oWi5pi+56S6XG4gICAgICAgIOe8k+aFouWbnuWIsOmhtumDqFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIGxldCBnb190b3Bfb2JqZWN0ID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmdvX3RvcCgpO1xuICAgICAgICB0aGlzLmNsaWNrX2dvX3RvcCgpO1xuICAgIH0sXG4gICAgZ29fdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyDmu5rliqjmmL7npLpnb190b3DmjInpkq5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAvLyDmjIHnu63nm5HlkKzmu5rliqjnirbmgIFcbiAgICAgICAgICAgIGdldFNjcm9sbCgpLnRvcCAhPT0gMCA/ICQoXCIjZ29fdG9wXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKSA6ICQoXCIjZ29fdG9wXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICB9KSAgXG4gICAgfSxcbiAgICBjbGlja19nb190b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDngrnlh7vlm57liLDpobbpg6hcbiAgICAgICAgJChcIiNnb190b3BcIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vLyBzY3Jvb2xUb3DlhbzlrrnmgKfmlrnmoYhcbmZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcbiAgICByZXR1cm4ge1xuICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnR8fDAsXG4gICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwXG4gICAgfTtcbn1cblxuXG4vLyDlpoLmnpzkuI3lgZrpu5jorqTlr7zlhaXvvIzlsLHmjInnhafkuIvpnaLlhpnvvIzkuI3opoFkZWZhdWx06K+NXG5leHBvcnQge1xuICAgIGdvX3RvcF9vYmplY3QsIC8v5a+85Ye65a+56LGhXG4gICAgZ2V0U2Nyb2xsLCAvL+WvvOWHuumAmueUqOWHveaVsFxufVxuXG5cbiIsImZ1bmN0aW9uIGxvYWRXaWRnZXQoY29uZmlnKSB7XG4gICAgICAgIGxldCB7IHdhaWZ1UGF0aCwgYXBpUGF0aCwgY2RuUGF0aCB9ID0gY29uZmlnO1xuICAgICAgICBsZXQgdXNlQ0ROID0gZmFsc2UsIG1vZGVsTGlzdDtcbiAgICAgICAgaWYgKHR5cGVvZiBjZG5QYXRoID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB1c2VDRE4gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFjZG5QYXRoLmVuZHNXaXRoKFwiL1wiKSkgY2RuUGF0aCArPSBcIi9cIjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXBpUGF0aCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKCFhcGlQYXRoLmVuZHNXaXRoKFwiL1wiKSkgYXBpUGF0aCArPSBcIi9cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGluaXRXaWRnZXQgYXJndW1lbnQhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwid2FpZnUtZGlzcGxheVwiKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcIndhaWZ1LXRleHRcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGA8ZGl2IGlkPVwid2FpZnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2FpZnUtdGlwc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJsaXZlMmRcIj48L2NhbnZhcz5cbiAgICAgICAgICAgICAgICA8IS0tIDxkaXYgaWQ9XCJ3YWlmdS10b29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbGcgZmEtY29tbWVudFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1sZyBmYS1pbmZvLWNpcmNsZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1sZyBmYS10aW1lc1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5gKTtcbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQxNDg0MDMvdHJpZ2dlci1jc3MtdHJhbnNpdGlvbi1vbi1hcHBlbmRlZC1lbGVtZW50XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdVwiKS5zdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICB9LCAwKTtcbiAgICBcbiAgICAgICAgZnVuY3Rpb24gcmFuZG9tU2VsZWN0aW9uKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKSA/IG9ialtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvYmoubGVuZ3RoKV0gOiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5qOA5rWL55So5oi35rS75Yqo54q25oCB77yM5bm25Zyo56m66Zey5pe25pi+56S65raI5oGvXG4gICAgICAgIGxldCB1c2VyQWN0aW9uID0gZmFsc2UsXG4gICAgICAgICAgICB1c2VyQWN0aW9uVGltZXIsXG4gICAgICAgICAgICBtZXNzYWdlVGltZXIsXG4gICAgICAgICAgICBtZXNzYWdlQXJyYXkgPSBbXCLlpb3kuYXkuI3op4HvvIzml6XlrZDov4flvpflpb3lv6vlkaLigKbigKZcIiwgXCLll6jvvZ7mrKLov47orr/pl67or6Xnq5nngrnvvIFcIiwgXCLorrDlvpfmiorlsI/lrrbliqDlhaUgQWRibG9jayDnmb3lkI3ljZXlk6bvvIFcIl07XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsICgpID0+IHVzZXJBY3Rpb24gPSB0cnVlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsICgpID0+IHVzZXJBY3Rpb24gPSB0cnVlKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXJBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB1c2VyQWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh1c2VyQWN0aW9uVGltZXIpO1xuICAgICAgICAgICAgICAgIHVzZXJBY3Rpb25UaW1lciA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF1c2VyQWN0aW9uVGltZXIpIHtcbiAgICAgICAgICAgICAgICB1c2VyQWN0aW9uVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHJhbmRvbVNlbGVjdGlvbihtZXNzYWdlQXJyYXkpLCA2MDAwLCA5KTtcbiAgICAgICAgICAgICAgICB9LCAyMDAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIFxuICAgICAgICBcbiAgICAgICAgKGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IOesrOS4gOS4qmljb27vvIzor7Tor51cbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FpZnUtdG9vbCAuZmEtY29tbWVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0hpdG9rb3RvKTtcbiAgICAgICAgICAgIC8vIFRPRE86IOesrOS6jOS4qmljb27vvIzosozkvLzmmK/ku4DkuYjmuLjmiI9cbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FpZnUtdG9vbCAuZmEtcGFwZXItcGxhbmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBpZiAod2luZG93LkFzdGVyb2lkcykge1xuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoIXdpbmRvdy5BU1RFUk9JRFNQTEFZRVJTKSB3aW5kb3cuQVNURVJPSURTUExBWUVSUyA9IFtdO1xuICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3cuQVNURVJPSURTUExBWUVSUy5wdXNoKG5ldyBBc3Rlcm9pZHMoKSk7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3N0ZXZlbmpvZXpoYW5nL2FzdGVyb2lkcy9hc3Rlcm9pZHMuanNcIjtcbiAgICAgICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8gVE9ETzog56ys5LiJ5LiqaWNvbu+8jOaNouS6uueJqVxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YWlmdS10b29sIC5mYS11c2VyLWNpcmNsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZE90aGVyTW9kZWwpO1xuICAgICAgICAgICAgLy8gVE9ETzog56ys5Zub5LiqaWNvbu+8jOW6lOivpeaYr+aNouijhVxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YWlmdS10b29sIC5mYS1zdHJlZXQtdmlld1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZFJhbmRNb2RlbCk7XG4gICAgICAgICAgICAvLyBUT0RPOiDnrKzkupTkuKppY29u77yM5ouN54WnXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dhaWZ1LXRvb2wgLmZhLWNhbWVyYS1yZXRyb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHNob3dNZXNzYWdlKFwi54Wn5aW95LqG5Zib77yM5piv5LiN5piv5b6I5Y+v54ix5ZGi77yfXCIsIDYwMDAsIDkpO1xuICAgICAgICAgICAgLy8gICAgIExpdmUyRC5jYXB0dXJlTmFtZSA9IFwicGhvdG8ucG5nXCI7XG4gICAgICAgICAgICAvLyAgICAgTGl2ZTJELmNhcHR1cmVGcmFtZSA9IHRydWU7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vIFRPRE86IOesrOWFreS4qmljb27vvIzljp/pobnnm67lnLDlnYBcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FpZnUtdG9vbCAuZmEtaW5mby1jaXJjbGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBvcGVuKFwiaHR0cHM6Ly93d3cud3p0bGluazEwMTMuY29tL1wiKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8gLy8gVE9ETzog56ys5LiD5LiqaWNvbu+8jOmakOiXj+eci+adv+WomFxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YWlmdS10b29sIC5mYS10aW1lc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2FpZnUtZGlzcGxheVwiLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIC8vICAgICBzaG93TWVzc2FnZShcIuaEv+S9oOacieS4gOWkqeiDveS4jumHjeimgeeahOS6uumHjemAouOAglwiLCAyMDAwLCAxMSk7XG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdVwiKS5zdHlsZS5ib3R0b20gPSBcIi01MDBweFwiO1xuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaWZ1XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdS10b2dnbGVcIikuY2xhc3NMaXN0LmFkZChcIndhaWZ1LXRvZ2dsZS1hY3RpdmVcIik7XG4gICAgICAgICAgICAvLyAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoXCLkvaDpg73lpI3liLbkuobkupvku4DkuYjlkYDvvIzovazovb3opoHorrDlvpfliqDkuIrlh7rlpITlk6bvvIFcIiwgNjAwMCwgOSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4pIHNob3dNZXNzYWdlKFwi5ZOH77yM5L2g57uI5LqO5Zue5p2l5LqG772eXCIsIDYwMDAsIDkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG4gICAgXG4gICAgICAgIC8vIOmmlumhteWxleekuueJueWumuaWh+Wtl1xuICAgICAgICAoZnVuY3Rpb24gd2VsY29tZU1lc3NhZ2UoKSB7XG4gICAgICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHsgLy8g5aaC5p6c5piv5Li76aG1XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgIGlmIChub3cgPiA1ICYmIG5vdyA8PSA3KSB0ZXh0ID0gXCLml6nkuIrlpb3vvIHkuIDml6XkuYvorqHlnKjkuo7mmajvvIznvo7lpb3nmoTkuIDlpKnlsLHopoHlvIDlp4vkuobjgIJcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPiA3ICYmIG5vdyA8PSAxMSkgdGV4dCA9IFwi5LiK5Y2I5aW977yB5bel5L2c6aG65Yip5Zib77yM5LiN6KaB5LmF5Z2Q77yM5aSa6LW35p2l6LWw5Yqo6LWw5Yqo5ZOm77yBXCI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID4gMTEgJiYgbm93IDw9IDEzKSB0ZXh0ID0gXCLkuK3ljYjkuobvvIzlt6XkvZzkuobkuIDkuKrkuIrljYjvvIznjrDlnKjmmK/ljYjppJDml7bpl7TvvIFcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPiAxMyAmJiBub3cgPD0gMTcpIHRleHQgPSBcIuWNiOWQjuW+iOWuueaYk+eKr+WbsOWRou+8jOS7iuWkqeeahOi/kOWKqOebruagh+WujOaIkOS6huWQl++8n1wiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+IDE3ICYmIG5vdyA8PSAxOSkgdGV4dCA9IFwi5YKN5pma5LqG77yB56qX5aSW5aSV6Ziz55qE5pmv6Imy5b6I576O5Li95ZGi77yM5pyA576O5LiN6L+H5aSV6Ziz57qi772eXCI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID4gMTkgJiYgbm93IDw9IDIxKSB0ZXh0ID0gXCLmmZrkuIrlpb3vvIzku4rlpKnov4flvpfmgI7kuYjmoLfvvJ9cIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPiAyMSAmJiBub3cgPD0gMjMpIHRleHQgPSBbXCLlt7Lnu4/ov5nkuYjmmZrkuoblkYDvvIzml6nngrnkvJHmga/lkKfvvIzmmZrlronvvZ5cIiwgXCLmt7HlpJzml7bopoHniLHmiqTnnLznnZvlkYDvvIFcIl07XG4gICAgICAgICAgICAgICAgZWxzZSB0ZXh0ID0gXCLkvaDmmK/lpJznjKvlrZDlkYDvvJ/ov5nkuYjmmZrov5jkuI3nnaHop4nvvIzmmI7lpKnotbfnmoTmnaXlmJvvvJ9cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucmVmZXJyZXIgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZlcnJlciA9IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLFxuICAgICAgICAgICAgICAgICAgICBkb21haW4gPSByZWZlcnJlci5ob3N0bmFtZS5zcGxpdChcIi5cIilbMV07XG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLmhvc3RuYW1lID09PSByZWZlcnJlci5ob3N0bmFtZSkgdGV4dCA9IGDmrKLov47pmIXor7s8c3Bhbj7jgIwke2RvY3VtZW50LnRpdGxlLnNwbGl0KFwiIC0gXCIpWzBdfeOAjTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvbWFpbiA9PT0gXCJiYWlkdVwiKSB0ZXh0ID0gYEhlbGxv77yB5p2l6IeqIOeZvuW6puaQnOe0oiDnmoTmnIvlj4s8YnI+5L2g5piv5pCc57SiIDxzcGFuPiR7cmVmZXJyZXIuc2VhcmNoLnNwbGl0KFwiJndkPVwiKVsxXS5zcGxpdChcIiZcIilbMF19PC9zcGFuPiDmib7liLDnmoTmiJHlkJfvvJ9gO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvbWFpbiA9PT0gXCJzb1wiKSB0ZXh0ID0gYEhlbGxv77yB5p2l6IeqIDM2MOaQnOe0oiDnmoTmnIvlj4s8YnI+5L2g5piv5pCc57SiIDxzcGFuPiR7cmVmZXJyZXIuc2VhcmNoLnNwbGl0KFwiJnE9XCIpWzFdLnNwbGl0KFwiJlwiKVswXX08L3NwYW4+IOaJvuWIsOeahOaIkeWQl++8n2A7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9tYWluID09PSBcImdvb2dsZVwiKSB0ZXh0ID0gYEhlbGxv77yB5p2l6IeqIOiwt+atjOaQnOe0oiDnmoTmnIvlj4s8YnI+5qyi6L+O6ZiF6K+7PHNwYW4+44CMJHtkb2N1bWVudC50aXRsZS5zcGxpdChcIiAtIFwiKVswXX3jgI08L3NwYW4+YDtcbiAgICAgICAgICAgICAgICBlbHNlIHRleHQgPSBgSGVsbG/vvIHmnaXoh6ogPHNwYW4+JHtyZWZlcnJlci5ob3N0bmFtZX08L3NwYW4+IOeahOaci+WPi2A7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRleHQgPSBg5qyi6L+O6ZiF6K+7PHNwYW4+44CMJHtkb2N1bWVudC50aXRsZS5zcGxpdChcIiAtIFwiKVswXX3jgI08L3NwYW4+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNob3dNZXNzYWdlKHRleHQsIDcwMDAsIDgpO1xuICAgICAgICB9KSgpO1xuICAgICAgICAvLyBUT0RPOiDmnI3liqHkuo7nrKzkuIDkuKppY29uXG4gICAgICAgIC8vIGZ1bmN0aW9uIHNob3dIaXRva290bygpIHtcbiAgICAgICAgLy8gICAgIC8vIOWinuWKoCBoaXRva290by5jbiDnmoQgQVBJXG4gICAgICAgIC8vICAgICBmZXRjaChcImh0dHBzOi8vdjEuaGl0b2tvdG8uY25cIilcbiAgICAgICAgLy8gICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC8vICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgdGV4dCA9IGDov5nlj6XkuIDoqIDmnaXoh6ogPHNwYW4+44CMJHtyZXN1bHQuZnJvbX3jgI08L3NwYW4+77yM5pivIDxzcGFuPiR7cmVzdWx0LmNyZWF0b3J9PC9zcGFuPiDlnKggaGl0b2tvdG8uY24g5oqV56i/55qE44CCYDtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2hvd01lc3NhZ2UocmVzdWx0LmhpdG9rb3RvLCA2MDAwLCA5KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSh0ZXh0LCA0MDAwLCA5KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSwgNjAwMCk7XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8g5rKh5pyJYnVn5bGV56S654m55a6a54q25oCB5LiL55qE5paH5a2XXG4gICAgICAgIGZ1bmN0aW9uIHNob3dNZXNzYWdlKHRleHQsIHRpbWVvdXQsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICBpZiAoIXRleHQgfHwgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ3YWlmdS10ZXh0XCIpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ3YWlmdS10ZXh0XCIpID4gcHJpb3JpdHkpKSByZXR1cm47XG4gICAgICAgICAgICBpZiAobWVzc2FnZVRpbWVyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG1lc3NhZ2VUaW1lcik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZVRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHQgPSByYW5kb21TZWxlY3Rpb24odGV4dCk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwid2FpZnUtdGV4dFwiLCBwcmlvcml0eSk7XG4gICAgICAgICAgICBjb25zdCB0aXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdS10aXBzXCIpO1xuICAgICAgICAgICAgdGlwcy5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICAgICAgdGlwcy5jbGFzc0xpc3QuYWRkKFwid2FpZnUtdGlwcy1hY3RpdmVcIik7XG4gICAgICAgICAgICBtZXNzYWdlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwid2FpZnUtdGV4dFwiKTtcbiAgICAgICAgICAgICAgICB0aXBzLmNsYXNzTGlzdC5yZW1vdmUoXCJ3YWlmdS10aXBzLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgXG59XG5mdW5jdGlvbiBpbml0V2lkZ2V0KGNvbmZpZywgYXBpUGF0aCkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikgY29uZmlnID0geyB3YWlmdVBhdGg6IGNvbmZpZywgYXBpUGF0aCB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgPGRpdiBpZD1cIndhaWZ1LXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPumbt+Wnhjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PmApO1xuICAgICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaWZ1LXRvZ2dsZVwiKTtcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcIndhaWZ1LXRvZ2dsZS1hY3RpdmVcIik7XG4gICAgICAgICAgICBpZiAodG9nZ2xlLmdldEF0dHJpYnV0ZShcImZpcnN0LXRpbWVcIikpIHtcbiAgICAgICAgICAgICAgICBsb2FkV2lkZ2V0KGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZShcImZpcnN0LXRpbWVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwid2FpZnUtZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaWZ1XCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaWZ1XCIpLnN0eWxlLmJvdHRvbSA9IDA7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3YWlmdS1kaXNwbGF5XCIpICYmIERhdGUubm93KCkgLSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndhaWZ1LWRpc3BsYXlcIikgPD0gODY0MDAwMDApIHtcbiAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJmaXJzdC10aW1lXCIsIHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJ3YWlmdS10b2dnbGUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2FkV2lkZ2V0KGNvbmZpZyk7XG4gICAgICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBpbml0V2lkZ2V0LCAvL+WvvOWHuuWvueixoVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH0sXG4gICAgc2VhcmNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGlucHV0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWlucHV0XCIpO1xuXG4gICAgICAgIGlmIChpbnB1dEFyZWEpIHtcbiAgICAgICAgICAgIGlucHV0QXJlYS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEucGxhY2Vob2xkZXIgPSAn6aaW5qyh5pCc57SiaW5nwrfCt8K3JztcbiAgICAgICAgICAgICAgICBnZXRTZWFyY2hGaWxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbmNsaWNrID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlucHV0QXJlYS5vbmtleWRvd24gPSBmdW5jdGlvbigpIHsgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHJldHVybiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBjbGVhclNlYXJjaCgkcmVzdWx0Q29udGVudCkge1xuICAgICAgICAgICAgLy8gY2xlYXIgc2VhcmNoIHJlc3VsdFxuICAgICAgICAgICAgdmFyIGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1zZWFyY2gtY2xvc2VcIik7XG4gICAgICAgICAgICBidG5DbG9zZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9ICfor7fovpPlhaXlhbPplK7or40nO1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5mb2N1cygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIHNlYXJjaEZ1bmMgPSBmdW5jdGlvbihwYXRoLCBzZWFyY2hfaWQsIGNvbnRlbnRfaWQpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBCVE4gPSBcIjxkaXYgaWQ9J2xvY2FsLXNlYXJjaC1jbG9zZSc+5riF56m65pCc57SiPC9kaXY+XCJcbiAgICAgICAgICAgIHZhciAkaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWFyY2hfaWQpO1xuICAgICAgICAgICAgdmFyICRyZXN1bHRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudF9pZCk7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdW1lIGlucHV0XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQucGxhY2Vob2xkZXIgPSAn6L6T5YWl5YWz6ZSu6K+N5Lul5pCc57SiJztcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LmZvY3VzKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgeG1sID0geGhyLnJlc3BvbnNlWE1MO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm9vdCA9IHhtbC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gcm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImVudHJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGl0bGVcIilbMF0uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjb250ZW50XCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1cmxcIilbMF0uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSAnPHVsIGNsYXNzPVxcXCJhcmNoaXZlXFxcIj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXdvcmRzID0gdGhpcy52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKS5zcGxpdCgvW1xcc1xcLV0rLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUudHJpbSgpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacrOWcsOaQnOe0ouS4u+S7o+eggVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50X2luZGV4ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLnRpdGxlIHx8IGRhdGEudGl0bGUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRpdGxlID0gXCJVbnRpdGxlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ19kYXRhX3RpdGxlID0gZGF0YS50aXRsZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfdGl0bGUgPSBvcmlnX2RhdGFfdGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ19kYXRhX2NvbnRlbnQgPSBkYXRhLmNvbnRlbnQudHJpbSgpLnJlcGxhY2UoLzxbXj5dKz4vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfY29udGVudCA9IG9yaWdfZGF0YV9jb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfdXJsID0gZGF0YS51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4X3RpdGxlID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4X2NvbnRlbnQgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3Rfb2NjdXIgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IG1hdGNoIGFydGlsZXMgd2l0aCBub3QgZW1wdHkgY29udGVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YV9jb250ZW50ICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4X3RpdGxlID0gZGF0YV90aXRsZS5pbmRleE9mKGtleXdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfY29udGVudCA9IGRhdGFfY29udGVudC5pbmRleE9mKGtleXdvcmQpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleF90aXRsZSA8IDAgJiYgaW5kZXhfY29udGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleF9jb250ZW50IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleF9jb250ZW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9vY2N1ciA9IGluZGV4X2NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnRfaW5kZXgucHVzaCh7aW5kZXhfY29udGVudDppbmRleF9jb250ZW50LCBrZXl3b3JkX2xlbjprZXl3b3JkX2xlbn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWxleekuue7k+aenFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IOW+heWujOWWhO+8jOW+heWujOWWhFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8bGk+PGEgaHJlZj0nXCIgK2xvY2F0aW9uLnByb3RvY29sK1wiLy9cIitsb2NhdGlvbi5ob3N0K1wiL1wiKyBkYXRhX3VybCArIFwiJyBjbGFzcz0nYXJjaGl2ZS10aXRsZSc+XCIgKyBvcmlnX2RhdGFfdGl0bGUgKyBcIjwvYT5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBvcmlnX2RhdGFfY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0X29jY3VyID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1dCBvdXQgMTAwIGNoYXJhY3RlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGZpcnN0X29jY3VyIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kID0gZmlyc3Rfb2NjdXIgKyAzMDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gNDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZCA+IGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gY29udGVudC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaF9jb250ZW50ID0gY29udGVudC5zdWJzdHIoc3RhcnQsIDEwMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IGFsbCBrZXl3b3Jkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ1MgPSBuZXcgUmVnRXhwKGtleXdvcmQsIFwiZ2lcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hfY29udGVudCA9IG1hdGNoX2NvbnRlbnQucmVwbGFjZShyZWdTLCBcIjxlbSBjbGFzcz1cXFwic2VhcmNoLWtleXdvcmRcXFwiPlwiICsga2V5d29yZCArIFwiPC9lbT5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8cCBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCIgKyBtYXRjaF9jb250ZW50ICsgXCIuLi48L3A+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8L2xpPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPC91bD5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZignPGxpPicpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IEJUTiArIFwiPGRpdiBjbGFzcz0nbG9jYWwtc2VhcmNoLWVtcHR5Jz7msqHmnInmib7liLDkvaDmiYDopoHmkJzntKLnmoTlhoXlrrnigKbigKY8L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gQlROICsgc3RyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdmFyIGdldFNlYXJjaEZpbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBwYXRoID0gXCIvc2VhcmNoLnhtbFwiO1xuICAgICAgICAgICAgc2VhcmNoRnVuYyhwYXRoLCAnbG9jYWwtc2VhcmNoLWlucHV0JywgJ2xvY2FsLXNlYXJjaC1yZXN1bHQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIOWFqOWxgOaMiemSruiuvue9rmpz5piv5ZCm5bGV56S65pCc57Si5qGGXG4gICAgICAgIHZhciBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoX2J0bicpO1xuICAgICAgICBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWwtc2VhcmNoLWlucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdmFyIHNlYXJjaF9jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfY2xvc2UnKTtcbiAgICAgICAgc2VhcmNoX2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbn1cblxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIG5lZWRTaGFyZUJ1dHRvblxuICAtIFZlcnNpb24gMS4wLjBcbiAgLSBDb3B5cmlnaHQgMjAxNSBEem1pdHJ5IFZhc2lsZXVza2lcblx0LSBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQpXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNoYXJlKCk7XG4gICAgfSxcbiAgICBzaGFyZTogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBmaW5kIGNsb3Nlc3RcbiAgICBmdW5jdGlvbiBjbG9zZXN0KGVsZW0sIHBhcmVudCkge1xuICAgICAgaWYgKHR5cGVvZihwYXJlbnQpID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaGVzU2VsZWN0b3IgPSBlbGVtLm1hdGNoZXMgfHwgZWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbS5tc01hdGNoZXNTZWxlY3RvcjtcbiAgXG4gICAgICAgICAgICAgIGlmICghIW1hdGNoZXNTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzU2VsZWN0b3IuYmluZChlbGVtKShwYXJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgaWYgKGVsZW0gPT0gcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyBzaGFyZSBidXR0b24gY2xhc3NcbiAgICAgIHdpbmRvdy5uZWVkU2hhcmVCdXR0b24gPSBmdW5jdGlvbihlbGVtLCBvcHRpb25zKSB7XG4gICAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnQgcmVmZXJlbmNlXG4gICAgICAgICAgdmFyIHJvb3QgPSB0aGlzO1xuICAgICAgICAgIHJvb3QuZWxlbSA9IGVsZW0gfHwgJ25lZWQtc2hhcmUtYnV0dG9uJztcbiAgXG4gICAgICAgICAgLyogSGVscGVyc1xuICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBcbiAgICAgIC8vIGdldCB0aXRsZSBmcm9tIGh0bWxcbiAgICAgIHJvb3QuZ2V0VGl0bGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJvZzp0aXRsZVwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInR3aXR0ZXI6dGl0bGVcIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnRpdGxlO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gZ2V0IGltYWdlIGZyb20gaHRtbFxuICAgICAgICByb290LmdldEltYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgLy8gY2hlY2sgcXVlcnlTZWxlY3RvciBleGlzdGFuY2UgZm9yIG9sZCBicm93c2Vyc1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjppbWFnZVwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gZ2V0IGRlc2NyaXB0aW9uIGZyb20gaHRtbFxuICAgICAgICByb290LmdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAgICAgLy8gY2hlY2sgcXVlcnlTZWxlY3RvciBleGlzdGFuY2UgZm9yIG9sZCBicm93c2Vyc1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJykubmFtZWRJdGVtKCdkZXNjcmlwdGlvbicpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgXG4gICAgICAgIC8vIHNoYXJlIHVybHMgZm9yIGFsbCBuZXR3b3Jrc1xuICAgICAgICByb290LnNoYXJlID0ge1xuICAgICAgICAgICAgJ3dlaWJvJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly92LnQuc2luYS5jb20uY24vc2hhcmUvc2hhcmUucGhwP3RpdGxlPSdcbiAgICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICAgKyBcIiZ1cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICAgKyBcIiZwaWM9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd3ZWNoYXQnOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciBpbWdTcmMgPSAnaHR0cHM6Ly9hcGkucXJzZXJ2ZXIuY29tL3YxL2NyZWF0ZS1xci1jb2RlLz9zaXplPTE1MHgxNTAmZGF0YT0nK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgdmFyIGRyb3Bkb3duRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24nKTtcbiAgICAgICAgICAgICAgdmFyIGltZyA9IGRyb3Bkb3duRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpWzBdO1xuICAgICAgICAgICAgICB2YXIgbG9hZGVyID0gZHJvcGRvd25FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZWVkLXNoYXJlLWxvYWRlcicpWzBdO1xuICBcbiAgICAgICAgICAgICAgICBpZiAoaW1nKSB7XG4gICAgICAgICAgICBpbWcucmVtb3ZlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmKGxvYWRlcikge1xuICAgICAgICAgICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxvYWRlci5jbGFzc05hbWUgPSAnbmVlZC1zaGFyZS1sb2FkZXInO1xuICAgICAgICAgICAgbG9hZGVyLmlubmVyVGV4dCA9ICdsb2FkaW5nLi4uJztcbiAgICAgICAgICAgIGxvYWRlci50aXRsZSA9ICdsb2FkaW5nIHFyY29kZS4uLic7XG4gIFxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IGltZ1NyYztcbiAgICAgICAgICAgICAgICAgICAgaW1nLmFsdCA9ICdDcmVhdGUgcXJjb2RlIGZhaWxlZCEnO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsJ25lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKTtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKGxvYWRlci5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQobG9hZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICdkb3ViYW4nOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vd3d3LmRvdWJhbi5jb20vc2hhcmUvc2VydmljZT9uYW1lPSdcbiAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICArIFwiJmhyZWY9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICsgXCImaW1hZ2U9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdxcXpvbmUnOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly9zbnMucXpvbmUucXEuY29tL2NnaS1iaW4vcXpzaGFyZS9jZ2lfcXpzaGFyZV9vbmVrZXk/dGl0bGU9J1xuICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICsgXCImdXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICArIFwiJnBpY3M9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSlcbiAgICAgICAgICAgICAgKyBcIiZkZXNjPVwiKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3JlbnJlbic6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3dpZGdldC5yZW5yZW4uY29tL2RpYWxvZy9zaGFyZT90aXRsZT0nXG4gICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgKyBcIiZyZXNvdXJjZVVybD1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgKyBcIiZwaWM9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSlcbiAgICAgICAgICAgICAgKyBcIiZkZXNjcmlwdGlvbj1cIisgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICB9LFxuICBcbiAgICAgICAgICAgICdtYWlsdG8nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnbWFpbHRvOj9zdWJqZWN0PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKSArICcmYm9keT1UaG91Z2h0IHlvdSBtaWdodCBlbmpveSByZWFkaW5nIHRoaXM6ICcgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCkgKyAnIC0gJyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICBcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndHdpdHRlcicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0nO1xuICAgICAgICAgICAgICAgIHVybCArPSBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKSArIFwiJnVybD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwaW50ZXJlc3QnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2Jvb2ttYXJrbGV0Lz9pc192aWRlbz1mYWxzZSc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmbWVkaWE9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnVybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdmYWNlYm9vaycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZmFjZWJvb2suY29tL3NoYXJlLnBocD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdnb29nbGVwbHVzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncmVkZGl0JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5yZWRkaXQuY29tL3N1Ym1pdD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2RlbGljaW91cycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdkZWwuaWNpby51cy9wb3N0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmbm90ZXM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ3RhcGl0dXJlJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0YXBpdHVyZS5jb20vYm9va21hcmtsZXQvaW1hZ2U/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdpbWdfc3JjPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmcGFnZV91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmcGFnZV90aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdzdHVtYmxldXBvbicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2xpbmtlZGluJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnNvdXJjZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5zb3VyY2UpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ3NsYXNoZG90JyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdzbGFzaGRvdC5vcmcvYm9va21hcmsucGw/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAndGVjaG5vcmF0aScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndGVjaG5vcmF0aS5jb20vZmF2ZXM/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdhZGQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAncG9zdGVyb3VzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3Bvc3Rlcm91cy5jb20vc2hhcmU/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ2xpbmt0bz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3R1bWJscicgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cudHVtYmxyLmNvbS9zaGFyZT92PTMnO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICdnb29nbGVib29rbWFya3MnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5nb29nbGUuY29tL2Jvb2ttYXJrcy9tYXJrP29wPWVkaXQnO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZia21rPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmYW5ub3RhdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vICduZXdzdmluZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lm5ld3N2aW5lLmNvbS9fdG9vbHMvc2VlZCZzYXZlPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAndT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZoPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gJ3BpbmdmbScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGluZy5mbS9yZWYvPyc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnbGluaz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmJvZHk9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAnZXZlcm5vdGUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmV2ZXJub3RlLmNvbS9jbGlwLmFjdGlvbj8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZyaWVuZGZlZWQnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmZyaWVuZGZlZWQuY29tL3NoYXJlPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndmtvbnRha3RlJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3Zrb250YWt0ZS5ydS9zaGFyZS5waHA/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICB1cmwgKz0gJyZkZXNjcmlwdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgdXJsICs9ICcmaW1hZ2U9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgIHVybCArPSAnJm5vcGFyc2U9dHJ1ZSc7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnb2Rub2tsYXNzbmlraScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cub2Rub2tsYXNzbmlraS5ydS9kaz9zdC5jbWQ9YWRkU2hhcmUmc3Qucz0xJztcbiAgICAgICAgICB1cmwgKz0gJyZzdC5jb21tZW50cz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgdXJsICs9ICcmc3QuX3N1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICdtYWlscnUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ2Nvbm5lY3QubWFpbC5ydS9zaGFyZT8nO1xuICAgICAgICAvLyAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgIC8vICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvLyAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy8gICB1cmwgKz0gJyZpbWFnZXVybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfVxuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gb3BlbiBzaGFyZSBsaW5rIGluIGEgcG9wdXBcbiAgICAgICAgcm9vdC5wb3B1cCA9IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICB2YXIgbGVmdCwgdG9wOyBcbiAgXG4gICAgICAgIHZhciBwb3B1cFdpZHRoID0gNjAwLFxuICAgICAgICAgICAgcG9wdXBIZWlnaHQgPSA1MDA7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gY2FjdWxhdGUgYnJvd3NlciB3aW5kb3cgd2lkdGhcbiAgICAgICAgLy8gaWYgd2luZG93IHdpZHRoIGlzIHRvbyBuYXJyb3csIHVzZSBzY3JlZW4gd2lkdGg7XG4gICAgICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiBzY3JlZW4ud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6IHNjcmVlbi5oZWlnaHQ7XG4gICAgICAgIGlmICh3aWR0aCA8IDYwMCAmJiBoZWlnaHQgPCA1MDApIHtcbiAgICAgICAgICBsZWZ0ID0gKHNjcmVlbi53aWR0aCAvIDIpIC0gKHBvcHVwV2lkdGggLyAyKTtcbiAgICAgICAgICB0b3AgPSAoc2NyZWVuLmhlaWdodCAvIDIpIC0gKHBvcHVwSGVpZ2h0IC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc2V0IGxlZnQgYW5kIHRvcCBwb3NpdGlvblxuICAgICAgICAgICAgICB2YXIgZHVhbFNjcmVlbkxlZnQgPSB3aW5kb3cuc2NyZWVuTGVmdCAhPSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHNjcmVlbi5sZWZ0LFxuICAgICAgICAgICAgZHVhbFNjcmVlblRvcCA9IHdpbmRvdy5zY3JlZW5Ub3AgIT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlblRvcCA6IHNjcmVlbi50b3A7XG4gICAgICAgICAgLy8gY2FsY3VsYXRlIHRvcCBhbmQgbGVmdCBwb3NpdGlvblxuICAgICAgICAgIGxlZnQgPSAoKHdpZHRoIC8gMikgLSAocG9wdXBXaWR0aCAvIDIpKSArIGR1YWxTY3JlZW5MZWZ0O1xuICAgICAgICAgIHRvcCA9ICgoaGVpZ2h0IC8gMikgLSAocG9wdXBIZWlnaHQgLyAyKSkgKyBkdWFsU2NyZWVuVG9wO1xuICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICB2YXIgc2hhcmVXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsJ3RhcmdldFdpbmRvdycsJ3Rvb2xiYXI9bm8sbG9jYXRpb249bm8sc3RhdHVzPW5vLG1lbnViYXI9bm8sc2Nyb2xsYmFycz15ZXMscmVzaXphYmxlPXllcyx3aWR0aD0nICsgcG9wdXBXaWR0aCArICcsIGhlaWdodD0nICsgcG9wdXBIZWlnaHQgKyAnLCB0b3A9JyArIHRvcCArICcsIGxlZnQ9JyArIGxlZnQpO1xuICAgICAgICAgICAgLy8gUHV0cyBmb2N1cyBvbiB0aGUgbmV3V2luZG93XG4gICAgICAgICAgaWYgKHdpbmRvdy5mb2N1cykge1xuICAgICAgICAgICAgICBzaGFyZVdpbmRvdy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgXG4gICAgICAgICAgLyogU2V0IG9wdGlvbnNcbiAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgXG4gICAgICAgICAgLy8gY3JlYXRlIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgICAgIHJvb3Qub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgaWNvblN0eWxlOiAnZGVmYXVsdCcsIC8vIGRlZmF1bHQgb3IgYm94XG4gICAgICAgICAgICAgIGJveEZvcm06ICdob3Jpem9udGFsJywgLy8gaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbUNlbnRlcicsIC8vIHRvcCAvIG1pZGRsZSAvIGJvdHRvbSArIExlZnQgLyBDZW50ZXIgLyBSaWdodFxuICAgICAgICAgICAgICBwcm90b2NvbDogWydodHRwJywgJ2h0dHBzJ10uaW5kZXhPZih3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnOicpWzBdKSA9PT0gLTEgPyAnaHR0cHM6Ly8nIDogJy8vJyxcbiAgICAgICAgICAgICAgbmV0d29ya3M6ICdUd2l0dGVyLEZhY2Vib29rLFJlZGRpdCxMaW5rZWRpbixUdW1ibHIsUGludGVyZXN0LFdlaWJvLFdlY2hhdCxEb3ViYW4sUVFab25lLE1haWx0bycsXG4gICAgICAgICAgICAgIGljb25zOiBbJ2ZhIGZhLXR3aXR0ZXInLCdmYSBmYS1mYWNlYm9vaycsJ2ZhIGZhLXJlZGRpdC1hbGllbicsJ2ZhIGZhLWxpbmtlZGluJywnZmEgZmEtdHVtYmxyJywnZmEgZmEtcGludGVyZXN0JywnZmEgZmEtd2VpYm8nLCdmYSBmYS13ZWl4aW4nLCc5JywnZmEgZmEtcXEnLCdmYSBmYS1lbnZlbG9wZS1vJ11cbiAgICAgICAgICB9O1xuICBcbiAgICAgIC8vIGludGVncmF0ZSBjdXN0b20gb3B0aW9uc1xuICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgIHJvb3Qub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICB9XG4gICAgICAvLyBjb252ZXJ0IG5ldHdvcmtzIHN0cmluZyBpbnRvIGFycmF5XG4gICAgICByb290Lm9wdGlvbnMubmV0d29ya3MgPSByb290Lm9wdGlvbnMubmV0d29ya3MudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICBcbiAgICAgIGZ1bmN0aW9uIGdldE9wdGlvbnMoZWwpIHtcbiAgICAgICAgICAvLyBpbnRlZ3JhdGUgZGF0YSBhdHRyaWJ1dGUgb3B0aW9uc1xuICAgICAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBpIGluIHJvb3Qub3B0aW9ucykge1xuICAgICAgICAgICAgcmV0W2ldID0gcm9vdC5vcHRpb25zW2ldO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgLy8gdGhlc2UgYXR0cnMgbXVzdCBnZXQgZHluYW1pY2FsbHkuXG4gICAgICAgICAgcmV0LnVybCA9IHJvb3Qub3B0aW9ucy51cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgcmV0LnRpdGxlID0gcm9vdC5vcHRpb25zLnRpdGxlIHx8IHJvb3QuZ2V0VGl0bGUoKTtcbiAgICAgICAgICByZXQuaW1hZ2UgPSByb290Lm9wdGlvbnMuaW1hZ2UgfHwgcm9vdC5nZXRJbWFnZSgpO1xuICAgICAgICAgIHJldC5kZXNjcmlwdGlvbiA9IHJvb3Qub3B0aW9ucy5kZXNjcmlwdGlvbiB8fCByb290LmdldERlc2NyaXB0aW9uKCk7XG4gIFxuICAgICAgICAgIGZvciAodmFyIG9wdGlvbiBpbiBlbC5kYXRhc2V0KSB7XG4gICAgICAgICAgICAgIC8vIHJlcGxhY2Ugb25seSAnc2hhcmUtJyBwcmVmaXhlZCBkYXRhLWF0dHJpYnV0ZXNcbiAgICAgICAgICAgIGlmIChvcHRpb24ubWF0Y2goL3NoYXJlLykpIHtcbiAgICAgICAgICAgICAgdmFyIG5ld19vcHRpb24gPSBvcHRpb24ucmVwbGFjZSgvc2hhcmUvLCAnJyk7XG4gICAgICAgICAgICAgIGlmICghbmV3X29wdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5ld19vcHRpb24gPSBuZXdfb3B0aW9uLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmV3X29wdGlvbi5zbGljZSgxKTtcbiAgICAgICAgICAgICAgdmFyIHZhbCA9IGVsLmRhdGFzZXRbb3B0aW9uXTtcbiAgICAgICAgICAgICAgaWYgKG5ld19vcHRpb24gPT09ICduZXR3b3JrcycpIHtcbiAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3X29wdGlvbiA9PT0gJ3VybCcgJiYgdmFsICYmIHZhbFswXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAvLyBmaXggcmVsYXRpdmUgdXJsIHByb2JsZW0uXG4gICAgICAgICAgICAgICAgICB2YWwgPSBsb2NhdGlvbi5vcmlnaW4gKyB2YWw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0W25ld19vcHRpb25dID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICBcbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duKGVsKSB7XG4gICAgICAgICAgLy8gY3JlYXRlIGRyb3Bkb3duXG4gICAgICAgICAgdmFyIGRyb3Bkb3duRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgPSAnbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24nO1xuICAgICAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24nKSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgXG4gICAgICAgICAgLy8gc2V0IGRyb3Bkb3duIHJvdyBsZW5ndGhcbiAgICAgICAgICBpZiAobXlvcHRpb25zLmljb25TdHlsZSA9PSAnYm94JyAmJiBteW9wdGlvbnMuYm94Rm9ybSA9PSAnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm94LWhvcml6b250YWwnO1xuICAgICAgICAgIGVsc2UgaWYgKG15b3B0aW9ucy5pY29uU3R5bGUgPT0gJ2JveCcgJiYgbXlvcHRpb25zLmJveEZvcm0gPT0gJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3gtdmVydGljYWwnO1xuICBcbiAgICAgICAgICAvLyBzZXQgZHJvcGRvd24gcG9zaXRpb24gXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChteW9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtbGVmdCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAndG9wUmlnaHQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tdG9wLXJpZ2h0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICd0b3BDZW50ZXInOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tdG9wLWNlbnRlcic7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSBkcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnbWlkZGxlTGVmdCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1taWRkbGUtbGVmdCc7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5Ub3AgPSAtIGRyb3Bkb3duRWwub2Zmc2V0SGVpZ2h0IC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnbWlkZGxlUmlnaHQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tbWlkZGxlLXJpZ2h0JztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpblRvcCA9IC0gZHJvcGRvd25FbC5vZmZzZXRIZWlnaHQgLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1sZWZ0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdib3R0b21SaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tcmlnaHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbUNlbnRlcic6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWNlbnRlcic7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSBkcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sMSk7XG4gIFxuICBcbiAgICAgICAgICAvLyBmaWxsIGZyb3Bkb3duIHdpdGggYnV0dG9uc1xuICAgICAgICAgIHZhciBpY29uQ2xhc3MgPSBteW9wdGlvbnMuaWNvblN0eWxlID09ICdkZWZhdWx0JyA/ICduZWVkLXNoYXJlLWJ1dHRvbl9saW5rIG5lZWQtc2hhcmUtYnV0dG9uXycgOiAnbmVlZC1zaGFyZS1idXR0b25fbGluay0nICsgbXlvcHRpb25zLmljb25TdHlsZSArICcgbmVlZC1zaGFyZS1idXR0b25fbGluayBuZWVkLXNoYXJlLWJ1dHRvbl8nO1xuICAgICAgICAgIGxldCBmbGFnID0gMDtcbiAgICAgICAgICBmb3IgKHZhciBuZXR3b3JrIGluIG15b3B0aW9ucy5uZXR3b3Jrcykge1xuICAgICAgICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgIG5ldHdvcmsgPSBteW9wdGlvbnMubmV0d29ya3NbbmV0d29ya107XG4gICAgICAgICAgICAgIGxpbmsuY2xhc3NOYW1lID0gaWNvbkNsYXNzICsgbmV0d29yaztcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobXlvcHRpb25zLmljb25zLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGxpbmsuY2xhc3NOYW1lICs9ICcgJytteW9wdGlvbnMuaWNvbnNbZmxhZ107XG4gICAgICAgICAgICAgIGxpbmsuZGF0YXNldC5uZXR3b3JrID0gbmV0d29yaztcbiAgICAgICAgICAgICAgbGluay50aXRsZSA9IG5ldHdvcms7XG4gICAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgICAgICAgIGZsYWcrKztcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGRyb3Bkb3duRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICBpZiAoY2xvc2VzdChldmVudC50YXJnZXQsICcubmVlZC1zaGFyZS1idXR0b25fbGluaycpKSB7XG4gICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICBcbiAgICAgICAgICAgICAgICAgcm9vdC5zaGFyZVtldmVudC50YXJnZXQuZGF0YXNldC5uZXR3b3JrXShlbCk7XG4gICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gIFxuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRyb3Bkb3duRWwpO1xuICAgICAgfVxuICBcbiAgICAgIHZhciB0YXJnZXRFbCA9IHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSkgOiBlbGVtO1xuICAgICAgIGlmICh0YXJnZXRFbCAmJiB0YXJnZXRFbC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWQtc2hhcmUtcGFuZWwnKSkge1xuICAgICAgICBjcmVhdGVEcm9wZG93bih0YXJnZXRFbCk7XG4gICAgICAgIC8vIHRhcmdldEVsLmNsYXNzTGlzdC5hZGQoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICAgICAgfSBlbHNlIFxuICAgICAgICAvLyBjbG9zZSBvbiBjbGljayBvdXRzaWRlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICB2YXIgb3BlbmVkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gIFxuICAgICAgICAgIGlmICghY2xvc2VzdChldmVudC50YXJnZXQsICcubmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJykpIHtcbiAgICAgICAgICAgIGlmIChvcGVuZWRFbCkge1xuICAgICAgICAgICAgICAgIG9wZW5lZEVsLmNsYXNzTGlzdC5yZW1vdmUoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICBcbiAgICAgICAgICAgICAgICAvLyBoaWRlIHdlY2hhdCBjb2RlIGltYWdlIHdoZW4gY2xvc2UgdGhlIGRyb3Bkb3duLlxuICAgICAgICAgICAgICAgIGlmIChvcGVuZWRFbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lZEVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBjbG9zZXN0KGV2ZW50LnRhcmdldCwgcm9vdC5lbGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVEcm9wZG93bihlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEpO1xuICBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgXG4gICAgfTtcbiAgXG4gICAgbmV3IG5lZWRTaGFyZUJ1dHRvbignLm5lZWQtc2hhcmUtYnV0dG9uJyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudG9jX2J0bigpO1xuICAgIH0sXG4gICAgdG9jX2J0bjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0b2NfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvY19jb250YWluZXInKTtcbiAgICAgICAgbGV0IHRvY19idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9jX2J0bicpO1xuICAgICAgICAkKHRvY19idG4pLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAodG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpe1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ZWJfaW5mb19ydW50aW1lKCk7XG4gICAgfSxcbiAgICAvLyBUT0RPOiAhISHmiJHnnYDlrp7kuI3nn6XpgZPov5nmmK/kuKrku4DkuYjnp5hcbiAgICB3ZWJfaW5mb19ydW50aW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgQmlydGhEYXkgPSBuZXcgRGF0ZShuZXcgRGF0ZSgnMjAyMC8wMS8wNCcpKTtcbiAgICAgICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgdGltZW9sZCA9ICh0b2RheS5nZXRUaW1lKCkgLSBCaXJ0aERheS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgbGV0IGRheXNvbGQgPSBNYXRoLmZsb29yKHRpbWVvbGQgLyAoMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMVwiKS5pbm5lclRleHQgPSBkYXlzb2xkICsgJyDlpKknO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF5c29sZCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYmluZm9fcnVudGltZV9jb3VudF8xXCIpKTtcbiAgICB9LFxufVxuXG4iXX0=
