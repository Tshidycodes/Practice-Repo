//find the product of an integer and all integers below it

function factorial(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}
console.log(factorial(6));
