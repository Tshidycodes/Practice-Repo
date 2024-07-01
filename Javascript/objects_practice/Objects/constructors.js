function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}
const person1 = createPerson("Tshidi");
console.log(person1.name);
person1.introduceSelf();

//this is the long way around, a better way is to use a constructor
//a constructor is just a function called using the new keyword

function Person(name, age = 60) {
  this.name = name;
  this.age = age;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name} and I am ${this.age} years old.`);
  };
}

//to call Person() as a constructor, we use new
const tshidi = new Person("Tshidi Hlalele");
tshidi.introduceSelf();
const lefa = new Person("Lefa Motaung", 44);
lefa.introduceSelf();
