var div = function(weight, height){
  return weight / (height^2);
};

var weight = parseInt(prompt("Weight:"));
var height = parseInt(prompt("Height:"));
// var result = add(number1, number2);
var result = div(weight, height);

alert (result);
