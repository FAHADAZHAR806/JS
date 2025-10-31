// immediately invoke function expression

// global scope k pollution sa bachny k liya hm IIFE use krty hn smi colon must
(function add(num1, num2) {
  console.log(num1 + num2);
})(32, 34);
