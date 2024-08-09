const desc = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(desc);


const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
  };

//   const myP1 = Object.getOwnPropertyDescriptor(person,"firstName")

const myP1 = Object.defineProperty(person,"firstName",{
    writable:false,
    enumerable:false

})

  console.log(myP1);
  console.log(Object.getOwnPropertyDescriptor(person,"firstName"))
  