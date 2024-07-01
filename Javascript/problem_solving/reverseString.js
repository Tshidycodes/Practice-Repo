//reverse the provided string
//convert string into array and split it split("")
//initialize variable to empty array
//loop through in reverse

function reverseString(str) {
  let convertedStr = str.split("");
  console.log(convertedStr);
  let reversedString = convertedStr.reverse();
  let final = reversedString.join("");

  return final;
  //return str.split("").reverse().join("")
}
//console.log(reverseString("hello"));

//Alternative way
function reverseStr(str) {
  let final = "";
  for (let i = str.length - 1; i >= 0; i--) {
    final += str[i];
  }
  return final;
}
console.log(reverseStr("lemon"));
