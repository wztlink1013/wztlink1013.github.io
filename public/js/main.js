(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  init: function init() {
    this.btn_pc_switch();
    this.btn_app_switch();
    this.device_switch();
  },
  // pc单/双/三栏布局切换
  btn_pc_switch: function btn_pc_switch() {
    $(arrow_left).click(function () {
      if (ct_left.style.display === 'none') {
        arrow_left.children[0].style.display = 'none';
        arrow_left.children[1].style.display = 'inline-block';
        ct_left.style.display = 'block';

        if (ct_right.style.display === 'none') {
          //左中配置
          container.style.width = one_container;
          ct_center.style.width = one_ct_center_width;
          ct_left.style.width = one_ct_left_width;
        } else {
          //左中右配置
          container.style.width = three_container;
          ct_center.style.width = three_ct_center_width;
          ct_left.style.width = three_ct_left_width;
          ct_right.style.width = three_ct_right_width;
        }
      } else {
        arrow_left.children[1].style.display = 'none';
        arrow_left.children[0].style.display = 'inline-block';
        ct_left.style.display = 'none';

        if (ct_right.style.display === 'none') {
          //中配置
          container.style.width = four_container;
          ct_center.style.width = four_ct_center_width;
        } else {
          //中右配置
          container.style.width = two_container;
          ct_right.style.width = two_ct_right_width;
          ct_center.style.width = two_ct_center_width;
        }
      }
    });
    $(arrow_right).click(function () {
      if (ct_right.style.display === 'none') {
        arrow_right.children[0].style.display = 'none';
        arrow_right.children[1].style.display = 'inline-block';
        ct_right.style.display = 'block';

        if (ct_left.style.display === 'none') {
          //中右配置
          container.style.width = two_container;
          ct_right.style.width = two_ct_right_width;
          ct_center.style.width = two_ct_center_width;
        } else {
          //左中右配置
          container.style.width = three_container;
          ct_center.style.width = three_ct_center_width;
          ct_left.style.width = three_ct_left_width;
          ct_right.style.width = three_ct_right_width;
        }
      } else {
        arrow_right.children[1].style.display = 'none';
        arrow_right.children[0].style.display = 'inline-block';
        ct_right.style.display = 'none';

        if (ct_left.style.display === 'none') {
          // 中配置
          container.style.width = four_container;
          ct_center.style.width = four_ct_center_width;
        } else {
          // 左中配置
          container.style.width = one_container;
          ct_center.style.width = one_ct_center_width;
          ct_left.style.width = one_ct_left_width;
        }
      }
    });
  },
  // 监听事件切换左右上角按钮
  btn_app_switch: function btn_app_switch() {
    // header在PC/移动等不同设备的响应状况
    var btn_app_sider = document.querySelector('#btn_app_sider');
    var btn_app_right = document.querySelector('#btn_app_right');
    var app_side_glass = document.querySelector('#app_side_glass');
    var app_side_content = document.querySelector('#app_side_content');
    btn_app_sider.addEventListener('click', function () {
      app_side_glass.style.display = 'block';
      app_side_content.style.display = 'block';
    });
    app_side_glass.addEventListener('click', function () {
      app_side_glass.style.display = 'none';
      app_side_content.style.display = 'none';
    });
    btn_app_right.addEventListener('click', function () {
      alert("本网站还在开发中，诸多功能还未完善，敬请期待~");
      console.log("本网站还在开发中，诸多功能还未完善，敬请期待~");
    });
  },
  // 响应式布局  560px（C档）   980px（B档）   1261px（A档）
  device_switch: function device_switch() {
    function deviceMediaQuery(media_width) {
      if (media_width.matches) {
        // 媒体查询
        console.log('使用屏幕小于980px的样式');
        document.querySelector('.header').style.display = 'none';
        document.querySelector('.header_app').style.display = 'block';
        document.querySelector('.ct_left').style.display = 'none';
        document.querySelector('.ct_right').style.display = 'none';
        document.querySelector('.container').style.width = '95%';
        document.querySelector('.ct_center').style.width = '100%';
      } else {
        console.log('使用屏幕小于1260px的样式');

        if (ct_left.style.display === 'none') {
          arrow_left.children[1].style.display = 'none';
          arrow_left.children[0].style.display = 'inline-block';
        } else {
          arrow_left.children[0].style.display = 'none';
          arrow_left.children[1].style.display = 'inline-block';
        }

        if (ct_right.style.display === 'none') {
          arrow_right.children[1].style.display = 'none';
          arrow_right.children[0].style.display = 'inline-block';
        } else {
          arrow_right.children[0].style.display = 'none';
          arrow_right.children[1].style.display = 'inline-block';
        }

        document.querySelector('.header').style.display = 'block';
        document.querySelector('.header_app').style.display = 'none';
        document.querySelector('.ct_left').style.display = 'block';
        document.querySelector('.ct_right').style.display = 'block'; // document.querySelector('.ct_center').style.display = 'block';
        // document.querySelector('.ct_center').style.float = 'left';

        document.querySelector('.container').style.width = '95%';
        document.querySelector('.ct_center').style.width = '60%';
        document.querySelector('.ct_left').style.width = '20%';
        document.querySelector('.ct_right').style.width = '20%';
      }
    }

    var media_width = window.matchMedia("(max-width: 980px)");
    deviceMediaQuery(media_width); // 执行时调用的监听函数

    media_width.addListener(deviceMediaQuery); // 状态改变时添加监听器
  }
};
/****************************************************
        container弹性单栏/双栏/三栏伸缩布局各变量
*****************************************************/

