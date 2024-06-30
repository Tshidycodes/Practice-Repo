/*
In this task, we want you to return to the cat object literal from Task 1. We want you to rewrite the greeting() method so that it logs "Hello, said Bertie the Cymric." to the browser's console, but in a way that will work across any cat object of the same structure, regardless of its name or breed.

When you are done, write your own object called cat2, which has the same structure, exactly the same greeting() method, but a different name, breed, and color.

Call both greeting() methods to check that they log appropriate greetings to the console.
*/
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log(`Hello, said ${cat.name} the ${cat.breed}.`);
  },
};

//cat.greeting();
//console.log(cat.color);
const cat2 = {
  name: "Ginger",
  breed: "Catzo",
  color: "silver",
  greeting() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`); // this keyword still works because it refers to the object where the function is called from
  },
};

cat2.greeting();
//console.log(cat2.breed);
