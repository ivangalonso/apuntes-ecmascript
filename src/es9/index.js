//reposo extraer datos
const data = {
  name: 'Ivan',
  backend: 'otro',
  design: 'Noelia',
};

let { name, ...all } = data;

console.log(name, all);

//propagacion para unir elementos a objetos
const obj = {
  name: 'Ivan',
};

const obj2 = {
  ...obj,
  backend: 'otro',
  design: 'Noelia',
};
console.log(obj2);

const hello = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('yes');
    } else {
      reject(new Error('test error'));
    }
  });
};

hello()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(console.log('Fin'));
