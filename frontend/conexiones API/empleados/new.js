import { nuevoEmp } from "./API.js";

const form = document.querySelector('#formulario');
form.addEventListener('submit', validarEmp);

function validarEmp(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value
    const edad = document.querySelector('#edad').value
    const documento = document.querySelector('#documento').value
    const email = document.querySelector('#email').value

    const emple = {
        nombre,
        edad,
        documento,
        email
    }

    if(validate(emple)){
        alert("xxxx")
        return
    }

    nuevoEmp(emple);
    window.location.href = "empleados.html"

}

function validate(objeto){
    return !Object.values(objeto).every(element => element !== '');
}