const buttonDecrement = document.querySelector(
  "button[data-action='decrement']"
);
const buttonIncrement = document.querySelector(
  "button[data-action='increment']"
);
const counterValue = document.querySelector("#value");

const counterUpClick = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};
const counterDownClick = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

buttonDecrement.addEventListener("click", counterDownClick);
buttonIncrement.addEventListener("click", counterUpClick);
