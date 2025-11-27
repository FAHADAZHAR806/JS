function runTask(callback) {
  console.log("Task Started");
  callback();
  console.log("Task Ended");
}
function done() {
  console.log("Task finished!");
}
runTask(done);

function myFilter(arr, callback) {
  let result = [];

  for (const element of arr) {
    if (callback(element)) {
      result.push(element);
    }
  }
  return result;
}

function filtered(x) {
  return x > 4;
}
console.log(myFilter([1, 2, 3, 4, 5, 6, 9], filtered));

function delayMessage(message, callback) {
  console.log("waiting");
  setTimeout(() => {
    console.log(message);
    callback();
  }, 3000);
}
function done() {
  console.log("done");
}
delayMessage("Hello Fadi", done);

function repeatNTimes(callback, n) {
  for (let i = 1; i <= n; i++) {
    callback();
  }
  console.log("Done repeating");
}
repeatNTimes(() => console.log("Hello"), 3);
