let rectangulo = require('./rectangulo.js');

function muestraRect (b,h) {
	console.log(`Para un rectangulo de ${b} x ${h}`);
	if (b<=0 || h<=0){
		console.log('Dimensiones incorrectas');
	} else {
		console.log(`El perimetro del rectangulo es ${rectangulo.perimetro(b,h)} y el area es ${rectangulo.area(b,h)}`);
	}
}

muestraRect(2,4);
muestraRect(3,5);
muestraRect(0,5);
muestraRect(-3,5);