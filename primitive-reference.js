console.log('primitive');
let g = 5;
console.log(g);
let e = 10;
console.log(e);
e = e + 2;
console.log(e);

let m = g;

console.log('m'+m);
g = g * 10;
console.log('g'+g);
console.log('m'+m);

console.log('reference');

var aaa = [1,2,3];
console.log('aaa'+aaa);
var bbb = aaa;
console.log('bbb'+bbb);
aaa.push(4);
console.log('bbb'+bbb);
console.log('aaa'+aaa);

aaa = ['a','b','c'];
console.log('aaa :'+aaa);
console.log('bbb :'+bbb);



