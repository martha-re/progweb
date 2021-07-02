console.log("Funcion 1 *******************************")
function sumar(num1){
	return function sumarOtraVez(num2){
		     return  num1+num2;
	}
	
}

const sumita = sumar(5);
console.log(sumita(2));
console.log(sumita(-8));
const sumota = sumar(10);
console.log(sumota(0));
console.log(sumota(188));
console.log(sumota(sumita(0)));

console.log("\nFuncion 2 *******************************");
function buscarNumero(num){
	var numero = Math.pow(2,num);
	var numero2 = numero.toString();
	var indice = numero2.indexOf("666");
	var buscar = numero2.includes("666");

	if(buscar == true){
		console.log("Faltan " + indice + " dias para el apocalipsis!");
	}else{
		console.log("No hay problema siga disfrutando la vida");
	}
}

buscarNumero(1566690);

console.log("\nFuncion3 ********************************");
function invertir(cadena){
	var tam = cadena.length;
	var cadenaInvertida = "";
	if(tam%2 == 1){
		while(tam >= 0){
			cadenaInvertida = cadenaInvertida + cadena.charAt(tam);
			tam --;
		}
		return cadenaInvertida;
	}else{
		return cadena;
	}
}

console.log(invertir("manzana"));
console.log(invertir("uno dos tres cuatro sala mesa"));
