// 1️⃣ Write code that prints this using clean nested setTimeout:
setTimeout(() => {
  console.log("loading...");
}, 0);
setTimeout(() => {
  console.log(5);
}, 1000);
setTimeout(() => {
  console.log(4);
}, 2000);
setTimeout(() => {
  console.log(3);
}, 3000);
setTimeout(() => {
  console.log(2);
}, 4000);
setTimeout(() => {
  console.log(1);
}, 5000);
setTimeout(() => {
  console.log("Done");
}, 6000);
