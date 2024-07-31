/*
    1.Conditional statements are used to perform different actions based on different conditions.

    2.if condition is execute when the condition is true.if the condition is false then then if condition is doesn't execute.

    3.In the case of false conditioin we have the other block which is called the "else" block. when the condition is not execute in if block then it maybe execute in else block.

    4.Nested if used when we have multiple condition for check.


*/

// Simple if
let age1 = 14;
// if (age1 == 14) {
//     console.log("Age is equal to 14");
// }

// console.log("Age is not equal to 14"); // this will also execute

/*if - else*/

// let age = 14;

// if(age>20){
//     console.log("Age is greater than 20");
// }
// else {
//     console.log("Age is less than 20");
// }


// nested if -else

let score = 34;
if ( score > 91) {
  console.log("Grade A+");
} else if  (score < 90 && score >= 80) {
  console.log("Grade A");
} else if  (score < 80 && score >= 70) {
  console.log("Greade B");
} else if  (score < 70 && score >= 60) {
  console.log("Grade C");
} else if  (score < 60 && score >= 50) {
  console.log("Grade D");
} else {
  console.log("Fail");
}
