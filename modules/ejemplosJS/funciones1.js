//tipos de dato de primera clase
//se pueden pasar como argumentos o regresar
//son objetos
function multiplicar(x,y) {
	return x*y;
}

console.log(multiplicar(4,5));

//tiene propiedades
multiplicar.version = "v.1.0.0";
console.log(multiplicar.toString());
console.log(multiplicar.version);


