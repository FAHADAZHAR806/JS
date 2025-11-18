function User(username, loginCount, islogged) {
  this.username = username;
  this.loginCount = loginCount;
  this.islogged = islogged;
  console.log(username, loginCount, islogged);
}
User("Fahad", 8, true);
