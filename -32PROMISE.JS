async function Api() {
  try {
    const api = fetch("https://api.github.com/users/FAHADAZHAR806");
    const data = await api;
    response = await data.json();
    console.log(response);
    console.log(`${response.name}  Followers ${response.following} `);
  } catch {
    console.log("Some Thing wrong");
  }
}

Api();
