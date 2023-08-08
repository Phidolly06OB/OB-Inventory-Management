import { getInventario, getCategorias, borrar, getOne, updInv} from "./API.JS";

(function(){

    const formulario = document.querySelector(".det")

    document.addEventListener("DOMContentLoaded", showInventario);
    document.addEventListener("DOMContentLoaded", showCategorias);
    document.addEventListener("DOMContentLoaded", showCategoriasUpd);

    formulario.addEventListener('click', confirmar)

    async function showInventario(){
        const categ = await getInventario()
        categ.forEach(inv => {
            const {_id,nombre, descripcion, categoria, cantidad } = inv;
            
            const tabla = document.createElement('tr')
            tabla.innerHTML += `
            <tr>
            <td>${nombre}</td>
            <td>${categoria}</td>
            <td>${cantidad}</td>
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
    
            document.querySelector('.det').appendChild(tabla)
        });
    }

     function confirmar(e){
         if(e.target.classList.contains('delete')){
             const invenID = e.target.dataset.categoria;
             const conf = confirm("¿Desea Eliminarlo?")

             if(conf){
                borrar(invenID)
                // window.location.href = "Inventario.html"
             }
         }
     }

     async function showCategorias(){
        const categ = await getCategorias()
        categ.forEach(x =>{
            const {nombre, _id} = x
            const option = document.createElement('option')
            option.value = _id
            option.textContent = nombre
            document.querySelector('#categorias').appendChild(option)
    })
    }

    async function showCategoriasUpd(){
        const categ = await getCategorias()
        categ.forEach(x =>{
            const {nombre, _id} = x
            const option = document.createElement('option')
            option.value = _id
            option.textContent = nombre
            document.querySelector('#categoriasUpd').appendChild(option)
    })
    }


    const upd = document.querySelector('.det')
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
   
  
    const {_id, nombre, cantidad, descripcion} = await getOne(idUpdate)

    console.log(_id, nombre, cantidad);

    document.querySelector('#updId').value = _id;
    document.querySelector('#nombreUpd').value = nombre;
    document.querySelector('#cantidadUpd').value = cantidad;
    document.querySelector('#descripcionUpd').value = descripcion;
    }

updateModal.addEventListener("submit", actualizarDatos)

async function actualizarDatos() {
  const id = document.querySelector('#updId').value;
  const nombre = document.querySelector('#nombreUpd').value;
  const categoria = document.querySelector('#categoriasUpd').value;
  const cantidad = document.querySelector('#cantidadUpd').value;
  const descripcion = document.querySelector('#descripcionUpd').value; 
  



  const datos = {
    nombre,
    categoria,
    cantidad,
    descripcion
  }

    await updInv(id, datos);
}
}())