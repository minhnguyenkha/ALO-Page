var dropMenu = document.querySelector('.filter__dropdown');
var dropBtn = dropMenu.querySelector('.filter-default');
var option = document.querySelector('.option');
var output = document.querySelector('.filter-default .text');
var icon = document.querySelector('.filter-default i');
var list = option.children;

dropMenu.addEventListener('click', function(){
    option.classList.toggle('show');
    dropBtn.classList.toggle('change');
    icon.classList.toggle('transform');
})
option.addEventListener('click', function(event){
    let b = event.target;
    output.value = b.name;
    option.classList.toggle('show');
    dropBtn.classList.toggle('change');
    icon.classList.toggle('transform');
    event.stopPropagation();
})



var phoneNavDrop = document.querySelector('.phoneNav__dropdown');
var phoneDropBtn = phoneNavDrop.querySelector('.phoneNav__btn');
var listDrop = document.querySelector('.phoneNav__list');
var outPut2 = document.querySelector('.phoneNav__btn .text2');
var icon2 = document.querySelector('.phoneNav__btn i');
var list2a = listDrop.children;
var list2Length = list2a.length;

phoneNavDrop.addEventListener('click', function(){
    listDrop.classList.toggle('show2');
    phoneDropBtn.classList.toggle('change2');
    icon2.classList.toggle('transform2');
})
listDrop.addEventListener('click', function(event){
    let b = event.target;
    outPut2.value = b.name;
    listDrop.classList.toggle('show2');
    phoneDropBtn.classList.toggle('change2');
    icon2.classList.toggle('transform2');
    event.stopPropagation();
})




var a = 0;
while(a < list2Length){
    var item = list2a[a];
    item.addEventListener('click', function(event){
        var index = event.target.getAttribute('data-tab');
        var logoName = event.target.getAttribute('data-logo');
        var listTab = document.querySelectorAll('.phoneList');
        var logoImg = document.querySelector('.phoneNav__text .img img');
        logoImg.src = `./img/${logoName}`;
        var lengthTab = listTab.length; 
        for(let i = 0; i < lengthTab; i++){
            listTab[i].classList.remove('tab');
        }
        listTab[index].classList.add('tab');
    })
    a++;
}






var Buttons = document.querySelectorAll('.filter__btn');
var phoneNavBtn = document.querySelector('.phoneNav__btn');
var featureList = document.querySelector('.features');
var categoryList = document.querySelector('.phoneNav__list');
var typesList = document.querySelector('.types');
var connectList = document.querySelector('.connects');
var colorList = document.querySelector('.color__content-wrap');
var sortList = document.querySelector('.sorts');
var pricesList = document.querySelector('.price__content');


var lengthButtons = Buttons.length;

var i = 0;
while(i < lengthButtons){
    Buttons[i].addEventListener('click', function(e){
        console.log(e.target.name);
        switch(e.target.name){
            case 'features':
                featureList.classList.toggle('show');
                break;
            case 'types':
                typesList.classList.toggle('show');
                break;
            case 'connects':
                connectList.classList.toggle('show');
                break;
            case 'colors':
                colorList.classList.toggle('show');
                break;
            case 'sorts':
                sortList.classList.toggle('hide');
                break;
            case 'prices':
                pricesList.classList.toggle('none');
                break;
        }
    });
    i++;
}


var showPrice1 = document.querySelector('.content__decrease');
var showPrice2 = document.querySelector('.content__increase');

var Drag = document.querySelector('.input__price');


Drag.addEventListener('change', function(e){
    showPrice1.value = e.target.value;
})
Drag.addEventListener('input', function(e){
    showPrice1.value = e.target.value;
})



var exitFilter = document.querySelector('.exit__Btn__mobile-ver');
var filterTab = document.querySelector('.Product__filter');

exitFilter.addEventListener('click', function(){
    filterTab.classList.toggle('show');
});





