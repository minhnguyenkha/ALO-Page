

// console.log(footerSize.getBoundingClientRect);


var crr__Scroll = 0;

window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.querySelector('.scrollToTop');
    var ScrollDown = document.documentElement.scrollTop;
    if(ScrollDown > crr__Scroll){
        scrollToTopBtn.classList.remove('active');
    }else{
        scrollToTopBtn.classList.add('active');
    }
    crr__Scroll = ScrollDown;
})