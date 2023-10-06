function calculateDaysBetweenDates(begin, end) {
  const oneDay = 24 * 60 * 60 * 1000;
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const diffDays = Math.round(Math.abs((beginDate - endDate) / oneDay));
  return diffDays;
}

module.exports = calculateDaysBetweenDates;
