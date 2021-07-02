let rect = require('./rectangulo');

function muestraRectangulo(x,y){
	console.log('Resolviendo para el rectangulo de '+x+'X'+y);
	rect(x,y,(err,rectangulo) => {
		if (err){
			console.log('Error',err.message);
		} else {
            console.log("El area del rectangulo de dimensiones base = "+x+
            	" y altura = "+ y + " es "+ rectangulo.area());
            console.log("El perimetro del rectangulo de dimensiones base = "+x+
            	" y altura = "+ y + " es "+ rectangulo.perimetro());
		}
	});
	console.log('impresion despues de llamada rect');
}

muestraRectangulo(2,7);
muestraRectangulo(3,5);
muestraRectangulo(0,5);