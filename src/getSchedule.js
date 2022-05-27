const data = require('../data/zoo_data');

const animalNames = data.species.map((item) => item.name);

function getScheduleByAnimal(idAnimal) {
  return data.species.filter((element) =>
    element.name.includes(idAnimal)).reduce((acc, curr) =>
    curr.availability, []);
}

function getAnimalsPerDay(dia) {
  return data.species.filter((element) =>
    element.availability.includes(dia)).map((array) =>
    array.name);
}

function getHoursAndAnimalsPerDay() {
  const dias = Object.keys(data.hours);

  const Obj = dias.reduce((acc, curr) => {
    if (curr === 'Monday') {
      return { ...acc, Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
    }
    return { ...acc,
      [curr]: {
        officeHour: `Open from ${data.hours[curr].open}am until ${data.hours[curr].close}pm`,
        exhibition: getAnimalsPerDay(curr),
      },
    };
  }, {});

  return Obj;
}

const verifica = getHoursAndAnimalsPerDay();

function filtroData(parametro) {
  return {
    [parametro]: verifica[parametro],
  };
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return getHoursAndAnimalsPerDay();
  }
  if (animalNames.includes(scheduleTarget)) {
    return getScheduleByAnimal(scheduleTarget);
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    return filtroData(scheduleTarget);
  }

  return getHoursAndAnimalsPerDay();
}

module.exports = getSchedule;
