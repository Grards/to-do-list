


// Module tasks.js
export function addTask(taskName) {
  const task = document.createElement("li");
  task.innerHTML = `
    <span class="task-name">${taskName}</span>
    <div class="actions">
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    </div>
    <div class="edit-container">
      <input type="text" class="edit-input" value="${taskName}">
      <button class="save-button">Save</button>
    </div>
  `;
  tasksList.appendChild(task);
}

export function deleteTask(task) {
  task.remove();
}

export function editTask(task) {
  const taskName = task.querySelector(".task-name");
  const editContainer = task.querySelector(".edit-container");
  const editInput = task.querySelector(".edit-input");

  editInput.value = taskName.textContent;
  taskName.style.display = "none";
  editContainer.style.display = "flex";
  editInput.focus();
}

export function markTaskAsDone(task) {
  const taskName = task.querySelector(".task-name");
  taskName.classList.toggle("done");
}

export function deleteAllTasks() {
  tasksList.innerHTML = "";
}

export function deleteSelectedTasks() {
  const selectedTasks = document.querySelectorAll(".selected");
  selectedTasks.forEach((task) => task.remove());
}





