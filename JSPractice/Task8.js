function processNumbers(arr, callback) {
  arr.forEach((item) => {
    let result = callback(item);
    console.log(result);
  });
}
function multiply(num) {
  return num * 2;
}
processNumbers([1, 2, 3], multiply);

const number = [1, 2, 3];
const double = (number, callback) => {
  number.map((item) => {
    return callback(item);
  });
};

function mapping(x) {
  let mult = x * 2;
  console.log(mult);
}
double([1, 2, 3], mapping);

function timer() {
  console.log("Starting");
  setTimeout(() => {
    console.log("Task completed after 2 seconds");
  }, 2000);
}
timer()
