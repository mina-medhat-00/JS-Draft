const $notes = document.querySelector("#notes-list");
const $form = document.querySelector("#notes-form");
const $input = document.querySelector("#notes-input");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const checkBtn = document.createElement("input");
  checkBtn.setAttribute("type", "checkbox");
  const p = document.createElement("p");
  const deleteBtn = document.createElement("button");
  const embed = document.createElement("embed");
  embed.src = "./images/icon-cross.svg";
  deleteBtn.appendChild(embed);

  checkBtn.addEventListener("click", () => {
    if (checkBtn.checked) {
      p.classList.add("checked");
    } else {
      p.classList.remove("checked");
    }
  });

  deleteBtn.addEventListener("click", () => {
    $notes.remove(li);
  });

  p.textContent = $input.value;
  li.append(checkBtn, p, deleteBtn);
  $notes.appendChild(li);
  console.log($notes.childElementCount);
  $form.reset();
});
