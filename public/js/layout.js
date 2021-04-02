/****************************************************
        container弹性单栏/双栏/三栏伸缩布局
*****************************************************/
var arrow_left = document.querySelector('#arrow_left');
var arrow_right = document.querySelector('#arrow_right');

var ct_left = document.querySelector('.ct_left');
var ct_right = document.querySelector('.ct_right');
var ct_center = document.querySelector('.ct_center');
var container = document.querySelector('.container');

// 1.左中配置
var one_container = '80%' ;

var one_ct_center_width = '75%';
var one_ct_left_width = '25%';
// 2. 中右配置
var two_container = '80%' ;

var two_ct_center_width = '75%';
var two_ct_right_width = '25%';
// 3. 左中右配置
var three_container = '95%' ;

var three_ct_center_width = '60%';
var three_ct_right_width = '20%';
var three_ct_left_width = '20%';
// 4. 中配置
var four_container = '80%' ;
var four_ct_center_width = '100%';

arrow_left.addEventListener('click',function(){
    if (ct_left.style.display === 'none') {
        arrow_left.children[0].style.display = 'none';
        arrow_left.children[1].style.display = 'inline-block';
        ct_left.style.display = 'block';
        if (ct_right.style.display === 'none'){ //左中配置
            container.style.width = one_container;
            ct_center.style.width = one_ct_center_width;
            ct_left.style.width = one_ct_left_width;
        } else { //左中右配置
            container.style.width = three_container;
            ct_center.style.width = three_ct_center_width;
            ct_left.style.width = three_ct_left_width;
            ct_right.style.width = three_ct_right_width;
        }
    } else {
        arrow_left.children[1].style.display = 'none';
        arrow_left.children[0].style.display = 'inline-block';
        ct_left.style.display = 'none';
        if (ct_right.style.display === 'none'){ //中配置
            container.style.width = four_container;
            ct_center.style.width = four_ct_center_width;
        } else { //中右配置
            container.style.width = two_container;
            ct_right.style.width = two_ct_right_width;
            ct_center.style.width = two_ct_center_width;
        }
    }
})
arrow_right.addEventListener('click',function(){
    if (ct_right.style.display === 'none') {
        arrow_right.children[0].style.display = 'none';
        arrow_right.children[1].style.display = 'inline-block';
        ct_right.style.display = 'block';
        if (ct_left.style.display === 'none'){ //中右配置
            container.style.width = two_container;
            ct_right.style.width = two_ct_right_width;
            ct_center.style.width = two_ct_center_width;
        } else { //左中右配置
            container.style.width = three_container;
            ct_center.style.width = three_ct_center_width;
            ct_left.style.width = three_ct_left_width;
            ct_right.style.width = three_ct_right_width;
        }
    } else {
        arrow_right.children[1].style.display = 'none';
        arrow_right.children[0].style.display = 'inline-block';
        ct_right.style.display = 'none';
        if (ct_left.style.display === 'none'){ // 中配置
            container.style.width = four_container;
            ct_center.style.width = four_ct_center_width;
        } else { // 左中配置
            container.style.width = one_container;
            ct_center.style.width = one_ct_center_width;
            ct_left.style.width = one_ct_left_width;
        }
    }
})

/****************************************************
        header在PC/移动等不同设备的响应状况
*****************************************************/

var btn_app_sider = document.querySelector('#btn_app_sider');
var btn_app_search = document.querySelector('#btn_app_search');
var app_side_glass = document.querySelector('#app_side_glass');
var app_side_content = document.querySelector('#app_side_content');

btn_app_sider.addEventListener('click',function(){
    app_side_glass.style.display = 'block';
    app_side_content.style.display = 'block';
})
app_side_glass.addEventListener('click',function(){
    app_side_glass.style.display = 'none';
    app_side_content.style.display = 'none';
})

/****************************************************
        响应式布局  560px（C档）   980px（B档）   1261px（A档）
*****************************************************/

function deviceMediaQuery(media_width) {
    if (media_width.matches) { // 媒体查询
        console.log('使用屏幕小于980px的样式');
        document.querySelector('.header').style.display = 'none';
        document.querySelector('.header_app').style.display = 'block';
        document.querySelector('.ct_left').style.display = 'none';
        document.querySelector('.ct_right').style.display = 'none';
        // document.querySelector('.ct_center').style.display = 'block';
        // document.querySelector('.ct_center').style.float = 'left';
        document.querySelector('.container').style.width = '95%';
        document.querySelector('.ct_center').style.width = '100%';
    } else {
        console.log('使用屏幕小于1260px的样式');
        if (ct_left.style.display === 'none') {
            arrow_left.children[1].style.display = 'none';
            arrow_left.children[0].style.display = 'inline-block';
        } else {
            arrow_left.children[0].style.display = 'none';
            arrow_left.children[1].style.display = 'inline-block';
        }
        if (ct_right.style.display === 'none') {
            arrow_right.children[1].style.display = 'none';
            arrow_right.children[0].style.display = 'inline-block';
        } else {
            arrow_right.children[0].style.display = 'none';
            arrow_right.children[1].style.display = 'inline-block';
        }
        document.querySelector('.header').style.display = 'block';
        document.querySelector('.header_app').style.display = 'none';
        document.querySelector('.ct_left').style.display = 'block';
        document.querySelector('.ct_right').style.display = 'block';
        // document.querySelector('.ct_center').style.display = 'block';
        // document.querySelector('.ct_center').style.float = 'left';
        document.querySelector('.container').style.width = '95%';
        document.querySelector('.ct_center').style.width = '60%';
        document.querySelector('.ct_left').style.width = '20%';
        document.querySelector('.ct_right').style.width = '20%';
    }
}

var media_width = window.matchMedia("(max-width: 980px)");

deviceMediaQuery(media_width); // 执行时调用的监听函数
media_width.addListener(deviceMediaQuery); // 状态改变时添加监听器
