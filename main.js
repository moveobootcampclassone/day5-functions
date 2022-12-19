function helloWorld() {
  console.log("Hello World");
}

// //Calling the function
let greeting = helloWorld();

function sum() {
  let a = "5";
  console.log(a + 3); // עבור סטינגים פלוס מייצג שרשור סטרינגים. עבור מספרים חיבור
  //Output: "53"
  console.log(parseInt(a) + 3);
  // Output: 8
}

// x and y are parameters
function addNumbers(x, y) {
  console.log(x + y);
}

// calling the function and passing 4 and 5 as arguments
// It x = 3 , y = 5
addNumbers(4, 5);

function sayHello(name) {
  console.log(`Hello, my name is ${name}, nice to meet you!`);
}

sayHello("Dudi");
sayHello("Zoya");

// defualt values for the parameters
// using return
function addNumbers2(x = 1, y = 2) {
  return x + y;
}

console.log(addNumbers2(2)); // 2 + 2
console.log(addNumbers2(), "addNumbers2()"); // calling without arguments => 1 + 2 (using default value)

function multiply() {
  console.log("multiplication result:");
  console.log(addNumbers2(2, 4) * 2);
}

multiply();

// we can save the returned value from the function calling
let sumResultMultiply = addNumbers2(2, 4);
let sumResult2 = addNumbers2(1, 3);
console.log(sumResultMultiply, "sumResultMultiply");
alert(`2 + 4 = ${sumResultMultiply}. This is the sum`);

// //Calling the function and passing arguments
const firstSum = addNumbers(3, 5);
// x = 3 , y = 5
console.log(firstSum);
// // Output: 8

// //Calling the function and passing only one argument
// //Let's see what will happen
const secondSum = addNumbers(3);
// // x = 3 , y = undefined
console.log(secondSum);
// // Output: NaN

// Default parameter
function multiply(a, b = 1) {
  return a * b;
}

// May cause errors! let's see what happens
function f(x = 1, y) {
  console.log(x + y);
}

f(); // will couse error
f(2); // will couse error
f(5, 6);

function f(x, z, y) {
  console.log(y / x);
  console.log(z);
}

// the order of the arguments is the same as the order of the parameters
f(1, 2, 3); //  => f(x = 1 , z = 2 , y = 3)

// default values from right to left
function f(x, z = 4, y = 3) {
  console.log(y / x);
  console.log(z);
}

f(1); // will work
f(7, 2); // will work
f(4, 7, 3); //will work

// we can use:
// debugger;
//find squere root
function printSquereRootFirst(num) {
  // one way :
  let squered = Math.sqrt(num);
  console.log(squered);
  // second way :
  // console.log(Math.sqrt(num));
}

printSquereRootFirst(9);
printSquereRootFirst(4);

//find squere root
function printSquereRoot(num, numToSubtruct = 1) {
  // one way :
  let squered = Math.sqrt(num);
  return squered - numToSubtruct;
}

printSquereRoot();
console.log(printSquereRoot(9)); // 3 - 1
console.log(printSquereRoot(9, 3)); // 3 - 3

function toUpper(word) {
  return word.toUpperCase();
}

let myText = toUpper("welcome");
// console.log(myText);

// let secondText = toUpper(); // will cause error!

//callback function:

function message() {
  alert("hello, after 5 seconds");
}

// setTimeout build in function. get a function as an arguments
setTimeout(message, 5000);

//callback function
function callMe(message) {
  message();
}

callMe(message);

function culcSum(x, y) {
  return x + y;
}

//we can set a function as a parameter
function culc(culcSum, number, a, b) {
  return culcSum(a, b) + number;
}

// but it this example we can just call the function
function culc2(number, a, b) {
  return culcSum(a, b) + number;
}
console.log(culc(5, 6, 7));
