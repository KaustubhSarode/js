window.onload = function (){
    console.log("window onload"); 
};

var buttonElement = document.querySelector('button');
var onclick =  document.querySelector('#onclick');

buttonElement.onclick = onClickButton;
buttonElement.onclick = onClickButton2;

function onClickButton () {
    console.log('button Clicked');
}

function onClickButton2 () { // multiple function can not be called on same onclick event
    console.log('button Clicked 2');
}

var addEventList = document.querySelector('#addEL');
//var onclick =  document.querySelector('#onclick');

addEventList.addEventListener('click', addEventListenerButton);
addEventList.addEventListener('click', addEventListenerButton2);


function addEventListenerButton () {
    console.log('button addEventListener Clicked');
}

function addEventListenerButton2 () { // multiple function can be called on same onclick event
    console.log('button addEventListener Clicked 2');
    addEventList.removeEventListener('click',addEventListenerButton2) // removes the handler  addEventListenerButton2
}

//Event bubbling
// var childElt = document.querySelector('#child');
// var parentElt = document.querySelector('#parent')

// childElt.addEventListener('click', childEventHandler);
// parentElt.addEventListener('click', parentEventHandler)

// function childEventHandler(event) {
//     console.log(event.bubbles);
//     event.stopPropagation();
//     console.log('child event clicked');
// }

// function parentEventHandler(event) {
//     console.log(event.target);
//     event.target.style.background = 'green';
//     console.log('parent event clicked');
// }

var boxElement = document.querySelectorAll('#box');

// boxElement[0].addEventListener('click', boxElementHandler);
// boxElement[1].addEventListener('click', boxElementHandler);

for (let i = 0; i < boxElement.length; i++) {
    boxElement[i].addEventListener('click', boxElementHandler);    
}

function boxElementHandler(event){
    console.log('event');
    event.target.style.background = 'green';
}