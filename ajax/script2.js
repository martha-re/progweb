//ejemplo de solicitud sincrona
let req = new XMLHttpRequest();
req.open('GET', 'http://localhost:3002/index.html', false); 
req.send(null);
if (req.status == 200)
  console.log(req.responseText);