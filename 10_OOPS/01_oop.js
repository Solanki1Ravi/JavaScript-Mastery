const user = {
  username: "Ravindra singh",
  age: 22,
  isLoggedIn: true,
  avatar: false,
  getUserDetails: function () {
    console.log("got user details");
    console.log("avatar: ", this.avatar);
  },
};

// console.log(user.username);
// console.log(user.age);
// console.log(user.isLoggedIn);
// console.log(user.avatar);
// console.log(user.getUserDetails());

function myUser(name, age, isSignedIn) {
  this.name = name;
  this.age = age;
  this.isSignedIn = isSignedIn;

  this.greetings=()=>{
    console.log(`Welcome Back ${this.name}`);
    
  }

  return this;
}

// without new keyword
/*
const myNewUser =  myUser("Ravindra singh",22,false);


const myNewUser1 =  myUser("Ravindra solanki",22,true);

console.log(myNewUser);
console.log(myNewUser1);
*/

// with new keyword
const myNewUser = new myUser("Ravindra singh",22,false);
console.log(myNewUser.greetings());



const myNewUser1 = new myUser("Ravindra solanki",22,true);
// console.log(myNewUser);
// console.log(myNewUser1);



//   console.log(myNewUser1);
  
  
  
  
