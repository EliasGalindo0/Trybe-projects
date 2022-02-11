const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animalsType = species.map((item) => item.name);

const getDay = (typeDay) => {
  const animals = species.filter((animal) => animal.availability
    .some((item) => item === typeDay));
  const hour = `Open from ${hours[typeDay].open}am until ${hours[typeDay].close}pm`;
  if (typeDay === 'Monday') return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return { officeHour: hour, exhibition: animals.map((item) => item.name) };
};

const objSchedule = {
  Sunday: getDay('Sunday'),
  Monday: getDay('Monday'),
  Tuesday: getDay('Tuesday'),
  Wednesday: getDay('Wednesday'),
  Thursday: getDay('Thursday'),
  Friday: getDay('Friday'),
  Saturday: getDay('Saturday'),
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return objSchedule;
  if (!animalsType.some((item) => scheduleTarget === item)
  && !days.some((item) => scheduleTarget === item)) return objSchedule;
  if (animalsType.some((item) => scheduleTarget === item)) {
    return species.find((element) => element.name === scheduleTarget).availability;
  }
  return { [scheduleTarget]: getDay(scheduleTarget) };
}

module.exports = getSchedule;

console.log(getSchedule());
