


class Nodo {
    constructor(llave,data){
        this.llave=llave;
        this.data= data;
        this.sig = null;
        this.ant= null;
    }
}

class ListaCircularDoble{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    agregar(llave,data){
        let temp = new Nodo(llave,data);
        //si es el primero
        if(this.head==null){
            temp.sig = temp;
            temp.ant = temp; 

            this.head=temp;
            this.tail=temp;
            return;
        }
        // si yas existe uno
        this.head.sig = temp;         

        temp.sig=this.tail;
        temp.ant=this.head;
        
        this.tail.ant = temp;
        
        this.head = temp;
    }
    graficar(){
        //dot
        let codigodot = "digraph G{\nlabel=\" PLAY LIST \";\nnode [shape=box];\n graph [rankdir = LR];";
        let temporal = this.head
        let conexiones ="";
        let nodos ="";
        let numnodo= 0;
        do{
            console.log(temporal.data)
            nodos+=  "N" + numnodo + "[label=\"" + temporal.data + "\" ];\n"
            let auxnum = numnodo+1
            if(temporal==this.head.sig.sig.sig.sig){
                auxnum=0;
            }
            conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
            console.log(conexiones)
            temporal = temporal.sig
            numnodo++;            

        }while (temporal!=this.head) 

        

        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n}\n}"
        //console.log(codigodot)
        d3.select("#lienzoPPlaylist").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot)
    }

}

export default ListaCircularDoble;