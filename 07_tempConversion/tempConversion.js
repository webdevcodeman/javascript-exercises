const convertToCelsius = function(fahrenheit) {
  // let celsius = (fahrenheit-32)*5/9;
  // if(Number.isInteger(celsius)){
  //   return celsius;
  // }else{
  //   return +celsius.toFixed(1);
  // }
  return Math.round((fahrenheit-32)*5/9*10)/10;
};

const convertToFahrenheit = function(celsius) {
  // let fahrenheit = celsius*9/5+32;
  // if(Number.isInteger(fahrenheit)){
  //   return fahrenheit;
  // }else{
  //   return +fahrenheit.toFixed(1);
  // }
  return Math.round((celsius*9/5+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
