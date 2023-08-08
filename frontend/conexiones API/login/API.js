const url = "http://localhost:4001/auth"

const login = async (datos) => {
    try {
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type' : 'Application/json'
            }
        })

        //.ok es una propiedad de la interfaz response
        if (!response.ok) {
            // Si hay un error se muestra el error
            const error = await response.json();
            //detiene la ejecucion del codigo y pasa directo al catch
            throw new Error(error.message || 'Error en la solicitud');
        }

        
        const data = await response.json();
        
        // Devolver los datos para que puedan ser utilizados en otro lugar del código
        return data;
    } catch (error) {
        console.log(error);
    }
};

export {
    login
}