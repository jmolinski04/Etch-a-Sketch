const popupBtn = document.querySelector(".popup-btn");
const container = document.querySelector(".container");
const defaultBoardSize = 16;

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
  if (userInput > 100 || userInput < 1 || userInput === 0) {
    alert("Your input cannot be bigger than 100, nor less than 0");
  } else if (!userInput) {
    alert("Please input a number");
  } else {
    container.innerHTML = "";
    createBoard(userInput);
  }
};

window.addEventListener("load", () => createBoard(defaultBoardSize));
popupBtn.addEventListener("click", popupWindow);

// Create better error messages
// 1) Dynamically create a <p> element
// 2) Add custom styling to it
// 3) Append it as a sections child
// 4) Update te code in the popupWindow function
