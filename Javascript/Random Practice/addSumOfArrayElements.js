/*compute the sum of the elements of an array:
 *create total varable to add all the elements
 *case: if value is not an integer, throw new error
 *loop through each element and add current element value to the total
 *return the total
 */
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 1 !== 0) {
      throw new Error("wrong input");
    }
    total += arr[i];
  }
  return total;
}
//console.log(sum([1, "r", 3]));
//console.log(total);

//alternatively loop ove array, assigning each elememnt to x
function totalSum(arr) {
  let total = 0;
  for (let element of arr) {
    total += element;
  }
  return total;
}
console.log(totalSum([2, 3, 1]));
