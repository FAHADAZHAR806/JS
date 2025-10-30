const func = function (name = "noname") {
  return console.log("my name is ", name);
};
func("fahad");
func("waji");
func("muhammad");
console.log(func());
function isLogged(name) {
  if (name === undefined || name === "") {
    return `please enter username`;
  }
  return `${name} is just logged in`;
}

console.log(isLogged("fahad"));
console.log(isLogged());
console.log(isLogged("waji"));

////////// function with obj and arrays//////////
function claculatecartprice(...num) {
  return num;
}
console.log(claculatecartprice(300, 400, 800, 900));

const handleobject = {
  username: "ali",
  age: 27,
};
function Userdata(any) {
  return `the Username is ${any.username} and user age is ${any.age}`;
}
Userdata(handleobject);
console.log(Userdata(handleobject));
