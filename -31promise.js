let a = 7;
new Promise((resolve, reject) => {
  if (a == 71) {
    resolve("done");
  } else {
    reject("some thing wrong");
  }
})
  .then((re) => {
    console.log(re);
  })
  .catch((err) => {
    console.log(err);
  });

function TimeChecking() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Display after 5 seconds");
    }, 5000);
  });
}

async function Display() {
  let result = await TimeChecking();
  console.log(result);
}
Display();

async function API() {
  const response = await fetch("https://api.github.com/users/FAHADAZHAR806");
  const data = await response.json();

  console.log(data.name); // ✔ Correct
}
API();
