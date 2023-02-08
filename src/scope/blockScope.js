/* 
¿Qué es block scope?
Como su nombre lo indica son las variables que se declaran en un bloque

¿Qué es un bloque en código?
Todo lo que este dentro de: {
	fuction
	if
	for
	etc..
	Todo lo que este dentro de las llaves es un bloque
}


Ejercicio:
*/

function fuirts() {
	if(true) {
		var fruit1 = 'Apple';		// <--- Fuction scope
		let fruit2 = 'Kiwi';		// <--- Block scope
		const fruit3 = 'Banana';	// <--- Block scope
	}
	// ¿Qué pasa si quiero acceder a las variables que estan dentro del bloque?
	console.log(fruit1);
	console.log(fruit2);
	console.log(fruit3);
};

fuirts();