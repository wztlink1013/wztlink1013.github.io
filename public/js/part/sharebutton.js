(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/***********************************************
  needShareButton
  - Version 1.0.0
  - Copyright 2015 Dzmitry Vasileuski
	- Licensed under MIT (http://opensource.org/licenses/MIT)
***********************************************/
var _default = {
  init: function init() {
    this.share();
  },
  share: function share() {
    // find closest
    function closest(elem, parent) {
      if (typeof parent == 'string') {
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
      root.elem = elem || 'need-share-button';
      /* Helpers
      ***********************************************/
      // get title from html

      root.getTitle = function () {
        var content; // check querySelector existance for old browsers

        if (document.querySelector) {
          if (content = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) {
            return content.getAttribute('content');
          } else if (content = document.querySelector('title')) {
            return content.innerText;
          }
        }

        return document.title;
      }; // get image from html


      root.getImage = function () {
        var content; // check querySelector existance for old browsers

        if (document.querySelector) {
          if (content = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) {
            return content.getAttribute('content');
          } else return '';
        } else return '';
      }; // get description from html


      root.getDescription = function () {
        var content; // check querySelector existance for old browsers

        if (document.querySelector) {
          if (content = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) {
            return content.getAttribute('content');
          } else return '';
        } else {
          if (content = document.getElementsByTagName('meta').namedItem('description')) return content.getAttribute('content');else return '';
        }
      }; // share urls for all networks


      root.share = {
        'weibo': function weibo(el) {
          var myoptions = getOptions(el);
          var url = 'http://v.t.sina.com.cn/share/share.php?title=' + encodeURIComponent(myoptions.title) + "&url=" + encodeURIComponent(myoptions.url) + "&pic=" + encodeURIComponent(myoptions.image);
          root.popup(url);
        },
        'wechat': function wechat(el) {
          var myoptions = getOptions(el);
          var imgSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(myoptions.url);
          var dropdownEl = el.querySelector('.need-share-button_dropdown');
          var img = dropdownEl.getElementsByClassName('need-share-wechat-code-image')[0];
          var loader = dropdownEl.getElementsByClassName('need-share-loader')[0];

          if (img) {
            img.remove();
          } else if (loader) {
            loader.remove();
          } else {
            loader = document.createElement('div');
            loader.className = 'need-share-loader';
            loader.innerText = 'loading...';
            loader.title = 'loading qrcode...';
            img = document.createElement('img');
            img.src = imgSrc;
            img.alt = 'Create qrcode failed!';
            img.setAttribute("class", 'need-share-wechat-code-image');

            img.onload = img.onerror = function () {
              if (loader.isConnected) {
                loader.remove();
                dropdownEl.appendChild(img);
              }
            };

            dropdownEl.appendChild(loader);
          }
        },
        'douban': function douban(el) {
          var myoptions = getOptions(el);
          var url = 'https://www.douban.com/share/service?name=' + encodeURIComponent(myoptions.title) + "&href=" + encodeURIComponent(myoptions.url) + "&image=" + encodeURIComponent(myoptions.image);
          root.popup(url);
        },
        'qqzone': function qqzone(el) {
          var myoptions = getOptions(el);
          var url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=' + encodeURIComponent(myoptions.title) + "&url=" + encodeURIComponent(myoptions.url) + "&pics=" + encodeURIComponent(myoptions.image) + "&desc=" + encodeURIComponent(myoptions.description);
          root.popup(url);
        },
        'renren': function renren(el) {
          var myoptions = getOptions(el);
          var url = 'http://widget.renren.com/dialog/share?title=' + encodeURIComponent(myoptions.title) + "&resourceUrl=" + encodeURIComponent(myoptions.url) + "&pic=" + encodeURIComponent(myoptions.image) + "&description=" + encodeURIComponent(myoptions.description);
          root.popup(url);
        },
        'mailto': function mailto(el) {
          var myoptions = getOptions(el);
          var url = 'mailto:?subject=' + encodeURIComponent(myoptions.title) + '&body=Thought you might enjoy reading this: ' + encodeURIComponent(myoptions.url) + ' - ' + encodeURIComponent(myoptions.description);
          window.location.href = url;
        },
        'twitter': function twitter(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'twitter.com/intent/tweet?text=';
          url += encodeURIComponent(myoptions.title) + "&url=" + encodeURIComponent(myoptions.url);
          root.popup(url);
        },
        'pinterest': function pinterest(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'pinterest.com/pin/create/bookmarklet/?is_video=false';
          url += '&media=' + encodeURIComponent(myoptions.image);
          url += '&url=' + encodeURIComponent(myoptions.url);
          url += '&description=' + encodeURIComponent(myoptions.title);
          root.popup(url);
        },
        'facebook': function facebook(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.facebook.com/share.php?';
          url += 'u=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          root.popup(url);
        },
        'googleplus': function googleplus(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'plus.google.com/share?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          root.popup(url);
        },
        'reddit': function reddit(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.reddit.com/submit?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          root.popup(url);
        },
        'delicious': function delicious(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'del.icio.us/post?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          url += '&notes=' + encodeURIComponent(myoptions.description);
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
        'stumbleupon': function stumbleupon(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.stumbleupon.com/submit?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          root.popup(url);
        },
        'linkedin': function linkedin(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.linkedin.com/shareArticle?mini=true';
          url += '&url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          url += '&source=' + encodeURIComponent(myoptions.source);
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
        'posterous': function posterous(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'posterous.com/share?';
          url += 'linkto=' + encodeURIComponent(myoptions.url);
          root.popup(url);
        },
        'tumblr': function tumblr(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.tumblr.com/share?v=3';
          url += '&u=' + encodeURIComponent(myoptions.url);
          url += '&t=' + encodeURIComponent(myoptions.title);
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
        'evernote': function evernote(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.evernote.com/clip.action?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          root.popup(url);
        },
        'friendfeed': function friendfeed(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.friendfeed.com/share?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          root.popup(url);
        },
        'vkontakte': function vkontakte(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'vkontakte.ru/share.php?';
          url += 'url=' + encodeURIComponent(myoptions.url);
          url += '&title=' + encodeURIComponent(myoptions.title);
          url += '&description=' + encodeURIComponent(myoptions.description);
          url += '&image=' + encodeURIComponent(myoptions.image);
          url += '&noparse=true';
          root.popup(url);
        },
        'odnoklassniki': function odnoklassniki(el) {
          var myoptions = getOptions(el);
          var url = myoptions.protocol + 'www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
          url += '&st.comments=' + encodeURIComponent(myoptions.description);
          url += '&st._surl=' + encodeURIComponent(myoptions.url);
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

        var shareWindow = window.open(url, 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=' + popupWidth + ', height=' + popupHeight + ', top=' + top + ', left=' + left); // Puts focus on the newWindow

        if (window.focus) {
          shareWindow.focus();
        }
      };
      /* Set options
      ***********************************************/
      // create default options


      root.options = {
        iconStyle: 'default',
        // default or box
        boxForm: 'horizontal',
        // horizontal or vertical
        position: 'bottomCenter',
        // top / middle / bottom + Left / Center / Right
        protocol: ['http', 'https'].indexOf(window.location.href.split(':')[0]) === -1 ? 'https://' : '//',
        networks: 'Twitter,Facebook,Reddit,Linkedin,Tumblr,Pinterest,Weibo,Wechat,Douban,QQZone,Mailto',
        icons: ['fa fa-twitter', 'fa fa-facebook', 'fa fa-reddit-alien', 'fa fa-linkedin', 'fa fa-tumblr', 'fa fa-pinterest', 'fa fa-weibo', 'fa fa-weixin', '9', 'fa fa-qq', 'fa fa-envelope-o']
      }; // integrate custom options

      for (var i in options) {
        root.options[i] = options[i];
      } // convert networks string into array


      root.options.networks = root.options.networks.toLowerCase().split(',');

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
            var new_option = option.replace(/share/, '');

            if (!new_option.length) {
              continue;
            }

            new_option = new_option.charAt(0).toLowerCase() + new_option.slice(1);
            var val = el.dataset[option];

            if (new_option === 'networks') {
              val = val.toLowerCase().split(',');
            } else if (new_option === 'url' && val && val[0] === '/') {
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
        var dropdownEl = document.createElement('span');
        dropdownEl.className = 'need-share-button_dropdown';

        if (el.querySelector('.need-share-button_dropdown')) {
          return;
        }

        var myoptions = getOptions(el); // set dropdown row length

        if (myoptions.iconStyle == 'box' && myoptions.boxForm == 'horizontal') dropdownEl.className += ' need-share-button_dropdown-box-horizontal';else if (myoptions.iconStyle == 'box' && myoptions.boxForm == 'vertical') dropdownEl.className += ' need-share-button_dropdown-box-vertical'; // set dropdown position

        setTimeout(function () {
          switch (myoptions.position) {
            case 'topLeft':
              dropdownEl.className += ' need-share-button_dropdown-top-left';
              break;

            case 'topRight':
              dropdownEl.className += ' need-share-button_dropdown-top-right';
              break;

            case 'topCenter':
              dropdownEl.className += ' need-share-button_dropdown-top-center';
              dropdownEl.style.marginLeft = -dropdownEl.offsetWidth / 2 + 'px';
              break;

            case 'middleLeft':
              dropdownEl.className += ' need-share-button_dropdown-middle-left';
              dropdownEl.style.marginTop = -dropdownEl.offsetHeight / 2 + 'px';
              break;

            case 'middleRight':
              dropdownEl.className += ' need-share-button_dropdown-middle-right';
              dropdownEl.style.marginTop = -dropdownEl.offsetHeight / 2 + 'px';
              break;

            case 'bottomLeft':
              dropdownEl.className += ' need-share-button_dropdown-bottom-left';
              break;

            case 'bottomRight':
              dropdownEl.className += ' need-share-button_dropdown-bottom-right';
              break;

            case 'bottomCenter':
              dropdownEl.className += ' need-share-button_dropdown-bottom-center';
              dropdownEl.style.marginLeft = -dropdownEl.offsetWidth / 2 + 'px';
              break;

            default:
              dropdownEl.className += ' need-share-button_dropdown-bottom-center';
              dropdownEl.style.marginLeft = -dropdownEl.offsetWidth / 2 + 'px';
              break;
          }
        }, 1); // fill fropdown with buttons

        var iconClass = myoptions.iconStyle == 'default' ? 'need-share-button_link need-share-button_' : 'need-share-button_link-' + myoptions.iconStyle + ' need-share-button_link need-share-button_';
        var flag = 0;

        for (var network in myoptions.networks) {
          var link = document.createElement('span');
          network = myoptions.networks[network];
          link.className = iconClass + network;
          console.log(myoptions.icons.length);
          link.className += ' ' + myoptions.icons[flag];
          link.dataset.network = network;
          link.title = network;
          dropdownEl.appendChild(link);
          flag++;
        }

        dropdownEl.addEventListener('click', function (event) {
          if (closest(event.target, '.need-share-button_link')) {
            event.preventDefault();
            event.stopPropagation();
            root.share[event.target.dataset.network](el);
            return false;
          }
        });
        el.appendChild(dropdownEl);
      }

      var targetEl = typeof elem === 'string' ? document.querySelector(elem) : elem;

      if (targetEl && targetEl.classList.contains('need-share-panel')) {
        createDropdown(targetEl); // targetEl.classList.add('need-share-button-opened');
      } else // close on click outside
        document.addEventListener('click', function (event) {
          var openedEl = document.querySelector('.need-share-button-opened');

          if (!closest(event.target, '.need-share-button-opened')) {
            if (openedEl) {
              openedEl.classList.remove('need-share-button-opened'); // hide wechat code image when close the dropdown.

              if (openedEl.querySelector('.need-share-wechat-code-image')) {
                openedEl.querySelector('.need-share-wechat-code-image').remove();
              }
            } else {
              var el = closest(event.target, root.elem);

              if (el) {
                if (!el.classList.contains('need-share-button-opened')) {
                  createDropdown(el);
                  setTimeout(function () {
                    el.classList.add('need-share-button-opened');
                  }, 1);
                }
              }
            }
          }
        });
    };

    new needShareButton('.need-share-button');
  }
};
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L3NoYXJlYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVlO0FBQ1gsRUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYixTQUFLLEtBQUw7QUFDSCxHQUhVO0FBSVgsRUFBQSxLQUFLLEVBQUUsaUJBQVc7QUFFbEI7QUFDQSxhQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsTUFBdkIsRUFBK0I7QUFDN0IsVUFBSSxPQUFPLE1BQVAsSUFBa0IsUUFBdEIsRUFBZ0M7QUFDeEIsWUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQUwsSUFBZ0IsSUFBSSxDQUFDLHFCQUFyQixJQUE4QyxJQUFJLENBQUMsa0JBQW5ELElBQXlFLElBQUksQ0FBQyxpQkFBcEc7O0FBRUEsWUFBSSxDQUFDLENBQUMsZUFBTixFQUF1QjtBQUNuQixpQkFBTyxJQUFQLEVBQWE7QUFDYixnQkFBSSxlQUFlLENBQUMsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkIsTUFBM0IsQ0FBSixFQUF3QztBQUN0QyxxQkFBTyxJQUFQO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsY0FBQSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQVo7QUFDRDtBQUNBO0FBQ0o7O0FBQ0QsZUFBTyxLQUFQO0FBQ0gsT0FiTCxNQWFXO0FBQ0gsZUFBTyxJQUFQLEVBQWE7QUFDYixjQUFJLElBQUksSUFBSSxNQUFaLEVBQW9CO0FBQ2hCLG1CQUFPLElBQVA7QUFDSCxXQUZELE1BRU87QUFDTCxZQUFBLElBQUksR0FBRyxJQUFJLENBQUMsYUFBWjtBQUNEO0FBQ0E7O0FBQ0QsZUFBTyxLQUFQO0FBQ0g7QUFDSixLQTNCZSxDQTZCaEI7OztBQUNBLElBQUEsTUFBTSxDQUFDLGVBQVAsR0FBeUIs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LENBQUosRUFBNkQ7QUFDekQsZ0JBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsK0JBQXZCLEVBQXdELE1BQXhEO0FBQ0g7QUFDSixhQVBELE1BT087QUFDSCxrQkFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFQLEVBQWUsSUFBSSxDQUFDLElBQXBCLENBQWhCOztBQUNBLGtCQUFJLEVBQUosRUFBUTtBQUNOLG9CQUFJLENBQUMsRUFBRSxDQUFDLFNBQUgsQ0FBYSxRQUFiLENBQXNCLDBCQUF0QixDQUFMLEVBQXdEO0FBQ3RELGtCQUFBLGNBQWMsQ0FBQyxFQUFELENBQWQ7QUFDQSxrQkFBQSxVQUFVLENBQUMsWUFBWTtBQUNuQixvQkFBQSxFQUFFLENBQUMsU0FBSCxDQUFhLEdBQWIsQ0FBaUIsMEJBQWpCO0FBQ0gsbUJBRlMsRUFFUCxDQUZPLENBQVY7QUFJRDtBQUNGO0FBQ0o7QUFDRjtBQUNGLFNBeEJEO0FBMEJILEtBdGZDOztBQXdmRixRQUFJLGVBQUosQ0FBb0Isb0JBQXBCO0FBQ0Q7QUEzaEJZLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgbmVlZFNoYXJlQnV0dG9uXG4gIC0gVmVyc2lvbiAxLjAuMFxuICAtIENvcHlyaWdodCAyMDE1IER6bWl0cnkgVmFzaWxldXNraVxuXHQtIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVClcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2hhcmUoKTtcbiAgICB9LFxuICAgIHNoYXJlOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIGZpbmQgY2xvc2VzdFxuICAgIGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbSwgcGFyZW50KSB7XG4gICAgICBpZiAodHlwZW9mKHBhcmVudCkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoZXNTZWxlY3RvciA9IGVsZW0ubWF0Y2hlcyB8fCBlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yO1xuICBcbiAgICAgICAgICAgICAgaWYgKCEhbWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNTZWxlY3Rvci5iaW5kKGVsZW0pKHBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICBpZiAoZWxlbSA9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIHNoYXJlIGJ1dHRvbiBjbGFzc1xuICAgICAgd2luZG93Lm5lZWRTaGFyZUJ1dHRvbiA9IGZ1bmN0aW9uKGVsZW0sIG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBjcmVhdGUgZWxlbWVudCByZWZlcmVuY2VcbiAgICAgICAgICB2YXIgcm9vdCA9IHRoaXM7XG4gICAgICAgICAgcm9vdC5lbGVtID0gZWxlbSB8fCAnbmVlZC1zaGFyZS1idXR0b24nO1xuICBcbiAgICAgICAgICAvKiBIZWxwZXJzXG4gICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIFxuICAgICAgLy8gZ2V0IHRpdGxlIGZyb20gaHRtbFxuICAgICAgcm9vdC5nZXRUaXRsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBjb250ZW50O1xuICAgICAgICAgIC8vIGNoZWNrIHF1ZXJ5U2VsZWN0b3IgZXhpc3RhbmNlIGZvciBvbGQgYnJvd3NlcnNcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHdpdHRlcjp0aXRsZVwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5pbm5lclRleHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQudGl0bGU7XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBnZXQgaW1hZ2UgZnJvbSBodG1sXG4gICAgICAgIHJvb3QuZ2V0SW1hZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmltYWdlXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBnZXQgZGVzY3JpcHRpb24gZnJvbSBodG1sXG4gICAgICAgIHJvb3QuZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgICAvLyBjaGVjayBxdWVyeVNlbGVjdG9yIGV4aXN0YW5jZSBmb3Igb2xkIGJyb3dzZXJzXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKS5uYW1lZEl0ZW0oJ2Rlc2NyaXB0aW9uJykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICBcbiAgICAgICAgLy8gc2hhcmUgdXJscyBmb3IgYWxsIG5ldHdvcmtzXG4gICAgICAgIHJvb3Quc2hhcmUgPSB7XG4gICAgICAgICAgICAnd2VpYm8nOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3YudC5zaW5hLmNvbS5jbi9zaGFyZS9zaGFyZS5waHA/dGl0bGU9J1xuICAgICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgICArIFwiJnVybD1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgICArIFwiJnBpYz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3dlY2hhdCc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIGltZ1NyYyA9ICdodHRwczovL2FwaS5xcnNlcnZlci5jb20vdjEvY3JlYXRlLXFyLWNvZGUvP3NpemU9MTUweDE1MCZkYXRhPScrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICB2YXIgZHJvcGRvd25FbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bicpO1xuICAgICAgICAgICAgICB2YXIgaW1nID0gZHJvcGRvd25FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZWVkLXNoYXJlLXdlY2hhdC1jb2RlLWltYWdlJylbMF07XG4gICAgICAgICAgICAgIHZhciBsb2FkZXIgPSBkcm9wZG93bkVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25lZWQtc2hhcmUtbG9hZGVyJylbMF07XG4gIFxuICAgICAgICAgICAgICAgIGlmIChpbWcpIHtcbiAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgICB9IGVsc2UgaWYobG9hZGVyKSB7XG4gICAgICAgICAgICBsb2FkZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbG9hZGVyLmNsYXNzTmFtZSA9ICduZWVkLXNoYXJlLWxvYWRlcic7XG4gICAgICAgICAgICBsb2FkZXIuaW5uZXJUZXh0ID0gJ2xvYWRpbmcuLi4nO1xuICAgICAgICAgICAgbG9hZGVyLnRpdGxlID0gJ2xvYWRpbmcgcXJjb2RlLi4uJztcbiAgXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gaW1nU3JjO1xuICAgICAgICAgICAgICAgICAgICBpbWcuYWx0ID0gJ0NyZWF0ZSBxcmNvZGUgZmFpbGVkISc7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwnbmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAobG9hZGVyLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcGRvd25FbC5hcHBlbmRDaGlsZChsb2FkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgJ2RvdWJhbic6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cHM6Ly93d3cuZG91YmFuLmNvbS9zaGFyZS9zZXJ2aWNlP25hbWU9J1xuICAgICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpXG4gICAgICAgICAgICAgICsgXCImaHJlZj1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybClcbiAgICAgICAgICAgICAgKyBcIiZpbWFnZT1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3Fxem9uZSc6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL3Nucy5xem9uZS5xcS5jb20vY2dpLWJpbi9xenNoYXJlL2NnaV9xenNoYXJlX29uZWtleT90aXRsZT0nXG4gICAgICAgICAgICAgICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSlcbiAgICAgICAgICAgICAgKyBcIiZ1cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICsgXCImcGljcz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKVxuICAgICAgICAgICAgICArIFwiJmRlc2M9XCIrIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAncmVucmVuJzogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vd2lkZ2V0LnJlbnJlbi5jb20vZGlhbG9nL3NoYXJlP3RpdGxlPSdcbiAgICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKVxuICAgICAgICAgICAgICArIFwiJnJlc291cmNlVXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKVxuICAgICAgICAgICAgICArIFwiJnBpYz1cIitlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKVxuICAgICAgICAgICAgICArIFwiJmRlc2NyaXB0aW9uPVwiKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgIH0sXG4gIFxuICAgICAgICAgICAgJ21haWx0bycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICdtYWlsdG86P3N1YmplY3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICsgJyZib2R5PVRob3VnaHQgeW91IG1pZ2h0IGVuam95IHJlYWRpbmcgdGhpczogJyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKSArICcgLSAnICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd0d2l0dGVyJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSc7XG4gICAgICAgICAgICAgICAgdXJsICs9IGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpICsgXCImdXJsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BpbnRlcmVzdCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwaW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYm9va21hcmtsZXQvP2lzX3ZpZGVvPWZhbHNlJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZtZWRpYT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZhY2Vib29rJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5mYWNlYm9vay5jb20vc2hhcmUucGhwPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2dvb2dsZXBsdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncGx1cy5nb29nbGUuY29tL3NoYXJlPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdyZWRkaXQnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LnJlZGRpdC5jb20vc3VibWl0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZGVsaWNpb3VzJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ2RlbC5pY2lvLnVzL3Bvc3Q/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZub3Rlcz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAndGFwaXR1cmUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3RhcGl0dXJlLmNvbS9ib29rbWFya2xldC9pbWFnZT8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2ltZ19zcmM9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuaW1hZ2UpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZwYWdlX3RpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgJ3N0dW1ibGV1cG9uJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0Pyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnbGlua2VkaW4nIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmc291cmNlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnNvdXJjZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAnc2xhc2hkb3QnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgLy8gICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgLy8gXHR2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3NsYXNoZG90Lm9yZy9ib29rbWFyay5wbD8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vICd0ZWNobm9yYXRpJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd0ZWNobm9yYXRpLmNvbS9mYXZlcz8nO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJ2FkZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdwb3N0ZXJvdXMnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAncG9zdGVyb3VzLmNvbS9zaGFyZT8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAnbGlua3RvPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndHVtYmxyJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy50dW1ibHIuY29tL3NoYXJlP3Y9Myc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICcmdT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ2dvb2dsZWJvb2ttYXJrcycgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnd3d3Lmdvb2dsZS5jb20vYm9va21hcmtzL21hcms/b3A9ZWRpdCc7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmJrbWs9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgICAgLy8gXHR1cmwgKz0gJyZhbm5vdGF0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gJ25ld3N2aW5lJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cubmV3c3ZpbmUuY29tL190b29scy9zZWVkJnNhdmU/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICd1PScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJmg9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAncGluZ2ZtJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgIC8vIFx0dmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICdwaW5nLmZtL3JlZi8/JztcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICdsaW5rPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgICAvLyBcdHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgICAgICAgICAgIC8vIFx0dXJsICs9ICcmYm9keT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICdldmVybm90ZScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZXZlcm5vdGUuY29tL2NsaXAuYWN0aW9uPyc7XG4gICAgICAgICAgICAgICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gIFxuICAgICAgICAgIHJvb3QucG9wdXAodXJsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZnJpZW5kZmVlZCcgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IG15b3B0aW9ucy5wcm90b2NvbCArICd3d3cuZnJpZW5kZmVlZC5jb20vc2hhcmU/JztcbiAgICAgICAgICAgICAgICB1cmwgKz0gJ3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgICAgIHVybCArPSAnJnRpdGxlPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnRpdGxlKTtcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd2a29udGFrdGUnIDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAndmtvbnRha3RlLnJ1L3NoYXJlLnBocD8nO1xuICAgICAgICAgICAgICAgIHVybCArPSAndXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLnVybCk7XG4gICAgICAgICAgdXJsICs9ICcmdGl0bGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudGl0bGUpO1xuICAgICAgICAgIHVybCArPSAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICB1cmwgKz0gJyZpbWFnZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy5pbWFnZSk7XG4gICAgICAgICAgdXJsICs9ICcmbm9wYXJzZT10cnVlJztcbiAgXG4gICAgICAgICAgcm9vdC5wb3B1cCh1cmwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdvZG5va2xhc3NuaWtpJyA6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgIHZhciBteW9wdGlvbnMgPSBnZXRPcHRpb25zKGVsKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbXlvcHRpb25zLnByb3RvY29sICsgJ3d3dy5vZG5va2xhc3NuaWtpLnJ1L2RrP3N0LmNtZD1hZGRTaGFyZSZzdC5zPTEnO1xuICAgICAgICAgIHVybCArPSAnJnN0LmNvbW1lbnRzPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICB1cmwgKz0gJyZzdC5fc3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy51cmwpO1xuICBcbiAgICAgICAgICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gJ21haWxydScgOiBmdW5jdGlvbihlbCkge1xuICAgICAgICAvLyAgICAgICB2YXIgbXlvcHRpb25zID0gZ2V0T3B0aW9ucyhlbCk7XG4gICAgICAgICAgICAvLyBcdHZhciB1cmwgPSBteW9wdGlvbnMucHJvdG9jb2wgKyAnY29ubmVjdC5tYWlsLnJ1L3NoYXJlPyc7XG4gICAgICAgIC8vICAgdXJsICs9ICd1cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMudXJsKTtcbiAgICAgICAgLy8gICB1cmwgKz0gJyZ0aXRsZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG15b3B0aW9ucy50aXRsZSk7XG4gICAgICAgIC8vICAgdXJsICs9ICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSUNvbXBvbmVudChteW9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyAgIHVybCArPSAnJmltYWdldXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQobXlvcHRpb25zLmltYWdlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICByb290LnBvcHVwKHVybCk7XG4gICAgICAgICAgICAvLyB9XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBvcGVuIHNoYXJlIGxpbmsgaW4gYSBwb3B1cFxuICAgICAgICByb290LnBvcHVwID0gZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHZhciBsZWZ0LCB0b3A7IFxuICBcbiAgICAgICAgdmFyIHBvcHVwV2lkdGggPSA2MDAsXG4gICAgICAgICAgICBwb3B1cEhlaWdodCA9IDUwMDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBjYWN1bGF0ZSBicm93c2VyIHdpbmRvdyB3aWR0aFxuICAgICAgICAvLyBpZiB3aW5kb3cgd2lkdGggaXMgdG9vIG5hcnJvdywgdXNlIHNjcmVlbiB3aWR0aDtcbiAgICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6IHNjcmVlbi53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogc2NyZWVuLmhlaWdodDtcbiAgICAgICAgaWYgKHdpZHRoIDwgNjAwICYmIGhlaWdodCA8IDUwMCkge1xuICAgICAgICAgIGxlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAocG9wdXBXaWR0aCAvIDIpO1xuICAgICAgICAgIHRvcCA9IChzY3JlZW4uaGVpZ2h0IC8gMikgLSAocG9wdXBIZWlnaHQgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzZXQgbGVmdCBhbmQgdG9wIHBvc2l0aW9uXG4gICAgICAgICAgICAgIHZhciBkdWFsU2NyZWVuTGVmdCA9IHdpbmRvdy5zY3JlZW5MZWZ0ICE9IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogc2NyZWVuLmxlZnQsXG4gICAgICAgICAgICBkdWFsU2NyZWVuVG9wID0gd2luZG93LnNjcmVlblRvcCAhPSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogc2NyZWVuLnRvcDtcbiAgICAgICAgICAvLyBjYWxjdWxhdGUgdG9wIGFuZCBsZWZ0IHBvc2l0aW9uXG4gICAgICAgICAgbGVmdCA9ICgod2lkdGggLyAyKSAtIChwb3B1cFdpZHRoIC8gMikpICsgZHVhbFNjcmVlbkxlZnQ7XG4gICAgICAgICAgdG9wID0gKChoZWlnaHQgLyAyKSAtIChwb3B1cEhlaWdodCAvIDIpKSArIGR1YWxTY3JlZW5Ub3A7XG4gICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIHZhciBzaGFyZVdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwndGFyZ2V0V2luZG93JywndG9vbGJhcj1ubyxsb2NhdGlvbj1ubyxzdGF0dXM9bm8sbWVudWJhcj1ubyxzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHdpZHRoPScgKyBwb3B1cFdpZHRoICsgJywgaGVpZ2h0PScgKyBwb3B1cEhlaWdodCArICcsIHRvcD0nICsgdG9wICsgJywgbGVmdD0nICsgbGVmdCk7XG4gICAgICAgICAgICAvLyBQdXRzIGZvY3VzIG9uIHRoZSBuZXdXaW5kb3dcbiAgICAgICAgICBpZiAod2luZG93LmZvY3VzKSB7XG4gICAgICAgICAgICAgIHNoYXJlV2luZG93LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgICAvKiBTZXQgb3B0aW9uc1xuICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBcbiAgICAgICAgICAvLyBjcmVhdGUgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgICAgcm9vdC5vcHRpb25zID0ge1xuICAgICAgICAgICAgICBpY29uU3R5bGU6ICdkZWZhdWx0JywgLy8gZGVmYXVsdCBvciBib3hcbiAgICAgICAgICAgICAgYm94Rm9ybTogJ2hvcml6b250YWwnLCAvLyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tQ2VudGVyJywgLy8gdG9wIC8gbWlkZGxlIC8gYm90dG9tICsgTGVmdCAvIENlbnRlciAvIFJpZ2h0XG4gICAgICAgIHByb3RvY29sOiBbJ2h0dHAnLCAnaHR0cHMnXS5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc6JylbMF0pID09PSAtMSA/ICdodHRwczovLycgOiAnLy8nLFxuICAgICAgICBuZXR3b3JrczogJ1R3aXR0ZXIsRmFjZWJvb2ssUmVkZGl0LExpbmtlZGluLFR1bWJscixQaW50ZXJlc3QsV2VpYm8sV2VjaGF0LERvdWJhbixRUVpvbmUsTWFpbHRvJyxcbiAgICAgICAgaWNvbnM6IFsnZmEgZmEtdHdpdHRlcicsJ2ZhIGZhLWZhY2Vib29rJywnZmEgZmEtcmVkZGl0LWFsaWVuJywnZmEgZmEtbGlua2VkaW4nLCdmYSBmYS10dW1ibHInLCdmYSBmYS1waW50ZXJlc3QnLCdmYSBmYS13ZWlibycsJ2ZhIGZhLXdlaXhpbicsJzknLCdmYSBmYS1xcScsJ2ZhIGZhLWVudmVsb3BlLW8nXVxuICAgICAgICAgIH07XG4gIFxuICAgICAgLy8gaW50ZWdyYXRlIGN1c3RvbSBvcHRpb25zXG4gICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgcm9vdC5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnZlcnQgbmV0d29ya3Mgc3RyaW5nIGludG8gYXJyYXlcbiAgICAgIHJvb3Qub3B0aW9ucy5uZXR3b3JrcyA9IHJvb3Qub3B0aW9ucy5uZXR3b3Jrcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gIFxuICAgICAgZnVuY3Rpb24gZ2V0T3B0aW9ucyhlbCkge1xuICAgICAgICAgIC8vIGludGVncmF0ZSBkYXRhIGF0dHJpYnV0ZSBvcHRpb25zXG4gICAgICAgICAgdmFyIHJldCA9IHt9O1xuICAgICAgICAgIGZvciAodmFyIGkgaW4gcm9vdC5vcHRpb25zKSB7XG4gICAgICAgICAgICByZXRbaV0gPSByb290Lm9wdGlvbnNbaV07XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAvLyB0aGVzZSBhdHRycyBtdXN0IGdldCBkeW5hbWljYWxseS5cbiAgICAgICAgICByZXQudXJsID0gcm9vdC5vcHRpb25zLnVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICByZXQudGl0bGUgPSByb290Lm9wdGlvbnMudGl0bGUgfHwgcm9vdC5nZXRUaXRsZSgpO1xuICAgICAgICAgIHJldC5pbWFnZSA9IHJvb3Qub3B0aW9ucy5pbWFnZSB8fCByb290LmdldEltYWdlKCk7XG4gICAgICAgICAgcmV0LmRlc2NyaXB0aW9uID0gcm9vdC5vcHRpb25zLmRlc2NyaXB0aW9uIHx8IHJvb3QuZ2V0RGVzY3JpcHRpb24oKTtcbiAgXG4gICAgICAgICAgZm9yICh2YXIgb3B0aW9uIGluIGVsLmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgLy8gcmVwbGFjZSBvbmx5ICdzaGFyZS0nIHByZWZpeGVkIGRhdGEtYXR0cmlidXRlc1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5tYXRjaCgvc2hhcmUvKSkge1xuICAgICAgICAgICAgICB2YXIgbmV3X29wdGlvbiA9IG9wdGlvbi5yZXBsYWNlKC9zaGFyZS8sICcnKTtcbiAgICAgICAgICAgICAgaWYgKCFuZXdfb3B0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmV3X29wdGlvbiA9IG5ld19vcHRpb24uY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuZXdfb3B0aW9uLnNsaWNlKDEpO1xuICAgICAgICAgICAgICB2YXIgdmFsID0gZWwuZGF0YXNldFtvcHRpb25dO1xuICAgICAgICAgICAgICBpZiAobmV3X29wdGlvbiA9PT0gJ25ldHdvcmtzJykge1xuICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdfb3B0aW9uID09PSAndXJsJyAmJiB2YWwgJiYgdmFsWzBdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGZpeCByZWxhdGl2ZSB1cmwgcHJvYmxlbS5cbiAgICAgICAgICAgICAgICAgIHZhbCA9IGxvY2F0aW9uLm9yaWdpbiArIHZhbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXRbbmV3X29wdGlvbl0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gIFxuICAgICAgZnVuY3Rpb24gY3JlYXRlRHJvcGRvd24oZWwpIHtcbiAgICAgICAgICAvLyBjcmVhdGUgZHJvcGRvd25cbiAgICAgICAgICB2YXIgZHJvcGRvd25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSA9ICduZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bic7XG4gICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bicpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG15b3B0aW9ucyA9IGdldE9wdGlvbnMoZWwpO1xuICBcbiAgICAgICAgICAvLyBzZXQgZHJvcGRvd24gcm93IGxlbmd0aFxuICAgICAgICAgIGlmIChteW9wdGlvbnMuaWNvblN0eWxlID09ICdib3gnICYmIG15b3B0aW9ucy5ib3hGb3JtID09ICdob3Jpem9udGFsJylcbiAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3gtaG9yaXpvbnRhbCc7XG4gICAgICAgICAgZWxzZSBpZiAobXlvcHRpb25zLmljb25TdHlsZSA9PSAnYm94JyAmJiBteW9wdGlvbnMuYm94Rm9ybSA9PSAndmVydGljYWwnKVxuICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJveC12ZXJ0aWNhbCc7XG4gIFxuICAgICAgICAgIC8vIHNldCBkcm9wZG93biBwb3NpdGlvblxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAobXlvcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tdG9wLWxlZnQnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1yaWdodCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAndG9wQ2VudGVyJzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLXRvcC1jZW50ZXInO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC0gZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ21pZGRsZUxlZnQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tbWlkZGxlLWxlZnQnO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luVG9wID0gLSBkcm9wZG93bkVsLm9mZnNldEhlaWdodCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgJ21pZGRsZVJpZ2h0JzpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLW1pZGRsZS1yaWdodCc7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5Ub3AgPSAtIGRyb3Bkb3duRWwub2Zmc2V0SGVpZ2h0IC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5jbGFzc05hbWUgKz0gJyBuZWVkLXNoYXJlLWJ1dHRvbl9kcm9wZG93bi1ib3R0b20tbGVmdCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAnYm90dG9tUmlnaHQnOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLXJpZ2h0JztcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdib3R0b21DZW50ZXInOlxuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuY2xhc3NOYW1lICs9ICcgbmVlZC1zaGFyZS1idXR0b25fZHJvcGRvd24tYm90dG9tLWNlbnRlcic7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSBkcm9wZG93bkVsLm9mZnNldFdpZHRoIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBkcm9wZG93bkVsLmNsYXNzTmFtZSArPSAnIG5lZWQtc2hhcmUtYnV0dG9uX2Ryb3Bkb3duLWJvdHRvbS1jZW50ZXInO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duRWwuc3R5bGUubWFyZ2luTGVmdCA9IC0gZHJvcGRvd25FbC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LDEpO1xuICBcbiAgXG4gICAgICAgICAgLy8gZmlsbCBmcm9wZG93biB3aXRoIGJ1dHRvbnNcbiAgICAgICAgICB2YXIgaWNvbkNsYXNzID0gbXlvcHRpb25zLmljb25TdHlsZSA9PSAnZGVmYXVsdCcgPyAnbmVlZC1zaGFyZS1idXR0b25fbGluayBuZWVkLXNoYXJlLWJ1dHRvbl8nIDogJ25lZWQtc2hhcmUtYnV0dG9uX2xpbmstJyArIG15b3B0aW9ucy5pY29uU3R5bGUgKyAnIG5lZWQtc2hhcmUtYnV0dG9uX2xpbmsgbmVlZC1zaGFyZS1idXR0b25fJztcbiAgICAgICAgICBsZXQgZmxhZyA9IDA7XG4gICAgICAgICAgZm9yICh2YXIgbmV0d29yayBpbiBteW9wdGlvbnMubmV0d29ya3MpIHtcbiAgICAgICAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICBuZXR3b3JrID0gbXlvcHRpb25zLm5ldHdvcmtzW25ldHdvcmtdO1xuICAgICAgICAgICAgICBsaW5rLmNsYXNzTmFtZSA9IGljb25DbGFzcyArIG5ldHdvcms7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG15b3B0aW9ucy5pY29ucy5sZW5ndGgpO1xuICAgICAgICAgICAgICBsaW5rLmNsYXNzTmFtZSArPSAnICcrbXlvcHRpb25zLmljb25zW2ZsYWddO1xuICAgICAgICAgICAgICBsaW5rLmRhdGFzZXQubmV0d29yayA9IG5ldHdvcms7XG4gICAgICAgICAgICAgIGxpbmsudGl0bGUgPSBuZXR3b3JrO1xuICAgICAgICAgICAgICBkcm9wZG93bkVsLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAgICAgICBmbGFnKys7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBkcm9wZG93bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgaWYgKGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCAnLm5lZWQtc2hhcmUtYnV0dG9uX2xpbmsnKSkge1xuICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgXG4gICAgICAgICAgICAgICAgIHJvb3Quc2hhcmVbZXZlbnQudGFyZ2V0LmRhdGFzZXQubmV0d29ya10oZWwpO1xuICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICBcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkcm9wZG93bkVsKTtcbiAgICAgIH1cbiAgXG4gICAgICB2YXIgdGFyZ2V0RWwgPSB0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pIDogZWxlbTtcbiAgICAgICBpZiAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwuY2xhc3NMaXN0LmNvbnRhaW5zKCduZWVkLXNoYXJlLXBhbmVsJykpIHtcbiAgICAgICAgY3JlYXRlRHJvcGRvd24odGFyZ2V0RWwpO1xuICAgICAgICAvLyB0YXJnZXRFbC5jbGFzc0xpc3QuYWRkKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgICAgIH0gZWxzZSBcbiAgICAgICAgLy8gY2xvc2Ugb24gY2xpY2sgb3V0c2lkZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgdmFyIG9wZW5lZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICBcbiAgICAgICAgICBpZiAoIWNsb3Nlc3QoZXZlbnQudGFyZ2V0LCAnLm5lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAob3BlbmVkRWwpIHtcbiAgICAgICAgICAgICAgICBvcGVuZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCduZWVkLXNoYXJlLWJ1dHRvbi1vcGVuZWQnKTtcbiAgXG4gICAgICAgICAgICAgICAgLy8gaGlkZSB3ZWNoYXQgY29kZSBpbWFnZSB3aGVuIGNsb3NlIHRoZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICBpZiAob3BlbmVkRWwucXVlcnlTZWxlY3RvcignLm5lZWQtc2hhcmUtd2VjaGF0LWNvZGUtaW1hZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuZWRFbC5xdWVyeVNlbGVjdG9yKCcubmVlZC1zaGFyZS13ZWNoYXQtY29kZS1pbWFnZScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gY2xvc2VzdChldmVudC50YXJnZXQsIHJvb3QuZWxlbSk7XG4gICAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnbmVlZC1zaGFyZS1idXR0b24tb3BlbmVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRHJvcGRvd24oZWwpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ25lZWQtc2hhcmUtYnV0dG9uLW9wZW5lZCcpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIFxuICAgIH07XG4gIFxuICAgIG5ldyBuZWVkU2hhcmVCdXR0b24oJy5uZWVkLXNoYXJlLWJ1dHRvbicpO1xuICB9XG59Il19
