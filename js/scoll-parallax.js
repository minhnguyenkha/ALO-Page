var namePhone=document.querySelector(".title-phone"),sayHi=document.querySelector(".title-say"),phoneBanner=document.querySelector(".banner-img"),phoneCenter=phoneBanner.querySelector(".center"),phoneLeft=phoneBanner.querySelector(".left"),phoneRight=phoneBanner.querySelector(".right"),contentPhone=document.querySelector(".content-phone"),bigNewsPhone=document.querySelector(".bns-left"),textPhone=document.querySelector(".bns__text"),textThinner=textPhone.querySelector(".thinner"),textSmaller=textPhone.querySelector(".smaller"),textLighter=textPhone.querySelector(".lighter"),bigNewsSub=document.querySelector(".bns__img-inch"),bigNewsSubImg=bigNewsSub.querySelector("img"),bigNewsInchText=bigNewsSub.querySelector("h1"),bigNewsInchSubText=bigNewsSub.querySelector("h3"),title=document.querySelector(".svp-title1"),title2=document.querySelector(".svp-title2"),title3=document.querySelector(".svp-title3");bigNewsSub.style.visibility="hidden",textThinner.classList.add("hide"),textSmaller.classList.add("hide"),textLighter.classList.add("hide");const animated2="animate__animated";function hidePhoneCenter(){phoneCenter.classList.add(`${animated2}`,"animate__fadeOutDownBig")}function hidePhoneLeft(){phoneLeft.classList.add(`${animated2}`,"animate__fadeOutDownBig")}function hidePhoneRight(){phoneRight.classList.add(`${animated2}`,"animate__fadeOutDownBig")}function showPhoneCenter(){phoneCenter.classList.add(`${animated2}`,"animate__fadeInUp","animate__slow")}function showPhoneLeft(){phoneLeft.classList.add(`${animated2}`,"animate__fadeInUp","animate__slower")}function showPhoneRight(){phoneRight.classList.add(`${animated2}`,"animate__fadeInUp","animate__slower")}function showSayHi(){sayHi.classList.add(`${animated2}`,"animate__fadeInUp","show")}function hideSayHi(){sayHi.classList.add(`${animated2}`,"animate__fadeOut")}function hideName(){namePhone.classList.add(`${animated2}`,"animate__fadeOut")}function showBigNewsPhone(){bigNewsPhone.classList.add("wow",`${animated2}`,"animate__fadeInUp","animate__fast")}function hideBigNewsPhone(){bigNewsPhone.classList.add("wow",`${animated2}`,"animate__fadeOutRightBig","animate__fast"),setTimeout(()=>{bigNewsPhone.style.visibility="hidden"},500)}function showThinner(){textThinner.classList.remove("hide"),textThinner.classList.add("wow",`${animated2}`,"animate__fadeInUp")}function hideThinner(){textThinner.classList.add("wow",`${animated2}`,"animate__fadeOutLeftBig"),setTimeout(()=>{textThinner.style.visibility="hidden"},100)}function showSmaller(){textSmaller.classList.remove("hide"),textSmaller.classList.add("wow",`${animated2}`,"animate__fadeInUp","animate__delay-1s")}function hideSmaller(){textSmaller.classList.add("wow",`${animated2}`,"animate__fadeOutLeftBig"),setTimeout(()=>{textSmaller.style.visibility="hidden",textSmaller.style.overflow="hidden"},100)}function showLighter(){textLighter.classList.remove("hide"),textLighter.classList.add("wow",`${animated2}`,"animate__fadeInUp","animate__delay-1s")}function hideLighter(){textLighter.classList.add("wow",`${animated2}`,"animate__fadeOutLeftBig"),setTimeout(()=>{textLighter.style.visibility="hidden"},100)}function showFrontPhone(){bigNewsSubImg.classList.add(`${animated2}`,"animate__fadeInUp")}function showInchText(){bigNewsInchText.classList.add(`${animated2}`,"animate__fadeInUp","animate__slower")}function showInchSubText(){bigNewsInchSubText.classList.add(`${animated2}`,"animate__fadeInUp","animate__slower")}phoneBanner.classList.add("hide"),setTimeout(()=>{namePhone.style.visibility="visible",namePhone.classList.add(`${animated2}`,"animate__fadeInUp"),namePhone.addEventListener("animationend",function(){hideName(),showSayHi(),sayHi.addEventListener("animationend",function(){hideSayHi(),setTimeout(()=>{phoneBanner.classList.remove("hide"),showPhoneCenter(),showPhoneLeft(),showPhoneRight(),contentPhone.classList.add("wow",`${animated2}`,"animate__fadeInUp"),showBigNewsPhone(),bigNewsPhone.addEventListener("animationend",function(){showThinner(),showSmaller(),showLighter(),textLighter.addEventListener("animationend",function(){hideBigNewsPhone(),hideThinner(),hideSmaller(),hideLighter(),setTimeout(()=>{bigNewsSub.style.visibility="visible",showFrontPhone(),showInchText(),showInchSubText()},500)})}),wow=new WOW({boxClass:"wow",animateClass:"animate__animated",offset:0,mobile:!0,live:!0});var e=document.querySelector(".title1");e.classList.add(`${animated2}`,"animate__fadeInLeft"),e.addEventListener("animationend",function(){setTimeout(()=>{document.querySelector(".title2").classList.add("show",`${animated2}`,"animate__fadeIn"),e.style.visibility="hidden";document.querySelector(".f2").style.zIndex="6"},300)}),wow.init()},1e3)})})},2100);