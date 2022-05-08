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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L3dlYl9pbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VDQWU7RUFDWCxJQUFJLEVBQUUsZ0JBQVk7SUFDZCxLQUFLLGdCQUFMO0VBQ0gsQ0FIVTtFQUlYO0VBQ0EsZ0JBQWdCLEVBQUUsNEJBQVk7SUFDdEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFKLENBQVMsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUFULENBQWY7SUFDQSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUosRUFBWjtJQUNBLElBQUksT0FBTyxHQUFJLEtBQUssQ0FBQyxPQUFOLEtBQWtCLFFBQVEsQ0FBQyxPQUFULEVBQWpDO0lBQ0EsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFPLElBQUksS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLElBQW5CLENBQWxCLENBQWQsQ0FKc0IsQ0FLdEI7SUFDQTtJQUNBO0VBQ1A7QUFiVSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53ZWJfaW5mb19ydW50aW1lKCk7XG4gICAgfSxcbiAgICAvLyBUT0RPOiAhISHmiJHnnYDlrp7kuI3nn6XpgZPov5nmmK/kuKrku4DkuYjnp5hcbiAgICB3ZWJfaW5mb19ydW50aW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgQmlydGhEYXkgPSBuZXcgRGF0ZShuZXcgRGF0ZSgnMjAyMC8wMS8wNCcpKTtcbiAgICAgICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgdGltZW9sZCA9ICh0b2RheS5nZXRUaW1lKCkgLSBCaXJ0aERheS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgbGV0IGRheXNvbGQgPSBNYXRoLmZsb29yKHRpbWVvbGQgLyAoMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMVwiKS5pbm5lclRleHQgPSBkYXlzb2xkICsgJyDlpKknO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF5c29sZCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYmluZm9fcnVudGltZV9jb3VudF8xXCIpKTtcbiAgICB9LFxufVxuXG4iXX0=
