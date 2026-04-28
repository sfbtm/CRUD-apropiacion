export const tarjetaTarea = async (tarea) => {
    // crear tarjeta (elemento li)
    const tarjeta = document.createElement("li");
    tarjeta.classList.add("task-list__item");
    tarjeta.dataset.id = tarea.id;

    // span que contiene el titulo de la tarea
    const span = document.createElement("span");
    span.classList.add("task-list__name");
    span.textContent = tarea.title;

    // contenedor donde va cada accion
    const contenedorAcciones = document.createElement("div");
    contenedorAcciones.classList.add("task-list__actions");

    // boton para editar 
    const botonEditar = document.createElement("button");
    botonEditar.classList.add("task-list__button", "task-list__button--edit")
    botonEditar.textContent = "Editar";
    
    // boton de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("task-list__button", "task-list__button--delete")
    botonEliminar.textContent = "Eliminar";

    // enparentar elementos
    contenedorAcciones.append(botonEditar,botonEliminar);
    tarjeta.append(span,contenedorAcciones);

    return tarjeta
}