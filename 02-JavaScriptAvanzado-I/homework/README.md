
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {// abre nuevo contexto 1.
  var x = 10;
  console.log(x);//IMPRIME 10
  console.log(a);//IMPRIME 8
  var f = function(a, b, c) {// abre nuevo contexto 2.
    b = a;
    console.log(b);//IMPRIME 8 
    b = c;
    var x = 5;
  }// cierra contexto 1.
  f(a,b,c);
  console.log(b);//IMPRIME 9
}// cierra contexto 2.
c(8,9,10);// ejecuta contexto 1 --> IMPRIME 10 --> IMPRIME 8 -->
// --> ejecuta contexto 2 --> IMPRIME 8 --> cierra contexto 2 --> IMPRIME 9 --> cierra contexto 1
console.log(b);//IMPRIME 10
console.log(x);//IMPRIME 1
```
EL CÓDIGO ANTERIOR DEVUELVE 
10
8
8
9
10
1

```javascript
console.log(bar);//undefined.
console.log(baz);//baz is not defined.
foo();//IMPRIME 'Hola!'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;//Asigna a la variable baz del contexto global el valor 2. Pero la variable nunca ha sido creada.
```
EL CÓDIGO ANTERIOR DEVUELVE ERROR
```javascript
var instructor = "Tony";
if(true) {//if(true) --> siempre va a ser true --> siempre realiza la acción
    var instructor = "Franco";//la define y la invoca.
}
console.log(instructor);//IMPRIME 'Franco'
```
EL CÓDIGO ANTERIOR DEVUELVE 
Franco
```javascript
var instructor = "Tony";
console.log(instructor);//IMPRIME 'Tony'
(function() {//Los parentesis sirven para definir una función e invocarla al mismo tiempo.
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //IMPRIME 'Franco'. Pero la variable está en otro contexto de ejecución (dentro de la función). No reemplaza a instructor en el contexto global. 
   }
})();
console.log(instructor);//IMPRIME 'Tony'
```
EL CÓDIGO ANTERIOR DEVUELVE 
Tony
Franco
Tony
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//IMPRIME 'The Flash'
    console.log(pm);//IMPRIME 'Reverse Flash'
}
console.log(instructor);//IMPRIME 'The Flash'
console.log(pm);//IMPRIME 'Franco'
```
EL CÓDIGO ANTERIOR DEVUELVE 
The Flash
Reverse Flash
The Flash
Franco

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity
{}[0] // undefined?
parseInt("09") // 9
5 && 2 // 2 imprime el segundo valor.
2 && 5 // 5
5 || 0 // 5 porque 0 es false. Imprime el verdadero o el primer numero.
0 || 5 // 5 
[3]+[3]-[10] // -4? No me queda claro que hace en este caso.
3>2>1 // true
[] == ![] // True --> parecería false pero lo convierte en numero = 0 y luego los compara y dá 0 == 0. Esto ocurre porque no hay ===, sino que == entonces puede cambiar el tipo de elemento.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {//Abre contexto 1.
   console.log(a);// undefined.
   console.log(foo());//IMPRIME 2

   var a = 1;
   function foo() {//Abre contexto 2.
      return 2;//IMPRIME 2
   }//cierra contexto 2.
}//cierra contexto 1.

test();//ejecuta contexto 1 --> Busca variable a --> IMPRIME undefined --> Busca variable foo() -->
//--> ejecuta contexto 2 --> IMPRIME 2
```
Al ejecutar test() la consola devuelve:
undefined
2

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {//Abre contexto 1.
    if (food) {//Abre contexto 2 y ejecuta su contenido.
        var snack = 'Friskies';
        return snack;//IMPRIME 'Friskies'
    }//cierra contexto 2.
    return snack;//IMPRIME 'Friskies'
}//cierra contexto 1.

getFood(false);// ejecuta contexto 1 --> Abre contexto 2 --> como el argumento es (false) no ejecuta el comando dentro del if{} --> cierra contexto 2 --> devuelve snack definida en contexto 1, pero esta variable, al if ser negativo, es unndefined. --> devuelve undefined --> cierra contexto 1.
```
Al ejecutar getFood(false) la consola devuelve:
undefined

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {//obj
   fullname: 'Natalia Nerea',//obj.fullname 
   prop: {//obj.prop
      fullname: 'Aurelio De Rosa',//obj.prop.fullname
      getFullname: function() {//obj.prop.getFullname
         return this.fullname;//this hace referencia a obj.prop --> this.fullname = obj.prop.fullname = 'Aurelio De Rosa'
      }
   }
};

console.log(obj.prop.getFullname());//'Aurelio De Rosa'

var test = obj.prop.getFullname;// define una nueva variable/función. Acá el this hace referencia al objeto global. --> this.fullname = global.fullname = 'Juan Perez'

console.log(test());//'Juan Perez' -- tengo la duda de porque es correcto poner el (test()) en lugar de (test). Pero funciona.
```
Al ejecutar getFood(false) la consola devuelve:
'Aurelio De Rosa'
'Juan Perez'

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);//IMPRIME 1
   setTimeout(function() { console.log(2); }, 1000);//guarda 2 para ejecutarlo despues de 1 seg.
   setTimeout(function() { console.log(3); }, 0);// guarda 3 para ejecutarlo despues de 0 seg.
   console.log(4);//IMPRIME 4
}

printing();// Imprime 1 --> Imprime 4 --> Imprime 3 --> despues de 1 segundo Imprime 2.
```
