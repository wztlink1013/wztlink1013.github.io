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
      envId: 'https://twikoo-source.vercel.app/',
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
    var github_comment = document.querySelector('#github_comment');
    var twikoo_comment = document.querySelector('#twikoo_comment');
    switch_btn.addEventListener('click', function () {
      switch_btn.classList.toggle('move');
      github_comment.classList.toggle('content-in');
      twikoo_comment.classList.toggle('content-in');

      if (github_comment.style.display === 'none') {
        github_comment.style.display = 'block';
        twikoo_comment.style.display = 'none';

        if (!github_comment.children[0]) {
          var script_utterances = document.createElement('script'); // utterances 评论系统
          // script_utterances.src = 'https://beaudar.lipk.org/client.js'
          // script_utterances.setAttribute('repo', 'wztlink1013/comment')
          // script_utterances.setAttribute('issue-term', 'title')
          // script_utterances.setAttribute('label', '💬comment')
          // script_utterances.setAttribute('theme', 'github-light')
          // script_utterances.setAttribute('crossorigin', 'anonymous')
          // script_utterances.setAttribute('branch', 'master')
          // script_utterances.setAttribute('loading', 'true')
          // script_utterances.setAttribute('comment-order', 'desc')
          // script_utterances.setAttribute('input-position', 'top')
          // giscus评论

          script_utterances.src = 'https://giscus.app/client.js';
          script_utterances.setAttribute('data-repo', 'wztlink1013/comment');
          script_utterances.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkyMzkxNDA3MDQ=');
          script_utterances.setAttribute('data-category', 'General');
          script_utterances.setAttribute('data-category-id', 'MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyMDU2NTcx');
          script_utterances.setAttribute('data-mapping', 'pathname');
          script_utterances.setAttribute('data-reactions-enabled', '1');
          script_utterances.setAttribute('data-emit-metadata', '0');
          script_utterances.setAttribute('data-input-position', 'bottom');
          script_utterances.setAttribute('data-theme', 'light');
          script_utterances.setAttribute('data-lang', 'zh-CN');
          script_utterances.setAttribute('data-loading', 'lazy');
          script_utterances.setAttribute('crossorigin', 'anonymous');
          github_comment.appendChild(script_utterances);
        }
      } else {
        // Twikoo 评论系统
        github_comment.style.display = 'none';
        twikoo_comment.style.display = 'block';
        twikoo.init({
          envId: 'https://twikoo-source.vercel.app/',
          el: '#tcomment',
          // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
          // path: 'window.location.pathname', // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
          // 评论加载成功后的回调函数。
          // 发表评论后自动刷新评论时、加载下一页评论时，也会触发。
          // 评论加载失败时不会触发。
          onCommentLoaded: function onCommentLoaded() {
            console.log('Twikoo all comments loaded');
          }
        }).then(function () {
          // Twikoo 成功挂载后的回调函数。环境 ID 错误、网络异常、挂载失败等情况时不会触发。
          console.log('Twikoo loading finished');
        });
      }
    });
  }
};
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtlQUNlO0VBQ2IsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCLEtBQUssV0FBTDtJQUNBLEtBQUssY0FBTDtJQUNBLEtBQUssWUFBTDtJQUNBLEtBQUssY0FBTDtFQUNELENBTlk7RUFPYjtFQUNBLFdBQVcsRUFBRSx1QkFBWTtJQUN2QixJQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBQUosRUFBNEM7TUFDMUMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUMsS0FBdkMsQ0FBNkMsT0FBN0MsR0FBdUQsT0FBdkQ7SUFDRDtFQUNGLENBWlk7RUFhYjtFQUNBLGNBQWMsRUFBRSwwQkFBWTtJQUMxQjtJQUNBLElBQ0UsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsS0FDQSxRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsQ0FGRixFQUdFO01BQ0EsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXRCLENBREEsQ0FFQTs7TUFDQSxJQUFJLG1CQUFtQixHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVYsQ0FBMUI7TUFFQSxNQUFNLENBQ0gsZ0JBREgsQ0FDb0I7UUFDaEIsS0FBSyxFQUFFLGdDQURTO1FBQ3lCO1FBQ3pDO1FBQ0EsSUFBSSxFQUFFLG1CQUhVO1FBR1c7UUFDM0IsWUFBWSxFQUFFLEtBSkUsQ0FJSzs7TUFKTCxDQURwQixFQU9HLElBUEgsQ0FPUSxVQUFVLEdBQVYsRUFBZTtRQUNuQjtRQUNBLGVBQWUsQ0FBQyxTQUFoQixH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UUFDQSxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixHQUErQixNQUEvQjtRQUNBLGNBQWMsQ0FBQyxLQUFmLENBQXFCLE9BQXJCLEdBQStCLE9BQS9CO1FBQ0EsTUFBTSxDQUNILElBREgsQ0FDUTtVQUNKLEtBQUssRUFBRSxtQ0FESDtVQUVKLEVBQUUsRUFBRSxXQUZBO1VBR0o7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUNBLGVBQWUsRUFBRSwyQkFBWTtZQUMzQixPQUFPLENBQUMsR0FBUixDQUFZLDRCQUFaO1VBQ0Q7UUFYRyxDQURSLEVBY0csSUFkSCxDQWNRLFlBQVk7VUFDaEI7VUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLHlCQUFaO1FBQ0QsQ0FqQkg7TUFrQkQ7SUFDRixDQXJFRDtFQXNFRDtBQTFLWSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbuOAkOaWh+eroOiuv+mXrumHj+aOkuWQjeOAkVxuICAgIOaWh+eroOmYheivu+mHj+WcqOWNleS4quaWh+eroOS4reWPr+S7peaYvuekuuS9huaYr+S4jeiDveaOkuWQje+8jOaOkuWQjeaAjuS5iOWunueOsOWRou+8n1xuICAgIOaWueahiDHvvJrkvb/nlKh2YWxpbmVcbiAgICDmlrnmoYgy77ya5Zyo5pyN5Yqh5Zmo5LiK6L+b6KGM5YWo56uZ55qE5paH56ug6K6/6Zeu77yM5o+Q5Y+W5LuW5Lus55qE6K6/6Zeu6YePaWRcbiAgICDmlrnmoYgz77ya5a+5dHdpa29v5LqR5Ye95pWw6L+b6KGM5Luj56CB5pu05pS577yM57G75Ly86K6/6Zeu6YePYXBpXG4gXG7jgJDor4TorrrliIfmjaLmjInpkq7jgJFcbiAgICDliIfmjaJ1dHRlcmFuY2Vz6K+E6K665ZCO77yM6aG16Z2i5Lya5Yi35paw5LiA5LiL54S25ZCO5Y+I5Zue5Yiw6buY6K6k6K+E6K6657O757uf5LqG77yM6L+Z5Liq5Y+v5Lul5LyY5YyWXG5cbuOAkOacgOaWsOivhOiuuuOAkVxuICAgIOacgOaWsOivhOiuuue7hOS7tu+8jOWmguaenGJsb2fpobXpnaLnlKjkuobvvIzpgqPkuYjov5nkuKrnu4Tku7blsLHkuI3og73mlL7lnKjnp7vliqjnq6/kvqfovrnmoI/kuobvvIxcbiAgICDlkIzkuIDkuKppZOS4jeiDveWkmuasoeeUqOeahOe8mOaVheWQl++8n1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8g5a+85Ye65Li65LiA5Liq5a+56LGhXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdvX2NvbW1lbnRzKClcbiAgICB0aGlzLmNvbW1lbnRzX2NvdW50KClcbiAgICB0aGlzLm5ld19jb21tZW50cygpXG4gICAgdGhpcy5zd2l0Y2hfY29tbWVudCgpXG4gIH0sXG4gIC8vIOaYr+WQpuWJjeW+gOivhOiuuuWMulxuICBnb19jb21tZW50czogZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvX2NvbW1lbnRzJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9XG4gIH0sXG4gIC8vIOaWh+eroOivhOiuuuaVsFxuICBjb21tZW50c19jb3VudDogZnVuY3Rpb24gKCkge1xuICAgIC8vIOWIpOaWremhtemdouaYr+WQpuacieivhOiuuuWMumlk5ZKM5byV55So6K+E6K665pWw55qEaWRcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMnKSAmJlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50cycpXG4gICAgKSB7XG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3aWtvb19jb21tZW50cycpXG4gICAgICAvLyBCT03ojrflj5bpobXpnaJ1cmznmoRwYXRobmFtZei3r+W+hFxuICAgICAgdmFyIHR3aWtvb19jb21tZW50c191cmwgPSBbbG9jYXRpb24ucGF0aG5hbWVdXG5cbiAgICAgIHR3aWtvb1xuICAgICAgICAuZ2V0Q29tbWVudHNDb3VudCh7XG4gICAgICAgICAgZW52SWQ6ICd3ZWJzaXRlLXdpa29vLTRnNDZrOGRvOTg4Njc1NDInLCAvLyDnjq/looMgSURcbiAgICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgICB1cmxzOiB0d2lrb29fY29tbWVudHNfdXJsLCAvLyDkuI3ljIXlkKvljY/orq7jgIHln5/lkI3jgIHlj4LmlbDnmoTmlofnq6Dot6/lvoTliJfooajvvIzlv4XkvKDlj4LmlbBcbiAgICAgICAgICBpbmNsdWRlUmVwbHk6IGZhbHNlLCAvLyDor4TorrrmlbDmmK/lkKbljIXmi6zlm57lpI3vvIzpu5jorqTvvJpmYWxzZVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgLy8g5bCG6K+E6K665pWw5YaZ5YWl5YW25LitXG4gICAgICAgICAgdHdpa29vX2NvbW1lbnRzLmlubmVyVGV4dCA9IHJlc1swXS5jb3VudFxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgLy8g6L+U5Zue56S65L6LOiBbXG4gICAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzEwL3Bvc3QtMS5odG1sJywgY291bnQ6IDEwIH0sXG4gICAgICAgICAgLy8gICB7IHVybDogJy8yMDIwLzExL3Bvc3QtMi5odG1sJywgY291bnQ6IDAgfSxcbiAgICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTIvcG9zdC0zLmh0bWwnLCBjb3VudDogMjAgfVxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAvLyDlj5HnlJ/plJnor69cbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIC8vIOacgOaWsOivhOiuulxuICBuZXdfY29tbWVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaG90X2FydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdF9hcnRpY2xlc19pdGVtJylcbiAgICB2YXIgcGFnZV9zaXplID0gOFxuICAgIHR3aWtvb1xuICAgICAgLmdldFJlY2VudENvbW1lbnRzKHtcbiAgICAgICAgZW52SWQ6ICdodHRwczovL3R3aWtvby1zb3VyY2UudmVyY2VsLmFwcC8nLCAvLyDnjq/looMgSURcbiAgICAgICAgLy8gcmVnaW9uOiAnYXAtZ3Vhbmd6aG91JywgLy8g546v5aKD5Zyw5Z+f77yM6buY6K6k5Li6IGFwLXNoYW5naGFp77yM5aaC5p6c5oKo55qE546v5aKD5Zyw5Z+f5LiN5piv5LiK5rW377yM6ZyA5Lyg5q2k5Y+C5pWwXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlX3NpemUsIC8vIOiOt+WPluWkmuWwkeadoe+8jOm7mOiupO+8mjEw77yM5pyA5aSn77yaMTAwXG4gICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UsIC8vIOaYr+WQpuWMheaLrOacgOaWsOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdfY29tbWVudHNfbG9kaW5nJylcbiAgICAgICAgdmFyIG5ld19jb21tZW50c19sb2RpbmdfcGFyZW50ID0gbmV3X2NvbW1lbnRzX2xvZGluZy5wYXJlbnRFbGVtZW50XG4gICAgICAgIG5ld19jb21tZW50c19sb2RpbmdfcGFyZW50LnJlbW92ZUNoaWxkKG5ld19jb21tZW50c19sb2RpbmcpXG4gICAgICAgIC8vIOaPkuWFpeivhOiuulxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZ2Vfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgaWYgKHJlc1tpXS5jb21tZW50KSB7XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2NvbnRlbnQgPSByZXNbaV0uY29tbWVudFxuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19uaWNrID0gcmVzW2ldLm5pY2tcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdXJsID0gcmVzW2ldLnVybFxuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c19hdmF0YXIgPSByZXNbaV0uYXZhdGFyXG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX3RpbWUgPSByZXNbaV0ucmVsYXRpdmVUaW1lXG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2lkID0gJyMnICsgcmVzW2ldLmlkXG5cbiAgICAgICAgICAgIHZhciBob3RfYXJ0aWNsZXNfY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBob3RfYXJ0aWNsZXNfY2hpbGQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpdGVtX3VwXCI+PGltZyBzcmM9XCInICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2F2YXRhciArXG4gICAgICAgICAgICAgICdcIiBjbGFzcz1cImF2YXRhclwiPjxkaXYgY2xhc3M9XCJuaWNrX25hbWVcIj48c3BhbiBjbGFzcz1cIm5pY2tcIj4nICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX25pY2sgK1xuICAgICAgICAgICAgICAnPC9zcGFuPjxzcGFuIGNsYXNzPVwidGltZVwiPicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfdGltZSArXG4gICAgICAgICAgICAgICc8L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cIml0ZW1fZG93blwiPjxhIGhyZWY9XCInICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX3VybCArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c19pZCArXG4gICAgICAgICAgICAgICdcIj4nICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2NvbnRlbnQgK1xuICAgICAgICAgICAgICAnPC9hPjwvZGl2PidcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlcy5hcHBlbmQoaG90X2FydGljbGVzX2NoaWxkKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgfSlcbiAgfSxcbiAgLy8g5YiH5o2i6K+E6K66XG4gIHN3aXRjaF9jb21tZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN3aXRjaF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3dpdGNoX2J0bicpXG4gICAgdmFyIGdpdGh1Yl9jb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dpdGh1Yl9jb21tZW50JylcbiAgICB2YXIgdHdpa29vX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnQnKVxuXG4gICAgc3dpdGNoX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHN3aXRjaF9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnbW92ZScpXG4gICAgICBnaXRodWJfY29tbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb250ZW50LWluJylcbiAgICAgIHR3aWtvb19jb21tZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRlbnQtaW4nKVxuXG4gICAgICBpZiAoZ2l0aHViX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIGdpdGh1Yl9jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIHR3aWtvb19jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgaWYgKCFnaXRodWJfY29tbWVudC5jaGlsZHJlblswXSkge1xuICAgICAgICAgIHZhciBzY3JpcHRfdXR0ZXJhbmNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAgICAgICAvLyB1dHRlcmFuY2VzIOivhOiuuuezu+e7n1xuICAgICAgICAgIC8vIHNjcmlwdF91dHRlcmFuY2VzLnNyYyA9ICdodHRwczovL2JlYXVkYXIubGlway5vcmcvY2xpZW50LmpzJ1xuICAgICAgICAgIC8vIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZSgncmVwbycsICd3enRsaW5rMTAxMy9jb21tZW50JylcbiAgICAgICAgICAvLyBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoJ2lzc3VlLXRlcm0nLCAndGl0bGUnKVxuICAgICAgICAgIC8vIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCAn8J+SrGNvbW1lbnQnKVxuICAgICAgICAgIC8vIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZSgndGhlbWUnLCAnZ2l0aHViLWxpZ2h0JylcbiAgICAgICAgICAvLyBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoJ2Nyb3Nzb3JpZ2luJywgJ2Fub255bW91cycpXG4gICAgICAgICAgLy8gc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKCdicmFuY2gnLCAnbWFzdGVyJylcbiAgICAgICAgICAvLyBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAndHJ1ZScpXG4gICAgICAgICAgLy8gc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKCdjb21tZW50LW9yZGVyJywgJ2Rlc2MnKVxuICAgICAgICAgIC8vIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZSgnaW5wdXQtcG9zaXRpb24nLCAndG9wJylcblxuICAgICAgICAgIC8vIGdpc2N1c+ivhOiuulxuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNyYyA9ICdodHRwczovL2dpc2N1cy5hcHAvY2xpZW50LmpzJ1xuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZSgnZGF0YS1yZXBvJywgJ3d6dGxpbmsxMDEzL2NvbW1lbnQnKVxuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICdkYXRhLXJlcG8taWQnLFxuICAgICAgICAgICAgJ01ERXdPbEpsY0c5emFYUnZjbmt5TXpreE5EQTNNRFE9J1xuICAgICAgICAgIClcbiAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0ZWdvcnknLCAnR2VuZXJhbCcpXG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgJ2RhdGEtY2F0ZWdvcnktaWQnLFxuICAgICAgICAgICAgJ01ERTRPa1JwYzJOMWMzTnBiMjVEWVhSbFoyOXllVE15TURVMk5UY3gnXG4gICAgICAgICAgKVxuICAgICAgICAgIHNjcmlwdF91dHRlcmFuY2VzLnNldEF0dHJpYnV0ZSgnZGF0YS1tYXBwaW5nJywgJ3BhdGhuYW1lJylcbiAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVhY3Rpb25zLWVuYWJsZWQnLCAnMScpXG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKCdkYXRhLWVtaXQtbWV0YWRhdGEnLCAnMCcpXG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKCdkYXRhLWlucHV0LXBvc2l0aW9uJywgJ2JvdHRvbScpXG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0JylcbiAgICAgICAgICBzY3JpcHRfdXR0ZXJhbmNlcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGFuZycsICd6aC1DTicpXG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCAnbGF6eScpXG4gICAgICAgICAgc2NyaXB0X3V0dGVyYW5jZXMuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsICdhbm9ueW1vdXMnKVxuXG4gICAgICAgICAgZ2l0aHViX2NvbW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0X3V0dGVyYW5jZXMpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR3aWtvbyDor4Torrrns7vnu59cbiAgICAgICAgZ2l0aHViX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB0d2lrb29fY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICB0d2lrb29cbiAgICAgICAgICAuaW5pdCh7XG4gICAgICAgICAgICBlbnZJZDogJ2h0dHBzOi8vdHdpa29vLXNvdXJjZS52ZXJjZWwuYXBwLycsXG4gICAgICAgICAgICBlbDogJyN0Y29tbWVudCcsXG4gICAgICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgICAgIC8vIHBhdGg6ICd3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUnLCAvLyDnlKjkuo7ljLrliIbkuI3lkIzmlofnq6DnmoToh6rlrprkuYkganMg6Lev5b6E77yM5aaC5p6c5oKo55qE5paH56ug6Lev5b6E5LiN5pivIGxvY2F0aW9uLnBhdGhuYW1l77yM6ZyA5Lyg5q2k5Y+C5pWwXG5cbiAgICAgICAgICAgIC8vIOivhOiuuuWKoOi9veaIkOWKn+WQjueahOWbnuiwg+WHveaVsOOAglxuICAgICAgICAgICAgLy8g5Y+R6KGo6K+E6K665ZCO6Ieq5Yqo5Yi35paw6K+E6K665pe244CB5Yqg6L295LiL5LiA6aG16K+E6K665pe277yM5Lmf5Lya6Kem5Y+R44CCXG4gICAgICAgICAgICAvLyDor4TorrrliqDovb3lpLHotKXml7bkuI3kvJrop6blj5HjgIJcbiAgICAgICAgICAgIG9uQ29tbWVudExvYWRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVHdpa29vIGFsbCBjb21tZW50cyBsb2FkZWQnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFR3aWtvbyDmiJDlip/mjILovb3lkI7nmoTlm57osIPlh73mlbDjgILnjq/looMgSUQg6ZSZ6K+v44CB572R57uc5byC5bi444CB5oyC6L295aSx6LSl562J5oOF5Ya15pe25LiN5Lya6Kem5Y+R44CCXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVHdpa29vIGxvYWRpbmcgZmluaXNoZWQnKVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbn1cbiJdfQ==
