class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return `${this._email}`;
  }
  set email(val) {
    this._email = val;
  }
  get password() {
    return `${this._password.toUpperCase()}123`;
  }
  set password(val) {
    this._password = val;
  }
}
const Fahad = new User("f@fahadai.com", "abc");
console.log(Fahad.password);
console.log(Fahad.email);
