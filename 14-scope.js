{
  let a = 10;
  const b = 20;
  var c = 30;
}
c = 90;
console.log(c);
// let and const are block scope so you cannot acces it from outside  block {} but you can access var because
// var is not considerd as block scope
function vari() {
  var d = 34;
  let k = 90;
  const l = 99;
  let result = [d, k, l];
  return result;
}
console.log(vari());
///a s remember var is fuctional scope when you declare in function you cannot each it  from outside of fun
