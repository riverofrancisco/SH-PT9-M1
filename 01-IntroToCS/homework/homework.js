'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 var nenletras = num.toString().split('').reverse().join('');
  var suma = 0;
    for (let i = 0; i < nenletras.length ; i++) {
        suma += Math.pow(2,i) * nenletras[i];
  } return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  //return num.toString(2);
  var arrycero = [];
    while (num > 0){
        arrycero.unshift(num % 2);
        num = Math.floor(num / 2);        
      };
  return arrycero.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}