const popupBtn = document.querySelector(".popup-btn");
const container = document.querySelector(".container");

const createBoard = (numberOfRows) => {
  for (let i = 0; i < numberOfRows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < numberOfRows; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }

    container.appendChild(row);
  }
};

createBoard(5);
