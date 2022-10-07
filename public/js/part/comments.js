(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    twikoo.init({
      envId: "https://twikoo.wztlink1013.com/",
      el: "#tcomment",
      // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
      // path: 'window.location.pathname', // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
      // 评论加载成功后的回调函数。
      // 发表评论后自动刷新评论时、加载下一页评论时，也会触发。
      // 评论加载失败时不会触发。
      onCommentLoaded: function onCommentLoaded() {
        console.log("Twikoo all comments loaded");
      }
    }).then(function () {
      // Twikoo 成功挂载后的回调函数。环境 ID 错误、网络异常、挂载失败等情况时不会触发。
      console.log("Twikoo loading finished");
    });
  },
  // 右下角按钮事件 是否前往评论区
  go_comments: function go_comments() {
    if (document.querySelector("#comments")) {
      document.querySelector("#go_comments").style.display = "block";
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtlQUNlO0VBQ2IsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCLEtBQUssV0FBTDtJQUNBLEtBQUssY0FBTDtJQUNBLEtBQUssWUFBTDtJQUNBLEtBQUssY0FBTDtJQUNBLE1BQU0sQ0FDSCxJQURILENBQ1E7TUFDSixLQUFLLEVBQUUsaUNBREg7TUFFSixFQUFFLEVBQUUsV0FGQTtNQUdKO01BQ0E7TUFFQTtNQUNBO01BQ0E7TUFDQSxlQUFlLEVBQUUsMkJBQVk7UUFDM0IsT0FBTyxDQUFDLEdBQVIsQ0FBWSw0QkFBWjtNQUNEO0lBWEcsQ0FEUixFQWNHLElBZEgsQ0FjUSxZQUFZO01BQ2hCO01BQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSx5QkFBWjtJQUNELENBakJIO0VBa0JELENBeEJZO0VBeUJiO0VBQ0EsV0FBVyxFQUFFLHVCQUFZO0lBQ3ZCLElBQUksUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBSixFQUF5QztNQUN2QyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixFQUF1QyxLQUF2QyxDQUE2QyxPQUE3QyxHQUF1RCxPQUF2RDtJQUNEO0VBQ0YsQ0E5Qlk7RUErQmI7RUFDQSxjQUFjLEVBQUUsMEJBQVk7SUFDMUI7SUFDQSxJQUNFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLEtBQ0EsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0JBQXZCLENBRkYsRUFHRTtNQUNBLElBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGtCQUF2QixDQUF0QixDQURBLENBRUE7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QVQsQ0FBdUIsaUJBQXZCLENBQXJCO01BRUEsVUFBVSxDQUFDLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQVk7UUFDL0MsVUFBVSxDQUFDLFNBQVgsQ0FBcUIsTUFBckIsQ0FBNEIsTUFBNUI7UUFDQSxjQUFjLENBQUMsU0FBZixDQUF5QixNQUF6QixDQUFnQyxZQUFoQztRQUNBLGNBQWMsQ0FBQyxTQUFmLENBQXlCLE1BQXpCLENBQWdDLFlBQWhDOztRQUVBLElBQUksY0FBYyxDQUFDLEtBQWYsQ0FBcUIsT0FBckIsS0FBaUMsTUFBckMsRUFBNkM7VUFDM0MsY0FBYyxDQUFDLEtBQWYsQ0FBcUIsT0FBckIsR0FBK0IsT0FBL0I7VUFDQSxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixHQUErQixNQUEvQjtRQUNELENBSEQsTUFHTztVQUNMO1VBQ0EsY0FBYyxDQUFDLEtBQWYsQ0FBcUIsT0FBckIsR0FBK0IsTUFBL0I7VUFDQSxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixHQUErQixPQUEvQjtRQUNEO01BQ0YsQ0FiRDtJQWNEO0VBQ0Y7QUF4SVksQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG7jgJDmlofnq6Dorr/pl67ph4/mjpLlkI3jgJFcbiAgICDmlofnq6DpmIXor7vph4/lnKjljZXkuKrmlofnq6DkuK3lj6/ku6XmmL7npLrkvYbmmK/kuI3og73mjpLlkI3vvIzmjpLlkI3mgI7kuYjlrp7njrDlkaLvvJ9cbiAgICDmlrnmoYgx77ya5L2/55SodmFsaW5lXG4gICAg5pa55qGIMu+8muWcqOacjeWKoeWZqOS4iui/m+ihjOWFqOermeeahOaWh+eroOiuv+mXru+8jOaPkOWPluS7luS7rOeahOiuv+mXrumHj2lkXG4gICAg5pa55qGIM++8muWvuXR3aWtvb+S6keWHveaVsOi/m+ihjOS7o+eggeabtOaUue+8jOexu+S8vOiuv+mXrumHj2FwaVxuIFxu44CQ6K+E6K665YiH5o2i5oyJ6ZKu44CRXG4gICAg5YiH5o2idXR0ZXJhbmNlc+ivhOiuuuWQju+8jOmhtemdouS8muWIt+aWsOS4gOS4i+eEtuWQjuWPiOWbnuWIsOm7mOiupOivhOiuuuezu+e7n+S6hu+8jOi/meS4quWPr+S7peS8mOWMllxuXG7jgJDmnIDmlrDor4TorrrjgJFcbiAgICDmnIDmlrDor4Torrrnu4Tku7bvvIzlpoLmnpxibG9n6aG16Z2i55So5LqG77yM6YKj5LmI6L+Z5Liq57uE5Lu25bCx5LiN6IO95pS+5Zyo56e75Yqo56uv5L6n6L655qCP5LqG77yMXG4gICAg5ZCM5LiA5LiqaWTkuI3og73lpJrmrKHnlKjnmoTnvJjmlYXlkJfvvJ9cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIOWvvOWHuuS4uuS4gOS4quWvueixoVxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nb19jb21tZW50cygpO1xuICAgIHRoaXMuY29tbWVudHNfY291bnQoKTtcbiAgICB0aGlzLm5ld19jb21tZW50cygpO1xuICAgIHRoaXMuc3dpdGNoX2NvbW1lbnQoKTtcbiAgICB0d2lrb29cbiAgICAgIC5pbml0KHtcbiAgICAgICAgZW52SWQ6IFwiaHR0cHM6Ly90d2lrb28ud3p0bGluazEwMTMuY29tL1wiLFxuICAgICAgICBlbDogXCIjdGNvbW1lbnRcIixcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIC8vIHBhdGg6ICd3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUnLCAvLyDnlKjkuo7ljLrliIbkuI3lkIzmlofnq6DnmoToh6rlrprkuYkganMg6Lev5b6E77yM5aaC5p6c5oKo55qE5paH56ug6Lev5b6E5LiN5pivIGxvY2F0aW9uLnBhdGhuYW1l77yM6ZyA5Lyg5q2k5Y+C5pWwXG5cbiAgICAgICAgLy8g6K+E6K665Yqg6L295oiQ5Yqf5ZCO55qE5Zue6LCD5Ye95pWw44CCXG4gICAgICAgIC8vIOWPkeihqOivhOiuuuWQjuiHquWKqOWIt+aWsOivhOiuuuaXtuOAgeWKoOi9veS4i+S4gOmhteivhOiuuuaXtu+8jOS5n+S8muinpuWPkeOAglxuICAgICAgICAvLyDor4TorrrliqDovb3lpLHotKXml7bkuI3kvJrop6blj5HjgIJcbiAgICAgICAgb25Db21tZW50TG9hZGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJUd2lrb28gYWxsIGNvbW1lbnRzIGxvYWRlZFwiKTtcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFR3aWtvbyDmiJDlip/mjILovb3lkI7nmoTlm57osIPlh73mlbDjgILnjq/looMgSUQg6ZSZ6K+v44CB572R57uc5byC5bi444CB5oyC6L295aSx6LSl562J5oOF5Ya15pe25LiN5Lya6Kem5Y+R44CCXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHdpa29vIGxvYWRpbmcgZmluaXNoZWRcIik7XG4gICAgICB9KTtcbiAgfSxcbiAgLy8g5Y+z5LiL6KeS5oyJ6ZKu5LqL5Lu2IOaYr+WQpuWJjeW+gOivhOiuuuWMulxuICBnb19jb21tZW50czogZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnRzXCIpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dvX2NvbW1lbnRzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICB9LFxuICAvLyDmlofnq6Dor4TorrrmlbBcbiAgY29tbWVudHNfY291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyDliKTmlq3pobXpnaLmmK/lkKbmnInor4TorrrljLppZOWSjOW8leeUqOivhOiuuuaVsOeahGlkXG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21tZW50c1wiKSAmJlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0d2lrb29fY29tbWVudHNcIilcbiAgICApIHtcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R3aWtvb19jb21tZW50c1wiKTtcbiAgICAgIC8vIEJPTeiOt+WPlumhtemdonVybOeahHBhdGhuYW1l6Lev5b6EXG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzX3VybCA9IFtsb2NhdGlvbi5wYXRobmFtZV07XG5cbiAgICAgIHR3aWtvb1xuICAgICAgICAuZ2V0Q29tbWVudHNDb3VudCh7XG4gICAgICAgICAgZW52SWQ6IFwiaHR0cHM6Ly90d2lrb28ud3p0bGluazEwMTMuY29tL1wiLCAvLyDnjq/looMgSURcbiAgICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgICB1cmxzOiB0d2lrb29fY29tbWVudHNfdXJsLCAvLyDkuI3ljIXlkKvljY/orq7jgIHln5/lkI3jgIHlj4LmlbDnmoTmlofnq6Dot6/lvoTliJfooajvvIzlv4XkvKDlj4LmlbBcbiAgICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlLCAvLyDor4TorrrmlbDmmK/lkKbljIXmi6zlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgLy8g5bCG6K+E6K665pWw5YaZ5YWl5YW25LitXG4gICAgICAgICAgdHdpa29vX2NvbW1lbnRzLmlubmVyVGV4dCA9IHJlc1swXS5jb3VudDtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgIC8vIOi/lOWbnuekuuS+izogW1xuICAgICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMC9wb3N0LTEuaHRtbCcsIGNvdW50OiAxMCB9LFxuICAgICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMS9wb3N0LTIuaHRtbCcsIGNvdW50OiAwIH0sXG4gICAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEyL3Bvc3QtMy5odG1sJywgY291bnQ6IDIwIH1cbiAgICAgICAgICAvLyBdXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgLy8g5Y+R55Sf6ZSZ6K+vXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIOacgOaWsOivhOiuulxuICBuZXdfY29tbWVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaG90X2FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3RfYXJ0aWNsZXNfaXRlbVwiKTtcbiAgICB2YXIgcGFnZV9zaXplID0gODtcbiAgICB0d2lrb29cbiAgICAgIC5nZXRSZWNlbnRDb21tZW50cyh7XG4gICAgICAgIGVudklkOiBcImh0dHBzOi8vdHdpa29vLnd6dGxpbmsxMDEzLmNvbS9cIiwgLy8g546v5aKDIElEXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICBwYWdlU2l6ZTogcGFnZV9zaXplLCAvLyDojrflj5blpJrlsJHmnaHvvIzpu5jorqTvvJoxMO+8jOacgOWkp++8mjEwMFxuICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlLCAvLyDmmK/lkKbljIXmi6zmnIDmlrDlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIG5ld19jb21tZW50c19sb2RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLm5ld19jb21tZW50c19sb2RpbmdcIlxuICAgICAgICApO1xuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQgPSBuZXdfY29tbWVudHNfbG9kaW5nLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIG5ld19jb21tZW50c19sb2RpbmdfcGFyZW50LnJlbW92ZUNoaWxkKG5ld19jb21tZW50c19sb2RpbmcpO1xuICAgICAgICAvLyDmj5LlhaXor4TorrpcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlX3NpemU7IGkrKykge1xuICAgICAgICAgIGlmIChyZXNbaV0uY29tbWVudCkge1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19jb250ZW50ID0gcmVzW2ldLmNvbW1lbnQ7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX25pY2sgPSByZXNbaV0ubmljaztcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdXJsID0gcmVzW2ldLnVybDtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfYXZhdGFyID0gcmVzW2ldLmF2YXRhcjtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdGltZSA9IHJlc1tpXS5yZWxhdGl2ZVRpbWU7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2lkID0gXCIjXCIgKyByZXNbaV0uaWQ7XG5cbiAgICAgICAgICAgIHZhciBob3RfYXJ0aWNsZXNfY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBob3RfYXJ0aWNsZXNfY2hpbGQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpdGVtX3VwXCI+PGltZyBzcmM9XCInICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2F2YXRhciArXG4gICAgICAgICAgICAgICdcIiBjbGFzcz1cImF2YXRhclwiPjxkaXYgY2xhc3M9XCJuaWNrX25hbWVcIj48c3BhbiBjbGFzcz1cIm5pY2tcIj4nICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX25pY2sgK1xuICAgICAgICAgICAgICAnPC9zcGFuPjxzcGFuIGNsYXNzPVwidGltZVwiPicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfdGltZSArXG4gICAgICAgICAgICAgICc8L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cIml0ZW1fZG93blwiPjxhIGhyZWY9XCInICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX3VybCArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c19pZCArXG4gICAgICAgICAgICAgICdcIj4nICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2NvbnRlbnQgK1xuICAgICAgICAgICAgICBcIjwvYT48L2Rpdj5cIjtcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlcy5hcHBlbmQoaG90X2FydGljbGVzX2NoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfSxcbiAgLy8g5YiH5o2i6K+E6K66KOivhOiuuue7hOS7tuWtmOWcqOaXtilcbiAgc3dpdGNoX2NvbW1lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzd2l0Y2hfYnRuXCIpKSB7XG4gICAgICB2YXIgc3dpdGNoX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3dpdGNoX2J0blwiKTtcbiAgICAgIHZhciBnaXRodWJfY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2l0aHViX2NvbW1lbnRcIik7XG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R3aWtvb19jb21tZW50XCIpO1xuXG4gICAgICBzd2l0Y2hfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaF9idG4uY2xhc3NMaXN0LnRvZ2dsZShcIm1vdmVcIik7XG4gICAgICAgIGdpdGh1Yl9jb21tZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb250ZW50LWluXCIpO1xuICAgICAgICB0d2lrb29fY29tbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29udGVudC1pblwiKTtcblxuICAgICAgICBpZiAoZ2l0aHViX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICBnaXRodWJfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUd2lrb28g6K+E6K6657O757ufXG4gICAgICAgICAgZ2l0aHViX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn07XG4iXX0=
