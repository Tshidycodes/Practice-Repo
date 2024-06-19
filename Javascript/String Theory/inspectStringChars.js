// Inspecting individual (16-bit) characters of a string
//charAt means character at a specific index
let str = "Hello, world";
console.log(str.charAt(0)); // => "H": the first character
console.log(str.charAt(str.length - 1)); // => "d": the last character
console.log(str.charCodeAt(0)); // => 72: 16-bit number at the specified position
console.log(str.codePointAt(0)); // => 72: ES6, works for codepoints > 16 bits
