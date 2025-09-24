document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // Event listener untuk form penambahan tugas
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari reload halaman
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
      addTask(taskText);
      todoInput.value = "";
      todoInput.focus();
    }
  });

  // Fungsi untuk menambah tugas baru ke dalam daftar
  function addTask(taskText) {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item task-item";

    // MEMBUAT CHECKBOX
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";

    // Membuat span untuk teks tugas
    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = taskText;

    // Tombol Hapus
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.innerHTML = '<i class="bi bi-trash"></i>';

    // Gabungkan semua elemen ke dalam list item
    listItem.appendChild(checkbox); // Tambahkan checkbox
    listItem.appendChild(taskSpan); // Tambahkan teks
    listItem.appendChild(deleteButton); // Tambahkan tombol hapus

    // Tambahkan list item ke dalam daftar (ul)
    todoList.appendChild(listItem);

    // Event listener BARU untuk checkbox
    checkbox.addEventListener("change", function () {
      listItem.classList.toggle("completed");
    });

    // Event listener untuk menghapus tugas
    deleteButton.addEventListener("click", function () {
      todoList.removeChild(listItem);
    });
  }
});
