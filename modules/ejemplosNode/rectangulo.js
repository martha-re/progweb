/*exports.perimetro = (b,h) => 2*(b+h);
exports.area = (b,h) => b*h;

*/
module.exports = (b,h,callback) => {
    if(b<=0 || h<=0){
    	setTimeout(() => callback(new Error(`Dimensiones incorrectas`),
    		                      null), 
    	                          2000)
	} else {
		setTimeout(() => callback(null,
		{
			perimetro : () => 2*(b+h),
			area : () => (b*h)
		}), 
		2000)
	}
}