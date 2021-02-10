var weiboName = "@尼采般地抒情";
var fromBaidu = /^http(s)?:\/\/(\w+?\.)?baidu.com/.test(document.referrer);

// TODO: 【域名的@和www】
if (window.location.hostname === 'wztlink1013.com') {
  window.location.href = location.url.replace('wztlink1013.com', 'www.wztlink1013.com');
}

// TODO: 【定义寻找变量】
var params = {};
~ function () {
  var search = location.href.split('?')[1];
  search = search && search.split('&') || [];
  for (var i = 0; i < search.length; i++) {
    var m = search[i].split('=');
    if (m && m[0]) {
      params[m[0]] = m[1];
    }
  }
}();

// TODO: 【分享HTML模块】
if (params['share']) {
  $('html').addClass('shareMode');
  $('<p style="color:#555;text-align:right; font-size:14px;" id="authorAppend">文 / 尼采般地抒情</p>').prependTo('.post-content');
} else {
  $('html').removeClass('shareMode');
  $('#authorAppend').remove();
}

// TODO: 【判断来访者的url来源+浏览器】
$(function () {
  var text = '';
  var m = navigator.appVersion.match(/MSIE (\d+)/i);
  m = m && m[1];
  if (fromBaidu) {
    // text = "您还在使用百度搜索，珍爱生命，请远离百度！<a href='javascript:void(0);' class='close'>关闭</a>";
  }
  if (m && m < 10) {
    text = "更好的阅读体验，请使用最新版的 Chrome / Edge 浏览器。<a href='javascript:void(0);' class='close'>关闭</a>";
  }
  if (text && !$('html').attr('loaded')) {
    $(".rainbow").addClass('notice').html(text).hide().fadeIn();
  }
});

// TODO: 【判断https】

// if (window.location.protocol == 'https:') {
//   $("img").each(function () {
//     var src = $(this).attr('src');
//     if (/ww1.sinaimg.cn/.test(src)) {
//       $(this).attr('src', src.replace('ww1.', 'www.'));
//     }
//   });
// }

// TODO: 【Notifications API 的通知接口用于向用户配置和显示桌面通知。】
function notify(notice) {
  if (!("Notification" in window)) {
    // window.console && console.warn("浏览器不支持提醒");
  } else if (Notification.permission === "granted") {
    var notification = new Notification(notice.title, notice);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        var notification = new Notification(notice.title, notice);
      }
    });
  }

  if (notification) {
    notification.onclick = function () {
      if (notice.url) {
        window.open(notice.url);
      } else {
        $('.chatroom-fold .chatroom-info').trigger('click');
        window.focus();
      }
      notification.close();
    }
  }
}

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
// TODO: 【jQuery知识】
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape...
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }
    try {
      // Replace server-side written pluses with spaces.
      // If we can't decode the cookie, ignore it, it's unusable.
      // If we can't parse the cookie, ignore it, it's unusable.
      s = decodeURIComponent(s.replace(pluses, ' '));
      return config.json ? JSON.parse(s) : s;
    } catch (e) {}
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }
  var config = $.cookie = function (key, value, options) {
    if (value !== undefined && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);
      if (typeof options.expires === 'number') {
        var days = options.expires,
          t = options.expires = new Date();
        t.setTime(+t + days * 864e+5);
      }
      return (document.cookie = [
        encode(key), '=', stringifyCookieValue(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path ? '; path=' + options.path : '',
        options.domain ? '; domain=' + options.domain : '',
        options.secure ? '; secure' : ''
      ].join(''));
    }
    var result = key ? undefined : {};
    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all. Also prevents odd result when
    // calling $.cookie().
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = parts.join('=');
      if (key && key === name) {
        // If second argument (value) is a function it's a converter...
        result = read(cookie, value);
        break;
      }
      // Prevent storing a cookie that we couldn't decode.
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }
    return result;
  };
  config.defaults = {};
  $.removeCookie = function (key, options) {
    if ($.cookie(key) === undefined) {
      return false;
    }
    // Must not alter options, thus extending a fresh object...
    $.cookie(key, '', $.extend({}, options, {
      expires: -1
    }));
    return !$.cookie(key);
  };
}));

