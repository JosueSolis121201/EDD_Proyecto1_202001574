import Registrar from "./registrar.js";
import Amigos from "./agregarAmigos.js";
import Cola from "./cola.js";
import Playlist from "./playlist.js"
import {listaDeUsuarios,pilaAmigos,playlist} from "./globales.js"

let a = new Registrar();

//a.registrarCargaMasiva()
//listaDeUsuarios.imprimir();

let pila = new Amigos();

//pila.cargaMasivaAmigos();

//pilaAmigos.printPila();


let cola = new Cola();

//cola.encolar(1)
//cola.encolar(2)
//cola.encolar(3)
//cola.encolar(4)
//cola.encolar(5)

//cola.remove()
//cola.remove()
//cola.remove()
//cola.remove()


//cola.imprimir()

let musica = new Playlist()
musica.agregarPlaylist()







