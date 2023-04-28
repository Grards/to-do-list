import { savedTasks } from "./savedTasks.js"
import { showTasks } from "./showTasks.js"

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
            id : idRandom(),
            "title" : taskTitle.value,
            "informations" : taskInformations.value,
            completion : taskCompletion.checked,
            deadline : taskDeadline.value
        }
        oldTasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(oldTasks))
    }
}

function idRandom(){
    // const idRandom = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
    const idRandom = Date.now()
    return idRandom
}