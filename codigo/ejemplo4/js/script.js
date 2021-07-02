const encabezado = document.getElementById('enca');
encabezado.style.color = 'blue';

function add(lista,elemento){
	let listaDest;
	if (lista == 'frutas'){
		listaDest = document.getElementById('lista-frutas');	
	} else {
		listaDest = document.getElementById('lista-colores');
	}
	let nuevoElemento = document.createElement('li');
	nuevoElemento.id = elemento;
	nuevoElemento.innerHTML = elemento.charAt(0).toUpperCase() + elemento.slice(1);
	listaDest.appendChild(nuevoElemento);
}

const enca2 = document.querySelector('.encah2');
enca2.style.fontFamily='Helvetica';

add('colores','amarillo');
add('colores','azul');
add('frutas','pera');

const newButton = document.createElement('button');
newButton.innerHTML = 'Continuar';
newButton.style.backgroundColor = 'Red';
newButton.style.color = 'white';
document.body.appendChild(newButton);

newButton.onclick = function(){ 
	if (newButton.style.backgroundColor=='red'){
		newButton.style.backgroundColor='green';
	} else {
		newButton.style.backgroundColor='red';
	}
}

function diHola(){
	console.log('Hola');
}

diHola();

function saludo(nombre = 'extraño'){
     console.log(`Hola ${nombre}`);
}

saludo('Maria');
saludo();








