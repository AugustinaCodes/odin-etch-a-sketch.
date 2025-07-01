const container = document.querySelector("#container");

function generateGrid(userChoice) {
  for (let i = 0; i < userChoice; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < userChoice; j++) {
      const cell = document.createElement("div");
      cell.classList.add("square");
      column.appendChild(cell);
    }
    container.appendChild(column);
  }
}

const cells = document.querySelectorAll(".square");
cells.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.classList.add("hovered");
  });
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const answer = prompt(
    "Enter number of squares per side you'd like your new grid to be"
  );
  const number = Number(answer);

  if (number > 100) {
    const notification = document.createElement("div");
    notification.textContent = "Please enter a number smaller than a 100";
    notification.id = "notif";
    document.body.appendChild(notification);
  } else {
    document.querySelector("#notif").remove();
    generateGrid(number);
  }
});
