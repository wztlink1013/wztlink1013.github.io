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
  if (document.querySelector("#article")) {
    axios.get("https://bird.ioliu.cn/v1?url=https://www.yuque.com/wztlink1013".concat(window.location.pathname, "html"), {
      withCredentials: false,
      params: {
        plain: true,
        linebreak: false,
        anchor: false
      }
    }).then(function (response) {
      var dom = document.querySelector("#article");
      dom.innerHTML = response.data;
      document.querySelectorAll("pre.ne-codeblock").forEach(function (el) {
        // 语言高亮
        var ddd = el.getAttribute("data-language");
        var temp = el.innerHTML;
        var node = document.createElement("code");
        node.classList.add(ddd, "hljs");
        node.innerHTML = temp;
        el.innerHTML = "";
        el.appendChild(node);
      });
    })["catch"](function (error) {
      console.log(error);
    }).then(function () {
      hljs.highlightAll();
      getImgLoadEd(baidutongji());
    });
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9iYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQU0sWUFBWSxHQUFHLFNBQWYsWUFBZSxDQUFDLFFBQUQsRUFBYztFQUNqQztFQUNBLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDLGdCQUFsQyxDQUFtRCxLQUFuRCxDQUFiLENBRmlDLENBSWpDOztFQUNBLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxTQUFOLENBQWdCLEtBQWhCLENBQ2QsSUFEYyxDQUNULE1BRFMsRUFFZCxNQUZjLENBRVAsVUFBQyxHQUFEO0lBQUEsT0FBUyxvQ0FBb0MsSUFBcEMsQ0FBeUMsR0FBRyxDQUFDLEdBQTdDLENBQVQ7RUFBQSxDQUZPLEVBR2QsR0FIYyxDQUdWLFVBQUMsSUFBRCxFQUFVO0lBQ2IsT0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO01BQ3RDO01BQ0EsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQW9DLGFBQXBDO01BQ0EsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFKLEVBQWQ7TUFDQSxPQUFPLENBQUMsR0FBUixHQUFjLElBQUksQ0FBQyxHQUFuQjs7TUFDQSxPQUFPLENBQUMsTUFBUixHQUFpQixZQUFNO1FBQ3JCLE9BQU8sQ0FBQyxJQUFELENBQVA7TUFDRCxDQUZEO0lBR0QsQ0FSTSxDQUFQO0VBU0QsQ0FiYyxDQUFqQixDQUxpQyxDQW1CakM7O0VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQ0csSUFESCxDQUNRLFVBQUMsSUFBRCxFQUFVO0lBQ2QsSUFBSSxRQUFKLEVBQWMsUUFBUTtFQUN2QixDQUhILFdBSVMsVUFBQyxDQUFELEVBQU87SUFDWixPQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7RUFDRCxDQU5IO0FBT0QsQ0EzQkQ7O0FBNEJBLElBQU0sV0FBVyxHQUFHLFNBQWQsV0FBYyxHQUFNO0VBQ3hCO0VBQ0EsUUFBUSxDQUNMLGFBREgsQ0FDaUIsdUJBRGpCLEVBRUcsWUFGSCxDQUVnQixTQUZoQixFQUUyQixpQ0FGM0I7RUFHQSxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QixDQUFUO0VBQ0EsRUFBRSxDQUFDLEdBQUgsR0FBUyw2REFBVDtFQUNBLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFSO0VBQ0EsQ0FBQyxDQUFDLFVBQUYsQ0FBYSxZQUFiLENBQTBCLEVBQTFCLEVBQThCLENBQTlCO0FBQ0QsQ0FURDs7QUFVQSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBbkIsQyxDQUNBOzs7QUFDQSxJQUFJLENBQUMsWUFBTCxHLENBQ0E7O0FBQ0EsQ0FBQyxDQUFDLFlBQVk7RUFDWjtFQUNBO0VBQ0EsSUFBSSxRQUFRLENBQUMsYUFBVCxDQUF1QixVQUF2QixDQUFKLEVBQXdDO0lBQ3RDLEtBQUssQ0FDRixHQURILHlFQUVxRSxNQUFNLENBQUMsUUFBUCxDQUFnQixRQUZyRixXQUdJO01BQ0UsZUFBZSxFQUFFLEtBRG5CO01BRUUsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFLElBREQ7UUFFTixTQUFTLEVBQUUsS0FGTDtRQUdOLE1BQU0sRUFBRTtNQUhGO0lBRlYsQ0FISixFQVlHLElBWkgsQ0FZUSxVQUFVLFFBQVYsRUFBb0I7TUFDeEIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBVjtNQUNBLEdBQUcsQ0FBQyxTQUFKLEdBQWdCLFFBQVEsQ0FBQyxJQUF6QjtNQUNBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsT0FBOUMsQ0FBc0QsVUFBQyxFQUFELEVBQVE7UUFDNUQ7UUFDQSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsWUFBSCxDQUFnQixlQUFoQixDQUFWO1FBQ0EsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFNBQWQ7UUFDQSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QixDQUFYO1FBQ0EsSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLENBQW1CLEdBQW5CLEVBQXdCLE1BQXhCO1FBQ0EsSUFBSSxDQUFDLFNBQUwsR0FBaUIsSUFBakI7UUFDQSxFQUFFLENBQUMsU0FBSCxHQUFlLEVBQWY7UUFDQSxFQUFFLENBQUMsV0FBSCxDQUFlLElBQWY7TUFDRCxDQVREO0lBVUQsQ0F6QkgsV0EwQlMsVUFBQyxLQUFELEVBQVc7TUFDaEIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaO0lBQ0QsQ0E1QkgsRUE2QkcsSUE3QkgsQ0E2QlEsWUFBTTtNQUNWLElBQUksQ0FBQyxZQUFMO01BQ0EsWUFBWSxDQUFDLFdBQVcsRUFBWixDQUFaO0lBQ0QsQ0FoQ0g7RUFpQ0Q7QUFDRixDQXRDQSxDQUFEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8g55m+5bqm57uf6K6hIOivrembgOWbvueJh+WFseWtmFxuY29uc3QgZ2V0SW1nTG9hZEVkID0gKGNhbGxiYWNrKSA9PiB7XG4gIC8vIOafpeivouS4u+WuueWZqOS4i+aJgOacieivrembgOWbvueJh++8iOaciS5uZS1pbWFnZeagh+ivhu+8iVxuICBsZXQgaW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJseXJpY3NcIikucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcblxuICAvLyDlsIZpbWFnZXPnsbvmlbDnu4TovazmjaLmiJDlkIjms5XmlbDnu4RcbiAgY29uc3QgcHJvbWlzZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAuY2FsbChpbWFnZXMpXG4gICAgLmZpbHRlcigoaW1nKSA9PiAvXihodHRwczpcXC9cXC9jZG4ubmxhcmsuY29tXFwveXVxdWUpLy50ZXN0KGltZy5zcmMpKVxuICAgIC5tYXAoKG5vZGUpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIOWKoOS4gOmHjeS/nemanFxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInJlZmVycmVycG9saWN5XCIsIFwibm8tcmVmZXJyZXJcIik7XG4gICAgICAgIGxldCBsb2FkSW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxvYWRJbWcuc3JjID0gbm9kZS5zcmM7XG4gICAgICAgIGxvYWRJbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUobm9kZSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgLy8g5Yip55SoUHJvbWlzZS5hbGznm5HlkKzmiYDmnInlm77niYfliqDovb3lrozmiJBcbiAgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCLmiYDmi4nlj5bnmoTmlofnq6Dlm77luororr/pl67lpLHotKUhXCIpO1xuICAgIH0pO1xufTtcbmNvbnN0IGJhaWR1dG9uZ2ppID0gKCkgPT4ge1xuICAvL+W4pnJlZmVyXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInJlZmVycmVyXCJdJylcbiAgICAuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLCBcInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIik7XG4gIHZhciBobSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIGhtLnNyYyA9IFwiaHR0cHM6Ly9obS5iYWlkdS5jb20vaG0uanM/YmM2ZWY5MTVhYzE3YmQwN2FiOGU0MDEyMzI5ZThmYTFcIjtcbiAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShobSwgcyk7XG59O1xudmFyIF9obXQgPSBfaG10IHx8IFtdO1xuLy8g5Luj56CB6auY5LquXG5obGpzLmhpZ2hsaWdodEFsbCgpO1xuLy8g5YWl5Y+j5Ye95pWw77yM5Lya5Zyo6aG16Z2i5Yqg6L295a6M5q+V5omn6KGMXG4kKGZ1bmN0aW9uICgpIHtcbiAgLy8gaHR0cHM6Ly9iaXJkLmlvbGl1LmNuL3YxP3VybD1cbiAgLy8gP3BsYWluPXRydWUmbGluZWJyZWFrPWZhbHNlJmFuY2hvcj1mYWxzZVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcnRpY2xlXCIpKSB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXG4gICAgICAgIGBodHRwczovL2JpcmQuaW9saXUuY24vdjE/dXJsPWh0dHBzOi8vd3d3Lnl1cXVlLmNvbS93enRsaW5rMTAxMyR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWh0bWxgLFxuICAgICAgICB7XG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHBsYWluOiB0cnVlLFxuICAgICAgICAgICAgbGluZWJyZWFrOiBmYWxzZSxcbiAgICAgICAgICAgIGFuY2hvcjogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBkb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FydGljbGVcIik7XG4gICAgICAgIGRvbS5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicHJlLm5lLWNvZGVibG9ja1wiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIC8vIOivreiogOmrmOS6rlxuICAgICAgICAgIGxldCBkZGQgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxhbmd1YWdlXCIpO1xuICAgICAgICAgIGxldCB0ZW1wID0gZWwuaW5uZXJIVE1MO1xuICAgICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvZGVcIik7XG4gICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGRkZCwgXCJobGpzXCIpO1xuICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gdGVtcDtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGhsanMuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICAgIGdldEltZ0xvYWRFZChiYWlkdXRvbmdqaSgpKTtcbiAgICAgIH0pO1xuICB9XG59KTtcbiJdfQ==
