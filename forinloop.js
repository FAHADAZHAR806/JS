// for in loop
const obj = {
  name: "Fahad",
  age: 27,
  height: "5.9ft",
};

for (const key in obj) {
  console.log(key);
}

for (const key in obj) {
  console.log(` ${key} : ${obj[key]}`);
}
const obj1 = ["banana", , "apple", "mangoo"];

// for each

// A method available only on arrays, used to run a function for each element in the array.
obj1.forEach((items) => {
  console.log(items);
});
const languages = ["Js", "python", "java"];

function lang(item) {
  console.log(item);
}
languages.forEach(lang);

// for loop when number of iteration is known
// while loop when number of iteration is unknown check until condition met
// do while when you want to exceute atelease once whether condition met or not met
// for of loop works on  Array map, string, sets iteartes overvalue
// for in loop works on  Objects iteartes over key value pairs
// for each loop works on  Arrays only iteartes over  value with optional index
let languagess = [
  { language: "js", file: ".js" },
  { language: "phyton", file: ".py" },
];
languagess.forEach((items) => {
  console.log(items);
});
languagess.forEach((items) => {
  console.log(items.language);
});
