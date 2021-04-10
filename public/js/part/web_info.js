(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  init: function init() {
    this.web_info_runtime();
  },
  // TODO: !!!我着实不知道这是个什么秘
  web_info_runtime: function web_info_runtime() {
    var BirthDay = new Date(new Date('2020/01/04'));
    var today = new Date();
    var timeold = today.getTime() - BirthDay.getTime();
    var daysold = Math.floor(timeold / (24 * 60 * 60 * 1000)); // document.querySelector("#webinfo_runtime_count_1").innerText = daysold + ' 天';
    // console.log(daysold);
    // console.log(document.querySelector("#webinfo_runtime_count_1"));
  }
};
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L3dlYl9pbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VDQWU7QUFDWCxFQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkLFNBQUssZ0JBQUw7QUFDSCxHQUhVO0FBSVg7QUFDQSxFQUFBLGdCQUFnQixFQUFFLDRCQUFZO0FBQ3RCLFFBQUksUUFBUSxHQUFHLElBQUksSUFBSixDQUFTLElBQUksSUFBSixDQUFTLFlBQVQsQ0FBVCxDQUFmO0FBQ0EsUUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFKLEVBQVo7QUFDQSxRQUFJLE9BQU8sR0FBSSxLQUFLLENBQUMsT0FBTixLQUFrQixRQUFRLENBQUMsT0FBVCxFQUFqQztBQUNBLFFBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBTyxJQUFJLEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxJQUFuQixDQUFsQixDQUFkLENBSnNCLENBS3RCO0FBQ0E7QUFDQTtBQUNQO0FBYlUsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMud2ViX2luZm9fcnVudGltZSgpO1xuICAgIH0sXG4gICAgLy8gVE9ETzogISEh5oiR552A5a6e5LiN55+l6YGT6L+Z5piv5Liq5LuA5LmI56eYXG4gICAgd2ViX2luZm9fcnVudGltZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IEJpcnRoRGF5ID0gbmV3IERhdGUobmV3IERhdGUoJzIwMjAvMDEvMDQnKSk7XG4gICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgbGV0IHRpbWVvbGQgPSAodG9kYXkuZ2V0VGltZSgpIC0gQmlydGhEYXkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIGxldCBkYXlzb2xkID0gTWF0aC5mbG9vcih0aW1lb2xkIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2ViaW5mb19ydW50aW1lX2NvdW50XzFcIikuaW5uZXJUZXh0ID0gZGF5c29sZCArICcg5aSpJztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRheXNvbGQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMVwiKSk7XG4gICAgfSxcbn1cblxuIl19
