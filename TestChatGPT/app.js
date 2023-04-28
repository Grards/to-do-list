import { addTask, deleteTask, editTask, markTaskAsDone, deleteAllTasks, deleteSelectedTasks } from "./tasks.js";

const form = document.querySelector(".task-form");
const input = document.querySelector(".task-input");
const addButton = document.querySelector(".task-add-button");
const tasksList = document.querySelector(".task-list");
const deleteButton = document.querySelector(".task-delete-button");
const selectAll = document.querySelector(".task-select-all");
const deleteSelected = document.querySelector(".task-delete-selected-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask(input.value);
  input.value = "";
});

addButton.addEventListener("click", () => {
  addTask(input.value);
  input.value = "";
});

tasksList.addEventListener("click", (event) => {
  const target = event.target;
  const taskItem = target.closest(".task-item");
  if (target.classList.contains("task-delete-button")) {
    deleteTask(taskItem);
  } else if (target.classList.contains("task-done-checkbox")) {
    markTaskAsDone(taskItem);
  } else if (target.classList.contains("task-edit-button")) {
    editTask(taskItem);
  }
});

deleteButton.addEventListener("click", () => {
  deleteAllTasks();
});

selectAll.addEventListener("click", () => {
  const taskItems = document.querySelectorAll(".task-item");
  taskItems.forEach((task) => {
    const checkbox = task.querySelector(".task-done-checkbox");
    checkbox.checked = true;
    task.classList.add("completed");
  });
});

deleteSelected.addEventListener("click", () => {
  deleteSelectedTasks();
});

