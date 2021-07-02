//fabrica de funciones
function creaMultiplicador (mutiplicador){
	let miFuncion = function (x){
		return mutiplicador * x;
	}
	return miFuncion;
}

let mutiplicadorX3 = creaMultiplicador(3);
console.log(mutiplicadorX3(30));


let duplicar = creaMultiplicador(2);
console.log(duplicar(100));

// pasando funciones como argumentos
function realizaOperacion(x,operacion){
	return operacion(x);
}

let resultado = realizaOperacion(5,mutiplicadorX3);
console.log(resultado);

resultado = realizaOperacion(200,duplicar);
console.log(resultado);