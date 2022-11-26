(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Search = /*#__PURE__*/function () {
  function Search() {
    _classCallCheck(this, Search);
  }

  _createClass(Search, [{
    key: "init",
    value: function init() {
      search();
    }
  }]);

  return Search;
}();

exports["default"] = Search;

var search = function search() {
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

  if (document.querySelector("#search_btn_pc")) {
    var global_button_search_box_pc = document.querySelector("#search_btn_pc");
    global_button_search_box_pc.addEventListener("click", function () {
      if (document.querySelector(".search_box").style.display === "block") {
        document.querySelector(".search_box").style.display = "none";
      } else {
        document.querySelector(".search_box").style.display = "block"; // document.querySelector('#local-search-input').focus();
      }
    });
  }

  global_button_search_box.addEventListener("click", function () {
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
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L1NlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7SUNBcUIsTTtFQUNuQixrQkFBYztJQUFBO0VBQUU7Ozs7V0FDaEIsZ0JBQU87TUFDTCxNQUFNO0lBQ1A7Ozs7Ozs7O0FBRUgsSUFBTSxNQUFNLEdBQUcsU0FBVCxNQUFTLEdBQU07RUFDbkIsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIscUJBQXZCLENBQWhCOztFQUVBLElBQUksU0FBSixFQUFlO0lBQ2IsU0FBUyxDQUFDLE9BQVYsR0FBb0IsWUFBWTtNQUM5QixTQUFTLENBQUMsUUFBVixHQUFxQixJQUFyQixDQUQ4QixDQUU5Qjs7TUFDQSxhQUFhO01BQ2IsS0FBSyxPQUFMLEdBQWUsSUFBZjtJQUNELENBTEQ7O0lBT0EsU0FBUyxDQUFDLFNBQVYsR0FBc0IsWUFBWTtNQUNoQyxJQUFJLEtBQUssQ0FBQyxPQUFOLElBQWlCLEVBQXJCLEVBQXlCLE9BQU8sS0FBUDtJQUMxQixDQUZEO0VBR0Q7O0VBRUQsU0FBUyxXQUFULENBQXFCLGNBQXJCLEVBQXFDO0lBQ25DO0lBQ0EsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIscUJBQXZCLENBQWY7O0lBQ0EsUUFBUSxDQUFDLE9BQVQsR0FBbUIsWUFBWTtNQUM3QixTQUFTLENBQUMsS0FBVixHQUFrQixFQUFsQjtNQUNBLGNBQWMsQ0FBQyxTQUFmLEdBQTJCLEVBQTNCO01BQ0EsU0FBUyxDQUFDLFdBQVYsR0FBd0IsUUFBeEI7TUFDQSxTQUFTLENBQUMsS0FBVjtJQUNELENBTEQ7RUFNRDs7RUFFRCxJQUFJLFVBQVUsR0FBRyxTQUFiLFVBQWEsQ0FBVSxJQUFWLEVBQWdCLFNBQWhCLEVBQTJCLFVBQTNCLEVBQXVDO0lBQ3RE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QVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLEtBQXRDLENBQTRDLE9BQTVDLEdBQXNELE9BQXREO0lBQ0Q7RUFDRixDQU5EO0FBT0QsQ0F0TUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2gge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGluaXQoKSB7XG4gICAgc2VhcmNoKCk7XG4gIH1cbn1cbmNvbnN0IHNlYXJjaCA9ICgpID0+IHtcbiAgdmFyIGlucHV0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWlucHV0XCIpO1xuXG4gIGlmIChpbnB1dEFyZWEpIHtcbiAgICBpbnB1dEFyZWEub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlucHV0QXJlYS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAvLyBpbnB1dEFyZWEucGxhY2Vob2xkZXIgPSBcIuWIneWni+WMluaQnOe0omluZ8K3wrfCt1wiO1xuICAgICAgZ2V0U2VhcmNoRmlsZSgpO1xuICAgICAgdGhpcy5vbmNsaWNrID0gbnVsbDtcbiAgICB9O1xuXG4gICAgaW5wdXRBcmVhLm9ua2V5ZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzKSByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyU2VhcmNoKCRyZXN1bHRDb250ZW50KSB7XG4gICAgLy8gY2xlYXIgc2VhcmNoIHJlc3VsdFxuICAgIHZhciBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWwtc2VhcmNoLWNsb3NlXCIpO1xuICAgIGJ0bkNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpbnB1dEFyZWEudmFsdWUgPSBcIlwiO1xuICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGlucHV0QXJlYS5wbGFjZWhvbGRlciA9IFwi6K+36L6T5YWl5YWz6ZSu6K+NXCI7XG4gICAgICBpbnB1dEFyZWEuZm9jdXMoKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHNlYXJjaEZ1bmMgPSBmdW5jdGlvbiAocGF0aCwgc2VhcmNoX2lkLCBjb250ZW50X2lkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgdmFyIEJUTiA9IFwiPGRpdiBpZD0nbG9jYWwtc2VhcmNoLWNsb3NlJz7muIXnqbrmkJzntKI8L2Rpdj5cIjtcbiAgICB2YXIgJGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VhcmNoX2lkKTtcbiAgICB2YXIgJHJlc3VsdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50X2lkKTtcblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbihcIkdFVFwiLCBwYXRoLCB0cnVlKTtcbiAgICB4aHIuc2VuZCgpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIC8vIHJlc3VtZSBpbnB1dFxuICAgICAgICAkaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gICAkaW5wdXQucGxhY2Vob2xkZXIgPSBcIui+k+WFpeWFs+mUruivjeS7peaQnOe0olwiO1xuICAgICAgICAkaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICB2YXIgeG1sID0geGhyLnJlc3BvbnNlWE1MO1xuICAgICAgICB2YXIgcm9vdCA9IHhtbC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciBsaXN0ID0gcm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImVudHJ5XCIpO1xuICAgICAgICB2YXIgZGF0YXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRpdGxlXCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjb250ZW50XCIpWzBdLmlubmVySFRNTCxcbiAgICAgICAgICAgIHVybDogaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVybFwiKVswXS5pbm5lckhUTUwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHN0ciA9ICc8dWwgY2xhc3M9XCJhcmNoaXZlXCI+JztcbiAgICAgICAgICB2YXIga2V5d29yZHMgPSB0aGlzLnZhbHVlXG4gICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLnNwbGl0KC9bXFxzXFwtXSsvKTtcbiAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlLnRyaW0oKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOacrOWcsOaQnOe0ouS4u+S7o+eggVxuICAgICAgICAgIGRhdGFzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBpc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBjb250ZW50X2luZGV4ID0gW107XG4gICAgICAgICAgICBpZiAoIWRhdGEudGl0bGUgfHwgZGF0YS50aXRsZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgZGF0YS50aXRsZSA9IFwiVW50aXRsZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcmlnX2RhdGFfdGl0bGUgPSBkYXRhLnRpdGxlLnRyaW0oKTtcbiAgICAgICAgICAgIHZhciBkYXRhX3RpdGxlID0gb3JpZ19kYXRhX3RpdGxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB2YXIgb3JpZ19kYXRhX2NvbnRlbnQgPSBkYXRhLmNvbnRlbnQudHJpbSgpLnJlcGxhY2UoLzxbXj5dKz4vZywgXCJcIik7XG4gICAgICAgICAgICB2YXIgZGF0YV9jb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHZhciBkYXRhX3VybCA9IGRhdGEudXJsO1xuICAgICAgICAgICAgdmFyIGluZGV4X3RpdGxlID0gLTE7XG4gICAgICAgICAgICB2YXIgaW5kZXhfY29udGVudCA9IC0xO1xuICAgICAgICAgICAgdmFyIGZpcnN0X29jY3VyID0gLTE7XG4gICAgICAgICAgICAvLyBvbmx5IG1hdGNoIGFydGlsZXMgd2l0aCBub3QgZW1wdHkgY29udGVudHNcbiAgICAgICAgICAgIGlmIChkYXRhX2NvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAga2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5d29yZCwgaSkge1xuICAgICAgICAgICAgICAgIGluZGV4X3RpdGxlID0gZGF0YV90aXRsZS5pbmRleE9mKGtleXdvcmQpO1xuICAgICAgICAgICAgICAgIGluZGV4X2NvbnRlbnQgPSBkYXRhX2NvbnRlbnQuaW5kZXhPZihrZXl3b3JkKTtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleF90aXRsZSA8IDAgJiYgaW5kZXhfY29udGVudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKGluZGV4X2NvbnRlbnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4X2NvbnRlbnQgPSAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdF9vY2N1ciA9IGluZGV4X2NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBjb250ZW50X2luZGV4LnB1c2goe2luZGV4X2NvbnRlbnQ6aW5kZXhfY29udGVudCwga2V5d29yZF9sZW46a2V5d29yZF9sZW59KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5bGV56S657uT5p6cXG4gICAgICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgICAgICBzdHIgKz1cbiAgICAgICAgICAgICAgICBcIjxsaT48YSB0YXJnZXQ9J19ibGFuaycgaHJlZj1cIiArXG4gICAgICAgICAgICAgICAgZGF0YV91cmwgK1xuICAgICAgICAgICAgICAgIFwiID5cIiArXG4gICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nYXJjaGl2ZS10aXRsZScgPlwiICtcbiAgICAgICAgICAgICAgICBvcmlnX2RhdGFfdGl0bGUgK1xuICAgICAgICAgICAgICAgIFwiPC9zcGFuPlwiO1xuXG4gICAgICAgICAgICAgIHZhciBjb250ZW50ID0gb3JpZ19kYXRhX2NvbnRlbnQ7XG4gICAgICAgICAgICAgIGlmIChmaXJzdF9vY2N1ciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gY3V0IG91dCAxMDAgY2hhcmFjdGVyc1xuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGZpcnN0X29jY3VyIC0gMTA7XG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IGZpcnN0X29jY3VyICsgMzA7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID09IDApIHtcbiAgICAgICAgICAgICAgICAgIGVuZCA9IDQwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlbmQgPiBjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgZW5kID0gY29udGVudC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudClcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hfY29udGVudCA9IGNvbnRlbnQuc3Vic3RyKHN0YXJ0LCAyMDApO1xuXG4gICAgICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IGFsbCBrZXl3b3Jkc1xuICAgICAgICAgICAgICAgIGtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24gKGtleXdvcmQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciByZWdTID0gbmV3IFJlZ0V4cChrZXl3b3JkLCBcImdpXCIpO1xuICAgICAgICAgICAgICAgICAgbWF0Y2hfY29udGVudCA9IG1hdGNoX2NvbnRlbnQucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgcmVnUyxcbiAgICAgICAgICAgICAgICAgICAgJzxlbSBjbGFzcz1cInNlYXJjaC1rZXl3b3JkXCI+JyArIGtleXdvcmQgKyBcIjwvZW0+XCJcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzdHIgKz0gJzxwIGNsYXNzPVwic2VhcmNoLXJlc3VsdFwiPicgKyBtYXRjaF9jb250ZW50ICsgXCIuLi48L3A+XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3RyICs9IFwiPC9hPjwvbGk+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3RyICs9IFwiPC91bD5cIjtcbiAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoXCI8bGk+XCIpID09PSAtMSkge1xuICAgICAgICAgICAgJHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgQlROICtcbiAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdsb2NhbC1zZWFyY2gtZW1wdHknPuayoeacieaJvuWIsOS9oOaJgOimgeaQnOe0oueahOWGheWuueKApuKApjwvZGl2PlwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkcmVzdWx0Q29udGVudC5pbm5lckhUTUwgPSBCVE4gKyBzdHI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2xlYXJTZWFyY2goJHJlc3VsdENvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBnZXRTZWFyY2hGaWxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXRoID0gXCIvc2VhcmNoLnhtbFwiO1xuICAgIHNlYXJjaEZ1bmMocGF0aCwgXCJsb2NhbC1zZWFyY2gtaW5wdXRcIiwgXCJsb2NhbC1zZWFyY2gtcmVzdWx0XCIpO1xuICB9O1xuXG4gIC8vIOWFqOWxgOaMiemSruiuvue9rmpz5piv5ZCm5bGV56S65pCc57Si5qGGXG4gIHZhciBnbG9iYWxfYnV0dG9uX3NlYXJjaF9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaF9idG5cIik7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaF9idG5fcGNcIikpIHtcbiAgICB2YXIgZ2xvYmFsX2J1dHRvbl9zZWFyY2hfYm94X3BjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hfYnRuX3BjXCIpO1xuICAgIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveF9wYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2JveFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWwtc2VhcmNoLWlucHV0JykuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdsb2JhbF9idXR0b25fc2VhcmNoX2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9ib3hcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhbC1zZWFyY2gtaW5wdXQnKS5mb2N1cygpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHNlYXJjaF9jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX2Nsb3NlXCIpO1xuICBzZWFyY2hfY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfYm94XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICB9KTtcbn07XG4iXX0=
