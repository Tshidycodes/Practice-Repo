/* You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.*/
//first find the tallest candles of the candles using Math.max
//initialize count to zero
//loop through values and check if there are values that are equal to the tallest candle value

function birthdayCakeCandles(candles) {
  let tallestCandle = Math.max(...candles); //Math.max gives one max value
  let count = [];
  for (let i = 0; i < candles.length; i++) {
    if (tallestCandle === candles[i]) {
      count.push(candles[i]); //push current value to the emty array
    }
  }
  return count.length;
}
console.log(birthdayCakeCandles([4, 4, 1, 3, 8, 8, 8]));
//return 2
//Alternative solution:
function CakeCandles(candles) {
  let tallestCandle = Math.max(...candles); //Math.max gives one maxValue
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (tallestCandle === candles[i]) {
      count++; //increment count by one
    }
  }
  return count;
}
console.log(CakeCandles([4, 4, 1, 3, 8, 10, 10]));
