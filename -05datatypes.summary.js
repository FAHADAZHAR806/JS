// Prmitive data types
// 7 types: String, Number , Boolean , null ,undefined, BigInt , Symbol
const score = 97; // number
const name = "john"; // string
const seconds = BigInt(23400.0); // BigInt
console.log(seconds);
const male = true; // Boolean
const weight = undefined; // undefined
let height; // undefined
console.log(weight, height);
const diease = null; // null
const id = Symbol(123); // symbol is always unique
const anotherid = Symbol(123);
console.log(id === anotherid);

// Reference  (Non Primitive)
// Arrays Objects, Functions

const marvelHeroes = ["SuperMan", "Captain Americe", "TonyStark"];
const Profile = {
  name: "Fahad",
  age: "27",
  Village: "Sehali Ferozal",
  Skills: ["Web Development", "Medical Billing", "FastBowling"],
};
const welcome = function () {
  console.log(welcome);
};
console.log(marvelHeroes);
console.log(Profile);
welcome();
console.log(Profile.Village);
console.log(typeof welcome);
console.log(typeof Profile, typeof marvelHeroes);
