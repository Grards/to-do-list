export const tasksForm = document.getElementById("task-form")
const taskCards = document.getElementsByClassName("task-card")

let tasks = []

/**
 * This function recept the informations of the Task formular and send them to addTask()
 * @param {*} event 
 */
export function submitForm(event){
    event.preventDefault(); // Cancel the normal submit with page refresh

    let taskTitle = document.getElementById("task-title")
    let taskInformations = document.getElementById("task-informations")
    let taskCompletion = document.getElementById("task-completion")
    let taskDeadline = document.getElementById("task-deadline")

    if(taskTitle.value !== "" && taskInformations.value !== "" && taskDeadline !== null){
        addTask(taskTitle.value, taskInformations.value, taskCompletion.checked, taskDeadline.value)
    }else{
        alert("You must enter all informations of your task !")
    }
}

function addTask(taskTitle, taskInformations, taskCompletion, taskDeadline){
    // What have we do in our localStorage ?
    let localStorageTasks = localStorage.getItem("tasks")
    let savedTasks = JSON.parse(localStorageTasks)
    // Add the new item in our array and our localStorage
    if (savedTasks !== null){
        tasks = savedTasks
    }else{
        tasks = []
    }
    tasks.push([tasks.length, taskTitle, taskInformations, taskCompletion, taskDeadline])
    localStorage.setItem("tasks", JSON.stringify(tasks))
    // Render the result
    renderTasks(tasks)
}

export function renderTasks(tasks = JSON.parse(localStorage.getItem("tasks"))){
    let listOfTasks = document.getElementById("list-of-tasks")
    if(tasks == null || tasks == ""){
        tasks = []
        listOfTasks.innerHTML = `
            <p class="no-task">There is no task here...</p>
        `
    }else{
        listOfTasks.innerHTML = "" // clear the render for the new list of tasks
        tasks.forEach(element => {
            listOfTasks.innerHTML += `
                <ul class="task-card" id="${element[0]}">
                    <li class="card-text">
                        <section class="header-task">
                            <h2 class="task-title-showned">${element[1]}</h2>
                            <p class="task-edition"><i class="fa-solid fa-pen"></i></p>
                            <p id="trash_${element[0]}" class="task-to-trash"><i class="fa-solid fa-trash"></i></p>
                        </section>
                        <p class="task-informations-showned">${element[2]}</p>
                        <section class="footer-task">
                            <p class="task-deadline-showned">Deadline : ${element[4]}</p>
                        <button id="complete_${element[0]}" class="task-finished-button finished_${element[3]}">Finished <i class="fa-solid fa-check"></i></button>
                    </section>
                    </li>
                </li>
            `
        });
    }

    // We rearrange the array with the news tasks and we check the eventuals clicks to complete them
    const arrayCards = [...taskCards]
    arrayCards.forEach(element => {

        let cardID = "complete_" + element.id
        let cardFinishedButton = document.getElementById(cardID)
        cardFinishedButton.addEventListener('click', completeTask)
    });
}

function completeTask(card){
    // Access to grand-grand-parent (.task-card) of the current button "complete"
    let currentCard = card.srcElement.parentNode.parentNode.parentNode
    card.srcElement.textContent = "Task ended"
    card.srcElement.disabled = true
    toggleCardColor(currentCard)
}

function toggleCardColor(card){
    card.classList.toggle("task-finished")
}