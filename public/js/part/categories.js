(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*
 * @Author: wztlink1013
 * @Date: 2022-07-07 18:48:18
 * @LastEditTime: 2022-07-10 21:47:31
 * @Description:
 */
var _default = {
  init: function init() {
    this.categories_widget();
    this.hit_open_close_forder();
    this.readmore_blog_essay();
  },
  // 点击icon展开/关闭树分类
  hit_open_close_forder: function hit_open_close_forder() {// let cate_cell = document.querySelectorAll('.cate_cell')
    // for (let i = 0; i < cate_cell.length; i++) {
    //   if (cate_cell[i].children[1].style.display !== 'none') {
    //     let item = $(cate_cell[i].children[1])
    //     item.click(function () {
    //       if (cate_cell[i].children[2].style.display === 'none') {
    //         cate_cell[i].children[2].style.display = 'block'
    //       } else if (
    //         cate_cell[i].children[2].style.display === 'inline-block'
    //       ) {
    //         cate_cell[i].children[2].style.display = 'none'
    //       } else {
    //         cate_cell[i].children[2].style.display = 'none'
    //       }
    //     })
    //     // cate_cell[i].children[2].style.display = "none"
    //   }
    // }
  },
  // 初始化
  categories_widget: function categories_widget() {
    var arr_li = document.querySelectorAll('.category-list-item');
    arr_li.forEach(function (li) {
      // 美化该分类总数
      var obj_word = li.querySelector('a').nextElementSibling;
      obj_word.innerHTML = ' [' + obj_word.innerHTML + ']'; // 该分类下如果有子分类

      if (li.querySelector('.category-list-child')) {
        // 默认所有子分类全部收缩
        li.querySelector('ul').style.display = 'none'; // 展开按钮

        var node_1 = document.createElement('span');
        node_1.style.display = 'inline';
        node_1.style.cursor = 'pointer';
        node_1.innerHTML = '<i class="fa fa-plus-square-o" aria-hidden="true"></i> ';
        li.insertBefore(node_1, li.querySelector('a')); // 收缩按钮

        var node_2 = document.createElement('span');
        node_2.style.display = 'none';
        node_2.style.cursor = 'pointer';
        node_2.innerHTML = '<i class="fa fa-minus-square-o" aria-hidden="true"></i> ';
        li.insertBefore(node_2, li.querySelector('a')); // 展开按钮注册点击事件

        node_1.addEventListener('click', function () {
          node_1.style.display = 'none';
          node_2.style.display = 'inline';
          li.querySelector('ul').style.display = 'block';
        }); // 收缩按钮注册点击事件

        node_2.addEventListener('click', function () {
          node_2.style.display = 'none';
          node_1.style.display = 'inline';
          li.querySelector('ul').style.display = 'none';
        });
      } else {
        // 该分类下没有子分类
        var _node_ = document.createElement('span'); // 放一个占位符


        _node_.style.display = 'inline';
        _node_.style.paddingLeft = '15px';
        _node_.innerHTML = '';
        li.insertBefore(_node_, li.querySelector('a'));
      }
    });
  },
  // 查看更多页面，优化博客/随笔显示
  readmore_blog_essay: function readmore_blog_essay() {
    if (location.pathname === '/archives/') {
      // console.log(location.search);
      // 去掉第一个？字符
      var params = location.search.substr(1); // 根据=号划分参数

      var arr = params.split('='); // 获取page_type参数

      var page_type = arr[1];
      var ul = document.querySelectorAll('.archive_article_list');

      for (var u = 0; u < ul.length; u++) {
        // 对每一个li进行判断，如果不是参数的值，就进行隐藏
        for (var i = 0; i < ul[u].children.length; i++) {
          var index = ul[u].children[i].getAttribute('data-index');

          if (index === 'dsal') {
            index = 'blog';
          }

          if (index !== page_type) {
            ul[u].children[i].style.display = 'none';
          }
        }
      }
    }
  }
};
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2NhdGVnb3JpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBQ2U7RUFDYixJQUFJLEVBQUUsZ0JBQVk7SUFDaEIsS0FBSyxpQkFBTDtJQUNBLEtBQUsscUJBQUw7SUFDQSxLQUFLLG1CQUFMO0VBQ0QsQ0FMWTtFQU1iO0VBQ0EscUJBQXFCLEVBQUUsaUNBQVksQ0FDakM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0QsQ0ExQlk7RUEyQmI7RUFDQSxpQkFBaUIsRUFBRSw2QkFBWTtJQUM3QixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIscUJBQTFCLENBQWI7SUFFQSxNQUFNLENBQUMsT0FBUCxDQUFlLFVBQUEsRUFBRSxFQUFJO01BQ25CO01BQ0EsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLGFBQUgsQ0FBaUIsR0FBakIsRUFBc0Isa0JBQXJDO01BQ0EsUUFBUSxDQUFDLFNBQVQsR0FBcUIsT0FBTyxRQUFRLENBQUMsU0FBaEIsR0FBNEIsR0FBakQsQ0FIbUIsQ0FJbkI7O01BQ0EsSUFBSSxFQUFFLENBQUMsYUFBSCxDQUFpQixzQkFBakIsQ0FBSixFQUE4QztRQUM1QztRQUNBLEVBQUUsQ0FBQyxhQUFILENBQWlCLElBQWpCLEVBQXVCLEtBQXZCLENBQTZCLE9BQTdCLEdBQXVDLE1BQXZDLENBRjRDLENBRzVDOztRQUNBLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBQWI7UUFDQSxNQUFNLENBQUMsS0FBUCxDQUFhLE9BQWIsR0FBdUIsUUFBdkI7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LE1BQVI7VUFDRDs7VUFDRCxJQUFJLEtBQUssS0FBSyxTQUFkLEVBQXlCO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFELENBQUYsQ0FBTSxRQUFOLENBQWUsQ0FBZixFQUFrQixLQUFsQixDQUF3QixPQUF4QixHQUFrQyxNQUFsQztVQUNEO1FBQ0Y7TUFDRjtJQUNGO0VBQ0Y7QUF0R1ksQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qXG4gKiBAQXV0aG9yOiB3enRsaW5rMTAxM1xuICogQERhdGU6IDIwMjItMDctMDcgMTg6NDg6MThcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMDctMTAgMjE6NDc6MzFcbiAqIEBEZXNjcmlwdGlvbjpcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYXRlZ29yaWVzX3dpZGdldCgpXG4gICAgdGhpcy5oaXRfb3Blbl9jbG9zZV9mb3JkZXIoKVxuICAgIHRoaXMucmVhZG1vcmVfYmxvZ19lc3NheSgpXG4gIH0sXG4gIC8vIOeCueWHu2ljb27lsZXlvIAv5YWz6Zet5qCR5YiG57G7XG4gIGhpdF9vcGVuX2Nsb3NlX2ZvcmRlcjogZnVuY3Rpb24gKCkge1xuICAgIC8vIGxldCBjYXRlX2NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZV9jZWxsJylcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVfY2VsbC5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgaWYgKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAvLyAgICAgbGV0IGl0ZW0gPSAkKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsxXSlcbiAgICAvLyAgICAgaXRlbS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgaWYgKGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAvLyAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIC8vICAgICAgIH0gZWxzZSBpZiAoXG4gICAgLy8gICAgICAgICBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9PT0gJ2lubGluZS1ibG9jaydcbiAgICAvLyAgICAgICApIHtcbiAgICAvLyAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGNhdGVfY2VsbFtpXS5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAvLyBjYXRlX2NlbGxbaV0uY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9LFxuICAvLyDliJ3lp4vljJZcbiAgY2F0ZWdvcmllc193aWRnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJyX2xpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWxpc3QtaXRlbScpXG5cbiAgICBhcnJfbGkuZm9yRWFjaChsaSA9PiB7XG4gICAgICAvLyDnvo7ljJbor6XliIbnsbvmgLvmlbBcbiAgICAgIGxldCBvYmpfd29yZCA9IGxpLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgIG9ial93b3JkLmlubmVySFRNTCA9ICcgWycgKyBvYmpfd29yZC5pbm5lckhUTUwgKyAnXSdcbiAgICAgIC8vIOivpeWIhuexu+S4i+WmguaenOacieWtkOWIhuexu1xuICAgICAgaWYgKGxpLnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1saXN0LWNoaWxkJykpIHtcbiAgICAgICAgLy8g6buY6K6k5omA5pyJ5a2Q5YiG57G75YWo6YOo5pS257ypXG4gICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAvLyDlsZXlvIDmjInpkq5cbiAgICAgICAgbGV0IG5vZGVfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBub2RlXzEuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnXG4gICAgICAgIG5vZGVfMS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcidcbiAgICAgICAgbm9kZV8xLmlubmVySFRNTCA9XG4gICAgICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtcGx1cy1zcXVhcmUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gJ1xuICAgICAgICBsaS5pbnNlcnRCZWZvcmUobm9kZV8xLCBsaS5xdWVyeVNlbGVjdG9yKCdhJykpXG5cbiAgICAgICAgLy8g5pS257yp5oyJ6ZKuXG4gICAgICAgIGxldCBub2RlXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgbm9kZV8yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgbm9kZV8yLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgICAgICBub2RlXzIuaW5uZXJIVE1MID1cbiAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS1taW51cy1zcXVhcmUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gJ1xuICAgICAgICBsaS5pbnNlcnRCZWZvcmUobm9kZV8yLCBsaS5xdWVyeVNlbGVjdG9yKCdhJykpXG5cbiAgICAgICAgLy8g5bGV5byA5oyJ6ZKu5rOo5YaM54K55Ye75LqL5Lu2XG4gICAgICAgIG5vZGVfMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBub2RlXzEuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIG5vZGVfMi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgICBsaS5xdWVyeVNlbGVjdG9yKCd1bCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8g5pS257yp5oyJ6ZKu5rOo5YaM54K55Ye75LqL5Lu2XG4gICAgICAgIG5vZGVfMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBub2RlXzIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIG5vZGVfMS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgICBsaS5xdWVyeVNlbGVjdG9yKCd1bCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOivpeWIhuexu+S4i+ayoeacieWtkOWIhuexu1xuICAgICAgICBsZXQgbm9kZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpIC8vIOaUvuS4gOS4quWNoOS9jeesplxuICAgICAgICBub2RlXzEuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnXG4gICAgICAgIG5vZGVfMS5zdHlsZS5wYWRkaW5nTGVmdCA9ICcxNXB4J1xuICAgICAgICBub2RlXzEuaW5uZXJIVE1MID0gJydcbiAgICAgICAgbGkuaW5zZXJ0QmVmb3JlKG5vZGVfMSwgbGkucXVlcnlTZWxlY3RvcignYScpKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIC8vIOafpeeci+abtOWkmumhtemdou+8jOS8mOWMluWNmuWuoi/pmo/nrJTmmL7npLpcbiAgcmVhZG1vcmVfYmxvZ19lc3NheTogZnVuY3Rpb24gKCkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9hcmNoaXZlcy8nKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgLy8g5Y675o6J56ys5LiA5Liq77yf5a2X56ymXG4gICAgICBsZXQgcGFyYW1zID0gbG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKVxuICAgICAgLy8g5qC55o2uPeWPt+WIkuWIhuWPguaVsFxuICAgICAgbGV0IGFyciA9IHBhcmFtcy5zcGxpdCgnPScpXG4gICAgICAvLyDojrflj5ZwYWdlX3R5cGXlj4LmlbBcbiAgICAgIGxldCBwYWdlX3R5cGUgPSBhcnJbMV1cbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcmNoaXZlX2FydGljbGVfbGlzdCcpXG4gICAgICBmb3IgKGxldCB1ID0gMDsgdSA8IHVsLmxlbmd0aDsgdSsrKSB7XG4gICAgICAgIC8vIOWvueavj+S4gOS4qmxp6L+b6KGM5Yik5pat77yM5aaC5p6c5LiN5piv5Y+C5pWw55qE5YC877yM5bCx6L+b6KGM6ZqQ6JePXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdWxbdV0uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSB1bFt1XS5jaGlsZHJlbltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKVxuICAgICAgICAgIGlmIChpbmRleCA9PT0gJ2RzYWwnKSB7XG4gICAgICAgICAgICBpbmRleCA9ICdibG9nJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5kZXggIT09IHBhZ2VfdHlwZSkge1xuICAgICAgICAgICAgdWxbdV0uY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbn1cbiJdfQ==
