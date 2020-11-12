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

let ex1 = "";
ex1 = ` <h3> Nome: ${nome} <br> Cognome : ${cognome} <br> Età : ${eta} </h3>`
document.getElementById("ex_1").innerHTML = ex1;

// -------------- ESERCIZIO 1 ------------------
console.log("------------------------------------------");
// -------------- ESERCIZIO 2 ------------------

// creo array di oggetti
var arrayStudenti = [

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

// --------- UPDATE 12/11/2020 stampo gli elementi dell'array usando map-----------

var ex2 = "";

arrayStudenti.map((element) => {
  console.log(` nome: ${element.nome} cognome : ${element.cognome} eta : ${element.eta} `);
  ex2 += ( `<h3> nome: ${element.nome} cognome : ${element.cognome} età : ${element.eta} <br> </h3>` );
  document.getElementById('ex_2').innerHTML = ex2;
});

// -------------- ESERCIZIO 2 ------------------
console.log("------------------------------------------");
// -------------- ESERCIZIO 3 ------------------

// creo un array oggetto e do alle proprieta il valore di quello che inserirà l'utente

var nuovoNome = prompt("Inserisci il tuo nome");
var nuovoCognome = prompt("Inserisci il tuo cognome");
var nuovoEta = parseInt(prompt("Inserisci la tua età"));

const inserisciStudente = {

  "nome" : nuovoNome,
  "cognome" : nuovoCognome,
  "eta" : nuovoEta

};

// --------- UPDATE 12/11/2020 dichiaro un let unendo i 2 array e stamparli con un for each-----------
arrayUnito = [...arrayStudenti,{...inserisciStudente}];
// console.log(arrayStudenti);
var ex3 = "";
// stampo in html con un foureach
arrayUnito.forEach((element) => {
  console.log(` nome: ${element.nome} cognome : ${element.cognome} età : ${element.eta}`);
  ex3 += ( ` nome: ${element.nome} cognome : ${element.cognome} età : ${element.eta} <br>` );
  document.getElementById('ex_3').innerHTML = ex3;
});

// -------------- ESERCIZIO 3 ------------------
console.log("------------------------------------------");
