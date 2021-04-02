var inputArea = document.querySelector("#local-search-input");

if (inputArea) {
    inputArea.onclick = function() {
        inputArea.disabled = true;
        inputArea.placeholder = '首次搜索ing···';
        getSearchFile();
        this.onclick = null
    }

    inputArea.onkeydown = function() { if (event.keyCode == 13) return false };
}

function clearSearch($resultContent) {
    // clear search result
    var btnClose = document.querySelector("#local-search-close");
    btnClose.onclick = function() {
        inputArea.value = '';
        $resultContent.innerHTML = '';

        inputArea.placeholder = '请输入关键词';
        inputArea.focus();
    };
}

var searchFunc = function(path, search_id, content_id) {
    'use strict';
    var BTN = "<div id='local-search-close'>清空搜索</div>"
    var $input = document.getElementById(search_id);
    var $resultContent = document.getElementById(content_id);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // resume input
            $input.disabled = false;
            $input.placeholder = '输入关键词以搜索';
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
            $input.addEventListener('input', function() {
                var str = '<ul class=\"archive\">';
                var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                $resultContent.innerHTML = "";
                if (this.value.trim().length <= 0) {
                    return;
                }

                // 本地搜索主代码
                datas.forEach(function(data) {
                    var isMatch = true;
                    var content_index = [];
                    if (!data.title || data.title.trim() === '') {
                        data.title = "Untitled";
                    }
                    var orig_data_title = data.title.trim();
                    var data_title = orig_data_title.toLowerCase();
                    var orig_data_content = data.content.trim().replace(/<[^>]+>/g, "");
                    var data_content = orig_data_content.toLowerCase();
                    var data_url = data.url;
                    var index_title = -1;
                    var index_content = -1;
                    var first_occur = -1;
                    // only match artiles with not empty contents
                    if (data_content !== '') {
                        keywords.forEach(function(keyword, i) {
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
                                }
                                // content_index.push({index_content:index_content, keyword_len:keyword_len});
                            }
                        });
                    } else {
                        isMatch = false;
                    }
                    // 展示结果
                    if (isMatch) {
                        // TODO: 待完善，待完善
                        str += "<li><a href='" +location.protocol+"//"+location.host+"/"+ data_url + "' class='archive-title'>" + orig_data_title + "</a>";
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
                            }

                            // console.log(content)
                            var match_content = content.substr(start, 100);

                            // highlight all keywords
                            keywords.forEach(function(keyword) {
                                var regS = new RegExp(keyword, "gi");
                                match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
                            });

                            str += "<p class=\"search-result\">" + match_content + "...</p>"
                        }
                        str += "</li>";
                    }
                });
                str += "</ul>";
                if (str.indexOf('<li>') === -1) {
                    $resultContent.innerHTML = BTN + "<div class='local-search-empty'>没有找到你所要搜索的内容……</div>";
                } else {
                    $resultContent.innerHTML = BTN + str;
                }

                clearSearch($resultContent)
            });
        }
    };
}


var getSearchFile = function() {
    var path = "/search.xml";
    searchFunc(path, 'local-search-input', 'local-search-result');
}


// 全局按钮设置js是否展示搜索框
var global_button_search_box = document.querySelector('#search_btn');
global_button_search_box.addEventListener('click', function(){
    if (document.querySelector('.search_box').style.display === 'block') {
        document.querySelector('.search_box').style.display = 'none';
    } else {
        document.querySelector('.search_box').style.display = 'block';
        document.querySelector('#local-search-input').focus();
    }
})
var search_close = document.querySelector('.search_close');
search_close.addEventListener('click', function(){
    if (document.querySelector('.search_box').style.display === 'block') {
        document.querySelector('.search_box').style.display = 'none';
    } else {
        document.querySelector('.search_box').style.display = 'block';
    }
})
