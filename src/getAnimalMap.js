const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// função que recebe os parâmetros, filtra conforme os sexo informado e retorna um novo array com os nomes que correspondem ao sexo informado
const filterSex = (options, residents) => residents
  .filter((resident) => resident.sex === options.sex)
  .map((resident) => resident.name);

// função que retorna os nomes conforme os parametros informados. Se o parâmetro sexo for passado ele cai no primeiro if e executa a função anterior. Se não, ela organiza os nomes do novo array e os retorna
const getNames = (options, residents) => {
  let names = residents.map((resident) => resident.name);
  if (options.sex) {
    names = filterSex(options, residents);
  }
  if (options.sorted) {
    names = names.sort();
  }
  return names;
};

// função principal que cria dois objetos, 1 com as locaçlizações dos animais e outro com os nomes desses animais, de acordo com os parâmetros passados
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
