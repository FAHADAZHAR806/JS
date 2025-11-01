let isLogged=true
if(isLogged){
  console.log("user is loggedin")
}

let username="valid"
let age=20
if(username==="valid"&& age>20){
  console.log("user qualified")
}else{
  console.log("not qualifiedd")
}

let marks=250
if(marks<100){
  console.log("not promoted")
}else if(marks>100 && marks<=150 ){
  console.log("promoted")
}else if(marks>150 && marks<=190){
  console.log("good promoted")
}else{
  console.log("Top performer")
}