

/*
How to Define a JavaScript Object
    1.Using an Object Literal
    2.Using the new Keyword
    3.Using an Object Constructor


*/


/*
Object literals:-An object literal is a list of name:value pairs inside curly braces {}.

ex:={firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}


name:value pairs are also called key:value pairs.

object literals are also called object initializers.

*/

//creating an object
// const person = {
//     name:"Ravindra singh",
//     age:22,
//     nationality:"Indian",
//     isLoggedIn:true,
//     eyeColor:"black"
// }

// console.log(person);

//Accessing object elements

// console.log(person.name);
// console.log(person.age);
// console.log(person.isLoggedIn);

//Changing the value of Object elements

// person.age = 55;
// console.log(person);


///creating object using new keyword

// const myMustang = new Object();
// myMustang.name = "Mustang GT 1968";
// myMustang.color= "Black";
// myMustang.tyres = 4;
// myMustang.isPetrol = false;


const mySym = Symbol() //creating an symbol

const myMustang = {
    name : "Mustang GT 1968",
    color: "Black",
    tyres : 4,
    isPetrol : false,
    [mySym]:"key1" ,
   
}


myMustang.carDesc = function(){
    console.log(`Name of car is ${this.name}.\nColor of car ${this.color}.\nFuel type of car isPertrol? ${this.isPetrol}.\nTyres in car is ${this.tyres}`);
};


//Adding the values in the Object

myMustang.price = "$3000000"

// console.log(myMustang);

//Deleting the values present in the object
delete myMustang.tyres
console.log(myMustang);


// console.log(myMustang.carDesc());





// console.log(Object.keys(myMustang)); // returns the array of keys present in the object
// console.log(Object.values(myMustang)); // returns the array of values present in the object
// console.log(Object.entries(myMustang)); // Returns an array of key/values of the enumerable properties of an object


