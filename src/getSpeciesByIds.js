const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => { //  operador rest para poder receber mais de um parâmetro.
  if (!ids) { // comparador que indica que tudo aquilo for diferente de 'ids' retornará um array vazio.
    return [];
  }
  return species.filter((specie) => ids.includes(specie.id)); //  a verificação do valor inserido como parâmetro no ID será realizada pelo 'includes', se ele retornar true, ele retornará o elemento que seja igual ao ID inserido.
};

module.exports = getSpeciesByIds;
