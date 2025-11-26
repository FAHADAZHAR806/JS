let student = {
  name: "Ali",
  age: 14,
  Rollno: 1865,
  isPassed: true,
};
console.log(Object.values(student));
student.age = 16;
student.grade = "A";
console.log(student);

let calculator = {
  add: function (a, b) {
    let sum = a + b;
    return sum;
  },
  product: function (a, b) {
    let multiply = a * b;
    return multiply;
  },
};
console.log(calculator.add(2, 5), ",", calculator.product(2, 5));

let products = [
  { name: "Mobile", price: 24000, inStock: true },
  { name: "Laptop", price: 44000, inStock: true },
  { name: "Tablet", price: 31000, inStock: false },
];
for (let i = 0; i < products.length; i++) {
  console.log(
    "The name of product is",
    products[i].name,
    "The price of Prouct is",
    products[i].price
  );
}
