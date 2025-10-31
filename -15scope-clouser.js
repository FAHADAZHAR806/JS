function one() {
  const username = "fahad";
  function two() {
    const website = "www.google.com";
    console.log(username);
  }
  // console.log(website);   concept of clouser where inner function have access of outer function
  // but outer function does not  have access of inner function
  two();
}
console.log(one());

if (true) {
  const username = "fahad1";
  if (username === "fahad1") {
    const website = "youtube";
    console.log(`${username} on ${website}`);
  } else {
    ///  console.log(website); not working scope already closed
    console.log("Not found");
  }
}
