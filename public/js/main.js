!function n(i,r,c){function a(t,e){if(!r[t]){if(!i[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(l)return l(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}o=r[t]={exports:{}},i[t][0].call(o.exports,function(e){return a(i[t][1][e]||e)},o,o.exports,n,i,r,c)}return r[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)a(c[e]);return a}({1:[function(e,t,o){"use strict";function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;function n(){"none"===a.css("display")?($("#arrow_left i:first-child").css({display:"inline-block"}),$("#arrow_left i:last-child").css({display:"none"})):($("#arrow_left i:first-child").css({display:"none"}),$("#arrow_left i:last-child").css({display:"inline-block"})),"none"===l.css("display")?($("#arrow_right i:first-child").css({display:"inline-block"}),$("#arrow_right i:last-child").css({display:"none"})):($("#arrow_right i:first-child").css({display:"none"}),$("#arrow_right i:last-child").css({display:"inline-block"}))}var r=$("#arrow_left"),c=$("#arrow_right"),a=$(".ct_left"),l=$(".ct_right"),s=$(".ct_center"),u=$(".container"),d=$(".header_pc"),p=$(".header_app"),m=$("#btn_app_sider"),f=$("#btn_app_right"),y=$("#app_side_glass"),h=$("#app_side_content"),w=0,g=function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function")}var t,o,n;return t=e,(o=[{key:"init",value:function(){b(),v(),k(),_()}}])&&i(t.prototype,o),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),b=(o.default=g,function(){r.click(function(){("none"===a.css("display")?($("#arrow_left i:first-child").css({display:"none"}),$("#arrow_left i:last-child").css({display:"inline-block"}),a.css("display","block"),"none"===l.css("display")?C:S):($("#arrow_left i:first-child").css({display:"inline-block"}),$("#arrow_left i:last-child").css({display:"none"}),a.css("display","none"),"none"===l.css("display")?q:I))()}),c.click(function(){("none"===l.css("display")?($("#arrow_right i:first-child").css({display:"none"}),$("#arrow_right i:last-child").css({display:"inline-block"}),l.css("display","block"),"none"===a.css("display")?I:S):($("#arrow_right i:first-child").css({display:"inline-block"}),$("#arrow_right i:last-child").css({display:"none"}),l.css("display","none"),"none"===a.css("display")?q:C))()})}),v=function(){m.click(function(){y.css({display:"block"}),h.css({display:"block"}),w=window.scrollY,u.css({position:"fixed",top:-w+"px"})}),y.click(function(){y.css({display:"none"}),h.css({display:"none"}),u.css({position:"",top:""}),window.scrollTo(0,w)}),f.click(function(){})},k=function(){var e,t,o=a.css("display"),n=l.css("display");localStorage.hasOwnProperty("layout")?(t=window.localStorage.getItem("layout"),console.log("Layout: have cache"),("LR"===t?S:"L"===t?C:"R"===t?I:"C"===t?q:S)()):(console.log("Layout: no cache"),"block"===o&&"none"===n?e="L":"none"===o&&"block"===n?e="R":"block"===o&&"block"===n?e="LR":(e="LR",S()),window.localStorage.setItem("layout",e))},_=function(){var e=[window.matchMedia("(max-width: 560px)"),window.matchMedia("(max-width: 980px)"),window.matchMedia("(max-width: 1261px)")];function t(){e[0].matches?L():e[1].matches?R():e[2].matches?T():console.log("Layout: > setting sizing")}t();for(var o=0;o<e.length;o++)e[o].addListener(t)},S=function(){u.css({width:"95%"}),s.css({width:"60%"}),a.css({width:"20%",display:"block"}),l.css({width:"20%",display:"block"}),n(),localStorage.hasOwnProperty("layout")?(window.localStorage.removeItem("layout"),window.localStorage.setItem("layout","LR"),console.log("Layout: ",localStorage.getItem("layout"))):window.localStorage.setItem("layout","LR")},C=function(){u.css({width:"80%"}),s.css({width:"75%"}),a.css({width:"25%"}),a.css("display","block"),l.css("display","none"),n(),localStorage.hasOwnProperty("layout")?(window.localStorage.removeItem("layout"),window.localStorage.setItem("layout","L"),console.log("Layout: ",localStorage.getItem("layout"))):window.localStorage.setItem("layout","L")},I=function(){u.css({width:"80%"}),l.css({width:"25%"}),s.css({width:"75%"}),a.css("display","none"),l.css("display","block"),n(),localStorage.hasOwnProperty("layout")?(window.localStorage.removeItem("layout"),window.localStorage.setItem("layout","R"),console.log("Layout: ",localStorage.getItem("layout"))):window.localStorage.setItem("layout","R")},q=function(){u.css({width:"75%"}),s.css({width:"100%"}),a.css("display","none"),l.css("display","none"),n(),localStorage.hasOwnProperty("layout")?(window.localStorage.removeItem("layout"),localStorage.setItem("layout","C"),console.log("Layout: ",localStorage.getItem("layout"))):window.localStorage.setItem("layout","C")},L=function(){console.log("Layout: < 560px"),d.css({display:"none"}),p.css({display:"block"}),u.css({width:"98%"}),s.css({width:"100%"}),a.css("display","none"),l.css("display","none")},R=function(){console.log("Layout: < 980px"),d.css({display:"none"}),p.css({display:"block"}),u.css({width:"96%"}),s.css({width:"100%"}),a.css("display","none"),l.css("display","none")},T=function(){console.log("Layout: < 1261px"),"none"===a.css("display")?($("#arrow_left i:first-child").css({display:"inline-block"}),$("#arrow_left i:last-child").css({display:"none"})):($("#arrow_left i:first-child").css({display:"none"}),$("#arrow_left i:last-child").css({display:"inline-block"})),"none"===l.css("display")?($("#arrow_right i:first-child").css({display:"inline-block"}),$("#arrow_right i:last-child").css({display:"none"})):($("#arrow_right i:first-child").css({display:"none"}),$("#arrow_right i:last-child").css({display:"inline-block"})),d.css({display:"block"}),p.css({display:"none"}),u.css({width:"95%"}),s.css({width:"60%"}),a.css({width:"20%",display:"block"}),l.css({width:"20%",display:"block"})}},{}],2:[function(e,t,o){"use strict";function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function")}var t,o,n;return t=e,(o=[{key:"init",value:function(){setTimeout(function(){for(var e=document.querySelectorAll(".artcle_list_item_img"),t=0;t<e.length;t++){var o=e[t].firstElementChild.width+5,n=e[t].firstElementChild.height+7;e[t].style.maxWidth=o+"px",e[t].style.maxHeight=n+"px"}},1e3)}}])&&i(t.prototype,o),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();o.default=n},{}],3:[function(e,t,o){"use strict";function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function")}var t,o,n;return t=e,(o=[{key:"init",value:function(){r(),c()}}])&&i(t.prototype,o),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),r=(o.default=n,function(){document.querySelectorAll(".category-list-item").forEach(function(e){var t,o,n=e.querySelector("a").nextElementSibling;n.innerHTML=" ["+n.innerHTML+"]",e.querySelector(".category-list-child")?(e.querySelector("ul").style.display="none",(t=document.createElement("span")).style.display="inline",t.style.cursor="pointer",t.innerHTML='<i class="fa fa-plus-square-o" aria-hidden="true"></i> ',e.insertBefore(t,e.querySelector("a")),(o=document.createElement("span")).style.display="none",o.style.cursor="pointer",o.innerHTML='<i class="fa fa-minus-square-o" aria-hidden="true"></i> ',e.insertBefore(o,e.querySelector("a")),t.addEventListener("click",function(){t.style.display="none",o.style.display="inline",e.querySelector("ul").style.display="block"}),o.addEventListener("click",function(){o.style.display="none",t.style.display="inline",e.querySelector("ul").style.display="none"})):((n=document.createElement("span")).style.display="inline",n.style.paddingLeft="15px",n.innerHTML="",e.insertBefore(n,e.querySelector("a")))})}),c=function(){if("/archives/"===location.pathname)for(var e=location.search.substr(1).split("=")[1],t=document.querySelectorAll(".archive_article_list"),o=0;o<t.length;o++)for(var n=0;n<t[o].children.length;n++){var i=t[o].children[n].getAttribute("data-index");(i="dsal"===i?"blog":i)!==e&&(t[o].children[n].style.display="none")}}},{}],4:[function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");twikoo.init({envId:"https://twikoo.wztlink1013.com/",el:"#tcomment",onCommentLoaded:function(){console.log("Twikoo: all comments loaded")}}).then(function(){console.log("Twikoo: mount finished")})}var t,o,n;return t=e,(o=[{key:"init",value:function(){c(),a(),l(),s(),u()}}])&&i(t.prototype,o),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),c=(o.default=r,function(){document.querySelector("#comments")&&(document.querySelector("#go_comments").style.display="block")}),a=function(){function e(e){"https://giscus.wztlink1013.com"===e.origin&&"object"===n(e.data)&&e.data.giscus&&(e=e.data.giscus,console.log("Giscus: iframe comment data",e))}window.addEventListener("message",e),console.log("Giscus: message logic"),window.removeEventListener("message",e)},l=function(){var t,e;document.querySelector("#comments")&&document.querySelector("#twikoo_comments")&&(t=document.querySelector("#twikoo_comments"),e=[location.pathname],twikoo.getCommentsCount({envId:"https://twikoo.wztlink1013.com/",urls:e,includeReply:!1}).then(function(e){t.innerText=e[0].count}).catch(function(e){console.error(e)}))},s=function(){var u=document.querySelector(".hot_articles_item");twikoo.getRecentComments({envId:"https://twikoo.wztlink1013.com/",pageSize:8,includeReply:!1}).then(function(e){var t=document.querySelector(".new_comments_loding");t.parentElement.removeChild(t);for(var o,n,i,r,c,a,l,s=0;s<8;s++)e[s].comment&&(o=e[s].comment,n=e[s].nick,i=e[s].url,r=e[s].avatar,c=e[s].relativeTime,a="#"+e[s].id,(l=document.createElement("li")).innerHTML='<div class="item_up"><img src="'+r+'" class="avatar"><div class="nick_name"><span class="nick">'+n+'</span><span class="time">'+c+'</span></div></div><div class="item_down"><a href="'+i+a+'">'+o+"</a></div>",u.append(l))}).catch(function(e){console.error(e)})},u=function(){var e,t,o;document.querySelector("#switch_btn")&&(e=document.querySelector("#switch_btn"),t=document.querySelector("#github_comment"),o=document.querySelector("#twikoo_comment"),e.addEventListener("click",function(){e.classList.toggle("move"),t.classList.toggle("content-in"),o.classList.toggle("content-in"),"none"===t.style.display?(t.style.display="block",o.style.display="none"):(t.style.display="none",o.style.display="block")}))}},{}],5:[function(e,t,o){"use strict";function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");this.goTopBtn=null,document.getElementById("go_top")&&(this.goTopBtn=document.getElementById("go_top"))}var t,o,n;return t=e,(o=[{key:"init",value:function(){this.goTopBtn&&(r(this.goTopBtn),c(this.goTopBtn))}}])&&i(t.prototype,o),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),r=(o.default=n,function(e){window.onscroll=function(){e.style.display=0===a().top?"none":"block"}}),c=function(e){var r=null;e.onclick=function(){cancelAnimationFrame(r);var o=+new Date,n=document.body.scrollTop||document.documentElement.scrollTop,i=n;r=requestAnimationFrame(function e(){var t=500-Math.max(0,o-+new Date+500);document.documentElement.scrollTop=document.body.scrollTop=t*-i/500+n,r=requestAnimationFrame(e),500==t&&cancelAnimationFrame(r)})}},a=function(){return{top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}}},{}],6:[function(e,t,o){"use strict";function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function")}var t,o,n;return t=e,(o=[{key:"init",value:function(){r()}}])&&i(t.prototype,o),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),r=(o.default=n,function(){var l=document.querySelector("#local-search-input");l&&(l.onclick=function(){l.disabled=!0,t(),this.onclick=null},l.onkeydown=function(){if(13==event.keyCode)return!1});function e(e,t,o){var i="<div id='local-search-close'>清空搜索</div>",r=document.getElementById(t),c=document.getElementById(o),a=new XMLHttpRequest;a.open("GET",e,!0),a.send(),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){r.disabled=!1,r.focus();for(var e=a.responseXML.documentElement.getElementsByTagName("entry"),t=[],o=e.length-1;0<=o;o--){var n=e[o];t.push({title:n.getElementsByTagName("title")[0].innerHTML,content:n.getElementsByTagName("content")[0].innerHTML,url:n.getElementsByTagName("url")[0].innerHTML})}r.addEventListener("input",function(){var e,u='<ul class="archive">',d=this.value.trim().toLowerCase().split(/[\s\-]+/);c.innerHTML="",this.value.trim().length<=0||(t.forEach(function(e){var o,n,i=!0,t=(e.title&&""!==e.title.trim()||(e.title="Untitled"),e.title.trim()),r=t.toLowerCase(),c=e.content.trim().replace(/<[^>]+>/g,""),a=c.toLowerCase(),e=e.url,l=-1,s=-1;""!==a?d.forEach(function(e,t){o=r.indexOf(e),l=a.indexOf(e),o<0&&l<0?i=!1:(l<0&&(l=0),0==t&&(s=l))}):i=!1,i&&(u+="<li><a target='_blank' href="+e+" ><span class='archive-title' >"+t+"</span>",0<=s&&(e=s+30,(e=0==(t=(t=s-10)<0?0:t)?40:e)>c.length&&(e=c.length),n=c.substr(t,200),d.forEach(function(e){var t=new RegExp(e,"gi");n=n.replace(t,'<em class="search-keyword">'+e+"</em>")}),u+='<p class="search-result">'+n+"...</p>"),u+="</a></li>")}),-1===(u+="</ul>").indexOf("<li>")?c.innerHTML=i+"<div class='local-search-empty'>没有找到你所要搜索的内容……</div>":c.innerHTML=i+u,e=c,document.querySelector("#local-search-close").onclick=function(){l.value="",e.innerHTML="",l.placeholder="请输入关键词",l.focus()})})}}}var t=function(){e("/search.xml","local-search-input","local-search-result")},o=document.querySelector("#search_btn");document.querySelector("#search_btn_pc")&&document.querySelector("#search_btn_pc").addEventListener("click",function(){"block"===document.querySelector(".search_box").style.display?document.querySelector(".search_box").style.display="none":document.querySelector(".search_box").style.display="block"}),o.addEventListener("click",function(){"block"===document.querySelector(".search_box").style.display?document.querySelector(".search_box").style.display="none":document.querySelector(".search_box").style.display="block"}),document.querySelector(".search_close").addEventListener("click",function(){"block"===document.querySelector(".search_box").style.display?document.querySelector(".search_box").style.display="none":document.querySelector(".search_box").style.display="block"})})},{}],7:[function(e,t,o){"use strict";function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function")}var t,o,n;return t=e,(o=[{key:"init",value:function(){r()}}])&&i(t.prototype,o),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),r=(o.default=n,function(){function s(e,t){if("string"==typeof t){var o=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;if(o)for(;e;){if(o.bind(e)(t))return e;e=e.parentElement}}else for(;e;){if(e==t)return e;e=e.parentElement}return!1}window.needShareButton=function(e,t){var o,a=this;for(o in a.elem=e||"need-share-button",a.getTitle=function(){var e;if(document.querySelector){if(e=document.querySelector('meta[property="og:title"]')||document.querySelector('meta[name="twitter:title"]'))return e.getAttribute("content");if(e=document.querySelector("title"))return e.innerText}return document.title},a.getImage=function(){var e;return document.querySelector&&(e=document.querySelector('meta[property="og:image"]')||document.querySelector('meta[name="twitter:image"]'))?e.getAttribute("content"):""},a.getDescription=function(){var e;return document.querySelector?(e=document.querySelector('meta[property="og:description"]')||document.querySelector('meta[name="twitter:description"]')||document.querySelector('meta[name="description"]'))?e.getAttribute("content"):"":(e=document.getElementsByTagName("meta").namedItem("description"))?e.getAttribute("content"):""},a.share={weibo:function(e){e=l(e),e="http://v.t.sina.com.cn/share/share.php?title="+encodeURIComponent(e.title)+"&url="+encodeURIComponent(e.url)+"&pic="+encodeURIComponent(e.image);a.popup(e)},wechat:function(e){var t=l(e),t="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+encodeURIComponent(t.url),o=e.querySelector(".need-share-button_dropdown"),n=o.getElementsByClassName("need-share-wechat-code-image")[0],i=o.getElementsByClassName("need-share-loader")[0];n?n.remove():i?i.remove():((i=document.createElement("div")).className="need-share-loader",i.innerText="loading...",i.title="loading qrcode...",(n=document.createElement("img")).src=t,n.alt="Create qrcode failed!",n.setAttribute("class","need-share-wechat-code-image"),n.onload=n.onerror=function(){i.isConnected&&(i.remove(),o.appendChild(n))},o.appendChild(i))},douban:function(e){e=l(e),e="https://www.douban.com/share/service?name="+encodeURIComponent(e.title)+"&href="+encodeURIComponent(e.url)+"&image="+encodeURIComponent(e.image);a.popup(e)},qqzone:function(e){e=l(e),e="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title="+encodeURIComponent(e.title)+"&url="+encodeURIComponent(e.url)+"&pics="+encodeURIComponent(e.image)+"&desc="+encodeURIComponent(e.description);a.popup(e)},renren:function(e){e=l(e),e="http://widget.renren.com/dialog/share?title="+encodeURIComponent(e.title)+"&resourceUrl="+encodeURIComponent(e.url)+"&pic="+encodeURIComponent(e.image)+"&description="+encodeURIComponent(e.description);a.popup(e)},mailto:function(e){e=l(e),e="mailto:?subject="+encodeURIComponent(e.title)+"&body=Thought you might enjoy reading this: "+encodeURIComponent(e.url)+" - "+encodeURIComponent(e.description);window.location.href=e},twitter:function(e){var e=l(e),t=e.protocol+"twitter.com/intent/tweet?text=";t+=encodeURIComponent(e.title)+"&url="+encodeURIComponent(e.url),a.popup(t)},pinterest:function(e){var e=l(e),t=e.protocol+"pinterest.com/pin/create/bookmarklet/?is_video=false",t=(t=(t+="&media="+encodeURIComponent(e.image))+("&url="+encodeURIComponent(e.url)))+("&description="+encodeURIComponent(e.title));a.popup(t)},facebook:function(e){var e=l(e),t=e.protocol+"www.facebook.com/share.php?",t=(t+="u="+encodeURIComponent(e.url))+("&title="+encodeURIComponent(e.title));a.popup(t)},googleplus:function(e){var e=l(e),t=e.protocol+"plus.google.com/share?";t+="url="+encodeURIComponent(e.url),a.popup(t)},reddit:function(e){var e=l(e),t=e.protocol+"www.reddit.com/submit?",t=(t+="url="+encodeURIComponent(e.url))+("&title="+encodeURIComponent(e.title));a.popup(t)},delicious:function(e){var e=l(e),t=e.protocol+"del.icio.us/post?",t=(t=(t+="url="+encodeURIComponent(e.url))+("&title="+encodeURIComponent(e.title)))+("&notes="+encodeURIComponent(e.description));a.popup(t)},stumbleupon:function(e){var e=l(e),t=e.protocol+"www.stumbleupon.com/submit?",t=(t+="url="+encodeURIComponent(e.url))+("&title="+encodeURIComponent(e.title));a.popup(t)},linkedin:function(e){var e=l(e),t=e.protocol+"www.linkedin.com/shareArticle?mini=true",t=(t=(t+="&url="+encodeURIComponent(e.url))+("&title="+encodeURIComponent(e.title)))+("&source="+encodeURIComponent(e.source));a.popup(t)},posterous:function(e){var e=l(e),t=e.protocol+"posterous.com/share?";t+="linkto="+encodeURIComponent(e.url),a.popup(t)},tumblr:function(e){var e=l(e),t=e.protocol+"www.tumblr.com/share?v=3",t=(t+="&u="+encodeURIComponent(e.url))+("&t="+encodeURIComponent(e.title));a.popup(t)},evernote:function(e){var e=l(e),t=e.protocol+"www.evernote.com/clip.action?",t=(t+="url="+encodeURIComponent(e.url))+("&title="+encodeURIComponent(e.title));a.popup(t)},friendfeed:function(e){var e=l(e),t=e.protocol+"www.friendfeed.com/share?",t=(t+="url="+encodeURIComponent(e.url))+("&title="+encodeURIComponent(e.title));a.popup(t)},vkontakte:function(e){var e=l(e),t=e.protocol+"vkontakte.ru/share.php?",t=(t=(t=(t+="url="+encodeURIComponent(e.url))+("&title="+encodeURIComponent(e.title)))+("&description="+encodeURIComponent(e.description)))+("&image="+encodeURIComponent(e.image));a.popup(t+="&noparse=true")},odnoklassniki:function(e){var e=l(e),t=e.protocol+"www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1",t=(t+="&st.comments="+encodeURIComponent(e.description))+("&st._surl="+encodeURIComponent(e.url));a.popup(t)}},a.popup=function(e){var t,o=window.innerWidth||document.documentElement.clientWidth||screen.width,n=window.innerHeight||document.documentElement.clientHeight||screen.height,n=(o=o<600&&n<500?(t=screen.width/2-300,screen.height/2-250):(t=o/2-300+(null!=window.screenLeft?window.screenLeft:screen.left),n/2-250+(null!=window.screenTop?window.screenTop:screen.top)),window.open(e,"targetWindow","toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600, height=500, top="+o+", left="+t));window.focus&&n.focus()},a.options={iconStyle:"default",boxForm:"horizontal",position:"bottomCenter",protocol:-1===["http","https"].indexOf(window.location.href.split(":")[0])?"https://":"//",networks:"Twitter,Facebook,Reddit,Linkedin,Tumblr,Pinterest,Weibo,Wechat,Douban,QQZone,Mailto",icons:["fa fa-twitter","fa fa-facebook","fa fa-reddit-alien","fa fa-linkedin","fa fa-tumblr","fa fa-pinterest","fa fa-weibo","fa fa-weixin","9","fa fa-qq","fa fa-envelope-o"]},t)a.options[o]=t[o];function l(e){var t,o,n,i,r={};for(t in a.options)r[t]=a.options[t];for(o in r.url=a.options.url||window.location.href,r.title=a.options.title||a.getTitle(),r.image=a.options.image||a.getImage(),r.description=a.options.description||a.getDescription(),e.dataset)o.match(/share/)&&(n=o.replace(/share/,"")).length&&(n=n.charAt(0).toLowerCase()+n.slice(1),i=e.dataset[o],"networks"===n?i=i.toLowerCase().split(","):"url"===n&&i&&"/"===i[0]&&(i=location.origin+i),r[n]=i);return r}function n(t){var e=document.createElement("span");if(e.className="need-share-button_dropdown",!t.querySelector(".need-share-button_dropdown")){var o=l(t),n=("box"==o.iconStyle&&"horizontal"==o.boxForm?e.className+=" need-share-button_dropdown-box-horizontal":"box"==o.iconStyle&&"vertical"==o.boxForm&&(e.className+=" need-share-button_dropdown-box-vertical"),setTimeout(function(){switch(o.position){case"topLeft":e.className+=" need-share-button_dropdown-top-left";break;case"topRight":e.className+=" need-share-button_dropdown-top-right";break;case"topCenter":e.className+=" need-share-button_dropdown-top-center",e.style.marginLeft=-e.offsetWidth/2+"px";break;case"middleLeft":e.className+=" need-share-button_dropdown-middle-left",e.style.marginTop=-e.offsetHeight/2+"px";break;case"middleRight":e.className+=" need-share-button_dropdown-middle-right",e.style.marginTop=-e.offsetHeight/2+"px";break;case"bottomLeft":e.className+=" need-share-button_dropdown-bottom-left";break;case"bottomRight":e.className+=" need-share-button_dropdown-bottom-right";break;default:e.className+=" need-share-button_dropdown-bottom-center",e.style.marginLeft=-e.offsetWidth/2+"px"}},1),"default"==o.iconStyle?"need-share-button_link need-share-button_":"need-share-button_link-"+o.iconStyle+" need-share-button_link need-share-button_"),i=0;for(c in o.networks){var r=document.createElement("span"),c=o.networks[c];r.className=n+c,console.log(o.icons.length),r.className+=" "+o.icons[i],r.dataset.network=c,r.title=c,e.appendChild(r),i++}e.addEventListener("click",function(e){if(s(e.target,".need-share-button_link"))return e.preventDefault(),e.stopPropagation(),a.share[e.target.dataset.network](t),!1}),t.appendChild(e)}}a.options.networks=a.options.networks.toLowerCase().split(",");e="string"==typeof e?document.querySelector(e):e;e&&e.classList.contains("need-share-panel")?n(e):document.addEventListener("click",function(e){var t,o=document.querySelector(".need-share-button-opened");s(e.target,".need-share-button-opened")||(o?(o.classList.remove("need-share-button-opened"),o.querySelector(".need-share-wechat-code-image")&&o.querySelector(".need-share-wechat-code-image").remove()):(t=s(e.target,a.elem))&&!t.classList.contains("need-share-button-opened")&&(n(t),setTimeout(function(){t.classList.add("need-share-button-opened")},1)))})},new needShareButton(".need-share-button")})},{}],8:[function(e,t,o){"use strict";function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");this.tocContainer=document.querySelector(".toc_container"),this.tocBtn=document.querySelector("#toc_btn")}var t,o,n;return t=e,(o=[{key:"init",value:function(){var e=this;this.tocBtn.addEventListener("click",function(){"none"!==e.tocContainer.style.display&&"block"===e.tocContainer.style.display?e.tocContainer.style.display="none":e.tocContainer.style.display="block"})}}])&&i(t.prototype,o),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();o.default=n},{}],9:[function(e,t,o){"use strict";var i=n(e("./_common/Layout.js")),r=n(e("./_part/Toc.js")),c=n(e("./_part/Comment.js")),a=n(e("./_part/GoTop.js")),l=n(e("./_part/Search.js")),s=n(e("./_part/Share.js")),u=n(e("./_part/Category.js")),d=n(e("./_part/ArticleListImg"));function n(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var m=function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");this.goTop=new a.default,this.toc=new r.default,this.search=new l.default,this.comment=new c.default,this.share=new s.default,this.categories=new u.default,this.layout=new i.default,this.articleListImg=new d.default}var t,o,n;return t=e,(o=[{key:"init",value:function(){this.layout.init(),this.goTop.init(),this.toc.init(),this.search.init(),this.comment.init(),this.share.init(),this.categories.init(),this.articleListImg.init()}}])&&p(t.prototype,o),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();$(function(){var e=new m;console.log("lyrics script main: ",e),e.init();try{new Typed(".blogger-descript",{strings:["什么都不舍弃，什么也改变不了。"],startDelay:0,typeSpeed:200,backSpeed:100,loop:!0,loopCount:1,showCursor:!0,shuffle:!1})}catch(e){console.log("blogger descript type font error: ",e)}$(document).pjax(".btn_link_a, .post-list-prev-page a, .post-list-next-page a",".ct_center",{fragment:".ct_center",timeout:8e3}),$(document).on({"pjax:click":function(){},"pjax:start":function(){},"pjax:end":function(){console.log("pjax click end.")}})})},{"./_common/Layout.js":1,"./_part/ArticleListImg":2,"./_part/Category.js":3,"./_part/Comment.js":4,"./_part/GoTop.js":5,"./_part/Search.js":6,"./_part/Share.js":7,"./_part/Toc.js":8}]},{},[9]);