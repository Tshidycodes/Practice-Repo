let bandInfo;

// Put your code here
const band = {
  name: "Mangoes Five",
  nationality: "South African",
  genre: "rock",
  members: 5,
  formed: 1990,
  split: false,
  albums: [
    { name: "Sunday morning", released: 2007 },
    { name: "She will be loved", released: 2018 },
  ],
};
bandInfo = `${band.name} is a ${band.nationality} band that was was formed in ${band.formed}, and has ${band.members} members. Their genre is ${band.genre}. Their first album was "${band.albums[0].name}", which was  released in ${band.albums[0].released}.`;

// Don't edit the code below here
console.log(bandInfo);
