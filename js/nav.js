/*=============Mo dong menu 3soc respon=--------------------*/
var nav1 = document.querySelector('nav.homeNav > .menu');
var btn1 = document.querySelector('nav.homeNav > .menu-btn_wrapper .menu-btn');
var list = document.querySelectorAll('nav.homeNav > .menu ul li a');
/*=============An thanh nav khi cuon===============================*/
var navBar = document.querySelector('header');


function changeNameNav(){
    let currentLocation = location.href.split('/')[3]; /*4*/
    let listLink = ['index.html','index2.html','index3.html','index4.html','index5.html','index6.html'];
    let navBarProducts = document.querySelector('.nav__bar');
    let navListProducts = document.querySelectorAll('.nav__list');
    if(currentLocation == ""){
        list[0].classList.add('active-name');    
    }
    for(let a = 0; a < listLink.length; a++){
        if(listLink[a] === currentLocation){
            let list = document.querySelectorAll('nav.homeNav > .menu ul li a');
            list[a].classList.add('active-name');
            setTimeout(() => {
                navBarProducts.classList.add('show-bar');
            }, 200);
            for(let i = navListProducts.length; i >= 0; i--){
                setTimeout(() => {
                    navListProducts[i].classList.add('show-list');
                }, 105 * i);
            }
        }
        list[a].addEventListener('click', function(){
            if(Width <= 768){
                nav1.classList.toggle('nav-active');
                btn1.classList.toggle('exit-btn');
                body.classList.remove('fixed');
            }
        })
    }
}
changeNameNav();
function changeNameProductsList(){
    let currentLocation = location.href.split('/')[3];
    let listProducts = ['index2-phone1.html','index2-phone2.html','index2-phone3.html','index2-phone4.html','index2-phone5.html','index2-phone6.html'];
    for(let j = 0; j < listProducts.length; j++){
        if(currentLocation === listProducts[j]){
            console.log('list p1: '+listProducts[j]);
            console.log('location'+currentLocation);
            var itemPhone_index = 0;
            let list = document.querySelectorAll('nav > .menu ul li a');
            for(let i = 0; i < list.length; i++){
                if(list[i].hasAttribute('data-items-phone')){
                    let a = list[i].getAttribute('data-items-phone');
                    itemPhone_index = a;
                }
            }
            console.log(itemPhone_index);
            list[itemPhone_index].classList.add('active-name');
        }
    }
}
changeNameProductsList();


/*===============Click name => show & hold color=========== */
/*----------------------------------------------------------*/
var body = document.querySelector('body');
var searchBtn = document.querySelector('.icon .search-btn');
var cartBtn = document.querySelector('.icon .cart');
var logo = document.querySelector('nav.homeNav > .img');
var inPut = document.querySelector('.search');
var exitBtn = document.querySelector('.exit-search');
var list2 = document.querySelectorAll('nav.homeNav > .menu ul li');

var overlay = document.getElementById('overlay');
var w2 = window.document.documentElement.getBoundingClientRect().width;


searchBtn.addEventListener('click', function(){
    /*effect hide list button*/
    for(let a = list2.length; a >= 0; a--){
        setTimeout(function() {
            list2[a].classList.add('hide');
        }, 500 - a * 50); /*delay*/
    }
    if(w2 > 768){
        setTimeout(() => {
            inPut.classList.add('show');
        }, 550);
    }else{
        setTimeout(() => {
            inPut.classList.add('show');
        }, 50);
    }
    /*hide some icon when input showed*/
    if(w2 < 500) {
        btn1.classList.add('hide');
        cartBtn.classList.add('hide');
        logo.classList.add('hide');
    }
    setTimeout(() => {
        overlay.classList.add('open');
    }, 550);
    searchBtn.classList.add('hide');
    exitBtn.classList.add('show');
    body.classList.toggle('fixed');
})
exitBtn.addEventListener('click', function(){
    for(let a = 0; a < list2.length; a++){
        setTimeout(() => {
            list2[a].classList.remove('hide');
        }, a * 100);
    }
    
    if(w2 < 500) {
        btn1.classList.remove('hide');
        cartBtn.classList.remove('hide');
        logo.classList.remove('hide');
    }
    setTimeout(() => {
        inPut.classList.remove('show');
    }, 50);
    overlay.classList.remove('open');
    searchBtn.classList.remove('hide');
    exitBtn.classList.remove('show');
    body.classList.toggle('fixed');
});



// mo dong' menu
btn1.onclick = function() {
    nav1.classList.toggle('nav-active');
    btn1.classList.toggle('exit-btn');
    let list2 = document.querySelectorAll('nav > .menu ul li');
    for(let a = 0; a < list2.length; a++){
        setTimeout(() => {
            list2[a].classList.toggle('active-list');
        }, 40 * a);
    }
    body.classList.toggle('fixed');
};

// An thanh nav

var current_pointScroll = 0;
window.addEventListener('scroll', hideNav);
function hideNav(){
    var Scroll = document.documentElement.scrollTop;
    if(Scroll > current_pointScroll){
        navBar.classList.add('hide');
    }else{
        navBar.classList.remove('hide');
    }
// console.log('Scroll' + Scroll)
// console.log('Crr_Scroll' + current_pointScroll);
    current_pointScroll = Scroll;
}





/*=============NAV-PRODUCTS====================== */
var navContent = document.querySelector('.nav__items').firstElementChild;
var leftButton = document.querySelector('.nav__btn .nav__previous-btn');
var rightButton = document.querySelector('.nav__btn .nav__next-btn');
var liSize = navContent.querySelector('li').clientWidth;
var navWidth = navContent.getBoundingClientRect().width;
// left or right are same

var spaceBetweenEle = parseFloat(window.getComputedStyle(navContent).getPropertyValue('column-gap').slice(0, 2));

var ScrollClick = navWidth/2 + 34 *2 - spaceBetweenEle*3;
var ScrollAmount = 0;


leftButton.onclick = function(){
    if(ScrollAmount < 0){
        ScrollAmount = 0;
    }
    navContent.scrollTo({
        top: 0,
        left: (ScrollAmount -= ScrollClick),
        behavior: "smooth"
    })
    /*hide or show button*/
    rightButton.classList.add('show-btn');

    if(ScrollAmount == 0){
        leftButton.classList.remove('show-btn');
        rightButton.classList.add('show-btn');
    }
};
rightButton.onclick = function(){
    var buttonWidth = leftButton.clientWidth;
    var max = navContent.scrollWidth - navWidth - buttonWidth;
    if(ScrollAmount < max){
        navContent.scrollTo({
            top: 0,
            left: (ScrollAmount += ScrollClick),
            behavior: "smooth"
        })
    /*hide or show button*/
        if(ScrollAmount > max){
            rightButton.classList.remove('show-btn');
            leftButton.classList.add('show-btn');
        }
    leftButton.classList.add('show-btn');
    }
};







