/*
Object basics 4
In the code you wrote for Task 3, the greeting() method is defined twice, once for each cat. This isn't ideal (specifically, it violates a principle in programming sometimes called DRY or "Don't Repeat Yourself").

In this task we want you to improve the code so greeting() is only defined once, and every cat instance gets its own greeting() method. Hint: you should use a JavaScript constructor to create cat instances.
*/

function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  };
}
const bertie = new Cat("Bertie", "Cymric", "Black");
bertie.greeting();
const ginger = new Cat("Puuurla", "stray", "white");
ginger.greeting();
