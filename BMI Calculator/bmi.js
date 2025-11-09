const form = document.querySelector("form");
const reset = document.getElementById("reset");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const results = document.getElementById("result");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Your BMI value is :Please enter a valid value`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Your BMI value is :Please enter a valid value`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = bmi;
  }
});
reset.addEventListener("click", function (e) {
  height = document.getElementById("height");
  weight = document.getElementById("weight");
  height.value = 0;
  weight.value = 0;
  const results = document.getElementById("result");
  results.innerHTML = "";
});
