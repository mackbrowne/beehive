import React from "react";
import Moment from 'react-moment';

export const singleDateFormat = cell => <Moment date={cell} format="DD/MM/YYYY" />;

export const payrollDatesFormat = ([start, end]) => <span>
  <Moment date={start} format="DD/MM/YYYY" /> - <Moment date={end} format="DD/MM/YYYY" />
</span>;

export const moneyFormat = cell => `\$${parseFloat(Math.round(cell * 100) / 100).toFixed(2)}`;
