const coding = ["js","ruby","python","java","cpp"]

/*

   callBack fn :

   syntax
    function (val){}

*/

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// function langName(name){
//     console.log(name);

// }

// coding.forEach(langName)



// coding.forEach((val,index,arr)=>{
//     console.log(val , index,arr);
// })

const myCars = [
    {
        carName:"lamborgini",
        foundedYear :1963

    },
    {
        carName:"Ferrai",
        foundedYear:1939
    },
    {
        carName:"Mustang",
        foundedYear:1964

    }
]

myCars.forEach((item)=>{
    console.log(`${item.carName} is founded on ${item.foundedYear}`);
})