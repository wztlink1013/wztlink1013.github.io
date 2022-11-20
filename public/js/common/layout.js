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
var top = 0; // 判断pc段左右上角的箭头该显示哪个

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
    console.log("Layout: ", localStorage.getItem("layout"));
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
    console.log("Layout: ", localStorage.getItem("layout"));
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
    console.log("Layout: ", localStorage.getItem("layout"));
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
    console.log("Layout: ", localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "C");
  }
}

function device_small() {
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
}

function device_center() {
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
}

function device_largest() {
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
  },

  /* 浏览器记住布局 */
  browser_remember: function browser_remember() {
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
        console.log("Layout: > setting sizing");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7QUFDQSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFsQjtBQUNBLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxjQUFELENBQW5CLEMsQ0FFQTs7QUFDQSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsVUFBRCxDQUFmO0FBQ0EsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFdBQUQsQ0FBaEI7QUFDQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQjtBQUNBLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxZQUFELENBQWpCLEMsQ0FFQTs7QUFDQSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQjtBQUNBLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxhQUFELENBQWxCLEMsQ0FFQTs7QUFDQSxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsZ0JBQUQsQ0FBckI7QUFDQSxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsZ0JBQUQsQ0FBckIsQyxDQUVBOztBQUNBLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQyxpQkFBRCxDQUF0QjtBQUNBLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLG1CQUFELENBQXhCLEMsQ0FFQTs7QUFDQSxJQUFJLGFBQWEsR0FBRyxLQUFwQjtBQUNBLElBQUksbUJBQW1CLEdBQUcsS0FBMUI7QUFDQSxJQUFJLGlCQUFpQixHQUFHLEtBQXhCLEMsQ0FDQTs7QUFDQSxJQUFJLGFBQWEsR0FBRyxLQUFwQjtBQUNBLElBQUksbUJBQW1CLEdBQUcsS0FBMUI7QUFDQSxJQUFJLGtCQUFrQixHQUFHLEtBQXpCLEMsQ0FDQTs7QUFDQSxJQUFJLGVBQWUsR0FB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O0lBQ0Q7RUFDRjtBQWhLWSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gUEPvvJpoZWFkZXLkuIrnmoTlt6blj7PmjInpkq7ljLrln59cbmxldCBhcnJvd19sZWZ0ID0gJChcIiNhcnJvd19sZWZ0XCIpO1xubGV0IGFycm93X3JpZ2h0ID0gJChcIiNhcnJvd19yaWdodFwiKTtcblxuLy8g5biD5bGA77ya54mI5b+D44CB5bem5Lit5Y+z5o6S54mIXG5sZXQgY3RfbGVmdCA9ICQoXCIuY3RfbGVmdFwiKTtcbmxldCBjdF9yaWdodCA9ICQoXCIuY3RfcmlnaHRcIik7XG5sZXQgY3RfY2VudGVyID0gJChcIi5jdF9jZW50ZXJcIik7XG5sZXQgY29udGFpbmVyID0gJChcIi5jb250YWluZXJcIik7XG5cbi8vIFBDL2FwcO+8muWIh+aNomhlYWRlclxubGV0IGhlYWRlcl9wYyA9ICQoXCIuaGVhZGVyX3BjXCIpO1xubGV0IGhlYWRlcl9hcHAgPSAkKFwiLmhlYWRlcl9hcHBcIik7XG5cbi8vIGFwcO+8mmhlYWRlcuS4iueahOW3puWPs+aMiemSruWMuuWfn1xubGV0IGJ0bl9hcHBfc2lkZXIgPSAkKFwiI2J0bl9hcHBfc2lkZXJcIik7XG5sZXQgYnRuX2FwcF9yaWdodCA9ICQoXCIjYnRuX2FwcF9yaWdodFwiKTtcblxuLy8gYXBw77ya54K55Ye7aGVhZGVyX2FwcOaXtuWAmeW8ueWHuuadpeeahOaKveWxiVxubGV0IGFwcF9zaWRlX2dsYXNzID0gJChcIiNhcHBfc2lkZV9nbGFzc1wiKTtcbmxldCBhcHBfc2lkZV9jb250ZW50ID0gJChcIiNhcHBfc2lkZV9jb250ZW50XCIpO1xuXG4vLyAxLuW3puS4remFjee9rlxubGV0IG9uZV9jb250YWluZXIgPSBcIjgwJVwiO1xubGV0IG9uZV9jdF9jZW50ZXJfd2lkdGggPSBcIjc1JVwiO1xubGV0IG9uZV9jdF9sZWZ0X3dpZHRoID0gXCIyNSVcIjtcbi8vIDIuIOS4reWPs+mFjee9rlxubGV0IHR3b19jb250YWluZXIgPSBcIjgwJVwiO1xubGV0IHR3b19jdF9jZW50ZXJfd2lkdGggPSBcIjc1JVwiO1xubGV0IHR3b19jdF9yaWdodF93aWR0aCA9IFwiMjUlXCI7XG4vLyAzLiDlt6bkuK3lj7PphY3nva5cbmxldCB0aHJlZV9jb250YWluZXIgPSBcIjk1JVwiO1xubGV0IHRocmVlX2N0X2NlbnRlcl93aWR0aCA9IFwiNjAlXCI7XG5sZXQgdGhyZWVfY3RfcmlnaHRfd2lkdGggPSBcIjIwJVwiO1xubGV0IHRocmVlX2N0X2xlZnRfd2lkdGggPSBcIjIwJVwiO1xuLy8gNC4g5Lit6YWN572uXG5sZXQgZm91cl9jb250YWluZXIgPSBcIjc1JVwiO1xubGV0IGZvdXJfY3RfY2VudGVyX3dpZHRoID0gXCIxMDAlXCI7XG4vLyDorr7lpIflsI/kuo41NjBweOeahOS4remFjee9rlxubGV0IGRldmljZV9zbWFsbF9jb250YWluZXIgPSBcIjk4JVwiO1xubGV0IGRldmljZV9zbWFsbF9jZW50ZXIgPSBcIjEwMCVcIjtcbi8vIOiuvuWkh+Wwj+S6jjc4MHB455qE5Lit6YWN572uXG5sZXQgZGV2aWNlX2NlbnRlcl9jb250YWluZXIgPSBcIjk2JVwiO1xubGV0IGRldmljZV9jZW50ZXJfY2VudGVyID0gXCIxMDAlXCI7XG5sZXQgdG9wID0gMDtcbi8vIOWIpOaWrXBj5q615bem5Y+z5LiK6KeS55qE566t5aS06K+l5pi+56S65ZOq5LiqXG5mdW5jdGlvbiBsZWZ0X3JpZ2h0X2Fycm93KCkge1xuICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gIH1cbiAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gIH0gZWxzZSB7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGxlZnRfY2VudGVyX3JpZ2h0KCkge1xuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IHRocmVlX2NvbnRhaW5lciB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKHtcbiAgICB3aWR0aDogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIH0pO1xuICBjdF9yaWdodC5jc3Moe1xuICAgIHdpZHRoOiB0aHJlZV9jdF9yaWdodF93aWR0aCxcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIH0pO1xuICBsZWZ0X3JpZ2h0X2Fycm93KCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsYXlvdXRcIik7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFJcIik7XG4gICAgY29uc29sZS5sb2coXCJMYXlvdXQ6IFwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFJcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIGxlZnRfY2VudGVyKCkge1xuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IG9uZV9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogb25lX2N0X2NlbnRlcl93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3MoeyB3aWR0aDogb25lX2N0X2xlZnRfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgbGVmdF9yaWdodF9hcnJvdygpO1xuICBpZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KFwibGF5b3V0XCIpKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibGF5b3V0XCIpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gICAgY29uc29sZS5sb2coXCJMYXlvdXQ6IFwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFwiKTtcbiAgfVxufVxuZnVuY3Rpb24gY2VudGVyX3JpZ2h0KCkge1xuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IHR3b19jb250YWluZXIgfSk7XG4gIGN0X3JpZ2h0LmNzcyh7IHdpZHRoOiB0d29fY3RfcmlnaHRfd2lkdGggfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogdHdvX2N0X2NlbnRlcl93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICBsZWZ0X3JpZ2h0X2Fycm93KCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsYXlvdXRcIik7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiUlwiKTtcbiAgICBjb25zb2xlLmxvZyhcIkxheW91dDogXCIsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJSXCIpO1xuICB9XG59XG5mdW5jdGlvbiBjZW50ZXIoKSB7XG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogZm91cl9jb250YWluZXIgfSk7XG4gIGN0X2NlbnRlci5jc3MoeyB3aWR0aDogZm91cl9jdF9jZW50ZXJfd2lkdGggfSk7XG4gIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBsZWZ0X3JpZ2h0X2Fycm93KCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJsYXlvdXRcIikpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsYXlvdXRcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgXCJDXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0OiBcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXlvdXRcIikpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkNcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIGRldmljZV9zbWFsbCgpIHtcbiAgLy8g5pyA5bCP5bC65a+477ya5pyA5aSnNTYwcHhcbiAgY29uc29sZS5sb2coXCJMYXlvdXQ6IDwgNTYwcHhcIik7XG5cbiAgaGVhZGVyX3BjLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICBoZWFkZXJfYXBwLmNzcyh7IGRpc3BsYXk6IFwiYmxvY2tcIiB9KTtcbiAgLy8g6K6+572u5biD5bGAXG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogZGV2aWNlX3NtYWxsX2NvbnRhaW5lciB9KTtcbiAgY3RfY2VudGVyLmNzcyh7IHdpZHRoOiBkZXZpY2Vfc21hbGxfY2VudGVyIH0pO1xuICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbn1cbmZ1bmN0aW9uIGRldmljZV9jZW50ZXIoKSB7XG4gIC8vIOS4reetieWwuuWvuO+8muacgOWkpzk4MHB4XG4gIGNvbnNvbGUubG9nKFwiTGF5b3V0OiA8IDk4MHB4XCIpO1xuXG4gIGhlYWRlcl9wYy5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgaGVhZGVyX2FwcC5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gIC8vIOiuvue9ruW4g+WxgFxuICBjb250YWluZXIuY3NzKHsgd2lkdGg6IGRldmljZV9jZW50ZXJfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IGRldmljZV9jZW50ZXJfY2VudGVyIH0pO1xuICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbn1cbmZ1bmN0aW9uIGRldmljZV9sYXJnZXN0KCkge1xuICAvLyDmnIDlpKflsLrlr7jvvJrmnIDlpKcxMjYxcHhcbiAgY29uc29sZS5sb2coXCJMYXlvdXQ6IDwgMTI2MXB4XCIpO1xuXG4gIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICB9IGVsc2Uge1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxuICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgfVxuICBoZWFkZXJfcGMuY3NzKHsgZGlzcGxheTogXCJibG9ja1wiIH0pO1xuICBoZWFkZXJfYXBwLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuXG4gIGNvbnRhaW5lci5jc3MoeyB3aWR0aDogdGhyZWVfY29udGFpbmVyIH0pO1xuICBjdF9jZW50ZXIuY3NzKHsgd2lkdGg6IHRocmVlX2N0X2NlbnRlcl93aWR0aCB9KTtcbiAgY3RfbGVmdC5jc3Moe1xuICAgIHdpZHRoOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSk7XG4gIGN0X3JpZ2h0LmNzcyh7XG4gICAgd2lkdGg6IHRocmVlX2N0X3JpZ2h0X3dpZHRoLFxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnRuX3BjX3N3aXRjaCgpO1xuICAgIHRoaXMuYnRuX2FwcF9zd2l0Y2goKTtcbiAgICB0aGlzLmJyb3dzZXJfcmVtZW1iZXIoKTtcbiAgICB0aGlzLmRldmljZV9zd2l0Y2goKTsgLy8g6L+Z5Liq5pS+5Yiw5pyA5ZCO6Ieq6LCD55SoIeWboOS4uuS4jeeuoeacrOWcsOWtmOWCqOaYr+S7gOS5iO+8jOacgOe7iOi/mOaYr+imgeagueaNruiuvuWkh+ebkeWQrOS4uuS4u1xuICB9LFxuICAvKiBQQ++8muWNlS/lj4wv5LiJ5qCP5biD5bGA5YiH5o2i5oyJ6ZKu54K55Ye75LqL5Lu2ICovXG4gIGJ0bl9wY19zd2l0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICBhcnJvd19sZWZ0LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgIC8vIOi9rOaNouWIh+aNouS5i+WQjueahOeureWktOaMiemSrlxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pO1xuICAgICAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgLy/lt6bkuK3phY3nva5cbiAgICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8v5bem5Lit5Y+z6YWN572uXG4gICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgLy/kuK3phY3nva5cbiAgICAgICAgICBjZW50ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL+S4reWPs+mFjee9rlxuICAgICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhcnJvd19yaWdodC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIC8v5Lit5Y+z6YWN572uXG4gICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy/lt6bkuK3lj7PphY3nva5cbiAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9KTtcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gICAgICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBpZiAoY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIC8vIOS4remFjee9rlxuICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIOW3puS4remFjee9rlxuICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgLyog56e75Yqo56uv5bem5Y+z5LiK6KeS55qE5oyJ6ZKuICovXG4gIGJ0bl9hcHBfc3dpdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8g54K55Ye75bem5oyJ6ZKuXG4gICAgYnRuX2FwcF9zaWRlci5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBfc2lkZV9nbGFzcy5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIgfSk7XG4gICAgICBhcHBfc2lkZV9jb250ZW50LmNzcyh7IGRpc3BsYXk6IFwiYmxvY2tcIiB9KTtcbiAgICAgIC8vIOmYu+atouaKveWxieWxguS4i+eahOa7keWKqOepv+mAj1xuICAgICAgdG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBjb250YWluZXIuY3NzKHsgcG9zaXRpb246IFwiZml4ZWRcIiwgdG9wOiAtdG9wICsgXCJweFwiIH0pO1xuICAgIH0pO1xuICAgIC8vIOeCueWHu+avm+eOu+eSg+eJh1xuICAgIGFwcF9zaWRlX2dsYXNzLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcF9zaWRlX2dsYXNzLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICAgICAgYXBwX3NpZGVfY29udGVudC5jc3MoeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgICAgIC8vIOmYu+atouaKveWxieWxguS4i+eahOa7keWKqOepv+mAj1xuICAgICAgY29udGFpbmVyLmNzcyh7IHBvc2l0aW9uOiBcIlwiLCB0b3A6IFwiXCIgfSk7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdG9wKTtcbiAgICB9KTtcbiAgICAvLyDngrnlh7vlj7PmjInpkq4g5by55Ye65pCc57Si5qGGXG4gICAgYnRuX2FwcF9yaWdodC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBhbGVydChcIuacrOe9keermei/mOWcqOW8gOWPkeS4re+8jOivuOWkmuWKn+iDvei/mOacquWujOWWhO+8jOaVrOivt+acn+W+hX5cIik7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwi5pys572R56uZ6L+Y5Zyo5byA5Y+R5Lit77yM6K+45aSa5Yqf6IO96L+Y5pyq5a6M5ZaE77yM5pWs6K+35pyf5b6FflwiKTtcbiAgICB9KTtcbiAgfSxcbiAgLyog5rWP6KeI5Zmo6K6w5L2P5biD5bGAICovXG4gIGJyb3dzZXJfcmVtZW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYl9sZWZ0ID0gY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIpO1xuICAgIGxldCBiX3JpZ2h0ID0gY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKTtcbiAgICBsZXQgYl9sYXlvdXQ7XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KFwibGF5b3V0XCIpKSB7XG4gICAgICAvLyDmtY/op4jlmajmnInnvJPlrZjnmoTmg4XlhrVcbiAgICAgIGxldCBsYXlvdXRfY2hhbmdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpO1xuICAgICAgY29uc29sZS5sb2coXCJMYXlvdXQ6IGhhdmUgY2FjaGVcIik7XG4gICAgICBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJMUlwiKSB7XG4gICAgICAgIC8vIOW3puS4reWPs+W4g+WxgFxuICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkxcIikge1xuICAgICAgICAvLyDlt6bkuK3luIPlsYBcbiAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJSXCIpIHtcbiAgICAgICAgLy8g5Lit5Y+z5biD5bGAXG4gICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgfSBlbHNlIGlmIChsYXlvdXRfY2hhbmdlID09PSBcIkNcIikge1xuICAgICAgICAvLyDkuK3luIPlsYBcbiAgICAgICAgY2VudGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlhbbku5bojqvlkI3lhbblppnnmoTmg4XlhrVcbiAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5rWP6KeI5Zmo5rKh5pyJ57yT5a2Y55qE5oOF5Ya1XG4gICAgICBjb25zb2xlLmxvZyhcIkxheW91dDogbm8gY2FjaGVcIik7XG4gICAgICBpZiAoYl9sZWZ0ID09PSBcImJsb2NrXCIgJiYgYl9yaWdodCA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgLy8g5bem5Lit5biD5bGAXG4gICAgICAgIGJfbGF5b3V0ID0gXCJMXCI7XG4gICAgICB9IGVsc2UgaWYgKGJfbGVmdCA9PT0gXCJub25lXCIgJiYgYl9yaWdodCA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAgIC8vIOS4reWPs+W4g+WxgFxuICAgICAgICBiX2xheW91dCA9IFwiUlwiO1xuICAgICAgfSBlbHNlIGlmIChiX2xlZnQgPT09IFwiYmxvY2tcIiAmJiBiX3JpZ2h0ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgLy/lt6bkuK3lj7PluIPlsYBcbiAgICAgICAgYl9sYXlvdXQgPSBcIkxSXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiX2xheW91dCA9IFwiTFJcIjtcbiAgICAgICAgLy8g5bem5Lit5Y+z5biD5bGAXG4gICAgICAgIGxlZnRfY2VudGVyX3JpZ2h0KCk7XG4gICAgICB9XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXlvdXRcIiwgYl9sYXlvdXQpO1xuICAgIH1cbiAgfSxcbiAgLyog5aqS5L2T5p+l6K+i5biD5bGAICovXG4gIGRldmljZV9zd2l0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyDliJvlu7rmn6Xor6LliJfooahcbiAgICBsZXQgZGV2aWNlX3dpZHRoID0gW1xuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA1NjBweClcIiksXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDk4MHB4KVwiKSxcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTI2MXB4KVwiKSxcbiAgICBdO1xuXG4gICAgLy8g5a6a5LmJ5Zue6LCD5Ye95pWwXG4gICAgZnVuY3Rpb24gbWVkaWFNYXRjaHMoKSB7XG4gICAgICBpZiAoZGV2aWNlX3dpZHRoWzBdLm1hdGNoZXMpIHtcbiAgICAgICAgZGV2aWNlX3NtYWxsKCk7XG4gICAgICB9IGVsc2UgaWYgKGRldmljZV93aWR0aFsxXS5tYXRjaGVzKSB7XG4gICAgICAgIGRldmljZV9jZW50ZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX3dpZHRoWzJdLm1hdGNoZXMpIHtcbiAgICAgICAgZGV2aWNlX2xhcmdlc3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGF5b3V0OiA+IHNldHRpbmcgc2l6aW5nXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDlhYjov5DooYzkuIDmrKHlm57osIPlh73mlbBcbiAgICBtZWRpYU1hdGNocygpO1xuICAgIC8vIOS4uuafpeivouWIl+ihqOazqOWGjOebkeWQrOWZqO+8jOWQjOaXtuWwhuWbnuiwg+WHveaVsOS8oOe7meebkeWQrOWZqFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGV2aWNlX3dpZHRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXZpY2Vfd2lkdGhbaV0uYWRkTGlzdGVuZXIobWVkaWFNYXRjaHMpO1xuICAgIH1cbiAgfSxcbn07XG4iXX0=
