///entries
const data = {
  frontend: 'Ivan',
  backend: 'otro',
  design: 'Noelia',
};
let entries = Object.entries(data);

console.log(entries.length);

//values
const data = {
  frontend: 'Ivan',
  backend: 'otro',
  design: 'Noelia',
};

let values = Object.values(data);
console.log(values);

//padStart padEnd
let string = 'hola';

console.log(string.padStart(6, 'hi'));
console.log(string.padEnd(6, '-'));

//asyc await
const helloNoAsync = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => resolve('yes'), 3000);
    } else {
      reject('no');
    }
  });
};

const helloAsync = async () => {
  const result = await helloNoAsync(); //espera a que termine con await
  console.log(result);
};
helloAsync();

const otherFuncion = async () => {
  try {
    const result = await helloNoAsync(); //espera a que termine con await
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
otherFuncion();
