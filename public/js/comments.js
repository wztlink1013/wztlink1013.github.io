// 【判断页面是否右评论区，以便显示全局按钮】
if (document.querySelector('#go_comments')) {
    document.querySelector('#go_comments').style.display = 'block';
}

/*******************************************************************
【文章评论数】
*******************************************************************/

// 判断页面是否有评论区id和引用评论数的id
if (document.querySelector('#comments') && document.querySelector('#twikoo_comments')) {
  var twikoo_comments = document.querySelector('#twikoo_comments');
  // BOM获取页面url的pathname路径
  var twikoo_comments_url = [location.pathname];

  twikoo.getCommentsCount({
    envId: 'website-wikoo-4g46k8do98867542', // 环境 ID
    // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
    urls: twikoo_comments_url,// 不包含协议、域名、参数的文章路径列表，必传参数
    includeReply: false // 评论数是否包括回复，默认：false
  }).then(function (res) {
    // 将评论数写入其中
    twikoo_comments.innerText = res[0].count;
    // console.log(res);
    // 返回示例: [
    //   { url: '/2020/10/post-1.html', count: 10 },
    //   { url: '/2020/11/post-2.html', count: 0 },
    //   { url: '/2020/12/post-3.html', count: 20 }
    // ]
  }).catch(function (err) {
    // 发生错误
    console.error(err);
  });
}





/*******************************************************************
【获取最新评论】
*******************************************************************/
var hot_articles = document.querySelector('#hot_articles_item');
var page_size = 8;

twikoo.getRecentComments({
    envId: 'website-wikoo-4g46k8do98867542', // 环境 ID
    // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
    pageSize: page_size, // 获取多少条，默认：10，最大：100
    includeReply: false // 是否包括最新回复，默认：false
  }).then(function (res) {
    
    // console.log(res);
    // 删除loading
    var new_comments_loding = document.querySelector('.new_comments_loding');
    var new_comments_loding_parent = new_comments_loding.parentElement;
    new_comments_loding_parent.removeChild(new_comments_loding);

    // 插入评论
    for (var i = 0;i<page_size; i++) {
      if (res[i].comment) {
        var new_comments_content = res[i].comment;
        var new_comments_nick = res[i].nick;
        var new_comments_url = res[i].url;
        var new_comments_avatar = res[i].avatar;
        var new_comments_time = res[i].relativeTime;
        var new_comments_id = '#' + res[i].id;

        var hot_articles_child = document.createElement('li');
        hot_articles_child.innerHTML = '<div class="item_up"><img src="' + new_comments_avatar + '" class="avatar"><div class="nick_name"><span class="nick">' + new_comments_nick + '</span><span class="time">' + new_comments_time + '</span></div></div><div class="item_down"><a href="' + new_comments_url + new_comments_id + '">' + new_comments_content + '</a></div>';
        hot_articles.append(hot_articles_child);
      }
    }
    // console.log(res);
    // 返回 Array，包含最新评论的
    //   * id:           评论 ID
    //   * url:          评论地址
    //   * nick:         昵称
    //   * mailMd5:      邮箱的 MD5 值，可用于展示头像
    //   * link:         网址
    //   * comment:      HTML 格式的评论内容
    //   * commentText:  纯文本格式的评论内容
    //   * created:      评论时间，格式为毫秒级时间戳
    //   * avatar:       头像地址（0.2.9 新增）
    //   * relativeTime: 相对评论时间，如 “1 小时前”（0.2.9 新增）
    // 返回示例: [ // 从新到旧顺序
    //   { id: '', url: '', nick: '', mailMd5: '', link: '', comment: '', commentText: '', created: 0 },
    //   { id: '', url: '', nick: '', mailMd5: '', link: '', comment: '', commentText: '', created: 0 },
    //   { id: '', url: '', nick: '', mailMd5: '', link: '', comment: '', commentText: '', created: 0 }
    // ]
  }).catch(function (err) {
    // 发生错误
    console.error(err);
  });


/*******************************************************************
【文章访问量排名】
*******************************************************************/
/*
  文章阅读量在单个文章中可以显示但是不能排名，排名怎么实现呢？
  方案1：使用valine
  方案2：在服务器上进行全站的文章访问，提取他们的访问量id
  方案3：对twikoo云函数进行代码更改，类似访问量api
 */


/*******************************************************************
【评论切换按钮】
  TODO: 切换utterances评论后，页面会刷新一下然后又回到默认评论系统了，这个可以优化
*******************************************************************/
var switch_btn = document.querySelector('#switch_btn');
var utterances_comment = document.querySelector('#utterances_comment');
var twikoo_comment = document.querySelector('#twikoo_comment');

switch_btn.addEventListener('click', function(){
  if(utterances_comment.style.display === 'none') {
    utterances_comment.style.display = 'block';
    twikoo_comment.style.display = 'none';
    if (!utterances_comment.children[0]) {
        var script_utterances = document.createElement("script");
        script_utterances.src="https://utteranc.es/client.js" ;
        script_utterances.setAttribute("repo","wztlink1013/comment");
        script_utterances.setAttribute("issue-term","title");
        script_utterances.setAttribute("label","💬comment");
        script_utterances.setAttribute("theme","github-light");
        script_utterances.setAttribute("crossorigin","anonymous");
        utterances_comment.appendChild(script_utterances); 
    }
  }else {
    utterances_comment.style.display = 'none';
    twikoo_comment.style.display = 'block';
  }
})
