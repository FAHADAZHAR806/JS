function setUser(username) {
  this.username = username;
  console.log("called");
}
function createUser(username, email, password) {
  setUser.call(this, username);
  this.email = email;
  this.password = password;
}
const Fahad = new createUser("Fahad", "faha@123", "abc123");
console.log(Fahad);

//const PI = Object.getOwnPropertyDescriptor(Math, "PI");
//console.log(PI);

Object.defineProperty(Math, "PI", {
  writable: true,
  enumerable: false,
  configurable: true,
});

Math.PI = 7; // set whatever value you want
console.log(Math.PI);
