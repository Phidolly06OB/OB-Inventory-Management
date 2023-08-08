import { nuevoInv } from "./API.JS";

const form = document.querySelector('#formulario');
form.addEventListener('submit', validarInv);

function validarInv(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value
    const categoria = document.querySelector('#categorias').value
    const cantidad = document.querySelector('#cantidad').value
    const descripcion = document.querySelector('#descripcion').value

    const inventario = {
        nombre,
        categoria,
        cantidad,
        descripcion
    }

    if(validate(inventario)){
        alert("xxxx")
        return
    }

    nuevoInv(inventario);
    window.location.href = "Inventario.html"

}

function validate(objeto){
    return !Object.values(objeto).every(element => element !== '');
}