(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initWidget = initWidget;

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
  document.body.insertAdjacentHTML("beforeend", "<div id=\"waifu\">\n                <div id=\"waifu-tips\"></div>\n                <canvas id=\"live2d\"></canvas>\n                <!-- <div id=\"waifu-tool\">\n                    <span class=\"fa fa-lg fa-comment\"></span>\n                    <span class=\"fa fa-lg fa-info-circle\"></span>\n                    <span class=\"fa fa-lg fa-times\"></span>\n                </div> -->\n            </div>"); // https://stackoverflow.com/questions/24148403/trigger-css-transition-on-appended-element

  setTimeout(function () {
    document.getElementById("waifu").style.bottom = 0;
  }, 0);

  function randomSelection(obj) {
    return Array.isArray(obj) ? obj[Math.floor(Math.random() * obj.length)] : obj;
  } // 检测用户活动状态，并在空闲时显示消息


  var userAction = false,
      userActionTimer,
      messageTimer,
      messageArray = ["好久不见，日子过得好快呢……", "嗨～欢迎访问该站点！", "记得把小家加入 Adblock 白名单哦！"];
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
    // TODO: 第一个icon，说话
    // document.querySelector("#waifu-tool .fa-comment").addEventListener("click", showHitokoto);
    // TODO: 第二个icon，貌似是什么游戏
    // document.querySelector("#waifu-tool .fa-paper-plane").addEventListener("click", () => {
    //     if (window.Asteroids) {
    //         if (!window.ASTEROIDSPLAYERS) window.ASTEROIDSPLAYERS = [];
    //         window.ASTEROIDSPLAYERS.push(new Asteroids());
    //     } else {
    //         const script = document.createElement("script");
    //         script.src = "https://cdn.jsdelivr.net/gh/stevenjoezhang/asteroids/asteroids.js";
    //         document.head.appendChild(script);
    //     }
    // });
    // TODO: 第三个icon，换人物
    // document.querySelector("#waifu-tool .fa-user-circle").addEventListener("click", loadOtherModel);
    // TODO: 第四个icon，应该是换装
    // document.querySelector("#waifu-tool .fa-street-view").addEventListener("click", loadRandModel);
    // TODO: 第五个icon，拍照
    // document.querySelector("#waifu-tool .fa-camera-retro").addEventListener("click", () => {
    //     showMessage("照好了嘛，是不是很可爱呢？", 6000, 9);
    //     Live2D.captureName = "photo.png";
    //     Live2D.captureFrame = true;
    // });
    // TODO: 第六个icon，原项目地址
    // document.querySelector("#waifu-tool .fa-info-circle").addEventListener("click", () => {
    //     open("https://www.wztlink1013.com/");
    // });
    // // TODO: 第七个icon，隐藏看板娘
    // document.querySelector("#waifu-tool .fa-times").addEventListener("click", () => {
    //     localStorage.setItem("waifu-display", Date.now());
    //     showMessage("愿你有一天能与重要的人重逢。", 2000, 11);
    //     document.getElementById("waifu").style.bottom = "-500px";
    //     setTimeout(() => {
    //         document.getElementById("waifu").style.display = "none";
    //         document.getElementById("waifu-toggle").classList.add("waifu-toggle-active");
    //     }, 3000);
    // });
    window.addEventListener("copy", function () {
      showMessage("你都复制了些什么呀，转载要记得加上出处哦！", 6000, 9);
    });
    window.addEventListener("visibilitychange", function () {
      if (!document.hidden) showMessage("哇，你终于回来了～", 6000, 9);
    });
  })(); // 首页展示特定文字


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
  })(); // TODO: 服务于第一个icon
  // function showHitokoto() {
  //     // 增加 hitokoto.cn 的 API
  //     fetch("https://v1.hitokoto.cn")
  //         .then(response => response.json())
  //         .then(result => {
  //             const text = `这句一言来自 <span>「${result.from}」</span>，是 <span>${result.creator}</span> 在 hitokoto.cn 投稿的。`;
  //             showMessage(result.hitokoto, 6000, 9);
  //             setTimeout(() => {
  //                 showMessage(text, 4000, 9);
  //             }, 6000);
  //         });
  // }
  // 没有bug展示特定状态下的文字


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
}

