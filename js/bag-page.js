



function fixNav(){
    var scrollValue = document.documentElement.scrollTop || window.pageYOffset;
    var privacyField = document.getElementById('privacy-field');
    var offsetField = privacyField.offsetTop;
    var offsetFieldHeight = privacyField.clientHeight;
    if(scrollValue > offsetField){
        console.log('trong1');
        privacyField.style.position = `fixed`;
        privacyField.style.left = `65%`;
        privacyField.style.top = `0`;
        privacyField.style.right = `0`;
    }else{
        console.log('het');
        privacyField.style.position = `fixed`;
        privacyField.style.left = `65%`;
        privacyField.style.top = `180px`;
        privacyField.style.right = `0`;
    }
}


// window.addEventListener('scroll',()=>{
//     fixNav();
// });


