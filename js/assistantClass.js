// class botChatting{
//     constructor(){
//         today = new Date();
//         spanTime = document.querySelector('.current__time');
//         var contentText;
    
//     }

//     init(){
        
//     }
//     showDate(){
//         var spanDate = document.querySelector('.current__date');
//         spanDate.innerText = `Th ${today.getDay()}, ${today.getDate()} thg ${today.getMonth()}`;
//     }

//     botCLickBtn(allBtn){
//         var btnLength = allBtn.length;
//         for(var s = 0; s < btnLength; s++){
//             allBtn[s].addEventListener('click', function(e){
//                 userBotShow(e);
//                 ownBotShow(e);
//             })
//         }
//     }


//     createText(time, content){
//         var newDiv = document.createElement('div');
//         newDiv.classList.add(`user-bot`);
//         newDiv.innerHTML = `<div class="user-bot__content">
//                                 <span class="current__time">${time}</span>
//                                 <div class="user-bot__content-title">
//                                     <div class="content__btn__text">
//                                         <span>${content}.</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="user-icon">
//                                 <div class="user">
//                                     <i class="fa fa-user"></i>
//                                 </div>
//                             </div>
//                             `;
//         return newDiv;
//     }

//     userBotShow(e){
//         /*to push text content*/
//     var chatBotContent = document.querySelector('.chatbox__content');
//     var divWrap = document.createElement('div');
//     divWrap.classList.add(`user-bot__wrap`);
//     contentText = e.target.innerText;
//     var time = `${today.getHours()}g:${today.getMinutes()}p`;
//     var showText = createText(time, contentText);
//     divWrap.appendChild(showText);
//     chatBotContent.appendChild(divWrap);
//     }   

    
//     ownBotShow(e){
//         var contentLength = e.target.attributes.length;
//         var content = e.target.attributes;
//         /*to create button*/
//         var attr; /*to get text by emma*/


//         /*Case: fix '+=' button when click*/
        
//         for(var c = 0; c < contentLength; c++){
//             if(checkDataAttr(content[c].nodeName)){
//                 attr = content[c];
//                 var botBtn = document.createElement('a');
//                 botBtn.classList.add(`ass-bot__content__btn`, `this-button`);
//                 botBtn.innerHTML = `${content[c].value}`;
//                 botButtonWrap.appendChild(botBtn);
//             }
//         }
    
    
        
//         var textButton = attr.value;
//         var texT = text(textButton, para);
//         para.innerHTML = texT.innerText;
//         messageContent.innerHTML = para.outerHTML;
//         iconContent.innerHTML = icon.outerHTML;
//         assistantIconContent.innerHTML = iconContent.outerHTML;
//         Message.innerHTML = messageContent.outerHTML + botButtonWrap.outerHTML;
//         assistantMessageContent.innerHTML = Message.outerHTML + currentTime.outerHTML;
//         assistantContent.innerHTML = assistantIconContent.outerHTML + assistantMessageContent.outerHTML;
//         assistantContentWrap.innerHTML = assistantContent.outerHTML;
    
    
    
//         chatBotContent.insertAdjacentHTML('beforeend', assistantContentWrap.outerHTML);
//         // chatBotContent.appendChild(assistantContentWrap);
        
//         activeButtonCTA(contentText);


//         function activeButtonCTA(userText){
//             switch(userText){
//                 case 'Mua sản phẩm':
//                     activeButtonThis();
//                     break;
//                 case 'Tư vấn sản phẩm':
//                     activeButtonThis2();
//                     break;
//                 case 'Hổ trợ kỹ thuật':
//                     activeButtonThis3();
//                     break;
//                 default:
//                     break;
//             }
//         }
//             function activeButtonThis(){
//                 const link = ['index5.html', 'index2-phone1.html'];
//                 var button = document.querySelectorAll('.this-button');
//                 for(var i = 0; i < button.length; i++){
//                     button[i].onclick = function(e){
//                         userBotShow(e);
//                         ownTextShow();
//                     }
//                     button[i].setAttribute('href', link[i]);
//                     button[i].setAttribute('target', '_blank');
//                 }
//             }
//             function activeButtonThis2(){
//                 const link = ['index5.html', 'compare-page.html'];
//                 var button = document.querySelectorAll('.this-button');
//                 for(var i = 0; i < button.length; i++){
//                     button[i].onclick = function(e){
//                         userBotShow(e);
//                         ownTextShow();
//                     }
//                     button[i].setAttribute('href', link[i]);
//                     button[i].setAttribute('target', '_blank');
//                 }
//             }
//             function activeButtonThis3(){
//                 alert('emma đang lớn');
//             }

