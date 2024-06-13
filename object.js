console.log("object creation");
let empolyee = { // short hand notation of creating object (1)
    name: 'abc',
    location: 'pune',
    job: 'web developer',
    hobbies: ['sports', 'reading'],
    office: {
        address: 'Mumbai'
    },
    package_salary: 500000,
    welcome: function() {
        console.log("Welcome");
    }
}

console.log(empolyee.office.address);
console.log(empolyee['office']['address']);
console.log(empolyee.welcome());

// another way creating object (2)
let person3 = new Object();
person3.name = 'kaustubh';
person3.age = '30';
console.log(person3);
// this keyword in object 
function welcome() {
    console.log("Welcome " + this.name);
}

let person = {
    name: 'kaustubh',
    welcome: welcome
}

let anotherperson = {
    name: 'shweta',
    welcome: welcome
}

console.log(person.welcome());
console.log(anotherperson.welcome());

// anotherway of creating object (3)

let person4 = Object.create(person); // inheriting object person. person is prototype of person4;
person4.location = "US";
console.log(person4.welcome());
Object.prototype.randomfun = function(){ // every object has a prototype of Object
    console.log("random function");
}
person4.randomfun();
console.log(person4.toString());// function of Object

let person5 = Object.create(null); //define null to avoid inheriting any object or global Object

console.log(person5.toString);

console.log(person4.__proto__ == person); //
console.log(Object.getPrototypeOf(person4) == person);

// (4th) way of creating Object
function User(name) {
    this.name = name;
    this.welcome = function(){
        console.log("Welcome");
    }    
}

let ram = new User('Ram');
let krishna = new User('Krishna');
console.log(ram instanceof User);
console.log(ram.name);
console.log(krishna.name);

