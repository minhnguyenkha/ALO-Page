window.removeEventListener('scroll', hideNav);
window.addEventListener('scroll', fixBar);

function fixBar(){
    var navBar = document.querySelector('.nav__select-phone');
    var offsetNav = navBar.offsetTop;
    if(window.pageYOffset > offsetNav){
        navBar.classList.add('active');
    }else{
        navBar.classList.remove('active');
    }
}