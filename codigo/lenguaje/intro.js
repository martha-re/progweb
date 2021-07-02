/* Interpolacion de cadenas:
Es el proceso de evaluar literales que contienen uno o mas marcadores de posicion
(expresiones, variables, etc.), de la forma siguiente: texto ${expresion} texto */

let edad = 7;
// concatenacion
console.log('La edad de Sandra es '+ edad + 'años');

// interpolacion
console.log(`La edad de Sandra es ${edad} años`);
console.log(`La edad de Pedro es ${10*3} años`);

/* Condicionales
 Permiten tomar decisiones acerca de que codigo ejecutar durante la ejecucion.
*/
//if simple
 const correoEnviado = true;
 if (correoEnviado){
 	console.log('El mensaje fue enviado');
 }

//if..else
 const actividadCompleta = false;
 if (actividadCompleta){
 	console.log('Se termino actividad');
 } else {
 	console.log('La actividad no ha sido terminada');
 }

 //if..else if
 const size = 10;
 if (size > 100) { 
 	console.log('Grande'); } 
 else if (size > 20) { 
 	console.log('Mediano'); } 
 else if (size > 4) { 
 	console.log('Pequeño'); }
 else { console.log('Muy Pequeño'); }

// Sentencia switch
const alimento = 'ensalada';
switch (alimento) { 
	case 'salmon':
       console.log('El sabor del mar ');
       break; 
    case 'pizza':
       console.log('El sabor de Italia ');
       break;
    default:
       console.log('Disfruta tu comida'); 
}

// Operador ternario
let precio = 10.5; 
let dia = "Lunes";
dia === "Lunes" ? precio -= 1.5 : precio += 1.5;
console.log(precio);


 //operador logico ! - Invierte el valor de un valor booleano

 let tarde = true;
 let valorOpuesto = !tarde;
 console.log(valorOpuesto);

 /* Verdad y falsedad 
  Que es falso en Javascript: false, 0, cadenas vacias, 
  null, undefined y NaN (not a number)
  Que es verdadero: todo lo que no es falso
  */
let miVariable = 'existo';

if (miVariable) {
   console.log(miVariable);
} else {
   console.log('La variable no existe');
}

let totalManzanas = 0;

if (totalManzanas){
   console.log('Si hay manzanas');
} else {
   console.log('No hay manzanas');
}

if (parseInt('e',16)){
  console.log('Convirtiendo e a decimal es '+parseInt('a',16));
} else {
  console.log('No es un numero ');
}

if (parseInt('h',16)){
  console.log('Convirtiendo h a decimal es '+parseInt('h',16));
} else {
  console.log('No es un numero ');
}

let miVar;
if (miVar){
	console.log('Variable definida');
} else {
	console.log('Variable '+miVar);
}

miVar = null;
if (miVar){
	console.log('Variable no es nula');
} else {
	console.log('Variable '+miVar);
}

/*Operadores relacionales
 ===, !==, >, <, >=, <=
*/
 if (1 == '1'){
  console.log('es ==');
} else {
  console.log('No es ===');
}

if (1 === '1'){
  console.log('es ==');
} else {
  console.log('No es ===');
}

// Operadores logicos && y ||
true && true;  //true
1>2 && 2>1;    //false 
true && false; // false 
4===4 && 3>1;  //true

true || false;  //true
10>5 || 10>20;  //true
false || false; //false
10>100||10>20;  //false

/* Funciones 
Declaracion de funciones
-- palabra reservada function
-- nombre de la funcion
-- lista opcional de parametros
-- cuerpo de la funcion {}
*/
function sumar(num1, num2){
	return num1 + num2;
}

/* funciones anonimas: No tienen nombre, pueden definirse usando la palabra
 reservada function, o como funciones 'flecha' */

 const sumar =  function (num1, num2) {
 	return num1 + num2;
 }

/* Funciones como expresiones: Se crean funciones dentro de expresiones, pueden
 ser anonimas y/o  asignadas a una variable */

 const ladrar = function () {
 	console.log('Guau');
 }

/* Funciones flecha: Su sintaxis no requiere la palabra reservada function e
 utiliza una flecha => para separar los parametros del cuerpo */

// con 2 parametros
 const suma = (param1, param2) => { 
 	return param1 + param2;
};
console.log(suma(2,5)); // imprime: 7

// sin parametros
const imprimeHola = () => { console.log('hola');
};
imprimeHola(); // imprime: hola

 /* Variaciones:
  Funciones flecha con un solo parametro no requiere () alrededor de la
 lista de parametros */

const verificaPeso = peso => { 
	console.log(`El peso de las papas es : ${peso}
kilogramos.`);
};
verificaPeso(25);  // Imprime: El peso de las papas es : 25 kilogramos.


 /* Funciones flecha concisas: tienen una sola expresion, regresan resultado 
 sin return */

 const multiplicar = (a, b) => a * b; 
 console.log(multiplicar(2, 30)); // imprime: 60

/* Arreglos - En Java son una forma de crear listas. Pueden almacenar cualquier 
tipo de dato (strings, numeros, booleanos). Al igual que las listas los arreglos 
son ordenados, ya que tienen una posicion numerica. */

// arreglo de conceptos de Javascript
let conceptos = ['creacion de arreglos', 'estructuras', 'manipulacion de arreglos'];
console.log(conceptos);

// Los arreglos pueden almacenar elementos del mismo tipo o diferentes
let elementos = ['cadenas',5, true, 12.5];
console.log(elementos);
console.log(`Elemento[1] = ${elementos[1]}`);
console.log(`Elemento[5] = ${elementos[5]}`); //undefined
console.log(elementos.length); // 4

// Metodos en arreglos
// push - permite agregar elementos al final del arreglo
const tareas = ['lavar trastes', 'lavar ropa', 'sacar la basura'];
tareas.push('barrer');
tareas.push('limpiar');
tareas.push('cocinar','sacudir');
console.log(tareas);

// pop - permite remover el ultimo elemento del arreglo y regresa su
// valor
console.log(tareas.pop()+ ' fue removido del arreglo');
console.log(tareas);

// shift - permite remover el primer elemento del arreglo
tareas.shift();
console.log(tareas);
// unshift = permite agreagr un elemento al inicio del arreglo
tareas.unshift('planchar');
console.log(tareas);
// slice - permite regresar una copia de una parte del arreglo
// slice(inicio), slice(inicio,fin) -fin no incluido
console.log(tareas.slice(3));
console.log(tareas.slice(3,8));
// indexOf - permite conocer el primer indice de un elemento, o -1 si
// no se encuentra
console.log(tareas.indexOf('limpiar'));
console.log(tareas.indexOf('limpiar',4));

//los arreglos se pasan a las funciones como referencias
function agregaElemento(arr,tarea){
  arr.push(tarea);
}
agregaElemento(tareas,'hornear');
console.log(tareas);

// Arreglos anidados - arreglos dentro de arreglos
const anidado = [[1],[2,3]];
console.log(anidado[1]); //[2,3]
console.log(anidado[1][0]); //2

/* Funciones como datos
 Las funciones en Javascript se comportan como cualquier otro tipo de dato,
 se pueden asignar a variables
*/
const indicaQueEstoyHaciendoCosasImportantes100Veces = () => {
  for (var i = 1; i <= 100; i++) {
    console.log('Estoy haciendo trabajo muy importante');
  }
}

const ocupada = indicaQueEstoyHaciendoCosasImportantes100Veces;

ocupada();

// son objetos de primera clase, por lo tanto tienen propiedades y metodos
console.log(ocupada.name); //nombre
console.log(ocupada.length); //numero de argumentos esperados



