function agregarTarea() {
    const input = document.getElementById("input");
    const lista = document.getElementById("lista");
    if (input.value === '') {
        alert("Debe ingresar una tarea.");
    }
    else {
        let tareaContenedor = document.createElement("div");
        tareaContenedor.classList.add("tarea-contenedor");

        let icono = document.createElement("i");
        icono.classList.add("fa-regular", "fa-square");
        tareaContenedor.appendChild(icono);
        

        let tarea = document.createElement("li");
        tarea.innerHTML = input.value;
        tareaContenedor.appendChild(tarea);

        lista.appendChild(tareaContenedor);

        input.value = '';
    }
}

function completarTarea() {

}