var log = function (msg) {
  console && console.log && console.log(msg);
};
// TODO: 【模板引擎】
var tplEngine = function (tpl, data) {
  var reg = /<%([^%>]+)?%>/g,
    regOut = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
    code = 'var r=[];\n',
    cursor = 0;

  var add = function (line, js) {
    js ? (code += line.match(regOut) ? line + '\n' : 'r.push(' + line + ');\n') :
      (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
    return add;
  }
  while (match = reg.exec(tpl)) {
    add(tpl.slice(cursor, match.index))(match[1], true);
    cursor = match.index + match[0].length;
  }
  add(tpl.substr(cursor, tpl.length - cursor));
  code += 'return r.join("");';
  return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
};
// TODO: 【移动设备侦测】
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

// TODO: 【主要代码1】
var operation = {
  init: function () {
    var $this = this;
    this.forceShowLazyloadImages();
    this.wechat();
    this.fontChange();
    this.toTop();
    this.share();
    this.footerNav();
    this.bind();
    this.tips();
    // this.insertWeibo();
    // $(window).on('load', function () {
    //   setTimeout(function () {
    //     $this.loadChangyanCount();
    //   }, 3E3);
    // });
    this.initSearch();
  },
  // FIXME: 懒加载，图片可以换
  forceShowLazyloadImages: function() {
    if (this._forceShowImageTimer) clearTimeout(this._forceShowImageTimer);
    this._forceShowImageTimer = setTimeout(() => {
      document.querySelectorAll('.post-content img[data-original]').forEach(function(item) {
        const src = item.getAttribute('src');
        if (src && src.indexOf('//img.alicdn.com/tfs/TB1oyqGa_tYBeNjy1XdXXXXyVXa-300-300.png') > -1) {
          const original = item.getAttribute('data-original');
          console.log('Load Image: %s', original);
          item.setAttribute('src', original);
        }
      });
    }, 10E3);
  },
  // FIXME: 音乐
  runMusic: function () {
    var $box = $('.post-content .music');
    if (!params['share'] && !isMobile.any() && $box.size() && window.NM) {
      var id = $box.attr('data-id');
      id && NM.start(+id, function () {
        $("#nmPlayer").css({
          position: 'static',
          margin: '40px auto',
          width: '80%',
          cursor: 'default'
        }).off();
        var index = $box.attr('data-index');
        index && window._ap.setMusic(+index);
        $box.append($("#nmPlayer")).show();
        window._ap.play();
      });
    }
  },
  // FIXME: 搜索
  initSearch: function() {
    if ($('.local-search').size() && !isMobile.any()) {
      $.getScript('/public/js/search.js', function() {
        searchFunc("/search.xml", 'local-search-input', 'local-search-result');
      });
    }
  },

  // FIXME: 微信里面的提示
  wechat: function () {
    var isWeiXin = /MicroMessenger/i.test(navigator.userAgent);
    var $ctt = $(".article .post-content");
    // $('.wechat-info').remove();
    var wechatStr = '<div class="wechat-info"><b>温馨提示：</b>您现在处在 <span class="wechat-net">WiFi</span>' +
      ' 网络下。若文章表述存在问题，可点击右下角留言框，或者直接给尼采般地抒情 <span class="wechat-email">邮件 ← 点击</span>。</div>';
    if (isWeiXin) {
      $(".alipay, .wechatpay i").hide();
      $(".wechatpay b").css('display', 'block');
    }
    if (!$ctt.length || !isWeiXin || $('.wechat-info').size() || window._showWeChatBox) return;
    window._showWeChatBox = true;
    var urls = [];
    $(".post img").each(function () {
      urls.push($(this).attr('data-original') || $(this).attr('src'));
    });
    $.getScript("/public/js/wechat.js", function () {
      $ctt.prepend(wechatStr);
      wechat('network', function (res) {
        var network = res.err_msg.split(':')[1];
        network = network == 'wifi' ? 'wifi' : network == 'wwan' ? '4g' : '5g';
        $(".wechat-net").text(network);
      });
      $(".wechat-email").on("click", function () {
        var data = {
          app: '',
          img: function () {
            var $imgs = $(".post-content img");
            return $imgs.length > 2 ? $imgs.eq(1).attr("src") : '';
          },
          link: window.location.href,
          // desc: $(".ds-share").attr("data-content").replace(/<[^>]*?>/gmi, ""),
          desc: '文章链接地址：',
          title: $('.post-title').text()
        };
        wechat('email', data, function () {});
      });
      $(".post img").on('click', function () {
        wechat('imagePreview', {
          current: $(this).attr('data-original') || $(this).attr('src'),
          urls: urls
        });
      });

      var data = {
        'debug': false,
        'app': 'wxddd17adddf433070',    // 选填，默认为空
        'img': 'https://cdn.jsdelivr.net/gh/wztlink1013/cdn-pictures@1.0.1/avatar/pic/MilkTea.png',
        'link': window.location.href,
        'desc': $('meta[name="description"]').attr('content'),
        'title': $('.post-title').text()
      };
      var callback = function() {};

      wechat('friend', data, callback);           // 朋友
      wechat('timeline', data, callback);         // 朋友圈
      wechat('weibo', data, callback);            // 微博
    });
  },
  // FIXME: 欢迎访客？
  welcome: function () {
    var self = this;
    var visitor = $.cookie("visitor");

    function getNamefailed() {
      var userinfo = {};
      try {
        userinfo = JSON.parse($.cookie("visitor_history"));
      } catch (e) {}
      if (userinfo.id && userinfo.name && userinfo.avatar) {
        var htmlStr = makeHtml(userinfo.name, userinfo.avatar);
        self.alertMsg(htmlStr);
      }
    }

    function makeHtml(name, avatar) {
      return "<img class='alert-avatar' src='" + avatar + "'>" + name + ", 欢迎回来~";
    }

    if (visitor) {
      try {
        var userinfo = JSON.parse($.cookie("visitor"));
      } catch (e) {}
      if (userinfo.id && userinfo.name && userinfo.avatar) {
        return;
      }
    }

    $.removeCookie("visitor");
  },
  // FIXME: 加载畅言
  // reloadChangyan: function () {
  //   delete window.changyan;
  //   delete window.cyan;
  //   $.getScript('https://changyan.sohu.com/upload/changyan.js', function () {
  //     try {
  //       window.changyan.api.config({
  //         appid: 'cyuNYQOX7',
  //         conf: '97d154a54b3006d5dd823b82262c5e05'
  //       });
  //     } catch (e) {}
  //   });
  // },
  // FIXME: 插入微博卡片
  // insertWeibo: function () {
  //   var htmlStr = '<iframe width="330" height="350" class="share_self"  frameborder="0" scrolling="no" src="//widget.weibo.com/weiboshow/index.php?language=&width=330&height=350&fansRow=1&ptype=1&speed=0&skin=1&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=3456263867&verifier=73dc4ca5&dpc=1"></iframe>';
  //   if (/\/blog\//.test(window.location.href) && !isMobile.any() && ($(window).width() > 992) && !$(".rightbar-frame iframe").size()) {
  //     // $(window).on("load", function() {
  //     var $ifr = $(".rightbar-frame");
  //     if (!$ifr.find('iframe').size()) {
  //       $(window).on('load', function () {
  //         $ifr.css("background", "none").append(htmlStr);
  //       });
  //     }
  //     // });
  //   }
  //   if (isMobile.any()) {
  //     $(".rightbar-frame").remove()
  //   }
  // },
  // FIXME:
  alertMsg: function (msg, tag) {
    if (!msg) return;
    if (tag && 'Notification' in window) {
      notify(msg);
      return;
    }
    var $msg = $(".alertInfo").size() ? $(".alertInfo") : $("<div class='alertInfo'></div>").appendTo($("body"));
    $msg = $($msg);
    $msg.html(msg).css("right", "-9999").animate({
      right: 20
    }, 800);
    clearTimeout(window._alert_timer);
    window._alert_timer = setTimeout(function () {
      $msg.animate({
        right: -9999
      }, 800);
    }, 3000);
  },
  // FIXME: 提示tips？
  tips: function () {
    var htmlStr = [
      '<div class="arrow-tips">',
      '  <h5>小建议: </h5>',
      '  <span class="close">x</span>',
      '  <ul>',
      '    <li><code>shift+alt+↑</code>: 回到顶部</li>',
      '    <li><code>shift+alt+↓</code>: 去评论</li>',
      '    <li><code>shift+alt+←</code>: 上一篇</li>',
      '    <li><code>shift+alt+→</code>: 下一篇</li>',
      '  </ul>',
      '</div>'
    ].join("\n");
    if (isMobile.any() || $.cookie("tips_readed") || $(".post-title").size() == 0) return;
    $("body").append(htmlStr);
    $(document).on("click", ".arrow-tips .close", function () {
      $.cookie("tips_readed", true, {
        expires: 8,
        path: "/"
      });
      $(".arrow-tips").remove();
    });
  },
  // FIXME:
  bind: function () {
    var self = this;
    $(".notice .close").on("click", function (evt) {
      evt.preventDefault();
      $(".notice").removeClass("notice");
    });
    !$(".post").size() && $(".sharecanvas").hide();

    var hash = window.location.hash;
    if (hash && $(hash).size()) {
      $('body').animate({
        scrollTop: $(hash).offset().top
      });
    }
    if (/#comments/.test(window.location.href)) {
      var $target = $(".footer-nav a").eq(0);
      !$target.attr("id") && $target.trigger("click");
    }
    $(window).on("load", function () {
      var hash = window.location.hash;
      if (hash && hash === "#comments") {
        $(".hash-to-comments").trigger("click");
      }
    });
    $(".to-comments").on("click", function (evt) {
      evt.preventDefault();
      $(".hash-to-comments").trigger("click");
    });
    $(".hash-to-comments").on("click", function (evt) {
      evt.preventDefault();
      var $target = $(".footer-nav a").eq(0);
      !$target.attr("id") && $target.trigger("click");
      if (/#comments/.test(window.location.href)) {
        window.location.href = window.location.href;
      } else {
        window.location.hash = "#comments";
      }
    });
    if ($(".local-search-google").size()) {
      var $input = $(".local-search-google input");
      // $input.on("change", function (evt) {
      //   var val = $.trim($input.val());
      //   if (val && (evt.which == 13 || evt.type == 'change')) {
      //     window.open('//www.google.com.hk/search?q=site:www.barretlee.com ' + val);
      //   }
      // });
      $(".local-search-google i").on("click", function () {
        var val = $.trim($input.val());
        if (val) {
          window.open('//www.google.com.hk/search?q=site:www.wztlink1013.com ' + val);
        }
      });
    }
    // $(window).on("resize", function () {
    //   self.insertWeibo();
    // });
    $(window).on("keydown", function (evt) {
      if (evt.shiftKey && evt.altKey) {
        if (evt.keyCode == 39) { // right
          var href = $(".page-relative-fixed .next").attr("href");
          if (href) {
            (window.location.href = href);
          } else {
            self.alertMsg("已经是最后一篇文章了~");
          }
        }
        if (evt.keyCode == 37) { // left
          var href = $(".page-relative-fixed .prev").attr("href");
          if (href) {
            (window.location.href = href);
          } else {
            self.alertMsg("已经是第一篇文章了~");
          }
        }
        if (evt.keyCode == 38) { // top
          window.scrollTo(0, 0);
        }
        var $target = $(".footer-nav a").eq(0);
        !$target.attr("id") && $target.trigger("click");
        if (evt.keyCode == 40) { // down
          if (/#comments/.test(window.location.href)) {
            window.location.href = window.location.href;
          } else {
            window.location.hash = "#comments";
          }
        }
        $.cookie("tips_readed", true, {
          expires: 8,
          path: "/"
        });
        // shift + alt + o
        if (evt.keyCode === 79 && /blog\/(\d+\/){3}/.test(window.location.pathname)) {
          var path = window.location.pathname.slice(6, -1).replace(/\//g, "-") + ".md";
          var jumpUrl = "https://github.com/wztlink1013/blog/edit/master/blog/src/_posts/" + path;
          window.open(jumpUrl);
        }
      }
    });
  },
  // FIXME: 
  isIE: function (num) {
    var name = navigator.appVersion.toUpperCase();
    return num ? name.match(/MSIE (\d)/) && name.match(/MSIE (\d)/)[1] == num : /MSIE (\d)/.test(name);
  },

  // FIXME: 底部tab切换
  footerNav: function () {
    $(".footer-nav a").on("click", function (evt) {

      evt.preventDefault();

      var index = $(this).index();
      $(".footer-nav a").removeAttr("id");
      $(this).attr("id", "comments");

      $(".nav-detail>div").hide().eq(index).fadeIn();
    });
    setTimeout(() => {
      if (!$(".footer-nav a").eq(0).attr('id') !== 'comments') {
        $(".footer-nav a").eq(0).trigger("click");
      }
    }, 6 * 1E3);
    $(".relative-to-comment").on("click", function () {
      $(".footer-nav a").eq(0).trigger("click");
    });
  },
  // FIXME: 分享微博、豆瓣、twitter
  share: function (title) {
    var local = location.href,
      title = $(".post-title").text() && ("文章《" + weiboName + " " + $(".post-title").text() + "》");

    if (!title) title += "好站分享 " + weiboName + " ";
    try{
      title += $("meta[property='og:description']").attr("content").slice(0, 95);
    } catch (e){}

    $("#share-weibo").off().on("click", function () {
      var url = "http://service.weibo.com/share/share.php?appkey=3456263867&title=" +
        title + "&url=" + local + "&searchPic=false&style=simple"; // &pic=a.jpg;

      operation._shareWin(url);
    });
    $("#share-tencent").off().on("click", function () {
      var url = "http://share.v.t.qq.com/index.php?c=share&a=index&url=" +
        local + "&title=" + title;
      operation._shareWin(url);
    });
    // $("#share-qzone").off().on("click", function(){
    //     var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+
    //     local + "&title=" + title;
    //     operation._shareWin(url);
    // });
    $("#share-twitter").off().on("click", function () {
      var url = "http://twitter.com/share?url=" + local + "&text=" + title + "&related=barret_china"
      operation._shareWin(url);
    });
    $("#share-douban").off().on("click", function () {
      var url = "http://www.douban.com/recommend/?url=" + local + "&title=" + title + "&v=1"
      operation._shareWin(url);
    });
  },
  // FIXME: 分享2.0
  _shareWin: function (r) {
    var d = document;
    var x = function () {
      if (!window.open(r, 'share', 'toolbar=0,status=0,resizable=1,scrollbars=yes,status=1,width=440,height=430,left=' + (screen.width - 440) / 2 + ',top=' + (screen.height - 430) / 2)) return;
    };
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(x, 0)
    } else {
      x()
    }
  },
  // FIXME: 回到顶部 
  toTop: function () {
    var $toTop = $(".gotop");

    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= $(window).height()) {
        $toTop.css("display", "block").fadeIn();
      } else {
        $toTop.fadeOut();
      }
    });

    $toTop.on("click", function (evt) {
      var $obj = $("body,html");
      $obj.animate({
        scrollTop: 0
      }, 240);

      evt.preventDefault();
    });
  },

  // FIXME: 字体修改
  fontChange: function () {
    $(".font-type").on("click", function () {
      $(this).parent().find("a")
        .toggleClass("font-type-song")
        .toggleClass("font-type-hei");

      $("body").toggleClass("post-font-song");
    });
    $(".bg-type").on("click", function () {
      $(this).parent().find("a")
        .toggleClass("font-type-song")
        .toggleClass("font-type-hei");

      $("body").toggleClass("body-bg-moon");
    });
  }
};

