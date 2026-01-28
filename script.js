const input = document.querySelector('input');
const addButton = document.querySelector('button');
const taskList = document.getElementById('taskList');

let todoList = [];

// Load tasks from localStorage on page load
function loadTasks() {
  const saved = localStorage.getItem('todoList');
  if (saved) {
    todoList = JSON.parse(saved);
    todoList.forEach(task => addTaskToDOM(task));
  }
}

// Add new task
function addTask(event) {
  event.preventDefault();

  const inputValue = input.value.trim();

  if (inputValue === '') {
    alert('Please enter a task before adding.');
    return;
  }

  const task = {
    id: Date.now(),
    text: inputValue
  };

  addTaskToDOM(task);
  todoList.push(task);
  saveTasks();

  input.value = '';
}

// Add task to DOM
function addTaskToDOM(task) {
  const listItem = document.createElement('li');
  listItem.textContent = task.text;
  listItem.classList.add('item');
  taskList.appendChild(listItem);
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Event listeners
addButton.addEventListener('click', addTask);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask(event);
  }
});

// Load tasks when page loads
loadTasks();