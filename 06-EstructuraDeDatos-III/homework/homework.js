"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(data) {
      this.value = data;
      this.left = null;
	    this.right = null;
}

BinarySearchTree.prototype.size = function(){
  var size = 1;
  if(this.left){
    size+= 1;
    this.left.size();
  }
  if(this.right){
    size+= 1;
    this.right.size();
  }
  return size;
}

BinarySearchTree.prototype.insert = function(valor){  

    if(valor < this.value){
      if(this.left === null){
        this.left = new BinarySearchTree(valor);
      }else{
        this.left.insert(valor);
      }	
    }
    if( valor > this.value){
      if(this.right === null){
        this.right = new BinarySearchTree(valor);
      }else{
        this.right.insert(valor);
      }	
    }

};

BinarySearchTree.prototype.contains = function(buscado){
if (buscado === this.value) return true;//ok
//todos los casos

if(buscado > this.value){
  if(this.right == null)return false;
  else {return this.right.contains(buscado);}
}
if (buscado < this.value){
  if(this.left == null) return false;
  else {return this.left.contains(buscado);}
}

/* if (buscado < this.value && this.left !== null){
  if (buscado === this.left.value) {return true;}
  else {this.left.contains(buscado);}
  }

if (buscado > this.value && this.right !== null){
  if (buscado === this.right.value) {return true;}
  else {this.right.contains(buscado);}
  }
return false;
 */
//codigo jona
};

BinarySearchTree.prototype.depthFirstForEach = function(orden){
  if (orden === 'pre-order') {
    while (this.left){
    }
  }
  if (orden === 'post-order') {}
  if (orden === 'in-order' || orden === null) {}
};

/* In-order Traversal (izquierda-raíz-derecha)
Pre-order transversal (raíz-izquierda-derecha)
Recorrido posterior al pedido (raíz izquierda-derecha) */


BinarySearchTree.prototype.breadthFirstForEach = function(){};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
