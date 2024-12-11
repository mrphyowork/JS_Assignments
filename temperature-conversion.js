// Fahrenheit to Celcius
let f = 108;
console.log();
console.log("Temperature(°F) : " + f + "°F");

let c = (f - 32) * (5 / 9);
console.log("Temperature :" + c.toFixed(1) + "°C");
console.log();

// Celcius to Fahrenheit
let ce = 40;
console.log();
console.log("Temperature(°C) : " + ce + "°C");

let fa = ce * (9 / 5) + 32;
console.log("Temperature(°F) : " + fa.toFixed(1) + "°F");
console.log();
