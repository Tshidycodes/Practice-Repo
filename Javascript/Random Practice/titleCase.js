//Return the string with the first letter of every word capitalised
//convert string to array by spliting the string to individual words using split(" ")
//loop through each word and capitalise the first word;
function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(titleCase("my name is Not mentioned."));

//to capitalise each word in an array, usually we:
let fruits = ["orange", "lemon", "grapes"];
let orange = fruits[2][0].toUpperCase() + fruits[2].slice(1);
//console.log(orange);
