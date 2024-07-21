

let numbers = 33
let numbers1 = "33"

//console.log(numbers);
//console.log(typeof numbers);
//console.log(numbers1);
//console.log(typeof numbers1);

let scoreInNumber = Number(numbers1);
//console.log(scoreInNumber);
//console.log(typeof scoreInNumber);

let strNumber = "88aa7";
let num4 = Number(strNumber)
// console.log(strNumber);
// console.log(typeof strNumber);

//console.log(num4); //output = NaN
//console.log(typeof num4);

// let otherType = null; // 0
// let otherType = true; // 1
// let otherType = false;// 0
// let otherType = undefined;// NaN
//let otherType = "Ravindra";//NaN

//let conver = Number(otherType);
//console.log(conver);


// let isLoggedIn = 1;
// let isLoggedIn = 0;
// let isLoggedIn = ""; //false
let isLoggedIn = "ravi"; //true

let numIsLoggedIn = Boolean(isLoggedIn);
//console.log(numIsLoggedIn);


// *********************operations*****************


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%5);


/*
1. If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

2. If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

*/

let count1 = 56
let y = count1++
// console.log(y);
// console.log(count1);


let x = 56
let z = ++x
console.log(z);
console.log(x);