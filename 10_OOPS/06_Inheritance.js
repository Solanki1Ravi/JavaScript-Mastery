class user {
  constructor(username,email,password) {
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

class User1 extends user {
  constructor(username, email, password) {
    super(username,email,password);
    
  }

}
const MyUser = new User1("Ravindra singh","ravisolanki@gmail.com",456789)

console.log(MyUser.printDetails());
console.log(MyUser.passwordEncryption());

console.log(MyUser instanceof user);
console.log(MyUser instanceof User1);

