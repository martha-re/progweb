function invierteImpares(cadena) {
  var c = cadena.length;
  var cadenaInvertida = "";

  	if (c%3!=1) {
        console.log(cadena);
  	}else{
  		 while (c>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(c);
    c--;
  }
        console.log(cadenaInvertida);
  	}
}
invierteImpares("uno dos tres cuatro");

function creaFuncionSuma(numero){
	var n;
	var m;
	if (numero == 5) {
       n=numero;
	}else{
		m=numero
	}
	imprimeNumero(n,m);
		function imprimeNumero(num,num2){
		console.log(num+num2);
	   }
}

 creaFuncionSuma(5);
  creaFuncionSuma(2);
masCinco(2);
masCinco(-8);

const masDiez = creaFuncionSuma(10);
masDiez(0);