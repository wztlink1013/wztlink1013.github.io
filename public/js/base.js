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

var _hmt = _hmt || []; // 代码高亮


hljs.highlightAll(); // 入口函数，会在页面加载完毕执行

$(function () {
  getImgLoadEd();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9iYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQU0sWUFBWSxHQUFHLFNBQWYsWUFBZSxHQUFNO0VBQ3pCO0VBQ0EsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsZ0JBQWxDLENBQW1ELEtBQW5ELENBQWIsQ0FGeUIsQ0FJekI7O0VBQ0EsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FDZCxJQURjLENBQ1QsTUFEUyxFQUVkLE1BRmMsQ0FFUCxVQUFDLEdBQUQ7SUFBQSxPQUFTLG9DQUFvQyxJQUFwQyxDQUF5QyxHQUFHLENBQUMsR0FBN0MsQ0FBVDtFQUFBLENBRk8sRUFHZCxHQUhjLENBR1YsVUFBQyxJQUFELEVBQVU7SUFDYixPQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7TUFDdEM7TUFDQSxJQUFJLENBQUMsWUFBTCxDQUFrQixnQkFBbEIsRUFBb0MsYUFBcEM7TUFDQSxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUosRUFBZDtNQUNBLE9BQU8sQ0FBQyxHQUFSLEdBQWMsSUFBSSxDQUFDLEdBQW5COztNQUNBLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLFlBQU07UUFDckIsT0FBTyxDQUFDLElBQUQsQ0FBUDtNQUNELENBRkQ7SUFHRCxDQVJNLENBQVA7RUFTRCxDQWJjLENBQWpCLENBTHlCLENBbUJ6Qjs7RUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFDRyxJQURILENBQ1EsVUFBQyxJQUFELEVBQVU7SUFDZDtJQUNBLFFBQVEsQ0FDTCxhQURILENBQ2lCLHVCQURqQixFQUVHLFlBRkgsQ0FFZ0IsU0FGaEIsRUFFMkIsaUNBRjNCO0lBR0EsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVDtJQUNBLEVBQUUsQ0FBQyxHQUFILEdBQVMsNkRBQVQ7SUFDQSxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsb0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBUjtJQUNBLENBQUMsQ0FBQyxVQUFGLENBQWEsWUFBYixDQUEwQixFQUExQixFQUE4QixDQUE5QjtFQUNELENBVkgsV0FXUyxVQUFDLENBQUQsRUFBTztJQUNaLE9BQU8sQ0FBQyxHQUFSLENBQVksZUFBWjtFQUNELENBYkg7QUFjRCxDQWxDRDs7QUFtQ0EsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQW5CLEMsQ0FDQTs7O0FBQ0EsSUFBSSxDQUFDLFlBQUwsRyxDQUNBOztBQUNBLENBQUMsQ0FBQyxZQUFZO0VBQ1osWUFBWTtBQUNiLENBRkEsQ0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIOeZvuW6pue7n+iuoSDor63pm4Dlm77niYflhbHlrZhcbmNvbnN0IGdldEltZ0xvYWRFZCA9ICgpID0+IHtcbiAgLy8g5p+l6K+i5Li75a655Zmo5LiL5omA5pyJ6K+t6ZuA5Zu+54mH77yI5pyJLm5lLWltYWdl5qCH6K+G77yJXG4gIGxldCBpbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImx5cmljc1wiKS5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpO1xuXG4gIC8vIOWwhmltYWdlc+exu+aVsOe7hOi9rOaNouaIkOWQiOazleaVsOe7hFxuICBjb25zdCBwcm9taXNlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgIC5jYWxsKGltYWdlcylcbiAgICAuZmlsdGVyKChpbWcpID0+IC9eKGh0dHBzOlxcL1xcL2Nkbi5ubGFyay5jb21cXC95dXF1ZSkvLnRlc3QoaW1nLnNyYykpXG4gICAgLm1hcCgobm9kZSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8g5Yqg5LiA6YeN5L+d6ZqcXG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwicmVmZXJyZXJwb2xpY3lcIiwgXCJuby1yZWZlcnJlclwiKTtcbiAgICAgICAgbGV0IGxvYWRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbG9hZEltZy5zcmMgPSBub2RlLnNyYztcbiAgICAgICAgbG9hZEltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShub2RlKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAvLyDliKnnlKhQcm9taXNlLmFsbOebkeWQrOaJgOacieWbvueJh+WKoOi9veWujOaIkFxuICBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy/luKZyZWZlclxuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInJlZmVycmVyXCJdJylcbiAgICAgICAgLnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgXCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIpO1xuICAgICAgdmFyIGhtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgIGhtLnNyYyA9IFwiaHR0cHM6Ly9obS5iYWlkdS5jb20vaG0uanM/YmM2ZWY5MTVhYzE3YmQwN2FiOGU0MDEyMzI5ZThmYTFcIjtcbiAgICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG4gICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhtLCBzKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCLmiYDmi4nlj5bnmoTmlofnq6Dlm77luororr/pl67lpLHotKUhXCIpO1xuICAgIH0pO1xufTtcbnZhciBfaG10ID0gX2htdCB8fCBbXTtcbi8vIOS7o+eggemrmOS6rlxuaGxqcy5oaWdobGlnaHRBbGwoKTtcbi8vIOWFpeWPo+WHveaVsO+8jOS8muWcqOmhtemdouWKoOi9veWujOavleaJp+ihjFxuJChmdW5jdGlvbiAoKSB7XG4gIGdldEltZ0xvYWRFZCgpO1xufSk7XG4iXX0=
