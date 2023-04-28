import { updateTasks } from "./updateTasks.js"
export const taskFinished = document.getElementsByClassName("task-complete-button")   

export function completeTasks(button){
    button.classList.add("finished_true")
    updateTasks()
}