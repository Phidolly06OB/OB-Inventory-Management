const url = "http://localhost:4001/categoria"

const getCategorias = async () =>{
    try {
        const respons = await fetch(url);
        const result = await respons.json()

        return result
    } catch (error) {
        console.log(error);
    }
}

const getOne = async (id) => {
    try {
        const data = await fetch(`${url}/${id}`);
        const ciclista = await data.json();
        return ciclista;
    } catch (error) {
        console.log(error);
    }
}

const borrar = async id =>{
    try {
        await fetch(`${url}/${id}`,{
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

 const nuevaCategoria = async (categoria) => {
     try {
         await fetch(url,{
             method: 'POST',
             body: JSON.stringify(categoria),
             headers: {
                 'Content-Type' : 'Application/json'
             }
         })
     } catch (error) {
         console.log(error);
     }
 };

 const updCateg = async (id, datos) =>{
    try {
      await fetch (`${url}/${id}`,{
        method:'PATCH',
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(datos),
      }) 
    } catch (error) {
      console.log(error);
    }
  };


export {
    getCategorias,
    borrar,
     nuevaCategoria,
     getOne,
     updCateg

}