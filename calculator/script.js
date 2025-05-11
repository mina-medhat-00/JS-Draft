const $nums = document.querySelectorAll(".nums");
const $ops = document.querySelectorAll(".ops");

let operand1 = new String();
let operand2 = new String();
let operand1Turn = true;

$nums.forEach((num) => {
  num.addEventListener("click", () => {
    operand1Turn
      ? (operand1 += num.textContent)
      : (operand2 += num.textContent);
    console.log(operand1, operand2);
  });
});

$ops.forEach((op) => {
  op.addEventListener("click", () => {
    if (operand1Turn) {
    } else {
    }
  });
});
