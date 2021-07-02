//uso de prototipos
//Funciones constructoras
function Circulo(radio){
    //console.log(this);
    this.radio=radio;
}

Circulo.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radio,2);
}

Circulo.prototype.getPerimetro = function () {
    return 2 * Math.PI * this.radio;
}

let miCirculo = new Circulo(10);   //*debe llevar new
console.log(miCirculo);
console.log(miCirculo.getArea());
console.log(miCirculo.getPerimetro());