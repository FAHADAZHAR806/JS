const user = {
  username: "fahad",
  price: "$500",
  welcomemessage: function () {
    console.log(`${this.username} welcome to website`);
    console.log(this);
  },
};
console.log(user.welcomemessage());
console.log(this);

/*function abc() {
  const user = "hihihi";
  console.log(this.user);
}
abc();
this works welll in object 
*/
const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(4, 55));

// implicit return both below mention  example when we use return curly bracket is must
const addnum = (num1, num2) => num1 + num2;
const addnumm = (num1, num2) => num1 + num2;
console.log(addnum(34, 55));
console.log(addnumm(344, 55));
