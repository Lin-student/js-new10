window.onload = function() {
    const items = document.getElementsByClassName('item');
    const week = ['!_!', '@_@', '#_#', '$_$', '^_^'];
    
    for(let i = 0; i < items.length; i++){
    //onclick为鼠标点击事件
        items[i].onclick = function (){
            reset();
            items[i].innerHTML = week[i];
            items[i].style.color = 'black';
        }
    }

    function reset(){
        for(let i = 0; i < items.length; i++){
            items[i].innerHTML = i+1;
            items[i].style.color = 'aqua';
        }
    }
};