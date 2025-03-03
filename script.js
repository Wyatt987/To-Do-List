// Initialize an array to store tasks
let tasks = [];

// Event listener for the Add Task button
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText) {
        tasks.push(taskText);
        taskInput.value = ''; // Clear input field
        displayTasks();
    }
}

// Function to display tasks
function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear previous list

    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center',
            'border',
            'border-dark'
        );
        li.textContent = task;

        // Toggle task completion when clicked
        li.addEventListener('click', function() {
            this.classList.toggle("complete");
        });

        // Add remove button
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-success', 'btn-outline-dark', 'btn-sm');
        removeBtn.innerHTML = '✔';
        removeBtn.onclick = function() {
            removeTask(index);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    });

    updateCounter();
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Function to update the task counter
function updateCounter() {
    document.getElementById('taskCounter').innerText = `Tasks: ${tasks.length}`;
}

// Event Listener for the Clear All Tasks button
document.getElementById('clearTaskBtn').addEventListener('click', function() {
    tasks = [];
    displayTasks();
    updateCounter(); // Ensure counter resets when clearing tasks
});
