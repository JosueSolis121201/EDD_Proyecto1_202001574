import ListaSimpleEnlazada from "./listaSimpleEnlazada.js";
import Pila from "./pila.js";
import ListaCircularDoble from "./circularDobleEnlaze.js";
import Cola from "./cola.js";
import Listadelistas from "./listaDeListas.js";
import Matriz from "./matrizDispersa.js";
import ABB from "./arbolBinario.js";

var listaDeUsuarios = new ListaSimpleEnlazada();
var pilaAmigos = new Pila();
var playlist = new ListaCircularDoble();
var bloqueoUsuario = new Cola()
var listaDeArtitas = new Listadelistas();
var matrisMusica = new Matriz();
var arbolPodcast = new ABB();


export {
    listaDeUsuarios,
    pilaAmigos,
    playlist,
    bloqueoUsuario,
    listaDeArtitas,
    matrisMusica,
    arbolPodcast
}