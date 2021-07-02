let misPromesas = Promise.all(
	[retPromUno(), retPromDos(), retPromTres()]);
 
misPromesas
  .then((arregloDeValores) => {
    console.log(arregloDeValores);
  })
  .catch((razonRechazo) => {
    console.log(razonRechazo);
  });

primeraFuncioPromesa()
.then((primerValorResuelto) => {
  return segundaFuncionPromesa(primerValorResuelto);
})
.then((segundoValorResuelto) => {
  console.log(segundoValorResuelto);
});


let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yeeeii!');
  } else {
    reject('Ohhh noooo!');
  }
});

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });

const funcionPromesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('Se resolvio!')}, 1000);
  });
};
 
const prom2 = funcionPromesa();
console.log(prom2);


const holaRetrasado = () => {
  console.log('!Hola!, este es un saludo asincrono');
};
 
setTimeout(holaRetrasado, 2000);

const inventario = {
  lentes: 1900,
  pantalones: 1088,
  bolsas: 1344
};

const funcionEjecutora = (resolve, reject) => {
  if (inventario.lentes > 0){
    resolve('Orden de lentes procesada');
  } else {
    reject('Articulo agotado.');
  }
}

function ordenarLentes (){
  return new Promise(funcionEjecutora);
}

let promesaOrden = ordenarLentes();
console.log(promesaOrden);








