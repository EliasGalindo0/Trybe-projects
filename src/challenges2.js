// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let absolut1 = Math.abs(lineA - lineB);
  let absolut2 = Math.abs(lineB - lineC);
  let absolut3 = Math.abs(lineC - lineA);
  let result = '';
  if (lineA < (lineB + lineC) && lineA > absolut2 || lineB < (lineC + lineA) && lineB > absolut3) {
    result = true;
  } else if (lineC < (lineA + lineB) && lineC > absolut1) {
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
