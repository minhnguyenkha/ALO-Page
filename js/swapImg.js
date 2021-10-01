var cardImgBtn = document.querySelectorAll('.items-color_wrap');
var cardLength = cardImgBtn.length;


function swapImg(event){
    event.preventDefault();
    var buttonImg = event.target;
    var src = `./img/Phone/icon-color/phone3/`;
    var indexImgShow = buttonImg.parentElement.parentElement.getAttribute('data-index');
    var imgReplace = buttonImg.getAttribute('data-img');
    var imgShow = buttonImg.parentElement.parentElement.parentElement.previousElementSibling.children[0].children;
    imgShow[0].src = src + imgReplace;
    return imgShow;
}

function overImg(length, button){
    var a = 0;
    while(a < length){
        var b = a;
        var imgBtn = button[a].children;
        var imgBtnLength = button[a].children.length;
        var c = 0;
        while(c < imgBtnLength){
            imgBtn[c].addEventListener('mouseover', function(e){
                swapImg(e);
            });
            c++;
        }
        a++;
    }
}








overImg(cardLength, cardImgBtn);
// swapName(cardLength, cardImgBtn);

/*BUY-PAGE*/
var imgToShow =
 document.querySelectorAll
('.product-detail__wrap .product-detail .detail__img-gallery .detail__img-slider .detail__img-slider-wrap a');
var imgToShowLength =imgToShow.length;


overImg(imgToShowLength, imgToShow);

var imgBanner = document.querySelectorAll('.b-b__select__wrap ');
var imgBannerLength = imgBanner.length;
overImg(imgBannerLength, imgBanner);


var galleryImgMobile = document.querySelector('.detail__img-gallery-mobile');

var imgToShow2 = galleryImgMobile.querySelectorAll('.detail__img-slider .detail__img-silder-wrap');
var imgToShowLength2 = imgToShow2.length;
overImg(imgToShowLength2, imgToShow2);


