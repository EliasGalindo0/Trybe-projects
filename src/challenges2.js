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
