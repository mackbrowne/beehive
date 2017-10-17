// Framework
import { Meteor } from "meteor/meteor";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import { DDPRateLimiter } from "meteor/ddp-rate-limiter";
import SimpleSchema from "simpl-schema";
import moment from "moment";
import csv from "csv";

// Libraries
import _ from "underscore";

// Collections
import { Timesheets } from "./collection";

export const fetchAll = new ValidatedMethod({
  name: "timesheets.fetchAll",
  validate: null,
  run() {
    return Timesheets.find({}, { sort: { date: -1 } }).fetch();
  }
});

export const insert = new ValidatedMethod({
  name: "timesheets.insert",
  validate: new SimpleSchema({
    timesheet: { type: String }
  }).validator(),
  run({timesheet}) {
    const entries = Meteor.wrapAsync(csv.parse)(timesheet);
    if (entries.length < 2) {
      throw new Meteor.Error("time does not have enough rows to be parsed");
    }

    //the last entry in index spot 1 is the report id
    //popping it removes it from entries
    const headers = entries.shift();
    const reportId = entries.pop()[1];

    const existingReport = Timesheets.findOne({ reportId });
    if (existingReport) {
      throw new Meteor.Error(`Report #${reportId} has already been uploaded.`);
    }

    return entries.map(([workDate, hours, employee, job]) =>
      Timesheets.insert({
        reportId,
        date: moment(workDate, "DD/MM/YYYY").toDate(),
        hours: parseInt(hours),
        employee,
        job
      })
    );
  }
});

const TIMESHEETS_METHODS = _.pluck([insert, fetchAll], "name");

if (Meteor.isServer) {
  DDPRateLimiter.addRule(
    {
      name: name => _.contains(TIMESHEETS_METHODS, name),
      connectionId: () => true
    },
    50, // Operations per limiting interval
    1000 // Limiting interval
  );
}
