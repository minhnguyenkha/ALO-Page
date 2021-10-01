// var compareList = document.querySelectorAll('.select-phone__list-wrap');
// var nameBtnShow = document.querySelectorAll('.select-phone-field');

// var a = 0;
// var nameBtnShowLength = nameBtnShow.length;
// for (a = 0; a < nameBtnShowLength; a++){
//     nameBtnShow[a].addEventListener('click',showList);
// }

// function showList(e){
//     var index = e.target.getAttribute('data-list');
//     compareList[index].classList.toggle('show');
// }

function swapImg(event){
    var buttonImg = event.target;
    var src = `./img/Phone/icon-color/phone3/`;
    var indexImgShow = buttonImg.parentElement.parentElement.parentElement.getAttribute('data-index');

    var imgReplace = buttonImg.getAttribute('data-img');

    var imgShow =
    buttonImg.parentElement.parentElement.parentElement.parentElement.previousElementSibling.children[indexImgShow].children[0].children;

    // var imgShow = document.querySelectorAll('.Product-items__img img');
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
            imgBtn[c].addEventListener('mouseover', e => {
                swapImg(e);
                activeColor(e, button, length);
            });
            c++;
        }
        a++;
    }
}
function activeColor(e, button, length){
    btnToActive = e.target.parentElement;
    var c = 0;
    while(c < length){
        button[c].classList.remove('current');
        c++;
    }
    btnToActive.classList.add('current');
   
}

var colorIconButtonRight = document.querySelectorAll('.color-icon-right');
var buttonRightLength = colorIconButtonRight.length;
var colorIconButtonLeft = document.querySelectorAll('.color-icon-left');
var buttonLeftLength = colorIconButtonLeft.length;

overImg(buttonRightLength, colorIconButtonRight);
overImg(buttonLeftLength, colorIconButtonLeft);







