const popupBtn = document.querySelector(".popup-btn");

const createGridLayout = (numberOfSquares) => {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
};

createGridLayout(16);
