//fabrica de funciones
function creaMultiplicador(multiplicador){
	let miFuncion = function (x){
        return multiplicador * x;
	};
	return miFuncion;
}

let multiplicadorX3 = creaMultiplicador(3);
console.log(multiplicadorX3(30));

let duplicar = creaMultiplicador(2);
console.log(duplicar(4));

//pasando funciones como argumentos
function realizaOperacion(x,operacion){
	return operacion(x);
}

let resultado = realizaOperacion(5, multiplicadorX3);
console.log(resultado);

resultado = realizaOperacion(100,duplicar);
console.log(resultado);