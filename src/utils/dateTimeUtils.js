export const strToDate = (date) => {
  const day = date.split('/')[0];
  const month = date.split('/')[1];
  const year = date.split('/')[2];

  return `${year}-${`0${month}`.slice(-2)}-${`0${day}`.slice(-2)}`;
};
