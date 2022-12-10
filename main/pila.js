//crear la caja/nodo
class Nodo {
    //constructor con sus datos
    constructor(data){
        this.data = data;
        this.sig=null;
    };
};


class Pila{
    constructor(){
        this.size = 0;
        this.top = null;
    }
  
    push(data){
      let newNode = new Nodo(data);
      this.size++;
  
      if(this.top){
        newNode.next = this.top
        this.top = newNode
      }else{
        this.top = newNode
      }
    }
  
    pop(){
      if(this.top != null){
        this.size--;
        let temp = this.top;
        this.top = temp.next;
        return temp.value;
      }else{
        console.log("Esta vacia");
        return null;
      }
  
    }
  
    printPila(){
      let temporal = this.top;
      while(temporal != null){
        console.log(temporal.data);
        temporal = temporal.next;
      }
    }
  
  }
  
  


//exportando clase
export default Pila;


