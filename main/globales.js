import ListaSimpleEnlazada from "./listaSimpleEnlazada.js";
import Pila from "./pila.js";
import ListaCircularDoble from "./circularDobleEnlaze.js";
import Cola from "./cola.js";
import Listadelistas from "./listaDeListas.js";

var listaDeUsuarios = new ListaSimpleEnlazada();
var pilaAmigos = new Pila();
var playlist = new ListaCircularDoble();
var bloqueoUsuario = new Cola()
var listaDeArtitas = new Listadelistas()


export {
    listaDeUsuarios,
    pilaAmigos,
    playlist,
    bloqueoUsuario,
    listaDeArtitas 
}