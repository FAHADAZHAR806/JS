// object literals
let symbol = Symbol("phone");
const user = {
  name: "Fahad",
  age: 27,
  height: "5.9ft",
  email: "fahad@123gmail.com",
  isLogged: true,
  lastLoggedDays: ["Monday", "Wednesday"],
  [symbol]: +923415742411,
};
console.log(user["height"]);
console.log(user.height);
console.log(user["lastLoggedDays"][1]);
console.log(user.lastLoggedDays[1]);
console.log(user[symbol]);
console.log(typeof user[symbol]);
user.name = "fahadazhar";
console.log(user);
Object.freeze(user);
user.name = "FahadAzhar";
console.log(user);

// oject singeleton

const tinderUser = new Object();
tinderUser.id = "abc123";
tinderUser.name = "saim";
tinderUser.isLoggedIn = "false";
console.log(tinderUser);

const regularUser = {
  email: "faad28@gmail.com",
  name: {
    fullname: {
      firstname: "Fahad",
      lastname: "Azhar",
    },
  },
};
console.log(regularUser["name"]["fullname"]["lastname"]);
console.log(regularUser.name.fullname);
console.log(Object.keys(tinderUser));
console.log(typeof Object.keys(tinderUser));
console.log(Object.values(tinderUser));
