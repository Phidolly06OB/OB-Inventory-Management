const url = "http://localhost:4001/users"

const register = async (datos) =>{
    try {
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type' : 'Application/json'
            }

        });
        window.location.href = "login.html"
    } catch (error) {
        console.log(error);
    }
}

export {
    register
}