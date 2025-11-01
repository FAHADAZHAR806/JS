let num = 10;
for (let i = 1; i <= num; i++) {
  values = 2 * [i];
  console.log(values);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Table of  ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}*${j}= ${i * j}`);
  }
}
/*
for (let i = 1; i <= 10; i++) {
  let result = 3 * [i];
  console.log(`3*${i}=${result}`);
}
*/
