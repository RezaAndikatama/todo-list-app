document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle.querySelector("i");

  // --- LOGIKA DARK MODE ---

  // Cek tema yang tersimpan saat halaman dimuat
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
  }

  // Event listener untuk tombol tema
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Simpan pilihan tema dan ganti ikon
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    } else {
      localStorage.setItem("theme", "light");
      themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
    }
  });

  // --- LOGIKA TO-DO LIST (Tetap sama) ---

  // Event listener untuk form penambahan tugas
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      todoInput.value = "";
      todoInput.focus();
    }
  });

  // Fungsi untuk menambah tugas baru
  function addTask(taskText) {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";

    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.innerHTML = '<i class="bi bi-trash"></i>';

    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    checkbox.addEventListener("change", function () {
      listItem.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
      todoList.removeChild(listItem);
    });
  }
});
