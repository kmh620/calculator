var toFarhenheit = function(temp) {

	return (temp*1.8)+32;
}

var toCelsius = function(temp) {
	return (temp-32)*(5/9);
}

alert(toFarhenheit(0).toFixed(1)+"° farhenheit");
/* alert(toCelsius(100).toFixed(1)+"° celsius") */
