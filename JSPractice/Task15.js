fetch("https://jsonplaceholder.typicode.com/todos/5")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.title);
  });

async function Post() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
    const data = await res.json();
    if (data.userId == 5) {
      console.log("Approved");
    } else {
      console.log("Not Approved");
    }
  } catch (error) {
    console.log(error);
  }
}

Post();
