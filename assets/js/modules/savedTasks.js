export function savedTasks(){
    let tasks = []
    // What have w let taske do in our localStorage ?
    if (localStorage != "" && localStorage != null){
        const localStorageTasks = JSON.parse(window.localStorage.getItem("tasksExistants"));
        console.log("LocalStorageTasks : ")
        console.log(localStorageTasks)
        // We transform the values of the localStorage in a object
        // let savedTasks = localStorageTasks
        tasks = localStorageTasks
        // console.log(localStorageTasks)
        console.log("A")
        return tasks

    }else{
        console.log("B")
        return tasks = ""
    }
}