exports["default"] = _default;
var arrow_left = document.querySelector('#arrow_left');
var arrow_right = document.querySelector('#arrow_right');
var ct_left = document.querySelector('.ct_left');
var ct_right = document.querySelector('.ct_right');
var ct_center = document.querySelector('.ct_center');
var container = document.querySelector('.container'); // 1.左中配置

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
var four_ct_center_width = '100%';

},{}],2:[function(require,module,exports){
"use strict";

var _layout = _interopRequireDefault(require("./common/layout.js"));

var _toc = _interopRequireDefault(require("./part/toc.js"));

var _comments = _interopRequireDefault(require("./part/comments.js"));

var _go_top = require("./part/go_top.js");

var _web_info = require("./part/web_info.js");

var _search = _interopRequireDefault(require("./part/search.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

$(function () {
  console.log("我是main文件"); // 初始化目录脚本函数

  _toc["default"].init(); // 初始化评论模块下所有函数


  _comments["default"].init(); // 初始化回到顶部


  _go_top.go_top_object.init(); // 布局初始化


  _layout["default"].init();

  _search["default"].init(); // 入口函数初始化网站运行时间


  (0, _web_info.web_info_runtime)();
}); // TODO: 有没有一种方法，让页面加载前就执行advance里面的js代码
// 让代码结构性更强，更好维护，体现模块化

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
    var hot_articles = document.querySelector('#hot_articles_item');
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
exports.web_info_runtime = void 0;

var web_info_runtime = function web_info_runtime() {
  var BirthDay = new Date(new Date('2020/01/04'));
  var today = new Date();
  var timeold = today.getTime() - BirthDay.getTime();
  var daysold = Math.floor(timeold / (24 * 60 * 60 * 1000));
  $("#webinfo_runtime_count").html(daysold + "<span>天</span>"); //嵌入失败，我也不知道为什么……
};

exports.web_info_runtime = web_info_runtime;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvbWFpbi5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvY29tbWVudHMuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyIsInRoZW1lcy9oZXhvLXRoZW1lLWx5cmljcy9zb3VyY2UvcHVibGljL2pzL3BhcnQvc2VhcmNoLmpzIiwidGhlbWVzL2hleG8tdGhlbWUtbHlyaWNzL3NvdXJjZS9wdWJsaWMvanMvcGFydC90b2MuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L3dlYl9pbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VDQWU7QUFDWCxFQUFBLElBQUksRUFBRSxnQkFBVztBQUNiLFNBQUssYUFBTDtBQUNBLFNBQUssY0FBTDtBQUNBLFNBQUssYUFBTDtBQUNILEdBTFU7QUFNWDtBQUNBLEVBQUEsYUFBYSxFQUFFLHlCQUFXO0FBQ3RCLElBQUEsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjLEtBQWQsQ0FBb0IsWUFBVTtBQUMxQixVQUFJLE9BQU8sQ0FBQyxLQUFSLENBQWMsT0FBZCxLQUEwQixNQUE5QixFQUFzQztBQUNsQyxRQUFBLFVBQVUsQ0FBQyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLEtBQXZCLENBQTZCLE9BQTdCLEdBQXVDLE1BQXZDO0FBQ0EsUUFBQSxVQUFVLENBQUMsUUFBWCxDQUFvQixDQUFwQixFQUF1QixLQUF2QixDQUE2QixPQUE3QixHQUF1QyxjQUF2QztBQUNBLFFBQUEsT0FBTyxDQUFDLEtB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S0FBZCxDQUFvQixPQUFwQixHQUE4QixNQUE5QjtBQUNILE9BRk0sTUFFQTtBQUNILFFBQUEsYUFBYSxDQUFDLEtBQWQsQ0FBb0IsT0FBcEIsR0FBOEIsT0FBOUI7QUFDSDtBQUNKLEtBUkQ7QUFTSDtBQWhCVSxDOzs7Ozs7Ozs7OztBQ0FmLElBQUksZ0JBQWdCLEdBQUcsU0FBbkIsZ0JBQW1CLEdBQVk7QUFDL0IsTUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFKLENBQVMsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUFULENBQWY7QUFDQSxNQUFJLEtBQUssR0FBRyxJQUFJLElBQUosRUFBWjtBQUNBLE1BQUksT0FBTyxHQUFJLEtBQUssQ0FBQyxPQUFOLEtBQWtCLFFBQVEsQ0FBQyxPQUFULEVBQWpDO0FBQ0EsTUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFPLElBQUksS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLElBQW5CLENBQWxCLENBQWQ7QUFDQSxFQUFBLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCLElBQTVCLENBQWlDLE9BQU8sR0FBRyxnQkFBM0MsRUFMK0IsQ0FLOEI7QUFDaEUsQ0FORCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5idG5fcGNfc3dpdGNoKCk7XG4gICAgICAgIHRoaXMuYnRuX2FwcF9zd2l0Y2goKTtcbiAgICAgICAgdGhpcy5kZXZpY2Vfc3dpdGNoKCk7XG4gICAgfSxcbiAgICAvLyBwY+WNlS/lj4wv5LiJ5qCP5biD5bGA5YiH5o2iXG4gICAgYnRuX3BjX3N3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgICQoYXJyb3dfbGVmdCkuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChjdF9sZWZ0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIGFycm93X2xlZnQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBhcnJvd19sZWZ0LmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgICAgICAgICBjdF9sZWZ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGlmIChjdF9yaWdodC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpeyAvL+W3puS4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBvbmVfY29udGFpbmVyO1xuICAgICAgICAgICAgICAgICAgICBjdF9jZW50ZXIuc3R5bGUud2lkdGggPSBvbmVfY3RfY2VudGVyX3dpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjdF9sZWZ0LnN0eWxlLndpZHRoID0gb25lX2N0X2xlZnRfd2lkdGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/lt6bkuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhyZWVfY29udGFpbmVyO1xuICAgICAgICAgICAgICAgICAgICBjdF9jZW50ZXIuc3R5bGUud2lkdGggPSB0aHJlZV9jdF9jZW50ZXJfd2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGN0X2xlZnQuc3R5bGUud2lkdGggPSB0aHJlZV9jdF9sZWZ0X3dpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjdF9yaWdodC5zdHlsZS53aWR0aCA9IHRocmVlX2N0X3JpZ2h0X3dpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJyb3dfbGVmdC5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGFycm93X2xlZnQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICAgICAgICAgIGN0X2xlZnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAoY3RfcmlnaHQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKXsgLy/kuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gZm91cl9jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgIGN0X2NlbnRlci5zdHlsZS53aWR0aCA9IGZvdXJfY3RfY2VudGVyX3dpZHRoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHR3b19jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgIGN0X3JpZ2h0LnN0eWxlLndpZHRoID0gdHdvX2N0X3JpZ2h0X3dpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjdF9jZW50ZXIuc3R5bGUud2lkdGggPSB0d29fY3RfY2VudGVyX3dpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAkKGFycm93X3JpZ2h0KS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGN0X3JpZ2h0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIGFycm93X3JpZ2h0LmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgYXJyb3dfcmlnaHQuY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICAgICAgICAgIGN0X3JpZ2h0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGlmIChjdF9sZWZ0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyl7IC8v5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHR3b19jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgIGN0X3JpZ2h0LnN0eWxlLndpZHRoID0gdHdvX2N0X3JpZ2h0X3dpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjdF9jZW50ZXIuc3R5bGUud2lkdGggPSB0d29fY3RfY2VudGVyX3dpZHRoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5bem5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRocmVlX2NvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgY3RfY2VudGVyLnN0eWxlLndpZHRoID0gdGhyZWVfY3RfY2VudGVyX3dpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjdF9sZWZ0LnN0eWxlLndpZHRoID0gdGhyZWVfY3RfbGVmdF93aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgY3RfcmlnaHQuc3R5bGUud2lkdGggPSB0aHJlZV9jdF9yaWdodF93aWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFycm93X3JpZ2h0LmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgYXJyb3dfcmlnaHQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICAgICAgICAgIGN0X3JpZ2h0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKGN0X2xlZnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKXsgLy8g5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGZvdXJfY29udGFpbmVyO1xuICAgICAgICAgICAgICAgICAgICBjdF9jZW50ZXIuc3R5bGUud2lkdGggPSBmb3VyX2N0X2NlbnRlcl93aWR0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyDlt6bkuK3phY3nva5cbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gb25lX2NvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgY3RfY2VudGVyLnN0eWxlLndpZHRoID0gb25lX2N0X2NlbnRlcl93aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgY3RfbGVmdC5zdHlsZS53aWR0aCA9IG9uZV9jdF9sZWZ0X3dpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyDnm5HlkKzkuovku7bliIfmjaLlt6blj7PkuIrop5LmjInpkq5cbiAgICBidG5fYXBwX3N3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGhlYWRlcuWcqFBDL+enu+WKqOetieS4jeWQjOiuvuWkh+eahOWTjeW6lOeKtuWGtVxuICAgICAgICBsZXQgYnRuX2FwcF9zaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYXBwX3NpZGVyJyk7XG4gICAgICAgIGxldCBidG5fYXBwX3JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hcHBfcmlnaHQnKTtcbiAgICAgICAgbGV0IGFwcF9zaWRlX2dsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcF9zaWRlX2dsYXNzJyk7XG4gICAgICAgIGxldCBhcHBfc2lkZV9jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcF9zaWRlX2NvbnRlbnQnKTtcbiAgICAgICAgXG4gICAgICAgIGJ0bl9hcHBfc2lkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhcHBfc2lkZV9nbGFzcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGFwcF9zaWRlX2NvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0pXG4gICAgICAgIGFwcF9zaWRlX2dsYXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgYXBwX3NpZGVfZ2xhc3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGFwcF9zaWRlX2NvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICAgICAgYnRuX2FwcF9yaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFsZXJ0KFwi5pys572R56uZ6L+Y5Zyo5byA5Y+R5Lit77yM6K+45aSa5Yqf6IO96L+Y5pyq5a6M5ZaE77yM5pWs6K+35pyf5b6FflwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pys572R56uZ6L+Y5Zyo5byA5Y+R5Lit77yM6K+45aSa5Yqf6IO96L+Y5pyq5a6M5ZaE77yM5pWs6K+35pyf5b6FflwiKTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOWTjeW6lOW8j+W4g+WxgCAgNTYwcHjvvIhD5qGj77yJICAgOTgwcHjvvIhC5qGj77yJICAgMTI2MXB477yIQeaho++8iVxuICAgIGRldmljZV9zd2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICBmdW5jdGlvbiBkZXZpY2VNZWRpYVF1ZXJ5KG1lZGlhX3dpZHRoKSB7XG4gICAgICAgICAgICBpZiAobWVkaWFfd2lkdGgubWF0Y2hlcykgeyAvLyDlqpLkvZPmn6Xor6JcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5L2/55So5bGP5bmV5bCP5LqOOTgwcHjnmoTmoLflvI8nKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX2FwcCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdF9sZWZ0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RfcmlnaHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5zdHlsZS53aWR0aCA9ICc5NSUnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdF9jZW50ZXInKS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+S9v+eUqOWxj+W5leWwj+S6jjEyNjBweOeahOagt+W8jycpO1xuICAgICAgICAgICAgICAgIGlmIChjdF9sZWZ0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBhcnJvd19sZWZ0LmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGFycm93X2xlZnQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFycm93X2xlZnQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dfbGVmdC5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdF9yaWdodC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dfcmlnaHQuY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dfcmlnaHQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFycm93X3JpZ2h0LmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGFycm93X3JpZ2h0LmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfYXBwJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RfbGVmdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdF9yaWdodCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdF9jZW50ZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RfY2VudGVyJykuc3R5bGUuZmxvYXQgPSAnbGVmdCc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLnN0eWxlLndpZHRoID0gJzk1JSc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN0X2NlbnRlcicpLnN0eWxlLndpZHRoID0gJzYwJSc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN0X2xlZnQnKS5zdHlsZS53aWR0aCA9ICcyMCUnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdF9yaWdodCcpLnN0eWxlLndpZHRoID0gJzIwJSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBtZWRpYV93aWR0aCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTgwcHgpXCIpO1xuICAgICAgICBcbiAgICAgICAgZGV2aWNlTWVkaWFRdWVyeShtZWRpYV93aWR0aCk7IC8vIOaJp+ihjOaXtuiwg+eUqOeahOebkeWQrOWHveaVsFxuICAgICAgICBtZWRpYV93aWR0aC5hZGRMaXN0ZW5lcihkZXZpY2VNZWRpYVF1ZXJ5KTsgLy8g54q25oCB5pS55Y+Y5pe25re75Yqg55uR5ZCs5ZmoXG4gICAgfVxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBjb250YWluZXLlvLnmgKfljZXmoI8v5Y+M5qCPL+S4ieagj+S8uOe8qeW4g+WxgOWQhOWPmOmHj1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5sZXQgYXJyb3dfbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcnJvd19sZWZ0Jyk7XG5sZXQgYXJyb3dfcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyb3dfcmlnaHQnKTtcblxubGV0IGN0X2xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RfbGVmdCcpO1xubGV0IGN0X3JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN0X3JpZ2h0Jyk7XG5sZXQgY3RfY2VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN0X2NlbnRlcicpO1xubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuLy8gMS7lt6bkuK3phY3nva5cbmxldCBvbmVfY29udGFpbmVyID0gJzgwJScgO1xuXG5sZXQgb25lX2N0X2NlbnRlcl93aWR0aCA9ICc3NSUnO1xubGV0IG9uZV9jdF9sZWZ0X3dpZHRoID0gJzI1JSc7XG4vLyAyLiDkuK3lj7PphY3nva5cbmxldCB0d29fY29udGFpbmVyID0gJzgwJScgO1xuXG5sZXQgdHdvX2N0X2NlbnRlcl93aWR0aCA9ICc3NSUnO1xubGV0IHR3b19jdF9yaWdodF93aWR0aCA9ICcyNSUnO1xuLy8gMy4g5bem5Lit5Y+z6YWN572uXG5sZXQgdGhyZWVfY29udGFpbmVyID0gJzk1JScgO1xuXG5sZXQgdGhyZWVfY3RfY2VudGVyX3dpZHRoID0gJzYwJSc7XG5sZXQgdGhyZWVfY3RfcmlnaHRfd2lkdGggPSAnMjAlJztcbmxldCB0aHJlZV9jdF9sZWZ0X3dpZHRoID0gJzIwJSc7XG4vLyA0LiDkuK3phY3nva5cbmxldCBmb3VyX2NvbnRhaW5lciA9ICc4MCUnIDtcbmxldCBmb3VyX2N0X2NlbnRlcl93aWR0aCA9ICcxMDAlJztcbiIsImltcG9ydCBsYXlvdXRfb2JqZWN0IGZyb20gJy4vY29tbW9uL2xheW91dC5qcyc7XG5pbXBvcnQgdG9jX29iamVjdCBmcm9tICcuL3BhcnQvdG9jLmpzJztcbmltcG9ydCBjb21tZW50c19vYmplY3QgZnJvbSAnLi9wYXJ0L2NvbW1lbnRzLmpzJztcbmltcG9ydCB7Z29fdG9wX29iamVjdCxnZXRTY3JvbGx9IGZyb20gJy4vcGFydC9nb190b3AuanMnO1xuaW1wb3J0IHt3ZWJfaW5mb19ydW50aW1lfSBmcm9tICcuL3BhcnQvd2ViX2luZm8uanMnO1xuaW1wb3J0IHNlYXJjaF9vYmplY3QgZnJvbSAnLi9wYXJ0L3NlYXJjaC5qcyc7XG5cblxuXG4kKGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coXCLmiJHmmK9tYWlu5paH5Lu2XCIpO1xuICAgIC8vIOWIneWni+WMluebruW9leiEmuacrOWHveaVsFxuICAgIHRvY19vYmplY3QuaW5pdCgpO1xuICAgIC8vIOWIneWni+WMluivhOiuuuaooeWdl+S4i+aJgOacieWHveaVsFxuICAgIGNvbW1lbnRzX29iamVjdC5pbml0KCk7XG4gICAgLy8g5Yid5aeL5YyW5Zue5Yiw6aG26YOoXG4gICAgZ29fdG9wX29iamVjdC5pbml0KCk7XG4gICAgLy8g5biD5bGA5Yid5aeL5YyWXG4gICAgbGF5b3V0X29iamVjdC5pbml0KCk7XG4gICAgc2VhcmNoX29iamVjdC5pbml0KCk7XG4gICAgLy8g5YWl5Y+j5Ye95pWw5Yid5aeL5YyW572R56uZ6L+Q6KGM5pe26Ze0XG4gICAgd2ViX2luZm9fcnVudGltZSgpO1xufSlcblxuXG4vLyBUT0RPOiDmnInmsqHmnInkuIDnp43mlrnms5XvvIzorqnpobXpnaLliqDovb3liY3lsLHmiafooYxhZHZhbmNl6YeM6Z2i55qEanPku6PnoIFcbi8vIOiuqeS7o+eggee7k+aehOaAp+abtOW8uu+8jOabtOWlvee7tOaKpO+8jOS9k+eOsOaooeWdl+WMliIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG7jgJDmlofnq6Dorr/pl67ph4/mjpLlkI3jgJFcbiAgICDmlofnq6DpmIXor7vph4/lnKjljZXkuKrmlofnq6DkuK3lj6/ku6XmmL7npLrkvYbmmK/kuI3og73mjpLlkI3vvIzmjpLlkI3mgI7kuYjlrp7njrDlkaLvvJ9cbiAgICDmlrnmoYgx77ya5L2/55SodmFsaW5lXG4gICAg5pa55qGIMu+8muWcqOacjeWKoeWZqOS4iui/m+ihjOWFqOermeeahOaWh+eroOiuv+mXru+8jOaPkOWPluS7luS7rOeahOiuv+mXrumHj2lkXG4gICAg5pa55qGIM++8muWvuXR3aWtvb+S6keWHveaVsOi/m+ihjOS7o+eggeabtOaUue+8jOexu+S8vOiuv+mXrumHj2FwaVxuIFxu44CQ6K+E6K665YiH5o2i5oyJ6ZKu44CRXG4gICAg5YiH5o2idXR0ZXJhbmNlc+ivhOiuuuWQju+8jOmhtemdouS8muWIt+aWsOS4gOS4i+eEtuWQjuWPiOWbnuWIsOm7mOiupOivhOiuuuezu+e7n+S6hu+8jOi/meS4quWPr+S7peS8mOWMllxuXG7jgJDmnIDmlrDor4TorrrjgJFcbiAgICDmnIDmlrDor4Torrrnu4Tku7bvvIzlpoLmnpxibG9n6aG16Z2i55So5LqG77yM6YKj5LmI6L+Z5Liq57uE5Lu25bCx5LiN6IO95pS+5Zyo56e75Yqo56uv5L6n6L655qCP5LqG77yMXG4gICAg5ZCM5LiA5LiqaWTkuI3og73lpJrmrKHnlKjnmoTnvJjmlYXlkJfvvJ9cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuXG4vLyDlr7zlh7rkuLrkuIDkuKrlr7nosaFcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nb19jb21tZW50cygpO1xuICAgIHRoaXMuY29tbWVudHNfY291bnQoKTtcbiAgICB0aGlzLm5ld19jb21tZW50cygpO1xuICAgIHRoaXMuc3dpdGNoX2NvbW1lbnQoKTtcbiAgfSxcbiAgLy8g5piv5ZCm5YmN5b6A6K+E6K665Yy6XG4gIGdvX2NvbW1lbnRzOiBmdW5jdGlvbigpe1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvX2NvbW1lbnRzJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9LFxuICAvLyDmlofnq6Dor4TorrrmlbBcbiAgY29tbWVudHNfY291bnQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIOWIpOaWremhtemdouaYr+WQpuacieivhOiuuuWMumlk5ZKM5byV55So6K+E6K665pWw55qEaWRcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzJykgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50cycpKSB7XG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50cycpO1xuICAgICAgLy8gQk9N6I635Y+W6aG16Z2idXJs55qEcGF0aG5hbWXot6/lvoRcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHNfdXJsID0gW2xvY2F0aW9uLnBhdGhuYW1lXTtcblxuICAgICAgdHdpa29vLmdldENvbW1lbnRzQ291bnQoe1xuICAgICAgICBlbnZJZDogJ3dlYnNpdGUtd2lrb28tNGc0Nms4ZG85ODg2NzU0MicsIC8vIOeOr+WigyBJRFxuICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgdXJsczogdHdpa29vX2NvbW1lbnRzX3VybCwvLyDkuI3ljIXlkKvljY/orq7jgIHln5/lkI3jgIHlj4LmlbDnmoTmlofnq6Dot6/lvoTliJfooajvvIzlv4XkvKDlj4LmlbBcbiAgICAgICAgaW5jbHVkZVJlcGx5OiBmYWxzZSAvLyDor4TorrrmlbDmmK/lkKbljIXmi6zlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIC8vIOWwhuivhOiuuuaVsOWGmeWFpeWFtuS4rVxuICAgICAgICB0d2lrb29fY29tbWVudHMuaW5uZXJUZXh0ID0gcmVzWzBdLmNvdW50O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAvLyDov5Tlm57npLrkvos6IFtcbiAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEwL3Bvc3QtMS5odG1sJywgY291bnQ6IDEwIH0sXG4gICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMS9wb3N0LTIuaHRtbCcsIGNvdW50OiAwIH0sXG4gICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMi9wb3N0LTMuaHRtbCcsIGNvdW50OiAyMCB9XG4gICAgICAgIC8vIF1cbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgLy8g5Y+R55Sf6ZSZ6K+vXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8g5pyA5paw6K+E6K66XG4gIG5ld19jb21tZW50czogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhvdF9hcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob3RfYXJ0aWNsZXNfaXRlbScpO1xuICAgIHZhciBwYWdlX3NpemUgPSA4O1xuICAgIHR3aWtvby5nZXRSZWNlbnRDb21tZW50cyh7XG4gICAgICAgIGVudklkOiAnd2Vic2l0ZS13aWtvby00ZzQ2azhkbzk4ODY3NTQyJywgLy8g546v5aKDIElEXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICBwYWdlU2l6ZTogcGFnZV9zaXplLCAvLyDojrflj5blpJrlsJHmnaHvvIzpu5jorqTvvJoxMO+8jOacgOWkp++8mjEwMFxuICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlIC8vIOaYr+WQpuWMheaLrOacgOaWsOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIG5ld19jb21tZW50c19sb2RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3X2NvbW1lbnRzX2xvZGluZycpO1xuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQgPSBuZXdfY29tbWVudHNfbG9kaW5nLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIG5ld19jb21tZW50c19sb2RpbmdfcGFyZW50LnJlbW92ZUNoaWxkKG5ld19jb21tZW50c19sb2RpbmcpO1xuICAgICAgICAvLyDmj5LlhaXor4TorrpcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7aTxwYWdlX3NpemU7IGkrKykge1xuICAgICAgICAgIGlmIChyZXNbaV0uY29tbWVudCkge1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19jb250ZW50ID0gcmVzW2ldLmNvbW1lbnQ7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX25pY2sgPSByZXNbaV0ubmljaztcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdXJsID0gcmVzW2ldLnVybDtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfYXZhdGFyID0gcmVzW2ldLmF2YXRhcjtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdGltZSA9IHJlc1tpXS5yZWxhdGl2ZVRpbWU7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2lkID0gJyMnICsgcmVzW2ldLmlkO1xuICAgIFxuICAgICAgICAgICAgdmFyIGhvdF9hcnRpY2xlc19jaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBob3RfYXJ0aWNsZXNfY2hpbGQuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJpdGVtX3VwXCI+PGltZyBzcmM9XCInICsgbmV3X2NvbW1lbnRzX2F2YXRhciArICdcIiBjbGFzcz1cImF2YXRhclwiPjxkaXYgY2xhc3M9XCJuaWNrX25hbWVcIj48c3BhbiBjbGFzcz1cIm5pY2tcIj4nICsgbmV3X2NvbW1lbnRzX25pY2sgKyAnPC9zcGFuPjxzcGFuIGNsYXNzPVwidGltZVwiPicgKyBuZXdfY29tbWVudHNfdGltZSArICc8L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cIml0ZW1fZG93blwiPjxhIGhyZWY9XCInICsgbmV3X2NvbW1lbnRzX3VybCArIG5ld19jb21tZW50c19pZCArICdcIj4nICsgbmV3X2NvbW1lbnRzX2NvbnRlbnQgKyAnPC9hPjwvZGl2Pic7XG4gICAgICAgICAgICBob3RfYXJ0aWNsZXMuYXBwZW5kKGhvdF9hcnRpY2xlc19jaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9LFxuICAvLyDliIfmjaLor4TorrpcbiAgc3dpdGNoX2NvbW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzd2l0Y2hfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N3aXRjaF9idG4nKTtcbiAgICB2YXIgdXR0ZXJhbmNlc19jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3V0dGVyYW5jZXNfY29tbWVudCcpO1xuICAgIHZhciB0d2lrb29fY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0d2lrb29fY29tbWVudCcpO1xuICAgIFxuICAgIHN3aXRjaF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgaWYodXR0ZXJhbmNlc19jb21tZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICB1dHRlcmFuY2VzX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGlmICghdXR0ZXJhbmNlc19jb21tZW50LmNoaWxkcmVuWzBdKSB7XG4gICAgICAgICAgICB2YXIgc2NyaXB0X3V0dGVyYW5jZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc3JjPVwiaHR0cHM6Ly91dHRlcmFuYy5lcy9jbGllbnQuanNcIiA7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJyZXBvXCIsXCJ3enRsaW5rMTAxMy9jb21tZW50XCIpO1xuICAgICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwiaXNzdWUtdGVybVwiLFwidGl0bGVcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJsYWJlbFwiLFwi8J+SrGNvbW1lbnRcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJ0aGVtZVwiLFwiZ2l0aHViLWxpZ2h0XCIpO1xuICAgICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwiY3Jvc3NvcmlnaW5cIixcImFub255bW91c1wiKTtcbiAgICAgICAgICAgIHV0dGVyYW5jZXNfY29tbWVudC5hcHBlbmRDaGlsZChzY3JpcHRfdXR0ZXJhbmNlcyk7IFxuICAgICAgICB9XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHV0dGVyYW5jZXNfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0d2lrb29fY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblxuXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICDnvJPmhaLmmL7npLpcbiAgICAgICAg57yT5oWi5Zue5Yiw6aG26YOoXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gbGV0IGdvX3RvcF9vYmplY3QgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ29fdG9wKCk7XG4gICAgICAgIHRoaXMuY2xpY2tfZ29fdG9wKCk7XG4gICAgfSxcbiAgICBnb190b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIOa7muWKqOaYvuekumdvX3RvcOaMiemSrlxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIC8vIOaMgee7reebkeWQrOa7muWKqOeKtuaAgVxuICAgICAgICAgICAgZ2V0U2Nyb2xsKCkudG9wICE9PSAwID8gJChcIiNnb190b3BcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpIDogJChcIiNnb190b3BcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIGNsaWNrX2dvX3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOeCueWHu+WbnuWIsOmhtumDqFxuICAgICAgICAkKFwiI2dvX3RvcFwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbi8vIHNjcm9vbFRvcOWFvOWuueaAp+aWueahiFxuZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xuICAgIHJldHVybiB7XG4gICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdHx8MCxcbiAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDBcbiAgICB9O1xufVxuXG5cbi8vIOWmguaenOS4jeWBmum7mOiupOWvvOWFpe+8jOWwseaMieeFp+S4i+mdouWGme+8jOS4jeimgWRlZmF1bHTor41cbmV4cG9ydCB7XG4gICAgZ29fdG9wX29iamVjdCwgLy/lr7zlh7rlr7nosaFcbiAgICBnZXRTY3JvbGwsIC8v5a+85Ye66YCa55So5Ye95pWwXG59XG5cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH0sXG4gICAgc2VhcmNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGlucHV0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWlucHV0XCIpO1xuXG4gICAgICAgIGlmIChpbnB1dEFyZWEpIHtcbiAgICAgICAgICAgIGlucHV0QXJlYS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbnB1dEFyZWEucGxhY2Vob2xkZXIgPSAn6aaW5qyh5pCc57SiaW5nwrfCt8K3JztcbiAgICAgICAgICAgICAgICBnZXRTZWFyY2hGaWxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbmNsaWNrID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlucHV0QXJlYS5vbmtleWRvd24gPSBmdW5jdGlvbigpIHsgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHJldHVybiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBjbGVhclNlYXJjaCgkcmVzdWx0Q29udGVudCkge1xuICAgICAgICAgICAgLy8gY2xlYXIgc2VhcmNoIHJlc3VsdFxuICAgICAgICAgICAgdmFyIGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1zZWFyY2gtY2xvc2VcIik7XG4gICAgICAgICAgICBidG5DbG9zZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRBcmVhLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9ICfor7fovpPlhaXlhbPplK7or40nO1xuICAgICAgICAgICAgICAgIGlucHV0QXJlYS5mb2N1cygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIHNlYXJjaEZ1bmMgPSBmdW5jdGlvbihwYXRoLCBzZWFyY2hfaWQsIGNvbnRlbnRfaWQpIHtcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgICAgIHZhciBCVE4gPSBcIjxkaXYgaWQ9J2xvY2FsLXNlYXJjaC1jbG9zZSc+5riF56m65pCc57SiPC9kaXY+XCJcbiAgICAgICAgICAgIHZhciAkaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWFyY2hfaWQpO1xuICAgICAgICAgICAgdmFyICRyZXN1bHRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudF9pZCk7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdW1lIGlucHV0XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQucGxhY2Vob2xkZXIgPSAn6L6T5YWl5YWz6ZSu6K+N5Lul5pCc57SiJztcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LmZvY3VzKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgeG1sID0geGhyLnJlc3BvbnNlWE1MO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm9vdCA9IHhtbC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gcm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImVudHJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGl0bGVcIilbMF0uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjb250ZW50XCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1cmxcIilbMF0uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSAnPHVsIGNsYXNzPVxcXCJhcmNoaXZlXFxcIj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXdvcmRzID0gdGhpcy52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKS5zcGxpdCgvW1xcc1xcLV0rLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUudHJpbSgpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacrOWcsOaQnOe0ouS4u+S7o+eggVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50X2luZGV4ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLnRpdGxlIHx8IGRhdGEudGl0bGUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRpdGxlID0gXCJVbnRpdGxlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ19kYXRhX3RpdGxlID0gZGF0YS50aXRsZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfdGl0bGUgPSBvcmlnX2RhdGFfdGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ19kYXRhX2NvbnRlbnQgPSBkYXRhLmNvbnRlbnQudHJpbSgpLnJlcGxhY2UoLzxbXj5dKz4vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfY29udGVudCA9IG9yaWdfZGF0YV9jb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFfdXJsID0gZGF0YS51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4X3RpdGxlID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4X2NvbnRlbnQgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3Rfb2NjdXIgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IG1hdGNoIGFydGlsZXMgd2l0aCBub3QgZW1wdHkgY29udGVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YV9jb250ZW50ICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4X3RpdGxlID0gZGF0YV90aXRsZS5pbmRleE9mKGtleXdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfY29udGVudCA9IGRhdGFfY29udGVudC5pbmRleE9mKGtleXdvcmQpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleF90aXRsZSA8IDAgJiYgaW5kZXhfY29udGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleF9jb250ZW50IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleF9jb250ZW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9vY2N1ciA9IGluZGV4X2NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnRfaW5kZXgucHVzaCh7aW5kZXhfY29udGVudDppbmRleF9jb250ZW50LCBrZXl3b3JkX2xlbjprZXl3b3JkX2xlbn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWxleekuue7k+aenFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IOW+heWujOWWhO+8jOW+heWujOWWhFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8bGk+PGEgaHJlZj0nXCIgK2xvY2F0aW9uLnByb3RvY29sK1wiLy9cIitsb2NhdGlvbi5ob3N0K1wiL1wiKyBkYXRhX3VybCArIFwiJyBjbGFzcz0nYXJjaGl2ZS10aXRsZSc+XCIgKyBvcmlnX2RhdGFfdGl0bGUgKyBcIjwvYT5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBvcmlnX2RhdGFfY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0X29jY3VyID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1dCBvdXQgMTAwIGNoYXJhY3RlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGZpcnN0X29jY3VyIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kID0gZmlyc3Rfb2NjdXIgKyAzMDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gNDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZCA+IGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gY29udGVudC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaF9jb250ZW50ID0gY29udGVudC5zdWJzdHIoc3RhcnQsIDEwMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IGFsbCBrZXl3b3Jkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ1MgPSBuZXcgUmVnRXhwKGtleXdvcmQsIFwiZ2lcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hfY29udGVudCA9IG1hdGNoX2NvbnRlbnQucmVwbGFjZShyZWdTLCBcIjxlbSBjbGFzcz1cXFwic2VhcmNoLWtleXdvcmRcXFwiPlwiICsga2V5d29yZCArIFwiPC9lbT5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8cCBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCI+XCIgKyBtYXRjaF9jb250ZW50ICsgXCIuLi48L3A+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCI8L2xpPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9IFwiPC91bD5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZignPGxpPicpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IEJUTiArIFwiPGRpdiBjbGFzcz0nbG9jYWwtc2VhcmNoLWVtcHR5Jz7msqHmnInmib7liLDkvaDmiYDopoHmkJzntKLnmoTlhoXlrrnigKbigKY8L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gQlROICsgc3RyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdmFyIGdldFNlYXJjaEZpbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBwYXRoID0gXCIvc2VhcmNoLnhtbFwiO1xuICAgICAgICAgICAgc2VhcmNoRnVuYyhwYXRoLCAnbG9jYWwtc2VhcmNoLWlucHV0JywgJ2xvY2FsLXNlYXJjaC1yZXN1bHQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIOWFqOWxgOaMiemSruiuvue9rmpz5piv5ZCm5bGV56S65pCc57Si5qGGXG4gICAgICAgIHZhciBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoX2J0bicpO1xuICAgICAgICBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWwtc2VhcmNoLWlucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdmFyIHNlYXJjaF9jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfY2xvc2UnKTtcbiAgICAgICAgc2VhcmNoX2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX2JveCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfYm94Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnRvY19idG4oKTtcbiAgICB9LFxuICAgIHRvY19idG46IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdG9jX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2NfY29udGFpbmVyJyk7XG4gICAgICAgIGxldCB0b2NfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvY19idG4nKTtcbiAgICAgICAgJCh0b2NfYnRuKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgdG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9jX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKXtcbiAgICAgICAgICAgICAgICB0b2NfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvY19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cblxuXG5cbiIsImxldCB3ZWJfaW5mb19ydW50aW1lID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBCaXJ0aERheSA9IG5ldyBEYXRlKG5ldyBEYXRlKCcyMDIwLzAxLzA0JykpO1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRpbWVvbGQgPSAodG9kYXkuZ2V0VGltZSgpIC0gQmlydGhEYXkuZ2V0VGltZSgpKTtcbiAgICBsZXQgZGF5c29sZCA9IE1hdGguZmxvb3IodGltZW9sZCAvICgyNCAqIDYwICogNjAgKiAxMDAwKSk7XG4gICAgJChcIiN3ZWJpbmZvX3J1bnRpbWVfY291bnRcIikuaHRtbChkYXlzb2xkICsgXCI8c3Bhbj7lpKk8L3NwYW4+XCIpOy8v5bWM5YWl5aSx6LSl77yM5oiR5Lmf5LiN55+l6YGT5Li65LuA5LmI4oCm4oCmXG59XG5cblxuXG5leHBvcnQge1xuICAgIHdlYl9pbmZvX3J1bnRpbWUsXG59XG4iXX0=
