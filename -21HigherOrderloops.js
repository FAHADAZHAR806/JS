// for of
const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
  console.log(element);
}
const greet = "Hello world";
for (const element of greet) {
  console.log(element);
  console.log(greet.length);
}

/// map is nown for its uniqueness

/// map is not itereable
const map = new Map();
map.set("Pk", "Pakistan");
map.set("IN", "India");
map.set("US", "United States");
map.set("Pk", "Pakistan");
console.log(map);
console.log(map.length);
console.log(typeof map);
console.log(Object.keys(map));
console.log(Object.values(map));
