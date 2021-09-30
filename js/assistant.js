var xBTn = document.querySelector('.assistant-wrap .assistant i');
xBTn.addEventListener('click', hideAssistant);
setTimeout(() => {
    showAssistant(); 
    showTextModal();
}, 1000);


function showTextModal(){
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

function hideAssistant(){
    var assistant = document.querySelector('.assistant-wrap');
    if (assistant.classList.contains('show'))
        assistant.classList.remove('show');
}
function showAssistant(){
    var assistant = document.querySelector('.assistant-wrap');
    assistant.classList.add('show');
}


var dotsVerticalBtn = document.querySelector('.dots-vetical-btn');
var exitChatBoxBtn = document.querySelector('.exit-chatbox-btn');
var imgBot = document.querySelector('.assistant');
dotsVerticalBtn.addEventListener('click', this.showText);
// dotsVerticalBtn.addEventListener('mouseenter', this.showText);
// dotsVerticalBtn.addEventListener('mouseleave', this.hideText);

exitChatBoxBtn.addEventListener('click', hideChatBox);
imgBot.addEventListener('click', showChatBox);

function showText(e){
    e.preventDefault();
    var text = document.querySelector('.show-text');
    text.classList.toggle('show');
}


function hideChatBox(e){
    e.preventDefault();
    var chatBox = document.querySelector('.chatbox');
    chatBox.classList.remove('show');
}
function showChatBox(e){
    var chatBox = document.querySelector('.chatbox');
    chatBox.classList.add('show');
}








function setTime(spanTime){
    let today = new Date();
    spanTime.innerText =`${today.getHours()}g:${today.getMinutes()}p`;
    return spanTime;
}

var userContent = document.querySelector('.user-bot__content-title');
var botBtn = document.querySelectorAll('.ass-bot__content__btn');
var botBtnLength = botBtn.length;

/*declare*/
    const botButtonWrap = document.createElement('div');
    botButtonWrap.classList.add(`assistant-bot__content__btn`);
    const chatBotContent = document.querySelector('.chatbox__content');
    const assistantContentWrap = document.createElement('div');
        assistantContentWrap.classList.add(`assistant-bot__wrap`);
    const assistantContent = document.createElement('div');
        assistantContent.classList.add(`assistant-bot`);
    const assistantMessageContent = document.createElement('div');
        assistantMessageContent.classList.add( `assistant-bot__content__wrap`);
    const assistantIconContent = document.createElement('div');
        assistantIconContent.classList.add( `assistant-bot__icon__wrap`);
    const iconContent = document.createElement('div');
        iconContent.classList.add(`bot-icon`);
    const icon = document.createElement('i');
        icon.classList.add(`fa`, `fa-user`);
    const Message = document.createElement('div');
        Message.classList.add(`assistant-bot__content`);
    const messageContent = document.createElement('div');
        messageContent.classList.add(`assistant-bot__content__text`);
    const currentTime = document.createElement('span');
        currentTime.classList.add(`current__time`);
        setTime(currentTime);
    const para = document.createElement('p');


const botChatting = function(){
    var today = new Date();
    function showDate(){
        var spanDate = document.querySelector('.current__date');
        spanDate.innerText = `Th ${today.getDay()}, ${today.getDate()} thg ${today.getMonth()}`;
    }
    var spanTime = document.querySelector('.current__time');
    setTime(spanTime);
    showDate();


    function botCLickBtn(allBtn){
        var btnLength = allBtn.length;
        for(let s = 0; s < btnLength; s++){
            allBtn[s].addEventListener('click', e =>{
                userBotShow(e);
                ownBotShow(e);
            })
        }
    }
    botCLickBtn(botBtn);

    var contentText;
    function userBotShow(e){
            /*to push text content*/
        var chatBotContent = document.querySelector('.chatbox__content');
        var divWrap = document.createElement('div');
        divWrap.classList.add(`user-bot__wrap`);
        contentText = e.target.innerText;
        var time = `${today.getHours()}g:${today.getMinutes()}p`;
        var showText = createText(time, contentText);
        divWrap.appendChild(showText);
        chatBotContent.appendChild(divWrap);
    }
    
        function createText(time, content){
            var newDiv = document.createElement('div');
            newDiv.classList.add(`user-bot`);
            newDiv.innerHTML = `<div class="user-bot__content">
                                    <span class="current__time">${time}</span>
                                    <div class="user-bot__content-title">
                                        <div class="content__btn__text">
                                            <span>${content}.</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-icon">
                                    <div class="user">
                                        <i class="fa fa-user"></i>
                                    </div>
                                </div>
                                `;
            return newDiv;
        }


    function ownBotShow(e){
        var contentLength = e.target.attributes.length;
        var content = e.target.attributes;
    
        var attr;
        /*to create button*/
        for(let c = 0; c < contentLength; c++){
            attr = content[c];
            var zxc;
            if(checkDataAttr(attr.nodeName)){
                var botBtn = document.createElement('a');
                botBtn.classList.add(`ass-bot__content__btn`, 'this-button');
                botBtn.innerHTML = `${attr.value}`;
                zxc = botBtn;
                botButtonWrap.appendChild(zxc);
            }
        }
    
    
    
        var at = attr.value;
        var texT = text(at, para);
        para.innerHTML = texT.innerText;
        messageContent.innerHTML = para.outerHTML;
        iconContent.innerHTML = icon.outerHTML;
        assistantIconContent.innerHTML = iconContent.outerHTML;
        Message.innerHTML = messageContent.outerHTML + botButtonWrap.outerHTML;
        assistantMessageContent.innerHTML = Message.outerHTML + currentTime.outerHTML;
        assistantContent.innerHTML = assistantIconContent.outerHTML + assistantMessageContent.outerHTML;
        assistantContentWrap.innerHTML = assistantContent.outerHTML;
    
    
    
        chatBotContent.insertAdjacentHTML('beforeend', assistantContentWrap.outerHTML);
        // chatBotContent.appendChild(assistantContentWrap);
        
        activeButtonCTA(contentText);


        function activeButtonCTA(userText){
            switch(userText){
                case 'Mua sản phẩm':
                    activeButtonThis();
                    break;
                case 'Tư vấn sản phẩm':
                    activeButtonThis2();
                    break;
                case 'Hổ trợ kỹ thuật':
                    activeButtonThis3();
                    break;
                default:
                    break;
            }
        }
            function activeButtonThis(){
                const link = ['index5.html', 'index2-phone1.html'];
                var button = document.querySelectorAll('.this-button');
                for(var i = 0; i < button.length; i++){
                    button[i].onclick = function(e){
                        userBotShow(e);
                        ownTextShow();
                    }
                    button[i].setAttribute('href', link[i]);
                    button[i].setAttribute('target', '_blank');
                }
            }
            function activeButtonThis2(){
                const link = ['index5.html', 'compare-page.html'];
                var button = document.querySelectorAll('.this-button');
                for(var i = 0; i < button.length; i++){
                    button[i].onclick = function(e){
                        userBotShow(e);
                        ownTextShow();
                    }
                    button[i].setAttribute('href', link[i]);
                    button[i].setAttribute('target', '_blank');
                }
            }
            function activeButtonThis3(){
                alert('emma đang lớn');
            }

                function ownTextShow(){
                    var chatBotContent = document.querySelector('.chatbox__content');
                    var divWrap = document.createElement('div');
                    divWrap.classList.add(`assistant-bot__wrap`);
                    var time = `${today.getHours()}g:${today.getMinutes()}p`;
                    var showText = createOwnText(time);
                    divWrap.appendChild(showText);
                    chatBotContent.appendChild(divWrap);
                }
                function createOwnText(time){
                    var newDiv = document.createElement('div');
                    newDiv.classList.add(`assistant-bot`);
                    newDiv.innerHTML = 
                    `<div class="assistant-bot">
                        <div class="assistant-bot__icon__wrap">
                            <div class="bot-icon">
                                <i class="fa fa-user"></i>
                            </div>
                        </div>
                        <div class="assistant-bot__content__wrap">
                            <div class="user-bot__content-title">
                                <div class="content__btn__text">
                                    <span>Đợi Emma trong giây lát...!.</span>
                                </div>
                            </div>
                            <span class="current__time">${time}</span>
                        </div>
                    </div>`;
                    return newDiv;
                }
        
        


    }
        function checkDataAttr(dataAttr){
            if(dataAttr.indexOf('data-') > -1){
                return true;
            }
        }
        function text(name, para){
            switch(name){
                case 'Sản phẩm mới nhất':
                case 'Xem tất cả sản phẩm':
                    para.innerHTML += `Emma gợi ý bạn hai lựa chọn !`;
                    return para;
                    break;
                case 'So sánh các sản phẩm':
                case 'Xem sản phẩm mới nhất':
                    para.innerHTML += `Emma đề xuất bạn !`;
                    return para;
                    break;
                case 'Ai biết':
                    para.innerHTML += `Emma đang lớn !`;
                    return para;
                    break;
                default:
                    break;
            }
        }
        
};


botChatting();

