import {listaDeUsuarios,pilaAmigos,playlist} from "./globales.js"

    //lsita de usuarios para agregar
    let usuarioEncontado;
    function buscarUsuario(){
        let actual = listaDeUsuarios.head;
        while( actual != null){
            usuarioEncontado = document.createElement("li");
            document.getElementById("añadirUsuarios").appendChild(usuarioEncontado);
            actual = actual.sig;
        }
    }
    

    buscarUsuario();

    //colocar esos usuarios de lista en divs para que sean visibles
    //divs tengan evento onclick y este los meta a la pila de este usuario
    
    
    
    
    
    let node = document.createElement("li");
    node.classList.remove("activo")
    node.classList.add("activo")
    let textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("añadirUsuarios").appendChild(node);