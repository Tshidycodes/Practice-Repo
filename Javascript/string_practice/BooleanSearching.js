const str = "Hello, world";
const loweredStr = str.toLocaleLowerCase();
console.log(loweredStr.startsWith("hel")); // => true: the string starts with these
console.log(str.endsWith("!")); // => false: s does not end with that
console.log(str.includes("world"));
