let score = "33abc";
console.log(score, typeof score);
let valueinNumber = Number(score);
console.log(valueinNumber, typeof valueinNumber);
//-------------************-------------------//
let value = null;
let inNumber = Number(value);
console.log(value, typeof value);
console.log(inNumber, typeof inNumber);
//-------------************-------------------//

let boolean = true;
let InNumber = Number(boolean);
console.log(boolean, typeof boolean);
console.log(InNumber, typeof InNumber);
//-------------************-------------------//

const isLogged = 1;
const inBoolean = Boolean(isLogged);
console.log(isLogged, typeof isLogged);
console.log(inBoolean, typeof inBoolean);
//-------------************-------------------//

const str = "";
const InBoolean = Boolean(str);
console.log(str, typeof str);
console.log(InBoolean, typeof InBoolean);
//-------------************-------------------//

const string = "fahad";
const INBoolean = Boolean(string);
console.log(string, typeof string);
console.log(INBoolean, typeof INBoolean);
//-------------************-------------------//

let number = 3;
let negvalue = -number;
console.log(negvalue, typeof negvalue);

let add = "1";
console.log(add + 1); // 11
console.log(add + 1 + 1); // 111
console.log(1 + 1 + add); //21
console.log(5 + ((5 * 3) % 2)); // 6
console.log(((5 + 5) * 3) % 2); // 0
