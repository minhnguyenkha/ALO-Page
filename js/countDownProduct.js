



var countDownDate = new Date("Oct 1, 2021 14:15").getTime();
var modalField = 
document.querySelector('.cd__modal');

var exitButtonInTimerField =
document.querySelector('.count-down__product .count-down__product-wrap > .cd__exit-btn');

exitButtonInTimerField.addEventListener('click', hideTimerShowField);
function hideTimerShowField(){
    var timerShowField = document.querySelector('.count-down__product');
    timerShowField.classList.add('hide');
}
var exitButtonModalField =
 document.querySelector('.cd__modal .cd__modal-wrap .md-exit-btn');

exitButtonModalField.addEventListener('click', hideModalField);
function hideModalField(){
    if(modalField.classList.contains('show')){
        document.querySelector('body').classList.remove('fixed');
        setTimeout(() => {
          modalField.classList.remove('show');
        }, 10);
    }
}

function clickOutsideToHideModal(){
  window.addEventListener('click', e => {
    if(modalField.classList.contains('show')){
      hideModalField();
      overlay.classList.remove('open');
    }
  });
}
// Update the count down every 1 second
var x = setInterval(function() {
  var timerShow = document.querySelector('.count-down__product .count-down__product-wrap > .timer-text h2');
  var spanImgText = document.querySelector('.cd-text h2');
  var bodyTag = document.querySelector('body');
  var overlay = document.querySelector('.overlay1');
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  timerShow.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    spanImgText.innerHTML = `NOW!`
    timerShow.innerHTML = `TIME-UP !!`
    setTimeout(() => {
        modalField.classList.add('show');
        bodyTag.classList.add('fixed');
        overlay.classList.add('open');
        hideTimerShowField();
    }, 1000);
    clickOutsideToHideModal();
  }
}, 1000);



