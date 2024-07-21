


let userName = "Ravindra singh";
let age = 33
let address= "Sikar";

// console.log(`Hello!! MyName is ${userName}. I'm ${age} years old. And i'm currently living in the ${address}`);


// String creation using new keyword

let gameName = new String("Ravindra singh");
// console.log(gameName);

// console.log(userName == gameName);


// console.log(userName.length);
//console.log(userName.substring(0,5)); // last index is not include (0,n-1)
//console.log(userName.split(" ")); //return array of string
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf("e")); //returns -1 because not present in the string
// console.log(gameName.indexOf("i"));
// console.log(gameName.lastIndexOf("i"));//retrns the last index of the character

// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());

// console.log(gameName.endsWith("ei"));//returns false
// console.log(gameName.endsWith("gh"));//returns true
// console.log(gameName.startsWith("oj"));
// console.log(gameName.startsWith("Ra"));


let url = "https://www.google.com/Code%20With%20Ravi"

// console.log(url.replace("%20",""));//replace on the only first occurance
//console.log(url.replaceAll("%20",""));//replace on all the occurances


let randomUser = "       Ravindra           singh           ";
// console.log(randomUser.trim());//only trim the left and right side of the white space not in the between of elements

// console.log(randomUser.trimStart());
// console.log(randomUser.trimEnd());


let surName = " solanki";
// console.log(userName.concat(surName));

// console.log(userName.repeat("i"));

// console.log(`Hi ${userName.repeat(2)}`);



const str1 = '5';
console.log(str1.padStart(10, '0'));

const fullNumber = '2034';
console.log(fullNumber.padEnd(10, '*'));





