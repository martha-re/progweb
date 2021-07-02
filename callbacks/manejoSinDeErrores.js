function enviarCarta(carta, direccion){
	if (sePuedeEnviar(direccion)){
		enviarA(direccion);
        return true;
	}
	return false;
}

function sePuedeEnviar(direccion){
	let direcciones = ['Direccion 1','Direccion 2', 'Direccion 3'];
	return direcciones.includes(direccion);
}

function enviarA(direccion){
	console.log(`Enviando a ${direccion}`);
}

let cartas = ['Carta 1','Carta 2','Carta 3'];
let destino = ['Direccion 3','Direccion 5', 'Direccion 1'];
for (var i = 0; i < cartas.length; i++) {
	if (enviarCarta(cartas[i],destino[i])){
	   console.log('carta enviada');
    } else {
       console.log('no se pudo enviar carta');
    }
}
