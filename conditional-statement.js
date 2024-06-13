var x = 1;

if(x == 1){
    console.log("x is equal to 1");
} else {
    console.log("x is not equal to 1");
}

var y = '1';

if(y == 1){
    console.log("y is equal to 1");
} else {
    console.log("y is not equal to 1");
}

var z = 1;

if(z === 1){ //checking with same type
    console.log("z is equal to 1");
} else {
    console.log("z is not equal to 1");
}

var a = '1';

if(a){ // other then 0, null, NaN & undefined every value will be true. it should have some value in it.
    console.log("a is equal to 1");
} else {
    console.log("a is not equal to 1");
}


//switch

var b = 3;

switch (b) {
    case 1:
        console.log("b is equal to 1");
        break;
    case 2:
        console.log("b is equal to 2");
        break;
    default:
        console.log("b is not equal to 1");
        break;
}

// ternary Operator

var c = 1;

c ? console.log("c is equal to 1") : console.log("c is not equal to 1") // single line if statement
