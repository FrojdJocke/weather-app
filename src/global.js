export const weatherIcon = (code) => {
  return `http://openweathermap.org/img/wn/${code}@2x.png`;
};

/**
 *
 * @param {Date} date
 * @returns {string}
 */
export const getDateName = (date) => {
  if (!date) return;
  const weekDay = date.getDay();
  switch (weekDay) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return 'Sunday';
  }
};

export const toShortTimeString = (date) => {
  const parts = date.toLocaleTimeString('sv-SE').split(':');

  return `${parts[0]}:${parts[1]}`;
};

export const getDateFromUnixTS = (uts) => {
  return new Date(uts * 1000);
};
