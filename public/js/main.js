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

var four_container = '80%';
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


  _web_info["default"].init();
});

},{"./common/layout.js":1,"./part/comments.js":3,"./part/go_top.js":4,"./part/search.js":5,"./part/toc.js":6,"./part/web_info.js":7}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvc2VhcmNoLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC90b2MuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L3dlYl9pbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxhQUFELENBQWxCO0FBQ0EsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGNBQUQsQ0FBbkIsQyxDQUVBOztBQUNBLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxVQUFELENBQWY7QUFDQSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsV0FBRCxDQUFoQjtBQUNBLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxZQUFELENBQWpCO0FBQ0EsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQUQsQ0FBakIsQyxDQUVBOztBQUNBLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxTQUFELENBQWQ7QUFDQSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFsQixDLENBRUE7O0FBQ0EsSUFBSSxh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TSxNQUVBO0FBQ0gsUUFBQSxhQUFhLENBQUMsS0FBZCxDQUFvQixPQUFwQixHQUE4QixPQUE5QjtBQUNIO0FBQ0osS0FSRDtBQVNIO0FBaEJVLEM7Ozs7Ozs7Ozs7ZUNBQTtBQUNYLEVBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2QsU0FBSyxnQkFBTDtBQUNILEdBSFU7QUFJWDtBQUNBLEVBQUEsZ0JBQWdCLEVBQUUsNEJBQVk7QUFDdEIsUUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFKLENBQVMsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUFULENBQWY7QUFDQSxRQUFJLEtBQUssR0FBRyxJQUFJLElBQUosRUFBWjtBQUNBLFFBQUksT0FBTyxHQUFJLEtBQUssQ0FBQyxPQUFOLEtBQWtCLFFBQVEsQ0FBQyxPQUFULEVBQWpDO0FBQ0EsUUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFPLElBQUksS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLElBQW5CLENBQWxCLENBQWQsQ0FKc0IsQ0FLdEI7QUFDQTtBQUNBO0FBQ1A7QUFiVSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyogIFxuICAgIFRPRE86IFxuICAgICAgICDog73lnKjmoLnnm67lvZXorr7nva7pu5jorqTnirbmgIHmmK/lh6DmoI/nmoRcbiAgICAgICAg6IO95aSf6K6p5L2/55So6ICF5Y+W5raI6L+Z56eN4oCc6K6w5b+G4oCdXG4qKi9cblxuXG4vLyBQQ++8mmhlYWRlcuS4iueahOW3puWPs+aMiemSruWMuuWfn1xubGV0IGFycm93X2xlZnQgPSAkKCcjYXJyb3dfbGVmdCcpO1xubGV0IGFycm93X3JpZ2h0ID0gJCgnI2Fycm93X3JpZ2h0Jyk7XG5cbi8vIOW4g+WxgO+8mueJiOW/g+OAgeW3puS4reWPs+aOkueJiFxubGV0IGN0X2xlZnQgPSAkKCcuY3RfbGVmdCcpO1xubGV0IGN0X3JpZ2h0ID0gJCgnLmN0X3JpZ2h0Jyk7XG5sZXQgY3RfY2VudGVyID0gJCgnLmN0X2NlbnRlcicpO1xubGV0IGNvbnRhaW5lciA9ICQoJy5jb250YWluZXInKTtcblxuLy8gUEMvYXBw77ya5YiH5o2iaGVhZGVyXG5sZXQgaGVhZGVyID0gJCgnLmhlYWRlcicpO1xubGV0IGhlYWRlcl9hcHAgPSAkKCcuaGVhZGVyX2FwcCcpO1xuXG4vLyBhcHDvvJpoZWFkZXLkuIrnmoTlt6blj7PmjInpkq7ljLrln59cbmxldCBidG5fYXBwX3NpZGVyID0gJCgnI2J0bl9hcHBfc2lkZXInKTtcbmxldCBidG5fYXBwX3JpZ2h0ID0gJCgnI2J0bl9hcHBfcmlnaHQnKTtcblxuLy8gYXBw77ya54K55Ye7aGVhZGVyX2FwcOaXtuWAmeW8ueWHuuadpeeahOaKveWxiVxubGV0IGFwcF9zaWRlX2dsYXNzID0gJCgnI2FwcF9zaWRlX2dsYXNzJyk7XG5sZXQgYXBwX3NpZGVfY29udGVudCA9ICQoJyNhcHBfc2lkZV9jb250ZW50Jyk7XG5cbi8vIDEu5bem5Lit6YWN572uXG5sZXQgb25lX2NvbnRhaW5lciA9ICc4MCUnIDtcbmxldCBvbmVfY3RfY2VudGVyX3dpZHRoID0gJzc1JSc7XG5sZXQgb25lX2N0X2xlZnRfd2lkdGggPSAnMjUlJztcbi8vIDIuIOS4reWPs+mFjee9rlxubGV0IHR3b19jb250YWluZXIgPSAnODAlJyA7XG5sZXQgdHdvX2N0X2NlbnRlcl93aWR0aCA9ICc3NSUnO1xubGV0IHR3b19jdF9yaWdodF93aWR0aCA9ICcyNSUnO1xuLy8gMy4g5bem5Lit5Y+z6YWN572uXG5sZXQgdGhyZWVfY29udGFpbmVyID0gJzk1JScgO1xubGV0IHRocmVlX2N0X2NlbnRlcl93aWR0aCA9ICc2MCUnO1xubGV0IHRocmVlX2N0X3JpZ2h0X3dpZHRoID0gJzIwJSc7XG5sZXQgdGhyZWVfY3RfbGVmdF93aWR0aCA9ICcyMCUnO1xuLy8gNC4g5Lit6YWN572uXG5sZXQgZm91cl9jb250YWluZXIgPSAnODAlJyA7XG5sZXQgZm91cl9jdF9jZW50ZXJfd2lkdGggPSAnMTAwJSc7XG4vLyDorr7lpIflsI/kuo41NjBweOeahOS4remFjee9rlxubGV0IGRldmljZV9zbWFsbF9jb250YWluZXIgPSBcIjk3JVwiO1xubGV0IGRldmljZV9zbWFsbF9jZW50ZXIgPSBcIjEwMCVcIjtcbi8vIOiuvuWkh+Wwj+S6jjc4MHB455qE5Lit6YWN572uXG5sZXQgZGV2aWNlX2NlbnRlcl9jb250YWluZXIgPSBcIjkzJVwiO1xubGV0IGRldmljZV9jZW50ZXJfY2VudGVyID0gXCIxMDAlXCI7XG5cblxuLy8g5Yik5patcGPmrrXlt6blj7PkuIrop5LnmoTnrq3lpLTor6XmmL7npLrlk6rkuKpcbmZ1bmN0aW9uIGxlZnRfcmlnaHRfYXJyb3cgKCkge1xuICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbiAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbGVmdF9jZW50ZXJfcmlnaHQgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGN0X3JpZ2h0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfcmlnaHRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbiAgICBsZWZ0X3JpZ2h0X2Fycm93ICgpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXlvdXQnKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnTFInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdMUicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxlZnRfY2VudGVyICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IG9uZV9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IG9uZV9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyh7XCJ3aWR0aFwiOiBvbmVfY3RfbGVmdF93aWR0aH0pO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgbGVmdF9yaWdodF9hcnJvdyAoKTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGF5b3V0Jyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5YiH5o2i5Yiw5bem5Lit5biD5bGA5LqGXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjZW50ZXJfcmlnaHQgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogdHdvX2NvbnRhaW5lcn0pO1xuICAgIGN0X3JpZ2h0LmNzcyh7XCJ3aWR0aFwiOiB0d29fY3RfcmlnaHRfd2lkdGh9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IHR3b19jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgbGVmdF9yaWdodF9hcnJvdyAoKTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGF5b3V0Jyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ1InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdSJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2VudGVyICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGZvdXJfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBmb3VyX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ0MnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdDJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV2aWNlX3NtYWxsICgpIHtcbiAgICAvLyDmnIDlsI/lsLrlr7jvvJrmnIDlpKc1NjBweFxuICAgIGNvbnNvbGUubG9nKFwi5bCP5LqONTYwcHjlsLrlr7hcIik7XG5cbiAgICBoZWFkZXIuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICBoZWFkZXJfYXBwLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIC8vIOiuvue9ruW4g+WxgFxuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX3NtYWxsX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX3NtYWxsX2NlbnRlcn0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuXG59XG5mdW5jdGlvbiBkZXZpY2VfY2VudGVyICgpIHtcbiAgICAvLyDkuK3nrYnlsLrlr7jvvJrmnIDlpKc5ODBweFxuICAgIGNvbnNvbGUubG9nKFwi5bCP5LqOOTgwcHjlsLrlr7hcIik7XG5cbiAgICBoZWFkZXIuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICBoZWFkZXJfYXBwLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIC8vIOiuvue9ruW4g+WxgFxuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX2NlbnRlcl9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9jZW50ZXJfY2VudGVyfSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG5cbn1cbmZ1bmN0aW9uIGRldmljZV9sYXJnZXN0ICgpIHtcbiAgICAvLyDmnIDlpKflsLrlr7jvvJrmnIDlpKcxMjYxcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjEyNjFweOWwuuWvuFwiKTtcblxuICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbiAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbiAgICBoZWFkZXIuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuXG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IHRocmVlX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgY3RfcmlnaHQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9yaWdodF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xufVxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5idG5fcGNfc3dpdGNoKCk7XG4gICAgICAgIHRoaXMuYnRuX2FwcF9zd2l0Y2goKTtcbiAgICAgICAgdGhpcy5icm93c2VyX3JlbWVtYmVyKCk7XG4gICAgICAgIHRoaXMuZGV2aWNlX3N3aXRjaCgpOyAvLyDov5nkuKrmlL7liLDmnIDlkI7oh6rosIPnlKjvvIzlm6DkuLrkuI3nrqHmnKzlnLDlrZjlgqjmmK/ku4DkuYjvvIzmnIDnu4jov5jmmK/opoHmoLnmja7orr7lpIfnm5HlkKzkuLrkuLtcbiAgICB9LFxuICAgIC8qIFBD77ya5Y2VL+WPjC/kuInmoI/luIPlsYDliIfmjaLmjInpkq7ngrnlh7vkuovku7YgKi9cbiAgICBidG5fcGNfc3dpdGNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgYXJyb3dfbGVmdC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8v5bem5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/lt6bkuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCdub25lJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8v5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBhcnJvd19yaWdodC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy/kuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/lt6bkuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCdub25lJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy8g5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIOW3puS4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKiDnp7vliqjnq6/lt6blj7PkuIrop5LnmoTmjInpkq4gKi9cbiAgICBidG5fYXBwX3N3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOeCueWHu+W3puaMiemSrlxuICAgICAgICBidG5fYXBwX3NpZGVyLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhcHBfc2lkZV9nbGFzcy5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAgICAgICAgIGFwcF9zaWRlX2NvbnRlbnQuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDngrnlh7vmr5vnjrvnkoPniYdcbiAgICAgICAgYXBwX3NpZGVfZ2xhc3MuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFwcF9zaWRlX2dsYXNzLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgICAgICAgICBhcHBfc2lkZV9jb250ZW50LmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDngrnlh7vlj7PmjInpkq5cbiAgICAgICAgYnRuX2FwcF9yaWdodC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgYWxlcnQoXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qIOa1j+iniOWZqOiusOS9j+W4g+WxgCAqL1xuICAgIGJyb3dzZXJfcmVtZW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGJfbGVmdCA9ICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIik7XG4gICAgICAgIGxldCBiX3JpZ2h0ID0gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIik7XG4gICAgICAgIGxldCBiX2xheW91dDtcbiAgICBcbiAgICAgICAgLyogXG4gICAgICAgIOacieS4qumXrumimO+8mlxuICAgICAgICAgICAg5LiA5omT5byA5rWP6KeI5Zmo5bCx5Lya5qC55o2u57yT5a2Y5p2l5biD5bGA77yM5bC9566h5L2g55qE6K6+5aSH5a695bqm5bCP5LqOMTI2MHB4XG4gICAgICAgICAgICDkvYbmmK/lr7nkuo7mma7pgJrnlKjmiLfvvIzkuIDkuKrmtY/op4jlmajlk6rmnaXnmoTnu4/luLjlvIDlvIDlj5HogIXmqKHlvI/lkaLvvJ9cbiAgICAgICAgKi9cbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICAgICAgLy8g5rWP6KeI5Zmo5pyJ57yT5a2Y55qE5oOF5Ya1XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacrOWcsOacieivpeWPmOmHj+e8k+WtmFwiKTtcbiAgICAgICAgICAgIGxldCBsYXlvdXRfY2hhbmdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGF5b3V0X2NoYW5nZSk7XG4gICAgXG4gICAgICAgICAgICBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJMUlwiKXtcbiAgICAgICAgICAgICAgICAvLyDlt6bkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGxheW91dF9jaGFuZ2UgPT09IFwiTFwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5bem5Lit5biD5bGAXG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJSXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJDXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDkuK3luIPlsYBcbiAgICAgICAgICAgICAgICBjZW50ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5YW25LuW6I6r5ZCN5YW25aaZ55qE5oOF5Ya1XG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOa1j+iniOWZqOayoeaciee8k+WtmOeahOaDheWGtVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKzlnLDmsqHmnInor6Xlj5jph4/nvJPlrZhcIik7XG4gICAgICAgICAgICBpZiAoKGJfbGVmdCA9PT0gXCJibG9ja1wiKSAmJiAoYl9yaWdodCA9PT0gXCJub25lXCIpKSB7IC8vIOW3puS4reW4g+WxgFxuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJMXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChiX2xlZnQgPT09IFwibm9uZVwiKSAmJiAoYl9yaWdodCA9PT0gXCJibG9ja1wiKSkgeyAvLyDkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBiX2xheW91dCA9IFwiUlwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoYl9sZWZ0ID09PSBcImJsb2NrXCIpICYmIChiX3JpZ2h0ID09PSBcImJsb2NrXCIpKSB7IC8v5bem5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIkxSXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIkNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIGJfbGF5b3V0KVxuICAgICAgICB9XG5cblxuICAgIH0sXG4gICAgLyog5aqS5L2T5p+l6K+i5biD5bGAICovXG4gICAgZGV2aWNlX3N3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOWIm+W7uuafpeivouWIl+ihqFxuICAgICAgICBsZXQgZGV2aWNlX3dpZHRoID0gW1xuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDU2MHB4KScpLFxuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk4MHB4KScpLFxuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEyNjFweCknKVxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIOWumuS5ieWbnuiwg+WHveaVsFxuICAgICAgICBmdW5jdGlvbiBtZWRpYU1hdGNocyAoKSB7XG4gICAgICAgICAgICBpZiAoZGV2aWNlX3dpZHRoWzBdLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBkZXZpY2Vfc21hbGwgKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRldmljZV93aWR0aFsxXS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgZGV2aWNlX2NlbnRlciAoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX3dpZHRoWzJdLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBkZXZpY2VfbGFyZ2VzdCAoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlsLrlr7jlhbbku5bmg4XlhrXvvIznkIborrrkuIrmiJHnnIvkuI3liLDov5nlj6Xor53igKbigKZcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5YWI6L+Q6KGM5LiA5qyh5Zue6LCD5Ye95pWwXG4gICAgICAgIG1lZGlhTWF0Y2hzKCk7XG4gICAgICAgIC8vIOS4uuafpeivouWIl+ihqOazqOWGjOebkeWQrOWZqO+8jOWQjOaXtuWwhuWbnuiwg+WHveaVsOS8oOe7meebkeWQrOWZqFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRldmljZV93aWR0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGV2aWNlX3dpZHRoW2ldLmFkZExpc3RlbmVyKG1lZGlhTWF0Y2hzKTtcbiAgICAgICAgfVxuICAgIH0sXG59XG5cblxuIiwiaW1wb3J0IGxheW91dF9vYmplY3QgZnJvbSAnLi9jb21tb24vbGF5b3V0LmpzJztcbmltcG9ydCB0b2Nfb2JqZWN0IGZyb20gJy4vcGFydC90b2MuanMnO1xuaW1wb3J0IGNvbW1lbnRzX29iamVjdCBmcm9tICcuL3BhcnQvY29tbWVudHMuanMnO1xuaW1wb3J0IHtnb190b3Bfb2JqZWN0LGdldFNjcm9sbH0gZnJvbSAnLi9wYXJ0L2dvX3RvcC5qcyc7XG5pbXBvcnQgd2ViX2luZm9fb2JqZWN0IGZyb20gJy4vcGFydC93ZWJfaW5mby5qcyc7XG5pbXBvcnQgc2VhcmNoX29iamVjdCBmcm9tICcuL3BhcnQvc2VhcmNoLmpzJztcblxuLy8g5Yid5aeL5YyWaGlnaGxpZ2h06ISa5pysXG5obGpzLmluaXRIaWdobGlnaHRpbmdPbkxvYWQoKTtcblxuLy8g5Z+f5ZCN6YeN5a6a5ZCRXG5pZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnd3p0bGluazEwMTMuY29tJykge1xuICAgIGxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24uaHJlZi5yZXBsYWNlKCd3enRsaW5rMTAxMy5jb20nLCAnd3d3Lnd6dGxpbmsxMDEzLmNvbScpKTtcbn1cblxuXG4vLyDlhaXlj6Plh73mlbDvvIzkvJrlnKjpobXpnaLliqDovb3lrozmr5XmiafooYxcbiQoZnVuY3Rpb24oKXtcbiAgICAvLyDliJ3lp4vljJbnm67lvZXohJrmnKzlh73mlbBcbiAgICB0b2Nfb2JqZWN0LmluaXQoKTtcbiAgICAvLyDliJ3lp4vljJbor4TorrrmqKHlnZfkuIvmiYDmnInlh73mlbBcbiAgICBjb21tZW50c19vYmplY3QuaW5pdCgpO1xuICAgIC8vIOWIneWni+WMluWbnuWIsOmhtumDqFxuICAgIGdvX3RvcF9vYmplY3QuaW5pdCgpO1xuICAgIC8vIOW4g+WxgOWIneWni+WMllxuICAgIGxheW91dF9vYmplY3QuaW5pdCgpO1xuICAgIHNlYXJjaF9vYmplY3QuaW5pdCgpO1xuICAgIC8vIOWFpeWPo+WHveaVsOWIneWni+WMlue9keermei/kOihjOaXtumXtFxuICAgIHdlYl9pbmZvX29iamVjdC5pbml0KCk7XG59KVxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbuOAkOaWh+eroOiuv+mXrumHj+aOkuWQjeOAkVxuICAgIOaWh+eroOmYheivu+mHj+WcqOWNleS4quaWh+eroOS4reWPr+S7peaYvuekuuS9huaYr+S4jeiDveaOkuWQje+8jOaOkuWQjeaAjuS5iOWunueOsOWRou+8n1xuICAgIOaWueahiDHvvJrkvb/nlKh2YWxpbmVcbiAgICDmlrnmoYgy77ya5Zyo5pyN5Yqh5Zmo5LiK6L+b6KGM5YWo56uZ55qE5paH56ug6K6/6Zeu77yM5o+Q5Y+W5LuW5Lus55qE6K6/6Zeu6YePaWRcbiAgICDmlrnmoYgz77ya5a+5dHdpa29v5LqR5Ye95pWw6L+b6KGM5Luj56CB5pu05pS577yM57G75Ly86K6/6Zeu6YePYXBpXG4gXG7jgJDor4TorrrliIfmjaLmjInpkq7jgJFcbiAgICDliIfmjaJ1dHRlcmFuY2Vz6K+E6K665ZCO77yM6aG16Z2i5Lya5Yi35paw5LiA5LiL54S25ZCO5Y+I5Zue5Yiw6buY6K6k6K+E6K6657O757uf5LqG77yM6L+Z5Liq5Y+v5Lul5LyY5YyWXG5cbuOAkOacgOaWsOivhOiuuuOAkVxuICAgIOacgOaWsOivhOiuuue7hOS7tu+8jOWmguaenGJsb2fpobXpnaLnlKjkuobvvIzpgqPkuYjov5nkuKrnu4Tku7blsLHkuI3og73mlL7lnKjnp7vliqjnq6/kvqfovrnmoI/kuobvvIxcbiAgICDlkIzkuIDkuKppZOS4jeiDveWkmuasoeeUqOeahOe8mOaVheWQl++8n1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG5cbi8vIOWvvOWHuuS4uuS4gOS4quWvueixoVxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdvX2NvbW1lbnRzKCk7XG4gICAgdGhpcy5jb21tZW50c19jb3VudCgpO1xuICAgIHRoaXMubmV3X2NvbW1lbnRzKCk7XG4gICAgdGhpcy5zd2l0Y2hfY29tbWVudCgpO1xuICB9LFxuICAvLyDmmK/lkKbliY3lvoDor4TorrrljLpcbiAgZ29fY29tbWVudHM6IGZ1bmN0aW9uKCl7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb19jb21tZW50cycpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH0sXG4gIC8vIOaWh+eroOivhOiuuuaVsFxuICBjb21tZW50c19jb3VudDogZnVuY3Rpb24oKSB7XG4gICAgLy8g5Yik5pat6aG16Z2i5piv5ZCm5pyJ6K+E6K665Yy6aWTlkozlvJXnlKjor4TorrrmlbDnmoRpZFxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMnKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJykpIHtcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJyk7XG4gICAgICAvLyBCT03ojrflj5bpobXpnaJ1cmznmoRwYXRobmFtZei3r+W+hFxuICAgICAgdmFyIHR3aWtvb19jb21tZW50c191cmwgPSBbbG9jYXRpb24ucGF0aG5hbWVdO1xuXG4gICAgICB0d2lrb28uZ2V0Q29tbWVudHNDb3VudCh7XG4gICAgICAgIGVudklkOiAnd2Vic2l0ZS13aWtvby00ZzQ2azhkbzk4ODY3NTQyJywgLy8g546v5aKDIElEXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICB1cmxzOiB0d2lrb29fY29tbWVudHNfdXJsLC8vIOS4jeWMheWQq+WNj+iuruOAgeWfn+WQjeOAgeWPguaVsOeahOaWh+eroOi3r+W+hOWIl+ihqO+8jOW/heS8oOWPguaVsFxuICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlIC8vIOivhOiuuuaVsOaYr+WQpuWMheaLrOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgLy8g5bCG6K+E6K665pWw5YaZ5YWl5YW25LitXG4gICAgICAgIHR3aWtvb19jb21tZW50cy5pbm5lclRleHQgPSByZXNbMF0uY291bnQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIC8vIOi/lOWbnuekuuS+izogW1xuICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTAvcG9zdC0xLmh0bWwnLCBjb3VudDogMTAgfSxcbiAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzExL3Bvc3QtMi5odG1sJywgY291bnQ6IDAgfSxcbiAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEyL3Bvc3QtMy5odG1sJywgY291bnQ6IDIwIH1cbiAgICAgICAgLy8gXVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAvLyDlj5HnlJ/plJnor69cbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyDmnIDmlrDor4TorrpcbiAgbmV3X2NvbW1lbnRzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaG90X2FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdF9hcnRpY2xlc19pdGVtJyk7XG4gICAgdmFyIHBhZ2Vfc2l6ZSA9IDg7XG4gICAgdHdpa29vLmdldFJlY2VudENvbW1lbnRzKHtcbiAgICAgICAgZW52SWQ6ICd3ZWJzaXRlLXdpa29vLTRnNDZrOGRvOTg4Njc1NDInLCAvLyDnjq/looMgSURcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlX3NpemUsIC8vIOiOt+WPluWkmuWwkeadoe+8jOm7mOiupO+8mjEw77yM5pyA5aSn77yaMTAwXG4gICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UgLy8g5piv5ZCm5YyF5ous5pyA5paw5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdfY29tbWVudHNfbG9kaW5nJyk7XG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudCA9IG5ld19jb21tZW50c19sb2RpbmcucGFyZW50RWxlbWVudDtcbiAgICAgICAgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQucmVtb3ZlQ2hpbGQobmV3X2NvbW1lbnRzX2xvZGluZyk7XG4gICAgICAgIC8vIOaPkuWFpeivhOiuulxuICAgICAgICBmb3IgKHZhciBpID0gMDtpPHBhZ2Vfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKHJlc1tpXS5jb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2NvbnRlbnQgPSByZXNbaV0uY29tbWVudDtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfbmljayA9IHJlc1tpXS5uaWNrO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c191cmwgPSByZXNbaV0udXJsO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19hdmF0YXIgPSByZXNbaV0uYXZhdGFyO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c190aW1lID0gcmVzW2ldLnJlbGF0aXZlVGltZTtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfaWQgPSAnIycgKyByZXNbaV0uaWQ7XG4gICAgXG4gICAgICAgICAgICB2YXIgaG90X2FydGljbGVzX2NoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlc19jaGlsZC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIml0ZW1fdXBcIj48aW1nIHNyYz1cIicgKyBuZXdfY29tbWVudHNfYXZhdGFyICsgJ1wiIGNsYXNzPVwiYXZhdGFyXCI+PGRpdiBjbGFzcz1cIm5pY2tfbmFtZVwiPjxzcGFuIGNsYXNzPVwibmlja1wiPicgKyBuZXdfY29tbWVudHNfbmljayArICc8L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JyArIG5ld19jb21tZW50c190aW1lICsgJzwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiaXRlbV9kb3duXCI+PGEgaHJlZj1cIicgKyBuZXdfY29tbWVudHNfdXJsICsgbmV3X2NvbW1lbnRzX2lkICsgJ1wiPicgKyBuZXdfY29tbWVudHNfY29udGVudCArICc8L2E+PC9kaXY+JztcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlcy5hcHBlbmQoaG90X2FydGljbGVzX2NoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH0sXG4gIC8vIOWIh+aNouivhOiuulxuICBzd2l0Y2hfY29tbWVudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN3aXRjaF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3dpdGNoX2J0bicpO1xuICAgIHZhciB1dHRlcmFuY2VzX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXR0ZXJhbmNlc19jb21tZW50Jyk7XG4gICAgdmFyIHR3aWtvb19jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50Jyk7XG4gICAgXG4gICAgc3dpdGNoX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBpZih1dHRlcmFuY2VzX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHV0dGVyYW5jZXNfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaWYgKCF1dHRlcmFuY2VzX2NvbW1lbnQuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgICAgIHZhciBzY3JpcHRfdXR0ZXJhbmNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zcmM9XCJodHRwczovL3V0dGVyYW5jLmVzL2NsaWVudC5qc1wiIDtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcInJlcG9cIixcInd6dGxpbmsxMDEzL2NvbW1lbnRcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJpc3N1ZS10ZXJtXCIsXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImxhYmVsXCIsXCLwn5KsY29tbWVudFwiKTtcbiAgICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcInRoZW1lXCIsXCJnaXRodWItbGlnaHRcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJjcm9zc29yaWdpblwiLFwiYW5vbnltb3VzXCIpO1xuICAgICAgICAgICAgdXR0ZXJhbmNlc19jb21tZW50LmFwcGVuZENoaWxkKHNjcmlwdF91dHRlcmFuY2VzKTsgXG4gICAgICAgIH1cbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdXR0ZXJhbmNlc19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIOe8k+aFouaYvuekulxuICAgICAgICDnvJPmhaLlm57liLDpobbpg6hcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiBsZXQgZ29fdG9wX29iamVjdCA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5nb190b3AoKTtcbiAgICAgICAgdGhpcy5jbGlja19nb190b3AoKTtcbiAgICB9LFxuICAgIGdvX3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8g5rua5Yqo5pi+56S6Z29fdG9w5oyJ6ZKuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgLy8g5oyB57ut55uR5ZCs5rua5Yqo54q25oCBXG4gICAgICAgICAgICBnZXRTY3JvbGwoKS50b3AgIT09IDAgPyAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIikgOiAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgY2xpY2tfZ29fdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g54K55Ye75Zue5Yiw6aG26YOoXG4gICAgICAgICQoXCIjZ29fdG9wXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy8gc2Nyb29sVG9w5YW85a655oCn5pa55qGIXG5mdW5jdGlvbiBnZXRTY3JvbGwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0fHwwLFxuICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMFxuICAgIH07XG59XG5cblxuLy8g5aaC5p6c5LiN5YGa6buY6K6k5a+85YWl77yM5bCx5oyJ54Wn5LiL6Z2i5YaZ77yM5LiN6KaBZGVmYXVsdOivjVxuZXhwb3J0IHtcbiAgICBnb190b3Bfb2JqZWN0LCAvL+WvvOWHuuWvueixoVxuICAgIGdldFNjcm9sbCwgLy/lr7zlh7rpgJrnlKjlh73mlbBcbn1cblxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfSxcbiAgICBzZWFyY2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaW5wdXRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1zZWFyY2gtaW5wdXRcIik7XG5cbiAgICAgICAgaWYgKGlucHV0QXJlYSkge1xuICAgICAgICAgICAgaW5wdXRBcmVhLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9ICfpppbmrKHmkJzntKJpbmfCt8K3wrcnO1xuICAgICAgICAgICAgICAgIGdldFNlYXJjaEZpbGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2xpY2sgPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaW5wdXRBcmVhLm9ua2V5ZG93biA9IGZ1bmN0aW9uKCkgeyBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykgcmV0dXJuIGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KSB7XG4gICAgICAgICAgICAvLyBjbGVhciBzZWFyY2ggcmVzdWx0XG4gICAgICAgICAgICB2YXIgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLXNlYXJjaC1jbG9zZVwiKTtcbiAgICAgICAgICAgIGJ0bkNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLnBsYWNlaG9sZGVyID0gJ+ivt+i+k+WFpeWFs+mUruivjSc7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLmZvY3VzKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2YXIgc2VhcmNoRnVuYyA9IGZ1bmN0aW9uKHBhdGgsIHNlYXJjaF9pZCwgY29udGVudF9pZCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgdmFyIEJUTiA9IFwiPGRpdiBpZD0nbG9jYWwtc2VhcmNoLWNsb3NlJz7muIXnqbrmkJzntKI8L2Rpdj5cIlxuICAgICAgICAgICAgdmFyICRpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlYXJjaF9pZCk7XG4gICAgICAgICAgICB2YXIgJHJlc3VsdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50X2lkKTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBwYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXN1bWUgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5wbGFjZWhvbGRlciA9ICfovpPlhaXlhbPplK7or43ku6XmkJzntKInO1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciB4bWwgPSB4aHIucmVzcG9uc2VYTUw7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb290ID0geG1sLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3QgPSByb290LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZW50cnlcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aXRsZVwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNvbnRlbnRcIilbMF0uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVybFwiKVswXS5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9ICc8dWwgY2xhc3M9XFxcImFyY2hpdmVcXFwiPic7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5d29yZHMgPSB0aGlzLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9bXFxzXFwtXSsvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZS50cmltKCkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pys5Zyw5pCc57Si5Li75Luj56CBXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5mb3JFYWNoKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRfaW5kZXggPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEudGl0bGUgfHwgZGF0YS50aXRsZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGl0bGUgPSBcIlVudGl0bGVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfdGl0bGUgPSBkYXRhLnRpdGxlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YV90aXRsZSA9IG9yaWdfZGF0YV90aXRsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfY29udGVudCA9IGRhdGEuY29udGVudC50cmltKCkucmVwbGFjZSgvPFtePl0rPi9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YV9jb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YV91cmwgPSBkYXRhLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhfdGl0bGUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhfY29udGVudCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdF9vY2N1ciA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgbWF0Y2ggYXJ0aWxlcyB3aXRoIG5vdCBlbXB0eSBjb250ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhX2NvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfdGl0bGUgPSBkYXRhX3RpdGxlLmluZGV4T2Yoa2V5d29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleF9jb250ZW50ID0gZGF0YV9jb250ZW50LmluZGV4T2Yoa2V5d29yZCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X3RpdGxlIDwgMCAmJiBpbmRleF9jb250ZW50IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X2NvbnRlbnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4X2NvbnRlbnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X29jY3VyID0gaW5kZXhfY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGVudF9pbmRleC5wdXNoKHtpbmRleF9jb250ZW50OmluZGV4X2NvbnRlbnQsIGtleXdvcmRfbGVuOmtleXdvcmRfbGVufSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bGV56S657uT5p6cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzog5b6F5a6M5ZaE77yM5b6F5a6M5ZaEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjxsaT48YSBocmVmPSdcIiArbG9jYXRpb24ucHJvdG9jb2wrXCIvL1wiK2xvY2F0aW9uLmhvc3QrXCIvXCIrIGRhdGFfdXJsICsgXCInIGNsYXNzPSdhcmNoaXZlLXRpdGxlJz5cIiArIG9yaWdfZGF0YV90aXRsZSArIFwiPC9hPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IG9yaWdfZGF0YV9jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3Rfb2NjdXIgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3V0IG91dCAxMDAgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gZmlyc3Rfb2NjdXIgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmQgPSBmaXJzdF9vY2N1ciArIDMwO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5kID4gY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSBjb250ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoX2NvbnRlbnQgPSBjb250ZW50LnN1YnN0cihzdGFydCwgMTAwKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoaWdobGlnaHQgYWxsIGtleXdvcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnUyA9IG5ldyBSZWdFeHAoa2V5d29yZCwgXCJnaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaF9jb250ZW50ID0gbWF0Y2hfY29udGVudC5yZXBsYWNlKHJlZ1MsIFwiPGVtIGNsYXNzPVxcXCJzZWFyY2gta2V5d29yZFxcXCI+XCIgKyBrZXl3b3JkICsgXCI8L2VtPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjxwIGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIj5cIiArIG1hdGNoX2NvbnRlbnQgKyBcIi4uLjwvcD5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjwvbGk+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8L3VsPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCc8bGk+JykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gQlROICsgXCI8ZGl2IGNsYXNzPSdsb2NhbC1zZWFyY2gtZW1wdHknPuayoeacieaJvuWIsOS9oOaJgOimgeaQnOe0oueahOWGheWuueKApuKApjwvZGl2PlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBCVE4gKyBzdHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJTZWFyY2goJHJlc3VsdENvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB2YXIgZ2V0U2VhcmNoRmlsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHBhdGggPSBcIi9zZWFyY2gueG1sXCI7XG4gICAgICAgICAgICBzZWFyY2hGdW5jKHBhdGgsICdsb2NhbC1zZWFyY2gtaW5wdXQnLCAnbG9jYWwtc2VhcmNoLXJlc3VsdCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8g5YWo5bGA5oyJ6ZKu6K6+572uanPmmK/lkKblsZXnpLrmkJzntKLmoYZcbiAgICAgICAgdmFyIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hfYnRuJyk7XG4gICAgICAgIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhbC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB2YXIgc2VhcmNoX2Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9jbG9zZScpO1xuICAgICAgICBzZWFyY2hfY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudG9jX2J0bigpO1xuICAgIH0sXG4gICAgdG9jX2J0bjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0b2NfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvY19jb250YWluZXInKTtcbiAgICAgICAgbGV0IHRvY19idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9jX2J0bicpO1xuICAgICAgICAkKHRvY19idG4pLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAodG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpe1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ZWJfaW5mb19ydW50aW1lKCk7XG4gICAgfSxcbiAgICAvLyBUT0RPOiAhISHmiJHnnYDlrp7kuI3nn6XpgZPov5nmmK/kuKrku4DkuYjnp5hcbiAgICB3ZWJfaW5mb19ydW50aW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgQmlydGhEYXkgPSBuZXcgRGF0ZShuZXcgRGF0ZSgnMjAyMC8wMS8wNCcpKTtcbiAgICAgICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgdGltZW9sZCA9ICh0b2RheS5nZXRUaW1lKCkgLSBCaXJ0aERheS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgbGV0IGRheXNvbGQgPSBNYXRoLmZsb29yKHRpbWVvbGQgLyAoMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMVwiKS5pbm5lclRleHQgPSBkYXlzb2xkICsgJyDlpKknO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF5c29sZCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYmluZm9fcnVudGltZV9jb3VudF8xXCIpKTtcbiAgICB9LFxufVxuXG4iXX0=
