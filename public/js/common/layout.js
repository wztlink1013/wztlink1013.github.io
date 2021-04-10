(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*  
    TODO: 
        能在根目录设置默认状态是几栏的
        能够让使用者取消这种“记忆”
**/
// PC：header上的左右按钮区域
var arrow_left = $('#arrow_left');
var arrow_right = $('#arrow_right'); // 布局：版心、左中右排版

var ct_left = $('.ct_left');
var ct_right = $('.ct_right');
var ct_center = $('.ct_center');
var container = $('.container'); // PC/app：切换header

var header = $('.header');
var header_app = $('.header_app'); // app：header上的左右按钮区域

var btn_app_sider = $('#btn_app_sider');
var btn_app_right = $('#btn_app_right'); // app：点击header_app时候弹出来的抽屉

var app_side_glass = $('#app_side_glass');
var app_side_content = $('#app_side_content'); // 1.左中配置

var one_container = '80%';
var one_ct_center_width = '75%';
var one_ct_left_width = '25%'; // 2. 中右配置

var two_container = '80%';
var two_ct_center_width = '75%';
var two_ct_right_width = '25%'; // 3. 左中右配置

var three_container = '95%';
var three_ct_center_width = '60%';
var three_ct_right_width = '20%';
var three_ct_left_width = '20%'; // 4. 中配置

var four_container = '80%';
var four_ct_center_width = '100%'; // 设备小于560px的中配置

var device_small_container = "97%";
var device_small_center = "100%"; // 设备小于780px的中配置

var device_center_container = "93%";
var device_center_center = "100%"; // 判断pc段左右上角的箭头该显示哪个

function left_right_arrow() {
  if (ct_left.css("display") === 'none') {
    $("#arrow_left i:first-child").css({
      "display": "inline-block"
    });
    $("#arrow_left i:last-child").css({
      "display": "none"
    });
  } else {
    $("#arrow_left i:first-child").css({
      "display": "none"
    });
    $("#arrow_left i:last-child").css({
      "display": "inline-block"
    });
  }

  if (ct_right.css("display") === 'none') {
    $("#arrow_right i:first-child").css({
      "display": "inline-block"
    });
    $("#arrow_right i:last-child").css({
      "display": "none"
    });
  } else {
    $("#arrow_right i:first-child").css({
      "display": "none"
    });
    $("#arrow_right i:last-child").css({
      "display": "inline-block"
    });
  }
}

function left_center_right() {
  container.css({
    "width": three_container
  });
  ct_center.css({
    "width": three_ct_center_width
  });
  ct_left.css({
    "width": three_ct_left_width,
    "display": "block"
  });
  ct_right.css({
    "width": three_ct_right_width,
    "display": "block"
  });
  left_right_arrow();

  if (localStorage.hasOwnProperty('layout')) {
    window.localStorage.removeItem('layout');
    window.localStorage.setItem('layout', 'LR');
  } else {
    window.localStorage.setItem('layout', 'LR');
  }
}

function left_center() {
  container.css({
    "width": one_container
  });
  ct_center.css({
    "width": one_ct_center_width
  });
  ct_left.css({
    "width": one_ct_left_width
  });
  ct_right.css("display", "none");
  left_right_arrow();

  if (localStorage.hasOwnProperty('layout')) {
    window.localStorage.removeItem('layout');
    window.localStorage.setItem("layout", "L");
    console.log("切换到左中布局了");
    console.log(localStorage.getItem("layout"));
  } else {
    window.localStorage.setItem("layout", "L");
  }
}

function center_right() {
  container.css({
    "width": two_container
  });
  ct_right.css({
    "width": two_ct_right_width
  });
  ct_center.css({
    "width": two_ct_center_width
  });
  ct_left.css("display", "none");
  left_right_arrow();

  if (localStorage.hasOwnProperty('layout')) {
    window.localStorage.removeItem('layout');
    window.localStorage.setItem('layout', 'R');
  } else {
    window.localStorage.setItem('layout', 'R');
  }
}

function center() {
  container.css({
    "width": four_container
  });
  ct_center.css({
    "width": four_ct_center_width
  });
  ct_left.css("display", "none");
  ct_right.css("display", "none");
  left_right_arrow();

  if (localStorage.hasOwnProperty('layout')) {
    window.localStorage.removeItem('layout');
    localStorage.setItem('layout', 'C');
  } else {
    window.localStorage.setItem('layout', 'C');
  }
}

function device_small() {
  // 最小尺寸：最大560px
  console.log("小于560px尺寸");
  header.css({
    "display": "none"
  });
  header_app.css({
    "display": "block"
  }); // 设置布局

  container.css({
    "width": device_small_container
  });
  ct_center.css({
    "width": device_small_center
  });
  ct_left.css("display", "none");
  ct_right.css("display", "none");
}

function device_center() {
  // 中等尺寸：最大980px
  console.log("小于980px尺寸");
  header.css({
    "display": "none"
  });
  header_app.css({
    "display": "block"
  }); // 设置布局

  container.css({
    "width": device_center_container
  });
  ct_center.css({
    "width": device_center_center
  });
  ct_left.css("display", "none");
  ct_right.css("display", "none");
}

function device_largest() {
  // 最大尺寸：最大1261px
  console.log("小于1261px尺寸");

  if (ct_left.css("display") === 'none') {
    $("#arrow_left i:first-child").css({
      "display": "inline-block"
    });
    $("#arrow_left i:last-child").css({
      "display": "none"
    });
  } else {
    $("#arrow_left i:first-child").css({
      "display": "none"
    });
    $("#arrow_left i:last-child").css({
      "display": "inline-block"
    });
  }

  if (ct_right.css("display") === 'none') {
    $("#arrow_right i:first-child").css({
      "display": "inline-block"
    });
    $("#arrow_right i:last-child").css({
      "display": "none"
    });
  } else {
    $("#arrow_right i:first-child").css({
      "display": "none"
    });
    $("#arrow_right i:last-child").css({
      "display": "inline-block"
    });
  }

  header.css({
    "display": "block"
  });
  header_app.css({
    "display": "none"
  });
  container.css({
    "width": three_container
  });
  ct_center.css({
    "width": three_ct_center_width
  });
  ct_left.css({
    "width": three_ct_left_width,
    "display": "block"
  });
  ct_right.css({
    "width": three_ct_right_width,
    "display": "block"
  });
}

var _default = {
  init: function init() {
    this.btn_pc_switch();
    this.btn_app_switch();
    this.browser_remember();
    this.device_switch(); // 这个放到最后自调用，因为不管本地存储是什么，最终还是要根据设备监听为主
  },

  /* PC：单/双/三栏布局切换按钮点击事件 */
  btn_pc_switch: function btn_pc_switch() {
    arrow_left.click(function () {
      if (ct_left.css("display") === 'none') {
        // 转换切换之后的箭头按钮
        $("#arrow_left i:first-child").css({
          "display": "none"
        });
        $("#arrow_left i:last-child").css({
          "display": "inline-block"
        });
        ct_left.css("display", 'block');

        if (ct_right.css("display") === 'none') {
          //左中配置
          left_center();
        } else {
          //左中右配置
          left_center_right();
        }
      } else {
        $("#arrow_left i:first-child").css({
          "display": "inline-block"
        });
        $("#arrow_left i:last-child").css({
          "display": "none"
        });
        ct_left.css("display", 'none');

        if (ct_right.css("display") === 'none') {
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
          "display": "none"
        });
        $("#arrow_right i:last-child").css({
          "display": "inline-block"
        });
        ct_right.css("display", 'block');

        if (ct_left.css("display") === 'none') {
          //中右配置
          center_right();
        } else {
          //左中右配置
          left_center_right();
        }
      } else {
        $("#arrow_right i:first-child").css({
          "display": "inline-block"
        });
        $("#arrow_right i:last-child").css({
          "display": "none"
        });
        ct_right.css("display", 'none');

        if (ct_left.css("display") === 'none') {
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
        "display": "block"
      });
      app_side_content.css({
        "display": "block"
      });
    }); // 点击毛玻璃片

    app_side_glass.click(function () {
      app_side_glass.css({
        "display": "none"
      });
      app_side_content.css({
        "display": "none"
      });
    }); // 点击右按钮

    btn_app_right.click(function () {
      alert("本网站还在开发中，诸多功能还未完善，敬请期待~");
      console.log("本网站还在开发中，诸多功能还未完善，敬请期待~");
    });
  },

  /* 浏览器记住布局 */
  browser_remember: function browser_remember() {
    var b_left = ct_left.css("display");
    var b_right = ct_right.css("display");
    var b_layout;
    /* 
    有个问题：
        一打开浏览器就会根据缓存来布局，尽管你的设备宽度小于1260px
        但是对于普通用户，一个浏览器哪来的经常开开发者模式呢？
    */

    if (localStorage.hasOwnProperty('layout')) {
      // 浏览器有缓存的情况
      console.log("本地有该变量缓存");
      var layout_change = window.localStorage.getItem("layout");
      console.log(layout_change);

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
      console.log("本地没有该变量缓存");

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
        b_layout = "C";
      }

      window.localStorage.setItem("layout", b_layout);
    }
  },

  /* 媒体查询布局 */
  device_switch: function device_switch() {
    // 创建查询列表
    var device_width = [window.matchMedia('(max-width: 560px)'), window.matchMedia('(max-width: 980px)'), window.matchMedia('(max-width: 1261px)')]; // 定义回调函数

    function mediaMatchs() {
      if (device_width[0].matches) {
        device_small();
      } else if (device_width[1].matches) {
        device_center();
      } else if (device_width[2].matches) {
        device_largest();
      } else {
        console.log("尺寸其他情况，理论上我看不到这句话……");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9jb21tb24vbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxhQUFELENBQWxCO0FBQ0EsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGNBQUQsQ0FBbkIsQyxDQUVBOztBQUNBLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxVQUFELENBQWY7QUFDQSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsV0FBRCxDQUFoQjtBQUNBLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxZQUFELENBQWpCO0FBQ0EsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQUQsQ0FBakIsQyxDQUVBOztBQUNBLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxTQUFELENBQWQ7QUFDQSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBRCxDQUFsQixDLENBRUE7O0FBQ0EsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLGdCQUFELENBQXJCO0FBQ0EsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLGdCQUFELENBQXJCLEMsQ0FFQTs7QUFDQSxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsaUJBQUQsQ0FBdEI7QUFDQSxJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxtQkFBRCxDQUF4QixDLENBRUE7O0FBQ0EsSUFBSSxhQUFhLEdBQUcsS0FBcEI7QUFDQSxJQUFJLG1CQUFtQixHQUFHLEtBQTFCO0FBQ0EsSUFBSSxpQkFBaUIsR0FBRyxLQUF4QixDLENBQ0E7O0FBQ0EsSUFBSSxhQUFhLEdBQUcsS0FBcEI7QUFDQSxJQUFJLG1CQUFtQixHQUFHLEtBQTFCO0FBQ0EsSUFBSSxrQkFBa0IsR0FBRyxLQUF6QixD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SUFBWDtBQUNILE9BRk0sTUFFQTtBQUNILFFBQUEsUUFBUSxHQUFHLEdBQVg7QUFDSDs7QUFDRCxNQUFBLE1BQU0sQ0FBQyxZQUFQLENBQW9CLE9BQXBCLENBQTRCLFFBQTVCLEVBQXNDLFFBQXRDO0FBQ0g7QUFHSixHQTFIVTs7QUEySFg7QUFDQSxFQUFBLGFBQWEsRUFBRSx5QkFBVztBQUN0QjtBQUNBLFFBQUksWUFBWSxHQUFHLENBQ2YsTUFBTSxDQUFDLFVBQVAsQ0FBa0Isb0JBQWxCLENBRGUsRUFFZixNQUFNLENBQUMsVUFBUCxDQUFrQixvQkFBbEIsQ0FGZSxFQUdmLE1BQU0sQ0FBQyxVQUFQLENBQWtCLHFCQUFsQixDQUhlLENBQW5CLENBRnNCLENBUXRCOztBQUNBLGFBQVMsV0FBVCxHQUF3QjtBQUNwQixVQUFJLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0IsT0FBcEIsRUFBNkI7QUFDekIsUUFBQSxZQUFZO0FBQ2YsT0FGRCxNQUVPLElBQUksWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQixPQUFwQixFQUE2QjtBQUNoQyxRQUFBLGFBQWE7QUFDaEIsT0FGTSxNQUVBLElBQUksWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQixPQUFwQixFQUE2QjtBQUNoQyxRQUFBLGNBQWM7QUFDakIsT0FGTSxNQUVBO0FBQ0gsUUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLHFCQUFaO0FBQ0g7QUFDSixLQW5CcUIsQ0FvQnRCOzs7QUFDQSxJQUFBLFdBQVcsR0FyQlcsQ0FzQnRCOztBQUNBLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQWpDLEVBQXlDLENBQUMsRUFBMUMsRUFBOEM7QUFDMUMsTUFBQSxZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCLFdBQWhCLENBQTRCLFdBQTVCO0FBQ0g7QUFDSjtBQXRKVSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyogIFxuICAgIFRPRE86IFxuICAgICAgICDog73lnKjmoLnnm67lvZXorr7nva7pu5jorqTnirbmgIHmmK/lh6DmoI/nmoRcbiAgICAgICAg6IO95aSf6K6p5L2/55So6ICF5Y+W5raI6L+Z56eN4oCc6K6w5b+G4oCdXG4qKi9cblxuXG4vLyBQQ++8mmhlYWRlcuS4iueahOW3puWPs+aMiemSruWMuuWfn1xubGV0IGFycm93X2xlZnQgPSAkKCcjYXJyb3dfbGVmdCcpO1xubGV0IGFycm93X3JpZ2h0ID0gJCgnI2Fycm93X3JpZ2h0Jyk7XG5cbi8vIOW4g+WxgO+8mueJiOW/g+OAgeW3puS4reWPs+aOkueJiFxubGV0IGN0X2xlZnQgPSAkKCcuY3RfbGVmdCcpO1xubGV0IGN0X3JpZ2h0ID0gJCgnLmN0X3JpZ2h0Jyk7XG5sZXQgY3RfY2VudGVyID0gJCgnLmN0X2NlbnRlcicpO1xubGV0IGNvbnRhaW5lciA9ICQoJy5jb250YWluZXInKTtcblxuLy8gUEMvYXBw77ya5YiH5o2iaGVhZGVyXG5sZXQgaGVhZGVyID0gJCgnLmhlYWRlcicpO1xubGV0IGhlYWRlcl9hcHAgPSAkKCcuaGVhZGVyX2FwcCcpO1xuXG4vLyBhcHDvvJpoZWFkZXLkuIrnmoTlt6blj7PmjInpkq7ljLrln59cbmxldCBidG5fYXBwX3NpZGVyID0gJCgnI2J0bl9hcHBfc2lkZXInKTtcbmxldCBidG5fYXBwX3JpZ2h0ID0gJCgnI2J0bl9hcHBfcmlnaHQnKTtcblxuLy8gYXBw77ya54K55Ye7aGVhZGVyX2FwcOaXtuWAmeW8ueWHuuadpeeahOaKveWxiVxubGV0IGFwcF9zaWRlX2dsYXNzID0gJCgnI2FwcF9zaWRlX2dsYXNzJyk7XG5sZXQgYXBwX3NpZGVfY29udGVudCA9ICQoJyNhcHBfc2lkZV9jb250ZW50Jyk7XG5cbi8vIDEu5bem5Lit6YWN572uXG5sZXQgb25lX2NvbnRhaW5lciA9ICc4MCUnIDtcbmxldCBvbmVfY3RfY2VudGVyX3dpZHRoID0gJzc1JSc7XG5sZXQgb25lX2N0X2xlZnRfd2lkdGggPSAnMjUlJztcbi8vIDIuIOS4reWPs+mFjee9rlxubGV0IHR3b19jb250YWluZXIgPSAnODAlJyA7XG5sZXQgdHdvX2N0X2NlbnRlcl93aWR0aCA9ICc3NSUnO1xubGV0IHR3b19jdF9yaWdodF93aWR0aCA9ICcyNSUnO1xuLy8gMy4g5bem5Lit5Y+z6YWN572uXG5sZXQgdGhyZWVfY29udGFpbmVyID0gJzk1JScgO1xubGV0IHRocmVlX2N0X2NlbnRlcl93aWR0aCA9ICc2MCUnO1xubGV0IHRocmVlX2N0X3JpZ2h0X3dpZHRoID0gJzIwJSc7XG5sZXQgdGhyZWVfY3RfbGVmdF93aWR0aCA9ICcyMCUnO1xuLy8gNC4g5Lit6YWN572uXG5sZXQgZm91cl9jb250YWluZXIgPSAnODAlJyA7XG5sZXQgZm91cl9jdF9jZW50ZXJfd2lkdGggPSAnMTAwJSc7XG4vLyDorr7lpIflsI/kuo41NjBweOeahOS4remFjee9rlxubGV0IGRldmljZV9zbWFsbF9jb250YWluZXIgPSBcIjk3JVwiO1xubGV0IGRldmljZV9zbWFsbF9jZW50ZXIgPSBcIjEwMCVcIjtcbi8vIOiuvuWkh+Wwj+S6jjc4MHB455qE5Lit6YWN572uXG5sZXQgZGV2aWNlX2NlbnRlcl9jb250YWluZXIgPSBcIjkzJVwiO1xubGV0IGRldmljZV9jZW50ZXJfY2VudGVyID0gXCIxMDAlXCI7XG5cblxuLy8g5Yik5patcGPmrrXlt6blj7PkuIrop5LnmoTnrq3lpLTor6XmmL7npLrlk6rkuKpcbmZ1bmN0aW9uIGxlZnRfcmlnaHRfYXJyb3cgKCkge1xuICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbiAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbGVmdF9jZW50ZXJfcmlnaHQgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogdGhyZWVfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfbGVmdF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgIGN0X3JpZ2h0LmNzcyh7XG4gICAgICAgIFwid2lkdGhcIjogdGhyZWVfY3RfcmlnaHRfd2lkdGgsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICB9KTtcbiAgICBsZWZ0X3JpZ2h0X2Fycm93ICgpO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnbGF5b3V0JykpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXlvdXQnKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXQnLCAnTFInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdMUicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxlZnRfY2VudGVyICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IG9uZV9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IG9uZV9jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyh7XCJ3aWR0aFwiOiBvbmVfY3RfbGVmdF93aWR0aH0pO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgbGVmdF9yaWdodF9hcnJvdyAoKTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGF5b3V0Jyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxheW91dFwiLCBcIkxcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5YiH5o2i5Yiw5bem5Lit5biD5bGA5LqGXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxheW91dFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIFwiTFwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjZW50ZXJfcmlnaHQgKCkge1xuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogdHdvX2NvbnRhaW5lcn0pO1xuICAgIGN0X3JpZ2h0LmNzcyh7XCJ3aWR0aFwiOiB0d29fY3RfcmlnaHRfd2lkdGh9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IHR3b19jdF9jZW50ZXJfd2lkdGh9KTtcbiAgICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG4gICAgbGVmdF9yaWdodF9hcnJvdyAoKTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoJ2xheW91dCcpKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGF5b3V0Jyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ1InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdSJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2VudGVyICgpIHtcbiAgICBjb250YWluZXIuY3NzKHtcIndpZHRoXCI6IGZvdXJfY29udGFpbmVyfSk7XG4gICAgY3RfY2VudGVyLmNzcyh7XCJ3aWR0aFwiOiBmb3VyX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGxlZnRfcmlnaHRfYXJyb3cgKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xheW91dCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgJ0MnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsICdDJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV2aWNlX3NtYWxsICgpIHtcbiAgICAvLyDmnIDlsI/lsLrlr7jvvJrmnIDlpKc1NjBweFxuICAgIGNvbnNvbGUubG9nKFwi5bCP5LqONTYwcHjlsLrlr7hcIik7XG5cbiAgICBoZWFkZXIuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICBoZWFkZXJfYXBwLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIC8vIOiuvue9ruW4g+WxgFxuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX3NtYWxsX2NvbnRhaW5lcn0pO1xuICAgIGN0X2NlbnRlci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX3NtYWxsX2NlbnRlcn0pO1xuICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuXG59XG5mdW5jdGlvbiBkZXZpY2VfY2VudGVyICgpIHtcbiAgICAvLyDkuK3nrYnlsLrlr7jvvJrmnIDlpKc5ODBweFxuICAgIGNvbnNvbGUubG9nKFwi5bCP5LqOOTgwcHjlsLrlr7hcIik7XG5cbiAgICBoZWFkZXIuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICBoZWFkZXJfYXBwLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIC8vIOiuvue9ruW4g+WxgFxuICAgIGNvbnRhaW5lci5jc3Moe1wid2lkdGhcIjogZGV2aWNlX2NlbnRlcl9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IGRldmljZV9jZW50ZXJfY2VudGVyfSk7XG4gICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuICAgIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG5cbn1cbmZ1bmN0aW9uIGRldmljZV9sYXJnZXN0ICgpIHtcbiAgICAvLyDmnIDlpKflsLrlr7jvvJrmnIDlpKcxMjYxcHhcbiAgICBjb25zb2xlLmxvZyhcIuWwj+S6jjEyNjFweOWwuuWvuFwiKTtcblxuICAgIGlmIChjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJykge1xuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAkKFwiI2Fycm93X2xlZnQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbiAgICBpZiAoY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpsYXN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgIH1cbiAgICBoZWFkZXIuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgaGVhZGVyX2FwcC5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuXG4gICAgY29udGFpbmVyLmNzcyh7XCJ3aWR0aFwiOiB0aHJlZV9jb250YWluZXJ9KTtcbiAgICBjdF9jZW50ZXIuY3NzKHtcIndpZHRoXCI6IHRocmVlX2N0X2NlbnRlcl93aWR0aH0pO1xuICAgIGN0X2xlZnQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9sZWZ0X3dpZHRoLFxuICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgY3RfcmlnaHQuY3NzKHtcbiAgICAgICAgXCJ3aWR0aFwiOiB0aHJlZV9jdF9yaWdodF93aWR0aCxcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICAgIH0pO1xufVxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5idG5fcGNfc3dpdGNoKCk7XG4gICAgICAgIHRoaXMuYnRuX2FwcF9zd2l0Y2goKTtcbiAgICAgICAgdGhpcy5icm93c2VyX3JlbWVtYmVyKCk7XG4gICAgICAgIHRoaXMuZGV2aWNlX3N3aXRjaCgpOyAvLyDov5nkuKrmlL7liLDmnIDlkI7oh6rosIPnlKjvvIzlm6DkuLrkuI3nrqHmnKzlnLDlrZjlgqjmmK/ku4DkuYjvvIzmnIDnu4jov5jmmK/opoHmoLnmja7orr7lpIfnm5HlkKzkuLrkuLtcbiAgICB9LFxuICAgIC8qIFBD77ya5Y2VL+WPjC/kuInmoI/luIPlsYDliIfmjaLmjInpkq7ngrnlh7vkuovku7YgKi9cbiAgICBidG5fcGNfc3dpdGNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgYXJyb3dfbGVmdC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19sZWZ0IGk6Zmlyc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIn0pXG4gICAgICAgICAgICAgICAgY3RfbGVmdC5jc3MoXCJkaXNwbGF5XCIsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8v5bem5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfY2VudGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/lt6bkuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJ9KVxuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfbGVmdCBpOmxhc3QtY2hpbGRcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KVxuICAgICAgICAgICAgICAgIGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiLCdub25lJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09ICdub25lJyl7IC8v5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v5Lit5Y+z6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBhcnJvd19yaWdodC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgLy8g6L2s5o2i5YiH5o2i5LmL5ZCO55qE566t5aS05oyJ6ZKuXG4gICAgICAgICAgICAgICAgJChcIiNhcnJvd19yaWdodCBpOmZpcnN0LWNoaWxkXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICBjdF9yaWdodC5jc3MoXCJkaXNwbGF5XCIsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy/kuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgY2VudGVyX3JpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/lt6bkuK3lj7PphY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjYXJyb3dfcmlnaHQgaTpmaXJzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wifSlcbiAgICAgICAgICAgICAgICAkKFwiI2Fycm93X3JpZ2h0IGk6bGFzdC1jaGlsZFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pXG4gICAgICAgICAgICAgICAgY3RfcmlnaHQuY3NzKFwiZGlzcGxheVwiLCdub25lJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN0X2xlZnQuY3NzKFwiZGlzcGxheVwiKSA9PT0gJ25vbmUnKXsgLy8g5Lit6YWN572uXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIOW3puS4remFjee9rlxuICAgICAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKiDnp7vliqjnq6/lt6blj7PkuIrop5LnmoTmjInpkq4gKi9cbiAgICBidG5fYXBwX3N3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOeCueWHu+W3puaMiemSrlxuICAgICAgICBidG5fYXBwX3NpZGVyLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhcHBfc2lkZV9nbGFzcy5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAgICAgICAgIGFwcF9zaWRlX2NvbnRlbnQuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDngrnlh7vmr5vnjrvnkoPniYdcbiAgICAgICAgYXBwX3NpZGVfZ2xhc3MuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFwcF9zaWRlX2dsYXNzLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgICAgICAgICBhcHBfc2lkZV9jb250ZW50LmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDngrnlh7vlj7PmjInpkq5cbiAgICAgICAgYnRuX2FwcF9yaWdodC5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgYWxlcnQoXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKznvZHnq5nov5jlnKjlvIDlj5HkuK3vvIzor7jlpJrlip/og73ov5jmnKrlrozlloTvvIzmlazor7fmnJ/lvoV+XCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qIOa1j+iniOWZqOiusOS9j+W4g+WxgCAqL1xuICAgIGJyb3dzZXJfcmVtZW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGJfbGVmdCA9ICBjdF9sZWZ0LmNzcyhcImRpc3BsYXlcIik7XG4gICAgICAgIGxldCBiX3JpZ2h0ID0gIGN0X3JpZ2h0LmNzcyhcImRpc3BsYXlcIik7XG4gICAgICAgIGxldCBiX2xheW91dDtcbiAgICBcbiAgICAgICAgLyogXG4gICAgICAgIOacieS4qumXrumimO+8mlxuICAgICAgICAgICAg5LiA5omT5byA5rWP6KeI5Zmo5bCx5Lya5qC55o2u57yT5a2Y5p2l5biD5bGA77yM5bC9566h5L2g55qE6K6+5aSH5a695bqm5bCP5LqOMTI2MHB4XG4gICAgICAgICAgICDkvYbmmK/lr7nkuo7mma7pgJrnlKjmiLfvvIzkuIDkuKrmtY/op4jlmajlk6rmnaXnmoTnu4/luLjlvIDlvIDlj5HogIXmqKHlvI/lkaLvvJ9cbiAgICAgICAgKi9cbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdsYXlvdXQnKSkge1xuICAgICAgICAgICAgLy8g5rWP6KeI5Zmo5pyJ57yT5a2Y55qE5oOF5Ya1XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacrOWcsOacieivpeWPmOmHj+e8k+WtmFwiKTtcbiAgICAgICAgICAgIGxldCBsYXlvdXRfY2hhbmdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGF5b3V0X2NoYW5nZSk7XG4gICAgXG4gICAgICAgICAgICBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJMUlwiKXtcbiAgICAgICAgICAgICAgICAvLyDlt6bkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBsZWZ0X2NlbnRlcl9yaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGxheW91dF9jaGFuZ2UgPT09IFwiTFwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5bem5Lit5biD5bGAXG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJSXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBjZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0X2NoYW5nZSA9PT0gXCJDXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDkuK3luIPlsYBcbiAgICAgICAgICAgICAgICBjZW50ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5YW25LuW6I6r5ZCN5YW25aaZ55qE5oOF5Ya1XG4gICAgICAgICAgICAgICAgbGVmdF9jZW50ZXJfcmlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOa1j+iniOWZqOayoeaciee8k+WtmOeahOaDheWGtVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKzlnLDmsqHmnInor6Xlj5jph4/nvJPlrZhcIik7XG4gICAgICAgICAgICBpZiAoKGJfbGVmdCA9PT0gXCJibG9ja1wiKSAmJiAoYl9yaWdodCA9PT0gXCJub25lXCIpKSB7IC8vIOW3puS4reW4g+WxgFxuICAgICAgICAgICAgICAgIGJfbGF5b3V0ID0gXCJMXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChiX2xlZnQgPT09IFwibm9uZVwiKSAmJiAoYl9yaWdodCA9PT0gXCJibG9ja1wiKSkgeyAvLyDkuK3lj7PluIPlsYBcbiAgICAgICAgICAgICAgICBiX2xheW91dCA9IFwiUlwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoYl9sZWZ0ID09PSBcImJsb2NrXCIpICYmIChiX3JpZ2h0ID09PSBcImJsb2NrXCIpKSB7IC8v5bem5Lit5Y+z5biD5bGAXG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIkxSXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYl9sYXlvdXQgPSBcIkNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGF5b3V0XCIsIGJfbGF5b3V0KVxuICAgICAgICB9XG5cblxuICAgIH0sXG4gICAgLyog5aqS5L2T5p+l6K+i5biD5bGAICovXG4gICAgZGV2aWNlX3N3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOWIm+W7uuafpeivouWIl+ihqFxuICAgICAgICBsZXQgZGV2aWNlX3dpZHRoID0gW1xuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDU2MHB4KScpLFxuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDk4MHB4KScpLFxuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEyNjFweCknKVxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIOWumuS5ieWbnuiwg+WHveaVsFxuICAgICAgICBmdW5jdGlvbiBtZWRpYU1hdGNocyAoKSB7XG4gICAgICAgICAgICBpZiAoZGV2aWNlX3dpZHRoWzBdLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBkZXZpY2Vfc21hbGwgKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRldmljZV93aWR0aFsxXS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgZGV2aWNlX2NlbnRlciAoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlX3dpZHRoWzJdLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBkZXZpY2VfbGFyZ2VzdCAoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlsLrlr7jlhbbku5bmg4XlhrXvvIznkIborrrkuIrmiJHnnIvkuI3liLDov5nlj6Xor53igKbigKZcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5YWI6L+Q6KGM5LiA5qyh5Zue6LCD5Ye95pWwXG4gICAgICAgIG1lZGlhTWF0Y2hzKCk7XG4gICAgICAgIC8vIOS4uuafpeivouWIl+ihqOazqOWGjOebkeWQrOWZqO+8jOWQjOaXtuWwhuWbnuiwg+WHveaVsOS8oOe7meebkeWQrOWZqFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRldmljZV93aWR0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGV2aWNlX3dpZHRoW2ldLmFkZExpc3RlbmVyKG1lZGlhTWF0Y2hzKTtcbiAgICAgICAgfVxuICAgIH0sXG59XG5cblxuIl19
