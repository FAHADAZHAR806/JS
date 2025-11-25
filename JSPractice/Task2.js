let firstNumber = 23;
let secondNumber = 23;
let remainder = firstNumber % 2;
let marks = 89;

// Number comparison
if (firstNumber > secondNumber) {
  console.log("First number is greater");
} else if (firstNumber === secondNumber) {
  console.log("Both numbers are equal");
} else {
  console.log("Second number is greater");
}

// Even or Odd check
if (remainder === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Grade calculation
if (marks >= 90) {
  console.log("A+");
} else if (marks >= 75) {
  console.log("B");
} else if (marks >= 50) {
  console.log("C");
} else {
  console.log("Fail");
}
