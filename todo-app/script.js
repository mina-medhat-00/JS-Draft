const $notes = document.querySelector("#notes-list");
const $form = document.querySelector("#notes-form");
const $input = document.querySelector("#notes-input");
const $incompleteCountSpan = document.querySelector("#incomplete-count");
const $clearCompletedBtn = document.querySelector("#clear-completed-btn");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const taskContent = document.createElement("p");
  const checkBtn = document.createElement("input");
  const checkIcon = document.createElement("img");
  const deleteBtn = document.createElement("button");
  const deleteIcon = document.createElement("img");
  checkBtn.setAttribute("type", "checkbox");

  checkBtn.addEventListener("click", () => {
    if (checkBtn.checked) {
      li.classList.remove("incomplete");
      li.classList.add("complete");
      showIncomplete();
    } else {
      li.classList.remove("complete");
      li.classList.add("incomplete");
      showIncomplete();
    }
  });

  deleteBtn.addEventListener("click", () => {
    $notes.removeChild(li);
    showIncomplete();
  });

  taskContent.textContent = $input.value;
  checkIcon.src = "./images/icon-check.svg";
  deleteIcon.src = "./images/icon-cross.svg";
  li.classList.add("note");
  li.classList.add("incomplete");
  deleteBtn.appendChild(deleteIcon);
  li.append(checkBtn, taskContent, deleteBtn);
  $notes.appendChild(li);
  showIncomplete();
  $form.reset();
});

$clearCompletedBtn.addEventListener("click", () => {
  document.querySelectorAll(".complete").forEach((item) => item.remove());
  showIncomplete();
});

function showIncomplete() {
  const incompleteCount = document.querySelectorAll(".incomplete");
  $incompleteCountSpan.textContent = `${incompleteCount.length} Items left`;
}
