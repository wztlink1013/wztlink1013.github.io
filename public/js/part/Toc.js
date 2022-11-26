(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Toc = /*#__PURE__*/function () {
  function Toc() {
    _classCallCheck(this, Toc);

    this.tocContainer = document.querySelector(".toc_container");
    this.tocBtn = document.querySelector("#toc_btn");
  }

  _createClass(Toc, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.tocBtn.addEventListener("click", function () {
        if (_this.tocContainer.style.display === "none") {
          _this.tocContainer.style.display = "block";
        } else if (_this.tocContainer.style.display === "block") {
          _this.tocContainer.style.display = "none";
        } else {
          _this.tocContainer.style.display = "block";
        }
      });
    }
  }]);

  return Toc;
}();

exports["default"] = Toc;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L1RvYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7SUNBcUIsRztFQUNuQixlQUFjO0lBQUE7O0lBQ1osS0FBSyxZQUFMLEdBQW9CLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixDQUFwQjtJQUNBLEtBQUssTUFBTCxHQUFjLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCLENBQWQ7RUFDRDs7OztXQUNELGdCQUFPO01BQUE7O01BQ0wsS0FBSyxNQUFMLENBQVksZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBTTtRQUMxQyxJQUFJLEtBQUksQ0FBQyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLE9BQXhCLEtBQW9DLE1BQXhDLEVBQWdEO1VBQzlDLEtBQUksQ0FBQyxZQUFMLENBQWtCLEtBQWxCLENBQXdCLE9BQXhCLEdBQWtDLE9BQWxDO1FBQ0QsQ0FGRCxNQUVPLElBQUksS0FBSSxDQUFDLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsT0FBeEIsS0FBb0MsT0FBeEMsRUFBaUQ7VUFDdEQsS0FBSSxDQUFDLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBd0IsT0FBeEIsR0FBa0MsTUFBbEM7UUFDRCxDQUZNLE1BRUE7VUFDTCxLQUFJLENBQUMsWUFBTCxDQUFrQixLQUFsQixDQUF3QixPQUF4QixHQUFrQyxPQUFsQztRQUNEO01BQ0YsQ0FSRDtJQVNEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9jIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b2NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvY19jb250YWluZXJcIik7XG4gICAgdGhpcy50b2NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvY19idG5cIik7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnRvY0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudG9jQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgIHRoaXMudG9jQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudG9jQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICB0aGlzLnRvY0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvY0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=
