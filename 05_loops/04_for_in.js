

const myLang = {
    js:"JavaScript",
    py:"Python",
    java:"Java",
    rb:"Ruby",
    cpp:"C++"
}

//for only key
// for (const key in myLang) {
//     console.log(key);
    
// }

// for key-value 

// for (const key in myLang) {

//     console.log(`${key} is shortcut for ${myLang[key]}`);
    
// }



// for array 

const myArr1 = [1,2,22,3,5,8,9];

// for (const key in myArr1) {
//     // console.log(key);
//     console.log(`value of index ${key} is ${myArr1[key]}`);
    
// }



const map = new Map()

map.set("In","India")
map.set("Fr","France")
map.set("Usa","United states of america")
map.set("Uk","United Kingdom")

// not iterable
for (const key in map) {
    console.log(key);
}