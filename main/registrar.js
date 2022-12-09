import ListaSimpleEnlazada from "./listaSimpleEnlazada.js";
import ArchivoPrueba from "./prueba.js";
import {listaDeUsuarios} from "./globales.js"


function registarBotonFormulario()
{
    let persona1 = {dpi:1,nombre: "nero"}
    let llave1 = persona1.dpi

    let persona2 = {dpi:2,nombre: "gato"}
    let llave2 = persona2.dpi

    listaDeUsuarios.agregar(llave1,persona1)
    listaDeUsuarios.agregar(llave2,persona2)
    listaDeUsuarios.imprimir();
    listaDeUsuarios.eliminar(2)
    listaDeUsuarios.imprimir();
}


document.getElementById('buttonFormulario').addEventListener('click', registarBotonFormulario);
 


/*class Registrar{
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

    registrarInput(){
            let dpi ;
            let nombre_completo ;
            let username ;
            let password ;
            let telefono ;

        function verificar() {
            // obteniendo valroes d elos imputs
            dpi = document.getElementById("dpi").value;
            nombre_completo = document.getElementById("nombre_completo").value;
            username = document.getElementById("username").value;
            password = document.getElementById("password").value;
            telefono = document.getElementById("telefono").value;
            console.log(dpi)
            console.log(nombre_completo)
            console.log(username)
            console.log(password)
            console.log(telefono)

            // agregando valores de los iputs a la lista ya creada
            listaDeUsuarios.agregar(dpi)
            listaDeUsuarios.agregar(nombre_completo)
            listaDeUsuarios.agregar(username)
            listaDeUsuarios.agregar(password)
            listaDeUsuarios.agregar(telefono)
            listaDeUsuarios.agregar("false")

        } 
        var button = document.querySelector("button");
        button.onclick = verificar;
    }

    login(){
        //buscar por nombre
        console.log(listaDeUsuarios.buscar("oscar"))
        //USaR SU DATA (aun nose xd)
        


    }

    
}

export default Registrar


*/


