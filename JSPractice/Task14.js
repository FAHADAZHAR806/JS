const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task1 done");
  }, 2000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task2 done");
  }, 4000);
});
const p3 = new Promise((resolve) => {
  resolve("Instant task");
});

Promise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});

let prom1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("A done");
  },3000);
});
let prom2 = new Promise((resolve) => {
  setTimeout(()=>{
    resolve("B done")
  },2000)
});
Promise.race([prom1,prom2]).then((res)=>{
  console.log(res);
  
})
