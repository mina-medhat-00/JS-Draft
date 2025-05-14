const $notes = document.querySelector("#notes-list");
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
    $notes.removeChild(li);
    showIncomplete();
  });

  taskContent.textContent = $input.value;
  deleteIcon.src = "./assets/icon-cross.svg";
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

$allFilterBtn.addEventListener("click", filterAll);

$activeFilterBtn.addEventListener("click", filterActive);

$completedFilterBtn.addEventListener("click", filterCompleted);

function showIncomplete() {
  const incompleteCount = document.querySelectorAll(".incomplete");
  $incompleteCountSpan.textContent = `${incompleteCount.length} Items left`;
}

function filterAll() {
  $activeFilterBtn.classList.remove("active-filter");
  $completedFilterBtn.classList.remove("active-filter");
  $allFilterBtn.classList.add("active-filter");
  document.querySelectorAll(".note").forEach((note) => {
    note.classList.remove("hidden-note");
  });
  console.log("filter all");
}

function filterActive() {
  $allFilterBtn.classList.remove("active-filter");
  $completedFilterBtn.classList.remove("active-filter");
  $activeFilterBtn.classList.add("active-filter");
  document.querySelectorAll(".note").forEach((note) => {
    note.classList.remove("hidden-note");
  });
  document.querySelectorAll(".complete").forEach((note) => {
    note.classList.add("hidden-note");
  });
  console.log("filter active");
}

function filterCompleted() {
  $allFilterBtn.classList.remove("active-filter");
  $activeFilterBtn.classList.remove("active-filter");
  $completedFilterBtn.classList.add("active-filter");
  document.querySelectorAll(".note").forEach((note) => {
    note.classList.remove("hidden-note");
  });
  document.querySelectorAll(".incomplete").forEach((note) => {
    note.classList.add("hidden-note");
  });
  console.log("filter completed");
}

function refreshFilter() {
  if ($allFilterBtn.classList.contains("active-filter")) filterAll();
  else if ($activeFilterBtn.classList.contains("active-filter")) filterActive();
  else filterCompleted();
}
