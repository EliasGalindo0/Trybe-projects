const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// deve receber o array como parâmetro e retornar um objeto com a contagem: age < 18 = child; >= 18 < 50 adult; >= senior;
const countEntrants = (entrants) => ({
  child: entrants.filter((entrant) => entrant.age < 18).length,
  adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
  senior: entrants.filter((entrant) => entrant.age >= 50).length,
});

const calculateEntry = (entrants) => {
  // retorna 0 se nenhum argumento for passado
  // retorna 0 se um objeto vazio for passado
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  let totalPrice = 0;
  const entrantsTotal = countEntrants(entrants);
  totalPrice += (entrantsTotal.child * prices.child);
  totalPrice += (entrantsTotal.adult * prices.adult);
  totalPrice += (entrantsTotal.senior * prices.senior);
  return totalPrice;
};

module.exports = { calculateEntry, countEntrants };

// console.log(countEntrants(entrants));
// console.log(calculateEntry(entrants));
