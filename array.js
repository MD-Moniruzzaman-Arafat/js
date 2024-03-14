/* 
=================================
      javaScript array
=================================
// what we will cover
1. create array/ accessing elements/ modify elements
2. how to insert, add, replace and delete elements in array (CRUD)
3. filter in an array
4. very very important array method
5. array traversal/ iterating over array
6. searching in an array
7. how to sort and compare an array
 */
/* const person = ["arafat", "salman", "rohim", "korim"];
console.log(person.at(-2)); // ecmaScript 2022 include this feature
console.log(person[person.length - 2]);
 */

// ** array constructor
/* const arr = new Array("salman", "rofiq", "arafat");
console.log(arr);
console.log(typeof arr); */

// ** array literal
/* const arr = ["salman", "rofiq", "arafat"];
console.log(arr); */

// ** access array elements
/* const arr = ["salman", "rofiq", "arafat"];
const result = arr[2];result
console.log(result); */

// ** modify array element
/* const arr = ["salman", "rofiq", "arafat"];
console.log(arr);
arr[2] = "shajahan";
console.log(arr);
 */

// ** array traversal/ iterating over array
// const fruits = ["apple", "banana", "orange", "mango"];

// for of loop
/* for (const fruit of fruits) {
  console.log(fruit);
} */

// for loop
/* for (var i = 0; i < fruits.length; i++) {
  const result = fruits[i];
  console.log(result);
} */

// for in loop
/* for (const fruit in fruits) {
  console.log(fruits[fruit]);
} */

// foreach loop
/* fruits.forEach((current, index, array) => {
  console.log(current, index, array);
}); */

//  map method
/* fruits.map((current, index, array) => {
  console.log(current, index, array);
}); */

// ** how to insert, add, replace and delete elements in array (CRUD)
// const arr = ["salman", "rofiq", "arafat", "salman"];

//shift
// arr.shift();

// unshift
// arr.unshift("mohim");

// push
// arr.push("muhit");

// pop
// arr.pop();

// what if we change any position we use splice
// splice
/* arr.splice(arr.length, 0, "nahar");
console.log(arr); */

// searching in an array
// indexof
/* const result = arr.indexOf("salman", 0);
console.log(result); */

// lastindexof
/* const result = arr.lastIndexOf("salman");
console.log(result); */

// include
/* console.log(arr.includes("arafat")); */

// to do some challenge
/* const month = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
]; */
// add december at the end of an array
/* month.push("december");
console.log(month);
 */

// what is the return value of splice method

// update march to March
/* const findItem = month.indexOf("march");
month.splice(2, 1, "March");
console.log(month);
console.log(findItem);
 */

// delete june from an array
/* month.splice(5, 1);
console.log(month); */

// filter and find in an array
// const arr = [1, 3, 5, 6, 8, 5, 6, 9, 3, 4];

// find method
/* const resullt = arr.find((crnt, index, array) => {
  return crnt === 1;
});
console.log(resullt); */

// filter method
// const resullt = arr.filter((crnt, index, array) => {
//   return crnt === 6;
// });
// console.log(resullt);

// filter uniq id
/* var result = arr.filter((crnt, index, array) => {
  return array.indexOf(crnt) === index;
});
console.log(result);
 */

// using set method for uniq value
/* const result2 = [...new Set(arr)];
console.log(result2);
 */

// sort and compare in array
/* const arr = [1, 3, 5, 6, 8, 5, 6, 9, 3, 4];
const friends = ["salman", "rofiq", "arafat", "salman"];

// sort
arr.sort();
friends.sort();
console.log(arr);
console.log(friends); */

// important array method
// map, filter,reduce

const friends = ["salman", "rofiq", "arafat", "salman"];
const arr = [1, 3, 5, 6, 8, 5, 6, 9, 3, 4];
// using the map method, write a function that take an array of string and return a new array where each string is capitalize
/* const result = friends.map((crnt) => {
  return crnt.toUpperCase();
});
console.log(result); */

// using map to square each number and return array
// var result2 = arr.map((crnt) => {
//   return crnt * crnt;
// });
// console.log(result2);

// using map to square each number and is number even then return array
/* var result3 = arr
  .map((crnt) => {
    if (crnt % 2 === 0) {
      return crnt * crnt;
    }
  })
  .filter((crnt) => {
    return crnt !== undefined;
  });

console.log(result3); */

// reduce method
//write a javascript function that calculate the total number of items in a shopping cart. the function should take  an array  of  item  price as input and return the total price.
/* const numbers = [300, 500, 800, 900, 400];
const result = numbers.reduce((pre, current, index, array) => {
  return pre + current;
}, 0);
console.log(result); */
