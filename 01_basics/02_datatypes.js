

/*
==> primitive data type

1.String
2.Number ==> 2 to power 53
3.Bigint
4.Boolean  ==> true/false
5.Undefined
6.Null
7.Symbol ==> unique




==> non primitive (object type)

1. object:=  objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

*/

let userName = "Ravindra solanki";
let age = 23;
let isLoggedIn = false;
let state;
let salary = null;
let bigIntNumber = 123456789012345678901234567890;

let newAdd = ""; // this is treated as the string


let obj = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};




console.table([userName,age,isLoggedIn,salary,state,bigIntNumber,newAdd])
// console.table([obj])


// ----The typeof Operator-----

/*
We can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression

*/

console.log(typeof userName);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof bigIntNumber);
console.log(typeof salary);
console.log(typeof state);
console.log(typeof newAdd);
console.log(typeof obj);