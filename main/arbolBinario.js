class Nodo{
    constructor(data,llave){
        this.llave=llave;
        this.valor=data;
        this.izquierda = null;
        this.derecha = null;
    }
}

class ABB{
    constructor(){
        //padre
        this.raiz = null;



        this.stringFinal ="";
        this.nodosCajas ="";
        this.conexiones ="";
        this.id=0;
    }
    //metodo insertar
    insertar(data){
        this.raiz = this.add(data, this.raiz);
    }

    agregar(data,llave){
        if(this.raiz == null){
            this.raiz = new Nodo(data,llave);
        }
        else{
            this.agregar(data,this.raiz,llave)
        }
    }

    compararString(izquierda,derecha){
        if(izquierda.localeCompare(derecha) != 1){
            return true
        }
        return false
    }

    agregar(data,nodo,llave){
        if(nodo == null){
            return new Nodo(data,llave);
        }
        if(this.compararString(nodo.llave,llave)){
           nodo.izquierda = this.agregar(data,nodo.izquierda,llave)
        }else{
           nodo.derecha = this.agregar(data,nodo.derecha,llave)
        }
        return nodo
    }

    //metodo insertar recursivo
    add(data, nodo){
        if(nodo == null){
            return new Nodo(data);
        }else{
            
            if(data > nodo.valor){
                
                nodo.derecha = this.add(data, nodo.derecha);
            }else{
                
                nodo.izquierda = this.add(data, nodo.izquierda);
            }
        }
        return nodo;
    }
    
    //preorden
    preorden(){
        
        
        this.pre_orden(this.raiz);
    }

    pre_orden(nodo){
        if(nodo!=null){ 
            //a = nodo.CAJAPROPIA//creo mi propia caja
            if(nodo.izquierda != null &&nodo.derecha != null){
                
                let anterior = this.id;
                this.id++;
                this.nodosCajas+=  "N" + this.id + "[label=\"" + nodo.derecha.valor + "\" ];\n"
                this.conexiones += "N" + anterior + " -> N" + this.id  + ";\n"
                this.id++;
                this.nodosCajas+=  "N" + this.id + "[label=\"" + nodo.izquierda.valor + "\" ];\n"
                this.conexiones += "N" + anterior + " -> N" + this.id  + ";\n"
                
            }else{
                if(nodo.izquierda != null){
                    let anterior = this.id;
                    this.id++;
                    this.nodosCajas+=  "N" + this.id + "[label=\"" + nodo.izquierda.valor + "\" ];\n"
                    //nodo.ID -> nodo.izquierda.ID
                    this.conexiones += "N" + anterior + " -> N" + this.id  + ";\n"
                }
                if(nodo.derecha != null){
                    let anterior = this.id;
                    this.id++;
                    this.nodosCajas+=  "N" + this.id + "[label=\"" + nodo.derecha.valor + "\" ];\n"
                    this.conexiones += "N" + anterior + " -> N" + this.id  + ";\n"
                }
        }
            
            console.log("Valor:",nodo.valor);
            this.pre_orden(nodo.izquierda);
            this.pre_orden(nodo.derecha);
        }
    }
    //inorden
    inorden(){
        this.in_orden(this.raiz);
    }
    
    in_orden(nodo){
        if(nodo!=null){
            this.in_orden(nodo.izquierda);
            console.log("Valor:",nodo.valor);
            this.in_orden(nodo.derecha);
        }
    }

    //postorden
    posorden(){
        this.pos_orden(this.raiz);
    }
    
    pos_orden(nodo){
        if(nodo!=null){
            this.pos_orden(nodo.izquierda);
            this.pos_orden(nodo.derecha);
            console.log("Valor:",nodo.valor);           
        }
    }


    graficar(){
        //dot
        let codigodot = "digraph G{\nlabel=\" Arbol Binario \";\nnode [shape=box];\n graph [rankdir = down];\n ";
        this.preorden()
        console.log(this.nodosCajas)
        console.log(this.conexiones)
        this.stringFinal += this.nodosCajas +this.conexiones 
        codigodot+= "{\n"+this.stringFinal+"\n}\n}"
        //console.log(codigodot)
        /*codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n}\n}"
        console.log(codigodot)*/
        d3.select("#lienzoPodcast").graphviz()
            .width(2000)
            .height(2000)
            .renderDot(codigodot) 
    }
}
 



export default ABB;