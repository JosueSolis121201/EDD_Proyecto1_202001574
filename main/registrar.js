import ListaSimpleEnlazada from "./listaSimpleEnlazada.js";
import ArchivoPrueba from "./prueba.js";
import {listaDeUsuarios} from "./globales.js"


function registarBotonFormulario()
{
    //obteniendo valores
    let dpi = document.getElementById("dpi").value;
    let nombre_completo = document.getElementById("nombre_completo").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let telefono = document.getElementById("telefono").value;
    let admin=false

    let usuario={dpi:dpi, 
                nombre:nombre_completo, 
                nombre_usuario:username, 
                contraseña:password,
                telefono:telefono}


    listaDeUsuarios.agregar(dpi,usuario);
    
    

}
document.getElementById('buttonFormulario').addEventListener('click', registarBotonFormulario);
 

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

        listaDeUsuarios.imprimir()

    }
    login(){
        //buscar por nombre
        console.log(listaDeUsuarios.buscar("oscar"))
        //USaR SU DATA (aun nose xd)
        


    }

    
}

export default Registrar





