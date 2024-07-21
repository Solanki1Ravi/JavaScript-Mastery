
/*
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const
*/

/*
Note: prefer not to use var because the block and fucntional scope issues
*/

const accoundId = 123465;
let accountEmail = "rajnesh42231@gamil.com";
var accountPassword = 12347898
accountCity = "Jaipur"  //Automatically

var accountPassword = 45678;
//let accountEmail = "solankiravindra633@gamil.com"; //in reassignment it throws errow

accountEmail = "solankiravindra633@gamil.com"; //it doesn't throw the error

//const accoundId = 788520;// we can't modify the const after declaration.we can't create the same name variable twice in the code

accoundId = 788520; //throws eror trying to reassisgn the  values of const variable 

accountCity = "Jodhpur"
// console.table([accoundId,accountEmail,accountPassword,accountCity])
console.table([accountPassword,accountCity,accountEmail,accoundId])