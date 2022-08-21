const textInput = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  outputValue.textContent = event.currentTarget.value;
});
