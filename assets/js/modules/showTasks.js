export function showTasks(){
    const tasksToShow = JSON.parse(window.localStorage.getItem("tasks"))
    const tasksContainer = document.getElementById("list-of-tasks")
    if(tasksToShow == null){
        tasksContainer.innerHTML = "<p class='no-task'>There is no task here...</p>"       
    }else{
        tasksContainer.innerHTML = "" // clear the render for the new list of tasks
        tasksToShow.forEach(element => {
            tasksContainer.innerHTML +=` 
                <li id="${element.id}" class="task-card ${element.completion ? 'toggle-state-task' : ''}" >
                    <section class="header-task">
                        <h2 class="task-title-showned">${element.title}</h2>
                        <p class="task-edition"><i class="fa-solid fa-pen"></i></p>
                        <p id="trash_${element.id}" class="task-to-trash"><i class="fa-solid fa-trash"></i></p>
                    </section>
                    <p class="task-informations-showned">${element.informations}</p>
                    <section class="footer-task">
                        <p class="task-deadline-showned">${element.deadline}</p>
                        <button id="complete_${element.id}" class="task-complete-button ${element.completion ? 'finished_true' : ''}" ${element.completion ? 'disabled' : ''}>${element.completion ? 'Task endend' : 'Finish this task <i class="fa-solid fa-check">'}</i></button>
                    </section>
                </li>
            ` 
        });
    }
}