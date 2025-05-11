const $cells = document.querySelectorAll(".cell");

let turnX = true;
let patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

$cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (turnX) {
      cell.textContent = "X";
      turnX = false;
      cell.disabled = true;
      checkData();
    } else {
      cell.textContent = "O";
      turnX = true;
      cell.disabled = true;
      checkData();
    }
  });
});

function checkData() {
  patterns.forEach((pattern) => {
    const [a, b, c] = pattern;
    if (
      $cells[a].textContent === $cells[b].textContent &&
      $cells[b].textContent === $cells[c].textContent &&
      $cells[a].textContent !== ""
    ) {
      $cells[a].textContent === "X"
        ? console.log("X Wins")
        : console.log("Y Wins");
      disableCells();
      return;
    }
  });
}

function disableCells() {
  $cells.forEach((cell) => (cell.disabled = true));
}
