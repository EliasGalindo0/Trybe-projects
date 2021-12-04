// Desafio 10
function techList(array, name) {
  let newObject = { };
  for (let index of array) {
    if (array[index] === 'tech') {
      newObject['tech'] += array;
    } else {
      newObject['name'] += name;
    }
  }
  return newObject;
}
console.log(techList(['DOM', 'Javascript', 'react'], 'Elias'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  let result = '';
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    result = true;
  } else if (lineB < lineC + lineA && lineB > Math.abs(lineC - lineA)) {
    result = true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
