//manipulacion del DOM
//console.log(document.getElementById("titulo"));


function saluda(){
	this.textContent ="ya salude";
	let nombre = document.getElementById("nombre").value;
    let mensaje = "<h2>Hola!, "+ nombre+ "</h2>";
	//document.getElementById("contenido").textContent = mensaje;
	document.getElementById("contenido").innerHTML = mensaje;
	if (nombre === "estudiante"){
		let titulo = document.querySelector("#titulo").textContent;
		titulo = titulo + " Saludo ";
		document.querySelector("h1").textContent = titulo;
	}
}

//document.querySelector("button").addEventListener("click",saluda);

document.querySelector("button").onclick= saluda;