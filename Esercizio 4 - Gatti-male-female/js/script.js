
//array di gatti
const cats = [
  {
    name: 'Adam',
    age: 0.3,
    color: '#00ffff',
    gender: 'male'
  },
  {
    name: 'Emily',
    age: 0.8,
    color: '#f700ff',
    gender: 'female'
  },
  {
    name: 'Willoby',
    age: 1.3,
    color: '#ff6600',
    gender: 'male'
  },
  {
    name: 'Poppy',
    age : 0.2,
    color: '#00ff00',
    gender: 'female'
  },
];

// creo una variabile esterna per stampare in html
let container = "";

// con un forEach stampo in html
cats.forEach((element) => {
  container += ` <div>
  <i class="fas fa-cat" style="color: ${element.color}"></i>
  ${element.name}
  </div> `
});

document.getElementById('container').innerHTML = "<h3> Nomi gatti e colore</h3>" + container;


//mettiamo un fiocco colorato ad ogni gattino,
//base rosa femmine
//base blue maschi,
//il fiocco deve essere più chiaro se più giovane più scuro se più vecchio
//creaiamo solo dati ma output facciam dopo divisi
//colori base
const pink = '#ff00e6';
const blue = '#0084ff';

//usiamo map per creare nuovo array con aggiunta prop ribbon {color, opacity} [..rest/destructuring opTernario]
// opacity sarà in base all'age [age*100]

var ribbon = cats.map((element) =>{
  return {
    ...element,
    ribbon: {
      color: (element.gender === "female" ? pink  :  blue), // if (element.gender === "female") { pink } else { blue }
      opacity: (element.age * 100)
    }
  }
});

console.log(cats,ribbon); // stampo i 2 array per confrontarli

// dividiamoli per sesso [2 nuovi array con filter]

const female = ribbon.filter((element) => {
  return (element.gender === "female")
});
console.log(female);
const male = ribbon.filter((element) => {
  return (element.gender === "male")
});
console.log(male);

const stampaFemale = document.getElementById('container_2');
const stampaMale = document.getElementById('container_3');


let containerDue = "";

// con un forEach stampo in html
female.forEach((element) => {
  containerDue += ` <div>
      <i class="fas fa-cat" style="color:${element.color}"></i>
      <i class="fas fa-ribbon" style="color:${element.ribbon.color}; filter: opacity(${element.ribbon.opacity}%);"> </i>
      ${element.name}
    </div> `
});

document.getElementById('container_2').innerHTML = "<h3> Gatti Femmine</h3>" + containerDue;

let containerTre = "";

// con un forEach stampo in html
male.forEach((element) => {
  containerTre += ` <div>
      <i class="fas fa-cat" style="color:${element.color}"></i>
      <i class="fas fa-ribbon" style="color:${element.ribbon.color}; filter: opacity(${element.ribbon.opacity}%);"> </i>
      ${element.name}
    </div> `
});

document.getElementById('container_3').innerHTML = "<h3> Gatti Maschi</h3>" + containerTre;

const arrayUnito = [...female,...male]

var containerQuattro = "";

arrayUnito.forEach((element) => {
  containerQuattro += ` <div>
      <i class="fas fa-cat" style="color:${element.color}"></i>
      <i class="fas fa-ribbon" style="color:${element.ribbon.color}; filter: opacity(${element.ribbon.opacity}%);"> </i>
      ${element.name}
    </div> `
});

document.getElementById('container_4').innerHTML = "<h3> Tutti i gatti</h3>" + containerQuattro;

//altro array con obj di soli ribbon and name [destructuring in map]
const objArray = arrayUnito.map((element) =>{
 const {name,ribbon} = element;
 let myobj =  {
    name,
    ribbon
  }
  return myobj
});

console.log(objArray);


// stampo l'array con soli nomi e ribbon
var containerCinque = "";

objArray.forEach((element) => {
  containerCinque += ` <div>
    <i class="fas fa-ribbon" style="color:${element.ribbon.color}; filter: opacity(${element.ribbon.opacity}%);"> </i>
    ${element.name}
    </div> `
});

document.getElementById('container_5').innerHTML = "<h3> Nome e ribbon</h3>" + containerCinque;
