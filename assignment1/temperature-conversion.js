// Fahrenheit to Celcius
let f = prompt("Enter Fahrenheit:");
console.log();
document.write("<p>Temperature(°F) : " + f + "°F</p>");

let c = (f - 32) * (5 / 9);
document.write("<p>Temperature(°C) :" + c.toFixed(1) + "°C</p>");
console.log();

// Celcius to Fahrenheit
let ce = prompt("Enter Celcius:");
console.log();
document.write("<p>Temperature(°C) : " + ce + "°C</p>");

let fa = ce * (9 / 5) + 32;
document.write("<p>Temperature(°F) : " + fa.toFixed(1) + "°F</p>");
console.log();
