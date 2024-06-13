let array = [1,2,3,4,5,6,7,8,9,10];
console.log(array);
array.push(5);
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);
array.unshift(1);
console.log(array);
//indexOf - search the value in index and get position of the value;
let element = 5;
let getPos = array.indexOf(element);

if (getPos === -1) {
    console.log(element+' is not present in the array');
} else {
    console.log(element+' is present in the array at position '+getPos);
}

//splice array - remove a part (pparticular) of an array
let newarr = array.splice(5); //return array of removed elements
console.log(newarr);
//slice - copies the part of an array without removing from old array
console.log(array.slice(1,2));
console.log(array);

//filter array
let array2 = [1,2,3,4,5,6,7,8,9,10];

let results = array2.filter((a) => a > 4);
console.log(results);


//map array

let double = array2.map((ele) => ele * 2);

console.log(double);

//array reverse 

let reverseArry = array2.reverse();
console.log(reverseArry);

//concat array
let array3 = ["hello", "world"];
let concatArray = array2.concat(array3);
console.log(concatArray);

// join array

let joinarr = array3.join(' ');
console.log(joinarr);

//reduce

let reduce = array2.reduce((total, ele)=> {
    return total + ele;
});

console.log(reduce);


