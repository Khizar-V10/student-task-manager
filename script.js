// Student Task Manager
// Task data is stored in this array and saved in localStorage
// so tasks are not lost when the page is refreshed.
const STORAGE_KEY = "studentTasks";
let tasks = loadTasks();

// Load saved tasks from localStorage
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

// Save tasks to localStorage
function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.warn("Could not save tasks", error);
  }
}

const taskForm = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-description");
const taskList = document.getElementById("task-list");

// Display all tasks in the list
function renderTasks() {
  saveTasks();
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = '<li class="empty">No tasks yet.</li>';
    return;
  }

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML =
      '<div class="task-text">' +
        '<h3 class="task-title"></h3>' +
        '<p class="task-desc"></p>' +
      '</div>' +
      '<button class="delete-btn">Delete</button>';

    li.querySelector(".task-title").textContent = task.title;
    li.querySelector(".task-desc").textContent = task.description;
    li.querySelector(".delete-btn").addEventListener("click", function () {
      deleteTask(task.id);
    });

    taskList.appendChild(li);
  });
}

// Add a new task from the form
function addTask(title, description) {
  tasks.push({
    id: Date.now(),
    title: title,
    description: description,
    completed: false
  });
  renderTasks();
}

// Delete a task by id
function deleteTask(id) {
  tasks = tasks.filter(function (task) {
    return task.id !== id;
  });
  renderTasks();
}

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  if (title === "") {
    alert("Please enter a task title.");
    return;
  }
  addTask(title, descInput.value.trim());
  taskForm.reset();
  titleInput.focus();
});

renderTasks();
console.log("Student Task Manager loaded");
