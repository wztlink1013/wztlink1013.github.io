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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvaGV4by10aGVtZS1seXJpY3Mvc291cmNlL3B1YmxpYy9qcy9wYXJ0L2FsZ29saWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJLGFBQWEsR0FBRyxFQUFwQjs7QUFFQSxDQUFDLFVBQVMsQ0FBVCxFQUFZO0FBRVg7QUFDRjtBQUNBO0FBQ0E7QUFDRSxFQUFBLGFBQWEsR0FBRyx1QkFBUyxPQUFULEVBQWtCO0FBQ2hDLFFBQUksSUFBSSxHQUFHLElBQVg7QUFFQSxJQUFBLElBQUksQ0FBQyxNQUFMLEdBQWMsQ0FBQyxDQUFDLE1BQUYsQ0FBUztBQUNyQixNQUFBLFFBQVEsRUFBRyxFQURVO0FBRXJCLE1BQUEsU0FBUyxFQUFFO0FBQ1QsUUFBQSxJQUFJLEVBQWdCLE1BRFg7QUFFVCxRQUFBLElBQUksRUFBZ0IsZ0JBRlg7QUFHVCxRQUFBLEtBQUssRUFBZSxpQkFIWDtBQUlULFFBQUEsU0FBUyxFQUFXLFdBSlg7QUFLVCxRQUFBLEtBQUssRUFBZSxrQkFMWDtBQU1ULFFBQUEsVUFBVSxFQUFVLHVCQU5YO0FBT1QsUUFBQSxZQUFZLEVBQVEseUJBUFg7QUFRVCxRQUFBLGFBQWEsRUFBTywwQkFSWDtBQVNULFFBQUEsYUFBYSxFQUFPLDBCQVRYO0FBVVQsUUFBQSxjQUFjLEVBQU0sMkJBVlg7QUFXVCxRQUFBLFdBQVcsRUFBUyx3QkFYWDtBQVlULFFBQUEsaUJBQWlCLEVBQUcsOEJBWlg7QUFhVCxRQUFBLGtCQUFrQixFQUFFLCtCQWJYO0FBY1QsUUFBQSxVQUFVLEVBQVUsK0JBZFg7QUFlVCxRQUFBLFNBQVMsRUFBVyxzQkFmWDtBQWdCVCxRQUFBLFFBQVEsRUFBWSxxQkFoQlg7QUFpQlQsUUFBQSxRQUFRLEVBQVk7QUFqQlgsT0FGVTtBQXFCckIsTUFBQSxNQUFNLEVBQUU7QUFDTixnQkFBVztB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ckI7QUFHZCxRQUFBLFdBQVcsRUFBaUIsSUFBSSxDQUFDLE1BQUwsQ0FBWSxRQUgxQjtBQUlkLG9DQUE0QixJQUFJLENBQUMsTUFBTCxDQUFZLEtBSjFCO0FBS2QsNkJBQTRCLElBQUksQ0FBQyxNQUFMLENBQVk7QUFMMUIsT0FBaEIsRUFNRyxVQUFTLElBQVQsRUFBZSxNQUFmLEVBQXVCO0FBQ3hCLFlBQUksTUFBTSxLQUFLLFNBQVgsSUFBd0IsSUFBSSxDQUFDLElBQTdCLElBQXFDLElBQUksQ0FBQyxJQUFMLENBQVUsTUFBVixHQUFtQixDQUE1RCxFQUErRDtBQUM3RCxjQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBTCxDQUFxQixJQUFJLENBQUMsSUFBMUIsQ0FBZDtBQUNBLFVBQUEsSUFBSSxDQUFDLEdBQUwsQ0FBUyxhQUFULENBQXVCLElBQXZCLENBQTRCLE9BQTVCO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsVUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixTQUFsQixFQUE2QixNQUE3QjtBQUNEOztBQUNELFFBQUEsSUFBSSxDQUFDLGFBQUwsQ0FBbUIsSUFBbkI7O0FBQ0EsWUFBSSxRQUFKLEVBQWM7QUFDWixVQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDtBQUNGLE9BakJEO0FBa0JELEtBbkJEOztBQXFCQSxXQUFPLElBQVA7QUFDRCxHQXJGRDtBQXVGRCxDQTlGRCxFQThGRyxNQTlGSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qIFRPRE86IOWPguiAg1xuaHR0cHM6Ly9naXRodWIuY29tL29uY2xldG9tL2hleG8tYWxnb2xpYSNyZWFkbWVcbmh0dHBzOi8vZ2l0aHViLmNvbS92b2xhbnRpcy14L2hleG8tdGhlbWUtdm9sYW50aXMvYmxvYi9tYWluL2xheW91dC9fcGFydGlhbC9zY3JpcHRzL3NlYXJjaC5lanNcbmh0dHBzOi8vZ2l0aHViLmNvbS92b2xhbnRpcy14L2hleG8tdGhlbWUtdm9sYW50aXMvYmxvYi9tYWluL3NvdXJjZS9qcy9zZWFyY2gvYWxnb2xpYS5qc1xuKi9cblxudmFyIFNlYXJjaFNlcnZpY2UgPSAnJztcblxuKGZ1bmN0aW9uKCQpIHtcblxuICAvKipcbiAgICogQSBzdXBlciBjbGFzcyBvZiBjb21tb24gbG9naWNzIGZvciBhbGwgc2VhcmNoIHNlcnZpY2VzXG4gICAqIEBwYXJhbSBvcHRpb25zIDogKG9iamVjdClcbiAgICovXG4gIFNlYXJjaFNlcnZpY2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgc2VsZi5jb25maWcgPSAkLmV4dGVuZCh7XG4gICAgICBwZXJfcGFnZSA6IDEwLFxuICAgICAgc2VsZWN0b3JzOiB7XG4gICAgICAgIGJvZHkgICAgICAgICAgICAgIDogJ2JvZHknLFxuICAgICAgICBmb3JtICAgICAgICAgICAgICA6ICcudS1zZWFyY2gtZm9ybScsXG4gICAgICAgIGlucHV0ICAgICAgICAgICAgIDogJy51LXNlYXJjaC1pbnB1dCcsXG4gICAgICAgIGNvbnRhaW5lciAgICAgICAgIDogJyN1LXNlYXJjaCcsXG4gICAgICAgIG1vZGFsICAgICAgICAgICAgIDogJyN1LXNlYXJjaCAubW9kYWwnLFxuICAgICAgICBtb2RhbF9ib2R5ICAgICAgICA6ICcjdS1zZWFyY2ggLm1vZGFsLWJvZHknLFxuICAgICAgICBtb2RhbF9mb290ZXIgICAgICA6ICcjdS1zZWFyY2ggLm1vZGFsLWZvb3RlcicsXG4gICAgICAgIG1vZGFsX292ZXJsYXkgICAgIDogJyN1LXNlYXJjaCAubW9kYWwtb3ZlcmxheScsXG4gICAgICAgIG1vZGFsX3Jlc3VsdHMgICAgIDogJyN1LXNlYXJjaCAubW9kYWwtcmVzdWx0cycsXG4gICAgICAgIG1vZGFsX21ldGFkYXRhICAgIDogJyN1LXNlYXJjaCAubW9kYWwtbWV0YWRhdGEnLFxuICAgICAgICBtb2RhbF9lcnJvciAgICAgICA6ICcjdS1zZWFyY2ggLm1vZGFsLWVycm9yJyxcbiAgICAgICAgbW9kYWxfbG9hZGluZ19iYXIgOiAnI3Utc2VhcmNoIC5tb2RhbC1sb2FkaW5nLWJhcicsXG4gICAgICAgIG1vZGFsX2FqYXhfY29udGVudDogJyN1LXNlYXJjaCAubW9kYWwtYWpheC1jb250ZW50JyxcbiAgICAgICAgbW9kYWxfbG9nbyAgICAgICAgOiAnI3Utc2VhcmNoIC5tb2RhbC1mb290ZXIgLmxvZ28nLFxuICAgICAgICBidG5fY2xvc2UgICAgICAgICA6ICcjdS1zZWFyY2ggLmJ0bi1jbG9zZScsXG4gICAgICAgIGJ0bl9uZXh0ICAgICAgICAgIDogJyN1LXNlYXJjaCAuYnRuLW5leHQnLFxuICAgICAgICBidG5fcHJldiAgICAgICAgICA6ICcjdS1zZWFyY2ggLmJ0bi1wcmV2J1xuICAgICAgfSxcbiAgICAgIGJyYW5kczoge1xuICAgICAgICAnaGV4bycgICA6IHtsb2dvOiAnJywgdXJsOiAnJ30sXG4gICAgICAgICdnb29nbGUnIDoge2xvZ286ICdnb29nbGUuc3ZnJywgdXJsOiAnaHR0cHM6Ly9jc2UuZ29vZ2xlLmNvbSd9LFxuICAgICAgICAnYWxnb2xpYSc6IHtsb2dvOiAnYWxnb2xpYS5zdmcnLCB1cmw6ICdodHRwczovL3d3dy5hbGdvbGlhLmNvbSd9LFxuICAgICAgICAnYmFpZHUnICA6IHtsb2dvOiAnYmFpZHUuc3ZnJywgdXJsOiAnaHR0cDovL3puLmJhaWR1LmNvbS9jc2UvaG9tZS9pbmRleCd9LFxuICAgICAgICAnYXp1cmUnICA6IHtsb2dvOiAnYXp1cmUuc3ZnJywgdXJsOiAnaHR0cHM6Ly9henVyZS5taWNyb3NvZnQuY29tL2VuLXVzL3NlcnZpY2VzL3NlYXJjaC8nfVxuICAgICAgfSxcbiAgICAgIGltYWdlUGF0aDogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC92b2xhbnRpcy14L2Nkbi12b2xhbnRpc0BtYXN0ZXIvaW1nL2xvZ28vJ1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgc2VsZi5kb20gPSB7fTtcbiAgICBzZWxmLnBlcmNlbnRMb2FkZWQgPSAwO1xuICAgIHNlbGYub3BlbiA9IGZhbHNlO1xuICAgIHNlbGYucXVlcnlUZXh0ID0gJyc7XG4gICAgc2VsZi5uYXYgPSB7XG4gICAgICBuZXh0ICAgOiAtMSxcbiAgICAgIHByZXYgICA6IC0xLFxuICAgICAgdG90YWwgIDogMCxcbiAgICAgIGN1cnJlbnQ6IDFcbiAgICB9O1xuXG4gICAgc2VsZi5wYXJzZVNlbGVjdG9ycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHNlbGYuY29uZmlnLnNlbGVjdG9ycykge1xuICAgICAgICBzZWxmLmRvbVtrZXldID0gJChzZWxmLmNvbmZpZy5zZWxlY3RvcnNba2V5XSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYuYmVmb3JlUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghc2VsZi5vcGVuKSB7XG4gICAgICAgIHNlbGYuZG9tLmNvbnRhaW5lci5mYWRlSW4oKTtcbiAgICAgICAgLy8gc2VsZi5kb20uYm9keS5hZGRDbGFzcygnbW9kYWwtYWN0aXZlJyk7XG4gICAgICAgIC8vIOS4iumdoueahOaYr+WOu+mZpOS6huaWh+eroOeahOa7muWKqOadoe+8jOaIkeinieW+l+ayoeW/heimgVxuICAgICAgfVxuICAgICAgc2VsZi5kb20uaW5wdXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbSkge1xuICAgICAgICAkKGVsZW0pLnZhbChzZWxmLnF1ZXJ5VGV4dCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgc2VsZi5kb20ubW9kYWxfZXJyb3IuaGlkZSgpO1xuICAgICAgc2VsZi5kb20ubW9kYWxfYWpheF9jb250ZW50LnJlbW92ZUNsYXNzKCdsb2FkZWQnKTtcbiAgICAgIHNlbGYuc3RhcnRMb2FkaW5nKCk7XG4gICAgfTtcblxuICAgIHNlbGYuYWZ0ZXJRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5kb20ubW9kYWxfYm9keS5zY3JvbGxUb3AoMCk7XG4gICAgICBzZWxmLmRvbS5tb2RhbF9hamF4X2NvbnRlbnQuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAgICAgc2VsZi5zdG9wTG9hZGluZygpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIGEgY29tcGxldGUgc2VyYWNoIG9wZXJhdGlvbiBpbmNsdWRpbmcgVUkgdXBkYXRlcyBhbmQgcXVlcnlcbiAgICAgKiBAcGFyYW0gc3RhcnRJbmRleCB7aW50fSBzdGFydCBpbmRleCBvciBwYWdlIG51bWJlclxuICAgICAqL1xuICAgIHNlbGYuc2VhcmNoID0gZnVuY3Rpb24oc3RhcnRJbmRleCwgY2FsbGJhY2spIHtcbiAgICAgIHNlbGYuYmVmb3JlUXVlcnkoKTtcbiAgICAgIGlmIChzZWxmLnNlYXJjaCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgIHNlbGYucXVlcnkoc2VsZi5xdWVyeVRleHQsIHN0YXJ0SW5kZXgsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuYWZ0ZXJRdWVyeSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdxdWVyeSgpIGRvZXMgbm90IGV4aXN0LicpO1xuICAgICAgICBzZWxmLm9uUXVlcnlFcnJvcihzZWxmLnF1ZXJ5VGV4dCwgJycpO1xuICAgICAgICBzZWxmLmFmdGVyUXVlcnkoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgZXJyb3IgaGFuZGxlclxuICAgICAqIEBwYXJhbSBxdWVyeVRleHQ6IChzdHJpbmcpXG4gICAgICogQHBhcmFtIHN0YXR1czogKHN0cmluZylcbiAgICAgKi9cbiAgICBzZWxmLm9uUXVlcnlFcnJvciA9IGZ1bmN0aW9uKHF1ZXJ5VGV4dCwgc3RhdHVzKSB7XG4gICAgICB2YXIgZXJyTXNnID0gJyc7XG4gICAgICBpZiAoc3RhdHVzID09PSAnc3VjY2VzcycpIGVyck1zZyA9ICdObyByZXN1bHQgZm91bmQgZm9yIFwiJyArIHF1ZXJ5VGV4dCArICdcIi4nO1xuICAgICAgZWxzZSBpZiAoc3RhdHVzID09PSAndGltZW91dCcpIGVyck1zZyA9ICdVbmZvcnR1bmF0ZSB0aW1lb3V0Lic7XG4gICAgICBlbHNlIGVyck1zZyA9ICdNeXN0ZXJpb3VzIGZhaWx1cmUuJztcbiAgICAgIHNlbGYuZG9tLm1vZGFsX3Jlc3VsdHMuaHRtbCgnJyk7XG4gICAgICBzZWxmLmRvbS5tb2RhbF9lcnJvci5odG1sKGVyck1zZyk7XG4gICAgICBzZWxmLmRvbS5tb2RhbF9lcnJvci5zaG93KCk7XG4gICAgfTtcblxuICAgIHNlbGYubmV4dFBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChzZWxmLm5hdi5uZXh0ICE9PSAtMSkge1xuICAgICAgICBzZWxmLnNlYXJjaChzZWxmLm5hdi5uZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5wcmV2UGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHNlbGYubmF2LnByZXYgIT09IC0xKSB7XG4gICAgICAgIHNlbGYuc2VhcmNoKHNlbGYubmF2LnByZXYpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLmdldFVybFJlbGF0aXZlUGF0aCA9IGZ1bmN0aW9uKHVybCkge1xuICAgICAgdmFyIGFyclVybCA9IHVybC5zcGxpdCgnLy8nKTtcbiAgICAgIHZhciBzdGFydCA9IGFyclVybFsxXS5pbmRleE9mKCcvJyk7XG4gICAgICB2YXIgcmVsVXJsID0gYXJyVXJsWzFdLnN1YnN0cmluZyhzdGFydCk7XG4gICAgICBpZiAocmVsVXJsLmluZGV4T2YoJz8nKSAhPSAtMSkge1xuICAgICAgICByZWxVcmwgPSByZWxVcmwuc3BsaXQoJz8nKVswXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZWxVcmw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGh0bWwgZm9yIG9uZSByZXN1bHRcbiAgICAgKiBAcGFyYW0gdXJsIDogKHN0cmluZykgdXJsXG4gICAgICogQHBhcmFtIHRpdGxlIDogKHN0cmluZykgdGl0bGVcbiAgICAgKiBAcGFyYW0gZGlnZXN0IDogKHN0cmluZykgZGlnZXN0XG4gICAgICovXG4gICAgc2VsZi5idWlsZFJlc3VsdCA9IGZ1bmN0aW9uKHVybCwgdGl0bGUsIGRpZ2VzdCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHNlbGYuZ2V0VXJsUmVsYXRpdmVQYXRoKHVybCk7XG4gICAgICB2YXIgaHRtbCA9ICcnO1xuICAgICAgaHRtbCA9ICc8bGk+JztcbiAgICAgIGh0bWwgKz0gJzxhIGNsYXNzPVxcJ3Jlc3VsdFxcJyBocmVmPVxcJycgKyByZXN1bHQgKyAnXFwnPic7XG4gICAgICBodG1sICs9ICc8c3BhbiBjbGFzcz1cXCd0aXRsZVxcJz4nICsgdGl0bGUgKyAnPC9zcGFuPic7XG4gICAgICBpZiAoZGlnZXN0ICE9PSAnJykgaHRtbCArPSAnPHNwYW4gY2xhc3M9XFwnZGlnZXN0XFwnPicgKyBkaWdlc3QgKyAnPC9zcGFuPic7XG4gICAgICBodG1sICs9ICc8L2E+JztcbiAgICAgIGh0bWwgKz0gJzwvbGk+JztcbiAgICAgIHJldHVybiBodG1sO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgbW9kYWwsIHJlc3VtZSBib2R5IHNjcm9sbGluZ1xuICAgICAqIG5vIHBhcmFtXG4gICAgICovXG4gICAgc2VsZi5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5vcGVuID0gZmFsc2U7XG4gICAgICBzZWxmLmRvbS5jb250YWluZXIuZmFkZU91dCgpO1xuICAgICAgc2VsZi5kb20uYm9keS5yZW1vdmVDbGFzcygnbW9kYWwtYWN0aXZlJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNlYXJjaGZvcm0gc3VibWl0IGV2ZW50IGhhbmRsZXJcbiAgICAgKiBAcGFyYW0gcXVlcnlUZXh0IDogKHN0cmluZykgdGhlIHF1ZXJ5IHRleHRcbiAgICAgKi9cbiAgICBzZWxmLm9uU3VibWl0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZWxmLnF1ZXJ5VGV4dCA9ICQodGhpcykuZmluZCgnLnUtc2VhcmNoLWlucHV0JykudmFsKCk7XG4gICAgICBpZiAoc2VsZi5xdWVyeVRleHQpIHtcbiAgICAgICAgc2VsZi5zZWFyY2goMSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGxvYWRpbmcgYmFyIGFuaW1hdGlvblxuICAgICAqIG5vIHBhcmFtXG4gICAgICovXG4gICAgc2VsZi5zdGFydExvYWRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuZG9tLm1vZGFsX2xvYWRpbmdfYmFyLnNob3coKTtcbiAgICAgIHNlbGYubG9hZGluZ1RpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYucGVyY2VudExvYWRlZCA9IE1hdGgubWluKHNlbGYucGVyY2VudExvYWRlZCArIDUsIDk1KTtcbiAgICAgICAgc2VsZi5kb20ubW9kYWxfbG9hZGluZ19iYXIuY3NzKCd3aWR0aCcsIHNlbGYucGVyY2VudExvYWRlZCArICclJyk7XG4gICAgICB9LCAxMDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGxvYWRpbmcgYmFyIGFuaW1hdGlvblxuICAgICAqIG5vIHBhcmFtXG4gICAgICovXG4gICAgc2VsZi5zdG9wTG9hZGluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChzZWxmLmxvYWRpbmdUaW1lcik7XG4gICAgICBzZWxmLmRvbS5tb2RhbF9sb2FkaW5nX2Jhci5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcbiAgICAgIHNlbGYuZG9tLm1vZGFsX2xvYWRpbmdfYmFyLmZhZGVPdXQoKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYucGVyY2VudExvYWRlZCA9IDA7XG4gICAgICAgIHNlbGYuZG9tLm1vZGFsX2xvYWRpbmdfYmFyLmNzcygnd2lkdGgnLCAnMCUnKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBzZXJ2aWNlIGJyYW5kaW5nXG4gICAgICogQHBhcmFtIHNlcnZpY2Uge1N0cmluZ30gc2VydmljZSBuYW1lXG4gICAgICovXG4gICAgc2VsZi5hZGRMb2dvID0gZnVuY3Rpb24oc2VydmljZSkge1xuICAgICAgdmFyIGh0bWwgPSAnJztcbiAgICAgIGlmIChzZWxmLmNvbmZpZy5icmFuZHNbc2VydmljZV0gJiYgc2VsZi5jb25maWcuYnJhbmRzW3NlcnZpY2VdLmxvZ28pIHtcbiAgICAgICAgaHRtbCArPSAnPGEgaHJlZj1cXCcnICsgc2VsZi5jb25maWcuYnJhbmRzW3NlcnZpY2VdLnVybCArICdcXCcgY2xhc3M9XFwnJyArIHNlcnZpY2UgKyAnXFwnPic7XG4gICAgICAgIGh0bWwgKz0gICAgJzxpbWcgc3JjPVwiJyArIHNlbGYuY29uZmlnLmltYWdlUGF0aCArIHNlbGYuY29uZmlnLmJyYW5kc1tzZXJ2aWNlXS5sb2dvICsgJ1wiIC8+JztcbiAgICAgICAgaHRtbCArPSAnPC9hPic7XG4gICAgICAgIHNlbGYuZG9tLm1vZGFsX2xvZ28uaHRtbChodG1sKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmRvbS5mb3JtLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW0pIHtcbiAgICAgICAgJChlbGVtKS5vZmYoJ3N1Ym1pdCcpO1xuICAgICAgfSk7XG4gICAgICBzZWxmLmRvbS5tb2RhbF9vdmVybGF5Lm9mZignY2xpY2snKTtcbiAgICAgIHNlbGYuZG9tLmJ0bl9jbG9zZS5vZmYoJ2NsaWNrJyk7XG4gICAgICBzZWxmLmRvbS5idG5fbmV4dC5vZmYoJ2NsaWNrJyk7XG4gICAgICBzZWxmLmRvbS5idG5fcHJldi5vZmYoJ2NsaWNrJyk7XG4gICAgICBzZWxmLmRvbS5jb250YWluZXIucmVtb3ZlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIExvYWQgdGVtcGxhdGUgYW5kIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG4gICAgICogbm8gcGFyYW1cbiAgICAgKi9cbiAgICBzZWxmLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICQoJ2JvZHknKS5hcHBlbmQodGVtcGxhdGUpO1xuICAgICAgc2VsZi5wYXJzZVNlbGVjdG9ycygpO1xuICAgICAgc2VsZi5kb20ubW9kYWxfZm9vdGVyLnNob3coKTtcbiAgICAgIHNlbGYuZG9tLmZvcm0uZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbSkge1xuICAgICAgICAkKGVsZW0pLm9uKCdzdWJtaXQnLCBzZWxmLm9uU3VibWl0KTtcbiAgICAgIH0pO1xuICAgICAgc2VsZi5kb20ubW9kYWxfb3ZlcmxheS5vbignY2xpY2snLCBzZWxmLmNsb3NlKTtcbiAgICAgIHNlbGYuZG9tLmJ0bl9jbG9zZS5vbignY2xpY2snLCBzZWxmLmNsb3NlKTtcbiAgICAgIHNlbGYuZG9tLmJ0bl9uZXh0Lm9uKCdjbGljaycsIHNlbGYubmV4dFBhZ2UpO1xuICAgICAgc2VsZi5kb20uYnRuX3ByZXYub24oJ2NsaWNrJywgc2VsZi5wcmV2UGFnZSk7XG4gICAgfTtcblxuICAgIHNlbGYuaW5pdCgpO1xuICB9O1xuXG4gIHZhciB0ZW1wbGF0ZSA9ICc8ZGl2IGlkPVwidS1zZWFyY2hcIj48ZGl2IGNsYXNzPVwibW9kYWxcIj4gPGhlYWRlciBjbGFzcz1cIm1vZGFsLWhlYWRlclwiIGNsYXNzPVwiY2xlYXJmaXhcIj48Zm9ybSBpZD1cInUtc2VhcmNoLW1vZGFsLWZvcm1cIiBjbGFzcz1cInUtc2VhcmNoLWZvcm1cIiBuYW1lPVwidVNlYXJjaE1vZGFsRm9ybVwiPiA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInUtc2VhcmNoLW1vZGFsLWlucHV0XCIgY2xhc3M9XCJ1LXNlYXJjaC1pbnB1dFwiIC8+IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwidS1zZWFyY2gtbW9kYWwtYnRuLXN1Ym1pdFwiIGNsYXNzPVwidS1zZWFyY2gtYnRuLXN1Ym1pdFwiPiA8c3BhbiBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L3NwYW4+IDwvYnV0dG9uPjwvZm9ybT4gPGEgY2xhc3M9XCJidG4tY2xvc2VcIj4gPHNwYW4gY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L3NwYW4+IDwvYT48ZGl2IGNsYXNzPVwibW9kYWwtbG9hZGluZ1wiPjxkaXYgY2xhc3M9XCJtb2RhbC1sb2FkaW5nLWJhclwiPjwvZGl2PjwvZGl2PiA8L2hlYWRlcj4gPG1haW4gY2xhc3M9XCJtb2RhbC1ib2R5XCI+PHVsIGNsYXNzPVwibW9kYWwtcmVzdWx0cyBtb2RhbC1hamF4LWNvbnRlbnRcIj48L3VsPiA8L21haW4+IDxmb290ZXIgY2xhc3M9XCJtb2RhbC1mb290ZXIgY2xlYXJmaXhcIj48ZGl2IGNsYXNzPVwibW9kYWwtbWV0YWRhdGEgbW9kYWwtYWpheC1jb250ZW50XCI+IDxzdHJvbmcgY2xhc3M9XCJyYW5nZVwiPjwvc3Ryb25nPiBvZiA8c3Ryb25nIGNsYXNzPVwidG90YWxcIj48L3N0cm9uZz48L2Rpdj48ZGl2IGNsYXNzPVwibW9kYWwtZXJyb3JcIj48L2Rpdj4gPGRpdiBjbGFzcz1cImxvZ29cIj48L2Rpdj4gPGEgY2xhc3M9XCJuYXYgYnRuLW5leHQgbW9kYWwtYWpheC1jb250ZW50XCI+IDxzcGFuIGNsYXNzPVwidGV4dFwiPk5FWFQ8L3NwYW4+IDxzcGFuIGNsYXNzPVwiZmFsIGZhLWNoZXZyb24tcmlnaHRcIj48L3NwYW4+IDwvYT4gPGEgY2xhc3M9XCJuYXYgYnRuLXByZXYgbW9kYWwtYWpheC1jb250ZW50XCI+IDxzcGFuIGNsYXNzPVwiZmFsIGZhLWNoZXZyb24tbGVmdFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+UFJFVjwvc3Bhbj4gPC9hPiA8L2Zvb3Rlcj48L2Rpdj48ZGl2IGNsYXNzPVwibW9kYWwtb3ZlcmxheVwiPjwvZGl2PjwvZGl2Pic7XG59KShqUXVlcnkpO1xuXG52YXIgQWxnb2xpYVNlYXJjaDtcbihmdW5jdGlvbigkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogU2VhcmNoIGJ5IEFsZ29saWEgU2VhcmNoXG4gICAqIEBwYXJhbSBvcHRpb25zIDogKG9iamVjdClcbiAgICovXG4gIEFsZ29saWFTZWFyY2ggPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgU2VhcmNoU2VydmljZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZW5kcG9pbnQgPSAnaHR0cHM6Ly8nICsgc2VsZi5jb25maWcuYXBwSWQgKyAnLWRzbi5hbGdvbGlhLm5ldC8xL2luZGV4ZXMvJyArIHNlbGYuY29uZmlnLmluZGV4TmFtZTtcbiAgICBzZWxmLmFkZExvZ28oJ2FsZ29saWEnKTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHJlc3VsdCBsaXN0IGh0bWxcbiAgICAgKiBAcGFyYW0gZGF0YSA6IChhcnJheSkgcmVzdWx0IGl0ZW1zXG4gICAgICovXG4gICAgc2VsZi5idWlsZFJlc3VsdExpc3QgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB2YXIgaHRtbCA9ICcnO1xuICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKGluZGV4LCByb3cpIHtcbiAgICAgICAgdmFyIHVybCA9IHJvdy5wZXJtYWxpbmsgfHwgcm93LnBhdGggfHwgJyc7XG4gICAgICAgIGlmICghcm93LnBlcm1hbGluayAmJiByb3cucGF0aCkge1xuICAgICAgICAgIHVybCA9IFJPT1QgKyB1cmw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRpdGxlID0gcm93LnRpdGxlO1xuICAgICAgICB2YXIgZGlnZXN0ID0gJyc7XG4gICAgICAgIGh0bWwgKz0gc2VsZi5idWlsZFJlc3VsdCh1cmwsIHRpdGxlLCBkaWdlc3QsIGluZGV4ICsgMSk7XG4gICAgICB9KTtcbiAgICAgIGh0bWwgKz0gJzxzY3JpcHQ+dHJ5e3BqYXgucmVmcmVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxcJyN1LXNlYXJjaFxcJykpO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXFwncGpheDpzZW5kXFwnLGZ1bmN0aW9uKCl7JChcXCcjdS1zZWFyY2hcXCcpLmZhZGVPdXQoNTAwKTskKFxcJ2JvZHlcXCcpLnJlbW92ZUNsYXNzKFxcJ21vZGFsLWFjdGl2ZVxcJyl9KTt9Y2F0Y2goZSl7JChcXCcjdS1zZWFyY2hcXCcpLmZhZGVPdXQoNTAwKTt9PC9zY3JpcHQ+JztcbiAgICAgIHJldHVybiBodG1sO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBtZXRhZGF0YSBhZnRlciBhIHN1Y2Nlc3NmdWwgcXVlcnlcbiAgICAgKiBAcGFyYW0gZGF0YSA6IChvYmplY3QpIHRoZSByYXcgc2VhcmNoIHJlc3BvbnNlIGRhdGFcbiAgICAgKi9cbiAgICBzZWxmLmJ1aWxkTWV0YWRhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBzZWxmLm5hdi5jdXJyZW50ID0gZGF0YS5wYWdlICogZGF0YS5oaXRzUGVyUGFnZSArIDE7XG4gICAgICBzZWxmLm5hdi5jdXJyZW50Q291bnQgPSBkYXRhLmhpdHMubGVuZ3RoO1xuICAgICAgc2VsZi5uYXYudG90YWwgPSBwYXJzZUludChkYXRhLm5iSGl0cyk7XG4gICAgICBzZWxmLmRvbS5tb2RhbF9tZXRhZGF0YS5jaGlsZHJlbignLnRvdGFsJykuaHRtbChzZWxmLm5hdi50b3RhbCk7XG4gICAgICBzZWxmLmRvbS5tb2RhbF9tZXRhZGF0YS5jaGlsZHJlbignLnJhbmdlJykuaHRtbChzZWxmLm5hdi5jdXJyZW50ICsgJy0nICsgKHNlbGYubmF2LmN1cnJlbnQgKyBzZWxmLm5hdi5jdXJyZW50Q291bnQgLSAxKSk7XG4gICAgICBpZiAoc2VsZi5uYXYudG90YWwgPiAwKSB7XG4gICAgICAgIHNlbGYuZG9tLm1vZGFsX21ldGFkYXRhLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuZG9tLm1vZGFsX21ldGFkYXRhLmhpZGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEucGFnZSA8IGRhdGEubmJQYWdlcyAtIDEpIHtcbiAgICAgICAgc2VsZi5uYXYubmV4dCA9IChkYXRhLnBhZ2UgKyAxKSArIDE7XG4gICAgICAgIHNlbGYuZG9tLmJ0bl9uZXh0LnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubmF2Lm5leHQgPSAtMTtcbiAgICAgICAgc2VsZi5kb20uYnRuX25leHQuaGlkZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGEucGFnZSA+IDApIHtcbiAgICAgICAgc2VsZi5uYXYucHJldiA9IChkYXRhLnBhZ2UgKyAxKSAtIDE7XG4gICAgICAgIHNlbGYuZG9tLmJ0bl9wcmV2LnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubmF2LnByZXYgPSAtMTtcbiAgICAgICAgc2VsZi5kb20uYnRuX3ByZXYuaGlkZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZW5kIGEgR0VUIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0gcXVlcnlUZXh0IDogKHN0cmluZykgdGhlIHF1ZXJ5IHRleHRcbiAgICAgKiBAcGFyYW0gcGFnZSA6IChpbnQpIHRoZSBjdXJyZW50IHBhZ2UgKHN0YXJ0IGZyb20gMSlcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgOiAoZnVuY3Rpb24pXG4gICAgICovXG4gICAgc2VsZi5xdWVyeSA9IGZ1bmN0aW9uKHF1ZXJ5VGV4dCwgcGFnZSwgY2FsbGJhY2spIHtcbiAgICAgICQuZ2V0KGVuZHBvaW50LCB7XG4gICAgICAgIHF1ZXJ5ICAgICAgICAgICAgICAgICAgICAgOiBxdWVyeVRleHQsXG4gICAgICAgIHBhZ2UgICAgICAgICAgICAgICAgICAgICAgOiBwYWdlIC0gMSxcbiAgICAgICAgaGl0c1BlclBhZ2UgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLnBlcl9wYWdlLFxuICAgICAgICAneC1hbGdvbGlhLWFwcGxpY2F0aW9uLWlkJzogc2VsZi5jb25maWcuYXBwSWQsXG4gICAgICAgICd4LWFsZ29saWEtYXBpLWtleScgICAgICAgOiBzZWxmLmNvbmZpZy5hcGlLZXlcbiAgICAgIH0sIGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnc3VjY2VzcycgJiYgZGF0YS5oaXRzICYmIGRhdGEuaGl0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdHMgPSBzZWxmLmJ1aWxkUmVzdWx0TGlzdChkYXRhLmhpdHMpO1xuICAgICAgICAgIHNlbGYuZG9tLm1vZGFsX3Jlc3VsdHMuaHRtbChyZXN1bHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLm9uUXVlcnlFcnJvcihxdWVyeVRleHQsIHN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5idWlsZE1ldGFkYXRhKGRhdGEpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG59KShqUXVlcnkpOyJdfQ==
