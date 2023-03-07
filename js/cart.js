

const Cart = function(){

    function showAndHideModalCart(){
        var cartBtn = document.querySelector('.cart');
        var cartModal = document.querySelector('.modal-cart__wrap');
        var backBtn = document.querySelectorAll('.nav__back-page-cta');
        cartBtn.addEventListener('click', function(){
            // get value quantity on cart icon 
            var valueQuantityCart = 
            document.querySelector('.cart').querySelector('.quantity-cart').value;
            // check
            if(valueQuantityCart > 0){
                updateTotalPrice();
                DeleteButtonItemInCartModal();
            }
            setTimeout(() => {
                cartModal.classList.add('show'); 
                document.querySelector('body').classList.add('overflow');
            }, 150);
            showModalWhenOutSource();


            /*CASE: APPLY THIS CODE WHEN QUANTITY >= 1 SOURCE CODE RIGHT THIS BELOW - fixed*/


            const activeDiscount = function(){
                var nameItems =  document.querySelectorAll('.in4-part__text h3');
                var priceField = document.querySelectorAll('.price-part__price .price-part__price-title');
                var priceReducedField = document.querySelectorAll('.price-part__price .price-part__small');
                var discountBtn = document.querySelector('.discount__btn');
                var cartFieldItem = document.querySelectorAll('.detail__phone-wrap');
                discountBtn.addEventListener('click', showDiscountField);
            
                function showDiscountField(){
                    var discountField = document.querySelector('.discount__input-field');
                    discountField.classList.toggle('show');
                    if(discountField.classList.contains('show')){
                        var discountValue = document.querySelector('.discount__input input');
                        var applyDiscountButton = document.querySelector('.discount__btn button');
                        function activeDiscountCode(value, PhoneList){
                            if(value.value.length >= 6){
                                applyDiscountButton.disabled = false;
                                applyDiscountButton.onclick = function(){
                                    applyCode();
                                    updateTotalPrice();
                                }
                                function applyCode(){
                                    for(var j = 0; j < nameItems.length; j++){
                                        for(var i = 0; i < PhoneList.length; i++){
                                            var discountCodeChecked = PhoneList[i].discountCode;
                                            if( discountCodeChecked.status && ( discountCodeChecked.code == value.value ) && (
                                                nameItems[j].innerText == PhoneList[i].name )){
                                                    /*get field*/
                                                    var quantityInput = getQuantityInputField(cartFieldItem[j]);
                                                    var priceDiscount = formatCurrentVND(PhoneList[i].getDiscountCodePrice() * quantityInput.value);
                                                    var priceReducedDiscount = formatDiscountCurrentVND(PhoneList[i].getDiscountCodeReducedPrice() * quantityInput.value);
                                                    var thisPriceField = priceField[j];
                                                    var thisPriceField2 = priceReducedField[j];
                                                    /*output this*/
                                                    thisPriceField.innerHTML = priceDiscount;
                                                    thisPriceField2.innerHTML = priceReducedDiscount;
                                                    /*update inc dec button, get info*/
                                                    var increaseButton = getIncreaseButtonField(cartFieldItem[j]);
                                                    var decreaseButton = getDecreaseButtonField(cartFieldItem[j]);
                                                    var priceFieldShow = getPriceFieldShow(cartFieldItem[j]);
                                                    var reducedPriceField = getPriceReducedFieldShow(cartFieldItem[j]);
                                                    var getThisName = getNameItem(cartFieldItem[j]);
                                                    var ThisStruct = getStruct(getThisName, PhoneList);
                                                    /*update get this price to pass in func when I apply code*/ 
                                                    var thisCurrentPrice = ThisStruct.getDiscountCodePrice();
                                                    var thisReducedPrice = ThisStruct.getDiscountCodeReducedPrice();
                                                    /*update inc dec into button which is applied code*/
                                                    decreaseQuantityProduct(quantityInput, decreaseButton, cartFieldItem[j].parentElement, thisCurrentPrice, thisReducedPrice, priceFieldShow, reducedPriceField);
                                                    increaseQuantityProduct(quantityInput, increaseButton, thisCurrentPrice, thisReducedPrice, priceFieldShow, reducedPriceField);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        discountValue.onkeyup= function(){
                            activeDiscountCode(discountValue ,PhoneList);
                        }
                    }
                }
            };
            inputButtonCart();
            activeDiscount();
        })
        /*back-btn*/
        for(let a = 0; a < backBtn.length; a++){
            backBtn[a].addEventListener('click', (e) => {
                setTimeout(() => {
                    cartModal.classList.remove('show'); 
                    document.querySelector('body').classList.remove('overflow');
                }, 150);
            });
        }
    }
    
    
    showAndHideModalCart();

        
    const PhoneList = [
        {
            name: 'Alo 2',
            price: 43000000,
            color: 'Màu A',
            version: '64&nbspGB',
            source: './img/Phone/icon-color/phone3/phone2.jpg',
            sale: {
                status: true,
                discount: 10,
            },
            discountCode:{
                status: true,
                code:'MINH KHONG DEP TRAI',
                discount: 10,
                getIt: function(){
                    return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.price : 0;
                },
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Giao hàng 24/7',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 2B',
            price: 43000000,
            color: 'Màu B',
            version: '128&nbspGB',
            source: './img/Phone/icon-color/phone3/phone2-1.jpg',
            sale: {
                status: true,
                discount: 10,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 5,
                getIt: function(){
                    return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.price : 0;
                },
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Giao hàng 24/7',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 2 Plus',
            price: 30000000,
            color: 'Màu A',
            version: '64&nbspGB',
            source: './img/Phone/icon-color/phone3/phone2.jpg',
            sale: {
                status: true,
                discount: 5,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 7,
                getIt: function(){
                    return this.status ? ((100 - this.discount)/100) * this.price : 0;
                },
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Khu vực miền nam giao hàng chậm hơn dự kiến',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 2 Plus+',
            price: 30000000,
            color: 'Màu A',
            version: '64&nbspGB',
            source: './img/Phone/icon-color/phone3/phone2-1.jpg',
            sale: {
                status: true,
                discount: 5,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
                getIt: function(){
                    return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.price : 0;
                },
            },
            shipNote: 'Khu vực miền nam giao hàng chậm hơn dự kiến',
            getImgSource: function(){
                return this.source;
            },
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 2 CE',
            price: 39000000,
            color: 'Màu A',
            version: '64&nbspGB',
            source: './img/Phone/icon-color/phone3/phone2.jpg',
            sale: {
                status: true,
                discount: 7,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
                getIt: function(){
                    return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.price : 0;
                },
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Dịch Covid nên giao hàng chậm hơn dự kiến',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 2 CEB',
            price: 39000000,
            color: 'Màu A',
            version: '64&nbspGB',
            source: './img/Phone/icon-color/phone3/phone2-1.jpg',
            sale: {
                status: true,
                discount: 7,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
                getIt: function(){
                    return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.price : 0;
                },
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Dịch Covid nên giao hàng chậm hơn dự kiến',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 3',
            price: 57000000,
            color: 'Màu B',
            version: '64&nbspGB',
            source: './img/Phone/icon-color/phone3/phone3.jpg',
            sale: {
                status: true,
                discount: 5,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscountCodePrice: function(){
                return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.getSalePrice() : this.getSalePrice();
            },
            getDiscountCodeReducedPrice: function(){
                return this.discountCode.status ? (this.getSalePrice() - this.getDiscountCodePrice()) + this.getReducedPrice(): this.getReducedPrice();
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Khu vực miền nam giao hàng chậm hơn dự kiến',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 3B',
            price: 57000000,
            color: 'Màu B',
            version: '64&nbspGB',
            source: './img/Phone/icon-color/phone3/phone3-1.jpg',
            sale: {
                status: false,
                discount: 0,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscountCodePrice: function(){
                return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.getSalePrice() : this.getSalePrice();
            },
            getDiscountCodeReducedPrice: function(){
                return this.discountCode.status ? (this.getSalePrice() - this.getDiscountCodePrice()) + this.getReducedPrice(): this.getReducedPrice();
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Khu vực miền nam giao hàng chậm hơn dự kiến',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 3C',
            price: 57000000,
            color: 'Màu B',
            version: '64&nbspGB',
            source: './img/Phone/icon-color/phone3/phone3-2.jpg',
            sale: {
                status: false,
                discount: 0,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscountCodePrice: function(){
                return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.getSalePrice() : this.getSalePrice();
            },
            getDiscountCodeReducedPrice: function(){
                return this.discountCode.status ? (this.getSalePrice() - this.getDiscountCodePrice()) + this.getReducedPrice(): this.getReducedPrice();
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Khu vực miền nam giao hàng chậm hơn dự kiến',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 4',
            price: 49000000,
            color: 'Màu A',
            version: '32&nbspGB',
            source: './img/Phone/icon-color/phone3/phone4.jpg',
            sale: {
                status: false,
                discount: 0,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscountCodePrice: function(){
                return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.getSalePrice() : this.getSalePrice();
            },
            getDiscountCodeReducedPrice: function(){
                return this.discountCode.status ? (this.getSalePrice() - this.getDiscountCodePrice()) + this.getReducedPrice(): this.getReducedPrice();
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Khu vực miền nam giao hàng chậm hơn dự kiến',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 4B',
            price: 49000000,
            color: 'Màu A',
            version: '32&nbspGB',
            source: './img/Phone/icon-color/phone3/phone4-1.jpg',
            sale: {
                status: false,
                discount: 0,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscountCodePrice: function(){
                return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.getSalePrice() : this.getSalePrice();
            },
            getDiscountCodeReducedPrice: function(){
                return this.discountCode.status ? (this.getSalePrice() - this.getDiscountCodePrice()) + this.getReducedPrice(): this.getReducedPrice();
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Khu vực miền nam giao hàng chậm hơn dự kiến',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 4C',
            price: 49000000,
            color: 'Màu A',
            version: '32&nbspGB',
            source: './img/Phone/icon-color/phone3/phone4-2.jpg',
            sale: {
                status: false,
                discount: 0,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscountCodePrice: function(){
                return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.getSalePrice() : this.getSalePrice();
            },
            getDiscountCodeReducedPrice: function(){
                return this.discountCode.status ? (this.getSalePrice() - this.getDiscountCodePrice()) + this.getReducedPrice(): this.getReducedPrice();
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Khu vực miền nam giao hàng chậm hơn dự kiến',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 4M',
            price: 50000000,
            color: 'Màu A',
            version: '32&nbspGB',
            source: './img/Phone/icon-color/phone3/phone4.jpg',
            sale: {
                status: false,
                discount: 0,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscountCodePrice: function(){
                return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.getSalePrice() : this.getSalePrice();
            },
            getDiscountCodeReducedPrice: function(){
                return this.discountCode.status ? (this.getSalePrice() - this.getDiscountCodePrice()) + this.getReducedPrice(): this.getReducedPrice();
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Khu vực miền nam giao hàng chậm hơn dự kiến',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 4MB',
            price: 50000000,
            color: 'Màu A',
            version: '32&nbspGB',
            source: './img/Phone/icon-color/phone3/phone4-1.jpg',
            sale: {
                status: false,
                discount: 0,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscountCodePrice: function(){
                return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.getSalePrice() : this.getSalePrice();
            },
            getDiscountCodeReducedPrice: function(){
                return this.discountCode.status ? (this.getSalePrice() - this.getDiscountCodePrice()) + this.getReducedPrice(): this.getReducedPrice();
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Khu vực miền nam giao hàng chậm hơn dự kiến',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 4MC',
            price: 50000000,
            color: 'Màu A',
            version: '32&nbspGB',
            source: './img/Phone/icon-color/phone3/phone4-2.jpg',
            sale: {
                status: false,
                discount: 0,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscountCodePrice: function(){
                return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.getSalePrice() : this.getSalePrice();
            },
            getDiscountCodeReducedPrice: function(){
                return this.discountCode.status ? (this.getSalePrice() - this.getDiscountCodePrice()) + this.getReducedPrice(): this.getReducedPrice();
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Khu vực miền nam giao hàng chậm hơn dự kiến',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 5',
            price: 60000000,
            color: 'Màu A',
            version: '64&nbspGB',
            source: './img/Phone/icon-color/phone3/phone5.jpg',
            sale: {
                status: false,
                discount: 0,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscountCodePrice: function(){
                return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.getSalePrice() : this.getSalePrice();
            },
            getDiscountCodeReducedPrice: function(){
                return this.discountCode.status ? (this.getSalePrice() - this.getDiscountCodePrice()) + this.getReducedPrice(): this.getReducedPrice();
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Khu vực miền nam giao hàng chậm hơn dự kiến',  
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 5E',
            price: 32000000,
            color: 'Màu A',
            version: '64&nbspGB',
            source: './img/Phone/icon-color/phone3/phone5.jpg',
            sale: {
                status: false,
                discount: 0,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscountCodePrice: function(){
                return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.getSalePrice() : this.getSalePrice();
            },
            getDiscountCodeReducedPrice: function(){
                return this.discountCode.status ? (this.getSalePrice() - this.getDiscountCodePrice()) + this.getReducedPrice(): this.getReducedPrice();
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Khu vực miền nam giao hàng chậm hơn dự kiến',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },
        {
            name: 'Alo 6',
            price: 11000000,
            color: 'Màu A',
            version: '256&nbspGB',
            source: './img/Phone/icon-color/phone3/phone6.jpg',
            sale: {
                status: false,
                discount: 0,
            },
            discountCode:{
                status: true,
                code:'MINH DEP TRAI',
                discount: 10,
            },
            getImgSource: function(){
                return this.source;
            },
            getDiscountCodePrice: function(){
                return this.discountCode.status ? ((100 - this.discountCode.discount)/100) * this.getSalePrice() : this.getSalePrice();
            },
            getDiscountCodeReducedPrice: function(){
                return this.discountCode.status ? (this.getSalePrice() - this.getDiscountCodePrice()) + this.getReducedPrice(): this.getReducedPrice();
            },
            getDiscount: function(){
                return this.discountCode.status ? discount : 0;
            },
            shipNote: 'Giao hàng 24/7',
            getPrice: function(){
                return this.price;
            },
            getColor: function(){
                return this.color;
            },
            getVersion: function(){
                return this.version;
            },
            getShipNoteInfo: function(){
                return this.shipNote;
            },
            getSalePrice: function(){
                return this.sale.status ? ((100 - this.sale.discount)/100) * this.price : this.getPrice();
            },
            getReducedPrice: function(){
                return this.price - this.getSalePrice();
            }
        },

    ];

    function buttonAddItemToCartModal(){
        var buyButton = document.querySelectorAll('.buy-btn');
        for(var x = 0; x < buyButton.length; x++){
            buyButton[x].onclick = (e) => {
                // prevent href attribute of a tag
                e.preventDefault();
                increaseQuantityOnCartIcon(e);
                //e.currentTarget == this | e.target la dich cuoi cung cua node khi duoc click
                // vi du trong truong hop nay la span
                var infoPhone = e.target.parentElement.parentElement.parentElement;
                var namePhone = e.currentTarget.getAttribute('data-name');
                /*get others from struct by namePhone*/
                var struct = getStruct(namePhone, PhoneList);
                var img = struct.getImgSource();
                console.log(img);
                var price = struct.getPrice();
                var color = struct.getColor();
                var ver = struct.getVersion();
                var shipNote = struct.getShipNoteInfo();
                var salePriceReduced = 0;
                var priceAfterSale = 0;
                if(struct.sale.status){
                    priceAfterSale = struct.getSalePrice();
                    // var currentPriceFormat = formatCurrentVND(priceAfterSale);
                    salePriceReduced = struct.getReducedPrice();
                    addToCart(namePhone, img, priceAfterSale, color, ver, shipNote, infoPhone, salePriceReduced);
                }else{
                    addToCart(namePhone, img, price, color, ver, shipNote, infoPhone, salePriceReduced);
                }
                showModalWhenOutSource();
            };

    }
    }

    buttonAddItemToCartModal();

    function clickButtonShowAllProduct(){
        var button = document.querySelector('.btn__detail-more');
        var cartField = document.querySelector('.detail__phone-container');
        var note = 'Thu gọn';
        var note2 = 'Xem Tất cả';
        button.onclick = function(){
            if(cartField.classList.contains('show')){
                cartField.classList.remove('show');
                /*hieu ung lag*/
                setTimeout(() => {
                    button.innerHTML = note2;
                }, 300);
            }else{
                cartField.classList.add('show');
                button.innerHTML = note;
            }
        }
    }
    function hideBtnShowAllProduct() {
        var productCartRow = document.getElementsByClassName('detail__phone-wrap');
        var buttonWrap = document.querySelector('.btn__detail-more-wrap');
        if(buttonWrap.classList.contains('show')){
            buttonWrap.classList.remove('show');
        }
    }
    function showBtnShowAllProduct() {
        var productCartRow = document.getElementsByClassName('detail__phone-wrap');
        var buttonWrap = document.querySelector('.btn__detail-more-wrap');
        if(!buttonWrap.classList.contains('show')){
            buttonWrap.classList.add('show');
        }
    }

    /*============================================================*/
    function DeleteButtonItemInCartModal() {
        var productCartRow = document.querySelectorAll('.detail__phone-wrap');
        var productLength =productCartRow.length;
        for(var i = 0; i < productLength; i++){
            var deleteButton = productCartRow[i]
            .querySelector('.phone__price-part .price-part__price .price-part__cta a');
            deleteButton.onclick = (e) => {
                e.preventDefault();
                var getCurrentQuantity = e.target.parentElement.parentElement.previousElementSibling.children[0].children[1].children[0].value;
                if(getCurrentQuantity >= 2){
                    for(var i = 0; i < getCurrentQuantity; i++){
                        decreaseQuantityOnCartIcon();
                    }
                }
                /*not else cuz decreaseQuantityOnCartIcon() executed in confirmShow() function
                . I did it cuz it relate to decreaseButton when the value equal 0, confirm showed click to remove and decrease*/
                var cartItem = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
                
                confirmShow(cartItem);
            }
        };
    }
            function confirmShow(cartItem) {
                    var modal = createDeleteModal();
                    document.querySelector('body').appendChild(modal);
                    activeConfirmButton(cartItem, modal);
                    activeCancelButton(modal);
                    activeExitButton(modal);
                }

                function createDeleteModal(){
                    var div = document.createElement('div');
                    div.classList.add('delete-modal__wrap');
                    div.innerHTML = `<div class="delete-modal">
                    <div class="del-modal__exit-btn"><i class="fa fa-times"></i></div>
                    <div class="del-modal__title">
                        <h2>Bạn có chắc chắc muốn xóa không</h2>
                        <p>Bạn có thể thanh toán rồi xóa cũng được ! 🙄</p>
                    </div>
                    <div class="del-modal__btn">
                        <button class="del-md__cancel-btn">Trở lại</button>
                        <button class="del-md__delete-btn">Xóa</button>
                    </div>
                                    </div>`;
                    return div;
                }

                function activeConfirmButton(cartItem, modal) {
                    var confirmBtn = document.querySelector('.del-md__delete-btn');
                    confirmBtn.onclick = () => {
                        Fly(modal);
                        deleteCartItem(cartItem);
                    };
                    function Fly(modal) {
                        modal.remove();
                    }
                    function deleteCartItem(cartItem) {
                        cartItem.remove();
                        decreaseQuantityOnCartIcon();
                        updateTotalPrice();
                        var currentProductCartLength = document.querySelectorAll('.detail__phone-wrap').length;
                        if(currentProductCartLength == 1){
                            hideBtnShowAllProduct();
                        }
                        showModalWhenOutSource();
                    }
                }
                function activeCancelButton(modal) {
                    var cancelButton = document.querySelector('.del-md__cancel-btn');
                    cancelButton.onclick = Chill;
                    function Chill() {
                        modal.remove();
                    }
                }
                function activeExitButton(modal) {
                    var exitButton = document.querySelector('.del-modal__exit-btn i');
                    exitButton.onclick = Feel;
                    function Feel() {
                        modal.remove();
                    }
                }
    
    function updateTotalPrice(){
        var allItem = document.querySelectorAll('.detail__phone-wrap');
        var allItemLength = allItem.length;
        var total = 0;
        var totalField = document.querySelector('.before-price');
        var totalAfterFax = document.querySelector('.after-price');
        var faxPrice = document.querySelectorAll('.fax-price');
        /*if out source item set all == 0*/
        if(allItemLength == 0){
            totalField.innerHTML = formatCurrentVND(0);
            /*I'll define calc this cuz Idunno the cong thuc*/
            totalAfterFax.innerHTML = formatCurrentVND(0);
            for(var i = 0; i <faxPrice.length; i++){
                faxPrice[i].innerHTML = formatCurrentVND(0);
            }
        }
        /*cacl*/
        for(var i = 0; i < allItemLength; i++){
            var thisItem = allItem[i];
            var priceInput = getPriceFieldShow(thisItem).innerHTML;
            var price = formatNumberFromPriceFormat(priceInput);
            // var quantity = getQuantityInputField(thisItem).value;
            // console.log(price);
            // console.log(quantity);
            total += (price);
        }

        /*output*/
        totalField.innerHTML = formatCurrentVND(total);
        /*I'll define calc this cuz Idunno the cong thuc*/
        totalAfterFax.innerHTML = formatCurrentVND(total - 7000000);
        for(var i = 0; i <faxPrice.length; i++){
            faxPrice[i].innerHTML = formatCurrentVND(7000000);
        }
    }

    function showModalWhenOutSource() {
        var productCartRow2 = document.getElementsByClassName('detail__phone-wrap');
        var modalToShow = document.querySelector('.detail__note-out-source');
        var productLength =productCartRow2.length;
        if(productLength >= 1){
            modalToShow.classList.remove('show');
        }else{
            modalToShow.classList.add('show');
        }
    }
    function addToCart(name, img, price, color, ver, shipNote, infoPhone, salePrice){
        /*get items in modalCart*/
        var productCartRow = document.getElementsByClassName('detail__phone-wrap');
        var productLength =productCartRow.length;
        /*exist-product check condition*/
        if(productLength > 0){
            for(var i = 0; i < productCartRow.length; i++){
                /*get all name in all item to check if sameItem I'll update value*/
                var thisName = productCartRow[i].getElementsByClassName('in4-part__text')[0].getElementsByTagName('h3')[0].innerText;
                if(name == thisName){
                    var quantityInput = productCartRow[i]
                    .querySelector('.phone__price-part .price-part__cta .btn__inc-dec span input');
                    /*update input*/
                    quantityInput.value = parseInt(quantityInput.value) + 1;
                    var time = quantityInput.value;
                    /*set Attribute de ham inc dec thuc hien tinh toan gia ca*/
                    quantityInput.setAttribute('value', time);
                    /*update price*/
                    outPriceProduct(productCartRow[i], time, price);
                    outPriceReducedProduct(productCartRow[i], time, salePrice);
                    /*return to avoid same node appended*/  
                    return;
                }
            }
        }
        /*Check to show button for show aLL that product */
        if (productLength >= 1){
            showBtnShowAllProduct();
            clickButtonShowAllProduct();
        }else{
            hideBtnShowAllProduct();
        }
        var cartFieldWrap = document.querySelector('.detail__phone-container');
        var NewCartField = createNewNode(name, img, price, color, ver, shipNote, salePrice);
        cartFieldWrap.prepend(NewCartField);
    }
    function inputButtonCart(){
        var productCartRow = document.querySelectorAll('.detail__phone-wrap');
        var productLength =productCartRow.length;
        for(var i = 0; i < productCartRow.length; i++){
            var quantityInput = getQuantityInputField(productCartRow[i]);
                                
            var increaseButton = getIncreaseButtonField(productCartRow[i]);
            var decreaseButton = getDecreaseButtonField(productCartRow[i]);
            var priceFieldShow = getPriceFieldShow(productCartRow[i]);       
            var reducedPriceField = getPriceReducedFieldShow(productCartRow[i]);

            var getThisName = getNameItem(productCartRow[i]);
            var ThisStruct = getStruct(getThisName, PhoneList);
            var thisCurrentPrice = ThisStruct.getSalePrice();
            var thisReducedPrice = ThisStruct.getReducedPrice();
            decreaseQuantityProduct(quantityInput, decreaseButton, productCartRow[i].parentElement, thisCurrentPrice, thisReducedPrice, priceFieldShow, reducedPriceField);
            increaseQuantityProduct(quantityInput, increaseButton, thisCurrentPrice, thisReducedPrice, priceFieldShow, reducedPriceField);
        }
    }
        function increaseQuantityProduct(quantityInput, increaseButton, thisCurrentPrice, thisReducedPrice, priceFieldShow, reducedPriceField){
            /*update-total*/
            increaseButton.onclick = increaseQuantity;
            function increaseQuantity(e){
                increaseQuantityOnCartIcon();
                quantityInput.value = parseInt(quantityInput.value) + 1;
                increasePrice(quantityInput.value, e, thisCurrentPrice, priceFieldShow);
                updateTotalPrice();
                increaseSalePriceReduced(quantityInput.value, e, thisReducedPrice, reducedPriceField);
            }
            function increasePrice(value, e, thisCurrentPrice, priceFieldShow){
                // var priceField = '50.000.000&nbsp;₫';
                // var m = parseInt(getThisPrice.innerHTML.replace(/[.]+/g, "").replace('&nbsp;₫', ""));
                var total = thisCurrentPrice*value;
                var formatVND = formatCurrentVND(total);
                priceFieldShow.innerHTML = formatVND;
            }
            function increaseSalePriceReduced(value, e, thisReducedPrice, reducedPriceField){
                // var priceReducedFieldShow = e.currentTarget.parentElement.parentElement.nextElementSibling
                // .children[1];
                var reducedPriceTotal = thisReducedPrice * value;
                var formatVND = formatDiscountCurrentVND(reducedPriceTotal);
                reducedPriceField.innerHTML = formatVND;
            }
        }

        function decreaseQuantityProduct(quantityInput, decreaseButton, item, thisCurrentPrice, thisReducedPrice, priceFieldShow, reducedPriceField){
            /*update-total*/
            decreaseButton.onclick = decreaseQuantity;
            function decreaseQuantity(e){
                quantityInput.value = parseInt(quantityInput.value) - 1;
                if(quantityInput.value == 0) {
                    quantityInput.value = 1;
                    confirmShow(item);
                }else{
                    decreasePrice(e,thisCurrentPrice, priceFieldShow);
                    updateTotalPrice();
                    decreasePriceReduced(e, thisReducedPrice, reducedPriceField);
                    decreaseQuantityOnCartIcon();
                }
            }
            function decreasePrice(e, thisCurrentPrice, priceFieldShow){
                // var currentPrice = e.currentTarget.parentElement.parentElement.nextElementSibling
                // .children[0];
                // console.log(currentPrice);
                var m = formatNumberFromPriceFormat(priceFieldShow.innerHTML);
                var total = m - thisCurrentPrice;
                var formatVND = formatCurrentVND(total);
                priceFieldShow.innerHTML = formatVND;
            }
            function decreasePriceReduced(e, thisReducedPrice, reducedPriceField){
                // var priceReducedFieldShow = e.currentTarget.parentElement.parentElement.nextElementSibling
                // .children[1];
                var m = formatNumberFromPriceFormat(reducedPriceField.innerHTML);
                var resultReduced = m - thisReducedPrice;
                var formatVND = formatDiscountCurrentVND(resultReduced);
                reducedPriceField.innerHTML = formatVND;
            }
        }

            function getQuantityInputField(cartRowItem){
                return cartRowItem.querySelector('.phone__price-part .price-part__cta .btn__inc-dec span input');
            }
            function getIncreaseButtonField(cartRowItem){
                return cartRowItem.querySelector('.phone__price-part .price-part__cta .btn__inc-dec .dec');
            }
            function getDecreaseButtonField(cartRowItem){
                return cartRowItem.querySelector('.phone__price-part .price-part__cta .btn__inc-dec .inc');
            }
            function getPriceFieldShow(cartRowItem){
                return cartRowItem.querySelector('.phone__price-part .price-part__price span.price-part__price-title');
            }
            function getPriceReducedFieldShow(cartRowItem){
                return cartRowItem.querySelector('.phone__price-part .price-part__price span.price-part__small');
            }
            function getNameItem(cartRowItem){
                return cartRowItem.querySelector('.phone__in4-part .in4-part__text h3').innerText;
            }

    /*===========================*/
        
        function formatCurrentVND(price){
            return (price.toString()).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '&nbsp;₫';
        }
        function formatNumberFromPriceFormat(price){
            return parseInt(price.replace(/[. -]/g, "").replace('&nbsp;₫', ""));
        }
        function formatDiscountCurrentVND(price){
            return '- ' + (price.toString()).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '&nbsp;₫';
        }
        function outPriceProduct(productCartRow, time, price){
            var priceField = productCartRow.getElementsByClassName('price-part__price')[0].querySelector('span');
            var total = (price * time);
            var priceCurrencyFormat = formatCurrentVND(total);
            /*innerHTML for set unicode*/
            priceField.innerHTML = priceCurrencyFormat;
        }
        function outPriceReducedProduct(productCartRow, time, salePrice){
            var priceField = productCartRow.getElementsByClassName('price-part__price')[0].querySelector('.price-part__small');
            var total = (salePrice * time);
            var priceCurrencyFormat = formatCurrentVND(total);
            /*innerHTML for set unicode*/
            priceField.innerHTML = priceCurrencyFormat;
        }
            // replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        /*=============================================*/

            function createNewNode(name, img, price, color, ver, shipNote, salePrice){
                var node = document.createElement('div');
                node.classList.add('detail__phone');
                node.innerHTML = 
                `<div class="detail__phone-wrap">   
                <div class="phone__in4-part">
                    <div class="in4-part__img">
                        <img src="${img}" alt="">
                    </div>
                    <div class="in4-part__text">
                        <h3>${name}</h3>
                        <span>${color}, ${ver}</span>
                        <div>DRQ241</div>
                    </div>
                </div>
                <div class="phone__price-part">
                    <div class="price-part__cta">
                        <div class="cta__inc-dec btn__inc-dec">
                            <div class="cta__inc inc"><span>&minus;</span></div>
                            <span><input class="input-field" type="number" id="cur-num" value="1" placeholder="1" step="1"></span>
                            <div class="cta__dec dec"><span>&plus;</span></div>
                        </div>
                    </div>
                    <div class="price-part__price">
                        <span class="price-part__price-title">${formatCurrentVND(price)}
                        </span>
                        <span class="price-part__small">
                            ${salePrice == formatDiscountCurrentVND(0) ? 0 :formatDiscountCurrentVND(salePrice)}
                        </span>
                        <div class="price-part__note">
                            ${salePrice == 0 ? 'Chưa Giảm Giá' : 'Đã Giảm Giá'}
                        </div>
                        <div class="price-part__cta">
                            <a href="delete">Xóa</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail__phone-notification">
                <span>${shipNote}</span>
                </div>`;
                return node;
            }
            function increaseQuantityOnCartIcon(){
                var cartButton = document.querySelector('.cart');
                var currentQuantity = cartButton.querySelector('.quantity-cart');
                currentQuantity.value = parseInt(currentQuantity.value) + 1;
            }
            function decreaseQuantityOnCartIcon() {
                var cartButton = document.querySelector('.cart');
                var currentQuantity = cartButton.querySelector('.quantity-cart');
                currentQuantity.value = parseInt(currentQuantity.value) - 1;
                if(currentQuantity.value < 0){currentQuantity.value = 0;}
            }
            function getStruct(name, PhoneList){
                for(var i = 0; i < PhoneList.length; i++){
                    if(PhoneList[i].name == name){
                        return PhoneList[i];
                    }
                }
            }
    
    /*==================================*/


    



    /*====================================*/        
    
    
            /*SWAP IMG.js before I have to sub this func right there in this to do smt*/

            function overImgInCardProduct(length, button){
                var a = 0;
                while(a < length){
                    var b = a;
                    var imgBtn = button[a].children;
                    var imgBtnLength = button[a].children.length;
                    var c = 0;
                    while(c < imgBtnLength){
                        imgBtn[c].addEventListener('mouseover', (e)=>{
                            changeName(e);
                        });
                        c++;
                    }
                    a++;
                }
            }

            /*****************************************/
            /*This return a name to compare which is a condition that I need to define addCart function */
                function changeName(e){
                    var name = e.target.getAttribute('data-name');
                    var titleToShow = e.target.parentElement.parentElement.parentElement.nextElementSibling.children[1].children[0];
                    var updateDataName = e.target.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1];
                    updateDataName.setAttribute('data-name', name);
                    titleToShow.innerText = name;
                }
                var cardImgBtn = document.querySelectorAll('.items-color_wrap');
                var cardLength = cardImgBtn.length;
                overImgInCardProduct(cardLength, cardImgBtn);


            /*****************************************/
};

Cart();





function LikeButton(){
    var LikeButton = document.querySelector('.cta__like');
    var time = 0;
    LikeButton.onclick = function(){
        time = time + 1;
        if(time > 3 && time <= 4){
            alert('yêu nhiều quá cám ơn, nhưng tôi không thích');
            setTimeout(() => {
                alert('Tôi giận rồi hủy nút yêu');
            }, 300);
            hideLove();
            hideModalThanks();
        }else if(time >= 5){
            alert('Chia tay !');
        }else if (time <= 3){
            showLove();
            setTimeout(() => {
                showModalThanks();
            }, 300);
        }
    };
    function hideLove(){
        var loveIcon = LikeButton.querySelector('i');
        if(loveIcon.classList.contains('fa')){
            loveIcon.className = "far fa-heart";}
    }
    function showLove(){
        var loveIcon = LikeButton.querySelector('i');
        if(!loveIcon.classList.contains('fa')){
            loveIcon.className = "fa fa-heart";}
    }
    function showModalThanks(){
        var thanksModal = createThanksModal();
        var body = document.querySelector('body');
        body.appendChild(thanksModal);
        activeClick();
        function activeClick(){
            var exitButton = document.querySelectorAll('.md-thanks__exit-btn');
            for(var i = 0; i < exitButton.length; i++){
                exitButton[i].onclick = () => {
                    hideModalThanks(thanksModal);
                    
                }
            }
        }
    }       
            function createThanksModal(){
                var div = document.createElement('div');
                div.classList.add('cta__like__modal-thanks-wrap');
                div.innerHTML = `<div class="md-thanks">
                <div class="md-thanks__exit-btn"><i class="fa fa-times"></i></div>
                <div class="md-thanks__content">
                    <div class="md-ths__ctent-img">
                        <svg width="198" height="198" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="tickIcon">
                            <path id="border" d="M98.7538 197.508C153.294 197.508 197.508 153.294 197.508 98.7538C197.508 44.2136 153.294 0 98.7538 0C44.2136 0 0 44.2136 0 98.7538C0 153.294 44.2136 197.508 98.7538 197.508Z" fill="#00FFA9" fill-opacity="0.56"/>
                            <path id="bg-tick" d="M98.7538 181.049C144.204 181.049 181.049 144.204 181.049 98.7538C181.049 53.3036 144.204 16.459 98.7538 16.459C53.3036 16.459 16.459 53.3036 16.459 98.7538C16.459 144.204 53.3036 181.049 98.7538 181.049Z" fill="#00FFA9"/>
                            <path id="tick" d="M84.6395 131.977C84.479 131.977 84.3183 131.973 84.1574 131.966C82.7373 131.897 81.3488 131.522 80.0871 130.867C78.8255 130.211 77.7205 129.291 76.8481 128.168L63.0742 110.459C61.4704 108.392 60.7519 105.773 61.0763 103.177C61.4007 100.581 62.7415 98.22 64.8047 96.6114L65.3001 96.2257C67.3672 94.6219 69.986 93.9035 72.582 94.2279C75.1781 94.5523 77.5395 95.893 79.1484 97.9561C79.9247 98.9543 80.9075 99.7729 82.0295 100.356C83.1516 100.939 84.3864 101.273 85.6494 101.334C86.9124 101.396 88.1738 101.184 89.3472 100.713C90.5207 100.242 91.5784 99.5224 92.4481 98.6045L120.416 69.0814C121.307 68.1406 122.375 67.3846 123.559 66.8565C124.742 66.3284 126.018 66.0386 127.313 66.0036C128.609 65.9686 129.899 66.1891 131.109 66.6526C132.319 67.1161 133.426 67.8134 134.367 68.7048L134.823 69.1374C136.723 70.9373 137.83 73.4181 137.901 76.0342C137.971 78.6502 137 81.1872 135.2 83.087L91.8009 128.896C90.8795 129.869 89.7692 130.645 88.5379 131.175C87.3065 131.705 85.98 131.978 84.6395 131.977V131.977Z" fill="white"/>
                            </g>
                        </svg>
                    </div>
                    <div class="md-ths__ctent-text">
                        <h1>Tôi cũng yêu bạn 💖💖💖</h1>
                        <p>Cám ơn bạn đã bấm vào đây cho vui 😂</p>
                    </div>
                    <div class="md-ths__ctent-btn">
                        <button class="md-thanks__exit-btn">
                            Tiếp Tục
                        </button>
                    </div>
                </div>
                                </div>`;
                return div;
            }

    function hideModalThanks(thanksModal){
        thanksModal.remove();
    }
    
}
LikeButton();


function showPaymentField(){
    var buttonToShow = document.querySelectorAll('.cta-buy__btn button')[1];
    buttonToShow.onclick = function(e){
        var TotalPrice = document.querySelector('.after-price').innerHTML;
        show(TotalPrice);
        tabPayment();
        activeBackBtn();
        activeConfirmPayButton(TotalPrice);
    }
    function show(TotalPrice){
        var fieldToShow = document.getElementById('privacy-field').querySelector('.bag-page__privacy-wrap');
        var paymentField = createPaymentField(TotalPrice);
        fieldToShow.appendChild(paymentField);
    }
    function activeBackBtn(){
        var backBtn = document.querySelectorAll('.back-btn span');
        for(var i = 0; i < backBtn.length; i++){
            backBtn[i].onclick = (e) => {
                hide();
            };
        }
        function hide(){
            var fieldToShow = document.querySelector('.privacy__type-pay-select-wrap');
            fieldToShow.remove();
        }
    }
    function activeConfirmPayButton(TotalPrice){
        var thisButton = document.querySelectorAll('.confirm-btn button');
        var overlay2 = document.querySelector('.overlay1');
        for(var i = 0; i < thisButton.length; i++){
            thisButton[i].onclick = function(e){
                var index = e.currentTarget.getAttribute('data-index');
                var info = getInfo(index);
                showConfirmModal(index, info, TotalPrice);
                overlay2.classList.add('open');
                overlay2.style.zIndex = '100';
            };
        }
        function getInfo(index){
            /*return type in4*/
            switch(index){
                case '0':
                    return creditInfoType();
                    break;
                case '1':
                    return bankInfoType();
                    break;
                case '2':
                    return;
                    break;
            }
            function creditInfoType(){
                var infoField = document.querySelector('.credit-card-payment');
                var logoChecked = infoField.querySelectorAll('.cr-card__icon-item');
                var thisStruct = {
                    creditCardImg: '',
                    userName: '',
                    creditNumber: 0,
                };
                /*loop to get icon img source*/
                var source;
                for(var i = 0; i < logoChecked.length; i++){
                    var input = logoChecked[i].querySelector('input');
                    var labelImg = logoChecked[i].querySelector('label');
                    if(input.checked){
                        var source = labelImg.querySelector('img').src;
                    }
                }
                var thisCreditNumber = infoField.querySelector('.tp-form .num-phone > input');
                var thisUserName = infoField.querySelector('.tp-form .user-name > input');

                return thisStruct = {
                    creditCardImg: source,
                    userName: thisUserName.value,
                    creditNumber: thisCreditNumber.value,
                }
            }

            function bankInfoType(){
                var infoField = document.querySelector('.bank-payment');
                var thisStruct = {
                    bankName: '',
                    userName: '',
                    creditNumber: 0,
                };
                var thisBankName =  infoField.querySelector('.bank-pay__wrap .cr-all').children;
                var name;
                for(var i = 0; i < thisBankName.length; i++){
                    if(thisBankName[i].selected){
                        name = thisBankName[i].value;
                    }
                }
                var user = infoField.querySelector('.user-name input');
                var num = infoField.querySelector('.num-phone input');
                return thisStruct = {
                    bankName: name,
                    userName: user.value,
                    creditNumber: num.value,
                };
            }

        }
        /*set value from this*/
        function showConfirmModal(index, info, TotalPrice){
            switch(index){
                case '0':
                    modalConfirm1(index, TotalPrice);
                    break;
                case '1':
                    modalConfirm2(index, TotalPrice);
                    break;
                case '2':
                    modalConfirm3(index);
                    break;
                default:
                    break;
            }
            function modalConfirm1(index, TotalPrice){
                var thisModal = createModal1(info, TotalPrice);
                var body = document.querySelector('body');
                body.appendChild(thisModal);
                addEventClickModal(thisModal, index);

            }   
                function createModal1(info, TotalPrice){
                    var diva = document.createElement('div');
                    diva.classList.add('confirm-modal');
                    diva.innerHTML = `<div class="cf-md__img-wrap">
                    <div class="cf-md__img">
                        <img src="./img/color-span/credit-card.svg" alt="">
                        <h2 class="ab cf-md__name">${info.userName.toUpperCase()}</h2>
                        <h1 class="ab cf-md__stk">${info.creditNumber}</h1>
                        <div class="ab cf-md__logo-img-card">
                            <img src="${info.creditCardImg}" alt="">
                        </div>
                    </div>
                </div>
                <div class="confirm-sub-info">
                    <h3>Tổng cộng: <span class="total-price">${TotalPrice}</span></h3>
                    <div class="confirm-btn-modal">
                        <button class="yes-btn">Đồng ý</button>
                        <button class="no-btn">Trở lại</button>
                    </div>
                                    </div>`;
                    return diva;
                }

            function modalConfirm2(index, TotalPrice){
                var thisModal2 = createModal2(info, TotalPrice);
                var body = document.querySelector('body');
                console.log(thisModal2);
                body.appendChild(thisModal2);
                addEventClickModal(thisModal2, index);
            }
                function createModal2(info, TotalPrice){
                    var diva = document.createElement('div');
                    diva.classList.add('confirm-modal');
                    diva.innerHTML = `<div class="cf-md__img-wrap">
                    <div class="cf-md__img">
                        <img src="./img/color-span/credit-card.svg" alt="">
                        <h2 class="ab cf-md__name">${info.userName}</h2>
                        <h1 class="ab cf-md__stk">${info.creditNumber}</h1>
                        <div class="ab cf-md__logo-img-card">
                            <h3>${info.bankName}</h3>
                        </div>
                    </div>
                </div>
                <div class="confirm-sub-info">
                    <h3>Tổng cộng: <span class="total-price">${TotalPrice}</span></h3>
                    <div class="confirm-btn-modal">
                        <button class="yes-btn">Đồng ý</button>
                        <button class="no-btn">Trở lại</button>
                    </div>
                                    </div>`;
                    return diva;
                }

            function modalConfirm3(index){
                var thisI = createLoadingModal();
                var body = document.querySelector('body');
                body.appendChild(thisI);
                overlay2.classList.add('open');
                setTimeout(() => {
                    thisI.remove();
                    overlay2.classList.remove('open');
                }, 8500);
            }
            function addEventClickModal(thisModal, index){
                var confirmBtn = document.querySelector('.confirm-btn-modal .yes-btn');
                var cancelBtn = document.querySelector('.confirm-btn-modal .no-btn');
                confirmBtn.onclick = showLoadingPayment;
                    function showLoadingPayment(){
                        thisModal.remove();
                        var body = document.querySelector('body');
                        var overlay = document.querySelector('.overlay1');
                        var loadingModal = getLoadingModal(index);
                        overlay2.classList.add('open');
                        overlay2.style.zIndex = '100';
                        console.log(loadingModal);
                        body.appendChild(loadingModal);
                        setTimeout(() => {
                            loadingModal.remove();
                            overlay2.classList.remove('open');
                        }, 8500);
                    }
                cancelBtn.onclick =  removeConfirmModal;
                    function removeConfirmModal(){
                        thisModal.remove();
                        overlay2.classList.remove('open');
                    }
                
                
               
            }
            function getLoadingModal(index){
                switch(index){
                    case '0': case '1':
                        return createLoadingModal();
                        break;
                    // case '2':
                    //     return createLoadingModal2();
                    //     break;
                    default:
                        break;
                }
            }             
            function createLoadingModal(){
                var div = document.createElement('div');
                div.classList.add('loading-payment-modal');
                div.innerHTML = 
                                `<h1>Tiến hành thanh toán</h1>
                                <div class="lpm__img">
                                    <svg width="320" height="291" viewBox="0 0 320 291" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Frame 95" clip-path="url(#clip0)">
                                        <g id="credit-card-reader">
                                        <g id="card">
                                        <g id="Group">
                                        <path id="Vector" d="M140.916 81.3253L142.294 80.5376L240.357 137.117L238.979 137.971L140.916 81.3253Z" fill="#D9A929"/>
                                        </g>
                                        <g id="Group_2">
                                        <path id="Vector_2" d="M140.851 91.1053V81.3252L238.914 137.971V147.751C238.914 150.376 237.01 151.426 234.713 150.114L144.986 98.3254C142.688 96.947 140.851 93.7308 140.851 91.1053Z" fill="#F9C12E"/>
                                        </g>
                                        <g id="linelong">
                                        <path id="Vector_3" d="M238.979 126.419V137.971L140.916 81.3255V69.8389L238.979 126.419Z" fill="#3A4F59"/>
                                        </g>
                                        <g id="Group_3">
                                        <path id="Vector_4" d="M140.916 69.8386L142.36 68.9854L240.423 125.631L238.979 126.418L140.916 69.8386Z" fill="#3C515B"/>
                                        </g>
                                        <g id="Group_4">
                                        <path id="Vector_5" d="M148.922 57.2363L150.366 56.3831L150.3 67.082L148.922 67.8697V57.2363Z" fill="#C69B25"/>
                                        </g>
                                        <g id="Group_5">
                                        <g id="Group_6">
                                        <path id="Vector_6" d="M142.228 29.3405L143.672 28.4872C143.803 28.4216 143.868 28.356 144 28.356L142.556 29.2093C142.49 29.2749 142.359 29.2749 142.228 29.3405Z" fill="#937315"/>
                                        <path id="Vector_7" d="M142.556 29.209L144 28.3557C144.065 28.29 144.197 28.29 144.262 28.29L142.818 29.1433C142.753 29.1433 142.687 29.1433 142.556 29.209Z" fill="#977617"/>
                                        <path id="Vector_8" d="M142.884 29.1433L144.328 28.29C144.393 28.29 144.459 28.29 144.59 28.2244L143.146 29.0777C143.015 29.0777 142.949 29.1433 142.884 29.1433Z" fill="#9B7918"/>
                                        <path id="Vector_9" d="M143.081 29.0777L144.525 28.2244C144.591 28.2244 144.656 28.2244 144.722 28.2244L143.278 29.0777C143.278 29.0777 143.212 29.0777 143.081 29.0777Z" fill="#9F7D19"/>
                                        <path id="Vector_10" d="M143.344 29.0777L144.788 28.2244C144.853 28.2244 144.919 28.2244 144.985 28.2244L143.541 29.0777C143.475 29.0777 143.409 29.0777 143.344 29.0777Z" fill="#A3801B"/>
                                        <path id="Vector_11" d="M143.541 29.0777L144.985 28.2244C145.051 28.2244 145.116 28.2244 145.182 28.2244L143.738 29.0777C143.672 29.0777 143.607 29.0777 143.541 29.0777Z" fill="#A7831C"/>
                                        <path id="Vector_12" d="M143.736 29.0777L145.18 28.2244C145.246 28.2244 145.312 28.2244 145.377 28.2244L143.933 29.0777C143.802 29.1433 143.736 29.1433 143.736 29.0777Z" fill="#AB861D"/>
                                        <path id="Vector_13" d="M143.868 29.1433L145.312 28.29C145.378 28.29 145.443 28.29 145.509 28.3557L144.065 29.209C143.999 29.1433 143.934 29.1433 143.868 29.1433Z" fill="#AF891F"/>
                                        <path id="Vector_14" d="M144.065 29.209L145.509 28.3557C145.575 28.3557 145.641 28.3557 145.706 28.4214L144.262 29.2747C144.197 29.209 144.131 29.209 144.065 29.209Z" fill="#B38C20"/>
                                        <path id="Vector_15" d="M144.262 29.209L145.706 28.3557C145.771 28.3557 145.837 28.4214 145.903 28.4214L144.459 29.2747C144.327 29.2747 144.262 29.209 144.262 29.209Z" fill="#B79021"/>
                                        <path id="Vector_16" d="M144.394 29.2747L145.838 28.4214C145.903 28.4214 145.969 28.487 146.034 28.487L144.59 29.3403C144.525 29.3403 144.459 29.2747 144.394 29.2747Z" fill="#BC9322"/>
                                        <path id="Vector_17" d="M144.591 29.3401L146.035 28.4868C146.1 28.4868 146.166 28.5525 146.232 28.5525L144.788 29.4057C144.656 29.4057 144.591 29.3401 144.591 29.3401Z" fill="#C09623"/>
                                        <path id="Vector_18" d="M144.722 29.406L146.166 28.5527C146.231 28.5527 146.297 28.6184 146.363 28.6184L144.919 29.4717C144.853 29.4717 144.787 29.406 144.722 29.406Z" fill="#C49924"/>
                                        <path id="Vector_19" d="M144.919 29.4714L146.363 28.6182C146.429 28.6182 146.494 28.6838 146.56 28.6838L145.116 29.5371C144.985 29.5371 144.985 29.5371 144.919 29.4714Z" fill="#C89C25"/>
                                        <path id="Vector_20" d="M145.05 29.6028L146.494 28.7495C146.559 28.7495 146.559 28.8152 146.625 28.8152L145.181 29.6684C145.181 29.6028 145.115 29.6028 145.05 29.6028Z" fill="#CC9F26"/>
                                        </g>
                                        </g>
                                        <g id="Group_7">
                                        <path id="Vector_21" d="M148.922 67.8697L150.3 67.082L198.807 95.0438L197.363 95.8971L148.922 67.8697Z" fill="#D9A929"/>
                                        </g>
                                        <g id="Group_8">
                                        <path id="Vector_22" d="M148.922 57.2363L150.366 56.3831L198.807 84.4104L197.363 85.1981L148.922 57.2363Z" fill="#DECB72"/>
                                        </g>
                                        <g id="line">
                                        <path id="Vector_23" d="M197.363 85.1983V95.8973L148.922 67.8699V57.2366L197.363 85.1983Z" fill="#FFEEB2"/>
                                        </g>
                                        <g id="Group_9">
                                        <path id="Vector_24" d="M197.364 85.1981L198.808 84.4104V95.0437L197.364 95.897V85.1981Z" fill="#CBBA69"/>
                                        </g>
                                        <g id="Group_10">
                                        <g id="Group_11">
                                        <path id="Vector_25" d="M213.38 88.3486L214.824 87.4954V87.561L213.38 88.4143C213.38 88.4143 213.38 88.3486 213.38 88.3486Z" fill="#BC9322"/>
                                        <path id="Vector_26" d="M213.38 88.4145L214.824 87.5613V87.6269L213.38 88.4802C213.38 88.4802 213.38 88.4802 213.38 88.4145Z" fill="#C09623"/>
                                        <path id="Vector_27" d="M213.38 88.4805L214.824 87.6272V87.6929L213.38 88.5461C213.38 88.5461 213.38 88.5462 213.38 88.4805Z" fill="#C49924"/>
                                        <path id="Vector_28" d="M213.38 88.6121L214.824 87.7588V87.8245L213.38 88.6777V88.6121Z" fill="#C89C25"/>
                                        <path id="Vector_29" d="M213.38 88.677L214.824 87.8237V87.8894L213.38 88.7426C213.38 88.7426 213.38 88.677 213.38 88.677Z" fill="#CC9F26"/>
                                        <path id="Vector_30" d="M213.38 88.7425L214.824 87.8892V87.9548L213.38 88.8081C213.38 88.8081 213.38 88.8081 213.38 88.7425Z" fill="#D0A327"/>
                                        <path id="Vector_31" d="M213.38 88.8738L214.824 88.0205V88.0861L213.38 88.9394C213.446 88.9394 213.446 88.8738 213.38 88.8738Z" fill="#D4A628"/>
                                        <path id="Vector_32" d="M213.446 88.9397L214.89 88.0864V88.1521L213.446 89.0054V88.9397Z" fill="#D9A929"/>
                                        <path id="Vector_33" d="M213.446 89.0051L214.89 88.1519V88.2175L213.446 89.0707C213.446 89.0707 213.446 89.0708 213.446 89.0051Z" fill="#DDAC2A"/>
                                        <path id="Vector_34" d="M213.446 89.1363L214.89 88.283V88.3486L213.446 89.2019C213.512 89.2019 213.512 89.1363 213.446 89.1363Z" fill="#E1AF2B"/>
                                        <path id="Vector_35" d="M213.513 89.2022L214.957 88.3489V88.4145L213.513 89.2678C213.513 89.2678 213.513 89.2678 213.513 89.2022Z" fill="#E5B22B"/>
                                        <path id="Vector_36" d="M213.513 89.3335L214.957 88.4802V88.5458L213.513 89.3991C213.578 89.3335 213.513 89.3335 213.513 89.3335Z" fill="#E9B52C"/>
                                        <path id="Vector_37" d="M213.577 89.3989L215.021 88.5457V88.6113L213.577 89.4646V89.3989Z" fill="#EDB82D"/>
                                        <path id="Vector_38" d="M213.577 89.4646L215.021 88.6113C215.021 88.6113 215.021 88.677 215.087 88.677L213.643 89.5302C213.577 89.5302 213.577 89.5303 213.577 89.4646Z" fill="#F2BB2D"/>
                                        <path id="Vector_39" d="M213.644 89.5303L215.088 88.677C215.088 88.677 215.088 88.7426 215.153 88.7426L213.709 89.5959C213.644 89.5959 213.644 89.5959 213.644 89.5303Z" fill="#F8C02E"/>
                                        <path id="Vector_40" d="M213.644 89.6616L215.088 88.8083C215.088 88.8083 215.088 88.874 215.153 88.874L213.709 89.7272C213.709 89.6616 213.644 89.6616 213.644 89.6616Z" fill="#F9C74C"/>
                                        <path id="Vector_41" d="M213.71 89.727L215.154 88.8738C215.154 88.8738 215.154 88.9394 215.22 88.9394L213.776 89.7927C213.71 89.7927 213.71 89.727 213.71 89.727Z" fill="#FAC958"/>
                                        <path id="Vector_42" d="M213.71 89.793L215.154 88.9397C215.154 89.0053 215.22 89.0053 215.22 89.071L213.776 89.9243C213.776 89.8586 213.776 89.8587 213.71 89.793Z" fill="#FACB61"/>
                                        <path id="Vector_43" d="M213.774 89.9238L215.218 89.0706C215.218 89.1362 215.284 89.2018 215.284 89.2018L213.84 90.0551C213.84 89.9895 213.84 89.9895 213.774 89.9238Z" fill="#FBCD67"/>
                                        <path id="Vector_44" d="M213.905 90.0552L215.349 89.2019C215.415 89.2675 215.415 89.3332 215.481 89.3988L214.037 90.2521C213.971 90.1865 213.905 90.1208 213.905 90.0552Z" fill="#FBCF6D"/>
                                        <path id="Vector_45" d="M213.972 90.2522L215.416 89.3989C215.481 89.4646 215.481 89.5302 215.547 89.5302L214.103 90.3835C214.103 90.3835 214.037 90.3178 213.972 90.2522Z" fill="#FBCD67"/>
                                        <path id="Vector_46" d="M214.103 90.4493L215.547 89.5959C215.547 89.6616 215.612 89.6616 215.612 89.7272L214.168 90.5805C214.168 90.5149 214.168 90.4493 214.103 90.4493Z" fill="#FACB61"/>
                                        <path id="Vector_47" d="M214.169 90.5149L215.613 89.6616L215.679 89.7272L214.235 90.5805C214.235 90.5805 214.235 90.5805 214.169 90.5149Z" fill="#FAC958"/>
                                        <path id="Vector_48" d="M214.233 90.5806L215.677 89.7273L215.743 89.793L214.299 90.6462C214.299 90.6462 214.299 90.6462 214.233 90.5806Z" fill="#F9C74C"/>
                                        <path id="Vector_49" d="M214.3 90.7117L215.744 89.8584L215.809 89.924L214.365 90.7773C214.365 90.7117 214.365 90.7117 214.3 90.7117Z" fill="#F8C02E"/>
                                        <path id="Vector_50" d="M214.365 90.7771L215.809 89.9238L215.875 89.9895L214.431 90.8428C214.431 90.7771 214.431 90.7771 214.365 90.7771Z" fill="#F2BB2D"/>
                                        <path id="Vector_51" d="M214.431 90.843L215.875 89.9897L215.94 90.0554L214.496 90.9086C214.496 90.9086 214.496 90.843 214.431 90.843Z" fill="#EDB82D"/>
                                        <path id="Vector_52" d="M214.496 90.9084L215.94 90.0552L216.006 90.1208L214.562 90.9741C214.562 90.9741 214.562 90.9084 214.496 90.9084Z" fill="#E9B52C"/>
                                        <path id="Vector_53" d="M214.629 90.9741L216.073 90.1208L216.139 90.1865L214.695 91.0398C214.629 91.0398 214.629 90.9741 214.629 90.9741Z" fill="#E5B22B"/>
                                        <path id="Vector_54" d="M214.693 91.0398L216.137 90.1865L216.203 90.2521L214.759 91.1055C214.759 91.1055 214.693 91.0398 214.693 91.0398Z" fill="#E1AF2B"/>
                                        <path id="Vector_55" d="M214.759 91.1055L216.203 90.2522L216.268 90.3179L214.824 91.1712C214.824 91.1055 214.759 91.1055 214.759 91.1055Z" fill="#DDAC2A"/>
                                        <path id="Vector_56" d="M214.824 91.1714L216.268 90.3181L216.334 90.3837L214.89 91.237C214.89 91.1714 214.824 91.1714 214.824 91.1714Z" fill="#D9A929"/>
                                        <path id="Vector_57" d="M214.891 91.2368L216.335 90.3835C216.335 90.3835 216.4 90.3836 216.4 90.4492L214.956 91.3025C214.956 91.2369 214.956 91.2368 214.891 91.2368Z" fill="#D4A628"/>
                                        <path id="Vector_58" d="M214.957 91.2368L216.401 90.3835C216.401 90.3835 216.467 90.3836 216.467 90.4492L215.023 91.3025C215.023 91.3025 215.023 91.3025 214.957 91.2368Z" fill="#D0A327"/>
                                        <path id="Vector_59" d="M215.021 91.3025L216.466 90.4492L215.021 91.3025C215.087 91.3025 215.087 91.3025 215.021 91.3025Z" fill="#CC9F26"/>
                                        </g>
                                        </g>
                                        <g id="Group_12">
                                        <path id="Vector_60" d="M213.38 78.1746L214.824 77.387L214.758 87.4952L213.38 88.3485V78.1746Z" fill="#C69B25"/>
                                        </g>
                                        <g id="Group_13">
                                        <g id="Group_14">
                                        <path id="Vector_61" d="M213.906 77.0593L215.35 76.2061C215.219 76.2717 215.153 76.4029 215.022 76.4686L213.578 77.3219C213.644 77.2563 213.775 77.125 213.906 77.0593Z" fill="#937315"/>
                                        <path id="Vector_62" d="M213.577 77.3877L215.021 76.5344C215.021 76.6001 214.956 76.6001 214.956 76.6657L213.512 77.519C213.577 77.4534 213.577 77.3877 213.577 77.3877Z" fill="#977617"/>
                                        <path id="Vector_63" d="M213.512 77.5188L214.956 76.6655C214.956 76.6655 214.956 76.7312 214.89 76.7312L213.446 77.5844C213.512 77.5844 213.512 77.5188 213.512 77.5188Z" fill="#9B7918"/>
                                        <path id="Vector_64" d="M213.512 77.5845L214.956 76.7312V76.7968L213.512 77.6501C213.446 77.6501 213.446 77.5845 213.512 77.5845Z" fill="#9F7D19"/>
                                        <path id="Vector_65" d="M213.446 77.6502L214.89 76.7969V76.8625L213.446 77.7158C213.446 77.7158 213.446 77.7158 213.446 77.6502Z" fill="#A3801B"/>
                                        <path id="Vector_66" d="M213.446 77.7815L214.89 76.9282V76.9939L213.446 77.8471V77.7815Z" fill="#A7831C"/>
                                        <path id="Vector_67" d="M213.447 77.8469L214.891 76.9937V77.0593L213.447 77.9126C213.381 77.9126 213.381 77.8469 213.447 77.8469Z" fill="#AB861D"/>
                                        <path id="Vector_68" d="M213.381 77.9126L214.825 77.0593V77.1249L213.381 77.9783C213.381 77.9783 213.381 77.9782 213.381 77.9126Z" fill="#AF891F"/>
                                        <path id="Vector_69" d="M213.381 78.044L214.825 77.1907V77.2563L213.381 78.1096C213.381 78.0439 213.381 78.044 213.381 78.044Z" fill="#B38C20"/>
                                        <path id="Vector_70" d="M213.381 78.1096L214.825 77.2563V77.322L213.381 78.1753V78.1096Z" fill="#B79021"/>
                                        <path id="Vector_71" d="M213.381 78.1753L214.825 77.322V77.3876L213.381 78.1753Z" fill="#BC9322"/>
                                        </g>
                                        </g>
                                        <g id="Group_15">
                                        <g id="Group_16">
                                        <path id="Vector_72" d="M213.905 77.0593L215.349 76.206C215.415 76.206 215.415 76.1404 215.481 76.1404L214.037 76.9937C213.971 77.0593 213.905 77.0593 213.905 77.0593Z" fill="#848484"/>
                                        <path id="Vector_73" d="M214.036 76.9934L215.48 76.1401C215.546 76.1401 215.546 76.1401 215.611 76.0745L214.167 76.9277C214.102 76.9934 214.036 76.9934 214.036 76.9934Z" fill="#888888"/>
                                        <path id="Vector_74" d="M214.169 76.9937L215.613 76.1404C215.613 76.1404 215.679 76.1404 215.744 76.1404L214.3 76.9937C214.235 76.9937 214.169 76.9937 214.169 76.9937Z" fill="#8C8C8C"/>
                                        <path id="Vector_75" d="M214.233 76.9935L215.677 76.1401H215.743L214.299 76.9935C214.299 76.9935 214.299 76.9935 214.233 76.9935Z" fill="#909090"/>
                                        <path id="Vector_76" d="M214.365 76.9935L215.809 76.1401H215.875L214.431 76.9935C214.365 76.9935 214.365 76.9935 214.365 76.9935Z" fill="#949494"/>
                                        <path id="Vector_77" d="M214.431 76.9935L215.875 76.1401H215.94L214.496 76.9935H214.431Z" fill="#989898"/>
                                        <path id="Vector_78" d="M214.496 76.9935L215.94 76.1401H216.006L214.562 76.9935H214.496Z" fill="#9C9C9C"/>
                                        <path id="Vector_79" d="M214.562 76.9935L216.006 76.1401H216.071L214.627 76.9935C214.627 76.9935 214.562 76.9935 214.562 76.9935Z" fill="#A0A0A0"/>
                                        <path id="Vector_80" d="M214.627 76.9935L216.071 76.1401H216.137L214.693 76.9935C214.693 76.9935 214.693 76.9935 214.627 76.9935Z" fill="#A4A4A4"/>
                                        <path id="Vector_81" d="M214.693 76.9934L216.137 76.1401H216.203L214.759 76.9934C214.759 77.0591 214.759 77.0591 214.693 76.9934Z" fill="#A9A9A9"/>
                                        <path id="Vector_82" d="M214.759 77.0591L216.203 76.2058H216.268L214.824 77.0591C214.824 77.0591 214.824 77.0591 214.759 77.0591Z" fill="#ADADAD"/>
                                        <path id="Vector_83" d="M214.824 77.0591L216.268 76.2058H216.334L214.89 77.0591C214.89 77.0591 214.89 77.0591 214.824 77.0591Z" fill="#B1B1B1"/>
                                        <path id="Vector_84" d="M214.89 77.1248L216.334 76.2715H216.399L214.955 77.1248C214.955 77.1248 214.955 77.1248 214.89 77.1248Z" fill="#B5B5B5"/>
                                        <path id="Vector_85" d="M214.955 77.1248L216.399 76.2715C216.399 76.2715 216.465 76.2715 216.465 76.3371L215.021 77.1904C215.021 77.1904 215.021 77.1248 214.955 77.1248Z" fill="#B9B9B9"/>
                                        <path id="Vector_86" d="M215.086 77.1902L216.53 76.3369H216.596L215.086 77.1902Z" fill="#BDBDBD"/>
                                        </g>
                                        </g>
                                        <g id="Group_17">
                                        <path id="Vector_87" d="M215.085 91.3023L216.463 90.5146L229.722 98.1286L228.278 98.9819L215.085 91.3023Z" fill="#D9A929"/>
                                        </g>
                                        <g id="Group_18">
                                        <g id="Group_19">
                                        <path id="Vector_88" d="M228.28 98.9822L229.724 98.1289H229.79L228.28 98.9822C228.346 98.9822 228.346 98.9822 228.28 98.9822Z" fill="#CC9F26"/>
                                        <path id="Vector_89" d="M228.347 98.9818L229.791 98.1284C229.791 98.1284 229.856 98.1284 229.856 98.1941L228.412 99.0474C228.412 98.9817 228.412 98.9818 228.347 98.9818Z" fill="#C89C25"/>
                                        <path id="Vector_90" d="M228.413 99.0474L229.857 98.1941H229.923L228.479 99.0474C228.479 99.0474 228.479 99.0474 228.413 99.0474Z" fill="#C49924"/>
                                        <path id="Vector_91" d="M228.478 99.0474L229.922 98.1941H229.987L228.543 99.0474C228.543 99.0474 228.543 99.0474 228.478 99.0474Z" fill="#C09623"/>
                                        <path id="Vector_92" d="M228.544 99.1133L229.988 98.26H230.054L228.61 99.1133C228.61 99.1133 228.61 99.1133 228.544 99.1133Z" fill="#BC9322"/>
                                        <path id="Vector_93" d="M228.674 99.113L230.118 98.2598H230.184L228.739 99.113C228.674 99.113 228.674 99.113 228.674 99.113Z" fill="#B79021"/>
                                        <path id="Vector_94" d="M228.74 99.113L230.184 98.2598H230.25L228.806 99.113C228.74 99.1787 228.74 99.113 228.74 99.113Z" fill="#B38C20"/>
                                        <path id="Vector_95" d="M228.805 99.1785L230.249 98.3252H230.314L228.87 99.1785C228.805 99.1785 228.805 99.1785 228.805 99.1785Z" fill="#AF891F"/>
                                        <path id="Vector_96" d="M228.871 99.1785L230.315 98.3252H230.381L228.937 99.1785C228.871 99.1785 228.871 99.1785 228.871 99.1785Z" fill="#AB861D"/>
                                        <path id="Vector_97" d="M228.938 99.1785L230.382 98.3252H230.447L229.003 99.1785H228.938Z" fill="#A7831C"/>
                                        <path id="Vector_98" d="M229.002 99.1785L230.446 98.3252H230.512L229.068 99.1785C229.068 99.1785 229.002 99.1785 229.002 99.1785Z" fill="#A3801B"/>
                                        <path id="Vector_99" d="M229.068 99.1785L230.512 98.3252H230.578L229.134 99.1785C229.134 99.1785 229.134 99.1785 229.068 99.1785Z" fill="#9F7D19"/>
                                        <path id="Vector_100" d="M229.199 99.1785L230.643 98.3252C230.709 98.3252 230.709 98.3252 230.775 98.3252L229.331 99.1785C229.265 99.1785 229.199 99.1785 229.199 99.1785Z" fill="#9B7918"/>
                                        <path id="Vector_101" d="M229.266 99.1787L230.71 98.3254C230.775 98.3254 230.775 98.3254 230.841 98.2598L229.397 99.113C229.331 99.1787 229.331 99.1787 229.266 99.1787Z" fill="#977617"/>
                                        <path id="Vector_102" d="M229.396 99.1128L230.84 98.2595C230.906 98.2595 230.906 98.1938 230.972 98.1938L229.528 99.0471C229.462 99.1128 229.462 99.1128 229.396 99.1128Z" fill="#937315"/>
                                        </g>
                                        </g>
                                        <g id="Group_20">
                                        <g id="Group_21">
                                        <path id="Vector_103" d="M230.052 97.9971L231.43 97.1438L230.052 97.9971Z" fill="#ADADAD"/>
                                        <path id="Vector_104" d="M230.052 97.9971L231.496 97.1438V97.2095L230.052 98.0627V97.9971Z" fill="#A9A9A9"/>
                                        <path id="Vector_105" d="M230.052 98.0628L231.496 97.2095V97.2751L230.052 98.1284V98.0628Z" fill="#A4A4A4"/>
                                        <path id="Vector_106" d="M230.052 98.1284L231.496 97.2751V97.3408L230.052 98.1941C229.986 98.1941 230.052 98.1941 230.052 98.1284Z" fill="#A0A0A0"/>
                                        <path id="Vector_107" d="M229.985 98.2595L231.429 97.4062V97.4719L229.985 98.3252C229.985 98.2596 229.985 98.2595 229.985 98.2595Z" fill="#9C9C9C"/>
                                        <path id="Vector_108" d="M229.985 98.325L231.429 97.4717V97.5373L229.985 98.3906V98.325Z" fill="#989898"/>
                                        <path id="Vector_109" d="M229.985 98.3909L231.429 97.5376V97.6032L229.985 98.4565V98.3909Z" fill="#949494"/>
                                        <path id="Vector_110" d="M229.986 98.4563L231.43 97.603V97.6687L229.986 98.522C229.92 98.522 229.92 98.5219 229.986 98.4563Z" fill="#909090"/>
                                        <path id="Vector_111" d="M229.92 98.5877L231.364 97.7344C231.364 97.8 231.364 97.8 231.299 97.8L229.854 98.6533C229.92 98.6533 229.92 98.5877 229.92 98.5877Z" fill="#8C8C8C"/>
                                        <path id="Vector_112" d="M229.92 98.6534L231.364 97.8C231.364 97.8657 231.299 97.8657 231.299 97.9313L229.854 98.7846C229.854 98.719 229.854 98.719 229.92 98.6534Z" fill="#888888"/>
                                        <path id="Vector_113" d="M229.855 98.7847L231.299 97.9314C231.233 98.0627 231.102 98.1283 230.97 98.194L229.526 99.0472C229.658 98.9816 229.723 98.916 229.855 98.7847Z" fill="#848484"/>
                                        </g>
                                        </g>
                                        <g id="Group_22">
                                        <path id="Vector_114" d="M230.053 87.8235L231.497 86.9702L231.431 97.1441L230.053 97.9974V87.8235Z" fill="#B7B7B7"/>
                                        </g>
                                        <g id="Group_23">
                                        <path id="Vector_115" d="M215.085 77.1903L216.529 76.4026L229.788 84.0166L228.344 84.8699L215.085 77.1903Z" fill="#CACACA"/>
                                        </g>
                                        <g id="icon">
                                        <path id="Vector_116" d="M228.345 84.8698C229.264 85.3949 230.052 86.7733 230.052 87.8235V97.9973C230.052 99.1132 229.264 99.507 228.345 98.9819L215.086 91.3679C214.168 90.8428 213.38 89.4644 213.38 88.4142V78.2403C213.38 77.1245 214.168 76.7306 215.086 77.2557L228.345 84.8698Z" fill="#F1F2F2"/>
                                        </g>
                                        <g id="Group_24">
                                        <g id="Group_25">
                                        <path id="Vector_117" d="M228.346 84.8702L229.79 84.0168L228.346 84.8702Z" fill="#BDBDBD"/>
                                        <path id="Vector_118" d="M228.346 84.8702L229.79 84.0168C229.79 84.0168 229.855 84.0169 229.855 84.0825L228.411 84.9358C228.411 84.8702 228.411 84.8702 228.346 84.8702Z" fill="#C1C1C1"/>
                                        <path id="Vector_119" d="M228.411 84.8699L229.855 84.0166C229.855 84.0166 229.921 84.0166 229.921 84.0823L228.477 84.9356C228.477 84.9356 228.477 84.9356 228.411 84.8699Z" fill="#C5C5C5"/>
                                        <path id="Vector_120" d="M228.543 84.9358L229.987 84.0825L230.053 84.1481L228.609 85.0014C228.543 85.0014 228.543 84.9358 228.543 84.9358Z" fill="#C9C9C9"/>
                                        <path id="Vector_121" d="M228.608 85.0015L230.052 84.1482L230.118 84.2139L228.674 85.0672C228.608 85.0672 228.608 85.0015 228.608 85.0015Z" fill="#CDCDCD"/>
                                        <path id="Vector_122" d="M228.674 85.0669L230.118 84.2136L230.183 84.2792L228.739 85.1325C228.739 85.0669 228.674 85.0669 228.674 85.0669Z" fill="#D2D2D2"/>
                                        <path id="Vector_123" d="M228.739 85.1324L230.183 84.2791L230.249 84.3447L228.805 85.198C228.805 85.1324 228.739 85.1324 228.739 85.1324Z" fill="#D6D6D6"/>
                                        <path id="Vector_124" d="M228.805 85.1983L230.249 84.345L230.314 84.4106L228.87 85.2639C228.87 85.2639 228.87 85.1983 228.805 85.1983Z" fill="#DADADA"/>
                                        <path id="Vector_125" d="M228.871 85.2639L230.315 84.4106L230.381 84.4763L228.937 85.3296C228.937 85.3296 228.937 85.2639 228.871 85.2639Z" fill="#DEDEDE"/>
                                        <path id="Vector_126" d="M228.938 85.3294L230.382 84.4761L230.447 84.5417L229.003 85.395C229.003 85.395 229.003 85.3294 228.938 85.3294Z" fill="#E2E2E2"/>
                                        <path id="Vector_127" d="M229.002 85.395L230.446 84.5417L230.512 84.6074L229.068 85.4607C229.068 85.4607 229.068 85.395 229.002 85.395Z" fill="#E6E6E6"/>
                                        <path id="Vector_128" d="M229.067 85.4607L230.511 84.6074L230.577 84.673L229.133 85.5264C229.133 85.5264 229.133 85.5263 229.067 85.4607Z" fill="#E8E8E8"/>
                                        <path id="Vector_129" d="M229.133 85.5262L230.577 84.6729L230.642 84.7385L229.198 85.5918C229.198 85.5918 229.198 85.5918 229.133 85.5262Z" fill="#E9E9E9"/>
                                        <path id="Vector_130" d="M229.199 85.6575L230.643 84.8042C230.643 84.8042 230.709 84.8698 230.709 84.9355L229.265 85.7888C229.265 85.7231 229.265 85.6575 229.199 85.6575Z" fill="#E9E9E9"/>
                                        <path id="Vector_131" d="M229.33 85.7232L230.774 84.8699C230.84 84.9355 230.84 85.0011 230.905 85.0011L229.461 85.8544C229.396 85.8544 229.33 85.7888 229.33 85.7232Z" fill="#EAEAEA"/>
                                        <path id="Vector_132" d="M229.396 85.9202L230.841 85.0669C230.906 85.1325 230.906 85.1982 230.972 85.2638L229.528 86.1171C229.528 86.0515 229.462 85.9858 229.396 85.9202Z" fill="#EAEAEA"/>
                                        <path id="Vector_133" d="M229.527 86.117L230.971 85.2637C230.971 85.3293 231.037 85.395 231.037 85.395L229.593 86.2483C229.593 86.1826 229.593 86.117 229.527 86.117Z" fill="#EAEAEA"/>
                                        <path id="Vector_134" d="M229.658 86.2483L231.102 85.395C231.102 85.4607 231.168 85.4607 231.168 85.5263L229.724 86.3796C229.658 86.3139 229.658 86.2483 229.658 86.2483Z" fill="#E9E9E9"/>
                                        <path id="Vector_135" d="M229.658 86.314L231.102 85.4607C231.102 85.4607 231.102 85.5264 231.168 85.5264L229.724 86.3796C229.724 86.3796 229.724 86.3796 229.658 86.314Z" fill="#E9E9E9"/>
                                        <path id="Vector_136" d="M229.725 86.4453L231.169 85.592C231.169 85.592 231.169 85.6577 231.234 85.6577L229.79 86.511C229.725 86.511 229.725 86.4453 229.725 86.4453Z" fill="#E8E8E8"/>
                                        <path id="Vector_137" d="M229.79 86.5108L231.234 85.6575C231.234 85.6575 231.234 85.7231 231.3 85.7231L229.856 86.5764C229.79 86.5764 229.79 86.5764 229.79 86.5108Z" fill="#E6E6E6"/>
                                        <path id="Vector_138" d="M229.79 86.5764L231.234 85.7231C231.234 85.7231 231.234 85.7888 231.3 85.7888L229.856 86.642C229.79 86.642 229.79 86.6421 229.79 86.5764Z" fill="#E2E2E2"/>
                                        <path id="Vector_139" d="M229.855 86.7078L231.299 85.8545V85.9201L229.855 86.7734C229.855 86.7078 229.855 86.7078 229.855 86.7078Z" fill="#DEDEDE"/>
                                        <path id="Vector_140" d="M229.855 86.7732L231.299 85.9199V85.9855L229.855 86.8389V86.7732Z" fill="#DADADA"/>
                                        <path id="Vector_141" d="M229.921 86.8392L231.365 85.9858V86.0515L229.921 86.9048C229.921 86.9048 229.921 86.9048 229.921 86.8392Z" fill="#D6D6D6"/>
                                        <path id="Vector_142" d="M229.921 86.9705L231.365 86.1172V86.1828L229.921 87.0361V86.9705Z" fill="#D2D2D2"/>
                                        <path id="Vector_143" d="M229.921 87.0361L231.365 86.1829V86.2485L229.921 87.1018C229.987 87.1018 229.987 87.0361 229.921 87.0361Z" fill="#CDCDCD"/>
                                        <path id="Vector_144" d="M229.986 87.1016L231.43 86.2483V86.3139L229.986 87.1672C229.986 87.1672 229.986 87.1672 229.986 87.1016Z" fill="#C9C9C9"/>
                                        <path id="Vector_145" d="M229.986 87.2329L231.43 86.3796V86.4453L229.986 87.2985V87.2329Z" fill="#C5C5C5"/>
                                        <path id="Vector_146" d="M229.986 87.2986L231.43 86.4453V86.511L229.986 87.3643C230.052 87.3643 229.986 87.3642 229.986 87.2986Z" fill="#C1C1C1"/>
                                        <path id="Vector_147" d="M230.052 87.364L231.496 86.5107V86.5764L230.052 87.4297C230.052 87.4297 230.052 87.4297 230.052 87.364Z" fill="#BDBDBD"/>
                                        <path id="Vector_148" d="M230.052 87.4954L231.496 86.6421V86.7078L230.052 87.561V87.4954Z" fill="#B9B9B9"/>
                                        <path id="Vector_149" d="M230.052 87.561L231.496 86.7078V86.7734L230.052 87.6267V87.561Z" fill="#B5B5B5"/>
                                        <path id="Vector_150" d="M230.052 87.6267L231.496 86.7734V86.8391L230.052 87.6924C230.052 87.6924 230.052 87.6923 230.052 87.6267Z" fill="#B1B1B1"/>
                                        <path id="Vector_151" d="M230.052 87.7578L231.496 86.9045V86.9702L230.052 87.8235C230.052 87.7578 230.052 87.7578 230.052 87.7578Z" fill="#ADADAD"/>
                                        </g>
                                        </g>
                                        <g id="Group_26">
                                        <path id="Vector_152" d="M238.978 137.971V147.751C238.978 147.882 238.978 148.079 238.978 148.21C238.978 148.21 238.978 148.21 238.978 148.276C238.978 148.407 238.978 148.539 238.913 148.67V148.735C238.913 148.867 238.847 148.998 238.847 149.064V149.129C238.781 149.261 238.781 149.326 238.716 149.457C238.716 149.457 238.716 149.457 238.716 149.523C238.65 149.654 238.584 149.72 238.519 149.851C238.453 149.983 238.322 150.114 238.256 150.18L238.19 150.245C238.059 150.376 237.994 150.442 237.862 150.508L239.306 149.654C239.438 149.589 239.569 149.457 239.635 149.392L239.7 149.326C239.831 149.195 239.897 149.129 239.963 148.998C240.028 148.932 240.094 148.801 240.094 148.735C240.094 148.735 240.094 148.735 240.094 148.67C240.094 148.604 240.16 148.539 240.16 148.473C240.16 148.407 240.16 148.407 240.225 148.342V148.276V148.21C240.225 148.145 240.291 148.079 240.291 148.013V147.948V147.882V147.817C240.291 147.751 240.291 147.685 240.291 147.62C240.291 147.554 240.291 147.554 240.291 147.488C240.291 147.488 240.291 147.488 240.291 147.423C240.291 147.423 240.291 147.423 240.291 147.357C240.291 147.291 240.291 147.226 240.291 147.16C240.291 147.095 240.291 147.029 240.291 146.963V137.249V125.762L238.847 126.615L238.978 137.971Z" fill="#F8A725"/>
                                        <path id="Vector_153" d="M235.368 81.7847C235.499 81.8503 235.631 81.9816 235.762 82.0472C235.762 82.0472 235.762 82.0473 235.828 82.1129C235.959 82.1785 236.09 82.3098 236.156 82.4411C236.156 82.4411 236.156 82.4411 236.221 82.5067C236.353 82.638 236.484 82.7036 236.55 82.8349C236.681 82.9662 236.812 83.0975 236.878 83.2287C237.075 83.4913 237.337 83.7538 237.534 84.082C237.6 84.1477 237.665 84.2789 237.731 84.3446C237.797 84.4102 237.797 84.4759 237.862 84.5415C237.862 84.6071 237.928 84.6071 237.928 84.6727C237.994 84.804 238.059 84.9353 238.125 85.0666C238.125 85.0666 238.125 85.0666 238.125 85.1322C238.191 85.2635 238.256 85.4604 238.322 85.5917C238.387 85.723 238.453 85.9199 238.519 86.0512C238.584 86.2481 238.65 86.3793 238.716 86.5763C238.781 86.7075 238.781 86.9045 238.847 87.0357C238.847 87.0357 238.847 87.0357 238.847 87.1014C238.913 87.2983 238.913 87.4295 238.913 87.5608C238.913 87.7577 238.978 87.889 238.978 88.0203C238.978 88.0203 238.978 88.0203 238.978 88.0859C238.978 88.2172 238.978 88.4141 238.978 88.5454L238.847 126.353L240.291 125.499L240.422 87.6921C240.422 87.6265 240.422 87.5608 240.422 87.4952C240.422 87.4296 240.422 87.3639 240.422 87.2983V87.2326C240.422 87.2326 240.422 87.2326 240.422 87.167V87.1014C240.422 87.0357 240.422 86.9701 240.422 86.9044C240.422 86.8388 240.422 86.7732 240.422 86.7075C240.422 86.6419 240.422 86.5763 240.357 86.5106C240.357 86.445 240.357 86.3793 240.291 86.3137V86.2481C240.291 86.2481 240.291 86.2481 240.291 86.1824V86.1168C240.291 86.0511 240.225 85.9855 240.225 85.9199C240.225 85.8542 240.225 85.7886 240.16 85.7886C240.16 85.723 240.094 85.6573 240.094 85.5917C240.094 85.526 240.028 85.4604 240.028 85.3948C240.028 85.3948 240.028 85.3948 240.028 85.3291C240.028 85.2635 239.963 85.2635 239.963 85.1979C239.963 85.1322 239.897 85.0666 239.897 85.0009C239.897 84.9353 239.831 84.9353 239.831 84.8697C239.831 84.804 239.766 84.7384 239.766 84.6727C239.7 84.6071 239.7 84.5415 239.635 84.4758C239.635 84.4758 239.635 84.4759 239.635 84.4102C239.635 84.3446 239.569 84.2789 239.569 84.2133C239.503 84.1477 239.503 84.082 239.438 84.0164C239.438 83.9507 239.372 83.9508 239.372 83.8851C239.372 83.8851 239.372 83.8851 239.372 83.8195C239.306 83.7538 239.306 83.6882 239.241 83.6226C239.175 83.5569 239.109 83.4256 239.044 83.36C239.044 83.36 239.044 83.36 239.044 83.2944C238.978 83.1631 238.847 83.0318 238.781 82.9006C238.716 82.8349 238.65 82.7693 238.584 82.638C238.519 82.5723 238.453 82.5067 238.453 82.4411C238.387 82.3754 238.322 82.3098 238.322 82.2442C238.256 82.1785 238.191 82.1129 238.191 82.0472C238.125 81.9816 238.125 81.9816 238.059 81.916C237.994 81.8503 237.928 81.7847 237.862 81.719L237.797 81.6534C237.797 81.6534 237.797 81.6534 237.731 81.5878L237.665 81.5221C237.6 81.4565 237.534 81.3908 237.469 81.3908L237.403 81.3252C237.403 81.3252 237.403 81.3252 237.337 81.2596L237.272 81.1939C237.206 81.1283 237.14 81.1283 237.075 81.0627C237.009 81.0627 237.009 80.997 236.943 80.997C236.878 80.9314 236.812 80.9314 236.746 80.8658C236.681 80.8001 236.615 80.8001 236.55 80.7345C236.55 80.7345 236.55 80.7345 236.484 80.7345L146.626 28.8149L145.182 29.6682L234.909 81.4565C235.106 81.5221 235.237 81.6534 235.368 81.7847C235.368 81.7191 235.368 81.7191 235.368 81.7847Z" fill="#F8A725"/>
                                        </g>
                                        <g id="Group_27">
                                        <path id="Vector_154" d="M234.975 81.4567C237.272 82.7694 239.11 85.9857 239.11 88.6112L238.979 126.419L140.916 69.7731L141.047 31.9657C141.047 29.3402 142.951 28.29 145.248 29.6028L234.975 81.4567ZM197.365 95.897V85.198L148.924 57.2363V67.9353L197.365 95.897ZM230.052 97.9974V87.8236C230.052 86.7077 229.265 85.395 228.346 84.8698L215.087 77.2558C214.168 76.7307 213.38 77.1246 213.38 78.2404V88.4143C213.38 89.5301 214.168 90.8429 215.087 91.368L228.346 98.982C229.265 99.5071 230.052 99.0476 230.052 97.9974Z" fill="#F9C12E"/>
                                        </g>
                                        </g>
                                        <g id="Group_28">
                                        <path id="Vector_155" d="M254.734 229.667L264.055 224.285L264.186 196.389L254.734 202.952V229.667Z" fill="#62808E"/>
                                        <path id="Vector_156" d="M264.186 196.388L254.734 191.597V202.952L264.186 196.388Z" fill="#58737F"/>
                                        <path id="Vector_157" d="M251.648 193.697L261.166 198.489L259.853 199.408L251.648 195.207V193.697Z" fill="#455A66"/>
                                        <g id="Group_29">
                                        <g id="Group_30">
                                        <g id="Group_31">
                                        <path id="Vector_158" d="M43.0508 200.261L133.434 147.685V159.762L43.0508 212.273V200.261Z" fill="#516A76"/>
                                        </g>
                                        <g id="Group_32">
                                        <path id="Vector_159" d="M165.925 241.482L256.309 188.971L256.177 230.652L165.794 283.162L165.925 241.482Z" fill="#516A76"/>
                                        </g>
                                        <g id="Group_33">
                                        <path id="Vector_160" d="M5.76855 149.064L96.1519 96.5532L256.308 188.971L165.925 241.482L5.76855 149.064Z" fill="#58737F"/>
                                        </g>
                                        <path id="Vector_161" d="M5.76923 149.064L0.321289 154.774V187.593L43.0515 212.273V200.261L128.446 249.555V261.567L165.794 283.162L165.926 241.482L5.76923 149.064Z" fill="#3D525C"/>
                                        </g>
                                        </g>
                                        <g id="Group_34">
                                        <path id="Vector_162" d="M19.8154 142.959L98.9747 96.947L155.358 129.7L76.1984 175.712L19.8154 142.959Z" fill="#6B848E"/>
                                        <path id="console-bg" d="M27.2324 142.959L98.9746 101.279L147.94 129.7L76.1983 171.38L27.2324 142.959Z" fill="#BFCC34"/>
                                        <path id="Vector_163" d="M19.8154 142.959V149.392L76.1983 182.079V175.713L19.8154 142.959Z" fill="#3D525C"/>
                                        <path id="Vector_164" d="M155.358 129.7V136.067L76.1982 182.079V175.712L155.358 129.7Z" fill="#516A76"/>
                                        </g>
                                        <g id="Group_35">
                                        <g id="3">
                                        <g id="Group_36">
                                        <path id="num3" d="M142.229 148.276C140.391 149.326 140.391 151.098 142.229 152.148L149.58 156.415C151.418 157.465 154.438 157.465 156.275 156.415L171.897 147.357C173.735 146.307 173.735 144.534 171.897 143.484L164.546 139.218C162.708 138.168 159.689 138.168 157.851 139.218L142.229 148.276Z" fill="#CFDAE0"/>
                                        </g>
                                        <path id="Vector_165" d="M141.179 151.295L141.113 151.23C141.047 151.098 140.916 150.967 140.916 150.77V150.705C140.851 150.573 140.851 150.376 140.851 150.245V152.608C140.851 152.608 140.851 152.608 140.851 152.674C140.851 152.739 140.851 152.871 140.851 152.936C140.851 153.002 140.851 153.067 140.916 153.133V153.199C140.916 153.199 140.916 153.199 140.916 153.264C140.982 153.33 140.982 153.461 141.048 153.527C141.048 153.593 141.113 153.593 141.113 153.658L141.179 153.724C141.179 153.724 141.179 153.789 141.244 153.789C141.31 153.921 141.441 153.986 141.507 154.118C141.573 154.183 141.704 154.249 141.835 154.38C141.901 154.446 141.966 154.511 142.098 154.577C142.098 154.577 142.163 154.577 142.163 154.643L149.515 158.909C149.777 159.106 150.106 159.237 150.434 159.303C150.499 159.303 150.499 159.369 150.565 159.369C150.631 159.369 150.762 159.434 150.828 159.434C150.959 159.5 151.156 159.5 151.287 159.566C151.353 159.566 151.418 159.566 151.484 159.631C151.615 159.631 151.746 159.697 151.878 159.697C151.943 159.697 151.943 159.697 152.009 159.697H152.075C152.272 159.697 152.403 159.697 152.6 159.763C152.665 159.763 152.731 159.763 152.797 159.763C152.862 159.763 152.862 159.763 152.928 159.763C152.994 159.763 152.994 159.763 153.059 159.763C153.19 159.763 153.387 159.763 153.519 159.763C153.584 159.763 153.65 159.763 153.716 159.763C153.781 159.763 153.781 159.763 153.847 159.763C153.913 159.763 153.978 159.763 154.044 159.763C154.175 159.763 154.372 159.697 154.503 159.697C154.569 159.697 154.569 159.697 154.635 159.697C154.7 159.697 154.7 159.697 154.766 159.631C154.831 159.631 154.897 159.566 155.028 159.566C155.16 159.5 155.291 159.5 155.422 159.434C155.488 159.434 155.488 159.434 155.553 159.369C155.553 159.369 155.553 159.369 155.619 159.369C155.882 159.303 156.079 159.172 156.275 159.041L171.897 149.982C172.816 149.457 173.276 148.735 173.276 148.013V145.65C173.276 145.979 173.144 146.372 172.947 146.701C172.685 147.029 172.357 147.357 171.897 147.62L156.275 156.678C156.079 156.809 155.816 156.94 155.553 157.006C155.488 157.006 155.488 157.006 155.422 157.071C155.225 157.137 154.963 157.203 154.766 157.268C154.7 157.268 154.7 157.268 154.635 157.334C154.372 157.4 154.109 157.465 153.847 157.465C153.781 157.465 153.781 157.465 153.716 157.465C153.453 157.465 153.19 157.531 152.928 157.531C152.862 157.531 152.862 157.531 152.797 157.531C152.534 157.531 152.272 157.531 152.009 157.465C151.943 157.465 151.943 157.465 151.878 157.465C151.681 157.465 151.484 157.4 151.287 157.334C151.156 157.268 150.959 157.268 150.828 157.203C150.696 157.137 150.565 157.137 150.499 157.071C150.171 156.94 149.843 156.809 149.58 156.678L142.229 152.411C142.098 152.345 142.032 152.28 141.901 152.214C141.77 152.149 141.638 152.083 141.573 151.952C141.376 151.558 141.31 151.426 141.179 151.295Z" fill="#91A4AC"/>
                                        </g>
                                        <g id="2">
                                        <g id="Group_37">
                                        <path id="num2" d="M115.91 163.438C114.072 164.488 114.072 166.261 115.91 167.311L123.261 171.577C125.099 172.627 128.118 172.627 129.956 171.577L145.578 162.519C147.416 161.469 147.416 159.697 145.578 158.647L138.227 154.38C136.389 153.33 133.369 153.33 131.531 154.38L115.91 163.438Z" fill="#CFDAE0"/>
                                        </g>
                                        <path id="Vector_166" d="M114.924 166.458L114.858 166.392C114.793 166.261 114.661 166.129 114.661 165.933V165.867C114.596 165.736 114.596 165.539 114.596 165.407V167.77C114.596 167.77 114.596 167.77 114.596 167.836C114.596 167.902 114.596 168.033 114.596 168.099C114.596 168.164 114.596 168.23 114.661 168.295V168.361C114.661 168.361 114.661 168.361 114.661 168.427C114.727 168.492 114.727 168.624 114.793 168.689C114.793 168.755 114.858 168.755 114.858 168.821L114.924 168.886C114.924 168.886 114.924 168.952 114.99 168.952C115.055 169.083 115.186 169.149 115.252 169.28C115.318 169.346 115.449 169.477 115.58 169.543C115.646 169.608 115.712 169.674 115.843 169.74C115.843 169.74 115.908 169.739 115.908 169.805L123.26 174.072C123.522 174.268 123.851 174.4 124.179 174.465C124.244 174.465 124.244 174.531 124.31 174.531C124.376 174.531 124.507 174.597 124.573 174.597C124.704 174.662 124.901 174.662 125.032 174.728C125.098 174.728 125.163 174.728 125.229 174.794C125.36 174.794 125.492 174.859 125.623 174.859C125.689 174.859 125.689 174.859 125.754 174.859H125.82C126.017 174.859 126.148 174.859 126.345 174.925C126.411 174.925 126.476 174.925 126.542 174.925C126.607 174.925 126.607 174.925 126.673 174.925C126.739 174.925 126.739 174.925 126.804 174.925C126.936 174.925 127.133 174.925 127.264 174.925C127.329 174.925 127.395 174.925 127.461 174.925C127.526 174.925 127.526 174.925 127.592 174.925C127.658 174.925 127.723 174.925 127.789 174.925C127.92 174.925 128.117 174.859 128.248 174.859C128.314 174.859 128.314 174.859 128.38 174.859C128.445 174.859 128.445 174.859 128.511 174.794C128.577 174.794 128.642 174.728 128.773 174.728C128.905 174.662 129.036 174.662 129.167 174.597C129.233 174.597 129.233 174.597 129.299 174.531C129.299 174.531 129.299 174.531 129.364 174.531C129.627 174.465 129.824 174.334 130.021 174.203L145.642 165.145C146.561 164.62 147.021 163.898 147.021 163.176V160.813C147.021 161.535 146.561 162.257 145.642 162.782L130.021 171.84C129.824 171.971 129.561 172.102 129.299 172.168C129.233 172.168 129.233 172.168 129.167 172.234C128.97 172.299 128.708 172.365 128.511 172.431C128.445 172.431 128.445 172.431 128.38 172.496C128.117 172.562 127.855 172.628 127.592 172.628C127.526 172.628 127.526 172.628 127.461 172.628C127.198 172.628 126.936 172.693 126.673 172.693C126.607 172.693 126.607 172.693 126.542 172.693C126.279 172.693 126.017 172.693 125.754 172.628C125.689 172.628 125.689 172.628 125.623 172.628C125.426 172.628 125.229 172.562 125.032 172.496C124.901 172.431 124.704 172.431 124.573 172.365C124.441 172.299 124.31 172.299 124.244 172.234C123.916 172.102 123.588 171.971 123.326 171.84L115.974 167.573C115.843 167.508 115.777 167.442 115.712 167.377C115.58 167.311 115.449 167.245 115.383 167.114C115.121 166.786 114.99 166.655 114.924 166.458Z" fill="#91A4AC"/>
                                        </g>
                                        <g id="1">
                                        <g id="Group_38">
                                        <path id="num1" d="M89.6548 178.601C87.8169 179.651 87.8169 181.423 89.6548 182.473L97.0062 186.74C98.8441 187.79 101.863 187.79 103.701 186.74L119.323 177.682C121.161 176.631 121.161 174.859 119.323 173.809L111.972 169.543C110.134 168.492 107.114 168.492 105.277 169.543L89.6548 178.601Z" fill="#CFDAE0"/>
                                        </g>
                                        <path id="Vector_167" d="M120.769 178.207V175.844C120.769 176.566 120.309 177.288 119.39 177.813L103.768 186.871C103.572 187.002 103.309 187.133 103.046 187.199C102.981 187.199 102.981 187.199 102.915 187.265C102.718 187.33 102.456 187.396 102.259 187.462C102.193 187.462 102.193 187.462 102.128 187.527C101.865 187.593 101.602 187.659 101.34 187.659C101.274 187.659 101.274 187.659 101.209 187.659C100.946 187.659 100.683 187.724 100.421 187.724C100.355 187.724 100.355 187.724 100.29 187.724C100.027 187.724 99.7645 187.724 99.502 187.659C99.4364 187.659 99.4364 187.659 99.3707 187.659C99.1738 187.659 98.9769 187.593 98.78 187.527C98.6487 187.462 98.4518 187.462 98.3205 187.396C98.1892 187.33 98.058 187.33 97.9923 187.265C97.6641 187.133 97.3359 187.002 97.0734 186.871L89.7219 182.604C89.5907 182.539 89.525 182.473 89.4594 182.408C89.3281 182.342 89.1968 182.276 89.1312 182.145C88.9999 182.014 88.8686 181.882 88.7374 181.751L88.6717 181.686C88.6061 181.554 88.4748 181.423 88.4748 181.226V181.16C88.4092 181.029 88.4092 180.832 88.4092 180.701V183.064C88.4092 183.064 88.4092 183.064 88.4092 183.13C88.4092 183.195 88.4092 183.326 88.4092 183.392C88.4092 183.458 88.4092 183.523 88.4748 183.589V183.655C88.4748 183.655 88.4748 183.655 88.4748 183.72C88.5405 183.786 88.5405 183.917 88.6061 183.983C88.6061 184.049 88.6717 184.048 88.6717 184.114L88.7374 184.18C88.7374 184.18 88.7374 184.245 88.803 184.245C88.8686 184.377 88.9999 184.442 89.0656 184.574C89.1312 184.639 89.2625 184.771 89.3937 184.836C89.4594 184.902 89.525 184.967 89.6563 185.033C89.6563 185.033 89.7219 185.033 89.7219 185.099L97.0734 189.365C97.3359 189.562 97.6641 189.693 97.9923 189.759C98.058 189.759 98.058 189.825 98.1236 189.825C98.1892 189.825 98.3205 189.89 98.3861 189.89C98.5174 189.956 98.7143 189.956 98.8456 190.022C98.9112 190.022 98.9769 190.022 99.0425 190.087C99.1738 190.087 99.3051 190.153 99.4363 190.153C99.502 190.153 99.502 190.153 99.5676 190.153H99.6333C99.8302 190.153 99.9615 190.153 100.158 190.218C100.224 190.218 100.29 190.218 100.355 190.218C100.421 190.218 100.421 190.218 100.487 190.218C100.552 190.218 100.552 190.218 100.618 190.218C100.749 190.218 100.946 190.218 101.077 190.218C101.143 190.218 101.209 190.218 101.274 190.218C101.34 190.218 101.34 190.218 101.405 190.218C101.471 190.218 101.537 190.218 101.602 190.218C101.734 190.218 101.931 190.153 102.062 190.153C102.128 190.153 102.127 190.153 102.193 190.153C102.259 190.153 102.259 190.153 102.324 190.087C102.39 190.087 102.456 190.022 102.587 190.022C102.718 189.956 102.85 189.956 102.981 189.89C103.046 189.89 103.046 189.89 103.112 189.825C103.112 189.825 103.112 189.825 103.178 189.825C103.44 189.759 103.637 189.628 103.834 189.496L119.456 180.438C120.309 179.585 120.769 178.929 120.769 178.207Z" fill="#91A4AC"/>
                                        </g>
                                        <g id="Group_39">
                                        <g id="Group_40">
                                        <path id="num6" d="M160.215 158.778C158.377 159.828 158.377 161.6 160.215 162.651L167.567 166.917C169.405 167.967 172.424 167.967 174.262 166.917L189.884 157.859C191.721 156.809 191.721 155.037 189.884 153.986L182.532 149.72C180.694 148.67 177.675 148.67 175.837 149.72L160.215 158.778Z" fill="#CFDAE0"/>
                                        </g>
                                        <path id="Vector_168" d="M173.473 167.311C173.276 167.376 173.014 167.442 172.817 167.508C172.751 167.508 172.751 167.508 172.685 167.573C172.423 167.639 172.16 167.705 171.898 167.705C171.832 167.705 171.832 167.705 171.766 167.705C171.504 167.705 171.241 167.77 170.979 167.77C170.913 167.77 170.913 167.77 170.847 167.77C170.585 167.77 170.322 167.77 170.06 167.705C169.994 167.705 169.994 167.705 169.929 167.705C169.732 167.705 169.535 167.639 169.338 167.573C169.207 167.508 169.01 167.508 168.878 167.442C168.747 167.376 168.616 167.376 168.55 167.311C168.222 167.18 167.894 167.048 167.631 166.917L160.28 162.651C160.148 162.585 160.083 162.519 159.952 162.454C159.82 162.388 159.689 162.322 159.623 162.191C159.492 162.06 159.361 161.928 159.23 161.797L159.164 161.732C159.098 161.6 158.967 161.469 158.967 161.272V161.206C158.901 161.075 158.901 160.878 158.901 160.747V163.11C158.901 163.11 158.901 163.11 158.901 163.176C158.901 163.241 158.901 163.372 158.901 163.438C158.901 163.504 158.901 163.569 158.967 163.635V163.701C158.967 163.701 158.967 163.701 158.967 163.766C159.033 163.832 159.033 163.963 159.098 164.029C159.098 164.095 159.164 164.095 159.164 164.16L159.23 164.226C159.23 164.226 159.23 164.291 159.295 164.291C159.361 164.423 159.492 164.488 159.558 164.62C159.623 164.685 159.755 164.751 159.886 164.882C159.952 164.948 160.017 165.013 160.149 165.079C160.149 165.079 160.214 165.079 160.214 165.145L167.566 169.411C167.828 169.608 168.156 169.739 168.484 169.805C168.55 169.805 168.55 169.871 168.616 169.871C168.681 169.871 168.813 169.936 168.878 169.936C169.01 170.002 169.207 170.002 169.338 170.068C169.403 170.068 169.469 170.068 169.535 170.133C169.666 170.133 169.797 170.199 169.929 170.199C169.994 170.199 169.994 170.199 170.06 170.199H170.125C170.322 170.199 170.454 170.199 170.651 170.264C170.716 170.264 170.782 170.264 170.847 170.264C170.913 170.264 170.913 170.264 170.979 170.264C171.044 170.264 171.044 170.264 171.11 170.264C171.241 170.264 171.438 170.264 171.569 170.264C171.635 170.264 171.701 170.264 171.766 170.264C171.832 170.264 171.832 170.264 171.898 170.264C171.963 170.264 172.029 170.264 172.095 170.264C172.226 170.264 172.423 170.199 172.554 170.199C172.62 170.199 172.62 170.199 172.685 170.199C172.751 170.199 172.751 170.199 172.817 170.133C172.882 170.133 172.948 170.068 173.079 170.068C173.21 170.002 173.342 170.002 173.473 169.936C173.539 169.936 173.539 169.936 173.604 169.871C173.604 169.871 173.604 169.871 173.67 169.871C173.932 169.805 174.129 169.674 174.326 169.542L189.948 160.484C190.867 159.959 191.326 159.237 191.326 158.515V156.152C191.326 156.481 191.195 156.874 190.998 157.203C190.736 157.531 190.408 157.859 189.948 158.121L174.326 167.18C174.129 167.311 173.867 167.442 173.604 167.508C173.539 167.311 173.473 167.311 173.473 167.311Z" fill="#91A4AC"/>
                                        </g>
                                        <g id="Group_41">
                                        <g id="Group_42">
                                        <path id="num5" d="M133.958 173.94C132.121 174.991 132.121 176.763 133.958 177.813L141.31 182.08C143.148 183.13 146.167 183.13 148.005 182.08L163.627 173.021C165.465 171.971 165.465 170.199 163.627 169.149L156.275 164.882C154.437 163.832 151.418 163.832 149.58 164.882L133.958 173.94Z" fill="#CFDAE0"/>
                                        </g>
                                        <path id="Vector_169" d="M165.071 173.48V171.117C165.071 171.446 164.939 171.839 164.742 172.168C164.48 172.496 164.152 172.824 163.692 173.087L148.07 182.145C147.873 182.276 147.611 182.407 147.348 182.473C147.283 182.473 147.283 182.473 147.217 182.538C147.02 182.604 146.758 182.67 146.561 182.735C146.495 182.735 146.495 182.735 146.429 182.801C146.167 182.867 145.904 182.932 145.642 182.932C145.576 182.932 145.576 182.932 145.511 182.932C145.248 182.932 144.985 182.998 144.723 182.998C144.657 182.998 144.657 182.998 144.592 182.998C144.329 182.998 144.066 182.998 143.804 182.932C143.738 182.932 143.738 182.932 143.673 182.932C143.476 182.932 143.279 182.867 143.082 182.801C142.951 182.735 142.754 182.735 142.622 182.67C142.491 182.604 142.36 182.604 142.294 182.538C141.966 182.407 141.638 182.276 141.375 182.145L134.024 177.878C133.893 177.812 133.827 177.747 133.696 177.681C133.564 177.616 133.433 177.55 133.368 177.419C133.236 177.287 133.105 177.156 132.974 177.025L132.908 176.959C132.842 176.828 132.711 176.697 132.711 176.5V176.434C132.646 176.303 132.646 176.106 132.646 175.975V178.338C132.646 178.338 132.646 178.338 132.646 178.403C132.646 178.469 132.646 178.6 132.646 178.666C132.646 178.731 132.646 178.797 132.711 178.863V178.928C132.711 178.928 132.711 178.928 132.711 178.994C132.777 179.06 132.777 179.191 132.842 179.257C132.842 179.322 132.908 179.322 132.908 179.388L132.974 179.453C132.974 179.453 132.974 179.519 133.039 179.519C133.105 179.65 133.236 179.716 133.302 179.847C133.368 179.913 133.499 179.979 133.63 180.11C133.696 180.175 133.761 180.241 133.893 180.307C133.893 180.307 133.958 180.307 133.958 180.372L141.31 184.639C141.572 184.836 141.9 184.967 142.229 185.033C142.294 185.033 142.294 185.098 142.36 185.098C142.426 185.098 142.557 185.164 142.622 185.164C142.754 185.23 142.951 185.23 143.082 185.295C143.148 185.295 143.213 185.295 143.279 185.361C143.41 185.361 143.541 185.426 143.673 185.426C143.738 185.426 143.738 185.426 143.804 185.426H143.87C144.066 185.426 144.198 185.427 144.395 185.492C144.46 185.492 144.526 185.492 144.592 185.492C144.657 185.492 144.657 185.492 144.723 185.492C144.789 185.492 144.789 185.492 144.854 185.492C144.985 185.492 145.182 185.492 145.314 185.492C145.379 185.492 145.445 185.492 145.511 185.492C145.576 185.492 145.576 185.492 145.642 185.492C145.707 185.492 145.773 185.492 145.839 185.492C145.97 185.492 146.167 185.426 146.298 185.426C146.364 185.426 146.364 185.426 146.429 185.426C146.495 185.426 146.495 185.427 146.561 185.361C146.626 185.361 146.692 185.295 146.823 185.295C146.955 185.23 147.086 185.23 147.217 185.164C147.283 185.164 147.283 185.164 147.348 185.098C147.348 185.098 147.348 185.098 147.414 185.098C147.677 185.033 147.873 184.901 148.07 184.77L163.692 175.712C164.611 174.924 165.071 174.202 165.071 173.48Z" fill="#91A4AC"/>
                                        </g>
                                        <g id="Group_43">
                                        <g id="Group_44">
                                        <path id="num4" d="M107.639 189.103C105.801 190.153 105.801 191.925 107.639 192.975L114.991 197.242C116.828 198.292 119.848 198.292 121.686 197.242L137.307 188.184C139.145 187.133 139.145 185.361 137.307 184.311L129.956 180.044C128.118 178.994 125.099 178.994 123.261 180.044L107.639 189.103Z" fill="#CFDAE0"/>
                                        </g>
                                        <path id="Vector_170" d="M138.817 188.643V186.28C138.817 187.002 138.357 187.724 137.438 188.249L121.817 197.307C121.62 197.438 121.357 197.569 121.094 197.635C121.029 197.635 121.029 197.635 120.963 197.701C120.766 197.766 120.504 197.832 120.307 197.898C120.241 197.898 120.241 197.898 120.176 197.963C119.913 198.029 119.65 198.095 119.388 198.095C119.322 198.095 119.322 198.095 119.257 198.095C118.994 198.095 118.732 198.16 118.469 198.16C118.403 198.16 118.403 198.16 118.338 198.16C118.075 198.16 117.813 198.16 117.55 198.095C117.484 198.095 117.484 198.095 117.419 198.095C117.222 198.095 117.025 198.029 116.828 197.963C116.697 197.898 116.5 197.898 116.369 197.832C116.237 197.766 116.106 197.766 116.04 197.701C115.712 197.569 115.384 197.438 115.121 197.307L107.77 193.04C107.639 192.975 107.573 192.909 107.442 192.844C107.311 192.778 107.179 192.712 107.114 192.581C106.982 192.45 106.851 192.318 106.72 192.187L106.654 192.122C106.589 191.99 106.457 191.859 106.457 191.662V191.596C106.392 191.465 106.392 191.268 106.392 191.137V193.5C106.392 193.5 106.392 193.5 106.392 193.566C106.392 193.631 106.392 193.762 106.392 193.828C106.392 193.894 106.392 193.959 106.457 194.025V194.091C106.457 194.091 106.457 194.091 106.457 194.156C106.523 194.222 106.523 194.353 106.589 194.419C106.589 194.484 106.654 194.484 106.654 194.55L106.72 194.616C106.72 194.616 106.72 194.681 106.785 194.681C106.851 194.813 106.982 194.878 107.048 195.01C107.114 195.075 107.245 195.141 107.376 195.272C107.442 195.338 107.507 195.403 107.639 195.469C107.639 195.469 107.704 195.469 107.704 195.535L115.056 199.801C115.318 199.998 115.647 200.129 115.975 200.195C116.04 200.195 116.04 200.261 116.106 200.261C116.172 200.261 116.303 200.326 116.369 200.326C116.5 200.392 116.697 200.392 116.828 200.458C116.894 200.458 116.959 200.458 117.025 200.523C117.156 200.523 117.287 200.589 117.419 200.589C117.484 200.589 117.484 200.589 117.55 200.589H117.616C117.813 200.589 117.944 200.589 118.141 200.654C118.206 200.654 118.272 200.654 118.338 200.654C118.403 200.654 118.403 200.654 118.469 200.654C118.535 200.654 118.535 200.654 118.6 200.654C118.732 200.654 118.928 200.654 119.06 200.654C119.125 200.654 119.191 200.654 119.257 200.654C119.322 200.654 119.322 200.654 119.388 200.654C119.454 200.654 119.519 200.654 119.585 200.654C119.716 200.654 119.913 200.589 120.044 200.589C120.11 200.589 120.11 200.589 120.176 200.589C120.241 200.589 120.241 200.589 120.307 200.523C120.372 200.523 120.438 200.458 120.569 200.458C120.701 200.392 120.832 200.392 120.963 200.326C121.029 200.326 121.029 200.326 121.094 200.261C121.094 200.261 121.094 200.261 121.16 200.261C121.423 200.195 121.62 200.064 121.817 199.932L137.438 190.874C138.292 190.087 138.817 189.365 138.817 188.643Z" fill="#91A4AC"/>
                                        </g>
                                        <g id="Group_45">
                                        <g id="Group_46">
                                        <path id="num9" d="M178.264 169.214C176.427 170.265 176.361 172.037 178.264 173.087L185.616 177.353C187.454 178.404 190.473 178.404 192.311 177.353L207.933 168.295C209.771 167.245 209.836 165.473 207.933 164.423L200.581 160.156C198.743 159.106 195.724 159.106 193.886 160.156L178.264 169.214Z" fill="#CFDAE0"/>
                                        </g>
                                        <path id="Vector_171" d="M191.458 177.747C191.261 177.813 190.999 177.879 190.802 177.944C190.736 177.944 190.736 177.944 190.67 178.01C190.408 178.076 190.145 178.141 189.883 178.141C189.817 178.141 189.817 178.141 189.752 178.141C189.489 178.141 189.226 178.207 188.964 178.207C188.898 178.207 188.898 178.207 188.833 178.207C188.57 178.207 188.308 178.207 188.045 178.141C187.979 178.141 187.979 178.141 187.914 178.141C187.717 178.141 187.52 178.076 187.323 178.01C187.192 177.944 186.995 177.944 186.863 177.879C186.732 177.813 186.601 177.813 186.535 177.747C186.207 177.616 185.879 177.485 185.616 177.353L178.265 173.087C178.134 173.021 178.068 172.956 178.002 172.89C177.871 172.824 177.74 172.759 177.674 172.628C177.543 172.496 177.412 172.365 177.28 172.234L177.215 172.168C177.149 172.037 177.018 171.906 177.018 171.709V171.643C176.952 171.512 176.952 171.315 176.952 171.184V173.546C176.952 173.546 176.952 173.546 176.952 173.612C176.952 173.678 176.952 173.809 176.952 173.875C176.952 173.94 176.952 174.006 177.018 174.072V174.137C177.018 174.137 177.018 174.137 177.018 174.203C177.083 174.269 177.083 174.4 177.149 174.465C177.149 174.531 177.215 174.531 177.215 174.597L177.28 174.662C177.28 174.662 177.28 174.728 177.346 174.728C177.412 174.859 177.543 174.925 177.609 175.056C177.674 175.122 177.805 175.253 177.937 175.319C178.002 175.384 178.068 175.45 178.199 175.516C178.199 175.516 178.265 175.516 178.265 175.581L185.616 179.782C185.879 179.979 186.207 180.11 186.535 180.176C186.601 180.176 186.601 180.242 186.667 180.242C186.732 180.242 186.863 180.307 186.929 180.307C187.06 180.373 187.257 180.373 187.389 180.438C187.454 180.438 187.52 180.438 187.585 180.504C187.717 180.504 187.848 180.57 187.979 180.57C188.045 180.57 188.045 180.57 188.111 180.57H188.176C188.373 180.57 188.504 180.57 188.701 180.635C188.767 180.635 188.833 180.635 188.898 180.635C188.964 180.635 188.964 180.635 189.03 180.635C189.095 180.635 189.095 180.635 189.161 180.635C189.292 180.635 189.489 180.635 189.62 180.635C189.686 180.635 189.752 180.635 189.817 180.635C189.883 180.635 189.883 180.635 189.948 180.635C190.014 180.635 190.08 180.635 190.145 180.635C190.277 180.635 190.474 180.57 190.605 180.57C190.67 180.57 190.67 180.57 190.736 180.57C190.802 180.57 190.802 180.57 190.867 180.504C190.933 180.504 190.999 180.438 191.13 180.438C191.261 180.373 191.392 180.373 191.524 180.307C191.589 180.307 191.589 180.307 191.655 180.242C191.655 180.242 191.655 180.242 191.721 180.242C191.983 180.176 192.18 180.045 192.377 179.913L207.999 170.855C208.918 170.33 209.377 169.608 209.377 168.886V166.523C209.377 167.245 208.918 167.967 207.999 168.492L192.377 177.55C192.18 177.682 191.918 177.813 191.655 177.879C191.524 177.747 191.524 177.747 191.458 177.747Z" fill="#91A4AC"/>
                                        </g>
                                        <g id="Group_47">
                                        <g id="Group_48">
                                        <path id="num8" d="M151.944 184.377C150.106 185.427 150.041 187.199 151.944 188.25L159.296 192.516C161.133 193.566 164.153 193.566 165.991 192.516L181.612 183.458C183.45 182.408 183.516 180.636 181.612 179.585L174.261 175.319C172.423 174.269 169.404 174.269 167.566 175.319L151.944 184.377Z" fill="#CFDAE0"/>
                                        </g>
                                        <path id="Vector_172" d="M150.894 187.396L150.828 187.33C150.762 187.199 150.631 187.068 150.631 186.871V186.805C150.565 186.674 150.565 186.477 150.565 186.346V188.709C150.565 188.709 150.565 188.709 150.565 188.774C150.565 188.84 150.565 188.971 150.565 189.037C150.565 189.103 150.565 189.168 150.631 189.234V189.3C150.631 189.3 150.631 189.3 150.631 189.365C150.697 189.431 150.697 189.562 150.762 189.628C150.762 189.693 150.828 189.693 150.828 189.759L150.894 189.825C150.894 189.825 150.894 189.89 150.959 189.89C151.025 190.022 151.156 190.087 151.222 190.219C151.287 190.284 151.419 190.415 151.55 190.481C151.616 190.547 151.681 190.612 151.813 190.678C151.813 190.678 151.878 190.678 151.878 190.744L159.23 195.01C159.492 195.207 159.82 195.338 160.149 195.404C160.214 195.404 160.214 195.47 160.28 195.47C160.345 195.47 160.477 195.535 160.542 195.535C160.674 195.601 160.871 195.601 161.002 195.666C161.067 195.666 161.133 195.666 161.199 195.732C161.33 195.732 161.461 195.798 161.593 195.798C161.658 195.798 161.658 195.798 161.724 195.798H161.79C161.986 195.798 162.118 195.798 162.315 195.863C162.38 195.863 162.446 195.863 162.512 195.863C162.577 195.863 162.577 195.863 162.643 195.863C162.708 195.863 162.708 195.863 162.774 195.863C162.905 195.863 163.102 195.863 163.234 195.863C163.299 195.863 163.365 195.863 163.43 195.863C163.496 195.863 163.496 195.863 163.562 195.863C163.627 195.863 163.693 195.863 163.759 195.863C163.89 195.863 164.087 195.798 164.218 195.798C164.284 195.798 164.284 195.798 164.349 195.798C164.415 195.798 164.415 195.798 164.481 195.732C164.546 195.732 164.612 195.666 164.743 195.666C164.874 195.601 165.006 195.601 165.137 195.535C165.203 195.535 165.203 195.535 165.268 195.47C165.268 195.47 165.268 195.47 165.334 195.47C165.596 195.404 165.793 195.273 165.99 195.141L181.612 186.083C182.531 185.558 182.991 184.836 182.991 184.114V181.751C182.991 182.473 182.531 183.195 181.612 183.72L165.99 192.778C165.793 192.91 165.531 193.041 165.268 193.107C165.203 193.107 165.203 193.107 165.137 193.172C164.94 193.238 164.678 193.303 164.481 193.369C164.415 193.369 164.415 193.369 164.349 193.435C164.087 193.5 163.824 193.566 163.562 193.566C163.496 193.566 163.496 193.566 163.43 193.566C163.168 193.566 162.905 193.632 162.643 193.632C162.577 193.632 162.577 193.632 162.512 193.632C162.249 193.632 161.986 193.632 161.724 193.566C161.658 193.566 161.658 193.566 161.593 193.566C161.396 193.566 161.199 193.5 161.002 193.435C160.871 193.369 160.674 193.369 160.542 193.303C160.411 193.238 160.28 193.238 160.214 193.172C159.886 193.041 159.558 192.91 159.295 192.778L151.944 188.512C151.813 188.446 151.747 188.381 151.681 188.315C151.55 188.249 151.419 188.184 151.353 188.052C151.156 187.724 151.025 187.593 150.894 187.396Z" fill="#91A4AC"/>
                                        </g>
                                        <g id="Group_49">
                                        <g id="Group_50">
                                        <path id="num7" d="M125.688 199.604C123.85 200.655 123.785 202.427 125.688 203.477L133.04 207.744C134.878 208.794 137.897 208.794 139.735 207.744L155.357 198.686C157.194 197.635 157.26 195.863 155.357 194.813L148.005 190.546C146.167 189.496 143.148 189.496 141.31 190.546L125.688 199.604Z" fill="#CFDAE0"/>
                                        </g>
                                        <path id="Vector_173" d="M156.801 199.145V196.782C156.801 197.504 156.341 198.226 155.422 198.751L139.801 207.809C139.604 207.94 139.341 208.072 139.079 208.137C139.013 208.137 139.013 208.137 138.947 208.203C138.75 208.269 138.488 208.334 138.291 208.4C138.225 208.4 138.225 208.4 138.16 208.466C137.897 208.531 137.635 208.597 137.372 208.597C137.306 208.597 137.306 208.597 137.241 208.597C136.978 208.597 136.716 208.662 136.453 208.662C136.387 208.662 136.387 208.662 136.322 208.662C136.059 208.662 135.797 208.662 135.534 208.597C135.469 208.597 135.469 208.597 135.403 208.597C135.206 208.597 135.009 208.531 134.812 208.466C134.681 208.4 134.484 208.4 134.353 208.334C134.221 208.269 134.09 208.269 134.025 208.203C133.696 208.072 133.368 207.94 133.106 207.809L125.754 203.543C125.623 203.477 125.557 203.411 125.492 203.346C125.36 203.28 125.229 203.214 125.163 203.083C125.032 202.952 124.901 202.821 124.77 202.689L124.704 202.624C124.638 202.492 124.507 202.361 124.507 202.164V202.099C124.441 201.967 124.441 201.77 124.441 201.639V204.002C124.441 204.002 124.441 204.002 124.441 204.068C124.441 204.133 124.441 204.265 124.441 204.33C124.441 204.396 124.441 204.462 124.507 204.527V204.593C124.507 204.593 124.507 204.593 124.507 204.659C124.573 204.724 124.573 204.855 124.638 204.921C124.638 204.987 124.704 204.987 124.704 205.052L124.77 205.118C124.77 205.118 124.77 205.184 124.835 205.184C124.901 205.315 125.032 205.381 125.098 205.512C125.163 205.577 125.295 205.709 125.426 205.774C125.492 205.84 125.557 205.906 125.689 205.971C125.689 205.971 125.754 205.971 125.754 206.037L133.106 210.303C133.368 210.5 133.696 210.632 134.025 210.697C134.09 210.697 134.09 210.763 134.156 210.763C134.221 210.763 134.353 210.828 134.418 210.828C134.55 210.894 134.747 210.894 134.878 210.96C134.943 210.96 135.009 210.96 135.075 211.025C135.206 211.025 135.337 211.091 135.469 211.091C135.534 211.091 135.534 211.091 135.6 211.091H135.665C135.862 211.091 135.994 211.091 136.191 211.157C136.256 211.157 136.322 211.157 136.387 211.157C136.453 211.157 136.453 211.157 136.519 211.157C136.584 211.157 136.584 211.157 136.65 211.157C136.781 211.157 136.978 211.157 137.11 211.157C137.175 211.157 137.241 211.157 137.306 211.157C137.372 211.157 137.372 211.157 137.438 211.157C137.503 211.157 137.569 211.157 137.635 211.157C137.766 211.157 137.963 211.091 138.094 211.091C138.16 211.091 138.16 211.091 138.225 211.091C138.291 211.091 138.291 211.091 138.357 211.025C138.422 211.025 138.488 210.96 138.619 210.96C138.75 210.894 138.882 210.894 139.013 210.828C139.079 210.828 139.079 210.828 139.144 210.763C139.144 210.763 139.144 210.763 139.21 210.763C139.472 210.697 139.669 210.566 139.866 210.435L155.488 201.377C156.341 200.523 156.801 199.867 156.801 199.145Z" fill="#91A4AC"/>
                                        </g>
                                        <g id="Group_51">
                                        <g id="Group_52">
                                        <g id="Group_53">
                                        <path id="Vector_174" d="M225.984 178.863V181.226C226.903 180.701 227.363 179.979 227.363 179.257V176.894C227.363 177.616 226.903 178.272 225.984 178.863Z" fill="#108040"/>
                                        </g>
                                        </g>
                                        <g id="Group_54">
                                        <path id="tap-btn" d="M196.25 179.716C194.413 180.767 194.413 182.539 196.25 183.589L203.602 187.855C205.44 188.906 208.459 188.906 210.297 187.855L225.919 178.797C227.757 177.747 227.757 175.975 225.919 174.925L218.567 170.658C216.729 169.608 213.71 169.608 211.872 170.658L196.25 179.716Z" fill="#4DB748"/>
                                        </g>
                                        <path id="Vector_175" d="M225.984 178.863L210.362 187.921C210.165 188.052 209.903 188.183 209.64 188.249C209.575 188.249 209.575 188.249 209.509 188.315C209.312 188.38 209.049 188.446 208.853 188.512C208.787 188.512 208.787 188.512 208.721 188.577C208.459 188.643 208.196 188.708 207.934 188.708C207.868 188.708 207.868 188.708 207.802 188.708C207.54 188.708 207.277 188.774 207.015 188.774C206.949 188.774 206.949 188.774 206.883 188.774C206.621 188.774 206.358 188.774 206.096 188.708C206.03 188.708 206.03 188.708 205.964 188.708C205.768 188.708 205.571 188.643 205.374 188.577C205.242 188.512 205.046 188.512 204.914 188.446C204.783 188.38 204.652 188.38 204.586 188.315C204.258 188.183 203.93 188.052 203.667 187.921L196.316 183.654C196.184 183.589 196.119 183.523 196.053 183.457C195.922 183.392 195.791 183.326 195.725 183.195C195.594 183.064 195.462 182.932 195.331 182.801L195.265 182.735C195.2 182.604 195.069 182.473 195.069 182.276V182.21C195.003 182.079 195.003 181.882 195.003 181.751V184.114C195.003 184.114 195.003 184.114 195.003 184.179C195.003 184.245 195.003 184.376 195.003 184.442C195.003 184.508 195.003 184.573 195.069 184.639V184.705C195.069 184.705 195.069 184.705 195.069 184.77C195.134 184.836 195.134 184.967 195.2 185.033C195.2 185.098 195.265 185.098 195.265 185.164L195.331 185.23C195.331 185.23 195.331 185.295 195.397 185.295C195.462 185.427 195.594 185.492 195.659 185.624C195.725 185.689 195.856 185.82 195.987 185.886C196.053 185.952 196.119 186.017 196.25 186.083C196.25 186.083 196.316 186.083 196.316 186.149L203.667 190.415C203.93 190.612 204.258 190.743 204.586 190.809C204.652 190.809 204.652 190.875 204.717 190.875C204.783 190.875 204.914 190.94 204.98 190.94C205.111 191.006 205.308 191.006 205.439 191.071C205.505 191.071 205.571 191.071 205.636 191.137C205.768 191.137 205.899 191.203 206.03 191.203C206.096 191.203 206.096 191.203 206.161 191.203H206.227C206.424 191.203 206.555 191.203 206.752 191.268C206.818 191.268 206.883 191.268 206.949 191.268C207.015 191.268 207.015 191.268 207.08 191.268C207.146 191.268 207.146 191.268 207.212 191.268C207.343 191.268 207.54 191.268 207.671 191.268C207.737 191.268 207.802 191.268 207.868 191.268C207.934 191.268 207.934 191.268 207.999 191.268C208.065 191.268 208.131 191.268 208.196 191.268C208.327 191.268 208.524 191.203 208.656 191.203C208.721 191.203 208.721 191.203 208.787 191.203C208.853 191.203 208.853 191.203 208.918 191.137C208.984 191.137 209.049 191.071 209.181 191.071C209.312 191.006 209.443 191.006 209.575 190.94C209.64 190.94 209.64 190.94 209.706 190.875C209.706 190.875 209.706 190.875 209.771 190.875C210.034 190.809 210.231 190.678 210.428 190.546L226.05 181.488L225.984 178.863Z" fill="#108040"/>
                                        </g>
                                        <g id="Group_55">
                                        <g id="Group_56">
                                        <path id="Vector_176" d="M169.995 194.879C168.157 195.929 168.157 197.701 169.995 198.751L177.346 203.018C179.184 204.068 182.203 204.068 184.041 203.018L199.663 193.96C201.501 192.909 201.501 191.137 199.663 190.087L192.311 185.821C190.474 184.77 187.454 184.77 185.616 185.821L169.995 194.879Z" fill="#FDD836"/>
                                        </g>
                                        <path id="Vector_177" d="M199.664 194.025L184.042 203.083C183.845 203.215 183.583 203.346 183.32 203.411C183.254 203.411 183.254 203.411 183.189 203.477C182.992 203.543 182.729 203.608 182.532 203.674C182.467 203.674 182.467 203.674 182.401 203.74C182.139 203.805 181.876 203.871 181.613 203.871C181.548 203.871 181.548 203.871 181.482 203.871C181.22 203.871 180.957 203.937 180.695 203.937C180.629 203.937 180.629 203.937 180.563 203.937C180.301 203.937 180.038 203.937 179.776 203.871C179.71 203.871 179.71 203.871 179.644 203.871C179.447 203.871 179.251 203.805 179.054 203.74C178.922 203.674 178.725 203.674 178.594 203.608C178.463 203.543 178.332 203.543 178.266 203.477C177.938 203.346 177.61 203.215 177.347 203.083L169.996 198.817C169.864 198.751 169.799 198.686 169.667 198.62C169.536 198.554 169.405 198.489 169.339 198.357C169.208 198.226 169.077 198.095 168.945 197.963L168.88 197.898C168.814 197.767 168.683 197.635 168.683 197.438V197.373C168.617 197.241 168.617 197.045 168.617 196.913V199.276C168.617 199.276 168.617 199.276 168.617 199.342C168.617 199.408 168.617 199.539 168.617 199.604C168.617 199.67 168.617 199.736 168.683 199.801V199.867C168.683 199.867 168.683 199.867 168.683 199.933C168.748 199.998 168.748 200.13 168.814 200.195C168.814 200.261 168.88 200.261 168.88 200.326L168.945 200.392C168.945 200.392 168.945 200.458 169.011 200.458C169.077 200.589 169.208 200.655 169.274 200.786C169.339 200.852 169.47 200.983 169.602 201.048C169.667 201.114 169.733 201.18 169.864 201.245C169.864 201.245 169.93 201.245 169.93 201.311L177.281 205.577C177.544 205.774 177.872 205.906 178.2 205.971C178.266 205.971 178.266 206.037 178.332 206.037C178.397 206.037 178.528 206.103 178.594 206.103C178.725 206.168 178.922 206.168 179.054 206.234C179.119 206.234 179.185 206.234 179.251 206.3C179.382 206.3 179.513 206.365 179.644 206.365C179.71 206.365 179.71 206.365 179.776 206.365H179.841C180.038 206.365 180.169 206.365 180.366 206.431C180.432 206.431 180.498 206.431 180.563 206.431C180.629 206.431 180.629 206.431 180.695 206.431C180.76 206.431 180.76 206.431 180.826 206.431C180.957 206.431 181.154 206.431 181.285 206.431C181.351 206.431 181.417 206.431 181.482 206.431C181.548 206.431 181.548 206.431 181.613 206.431C181.679 206.431 181.745 206.431 181.81 206.431C181.942 206.431 182.139 206.365 182.27 206.365C182.336 206.365 182.336 206.365 182.401 206.365C182.467 206.365 182.467 206.365 182.532 206.3C182.598 206.3 182.664 206.234 182.795 206.234C182.926 206.168 183.058 206.168 183.189 206.103C183.254 206.103 183.254 206.103 183.32 206.037C183.32 206.037 183.32 206.037 183.386 206.037C183.648 205.971 183.845 205.84 184.042 205.709L199.664 196.651C200.583 196.126 201.042 195.404 201.042 194.682V192.319C201.108 192.778 200.648 193.5 199.664 194.025Z" fill="#F8A725"/>
                                        </g>
                                        <g id="Group_57">
                                        <g id="Group_58">
                                        <path id="Vector_178" d="M143.674 210.041C141.836 211.091 141.836 212.863 143.674 213.914L151.026 218.18C152.864 219.23 155.883 219.23 157.721 218.18L173.343 209.122C175.18 208.072 175.18 206.3 173.343 205.249L165.991 200.983C164.153 199.933 161.134 199.933 159.296 200.983L143.674 210.041Z" fill="#E64E3D"/>
                                        </g>
                                        <path id="Vector_179" d="M174.787 207.219C174.787 207.744 174.525 208.269 174 208.728C173.803 208.859 173.606 209.056 173.409 209.188L157.787 218.246C157.59 218.377 157.328 218.508 157.065 218.574C156.999 218.574 156.999 218.574 156.934 218.64C156.737 218.705 156.474 218.771 156.277 218.836C156.212 218.836 156.212 218.836 156.146 218.902C155.883 218.968 155.621 219.033 155.358 219.033C155.293 219.033 155.293 219.033 155.227 219.033C154.965 219.033 154.702 219.099 154.439 219.099C154.374 219.099 154.374 219.099 154.308 219.099C154.046 219.099 153.783 219.099 153.521 219.033C153.455 219.033 153.455 219.033 153.389 219.033C153.192 219.033 152.995 218.968 152.799 218.902C152.667 218.836 152.47 218.836 152.339 218.771C152.208 218.705 152.076 218.705 152.011 218.64C151.683 218.508 151.354 218.377 151.092 218.246L143.74 213.979C143.609 213.914 143.544 213.848 143.478 213.782C143.347 213.717 143.215 213.651 143.15 213.52C143.018 213.388 142.887 213.257 142.756 213.126L142.69 213.06C142.625 212.929 142.493 212.798 142.493 212.601V212.535C142.428 212.404 142.428 212.207 142.428 212.076V214.439C142.428 214.439 142.428 214.439 142.428 214.504C142.428 214.57 142.428 214.701 142.428 214.767C142.428 214.832 142.428 214.898 142.493 214.964V215.029C142.493 215.029 142.493 215.029 142.493 215.095C142.559 215.161 142.559 215.292 142.625 215.358C142.625 215.423 142.69 215.423 142.69 215.489L142.756 215.555C142.756 215.555 142.756 215.62 142.822 215.62C142.887 215.751 143.018 215.817 143.084 215.948C143.15 216.014 143.281 216.145 143.412 216.211C143.478 216.277 143.544 216.342 143.675 216.408C143.675 216.408 143.74 216.408 143.74 216.473L151.092 220.74C151.354 220.937 151.683 221.068 152.011 221.134C152.076 221.134 152.076 221.199 152.142 221.199C152.208 221.199 152.339 221.265 152.405 221.265C152.536 221.331 152.733 221.331 152.864 221.396C152.93 221.396 152.995 221.396 153.061 221.462C153.192 221.462 153.324 221.528 153.455 221.528C153.521 221.528 153.521 221.528 153.586 221.528H153.652C153.849 221.528 153.98 221.528 154.177 221.593C154.243 221.593 154.308 221.593 154.374 221.593C154.439 221.593 154.439 221.593 154.505 221.593C154.571 221.593 154.571 221.593 154.636 221.593C154.768 221.593 154.965 221.593 155.096 221.593C155.161 221.593 155.227 221.593 155.293 221.593C155.358 221.593 155.358 221.593 155.424 221.593C155.49 221.593 155.555 221.593 155.621 221.593C155.752 221.593 155.949 221.528 156.08 221.528C156.146 221.528 156.146 221.528 156.212 221.528C156.277 221.528 156.277 221.528 156.343 221.462C156.409 221.462 156.474 221.396 156.606 221.396C156.737 221.331 156.868 221.331 156.999 221.265C157.065 221.265 157.065 221.265 157.131 221.199C157.131 221.199 157.131 221.199 157.196 221.199C157.459 221.134 157.656 221.002 157.853 220.871L173.474 211.813C174.393 211.288 174.853 210.566 174.853 209.844L174.787 207.219Z" fill="#C32127"/>
                                        </g>
                                        </g>
                                        <path id="Vector_180" d="M259.854 213.06V199.408L261.166 198.489V212.207L259.854 213.06Z" fill="#455A66"/>
                                        </g>
                                        <g id="arrow">
                                        <g id="Group_59">
                                        <g id="Group_60">
                                        <path id="Vector_181" d="M150.105 1.37842L152.468 0L206.16 30.9811L203.797 32.3595L150.105 1.37842Z" fill="#079046"/>
                                        </g>
                                        <g id="arrow-color">
                                        <path id="arrow-color1" d="M203.797 26.1895L217.253 48.1782L203.732 54.6107V48.3751L150.04 17.394L150.106 1.37842L203.797 32.3595V26.1895Z" fill="#2EF72A"/>
                                        </g>
                                        <g id="Group_61">
                                        <path id="Vector_182" d="M203.798 26.1897L206.161 24.8113L219.617 46.8L217.254 48.1784L203.798 26.1897Z" fill="#1C9C48"/>
                                        </g>
                                        </g>
                                        </g>
                                        <path id="success-tick" d="M100.4 144.093C100.357 144.136 100.313 144.178 100.268 144.219C99.8701 144.58 99.3991 144.851 98.887 145.013C98.3749 145.174 97.8338 145.224 97.3009 145.157L88.891 144.106C87.9104 143.982 87.019 143.474 86.4122 142.694C85.8054 141.914 85.5329 140.925 85.6543 139.944L85.6836 139.709C85.8073 138.728 86.315 137.837 87.0951 137.23C87.8752 136.623 88.8641 136.351 89.845 136.472C90.319 136.531 90.8002 136.487 91.2557 136.344C91.7112 136.2 92.1302 135.959 92.484 135.638C92.8378 135.317 93.1181 134.923 93.3057 134.484C93.4933 134.045 93.5838 133.57 93.5709 133.093L93.1555 117.735C93.1423 117.246 93.2255 116.759 93.4006 116.302C93.5757 115.844 93.8391 115.426 94.1758 115.071C94.5125 114.715 94.9159 114.43 95.363 114.23C95.81 114.031 96.292 113.921 96.7814 113.908L97.019 113.902C98.0072 113.875 98.9656 114.242 99.6833 114.922C100.401 115.602 100.819 116.539 100.846 117.528L101.49 141.357C101.503 141.863 101.414 142.367 101.227 142.837C101.039 143.308 100.758 143.735 100.4 144.093V144.093Z" fill="white"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0">
                                        <rect width="319" height="290.776" fill="white" transform="translate(0.320312)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>                 
                                </div>`;
                return div;
            }
        }
    }
}
        function createPaymentField(TotalPrice){
        var paymentField = document.createElement('div');
        paymentField.classList.add('privacy__type-pay-select-wrap');
        var innerPayment = 
                    `<div class="pvc__tp-select credit-payment">
                    <div class="tp-select">
                        <div class="tp-select__item active" data-index="0">
                            <div class="tp-select__item-icon"><i class="far fa-credit-card"></i></div>
                            <div class="tp-select__item-title">Thẻ tín dụng</div>
                        </div>
                        <div class="tp-select__item" data-index="1">
                            <div class="tp-select__item-icon"><i class="fas fa-money-check-alt"></i></div>
                            <div class="tp-select__item-title">Thẻ ngân hàng</div>
                        </div>
                        <div class="tp-select__item" data-index="2">
                            <div class="tp-select__item-icon"><i class="fas fa-money-bill-wave"></i></div>
                            <div class="tp-select__item-title">Thanh toán trực tiếp</div>
                        </div>
                    </div>
                    <div class="tab credit-card-payment active">
                        <div class="tp-form">
                            <div class="cr-card-all-icon">
                                <div class="cr-card__icon-item">
                                    <input type="radio" name="item" id="item" checked>
                                    <label for="item"><img src="./img/color-span/visa.png" alt=""></label>
                                </div>
                                <div class="cr-card__icon-item">
                                    <input type="radio" name="item" id="item2">
                                    <label for="item2"><img src="./img/color-span/master-card.svg" alt=""></label>
                                    
                                </div>
                                <div class="cr-card__icon-item">
                                    <input type="radio" name="item" id="item3">
                                    <label for="item3"><img src="./img/color-span/jcb.jpg" alt=""></label>
                                </div>
                            </div>
                            <div class="tp-form__credit-cardinput user-name">
                                <h4>Tên người dùng</h4>
                                <input type="text" class="cr-input cr-all" placeholder="Tên người dùng">
                            </div>
                            <div class="tp-form__credit-cardinput num-phone">
                                <h4>Số tài khoản</h4>
                                <input type="tel" name="phone" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" class="cr-input cr-all" placeholder="Vd: XXXX XXXX XXXX XXXX"> 
                            </div>
                            <div class="tp-form__credit-cardinput date-input">
                                <div class="cr-cardinput__date-wrap">
                                    <h4>Ngày cấp</h4>
                                    <div class="cr-card__date">
                                        <input type="number" class="cr-card-user cr-all" placeholder="Ngày">
                                        <input type="number" class="cr-card-user cr-all" placeholder="Tháng">
                                    </div>
                                </div>
                                <div class="cr-cardinput__CCV">
                                    <div class="ccv-field-wrap">
                                        <div class="CCV-wrap">
                                            <h4>CCV</h4>
                                            <div class="CCV-icon">
                                                <i class=" fas fa-question-circle"></i>
                                            </div>    
                                            <div class="CCV-note">
                                                <p>3 ký tự chữ số cuối cùng của thẻ</p>
                                            </div>
                                        </div>
                                        <input type="number" class="ccv-input cr-all" placeholder="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tp-form__confirm-payment confirm-btn">
                            <button data-index="0">Xác nhận thanh toán</button>
                        </div>
                        <div class="back-btn" ><span><i class="fa fa-chevron-left"></i>Trở Lại</span></div>
                    </div>
                    <div class="tab bank-payment">
                        <div class="bank-pay__wrap">
                            <h4>Chọn ngân hàng</h4>
                            <select class="cr-all">
                                <option value="" selected>Vui lòng chọn ngân hàng thanh toán</option>
                                <option value="Ngân hàng A">Ngân hàng A</option>
                                <option value="Ngân hàng B">Ngân hàng B</option>
                                <option value="Ngân hàng C">Ngân hàng C</option>
                                <option value="Ngân hàng D">Ngân hàng D</option>
                                <option value="Ngân hàng E">Ngân hàng E</option>
                            </select>
                            <div class="tp-form__credit-cardinput user-name">
                                <h4>Tên người dùng</h4>
                                <input type="text" class="cr-input cr-all" placeholder="Tên người dùng">
                            </div>
                            <div class="tp-form__credit-cardinput num-phone">
                                <h4>Số tài khoản</h4>
                                <input type="tel" name="phone" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" class="cr-input cr-all" placeholder="Vd: XXXX XXXX XXXX XXXX"> 
                            </div>
                            <div class="bank-payment confirm-btn">
                                <button class="cr-all bank-btn-pay" data-index="1">
                                    <i class="fas fa-money-check-alt"></i>
                                    Xác nhận thanh toán
                                </button>
                            </div>
                            <p>Note: After clicking on the button,
                            you will be directed to a secure gateway for payment. 
                            After completing the payment process, you will be redirected back to the website to view details of your order.</p>
                        </div>
                        <div class="back-btn" ><span><i class="fa fa-chevron-left"></i>Trở Lại</span></div>
                    </div>
                    <div class="tab direct-payment">
                        <div class="cr-dr___type-ship">
                            <h4>Chọn dịch vụ giao hàng</h4>
                            <div class="cr-card-all-icon">
                                <div class="cr-card__icon-item">
                                    <input type="radio" name="ship" id="ship" checked>
                                    <label for="ship"><i class="fas fa-shipping-fast"></i></label>
                                </div>
                                <div class="cr-card__icon-item">
                                    <input type="radio" name="ship" id="ship2">
                                    <label for="ship2"><i class="fas fa-shipping-fast"></i></label>
                                    
                                </div>
                                <div class="cr-card__icon-item">
                                    <input type="radio" name="ship" id="ship3">
                                    <label for="ship3"><i class="fas fa-shipping-fast"></i></label>
                                </div>
                            </div>
                        </div>
                        <div class="cr-dr__user-info">
                            <h4>Thông tin khách hàng</h4>
                            <div class="cr-dr__sex-select">
                                <div class="sex-select__item">
                                    <input type="radio" name="sex" id="sex1">
                                    <label for="sex1">Anh</label>
                                </div>
                                <div class="sex-select__item">
                                    <input type="radio" name="sex" id="sex2">
                                    <label for="sex2">Chị</label>
                                </div>
                            </div>
                            <div class="cr-dr__info">
                                <input type="text" class="cr-dr-input cr-all" placeholder="Họ tên khách hàng">
                                <input type="text" class="cr-dr-input cr-all" placeholder="Số điện thoại">
                            </div>
                            <div class="cr-dr__address">
                                <h4>Địa chỉ giao hàng</h4>
                                <div class="cr-dr__address__wrap">
                                    <select class="address-select cr-all">
                                        <option value="" selected>Thành phố</option>
                                        <option value="">Thành phố A</option>
                                        <option value="">Thành phố B</option>
                                        <option value="">Thành phố C</option>
                                        <option value="">Thành phố D</option>
                                        <option value="">Thành phố E</option>
                                    </select>
                                    <select class="address-select cr-all">
                                        <option value="" selected>Quận / huyện</option>
                                        <option value="">dasdasd A</option>
                                        <option value="">dasdasd B</option>
                                        <option value="">dasdasd C</option>
                                        <option value="">dasdasd D</option>
                                        <option value="">dasdasd E</option>
                                    </select>
                                    <select class="address-select cr-all">
                                        <option value="" selected>Phường / Xã</option>
                                        <option value="">Ngân hàng A</option>
                                        <option value="">Ngân hàng B</option>
                                        <option value="">Ngân hàng C</option>
                                        <option value="">Ngân hàng D</option>
                                        <option value="">Ngân hàng E</option>
                                    </select>
                                    <input type="text" class="address-select cr-all" placeholder="Số nhà, tên đường...">
                                </div>
                            </div>
                            <div class="cr-dr__more">
                                <h4>Yêu cầu khác</h4>
                                <input type="text" class="cr-more cr-all" placeholder="Yêu cầu khác( không bắt buộc )">
                            </div>
                            <div class="cr-dr__total">
                                <div class="total-title"><span><b>Tổng tiền:</b> ${TotalPrice}</span></div>
                                <div class="tp-form__confirm-payment confirm-btn">
                                    <button data-index="2">Xác nhận thanh toán</button>
                                </div>
                                <div class="back-btn" ><span><i class="fa fa-chevron-left"></i>Trở Lại</span></div>
                            </div>`;
        paymentField.innerHTML = innerPayment;
        return paymentField;
        }

showPaymentField();





const tabPayment = function (){
    var buttonPayment = document.querySelectorAll('.tp-select__item');

    for(var i = 0; i < buttonPayment.length; i++){
        buttonPayment[i].onclick = function(e){
            var thisButton = e.currentTarget;
            var Index = thisButton.getAttribute('data-index');
            changeColorActive(thisButton);
            changeTab(Index);
            // activeConfirmPayButton(Index);
        }
    }
    function changeColorActive(thisButton){
        for(var j = 0; j < buttonPayment.length; j++){
            buttonPayment[j].classList.remove('active');
        }
        thisButton.classList.add('active');
    }
    function changeTab(Index){
        var tab = document.querySelectorAll('.credit-payment .tab');
        for(var i = 0; i < tab.length; i++){
            tab[i].classList.remove('active');
        }
        tab[Index].classList.add('active');
    }
    
}














                    