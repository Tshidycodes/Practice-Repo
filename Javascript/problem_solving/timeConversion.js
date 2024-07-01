/*
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):
string s: a time in 12 hour format
Returns
string: the time in 24 hour format
input: 07:05:45PM
output: 19:05:45
*/
//first extract period (AM/PM)
function timeConversion(s) {
  let period = s.slice(-2);
  let hours = s.slice(0, 2);
  let minutes = s.slice(3, 5);
  let seconds = s.slice(6, 8);
  let hoursInt = parseInt(hours);
  //convert the hours based on the period
  if (period === "AM") {
    if (hoursInt === 12) {
      hours = "00";
    } else {
      hours = hoursInt.toString().padStart(2, "0");
    }
  } else {
    if (hoursInt !== 12) {
      hours = (hoursInt + 12).toString();
    }
  }
  return `${hours}:${minutes}:${seconds}`;
}
console.log(timeConversion("07:05:45PM"));
