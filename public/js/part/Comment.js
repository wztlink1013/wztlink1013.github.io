!function n(i,c,r){function l(t,e){if(!c[t]){if(!i[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(s)return s(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}o=c[t]={exports:{}},i[t][0].call(o.exports,function(e){return l(i[t][1][e]||e)},o,o.exports,n,i,c,r)}return c[t].exports}for(var s="function"==typeof require&&require,e=0;e<r.length;e++)l(r[e]);return l}({1:[function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var c=function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");twikoo.init({envId:"https://twikoo.wztlink1013.com/",el:"#tcomment",onCommentLoaded:function(){console.log("Twikoo: all comments loaded")}}).then(function(){console.log("Twikoo: mount finished")})}var t,o,n;return t=e,(o=[{key:"init",value:function(){r(),l(),s(),u(),a()}}])&&i(t.prototype,o),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),r=(o.default=c,function(){document.querySelector("#comments")&&(document.querySelector("#go_comments").style.display="block")}),l=function(){function e(e){"https://giscus.wztlink1013.com"===e.origin&&"object"===n(e.data)&&e.data.giscus&&(e=e.data.giscus,console.log("Giscus: iframe comment data",e))}window.addEventListener("message",e),console.log("Giscus: message logic"),window.removeEventListener("message",e)},s=function(){var t,e;document.querySelector("#comments")&&document.querySelector("#twikoo_comments")&&(t=document.querySelector("#twikoo_comments"),e=[location.pathname],twikoo.getCommentsCount({envId:"https://twikoo.wztlink1013.com/",urls:e,includeReply:!1}).then(function(e){t.innerText=e[0].count}).catch(function(e){console.error(e)}))},u=function(){var a=document.querySelector(".hot_articles_item");twikoo.getRecentComments({envId:"https://twikoo.wztlink1013.com/",pageSize:8,includeReply:!1}).then(function(e){var t=document.querySelector(".new_comments_loding");t.parentElement.removeChild(t);for(var o,n,i,c,r,l,s,u=0;u<8;u++)e[u].comment&&(o=e[u].comment,n=e[u].nick,i=e[u].url,c=e[u].avatar,r=e[u].relativeTime,l="#"+e[u].id,(s=document.createElement("li")).innerHTML='<div class="item_up"><img src="'+c+'" class="avatar"><div class="nick_name"><span class="nick">'+n+'</span><span class="time">'+r+'</span></div></div><div class="item_down"><a href="'+i+l+'">'+o+"</a></div>",a.append(s))}).catch(function(e){console.error(e)})},a=function(){var e,t,o;document.querySelector("#switch_btn")&&(e=document.querySelector("#switch_btn"),t=document.querySelector("#github_comment"),o=document.querySelector("#twikoo_comment"),e.addEventListener("click",function(){e.classList.toggle("move"),t.classList.toggle("content-in"),o.classList.toggle("content-in"),"none"===t.style.display?(t.style.display="block",o.style.display="none"):(t.style.display="none",o.style.display="block")}))}},{}]},{},[1]);