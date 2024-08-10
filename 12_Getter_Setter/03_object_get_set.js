const User = {
    _username:"Ravindra singh",
    _email:"ravi@gamil.com",
    _password:"asfjkd",



    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value

    }
}


const user1 = Object.create(User);
console.log(user1.email);
