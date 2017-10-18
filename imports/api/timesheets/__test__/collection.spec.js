import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

import { Timesheets } from "../collection";

describe("collection", function() {
  it("tests the collection", () => {
    const timesheet = { job: "A", hours: 5, date: new Date(), employee: 1 };
    const callback = jest.fn();
    Timesheets.insert(timesheet, callback);
    expect(Mongo.Collection.prototype.insert).toHaveBeenCalled();
  });
});
