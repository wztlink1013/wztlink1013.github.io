(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Comment = /*#__PURE__*/function () {
  function Comment() {
    _classCallCheck(this, Comment);

    twikoo.init({
      envId: "https://twikoo.wztlink1013.com/",
      el: "#tcomment",
      // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
      // path: 'window.location.pathname', // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
      // 评论加载成功后的回调函数。
      // 发表评论后自动刷新评论时、加载下一页评论时，也会触发。
      // 评论加载失败时不会触发。
      onCommentLoaded: function onCommentLoaded() {
        console.log("Twikoo: all comments loaded");
      }
    }).then(function () {
      // Twikoo 成功挂载后的回调函数。环境 ID 错误、网络异常、挂载失败等情况时不会触发。
      console.log("Twikoo: mount finished");
    });
  }

  _createClass(Comment, [{
    key: "init",
    value: function init() {
      goCommentArea();
      giscusMessage();
      twikooCount();
      twikooNewComments();
      switchComment();
    }
  }]);

  return Comment;
}(); // 右下角按钮事件 是否前往评论区


exports["default"] = Comment;

var goCommentArea = function goCommentArea() {
  // TODO: 监听url是否有参数 时刻监听到评论区
  if (document.querySelector("#comments")) {
    document.querySelector("#go_comments").style.display = "block";
  }
};

var giscusMessage = function giscusMessage() {
  function handleMessage(event) {
    if (event.origin !== "https://giscus.wztlink1013.com") return;
    if (!(_typeof(event.data) === "object" && event.data.giscus)) return;
    var giscusData = event.data.giscus;
    console.log("Giscus: iframe comment data", giscusData); // Do whatever you want with it, e.g. `console.log(giscusData)`.
    // You'll need to make sure that `giscusData` contains the message you're
    // expecting, e.g. by using `if ('discussion' in giscusData)`.
  }

  window.addEventListener("message", handleMessage);
  console.log("Giscus: message logic"); // Some time later...

  window.removeEventListener("message", handleMessage);
}; // 文章评论数


var twikooCount = function twikooCount() {
  // 判断页面是否有评论区id和引用评论数的id
  if (document.querySelector("#comments") && document.querySelector("#twikoo_comments")) {
    var twikoo_comments = document.querySelector("#twikoo_comments"); // BOM获取页面url的pathname路径

    var twikoo_comments_url = [location.pathname];
    twikoo.getCommentsCount({
      envId: "https://twikoo.wztlink1013.com/",
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
}; // 最新评论


var twikooNewComments = function twikooNewComments() {
  var hot_articles = document.querySelector(".hot_articles_item");
  var page_size = 8;
  twikoo.getRecentComments({
    envId: "https://twikoo.wztlink1013.com/",
    // 环境 ID
    // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
    pageSize: page_size,
    // 获取多少条，默认：10，最大：100
    includeReply: false // 是否包括最新回复，默认：false

  }).then(function (res) {
    var new_comments_loding = document.querySelector(".new_comments_loding");
    var new_comments_loding_parent = new_comments_loding.parentElement;
    new_comments_loding_parent.removeChild(new_comments_loding); // 插入评论

    for (var i = 0; i < page_size; i++) {
      if (res[i].comment) {
        var new_comments_content = res[i].comment;
        var new_comments_nick = res[i].nick;
        var new_comments_url = res[i].url;
        var new_comments_avatar = res[i].avatar;
        var new_comments_time = res[i].relativeTime;
        var new_comments_id = "#" + res[i].id;
        var hot_articles_child = document.createElement("li");
        hot_articles_child.innerHTML = '<div class="item_up"><img src="' + new_comments_avatar + '" class="avatar"><div class="nick_name"><span class="nick">' + new_comments_nick + '</span><span class="time">' + new_comments_time + '</span></div></div><div class="item_down"><a href="' + new_comments_url + new_comments_id + '">' + new_comments_content + "</a></div>";
        hot_articles.append(hot_articles_child);
      }
    }
  })["catch"](function (err) {
    console.error(err);
  });
}; // 切换评论(评论组件存在时)


var switchComment = function switchComment() {
  if (document.querySelector("#switch_btn")) {
    var switch_btn = document.querySelector("#switch_btn");
    var github_comment = document.querySelector("#github_comment");
    var twikoo_comment = document.querySelector("#twikoo_comment");
    switch_btn.addEventListener("click", function () {
      switch_btn.classList.toggle("move");
      github_comment.classList.toggle("content-in");
      twikoo_comment.classList.toggle("content-in");

      if (github_comment.style.display === "none") {
        github_comment.style.display = "block";
        twikoo_comment.style.display = "none";
      } else {
        // Twikoo 评论系统
        github_comment.style.display = "none";
        twikoo_comment.style.display = "block";
      }
    });
  }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L0NvbW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBcUIsTztFQUNuQixtQkFBYztJQUFBOztJQUNaLE1BQU0sQ0FDSCxJQURILENBQ1E7TUFDSixLQUFLLEVBQUUsaUNBREg7TUFFSixFQUFFLEVBQUUsV0FGQTtNQUdKO01BQ0E7TUFFQTtNQUNBO01BQ0E7TUFDQSxlQUFlLEVBQUUsMkJBQVk7UUFDM0IsT0FBTyxDQUFDLEdBQVIsQ0FBWSw2QkFBWjtNQUNEO0lBWEcsQ0FEUixFQWNHLElBZEgsQ0FjUSxZQUFZO01BQ2hCO01BQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSx3QkFBWjtJQUNELENBakJIO0VBa0JEOzs7O1dBQ0QsZ0JBQU87TUFDTCxhQUFhO01BQ2IsYUFBYTtNQUNiLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsYUFBYTtJQUNkOzs7O0tBRUg7Ozs7O0FBQ0EsSUFBTSxhQUFhLEdBQUcsU0FBaEIsYUFBZ0IsR0FBTTtFQUMxQjtFQUNBLElBQUksUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBSixFQUF5QztJQUN2QyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixFQUF1QyxLQUF2QyxDQUE2QyxPQUE3QyxHQUF1RCxPQUF2RDtFQUNEO0FBQ0YsQ0FMRDs7QUFNQSxJQUFNLGFBQWEsR0FBRyxTQUFoQixhQUFnQixHQUFNO0VBQzFCLFNBQVMsYUFBVCxDQUF1QixLQUF2QixFQUE4QjtJQUM1QixJQUFJLEtBQUssQ0FBQyxNQUFOLEtBQWlCLGdDQUFyQixFQUF1RDtJQUN2RCxJQUFJLEVBQUUsUUFBTyxLQUFLLENBQUMsSUFBYixNQUFzQixRQUF0QixJQUFrQyxLQUFLLENBQUMsSUFBTixDQUFXLE1BQS9DLENBQUosRUFBNEQ7SUFFNUQs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L0I7UUFDQSxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixHQUErQixPQUEvQjtNQUNEO0lBQ0YsQ0FiRDtFQWNEO0FBQ0YsQ0FyQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdHdpa29vXG4gICAgICAuaW5pdCh7XG4gICAgICAgIGVudklkOiBcImh0dHBzOi8vdHdpa29vLnd6dGxpbmsxMDEzLmNvbS9cIixcbiAgICAgICAgZWw6IFwiI3Rjb21tZW50XCIsXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICAvLyBwYXRoOiAnd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lJywgLy8g55So5LqO5Yy65YiG5LiN5ZCM5paH56ug55qE6Ieq5a6a5LmJIGpzIOi3r+W+hO+8jOWmguaenOaCqOeahOaWh+eroOi3r+W+hOS4jeaYryBsb2NhdGlvbi5wYXRobmFtZe+8jOmcgOS8oOatpOWPguaVsFxuXG4gICAgICAgIC8vIOivhOiuuuWKoOi9veaIkOWKn+WQjueahOWbnuiwg+WHveaVsOOAglxuICAgICAgICAvLyDlj5Hooajor4TorrrlkI7oh6rliqjliLfmlrDor4Torrrml7bjgIHliqDovb3kuIvkuIDpobXor4Torrrml7bvvIzkuZ/kvJrop6blj5HjgIJcbiAgICAgICAgLy8g6K+E6K665Yqg6L295aSx6LSl5pe25LiN5Lya6Kem5Y+R44CCXG4gICAgICAgIG9uQ29tbWVudExvYWRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHdpa29vOiBhbGwgY29tbWVudHMgbG9hZGVkXCIpO1xuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVHdpa29vIOaIkOWKn+aMgui9veWQjueahOWbnuiwg+WHveaVsOOAgueOr+WigyBJRCDplJnor6/jgIHnvZHnu5zlvILluLjjgIHmjILovb3lpLHotKXnrYnmg4XlhrXml7bkuI3kvJrop6blj5HjgIJcbiAgICAgICAgY29uc29sZS5sb2coXCJUd2lrb286IG1vdW50IGZpbmlzaGVkXCIpO1xuICAgICAgfSk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICBnb0NvbW1lbnRBcmVhKCk7XG4gICAgZ2lzY3VzTWVzc2FnZSgpO1xuICAgIHR3aWtvb0NvdW50KCk7XG4gICAgdHdpa29vTmV3Q29tbWVudHMoKTtcbiAgICBzd2l0Y2hDb21tZW50KCk7XG4gIH1cbn1cbi8vIOWPs+S4i+inkuaMiemSruS6i+S7tiDmmK/lkKbliY3lvoDor4TorrrljLpcbmNvbnN0IGdvQ29tbWVudEFyZWEgPSAoKSA9PiB7XG4gIC8vIFRPRE86IOebkeWQrHVybOaYr+WQpuacieWPguaVsCDml7bliLvnm5HlkKzliLDor4TorrrljLpcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tbWVudHNcIikpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dvX2NvbW1lbnRzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cbn07XG5jb25zdCBnaXNjdXNNZXNzYWdlID0gKCkgPT4ge1xuICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50Lm9yaWdpbiAhPT0gXCJodHRwczovL2dpc2N1cy53enRsaW5rMTAxMy5jb21cIikgcmV0dXJuO1xuICAgIGlmICghKHR5cGVvZiBldmVudC5kYXRhID09PSBcIm9iamVjdFwiICYmIGV2ZW50LmRhdGEuZ2lzY3VzKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZ2lzY3VzRGF0YSA9IGV2ZW50LmRhdGEuZ2lzY3VzO1xuICAgIGNvbnNvbGUubG9nKFwiR2lzY3VzOiBpZnJhbWUgY29tbWVudCBkYXRhXCIsIGdpc2N1c0RhdGEpO1xuICAgIC8vIERvIHdoYXRldmVyIHlvdSB3YW50IHdpdGggaXQsIGUuZy4gYGNvbnNvbGUubG9nKGdpc2N1c0RhdGEpYC5cbiAgICAvLyBZb3UnbGwgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCBgZ2lzY3VzRGF0YWAgY29udGFpbnMgdGhlIG1lc3NhZ2UgeW91J3JlXG4gICAgLy8gZXhwZWN0aW5nLCBlLmcuIGJ5IHVzaW5nIGBpZiAoJ2Rpc2N1c3Npb24nIGluIGdpc2N1c0RhdGEpYC5cbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBoYW5kbGVNZXNzYWdlKTtcbiAgY29uc29sZS5sb2coXCJHaXNjdXM6IG1lc3NhZ2UgbG9naWNcIik7XG4gIC8vIFNvbWUgdGltZSBsYXRlci4uLlxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgaGFuZGxlTWVzc2FnZSk7XG59O1xuLy8g5paH56ug6K+E6K665pWwXG5jb25zdCB0d2lrb29Db3VudCA9ICgpID0+IHtcbiAgLy8g5Yik5pat6aG16Z2i5piv5ZCm5pyJ6K+E6K665Yy6aWTlkozlvJXnlKjor4TorrrmlbDnmoRpZFxuICBpZiAoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21tZW50c1wiKSAmJlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHdpa29vX2NvbW1lbnRzXCIpXG4gICkge1xuICAgIHZhciB0d2lrb29fY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R3aWtvb19jb21tZW50c1wiKTtcbiAgICAvLyBCT03ojrflj5bpobXpnaJ1cmznmoRwYXRobmFtZei3r+W+hFxuICAgIHZhciB0d2lrb29fY29tbWVudHNfdXJsID0gW2xvY2F0aW9uLnBhdGhuYW1lXTtcblxuICAgIHR3aWtvb1xuICAgICAgLmdldENvbW1lbnRzQ291bnQoe1xuICAgICAgICBlbnZJZDogXCJodHRwczovL3R3aWtvby53enRsaW5rMTAxMy5jb20vXCIsIC8vIOeOr+WigyBJRFxuICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgdXJsczogdHdpa29vX2NvbW1lbnRzX3VybCwgLy8g5LiN5YyF5ZCr5Y2P6K6u44CB5Z+f5ZCN44CB5Y+C5pWw55qE5paH56ug6Lev5b6E5YiX6KGo77yM5b+F5Lyg5Y+C5pWwXG4gICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UsIC8vIOivhOiuuuaVsOaYr+WQpuWMheaLrOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAvLyDlsIbor4TorrrmlbDlhpnlhaXlhbbkuK1cbiAgICAgICAgdHdpa29vX2NvbW1lbnRzLmlubmVyVGV4dCA9IHJlc1swXS5jb3VudDtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgLy8g6L+U5Zue56S65L6LOiBbXG4gICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMC9wb3N0LTEuaHRtbCcsIGNvdW50OiAxMCB9LFxuICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTEvcG9zdC0yLmh0bWwnLCBjb3VudDogMCB9LFxuICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTIvcG9zdC0zLmh0bWwnLCBjb3VudDogMjAgfVxuICAgICAgICAvLyBdXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgLy8g5Y+R55Sf6ZSZ6K+vXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9XG59O1xuLy8g5pyA5paw6K+E6K66XG5jb25zdCB0d2lrb29OZXdDb21tZW50cyA9ICgpID0+IHtcbiAgdmFyIGhvdF9hcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG90X2FydGljbGVzX2l0ZW1cIik7XG4gIHZhciBwYWdlX3NpemUgPSA4O1xuICB0d2lrb29cbiAgICAuZ2V0UmVjZW50Q29tbWVudHMoe1xuICAgICAgZW52SWQ6IFwiaHR0cHM6Ly90d2lrb28ud3p0bGluazEwMTMuY29tL1wiLCAvLyDnjq/looMgSURcbiAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgcGFnZVNpemU6IHBhZ2Vfc2l6ZSwgLy8g6I635Y+W5aSa5bCR5p2h77yM6buY6K6k77yaMTDvvIzmnIDlpKfvvJoxMDBcbiAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UsIC8vIOaYr+WQpuWMheaLrOacgOaWsOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3X2NvbW1lbnRzX2xvZGluZ1wiKTtcbiAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudCA9IG5ld19jb21tZW50c19sb2RpbmcucGFyZW50RWxlbWVudDtcbiAgICAgIG5ld19jb21tZW50c19sb2RpbmdfcGFyZW50LnJlbW92ZUNoaWxkKG5ld19jb21tZW50c19sb2RpbmcpO1xuICAgICAgLy8g5o+S5YWl6K+E6K66XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2Vfc2l6ZTsgaSsrKSB7XG4gICAgICAgIGlmIChyZXNbaV0uY29tbWVudCkge1xuICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfY29udGVudCA9IHJlc1tpXS5jb21tZW50O1xuICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfbmljayA9IHJlc1tpXS5uaWNrO1xuICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdXJsID0gcmVzW2ldLnVybDtcbiAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2F2YXRhciA9IHJlc1tpXS5hdmF0YXI7XG4gICAgICAgICAgdmFyIG5ld19jb21tZW50c190aW1lID0gcmVzW2ldLnJlbGF0aXZlVGltZTtcbiAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2lkID0gXCIjXCIgKyByZXNbaV0uaWQ7XG5cbiAgICAgICAgICB2YXIgaG90X2FydGljbGVzX2NoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgIGhvdF9hcnRpY2xlc19jaGlsZC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpdGVtX3VwXCI+PGltZyBzcmM9XCInICtcbiAgICAgICAgICAgIG5ld19jb21tZW50c19hdmF0YXIgK1xuICAgICAgICAgICAgJ1wiIGNsYXNzPVwiYXZhdGFyXCI+PGRpdiBjbGFzcz1cIm5pY2tfbmFtZVwiPjxzcGFuIGNsYXNzPVwibmlja1wiPicgK1xuICAgICAgICAgICAgbmV3X2NvbW1lbnRzX25pY2sgK1xuICAgICAgICAgICAgJzwvc3Bhbj48c3BhbiBjbGFzcz1cInRpbWVcIj4nICtcbiAgICAgICAgICAgIG5ld19jb21tZW50c190aW1lICtcbiAgICAgICAgICAgICc8L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cIml0ZW1fZG93blwiPjxhIGhyZWY9XCInICtcbiAgICAgICAgICAgIG5ld19jb21tZW50c191cmwgK1xuICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2lkICtcbiAgICAgICAgICAgICdcIj4nICtcbiAgICAgICAgICAgIG5ld19jb21tZW50c19jb250ZW50ICtcbiAgICAgICAgICAgIFwiPC9hPjwvZGl2PlwiO1xuICAgICAgICAgIGhvdF9hcnRpY2xlcy5hcHBlbmQoaG90X2FydGljbGVzX2NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9KTtcbn07XG4vLyDliIfmjaLor4Torroo6K+E6K6657uE5Lu25a2Y5Zyo5pe2KVxuY29uc3Qgc3dpdGNoQ29tbWVudCA9ICgpID0+IHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoX2J0blwiKSkge1xuICAgIHZhciBzd2l0Y2hfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2hfYnRuXCIpO1xuICAgIHZhciBnaXRodWJfY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2l0aHViX2NvbW1lbnRcIik7XG4gICAgdmFyIHR3aWtvb19jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0d2lrb29fY29tbWVudFwiKTtcblxuICAgIHN3aXRjaF9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHN3aXRjaF9idG4uY2xhc3NMaXN0LnRvZ2dsZShcIm1vdmVcIik7XG4gICAgICBnaXRodWJfY29tbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29udGVudC1pblwiKTtcbiAgICAgIHR3aWtvb19jb21tZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb250ZW50LWluXCIpO1xuXG4gICAgICBpZiAoZ2l0aHViX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgZ2l0aHViX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHdpa29vIOivhOiuuuezu+e7n1xuICAgICAgICBnaXRodWJfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG4iXX0=
