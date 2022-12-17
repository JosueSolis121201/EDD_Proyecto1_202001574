class NodoCabeza{
    constructor(data){
        this.value = data;
        this.next = null;
        this.down = null;
        this.back = null;
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
        this.tail = null;
        this.size=0;
    }
    //metodos de insertar
    InsertarCabeceras(data){
        //crea nodo
        let temporal = new NodoCabeza(data);
        this.size++;
        //meter head en siguiente
        temporal.next = this.head;
        //mete head en nodo
        this.head = temporal;
        

    }

    InsertarValores(_cabeza, data){ 
        let temporalcabeza = this.head
        //recorrer toda la lista de cabezas 
        while(temporalcabeza != null){
            console.log(temporalcabeza.value.name)
            console.log(_cabeza)
            if(temporalcabeza.value.name == _cabeza){
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

    bubbleSort(){
        let change = true;
        
        while (change){
            var temporal = this.head;
            change= false;
            while (temporal.next != null){
                if(this.compararString(temporal.value.name,temporal.next.value.name)){
                    let temp = temporal.value
                    change= true;
                    temporal.value = temporal.next.value
                    temporal.next.value = temp
            }
            temporal = temporal.next
        }
    }
}





      compararString(izquierda,derecha){
        if(izquierda.localeCompare(derecha) != 1){
            return false
        }
        return true
    }



    getNodo(pos){
		let temp = this.head;
		for(let i = 0; i<pos;i++){
			temp = temp.next;
		}
		return temp;
	}

  quicksort(){
    this.ordenar(0,this.size-1)
  }

  ordenar(min,max) {
    if (min < max) {
  
      let pos = this.partir(min, max);
      console.log("pos", pos)
      this.ordenar(min, pos - 1);
      this.ordenar(pos + 1, max);
    }}

	change(pos1,pos2){
		let valor = this.getNodo(pos1).value.name;
		this.getNodo(pos1).value.name  = this.getNodo(pos2).value.name;
		this.getNodo(pos2).value.name = valor;
	}

	partir(min,max){
		let pivote = this.getNodo(max).value.name;
    
		let i = (min - 1);
    
		for(let j = min; j <= max - 1; j++){
			if(this.getNodo(j).value.name > pivote){
				i++;
				this.change(i,j);
			}
		}
		this.change(i + 1, max);
		return (i + 1);
	}


































    graficar(){
        //dot
        let codigodot = "digraph G{\nlabel=\"Artitas: Canciones \";\nnode [shape=box style=filled];\ngraph [rankdir = LR];\n";
        let temporal = this.head
        let conexiones ="";
        let nodos ="";
        let numnodo= 0;

        let nodoCancion="";
        let numnodoCancion= 0;
        
        // cabeceras
        while (temporal != null){
                                //0,0
                nodos+=  "N" + numnodo.toString()+ numnodoCancion.toString() + "[label=\"" + temporal.value.name + "\" ];\n"
                
                //futuro
                let futurohijo = numnodo+1
                if(temporal.next!=null){    
                    conexiones += "N" +  numnodo.toString()+ numnodoCancion.toString() + " -> N" +  futurohijo.toString()+ numnodoCancion.toString() + ";\n"
                    conexiones += "N" +  futurohijo.toString()+ numnodoCancion.toString() + " -> N" +numnodo.toString()+ numnodoCancion.toString() + ";\n"
                }
                let temporalcanciones = temporal.down
                while(temporalcanciones != null){
                    
                    let futuroCancion = numnodoCancion+1
                    nodos+=  "N" + numnodo.toString()+ futuroCancion.toString() + "[label=\"" + temporalcanciones.value.name + "\" ];\n"
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
            .width(1000)
            .height(1000)
            .renderDot(codigodot)
            

            d3.select("#lienzoArtistas2").graphviz()
            .width(500)
            .height(500)
            .renderDot(codigodot)
    }
}




export default Listadelistas;