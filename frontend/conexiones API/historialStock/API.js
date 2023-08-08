const url = "http://localhost:4001/historialInv"
const urlInven = "http://localhost:4001/inventario"
const urlEmpleado = "http://localhost:4001/empleado"

const getHistorial = async () =>{
    try {
        const respons = await fetch(url);
        const result = await respons.json()

        return result
    } catch (error) {
        console.log(error);
    }
}

const getCateg = async () =>{
  try {
    const respons = await fetch(urlInven)
    const result = await respons.json()

    return result

  } catch (error) {
    console.log(error);
  }
}

const getEmple = async () =>{
  try {
    const respons = await fetch(urlEmpleado)
    const result = await respons.json()

    return result
  } catch (error) {
    
  }
}


const nuevoHistoStock = async (historial) => {
    try {
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(historial),
            headers: {
                'Content-Type' : 'Application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
};



const updCategorias = async datos =>{
    try {
      await fetch (`${urlUpd}/upd/${datos._id}`,{
        method:'PATCH',
        body:JSON.stringify(datos),
        headers:{
          "Content-Type" : "application/json"
        }
      })
      .then(response => response.json())
      .then(updateCategorias => {
        console.log('DATOS Actualizados',updateCategorias);
      })
      window.location="./index.html" 
    } catch (error) {
      console.log(error);
    }
  };

export {
    getHistorial, 
    getCateg,
    getEmple,
    nuevoHistoStock
}