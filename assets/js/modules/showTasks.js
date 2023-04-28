import { completeTasks } from "./completeTasks.js";

export function showTasks(){
    const tasksToShow = JSON.parse(window.localStorage.getItem("tasks"))
    const tasksContainer = document.getElementById("list-of-tasks")
    if(tasksToShow == ""){
        tasksContainer.innerHTML = "<p class='no-task'>There is no task here...</p>"       
    }else{
        tasksContainer.innerHTML = "" // clear the render for the new list of tasks
        tasksToShow.forEach(element => {
            tasksContainer.innerHTML +=` 
                <ul class="task-card" id="${element.id}">
                    <li class="card-text">
                        <section class="header-task">
                            <h2 class="task-title-showned">${element.title}</h2>
                            <p class="task-edition"><i class="fa-solid fa-pen"></i></p>
                            <p id="trash_${element.id}}" class="task-to-trash"><i class="fa-solid fa-trash"></i></p>
                        </section>
                        <p class="task-informations-showned">${element.informations}</p>
                        <section class="footer-task">
                            <p class="task-deadline-showned">Deadline : ${element.deadline}</p>
                            <button id="complete_${element.id}}" class="task-finished-button finished_${element.checked}}">Finished <i class="fa-solid fa-check"></i></button>
                        </section>
                    </li>
                </ul>
            `
        });
        completeTasks()
    }
}