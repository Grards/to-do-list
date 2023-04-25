const tasksForm = document.getElementById("task-form")

export function submitForm(event){
    event.preventDefault(); // Cancel the normal submit with page refresh

    let taskTitle = document.getElementById("task-title")
    let taskInformations = document.getElementById("task-informations")

    if(taskInformations.value !== "" && taskTitle.value !== ""){
        console.log(taskTitle.value)
        console.log(taskInformations.value)
        addTask(taskTitle, taskInformations)
    }else{
        alert("You must enter all informations of your task !")
    }
}

function addTask(taskTitle, taskInformations){
    console.log('Bien reçu')
}