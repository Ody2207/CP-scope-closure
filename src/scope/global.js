// Variables 

var a; 			// <----- Declaración
var b = 'b'; 	// <----- Declaración -> Asignación
b = 'bb'; 		// <----- Reasignación
var a = 'aa'; 	// <----- Redeclaracón

// <--------------------- Global Scope ----------------->
// Notes ---->

/*
El global scope son aquellas variables que se declaran afuera de cualquier otro elemento
ya sea funciones o cualuqier otro elemento en el cual dentro de su estructura se puedan 
declarar variables. Entonces estras variables que normalmente se declaran al principio 
de nuestro código, son variables globales.
*/

var fruit = 'apple';
console.log(fruit);

function bestFruit() {
	console.log(fruit);
};

bestFruit();

// Cuidado con esta forma de declarar funciones globales

/* 
La variable se declara 'Global' ya que no esta inicializada con "var, const etc.."
*/

function coutries() {
	country = 'Mexico'; 		//Global
	console.log(country);
}

coutries();
console.log(country);
