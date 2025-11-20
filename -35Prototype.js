const multiply = function (num) {
  return num * 5;
};
multiply.power = 2;
console.log(multiply(5));
console.log(multiply.power);

const Profile = function (name, score) {
  this.score = score;
};

const hero = ["thor", "captainAmerica"];
const heroPowers = {
  thor: "Hammer",
  captainAmerica: "Shield",
  getPower: function () {
    return this.thor;
  },
};
console.log(heroPowers.getPower());
Object.prototype.Fahad = function () {
  console.log("Fahad is everywhere");
};

heroPowers.Fahad();
hero.Fahad();
Array.prototype.FahadLimit = function () {
  console.log("Fahad have some limits");
};
//heroPowers.FahadLimit(); not allowed beacuse its an array not an object
hero.FahadLimit();
const username = "Fahad     ";
const usernametwo = "Waji    ";
console.log(`${username.length}, ${usernametwo.length}`);

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is: ${this.trim().length}`);
};

username.trueLength();
usernametwo.trueLength();
