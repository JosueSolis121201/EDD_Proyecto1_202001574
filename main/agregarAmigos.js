import {pilaAmigos} from "./globales.js"
import b from "./amigosPru.js";



class Amigos{
    constructor(){
    }

    cargaMasivaAmigos(){
        //json prueba
        var obj = JSON.parse(b);
        for (let data of obj) {
            //guardar masivamente valores en lista simple
            pilaAmigos.push(data)
          }
    }
}

export default  Amigos;