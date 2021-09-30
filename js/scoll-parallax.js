
var namePhone = document.querySelector('.title-phone');
var sayHi = document.querySelector('.title-say');
var phoneBanner = document.querySelector('.banner-img');
var phoneCenter = phoneBanner.querySelector('.center');
var phoneLeft = phoneBanner.querySelector('.left');
var phoneRight = phoneBanner.querySelector('.right');
var contentPhone = document.querySelector('.content-phone');
var bigNewsPhone = document.querySelector('.bns-left');
var textPhone = document.querySelector('.bns__text');

var textThinner = textPhone.querySelector('.thinner');
var textSmaller = textPhone.querySelector('.smaller');
var textLighter = textPhone.querySelector('.lighter');

var bigNewsSub = document.querySelector('.bns__img-inch');
var bigNewsSubImg = bigNewsSub.querySelector('img');
var bigNewsInchText = bigNewsSub.querySelector('h1');
var bigNewsInchSubText = bigNewsSub.querySelector('h3');




var title = document.querySelector('.svp-title1');
var title2 = document.querySelector('.svp-title2');
var title3 = document.querySelector('.svp-title3');





bigNewsSub.style.visibility = 'hidden';
textThinner.classList.add('hide');
textSmaller.classList.add('hide');
textLighter.classList.add('hide');

const animated2 = 'animate__animated';

phoneBanner.classList.add('hide');
setTimeout(() => {
    namePhone.style.visibility = 'visible';
    namePhone.classList.add(`${animated2}`, 'animate__fadeInUp'); 
    namePhone.addEventListener('animationend', function(){
        hideName();
        showSayHi();
        sayHi.addEventListener('animationend', function(){
            hideSayHi();
            setTimeout(() => {
                // phoneBanner.classList.add('show');
                phoneBanner.classList.remove('hide');
                showPhoneCenter()
                showPhoneLeft();
                showPhoneRight();
    
                contentPhone.classList.add('wow', `${animated2}`, 'animate__fadeInUp');
                
                showBigNewsPhone();
                bigNewsPhone.addEventListener('animationend', function(){
                            textThinner.classList.remove('hide');
                            textThinner.classList.add('wow', `${animated2}`, 'animate__fadeInUp');
                            textSmaller.classList.remove('hide');
                            textSmaller.classList.add('wow', `${animated2}`, 'animate__fadeInUp', 'animate__delay-1s');
                            textLighter.classList.remove('hide');
                            textLighter.classList.add('wow', `${animated2}`, 'animate__fadeInUp', 'animate__delay-1s');  
                    
                    
//                     showThinner();
//                     showSmaller();
//                     showLighter();
                    
                    textLighter.addEventListener('animationend', function(){
                        
                        hideBigNewsPhone();
                        
                        textThinner.classList.add('wow', `${animated2}`, 'animate__fadeOutLeftBig');
                            setTimeout(() => {
                                textThinner.style.visibility = 'hidden'; 
                            }, 100);
                        
                        
                         textSmaller.classList.add('wow', `${animated2}`, 'animate__fadeOutLeftBig');
                            setTimeout(() => {
                                textSmaller.style.visibility = 'hidden'; 
                                textSmaller.style.overflow = 'hidden';
                            }, 100);
                        
                        textLighter.classList.add('wow', `${animated2}`, 'animate__fadeOutLeftBig');
                            setTimeout(() => {
                                textLighter.style.visibility = 'hidden'; 
                            }, 100);
                        
//                         hideThinner();
//                         hideSmaller();
//                         hideLighter();
    
                        setTimeout(() => {
                            bigNewsSub.style.visibility = 'visible';
                            showFrontPhone();
                            showInchText();
                            showInchSubText();
                        }, 500);
    
                    })
                })
                wow = new WOW(
                    {
                    boxClass:     'wow',      // default
                    animateClass: 'animate__animated', // default
                    offset:       0,          // default
                    mobile:       true,       // default
                    live:         true        // default
                }
                )
                var title1 = document.querySelector('.title1');
                title1.classList.add(`${animated2}`, 'animate__fadeInLeft');
                
                title1.addEventListener('animationend', function(){
                    setTimeout(() => {
                        var title2 = document.querySelector('.title2');
                        title2.classList.add('show',`${animated2}`, 'animate__fadeIn');
                        title1.style.visibility='hidden';
                        var img = document.querySelector('.f2').style.zIndex = "6"; 
                    }, 300);
                })
                wow.init();
            }, 1000);    
        })
    })
}, 2100);




