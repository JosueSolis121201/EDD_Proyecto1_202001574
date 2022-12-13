class NodoCabeza{
    constructor(data){
        this.value = data;
        this.next = null;
        this.down = null;
    }
}

class NodoValor{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}


class Listadelistas{
    constructor(){
        this.head = null
    }
    //metodos de insertar
    InsertarCabeceras(data){
        let temporal = new NodoCabeza(data);
        temporal.next = this.head
        this.head = temporal;
    }

    InsertarValores(_cabeza, data){
        let temporalcabeza = this.head
        //recorrer toda la lista de cabezas 
        while(temporalcabeza != null){
            if(temporalcabeza.value == _cabeza){
                let nuevacancion = new NodoValor(data)
                let iniciocanciones = temporalcabeza.down
                temporalcabeza.down = nuevacancion
                nuevacancion.next = iniciocanciones
                break
            }
            temporalcabeza= temporalcabeza.next
        }
        if(temporalcabeza == null){
            console.log("No se encontro el cabecera en la lista "+_cabeza)
        }

    }

    mostrarCabeceras(){
        let temporal = this.head
        console.log("*********** Cabeceras *********")
        while (temporal != null){
            console.log(temporal.value)
            temporal = temporal.next
        }
    }

    MostrarValores(data){
        let temporal = this.head
        while (temporal != null){
            if(temporal.value == data){
                console.log("*********** Cabecera "+data+" *********")        
                let temporalcanciones = temporal.down
                while(temporalcanciones != null){
                    console.log(temporalcanciones.value)
                    temporalcanciones = temporalcanciones.next
                }
                return
            }
            temporal = temporal.next
        }
        if(temporal == null){
            console.log("No se pudo encontrar el cabeza solicitado "+data)
        }
    }


    graficar(){
        //dot
        let codigodot = "digraph G{\nlabel=\"Artitas: Canciones \";\nnode [shape=box style=filled];\ngraph [rankdir = LR];\nedge[dir = \"both\"];\n";
        let temporal = this.head
        let conexiones ="";
        let nodos ="";
        let numnodo= 0;

        let nodoCancion="";
        let numnodoCancion= 0;
        
        // cabeceras
        while (temporal != null){
                                //0,0
                nodos+=  "N" + numnodo.toString()+ numnodoCancion.toString() + "[label=\"" + temporal.value + "\" ];\n"
                
                //futuro
                let futurohijo = numnodo+1
                if(temporal.next!=null){    
                    conexiones += "N" +  numnodo.toString()+ numnodoCancion.toString() + " -> N" +  futurohijo.toString()+ numnodoCancion.toString() + ";\n"
                    conexiones += "N" +  futurohijo.toString()+ numnodoCancion.toString() + " -> N" +numnodo.toString()+ numnodoCancion.toString() + ";\n"
                }
                let temporalcanciones = temporal.down
                while(temporalcanciones != null){
                    
                    let futuroCancion = numnodoCancion+1
                    nodos+=  "N" + numnodo.toString()+ futuroCancion.toString() + "[label=\"" + temporalcanciones.value + "\" ];\n"
                    conexiones += "N" +  numnodo.toString()+ numnodoCancion.toString() + " -> N" +  numnodo.toString()+ futuroCancion.toString() + ";\n"
                    conexiones += "N" +  numnodo.toString()+ futuroCancion.toString()  + " -> N" + numnodo.toString()+ numnodoCancion.toString() + ";\n"
                    temporalcanciones = temporalcanciones.next
                    numnodoCancion++;
                }
        numnodoCancion=0;
        numnodo++;
        temporal = temporal.next
        }
        //console.log("nodos: "+nodos)
        //console.log("Conbexions: "+conexiones)
        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n}\n}"
        console.log(codigodot)
        d3.select("#lienzoArtistas").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot)
    }
}




export default Listadelistas;