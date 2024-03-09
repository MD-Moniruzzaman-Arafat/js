/* 
========================================
      javaScript Data Type
========================================
Data Type :
1. Primitive data type
1.1 Number
1.2 String
1.3 Boolean
1.4 Undefine
1.5 Null
1.6 Bigint
1.7 Symbol
2. Object data type
2.1 An object
2.2 An array
2.3 A date


---------------------------------
      INTERVIEW QUESTION
---------------------------------
1. what is the difference between null and undefine in javaScript?
2. what is the purpose of typeof operator in javaScript?
3. what is the result typeof null in javaScript?
4. what are primitive dataType in javaScript?
5. convert a string to a number?
6. convert a number to a string?
7. explain the concept of truthy and falsy value in javaScript?
8. to check if a non-empty and empty string is truthy or falsy in javaScript, we can directly use if statement. 
9. NAN === NAN, why is it false

*/

// data type define the type of values that  a variable can hold.

// Types of Primitive data type

// Number: Represents numeric value, include integer and floating point number.
// Example:
/* var myNumber = 7;
console.log(typeof myNumber); */

// String: Represent a sequence of character enclosed in single or double quotes.
// Example:
/* var myName = "Arafat";
console.log(typeof myName); */

// Boolean: Represent a logical entity with two value true or false.
// Example:
/* var isRunning = true;
console.log(typeof isRunning); */

// Undefine: Represent the absence of a value or an uninitialized variable.
// Example:
/* var number;
console.log(typeof number); */

// NUll: Represent the absence of a value it is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:
/* var isValue = null;
console.log(typeof isValue); */

// To check if a non-empty and empty string is truthy of falsy is javaScript. using if statement.
// Example:
/* var myName = "";
if (myName) {
  console.log("this is truthy value");
} else {
  console.log("this is false value");
} */

/*
=========================================
      todo Bonus
=========================================
 */

// parseInt and parseFloat concepts
// parseInt and parseFloat are both function in javaScript used for converting string and number. they have difference use cases.

// parseInt.
// Example:
/* var number = "40";
console.log(number);
console.log(typeof number);
console.log(typeof parseInt(number)); */

// parseFloat
// Example:;
/* var floatNumber = "40.5";
console.log(floatNumber);
console.log(typeof floatNumber);
console.log(parseFloat(floatNumber));
console.log(typeof parseFloat(floatNumber)); */

// best practice is use parsefloat cz parseInt modify float number.
