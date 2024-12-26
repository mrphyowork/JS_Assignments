let distance = 300;
console.log();
console.log("The distance of road trip is " + distance + " miles.");

let distancePerGallon = 25;
console.log("The distance per gallon is " + distancePerGallon + " miles.");

let fuelPrice = 3.75;
console.log("Cost of fuel per gallon is $" + fuelPrice + ".");

let numberOfFuel = distance / distancePerGallon;
console.log("Total number of fuel gallons is " + numberOfFuel + " gals.");

let tripCost = numberOfFuel * fuelPrice;
console.log("The total cost of trip is $" + tripCost + ".");
console.log();
