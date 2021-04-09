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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2dvX3RvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQyxJQUFJLGFBQWEsR0FBRztBQUNqQixFQUFBLElBQUksRUFBRSxnQkFBVztBQUNiLFNBQUssTUFBTDtBQUNBLFNBQUssWUFBTDtBQUNILEdBSmdCO0FBS2pCLEVBQUEsTUFBTSxFQUFFLGtCQUFXO0FBQ2I7QUFDRixJQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxNQUFWLENBQWlCLFlBQVU7QUFFdkI7QUFDQSxNQUFBLFNBQVMsR0FBRyxHQUFaLEtBQW9CLENBQXBCLEdBQXdCLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxHQUFiLENBQWlCLFNBQWpCLEVBQTRCLE9BQTVCLENBQXhCLEdBQStELENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxHQUFiLENBQWlCLFNBQWpCLEVBQTRCLE1BQTVCLENBQS9EO0FBQ0gsS0FKRDtBQUtILEdBWmdCO0FBYWpCLEVBQUEsWUFBWSxFQUFFLHdCQUFXO0FBQ3JCO0FBQ0EsSUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsS0FBYixDQUFtQixZQUFVO0FBQ3pCLFVBQUksTUFBTSxDQUFDLFdBQVgsRUFBd0I7QUFDcEIsUUFBQSxNQUFNLENBQUMsV0FBUCxHQUFxQixDQUFyQjtBQUNILE9BRkQsTUFFTyxJQUFJLFFBQVEsQ0FBQyxlQUFULENBQXlCLFNBQTdCLEVBQXdDO0FBQzNDLFFBQUEsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsU0FBekIsR0FBcUMsQ0FBckM7QUFDSCxPQUZNLE1BRUEsSUFBSSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWxCLEVBQTZCO0FBQ2hDLFFBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLEdBQTBCLENBQTFCO0FBQ0g7QUFFSixLQVREO0FBVUg7QUF6QmdCLENBQXBCLEMsQ0E0QkQ7Ozs7QUFDQSxTQUFTLFNBQVQsR0FBcUI7QUFDakIsU0FBTztBQUNQLElBQUEsSUFBSSxFQUFFLE1BQU0sQ0FBQyxXQUFQLElBQXNCLFFBQVEsQ0FBQyxlQUFULENBQXlCLFVBQS9DLElBQTZELFFBQVEsQ0FBQyxJQUFULENBQWMsVUFBM0UsSUFBdUYsQ0FEdEY7QUFFUCxJQUFBLEdBQUcsRUFBRSxNQUFNLENBQUMsV0FBUCxJQUFzQixRQUFRLENBQUMsZUFBVCxDQUF5QixTQUEvQyxJQUE0RCxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQTFFLElBQXVGO0FBRnJGLEdBQVA7QUFJSCxDLENBR0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICDnvJPmhaLmmL7npLpcbiAgICAgICAg57yT5oWi5Zue5Yiw6aG26YOoXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gbGV0IGdvX3RvcF9vYmplY3QgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ29fdG9wKCk7XG4gICAgICAgIHRoaXMuY2xpY2tfZ29fdG9wKCk7XG4gICAgfSxcbiAgICBnb190b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIOa7muWKqOaYvuekumdvX3RvcOaMiemSrlxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIC8vIOaMgee7reebkeWQrOa7muWKqOeKtuaAgVxuICAgICAgICAgICAgZ2V0U2Nyb2xsKCkudG9wICE9PSAwID8gJChcIiNnb190b3BcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpIDogJChcIiNnb190b3BcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIH0pICBcbiAgICB9LFxuICAgIGNsaWNrX2dvX3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOeCueWHu+WbnuWIsOmhtumDqFxuICAgICAgICAkKFwiI2dvX3RvcFwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbi8vIHNjcm9vbFRvcOWFvOWuueaAp+aWueahiFxuZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xuICAgIHJldHVybiB7XG4gICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdHx8MCxcbiAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDBcbiAgICB9O1xufVxuXG5cbi8vIOWmguaenOS4jeWBmum7mOiupOWvvOWFpe+8jOWwseaMieeFp+S4i+mdouWGme+8jOS4jeimgWRlZmF1bHTor41cbmV4cG9ydCB7XG4gICAgZ29fdG9wX29iamVjdCwgLy/lr7zlh7rlr7nosaFcbiAgICBnZXRTY3JvbGwsIC8v5a+85Ye66YCa55So5Ye95pWwXG59XG5cblxuIl19
