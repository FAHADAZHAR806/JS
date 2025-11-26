let name = "Fahad";
let city = "Kahuta";
let hobby = "Cricket";
console.log(`My name is ${name}, I live in  ${city}, and I love ${hobby}.`);

let car = {
  brand: "Honda",
  model: "Civic",
  year: 2020,
};
let { brand, model, year } = car;
console.log(brand, model, year);

let colors = ["Red", "Green", "Blue"];
let [c1, c2, c3] = colors;
console.log(c1, c2, c3);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merge = [...arr1, ...arr2];
console.log(merge);

function multiply(...nums) {
  let product = 1;
  for (let items of nums) {
    product = product * items;
  }
  return product;
}

console.log(multiply(2, 5, 6));
console.log(multiply(2, 9, 6));
console.log(multiply(2, 2, 6));
