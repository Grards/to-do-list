import { completeTasks } from "./completeTasks.js";
import { savedTasks } from "./savedTasks.js";

export function showTasks(newTask){
    // let tasksToShow = savedTasks()
    let tasksContainer = document.getElementById("list-of-tasks")
    // if(tasksToShow == ""){
    //     tasksContainer.innerHTML = 
    //         <p class="no-task">There is no task here...</p>
    //     
    // }else{
        // tasksContainer.innerHTML = "" // clear the render for the new list of tasks
        // newTask.forEach(element => {
            tasksContainer.innerHTML +=` 
                <ul class="task-card" id="${newTask.id}">
                    <li class="card-text">
                        <section class="header-task">
                            <h2 class="task-title-showned">${newTask.title}</h2>
                            <p class="task-edition"><i class="fa-solid fa-pen"></i></p>
                            <p id="trash_${newTask.id}}" class="task-to-trash"><i class="fa-solid fa-trash"></i></p>
                        </section>
                        <p class="task-informations-showned">${newTask.informations}</p>
                        <section class="footer-task">
                            <p class="task-deadline-showned">Deadline : ${newTask.deadline}</p>
                            <button id="complete_${newTask.id}}" class="task-finished-button finished_${newTask.checked}}">Finished <i class="fa-solid fa-check"></i></button>
                        </section>
                    </li>
                </ul>
            `
        // });
        completeTasks()
    // }
}