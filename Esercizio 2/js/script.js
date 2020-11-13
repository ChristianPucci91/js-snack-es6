//----------------------- JSNACK 2 es6 ---------------------

//Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara']; // array
const arrayUtente = []; // array inserimento dati utente

// primo numero inserito da utente
var numeroUno = parseInt(prompt("inserisci un numero tra 0 e " + (myArray.length - 1)));
//caso limite
while ((isNaN(numeroUno)) || (numeroUno < 0) || (numeroUno > (myArray.length - 1))) {
  numeroUno = parseInt(prompt("Per favore,inserisci un numero tra 0 e " + (myArray.length - 1)));
}
//secondo numero inserito da utente
var numeroDue = parseInt(prompt("inserisci un secondo numero tra 0 e " + (myArray.length - 1)));
//caso limite
while ((isNaN(numeroDue)) || (numeroDue < 0) || (numeroDue > (myArray.length - 1))) {
  numeroDue = parseInt(prompt("Per favore,inserisci un numero tra 0 e " + (myArray.length - 1)));
}


// --------------------- UPDATE 12/11/2020 utilizzo di una funzione anonima all'interno di un evento click.

document.getElementById('button').addEventListener('click', () => {

  if (numeroDue < numeroUno) { // caso limite n.2
    // ciclo for dove pusho gli elementi dell'array scelti dall'utente nel caso l'utente inserisca il secondo numero minore del primo
    for (let i = numeroDue; i <= numeroUno; i++) {
      arrayUtente.push(myArray[i])
    } // fine ciclo for
  } else {
    for (let i = numeroUno; i <= numeroDue; i++) { // nel caso l'utente inserisse il primo numero maggiore o uguale al secondo si verifica questo
      arrayUtente.push(myArray[i])
    } // fine ciclo for
  }// fine condizione if
  document.getElementById('stampa').innerHTML = "Il risultato del tuo array è: " + arrayUtente;
  console.log("Il risultato del tuo array è: ", arrayUtente);
});

///////// QUESTO SI POTEVA SCRIVERE COSI //////////
// const newArray = myarray.filter((element,index) => {
//
//   return (index >= numeroUno) && (index <= numeroDue)
// });
//----------------------- FINE JSNACK 2 es6 ---------------------
