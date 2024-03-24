const popupBtn = document.querySelector(".popup-btn");
const container = document.querySelector(".container");

const createGrid = (numberOfSquares) => {
  for (let i = 0; i < numberOfSquares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
    container.appendChild(row);
  }
};

createGrid(64);
