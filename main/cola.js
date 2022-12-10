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
        }
        // si ya hay, se agrega
        let nuevo = new Nodo(data,null)
        nuevo.sig = this.head;
        this.head = nuevo;
    }

    remove(){
        let actual = this.head;
        // comprobar si vacia
        if(this.head==null){
            console.log("nada que remover") 
        }
        // remover el primero en cola

        while(actual!=null){
            if(actual.sig.sig==null && actual.sig!=null){
                actual.sig=null
                break;
            }
            actual=actual.sig
        }
    }

    imprimir(){
        let actual = this.head;
        while(actual!=null){
            console.log(actual.data)
            actual=actual.sig
        }
    }
    
}

export default Cola;