let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Fadi learned Promises!");
  }, 3000);
});
promise
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => {
    console.log(`${res.toUpperCase()}`);
  })
  .catch((err) => {
    console.log(err);
  });
