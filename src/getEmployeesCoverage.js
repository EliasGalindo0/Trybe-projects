const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const getEmployee = (target) => {
  const found = employees.find((employee) => (
    employee.firstName === target || employee.lastName === target || employee.id === target
  ));

  if (!found) throw new Error('Informações inválidas');
  return found;
};

const getAnimal = (id) => species.find((specie) => (specie.id === id));

const getCoverage = (employee) => {
  const { firstName, lastName, id } = employee;
  const result = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: [],
    locations: [],
  };

  employee.responsibleFor.forEach((animalName) => {
    const animal = getAnimal(animalName);

    if (animal) {
      result.species.push(animal.name);
      result.locations.push(animal.location);
    }
  });

  return result;
};

const getEmployeesCoverage = (user) => {
  if (!user) {
    const list = [];

    employees.forEach((employee) => {
      list.push(getCoverage(employee));
    });

    return list;
  }

  const { id, name } = user;
  const employee = getEmployee(id || name);
  return getCoverage(employee);
};

module.exports = getEmployeesCoverage;
