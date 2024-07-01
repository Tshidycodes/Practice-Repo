//this keyword refers to the current object the code is currently being executed in
//In the context of an object method, this refers to the object that the method was called on

const person1 = {
  name: ["Bob", "Smith"],
  age: 32,
  introducedSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

const person2 = {
  name: ["Mary", "Luster"],
  age: 25,
  introducedSelf() {
    console.log(`Hi! I'm ${this.name[0]} ${this.name[1]}.`);
  },
};
person1.introducedSelf();
person2.introducedSelf();
