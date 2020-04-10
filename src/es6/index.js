////////ECMASCRIPT 6///////////

//default params
function defaultParams(uno = 'defaultValue', dos = 'defaultValue') {
  console.log(uno + dos);
}

defaultParams();
defaultParams('a', 'b');

// Concatenar
let uno = 'uno';
let dos = 'dos';
let concat = `${uno} ${dos}`;
console.log(concat);

//string multilinea, salto de linea
let lorem = `teasda asdqweda dsad
 asd asd wasdasd as
 d asda sd ter asda sda sdqwe asd `;
console.log(lorem);

//Estructuracion elementos
let person = {
  name: 'oscar',
  age: 30,
  country: 'ES',
};

let { name, age, country } = person;
console.log(person.name, person.age, person.country);
console.log(name, age, country);

//srepad operator
let team1 = ['uno', 'dos', 'tres'];
let team2 = ['cuatro', 'cinco', 'seis'];
let all = [...team1, ...team2];
console.log(all);

//let, var, const
{
  var globalVar = 'global';
}
const constVar = 'constante';
{
  let letVar = 'let';
  console.log(letVar);
}
console.log(globalVar);
console.log(letVar);

// objetos
let name = 'ivan';
let age = '28';

obj = { name, age };

console.log(obj);

//arrow functions
const names = ['ivan', 'pedro', 'paco'];

let functionArrow = names.map((item) => {
  console.log(item);
});

//promise
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('yes');
    } else {
      reject('no');
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//CLASES
class calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }
}

let cal = new calculator(1, 3);
console.log(cal.sum());

///import export
import hola from '../es6/modulo';
console.log(hola());

//generador (como iterator)
function* helloWorld() {
  if (true) {
    yield 'hola';
  }
  if (true) {
    yield 'world';
  }
}

const generador = helloWorld();
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
