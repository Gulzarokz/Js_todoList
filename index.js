function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    
    // if some one want to enter empty space 
    if (!taskInput.value.trim()) {
     return alert("Todo can't be empty!")
           
    }
}