/*
1.Switch works same as the if else but in this it directly jump on that case.

2.After Every case we have to use the break keyword if we didn't use the break keyword then all the next cases will also execute.

3.in the default case we write the code that we want to execute when the input is wrong.






*/

// let day = 0

// switch (day) {
//     case 0:
//         console.log("Monday");
//         break;
//     case 1:
//         console.log("Tuesday");
//         break;
//     case 2:
//         console.log("Wednesday");
//         break;
//     case 3:
//         console.log("Thursday");
//         break;
//     case 4:
//         console.log("Friday");
//         break;
//     case 5:
//         console.log("Saturday");
//         break;
//     case 6:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Enter a proper day");
//         break;
// }




/* -----------------------Common code block-------*/


let day = 6;

switch (day) {
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
    case 6:
        console.log("Weekend");
        break;

    default:
        console.log("Enter a proper day");
        break;
}
