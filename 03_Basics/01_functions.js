

/*
    1.A JavaScript function is a block of code designed to perform a particular task.

    2.When JavaScript reaches a return statement, the function will stop executing.

    3. After executing the return statement nothing is execute


*/


function greetUser(user){

    return `Hello ${user}. Good Morning.`
}

// const name = greetUser("Ravindra Singh")
// console.log(name);


//defining the default value for the fucntion

function greetUser(user="unknown"){

    return `Hello ${user}. Good Morning.`
}

// const userName = greetUser()
// console.log(userName);


function sumOfTwoNumber(num1,num2) {
    return num1+num2;
    
}



const val = sumOfTwoNumber(3,8)
// console.log(val);



// -----fucntion with objects-----


const person = {
    username : "Ravindra singh",
    age:22,
}

function objValues(anyObj) {
    return `Hello ${anyObj.username}. You're ${anyObj.age} and you're currently not logged in `
}


// console.log(objValues(person));
// console.log(objValues({
//     username:"Ravi solanki",
//     age:23
// }));



// --------function with arrays-----------


const prices = [200,300,400,500,600];

function secondValue(price){
    return price[2]
}


// console.log(secondValue(prices));
console.log(secondValue([200,300,400,500,600]));
