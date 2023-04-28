import { showTasks } from "./showTasks.js";

const tasksList = document.getElementById('list-of-tasks');

export function updateTasks(){
    // Get all the tasks
    const tasks = tasksList.querySelectorAll('li');

    // Create an array to store the tasks
    const tasksItems = [];
 
    // Loop through the tasks items and add them to the array
    tasks.forEach(task => {
        tasksItems.push({
            "id" : task.id,
            "title" : task.querySelector('h2').textContent,
            "informations" : task.querySelector('p.task-informations-showned').textContent,
            "completion" : task.querySelector('button').classList.contains('finished_true'),
            "deadline" : task.querySelector('p.task-deadline-showned').textContent
        });
    });
 
    // Store the tasks array in the local storage
    localStorage.setItem('tasks', JSON.stringify(tasksItems));

    // Refresh the content of the page
    showTasks();
}