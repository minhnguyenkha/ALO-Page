var filterBtn = document.querySelector('.filterNav .filter__fbtn');
var filterIcon = filterBtn.querySelector('i')
var List = document.querySelector('.Product__list');
var filterTab = document.querySelector('.Product__filter');


filterBtn.addEventListener('click', function(event){
    List.classList.toggle('fluid');
    filterTab.classList.toggle('show');
    filterIcon.classList.toggle('change');
    if(filterTab.classList.contains('show')){
        filterFunction();
    }
})

function increaseSortByDataAttr(list){
    // list la Array thuan tuy
    return list.sort(function(a, b) {
        return a.dataset.price - b.dataset.price;
    });
}
function decreaseSortByDataAttr(list){
    return list.sort(function(a, b) {
        return b.dataset.price - a.dataset.price;
    });
}

function pushItemIntoParent(item, parent){
    parent.appendChild(item);
}
function increaseSort(){
    var priceProductWrap = document.querySelector('.Product__list');
    var priceProduct = document.querySelectorAll('.Product-items__content .Product-items__price span'); // nodeList array
    var priceProductArray = Array.from(priceProduct); // de su dung sort method 
    increaseSortByDataAttr(priceProductArray);
    for(var a = 0; a < priceProductArray.length; a++){
        var priceProductItem = priceProductArray[a].parentNode.parentNode.parentNode.parentNode;
        pushItemIntoParent(priceProductItem, priceProductWrap);
    }
}   
function decreaseSort(){
    var priceProductWrap = document.querySelector('.Product__list');
    var priceProduct = document.querySelectorAll('.Product-items__content .Product-items__price span'); // nodeList array
    var priceProductArray = Array.from(priceProduct);
    decreaseSortByDataAttr(priceProductArray);
    for(var a = 0; a < priceProductArray.length; a++){
        var priceProductItem = priceProductArray[a].parentNode.parentNode.parentNode.parentNode;
        pushItemIntoParent(priceProductItem, priceProductWrap);
    }
}
// function hotItemSort(){console.log('not1')}
function selectSortType(e){
    var targetSorted = e.currentTarget.dataset.sort;
    switch(targetSorted){
        case 'inc':
            increaseSort();
            break;
        case 'dec':
            decreaseSort();
            break;
        case 'hot':
            hotItemSort();
            break;
        default:
            break;
    }
}
function addThemeTitleToSort(e){
    var titleSelected = e.currentTarget;
    var typeSelectorFilter = document.querySelectorAll('.sorts .list');
        var typeSelectorFilterLength = typeSelectorFilter.length;
    for(var a = 0; a < typeSelectorFilterLength; a++){
        typeSelectorFilter[a].classList.remove('active');
    }
    titleSelected.classList.add('active');
}

function checkAndShowProductItem(thisAttr){
    var ProductList = document.querySelectorAll('.Product-items__wrap');
    for(var a = 0; a < ProductList.length; a++){
        currentAttr = ProductList[a].firstElementChild.dataset.object;
        if(currentAttr.indexOf(thisAttr) == -1){
            ProductList[a].classList.add('hide');
        }
    }
}

function checkAndHideProductItem(thisAttr){
    var ProductList = document.querySelectorAll('.Product-items__wrap');
    for(var a = 0; a < ProductList.length; a++){
        currentAttr = ProductList[a].firstElementChild.dataset.object;
        if(currentAttr.indexOf(thisAttr) == -1){
            ProductList[a].classList.remove('hide');
        }
    }
}

function filterFunction(){
        var typeSelectorFilter = document.querySelectorAll('.sorts .list');
        var typeSelectorFilterLength = typeSelectorFilter.length;
        var typeList = document.querySelector('.sorts');
        var featureList = document.querySelector('.features');
        var featureSelectorFilter = document.querySelectorAll('.features .list');
        var featureSelectorFilterLength = featureSelectorFilter.length;
        var suitableList = document.querySelector('.types');
        var suitableSelectorFilter = document.querySelectorAll('.types .list');
        var suitableSelectorFilterLength = suitableSelectorFilter.length;
        var connectList = document.querySelector('.connects');
        var connectSelectorFilter = document.querySelectorAll('.connects .list');
        var connectSelectorFilterLength = connectSelectorFilter.length;
        var colorSelectorList = document.querySelector('.color');
        var colorSelectorFilter = document.querySelectorAll('.color .list');
        var colorSelectorFilterLength = colorSelectorFilter.length;
        if(!typeList.classList.contains('hide')){
            for(var a = 0; a < typeSelectorFilterLength; a++){
                typeSelectorFilter[a].addEventListener('click', (e) => {
                    addThemeTitleToSort(e);
                    selectSortType(e);
                })
            }
        }
        for(var b = 0; b < featureSelectorFilterLength; b++){
            featureSelectorFilter[b].addEventListener('click', (e) => {
                var thisfeatureAttr = e.target.dataset.features;
                switch(e.target.checked){
                    case true:
                        checkAndShowProductItem(thisfeatureAttr);
                        break;
                    case false:
                        checkAndHideProductItem(thisfeatureAttr);
                        break;
                }
            })
        }
        for(var d = 0; d < suitableSelectorFilterLength; d++){
            suitableSelectorFilter[d].addEventListener('click', (e) => {
                var thistypeAttr = e.target.dataset.type;
                switch(e.target.checked){
                    case true:
                        checkAndShowProductItem(thistypeAttr);
                        break;
                    case false:
                        checkAndHideProductItem(thistypeAttr);
                        break;
                }
            })
        }
        for(var c = 0; c < connectSelectorFilterLength; c++){
            connectSelectorFilter[c].addEventListener('click', (e) => {
                var thisconnecteAttr = e.target.dataset.connect;
                switch(e.target.checked){
                    case true:
                        checkAndShowProductItem(thisconnecteAttr);
                        break;
                    case false:
                        checkAndHideProductItem(thisconnecteAttr);
                        break;
                }
            })
        }
        for(var e = 0; e < colorSelectorFilterLength; e++){
            colorSelectorFilter[e].addEventListener('click', e => {
                var colorAttrThis = e.target.dataset.color;
                switch(e.target.checked){
                    case true:
                        checkAndShowProductItem(colorAttrThis);
                        break;
                    case false:
                        checkAndHideProductItem(colorAttrThis);
                        break;
                        
                }
            })
        }

}




