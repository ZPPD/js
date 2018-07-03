//degrees in Kelvin
const kelvin = 294;

//converting Kelvin to Celsius
const celsius = kelvin - 273;

//convert from Celsius to Fahrenheit
let fahrenheit = celsius * (9/5)  +32;

//round up Fahrenheit
fahrenheit = Math.floor(fahrenheit);

//convert from Celsius to Newton
let newton = celsius * (33/100);

//round up Newton
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${celsius} degrees Celsius.`);

console.log(`The temperature is ${newton} degrees Newton.`)
