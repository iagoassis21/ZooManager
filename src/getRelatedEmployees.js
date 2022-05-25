const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.find((value) => id === value));
}

function getRelatedEmployees(managerId) {
  try {
    if (isManager(managerId) === true) {
      return data.employees.filter(({ managers }) => managers.includes(managerId))
        .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    }
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } catch (error) {
    throw error.message;
  }
}

// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'))

module.exports = { isManager, getRelatedEmployees };
