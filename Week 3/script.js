// function f() {
//   var y = x + 1;
//   console.log(y);
//   var x = 2;
//   console.log(x);
//   y = x + 1;
//   console.log(y);
// }

// f();
// Hoisting:
//  At run time.. JS will "hoist" x declaration....

/*
function f(){
var x; // declaration of x is hoisted...BUT assignment is not hoisted..

var y=x+1;
x=2;

}


4+undefined = NaN;
undefined+undefined = NaN;


*/

// var x; // global variable

// function f() {
//   x = 2;
//   return x + 1;
// }

// console.log(f());

// f(); //this will work
// function f() {}
// f(); // this wil also , becase f has been declared...

// // var g;
// g(); // NOT WORK
// var g = function () {};
// g(); // will WORK becase g is already assigned ..

// Arrays...properties and methods!...

// Declaring Arrays in JS:

// let arr = new Array(1, 2, 3);
// let arr2 = [1, 2, 3];

// // Unlike some other languages..

// let arr3 = [0, "a", true, 2.4]; // JS arrays can have hetrogenous elements..

// let arr = [1, 2, 3];
// console.log(arr[0], arr[1], arr[2]);

// let arr = [];
// arr[2] = 10;
// console.log(arr[0], arr[1], arr[2]);

// Accessing elements in an array:
// let numbers = [43, 23, 54, 3, 33, 32, 45, 556, 64, 33];
// let firstNumber = numbers[0];
// let lastNumber = numbers[numbers.length - 1];
// console.log(firstNumber, lastNumber);

// let position = [42.2342, -90.12334];
// // Seprate the two values into their own unique variables...

// // Version 1 - index notation
// // let lat = position[0];
// // let lng = position[1];

// // Version 2 - destructure
// let [lat, lng] = position;

// console.log(lat, lng);

// let dateString = `13/5/2025`;
// let [, month, year] = dateString.split("/");
// console.log(`The day is, month is ${month}, and year is ${year}`);

// Properties and methods of arrays in JS:

// let arr = [1, 2, 4, 5];

// console.log(arr.length);
// console.log(arr);

// arr.push(10);
// console.log(arr);

// arr.push(20);
// console.log(arr);

// arr.pop();
// console.log(arr);

// console.log(arr);
// arr.unshift(10);
// console.log(arr);

// arr.unshift(20);
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.shift();
// console.log(arr);
// arr.shift();
// console.log(arr);

// let arr = [1, 2, 4];

// console.log(arr.concat([6, 7], 9)); //concat does not update the original array
// console.log(arr.includes(4));
// console.log(arr.indexOf(4));
// console.log(arr.join("-"));

// split( ) converts a string to Array by splitting with give character...
// join() converts an array to a string by using the give character..
