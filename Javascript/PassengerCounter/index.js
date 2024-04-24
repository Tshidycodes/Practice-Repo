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
  count += 1;
  countElement.innerText = count;
}

incrementBtn.addEventListener("click", increment);

let saveBtn = document.querySelector("#save-btn");
let saveEl = document.getElementById("save-el");

function save() {
  let countStr = ` ${count} -`;
  //Render the variable in the saveEl using innerText
  saveEl.textContent += countStr;
  //set the count to zero
  count = 0;
  countElement.innerText = 0;
}

saveBtn.addEventListener("click", save);
