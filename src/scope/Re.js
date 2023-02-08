/*
Lo que vimos en esta clase es la manipulacion de "var, const, let" el como se puede
reasignar, asignar, declarar y redeclarar. Para cuando regreses anota los ejemplos
y explica porque pasa, sin ver la clase
*/

var firstName; 				// <--- Se le asigna unvalor Undefined
firstName = 'Rodrigo'; 		// <-- Asignacion
console.log(firstName);

var lastName = 'Pancho';	// <-- Declarando y asignando
lastName = 'Dilan';			// <-- Reasignando
console.log(lastName);

// Lo que sucede es que estamos remplazando el primer valor que le dimos a lastName
// reasignando su valor original.

var secondName = 'Dilan';	// <-- Declarando y asignando
var secondName = 'Rodrigo';	// <-- Redeclarando y reasignando
console.log(secondName);

// <------------------------------------ let ------------------------------------------->

let fruit = 'aplle';
fruit = 'Kiwi';
console.log(fruit);

let fruit = 'Orange';
console.log(fruit);

/*
¡IMPORTANTE!

"let" tiene una propidad muy importate la cual es que te permite reasignar el valor de 
la variable original, pero, NO te va adejar redeclarar la variable. 
*/

// <----------------------------------- const ------------------------------------------>

const animal = 'dog';
animal = 'cat';
const animal = 'Snake';
console.log(animal);

/*
¡IMPORTANTE!

"const" Viene de constante osea que su valor que se asigno al declarar la constante 
siempre se va a manteneter y no se podra reasignar o redeclarar, pero const no es 
infalibre ya que si se puede cambiar el valor dentro de si, pero como un array

Ejemplo:
*/

const vehicles = [];
vehicles.push('🚗');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

/*
Lo que sucede con "const" es que tiene la referencia en memoria, esto quiere decir que
que lo que esta dentro del array se puede modificar con metodos para arrays, esto nos
permite trabajar y tener en cuenta los conceptos de mutabilidad de los arrays.
*/