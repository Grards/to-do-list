import { tasksForm, submitForm, renderTasks } from "./modules/tasks.js"
import { mobileTaskButton, toggleTaskMenu } from "./modules/mobileTaskMenu.js"
import { minimumDate } from "./modules/datePicker.js"

renderTasks() // first render since last visit of the site
minimumDate() // set the minimum date for deadlines

tasksForm.addEventListener('submit', submitForm)
mobileTaskButton.addEventListener('click', toggleTaskMenu)