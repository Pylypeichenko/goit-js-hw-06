function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let array = [];

  for (let i = 0; i < amount; i += 1) {
    const box = `<div style="width:${30 + 10 * i}px; height:${
      30 + 10 * i
    }px; background-color:${getRandomHexColor()}"></div>`;

    array.push(box);
  }

  const markup = array.join("");
  boxes.insertAdjacentHTML("beforeend", markup);

  return boxes;
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

createButton.addEventListener("click", (event) => {
  createBoxes(`${Number(input.value)}`);
});

destroyButton.addEventListener("click", destroyBoxes);