const Phone1 = [
    {
        name: 'Alo 1 VIP',
        img: './img/Phone/icon-color/phone3/phone3.jpg',
        dataImg: {
            color: [
                './img/color-span/2.jpg',
                './img/color-span/3.jpg',
                './img/color-span/4.jpg',
            ],
            data:[
                'phone3-1.jpg',
                'phone3.jpg',
                'phone3-2.jpg',
            ],
        },
        status: false,
        quickLook:{
            display: {
                size: '6.1″',
                title: 'Màn hình DEF độ phân giải full HD',
            },
            cpu: {
                img: './img/Phone/chipa.png',
                title: [
                    'Chip A mạnh mẽ',
                    'Chip nhanh nhất trong các loại',
                ]
            },
            connect: {
                img: './img/Phone/5G.png',
                title: [
                    'Kết nối 5G mới nhất',
                    'Truy cập mọi thứ nhanh nhất',
                ] 
            },
            camera: {
                img: 'img/Phone/camera1.png',
                title: [
                    'Chụp cận cảnh',
                    'Góc rộng',
                    '―',
                    'Ống kính ZLRWe',
                ]
            },
            waterResistant: {
                title: 'Công nghệ chống nước gì đó, chịu được độ sâu 30m với thời gian trên 25 phút',
            },
            battery: {
                title: '17 tiếng xem video chất lượng full HD',
            }
            

        },
        version: ['64&nbsp;GB', '128&nbsp;GB'],
        display: [
            'Full HD super ABC',
            '5.8-inch',
            'Hổ trợ HDR',
            'Tràn viền',
            '2 triệu điểm ảnh',    
        ],
        size: [
            '10cm',
            '0.3cm',
            '50cm',
            '100gr',
        ],
        cpu: {
            img: './img/Phone/chip1.png',
            title: 'V1 siêu nhanh chơi game sướng nhất thế giới',
        },
        camera: [
            'Dual camera',
            '32MP',
            'Khẩu độ ƒ/2.2',
            '―',
            '6 hiệu ứng chân dung (Natural, Studio, Contour, Stage, Stage Mono, High-Key Mono)',
            'quay phim 4K 24 fps, 25 fps, 30 fps, hoặc 60 fps',
            'Chế độ ban đêm',
        ],
        connect: [
            'GSM/EDGE',
            'UMTS/HSPA+',
            '5G (sub-6 GHz)2',
            'Ultra Wideband chip for spatial awareness8',
            'Bluetooth 5.0',
            'NFC Wi‑Fi 6 (802.11ax) with MIMO',
            'Wi‑Fi 6 (802.11ax)',
            'Built-in GPS, GLONASS, Galileo, QZSS, and BeiDou',
            'Express Cards with power reserve',
        ],
        battery: {
            title: [
                'Pin aboale hiện đại',
                'Luôn đi kèm chế độ tiết kiêm pin',
                'Đảm bảo an toàn chống cháy nổ',
            ],
            timing: [
                'Trên 15 tiếng',
                '20 tiếng',
                'gần 12.5 tiếng',
                'Trên 50% trong 30 phút với cáp sạc đi kèm',
            ],
        }

    },
    {
        name: 'Alo 2 VIP',
        img: './img/Phone/icon-color/phone3/phone2.jpg',
        dataImg: {
            color: [
                './img/color-span/1.jpg',
                './img/color-span/2.jpg',
            ],
            data:[
                'phone2.jpg',
                'phone2-1.jpg',
            ],
        },
        status: true,
        quickLook:{
            display: {
                size: '6.5″',
                title: 'Màn hình ABC độ phân giải full HD',
            },
            cpu: {
                img: './img/Phone/chip2.png',
                title: [
                    'Chip 2 mạnh mẽ',
                    'Chơi game cực sướng',
                ]
            },
            connect: {
                img: './img/Phone/4G.png',
                title: [
                    'Kết nối 4G nhanh chóng mượt mà',
                    'Bạn đồng hành khi mất điện',
                ] 
            },
            camera: {
                img: 'img/Phone/camera2.png',
                title: [
                    'Cụm camera kép',
                    '―',
                    'Hổ trợ quay phim 4K 30fps',
                    'Chụp chân dung',
                ]
            },
            waterResistant: {
                title: 'Công nghệ chống nước gì đó, chịu được độ sâu 20m với thời gian trên 40 phút',
            },
            battery: {
                title: '15 tiếng xem video chất lượng full HD',
            }
            

        },
        version: ['32&nbsp;GB', '64&nbsp;GB'],
        display: [
            '2K Bay đi xa',
            '6-inch',
            'Hổ trợ HDR+',
            'Kính cường lực',
            '2 triệu điểm ảnh',    
        ],
        size: [
            '10cm',
            '0.25cm',
            '60cm',
            '130gr',
        ],
        cpu: {
            img: './img/Phone/chip3.png',
            title: 'V3 siêu mượt lướt web xem phim ngon',
        },
        camera: [
            'Dual camera',
            '12MP',
            'Khẩu độ ƒ/2.2',
            '―',
            '6 hiệu ứng chân dung (Natural, Studio, Contour, Stage, Stage Mono, High-Key Mono)',
            'quay phim 4K 24 fps, 25 fps, 30 fps, hoặc 60 fps',
            'Chế độ ban đêm',
        ],
        connect: [
            'GSM/EDGE',
            'UMTS/HSPA+',
            '5G (sub-6 GHz)2',
            'Ultra Wideband chip for spatial awareness8',
            'Bluetooth 5.0',
            'NFC Wi‑Fi 6 (802.11ax) with MIMO',
            'Wi‑Fi 6 (802.11ax)',
            'Built-in GPS, GLONASS, Galileo, QZSS, and BeiDou',
            '―',
            'Express Cards with power reserve',
        ],
        battery: {
            title: [
                'Pin aboale hiện đại',
                'Luôn đi kèm chế độ tiết kiêm pin',
                'Đảm bảo an toàn chống cháy nổ',
            ],
            timing: [
                'Trên 17 tiếng',
                '23 tiếng',
                'gần 15 tiếng',
                'Trên 50% trong 30 phút với cáp sạc đi kèm',
            ]
        }
    },
    {
        name: 'Alo 4 PLUS',
        img: './img/Phone/icon-color/phone3/phone4.jpg',
        dataImg: {
            color: [
                './img/color-span/4.jpg',
                './img/color-span/1.jpg',
                './img/color-span/5.jpg',
            ],
            data:[
                'phone4.jpg',
                'phone4-1.jpg',
                'phone4-2.jpg',
            ],
        },
        status: true,
        quickLook:{
            display: {
                size: '5.5″',
                title: 'Màn hình ZSE độ phân giải 2K',
            },
            cpu: {
                img: './img/Phone/chip2.png',
                title: [
                    'Chip 2 mạnh mẽ',
                    'Chơi game cực sướng',
                ]
            },
            connect: {
                img: './img/Phone/5G.png',
                title: [
                    'Kết nối 4G nhanh chóng mượt mà',
                    'Bạn đồng hành khi mất điện',
                ] 
            },
            camera: {
                img: 'img/Phone/camera4.png',
                title: [
                    'Cụm camera kép',
                    'Tích hợp đèn flash chuyên dùng cho quay phim',
                    'Hổ trợ quay phim 2K 60fps',
                    'Chụp Gốc rộng',
                ]
            },
            waterResistant: {
                title: 'Công nghệ chống nước gì đó, chịu được độ sâu 20m với thời gian trên 45 phút',
            },
            battery: {
                title: '12 tiếng xem video chất lượng full HD',
            }
            

        },
        version: ['32&nbsp;GB', '128&nbsp;GB'],
        display: [
            '2K Bay đi xa',
            '5.5-inch',
            'Hổ trợ HDR+',
            'Kính cường lực',
            '4 triệu điểm ảnh',    
        ],
        size: [
            '40cm',
            '0.2cm',
            '50cm',
            '110gr',
        ],
        cpu: {
            img: './img/Phone/chip2.png',
            title: 'V2 Chơi game cực sướng',
        },
        camera: [
            'Dual camera',
            '64MP',
            'Khẩu độ ƒ/2.2',
            'Tích hợp đèn flash Taliban chuyên dùng cho quay phim',
            '6 hiệu ứng chân dung (Natural, Studio, Contour, Stage, Stage Mono, High-Key Mono)',
            'quay phim 2K 24 fps, 25 fps, 30 fps, hoặc 60 fps',
            'Chế độ ban đêm',
        ],
        connect: [
            'GSM/EDGE',
            'UMTS/HSPA+',
            '4G (sub-6 GHz)2',
            'Ultra Wideband chip for spatial awareness8',
            'Bluetooth 5.0',
            'NFC Wi‑Fi 6 (802.11ax) with MIMO',
            'Wi‑Fi 6 (802.11ax)',
            'Built-in GPS, GLONASS, Galileo, QZSS, and BeiDou',
            '―',
            'Express Cards with power reserve',
        ],
        battery: {
            title: [
                'Pin aboale hiện đại',
                'Luôn đi kèm chế độ tiết kiêm pin',
                'Đảm bảo an toàn chống cháy nổ',
            ],
            timing: [
                'Trên 21 tiếng',
                '17 tiếng',
                'gần 13 tiếng',
                'Trên 50% trong 40 phút với cáp sạc đi kèm',
            ]
        }
    },
    {
        name: 'Alo 5 PRO',
        img: './img/Phone/icon-color/phone3/phone5.jpg',
        dataImg: {
            color: [
                './img/color-span/2.jpg',
            ],
            data:[
                'phone5.jpg',
            ],
        },
        status: true,
        quickLook:{
            display: {
                size: '5.7″',
                title: 'Màn hình WQE độ phân giải full HD',
            },
            cpu: {
                img: './img/Phone/chip3.png',
                title: [
                    'Chip 3 tối ưu trải nghiêm',
                    'Chạy bo cực đã',
                ]
            },
            connect: {
                img: './img/Phone/4G.png',
                title: [
                    'Kết nối 4G nhanh chóng mượt mà',
                    'Bạn đồng hành khi mất điện',
                ] 
            },
            camera: {
                img: 'img/Phone/camera3.png',
                title: [
                    'Cụm camera kép',
                    'Ống kính Mona Lisa',
                    'Hổ trợ quay phim 1080p 120fps',
                    'Chụp chân dung',
                ]
            },
            waterResistant: {
                title: 'Công nghệ chống nước gì đó, chịu được độ sâu 20m với thời gian trên 15 phút',
            },
            battery: {
                title: '19 tiếng xem video chất lượng full HD',
            }
            

        },
        version: ['32&nbsp;GB', '―'],
        display: [
            '3K Bay đi xa',
            '5.7-inch',
            'Hổ trợ HDR+',
            'Tràn viền',
            '3 triệu điểm ảnh',    
        ],
        size: [
            '15cm',
            '0.5cm',
            '65cm',
            '170gr',
        ],
        cpu: {
            img: './img/Phone/chip2.png',
            title: 'V2 Tối ưu trải nghiêm pro vip',
        },
        camera: [
            'Single camera',
            '16MP',
            'Khẩu độ ƒ/2.2',
            'Ống kính Mona Lisa quay phim cực đã',
            '6 hiệu ứng chân dung (Natural, Studio, Contour, Stage, Stage Mono, High-Key Mono)',
            'quay phim 4K 24 fps, 25 fps, 30 fps, hoặc 60 fps',
            'Chế độ ban đêm',
        ],
        connect: [
            'GSM/EDGE',
            'UMTS/HSPA+',
            '5G (sub-6 GHz)2',
            'Ultra Wideband chip for spatial awareness8',
            'Bluetooth 5.0',
            'NFC Wi‑Fi 6 (802.11ax) with MIMO',
            'Wi‑Fi 6 (802.11ax)',
            'Built-in GPS, GLONASS, Galileo, QZSS, and BeiDou',
            'Express Cards with power reserve',
        ],
        battery: {
            title: [
                'Pin aboale hiện đại',
                'Luôn đi kèm chế độ tiết kiêm pin',
                'Đảm bảo an toàn chống cháy nổ',
            ],
            timing: [
                'Trên 19 tiếng',
                '13 tiếng',
                'gần 9 tiếng',
                'Trên 50% trong 45 phút với cáp sạc đi kèm',
            ]
        }
    },
    {
        name: 'Alo 6',
        img: './img/Phone/icon-color/phone3/phone6.jpg',
        dataImg: {
            color: [
                './img/color-span/3.jpg',
                './img/color-span/5.jpg',
            ],
            data:[
                'phone6.jpg',
                'phone6-1.jpg',
            ],
        },
        status: true,
        quickLook:{
            display: {
                size: '5.4″',
                title: 'Màn hình SWE độ phân giải HD',
            },
            cpu: {
                img: './img/Phone/chipa.png',
                title: [
                    'Chip a tối ưu trải nghiêm',
                    'Chạy bo cực đã',
                ]
            },
            connect: {
                img: './img/Phone/4G.png',
                title: [
                    'Kết nối 4G nhanh chóng mượt mà',
                    'Bạn đồng hành khi mất điện',
                ] 
            },
            camera: {
                img: 'img/Phone/camera2.png',
                title: [
                    'Cụm camera kép',
                    'Ống kính Mona Lisa',
                    'Hổ trợ quay phim 1080p 120fps',
                    'Chụp chân dung',
                ]
            },
            waterResistant: {
                title: 'Công nghệ chống nước gì đó, chịu được độ sâu 20m với thời gian trên 15 phút',
            },
            battery: {
                title: '19 tiếng xem video chất lượng full HD',
            }
            

        },
        version: ['64&nbsp;GB', '―'],
        display: [
            'HD Trải nghiệm phổ thông',
            '5.4-inch',
            'Hổ trợ HDR',
            'Kính cường lực',
            '2 triệu điểm ảnh',    
        ],
        size: [
            '10cm',
            '0.6cm',
            '80cm',
            '200gr',
        ],
        cpu: {
            img: './img/Phone/chipa.png',
            title: 'Va Tối ưu trải nghiêm pro vip',
        },
        camera: [
            'Dual camera',
            '16MP',
            'Khẩu độ ƒ/2.2',
            'Ống kính Mona Lisa quay phim cực đã',
            '6 hiệu ứng chân dung (Natural, Studio, Contour, Stage, Stage Mono, High-Key Mono)',
            'quay phim HD 30 fps, 60 fps, 80 fps, hoặc 120 fps',
            'Chế độ ban đêm',
        ],
        connect: [
            'GSM/EDGE',
            'UMTS/HSPA+',
            '5G (sub-6 GHz)2',
            'Ultra Wideband chip for spatial awareness8',
            'Bluetooth 5.0',
            'NFC Wi‑Fi 6 (802.11ax) with MIMO',
            'Wi‑Fi 6 (802.11ax)',
            'Built-in GPS, GLONASS, Galileo, QZSS, and BeiDou',
            'Express Cards with power reserve',
        ],
        battery: {
            title: [
                'Pin aboale hiện đại',
                'Luôn đi kèm chế độ tiết kiêm pin',
                'Đảm bảo an toàn chống cháy nổ',
            ],
            timing: [
                'Trên 23 tiếng',
                '20 tiếng',
                'gần 14 tiếng',
                'Trên 50% trong 60 phút với cáp sạc đi kèm',
            ]
        }
    },
];
var phoneSelected = document.querySelectorAll('.select');
function checkNameToStructOut(name, listsTruct){
    for(let b = 0; b < listsTruct.length; b++){
        let z = listsTruct[b].name;
        if(z === name){
            return listsTruct[b];
        }
    }
}
function ChangeImg(index, thisStruct){
    var img = document.querySelectorAll('.in4-compare__col-phone1 .img')[index].children;
    var img2 = document.querySelectorAll('.in4-compare__col-phone1 .img')[index + 2].children;
    img[0].src = thisStruct.img;
    img2[0].src = thisStruct.img;
}
function subAddLastImgIcon(index, thisStruct){
    var lengthColorInStruct = thisStruct.dataImg.color.length;
    var newColorIcon = document.createElement('div');
    newColorIcon.classList.add('color-phone');
    if(index == 1){
        newColorIcon.classList.add('color-icon-right');
    }else{
        newColorIcon.classList.add('color-icon-left');
    }
    var newImgIcon = document.createElement('img');
    newImgIcon.setAttribute('src', thisStruct.dataImg.color[lengthColorInStruct - 1]);
    newImgIcon.setAttribute('data-img', thisStruct.dataImg.data[lengthColorInStruct - 1])
    newColorIcon.innerHTML = newImgIcon.outerHTML;
    return newColorIcon;
}
function ChangeImgColorIcon (thisStruct, index){
    var IconImgWrap = document.querySelectorAll('.compare-in4__select__color-phone')[index];
    var InColorIconLength = thisStruct.dataImg.color.length;
    var OutColorIconLength = IconImgWrap.children.length;
    var IconImgList = IconImgWrap.children;
    var IconImgListLength = IconImgList.length;
    var w = 0;
    for(w; w< IconImgListLength; w++){
        var thisImg = IconImgList[w].children[0];
        /*I can set Attr in DOM but I need to use this for compare function below */
        if(!thisImg.hasAttribute('src')){
                thisImg.setAttribute('src', thisStruct.dataImg.color[w]);
        }
        thisImg.src = thisStruct.dataImg.color[w];
        thisImg.dataset.img = thisStruct.dataImg.data[w];
        if(w == OutColorIconLength) break;
    }
        // var newImgIcon = subAddLastImgIcon(index, thisStruct);
        // IconImgWrap.appendChild(newImgIcon);

    // for(var x = 0; x < thisStruct.dataImg.color.length; x++){
    //     console.log(thisStruct.dataImg.color[x] + " | " + x);
    // }
    // if(InColorIconLength <= OutColorIconLength){
    //     console.log('ok');
    // }else{
    //     var IconImgList = IconImgWrap.children;
    //     var IconImgListLength = IconImgList.length;
    //     for(let w = 0; w< IconImgListLength; w++){
    //         IconImgList[w].children[0].src = thisStruct.dataImg.color[w];
    //         IconImgList[w].children[0].dataset.img = thisStruct.dataImg.data[w];
    //     }
    //     var newImgIcon = subAddLastImgIcon(index, thisStruct);
    //     IconImgWrap.appendChild(newImgIcon);
    // }
}
function createTextNoteProduct(){
    var newText = document.createElement('div');
    newText.classList.add('text');
    var newSpan = document.createElement('span');
    newSpan.innerHTML = `Hàng không có sẵn`;
    newText.appendChild(newSpan);
    return newText;
}
function createBuyButtonProduct(){
    var newButton = document.createElement('div');
    newButton.classList.add('btn');
    var newLink = document.createElement('a');
    newLink.classList.add('btn__buy-btn');
    newLink.setAttribute('href', '');
    newLink.innerHTML = `Mua`;
    newButton.appendChild(newLink);
    return newButton;
}
function ChangeStatusProduct(index, thisStruct){
    var outStatusProduct = document.querySelectorAll('.status-col-product')[index];
    if(thisStruct.status){
        if(outStatusProduct.children[0].classList.contains('text')){
            var oldNode2 = outStatusProduct.children[0];
            var newBuyButton = createBuyButtonProduct();
            outStatusProduct.replaceChild(newBuyButton, oldNode2);
        }else{
            return;
        }
    }else /* status == false*/{
        if(outStatusProduct.children[0].classList.contains('btn')){
            var oldNode = outStatusProduct.children[0];
            var newSpan = createTextNoteProduct();
            outStatusProduct.replaceChild(newSpan, oldNode);
        }else{
            return;
        }
    }
}
function ChangeQuickLookInfo(index, thisStruct){
    ChangeQuickLookDisplayInfo(index, thisStruct);
    ChangeQuickLookCpuInfo(index, thisStruct);
    ChangeQuickLookConnectInfo(index, thisStruct);
    ChangeQuickLookCameraInfo(index, thisStruct);
    ChangeQuickLookWaterResistantInfo(index, thisStruct);
    ChangeQuickLookBatteryInfo(index, thisStruct);
}
    function ChangeQuickLookDisplayInfo(index, thisStruct){
        var outDisplayInfo = document.querySelectorAll('.ql-display')[index];
        var outDisplaySize = outDisplayInfo.querySelector('ul li h1');
        var outDisplayTitle = outDisplayInfo.querySelector('ul li span');
        outDisplaySize.innerHTML = thisStruct.quickLook.display.size;
        outDisplayTitle.innerHTML = thisStruct.quickLook.display.title;
    }
    function ChangeQuickLookCpuInfo(index, thisStruct){
        var outCpuInfo = document.querySelectorAll('.ql-cpu')[index];
        var outImgCpuIcon = outCpuInfo.querySelector('ul li .img img');
        var outTitle = outCpuInfo.querySelectorAll('ul li span');
        var inTitle = thisStruct.quickLook.cpu.title;
        var outTitleLength = outTitle.length;
        if(outTitle < inTitle) {
            console.log('I need time to fix sorry my website');
        }
        outImgCpuIcon.src = thisStruct.quickLook.cpu.img;
        for(let z = 0; z < outTitleLength; z++){
            outTitle[z].innerHTML = inTitle[z];
        }
    }
    function ChangeQuickLookConnectInfo(index, thisStruct){
        var outConnectInfo = document.querySelectorAll('.ql-connect')[index];
        var outImgConnectIcon = outConnectInfo.querySelector('ul li .img img');
        var outTitle = outConnectInfo.querySelectorAll('ul li span');
        var inTitle = thisStruct.quickLook.connect.title;
        var outTitleLength = outTitle.length;
        if(outTitle < inTitle) {
            console.log('I need time to fix sorry my website');
        }
        outImgConnectIcon.src = thisStruct.quickLook.connect.img;
        for(let z = 0; z < outTitleLength; z++){
            outTitle[z].innerHTML = inTitle[z];
        }
    }
    function ChangeQuickLookCameraInfo(index, thisStruct){
        var outCameraInfo = document.querySelectorAll('.ql-camera')[index];
        var outImgCameraIcon = outCameraInfo.querySelector('ul li .camera-img img');
        var outTitle = outCameraInfo.querySelectorAll('ul li span');
        var inTitle = thisStruct.quickLook.camera.title;
        var outTitleLength = outTitle.length;
        if(outTitle < inTitle) {
            console.log('I need time to fix sorry my website');
        }
        outImgCameraIcon.src = thisStruct.quickLook.camera.img;
        for(let z = 0; z < outTitleLength; z++){
            outTitle[z].innerHTML = inTitle[z];
        }
    }
    function ChangeQuickLookWaterResistantInfo(index, thisStruct){
        var outWaterResistantInfo = document.querySelectorAll('.ql-wt-resistant')[index];
        var outTitle = outWaterResistantInfo.querySelector('ul li span');
        var inTitle = thisStruct.quickLook.waterResistant.title;
        outTitle.innerHTML = inTitle;
    }
    function ChangeQuickLookBatteryInfo(index, thisStruct){
        var outBatteryInfo = document.querySelectorAll('.ql-battery')[index];
        var outTitle = outBatteryInfo.querySelector('ul li span');
        var inTitle = thisStruct.quickLook.battery.title;
        outTitle.innerHTML = inTitle;
    }

