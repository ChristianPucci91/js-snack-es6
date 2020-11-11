// Oggetti

// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// -------------- ESERCIZIO 1 ------------------

// creo oggetto dichiarando una costante

const studente = {
  nome: "Christian",
  cognome: "Pucci",
  eta: 29,
};

// destructuring dell'array.

const {nome,cognome,eta} = studente;
console.log(nome,cognome,eta);

// -------------- ESERCIZIO 1 ------------------

// -------------- ESERCIZIO 2 ------------------

// creo array di oggetti
const arrayStudenti = [

  {
    "nome": "Vincent",
    "cognome": "Vega",
    "eta": 40
  },

  {
    "nome": "Marcellus",
    "cognome": "Wallace",
    "eta": 50
  },

  {
    "nome": "Jules",
    "cognome": "Winnfield",
    "eta": 45
  }

]; // fine array

//Creo un forEach che cicli per ogni elemento dell'array e stampi solo la proprietà nome e cognome

arrayStudenti.forEach((element) => {
  console.log(` nome: ${element.nome} cognome : ${element.cognome} `);
});

// -------------- ESERCIZIO 2 ------------------

// -------------- ESERCIZIO 3 ------------------

// creo un array oggetto e do alle proprieta il valore di quello che inserirà l'utente

var nuovoNome = prompt("Inserisci il tuo nome");
var nuovoCognome = prompt("Inserisci il tuo cognome");
var nuovoEta = prompt("Inserisci la tua età");

const inserisciStudente = {

  "nome" : nuovoNome,
  "cognome" : nuovoCognome,
  "eta" : nuovoEta

};



// -------------- ESERCIZIO 3 ------------------
