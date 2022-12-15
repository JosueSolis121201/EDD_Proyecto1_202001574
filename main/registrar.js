import {listaDeUsuarios,pilaAmigos,playlist,bloqueoUsuario,listaDeArtitas,matrisMusica,arbolPodcast} from "./globales.js"


let registrar = document.getElementById("formRegistrar")
let login = document.getElementById("formLogin")


let vistaAdmin = document.getElementById("cargaMasivaAdmin")
//let login = document.getElementById("formLogin")


login.style.display ="none"

let vistaUsuario = document.getElementById("navegacionUsuario")
let vistaAmigosButton = document.getElementById("amigosUsuario")

let checkboxAdmin = document.getElementById("checkboxAdmin")

function registarBotonFormulario(){
    listaDeUsuarios.imprimir()
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
                name:nombre_completo, 
                username:username, 
                password:password,
                phone:telefono,
                admin:false}
    


               


    // comprobando que el form este lleno
    if(!(dpi == null || dpi == "") && !(nombre_completo == null || nombre_completo == "") && !(username == null || username == "")  && !(password == null || password == "") && !(telefono == null || telefono == "")){
        confirmacion = true
        listaDeUsuarios.agregar(username,usuario);
    }else{
        alert("Lista incompleta")
    }
    // si esta lleno confirmacion sera true
    if(confirmacion){
        //! CAMBIAR A NONE
        registrar.style.display ="none";
        login.style.display ="none"; 
        vistaUsuario.style.display ="block";
        vistaAmigosButton .style.display ="block";
      }
}
document.getElementById('buttonFormulario').addEventListener('click', registarBotonFormulario);
 


function loginBotonFormulario(){   
    // obenet variables de los imputs
    let username = document.getElementById("usernamelogin").value;
    let password = document.getElementById("passwordlogin").value;
    // buscar en lista
    let buscando =listaDeUsuarios.buscar(username)
    //if si encontro
    if(buscando!=null){
        //comparar contrasela actual con la de la lsita 
        if(buscando.password ==password){
           
           
            if(checkboxAdmin.checked){
                console.log("Comprobando si es admin")
                if(buscando.admin==true){
                    alert("Bienvenido admin: "+username)
                    console.log("es admin")
                    registrar.style.display ="none";
                    login.style.display ="none"; 
                    vistaAdmin.style.display ="block";

                }else{
                    alert("No eres admin")
                }
            }else{
                alert("Bienvenido: "+username)
                registrar.style.display ="none";
                login.style.display ="none"; 
                vistaUsuario.style.display ="block";
                vistaAmigosButton .style.display ="block";
                console.log("Entrando como usuario")

            }
            
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










let usuarioAdmin={dpi:2654568452521, 
    name:"Oscar Armin", 
    username:"EDD", 
    password:123,
    phone:"+502 (123) 123-4567",
    admin:true}




    listaDeUsuarios.agregar(usuarioAdmin.username,usuarioAdmin);
    listaDeUsuarios.imprimir()