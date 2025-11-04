const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const newnums = myNumbers.filter((items) => items > 2);
console.log(newnums);

const greaterthanfive = myNumbers.filter((items) => {
  num = items > 3;
  return num;
});
console.log(greaterthanfive);

const books = [
  { title: "Book1", type: "History", Publish: 1980 },
  { title: "Book2", type: "Politics", Publish: 1990 },
  { title: "Book3", type: "Science", Publish: 1980 },
  { title: "Book4", type: "History", Publish: 1994 },
  { title: "Book5", type: "Technology", Publish: 20004 },
];

const bookData = books.filter((bk) => {
  return bk.type === "History";
});
console.log(bookData);
const newbook = books.filter((bk) => {
  return bk.type === "History" || bk.Publish === 1980;
});
console.log(newbook);

let nums = [2, 4, 6, 8, 10];
let result = nums
  .map((val) => {
    return val * 2;
  })
  .filter((val) => {
    return val > 10;
  })
  .map((num) => {
    return num * 5;
  });
console.log(result);
