console.log("Start");
console.log("Middle");
console.log("End");

console.log("A");
//Write async code using setTimeout:
// setTimeout(() => {
//   console.log("B");
// }, 2000);
// console.log("C");

// Make a countdown:
setTimeout(() => console.log(3), 1000);
setTimeout(() => console.log(2), 2000);
setTimeout(() => console.log(1), 3000);
setTimeout(() => console.log("GO!"), 4000);

let count = 0;

const interval = setInterval(() => {
  console.log("Tick");

  count++;
  if (count === 5) {
    clearInterval(interval);
    console.log("Done!");
  }

}, 1000);

