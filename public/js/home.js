!function r(o,i,u){function c(e,t){if(!i[e]){if(!o[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(a)return a(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}n=i[e]={exports:{}},o[e][0].call(n.exports,function(t){return c(o[e][1][t]||t)},n,n.exports,r,o,i,u)}return i[e].exports}for(var a="function"==typeof require&&require,t=0;t<u.length;t++)c(u[t]);return c}({1:[function(t,e,n){"use strict";$(function(){document.querySelector('meta[name="referrer"]').setAttribute("content","strict-origin-when-cross-origin"),(t=document.createElement("script")).src="https://hm.baidu.com/hm.js?bc6ef915ac17bd07ab8e4012329e8fa1",(e=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,e);var t,e,n={opacity:1,top:0},r={opacity:1,bottom:0},o={left:0},i={right:0};function u(){return s("h1",n)}function c(){return $.when(s(".quote-line-start",o),s(".quote-line-end",i),s(".quote-icon-start",n),s(".quote-icon-end",r)).then(function(){return s(".quote-content",n)}).then(function(){return s(".quote-author",n)})}function a(){var t=$(".home-links a"),t=$.makeArray(t).map(function(t,e){return s(t,n,200*e)});return $.when.apply($,t)}function f(){return $.when(s(".location-icon",r),s(".location-text",n))}function s(t,e,n,r){return n=n||0,$(t).delay(n).animate(e,r).promise()}$.when().then(u).then(c).then(a).then(f)})},{}]},{},[1]);