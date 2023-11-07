function agregarTarea() {
    const input = document.getElementById("input");
    const lista = document.getElementById("lista");
    if (input.value === '') {
        alert("Debe ingresar una tarea.");
    }
    else {
        let tareaContenedor = document.createElement("div");
        tareaContenedor.classList.add("tarea-contenedor");
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("check");
        
        let tarea = document.createElement("li");
        tarea.innerHTML = input.value;

        tareaContenedor.appendChild(checkbox);
        tareaContenedor.appendChild(tarea);
        lista.appendChild(tareaContenedor);

        input.value = '';
    }
}

function borrarCompletados() {
    const lista = document.getElementById("lista");
    const checkboxes = lista.querySelectorAll("input[type=checkbox]");

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            // Borrar el contenedor del checkbox
            lista.removeChild(checkbox.parentNode);
        }
    });
}

function borrarTodos() {
    const lista = document.getElementById("lista");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}