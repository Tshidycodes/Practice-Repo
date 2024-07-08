//An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  let removed = s.pop();
  s.unshift(removed);
  return s;
  // Using s = [2, 5, 7] would be invalid
  // Only change code above this line
}
console.log(editInPlace());
