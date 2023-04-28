import { savedTasks } from "./savedTasks.js"
import { showTasks } from "./showTasks.js"

export function addTask(){
    const taskTitle = document.getElementById("task-title")
    const taskInformations = document.getElementById("task-informations")
    const taskCompletion = document.getElementById("task-completion")
    const taskDeadline = document.getElementById("task-deadline")
    // let tasksExistants = savedTasks()
    // console.log("task existant")
    // console.log(tasksExistants)

    if(taskTitle.value == "" || taskInformations.value == "" || taskDeadline == null){
        alert("You must enter all informations of your task !")
    }else{
        let listOfTasks = window.localStorage.getItem("tasksExistants") || []
        const newTask = {
            id : idRandom(),
            "title" : taskTitle.value,
            "informations" : taskInformations.value,
            completion : taskCompletion.checked,
            deadline : taskDeadline.value
        }
// listOfTasks.push(newTask)
        window.localStorage.setItem("tasksExistants",listOfTasks)
        console.log(listOfTasks)
        console.log(localStorage)
        // window.localStorage.setItem("tasksExistants", newTask)
        // console.log(localStorage)

        // let tasksSaved = window.localStorage.getItem("tasksExistants")
        // console.log(JSON.parse(tasksSaved))
        // console.log(newTask)
        // listOfTasks.push(newTask)


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
    const idRandom = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
    return idRandom
}