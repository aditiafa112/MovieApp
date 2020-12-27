enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export const dateFormat = (oldDate: Date, shortMonth?: boolean, format = 1) => {
  const year = oldDate.getFullYear();
  let month = Months[oldDate.getMonth() + 1];
  if (shortMonth) {
    month = month.slice(0, 3);
  }
  const date = oldDate.getDate();

  if (format === 1) {
    return `${month} ${date}, ${year}`;
  } else if (format === 2) {
    return `${date} ${month} ${year}`;
  }
};
