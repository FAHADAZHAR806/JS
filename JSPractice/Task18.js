const users = [
  { name: "Ali", age: 17 },
  { name: "Sara", age: 20 },
  { name: "Ahmed", age: 18 },
];
function filterAndTransform(users, toUpperCase) {
  let namee = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      namee.push(toUpperCase(users[i].name));
    }
  }
  return namee;
}
function toUpperCase(n) {
  return n.toUpperCase();
}

console.log(filterAndTransform(users, toUpperCase));