// TODO: 【主要代码2】
var decoration = {
  init: function () {
    this.initNav();
    this.consoleCtt();
    this.menuIndex($('.post'));
    this.navTurner();
    this.sidebarNav();
  },
  // FIXME: 初始化
  initNav: function () {
    var self = this;
    var $nav = $('.arrow-expend');
    if (!$nav.length || !$nav.find("li").length) return;
    var $ul = $nav.find("ul");
    $nav.show().on("mouseenter", function () {
      clearTimeout(self.arrowTimer);
      $ul.slideDown(300);
    }).on("click", function (evt) {
      clearTimeout(self.arrowTimer);
      evt.stopPropagation();
      $ul.slideToggle(300);
    });
    $("body").on("click touchstart", function (evt) {
      clearTimeout(self.arrowTimer);
      var $target = $(evt.target);
      if ($target.hasClass("arrow-expend") || $target.parent(".arrow-expend").length) {
        // ...
      } else {
        self.arrowTimer = setTimeout(function () {
          $ul.slideUp(300);
        }, 300);
      }
    });
    if (!$(".container .article").length) return;
    if (window.innerHeight <= 550) {
      $ul.slideUp(300);
    }
    $(window).on("resize", function () {
      clearTimeout(self.arrowTimer);
      if (window.innerHeight > 550) {
        $ul.slideDown(300);
      } else {
        $ul.slideUp(300);
      }
    });
  },
  // FIXME: console 简介
  consoleCtt: function () {
    if (window.console && window.console.log && !window.consoled) {
      window.consoled = true;
      // var url = "//" + window.location.host;
      // console.log("\n\n\n\n\n\n\n\n\n\n%c", "background:url('" + url + "/blogimgs/avatar150.png'); background-repeat:no-repeat; font-size:0; line-height:30px; padding-top:150px;padding-left:150px;");
      console.log("\n欢迎来到尼采般地抒情博客，热爱生活，热爱技术。%c\n\n联系方式: https://wztlink1013.com/about/", "color:red");
    }
  },
  // FIXME: 鼠标移动添加效果
  sidebarNav: function () {
    var left = 48;
    if (operation.isIE()) {
      left = 90;
    }
    $(".sidebar").mouseenter(function () {
      $(this).addClass("sidebar-hover");
    }).mouseleave(function () {
      $(this).removeClass("sidebar-hover");
    });
    $(".func-item").mouseenter(function () {
      $(this).children("div").css({
        "left": left,
        "opacity": "0",
        "display": "block"
      }).clearQueue().show().stop().animate({
        "left": left - 15,
        "opacity": "1"
      }, "fast");
    }).mouseleave(function () {
      $(this).children("div").stop().delay().animate({
        "left": left,
        "opacity": "0"
      }, "fast", function () {
        $(this).hide()
      });
    });
  },
  // FIXME: 目录
  menuIndex: function ($obj) {
    // $('h2', $obj).length >= 1 && !isMobile.any()
    if ($('h2', $obj).length >= 1) {
      var h2 = [],
        h3 = [],
        tmpl = '<ul>',
        h2index = 0;

      $.each($('h2,h3', $obj), function (index, item) {
        if (item.tagName.toLowerCase() == 'h2') {
          var h2item = {};
          h2item.name = $(item).text();
          h2item.id = 'menuIndex' + index;
          h2.push(h2item);
          h2index++;
        } else {
          var h3item = {};
          h3item.name = $(item).text();
          h3item.id = 'menuIndex' + index;
          if (!h3[h2index - 1]) {
            h3[h2index - 1] = [];
          }
          h3[h2index - 1].push(h3item);
        }
        item.id = 'menuIndex' + index
      });

      //添加h1
      // tmpl += '<li class="h1"><a href="#" data-top="0">' + $('h1').text() + '</a></li>';
      tmpl += '<li class="h1"><a style="color:red" href="#" data-top="0">'+'文章目录：</a></li>';

      for (var i = 0; i < h2.length; i++) {
        tmpl += '<li><a style="font-weight:bold;" href="#" data-id="' + h2[i].id + '">' + h2[i].name + '</a></li>';
        if (h3[i]) {
          for (var j = 0; j < h3[i].length; j++) {
            tmpl += '<li class="h3"><a href="#" data-id="' + h3[i][j].id + '">' + h3[i][j].name + '</a></li>';
          }
        }
      }
      tmpl += '</ul>';

      $('body').append('<div id="menuIndex"></div>');
      $('#menuIndex').append($(tmpl)).delegate('a', 'click', function (e) {
        e.preventDefault();
        var scrollNum = $(this).attr('data-top') || $('#' + $(this).attr('data-id')).offset().top;
        //window.scrollTo(0,scrollNum-30);
        $('body, html').animate({
          scrollTop: scrollNum - 30
        }, 400, 'swing');
      }) /*.append("<a href='javascript:void(0);' onclick='return false;' class='menu-unfold'>&gt;</a>");*/

      $(window).load(function () {
        var scrollTop = [];
        $.each($('#menuIndex li a'), function (index, item) {
          if (!$(item).attr('data-top')) {
            var top = $('#' + $(item).attr('data-id')).offset().top;
            scrollTop.push(top);
            $(item).attr('data-top', top);
          }
        });

        var waitForFinalEvent = (function () {
          var timers = {};
          return function (callback, ms, uniqueId) {
            if (!uniqueId) {
              uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
              clearTimeout(timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
          };
        })();

        $(window).scroll(function () {
          waitForFinalEvent(function () {
            var nowTop = $(window).scrollTop(),
              index, length = scrollTop.length;
            if (nowTop + 60 > scrollTop[length - 1]) {
              index = length
            } else {
              for (var i = 0; i < length; i++) {
                if (nowTop + 60 <= scrollTop[i]) {
                  index = i
                  break;
                }
              }
            }
            $('#menuIndex li').removeClass('on')
            $('#menuIndex li').eq(index).addClass('on')
          })
        });
      });

      //用js计算屏幕的高度
      $('#menuIndex').css('max-height', $(window).height() - 80);
    }
  },

  // FIXME: 导航栏开关
  navTurner: function () {
    if ($("#menuIndex a").size() < 3) {
      $(".func-nav").parent().find("a")
        .text("首").parents(".func-item").off().on("click", function () {
          window.location.href = "/";
        });
      $(".func-nav span").text("首");
    } else {
      $(".func-nav").parent().on("click", function () {
        $("#menuIndex").slideToggle();
        var text = $(this).find("a").text() == "开" ? "关" : "开";
        $(this).find("a").text(text);
      });
    }
  },
  // FIXME: 重新加载下面的评论
  refreshComments: function () {
    var ret = {};
    $(".ds-comment-body p").each(function () {
      var text = $(this).text();
      if (new RegExp("\\/_p(\\d+)_t(\\d)").test(text)) {
        if (ret[RegExp.$1]) {
          ret[RegExp.$1]++;
        } else {
          ret[RegExp.$1] = 1;
        }
      }
    });
    $(".post-content>p").each(function (i) {
      if (ret[i]) {
        var $cmt = $(this).find(".a-comments");
        if (!$cmt.attr("data-num")) {
          $cmt.attr("data-num", ret[i]).addClass("a-comments_on");
        }
      }
    });
  }
};

// TODO: 【应该是高亮 highlight】
$(function () {
  // 初始化项目
  operation.init();
  decoration.init();
  $(".highlight").parent(".highlight").removeClass("highlight");
  $("code").removeClass("highlight").each(function () {
    var $hasB = $(this).parent(".highlight");
    var $hasP = $(this).parent("pre");
    if (!$hasB.size() && $hasP.size()) {
      $hasP.wrap("<div class='highlight'></div>");
    }
  });
});

window.alert = function () {};

// TODO: 【加载微博、百度统计、百度收录、360收录、谷歌分析】
$(window).on("load", function () {

  // var $wb = $("#followMeOnWeibo");
  // if ($wb.size() > 0 && !$wb.attr("loaded")) {
  //   $wb.parent().on("mouseenter", function () {
  //     $wb.parent().off();
  //     $wb.attr("loaded", 1);
  //     // weibo
  //     $("html").attr("xmlns:wb", "http://open.weibo.com/wb");
  //     $("head").append('<script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" type="text/javascript" charset="utf-8"></script>');
  //     $("#followMeOnWeibo").html('<wb:follow-button uid="3456263867" type="red_1" width="67" height="24" style="vertical-align:middle;display:inline-block" ></wb:follow-button>');
  //   });
  // }
    // 百度统计
  setTimeout(function () {
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?b819e86dad79c7cee0956aa7c5ba504b";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    // 百度收录，自动推送
    // (function () {
    //   var bp = document.createElement('script');
    //   var curProtocol = window.location.protocol.split(':')[0];
    //   if (curProtocol === 'https') {
    //     bp.src = '//zz.bdstatic.com/linksubmit/push.js';
    //   } else {
    //     bp.src = '//push.zhanzhang.baidu.com/push.js';
    //   }
    //   var s = document.getElementsByTagName("script")[0];
    //   s.parentNode.insertBefore(bp, s);
    // })();
    // 搜狗收录，自动推送，不能用，用了就网页白屏
    // (function(){
    //   var src = "https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba";
    //   document.write('<script src="' + src + '" id="sozz"><\/script>');
    //   })();
    // 谷歌分析
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-158896181-1', 'auto');
    ga('send', 'pageview');
  }, 2000);
});


// TODO: 【网站内部图像和文章给你内容等等】
$(function () {
  var $layer = $("<div/>").css({
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    zIndex: 9,
    background: "#000",
    opacity: "0.6",
    display: "none"
  }).attr("data-id", "b_layer");
  var cloneImg = function ($node) {
    var left = $node.offset().left;
    var top = $node.offset().top - $(window).scrollTop();
    var nodeW = $node.width();
    var nodeH = $node.height();
    return $node.clone().css({
      position: "fixed",
      width: nodeW,
      height: nodeH,
      left: left,
      top: top,
      zIndex: 10
    });
  };
  var justifyImg = function ($c) {
    var dW = $(window).width();
    var dH = $(window).height();
    $c.css("cursor", "move").attr("data-b-img", 1);
    var img = new Image();
    img.onload = function () {
      var width = this.width >= dW - 18 ? dW - 18 : this.width;
      var height = this.height / this.width * width;
      $c.stop().animate({
        width: width,
        height: height,
        left: (dW - width) / 2,
        top: (dH - height) / 2
      }, 300);
    };
    img.src = $c.attr("src");
  };

  $(".post-content img, .pay img, .site-avatar img, .follow-wechat img, .about-wechart")
    .css("cursor", "zoom-in").off().on("click", function (evt) {
      if (isMobile.any()) {
        return;
      }
      // if($(this).parent("a").size()) {
      //   return;
      // }
      evt.preventDefault();
      evt.stopPropagation();
      var $b = $("body");
      $layer.appendTo($b);
      $layer.fadeIn(300);
      var $c = cloneImg($(this));
      $c.appendTo($b);
      justifyImg($c);
    }).each(function () {
      // if($(this).parent("a").size()) {
      //   $(this).css('cursor', 'inherit');
      //   return;
      // }
    });

  var timer = null;
  $(window).on("resize", function () {
    $("img[data-b-img]").each(function () {
      var $this = $(this);
      timer && clearTimeout(timer);
      timer = setTimeout(function () {
        justifyImg($this);
      }, 10);
    });
  });

  var $body = $("body");
  var moving = false;
  $body.on("mousedown touchstart", "img[data-b-img]", function (evt) {
    evt.stopImmediatePropagation();
    var $target = $(evt.target);
    var oX = evt.pageX;
    var oY = evt.pageY;
    $target.prop("draggable", false);
    $body.on("mousemove touchmove", function (evt) {
      evt.stopImmediatePropagation();
      moving = true;
      var dX = evt.pageX - oX;
      var dY = evt.pageY - oY;
      oX = evt.pageX;
      oY = evt.pageY;
      $target.css({
        left: "+=" + dX,
        top: "+=" + dY
      });
    });
    $body.on("mouseup mouseleave touchend touchcancel", function (evt) {
      evt.stopImmediatePropagation();
      setTimeout(function () {
        moving = false;
      }, 300);
      $target.removeProp("draggable");
      $body.off("mousemove mouseup mouseleave touchmove touchend touchcancel");
    });
  });

  $(window).on("click keydown touchstart", function (evt) {
    if (moving) return;
    if (evt.type == "keydown" && evt.keyCode === 27) {
      $layer.fadeOut(300);
      $("img[data-b-img]").remove();
    }
    var $this = $(evt.target);
    if ($this.attr("data-id") == "b_layer" || $this.attr("data-b-img") == 1) {
      $layer.fadeOut(300);
      $("img[data-b-img]").remove();
    } else if ($("img[data-b-img]").size()) {
      $layer.fadeOut(300);
      $("img[data-b-img]").remove();
    }
  });
});


// TODO: 【点击头像，图像流】
(function () {

  function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  var $flyzone;

  function flyzone() {
    if (!$flyzone) {
      $flyzone = $("<div>").attr("id", "flyzone").prependTo(document.body);
    }

    return $flyzone;
  }

  var sizes = ["smaller", "small", "medium", "large", "fat"];

  var sizeDimensions = {
    "smaller": 40,
    "small": 70,
    "medium": 90,
    "large": 120,
    "fat": 200
  };

  function randomOpacity(threshold) {
    var opacity = Math.random();

    while (opacity < threshold) {
      opacity = Math.random();
    }

    return opacity;
  }

  function makeLarry(sizeName, speed) {
    var size = sizeDimensions[sizeName];
    var top = Math.floor((flyzone().height() - size) * Math.random());

    var $img = $("<img>")
      .addClass("larry size-" + sizeName)
      .attr("src", "/blogimgs/avatar150.png")
      .attr({
        "tabindex": "0",
        "aria-hidden": "true"
      })
      .attr("width", size)
      .attr("height", size)
      .css({
        position: "absolute",
        opacity: randomOpacity(0.4),
        top: top,
        left: -size + 15
      });

    $img.prependTo(flyzone());

    var left = flyzone().width() + size;

    $img.animate({
      left: left
    }, speed, function () {
      $img.remove();
      makeRandomLarry();
    });

    return $img;
  }

  function makeRandomLarry() {
    var size = randomItem(sizes);
    var speed = Math.floor(Math.random() * 20000) + 15000;
    return makeLarry(size, speed);
  }

  $(function () {
    $("#indexLogo").click(function () {
      makeRandomLarry();
    });
    $(".home-box h2 a").click(function (evt) {
      evt.preventDefault();
      makeRandomLarry();
      return false;
    });
  });

  var match = (/\blarry(=(\d+))?\b/i).exec(window.location.search);
  if (match) {
    var n = parseInt(match[2]) || 20;
    $(function () {
      for (var i = 0; i < n; ++i) {
        setTimeout(makeRandomLarry, Math.random() * n * 500);
      }
    });
  }
})();


// TODO: 【卜算子计数热度===用了之后网页加载很慢！！】
$(function () {
  var bszTag = {
    bszs: ["site_pv", "page_pv", "site_uv"],
    texts: function (a) {
      this.bszs.map(function (b) {
        var c = document.getElementById("busuanzi_value_" + b);
        c && (c.innerHTML = a[b])
      })
    },
    hides: function () {
      this.bszs.map(function (a) {
        var b = document.getElementById("busuanzi_container_" + a);
        b && (b.style.display = "none")
      })
    },
    shows: function () {
      this.bszs.map(function (a) {
        var b = document.getElementById("busuanzi_container_" + a);
        b && (b.style.display = "inline")
      })
    }
  };

  $(window).on('load', function () {
    setTimeout(function() {
      $.ajax({
        url: "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",
        dataType: 'jsonp',
        jsonp: 'jsonpCallback',
        success: function (a) {
          bszTag.texts(a), bszTag.shows()
        }
      });
    }, 2000);
  });
});

// TODO: valine评论
new Valine({
  el: '#vcomments',
  appId: 'X2vVvvzKTQiW2smqmeTSdaX7-gzGzoHsz',
  appKey: 'eLj5sRf1iOMf8SL8me8IJtdM',
  placeholder: '小伙伴也可以填写上述信息用Valine评论',
  meta: ['nick','mail','link'],
  avatar: 'robohash',
  pageSize: 5,
  highlight: true,
  recordIP: true,
  visitor: true
})
