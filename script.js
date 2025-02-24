//init an array to store tasks//
let tasks = []

//Add an event listener to add tasks to the add task btn//
document.getElementById('addTaskBtn').addEventListener('click', function() {

    let taskInput = document.getElementById('taskInput').value   //Storing the input box as a variable taskInput//
    
    if (taskInput) {

        tasks.push(taskInput)  //Adds what is inputed into the text box//
        document.getElementById('taskInput').value = '' //clears the text box after submitted//

        displayTasks()
    }
} )