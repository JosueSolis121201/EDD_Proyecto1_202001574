import {listaDeUsuarios,pilaAmigos,playlist,bloqueoUsuario,listaDeArtitas,matrisMusica,arbolPodcast} from "./globales.js"

let vistaAdmin = document.getElementById("cargaMasivaAdmin") 
let controladorRegister = document.getElementById("formRegistrar")



let vistaLiezoUsuario = document.getElementById("lienzoAdminTest")
let vistaLiezoArtistas= document.getElementById("lienzoArtistas")
let vistaLiezoMusicaProgramada = document.getElementById("lienzomatriz")
let vistaLiezoPodcast= document.getElementById("lienzoPodcast")

    function cargaMasivaUsuarios(event) {
        let reader = new FileReader();
        reader.onload = leercargaMasivaUsuarios;
        reader.readAsText(event.target.files[0]);
    }
    function leercargaMasivaUsuarios(event){
        let obj = JSON.parse(event.target.result);
        console.log(obj)
        for (let data of obj) { 
            //console.log(data)
            let usuario ={dpi:data.dpi,
                name:data.name,
                username:data.username,
                password:data.password,
                phone:data.phone,
                admin:data.admin}

            listaDeUsuarios.agregar(data.username,usuario) 
          }
    }
    function graficarUsiarioAdmin(){
        listaDeUsuarios.graficar()
        vistaLiezoUsuario.style.display ="block"
        vistaLiezoArtistas.style.display ="none"
        vistaLiezoMusicaProgramada.style.display ="none"
        vistaLiezoPodcast.style.display ="none"
    }
    document.getElementById('graficarUsuariosAdmin').addEventListener('click', graficarUsiarioAdmin);
    document.getElementById('usuarioCargamasivaAdmin').addEventListener('change', cargaMasivaUsuarios);
//TODO USUARIO-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function cargaMasivaArtistas(event) {
    let reader = new FileReader();
    reader.onload = leercargaMasivaArtista;
    reader.readAsText(event.target.files[0]);
}
function leercargaMasivaArtista(event){
    let obj = JSON.parse(event.target.result);
    for (let data of obj) { 
        
        let artista ={name:data.name,
        age:data.age,
        country:data.country}
        listaDeArtitas.InsertarCabeceras(artista) 
      }
}
function graficarUsiarioArtista(){ 
    listaDeArtitas.graficar()
        vistaLiezoUsuario.style.display ="none"
        vistaLiezoArtistas.style.display ="block"
        vistaLiezoMusicaProgramada.style.display ="none"
        vistaLiezoPodcast.style.display ="none"
}
document.getElementById('graficarArtistasAdmin').addEventListener('click', graficarUsiarioArtista);
document.getElementById('artistaCargamasiva').addEventListener('change', cargaMasivaArtistas);
//TODO ARTISTA-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function cargaMasivaCanciones(event) {
    let reader = new FileReader();
    reader.onload = leercargaMasivaCanciones;
    reader.readAsText(event.target.files[0]);
}
function leercargaMasivaCanciones(event){
    let obj = JSON.parse(event.target.result);
    for (let data of obj) { 
        let cancion ={artist:data.artist,
        name:data.name,
        duration:data.duration,
        gender:data.gender}


        listaDeArtitas.InsertarValores(data.artist,cancion) 
      }
}
// no funcion graficar ya que depende de la anterior
document.getElementById('cancionesCargaMasiva').addEventListener('change', cargaMasivaCanciones);
//TODO MusicaArtistas-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function cargaMasivaMusicaProgramada(event) {
    let reader = new FileReader();
    reader.onload = leercargaMasivaMusicaProgramada;
    reader.readAsText(event.target.files[0]);
}
function leercargaMasivaMusicaProgramada(event){
    let obj = JSON.parse(event.target.result);
    for (let data of obj) { 
        let cancionProgramada ={month:data.month,
        day:data.day,
        song:data.song,
        artist:data.artist}

        let escribir = "Artista: "+data.artist+", Cancion:"+data.song


        matrisMusica.insertar(data.month,data.day,escribir)
      }
}

function graficarMusicaProgramada(){  
    matrisMusica.exportRender()
    vistaLiezoUsuario.style.display ="none"
        vistaLiezoArtistas.style.display ="none"
        vistaLiezoMusicaProgramada.style.display ="block"
        vistaLiezoPodcast.style.display ="none"
}
// no funcion graficar ya que depende de la anterior
document.getElementById('musicaProgramadaCargaMasiva').addEventListener('change', cargaMasivaMusicaProgramada);
document.getElementById('graficarMusicaAdmin').addEventListener('click', graficarMusicaProgramada);
//TODO Musica Matris dispersa-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function cargaMasivaPodcast(event) {
    let reader = new FileReader();
    reader.onload = podcast;
    reader.readAsText(event.target.files[0]);
}
function podcast(event){
    let obj = JSON.parse(event.target.result);
    for (let data of obj) { 
        let podcastindividual ={name:data.name,
            topic:data.topic,
            duration:data.duration,
            guests:data.guests}
        arbolPodcast.agregarr(podcastindividual,data.name);
      }
}

function graficarPodcast(){  
    arbolPodcast.graficar()
    vistaLiezoUsuario.style.display ="none"
        vistaLiezoArtistas.style.display ="none"
        vistaLiezoMusicaProgramada.style.display ="none"
        vistaLiezoPodcast.style.display ="block"
}
document.getElementById('graficarPodcastAdmin').addEventListener('click', graficarPodcast);

document.getElementById('podcastCargamasiva').addEventListener('change', cargaMasivaPodcast);
//TODO Podcast-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    vistaAdmin.style.display ="none"

    function visuarRegister(){
    vistaAdmin.style.display ="none"
    controladorRegister.style.display ="block"

    }



    document.getElementById('cerrarSesionAdmin').addEventListener('click', visuarRegister);





//!vistas prueba mejoras
let controladorNavUsuario = document.getElementById("navegacionUsuario")
controladorNavUsuario.style.display ="block"
vistaAdmin.style.display ="block"


    