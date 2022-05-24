const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((nome) => nome.name === animal).residents
    .every((especie) => especie.age >= age);
}

module.exports = getAnimalsOlderThan;
