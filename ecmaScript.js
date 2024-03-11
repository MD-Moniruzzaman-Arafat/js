/* 
=======================================
      EcmaScript 2015 / ES6
=======================================
 */

// ** let & const
/* 
let : its a mutable
const : its a immutable
*/

// valid
// let myName = "arafat";
/* let myName = "arafat";
myName = "monir"; */
// console.log(myName);
/* const PI = 3.1416;
console.log(PI); */

// invalid
/* let myName = "salman";
let myName = "korim";
console.log(myName); */
/* const PI = 3.1416;
PI = 2; */
/* const PI;
PI = 1
console.log(PI); */

// ** template string
/* let myName = "Arafat";
const age = 24;
const result = `my name is ${myName}. i am ${age} years old`;
console.log(result); */

// ** default arguments
/* function sum(a = 0, b = 0) {
  return a + b;
}
var result = sum(10, 5);
console.log(result); */

// ** arrow function
/* var sum = () => {
  console.log("this is arrow function");
};
sum(); */

// ** destructuring
// ** object properties
// ** rest operator
// ** spread operators
