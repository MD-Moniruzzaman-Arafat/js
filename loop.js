/* 
==========================================
      javaScript loop
==========================================
1. while loop
2. for loop
3. do while loop
4. for in loop
5. for of loop 
*/

//while loop
// simple while loop to count from 1 to 10
/* var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
} */

// do while loop
//simple do while loop to count from 1 to 10
/* var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10); */

// for loop
// simple for loop to count from 1 to 10
/* for (var i = 0; i <= 10; i++) {
  console.log(i);
} */
/* 
for (var i = 1; i <= 10; i++) {
  console.log("5 " + "x ", i, " = ", 5 * i);
} */

// calculate the sum of number from 1 to 10 using for loop
/* var total = 0;
for (var i = 1; i <= 10; i++) {
  total = total + i;
  console.log(total);
} */

// write a program to check if a number is prime.
/* var number = 13;
var isPrime = true;
for (var i = 2; i < number; i++) {
  if (number % i == 0) {
    isPrime = false;
  }
}

if (isPrime) {
  console.log("prime");
} else {
  console.log("not prime");
} */

// program to check if a year is leap year. if a year is divisible by 4 and not divisible by 100 or if a year is divisible by 400 then it is a leap year otherwise it is not a leap year
/* var year = 2024;
if ((year % 4 === 0 && year % 100 !== 100) || year % 400 === 0) {
  console.log("this is leap year");
} else {
  console.log("this is not leap year");
} */

// pattern design
/* for (var i = 1; i <= 5; i++) {
  var pattern = "";
  for (var j = 1; j <= i; j++) {
    pattern = pattern + " * ";
  }
  console.log(pattern);
} */
