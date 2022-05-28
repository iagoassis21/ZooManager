const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getFirstSpecie = data.employees.find((item) => item.id.includes(id)).responsibleFor[0];
  const getSpecieData = data.species.find((item) => item.id === getFirstSpecie).residents
    .sort((a, b) => b.age - a.age)[0];
  return Object.values(getSpecieData);
}

module.exports = getOldestFromFirstSpecies;
