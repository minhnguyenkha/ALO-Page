var ContentProducts = document.querySelector('.product-content');
var ContentProductsWidth = ContentProducts.clientWidth
var prevBtn = document.querySelector('.product-btn .btn__previous-btn');
var nextBtn = document.querySelector('.product-btn .btn__next-btn');
var SizeItem = ContentProducts.children[1].clientWidth;
var SpaceItems = parseFloat(window.getComputedStyle(ContentProducts).getPropertyValue('grid-gap').slice(0, 2)); 
var btnWidth = prevBtn.clientWidth;
var Click2move = SizeItem + SpaceItems + SpaceItems - 20;
var scrollTime = 0;

prevBtn.onclick = function(){
    ContentProducts.scrollTo({
        top: 0,
        left: (scrollTime -= Click2move),
        behavior: "smooth"
    })
    /*hide or show button*/
    nextBtn.classList.add('showBtn');
    if(scrollTime < 0){
        scrollTime = 0;
    }else if(scrollTime == 0){
        prevBtn.classList.remove('showBtn');
        nextBtn.classList.add('showBtn');
    }
};
nextBtn.onclick = function(){
    if(scrollTime <= ContentProducts.scrollWidth - ContentProductsWidth - btnWidth){
        ContentProducts.scrollTo({
            top: 0,
            left: (scrollTime += Click2move),
            behavior: "smooth"
        })
        /*hide or show button*/
        if(scrollTime >= ContentProducts.scrollWidth - ContentProductsWidth){
            nextBtn.classList.remove('showBtn');
            prevBtn.classList.add('showBtn');
        }
        prevBtn.classList.add('showBtn');
    }
};



