let isLogged = true;
if (isLogged) {
  console.log("user is loggedin");
}

let username = "valid";
let age = 20;
if (username === "valid" && age > 20) {
  console.log("user qualified");
} else {
  console.log("not qualifiedd");
}

let marks = 250;
if (marks < 100) {
  console.log("not promoted");
} else if (marks > 100 && marks <= 150) {
  console.log("promoted");
} else if (marks > 150 && marks <= 190) {
  console.log("good promoted");
} else {
  console.log("Top performer");
}

const month = "january";
switch (month) {
  case "feburary":
    console.log("feburary");
    break;
  case "june":
    console.log("june");
    break;
  case "january":
    console.log("january");
    break;
  case "april":
    console.log("april");
    break;

  default:
    console.log("Not listed");
    break;
}
// falsy values
//false, 0, -0, BigInt, 0n, null, undefined, NAN, "";
// truty  values

//string, number, true, "0", "false", [], {}, function () {};

let userEmail = ["fahadkiyani123@gmail.com"];
if (userEmail.length === 0) {
  console.log("No email found");
} else {
  console.log(`User Email is  ${userEmail}`);
}

let userData = {
  name: "Fahad",
  age: "27",
  desig: "developer",
  Domain: "Full Stack Devlopment",
};
if (Object.keys(userData).length === 0) {
  console.log("No date found");
} else {
  console.log(Object.values(userData));
}

// Nullish Coalescing Operator ??
let val1 = 34 ?? 24;
let val2 = null ?? 39;
let val3 = null ?? undefined ?? "" ?? 45;
let val4 = null ?? undefined ?? 55;
let total = val1 + val2 + val3 + val4;
console.log(total);
console.log(typeof total);
console.log(total.length);
console.table([total]);
console.log([total]);

// Nullish Coalescing Operator ?? and Ternary Operator both are different ?
const price = 400;
price > 400 ? console.log("greater") : console.log("smaller");
