const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeInput.addEventListener("input", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
