import { savedTasks } from "./savedTasks.js"
import { showTasks } from "./showTasks.js"

export function addTask(){
    const taskTitle = document.getElementById("task-title")
    const taskInformations = document.getElementById("task-informations")
    const taskCompletion = document.getElementById("task-completion")
    const taskDeadline = document.getElementById("task-deadline")

    let test = []

    if(taskTitle.value == "" || taskInformations.value == "" || taskDeadline == null){
        alert("You must enter all informations of your task !")
    }else{
        const oldTasks = JSON.parse(window.localStorage.getItem("tasks")) || []
        console.log(oldTasks)

        const newTask = {
            id : idRandom(),
            "title" : taskTitle.value,
            "informations" : taskInformations.value,
            completion : taskCompletion.checked,
            deadline : taskDeadline.value
        }

        oldTasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(oldTasks))
        console.log(localStorage)
       

        // tasksExistants.push({
        //     // id : tasksExistants.length,
        //     "title" : taskTitle.value,
        //     "informations" : taskInformations.value,
        //     "completion" : taskCompletion.checked,
        //     "deadline" : taskDeadline.value
        // })
        // tasksExistants.push([tasksExistants.length, taskTitle.value, taskInformations.value, taskCompletion.checked, taskDeadline.value])
        // let taskToStorage = JSON.stringify(newTask)
        // tasksExistants.push(newTask)
        // localStorage.setItem("tasksExistants", tasksExistants)
        // Render the result
        // showTasks()
    }
}

function idRandom(){
    // const idRandom = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
    const idRandom = Date.now()
    return idRandom
}