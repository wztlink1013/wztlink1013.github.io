(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*
 * @Author: wztlink1013
 * @Date: 2022-07-07 18:48:18
 * @LastEditTime: 2022-07-10 00:26:11
 * @Description:
 */
var _default = {
  init: function init() {
    this.web_info_runtime();
  },
  // TODO: !!!我着实不知道这是个什么秘
  web_info_runtime: function web_info_runtime() {// if (document.querySelector('#webinfo_runtime_count_1')) {
    //   let BirthDay = new Date(new Date('2020/01/04'))
    //   let today = new Date()
    //   let timeold = today.getTime() - BirthDay.getTime()
    //   let daysold = Math.floor(timeold / (24 * 60 * 60 * 1000))
    //   let obj = document.querySelector('#webinfo_runtime_count_1')
    //   obj.innerHTML = daysold + ' 天'
    //   console.log(obj)
    // }
  }
};
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L3dlYl9pbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUNlO0VBQ2IsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCLEtBQUssZ0JBQUw7RUFDRCxDQUhZO0VBSWI7RUFDQSxnQkFBZ0IsRUFBRSw0QkFBWSxDQUM1QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDRDtBQWZZLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKlxuICogQEF1dGhvcjogd3p0bGluazEwMTNcbiAqIEBEYXRlOiAyMDIyLTA3LTA3IDE4OjQ4OjE4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTA3LTEwIDAwOjI2OjExXG4gKiBARGVzY3JpcHRpb246XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMud2ViX2luZm9fcnVudGltZSgpXG4gIH0sXG4gIC8vIFRPRE86ICEhIeaIkeedgOWunuS4jeefpemBk+i/meaYr+S4quS7gOS5iOenmFxuICB3ZWJfaW5mb19ydW50aW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMScpKSB7XG4gICAgLy8gICBsZXQgQmlydGhEYXkgPSBuZXcgRGF0ZShuZXcgRGF0ZSgnMjAyMC8wMS8wNCcpKVxuICAgIC8vICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIC8vICAgbGV0IHRpbWVvbGQgPSB0b2RheS5nZXRUaW1lKCkgLSBCaXJ0aERheS5nZXRUaW1lKClcbiAgICAvLyAgIGxldCBkYXlzb2xkID0gTWF0aC5mbG9vcih0aW1lb2xkIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKVxuICAgIC8vICAgbGV0IG9iaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWJpbmZvX3J1bnRpbWVfY291bnRfMScpXG4gICAgLy8gICBvYmouaW5uZXJIVE1MID0gZGF5c29sZCArICcg5aSpJ1xuICAgIC8vICAgY29uc29sZS5sb2cob2JqKVxuICAgIC8vIH1cbiAgfSxcbn1cbiJdfQ==
