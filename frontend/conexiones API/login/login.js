import { login } from "./API.js";

const form = document.querySelector('#formulario');
form.addEventListener('submit', validarLog);

function validarLog(e) {
    e.preventDefault();

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const DataLog = {
        email,
        password
    }

    if(validate(DataLog)){
        alert("LLenar todos los datos")
        return
    }

    login(DataLog)
    .then((response) => {
        
        if(response.success){
            console.log(response);
            sessionStorage.setItem('masterKey', response.token)
            window.location.href = "home.html"
        }else{
            alert(response.msg)
        }
    })
    .catch((error)=>{
        console.log(error);
    })


}

function validate(objeto){
    return !Object.values(objeto).every(element => element !== '');
}
