let food = ["Biryani", "Beaf", "Pulao"];
food.forEach((items) => {
  console.log(`I want to eat ${items}`);
});
let square = [2, 4, 6, 8];
const result = square.map((items) => {
  return items * 2;
});
console.log(result);
let people = [
  { name: "Hamza", age: 17 },
  { name: "Fadi", age: 22 },
  { name: "Babar", age: 15 },
  { name: "Ali", age: 19 },
];
const adult = people.filter((items) => {
  return items.age > 19;
});
console.log(adult);

let items = [
  { name: "Mouse", price: 1200 },
  { name: "Keyboard", price: 2500 },
  { name: "Headphone", price: 3500 },
  { name: "Mic", price: 5000 },
];
let values = items.find((item) => {
  return item.price > 3000;
});
console.log(values);
let list=[500, 1500, 2000, 3000]
let total=list.reduce((acc,curr)=>{
  return acc+curr
},0)
console.log(total);
