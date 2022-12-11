


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

    imprimir(){
        let temp = this.head;
        if(this.head!=null){
        }


    }

}

export default ListaCircularDoble;