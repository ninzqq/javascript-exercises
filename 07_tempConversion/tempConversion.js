const convertToCelsius = function(value) {
  let rounded = Math.round((value - 32) * (5 / 9) * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(value) {
  let rounded = Math.round(((value * (9 / 5)) + 32) * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
