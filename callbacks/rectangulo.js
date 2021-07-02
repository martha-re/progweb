module.exports = (x,y,callback) => {
	if (x<=0 || y<=0){
		setTimeout(() =>
			callback(new Error('Las dimensiones deben ser mayor a cero'),
				     null),1000);
	} else {
		setTimeout(() =>
			callback(null,
				    {
				       perimetro : () => 2*(x+y),
				       area : () => x*y
				    }),2000);
	}
};