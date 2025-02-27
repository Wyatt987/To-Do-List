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

//Function to display the tasks from tasks[] in the URL
function displayTasks () {
    //retrieves taskList ID from HTML and sets it as a variable
    let taskList = document.getElementById('taskList')
    
    //Clear the existing task list before updating it
    taskList.innerHTML = ''

    //Loop through each task in the array and create a list item
    tasks.forEach((task, index) => {
        //Create a mew <li> element for each task
        let li = document.createElement('li')
        //Adds different classes to the li tag
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )
        //Set the inner HTML of the <Li> element with task text and a remove button
        li.innerHTML = `${task} <button class='btn btn-success btn-sm' onclick='removeTask(${index})'>√</button>`


        //Append the new task to the task list
        taskList.appendChild(li)

    }
    )
}

//Function to remove a task from the list when the "√" button is clicked
function removeTask (index){
    //Remove the task at the given index from the array
    tasks.splice(index, 1)
    //Call the function to update the task list displa
    displayTasks()
    
}

//Event Listener for the "Clear All Tasks" button
document.getElementById('clearTaskBtn').addEventListener('click', function() {
    tasks= []

    //call the function to update the task list display
    displayTasks()
}) 