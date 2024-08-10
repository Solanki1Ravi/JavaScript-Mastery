class User{
    constructor(name,email,password){
        this.name= name
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
}

get password(){
    return `${this._password.toUpperCase()}123465`
}

set password(value){
    this._password = value
}
}


const user1 = new User("Ravindra singh" ,"Ravindra@gmail.com","abc")

console.log(user1);
// console.log(user1.email);
console.log(user1._email);
// console.log(user1.name);
console.log(user1.password);
