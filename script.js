const input = document.getElementById("input");
const lista = document.getElementById("lista");
const boton = document.getElementById("boton");

function agregarTarea() {
    if (input.value === '') {
        alert("Debe ingresar una tarea.");
    }
    else {
        let tarea = document.createElement("li");
        tarea.innerHTML = input.value;
        lista.appendChild(tarea);
    }
}

boton.addEventListener('click', agregarTarea());