function ChangeVersionInfo(index, thisStruct){
    var outVersionInfo = document.querySelectorAll('.version-col')[index];
    var outTitle = outVersionInfo.querySelectorAll('ul li span');
    var outTitleLength = outTitle.length;
    var inTitle = thisStruct.version;
    if(inTitle > outTitle) /*more much line*/{
        console.log('waiting for an other time');
    }
    for(let a = 0; a < outTitleLength; a++){
        outTitle[a].innerHTML = inTitle[a];
    }
}
function ChangeDisplayInfor(index, thisStruct){
    var outDisplayInfor = document.querySelectorAll('.display-col')[index];
    var outTitle = outDisplayInfor.querySelectorAll('ul li');
    var outTitleLength = outTitle.length;
    var inTitle = thisStruct.display;
    if(inTitle > outTitle) /*more much line*/{
        console.log('waiting for an other time');
    }
    for(let b = 0; b < outTitleLength; b++){
        outTitle[b].innerHTML = inTitle[b];
    }
}
function ChangeSizeInfor(index, thisStruct){
    var outSizeInfor = document.querySelectorAll('.size-col')[index];
    var outTitle = outSizeInfor.querySelectorAll('ul li > span');
    var outTitleLength = outTitle.length;
    var inTitle = thisStruct.size;
    if(inTitle > outTitle) /*more much line*/{
        console.log('waiting for an other time');
    }
    for(let b = 0; b < outTitleLength; b++){
        outTitle[b].innerHTML = inTitle[b];
    }
}
function ChangeCpuInfor(index, thisStruct){
    var outSizeInfor = document.querySelectorAll('.cpu-col')[index];
    var outImg = outSizeInfor.querySelector('.compare__col-cpu .cpu img');
    var inImg = thisStruct.cpu.img;
    var outTitle = outSizeInfor.querySelector('.compare__col-cpu span');
    var inTitle = thisStruct.cpu.title;
    outImg.src = inImg;
    outTitle.innerHTML = inTitle;
}
function ChangeCameraInfor(index, thisStruct){
    var outCameraInfor = document.querySelectorAll('.cam-col')[index];
    var outTitle = outCameraInfor.querySelectorAll('ul li');
    var outTitleLength = outTitle.length;
    var inTitle = thisStruct.camera;
    if(inTitle > outTitle) /*more much line*/{
        console.log('waiting for an other time');
    }
    for(let b = 0; b < outTitleLength; b++){
        outTitle[b].innerHTML = inTitle[b];
    }
}
function ChangeConnectInfor(index, thisStruct){
    var outConnectInfor = document.querySelectorAll('.connect-col')[index];
    var outTitle = outConnectInfor.querySelectorAll('ul li');
    var outTitleLength = outTitle.length;
    var inTitle = thisStruct.connect;
    var inTitleLength = inTitle.length;
    if(inTitle > outTitle) /*more much line*/{
        console.log('waiting for an other time');
    }
    var b = 0;
    for(b = 0; b < outTitleLength; b++){
        outTitle[b].innerHTML = inTitle[b];
    }
    /*Improving this ==V */
    // var parentList = outConnectInfor.querySelector('ul');
    // if(b < inTitleLength){
    //     var newList;
    //     for(let a = b; a < inTitleLength; a++){
    //         newList = createSpanListNode(thisStruct.connect[a]);
    //         parentList.appendChild(newList);
    //     }
    // }else{
    //     for(let a = inTitleLength; a < b; a++){
    //         console.log(a);
    //         console.log(parentList.removeChild(newList[a]));
    //     }
    // }
}
    function createSpanListNode(content){
            var newList = document.createElement('li');
            newList.innerHTML = content;
            return newList;
    }

