const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
    
    /* let numeros = [];//array nuevo que solo va a tener numeros
    
    for(let j = 0; j < array.length; j++){
        if(typeof array[j] === 'number'){//si es numero, pushea | funciona como caso base. Al final será num.
            numeros.push(array[j]);
        }
        if(Array.isArray(array[j])){
            numeros.push(countArray(array[j]));//si es array, hace recursión y pushea luego.
        }
    }

    return numeros.reduce(function(prev,actual){return prev + actual}) */
let total = 0;

array.forEach(element => {
    if(Array.isArray(element)){
       //Si es array
        total += countArray(element);
    }
    else {//si no es array
        total = total + element;} 
    
});

return total;

}

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:
    /* var propiedades = Object.getOwnPropertyNames(obj)
    var cantidad = propiedades.length //cantidad de propiedades.
    let arreglo = [];
    arreglo.push(cantidad);//pusheo de propiedades del objeto. --> si NO hay objetos, termina acá

    //ahora chequeo si hay anidados
    for(let i = 0; i < propiedades.length; i++){
        if(typeof obj[propiedades[i]] === 'object'){
            //si hay anidados, concatena en 'arreglo' la funcion recursivamente aplicada dentro del objeto anidado. 
            arreglo = arreglo.concat(countProps(obj[propiedades[i]]));
        }
    } // me devuelve un arreglo con todos los anidados.
    return arreglo.reduce((prev,actual) =>  prev + actual) ;//devuelve la suma de los numeros del arreglo concatenado. */
let total = Object.keys(obj).length; //Ya contamos el primer nivel.
//recorrer objetos
for(let prop in obj){
    //reviso que c/prop sea un objeto y no un array.
    if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop])){
        total += countProps(obj[prop]);
    }
}
return total;
}


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kiricocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    var nodoActual = this.head;
    let contadornum = 0;

    if(nodoActual === null){//caso base
      return null}
    
    while (nodoActual !== null) {
        if(Number.isNaN(Number(nodoActual.value))){
        contadornum++;
        nodoActual.value = 'Kiricocho';}
      nodoActual = nodoActual.next;
    }
  
    return contadornum;
}


// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    var nuevaQ = new Queue();
    //nose porque pero me pide que el 1° sea si o si el 1° elem. de la 1° Queue
/*     nuevaQ.enqueue(queueOne.array[0]);
    queueOne.dequeue();

    //funcion merge
    let OneINDEX = 0;
    let TwoINDEX = 0;
    while(OneINDEX < queueOne.size() && TwoINDEX < queueTwo.size()){
        if(queueOne.array[OneINDEX] < queueTwo.array[TwoINDEX]){
          nuevaQ.enqueue(queueOne.array[OneINDEX]);
          OneINDEX++;
        }
        else {
            nuevaQ.enqueue(queueTwo.array[TwoINDEX]);
            TwoINDEX++;
        }
    }
    let arr2 = queueTwo.array.slice(TwoINDEX);
    let arr1 = queueOne.array.slice(OneINDEX);
    var arryunido = arr1.concat(arr2)
    for(let p = 0; p < arryunido.length; p++){
        nuevaQ.enqueue(arryunido[p])
        }     */
    //mientras alguna tenga elementos,
     while (queueOne.size() || queueTwo.size()) {
        //Si la primera tiene elementos, saca el primero y lo pone en la nueva.
        if (queueOne.size()) {nuevaQ.enqueue(queueOne.dequeue());}
        if (queueTwo.size()) {nuevaQ.enqueue(queueTwo.dequeue());}
    }

    return nuevaQ;
}


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
    return function(num){
        return num * multiplier
    }
}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
    
    //caso base
    //inicio un contador
    //implemento metodo de busca
    //si no es null, suma el contador recursivamente.
let total = this.value;

if (this.right) {total += this.right.sum();}
if (this.left) {total += this.left.sum();}

return total;
}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}