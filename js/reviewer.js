/* ============ Danh gia khach hang= ============================= */
// children la ham lay cac phan tu con cua the~ review-customer....
var revQuotes1 = document.getElementById('revQuotes1').children;
var revQuotes2 = document.getElementById('revQuotes2').children;
var revImages1 = document.getElementById('revImages1').children;
var revImages2 = document.getElementById('revImages2').children;
var reviewerButtons = document.querySelectorAll('ul.review__links li a');
var reviewerContents = document.querySelectorAll('section.review-customer__content');




for(let i = 0; i < reviewerButtons.length; i++){
    reviewerButtons[i].addEventListener('click', function(e){
        SAD(e, reviewerButtons, reviewerContents);
    });
}



function SAD(event, reviewerButtons, reviewerContents){
    var cS = event.target;
    for(let j = 0; j < reviewerButtons.length; j++){
        reviewerButtons[j].classList.remove('active-link');
    }
    /*active color*/
    cS.classList.add('active-link');
    /*get index*/
    var reviewer_index = cS.getAttribute('data-id');
    /*swap tab*/
    for(let k = 0; k < reviewerContents.length; k++){
        reviewerContents[k].classList.remove('active-content');
    }
    reviewerContents[reviewer_index].classList.add('active-content');

    /*effect img*/
    if(reviewer_index == 0){
        for(let m = 0; m < revImages1.length; m++){
            setTimeout(() => {
                revImages1[m].classList.add('show1');
            }, 70 * m);
        }
    }
    else{
        for(let n = 0; n < revImages2.length; n++){
            setTimeout(() => {
                revImages2[n].classList.add('show2');
            }, 70 * n);
        }
    }
}




var revImages1Length = revImages1.length;
var revImages2Length = revImages2.length;
var revQuotes1Length = revQuotes1.length;
var revQuotes2Length = revQuotes2.length;

/*swap img and quote*/

for(let j = 0; j < revImages2Length; j++){
    revImages2[j].addEventListener('click', function(e) {
        switchImgPreviewer(revImages2, revQuotes2, e);
    });
}
for(let i = 0; i < revQuotes1Length; i++){
    revImages1[i].addEventListener('click', function(e){
        switchImgPreviewer(revImages1, revQuotes1, e);
    })
}



function switchImgPreviewer(Images, Quotes, e){
    var m = e.target;
    for(let a = 0; a < Images.length; a++){
        Images[a].classList.remove('customer-img_active');
    }
    m.classList.add('customer-img_active');
    var index = m.getAttribute('data-id');
    for(let b = 0; b < Quotes.length; b++){
        Quotes[b].classList.remove('quotes-active');
    }
    Quotes[index].classList.add('quotes-active');
}



