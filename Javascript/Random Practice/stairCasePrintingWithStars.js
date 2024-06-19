let greet = "Hello, world";
//let result = greet.repeat(2);
//console.log(result);
//Use for loop where i will track the number of rows
// the number of rows (i) should be less than or equal to n
// print out a " " n-i times and append a # i times
// console log adds a new line by default
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let result = " ".repeat(n - i) + "#".repeat(i);
    console.log(result);
  }
}
staircase(4);
