/*
This method will always return one of the 3 colors, as long as timeElapsed is an integer. And it'll cycle through the 3 colors as timeElapsed increases.

COLORS.length is equal to 3, since there are 3 colors in our array. And so, as timeElapsed increments from 0 to 10,
*/
let colors = ["red", "green", "orange"];

function getColor(timeElapsed) {
  let colorIndex = timeElapsed % colors.length;
  console.log(colors[colorIndex]);
}
//getColor(0);
//getColor(1);
//getColor(2);

//using a for loop:

let colorIndex2 = 0;
for (let i = 0; i < 10; i++) {
  colorIndex2 = i % colors.length;
  console.log(colors[colorIndex2]);
}
