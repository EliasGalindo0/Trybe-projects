const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const auxObject = {};
  if (!animal) {
    species.forEach((specie) => {
      auxObject[specie.name] = specie.residents.length;
    });
    return auxObject;
  }
  if (!animal.sex) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
  return species.find((specie) => specie.name === animal.specie).residents.filter((specie) =>
    specie.sex === animal.sex).length;
};

module.exports = countAnimals;
