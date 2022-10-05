(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  init: function init() {
    this.search();
  },
  search: function search() {
    var inputArea = document.querySelector("#local-search-input");

    if (inputArea) {
      inputArea.onclick = function () {
        inputArea.disabled = true; // inputArea.placeholder = "初始化搜索ing···";

        getSearchFile();
        this.onclick = null;
      };

      inputArea.onkeydown = function () {
        if (event.keyCode == 13) return false;
      };
    }

    function clearSearch($resultContent) {
      // clear search result
      var btnClose = document.querySelector("#local-search-close");

      btnClose.onclick = function () {
        inputArea.value = "";
        $resultContent.innerHTML = "";
        inputArea.placeholder = "请输入关键词";
        inputArea.focus();
      };
    }

    var searchFunc = function searchFunc(path, search_id, content_id) {
      "use strict";

      var BTN = "<div id='local-search-close'>清空搜索</div>";
      var $input = document.getElementById(search_id);
      var $resultContent = document.getElementById(content_id);
      var xhr = new XMLHttpRequest();
      xhr.open("GET", path, true);
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // resume input
          $input.disabled = false; //   $input.placeholder = "输入关键词以搜索";

          $input.focus();
          var xml = xhr.responseXML;
          var root = xml.documentElement;
          var list = root.getElementsByTagName("entry");
          var datas = [];

          for (var i = list.length - 1; i >= 0; i--) {
            var item = list[i];
            datas.push({
              title: item.getElementsByTagName("title")[0].innerHTML,
              content: item.getElementsByTagName("content")[0].innerHTML,
              url: item.getElementsByTagName("url")[0].innerHTML
            });
          }

          $input.addEventListener("input", function () {
            var str = '<ul class="archive">';
            var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
            $resultContent.innerHTML = "";

            if (this.value.trim().length <= 0) {
              return;
            } // 本地搜索主代码


            datas.forEach(function (data) {
              var isMatch = true;
              var content_index = [];

              if (!data.title || data.title.trim() === "") {
                data.title = "Untitled";
              }

              var orig_data_title = data.title.trim();
              var data_title = orig_data_title.toLowerCase();
              var orig_data_content = data.content.trim().replace(/<[^>]+>/g, "");
              var data_content = orig_data_content.toLowerCase();
              var data_url = data.url;
              var index_title = -1;
              var index_content = -1;
              var first_occur = -1; // only match artiles with not empty contents

              if (data_content !== "") {
                keywords.forEach(function (keyword, i) {
                  index_title = data_title.indexOf(keyword);
                  index_content = data_content.indexOf(keyword);

                  if (index_title < 0 && index_content < 0) {
                    isMatch = false;
                  } else {
                    if (index_content < 0) {
                      index_content = 0;
                    }

                    if (i == 0) {
                      first_occur = index_content;
                    } // content_index.push({index_content:index_content, keyword_len:keyword_len});

                  }
                });
              } else {
                isMatch = false;
              } // 展示结果


              if (isMatch) {
                str += "<li><a target='_blank' href=" + data_url + " >" + "<span class='archive-title' >" + orig_data_title + "</span>";
                var content = orig_data_content;

                if (first_occur >= 0) {
                  // cut out 100 characters
                  var start = first_occur - 10;
                  var end = first_occur + 30;

                  if (start < 0) {
                    start = 0;
                  }

                  if (start == 0) {
                    end = 40;
                  }

                  if (end > content.length) {
                    end = content.length;
                  } // console.log(content)


                  var match_content = content.substr(start, 200); // highlight all keywords

                  keywords.forEach(function (keyword) {
                    var regS = new RegExp(keyword, "gi");
                    match_content = match_content.replace(regS, '<em class="search-keyword">' + keyword + "</em>");
                  });
                  str += '<p class="search-result">' + match_content + "...</p>";
                }

                str += "</a></li>";
              }
            });
            str += "</ul>";

            if (str.indexOf("<li>") === -1) {
              $resultContent.innerHTML = BTN + "<div class='local-search-empty'>没有找到你所要搜索的内容……</div>";
            } else {
              $resultContent.innerHTML = BTN + str;
            }

            clearSearch($resultContent);
          });
        }
      };
    };

    var getSearchFile = function getSearchFile() {
      var path = "/search.xml";
      searchFunc(path, "local-search-input", "local-search-result");
    }; // 全局按钮设置js是否展示搜索框


    var global_button_search_box = document.querySelector("#search_btn");
    var global_button_search_box_pc = document.querySelector("#search_btn_pc");
    global_button_search_box.addEventListener("click", function () {
      if (document.querySelector(".search_box").style.display === "block") {
        document.querySelector(".search_box").style.display = "none";
      } else {
        document.querySelector(".search_box").style.display = "block"; // document.querySelector('#local-search-input').focus();
      }
    });
    global_button_search_box_pc.addEventListener("click", function () {
      if (document.querySelector(".search_box").style.display === "block") {
        document.querySelector(".search_box").style.display = "none";
      } else {
        document.querySelector(".search_box").style.display = "block"; // document.querySelector('#local-search-input').focus();
      }
    });
    var search_close = document.querySelector(".search_close");
    search_close.addEventListener("click", function () {
      if (document.querySelector(".search_box").style.display === "block") {
        document.querySelector(".search_box").style.display = "none";
      } else {
        document.querySelector(".search_box").style.display = "block";
      }
    });
  }
};
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L3NlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQ0FlO0VBQ2IsSUFBSSxFQUFFLGdCQUFZO0lBQ2hCLEtBQUssTUFBTDtFQUNELENBSFk7RUFJYixNQUFNLEVBQUUsa0JBQVk7SUFDbEIsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIscUJBQXZCLENBQWhCOztJQUVBLElBQUksU0FBSixFQUFlO01BQ2IsU0FBUyxDQUFDLE9BQVYsR0FBb0IsWUFBWTtRQUM5QixTQUFTLENBQUMsUUFBVixHQUFxQixJQUFyQixDQUQ4QixDQUU5Qjs7UUFDQSxhQUFhO1FBQ2IsS0FBSyxPQUFMLEdBQWUsSUFBZjtNQUNELENBTEQ7O01BT0EsU0FBUyxDQUFDLFNBQVYsR0FBc0IsWUFBWTtRQUNoQyxJQUFJLEtBQUssQ0FBQyxPQUFOLElBQWlCLEVBQXJCLEVBQXlCLE9BQU8sS0FBUDtNQUMxQixDQUZEO0lBR0Q7O0lBRUQsU0FBUyxXQUFULENBQXFCLGNBQXJCLEVBQXFDO01BQ25DO01BQ0EsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIscUJBQXZCLENBQWY7O01BQ0EsUUFBUSxDQUFDLE9BQVQsR0FBbUIsWUFBWTtRQUM3QixTQUFTLENBQUMsS0FBVixHQUFrQixFQUFsQjtRQUNBLGNBQWMsQ0FBQyxTQUFmLEdBQTJCLEVBQTNCO1FBQ0EsU0FBUyxDQUFDLFdBQVYsR0FBd0IsUUFBeEI7UUFDQSxTQUFTLENBQUMsS0FBVjtNQUNELENBTEQ7SUFNRDs7SUFFRCxJQUFJLFVBQVUsR0FBRyxTQUFiLFVBQWEsQ0FBVSxJQUFWLEVBQWdCLFNBQWhCLEVBQTJCLFVBQTNCLEVBQXVDO01BQ3REOztNQUNBLElBQUksR0FBRyxHQUFHLHlDQUFWO01BQ0EsSUFB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WSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZWFyY2goKTtcbiAgfSxcbiAgc2VhcmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWlucHV0XCIpO1xuXG4gICAgaWYgKGlucHV0QXJlYSkge1xuICAgICAgaW5wdXRBcmVhLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlucHV0QXJlYS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9IFwi5Yid5aeL5YyW5pCc57SiaW5nwrfCt8K3XCI7XG4gICAgICAgIGdldFNlYXJjaEZpbGUoKTtcbiAgICAgICAgdGhpcy5vbmNsaWNrID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIGlucHV0QXJlYS5vbmtleWRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KSB7XG4gICAgICAvLyBjbGVhciBzZWFyY2ggcmVzdWx0XG4gICAgICB2YXIgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLXNlYXJjaC1jbG9zZVwiKTtcbiAgICAgIGJ0bkNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlucHV0QXJlYS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICRyZXN1bHRDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9IFwi6K+36L6T5YWl5YWz6ZSu6K+NXCI7XG4gICAgICAgIGlucHV0QXJlYS5mb2N1cygpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgc2VhcmNoRnVuYyA9IGZ1bmN0aW9uIChwYXRoLCBzZWFyY2hfaWQsIGNvbnRlbnRfaWQpIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgdmFyIEJUTiA9IFwiPGRpdiBpZD0nbG9jYWwtc2VhcmNoLWNsb3NlJz7muIXnqbrmkJzntKI8L2Rpdj5cIjtcbiAgICAgIHZhciAkaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWFyY2hfaWQpO1xuICAgICAgdmFyICRyZXN1bHRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudF9pZCk7XG5cbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHBhdGgsIHRydWUpO1xuICAgICAgeGhyLnNlbmQoKTtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAvLyByZXN1bWUgaW5wdXRcbiAgICAgICAgICAkaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAvLyAgICRpbnB1dC5wbGFjZWhvbGRlciA9IFwi6L6T5YWl5YWz6ZSu6K+N5Lul5pCc57SiXCI7XG4gICAgICAgICAgJGlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgICB2YXIgeG1sID0geGhyLnJlc3BvbnNlWE1MO1xuICAgICAgICAgIHZhciByb290ID0geG1sLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICB2YXIgbGlzdCA9IHJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJlbnRyeVwiKTtcbiAgICAgICAgICB2YXIgZGF0YXMgPSBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGl0bGVcIilbMF0uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY29udGVudFwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICAgIHVybDogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVybFwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RyID0gJzx1bCBjbGFzcz1cImFyY2hpdmVcIj4nO1xuICAgICAgICAgICAgdmFyIGtleXdvcmRzID0gdGhpcy52YWx1ZVxuICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgIC5zcGxpdCgvW1xcc1xcLV0rLyk7XG4gICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUudHJpbSgpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5pys5Zyw5pCc57Si5Li75Luj56CBXG4gICAgICAgICAgICBkYXRhcy5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgIHZhciBpc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdmFyIGNvbnRlbnRfaW5kZXggPSBbXTtcbiAgICAgICAgICAgICAgaWYgKCFkYXRhLnRpdGxlIHx8IGRhdGEudGl0bGUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZGF0YS50aXRsZSA9IFwiVW50aXRsZWRcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgb3JpZ19kYXRhX3RpdGxlID0gZGF0YS50aXRsZS50cmltKCk7XG4gICAgICAgICAgICAgIHZhciBkYXRhX3RpdGxlID0gb3JpZ19kYXRhX3RpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfY29udGVudCA9IGRhdGEuY29udGVudFxuICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPFtePl0rPi9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgdmFyIGRhdGFfY29udGVudCA9IG9yaWdfZGF0YV9jb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgIHZhciBkYXRhX3VybCA9IGRhdGEudXJsO1xuICAgICAgICAgICAgICB2YXIgaW5kZXhfdGl0bGUgPSAtMTtcbiAgICAgICAgICAgICAgdmFyIGluZGV4X2NvbnRlbnQgPSAtMTtcbiAgICAgICAgICAgICAgdmFyIGZpcnN0X29jY3VyID0gLTE7XG4gICAgICAgICAgICAgIC8vIG9ubHkgbWF0Y2ggYXJ0aWxlcyB3aXRoIG5vdCBlbXB0eSBjb250ZW50c1xuICAgICAgICAgICAgICBpZiAoZGF0YV9jb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAga2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5d29yZCwgaSkge1xuICAgICAgICAgICAgICAgICAgaW5kZXhfdGl0bGUgPSBkYXRhX3RpdGxlLmluZGV4T2Yoa2V5d29yZCk7XG4gICAgICAgICAgICAgICAgICBpbmRleF9jb250ZW50ID0gZGF0YV9jb250ZW50LmluZGV4T2Yoa2V5d29yZCk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChpbmRleF90aXRsZSA8IDAgJiYgaW5kZXhfY29udGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X2NvbnRlbnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXhfY29udGVudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X29jY3VyID0gaW5kZXhfY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50X2luZGV4LnB1c2goe2luZGV4X2NvbnRlbnQ6aW5kZXhfY29udGVudCwga2V5d29yZF9sZW46a2V5d29yZF9sZW59KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8g5bGV56S657uT5p6cXG4gICAgICAgICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgc3RyICs9XG4gICAgICAgICAgICAgICAgICBcIjxsaT48YSB0YXJnZXQ9J19ibGFuaycgaHJlZj1cIiArXG4gICAgICAgICAgICAgICAgICBkYXRhX3VybCArXG4gICAgICAgICAgICAgICAgICBcIiA+XCIgK1xuICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nYXJjaGl2ZS10aXRsZScgPlwiICtcbiAgICAgICAgICAgICAgICAgIG9yaWdfZGF0YV90aXRsZSArXG4gICAgICAgICAgICAgICAgICBcIjwvc3Bhbj5cIjtcblxuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0X29jY3VyID49IDApIHtcbiAgICAgICAgICAgICAgICAgIC8vIGN1dCBvdXQgMTAwIGNoYXJhY3RlcnNcbiAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGZpcnN0X29jY3VyIC0gMTA7XG4gICAgICAgICAgICAgICAgICB2YXIgZW5kID0gZmlyc3Rfb2NjdXIgKyAzMDtcblxuICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IDQwO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoZW5kID4gY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gY29udGVudC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hfY29udGVudCA9IGNvbnRlbnQuc3Vic3RyKHN0YXJ0LCAyMDApO1xuXG4gICAgICAgICAgICAgICAgICAvLyBoaWdobGlnaHQgYWxsIGtleXdvcmRzXG4gICAgICAgICAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXl3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWdTID0gbmV3IFJlZ0V4cChrZXl3b3JkLCBcImdpXCIpO1xuICAgICAgICAgICAgICAgICAgICBtYXRjaF9jb250ZW50ID0gbWF0Y2hfY29udGVudC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgIHJlZ1MsXG4gICAgICAgICAgICAgICAgICAgICAgJzxlbSBjbGFzcz1cInNlYXJjaC1rZXl3b3JkXCI+JyArIGtleXdvcmQgKyBcIjwvZW0+XCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBzdHIgKz1cbiAgICAgICAgICAgICAgICAgICAgJzxwIGNsYXNzPVwic2VhcmNoLXJlc3VsdFwiPicgKyBtYXRjaF9jb250ZW50ICsgXCIuLi48L3A+XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0ciArPSBcIjwvYT48L2xpPlwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0ciArPSBcIjwvdWw+XCI7XG4gICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoXCI8bGk+XCIpID09PSAtMSkge1xuICAgICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIEJUTiArXG4gICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdsb2NhbC1zZWFyY2gtZW1wdHknPuayoeacieaJvuWIsOS9oOaJgOimgeaQnOe0oueahOWGheWuueKApuKApjwvZGl2PlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gQlROICsgc3RyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGVhclNlYXJjaCgkcmVzdWx0Q29udGVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBnZXRTZWFyY2hGaWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhdGggPSBcIi9zZWFyY2gueG1sXCI7XG4gICAgICBzZWFyY2hGdW5jKHBhdGgsIFwibG9jYWwtc2VhcmNoLWlucHV0XCIsIFwibG9jYWwtc2VhcmNoLXJlc3VsdFwiKTtcbiAgICB9O1xuXG4gICAgLy8g5YWo5bGA5oyJ6ZKu6K6+572uanPmmK/lkKblsZXnpLrmkJzntKLmoYZcbiAgICB2YXIgZ2xvYmFsX2J1dHRvbl9zZWFyY2hfYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hfYnRuXCIpO1xuICAgIHZhciBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3hfcGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaF9idG5fcGNcIik7XG4gICAgZ2xvYmFsX2J1dHRvbl9zZWFyY2hfYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhbC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveF9wYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWwtc2VhcmNoLWlucHV0JykuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgc2VhcmNoX2Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfY2xvc2VcIik7XG4gICAgc2VhcmNoX2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59O1xuIl19
