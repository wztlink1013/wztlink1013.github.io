(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScroll = getScroll;
exports.go_top_object = void 0;

/*******************************************************************
        缓慢显示
        缓慢回到顶部
*******************************************************************/
var go_top_object = {
  init: function init() {
    this.go_top();
    this.click_go_top();
  },
  go_top: function go_top() {
    // 滚动显示go_top按钮
    $(window).scroll(function () {
      // 持续监听滚动状态
      getScroll().top !== 0 ? $("#go_top").css("display", "block") : $("#go_top").css("display", "none");
    });
  },
  click_go_top: function click_go_top() {
    // 点击回到顶部
    $("#go_top").click(function () {
      if (window.pageYOffset) {
        window.pageYOffset = 0;
      } else if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = 0;
      } else if (document.body.scrollTop) {
        document.body.scrollTop = 0;
      }
    });
  }
}; // scroolTop兼容性方案

exports.go_top_object = go_top_object;

function getScroll() {
  return {
    left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  };
} // 如果不做默认导入，就按照下面写，不要default词

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQyxJQUFJLGFBQWEsR0FBRztFQUNqQixJQUFJLEVBQUUsZ0JBQVc7SUFDYixLQUFLLE1BQUw7SUFDQSxLQUFLLFlBQUw7RUFDSCxDQUpnQjtFQUtqQixNQUFNLEVBQUUsa0JBQVc7SUFDYjtJQUNGLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxNQUFWLENBQWlCLFlBQVU7TUFFdkI7TUFDQSxTQUFTLEdBQUcsR0FBWixLQUFvQixDQUFwQixHQUF3QixDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsR0FBYixDQUFpQixTQUFqQixFQUE0QixPQUE1QixDQUF4QixHQUErRCxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsR0FBYixDQUFpQixTQUFqQixFQUE0QixNQUE1QixDQUEvRDtJQUNILENBSkQ7RUFLSCxDQVpnQjtFQWFqQixZQUFZLEVBQUUsd0JBQVc7SUFDckI7SUFDQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsS0FBYixDQUFtQixZQUFVO01BQ3pCLElBQUksTUFBTSxDQUFDLFdBQVgsRUFBd0I7UUFDcEIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsQ0FBckI7TUFDSCxDQUZELE1BRU8sSUFBSSxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUE3QixFQUF3QztRQUMzQyxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUF6QixHQUFxQyxDQUFyQztNQUNILENBRk0sTUFFQSxJQUFJLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBbEIsRUFBNkI7UUFDaEMsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLEdBQTBCLENBQTFCO01BQ0g7SUFFSixDQVREO0VBVUg7QUF6QmdCLENBQXBCLEMsQ0E0QkQ7Ozs7QUFDQSxTQUFTLFNBQVQsR0FBcUI7RUFDakIsT0FBTztJQUNQLElBQUksRUFBRSxNQUFNLENBQUMsV0FBUCxJQUFzQixRQUFRLENBQUMsZUFBVCxDQUF5QixVQUEvQyxJQUE2RCxRQUFRLENBQUMsSUFBVCxDQUFjLFVBQTNFLElBQXVGLENBRHRGO0lBRVAsR0FBRyxFQUFFLE1BQU0sQ0FBQyxXQUFQLElBQXNCLFFBQVEsQ0FBQyxlQUFULENBQXlCLFNBQS9DLElBQTRELFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBMUUsSUFBdUY7RUFGckYsQ0FBUDtBQUlILEMsQ0FHRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIOe8k+aFouaYvuekulxuICAgICAgICDnvJPmhaLlm57liLDpobbpg6hcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiBsZXQgZ29fdG9wX29iamVjdCA9IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5nb190b3AoKTtcbiAgICAgICAgdGhpcy5jbGlja19nb190b3AoKTtcbiAgICB9LFxuICAgIGdvX3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8g5rua5Yqo5pi+56S6Z29fdG9w5oyJ6ZKuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgLy8g5oyB57ut55uR5ZCs5rua5Yqo54q25oCBXG4gICAgICAgICAgICBnZXRTY3JvbGwoKS50b3AgIT09IDAgPyAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIikgOiAkKFwiI2dvX3RvcFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgfSkgIFxuICAgIH0sXG4gICAgY2xpY2tfZ29fdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g54K55Ye75Zue5Yiw6aG26YOoXG4gICAgICAgICQoXCIjZ29fdG9wXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy8gc2Nyb29sVG9w5YW85a655oCn5pa55qGIXG5mdW5jdGlvbiBnZXRTY3JvbGwoKSB7XG4gICAgcmV0dXJuIHtcbiAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0fHwwLFxuICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMFxuICAgIH07XG59XG5cblxuLy8g5aaC5p6c5LiN5YGa6buY6K6k5a+85YWl77yM5bCx5oyJ54Wn5LiL6Z2i5YaZ77yM5LiN6KaBZGVmYXVsdOivjVxuZXhwb3J0IHtcbiAgICBnb190b3Bfb2JqZWN0LCAvL+WvvOWHuuWvueixoVxuICAgIGdldFNjcm9sbCwgLy/lr7zlh7rpgJrnlKjlh73mlbBcbn1cblxuXG4iXX0=
