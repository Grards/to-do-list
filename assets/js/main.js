const tasksForm = document.getElementById("task-form")
// const tasksCards = document.getElementsByClassName("task-card")

// import { tasksForm, submitForm, renderTasks } from "./modules/tasks.js"
import { mobileTaskButton, toggleTaskMenu } from "./modules/mobileTaskMenu.js"
import { minimumDate } from "./modules/datePicker.js"
import { addTask } from "./modules/addTask.js"
import { showTasks } from "./modules/showTasks.js"

showTasks() // first render since last visit of the site
minimumDate() // set the minimum selected date for "deadlines" in the form

// Show and hide the form in mobile version
mobileTaskButton.addEventListener('click', toggleTaskMenu)

// Adding a task from the form
tasksForm.addEventListener('submit', event => {
    event.preventDefault()
    addTask()
})