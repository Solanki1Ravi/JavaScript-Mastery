function greeting(name){
    return `Hello ${name}`
}

//function ek function bhi h or ek object bhi h 

greeting.power = 90
// console.log(greeting("Ravindra singh"));
// console.log(greeting.power);
// console.log(typeof greeting);


function createUser(username,price) {
    this.username = username
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.price}`);
    
}
const chai =  new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe()
tea.printMe()




