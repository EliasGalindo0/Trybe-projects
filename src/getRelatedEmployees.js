const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees.some((employee) => employee.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((employee) => employee.managers.includes(managerId))
    .map((name) => `${name.firstName} ${name.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
