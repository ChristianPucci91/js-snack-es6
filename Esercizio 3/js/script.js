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
console.log("array copiato",arrayObjCopia);

//----------------------- FINE JSNACK 3 es6 ---------------------
