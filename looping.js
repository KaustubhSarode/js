//for loop

for(var i=0;i<=10;i++){
    console.log(i);
}

// nested for looping

for(var x = 1; x<=2;x++){
    for (let y = 1; y<=2; y++) {
       console.log('x ='+ x);
       console.log('y ='+ y);        
    }
}

// while loop
var d = 0;
while (d < 2) {
    console.log('d '+ d);
    d++;
}

var f = 7;
while (f < 9) {
    console.log('f'+f);
    f++;
}

do {
    console.log('f'+f);
    f++;
} while (f < 9);

// break continue

for(var y = 1; y <= 10; y++){
    if(y<5){
        continue; //it will go to the for loop and
    }
    console.log(y); 
}

for(var z = 1; z <= 10; z++){
    if(z>5){
        break; // stop the loop in the middle and comes out it
    }
    console.log(z);
}