//                 function ownTextShow(){
//                     var chatBotContent = document.querySelector('.chatbox__content');
//                     var divWrap = document.createElement('div');
//                     divWrap.classList.add(`assistant-bot__wrap`);
//                     var time = `${today.getHours()}g:${today.getMinutes()}p`;
//                     var showText = createOwnText(time);
//                     divWrap.appendChild(showText);
//                     chatBotContent.appendChild(divWrap);
//                 }
//                 function createOwnText(time){
//                     var newDiv = document.createElement('div');
//                     newDiv.classList.add(`assistant-bot`);
//                     newDiv.innerHTML = 
//                     `<div class="assistant-bot">
//                         <div class="assistant-bot__icon__wrap">
//                             <div class="bot-icon">
//                                 <i class="fa fa-user"></i>
//                             </div>
//                         </div>
//                         <div class="assistant-bot__content__wrap">
//                             <div class="user-bot__content-title">
//                                 <div class="content__btn__text">
//                                     <span>Đợi Emma trong giây lát...!.</span>
//                                 </div>
//                             </div>
//                             <span class="current__time">${time}</span>
//                         </div>
//                     </div>`;
//                     return newDiv;
//                 }
        
        


//     }

// }

class assistant
{
    constructor()
    {
        xBTn = document.querySelector('.assistant-wrap .assistant i');
        dotsVerticalBtn = document.querySelector('.dots-vetical-btn');
        exitChatBoxBtn = document.querySelector('.exit-chatbox-btn');
        mgBot = document.querySelector('.assistant');
        userContent = document.querySelector('.user-bot__content-title');
        botBtn = document.querySelectorAll('.ass-bot__content__btn');
        botBtnLength = botBtn.length;
        botButtonWrap = document.createElement('div');
        botButtonWrap.classList.add(`assistant-bot__content__btn`);
        chatBotContent = document.querySelector('.chatbox__content');
        assistantContentWrap = document.createElement('div');
            assistantContentWrap.classList.add(`assistant-bot__wrap`);
        assistantContent = document.createElement('div');
            assistantContent.classList.add(`assistant-bot`);
        assistantMessageContent = document.createElement('div');
            assistantMessageContent.classList.add( `assistant-bot__content__wrap`);
        assistantIconContent = document.createElement('div');
            assistantIconContent.classList.add( `assistant-bot__icon__wrap`);
        iconContent = document.createElement('div');
            iconContent.classList.add(`bot-icon`);
        icon = document.createElement('i');
            icon.classList.add(`fa`, `fa-user`);
        Message = document.createElement('div');
            Message.classList.add(`assistant-bot__content`);
        messageContent = document.createElement('div');
            messageContent.classList.add(`assistant-bot__content__text`);
        currentTime = document.createElement('span');
            currentTime.classList.add(`current__time`);
            // setTime(currentTime);
        para = document.createElement('p');
    }
    
    init()
    {
        showAssistant(); 
        showTextModal();
        xBTn.addEventListener('click', this.hideAssistant);
        dotsVerticalBtn.addEventListener('click', this.showText);
        exitChatBoxBtn.addEventListener('click', this.hideChatBox);
        imgBot.addEventListener('click', this.showChatBox);
        
    }
    
    showTextModal(){
        var modal = document.createElement('div');
        modal.classList.add('message-md');
        modal.innerHTML = `<div class="ms-icon">
        <i class="fa fa-times"></i>
    </div>
    <p>
        Đừng bỏ lỡ ưu đãi hấp dẫn nhất
        Nhận tư vấn ngay!</p>`;
        document.querySelector('body').appendChild(modal);
        document.querySelector('.ms-icon').addEventListener('click', function(){
            modal.remove();
        })
    }
    showAssistant(){
        var assistant = document.querySelector('.assistant-wrap');
        assistant.classList.add('show');
        
    }
    showText(e){
        e.preventDefault();
        var text = document.querySelector('.show-text');
        text.classList.toggle('show');
    }
    hideChatBox(e){
        e.preventDefault();
        var chatBox = document.querySelector('.chatbox');
        chatBox.classList.remove('show');
    }
    showChatBox(e){
        var chatBox = document.querySelector('.chatbox');
        chatBox.classList.add('show');
    }
    setTime(spanTime){
        let today = new Date();
        spanTime.innerText =`${today.getHours()}g:${today.getMinutes()}p`;
        return spanTime;
    }
   
}


new assistant().init();
