

const num = 400;
//console.log(num);

const num1 = new Number(426400);  //explicitly defining that we want a number
// console.log(num1);
// console.log(num1.toString());
// console.log(typeof(num1.toString()));
// console.log(num1.toFixed(2));
// console.log(num1.toPrecision(2));

const hundreds = 100203200255;
//console.log(hundreds.toLocaleString('ar-EG')); //arabic
//console.log(hundreds.toLocaleString('en-IN')); //Indian

// console.log(hundreds.toLocaleString());




// ---------------Maths----------


// console.log(Math);
// console.log(Math.E);
// console.log(Math.LN10);
// console.log(Math.LN2);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);
// console.log(Math.PI);
// console.log(Math.SQRT1_2);


// console.log(Math.round(566.36));
// console.log(Math.floor(566.36));
// console.log(Math.ceil(566.36));

//console.log(Math.random());
//console.log(Math.pow(2,3));
//console.log(Math.abs(-123.963258,3));//convert negative into positive

//console.log((Math.max(5,98,85,35)));
//console.log((Math.min(5,98,85,35)));

/*
1.If x is positive, returns 1.
2.If x is negative, returns -1.
3.If x is positive zero, returns 0.
4.If x is negative zero, returns -0.
5.Otherwise, returns NaN.
*/

console.log(Math.sign(3));
// Expected output: 1

console.log(Math.sign(-3));
// Expected output: -1

console.log(Math.sign(0));
// Expected output: 0

console.log(Math.sign('-3'));
// Expected output: -1
