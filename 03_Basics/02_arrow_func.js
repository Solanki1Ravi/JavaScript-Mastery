


let userPerson = {
    username:"Ravindra singh",
    age:44,

    greetUser:function(){
        // return `${username}, thank you for logged in`;
        //gives error

        console.log(`${this.username}, thank you for logged in`);

        // console.log(this);
    }
}


// console.log(userPerson.greetUser());
userPerson.username="Sam altman"
// console.log(userPerson.greetUser());


// console.log(this);//returs an empty object


// function nameGreet(name){
//     // console.log(this.name); //returns undefined
//     // console.log(name);
//     console.log(this);
// }

// console.log(nameGreet("Ravindra singh"));



// -------------Arrow function----

//explicit return
const sumOfTwoNumber = (num1,num2) => {
    return num1+num2

}


// implicit return 
const sumOfTwoNumber1 = (num1,num2) =>  (num1+num2);

// console.log(sumOfTwoNumber(30,88))
console.log(sumOfTwoNumber1(30,88))

const moveRight = ()=>{
    let username = "ravi"
    // console.log(`${this.username} moving right`);
    // console.log(this);
}

// console.log(moveRight());


const objRet = () =>({username:"sama"})

console.log(objRet);