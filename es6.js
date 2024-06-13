//var global scope

var x = 10; 

function fnVar () {
    x = 20;
}
fnVar();
console.log(x);

//let Block scope


function fnLet() {
    let alet = 10;
    console.log("in function "+alet);
}

fnLet();

//console.log("out function "+alet); //alet is undefined Block Scope

// Hoisting is JavaScript's default behavior of moving declarations to the top.

h = 10;
console.log(h);
var h;

// now in es6

//g = 3;
//console.log(g); //Uncaught ReferenceError: Cannot access 'g' before initialization
//let g;

//normal function

function add(a,b) {
    return a+b;
}
console.log(add(1,2));  

//Or

const subtract = function (a, b) {
    return a-b;
}

console.log(subtract(2,1));


// es6 arrow function

const addArrow = (a,b) => {
    return a+b;
}
console.log(addArrow(3,2));

const subArrow = (a,b) => a-b; //for single statement


// setInterval(function (){ //normal function
//     console.log("hello"); 
// },1000)

// setInterval(()=>{ //arrow fn
//     console.log("hello"); 
// },10000)

// use this keyword with function


var buttonThis = document.getElementById('btn');

buttonThis.addEventListener('click',  () => { // arrow function this gives windows object even its call button
    console.log(this);
}); 

buttonThis.addEventListener('click', btnThis);

function btnThis() { // arrow function this gives button object
    console.log(this);
}

// object
let personObject = {
    name: 'kaustubh',
    age: '33',
    greeting: function (params) {
        console.log('Hello World');
    }
}

//object es6
let user = 'kaustubh';
let age = '33';
let fnGreet = 'greeting';

let personObjectEs6 = {
    name: user,
    age: age,
    [fnGreet]: function () { //dynamic name
        console.log('Hello World');
    }
}
console.log(personObjectEs6);


let personObject1Es6 = {
    user,
    age,
    greeting1 () { 
        console.log('Hello World');
    }
}
console.log(personObject1Es6);


//Rest Operator


function add(...array){// rest Operator inside a function
    console.log(array); //list of arguments to array
}

add(1,2,3,4,5);


//Spread Operator

let arrr = [10, 20, 30, 40, 50]; // outside a function its works as spread operator
console.log(...arrr); //array to list of arguments 


let numberOne = [1,2,3,4,5];
let numberTwo = [5,6,7,8,9];   

console.log([...numberOne, ...numberTwo]);

//The spread operator is often used to extract only what's needed from an array:

const [a, b, c, ...rest ] = numberOne;

console.log(a , b, c, rest);

//We can use the spread operator with objects too:

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: '2024',
    color: 'yellow'
}

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle}

console.log(myUpdatedVehicle); //Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.

//loops in es6

let chars = ['a','b','c','d','e'];
for (const key of chars) {
   console.log(key);
}

let objects = {
    userName : 'code1',
    age: '12'
}

for (const iterator in objects) {
    console.log(iterator +' is '+ objects[iterator]);
}


// Template literal

let firstName = 'Kaustubh';
let myage = 33;

console.log('Hello I\'m '+ firstName + ' I\'m 33 years Old');

console.log(`Hello I'm ${firstName}!!!. I'm ${myage} years Old`);

// Destructuring of Array

let nums1 = [1,2];
let destrA  = nums1[0];
let destrB  = nums1[1]
console.log(`${destrA}, ${destrB}`);

// Destructuring of Array in es6

let nums = [1,2,3,4,5];

let [aa, bb, ...cc] = nums;

console.log(`a= ${aa} b= ${bb} c= ${cc}`);

let [xx,,,yy] = nums
console.log(`${xx}, ${yy}`); 

let p = 1;
let q = 2;

[q, p] = [p, q]

console.log(`${p} ${q}`); // swapping of p q

//Destructuring of Objects

let book = {
    name: 'Inner Engineering',
    author: 'Sadaguru',
    hello : function () {
        console.log('Namaskaram');
    }
}

let bookName = book.name;
let bookAuthor = book.author;

console.log(`${bookName} is written by ${bookAuthor}`);
console.log(book);
//Destructuring of Objects in es6

let { name, author, hello } = book; // property name should be matched!!
console.log(` ${name} is written by ${author} `);
console.log(hello());

//let { hello: welcome } = book; // assigning function to variable
//console.log(welcome());

//classes

// function Person() { //create object with help of function
//     this.name = 'leela';
//     this.hello = function(){
//         console.log("hello "+this.name);
//     }
// }



class Person {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log("Hello "+this.name+' age is '+this.age);
    }

    static message () {
        console.log("Declare of static function");
    }
}

class Leela extends Person { //inheritance
    constructor(age) {
        super('leela')
        this.age = age;
    }

    hello () {
        console.log('Hello from child');
    }

    helloTwice() {
        this.hello();
        super.hello();
    }
}

let person  = new Person('krishna');
console.log(person);
person.hello();

// let leela = new Leela('leela');
// leela.hello();

let leela1 = new Leela(30);
leela1.helloTwice();

Person.message(); // calling static function without creating instance


//getter setter method

class Car {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();

    }

    set name(value) {
        if (value.length > 2) {
            this._name = value;
        } else {
            console.log("Not Saved");
        }
    }
}

let car = new Car('Maruti Ritz');
console.log(car.name);
car.name = 'Tata Nano';
console.log(car.name);

// classes extends in built class.

class Multiple extends Array {
    multipleBy2() {
        let arr = [];
        this.forEach(value => arr.push(value*2));
        return arr;
    }
}

let multiple = new Multiple();
multiple.push(1);
multiple.push(2);
multiple.push(3);

console.log("array: "+multiple);
console.log("multipleBy2 "+multiple.multipleBy2());


// Promies

let promies = new Promise((reslove, reject)=>{
    setTimeout(()=>{
        //reslove("resolved!");
        reject("rejected!")
    },2000)
});

promies.then((resolve)=>{
    console.log("value "+resolve);
}).catch((error)=>{
    console.log("reject "+error);
});

for(let i=0; i<=3; i++){
    console.log(i);
}

let promie1 = new Promise((reslove, reject)=>{
    setTimeout(()=>{
        reslove("resolved! done p1");
        //reject("rejected!")
    },2000)
});

let promie2 = new Promise((reslove, reject)=>{
    setTimeout(()=>{
        //reslove("resolved! done p2");
        reject("rejected! p2")
    },2000)
});

Promise.all([promie1,promie2]).then((resolve)=>{ // all promise should be resovle otherwise its gets rejected
    console.log("value all "+resolve);
}).catch((error)=>{
    console.log("reject all"+error);
});

Promise.race([promie1,promie2]).then((resolve)=>{ // all promise should be resovle otherwise its gets rejected
    console.log("value race"+resolve);
}).catch((error)=>{
    console.log("reject race"+error);
});

let obj1 = {
    name: 'object1'
}

let obj2 = {
    age: 23
}

let obj3 = {...obj1, ...obj2};
console.log(obj3);

let obj4 = Object.assign(obj1, obj2);
console.log(obj4);


//class

class Obj5 {
    constructor() {
        this.name = 'leela';
    }
}

class Obj6 {
    constructor(){
        this.age = 30;
    }
}

let obj5 = new Obj5();
let obj6 = new Obj6();

let obj7 = Object.assign(obj5, obj6);

console.log("Obj7 :"+ obj7 instanceof Obj5);
console.log(obj7.___proto__ === obj6);