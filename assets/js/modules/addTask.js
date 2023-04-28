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
        let incrementID = oldTasks.length
        incrementID++

        const newTask = {
            "id" : incrementID,
            "title" : taskTitle.value,
            "informations" : taskInformations.value,
            "completion" : taskCompletion.checked,
            "deadline" : taskDeadline.value
        }
        oldTasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(oldTasks))
    }
    showTasks()
}

