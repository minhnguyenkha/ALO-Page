



var popIn = function(){
    const btnAdd = document.querySelectorAll('.btnAdd');
    for(let i = 0; i < btnAdd.length; i++){
        btnAdd[i].addEventListener('click', function(){
            pushIt(i);
        });
    }
    function pushIt(i){
        var item = document.querySelectorAll('div.item')[i];
        var img = item.querySelector('a > img').getAttribute('src');
        var name = item.querySelector('a > h1').value;
        var price = item.querySelector('a > p').value;

        var cartItem = function(img, name, price){
            var itemWrap = document.createElement('div');
            itemWrap.classList.add('cart-item');
            itemWrap.innerHTML = 
                `<div class = "col-20">
                    <img src = "${src}"></img> 
                </div>
                <div class = "col-20">
                    <p>Name:</p>
                    <span>${name}</span> 
                </div>
                <div class = "col-20">
                    <p>Price:</p>
                    <span>${price}</span>
                </div>
                <div class = "col-20">
                   <input type = "button" value = "delete">
                </div>
                `;
            return itemWrap;
        }(img, name, price);

        document.querySelector('.cart-items').prepend(cartItem);

    }
}();