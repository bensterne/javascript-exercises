const convertToCelsius = function(temp) {
  let f = (+temp-32) * (5/9);
  f = Math.round(f*10)/10;
  return f;
};

const convertToFahrenheit = function(temp) {
  let c = (+temp * (9/5))+32;
  c = Math.round(c*10)/10;
  return c;
};

//console.log(convertToCelsius(40));
//console.log(convertToFahrenheit(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
