

// Immediately Invoked funciton expression(IIFE)

// Normal function

// function Laptop(name) {
//     console.log(`The company of laptop is ${name}`);
    
// }

// Laptop("Acer");

/*
     ***Important points***

     1. If we're using the IIFE and creating 2 functions continously then we have to use the semicolon at the end of the function first. If we don't do this then it causes error in the code 


*/



// function using IIFE

(function Laptop(name) {
    console.log(`The company of laptop is ${name}`);
    
})("Acer");

// Arrow function using IIFE
( (name) => {
    console.log(`The company of laptop is ${name}`);
    
})("Acer");
