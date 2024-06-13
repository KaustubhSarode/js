
console.log("function");

function test() {
    console.log("Hello world");
}

console.log(test);
console.log(typeof test);

const test1 = function (){
    console.log("first class function");
    //function not returing anything so its undefine
} 
test1();
var result = test1();

const test2 = function (){
    console.log("function returing value");
    return "test2";
} 
console.log(test2());

const test3 = test2;

console.log(test3());

//function with arguments
var add = function(number1, number2) {
    return number1 + number2;
}
var sum = add(1,2);
console.log(sum);

var sum1 = add(1);
console.log(sum1);// NaN - Not A Number