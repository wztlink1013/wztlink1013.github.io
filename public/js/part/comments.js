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
  // 切换评论(评论组件存在时)
  switch_comment: function switch_comment() {
    if (document.querySelector('#switch_btn')) {
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
  }
};
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtlQUNlO0VBQ2IsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCLEtBQUssV0FBTDtJQUNBLEtBQUssY0FBTDtJQUNBLEtBQUssWUFBTDtJQUNBLEtBQUssY0FBTDtFQUNELENBTlk7RUFPYjtFQUNBLFdBQVcsRUFBRSx1QkFBWTtJQUN2QixJQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBQUosRUFBNEM7TUFDMUMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUMsS0FBdkMsQ0FBNkMsT0FBN0MsR0FBdUQsT0FBdkQ7SUFDRDtFQUNGLENBWlk7RUFhYjtFQUNBLGNBQWMsRUFBRSwwQkFBWTtJQUMxQjtJQUNBLElBQ0UsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsS0FDQSxRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsQ0FGRixFQUdFO01BQ0EsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXRCLENBREEsQ0FFQTs7TUFDQSxJQUFJLG1CQUFtQixHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVYsQ0FBMUI7TUFFQSxNQUFNLENBQ0gsZ0JBREgsQ0FDb0I7UUFDaEIsS0FBSyxFQUFFLGdDQURTO1FBQ3lCO1FBQ3pDO1FBQ0EsSUFBSSxFQUFFLG1CQUhVO1FBR1c7UUFDM0IsWUFBWSxFQUFFLEtBSkUsQ0FJSzs7TUFKTCxDQURwQixFQU9HLElBUEgsQ0FPUSxVQUFVLEdBQVYsRUFBZTtRQUNuQjtRQUNBLGVBQWUsQ0FBQyxTQUFoQixH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QUFyQixLQUFpQyxNQUFyQyxFQUE2QztVQUMzQyxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixHQUErQixPQUEvQjtVQUNBLGNBQWMsQ0FBQyxLQUFmLENBQXFCLE9BQXJCLEdBQStCLE1BQS9CO1FBQ0QsQ0FIRCxNQUdPO1VBQ0w7VUFDQSxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixHQUErQixNQUEvQjtVQUNBLGNBQWMsQ0FBQyxLQUFmLENBQXFCLE9BQXJCLEdBQStCLE9BQS9CO1VBQ0EsTUFBTSxDQUNILElBREgsQ0FDUTtZQUNKLEtBQUssRUFBRSxtQ0FESDtZQUVKLEVBQUUsRUFBRSxXQUZBO1lBR0o7WUFDQTtZQUVBO1lBQ0E7WUFDQTtZQUNBLGVBQWUsRUFBRSwyQkFBWTtjQUMzQixPQUFPLENBQUMsR0FBUixDQUFZLDRCQUFaO1lBQ0Q7VUFYRyxDQURSLEVBY0csSUFkSCxDQWNRLFlBQVk7WUFDaEI7WUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLHlCQUFaO1VBQ0QsQ0FqQkg7UUFrQkQ7TUFDRixDQS9CRDtJQWdDRDtFQUNGO0FBdElZLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxu44CQ5paH56ug6K6/6Zeu6YeP5o6S5ZCN44CRXG4gICAg5paH56ug6ZiF6K+76YeP5Zyo5Y2V5Liq5paH56ug5Lit5Y+v5Lul5pi+56S65L2G5piv5LiN6IO95o6S5ZCN77yM5o6S5ZCN5oCO5LmI5a6e546w5ZGi77yfXG4gICAg5pa55qGIMe+8muS9v+eUqHZhbGluZVxuICAgIOaWueahiDLvvJrlnKjmnI3liqHlmajkuIrov5vooYzlhajnq5nnmoTmlofnq6Dorr/pl67vvIzmj5Dlj5bku5bku6znmoTorr/pl67ph49pZFxuICAgIOaWueahiDPvvJrlr7l0d2lrb2/kupHlh73mlbDov5vooYzku6PnoIHmm7TmlLnvvIznsbvkvLzorr/pl67ph49hcGlcbiBcbuOAkOivhOiuuuWIh+aNouaMiemSruOAkVxuICAgIOWIh+aNonV0dGVyYW5jZXPor4TorrrlkI7vvIzpobXpnaLkvJrliLfmlrDkuIDkuIvnhLblkI7lj4jlm57liLDpu5jorqTor4Torrrns7vnu5/kuobvvIzov5nkuKrlj6/ku6XkvJjljJZcblxu44CQ5pyA5paw6K+E6K6644CRXG4gICAg5pyA5paw6K+E6K6657uE5Lu277yM5aaC5p6cYmxvZ+mhtemdoueUqOS6hu+8jOmCo+S5iOi/meS4que7hOS7tuWwseS4jeiDveaUvuWcqOenu+WKqOerr+S+p+i+ueagj+S6hu+8jFxuICAgIOWQjOS4gOS4qmlk5LiN6IO95aSa5qyh55So55qE57yY5pWF5ZCX77yfXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyDlr7zlh7rkuLrkuIDkuKrlr7nosaFcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ29fY29tbWVudHMoKVxuICAgIHRoaXMuY29tbWVudHNfY291bnQoKVxuICAgIHRoaXMubmV3X2NvbW1lbnRzKClcbiAgICB0aGlzLnN3aXRjaF9jb21tZW50KClcbiAgfSxcbiAgLy8g5piv5ZCm5YmN5b6A6K+E6K665Yy6XG4gIGdvX2NvbW1lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb19jb21tZW50cycpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29fY29tbWVudHMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cbiAgfSxcbiAgLy8g5paH56ug6K+E6K665pWwXG4gIGNvbW1lbnRzX2NvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yik5pat6aG16Z2i5piv5ZCm5pyJ6K+E6K665Yy6aWTlkozlvJXnlKjor4TorrrmlbDnmoRpZFxuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cycpICYmXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJylcbiAgICApIHtcbiAgICAgIHZhciB0d2lrb29fY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnRzJylcbiAgICAgIC8vIEJPTeiOt+WPlumhtemdonVybOeahHBhdGhuYW1l6Lev5b6EXG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnRzX3VybCA9IFtsb2NhdGlvbi5wYXRobmFtZV1cblxuICAgICAgdHdpa29vXG4gICAgICAgIC5nZXRDb21tZW50c0NvdW50KHtcbiAgICAgICAgICBlbnZJZDogJ3dlYnNpdGUtd2lrb28tNGc0Nms4ZG85ODg2NzU0MicsIC8vIOeOr+WigyBJRFxuICAgICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICAgIHVybHM6IHR3aWtvb19jb21tZW50c191cmwsIC8vIOS4jeWMheWQq+WNj+iuruOAgeWfn+WQjeOAgeWPguaVsOeahOaWh+eroOi3r+W+hOWIl+ihqO+8jOW/heS8oOWPguaVsFxuICAgICAgICAgIGluY2x1ZGVSZXBseTogZmFsc2UsIC8vIOivhOiuuuaVsOaYr+WQpuWMheaLrOWbnuWkje+8jOm7mOiupO+8mmZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAvLyDlsIbor4TorrrmlbDlhpnlhaXlhbbkuK1cbiAgICAgICAgICB0d2lrb29fY29tbWVudHMuaW5uZXJUZXh0ID0gcmVzWzBdLmNvdW50XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAvLyDov5Tlm57npLrkvos6IFtcbiAgICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTAvcG9zdC0xLmh0bWwnLCBjb3VudDogMTAgfSxcbiAgICAgICAgICAvLyAgIHsgdXJsOiAnLzIwMjAvMTEvcG9zdC0yLmh0bWwnLCBjb3VudDogMCB9LFxuICAgICAgICAgIC8vICAgeyB1cmw6ICcvMjAyMC8xMi9wb3N0LTMuaHRtbCcsIGNvdW50OiAyMCB9XG4gICAgICAgICAgLy8gXVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIC8vIOWPkeeUn+mUmeivr1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB9KVxuICAgIH1cbiAgfSxcbiAgLy8g5pyA5paw6K+E6K66XG4gIG5ld19jb21tZW50czogZnVuY3Rpb24gKCkge1xuICAgIHZhciBob3RfYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG90X2FydGljbGVzX2l0ZW0nKVxuICAgIHZhciBwYWdlX3NpemUgPSA4XG4gICAgdHdpa29vXG4gICAgICAuZ2V0UmVjZW50Q29tbWVudHMoe1xuICAgICAgICBlbnZJZDogJ2h0dHBzOi8vdHdpa29vLXNvdXJjZS52ZXJjZWwuYXBwLycsIC8vIOeOr+WigyBJRFxuICAgICAgICAvLyByZWdpb246ICdhcC1ndWFuZ3pob3UnLCAvLyDnjq/looPlnLDln5/vvIzpu5jorqTkuLogYXAtc2hhbmdoYWnvvIzlpoLmnpzmgqjnmoTnjq/looPlnLDln5/kuI3mmK/kuIrmtbfvvIzpnIDkvKDmraTlj4LmlbBcbiAgICAgICAgcGFnZVNpemU6IHBhZ2Vfc2l6ZSwgLy8g6I635Y+W5aSa5bCR5p2h77yM6buY6K6k77yaMTDvvIzmnIDlpKfvvJoxMDBcbiAgICAgICAgaW5jbHVkZVJlcGx5OiBmYWxzZSwgLy8g5piv5ZCm5YyF5ous5pyA5paw5Zue5aSN77yM6buY6K6k77yaZmFsc2VcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHZhciBuZXdfY29tbWVudHNfbG9kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld19jb21tZW50c19sb2RpbmcnKVxuICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQgPSBuZXdfY29tbWVudHNfbG9kaW5nLnBhcmVudEVsZW1lbnRcbiAgICAgICAgbmV3X2NvbW1lbnRzX2xvZGluZ19wYXJlbnQucmVtb3ZlQ2hpbGQobmV3X2NvbW1lbnRzX2xvZGluZylcbiAgICAgICAgLy8g5o+S5YWl6K+E6K66XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZV9zaXplOyBpKyspIHtcbiAgICAgICAgICBpZiAocmVzW2ldLmNvbW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfY29udGVudCA9IHJlc1tpXS5jb21tZW50XG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX25pY2sgPSByZXNbaV0ubmlja1xuICAgICAgICAgICAgdmFyIG5ld19jb21tZW50c191cmwgPSByZXNbaV0udXJsXG4gICAgICAgICAgICB2YXIgbmV3X2NvbW1lbnRzX2F2YXRhciA9IHJlc1tpXS5hdmF0YXJcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfdGltZSA9IHJlc1tpXS5yZWxhdGl2ZVRpbWVcbiAgICAgICAgICAgIHZhciBuZXdfY29tbWVudHNfaWQgPSAnIycgKyByZXNbaV0uaWRcblxuICAgICAgICAgICAgdmFyIGhvdF9hcnRpY2xlc19jaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIGhvdF9hcnRpY2xlc19jaGlsZC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIml0ZW1fdXBcIj48aW1nIHNyYz1cIicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfYXZhdGFyICtcbiAgICAgICAgICAgICAgJ1wiIGNsYXNzPVwiYXZhdGFyXCI+PGRpdiBjbGFzcz1cIm5pY2tfbmFtZVwiPjxzcGFuIGNsYXNzPVwibmlja1wiPicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfbmljayArXG4gICAgICAgICAgICAgICc8L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JyArXG4gICAgICAgICAgICAgIG5ld19jb21tZW50c190aW1lICtcbiAgICAgICAgICAgICAgJzwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiaXRlbV9kb3duXCI+PGEgaHJlZj1cIicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfdXJsICtcbiAgICAgICAgICAgICAgbmV3X2NvbW1lbnRzX2lkICtcbiAgICAgICAgICAgICAgJ1wiPicgK1xuICAgICAgICAgICAgICBuZXdfY29tbWVudHNfY29udGVudCArXG4gICAgICAgICAgICAgICc8L2E+PC9kaXY+J1xuICAgICAgICAgICAgaG90X2FydGljbGVzLmFwcGVuZChob3RfYXJ0aWNsZXNfY2hpbGQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICB9KVxuICB9LFxuICAvLyDliIfmjaLor4Torroo6K+E6K6657uE5Lu25a2Y5Zyo5pe2KVxuICBzd2l0Y2hfY29tbWVudDogZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3dpdGNoX2J0bicpKSB7XG4gICAgICB2YXIgc3dpdGNoX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzd2l0Y2hfYnRuJylcbiAgICAgIHZhciBnaXRodWJfY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnaXRodWJfY29tbWVudCcpXG4gICAgICB2YXIgdHdpa29vX2NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdpa29vX2NvbW1lbnQnKVxuXG4gICAgICBzd2l0Y2hfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2hfYnRuLmNsYXNzTGlzdC50b2dnbGUoJ21vdmUnKVxuICAgICAgICBnaXRodWJfY29tbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb250ZW50LWluJylcbiAgICAgICAgdHdpa29vX2NvbW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGVudC1pbicpXG5cbiAgICAgICAgaWYgKGdpdGh1Yl9jb21tZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGdpdGh1Yl9jb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFR3aWtvbyDor4Torrrns7vnu59cbiAgICAgICAgICBnaXRodWJfY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgdHdpa29vX2NvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICB0d2lrb29cbiAgICAgICAgICAgIC5pbml0KHtcbiAgICAgICAgICAgICAgZW52SWQ6ICdodHRwczovL3R3aWtvby1zb3VyY2UudmVyY2VsLmFwcC8nLFxuICAgICAgICAgICAgICBlbDogJyN0Y29tbWVudCcsXG4gICAgICAgICAgICAgIC8vIHJlZ2lvbjogJ2FwLWd1YW5nemhvdScsIC8vIOeOr+Wig+WcsOWfn++8jOm7mOiupOS4uiBhcC1zaGFuZ2hhae+8jOWmguaenOaCqOeahOeOr+Wig+WcsOWfn+S4jeaYr+S4iua1t++8jOmcgOS8oOatpOWPguaVsFxuICAgICAgICAgICAgICAvLyBwYXRoOiAnd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lJywgLy8g55So5LqO5Yy65YiG5LiN5ZCM5paH56ug55qE6Ieq5a6a5LmJIGpzIOi3r+W+hO+8jOWmguaenOaCqOeahOaWh+eroOi3r+W+hOS4jeaYryBsb2NhdGlvbi5wYXRobmFtZe+8jOmcgOS8oOatpOWPguaVsFxuXG4gICAgICAgICAgICAgIC8vIOivhOiuuuWKoOi9veaIkOWKn+WQjueahOWbnuiwg+WHveaVsOOAglxuICAgICAgICAgICAgICAvLyDlj5Hooajor4TorrrlkI7oh6rliqjliLfmlrDor4Torrrml7bjgIHliqDovb3kuIvkuIDpobXor4Torrrml7bvvIzkuZ/kvJrop6blj5HjgIJcbiAgICAgICAgICAgICAgLy8g6K+E6K665Yqg6L295aSx6LSl5pe25LiN5Lya6Kem5Y+R44CCXG4gICAgICAgICAgICAgIG9uQ29tbWVudExvYWRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUd2lrb28gYWxsIGNvbW1lbnRzIGxvYWRlZCcpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBUd2lrb28g5oiQ5Yqf5oyC6L295ZCO55qE5Zue6LCD5Ye95pWw44CC546v5aKDIElEIOmUmeivr+OAgee9kee7nOW8guW4uOOAgeaMgui9veWksei0peetieaDheWGteaXtuS4jeS8muinpuWPkeOAglxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVHdpa29vIGxvYWRpbmcgZmluaXNoZWQnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG59XG4iXX0=
