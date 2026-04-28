const url = "http://localhost:3000/"

// crear tareas
export const post = async(endpoint, data) => {
    try {
        const peticion = await fetch (`${url}${endpoint}`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        if (!peticion.ok) throw new Error('error al enviar tarea');
    
        const res = await peticion.json();
        console.log(res);
    } catch (err) {
        console.error(err);
    }
}


// obtener tareas
export const get = async(endpoint) => {
    try {
        const peticion = await fetch (`${url}${endpoint}`)
        if (!peticion.ok) throw new Error('error al encontrar tarea');
    
        const data = await peticion.json();
        return data
    } catch (err) {
        console.error(err);
    }
}

// actualizar completamente
export const put = async(endpoint,data) => {
    try {
        const peticion = await fetch (`${url}${endpoint}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        if (!peticion.ok) throw new Error('error al enviar tarea');
    
        const res = await peticion.json();
        console.log(res);


    } catch (err) {
        console.error(err);
    }
}

export const patch = async (endpoint, data )=> {
    try {
        const peticion = await fetch (`${url}${endpoint}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        if (!peticion.ok) throw new Error('error al enviar tarea');
    
        const res = await peticion.json();
        console.log(res);


    } catch (err) {
        console.error(err);
    }
}

export const delet = async (endpoint) => {
    try {

        const peticion = await fetch (`${url}${endpoint}`,{
            method: 'DELETE'
        })
        if (!peticion.ok) throw new Error('error al enviar tarea');
    
        const res = await peticion.json();
        console.log(res);
    } catch (err) {
        console.error(err)
    }
}