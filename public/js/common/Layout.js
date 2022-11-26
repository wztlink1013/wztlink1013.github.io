(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// PC：header上的左右按钮区域
var arrow_left = $("#arrow_left");
var arrow_right = $("#arrow_right"); // 布局：版心、左中右排版

var ct_left = $(".ct_left");
var ct_right = $(".ct_right");
var ct_center = $(".ct_center");
var container = $(".container"); // PC/app：切换header

var header_pc = $(".header_pc");
var header_app = $(".header_app"); // app：header上的左右按钮区域

var btn_app_sider = $("#btn_app_sider");
var btn_app_right = $("#btn_app_right"); // app：点击header_app时候弹出来的抽屉

var app_side_glass = $("#app_side_glass");
var app_side_content = $("#app_side_content"); // 1.左中配置

var one_container = "80%";
var one_ct_center_width = "75%";
var one_ct_left_width = "25%"; // 2. 中右配置

var two_container = "80%";
var two_ct_center_width = "75%";
var two_ct_right_width = "25%"; // 3. 左中右配置

var three_container = "95%";
var three_ct_center_width = "60%";
var three_ct_right_width = "20%";
var three_ct_left_width = "20%"; // 4. 中配置

var four_container = "75%";
var four_ct_center_width = "100%"; // 设备小于560px的中配置

var device_small_container = "98%";
var device_small_center = "100%"; // 设备小于780px的中配置

var device_center_container = "96%";
var device_center_center = "100%";
var top = 0;

var Layout = /*#__PURE__*/function () {
  function Layout() {
    _classCallCheck(this, Layout);
  }

  _createClass(Layout, [{
    key: "init",
    value: function init() {
      btn_pc_switch();
      btn_app_switch();
      browser_remember();
      device_switch(); // 这个放到最后自调用!因为不管本地存储是什么，最终还是要根据设备监听为主
    }
  }]);

  return Layout;
}();
/* PC：单/双/三栏布局切换按钮点击事件 */


exports["default"] = Layout;

var btn_pc_switch = function btn_pc_switch() {
  arrow_left.click(function () {
    if (ct_left.css("display") === "none") {
      // 转换切换之后的箭头按钮
      $("#arrow_left i:first-child").css({
        display: "none"
      });
      $("#arrow_left i:last-child").css({
        display: "inline-block"
      });
      ct_left.css("display", "block");

      if (ct_right.css("display") === "none") {
        //左中配置
        left_center();
      } else {
        //左中右配置
        left_center_right();
      }
    } else {
      $("#arrow_left i:first-child").css({
        display: "inline-block"
      });
      $("#arrow_left i:last-child").css({
        display: "none"
      });
      ct_left.css("display", "none");

      if (ct_right.css("display") === "none") {
        //中配置
        center();
      } else {
        //中右配置
        center_right();
      }
    }
  });
  arrow_right.click(function () {
    if (ct_right.css("display") === "none") {
      // 转换切换之后的箭头按钮
      $("#arrow_right i:first-child").css({
        display: "none"
      });
      $("#arrow_right i:last-child").css({
        display: "inline-block"
      });
      ct_right.css("display", "block");

      if (ct_left.css("display") === "none") {
        //中右配置
        center_right();
      } else {
        //左中右配置
        left_center_right();
      }
    } else {
      $("#arrow_right i:first-child").css({
        display: "inline-block"
      });
      $("#arrow_right i:last-child").css({
        display: "none"
      });
      ct_right.css("display", "none");

      if (ct_left.css("display") === "none") {
        // 中配置
        center();
      } else {
        // 左中配置
        left_center();
      }
    }
  });
};
/* 移动端左右上角的按钮 */


var btn_app_switch = function btn_app_switch() {
  // 点击左按钮
  btn_app_sider.click(function () {
    app_side_glass.css({
      display: "block"
    });
    app_side_content.css({
      display: "block"
    }); // 阻止抽屉层下的滑动穿透

    top = window.scrollY;
    container.css({
      position: "fixed",
      top: -top + "px"
    });
  }); // 点击毛玻璃片

  app_side_glass.click(function () {
    app_side_glass.css({
      display: "none"
    });
    app_side_content.css({
      display: "none"
    }); // 阻止抽屉层下的滑动穿透

    container.css({
      position: "",
      top: ""
    });
    window.scrollTo(0, top);
  }); // 点击右按钮 弹出搜索框

  btn_app_right.click(function () {// alert("本网站还在开发中，诸多功能还未完善，敬请期待~");
    //   console.log("本网站还在开发中，诸多功能还未完善，敬请期待~");
  });
};
/* 浏览器记住布局 */


var browser_remember = function browser_remember() {
  var b_left = ct_left.css("display");
  var b_right = ct_right.css("display");
  var b_layout;

  if (localStorage.hasOwnProperty("layout")) {
    // 浏览器有缓存的情况
    var layout_change = window.localStorage.getItem("layout");
    console.log("Layout: have cache");

    if (layout_change === "LR") {
      // 左中右布局
      left_center_right();
    } else if (layout_change === "L") {
      // 左中布局
      left_center();
    } else if (layout_change === "R") {
      // 中右布局
      center_right();
    } else if (layout_change === "C") {
      // 中布局
      center();
    } else {
      // 其他莫名其妙的情况
      left_center_right();
    }
  } else {
    // 浏览器没有缓存的情况
    console.log("Layout: no cache");

    if (b_left === "block" && b_right === "none") {
      // 左中布局
      b_layout = "L";
    } else if (b_left === "none" && b_right === "block") {
      // 中右布局
      b_layout = "R";
    } else if (b_left === "block" && b_right === "block") {
      //左中右布局
      b_layout = "LR";
    } else {
      b_layout = "LR"; // 左中右布局

      left_center_right();
    }

    window.localStorage.setItem("layout", b_layout);
  }
};
/* 媒体查询布局 */


var device_switch = function device_switch() {
  // 创建查询列表
  var device_width = [window.matchMedia("(max-width: 560px)"), window.matchMedia("(max-width: 980px)"), window.matchMedia("(max-width: 1261px)")]; // 定义回调函数

  function mediaMatchs() {
    if (device_width[0].matches) {
      device_small();
    } else if (device_width[1].matches) {
      device_center();
    } else if (device_width[2].matches) {
      device_largest();
    } else {
      console.log("Layout: > setting sizing");
    }
  } // 先运行一次回调函数


  mediaMatchs(); // 为查询列表注册监听器，同时将回调函数传给监听器

  for (var i = 0; i < device_width.length; i++) {
    device_width[i].addListener(mediaMatchs);
  }
}; // 判断pc段左右上角的箭头该显示哪个


var left_right_arrow = function left_right_arrow() {
  if (ct_left.css("display") === "none") {
    $("#arrow_left i:first-child").css({
      display: "inline-block"
    });
    $("#arrow_left i:last-child").css({
      display: "none"
    });
  } else {
    $("#arrow_left i:first-child").css({
      display: "none"
    });
    $("#arrow_left i:last-child").css({
      display: "inline-block"
    });
  }

  if (ct_right.css("display") === "none") {
    $("#arrow_right i:first-child").css({
      display: "inline-block"
    });
    $("#arrow_right i:last-child").css({
      display: "none"
    });
  } else {
    $("#arrow_right i:first-child").css({
      display: "none"
    });
    $("#arrow_right i:last-child").css({
      display: "inline-block"
    });
  }
};

var left_center_right = function left_center_right() {
  container.css({
    width: three_container
  });
  ct_center.css({
    width: three_ct_center_width
  });
  ct_left.css({
    width: three_ct_left_width,
    display: "block"
  });
  ct_right.css({
    width: three_ct_right_width,
    display: "block"
  });
  left_right_arrow();

  if (localStorage.hasOwnProperty("layout")) {
    window.localStorage.removeItem("layout");
    window.localStorage.setItem("layout", "LR");
    console.log("Layout: ", localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "LR");
  }
};

var left_center = function left_center() {
  container.css({
    width: one_container
  });
  ct_center.css({
    width: one_ct_center_width
  });
  ct_left.css({
    width: one_ct_left_width
  });
  ct_left.css("display", "block");
  ct_right.css("display", "none");
  left_right_arrow();

  if (localStorage.hasOwnProperty("layout")) {
    window.localStorage.removeItem("layout");
    window.localStorage.setItem("layout", "L");
    console.log("Layout: ", localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "L");
  }
};

var center_right = function center_right() {
  container.css({
    width: two_container
  });
  ct_right.css({
    width: two_ct_right_width
  });
  ct_center.css({
    width: two_ct_center_width
  });
  ct_left.css("display", "none");
  ct_right.css("display", "block");
  left_right_arrow();

  if (localStorage.hasOwnProperty("layout")) {
    window.localStorage.removeItem("layout");
    window.localStorage.setItem("layout", "R");
    console.log("Layout: ", localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "R");
  }
};

var center = function center() {
  container.css({
    width: four_container
  });
  ct_center.css({
    width: four_ct_center_width
  });
  ct_left.css("display", "none");
  ct_right.css("display", "none");
  left_right_arrow();

  if (localStorage.hasOwnProperty("layout")) {
    window.localStorage.removeItem("layout");
    localStorage.setItem("layout", "C");
    console.log("Layout: ", localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "C");
  }
};

var device_small = function device_small() {
  // 最小尺寸：最大560px
  console.log("Layout: < 560px");
  header_pc.css({
    display: "none"
  });
  header_app.css({
    display: "block"
  }); // 设置布局

  container.css({
    width: device_small_container
  });
  ct_center.css({
    width: device_small_center
  });
  ct_left.css("display", "none");
  ct_right.css("display", "none");
};

var device_center = function device_center() {
  // 中等尺寸：最大980px
  console.log("Layout: < 980px");
  header_pc.css({
    display: "none"
  });
  header_app.css({
    display: "block"
  }); // 设置布局

  container.css({
    width: device_center_container
  });
  ct_center.css({
    width: device_center_center
  });
  ct_left.css("display", "none");
  ct_right.css("display", "none");
};

var device_largest = function device_largest() {
  // 最大尺寸：最大1261px
  console.log("Layout: < 1261px");

  if (ct_left.css("display") === "none") {
    $("#arrow_left i:first-child").css({
      display: "inline-block"
    });
    $("#arrow_left i:last-child").css({
      display: "none"
    });
  } else {
    $("#arrow_left i:first-child").css({
      display: "none"
    });
    $("#arrow_left i:last-child").css({
      display: "inline-block"
    });
  }

  if (ct_right.css("display") === "none") {
    $("#arrow_right i:first-child").css({
      display: "inline-block"
    });
    $("#arrow_right i:last-child").css({
      display: "none"
    });
  } else {
    $("#arrow_right i:first-child").css({
      display: "none"
    });
    $("#arrow_right i:last-child").css({
      display: "inline-block"
    });
  }

  header_pc.css({
    display: "block"
  });
  header_app.css({
    display: "none"
  });
  container.css({
    width: three_container
  });
  ct_center.css({
    width: three_ct_center_width
  });
  ct_left.css({
    width: three_ct_left_width,
    display: "block"
  });
  ct_right.css({
    width: three_ct_right_width,
    display: "block"
  });
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0EsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGFBQUQsQ0FBbEI7QUFDQSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsY0FBRCxDQUFuQixDLENBRUE7O0FBQ0EsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFVBQUQsQ0FBZjtBQUNBLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxXQUFELENBQWhCO0FBQ0EsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQUQsQ0FBakI7QUFDQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQixDLENBRUE7O0FBQ0EsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQUQsQ0FBakI7QUFDQSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFsQixDLENBRUE7O0FBQ0EsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLGdCQUFELENBQXJCO0FBQ0EsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLGdCQUFELENBQXJCLEMsQ0FFQTs7QUFDQSxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsaUJBQUQsQ0FBdEI7QUFDQSxJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxtQkFBRCxDQUF4QixDLENBRUE7O0FBQ0EsSUFBSSxhQUFhLEdBQUcsS0FBcEI7QUFDQSxJQUFJLG1CQUFtQixHQUFHLEtBQTFCO0FBQ0EsSUFBSSxpQkFBaUIsR0FBRyxLQUF4QixDLENBQ0E7O0FBQ0EsSUFBSSxhQUFhLEdBQUcsS0FBcEI7QUFDQSxJQUFJLG1CQUFtQixHQUFHLEtBQTFCO0FBQ0EsSUFBSSxrQkFBa0IsR0FBRyxLQUF6QixDLENBQ0E7O0FBQ0EsSUFBSSxl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RUFBWCxDQUFmO0VBRUEsU0FBUyxDQUFDLEdBQVYsQ0FBYztJQUFFLEtBQUssRUFBRTtFQUFULENBQWQ7RUFDQSxTQUFTLENBQUMsR0FBVixDQUFjO0lBQUUsS0FBSyxFQUFFO0VBQVQsQ0FBZDtFQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVk7SUFDVixLQUFLLEVBQUUsbUJBREc7SUFFVixPQUFPLEVBQUU7RUFGQyxDQUFaO0VBSUEsUUFBUSxDQUFDLEdBQVQsQ0FBYTtJQUNYLEtBQUssRUFBRSxvQkFESTtJQUVYLE9BQU8sRUFBRTtFQUZFLENBQWI7QUFJRCxDQS9CRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIFBD77yaaGVhZGVy5LiK55qE5bem5Y+z5oyJ6ZKu5Yy65Z+fXG5sZXQgYXJyb3dfbGVmdCA9ICQoXCIjYXJyb3dfbGVmdFwiKTtcbmxldCBhcnJvd19yaWdodCA9ICQoXCIjYXJyb3dfcmlnaHRcIik7XG5cbi8vIOW4g+WxgO+8mueJiOW/g+OAgeW3puS4reWPs+aOkueJiFxubGV0IGN0X2xlZnQgPSAkKFwiLmN0X2xlZnRcIik7XG5sZXQgY3RfcmlnaHQgPSAkKFwiLmN0X3JpZ2h0XCIpO1xubGV0IGN0X2NlbnRlciA9ICQoXCIuY3RfY2VudGVyXCIpO1xubGV0IGNvbnRhaW5lciA9ICQoXCIuY29udGFpbmVyXCIpO1xuXG4vLyBQQy9hcHDvvJrliIfmjaJoZWFkZXJcbmxldCBoZWFkZXJfcGMgPSAkKFwiLmhlYWRlcl9wY1wiKTtcbmxldCBoZWFkZXJfYXBwID0gJChcIi5oZWFkZXJfYXBwXCIpO1xuXG4vLyBhcHDvvJpoZWFkZXLkuIrnmoTlt6blj7PmjInpkq7ljLrln59cbmxldCBidG5fYXBwX3NpZGVyID0gJChcIiNidG5fYXBwX3NpZGVyXCIpO1xubGV0IGJ0bl9hcHBfcmlnaHQgPSAkKFwiI2J0bl9hcHBfcmlnaHRcIik7XG5cbi8vIGFwcO+8mueCueWHu2hlYWRlcl9hcHDml7blgJnlvLnlh7rmnaXnmoTmir3lsYlcbmxldCBhcHBfc2lkZV9nbGFzcyA9ICQoXCIjYXBwX3NpZGVfZ2xhc3NcIik7XG5sZXQgYXBwX3NpZGVfY29udGVudCA9ICQoXCIjYXBwX3NpZGVfY29udGVudFwiKTtcblxuLy8gMS7lt6bkuK3phY3nva5cbmxldCBvbmVfY29udGFpbmVyID0gXCI4MCVcIjtcbmxldCBvbmVfY3RfY2VudGVyX3dpZHRoID0gXCI3NSVcIjtcbmxldCBvbmVfY3RfbGVmdF93aWR0aCA9IFwiMjUlXCI7XG4vLyAyLiDkuK3lj7PphY3nva5cbmxldCB0d29fY29udGFpbmVyID0gXCI4MCVcIjtcbmxldCB0d29fY3RfY2VudGVyX3dpZHRoID0gXCI3NSVcIjtcbmxldCB0d29fY3RfcmlnaHRfd2lkdGggPSBcIjI1JVwiO1xuLy8gMy4g5bem5Lit5Y+z6YWN572uXG5sZXQgdGhyZWVfY29udGFpbmVyID0gXCI5NSVcIjtcbmxldCB0aHJlZV9jdF9jZW50ZXJfd2lkdGggPSBcIjYwJVwiO1xubGV0IHRocmVlX2N0X3JpZ2h0X3dpZHRoID0gXCIyMCVcIjtcbmxldCB0aHJlZV9jdF9sZWZ0X3dpZHRoID0gXCIyMCVcIjtcbi8vIDQuIOS4remFjee9rlxubGV0IGZvdXJfY29udGFpbmVyID0gXCI3NSVcIjtcbmxldCBmb3VyX2N0X2NlbnRlcl93aWR0aCA9IFwiMTAwJVwiO1xuLy8g6K6+5aSH5bCP5LqONTYwcHjnmoTkuK3phY3nva5cbmxldCBkZXZpY2Vfc21hbGxfY29udGFpbmVyID0gXCI5OCVcIjtcbmxldCBkZXZpY2Vfc21hbGxfY2VudGVyID0gXCIxMDAlXCI7XG4vLyDorr7lpIflsI/kuo43ODBweOeahOS4remFjee9rlxubGV0IGRldmljZV9jZW50ZXJfY29udGFpbmVyID0gXCI5NiVcIjtcbmxldCBkZXZpY2VfY2VudGVyX2NlbnRlciA9IFwiMTAwJVwiO1xubGV0IHRvcCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgaW5pdCgpIHtcbiAgICBidG5fcGNfc3dpdGNoKCk7XG4gICAgYnRuX2FwcF9zd2l0Y2goKTtcbiAgICBicm93c2VyX3JlbWVtYmVyKCk7XG4gICAgZGV2aWNlX3N3aXRjaCgpOyAvLyDov5nkuKrmlL7liLDmnIDlkI7oh6rosIPnlKgh5Zug5Li65LiN566h5pys5Zyw5a2Y5YKo5piv5LuA5LmI77yM5pyA57uI6L+Y5piv6KaB5qC55o2u6K6+5aSH55uR5ZCs5Li65Li7XG4gIH1cbn1cbi8qIFBD77ya5Y2VL+WPjC/kuInmoI/luIPlsYDliIfmjaLmjInpkq7ngrnlh7vkuovku7YgKi9cbmNvbnN0IGJ0bl9wY19zd2l0Y2ggPSAoKSA9PiB7XG4gIGFycm93X2xlZnQuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAvLyDovazmjaLliIfmjaLkuYvlkI7nmoTnrq3lpLTmjInpkq5cbiAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgLy/lt6bkuK3phY3nva5cbiAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8v5bem5Lit5Y+z6YWN572uXG4gICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAvL+S4remFjee9rlxuICAgICAgICBjZW50ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8v5Lit5Y+z6YWN572uXG4gICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgYXJyb3dfcmlnaHQuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgLy/kuK3lj7PphY3nva5cbiAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL+W3puS4reWPs+mFjee9rlxuICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAvLyDkuK3phY3nva5cbiAgICAgICAgY2VudGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlt6bkuK3phY3nva5cbiAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcbi8qIOenu+WKqOerr+W3puWPs+S4iuinkueahOaMiemSriAqL1xuY29uc3QgYnRuX2FwcF9zd2l0Y2ggPSAoKSA9PiB7XG4gIC8vIOeCueWHu+W3puaMiemSrlxuICBidG5fYXBwX3NpZGVyLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBhcHBfc2lkZV9nbGFzcy5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gICAgYXBwX3NpZGVfY29udGVudC5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gICAgLy8g6Zi75q2i5oq95bGJ5bGC5LiL55qE5ruR5Yqo56m/6YCPXG4gICAgdG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgY29udGFpbmVyLmNzcyh7IHBvc2l0aW9uOiBcImZpeGVkXCIsIHRvcDogLXRvcCArIFwicHhcIiB9KTtcbiAgfSk7XG4gIC8vIOeCueWHu+avm+eOu+eSg+eJh1xuICBhcHBfc2lkZV9nbGFzcy5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgYXBwX3NpZGVfZ2xhc3MuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgYXBwX3NpZGVfY29udGVudC5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAvLyDpmLvmraLmir3lsYnlsYLkuIvnmoTmu5Hliqjnqb/pgI9cbiAgICBjb250YWluZXIuY3NzKHsgcG9zaXRpb246IFwiXCIsIHRvcDogXCJcIiB9KTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdG9wKTtcbiAgfSk7XG4gIC8vIOeCueWHu+WPs+aMiemSriDlvLnlh7rmkJzntKLmoYZcbiAgYnRuX2FwcF9yaWdodC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgLy8gYWxlcnQoXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgIC8vICAgY29uc29sZS5sb2coXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICB9KTtcbn07XG4vKiDmtY/op4jlmajorrDkvY/luIPlsYAgKi9cbmNvbnN0IGJyb3dzZXJfcmVtZW1iZXIgPSAoKSA9PiB7XG4gIGxldCBiX2xlZnQgPSBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIik7XG4gIGxldCBiX3JpZ2h0ID0gY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKTtcbiAgbGV0IGJfbGF5b3V0O1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICAvLyDmtY/op4jlmajmnInnvJPlrZjnmoTmg4XlhrVcbiAgICBsZXQgbGF5b3V0X2NoYW5nZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKTtcbiAgICBjb25zb2xlLmxvZyhcIkxheW91dDogaGF2ZSBjYWNoZVwiKTtcbiAgICBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJMUlwiKSB7XG4gICAgICAvLyDlt6bkuK3lj7PluIPlsYBcbiAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkxcIikge1xuICAgICAgLy8g5bem5Lit5biD5bGAXG4gICAgICBsZWZ0X2NlbnRlcigpO1xuICAgIH0gZWxzZSBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJSXCIpIHtcbiAgICAgIC8vIOS4reWPs+W4g+WxgFxuICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkNcIikge1xuICAgICAgLy8g5Lit5biD5bGAXG4gICAgICBjZW50ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5YW25LuW6I6r5ZCN5YW25aaZ55qE5oOF5Ya1XG4gICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyDmtY/op4jlmajmsqHmnInnvJPlrZjnmoTmg4XlhrVcbiAgICBjb25zb2xlLmxvZyhcIkxheW91dDogbm8gY2FjaGVcIik7XG4gICAgaWYgKGJfbGVmdCA9PT0gXCJibG9ja1wiICYmIGJfcmlnaHQgPT09IFwibm9uZVwiKSB7XG4gICAgICAvLyDlt6bkuK3luIPlsYBcbiAgICAgIGJfbGF5b3V0ID0gXCJMXCI7XG4gICAgfSBlbHNlIGlmIChiX2xlZnQgPT09IFwibm9uZVwiICYmIGJfcmlnaHQgPT09IFwiYmxvY2tcIikge1xuICAgICAgLy8g5Lit5Y+z5biD5bGAXG4gICAgICBiX2xheW91dCA9IFwiUlwiO1xuICAgIH0gZWxzZSBpZiAoYl9sZWZ0ID09PSBcImJsb2NrXCIgJiYgYl9yaWdodCA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAvL+W3puS4reWPs+W4g+WxgFxuICAgICAgYl9sYXlvdXQgPSBcIkxSXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJfbGF5b3V0ID0gXCJMUlwiO1xuICAgICAgLy8g5bem5Lit5Y+z5biD5bGAXG4gICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgIH1cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgYl9sYXlvdXQpO1xuICB9XG59O1xuLyog5aqS5L2T5p+l6K+i5biD5bGAICovXG5jb25zdCBkZXZpY2Vfc3dpdGNoID0gKCkgPT4ge1xuICAvLyDliJvlu7rmn6Xor6LliJfooahcbiAgbGV0IGRldmljZV93aWR0aCA9IFtcbiAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDU2MHB4KVwiKSxcbiAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDk4MHB4KVwiKSxcbiAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEyNjFweClcIiksXG4gIF07XG5cbiAgLy8g5a6a5LmJ5Zue6LCD5Ye95pWwXG4gIGZ1bmN0aW9uIG1lZGlhTWF0Y2hzKCkge1xuICAgIGlmIChkZXZpY2Vfd2lkdGhbMF0ubWF0Y2hlcykge1xuICAgICAgZGV2aWNlX3NtYWxsKCk7XG4gICAgfSBlbHNlIGlmIChkZXZpY2Vfd2lkdGhbMV0ubWF0Y2hlcykge1xuICAgICAgZGV2aWNlX2NlbnRlcigpO1xuICAgIH0gZWxzZSBpZiAoZGV2aWNlX3dpZHRoWzJdLm1hdGNoZXMpIHtcbiAgICAgIGRldmljZV9sYXJnZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0OiA+IHNldHRpbmcgc2l6aW5nXCIpO1xuICAgIH1cbiAgfVxuICAvLyDlhYjov5DooYzkuIDmrKHlm57osIPlh73mlbBcbiAgbWVkaWFNYXRjaHMoKTtcbiAgLy8g5Li65p+l6K+i5YiX6KGo5rOo5YaM55uR5ZCs5Zmo77yM5ZCM5pe25bCG5Zue6LCD5Ye95pWw5Lyg57uZ55uR5ZCs5ZmoXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGV2aWNlX3dpZHRoLmxlbmd0aDsgaSsrKSB7XG4gICAgZGV2aWNlX3dpZHRoW2ldLmFkZExpc3RlbmVyKG1lZGlhTWF0Y2hzKTtcbiAgfVxufTtcblxuLy8g5Yik5patcGPmrrXlt6blj7PkuIrop5LnmoTnrq3lpLTor6XmmL7npLrlk6rkuKpcbmNvbnN0IGxlZnRfcmlnaHRfYXJyb3cgPSAoKSA9PiB7XG4gIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICB9IGVsc2Uge1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxuICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxufTtcbmNvbnN0IGxlZnRfY2VudGVyX3JpZ2h0ID0gKCkgPT4ge1xuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IHRocmVlX2NvbnRhaW5lciB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKHtcbiAgICB3aWR0aDogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIH0pO1xuICBjdF9yaWdodC5jc3Moe1xuICAgIHdpZHRoOiB0aHJlZV9jdF9yaWdodF93aWR0aCxcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIH0pO1xuICBsZWZ0X3JpZ2h0X2Fycm93KCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsYXlvdXRcIik7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFJcIik7XG4gICAgY29uc29sZS5sb2coXCJMYXlvdXQ6IFwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFJcIik7XG4gIH1cbn07XG5jb25zdCBsZWZ0X2NlbnRlciA9ICgpID0+IHtcbiAgY29udGFpbmVyLmNzcyh7IHdpZHRoOiBvbmVfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IG9uZV9jdF9jZW50ZXJfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKHsgd2lkdGg6IG9uZV9jdF9sZWZ0X3dpZHRoIH0pO1xuICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGxlZnRfcmlnaHRfYXJyb3coKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShcImxheW91dFwiKSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxheW91dFwiKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0OiBcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gIH1cbn07XG5jb25zdCBjZW50ZXJfcmlnaHQgPSAoKSA9PiB7XG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogdHdvX2NvbnRhaW5lciB9KTtcbiAgY3RfcmlnaHQuY3NzKHsgd2lkdGg6IHR3b19jdF9yaWdodF93aWR0aCB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiB0d29fY3RfY2VudGVyX3dpZHRoIH0pO1xuICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gIGxlZnRfcmlnaHRfYXJyb3coKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShcImxheW91dFwiKSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxheW91dFwiKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJSXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0OiBcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIlJcIik7XG4gIH1cbn07XG5jb25zdCBjZW50ZXIgPSAoKSA9PiB7XG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogZm91cl9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogZm91cl9jdF9jZW50ZXJfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBsZWZ0X3JpZ2h0X2Fycm93KCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsYXlvdXRcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJDXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0OiBcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkNcIik7XG4gIH1cbn07XG5jb25zdCBkZXZpY2Vfc21hbGwgPSAoKSA9PiB7XG4gIC8vIOacgOWwj+WwuuWvuO+8muacgOWkpzU2MHB4XG4gIGNvbnNvbGUubG9nKFwiTGF5b3V0OiA8IDU2MHB4XCIpO1xuXG4gIGhlYWRlcl9wYy5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgaGVhZGVyX2FwcC5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gIC8vIOiuvue9ruW4g+WxgFxuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IGRldmljZV9zbWFsbF9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogZGV2aWNlX3NtYWxsX2NlbnRlciB9KTtcbiAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG59O1xuY29uc3QgZGV2aWNlX2NlbnRlciA9ICgpID0+IHtcbiAgLy8g5Lit562J5bC65a+477ya5pyA5aSnOTgwcHhcbiAgY29uc29sZS5sb2coXCJMYXlvdXQ6IDwgOTgwcHhcIik7XG5cbiAgaGVhZGVyX3BjLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICBoZWFkZXJfYXBwLmNzcyh7IGRpc3BsYXk6IFwiYmxvY2tcIiB9KTtcbiAgLy8g6K6+572u5biD5bGAXG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogZGV2aWNlX2NlbnRlcl9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogZGV2aWNlX2NlbnRlcl9jZW50ZXIgfSk7XG4gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xufTtcbmNvbnN0IGRldmljZV9sYXJnZXN0ID0gKCkgPT4ge1xuICAvLyDmnIDlpKflsLrlr7jvvJrmnIDlpKcxMjYxcHhcbiAgY29uc29sZS5sb2coXCJMYXlvdXQ6IDwgMTI2MXB4XCIpO1xuXG4gIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICB9IGVsc2Uge1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxuICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxuICBoZWFkZXJfcGMuY3NzKHsgZGlzcGxheTogXCJibG9ja1wiIH0pO1xuICBoZWFkZXJfYXBwLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuXG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogdGhyZWVfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IHRocmVlX2N0X2NlbnRlcl93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3Moe1xuICAgIHdpZHRoOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSk7XG4gIGN0X3JpZ2h0LmNzcyh7XG4gICAgd2lkdGg6IHRocmVlX2N0X3JpZ2h0X3dpZHRoLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSk7XG59O1xuIl19
