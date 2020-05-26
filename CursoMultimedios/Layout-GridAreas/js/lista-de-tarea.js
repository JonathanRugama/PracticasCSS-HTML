let listOfTasks = []
initializeFromLocalStorage();
document.querySelector(".title-tasks").addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
});


function buttonClick(value) {
   
    if (value === 'Agregar Tarea'){
        console.log("Entra al if")
        addTask();
    }
}

function addTask () {
    let task = document.getElementsByClassName("add-task-text")[0].value;
    let valueOfTask = task;
    if (valueOfTask == "") {
        alert("Por favor ingrese una tarea");
    }else{
        listOfTasks.push(valueOfTask.trim());
        addTasksToLocalStorage(listOfTasks);
        document.getElementsByClassName("add-task-text")[0].value = ''; 
        displayListOfTasks();
    }
}


function addTasksToLocalStorage (taskList) {
    localStorage.setItem('localTaskList', JSON.stringify(taskList));
}
function getTasksFromLocalStorage (){
    let storedList = localStorage.getItem('localTaskList');
    if(storedList == null) {
        listOfTasksFromStore = [];
    }else {
        listOfTasksFromStore = JSON.parse(storedList);
    }
    return listOfTasksFromStore;
}
function initializeFromLocalStorage(){
    listOfTasks = getTasksFromLocalStorage();
    displayListOfTasks();
}
function displayListOfTasks() {
    let data = '';
    let i = 0;
    if (listOfTasks.length > 0) {
        for (let task of listOfTasks) {
            data += "<li class='item-list'>"+listOfTasks[i]+"</li>";
            i++;
        }
    }
    console.log(data)
    document.getElementsByClassName('list-tasks')[0].innerHTML = data;
}