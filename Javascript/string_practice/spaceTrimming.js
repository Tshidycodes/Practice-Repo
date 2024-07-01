let str = "Hello, world";
console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart()); //remove spaces on left. Also trimLeft
console.log(str);

//Padding - adding spaces to the string
//default is " "
console.log(str.padStart(20, "%"));
console.log("hi".padStart(3, "*")); //add stars on the left to a length of 3
console.log("wareng".padEnd(7, "n")); //add n's on the right to a length of 7
