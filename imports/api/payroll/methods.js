// Framework
import { Meteor } from "meteor/meteor";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import { DDPRateLimiter } from "meteor/ddp-rate-limiter";
import _ from "underscore";
import moment from "moment";
import csv from "csv";

// Collections
import { Timesheets } from "../timesheets/collection";

const jobPrices = {
  A: 20,
  B: 30
};

export const fetchAll = new ValidatedMethod({
  name: "payroll.fetchAll",
  validate: null,
  run() {
    const timesheets = Timesheets.find(
      {},
      { sort: { date: -1, employee: -1 } }
    ).fetch();

    //TODO: this is effective, but messy
    return (
      _.chain(timesheets)
        .groupBy(({ date }) => {
          // determines which entry is in which pay period
          const timestamp = moment(date);
          const monthYear = timestamp.format("/MM/YYYY");
          if (timestamp.date() < 16) {
            return `1${monthYear}-15${monthYear}`;
          }
          return `16${monthYear}-${timestamp.daysInMonth()}${monthYear}`;
        })
        //group by employee, total up payments
        .mapObject((timeEntries, period) =>
          _.chain(timeEntries)
            .groupBy("employee")
            .mapObject((employeeTimeEntries, employee) => ({
              period: period
                .split("-")
                .map(date => moment(date, "DD/MM/YYYY").toDate()),
              employee,
              amount: employeeTimeEntries.reduce(
                (total, { hours, job }) => jobPrices[job] * hours + total,
                0
              )
            }))
            .values()
            .value()
        )
        .values()
        .flatten()
        .value()
    );
  }
});

const PAYROLL_METHODS = _.pluck([fetchAll], "name");

if (Meteor.isServer) {
  DDPRateLimiter.addRule(
    {
      name: name => _.contains(PAYROLL_METHODS, name),
      connectionId: () => true
    },
    50, // Operations per limiting interval
    1000 // Limiting interval
  );
}
