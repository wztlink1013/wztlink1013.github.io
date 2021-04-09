(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.web_info_runtime = void 0;

var web_info_runtime = function web_info_runtime() {
  var BirthDay = new Date(new Date('2020/01/04'));
  var today = new Date();
  var timeold = today.getTime() - BirthDay.getTime();
  var daysold = Math.floor(timeold / (24 * 60 * 60 * 1000));
  $("#webinfo_runtime_count").html(daysold + "<span>天</span>"); //嵌入失败，我也不知道为什么……
};

exports.web_info_runtime = web_info_runtime;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L3dlYl9pbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBLElBQUksZ0JBQWdCLEdBQUcsU0FBbkIsZ0JBQW1CLEdBQVk7QUFDL0IsTUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFKLENBQVMsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUFULENBQWY7QUFDQSxNQUFJLEtBQUssR0FBRyxJQUFJLElBQUosRUFBWjtBQUNBLE1BQUksT0FBTyxHQUFJLEtBQUssQ0FBQyxPQUFOLEtBQWtCLFFBQVEsQ0FBQyxPQUFULEVBQWpDO0FBQ0EsTUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFPLElBQUksS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLElBQW5CLENBQWxCLENBQWQ7QUFDQSxFQUFBLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCLElBQTVCLENBQWlDLE9BQU8sR0FBRyxnQkFBM0MsRUFMK0IsQ0FLOEI7QUFDaEUsQ0FORCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCB3ZWJfaW5mb19ydW50aW1lID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBCaXJ0aERheSA9IG5ldyBEYXRlKG5ldyBEYXRlKCcyMDIwLzAxLzA0JykpO1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRpbWVvbGQgPSAodG9kYXkuZ2V0VGltZSgpIC0gQmlydGhEYXkuZ2V0VGltZSgpKTtcbiAgICBsZXQgZGF5c29sZCA9IE1hdGguZmxvb3IodGltZW9sZCAvICgyNCAqIDYwICogNjAgKiAxMDAwKSk7XG4gICAgJChcIiN3ZWJpbmZvX3J1bnRpbWVfY291bnRcIikuaHRtbChkYXlzb2xkICsgXCI8c3Bhbj7lpKk8L3NwYW4+XCIpOy8v5bWM5YWl5aSx6LSl77yM5oiR5Lmf5LiN55+l6YGT5Li65LuA5LmI4oCm4oCmXG59XG5cblxuXG5leHBvcnQge1xuICAgIHdlYl9pbmZvX3J1bnRpbWUsXG59XG4iXX0=
