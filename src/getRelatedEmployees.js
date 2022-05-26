const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.find((value) => id === value));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter(({ managers }) => managers.includes(managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
