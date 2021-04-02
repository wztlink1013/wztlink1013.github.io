var go_top = document.querySelector('#go_top');

// 滚动显示go_top按钮
// TODO: 缓慢显示

window.addEventListener('scroll', function(){
    // 持续监听返回顶端事件
    if (document.documentElement.scrollTop !== 0) {
        go_top.style.display = 'block';
    } else {
        go_top.style.display = 'none';
    }
    // // 持续监听跳转到评论区
    // if (document.querySelector('#go_comments')) {
    //     document.querySelector('#go_comments').style.display = 'block';
    //     document.querySelector('#go_comments').addEventListener('click', function(){
    //         window.location.hash = "#comments";
    //     })
    // }
})

// 点击回到顶部
// TODO: 缓慢回到顶部
go_top.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
})