

function setUserName(username) {
    this.username= username
    
}


function createUserName(username,email,password){
    setUserName.call(this,username)
    this.email=email
    this.password=password
}


const charr = new createUserName("Ravindra singh","Rajnesh2231@gmail.com","203206")

console.log(charr);
