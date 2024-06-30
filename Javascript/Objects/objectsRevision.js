const house = {
  surnamesUsed: ["Radebe", "Maleka"],
  externalMembers: true,
  adults: 4,
  familyHistory() {
    return `This family has additional members (${this.externalMembers}) and ${this.adults} adults.`;
  },
  sundayActivity() {
    return `On sundays, the family goes to ${this.familyChurch}.`;
  },
};

console.log(house.adults);
console.log(house);
console.log(house.familyHistory());
//adding object members
house.familyChurch = "Methodist Church";
console.log(house);
console.log(house.sundayActivity());
//updating object members
house.adults = 2;
console.log(house.adults);
//adding members using bracket notation
//bracket notation is helpful for adding variables
const myDataName = "clan";
const myDataValue = "Bataung";
house[myDataName] = myDataValue;
console.log(house.clan);
//Bracket notation is useful for adding a property to an object esp when using variables
