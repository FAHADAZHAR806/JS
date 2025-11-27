async function createPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Fadi",
      skill: "Mastering JS",
      level: "Day 10",
    }),
  });

  const data = await res.json();
  console.log(data);
}

createPost();
