function convertToSnakeCase(str) {
  const lowerCasedStr = str.toLowerCase();
  return lowerCasedStr.replace(/[^a-z]/g, "_");
}
console.log(convertToSnakeCase("The+dog>is*Chasing(the CAT"));
