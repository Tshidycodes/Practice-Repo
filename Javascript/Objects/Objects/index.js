//OBJECT LITERALS - wrote out the object's contents as we've created them
//different compared to objects instantiated from classes

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introducedSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
  getMyAge() {
    //simplified syntax
    console.log(`I am ${this.age}`);
  },
};

person.bio();
person.introducedSelf();
person.getMyAge();

//practice
const animal = {
  name: "Sporty",
  age: 2,
  sound: "bark",
  mySound() {
    console.log(`My name is ${this.name} and I ${this.sound} at strangers 🐕‍🦺`);
  },
  dogAge() {
    console.log(`I am ${this.age}`);
  },
};
console.log(animal.name);
animal.mySound();
animal.dogAge();

//AN object property can itself be an object
const school = {
  name: { first: "Harmony", second: "High" },
  year: 2017,
  getMatricYear() {
    const matric = `I matriculated at ${this.name.first} ${this.name.second}, in the year ${this.year}.`;
    console.log(matric);
  },
};

school.getMatricYear();
//Bracket Notation:
console.log(school["name"]["second"]);
console.log(school["year"]);
