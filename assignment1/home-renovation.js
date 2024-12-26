let lr = 200;
let k = 150;
let b = 100;

let costLr = 15;
let costK = 20;
let costB = 25;

let totalCostLr = lr * costLr;
console.log();
console.log("Cost of Living Room : $" + totalCostLr);

let totalCostK = k * costK;
console.log("Cost of Kitchen : $" + totalCostK);

let totalCostB = b * costB;
console.log("Cost of Bathroom : $" + totalCostB);

let grandCost = totalCostLr + totalCostK + totalCostB;
console.log("Grand total renovation cost : $" + grandCost);
console.log();
