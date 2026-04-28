import { tarjetaTarea } from "./components/tarjetaTarea.js";
import { delet, get, post } from "./helpers/api.js";


const app = document.querySelector(".app")

// elementos del HTML que crean una tarea:
const inputCrear = document.querySelector("#input-crear")
const botonAgregar = document.querySelector(".form__button")




const listaTareas = document.querySelector(".task-list");

const actualizarLista = async() => {
    
    listaTareas.innerHTML = "";
    const tareasLista = await get("tasks");
    tareasLista.forEach (async(tarea) => {
        console.log(tarea)
        const tarjeta = await tarjetaTarea(tarea)
        listaTareas.append(tarjeta)
    })
}
actualizarLista()


botonAgregar.addEventListener("click", async e => {
    e.preventDefault()
    const titulo = inputCrear.value;
    if (!titulo.trim()){
        alert("Error al crear tarea: no puede ser vacío")
        return;
    }
    
    const tarea = {
        title: titulo
    }
    
    await post("tasks", tarea)
    actualizarLista()
})

listaTareas.addEventListener("click", async (e) => {
  const tarjeta = e.target.closest("li");
  const id = tarjeta?.dataset.id;

  if (e.target.matches(".task-list__button--delete")) {
    await delet(`tasks/${id}`);
    tarjeta.remove(); 
  }

  if (e.target.matches(".task-list__button--edit")) {
    
  }
})