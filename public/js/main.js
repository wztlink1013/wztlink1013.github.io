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
} // 入口函数，会在页面加载完毕执行


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY2F0ZWdvcmllcy5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvc2VhcmNoLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC9zaGFyZWJ1dHRvbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvdG9jLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC93ZWJfaW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFsQjtBQUNBLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxjQUFELENBQW5CLEMsQ0FFQTs7QUFDQSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsVUFBRCxDQUFmO0FBQ0EsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFdBQUQsQ0FBaEI7QUFDQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQjtBQUNBLElBQUksU0FBUyxHQUFHLENB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QUFJLGFBQWEsQ0FBQyxLQUFkLENBQW9CLE9BQXBCLEtBQWdDLE9BQXBDLEVBQTRDO0FBQy9DLFFBQUEsYUFBYSxDQUFDLEtBQWQsQ0FBb0IsT0FBcEIsR0FBOEIsTUFBOUI7QUFDSCxPQUZNLE1BRUE7QUFDSCxRQUFBLGFBQWEsQ0FBQyxLQUFkLENBQW9CLE9BQXBCLEdBQThCLE9BQTlCO0FBQ0g7QUFDSixLQVJEO0FBU0g7QUFoQlUsQzs7Ozs7Ozs7OztlQ0FBO0FBQ1gsRUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZCxTQUFLLGdCQUFMO0FBQ0gsR0FIVTtBQUlYO0FBQ0EsRUFBQSxnQkFBZ0IsRUFBRSw0QkFBWTtBQUN0QixRQUFJLFFBQVEsR0FBRyxJQUFJLElBQUosQ0FBUyxJQUFJLElBQUosQ0FBUyxZQUFULENBQVQsQ0FBZjtBQUNBLFFBQUksS0FBSyxHQUFHLElBQUksSUFBSixFQUFaO0FBQ0EsUUFBSSxPQUFPLEdBQUksS0FBSyxDQUFDLE9BQU4sS0FBa0IsUUFBUSxDQUFDLE9BQVQsRUFBakM7QUFDQSxRQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQU8sSUFBSSxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsSUFBbkIsQ0FBbEIsQ0FBZCxDQUpzQixDQUt0QjtBQUNBO0FBQ0E7QUFDUDtBQWJVLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiAgXG4gICAgVE9ETzogXG4gICAgICAgIOiDveWcqOagueebruW9leiuvue9rum7mOiupOeKtuaAgeaYr+WHoOagj+eahFxuICAgICAgICDog73lpJ/orqnkvb/nlKjogIXlj5bmtojov5nnp43igJzorrDlv4bigJ1cbioqL1xuXG5cbi8vIFBD77yaaGVhZGVy5LiK55qE5bem5Y+z5oyJ6ZKu5Yy65Z+fXG5sZXQgYXJyb3dfbGVmdCA9ICQoJyNhcnJvd19sZWZ0Jyk7XG5sZXQgYXJyb3dfcmlnaHQgPSAkKCcjYXJyb3dfcmlnaHQnKTtcblxuLy8g5biD5bGA77ya54mI5b+D44CB5bem5Lit5Y+z5o6S54mIXG5sZXQgY3RfbGVmdCA9ICQoJy5jdF9sZWZ0Jyk7XG5sZXQgY3RfcmlnaHQgPSAkKCcuY3RfcmlnaHQnKTtcbmxldCBjdF9jZW50ZXIgPSAkKCcuY3RfY2VudGVyJyk7XG5sZXQgY29udGFpbmVyID0gJCgnLmNvbnRhaW5lcicpO1xuXG4vLyBQQy9hcHDvvJrliIfmjaJoZWFkZXJcbmxldCBoZWFkZXIgPSAkKCcuaGVhZGVyJyk7XG5sZXQgaGVhZGVyX2FwcCA9ICQoJy5oZWFkZXJfYXBwJyk7XG5cbi8vIGFwcO+8mmhlYWRlcuS4iueahOW3puWPs+aMiemSruWMuuWfn1xubGV0IGJ0bl9hcHBfc2lkZXIgPSAkKCcjYnRuX2FwcF9zaWRlcicpO1xubGV0IGJ0bl9hcHBfcmlnaHQgPSAkKCcjYnRuX2FwcF9yaWdodCcpO1xuXG4vLyBhcHDvvJrngrnlh7toZWFkZXJfYXBw5pe25YCZ5by55Ye65p2l55qE5oq95bGJXG5sZXQgYXBwX3NpZGVfZ2xhc3MgPSAkKCcjYXBwX3NpZGVfZ2xhc3MnKTtcbmxldCBhcHBfc2lkZV9jb250ZW50ID0gJCgnI2FwcF9zaWRlX2NvbnRlbnQnKTtcblxuLy8gMS7lt6bkuK3phY3nva5cbmxldCBvbmVfY29udGFpbmVyID0gJzgwJScgO1xubGV0IG9uZV9jdF9jZW50ZXJfd2lkdGggPSAnNzUlJztcbmxldCBvbmVfY3RfbGVmdF93aWR0aCA9ICcyNSUnO1xuLy8gMi4g5Lit5Y+z6YWN572uXG5sZXQgdHdvX2NvbnRhaW5lciA9ICc4MCUnIDtcbmxldCB0d29fY3RfY2VudGVyX3dpZHRoID0gJzc1JSc7XG5sZXQgdHdvX2N0X3JpZ2h0X3dpZHRoID0gJzI1JSc7XG4vLyAzLiDlt6bkuK3lj7PphY3nva5cbmxldCB0aHJlZV9jb250YWluZXIgPSAnOTUlJyA7XG5sZXQgdGhyZWVfY3RfY2VudGVyX3dpZHRoID0gJzYwJSc7XG5sZXQgdGhyZWVfY3RfcmlnaHRfd2lkdGggPSAnMjAlJztcbmxldCB0aHJlZV9jdF9sZWZ0X3dpZHRoID0gJzIwJSc7XG4vLyA0LiDkuK3phY3nva5cbmxldCBmb3VyX2NvbnRhaW5lciA9ICc5MCUnIDtcbmxldCBmb3VyX2N0X2NlbnRlcl93aWR0aCA9ICcxMDAlJztcbi8vIOiuvuWkh+Wwj+S6jjU2MHB455qE5Lit6YWN572uXG5sZXQgZGV2aWNlX3NtYWxsX2NvbnRhaW5lciA9IFwiOTclXCI7XG5sZXQgZGV2aWNlX3NtYWxsX2NlbnRlciA9IFwiMTAwJVwiO1xuLy8g6K6+5aSH5bCP5LqONzgwcHjnmoTkuK3phY3nva5cbmxldCBkZXZpY2VfY2VudGVyX2NvbnRhaW5lciA9IFwiOTMlXCI7XG5sZXQgZGV2aWNlX2NlbnRlcl9jZW50ZXIgPSBcIjEwMCVcIjtcblxuXG4vLyDliKTmlq1wY+auteW3puWPs+S4iuinkueahOeureWktOivpeaYvuekuuWTquS4qlxuZnVuY3Rpb24gbGVmdF9yaWdodF9hcnJvdyAoKSB7XG4gICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgfVxuICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBsZWZ0X2NlbnRlcl9yaWdodCAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IHRocmVlX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgY3RfcmlnaHQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9yaWdodF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdMUicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ0xSJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbGVmdF9jZW50ZXIgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogb25lX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogb25lX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKHtcIndpZHRoXCI6IG9uZV9jdF9sZWZ0X3dpZHRofSk7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBsZWZ0X3JpZ2h0X2Fycm93ICgpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXlvdXQnKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLliIfmjaLliLDlt6bkuK3luIPlsYDkuoZcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNlbnRlcl9yaWdodCAoKSB7XG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiB0d29fY29udGFpbmVyfSk7XG4gICAgY3RfcmlnaHQuY3NzKHtcIndpZHRoXCI6IHR3b19jdF9yaWdodF93aWR0aH0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogdHdvX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBsZWZ0X3JpZ2h0X2Fycm93ICgpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXlvdXQnKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnUicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ1InKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjZW50ZXIgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogZm91cl9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IGZvdXJfY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgbGVmdF9yaWdodF9hcnJvdyAoKTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGF5b3V0Jyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnQycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ0MnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXZpY2Vfc21hbGwgKCkge1xuICAgIC8vIOacgOWwj+WwuuWvuO+8muacgOWkpzU2MHB4XG4gICAgY29uc29sZS5sb2coXCLlsI/kuo41NjBweOWwuuWvuFwiKTtcblxuICAgIGhlYWRlci5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgIGhlYWRlcl9hcHAuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgLy8g6K6+572u5biD5bGAXG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiBkZXZpY2Vfc21hbGxfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBkZXZpY2Vfc21hbGxfY2VudGVyfSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG5cbn1cbmZ1bmN0aW9uIGRldmljZV9jZW50ZXIgKCkge1xuICAgIC8vIOS4reetieWwuuWvuO+8muacgOWkpzk4MHB4XG4gICAgY29uc29sZS5sb2coXCLlsI/kuo45ODBweOWwuuWvuFwiKTtcblxuICAgIGhlYWRlci5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgIGhlYWRlcl9hcHAuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgLy8g6K6+572u5biD5bGAXG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiBkZXZpY2VfY2VudGVyX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX2NlbnRlcl9jZW50ZXJ9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcblxufVxuZnVuY3Rpb24gZGV2aWNlX2xhcmdlc3QgKCkge1xuICAgIC8vIOacgOWkp+WwuuWvuO+8muacgOWkpzEyNjFweFxuICAgIGNvbnNvbGUubG9nKFwi5bCP5LqOMTI2MXB45bC65a+4XCIpO1xuXG4gICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgfVxuICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgfVxuICAgIGhlYWRlci5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICBoZWFkZXJfYXBwLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG5cbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IHRocmVlX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY3RfY2VudGVyX3dpZHRofSk7XG4gICAgY3RfbGVmdC5jc3Moe1xuICAgICAgICBcIndpZHRoXCI6IHRocmVlX2N0X2xlZnRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbiAgICBjdF9yaWdodC5jc3Moe1xuICAgICAgICBcIndpZHRoXCI6IHRocmVlX2N0X3JpZ2h0X3dpZHRoLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfSk7XG59XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmJ0bl9wY19zd2l0Y2goKTtcbiAgICAgICAgdGhpcy5idG5fYXBwX3N3aXRjaCgpO1xuICAgICAgICB0aGlzLmJyb3dzZXJfcmVtZW1iZXIoKTtcbiAgICAgICAgdGhpcy5kZXZpY2Vfc3dpdGNoKCk7IC8vIOi/meS4quaUvuWIsOacgOWQjuiHquiwg+eUqO+8jOWboOS4uuS4jeeuoeacrOWcsOWtmOWCqOaYr+S7gOS5iO+8jOacgOe7iOi/mOaYr+imgeagueaNruiuvuWkh+ebkeWQrOS4uuS4u1xuICAgIH0sXG4gICAgLyogUEPvvJrljZUv5Y+ML+S4ieagj+W4g+WxgOWIh+aNouaMiemSrueCueWHu+S6i+S7tiAqL1xuICAgIGJ0bl9wY19zd2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICBhcnJvd19sZWZ0LmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAvLyDovazmjaLliIfmjaLkuYvlkI7nmoTnrq3lpLTmjInpkq5cbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwnYmxvY2snKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy/lt6bkuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+W3puS4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy/kuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/kuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGFycm93X3JpZ2h0LmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDovazmjaLliIfmjaLkuYvlkI7nmoTnrq3lpLTmjInpkq5cbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwnYmxvY2snKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvL+S4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+W3puS4reWPs+mFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSAnbm9uZScpeyAvLyDkuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8g5bem5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qIOenu+WKqOerr+W3puWPs+S4iuinkueahOaMiemSriAqL1xuICAgIGJ0bl9hcHBfc3dpdGNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g54K55Ye75bem5oyJ6ZKuXG4gICAgICAgIGJ0bl9hcHBfc2lkZXIuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFwcF9zaWRlX2dsYXNzLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgICAgICAgICAgYXBwX3NpZGVfY29udGVudC5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOeCueWHu+avm+eOu+eSg+eJh1xuICAgICAgICBhcHBfc2lkZV9nbGFzcy5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgYXBwX3NpZGVfZ2xhc3MuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICAgICAgICAgIGFwcF9zaWRlX2NvbnRlbnQuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOeCueWHu+WPs+aMiemSrlxuICAgICAgICBidG5fYXBwX3JpZ2h0LmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhbGVydChcIuacrOe9keermei/mOWcqOW8gOWPkeS4re+8jOivuOWkmuWKn+iDvei/mOacquWujOWWhO+8jOaVrOivt+acn+W+hX5cIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacrOe9keermei/mOWcqOW8gOWPkeS4re+8jOivuOWkmuWKn+iDvei/mOacquWujOWWhO+8jOaVrOivt+acn+W+hX5cIik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyog5rWP6KeI5Zmo6K6w5L2P5biD5bGAICovXG4gICAgYnJvd3Nlcl9yZW1lbWJlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgYl9sZWZ0ID0gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKTtcbiAgICAgICAgbGV0IGJfcmlnaHQgPSAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKTtcbiAgICAgICAgbGV0IGJfbGF5b3V0O1xuICAgIFxuICAgICAgICAvKiBcbiAgICAgICAg5pyJ5Liq6Zeu6aKY77yaXG4gICAgICAgICAgICDkuIDmiZPlvIDmtY/op4jlmajlsLHkvJrmoLnmja7nvJPlrZjmnaXluIPlsYDvvIzlsL3nrqHkvaDnmoTorr7lpIflrr3luqblsI/kuo4xMjYwcHhcbiAgICAgICAgICAgIOS9huaYr+WvueS6juaZrumAmueUqOaIt++8jOS4gOS4qua1j+iniOWZqOWTquadpeeahOe7j+W4uOW8gOW8gOWPkeiAheaooeW8j+WRou+8n1xuICAgICAgICAqL1xuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgICAgICAvLyDmtY/op4jlmajmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pys5Zyw5pyJ6K+l5Y+Y6YeP57yT5a2YXCIpO1xuICAgICAgICAgICAgbGV0IGxheW91dF9jaGFuZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsYXlvdXRfY2hhbmdlKTtcbiAgICBcbiAgICAgICAgICAgIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkxSXCIpe1xuICAgICAgICAgICAgICAgIC8vIOW3puS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYobGF5b3V0X2NoYW5nZSA9PT0gXCJMXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDlt6bkuK3luIPlsYBcbiAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIlJcIikge1xuICAgICAgICAgICAgICAgIC8vIOS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkNcIikge1xuICAgICAgICAgICAgICAgIC8vIOS4reW4g+WxgFxuICAgICAgICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlhbbku5bojqvlkI3lhbblppnnmoTmg4XlhrVcbiAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5rWP6KeI5Zmo5rKh5pyJ57yT5a2Y55qE5oOF5Ya1XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacrOWcsOayoeacieivpeWPmOmHj+e8k+WtmFwiKTtcbiAgICAgICAgICAgIGlmICgoYl9sZWZ0ID09PSBcImJsb2NrXCIpICYmIChiX3JpZ2h0ID09PSBcIm5vbmVcIikpIHsgLy8g5bem5Lit5biD5bGAXG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIkxcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGJfbGVmdCA9PT0gXCJub25lXCIpICYmIChiX3JpZ2h0ID09PSBcImJsb2NrXCIpKSB7IC8vIOS4reWPs+W4g+WxgFxuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJSXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChiX2xlZnQgPT09IFwiYmxvY2tcIikgJiYgKGJfcmlnaHQgPT09IFwiYmxvY2tcIikpIHsgLy/lt6bkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBiX2xheW91dCA9IFwiTFJcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiX2xheW91dCA9IFwiQ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgYl9sYXlvdXQpXG4gICAgICAgIH1cblxuXG4gICAgfSxcbiAgICAvKiDlqpLkvZPmn6Xor6LluIPlsYAgKi9cbiAgICBkZXZpY2Vfc3dpdGNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g5Yib5bu65p+l6K+i5YiX6KGoXG4gICAgICAgIGxldCBkZXZpY2Vfd2lkdGggPSBbXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNTYwcHgpJyksXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTgwcHgpJyksXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTI2MXB4KScpXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8g5a6a5LmJ5Zue6LCD5Ye95pWwXG4gICAgICAgIGZ1bmN0aW9uIG1lZGlhTWF0Y2hzICgpIHtcbiAgICAgICAgICAgIGlmIChkZXZpY2Vfd2lkdGhbMF0ubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGRldmljZV9zbWFsbCAoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX3dpZHRoWzFdLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBkZXZpY2VfY2VudGVyICgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2Vfd2lkdGhbMl0ubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGRldmljZV9sYXJnZXN0ICgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWwuuWvuOWFtuS7luaDheWGte+8jOeQhuiuuuS4iuaIkeeci+S4jeWIsOi/meWPpeivneKApuKAplwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlhYjov5DooYzkuIDmrKHlm57osIPlh73mlbBcbiAgICAgICAgbWVkaWFNYXRjaHMoKTtcbiAgICAgICAgLy8g5Li65p+l6K+i5YiX6KGo5rOo5YaM55uR5ZCs5Zmo77yM5ZCM5pe25bCG5Zue6LCD5Ye95pWw5Lyg57uZ55uR5ZCs5ZmoXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGV2aWNlX3dpZHRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZXZpY2Vfd2lkdGhbaV0uYWRkTGlzdGVuZXIobWVkaWFNYXRjaHMpO1xuICAgICAgICB9XG4gICAgfSxcbn1cblxuXG4iLCJpbXBvcnQgbGF5b3V0X29iamVjdCBmcm9tICcuL2NvbW1vbi9sYXlvdXQuanMnO1xuaW1wb3J0IHRvY19vYmplY3QgZnJvbSAnLi9wYXJ0L3RvYy5qcyc7XG5pbXBvcnQgY29tbWVudHNfb2JqZWN0IGZyb20gJy4vcGFydC9jb21tZW50cy5qcyc7XG5pbXBvcnQge2dvX3RvcF9vYmplY3QsZ2V0U2Nyb2xsfSBmcm9tICcuL3BhcnQvZ29fdG9wLmpzJztcbmltcG9ydCB3ZWJfaW5mb19vYmplY3QgZnJvbSAnLi9wYXJ0L3dlYl9pbmZvLmpzJztcbmltcG9ydCBzZWFyY2hfb2JqZWN0IGZyb20gJy4vcGFydC9zZWFyY2guanMnO1xuaW1wb3J0IHNoYXJlX29iamVjdCBmcm9tICcuL3BhcnQvc2hhcmVidXR0b24uanMnO1xuaW1wb3J0IGNhdGVnb3JpZXNfb2JqZWN0IGZyb20gJy4vcGFydC9jYXRlZ29yaWVzLmpzJztcblxuLy8g5Yid5aeL5YyWaGlnaGxpZ2h06ISa5pysXG5obGpzLmluaXRIaWdobGlnaHRpbmdPbkxvYWQoKTtcblxuLy8g5Z+f5ZCN6YeN5a6a5ZCRXG5pZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnd3p0bGluazEwMTMuY29tJykge1xuICAgIGxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24uaHJlZi5yZXBsYWNlKCd3enRsaW5rMTAxMy5jb20nLCAnd3d3Lnd6dGxpbmsxMDEzLmNvbScpKTtcbn1cblxuXG4vLyDlhaXlj6Plh73mlbDvvIzkvJrlnKjpobXpnaLliqDovb3lrozmr5XmiafooYxcbiQoZnVuY3Rpb24oKXtcbiAgICAvLyDliJ3lp4vljJbnm67lvZXohJrmnKzlh73mlbBcbiAgICB0b2Nfb2JqZWN0LmluaXQoKTtcbiAgICAvLyDliJ3lp4vljJbor4TorrrmqKHlnZfkuIvmiYDmnInlh73mlbBcbiAgICBjb21tZW50c19vYmplY3QuaW5pdCgpO1xuICAgIC8vIOWIneWni+WMluWbnuWIsOmhtumDqFxuICAgIGdvX3RvcF9vYmplY3QuaW5pdCgpO1xuICAgIC8vIOW4g+WxgOWIneWni+WMllxuICAgIGxheW91dF9vYmplY3QuaW5pdCgpO1xuICAgIHNlYXJjaF9vYmplY3QuaW5pdCgpO1xuICAgIC8vIOWFpeWPo+WHveaVsOWIneWni+WMlue9keermei/kOihjOaXtumXtFxuICAgIHdlYl9pbmZvX29iamVjdC5pbml0KCk7XG4gICAgLy8g5YiG5Lqr5oyJ6ZKu55qE5Yid5aeL5YyWXG4gICAgc2hhcmVfb2JqZWN0LmluaXQoKTtcbiAgICAvLyDnm67lvZXlh73mlbDliJ3lp4vljJZcbiAgICBjYXRlZ29yaWVzX29iamVjdC5pbml0KCk7XG59KVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wZW5fY2xvc2VfZm9yZGVyX3BsdXMoKTtcbiAgICAgICAgdGhpcy5oaXRfb3Blbl9jbG9zZV9mb3JkZXIoKTtcbiAgICAgICAgdGhpcy5yZWFkbW9yZV9ibG9nX2Vzc2F5KCk7XG4gICAgfSxcbiAgICAvLyDngrnlh7tpY29u5bGV5byAL+WFs+mXreagkeWIhuexu1xuICAgIGhpdF9vcGVuX2Nsb3NlX2ZvcmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBjYXRlX2NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZV9jZWxsJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwO2k8Y2F0ZV9jZWxsLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYgKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpe1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gJChjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9PT0gXCJpbmxpbmUtYmxvY2tcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5Yaz5a6a5ZOq5Lqb6ZyA6KaB5pi+56S6aWNvblxuICAgIG9wZW5fY2xvc2VfZm9yZGVyX3BsdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgY2F0ZV9jZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVfY2VsbCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDtpPGNhdGVfY2VsbC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIC8vIOafpeeci+esrOS4ieS4quWtkOiKgueCueaYr+WQpuacieWFg+e0oFxuICAgICAgICAgICAgaWYoY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzJdLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgLy8g5pi+56S65peB6L6555qEaWNvblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDkuI3mmL7npLrml4HovrnnmoRpY29uXG4gICAgICAgICAgICAgICAgY2F0ZV9jZWxsW2ldLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgLy8g5p+l55yL5pu05aSa6aG16Z2i77yM5LyY5YyW5Y2a5a6iL+maj+eslOaYvuekulxuICAgIHJlYWRtb3JlX2Jsb2dfZXNzYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FyY2hpdmVzL1wiKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgICAgLy8g5Y675o6J56ys5LiA5Liq77yf5a2X56ymXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gbG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKTtcbiAgICAgICAgICAgIC8vIOagueaNrj3lj7fliJLliIblj4LmlbBcbiAgICAgICAgICAgIGxldCBhcnIgPSBwYXJhbXMuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIC8vIOiOt+WPlnBhZ2VfdHlwZeWPguaVsFxuICAgICAgICAgICAgbGV0IHBhZ2VfdHlwZSA9IGFyclsxXTtcbiAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcmNoaXZlX2FydGljbGVfbGlzdCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgdSA9IDA7dTx1bC5sZW5ndGg7dSsrKSB7XG4gICAgICAgICAgICAgICAgLy8g5a+55q+P5LiA5LiqbGnov5vooYzliKTmlq3vvIzlpoLmnpzkuI3mmK/lj4LmlbDnmoTlgLzvvIzlsLHov5vooYzpmpDol49cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpPHVsW3VdLmNoaWxkcmVuLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdWxbdV0uY2hpbGRyZW5baV0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gJ2RzYWwnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gJ2Jsb2cnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gcGFnZV90eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bFt1XS5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbuOAkOaWh+eroOiuv+mXrumHj+aOkuWQjeOAkVxuICAgIOaWh+eroOmYheivu+mHj+WcqOWNleS4quaWh+eroOS4reWPr+S7peaYvuekuuS9huaYr+S4jeiDveaOkuWQje+8jOaOkuWQjeaAjuS5iOWunueOsOWRou+8n1xuICAgIOaWueahiDHvvJrkvb/nlKh2YWxpbmVcbiAgICDmlrnmoYgy77ya5Zyo5pyN5Yqh5Zmo5LiK6L+b6KGM5YWo56uZ55qE5paH56ug6K6/6Zeu77yM5o+Q5Y+W5LuW5Lus55qE6K6/6Zeu6YePaWRcbiAgICDmlrnmoYgz77ya5a+5dHdpa29v5LqR5Ye95pWw6L+b6KGM5Luj56CB5pu05pS577yM57G75Ly86K6/6Zeu6YePYXBpXG4gXG7jgJDor4TorrrliIfmjaLmjInpkq7jgJFcbiAgICDliIfmjaJ1dHRlcmFuY2Vz6K+E6K665ZCO77yM6aG16Z2i5Lya5Yi35paw5LiA5LiL54S25ZCO5Y+I5Zue5Yiw6buY6K6k6K+E6K6657O757uf5LqG77yM6L+Z5Liq5Y+v5Lul5LyY5YyWXG5cbuOAkOacgOaWsOivhOiuuuOAkVxuICAgIOacgOaWsOivhOiuuue7hOS7tu+8jOWmguaenGJsb2fpobXpnaLnlKjkuobvvIzpgqPkuYjov5nkuKrnu4Tku7blsLHkuI3og73mlL7lnKjnp7vliqjnq6/kvqfovrnmoI/kuobvvIxcbiAgICDlkIzkuIDkuKppZOS4jeiDveWkmuasoeeUqOeahOe8mOaVheWQl++8n1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG5cbi8vIOWvvOWHuuS4uuS4gOS4quWvueixoVxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdvX2NvbW1lbnRzKCk7XG4gICAgdGhpcy5jb21tZW50c19jb3VudCgpO1xuICAgIHRoaXMubmV3X2NvbW1lbnRzKCk7XG4gICAgdGhpcy5zd2l0Y2hfY29tbWVudCgpO1xuICB9LFxuICAvLyDmmK/lkKbliY3lvoDor4TorrrljLpcbiAgZ29fY29tbWVudHM6IGZ1bmN0aW9uKCl7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb19jb21tZW50cycpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH0sXG4gIC8vIOaWh+eroOivhOiuuuaVsFxuICBjb21tZW50c19jb3VudDogZnVuY3Rpb24oKSB7XG4gICAgLy8g5Yik5pat6aG16Z2i5piv5ZCm5pyJ6K+E6K665Yy6aWTlkozlvJXnlKjor4TorrrmlbDnmoRpZFxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMnKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJykpIHtcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJyk7XG4gICAgICAvLyBCT03ojrflj5bpobXpnaJ1cmznmoRwYXRobmFtZei3r+W+hFxuICAgICAgdmFyIHR3aWtvb19jb21tZW50c191cmwgPSBbbG9jYXRpb24ucGF0aG5hbWVdO1xuXG4gICAgICB0d2lrb28uZ2V0Q29tbWVudHNDb3VudCh7XG4gICAgICAgIGVudklkOiAnd2Vic2l0ZS13aWtvby00ZzQ2azhkbzk4ODY3NTQyJywgLy8g546v5aKDIElEXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICB1cmxzOiB0d2lrb29fY29tbWVudHNfdXJsLC8vIOS4jeWMheWQq+WNj+iuruOAgeWfn+WQjeOAgeWPguaVsOeahOaWh+eroOi3r+W+hOWIl+ihqO+8jOW/heS8oOWPguaVsFxuICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlIC8vIOivhOiuuuaVsOaYr+WQpuWMheaLrOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgLy8g5bCG6K+E6K665pWw5YaZ5YWl5YW25LitXG4gICAgICAgIHR3aWtvb19jb21tZW50cy5pbm5lclRleHQgPSByZXNbMF0uY291bnQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIC8vIOi/lOWbnuekuuS+izogW1xuICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTAvcG9zdC0xLmh0bWwnLCBjb3VudDogMTAgfSxcbiAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzExL3Bvc3QtMi5odG1sJywgY291bnQ6IDAgfSxcbiAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEyL3Bvc3QtMy5odG1sJywgY291bnQ6IDIwIH1cbiAgICAgICAgLy8gXVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAvLyDlj5HnlJ/plJnor69cbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyDmnIDmlrDor4TorrpcbiAgbmV3X2NvbW1lbnRzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaG90X2FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdF9hcnRpY2xlc19pdGVtJyk7XG4gICAgdmFyIHBhZ2Vfc2l6ZSA9IDg7XG4gICAgdHdpa29vLmdldFJlY2VudENvbW1lbnRzKHtcbiAgICAgICAgZW52SWQ6ICd3ZWJzaXRlLXdpa29vLTRnNDZrOGRvOTg4Njc1NDInLCAvLyDnjq/looMgSURcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlX3NpemUsIC8vIOiOt+WPluWkmuWwkeadoe+8jOm7mOiupO+8mjEw77yM5pyA5aSn77yaMTAwXG4gICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UgLy8g5piv5ZCm5YyF5ous5pyA5paw5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdfY29tbWVudHNfbG9kaW5nJyk7XG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudCA9IG5ld19jb21tZW50c19sb2RpbmcucGFyZW50RWxlbWVudDtcbiAgICAgICAgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQucmVtb3ZlQ2hpbGQobmV3X2NvbW1lbnRzX2xvZGluZyk7XG4gICAgICAgIC8vIOaPkuWFpeivhOiuulxuICAgICAgICBmb3IgKHZhciBpID0gMDtpPHBhZ2Vfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKHJlc1tpXS5jb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2NvbnRlbnQgPSByZXNbaV0uY29tbWVudDtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfbmljayA9IHJlc1tpXS5uaWNrO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c191cmwgPSByZXNbaV0udXJsO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19hdmF0YXIgPSByZXNbaV0uYXZhdGFyO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c190aW1lID0gcmVzW2ldLnJlbGF0aXZlVGltZTtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfaWQgPSAnIycgKyByZXNbaV0uaWQ7XG4gICAgXG4gICAgICAgICAgICB2YXIgaG90X2FydGljbGVzX2NoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlc19jaGlsZC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIml0ZW1fdXBcIj48aW1nIHNyYz1cIicgKyBuZXdfY29tbWVudHNfYXZhdGFyICsgJ1wiIGNsYXNzPVwiYXZhdGFyXCI+PGRpdiBjbGFzcz1cIm5pY2tfbmFtZVwiPjxzcGFuIGNsYXNzPVwibmlja1wiPicgKyBuZXdfY29tbWVudHNfbmljayArICc8L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JyArIG5ld19jb21tZW50c190aW1lICsgJzwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiaXRlbV9kb3duXCI+PGEgaHJlZj1cIicgKyBuZXdfY29tbWVudHNfdXJsICsgbmV3X2NvbW1lbnRzX2lkICsgJ1wiPicgKyBuZXdfY29tbWVudHNfY29udGVudCArICc8L2E+PC9kaXY+JztcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlcy5hcHBlbmQoaG90X2FydGljbGVzX2NoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH0sXG4gIC8vIOWIh+aNouivhOiuulxuICBzd2l0Y2hfY29tbWVudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN3aXRjaF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3dpdGNoX2J0bicpO1xuICAgIHZhciB1dHRlcmFuY2VzX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXR0ZXJhbmNlc19jb21tZW50Jyk7XG4gICAgdmFyIHR3aWtvb19jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50Jyk7XG4gICAgXG4gICAgc3dpdGNoX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBpZih1dHRlcmFuY2VzX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHV0dGVyYW5jZXNfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaWYgKCF1dHRlcmFuY2VzX2NvbW1lbnQuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgICAgIHZhciBzY3JpcHRfdXR0ZXJhbmNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zcmM9XCJodHRwczovL3V0dGVyYW5jLmVzL2NsaWVudC5qc1wiIDtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcInJlcG9cIixcInd6dGxpbmsxMDEzL2NvbW1lbnRcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJpc3N1ZS10ZXJtXCIsXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImxhYmVsXCIsXCLwn5KsY29tbWVudFwiKTtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcInRoZW1lXCIsXCJnaXRodWItbGlnaHRcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJjcm9zc29yaWdpblwiLFwiYW5vbnltb3VzXCIpO1xuICAgICAgICAgICAgdXR0ZXJhbmNlc19jb21tZW50LmFwcGVuZENoaWxkKHNjcmlwdF91dHRlcmFuY2VzKTsgXG4gICAgICAgIH1cbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdXR0ZXJhbmNlc19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIOe8k+aFouaYvuekulxuICAgICAgICDnvJPmhaLlm57liLDpobbpg6hcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiBsZXQgZ29fdG9wX29iamVjdCA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5nb190b3AoKTtcbiAgICAgICAgdGhpcy5jbGlja19nb190b3AoKTtcbiAgICB9LFxuICAgIGdvX3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8g5rua5Yqo5pi+56S6Z29fdG9w5oyJ6ZKuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgLy8g5oyB57ut55uR5ZCs5rua5Yqo54q25oCBXG4gICAgICAgICAgICBnZXRTY3JvbGwoKS50b3AgIT09IDAgPyAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIikgOiAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgY2xpY2tfZ29fdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g54K55Ye75Zue5Yiw6aG26YOoXG4gICAgICAgICQoXCIjZ29fdG9wXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy8gc2Nyb29sVG9w5YW85a655oCn5pa55qGIXG5mdW5jdGlvbiBnZXRTY3JvbGwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0fHwwLFxuICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMFxuICAgIH07XG59XG5cblxuLy8g5aaC5p6c5LiN5YGa6buY6K6k5a+85YWl77yM5bCx5oyJ54Wn5LiL6Z2i5YaZ77yM5LiN6KaBZGVmYXVsdOivjVxuZXhwb3J0IHtcbiAgICBnb190b3Bfb2JqZWN0LCAvL+WvvOWHuuWvueixoVxuICAgIGdldFNjcm9sbCwgLy/lr7zlh7rpgJrnlKjlh73mlbBcbn1cblxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfSxcbiAgICBzZWFyY2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaW5wdXRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1zZWFyY2gtaW5wdXRcIik7XG5cbiAgICAgICAgaWYgKGlucHV0QXJlYSkge1xuICAgICAgICAgICAgaW5wdXRBcmVhLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9ICfpppbmrKHmkJzntKJpbmfCt8K3wrcnO1xuICAgICAgICAgICAgICAgIGdldFNlYXJjaEZpbGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2xpY2sgPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaW5wdXRBcmVhLm9ua2V5ZG93biA9IGZ1bmN0aW9uKCkgeyBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykgcmV0dXJuIGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KSB7XG4gICAgICAgICAgICAvLyBjbGVhciBzZWFyY2ggcmVzdWx0XG4gICAgICAgICAgICB2YXIgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLXNlYXJjaC1jbG9zZVwiKTtcbiAgICAgICAgICAgIGJ0bkNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLnBsYWNlaG9sZGVyID0gJ+ivt+i+k+WFpeWFs+mUruivjSc7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLmZvY3VzKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2YXIgc2VhcmNoRnVuYyA9IGZ1bmN0aW9uKHBhdGgsIHNlYXJjaF9pZCwgY29udGVudF9pZCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdmFyIEJUTiA9IFwiPGRpdiBpZD0nbG9jYWwtc2VhcmNoLWNsb3NlJz7muIXnqbrmkJzntKI8L2Rpdj5cIlxuICAgICAgICAgICAgdmFyICRpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlYXJjaF9pZCk7XG4gICAgICAgICAgICB2YXIgJHJlc3VsdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50X2lkKTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBwYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXN1bWUgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5wbGFjZWhvbGRlciA9ICfovpPlhaXlhbPplK7or43ku6XmkJzntKInO1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciB4bWwgPSB4aHIucmVzcG9uc2VYTUw7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb290ID0geG1sLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3QgPSByb290LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZW50cnlcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aXRsZVwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNvbnRlbnRcIilbMF0uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVybFwiKVswXS5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9ICc8dWwgY2xhc3M9XFxcImFyY2hpdmVcXFwiPic7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5d29yZHMgPSB0aGlzLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9bXFxzXFwtXSsvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZS50cmltKCkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pys5Zyw5pCc57Si5Li75Luj56CBXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5mb3JFYWNoKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRfaW5kZXggPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEudGl0bGUgfHwgZGF0YS50aXRsZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGl0bGUgPSBcIlVudGl0bGVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfdGl0bGUgPSBkYXRhLnRpdGxlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YV90aXRsZSA9IG9yaWdfZGF0YV90aXRsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfY29udGVudCA9IGRhdGEuY29udGVudC50cmltKCkucmVwbGFjZSgvPFtePl0rPi9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YV9jb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YV91cmwgPSBkYXRhLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhfdGl0bGUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhfY29udGVudCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdF9vY2N1ciA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgbWF0Y2ggYXJ0aWxlcyB3aXRoIG5vdCBlbXB0eSBjb250ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhX2NvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfdGl0bGUgPSBkYXRhX3RpdGxlLmluZGV4T2Yoa2V5d29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleF9jb250ZW50ID0gZGF0YV9jb250ZW50LmluZGV4T2Yoa2V5d29yZCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X3RpdGxlIDwgMCAmJiBpbmRleF9jb250ZW50IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X2NvbnRlbnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4X2NvbnRlbnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X29jY3VyID0gaW5kZXhfY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGVudF9pbmRleC5wdXNoKHtpbmRleF9jb250ZW50OmluZGV4X2NvbnRlbnQsIGtleXdvcmRfbGVuOmtleXdvcmRfbGVufSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bGV56S657uT5p6cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzog5b6F5a6M5ZaE77yM5b6F5a6M5ZaEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjxsaT48YSBocmVmPSdcIiArbG9jYXRpb24ucHJvdG9jb2wrXCIvL1wiK2xvY2F0aW9uLmhvc3QrXCIvXCIrIGRhdGFfdXJsICsgXCInIGNsYXNzPSdhcmNoaXZlLXRpdGxlJz5cIiArIG9yaWdfZGF0YV90aXRsZSArIFwiPC9hPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IG9yaWdfZGF0YV9jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3Rfb2NjdXIgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3V0IG91dCAxMDAgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gZmlyc3Rfb2NjdXIgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmQgPSBmaXJzdF9vY2N1ciArIDMwO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5kID4gY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSBjb250ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoX2NvbnRlbnQgPSBjb250ZW50LnN1YnN0cihzdGFydCwgMTAwKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoaWdobGlnaHQgYWxsIGtleXdvcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnUyA9IG5ldyBSZWdFeHAoa2V5d29yZCwgXCJnaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaF9jb250ZW50ID0gbWF0Y2hfY29udGVudC5yZXBsYWNlKHJlZ1MsIFwiPGVtIGNsYXNzPVxcXCJzZWFyY2gta2V5d29yZFxcXCI+XCIgKyBrZXl3b3JkICsgXCI8L2VtPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjxwIGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIiArIG1hdGNoX2NvbnRlbnQgKyBcIi4uLjwvcD5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjwvbGk+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8L3VsPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCc8bGk+JykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gQlROICsgXCI8ZGl2IGNsYXNzPSdsb2NhbC1zZWFyY2gtZW1wdHknPuayoeacieaJvuWIsOS9oOaJgOimgeaQnOe0oueahOWGheWuueKApuKApjwvZGl2PlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBCVE4gKyBzdHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJTZWFyY2goJHJlc3VsdENvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB2YXIgZ2V0U2VhcmNoRmlsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHBhdGggPSBcIi9zZWFyY2gueG1sXCI7XG4gICAgICAgICAgICBzZWFyY2hGdW5jKHBhdGgsICdsb2NhbC1zZWFyY2gtaW5wdXQnLCAnbG9jYWwtc2VhcmNoLXJlc3VsdCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8g5YWo5bGA5oyJ6ZKu6K6+572uanPmmK/lkKblsZXnpLrmkJzntKLmoYZcbiAgICAgICAgdmFyIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hfYnRuJyk7XG4gICAgICAgIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhbC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB2YXIgc2VhcmNoX2Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9jbG9zZScpO1xuICAgICAgICBzZWFyY2hfY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxufVxuXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgbmVlZFNoYXJlQnV0dG9uXG4gIC0gVmVyc2lvbiAxLjAuMFxuICAtIENvcHlyaWdodCAyMDE1IER6bWl0cnkgVmFzaWxldXNraVxuXHQtIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVClcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2hhcmUoKTtcbiAgICB9LFxuICAgIHNoYXJlOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIGZpbmQgY2xvc2VzdFxuICAgIGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbSwgcGFyZW50KSB7XG4gICAgICBpZiAodHlwZW9mKHBhcmVudCkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoZXNTZWxlY3RvciA9IGVsZW0ubWF0Y2hlcyB8fCBlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yO1xuICBcbiAgICAgICAgICAgICAgaWYgKCEhbWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNTZWxlY3Rvci5iaW5kKGVsZW0pKHBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICBpZiAoZWxlbSA9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIHNoYXJlIGJ1dHRvbiBjbGFzc1xuICAgICAgd2luZG93Lm5lZWRTaGFyZUJ1dHRvbiA9IGZ1bmN0aW9uKGVsZW0sIG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBjcmVhdGUgZWxlbWVudCByZWZlcmVuY2VcbiAgICAgICAgICB2YXIgcm9vdCA9IHRoaXM7XG4gICAgICAgICAgcm9vdC5lbGVtID0gZWxlbSB8fCAnbmVlZC1zaGFyZS1idXR0b24nO1xuICBcbiAgICAgICAgICAvKiBIZWxwZXJzXG4gICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIFxuICAgICAgLy8gZ2V0IHRpdGxlIGZyb20gaHRtbFxuICAgICAgcm9vdC5nZXRUaXRsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgIC8vIGNoZWNrIHF1ZXJ5U2VsZWN0b3IgZXhpc3RhbmNlIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjp0aXRsZVwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5pbm5lclRleHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQudGl0bGU7XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBnZXQgaW1hZ2UgZnJvbSBodG1sXG4gICAgICAgIHJvb3QuZ2V0SW1hZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmltYWdlXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBnZXQgZGVzY3JpcHRpb24gZnJvbSBodG1sXG4gICAgICAgIHJvb3QuZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKS5uYW1lZEl0ZW0oJ2Rlc2NyaXB0aW9uJykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gc2hhcmUgdXJscyBmb3IgYWxsIG5ldHdvcmtzXG4gICAgICAgIHJvb3Quc2hhcmUgPSB7XG4gICAgICAgICAgICAnd2VpYm8nOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3YudC5zaW5hLmNvbS5jbi9zaGFyZS9zaGFyZS5waHA/dGl0bGU9J1xuICAgICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgICArIFwiJnVybD1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgICArIFwiJnBpYz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3dlY2hhdCc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIGltZ1NyYyA9ICdodHRwczovL2FwaS5xcnNlcnZlci5jb20vdjEvY3JlYXRlLXFyLWNvZGUvP3NpemU9MTUweDE1MCZkYXRhPScrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICB2YXIgZHJvcGRvd25FbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bicpO1xuICAgICAgICAgICAgICB2YXIgaW1nID0gZHJvcGRvd25FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJylbMF07XG4gICAgICAgICAgICAgIHZhciBsb2FkZXIgPSBkcm9wZG93bkVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25lZWQtc2hhcmUtbG9hZGVyJylbMF07XG4gIFxuICAgICAgICAgICAgICAgIGlmIChpbWcpIHtcbiAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgICB9IGVsc2UgaWYobG9hZGVyKSB7XG4gICAgICAgICAgICBsb2FkZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbG9hZGVyLmNsYXNzTmFtZSA9ICduZWVkLXNoYXJlLWxvYWRlcic7XG4gICAgICAgICAgICBsb2FkZXIuaW5uZXJUZXh0ID0gJ2xvYWRpbmcuLi4nO1xuICAgICAgICAgICAgbG9hZGVyLnRpdGxlID0gJ2xvYWRpbmcgcXJjb2RlLi4uJztcbiAgXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gaW1nU3JjO1xuICAgICAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0NyZWF0ZSBxcmNvZGUgZmFpbGVkISc7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwnbmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAobG9hZGVyLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChsb2FkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgJ2RvdWJhbic6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cHM6Ly93d3cuZG91YmFuLmNvbS9zaGFyZS9zZXJ2aWNlP25hbWU9J1xuICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICsgXCImaHJlZj1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgKyBcIiZpbWFnZT1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3Fxem9uZSc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3Nucy5xem9uZS5xcS5jb20vY2dpLWJpbi9xenNoYXJlL2NnaV9xenNoYXJlX29uZWtleT90aXRsZT0nXG4gICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgKyBcIiZ1cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICsgXCImcGljcz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKVxuICAgICAgICAgICAgICArIFwiJmRlc2M9XCIrIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAncmVucmVuJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vd2lkZ2V0LnJlbnJlbi5jb20vZGlhbG9nL3NoYXJlP3RpdGxlPSdcbiAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICArIFwiJnJlc291cmNlVXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICArIFwiJnBpYz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKVxuICAgICAgICAgICAgICArIFwiJmRlc2NyaXB0aW9uPVwiKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gIFxuICAgICAgICAgICAgJ21haWx0bycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICdtYWlsdG86P3N1YmplY3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICsgJyZib2R5PVRob3VnaHQgeW91IG1pZ2h0IGVuam95IHJlYWRpbmcgdGhpczogJyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKSArICcgLSAnICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd0d2l0dGVyJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSc7XG4gICAgICAgICAgICAgICAgdXJsICs9IGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICsgXCImdXJsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BpbnRlcmVzdCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwaW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYm9va21hcmtsZXQvP2lzX3ZpZGVvPWZhbHNlJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZtZWRpYT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZhY2Vib29rJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5mYWNlYm9vay5jb20vc2hhcmUucGhwPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2dvb2dsZXBsdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGx1cy5nb29nbGUuY29tL3NoYXJlPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdyZWRkaXQnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LnJlZGRpdC5jb20vc3VibWl0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZGVsaWNpb3VzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ2RlbC5pY2lvLnVzL3Bvc3Q/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZub3Rlcz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAndGFwaXR1cmUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3RhcGl0dXJlLmNvbS9ib29rbWFya2xldC9pbWFnZT8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2ltZ19zcmM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3RpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgJ3N0dW1ibGV1cG9uJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnbGlua2VkaW4nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmc291cmNlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnNvdXJjZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAnc2xhc2hkb3QnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3NsYXNoZG90Lm9yZy9ib29rbWFyay5wbD8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vICd0ZWNobm9yYXRpJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0ZWNobm9yYXRpLmNvbS9mYXZlcz8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2FkZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdwb3N0ZXJvdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncG9zdGVyb3VzLmNvbS9zaGFyZT8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAnbGlua3RvPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndHVtYmxyJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy50dW1ibHIuY29tL3NoYXJlP3Y9Myc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ2dvb2dsZWJvb2ttYXJrcycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lmdvb2dsZS5jb20vYm9va21hcmtzL21hcms/b3A9ZWRpdCc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmJrbWs9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZhbm5vdGF0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gJ25ld3N2aW5lJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cubmV3c3ZpbmUuY29tL190b29scy9zZWVkJnNhdmU/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICd1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmg9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAncGluZ2ZtJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwaW5nLmZtL3JlZi8/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdsaW5rPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmYm9keT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdldmVybm90ZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZXZlcm5vdGUuY29tL2NsaXAuYWN0aW9uPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZnJpZW5kZmVlZCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZnJpZW5kZmVlZC5jb20vc2hhcmU/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd2a29udGFrdGUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndmtvbnRha3RlLnJ1L3NoYXJlLnBocD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICB1cmwgKz0gJyZpbWFnZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgdXJsICs9ICcmbm9wYXJzZT10cnVlJztcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdvZG5va2xhc3NuaWtpJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5vZG5va2xhc3NuaWtpLnJ1L2RrP3N0LmNtZD1hZGRTaGFyZSZzdC5zPTEnO1xuICAgICAgICAgIHVybCArPSAnJnN0LmNvbW1lbnRzPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICB1cmwgKz0gJyZzdC5fc3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ21haWxydScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnY29ubmVjdC5tYWlsLnJ1L3NoYXJlPyc7XG4gICAgICAgIC8vICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgLy8gICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyAgIHVybCArPSAnJmltYWdldXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBvcGVuIHNoYXJlIGxpbmsgaW4gYSBwb3B1cFxuICAgICAgICByb290LnBvcHVwID0gZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHZhciBsZWZ0LCB0b3A7IFxuICBcbiAgICAgICAgdmFyIHBvcHVwV2lkdGggPSA2MDAsXG4gICAgICAgICAgICBwb3B1cEhlaWdodCA9IDUwMDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBjYWN1bGF0ZSBicm93c2VyIHdpbmRvdyB3aWR0aFxuICAgICAgICAvLyBpZiB3aW5kb3cgd2lkdGggaXMgdG9vIG5hcnJvdywgdXNlIHNjcmVlbiB3aWR0aDtcbiAgICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6IHNjcmVlbi53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogc2NyZWVuLmhlaWdodDtcbiAgICAgICAgaWYgKHdpZHRoIDwgNjAwICYmIGhlaWdodCA8IDUwMCkge1xuICAgICAgICAgIGxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAocG9wdXBXaWR0aCAvIDIpO1xuICAgICAgICAgIHRvcCA9IChzY3JlZW4uaGVpZ2h0IC8gMikgLSAocG9wdXBIZWlnaHQgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzZXQgbGVmdCBhbmQgdG9wIHBvc2l0aW9uXG4gICAgICAgICAgICAgIHZhciBkdWFsU2NyZWVuTGVmdCA9IHdpbmRvdy5zY3JlZW5MZWZ0ICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogc2NyZWVuLmxlZnQsXG4gICAgICAgICAgICBkdWFsU2NyZWVuVG9wID0gd2luZG93LnNjcmVlblRvcCAhPSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogc2NyZWVuLnRvcDtcbiAgICAgICAgICAvLyBjYWxjdWxhdGUgdG9wIGFuZCBsZWZ0IHBvc2l0aW9uXG4gICAgICAgICAgbGVmdCA9ICgod2lkdGggLyAyKSAtIChwb3B1cFdpZHRoIC8gMikpICsgZHVhbFNjcmVlbkxlZnQ7XG4gICAgICAgICAgdG9wID0gKChoZWlnaHQgLyAyKSAtIChwb3B1cEhlaWdodCAvIDIpKSArIGR1YWxTY3JlZW5Ub3A7XG4gICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIHZhciBzaGFyZVdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwndGFyZ2V0V2luZG93JywndG9vbGJhcj1ubyxsb2NhdGlvbj1ubyxzdGF0dXM9bm8sbWVudWJhcj1ubyxzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHdpZHRoPScgKyBwb3B1cFdpZHRoICsgJywgaGVpZ2h0PScgKyBwb3B1cEhlaWdodCArICcsIHRvcD0nICsgdG9wICsgJywgbGVmdD0nICsgbGVmdCk7XG4gICAgICAgICAgICAvLyBQdXRzIGZvY3VzIG9uIHRoZSBuZXdXaW5kb3dcbiAgICAgICAgICBpZiAod2luZG93LmZvY3VzKSB7XG4gICAgICAgICAgICAgIHNoYXJlV2luZG93LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgICAvKiBTZXQgb3B0aW9uc1xuICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBcbiAgICAgICAgICAvLyBjcmVhdGUgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgICAgcm9vdC5vcHRpb25zID0ge1xuICAgICAgICAgICAgICBpY29uU3R5bGU6ICdkZWZhdWx0JywgLy8gZGVmYXVsdCBvciBib3hcbiAgICAgICAgICAgICAgYm94Rm9ybTogJ2hvcml6b250YWwnLCAvLyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tQ2VudGVyJywgLy8gdG9wIC8gbWlkZGxlIC8gYm90dG9tICsgTGVmdCAvIENlbnRlciAvIFJpZ2h0XG4gICAgICAgICAgICAgIHByb3RvY29sOiBbJ2h0dHAnLCAnaHR0cHMnXS5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc6JylbMF0pID09PSAtMSA/ICdodHRwczovLycgOiAnLy8nLFxuICAgICAgICAgICAgICBuZXR3b3JrczogJ1R3aXR0ZXIsRmFjZWJvb2ssUmVkZGl0LExpbmtlZGluLFR1bWJscixQaW50ZXJlc3QsV2VpYm8sV2VjaGF0LERvdWJhbixRUVpvbmUsTWFpbHRvJyxcbiAgICAgICAgICAgICAgaWNvbnM6IFsnZmEgZmEtdHdpdHRlcicsJ2ZhIGZhLWZhY2Vib29rJywnZmEgZmEtcmVkZGl0LWFsaWVuJywnZmEgZmEtbGlua2VkaW4nLCdmYSBmYS10dW1ibHInLCdmYSBmYS1waW50ZXJlc3QnLCdmYSBmYS13ZWlibycsJ2ZhIGZhLXdlaXhpbicsJzknLCdmYSBmYS1xcScsJ2ZhIGZhLWVudmVsb3BlLW8nXVxuICAgICAgICAgIH07XG4gIFxuICAgICAgLy8gaW50ZWdyYXRlIGN1c3RvbSBvcHRpb25zXG4gICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgcm9vdC5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnZlcnQgbmV0d29ya3Mgc3RyaW5nIGludG8gYXJyYXlcbiAgICAgIHJvb3Qub3B0aW9ucy5uZXR3b3JrcyA9IHJvb3Qub3B0aW9ucy5uZXR3b3Jrcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gIFxuICAgICAgZnVuY3Rpb24gZ2V0T3B0aW9ucyhlbCkge1xuICAgICAgICAgIC8vIGludGVncmF0ZSBkYXRhIGF0dHJpYnV0ZSBvcHRpb25zXG4gICAgICAgICAgdmFyIHJldCA9IHt9O1xuICAgICAgICAgIGZvciAodmFyIGkgaW4gcm9vdC5vcHRpb25zKSB7XG4gICAgICAgICAgICByZXRbaV0gPSByb290Lm9wdGlvbnNbaV07XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAvLyB0aGVzZSBhdHRycyBtdXN0IGdldCBkeW5hbWljYWxseS5cbiAgICAgICAgICByZXQudXJsID0gcm9vdC5vcHRpb25zLnVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICByZXQudGl0bGUgPSByb290Lm9wdGlvbnMudGl0bGUgfHwgcm9vdC5nZXRUaXRsZSgpO1xuICAgICAgICAgIHJldC5pbWFnZSA9IHJvb3Qub3B0aW9ucy5pbWFnZSB8fCByb290LmdldEltYWdlKCk7XG4gICAgICAgICAgcmV0LmRlc2NyaXB0aW9uID0gcm9vdC5vcHRpb25zLmRlc2NyaXB0aW9uIHx8IHJvb3QuZ2V0RGVzY3JpcHRpb24oKTtcbiAgXG4gICAgICAgICAgZm9yICh2YXIgb3B0aW9uIGluIGVsLmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgLy8gcmVwbGFjZSBvbmx5ICdzaGFyZS0nIHByZWZpeGVkIGRhdGEtYXR0cmlidXRlc1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5tYXRjaCgvc2hhcmUvKSkge1xuICAgICAgICAgICAgICB2YXIgbmV3X29wdGlvbiA9IG9wdGlvbi5yZXBsYWNlKC9zaGFyZS8sICcnKTtcbiAgICAgICAgICAgICAgaWYgKCFuZXdfb3B0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmV3X29wdGlvbiA9IG5ld19vcHRpb24uY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuZXdfb3B0aW9uLnNsaWNlKDEpO1xuICAgICAgICAgICAgICB2YXIgdmFsID0gZWwuZGF0YXNldFtvcHRpb25dO1xuICAgICAgICAgICAgICBpZiAobmV3X29wdGlvbiA9PT0gJ25ldHdvcmtzJykge1xuICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdfb3B0aW9uID09PSAndXJsJyAmJiB2YWwgJiYgdmFsWzBdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGZpeCByZWxhdGl2ZSB1cmwgcHJvYmxlbS5cbiAgICAgICAgICAgICAgICAgIHZhbCA9IGxvY2F0aW9uLm9yaWdpbiArIHZhbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXRbbmV3X29wdGlvbl0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gIFxuICAgICAgZnVuY3Rpb24gY3JlYXRlRHJvcGRvd24oZWwpIHtcbiAgICAgICAgICAvLyBjcmVhdGUgZHJvcGRvd25cbiAgICAgICAgICB2YXIgZHJvcGRvd25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSA9ICduZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bic7XG4gICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bicpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICBcbiAgICAgICAgICAvLyBzZXQgZHJvcGRvd24gcm93IGxlbmd0aFxuICAgICAgICAgIGlmIChteW9wdGlvbnMuaWNvblN0eWxlID09ICdib3gnICYmIG15b3B0aW9ucy5ib3hGb3JtID09ICdob3Jpem9udGFsJylcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3gtaG9yaXpvbnRhbCc7XG4gICAgICAgICAgZWxzZSBpZiAobXlvcHRpb25zLmljb25TdHlsZSA9PSAnYm94JyAmJiBteW9wdGlvbnMuYm94Rm9ybSA9PSAndmVydGljYWwnKVxuICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJveC12ZXJ0aWNhbCc7XG4gIFxuICAgICAgICAgIC8vIHNldCBkcm9wZG93biBwb3NpdGlvbiBcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKG15b3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgICAgICAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1sZWZ0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtcmlnaHQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ3RvcENlbnRlcic6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdtaWRkbGVMZWZ0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLW1pZGRsZS1sZWZ0JztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpblRvcCA9IC0gZHJvcGRvd25FbC5vZmZzZXRIZWlnaHQgLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdtaWRkbGVSaWdodCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1taWRkbGUtcmlnaHQnO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luVG9wID0gLSBkcm9wZG93bkVsLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWxlZnQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1yaWdodCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tQ2VudGVyJzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1jZW50ZXInO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC0gZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tY2VudGVyJztcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtIGRyb3Bkb3duRWwub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwxKTtcbiAgXG4gIFxuICAgICAgICAgIC8vIGZpbGwgZnJvcGRvd24gd2l0aCBidXR0b25zXG4gICAgICAgICAgdmFyIGljb25DbGFzcyA9IG15b3B0aW9ucy5pY29uU3R5bGUgPT0gJ2RlZmF1bHQnID8gJ25lZWQtc2hhcmUtYnV0dG9uX2xpbmsgbmVlZC1zaGFyZS1idXR0b25fJyA6ICduZWVkLXNoYXJlLWJ1dHRvbl9saW5rLScgKyBteW9wdGlvbnMuaWNvblN0eWxlICsgJyBuZWVkLXNoYXJlLWJ1dHRvbl9saW5rIG5lZWQtc2hhcmUtYnV0dG9uXyc7XG4gICAgICAgICAgbGV0IGZsYWcgPSAwO1xuICAgICAgICAgIGZvciAodmFyIG5ldHdvcmsgaW4gbXlvcHRpb25zLm5ldHdvcmtzKSB7XG4gICAgICAgICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgbmV0d29yayA9IG15b3B0aW9ucy5uZXR3b3Jrc1tuZXR3b3JrXTtcbiAgICAgICAgICAgICAgbGluay5jbGFzc05hbWUgPSBpY29uQ2xhc3MgKyBuZXR3b3JrO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteW9wdGlvbnMuaWNvbnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgbGluay5jbGFzc05hbWUgKz0gJyAnK215b3B0aW9ucy5pY29uc1tmbGFnXTtcbiAgICAgICAgICAgICAgbGluay5kYXRhc2V0Lm5ldHdvcmsgPSBuZXR3b3JrO1xuICAgICAgICAgICAgICBsaW5rLnRpdGxlID0gbmV0d29yaztcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgICAgICAgZmxhZysrO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgZHJvcGRvd25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgIGlmIChjbG9zZXN0KGV2ZW50LnRhcmdldCwgJy5uZWVkLXNoYXJlLWJ1dHRvbl9saW5rJykpIHtcbiAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIFxuICAgICAgICAgICAgICAgICByb290LnNoYXJlW2V2ZW50LnRhcmdldC5kYXRhc2V0Lm5ldHdvcmtdKGVsKTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZHJvcGRvd25FbCk7XG4gICAgICB9XG4gIFxuICAgICAgdmFyIHRhcmdldEVsID0gdHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKSA6IGVsZW07XG4gICAgICAgaWYgKHRhcmdldEVsICYmIHRhcmdldEVsLmNsYXNzTGlzdC5jb250YWlucygnbmVlZC1zaGFyZS1wYW5lbCcpKSB7XG4gICAgICAgIGNyZWF0ZURyb3Bkb3duKHRhcmdldEVsKTtcbiAgICAgICAgLy8gdGFyZ2V0RWwuY2xhc3NMaXN0LmFkZCgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gICAgICB9IGVsc2UgXG4gICAgICAgIC8vIGNsb3NlIG9uIGNsaWNrIG91dHNpZGVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHZhciBvcGVuZWRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgXG4gICAgICAgICAgaWYgKCFjbG9zZXN0KGV2ZW50LnRhcmdldCwgJy5uZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKSkge1xuICAgICAgICAgICAgaWYgKG9wZW5lZEVsKSB7XG4gICAgICAgICAgICAgICAgb3BlbmVkRWwuY2xhc3NMaXN0LnJlbW92ZSgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gIFxuICAgICAgICAgICAgICAgIC8vIGhpZGUgd2VjaGF0IGNvZGUgaW1hZ2Ugd2hlbiBjbG9zZSB0aGUgZHJvcGRvd24uXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5lZEVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkRWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCByb290LmVsZW0pO1xuICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURyb3Bkb3duKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XG4gIFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICBcbiAgICB9O1xuICBcbiAgICBuZXcgbmVlZFNoYXJlQnV0dG9uKCcubmVlZC1zaGFyZS1idXR0b24nKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50b2NfYnRuKCk7XG4gICAgfSxcbiAgICB0b2NfYnRuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHRvY19jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9jX2NvbnRhaW5lcicpO1xuICAgICAgICBsZXQgdG9jX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2NfYnRuJyk7XG4gICAgICAgICQodG9jX2J0bikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICh0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJyl7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5cblxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLndlYl9pbmZvX3J1bnRpbWUoKTtcbiAgICB9LFxuICAgIC8vIFRPRE86ICEhIeaIkeedgOWunuS4jeefpemBk+i/meaYr+S4quS7gOS5iOenmFxuICAgIHdlYl9pbmZvX3J1bnRpbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBCaXJ0aERheSA9IG5ldyBEYXRlKG5ldyBEYXRlKCcyMDIwLzAxLzA0JykpO1xuICAgICAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGxldCB0aW1lb2xkID0gKHRvZGF5LmdldFRpbWUoKSAtIEJpcnRoRGF5LmdldFRpbWUoKSk7XG4gICAgICAgICAgICBsZXQgZGF5c29sZCA9IE1hdGguZmxvb3IodGltZW9sZCAvICgyNCAqIDYwICogNjAgKiAxMDAwKSk7XG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYmluZm9fcnVudGltZV9jb3VudF8xXCIpLmlubmVyVGV4dCA9IGRheXNvbGQgKyAnIOWkqSc7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXlzb2xkKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2ViaW5mb19ydW50aW1lX2NvdW50XzFcIikpO1xuICAgIH0sXG59XG5cbiJdfQ==
