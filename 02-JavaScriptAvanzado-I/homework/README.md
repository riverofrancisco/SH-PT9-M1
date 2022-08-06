
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
console.log(bar);//IMPRIME 1
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
console.log(instructor);//IMPRIME 'Franco'.?
```
EL CÓDIGO ANTERIOR DEVUELVE 
Franco
```javascript
var instructor = "Tony";
console.log(instructor);//IMPRIME 'Tony'
(function() {//¿¿Error de sintaxis?? Abre parentesis en contexto global. Y define una funcion sin invocar/ejecutar.
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //IMPRIME 'Franco'. Porqué lo ejecuta?
   }
})();
console.log(instructor);//IMPRIME 'Tony'
```
EL CÓDIGO ANTERIOR DEVUELVE 
Tony
Franco?
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
4 + 5 + "px" // '45px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity
{}[0] // undefined?
parseInt("09") // 9
5 && 2 // 2?
2 && 5 // 5?
5 || 0 // 5?
0 || 5 // 0?
[3]+[3]-[10] // -4 
3>2>1 // true
[] == ![] // false?
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {//Abre contexto 1.
   console.log(a);//IMPRIME 1
   console.log(foo());//IMPRIME 2

   var a = 1;
   function foo() {//Abre contexto 2.
      return 2;//IMPRIME 2
   }//cierra contexto 2.
}//cierra contexto 1.

test();//ejecuta contexto 1 --> Busca variable a --> IMPRIME a --> Busca variable foo() -->
//--> ejecuta contexto 2 --> IMPRIME 2
```
Al ejecutar test() la consola devuelve:
1
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

getFood(false);// ejecuta contexto 1 --> Abre contexto 2 --> como el argumento es (false) no ejecuta el comando dentro del if{} --> cierra contexto 2 --> devuelve nuevamente el valor de variable snack en contexto global --> cierra contexto 1.
```
Al ejecutar getFood(false) la consola devuelve:
Meow Mix

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

console.log(test());//'Juan Perez'
```
Al ejecutar getFood(false) la consola devuelve:
'Aurelio De Rosa'
'Juan Perez'

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);//IMPRIME 1
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
