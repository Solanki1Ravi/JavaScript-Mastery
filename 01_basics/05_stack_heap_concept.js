
/*
==> primitive data type
1.String
2.Number ==> 2 to power 53
3.Bigint
4.Boolean  ==> true/false
5.Undefined
6.Null
7.Symbol ==> unique


//Non primitive 
object , array , function


******************************
stack (primitives)
heap (non-primitives)

*/


let userName = "Ravindra singh";
let userName2 = userName;
userName2 = "Ravi solanki";
// console.log(userName);
// console.log(userName2);



let userObj = {
    name:"Ravindra singh",
    age:22,
    address:"Kumasiya"
}

let obj2 = userObj;
obj2.address = "Tanwara-kumasiya";
console.log(userObj);
console.log(obj2);