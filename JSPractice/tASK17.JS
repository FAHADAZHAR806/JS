// function processNumbers(numbers, square) {
//   let result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     result.push(square(numbers[i]));
//   }
//   return result;
// }
// function square(num) {
//   return num * num;
// }
// const number = [1, 2, 34];
// console.log(processNumbers(number, square));

function processNumbers(numbers, square) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      result.push(square(numbers[i]));
    }
  }
  return result;
}
function square(num) {
  return num * num;
}
const number = [1, 2,-9,-3, 34];
console.log(processNumbers(number, square));
