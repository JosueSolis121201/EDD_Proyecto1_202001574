//crear la caja/nodo
class Nodo {
    //constructor con sus datos
    constructor(data){
        this.data = data;
        this.next=null;
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
      if(this.top!=null){
        if(this.buscar(data) != null){ 
          return ;
        }
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

    buscar(data){
      let actual = this.top;
      while( actual != null){
          if(actual.data == data){
              return actual.data
          }
          actual = actual.next;
      }
      return null;
 }
  
    printPila(){
      let temporal = this.top;
      while(temporal != null){
        console.log(temporal.data);
        temporal = temporal.next;
      }
    }


    graficar(){
      //dot
      var codigodot = "digraph G{\nlabel=\" Pila Amigos \";\nnode [shape=box];\n graph [rankdir = down];";
      var temporal = this.top
      var conexiones ="";
      var nodos ="";
      var numnodo= 0;
      while (temporal != null) {

          nodos+=  "N" + numnodo + "[label=\"" + temporal.data + "\" ];\n"
          if(temporal.next != null){
              var auxnum = numnodo+1
              conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
          }
          temporal = temporal.next
          numnodo++;            
      }
      codigodot += "//agregando nodos\n"
      codigodot += nodos+"\n"
      codigodot += "//agregando conexiones o flechas\n"
      codigodot += "{\n"+conexiones+"\n}\n}"
      //console.log(codigodot)
      d3.select("#lienzoPila").graphviz()
          .width(900)
          .height(500)
          .renderDot(codigodot)
  }
  
  }



//exportando clase
export default Pila;


