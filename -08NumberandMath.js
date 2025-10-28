const score = 100;
console.log(score);
const newScore = Number(300);
console.log(newScore);
console.log(typeof newScore.toString());
console.log(typeof newScore.toString().length);

const otherNumber = 234.343;
console.log(otherNumber.toPrecision(3));

//****************MATHS***************
console.log(Math);
console.log(Math.abs(-34));
console.log(Math.round(6.45));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.random() * 5 + 1);
console.log(Math.floor(Math.random() * 5) + 1);
const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
