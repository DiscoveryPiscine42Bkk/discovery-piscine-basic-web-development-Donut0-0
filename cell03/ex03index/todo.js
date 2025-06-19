window.onload = function () {
  loadTodos();

  document.getElementById("new-btn").addEventListener("click", function () {
    let text = prompt("Enter new TO DO:");
    if (text && text.trim() !== "") {
      addTodo(text.trim(), true);
    }
  });
};

// Add a todo to the top
function addTodo(text, save) {
  const todoDiv = document.createElement("div");
  todoDiv.className = "todo";
  todoDiv.innerText = text;

  todoDiv.addEventListener("click", function () {
    if (confirm("Do you want to delete this TO DO?")) {
      this.remove();
      saveTodos();
    }
  });

  const list = document.getElementById("ft_list");
  list.insertBefore(todoDiv, list.firstChild);

  if (save) saveTodos();
}

// Save todos to cookies
function saveTodos() {
  const todos = [];
  const list = document.getElementById("ft_list").children;
  for (let i = 0; i < list.length; i++) {
    todos.push(list[i].innerText);
  }
  document.cookie = "todo=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
}

// Load todos from cookies
function loadTodos() {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    if (cookie.startsWith("todo=")) {
      const value = decodeURIComponent(cookie.split("=")[1]);
      const todos = JSON.parse(value);
      todos.reverse().forEach(t => addTodo(t, false));
    }
  }
}