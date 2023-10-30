function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = taskText + ' <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
        updateLocalStorage();
    }
}

function editTask(element) {
    var newText = prompt("Edit task:", element.parentElement.firstChild.textContent);
    if (newText !== null) {
        element.parentElement.firstChild.textContent = newText;
        updateLocalStorage();
    }
}

function deleteTask(element) {
    element.parentElement.remove();
    updateLocalStorage();
}

function updateLocalStorage() {
    var tasks = [];
    var taskList = document.getElementById("taskList").children;
    for (var i = 0; i < taskList.length; i++) {
        tasks.push(taskList[i].textContent);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(taskText) {
        var li = document.createElement("li");
        li.innerHTML = taskText + ' <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(li);
    });
}

window.onload = loadTasks;