function initWidget(config, apiPath) {
  if (typeof config === "string") config = {
    waifuPath: config,
    apiPath: apiPath
  };
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
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2xpdmUyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQSxTQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEI7QUFBQSxNQUNkLFNBRGMsR0FDa0IsTUFEbEIsQ0FDZCxTQURjO0FBQUEsTUFDSCxPQURHLEdBQ2tCLE1BRGxCLENBQ0gsT0FERztBQUFBLE1BQ00sT0FETixHQUNrQixNQURsQixDQUNNLE9BRE47QUFFcEIsTUFBSSxNQUFNLEdBQUcsS0FBYjtBQUFBLE1BQW9CLFNBQXBCOztBQUNBLE1BQUksT0FBTyxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQzdCLElBQUEsTUFBTSxHQUFHLElBQVQ7QUFDQSxRQUFJLENBQUMsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsR0FBakIsQ0FBTCxFQUE0QixPQUFPLElBQUksR0FBWDtBQUMvQixHQUhELE1BR08sSUFBSSxPQUFPLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDcEMsUUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFSLENBQWlCLEdBQWpCLENBQUwsRUFBNEIsT0FBTyxJQUFJLEdBQVg7QUFDL0IsR0FGTSxNQUVBO0FBQ0gsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLDhCQUFkO0FBQ0E7QUFDSDs7QUFDRCxFQUFBLFlBQVksQ0FBQyxVQUFiLENBQXdCLGVBQXhCO0FBQ0EsRUFBQSxjQUFjLENBQUMsVUFBZixDQUEwQixZQUExQjtBQUNBLEVBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxrQkFBZCxDQUFpQyxXQUFqQywyWkFkb0IsQ0F1QnBCOztBQUNBLEVBQUEsVUFBVSxDQUFDLFlBQU07QUFDYixJQUFBLFFBQVEsQ0FBQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDLEtBQWpDLENBQXVDLE1BQXZDLEdBQWdELENBQWhEO0FBQ0gs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Q3pHLElBQUEsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsWUFBcEIsRUFBa0MsSUFBbEM7QUFDQSxJQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2IsTUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixHQUFqQixDQUFxQixxQkFBckI7QUFDSCxLQUZTLEVBRVAsQ0FGTyxDQUFWO0FBR0gsR0FMRCxNQUtPO0FBQ0gsSUFBQSxVQUFVLENBQUMsTUFBRCxDQUFWO0FBQ0g7QUFDUiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIGxvYWRXaWRnZXQoY29uZmlnKSB7XG4gICAgICAgIGxldCB7IHdhaWZ1UGF0aCwgYXBpUGF0aCwgY2RuUGF0aCB9ID0gY29uZmlnO1xuICAgICAgICBsZXQgdXNlQ0ROID0gZmFsc2UsIG1vZGVsTGlzdDtcbiAgICAgICAgaWYgKHR5cGVvZiBjZG5QYXRoID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB1c2VDRE4gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFjZG5QYXRoLmVuZHNXaXRoKFwiL1wiKSkgY2RuUGF0aCArPSBcIi9cIjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXBpUGF0aCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKCFhcGlQYXRoLmVuZHNXaXRoKFwiL1wiKSkgYXBpUGF0aCArPSBcIi9cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGluaXRXaWRnZXQgYXJndW1lbnQhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwid2FpZnUtZGlzcGxheVwiKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcIndhaWZ1LXRleHRcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGA8ZGl2IGlkPVwid2FpZnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2FpZnUtdGlwc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJsaXZlMmRcIj48L2NhbnZhcz5cbiAgICAgICAgICAgICAgICA8IS0tIDxkaXYgaWQ9XCJ3YWlmdS10b29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbGcgZmEtY29tbWVudFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1sZyBmYS1pbmZvLWNpcmNsZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1sZyBmYS10aW1lc1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICA8L2Rpdj5gKTtcbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQxNDg0MDMvdHJpZ2dlci1jc3MtdHJhbnNpdGlvbi1vbi1hcHBlbmRlZC1lbGVtZW50XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdVwiKS5zdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICB9LCAwKTtcbiAgICBcbiAgICAgICAgZnVuY3Rpb24gcmFuZG9tU2VsZWN0aW9uKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKSA/IG9ialtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvYmoubGVuZ3RoKV0gOiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5qOA5rWL55So5oi35rS75Yqo54q25oCB77yM5bm25Zyo56m66Zey5pe25pi+56S65raI5oGvXG4gICAgICAgIGxldCB1c2VyQWN0aW9uID0gZmFsc2UsXG4gICAgICAgICAgICB1c2VyQWN0aW9uVGltZXIsXG4gICAgICAgICAgICBtZXNzYWdlVGltZXIsXG4gICAgICAgICAgICBtZXNzYWdlQXJyYXkgPSBbXCLlpb3kuYXkuI3op4HvvIzml6XlrZDov4flvpflpb3lv6vlkaLigKbigKZcIiwgXCLll6jvvZ7mrKLov47orr/pl67or6Xnq5nngrnvvIFcIiwgXCLorrDlvpfmiorlsI/lrrbliqDlhaUgQWRibG9jayDnmb3lkI3ljZXlk6bvvIFcIl07XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsICgpID0+IHVzZXJBY3Rpb24gPSB0cnVlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsICgpID0+IHVzZXJBY3Rpb24gPSB0cnVlKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXJBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB1c2VyQWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh1c2VyQWN0aW9uVGltZXIpO1xuICAgICAgICAgICAgICAgIHVzZXJBY3Rpb25UaW1lciA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF1c2VyQWN0aW9uVGltZXIpIHtcbiAgICAgICAgICAgICAgICB1c2VyQWN0aW9uVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHJhbmRvbVNlbGVjdGlvbihtZXNzYWdlQXJyYXkpLCA2MDAwLCA5KTtcbiAgICAgICAgICAgICAgICB9LCAyMDAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIFxuICAgICAgICBcbiAgICAgICAgKGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IOesrOS4gOS4qmljb27vvIzor7Tor51cbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FpZnUtdG9vbCAuZmEtY29tbWVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0hpdG9rb3RvKTtcbiAgICAgICAgICAgIC8vIFRPRE86IOesrOS6jOS4qmljb27vvIzosozkvLzmmK/ku4DkuYjmuLjmiI9cbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FpZnUtdG9vbCAuZmEtcGFwZXItcGxhbmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBpZiAod2luZG93LkFzdGVyb2lkcykge1xuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoIXdpbmRvdy5BU1RFUk9JRFNQTEFZRVJTKSB3aW5kb3cuQVNURVJPSURTUExBWUVSUyA9IFtdO1xuICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3cuQVNURVJPSURTUExBWUVSUy5wdXNoKG5ldyBBc3Rlcm9pZHMoKSk7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3N0ZXZlbmpvZXpoYW5nL2FzdGVyb2lkcy9hc3Rlcm9pZHMuanNcIjtcbiAgICAgICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8gVE9ETzog56ys5LiJ5LiqaWNvbu+8jOaNouS6uueJqVxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YWlmdS10b29sIC5mYS11c2VyLWNpcmNsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZE90aGVyTW9kZWwpO1xuICAgICAgICAgICAgLy8gVE9ETzog56ys5Zub5LiqaWNvbu+8jOW6lOivpeaYr+aNouijhVxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YWlmdS10b29sIC5mYS1zdHJlZXQtdmlld1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZFJhbmRNb2RlbCk7XG4gICAgICAgICAgICAvLyBUT0RPOiDnrKzkupTkuKppY29u77yM5ouN54WnXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dhaWZ1LXRvb2wgLmZhLWNhbWVyYS1yZXRyb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHNob3dNZXNzYWdlKFwi54Wn5aW95LqG5Zib77yM5piv5LiN5piv5b6I5Y+v54ix5ZGi77yfXCIsIDYwMDAsIDkpO1xuICAgICAgICAgICAgLy8gICAgIExpdmUyRC5jYXB0dXJlTmFtZSA9IFwicGhvdG8ucG5nXCI7XG4gICAgICAgICAgICAvLyAgICAgTGl2ZTJELmNhcHR1cmVGcmFtZSA9IHRydWU7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vIFRPRE86IOesrOWFreS4qmljb27vvIzljp/pobnnm67lnLDlnYBcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2FpZnUtdG9vbCAuZmEtaW5mby1jaXJjbGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBvcGVuKFwiaHR0cHM6Ly93d3cud3p0bGluazEwMTMuY29tL1wiKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8gLy8gVE9ETzog56ys5LiD5LiqaWNvbu+8jOmakOiXj+eci+adv+WomFxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3YWlmdS10b29sIC5mYS10aW1lc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2FpZnUtZGlzcGxheVwiLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIC8vICAgICBzaG93TWVzc2FnZShcIuaEv+S9oOacieS4gOWkqeiDveS4jumHjeimgeeahOS6uumHjemAouOAglwiLCAyMDAwLCAxMSk7XG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdVwiKS5zdHlsZS5ib3R0b20gPSBcIi01MDBweFwiO1xuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaWZ1XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdS10b2dnbGVcIikuY2xhc3NMaXN0LmFkZChcIndhaWZ1LXRvZ2dsZS1hY3RpdmVcIik7XG4gICAgICAgICAgICAvLyAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoXCLkvaDpg73lpI3liLbkuobkupvku4DkuYjlkYDvvIzovazovb3opoHorrDlvpfliqDkuIrlh7rlpITlk6bvvIFcIiwgNjAwMCwgOSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4pIHNob3dNZXNzYWdlKFwi5ZOH77yM5L2g57uI5LqO5Zue5p2l5LqG772eXCIsIDYwMDAsIDkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG4gICAgXG4gICAgICAgIC8vIOmmlumhteWxleekuueJueWumuaWh+Wtl1xuICAgICAgICAoZnVuY3Rpb24gd2VsY29tZU1lc3NhZ2UoKSB7XG4gICAgICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHsgLy8g5aaC5p6c5piv5Li76aG1XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgIGlmIChub3cgPiA1ICYmIG5vdyA8PSA3KSB0ZXh0ID0gXCLml6nkuIrlpb3vvIHkuIDml6XkuYvorqHlnKjkuo7mmajvvIznvo7lpb3nmoTkuIDlpKnlsLHopoHlvIDlp4vkuobjgIJcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPiA3ICYmIG5vdyA8PSAxMSkgdGV4dCA9IFwi5LiK5Y2I5aW977yB5bel5L2c6aG65Yip5Zib77yM5LiN6KaB5LmF5Z2Q77yM5aSa6LW35p2l6LWw5Yqo6LWw5Yqo5ZOm77yBXCI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID4gMTEgJiYgbm93IDw9IDEzKSB0ZXh0ID0gXCLkuK3ljYjkuobvvIzlt6XkvZzkuobkuIDkuKrkuIrljYjvvIznjrDlnKjmmK/ljYjppJDml7bpl7TvvIFcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPiAxMyAmJiBub3cgPD0gMTcpIHRleHQgPSBcIuWNiOWQjuW+iOWuueaYk+eKr+WbsOWRou+8jOS7iuWkqeeahOi/kOWKqOebruagh+WujOaIkOS6huWQl++8n1wiO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+IDE3ICYmIG5vdyA8PSAxOSkgdGV4dCA9IFwi5YKN5pma5LqG77yB56qX5aSW5aSV6Ziz55qE5pmv6Imy5b6I576O5Li95ZGi77yM5pyA576O5LiN6L+H5aSV6Ziz57qi772eXCI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID4gMTkgJiYgbm93IDw9IDIxKSB0ZXh0ID0gXCLmmZrkuIrlpb3vvIzku4rlpKnov4flvpfmgI7kuYjmoLfvvJ9cIjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPiAyMSAmJiBub3cgPD0gMjMpIHRleHQgPSBbXCLlt7Lnu4/ov5nkuYjmmZrkuoblkYDvvIzml6nngrnkvJHmga/lkKfvvIzmmZrlronvvZ5cIiwgXCLmt7HlpJzml7bopoHniLHmiqTnnLznnZvlkYDvvIFcIl07XG4gICAgICAgICAgICAgICAgZWxzZSB0ZXh0ID0gXCLkvaDmmK/lpJznjKvlrZDlkYDvvJ/ov5nkuYjmmZrov5jkuI3nnaHop4nvvIzmmI7lpKnotbfnmoTmnaXlmJvvvJ9cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucmVmZXJyZXIgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZlcnJlciA9IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLFxuICAgICAgICAgICAgICAgICAgICBkb21haW4gPSByZWZlcnJlci5ob3N0bmFtZS5zcGxpdChcIi5cIilbMV07XG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLmhvc3RuYW1lID09PSByZWZlcnJlci5ob3N0bmFtZSkgdGV4dCA9IGDmrKLov47pmIXor7s8c3Bhbj7jgIwke2RvY3VtZW50LnRpdGxlLnNwbGl0KFwiIC0gXCIpWzBdfeOAjTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvbWFpbiA9PT0gXCJiYWlkdVwiKSB0ZXh0ID0gYEhlbGxv77yB5p2l6IeqIOeZvuW6puaQnOe0oiDnmoTmnIvlj4s8YnI+5L2g5piv5pCc57SiIDxzcGFuPiR7cmVmZXJyZXIuc2VhcmNoLnNwbGl0KFwiJndkPVwiKVsxXS5zcGxpdChcIiZcIilbMF19PC9zcGFuPiDmib7liLDnmoTmiJHlkJfvvJ9gO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvbWFpbiA9PT0gXCJzb1wiKSB0ZXh0ID0gYEhlbGxv77yB5p2l6IeqIDM2MOaQnOe0oiDnmoTmnIvlj4s8YnI+5L2g5piv5pCc57SiIDxzcGFuPiR7cmVmZXJyZXIuc2VhcmNoLnNwbGl0KFwiJnE9XCIpWzFdLnNwbGl0KFwiJlwiKVswXX08L3NwYW4+IOaJvuWIsOeahOaIkeWQl++8n2A7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9tYWluID09PSBcImdvb2dsZVwiKSB0ZXh0ID0gYEhlbGxv77yB5p2l6IeqIOiwt+atjOaQnOe0oiDnmoTmnIvlj4s8YnI+5qyi6L+O6ZiF6K+7PHNwYW4+44CMJHtkb2N1bWVudC50aXRsZS5zcGxpdChcIiAtIFwiKVswXX3jgI08L3NwYW4+YDtcbiAgICAgICAgICAgICAgICBlbHNlIHRleHQgPSBgSGVsbG/vvIHmnaXoh6ogPHNwYW4+JHtyZWZlcnJlci5ob3N0bmFtZX08L3NwYW4+IOeahOaci+WPi2A7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRleHQgPSBg5qyi6L+O6ZiF6K+7PHNwYW4+44CMJHtkb2N1bWVudC50aXRsZS5zcGxpdChcIiAtIFwiKVswXX3jgI08L3NwYW4+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNob3dNZXNzYWdlKHRleHQsIDcwMDAsIDgpO1xuICAgICAgICB9KSgpO1xuICAgICAgICAvLyBUT0RPOiDmnI3liqHkuo7nrKzkuIDkuKppY29uXG4gICAgICAgIC8vIGZ1bmN0aW9uIHNob3dIaXRva290bygpIHtcbiAgICAgICAgLy8gICAgIC8vIOWinuWKoCBoaXRva290by5jbiDnmoQgQVBJXG4gICAgICAgIC8vICAgICBmZXRjaChcImh0dHBzOi8vdjEuaGl0b2tvdG8uY25cIilcbiAgICAgICAgLy8gICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC8vICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgdGV4dCA9IGDov5nlj6XkuIDoqIDmnaXoh6ogPHNwYW4+44CMJHtyZXN1bHQuZnJvbX3jgI08L3NwYW4+77yM5pivIDxzcGFuPiR7cmVzdWx0LmNyZWF0b3J9PC9zcGFuPiDlnKggaGl0b2tvdG8uY24g5oqV56i/55qE44CCYDtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2hvd01lc3NhZ2UocmVzdWx0LmhpdG9rb3RvLCA2MDAwLCA5KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSh0ZXh0LCA0MDAwLCA5KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSwgNjAwMCk7XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8g5rKh5pyJYnVn5bGV56S654m55a6a54q25oCB5LiL55qE5paH5a2XXG4gICAgICAgIGZ1bmN0aW9uIHNob3dNZXNzYWdlKHRleHQsIHRpbWVvdXQsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICBpZiAoIXRleHQgfHwgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ3YWlmdS10ZXh0XCIpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ3YWlmdS10ZXh0XCIpID4gcHJpb3JpdHkpKSByZXR1cm47XG4gICAgICAgICAgICBpZiAobWVzc2FnZVRpbWVyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG1lc3NhZ2VUaW1lcik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZVRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHQgPSByYW5kb21TZWxlY3Rpb24odGV4dCk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwid2FpZnUtdGV4dFwiLCBwcmlvcml0eSk7XG4gICAgICAgICAgICBjb25zdCB0aXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWlmdS10aXBzXCIpO1xuICAgICAgICAgICAgdGlwcy5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICAgICAgdGlwcy5jbGFzc0xpc3QuYWRkKFwid2FpZnUtdGlwcy1hY3RpdmVcIik7XG4gICAgICAgICAgICBtZXNzYWdlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwid2FpZnUtdGV4dFwiKTtcbiAgICAgICAgICAgICAgICB0aXBzLmNsYXNzTGlzdC5yZW1vdmUoXCJ3YWlmdS10aXBzLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgXG59XG5mdW5jdGlvbiBpbml0V2lkZ2V0KGNvbmZpZywgYXBpUGF0aCkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikgY29uZmlnID0geyB3YWlmdVBhdGg6IGNvbmZpZywgYXBpUGF0aCB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgPGRpdiBpZD1cIndhaWZ1LXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPumbt+Wnhjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PmApO1xuICAgICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaWZ1LXRvZ2dsZVwiKTtcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcIndhaWZ1LXRvZ2dsZS1hY3RpdmVcIik7XG4gICAgICAgICAgICBpZiAodG9nZ2xlLmdldEF0dHJpYnV0ZShcImZpcnN0LXRpbWVcIikpIHtcbiAgICAgICAgICAgICAgICBsb2FkV2lkZ2V0KGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZShcImZpcnN0LXRpbWVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwid2FpZnUtZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaWZ1XCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhaWZ1XCIpLnN0eWxlLmJvdHRvbSA9IDA7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3YWlmdS1kaXNwbGF5XCIpICYmIERhdGUubm93KCkgLSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndhaWZ1LWRpc3BsYXlcIikgPD0gODY0MDAwMDApIHtcbiAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJmaXJzdC10aW1lXCIsIHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJ3YWlmdS10b2dnbGUtYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2FkV2lkZ2V0KGNvbmZpZyk7XG4gICAgICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBpbml0V2lkZ2V0LCAvL+WvvOWHuuWvueixoVxufVxuIl19
