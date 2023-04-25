const tasksForm = document.getElementById("task-form")
let tasks = []

/**
 * This function recept the informations of the Task formular and send them to addTask()
 * @param {*} event 
 */
export function submitForm(event){
    event.preventDefault(); // Cancel the normal submit with page refresh

    let taskTitle = document.getElementById("task-title")
    let taskInformations = document.getElementById("task-informations")

    if(taskInformations.value !== "" && taskTitle.value !== ""){
        addTask(taskTitle.value, taskInformations.value)
    }else{
        alert("You must enter all informations of your task !")
    }
}

function addTask(taskTitle, taskInformations){
    // What have we do in our localStorage ?
    let localStorageTasks = localStorage.getItem("tasks")
    let savedTasks = JSON.parse(localStorageTasks)
    // Add the new item in our array and our localStorage
    if (savedTasks !== null){
        tasks = savedTasks
    }else{
        tasks = []
    }
    tasks.push([tasks.length, taskTitle, taskInformations])
    localStorage.setItem("tasks", JSON.stringify(tasks))
    // Render the result
    renderTasks(tasks)
}

export function renderTasks(tasks = JSON.parse(localStorage.getItem("tasks"))){
    if(tasks === null){
        tasks = []
    }
    let listOfTasks = document.getElementById("list-of-tasks")
    listOfTasks.innerHTML = "" // clear the render for the new list of tasks
    tasks.forEach(element => {
        listOfTasks.innerHTML += `
            <ul class="task-card" id="task-${element[0]}">
                <li class="card-text">
                    <h2>${element[1]}</h2>
                    <p>${element[2]}</p>
                </li>
            </li>
        `
    });
}