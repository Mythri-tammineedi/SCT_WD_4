document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskDatetime = document.getElementById('task-datetime');
    const taskList = document.getElementById('task-list');
  
    // Function to add a task
    function addTask(e) {
      e.preventDefault();
  
      const taskText = taskInput.value;
      const taskTime = taskDatetime.value;
  
      if (taskText === '' || taskTime === '') {
        alert('Please fill out the task and time');
        return;
      }
  
      const taskItem = document.createElement('li');
  
      const taskContent = document.createElement('span');
      taskContent.textContent = `${taskText} - ${new Date(taskTime).toLocaleString()}`;
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-btn');
      editButton.addEventListener('click', () => editTask(taskItem, taskContent));
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteTask(taskItem));
  
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.addEventListener('click', () => completeTask(taskItem));
  
      taskItem.appendChild(taskContent);
      taskItem.appendChild(completeButton);
      taskItem.appendChild(editButton);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
      taskDatetime.value = '';
    }
  
    // Function to delete a task
    function deleteTask(taskItem) {
      taskList.removeChild(taskItem);
    }
  
    // Function to mark a task as completed
    function completeTask(taskItem) {
      taskItem.classList.toggle('completed');
    }
  
    // Function to edit a task
    function editTask(taskItem, taskContent) {
      const newTask = prompt('Edit your task:', taskContent.textContent.split(' - ')[0]);
      const newTime = prompt('Edit date and time:', taskContent.textContent.split(' - ')[1]);
  
      if (newTask !== null && newTime !== null) {
        taskContent.textContent = `${newTask} - ${new Date(newTime).toLocaleString()}`;
      }
    }
  
    // Add event listener to the form
    taskForm.addEventListener('submit', addTask);
  });
  