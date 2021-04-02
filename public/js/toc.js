var toc_container = document.querySelector('.toc_container');
var toc_btn = document.querySelector('#toc_btn');

toc_btn.addEventListener('click',function(){
    if (toc_container.style.display === 'none') {
        toc_container.style.display = 'block';
    } else if (toc_container.style.display === 'block'){
        toc_container.style.display = 'none';
    } else {
        toc_container.style.display = 'block';
    }
})