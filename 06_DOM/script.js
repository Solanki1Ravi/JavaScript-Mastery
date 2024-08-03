

document.getElementById("title")
// <h1 id=​"title" class=​"firstHeading">​Ravindra singh​</h1>​
document.getElementById("title").id
// 'title'
document.getElementById("title").className
// 'firstHeading'

document.getElementById("title")
//<h1 id=​"title" class=​"firstHeading">​Ravindra singh​</h1>​
document.getElementById("title").id
'title'
document.getElementById("title").className
'firstHeading'
document.getElementById("title").getAttribute("class")
'firstHeading'
document.getElementById("title").getAttribute("id")
'title'
document.getElementById("title").getAttribute("p")
null
document.getElementById("title").getAttribute("h1")
null
document.getElementById("title").setAttribute("class","Test")
undefined
document.getElementById("title").setAttribute("class","Test heading")
undefined

const myTitle = document.getElementById("title")
undefined
//<h1 id=​"title" class=​"Test heading">​Ravindra singh​</h1>​

myTitle.style.color="green"
// 'green'
myTitle.style.backgroundColor="blue"
// 'blue'
myTitle.style.padding = "15px"
// '15px'
myTitle.style.borderRadius = "10px"
// '10px'



myTitle
//<h1 id=​"title" class=​"Test heading" style=​"color:​ green;​ background-color:​ blue;​ padding:​ 15px;​ border-radius:​ 10px;​">​Ravindra singh​</h1>​

myTitle.innerHTML
// 'Ravindra singh'

myTitle.innerText
// 'Ravindra singh'

myTitle.textContent
// 'Ravindra singh'


document.getElementById("firstPara")

//<p id=​"firstPara">​…​</p>​"Lorem ipsum dolor sit amet consectetur, adipisicing elit."<span style=​"display:​ none;​">​ Nobis, nulla.​</span>​</p>​

const myPara = document.getElementById("firstPara")
//undefined
//myPara
//<p id=​"firstPara">​"Lorem ipsum dolor sit amet consectetur, adipisicing elit."<span style=​"display:​ none;​">​ Nobis, nulla.​</span>​</p>​

myPara.innerHTML
'Lorem ipsum dolor sit amet consectetur, adipisicing elit.<span style="display: none;"> Nobis, nulla.</span>'

myPara.innerText
'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'

myPara.textContent
//'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, nulla.'


document.querySelector("ul")
/*<ul>
​<li>​…​</li>
​<li>​…​</li>
​<li>​…​</li>
​<li>​…​</li>
​<li>​…​</li>​</ul>​*/


const myUl = document.querySelector("ul")
myUl
//<ul>​…​</ul>​

myUl.querySelector("li")
//<li>​::marker​"one"</li>​

myUl.querySelector("li").style.backgroundColor  = "red"
'red'
myUl.querySelector("li").style.color = "gray"
'gray'


document.querySelector("ul")
//<ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​

const myUl1 = document.querySelector("ul")
undefined
myUl1
{/* <ul>​…​</ul>​ */}

myUl1.querySelector("li")
{/* <li>​::marker​"one"</li>​ */}

myUl1.querySelector("li").style.backgroundColor  = "red"
'red'
myUl1.querySelector("li").style.color = "gray"
'gray'

const MyLi = document.querySelectorAll("li")

//MyLi[0]
//<li style=​"background-color:​ red;​ color:​ gray;​">​…​</li>​

MyLi[0].style.color='aqua'
'aqua'

MyLi.forEach((val)=>{
    val.style.color="aqua"
})


//converting an HTMLCollection into Array

const myTempClass = document.getElementsByClassName("list-item")
myTempClass

// HTMLCollection
HTMLCollection(5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]



myTempClass

HTMLCollection(5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]

Array.from(myTempClass)
// (5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-item4: li.list-itemlength: 5[[Prototype]]: Array(0)

const myArr = Array.from(myTempClass)
undefined
myArr
(5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]

myArr.forEach((val)=>{
    val.style.color="red"
})

myArr.forEach((val)=>{
    val.style.color="green"
})
