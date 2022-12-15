import {listaDeUsuarios,pilaAmigos,playlist,bloqueoUsuario,listaDeArtitas,matrisMusica,arbolPodcast} from "./globales.js"
import Listadelistas from "./listaDeListas.js";



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
    let controladorAmigos = document.getElementById("amigosUsuario")
    controladorAmigos.style.display ="none"
    
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


  
    
    let controladorBloquear = document.getElementById("bloqueosUsuario")
    controladorBloquear.style.display ="none"
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
               // console.log("estoy agregando"+)
                //playlist.agregar(usuario,usuario);
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
            nuevoDiv.addEventListener("click",(e)=>{
                 console.log("estoy agregando"+usuario)
                 playlist.agregar(usuario,usuario);
             })

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
        console.log(listaDeArtitas)
    }


    //graficar "en vivo"
    document.getElementById('actualizarArtitasGrafica').addEventListener('click', graficarArtistas);
    document.getElementById('artistasUsuariobttn2').addEventListener('click', buscarArtitas);


    /*listaDeArtitas.InsertarCabeceras("Cambios de luna");

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
    buscarArtitas();*/

    
    
    
    let controladorArtistas = document.getElementById("artistasUsuario")
    controladorArtistas.style.display ="none"

    //TODO-------------------ARTISTAS-------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //traer ed playlist
    // colocarlas en divs

    function buscarMusica(){
        document.getElementById("añadirPlaylist").innerHTML = '';
        let actual = playlist.tail
        let contador

        do {
            let usuario = actual.data;
            
            //generando divs
            let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("generadoAñadir")
            nuevoDiv.setAttribute("id","divParaUsuarioGenerado"+contador);
            

            document.getElementById("añadirPlaylist").appendChild(nuevoDiv);
            

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
            contador++;
            actual = actual.sig;
          } while ( actual!= null&&actual!=playlist.head.sig);
         
    } 
    function graficarPlaylist(){ 
        playlist.graficar();
    }


    //graficar "en vivo"
    document.getElementById('actualizarPlaylistGrafica').addEventListener('click', graficarPlaylist);



    document.getElementById('PlaylistUsuariobttn2').addEventListener('click', buscarMusica);
    
    //graficar en vivo

    let controladorPlaylist = document.getElementById("formPlaylist")
    controladorPlaylist.style.display ="none"

    //TODO-------------------PLAYLIST-------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    

    //form
    //si se desea publicar ahora, ira en lista de listas
    // si se desea publicar con tiempo, ira en calendario(matriz dispersa)


    function buscarMusicaMatrizDispersa(){
        document.getElementById("añadirUsuarios").innerHTML = '';
        let contador=0;
        
    } 

     buscarMusicaMatrizDispersa();




    function publicarCancion(){
        //obteniendo los parametros se agraga a la lista de listas
        let nombreArtista = document.getElementById("nombreCancionId").value;
        let nombreAlbum = document.getElementById("NombreAlbumId").value;
        if(!(nombreArtista == null || nombreArtista == "") && !(nombreAlbum == null || nombreAlbum == "")){
            //confirmacion = true
            listaDeArtitas.InsertarCabeceras(nombreArtista)
            listaDeArtitas.InsertarValores(nombreArtista,nombreAlbum)
            alert("Se publico, ver en los artistas")
        }else{
            alert("Llena los parametros")
        }
        

    }
    function programarCancion(){
        let nombreArtista = document.getElementById("nombreCancionId").value;
        let nombreAlbum = document.getElementById("NombreAlbumId").value;
        let dia = document.getElementById("diaCancionid").value;
        let mes = document.getElementById("mesCancionid").value;
        
        let artistaObjeto ={nombreArtista:nombreArtista,
            nombreAlbum:nombreAlbum}
            if(!(nombreArtista == null || nombreArtista == "") && !(nombreAlbum == null || nombreAlbum == "")&& !(dia == null || dia == "")&& !(mes == null || mes == "")){
                //confirmacion = true
                matrisMusica.insertar(mes,dia,artistaObjeto.nombreArtista) 
                alert("Se publico, ver en grafica musica")
            }else{
                alert("Llena los parametros")
            }
        
    }







    document.getElementById('buttonFormularioCancion').addEventListener('click', publicarCancion);
    document.getElementById('buttonFormularioProgramar').addEventListener('click', programarCancion);











  

    function graficarMatrizMusica(){ 
        matrisMusica.exportRender(); 
    }

    document.getElementById('actualizarMusicaGrafica').addEventListener('click', graficarMatrizMusica);



    let controladormusica = document.getElementById("formMusica")
    controladormusica.style.display ="none"
    //TODO-------------------Musica-------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    
    
    function recorrerarbol(actual){
        let contador=0
        
        if(actual!=null){ 
            console.log(actual)
            let usuario = actual.llave;
            
            contador++
            //generando divs
            let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("generadoAñadir")
            nuevoDiv.setAttribute("id","divParaUsuarioGenerado"+contador);
           

            document.getElementById("añadirPodcast").appendChild(nuevoDiv);
            

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

            recorrerarbol(actual.izquierda);
            recorrerarbol(actual.derecha);
        }
    

    }
    
    function buscarUsuarioPodcast(){
        document.getElementById("añadirPodcast").innerHTML = '';
        console.log(arbolPodcast)
        let contador=0;
        let actual = arbolPodcast.raiz; 
        recorrerarbol(actual);
    } 

    document.getElementById('PodcastButton').addEventListener('click', buscarUsuarioPodcast);


    function publicarPodCast(){
        //obteniendo los parametros se agraga a la lista de listas
        let nombrePodcast = document.getElementById("nombrePodcastId").value; 
        let tema = document.getElementById("tema").value;
        let invitados = document.getElementById("invitados").value;
        let duracion = document.getElementById("duracion").value;

        let Podcast ={nombrePodcast:nombrePodcast, 
            tema:tema, 
            invitados:invitados, 
            duracion:duracion}

            let string = "Podcast: "+nombrePodcast  +" Topic: " + tema
        if(!(nombrePodcast == null || nombrePodcast == "") && !(tema == null || tema == "")&& !(invitados == null || invitados == "")&& !(duracion == null || duracion == "")){
            //confirmacion = true
            arbolPodcast.agregarr(string,nombrePodcast)
            arbolPodcast.graficar()
            alert("Se publico, ver en boton graficar")
        }else{
            alert("Llena los parametros") 
        }
        

    }


    document.getElementById('buttonFormularioPodcast').addEventListener('click', publicarPodCast);


    function graficarPodcast(){  
        arbolPodcast.graficar()
    }
    document.getElementById('actualizarPodcastGrafica').addEventListener('click', graficarPodcast);
   /* arbolPodcast.insertar();
    arbolPodcast.insertar(32);
    arbolPodcast.insertar(55);
    arbolPodcast.insertar(20);
    arbolPodcast.insertar(77);
    arbolPodcast.insertar(8);
    arbolPodcast.insertar(13);
    arbolPodcast.insertar(1);
    arbolPodcast.insertar(6);
    arbolPodcast.insertar(25);
    arbolPodcast.insertar(4);
    console.log("Recorrido in orden");
    arbolPodcast.inorden();
    console.log("Recorrido post orden");
    arbolPodcast.posorden();
    
    console.log("Recorrido pre orden");
    arbolPodcast.preorden(); */
    //arbolPodcast.graficar();
    


    let controladorPodcast = document.getElementById("formPodcast")
    controladorPodcast.style.display ="none"

    //TODO-------------------Podcast-------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





    let ocultar6 = document.getElementById("navegacionUsuario")
    ocultar6.style.display ="none"
    //TODO-------------------OCULTAR USUARIO-------------------------------------------------------------------------------------------------------------------------------------
    //! CONTROLADORES
    let controladorRegister = document.getElementById("formRegistrar")
    let controladorNavUsuario = document.getElementById("navegacionUsuario")

    function visualMusica(){
        controladormusica.style.display ="block"
        controladorPodcast.style.display ="none"
        controladorPlaylist.style.display ="none"
        controladorAmigos.style.display ="none"
        controladorBloquear.style.display ="none"
        controladorArtistas.style.display ="none"
        controladorRegister.style.display ="none"
    }

    function visualPlaylist(){
        controladormusica.style.display ="none"
        controladorPodcast.style.display ="none"
        controladorPlaylist.style.display ="block"
        controladorAmigos.style.display ="none"
        controladorBloquear.style.display ="none"
        controladorArtistas.style.display ="none"
        controladorRegister.style.display ="none"
    }

    function visualArtistas(){
        controladormusica.style.display ="none"
        controladorPodcast.style.display ="none"
        controladorPlaylist.style.display ="none"
        controladorAmigos.style.display ="none"
        controladorBloquear.style.display ="none"
        controladorArtistas.style.display ="block"
        controladorRegister.style.display ="none"
    }

    function visualAmigos(){
        controladormusica.style.display ="none"
        controladorPodcast.style.display ="none"
        controladorPlaylist.style.display ="none"
        controladorAmigos.style.display ="block"
        controladorBloquear.style.display ="none"
        controladorArtistas.style.display ="none"
        controladorRegister.style.display ="none"
    }

    function visualBloqueos(){
        controladormusica.style.display ="none"
        controladorPodcast.style.display ="none"
        controladorPlaylist.style.display ="none"
        controladorAmigos.style.display ="none"
        controladorBloquear.style.display ="block"
        controladorArtistas.style.display ="none"
        controladorRegister.style.display ="none"
    }

    function visualPodcast(){
        controladormusica.style.display ="none"
        controladorPodcast.style.display ="block"
        controladorPlaylist.style.display ="none"
        controladorAmigos.style.display ="none"
        controladorBloquear.style.display ="none"
        controladorArtistas.style.display ="none"
        controladorRegister.style.display ="none"
    }

    function visualSesion(){
        controladormusica.style.display ="none"
        controladorPodcast.style.display ="none"
        controladorPlaylist.style.display ="none"
        controladorAmigos.style.display ="none"
        controladorBloquear.style.display ="none"
        controladorArtistas.style.display ="none"
        controladorRegister.style.display ="block" 
        controladorNavUsuario.style.display ="none" 
    }

    document.getElementById('musica').addEventListener('click', visualMusica);
    document.getElementById('playlist').addEventListener('click', visualPlaylist);
    document.getElementById('artista').addEventListener('click', visualArtistas);
    document.getElementById('amigos').addEventListener('click', visualAmigos);
    document.getElementById('bloqueados').addEventListener('click', visualBloqueos);
    document.getElementById('Podcast').addEventListener('click', visualPodcast);
    document.getElementById('cerrarSesion').addEventListener('click', visualSesion);