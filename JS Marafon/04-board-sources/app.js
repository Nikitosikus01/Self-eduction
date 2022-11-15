const board = document.querySelector("#board");
const squares_number = 902;
const colors = [
  "rgb(255, 255, 0)",
  "rgb(240, 255, 0)",
  "rgb(225, 255, 0)",
  "rgb(210, 255, 0)",
  "rgb(195, 255, 0)",
  "rgb(180, 255, 0)",
  "rgb(165, 255, 0)",
  "rgb(150, 255, 0)",
];
for (let i = 0; i < squares_number; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  const color = getRadColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "rgb(36, 36, 36)";
  element.style.boxShadow = "0 0 2px rgb(36, 36, 36)";
}

function getRadColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
