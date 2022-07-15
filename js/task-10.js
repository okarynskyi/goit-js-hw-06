function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.height = `${20 + i * 10}px`;
    divEl.style.width = `${20 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(divEl)
  }
}

function destroyBoxes() {
  boxes.innerHTML = " ";
}

createBtn.addEventListener("click", () => createBoxes(input.value))
destroyBtn.addEventListener("click", destroyBoxes)