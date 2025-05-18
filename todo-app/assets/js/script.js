const notes = document.querySelector("#notes-list");
const $form = document.querySelector("#notes-form");
const $input = document.querySelector("#notes-input");
const $incompleteCountSpan = document.querySelector("#incomplete-count");
const $clearCompletedBtn = document.querySelector("#clear-completed-btn");
const $allFilterBtn = document.querySelector("#all-filter-btn");
const $activeFilterBtn = document.querySelector("#active-filter-btn");
const $completedFilterBtn = document.querySelector("#completed-filter-btn");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.classList.add("todo-item");
  const taskContent = document.createElement("p");
  const checkBtn = document.createElement("input");
  const deleteBtn = document.createElement("button");
  const deleteIcon = document.createElement("img");
  checkBtn.setAttribute("type", "checkbox");

  checkBtn.addEventListener("click", () => {
    if (checkBtn.checked) {
      li.classList.remove("incomplete");
      li.classList.add("complete");
      showIncomplete();
      refreshFilter();
    } else {
      li.classList.remove("complete");
      li.classList.add("incomplete");
      showIncomplete();
      refreshFilter();
    }
  });

  deleteBtn.addEventListener("click", () => {
    notes.removeChild(li);
    showIncomplete();
  });

  taskContent.textContent = $input.value;
  deleteIcon.src = "./assets/icon-cross.svg";
  li.classList.add("note");
  li.classList.add("incomplete");
  deleteBtn.appendChild(deleteIcon);
  li.append(checkBtn, taskContent, deleteBtn);
  notes.appendChild(li);
  showIncomplete();
  $form.reset();
});

$clearCompletedBtn.addEventListener("click", () => {
  document.querySelectorAll(".complete").forEach((item) => item.remove());
  showIncomplete();
});

$allFilterBtn.addEventListener("click", filterAll);

$activeFilterBtn.addEventListener("click", filterActive);

$completedFilterBtn.addEventListener("click", filterCompleted);

function showIncomplete() {
  const incompleteCount = document.querySelectorAll(".incomplete").length;
  $incompleteCountSpan.textContent = `${incompleteCount} Items left`;
}

function filterAll() {
  $activeFilterBtn.classList.remove("active");
  $completedFilterBtn.classList.remove("active");
  $allFilterBtn.classList.add("active");
  document.querySelectorAll(".note").forEach((note) => {
    note.classList.remove("hidden");
  });
  console.log("filter all");
}

function filterActive() {
  $allFilterBtn.classList.remove("active");
  $completedFilterBtn.classList.remove("active");
  $activeFilterBtn.classList.add("active");
  document.querySelectorAll(".note").forEach((note) => {
    note.classList.remove("hidden");
  });
  document.querySelectorAll(".complete").forEach((note) => {
    note.classList.add("hidden");
  });
  console.log("filter active");
}

function filterCompleted() {
  $allFilterBtn.classList.remove("active");
  $activeFilterBtn.classList.remove("active");
  $completedFilterBtn.classList.add("active");
  document.querySelectorAll(".note").forEach((note) => {
    note.classList.remove("hidden");
  });
  document.querySelectorAll(".incomplete").forEach((note) => {
    note.classList.add("hidden");
  });
  console.log("filter completed");
}

function refreshFilter() {
  if ($allFilterBtn.classList.contains("active")) filterAll();
  else if ($activeFilterBtn.classList.contains("active")) filterActive();
  else filterCompleted();
}
