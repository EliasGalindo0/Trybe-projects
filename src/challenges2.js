// Desafio 10
function techList(array, name) {
  let newArray = [];
  let tech = array.sort();
  let nome = name;
  for (let index = 0; index < array.length; index += 1) {
    let object = {
      tech: tech[index],
      name: nome };
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
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let string = array.join('');
  let phoneNumber = {
    ddd: string.slice(0, 2),
    part1: string.slice(2, 7),
    part2: string.slice(7),
  };
  for (let index = 0; index < array.length; index += 1) {
    let number = new RegExp(array[index], 'g');
    let numberRepeat = string.match(number);
    if (numberRepeat.length >= 3 || array[index] > 9 || array[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${phoneNumber.ddd}) ${phoneNumber.part1}-${phoneNumber.part2}`;
}

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    result = true;
  } if (lineB < lineC + lineA && lineB > Math.abs(lineC - lineA)) {
    result = true;
  } if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    result = true;
  }
  return result;
}
// Desafio 13
function hydrate(array) {
  let numbers = /\d+/g;
  let water = (array.match(numbers));
  let numOfGlasses = 0;

  for (let number of water) {
    number = Number(number);
    numOfGlasses += number;
  }
  if (numOfGlasses > 1) {
    return numOfGlasses.toString().concat((' copos de água'));
  } if (numOfGlasses <= 1) {
    return numOfGlasses.toString().concat((' copo de água'));
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
