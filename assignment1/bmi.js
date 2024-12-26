// For Metric unit
let weight = 65;
console.log();
console.log("Your weight : " + weight + " kg");

let height = 1.7;
console.log("Your height : " + height + " m");

// let squareHeight = height * height;
// let bmi = weight / squareHeight;

let bmi = weight / Math.pow(height, 2);
// Math.pow(base, exponent);

console.log("BMI(Metric) : " + bmi.toFixed(2));
console.log();
