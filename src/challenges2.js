// Desafio 10
function techList(array, name) {
  let newArray = [];
  let tech = array.sort();
  let nome = name;
  for (let index = 0; index < array.length; index += 1) {
    let object = {
      tech: tech[index],
      name: nome
    };
    newArray.push(object);
  }
  if (newArray.length === 0) {
    return 'Vazio!';
  }
  return newArray;
}

// Desafio 11
// eslint-disable-next-line complexity
function generatePhoneNumber(array) {
  let counter = 0;
  let phoneNumber = array;
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  
  for (let index = 0; index < phoneNumber.lenght; index += 1) {
  console.log(phoneNumber[index], index);
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  let result = '';
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    result = true;
  } if (lineB < lineC + lineA && lineB > Math.abs(lineC - lineA)) {
    result = true;
  } if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate(array) {
  let numbers = /\d+/g;
  let water = (array.match(numbers));
  let numOfGlasses = 0;

  for (let number of water) {
    number = parseInt(number);
    numOfGlasses += number;
  }
  if (numOfGlasses > 1) {
    return numOfGlasses.toString().concat((' copos de água'));
  } else {
    return numOfGlasses.toString().concat((' copo de água'));
  }
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
