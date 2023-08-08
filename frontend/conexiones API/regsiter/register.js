import { register } from "./API.js";

const form = document.querySelector('#formulario');
form.addEventListener('submit', validarLog);

function validarLog(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const DataLog = {
        nombre,
        email,
        password
    }

    if(validate(DataLog)){
        alert("LLenar todos los datos")
        return
    }

    register(DataLog)
}

function validate(objeto){
    return !Object.values(objeto).every(element => element !== '');
}
