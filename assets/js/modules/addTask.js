import { showTasks } from "./showTasks.js"

/**
 * This function get the informations of the form.
 * Then, she build a new object (newTask)
 * And finally, she add this object in the localStorage
 */
export function addTask(){
    const taskTitle = document.getElementById("task-title")
    const taskInformations = document.getElementById("task-informations")
    const taskCompletion = document.getElementById("task-completion")
    const taskDeadline = document.getElementById("task-deadline")

    if(taskTitle.value == "" || taskInformations.value == "" || taskDeadline == null){
        alert("You must enter all informations of your task !")
    }else{
        const oldTasks = JSON.parse(window.localStorage.getItem("tasks")) || []
        const newTask = {
            id : dateNow(),
            "title" : taskTitle.value,
            "informations" : taskInformations.value,
            completion : taskCompletion.checked,
            deadline : taskDeadline.value
        }
        oldTasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(oldTasks))
    }
    showTasks()
}

function dateNow(){
    // const idRandom = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
    const dateNow = Date.now()
    return dateNow
}