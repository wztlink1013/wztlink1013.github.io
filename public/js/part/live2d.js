(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initWidget = initWidget;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * Live2D Widget
 * https://github.com/stevenjoezhang/live2d-widget
 */
function loadWidget(config) {
  var waifuPath = config.waifuPath,
      apiPath = config.apiPath,
      cdnPath = config.cdnPath;
  var useCDN = false,
      modelList;

  if (typeof cdnPath === "string") {
    useCDN = true;
    if (!cdnPath.endsWith("/")) cdnPath += "/";
  } else if (typeof apiPath === "string") {
    if (!apiPath.endsWith("/")) apiPath += "/";
  } else {
    console.error("Invalid initWidget argument!");
    return;
  }

  localStorage.removeItem("waifu-display");
  sessionStorage.removeItem("waifu-text");
  document.body.insertAdjacentHTML("beforeend", "<div id=\"waifu\">\n                <div id=\"waifu-tips\"></div>\n                <canvas id=\"live2d\" width=\"300\" height=\"800\"></canvas>\n                <div id=\"waifu-tool\">\n                    <span class=\"fa fa-lg fa-comment\"></span>\n                    <span class=\"fa fa-lg fa-paper-plane\"></span>\n                    <span class=\"fa fa-lg fa-user-circle\"></span>\n                    <span class=\"fa fa-lg fa-street-view\"></span>\n                    <span class=\"fa fa-lg fa-camera-retro\"></span>\n                    <span class=\"fa fa-lg fa-info-circle\"></span>\n                    <span class=\"fa fa-lg fa-times\"></span>\n                </div>\n            </div>"); // https://stackoverflow.com/questions/24148403/trigger-css-transition-on-appended-element

  setTimeout(function () {
    document.getElementById("waifu").style.bottom = 0;
  }, 0);

  function randomSelection(obj) {
    return Array.isArray(obj) ? obj[Math.floor(Math.random() * obj.length)] : obj;
  } // 检测用户活动状态，并在空闲时显示消息


  var userAction = false,
      userActionTimer,
      messageTimer,
      messageArray = ["好久不见，日子过得好快呢……", "大坏蛋！你都多久没理人家了呀，嘤嘤嘤～", "嗨～快来逗我玩吧！", "拿小拳拳锤你胸口！", "记得把小家加入 Adblock 白名单哦！"];
  window.addEventListener("mousemove", function () {
    return userAction = true;
  });
  window.addEventListener("keydown", function () {
    return userAction = true;
  });
  setInterval(function () {
    if (userAction) {
      userAction = false;
      clearInterval(userActionTimer);
      userActionTimer = null;
    } else if (!userActionTimer) {
      userActionTimer = setInterval(function () {
        showMessage(randomSelection(messageArray), 6000, 9);
      }, 20000);
    }
  }, 1000);

  (function registerEventListener() {
    document.querySelector("#waifu-tool .fa-comment").addEventListener("click", showHitokoto);
    document.querySelector("#waifu-tool .fa-paper-plane").addEventListener("click", function () {
      if (window.Asteroids) {
        if (!window.ASTEROIDSPLAYERS) window.ASTEROIDSPLAYERS = [];
        window.ASTEROIDSPLAYERS.push(new Asteroids());
      } else {
        var script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/gh/stevenjoezhang/asteroids/asteroids.js";
        document.head.appendChild(script);
      }
    });
    document.querySelector("#waifu-tool .fa-user-circle").addEventListener("click", loadOtherModel);
    document.querySelector("#waifu-tool .fa-street-view").addEventListener("click", loadRandModel);
    document.querySelector("#waifu-tool .fa-camera-retro").addEventListener("click", function () {
      showMessage("照好了嘛，是不是很可爱呢？", 6000, 9);
      Live2D.captureName = "photo.png";
      Live2D.captureFrame = true;
    });
    document.querySelector("#waifu-tool .fa-info-circle").addEventListener("click", function () {
      open("https://github.com/stevenjoezhang/live2d-widget");
    });
    document.querySelector("#waifu-tool .fa-times").addEventListener("click", function () {
      localStorage.setItem("waifu-display", Date.now());
      showMessage("愿你有一天能与重要的人重逢。", 2000, 11);
      document.getElementById("waifu").style.bottom = "-500px";
      setTimeout(function () {
        document.getElementById("waifu").style.display = "none";
        document.getElementById("waifu-toggle").classList.add("waifu-toggle-active");
      }, 3000);
    });

    var devtools = function devtools() {};

    console.log("%c", devtools);

    devtools.toString = function () {
      showMessage("哈哈，你打开了控制台，是想要看看我的小秘密吗？", 6000, 9);
    };

    window.addEventListener("copy", function () {
      showMessage("你都复制了些什么呀，转载要记得加上出处哦！", 6000, 9);
    });
    window.addEventListener("visibilitychange", function () {
      if (!document.hidden) showMessage("哇，你终于回来了～", 6000, 9);
    });
  })();

  (function welcomeMessage() {
    var text;

    if (location.pathname === "/") {
      // 如果是主页
      var now = new Date().getHours();
      if (now > 5 && now <= 7) text = "早上好！一日之计在于晨，美好的一天就要开始了。";else if (now > 7 && now <= 11) text = "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！";else if (now > 11 && now <= 13) text = "中午了，工作了一个上午，现在是午餐时间！";else if (now > 13 && now <= 17) text = "午后很容易犯困呢，今天的运动目标完成了吗？";else if (now > 17 && now <= 19) text = "傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～";else if (now > 19 && now <= 21) text = "晚上好，今天过得怎么样？";else if (now > 21 && now <= 23) text = ["已经这么晚了呀，早点休息吧，晚安～", "深夜时要爱护眼睛呀！"];else text = "你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？";
    } else if (document.referrer !== "") {
      var referrer = new URL(document.referrer),
          domain = referrer.hostname.split(".")[1];
      if (location.hostname === referrer.hostname) text = "\u6B22\u8FCE\u9605\u8BFB<span>\u300C".concat(document.title.split(" - ")[0], "\u300D</span>");else if (domain === "baidu") text = "Hello\uFF01\u6765\u81EA \u767E\u5EA6\u641C\u7D22 \u7684\u670B\u53CB<br>\u4F60\u662F\u641C\u7D22 <span>".concat(referrer.search.split("&wd=")[1].split("&")[0], "</span> \u627E\u5230\u7684\u6211\u5417\uFF1F");else if (domain === "so") text = "Hello\uFF01\u6765\u81EA 360\u641C\u7D22 \u7684\u670B\u53CB<br>\u4F60\u662F\u641C\u7D22 <span>".concat(referrer.search.split("&q=")[1].split("&")[0], "</span> \u627E\u5230\u7684\u6211\u5417\uFF1F");else if (domain === "google") text = "Hello\uFF01\u6765\u81EA \u8C37\u6B4C\u641C\u7D22 \u7684\u670B\u53CB<br>\u6B22\u8FCE\u9605\u8BFB<span>\u300C".concat(document.title.split(" - ")[0], "\u300D</span>");else text = "Hello\uFF01\u6765\u81EA <span>".concat(referrer.hostname, "</span> \u7684\u670B\u53CB");
    } else {
      text = "\u6B22\u8FCE\u9605\u8BFB<span>\u300C".concat(document.title.split(" - ")[0], "\u300D</span>");
    }

    showMessage(text, 7000, 8);
  })();

  function showHitokoto() {
    // 增加 hitokoto.cn 的 API
    fetch("https://v1.hitokoto.cn").then(function (response) {
      return response.json();
    }).then(function (result) {
      var text = "\u8FD9\u53E5\u4E00\u8A00\u6765\u81EA <span>\u300C".concat(result.from, "\u300D</span>\uFF0C\u662F <span>").concat(result.creator, "</span> \u5728 hitokoto.cn \u6295\u7A3F\u7684\u3002");
      showMessage(result.hitokoto, 6000, 9);
      setTimeout(function () {
        showMessage(text, 4000, 9);
      }, 6000);
    });
  }

  function showMessage(text, timeout, priority) {
    if (!text || sessionStorage.getItem("waifu-text") && sessionStorage.getItem("waifu-text") > priority) return;

    if (messageTimer) {
      clearTimeout(messageTimer);
      messageTimer = null;
    }

    text = randomSelection(text);
    sessionStorage.setItem("waifu-text", priority);
    var tips = document.getElementById("waifu-tips");
    tips.innerHTML = text;
    tips.classList.add("waifu-tips-active");
    messageTimer = setTimeout(function () {
      sessionStorage.removeItem("waifu-text");
      tips.classList.remove("waifu-tips-active");
    }, timeout);
  }

  (function initModel() {
    var modelId = localStorage.getItem("modelId"),
        modelTexturesId = localStorage.getItem("modelTexturesId");

    if (modelId === null) {
      // 首次访问加载 指定模型 的 指定材质
      modelId = 1; // 模型 ID

      modelTexturesId = 53; // 材质 ID
    }

    loadModel(modelId, modelTexturesId);
    fetch(waifuPath).then(function (response) {
      return response.json();
    }).then(function (result) {
      window.addEventListener("mouseover", function (event) {
        var _iterator = _createForOfIteratorHelper(result.mouseover),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _step.value,
                selector = _step$value.selector,
                text = _step$value.text;
            if (!event.target.matches(selector)) continue;
            text = randomSelection(text);
            text = text.replace("{text}", event.target.innerText);
            showMessage(text, 4000, 8);
            return;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      window.addEventListener("click", function (event) {
        var _iterator2 = _createForOfIteratorHelper(result.click),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _step2.value,
                selector = _step2$value.selector,
                text = _step2$value.text;
            if (!event.target.matches(selector)) continue;
            text = randomSelection(text);
            text = text.replace("{text}", event.target.innerText);
            showMessage(text, 4000, 8);
            return;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
      result.seasons.forEach(function (_ref) {
        var date = _ref.date,
            text = _ref.text;
        var now = new Date(),
            after = date.split("-")[0],
            before = date.split("-")[1] || after;

        if (after.split("/")[0] <= now.getMonth() + 1 && now.getMonth() + 1 <= before.split("/")[0] && after.split("/")[1] <= now.getDate() && now.getDate() <= before.split("/")[1]) {
          text = randomSelection(text);
          text = text.replace("{year}", now.getFullYear()); //showMessage(text, 7000, true);

          messageArray.push(text);
        }
      });
    });
  })();

  function loadModelList() {
    return _loadModelList.apply(this, arguments);
  }

  function _loadModelList() {
    _loadModelList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(cdnPath, "model_list.json"));

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              modelList = _context.sent;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _loadModelList.apply(this, arguments);
  }

  function loadModel(_x, _x2, _x3) {
    return _loadModel.apply(this, arguments);
  }

  function _loadModel() {
    _loadModel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(modelId, modelTexturesId, message) {
      var target;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              localStorage.setItem("modelId", modelId);
              localStorage.setItem("modelTexturesId", modelTexturesId);
              showMessage(message, 4000, 10);

              if (!useCDN) {
                _context2.next = 11;
                break;
              }

              if (modelList) {
                _context2.next = 7;
                break;
              }

              _context2.next = 7;
              return loadModelList();

            case 7:
              target = randomSelection(modelList.models[modelId]);
              loadlive2d("live2d", "".concat(cdnPath, "model/").concat(target, "/index.json"));
              _context2.next = 13;
              break;

            case 11:
              loadlive2d("live2d", "".concat(apiPath, "get/?id=").concat(modelId, "-").concat(modelTexturesId));
              console.log("Live2D \u6A21\u578B ".concat(modelId, "-").concat(modelTexturesId, " \u52A0\u8F7D\u5B8C\u6210"));

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _loadModel.apply(this, arguments);
  }

  function loadRandModel() {
    return _loadRandModel.apply(this, arguments);
  }

  function _loadRandModel() {
    _loadRandModel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var modelId, modelTexturesId, target;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              modelId = localStorage.getItem("modelId"), modelTexturesId = localStorage.getItem("modelTexturesId");

              if (!useCDN) {
                _context3.next = 10;
                break;
              }

              if (modelList) {
                _context3.next = 5;
                break;
              }

              _context3.next = 5;
              return loadModelList();

            case 5:
              target = randomSelection(modelList.models[modelId]);
              loadlive2d("live2d", "".concat(cdnPath, "model/").concat(target, "/index.json"));
              showMessage("我的新衣服好看嘛？", 4000, 10);
              _context3.next = 11;
              break;

            case 10:
              // 可选 "rand"(随机), "switch"(顺序)
              fetch("".concat(apiPath, "rand_textures/?id=").concat(modelId, "-").concat(modelTexturesId)).then(function (response) {
                return response.json();
              }).then(function (result) {
                if (result.textures.id === 1 && (modelTexturesId === 1 || modelTexturesId === 0)) showMessage("我还没有其他衣服呢！", 4000, 10);else loadModel(modelId, result.textures.id, "我的新衣服好看嘛？");
              });

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _loadRandModel.apply(this, arguments);
  }

  function loadOtherModel() {
    return _loadOtherModel.apply(this, arguments);
  }

  function _loadOtherModel() {
    _loadOtherModel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var modelId, index;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              modelId = localStorage.getItem("modelId");

              if (!useCDN) {
                _context4.next = 9;
                break;
              }

              if (modelList) {
                _context4.next = 5;
                break;
              }

              _context4.next = 5;
              return loadModelList();

            case 5:
              index = ++modelId >= modelList.models.length ? 0 : modelId;
              loadModel(index, 0, modelList.messages[index]);
              _context4.next = 10;
              break;

            case 9:
              fetch("".concat(apiPath, "switch/?id=").concat(modelId)).then(function (response) {
                return response.json();
              }).then(function (result) {
                loadModel(result.model.id, 0, result.model.message);
              });

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _loadOtherModel.apply(this, arguments);
  }
}

function initWidget(config, apiPath) {
  if (typeof config === "string") {
    config = {
      waifuPath: config,
      apiPath: apiPath
    };
  }

  document.body.insertAdjacentHTML("beforeend", "<div id=\"waifu-toggle\">\n                <span>\u96F7\u59C6</span>\n            </div>");
  var toggle = document.getElementById("waifu-toggle");
  toggle.addEventListener("click", function () {
    toggle.classList.remove("waifu-toggle-active");

    if (toggle.getAttribute("first-time")) {
      loadWidget(config);
      toggle.removeAttribute("first-time");
    } else {
      localStorage.removeItem("waifu-display");
      document.getElementById("waifu").style.display = "";
      setTimeout(function () {
        document.getElementById("waifu").style.bottom = 0;
      }, 0);
    }
  });

  if (localStorage.getItem("waifu-display") && Date.now() - localStorage.getItem("waifu-display") <= 86400000) {
    toggle.setAttribute("first-time", true);
    setTimeout(function () {
      toggle.classList.add("waifu-toggle-active");
    }, 0);
  } else {
    loadWidget(config);
  }
} // 如果不做默认导入，就按照下面写，不要default词

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2xpdmUyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEI7QUFBQSxNQUNkLFNBRGMsR0FDa0IsTUFEbEIsQ0FDZCxTQURjO0FBQUEsTUFDSCxPQURHLEdBQ2tCLE1BRGxCLENBQ0gsT0FERztBQUFBLE1BQ00sT0FETixHQUNrQixNQURsQixDQUNNLE9BRE47QUFFcEIsTUFBSSxNQUFNLEdBQUcsS0FBYjtBQUFBLE1BQW9CLFNBQXBCOztBQUNBLE1BQUksT0FBTyxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQzdCLElBQUEsTUFBTSxHQUFHLElBQVQ7QUFDQSxRQUFJLENBQUMsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsR0FBakIsQ0FBTCxFQUE0QixPQUFPLElBQUksR0FBWDtBQUMvQixHQUhELE1BR08sSUFBSSxPQUFPLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDcEMsUUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFSLENBQWlCLEdBQWpCLENBQUwsRUFBNEIsT0FBTyxJQUFJLEdBQVg7QUFDL0IsR0FGTSxNQUVBO0FBQ0gsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLDhCQUFkO0FBQ0E7QUFDSDs7QUFDRCxFQUFBLFlBQVksQ0FBQyxVQUFiLENBQXdCLGVBQXhCO0FBQ0EsRUFBQSxjQUFjLENBQUMsVUFBZixDQUEwQixZQUExQjtBQUNBLEVBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxrQkFBZCxDQUFpQyxXQUFqQyxvc0JBZG9CLENBMkJwQjs7QUFDQSxFQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2IsSUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixPQUF4QixFQUFpQyxLQUFq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QyxHQUFnRCxDQUFoRDtBQUNILE9BRlMsRUFFUCxDQUZPLENBQVY7QUFHSDtBQUNKLEdBWkQ7O0FBYUEsTUFBSSxZQUFZLENBQUMsT0FBYixDQUFxQixlQUFyQixLQUF5QyxJQUFJLENBQUMsR0FBTCxLQUFhLFlBQVksQ0FBQyxPQUFiLENBQXFCLGVBQXJCLENBQWIsSUFBc0QsUUFBbkcsRUFBNkc7QUFDekcsSUFBQSxNQUFNLENBQUMsWUFBUCxDQUFvQixZQUFwQixFQUFrQyxJQUFsQztBQUNBLElBQUEsVUFBVSxDQUFDLFlBQU07QUFDYixNQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLHFCQUFyQjtBQUNILEtBRlMsRUFFUCxDQUZPLENBQVY7QUFHSCxHQUxELE1BS087QUFDSCxJQUFBLFVBQVUsQ0FBQyxNQUFELENBQVY7QUFDSDtBQUNSLEMsQ0FFRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qXG4gKiBMaXZlMkQgV2lkZ2V0XG4gKiBodHRwczovL2dpdGh1Yi5jb20vc3RldmVuam9lemhhbmcvbGl2ZTJkLXdpZGdldFxuICovXG5cbmZ1bmN0aW9uIGxvYWRXaWRnZXQoY29uZmlnKSB7XG4gICAgICAgIGxldCB7IHdhaWZ1UGF0aCwgYXBpUGF0aCwgY2RuUGF0aCB9ID0gY29uZmlnO1xuICAgICAgICBsZXQgdXNlQ0ROID0gZmFsc2UsIG1vZGVsTGlzdDtcbiAgICAgICAgaWYgKHR5cGVvZiBjZG5QYXRoID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB1c2VDRE4gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFjZG5QYXRoLmVuZHNXaXRoKFwiL1wiKSkgY2RuUGF0aCArPSBcIi9cIjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXBpUGF0aCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKCFhcGlQYXRoLmVuZHNXaXRoKFwiL1wiKSkgYXBpUGF0aCArPSBcIi9cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGluaXRXaWRnZXQgYXJndW1lbnQhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwid2FpZnUtZGlzcGxheVwiKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcIndhaWZ1LXRleHRcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGA8ZGl2IGlkPVwid2FpZnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2FpZnUtdGlwc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJsaXZlMmRcIiB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjgwMFwiPjwvY2FudmFzPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3YWlmdS10b29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbGcgZmEtY29tbWVudFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1sZyBmYS1wYXBlci1wbGFuZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1sZyBmYS11c2VyLWNpcmNsZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1sZyBmYS1zdHJlZXQtdmlld1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1sZyBmYS1jYW1lcmEtcmV0cm9cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbGcgZmEtaW5mby1jaXJjbGVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbGcgZmEtdGltZXNcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gKTtcbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQxNDg0MDMvdHJpZ2dlci1jc3MtdHJhbnNpdGlvbi1vbi1hcHBlbmRlZC1lbGVtZW50XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdVwiKS5zdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICB9LCAwKTtcbiAgICBcbiAgICAgICAgZnVuY3Rpb24gcmFuZG9tU2VsZWN0aW9uKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKSA/IG9ialtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvYmoubGVuZ3RoKV0gOiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5qOA5rWL55So5oi35rS75Yqo54q25oCB77yM5bm25Zyo56m66Zey5pe25pi+56S65raI5oGvXG4gICAgICAgIGxldCB1c2VyQWN0aW9uID0gZmFsc2UsXG4gICAgICAgICAgICB1c2VyQWN0aW9uVGltZXIsXG4gICAgICAgICAgICBtZXNzYWdlVGltZXIsXG4gICAgICAgICAgICBtZXNzYWdlQXJyYXkgPSBbXCLlpb3kuYXkuI3op4HvvIzml6XlrZDov4flvpflpb3lv6vlkaLigKbigKZcIiwgXCLlpKflnY/om4vvvIHkvaDpg73lpJrkuYXmsqHnkIbkurrlrrbkuoblkYDvvIzlmKTlmKTlmKTvvZ5cIiwgXCLll6jvvZ7lv6vmnaXpgJfmiJHnjqnlkKfvvIFcIiwgXCLmi7/lsI/mi7Pmi7PplKTkvaDog7jlj6PvvIFcIiwgXCLorrDlvpfmiorlsI/lrrbliqDlhaUgQWRibG9jayDnmb3lkI3ljZXlk6bvvIFcIl07XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsICgpID0+IHVzZXJBY3Rpb24gPSB0cnVlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsICgpID0+IHVzZXJBY3Rpb24gPSB0cnVlKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXJBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB1c2VyQWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh1c2VyQWN0aW9uVGltZXIpO1xuICAgICAgICAgICAgICAgIHVzZXJBY3Rpb25UaW1lciA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF1c2VyQWN0aW9uVGltZXIpIHtcbiAgICAgICAgICAgICAgICB1c2VyQWN0aW9uVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHJhbmRvbVNlbGVjdGlvbihtZXNzYWdlQXJyYXkpLCA2MDAwLCA5KTtcbiAgICAgICAgICAgICAgICB9LCAyMDAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIFxuICAgICAgICAoZnVuY3Rpb24gcmVnaXN0ZXJFdmVudExpc3RlbmVyKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YWlmdS10b29sIC5mYS1jb21tZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SGl0b2tvdG8pO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YWlmdS10b29sIC5mYS1wYXBlci1wbGFuZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuQXN0ZXJvaWRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghd2luZG93LkFTVEVST0lEU1BMQVlFUlMpIHdpbmRvdy5BU1RFUk9JRFNQTEFZRVJTID0gW107XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5BU1RFUk9JRFNQTEFZRVJTLnB1c2gobmV3IEFzdGVyb2lkcygpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvc3RldmVuam9lemhhbmcvYXN0ZXJvaWRzL2FzdGVyb2lkcy5qc1wiO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dhaWZ1LXRvb2wgLmZhLXVzZXItY2lyY2xlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkT3RoZXJNb2RlbCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dhaWZ1LXRvb2wgLmZhLXN0cmVldC12aWV3XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkUmFuZE1vZGVsKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FpZnUtdG9vbCAuZmEtY2FtZXJhLXJldHJvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoXCLnhaflpb3kuoblmJvvvIzmmK/kuI3mmK/lvojlj6/niLHlkaLvvJ9cIiwgNjAwMCwgOSk7XG4gICAgICAgICAgICAgICAgTGl2ZTJELmNhcHR1cmVOYW1lID0gXCJwaG90by5wbmdcIjtcbiAgICAgICAgICAgICAgICBMaXZlMkQuY2FwdHVyZUZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YWlmdS10b29sIC5mYS1pbmZvLWNpcmNsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW4oXCJodHRwczovL2dpdGh1Yi5jb20vc3RldmVuam9lemhhbmcvbGl2ZTJkLXdpZGdldFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YWlmdS10b29sIC5mYS10aW1lc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2FpZnUtZGlzcGxheVwiLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShcIuaEv+S9oOacieS4gOWkqeiDveS4jumHjeimgeeahOS6uumHjemAouOAglwiLCAyMDAwLCAxMSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdVwiKS5zdHlsZS5ib3R0b20gPSBcIi01MDBweFwiO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaWZ1XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdS10b2dnbGVcIikuY2xhc3NMaXN0LmFkZChcIndhaWZ1LXRvZ2dsZS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRldnRvb2xzID0gKCkgPT4ge307XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIsIGRldnRvb2xzKTtcbiAgICAgICAgICAgIGRldnRvb2xzLnRvU3RyaW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKFwi5ZOI5ZOI77yM5L2g5omT5byA5LqG5o6n5Yi25Y+w77yM5piv5oOz6KaB55yL55yL5oiR55qE5bCP56eY5a+G5ZCX77yfXCIsIDYwMDAsIDkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoXCLkvaDpg73lpI3liLbkuobkupvku4DkuYjlkYDvvIzovazovb3opoHorrDlvpfliqDkuIrlh7rlpITlk6bvvIFcIiwgNjAwMCwgOSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4pIHNob3dNZXNzYWdlKFwi5ZOH77yM5L2g57uI5LqO5Zue5p2l5LqG772eXCIsIDYwMDAsIDkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG4gICAgXG4gICAgICAgIChmdW5jdGlvbiB3ZWxjb21lTWVzc2FnZSgpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0O1xuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIikgeyAvLyDlpoLmnpzmmK/kuLvpobVcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+IDUgJiYgbm93IDw9IDcpIHRleHQgPSBcIuaXqeS4iuWlve+8geS4gOaXpeS5i+iuoeWcqOS6juaZqO+8jOe+juWlveeahOS4gOWkqeWwseimgeW8gOWni+S6huOAglwiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+IDcgJiYgbm93IDw9IDExKSB0ZXh0ID0gXCLkuIrljYjlpb3vvIHlt6XkvZzpobrliKnlmJvvvIzkuI3opoHkuYXlnZDvvIzlpJrotbfmnaXotbDliqjotbDliqjlk6bvvIFcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPiAxMSAmJiBub3cgPD0gMTMpIHRleHQgPSBcIuS4reWNiOS6hu+8jOW3peS9nOS6huS4gOS4quS4iuWNiO+8jOeOsOWcqOaYr+WNiOmkkOaXtumXtO+8gVwiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+IDEzICYmIG5vdyA8PSAxNykgdGV4dCA9IFwi5Y2I5ZCO5b6I5a655piT54qv5Zuw5ZGi77yM5LuK5aSp55qE6L+Q5Yqo55uu5qCH5a6M5oiQ5LqG5ZCX77yfXCI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID4gMTcgJiYgbm93IDw9IDE5KSB0ZXh0ID0gXCLlgo3mmZrkuobvvIHnqpflpJblpJXpmLPnmoTmma/oibLlvojnvo7kuL3lkaLvvIzmnIDnvo7kuI3ov4flpJXpmLPnuqLvvZ5cIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPiAxOSAmJiBub3cgPD0gMjEpIHRleHQgPSBcIuaZmuS4iuWlve+8jOS7iuWkqei/h+W+l+aAjuS5iOagt++8n1wiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+IDIxICYmIG5vdyA8PSAyMykgdGV4dCA9IFtcIuW3sue7j+i/meS5iOaZmuS6huWRgO+8jOaXqeeCueS8keaBr+WQp++8jOaZmuWuie+9nlwiLCBcIua3seWknOaXtuimgeeIseaKpOecvOedm+WRgO+8gVwiXTtcbiAgICAgICAgICAgICAgICBlbHNlIHRleHQgPSBcIuS9oOaYr+WknOeMq+WtkOWRgO+8n+i/meS5iOaZmui/mOS4jeedoeinie+8jOaYjuWkqei1t+eahOadpeWYm++8n1wiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5yZWZlcnJlciAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZmVycmVyID0gbmV3IFVSTChkb2N1bWVudC5yZWZlcnJlciksXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbiA9IHJlZmVycmVyLmhvc3RuYW1lLnNwbGl0KFwiLlwiKVsxXTtcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24uaG9zdG5hbWUgPT09IHJlZmVycmVyLmhvc3RuYW1lKSB0ZXh0ID0gYOasoui/jumYheivuzxzcGFuPuOAjCR7ZG9jdW1lbnQudGl0bGUuc3BsaXQoXCIgLSBcIilbMF1944CNPC9zcGFuPmA7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9tYWluID09PSBcImJhaWR1XCIpIHRleHQgPSBgSGVsbG/vvIHmnaXoh6og55m+5bqm5pCc57SiIOeahOaci+WPizxicj7kvaDmmK/mkJzntKIgPHNwYW4+JHtyZWZlcnJlci5zZWFyY2guc3BsaXQoXCImd2Q9XCIpWzFdLnNwbGl0KFwiJlwiKVswXX08L3NwYW4+IOaJvuWIsOeahOaIkeWQl++8n2A7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9tYWluID09PSBcInNvXCIpIHRleHQgPSBgSGVsbG/vvIHmnaXoh6ogMzYw5pCc57SiIOeahOaci+WPizxicj7kvaDmmK/mkJzntKIgPHNwYW4+JHtyZWZlcnJlci5zZWFyY2guc3BsaXQoXCImcT1cIilbMV0uc3BsaXQoXCImXCIpWzBdfTwvc3Bhbj4g5om+5Yiw55qE5oiR5ZCX77yfYDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkb21haW4gPT09IFwiZ29vZ2xlXCIpIHRleHQgPSBgSGVsbG/vvIHmnaXoh6og6LC35q2M5pCc57SiIOeahOaci+WPizxicj7mrKLov47pmIXor7s8c3Bhbj7jgIwke2RvY3VtZW50LnRpdGxlLnNwbGl0KFwiIC0gXCIpWzBdfeOAjTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgIGVsc2UgdGV4dCA9IGBIZWxsb++8geadpeiHqiA8c3Bhbj4ke3JlZmVycmVyLmhvc3RuYW1lfTwvc3Bhbj4g55qE5pyL5Y+LYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGV4dCA9IGDmrKLov47pmIXor7s8c3Bhbj7jgIwke2RvY3VtZW50LnRpdGxlLnNwbGl0KFwiIC0gXCIpWzBdfeOAjTwvc3Bhbj5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hvd01lc3NhZ2UodGV4dCwgNzAwMCwgOCk7XG4gICAgICAgIH0pKCk7XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIHNob3dIaXRva290bygpIHtcbiAgICAgICAgICAgIC8vIOWinuWKoCBoaXRva290by5jbiDnmoQgQVBJXG4gICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vdjEuaGl0b2tvdG8uY25cIilcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGDov5nlj6XkuIDoqIDmnaXoh6ogPHNwYW4+44CMJHtyZXN1bHQuZnJvbX3jgI08L3NwYW4+77yM5pivIDxzcGFuPiR7cmVzdWx0LmNyZWF0b3J9PC9zcGFuPiDlnKggaGl0b2tvdG8uY24g5oqV56i/55qE44CCYDtcbiAgICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UocmVzdWx0LmhpdG9rb3RvLCA2MDAwLCA5KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSh0ZXh0LCA0MDAwLCA5KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNjAwMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gc2hvd01lc3NhZ2UodGV4dCwgdGltZW91dCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGlmICghdGV4dCB8fCAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIndhaWZ1LXRleHRcIikgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIndhaWZ1LXRleHRcIikgPiBwcmlvcml0eSkpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlVGltZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQobWVzc2FnZVRpbWVyKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlVGltZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dCA9IHJhbmRvbVNlbGVjdGlvbih0ZXh0KTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ3YWlmdS10ZXh0XCIsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIGNvbnN0IHRpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaWZ1LXRpcHNcIik7XG4gICAgICAgICAgICB0aXBzLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgICAgICB0aXBzLmNsYXNzTGlzdC5hZGQoXCJ3YWlmdS10aXBzLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIG1lc3NhZ2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ3YWlmdS10ZXh0XCIpO1xuICAgICAgICAgICAgICAgIHRpcHMuY2xhc3NMaXN0LnJlbW92ZShcIndhaWZ1LXRpcHMtYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgKGZ1bmN0aW9uIGluaXRNb2RlbCgpIHtcbiAgICAgICAgICAgIGxldCBtb2RlbElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtb2RlbElkXCIpLFxuICAgICAgICAgICAgICAgIG1vZGVsVGV4dHVyZXNJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibW9kZWxUZXh0dXJlc0lkXCIpO1xuICAgICAgICAgICAgaWYgKG1vZGVsSWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyDpppbmrKHorr/pl67liqDovb0g5oyH5a6a5qih5Z6LIOeahCDmjIflrprmnZDotKhcbiAgICAgICAgICAgICAgICBtb2RlbElkID0gMTsgLy8g5qih5Z6LIElEXG4gICAgICAgICAgICAgICAgbW9kZWxUZXh0dXJlc0lkID0gNTM7IC8vIOadkOi0qCBJRFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZE1vZGVsKG1vZGVsSWQsIG1vZGVsVGV4dHVyZXNJZCk7XG4gICAgICAgICAgICBmZXRjaCh3YWlmdVBhdGgpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHsgc2VsZWN0b3IsIHRleHQgfSBvZiByZXN1bHQubW91c2VvdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSByYW5kb21TZWxlY3Rpb24odGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShcInt0ZXh0fVwiLCBldmVudC50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSh0ZXh0LCA0MDAwLCA4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHsgc2VsZWN0b3IsIHRleHQgfSBvZiByZXN1bHQuY2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHJhbmRvbVNlbGVjdGlvbih0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKFwie3RleHR9XCIsIGV2ZW50LnRhcmdldC5pbm5lclRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHRleHQsIDQwMDAsIDgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zZWFzb25zLmZvckVhY2goKHsgZGF0ZSwgdGV4dCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyID0gZGF0ZS5zcGxpdChcIi1cIilbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlID0gZGF0ZS5zcGxpdChcIi1cIilbMV0gfHwgYWZ0ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGFmdGVyLnNwbGl0KFwiL1wiKVswXSA8PSBub3cuZ2V0TW9udGgoKSArIDEgJiYgbm93LmdldE1vbnRoKCkgKyAxIDw9IGJlZm9yZS5zcGxpdChcIi9cIilbMF0pICYmIChhZnRlci5zcGxpdChcIi9cIilbMV0gPD0gbm93LmdldERhdGUoKSAmJiBub3cuZ2V0RGF0ZSgpIDw9IGJlZm9yZS5zcGxpdChcIi9cIilbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHJhbmRvbVNlbGVjdGlvbih0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKFwie3llYXJ9XCIsIG5vdy5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Nob3dNZXNzYWdlKHRleHQsIDcwMDAsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VBcnJheS5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcbiAgICBcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZE1vZGVsTGlzdCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y2RuUGF0aH1tb2RlbF9saXN0Lmpzb25gKTtcbiAgICAgICAgICAgIG1vZGVsTGlzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBhc3luYyBmdW5jdGlvbiBsb2FkTW9kZWwobW9kZWxJZCwgbW9kZWxUZXh0dXJlc0lkLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1vZGVsSWRcIiwgbW9kZWxJZCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1vZGVsVGV4dHVyZXNJZFwiLCBtb2RlbFRleHR1cmVzSWQpO1xuICAgICAgICAgICAgc2hvd01lc3NhZ2UobWVzc2FnZSwgNDAwMCwgMTApO1xuICAgICAgICAgICAgaWYgKHVzZUNETikge1xuICAgICAgICAgICAgICAgIGlmICghbW9kZWxMaXN0KSBhd2FpdCBsb2FkTW9kZWxMaXN0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gcmFuZG9tU2VsZWN0aW9uKG1vZGVsTGlzdC5tb2RlbHNbbW9kZWxJZF0pO1xuICAgICAgICAgICAgICAgIGxvYWRsaXZlMmQoXCJsaXZlMmRcIiwgYCR7Y2RuUGF0aH1tb2RlbC8ke3RhcmdldH0vaW5kZXguanNvbmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2FkbGl2ZTJkKFwibGl2ZTJkXCIsIGAke2FwaVBhdGh9Z2V0Lz9pZD0ke21vZGVsSWR9LSR7bW9kZWxUZXh0dXJlc0lkfWApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMaXZlMkQg5qih5Z6LICR7bW9kZWxJZH0tJHttb2RlbFRleHR1cmVzSWR9IOWKoOi9veWujOaIkGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRSYW5kTW9kZWwoKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlbElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtb2RlbElkXCIpLFxuICAgICAgICAgICAgICAgIG1vZGVsVGV4dHVyZXNJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibW9kZWxUZXh0dXJlc0lkXCIpO1xuICAgICAgICAgICAgaWYgKHVzZUNETikge1xuICAgICAgICAgICAgICAgIGlmICghbW9kZWxMaXN0KSBhd2FpdCBsb2FkTW9kZWxMaXN0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gcmFuZG9tU2VsZWN0aW9uKG1vZGVsTGlzdC5tb2RlbHNbbW9kZWxJZF0pO1xuICAgICAgICAgICAgICAgIGxvYWRsaXZlMmQoXCJsaXZlMmRcIiwgYCR7Y2RuUGF0aH1tb2RlbC8ke3RhcmdldH0vaW5kZXguanNvbmApO1xuICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKFwi5oiR55qE5paw6KGj5pyN5aW955yL5Zib77yfXCIsIDQwMDAsIDEwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5Y+v6YCJIFwicmFuZFwiKOmaj+acuiksIFwic3dpdGNoXCIo6aG65bqPKVxuICAgICAgICAgICAgICAgIGZldGNoKGAke2FwaVBhdGh9cmFuZF90ZXh0dXJlcy8/aWQ9JHttb2RlbElkfS0ke21vZGVsVGV4dHVyZXNJZH1gKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRleHR1cmVzLmlkID09PSAxICYmIChtb2RlbFRleHR1cmVzSWQgPT09IDEgfHwgbW9kZWxUZXh0dXJlc0lkID09PSAwKSkgc2hvd01lc3NhZ2UoXCLmiJHov5jmsqHmnInlhbbku5booaPmnI3lkaLvvIFcIiwgNDAwMCwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBsb2FkTW9kZWwobW9kZWxJZCwgcmVzdWx0LnRleHR1cmVzLmlkLCBcIuaIkeeahOaWsOiho+acjeWlveeci+WYm++8n1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZE90aGVyTW9kZWwoKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWxJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibW9kZWxJZFwiKTtcbiAgICAgICAgICAgIGlmICh1c2VDRE4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGVsTGlzdCkgYXdhaXQgbG9hZE1vZGVsTGlzdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gKCsrbW9kZWxJZCA+PSBtb2RlbExpc3QubW9kZWxzLmxlbmd0aCkgPyAwIDogbW9kZWxJZDtcbiAgICAgICAgICAgICAgICBsb2FkTW9kZWwoaW5kZXgsIDAsIG1vZGVsTGlzdC5tZXNzYWdlc1tpbmRleF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmZXRjaChgJHthcGlQYXRofXN3aXRjaC8/aWQ9JHttb2RlbElkfWApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb2RlbChyZXN1bHQubW9kZWwuaWQsIDAsIHJlc3VsdC5tb2RlbC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbn1cbmZ1bmN0aW9uIGluaXRXaWRnZXQoY29uZmlnLCBhcGlQYXRoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgd2FpZnVQYXRoOiBjb25maWcsXG4gICAgICAgICAgICAgICAgYXBpUGF0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgPGRpdiBpZD1cIndhaWZ1LXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPumbt+Wnhjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PmApO1xuICAgICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaWZ1LXRvZ2dsZVwiKTtcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcIndhaWZ1LXRvZ2dsZS1hY3RpdmVcIik7XG4gICAgICAgICAgICBpZiAodG9nZ2xlLmdldEF0dHJpYnV0ZShcImZpcnN0LXRpbWVcIikpIHtcbiAgICAgICAgICAgICAgICBsb2FkV2lkZ2V0KGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZShcImZpcnN0LXRpbWVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwid2FpZnUtZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaWZ1XCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaWZ1XCIpLnN0eWxlLmJvdHRvbSA9IDA7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3YWlmdS1kaXNwbGF5XCIpICYmIERhdGUubm93KCkgLSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndhaWZ1LWRpc3BsYXlcIikgPD0gODY0MDAwMDApIHtcbiAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJmaXJzdC10aW1lXCIsIHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJ3YWlmdS10b2dnbGUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2FkV2lkZ2V0KGNvbmZpZyk7XG4gICAgICAgIH1cbn1cblxuLy8g5aaC5p6c5LiN5YGa6buY6K6k5a+85YWl77yM5bCx5oyJ54Wn5LiL6Z2i5YaZ77yM5LiN6KaBZGVmYXVsdOivjVxuZXhwb3J0IHtcbiAgICBpbml0V2lkZ2V0LCAvL+WvvOWHuuWvueixoVxufVxuIl19
