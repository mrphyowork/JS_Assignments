let bread = 2.5;
let milk = 3.0;
let eggs = 2.0;
let cheese = 4.5;
let apples = 5.0;
let chicken = 8.0;
let rice = 3.5;
let butter = 2.75;
let juice = 3.25;

console.log();
console.log("Bread: $2.50");
console.log("Milk: $3.00");
console.log("Eggs: $2.00");
console.log("Cheese: $4.50");
console.log("Apples (1 kg): $5.00");
console.log("Chicken (1 kg): $8.00");
console.log("Rice (1 kg): $3.50");
console.log("Butter: $2.75");
console.log("Juice: $3.25");
console.log();

let price =
  bread + milk + eggs + cheese + apples + chicken + rice + butter + juice;
console.log("Total Price: $" + price);

let discountRate = 0.1;
let discount = price * discountRate;
console.log("Discount: $" + discount.toFixed(2));

let totalCost = price - discount;
console.log("Total Cost: $" + totalCost);

let taxRate = 0.07;
let tax = totalCost * taxRate;
console.log("Tax(7%): $" + tax.toFixed(2));

let netCost = totalCost + tax;
console.log("Net Cost: $" + netCost.toFixed(2));
console.log();
