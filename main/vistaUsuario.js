import {listaDeUsuarios,pilaAmigos,playlist,bloqueoUsuario,listaDeArtitas} from "./globales.js"



    //lsita de usuarios para agregar
    //buscando usuario para agregar en lista simple
    function buscarUsuario(){
        document.getElementById("añadirUsuarios").innerHTML = '';
        let contador=0;
        let actual = listaDeUsuarios.head;
        listaDeUsuarios.imprimir()
        while( actual != null){
            let usuario = actual.data.username;
            
            contador++
            //generando divs
            let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("generadoAñadir")
            nuevoDiv.setAttribute("id","divParaUsuarioGenerado"+contador);
            nuevoDiv.addEventListener("click",(e)=>{
                colocarPila(usuario);
            })

            document.getElementById("añadirUsuarios").appendChild(nuevoDiv);
            

            //generando label para nombres
            let nombreUsuario = document.createElement("label");
            nombreUsuario.classList.add("infoAmigos")
            nuevoDiv.appendChild(nombreUsuario);

            //insertando nombres encontrados en label
            let label = document.createTextNode(actual.data.username);
            nombreUsuario.appendChild(label);

            //insertando imagen
            let imagendiv = document.createElement("div");
            imagendiv.classList.add("imagenUsuario")
            nuevoDiv.appendChild(imagendiv);
            actual = actual.sig;
        }
    } 

    // colocando usuarios de lista simple en pila
    //por cada usuario en lista colocar en div
    //divs tengan evento onclick y este los meta a la pila de este usuario
    function colocarPila(usuario){
        let temp = pilaAmigos.top;
        //si es el primero
        if(temp ==null){
            pilaAmigos.push(usuario);
            pilaAmigos.graficar();
        }
        //recorriendo pila
        while(temp != null){
            if(temp.data==usuario){
                alert("Este usuario ya es tu amigo")
            }else{
                pilaAmigos.push(usuario);
                pilaAmigos.graficar();
            }
            temp = temp.next;
        }
    }


    function eliminar(){
        pilaAmigos.pop()
        pilaAmigos.graficar();
    }


    document.getElementById('eliminarAmigobttn2').addEventListener('click', buscarUsuario);
    document.getElementById('eliminarAmigobttn').addEventListener('click', eliminar);
    let ocultar = document.getElementById("amigosUsuario")
    ocultar.style.display ="none"
    
    //TODO-------------------AÑADIR AMIGOS-------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    //obtener nobes de bloqueo
    //crear divs
    //colocarlos en cola (casi igual)


    //mostrar que amigos bloquear
    function buscarUsuarioBloqueo(){
        document.getElementById("bloqueosUsuarios").innerHTML = ''; 
        let actual = pilaAmigos.top;
            while( actual != null){
            
            let usuario = actual.data;
            //generando divs
            let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("bloqueosUsuarios")
            nuevoDiv.addEventListener("click",(e)=>{
                colocarCola(usuario);
            })
            document.getElementById("bloqueosUsuarios").appendChild(nuevoDiv);

            //generando label para nombres
            let nombreUsuario = document.createElement("label");
            nombreUsuario.classList.add("infoAmigos")
            nuevoDiv.appendChild(nombreUsuario);

            //insertando nombres encontrados en label
            let label = document.createTextNode(actual.data);
            nombreUsuario.appendChild(label);

            //insertando imagen
            let imagendiv = document.createElement("div");
            imagendiv.classList.add("imagenUsuario")
            nuevoDiv.appendChild(imagendiv);
            actual = actual.next;
        }
    } 
    //Amigos bloqueados
    function colocarCola(usuario){ 
        let temp = bloqueoUsuario.head;
        //si es el primero
        if(temp ==null){
            bloqueoUsuario.encolar(usuario);
            bloqueoUsuario.graficar();
        }
        //recorriendo cola
        while(temp != null){
            console.log(temp.data)
            console.log(usuario)
            if(temp.data==usuario){
                alert("Persona ya BLOQUEADA")
            }else{
                bloqueoUsuario.encolar(usuario);
                bloqueoUsuario.graficar();
            }
            temp = temp.sig;
        }
    }

    function desbloquear(){
        bloqueoUsuario.remove()
        bloqueoUsuario.graficar();
    }

    document.getElementById('bloquearAmigobttn2').addEventListener('click', buscarUsuarioBloqueo);
    document.getElementById('bloquearAmigobttn').addEventListener('click', desbloquear);


    pilaAmigos.push("persona1")

    pilaAmigos.push("persona2")
    pilaAmigos.push("persona3")
    pilaAmigos.push("persona4")
    pilaAmigos.push("persona5")
    pilaAmigos.push("persona6")
    pilaAmigos.push("persona7")
    pilaAmigos.push("persona8")
    pilaAmigos.push("persona9")
    
    let ocultar1 = document.getElementById("bloqueosUsuario")
    ocultar1.style.display ="none"
    //TODO-------------------Bloquear amigos-------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //usar la EDD de artistas
    //ARTISTAS
    
    function buscarArtitas(){
        document.getElementById("divArtistas").innerHTML = '';
        let actual = listaDeArtitas.head;
        let contador1=0;
        while (actual != null){
            //BUSCAR CANCIONES DE ARTISTAS
            let usuario = actual.value;
            buscarCanciones(actual,usuario,contador1);
            contador1++
            //generando divs
            let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("generadoAñadir")
            nuevoDiv.setAttribute("id","divParaUsuarioGenerado"+contador1);
            nuevoDiv.addEventListener("click",(e)=>{
                //colocarPila(usuario);
            })

            document.getElementById("divArtistas").appendChild(nuevoDiv);
            

            //generando label para nombres
            let nombreUsuario = document.createElement("label");
            nombreUsuario.classList.add("infoAmigos")
            nuevoDiv.appendChild(nombreUsuario);

            //insertando nombres encontrados en label
            let label = document.createTextNode(actual.value);
            nombreUsuario.appendChild(label);

            //insertando imagen
            let imagendiv = document.createElement("div");
            imagendiv.classList.add("imagenUsuario")
            nuevoDiv.appendChild(imagendiv);
            actual = actual.next
    } 
}
//BUSCAR CANCIONES DE ARTISTAS
function buscarCanciones(temporal,artistanombre,contador1){
            let temporalcanciones = temporal.down
            let cajaCanciones = document.createElement("div");
            cajaCanciones.classList.add("cajaCanciones")
            cajaCanciones.setAttribute("id","cajaCanciones"+contador1);
            document.getElementById("cancionesArtista").appendChild(cajaCanciones);
            //generando label para artista
            let artista = document.createElement("label");
            artista.classList.add("infoAmigos")
            artista.classList.add("infoAmigos")
            cajaCanciones.appendChild(artista);

            //generando nombre artista
            let labelArtista = document.createTextNode(artistanombre); 
            artista.appendChild(labelArtista);
        while(temporalcanciones != null){
            
            let usuario = temporalcanciones.value;
            //generando divs
            let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("generadoAñadir")
            nuevoDiv.setAttribute("id","divParaUsuarioGenerado");

            document.getElementById("cajaCanciones"+contador1).appendChild(nuevoDiv);
            

            //generando label para nombres
            let nombreUsuario = document.createElement("label");
            nombreUsuario.classList.add("infoAmigos") 
            nuevoDiv.appendChild(nombreUsuario);

            //insertando nombres encontrados en label
            let label = document.createTextNode(usuario);
            nombreUsuario.appendChild(label);

            //insertando imagen
            let imagendiv = document.createElement("div");
            imagendiv.classList.add("imagenUsuario")
            nuevoDiv.appendChild(imagendiv);
            temporalcanciones = temporalcanciones.next
        }
         
            

}


    //Amigos bloqueados
    function graficarArtistas(){ 
        listaDeArtitas.graficar();
    }



    document.getElementById('actualizarArtitasGrafica').addEventListener('click', graficarArtistas);


    listaDeArtitas.InsertarCabeceras("Cambios de luna");

    listaDeArtitas.InsertarValores("Cambios de luna","Morir de amor")
    listaDeArtitas.InsertarValores("Cambios de luna","Shillin")
    listaDeArtitas.InsertarValores("Cambios de luna","La noche")
    listaDeArtitas.InsertarValores("Cambios de luna","1")
    listaDeArtitas.InsertarValores("Cambios de luna","2")

    listaDeArtitas.InsertarCabeceras("artista2");
    listaDeArtitas.InsertarValores("artista2","a")
    listaDeArtitas.InsertarValores("artista2","b")
    listaDeArtitas.InsertarValores("artista2","c")
    listaDeArtitas.InsertarValores("artista2","d")
    listaDeArtitas.InsertarValores("artista2","e")

    listaDeArtitas.InsertarCabeceras("artista3");
    listaDeArtitas.InsertarValores("artista3","a1")
    listaDeArtitas.InsertarValores("artista3","b2")
    listaDeArtitas.InsertarValores("artista3","c3")
    listaDeArtitas.InsertarValores("artista3","d4")
    listaDeArtitas.InsertarValores("artista3","e5")
    buscarArtitas();

    
    //graficar "en vivo"
    


    //TODO-------------------ARTISTAS-------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
