//----------------------- INIZIO JSNACK 3 es6 ---------------------

// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
// Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

// Array iniziale
const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

arrayObj.forEach((element) => { // stampo con un foreach
  console.log(` nome: ${element.name} tipo: ${element.type} colore: ${element.color} `);
});

// Creo una copia dell'array originale con l'operatore Spread
const arrayObjCopia = {...arrayObj};

// creo array di lettere dell'alfabeto per fare uscire in output una lettera casuale
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// ciclo for dove dico in ogni oggetto dell'array creami una proprietà position che sarà uguale a una lettera casuale
// data dal valore della variabile "min"

for (let variable in arrayObjCopia) {
  let min = alphabet[Math.floor(Math.random()*alphabet.length)];
  arrayObjCopia[variable].position = min; // dichiaro una proprietà
}
console.log("aggiungo position",arrayObjCopia);
arrayObjCopia.forEach((x) => { // stampo con un foreach
  console.log(` nome: ${element.name} tipo: ${element.type} colore: ${element.color}  position: ${element.position} `);
});
//----------------------- FINE JSNACK 3 es6 ---------------------
