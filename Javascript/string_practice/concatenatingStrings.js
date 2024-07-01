//obtaining portions of a string:
const str = "Hello, World";
console.log(str.length); //includes whitespaces
console.log(str.substring(1, 4));
console.log(str.slice(1, 4)); //char at first index is included and char at last index is excluded
console.log(str.slice(-3)); //last 3 chars of a string
console.log(str.split(", ")); //["Hello", "world"]: split at delimiter string
