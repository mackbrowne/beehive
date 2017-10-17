export const sortPayrollPeriods = ({period: [a]}, {period: [b]}, order) => {
  if (order === 'desc') {
    return a.getTime() - b.getTime();
  } else {
    return b.getTime() - a.getTime();
  }
};
