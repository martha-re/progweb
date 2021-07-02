// this

function test(){
	console.log('hola');
}

test();

//uso de this
function test2(){
	console.log(this);
	this.miClase = 'Programacion';
}
test2();
console.log(global.miClase);

//Funciones constructoras
function Circulo(radio){
    //console.log(this);
    this.radio=radio;

    this.getArea = function (){
    	return Math.PI * Math.pow(this.radio,2);
    }
}

let miCirculo = new Circulo(10);
console.log(miCirculo);
console.log(miCirculo.getArea());

let miCirculo2 = new Circulo(5);
console.log(miCirculo2);