/*you can access individual characters
(16-bit values) from a string using square brackets instead of the charAt()
method:
*/

function accessString(str) {
  console.log(str[0]);
  console.log(str[str.length - 1]);
}
//accessString("Hello");

function iterateStr(str) {
  let strCopy = "";
  for (let i = 1; i < str.length; i++) {
    strCopy += str[i];
  }
  console.log(strCopy);
}
iterateStr("bye");

console.log(typeof lemon);
