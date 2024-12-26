let burger = 8.5;
let fries = 3.25;
let soda = 2.0;
let dessert = 5.75;
let numberOfPerson = 5;

console.log();
console.log("Burger : $8.50");
console.log("Fries : $3.25");
console.log("Soda : $2.00");
console.log("Dessert : $5.75");
console.log();

let price = burger + fries + soda + dessert;
console.log("Total Bill : $" + price);

let serviceCharge = price * 0.1;
console.log("Service Charge(10%) : $" + serviceCharge.toFixed(2));

let totalCost = price + serviceCharge;
console.log("Total Cost : $" + totalCost);

let tax = totalCost * 0.07;
console.log("Tax(7%) : $" + tax.toFixed(2));

let netCost = totalCost + tax;
console.log("NetCost : $" + netCost.toFixed(2));

let costEachPerson = netCost / numberOfPerson;
console.log("The amount of each person : $" + costEachPerson.toFixed(2));
console.log();
