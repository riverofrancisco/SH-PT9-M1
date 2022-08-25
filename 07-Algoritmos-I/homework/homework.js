'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arreglo = [1];
  for (let i = 2 ; i <= num ; i++){
    if(num % i === 0){
      arreglo.push(i);
      num /= i; //num = num/i; renombra el numero.
      i -= 1;
    }
  }
  return arreglo;
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
  for (let i = 1; i < array.length; i++){
    let x = i-1;// guardo el valor
    let temp = array[i];
    //ahora pongo un while que me permite indicar condicion de corte.
    while(x >= 0 && temp < array[x]){
      array[x+1] = array[x];//hago el cambio de lugar
      x--;
    }
    array[x+1] = temp;}
    return array;
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
