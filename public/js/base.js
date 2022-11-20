(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// 百度统计 语雀图片共存
var getImgLoadEd = function getImgLoadEd(callback) {
  // 查询主容器下所有语雀图片（有.ne-image标识）
  var images = document.getElementById("lyrics").querySelectorAll("img"); // 将images类数组转换成合法数组

  var promises = Array.prototype.slice.call(images).filter(function (img) {
    return /^(https:\/\/cdn.nlark.com\/yuque)/.test(img.src);
  }).map(function (node) {
    return new Promise(function (resolve, reject) {
      // 加一重保障
      node.setAttribute("referrerpolicy", "no-referrer");
      var loadImg = new Image();
      loadImg.src = node.src;

      loadImg.onload = function () {
        resolve(node);
      };
    });
  }); // 利用Promise.all监听所有图片加载完成

  Promise.all(promises).then(function (data) {
    if (callback) callback();
  })["catch"](function (e) {
    console.log("所拉取的文章图床访问失败!");
  });
};

var baidutongji = function baidutongji() {
  //带refer
  document.querySelector('meta[name="referrer"]').setAttribute("content", "strict-origin-when-cross-origin");
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?bc6ef915ac17bd07ab8e4012329e8fa1";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
};

var _hmt = _hmt || []; // 代码高亮


hljs.highlightAll(); // 入口函数，会在页面加载完毕执行

$(function () {
  // https://bird.ioliu.cn/v1?url=
  // ?plain=true&linebreak=false&anchor=false
  if (document.querySelector("#leaves")) {
    var leaves_dom = document.querySelector("#leaves");

    for (var i = 0; i < 20; i++) {
      var temp_dom = document.createElement("i");
      leaves_dom.appendChild(temp_dom);
    }
  }

  if (document.querySelector("#article")) {
    axios.get("https://bird.ioliu.cn/v1?url=https://www.yuque.com/wztlink1013".concat(window.location.pathname, "html"), {
      withCredentials: false,
      params: {
        plain: true,
        linebreak: false,
        anchor: false
      }
    }).then(function (res) {
      var article_dom = document.querySelector("#article");
      var content = res.data;

      if (Object.prototype.toString.call(content) !== "[object String]") {
        console.log("then: api run success and article content is secret!");
        article_dom.innerHTML = '<span style="color: red;text-align: center">这是一篇加密文章！作者暂未公开。</span>';
        return;
      }

      console.log("then: api run success!");
      article_dom.innerHTML = content; // 去掉h1标题

      article_dom.removeChild(article_dom.children[0]); // 所有代码块添加hljs样式

      article_dom.querySelectorAll("pre.ne-codeblock").forEach(function (el) {
        // 语言高亮
        var ddd = el.getAttribute("data-language");
        var temp = el.innerHTML;
        var node = document.createElement("code");
        node.classList.add(ddd, "hljs");
        node.innerHTML = temp;
        el.innerHTML = "";
        el.appendChild(node);
      });
    })["catch"](function () {
      console.log("catch: api run err!");
    }).then(function () {
      console.log("then: api always run!");
      hljs.highlightAll();
      getImgLoadEd(baidutongji());
    });
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9iYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQU0sWUFBWSxHQUFHLFNBQWYsWUFBZSxDQUFDLFFBQUQsRUFBYztFQUNqQztFQUNBLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDLGdCQUFsQyxDQUFtRCxLQUFuRCxDQUFiLENBRmlDLENBSWpDOztFQUNBLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxTQUFOLENBQWdCLEtBQWhCLENBQ2QsSUFEYyxDQUNULE1BRFMsRUFFZCxNQUZjLENBRVAsVUFBQyxHQUFEO0lBQUEsT0FBUyxvQ0FBb0MsSUFBcEMsQ0FBeUMsR0FBRyxDQUFDLEdBQTdDLENBQVQ7RUFBQSxDQUZPLEVBR2QsR0FIYyxDQUdWLFVBQUMsSUFBRCxFQUFVO0lBQ2IsT0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO01BQ3RDO01BQ0EsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQW9DLGFBQXBDO01BQ0EsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFKLEVBQWQ7TUFDQSxPQUFPLENBQUMsR0FBUixHQUFjLElBQUksQ0FBQyxHQUFuQjs7TUFDQSxPQUFPLENBQUMsTUFBUixHQUFpQixZQUFNO1FBQ3JCLE9BQU8sQ0FBQyxJQUFELENBQVA7TUFDRCxDQUZEO0lBR0QsQ0FSTSxDQUFQO0VBU0QsQ0FiYyxDQUFqQixDQUxpQyxDQW1CakM7O0VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQ0csSUFESCxDQUNRLFVBQUMsSUFBRCxFQUFVO0lBQ2QsSUFBSSxRQUFKLEVBQWMsUUFBUTtFQUN2QixDQUhILFdBSVMsVUFBQyxDQUFELEVBQU87SUFDWixPQUFPLENBQUMsR0FB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Q0gsRUF5Q0csSUF6Q0gsQ0F5Q1EsWUFBTTtNQUNWLE9BQU8sQ0FBQyxHQUFSLENBQVksdUJBQVo7TUFDQSxJQUFJLENBQUMsWUFBTDtNQUNBLFlBQVksQ0FBQyxXQUFXLEVBQVosQ0FBWjtJQUNELENBN0NIO0VBOENEO0FBQ0YsQ0ExREEsQ0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIOeZvuW6pue7n+iuoSDor63pm4Dlm77niYflhbHlrZhcbmNvbnN0IGdldEltZ0xvYWRFZCA9IChjYWxsYmFjaykgPT4ge1xuICAvLyDmn6Xor6LkuLvlrrnlmajkuIvmiYDmnInor63pm4Dlm77niYfvvIjmnIkubmUtaW1hZ2XmoIfor4bvvIlcbiAgbGV0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibHlyaWNzXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIik7XG5cbiAgLy8g5bCGaW1hZ2Vz57G75pWw57uE6L2s5o2i5oiQ5ZCI5rOV5pWw57uEXG4gIGNvbnN0IHByb21pc2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgLmNhbGwoaW1hZ2VzKVxuICAgIC5maWx0ZXIoKGltZykgPT4gL14oaHR0cHM6XFwvXFwvY2RuLm5sYXJrLmNvbVxcL3l1cXVlKS8udGVzdChpbWcuc3JjKSlcbiAgICAubWFwKChub2RlKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyDliqDkuIDph43kv53pmpxcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJyZWZlcnJlcnBvbGljeVwiLCBcIm5vLXJlZmVycmVyXCIpO1xuICAgICAgICBsZXQgbG9hZEltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsb2FkSW1nLnNyYyA9IG5vZGUuc3JjO1xuICAgICAgICBsb2FkSW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKG5vZGUpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIC8vIOWIqeeUqFByb21pc2UuYWxs55uR5ZCs5omA5pyJ5Zu+54mH5Yqg6L295a6M5oiQXG4gIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwi5omA5ouJ5Y+W55qE5paH56ug5Zu+5bqK6K6/6Zeu5aSx6LSlIVwiKTtcbiAgICB9KTtcbn07XG5jb25zdCBiYWlkdXRvbmdqaSA9ICgpID0+IHtcbiAgLy/luKZyZWZlclxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJyZWZlcnJlclwiXScpXG4gICAgLnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgXCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIpO1xuICB2YXIgaG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICBobS5zcmMgPSBcImh0dHBzOi8vaG0uYmFpZHUuY29tL2htLmpzP2JjNmVmOTE1YWMxN2JkMDdhYjhlNDAxMjMyOWU4ZmExXCI7XG4gIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG4gIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaG0sIHMpO1xufTtcbnZhciBfaG10ID0gX2htdCB8fCBbXTtcbi8vIOS7o+eggemrmOS6rlxuaGxqcy5oaWdobGlnaHRBbGwoKTtcbi8vIOWFpeWPo+WHveaVsO+8jOS8muWcqOmhtemdouWKoOi9veWujOavleaJp+ihjFxuJChmdW5jdGlvbiAoKSB7XG4gIC8vIGh0dHBzOi8vYmlyZC5pb2xpdS5jbi92MT91cmw9XG4gIC8vID9wbGFpbj10cnVlJmxpbmVicmVhaz1mYWxzZSZhbmNob3I9ZmFsc2VcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGVhdmVzXCIpKSB7XG4gICAgY29uc3QgbGVhdmVzX2RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGVhdmVzXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgbGV0IHRlbXBfZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICBsZWF2ZXNfZG9tLmFwcGVuZENoaWxkKHRlbXBfZG9tKTtcbiAgICB9XG4gIH1cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJ0aWNsZVwiKSkge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFxuICAgICAgICBgaHR0cHM6Ly9iaXJkLmlvbGl1LmNuL3YxP3VybD1odHRwczovL3d3dy55dXF1ZS5jb20vd3p0bGluazEwMTMke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1odG1sYCxcbiAgICAgICAge1xuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBwbGFpbjogdHJ1ZSxcbiAgICAgICAgICAgIGxpbmVicmVhazogZmFsc2UsXG4gICAgICAgICAgICBhbmNob3I6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgbGV0IGFydGljbGVfZG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcnRpY2xlXCIpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZXMuZGF0YTtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjb250ZW50KSAhPT0gXCJbb2JqZWN0IFN0cmluZ11cIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlbjogYXBpIHJ1biBzdWNjZXNzIGFuZCBhcnRpY2xlIGNvbnRlbnQgaXMgc2VjcmV0IVwiKTtcbiAgICAgICAgICBhcnRpY2xlX2RvbS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgJzxzcGFuIHN0eWxlPVwiY29sb3I6IHJlZDt0ZXh0LWFsaWduOiBjZW50ZXJcIj7ov5nmmK/kuIDnr4fliqDlr4bmlofnq6DvvIHkvZzogIXmmoLmnKrlhazlvIDjgII8L3NwYW4+JztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGVuOiBhcGkgcnVuIHN1Y2Nlc3MhXCIpO1xuICAgICAgICBhcnRpY2xlX2RvbS5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICAvLyDljrvmjoloMeagh+mimFxuICAgICAgICBhcnRpY2xlX2RvbS5yZW1vdmVDaGlsZChhcnRpY2xlX2RvbS5jaGlsZHJlblswXSk7XG4gICAgICAgIC8vIOaJgOacieS7o+eggeWdl+a3u+WKoGhsanPmoLflvI9cbiAgICAgICAgYXJ0aWNsZV9kb20ucXVlcnlTZWxlY3RvckFsbChcInByZS5uZS1jb2RlYmxvY2tcIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAvLyDor63oqIDpq5jkuq5cbiAgICAgICAgICBsZXQgZGRkID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1sYW5ndWFnZVwiKTtcbiAgICAgICAgICBsZXQgdGVtcCA9IGVsLmlubmVySFRNTDtcbiAgICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIpO1xuICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChkZGQsIFwiaGxqc1wiKTtcbiAgICAgICAgICBub2RlLmlubmVySFRNTCA9IHRlbXA7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaDogYXBpIHJ1biBlcnIhXCIpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGVuOiBhcGkgYWx3YXlzIHJ1biFcIik7XG4gICAgICAgIGhsanMuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICAgIGdldEltZ0xvYWRFZChiYWlkdXRvbmdqaSgpKTtcbiAgICAgIH0pO1xuICB9XG59KTtcbiJdfQ==
