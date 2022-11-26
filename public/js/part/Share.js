(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Share = /*#__PURE__*/function () {
  function Share() {
    _classCallCheck(this, Share);
  }

  _createClass(Share, [{
    key: "init",
    value: function init() {
      share();
    }
  }]);

  return Share;
}();

exports["default"] = Share;

var share = function share() {
  // find closest
  function closest(elem, parent) {
    if (typeof parent == "string") {
      var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

      if (!!matchesSelector) {
        while (elem) {
          if (matchesSelector.bind(elem)(parent)) {
            return elem;
          } else {
            elem = elem.parentElement;
          }
        }
      }

      return false;
    } else {
      while (elem) {
        if (elem == parent) {
          return elem;
        } else {
          elem = elem.parentElement;
        }
      }

      return false;
    }
  } // share button class


  window.needShareButton = function (elem, options) {
    // create element reference
    var root = this;
    root.elem = elem || "need-share-button";
    /* Helpers
     ***********************************************/
    // get title from html

    root.getTitle = function () {
      var content; // check querySelector existance for old browsers

      if (document.querySelector) {
        if (content = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) {
          return content.getAttribute("content");
        } else if (content = document.querySelector("title")) {
          return content.innerText;
        }
      }

      return document.title;
    }; // get image from html


    root.getImage = function () {
      var content; // check querySelector existance for old browsers

      if (document.querySelector) {
        if (content = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) {
          return content.getAttribute("content");
        } else return "";
      } else return "";
    }; // get description from html


    root.getDescription = function () {
      var content; // check querySelector existance for old browsers

      if (document.querySelector) {
        if (content = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) {
          return content.getAttribute("content");
        } else return "";
      } else {
        if (content = document.getElementsByTagName("meta").namedItem("description")) return content.getAttribute("content");else return "";
      }
    }; // share urls for all networks


    root.share = {
      weibo: function weibo(el) {
        var myoptions = getOptions(el);
        var url = "http://v.t.sina.com.cn/share/share.php?title=" + encodeURIComponent(myoptions.title) + "&url=" + encodeURIComponent(myoptions.url) + "&pic=" + encodeURIComponent(myoptions.image);
        root.popup(url);
      },
      wechat: function wechat(el) {
        var myoptions = getOptions(el);
        var imgSrc = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(myoptions.url);
        var dropdownEl = el.querySelector(".need-share-button_dropdown");
        var img = dropdownEl.getElementsByClassName("need-share-wechat-code-image")[0];
        var loader = dropdownEl.getElementsByClassName("need-share-loader")[0];

        if (img) {
          img.remove();
        } else if (loader) {
          loader.remove();
        } else {
          loader = document.createElement("div");
          loader.className = "need-share-loader";
          loader.innerText = "loading...";
          loader.title = "loading qrcode...";
          img = document.createElement("img");
          img.src = imgSrc;
          img.alt = "Create qrcode failed!";
          img.setAttribute("class", "need-share-wechat-code-image");

          img.onload = img.onerror = function () {
            if (loader.isConnected) {
              loader.remove();
              dropdownEl.appendChild(img);
            }
          };

          dropdownEl.appendChild(loader);
        }
      },
      douban: function douban(el) {
        var myoptions = getOptions(el);
        var url = "https://www.douban.com/share/service?name=" + encodeURIComponent(myoptions.title) + "&href=" + encodeURIComponent(myoptions.url) + "&image=" + encodeURIComponent(myoptions.image);
        root.popup(url);
      },
      qqzone: function qqzone(el) {
        var myoptions = getOptions(el);
        var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=" + encodeURIComponent(myoptions.title) + "&url=" + encodeURIComponent(myoptions.url) + "&pics=" + encodeURIComponent(myoptions.image) + "&desc=" + encodeURIComponent(myoptions.description);
        root.popup(url);
      },
      renren: function renren(el) {
        var myoptions = getOptions(el);
        var url = "http://widget.renren.com/dialog/share?title=" + encodeURIComponent(myoptions.title) + "&resourceUrl=" + encodeURIComponent(myoptions.url) + "&pic=" + encodeURIComponent(myoptions.image) + "&description=" + encodeURIComponent(myoptions.description);
        root.popup(url);
      },
      mailto: function mailto(el) {
        var myoptions = getOptions(el);
        var url = "mailto:?subject=" + encodeURIComponent(myoptions.title) + "&body=Thought you might enjoy reading this: " + encodeURIComponent(myoptions.url) + " - " + encodeURIComponent(myoptions.description);
        window.location.href = url;
      },
      twitter: function twitter(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "twitter.com/intent/tweet?text=";
        url += encodeURIComponent(myoptions.title) + "&url=" + encodeURIComponent(myoptions.url);
        root.popup(url);
      },
      pinterest: function pinterest(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "pinterest.com/pin/create/bookmarklet/?is_video=false";
        url += "&media=" + encodeURIComponent(myoptions.image);
        url += "&url=" + encodeURIComponent(myoptions.url);
        url += "&description=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      facebook: function facebook(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.facebook.com/share.php?";
        url += "u=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      googleplus: function googleplus(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "plus.google.com/share?";
        url += "url=" + encodeURIComponent(myoptions.url);
        root.popup(url);
      },
      reddit: function reddit(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.reddit.com/submit?";
        url += "url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      delicious: function delicious(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "del.icio.us/post?";
        url += "url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        url += "&notes=" + encodeURIComponent(myoptions.description);
        root.popup(url);
      },
      // 'tapiture' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'tapiture.com/bookmarklet/image?';
      // 	url += 'img_src=' + encodeURIComponent(myoptions.image);
      // 	url += '&page_url=' + encodeURIComponent(myoptions.url);
      // 	url += '&page_title=' + encodeURIComponent(myoptions.title);
      //
      //   root.popup(url);
      // },
      stumbleupon: function stumbleupon(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.stumbleupon.com/submit?";
        url += "url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      linkedin: function linkedin(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.linkedin.com/shareArticle?mini=true";
        url += "&url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        url += "&source=" + encodeURIComponent(myoptions.source);
        root.popup(url);
      },
      // 'slashdot' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'slashdot.org/bookmark.pl?';
      // 	url += 'url=' + encodeURIComponent(myoptions.url);
      // 	url += '&title=' + encodeURIComponent(myoptions.title);
      //
      //   root.popup(url);
      // },
      // 'technorati' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'technorati.com/faves?';
      // 	url += 'add=' + encodeURIComponent(myoptions.url);
      // 	url += '&title=' + encodeURIComponent(myoptions.title);
      //
      //   root.popup(url);
      // },
      posterous: function posterous(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "posterous.com/share?";
        url += "linkto=" + encodeURIComponent(myoptions.url);
        root.popup(url);
      },
      tumblr: function tumblr(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.tumblr.com/share?v=3";
        url += "&u=" + encodeURIComponent(myoptions.url);
        url += "&t=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      // 'googlebookmarks' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'www.google.com/bookmarks/mark?op=edit';
      // 	url += '&bkmk=' + encodeURIComponent(myoptions.url);
      // 	url += '&title=' + encodeURIComponent(myoptions.title);
      // 	url += '&annotation=' + encodeURIComponent(myoptions.description);
      //
      //   root.popup(url);
      // },
      // 'newsvine' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'www.newsvine.com/_tools/seed&save?';
      // 	url += 'u=' + encodeURIComponent(myoptions.url);
      // 	url += '&h=' + encodeURIComponent(myoptions.title);
      //
      //   root.popup(url);
      // },
      // 'pingfm' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'ping.fm/ref/?';
      // 	url += 'link=' + encodeURIComponent(myoptions.url);
      // 	url += '&title=' + encodeURIComponent(myoptions.title);
      // 	url += '&body=' + encodeURIComponent(myoptions.description);
      //
      //   root.popup(url);
      // },
      evernote: function evernote(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.evernote.com/clip.action?";
        url += "url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      friendfeed: function friendfeed(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.friendfeed.com/share?";
        url += "url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        root.popup(url);
      },
      vkontakte: function vkontakte(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "vkontakte.ru/share.php?";
        url += "url=" + encodeURIComponent(myoptions.url);
        url += "&title=" + encodeURIComponent(myoptions.title);
        url += "&description=" + encodeURIComponent(myoptions.description);
        url += "&image=" + encodeURIComponent(myoptions.image);
        url += "&noparse=true";
        root.popup(url);
      },
      odnoklassniki: function odnoklassniki(el) {
        var myoptions = getOptions(el);
        var url = myoptions.protocol + "www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1";
        url += "&st.comments=" + encodeURIComponent(myoptions.description);
        url += "&st._surl=" + encodeURIComponent(myoptions.url);
        root.popup(url);
      } // 'mailru' : function(el) {
      //       var myoptions = getOptions(el);
      // 	var url = myoptions.protocol + 'connect.mail.ru/share?';
      //   url += 'url=' + encodeURIComponent(myoptions.url);
      //   url += '&title=' + encodeURIComponent(myoptions.title);
      //   url += '&description=' + encodeURIComponent(myoptions.description);
      //   url += '&imageurl=' + encodeURIComponent(myoptions.image);
      //
      //   root.popup(url);
      // }

    }; // open share link in a popup

    root.popup = function (url) {
      var left, top;
      var popupWidth = 600,
          popupHeight = 500; // caculate browser window width
      // if window width is too narrow, use screen width;

      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

      if (width < 600 && height < 500) {
        left = screen.width / 2 - popupWidth / 2;
        top = screen.height / 2 - popupHeight / 2;
      } else {
        // set left and top position
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left,
            dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top; // calculate top and left position

        left = width / 2 - popupWidth / 2 + dualScreenLeft;
        top = height / 2 - popupHeight / 2 + dualScreenTop;
      }

      var shareWindow = window.open(url, "targetWindow", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=" + popupWidth + ", height=" + popupHeight + ", top=" + top + ", left=" + left); // Puts focus on the newWindow

      if (window.focus) {
        shareWindow.focus();
      }
    };
    /* Set options
     ***********************************************/
    // create default options


    root.options = {
      iconStyle: "default",
      // default or box
      boxForm: "horizontal",
      // horizontal or vertical
      position: "bottomCenter",
      // top / middle / bottom + Left / Center / Right
      protocol: ["http", "https"].indexOf(window.location.href.split(":")[0]) === -1 ? "https://" : "//",
      networks: "Twitter,Facebook,Reddit,Linkedin,Tumblr,Pinterest,Weibo,Wechat,Douban,QQZone,Mailto",
      icons: ["fa fa-twitter", "fa fa-facebook", "fa fa-reddit-alien", "fa fa-linkedin", "fa fa-tumblr", "fa fa-pinterest", "fa fa-weibo", "fa fa-weixin", "9", "fa fa-qq", "fa fa-envelope-o"]
    }; // integrate custom options

    for (var i in options) {
      root.options[i] = options[i];
    } // convert networks string into array


    root.options.networks = root.options.networks.toLowerCase().split(",");

    function getOptions(el) {
      // integrate data attribute options
      var ret = {};

      for (var i in root.options) {
        ret[i] = root.options[i];
      } // these attrs must get dynamically.


      ret.url = root.options.url || window.location.href;
      ret.title = root.options.title || root.getTitle();
      ret.image = root.options.image || root.getImage();
      ret.description = root.options.description || root.getDescription();

      for (var option in el.dataset) {
        // replace only 'share-' prefixed data-attributes
        if (option.match(/share/)) {
          var new_option = option.replace(/share/, "");

          if (!new_option.length) {
            continue;
          }

          new_option = new_option.charAt(0).toLowerCase() + new_option.slice(1);
          var val = el.dataset[option];

          if (new_option === "networks") {
            val = val.toLowerCase().split(",");
          } else if (new_option === "url" && val && val[0] === "/") {
            // fix relative url problem.
            val = location.origin + val;
          }

          ret[new_option] = val;
        }
      }

      return ret;
    }

    function createDropdown(el) {
      // create dropdown
      var dropdownEl = document.createElement("span");
      dropdownEl.className = "need-share-button_dropdown";

      if (el.querySelector(".need-share-button_dropdown")) {
        return;
      }

      var myoptions = getOptions(el); // set dropdown row length

      if (myoptions.iconStyle == "box" && myoptions.boxForm == "horizontal") dropdownEl.className += " need-share-button_dropdown-box-horizontal";else if (myoptions.iconStyle == "box" && myoptions.boxForm == "vertical") dropdownEl.className += " need-share-button_dropdown-box-vertical"; // set dropdown position

      setTimeout(function () {
        switch (myoptions.position) {
          case "topLeft":
            dropdownEl.className += " need-share-button_dropdown-top-left";
            break;

          case "topRight":
            dropdownEl.className += " need-share-button_dropdown-top-right";
            break;

          case "topCenter":
            dropdownEl.className += " need-share-button_dropdown-top-center";
            dropdownEl.style.marginLeft = -dropdownEl.offsetWidth / 2 + "px";
            break;

          case "middleLeft":
            dropdownEl.className += " need-share-button_dropdown-middle-left";
            dropdownEl.style.marginTop = -dropdownEl.offsetHeight / 2 + "px";
            break;

          case "middleRight":
            dropdownEl.className += " need-share-button_dropdown-middle-right";
            dropdownEl.style.marginTop = -dropdownEl.offsetHeight / 2 + "px";
            break;

          case "bottomLeft":
            dropdownEl.className += " need-share-button_dropdown-bottom-left";
            break;

          case "bottomRight":
            dropdownEl.className += " need-share-button_dropdown-bottom-right";
            break;

          case "bottomCenter":
            dropdownEl.className += " need-share-button_dropdown-bottom-center";
            dropdownEl.style.marginLeft = -dropdownEl.offsetWidth / 2 + "px";
            break;

          default:
            dropdownEl.className += " need-share-button_dropdown-bottom-center";
            dropdownEl.style.marginLeft = -dropdownEl.offsetWidth / 2 + "px";
            break;
        }
      }, 1); // fill fropdown with buttons

      var iconClass = myoptions.iconStyle == "default" ? "need-share-button_link need-share-button_" : "need-share-button_link-" + myoptions.iconStyle + " need-share-button_link need-share-button_";
      var flag = 0;

      for (var network in myoptions.networks) {
        var link = document.createElement("span");
        network = myoptions.networks[network];
        link.className = iconClass + network;
        console.log(myoptions.icons.length);
        link.className += " " + myoptions.icons[flag];
        link.dataset.network = network;
        link.title = network;
        dropdownEl.appendChild(link);
        flag++;
      }

      dropdownEl.addEventListener("click", function (event) {
        if (closest(event.target, ".need-share-button_link")) {
          event.preventDefault();
          event.stopPropagation();
          root.share[event.target.dataset.network](el);
          return false;
        }
      });
      el.appendChild(dropdownEl);
    }

    var targetEl = typeof elem === "string" ? document.querySelector(elem) : elem;

    if (targetEl && targetEl.classList.contains("need-share-panel")) {
      createDropdown(targetEl); // targetEl.classList.add('need-share-button-opened');
    } // close on click outside
    else document.addEventListener("click", function (event) {
      var openedEl = document.querySelector(".need-share-button-opened");

      if (!closest(event.target, ".need-share-button-opened")) {
        if (openedEl) {
          openedEl.classList.remove("need-share-button-opened"); // hide wechat code image when close the dropdown.

          if (openedEl.querySelector(".need-share-wechat-code-image")) {
            openedEl.querySelector(".need-share-wechat-code-image").remove();
          }
        } else {
          var el = closest(event.target, root.elem);

          if (el) {
            if (!el.classList.contains("need-share-button-opened")) {
              createDropdown(el);
              setTimeout(function () {
                el.classList.add("need-share-button-opened");
              }, 1);
            }
          }
        }
      }
    });
  };

  new needShareButton(".need-share-button");
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L1NoYXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztJQ0FxQixLO0VBQ25CLGlCQUFjO0lBQUE7RUFBRTs7OztXQUNoQixnQkFBTztNQUNMLEtBQUs7SUFDTjs7Ozs7Ozs7QUFFSCxJQUFNLEtBQUssR0FBRyxTQUFSLEtBQVEsR0FBTTtFQUNsQjtFQUNBLFNBQVMsT0FBVCxDQUFpQixJQUFqQixFQUF1QixNQUF2QixFQUErQjtJQUM3QixJQUFJLE9BQU8sTUFBUCxJQUFpQixRQUFyQixFQUErQjtNQUM3QixJQUFJLGVBQWUsR0FDakIsSUFBSSxDQUFDLE9BQUwsSUFDQSxJQUFJLENBQUMscUJBREwsSUFFQSxJQUFJLENBQUMsa0JBRkwsSUFHQSxJQUFJLENBQUMsaUJBSlA7O01BTUEsSUFBSSxDQUFDLENBQUMsZUFBTixFQUF1QjtRQUNyQixPQUFPLElBQVAsRUFBYTtVQUNYLElBQUksZUFBZSxDQUFDLElBQWhCLENBQXFCLElBQXJCLEVBQTJCLE1BQTNCLENBQUosRUFBd0M7WUFDdEMsT0FBTyxJQUFQO1VBQ0QsQ0FGRCxNQUVPO1lBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFaO1VBQ0Q7UUFDRjtNQUNGOztNQUNELE9BQU8sS0FBUDtJQUNELENBakJELE1BaUJPO01BQ0wsT0FBTyxJQUFQLEVBQWE7UUFDWCxJQUFJLElBQUksSUFBSSxNQUFaLEVBQW9CO1VBQ2xCLE9BQU8sSUFBUDtRQUNELENBRkQsTUFFTztVQUNMLElBQUksR0FBRyxJQUFJLENBQUMsYUFBWjtRQUNEO01BQ0Y7O01BQ0QsT0FBTyxLQUFQO0lBQ0Q7RUFDRixDQTlCaUIsQ0FnQ2xCOzs7RUFDQSxNQUFNLENBQUMsZUFBUCxHQUF5QixVQUFVLElBQVYsRUFBZ0IsT0FBaEIsRUFBeUI7SUFD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USxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLDJCQUF2QixDQUFmOztNQUVBLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQVAsRUFBZSwyQkFBZixDQUFaLEVBQXlEO1FBQ3ZELElBQUksUUFBSixFQUFjO1VBQ1osUUFBUSxDQUFDLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsMEJBQTFCLEVBRFksQ0FHWjs7VUFDQSxJQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLCtCQUF2QixDQUFKLEVBQTZEO1lBQzNELFFBQVEsQ0FBQyxhQUFULENBQXVCLCtCQUF2QixFQUF3RCxNQUF4RDtVQUNEO1FBQ0YsQ0FQRCxNQU9PO1VBQ0wsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFQLEVBQWUsSUFBSSxDQUFDLElBQXBCLENBQWhCOztVQUNBLElBQUksRUFBSixFQUFRO1lBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFILENBQWEsUUFBYixDQUFzQiwwQkFBdEIsQ0FBTCxFQUF3RDtjQUN0RCxjQUFjLENBQUMsRUFBRCxDQUFkO2NBQ0EsVUFBVSxDQUFDLFlBQVk7Z0JBQ3JCLEVBQUUsQ0FBQyxTQUFILENBQWEsR0FBYixDQUFpQiwwQkFBakI7Y0FDRCxDQUZTLEVBRVAsQ0FGTyxDQUFWO1lBR0Q7VUFDRjtRQUNGO01BQ0Y7SUFDRixDQXZCRDtFQXdCSCxDQTFrQkQ7O0VBNGtCQSxJQUFJLGVBQUosQ0FBb0Isb0JBQXBCO0FBQ0QsQ0E5bUJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmUge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIGluaXQoKSB7XG4gICAgc2hhcmUoKTtcbiAgfVxufVxuY29uc3Qgc2hhcmUgPSAoKSA9PiB7XG4gIC8vIGZpbmQgY2xvc2VzdFxuICBmdW5jdGlvbiBjbG9zZXN0KGVsZW0sIHBhcmVudCkge1xuICAgIGlmICh0eXBlb2YgcGFyZW50ID09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBtYXRjaGVzU2VsZWN0b3IgPVxuICAgICAgICBlbGVtLm1hdGNoZXMgfHxcbiAgICAgICAgZWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgZWxlbS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgZWxlbS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgICAgaWYgKCEhbWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgaWYgKG1hdGNoZXNTZWxlY3Rvci5iaW5kKGVsZW0pKHBhcmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICBpZiAoZWxlbSA9PSBwYXJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gc2hhcmUgYnV0dG9uIGNsYXNzXG4gIHdpbmRvdy5uZWVkU2hhcmVCdXR0b24gPSBmdW5jdGlvbiAoZWxlbSwgb3B0aW9ucykge1xuICAgIC8vIGNyZWF0ZSBlbGVtZW50IHJlZmVyZW5jZVxuICAgIHZhciByb290ID0gdGhpcztcbiAgICByb290LmVsZW0gPSBlbGVtIHx8IFwibmVlZC1zaGFyZS1idXR0b25cIjtcblxuICAgIC8qIEhlbHBlcnNcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAvLyBnZXQgdGl0bGUgZnJvbSBodG1sXG4gICAgcm9vdC5nZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjb250ZW50O1xuICAgICAgLy8gY2hlY2sgcXVlcnlTZWxlY3RvciBleGlzdGFuY2UgZm9yIG9sZCBicm93c2Vyc1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChjb250ZW50ID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJvZzp0aXRsZVwiXScpIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOnRpdGxlXCJdJykpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIikpKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRlbnQuaW5uZXJUZXh0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZG9jdW1lbnQudGl0bGU7XG4gICAgfTtcblxuICAgIC8vIGdldCBpbWFnZSBmcm9tIGh0bWxcbiAgICByb290LmdldEltYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKGNvbnRlbnQgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlXCJdJykgfHxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIl0nKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBcIlwiO1xuICAgICAgfSBlbHNlIHJldHVybiBcIlwiO1xuICAgIH07XG5cbiAgICAvLyBnZXQgZGVzY3JpcHRpb24gZnJvbSBodG1sXG4gICAgcm9vdC5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjb250ZW50O1xuICAgICAgLy8gY2hlY2sgcXVlcnlTZWxlY3RvciBleGlzdGFuY2UgZm9yIG9sZCBicm93c2Vyc1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChjb250ZW50ID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXScpIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJdJykgfHxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIik7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gXCJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoY29udGVudCA9IGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJtZXRhXCIpXG4gICAgICAgICAgICAubmFtZWRJdGVtKFwiZGVzY3JpcHRpb25cIikpXG4gICAgICAgIClcbiAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpO1xuICAgICAgICBlbHNlIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBzaGFyZSB1cmxzIGZvciBhbGwgbmV0d29ya3NcbiAgICByb290LnNoYXJlID0ge1xuICAgICAgd2VpYm86IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPVxuICAgICAgICAgIFwiaHR0cDovL3YudC5zaW5hLmNvbS5jbi9zaGFyZS9zaGFyZS5waHA/dGl0bGU9XCIgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICtcbiAgICAgICAgICBcIiZ1cmw9XCIgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKSArXG4gICAgICAgICAgXCImcGljPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcbiAgICAgIHdlY2hhdDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIGltZ1NyYyA9XG4gICAgICAgICAgXCJodHRwczovL2FwaS5xcnNlcnZlci5jb20vdjEvY3JlYXRlLXFyLWNvZGUvP3NpemU9MTUweDE1MCZkYXRhPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgIHZhciBkcm9wZG93bkVsID0gZWwucXVlcnlTZWxlY3RvcihcIi5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93blwiKTtcbiAgICAgICAgdmFyIGltZyA9IGRyb3Bkb3duRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICBcIm5lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2VcIlxuICAgICAgICApWzBdO1xuICAgICAgICB2YXIgbG9hZGVyID0gZHJvcGRvd25FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmVlZC1zaGFyZS1sb2FkZXJcIilbMF07XG5cbiAgICAgICAgaWYgKGltZykge1xuICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2FkZXIpIHtcbiAgICAgICAgICBsb2FkZXIucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBsb2FkZXIuY2xhc3NOYW1lID0gXCJuZWVkLXNoYXJlLWxvYWRlclwiO1xuICAgICAgICAgIGxvYWRlci5pbm5lclRleHQgPSBcImxvYWRpbmcuLi5cIjtcbiAgICAgICAgICBsb2FkZXIudGl0bGUgPSBcImxvYWRpbmcgcXJjb2RlLi4uXCI7XG5cbiAgICAgICAgICBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgIGltZy5zcmMgPSBpbWdTcmM7XG4gICAgICAgICAgaW1nLmFsdCA9IFwiQ3JlYXRlIHFyY29kZSBmYWlsZWQhXCI7XG4gICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZVwiKTtcbiAgICAgICAgICBpbWcub25sb2FkID0gaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobG9hZGVyLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgIGxvYWRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChsb2FkZXIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZG91YmFuOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICB2YXIgdXJsID1cbiAgICAgICAgICBcImh0dHBzOi8vd3d3LmRvdWJhbi5jb20vc2hhcmUvc2VydmljZT9uYW1lPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKSArXG4gICAgICAgICAgXCImaHJlZj1cIiArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpICtcbiAgICAgICAgICBcIiZpbWFnZT1cIiArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIH0sXG4gICAgICBxcXpvbmU6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPVxuICAgICAgICAgIFwiaHR0cDovL3Nucy5xem9uZS5xcS5jb20vY2dpLWJpbi9xenNoYXJlL2NnaV9xenNoYXJlX29uZWtleT90aXRsZT1cIiArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSkgK1xuICAgICAgICAgIFwiJnVybD1cIiArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpICtcbiAgICAgICAgICBcIiZwaWNzPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKSArXG4gICAgICAgICAgXCImZGVzYz1cIiArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIH0sXG4gICAgICByZW5yZW46IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPVxuICAgICAgICAgIFwiaHR0cDovL3dpZGdldC5yZW5yZW4uY29tL2RpYWxvZy9zaGFyZT90aXRsZT1cIiArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSkgK1xuICAgICAgICAgIFwiJnJlc291cmNlVXJsPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCkgK1xuICAgICAgICAgIFwiJnBpYz1cIiArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSkgK1xuICAgICAgICAgIFwiJmRlc2NyaXB0aW9uPVwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcblxuICAgICAgbWFpbHRvOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICB2YXIgdXJsID1cbiAgICAgICAgICBcIm1haWx0bzo/c3ViamVjdD1cIiArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSkgK1xuICAgICAgICAgIFwiJmJvZHk9VGhvdWdodCB5b3UgbWlnaHQgZW5qb3kgcmVhZGluZyB0aGlzOiBcIiArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgIH0sXG4gICAgICB0d2l0dGVyOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgXCJ0d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD1cIjtcbiAgICAgICAgdXJsICs9XG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSkgK1xuICAgICAgICAgIFwiJnVybD1cIiArXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuXG4gICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIH0sXG4gICAgICBwaW50ZXJlc3Q6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPVxuICAgICAgICAgIG15b3B0aW9ucy5wcm90b2NvbCArXG4gICAgICAgICAgXCJwaW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYm9va21hcmtsZXQvP2lzX3ZpZGVvPWZhbHNlXCI7XG4gICAgICAgIHVybCArPSBcIiZtZWRpYT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICB1cmwgKz0gXCImdXJsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICB1cmwgKz0gXCImZGVzY3JpcHRpb249XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcblxuICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICB9LFxuICAgICAgZmFjZWJvb2s6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyBcInd3dy5mYWNlYm9vay5jb20vc2hhcmUucGhwP1wiO1xuICAgICAgICB1cmwgKz0gXCJ1PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICB1cmwgKz0gXCImdGl0bGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcblxuICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICB9LFxuICAgICAgZ29vZ2xlcGx1czogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArIFwicGx1cy5nb29nbGUuY29tL3NoYXJlP1wiO1xuICAgICAgICB1cmwgKz0gXCJ1cmw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG5cbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcbiAgICAgIHJlZGRpdDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArIFwid3d3LnJlZGRpdC5jb20vc3VibWl0P1wiO1xuICAgICAgICB1cmwgKz0gXCJ1cmw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgIHVybCArPSBcIiZ0aXRsZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuXG4gICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIH0sXG4gICAgICBkZWxpY2lvdXM6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyBcImRlbC5pY2lvLnVzL3Bvc3Q/XCI7XG4gICAgICAgIHVybCArPSBcInVybD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgdXJsICs9IFwiJnRpdGxlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIHVybCArPSBcIiZub3Rlcz1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIH0sXG4gICAgICAvLyAndGFwaXR1cmUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0YXBpdHVyZS5jb20vYm9va21hcmtsZXQvaW1hZ2U/JztcbiAgICAgIC8vIFx0dXJsICs9ICdpbWdfc3JjPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgIC8vIFx0dXJsICs9ICcmcGFnZV91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgIC8vIFx0dXJsICs9ICcmcGFnZV90aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAvL1xuICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAvLyB9LFxuICAgICAgc3R1bWJsZXVwb246IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyBcInd3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0P1wiO1xuICAgICAgICB1cmwgKz0gXCJ1cmw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgIHVybCArPSBcIiZ0aXRsZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuXG4gICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIH0sXG4gICAgICBsaW5rZWRpbjogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9XG4gICAgICAgICAgbXlvcHRpb25zLnByb3RvY29sICsgXCJ3d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWVcIjtcbiAgICAgICAgdXJsICs9IFwiJnVybD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgdXJsICs9IFwiJnRpdGxlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIHVybCArPSBcIiZzb3VyY2U9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnNvdXJjZSk7XG5cbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcbiAgICAgIC8vICdzbGFzaGRvdCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3NsYXNoZG90Lm9yZy9ib29rbWFyay5wbD8nO1xuICAgICAgLy8gXHR1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAvL1xuICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAvLyB9LFxuICAgICAgLy8gJ3RlY2hub3JhdGknIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0ZWNobm9yYXRpLmNvbS9mYXZlcz8nO1xuICAgICAgLy8gXHR1cmwgKz0gJ2FkZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAvL1xuICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAvLyB9LFxuICAgICAgcG9zdGVyb3VzOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgXCJwb3N0ZXJvdXMuY29tL3NoYXJlP1wiO1xuICAgICAgICB1cmwgKz0gXCJsaW5rdG89XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG5cbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcbiAgICAgIHR1bWJscjogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArIFwid3d3LnR1bWJsci5jb20vc2hhcmU/dj0zXCI7XG4gICAgICAgIHVybCArPSBcIiZ1PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICB1cmwgKz0gXCImdD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuXG4gICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIH0sXG4gICAgICAvLyAnZ29vZ2xlYm9va21hcmtzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lmdvb2dsZS5jb20vYm9va21hcmtzL21hcms/b3A9ZWRpdCc7XG4gICAgICAvLyBcdHVybCArPSAnJmJrbWs9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgLy8gXHR1cmwgKz0gJyZhbm5vdGF0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgIC8vXG4gICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIC8vIH0sXG4gICAgICAvLyAnbmV3c3ZpbmUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cubmV3c3ZpbmUuY29tL190b29scy9zZWVkJnNhdmU/JztcbiAgICAgIC8vIFx0dXJsICs9ICd1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAvLyBcdHVybCArPSAnJmg9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgLy9cbiAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgLy8gfSxcbiAgICAgIC8vICdwaW5nZm0nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwaW5nLmZtL3JlZi8/JztcbiAgICAgIC8vIFx0dXJsICs9ICdsaW5rPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgIC8vIFx0dXJsICs9ICcmYm9keT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAvL1xuICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAvLyB9LFxuICAgICAgZXZlcm5vdGU6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyBcInd3dy5ldmVybm90ZS5jb20vY2xpcC5hY3Rpb24/XCI7XG4gICAgICAgIHVybCArPSBcInVybD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgdXJsICs9IFwiJnRpdGxlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG5cbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcbiAgICAgIGZyaWVuZGZlZWQ6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyBcInd3dy5mcmllbmRmZWVkLmNvbS9zaGFyZT9cIjtcbiAgICAgICAgdXJsICs9IFwidXJsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICB1cmwgKz0gXCImdGl0bGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcblxuICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICB9LFxuICAgICAgdmtvbnRha3RlOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgXCJ2a29udGFrdGUucnUvc2hhcmUucGhwP1wiO1xuICAgICAgICB1cmwgKz0gXCJ1cmw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgIHVybCArPSBcIiZ0aXRsZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICB1cmwgKz0gXCImZGVzY3JpcHRpb249XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgdXJsICs9IFwiJmltYWdlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgIHVybCArPSBcIiZub3BhcnNlPXRydWVcIjtcblxuICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICB9LFxuICAgICAgb2Rub2tsYXNzbmlraTogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgdmFyIHVybCA9XG4gICAgICAgICAgbXlvcHRpb25zLnByb3RvY29sICsgXCJ3d3cub2Rub2tsYXNzbmlraS5ydS9kaz9zdC5jbWQ9YWRkU2hhcmUmc3Qucz0xXCI7XG4gICAgICAgIHVybCArPSBcIiZzdC5jb21tZW50cz1cIiArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICB1cmwgKz0gXCImc3QuX3N1cmw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG5cbiAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgfSxcbiAgICAgIC8vICdtYWlscnUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdjb25uZWN0Lm1haWwucnUvc2hhcmU/JztcbiAgICAgIC8vICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgIC8vICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgLy8gICB1cmwgKz0gJyZkZXNjcmlwdGlvbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAvLyAgIHVybCArPSAnJmltYWdldXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgIC8vXG4gICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgLy8gb3BlbiBzaGFyZSBsaW5rIGluIGEgcG9wdXBcbiAgICByb290LnBvcHVwID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgdmFyIGxlZnQsIHRvcDtcblxuICAgICAgdmFyIHBvcHVwV2lkdGggPSA2MDAsXG4gICAgICAgIHBvcHVwSGVpZ2h0ID0gNTAwO1xuXG4gICAgICAvLyBjYWN1bGF0ZSBicm93c2VyIHdpbmRvdyB3aWR0aFxuICAgICAgLy8gaWYgd2luZG93IHdpZHRoIGlzIHRvbyBuYXJyb3csIHVzZSBzY3JlZW4gd2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICA/IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICAgIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgIDogc2NyZWVuLndpZHRoO1xuICAgICAgdmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICA/IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgICAgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgIDogc2NyZWVuLmhlaWdodDtcbiAgICAgIGlmICh3aWR0aCA8IDYwMCAmJiBoZWlnaHQgPCA1MDApIHtcbiAgICAgICAgbGVmdCA9IHNjcmVlbi53aWR0aCAvIDIgLSBwb3B1cFdpZHRoIC8gMjtcbiAgICAgICAgdG9wID0gc2NyZWVuLmhlaWdodCAvIDIgLSBwb3B1cEhlaWdodCAvIDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzZXQgbGVmdCBhbmQgdG9wIHBvc2l0aW9uXG4gICAgICAgIHZhciBkdWFsU2NyZWVuTGVmdCA9XG4gICAgICAgICAgICB3aW5kb3cuc2NyZWVuTGVmdCAhPSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHNjcmVlbi5sZWZ0LFxuICAgICAgICAgIGR1YWxTY3JlZW5Ub3AgPVxuICAgICAgICAgICAgd2luZG93LnNjcmVlblRvcCAhPSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogc2NyZWVuLnRvcDtcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRvcCBhbmQgbGVmdCBwb3NpdGlvblxuICAgICAgICBsZWZ0ID0gd2lkdGggLyAyIC0gcG9wdXBXaWR0aCAvIDIgKyBkdWFsU2NyZWVuTGVmdDtcbiAgICAgICAgdG9wID0gaGVpZ2h0IC8gMiAtIHBvcHVwSGVpZ2h0IC8gMiArIGR1YWxTY3JlZW5Ub3A7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaGFyZVdpbmRvdyA9IHdpbmRvdy5vcGVuKFxuICAgICAgICB1cmwsXG4gICAgICAgIFwidGFyZ2V0V2luZG93XCIsXG4gICAgICAgIFwidG9vbGJhcj1ubyxsb2NhdGlvbj1ubyxzdGF0dXM9bm8sbWVudWJhcj1ubyxzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHdpZHRoPVwiICtcbiAgICAgICAgICBwb3B1cFdpZHRoICtcbiAgICAgICAgICBcIiwgaGVpZ2h0PVwiICtcbiAgICAgICAgICBwb3B1cEhlaWdodCArXG4gICAgICAgICAgXCIsIHRvcD1cIiArXG4gICAgICAgICAgdG9wICtcbiAgICAgICAgICBcIiwgbGVmdD1cIiArXG4gICAgICAgICAgbGVmdFxuICAgICAgKTtcbiAgICAgIC8vIFB1dHMgZm9jdXMgb24gdGhlIG5ld1dpbmRvd1xuICAgICAgaWYgKHdpbmRvdy5mb2N1cykge1xuICAgICAgICBzaGFyZVdpbmRvdy5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKiBTZXQgb3B0aW9uc1xuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIC8vIGNyZWF0ZSBkZWZhdWx0IG9wdGlvbnNcbiAgICByb290Lm9wdGlvbnMgPSB7XG4gICAgICBpY29uU3R5bGU6IFwiZGVmYXVsdFwiLCAvLyBkZWZhdWx0IG9yIGJveFxuICAgICAgYm94Rm9ybTogXCJob3Jpem9udGFsXCIsIC8vIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgICAgIHBvc2l0aW9uOiBcImJvdHRvbUNlbnRlclwiLCAvLyB0b3AgLyBtaWRkbGUgLyBib3R0b20gKyBMZWZ0IC8gQ2VudGVyIC8gUmlnaHRcbiAgICAgIHByb3RvY29sOlxuICAgICAgICBbXCJodHRwXCIsIFwiaHR0cHNcIl0uaW5kZXhPZih3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIjpcIilbMF0pID09PSAtMVxuICAgICAgICAgID8gXCJodHRwczovL1wiXG4gICAgICAgICAgOiBcIi8vXCIsXG4gICAgICBuZXR3b3JrczpcbiAgICAgICAgXCJUd2l0dGVyLEZhY2Vib29rLFJlZGRpdCxMaW5rZWRpbixUdW1ibHIsUGludGVyZXN0LFdlaWJvLFdlY2hhdCxEb3ViYW4sUVFab25lLE1haWx0b1wiLFxuICAgICAgaWNvbnM6IFtcbiAgICAgICAgXCJmYSBmYS10d2l0dGVyXCIsXG4gICAgICAgIFwiZmEgZmEtZmFjZWJvb2tcIixcbiAgICAgICAgXCJmYSBmYS1yZWRkaXQtYWxpZW5cIixcbiAgICAgICAgXCJmYSBmYS1saW5rZWRpblwiLFxuICAgICAgICBcImZhIGZhLXR1bWJsclwiLFxuICAgICAgICBcImZhIGZhLXBpbnRlcmVzdFwiLFxuICAgICAgICBcImZhIGZhLXdlaWJvXCIsXG4gICAgICAgIFwiZmEgZmEtd2VpeGluXCIsXG4gICAgICAgIFwiOVwiLFxuICAgICAgICBcImZhIGZhLXFxXCIsXG4gICAgICAgIFwiZmEgZmEtZW52ZWxvcGUtb1wiLFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgLy8gaW50ZWdyYXRlIGN1c3RvbSBvcHRpb25zXG4gICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICByb290Lm9wdGlvbnNbaV0gPSBvcHRpb25zW2ldO1xuICAgIH1cbiAgICAvLyBjb252ZXJ0IG5ldHdvcmtzIHN0cmluZyBpbnRvIGFycmF5XG4gICAgcm9vdC5vcHRpb25zLm5ldHdvcmtzID0gcm9vdC5vcHRpb25zLm5ldHdvcmtzLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIsXCIpO1xuXG4gICAgZnVuY3Rpb24gZ2V0T3B0aW9ucyhlbCkge1xuICAgICAgLy8gaW50ZWdyYXRlIGRhdGEgYXR0cmlidXRlIG9wdGlvbnNcbiAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgIGZvciAodmFyIGkgaW4gcm9vdC5vcHRpb25zKSB7XG4gICAgICAgIHJldFtpXSA9IHJvb3Qub3B0aW9uc1tpXTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhlc2UgYXR0cnMgbXVzdCBnZXQgZHluYW1pY2FsbHkuXG4gICAgICByZXQudXJsID0gcm9vdC5vcHRpb25zLnVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIHJldC50aXRsZSA9IHJvb3Qub3B0aW9ucy50aXRsZSB8fCByb290LmdldFRpdGxlKCk7XG4gICAgICByZXQuaW1hZ2UgPSByb290Lm9wdGlvbnMuaW1hZ2UgfHwgcm9vdC5nZXRJbWFnZSgpO1xuICAgICAgcmV0LmRlc2NyaXB0aW9uID0gcm9vdC5vcHRpb25zLmRlc2NyaXB0aW9uIHx8IHJvb3QuZ2V0RGVzY3JpcHRpb24oKTtcblxuICAgICAgZm9yICh2YXIgb3B0aW9uIGluIGVsLmRhdGFzZXQpIHtcbiAgICAgICAgLy8gcmVwbGFjZSBvbmx5ICdzaGFyZS0nIHByZWZpeGVkIGRhdGEtYXR0cmlidXRlc1xuICAgICAgICBpZiAob3B0aW9uLm1hdGNoKC9zaGFyZS8pKSB7XG4gICAgICAgICAgdmFyIG5ld19vcHRpb24gPSBvcHRpb24ucmVwbGFjZSgvc2hhcmUvLCBcIlwiKTtcbiAgICAgICAgICBpZiAoIW5ld19vcHRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3X29wdGlvbiA9IG5ld19vcHRpb24uY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuZXdfb3B0aW9uLnNsaWNlKDEpO1xuICAgICAgICAgIHZhciB2YWwgPSBlbC5kYXRhc2V0W29wdGlvbl07XG4gICAgICAgICAgaWYgKG5ld19vcHRpb24gPT09IFwibmV0d29ya3NcIikge1xuICAgICAgICAgICAgdmFsID0gdmFsLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmV3X29wdGlvbiA9PT0gXCJ1cmxcIiAmJiB2YWwgJiYgdmFsWzBdID09PSBcIi9cIikge1xuICAgICAgICAgICAgLy8gZml4IHJlbGF0aXZlIHVybCBwcm9ibGVtLlxuICAgICAgICAgICAgdmFsID0gbG9jYXRpb24ub3JpZ2luICsgdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXRbbmV3X29wdGlvbl0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRHJvcGRvd24oZWwpIHtcbiAgICAgIC8vIGNyZWF0ZSBkcm9wZG93blxuICAgICAgdmFyIGRyb3Bkb3duRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lID0gXCJuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93blwiO1xuICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoXCIubmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd25cIikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuXG4gICAgICAvLyBzZXQgZHJvcGRvd24gcm93IGxlbmd0aFxuICAgICAgaWYgKG15b3B0aW9ucy5pY29uU3R5bGUgPT0gXCJib3hcIiAmJiBteW9wdGlvbnMuYm94Rm9ybSA9PSBcImhvcml6b250YWxcIilcbiAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gXCIgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm94LWhvcml6b250YWxcIjtcbiAgICAgIGVsc2UgaWYgKG15b3B0aW9ucy5pY29uU3R5bGUgPT0gXCJib3hcIiAmJiBteW9wdGlvbnMuYm94Rm9ybSA9PSBcInZlcnRpY2FsXCIpXG4gICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9IFwiIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJveC12ZXJ0aWNhbFwiO1xuXG4gICAgICAvLyBzZXQgZHJvcGRvd24gcG9zaXRpb25cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKG15b3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgICAgIGNhc2UgXCJ0b3BMZWZ0XCI6XG4gICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSBcIiBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtbGVmdFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInRvcFJpZ2h0XCI6XG4gICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSBcIiBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi10b3AtcmlnaHRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJ0b3BDZW50ZXJcIjpcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9IFwiIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1jZW50ZXJcIjtcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC1kcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArIFwicHhcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJtaWRkbGVMZWZ0XCI6XG4gICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSBcIiBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1taWRkbGUtbGVmdFwiO1xuICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5Ub3AgPSAtZHJvcGRvd25FbC5vZmZzZXRIZWlnaHQgLyAyICsgXCJweFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm1pZGRsZVJpZ2h0XCI6XG4gICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSBcIiBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1taWRkbGUtcmlnaHRcIjtcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luVG9wID0gLWRyb3Bkb3duRWwub2Zmc2V0SGVpZ2h0IC8gMiArIFwicHhcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJib3R0b21MZWZ0XCI6XG4gICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSBcIiBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tbGVmdFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImJvdHRvbVJpZ2h0XCI6XG4gICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSBcIiBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tcmlnaHRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJib3R0b21DZW50ZXJcIjpcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9IFwiIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1jZW50ZXJcIjtcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC1kcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArIFwicHhcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSBcIiBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tY2VudGVyXCI7XG4gICAgICAgICAgICBkcm9wZG93bkVsLnN0eWxlLm1hcmdpbkxlZnQgPSAtZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyBcInB4XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSwgMSk7XG5cbiAgICAgIC8vIGZpbGwgZnJvcGRvd24gd2l0aCBidXR0b25zXG4gICAgICB2YXIgaWNvbkNsYXNzID1cbiAgICAgICAgbXlvcHRpb25zLmljb25TdHlsZSA9PSBcImRlZmF1bHRcIlxuICAgICAgICAgID8gXCJuZWVkLXNoYXJlLWJ1dHRvbl9saW5rIG5lZWQtc2hhcmUtYnV0dG9uX1wiXG4gICAgICAgICAgOiBcIm5lZWQtc2hhcmUtYnV0dG9uX2xpbmstXCIgK1xuICAgICAgICAgICAgbXlvcHRpb25zLmljb25TdHlsZSArXG4gICAgICAgICAgICBcIiBuZWVkLXNoYXJlLWJ1dHRvbl9saW5rIG5lZWQtc2hhcmUtYnV0dG9uX1wiO1xuICAgICAgbGV0IGZsYWcgPSAwO1xuICAgICAgZm9yICh2YXIgbmV0d29yayBpbiBteW9wdGlvbnMubmV0d29ya3MpIHtcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbmV0d29yayA9IG15b3B0aW9ucy5uZXR3b3Jrc1tuZXR3b3JrXTtcbiAgICAgICAgbGluay5jbGFzc05hbWUgPSBpY29uQ2xhc3MgKyBuZXR3b3JrO1xuICAgICAgICBjb25zb2xlLmxvZyhteW9wdGlvbnMuaWNvbnMubGVuZ3RoKTtcbiAgICAgICAgbGluay5jbGFzc05hbWUgKz0gXCIgXCIgKyBteW9wdGlvbnMuaWNvbnNbZmxhZ107XG4gICAgICAgIGxpbmsuZGF0YXNldC5uZXR3b3JrID0gbmV0d29yaztcbiAgICAgICAgbGluay50aXRsZSA9IG5ldHdvcms7XG4gICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIGZsYWcrKztcbiAgICAgIH1cblxuICAgICAgZHJvcGRvd25FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChjbG9zZXN0KGV2ZW50LnRhcmdldCwgXCIubmVlZC1zaGFyZS1idXR0b25fbGlua1wiKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICByb290LnNoYXJlW2V2ZW50LnRhcmdldC5kYXRhc2V0Lm5ldHdvcmtdKGVsKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBlbC5hcHBlbmRDaGlsZChkcm9wZG93bkVsKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0RWwgPVxuICAgICAgdHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pIDogZWxlbTtcbiAgICBpZiAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmVlZC1zaGFyZS1wYW5lbFwiKSkge1xuICAgICAgY3JlYXRlRHJvcGRvd24odGFyZ2V0RWwpO1xuICAgICAgLy8gdGFyZ2V0RWwuY2xhc3NMaXN0LmFkZCgnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJyk7XG4gICAgfVxuICAgIC8vIGNsb3NlIG9uIGNsaWNrIG91dHNpZGVcbiAgICBlbHNlXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBvcGVuZWRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVlZC1zaGFyZS1idXR0b24tb3BlbmVkXCIpO1xuXG4gICAgICAgIGlmICghY2xvc2VzdChldmVudC50YXJnZXQsIFwiLm5lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZFwiKSkge1xuICAgICAgICAgIGlmIChvcGVuZWRFbCkge1xuICAgICAgICAgICAgb3BlbmVkRWwuY2xhc3NMaXN0LnJlbW92ZShcIm5lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZFwiKTtcblxuICAgICAgICAgICAgLy8gaGlkZSB3ZWNoYXQgY29kZSBpbWFnZSB3aGVuIGNsb3NlIHRoZSBkcm9wZG93bi5cbiAgICAgICAgICAgIGlmIChvcGVuZWRFbC5xdWVyeVNlbGVjdG9yKFwiLm5lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2VcIikpIHtcbiAgICAgICAgICAgICAgb3BlbmVkRWwucXVlcnlTZWxlY3RvcihcIi5uZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBjbG9zZXN0KGV2ZW50LnRhcmdldCwgcm9vdC5lbGVtKTtcbiAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucyhcIm5lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZFwiKSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZURyb3Bkb3duKGVsKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJuZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWRcIik7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIG5ldyBuZWVkU2hhcmVCdXR0b24oXCIubmVlZC1zaGFyZS1idXR0b25cIik7XG59O1xuIl19
