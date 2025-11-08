const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");
boxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "orangered") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellowgreen") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

const heading = document.querySelector("h1");
const para = document.querySelector("p");

boxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    if (e.target.id === "blue") {
      heading.style.color = "white";
      para.style.color = "white";
    }
    if (e.target.id === "orangered") {
      heading.style.color = "black";
      para.style.color = "black";
    }
    if (e.target.id === "yellow") {
      heading.style.color = "blac";
      para.style.color = "black";
    }
    if (e.target.id === "yellowgreen") {
      heading.style.color = "white";
      para.style.color = "white";
    }
  });
});
