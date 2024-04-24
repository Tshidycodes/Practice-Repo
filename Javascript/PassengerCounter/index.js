//document.getElementById("count-el").innerText = 5;

//let count = 0; //the variable is going to hold data
//console.log(count);
//Pick up here - The onclick event listener

//document.addEventListener("click", increment);
//first initialize the count
let count = 0;
let countElement = document.getElementById("count-el");
let incrementBtn = document.querySelector("#increment-btn");

function increment() {
  count = count + 1;
  countElement.innerText = count;
}

incrementBtn.addEventListener("click", increment);
