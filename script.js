// script.js

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = '';

            // Add functionality to mark task as completed
            taskItem.addEventListener('click', function() {
                taskItem.classList.toggle('completed');
            });

            // Add functionality to delete task
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            taskItem.appendChild(deleteButton);

            deleteButton.addEventListener('click', function() {
                taskItem.remove();
            });
     }
    });
});