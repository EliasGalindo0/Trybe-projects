const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const sortBySex = (options, residents) => residents
  .filter((resident) => resident.sex === options.sex)
  .map((resident) => resident.name);

const getNames = (options, residents) => {
  let names = residents.map((resident) => resident.name);
  if (options.sex) {
    names = sortBySex(options, residents);
  }
  if (options.sorted) {
    names = names.sort();
  }
  return names;
};

const getAnimalMap = (options) => {
  const cardinalLocation = {};
  species.forEach(({ location }) => { cardinalLocation[location] = []; });
  if (options && options.includeNames) {
    species.forEach(({ name, location, residents }) => {
      const specieName = {};
      specieName[name] = getNames(options, residents);
      cardinalLocation[location].push(specieName);
    });
    return cardinalLocation;
  }
  species.forEach(({ name, location }) => { cardinalLocation[location].push(name); });
  return cardinalLocation;
};

module.exports = getAnimalMap;

console.log(getAnimalMap({ includeNames: true, sorted: true }));
// // console.log(includeNames({ includeNames: true }));
