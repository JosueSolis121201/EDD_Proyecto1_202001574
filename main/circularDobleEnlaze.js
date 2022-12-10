


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
            this.head=temp;
            this.tail=temp;
        }
        // si yas existe uno
        temp.sig=this.head;
        this.head =temp;
        this.tail.sig = temp;
    }

    imprimir(){
        let temp = this.head;
        if(this.head!=null){
            console.log(temp)

        }


    }

}

export default ListaCircularDoble;