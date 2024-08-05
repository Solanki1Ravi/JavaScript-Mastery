const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const docBody = document.querySelector("body");


buttons.forEach(function (ele) {
    // console.log(ele);
    ele.addEventListener('click',function (e) {
        console.log(e);
        console.log(e.target);
        
        if(e.target.id === "grey"){
        docBody.style.backgroundColor=e.target.id
        }
        if(e.target.id === "white"){
        docBody.style.backgroundColor=e.target.id
        }
        if(e.target.id === "yellow"){
        docBody.style.backgroundColor=e.target.id
        }
        if(e.target.id === "red"){
        docBody.style.backgroundColor=e.target.id
        }
        if(e.target.id === "orange"){
        docBody.style.backgroundColor=e.target.id
        }

    })
    
})