export const getFormattedDate = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const getDateMinusDays = (date, numberOfDays) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - numberOfDays
  );
};
