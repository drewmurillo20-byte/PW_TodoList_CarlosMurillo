// Obtener elementos
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

// Evento para agregar tarea
addButton.addEventListener("click", function() {

    const taskText = taskInput.value.trim();

    // Validar que no esté vacío
    if (taskText === "") {
        return;
    }

    // Crear elemento li
    const li = document.createElement("li");
    li.textContent = taskText;

    // Botón eliminar
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✕";

    deleteButton.addEventListener("click", function() {
        li.remove();

        if (taskList.children.length === 0) {
            emptyMessage.style.display = "block";
        }
    });

    // Marcar como completada
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Limpiar input
    taskInput.value = "";

    // Ocultar mensaje vacío
    emptyMessage.style.display = "none";
});