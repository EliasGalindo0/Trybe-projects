const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => { //operador rest para poder receber mais de um parâmetro.
  if(!ids) { //comparador que indica que tudo aquilo for deiferente de 'ids' retornará 
    return [];
  }
  return species.filter((specie) => ids.includes(specie.id));
};

module.exports = getSpeciesByIds;
