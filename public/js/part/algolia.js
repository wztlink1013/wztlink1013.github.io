(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/* TODO: 参考
https://github.com/oncletom/hexo-algolia#readme
https://github.com/volantis-x/hexo-theme-volantis/blob/main/layout/_partial/scripts/search.ejs
https://github.com/volantis-x/hexo-theme-volantis/blob/main/source/js/search/algolia.js
*/
var SearchService = '';

(function ($) {
  /**
   * A super class of common logics for all search services
   * @param options : (object)
   */
  SearchService = function SearchService(options) {
    var self = this;
    self.config = $.extend({
      per_page: 10,
      selectors: {
        body: 'body',
        form: '.u-search-form',
        input: '.u-search-input',
        container: '#u-search',
        modal: '#u-search .modal',
        modal_body: '#u-search .modal-body',
        modal_footer: '#u-search .modal-footer',
        modal_overlay: '#u-search .modal-overlay',
        modal_results: '#u-search .modal-results',
        modal_metadata: '#u-search .modal-metadata',
        modal_error: '#u-search .modal-error',
        modal_loading_bar: '#u-search .modal-loading-bar',
        modal_ajax_content: '#u-search .modal-ajax-content',
        modal_logo: '#u-search .modal-footer .logo',
        btn_close: '#u-search .btn-close',
        btn_next: '#u-search .btn-next',
        btn_prev: '#u-search .btn-prev'
      },
      brands: {
        'hexo': {
          logo: '',
          url: ''
        },
        'google': {
          logo: 'google.svg',
          url: 'https://cse.google.com'
        },
        'algolia': {
          logo: 'algolia.svg',
          url: 'https://www.algolia.com'
        },
        'baidu': {
          logo: 'baidu.svg',
          url: 'http://zn.baidu.com/cse/home/index'
        },
        'azure': {
          logo: 'azure.svg',
          url: 'https://azure.microsoft.com/en-us/services/search/'
        }
      },
      imagePath: 'https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/img/logo/'
    }, options);
    self.dom = {};
    self.percentLoaded = 0;
    self.open = false;
    self.queryText = '';
    self.nav = {
      next: -1,
      prev: -1,
      total: 0,
      current: 1
    };

    self.parseSelectors = function () {
      for (var key in self.config.selectors) {
        self.dom[key] = $(self.config.selectors[key]);
      }
    };

    self.beforeQuery = function () {
      if (!self.open) {
        self.dom.container.fadeIn(); // self.dom.body.addClass('modal-active');
        // 上面的是去除了文章的滚动条，我觉得没必要
      }

      self.dom.input.each(function (index, elem) {
        $(elem).val(self.queryText);
      });
      document.activeElement.blur();
      self.dom.modal_error.hide();
      self.dom.modal_ajax_content.removeClass('loaded');
      self.startLoading();
    };

    self.afterQuery = function () {
      self.dom.modal_body.scrollTop(0);
      self.dom.modal_ajax_content.addClass('loaded');
      self.stopLoading();
    };
    /**
     * Perform a complete serach operation including UI updates and query
     * @param startIndex {int} start index or page number
     */


    self.search = function (startIndex, callback) {
      self.beforeQuery();

      if (self.search instanceof Function) {
        self.query(self.queryText, startIndex, function () {
          self.afterQuery();
        });
      } else {
        console.log('query() does not exist.');
        self.onQueryError(self.queryText, '');
        self.afterQuery();
      }
    };
    /**
     * Query error handler
     * @param queryText: (string)
     * @param status: (string)
     */


    self.onQueryError = function (queryText, status) {
      var errMsg = '';
      if (status === 'success') errMsg = 'No result found for "' + queryText + '".';else if (status === 'timeout') errMsg = 'Unfortunate timeout.';else errMsg = 'Mysterious failure.';
      self.dom.modal_results.html('');
      self.dom.modal_error.html(errMsg);
      self.dom.modal_error.show();
    };

    self.nextPage = function () {
      if (self.nav.next !== -1) {
        self.search(self.nav.next);
      }
    };

    self.prevPage = function () {
      if (self.nav.prev !== -1) {
        self.search(self.nav.prev);
      }
    };

    self.getUrlRelativePath = function (url) {
      var arrUrl = url.split('//');
      var start = arrUrl[1].indexOf('/');
      var relUrl = arrUrl[1].substring(start);

      if (relUrl.indexOf('?') != -1) {
        relUrl = relUrl.split('?')[0];
      }

      return relUrl;
    };
    /**
     * Generate html for one result
     * @param url : (string) url
     * @param title : (string) title
     * @param digest : (string) digest
     */


    self.buildResult = function (url, title, digest) {
      var result = self.getUrlRelativePath(url);
      var html = '';
      html = '<li>';
      html += '<a class=\'result\' href=\'' + result + '\'>';
      html += '<span class=\'title\'>' + title + '</span>';
      if (digest !== '') html += '<span class=\'digest\'>' + digest + '</span>';
      html += '</a>';
      html += '</li>';
      return html;
    };
    /**
     * Close the modal, resume body scrolling
     * no param
     */


    self.close = function () {
      self.open = false;
      self.dom.container.fadeOut();
      self.dom.body.removeClass('modal-active');
    };
    /**
     * Searchform submit event handler
     * @param queryText : (string) the query text
     */


    self.onSubmit = function (event) {
      event.preventDefault();
      self.queryText = $(this).find('.u-search-input').val();

      if (self.queryText) {
        self.search(1);
      }
    };
    /**
     * Start loading bar animation
     * no param
     */


    self.startLoading = function () {
      self.dom.modal_loading_bar.show();
      self.loadingTimer = setInterval(function () {
        self.percentLoaded = Math.min(self.percentLoaded + 5, 95);
        self.dom.modal_loading_bar.css('width', self.percentLoaded + '%');
      }, 100);
    };
    /**
     * Stop loading bar animation
     * no param
     */


    self.stopLoading = function () {
      clearInterval(self.loadingTimer);
      self.dom.modal_loading_bar.css('width', '100%');
      self.dom.modal_loading_bar.fadeOut();
      setTimeout(function () {
        self.percentLoaded = 0;
        self.dom.modal_loading_bar.css('width', '0%');
      }, 300);
    };
    /**
     * Add service branding
     * @param service {String} service name
     */


    self.addLogo = function (service) {
      var html = '';

      if (self.config.brands[service] && self.config.brands[service].logo) {
        html += '<a href=\'' + self.config.brands[service].url + '\' class=\'' + service + '\'>';
        html += '<img src="' + self.config.imagePath + self.config.brands[service].logo + '" />';
        html += '</a>';
        self.dom.modal_logo.html(html);
      }
    };

    self.destroy = function () {
      self.dom.form.each(function (index, elem) {
        $(elem).off('submit');
      });
      self.dom.modal_overlay.off('click');
      self.dom.btn_close.off('click');
      self.dom.btn_next.off('click');
      self.dom.btn_prev.off('click');
      self.dom.container.remove();
    };
    /**
     * Load template and register event handlers
     * no param
     */


    self.init = function () {
      $('body').append(template);
      self.parseSelectors();
      self.dom.modal_footer.show();
      self.dom.form.each(function (index, elem) {
        $(elem).on('submit', self.onSubmit);
      });
      self.dom.modal_overlay.on('click', self.close);
      self.dom.btn_close.on('click', self.close);
      self.dom.btn_next.on('click', self.nextPage);
      self.dom.btn_prev.on('click', self.prevPage);
    };

    self.init();
  };

  var template = '<div id="u-search"><div class="modal"> <header class="modal-header" class="clearfix"><form id="u-search-modal-form" class="u-search-form" name="uSearchModalForm"> <input type="text" id="u-search-modal-input" class="u-search-input" /> <button type="submit" id="u-search-modal-btn-submit" class="u-search-btn-submit"> <span class="fas fa-search"></span> </button></form> <a class="btn-close"> <span class="fas fa-times"></span> </a><div class="modal-loading"><div class="modal-loading-bar"></div></div> </header> <main class="modal-body"><ul class="modal-results modal-ajax-content"></ul> </main> <footer class="modal-footer clearfix"><div class="modal-metadata modal-ajax-content"> <strong class="range"></strong> of <strong class="total"></strong></div><div class="modal-error"></div> <div class="logo"></div> <a class="nav btn-next modal-ajax-content"> <span class="text">NEXT</span> <span class="fal fa-chevron-right"></span> </a> <a class="nav btn-prev modal-ajax-content"> <span class="fal fa-chevron-left"></span> <span class="text">PREV</span> </a> </footer></div><div class="modal-overlay"></div></div>';
})(jQuery);

var AlgoliaSearch;

(function ($) {
  'use strict';
  /**
   * Search by Algolia Search
   * @param options : (object)
   */

  AlgoliaSearch = function AlgoliaSearch(options) {
    SearchService.apply(this, arguments);
    var self = this;
    var endpoint = 'https://' + self.config.appId + '-dsn.algolia.net/1/indexes/' + self.config.indexName;
    self.addLogo('algolia');
    /**
     * Generate result list html
     * @param data : (array) result items
     */

    self.buildResultList = function (data) {
      var html = '';
      $.each(data, function (index, row) {
        var url = row.permalink || row.path || '';

        if (!row.permalink && row.path) {
          url = ROOT + url;
        }

        var title = row.title;
        var digest = '';
        html += self.buildResult(url, title, digest, index + 1);
      });
      html += '<script>try{pjax.refresh(document.querySelector(\'#u-search\'));document.addEventListener(\'pjax:send\',function(){$(\'#u-search\').fadeOut(500);$(\'body\').removeClass(\'modal-active\')});}catch(e){$(\'#u-search\').fadeOut(500);}</script>';
      return html;
    };
    /**
     * Generate metadata after a successful query
     * @param data : (object) the raw search response data
     */


    self.buildMetadata = function (data) {
      self.nav.current = data.page * data.hitsPerPage + 1;
      self.nav.currentCount = data.hits.length;
      self.nav.total = parseInt(data.nbHits);
      self.dom.modal_metadata.children('.total').html(self.nav.total);
      self.dom.modal_metadata.children('.range').html(self.nav.current + '-' + (self.nav.current + self.nav.currentCount - 1));

      if (self.nav.total > 0) {
        self.dom.modal_metadata.show();
      } else {
        self.dom.modal_metadata.hide();
      }

      if (data.page < data.nbPages - 1) {
        self.nav.next = data.page + 1 + 1;
        self.dom.btn_next.show();
      } else {
        self.nav.next = -1;
        self.dom.btn_next.hide();
      }

      if (data.page > 0) {
        self.nav.prev = data.page + 1 - 1;
        self.dom.btn_prev.show();
      } else {
        self.nav.prev = -1;
        self.dom.btn_prev.hide();
      }
    };
    /**
     * Send a GET request
     * @param queryText : (string) the query text
     * @param page : (int) the current page (start from 1)
     * @param callback : (function)
     */


    self.query = function (queryText, page, callback) {
      $.get(endpoint, {
        query: queryText,
        page: page - 1,
        hitsPerPage: self.config.per_page,
        'x-algolia-application-id': self.config.appId,
        'x-algolia-api-key': self.config.apiKey
      }, function (data, status) {
        if (status === 'success' && data.hits && data.hits.length > 0) {
          var results = self.buildResultList(data.hits);
          self.dom.modal_results.html(results);
        } else {
          self.onQueryError(queryText, status);
        }

        self.buildMetadata(data);

        if (callback) {
          callback(data);
        }
      });
    };

    return self;
  };
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2FsZ29saWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJLGFBQWEsR0FBRyxFQUFwQjs7QUFFQSxDQUFDLFVBQVMsQ0FBVCxFQUFZO0VBRVg7QUFDRjtBQUNBO0FBQ0E7RUFDRSxhQUFhLEdBQUcsdUJBQVMsT0FBVCxFQUFrQjtJQUNoQyxJQUFJLElBQUksR0FBRyxJQUFYO0lBRUEsSUFBSSxDQUFDLE1BQUwsR0FBYyxDQUFDLENBQUMsTUFBRixDQUFTO01BQ3JCLFFBQVEsRUFBRyxFQURVO01BRXJCLFNBQVMsRUFBRTtRQUNULElBQUksRUFBZ0IsTUFEWDtRQUVULElBQUksRUFBZ0IsZ0JBRlg7UUFHVCxLQUFLLEVBQWUsaUJBSFg7UUFJVCxTQUFTLEVBQVcsV0FKWDtRQUtULEtBQUssRUFBZSxrQkFMWDtRQU1ULFVBQVUsRUFBVSx1QkFOWDtRQU9ULFlBQVksRUFBUSx5QkFQWDtRQVFULGFBQWEsRUFBTywwQkFSWDtRQVNULGFBQWEsRUFBTywwQkFUWDtRQVVULGNBQWMsRUFBTSwyQkFWWDtRQVdULFdBQVcsRUFBUyx3QkFYWDtRQVlULGlCQUFpQixFQUFHLDhCQVpYO1FBYVQsa0JBQWtCLEVBQUUsK0JBYlg7UUFjVCxVQUFVLEVBQVUsK0JBZFg7UUFlVCxTQUFTLEVBQVcsc0JBZlg7UUFnQlQsUUFBUSxFQUFZLHFCQWhCWDtRQWlCVCxRQUFRLEVBQVk7TUFqQlgsQ0FGVTtNQXFCckIsTUFBTSxFQUFFO1FBQ04sUUFBVztVQUFDLElBQUksRUFBRSxFQUFQO1VBQVcsR0FBRyxFQUFFO1FBQWhCLENBREw7UUFFTixVQUFXO1VBQUMsSUFBSSxFQUFFLFlBQVA7VUFBcUIsR0FBRyxFQUFFO1FBQTFCLENBRkw7UUFHTixXQUFX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QUMsS0FBTCxHQUFhLFVBQVMsU0FBVCxFQUFvQixJQUFwQixFQUEwQixRQUExQixFQUFvQztNQUMvQyxDQUFDLENBQUMsR0FBRixDQUFNLFFBQU4sRUFBZ0I7UUFDZCxLQUFLLEVBQXVCLFNBRGQ7UUFFZCxJQUFJLEVBQXdCLElBQUksR0FBRyxDQUZyQjtRQUdkLFdBQVcsRUFBaUIsSUFBSSxDQUFDLE1BQUwsQ0FBWSxRQUgxQjtRQUlkLDRCQUE0QixJQUFJLENBQUMsTUFBTCxDQUFZLEtBSjFCO1FBS2QscUJBQTRCLElBQUksQ0FBQyxNQUFMLENBQVk7TUFMMUIsQ0FBaEIsRUFNRyxVQUFTLElBQVQsRUFBZSxNQUFmLEVBQXVCO1FBQ3hCLElBQUksTUFBTSxLQUFLLFNBQVgsSUFBd0IsSUFBSSxDQUFDLElBQTdCLElBQXFDLElBQUksQ0FBQyxJQUFMLENBQVUsTUFBVixHQUFtQixDQUE1RCxFQUErRDtVQUM3RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBTCxDQUFxQixJQUFJLENBQUMsSUFBMUIsQ0FBZDtVQUNBLElBQUksQ0FBQyxHQUFMLENBQVMsYUFBVCxDQUF1QixJQUF2QixDQUE0QixPQUE1QjtRQUNELENBSEQsTUFHTztVQUNMLElBQUksQ0FBQyxZQUFMLENBQWtCLFNBQWxCLEVBQTZCLE1BQTdCO1FBQ0Q7O1FBQ0QsSUFBSSxDQUFDLGFBQUwsQ0FBbUIsSUFBbkI7O1FBQ0EsSUFBSSxRQUFKLEVBQWM7VUFDWixRQUFRLENBQUMsSUFBRCxDQUFSO1FBQ0Q7TUFDRixDQWpCRDtJQWtCRCxDQW5CRDs7SUFxQkEsT0FBTyxJQUFQO0VBQ0QsQ0FyRkQ7QUF1RkQsQ0E5RkQsRUE4RkcsTUE5RkgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiBUT0RPOiDlj4LogINcbmh0dHBzOi8vZ2l0aHViLmNvbS9vbmNsZXRvbS9oZXhvLWFsZ29saWEjcmVhZG1lXG5odHRwczovL2dpdGh1Yi5jb20vdm9sYW50aXMteC9oZXhvLXRoZW1lLXZvbGFudGlzL2Jsb2IvbWFpbi9sYXlvdXQvX3BhcnRpYWwvc2NyaXB0cy9zZWFyY2guZWpzXG5odHRwczovL2dpdGh1Yi5jb20vdm9sYW50aXMteC9oZXhvLXRoZW1lLXZvbGFudGlzL2Jsb2IvbWFpbi9zb3VyY2UvanMvc2VhcmNoL2FsZ29saWEuanNcbiovXG5cbnZhciBTZWFyY2hTZXJ2aWNlID0gJyc7XG5cbihmdW5jdGlvbigkKSB7XG5cbiAgLyoqXG4gICAqIEEgc3VwZXIgY2xhc3Mgb2YgY29tbW9uIGxvZ2ljcyBmb3IgYWxsIHNlYXJjaCBzZXJ2aWNlc1xuICAgKiBAcGFyYW0gb3B0aW9ucyA6IChvYmplY3QpXG4gICAqL1xuICBTZWFyY2hTZXJ2aWNlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHNlbGYuY29uZmlnID0gJC5leHRlbmQoe1xuICAgICAgcGVyX3BhZ2UgOiAxMCxcbiAgICAgIHNlbGVjdG9yczoge1xuICAgICAgICBib2R5ICAgICAgICAgICAgICA6ICdib2R5JyxcbiAgICAgICAgZm9ybSAgICAgICAgICAgICAgOiAnLnUtc2VhcmNoLWZvcm0nLFxuICAgICAgICBpbnB1dCAgICAgICAgICAgICA6ICcudS1zZWFyY2gtaW5wdXQnLFxuICAgICAgICBjb250YWluZXIgICAgICAgICA6ICcjdS1zZWFyY2gnLFxuICAgICAgICBtb2RhbCAgICAgICAgICAgICA6ICcjdS1zZWFyY2ggLm1vZGFsJyxcbiAgICAgICAgbW9kYWxfYm9keSAgICAgICAgOiAnI3Utc2VhcmNoIC5tb2RhbC1ib2R5JyxcbiAgICAgICAgbW9kYWxfZm9vdGVyICAgICAgOiAnI3Utc2VhcmNoIC5tb2RhbC1mb290ZXInLFxuICAgICAgICBtb2RhbF9vdmVybGF5ICAgICA6ICcjdS1zZWFyY2ggLm1vZGFsLW92ZXJsYXknLFxuICAgICAgICBtb2RhbF9yZXN1bHRzICAgICA6ICcjdS1zZWFyY2ggLm1vZGFsLXJlc3VsdHMnLFxuICAgICAgICBtb2RhbF9tZXRhZGF0YSAgICA6ICcjdS1zZWFyY2ggLm1vZGFsLW1ldGFkYXRhJyxcbiAgICAgICAgbW9kYWxfZXJyb3IgICAgICAgOiAnI3Utc2VhcmNoIC5tb2RhbC1lcnJvcicsXG4gICAgICAgIG1vZGFsX2xvYWRpbmdfYmFyIDogJyN1LXNlYXJjaCAubW9kYWwtbG9hZGluZy1iYXInLFxuICAgICAgICBtb2RhbF9hamF4X2NvbnRlbnQ6ICcjdS1zZWFyY2ggLm1vZGFsLWFqYXgtY29udGVudCcsXG4gICAgICAgIG1vZGFsX2xvZ28gICAgICAgIDogJyN1LXNlYXJjaCAubW9kYWwtZm9vdGVyIC5sb2dvJyxcbiAgICAgICAgYnRuX2Nsb3NlICAgICAgICAgOiAnI3Utc2VhcmNoIC5idG4tY2xvc2UnLFxuICAgICAgICBidG5fbmV4dCAgICAgICAgICA6ICcjdS1zZWFyY2ggLmJ0bi1uZXh0JyxcbiAgICAgICAgYnRuX3ByZXYgICAgICAgICAgOiAnI3Utc2VhcmNoIC5idG4tcHJldidcbiAgICAgIH0sXG4gICAgICBicmFuZHM6IHtcbiAgICAgICAgJ2hleG8nICAgOiB7bG9nbzogJycsIHVybDogJyd9LFxuICAgICAgICAnZ29vZ2xlJyA6IHtsb2dvOiAnZ29vZ2xlLnN2ZycsIHVybDogJ2h0dHBzOi8vY3NlLmdvb2dsZS5jb20nfSxcbiAgICAgICAgJ2FsZ29saWEnOiB7bG9nbzogJ2FsZ29saWEuc3ZnJywgdXJsOiAnaHR0cHM6Ly93d3cuYWxnb2xpYS5jb20nfSxcbiAgICAgICAgJ2JhaWR1JyAgOiB7bG9nbzogJ2JhaWR1LnN2ZycsIHVybDogJ2h0dHA6Ly96bi5iYWlkdS5jb20vY3NlL2hvbWUvaW5kZXgnfSxcbiAgICAgICAgJ2F6dXJlJyAgOiB7bG9nbzogJ2F6dXJlLnN2ZycsIHVybDogJ2h0dHBzOi8vYXp1cmUubWljcm9zb2Z0LmNvbS9lbi11cy9zZXJ2aWNlcy9zZWFyY2gvJ31cbiAgICAgIH0sXG4gICAgICBpbWFnZVBhdGg6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvdm9sYW50aXMteC9jZG4tdm9sYW50aXNAbWFzdGVyL2ltZy9sb2dvLydcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIHNlbGYuZG9tID0ge307XG4gICAgc2VsZi5wZXJjZW50TG9hZGVkID0gMDtcbiAgICBzZWxmLm9wZW4gPSBmYWxzZTtcbiAgICBzZWxmLnF1ZXJ5VGV4dCA9ICcnO1xuICAgIHNlbGYubmF2ID0ge1xuICAgICAgbmV4dCAgIDogLTEsXG4gICAgICBwcmV2ICAgOiAtMSxcbiAgICAgIHRvdGFsICA6IDAsXG4gICAgICBjdXJyZW50OiAxXG4gICAgfTtcblxuICAgIHNlbGYucGFyc2VTZWxlY3RvcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzZWxmLmNvbmZpZy5zZWxlY3RvcnMpIHtcbiAgICAgICAgc2VsZi5kb21ba2V5XSA9ICQoc2VsZi5jb25maWcuc2VsZWN0b3JzW2tleV0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLmJlZm9yZVF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXNlbGYub3Blbikge1xuICAgICAgICBzZWxmLmRvbS5jb250YWluZXIuZmFkZUluKCk7XG4gICAgICAgIC8vIHNlbGYuZG9tLmJvZHkuYWRkQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xuICAgICAgICAvLyDkuIrpnaLnmoTmmK/ljrvpmaTkuobmlofnq6DnmoTmu5rliqjmnaHvvIzmiJHop4nlvpfmsqHlv4XopoFcbiAgICAgIH1cbiAgICAgIHNlbGYuZG9tLmlucHV0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW0pIHtcbiAgICAgICAgJChlbGVtKS52YWwoc2VsZi5xdWVyeVRleHQpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIHNlbGYuZG9tLm1vZGFsX2Vycm9yLmhpZGUoKTtcbiAgICAgIHNlbGYuZG9tLm1vZGFsX2FqYXhfY29udGVudC5yZW1vdmVDbGFzcygnbG9hZGVkJyk7XG4gICAgICBzZWxmLnN0YXJ0TG9hZGluZygpO1xuICAgIH07XG5cbiAgICBzZWxmLmFmdGVyUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuZG9tLm1vZGFsX2JvZHkuc2Nyb2xsVG9wKDApO1xuICAgICAgc2VsZi5kb20ubW9kYWxfYWpheF9jb250ZW50LmFkZENsYXNzKCdsb2FkZWQnKTtcbiAgICAgIHNlbGYuc3RvcExvYWRpbmcoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybSBhIGNvbXBsZXRlIHNlcmFjaCBvcGVyYXRpb24gaW5jbHVkaW5nIFVJIHVwZGF0ZXMgYW5kIHF1ZXJ5XG4gICAgICogQHBhcmFtIHN0YXJ0SW5kZXgge2ludH0gc3RhcnQgaW5kZXggb3IgcGFnZSBudW1iZXJcbiAgICAgKi9cbiAgICBzZWxmLnNlYXJjaCA9IGZ1bmN0aW9uKHN0YXJ0SW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgICBzZWxmLmJlZm9yZVF1ZXJ5KCk7XG4gICAgICBpZiAoc2VsZi5zZWFyY2ggaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICBzZWxmLnF1ZXJ5KHNlbGYucXVlcnlUZXh0LCBzdGFydEluZGV4LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLmFmdGVyUXVlcnkoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygncXVlcnkoKSBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICAgICAgc2VsZi5vblF1ZXJ5RXJyb3Ioc2VsZi5xdWVyeVRleHQsICcnKTtcbiAgICAgICAgc2VsZi5hZnRlclF1ZXJ5KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IGVycm9yIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0gcXVlcnlUZXh0OiAoc3RyaW5nKVxuICAgICAqIEBwYXJhbSBzdGF0dXM6IChzdHJpbmcpXG4gICAgICovXG4gICAgc2VsZi5vblF1ZXJ5RXJyb3IgPSBmdW5jdGlvbihxdWVyeVRleHQsIHN0YXR1cykge1xuICAgICAgdmFyIGVyck1zZyA9ICcnO1xuICAgICAgaWYgKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSBlcnJNc2cgPSAnTm8gcmVzdWx0IGZvdW5kIGZvciBcIicgKyBxdWVyeVRleHQgKyAnXCIuJztcbiAgICAgIGVsc2UgaWYgKHN0YXR1cyA9PT0gJ3RpbWVvdXQnKSBlcnJNc2cgPSAnVW5mb3J0dW5hdGUgdGltZW91dC4nO1xuICAgICAgZWxzZSBlcnJNc2cgPSAnTXlzdGVyaW91cyBmYWlsdXJlLic7XG4gICAgICBzZWxmLmRvbS5tb2RhbF9yZXN1bHRzLmh0bWwoJycpO1xuICAgICAgc2VsZi5kb20ubW9kYWxfZXJyb3IuaHRtbChlcnJNc2cpO1xuICAgICAgc2VsZi5kb20ubW9kYWxfZXJyb3Iuc2hvdygpO1xuICAgIH07XG5cbiAgICBzZWxmLm5leHRQYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2VsZi5uYXYubmV4dCAhPT0gLTEpIHtcbiAgICAgICAgc2VsZi5zZWFyY2goc2VsZi5uYXYubmV4dCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYucHJldlBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChzZWxmLm5hdi5wcmV2ICE9PSAtMSkge1xuICAgICAgICBzZWxmLnNlYXJjaChzZWxmLm5hdi5wcmV2KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5nZXRVcmxSZWxhdGl2ZVBhdGggPSBmdW5jdGlvbih1cmwpIHtcbiAgICAgIHZhciBhcnJVcmwgPSB1cmwuc3BsaXQoJy8vJyk7XG4gICAgICB2YXIgc3RhcnQgPSBhcnJVcmxbMV0uaW5kZXhPZignLycpO1xuICAgICAgdmFyIHJlbFVybCA9IGFyclVybFsxXS5zdWJzdHJpbmcoc3RhcnQpO1xuICAgICAgaWYgKHJlbFVybC5pbmRleE9mKCc/JykgIT0gLTEpIHtcbiAgICAgICAgcmVsVXJsID0gcmVsVXJsLnNwbGl0KCc/JylbMF07XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVsVXJsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBodG1sIGZvciBvbmUgcmVzdWx0XG4gICAgICogQHBhcmFtIHVybCA6IChzdHJpbmcpIHVybFxuICAgICAqIEBwYXJhbSB0aXRsZSA6IChzdHJpbmcpIHRpdGxlXG4gICAgICogQHBhcmFtIGRpZ2VzdCA6IChzdHJpbmcpIGRpZ2VzdFxuICAgICAqL1xuICAgIHNlbGYuYnVpbGRSZXN1bHQgPSBmdW5jdGlvbih1cmwsIHRpdGxlLCBkaWdlc3QpIHtcbiAgICAgIHZhciByZXN1bHQgPSBzZWxmLmdldFVybFJlbGF0aXZlUGF0aCh1cmwpO1xuICAgICAgdmFyIGh0bWwgPSAnJztcbiAgICAgIGh0bWwgPSAnPGxpPic7XG4gICAgICBodG1sICs9ICc8YSBjbGFzcz1cXCdyZXN1bHRcXCcgaHJlZj1cXCcnICsgcmVzdWx0ICsgJ1xcJz4nO1xuICAgICAgaHRtbCArPSAnPHNwYW4gY2xhc3M9XFwndGl0bGVcXCc+JyArIHRpdGxlICsgJzwvc3Bhbj4nO1xuICAgICAgaWYgKGRpZ2VzdCAhPT0gJycpIGh0bWwgKz0gJzxzcGFuIGNsYXNzPVxcJ2RpZ2VzdFxcJz4nICsgZGlnZXN0ICsgJzwvc3Bhbj4nO1xuICAgICAgaHRtbCArPSAnPC9hPic7XG4gICAgICBodG1sICs9ICc8L2xpPic7XG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIG1vZGFsLCByZXN1bWUgYm9keSBzY3JvbGxpbmdcbiAgICAgKiBubyBwYXJhbVxuICAgICAqL1xuICAgIHNlbGYuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYub3BlbiA9IGZhbHNlO1xuICAgICAgc2VsZi5kb20uY29udGFpbmVyLmZhZGVPdXQoKTtcbiAgICAgIHNlbGYuZG9tLmJvZHkucmVtb3ZlQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2hmb3JtIHN1Ym1pdCBldmVudCBoYW5kbGVyXG4gICAgICogQHBhcmFtIHF1ZXJ5VGV4dCA6IChzdHJpbmcpIHRoZSBxdWVyeSB0ZXh0XG4gICAgICovXG4gICAgc2VsZi5vblN1Ym1pdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2VsZi5xdWVyeVRleHQgPSAkKHRoaXMpLmZpbmQoJy51LXNlYXJjaC1pbnB1dCcpLnZhbCgpO1xuICAgICAgaWYgKHNlbGYucXVlcnlUZXh0KSB7XG4gICAgICAgIHNlbGYuc2VhcmNoKDEpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBsb2FkaW5nIGJhciBhbmltYXRpb25cbiAgICAgKiBubyBwYXJhbVxuICAgICAqL1xuICAgIHNlbGYuc3RhcnRMb2FkaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmRvbS5tb2RhbF9sb2FkaW5nX2Jhci5zaG93KCk7XG4gICAgICBzZWxmLmxvYWRpbmdUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLnBlcmNlbnRMb2FkZWQgPSBNYXRoLm1pbihzZWxmLnBlcmNlbnRMb2FkZWQgKyA1LCA5NSk7XG4gICAgICAgIHNlbGYuZG9tLm1vZGFsX2xvYWRpbmdfYmFyLmNzcygnd2lkdGgnLCBzZWxmLnBlcmNlbnRMb2FkZWQgKyAnJScpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3RvcCBsb2FkaW5nIGJhciBhbmltYXRpb25cbiAgICAgKiBubyBwYXJhbVxuICAgICAqL1xuICAgIHNlbGYuc3RvcExvYWRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoc2VsZi5sb2FkaW5nVGltZXIpO1xuICAgICAgc2VsZi5kb20ubW9kYWxfbG9hZGluZ19iYXIuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG4gICAgICBzZWxmLmRvbS5tb2RhbF9sb2FkaW5nX2Jhci5mYWRlT3V0KCk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLnBlcmNlbnRMb2FkZWQgPSAwO1xuICAgICAgICBzZWxmLmRvbS5tb2RhbF9sb2FkaW5nX2Jhci5jc3MoJ3dpZHRoJywgJzAlJyk7XG4gICAgICB9LCAzMDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgc2VydmljZSBicmFuZGluZ1xuICAgICAqIEBwYXJhbSBzZXJ2aWNlIHtTdHJpbmd9IHNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHNlbGYuYWRkTG9nbyA9IGZ1bmN0aW9uKHNlcnZpY2UpIHtcbiAgICAgIHZhciBodG1sID0gJyc7XG4gICAgICBpZiAoc2VsZi5jb25maWcuYnJhbmRzW3NlcnZpY2VdICYmIHNlbGYuY29uZmlnLmJyYW5kc1tzZXJ2aWNlXS5sb2dvKSB7XG4gICAgICAgIGh0bWwgKz0gJzxhIGhyZWY9XFwnJyArIHNlbGYuY29uZmlnLmJyYW5kc1tzZXJ2aWNlXS51cmwgKyAnXFwnIGNsYXNzPVxcJycgKyBzZXJ2aWNlICsgJ1xcJz4nO1xuICAgICAgICBodG1sICs9ICAgICc8aW1nIHNyYz1cIicgKyBzZWxmLmNvbmZpZy5pbWFnZVBhdGggKyBzZWxmLmNvbmZpZy5icmFuZHNbc2VydmljZV0ubG9nbyArICdcIiAvPic7XG4gICAgICAgIGh0bWwgKz0gJzwvYT4nO1xuICAgICAgICBzZWxmLmRvbS5tb2RhbF9sb2dvLmh0bWwoaHRtbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5kb20uZm9ybS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtKSB7XG4gICAgICAgICQoZWxlbSkub2ZmKCdzdWJtaXQnKTtcbiAgICAgIH0pO1xuICAgICAgc2VsZi5kb20ubW9kYWxfb3ZlcmxheS5vZmYoJ2NsaWNrJyk7XG4gICAgICBzZWxmLmRvbS5idG5fY2xvc2Uub2ZmKCdjbGljaycpO1xuICAgICAgc2VsZi5kb20uYnRuX25leHQub2ZmKCdjbGljaycpO1xuICAgICAgc2VsZi5kb20uYnRuX3ByZXYub2ZmKCdjbGljaycpO1xuICAgICAgc2VsZi5kb20uY29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHRlbXBsYXRlIGFuZCByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuICAgICAqIG5vIHBhcmFtXG4gICAgICovXG4gICAgc2VsZi5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAkKCdib2R5JykuYXBwZW5kKHRlbXBsYXRlKTtcbiAgICAgIHNlbGYucGFyc2VTZWxlY3RvcnMoKTtcbiAgICAgIHNlbGYuZG9tLm1vZGFsX2Zvb3Rlci5zaG93KCk7XG4gICAgICBzZWxmLmRvbS5mb3JtLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW0pIHtcbiAgICAgICAgJChlbGVtKS5vbignc3VibWl0Jywgc2VsZi5vblN1Ym1pdCk7XG4gICAgICB9KTtcbiAgICAgIHNlbGYuZG9tLm1vZGFsX292ZXJsYXkub24oJ2NsaWNrJywgc2VsZi5jbG9zZSk7XG4gICAgICBzZWxmLmRvbS5idG5fY2xvc2Uub24oJ2NsaWNrJywgc2VsZi5jbG9zZSk7XG4gICAgICBzZWxmLmRvbS5idG5fbmV4dC5vbignY2xpY2snLCBzZWxmLm5leHRQYWdlKTtcbiAgICAgIHNlbGYuZG9tLmJ0bl9wcmV2Lm9uKCdjbGljaycsIHNlbGYucHJldlBhZ2UpO1xuICAgIH07XG5cbiAgICBzZWxmLmluaXQoKTtcbiAgfTtcblxuICB2YXIgdGVtcGxhdGUgPSAnPGRpdiBpZD1cInUtc2VhcmNoXCI+PGRpdiBjbGFzcz1cIm1vZGFsXCI+IDxoZWFkZXIgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiBjbGFzcz1cImNsZWFyZml4XCI+PGZvcm0gaWQ9XCJ1LXNlYXJjaC1tb2RhbC1mb3JtXCIgY2xhc3M9XCJ1LXNlYXJjaC1mb3JtXCIgbmFtZT1cInVTZWFyY2hNb2RhbEZvcm1cIj4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1LXNlYXJjaC1tb2RhbC1pbnB1dFwiIGNsYXNzPVwidS1zZWFyY2gtaW5wdXRcIiAvPiA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInUtc2VhcmNoLW1vZGFsLWJ0bi1zdWJtaXRcIiBjbGFzcz1cInUtc2VhcmNoLWJ0bi1zdWJtaXRcIj4gPHNwYW4gY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9zcGFuPiA8L2J1dHRvbj48L2Zvcm0+IDxhIGNsYXNzPVwiYnRuLWNsb3NlXCI+IDxzcGFuIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9zcGFuPiA8L2E+PGRpdiBjbGFzcz1cIm1vZGFsLWxvYWRpbmdcIj48ZGl2IGNsYXNzPVwibW9kYWwtbG9hZGluZy1iYXJcIj48L2Rpdj48L2Rpdj4gPC9oZWFkZXI+IDxtYWluIGNsYXNzPVwibW9kYWwtYm9keVwiPjx1bCBjbGFzcz1cIm1vZGFsLXJlc3VsdHMgbW9kYWwtYWpheC1jb250ZW50XCI+PC91bD4gPC9tYWluPiA8Zm9vdGVyIGNsYXNzPVwibW9kYWwtZm9vdGVyIGNsZWFyZml4XCI+PGRpdiBjbGFzcz1cIm1vZGFsLW1ldGFkYXRhIG1vZGFsLWFqYXgtY29udGVudFwiPiA8c3Ryb25nIGNsYXNzPVwicmFuZ2VcIj48L3N0cm9uZz4gb2YgPHN0cm9uZyBjbGFzcz1cInRvdGFsXCI+PC9zdHJvbmc+PC9kaXY+PGRpdiBjbGFzcz1cIm1vZGFsLWVycm9yXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJsb2dvXCI+PC9kaXY+IDxhIGNsYXNzPVwibmF2IGJ0bi1uZXh0IG1vZGFsLWFqYXgtY29udGVudFwiPiA8c3BhbiBjbGFzcz1cInRleHRcIj5ORVhUPC9zcGFuPiA8c3BhbiBjbGFzcz1cImZhbCBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9zcGFuPiA8L2E+IDxhIGNsYXNzPVwibmF2IGJ0bi1wcmV2IG1vZGFsLWFqYXgtY29udGVudFwiPiA8c3BhbiBjbGFzcz1cImZhbCBmYS1jaGV2cm9uLWxlZnRcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVwidGV4dFwiPlBSRVY8L3NwYW4+IDwvYT4gPC9mb290ZXI+PC9kaXY+PGRpdiBjbGFzcz1cIm1vZGFsLW92ZXJsYXlcIj48L2Rpdj48L2Rpdj4nO1xufSkoalF1ZXJ5KTtcblxudmFyIEFsZ29saWFTZWFyY2g7XG4oZnVuY3Rpb24oJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBieSBBbGdvbGlhIFNlYXJjaFxuICAgKiBAcGFyYW0gb3B0aW9ucyA6IChvYmplY3QpXG4gICAqL1xuICBBbGdvbGlhU2VhcmNoID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIFNlYXJjaFNlcnZpY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGVuZHBvaW50ID0gJ2h0dHBzOi8vJyArIHNlbGYuY29uZmlnLmFwcElkICsgJy1kc24uYWxnb2xpYS5uZXQvMS9pbmRleGVzLycgKyBzZWxmLmNvbmZpZy5pbmRleE5hbWU7XG4gICAgc2VsZi5hZGRMb2dvKCdhbGdvbGlhJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSByZXN1bHQgbGlzdCBodG1sXG4gICAgICogQHBhcmFtIGRhdGEgOiAoYXJyYXkpIHJlc3VsdCBpdGVtc1xuICAgICAqL1xuICAgIHNlbGYuYnVpbGRSZXN1bHRMaXN0ID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdmFyIGh0bWwgPSAnJztcbiAgICAgICQuZWFjaChkYXRhLCBmdW5jdGlvbihpbmRleCwgcm93KSB7XG4gICAgICAgIHZhciB1cmwgPSByb3cucGVybWFsaW5rIHx8IHJvdy5wYXRoIHx8ICcnO1xuICAgICAgICBpZiAoIXJvdy5wZXJtYWxpbmsgJiYgcm93LnBhdGgpIHtcbiAgICAgICAgICB1cmwgPSBST09UICsgdXJsO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0aXRsZSA9IHJvdy50aXRsZTtcbiAgICAgICAgdmFyIGRpZ2VzdCA9ICcnO1xuICAgICAgICBodG1sICs9IHNlbGYuYnVpbGRSZXN1bHQodXJsLCB0aXRsZSwgZGlnZXN0LCBpbmRleCArIDEpO1xuICAgICAgfSk7XG4gICAgICBodG1sICs9ICc8c2NyaXB0PnRyeXtwamF4LnJlZnJlc2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcXCcjdS1zZWFyY2hcXCcpKTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxcJ3BqYXg6c2VuZFxcJyxmdW5jdGlvbigpeyQoXFwnI3Utc2VhcmNoXFwnKS5mYWRlT3V0KDUwMCk7JChcXCdib2R5XFwnKS5yZW1vdmVDbGFzcyhcXCdtb2RhbC1hY3RpdmVcXCcpfSk7fWNhdGNoKGUpeyQoXFwnI3Utc2VhcmNoXFwnKS5mYWRlT3V0KDUwMCk7fTwvc2NyaXB0Pic7XG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgbWV0YWRhdGEgYWZ0ZXIgYSBzdWNjZXNzZnVsIHF1ZXJ5XG4gICAgICogQHBhcmFtIGRhdGEgOiAob2JqZWN0KSB0aGUgcmF3IHNlYXJjaCByZXNwb25zZSBkYXRhXG4gICAgICovXG4gICAgc2VsZi5idWlsZE1ldGFkYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgc2VsZi5uYXYuY3VycmVudCA9IGRhdGEucGFnZSAqIGRhdGEuaGl0c1BlclBhZ2UgKyAxO1xuICAgICAgc2VsZi5uYXYuY3VycmVudENvdW50ID0gZGF0YS5oaXRzLmxlbmd0aDtcbiAgICAgIHNlbGYubmF2LnRvdGFsID0gcGFyc2VJbnQoZGF0YS5uYkhpdHMpO1xuICAgICAgc2VsZi5kb20ubW9kYWxfbWV0YWRhdGEuY2hpbGRyZW4oJy50b3RhbCcpLmh0bWwoc2VsZi5uYXYudG90YWwpO1xuICAgICAgc2VsZi5kb20ubW9kYWxfbWV0YWRhdGEuY2hpbGRyZW4oJy5yYW5nZScpLmh0bWwoc2VsZi5uYXYuY3VycmVudCArICctJyArIChzZWxmLm5hdi5jdXJyZW50ICsgc2VsZi5uYXYuY3VycmVudENvdW50IC0gMSkpO1xuICAgICAgaWYgKHNlbGYubmF2LnRvdGFsID4gMCkge1xuICAgICAgICBzZWxmLmRvbS5tb2RhbF9tZXRhZGF0YS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmRvbS5tb2RhbF9tZXRhZGF0YS5oaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnBhZ2UgPCBkYXRhLm5iUGFnZXMgLSAxKSB7XG4gICAgICAgIHNlbGYubmF2Lm5leHQgPSAoZGF0YS5wYWdlICsgMSkgKyAxO1xuICAgICAgICBzZWxmLmRvbS5idG5fbmV4dC5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLm5hdi5uZXh0ID0gLTE7XG4gICAgICAgIHNlbGYuZG9tLmJ0bl9uZXh0LmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhLnBhZ2UgPiAwKSB7XG4gICAgICAgIHNlbGYubmF2LnByZXYgPSAoZGF0YS5wYWdlICsgMSkgLSAxO1xuICAgICAgICBzZWxmLmRvbS5idG5fcHJldi5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLm5hdi5wcmV2ID0gLTE7XG4gICAgICAgIHNlbGYuZG9tLmJ0bl9wcmV2LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2VuZCBhIEdFVCByZXF1ZXN0XG4gICAgICogQHBhcmFtIHF1ZXJ5VGV4dCA6IChzdHJpbmcpIHRoZSBxdWVyeSB0ZXh0XG4gICAgICogQHBhcmFtIHBhZ2UgOiAoaW50KSB0aGUgY3VycmVudCBwYWdlIChzdGFydCBmcm9tIDEpXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIDogKGZ1bmN0aW9uKVxuICAgICAqL1xuICAgIHNlbGYucXVlcnkgPSBmdW5jdGlvbihxdWVyeVRleHQsIHBhZ2UsIGNhbGxiYWNrKSB7XG4gICAgICAkLmdldChlbmRwb2ludCwge1xuICAgICAgICBxdWVyeSAgICAgICAgICAgICAgICAgICAgIDogcXVlcnlUZXh0LFxuICAgICAgICBwYWdlICAgICAgICAgICAgICAgICAgICAgIDogcGFnZSAtIDEsXG4gICAgICAgIGhpdHNQZXJQYWdlICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5wZXJfcGFnZSxcbiAgICAgICAgJ3gtYWxnb2xpYS1hcHBsaWNhdGlvbi1pZCc6IHNlbGYuY29uZmlnLmFwcElkLFxuICAgICAgICAneC1hbGdvbGlhLWFwaS1rZXknICAgICAgIDogc2VsZi5jb25maWcuYXBpS2V5XG4gICAgICB9LCBmdW5jdGlvbihkYXRhLCBzdGF0dXMpIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnICYmIGRhdGEuaGl0cyAmJiBkYXRhLmhpdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciByZXN1bHRzID0gc2VsZi5idWlsZFJlc3VsdExpc3QoZGF0YS5oaXRzKTtcbiAgICAgICAgICBzZWxmLmRvbS5tb2RhbF9yZXN1bHRzLmh0bWwocmVzdWx0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5vblF1ZXJ5RXJyb3IocXVlcnlUZXh0LCBzdGF0dXMpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuYnVpbGRNZXRhZGF0YShkYXRhKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxufSkoalF1ZXJ5KTsiXX0=
