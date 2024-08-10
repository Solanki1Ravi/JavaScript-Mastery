function User(userName,email,password) {
    this._userName = userName,
    this._email=email,
    this._password=password,


  Object.defineProperty(this,"email",{
    get:function(){
        return this._email.toUpperCase()

    },
    set:function(value){
        this._email=value
    }
  })


  Object.defineProperty(this,"password",{
    get:function(){
        return this._password.toUpperCase()

    },
    set:function(value){
        this._password=value
    }
  })
}


const user1  = new User("ravi","ravi@gamil.com","213")
console.log(user1._email);
console.log(user1._password);


