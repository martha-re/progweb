function foo(array, callback) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
        sum += array[i];
    }
    return sum;
}

var array = [2,4,6,8];
foo(array, function (x){
	x = x*2;
	console.log('El valor de x*2 es',x);
});

foo(array, function (x) {
    console.log(x);
});