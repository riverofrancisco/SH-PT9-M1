"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.longitud = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null
}

LinkedList.prototype.add = function(value){
  var nodo = new Node(value)
  let current = this.head
  
  if (!current){
    this.head = nodo;
    this.longitud++;
    return nodo};
  
  while (current.next){
    current = current.next;}
  current.next = nodo;
  this.longitud++;
  return nodo;

}

LinkedList.prototype.remove = function(){
  let current = this.head
  
  if (!current){//está vacía
    return null;}

  if (this.longitud === 1){//hay un solo nodo = next está vacío.
    let unico = current;//guardo el nodo existente
    this.head = null;
    return unico.value;}

  while (current.next){//cualquier otro caso
    current = current.next;}//recorre hasta el ultimo nodo existente.
    let ultimo = current;//guardo el ultimo nodo
    current = null;
    this.longitud--;
    return ultimo.value;
}

LinkedList.prototype.search = function(buscado){
  if (!this.head) return null;
  let current = this.head;
  while (current){
      if(current.value === buscado) return current.value;//busqueda si no es funcion
      else if (typeof buscado === 'function'){//busqueda si es funcion
          if(buscado(current.value)) return current.value;
      }//si no es igual en ningun caso, sube uno y vuelve a buscar.
      current = current.next;
  }
  return null;//devuelve null si no se encuentra
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function(key){//'Fran'
  let sum = 0;
  for(let i = 0 ; i < key.length; i++){
      sum += key.charCodeAt(i)//nos da el valor unico de la letra del string
  }
  return sum % this.numBuckets;//la funcion hasheadora solo nos regresa la posicion donde voy a guardar el valor
  }
    
HashTable.prototype.set = function(key,value){
      if(typeof key !== 'string') throw new TypeError('El key debe ser string');//devuelve error si la key insertada no es string. 
      let posArr = this.hash(key);//hasta aca todo bonito pero se choca si hay 2 strings 
  //si la posición está vacía, crea un objeto.
      if (this.buckets[posArr] === undefined) {
          this.buckets[posArr] = {};
      }
      this.buckets[posArr][key] = value;//crea una propiedad "key" en el objeto con el valor dado para saltear colisiones.
  }
    
HashTable.prototype.get = function(key){
    let posArr = this.hash(key);
    return this.buckets[posArr][key];
}

HashTable.prototype.hasKey = function(key){
    let posArr = this.hash(key);
    return this.buckets[posArr].hasOwnProperty(key);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
