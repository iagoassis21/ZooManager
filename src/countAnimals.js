const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const contaAnimal = data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return contaAnimal;
  }
  const { specie, sex } = animal;
  if (specie && sex) {
    return species.find((element) => element.name === specie).residents
      .filter((element) => element.sex === sex).length;
  }

  if (specie !== undefined) {
    return species.find((element) => element.name === specie).residents.length;
  }
}

console.log(countAnimals());

module.exports = countAnimals;
