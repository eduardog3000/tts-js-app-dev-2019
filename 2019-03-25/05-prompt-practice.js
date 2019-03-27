const FREEZING_F = 32;

const temperatureF = prompt('temperature in Fahrenheit');

const temperatureC = (temperatureF - FREEZING_F) / 1.8;
console.log(temperatureC);
