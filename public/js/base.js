(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// 百度统计 语雀图片共存
var getImgLoadEd = function getImgLoadEd() {
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
    //带refer
    document.querySelector('meta[name="referrer"]').setAttribute("content", "strict-origin-when-cross-origin");
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?bc6ef915ac17bd07ab8e4012329e8fa1";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })["catch"](function (e) {
    console.log("所拉取的文章图床访问失败!");
  });
};

var _hmt = _hmt || []; // 入口函数，会在页面加载完毕执行


$(function () {
  getImgLoadEd();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9iYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQU0sWUFBWSxHQUFHLFNBQWYsWUFBZSxHQUFNO0VBQ3pCO0VBQ0EsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsZ0JBQWxDLENBQW1ELEtBQW5ELENBQWIsQ0FGeUIsQ0FJekI7O0VBQ0EsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FDZCxJQURjLENBQ1QsTUFEUyxFQUVkLE1BRmMsQ0FFUCxVQUFDLEdBQUQ7SUFBQSxPQUFTLG9DQUFvQyxJQUFwQyxDQUF5QyxHQUFHLENBQUMsR0FBN0MsQ0FBVDtFQUFBLENBRk8sRUFHZCxHQUhjLENBR1YsVUFBQyxJQUFELEVBQVU7SUFDYixPQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7TUFDdEM7TUFDQSxJQUFJLENBQUMsWUFBTCxDQUFrQixnQkFBbEIsRUFBb0MsYUFBcEM7TUFDQSxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUosRUFBZDtNQUNBLE9BQU8sQ0FBQyxHQUFSLEdBQWMsSUFBSSxDQUFDLEdBQW5COztNQUNBLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLFlBQU07UUFDckIsT0FBTyxDQUFDLElBQUQsQ0FBUDtNQUNELENBRkQ7SUFHRCxDQVJNLENBQVA7RUFTRCxDQWJjLENBQWpCLENBTHlCLENBbUJ6Qjs7RUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFDRyxJQURILENBQ1EsVUFBQyxJQUFELEVBQVU7SUFDZDtJQUNBLFFBQVEsQ0FDTCxhQURILENBQ2lCLHVCQURqQixFQUVHLFlBRkgsQ0FFZ0IsU0FGaEIsRUFFMkIsaUNBRjNCO0lBR0EsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVDtJQUNBLEVBQUUsQ0FBQyxHQUFILEdBQVMsNkRBQVQ7SUFDQSxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsb0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBUjtJQUNBLENBQUMsQ0FBQyxVQUFGLENBQWEsWUFBYixDQUEwQixFQUExQixFQUE4QixDQUE5QjtFQUNELENBVkgsV0FXUyxVQUFDLENBQUQsRUFBTztJQUNaLE9BQU8sQ0FBQyxHQUFSLENBQVksZUFBWjtFQUNELENBYkg7QUFjRCxDQWxDRDs7QUFtQ0EsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQW5CLEMsQ0FDQTs7O0FBQ0EsQ0FBQyxDQUFDLFlBQVk7RUFDWixZQUFZO0FBQ2IsQ0FGQSxDQUFEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8g55m+5bqm57uf6K6hIOivrembgOWbvueJh+WFseWtmFxuY29uc3QgZ2V0SW1nTG9hZEVkID0gKCkgPT4ge1xuICAvLyDmn6Xor6LkuLvlrrnlmajkuIvmiYDmnInor63pm4Dlm77niYfvvIjmnIkubmUtaW1hZ2XmoIfor4bvvIlcbiAgbGV0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibHlyaWNzXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIik7XG5cbiAgLy8g5bCGaW1hZ2Vz57G75pWw57uE6L2s5o2i5oiQ5ZCI5rOV5pWw57uEXG4gIGNvbnN0IHByb21pc2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgLmNhbGwoaW1hZ2VzKVxuICAgIC5maWx0ZXIoKGltZykgPT4gL14oaHR0cHM6XFwvXFwvY2RuLm5sYXJrLmNvbVxcL3l1cXVlKS8udGVzdChpbWcuc3JjKSlcbiAgICAubWFwKChub2RlKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyDliqDkuIDph43kv53pmpxcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJyZWZlcnJlcnBvbGljeVwiLCBcIm5vLXJlZmVycmVyXCIpO1xuICAgICAgICBsZXQgbG9hZEltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsb2FkSW1nLnNyYyA9IG5vZGUuc3JjO1xuICAgICAgICBsb2FkSW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKG5vZGUpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIC8vIOWIqeeUqFByb21pc2UuYWxs55uR5ZCs5omA5pyJ5Zu+54mH5Yqg6L295a6M5oiQXG4gIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvL+W4pnJlZmVyXG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwicmVmZXJyZXJcIl0nKVxuICAgICAgICAuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLCBcInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIik7XG4gICAgICB2YXIgaG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgaG0uc3JjID0gXCJodHRwczovL2htLmJhaWR1LmNvbS9obS5qcz9iYzZlZjkxNWFjMTdiZDA3YWI4ZTQwMTIzMjllOGZhMVwiO1xuICAgICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaG0sIHMpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIuaJgOaLieWPlueahOaWh+eroOWbvuW6iuiuv+mXruWksei0pSFcIik7XG4gICAgfSk7XG59O1xudmFyIF9obXQgPSBfaG10IHx8IFtdO1xuLy8g5YWl5Y+j5Ye95pWw77yM5Lya5Zyo6aG16Z2i5Yqg6L295a6M5q+V5omn6KGMXG4kKGZ1bmN0aW9uICgpIHtcbiAgZ2V0SW1nTG9hZEVkKCk7XG59KTtcbiJdfQ==