function ChangeBatteryInfor(index, thisStruct){
    var outSizeInfor = document.querySelectorAll('.battery-col')[index];
    var outTitle = outSizeInfor.querySelectorAll('ul .bt-btry');
    var outTitle2 = outSizeInfor.querySelectorAll('ul .bt-timing span');
    var outTitleLength = outTitle.length; 
    var outTitle2Length = outTitle2.length;
    var inTitle = thisStruct.battery.title;
    var inTitle2 = thisStruct.battery.timing;
    if(inTitle > outTitle || inTitle2 > outTitle2) /*more much line*/{
        console.log('waiting for another time');
    }
    for(let b = 0; b < outTitleLength; b++){
        outTitle[b].innerHTML = inTitle[b];
    }
    for(let c = 0; c < outTitle2Length; c++){
        outTitle2[c].innerText = inTitle2[c];
    }
}
function ChangePhoneName(index, name){
    var nameFieldShow = document.querySelectorAll('.block__wrap')[index].querySelector('h2');
    nameFieldShow.innerHTML = name;
}


for(let a = 0; a < phoneSelected.length; a++){
    phoneSelected[a].onchange = function(e) {
        var z = e.target.value.split('-');
        index = a;
        var name = z[3];
        var thisStruct = checkNameToStructOut(name, Phone1);
        ChangeImg(index, thisStruct);
        ChangeImgColorIcon(thisStruct, index);
        ChangeStatusProduct(index, thisStruct);
        ChangeQuickLookInfo(index, thisStruct);
        ChangeVersionInfo(index, thisStruct);
        ChangeDisplayInfor(index, thisStruct);
        ChangeSizeInfor(index, thisStruct);
        ChangeCpuInfor(index, thisStruct);
        ChangeCameraInfor(index, thisStruct);
        ChangeConnectInfor(index, thisStruct);
        ChangeBatteryInfor(index, thisStruct);
        ChangePhoneName(index, name);
        compareColorSelected();
    };
    var x = document.querySelectorAll('.status-col-product');
    
}

