function processNumbers(numbers, square) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(square(numbers[i]));
  }
  return result;
}
function square(num) {
  return num * num;
}
const number = [1, 2, 34];
console.log(processNumbers(number, square));
