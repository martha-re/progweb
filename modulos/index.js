/*let rect = {
	perimetro: (x,y) => (2*(x+y)),
	area: (x,y) => (x*y)
};
*/
let rect = require('./rectangulo');

function muestraRectangulo(b,h){
	console.log ('Rectangulo de dimensiones: base = '+b+' altura = '+ h);

	rect(b,h, (err,rectangulo) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + b + " and b = " + h + " is " + rectangulo.area(b,h));
            console.log("The perimeter of the rectangle of dimensions l = "
                + b + " and b = " + h + " is " + rectangulo.perimetro(b,h));
        }
    });
    console.log("This statement after the call to rect()");
}

muestraRectangulo(2,4);
muestraRectangulo(3,5);
muestraRectangulo(0,5);
muestraRectangulo(-3,5);
