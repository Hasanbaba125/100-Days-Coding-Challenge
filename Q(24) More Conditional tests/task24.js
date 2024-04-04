"use strict";
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
// Define Variables
let mango = "mango";
let uppercaseMango = "MANGO";
let ten = 10;
let twenty = 20;
let fruits = ["mango", "apple", "banana", "orange"];
// Test for equality and inequality with strings
console.log("Is mango is equal to mango?");
console.log(mango == "mango");
console.log("\nIs mango is not equal to mango?");
console.log(mango != "mango");
// Test using Lowercase Function
console.log("\nIs MANGO is equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() == "mango");
console.log("\nIs MANGO is not equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() != "mango");
// Numerical tests
// Equal to
console.log('\nIs ten is equal to twenty?');
console.log(ten == twenty);
// Not Equal to
console.log('\nIs ten is not equal to twenty?');
console.log(ten != twenty);
// Greater than
console.log('\nIs ten is greater than five?');
console.log(ten > 5);
// Less than
console.log('\nIs twenty is less than ten?');
console.log(twenty < 10);
//Greater than or equal to
console.log('\nIs ten is greater than or equal to 5?');
console.log(ten >= 5);
// Less than or equal to
console.log('\ntwenty is less than or equal to 10?');
console.log(twenty <= 10);
//Tests using "and" & "or" operators
//Using && (and)
console.log('\ntwenty is not equal to 10 and twenty is greater than 10');
console.log(twenty != 10 && twenty > 10);
console.log('\ntwenty is not equal to 10 and twenty is greater than 10');
console.log(twenty != 10 && twenty > 30);
//Using || (OR)
console.log('\ntwenty is greater than 50 OR twenty is equal to 20');
console.log(twenty > 50 || twenty == 20);
console.log('\ntwenty is greater than 50 OR twenty is not equal to 20');
console.log(twenty > 50 || twenty != 20);
//Test whether an item is include in array
console.log("\nIs orange include in my Fruits array");
console.log(fruits.includes("orange"));
//not include
console.log("\nIs orange not include in my Fruits array");
console.log(!fruits.includes("orange"));
