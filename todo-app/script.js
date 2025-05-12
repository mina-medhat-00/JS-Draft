const $notes = document.querySelector("#notes-list");
const $form = document.querySelector("#notes-form");
const $input = document.querySelector("#notes-input");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const taskContent = document.createElement("p");
  const checkBtn = document.createElement("input");
  const checkIcon = document.createElement("img");
  const deleteBtn = document.createElement("button");
  const deleteIcon = document.createElement("img");
  checkBtn.setAttribute("type", "checkbox");

  checkBtn.addEventListener("click", () =>
    checkBtn.checked
      ? taskContent.classList.add("completed")
      : taskContent.classList.remove("completed")
  );

  deleteBtn.addEventListener("click", () => {
    $notes.removeChild(li);
  });

  taskContent.textContent = $input.value;
  checkIcon.src = "./images/icons-check.svg";
  deleteIcon.src = "./images/icon-cross.svg";
  li.classList.add("note");
  
  deleteBtn.appendChild(deleteIcon);
  li.append(checkBtn, taskContent, deleteBtn);
  $notes.appendChild(li);
  $form.reset();
});
