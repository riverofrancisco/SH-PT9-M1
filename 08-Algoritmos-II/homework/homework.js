'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length < 2){return array;} //caso base
  
  let indice = Math.floor(Math.random()*array.length); //metodo recursivo para otros casos
  let pivote = array[indice];
  //array.splice(indice,1);//quizas está demás---> estaba demas, no los saca del array, solo los agrega en uno nuevo.
  let right = [];
  let left = [];

  for(let i = 0; i < array.length; i++){
    
    if (i === indice) continue;

    if (array[i] < pivote){
      left.push(array[i]);
      //array.splice(i,1);//está demás.
    }
    if (array[i] >= pivote){
      right.push(array[i]);
      //array.splice(i,1);
    }
}
//recursion
return quickSort(left).concat(pivote).concat(quickSort(right));

}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
//recursivo
//caso base = array con solo 1 elemento
// funcion que divida
// funcion que los una de forma correcta
  
  if (array.length === 1) return array; //caso base
  
  let division = split(array);//[[left],[right]]
  let left = division[0];
  let right = division[1];

  return union(mergeSort(left),mergeSort(right));

} 

function split(array){//funcion para dividir
  let medio = Math.floor(array.length/2)
  let left = array.slice(0,medio);//metodo para cortar el array
  let right = array.slice(medio);
 return [left,right];
}

function union(left,right){
  let arreglo = [];
  let leftINDEX = 0;
  let rightINDEX = 0;

  while(leftINDEX < left.length && rightINDEX < right.length){
    if(left[leftINDEX] < right[rightINDEX]){
      arreglo.push(left[leftINDEX]);
      leftINDEX++;
    }
    else {
      arreglo.push(right[rightINDEX]);
      rightINDEX++;
    }
}
return arreglo.concat(left.slice(leftINDEX)).concat(right.slice(rightINDEX))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
