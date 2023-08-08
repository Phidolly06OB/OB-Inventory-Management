import { getHistorial, getCateg, getEmple } from "./API.JS";


(function(){

    document.addEventListener("DOMContentLoaded", ShowHisStock);
    document.addEventListener("DOMContentLoaded", showEmpledos);
    document.addEventListener("DOMContentLoaded", showInventario);
   

    async function ShowHisStock(){
        const egre = await getHistorial()
        egre.forEach(egre => {
            const {producto, empleado, cantidad, createdAt } = egre;
            
            const tabla = document.createElement('tr')
            tabla.innerHTML += `
            <tr>
                <td>${producto}</td>
                <td>${empleado}</td>
                <td>${createdAt.slice(0, 10)}</td>
                <td><div class="cosd9">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="20" height="23" viewBox="0 0 24 24" stroke-width="3" stroke="red" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l14 0" />
                </svg>${cantidad}
            </div></td>
            </tr>

          <tbody class="table-light">
          
          </tbody>

            `
    
            document.querySelector('.egreso').appendChild(tabla)
        });
    }

    async function showInventario(){
        const categ = await getCateg()
        categ.forEach(x =>{
            const {nombre, _id} = x
            const option = document.createElement('option')
            option.value = _id
            option.textContent = nombre
            document.querySelector('#producto2').appendChild(option)
    })
    }

    async function showEmpledos(){
        const emple = await getEmple()
        emple.forEach(x =>{
            const {nombre, documento} = x
            const option = document.createElement('option')
            option.value = documento
            option.textContent = nombre
            document.querySelector('#empleado2').appendChild(option)
    })
    }

    

}())