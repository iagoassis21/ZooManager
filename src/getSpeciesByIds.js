const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const check = ids.length;
  if (check === 0) {
    return [];
  }
  return data.species.filter((id) => ids.includes(id.id));
}

module.exports = getSpeciesByIds;
