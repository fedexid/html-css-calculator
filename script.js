const hasil = document.querySelector(".output");
const submit = document.querySelector(".equal-btn");
const reset = document.querySelector(".ac-btn");

reset.addEventListener("click", (e) => {
  e.preventDefault();
  hasil.textContent = "0";
});

const numberButton = document.querySelectorAll(".number-btn");

numberButton.forEach((number) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    let currentNumber = "";
    currentNumber += e.target.value;
    hasil.textContent = currentNumber;
  });
});
