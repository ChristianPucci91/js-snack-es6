/*
icone:
<i class="fas fa-cat" style="color:......"></i>
 <i class="fas fa-ribbon" style="color:.....; filter: opacity(....);"> </i>
 nome gatto
*/
//abbiamo dei gattini
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
