import {playlist} from "./globales.js"


class Playlist{
    constructor(){

    }

    agregarPlaylist(){ 
        playlist.agregar(1,"1")
        playlist.agregar(3,"3")
        playlist.agregar(4,"4") 
        playlist.imprimir(); 
    }
}

export default Playlist;