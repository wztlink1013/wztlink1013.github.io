(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// PC：header上的左右按钮区域
var arrow_left = $("#arrow_left");
var arrow_right = $("#arrow_right"); // 布局：版心、左中右排版

var ct_left = $(".ct_left");
var ct_right = $(".ct_right");
var ct_center = $(".ct_center");
var container = $(".container"); // PC/app：切换header

var header = $(".header");
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
var device_center_center = "100%"; // 判断pc段左右上角的箭头该显示哪个

function left_right_arrow() {
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
}

function left_center_right() {
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
    console.log("布局：左中右");
    console.log(localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "LR");
  }
}

function left_center() {
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
    console.log("布局：左中");
    console.log(localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "L");
  }
}

function center_right() {
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
    console.log("布局：中右");
    console.log(localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "R");
  }
}

function center() {
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
    console.log("布局：中");
    console.log(localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "C");
  }
}

function device_small() {
  // 最小尺寸：最大560px
  console.log("小于560px尺寸");
  header.css({
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
}

function device_center() {
  // 中等尺寸：最大980px
  console.log("小于980px尺寸");
  header.css({
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
}

function device_largest() {
  // 最大尺寸：最大1261px
  console.log("小于1261px尺寸");

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

  header.css({
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
}

var _default = {
  init: function init() {
    this.btn_pc_switch();
    this.btn_app_switch();
    this.browser_remember();
    this.device_switch(); // 这个放到最后自调用!因为不管本地存储是什么，最终还是要根据设备监听为主
  },

  /* PC：单/双/三栏布局切换按钮点击事件 */
  btn_pc_switch: function btn_pc_switch() {
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
  },

  /* 移动端左右上角的按钮 */
  btn_app_switch: function btn_app_switch() {
    // 点击左按钮
    btn_app_sider.click(function () {
      app_side_glass.css({
        display: "block"
      });
      app_side_content.css({
        display: "block"
      });
    }); // 点击毛玻璃片

    app_side_glass.click(function () {
      app_side_glass.css({
        display: "none"
      });
      app_side_content.css({
        display: "none"
      });
    }); // 点击右按钮 弹出搜索框

    btn_app_right.click(function () {// alert("本网站还在开发中，诸多功能还未完善，敬请期待~");
      //   console.log("本网站还在开发中，诸多功能还未完善，敬请期待~");
    });
  },

  /* 浏览器记住布局 */
  browser_remember: function browser_remember() {
    var b_left = ct_left.css("display");
    var b_right = ct_right.css("display");
    var b_layout;

    if (localStorage.hasOwnProperty("layout")) {
      // 浏览器有缓存的情况
      var layout_change = window.localStorage.getItem("layout");
      console.log("有layout布局缓存");

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
      console.log("没有layout布局缓存");

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
  },

  /* 媒体查询布局 */
  device_switch: function device_switch() {
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
        console.log("大于设定最大尺寸情况");
      }
    } // 先运行一次回调函数


    mediaMatchs(); // 为查询列表注册监听器，同时将回调函数传给监听器

    for (var i = 0; i < device_width.length; i++) {
      device_width[i].addListener(mediaMatchs);
    }
  }
};
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7QUFDQSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFsQjtBQUNBLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxjQUFELENBQW5CLEMsQ0FFQTs7QUFDQSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsVUFBRCxDQUFmO0FBQ0EsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFdBQUQsQ0FBaEI7QUFDQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQjtBQUNBLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxZQUFELENBQWpCLEMsQ0FFQTs7QUFDQSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsU0FBRCxDQUFkO0FBQ0EsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGFBQUQsQ0FBbEIsQyxDQUVBOztBQUNBLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxnQkFBRCxDQUFyQjtBQUNBLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxnQkFBRCxDQUFyQixDLENBRUE7O0FBQ0EsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLGlCQUFELENBQXRCO0FBQ0EsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsbUJBQUQsQ0FBeEIsQyxDQUVBOztBQUNBLElBQUksYUFBYSxHQUFHLEtBQXBCO0FBQ0EsSUFBSSxtQkFBbUIsR0FBRyxLQUExQjtBQUNBLElBQUksaUJBQWlCLEdBQUcsS0FBeEIsQyxDQUNBOztBQUNBLElBQUksYUFBYSxHQUFHLEtBQXBCO0FBQ0EsSUFBSSxtQkFBbUIsR0FBRyxLQUExQjtBQUNBLElBQUksa0JBQWtCLEdBQUcsS0FBekIsQyxDQUNBOztBQUNBLElBQUksZUFBZSxHQUFH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QUE0QixRQUE1QixFQUFzQyxRQUF0QztJQUNEO0VBQ0YsQ0E5SFk7O0VBK0hiO0VBQ0EsYUFBYSxFQUFFLHlCQUFZO0lBQ3pCO0lBQ0EsSUFBSSxZQUFZLEdBQUcsQ0FDakIsTUFBTSxDQUFDLFVBQVAsQ0FBa0Isb0JBQWxCLENBRGlCLEVBRWpCLE1BQU0sQ0FBQyxVQUFQLENBQWtCLG9CQUFsQixDQUZpQixFQUdqQixNQUFNLENBQUMsVUFBUCxDQUFrQixxQkFBbEIsQ0FIaUIsQ0FBbkIsQ0FGeUIsQ0FRekI7O0lBQ0EsU0FBUyxXQUFULEdBQXVCO01BQ3JCLElBQUksWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQixPQUFwQixFQUE2QjtRQUMzQixZQUFZO01BQ2IsQ0FGRCxNQUVPLElBQUksWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQixPQUFwQixFQUE2QjtRQUNsQyxhQUFhO01BQ2QsQ0FGTSxNQUVBLElBQUksWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQixPQUFwQixFQUE2QjtRQUNsQyxjQUFjO01BQ2YsQ0FGTSxNQUVBO1FBQ0wsT0FBTyxDQUFDLEdBQVIsQ0FBWSxZQUFaO01BQ0Q7SUFDRixDQW5Cd0IsQ0FvQnpCOzs7SUFDQSxXQUFXLEdBckJjLENBc0J6Qjs7SUFDQSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFqQyxFQUF5QyxDQUFDLEVBQTFDLEVBQThDO01BQzVDLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0IsV0FBaEIsQ0FBNEIsV0FBNUI7SUFDRDtFQUNGO0FBMUpZLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBQQ++8mmhlYWRlcuS4iueahOW3puWPs+aMiemSruWMuuWfn1xubGV0IGFycm93X2xlZnQgPSAkKFwiI2Fycm93X2xlZnRcIik7XG5sZXQgYXJyb3dfcmlnaHQgPSAkKFwiI2Fycm93X3JpZ2h0XCIpO1xuXG4vLyDluIPlsYDvvJrniYjlv4PjgIHlt6bkuK3lj7PmjpLniYhcbmxldCBjdF9sZWZ0ID0gJChcIi5jdF9sZWZ0XCIpO1xubGV0IGN0X3JpZ2h0ID0gJChcIi5jdF9yaWdodFwiKTtcbmxldCBjdF9jZW50ZXIgPSAkKFwiLmN0X2NlbnRlclwiKTtcbmxldCBjb250YWluZXIgPSAkKFwiLmNvbnRhaW5lclwiKTtcblxuLy8gUEMvYXBw77ya5YiH5o2iaGVhZGVyXG5sZXQgaGVhZGVyID0gJChcIi5oZWFkZXJcIik7XG5sZXQgaGVhZGVyX2FwcCA9ICQoXCIuaGVhZGVyX2FwcFwiKTtcblxuLy8gYXBw77yaaGVhZGVy5LiK55qE5bem5Y+z5oyJ6ZKu5Yy65Z+fXG5sZXQgYnRuX2FwcF9zaWRlciA9ICQoXCIjYnRuX2FwcF9zaWRlclwiKTtcbmxldCBidG5fYXBwX3JpZ2h0ID0gJChcIiNidG5fYXBwX3JpZ2h0XCIpO1xuXG4vLyBhcHDvvJrngrnlh7toZWFkZXJfYXBw5pe25YCZ5by55Ye65p2l55qE5oq95bGJXG5sZXQgYXBwX3NpZGVfZ2xhc3MgPSAkKFwiI2FwcF9zaWRlX2dsYXNzXCIpO1xubGV0IGFwcF9zaWRlX2NvbnRlbnQgPSAkKFwiI2FwcF9zaWRlX2NvbnRlbnRcIik7XG5cbi8vIDEu5bem5Lit6YWN572uXG5sZXQgb25lX2NvbnRhaW5lciA9IFwiODAlXCI7XG5sZXQgb25lX2N0X2NlbnRlcl93aWR0aCA9IFwiNzUlXCI7XG5sZXQgb25lX2N0X2xlZnRfd2lkdGggPSBcIjI1JVwiO1xuLy8gMi4g5Lit5Y+z6YWN572uXG5sZXQgdHdvX2NvbnRhaW5lciA9IFwiODAlXCI7XG5sZXQgdHdvX2N0X2NlbnRlcl93aWR0aCA9IFwiNzUlXCI7XG5sZXQgdHdvX2N0X3JpZ2h0X3dpZHRoID0gXCIyNSVcIjtcbi8vIDMuIOW3puS4reWPs+mFjee9rlxubGV0IHRocmVlX2NvbnRhaW5lciA9IFwiOTUlXCI7XG5sZXQgdGhyZWVfY3RfY2VudGVyX3dpZHRoID0gXCI2MCVcIjtcbmxldCB0aHJlZV9jdF9yaWdodF93aWR0aCA9IFwiMjAlXCI7XG5sZXQgdGhyZWVfY3RfbGVmdF93aWR0aCA9IFwiMjAlXCI7XG4vLyA0LiDkuK3phY3nva5cbmxldCBmb3VyX2NvbnRhaW5lciA9IFwiNzUlXCI7XG5sZXQgZm91cl9jdF9jZW50ZXJfd2lkdGggPSBcIjEwMCVcIjtcbi8vIOiuvuWkh+Wwj+S6jjU2MHB455qE5Lit6YWN572uXG5sZXQgZGV2aWNlX3NtYWxsX2NvbnRhaW5lciA9IFwiOTglXCI7XG5sZXQgZGV2aWNlX3NtYWxsX2NlbnRlciA9IFwiMTAwJVwiO1xuLy8g6K6+5aSH5bCP5LqONzgwcHjnmoTkuK3phY3nva5cbmxldCBkZXZpY2VfY2VudGVyX2NvbnRhaW5lciA9IFwiOTYlXCI7XG5sZXQgZGV2aWNlX2NlbnRlcl9jZW50ZXIgPSBcIjEwMCVcIjtcblxuLy8g5Yik5patcGPmrrXlt6blj7PkuIrop5LnmoTnrq3lpLTor6XmmL7npLrlk6rkuKpcbmZ1bmN0aW9uIGxlZnRfcmlnaHRfYXJyb3coKSB7XG4gIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICB9IGVsc2Uge1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxuICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxufVxuZnVuY3Rpb24gbGVmdF9jZW50ZXJfcmlnaHQoKSB7XG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogdGhyZWVfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IHRocmVlX2N0X2NlbnRlcl93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3Moe1xuICAgIHdpZHRoOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSk7XG4gIGN0X3JpZ2h0LmNzcyh7XG4gICAgd2lkdGg6IHRocmVlX2N0X3JpZ2h0X3dpZHRoLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSk7XG4gIGxlZnRfcmlnaHRfYXJyb3coKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShcImxheW91dFwiKSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxheW91dFwiKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJMUlwiKTtcbiAgICBjb25zb2xlLmxvZyhcIuW4g+WxgO+8muW3puS4reWPs1wiKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFJcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIGxlZnRfY2VudGVyKCkge1xuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IG9uZV9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogb25lX2N0X2NlbnRlcl93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3MoeyB3aWR0aDogb25lX2N0X2xlZnRfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgbGVmdF9yaWdodF9hcnJvdygpO1xuICBpZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KFwibGF5b3V0XCIpKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibGF5b3V0XCIpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gICAgY29uc29sZS5sb2coXCLluIPlsYDvvJrlt6bkuK1cIik7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIGNlbnRlcl9yaWdodCgpIHtcbiAgY29udGFpbmVyLmNzcyh7IHdpZHRoOiB0d29fY29udGFpbmVyIH0pO1xuICBjdF9yaWdodC5jc3MoeyB3aWR0aDogdHdvX2N0X3JpZ2h0X3dpZHRoIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IHR3b19jdF9jZW50ZXJfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgbGVmdF9yaWdodF9hcnJvdygpO1xuICBpZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KFwibGF5b3V0XCIpKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibGF5b3V0XCIpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIlJcIik7XG4gICAgY29uc29sZS5sb2coXCLluIPlsYDvvJrkuK3lj7NcIik7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIlJcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIGNlbnRlcigpIHtcbiAgY29udGFpbmVyLmNzcyh7IHdpZHRoOiBmb3VyX2NvbnRhaW5lciB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiBmb3VyX2N0X2NlbnRlcl93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGxlZnRfcmlnaHRfYXJyb3coKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShcImxheW91dFwiKSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxheW91dFwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkNcIik7XG4gICAgY29uc29sZS5sb2coXCLluIPlsYDvvJrkuK1cIik7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkNcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIGRldmljZV9zbWFsbCgpIHtcbiAgLy8g5pyA5bCP5bC65a+477ya5pyA5aSnNTYwcHhcbiAgY29uc29sZS5sb2coXCLlsI/kuo41NjBweOWwuuWvuFwiKTtcblxuICBoZWFkZXIuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gIGhlYWRlcl9hcHAuY3NzKHsgZGlzcGxheTogXCJibG9ja1wiIH0pO1xuICAvLyDorr7nva7luIPlsYBcbiAgY29udGFpbmVyLmNzcyh7IHdpZHRoOiBkZXZpY2Vfc21hbGxfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IGRldmljZV9zbWFsbF9jZW50ZXIgfSk7XG4gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xufVxuZnVuY3Rpb24gZGV2aWNlX2NlbnRlcigpIHtcbiAgLy8g5Lit562J5bC65a+477ya5pyA5aSnOTgwcHhcbiAgY29uc29sZS5sb2coXCLlsI/kuo45ODBweOWwuuWvuFwiKTtcblxuICBoZWFkZXIuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gIGhlYWRlcl9hcHAuY3NzKHsgZGlzcGxheTogXCJibG9ja1wiIH0pO1xuICAvLyDorr7nva7luIPlsYBcbiAgY29udGFpbmVyLmNzcyh7IHdpZHRoOiBkZXZpY2VfY2VudGVyX2NvbnRhaW5lciB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiBkZXZpY2VfY2VudGVyX2NlbnRlciB9KTtcbiAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG59XG5mdW5jdGlvbiBkZXZpY2VfbGFyZ2VzdCgpIHtcbiAgLy8g5pyA5aSn5bC65a+477ya5pyA5aSnMTI2MXB4XG4gIGNvbnNvbGUubG9nKFwi5bCP5LqOMTI2MXB45bC65a+4XCIpO1xuXG4gIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICB9IGVsc2Uge1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxuICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxuICBoZWFkZXIuY3NzKHsgZGlzcGxheTogXCJibG9ja1wiIH0pO1xuICBoZWFkZXJfYXBwLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuXG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogdGhyZWVfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IHRocmVlX2N0X2NlbnRlcl93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3Moe1xuICAgIHdpZHRoOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSk7XG4gIGN0X3JpZ2h0LmNzcyh7XG4gICAgd2lkdGg6IHRocmVlX2N0X3JpZ2h0X3dpZHRoLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnRuX3BjX3N3aXRjaCgpO1xuICAgIHRoaXMuYnRuX2FwcF9zd2l0Y2goKTtcbiAgICB0aGlzLmJyb3dzZXJfcmVtZW1iZXIoKTtcbiAgICB0aGlzLmRldmljZV9zd2l0Y2goKTsgLy8g6L+Z5Liq5pS+5Yiw5pyA5ZCO6Ieq6LCD55SoIeWboOS4uuS4jeeuoeacrOWcsOWtmOWCqOaYr+S7gOS5iO+8jOacgOe7iOi/mOaYr+imgeagueaNruiuvuWkh+ebkeWQrOS4uuS4u1xuICB9LFxuICAvKiBQQ++8muWNlS/lj4wv5LiJ5qCP5biD5bGA5YiH5o2i5oyJ6ZKu54K55Ye75LqL5Lu2ICovXG4gIGJ0bl9wY19zd2l0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICBhcnJvd19sZWZ0LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgIC8vIOi9rOaNouWIh+aNouS5i+WQjueahOeureWktOaMiemSrlxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgLy/lt6bkuK3phY3nva5cbiAgICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8v5bem5Lit5Y+z6YWN572uXG4gICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgLy/kuK3phY3nva5cbiAgICAgICAgICBjZW50ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL+S4reWPs+mFjee9rlxuICAgICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhcnJvd19yaWdodC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIC8v5Lit5Y+z6YWN572uXG4gICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy/lt6bkuK3lj7PphY3nva5cbiAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIC8vIOS4remFjee9rlxuICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIOW3puS4remFjee9rlxuICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgLyog56e75Yqo56uv5bem5Y+z5LiK6KeS55qE5oyJ6ZKuICovXG4gIGJ0bl9hcHBfc3dpdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8g54K55Ye75bem5oyJ6ZKuXG4gICAgYnRuX2FwcF9zaWRlci5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBfc2lkZV9nbGFzcy5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gICAgICBhcHBfc2lkZV9jb250ZW50LmNzcyh7IGRpc3BsYXk6IFwiYmxvY2tcIiB9KTtcbiAgICB9KTtcbiAgICAvLyDngrnlh7vmr5vnjrvnkoPniYdcbiAgICBhcHBfc2lkZV9nbGFzcy5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBfc2lkZV9nbGFzcy5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAgIGFwcF9zaWRlX2NvbnRlbnQuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgfSk7XG4gICAgLy8g54K55Ye75Y+z5oyJ6ZKuIOW8ueWHuuaQnOe0ouahhlxuICAgIGJ0bl9hcHBfcmlnaHQuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgLy8gYWxlcnQoXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgIC8vICAgY29uc29sZS5sb2coXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgIH0pO1xuICB9LFxuICAvKiDmtY/op4jlmajorrDkvY/luIPlsYAgKi9cbiAgYnJvd3Nlcl9yZW1lbWJlcjogZnVuY3Rpb24gKCkge1xuICAgIGxldCBiX2xlZnQgPSBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIik7XG4gICAgbGV0IGJfcmlnaHQgPSBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIpO1xuICAgIGxldCBiX2xheW91dDtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICAgIC8vIOa1j+iniOWZqOaciee8k+WtmOeahOaDheWGtVxuICAgICAgbGV0IGxheW91dF9jaGFuZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIuaciWxheW91dOW4g+WxgOe8k+WtmFwiKTtcbiAgICAgIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkxSXCIpIHtcbiAgICAgICAgLy8g5bem5Lit5Y+z5biD5bGAXG4gICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiTFwiKSB7XG4gICAgICAgIC8vIOW3puS4reW4g+WxgFxuICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIlJcIikge1xuICAgICAgICAvLyDkuK3lj7PluIPlsYBcbiAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICB9IGVsc2UgaWYgKGxheW91dF9jaGFuZ2UgPT09IFwiQ1wiKSB7XG4gICAgICAgIC8vIOS4reW4g+WxgFxuICAgICAgICBjZW50ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWFtuS7luiOq+WQjeWFtuWmmeeahOaDheWGtVxuICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDmtY/op4jlmajmsqHmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgIGNvbnNvbGUubG9nKFwi5rKh5pyJbGF5b3V05biD5bGA57yT5a2YXCIpO1xuICAgICAgaWYgKGJfbGVmdCA9PT0gXCJibG9ja1wiICYmIGJfcmlnaHQgPT09IFwibm9uZVwiKSB7XG4gICAgICAgIC8vIOW3puS4reW4g+WxgFxuICAgICAgICBiX2xheW91dCA9IFwiTFwiO1xuICAgICAgfSBlbHNlIGlmIChiX2xlZnQgPT09IFwibm9uZVwiICYmIGJfcmlnaHQgPT09IFwiYmxvY2tcIikge1xuICAgICAgICAvLyDkuK3lj7PluIPlsYBcbiAgICAgICAgYl9sYXlvdXQgPSBcIlJcIjtcbiAgICAgIH0gZWxzZSBpZiAoYl9sZWZ0ID09PSBcImJsb2NrXCIgJiYgYl9yaWdodCA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAgIC8v5bem5Lit5Y+z5biD5bGAXG4gICAgICAgIGJfbGF5b3V0ID0gXCJMUlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYl9sYXlvdXQgPSBcIkxSXCI7XG4gICAgICAgIC8vIOW3puS4reWPs+W4g+WxgFxuICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgfVxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIGJfbGF5b3V0KTtcbiAgICB9XG4gIH0sXG4gIC8qIOWqkuS9k+afpeivouW4g+WxgCAqL1xuICBkZXZpY2Vfc3dpdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yib5bu65p+l6K+i5YiX6KGoXG4gICAgbGV0IGRldmljZV93aWR0aCA9IFtcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNTYwcHgpXCIpLFxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA5ODBweClcIiksXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEyNjFweClcIiksXG4gICAgXTtcblxuICAgIC8vIOWumuS5ieWbnuiwg+WHveaVsFxuICAgIGZ1bmN0aW9uIG1lZGlhTWF0Y2hzKCkge1xuICAgICAgaWYgKGRldmljZV93aWR0aFswXS5tYXRjaGVzKSB7XG4gICAgICAgIGRldmljZV9zbWFsbCgpO1xuICAgICAgfSBlbHNlIGlmIChkZXZpY2Vfd2lkdGhbMV0ubWF0Y2hlcykge1xuICAgICAgICBkZXZpY2VfY2VudGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGRldmljZV93aWR0aFsyXS5tYXRjaGVzKSB7XG4gICAgICAgIGRldmljZV9sYXJnZXN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWkp+S6juiuvuWumuacgOWkp+WwuuWvuOaDheWGtVwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5YWI6L+Q6KGM5LiA5qyh5Zue6LCD5Ye95pWwXG4gICAgbWVkaWFNYXRjaHMoKTtcbiAgICAvLyDkuLrmn6Xor6LliJfooajms6jlhoznm5HlkKzlmajvvIzlkIzml7blsIblm57osIPlh73mlbDkvKDnu5nnm5HlkKzlmahcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRldmljZV93aWR0aC5sZW5ndGg7IGkrKykge1xuICAgICAgZGV2aWNlX3dpZHRoW2ldLmFkZExpc3RlbmVyKG1lZGlhTWF0Y2hzKTtcbiAgICB9XG4gIH0sXG59O1xuIl19
