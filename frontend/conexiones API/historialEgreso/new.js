import { nuevoEgreso, getCateg } from "./API.js";

const form = document.querySelector('#formulario2');
form.addEventListener('submit', validadrEgreso);

async function validadrEgreso(e) {

    e.preventDefault();

    const producto = document.querySelector('#producto2').value
    const empleado = document.querySelector('#empleado2').value
    const cantidad = document.querySelector('#cantidad2').value

    const inventario = {
        producto,
        empleado,
        cantidad
    }

    if(inventario.empleado === "Empleados"){
        throw new Error(alert("El empleado es requerido"))
    }

    if(validate(inventario)){
        alert("Llenar todos los campos")
        return
    }

    try {
        const inventario = await getCateg()

        const registro = inventario.find(item => item._id === producto)

        if(registro.cantidad <= cantidad){
            alert(`No hay Suficiente Stock, Stock disponible ${registro.cantidad}`)
        }   

    } catch (error) {
        console.log(error);
    }

    nuevoEgreso(inventario);
    window.location.href = "home.html"

}

function validate(objeto){
    return !Object.values(objeto).every(element => element !== '');
}