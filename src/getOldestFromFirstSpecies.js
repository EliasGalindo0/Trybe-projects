const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const getAnimalId = employees.find((employee) => employee.id === id)
    .responsibleFor[0];

  const firstAnimal = species
    .find((specie) => specie.id === getAnimalId)
    .residents.sort((a, b) => b.age - a.age);

  return Object.values(firstAnimal[0]);
};

module.exports = getOldestFromFirstSpecies;

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
