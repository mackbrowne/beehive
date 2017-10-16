// Framework
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

class TimesheetsCollection extends Mongo.Collection {
  insert(timesheet, callback) {
    // What will the final state of the new timesheet object be?
    const alteredTimesheet = { ...timesheet, uploaded: new Date() };
    // What is the id of the new timesheet object?
    const result = super.insert(alteredTimesheet, callback);
    return result;
  }
}

export const Timesheets = new TimesheetsCollection("Timesheets");

export default Timesheets;
