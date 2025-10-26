//Stack(Primitive)   Heap(Non-Primitive)
let name = "fahad";
let fullname = name;
fullname = "fahadazhar";
console.log(name);
console.log(fullname);

// in stack or primitivate datetype ma just copy milti ha agr hm value ko update krty hn to original one update ni hota
// in heap or non-primitive datatype ma hm reference pss krty hn jb hm value update rty hn to original one b update hoti ha
let userDetails = {
  name: "fahad",
  password: "****",
  email: "fahad@123",
};
const userDetailsupdate = userDetails;
userDetailsupdate.email = "fahadkiyani123@gmail.com";
console.log(userDetails.email);
console.log(userDetailsupdate.email);
