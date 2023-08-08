import { nuevoHistoStock } from "./API.js";

const form = document.querySelector('#formulario');
form.addEventListener('submit', validarInv);

function validarInv(e) {
    e.preventDefault();

    const producto = document.querySelector('#producto').value
    const empleado = document.querySelector('#empleado').value
    const cantidad = document.querySelector('#cantidad').value

    const inventario = {
        producto,
        empleado,
        cantidad
    }

    if(inventario.empleado === "Empleados"){
        throw new Error(alert("El empleado es requerido"))
    }

    if(validate(inventario)){
        alert("Llenar todos los Campos")
        return
    }

    nuevoHistoStock(inventario);
    window.location.href = "home.html"

}

function validate(objeto){
    return !Object.values(objeto).every(element => element !== '');
}