//VAR
//When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // [0,1,2]
console.log(i); // 3
//After the loop exits, i retains its last value, which is 3. This is because var declares i in the function scope (or globally if not inside a function), not block scope. Therefore, i is still accessible and holds the value 3.

//The above code is similar to this one: where i is declared globally
var numArray = [];
var i; //declared i globally
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo()); //prints out the global value of i which is 3, instead of 2

//Let keyword behaves differently

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo()); //2
console.log(i); // i is not defined because it was not declared in the global scope. It is only declared within the for loop statement
