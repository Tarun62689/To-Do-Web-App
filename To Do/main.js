const taskInput = document.getElementById('taskInput');
const taskDateTime = document.getElementById('taskDateTime');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
const taskText = taskInput.value;
    const taskDate = taskDateTime.value;
    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
    <span>${taskText} <small>(${taskDate || 'No date set'})</small></span>
    <div>
      <button class="complete-btn">✔</button>
      <button class="edit-btn">✏</button>
      <button class="delete-btn">❌</button>
    </div>
  `;
    taskItem.querySelector('.complete-btn').addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
    taskItem.querySelector('.edit-btn').addEventListener('click', () => {
        const newTask = prompt('Edit your task:', taskText);
        if (newTask !== null && newTask.trim() !== '') {
            taskItem.querySelector('span').innerHTML = `${newTask} <small>(${taskDate || 'No date set'})</small>`;
        }
    });

    taskItem.querySelector('.delete-btn').addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
    taskList.appendChild(taskItem);
    taskInput.value = '';
    taskDateTime.value = '';
});
