//problema 1
console.log('Problema 1:');
function creaSuma(numBase){
	let funcion = function(nuevArgu){
		return numBase + nuevArgu;
	}
	return funcion;
}

const masCinco = creaSuma(5);
console.log(masCinco(2));
console.log(masCinco(-8));

const masDiez = creaSuma(10);
console.log(masDiez(0));
console.log(masDiez(188));
console.log(masCinco(masDiez(0)));
 
//problema 2
console.log('Problema 2:');
function Apoca(n){
   var resultado = 2^n;
   var re = n.toString();
	for (var i = 0; i <= re.length; i++) {
	  if (i == 6 || i+1 == 6 || i+2 ==6){
	 	console.log('Faltan'+i+' dias hasta el Apocalipsis.');
	  }
	  else {
	  	i++;
	  	console.log('No hay problema siga disfrutando la vida.');
	  }
	  
	}
}
	
	 

Apoca(21);
Apoca(96688766643);

//problemas 3
console.log('Problema 3:');
function invertir(cadena) {
  var x = cadena.length;
  var cadenaInvertida = "";

  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  return cadenaInvertida;
}

let cad = invertir("manzana");
console.log(cad);
cad = invertir("Uno Dos Tres Cuatro Sala");
console.log(cad);