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
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add("div-box");

    boxes.append(box);
  }
  return boxes;
};

const destroyBoxes = () => {
  const divBoxes = boxes.children;

  for (const divBox of divBoxes) {
    divBox.remove();
  }
};

createButton.addEventListener("click", (event) => {
  createBoxes(`${Number(input.value)}`);
});

destroyButton.addEventListener("click", (event) => {
  destroyBoxes();
});
