/*
Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):
int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.
*/
/*

*/
function plusMinus(n) {
  let positiveCounts = 0;
  let negativeCounts = 0;
  let zeroCount = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] > 0) {
      positiveCounts += 1;
    } else if (n[i] < 0) {
      negativeCounts += 1;
    } else {
      zeroCount += 1;
    }
  }
  let total = n.length;
  let proportionOfPositiveValues = positiveCounts / total;
  let proportionOfNegativeValues = negativeCounts / total;
  let proportionOfZeroValues = zeroCount / total;
  console.log(proportionOfPositiveValues.toFixed(6));
  console.log(proportionOfNegativeValues.toFixed(6));
  console.log(proportionOfZeroValues.toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1]);
/*
0.500000
0.333333
0.166667
*/
