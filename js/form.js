var checkBox = document.querySelector('.checkBox-btn');
var formMail = document.querySelector('.slogan__register-form__input-wrapper');
var message = document.querySelector('.message');
var subLabel = document.querySelector('.slogan__register-form__email-label');
var textLabel = document.querySelector('.slogan__register-form__email-label span');
var submitBtn = document.querySelector('.btn-register .btn');
// var pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
checkBox.addEventListener('click', function(){
    checkBox.disabled = false;
    var email = document.querySelector('.input-email').value;
        if(email.indexOf('@gmail.com') == -1){
            checkBox.checked = false;
            submitBtn.disabled = true;
            checkBox.classList.add('hide');
            formMail.classList.add('no');
            subLabel.classList.add('no');
            textLabel.classList.add('no');
            textLabel.classList.remove('yes');
            formMail.classList.remove('yes');
            subLabel.classList.remove('yes');
            message.classList.add('invalid');
            message.classList.remove('valid');
            message.innerHTML=`không ok nhập lại đi`;
            
        }else{
            submitBtn.disabled = false;
            formMail.classList.add('yes');
            subLabel.classList.add('yes');
            textLabel.classList.add('yes');
            formMail.classList.remove('no');
            subLabel.classList.remove('no');
            textLabel.classList.remove('no');
            checkBox.classList.remove('hide');
            message.classList.add('valid');
            message.classList.remove('invalid');
            message.innerHTML=`ok ngon`;
            
        }
    
});