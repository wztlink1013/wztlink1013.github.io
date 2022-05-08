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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtlQUNlO0VBQ2IsSUFBSSxFQUFFLGdCQUFXO0lBQ2YsS0FBSyxXQUFMO0lBQ0EsS0FBSyxjQUFMO0lBQ0EsS0FBSyxZQUFMO0lBQ0EsS0FBSyxjQUFMO0VBQ0QsQ0FOWTtFQU9iO0VBQ0EsV0FBVyxFQUFFLHVCQUFVO0lBQ3JCLElBQUksUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBSixFQUE0QztNQUMxQyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixFQUF1QyxLQUF2QyxDQUE2QyxPQUE3QyxHQUF1RCxPQUF2RDtJQUNEO0VBQ0YsQ0FaWTtFQWFiO0VBQ0EsY0FBYyxFQUFFLDBCQUFXO0lBQ3pCO0lBQ0EsSUFBSSxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixLQUF1QyxRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsQ0FBM0MsRUFBdUY7TUFDckYsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXRCLENBRHFGLENBRXJGOztNQUNBLElBQUksbUJBQW1CLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBVixDQUExQjtNQUVBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QjtRQUN0QixLQUFLLEVBQUUsZ0NBRGU7UUFDbUI7UUFDekM7UUFDQSxJQUFJLEVBQUUsbUJBSGdCO1FBR0k7UUFDMUIsWUFBWSxFQUFFLEtBSlEsQ0FJRjs7TUFKRSxDQUF4QixFQUtHLElBTEgsQ0FLUSxVQUFVLEdBQVYsRUFBZTtRQUNyQjtRQUNBLGVBQWUsQ0FBQyxT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Iiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG7jgJDmlofnq6Dorr/pl67ph4/mjpLlkI3jgJFcbiAgICDmlofnq6DpmIXor7vph4/lnKjljZXkuKrmlofnq6DkuK3lj6/ku6XmmL7npLrkvYbmmK/kuI3og73mjpLlkI3vvIzmjpLlkI3mgI7kuYjlrp7njrDlkaLvvJ9cbiAgICDmlrnmoYgx77ya5L2/55SodmFsaW5lXG4gICAg5pa55qGIMu+8muWcqOacjeWKoeWZqOS4iui/m+ihjOWFqOermeeahOaWh+eroOiuv+mXru+8jOaPkOWPluS7luS7rOeahOiuv+mXrumHj2lkXG4gICAg5pa55qGIM++8muWvuXR3aWtvb+S6keWHveaVsOi/m+ihjOS7o+eggeabtOaUue+8jOexu+S8vOiuv+mXrumHj2FwaVxuIFxu44CQ6K+E6K665YiH5o2i5oyJ6ZKu44CRXG4gICAg5YiH5o2idXR0ZXJhbmNlc+ivhOiuuuWQju+8jOmhtemdouS8muWIt+aWsOS4gOS4i+eEtuWQjuWPiOWbnuWIsOm7mOiupOivhOiuuuezu+e7n+S6hu+8jOi/meS4quWPr+S7peS8mOWMllxuXG7jgJDmnIDmlrDor4TorrrjgJFcbiAgICDmnIDmlrDor4Torrrnu4Tku7bvvIzlpoLmnpxibG9n6aG16Z2i55So5LqG77yM6YKj5LmI6L+Z5Liq57uE5Lu25bCx5LiN6IO95pS+5Zyo56e75Yqo56uv5L6n6L655qCP5LqG77yMXG4gICAg5ZCM5LiA5LiqaWTkuI3og73lpJrmrKHnlKjnmoTnvJjmlYXlkJfvvJ9cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuLy8g5a+85Ye65Li65LiA5Liq5a+56LGhXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ29fY29tbWVudHMoKTtcbiAgICB0aGlzLmNvbW1lbnRzX2NvdW50KCk7XG4gICAgdGhpcy5uZXdfY29tbWVudHMoKTtcbiAgICB0aGlzLnN3aXRjaF9jb21tZW50KCk7XG4gIH0sXG4gIC8vIOaYr+WQpuWJjeW+gOivhOiuuuWMulxuICBnb19jb21tZW50czogZnVuY3Rpb24oKXtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvX2NvbW1lbnRzJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb19jb21tZW50cycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfSxcbiAgLy8g5paH56ug6K+E6K665pWwXG4gIGNvbW1lbnRzX2NvdW50OiBmdW5jdGlvbigpIHtcbiAgICAvLyDliKTmlq3pobXpnaLmmK/lkKbmnInor4TorrrljLppZOWSjOW8leeUqOivhOiuuuaVsOeahGlkXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cycpICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0d2lrb29fY29tbWVudHMnKSkge1xuICAgICAgdmFyIHR3aWtvb19jb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0d2lrb29fY29tbWVudHMnKTtcbiAgICAgIC8vIEJPTeiOt+WPlumhtemdonVybOeahHBhdGhuYW1l6Lev5b6EXG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzX3VybCA9IFtsb2NhdGlvbi5wYXRobmFtZV07XG5cbiAgICAgIHR3aWtvby5nZXRDb21tZW50c0NvdW50KHtcbiAgICAgICAgZW52SWQ6ICd3ZWJzaXRlLXdpa29vLTRnNDZrOGRvOTg4Njc1NDInLCAvLyDnjq/looMgSURcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIHVybHM6IHR3aWtvb19jb21tZW50c191cmwsLy8g5LiN5YyF5ZCr5Y2P6K6u44CB5Z+f5ZCN44CB5Y+C5pWw55qE5paH56ug6Lev5b6E5YiX6KGo77yM5b+F5Lyg5Y+C5pWwXG4gICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UgLy8g6K+E6K665pWw5piv5ZCm5YyF5ous5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAvLyDlsIbor4TorrrmlbDlhpnlhaXlhbbkuK1cbiAgICAgICAgdHdpa29vX2NvbW1lbnRzLmlubmVyVGV4dCA9IHJlc1swXS5jb3VudDtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgLy8g6L+U5Zue56S65L6LOiBbXG4gICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMC9wb3N0LTEuaHRtbCcsIGNvdW50OiAxMCB9LFxuICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTEvcG9zdC0yLmh0bWwnLCBjb3VudDogMCB9LFxuICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTIvcG9zdC0zLmh0bWwnLCBjb3VudDogMjAgfVxuICAgICAgICAvLyBdXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIC8vIOWPkeeUn+mUmeivr1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIOacgOaWsOivhOiuulxuICBuZXdfY29tbWVudHM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBob3RfYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG90X2FydGljbGVzX2l0ZW0nKTtcbiAgICB2YXIgcGFnZV9zaXplID0gODtcbiAgICB0d2lrb28uZ2V0UmVjZW50Q29tbWVudHMoe1xuICAgICAgICBlbnZJZDogJ3dlYnNpdGUtd2lrb28tNGc0Nms4ZG85ODg2NzU0MicsIC8vIOeOr+WigyBJRFxuICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgcGFnZVNpemU6IHBhZ2Vfc2l6ZSwgLy8g6I635Y+W5aSa5bCR5p2h77yM6buY6K6k77yaMTDvvIzmnIDlpKfvvJoxMDBcbiAgICAgICAgaW5jbHVkZVJlcGx5OiBmYWxzZSAvLyDmmK/lkKbljIXmi6zmnIDmlrDlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld19jb21tZW50c19sb2RpbmcnKTtcbiAgICAgICAgdmFyIG5ld19jb21tZW50c19sb2RpbmdfcGFyZW50ID0gbmV3X2NvbW1lbnRzX2xvZGluZy5wYXJlbnRFbGVtZW50O1xuICAgICAgICBuZXdfY29tbWVudHNfbG9kaW5nX3BhcmVudC5yZW1vdmVDaGlsZChuZXdfY29tbWVudHNfbG9kaW5nKTtcbiAgICAgICAgLy8g5o+S5YWl6K+E6K66XG4gICAgICAgIGZvciAodmFyIGkgPSAwO2k8cGFnZV9zaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAocmVzW2ldLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfY29udGVudCA9IHJlc1tpXS5jb21tZW50O1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19uaWNrID0gcmVzW2ldLm5pY2s7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX3VybCA9IHJlc1tpXS51cmw7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2F2YXRhciA9IHJlc1tpXS5hdmF0YXI7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX3RpbWUgPSByZXNbaV0ucmVsYXRpdmVUaW1lO1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19pZCA9ICcjJyArIHJlc1tpXS5pZDtcbiAgICBcbiAgICAgICAgICAgIHZhciBob3RfYXJ0aWNsZXNfY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgaG90X2FydGljbGVzX2NoaWxkLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiaXRlbV91cFwiPjxpbWcgc3JjPVwiJyArIG5ld19jb21tZW50c19hdmF0YXIgKyAnXCIgY2xhc3M9XCJhdmF0YXJcIj48ZGl2IGNsYXNzPVwibmlja19uYW1lXCI+PHNwYW4gY2xhc3M9XCJuaWNrXCI+JyArIG5ld19jb21tZW50c19uaWNrICsgJzwvc3Bhbj48c3BhbiBjbGFzcz1cInRpbWVcIj4nICsgbmV3X2NvbW1lbnRzX3RpbWUgKyAnPC9zcGFuPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJpdGVtX2Rvd25cIj48YSBocmVmPVwiJyArIG5ld19jb21tZW50c191cmwgKyBuZXdfY29tbWVudHNfaWQgKyAnXCI+JyArIG5ld19jb21tZW50c19jb250ZW50ICsgJzwvYT48L2Rpdj4nO1xuICAgICAgICAgICAgaG90X2FydGljbGVzLmFwcGVuZChob3RfYXJ0aWNsZXNfY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfSxcbiAgLy8g5YiH5o2i6K+E6K66XG4gIHN3aXRjaF9jb21tZW50OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3dpdGNoX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzd2l0Y2hfYnRuJyk7XG4gICAgdmFyIHV0dGVyYW5jZXNfY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1dHRlcmFuY2VzX2NvbW1lbnQnKTtcbiAgICB2YXIgdHdpa29vX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnQnKTtcbiAgICBcbiAgICBzd2l0Y2hfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgIHN3aXRjaF9idG4uY2xhc3NMaXN0LnRvZ2dsZShcIm1vdmVcIik7XG4gICAgICB1dHRlcmFuY2VzX2NvbW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGVudC1pbicpO1xuICAgICAgdHdpa29vX2NvbW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGVudC1pbicpO1xuICAgICAgXG4gICAgICBpZih1dHRlcmFuY2VzX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHV0dGVyYW5jZXNfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaWYgKCF1dHRlcmFuY2VzX2NvbW1lbnQuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgICAvLyBCZWF1ZGFyIOivhOiuuuezu+e7n1xuICAgICAgICAgIHZhciBzY3JpcHRfdXR0ZXJhbmNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc3JjPVwiaHR0cHM6Ly9iZWF1ZGFyLmxpcGsub3JnL2NsaWVudC5qc1wiIDtcbiAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJyZXBvXCIsXCJ3enRsaW5rMTAxMy9jb21tZW50XCIpO1xuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImlzc3VlLXRlcm1cIixcInRpdGxlXCIpO1xuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImxhYmVsXCIsXCLwn5KsY29tbWVudFwiKTtcbiAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJ0aGVtZVwiLFwiZ2l0aHViLWxpZ2h0XCIpO1xuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImNyb3Nzb3JpZ2luXCIsXCJhbm9ueW1vdXNcIik7XG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwiYnJhbmNoXCIsXCJtYXN0ZXJcIik7XG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLFwidHJ1ZVwiKTtcbiAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJjb21tZW50LW9yZGVyXCIsXCJkZXNjXCIpO1xuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcImlucHV0LXBvc2l0aW9uXCIsXCJ0b3BcIik7XG4gICAgICAgICAgdXR0ZXJhbmNlc19jb21tZW50LmFwcGVuZENoaWxkKHNjcmlwdF91dHRlcmFuY2VzKTsgXG4gICAgICAgIH1cbiAgICAgIH1lbHNlIHtcbiAgICAgICAgLy8gVHdpa29vIOivhOiuuuezu+e7n1xuICAgICAgICB1dHRlcmFuY2VzX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4iXX0=
