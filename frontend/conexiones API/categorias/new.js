import { nuevaCategoria, getCategorias } from "./API.js";

const form = document.querySelector('#formulario');
form.addEventListener('submit', validarCateg);

async function validarCateg(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value
    const descripcion = document.querySelector('#descripcion').value

    const categ = {
        nombre,
        descripcion
    }

    if(validate(categ)){
        alert("xxxx")
        return
    }

    try {
        const cat = await getCategorias();

        const confirm = cat.find(item => item.nombre === nombre)

        if(confirm){
            alert("Ya existe esta categoria")
            window.location.href("categorias.html")
        }

    } catch (error) {
        console.log(error);
    }

    nuevaCategoria(categ);
    window.location.href = "categorias.html"

    

}

function validate(objeto){
    return !Object.values(objeto).every(element => element !== '');
}