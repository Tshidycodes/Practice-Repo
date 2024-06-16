//SEARCHING A STRING:
let str = "Hello, world";
console.log(str.indexOf("l")); // => 2: position of first letter l
console.log(str.indexOf("l", 4)); // => 3: position of first "l" at or after 4
console.log(str.indexOf("zz")); // => -1: str does not include the substring "zz"