function compareColorSelected(){
    var colorTab = document.querySelectorAll('.compare-in4__select__color-phone');
    var arr = [];
    for(var i = 0; i < colorTab.length; i++){
        var colorList = colorTab[i].children;
        var colorListLength = colorList.length;
        /**/
        var count = 0;
        for(var j = 0; j < colorListLength; j++){
            /*children 0 vi selector ALL*/
            if(colorList[j].children[0].hasAttribute('src')) count++;
        }
        arr += count;
    }
    for(var x = 0; x < arr.length; x++){ 
        if(arr[x] > arr[x + 1]){
            var Span = createTickYes();
            colorTab[x].parentElement.appendChild(Span);
        }else if(arr[x] == arr[x + 1]){
            var Span = createTickSame();
            colorTab[x].parentElement.appendChild(Span);
        }else{
            var Span = createTickNo();
            colorTab[x].parentElement.appendChild(Span);
        }
    }
}

function createTickYes(){ 
    var Span = document.createElement('span');
    Span.classList.add('yes');
    Span.innerHTML = `Good`;
    return Span;
}
function createTickNo(){
    var Span = document.createElement('span');
    Span.classList.add('no');
    Span.innerHTML = `Not good`;
    return Span;
}
function createTickSame(){
    var Span = document.createElement('span');
    Span.classList.add('same');
    Span.innerHTML = `Same`;
    return Span;
}

