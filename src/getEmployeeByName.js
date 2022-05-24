const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  return data.employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
}

module.exports = getEmployeeByName;
