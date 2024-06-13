var a =  1;
console.log(typeof a);
var b = 'string';
console.log(typeof b);
var bool = true;
console.log(typeof bool);
var undef;
console.log(undef);
var defnull = null;
console.log(defnull);

var x = 1;
var y = 1;
var z = 2;

console.log(x == y); // check same value
console.log(x === y); // check same value and data type
console.log(x === z); // check same value and data type

var arr = [1,2,3,'num'];

console.log(typeof arr);  // object
console.log(typeof arr[0]);  // object
console.log(typeof arr[3]);  // object

var obj = {
    name : 'kaustubh',
    age : 33,
    add : function (a, b) {
        return a + b;
    }
}

console.log(obj);
console.log(typeof obj);
console.log(obj.add(2,4));



