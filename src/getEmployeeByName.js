const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {}; // retorna um objeto vazio na falta de um parâmetro.
  } return employees.find((employee) => // utilizado método 'find', pois com o filter o retorno é uma array, o que conflita com o resultado esperado pelo teste. O 'find' retorna o primeiro elemento que satisfaça a condição.
    employeeName.includes(employee.firstName) || employeeName.includes(employee.lastName)); // utilizado o 'includes' para verificar se o parâmetro passado coincide com alguma das duas propriedades de 'employees'.
};

module.exports = getEmployeeByName;
