import { getHistorial, getCateg, getEmple } from "./API.JS";


(function(){

    document.addEventListener("DOMContentLoaded", ShowHisStock);
    document.addEventListener("DOMContentLoaded", showInventario);
    document.addEventListener("DOMContentLoaded", showEmpledos);

    async function ShowHisStock(){
        const categ = await getHistorial()
        categ.forEach(inv => {
            const {producto, empleado, cantidad, createdAt } = inv;

            
            
            const tabla = document.createElement('tr')
            tabla.innerHTML += `
            <tr>
                <td>${producto}</td>
                <td>${empleado}</td>
                <td>${createdAt.slice(0, 10)}</td>
                <td><div class="cosd">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="22" height="22" viewBox="0 0 24 24" stroke-width="3" stroke="green" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
                </svg>${cantidad}
            </div></td>
            </tr>

          <tbody class="table-light">
          
          </tbody>

            `
    
            document.querySelector('.his').appendChild(tabla)
        });
    }

    async function showInventario(){
        const categ = await getCateg()
        categ.forEach(x =>{
            const {nombre, _id} = x
            const option = document.createElement('option')
            option.value = _id
            option.textContent = nombre
            document.querySelector('#producto').appendChild(option)
    })
    }

    async function showEmpledos(){
        const emple = await getEmple()
        emple.forEach(x =>{
            const {nombre, documento} = x
            const option = document.createElement('option')
            option.value = documento
            option.textContent = nombre
            document.querySelector('#empleado').appendChild(option)
    })
    }

}())