function hidePhoneCenter(){
    phoneCenter.classList.add(`${animated2}`, 'animate__fadeOutDownBig'); 
}
function hidePhoneLeft(){
    phoneLeft.classList.add(`${animated2}`, 'animate__fadeOutDownBig');
}
function hidePhoneRight(){
    phoneRight.classList.add(`${animated2}`, 'animate__fadeOutDownBig');
}
function showPhoneCenter(){
    phoneCenter.classList.add(`${animated2}`, 'animate__fadeInUp','animate__slow');
}
function showPhoneLeft(){
    phoneLeft.classList.add(`${animated2}`, 'animate__fadeInUp', 'animate__slower');
}
function showPhoneRight(){
    phoneRight.classList.add(`${animated2}`, 'animate__fadeInUp', 'animate__slower'); 
}



function showSayHi(){
    sayHi.classList.add(`${animated2}`, 'animate__fadeInUp', 'show');
}
function hideSayHi(){
    sayHi.classList.add(`${animated2}`, 'animate__fadeOut');
}
function hideName(){    
    namePhone.classList.add(`${animated2}`, 'animate__fadeOut');
}


function showBigNewsPhone(){
    bigNewsPhone.classList.add('wow', `${animated2}`, 'animate__fadeInUp', 'animate__fast');
}
function hideBigNewsPhone(){
    bigNewsPhone.classList.add('wow', `${animated2}`, 'animate__fadeOutRightBig', 'animate__fast');
    setTimeout(() => {
        bigNewsPhone.style.visibility = 'hidden'; 
    }, 500);
}
function showThinner(){
    textThinner.classList.remove('hide');
    textThinner.classList.add('wow', `${animated2}`, 'animate__fadeInUp');
}
function hideThinner(){
    textThinner.classList.add('wow', `${animated2}`, 'animate__fadeOutLeftBig');
    setTimeout(() => {
        textThinner.style.visibility = 'hidden'; 
    }, 100);
}
function showSmaller(){
    textSmaller.classList.remove('hide');
    textSmaller.classList.add('wow', `${animated2}`, 'animate__fadeInUp', 'animate__delay-1s');
}
function hideSmaller(){
    textSmaller.classList.add('wow', `${animated2}`, 'animate__fadeOutLeftBig');
    setTimeout(() => {
        textSmaller.style.visibility = 'hidden'; 
        textSmaller.style.overflow = 'hidden';
    }, 100);
}
function showLighter(){
    textLighter.classList.remove('hide');
    textLighter.classList.add('wow', `${animated2}`, 'animate__fadeInUp', 'animate__delay-1s');  
}
function hideLighter(){
    textLighter.classList.add('wow', `${animated2}`, 'animate__fadeOutLeftBig');
    setTimeout(() => {
        textLighter.style.visibility = 'hidden'; 
    }, 100);
}


function showFrontPhone(){
    bigNewsSubImg.classList.add(`${animated2}`, 'animate__fadeInUp');
}
function showInchText(){
    bigNewsInchText.classList.add(`${animated2}`, 'animate__fadeInUp','animate__slower');
}
function showInchSubText(){
    bigNewsInchSubText.classList.add(`${animated2}`, 'animate__fadeInUp','animate__slower');
}
