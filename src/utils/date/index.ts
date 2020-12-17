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

export const dateFormat = (oldDate: Date, shortMonth?: boolean) => {
  const year = oldDate.getFullYear();
  let month = Months[oldDate.getMonth() + 1];
  if (shortMonth) {
    month = month.slice(0, 3);
  }
  const date = oldDate.getDate();

  return `${month} ${date}, ${year}`;
};
