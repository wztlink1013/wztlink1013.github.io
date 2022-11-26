(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GoTop = /*#__PURE__*/function () {
  function GoTop() {
    _classCallCheck(this, GoTop);

    this.goTopBtn = null;
    if (document.getElementById("go_top")) this.goTopBtn = document.getElementById("go_top");
  }

  _createClass(GoTop, [{
    key: "init",
    value: function init() {
      if (!this.goTopBtn) return;
      goTopLister(this.goTopBtn);
      clickGoTopBtn(this.goTopBtn);
    }
  }]);

  return GoTop;
}(); // 持续监听滚动状态


exports["default"] = GoTop;

var goTopLister = function goTopLister(dom) {
  window.onscroll = function () {
    dom.style.display = getScroll().top === 0 ? "none" : "block";
  };
}; // 点击回到顶部


var clickGoTopBtn = function clickGoTopBtn(dom) {
  var timer = null;

  dom.onclick = function () {
    cancelAnimationFrame(timer); //获取当前毫秒数

    var startTime = +new Date(); //获取当前页面的滚动高度

    var b = document.body.scrollTop || document.documentElement.scrollTop;
    var d = 500;
    var c = b;
    timer = requestAnimationFrame(function func() {
      var t = d - Math.max(0, startTime - +new Date() + d);
      document.documentElement.scrollTop = document.body.scrollTop = t * -c / d + b;
      timer = requestAnimationFrame(func);

      if (t == d) {
        cancelAnimationFrame(timer);
      }
    });
  };
}; // scroolTop兼容性方案


var getScroll = function getScroll() {
  return {
    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  };
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L0dvVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztJQ0FxQixLO0VBQ25CLGlCQUFjO0lBQUE7O0lBQ1osS0FBSyxRQUFMLEdBQWdCLElBQWhCO0lBQ0EsSUFBSSxRQUFRLENBQUMsY0FBVCxDQUF3QixRQUF4QixDQUFKLEVBQ0UsS0FBSyxRQUFMLEdBQWdCLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQXhCLENBQWhCO0VBQ0g7Ozs7V0FDRCxnQkFBTztNQUNMLElBQUksQ0FBQyxLQUFLLFFBQVYsRUFBb0I7TUFDcEIsV0FBVyxDQUFDLEtBQUssUUFBTixDQUFYO01BQ0EsYUFBYSxDQUFDLEtBQUssUUFBTixDQUFiO0lBQ0Q7Ozs7S0FFSDs7Ozs7QUFDQSxJQUFNLFdBQVcsR0FBRyxTQUFkLFdBQWMsQ0FBQyxHQUFELEVBQVM7RUFDM0IsTUFBTSxDQUFDLFFBQVAsR0FBa0IsWUFBWTtJQUM1QixHQUFHLENBQUMsS0FBSixDQUFVLE9BQVYsR0FBb0IsU0FBUyxHQUFHLEdBQVosS0FBb0IsQ0FBcEIsR0FBd0IsTUFBeEIsR0FBaUMsT0FBckQ7RUFDRCxDQUZEO0FBR0QsQ0FKRCxDLENBS0E7OztBQUNBLElBQU0sYUFBYSxHQUFHLFNBQWhCLGFBQWdCLENBQUMsR0FBRCxFQUFTO0VBQzdCLElBQUksS0FBSyxHQUFHLElBQVo7O0VBQ0EsR0FBRyxDQUFDLE9BQUosR0FBYyxZQUFZO0lBQ3hCLG9CQUFvQixDQUFDLEtBQUQsQ0FBcEIsQ0FEd0IsQ0FFeEI7O0lBQ0EsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLElBQUosRUFBakIsQ0FId0IsQ0FJeEI7O0lBQ0EsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLElBQTJCLFFBQVEsQ0FBQyxlQUFULENBQXlCLFNBQTVEO0lBQ0EsSUFBSSxDQUFDLEdBQUcsR0FBUjtJQUNBLElBQUksQ0FBQyxHQUFHLENBQVI7SUFDQSxLQUFLLEdBQUcscUJBQXFCLENBQUMsU0FBUyxJQUFULEdBQWdCO01BQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsRUFBWSxTQUFTLEdBQUcsQ0FBQyxJQUFJLElBQUosRUFBYixHQUEwQixDQUF0QyxDQUFaO01BQ0EsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsU0FBekIsR0FBcUMsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLEdBQ2xDLENBQUMsR0FBRyxDQUFDLENBQU4sR0FBVyxDQUFYLEdBQWUsQ0FEakI7TUFFQSxLQUFLLEdBQUcscUJBQXFCLENBQUMsSUFBRCxDQUE3Qjs7TUFDQSxJQUFJLENBQUMsSUFBSSxDQUFULEVBQVk7UUFDVixvQkFBb0IsQ0FBQyxLQUFELENBQXBCO01BQ0Q7SUFDRixDQVI0QixDQUE3QjtFQVNELENBakJEO0FBa0JELENBcEJELEMsQ0FxQkE7OztBQUNBLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBWSxHQUFNO0VBQ3RCLE9BQU87SUFDTCxHQUFHLEVBQ0QsTUFBTSxDQUFDLFdBQVAsSUFDQSxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUR6QixJQUVBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FGZCxJQUdBO0VBTEcsQ0FBUDtBQU9ELENBUkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHb1RvcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ29Ub3BCdG4gPSBudWxsO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvX3RvcFwiKSlcbiAgICAgIHRoaXMuZ29Ub3BCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvX3RvcFwiKTtcbiAgfVxuICBpbml0KCkge1xuICAgIGlmICghdGhpcy5nb1RvcEJ0bikgcmV0dXJuO1xuICAgIGdvVG9wTGlzdGVyKHRoaXMuZ29Ub3BCdG4pO1xuICAgIGNsaWNrR29Ub3BCdG4odGhpcy5nb1RvcEJ0bik7XG4gIH1cbn1cbi8vIOaMgee7reebkeWQrOa7muWKqOeKtuaAgVxuY29uc3QgZ29Ub3BMaXN0ZXIgPSAoZG9tKSA9PiB7XG4gIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb20uc3R5bGUuZGlzcGxheSA9IGdldFNjcm9sbCgpLnRvcCA9PT0gMCA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICB9O1xufTtcbi8vIOeCueWHu+WbnuWIsOmhtumDqFxuY29uc3QgY2xpY2tHb1RvcEJ0biA9IChkb20pID0+IHtcbiAgbGV0IHRpbWVyID0gbnVsbDtcbiAgZG9tLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZXIpO1xuICAgIC8v6I635Y+W5b2T5YmN5q+r56eS5pWwXG4gICAgbGV0IHN0YXJ0VGltZSA9ICtuZXcgRGF0ZSgpO1xuICAgIC8v6I635Y+W5b2T5YmN6aG16Z2i55qE5rua5Yqo6auY5bqmXG4gICAgbGV0IGIgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGxldCBkID0gNTAwO1xuICAgIGxldCBjID0gYjtcbiAgICB0aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBmdW5jKCkge1xuICAgICAgbGV0IHQgPSBkIC0gTWF0aC5tYXgoMCwgc3RhcnRUaW1lIC0gK25ldyBEYXRlKCkgKyBkKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9XG4gICAgICAgICh0ICogLWMpIC8gZCArIGI7XG4gICAgICB0aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jKTtcbiAgICAgIGlmICh0ID09IGQpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufTtcbi8vIHNjcm9vbFRvcOWFvOWuueaAp+aWueahiFxuY29uc3QgZ2V0U2Nyb2xsID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvcDpcbiAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fFxuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHxcbiAgICAgIDAsXG4gIH07XG59O1xuIl19
