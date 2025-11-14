const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
let interval;
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

function change() {
  interval = setInterval(() => {
    document.body.style.backgroundColor = randomColor();
  }, 1000);
}

function stopchange() {
  console.log("stopped");

  clearInterval(interval);
  interval = null;
}
start.addEventListener("click", change);
stop.addEventListener("click", stopchange);
