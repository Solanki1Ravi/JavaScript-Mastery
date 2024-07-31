/*
    1.Loops can execute a block of code a number of times.

    Different Kinds of Loops
    JavaScript supports different kinds of loops:

    1.for - loops through a block of code a number of times

    2.while - loops through a block of code while a specified condition is true

    3.do/while - also loops through a block of code while a specified condition is true

    4.for/in - loops through the properties of an object

    5.for/of - loops through the values of an iterable object



*/


// for loop

// for (let i = 1; i <=10; i++) {
//     console.log(i);  
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i} is: `);
//     for (let j = 1;j<=10; j++) {
//         console.log(i+" * "+j+" = "+(i*j));
        
//     }
//     console.log();
    
// }



const myArr = ["Flash","Superman","Batman","Wonder Woman","Aquaman"];

// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     console.log(i+"." +element);
    
// }


// Break and Continue keyword

// for (let i = 1; i <101; i++) {
//     if(i == 74){
//         console.log("Detected 74 and break the loop ");
//         break
//     }
//     console.log(i);
    
// }



for (let i = 1; i <101; i++) {
    if(i == 74){
        console.log("Detected 74 and skip the value ");
        continue
    }
    console.log(i);
    
}

