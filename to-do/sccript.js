// Function to add a new task
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    // Create a new list item
    var li = document.createElement('li');
    li.textContent = taskInput.value;

    // Add the new task to the list
    taskList.appendChild(li);

    // Clear input field after adding task
    taskInput.value = '';
}
