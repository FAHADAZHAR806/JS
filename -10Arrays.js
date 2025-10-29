const numbers = ["one", 2, "four"];
console.log(numbers);
console.log(numbers[2]);
console.log(numbers[3]);
numbers.push("five");
console.log(numbers[3]);
numbers.push({
  name: "fahad",
  age: 27,
});

console.log(numbers);
console.log(numbers.length);
console.log(numbers[4].name);

const marvel = new Array("Captain", "Tony", "Super");
console.log(marvel);
marvel.push(4, 5);
console.log(marvel);
console.log(marvel.length);
marvel.unshift("Thor");
console.log(marvel);
marvel.pop();
marvel.shift();
console.log(marvel);
console.log(marvel.includes("Tony"));
console.log(marvel.indexOf("Tony"));

console.log(marvel.slice(1, 2));
console.log(marvel);
console.log(marvel.splice(1, 2));
console.log(marvel);

let array1 = ["hi", "how", "are", "you"];
let array2 = ["i", "am", "good"];
console.log(array1.concat(array2));
let newone = [...array1, ...array2];
console.log(newone);
