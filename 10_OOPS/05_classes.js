
/*
class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  printDetails() {
    return `UserName: ${this.username}\n"Email: ${this.email}\nPassword: ${this.password}`;
  }

  passwordEncryption() {
    return `${this.password}123456`;
  }
}

const user1 = new user("Ravindra singh", "Ravi@gmail.com", "12346789");

console.log(user1.printDetails());
console.log(user1.passwordEncryption());


*/
// without class

function user(username, password, email) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.passwordEncryption = function(){
  return `${this.password}123456`;
};

user.prototype.printDetails =function(){
  return `UserName: ${this.username}\nEmail: ${this.email}\nPassword: ${this.password}`;
};


const user2 = new user("Ravindra singh", "Ravi@gmail.com", "12346789");

console.log(user2);
console.log(user2.passwordEncryption());
console.log(user2.printDetails());
