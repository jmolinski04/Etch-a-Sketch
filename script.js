const popupBtn = document.querySelector(".popup-btn");
const container = document.querySelector(".container");

const createBoard = (numberOfSquares) => {
  for (let i = 0; i < numberOfSquares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < numberOfSquares; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }

    container.appendChild(row);
  }
};

const popupWindow = () => {
  const userInput = parseInt(prompt("Enter desired size for the board"));
  if (!userInput) {
    alert("Please input a number");
  } else if (userInput > 100 || userInput < 1) {
    alert("Your input cannot be bigger than 100, nor less than 0");
  } else {
    createBoard(userInput);
  }
};

popupBtn.addEventListener("click", popupWindow);
