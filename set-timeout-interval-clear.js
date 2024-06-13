window.setTimeout(callFunc, 2000); // dnot call the function callFunc()

for (var i = 0; i < 10; i++) {
    console.log(i);    
}

function callFunc () {
    console.log("Hello World");
}

//window.setInterval(callFunc, 1000); // every second function callFunc is called

var interval;
var count = 1;
interval = window.setInterval(callInterval, 1000);

function callInterval() {
    count++;
    console.log('Call Interval');
    if(count === 6) {
        window.clearInterval(interval);
    }
}

var timerElemnet = document.querySelector('#timer');
var timer = 100;
timerElemnet.textContent = timer;

function settimer(){
    timer--;
    timerElemnet.textContent = timer;
    if(timer === 0){
        clearInterval(interval);    
        timerElemnet.textContent = 'Offer Expired';
    }
}

setInterval(settimer, 1000);
