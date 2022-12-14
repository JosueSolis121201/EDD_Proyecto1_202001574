class Nodo{
    constructor(data,sig){
        this.data=data;
        this.sig=null

    }

    
}

class Cola{
    constructor(){
        this.head=null 
    }

    encolar(data){
        //si primero
        if(this.head == null){
            this.head = new Nodo(data,null); 
            return;
        }else{
            // si ya hay, se agrega
            if(this.buscar(data) != null){ 
                return ;
            }
            let nuevo = new Nodo(data,null)
            nuevo.sig = this.head;
            this.head = nuevo;
        }
        
    }

    remove(){
        let actual = this.head;
        console.log(this.head)
        // comprobar si vacia
        if(this.head==null){return;}
        //borrar el head
        if(this.head.sig==null){
            this.head=null;
        }
        // remover el primero en cola
        while(actual!=null){
            if((actual.sig!=null) && actual.sig.sig==null ){
                actual.sig=null
                break;
        }
        actual=actual.sig
    }
    }

    buscar(data){
        let actual = this.head;
        while( actual != null){
            if(actual.data == data){
                return actual.data
            }
            actual = actual.sig;
        }
        return null;
   }

    imprimir(){
        let actual = this.head;
        while(actual!=null){
            console.log(actual)
            actual=actual.sig
        }
    } 

    graficar(){
        //dot
        let codigodot = "digraph G{\nlabel=\" Cola Amigos bloqueados \";\nnode [shape=box];\n graph [rankdir = left];";
        let temporal = this.head
        let conexiones ="";
        let nodos ="";
        let numnodo= 0;
        while (temporal != null) {
            nodos+=  "N" + numnodo + "[label=\"" + temporal.data + "\" ];\n"
            if(temporal.sig != null){
                let auxnum = numnodo+1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
            }
            temporal = temporal.sig
            numnodo++;            
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n}\n}"
        //console.log(codigodot)
        d3.select("#lienzoColaDiv").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot)
    }
    
}

export default Cola;