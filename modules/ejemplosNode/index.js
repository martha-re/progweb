/*let rect = {
	perimetro : (x,y) => (2*(x+y)),
	area: (x,y) => (x*y)
};*/

let rect = require('./rectangulo.js');

function muestraRect(b,h) {
	console.log(`Rectangulo de ${b}X${h}`);
	/*if(b<=0 || h<=0){
		console.log(`Dimensiones incorrectas`);
	} else {
		console.log(`Perimetro =${rect.perimetro(b,h)}, Area= ${rect.area(b,h)}`);
	}*/
	rect(b,h,(err, rectangulo) => {
         if(err){
         	console.log('ERROR: ', err.message);
         } else {
         	console.log(`El area del rectangulo de dimensiones ${b}X${h} es ${rectangulo.area()} y el perimetro es ${rectangulo.perimetro()}`)
         }
	});
	console.log ("mensaje despues de call a rect");
}

muestraRect(2,4);
muestraRect(0,5);
muestraRect(4,5);
muestraRect(-3,2);