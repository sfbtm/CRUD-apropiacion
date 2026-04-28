import { tarjetaTarea } from "./components/tarjetaTarea.js";
import { get, post } from "./helpers/api.js";

const app = document.querySelector(".app")

// elementos del HTML que crean una tarea:
const inputCrear = document.querySelector("#input-crear")
const botonAgregar = document.querySelector(".form__button")

botonAgregar.addEventListener("click", e => {
    e.preventDefault()
    const titulo = inputCrear.value;
    if (!titulo.trim()){
        alert("Error al crear tarea: no puede ser vacío")
        return;
    }

    const tarea = {
        titulo: titulo
    }

    post("tasks", tarea)
})


const listaTareas = document.querySelector(".task-list");

const tarea = {
    title: "xd",
    id: "1"
}

const tarjeta = await tarjetaTarea(tarea)

listaTareas.append(tarjeta)