function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    
    // if some one want to enter empty space 
    if (!taskInput.value.trim()) {
     return alert("Please enter some text! Todo can't be empty")
           
    }
    // New list item Here
    var li = document.createElement('li');
    li.textContent = taskInput.value;

    // Create a remove button Here
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function () {
        taskList.removeChild(li);
    };

    // Add click event to mark as completed
    li.onclick = function () {
        li.classList.toggle('completed');
    };

      // Append the remove button to the list item
      li.appendChild(removeButton);

      // Append the list item to the task list
      taskList.appendChild(li);


}