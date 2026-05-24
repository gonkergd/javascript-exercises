const convertToCelsius = function(f) {
  return Number((5 / 9 * (f-32)).toFixed(1));
};

const convertToFahrenheit = function(c) {
  return Number((9 / 5 * (c) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
