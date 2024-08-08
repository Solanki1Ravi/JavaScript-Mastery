//Creating a promise

const promiseOne = new Promise((resolve,reject)=>{
    //Do an async task
    //DB calls, cryptograpy, network

    setTimeout(()=>{
        console.log("Async task is complete");
        resolve();
        
    },2000)
})



//Consuming a promise

 promiseOne.then(()=>{
    console.log("Promise consumed");
     
})

    

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");

    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 is resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Ravindra singh", age: 22 });
  }, 2000);
});

promiseThree.then((user) => {
  console.log(user);
});


const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
        resolve({ username: "Ravindra singh", age: 33 });
    } else {
      reject("Something went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  }).finally(()=>{
    console.log("Promise is either resolve or reject");
    
  });



const promiseFive = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({language:"JavaScript",Channel:"Chai- aur-Code"})
        }else{
            reject("Something went wrong")
        }
    },2000)
})

async function consumeFive(){
  

    try {
        const responce = await promiseFive
        console.log(responce); 
    } catch (error) {
        console.log(error);
        
    }
    
}

consumeFive()


async function getAllUsers() {
  try {
    const respose = await fetch("https://api.github.com/users/Solanki1Ravi");
    // console.log(typeof respose);
    const data = await respose.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();



fetch("https://api.github.com/users/Solanki1Ravi")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    

}).catch((error)=>{
    console.log(error);
    

})