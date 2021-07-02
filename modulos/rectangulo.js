module.exports = (x,y,callback) => {
	if (x <= 0 || y <= 0){
		setTimeout(() => callback(new Error("La dimensiones deben ser > que cero"),null),2000);
	} else {
		setTimeout(() => callback(null, {
			perimetro : (x,y) => (2*(x+y)),
            area : (x,y) => (x*y)
		}),2000)

	}
};



/*exports.perimetro = (x,y) => (2*(x+y));

exports.area = (x,y) => (x*y);*/