let s = "hello";
s.toUpperCase();
console.log(s);

//objects and Arrays are mutable
let obj = { a: 2 };
obj.a = 10;
obj.b = "hello";
console.log(obj);

let arr = ["pumpkin"];
arr[0] = "lemon";
arr[1] = "juice";
console.log(arr);

let obj1 = { p: 10 };
let obj2 = { p: 10 };
console.log(obj1 === obj2); //false => distinct objects are never equal

//References:
let a = [];
let b = a;
b[0] = "good";
a[0];
console.log(a === b);

//Copying Array Elements:

let arrayA = ["a", "b", "c", "d", "e"];
let arrayB = [];
for (let i = 0; i < arrayA.length; i++) {
  arrayB[i] = arrayA[i]; //Copy an element of a into b
}
console.log(arrayB);

//scoping
function copyArr() {
  let arrC = [];
  for (let i = 0; i < arrayA.length; i++) {
    arrC[i] = arrayA[i];
  }
  return arrC;
}
console.log(copyArr());
//console.log(arrC);

//Comparing Arrays/Objects

function compareArrays(a, b) {
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) return false;
  return false;
}
console.log(compareArrays(arrayA, arrayB));
