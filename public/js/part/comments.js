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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtlQUNlO0FBQ2IsRUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDZixTQUFLLFdBQUw7QUFDQSxTQUFLLGNBQUw7QUFDQSxTQUFLLFlBQUw7QUFDQSxTQUFLLGNBQUw7QUFDRCxHQU5ZO0FBT2I7QUFDQSxFQUFBLFdBQVcsRUFBRSx1QkFBVTtBQUNyQixRQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBQUosRUFBNEM7QUFDMUMsTUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixFQUF1QyxLQUF2QyxDQUE2QyxPQUE3QyxHQUF1RCxPQUF2RDtBQUNEO0FBQ0YsR0FaWTtBQWFiO0FBQ0EsRUFBQSxjQUFjLEVBQUUsMEJBQVc7QUFDekI7QUFDQSxRQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLEtBQXVDLFFBQVEsQ0FBQyxhQUFULENBQXVCLGtCQUF2QixDQUEzQyxFQUF1RjtBQUNyRixVQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsQ0FBdEIsQ0FEcUYsQ0FFckY7O0FBQ0EsVUFBSSxtQkFBbUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFWLENBQTFCO0FBRUEsTUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0I7QUFDdEIsUUFBQSxLQUFLLEVBQUUsZ0NBRGU7QUFDbUI7QUFDekM7QUFDQSxRQUFBLElBQUksRUFBRSxtQkFIZ0I7QUFHSTtBQUMxQixRQUFBLFlBQVksRUFBRSxLQUpRLENBSUY7O0FBSkUsT0FBeEIsRUFLRyxJQUxILENBS1EsVUFBVSxHQUFWLEVBQWU7QUFDckI7QUFDQSxRQUFBLGVBQWUsQ0FBQyxTQUFoQixHQUE0QixHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sS0FBbkMsQ0FGcUIsQ0FHckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsT0FkRCxXQWNTLFVBQVUsR0FBVixFQUFlO0FBQ3RCO0FBQ0EsUUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLEdBQWQ7QUFDRCxPQWpCRDtBQWtCRDtBQUNGLEdBeENZO0FBeUNiO0FBQ0EsRUFBQSxZQUFZLEVBQUUsd0JBQVc7QUFDdkIsUUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQW5CO0FBQ0EsUUFBSSxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxJQUFBLE1BQU0sQ0FBQyxpQkFBUCxDQUF5QjtBQUNyQixNQUFBLEtBQUssRUFBRSxnQ0FEYztBQUNvQjtBQUN6QztBQUNBLE1BQUEsUUFBUSxFQUFFLFNBSFc7QUFHQTtBQUNyQixNQUFBLFlBQVksRUFBRSxLQUpPLENBSUQ7O0FBSkMsS0FBekIsRUFLSyxJQUxMLENBS1UsVUFBVSxHQUFWLEVBQWU7QUFDckIsVUFBSSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixzQkFBdkIsQ0FBMUI7QUFDQSxVQUFJLDBCQUEwQixHQUFHLG1CQUFtQixDQUFDLGFBQXJEO0FBQ0EsTUFBQSwwQkFBMEIsQ0FBQyxXQUEzQixDQUF1QyxtQkFBdkMsRUFIcUIsQ0FJckI7O0FBQ0EsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWUsQ0FBQyxHQUFDLFNBQWpCLEVBQTRCLENBQUMsRUFBN0IsRUFBaUM7QUFDL0IsWUFBSSxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sT0FBWCxFQUFvQjtBQUNsQixjQUFJLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBTyxPQUFsQztBQUNBLGNBQUksaUJBQWlCLEdBQUcsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLElBQS9CO0FBQ0EsY0FBSSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sR0FBOUI7QUFDQSxjQUFJLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBTyxNQUFqQztBQUNBLGNBQUksaUJBQWlCLEdBQUcsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPLFlBQS9CO0FBQ0EsY0FBSSxlQUFlLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8sRUFBbkM7QUFFQSxjQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQXpCO0FBQ0EsVUFBQSxrQkFBa0IsQ0FBQyxTQUFuQixHQUErQixvQ0FBb0MsbUJBQXBDLEdBQTBELDZEQUExRCxHQUEwSCxpQkFBMUgsR0FBOEksNEJBQTlJLEdBQTZLLGlCQUE3SyxHQUFpTSxxREFBak0sR0FBeVAsZ0JBQXpQLEdBQTRRLGVBQTVRLEdBQThSLElBQTlSLEdBQXFTLG9CQUFyUyxHQUE0VCxZQUEzVjtBQUNBLFVBQUEsWUFBWSxDQUFDLE1BQWIsQ0FBb0Isa0JBQXBCO0FBQ0Q7QUFDRjtBQUNGLEtBeEJILFdBd0JXLFVBQVUsR0FBVixFQUFlO0FBQ3RCLE1BQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxHQUFkO0FBQ0QsS0ExQkg7QUEyQkQsR0F4RVk7QUF5RWI7QUFDQSxFQUFBLGNBQWMsRUFBRSwwQkFBVztBQUN6QixRQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixDQUFqQjtBQUNBLFFBQUksa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIscUJBQXZCLENBQXpCO0FBQ0EsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXJCO0FBRUEsSUFBQSxVQUFVLENBQUMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBVTtBQUM3QyxVQUFHLGtCQUFrQixDQUFDLEtBQW5CLENBQXlCLE9BQXpCLEtBQXFDLE1BQXhDLEVBQWdEO0FBQzlDLFFBQUEsa0JBQWtCLENBQUMsS0FBbkIsQ0FBeUIsT0FBekIsR0FBbUMsT0FBbkM7QUFDQSxRQUFBLGNBQWMsQ0FBQyxLQUFmLENBQXFCLE9BQXJCLEdBQStCLE1BQS9COztBQUNBLFlBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFuQixDQUE0QixDQUE1QixDQUFMLEVBQXFDO0FBQ2pDLGNBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBeEI7QUFDQSxVQUFBLGlCQUFpQixDQUFDLEdBQWxCLEdBQXNCLCtCQUF0QjtBQUNBLFVBQUEsaUJBQWlCLENBQUMsWUFBbEIsQ0FBK0IsTUFBL0IsRUFBc0MscUJBQXRDO0FBQ0EsVUFBQSxpQkFBaUIsQ0FBQyxZQUFsQixDQUErQixZQUEvQixFQUE0QyxPQUE1QztBQUNBLFVBQUEsaUJBQWlCLENBQUMsWUFBbEIsQ0FBK0IsT0FBL0IsRUFBdUMsV0FBdkM7QUFDQSxVQUFBLGlCQUFpQixDQUFDLFlBQWxCLENBQStCLE9BQS9CLEVBQXVDLGNBQXZDO0FBQ0EsVUFBQSxpQkFBaUIsQ0FBQyxZQUFsQixDQUErQixhQUEvQixFQUE2QyxXQUE3QztBQUNBLFVBQUEsa0JBQWtCLENBQUMsV0FBbkIsQ0FBK0IsaUJBQS9CO0FBQ0g7QUFDRixPQWJELE1BYU07QUFDSixRQUFBLGtCQUFrQixDQUFDLEtBQW5CLENBQXlCLE9BQXpCLEdBQW1DLE1BQW5DO0FBQ0EsUUFBQSxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixHQUErQixPQUEvQjtBQUNEO0FBQ0YsS0FsQkQ7QUFtQkQ7QUFsR1ksQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG7jgJDmlofnq6Dorr/pl67ph4/mjpLlkI3jgJFcbiAgICDmlofnq6DpmIXor7vph4/lnKjljZXkuKrmlofnq6DkuK3lj6/ku6XmmL7npLrkvYbmmK/kuI3og73mjpLlkI3vvIzmjpLlkI3mgI7kuYjlrp7njrDlkaLvvJ9cbiAgICDmlrnmoYgx77ya5L2/55SodmFsaW5lXG4gICAg5pa55qGIMu+8muWcqOacjeWKoeWZqOS4iui/m+ihjOWFqOermeeahOaWh+eroOiuv+mXru+8jOaPkOWPluS7luS7rOeahOiuv+mXrumHj2lkXG4gICAg5pa55qGIM++8muWvuXR3aWtvb+S6keWHveaVsOi/m+ihjOS7o+eggeabtOaUue+8jOexu+S8vOiuv+mXrumHj2FwaVxuIFxu44CQ6K+E6K665YiH5o2i5oyJ6ZKu44CRXG4gICAg5YiH5o2idXR0ZXJhbmNlc+ivhOiuuuWQju+8jOmhtemdouS8muWIt+aWsOS4gOS4i+eEtuWQjuWPiOWbnuWIsOm7mOiupOivhOiuuuezu+e7n+S6hu+8jOi/meS4quWPr+S7peS8mOWMllxuXG7jgJDmnIDmlrDor4TorrrjgJFcbiAgICDmnIDmlrDor4Torrrnu4Tku7bvvIzlpoLmnpxibG9n6aG16Z2i55So5LqG77yM6YKj5LmI6L+Z5Liq57uE5Lu25bCx5LiN6IO95pS+5Zyo56e75Yqo56uv5L6n6L655qCP5LqG77yMXG4gICAg5ZCM5LiA5LiqaWTkuI3og73lpJrmrKHnlKjnmoTnvJjmlYXlkJfvvJ9cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuXG4vLyDlr7zlh7rkuLrkuIDkuKrlr7nosaFcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nb19jb21tZW50cygpO1xuICAgIHRoaXMuY29tbWVudHNfY291bnQoKTtcbiAgICB0aGlzLm5ld19jb21tZW50cygpO1xuICAgIHRoaXMuc3dpdGNoX2NvbW1lbnQoKTtcbiAgfSxcbiAgLy8g5piv5ZCm5YmN5b6A6K+E6K665Yy6XG4gIGdvX2NvbW1lbnRzOiBmdW5jdGlvbigpe1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvX2NvbW1lbnRzJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9LFxuICAvLyDmlofnq6Dor4TorrrmlbBcbiAgY29tbWVudHNfY291bnQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIOWIpOaWremhtemdouaYr+WQpuacieivhOiuuuWMumlk5ZKM5byV55So6K+E6K665pWw55qEaWRcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzJykgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50cycpKSB7XG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50cycpO1xuICAgICAgLy8gQk9N6I635Y+W6aG16Z2idXJs55qEcGF0aG5hbWXot6/lvoRcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHNfdXJsID0gW2xvY2F0aW9uLnBhdGhuYW1lXTtcblxuICAgICAgdHdpa29vLmdldENvbW1lbnRzQ291bnQoe1xuICAgICAgICBlbnZJZDogJ3dlYnNpdGUtd2lrb28tNGc0Nms4ZG85ODg2NzU0MicsIC8vIOeOr+WigyBJRFxuICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgdXJsczogdHdpa29vX2NvbW1lbnRzX3VybCwvLyDkuI3ljIXlkKvljY/orq7jgIHln5/lkI3jgIHlj4LmlbDnmoTmlofnq6Dot6/lvoTliJfooajvvIzlv4XkvKDlj4LmlbBcbiAgICAgICAgaW5jbHVkZVJlcGx5OiBmYWxzZSAvLyDor4TorrrmlbDmmK/lkKbljIXmi6zlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIC8vIOWwhuivhOiuuuaVsOWGmeWFpeWFtuS4rVxuICAgICAgICB0d2lrb29fY29tbWVudHMuaW5uZXJUZXh0ID0gcmVzWzBdLmNvdW50O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAvLyDov5Tlm57npLrkvos6IFtcbiAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEwL3Bvc3QtMS5odG1sJywgY291bnQ6IDEwIH0sXG4gICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMS9wb3N0LTIuaHRtbCcsIGNvdW50OiAwIH0sXG4gICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMi9wb3N0LTMuaHRtbCcsIGNvdW50OiAyMCB9XG4gICAgICAgIC8vIF1cbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgLy8g5Y+R55Sf6ZSZ6K+vXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8g5pyA5paw6K+E6K66XG4gIG5ld19jb21tZW50czogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhvdF9hcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3RfYXJ0aWNsZXNfaXRlbScpO1xuICAgIHZhciBwYWdlX3NpemUgPSA4O1xuICAgIHR3aWtvby5nZXRSZWNlbnRDb21tZW50cyh7XG4gICAgICAgIGVudklkOiAnd2Vic2l0ZS13aWtvby00ZzQ2azhkbzk4ODY3NTQyJywgLy8g546v5aKDIElEXG4gICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICBwYWdlU2l6ZTogcGFnZV9zaXplLCAvLyDojrflj5blpJrlsJHmnaHvvIzpu5jorqTvvJoxMO+8jOacgOWkp++8mjEwMFxuICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlIC8vIOaYr+WQpuWMheaLrOacgOaWsOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIG5ld19jb21tZW50c19sb2RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3X2NvbW1lbnRzX2xvZGluZycpO1xuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQgPSBuZXdfY29tbWVudHNfbG9kaW5nLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIG5ld19jb21tZW50c19sb2RpbmdfcGFyZW50LnJlbW92ZUNoaWxkKG5ld19jb21tZW50c19sb2RpbmcpO1xuICAgICAgICAvLyDmj5LlhaXor4TorrpcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7aTxwYWdlX3NpemU7IGkrKykge1xuICAgICAgICAgIGlmIChyZXNbaV0uY29tbWVudCkge1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19jb250ZW50ID0gcmVzW2ldLmNvbW1lbnQ7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX25pY2sgPSByZXNbaV0ubmljaztcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdXJsID0gcmVzW2ldLnVybDtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfYXZhdGFyID0gcmVzW2ldLmF2YXRhcjtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdGltZSA9IHJlc1tpXS5yZWxhdGl2ZVRpbWU7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2lkID0gJyMnICsgcmVzW2ldLmlkO1xuICAgIFxuICAgICAgICAgICAgdmFyIGhvdF9hcnRpY2xlc19jaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBob3RfYXJ0aWNsZXNfY2hpbGQuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJpdGVtX3VwXCI+PGltZyBzcmM9XCInICsgbmV3X2NvbW1lbnRzX2F2YXRhciArICdcIiBjbGFzcz1cImF2YXRhclwiPjxkaXYgY2xhc3M9XCJuaWNrX25hbWVcIj48c3BhbiBjbGFzcz1cIm5pY2tcIj4nICsgbmV3X2NvbW1lbnRzX25pY2sgKyAnPC9zcGFuPjxzcGFuIGNsYXNzPVwidGltZVwiPicgKyBuZXdfY29tbWVudHNfdGltZSArICc8L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cIml0ZW1fZG93blwiPjxhIGhyZWY9XCInICsgbmV3X2NvbW1lbnRzX3VybCArIG5ld19jb21tZW50c19pZCArICdcIj4nICsgbmV3X2NvbW1lbnRzX2NvbnRlbnQgKyAnPC9hPjwvZGl2Pic7XG4gICAgICAgICAgICBob3RfYXJ0aWNsZXMuYXBwZW5kKGhvdF9hcnRpY2xlc19jaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9LFxuICAvLyDliIfmjaLor4TorrpcbiAgc3dpdGNoX2NvbW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzd2l0Y2hfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N3aXRjaF9idG4nKTtcbiAgICB2YXIgdXR0ZXJhbmNlc19jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3V0dGVyYW5jZXNfY29tbWVudCcpO1xuICAgIHZhciB0d2lrb29fY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0d2lrb29fY29tbWVudCcpO1xuICAgIFxuICAgIHN3aXRjaF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgaWYodXR0ZXJhbmNlc19jb21tZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICB1dHRlcmFuY2VzX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGlmICghdXR0ZXJhbmNlc19jb21tZW50LmNoaWxkcmVuWzBdKSB7XG4gICAgICAgICAgICB2YXIgc2NyaXB0X3V0dGVyYW5jZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc3JjPVwiaHR0cHM6Ly91dHRlcmFuYy5lcy9jbGllbnQuanNcIiA7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJyZXBvXCIsXCJ3enRsaW5rMTAxMy9jb21tZW50XCIpO1xuICAgICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwiaXNzdWUtdGVybVwiLFwidGl0bGVcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJsYWJlbFwiLFwi8J+SrGNvbW1lbnRcIik7XG4gICAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoXCJ0aGVtZVwiLFwiZ2l0aHViLWxpZ2h0XCIpO1xuICAgICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFwiY3Jvc3NvcmlnaW5cIixcImFub255bW91c1wiKTtcbiAgICAgICAgICAgIHV0dGVyYW5jZXNfY29tbWVudC5hcHBlbmRDaGlsZChzY3JpcHRfdXR0ZXJhbmNlcyk7IFxuICAgICAgICB9XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHV0dGVyYW5jZXNfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0d2lrb29fY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblxuXG4iXX0=
