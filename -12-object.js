//destructring
const student = {
  id: 1,
  name: "Ali",
  age: 14,
  studentmarK: 98,
};
const { name, studentmarK: mark, age } = student;

console.log(name, age, mark);

//array destructing///

const array = [14, 32, 34, 34];
const [one, three, two] = array;
console.log(one, two, three);
