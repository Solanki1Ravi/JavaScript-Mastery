


let myHeros = ["thor","tony stark","captain america"]

let superHeroPowers = {
    thor:"Hammer",
    ["tony stark"]: "ironman suit",
    ["captain america"]:"shield"
}

// console.log(typeof superHeroPowers);

// Object.prototype.ravindar=()=>{
//     console.log("Ravindra is  present in all the objects");
    
// }

// superHeroPowers.ravindar()
// myHeros.ravindar()
// "Ravindra".ravindar();


// Array.prototype.myArr = ()=>{
//     console.log("new array created");
    
// }

// myHeros.myArr()
// superHeroPowers.myArr()


// -----------Inheritance----

const user = {
    name:"ravindra singh",
    email :"taza@gamil.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport = {
    makeAssignment :"JS assignment",
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__= user

// console.log(Teacher.user);


//Modern Syntaxf
Object.setPrototypeOf(TeachingSupport,Teacher)



