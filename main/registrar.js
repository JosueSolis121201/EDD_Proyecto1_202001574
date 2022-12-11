import ListaSimpleEnlazada from "./listaSimpleEnlazada.js";
import ArchivoPrueba from "./prueba.js";
import {listaDeUsuarios} from "./globales.js"


let registrar = document.getElementById("formRegistrar")
let login = document.getElementById("formLogin")
login.style.display ="none"

function registarBotonFormulario()
{
    let confirmacion = false;
    

    //obteniendo valores
    let dpi = document.getElementById("dpi").value;
    let nombre_completo = document.getElementById("nombre_completo").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let telefono = document.getElementById("telefono").value;
    let admin=false
    //creando objeto js de datos
    let usuario={dpi:dpi, 
                nombre:nombre_completo, 
                nombre_usuario:username, 
                contraseña:password,
                telefono:telefono}


    // comprobando que el form este lleno
    if(!(dpi == null || dpi == "") && !(nombre_completo == null || nombre_completo == "") && !(username == null || username == "")  && !(password == null || password == "") && !(telefono == null || telefono == "")){
        confirmacion = true
        listaDeUsuarios.agregar(username,usuario);
         listaDeUsuarios.imprimir()
    }else{
        alert("Lista incompleta")
    }
    // si esta lleno confirmacion sera true
    if(confirmacion){
        //! CAMBIAR A NONE
        registrar.style.display ="none";
        login.style.display ="none";
      }
}
document.getElementById('buttonFormulario').addEventListener('click', registarBotonFormulario);
 


function loginBotonFormulario()
{   
    // obenet variables de los imputs
    let username = document.getElementById("usernamelogin").value;
    let password = document.getElementById("passwordlogin").value;
    // buscar en lista
    let buscando =listaDeUsuarios.buscar(username)
    //if si encontro
    if(buscando!=null){
        //comparar contrasela actual con la de la lsita 
        if(buscando.contraseña ==password){
            alert("Bienvenido: "+username)
            //! CAMBIAR A NONE
            registrar.style.display ="none";
            login.style.display ="none";
        }else{
            alert("Nombre de usuario encontrado contraseña INCORRECTA")
        }
    }else{
        alert("No se encontro a NADIE")
    }
}
document.getElementById('buttonFormularioLogin').addEventListener('click', loginBotonFormulario);




function Controlar1 (){
    LoginorRegister(true)
}
function Controlar2 (){
    LoginorRegister(false)
}

function LoginorRegister(boleano){
    if(boleano){
        console.log("monstrando login")
        registrar.style.display ="none"
        login.style.display ="block"
      }else{
        console.log("monstrando register")
        registrar.style.display ="block"
        login.style.display ="none"
      }
}
document.getElementById('login').addEventListener('click', Controlar1);
document.getElementById('registrar').addEventListener('click', Controlar2);










class Registrar{
    constructor(){
        //lista
    }

    registrarCargaMasiva(){
        //json prueba
        var obj = JSON.parse(ArchivoPrueba);
        for (let data of obj) {
            //guardar masivamente valores en lista simple
            listaDeUsuarios.agregar(data.dpi,data);
          }
    }
}

export default Registrar





