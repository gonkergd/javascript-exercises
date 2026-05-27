const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
	return a.reduce((sum, item) => sum + item, 0);
};

const multiply = function(a) {
  return a.reduce((sum, item) => sum * item, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a == 0) return 1;
	for (let i = a - 1; i >= 1; i--){
    a *= i;
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
