const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  species.find((specie) => specie.name === animal);
}

module.exports = getAnimalsOlderThan;
