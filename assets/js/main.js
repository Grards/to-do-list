import { submitForm, renderTasks } from "./modules/tasks.js"

renderTasks() // first render since last visit of the site
document.addEventListener('submit', submitForm)
