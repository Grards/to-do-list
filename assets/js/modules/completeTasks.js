import { updateTasks } from "./updateTasks.js"
export const taskFinished = document.getElementsByClassName("task-complete-button")   

export function completeTasks(){
    for(let task of taskFinished){
        console.log(task)
        task.classList.add("finished_true")
    }
    updateTasks
}