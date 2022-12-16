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
            let usuario = actual.data;
            
            contador++
            //generando divs
            let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("generadoAñadir")
            nuevoDiv.setAttribute("id","divParaUsuarioGenerado"+contador);
            nuevoDiv.addEventListener("click",(e)=>{
                colocarPila(usuario);
            })

            document.getElementById("añadirUsuarios").appendChild(nuevoDiv);
            
            //! LABELS-------------------------------------------------
            //generando label para nombres
            let nombreUsuario = document.createElement("label");
            nombreUsuario.classList.add("infoAmigos")
            nuevoDiv.appendChild(nombreUsuario);
            //insertando nombres encontrados en label
            let label = document.createTextNode("Username: "+usuario.username);
            nombreUsuario.appendChild(label);

            let nombreUsuario1 = document.createElement("label");
            nombreUsuario1.classList.add("infoAmigos")
            nuevoDiv.appendChild(nombreUsuario1);
            //insertando nombres encontrados en label
            let label1 = document.createTextNode("Nombre: "+usuario.name);
            nombreUsuario1.appendChild(label1);

            let nombreUsuario2 = document.createElement("label");
            nombreUsuario2.classList.add("infoAmigos")
            nuevoDiv.appendChild(nombreUsuario2);
            //insertando nombres encontrados en label
            let label2 = document.createTextNode("Telefono: "+usuario.phone);
            nombreUsuario2.appendChild(label2);


            //! LABELS-------------------------------------------------
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
            pilaAmigos.push(usuario.username);
            pilaAmigos.graficar();
        }
        //recorriendo pila
        while(temp != null){
            if(temp.data==usuario.username){
                alert("Este usuario ya es tu amigo")
            }else{
                pilaAmigos.push(usuario.username);
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
            console.log(actual)
            //generando divs
            let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("bloqueosUsuarios")
            nuevoDiv.addEventListener("click",(e)=>{
                colocarCola(usuario);
            })
            document.getElementById("bloqueosUsuarios").appendChild(nuevoDiv);
             //! LABELS-------------------------------------------------



            //generando label para nombres
            let nombreUsuario = document.createElement("label");
            nombreUsuario.classList.add("infoAmigos")
            nuevoDiv.appendChild(nombreUsuario);
            //insertando nombres encontrados en label
            let label = document.createTextNode(actual.data);
            nombreUsuario.appendChild(label);
             //! LABELS-------------------------------------------------
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
        document.getElementById("cancionesArtista").innerHTML = '';
        
        let actual = listaDeArtitas.head;
        let contador1=0;
        while (actual != null){
            //BUSCAR CANCIONES DE ARTISTAS
            let usuario = actual.value;
            buscarCanciones(actual,usuario.name,contador1);
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
            

             //! LABELS-------------------------------------------------
            //generando label para nombres
            let nombreUsuario = document.createElement("label");
            nombreUsuario.classList.add("infoAmigos") 
            nuevoDiv.appendChild(nombreUsuario);
            //insertando nombres encontrados en label
            let label = document.createTextNode("Artista: "+usuario.name);
            nombreUsuario.appendChild(label);

            //generando label para nombres
            let nombreUsuario1 = document.createElement("label");
            nombreUsuario1.classList.add("infoAmigos") 
            nuevoDiv.appendChild(nombreUsuario1);
            //insertando nombres encontrados en label
            let label1 = document.createTextNode("Edad: "+usuario.age);
            nombreUsuario1.appendChild(label1);

            //generando label para nombres
            let nombreUsuario2 = document.createElement("label");
            nombreUsuario2.classList.add("infoAmigos") 
            nuevoDiv.appendChild(nombreUsuario2);
            //insertando nombres encontrados en label
            let label2 = document.createTextNode("Pais: "+usuario.country);
            nombreUsuario2.appendChild(label2);
             //! LABELS-------------------------------------------------

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
            console.log(temporalcanciones)
            let usuario = temporalcanciones.value;
            //generando divs
            let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("generadoAñadir")
            nuevoDiv.setAttribute("id","divParaUsuarioGenerado");
            nuevoDiv.addEventListener("click",(e)=>{
                 console.log("estoy agregando"+usuario)
                 playlist.agregar(usuario.name,usuario);
             })

            document.getElementById("cajaCanciones"+contador1).appendChild(nuevoDiv);
            
             //! LABELS-------------------------------------------------
            //generando label para nombres
            console.log(usuario)
            let nombreUsuario = document.createElement("label");
            nombreUsuario.classList.add("infoAmigos") 
            nuevoDiv.appendChild(nombreUsuario);
            //insertando nombres encontrados en label
            let label = document.createTextNode("Artista: "+usuario.artist);
            nombreUsuario.appendChild(label);

            //generando label para nombres
            let nombreUsuario1 = document.createElement("label");
            nombreUsuario1.classList.add("infoAmigos") 
            nuevoDiv.appendChild(nombreUsuario1);
            //insertando nombres encontrados en label
            let label1 = document.createTextNode("Nombre Cancion: "+usuario.name);
            nombreUsuario1.appendChild(label1);

            //generando label para nombres
            let nombreUsuario2 = document.createElement("label");
            nombreUsuario2.classList.add("infoAmigos") 
            nuevoDiv.appendChild(nombreUsuario2);
            //insertando nombres encontrados en label
            let label2 = document.createTextNode("Duracion: "+usuario.duration);
            nombreUsuario2.appendChild(label2);

            //generando label para nombres
            let nombreUsuario3 = document.createElement("label");
            nombreUsuario3.classList.add("infoAmigos") 
            nuevoDiv.appendChild(nombreUsuario3);
            //insertando nombres encontrados en label
            let label3 = document.createTextNode("Genero Musical: "+usuario.gender);
            nombreUsuario3.appendChild(label3);
             //! LABELS-------------------------------------------------
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

    let controladorArtistas = document.getElementById("artistasUsuario")
    controladorArtistas.style.display ="none"

    //TODO-------------------ARTISTAS-------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //TODO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //traer ed playlist
    // colocarlas en divs

    function buscarMusica(){
        document.getElementById("añadirPlaylist").innerHTML = '';
        console.log(playlist)
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
            let label = document.createTextNode(usuario.name);
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
            let artista ={name:nombreArtista,
                age:"",
                country:""}

                let cancion ={artist:nombreArtista,
                    name:nombreAlbum,
                    duration:"00",
                    gender:"---"}
            
            listaDeArtitas.InsertarCabeceras(artista)
            listaDeArtitas.InsertarValores(nombreArtista,cancion)
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
            let usuario = actual.valor;
            console.log(usuario)
            
            contador++
            //generando divs
            let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("generadoAñadir")
            nuevoDiv.setAttribute("id","divParaUsuarioGenerado"+contador);
           

            document.getElementById("añadirPodcast").appendChild(nuevoDiv);
            
            //! LABELS-------------------------------------------------
            //generando label para nombres
            let nombreUsuario = document.createElement("label");
            nombreUsuario.classList.add("infoAmigos")
            nuevoDiv.appendChild(nombreUsuario);
            //insertando nombres encontrados en label
            let label = document.createTextNode("Usuario: "+usuario.name);
            nombreUsuario.appendChild(label);



            let nombreUsuario1 = document.createElement("label");
            nombreUsuario1.classList.add("infoAmigos")
            nuevoDiv.appendChild(nombreUsuario1);
            //insertando nombres encontrados en label
            let label1 = document.createTextNode("Topic: "+usuario.topic);
            nombreUsuario1.appendChild(label1);


            let nombreUsuario2 = document.createElement("label");
            nombreUsuario2.classList.add("infoAmigos")
            nuevoDiv.appendChild(nombreUsuario2);
            //insertando nombres encontrados en label
            let label2 = document.createTextNode("Duracion: "+usuario.duration);
            nombreUsuario2.appendChild(label2);
            //! LABELS-------------------------------------------------

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

        let Podcast ={name:nombrePodcast, 
            topic:tema, 
            duration:duracion, 
            guests:invitados}

        if(!(nombrePodcast == null || nombrePodcast == "") && !(tema == null || tema == "")&& !(invitados == null || invitados == "")&& !(duracion == null || duracion == "")){
            //confirmacion = true
            arbolPodcast.agregarr(Podcast,nombrePodcast)
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