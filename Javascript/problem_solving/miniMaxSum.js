/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
//maximumSum is the sumof all integers excuding the minimumValue
//minimumSum is the sum of all integers excluding the maximumValue
*/
function miniMaxSum(arr) {
  let minimumValue = Math.min(...arr);
  let maximumValue = Math.max(...arr);

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let minimumSum = total - minimumValue;
  let maximumSum = total - maximumValue;

  console.log(`${maximumSum} ${minimumSum}`);
}
miniMaxSum([1, 3, 5, 7, 9]);
//16 24
