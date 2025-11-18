function User(username, loginCount, islogged) {
  this.username = username;
  this.loginCount = loginCount;
  this.islogged = islogged;
  return this;
}
const user = new User("Fahad", 8, true);
const userone = new User("FahadAzhar", 5, false);
console.log(user);
console.log(userone);

///  new word create empty object which generate instances
