/* 
=======================================
      javaScript Function
=======================================
 */

// ** function declaration
/* function great() {
  console.log("hello gays");
} */

// ** function Invocation (calling a function)
/* great(); */

// write a function to find the sum of two numbers.
/* function sum() {
  var result = 5 + 5;
  console.log(result);
}
sum(); */

// ** function parameter
/* function sum(a, b) {
  var result = a + b;
  console.log(result);
} */

// ** function argument
/* sum(10, 10); */

// ** function expression
/* var result = function sum(a, b) {
  console.log(a + b);
};
result(10, 40); */

// ** anonymous function
/* var result = function (a, b) {
  console.log(a + b);
};
result(10, 40); */

// ** return keyword
/* function sum(a, b) {
  return a + b;
}
var result = sum(10, 90);
console.log(result); */

// ** IIFE- Immediately invoked function expression
/* (function () {
  console.log("this is immediately invoked function expression");
})(); */

/* (function (a, b) {
  console.log(a * b);
})(10, 9); */

/* var result = (function (a, b) {
  console.log(a * b);
  return a * b;
})(10, 9);
console.log(result); */

/* 
===============================================
      interview question
===============================================
*/
// ** calculator function : write a javascript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. the function should support addition, subtraction, multiplication and division.
/* function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    case "%":
      console.log(num1 % num2);
      break;

    default:
      console.log("what is this");
      break;
  }
}
calculator(10, 5, "/"); */

// ** reverse a string : write a function to reverse a given string without using built-in reverse method.
/* function reverse(str) {
  let strings = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strings += str[i];
  }
  console.log(strings);
}
reverse("moniruzzaman"); */

// ** palindrome check : create a function to determine if a given string is a palindrome (read the same backward as forward)
/* function reverse(str) {
  let revers = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revers += str[i];
  }
  if (str === revers) {
    console.log("this is palindrome");
  } else {
    console.log("this is not a palindrome");
  }
}
reverse("level"); */
