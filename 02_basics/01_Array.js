
/*

1.the datatype of Array is object

2.An array can hold many values under a single name, and we can access the values by referring to an index number.

3.JavaScript arrays are resizable and can contain a mix of different data types.

4.javaScript array-copy operations create shallow copies.

*/

// ----ways to create an array--

let newArr1 = new Array(10,20,30,40,true,"Ravindra singh",false,564161,897)

// console.log(newArr1);

let newArr = [102,20,310,40,true,"Ravindra singh"]

// console.log(newArr);

// console.log(newArr.length);

//console.log(newArr[0]); //accessing the single element of the array 

// let d = newArr.toString();// change array into string
// console.log(typeof d);


// ----Array methods----


// console.log(newArr1.push(45684)); //adds element in the array at the last index

// console.log(newArr1.push(false));

// console.log(newArr1.pop()); //pop out the last element from the array.


//newArr1.unshift(46585); //adds element at the first index of the array 

// newArr1.shift() //pop out the element from the first index of array

// console.log(newArr1.indexOf(false));  //returns the index of a specific element

// console.log(newArr1.lastIndexOf(false));


// console.log(newArr1.at(4));//returns element with the help of the index if present else return -1

let newMergeArray = newArr.concat(newArr1)
console.log(newMergeArray);
// console.log(newArr1);
// console.log(newArr1);


// ----slice and splice----
/*

Difference between slice and splice is that:

1. slice doesn't change the array but splice change the length of the array 

2.In slice last index is not included but in splice last index is included

*/

// console.log("A ",newArr);
// console.log("B ",newArr1);

// console.log(newArr.slice(0,4));
// console.log(newArr);
// console.log();
// console.log(newArr.splice(0,4));
// console.log(newArr);

newArr = newArr1.join(); //Adds all the elements of an array into a string, separated by the specified separator string


// console.log(typeof newArr);













