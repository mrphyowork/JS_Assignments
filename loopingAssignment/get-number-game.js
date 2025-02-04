const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Enter a number :");

do {
  //   console.log("Enter a number :" + guess);
  guess = prompt("Enter a number :");
  //   document.write(guess);
  if (correctNumber != guess) {
    continue;
  }
} while (correctNumber != guess);

document.write("Congratulation! :" + correctNumber);
