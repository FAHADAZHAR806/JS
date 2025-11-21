class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
}
const Check = new User("Fahad", "fahad@123", 123);
console.log(Check.encryptPassword());
