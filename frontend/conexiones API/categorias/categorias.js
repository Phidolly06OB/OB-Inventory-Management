import { getCategorias, borrar, getOne, updCateg } from "./API.js";

(function(){

    const formulario = document.querySelector(".categ")

    document.addEventListener("DOMContentLoaded", showCategorias);

    formulario.addEventListener('click', confirmar)

    async function showCategorias(){
        const categ = await getCategorias()
        categ.forEach(categ => {
            const {_id,nombre, descripcion, } = categ;
            
            const tabla = document.createElement('tr')
            tabla.innerHTML += `
            <tr>
            <td>${_id}</td>
            <td>${nombre}</td>
            <td>${descripcion}</td>

            <td><button class="btn btn-danger delete" data-categoria="${_id}" ><svg xmlns="http://www.w3.org/2000/svg" class=" icon icon-tabler icon-tabler-trash delete" data-categoria="${_id}" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg></button>

          <button type="button" class="btn btn-success update" data-toggle="modal" data-target="#update" idUpd="${_id}" data-whatever="@mdo">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
            <path d="M16 5l3 3" />
          </svg>
          </button>

          
          </td>
          </tr>

          <tbody class="table-light">
          
          </tbody>

            `
    
            document.querySelector('.categ').appendChild(tabla)
        });
    }

     function confirmar(e){
         if(e.target.classList.contains('delete')){
             const categId = e.target.dataset.categoria;
             
             const conf = confirm("¿Desea Eliminarlo?")

             if(conf){
                console.log(categId);
                borrar(categId);
               window.location.href = "categorias.html"
             }
         }
     }

     const upd = document.querySelector('.categ')
    upd.addEventListener('click', oneOrAnother)

    function oneOrAnother(e){
        if(e.target.classList.contains("update")){
          launchModalUpt(e);
        }
    }


    const updateModal = document.querySelector('#update');
    async function launchModalUpt(e){
    const idUpdate = e.target.getAttribute("idUpd");

    console.log(idUpdate);
   
  
    const {_id, nombre, descripcion} = await getOne(idUpdate)

    console.log(_id, nombre, descripcion);

    document.querySelector('#updId').value = _id;
    document.querySelector('#nombreUpd').value = nombre;
    document.querySelector('#descripcionUpd').value = descripcion;
    }

updateModal.addEventListener("submit", actualizarDatos)

async function actualizarDatos() {
  const id = document.querySelector('#updId').value;
  const nombre = document.querySelector('#nombreUpd').value
  const descripcion = document.querySelector('#descripcionUpd').value

  const datos = {
    nombre,
    descripcion
  }

    await updCateg(id, datos);
}

}())


