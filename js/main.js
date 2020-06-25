var dropTarget = document.querySelector(".tablero");

dropTarget.addEventListener('dragover', function (ev) {
    ev.preventDefault();
});

dropTarget.addEventListener('drop', function (ev) {
    ev.preventDefault();
    let target = ev.target;
    let droppable = target.classList.contains('lista'); //
    let srcId = ev.dataTransfer.getData("srcId"); //cojo el elemento con ese id, en este caso las tareas
    console.log(srcId)

    if (droppable) {
        ev.target.appendChild(document.getElementById(srcId)); //lo añado a la lista a la que lo estoy desplazando
    }
});


function eventosATareas(tarea) {
    tarea.addEventListener("dragstart", function (ev) {
        ev.dataTransfer.setData("srcId", ev.target.id);
    });
} 

let contador = 0;


// Funcion para añadir una nueva tarea a la lista
function annadirTarea(str) {
    console.log('p')
    let nueva = document.getElementById('nueva');
    let nuevaTarea = document.createElement('div');
    nuevaTarea.classList.add('tarea');
    nuevaTarea.setAttribute('draggable', 'true');
    nuevaTarea.setAttribute('id', `tarea${contador}`);

    let nuevoBoton = document.createElement('button');
    nuevoBoton.innerText = 'Eliminar'
    nuevoBoton.setAttribute('onclick', `eliminarTarea(${contador})`);

    contador++;

    let nombreTarea = document.createElement('p')
    nombreTarea.innerText = nueva.value;
    nueva.value = '';

    nuevaTarea.appendChild(nombreTarea);
    nuevaTarea.appendChild(nuevoBoton);

    document.getElementById('hacer').appendChild(nuevaTarea);
    eventosATareas(nuevaTarea);
}

function eliminarTarea(numero) {
    let tarea = document.getElementById(`tarea${numero}`);
    tarea.remove();
}