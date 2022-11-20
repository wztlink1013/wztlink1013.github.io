(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
    this.giscus_comment();
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
  },
  // 右下角按钮事件 是否前往评论区
  go_comments: function go_comments() {
    if (document.querySelector("#comments")) {
      document.querySelector("#go_comments").style.display = "block";
    }
  },
  giscus_comment: function giscus_comment() {
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
  },
  // 文章评论数
  comments_count: function comments_count() {
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
  },
  // 最新评论
  new_comments: function new_comments() {
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
  },
  // 切换评论(评论组件存在时)
  switch_comment: function switch_comment() {
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
  }
};
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO2VBQ2U7RUFDYixJQUFJLEVBQUUsZ0JBQVk7SUFDaEIsS0FBSyxXQUFMO0lBQ0EsS0FBSyxjQUFMO0lBQ0EsS0FBSyxZQUFMO0lBQ0EsS0FBSyxjQUFMO0lBQ0EsS0FBSyxjQUFMO0lBQ0EsTUFBTSxDQUNILElBREgsQ0FDUTtNQUNKLEtBQUssRUFBRSxpQ0FESDtNQUVKLEVBQUUsRUFBRSxXQUZBO01BR0o7TUFDQTtNQUVBO01BQ0E7TUFDQTtNQUNBLGVBQWUsRUFBRSwyQkFBWTtRQUMzQixPQUFPLENBQUMsR0FBUixDQUFZLDZCQUFaO01BQ0Q7SUFYRyxDQURSLEVBY0csSUFkSCxDQWNRLFlBQVk7TUFDaEI7TUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLHdCQUFaO0lBQ0QsQ0FqQkg7RUFrQkQsQ0F6Qlk7RUEwQmI7RUFDQSxXQUFXLEVBQUUsdUJBQVk7SUFDdkIsSUFBSSxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixDQUFKLEVBQXlDO01BQ3ZDLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDLEtBQXZDLENBQTZDLE9BQTdDLEdBQXVELE9BQXZEO0lBQ0Q7RUFDRixDQS9CWTtFQWdDYixjQUFjLEVBQUUsMEJBQVk7SUFDMUIsU0FBUyxhQUFULENBQXVCLEtBQXZCLEVBQThCO01BQzVCLElBQUksS0FBSyxDQUFDLE1BQU4sS0FBaUIsZ0NBQXJCLEVBQXVEO01BQ3ZELElBQUksRUFBRSxRQUFPLEtBQUssQ0FBQyxJQUFiLE1BQXNCLFFBQXRCLElBQWtDLEtBQUss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Q0FBcUIsT0FBckIsR0FBK0IsT0FBL0I7UUFDRDtNQUNGLENBYkQ7SUFjRDtFQUNGO0FBMUpZLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxu44CQ5paH56ug6K6/6Zeu6YeP5o6S5ZCN44CRXG4gICAg5paH56ug6ZiF6K+76YeP5Zyo5Y2V5Liq5paH56ug5Lit5Y+v5Lul5pi+56S65L2G5piv5LiN6IO95o6S5ZCN77yM5o6S5ZCN5oCO5LmI5a6e546w5ZGi77yfXG4gICAg5pa55qGIMe+8muS9v+eUqHZhbGluZVxuICAgIOaWueahiDLvvJrlnKjmnI3liqHlmajkuIrov5vooYzlhajnq5nnmoTmlofnq6Dorr/pl67vvIzmj5Dlj5bku5bku6znmoTorr/pl67ph49pZFxuICAgIOaWueahiDPvvJrlr7l0d2lrb2/kupHlh73mlbDov5vooYzku6PnoIHmm7TmlLnvvIznsbvkvLzorr/pl67ph49hcGlcbiBcbuOAkOivhOiuuuWIh+aNouaMiemSruOAkVxuICAgIOWIh+aNonV0dGVyYW5jZXPor4TorrrlkI7vvIzpobXpnaLkvJrliLfmlrDkuIDkuIvnhLblkI7lj4jlm57liLDpu5jorqTor4Torrrns7vnu5/kuobvvIzov5nkuKrlj6/ku6XkvJjljJZcblxu44CQ5pyA5paw6K+E6K6644CRXG4gICAg5pyA5paw6K+E6K6657uE5Lu277yM5aaC5p6cYmxvZ+mhtemdoueUqOS6hu+8jOmCo+S5iOi/meS4que7hOS7tuWwseS4jeiDveaUvuWcqOenu+WKqOerr+S+p+i+ueagj+S6hu+8jFxuICAgIOWQjOS4gOS4qmlk5LiN6IO95aSa5qyh55So55qE57yY5pWF5ZCX77yfXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyDlr7zlh7rkuLrkuIDkuKrlr7nosaFcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ29fY29tbWVudHMoKTtcbiAgICB0aGlzLmNvbW1lbnRzX2NvdW50KCk7XG4gICAgdGhpcy5uZXdfY29tbWVudHMoKTtcbiAgICB0aGlzLnN3aXRjaF9jb21tZW50KCk7XG4gICAgdGhpcy5naXNjdXNfY29tbWVudCgpO1xuICAgIHR3aWtvb1xuICAgICAgLmluaXQoe1xuICAgICAgICBlbnZJZDogXCJodHRwczovL3R3aWtvby53enRsaW5rMTAxMy5jb20vXCIsXG4gICAgICAgIGVsOiBcIiN0Y29tbWVudFwiLFxuICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgLy8gcGF0aDogJ3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZScsIC8vIOeUqOS6juWMuuWIhuS4jeWQjOaWh+eroOeahOiHquWumuS5iSBqcyDot6/lvoTvvIzlpoLmnpzmgqjnmoTmlofnq6Dot6/lvoTkuI3mmK8gbG9jYXRpb24ucGF0aG5hbWXvvIzpnIDkvKDmraTlj4LmlbBcblxuICAgICAgICAvLyDor4TorrrliqDovb3miJDlip/lkI7nmoTlm57osIPlh73mlbDjgIJcbiAgICAgICAgLy8g5Y+R6KGo6K+E6K665ZCO6Ieq5Yqo5Yi35paw6K+E6K665pe244CB5Yqg6L295LiL5LiA6aG16K+E6K665pe277yM5Lmf5Lya6Kem5Y+R44CCXG4gICAgICAgIC8vIOivhOiuuuWKoOi9veWksei0peaXtuS4jeS8muinpuWPkeOAglxuICAgICAgICBvbkNvbW1lbnRMb2FkZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlR3aWtvbzogYWxsIGNvbW1lbnRzIGxvYWRlZFwiKTtcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFR3aWtvbyDmiJDlip/mjILovb3lkI7nmoTlm57osIPlh73mlbDjgILnjq/looMgSUQg6ZSZ6K+v44CB572R57uc5byC5bi444CB5oyC6L295aSx6LSl562J5oOF5Ya15pe25LiN5Lya6Kem5Y+R44CCXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHdpa29vOiBtb3VudCBmaW5pc2hlZFwiKTtcbiAgICAgIH0pO1xuICB9LFxuICAvLyDlj7PkuIvop5LmjInpkq7kuovku7Yg5piv5ZCm5YmN5b6A6K+E6K665Yy6XG4gIGdvX2NvbW1lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tbWVudHNcIikpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ29fY29tbWVudHNcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gIH0sXG4gIGdpc2N1c19jb21tZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgICAgaWYgKGV2ZW50Lm9yaWdpbiAhPT0gXCJodHRwczovL2dpc2N1cy53enRsaW5rMTAxMy5jb21cIikgcmV0dXJuO1xuICAgICAgaWYgKCEodHlwZW9mIGV2ZW50LmRhdGEgPT09IFwib2JqZWN0XCIgJiYgZXZlbnQuZGF0YS5naXNjdXMpKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGdpc2N1c0RhdGEgPSBldmVudC5kYXRhLmdpc2N1cztcbiAgICAgIGNvbnNvbGUubG9nKFwiR2lzY3VzOiBpZnJhbWUgY29tbWVudCBkYXRhXCIsIGdpc2N1c0RhdGEpO1xuICAgICAgLy8gRG8gd2hhdGV2ZXIgeW91IHdhbnQgd2l0aCBpdCwgZS5nLiBgY29uc29sZS5sb2coZ2lzY3VzRGF0YSlgLlxuICAgICAgLy8gWW91J2xsIG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYGdpc2N1c0RhdGFgIGNvbnRhaW5zIHRoZSBtZXNzYWdlIHlvdSdyZVxuICAgICAgLy8gZXhwZWN0aW5nLCBlLmcuIGJ5IHVzaW5nIGBpZiAoJ2Rpc2N1c3Npb24nIGluIGdpc2N1c0RhdGEpYC5cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgaGFuZGxlTWVzc2FnZSk7XG4gICAgY29uc29sZS5sb2coXCJHaXNjdXM6IG1lc3NhZ2UgbG9naWNcIik7XG4gICAgLy8gU29tZSB0aW1lIGxhdGVyLi4uXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGhhbmRsZU1lc3NhZ2UpO1xuICB9LFxuICAvLyDmlofnq6Dor4TorrrmlbBcbiAgY29tbWVudHNfY291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyDliKTmlq3pobXpnaLmmK/lkKbmnInor4TorrrljLppZOWSjOW8leeUqOivhOiuuuaVsOeahGlkXG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21tZW50c1wiKSAmJlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0d2lrb29fY29tbWVudHNcIilcbiAgICApIHtcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R3aWtvb19jb21tZW50c1wiKTtcbiAgICAgIC8vIEJPTeiOt+WPlumhtemdonVybOeahHBhdGhuYW1l6Lev5b6EXG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzX3VybCA9IFtsb2NhdGlvbi5wYXRobmFtZV07XG5cbiAgICAgIHR3aWtvb1xuICAgICAgICAuZ2V0Q29tbWVudHNDb3VudCh7XG4gICAgICAgICAgZW52SWQ6IFwiaHR0cHM6Ly90d2lrb28ud3p0bGluazEwMTMuY29tL1wiLCAvLyDnjq/looMgSURcbiAgICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgICB1cmxzOiB0d2lrb29fY29tbWVudHNfdXJsLCAvLyDkuI3ljIXlkKvljY/orq7jgIHln5/lkI3jgIHlj4LmlbDnmoTmlofnq6Dot6/lvoTliJfooajvvIzlv4XkvKDlj4LmlbBcbiAgICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlLCAvLyDor4TorrrmlbDmmK/lkKbljIXmi6zlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgLy8g5bCG6K+E6K665pWw5YaZ5YWl5YW25LitXG4gICAgICAgICAgdHdpa29vX2NvbW1lbnRzLmlubmVyVGV4dCA9IHJlc1swXS5jb3VudDtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgIC8vIOi/lOWbnuekuuS+izogW1xuICAgICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMC9wb3N0LTEuaHRtbCcsIGNvdW50OiAxMCB9LFxuICAgICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMS9wb3N0LTIuaHRtbCcsIGNvdW50OiAwIH0sXG4gICAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEyL3Bvc3QtMy5odG1sJywgY291bnQ6IDIwIH1cbiAgICAgICAgICAvLyBdXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgLy8g5Y+R55Sf6ZSZ6K+vXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIOacgOaWsOivhOiuulxuICBuZXdfY29tbWVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaG90X2FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3RfYXJ0aWNsZXNfaXRlbVwiKTtcbiAgICB2YXIgcGFnZV9zaXplID0gODtcbiAgICB0d2lrb29cbiAgICAgIC5nZXRSZWNlbnRDb21tZW50cyh7XG4gICAgICAgIGVudklkOiBcImh0dHBzOi8vdHdpa29vLnd6dGxpbmsxMDEzLmNvbS9cIiwgLy8g546v5aKDIElEXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICBwYWdlU2l6ZTogcGFnZV9zaXplLCAvLyDojrflj5blpJrlsJHmnaHvvIzpu5jorqTvvJoxMO+8jOacgOWkp++8mjEwMFxuICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlLCAvLyDmmK/lkKbljIXmi6zmnIDmlrDlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIG5ld19jb21tZW50c19sb2RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLm5ld19jb21tZW50c19sb2RpbmdcIlxuICAgICAgICApO1xuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQgPSBuZXdfY29tbWVudHNfbG9kaW5nLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIG5ld19jb21tZW50c19sb2RpbmdfcGFyZW50LnJlbW92ZUNoaWxkKG5ld19jb21tZW50c19sb2RpbmcpO1xuICAgICAgICAvLyDmj5LlhaXor4TorrpcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlX3NpemU7IGkrKykge1xuICAgICAgICAgIGlmIChyZXNbaV0uY29tbWVudCkge1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19jb250ZW50ID0gcmVzW2ldLmNvbW1lbnQ7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX25pY2sgPSByZXNbaV0ubmljaztcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdXJsID0gcmVzW2ldLnVybDtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfYXZhdGFyID0gcmVzW2ldLmF2YXRhcjtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdGltZSA9IHJlc1tpXS5yZWxhdGl2ZVRpbWU7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2lkID0gXCIjXCIgKyByZXNbaV0uaWQ7XG5cbiAgICAgICAgICAgIHZhciBob3RfYXJ0aWNsZXNfY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBob3RfYXJ0aWNsZXNfY2hpbGQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpdGVtX3VwXCI+PGltZyBzcmM9XCInICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2F2YXRhciArXG4gICAgICAgICAgICAgICdcIiBjbGFzcz1cImF2YXRhclwiPjxkaXYgY2xhc3M9XCJuaWNrX25hbWVcIj48c3BhbiBjbGFzcz1cIm5pY2tcIj4nICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX25pY2sgK1xuICAgICAgICAgICAgICAnPC9zcGFuPjxzcGFuIGNsYXNzPVwidGltZVwiPicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfdGltZSArXG4gICAgICAgICAgICAgICc8L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cIml0ZW1fZG93blwiPjxhIGhyZWY9XCInICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX3VybCArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c19pZCArXG4gICAgICAgICAgICAgICdcIj4nICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2NvbnRlbnQgK1xuICAgICAgICAgICAgICBcIjwvYT48L2Rpdj5cIjtcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlcy5hcHBlbmQoaG90X2FydGljbGVzX2NoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfSxcbiAgLy8g5YiH5o2i6K+E6K66KOivhOiuuue7hOS7tuWtmOWcqOaXtilcbiAgc3dpdGNoX2NvbW1lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2hfYnRuXCIpKSB7XG4gICAgICB2YXIgc3dpdGNoX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoX2J0blwiKTtcbiAgICAgIHZhciBnaXRodWJfY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2l0aHViX2NvbW1lbnRcIik7XG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R3aWtvb19jb21tZW50XCIpO1xuXG4gICAgICBzd2l0Y2hfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaF9idG4uY2xhc3NMaXN0LnRvZ2dsZShcIm1vdmVcIik7XG4gICAgICAgIGdpdGh1Yl9jb21tZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb250ZW50LWluXCIpO1xuICAgICAgICB0d2lrb29fY29tbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29udGVudC1pblwiKTtcblxuICAgICAgICBpZiAoZ2l0aHViX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICBnaXRodWJfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUd2lrb28g6K+E6K6657O757ufXG4gICAgICAgICAgZ2l0aHViX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn07XG4iXX0=
