class user {
  constructor(username) {
    this.username = username;
  }
  logme() {
    console.log(`User name is ${this.username}`);
  } // rember when we add static infront of methods its no avilable for child as well
}
class Teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  adcourses() {
    console.log(`${this.username} add three courses`);
  }
}
const User = new user("fahad");
User.logme();
const Teachers = new Teacher("Fahad");
Teachers.logme();
Teachers.adcourses();
