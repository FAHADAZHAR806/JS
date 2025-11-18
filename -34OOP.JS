//object literals
const user = {
  username: "Fahad",
  loginCount: 8,
  SignIn: true,
  getUserDetails: function () {
    console.log(this.username);
    console.log(this);
  },
  getUserDetails1: () => {
    console.log(this.username);
    console.log(this);
  }, // remember this doesnot work with arrow function
};
console.log(user.username);
console.log(user.getUserDetails());
console.log(user.getUserDetails1());
