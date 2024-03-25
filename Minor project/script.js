let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span>${task.text}</span>
            <span>${task.dueDate}</span>
            <button onclick="completeTask(${index})">Complete</button>
        `;
        taskList.appendChild(taskItem);
    });
}


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const dueDateInput = document.getElementById('dueDateInput');
    const dueDate = dueDateInput.value;
    if (taskText !== '' && dueDate !== '') {
        const newTask = {
            text: taskText,
            dueDate: dueDate
        };
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        taskInput.value = '';
        dueDateInput.value = '';
    }
}


function completeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}


renderTasks();