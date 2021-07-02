function generadorDeNums() {
  // Variable local 
  var num = 10;
  function imprimeNumero() {
    console.log(num);
  }
  num++;
  return imprimeNumero;
}

var numero = generadorDeNums();
numero(); // 6