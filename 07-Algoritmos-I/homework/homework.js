'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
let factores = [];
while(num % factor === 0){

  factores.push(factor)
  num = num/2;}

  return arr.sort();

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  function iteracion(){
    for (let i = 0; i < array.length; i++){
      if (array[i] > array[i + 1]){
          let menor = array[i + 1];
          let mayor = array[i];
          array[i + 1] = mayor;
          array[i] = menor;
          iteracion(array);}
      }
      }
        iteracion()
        return array
      }

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:


}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var ordenado = [];
  function pusheo(){
      let min = array[0]
      while(array.length > 0){
          for (let i = 0; i < array.length ; i++){
                  if(min > array[i]){
                      min = array[i];
                      var pos = i}}
          ordenado.push(min);
          array.splice(pos,1);
          pusheo(array);
  }}
  pusheo();
  return ordenado;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
